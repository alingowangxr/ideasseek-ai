# TikHub API 改造计划

## 文档信息

| 项目 | 内容 |
|------|------|
| 文档版本 | v1.0 |
| 创建日期 | 2026-02-05 |
| 作者 | Claude Code |
| 状态 | 规划中 |

---

## 1. 背景与问题分析

### 1.1 当前系统状态

**现有爬虫模块位置：**
- `lib/crawlers/douyin_new/` - 新版抖音爬虫（基于 Playwright + CDP）
- `lib/douyin_tool.py` - 旧版抖音爬虫（基于 DrissionPage）
- `lib/xiaohongshu_tool.py` - 小红书爬虫（已暂停）

**当前架构问题：**

| 问题类型 | 具体表现 | 影响 |
|---------|---------|------|
| 技术复杂度高 | 需要维护浏览器环境、处理登录状态、管理代理IP | 开发维护成本高 |
| 稳定性差 | 依赖网页结构，反爬策略变化导致失效 | 服务不可用 |
| 资源消耗大 | 浏览器自动化占用大量内存和CPU | 服务器成本高 |
| 用户门槛高 | 首次使用需要扫码登录 | 用户体验差 |
| 维护成本高 | 需要持续跟进抖音UI变化 | 长期投入大 |

### 1.2 业务需求

**核心需求：**
1. 稳定可靠的数据获取能力
2. 简化的部署和使用流程
3. 可预测的运行成本
4. 快速的开发迭代能力

### 1.3 TikHub API 方案概述

**TikHub API 是什么：**
- 专业的社交媒体数据API服务
- 提供标准化的 RESTful API 接口
- 按请求量计费的服务模式
- 24小时缓存机制降低成本

**核心优势：**
- ✅ 无需浏览器环境
- ✅ 无需处理登录和验证码
- ✅ 结构化 JSON 响应
- ✅ 稳定的 API 接口
- ✅ 简单的集成方式

---

## 2. TikHub API 技术分析

### 2.1 API 接口概览

#### 2.1.1 综合搜索接口

**端点：** `POST /api/v1/douyin/search/fetch_general_search_v1`

**域名选择：**
- 国际版：`https://api.tikhub.io`
- 中国版：`https://api.tikhub.dev`

**请求参数：**

```typescript
interface SearchRequest {
  keyword: string;           // 搜索关键词（必填）
  cursor: number;            // 翻页游标（首次传0）
  sort_type: string;         // 排序：0=综合, 1=最多点赞, 2=最新
  publish_time: string;      // 时间筛选：0=不限, 1=一天, 7=一周, 180=半年
  filter_duration: string;   // 时长筛选：0=不限, 0-1=1分钟内, 1-5=1-5分, 5-10000=5分+
  content_type: string;      // 类型筛选：0=不限, 1=视频, 2=图片, 3=文章
  search_id: string;         // 搜索ID（首次传空，翻页时使用）
  backtrace: string;         // 回溯标识（首次传空，翻页时使用）
}
```

**返回数据结构：**

```typescript
interface SearchResponse {
  code: number;
  data: Array<{
    type: number;
    aweme_info: {
      aweme_id: string;
      desc: string;
      author: {
        uid: string;
        nickname: string;
        avatar_thumb: { url_list: string[] };
      };
      statistics: {
        comment_count: number;
        digg_count: number;
        share_count: number;
        play_count: number;
      };
      video: {
        play_addr: { url_list: string[] };
        cover: { url_list: string[] };
        duration: number;
      };
      share_url: string;
    };
  }>;
  cursor: number;
  search_id: string;
  backtrace: string;
}
```

#### 2.1.2 视频评论接口

**端点：** `GET /api/v1/douyin/web/fetch_video_comments`

**请求参数：**

```typescript
interface CommentsRequest {
  aweme_id: string;    // 视频ID（必填）
  cursor: number;      // 游标（分页）
  count: number;       // 获取数量
}
```

**返回数据结构：**

```typescript
interface CommentsResponse {
  code: number;
  data: {
    comments: Array<{
      cid: string;
      text: string;
      aweme_id: string;
      create_time: number;
      digg_count: number;
      user: {
        uid: string;
        nickname: string;
        avatar_thumb: { url_list: string[] };
      };
    }>;
    cursor: number;
    has_more: boolean;
  };
}
```

### 2.2 认证与计费

**认证方式：**
```http
Authorization: Bearer vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA==
```

**计费说明：**
- 每次API请求都会产生费用
- 响应中包含计费提示信息
- 24小时缓存机制：重复访问缓存URL不收费

**缓存机制：**
```json
{
  "cache_url": "https://cache.tikhub.io/api/v1/cache/public/{cache_id}?sign={signature}",
  "cache_message": "本次请求将被缓存，有效期为24小时，访问缓存不会产生额外费用"
}
```

### 2.3 错误处理

| 状态码 | 含义 | 处理策略 |
|--------|------|----------|
| 200 | 成功 | 正常处理数据 |
| 422 | 参数错误 | 检查请求参数 |
| 429 | 请求过频 | 实施退避重试 |
| 500 | 服务器错误 | 记录日志，稍后重试 |

---

## 3. 改造方案设计

### 3.1 总体架构

**改造前后对比：**

```
【改造前】
前端 → API Routes → JobManager → DataSourceFactory
                                      ↓
                              Python爬虫 (Playwright)
                                      ↓
                                  CSV文件
                                      ↓
                              解析返回结果

【改造后】
前端 → API Routes → JobManager → DataSourceFactory
                                      ↓
                        ┌─────────────┴─────────────┐
                        ↓                           ↓
                  TikHub API Service        Python爬虫（备用）
                        ↓                           ↓
                  HTTP JSON响应              CSV文件
                        ↓                           ↓
                  直接解析返回结果            解析返回结果
```

### 3.2 新增服务模块

#### 3.2.1 TikHub API 客户端

**文件位置：** `lib/services/tikhub-client.ts`

**职责：**
- 封装 TikHub API 调用
- 处理认证和错误重试
- 实现请求缓存机制
- 监控API使用量

**接口设计：**

```typescript
interface TikHubClientConfig {
  apiToken: string;
  baseURL?: string;
  useChinaDomain?: boolean;
  timeout?: number;
  maxRetries?: number;
  enableCache?: boolean;
}

class TikHubAPIClient {
  // 搜索视频
  searchVideos(params: SearchRequest): Promise<SearchResponse>;

  // 获取评论
  getVideoComments(awemeId: string, cursor?: number, count?: number): Promise<CommentsResponse>;

  // 批量获取评论
  getVideoCommentsBatch(awemeIds: string[], maxCommentsPerVideo: number): Promise<Map<string, Comment[]>>;

  // 检查可用性
  checkHealth(): Promise<boolean>;
}
```

#### 3.2.2 TikHub 数据源服务

**文件位置：** `lib/services/tikhub-service.ts`

**职责：**
- 实现 IDataSourceService 接口
- 将 TikHub 数据转换为系统通用格式
- 处理分页和数据量控制
- 实现成本控制逻辑

**接口实现：**

```typescript
class TikHubService implements IDataSourceService {
  // 基础搜索（不含评论）
  async searchAndFetch(keyword: string, limit: number): Promise<DataSourceResult>;

  // 深度搜索（含评论）
  async searchWithComments(keyword: string, options: DeepCrawlOptions): Promise<DeepCrawlResult>;

  // 检查可用性
  async checkAvailability(): Promise<boolean>;
}
```

### 3.3 配置管理

**环境变量新增：**

```env
# TikHub API 配置
TIKHUB_API_TOKEN=your_token_here
TIKHUB_BASE_URL=https://api.tikhub.io
TIKHUB_USE_CHINA_DOMAIN=false
TIKHUB_ENABLE_CACHE=true
TIKHUB_MAX_REQUESTS_PER_MINUTE=30
TIKHUB_COST_ALERT_THRESHOLD=100
```

### 3.4 数据源工厂扩展

**修改文件：** `lib/services/data-source-factory.ts`

**新增数据源类型：**

```typescript
export type DataSourceType =
  | 'xiaohongshu'
  | 'douyin'
  | 'douyin_new'
  | 'tikhub';  // 新增

export class DataSourceFactory {
  static createDataSource(type: DataSourceType): IDataSourceService {
    switch (type) {
      case 'tikhub':
        return new TikHubServiceAdapter();
      // ... 其他类型
    }
  }

  static getSourceDisplayName(type: DataSourceType): string {
    const names = {
      'tikhub': 'TikHub API (推荐)',
      // ... 其他名称
    };
    return names[type];
  }
}
```

### 3.5 前端UI更新

**修改文件：** `src/components/AnalysisForm.tsx`

**更新内容：**
1. 数据源选择器新增 TikHub 选项
2. 添加 API 使用提示
3. 显示成本预估信息
4. 添加缓存状态指示

**UI 示例：**

```tsx
<Select>
  <Option value="tikhub">
    TikHub API (推荐) - 稳定快速，按需付费
  </Option>
  <Option value="douyin_new">
    新版抖音 (免费) - 需要扫码登录
  </Option>
  <Option value="douyin">
    旧版抖音 (免费) - 可能不稳定
  </Option>
</Select>
```

---

## 4. 实施步骤

### 阶段一：基础设施搭建（预计2-3天）

**任务清单：**

- [ ] 创建 TikHub API 客户端 (`tikhub-client.ts`)
  - [ ] 实现 HTTP 请求封装
  - [ ] 添加认证处理
  - [ ] 实现错误重试机制
  - [ ] 添加请求日志记录

- [ ] 创建 TikHub 服务 (`tikhub-service.ts`)
  - [ ] 实现 IDataSourceService 接口
  - [ ] 实现搜索功能
  - [ ] 实现评论获取功能
  - [ ] 添加数据格式转换

- [ ] 更新数据源工厂
  - [ ] 添加 'tikhub' 类型
  - [ ] 注册 TikHub 服务适配器
  - [ ] 更新显示名称映射

### 阶段二：核心功能实现（预计3-4天）

**任务清单：**

- [ ] 实现搜索接口
  - [ ] 处理搜索参数
  - [ ] 实现分页逻辑
  - [ ] 提取视频数据
  - [ ] 生成文本内容

- [ ] 实现评论接口
  - [ ] 批量获取视频评论
  - [ ] 处理评论分页
  - [ ] 提取用户信息
  - [ ] 生成评论文本

- [ ] 实现缓存机制
  - [ ] 存储缓存URL
  - [ ] 检查缓存有效期
  - [ ] 优先使用缓存数据
  - [ ] 记录缓存命中率

- [ ] 实现成本控制
  - [ ] 请求计数器
  - [ ] 成本预估计算
  - [ ] 配额限制检查
  - [ ] 成本告警机制

### 阶段三：集成与测试（预计2-3天）

**任务清单：**

- [ ] 集成到 JobManager
  - [ ] 添加 TikHub 数据源支持
  - [ ] 更新进度提示信息
  - [ ] 处理错误场景

- [ ] 更新前端组件
  - [ ] 修改 AnalysisForm 组件
  - [ ] 添加数据源说明
  - [ ] 更新错误提示

- [ ] 编写测试用例
  - [ ] 单元测试
  - [ ] 集成测试
  - [ ] 端到端测试

### 阶段四：文档与部署（预计1-2天）

**任务清单：**

- [ ] 更新项目文档
  - [ ] 更新 README.md
  - [ ] 更新 CLAUDE.md
  - [ ] 添加 API 使用指南

- [ ] 准备部署
  - [ ] 环境变量配置示例
  - [ ] 部署检查清单
  - [ ] 回滚方案

---

## 5. 技术实现细节

### 5.1 TikHub API 客户端实现

```typescript
// lib/services/tikhub-client.ts

import axios, { AxiosInstance } from 'axios';

interface TikHubConfig {
  apiToken: string;
  baseURL?: string;
  timeout?: number;
}

export class TikHubAPIClient {
  private client: AxiosInstance;
  private requestCount: number = 0;
  private costEstimate: number = 0;

  constructor(config: TikHubConfig) {
    this.client = axios.create({
      baseURL: config.baseURL || 'https://api.tikhub.io',
      timeout: config.timeout || 30000,
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async searchVideos(params: {
    keyword: string;
    cursor?: number;
    sort_type?: string;
    publish_time?: string;
  }): Promise<any> {
    this.requestCount++;
    const response = await this.client.post(
      '/api/v1/douyin/search/fetch_general_search_v1',
      {
        keyword: params.keyword,
        cursor: params.cursor || 0,
        sort_type: params.sort_type || '0',
        publish_time: params.publish_time || '0',
        filter_duration: '0',
        content_type: '1', // 仅视频
        search_id: '',
        backtrace: ''
      }
    );

    // 更新成本预估
    this.costEstimate += 0.01; // 假设每次请求0.01元

    return response.data;
  }

  async getVideoComments(
    awemeId: string,
    cursor: number = 0,
    count: number = 20
  ): Promise<any> {
    this.requestCount++;
    const response = await this.client.get(
      '/api/v1/douyin/web/fetch_video_comments',
      { params: { aweme_id: awemeId, cursor, count } }
    );

    this.costEstimate += 0.01;

    return response.data;
  }

  getUsageStats() {
    return {
      requestCount: this.requestCount,
      costEstimate: this.costEstimate
    };
  }
}
```

### 5.2 TikHub 服务实现

```typescript
// lib/services/tikhub-service.ts

import { TikHubAPIClient } from './tikhub-client';
import { IDataSourceService, DataSourceResult, DeepCrawlResult, DeepCrawlOptions } from './data-source-interface';

export class TikHubService implements IDataSourceService {
  private client: TikHubAPIClient;

  constructor() {
    const apiToken = process.env.TIKHUB_API_TOKEN || 'vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA==';
    this.client = new TikHubAPIClient({ apiToken });
  }

  async searchAndFetch(keyword: string, limit: number): Promise<DataSourceResult> {
    const rawTexts: string[] = [];
    const videos: any[] = [];

    let cursor = 0;
    let hasMore = true;

    while (hasMore && videos.length < limit) {
      const response = await this.client.searchVideos({ keyword, cursor });

      if (response.code !== 200) {
        throw new Error(`TikHub API 错误: ${response.message}`);
      }

      for (const item of response.data || []) {
        if (videos.length >= limit) break;

        const aweme = item.aweme_info;
        if (!aweme) continue;

        videos.push({
          title: aweme.desc || '',
          author: aweme.author?.nickname || '',
          video_url: aweme.share_url || '',
          publish_time: new Date().toISOString(),
          likes: aweme.statistics?.digg_count?.toString() || '0',
          comment_count: aweme.statistics?.comment_count || 0,
          aweme_id: aweme.aweme_id
        });

        if (aweme.desc && aweme.desc.length > 5) {
          rawTexts.push(aweme.desc);
        }
      }

      hasMore = response.has_more || false;
      cursor = response.cursor || 0;

      // 避免请求过快
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    return {
      rawTexts: [...new Set(rawTexts)],
      videos,
      metadata: {
        source: 'tikhub',
        usage: this.client.getUsageStats()
      }
    };
  }

  async searchWithComments(
    keyword: string,
    options: DeepCrawlOptions
  ): Promise<DeepCrawlResult> {
    // 先获取视频列表
    const { videos } = await this.searchAndFetch(keyword, options.maxVideos || 15);

    // 获取评论
    const allComments: any[] = [];
    const rawTexts: string[] = [];

    for (const video of videos) {
      const comments = await this.fetchVideoComments(
        video.aweme_id,
        options.maxCommentsPerVideo || 20
      );

      for (const comment of comments) {
        allComments.push({
          video_title: video.title,
          comment_text: comment.text,
          username: comment.user?.nickname || '',
          likes: comment.digg_count?.toString() || '0'
        });

        if (comment.text && comment.text.length > 5) {
          rawTexts.push(comment.text);
        }
      }
    }

    return {
      rawTexts: [...new Set(rawTexts)],
      videos,
      allComments,
      videoCount: videos.length,
      commentCount: allComments.length
    };
  }

  private async fetchVideoComments(
    awemeId: string,
    maxCount: number
  ): Promise<any[]> {
    const comments: any[] = [];
    let cursor = 0;
    let hasMore = true;

    while (hasMore && comments.length < maxCount) {
      const response = await this.client.getVideoComments(
        awemeId,
        cursor,
        Math.min(20, maxCount - comments.length)
      );

      if (response.code !== 200) break;

      comments.push(...(response.data?.comments || []));
      hasMore = response.data?.has_more || false;
      cursor = response.data?.cursor || 0;

      await new Promise(resolve => setTimeout(resolve, 300));
    }

    return comments;
  }

  async checkAvailability(): Promise<boolean> {
    try {
      const response = await this.client.searchVideos({ keyword: 'test', cursor: 0 });
      return response.code === 200;
    } catch {
      return false;
    }
  }
}
```

### 5.3 缓存实现方案

```typescript
// lib/services/tikhub-cache.ts

interface CacheEntry {
  url: string;
  expiresAt: number;
  data: any;
}

export class TikHubCache {
  private cache: Map<string, CacheEntry> = new Map();
  private readonly CACHE_TTL = 24 * 60 * 60 * 1000; // 24小时

  set(key: string, url: string, data: any): void {
    this.cache.set(key, {
      url,
      expiresAt: Date.now() + this.CACHE_TTL,
      data
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  hasValidCache(key: string): boolean {
    return this.get(key) !== null;
  }

  clear(): void {
    this.cache.clear();
  }

  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.entries()).map(([key, entry]) => ({
        key,
        url: entry.url,
        expiresAt: new Date(entry.expiresAt).toISOString(),
        remaining: Math.max(0, entry.expiresAt - Date.now())
      }))
    };
  }
}
```

---

## 6. 风险评估与应对

### 6.1 技术风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| API 服务不稳定 | 高 | 中 | 保留旧爬虫作为备用，实现自动切换 |
| 成本超预期 | 中 | 中 | 实施请求配额限制，添加成本告警 |
| 数据格式变化 | 中 | 低 | 版本化API接口，添加兼容层 |
| 性能问题 | 中 | 低 | 实施请求并发控制，使用缓存 |

### 6.2 业务风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| 用户接受度 | 低 | 低 | 提供免费和付费选项选择 |
| 合规性问题 | 高 | 低 | 确认API服务合规性，添加免责声明 |

### 6.3 依赖风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| TikHub 服务停运 | 高 | 低 | 保留原有爬虫代码，准备迁移方案 |
| API 价格上涨 | 中 | 中 | 监控价格变化，准备成本优化方案 |

---

## 7. 成本分析

### 7.1 预估成本

**假设条件：**
- TikHub API 定价：约 ¥0.01/请求
- 典型分析场景：3个关键词，每个关键词20个视频，每个视频30条评论

**成本计算：**

```
搜索请求：3个关键词 × 1次/关键词 = 3次请求
评论请求：20个视频 × 2次请求/视频（分页） = 40次请求
总计：43次请求 × ¥0.01 = ¥0.43/次分析
```

**月度预估（假设100次分析）：**
```
100次 × ¥0.43 = ¥43/月
```

### 7.2 成本优化策略

1. **充分利用缓存**：相同关键词查询使用缓存结果
2. **批量处理**：合并相似请求
3. **智能筛选**：仅获取高价值视频的评论
4. **配额控制**：设置每日请求上限

### 7.3 ROI 分析

| 项目 | 旧方案 | 新方案 |
|------|--------|--------|
| 开发成本 | 高（持续维护） | 低（一次性开发） |
| 运营成本 | 服务器成本高 | 按需付费 |
| 稳定性 | 低 | 高 |
| 用户体验 | 差 | 优 |

---

## 8. 测试计划

### 8.1 单元测试

**测试范围：**
- TikHubAPIClient 类
- TikHubService 类
- 缓存机制
- 数据格式转换

**测试用例示例：**

```typescript
describe('TikHubAPIClient', () => {
  it('should search videos successfully', async () => {
    const client = new TikHubAPIClient({ apiToken: 'test' });
    const result = await client.searchVideos({ keyword: '测试' });
    expect(result.code).toBe(200);
  });

  it('should handle API errors gracefully', async () => {
    const client = new TikHubAPIClient({ apiToken: 'invalid' });
    await expect(client.searchVideos({ keyword: '测试' }))
      .rejects.toThrow();
  });
});
```

### 8.2 集成测试

**测试场景：**
1. 完整的分析流程
2. 多关键词处理
3. 深度抓取模式
4. 错误恢复

### 8.3 性能测试

**测试指标：**
- 响应时间
- 并发处理能力
- 内存使用
- 成本准确性

### 8.4 用户验收测试

**测试清单：**
- [ ] 数据源选择正常
- [ ] 分析流程完整
- [ ] 结果数据正确
- [ ] 错误提示友好
- [ ] 成本信息准确

---

## 9. 部署计划

### 9.1 部署前检查

- [ ] 代码审查完成
- [ ] 所有测试通过
- [ ] 文档更新完成
- [ ] 环境变量配置
- [ ] 回滚方案准备

### 9.2 部署步骤

1. **配置环境变量**
   ```bash
   # .env.local
   TIKHUB_API_TOKEN=your_token_here
   TIKHUB_ENABLE_CACHE=true
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

4. **启动服务**
   ```bash
   npm run start
   ```

5. **验证部署**
   - 访问健康检查接口
   - 测试 TikHub 数据源
   - 检查日志输出

### 9.3 回滚方案

如果新方案出现问题，可以通过以下方式回滚：

1. 修改 `.env.local`，禁用 TikHub：
   ```
   TIKHUB_ENABLED=false
   ```

2. 前端默认选择旧数据源

3. 恢复旧版本代码（如有必要）

---

## 10. 后续优化方向

### 10.1 短期优化（1-2周）

- [ ] 添加详细的使用统计
- [ ] 优化缓存命中率
- [ ] 实现智能成本控制
- [ ] 添加性能监控

### 10.2 中期优化（1-2月）

- [ ] 支持更多 TikHub API 接口
- [ ] 实现请求队列管理
- [ ] 添加数据分析面板
- [ ] 优化批量处理性能

### 10.3 长期优化（3-6月）

- [ ] 多API源支持
- [ ] 智能数据源切换
- [ ] 自适应成本优化
- [ ] 数据质量评分

---

## 11. 附录

### 11.1 相关文档

- [TikHub API 官方文档](https://api.tikhub.io/)
- [抖音搜索接口文档](./douyin-app/Douyin-Search-API.md)
- [视频评论接口文档](./douyin-app/fetch_video_comments.md)
- [现有爬虫代码](./lib/crawlers/douyin_new/)

### 11.2 联系信息

- TikHub Discord: https://discord.gg/aMEAS8Xsvz
- 项目 GitHub: https://github.com/weiyf2/deeppoint-ai

### 11.3 变更记录

| 版本 | 日期 | 变更内容 | 作者 |
|------|------|----------|------|
| v1.0 | 2026-02-05 | 初始版本 | Claude Code |

---

**文档结束**
