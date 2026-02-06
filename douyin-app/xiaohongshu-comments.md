GET
/api/v1/xiaohongshu/web/get_note_comments
获取笔记评论 V1/Get note comments V1


[中文]
用途:
获取笔记评论 V1
参数:
note_id: 笔记ID，可以从小红书的分享链接中获取
lastCursor: 第一次请求时为空，之后请求时使用上一次请求响应中返回的游标
返回:
笔记评论列表
[English]
Purpose:
Get note comments V1
Parameters:
note_id: Note ID, can be obtained from the sharing link of Xiaohongshu website.
lastCursor: Last cursor, empty for the first request, use the cursor returned in the last response for subsequent requests
Return:
Note comments list
[示例/Example]
note_id="6683b283000000001f0052bf" lastCursor=None

Parameters
Cancel
Name	Description
note_id *
string
(query)
笔记ID/Note ID

6683b283000000001f0052bf
lastCursor
string
(query)
上一页的游标/Last cursor

lastCursor
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://api.tikhub.io/api/v1/xiaohongshu/web/get_note_comments?note_id=6683b283000000001f0052bf' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA=='
Request URL
https://api.tikhub.io/api/v1/xiaohongshu/web/get_note_comments?note_id=6683b283000000001f0052bf
Server response
Code	Details
200	
Response body
Download
{
  "code": 200,
  "request_id": "90ebebd4-5f9f-4d96-bf63-4488a5b8334f",
  "message": "Request successful. This request will incur a charge.",
  "message_zh": "请求成功，本次请求将被计费。",
  "support": "Discord: https://discord.gg/aMEAS8Xsvz",
  "time": "2026-02-05 18:04:02",
  "time_stamp": 1770343442,
  "time_zone": "America/Los_Angeles",
  "docs": "https://api.tikhub.io/#/Xiaohongshu-Web-API/get_note_comments_api_v1_xiaohongshu_web_get_note_comments_get",
  "cache_message": "This request will be cached. You can access the cached result directly using the URL below, valid for 24 hours. Accessing the cache will not incur additional charges.",
  "cache_message_zh": "本次请求将被缓存，你可以使用下面的 URL 直接访问缓存结果，有效期为 24 小时，访问缓存不会产生额外费用。",
  "cache_url": "https://cache.tikhub.io/api/v1/cache/public/90ebebd4-5f9f-4d96-bf63-4488a5b8334f?sign=f321c53114d21cde5ab46d1513562604111ee2caf4e17588074efd16a56e73a0",
  "router": "/api/v1/xiaohongshu/web/get_note_comments",
  "params": {
    "note_id": "6683b283000000001f0052bf"
  },
  "data": {
    "code": 0,
    "data": {
      "user_id": "5ee237720000000001001a5d",
      "comment_count": 205,
      "comment_count_l1": 117,
      "comments": [
        {
          "biz_label": {
            "product_review": false,
            "group_invite": "false",
            "rich_text": "unknown"
          },
          "translation_strategy": 10,
          "note_id": "6683b283000000001f0052bf",
          "liked": false,
          "score": 0,
          "track_id": "interaction-service.local",
          "share_strategy": 0,
          "content": "跟着帕姐练，每天进步一点点",
          "at_users": [],
          "status": -2,
          "comment_type": 0,
          "show_tags": [],
          "show_type": "common",
          "downvoted": false,
          "collected": false,
          "id": "66c4b7a300000000270106f7",
          "sub_comments": [],
          "time": 1724168100,
          "user": {
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo316q25tsqk66g5pb8juko6uaohsvu12o?imageView2/2/w/120/format/jpg",
            "red_id": "7545159655",
            "level": {
              "image": ""
            },
            "additional_tags": {},
            "ai_agent": false,
            "current_user": "false",
            "userid": "a82b75219c7c5c5c9ece76b3490f2",
            "nickname": "純白"
          },
          "show_tags_v2": [],
          "like_count": 0,
          "hidden": false,
          "sub_comment_count": 0,
          "friend_liked_msg": ""
        },
        {
          "content": "怎么看课程？",
          "user": {
            "ai_agent": false,
            "current_user": "false",
            "userid": "a013cc2dddaf046d5eebfd3a10e3f",
            "nickname": "沐风",
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31nj7edk1l85g4a6khgt2icrgivpjuvg?imageView2/2/w/120/format/jpg",
            "red_id": "117134582",
            "level": {
              "image": ""
            },
            "additional_tags": {}
          },
          "track_id": "interaction-service.local",
          "friend_liked_msg": "",
          "biz_label": {
            "rich_text": "unknown",
            "product_review": false,
            "group_invite": "unknown"
          },
          "downvoted": false,
          "collected": false,
          "at_users": [],
          "time": 1721657018,
          "show_tags": [],
          "show_type": "common",
          "share_strategy": 0,
          "liked": false,
          "hidden": false,
          "status": 0,
          "sub_comments": [],
          "comment_type": 0,
          "id": "669e66ba0000000005022aa6",
          "note_id": "6683b283000000001f0052bf",
          "like_count": 0,
          "score": 0,
          "sub_comment_count": 0,
          "show_tags_v2": [],
          "translation_strategy": 10
        },
        {
          "hidden": false,
          "sub_comments": [],
          "show_type": "common",
          "comment_type": 0,
          "translation_strategy": 10,
          "collected": false,
          "id": "669dd6500000000005032c51",
          "user": {
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31qfso3dg0a605nac3o445mrfjc4q6lg?imageView2/2/w/120/format/jpg",
            "red_id": "238533792",
            "level": {
              "image": ""
            },
            "additional_tags": {},
            "ai_agent": false,
            "current_user": "false",
            "userid": "a0ffae8fdd811e677b723c6eeb012",
            "nickname": "上局合九蓝🔵"
          },
          "show_tags": [],
          "track_id": "interaction-service.local",
          "friend_liked_msg": "",
          "biz_label": {
            "product_review": false,
            "group_invite": "unknown",
            "rich_text": "unknown"
          },
          "share_strategy": 0,
          "show_tags_v2": [],
          "note_id": "6683b283000000001f0052bf",
          "content": "练了五天腹部就有线条了，真管用",
          "at_users": [],
          "like_count": 0,
          "liked": false,
          "time": 1721620049,
          "score": 0,
          "status": -2,
          "sub_comment_count": 0,
          "downvoted": false
        },
        {
          "user": {
            "level": {
              "image": ""
            },
            "additional_tags": {},
            "ai_agent": false,
            "current_user": "false",
            "userid": "aba37ae953018e33b1948fa511455",
            "nickname": "爱减脂的小猫",
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31bf2j47ag8005p61t7m56qklqn7dqfo?imageView2/2/w/120/format/jpg",
            "red_id": "5571256344"
          },
          "friend_liked_msg": "",
          "translation_strategy": 10,
          "content": "yayyyy大家加油[两颗心R][两颗心R][两颗心R][两颗心R]",
          "hidden": false,
          "status": 0,
          "comment_type": 0,
          "downvoted": false,
          "at_users": [],
          "sub_comments": [],
          "show_tags": [],
          "score": 0,
          "sub_comment_count": 0,
          "time": 1720334099,
          "biz_label": {
            "product_review": false,
            "group_invite": "unknown",
            "rich_text": "unknown"
          },
          "note_id": "6683b283000000001f0052bf",
          "like_count": 0,
          "liked": false,
          "show_tags_v2": [],
          "collected": false,
          "share_strategy": 0,
          "id": "668a37130000000015012791",
          "show_type": "common",
          "track_id": "interaction-service.local"
        },
        {
          "time": 1719921756,
          "show_tags": [],
          "downvoted": false,
          "collected": false,
          "at_users": [],
          "like_count": 36,
          "hidden": false,
          "sub_comment_count": 43,
          "user": {
            "userid": "a2854e7536bfbe51cf426db0bafd8",
            "nickname": "禾美汇",
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/62b733b13886701389f68e25.jpg?imageView2/2/w/120/format/jpg",
            "red_id": "150817038",
            "level": {
              "image": ""
            },
            "additional_tags": {},
            "ai_agent": false,
            "current_user": "false"
          },
          "show_type": "common",
          "friend_liked_msg": "",
          "share_strategy": 0,
          "status": 0,
          "sub_comments": [],
          "comment_type": 0,
          "track_id": "interaction-service.local",
          "id": "6683ec5b000000000303b91a",
          "note_id": "6683b283000000001f0052bf",
          "content": "练了2个月了，一点没瘦，腰围一点没小[捂脸R][捂脸R][捂脸R]",
          "liked": false,
          "show_tags_v2": [],
          "score": 0,
          "biz_label": {
            "product_review": false,
            "group_invite": "unknown",
            "rich_text": "unknown"
          },
          "translation_strategy": 10
        },
        {
          "show_tags": [],
          "show_tags_v2": [
            {
              "type": "author_liked",
              "text": "作者赞过",
              "style_id": "gray",
              "pos": "cmt_bottom"
            }
          ],
          "id": "6683dcba0000000016025d45",
          "liked": false,
          "hidden": false,
          "note_id": "6683b283000000001f0052bf",
          "user": {
            "userid": "a9a52b95f3435b404751a65d26bc6",
            "nickname": "Tina",
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/5e9478e80000000001003480.jpg?imageView2/2/w/120/format/jpg",
            "red_id": "716292276",
            "level": {
              "image": ""
            },
            "additional_tags": {},
            "ai_agent": false,
            "current_user": "false"
          },
          "friend_liked_msg": "",
          "status": 0,
          "time": 1719917754,
          "show_type": "common",
          "track_id": "interaction-service.local",
          "downvoted": false,
          "at_users": [],
          "like_count": 27,
          "score": 0,
          "collected": false,
          "comment_type": 0,
          "biz_label": {
            "rich_text": "unknown",
            "product_review": false,
            "group_invite": "unknown"
          },
          "translation_strategy": 10,
          "share_strategy": 0,
          "content": "跟跳了几个月，腹肌都出来了。腿部也很明显变瘦了，肚子，继续继续",
          "sub_comment_count": 5,
          "sub_comments": []
        },
        {
          "friend_liked_msg": "",
          "note_id": "6683b283000000001f0052bf",
          "status": 3,
          "hidden": false,
          "sub_comment_count": 0,
          "show_tags": [],
          "show_type": "common",
          "show_tags_v2": [],
          "translation_strategy": 10,
          "content": "刚刚！",
          "liked": false,
          "share_strategy": 0,
          "downvoted": false,
          "collected": false,
          "time": 1719914595,
          "comment_type": 0,
          "like_count": 0,
          "score": 0,
          "sub_comments": [],
          "user": {
            "additional_tags": {},
            "ai_agent": false,
            "current_user": "false",
            "userid": "a173165e963cc69395825ccac6dfe",
            "nickname": "肠粉脑袋",
            "images": "https://sns-avatar-qc.xhscdn.com/avatar/5d25ac630000000016019d2e.jpg?imageView2/2/w/120/format/jpg",
            "red_id": "303110993",
            "level": {
              "image": ""
            }
          },
          "track_id": "interaction-service.local",
          "biz_label": {
            "product_review": false,
            "group_invite": "unknown",
            "rich_text": "unknown"
          },
          "id": "6683d062000000001602686a",
          "at_users": []
        }
      ],
      "has_more": false,
      "cursor": "{\"index\":2,\"pageArea\":\"UNFOLDED\"}",
      "all_sort_strategies": [],
      "current_sort_strategy": "latest_v2"
    },
    "message": null,
    "recordTime": "2026-02-06T10:04:02.148403918"
  }
}
Response headers
 alt-svc: h3=":443"; ma=86400 
 cf-cache-status: DYNAMIC 
 cf-ray: 9c9713097afeaf88-SEA 
 content-encoding: gzip 
 content-type: application/json 
 date: Fri,06 Feb 2026 02:04:02 GMT 
 nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800} 
 report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xVK5T%2BplWPxTNqx6MXWJQDdyt2MXF31JFPlcAjD4Tw%2BZW9bl%2F2DVkMK05AT5ZS68usQLXDvWEuTzdRQGtl1A94cC%2FGJuCIYckC8%3D"}]} 
 server: cloudflare 
 speculation-rules: "/cdn-cgi/speculation" 
 vary: Accept-Encoding 
 x-request-id: 90ebebd4-5f9f-4d96-bf63-4488a5b8334f 
 x-upstream-response-time: - 
 x-upstream-server: 146.190.39.116:80 
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