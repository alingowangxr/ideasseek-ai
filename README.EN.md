English | [中文](./README.md)

# SeekMoney - User Pain Point Discoverer

![logo](./assets/logo.png)

A web application that helps indie developers automatically discover user pain points from social media, with intelligent clustering analysis and AI-powered product solution generation.

**Core Features:**
- Multi-platform data collection (Douyin, Xiaohongshu, TikTok, Bilibili, WeChat Channels, YouTube)
- Semantic clustering based on GLM embedding-3 + DBSCAN algorithm
- Deep analysis using GLM-4.6 thinking model
- Intelligent priority scoring system (demand intensity + market size + competition)
- Full bilingual support (Chinese/English)

## Features

### Pain Point Analysis Module
- **Multi-Platform Data Collection**
  - Douyin (TikTok China)
  - TikTok (International)
  - Bilibili
  - WeChat Channels
  - YouTube
  - Xiaohongshu (Little Red Book)
- **Intelligent Semantic Clustering**
  - Videos and comments clustered separately to avoid semantic confusion
  - Vector representation based on GLM embedding-3
  - DBSCAN density clustering for automatic topic discovery
  - Supports multiple embedding providers (GLM, OpenAI)
- **Deep AI Analysis** (GLM-4.6 Thinking Model)
  - Pain Depth: Surface pain → Root causes → User scenarios → Emotional intensity
  - Market Landscape: Existing solutions → Unmet needs → Opportunity analysis
  - MVP Plan: Core features → Validation hypotheses → First users → Cost estimation
  - Market size score (0-5)
- **Priority Scoring System**
  - Demand intensity: Based on cluster size and discussion热度
  - Market size: AI-evaluated market potential
  - Competition: Existing solution analysis
  - Automatic sorting by综合得分
- **Data Quality Grading**
  - exploratory (<50): Exploratory,建议进一步验证
  - preliminary (50-200): Preliminary conclusions, suitable for initial research
  - reliable (≥200): High confidence, statistically significant
- **Result Display & Export**
  - Visual table display with sorting and filtering
  - Click to view detailed source content and representative items
  - One-click CSV export
  - Raw data export (with cluster groups)

### AI Product Suggestion Module
- AI product manager role auto-generates product solutions
- Includes core features, tech stack, development roadmap
- Evaluates implementation difficulty and market potential

### Multi-language Support
- Chinese/English interface switching
- AI analysis results automatically output in the current language
- Internationalized URL routing (`/zh/`, `/en/`)
- Auto-detect browser language preference

## Data Sources

All data sources are powered by TikHub API, providing unified and stable data collection.

| Source | Platform | Description |
|--------|----------|-------------|
| Douyin | Douyin | Chinese version of TikTok, largest short video platform |
| TikTok | TikTok | International version, global users |
| Bilibili | Bilibili | Leading video sharing platform in China |
| WeChat Channels | WeChat | Short video feature within WeChat |
| YouTube | YouTube | World's largest video platform |
| Xiaohongshu | Xiaohongshu | Lifestyle sharing community |

### TikHub API Advantages
- **Multi-Platform**: One API for 6 major platforms
- **Stable & Reliable**: No crawler maintenance, avoids anti-crawling restrictions
- **Pay Per Use**: ~¥0.01/request, 24-hour cache reduces costs
- **Developer Friendly**: RESTful API with comprehensive documentation and SDKs
- **Compliance**: Official API interface, avoids legal risks

## Preview

> For more screenshots and resources, browse the [assets folder](./assets/).

<img src="./assets/demo-preview-result.png" alt="Preview" style="zoom: 63%;" />

<img src="./assets/demo-preview-result1.png" alt="Preview" style="zoom: 63%;" />

## Quick Start

### Requirements

- Node.js >= 18
- Python >= 3.10
- npm or pnpm

### 1. Install Dependencies

```bash
# Clone the project
git clone https://github.com/your-username/SeekMoney-ai.git
cd SeekMoney-ai

# Install Node.js dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Zhipu AI GLM API Configuration (Required)
# Register at: https://open.bigmodel.cn/
GLM_API_KEY=your_glm_api_key_here
GLM_MODEL_NAME=glm-4.6
GLM_EMBEDDING_MODEL=embedding-3

# TikHub API Configuration (Required)
# Register at: https://api.tikhub.io/
TIKHUB_API_TOKEN=your_tikhub_api_token_here
# Use China domain (optional)
TIKHUB_USE_CHINA_DOMAIN=false
# Enable cache (24-hour cache reduces costs)
TIKHUB_ENABLE_CACHE=true
```

### 3. Run the Project

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run start
```

Visit http://localhost:3000

## User Guide

### Pain Point Analysis (Home Page)

1. Select data source (Douyin, TikTok, Bilibili, WeChat Channels, YouTube, Xiaohongshu)
2. Enter keywords, separated by commas, e.g., `camping, beginner, gear`
3. Optionally enable video comment fetching (slower but richer data)
4. Click Start Analysis and wait for results
5. Click any row to view detailed source content, or export CSV

> **TikHub API Note**: Based on TikHub API data acquisition service, no login required, pay per use. Each analysis costs approximately ¥0.01-0.5, depending on data volume.

### AI Product Suggestions (/ai-product)

1. Enter keywords for your target domain
2. AI will analyze user feedback and generate a complete product solution
3. View product name, features, tech stack, development plan, etc.

### Language Switching

- Click the language switcher in the top right corner to switch between Chinese/English
- First visit will auto-detect browser language preference
- AI analysis results will automatically output in the current language
- You can also access directly via URL: `/zh/` or `/en/`

## Project Structure

```
SeekMoney-ai/
├── src/
│   ├── app/
│   │   ├── [locale]/             # Internationalized dynamic routes
│   │   │   ├── page.tsx          # Home - Pain Point Analysis
│   │   │   ├── ai-product/page.tsx # AI Product Suggestions
│   │   │   └── layout.tsx        # i18n layout (NextIntlClientProvider)
│   │   ├── layout.tsx            # Root layout
│   │   └── api/
│   │       ├── analyze/          # Create analysis job
│   │       ├── jobs/[jobId]/     # Query job status
│   │       ├── analyze-ai-product/
│   │       ├── ai-product-jobs/[jobId]/
│   │       └── health/           # Health check
│   ├── components/
│   │   ├── AnalysisForm.tsx      # Analysis form
│   │   ├── JobStatus.tsx         # Job status display
│   │   ├── ResultsTable.tsx      # Results table
│   │   ├── DetailModal.tsx       # Pain point detail modal
│   │   ├── LoadingAnimation.tsx  # Loading animation
│   │   ├── DataQualityBanner.tsx # Data quality indicator
│   │   ├── AIProductCard.tsx     # AI product card
│   │   ├── AIProductDetailModal.tsx
│   │   ├── ExportButton.tsx      # CSV export
│   │   ├── RawDataExportButton.tsx # Raw data export
│   │   └── LanguageSwitcher.tsx  # Language switcher
│   ├── i18n/                     # Internationalization config
│   │   ├── config.ts             # Language config (supported locales)
│   │   ├── navigation.ts         # i18n navigation utilities
│   │   └── request.ts            # Translation message loading
│   ├── messages/                 # Translation files
│   │   ├── zh.json               # Chinese translations
│   │   └── en.json               # English translations
│   ├── middleware.ts             # i18n routing middleware
│   └── lib/
│       └── design-tokens.ts      # Design system tokens
├── lib/
│   ├── crawlers/
│   │   └── douyin_new/           # New Douyin crawler module
│   ├── services/
│   │   ├── job-manager.ts        # Job management core
│   │   ├── tikhub-client.ts      # TikHub API client
│   │   ├── tikhub-service.ts     # TikHub data source service
│   │   ├── douyin-service.ts     # Douyin data service
│   │   ├── xhs-service.ts        # Xiaohongshu service (paused)
│   │   ├── glm-service.ts        # GLM LLM service
│   │   ├── clustering-service.ts # Clustering service (Python integration)
│   │   ├── priority-scoring.ts   # Priority scoring system
│   │   ├── ai-product-service.ts # AI product analysis
│   │   ├── ai-product-job-manager.ts
│   │   ├── data-source-factory.ts
│   │   └── data-source-interface.ts
│   ├── utils/
│   │   └── python-detector.ts    # Python command detection
│   ├── douyin_tool.py            # Douyin crawler script
│   ├── xiaohongshu_tool.py       # Xiaohongshu crawler script (paused)
│   └── semantic_clustering.py    # Semantic clustering (embedding + DBSCAN)
├── .env.example                  # Environment variable template
├── package.json
├── requirements.txt              # Python dependencies
└── tsconfig.json
```

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | Next.js 15 + React 19 |
| Styling | Tailwind CSS 4 |
| Internationalization | next-intl |
| Data Fetching | SWR (job status polling) |
| Backend | Next.js API Routes |
| Data Collection | TikHub API |
| AI Analysis | Zhipu GLM-4.6 (thinking model) + embedding-3 |
| Clustering Algorithm | GLM embedding-3 + DBSCAN / TypeScript native clustering |
| Task Queue | In-memory job management (supports async processing) |

## Core Architecture

### Task Processing Flow

```
User Input (keywords + data source)
    ↓
DataSourceFactory → Crawler Service
    ↓
Raw Video Data + Comment Data
    ↓
Separate Clustering (videos vs comments to avoid semantic confusion)
    ↓
Python/TS Clustering Service
  - Data Cleaning: Noise filtering, quality scoring
  - Vectorization: GLM embedding-3
  - Clustering: DBSCAN + cosine distance
    ↓
Cluster Results (with representative texts)
    ↓
GLM-4.6 Deep Analysis (per cluster)
  - Pain Depth (surface → root causes → scenarios)
  - Market Landscape (existing solutions → unmet needs)
  - MVP Plan (features → validation → timeline)
  - Market Size Score (0-5)
    ↓
Priority Scoring (demand + market + competition)
    ↓
Sorted Results → Frontend Display
```

### Design Patterns

- **Factory Pattern**: `DataSourceFactory` abstracts data sources, supports dynamic switching
- **Service Layer Pattern**: Clear business logic layering
- **Job Queue**: Asynchronous processing with status polling support
- **Adapter Pattern**: Unified interface for different platform APIs

## API Configuration

### TikHub API (Recommended)

**Sign Up**: https://api.tikhub.io/

**Features**:
- Multi-platform support: Douyin, Xiaohongshu, TikTok, Bilibili, WeChat Channels, YouTube
- Stable & reliable: API interface, no anti-crawling risks
- Pay per use: ~¥0.01/request
- 24-hour cache: Free repeat requests
- Usage monitoring: Supports `getUsageStats()` method

**Configuration Example**:
```env
TIKHUB_API_TOKEN=your_tikhub_api_token_here
TIKHUB_USE_CHINA_DOMAIN=false  # Use China domain
TIKHUB_ENABLE_CACHE=true       # Enable 24-hour cache
```

### Zhipu AI GLM (Required)

**Sign Up**: https://open.bigmodel.cn/

**Model Description**:
- `glm-4.6`: Latest thinking model with deep reasoning capabilities
- `embedding-3`: Semantic vector model for clustering

**Configuration Example**:
```env
GLM_API_KEY=your_glm_api_key_here
GLM_MODEL_NAME=glm-4.6
GLM_EMBEDDING_MODEL=embedding-3
```

## FAQ

### Q: How much does TikHub API cost?
A: TikHub API charges per request, approximately ¥0.01/request. A typical analysis (3 keywords, 20 videos, 30 comments per video) costs about ¥0.5. Supports 24-hour caching, repeat access is free.

### Q: Why is TikHub API recommended?
A:
- **Stability**: API interface, no anti-crawling risks
- **Multi-platform**: One API for 6 major platforms
- **Speed**: Fast response, no page loading wait
- **Cost**: Pay per use, ~¥0.01/request
- **Compliance**: Official API interface, avoids legal risks
- **Cache**: 24-hour cache, free repeat requests

### Q: How to deploy on a server?
A:
1. Ensure TikHub API Token and GLM API Key are configured
2. Ensure Node.js and Python environments are installed
3. Run `npm run build && npm start`

### Q: Too few or too many clustering results?
A:
- **Too few**: Try more keywords, or lower the `minClusterSize` parameter
- **Too many**: Increase keyword specificity, or raise the `eps` parameter (clustering distance threshold)

### Q: Which platforms are supported?
A: Currently supports 6 platforms: Douyin, TikTok, Bilibili, WeChat Channels, YouTube, Xiaohongshu. All data sources are powered by TikHub API.

### Q: What does data quality grading mean?
A:
- **exploratory (<50)**: Small sample size,建议进一步验证
- **preliminary (50-200)**: Medium confidence, suitable for initial research
- **reliable (≥200)**: High confidence, statistically significant

## Roadmap

### Completed
- [x] TikHub API data source support (6 platforms)
- [x] Pain point clustering analysis
- [x] AI product solution generation
- [x] Deep crawling (with comments)
- [x] Multi-language support (Chinese/English)
- [x] Data quality grading
- [x] Priority scoring system
- [x] Raw data export

### Planned
- [ ] User history record saving
- [ ] More data sources (Zhihu, Weibo, Instagram)
- [ ] Trend analysis features
- [ ] Competitor analysis module
- [ ] Database persistence
- [ ] User authentication system
- [ ] Team collaboration features

## License

This project is licensed under the MIT License.
