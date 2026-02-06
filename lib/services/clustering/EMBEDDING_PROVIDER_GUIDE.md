# 多 Embedding 提供商使用指南

## 概述

新的 Embedding 架构支持多种提供商，可以灵活切换、成本优化和实现备用机制。

### 支持的提供商

| 提供商 | 模型 | 维度 | 成本 (¥/1M tokens) | 速度 | 批处理 |
|--------|------|------|-------------------|------|--------|
| **OpenAI** | text-embedding-3-small | 512 | ¥0.10 | 50-100ms | 100条/批 |
| **OpenAI** | text-embedding-3-large | 3072 | ¥0.65 | 50-100ms | 100条/批 |
| **智谱AI** | embedding-3 | 1024 | ¥0.50 | 200-500ms | 1条/请求 |

## 快速开始

### 1. 环境变量配置

在 `.env.local` 中添加：

```bash
# Embedding 提供商选择: 'auto' | 'openai' | 'zhipuai'
EMBEDDING_PROVIDER=auto

# OpenAI 配置
OPENAI_API_KEY=sk-xxx
OPENAI_EMBEDDING_MODEL=text-embedding-3-small

# 智谱AI 配置
GLM_API_KEY=xxx
GLM_EMBEDDING_MODEL=embedding-3
```

### 2. 基本使用

```typescript
import { createEmbeddingProvider, createConfigFromEnv } from './lib/services/clustering/EmbeddingProvider';

// 从环境变量创建
const provider = createEmbeddingProvider(createConfigFromEnv());

// 获取 embeddings
const texts = ["文本1", "文本2", "文本3"];
const embeddings = await provider.getEmbeddings(texts);

console.log(embeddings); // [[0.1, 0.2, ...], [0.3, 0.4, ...], ...]
```

## 使用场景

### 场景 1: 成本优化 (推荐 OpenAI)

```typescript
const provider = createEmbeddingProvider({
  type: 'openai',
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'text-embedding-3-small' // 成本最低
  }
});

// 成本对比
// OpenAI: ¥0.10 / 1M tokens
// 智谱AI: ¥0.50 / 1M tokens
// 节省: 80%
```

### 场景 2: 高质量需求 (使用 large 模型)

```typescript
const provider = createEmbeddingProvider({
  type: 'openai',
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'text-embedding-3-large' // 3072 维度，更高质量
  }
});
```

### 场景 3: 自动降级 (auto 模式)

```typescript
const provider = createEmbeddingProvider({
  type: 'auto',
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'text-embedding-3-small'
  },
  zhipuai: {
    apiKey: process.env.GLM_API_KEY!,
    model: 'embedding-3'
  },
  enableFallback: true
});

// 自动逻辑:
// 1. 优先使用 OpenAI (成本低、速度快)
// 2. OpenAI 不可用时自动切换到智谱AI
// 3. 确保服务可用性
```

### 场景 4: A/B 测试

```typescript
import { createEmbeddingProvider } from './lib/services/clustering/EmbeddingProvider';

// 创建两个提供商
const openaiProvider = createEmbeddingProvider({
  type: 'openai',
  openai: { apiKey: process.env.OPENAI_API_KEY! }
});

const zhipuaiProvider = createEmbeddingProvider({
  type: 'zhipuai',
  zhipuai: { apiKey: process.env.GLM_API_KEY! }
});

// 对比测试
const texts = ["测试文本1", "测试文本2", "测试文本3"];

const [openaiResults, zhipuaiResults] = await Promise.all([
  openaiProvider.getEmbeddings(texts),
  zhipuaiProvider.getEmbeddings(texts)
]);

// 比较结果
console.log('OpenAI dimension:', openaiResults[0].length); // 512
console.log('ZhipuAI dimension:', zhipuaiResults[0].length); // 1024

// 比较统计
console.log('OpenAI stats:', openaiProvider.getStats());
console.log('ZhipuAI stats:', zhipuaiProvider.getStats());
```

## 成本对比分析

### 小规模使用 (1000 条文本/月)

| 提供商 | 成本 |
|--------|------|
| OpenAI text-embedding-3-small | ~¥0.001 |
| OpenAI text-embedding-3-large | ~¥0.007 |
| 智谱AI embedding-3 | ~¥0.005 |

**推荐**: OpenAI text-embedding-3-small (最便宜)

### 中等规模 (10,000 条文本/月)

| 提供商 | 成本 |
|--------|------|
| OpenAI text-embedding-3-small | ~¥0.01 |
| OpenAI text-embedding-3-large | ~¥0.07 |
| 智谱AI embedding-3 | ~¥0.05 |

**推荐**: OpenAI text-embedding-3-small

### 大规模 (100,000 条文本/月)

| 提供商 | 成本 |
|--------|------|
| OpenAI text-embedding-3-small | ~¥0.10 |
| OpenAI text-embedding-3-large | ~¥0.65 |
| 智谱AI embedding-3 | ~¥0.50 |

**推荐**: OpenAI text-embedding-3-small

## 性能对比

### 速度对比 (100 条文本)

| 提供商 | 时间 |
|--------|------|
| OpenAI | ~10-20秒 |
| 智谱AI | ~50-100秒 |

**OpenAI 快 5 倍**

### 批处理效率

| 提供商 | 批大小 | 请求数 (100条) |
|--------|--------|----------------|
| OpenAI | 100 | 1 |
| 智谱AI | 1 | 100 |

## 迁移指南

### 从纯智谱AI 迁移

**之前 (Python)**:
```python
from semantic_clustering import ZhipuEmbedding

embedder = ZhipuEmbedding(api_key="xxx")
embeddings = embedder.get_embeddings(texts)
```

**之后 (TypeScript) - 保持使用智谱AI**:
```typescript
import { createEmbeddingProvider } from './lib/services/clustering/EmbeddingProvider';

const provider = createEmbeddingProvider({
  type: 'zhipuai',
  zhipuai: { apiKey: 'xxx' }
});
const embeddings = await provider.getEmbeddings(texts);
```

**之后 (TypeScript) - 切换到 OpenAI (推荐)**:
```typescript
import { createEmbeddingProvider } from './lib/services/clustering/EmbeddingProvider';

const provider = createEmbeddingProvider({
  type: 'openai',
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'text-embedding-3-small'
  }
});
const embeddings = await provider.getEmbeddings(texts);
```

## 最佳实践

### 1. 生产环境推荐配置

```typescript
const provider = createEmbeddingProvider({
  type: 'auto', // 自动降级
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'text-embedding-3-small',
    timeout: 30000,
    maxRetries: 2
  },
  zhipuai: {
    apiKey: process.env.GLM_API_KEY!,
    model: 'embedding-3'
  },
  enableFallback: true,
  batchSize: 100
});
```

### 2. 监控成本

```typescript
// 定期获取统计信息
const stats = provider.getStats();
console.log('Estimated cost:', stats.estimatedCost, 'CNY');
console.log('Total tokens:', stats.tokenCount);
console.log('Average duration:', stats.averageDuration, 'ms');
```

### 3. 错误处理

```typescript
try {
  const embeddings = await provider.getEmbeddings(texts);
} catch (error) {
  // 如果是 auto 模式，会自动尝试其他提供商
  // 如果都失败，则抛出错误
  console.error('All providers failed:', error);

  // 可以回退到简化处理
  // 例如: 基于关键词的简单分组
}
```

## 维度差异处理

不同提供商返回的向量维度不同：

```typescript
import { createEmbeddingProvider } from './lib/services/clustering/EmbeddingProvider';

const openai = createEmbeddingProvider({ type: 'openai', openai: { apiKey: 'xxx' } });
console.log(openai.getDimension()); // 512 (small) 或 3072 (large)

const zhipuai = createEmbeddingProvider({ type: 'zhipuai', zhipuai: { apiKey: 'xxx' } });
console.log(zhipuai.getDimension()); // 1024
```

**注意**: 聚类算法会自动适应不同维度，无需手动调整。

## 故障排查

### 问题 1: OpenAI API 不可用

**解决方案**:
```typescript
// 使用 auto 模式，自动降级到智谱AI
const provider = createEmbeddingProvider({
  type: 'auto',
  openai: { apiKey: process.env.OPENAI_API_KEY! },
  zhipuai: { apiKey: process.env.GLM_API_KEY! }
});
```

### 问题 2: 成本过高

**解决方案**:
```typescript
// 切换到 text-embedding-3-small
const provider = createEmbeddingProvider({
  type: 'openai',
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    model: 'text-embedding-3-small' // 而非 large
  }
});
```

### 问题 3: 速度太慢

**解决方案**:
```typescript
// 使用 OpenAI (比智谱AI 快 5 倍)
const provider = createEmbeddingProvider({
  type: 'openai',
  openai: { apiKey: process.env.OPENAI_API_KEY! }
});
```

## 总结

| 场景 | 推荐方案 | 理由 |
|------|----------|------|
| 成本敏感 | OpenAI text-embedding-3-small | 便宜 80% |
| 质量优先 | OpenAI text-embedding-3-large | 最高质量 |
| 速度优先 | OpenAI | 快 5 倍 |
| 可靠性优先 | auto 模式 | 自动降级 |
| 国内网络 | 智谱AI | 国内访问稳定 |
