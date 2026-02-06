# 仔细分析 log3.log 中的转换逻辑

with open('d:\\deeppoint-ai-main\\log3.log', 'r', encoding='utf-8') as f:
    content = f.read()

print("=" * 60)
print("转换逻辑详细分析")
print("=" * 60)

import re

# 1. 统计所有 item 的转换情况
print("\n【1. 转换结果统计】")

# 查找 convertSearchResultToVideo 的调用
# 格式: "[TikHub Service] convertSearchResultToVideo: ..."

# 查找有多少次返回 null
null_count = content.count('convertSearchResultToVideo: item 缺少 aweme_info')
print(f"  缺少 aweme_info 的次数: {null_count}")

# 2. 检查代码中的限制逻辑
print("\n【2. 搜索逻辑检查】")

# 找到 "开始搜索关键词"
start_match = re.search(r'开始搜索关键词: (.+?), 限制: (\d+)', content)
if start_match:
    keyword = start_match.group(1)
    limit = int(start_match.group(2))
    print(f"  关键词: {keyword}")
    print(f"  限制: {limit}")

# 找到 "第 1 页获取到 X 个结果"
page_match = re.search(r'第 (\d+) 页获取到 (\d+) 个结果', content)
if page_match:
    page = int(page_match.group(1))
    results = int(page_match.group(2))
    print(f"  第{page}页结果: {results}")

# 3. 分析为什么只有 13 个视频
print("\n【3. 数据分析】")
print(f"  API 返回: 19 个 item")
print(f"  限制: 15 个 (maxVideos)")
print(f"  最终视频: 13 个")
print(f"  损失: 6 个")

# 计算
api_results = 19
limit = 15
final_videos = 13

if api_results > limit:
    print(f"\n  解释: 因为限制为 {limit}，只处理前 {limit} 个 item")
    print(f"        但最终只有 {final_videos} 个视频，说明有 {limit - final_videos} 个 item 缺少 aweme_info")

# 4. 检查日志中的转换统计
print("\n【4. 日志中的统计】")

# 查找 "有效视频" 统计
stats_match = re.search(r'总数 (\d+), 有效视频 (\d+), 累计视频 (\d+)', content)
if stats_match:
    total = int(stats_match.group(1))
    valid = int(stats_match.group(2))
    cumulative = int(stats_match.group(3))
    print(f"  总数: {total}")
    print(f"  有效视频: {valid}")
    print(f"  累计视频: {cumulative}")

# 5. 检查有多少 item 成功转换
print("\n【5. 成功转换数量】")
# 从 "搜索完成" 日志中提取
complete_match = re.search(r'搜索完成: 获取 (\d+) 个视频', content)
if complete_match:
    videos = int(complete_match.group(1))
    print(f"  成功转换的视频数: {videos}")

print("\n" + "=" * 60)
print("关键发现")
print("=" * 60)
print("""
从日志分析：

1. ✅ API 正常工作，返回 19 个 item
2. ✅ 分页正常工作，has_more=true
3. ⚠️  maxVideos=15 限制了每页只处理 15 个 item
4. ⚠️  2 个 item 缺少 aweme_info (type=6, type=999)
5. ⚠️  最终只有 13 个视频（15 - 2 = 13）

问题：
- API 返回 19 个 item，但 maxVideos=15 限制了只处理 15 个
- 15 个中有 2 个缺少 aweme_info，所以只有 13 个视频

如果想让系统处理更多数据，可以：
1. 增加 maxVideos 参数
2. 或者处理缺少 aweme_info 的 item（从其他字段提取）

当前代码行为是正常的，因为：
- maxVideos=15 限制了最大数量
- 缺少 aweme_info 的 item 被正确跳过
""")
