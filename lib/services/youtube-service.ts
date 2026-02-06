// YouTube 数据源服务
// 实现 IDataSourceService 接口，将 YouTube API 数据转换为系统通用格式

import {
  TikHubAPIClient,
  createTikHubClient
} from './tikhub-client';
import {
  IDataSourceService,
  DataSourceResult,
  DeepCrawlResult,
  DeepCrawlOptions
} from './data-source-interface';

/**
 * YouTube 服务选项
 */
export interface YouTubeServiceOptions {
  maxVideos?: number;
  maxCommentsPerVideo?: number;
  enableCache?: boolean;
  requestDelay?: number; // 请求间隔（毫秒）
  languageCode?: string; // 语言代码
  countryCode?: string; // 国家代码
}

/**
 * YouTube 数据源服务
 */
export class YouTubeService implements IDataSourceService {
  private client: TikHubAPIClient;
  private defaultOptions: YouTubeServiceOptions;

  constructor(client?: TikHubAPIClient, options?: YouTubeServiceOptions) {
    this.client = client || createTikHubClient();
    this.defaultOptions = {
      maxVideos: 20,
      maxCommentsPerVideo: 20,
      enableCache: true,
      requestDelay: 500,
      languageCode: 'en',
      countryCode: 'us'
    };

    if (options) {
      Object.assign(this.defaultOptions, options);
    }
  }

  /**
   * 基础搜索（不含评论）
   */
  async searchAndFetch(keyword: string, limit: number): Promise<DataSourceResult> {
    console.log(`[YouTube Service] 开始搜索关键词: ${keyword}, 限制: ${limit}`);

    const rawTexts: string[] = [];
    const videos: any[] = [];
    let totalFetched = 0;

    try {
      // 分页搜索，直到获取足够的数据或没有更多结果
      while (totalFetched < limit) {
        console.log(`[YouTube Service] 搜索第 ${Math.floor(totalFetched / 20) + 1} 页`);

        const searchResult = await this.client['searchYouTubeVideos']({
          search_query: keyword,
          language_code: this.defaultOptions.languageCode,
          country_code: this.defaultOptions.countryCode
        });

        console.log('[YouTube Service] API 响应 code:', searchResult.code);

        if (searchResult.code !== 200) {
          throw new Error(`YouTube API 搜索失败: ${searchResult.message}`);
        }

        // YouTube API 响应格式: { code, data: { videos: [...], continuation_token: ... } }
        const videoList = searchResult.data?.videos;

        if (!videoList || !Array.isArray(videoList)) {
          console.warn('[YouTube Service] 未找到有效的数据数组');
          break;
        }

        console.log(`[YouTube Service] 第 ${Math.floor(totalFetched / 20) + 1} 页获取到 ${videoList.length} 个结果`);

        if (videoList.length === 0) {
          console.warn('[YouTube Service] 没有更多结果，停止分页');
          break;
        }

        // 处理当前页的结果
        const remainingLimit = limit - totalFetched;
        const pageItems = videoList.slice(0, remainingLimit);

        for (const item of pageItems) {
          const video = this.convertSearchResultToVideo(item, keyword);
          if (video) {
            videos.push(video);

            // 提取文本内容
            if (video.title && video.title.length > 5) {
              rawTexts.push(video.title);
            }
            if (video.description && video.description.length > 10 && video.description !== video.title) {
              rawTexts.push(video.description);
            }
            totalFetched++;
          }
        }

        console.log(`[YouTube Service] 当前页处理结果: 累计视频 ${videos.length}, 累计文本 ${rawTexts.length}`);

        // 如果当前页的结果少于请求数量，说明没有更多结果了
        if (videoList.length < 20) {
          break;
        }

        // 避免请求过快
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // 去重
      const uniqueTexts = [...new Set(rawTexts)].filter(t => t.trim().length > 5);

      console.log(`[YouTube Service] 搜索完成: 获取 ${videos.length} 个视频, ${uniqueTexts.length} 条文本`);

      return {
        rawTexts: uniqueTexts,
        videos,
        metadata: {
          source: 'youtube',
          keyword,
          totalResults: videos.length,
          returnedResults: videos.length,
          usage: this.client['getUsageStats']()
        }
      };
    } catch (error) {
      console.error('[YouTube Service] 搜索失败:', error);
      throw error;
    }
  }

  /**
   * 深度搜索（含评论）
   */
  async searchWithComments(keyword: string, options: DeepCrawlOptions): Promise<DeepCrawlResult> {
    console.log(`[YouTube Service] 开始深度搜索: ${keyword}`);

    // 合并选项
    const maxVideos = options.maxVideos || this.defaultOptions.maxVideos!;
    const maxCommentsPerVideo = options.maxCommentsPerVideo || this.defaultOptions.maxCommentsPerVideo!;

    // 先搜索视频
    const { videos: videoList } = await this.searchAndFetch(keyword, maxVideos);

    if (videoList.length === 0) {
      return {
        rawTexts: [],
        videos: [],
        allComments: [],
        videoCount: 0,
        commentCount: 0
      };
    }

    console.log(`[YouTube Service] 开始获取 ${videoList.length} 个视频的评论`);

    // 获取评论
    const allComments: any[] = [];
    const rawTexts: string[] = [];
    const commentTexts: string[] = [];

    // 从视频结果中提取文本
    for (const video of videoList) {
      if (video.title && video.title.length > 5) {
        rawTexts.push(video.title);
      }
      if (video.description && video.description.length > 10) {
        rawTexts.push(video.description);
      }
    }

    // 批量获取评论
    const videoIds = videoList
      .map(v => v.id)
      .filter((id): id is string => !!id);

    const commentsMap = await this.client['getYouTubeVideoCommentsBatch'](videoIds, maxCommentsPerVideo);

    // 处理评论数据
    for (const video of videoList) {
      if (!video.id) continue;

      const comments = commentsMap.get(video.id) || [];
      const limitedComments = comments.slice(0, maxCommentsPerVideo);

      for (const comment of limitedComments) {
        const mappedComment = this.convertCommentToData(comment, video.title);
        allComments.push(mappedComment);

        if (comment.content && comment.content.length > 5) {
          commentTexts.push(comment.content);
        }
      }

      // 添加请求延迟
      await new Promise(resolve => setTimeout(resolve, this.defaultOptions.requestDelay!));
    }

    // 合并所有文本并去重
    const allTexts = [...new Set([...rawTexts, ...commentTexts])];

    console.log(`[YouTube Service] 深度搜索完成: ${videoList.length} 个视频, ${allComments.length} 条评论, ${allTexts.length} 条文本`);

    return {
      rawTexts: allTexts,
      videos: videoList,
      allComments,
      videoCount: videoList.length,
      commentCount: allComments.length
    };
  }

  /**
   * 检查服务可用性
   */
  async checkAvailability(): Promise<boolean> {
    // 对于 YouTube，我们总是返回 true，让实际请求时再处理错误
    return true;
  }

  /**
   * 获取使用统计
   */
  getUsageStats() {
    return this.client['getUsageStats']();
  }

  /**
   * 清除缓存
   */
  clearCache(): void {
    this.client['clearCache']();
  }

  /**
   * 获取缓存统计
   */
  getCacheStats() {
    return this.client['getCacheStats']();
  }

  /**
   * 将 YouTube 搜索结果转换为视频数据格式
   */
  private convertSearchResultToVideo(item: any, sourceKeyword: string): any {
    if (!item.video_id) {
      console.warn('[YouTube Service] convertSearchResultToVideo: item 缺少 video_id 字段');
      return null;
    }

    // 提取缩略图
    const thumbnails = item.thumbnails || [];
    const highQualityThumb = thumbnails.find((t: any) => t.width >= 720) || thumbnails[0];
    const thumbUrl = highQualityThumb?.url || '';

    // 构建 YouTube 视频链接
    const videoUrl = `https://www.youtube.com/watch?v=${item.video_id}`;

    // 提取描述（截取前500字符）
    const description = item.description ? item.description.substring(0, 500) : '';

    return {
      title: item.title || '',
      description: description,
      author: item.author || '',
      video_url: videoUrl,
      publish_time: item.published_time || new Date().toISOString(),
      likes: item.number_of_views?.toString() || '0',
      collected_at: new Date().toISOString(),
      comment_count: 0,
      // 扩展字段
      id: item.video_id,
      video_id: item.video_id,
      video_length: item.video_length || '',
      number_of_views: item.number_of_views || 0,
      channel_id: item.channel_id || '',
      thumbnails: thumbnails,
      thumb_url: thumbUrl,
      is_live: item.is_live_content || false,
      category: item.category || '',
      type: item.type || 'NORMAL',
      keywords: item.keywords || [],
      // 来源
      source_keyword: sourceKeyword
    };
  }

  /**
   * 将 YouTube 评论转换为数据格式
   */
  private convertCommentToData(comment: any, videoTitle: string): any {
    const author = comment.author || {};

    return {
      video_title: videoTitle,
      comment_text: comment.content || '',
      username: author.display_name || '',
      likes: comment.like_count?.toString() || '0',
      // 扩展字段
      comment_id: comment.comment_id,
      channel_id: author.channel_id || '',
      channel_url: author.channel_url || '',
      avatar_url: author.avatar_url || '',
      is_verified: author.is_verified || false,
      is_creator: author.is_creator || false,
      published_time: comment.published_time || '',
      reply_count: comment.reply_count || 0,
      like_count: comment.like_count || 0,
      reply_level: comment.reply_level || 0
    };
  }
}

/**
 * YouTube 服务适配器（用于工厂模式）
 */
export class YouTubeServiceAdapter implements IDataSourceService {
  private service: YouTubeService;

  constructor(options?: YouTubeServiceOptions) {
    this.service = new YouTubeService(undefined, options);
  }

  async searchAndFetch(keyword: string, limit: number): Promise<DataSourceResult> {
    return await this.service.searchAndFetch(keyword, limit);
  }

  async searchWithComments(keyword: string, options?: DeepCrawlOptions): Promise<DeepCrawlResult> {
    return await this.service.searchWithComments(keyword, options || {});
  }

  async checkAvailability(): Promise<boolean> {
    return await this.service.checkAvailability();
  }

  /**
   * 获取使用统计（YouTube 特有方法）
   */
  getUsageStats() {
    return this.service.getUsageStats();
  }

  /**
   * 清除缓存（YouTube 特有方法）
   */
  clearCache(): void {
    this.service.clearCache();
  }

  /**
   * 获取缓存统计（YouTube 特有方法）
   */
  getCacheStats() {
    return this.service.getCacheStats();
  }
}
