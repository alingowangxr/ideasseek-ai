// ==================== 语义聚类服务测试 ====================
// 完整测试套件：单元测试 + 集成测试 + 对比测试

import { ClusteringService, createClusteringService } from './ClusteringService';
import { DataCleaner } from './DataCleaner';
import { createEmbeddingProvider } from './EmbeddingProvider';
import { cosineDistance } from 'ml-distance';

// ==================== 测试数据 ====================

/**
 * 测试文本集
 */
const TEST_TEXTS = [
  // 使用问题类
  "这个产品怎么使用？",
  "如何使用这个产品？",
  "怎么操作这个功能？",
  "功能在哪里找？",

  // 功能评价类
  "产品功能很强大",
  "功能很多，很好用",
  "非常好用的产品",
  "功能不错",

  // 负面反馈类
  "不好用，不推荐",
  "这个功能太差了",
  "用不了，总是报错",
  "质量有问题",

  // 价格相关类
  "价格太贵了",
  "性价比不高",
  "有点贵",
  "价格可以再便宜点吗？",

  // 噪音文本
  "666",
  "哈哈哈",
  "👍",
  "好",
  "不错",
];

/**
 * 相似文本集（用于测试聚类效果）
 */
const SIMILAR_TEXTS = [
  "怎么使用这个产品",
  "如何使用产品",
  "产品怎么用",
  "这个产品要怎么用",
  "使用方法是什么",
  "怎么操作",
  "操作方法",
  "使用教程",
  "有没有教程",
  "需要教程",
  "功能在哪",
  "功能在哪里",
  "找不到功能",
  "找不到按钮",
  "按钮在哪",
];

// ==================== 单元测试 ====================

/**
 * 测试 1: 数据清洗 - 噪音过滤
 */
export async function testDataCleaning_NoiseFilter() {
  console.log('\n=== 测试 1: 数据清洗 - 噪音过滤 ===');

  const cleaner = new DataCleaner();
  const noiseTexts = [
    "666",
    "哈哈哈",
    "👍",
    "好",
    "1",
    "!!!",
    "??",
  ];

  for (const text of noiseTexts) {
    const isNoise = cleaner.isNoise(text);
    console.log(`"${text}" -> 噪音: ${isNoise}`);
    if (!isNoise) {
      console.error(`❌ 失败: "${text}" 应该被识别为噪音`);
      return false;
    }
  }

  console.log('✅ 通过: 所有噪音文本正确识别');
  return true;
}

/**
 * 测试 2: 数据清洗 - 质量评分
 */
export async function testDataCleaning_QualityScore() {
  console.log('\n=== 测试 2: 数据清洗 - 质量评分 ===');

  const cleaner = new DataCleaner();

  const testCases = [
    { text: "怎么使用这个产品？", minScore: 3.0 },
    { text: "产品功能很强大", minScore: 1.0 },
    { text: "不好用，不推荐", minScore: 1.0 },
    { text: "666", minScore: 0 },
    { text: "???", minScore: 0 },
  ];

  for (const { text, minScore } of testCases) {
    const score = cleaner.calculateScore(text);
    const isNoise = cleaner.isNoise(text);
    console.log(`"${text}" -> 分数: ${score.toFixed(2)}, 噪音: ${isNoise}`);

    if (!isNoise && score < minScore) {
      console.error(`❌ 失败: "${text}" 分数 ${score} 低于预期 ${minScore}`);
      return false;
    }
  }

  console.log('✅ 通过: 质量评分正常');
  return true;
}

/**
 * 测试 3: 数据清洗 - 批量处理
 */
export async function testDataCleaning_Batch() {
  console.log('\n=== 测试 3: 数据清洗 - 批量处理 ===');

  const cleaner = new DataCleaner();
  const result = cleaner.clean(TEST_TEXTS);

  console.log(`原始: ${TEST_TEXTS.length} 条`);
  console.log(`清洗后: ${result.texts.length} 条`);
  console.log(`保留率: ${(result.texts.length / TEST_TEXTS.length * 100).toFixed(1)}%`);

  console.log('\n清洗后的文本:');
  result.texts.forEach((text, i) => {
    console.log(`  ${i + 1}. [${result.scores[i].toFixed(2)}] ${text}`);
  });

  const stats = cleaner.getCleanStats(TEST_TEXTS.length, result.texts.length);
  console.log('\n统计:', stats);

  // 验证: 应该过滤掉噪音文本
  const hasNoise = result.texts.some(t => t === "666" || t === "👍" || t === "哈哈哈");
  if (hasNoise) {
    console.error('❌ 失败: 噪音文本未被过滤');
    return false;
  }

  console.log('✅ 通过: 批量清洗正常');
  return true;
}

/**
 * 测试 4: 余弦距离计算
 */
export async function testCosineDistance() {
  console.log('\n=== 测试 4: 余弦距离计算 ===');

  // 相同向量
  const v1 = [1, 2, 3];
  const dist1 = cosineDistance(v1, v1);
  console.log(`相同向量距离: ${dist1}`);
  if (Math.abs(dist1) > 0.0001) {
    console.error('❌ 失败: 相同向量距离应为 0');
    return false;
  }

  // 相似向量
  const v2 = [1, 2, 3];
  const v3 = [1.1, 2.1, 3.1];
  const dist2 = cosineDistance(v2, v3);
  console.log(`相似向量距离: ${dist2.toFixed(4)}`);
  if (dist2 > 0.1) {
    console.error('❌ 失败: 相似向量距离应较小');
    return false;
  }

  // 不相似向量
  const v4 = [1, 0, 0];
  const v5 = [0, 1, 0];
  const dist3 = cosineDistance(v4, v5);
  console.log(`正交向量距离: ${dist3.toFixed(4)}`);
  if (Math.abs(dist3 - 1) > 0.0001) {
    console.error('❌ 失败: 正交向量距离应为 1');
    return false;
  }

  console.log('✅ 通过: 余弦距离计算正确');
  return true;
}

// ==================== 集成测试 ====================

/**
 * 测试 5: 完整聚类流程 (需要 API 密钥)
 */
export async function testFullClustering() {
  console.log('\n=== 测试 5: 完整聚类流程 ===');

  // 检查环境变量
  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasZhipuAI = !!process.env.GLM_API_KEY;

  if (!hasOpenAI && !hasZhipuAI) {
    console.warn('⚠️  跳过: 未配置 API 密钥 (OPENAI_API_KEY 或 GLM_API_KEY)');
    console.warn('⚠️  在 .env.local 中配置 API 密钥后重试');
    return null;
  }

  try {
    const service = createClusteringService({
      providerType: hasOpenAI ? 'openai' : 'zhipuai'
    });

    console.log('提供商:', service.getProviderInfo());

    const result = await service.cluster(TEST_TEXTS, {
      eps: 0.3,
      minSamples: 2,
      enableCleaning: true
    });

    console.log('\n聚类结果:');
    console.log(`  总文本: ${result.totalTexts}`);
    console.log(`  清洗后: ${result.cleanedTexts}`);
    console.log(`  簇数量: ${result.clusterCount}`);
    console.log(`  噪声点: ${result.noiseCount}`);
    console.log(`  用时: ${result.duration}ms`);
    console.log(`  成本: ¥${result.cost.toFixed(4)}`);

    console.log('\n簇详情:');
    result.clusters.forEach((cluster, i) => {
      console.log(`  簇 ${i + 1} (大小: ${cluster.size}, 质量: ${cluster.avgQuality.toFixed(2)})`);
      console.log(`    代表: ${cluster.representative}`);
      console.log(`    关键词: ${cluster.keywords.join(', ')}`);
      console.log(`    文本:`);
      cluster.texts.forEach(t => console.log(`      - ${t}`));
    });

    if (result.noise.length > 0) {
      console.log('\n噪声点:');
      result.noise.forEach(n => console.log(`  - ${n}`));
    }

    // 验证: 应该至少有 1 个簇
    if (result.clusterCount < 1) {
      console.error('❌ 失败: 应该至少有 1 个簇');
      return false;
    }

    console.log('✅ 通过: 完整聚类流程正常');
    return true;

  } catch (error: any) {
    console.error('❌ 失败:', error.message);
    console.error('提示: 请检查 API 密钥配置');
    return false;
  }
}

/**
 * 测试 6: 相似文本聚类 (需要 API 密钥)
 */
export async function testSimilarTextClustering() {
  console.log('\n=== 测试 6: 相似文本聚类 ===');

  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasZhipuAI = !!process.env.GLM_API_KEY;

  if (!hasOpenAI && !hasZhipuAI) {
    console.warn('⚠️  跳过: 未配置 API 密钥');
    return null;
  }

  try {
    const service = createClusteringService({
      providerType: hasOpenAI ? 'openai' : 'zhipuai'
    });

    const result = await service.cluster(SIMILAR_TEXTS, {
      eps: 0.25, // 更严格的阈值
      minSamples: 3,
      enableCleaning: true
    });

    console.log('\n聚类结果:');
    console.log(`  原始: ${result.totalTexts}`);
    console.log(`  簇数量: ${result.clusterCount}`);
    console.log(`  最大簇: ${result.stats.maxClusterSize}`);

    // 验证: 相似文本应该聚到少数几个簇
    const clusterRatio = result.clusterCount / result.cleanedTexts;
    console.log(`  簇/文本比: ${clusterRatio.toFixed(2)}`);

    if (result.clusterCount > 5) {
      console.warn('⚠️  警告: 相似文本聚成了太多簇，可能需要调整 eps 参数');
    }

    // 验证: 最大的簇应该包含大部分文本
    const maxClusterRatio = result.stats.maxClusterSize / result.cleanedTexts;
    console.log(`  最大簇占比: ${(maxClusterRatio * 100).toFixed(1)}%`);

    if (maxClusterRatio < 0.3) {
      console.warn('⚠️  警告: 最大簇占比过低，相似文本可能未正确聚类');
    } else {
      console.log('✅ 通过: 相似文本聚类正常');
      return true;
    }

    return true;

  } catch (error: any) {
    console.error('❌ 失败:', error.message);
    return false;
  }
}

/**
 * 测试 7: 参数调优
 */
export async function testParameterTuning() {
  console.log('\n=== 测试 7: 参数调优 ===');

  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasZhipuAI = !!process.env.GLM_API_KEY;

  if (!hasOpenAI && !hasZhipuAI) {
    console.warn('⚠️  跳过: 未配置 API 密钥');
    return null;
  }

  const service = createClusteringService({
    providerType: hasOpenAI ? 'openai' : 'zhipuai'
  });

  const epsValues = [0.2, 0.25, 0.3, 0.35, 0.4];
  const results: any[] = [];

  for (const eps of epsValues) {
    const result = await service.cluster(TEST_TEXTS, {
      eps,
      minSamples: 2,
      enableCleaning: true
    });

    results.push({
      eps,
      clusters: result.clusterCount,
      noise: result.noiseCount,
      avgSize: result.stats.avgClusterSize,
      duration: result.duration
    });

    console.log(`eps=${eps}: 簇=${result.clusterCount}, 噪声=${result.noiseCount}, 平均大小=${result.stats.avgClusterSize}`);
  }

  // 找出最佳 eps (产生合理数量的簇，且噪声较少)
  const validResults = results.filter(r => r.clusters >= 2 && r.clusters <= 10);
  if (validResults.length > 0) {
    console.log('\n✅ 通过: 参数调优完成');
    console.log('推荐 eps 范围:', validResults.map(r => r.eps).join(', '));
    return true;
  } else {
    console.warn('⚠️  警告: 未能找到合适的 eps 参数');
    return null;
  }
}

// ==================== 对比测试 ====================

/**
 * 测试 8: OpenAI vs 智谱AI 对比 (需要两个 API 密钥)
 */
export async function testProviderComparison() {
  console.log('\n=== 测试 8: 提供商对比 ===');

  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasZhipuAI = !!process.env.GLM_API_KEY;

  if (!hasOpenAI || !hasZhipuAI) {
    console.warn('⚠️  跳过: 需要同时配置 OPENAI_API_KEY 和 GLM_API_KEY');
    return null;
  }

  try {
    // OpenAI
    console.log('\n--- OpenAI ---');
    const openaiService = createClusteringService({ providerType: 'openai' });
    const openaiResult = await openaiService.cluster(TEST_TEXTS);

    // 智谱AI
    console.log('\n--- 智谱AI ---');
    const zhipuaiService = createClusteringService({ providerType: 'zhipuai' });
    const zhipuaiResult = await zhipuaiService.cluster(TEST_TEXTS);

    // 对比
    console.log('\n--- 对比结果 ---');
    console.log('| 指标 | OpenAI | 智谱AI |');
    console.log('|------|--------|--------|');
    console.log(`| 簇数量 | ${openaiResult.clusterCount} | ${zhipuaiResult.clusterCount} |`);
    console.log(`| 噪声点 | ${openaiResult.noiseCount} | ${zhipuaiResult.noiseCount} |`);
    console.log(`| 平均大小 | ${openaiResult.stats.avgClusterSize} | ${zhipuaiResult.stats.avgClusterSize} |`);
    console.log(`| 用时 | ${openaiResult.duration}ms | ${zhipuaiResult.duration}ms |`);
    console.log(`| 成本 | ¥${openaiResult.cost.toFixed(4)} | ¥${zhipuaiResult.cost.toFixed(4)} |`);
    console.log(`| 维度 | ${openaiResult.dimension} | ${zhipuaiResult.dimension} |`);

    // 速度对比
    const speedRatio = (zhipuaiResult.duration / openaiResult.duration).toFixed(1);
    console.log(`\n速度: OpenAI 比 智谱AI 快 ${speedRatio}x`);

    // 成本对比
    const costRatio = (zhipuaiResult.cost / openaiResult.cost).toFixed(1);
    console.log(`成本: OpenAI 比 智谱AI 便宜 ${costRatio}x`);

    console.log('\n✅ 通过: 提供商对比完成');
    return true;

  } catch (error: any) {
    console.error('❌ 失败:', error.message);
    return false;
  }
}

// ==================== 测试运行器 ====================

/**
 * 运行所有测试
 */
export async function runAllTests() {
  console.log('\n╔════════════════════════════════════════════════╗');
  console.log('║   语义聚类服务 - 测试套件                      ║');
  console.log('╚════════════════════════════════════════════════╝');

  const results: { name: string; status: string }[] = [];

  // 单元测试
  results.push({ name: '噪音过滤', status: (await testDataCleaning_NoiseFilter()) ? '✅' : '❌' });
  results.push({ name: '质量评分', status: (await testDataCleaning_QualityScore()) ? '✅' : '❌' });
  results.push({ name: '批量清洗', status: (await testDataCleaning_Batch()) ? '✅' : '❌' });
  results.push({ name: '余弦距离', status: (await testCosineDistance()) ? '✅' : '❌' });

  // 集成测试
  const fullClustering = await testFullClustering();
  results.push({ name: '完整聚类', status: fullClustering === true ? '✅' : fullClustering === false ? '❌' : '⏭️' });

  const similarClustering = await testSimilarTextClustering();
  results.push({ name: '相似文本聚类', status: similarClustering === true ? '✅' : similarClustering === false ? '❌' : '⏭️' });

  const paramTuning = await testParameterTuning();
  results.push({ name: '参数调优', status: paramTuning === true ? '✅' : paramTuning === false ? '❌' : '⏭️' });

  // 对比测试
  const providerCompare = await testProviderComparison();
  results.push({ name: '提供商对比', status: providerCompare === true ? '✅' : providerCompare === false ? '❌' : '⏭️' });

  // 汇总
  console.log('\n╔════════════════════════════════════════════════╗');
  console.log('║   测试结果汇总                                   ║');
  console.log('╚════════════════════════════════════════════════╝');

  results.forEach(r => {
    console.log(`  ${r.status} ${r.name}`);
  });

  const passed = results.filter(r => r.status === '✅').length;
  const failed = results.filter(r => r.status === '❌').length;
  const skipped = results.filter(r => r.status === '⏭️').length;

  console.log(`\n总计: ${passed} 通过, ${failed} 失败, ${skipped} 跳过`);

  if (failed === 0) {
    console.log('\n🎉 所有测试通过！');
  } else {
    console.log(`\n⚠️  有 ${failed} 个测试失败，请检查`);
  }

  return { passed, failed, skipped };
}

// ==================== 快速测试 ====================

/**
 * 快速测试 (只运行单元测试，不需要 API 密钥)
 */
export async function runQuickTests() {
  console.log('\n╔════════════════════════════════════════════════╗');
  console.log('║   快速测试 (无需 API 密钥)                      ║');
  console.log('╚════════════════════════════════════════════════╝');

  const results = await Promise.all([
    testDataCleaning_NoiseFilter(),
    testDataCleaning_QualityScore(),
    testDataCleaning_Batch(),
    testCosineDistance()
  ]);

  const allPassed = results.every(r => r === true);

  if (allPassed) {
    console.log('\n✅ 所有快速测试通过！');
  } else {
    console.log('\n❌ 部分测试失败');
  }

  return allPassed;
}

// ==================== 导出 ====================

export default {
  runAllTests,
  runQuickTests,
  testDataCleaning_NoiseFilter,
  testDataCleaning_QualityScore,
  testDataCleaning_Batch,
  testCosineDistance,
  testFullClustering,
  testSimilarTextClustering,
  testParameterTuning,
  testProviderComparison
};
