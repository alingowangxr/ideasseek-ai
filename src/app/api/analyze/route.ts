import { NextRequest, NextResponse } from 'next/server';
import { jobManager } from '../../../../lib/services/job-manager';
import { DataSourceType, TikTokCrawlOptions } from '../../../../lib/services/data-source-interface';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      keywords,
      limit = 200,
      dataSource = 'tiktok',
      deepCrawl = false,
      maxVideos = 10,
      tiktokConfig,  // TikTok/TikHub 配置
      locale = 'zh'  // 输出语言
    } = body;

    // 验证输入
    if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
      return NextResponse.json(
        { error: "关键词是必需的，且必须是非空数组" },
        { status: 400 }
      );
    }

    // 验证关键词格式
    const validKeywords = keywords.filter(k => typeof k === 'string' && k.trim().length > 0);
    if (validKeywords.length === 0) {
      return NextResponse.json(
        { error: "请提供有效的关键词" },
        { status: 400 }
      );
    }

    // 验证数据源
    let validDataSource: DataSourceType;
    if (dataSource === 'tiktok') {
      validDataSource = 'tiktok';
    } else if (dataSource === 'tikhub') {
      validDataSource = 'tikhub';
    } else {
      validDataSource = 'tiktok';  // 默认使用 TikTok
    }

    // 深度抓取支持 TikTok 和 TikHub
    const enableDeepCrawl = deepCrawl && (validDataSource === 'tiktok' || validDataSource === 'tikhub');

    // TikTok 和 TikHub 使用相同的配置结构
    let tikTokOptions: TikTokCrawlOptions | undefined;
    if (tiktokConfig) {
      tikTokOptions = {
        enableComments: tiktokConfig.enableComments ?? true,
        maxVideos: tiktokConfig.maxVideos ?? 15,
        maxCommentsPerVideo: tiktokConfig.maxCommentsPerVideo ?? 20,
        enableSubComments: tiktokConfig.enableSubComments ?? false
      };
    }

    // 创建分析任务
    console.log('[API /api/analyze] 准备创建任务:', { validKeywords, validDataSource, tikTokOptions });
    const jobId = jobManager.createJob(
      validKeywords,
      limit,
      validDataSource,
      enableDeepCrawl,
      maxVideos,
      tikTokOptions,
      locale
    );
    console.log('[API /api/analyze] 任务已创建:', jobId);

    // 立即返回任务ID，不等待任务完成
    return NextResponse.json(
      { jobId },
      { status: 202 }
    );

  } catch {
    return NextResponse.json(
      { error: "服务器内部错误" },
      { status: 500 }
    );
  }
}
