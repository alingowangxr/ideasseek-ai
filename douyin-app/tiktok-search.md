GET
/api/v1/tiktok/web/fetch_general_search
获取综合搜索列表/Get general search list


[中文]
用途:
获取综合搜索列表
参数:
keyword: 搜索关键词
offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。
search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。
例如: search_id = "20240828035554C02011379EBB6A00E00B"
JSON Path-1 : $.data.extra.logid
JSON Path-2 : $.data.log_pb.impr_id
cookie: 用户cookie(如果你需要使用自己的账号搜索，或者遇到接口报错，可以自行提供cookie，默认不需要提供)
返回:
综合搜索列表
备注:
此接口返回的所有视频CDN链接均需要携带返回的 tt_chain_token 参数才能正常访问，否则会返回HTTP403错误。
在访问视频CDN链接时，请务必在请求头中携带 Cookie: tt_chain_token={tt_chain_token}，其中 {tt_chain_token} 替换为接口返回的 tt_chain_token 参数值。
如果访问视频CDN链接时返回HTTP 403错误:
请使用接口响应中以 https://www.tiktok.com/aweme/v1/play/ 开头的视频链接(通常在响应数据的 video.playAddr 或类似字段中)
在请求该链接时，务必在请求头中添加 Cookie: tt_chain_token={tt_chain_token}，其中 {tt_chain_token} 为接口返回的 tt_chain_token 参数值
示例请求头: Cookie: tt_chain_token=xxx
如果需要绕过此限制获取可以直接访问的无水印视频CDN链接，请使用 TikTok APP V3 目录下的接口。
[English]
Purpose:
Get general search list
Parameters:
keyword: Search keyword
offset: Page cursor, 0 for the first request, need to provide for the second paging, generally the keyword of this value is offset or cursor.
search_id: Search id, empty for the first request, need to provide for the second paging, need to get it from the return response of the last request.
For example: search_id = "20240828035554C02011379EBB6A00E00B"
JSON Path-1 : $.data.extra.logid
JSON Path-2 : $.data.log_pb.impr_id
cookie: User cookie (If you need to search with your own account, or encounter an interface error, you can provide the cookie yourself, default is not required)
Return:
General search list
Note:
All video CDN links returned by this interface need to carry the returned tt_chain_token parameter to be accessed normally, otherwise HTTP 403 error will be returned.
When accessing the video CDN link, be sure to carry Cookie: tt_chain_token={tt_chain_token} in the request header, where {tt_chain_token} is replaced with the tt_chain_token parameter value returned by the interface.
If you receive HTTP 403 error when accessing video CDN links:
Use the video link starting with https://www.tiktok.com/aweme/v1/play/ from the API response (usually found in video.playAddr or similar fields)
When requesting this link, make sure to add Cookie: tt_chain_token={tt_chain_token} in the request header, where {tt_chain_token} is the value returned by the API
Example request header: Cookie: tt_chain_token=xxx
If you need to bypass this restriction to get a watermark-free video CDN link that can be accessed directly, please use the interface under the TikTok APP V3 directory.
[示例/Example]
keyword = "TikTok" offset = 0 search_id = ""

Parameters
Cancel
Name	Description
keyword *
string
(query)
搜索关键词/Search keyword

TikTok
offset
integer
(query)
翻页游标/Page cursor

0
search_id
string
(query)
搜索id，翻页时需要提供/Search id, need to provide when paging

search_id
cookie
string
(query)
用户cookie(按需提供)/User cookie(if needed)

cookie
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://api.tikhub.io/api/v1/tiktok/web/fetch_general_search?keyword=TikTok&offset=0' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA=='
Request URL
https://api.tikhub.io/api/v1/tiktok/web/fetch_general_search?keyword=TikTok&offset=0
Server response
Code	Details
200	
Response body
Download
{
  "code": 200,
  "request_id": "89adf103-f010-4143-9072-8f031ed553bc",
  "message": "Request successful. This request will incur a charge.",
  "message_zh": "请求成功，本次请求将被计费。",
  "support": "Discord: https://discord.gg/aMEAS8Xsvz",
  "time": "2026-02-05 02:48:03",
  "time_stamp": 1770288483,
  "time_zone": "America/Los_Angeles",
  "docs": "https://api.tikhub.io/#/TikTok-Web-API/fetch_general_search_api_v1_tiktok_web_fetch_general_search_get",
  "cache_message": "This request will be cached. You can access the cached result directly using the URL below, valid for 24 hours. Accessing the cache will not incur additional charges.",
  "cache_message_zh": "本次请求将被缓存，你可以使用下面的 URL 直接访问缓存结果，有效期为 24 小时，访问缓存不会产生额外费用。",
  "cache_url": "https://cache.tikhub.io/api/v1/cache/public/89adf103-f010-4143-9072-8f031ed553bc?sign=aab13746b8d7b24614cdb37352585586e87265b62286e6c4173fe7dc049c8630",
  "router": "/api/v1/tiktok/web/fetch_general_search",
  "params": {
    "keyword": "TikTok",
    "offset": "0"
  },
  "data": {
    "status_code": 0,
    "data": [
      {
        "type": 1,
        "item": {
          "id": "7603296357641735445",
          "desc": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "createTime": 1770280392,
          "video": {
            "id": "7603296357641735445",
            "height": 1024,
            "width": 576,
            "duration": 15,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/owSrIqhXPBAcVqnuqiiwAI0CaCqwDAuwIJfWEi~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=5KCaIjaZJjufWL0a9pUMeywhRcQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o4VwDiXCiIaIw9wqiEfrh9PAIHqk0BqJABxcA6~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=%2BnhxROj3l%2FH1qgq4%2FhEDeTZsb1U%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oEmDFCTvKIgfH6sEQFKcEfCfoVCPTQAUCDUjA2~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=KOq%2Bno4U7hLFs9w0WxyFAFArzbc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oEqVcQCh0yAw8DJEAwiiwrBPCwAII2PEIXfqqi/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2452&bt=1226&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=ZTc4ZzZmaGRlNWZoZjtlZkBpajY5dGo5cjo4OTMzODczNEBeLjUxLzQyNi0xMWIvYWBiYSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=01a7db5e0aa2b7a2b2183dd22457ffb3&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/osfcdiPqwAAiJuhIQEqtwEAADXrwR0rqBCIEiO/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4054&bt=2027&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=PDY4NDVnZmk1ZTdmZmk4OUBpajY5dGo5cjo4OTMzODczNEAzLV5jNDBeXjAxLjJgL14vYSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d1a561c49810ba2894a26d57151bffe0&tk=tt_chain_token",
            "bitrate": 1256144,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "lower",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 1473213,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v14044g50000d625b7vog65gbqh6k3gg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIFIAEggjsTQTArfIRCCMKSTUHfDICFfovMDJU/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2876&bt=1438&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=aTwzPGZkPGhoOTU2NDtmOUBpajY5dGo5cjo4OTMzODczNEAxYV8yLWItNTExYTAvNWM0YSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d388baff3b1c1fb8623d51c7333da07c&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIFIAEggjsTQTArfIRCCMKSTUHfDICFfovMDJU/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2876&bt=1438&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=aTwzPGZkPGhoOTU2NDtmOUBpajY5dGo5cjo4OTMzODczNEAxYV8yLWItNTExYTAvNWM0YSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d388baff3b1c1fb8623d51c7333da07c&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=76fc882133d2464e8e09ea0c59b0d94f&is_play_url=1&item_id=7603296357641735445&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmUyM2IzM2ZmNWNiY2MxNTYzN2UwYWQ3MGNhZmE0MWI2&tk=tt_chain_token&video_id=v14044g50000d625b7vog65gbqh6k3gg"
                  ],
                  "DataSize": 2762276,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v14044g50000d625b7vog65gbqh6k3gg_bytevc1_720p_1473213",
                  "FileHash": "2fff936aa8d602a56deda4e8cad8d846",
                  "FileCs": "c:0-14121-11f3"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 85.898, \"v960\": 88.28, \"v864\": 91.193, \"v720\": 94.456}, \"ori\": {\"v1080\": 76.896, \"v960\": 80.832, \"v864\": 83.526, \"v720\": 86.868}}}"
              },
              {
                "GearName": "lower_540_0",
                "Bitrate": 1256144,
                "QualityType": 24,
                "PlayAddr": {
                  "Uri": "v14044g50000d625b7vog65gbqh6k3gg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oEqVcQCh0yAw8DJEAwiiwrBPCwAII2PEIXfqqi/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2452&bt=1226&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=ZTc4ZzZmaGRlNWZoZjtlZkBpajY5dGo5cjo4OTMzODczNEBeLjUxLzQyNi0xMWIvYWBiYSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=01a7db5e0aa2b7a2b2183dd22457ffb3&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oEqVcQCh0yAw8DJEAwiiwrBPCwAII2PEIXfqqi/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2452&bt=1226&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=ZTc4ZzZmaGRlNWZoZjtlZkBpajY5dGo5cjo4OTMzODczNEBeLjUxLzQyNi0xMWIvYWBiYSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=01a7db5e0aa2b7a2b2183dd22457ffb3&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=eccbd82cee4c420b9a5e7c234d8514ab&is_play_url=1&item_id=7603296357641735445&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmRkMjVkYmU4ZmI5ZmYyMjRhODA1YjUzNDQ2ZjVjYTQz&tk=tt_chain_token&video_id=v14044g50000d625b7vog65gbqh6k3gg"
                  ],
                  "DataSize": 2355271,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v14044g50000d625b7vog65gbqh6k3gg_h264_540p_1256144",
                  "FileHash": "75d8c4bf20fdaf7bba6c6faef2994146",
                  "FileCs": "c:0-13969-28aa"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 76.474, \"v960\": 81.104, \"v864\": 83.742, \"v720\": 86.568}, \"ori\": {\"v1080\": 67.448, \"v960\": 72.148, \"v864\": 74.062, \"v720\": 80.432}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 1041177,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v14044g50000d625b7vog65gbqh6k3gg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogjUfDfTAguIHgOTCKoFEsUCQCUfwDlI6ADrIv/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2032&bt=1016&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=OjM1OzQ1OWdpPDg7NjU7aUBpajY5dGo5cjo4OTMzODczNEBhNjAxYi9iNV8xMy1hMGItYSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b9df05a9adf924421062120d7f8242df&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogjUfDfTAguIHgOTCKoFEsUCQCUfwDlI6ADrIv/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2032&bt=1016&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=OjM1OzQ1OWdpPDg7NjU7aUBpajY5dGo5cjo4OTMzODczNEBhNjAxYi9iNV8xMy1hMGItYSNkaGVfMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b9df05a9adf924421062120d7f8242df&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=0fe832d3086549bf8de622e1483290d7&is_play_url=1&item_id=7603296357641735445&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjJiNmZiZTUzZGQxYTZhZDBjNTY0YjJkZDJiNzI5YmYy&tk=tt_chain_token&video_id=v14044g50000d625b7vog65gbqh6k3gg"
                  ],
                  "DataSize": 1952207,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v14044g50000d625b7vog65gbqh6k3gg_bytevc1_540p_1041177",
                  "FileHash": "02baf08851270da24e160b7c6e6bb6a8",
                  "FileCs": "c:0-14121-903f"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 81.545, \"v960\": 84.229, \"v864\": 87.368, \"v720\": 90.784}, \"ori\": {\"v1080\": 71.054, \"v960\": 74.226, \"v864\": 78.217, \"v720\": 82.433}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/owSrIqhXPBAcVqnuqiiwAI0CaCqwDAuwIJfWEi~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=gdGLr84nKw9VXqT%2FKc9u6AQF7Sc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/owSrIqhXPBAcVqnuqiiwAI0CaCqwDAuwIJfWEi~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=LoQ3G%2FDdJqFPrFzhXwjmsSP%2BR3Q%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/owSrIqhXPBAcVqnuqiiwAI0CaCqwDAuwIJfWEi~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=cJw8oTt7TCET8cNQFk%2BmU%2BdWyW4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/owSrIqhXPBAcVqnuqiiwAI0CaCqwDAuwIJfWEi~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=tudqstQxeptcDU8hlfM7dNUuvZw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -17.9,
              "Peak": 0.63826
            },
            "size": 2355271,
            "VQScore": "63.38",
            "claInfo": {
              "hasOriginalAudio": false,
              "enableAutoCaption": true,
              "noCaptionReason": 3
            },
            "videoID": "v14044g50000d625b7vog65gbqh6k3gg"
          },
          "author": {
            "id": "7105281502317872154",
            "uniqueId": "dua_zahra014",
            "nickname": "🧚‍♀️دعا🧚‍♀️",
            "avatarThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/2f64899a6a50e8bfb4bc193a98ec706a~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=a29971cf&x-expires=1770458400&x-signature=FDMCeoBO%2BOhBlp06SzWwZ0Q1S50%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/2f64899a6a50e8bfb4bc193a98ec706a~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=11d0e82d&x-expires=1770458400&x-signature=%2BF9k2RIwcj4cuKLg9CQ12q5MjxE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/2f64899a6a50e8bfb4bc193a98ec706a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=500c70c2&x-expires=1770458400&x-signature=83SF2CEjy245g2dXX%2FVC0N86lKI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "❤️* وَتُعِزُ مَن تَشَاء وَتُذِلُ مَن تَشَاء♥️\n\nPR acc insta(Dua_zahra282)\nFollow my live acc @Dua🧚 \nVlog acc@Dua👸🏼",
            "verified": false,
            "secUid": "MS4wLjABAAAAKwXTA14piP2n1-4A9Vrcn-CzfJWtXJbC8_BoQhBCy_G86a0s176gtuep9cxBql0m",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7428683676776532767",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-v-27dcd7-tx2/oc9Og0yHAEA5ATYwAIF2LfqDofbpOKfEIoCAvI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=am5oZXY5cmR5djMzaTU8NEBpam5oZXY5cmR5djMzaTU8NEBxYmBzMmQ0bV9gLS1kMTJzYSNxYmBzMmQ0bV9gLS1kMTJzcw%3D%3D&btag=e00078000&expire=1770310104&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=297f12574993e79028497c413e229d44&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a7caec55962e5619ebcfbbcfe24ca40d~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=0cef4381&x-expires=1770458400&x-signature=ZNlnooyX9SPy2nHNOx3rIulk8FQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a7caec55962e5619ebcfbbcfe24ca40d~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=7a4a5ff5&x-expires=1770458400&x-signature=yOoOKQicgXANhrkjoLUmyVLpnnE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a7caec55962e5619ebcfbbcfe24ca40d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d6adf91e&x-expires=1770458400&x-signature=DlZe1eHaA15Ak9%2BqJbDiST6oWHw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "hoomy",
            "original": true,
            "private": false,
            "duration": 22,
            "isCopyrighted": true,
            "tt2dsp": {}
          },
          "challenges": [
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1657833191306245",
              "title": "سارائیکی",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "85133",
              "title": "viralvideo",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "12061748",
              "title": "growmyaccount",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 2887,
            "shareCount": 38,
            "commentCount": 179,
            "playCount": 12100,
            "collectCount": 100
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 14,
              "end": 21,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 21,
              "end": 30,
              "hashtagName": "سارائیکی",
              "hashtagId": "1657833191306245",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 30,
              "end": 41,
              "hashtagName": "viralvideo",
              "hashtagId": "85133",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 41,
              "end": 48,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 48,
              "end": 62,
              "hashtagName": "growmyaccount",
              "hashtagId": "12061748",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 3,
            "followerCount": 398400,
            "heartCount": 17900000,
            "videoCount": 1062,
            "diggCount": 3199,
            "heart": 17900000,
            "friendCount": 0
          },
          "privateItem": false,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 14,
                  "end": 21,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 21,
                  "end": 30,
                  "hashtagName": "سارائیکی",
                  "hashtagId": "1657833191306245",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 30,
                  "end": 41,
                  "hashtagName": "viralvideo",
                  "hashtagId": "85133",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 41,
                  "end": 48,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 48,
                  "end": 62,
                  "hashtagName": "growmyaccount",
                  "hashtagId": "12061748",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10071,
          "collected": false,
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "2887",
            "shareCount": "38",
            "commentCount": "179",
            "playCount": "12100",
            "collectCount": "100",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 110,
          "textLanguage": "hi",
          "textTranslatable": true,
          "authorStatsV2": {
            "followingCount": "3",
            "followerCount": "398400",
            "heartCount": "17900000",
            "videoCount": "1062",
            "diggCount": "3199",
            "heart": "17900000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603296357641735445"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7559547420254719287",
          "desc": "#fyp #tiktok #foryou ",
          "createTime": 1760094373,
          "video": {
            "id": "7559547420254719287",
            "height": 768,
            "width": 576,
            "duration": 62,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oQkURApBckG2dIQRP0LeHCAVe0ek5gQTjVGQI3~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=hU4zVyjzuipkGKWhlJ%2BtjM2QTo0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oo0fEToERSyf0c3Q6gBOaI36IAJoOoDyy7KDFB~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=3TBXte4W04ptoB%2F%2BM8mckubJZiw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oUczfAD6Q6jDKFROoJf7cCSEgIIoByZIlzoOE0~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=JKx3SH2Zyu7e4e%2FcYTonoTF%2BYn8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o03EO60LIJoESz6BfoKDfDQRc7AFQPOgMFIoEy/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3212&bt=1606&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OzQ1OmQ5aTU8OjczZDY6N0BpM3l3aG45cmhoNjMzZzczNEAyMTY1Xy9iNmAxXl8xLS0yYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a7e1c6e68cb9d264f9d41e843b65c256&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-ve-0068c002-tx/oocIk0gfTLpgACkFdRQ3jrAZ5IQSeHeGIo6K5k/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3292&bt=1646&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=M2c3PDtoODU3N2Q3aGU2ZkBpM3l3aG45cmhoNjMzZzczNEAtMDFhLl5eNjYxLzViYV42YSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=50b5bd2355e280b43ede36b6cecb10df&tk=tt_chain_token",
            "bitrate": 1645521,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "adapt_lowest_1080_1",
                "Bitrate": 2375016,
                "QualityType": 2,
                "PlayAddr": {
                  "Uri": "v12044gd0000d3keeevog65k2e8tkv80",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o8IbIRBoy6o7cF0GoQjDAgQESfDfA7JqOERyEO/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4638&bt=2319&cs=2&ds=4&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=15&rc=NDM2NmlpZTc7NDg3ODM8PEBpM3l3aG45cmhoNjMzZzczNEAvYl4zNC1hNjAxYDYzNWExYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=708328c16d705f939a0988871de3d96a&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o8IbIRBoy6o7cF0GoQjDAgQESfDfA7JqOERyEO/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4638&bt=2319&cs=2&ds=4&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=15&rc=NDM2NmlpZTc7NDg3ODM8PEBpM3l3aG45cmhoNjMzZzczNEAvYl4zNC1hNjAxYDYzNWExYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=708328c16d705f939a0988871de3d96a&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=49d9806594c5413894db0f7f63a3e021&is_play_url=1&item_id=7559547420254719287&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmExNGEzYWQ2OWMwMmI3YmVhOTgxNzY4NzYyNjQ1YjQ4&tk=tt_chain_token&video_id=v12044gd0000d3keeevog65k2e8tkv80"
                  ],
                  "DataSize": 18522457,
                  "Width": 1080,
                  "Height": 1440,
                  "UrlKey": "v12044gd0000d3keeevog65k2e8tkv80_bytevc1_1080p_2375016",
                  "FileHash": "de51d842e85e899f17725fffdf48f84d",
                  "FileCs": "c:0-69734-fe11"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 92.555, \"v960\": 94.105, \"v864\": 94.887, \"v720\": 96.343}, \"ori\": {\"v1080\": 86.432, \"v960\": 88.071, \"v864\": 89.236, \"v720\": 91.035}}}"
              },
              {
                "GearName": "normal_540_0",
                "Bitrate": 1645521,
                "QualityType": 20,
                "PlayAddr": {
                  "Uri": "v12044gd0000d3keeevog65k2e8tkv80",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o03EO60LIJoESz6BfoKDfDQRc7AFQPOgMFIoEy/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3212&bt=1606&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OzQ1OmQ5aTU8OjczZDY6N0BpM3l3aG45cmhoNjMzZzczNEAyMTY1Xy9iNmAxXl8xLS0yYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a7e1c6e68cb9d264f9d41e843b65c256&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o03EO60LIJoESz6BfoKDfDQRc7AFQPOgMFIoEy/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3212&bt=1606&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OzQ1OmQ5aTU8OjczZDY6N0BpM3l3aG45cmhoNjMzZzczNEAyMTY1Xy9iNmAxXl8xLS0yYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a7e1c6e68cb9d264f9d41e843b65c256&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=5407034ab0a447c992ef26ba87924158&is_play_url=1&item_id=7559547420254719287&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmEzNTUxZGM5NjcwNDI5Yzk2NWE0MzFkODIyYzRjMWJi&tk=tt_chain_token&video_id=v12044gd0000d3keeevog65k2e8tkv80"
                  ],
                  "DataSize": 12842058,
                  "Width": 576,
                  "Height": 768,
                  "UrlKey": "v12044gd0000d3keeevog65k2e8tkv80_h264_540p_1645521",
                  "FileHash": "aa5b8ba912233e92d289362a987c9652",
                  "FileCs": "c:0-52642-bd9c"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 91.704, \"v960\": 96.765, \"v864\": 97.369, \"v720\": 98.499}, \"ori\": {\"v1080\": 84.101, \"v960\": 85.159, \"v864\": 88.159, \"v720\": 92.382}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 1163137,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v12044gd0000d3keeevog65k2e8tkv80",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/oIGkUIQg5I003LzIekIeHdIfMpRgCjATRRQcAH/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2270&bt=1135&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=OGZlNTY5NjQ2aDVlN2k2NkBpM3l3aG45cmhoNjMzZzczNEAyMS0zM2BfNjQxMGMwLTVgYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d990f62af02b7d2f6c454c8ac698ff47&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/oIGkUIQg5I003LzIekIeHdIfMpRgCjATRRQcAH/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2270&bt=1135&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=OGZlNTY5NjQ2aDVlN2k2NkBpM3l3aG45cmhoNjMzZzczNEAyMS0zM2BfNjQxMGMwLTVgYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d990f62af02b7d2f6c454c8ac698ff47&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=c3830f34fb324e7391b3c663620b4c55&is_play_url=1&item_id=7559547420254719287&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmI1NzBmNTM3YzBlYzcwMmYwYmQzMDQxZjgxOWMxZDRj&tk=tt_chain_token&video_id=v12044gd0000d3keeevog65k2e8tkv80"
                  ],
                  "DataSize": 9077414,
                  "Width": 720,
                  "Height": 960,
                  "UrlKey": "v12044gd0000d3keeevog65k2e8tkv80_bytevc1_720p_1163137",
                  "FileHash": "623dca38d5154fec4b42a35aead4c882",
                  "FileCs": "c:0-53083-06e7"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 93.144, \"v960\": 95.155, \"v864\": 96.789, \"v720\": 98.258}, \"ori\": {\"v1080\": 84.0, \"v960\": 87.138, \"v864\": 89.468, \"v720\": 92.883}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 989231,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v12044gd0000d3keeevog65k2e8tkv80",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-ve-0068c001-tx/oUHDOcoyQ6RfE7JEFOAPIIEDogIS6X0BQ4fZZo/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1932&bt=966&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=aTxlN2YzZjg6OGc7PGg0N0BpM3l3aG45cmhoNjMzZzczNEAvNTReMTYtXzExYy1hNTYyYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=581144593457ddd0ba9a97a0ed4334e2&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-ve-0068c001-tx/oUHDOcoyQ6RfE7JEFOAPIIEDogIS6X0BQ4fZZo/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1932&bt=966&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=aTxlN2YzZjg6OGc7PGg0N0BpM3l3aG45cmhoNjMzZzczNEAvNTReMTYtXzExYy1hNTYyYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=581144593457ddd0ba9a97a0ed4334e2&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=54918ed908fd4547b50c904ca47b892f&is_play_url=1&item_id=7559547420254719287&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjViYmE2Zjk0YzU4MjNmNWM0Mjg3NGUzZDM1MzBhM2E1&tk=tt_chain_token&video_id=v12044gd0000d3keeevog65k2e8tkv80"
                  ],
                  "DataSize": 7720213,
                  "Width": 576,
                  "Height": 768,
                  "UrlKey": "v12044gd0000d3keeevog65k2e8tkv80_bytevc1_540p_989231",
                  "FileHash": "f1121ed1bdf18f2dd3b88c12e6d1fac1",
                  "FileCs": "c:0-53083-40cf"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 90.969, \"v960\": 93.757, \"v864\": 95.665, \"v720\": 97.68}, \"ori\": {\"v1080\": 80.042, \"v960\": 83.483, \"v864\": 86.394, \"v720\": 90.468}}}"
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 646589,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v12044gd0000d3keeevog65k2e8tkv80",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o0RnkWoT3CeQcALjQHpIkLHgJ0IdAlefk56GIg/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1262&bt=631&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=NWU3NmlpM2lkNWU1ODppaEBpM3l3aG45cmhoNjMzZzczNEA0YzE2L15iNTIxLl4vMjIzYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e5857616c493b0d99da5c5f629e74b89&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o0RnkWoT3CeQcALjQHpIkLHgJ0IdAlefk56GIg/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1262&bt=631&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=NWU3NmlpM2lkNWU1ODppaEBpM3l3aG45cmhoNjMzZzczNEA0YzE2L15iNTIxLl4vMjIzYSM1aDUvMmRzYmhhLS1kMS9zcw%3D%3D&btag=e00090000&expire=1770461345&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e5857616c493b0d99da5c5f629e74b89&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=6e5f5725a21b425a8fe0af2f9344fb72&is_play_url=1&item_id=7559547420254719287&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjE4NWJjNTIxMDcxN2FjM2U3YTg0NDlmMGNmOTNkNTk0&tk=tt_chain_token&video_id=v12044gd0000d3keeevog65k2e8tkv80"
                  ],
                  "DataSize": 5046147,
                  "Width": 576,
                  "Height": 768,
                  "UrlKey": "v12044gd0000d3keeevog65k2e8tkv80_h264_540p_646589",
                  "FileHash": "8c026c188372b00039e2e677d35ccc22",
                  "FileCs": "c:0-52650-a96a"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 74.592, \"v960\": 78.512, \"v864\": 81.218, \"v720\": 82.564}, \"ori\": {\"v1080\": 64.768, \"v960\": 69.049, \"v864\": 70.397, \"v720\": 75.998}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oQkURApBckG2dIQRP0LeHCAVe0ek5gQTjVGQI3~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=kW0qVHCEhRX6KbFzRkoh6bUg3FA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oQkURApBckG2dIQRP0LeHCAVe0ek5gQTjVGQI3~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=obrNRCkPvpRiDHm%2F52buI8yScmY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oQkURApBckG2dIQRP0LeHCAVe0ek5gQTjVGQI3~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=DAVvvlQRKPCBvuE1ggFq%2FSK9zNY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oQkURApBckG2dIQRP0LeHCAVe0ek5gQTjVGQI3~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=SPF2QAUmjpubAXIH%2Fc1hhihRBak%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -16.8,
              "Peak": 0.47863
            },
            "size": 12842058,
            "VQScore": "62.36",
            "claInfo": {
              "hasOriginalAudio": false,
              "enableAutoCaption": false,
              "noCaptionReason": 2
            },
            "videoID": "v12044gd0000d3keeevog65k2e8tkv80",
            "videoTags": [
              {
                "title": "Top liked",
                "font_color": "#FFFFFF",
                "background_color": "#545454",
                "opacity": 50,
                "en_title": "Top liked",
                "type": "Top liked"
              }
            ]
          },
          "author": {
            "id": "7546487956530807822",
            "uniqueId": "bihuo88898",
            "nickname": "bihuo888",
            "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/5de4c438fdd561a67ce8b10dd86dc220~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=299075a9&x-expires=1770458400&x-signature=pIOlJ1QSqUUBqwYdCoZffcgWVB8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/5de4c438fdd561a67ce8b10dd86dc220~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=7818ba1d&x-expires=1770458400&x-signature=3R1nWnvZI9FuJ60YBTlEG2sLN3I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/5de4c438fdd561a67ce8b10dd86dc220~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=40c8059a&x-expires=1770458400&x-signature=i2rUJ6CAaakfF511m4XaDJBxKOQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "",
            "verified": false,
            "secUid": "MS4wLjABAAAAHlRlOaNP3oYk4SJMhQtZFZlzigXeshQj6V4utIGj2HZLTeEJYT6m58ZmGS_hAoWL",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "6929134618984056834",
            "title": "Love Me Like You Do - From \"Fifty Shades Of Grey\"",
            "playUrl": "https://sf16.tiktokcdn-us.com/obj/tos-alisg-ve-2774/oQN1NmVJE2EbCF1YNdQQfgBspDqNBKDstY0fZy",
            "coverThumb": "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/o8gr3agNfCIePMBJADZmnmBcZEBQFtAWpbAIni~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/o8gr3agNfCIePMBJADZmnmBcZEBQFtAWpbAIni~tplv-tiktokx-cropcenter:200:200.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p16-common.tiktokcdn-us.com/tos-alisg-v-2774/o8gr3agNfCIePMBJADZmnmBcZEBQFtAWpbAIni~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9584&t=4d5b0474&ps=933b5bde&shp=08d74b56&shcp=81f88b70&idc=useast5",
            "authorName": "Ellie Goulding",
            "original": false,
            "private": false,
            "duration": 60,
            "album": "Delirium - Deluxe",
            "isCopyrighted": true,
            "tt2dsp": {
              "tt_to_dsp_song_infos": [
                {
                  "platform": 1,
                  "song_id": "1040127751",
                  "token": {
                    "apple_music_token": {
                      "developer_token": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ikc2Q0dLMjdWQzMifQ.eyJleHAiOjE3NzA1MDM0MDgsImlhdCI6MTc3MDI0NDIwOCwiaXNzIjoiTUo3OTdEOFU2RiJ9.x6ipd7ZVPGpITRy4PsRYxgIs2q96bGsvmFOAsWVCBb39e6UNmPRELv_op10DKuxzTHoRPJO_RMS7bVluhln0MQ"
                    }
                  },
                  "meta_song_id": "6732358759097567233"
                },
                {
                  "platform": 3,
                  "song_id": "3zHq9ouUJQFQRf3cm1rRLu",
                  "meta_song_id": "6732358759097567233"
                }
              ]
            }
          },
          "challenges": [
            {
              "id": "229207",
              "title": "fyp",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 1800000,
            "shareCount": 24200,
            "commentCount": 3088,
            "playCount": 16900000,
            "collectCount": 71200
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 0,
              "end": 4,
              "hashtagName": "fyp",
              "hashtagId": "229207",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 5,
              "end": 12,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 13,
              "end": 20,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 4,
            "followerCount": 11600,
            "heartCount": 1900000,
            "videoCount": 40,
            "diggCount": 8,
            "heart": 1900000,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "#fyp #tiktok #foryou ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 0,
                  "end": 4,
                  "hashtagName": "fyp",
                  "hashtagId": "229207",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 5,
                  "end": 12,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 13,
                  "end": 20,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10087,
          "collected": false,
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "1800000",
            "shareCount": "24200",
            "commentCount": "3088",
            "playCount": "16900000",
            "collectCount": "71235",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 114,
          "textLanguage": "un",
          "textTranslatable": false,
          "authorStatsV2": {
            "followingCount": "4",
            "followerCount": "11600",
            "heartCount": "1900000",
            "videoCount": "40",
            "diggCount": "8",
            "heart": "1900000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7559547420254719287"
        }
      },
      {
        "type": 4,
        "user_list": [
          {
            "user_info": {
              "uid": "107955",
              "nickname": "TikTok",
              "signature": "One TikTok can make a big impact",
              "avatar_thumb": {
                "uri": "tos-useast5-avt-0068-tx/ba67b11de451691939223e9d978e613a",
                "url_list": [
                  "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ba67b11de451691939223e9d978e613a~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=c0cf5785&x-expires=1770372000&x-signature=6oEZWJyTyl7VLVJCYl2a2lKFMpA%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ba67b11de451691939223e9d978e613a~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=7f4c6c95&x-expires=1770372000&x-signature=By5RdU1ezlPjCmDMHjKCuUBcEoc%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ba67b11de451691939223e9d978e613a~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=bf59c5bd&x-expires=1770372000&x-signature=vffrHHj%2FIobQrcCrUAVBuXpSFCc%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=useast5"
                ],
                "width": 720,
                "height": 720,
                "url_prefix": null
              },
              "follow_status": 0,
              "follower_count": 92700000,
              "total_favorited": 453517656,
              "custom_verify": "",
              "unique_id": "tiktok",
              "room_id": 0,
              "enterprise_verify_reason": "verified account",
              "followers_detail": null,
              "platform_sync_info": null,
              "geofencing": null,
              "cover_url": null,
              "item_list": null,
              "type_label": null,
              "ad_cover_url": null,
              "relative_users": null,
              "cha_list": null,
              "sec_uid": "MS4wLjABAAAAv7iSuuXDJGDvJkmH_vz1qkDZYo1apxgzaxdBSeIuPiM",
              "need_points": null,
              "homepage_bottom_toast": null,
              "can_set_geofencing": null,
              "white_cover_url": null,
              "user_tags": null,
              "bold_fields": null,
              "search_highlight": null,
              "mutual_relation_avatars": null,
              "room_id_str": "0",
              "events": null,
              "advance_feature_item_order": null,
              "advanced_feature_info": null,
              "user_profile_guide": null,
              "shield_edit_field_info": null,
              "can_message_follow_status_list": null,
              "account_labels": null
            },
            "position": null,
            "uniqid_position": null,
            "effects": null,
            "musics": null,
            "items": null,
            "mix_list": null,
            "challenges": null
          }
        ],
        "has_top_user": 0,
        "view_more": true,
        "card_title": "Users",
        "common": {
          "doc_id_str": "1"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7327239258589170976",
          "desc": "#Filme #foryou #fyp #movie #film #tiktok",
          "createTime": 1706568000,
          "video": {
            "id": "7327239258589170976",
            "height": 1024,
            "width": 576,
            "duration": 58,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/ocKpQeIGr6eG8IeDKLyfEkMgmjLzjrAXjZE0wg~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=ivMWTzJ8VeHDzjRRA%2BZQTSLVvcc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/4ff9fa998fed46d89b439fb14aafd5cf_1706005844~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=Fyl%2Fbkmm1KQ6FwfF1Qw4CXBrwXU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/60d2f08b4934409ba325106c885373b5_1706005845~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=am5B2clGhHh1cksGcX7vYT6RszI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ocoJCHvEVPRffUuDlQQ5wEYrIAdlxkDZOsVDFB/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2060&bt=1030&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=MzRkODRkPDw3OGloZTZnO0Bpajw2ZGw5cmVzcDMzZjgzM0BgMDJgMS1fNjExLzBeNjIzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=860eea2a85c9f2bf80cd2c0ce2db524b&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/okUGjpLIejSGrEj9gZekyeI3LEArvgXI0Ge6QQ/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2162&bt=1081&cs=0&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=aDZpNmQ1NGlmODlpZzU8OkBpajw2ZGw5cmVzcDMzZjgzM0AvXjBiNDQtXi4xYWAzMS1gYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=855f58e1a88999bd8f293998b00454d6&tk=tt_chain_token",
            "bitrate": 1055670,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "normal_540_0",
                "Bitrate": 1055670,
                "QualityType": 20,
                "PlayAddr": {
                  "Uri": "v0f025gc0000cmnpab7og65i7a73u91g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ocoJCHvEVPRffUuDlQQ5wEYrIAdlxkDZOsVDFB/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2060&bt=1030&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=MzRkODRkPDw3OGloZTZnO0Bpajw2ZGw5cmVzcDMzZjgzM0BgMDJgMS1fNjExLzBeNjIzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=860eea2a85c9f2bf80cd2c0ce2db524b&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ocoJCHvEVPRffUuDlQQ5wEYrIAdlxkDZOsVDFB/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2060&bt=1030&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=MzRkODRkPDw3OGloZTZnO0Bpajw2ZGw5cmVzcDMzZjgzM0BgMDJgMS1fNjExLzBeNjIzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=860eea2a85c9f2bf80cd2c0ce2db524b&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=685d93ab3e2f454499b90a41c55a31c0&is_play_url=1&item_id=7327239258589170976&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjVlOTdhMDhjZmEwZTc5YzUwZDY1N2QyNjMzZTVkYTQx&tk=tt_chain_token&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "DataSize": 7745059,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v0f025gc0000cmnpab7og65i7a73u91g_h264_540p_1055670",
                  "FileHash": "d1611716d9761e38a89a9f8c619660ca",
                  "FileCs": "c:0-49365-5b99"
                },
                "CodecType": "h264",
                "MVMAF": ""
              },
              {
                "GearName": "adapt_lowest_1080_1",
                "Bitrate": 985171,
                "QualityType": 2,
                "PlayAddr": {
                  "Uri": "v0f025gc0000cmnpab7og65i7a73u91g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ogSCfKFrJIDmskQAUD5QfREdl4EvVVxDPG55TB/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1924&bt=962&cs=2&ds=4&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=15&rc=O2c2OzVlNjk6PDhmNGZpZkBpajw2ZGw5cmVzcDMzZjgzM0AzNjQyNjRiXzYxMV41YWEvYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=65e86c8e9c1601a9afdb46c7239510b0&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ogSCfKFrJIDmskQAUD5QfREdl4EvVVxDPG55TB/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1924&bt=962&cs=2&ds=4&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=15&rc=O2c2OzVlNjk6PDhmNGZpZkBpajw2ZGw5cmVzcDMzZjgzM0AzNjQyNjRiXzYxMV41YWEvYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=65e86c8e9c1601a9afdb46c7239510b0&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=2cdfdc81ac454997b6e37b9258739d68&is_play_url=1&item_id=7327239258589170976&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmE2MDk0YWZlYjM3Yjg5MmNiYTBkYjIyYjdiMmQ5NDZj&tk=tt_chain_token&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "DataSize": 7227837,
                  "Width": 1080,
                  "Height": 1920,
                  "UrlKey": "v0f025gc0000cmnpab7og65i7a73u91g_bytevc1_1080p_985171",
                  "FileHash": "81a251ea54301bad7c3cb4b4fe830b1a",
                  "FileCs": "c:0-49778-effb"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": ""
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 685196,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v0f025gc0000cmnpab7og65i7a73u91g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/oIfEQIrIdxyTDmlDRF5sC6EE4DkFfAAJVQBU2P/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1338&bt=669&cs=2&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=aWQ6OGU4N2dmOjwzaGY8OUBpajw2ZGw5cmVzcDMzZjgzM0BeXjItYWFiNV4xNTMzYjYwYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=998a28c4d25f8a0756be7156a312adbd&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/oIfEQIrIdxyTDmlDRF5sC6EE4DkFfAAJVQBU2P/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1338&bt=669&cs=2&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=aWQ6OGU4N2dmOjwzaGY8OUBpajw2ZGw5cmVzcDMzZjgzM0BeXjItYWFiNV4xNTMzYjYwYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=998a28c4d25f8a0756be7156a312adbd&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=3699ec6e608947ac8de4d5db0557aaaf&is_play_url=1&item_id=7327239258589170976&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjMzMjhiYzcxZWJiZDE4NjExZDZiOTg4YmJiMzZhZTZl&tk=tt_chain_token&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "DataSize": 5027030,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v0f025gc0000cmnpab7og65i7a73u91g_bytevc1_720p_685196",
                  "FileHash": "89602d75eba012d48823621d247b8ca4",
                  "FileCs": "c:0-49787-1644"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": ""
              },
              {
                "GearName": "lower_540_0",
                "Bitrate": 623174,
                "QualityType": 24,
                "PlayAddr": {
                  "Uri": "v0f025gc0000cmnpab7og65i7a73u91g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/o8XQ5EEsvklADO5lRzEyBFrCVDVDdQUPxIfCfJ/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1216&bt=608&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=NDk5aTM0ODc8Z2hkNGk2ZUBpajw2ZGw5cmVzcDMzZjgzM0BfMzVfYDMvXmIxL2A1X2JiYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=1800207bd989e98af9f9d3154d660149&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/o8XQ5EEsvklADO5lRzEyBFrCVDVDdQUPxIfCfJ/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1216&bt=608&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=NDk5aTM0ODc8Z2hkNGk2ZUBpajw2ZGw5cmVzcDMzZjgzM0BfMzVfYDMvXmIxL2A1X2JiYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=1800207bd989e98af9f9d3154d660149&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=ebe3bf81ca2e4de9a42561c0bf8666b1&is_play_url=1&item_id=7327239258589170976&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmEyZDU2Yzc0OGIyNmVhMDI0YTk4ZGZiNWE1ZmIwNjU3&tk=tt_chain_token&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "DataSize": 4571997,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v0f025gc0000cmnpab7og65i7a73u91g_h264_540p_623174",
                  "FileHash": "36d5e5fb14f047a3f176c8ff1dd6b67e",
                  "FileCs": "c:0-49365-bc80"
                },
                "CodecType": "h264",
                "MVMAF": ""
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 580791,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v0f025gc0000cmnpab7og65i7a73u91g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/oMGDUDDcFEJsrT4aEVoDABfCdkxIEPQfQl5RGE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1134&bt=567&cs=2&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=OTM7aWZlMzxnNjxpMzw2aUBpajw2ZGw5cmVzcDMzZjgzM0AtNi1eLmMxX2AxLTJfYS41YSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=527e2961c06505bdb1fce67e7de0ef16&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/oMGDUDDcFEJsrT4aEVoDABfCdkxIEPQfQl5RGE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1134&bt=567&cs=2&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=OTM7aWZlMzxnNjxpMzw2aUBpajw2ZGw5cmVzcDMzZjgzM0AtNi1eLmMxX2AxLTJfYS41YSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=527e2961c06505bdb1fce67e7de0ef16&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=8f13d9b05f0943cdb940fb1caf089006&is_play_url=1&item_id=7327239258589170976&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmQ1ZTgyODY1ZTUzZTEyNWJkY2U4MTQyNGY4ZjE4NDMz&tk=tt_chain_token&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "DataSize": 4261049,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v0f025gc0000cmnpab7og65i7a73u91g_bytevc1_540p_580791",
                  "FileHash": "33dbae945a78e7c96761c7994f50682b",
                  "FileCs": "c:0-49795-e72c"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": ""
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 465746,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v0f025gc0000cmnpab7og65i7a73u91g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ogDvDxQEEsDArPxF5uBRillUkDdDVCQQI0VJff/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=908&bt=454&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=Ojw5OjQ3NDhnOjhnZWVkZUBpajw2ZGw5cmVzcDMzZjgzM0AxNWIxY2AtNmIxNGBhXl8vYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=bd6d8c4b5073ac7b9e0135ccfc2f8772&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/no1a/tos-no1a-ve-37c710-no/ogDvDxQEEsDArPxF5uBRillUkDdDVCQQI0VJff/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=908&bt=454&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=Ojw5OjQ3NDhnOjhnZWVkZUBpajw2ZGw5cmVzcDMzZjgzM0AxNWIxY2AtNmIxNGBhXl8vYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&btag=e00088000&expire=1770461340&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=bd6d8c4b5073ac7b9e0135ccfc2f8772&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=2bbaabdbcd7547ed9501c4f147e68947&is_play_url=1&item_id=7327239258589170976&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjg5ODRkNzIwMjk1Mjc2NzI3YWM1YzRjZjQ2ZWJjODg0&tk=tt_chain_token&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "DataSize": 3417009,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v0f025gc0000cmnpab7og65i7a73u91g_h264_540p_465746",
                  "FileHash": "9e0c9cc43565bb5d667fa83f39022b6e",
                  "FileCs": "c:0-49381-e2a1"
                },
                "CodecType": "h264",
                "MVMAF": ""
              }
            ],
            "subtitleInfos": [
              {
                "LanguageID": "2",
                "LanguageCodeName": "eng-US",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/5a03737a0642fc4a1600b3232e2ec068/6987189c/video/tos/no1a/tos-no1a-v-37c710-no/44efb05bf23a4f8a8eb82fef20c37873/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=7968&bt=3984&cs=0&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajw2ZGw5cmVzcDMzZjgzM0Bpajw2ZGw5cmVzcDMzZjgzM0AucjQ0MmQ0XmtgLS1kL2NzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                "UrlExpire": 1770461340,
                "Format": "webvtt",
                "Version": "1:llm",
                "Source": "ASR",
                "Size": 1666
              }
            ],
            "zoomCover": {
              "240": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/ocKpQeIGr6eG8IeDKLyfEkMgmjLzjrAXjZE0wg~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=ePNw68uz9jnkEshrGw6zwlILV7Q%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/ocKpQeIGr6eG8IeDKLyfEkMgmjLzjrAXjZE0wg~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=qR9RTW0iQ9LRmkimH%2B6D%2F2lVHtE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/ocKpQeIGr6eG8IeDKLyfEkMgmjLzjrAXjZE0wg~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=kMVh0nPodxgmfPZT4lswVGSRi4A%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/ocKpQeIGr6eG8IeDKLyfEkMgmjLzjrAXjZE0wg~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=fgwTnLKpt5leycZnY9%2FC7GFWhUE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -31.4,
              "Peak": 0.2851
            },
            "size": 7745059,
            "VQScore": "63.38",
            "claInfo": {
              "hasOriginalAudio": false,
              "enableAutoCaption": true,
              "originalLanguageInfo": {
                "language": "eng-US",
                "languageID": "2",
                "languageCode": "",
                "canTranslateRealTimeNoCheck": true
              },
              "captionInfos": [
                {
                  "language": "eng-US",
                  "languageID": "2",
                  "url": "https://v16m-webapp.tiktokcdn-us.com/5a03737a0642fc4a1600b3232e2ec068/6987189c/video/tos/no1a/tos-no1a-v-37c710-no/44efb05bf23a4f8a8eb82fef20c37873/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=7968&bt=3984&cs=0&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajw2ZGw5cmVzcDMzZjgzM0Bpajw2ZGw5cmVzcDMzZjgzM0AucjQ0MmQ0XmtgLS1kL2NzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                  "expire": "1770461340",
                  "captionFormat": "webvtt",
                  "isAutoGen": true,
                  "subID": "2111903331",
                  "claSubtitleID": "7329689768987314976",
                  "languageCode": "",
                  "isOriginalCaption": true,
                  "urlList": [
                    "https://v16m-webapp.tiktokcdn-us.com/5a03737a0642fc4a1600b3232e2ec068/6987189c/video/tos/no1a/tos-no1a-v-37c710-no/44efb05bf23a4f8a8eb82fef20c37873/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=7968&bt=3984&cs=0&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajw2ZGw5cmVzcDMzZjgzM0Bpajw2ZGw5cmVzcDMzZjgzM0AucjQ0MmQ0XmtgLS1kL2NzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                    "https://v16m-webapp.tiktokcdn-us.com/5a03737a0642fc4a1600b3232e2ec068/6987189c/video/tos/no1a/tos-no1a-v-37c710-no/44efb05bf23a4f8a8eb82fef20c37873/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=7968&bt=3984&cs=0&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajw2ZGw5cmVzcDMzZjgzM0Bpajw2ZGw5cmVzcDMzZjgzM0AucjQ0MmQ0XmtgLS1kL2NzYSMucjQ0MmQ0XmtgLS1kL2Nzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&format=webvtt&is_play_url=1&language=eng-US&line=0&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjI0ODVhMTg2NDQ3M2FkZGIwM2VmMWIyYTU2ZmFhNGVk&source=SmartPlayerSubtitleRedirect&version=1%3Allm&video_id=v0f025gc0000cmnpab7og65i7a73u91g"
                  ],
                  "variant": "llm",
                  "subtitleType": "1",
                  "translationType": "0"
                }
              ],
              "captionsType": 1
            },
            "videoID": "v0f025gc0000cmnpab7og65i7a73u91g"
          },
          "author": {
            "id": "7296012904595489825",
            "uniqueId": "user2617125334535",
            "nickname": "user2617125334535",
            "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/0d82367060ffb164ae303cc788ca53c1~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=8cad0bad&x-expires=1770458400&x-signature=M%2FkOS9%2F%2BMXinVVuktJlHY7%2BjnLU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/0d82367060ffb164ae303cc788ca53c1~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=177d7874&x-expires=1770458400&x-signature=fihFIhsb2XYzCe1zXMa104KhzT0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/0d82367060ffb164ae303cc788ca53c1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6356717d&x-expires=1770458400&x-signature=BNeB3NIgvFumWeR7HjvwaucLhvw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "",
            "verified": false,
            "secUid": "MS4wLjABAAAADdOY8NvgSIKeNlsDdd_WZWpAJd2P4n4r9Af1GU9BoixBbUZntyny4NtRby2_-FvU",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7327239294523378464",
            "title": "original sound - user2617125334535",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast2a/tos-useast2a-v-2370-euttp/oQvgUAtUJEMCVPQfhCEAhBDlAyfFEDU5BQxVlr/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=amQ2N2o5cm9zcDMzZjU8M0BpamQ2N2o5cm9zcDMzZjU8M0BjLTFnMmQ0XmtgLS1kMWNzYSNjLTFnMmQ0XmtgLS1kMWNzcw%3D%3D&btag=e00048000&expire=1770310140&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=aefc2ce5eb8a98691a969ddaad026be6&tk=0",
            "coverThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/0d82367060ffb164ae303cc788ca53c1~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=8cad0bad&x-expires=1770458400&x-signature=M%2FkOS9%2F%2BMXinVVuktJlHY7%2BjnLU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/0d82367060ffb164ae303cc788ca53c1~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=177d7874&x-expires=1770458400&x-signature=fihFIhsb2XYzCe1zXMa104KhzT0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/0d82367060ffb164ae303cc788ca53c1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6356717d&x-expires=1770458400&x-signature=BNeB3NIgvFumWeR7HjvwaucLhvw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "user2617125334535",
            "original": true,
            "private": false,
            "duration": 58,
            "isCopyrighted": false,
            "tt2dsp": {}
          },
          "challenges": [
            {
              "id": "880742",
              "title": "filme",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "229207",
              "title": "fyp",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "9960",
              "title": "movie",
              "desc": "Is it drama, comedy, or action? Show us the #Movie you are currently watching 🍿",
              "profileThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/f985b0123891a188ff34f5cb39ae3e48.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=ETVColHVJsyzxMtl65ijCL0HMv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/f985b0123891a188ff34f5cb39ae3e48.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=ETVColHVJsyzxMtl65ijCL0HMv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/f985b0123891a188ff34f5cb39ae3e48.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=ETVColHVJsyzxMtl65ijCL0HMv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "28707",
              "title": "film",
              "desc": "Welchen #Film hast du schon 1000 Mal gesehen und bekommst trotzdem nicht genug? 📽",
              "profileThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/b481db7f6d530d502b6b1280a19e238b.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=XTzp8I2SOgc1X2kInEFeqPHpICs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/b481db7f6d530d502b6b1280a19e238b.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=XTzp8I2SOgc1X2kInEFeqPHpICs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/b481db7f6d530d502b6b1280a19e238b.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=XTzp8I2SOgc1X2kInEFeqPHpICs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/aba9baf9392c3cc2ae5a0cbac31de281.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=Mhf1RFlqCx63dIUkqBLO1XNFamg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/aba9baf9392c3cc2ae5a0cbac31de281.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=Mhf1RFlqCx63dIUkqBLO1XNFamg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/aba9baf9392c3cc2ae5a0cbac31de281.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=Mhf1RFlqCx63dIUkqBLO1XNFamg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 107900,
            "shareCount": 154,
            "commentCount": 82,
            "playCount": 1000000,
            "collectCount": 4501
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 0,
              "end": 6,
              "hashtagName": "filme",
              "hashtagId": "880742",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 7,
              "end": 14,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 15,
              "end": 19,
              "hashtagName": "fyp",
              "hashtagId": "229207",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 20,
              "end": 26,
              "hashtagName": "movie",
              "hashtagId": "9960",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 27,
              "end": 32,
              "hashtagName": "film",
              "hashtagId": "28707",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 33,
              "end": 40,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 0,
            "followerCount": 780,
            "heartCount": 121300,
            "videoCount": 150,
            "diggCount": 9,
            "heart": 121300,
            "friendCount": 0
          },
          "privateItem": false,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "#Filme #foryou #fyp #movie #film #tiktok",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 0,
                  "end": 6,
                  "hashtagName": "filme",
                  "hashtagId": "880742",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 7,
                  "end": 14,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 15,
                  "end": 19,
                  "hashtagName": "fyp",
                  "hashtagId": "229207",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 20,
                  "end": 26,
                  "hashtagName": "movie",
                  "hashtagId": "9960",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 27,
                  "end": 32,
                  "hashtagName": "film",
                  "hashtagId": "28707",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 33,
                  "end": 40,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10045,
          "collected": false,
          "videoSuggestWordsList": {
            "video_suggest_words_struct": [
              {
                "words": [
                  {
                    "word": "movie tiktok",
                    "word_id": "4289071465908963848"
                  }
                ],
                "scene": "feed_bar",
                "hint_text": "Search · "
              }
            ]
          },
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "107900",
            "shareCount": "154",
            "commentCount": "82",
            "playCount": "1000000",
            "collectCount": "4501",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 101,
          "textLanguage": "un",
          "textTranslatable": false,
          "authorStatsV2": {
            "followingCount": "0",
            "followerCount": "780",
            "heartCount": "121300",
            "videoCount": "150",
            "diggCount": "9",
            "heart": "121300",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7327239258589170976"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603296555730210066",
          "desc": "အကလေး#fypシ゚ #tiktok #foryoupage❤️❤️ ",
          "createTime": 1770280435,
          "video": {
            "id": "7603296555730210066",
            "height": 1024,
            "width": 576,
            "duration": 15,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oAGkQGf7AEfgmJfmoVwLIbWEgFLewUZIIAGqRC~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=BWIa%2B2BVSwvEsUp%2FDkK6OHF8dQ0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/okVVmGgEbIGWA7AfgVYRFeLRowL9GEmIfEjCev~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=gYANtfpxh7ccSYhf8VFh5ts93tU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o4ReLemLGGImLU7RfRIVVpgeEFwgCoWAEyGYbA~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=ZT6R3bodF867codzQbTJygMEiYo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ocKIFCgsBFrUAC4C9TifjWAKtEQyfDTDIIqfg4/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=5334&bt=2667&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=PGhmMzY1Zmk2aTc1aTM3ZUBpMzx1O2s5cmk4OTMzODczNEAvM2BjYC5gNTYxLWFjMjFhYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a485ec1b31a2dd1945b442bec84b8da8&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oQDIl4kfICrC9QEnEfjrIyiDetrUKATFgBAKFT/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=5624&bt=2812&cs=0&ds=3&eid=20480&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=NGZmPDY3OzZlOjNkNzllOkBpMzx1O2s5cmk4OTMzODczNEAwLi0xNmMtXzExMjRhYjAwYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6f6264a42ee808949f89068d5d0df033&tk=tt_chain_token",
            "bitrate": 2731970,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "normal_540_0",
                "Bitrate": 2731970,
                "QualityType": 20,
                "PlayAddr": {
                  "Uri": "v1c044g50000d625bfvog65h08nrb9l0",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ocKIFCgsBFrUAC4C9TifjWAKtEQyfDTDIIqfg4/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=5334&bt=2667&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=PGhmMzY1Zmk2aTc1aTM3ZUBpMzx1O2s5cmk4OTMzODczNEAvM2BjYC5gNTYxLWFjMjFhYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a485ec1b31a2dd1945b442bec84b8da8&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ocKIFCgsBFrUAC4C9TifjWAKtEQyfDTDIIqfg4/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=5334&bt=2667&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=PGhmMzY1Zmk2aTc1aTM3ZUBpMzx1O2s5cmk4OTMzODczNEAvM2BjYC5gNTYxLWFjMjFhYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a485ec1b31a2dd1945b442bec84b8da8&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=db4450ffd2044f938fcc12c3f0cc6e29&is_play_url=1&item_id=7603296555730210066&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjZiNzYwYWY2ZDY1NjU2ODRkYmYwYjM2ZjgwMmVkMjcy&tk=tt_chain_token&video_id=v1c044g50000d625bfvog65h08nrb9l0"
                  ],
                  "DataSize": 5264848,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v1c044g50000d625bfvog65h08nrb9l0_h264_540p_2731970",
                  "FileHash": "b7fa115eb6365e1ec866f269a9d2747f",
                  "FileCs": "c:0-13861-5bbd"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 89.838, \"v960\": 92.138, \"v864\": 94.365, \"v720\": 97.075}, \"ori\": {\"v1080\": 79.625, \"v960\": 82.072, \"v864\": 84.994, \"v720\": 90.627}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 1239552,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v1c044g50000d625bfvog65h08nrb9l0",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oEwtI4qBfDA1VFC6RKFiDjTQ2I1ApC8CEef5EE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2420&bt=1210&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=Z2loOjQ3ZTk0ZTQ6NDo5ZUBpMzx1O2s5cmk4OTMzODczNEAxMjY1Yl8zXl8xX2MwMi8zYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=8411e92c12f9d4160c4b74718e95e591&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oEwtI4qBfDA1VFC6RKFiDjTQ2I1ApC8CEef5EE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2420&bt=1210&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=Z2loOjQ3ZTk0ZTQ6NDo5ZUBpMzx1O2s5cmk4OTMzODczNEAxMjY1Yl8zXl8xX2MwMi8zYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=8411e92c12f9d4160c4b74718e95e591&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=6b265731f7b14bb1a66bb4e1879e5f4d&is_play_url=1&item_id=7603296555730210066&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjA1OGY4Njc2Zjk0NTU5OWRmNDI1NDk2NTU3NDhkZjM5&tk=tt_chain_token&video_id=v1c044g50000d625bfvog65h08nrb9l0"
                  ],
                  "DataSize": 2389083,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v1c044g50000d625bfvog65h08nrb9l0_bytevc1_720p_1239552",
                  "FileHash": "15d678a122723e33b35174eeec9c7f34",
                  "FileCs": "c:0-13905-6c9a"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 86.446, \"v960\": 88.972, \"v864\": 91.596, \"v720\": 94.912}, \"ori\": {\"v1080\": 79.706, \"v960\": 83.176, \"v864\": 85.419, \"v720\": 89.703}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 999635,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v1c044g50000d625bfvog65h08nrb9l0",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogVEqeAEEfDAC4KFKbCFmTVtiBBDjIQ1I6xpf1/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1952&bt=976&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=OmY5PDZkNjY3Ojg2NDs4N0BpMzx1O2s5cmk4OTMzODczNEBiMjAyXi9iNTIxYC1eLy9jYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b229252c88b0c955f0fcd0222aace5f1&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogVEqeAEEfDAC4KFKbCFmTVtiBBDjIQ1I6xpf1/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1952&bt=976&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=OmY5PDZkNjY3Ojg2NDs4N0BpMzx1O2s5cmk4OTMzODczNEBiMjAyXi9iNTIxYC1eLy9jYSNpX2stMmRzXy9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461298&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b229252c88b0c955f0fcd0222aace5f1&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=f42528a103c5475483e32aa359365ce7&is_play_url=1&item_id=7603296555730210066&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmMzOGU3MjdiZjYxODkyY2IzOWM1MThjOGEzMThhY2Jh&tk=tt_chain_token&video_id=v1c044g50000d625bfvog65h08nrb9l0"
                  ],
                  "DataSize": 1926673,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v1c044g50000d625bfvog65h08nrb9l0_bytevc1_540p_999635",
                  "FileHash": "a0b0b4436b9e13e57b5ee7e669aba123",
                  "FileCs": "c:0-13905-12c9"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 82.472, \"v960\": 85.312, \"v864\": 88.047, \"v720\": 92.307}, \"ori\": {\"v1080\": 73.474, \"v960\": 77.432, \"v864\": 80.053, \"v720\": 85.12}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oAGkQGf7AEfgmJfmoVwLIbWEgFLewUZIIAGqRC~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=vVFn3RemKzaZKk079nJpZKYzt8k%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oAGkQGf7AEfgmJfmoVwLIbWEgFLewUZIIAGqRC~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=M9gSivPAVy5RMunhKRcdEwtpbDU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oAGkQGf7AEfgmJfmoVwLIbWEgFLewUZIIAGqRC~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=ez2RNH68oZ72OWOWZ6MmHNuoHJ0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oAGkQGf7AEfgmJfmoVwLIbWEgFLewUZIIAGqRC~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=4VJCXGwAbgWAD113y6lxUXeLqlA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -21.9,
              "Peak": 0.22646
            },
            "size": 5264848,
            "VQScore": "64.34",
            "claInfo": {
              "hasOriginalAudio": false,
              "enableAutoCaption": true,
              "noCaptionReason": 3
            },
            "videoID": "v1c044g50000d625bfvog65h08nrb9l0"
          },
          "author": {
            "id": "7392231478043837456",
            "uniqueId": "alices.may63",
            "nickname": "Alices May(အဲလစ်မေ)",
            "avatarThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/465ac548c9ca8c3c509423e9736f01b9~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=7076e444&x-expires=1770458400&x-signature=b1pynx4XQEh6y0ih2JJ05poJ960%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/465ac548c9ca8c3c509423e9736f01b9~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=3e287395&x-expires=1770458400&x-signature=E9f4LlDvLOB%2FwU%2B6lejin7WGGvU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/465ac548c9ca8c3c509423e9736f01b9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e8029c23&x-expires=1770458400&x-signature=rRI4tZz%2BAruCNDx%2FhSt4xGysXwM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "Facebook link https://www.facebook.com/share/15WZ6ob7iZ/?mibextid=LQQJ4d",
            "verified": false,
            "secUid": "MS4wLjABAAAA7dNOiMj13tmMvsBmPgmknZbHT8araDlVMTNbg1S_iRp6U-nCBtDky8y5CtMqDGUe",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7533038933060356880",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-v-27dcd7c799-tx/oQaKPAA1wEYIDBULAHid7iCAECuglAVAqUz9A/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=am9ncm05cjNlNTMzODU8NEBpam9ncm05cjNlNTMzODU8NEByby4uMmQ0ajJhLS1kMS1zYSNyby4uMmQ0ajJhLS1kMS1zcw%3D%3D&btag=e00078000&expire=1770310099&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=233843c795099e90eedad74fb5f36936&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/370367d3766deeae0a6c4d2560255ad9~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=03e3b49e&x-expires=1770458400&x-signature=5rTJpmzH%2BL%2FBzUvn6Qxdwq0lmWU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/370367d3766deeae0a6c4d2560255ad9~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=b863839c&x-expires=1770458400&x-signature=XG8yYby%2Bac%2B8ROGDAZxUyjYcSLg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/370367d3766deeae0a6c4d2560255ad9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=34a5cf62&x-expires=1770458400&x-signature=RNtqZB5k%2FXK%2FXwLG1PHw91bqf9c%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "all_.gudd",
            "original": true,
            "private": false,
            "duration": 17,
            "isCopyrighted": false,
            "tt2dsp": {
              "tt_to_dsp_song_infos": [
                {
                  "platform": 1,
                  "song_id": "1715628793",
                  "token": {
                    "apple_music_token": {
                      "developer_token": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ikc2Q0dLMjdWQzMifQ.eyJleHAiOjE3NzA1MDM0MDgsImlhdCI6MTc3MDI0NDIwOCwiaXNzIjoiTUo3OTdEOFU2RiJ9.x6ipd7ZVPGpITRy4PsRYxgIs2q96bGsvmFOAsWVCBb39e6UNmPRELv_op10DKuxzTHoRPJO_RMS7bVluhln0MQ"
                    }
                  },
                  "meta_song_id": "7299038822531418114"
                },
                {
                  "platform": 3,
                  "song_id": "36zVrc3QTlrDB3QIYowh8F",
                  "meta_song_id": "7299038822531418114"
                }
              ]
            }
          },
          "challenges": [
            {
              "id": "1641236262278149",
              "title": "fypシ゚",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1634937149617158",
              "title": "foryoupage❤️❤️",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 1187,
            "shareCount": 6,
            "commentCount": 18,
            "playCount": 6358,
            "collectCount": 31
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 5,
              "end": 11,
              "hashtagName": "fypシ゚",
              "hashtagId": "1641236262278149",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 12,
              "end": 19,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 20,
              "end": 35,
              "hashtagName": "foryoupage❤️❤️",
              "hashtagId": "1634937149617158",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 137,
            "followerCount": 1700000,
            "heartCount": 26400000,
            "videoCount": 262,
            "diggCount": 11800,
            "heart": 26400000,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "stickersOnItem": [
            {
              "stickerType": 4,
              "stickerText": [
                "💋"
              ]
            }
          ],
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "အကလေး#fypシ゚ #tiktok #foryoupage❤️❤️ ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 5,
                  "end": 11,
                  "hashtagName": "fypシ゚",
                  "hashtagId": "1641236262278149",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 12,
                  "end": 19,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 20,
                  "end": 35,
                  "hashtagName": "foryoupage❤️❤️",
                  "hashtagId": "1634937149617158",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10080,
          "collected": false,
          "anchors": [
            {
              "id": "3149762289",
              "type": 28,
              "keyword": "KD pro II + contour",
              "icon": {
                "urlList": [
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=v%2BRFcZt0mi7zm1cDKI5wjZMX0jQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=RieMpE4v5WFsE9WJVzuLIBzu7QM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=78kQqRITfkDvFNq3gNuyqaPYYzk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ]
              },
              "schema": "https://www.capcut.com",
              "description": "Effects",
              "thumbnail": {
                "urlList": [
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64px_anchor_effect3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=8tLoF4YA2cqN2L9%2BXh%2FmdDEjDH8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/64px_anchor_effect3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=T7qqNc4orN9LLFSYxYvZV%2BptNjw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64px_anchor_effect3x.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=FnzsI55jrxuDRrM5hehBAiWMYKk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ],
                "width": 64,
                "height": 64
              },
              "extraInfo": {
                "subtype": ""
              }
            }
          ],
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "1187",
            "shareCount": "6",
            "commentCount": "18",
            "playCount": "6358",
            "collectCount": "31",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 119,
          "textLanguage": "my",
          "textTranslatable": true,
          "authorStatsV2": {
            "followingCount": "137",
            "followerCount": "1700000",
            "heartCount": "26400000",
            "videoCount": "262",
            "diggCount": "11800",
            "heart": "26400000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603296555730210066"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603296247939796245",
          "desc": "🤭🤭🤭#fany #tiktok #foryou #vairalvideo #ব্রাহ্মণবাড়িয়া #কসবা #থানার #ছেলে #সবাই_একটু_সাপোর্ট_করবেন_প্লিজ @Nabil Bhuiyan ",
          "createTime": 1770280366,
          "video": {
            "id": "7603296247939796245",
            "height": 1024,
            "width": 576,
            "duration": 8,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oQ9ELNWEnQReJI8I1BFpAVWDg1UtFBHafFhE8z~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=LeH8s%2FA7BRLDhlCTVpzwfe7L4LM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oUQDphFzW9LFEBqNCeWBZ59AEUU1I79QQgfFRq~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=zZvWEBiemSUN1NSYnPpK9xWHjio%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oY1WBEUDpBVz978FECuFiAINEBeEfh9gQRIaCL~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=lQ8YXA66AahwfqSj3qu8W3cwtww%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o8ReRBL9AzII7gbpqFUFEW5hQBQfjCPE0gDVEN/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2014&bt=1007&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=ODo0Zzo1NDVlPGQ5NzgzO0Bpand1ZHM5cjU4OTMzODczNEBjNS1fXjAxNi0xYGNfYS5jYSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a795ee625ffebd9afc18f67dd3dc7511&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o4c8I1FMBQULU96EBQDAEWhzRNpgVB6ECFEefE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3820&bt=1910&cs=0&ds=3&eid=20480&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=PDQ6ZDM8ZDdlZzMzNTNoPEBpand1ZHM5cjU4OTMzODczNEAxNWJhNC9iXmIxXy9hXl4tYSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e87987c3e9d1c213510abbaf242e6351&tk=tt_chain_token",
            "bitrate": 1031685,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "lower",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "lower_540_0",
                "Bitrate": 1031685,
                "QualityType": 24,
                "PlayAddr": {
                  "Uri": "v14044g50000d625b2vog65pja3rptqg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o8ReRBL9AzII7gbpqFUFEW5hQBQfjCPE0gDVEN/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2014&bt=1007&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=ODo0Zzo1NDVlPGQ5NzgzO0Bpand1ZHM5cjU4OTMzODczNEBjNS1fXjAxNi0xYGNfYS5jYSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a795ee625ffebd9afc18f67dd3dc7511&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o8ReRBL9AzII7gbpqFUFEW5hQBQfjCPE0gDVEN/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2014&bt=1007&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=4&rc=ODo0Zzo1NDVlPGQ5NzgzO0Bpand1ZHM5cjU4OTMzODczNEBjNS1fXjAxNi0xYGNfYS5jYSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=a795ee625ffebd9afc18f67dd3dc7511&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=f810d5b4f6ca490b924132a7bd0187f5&is_play_url=1&item_id=7603296247939796245&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmZkNmM5NjkwM2YyOTEyYmUxMzVlYzNjNWYzYWRiZTBi&tk=tt_chain_token&video_id=v14044g50000d625b2vog65pja3rptqg"
                  ],
                  "DataSize": 1121958,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v14044g50000d625b2vog65pja3rptqg_h264_540p_1031685",
                  "FileHash": "f1488a89a62cc7749b0351410c8eeaae",
                  "FileCs": "c:0-8493-f335"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 84.588, \"v960\": 86.82, \"v864\": 89.62, \"v720\": 92.517}, \"ori\": {\"v1080\": 75.55, \"v960\": 78.102, \"v864\": 81.776, \"v720\": 85.173}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 676979,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v14044g50000d625b2vog65pja3rptqg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/osFpBI3dELEF58rAAgVQhqN6RWQ9DBWzEfeI7U/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1322&bt=661&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=NjwzOzo2OzgzODc6PGhoOEBpand1ZHM5cjU4OTMzODczNEBiYi01Y2IwXi8xLy9iLjJhYSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=05107370fa623a9543a80e1193496988&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/osFpBI3dELEF58rAAgVQhqN6RWQ9DBWzEfeI7U/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1322&bt=661&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=NjwzOzo2OzgzODc6PGhoOEBpand1ZHM5cjU4OTMzODczNEBiYi01Y2IwXi8xLy9iLjJhYSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=05107370fa623a9543a80e1193496988&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=d55e1ee927244520a538e3f78800e9e3&is_play_url=1&item_id=7603296247939796245&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjkyNmQyZGY2Y2NiN2EyZmE2OGQ5NThiZjc1ZGNhMDYx&tk=tt_chain_token&video_id=v14044g50000d625b2vog65pja3rptqg"
                  ],
                  "DataSize": 736215,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v14044g50000d625b2vog65pja3rptqg_bytevc1_720p_676979",
                  "FileHash": "35209d7454c52e1e955dd51027707471",
                  "FileCs": "c:0-8949-202c"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 85.997, \"v960\": 88.69, \"v864\": 91.462, \"v720\": 93.752}, \"ori\": {\"v1080\": 79.548, \"v960\": 82.796, \"v864\": 85.297, \"v720\": 89.175}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 521181,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v14044g50000d625b2vog65pja3rptqg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ooIEEIBgRVehADDpNFGRf9RQ1WzELEpgU8FiBw/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1016&bt=508&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=ZGYzOGkzOjVoNGU3Zjg6NkBpand1ZHM5cjU4OTMzODczNEBiYi9jMmIyNWIxNDViMzA0YSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6815aeed4fd1a9a27a878bf4d3b2b996&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ooIEEIBgRVehADDpNFGRf9RQ1WzELEpgU8FiBw/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1016&bt=508&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=ZGYzOGkzOjVoNGU3Zjg6NkBpand1ZHM5cjU4OTMzODczNEBiYi9jMmIyNWIxNDViMzA0YSNubTBnMmRzXy9hLS1kMTFzcw%3D%3D&btag=e000b0000&expire=1770461291&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6815aeed4fd1a9a27a878bf4d3b2b996&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=733765ec847b41ee8257e05ff520ecea&is_play_url=1&item_id=7603296247939796245&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmMzM2M3N2FkZDkzZTY2NjAxNjQ3MmQzOGVlOTQ0NDFk&tk=tt_chain_token&video_id=v14044g50000d625b2vog65pja3rptqg"
                  ],
                  "DataSize": 566785,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v14044g50000d625b2vog65pja3rptqg_bytevc1_540p_521181",
                  "FileHash": "cfecb66ae95201ba17aa24e9a9027a98",
                  "FileCs": "c:0-8949-71d1"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 84.28, \"v960\": 87.572, \"v864\": 90.466, \"v720\": 91.544}, \"ori\": {\"v1080\": 74.561, \"v960\": 78.66, \"v864\": 80.978, \"v720\": 85.54}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oQ9ELNWEnQReJI8I1BFpAVWDg1UtFBHafFhE8z~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=5k9LfvQLwMeweujJU69jV%2FYnenI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oQ9ELNWEnQReJI8I1BFpAVWDg1UtFBHafFhE8z~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=AHABf7bv%2BSJAF5BxvlChjrAGXzA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oQ9ELNWEnQReJI8I1BFpAVWDg1UtFBHafFhE8z~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=mjc3RzHlkR1Wpu5M3vEq4igPnkU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oQ9ELNWEnQReJI8I1BFpAVWDg1UtFBHafFhE8z~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=l3fpHb7pT0LLVJ4i0tAizX9vY9I%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -21.3,
              "Peak": 0.22131
            },
            "size": 1121958,
            "VQScore": "72.2",
            "claInfo": {
              "hasOriginalAudio": true,
              "enableAutoCaption": true,
              "noCaptionReason": 3
            },
            "videoID": "v14044g50000d625b2vog65pja3rptqg"
          },
          "author": {
            "id": "7126119722781721605",
            "uniqueId": "arafat_islam210",
            "nickname": "তিরিং বিরিং ভাই",
            "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/b85db0f332d50d5c73640221938bb9a2~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=123fbdb8&x-expires=1770458400&x-signature=qll3j0bzRAlJgUW9hG5gs%2FqL518%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/b85db0f332d50d5c73640221938bb9a2~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=76b6316a&x-expires=1770458400&x-signature=LfR9F1LFWLL5NUhdi1Fqk3NLgyQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/b85db0f332d50d5c73640221938bb9a2~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e0efbc68&x-expires=1770458400&x-signature=6hvtHSn0hS6GD2jItAV6KkNKcOs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "",
            "verified": false,
            "secUid": "MS4wLjABAAAAt_e3Rww_pEivjoy5IXtSsppVVfSkdf0Qgxz3SALm92b_rmcY904rAqSsSKaQSgmN",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7603296278622587655",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-v-27dcd7c799-tx/oMaYlEgRCxsFYYAERAPAEVSb9iVAAiABCzUEC/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=ajNtam05cmY4OTMzODU8NEBpajNtam05cmY4OTMzODU8NEByMGQvMmQ0Xy9hLS1kMS1zYSNyMGQvMmQ0Xy9hLS1kMS1zcw%3D%3D&btag=e00070000&expire=1770310090&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=5e74408d5dcb54c9c943f829d8f576f2&tk=0",
            "coverThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/b85db0f332d50d5c73640221938bb9a2~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=123fbdb8&x-expires=1770458400&x-signature=qll3j0bzRAlJgUW9hG5gs%2FqL518%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/b85db0f332d50d5c73640221938bb9a2~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=76b6316a&x-expires=1770458400&x-signature=LfR9F1LFWLL5NUhdi1Fqk3NLgyQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/b85db0f332d50d5c73640221938bb9a2~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e0efbc68&x-expires=1770458400&x-signature=6hvtHSn0hS6GD2jItAV6KkNKcOs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "তিরিং বিরিং ভাই",
            "original": true,
            "private": false,
            "duration": 8,
            "isCopyrighted": false,
            "tt2dsp": {}
          },
          "challenges": [
            {
              "id": "43903",
              "title": "fany",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1598055254791173",
              "title": "vairalvideo",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1635728547637254",
              "title": "ব্রাহ্মণবাড়িয়া",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1644627650879493",
              "title": "কসবা",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1645092877670401",
              "title": "থানার",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1634934990803973",
              "title": "ছেলে",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1683552794497026",
              "title": "সবাই_একটু_সাপোর্ট_করবেন_প্লিজ",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 256,
            "shareCount": 9,
            "commentCount": 28,
            "playCount": 3234,
            "collectCount": 18
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 6,
              "end": 11,
              "hashtagName": "fany",
              "hashtagId": "43903",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 12,
              "end": 19,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 20,
              "end": 27,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 28,
              "end": 40,
              "hashtagName": "vairalvideo",
              "hashtagId": "1598055254791173",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 41,
              "end": 58,
              "hashtagName": "ব্রাহ্মণবাড়িয়া",
              "hashtagId": "1635728547637254",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 59,
              "end": 64,
              "hashtagName": "কসবা",
              "hashtagId": "1644627650879493",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 65,
              "end": 71,
              "hashtagName": "থানার",
              "hashtagId": "1645092877670401",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 72,
              "end": 77,
              "hashtagName": "ছেলে",
              "hashtagId": "1634934990803973",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 78,
              "end": 108,
              "hashtagName": "সবাই_একটু_সাপোর্ট_করবেন_প্লিজ",
              "hashtagId": "1683552794497026",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 109,
              "end": 123,
              "hashtagName": "",
              "type": 0,
              "userId": "7178396543220171781",
              "isCommerce": false,
              "userUniqueId": "nabilbhuiyan122",
              "secUid": "MS4wLjABAAAAF_fPTfER03Y1SCrdwUc75ZIQgW6Z00uyh6rb6K9byqkgkHbDjNXDct7wvz7-fJcP",
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 72,
            "followerCount": 808900,
            "heartCount": 16900000,
            "videoCount": 1480,
            "diggCount": 15300,
            "heart": 16900000,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "🤭🤭🤭#fany #tiktok #foryou #vairalvideo #ব্রাহ্মণবাড়িয়া #কসবা #থানার #ছেলে #সবাই_একটু_সাপোর্ট_করবেন_প্লিজ @Nabil Bhuiyan ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 6,
                  "end": 11,
                  "hashtagName": "fany",
                  "hashtagId": "43903",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 12,
                  "end": 19,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 20,
                  "end": 27,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 28,
                  "end": 40,
                  "hashtagName": "vairalvideo",
                  "hashtagId": "1598055254791173",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 41,
                  "end": 58,
                  "hashtagName": "ব্রাহ্মণবাড়িয়া",
                  "hashtagId": "1635728547637254",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 59,
                  "end": 64,
                  "hashtagName": "কসবা",
                  "hashtagId": "1644627650879493",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 65,
                  "end": 71,
                  "hashtagName": "থানার",
                  "hashtagId": "1645092877670401",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 72,
                  "end": 77,
                  "hashtagName": "ছেলে",
                  "hashtagId": "1634934990803973",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 78,
                  "end": 108,
                  "hashtagName": "সবাই_একটু_সাপোর্ট_করবেন_প্লিজ",
                  "hashtagId": "1683552794497026",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 109,
                  "end": 123,
                  "hashtagName": "",
                  "type": 0,
                  "userId": "7178396543220171781",
                  "isCommerce": false,
                  "userUniqueId": "nabilbhuiyan122",
                  "secUid": "MS4wLjABAAAAF_fPTfER03Y1SCrdwUc75ZIQgW6Z00uyh6rb6K9byqkgkHbDjNXDct7wvz7-fJcP",
                  "subType": 0
                }
              ]
            }
          ],
          "collected": false,
          "anchors": [
            {
              "id": "0",
              "type": 54,
              "keyword": "CapCut · Editing made easy",
              "icon": {
                "urlList": [
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=v%2BRFcZt0mi7zm1cDKI5wjZMX0jQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=RieMpE4v5WFsE9WJVzuLIBzu7QM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=78kQqRITfkDvFNq3gNuyqaPYYzk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ]
              },
              "schema": "https://www.capcut.com/tools/desktop-video-editor?channel=capcutpc_ttweb_anchor_edit1&download_channel=capcutpc_ttweb_anchor_edit1&enter_from=capcutpc_ttweb_anchor_edit1&force_dp=1&from_page=capcutpc_ttweb_anchor_edit1&type=tools",
              "logExtra": "{\"anchor_id\":0,\"anchor_name\":\"CapCut · Editing made easy\",\"anchor_title_detail\":\"None\",\"anchor_title_id\":21502485763,\"anchor_type\":\"TT_CAPCUT\",\"capability_key\":\"default\",\"ccep_vip\":0,\"if_race_trigger\":0,\"is_two_line\":0,\"landing_page_style_id\":21502486275,\"maker_source\":\"\",\"publish_key\":\"default\",\"template_id\":\"none\",\"tutorial_id\":\"none\",\"viamaker_anchor_capability_key_weight\":1,\"viamaker_anchor_style_idx\":-1,\"viamaker_anchor_style_source\":3,\"video_source\":1,\"video_type_id\":1}",
              "description": "CapCut · Video Editor",
              "thumbnail": {
                "urlList": [
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=jgegNk%2BQWaScc8c12djeBeLJ%2BL0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=NlRbOslMxDiJJj6o9Grok4PoIlc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=CVtvbm5pwcuiU%2BqCEuyIduJUmKg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ],
                "width": 64,
                "height": 64
              },
              "extraInfo": {
                "subtype": ""
              }
            }
          ],
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "256",
            "shareCount": "9",
            "commentCount": "28",
            "playCount": "3234",
            "collectCount": "18",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 120,
          "textLanguage": "un",
          "textTranslatable": false,
          "authorStatsV2": {
            "followingCount": "72",
            "followerCount": "808900",
            "heartCount": "16900000",
            "videoCount": "1480",
            "diggCount": "15300",
            "heart": "16900000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603296247939796245"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603299232744836383",
          "desc": "#tiktok #😂😂 #y2k ",
          "createTime": 1770281148,
          "video": {
            "id": "7603299232744836383",
            "height": 1024,
            "width": 576,
            "duration": 17,
            "ratio": "540p",
            "cover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocsvBEsRGIA1iAVm097YlAXiBYCRaBWLiYLEE~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=35Sc50%2FSwf1SYbQDmxa8pPNgkvA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/okiG0EVvLRYiEBABYWlSAB4sNaBIRRYLIY04C~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=iLcYbZ4WQklXjupXGUUD3siqA30%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ooLRC3EVIRsWyi0BDAcEBAYiZVaYlGIY7LvBB~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=4VtqBe6S5c84cnmyb2ZNlLLbeQw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ogA0IiBxLYACBWBRYVQaEGEQFLQRKslYCEivM/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1908&bt=954&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=NGQ7NjwzO2VnZWk2ZmY5aUBpanI7M245cmY4OTMzaTczNEA1YV4yLi8wXjMxXzJgYmEuYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=c6ea5dc0855c54a4087e3d48f844d1ad&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c004-tx2/oAWYEAIHalYBRLVMCKCARmxLEsGYivBIBQ0iE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1986&bt=993&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=Z2g3ZDplMzM4OGU1OmY8aEBpanI7M245cmY4OTMzaTczNEBgLmA2M2NgXi0xLzBjYDMuYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=641b506a0dbd7013acf918b07a4f369b&tk=tt_chain_token",
            "bitrate": 977258,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "normal_540_0",
                "Bitrate": 977258,
                "QualityType": 20,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625hcnog65k3088moig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ogA0IiBxLYACBWBRYVQaEGEQFLQRKslYCEivM/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1908&bt=954&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=NGQ7NjwzO2VnZWk2ZmY5aUBpanI7M245cmY4OTMzaTczNEA1YV4yLi8wXjMxXzJgYmEuYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=c6ea5dc0855c54a4087e3d48f844d1ad&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ogA0IiBxLYACBWBRYVQaEGEQFLQRKslYCEivM/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1908&bt=954&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=NGQ7NjwzO2VnZWk2ZmY5aUBpanI7M245cmY4OTMzaTczNEA1YV4yLi8wXjMxXzJgYmEuYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=c6ea5dc0855c54a4087e3d48f844d1ad&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=1fd6eccc53bf4b6dab38201953a8da81&is_play_url=1&item_id=7603299232744836383&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjUzNTcyOGQzMzI2YTU1YzIzYjEzMmRiM2NmZDQ2Zjcx&tk=tt_chain_token&video_id=v15044gf0000d625hcnog65k3088moig"
                  ],
                  "DataSize": 2181363,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625hcnog65k3088moig_h264_540p_977258",
                  "FileHash": "1b857bb04a1d3d9d5580ee648041af95",
                  "FileCs": "c:0-16125-b3ea"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 89.226, \"v960\": 93.446, \"v864\": 94.744, \"v720\": 96.401}, \"ori\": {\"v1080\": 76.469, \"v960\": 82.189, \"v864\": 85.423, \"v720\": 89.959}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 733954,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625hcnog65k3088moig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/oszACxWyAMiEFoVpRCKBEWE9WEIhQgFEHeDhfD/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1432&bt=716&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=NWRkODdoZDo2OjM2ZmVnZEBpanI7M245cmY4OTMzaTczNEAwYTEuMl8uXmMxY19iMmMxYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=dc0998a6bfba71c05c8f23d9c44ef36b&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/oszACxWyAMiEFoVpRCKBEWE9WEIhQgFEHeDhfD/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1432&bt=716&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=NWRkODdoZDo2OjM2ZmVnZEBpanI7M245cmY4OTMzaTczNEAwYTEuMl8uXmMxY19iMmMxYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=dc0998a6bfba71c05c8f23d9c44ef36b&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=4afd5becb3f047f3a71abe54154ada32&is_play_url=1&item_id=7603299232744836383&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjRiODcwZjA4ZGJjZDJlZDk1ZDgxZGQ1ZGZkOGVlNDA2&tk=tt_chain_token&video_id=v15044gf0000d625hcnog65k3088moig"
                  ],
                  "DataSize": 1638279,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v15044gf0000d625hcnog65k3088moig_bytevc1_720p_733954",
                  "FileHash": "0921069cf859954c25080e877a5b66c1",
                  "FileCs": "c:0-16457-a9f9"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 91.907, \"v960\": 92.829, \"v864\": 95.0, \"v720\": 96.657}, \"ori\": {\"v1080\": 82.567, \"v960\": 85.458, \"v864\": 87.529, \"v720\": 91.185}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 409661,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625hcnog65k3088moig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/osyFTWAgEE9WM5CpAKb2IWQEfiEeiBEVxDoRhF/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=800&bt=400&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=ZTw5OTU1NzVpM2Q8NmgzO0BpanI7M245cmY4OTMzaTczNEAvYTA2MS4yXy4xXjFeMC8xYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=242d5e7d308a53cb973c6e7b5da4b878&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/osyFTWAgEE9WM5CpAKb2IWQEfiEeiBEVxDoRhF/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=800&bt=400&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=ZTw5OTU1NzVpM2Q8NmgzO0BpanI7M245cmY4OTMzaTczNEAvYTA2MS4yXy4xXjFeMC8xYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=242d5e7d308a53cb973c6e7b5da4b878&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=48203ea349aa401fb25412429636d92b&is_play_url=1&item_id=7603299232744836383&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjUyYWExM2E1NDEzZTYwYmI4NTZlZDE3YWZhYzFmZTFm&tk=tt_chain_token&video_id=v15044gf0000d625hcnog65k3088moig"
                  ],
                  "DataSize": 914415,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625hcnog65k3088moig_bytevc1_540p_409661",
                  "FileHash": "2af270631f9c9e96138c254a6b4deb05",
                  "FileCs": "c:0-16457-1f3b"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 86.286, \"v960\": 87.885, \"v864\": 90.312, \"v720\": 93.66}, \"ori\": {\"v1080\": 75.645, \"v960\": 79.016, \"v864\": 81.662, \"v720\": 86.131}}}"
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 285025,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625hcnog65k3088moig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c001-tx2/o8QmIpWEfBFaVARCoEIAsFEEisDPxhTiMfKyYV/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=556&bt=278&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=ZWRlaTM8NTw3ZTw5NTg4Z0BpanI7M245cmY4OTMzaTczNEAyMS4zNjM1NTAxMzYuMi5eYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6ab68f7b1ca147eacd5c46bc50d1a1bf&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c001-tx2/o8QmIpWEfBFaVARCoEIAsFEEisDPxhTiMfKyYV/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=556&bt=278&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=ZWRlaTM8NTw3ZTw5NTg4Z0BpanI7M245cmY4OTMzaTczNEAyMS4zNjM1NTAxMzYuMi5eYSNmajUwMmRrZS9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461300&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6ab68f7b1ca147eacd5c46bc50d1a1bf&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=ad15551296694b34898269906f1b4a5b&is_play_url=1&item_id=7603299232744836383&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjhiOWQxODllMWNiMmU2MWY5MzIzNDI1YWJiYjA0NzRj&tk=tt_chain_token&video_id=v15044gf0000d625hcnog65k3088moig"
                  ],
                  "DataSize": 636213,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625hcnog65k3088moig_h264_540p_285025",
                  "FileHash": "0dc920b9c9d1ecccfb93c95e950eeae2",
                  "FileCs": "c:0-16101-e7a8"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 74.996, \"v960\": 81.955, \"v864\": 83.325, \"v720\": 87.568}, \"ori\": {\"v1080\": 64.08, \"v960\": 68.828, \"v864\": 73.673, \"v720\": 78.798}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocsvBEsRGIA1iAVm097YlAXiBYCRaBWLiYLEE~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=pHUYMu%2B7aJmrAf%2Bm%2Bpk65HtNCsk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocsvBEsRGIA1iAVm097YlAXiBYCRaBWLiYLEE~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=R4l5x%2B1yqGfu2Sa7Atuzyuhv89M%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocsvBEsRGIA1iAVm097YlAXiBYCRaBWLiYLEE~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=P%2FEcNBVA3m50Wl6cKlX67ax9U8Y%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocsvBEsRGIA1iAVm097YlAXiBYCRaBWLiYLEE~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=g5DifIP3zOiUuEg3pBmaLGoouxI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -11.7,
              "Peak": 0.73282
            },
            "size": 2181363,
            "VQScore": "65.63",
            "claInfo": {
              "hasOriginalAudio": true,
              "enableAutoCaption": true,
              "noCaptionReason": 3
            },
            "videoID": "v15044gf0000d625hcnog65k3088moig"
          },
          "author": {
            "id": "7518382673129538591",
            "uniqueId": "m24bacha2",
            "nickname": "🦅M24~BACHA🦅",
            "avatarThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0a52113cc0b2a11680fb91f75ff4ec32~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=f8ed205f&x-expires=1770458400&x-signature=LlPlMq248D16FSw7ctT2u0Um%2B6I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0a52113cc0b2a11680fb91f75ff4ec32~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=e94486ea&x-expires=1770458400&x-signature=ynP2zI9D44bmCPnz%2Fha4ai2oSms%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0a52113cc0b2a11680fb91f75ff4ec32~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=90e2337a&x-expires=1770458400&x-signature=uq%2Bxh%2ByCX6Y7i5Rss8TndeA1DSE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "",
            "verified": false,
            "secUid": "MS4wLjABAAAAb6Qh-zuFIisWkHkGa8C6As-KPuKNvASRMh2aDG1yT8UkSCr9GOUIElmTmIUcTA_4",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7603299309094439710",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-v-27dcd7-tx2/o0DyAEeAiEWh9F7UpV1fCxlLWXAMBJAbEpEFCE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=Mzw4dng5cmk4OTMzaTU8NEBpMzw4dng5cmk4OTMzaTU8NEAzY2phMmRjZS9hLS1kMTJzYSMzY2phMmRjZS9hLS1kMTJzcw%3D%3D&btag=e00078000&expire=1770310099&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=6d1db2a3c356305f14da02dc745d8727&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0a52113cc0b2a11680fb91f75ff4ec32~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=f8ed205f&x-expires=1770458400&x-signature=LlPlMq248D16FSw7ctT2u0Um%2B6I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0a52113cc0b2a11680fb91f75ff4ec32~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=e94486ea&x-expires=1770458400&x-signature=ynP2zI9D44bmCPnz%2Fha4ai2oSms%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0a52113cc0b2a11680fb91f75ff4ec32~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=90e2337a&x-expires=1770458400&x-signature=uq%2Bxh%2ByCX6Y7i5Rss8TndeA1DSE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "🦅M24~BACHA🦅",
            "original": true,
            "private": false,
            "duration": 17,
            "isCopyrighted": false,
            "tt2dsp": {}
          },
          "challenges": [
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1592174941980678",
              "title": "😂😂",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "438217",
              "title": "y2k",
              "desc": "",
              "profileThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/ace6b975907623c66bd2aca03aac103c~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=QZui8hkD5%2FZnIQJfHPwn3oVxy8c%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/ace6b975907623c66bd2aca03aac103c~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=QZui8hkD5%2FZnIQJfHPwn3oVxy8c%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/ace6b975907623c66bd2aca03aac103c~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=QZui8hkD5%2FZnIQJfHPwn3oVxy8c%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/d73680beda62c4e005f39ae651680420~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=k2l9r0P%2B0FyIkpJzRfv3pmMb8Pg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/d73680beda62c4e005f39ae651680420~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=k2l9r0P%2B0FyIkpJzRfv3pmMb8Pg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/d73680beda62c4e005f39ae651680420~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=k2l9r0P%2B0FyIkpJzRfv3pmMb8Pg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
            }
          ],
          "stats": {
            "diggCount": 468,
            "shareCount": 7,
            "commentCount": 71,
            "playCount": 2004,
            "collectCount": 7
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 0,
              "end": 7,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 8,
              "end": 13,
              "hashtagName": "😂😂",
              "hashtagId": "1592174941980678",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 14,
              "end": 18,
              "hashtagName": "y2k",
              "hashtagId": "438217",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 69,
            "followerCount": 120800,
            "heartCount": 12400000,
            "videoCount": 605,
            "diggCount": 1570,
            "heart": 12400000,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "#tiktok #😂😂 #y2k ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 0,
                  "end": 7,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 8,
                  "end": 13,
                  "hashtagName": "😂😂",
                  "hashtagId": "1592174941980678",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 14,
                  "end": 18,
                  "hashtagName": "y2k",
                  "hashtagId": "438217",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10071,
          "collected": false,
          "anchors": [
            {
              "id": "0",
              "type": 54,
              "keyword": "CapCut · Try some new effects",
              "icon": {
                "urlList": [
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=RieMpE4v5WFsE9WJVzuLIBzu7QM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=v%2BRFcZt0mi7zm1cDKI5wjZMX0jQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=cfsZGGmevlQQ5xQG4JhDcqwic%2BQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ]
              },
              "schema": "https://www.capcut.com/tools/desktop-video-editor?channel=capcutpc_ttweb_anchor_edit1&download_channel=capcutpc_ttweb_anchor_edit1&enter_from=capcutpc_ttweb_anchor_edit1&force_dp=1&from_page=capcutpc_ttweb_anchor_edit1&type=tools",
              "logExtra": "{\"anchor_id\":0,\"anchor_name\":\"CapCut · Try some new effects\",\"anchor_title_detail\":\"None\",\"anchor_title_id\":25566779651,\"anchor_type\":\"TT_CAPCUT\",\"capability_key\":\"effect;effect_21322608\",\"ccep_vip\":0,\"if_race_trigger\":0,\"is_two_line\":0,\"landing_page_style_id\":25566780163,\"maker_source\":\"\",\"publish_key\":\"capability\",\"template_id\":\"none\",\"tutorial_id\":\"none\",\"viamaker_anchor_capability_key_weight\":1,\"viamaker_anchor_style_idx\":-1,\"viamaker_anchor_style_source\":3,\"video_source\":1,\"video_type_id\":1}",
              "description": "CapCut · Video Editor",
              "thumbnail": {
                "urlList": [
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=jgegNk%2BQWaScc8c12djeBeLJ%2BL0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=NlRbOslMxDiJJj6o9Grok4PoIlc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=CVtvbm5pwcuiU%2BqCEuyIduJUmKg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ],
                "width": 64,
                "height": 64
              },
              "extraInfo": {
                "subtype": ""
              }
            }
          ],
          "videoSuggestWordsList": {
            "video_suggest_words_struct": [
              {
                "words": [
                  {
                    "word": "Y2K Dresses",
                    "word_id": "175395382096258409"
                  },
                  {
                    "word": "y2k actual style",
                    "word_id": "7876030382195644975"
                  }
                ],
                "scene": "comment_top",
                "hint_text": "Search:"
              },
              {
                "words": [
                  {
                    "word": "Style Y2K",
                    "word_id": "5666327824781300441"
                  }
                ],
                "scene": "feed_bar",
                "hint_text": "Search · "
              }
            ]
          },
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "468",
            "shareCount": "7",
            "commentCount": "71",
            "playCount": "2004",
            "collectCount": "7",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 110,
          "textLanguage": "un",
          "textTranslatable": false,
          "authorStatsV2": {
            "followingCount": "69",
            "followerCount": "120800",
            "heartCount": "12400000",
            "videoCount": "605",
            "diggCount": "1570",
            "heart": "12400000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603299232744836383"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603302217466055943",
          "desc": "প্রবাসীদের কেউ দুনিয়া থেকে বিদায় নিয়ে রাষ্ট্রীয় দায়িত্বে বিনা পয়সায় দেশে আনা হবে..!!🥰❤️‍🩹 #rsnijonvai #foryou #bdtiktokofficial #tiktok #tiktokviral @For You @TikTok Bangladesh @TikTok ",
          "createTime": 1770281753,
          "video": {
            "id": "7603302217466055943",
            "height": 576,
            "width": 576,
            "duration": 47,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/osf0KdIuCaBwlEai0Wi10IUxADXUIwA2iACqtA~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=1hNz5Rc4yJr%2BXNCNQJ8tABJK4bk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/okpoEaKhgrtRAQKxpfQ2pwFHE6BEUFfWBABGD0~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=9XRGBkIJ4%2B969Zt%2FQeUCjnxRPfI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o4tUIFA0Aw0IxKIDqiyxfBAAE0DBwi21iqdWlC~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=1l41AffexbZJehOrenIiBjBejyY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIawqI0EBld1iAWAwifyAaQhditUD0ACU2DIRE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1208&bt=604&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=4&rc=OWVlOzk6N2U6OmQ8Mzk3OUBpajNvb3A5cnQ4OTMzODczNEA0YDQzNjU1Nl4xYGNfXjEuYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e6f521faee45c45347ce6fedbeb90f04&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogY1IqDt0BA1WUG2gii2AI0QWCdwAAxwElf7Ei/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2234&bt=1117&cs=0&ds=3&eid=20480&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=0&rc=aWZmZ2ZlNTxkM2U0OjlkZEBpajNvb3A5cnQ4OTMzODczNEBhNGAzXi5hXjUxLzUxMV8uYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d4425c980f0403e470c153473edead98&tk=tt_chain_token",
            "bitrate": 619446,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "lower",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "lower_540_0",
                "Bitrate": 619446,
                "QualityType": 24,
                "PlayAddr": {
                  "Uri": "v14044g50000d625lqfog65mml4lq01g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIawqI0EBld1iAWAwifyAaQhditUD0ACU2DIRE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1208&bt=604&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=4&rc=OWVlOzk6N2U6OmQ8Mzk3OUBpajNvb3A5cnQ4OTMzODczNEA0YDQzNjU1Nl4xYGNfXjEuYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e6f521faee45c45347ce6fedbeb90f04&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIawqI0EBld1iAWAwifyAaQhditUD0ACU2DIRE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1208&bt=604&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=4&rc=OWVlOzk6N2U6OmQ8Mzk3OUBpajNvb3A5cnQ4OTMzODczNEA0YDQzNjU1Nl4xYGNfXjEuYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e6f521faee45c45347ce6fedbeb90f04&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=1644a6b0f9ca47a79b848796687bcb76&is_play_url=1&item_id=7603302217466055943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmQwOWE4YTFmNDUyZTc0YzUxODk0OWFlNzYyZDE5YWMy&tk=tt_chain_token&video_id=v14044g50000d625lqfog65mml4lq01g"
                  ],
                  "DataSize": 3693448,
                  "Width": 576,
                  "Height": 576,
                  "UrlKey": "v14044g50000d625lqfog65mml4lq01g_h264_540p_619446",
                  "FileHash": "233a69db071704abdf3b7a5a4b3a2fa7",
                  "FileCs": "c:0-40238-4746"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 88.022, \"v960\": 89.15, \"v864\": 91.535, \"v720\": 93.961}, \"ori\": {\"v1080\": 75.383, \"v960\": 77.685, \"v864\": 81.994, \"v720\": 84.338}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 549412,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v14044g50000d625lqfog65mml4lq01g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oca6zYDpQFArIMBhGgEUPYEGBtFKfRKEppsegA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1072&bt=536&cs=2&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=14&rc=NDllaWZpNjVkM2c7aTxoOUBpajNvb3A5cnQ4OTMzODczNEBjY2EuYWAtX18xNjE0YzExYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=0f8d9224b1d1241385ac43067590aadf&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oca6zYDpQFArIMBhGgEUPYEGBtFKfRKEppsegA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1072&bt=536&cs=2&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=14&rc=NDllaWZpNjVkM2c7aTxoOUBpajNvb3A5cnQ4OTMzODczNEBjY2EuYWAtX18xNjE0YzExYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=0f8d9224b1d1241385ac43067590aadf&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=464ef97f489d40bab203cfdc1fdbf6f1&is_play_url=1&item_id=7603302217466055943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmIzNmViN2UwYmY5MGJiNDg4N2QxNDIwZGM0NDljZjc0&tk=tt_chain_token&video_id=v14044g50000d625lqfog65mml4lq01g"
                  ],
                  "DataSize": 3275872,
                  "Width": 720,
                  "Height": 720,
                  "UrlKey": "v14044g50000d625lqfog65mml4lq01g_bytevc1_720p_549412",
                  "FileHash": "199bf055d8fee5adac5a746faa1448ae",
                  "FileCs": "c:0-40997-ad9a"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 92.115, \"v960\": 95.077, \"v864\": 96.354, \"v720\": 97.828}, \"ori\": {\"v1080\": 81.538, \"v960\": 85.595, \"v864\": 87.308, \"v720\": 91.16}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 472473,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v14044g50000d625lqfog65mml4lq01g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oMQEIgBXRYKhAiDpaFebfA1pGrtEpEFgU6F9BR/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=922&bt=461&cs=2&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=11&rc=PDdmNjdoZDdkNzdmOWRoOEBpajNvb3A5cnQ4OTMzODczNEAzLjAuYS9gNmMxLzYwNGMwYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=0f681103ab31211a9d173a075cb484bf&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oMQEIgBXRYKhAiDpaFebfA1pGrtEpEFgU6F9BR/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=922&bt=461&cs=2&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=11&rc=PDdmNjdoZDdkNzdmOWRoOEBpajNvb3A5cnQ4OTMzODczNEAzLjAuYS9gNmMxLzYwNGMwYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&btag=e00088000&expire=1770461329&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=0f681103ab31211a9d173a075cb484bf&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=35fe7a369c2444fa94ca2ed4133c1469&is_play_url=1&item_id=7603302217466055943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjcwOTgyZWZmZGYyMGFkZTE4OTc2MDVmNTA4NzZlYjdi&tk=tt_chain_token&video_id=v14044g50000d625lqfog65mml4lq01g"
                  ],
                  "DataSize": 2817123,
                  "Width": 576,
                  "Height": 576,
                  "UrlKey": "v14044g50000d625lqfog65mml4lq01g_bytevc1_540p_472473",
                  "FileHash": "74e8edb5540526c9448ea9603a6f76df",
                  "FileCs": "c:0-40997-32ed"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 90.673, \"v960\": 92.841, \"v864\": 94.537, \"v720\": 96.623}, \"ori\": {\"v1080\": 76.135, \"v960\": 81.227, \"v864\": 83.485, \"v720\": 87.873}}}"
              }
            ],
            "subtitleInfos": [
              {
                "LanguageID": "2",
                "LanguageCodeName": "eng-US",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/f520648a680bc81a51b79d540afeb7e2/69871891/video/tos/alisg/tos-alisg-pv-0037/4c665db01a0c4f02b50f3bdf2bb5ab5f/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                "UrlExpire": 1770461329,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 961
              },
              {
                "LanguageID": "12",
                "LanguageCodeName": "ben-BD",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/443ba9cb3220b3e6d72f322dfccb5c62/69871891/video/tos/alisg/tos-alisg-pv-0037/13f61e93c7c2459695363294a18321b7/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                "UrlExpire": 1770461329,
                "Format": "webvtt",
                "Version": "1:whisper_lid",
                "Source": "ASR",
                "Size": 1550
              }
            ],
            "zoomCover": {
              "240": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/osf0KdIuCaBwlEai0Wi10IUxADXUIwA2iACqtA~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=u5dgewA8rrvDF0e2A%2F%2FWtZZfPhA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/osf0KdIuCaBwlEai0Wi10IUxADXUIwA2iACqtA~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=YiE4M0Z8q8aiQ2ynTriooqo1umg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/osf0KdIuCaBwlEai0Wi10IUxADXUIwA2iACqtA~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=cCI7%2BcHYRJ7aKjoVASCBihysASU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/osf0KdIuCaBwlEai0Wi10IUxADXUIwA2iACqtA~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=BnMzwQKWO1%2FtL6PRwVmnYgqgxfE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -13.9,
              "Peak": 0.83176
            },
            "size": 3693448,
            "VQScore": "78.65",
            "claInfo": {
              "hasOriginalAudio": true,
              "enableAutoCaption": true,
              "originalLanguageInfo": {
                "language": "ben-BD",
                "languageID": "12",
                "languageCode": "",
                "canTranslateRealTimeNoCheck": true
              },
              "captionInfos": [
                {
                  "language": "ben-BD",
                  "languageID": "12",
                  "url": "https://v16m-webapp.tiktokcdn-us.com/443ba9cb3220b3e6d72f322dfccb5c62/69871891/video/tos/alisg/tos-alisg-pv-0037/13f61e93c7c2459695363294a18321b7/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                  "expire": "1770461329",
                  "captionFormat": "webvtt",
                  "isAutoGen": true,
                  "subID": "890825573",
                  "claSubtitleID": "7603309672300301077",
                  "languageCode": "",
                  "isOriginalCaption": true,
                  "urlList": [
                    "https://v16m-webapp.tiktokcdn-us.com/443ba9cb3220b3e6d72f322dfccb5c62/69871891/video/tos/alisg/tos-alisg-pv-0037/13f61e93c7c2459695363294a18321b7/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                    "https://v16m-webapp.tiktokcdn-us.com/443ba9cb3220b3e6d72f322dfccb5c62/69871891/video/tos/alisg/tos-alisg-pv-0037/13f61e93c7c2459695363294a18321b7/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&format=webvtt&is_play_url=1&language=ben-BD&line=0&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjg3NTM1NDU5ZjkyODZmZjMzODBkMDgyNWQ4NjAwNGRi&source=SmartPlayerSubtitleRedirect&version=1%3Awhisper_lid&video_id=v14044g50000d625lqfog65mml4lq01g"
                  ],
                  "variant": "whisper_lid",
                  "subtitleType": "1",
                  "translationType": "0"
                },
                {
                  "language": "eng-US",
                  "languageID": "2",
                  "url": "https://v16m-webapp.tiktokcdn-us.com/f520648a680bc81a51b79d540afeb7e2/69871891/video/tos/alisg/tos-alisg-pv-0037/4c665db01a0c4f02b50f3bdf2bb5ab5f/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                  "expire": "1770461329",
                  "captionFormat": "webvtt",
                  "isAutoGen": true,
                  "subID": "-147261603",
                  "claSubtitleID": "7603309978149899029",
                  "languageCode": "",
                  "isOriginalCaption": false,
                  "urlList": [
                    "https://v16m-webapp.tiktokcdn-us.com/f520648a680bc81a51b79d540afeb7e2/69871891/video/tos/alisg/tos-alisg-pv-0037/4c665db01a0c4f02b50f3bdf2bb5ab5f/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                    "https://v16m-webapp.tiktokcdn-us.com/f520648a680bc81a51b79d540afeb7e2/69871891/video/tos/alisg/tos-alisg-pv-0037/4c665db01a0c4f02b50f3bdf2bb5ab5f/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10338&bt=5169&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=ajNvb3A5cnQ4OTMzODczNEBpajNvb3A5cnQ4OTMzODczNEAubjFqMmRjaS9hLS1kMTFzYSMubjFqMmRjaS9hLS1kMTFzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00048000",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&format=webvtt&is_play_url=1&language=eng-US&line=0&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjg3NTM1NDU5ZjkyODZmZjMzODBkMDgyNWQ4NjAwNGRi&source=SmartPlayerSubtitleRedirect&version=4&video_id=v14044g50000d625lqfog65mml4lq01g"
                  ],
                  "variant": "default",
                  "subtitleType": "4",
                  "translationType": "0"
                }
              ],
              "captionsType": 2
            },
            "videoID": "v14044g50000d625lqfog65mml4lq01g"
          },
          "author": {
            "id": "7212687203838608385",
            "uniqueId": "rsnijonvai",
            "nickname": "⚡_𝐑𝐒 𝐍𝐢𝐣𝐨𝐧 𝐕𝐚𝐢_⚡",
            "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/0f1d6fa09fd999510b35b278c83be422~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ece09b11&x-expires=1770458400&x-signature=QT3wDfWCQhrbPTjYaMvccqubICk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/0f1d6fa09fd999510b35b278c83be422~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=be3ec585&x-expires=1770458400&x-signature=VmE231iX%2F4CWvHuF8UjcF4wiaQI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/0f1d6fa09fd999510b35b278c83be422~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=265a1834&x-expires=1770458400&x-signature=jVNqGQdhY64rFBdUH0yGmDVoPCQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "সবাই ফলো করবেন—ইনশাআল্লাহ সাথে সাথেই ফলো ব্যাক পাবেন..!!😊❤️‍🩹\n@⚡_𝐑𝐒 𝐍𝐢𝐣𝐨𝐧 𝐕𝐚𝐢_⚡",
            "verified": false,
            "secUid": "MS4wLjABAAAAzlMKBrw0VZCuopATuvV9RIgJBtOAckEh1t1xqUZ_ER5_XU03cqcTCPFV8ClMlSqM",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7603302272579259157",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-ve-27dcd7c799-tx/osqiAUMZzKlLbWYALIYMHvqyv4LMRxwBpEaCi/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=6&rc=PDQ6Nmk1Zjg5N2U7OTRpOEBpanMzZW05cjo4OTMzODU8NEAyMzRhYTJhNTYxY14xNGNeYSNoanNsMmRrai9hLS1kMS1zcw%3D%3D&btag=e00088000&expire=1770310129&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=33c9858559d89c34c5a07a0856405fda&tk=0",
            "coverThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/0f1d6fa09fd999510b35b278c83be422~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ece09b11&x-expires=1770458400&x-signature=QT3wDfWCQhrbPTjYaMvccqubICk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/0f1d6fa09fd999510b35b278c83be422~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=be3ec585&x-expires=1770458400&x-signature=VmE231iX%2F4CWvHuF8UjcF4wiaQI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/0f1d6fa09fd999510b35b278c83be422~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=265a1834&x-expires=1770458400&x-signature=jVNqGQdhY64rFBdUH0yGmDVoPCQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "⚡_𝐑𝐒 𝐍𝐢𝐣𝐨𝐧 𝐕𝐚𝐢_⚡",
            "original": true,
            "private": false,
            "duration": 47,
            "isCopyrighted": false,
            "tt2dsp": {}
          },
          "challenges": [
            {
              "id": "7384348118042542081",
              "title": "rsnijonvai",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1608685949673477",
              "title": "bdtiktokofficial",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "86427221",
              "title": "tiktokviral",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 1046,
            "shareCount": 42,
            "commentCount": 28,
            "playCount": 8790,
            "collectCount": 64
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 92,
              "end": 103,
              "hashtagName": "rsnijonvai",
              "hashtagId": "7384348118042542081",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 104,
              "end": 111,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 112,
              "end": 129,
              "hashtagName": "bdtiktokofficial",
              "hashtagId": "1608685949673477",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 130,
              "end": 137,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 138,
              "end": 150,
              "hashtagName": "tiktokviral",
              "hashtagId": "86427221",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 151,
              "end": 159,
              "hashtagName": "",
              "type": 0,
              "userId": "6642309458071568390",
              "isCommerce": false,
              "userUniqueId": "kalesalad",
              "secUid": "MS4wLjABAAAAgA3UnIdg1KL2EfxXOnmbZNqSXQ7UTsA0uP-T2uNmEqg8TyXbY4TGJQpRiX6-KhPh",
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 160,
              "end": 178,
              "hashtagName": "",
              "type": 0,
              "userId": "6876055661093094406",
              "isCommerce": false,
              "userUniqueId": "bdtiktokofficial",
              "secUid": "MS4wLjABAAAAkmBHQzJJjAZhmg2udrKs-VJIJEPC6Tocjwf4strAlnrc3MAg7A7-m3ZdcRVNA4lN",
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 179,
              "end": 186,
              "hashtagName": "",
              "type": 0,
              "userId": "107955",
              "isCommerce": false,
              "userUniqueId": "tiktok",
              "secUid": "MS4wLjABAAAAv7iSuuXDJGDvJkmH_vz1qkDZYo1apxgzaxdBSeIuPiM",
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "authorStats": {
            "followingCount": 54,
            "followerCount": 562900,
            "heartCount": 39900000,
            "videoCount": 983,
            "diggCount": 82600,
            "heart": 39900000,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "প্রবাসীদের কেউ দুনিয়া থেকে বিদায় নিয়ে রাষ্ট্রীয় দায়িত্বে বিনা পয়সায় দেশে আনা হবে..!!🥰❤️‍🩹"
            },
            {
              "desc": ""
            },
            {
              "desc": "#rsnijonvai #foryou #bdtiktokofficial #tiktok #tiktokviral @For You @TikTok Bangladesh @TikTok ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 0,
                  "end": 11,
                  "hashtagName": "rsnijonvai",
                  "hashtagId": "7384348118042542081",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 12,
                  "end": 19,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 20,
                  "end": 37,
                  "hashtagName": "bdtiktokofficial",
                  "hashtagId": "1608685949673477",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 38,
                  "end": 45,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 46,
                  "end": 58,
                  "hashtagName": "tiktokviral",
                  "hashtagId": "86427221",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 59,
                  "end": 67,
                  "hashtagName": "",
                  "type": 0,
                  "userId": "6642309458071568390",
                  "isCommerce": false,
                  "userUniqueId": "kalesalad",
                  "secUid": "MS4wLjABAAAAgA3UnIdg1KL2EfxXOnmbZNqSXQ7UTsA0uP-T2uNmEqg8TyXbY4TGJQpRiX6-KhPh",
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 68,
                  "end": 86,
                  "hashtagName": "",
                  "type": 0,
                  "userId": "6876055661093094406",
                  "isCommerce": false,
                  "userUniqueId": "bdtiktokofficial",
                  "secUid": "MS4wLjABAAAAkmBHQzJJjAZhmg2udrKs-VJIJEPC6Tocjwf4strAlnrc3MAg7A7-m3ZdcRVNA4lN",
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 87,
                  "end": 94,
                  "hashtagName": "",
                  "type": 0,
                  "userId": "107955",
                  "isCommerce": false,
                  "userUniqueId": "tiktok",
                  "secUid": "MS4wLjABAAAAv7iSuuXDJGDvJkmH_vz1qkDZYo1apxgzaxdBSeIuPiM",
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10083,
          "collected": false,
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "1046",
            "shareCount": "42",
            "commentCount": "28",
            "playCount": "8790",
            "collectCount": "64",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 120,
          "textLanguage": "bn",
          "textTranslatable": true,
          "authorStatsV2": {
            "followingCount": "54",
            "followerCount": "562900",
            "heartCount": "39900000",
            "videoCount": "983",
            "diggCount": "82600",
            "heart": "39900000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603302217466055943"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603298428063337759",
          "desc": "tiktok #fyp #grwm ",
          "createTime": 1770280943,
          "video": {
            "id": "7603298428063337759",
            "height": 1280,
            "width": 720,
            "duration": 95,
            "ratio": "720p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oQKTCRlHIXeL2IXAfAHgCMshjuPiGIKVIeLg9q~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=peNNc4gIm%2F3XdndBpLAihJyQTi4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oArwBf1lCiFqIAWvbA0AiADEIwIiAStTGiN04C~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=SokjYykn3VYY1oC8wssso9M6eM0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oMvbqBrITMiii6lfCA1EDq0AWiItwAYdiI4ABP~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=MitjX7IYDYP5hmNJaglHg5Ucg6s%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/ooZ2QmLALPqXhedEIgGAIuCVjsTAWCeIWKIie6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1906&bt=953&cs=0&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=0&rc=NDU2ZDkzODgzaDNoOTRpO0Bpamk1am85cmw4OTMzaTczNEBgM2JfLWFjXy0xMWBiLS41YSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b88e36ca421c0069cd036f2e11554103&tk=tt_chain_token",
            "bitrate": 976114,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "720p",
            "bitrateInfo": [
              {
                "GearName": "adapt_lowest_1080_1",
                "Bitrate": 1098602,
                "QualityType": 2,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625bivog65ldgv2rf9g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ogPs9AxMTEIar9iICVLIAuGXICAjpeeRgse2qK/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2144&bt=1072&cs=2&ds=4&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=15&rc=aTw7ZjxlaDVmOTVpNjRoZEBpamk1am85cmw4OTMzaTczNEBiLy5eNGIuNjYxLS4uLTFhYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=c6151d12dd91ba133fdd840f83b14455&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ogPs9AxMTEIar9iICVLIAuGXICAjpeeRgse2qK/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2144&bt=1072&cs=2&ds=4&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=15&rc=aTw7ZjxlaDVmOTVpNjRoZEBpamk1am85cmw4OTMzaTczNEBiLy5eNGIuNjYxLS4uLTFhYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=c6151d12dd91ba133fdd840f83b14455&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=da4e01131f02469c921eeb79ac1829ef&is_play_url=1&item_id=7603298428063337759&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjk0NDg5ZWY0ZWVlMDhiOTcyNDI5MjBjY2JhODA2ODI3&tk=tt_chain_token&video_id=v15044gf0000d625bivog65ldgv2rf9g"
                  ],
                  "DataSize": 13091773,
                  "Width": 1080,
                  "Height": 1920,
                  "UrlKey": "v15044gf0000d625bivog65ldgv2rf9g_bytevc1_1080p_1098602",
                  "FileHash": "820cb0f13e348221ca210b19f664451b",
                  "FileCs": "c:0-80098-0606"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 96.546, \"v960\": 97.536, \"v864\": 98.017, \"v720\": 98.732}, \"ori\": {\"v1080\": 91.829, \"v960\": 93.066, \"v864\": 93.928, \"v720\": 95.614}}}"
              },
              {
                "GearName": "normal_720_0",
                "Bitrate": 976114,
                "QualityType": 10,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625bivog65ldgv2rf9g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/ooZ2QmLALPqXhedEIgGAIuCVjsTAWCeIWKIie6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1906&bt=953&cs=0&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=0&rc=NDU2ZDkzODgzaDNoOTRpO0Bpamk1am85cmw4OTMzaTczNEBgM2JfLWFjXy0xMWBiLS41YSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b88e36ca421c0069cd036f2e11554103&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/ooZ2QmLALPqXhedEIgGAIuCVjsTAWCeIWKIie6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1906&bt=953&cs=0&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=0&rc=NDU2ZDkzODgzaDNoOTRpO0Bpamk1am85cmw4OTMzaTczNEBgM2JfLWFjXy0xMWBiLS41YSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=b88e36ca421c0069cd036f2e11554103&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=881f01e6ce404e00b5f5d006bae362c1&is_play_url=1&item_id=7603298428063337759&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmEyYTM0NGY0MjE0OWM1ZTkzODZhMzY2MmJiMDBjMDYw&tk=tt_chain_token&video_id=v15044gf0000d625bivog65ldgv2rf9g"
                  ],
                  "DataSize": 11632108,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v15044gf0000d625bivog65ldgv2rf9g_h264_720p_976114",
                  "FileHash": "31b6e9eeb899a6fd893ebbf48f7741d9",
                  "FileCs": "c:0-79424-f690"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 83.346, \"v960\": 87.19, \"v864\": 88.033, \"v720\": 91.169}, \"ori\": {\"v1080\": 83.346, \"v960\": 87.19, \"v864\": 88.033, \"v720\": 91.169}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 645894,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625bivog65ldgv2rf9g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oU0VqJEblAvIiAiI1itEDYQQHwC4ASfyErWBiT/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1260&bt=630&cs=2&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=14&rc=NTo4NzxoPDw4Njg3aDZlO0Bpamk1am85cmw4OTMzaTczNEBjNGEtYGJhX2MxMS4xXmAwYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=cfeb03cafcb6e60951068fa5dad2fd5d&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oU0VqJEblAvIiAiI1itEDYQQHwC4ASfyErWBiT/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1260&bt=630&cs=2&ds=3&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=14&rc=NTo4NzxoPDw4Njg3aDZlO0Bpamk1am85cmw4OTMzaTczNEBjNGEtYGJhX2MxMS4xXmAwYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=cfeb03cafcb6e60951068fa5dad2fd5d&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=38cba34e144543f5b9d9eec904d577f2&is_play_url=1&item_id=7603298428063337759&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjhjZmZiNDBiY2ZjNjkxNWYyZmNlMTRhOTIwMmFiOTIy&tk=tt_chain_token&video_id=v15044gf0000d625bivog65ldgv2rf9g"
                  ],
                  "DataSize": 7696962,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v15044gf0000d625bivog65ldgv2rf9g_bytevc1_720p_645894",
                  "FileHash": "b525552bd5de336e255265a405766e29",
                  "FileCs": "c:0-80099-8241"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 93.913, \"v960\": 95.403, \"v864\": 96.456, \"v720\": 97.784}, \"ori\": {\"v1080\": 85.601, \"v960\": 87.884, \"v864\": 89.566, \"v720\": 92.432}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 533255,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625bivog65ldgv2rf9g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oYADiCT0qilQGIoErTEfAiWw2Bi7biI1vUt4DA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1040&bt=520&cs=2&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=11&rc=N2U6OWY1PDg6ODg4NTUzZEBpamk1am85cmw4OTMzaTczNEA1NjExYl5eX18xLi5fMzYvYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9ebb5e4c226615eb8f94cfefb0e61bb2&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oYADiCT0qilQGIoErTEfAiWw2Bi7biI1vUt4DA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1040&bt=520&cs=2&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=11&rc=N2U6OWY1PDg6ODg4NTUzZEBpamk1am85cmw4OTMzaTczNEA1NjExYl5eX18xLi5fMzYvYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9ebb5e4c226615eb8f94cfefb0e61bb2&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=2a9062b2151545b7b5a9a2ec46479b84&is_play_url=1&item_id=7603298428063337759&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjgwZWY3YTVlNzM1ODk5MzQxYWMxMzczZmNlZDQzZjRl&tk=tt_chain_token&video_id=v15044gf0000d625bivog65ldgv2rf9g"
                  ],
                  "DataSize": 6354669,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625bivog65ldgv2rf9g_bytevc1_540p_533255",
                  "FileHash": "54b320b57990102bfdb67c7e24794ee1",
                  "FileCs": "c:0-80099-5986"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 92.396, \"v960\": 94.12, \"v864\": 95.566, \"v720\": 97.217}, \"ori\": {\"v1080\": 82.271, \"v960\": 84.926, \"v864\": 87.239, \"v720\": 90.287}}}"
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 350925,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625bivog65ldgv2rf9g",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oosTdpuiHAfVgjGBAQLmCWqGXePe2BKIIICOEI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=684&bt=342&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=5&rc=ZGdnZjk1Z2U8ZDdlNzQ1PEBpamk1am85cmw4OTMzaTczNEBfYTQyNi5iXl8xYmJeYC5jYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9365c936fd62e7169572d318414fd380&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oosTdpuiHAfVgjGBAQLmCWqGXePe2BKIIICOEI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=684&bt=342&cs=0&ds=6&ft=aEeq8qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=5&rc=ZGdnZjk1Z2U8ZDdlNzQ1PEBpamk1am85cmw4OTMzaTczNEBfYTQyNi5iXl8xYmJeYC5jYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&btag=e00090000&expire=1770461377&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9365c936fd62e7169572d318414fd380&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=f912c1a4ebe44ab9abed12965c7dddba&is_play_url=1&item_id=7603298428063337759&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmNiMDMzZmZkYWNjNWVhYTQwYjNiNGVhMWU5ZGQ2YTQ4&tk=tt_chain_token&video_id=v15044gf0000d625bivog65ldgv2rf9g"
                  ],
                  "DataSize": 4181887,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625bivog65ldgv2rf9g_h264_540p_350925",
                  "FileHash": "c024575581f519c662ec068dcd912b7a",
                  "FileCs": "c:0-79593-8a97"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 74.3, \"v960\": 77.663, \"v864\": 80.32, \"v720\": 84.452}, \"ori\": {\"v1080\": 65.814, \"v960\": 67.836, \"v864\": 70.824, \"v720\": 75.164}}}"
              }
            ],
            "subtitleInfos": [
              {
                "LanguageID": "2",
                "LanguageCodeName": "eng-US",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/ecb1b2b5f76b1fc21c33e73b1e34950b/698718c1/video/tos/useast8/tos-useast8-v-0068-tx2/c40ad34e284148f9aefbee71dd6b421c/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=16748&bt=8374&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=amk1am85cmw4OTMzaTczNEBpamk1am85cmw4OTMzaTczNEA2b3NhMmRzXy9hLS1kMTJzYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00050000",
                "UrlExpire": 1770461377,
                "Format": "webvtt",
                "Version": "1:big_caption",
                "Source": "ASR",
                "Size": 1742
              },
              {
                "LanguageID": "9",
                "LanguageCodeName": "spa-ES",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/1a99d26f73c2158948d12ab93e84152a/698718c1/video/tos/useast8/tos-useast8-v-0068-tx2/0419732732a24156818ddb9376d6c4db/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=16748&bt=8374&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=amk1am85cmw4OTMzaTczNEBpamk1am85cmw4OTMzaTczNEA2b3NhMmRzXy9hLS1kMTJzYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00050000",
                "UrlExpire": 1770461377,
                "Format": "webvtt",
                "Version": "4:dubbing",
                "Source": "MT",
                "Size": 1198
              },
              {
                "LanguageID": "9",
                "LanguageCodeName": "spa-ES",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/f710089fcc937408373a950e83ad1a4c/698718c1/video/tos/useast8/tos-useast8-v-0068-tx2/6cc13f13797a43aea48a06a2e55e693f/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=16748&bt=8374&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=amk1am85cmw4OTMzaTczNEBpamk1am85cmw4OTMzaTczNEA2b3NhMmRzXy9hLS1kMTJzYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00050000",
                "UrlExpire": 1770461377,
                "Format": "webvtt",
                "Version": "4:elevenlabs_dubbing",
                "Source": "MT",
                "Size": 1230
              },
              {
                "LanguageID": "8",
                "LanguageCodeName": "por-PT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3ebb336688225452aaefe9435df2859d/698718c1/video/tos/useast8/tos-useast8-v-0068-tx2/3edadec34fd94924b1d0efb548f11d28/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=16748&bt=8374&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=amk1am85cmw4OTMzaTczNEBpamk1am85cmw4OTMzaTczNEA2b3NhMmRzXy9hLS1kMTJzYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00050000",
                "UrlExpire": 1770461377,
                "Format": "webvtt",
                "Version": "4:dubbing",
                "Source": "MT",
                "Size": 1260
              },
              {
                "LanguageID": "8",
                "LanguageCodeName": "por-PT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/77854a1e7bada0e7f3735280b071cc34/698718c1/video/tos/useast8/tos-useast8-v-0068-tx2/67701d7a675e44b8a711ff25246b75fc/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=16748&bt=8374&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=amk1am85cmw4OTMzaTczNEBpamk1am85cmw4OTMzaTczNEA2b3NhMmRzXy9hLS1kMTJzYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00050000",
                "UrlExpire": 1770461377,
                "Format": "webvtt",
                "Version": "4:elevenlabs_dubbing",
                "Source": "MT",
                "Size": 1231
              },
              {
                "LanguageID": "8",
                "LanguageCodeName": "por-PT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/646fbd633c75e7b133cb0aa3dedbb33d/698718c1/video/tos/useast8/tos-useast8-v-0068-tx2/18848c4bc4cb41f0a6680c87bb8a52d1/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=16748&bt=8374&ds=4&ft=aEKq_qT0mIoPD12RM_Fs3wUvLoAbMeF~O5&mime_type=video_mp4&qs=13&rc=amk1am85cmw4OTMzaTczNEBpamk1am85cmw4OTMzaTczNEA2b3NhMmRzXy9hLS1kMTJzYSM2b3NhMmRzXy9hLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00050000",
                "UrlExpire": 1770461377,
                "Format": "webvtt",
                "Version": "4:seed_dubbing",
                "Source": "MT",
                "Size": 1906
              }
            ],
            "zoomCover": {
              "240": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oQKTCRlHIXeL2IXAfAHgCMshjuPiGIKVIeLg9q~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=%2F4ijPS1DgI%2BJKNFtJyuaJQDZX58%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oQKTCRlHIXeL2IXAfAHgCMshjuPiGIKVIeLg9q~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=SYxOSEGe4HqSxClRjvQ84539XU8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oQKTCRlHIXeL2IXAfAHgCMshjuPiGIKVIeLg9q~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=LVt11fCPy8MbcKwU1q32Hwfrny4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oQKTCRlHIXeL2IXAfAHgCMshjuPiGIKVIeLg9q~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=NlUfGCTx1A%2FWJ8irma05nv3XLd4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -19,
              "Peak": 0.53088
            },
            "size": 11632108,
            "VQScore": "62.1",
            "claInfo": {
              "hasOriginalAudio": true,
              "enableAutoCaption": true,
              "noCaptionReason": 1
            },
            "videoID": "v15044gf0000d625bivog65ldgv2rf9g"
          },
          "author": {
            "id": "7255477518025770027",
            "uniqueId": "holeeshiiit",
            "nickname": "Lee",
            "avatarThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/3428a9bf799132fd40d663e243418462~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=3560f197&x-expires=1770458400&x-signature=RydZRFGQrSM7NYi%2F9a3iDOGO58E%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/3428a9bf799132fd40d663e243418462~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=67a1016a&x-expires=1770458400&x-signature=5%2BTJSMP3iieQ3QA83hni77r0jbg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/3428a9bf799132fd40d663e243418462~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6e82094e&x-expires=1770458400&x-signature=WJuW7gnPIzytNqBTc1oDEEIPFJo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "face reveal at 14k",
            "verified": false,
            "secUid": "MS4wLjABAAAAIE6ob391awWnUrmoOC6wPUyBfuAKYnQO_6fF2CCaRRbuvNfY5JOj7la3v7uep3if",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 3,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7562699327311874827",
            "title": "sonido original",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-ve-27dcd7c799-tx/oALVFf4YkgeCmHjQCNfEH0gGoEgJKgwfvFJDwA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=6&rc=NGhkNGdoNWkzaGc0aDk7OUBpanJ5N3k5cjM0NjMzNzU8M0BgNi1jLzExXzMxY2A2YDYwYSMtMGlsMmQ0am5hLS1kMTZzcw%3D%3D&btag=e000b0000&expire=1770310087&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=35c48255f13913c5b2fbf58a79d58901&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/5eb7cb0fc60a10b17580cc95dfb68b05~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=e91a37d3&x-expires=1770458400&x-signature=QL90vIlI2WuD8dxgG65zf2fDsYI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/5eb7cb0fc60a10b17580cc95dfb68b05~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=f72c1a9a&x-expires=1770458400&x-signature=AWc7RwshtYp4AnQST%2B6jUrRj0m8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/5eb7cb0fc60a10b17580cc95dfb68b05~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5dbf153f&x-expires=1770458400&x-signature=Nh5MIJ7RppHWEcEFedfZ6rxaGvk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "rotchoto 🇧🇷",
            "original": true,
            "private": false,
            "duration": 5,
            "isCopyrighted": false,
            "tt2dsp": {
              "tt_to_dsp_song_infos": [
                {
                  "platform": 1,
                  "song_id": "1146227958",
                  "token": {
                    "apple_music_token": {
                      "developer_token": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ikc2Q0dLMjdWQzMifQ.eyJleHAiOjE3NzA1MDM3MjksImlhdCI6MTc3MDI0NDUyOSwiaXNzIjoiTUo3OTdEOFU2RiJ9.V2d3ZgXQasDRbslaf4RLUuAqYZ140cl7Xa08tgcO79JlzNCSkjkC5hhGKOQd1rEmi5Q3mCLvY0T3qivtKp_8pQ"
                    }
                  },
                  "meta_song_id": "6777193105419405313"
                },
                {
                  "platform": 3,
                  "song_id": "2odhsUT5lBkHPi6jXd7gk1",
                  "meta_song_id": "6777193105419405313"
                }
              ]
            }
          },
          "challenges": [
            {
              "id": "229207",
              "title": "fyp",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "72878",
              "title": "grwm",
              "desc": "Share your #GRWM routine!",
              "profileThumb": "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/2f4a5c82f156f68322b25fe690e11f51.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=mouZiZ%2Bs%2FaQ7O8%2BIhQIKrpjVzak%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/2f4a5c82f156f68322b25fe690e11f51.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=mouZiZ%2Bs%2FaQ7O8%2BIhQIKrpjVzak%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/2f4a5c82f156f68322b25fe690e11f51.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=mouZiZ%2Bs%2FaQ7O8%2BIhQIKrpjVzak%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/26dfa5dba704c0953df911d01f89241f.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=fgFNHW%2BpjUdpS8rOwtvqN1UBrmY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/26dfa5dba704c0953df911d01f89241f.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=fgFNHW%2BpjUdpS8rOwtvqN1UBrmY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverLarger": "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/26dfa5dba704c0953df911d01f89241f.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=fgFNHW%2BpjUdpS8rOwtvqN1UBrmY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
            }
          ],
          "stats": {
            "diggCount": 33,
            "shareCount": 2,
            "commentCount": 0,
            "playCount": 318,
            "collectCount": 1
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 7,
              "end": 11,
              "hashtagName": "fyp",
              "hashtagId": "229207",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 12,
              "end": 17,
              "hashtagName": "grwm",
              "hashtagId": "72878",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "authorStats": {
            "followingCount": 163,
            "followerCount": 13400,
            "heartCount": 948400,
            "videoCount": 10,
            "diggCount": 5237,
            "heart": 948400,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "stickersOnItem": [
            {
              "stickerType": 4,
              "stickerText": [
                "thank u for view"
              ]
            }
          ],
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "tiktok #fyp #grwm ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 7,
                  "end": 11,
                  "hashtagName": "fyp",
                  "hashtagId": "229207",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 12,
                  "end": 17,
                  "hashtagName": "grwm",
                  "hashtagId": "72878",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10029,
          "collected": false,
          "videoSuggestWordsList": {
            "video_suggest_words_struct": [
              {
                "words": [
                  {
                    "word": "GRWM Outfit Ideas",
                    "word_id": "6371608774167633298"
                  },
                  {
                    "word": "Lee",
                    "word_id": "8474588298411851509"
                  },
                  {
                    "word": "grwm outfits",
                    "word_id": "237139017643431740"
                  }
                ],
                "scene": "comment_top",
                "hint_text": "Search:"
              },
              {
                "words": [
                  {
                    "word": "GRWM Outfit Ideas",
                    "word_id": "6371608774167633298"
                  }
                ],
                "scene": "feed_bar",
                "hint_text": "Search · "
              }
            ]
          },
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "33",
            "shareCount": "2",
            "commentCount": "0",
            "playCount": "318",
            "collectCount": "1",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 109,
          "textLanguage": "en",
          "textTranslatable": true,
          "authorStatsV2": {
            "followingCount": "163",
            "followerCount": "13400",
            "heartCount": "948400",
            "videoCount": "10",
            "diggCount": "5237",
            "heart": "948400",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603298428063337759"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603305642186525973",
          "desc": "#airatafridi40 #viralvide #tiktok #like #ka #plzunfrezemyaccount #please #foryou #ka #like #ka #❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ @🦋⃟𝓐𝓲𝓻𝓪𝓽 𝓐𝓯𝓻𝓲𝓭𝓲🕊️ ",
          "createTime": 1770282552,
          "video": {
            "id": "7603305642186525973",
            "height": 1024,
            "width": 576,
            "duration": 19,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooABIFmszhzGDvuARfXBFeEhgcECB8TQop2ZIy~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=C8555o99CRpy1mCdvQ8bIIxeBUE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oYAwIirCzYYsBXBAcXoaE5EA1c2R67ZUnIiPj~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=FUmzjMXdvd5eFdEekl5ThD45%2FRo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/osR64BsZAhGQoBjpyFcFEzmhQBXfGfpE3gDXEz~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=6UQVpZicvwzh5VYEUZIr%2BUuPQEw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oAGEKzwz7XPE7YAiRrjZ5UYXBQEaAisc8B6AI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&br=5744&bt=2872&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=ZDlmPDpkZ2hkNzM1Mzg0ZkBpam5tdGo5cnU4OTMzODczNEAwYV9fMDJgNV8xNi9iLV8xYSNgM3FwMmQ0bS9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461302&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d971612c23920e9c546c394938b307fe&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oAtALi3ZiHTAJfeedJQSCWCIjDVMNAn4mA8Qaj/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&br=5882&bt=2941&cs=0&ds=3&eid=20480&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OTg7ZGlmOWZnOGg7ZWQ4Z0Bpam5tdGo5cnU4OTMzODczNEA2Y2JeMGBeNTQxYGI1LjA1YSNgM3FwMmQ0bS9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461302&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=4db31a2ddc280160657fa3640c002c4a&tk=tt_chain_token",
            "bitrate": 2941757,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "normal_540_0",
                "Bitrate": 2941757,
                "QualityType": 20,
                "PlayAddr": {
                  "Uri": "v1c044g50000d625pr7og65gsqtj6kcg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oAGEKzwz7XPE7YAiRrjZ5UYXBQEaAisc8B6AI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&br=5744&bt=2872&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=ZDlmPDpkZ2hkNzM1Mzg0ZkBpam5tdGo5cnU4OTMzODczNEAwYV9fMDJgNV8xNi9iLV8xYSNgM3FwMmQ0bS9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461302&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d971612c23920e9c546c394938b307fe&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oAGEKzwz7XPE7YAiRrjZ5UYXBQEaAisc8B6AI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&br=5744&bt=2872&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=ZDlmPDpkZ2hkNzM1Mzg0ZkBpam5tdGo5cnU4OTMzODczNEAwYV9fMDJgNV8xNi9iLV8xYSNgM3FwMmQ0bS9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461302&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d971612c23920e9c546c394938b307fe&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=4cb105e0229044ba8ecd5a37b9bcd63a&is_play_url=1&item_id=7603305642186525973&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmViY2RiMDZiMmM0N2QwOGU2ZGQ5MGY4MDVmOWM2MzVm&tk=tt_chain_token&video_id=v1c044g50000d625pr7og65gsqtj6kcg"
                  ],
                  "DataSize": 7129718,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v1c044g50000d625pr7og65gsqtj6kcg_h264_540p_2941757",
                  "FileHash": "8910c6cd90095f15a393bbf5d5877168",
                  "FileCs": "c:0-16433-b94a"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 84.785, \"v960\": 90.752, \"v864\": 90.988, \"v720\": 93.436}, \"ori\": {\"v1080\": 78.132, \"v960\": 81.481, \"v864\": 83.201, \"v720\": 87.526}}}"
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 1009231,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v1c044g50000d625pr7og65gsqtj6kcg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ocRYzPCEIri5AwEBsVcXj0iXB7QYURlASEakZ/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&br=1970&bt=985&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=NjU8Z2U6NmhlZmZkNWk4NkBpam5tdGo5cnU4OTMzODczNEA2YDNfLjNiNTYxYmBgMF8yYSNgM3FwMmQ0bS9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461302&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=3c8abb1f4153a8959616bb0b9731e30b&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ocRYzPCEIri5AwEBsVcXj0iXB7QYURlASEakZ/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&br=1970&bt=985&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=NjU8Z2U6NmhlZmZkNWk4NkBpam5tdGo5cnU4OTMzODczNEA2YDNfLjNiNTYxYmBgMF8yYSNgM3FwMmQ0bS9hLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1770461302&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=3c8abb1f4153a8959616bb0b9731e30b&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=53b53fc2caec4c9b8ee3671bbd69c293&is_play_url=1&item_id=7603305642186525973&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjBjOTI2MDE3MjQ4OGU1Nzc1MDVmZjgxMmJhODViMWZi&tk=tt_chain_token&video_id=v1c044g50000d625pr7og65gsqtj6kcg"
                  ],
                  "DataSize": 2445998,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v1c044g50000d625pr7og65gsqtj6kcg_h264_540p_1009231",
                  "FileHash": "4f81fd3453e20179a4982ecfa5c4e4dd",
                  "FileCs": "c:0-16425-f0c6"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 68.891, \"v960\": 70.394, \"v864\": 71.082, \"v720\": 80.564}, \"ori\": {\"v1080\": 53.146, \"v960\": 62.137, \"v864\": 66.061, \"v720\": 71.02}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooABIFmszhzGDvuARfXBFeEhgcECB8TQop2ZIy~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=tBoXyqoIRzWvm4ghFmmGvN%2FdXYA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooABIFmszhzGDvuARfXBFeEhgcECB8TQop2ZIy~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=kZsfmok7v00WzGAmwamFDE64FMo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooABIFmszhzGDvuARfXBFeEhgcECB8TQop2ZIy~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=yDUr5QhrU1zySDodYW3GT%2FCXALI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooABIFmszhzGDvuARfXBFeEhgcECB8TQop2ZIy~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=wiMwx00mnLo%2BOrhx37ymTEwBAXk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -7,
              "Peak": 1
            },
            "size": 7129718,
            "VQScore": "60.72",
            "claInfo": {
              "hasOriginalAudio": false,
              "enableAutoCaption": true,
              "noCaptionReason": 3
            },
            "videoID": "v1c044g50000d625pr7og65gsqtj6kcg"
          },
          "author": {
            "id": "7098670851373466650",
            "uniqueId": "airatafridi40",
            "nickname": "🦋⃟𝓐𝓲𝓻𝓪𝓽 𝓐𝓯𝓻𝓲𝓭𝓲🕊️",
            "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/db9aef2aa67477dee08842559112df4b~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=8b9b9066&x-expires=1770458400&x-signature=R0jeOQ7YK3FQAJb2KSppoTfBX38%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/db9aef2aa67477dee08842559112df4b~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=5fa5f853&x-expires=1770458400&x-signature=h38WPDV%2FhTSxTtBbROychPolUw4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/db9aef2aa67477dee08842559112df4b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f1f47692&x-expires=1770458400&x-signature=tNAmfGonnLeZ%2B9CzT8%2BMFgpdB%2BM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "👑❤💔(≚𝄟🦋⃟≛⃝ایرات≚)îlove🌹you💔𓅂@î᭄🦋⃟≛⃝ ✧ÂîRât༺âfrîdî༻✧𓅂❤2023❤\n/07/30💔🌹💔",
            "verified": false,
            "secUid": "MS4wLjABAAAAIDnIL8mjoeAZLdbw261LDKHNxwCB5bfwLPAEiccIdLu5G_-T-AOxS_UqlqvlEHPw",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": true,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7587447277926763282",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-v-27dcd7c799-tx/ooG7Yje4AehASLAoDfMCE1gOImIDDIzAT7CAQH/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=amp3aW05cjkzODMzODU8NEBpamp3aW05cjkzODMzODU8NEBnbzQ0MmRrYjNhLS1kMS1zYSNnbzQ0MmRrYjNhLS1kMS1zcw%3D%3D&btag=e00078000&expire=1770310101&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=03577eadb5255d21411ded2777571958&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-giso/29f9279f50e25e1fc1ca7553f6c42193~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=e2a792cd&x-expires=1770458400&x-signature=xQN5kxY%2B3Pj%2FEXMNeS0lJ7lrGzU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-giso/29f9279f50e25e1fc1ca7553f6c42193~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=6c48bb4a&x-expires=1770458400&x-signature=xbJqqFmwZyvD%2BQXF5%2FE7CM6Qn%2F8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-giso/29f9279f50e25e1fc1ca7553f6c42193~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=fa9bf0cb&x-expires=1770458400&x-signature=lCRqafYhUqzkvMPzinu0o3Biz8g%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "hewad khan",
            "original": true,
            "private": false,
            "duration": 19,
            "isCopyrighted": false,
            "tt2dsp": {
              "tt_to_dsp_song_infos": [
                {
                  "platform": 1,
                  "song_id": "1794063293",
                  "token": {
                    "apple_music_token": {
                      "developer_token": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ikc2Q0dLMjdWQzMifQ.eyJleHAiOjE3NzA1MDM0MDgsImlhdCI6MTc3MDI0NDIwOCwiaXNzIjoiTUo3OTdEOFU2RiJ9.x6ipd7ZVPGpITRy4PsRYxgIs2q96bGsvmFOAsWVCBb39e6UNmPRELv_op10DKuxzTHoRPJO_RMS7bVluhln0MQ"
                    }
                  },
                  "meta_song_id": "7467064713291089936"
                },
                {
                  "platform": 3,
                  "song_id": "3GXiQpnCsNGOW4RomWhk1X",
                  "meta_song_id": "7467064713291089936"
                }
              ]
            }
          },
          "challenges": [
            {
              "id": "7153997932873744411",
              "title": "airatafridi40",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "50244548",
              "title": "viralvide",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "5222",
              "title": "like",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "85718",
              "title": "ka",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1645454307414018",
              "title": "plzunfrezemyaccount",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "8642",
              "title": "please",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1592484518106118",
              "title": "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 35,
            "shareCount": 0,
            "commentCount": 3,
            "playCount": 130,
            "collectCount": 0
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 0,
              "end": 14,
              "hashtagName": "airatafridi40",
              "hashtagId": "7153997932873744411",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 15,
              "end": 25,
              "hashtagName": "viralvide",
              "hashtagId": "50244548",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 26,
              "end": 33,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 34,
              "end": 39,
              "hashtagName": "like",
              "hashtagId": "5222",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 40,
              "end": 43,
              "hashtagName": "ka",
              "hashtagId": "85718",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 44,
              "end": 64,
              "hashtagName": "plzunfrezemyaccount",
              "hashtagId": "1645454307414018",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 65,
              "end": 72,
              "hashtagName": "please",
              "hashtagId": "8642",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 73,
              "end": 80,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 81,
              "end": 84,
              "hashtagName": "ka",
              "hashtagId": "85718",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 85,
              "end": 90,
              "hashtagName": "like",
              "hashtagId": "5222",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 91,
              "end": 94,
              "hashtagName": "ka",
              "hashtagId": "85718",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 95,
              "end": 126,
              "hashtagName": "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
              "hashtagId": "1592484518106118",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "7126185199456587035",
              "start": 127,
              "end": 157,
              "hashtagName": "",
              "type": 5,
              "userId": "7098670851373466650",
              "isCommerce": false,
              "userUniqueId": "airatafridi40",
              "secUid": "MS4wLjABAAAAIDnIL8mjoeAZLdbw261LDKHNxwCB5bfwLPAEiccIdLu5G_-T-AOxS_UqlqvlEHPw",
              "subType": 6
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 5864,
            "followerCount": 6793,
            "heartCount": 137500,
            "videoCount": 830,
            "diggCount": 116200,
            "heart": 137500,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "adLabelVersion": 2,
          "poi": {
            "id": "42203860745542178",
            "name": "All For You Homestay",
            "address": "9 J C Long Blvd, Isle of Palms, SC 29451, United States",
            "city": "Isle of Palms",
            "province": "",
            "country": "",
            "fatherPoiId": "",
            "fatherPoiName": "Isle of Palms",
            "type": 0,
            "category": "Hotels and Lodging",
            "cityCode": "4583114",
            "countryCode": "6252001",
            "ttTypeCode": "10a1a0",
            "typeCode": "",
            "ttTypeNameTiny": "Other Homestay",
            "ttTypeNameMedium": "Homestay",
            "ttTypeNameSuper": "Hotels and Lodging"
          },
          "BAInfo": "",
          "contents": [
            {
              "desc": "#airatafridi40 #viralvide #tiktok #like #ka #plzunfrezemyaccount #please #foryou #ka #like #ka #❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ @🦋⃟𝓐𝓲𝓻𝓪𝓽 𝓐𝓯𝓻𝓲𝓭𝓲🕊️ ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 0,
                  "end": 14,
                  "hashtagName": "airatafridi40",
                  "hashtagId": "7153997932873744411",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 15,
                  "end": 25,
                  "hashtagName": "viralvide",
                  "hashtagId": "50244548",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 26,
                  "end": 33,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 34,
                  "end": 39,
                  "hashtagName": "like",
                  "hashtagId": "5222",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 40,
                  "end": 43,
                  "hashtagName": "ka",
                  "hashtagId": "85718",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 44,
                  "end": 64,
                  "hashtagName": "plzunfrezemyaccount",
                  "hashtagId": "1645454307414018",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 65,
                  "end": 72,
                  "hashtagName": "please",
                  "hashtagId": "8642",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 73,
                  "end": 80,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 81,
                  "end": 84,
                  "hashtagName": "ka",
                  "hashtagId": "85718",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 85,
                  "end": 90,
                  "hashtagName": "like",
                  "hashtagId": "5222",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 91,
                  "end": 94,
                  "hashtagName": "ka",
                  "hashtagId": "85718",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 95,
                  "end": 126,
                  "hashtagName": "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
                  "hashtagId": "1592484518106118",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "7126185199456587035",
                  "start": 127,
                  "end": 157,
                  "hashtagName": "",
                  "type": 5,
                  "userId": "7098670851373466650",
                  "isCommerce": false,
                  "userUniqueId": "airatafridi40",
                  "secUid": "MS4wLjABAAAAIDnIL8mjoeAZLdbw261LDKHNxwCB5bfwLPAEiccIdLu5G_-T-AOxS_UqlqvlEHPw",
                  "subType": 6
                }
              ]
            }
          ],
          "diversificationId": 10075,
          "collected": false,
          "anchors": [
            {
              "id": "0",
              "type": 54,
              "keyword": "CapCut · Try this template",
              "icon": {
                "urlList": [
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=RieMpE4v5WFsE9WJVzuLIBzu7QM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=v%2BRFcZt0mi7zm1cDKI5wjZMX0jQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/capcut_logo_64px_bk.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=cfsZGGmevlQQ5xQG4JhDcqwic%2BQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ]
              },
              "schema": "https://www.capcut.com/template-detail/none?channel=capcutpc_ttweb_anchor_template1&current_page=capcutpc_ttweb_anchor_template1&download_channel=capcutpc_ttweb_anchor_template1&enter_from=capcutpc_ttweb_anchor_template1&from_page=capcutpc_ttweb_anchor_template1&type=template&use_new_ui=0",
              "logExtra": "{\"anchor_id\":0,\"anchor_name\":\"CapCut · Try this template\",\"anchor_name_type\":\"template_0\",\"anchor_title_detail\":\"None\",\"anchor_type\":\"TT_CAPCUT\",\"capability_key\":\"none\",\"cc_template_pay_type\":0,\"ccep_vip\":0,\"if_device_language\":\"none\",\"if_race_trigger\":0,\"is_two_line\":0,\"maker_source\":\"\",\"template_id\":\"none\",\"tutorial_id\":\"none\",\"viamaker_anchor_capability_key_weight\":1,\"viamaker_anchor_style_idx\":-1,\"viamaker_anchor_style_source\":3,\"video_source\":1,\"video_type_id\":2}",
              "description": "CapCut · Video Editor",
              "thumbnail": {
                "urlList": [
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=NlRbOslMxDiJJj6o9Grok4PoIlc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p19-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=jgegNk%2BQWaScc8c12djeBeLJ%2BL0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
                  "https://p16-common-sign.tiktokcdn-us.com/tiktok-obj/64x_Capcut3x.png~tplv-tiktokx-origin.jpeg?dr=9627&x-expires=1770307200&x-signature=ZZwA%2FTehXpsriEOJzhvjj1qiIr0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
                ],
                "width": 64,
                "height": 64
              },
              "extraInfo": {
                "subtype": ""
              }
            }
          ],
          "item_control": {
            "can_share": true,
            "can_comment": true,
            "can_music_redirect": true,
            "can_creator_redirect": true,
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "35",
            "shareCount": "0",
            "commentCount": "3",
            "playCount": "130",
            "collectCount": "0",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 120,
          "textLanguage": "un",
          "textTranslatable": false,
          "authorStatsV2": {
            "followingCount": "5864",
            "followerCount": "6793",
            "heartCount": "137500",
            "videoCount": "830",
            "diggCount": "116200",
            "heart": "137500",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603305642186525973"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7603296508775075103",
          "desc": "Hy hy ❤🥺💔🥹🙌🤲#foodtiktok #fypシ #viral #tiktok #trending #fyp ",
          "createTime": 1770280497,
          "video": {
            "id": "7603296508775075103",
            "height": 1280,
            "width": 720,
            "duration": 23,
            "ratio": "720p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owf0MtImCrBwgE9iAViqIEGji3NkIAA0iYBqEA~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=1brP2pIyuyi%2FjOVouXoNXMViMjw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oIVC1i3BAYzAgqtifY0IiBA0IEEkjwIFiINq0q~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=1mlzzBuJgfugETfAvA1BlDW54qQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oUmIAi0CIqgI0AVfE43wyij1kY4BCAiIqEPiCt~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=VRXhyIkWXpALj28fovDRHBTsZS0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/ooE0mLqgEAu0QIvqAIi3wVqBIfkYtjiiiCACEE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3244&bt=1622&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OGk5ODQ1OzxnZDhpNmVlOUBpanI1PG45cjc4OTMzaTczNEBhL2FfYWBeNS8xM182NC1fYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d0723407e4074f91ec34d1fad6e4b4d9&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c004-tx2/oo5ogqcSjGAHrSQGeKLQIjTA8I1AjCeCRCemII/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2916&bt=1458&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=PGY2NzZkNDxpM2Y2ZzQ0aUBpanI1PG45cjc4OTMzaTczNEAvYmFhXjFhX14xNmAuNjBfYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=34b514bcbc0db621364abb4c6d26a98b&tk=tt_chain_token",
            "bitrate": 1661646,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "720p",
            "bitrateInfo": [
              {
                "GearName": "normal_720_0",
                "Bitrate": 1661646,
                "QualityType": 10,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625a4fog65k2942qorg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/ooE0mLqgEAu0QIvqAIi3wVqBIfkYtjiiiCACEE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3244&bt=1622&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OGk5ODQ1OzxnZDhpNmVlOUBpanI1PG45cjc4OTMzaTczNEBhL2FfYWBeNS8xM182NC1fYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d0723407e4074f91ec34d1fad6e4b4d9&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/ooE0mLqgEAu0QIvqAIi3wVqBIfkYtjiiiCACEE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3244&bt=1622&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OGk5ODQ1OzxnZDhpNmVlOUBpanI1PG45cjc4OTMzaTczNEBhL2FfYWBeNS8xM182NC1fYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=d0723407e4074f91ec34d1fad6e4b4d9&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=b60b7b93bf654a2d89a8c2d1b5d62fd5&is_play_url=1&item_id=7603296508775075103&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmFiOTczYzk3YjRlOGVjMDY2NjNjNjEyNTFlZjU2NDgz&tk=tt_chain_token&video_id=v15044gf0000d625a4fog65k2942qorg"
                  ],
                  "DataSize": 4948382,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v15044gf0000d625a4fog65k2942qorg_h264_720p_1661646",
                  "FileHash": "0509ef974e2e33b48bcb22323175fc49",
                  "FileCs": "c:0-13156-99e2"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 91.471, \"v960\": 93.07, \"v864\": 96.462, \"v720\": 97.288}, \"ori\": {\"v1080\": 91.471, \"v960\": 93.07, \"v864\": 96.462, \"v720\": 97.288}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 906807,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625a4fog65k2942qorg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c001-tx2/oA3I0wi2gCETQEqyCkqIV1AIBfAGiiQYtAk0iE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1770&bt=885&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=aDQ7ZWc8ZTVmOTs0aDszOEBpanI1PG45cjc4OTMzaTczNEAzLTIxLTY1NV4xNDYtXjYxYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=85d395e991b54f030f093fa660662a05&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c001-tx2/oA3I0wi2gCETQEqyCkqIV1AIBfAGiiQYtAk0iE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1770&bt=885&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=aDQ7ZWc8ZTVmOTs0aDszOEBpanI1PG45cjc4OTMzaTczNEAzLTIxLTY1NV4xNDYtXjYxYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=85d395e991b54f030f093fa660662a05&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=4590a80e917846ac828b990d4b58016e&is_play_url=1&item_id=7603296508775075103&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjZjOGM5ZmVjYmY3MjA1MmZmNjI0YzY2MDdiOWJhYmJm&tk=tt_chain_token&video_id=v15044gf0000d625a4fog65k2942qorg"
                  ],
                  "DataSize": 2700472,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v15044gf0000d625a4fog65k2942qorg_bytevc1_720p_906807",
                  "FileHash": "ca02841595ce0783317c07325e6c7ca7",
                  "FileCs": "c:0-14175-da64"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 89.352, \"v960\": 93.006, \"v864\": 93.352, \"v720\": 95.062}, \"ori\": {\"v1080\": 81.385, \"v960\": 83.583, \"v864\": 86.036, \"v720\": 89.424}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 715289,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625a4fog65k2942qorg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c004-tx2/o8KBiAgEiC0CYCqEIQCxif3IqVwv0EAkRitIAm/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1396&bt=698&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=ZztnZ2c7aDdpOjVmOWdmZ0BpanI1PG45cjc4OTMzaTczNEA1YjFeNS0yNjIxYDM1YGMxYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6709824c609ab0e238b9142d6b956cd3&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c004-tx2/o8KBiAgEiC0CYCqEIQCxif3IqVwv0EAkRitIAm/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1396&bt=698&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=ZztnZ2c7aDdpOjVmOWdmZ0BpanI1PG45cjc4OTMzaTczNEA1YjFeNS0yNjIxYDM1YGMxYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6709824c609ab0e238b9142d6b956cd3&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=4dfccd866cc2475f945e088dad4de88d&is_play_url=1&item_id=7603296508775075103&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmIxOGM2OTUyOWNkNzFhNDUzN2E3NmZiYmM4NDc2NGE5&tk=tt_chain_token&video_id=v15044gf0000d625a4fog65k2942qorg"
                  ],
                  "DataSize": 2130131,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625a4fog65k2942qorg_bytevc1_540p_715289",
                  "FileHash": "d7e061e303ff574be4a5717636352b55",
                  "FileCs": "c:0-14175-82ee"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 87.699, \"v960\": 89.399, \"v864\": 91.081, \"v720\": 93.695}, \"ori\": {\"v1080\": 75.993, \"v960\": 79.207, \"v864\": 82.678, \"v720\": 86.334}}}"
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 527619,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v15044gf0000d625a4fog65k2942qorg",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c001-tx2/ocTfqeISjCjgKALjQI1RSG5AFCICAie0UorGIc/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1030&bt=515&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=NTszZjo5Zjw5aTgzMzs6O0BpanI1PG45cjc4OTMzaTczNEBeMjUyLjUyX14xLTFhXl4wYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6ed7461e354d339da2a48732225857b1&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c001-tx2/ocTfqeISjCjgKALjQI1RSG5AFCICAie0UorGIc/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1030&bt=515&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=NTszZjo5Zjw5aTgzMzs6O0BpanI1PG45cjc4OTMzaTczNEBeMjUyLjUyX14xLTFhXl4wYSNvbjEvMmRjXi9hLS1kMTJzcw%3D%3D&btag=e000b8000&expire=1770461306&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6ed7461e354d339da2a48732225857b1&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=38a7a8d040054fa6b95c86175c8058a2&is_play_url=1&item_id=7603296508775075103&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjI5NTBmMzAyOWU3ZWJhYjQ1YWMwZGExNWZlOTU1NzUw&tk=tt_chain_token&video_id=v15044gf0000d625a4fog65k2942qorg"
                  ],
                  "DataSize": 1571251,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d625a4fog65k2942qorg_h264_540p_527619",
                  "FileHash": "c3a22c61aac390d69d5cf80955e06db2",
                  "FileCs": "c:0-13917-3e50"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 80.236, \"v960\": 82.705, \"v864\": 84.857, \"v720\": 88.17}, \"ori\": {\"v1080\": 66.891, \"v960\": 72.814, \"v864\": 76.943, \"v720\": 81.971}}}"
              }
            ],
            "zoomCover": {
              "240": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owf0MtImCrBwgE9iAViqIEGji3NkIAA0iYBqEA~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=7mj%2BQhw7PDIcprrPIpxn1%2FXc9iI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owf0MtImCrBwgE9iAViqIEGji3NkIAA0iYBqEA~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=nQZ%2B4v1Vepf9zDNMC90cQtUe23s%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owf0MtImCrBwgE9iAViqIEGji3NkIAA0iYBqEA~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=KaT8jYX9ScGSvmZ0IseslQyK1fk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owf0MtImCrBwgE9iAViqIEGji3NkIAA0iYBqEA~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=aJWWfi7uKuwBc7%2FIXI1QFQ%2BsNZA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -13.2,
              "Peak": 0.53088
            },
            "size": 4948382,
            "VQScore": "53.3",
            "claInfo": {
              "hasOriginalAudio": false,
              "enableAutoCaption": true,
              "noCaptionReason": 3
            },
            "videoID": "v15044gf0000d625a4fog65k2942qorg"
          },
          "author": {
            "id": "7569609883470496781",
            "uniqueId": "nimrajani005",
            "nickname": "nimrajani005",
            "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/99e44863c75a2d470d90cb609f1cd188~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ef3d53d8&x-expires=1770458400&x-signature=ziUFm6Y5ImzESlkfuNtFzKYpf3g%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/99e44863c75a2d470d90cb609f1cd188~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=75137515&x-expires=1770458400&x-signature=LyfAC%2BVRUGK8yvR1uv6Zeniu7%2Bs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/99e44863c75a2d470d90cb609f1cd188~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=eb189739&x-expires=1770458400&x-signature=%2F7X990dR9RKuuyOdhbtw%2FnX3qAw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "",
            "verified": false,
            "secUid": "MS4wLjABAAAAq2g5V7LmBuIn3c9Tx0PDGx2Zv5PxYrywV7ktGMWUyW6QLKRGY1_r6rlZUbqTyB7F",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7173266165077134106",
            "title": "original sound",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-v-27dcd7c799-tx/4bd1cb2462da4c56ba601ed36105d1b6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=252&bt=126&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=video_mp4&qs=13&rc=anMzaTQ6Zjc7aDMzZjU8M0BpanMzaTQ6Zjc7aDMzZjU8M0AtMG0vcjRnczNgLS1kMWNzYSMtMG0vcjRnczNgLS1kMWNzcw%3D%3D&btag=e00078000&expire=1770310106&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=8ddfa1a51a770577c5e65552bcad2eb2&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7e80b4b5d8b687b6e528c6ae281ad805~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=05413c6d&x-expires=1770458400&x-signature=0tAsZTdXdvdcH8GH1c%2BpFNDohAI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7e80b4b5d8b687b6e528c6ae281ad805~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=4006d1d3&x-expires=1770458400&x-signature=J1evXd6OYHt7uEa3VSseaBvMkfw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7e80b4b5d8b687b6e528c6ae281ad805~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=323ebdf2&x-expires=1770458400&x-signature=1vX%2BleGNM5vuOJ871Lm1CqjwmDY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "𝐌𝐔𝐒𝐇𝐓𝐀𝐐 𝐓𝐘𝐏𝐈𝐒𝐓",
            "original": true,
            "private": false,
            "duration": 24,
            "isCopyrighted": false,
            "tt2dsp": {
              "tt_to_dsp_song_infos": [
                {
                  "platform": 3,
                  "song_id": "6V3bseL935CKrFx1iaMVl5",
                  "meta_song_id": "6772977687804774401"
                }
              ]
            }
          },
          "challenges": [
            {
              "id": "1599163184670722",
              "title": "foodtiktok",
              "desc": "Your one-stop shop for perfect recipes, delicious desserts, and food inspiration.",
              "profileThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/0ed99567ad854c6a37960d0c97f7b79e~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=AKICfXA6EXN1nHeNM%2Bp8WMpgEkE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/0ed99567ad854c6a37960d0c97f7b79e~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=AKICfXA6EXN1nHeNM%2Bp8WMpgEkE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/0ed99567ad854c6a37960d0c97f7b79e~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=AKICfXA6EXN1nHeNM%2Bp8WMpgEkE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "1637342470396934",
              "title": "fypシ",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "20884",
              "title": "viral",
              "desc": "¡descubre las canciones en tendencia! 🔥➡️ https://bit.ly/TendenciasTikTok_LATAM",
              "profileThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/4321dd2ed3acc737461c4254f0c55add.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=QFJiDbv12C7bKJQs4Cu2HpJpwDo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/4321dd2ed3acc737461c4254f0c55add.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=QFJiDbv12C7bKJQs4Cu2HpJpwDo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/4321dd2ed3acc737461c4254f0c55add.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=QFJiDbv12C7bKJQs4Cu2HpJpwDo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/8e4d8102460a60717c89acc2d6367a16.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=qAIihu4QNTKSPfYAADHlRue7IuA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/8e4d8102460a60717c89acc2d6367a16.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=qAIihu4QNTKSPfYAADHlRue7IuA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/8e4d8102460a60717c89acc2d6367a16.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=qAIihu4QNTKSPfYAADHlRue7IuA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5"
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "20105",
              "title": "trending",
              "desc": "Discover the top viral trends, sounds and effects of the week! 🔥",
              "profileThumb": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/f752929e77dfeacc86efb0dac0d6e39e.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=Icz9gj2v6ji%2BHmdy%2FJl4CtcenZQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/f752929e77dfeacc86efb0dac0d6e39e.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=Icz9gj2v6ji%2BHmdy%2FJl4CtcenZQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/f752929e77dfeacc86efb0dac0d6e39e.png~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=Icz9gj2v6ji%2BHmdy%2FJl4CtcenZQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "229207",
              "title": "fyp",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 82,
            "shareCount": 0,
            "commentCount": 9,
            "playCount": 735,
            "collectCount": 3
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 17,
              "end": 28,
              "hashtagName": "foodtiktok",
              "hashtagId": "1599163184670722",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 29,
              "end": 34,
              "hashtagName": "fypシ",
              "hashtagId": "1637342470396934",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 35,
              "end": 41,
              "hashtagName": "viral",
              "hashtagId": "20884",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 42,
              "end": 49,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 50,
              "end": 59,
              "hashtagName": "trending",
              "hashtagId": "20105",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 60,
              "end": 64,
              "hashtagName": "fyp",
              "hashtagId": "229207",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 0,
            "followerCount": 2149,
            "heartCount": 30200,
            "videoCount": 24,
            "diggCount": 54,
            "heart": 30200,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "stickersOnItem": [
            {
              "stickerType": 4,
              "stickerText": [
                "❤️‍🩹🥹"
              ]
            }
          ],
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "Hy hy ❤🥺💔🥹🙌🤲#foodtiktok #fypシ #viral #tiktok #trending #fyp ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 17,
                  "end": 28,
                  "hashtagName": "foodtiktok",
                  "hashtagId": "1599163184670722",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 29,
                  "end": 34,
                  "hashtagName": "fypシ",
                  "hashtagId": "1637342470396934",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 35,
                  "end": 41,
                  "hashtagName": "viral",
                  "hashtagId": "20884",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 42,
                  "end": 49,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 50,
                  "end": 59,
                  "hashtagName": "trending",
                  "hashtagId": "20105",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 60,
                  "end": 64,
                  "hashtagName": "fyp",
                  "hashtagId": "229207",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10066,
          "collected": false,
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "82",
            "shareCount": "0",
            "commentCount": "9",
            "playCount": "735",
            "collectCount": "3",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 120,
          "textLanguage": "en",
          "textTranslatable": true,
          "authorStatsV2": {
            "followingCount": "0",
            "followerCount": "2149",
            "heartCount": "30200",
            "videoCount": "24",
            "diggCount": "54",
            "heart": "30200",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7603296508775075103"
        }
      },
      {
        "type": 1,
        "item": {
          "id": "7541066433279610143",
          "desc": "#foryou #tiktok #movie ",
          "createTime": 1755791366,
          "video": {
            "id": "7541066433279610143",
            "height": 1024,
            "width": 576,
            "duration": 310,
            "ratio": "540p",
            "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owAOjRiOT9HIIgqfIAQw3f5ejS3AjLIGCmqCKn~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=vhyNV3CnPlsUAfXn9sgk%2BUkwGlo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/o8EDEozBnT8EEyFRPbIBxnAVpQAflxfnBOpIAD~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=QIC%2B7TU6S2m4Ptr8CTfxXOdoe44%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "dynamicCover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/oEF8IVlnxDAAQDgmgzFfERoBqETAbB6pIpfGnE~tplv-tiktokx-origin.image?dr=9636&x-expires=1770458400&x-signature=V0yWq%2Fs%2BmGI0%2FOb%2Bu2Ecq622Hkc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
            "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c002-tx2/oYnTKHDxIFA8EUBplQEVRQEuEfz8fRpnoDG2Ab/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2442&bt=1221&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OWRpZmY8Z2g8ODU0aTllaEBpanU4ank5cmZtNTMzaTczNEAyNmEwLmEyNjMxYTQzYmJfYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=178abe70da05ccb2c9a2614519c4d214&tk=tt_chain_token",
            "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c002-tx2/o4EvEVRfzEbIpWERxQponQF8lpmDDuAEATfnnB/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2514&bt=1257&cs=0&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=ZTk4ZDpkZDdmZWdoNGgzOUBpanU4ank5cmZtNTMzaTczNEA2LTUtLjBhNWMxNS5fYGFgYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=e38b7fd06f382c003459bd05527b13a9&tk=tt_chain_token",
            "bitrate": 1250484,
            "encodedType": "normal",
            "format": "mp4",
            "videoQuality": "normal",
            "encodeUserTag": "",
            "codecType": "h264",
            "definition": "540p",
            "bitrateInfo": [
              {
                "GearName": "normal_540_0",
                "Bitrate": 1250484,
                "QualityType": 20,
                "PlayAddr": {
                  "Uri": "v15044gf0000d2jjucfog65vjgt56rig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c002-tx2/oYnTKHDxIFA8EUBplQEVRQEuEfz8fRpnoDG2Ab/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2442&bt=1221&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OWRpZmY8Z2g8ODU0aTllaEBpanU4ank5cmZtNTMzaTczNEAyNmEwLmEyNjMxYTQzYmJfYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=178abe70da05ccb2c9a2614519c4d214&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c002-tx2/oYnTKHDxIFA8EUBplQEVRQEuEfz8fRpnoDG2Ab/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2442&bt=1221&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=0&rc=OWRpZmY8Z2g8ODU0aTllaEBpanU4ank5cmZtNTMzaTczNEAyNmEwLmEyNjMxYTQzYmJfYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=178abe70da05ccb2c9a2614519c4d214&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=beebe66f71d245699e5dd91c3cdf9a56&is_play_url=1&item_id=7541066433279610143&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLmU1MDgwMWNhNTJjNDBkNmY1YmZjOTUxODIzOGMwYzA0&tk=tt_chain_token&video_id=v15044gf0000d2jjucfog65vjgt56rig"
                  ],
                  "DataSize": 48526608,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d2jjucfog65vjgt56rig_h264_540p_1250484",
                  "FileHash": "25fce2e047f415315641ee3d1cc92858",
                  "FileCs": "c:0-253269-c2f9"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 92.316, \"v960\": 94.933, \"v864\": 95.968, \"v720\": 97.452}, \"ori\": {\"v1080\": 80.888, \"v960\": 84.91, \"v864\": 87.808, \"v720\": 91.232}}}"
              },
              {
                "GearName": "adapt_lowest_1080_1",
                "Bitrate": 1100892,
                "QualityType": 2,
                "PlayAddr": {
                  "Uri": "v15044gf0000d2jjucfog65vjgt56rig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/o8F8womopAgTEbxQEfDziRRBVBnfEXpvEnlAID/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2150&bt=1075&cs=2&ds=4&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=15&rc=NDg4NjxpOGk6NmVnM2RmZ0BpanU4ank5cmZtNTMzaTczNEBjLV4zNDEwXmExYF8zYzIxYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=ba4261fc3291209516b5bb0376557c84&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/o8F8womopAgTEbxQEfDziRRBVBnfEXpvEnlAID/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2150&bt=1075&cs=2&ds=4&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=15&rc=NDg4NjxpOGk6NmVnM2RmZ0BpanU4ank5cmZtNTMzaTczNEBjLV4zNDEwXmExYF8zYzIxYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=ba4261fc3291209516b5bb0376557c84&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=4d5cfa60bdcb43d7af354f7963a505f1&is_play_url=1&item_id=7541066433279610143&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjMxOWUwMmE5ODM1ZWQ2ZjVhMGJhODZmYjZmZTIwMzRk&tk=tt_chain_token&video_id=v15044gf0000d2jjucfog65vjgt56rig"
                  ],
                  "DataSize": 42721524,
                  "Width": 1080,
                  "Height": 1920,
                  "UrlKey": "v15044gf0000d2jjucfog65vjgt56rig_bytevc1_1080p_1100892",
                  "FileHash": "bd1f642405722b6a8feae77d82cb1c1a",
                  "FileCs": "c:0-256886-ec9e"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 98.865, \"v960\": 99.104, \"v864\": 99.323, \"v720\": 99.534}, \"ori\": {\"v1080\": 93.964, \"v960\": 94.776, \"v864\": 95.452, \"v720\": 96.386}}}"
              },
              {
                "GearName": "adapt_lower_720_1",
                "Bitrate": 733565,
                "QualityType": 14,
                "PlayAddr": {
                  "Uri": "v15044gf0000d2jjucfog65vjgt56rig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oArnjR2OTeHIIRD4IAIS3f5ejSQAyLQGgmqCKn/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1432&bt=716&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=ODM6ZTw2OmQ6NTNmM2QzNEBpanU4ank5cmZtNTMzaTczNEBeYTAvNDA1NjUxLTQzXjIvYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6e18dad0634d10778f56556773e61167&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/oArnjR2OTeHIIRD4IAIS3f5ejSQAyLQGgmqCKn/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1432&bt=716&cs=2&ds=3&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=14&rc=ODM6ZTw2OmQ6NTNmM2QzNEBpanU4ank5cmZtNTMzaTczNEBeYTAvNDA1NjUxLTQzXjIvYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=6e18dad0634d10778f56556773e61167&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=2150aa607c0042879a8733792b37d0a5&is_play_url=1&item_id=7541066433279610143&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjZhZTAxMTkwMDFlMzljOGZlNzNiNTgwZWJjZjI4MzBi&tk=tt_chain_token&video_id=v15044gf0000d2jjucfog65vjgt56rig"
                  ],
                  "DataSize": 28466941,
                  "Width": 720,
                  "Height": 1280,
                  "UrlKey": "v15044gf0000d2jjucfog65vjgt56rig_bytevc1_720p_733565",
                  "FileHash": "168fce8bc874d4623fee81742b85931f",
                  "FileCs": "c:0-256887-e73b"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 94.804, \"v960\": 96.575, \"v864\": 97.31, \"v720\": 98.531}, \"ori\": {\"v1080\": 85.412, \"v960\": 88.501, \"v864\": 90.236, \"v720\": 93.701}}}"
              },
              {
                "GearName": "adapt_540_1",
                "Bitrate": 618565,
                "QualityType": 28,
                "PlayAddr": {
                  "Uri": "v15044gf0000d2jjucfog65vjgt56rig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ooChAi3ThLNtOIngQRIGffeKIyDIA5SHIqOjmj/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1208&bt=604&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=Z2ZoOGVoaDg0PDw5MzpnOUBpanU4ank5cmZtNTMzaTczNEA1Xy82MTUzNTIxLy1eL2IxYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9075f859db165066591e0dc71bfbe3a7&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-ve-0068c003-tx2/ooChAi3ThLNtOIngQRIGffeKIyDIA5SHIqOjmj/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1208&bt=604&cs=2&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=11&rc=Z2ZoOGVoaDg0PDw5MzpnOUBpanU4ank5cmZtNTMzaTczNEA1Xy82MTUzNTIxLy1eL2IxYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9075f859db165066591e0dc71bfbe3a7&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=46ed27a006294951856e8e4b952ebc8d&is_play_url=1&item_id=7541066433279610143&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjU4NzQ2YzliZGVjYjM3MmQ0NTcyM2ZjZDE3ZDUyZjJl&tk=tt_chain_token&video_id=v15044gf0000d2jjucfog65vjgt56rig"
                  ],
                  "DataSize": 24004215,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d2jjucfog65vjgt56rig_bytevc1_540p_618565",
                  "FileHash": "c00451a564bec2240f4f595ef480d54e",
                  "FileCs": "c:0-256887-e653"
                },
                "CodecType": "h265_hvc1",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 91.564, \"v960\": 94.148, \"v864\": 95.6, \"v720\": 97.281}, \"ori\": {\"v1080\": 80.576, \"v960\": 84.078, \"v864\": 86.458, \"v720\": 90.128}}}"
              },
              {
                "GearName": "lowest_540_0",
                "Bitrate": 524622,
                "QualityType": 25,
                "PlayAddr": {
                  "Uri": "v15044gf0000d2jjucfog65vjgt56rig",
                  "UrlList": [
                    "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/okORep5SmA1fgj23AQLKTgqGjeH3mMnIIICNOI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1024&bt=512&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=OWk6Z2k4NmU0OzZlOzMzaUBpanU4ank5cmZtNTMzaTczNEBeMjJeMjYyNTIxMWNfMjUtYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9c98986e4719a101e4b5499e7624f26e&tk=tt_chain_token",
                    "https://v19-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-pve-0068-tx2/okORep5SmA1fgj23AQLKTgqGjeH3mMnIIICNOI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1024&bt=512&cs=0&ds=6&ft=aEeq8qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=5&rc=OWk6Z2k4NmU0OzZlOzMzaUBpanU4ank5cmZtNTMzaTczNEBeMjJeMjYyNTIxMWNfMjUtYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&btag=e000a0000&expire=1770461593&l=20260205104802B66526ADF1C094052237&ply_type=2&policy=2&signature=9c98986e4719a101e4b5499e7624f26e&tk=tt_chain_token",
                    "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=0f8050b8fb4348518b53955fad575fa6&is_play_url=1&item_id=7541066433279610143&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjlmYTQzMmExYmU2NjM2MjI3NTY4YWE0MTlmMjcwYzk4&tk=tt_chain_token&video_id=v15044gf0000d2jjucfog65vjgt56rig"
                  ],
                  "DataSize": 20358627,
                  "Width": 576,
                  "Height": 1024,
                  "UrlKey": "v15044gf0000d2jjucfog65vjgt56rig_h264_540p_524622",
                  "FileHash": "43260a45583fb1482812e7c9913755c7",
                  "FileCs": "c:0-253281-76a7"
                },
                "CodecType": "h264",
                "MVMAF": "{\"v2.0\": {\"srv1\": {\"v1080\": 77.877, \"v960\": 81.389, \"v864\": 82.121, \"v720\": 87.041}, \"ori\": {\"v1080\": 68.398, \"v960\": 73.136, \"v864\": 74.788, \"v720\": 78.963}}}"
              }
            ],
            "subtitleInfos": [
              {
                "LanguageID": "34",
                "LanguageCodeName": "ara-SA",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/4b0f9bd222fcd473bd78f2b0fe91114b/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/8a9aef4a5d0744da8e4b09a6d71ca0d0/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14370
              },
              {
                "LanguageID": "34",
                "LanguageCodeName": "ara-SA",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/0cd99f35a8d2539addd79f0b37e5e98e/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/6752c13155574f32a3c5a1c7237d7fdb/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 15379
              },
              {
                "LanguageID": "21",
                "LanguageCodeName": "ell-GR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/40937753ea057d592d48db7b4207a24e/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/5135045bb52b4b82afca708efefc1cba/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 19898
              },
              {
                "LanguageID": "19",
                "LanguageCodeName": "fin-FI",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/82007122805eeeff4a65d926ef604a64/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/2ae7e9fec9114802ac97d616ef0bf5c4/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13549
              },
              {
                "LanguageID": "51",
                "LanguageCodeName": "uzb-UZ",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/625502991caa3a583140c86c5aa390ff/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/4b44a16f71d34e1dbf0e4c66b3b78f8c/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13119
              },
              {
                "LanguageID": "26",
                "LanguageCodeName": "ita-IT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3ae0ce475945fa1ea9572fca017c9e00/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/b0a1e14f78554069a9ff4a811c62a97e/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14072
              },
              {
                "LanguageID": "26",
                "LanguageCodeName": "ita-IT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/65f9c3793bbe6dec17266a72072e2101/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/b4a4f07aa21242079cb315158f25cede/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 12273
              },
              {
                "LanguageID": "46",
                "LanguageCodeName": "est-EE",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/fe3f74a800a686c9206a6b1b2f9a6d7a/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/f768ff9b9fd2426a99097546a0d88a9d/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13235
              },
              {
                "LanguageID": "8",
                "LanguageCodeName": "por-PT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/ec8b409d5f27ef66fb9fca82f7038151/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/69894cce2ed64141bcaab6a8fea39fda/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13728
              },
              {
                "LanguageID": "8",
                "LanguageCodeName": "por-PT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/2e01deb4a4caacad50e0cdd009cacb7f/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/b9002157e1534e3ebee5c760ce0d2cf8/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 12553
              },
              {
                "LanguageID": "2",
                "LanguageCodeName": "eng-US",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/c07639558aba3fb8c009ae15c513de33/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/140803335da340b9bee1dc87fb2d321e/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "1:big_caption",
                "Source": "ASR",
                "Size": 12110
              },
              {
                "LanguageID": "38",
                "LanguageCodeName": "heb-IL",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/6a6adf6c1d08a3b177196e36b1132aeb/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/1d48ea0be4d445b689db3c3a1fc4f6e9/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 15156
              },
              {
                "LanguageID": "20",
                "LanguageCodeName": "deu-DE",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/803a6ff8caa588e697400389c352f807/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/cac6a5253a9d49a6912d2226981f265c/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 15166
              },
              {
                "LanguageID": "20",
                "LanguageCodeName": "deu-DE",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/40ecf6cefc2c283eab68652e206e793f/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/3bfbc6c6bbac4085a8a6acb16cb0dcbb/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 12923
              },
              {
                "LanguageID": "22",
                "LanguageCodeName": "hun-HU",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/38af9c09bf6f317ceae23a2dc553fc8d/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/21cbaf9f37e54415bd02fa1af41754cc/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13952
              },
              {
                "LanguageID": "4",
                "LanguageCodeName": "kor-KR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/ccbff8b7d95293fa64c62d349522dcce/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/d3a8f959d73e421a83d6c4a47c3b3771/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 15369
              },
              {
                "LanguageID": "4",
                "LanguageCodeName": "kor-KR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/a140633b2dc328f6c2ab64a5e0455b55/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/53579e548cd2437993c82878bd2289c3/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 13197
              },
              {
                "LanguageID": "18",
                "LanguageCodeName": "nld-NL",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3a0a6d7f1ee1d8f3af0841802c64771b/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/695e4a0285ed4f6ca46b4cb614756f9f/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13284
              },
              {
                "LanguageID": "16",
                "LanguageCodeName": "dan-DK",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/d1974910a80c5f542ccd0f7dc109ebef/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/f0d67c1c776f484085dd998d8d04829e/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13493
              },
              {
                "LanguageID": "48",
                "LanguageCodeName": "slk-SK",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/ced059a300815b28b030e4a63165d016/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/32aa9824e977446e96a46b1dc52e9eac/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13859
              },
              {
                "LanguageID": "33",
                "LanguageCodeName": "urd-PK",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/8e9a7905372972303c18afe4780c0e46/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/305322618b594a8daf17c548dcb7eb5e/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 17139
              },
              {
                "LanguageID": "40",
                "LanguageCodeName": "ron-RO",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/a9e5386d53b9db8aa30cfccd0fffa6e1/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/fdf5141bce114d8aa7c15903e96e09d8/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14045
              },
              {
                "LanguageID": "32",
                "LanguageCodeName": "ukr-UA",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/a1b73f4c0e7c9174ea66f260b94867f7/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/3bdffbd4c0954b0f8f2a2bb3c9a1f5c0/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 19089
              },
              {
                "LanguageID": "31",
                "LanguageCodeName": "tur-TR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/04e284c4c5d816cdacf9fb22fd0456da/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/f7ec11c5cd9f4edf8cb245325b36995a/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13150
              },
              {
                "LanguageID": "31",
                "LanguageCodeName": "tur-TR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/8ba5a479ed06b5f953076b0c4e1259f3/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/eda982df2bfa4eba865af06f8d5ca4cf/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 12303
              },
              {
                "LanguageID": "44",
                "LanguageCodeName": "khm-KH",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3214dab6445a52fef58c533a68e0c4f7/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/73f1038a1d3244c78a7b5270c5944f38/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 24777
              },
              {
                "LanguageID": "59",
                "LanguageCodeName": "aze-AZ",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3d791f507a9b6982579e31d870596857/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/054000771ead46bd9d724a84ccacfa52/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 12475
              },
              {
                "LanguageID": "9",
                "LanguageCodeName": "spa-ES",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/e8cd1913a2603bafee9256fb369c16ba/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/b648ab0a722c49d28ec1fb73f66edcca/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13663
              },
              {
                "LanguageID": "9",
                "LanguageCodeName": "spa-ES",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/51b64d17149d17f89cf9633550d7d925/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/3cda3c613d674084968bcdb9b1be11df/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 12806
              },
              {
                "LanguageID": "39",
                "LanguageCodeName": "jav-ID",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/326419a399027ff9e2632f2a9e757331/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/8d488f7b37bf4c86944160adce2439d0/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 12689
              },
              {
                "LanguageID": "29",
                "LanguageCodeName": "swe-SE",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/8c398a2439f44afe8e9682d094ba4186/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/92b78272b18f49fcbd5ed7399096b4e8/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 12921
              },
              {
                "LanguageID": "30",
                "LanguageCodeName": "tha-TH",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/5be6bbf8e5ee48e929ac819d2b6b6b63/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/a93492cf487546b596f6e3ba3fbae355/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 21904
              },
              {
                "LanguageID": "30",
                "LanguageCodeName": "tha-TH",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/97facad7a5229089f6a1c86e26d6c416/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/94e6f59d4b2b4560a2add4c9d3ad9d59/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 21121
              },
              {
                "LanguageID": "47",
                "LanguageCodeName": "lav-LV",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/c267fbdaa557ad29e609a204974840e4/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/e8f00f5e0f4941d99831872e8b0937a6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14678
              },
              {
                "LanguageID": "57",
                "LanguageCodeName": "slv-SI",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/47491ea983dcbd9d277a6a8e71071731/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/e5691bfd08dd41d39dceeee26f1d88d1/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13668
              },
              {
                "LanguageID": "36",
                "LanguageCodeName": "cmn-Hant-CN",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/d2dd2fbfbceb20fac395edf5b3acb22d/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/bbcca9ce45464fe9bc5ffb0956769225/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 11996
              },
              {
                "LanguageID": "53",
                "LanguageCodeName": "ceb-PH",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/5df20ee3c31c01f2e7130304d2d1bd3a/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/a3ea5d321fc54fad87dc8ce0261965ac/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14773
              },
              {
                "LanguageID": "1",
                "LanguageCodeName": "cmn-Hans-CN",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/68d47c103ff6202fa2612c8dc2996b0c/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/45ab8607716246e194b35301e4f5264a/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 11999
              },
              {
                "LanguageID": "1",
                "LanguageCodeName": "cmn-Hans-CN",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/f5af5a6843dd7522b1e7f338976ad50e/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/d572b8db8ad0450d94ca81fd5000934c/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 9780
              },
              {
                "LanguageID": "58",
                "LanguageCodeName": "swa-SW",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/efa376f6bf947d6d51105eb09c7ac9ab/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/100d37accd844b0c8d3de2f90458e0b5/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13105
              },
              {
                "LanguageID": "49",
                "LanguageCodeName": "lit-LT",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3df763910289e6843533004400c07642/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/2b2fb4aed1794cbaa4757cb663360ae8/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13620
              },
              {
                "LanguageID": "10",
                "LanguageCodeName": "vie-VN",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/21b0464ec1e2f27149e3dd1611c5931d/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/88df5010067f45d9b9eeb500e5963300/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 15521
              },
              {
                "LanguageID": "10",
                "LanguageCodeName": "vie-VN",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/ebcb3d6fc2a5bed9da4d937385f754a8/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/e88d7111ca734c6db1dd2db766987cdc/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 13326
              },
              {
                "LanguageID": "25",
                "LanguageCodeName": "isl-IS",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/79ffe31292a520bc5bd7176701c3fb8e/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/9cf0b7f2048c4cb78e00cc6d3fffa068/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13672
              },
              {
                "LanguageID": "6",
                "LanguageCodeName": "rus-RU",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/27035db90a4903effec9bf7a7bcd5ac2/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/2efd0404916b4ab987449a982abccf28/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 19502
              },
              {
                "LanguageID": "6",
                "LanguageCodeName": "rus-RU",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/aceee00733b63fb362c45b4b6725a49e/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/cf1713331ef74f169ba12f7dfcaabb8b/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 16762
              },
              {
                "LanguageID": "13",
                "LanguageCodeName": "bul-BG",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/25bc3ce361de54f9ee6b01980735c792/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/8c448325d0b445289a3b8b8c81c3d4dd/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 19446
              },
              {
                "LanguageID": "54",
                "LanguageCodeName": "alb-AL",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/293663665b54419e389d48198c9b7e76/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/40b40ea15d3045218339ef69da9d00b6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13700
              },
              {
                "LanguageID": "24",
                "LanguageCodeName": "gle-IE",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/068d7408e840ce219097101184788947/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/285f1ed9cc3143348894a92bdc41cc7b/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14551
              },
              {
                "LanguageID": "15",
                "LanguageCodeName": "ces-CZ",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/e4c9bef9ea70ee397374d643a358beda/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/5412970725c545a0bb68e1d0fafb3dc9/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13139
              },
              {
                "LanguageID": "3",
                "LanguageCodeName": "jpn-JP",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/d0cf16c1d6f1a4a62c3705816a580711/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/471082628e0b4434bc28ad1675ebf2e5/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 15919
              },
              {
                "LanguageID": "3",
                "LanguageCodeName": "jpn-JP",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/b838d112b7085d3d2dea307cf40647ed/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/f09cf660fe774242b243231bfdb532e3/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 13569
              },
              {
                "LanguageID": "52",
                "LanguageCodeName": "nob-NO",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/a88d5811baff4ef6b1c02eded533760a/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/26e6455e92094a0dafe55b9d1fc22a4a/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 12325
              },
              {
                "LanguageID": "55",
                "LanguageCodeName": "cat-ES",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/2f4d11a1cc621482db0a7a9cd15d2e87/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/e410b34c2c5247a3ad2781ac06fb4ec6/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13860
              },
              {
                "LanguageID": "28",
                "LanguageCodeName": "pol-PL",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/9a06dfe0f0dc618aaa8163c0b08ec87c/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/9a67ac21bcc64afcaf4955b7ea882dc3/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14304
              },
              {
                "LanguageID": "12",
                "LanguageCodeName": "ben-BD",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/9cb683dd745003563897d7bc6c606507/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/cc250279c91843bc87d710dbbc5940cb/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 23952
              },
              {
                "LanguageID": "23",
                "LanguageCodeName": "ind-ID",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/3b4d1912667e3a97f718b9fdfc98f8ed/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/393a5230b1a042588ae9e4bb1dca0538/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 13615
              },
              {
                "LanguageID": "23",
                "LanguageCodeName": "ind-ID",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/a69cbb1de1abfb6e9a2cc5672ac1c614/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/196548ecaf364735b8534be27e682c61/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 12409
              },
              {
                "LanguageID": "7",
                "LanguageCodeName": "fra-FR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/80572df798b8d33497476eb4c1c29607/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/781b1b403be94efaba5935d79088317a/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 14263
              },
              {
                "LanguageID": "7",
                "LanguageCodeName": "fra-FR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/d3b2c353989a7631d156b249b6d63aa3/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/29e8fd2272fd4fbcb69c369c8cc6f860/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4:agent_deepSeek",
                "Source": "MT",
                "Size": 13016
              },
              {
                "LanguageID": "17",
                "LanguageCodeName": "hrv-HR",
                "Url": "https://v16m-webapp.tiktokcdn-us.com/869f8da1f08f2bf4c62deb2cb9e7753f/69871999/video/tos/useast8/tos-useast8-v-0068-tx2/1f1375eda2d44a3ab9bd9e825f0985ef/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=10902&bt=5451&ds=4&ft=aEKq_qT0mIoPD126M_Fs3wUIynAbMeF~O5&mime_type=video_mp4&qs=13&rc=anU4ank5cmZtNTMzaTczNEBpanU4ank5cmZtNTMzaTczNEBmM3FnMmRjcmdhLS1kMTJzYSNmM3FnMmRjcmdhLS1kMTJzcw%3D%3D&l=20260205104802B66526ADF1C094052237&btag=e00060000",
                "UrlExpire": 1770461593,
                "Format": "webvtt",
                "Version": "4",
                "Source": "MT",
                "Size": 12837
              }
            ],
            "zoomCover": {
              "240": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owAOjRiOT9HIIgqfIAQw3f5ejS3AjLIGCmqCKn~tplv-photomode-zoomcover:240:240.jpeg?dr=9616&x-expires=1770458400&x-signature=X7lA8AYwBCamzB3KoxuIJAigR%2B0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "480": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owAOjRiOT9HIIgqfIAQw3f5ejS3AjLIGCmqCKn~tplv-photomode-zoomcover:480:480.jpeg?dr=9616&x-expires=1770458400&x-signature=8SZ70GPlMu8ZG7004ScILHzz2Is%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "720": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owAOjRiOT9HIIgqfIAQw3f5ejS3AjLIGCmqCKn~tplv-photomode-zoomcover:720:720.jpeg?dr=9616&x-expires=1770458400&x-signature=JkeNb88%2Bfy8hf3Y%2BvdTvrX6cMjM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1",
              "960": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/owAOjRiOT9HIIgqfIAQw3f5ejS3AjLIGCmqCKn~tplv-photomode-zoomcover:960:960.jpeg?dr=9616&x-expires=1770458400&x-signature=elr0ct0eXTtvXF05EMP2LThbc9Q%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5&ftpl=1"
            },
            "volumeInfo": {
              "Loudness": -18.7,
              "Peak": 0.53703
            },
            "size": 48526608,
            "VQScore": "67.05",
            "claInfo": {
              "hasOriginalAudio": true,
              "enableAutoCaption": true,
              "noCaptionReason": 1
            },
            "videoID": "v15044gf0000d2jjucfog65vjgt56rig"
          },
          "author": {
            "id": "7426607327631819819",
            "uniqueId": "zhouedits",
            "nickname": "ZHOU EDITS",
            "avatarThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0f67b106ebe5ebabd34bf65ec2c08305~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=84d01ac0&x-expires=1770458400&x-signature=5a48%2BB7V%2BiBfiPmhrF%2FhigVF5vs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0f67b106ebe5ebabd34bf65ec2c08305~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=c59b872c&x-expires=1770458400&x-signature=9R4yk29NOHhSR1xfj0WH2bd3MzI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0f67b106ebe5ebabd34bf65ec2c08305~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b6e32a3b&x-expires=1770458400&x-signature=7K9kifuvN8fR4ktACXdhdfxsqjE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "signature": "🇺🇸🇺🇸🇺🇸",
            "verified": false,
            "secUid": "MS4wLjABAAAA--C5zed9uCvNziLHEvIZgXyy_LhDjAo8GC6RRGfhSmPqWBgW6G7K4muQIKt4C5U4",
            "secret": false,
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "isADVirtual": false,
            "downloadSetting": 0,
            "isEmbedBanned": false
          },
          "music": {
            "id": "7541066413402835743",
            "title": "原聲",
            "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast8/tos-useast8-v-27dcd7-tx2/oERTFxTgIAoeClOoIhAO2IEjATLCHqeoeAXGAI/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GcAInInz7Thm4lYPXq8Zmo&mime_type=audio_mpeg&qs=13&rc=am5xdHY5cjduNTMzaTU8NEBpam5xdHY5cjduNTMzaTU8NEBzZmQ2MmQ0LWdhLS1kMTJzYSNzZmQ2MmQ0LWdhLS1kMTJzcw%3D%3D&btag=e00060000&expire=1770310392&l=20260205104802B66526ADF1C094052237&ply_type=3&policy=3&signature=8e4c9f67db51c0005de6d8ff78048976&tk=0",
            "coverThumb": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0f67b106ebe5ebabd34bf65ec2c08305~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=84d01ac0&x-expires=1770458400&x-signature=5a48%2BB7V%2BiBfiPmhrF%2FhigVF5vs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0f67b106ebe5ebabd34bf65ec2c08305~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=c59b872c&x-expires=1770458400&x-signature=9R4yk29NOHhSR1xfj0WH2bd3MzI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "coverLarge": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/0f67b106ebe5ebabd34bf65ec2c08305~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b6e32a3b&x-expires=1770458400&x-signature=7K9kifuvN8fR4ktACXdhdfxsqjE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "authorName": "ZHOU EDITS",
            "original": true,
            "private": false,
            "duration": 310,
            "isCopyrighted": false,
            "tt2dsp": {}
          },
          "challenges": [
            {
              "id": "42164",
              "title": "foryou",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "23428",
              "title": "tiktok",
              "desc": "",
              "profileThumb": "",
              "profileMedium": "",
              "profileLarger": "",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            },
            {
              "id": "9960",
              "title": "movie",
              "desc": "Is it drama, comedy, or action? Show us the #Movie you are currently watching 🍿",
              "profileThumb": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/f985b0123891a188ff34f5cb39ae3e48.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=ETVColHVJsyzxMtl65ijCL0HMv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileMedium": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/f985b0123891a188ff34f5cb39ae3e48.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=ETVColHVJsyzxMtl65ijCL0HMv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "profileLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/f985b0123891a188ff34f5cb39ae3e48.jpeg~tplv-tiktokx-origin.image?dr=9627&x-expires=1770307200&x-signature=ETVColHVJsyzxMtl65ijCL0HMv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=useast5",
              "coverThumb": "",
              "coverMedium": "",
              "coverLarger": ""
            }
          ],
          "stats": {
            "diggCount": 378200,
            "shareCount": 3307,
            "commentCount": 813,
            "playCount": 5000000,
            "collectCount": 21200
          },
          "originalItem": false,
          "officalItem": false,
          "textExtra": [
            {
              "awemeId": "",
              "start": 0,
              "end": 7,
              "hashtagName": "foryou",
              "hashtagId": "42164",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 8,
              "end": 15,
              "hashtagName": "tiktok",
              "hashtagId": "23428",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            },
            {
              "awemeId": "",
              "start": 16,
              "end": 22,
              "hashtagName": "movie",
              "hashtagId": "9960",
              "type": 1,
              "isCommerce": false,
              "subType": 0
            }
          ],
          "secret": false,
          "forFriend": false,
          "digged": false,
          "itemCommentStatus": 0,
          "effectStickers": [
            {
              "name": "KD pro II + contour",
              "ID": "3149762289",
              "stickerStats": {
                "useCount": 0
              }
            },
            {
              "name": "Reflection",
              "ID": "3729791527",
              "stickerStats": {
                "useCount": 0
              }
            }
          ],
          "authorStats": {
            "followingCount": 134,
            "followerCount": 98900,
            "heartCount": 15500000,
            "videoCount": 23,
            "diggCount": 876,
            "heart": 15500000,
            "friendCount": 0
          },
          "privateItem": false,
          "duetEnabled": true,
          "stitchEnabled": true,
          "shareEnabled": true,
          "isAd": false,
          "duetDisplay": 0,
          "stitchDisplay": 0,
          "contents": [
            {
              "desc": "#foryou #tiktok #movie ",
              "textExtra": [
                {
                  "awemeId": "",
                  "start": 0,
                  "end": 7,
                  "hashtagName": "foryou",
                  "hashtagId": "42164",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 8,
                  "end": 15,
                  "hashtagName": "tiktok",
                  "hashtagId": "23428",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                },
                {
                  "awemeId": "",
                  "start": 16,
                  "end": 22,
                  "hashtagName": "movie",
                  "hashtagId": "9960",
                  "type": 1,
                  "isCommerce": false,
                  "subType": 0
                }
              ]
            }
          ],
          "diversificationId": 10045,
          "collected": false,
          "item_control": {
            "can_repost": true
          },
          "statsV2": {
            "diggCount": "378200",
            "shareCount": "3307",
            "commentCount": "813",
            "playCount": "5000000",
            "collectCount": "21158",
            "repostCount": "0"
          },
          "AIGCDescription": "",
          "backendSourceEventTracking": "",
          "CategoryType": 101,
          "textLanguage": "un",
          "textTranslatable": false,
          "authorStatsV2": {
            "followingCount": "134",
            "followerCount": "98900",
            "heartCount": "15500000",
            "videoCount": "23",
            "diggCount": "876",
            "heart": "15500000",
            "friendCount": "0"
          }
        },
        "common": {
          "doc_id_str": "7541066433279610143"
        }
      }
    ],
    "qc": "",
    "cursor": 12,
    "has_more": 1,
    "ad_info": {},
    "extra": {
      "now": 1770288483000,
      "logid": "20260205104802B66526ADF1C094052237",
      "fatal_item_ids": [],
      "search_request_id": "",
      "api_debug_info": null
    },
    "log_pb": {
      "impr_id": "20260205104802B66526ADF1C094052237"
    },
    "global_doodle_config": {
      "feedback_survey": null
    },
    "backtrace": "",
    "tt_chain_token": "m44u69ZGKs43eappShQ1QA==",
    "cookie": "tt_chain_token=m44u69ZGKs43eappShQ1QA==;"
  }
}
Response headers
 alt-svc: h3=":443"; ma=86400 
 cf-cache-status: DYNAMIC 
 cf-ray: 9c91d5467da99b5c-SEA 
 content-encoding: gzip 
 content-type: application/json 
 date: Thu,05 Feb 2026 10:48:03 GMT 
 nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800} 
 report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ib%2FIJhOIkSt9V0LKv7nwjTIKZKLNPcnUbqW36sjSLgpol%2B9Kwtyroc93WM6mhv5XFD%2FWqmaDaB26tYjrGQHTc%2B2XL7o9jhtVlfKyBw%3D%3D"}]} 
 server: cloudflare 
 speculation-rules: "/cdn-cgi/speculation" 
 vary: Accept-Encoding 
 x-request-id: 89adf103-f010-4143-9072-8f031ed553bc 
 x-upstream-response-time: - 
 x-upstream-server: 64.23.134.208:80 
 x-upstream-status: 200 
Responses
Code	Description	Links
200	
Successful Response

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "code": 200,
  "request_id": "string",
  "message": "Request successful. This request will incur a charge.",
  "message_zh": "请求成功，本次请求将被计费。",
  "support": "Discord: https://discord.gg/aMEAS8Xsvz",
  "time": "string",
  "time_stamp": 0,
  "time_zone": "America/Los_Angeles",
  "docs": "string",
  "cache_message": "This request will be cached. You can access the cached result directly using the URL below, valid for 24 hours. Accessing the cache will not incur additional charges.",
  "cache_message_zh": "本次请求将被缓存，你可以使用下面的 URL 直接访问缓存结果，有效期为 24 小时，访问缓存不会产生额外费用。",
  "cache_url": "string",
  "router": "",
  "params": {},
  "data": "string"
}
No links
422	
Validation Error

Media type

application/json
Example Value
Schema
{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}