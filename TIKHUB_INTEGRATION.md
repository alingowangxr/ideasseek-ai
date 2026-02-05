# TikHub API 集成文档

## 概述

本文档说明了 DeepPoint AI 系统中新增的 TikHub API 集成功能，包括抖音（Douyin）和 TikTok 数据源的实现。

**更新时间**: 2025年
**API 提供商**: TikHub (https://tikhub.io)

---

## 功能特性

### 1. 抖音数据源 (TikHub Douyin API)

- 稳定的 API 数据获取，无需登录
- 支持视频搜索和评论抓取
- 支持分页获取，可获取更多数据
- 24小时缓存机制，降低成本
- 按请求计费（约 ¥0.01/次）

### 2. TikTok 数据源 (TikHub TikTok API)

- 国际版 TikTok 数据支持
- 与抖音相同的 API 结构
- 支持视频搜索和评论抓取
- 配置选项与抖音一致

---

## 架构设计

### 文件结构

```
lib/services/
├── tikhub-client.ts           # TikHub API 客户端（核心）
├── tikhub-service.ts          # 抖音数据源服务
├── tiktok-service.ts          # TikTok 数据源服务
├── data-source-interface.ts   # 通用数据源接口
└── data-source-factory.ts     # 数据源工厂

src/app/api/analyze/
└── route.ts                   # API 路由（已更新）

src/components/
└── AnalysisForm.tsx           # 前端表单（已更新）

src/messages/
├── zh.json                    # 中文翻译
└── en.json                    # 英文翻译
```

### 核心组件

#### 1. TikHubAPIClient (`tikhub-client.ts`)

封装了所有 TikHub API 调用：

**抖音方法：**
- `searchVideos()` - 搜索抖音视频
- `getVideoComments()` - 获取视频评论
- `getVideoCommentsBatch()` - 批量获取评论

**TikTok 方法：**
- `searchTiktokVideos()` - 搜索 TikTok 视频
- `getTikTokVideoComments()` - 获取 TikTok 评论
- `getTikTokVideoCommentsBatch()` - 批量获取 TikTok 评论

**功能特性：**
- 自动缓存管理（24小时 TTL）
- 使用统计跟踪
- 成本预估
- 错误处理和重试

#### 2. TikHubServiceAdapter (`tikhub-service.ts`)

抖音数据源适配器，实现 `IDataSourceService` 接口：

```typescript
class TikHubServiceAdapter implements IDataSourceService {
  async searchAndFetch(keyword: string, limit: number): Promise<DataSourceResult>
  async searchWithComments(keyword: string, options?: DeepCrawlOptions): Promise<DeepCrawlResult>
  async checkAvailability(): Promise<boolean>
}
```

#### 3. TikTokServiceAdapter (`tiktok-service.ts`)

TikTok 数据源适配器，结构相同：

```typescript
class TikTokServiceAdapter implements IDataSourceService {
  async searchAndFetch(keyword: string, limit: number): Promise<DataSourceResult>
  async searchWithComments(keyword: string, options?: DeepCrawlOptions): Promise<DeepCrawlResult>
  async checkAvailability(): Promise<boolean>
}
```

---

## 配置选项

### 抖音/TikTok 配置接口

```typescript
interface DouyinNewCrawlOptions {
  enableComments: boolean;        // 是否爬取评论
  maxVideos: number;              // 视频数量 (TikTok: 5-50, 抖音: 5-30)
  maxCommentsPerVideo: number;    // 每视频评论数 (10-100)
  enableSubComments: boolean;     // 是否爬取二级评论（仅抖音）
}
```

### 前端配置面板

**TikHub 配置（蓝色主题）：**
- API 状态指示器
- 爬取评论开关
- 视频数量滑块 (5-50)
- 每视频评论数滑块 (10-100)
- 成本预估显示

**TikTok 配置：**
- 使用相同的配置结构
- 默认启用评论爬取

---

## API 响应格式

### 搜索响应

```typescript
{
  code: 200,
  data: {
    status_code: 200,
    data: [
      {
        type: 1,
        aweme_info: {
          aweme_id: "7123456789012345678",
          desc: "视频描述/标题",
          create_time: 1234567890,
          author: {
            uid: "...",
            nickname: "用户昵称",
            avatar_thumb: { url_list: ["..."] }
          },
          statistics: {
            comment_count: 100,
            digg_count: 1000,
            share_count: 50,
            play_count: 10000,
            collect_count: 20
          },
          share_url: "https://..."
        }
      }
    ],
    cursor: 20,
    has_more: true
  }
}
```

### 评论响应

```typescript
{
  code: 200,
  data: {
    comments: [
      {
        cid: "评论ID",
        text: "评论内容",
        aweme_id: "视频ID",
        create_time: 1234567890,
        digg_count: 10,
        user: {
          uid: "用户ID",
          nickname: "用户昵称"
        }
      }
    ],
    cursor: 20,
    has_more: true,
    total: 100
  }
}
```

---

## 数据转换

### 视频数据映射

```typescript
{
  title: "视频标题",
  description: "视频描述",
  author: "作者昵称",
  video_url: "视频链接",
  publish_time: "2024-01-01T00:00:00.000Z",
  likes: "1000",
  collected_at: "2024-01-01T00:00:00.000Z",
  comment_count: 100,
  // 扩展字段
  aweme_id: "7123456789012345678",
  collected_count: "20",
  share_count: "50",
  play_count: "10000"
}
```

### 评论数据映射

```typescript
{
  video_title: "关联视频标题",
  comment_text: "评论内容",
  username: "评论用户",
  likes: "10",
  // 扩展字段
  comment_id: "评论ID",
  aweme_id: "视频ID",
  create_time: "2024-01-01T00:00:00.000Z",
  user_avatar: "头像URL"
}
```

---

## 使用示例

### 前端表单

```tsx
// 选择 TikTok 数据源
<select value="tiktok">
  <option value="tiktok">🌟 TikTok</option>
  <option value="tikhub">TikHub API (推荐)</option>
  <option value="douyin_new">抖音 - 新版</option>
</select>

// TikTok 自动使用相同配置
douyinNewConfig = {
  enableComments: true,
  maxVideos: 15,
  maxCommentsPerVideo: 20
}
```

### 后端调用

```typescript
// 创建 TikTok 数据源
const tiktokService = DataSourceFactory.createDataSource('tiktok');

// 基础搜索
const result = await tiktokService.searchAndFetch('fishing', 20);

// 深度搜索（含评论）
const deepResult = await tiktokService.searchWithComments('fishing', {
  maxVideos: 15,
  maxCommentsPerVideo: 20
});
```

---

## 关键实现细节

### 1. 分页处理

```typescript
while (hasMore && totalFetched < limit) {
  const searchResult = await client.searchVideos({
    keyword,
    cursor,
    sort_type: '0'
  });

  // 更新分页状态
  hasMore = searchResult.data.has_more === 1 || searchResult.data.has_more === true;
  cursor = searchResult.data.cursor || 0;

  totalFetched += pageItems.length;
  await new Promise(resolve => setTimeout(resolve, 500)); // 避免请求过快
}
```

### 2. 嵌套响应处理

TikHub API 返回嵌套结构，需要正确访问：

```typescript
// ✅ 正确
if (searchResult.data && searchResult.data.data && Array.isArray(searchResult.data.data)) {
  items = searchResult.data.data;
}

// ❌ 错误
items = searchResult.data; // 这是错误的数据路径
```

### 3. 评论批量获取

```typescript
const commentsMap = await client.getVideoCommentsBatch(
  awemeIds,
  maxCommentsPerVideo
);

// commentsMap 是 Map<awemeId, CommentItem[]>
for (const [awemeId, comments] of commentsMap.entries()) {
  console.log(`视频 ${awemeId} 有 ${comments.length} 条评论`);
}
```

---

## 环境变量

```bash
# .env.local
TIKHUB_API_TOKEN=your_api_token_here
TIKHUB_USE_CHINA_DOMAIN=false
TIKHUB_TIMEOUT=30000
TIKHUB_ENABLE_CACHE=true
```

### 环境变量说明

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `TIKHUB_API_TOKEN` | TikHub API 密钥 | - |
| `TIKHUB_USE_CHINA_DOMAIN` | 是否使用中国域名 | false |
| `TIKHUB_TIMEOUT` | 请求超时时间（毫秒） | 30000 |
| `TIKHUB_ENABLE_CACHE` | 是否启用缓存 | true |

---

## 成本估算

### 计费方式

- 搜索请求：约 ¥0.01/次
- 评论请求：约 ¥0.01/次

### 示例计算

```
分析成本 = (搜索次数 + 评论请求次数) × ¥0.01

示例：20个视频，每个20条评论
- 搜索次数：1次
- 评论请求：20次
- 总成本：(1 + 20) × ¥0.01 = ¥0.21
```

前端会自动显示预估成本。

---

## 调试和监控

### 使用统计

```typescript
const stats = client.getUsageStats();
console.log({
  requestCount: stats.requestCount,
  searchRequests: stats.searchRequests,
  commentsRequests: stats.commentsRequests,
  costEstimate: stats.costEstimate,
  cacheHits: stats.cacheHits,
  cacheMisses: stats.cacheMisses
});
```

### 缓存统计

```typescript
const cacheStats = client.getCacheStats();
console.log({
  size: cacheStats.size,
  hitRate: cacheStats.hitRate,
  entries: cacheStats.entries
});
```

### 日志输出

系统会在关键步骤输出日志：

```
[TikTok Service] 开始搜索关键词: fishing, 限制: 20
[TikTok Service] 搜索第 1 页, offset: 0
[TikTok API] GET /api/v1/tiktok/web/fetch_general_search
[TikTok Service] 第 1 页获取到 20 个结果, has_more: true
[TikTok Service] 搜索完成: 获取 20 个视频, 18 条文本
```

---

## 故障排除

### 常见问题

**1. 401/403 认证错误**

```
错误: TikHub API 搜索失败: 403 Forbidden
解决: 检查 TIKHUB_API_TOKEN 是否正确配置
```

**2. 评论数据为空**

```
问题: 搜索成功但评论数为 0
原因: enableComments 设置为 false
解决: 在前端打开"爬取评论"开关
```

**3. 只获取少量数据**

```
问题: 只获取到 2-3 个结果
原因: 没有实现分页或 has_more 判断错误
解决: 检查分页逻辑和数据路径
```

**4. Next.js 热重载丢失任务**

```
问题: 任务创建后查询提示"任务不存在"
原因: JobManager 实例被重新创建
解决: 使用 globalThis 单例模式（已实现）
```

---

## 数据源对比

| 特性 | TikTok API | TikHub 抖音 | 新版抖音 | 旧版抖音 |
|------|-----------|-------------|---------|---------|
| 稳定性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| 需要登录 | ❌ | ❌ | ✅ | ❌ |
| 评论支持 | ✅ | ✅ | ✅ | ✅ |
| 成本 | 按需付费 | 按需付费 | 免费 | 免费 |
| 推荐场景 | 国际市场 | 国内市场 | 测试/开发 | - |

---

## 未来扩展

### 可添加的功能

1. **二级评论支持（TikTok）**
   - 类似抖音的二级评论爬取

2. **更多筛选选项**
   - 发布时间筛选
   - 时长筛选
   - 排序方式

3. **实时监控**
   - API 使用量告警
   - 成本预算控制

4. **数据导出增强**
   - Excel 格式
   - 自定义字段选择

---

## 相关文档

- [TikHub 官方文档](https://docs.tikhub.io)
- [CLAUDE.md](./CLAUDE.md) - 项目整体架构说明
- [douyin-app/](./douyin-app/) - TikHub API 原始文档

---

## 更新日志

### 2025年 初次集成
- ✅ 添加 TikHub 抖音 API 支持
- ✅ 添加 TikTok API 支持
- ✅ 实现分页获取逻辑
- ✅ 修复嵌套响应格式处理
- ✅ 添加缓存和成本跟踪
- ✅ 更新前端 UI 和翻译
- ✅ 修复 Next.js 热重载问题

---

*本文档由 DeepPoint AI 团队维护*
