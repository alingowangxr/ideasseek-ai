// ==================== 完整语义聚类服务示例 ====================
// 集成多 Embedding 提供商 + DBSCAN 聚类

import { createEmbeddingProvider, createConfigFromEnv, IEmbeddingProvider } from './EmbeddingProvider';
import DBSCAN from 'density-clustering';
import { cosineDistance } from 'ml-distance';

// ==================== 类型定义 ====================

export interface ClusterResult {
  representative: string;
  texts: string[];
  size: number;
  avgQuality: number;
}

export interface ClusteringOptions {
  eps?: number; // DBSCAN 邻域半径
  minSamples?: number; // 最小样本数
  qualityThreshold?: number; // 质量分数阈值
}

export interface ClusteringResult {
  clusters: ClusterResult[];
  noise: string[];
  totalTexts: number;
  clusteredTexts: number;
  provider: string;
  model: string;
  dimension: number;
  duration: number;
  cost: number;
}

// ==================== 语义聚类服务 ====================

export class SemanticClusteringService {
  private embeddingProvider: IEmbeddingProvider;
  private defaultOptions: ClusteringOptions;

  constructor(
    embeddingProvider?: IEmbeddingProvider,
    options?: ClusteringOptions
  ) {
    this.embeddingProvider = embeddingProvider || createEmbeddingProvider(createConfigFromEnv());
    this.defaultOptions = {
      eps: 0.3, // 余弦距离阈值
      minSamples: 3, // 最小簇大小
      qualityThreshold: 0,
      ...options
    };
  }

  /**
   * 对文本进行语义聚类
   */
  async cluster(texts: string[], options?: ClusteringOptions): Promise<ClusteringResult> {
    const startTime = Date.now();
    const opts = { ...this.defaultOptions, ...options };

    console.log(`[Clustering] Starting with ${texts.length} texts`);
    console.log(`[Clustering] Provider: ${this.embeddingProvider.getName()}`);
    console.log(`[Clustering] Model: ${this.embeddingProvider.getModel()}`);

    // Step 1: 获取 embeddings
    console.log('[Clustering] Step 1: Getting embeddings...');
    const embeddings = await this.embeddingProvider.getEmbeddings(texts);

    // Step 2: 计算距离矩阵
    console.log('[Clustering] Step 2: Computing distance matrix...');
    const distanceMatrix = this.computeDistanceMatrix(embeddings);

    // Step 3: DBSCAN 聚类
    console.log('[Clustering] Step 3: Running DBSCAN...');
    const dbscan = new DBSCAN();
    const clusters = dbscan.train(distanceMatrix, opts.eps!, opts.minSamples!);
    const noise = dbscan.noise;

    console.log(`[Clustering] Found ${clusters.length} clusters, ${noise.length} noise points`);

    // Step 4: 整理结果
    console.log('[Clustering] Step 4: Organizing results...');
    const clusterResults: ClusterResult[] = [];

    for (let i = 0; i < clusters.length; i++) {
      const cluster = clusters[i];
      const clusterTexts = cluster.map(idx => texts[idx]);

      // 选择代表性文本 (最长或包含特定关键词)
      const representative = this.selectRepresentative(clusterTexts);

      clusterResults.push({
        representative,
        texts: clusterTexts,
        size: cluster.length,
        avgQuality: 0 // 可以添加质量评分
      });
    }

    // 按簇大小排序
    clusterResults.sort((a, b) => b.size - a.size);

    // 获取统计信息
    const stats = this.embeddingProvider.getStats();
    const duration = Date.now() - startTime;

    console.log(`[Clustering] Completed in ${duration}ms`);
    console.log(`[Clustering] Estimated cost: ¥${stats.estimatedCost.toFixed(4)}`);

    return {
      clusters: clusterResults,
      noise: noise.map(idx => texts[idx]),
      totalTexts: texts.length,
      clusteredTexts: texts.length - noise.length,
      provider: this.embeddingProvider.getName(),
      model: this.embeddingProvider.getModel(),
      dimension: this.embeddingProvider.getDimension(),
      duration,
      cost: stats.estimatedCost
    };
  }

  /**
   * 计算余弦距离矩阵
   */
  private computeDistanceMatrix(embeddings: number[][]): number[][] {
    const n = embeddings.length;
    const matrix: number[][] = [];

    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        if (i === j) {
          matrix[i][j] = 0;
        } else if (j < i) {
          matrix[i][j] = matrix[j][i]; // 对称矩阵
        } else {
          matrix[i][j] = cosineDistance(embeddings[i], embeddings[j]);
        }
      }
    }

    return matrix;
  }

  /**
   * 选择代表性文本
   */
  private selectRepresentative(texts: string[]): string {
    // 简单策略: 选择最长的文本
    return texts.reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
  }

  /**
   * 切换 Embedding 提供商
   */
  switchProvider(provider: IEmbeddingProvider): void {
    this.embeddingProvider = provider;
    console.log(`[Clustering] Switched to ${provider.getName()}`);
  }

  /**
   * 获取当前提供商信息
   */
  getProviderInfo() {
    return {
      name: this.embeddingProvider.getName(),
      model: this.embeddingProvider.getModel(),
      dimension: this.embeddingProvider.getDimension(),
      cost: this.embeddingProvider.getCostPerMillionTokens()
    };
  }

  /**
   * 获取统计信息
   */
  getStats() {
    return this.embeddingProvider.getStats();
  }
}

// ==================== 使用示例 ====================

/**
 * 示例 1: 基本使用
 */
export async function example1_basic() {
  const service = new SemanticClusteringService();

  const texts = [
    "这个产品怎么使用？",
    "如何使用这个产品？",
    "产品功能很强大",
    "功能很多，很好用",
    "不好用，不推荐",
    "价格太贵了",
    "性价比不高"
  ];

  const result = await service.cluster(texts);

  console.log('Clusters:', result.clusters);
  console.log('Noise:', result.noise);
  console.log('Duration:', result.duration, 'ms');
  console.log('Cost:', result.cost, 'CNY');
}

/**
 * 示例 2: 指定 OpenAI 提供商
 */
export async function example2_openai() {
  import { createEmbeddingProvider } from './EmbeddingProvider';

  const provider = createEmbeddingProvider({
    type: 'openai',
    openai: {
      apiKey: process.env.OPENAI_API_KEY!,
      model: 'text-embedding-3-small'
    }
  });

  const service = new SemanticClusteringService(provider);

  const texts = ["文本1", "文本2", "文本3"];
  const result = await service.cluster(texts);

  console.log(`Used ${result.provider} with ${result.dimension} dimensions`);
}

/**
 * 示例 3: 指定智谱AI 提供商
 */
export async function example3_zhipuai() {
  import { createEmbeddingProvider } from './EmbeddingProvider';

  const provider = createEmbeddingProvider({
    type: 'zhipuai',
    zhipuai: {
      apiKey: process.env.GLM_API_KEY!,
      model: 'embedding-3'
    }
  });

  const service = new SemanticClusteringService(provider);

  const texts = ["文本1", "文本2", "文本3"];
  const result = await service.cluster(texts);

  console.log(`Used ${result.provider} with ${result.dimension} dimensions`);
}

/**
 * 示例 4: 使用 Auto 模式 (自动降级)
 */
export async function example4_auto() {
  import { createEmbeddingProvider } from './EmbeddingProvider';

  const provider = createEmbeddingProvider({
    type: 'auto',
    openai: {
      apiKey: process.env.OPENAI_API_KEY!,
      model: 'text-embedding-3-small'
    },
    zhipuai: {
      apiKey: process.env.GLM_API_KEY!,
      model: 'embedding-3'
    }
  });

  const service = new SemanticClusteringService(provider);

  const texts = ["文本1", "文本2", "文本3"];
  const result = await service.cluster(texts);

  console.log(`Auto-selected provider: ${result.provider}`);
}

/**
 * 示例 5: A/B 测试两种提供商
 */
export async function example5_ab_test() {
  import { createEmbeddingProvider } from './EmbeddingProvider';

  const texts = [
    "这个产品怎么使用？",
    "如何使用这个产品？",
    "产品功能很强大",
    "不好用，不推荐"
  ];

  // OpenAI
  const openaiProvider = createEmbeddingProvider({
    type: 'openai',
    openai: {
      apiKey: process.env.OPENAI_API_KEY!,
      model: 'text-embedding-3-small'
    }
  });

  const openaiService = new SemanticClusteringService(openaiProvider);
  const openaiResult = await openaiService.cluster(texts);

  // 智谱AI
  const zhipuaiProvider = createEmbeddingProvider({
    type: 'zhipuai',
    zhipuai: {
      apiKey: process.env.GLM_API_KEY!,
      model: 'embedding-3'
    }
  });

  const zhipuaiService = new SemanticClusteringService(zhipuaiProvider);
  const zhipuaiResult = await zhipuaiService.cluster(texts);

  // 对比结果
  console.log('=== Comparison ===');
  console.log('OpenAI:', {
    clusters: openaiResult.clusters.length,
    duration: openaiResult.duration,
    cost: openaiResult.cost,
    dimension: openaiResult.dimension
  });

  console.log('ZhipuAI:', {
    clusters: zhipuaiResult.clusters.length,
    duration: zhipuaiResult.duration,
    cost: zhipuaiResult.cost,
    dimension: zhipuaiResult.dimension
  });

  console.log('Speed difference:', zhipuaiResult.duration / openaiResult.duration, 'x');
  console.log('Cost difference:', zhipuaiResult.cost / openaiResult.cost, 'x');
}

/**
 * 示例 6: 自定义聚类参数
 */
export async function example6_custom_params() {
  const service = new SemanticClusteringService();

  const texts = ["文本1", "文本2", /* ... */];

  const result = await service.cluster(texts, {
    eps: 0.25, // 更小的值 = 更严格的相似度要求
    minSamples: 5, // 更大的值 = 更大的簇
    qualityThreshold: 1.0 // 质量阈值
  });

  console.log('Custom params result:', result.clusters);
}

/**
 * 示例 7: 获取统计信息
 */
export async function example7_stats() {
  const service = new SemanticClusteringService();

  // 执行一些聚类操作
  await service.cluster(["文本1", "文本2", "文本3"]);
  await service.cluster(["文本4", "文本5", "文本6"]);

  // 获取统计信息
  const stats = service.getStats();

  console.log('Provider Stats:', {
    provider: stats.provider,
    model: stats.model,
    requestCount: stats.requestCount,
    tokenCount: stats.tokenCount,
    successCount: stats.successCount,
    failureCount: stats.failureCount,
    totalDuration: stats.totalDuration,
    averageDuration: stats.averageDuration,
    estimatedCost: stats.estimatedCost
  });
}

/**
 * 示例 8: 运行时切换提供商
 */
export async function example8_switch_provider() {
  import { createEmbeddingProvider } from './EmbeddingProvider';

  const openaiProvider = createEmbeddingProvider({
    type: 'openai',
    openai: { apiKey: process.env.OPENAI_API_KEY! }
  });

  const zhipuaiProvider = createEmbeddingProvider({
    type: 'zhipuai',
    zhipuai: { apiKey: process.env.GLM_API_KEY! }
  });

  const service = new SemanticClusteringService(openaiProvider);

  // 使用 OpenAI
  let result = await service.cluster(["文本1", "文本2"]);
  console.log('Provider:', result.provider); // "OpenAI"

  // 切换到智谱AI
  service.switchProvider(zhipuaiProvider);
  result = await service.cluster(["文本3", "文本4"]);
  console.log('Provider:', result.provider); // "ZhipuAI"
}

// ==================== API 集成示例 ====================

/**
 * Next.js API Route 示例
 */
export async function nextJsApiExample(req: Request) {
  const { texts, provider } = await req.json();

  // 根据请求选择提供商
  let embeddingProvider;
  if (provider === 'openai') {
    const { createEmbeddingProvider } = await import('./EmbeddingProvider');
    embeddingProvider = createEmbeddingProvider({
      type: 'openai',
      openai: { apiKey: process.env.OPENAI_API_KEY! }
    });
  } else if (provider === 'zhipuai') {
    const { createEmbeddingProvider } = await import('./EmbeddingProvider');
    embeddingProvider = createEmbeddingProvider({
      type: 'zhipuai',
      zhipuai: { apiKey: process.env.GLM_API_KEY! }
    });
  } else {
    // 默认使用 auto
    const { createEmbeddingProvider, createConfigFromEnv } = await import('./EmbeddingProvider');
    embeddingProvider = createEmbeddingProvider(createConfigFromEnv());
  }

  const service = new SemanticClusteringService(embeddingProvider);
  const result = await service.cluster(texts);

  return Response.json(result);
}
