# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SeekMoney (找商机：用户痛点发现器) is a full-stack web application that helps indie developers and product managers automatically discover user pain points from Chinese social media platforms using AI-powered semantic clustering and deep analysis.

**Core Functionality:**
- Crawls user-generated content from Douyin (TikTok China) and Xiaohongshu (Little Red Book)
- Performs semantic clustering using GLM embedding-3 + DBSCAN algorithm
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

# Python Dependencies
pip install -r requirements.txt

# For new Douyin crawler (Playwright-based)
playwright install chromium
```

## Required Environment Variables

Create `.env.local` with:

```env
# Required: Zhipu AI GLM API
GLM_API_KEY=your_glm_api_key_here
GLM_MODEL_NAME=glm-4.6
GLM_EMBEDDING_MODEL=embedding-3

# Recommended: TikHub API (stable data source)
TIKHUB_API_TOKEN=your_tikhub_api_token_here
TIKHUB_USE_CHINA_DOMAIN=false
TIKHUB_ENABLE_CACHE=true

# Optional: Browser mode (false for dev, true for production)
HEADLESS=false
```

Get API keys from:
- Zhipu AI: https://open.bigmodel.cn/
- TikHub: https://api.tikhub.io/

## Architecture Overview

### Job Processing Pipeline

The application uses an asynchronous job-based architecture:

1. **Job Creation** (`lib/services/job-manager.ts`): Creates UUID-tracked jobs via `/api/analyze`
2. **Data Collection**: Python crawlers fetch video/comment data from social platforms
3. **Data Cleaning**: Noise filtering and quality scoring in `lib/semantic_clustering.py`
4. **Semantic Clustering**: Embedding-3 + DBSCAN via Python subprocess
5. **AI Analysis**: GLM-4.6 deep analysis of each cluster
6. **Priority Scoring**: Multi-factor business opportunity assessment
7. **Result Polling**: Frontend uses SWR to poll `/api/jobs/[jobId]`

### Key Design Patterns

**Factory Pattern** (`lib/services/data-source-factory.ts`):
- Abstracts data sources behind `IDataSourceService` interface
- Supports: `tikhub` (API-based, recommended), `xiaohongshu`, `douyin` (legacy), `douyin_new` (Playwright+CDP)
- Use `DataSourceFactory.createDataSource(type)` to get appropriate service

**Service Layer Organization**:
- `job-manager.ts`: Central orchestration of the complete analysis pipeline
- `tikhub-client.ts`: TikHub API client with caching and cost tracking
- `tikhub-service.ts`: TikHub data source service implementation
- `glm-service.ts`: Zhipu AI API integration with thinking model support
- `clustering-service.ts`: TypeScript wrapper for Python semantic clustering
- `priority-scoring.ts`: Business priority calculation
- Individual data source services: `xhs-service.ts`, `douyin-service.ts`, `douyin-new-service.ts`

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

- `lib/douyin_tool.py`: Legacy Douyin crawler (DrissionPage-based)
- `lib/xiaohongshu_tool.py`: Xiaohongshu crawler (currently disabled due to ban risk)
- `lib/crawlers/douyin_new/`: New Douyin crawler (Playwright + CDP, better anti-detection)

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

## Data Sources Status

| Source | Status | Notes |
|--------|--------|-------|
| `tikhub` | ⭐ **Recommended** | TikHub API - stable, fast, pay-per-use (~¥0.01/request) |
| `douyin_new` | ✅ Available | Playwright + CDP, best anti-detection, requires QR login first use |
| `douyin` | ✅ Available | DrissionPage-based, simpler but more detectable |
| `xiaohongshu` | ⚠️ Paused | Causes account bans, not recommended |

## Component Structure

- `AnalysisForm.tsx`: Keyword input, data source selection, deep crawl toggle
- `JobStatus.tsx`: Real-time job progress with SWR polling
- `ResultsTable.tsx`: Sortable results with priority indicators
- `DetailModal.tsx`: Full cluster analysis with representative texts
- `DataQualityBanner.tsx`: Visual indicator of data reliability level
- `ExportButton.tsx`: CSV export of analysis results
- `RawDataExportButton.tsx`: Export raw crawler data and clustered groups

## Important Notes

- **TikHub API (Recommended)**: Stable API-based data source, no login required, pay-per-use. 24-hour cache reduces costs.
- **New Douyin First Use**: Browser window opens for QR code login. State persists automatically.
- **Crawling Speed**: Browser automation is inherently slow. Consider TikHub API for faster performance.
- **Clustering Parameters**: The Python script auto-calculates optimal DBSCAN parameters. Only override if you understand the impact.
- **Server Deployment**: Set `HEADLESS=true` for production environments, or use TikHub API (no browser needed).
- **Xiaohongshu**: Do not enable without understanding ban risks.
- **Cost Monitoring**: TikHub API has usage tracking via `getUsageStats()` method.

## License Considerations

- Main project: MIT License
- `lib/crawlers/douyin_new/`: NON-COMMERCIAL LEARNING LICENSE 1.1 (based on MediaCrawler, for non-commercial learning only)
