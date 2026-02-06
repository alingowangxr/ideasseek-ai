# 读取日志文件
with open('d:\\deeppoint-ai-main\\log2.log', 'r', encoding='utf-8') as f:
    content = f.read()

# 统计关键信息
print("=" * 60)
print("日志统计分析")
print("=" * 60)

# 搜索结果统计
search_count = content.count('[TikHub API] 搜索响应详情')
print(f"\n搜索请求次数: {search_count}")

# 查找所有 data.data 长度
import re
matches = re.findall(r'data\.data 类型: 数组\(长度:(\d+)\)', content)
print(f"每页返回视频数: {matches}")

# 查找 has_more 值
has_more_matches = re.findall(r'has_more: (\d+)', content)
print(f"has_more 值: {has_more_matches}")

# 查找 cursor 值
cursor_matches = re.findall(r'cursor: (\d+)', content)
print(f"cursor 值: {cursor_matches}")

# 统计获取结果
total_videos = re.findall(r'获取到 (\d+) 个结果', content)
print(f"每页获取视频数: {total_videos}")

# 统计最终结果
final_results = re.findall(r'深度搜索完成: (\d+) 个视频', content)
print(f"最终获取视频数: {final_results}")

print("\n" + "=" * 60)
print("结论")
print("=" * 60)

if final_results:
    total = int(final_results[0])
    print(f"总视频数: {total}")
    if total < 15:
        print(f"⚠️  未达到 maxVideos=15 的限制")
        print("可能原因:")
        print("  1. 关键词 '新会陈皮' 的搜索结果较少")
        print("  2. TikHub API 对该关键词有限制")
        print("  3. 可能需要尝试更宽泛的关键词")
