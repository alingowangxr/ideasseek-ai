// 数据源工厂
import { XHSService } from './xhs-service';
import { DouyinService } from './douyin-service';
import { DouyinNewService } from './douyin-new-service';
import { TikHubServiceAdapter } from './tikhub-service';
import { TikTokServiceAdapter } from './tiktok-service';
import { IDataSourceService, DataSourceType, DataSourceResult, DeepCrawlResult, DeepCrawlOptions, DouyinNewCrawlOptions } from './data-source-interface';

// XHS服务适配器
class XHSServiceAdapter implements IDataSourceService {
  private service: XHSService;

  constructor() {
    this.service = new XHSService();
  }

  async searchAndFetch(keywords: string, limit: number): Promise<DataSourceResult> {
    const { rawTexts } = await this.service.searchNotes(keywords, limit);
    return {
      rawTexts,
      metadata: { source: 'xiaohongshu' }
    };
  }

  async checkAvailability(): Promise<boolean> {
    return await this.service.checkCookie();
  }
}

// 抖音服务适配器
class DouyinServiceAdapter implements IDataSourceService {
  private service: DouyinService;

  constructor() {
    this.service = new DouyinService();
  }

  async searchAndFetch(keywords: string, limit: number): Promise<DataSourceResult> {
    const { rawTexts, videos } = await this.service.searchVideos(keywords, limit);
    return {
      rawTexts,
      videos,
      metadata: { source: 'douyin' }
    };
  }

  async searchWithComments(keywords: string, options?: DeepCrawlOptions): Promise<DeepCrawlResult> {
    return await this.service.searchWithComments(keywords, options);
  }
}

// 新版抖音服务适配器
class DouyinNewServiceAdapter implements IDataSourceService {
  private service: DouyinNewService;
  private defaultOptions: DouyinNewCrawlOptions = {
    enableComments: true,
    maxVideos: 15,
    maxCommentsPerVideo: 20,
    enableSubComments: false
  };

  constructor() {
    this.service = new DouyinNewService();
  }

  async searchAndFetch(keywords: string, limit: number): Promise<DataSourceResult> {
    const options = { ...this.defaultOptions, maxVideos: limit };
    const { rawTexts, videos } = await this.service.searchVideos(keywords, options);
    return {
      rawTexts,
      videos,
      metadata: { source: 'douyin_new' }
    };
  }

  async searchWithComments(keywords: string, options?: DeepCrawlOptions): Promise<DeepCrawlResult> {
    const crawlOptions: DouyinNewCrawlOptions = {
      ...this.defaultOptions,
      maxVideos: options?.maxVideos || this.defaultOptions.maxVideos,
      maxCommentsPerVideo: options?.maxCommentsPerVideo || this.defaultOptions.maxCommentsPerVideo
    };
    return await this.service.searchWithComments(keywords, crawlOptions);
  }

  async searchWithFullOptions(keywords: string, options: DouyinNewCrawlOptions): Promise<DeepCrawlResult> {
    return await this.service.searchWithComments(keywords, options);
  }

  async checkAvailability(): Promise<boolean> {
    return await this.service.checkAvailability();
  }
}

// 数据源工厂类
export class DataSourceFactory {
  static createDataSource(type: DataSourceType): IDataSourceService {
    switch (type) {
      case 'xiaohongshu':
        return new XHSServiceAdapter();
      case 'douyin':
        return new DouyinServiceAdapter();
      case 'douyin_new':
        return new DouyinNewServiceAdapter();
      case 'tikhub':
        return new TikHubServiceAdapter();
      case 'tiktok':
        return new TikTokServiceAdapter();
      default:
        throw new Error(`不支持的数据源类型: ${type}`);
    }
  }

  static getSupportedSources(): DataSourceType[] {
    return ['xiaohongshu', 'douyin', 'douyin_new', 'tikhub', 'tiktok'];
  }

  static getSourceDisplayName(type: DataSourceType): string {
    const names: Record<DataSourceType, string> = {
      'xiaohongshu': '小红书',
      'douyin': '抖音',
      'douyin_new': '新版抖音',
      'tikhub': 'TikHub API (推荐)',
      'tiktok': 'TikTok API'
    };
    return names[type] || type;
  }

  static getSourceDescription(type: DataSourceType): string {
    const descriptions: Record<DataSourceType, string> = {
      'xiaohongshu': '小红书数据源（当前暂停）',
      'douyin': '旧版抖音爬虫（免费，可能不稳定）',
      'douyin_new': '新版抖音爬虫（免费，需要扫码登录）',
      'tikhub': 'TikHub API（稳定快速，按需付费）',
      'tiktok': 'TikTok API（国际版，按需付费）'
    };
    return descriptions[type] || '';
  }

  static supportsDeepCrawl(type: DataSourceType): boolean {
    // TikHub、TikTok、抖音和新版抖音都支持深度抓取
    return type === 'douyin' || type === 'douyin_new' || type === 'tikhub' || type === 'tiktok';
  }

  // TikHub专用：创建TikHub数据源
  static createTikHubDataSource(): TikHubServiceAdapter {
    return new TikHubServiceAdapter();
  }

  // TikTok专用：创建TikTok数据源
  static createTikTokDataSource(): TikTokServiceAdapter {
    return new TikTokServiceAdapter();
  }

  // 新版抖音专用：带完整选项的创建方法
  static createDouyinNewDataSource(): DouyinNewServiceAdapter {
    return new DouyinNewServiceAdapter();
  }
}

