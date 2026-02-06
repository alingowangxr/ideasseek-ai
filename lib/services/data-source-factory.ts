// 数据源工厂
import { TikHubServiceAdapter } from './tikhub-service';
import { TikTokServiceAdapter } from './tiktok-service';
import { IDataSourceService, DataSourceType, DataSourceResult, DeepCrawlResult, DeepCrawlOptions, TikTokCrawlOptions } from './data-source-interface';

// 数据源工厂类
export class DataSourceFactory {
  static createDataSource(type: DataSourceType): IDataSourceService {
    switch (type) {
      case 'tikhub':
        return new TikHubServiceAdapter();
      case 'tiktok':
        return new TikTokServiceAdapter();
      default:
        throw new Error(`不支持的数据源类型: ${type}`);
    }
  }

  static getSupportedSources(): DataSourceType[] {
    return ['tikhub', 'tiktok'];
  }

  static getSourceDisplayName(type: DataSourceType): string {
    const names: Record<DataSourceType, string> = {
      'tikhub': 'TikHub API (推荐)',
      'tiktok': 'TikTok API'
    };
    return names[type] || type;
  }

  static getSourceDescription(type: DataSourceType): string {
    const descriptions: Record<DataSourceType, string> = {
      'tikhub': 'TikHub API（稳定快速，按需付费）',
      'tiktok': 'TikTok API（国际版，按需付费）'
    };
    return descriptions[type] || '';
  }

  static supportsDeepCrawl(type: DataSourceType): boolean {
    // TikHub 和 TikTok 都支持深度抓取
    return type === 'tikhub' || type === 'tiktok';
  }

  // TikHub专用：创建TikHub数据源
  static createTikHubDataSource(): TikHubServiceAdapter {
    return new TikHubServiceAdapter();
  }

  // TikTok专用：创建TikTok数据源
  static createTikTokDataSource(): TikTokServiceAdapter {
    return new TikTokServiceAdapter();
  }
}

