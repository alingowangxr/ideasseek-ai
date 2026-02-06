# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SeekMoney (找商机：用户痛点发现器) is a full-stack web application that helps indie developers and product managers automatically discover user pain points from Chinese social media platforms using AI-powered semantic clustering and deep analysis.

**Core Functionality:**
- Crawls user-generated content from multiple platforms (Douyin, Xiaohongshu, TikTok, Bilibili, WeChat, YouTube)
- Performs semantic clustering using GLM embedding-3 + DBSCAN algorithm (Python) or TypeScript clustering
- Generates deep pain point analysis using GLM-4.6 thinking model
- Scores business opportunity priority based on demand, market size, and competition
- Supports Chinese/English with full internationalization

## Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint

# Tests
npm test                 # Run clustering tests
npm run test:quick       # Run quick clustering tests

# Python Dependencies
pip install -r requirements.txt
```

## Required Environment Variables

Create `.env.local` with:

```env
# Required: Zhipu AI GLM API
GLM_API_KEY=your_glm_api_key_here
GLM_MODEL_NAME=glm-4.6
GLM_EMBEDDING_MODEL=embedding-3

# Required: TikHub API
TIKHUB_API_TOKEN=your_tikhub_api_token_here
TIKHUB_USE_CHINA_DOMAIN=false
TIKHUB_ENABLE_CACHE=true
```

Get API keys from:
- Zhipu AI: https://open.bigmodel.cn/
- TikHub: https://api.tikhub.io/

## Architecture Overview

### Job Processing Pipeline

The application uses an asynchronous job-based architecture:

1. **Job Creation** (`lib/services/job-manager.ts`): Creates UUID-tracked jobs via `/api/analyze`
2. **Data Collection**: TikHub API fetches video/comment data from social platforms
3. **Data Cleaning**: Noise filtering and quality scoring in `lib/semantic_clustering.py`
4. **Semantic Clustering**: Embedding-3 + DBSCAN via Python subprocess or TypeScript
5. **AI Analysis**: GLM-4.6 deep analysis of each cluster
6. **Priority Scoring**: Multi-factor business opportunity assessment
7. **Result Polling**: Frontend uses SWR to poll `/api/jobs/[jobId]`

### Key Design Patterns

**Factory Pattern** (`lib/services/data-source-factory.ts`):
- Abstracts data sources behind `IDataSourceService` interface
- Supports: `tikhub` (Douyin), `tiktok`, `bilibili`, `wechat`, `youtube`, `xiaohongshu`
- All data sources use TikHub API internally
- Use `DataSourceFactory.createDataSource(type)` to get appropriate service

**Service Layer Organization**:
- `job-manager.ts`: Central orchestration of the complete analysis pipeline
- `tikhub-client.ts`: TikHub API client with caching and cost tracking
- `tikhub-service.ts`: TikHub Douyin data source service implementation
- `tiktok-service.ts`: TikTok data source service
- `bilibili-service.ts`: Bilibili data source service
- `wechat-service.ts`: WeChat Channels data source service
- `youtube-service.ts`: YouTube data source service
- `xhs-service.ts`: Xiaohongshu data source service
- `glm-service.ts`: Zhipu AI API integration with thinking model support
- `clustering-service.ts`: TypeScript wrapper for Python semantic clustering
- `priority-scoring.ts`: Business priority calculation

### Internationalization Architecture

- URL-based routing with locale prefix: `/zh/`, `/en/`
- `next-intl` for translation management
- `src/middleware.ts`: Auto-detects browser language, always shows locale prefix
- Translation files: `src/messages/zh.json`, `src/messages/en.json`
- AI analysis respects current locale via `job.locale` parameter

### Data Flow

```
User Input (keywords + data source)
    ↓
DataSourceFactory → Crawler Service
    ↓
Raw Video Data + Comment Data
    ↓
Separate Clustering (videos vs comments to avoid semantic层次混淆)
    ↓
Python: semantic_clustering.py
  - DataCleaner: Noise filtering, quality scoring
  - ZhipuEmbedding: Get embeddings via GLM API
  - SemanticClusterer: DBSCAN with cosine distance
    ↓
Cluster Results (with representative texts)
    ↓
GLM-4.6 Analysis (per cluster)
  - Pain depth (surface → root causes → scenarios)
  - Market landscape (existing solutions → unmet needs)
  - MVP plan (features → validation → timeline)
  - Market size score (0-5)
    ↓
Priority Scoring (demand + market + competition)
    ↓
Sorted Results → Frontend Display
```

### Python Integration

Python scripts are invoked via `spawn()` subprocess with JSON over stdin/stdout:

- `lib/semantic_clustering.py`: Main clustering service
  - Accepts parameters: `--stdin`, `--min-length`, `--eps`, `--min-samples`
  - Returns JSON with clusters, representative texts
  - Auto-calculates DBSCAN parameters based on data size if not specified

- `lib/services/clustering/`: TypeScript clustering service (alternative to Python)

### Data Quality Grading

The system automatically grades data reliability:
- **exploratory** (<50 items): Small sample, results should be validated
- **preliminary** (50-200 items): Medium confidence, good for initial research
- **reliable** (≥200 items): High confidence, statistically significant

### Clustering Behavior

- Videos and comments are clustered **separately** to avoid mixing different semantic levels
- Video clusters appear first in results, followed by comment clusters
- Minimum cluster size: 3 items (for statistical significance)
- Python automatically calculates `min_samples` based on data size if not specified
- Fallback clustering uses keyword matching if Python service fails
- **Two clustering options available**:
  - **Python** (`lib/semantic_clustering.py`): GLM embeddings + DBSCAN, called via subprocess
  - **TypeScript** (`lib/services/clustering/`): Native clustering with OpenAI/GLM embeddings

## API Routes

- `POST /api/analyze`: Create new analysis job (returns 202 with jobId)
- `GET /api/jobs/[jobId]`: Poll job status and results (used by SWR)

## Data Sources Status

All data sources are powered by TikHub API:

| Source | Platform | Notes |
|--------|----------|-------|
| `tikhub` | Douyin (抖音) | Chinese TikTok, largest short video platform |
| `tiktok` | TikTok | International version, global users |
| `bilibili` | Bilibili (B站) | Leading video sharing platform in China |
| `wechat` | WeChat Channels (微信视频号) | Short video feature within WeChat |
| `youtube` | YouTube | World's largest video platform |
| `xiaohongshu` | Xiaohongshu (小红书) | Lifestyle sharing community |

**TikHub API Advantages:**
- Stable, fast, pay-per-use (~¥0.01/request)
- 24-hour cache reduces costs
- No login or browser automation required
- Official API, legal and compliant

## Component Structure

- `AnalysisForm.tsx`: Keyword input, data source selection, deep crawl toggle
- `JobStatus.tsx`: Real-time job progress with SWR polling
- `ResultsTable.tsx`: Sortable results with priority indicators
- `DetailModal.tsx`: Full cluster analysis with representative texts
- `DataQualityBanner.tsx`: Visual indicator of data reliability level
- `ExportButton.tsx`: CSV export of analysis results
- `RawDataExportButton.tsx`: Export raw crawler data and clustered groups

## Important Notes

- **TikHub API**: All data sources use TikHub API - stable, no login required, pay-per-use. 24-hour cache reduces costs.
- **Cost Monitoring**: TikHub API has usage tracking via `getUsageStats()` method.
- **Clustering Parameters**: The Python script auto-calculates optimal DBSCAN parameters. Only override if you understand the impact.
- **Server Deployment**: No special configuration needed - just ensure API keys are set.

## License Considerations

- Main project: MIT License

## Frontend State Management

- **SWR**: Used for polling job status (`/api/jobs/[jobId]`)
- **React State**: Local component state for forms and UI
- **URL Params**: Locale and other routing state
- **No Global State**: Application uses direct API calls with SWR, no Redux/Zustand
