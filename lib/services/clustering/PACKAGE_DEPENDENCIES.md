# TypeScript 语义聚类 - npm 包依赖

## 核心依赖

```json
{
  "dependencies": {
    "openai": "^4.73.0",
    "density-clustering": "^2.1.0",
    "ml-distance": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

## 依赖说明

### 1. openai (^4.73.0)

**用途**: OpenAI Embedding API 客户端

**功能**:
- `text-embedding-3-small`: 512 维，¥0.10/1M tokens
- `text-embedding-3-large`: 3072 维，¥0.65/1M tokens
- 批处理支持: 最多 100 条/请求
- 自动重试和错误处理

**安装**:
```bash
npm install openai
```

**替代方案**: 如果不想使用 OpenAI，可以只使用智谱AI，不需要这个包。

### 2. density-clustering (^2.1.0)

**用途**: DBSCAN 聚类算法实现

**功能**:
- DBSCAN 算法
- OPTICS 算法
- 支持自定义距离矩阵
- 噪声点检测

**安装**:
```bash
npm install density-clustering
```

**替代方案**:
- `dbscan@^2.0.0` - 另一个 DBSCAN 实现
- 自实现 DBSCAN (代码约 50 行)

### 3. ml-distance (^4.0.0)

**用途**: 向量距离计算 (余弦相似度等)

**功能**:
- 余弦距离
- 欧氏距离
- 曼哈顿距离
- 其他常见距离度量

**安装**:
```bash
npm install ml-distance
```

**替代方案**:
- 自实现余弦距离 (约 10 行代码)
- 使用 `ml-matrix` 进行矩阵运算

## 可选依赖

### ml-matrix (^6.10.0)

**用途**: 矩阵运算优化

**何时需要**:
- 大规模数据集 (>10000 条文本)
- 需要矩阵分解/PCA
- 高性能计算场景

**安装**:
```bash
npm install ml-matrix
```

### @xenova/transformers (^2.0.0)

**用途**: 完全离线的本地 Embedding

**何时需要**:
- 数据隐私要求
- 完全离线运行
- 零 API 成本

**权衡**:
- ✅ 完全离线
- ✅ 零 API 成本
- ❌ 质量较低
- ❌ 速度较慢
- ❌ 首次下载模型 (~100MB)

**安装**:
```bash
npm install @xenova/transformers
```

## 最小化依赖方案

如果要最小化依赖，可以只安装:

```json
{
  "dependencies": {
    "openai": "^4.73.0",
    "density-clustering": "^2.1.0"
  }
}
```

然后自实现余弦距离:

```typescript
// 替代 ml-distance 的简单实现
function cosineDistance(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return 1 - (dotProduct / (Math.sqrt(normA) * Math.sqrt(normB)));
}
```

## 完整 package.json

```json
{
  "name": "deeppoint-clustering",
  "version": "1.0.0",
  "description": "Semantic clustering service with multi-provider embedding support",
  "main": "lib/services/clustering/index.ts",
  "scripts": {
    "test": "jest",
    "build": "tsc",
    "dev": "ts-node"
  },
  "dependencies": {
    "openai": "^4.73.0",
    "density-clustering": "^2.1.0",
    "ml-distance": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.9.0"
  }
}
```

## 与 Python 依赖对比

### Python (当前)

```
numpy>=1.24.0
scikit-learn>=1.3.0
python-dotenv>=1.0.0
```

### TypeScript (新)

```
openai (^4.73.0)
density-clustering (^2.1.0)
ml-distance (^4.0.0)
```

### 对比

| 方面 | Python | TypeScript |
|------|--------|------------|
| 依赖数量 | 3 | 3 |
| 包管理器 | pip | npm |
| 虚拟环境 | venv | 无需 |
| 运行时 | Python 3.8+ | Node.js 18+ |

## 安装步骤

### 1. 安装依赖

```bash
cd D:\deeppoint-ai-main
npm install openai density-clustering ml-distance
```

### 2. 配置环境变量

在 `.env.local` 中添加:

```bash
# Embedding 提供商
EMBEDDING_PROVIDER=auto

# OpenAI (推荐)
OPENAI_API_KEY=sk-xxx
OPENAI_EMBEDDING_MODEL=text-embedding-3-small

# 智谱AI (备选)
GLM_API_KEY=xxx
GLM_EMBEDDING_MODEL=embedding-3
```

### 3. 验证安装

```bash
# 验证 Node.js 版本
node --version  # 应该 >= 18.0.0

# 验证 npm 版本
npm --version

# 验证依赖安装
ls node_modules | grep -E "openai|density|ml-distance"
```

## 移除 Python 依赖

迁移完成后，可以移除 Python 依赖:

```bash
# 移除 Python 虚拟环境 (可选)
rm -rf venv

# 移除 requirements.txt (可选)
rm requirements.txt
```

**注意**: 如果其他模块仍使用 Python，请保留 Python 依赖。

## 总结

| 依赖包 | 大小 | 必需 | 用途 |
|--------|------|------|------|
| openai | ~500KB | 是* | Embedding API |
| density-clustering | ~20KB | 是 | DBSCAN 算法 |
| ml-distance | ~50KB | 可选 | 距离计算 |
| **总计** | **~570KB** | - | - |

* 如果只用智谱AI，可以不安装 openai
