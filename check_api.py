import json

# 读取文件
with open('d:\\deeppoint-ai-main\\request.log', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到 JSON 开始位置（在第二个空行后）
lines = content.split('\n')
json_start = -1

for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped == '{':
        # 检查是否是响应开始（不是 curl 命令的 {）
        if i > 10:  # 确保不是在文件开头
            json_start = i
            break

print(f"JSON 开始行: {json_start}")

# 提取 JSON
json_lines = lines[json_start:]
json_str = '\n'.join(json_lines)

# 通过括号匹配找到完整 JSON
brace_count = 0
start_pos = 0
end_pos = 0

for i, char in enumerate(json_str):
    if char == '{':
        if brace_count == 0:
            start_pos = i
        brace_count += 1
    elif char == '}':
        brace_count -= 1
        if brace_count == 0:
            end_pos = i + 1
            break

json_content = json_str[start_pos:end_pos]

print(f"JSON 长度: {len(json_content)}")

try:
    data = json.loads(json_content)
    
    print("\n" + "=" * 70)
    print("API 响应完整分析")
    print("=" * 70)
    
    # 顶层信息
    print(f"\n【顶层响应】")
    print(f"  code: {data.get('code')}")
    print(f"  message: {data.get('message')}")
    print(f"  request_id: {data.get('request_id')}")
    
    # params
    params = data.get('params', {})
    print(f"\n【请求参数】")
    print(f"  keyword: {params.get('keyword')}")
    print(f"  cursor: {params.get('cursor')}")
    print(f"  sort_type: {params.get('sort_type')}")
    print(f"  publish_time: {params.get('publish_time')}")
    
    # data
    inner_data = data.get('data', {})
    print(f"\n【data 对象】")
    print(f"  status_code: {inner_data.get('status_code')}")
    print(f"  cursor: {inner_data.get('cursor')}")
    print(f"  has_more: {inner_data.get('has_more')}")
    print(f"  qc: {inner_data.get('qc')}")
    
    # data.data (视频数组)
    videos = inner_data.get('data', [])
    print(f"\n【data.data 数组】")
    print(f"  类型: {type(videos)}")
    print(f"  长度: {len(videos)}")
    
    if len(videos) > 0:
        print(f"\n  【第一个视频详情】")
        first_video = videos[0]
        print(f"    type: {first_video.get('type')}")
        
        aweme_info = first_video.get('aweme_info', {})
        print(f"    aweme_id: {aweme_info.get('aweme_id')}")
        print(f"    desc: {aweme_info.get('desc')[:100]}...")
        print(f"    create_time: {aweme_info.get('create_time')}")
        
        author = aweme_info.get('author', {})
        print(f"    author.nickname: {author.get('nickname')}")
        
    # 检查分页
    print(f"\n【分页信息】")
    print(f"  has_more: {inner_data.get('has_more')}")
    print(f"  cursor: {inner_data.get('cursor')}")
    
    # 所有 data 的键
    print(f"\n【data 对象所有键】")
    print(f"  {list(inner_data.keys())}")
    
except Exception as e:
    print(f"\n解析错误: {e}")
