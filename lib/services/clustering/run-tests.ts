#!/usr/bin/env node
// ==================== 测试运行器 ====================
// 运行语义聚类服务的所有测试

import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

// 加载环境变量
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../../../.env.local') });

// 导入测试
import {
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
} from './ClusteringService.test';

// 解析命令行参数
const args = process.argv.slice(2);
const testType = args[0] || 'all';

async function main() {
  console.log('\n🧪 SeekMoney AI - 语义聚类服务测试\n');

  // 检查环境变量
  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasZhipuAI = !!process.env.GLM_API_KEY;

  if (!hasOpenAI && !hasZhipuAI) {
    console.log('⚠️  未检测到 API 密钥配置');
    console.log('⚠️  只运行快速测试（单元测试）');
    console.log('⚠️  要运行完整测试，请在 .env.local 中配置:');
    console.log('     - OPENAI_API_KEY (推荐)');
    console.log('     - GLM_API_KEY (备选)\n');
  }

  let result;

  switch (testType) {
    case 'quick':
      console.log('运行快速测试...\n');
      result = await runQuickTests();
      break;

    case 'unit':
      console.log('运行单元测试...\n');
      result = await Promise.all([
        testDataCleaning_NoiseFilter(),
        testDataCleaning_QualityScore(),
        testDataCleaning_Batch(),
        testCosineDistance()
      ]);
      break;

    case 'integration':
      if (!hasOpenAI && !hasZhipuAI) {
        console.error('❌ 集成测试需要 API 密钥');
        process.exit(1);
      }
      console.log('运行集成测试...\n');
      result = await Promise.all([
        testFullClustering(),
        testSimilarTextClustering(),
        testParameterTuning()
      ]);
      break;

    case 'comparison':
      if (!hasOpenAI || !hasZhipuAI) {
        console.error('❌ 对比测试需要同时配置 OPENAI_API_KEY 和 GLM_API_KEY');
        process.exit(1);
      }
      console.log('运行提供商对比测试...\n');
      result = await testProviderComparison();
      break;

    case 'all':
    default:
      console.log('运行所有测试...\n');
      result = await runAllTests();
      break;
  }

  // 根据结果设置退出码
  if (result && typeof result === 'object' && 'failed' in result) {
    process.exit(result.failed > 0 ? 1 : 0);
  } else if (Array.isArray(result)) {
    const failed = result.filter(r => r !== true).length;
    process.exit(failed > 0 ? 1 : 0);
  } else {
    process.exit(0);
  }
}

main().catch(error => {
  console.error('❌ 测试运行出错:', error);
  process.exit(1);
});
