// TikHub API Client
// TikHub API 客户端 - 封装抖音搜索和评论获取功能，以及 TikTok API

import axios, { AxiosInstance, AxiosError } from 'axios';

/**
 * TikHub API 客户端配置
 */
export interface TikHubClientConfig {
  apiToken: string;
  baseURL?: string;
  useChinaDomain?: boolean;
  timeout?: number;
  maxRetries?: number;
  enableCache?: boolean;
}

/**
 * 搜索请求参数
 */
export interface SearchRequest {
  keyword: string;
  cursor?: number;
  sort_type?: '0' | '1' | '2';  // 0=综合, 1=最多点赞, 2=最新
  publish_time?: '0' | '1' | '7' | '180';  // 0=不限, 1=一天, 7=一周, 180=半年
  filter_duration?: '0' | '0-1' | '1-5' | '5-10000';  // 时长筛选
  content_type?: '0' | '1' | '2' | '3';  // 0=不限, 1=视频, 2=图片, 3=文章
}

/**
 * 搜索响应数据
 */
export interface SearchResponse {
  code: number;
  message: string;
  message_zh?: string;
  data?: {
    status_code: number;
    data?: SearchResultItem[];
    cursor?: number;
    has_more?: boolean;
    cursor_text?: string;
  };
  cursor?: number;
  search_id?: string;
  backtrace?: string;
  has_more?: boolean;
  cache_url?: string;
  cache_message?: string;
}

/**
 * 搜索结果项
 */
export interface SearchResultItem {
  type: number;
  aweme_info?: {
    aweme_id: string;
    desc: string;
    create_time: number;
    author?: {
      uid: string;
      sec_uid?: string;
      nickname: string;
      avatar_thumb?: { url_list: string[] };
      avatar_medium?: { url_list: string[] };
      signature?: string;
      is_verified?: boolean;
    };
    statistics?: {
      comment_count: number;
      digg_count: number;
      share_count: number;
      play_count: number;
      collect_count: number;
    };
    video?: {
      play_addr?: { url_list: string[] };
      cover?: { url_list: string[] };
      dynamic_cover?: { url_list: string[] };
      duration: number;
      width?: number;
      height?: number;
    };
    music?: {
      id_str?: string;
      title?: string;
      author?: string;
    };
    cha_list?: Array<{
      cha_name: string;
      share_url?: string;
    }>;
    share_url: string;
  };
}

/**
 * 评论请求参数
 */
export interface CommentsRequest {
  aweme_id: string;
  cursor?: number;
  count?: number;
}

/**
 * 评论响应数据
 */
export interface CommentsResponse {
  code: number;
  message: string;
  data?: {
    comments: CommentItem[];
    cursor?: number;
    has_more?: boolean;
    total?: number;
  };
  cache_url?: string;
}

/**
 * 评论项
 */
export interface CommentItem {
  cid: string;
  text: string;
  aweme_id: string;
  create_time: number;
  digg_count: number;
  reply_comment_total?: number;
  user?: {
    uid: string;
    nickname: string;
    avatar_thumb?: { url_list: string[] };
    sec_uid?: string;
  };
  ip_label?: string;
}

/**
 * 使用统计信息
 */
export interface UsageStats {
  requestCount: number;
  searchRequests: number;
  commentsRequests: number;
  costEstimate: number;
  cacheHits: number;
  cacheMisses: number;
}

/**
 * 缓存条目
 */
interface CacheEntry {
  data: any;
  expiresAt: number;
  cacheUrl?: string;
}

/**
 * TikHub API 客户端类
 */
export class TikHubAPIClient {
  private client: AxiosInstance;
  private cache: Map<string, CacheEntry> = new Map();
  private requestCount: number = 0;
  private searchRequests: number = 0;
  private commentsRequests: number = 0;
  private cacheHits: number = 0;
  private cacheMisses: number = 0;
  private costEstimate: number = 0;
  private readonly CACHE_TTL = 24 * 60 * 60 * 1000; // 24小时
  private readonly COST_PER_REQUEST = 0.01; // 假设每次请求0.01元

  constructor(config: TikHubClientConfig) {
    const baseURL = config.baseURL ||
      (config.useChinaDomain ? 'https://api.tikhub.dev' : 'https://api.tikhub.io');

    this.client = axios.create({
      baseURL,
      timeout: config.timeout || 30000,
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    // 添加请求拦截器用于日志
    this.client.interceptors.request.use(
      (config) => {
        console.log(`[TikHub API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('[TikHub API] Request error:', error);
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器用于错误处理
    this.client.interceptors.response.use(
      (response) => {
        // 记录缓存信息
        if (response.data?.cache_url) {
          console.log('[TikHub API] Cache URL available:', response.data.cache_url);
        }
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          console.error(`[TikHub API] Error ${error.response.status}:`, error.response.data);
        } else if (error.request) {
          console.error('[TikHub API] No response received:', error.message);
        } else {
          console.error('[TikHub API] Request setup error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * 搜索视频
   */
  async searchVideos(params: SearchRequest): Promise<SearchResponse> {
    // 检查缓存
    const cacheKey = `search_${JSON.stringify(params)}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      this.cacheHits++;
      console.log('[TikHub API] Using cached search result');
      return cached;
    }
    this.cacheMisses++;

    this.requestCount++;
    this.searchRequests++;

    try {
      const response = await this.client.post<SearchResponse>(
        '/api/v1/douyin/search/fetch_general_search_v1',
        {
          keyword: params.keyword,
          cursor: params.cursor || 0,
          sort_type: params.sort_type || '0',
          publish_time: params.publish_time || '0',
          filter_duration: params.filter_duration || '0',
          content_type: params.content_type || '1', // 默认只获取视频
          search_id: '',
          backtrace: ''
        }
      );

      const data = response.data;

      // 存储缓存
      if (data.cache_url) {
        this.setCache(cacheKey, data, data.cache_url);
      }

      // 更新成本预估
      this.costEstimate += this.COST_PER_REQUEST;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `TikHub API 搜索失败: ${error.response?.status} ${error.response?.data?.message || error.message}`
        );
      }
      throw error;
    }
  }

  /**
   * 获取视频评论
   */
  async getVideoComments(
    awemeId: string,
    cursor: number = 0,
    count: number = 20
  ): Promise<CommentsResponse> {
    // 检查缓存
    const cacheKey = `comments_${awemeId}_${cursor}_${count}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      this.cacheHits++;
      console.log('[TikHub API] Using cached comments result');
      return cached;
    }
    this.cacheMisses++;

    this.requestCount++;
    this.commentsRequests++;

    try {
      const response = await this.client.get<CommentsResponse>(
        '/api/v1/douyin/web/fetch_video_comments',
        {
          params: {
            aweme_id: awemeId,
            cursor: cursor.toString(),
            count: count.toString()
          }
        }
      );

      const data = response.data;

      // 存储缓存
      if (data.cache_url) {
        this.setCache(cacheKey, data, data.cache_url);
      }

      // 更新成本预估
      this.costEstimate += this.COST_PER_REQUEST;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `TikHub API 评论获取失败: ${error.response?.status} ${error.response?.data?.message || error.message}`
        );
      }
      throw error;
    }
  }

  /**
   * 批量获取视频评论
   */
  async getVideoCommentsBatch(
    awemeIds: string[],
    maxCommentsPerVideo: number
  ): Promise<Map<string, CommentItem[]>> {
    const result = new Map<string, CommentItem[]>();

    for (const awemeId of awemeIds) {
      try {
        const comments: CommentItem[] = [];
        let cursor = 0;
        let hasMore = true;

        while (hasMore && comments.length < maxCommentsPerVideo) {
          const response = await this.getVideoComments(
            awemeId,
            cursor,
            Math.min(20, maxCommentsPerVideo - comments.length)
          );

          console.log('[TikHub API] 评论响应:', {
            code: response.code,
            hasData: !!response.data,
            hasComments: !!response.data?.comments,
            commentCount: response.data?.comments?.length || 0
          });

          if (response.code !== 200 || !response.data?.comments) {
            console.warn('[TikHub API] 评论响应格式不符合预期，停止获取评论');
            break;
          }

          const commentList = response.data.comments;
          comments.push(...commentList);

          // 检查是否还有更多评论
          // has_more 和 cursor 在 response.data 的根级别
          hasMore = (response.data.has_more === 1 || response.data.has_more === true);
          cursor = response.data.cursor || 0;

          console.log(`[TikHub API] 已获取 ${comments.length} 条评论，has_more: ${hasMore}, cursor: ${cursor}`);

          // 避免请求过快
          await this.delay(300);
        }

        result.set(awemeId, comments);
      } catch (error) {
        console.error(`[TikHub API] Failed to fetch comments for ${awemeId}:`, error);
        result.set(awemeId, []);
      }
    }

    return result;
  }

  /**
   * 检查 API 健康状态
   */
  async checkHealth(): Promise<boolean> {
    try {
      const response = await this.searchVideos({ keyword: 'test' });
      // 检查是否是认证错误
      if (response.code === 401 || response.code === 403) {
        console.warn('[TikHub API] 认证失败，请检查 API Token');
        return false;
      }
      return response.code === 200;
    } catch (error) {
      console.warn('[TikHub API] 健康检查失败:', error);
      return false;
    }
  }

  /**
   * 获取使用统计信息
   */
  getUsageStats(): UsageStats {
    return {
      requestCount: this.requestCount,
      searchRequests: this.searchRequests,
      commentsRequests: this.commentsRequests,
      costEstimate: this.costEstimate,
      cacheHits: this.cacheHits,
      cacheMisses: this.cacheMisses
    };
  }

  /**
   * 重置统计信息
   */
  resetStats(): void {
    this.requestCount = 0;
    this.searchRequests = 0;
    this.commentsRequests = 0;
    this.costEstimate = 0;
    this.cacheHits = 0;
    this.cacheMisses = 0;
  }

  /**
   * 清除所有缓存
   */
  clearCache(): void {
    this.cache.clear();
    console.log('[TikHub API] Cache cleared');
  }

  /**
   * 获取缓存统计
   */
  getCacheStats() {
    const now = Date.now();
    const entries = Array.from(this.cache.entries()).map(([key, entry]) => ({
      key,
      expiresAt: new Date(entry.expiresAt).toISOString(),
      remaining: Math.max(0, entry.expiresAt - now),
      hasCacheUrl: !!entry.cacheUrl
    }));

    return {
      size: this.cache.size,
      entries,
      hitRate: this.requestCount > 0
        ? ((this.cacheHits / (this.cacheHits + this.cacheMisses)) * 100).toFixed(2) + '%'
        : 'N/A'
    };
  }

  /**
   * 从缓存获取数据
   */
  private getFromCache(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  /**
   * 设置缓存
   */
  private setCache(key: string, data: any, cacheUrl?: string): void {
    this.cache.set(key, {
      data,
      expiresAt: Date.now() + this.CACHE_TTL,
      cacheUrl
    });
  }

  /**
   * 延迟函数
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ==================== TikTok API 方法 ====================

  /**
   * TikTok 搜索参数
   */
  async searchTiktokVideos(params: {
    keyword: string;
    offset?: number;
    search_id?: string;
  }): Promise<any> {
    this.requestCount++;
    this.searchRequests++;

    const queryParams: any = {
      keyword: params.keyword,
      offset: params.offset || 0
    };

    if (params.search_id) {
      queryParams.search_id = params.search_id;
    }

    try {
      const response = await this.client.get(
        '/api/v1/tiktok/web/fetch_general_search',
        { params: queryParams }
      );

      // 存储缓存
      if (response.data?.cache_url) {
        const cacheKey = `tiktok_search_${JSON.stringify(params)}`;
        this.setCache(cacheKey, response.data, response.data.cache_url);
      }

      // 更新成本预估
      this.costEstimate += this.COST_PER_REQUEST;

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `TikTok API 搜索失败: ${error.response?.status} ${error.response?.data?.message || error.message}`
        );
      }
      throw error;
    }
  }

  /**
   * 获取 TikTok 视频评论
   */
  async getTikTokVideoComments(
    awemeId: string,
    cursor: number = 0,
    count: number = 20
  ): Promise<any> {
    this.requestCount++;
    this.commentsRequests++;

    try {
      const response = await this.client.get(
        '/api/v1/tiktok/web/fetch_post_comment',
        {
          params: {
            aweme_id: awemeId,
            cursor: cursor.toString(),
            count: count.toString()
          }
        }
      );

      const data = response.data;

      // 存储缓存
      if (data.cache_url) {
        const cacheKey = `tiktok_comments_${awemeId}_${cursor}_${count}`;
        this.setCache(cacheKey, data, data.cache_url);
      }

      // 更新成本预估
      this.costEstimate += this.COST_PER_REQUEST;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `TikTok API 评论获取失败: ${error.response?.status} ${error.response?.data?.message || error.message}`
        );
      }
      throw error;
    }
  }

  /**
   * 批量获取 TikTok 视频评论
   */
  async getTikTokVideoCommentsBatch(
    awemeIds: string[],
    maxCommentsPerVideo: number
  ): Promise<Map<string, any[]>> {
    const result = new Map<string, any[]>();

    for (const awemeId of awemeIds) {
      try {
        const comments: any[] = [];
        let cursor = 0;
        let hasMore = true;

        while (hasMore && comments.length < maxCommentsPerVideo) {
          const response = await this.getTikTokVideoComments(
            awemeId,
            cursor,
            Math.min(20, maxCommentsPerVideo - comments.length)
          );

          console.log('[TikTok API] 评论响应:', {
            code: response.code,
            hasData: !!response.data,
            hasComments: !!response.data?.comments,
            commentCount: response.data?.comments?.length || 0
          });

          if (response.code !== 200 || !response.data?.comments) {
            console.warn('[TikTok API] 评论响应格式不符合预期，停止获取评论');
            break;
          }

          const commentList = response.data.comments;
          comments.push(...commentList);

          // 检查是否还有更多评论
          has_more = response.data.has_more === 1 || response.data.has_more === true;
          cursor = response.data.cursor || 0;

          console.log(`[TikTok API] 已获取 ${comments.length} 条评论，has_more: ${has_more}, cursor: ${cursor}`);

          // 避免请求过快
          await this.delay(300);
        }

        result.set(awemeId, comments);
      } catch (error) {
        console.error(`[TikTok API] Failed to fetch comments for ${awemeId}:`, error);
        result.set(awemeId, []);
      }
    }

    return result;
  }
}

/**
 * 创建默认的 TikHub API 客户端实例
 */
export function createTikHubClient(): TikHubAPIClient {
  const apiToken = process.env.TIKHUB_API_TOKEN ||
    process.env.TIKHUB_API_KEY ||
    'vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA==';

  return new TikHubAPIClient({
    apiToken,
    useChinaDomain: process.env.TIKHUB_USE_CHINA_DOMAIN === 'true',
    timeout: parseInt(process.env.TIKHUB_TIMEOUT || '30000'),
    enableCache: process.env.TIKHUB_ENABLE_CACHE !== 'false'
  });
}

// 导出单例实例
let globalClient: TikHubAPIClient | null = null;

export function getGlobalTikHubClient(): TikHubAPIClient {
  if (!globalClient) {
    globalClient = createTikHubClient();
  }
  return globalClient;
}
