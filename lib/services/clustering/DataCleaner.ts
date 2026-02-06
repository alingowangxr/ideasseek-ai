// ==================== 数据清洗模块 ====================
// 从 Python semantic_clustering.py 移植而来

/**
 * 数据清洗器
 * 过滤噪音文本，计算质量分数
 */
export class DataCleaner {
  private minLength: number;
  private noiseRegexes: RegExp[];
  private readonly NOISE_PATTERNS: string[] = [
    // 纯符号/数字
    '^[0-9]+$', // 纯数字
    '^[!@#$%^&*()_+=\\-\\[\\]{};\':"\\\\|,.<>\\/?]+$', // 纯符号
    '^[。！？、；：""（）《》【】]+$',

    // 重复字符 (超过3次)
    '(.)\\1{3,}',

    // 无意义的表情/符号组合
    '^[🙂🙃😉😊😇🥰😍🤩😘😗😚😙🥲😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😏😒🙄😬🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶😶‍🌫️🥴😵‍💫🤯🤠🥳🥸😎🤓🧐😕😟🙁☹️😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💌💘💝💖💗💓💞💕💟❣️💔❤️🧡💛💚💙💜🤎🖤🤍💯💢💥💫💦💨🕳️💣💬👁️‍🗨️🗨️🗯️💭💤👋🤚🖐️✋🖖👌🤏✌️🤞🤟🤘🤙👈👉👆👇☝️👍👎✊👊🤛🤜👏🙌👐🤲🤝🙏✍️💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄]+$',

    // 连续标点
    '^[!?！？]+$',
    '^[。，、]+$',

    // 单字符重复
    '^(哈|呵|嘿|嘻|哈哈|呵呵|嘿嘿|嘻嘻)+$',
    '^(啊|呀|哦|唉|哎)+$',
  ];

  private readonly NOISE_PHRASES: string[] = [
    // 纯表情
    '👍', '👎', '❤️', '🔥', '👏', '🙌', '💯', '✨', '🎉', '🎊',

    // 单字回复
    '好', '行', '嗯', '哦', '呵', '哈', '嘿', '嗨', '哟', '哎',

    // 极短无意义
    '666', '999', '888',
    '牛逼', '牛啊', '太强了', '绝了',
    '哈哈哈哈', '哈哈哈', '呵呵呵',

    // 空洞的赞同
    '对', '是', '是的', '对的', '没错',
    '同意', '赞同', '认可',
    '不错', '可以', '还行',
    '确实', '实在', '真的',

    // 空洞的疑问
    '啥', '啥？', '什么？', '啊？',
    '真的吗', '是吗', '真的假的',
    '为什么', '咋回事', '怎么了',

    // 社交客套
    '谢谢', '感谢', '感谢感谢',
    '欢迎', '欢迎欢迎', '欢迎光临',
    '关注', '回关', '互关',

    // 推广/刷屏
    '加微信', 'V我', '看主页', '看简介', '详情见主页',
    '点赞', '收藏', '转发',
    '关注我', '关注博主', '关注作者',

    // 其他无意义
    '不知道', '不清楚', '不了解',
    '没看', '没看懂', '看不懂',
    '路人', '路过', '飘过', '默默路过',
  ];

  private readonly WHITELIST_KEYWORDS: string[] = [
    // 痛点相关 (高价值)
    '怎么', '如何', '怎样', '怎么弄', '怎么搞', '怎么用',
    '不会', '不懂', '不明白', '不知道', '不理解',
    '问题', '错误', '失败', '不行', '不能', '无法',
    '难用', '不好用', '用不了', '不好', '差',
    '卡', '卡顿', '慢', '闪退', '崩溃', '报错',
    '多少钱', '价格', '贵', '便宜', '性价比',
    '推荐', '建议', '哪个好', '哪个牌子',

    // 功能相关
    '功能', '特性', '特点', '优势', '好处',
    '设置', '配置', '操作', '使用', '用法',

    // 内容相关
    '教程', '步骤', '方法', '攻略', '指南',
  ];

  constructor(minLength: number = 4) {
    this.minLength = minLength;
    this.noiseRegexes = this.NOISE_PATTERNS.map(p => new RegExp(`^${p}$`, 'i'));
  }

  /**
   * 判断文本是否为噪音
   */
  isNoise(text: string): boolean {
    const trimmed = text.trim();

    // 长度过短
    if (trimmed.length < this.minLength) {
      return true;
    }

    // 匹配噪音正则
    for (const regex of this.noiseRegexes) {
      if (regex.test(trimmed)) {
        return true;
      }
    }

    // 匹配噪音短语 (完全匹配)
    const lowerTrimmed = trimmed.toLowerCase();
    for (const phrase of this.NOISE_PHRASES) {
      if (lowerTrimmed === phrase.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  /**
   * 检查是否包含白名单关键词
   */
  hasWhitelistKeyword(text: string): boolean {
    for (const keyword of this.WHITELIST_KEYWORDS) {
      if (text.includes(keyword)) {
        return true;
      }
    }
    return false;
  }

  /**
   * 计算文本质量分数
   * 分数越高，文本越有价值
   */
  calculateScore(text: string): number {
    let score = 1.0;
    const length = text.length;

    // 白名单关键词加权 (痛点相关)
    if (this.hasWhitelistKeyword(text)) {
      score += 2.0;
    }

    // 长度加权 (50-200字符最佳)
    if (length >= 50 && length <= 200) {
      score += 1.0;
    } else if (length >= 20 && length < 50) {
      score += 0.5;
    } else if (length >= 10 && length < 20) {
      score += 0.2;
    } else if (length > 300) {
      score -= 0.5; // 过长的文本可能是复制粘贴
    }

    // 包含问号加权 (可能是真实问题)
    const questionMarks = (text.match(/\?|？/g) || []).length;
    if (questionMarks > 0) {
      // 但如果是纯疑问词+问号（无实质内容），则扣分
      const simpleQuestions = ['啥', '什么意思', '真的吗', '是吗', '这是啥', '谁啊'];
      const isSimpleQuestion = simpleQuestions.some(q => text.includes(q)) && length < 15;
      if (isSimpleQuestion) {
        score -= 1.0;
      } else {
        score += 0.3 * Math.min(questionMarks, 2); // 最多加0.6分
      }
    }

    // 包含数字加权 (可能包含具体数据/价格)
    if (/\d+/.test(text)) {
      score += 0.3;
    }

    // 包含感叹号过多扣分 (可能是情绪化表达)
    const exclamationMarks = (text.match(/!|！/g) || []).length;
    if (exclamationMarks > 2) {
      score -= 0.5;
    }

    return Math.max(0, score); // 确保分数非负
  }

  /**
   * 清洗文本列表
   * @returns [清洗后的文本列表, 对应的质量分数]
   */
  clean(texts: string[]): { texts: string[]; scores: number[] } {
    const cleanedTexts: string[] = [];
    const scores: number[] = [];
    const seen = new Set<string>();

    for (const text of texts) {
      const trimmed = text.trim();

      // 跳过噪音
      if (this.isNoise(trimmed)) {
        continue;
      }

      // 跳过重复
      const normalized = trimmed.toLowerCase().replace(/\s+/g, ' ');
      if (seen.has(normalized)) {
        continue;
      }
      seen.add(normalized);

      // 计算质量分数
      const score = this.calculateScore(trimmed);

      // 过滤低分文本
      if (score < 0.5) {
        continue;
      }

      cleanedTexts.push(trimmed);
      scores.push(score);
    }

    return {
      texts: cleanedTexts,
      scores
    };
  }

  /**
   * 获取清洗统计信息
   */
  getCleanStats(originalCount: number, cleanedCount: number) {
    return {
      original: originalCount,
      cleaned: cleanedCount,
      removed: originalCount - cleanedCount,
      keepRate: originalCount > 0 ? (cleanedCount / originalCount * 100).toFixed(1) + '%' : '0%'
    };
  }
}
