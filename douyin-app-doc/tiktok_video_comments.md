GET
/api/v1/tiktok/web/fetch_post_comment
获取作品的评论列表/Get video comments


[中文]
用途:
获取作品的评论列表
参数:
aweme_id: 作品id
cursor: 翻页游标
count: 每页数量
current_region: 当前地区，默认为空。
返回:
作品的评论列表
[English]
Purpose:
Get video comments
Parameters:
aweme_id: Video id
cursor: Page cursor
count: Number per page
current_region: Current region, default is empty.
Return:
Video comments
[示例/Eample]
aweme_id = "7304809083817774382" cursor = 0 count = 20 current_region = ""

Parameters
Cancel
Name	Description
aweme_id *
string
(query)
作品id/Video id

7603296357641735445
cursor
integer
(query)
翻页游标/Page cursor

0
count
integer
(query)
每页数量/Number per page

20
current_region
string
(query)
当前地区/Current region

current_region
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://api.tikhub.io/api/v1/tiktok/web/fetch_post_comment?aweme_id=7603296357641735445&cursor=0&count=20' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA=='
Request URL
https://api.tikhub.io/api/v1/tiktok/web/fetch_post_comment?aweme_id=7603296357641735445&cursor=0&count=20
Server response
Code	Details
200	
Response body
Download
{
  "code": 200,
  "request_id": "708b944a-c203-4e7e-ac2a-e6487a7798be",
  "message": "Request successful. This request will incur a charge.",
  "message_zh": "请求成功，本次请求将被计费。",
  "support": "Discord: https://discord.gg/aMEAS8Xsvz",
  "time": "2026-02-05 03:43:05",
  "time_stamp": 1770291785,
  "time_zone": "America/Los_Angeles",
  "docs": "https://api.tikhub.io/#/TikTok-Web-API/fetch_post_comment_api_v1_tiktok_web_fetch_post_comment_get",
  "cache_message": "This request will be cached. You can access the cached result directly using the URL below, valid for 24 hours. Accessing the cache will not incur additional charges.",
  "cache_message_zh": "本次请求将被缓存，你可以使用下面的 URL 直接访问缓存结果，有效期为 24 小时，访问缓存不会产生额外费用。",
  "cache_url": "https://cache.tikhub.io/api/v1/cache/public/708b944a-c203-4e7e-ac2a-e6487a7798be?sign=971d9ac9891c4d243e23706b10104efe8911a608152ca44a0857825654d792af",
  "router": "/api/v1/tiktok/web/fetch_post_comment",
  "params": {
    "aweme_id": "7603296357641735445",
    "cursor": "0",
    "count": "20"
  },
  "data": {
    "alias_comment_deleted": false,
    "comments": [
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603301260598838032",
        "collect_stat": 0,
        "comment_language": "un",
        "comment_post_item_ids": null,
        "create_time": 1770281693,
        "digg_count": 2,
        "fold_status": -1,
        "image_list": [
          {
            "crop_url": {
              "height": 1520,
              "uri": "tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c",
              "url_list": [
                "https://p16-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c~tplv-jj85edgx6n-image-medium.image?dr=11732&refresh_token=d852ceb2&x-expires=1801825200&x-signature=ZQ%2BNMVmhgUgo%2FjUgHyDE3DjTG9s%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p19-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c~tplv-jj85edgx6n-image-medium.image?dr=11732&refresh_token=fd8c9d17&x-expires=1801825200&x-signature=2qbkurm2UxmAxvMDRPoh4e2Lpb8%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p16-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c~tplv-jj85edgx6n-image-medium.jpeg?dr=11732&refresh_token=c78f2263&x-expires=1801825200&x-signature=yZqnUwpSuUTj%2Ba86OEIEuwA3re4%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8"
              ],
              "url_prefix": null,
              "width": 720
            },
            "origin_url": {
              "height": 1520,
              "uri": "tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c",
              "url_list": [
                "https://p16-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c~tplv-jj85edgx6n-image-origin.image?dr=11732&refresh_token=e91de7f0&x-expires=1801825200&x-signature=pBQ3BXPTc1YqmF1XHmHmaQZ3YFc%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p19-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c~tplv-jj85edgx6n-image-origin.image?dr=11732&refresh_token=3502e3f6&x-expires=1801825200&x-signature=WF9VRw3lZMMJTtW2%2B%2Bm9barUF7Y%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p16-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/1c08f992d6254427a6d345d8fca2b65c~tplv-jj85edgx6n-image-origin.jpeg?dr=11732&refresh_token=7eaa5083&x-expires=1801825200&x-signature=ieeMqtocUDHYd2N%2B5nMPGLv8rhM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8"
              ],
              "url_prefix": null,
              "width": 720
            }
          }
        ],
        "is_author_digged": false,
        "is_comment_translatable": false,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 1,
            "extra": "{\"is_share_handler_failed\":\"1\"}"
          },
          "desc": "",
          "title": "",
          "url": ""
        },
        "sort_extra_score": {
          "reply_score": 0.009836,
          "show_more_score": 0.002567
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/3f02fb327e744a17c5e458b055651ed7",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3f02fb327e744a17c5e458b055651ed7~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=4d6a3a4c&x-expires=1770375600&x-signature=FJh5t9kwgdYN6sK%2BVhLIk8yKx7U%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3f02fb327e744a17c5e458b055651ed7~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=730e6f1f&x-expires=1770375600&x-signature=F1ge8oiJS4sqkJxILHraCYjZTA4%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3f02fb327e744a17c5e458b055651ed7~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=9a5a11d1&x-expires=1770375600&x-signature=0O4rtVfjVtMb4yeKFfmCpyiL0JY%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "☠️زین وینس",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAX8-9O5L2x0V2bBXh7waHKhHwd2gM4Wvh_LsioC0A5-_yJJS76sofDbLhRL6Rrzkg",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7253829545996370949",
          "unique_id": "zainjutt.31",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603308235172496150",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770283175,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "🦋Dua editor 🐝’s comment: Hi oyyyyyyyyy ❤️🥀😁",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7569944830936384534&preview_pb=0&share_comment_id=7603308235172496150&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.01591,
          "show_more_score": 0.001282
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "Hi oyyyyyyyyy ❤️🥀😁",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-maliva-avt-0068/675e03c71ea90928fd73252e4614e550",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/675e03c71ea90928fd73252e4614e550~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=c7dc6999&x-expires=1770375600&x-signature=rJaMVeUa5vvpwAL26B8kXPS7c5c%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/675e03c71ea90928fd73252e4614e550~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=e17f9bde&x-expires=1770375600&x-signature=DsMcZdibV9zKIvIPbGjPZF6MYN8%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/675e03c71ea90928fd73252e4614e550~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=b4795fd7&x-expires=1770375600&x-signature=gEb574LCgO9XK6%2B45Jwi%2BeEDxUs%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "🦋Dua editor 🐝",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAZWZ4r6GYR556AsSPuq_hdzgRhige3HYYWFpWYsIE-bGzo_j1H-EmAv-ndnTpBcPW",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7569944830936384534",
          "unique_id": "shanu3_007",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603299273505473296",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770281086,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": true,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "zohaiba 😇😇78604’s comment: so nice Cate❤️❤️❤️❤️❤️",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7095420104409924613&preview_pb=0&share_comment_id=7603299273505473296&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.010157,
          "show_more_score": 0.000928
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "so nice Cate❤️❤️❤️❤️❤️",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/93387938dbdf6d00063e7bcb66d99021",
            "url_list": [
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/93387938dbdf6d00063e7bcb66d99021~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=004f174e&x-expires=1770375600&x-signature=k7mjCb0kQPjbg4vw2fize4Oe0HY%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/93387938dbdf6d00063e7bcb66d99021~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=b287afd3&x-expires=1770375600&x-signature=gHRZCuZTtlCbo%2BITmAz7SkzgkSE%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/93387938dbdf6d00063e7bcb66d99021~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=d5a5f847&x-expires=1770375600&x-signature=DwvQ6nGKhCBVCod3iy38Oq%2FqRzE%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "zohaiba 😇😇78604",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAF53SKurYDltzF4vBtVqCRh2UuRPN0xjzzHs5tn3wunO0etNZi3JFmFvbICt08tPB",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7095420104409924613",
          "unique_id": "hassan.ali78604",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603305813985673991",
        "collect_stat": 0,
        "comment_language": "un",
        "comment_post_item_ids": null,
        "create_time": 1770282594,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": [
          {
            "crop_url": {
              "height": 1612,
              "uri": "tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94",
              "url_list": [
                "https://p19-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94~tplv-jj85edgx6n-image-medium.image?dr=11732&refresh_token=e621f053&x-expires=1801825200&x-signature=OQKJIath7JqynAnRLjmgsWsPh%2Fc%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p16-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94~tplv-jj85edgx6n-image-medium.image?dr=11732&refresh_token=08b2bb58&x-expires=1801825200&x-signature=7AwV7i3QkCCIWQO3XrUZwr2x8R4%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p19-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94~tplv-jj85edgx6n-image-medium.jpeg?dr=11732&refresh_token=5b520b87&x-expires=1801825200&x-signature=hmOR3yoTIGw8v0%2FpyEIl67h%2FGnc%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8"
              ],
              "url_prefix": null,
              "width": 720
            },
            "origin_url": {
              "height": 1612,
              "uri": "tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94",
              "url_list": [
                "https://p19-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94~tplv-jj85edgx6n-image-origin.image?dr=11732&refresh_token=c77089d6&x-expires=1801825200&x-signature=ftEl56EVtjcRyYUCAfwkT%2B6Z5wM%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p16-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94~tplv-jj85edgx6n-image-origin.image?dr=11732&refresh_token=36a1ca90&x-expires=1801825200&x-signature=eN50m7ukM88JKHS0rDA28HF8cGE%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8",
                "https://p19-comment-sg-sign.tiktokcdn-us.com/tos-alisg-i-zt8igodiya-sg/460f8f12705d421eb6eec24b76171a94~tplv-jj85edgx6n-image-origin.jpeg?dr=11732&refresh_token=63e37c02&x-expires=1801825200&x-signature=q7fJrjinKLw%2FXcjrmhuLcDf%2FLL8%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=useast8"
              ],
              "url_prefix": null,
              "width": 720
            }
          }
        ],
        "is_author_digged": false,
        "is_comment_translatable": false,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 1,
            "extra": "{\"reason\":\"image_comment\"}"
          },
          "desc": "💞’s comment: ",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7194418844688991237&preview_pb=0&share_comment_id=7603305813985673991&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.00818,
          "show_more_score": 0.000725
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/79d36afe023993c06b312b4b25fe81d6",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/79d36afe023993c06b312b4b25fe81d6~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=fcf27c9e&x-expires=1770375600&x-signature=N3gdhxmyf7GNv6oKeZp7kYpAcVU%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/79d36afe023993c06b312b4b25fe81d6~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=91d9af45&x-expires=1770375600&x-signature=DSofikU2eIO3IUBloQRzjoxTCrk%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/79d36afe023993c06b312b4b25fe81d6~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=36589d9c&x-expires=1770375600&x-signature=GgmiEEyqwdlVBjdO0I6UiEYK9ek%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "💞",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAaJvhxwkAOisu1YDzZRZwtyQscTm64028IzxXmuQ_AEGc2DWmfHvBDRpS4GX1pK95",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7194418844688991237",
          "unique_id": "shahzainkhn3",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603339747222602503",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770290500,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "💯 MALIK AFZAl 👑🥂’s comment: 🥀🥀🥀🥀🥀🥀🥀🥀🥰🥰🥰🥰🥰🥰🥰🥰🥰💔💔💔💔💔💔Hi",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7506427538332550145&preview_pb=0&share_comment_id=7603339747222602503&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.007551,
          "show_more_score": 0.001436
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "🥀🥀🥀🥀🥀🥀🥀🥀🥰🥰🥰🥰🥰🥰🥰🥰🥰💔💔💔💔💔💔Hi",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/6ccdf173781858d0c8913019fac0dee9",
            "url_list": [
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6ccdf173781858d0c8913019fac0dee9~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=b17e8c95&x-expires=1770375600&x-signature=m%2BZXE6knwq9B80O%2BmEyHAIulK5k%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6ccdf173781858d0c8913019fac0dee9~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=f328ba59&x-expires=1770375600&x-signature=AsPShbRXQ5ZugNje2gbbpZUgTzo%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6ccdf173781858d0c8913019fac0dee9~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=0ff3fb59&x-expires=1770375600&x-signature=08STfn3V%2F9fs12Nqv3p%2FCC90%2F2U%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "💯 MALIK AFZAl 👑🥂",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAJQ98gBHLLEa46VkcogVPnQ8FTeVxHJ6rIFKhTsUoH_83VU07wxoMV_0YQM5H6ZXi",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7506427538332550145",
          "unique_id": "afzal.ali.afzal.a61",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603332166772359956",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770288733,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "sufyan king’s comment: so beautiful",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7243691078364185606&preview_pb=0&share_comment_id=7603332166772359956&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.007404,
          "show_more_score": 0.0014
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "so beautiful",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/dce779be44e261fd9a1d0a31c64a05a8",
            "url_list": [
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/dce779be44e261fd9a1d0a31c64a05a8~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=5c8226f5&x-expires=1770375600&x-signature=roEk94hmOX0n48nGA18btUnGnHk%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/dce779be44e261fd9a1d0a31c64a05a8~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=8b6c3b19&x-expires=1770375600&x-signature=UjLj%2FJHpvLRmGF2PEuFXa7Li1ic%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/dce779be44e261fd9a1d0a31c64a05a8~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=955469bc&x-expires=1770375600&x-signature=qAxpr46Xxr7vIA6I%2B3B4WXHlrws%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "sufyan king",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAgJtQmOI1upO_Uu17z8kSISQCvdvxEfOX1y3pMFt7I0tdzCOyQRha2s2DLUjGW3V_",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7243691078364185606",
          "unique_id": "sufyansaad39",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603302032658088724",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770281723,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "Malik anas raan’s comment: love you 😘",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7485283988464600082&preview_pb=0&share_comment_id=7603302032658088724&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.007181,
          "show_more_score": 0.000726
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "love you 😘",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/9fda96b5ed1431bb889c3b612476dc29",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/9fda96b5ed1431bb889c3b612476dc29~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=564282e4&x-expires=1770375600&x-signature=uTvm5hDcP9KuzRVqMOSMfzAtTYY%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/9fda96b5ed1431bb889c3b612476dc29~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=dcda1ab7&x-expires=1770375600&x-signature=MgIjc8DAikNw9oxcEcNMB1mexfE%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/9fda96b5ed1431bb889c3b612476dc29~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=997777c3&x-expires=1770375600&x-signature=qgHkFa12Vx50qWGcCwT5LqqvWus%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "Malik anas raan",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAARKfDCmvPs6h3ioqOr9mYzmzRVkbe7qoAVUvC3ElkkS_T10BHKnRfNdKheSKEDW28",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7485283988464600082",
          "unique_id": "anasraan",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603300198249415445",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770281461,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "Malik Amir Bucha’s comment: nice 👍👍",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7122750790733988869&preview_pb=0&share_comment_id=7603300198249415445&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.007181,
          "show_more_score": 0.000726
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "nice 👍👍",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=648417a7&x-expires=1770375600&x-signature=7WsvRfmxzvLgnjhtDN6NO%2Fputp8%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=928d1aa4&x-expires=1770375600&x-signature=InnX%2B6n1SOol9DvTVsoeUjputLQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=75c26e11&x-expires=1770375600&x-signature=3QOHV6RU1YzzWJ70Tr6%2BNGNO8PE%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "Malik Amir Bucha",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAA87Lm8wOb3w_yAZUcVpDMnR3hN3F1bSs64V7XoA_Godvu69VDVxY7SlubHMI5rWhK",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7122750790733988869",
          "unique_id": "user8227119969590",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603301769607381767",
        "collect_stat": 0,
        "comment_language": "ur",
        "comment_post_item_ids": null,
        "create_time": 1770281656,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": true,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "KhAn...♥️’s comment: Geo masat 🙄🔥",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7348129804778554374&preview_pb=0&share_comment_id=7603301769607381767&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.007565,
          "show_more_score": 0.001011
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "Geo masat 🙄🔥",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/66fdfa30cf5d4ae0c84096abe31b0d19",
            "url_list": [
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/66fdfa30cf5d4ae0c84096abe31b0d19~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=ae22f3fb&x-expires=1770375600&x-signature=34uRGXMRL%2BZ2sDVmpzEK4ofSf6o%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/66fdfa30cf5d4ae0c84096abe31b0d19~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=fdeb47b2&x-expires=1770375600&x-signature=wgyEpvfmQ6vdS%2F1sS1DYvU6psEk%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/66fdfa30cf5d4ae0c84096abe31b0d19~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=b795df2b&x-expires=1770375600&x-signature=k%2Bb%2Ff%2FPmVrTBtof9%2BrSrhA2rT44%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "KhAn...♥️",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAV6yU_mpc2Y8kuao2bzDmZs32PX0ToCS0Jv8W-TdJMrArT2bS5f2BrqoeHUnKywn1",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7348129804778554374",
          "unique_id": "anas.zaib79",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603327966689133332",
        "collect_stat": 0,
        "comment_language": "de",
        "comment_post_item_ids": null,
        "create_time": 1770287758,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "MaLiK_AmiR’s comment: Mashallah 🥰🥰🥰🥰",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7233611482831209477&preview_pb=0&share_comment_id=7603327966689133332&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.006014,
          "show_more_score": 0.000677
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "Mashallah 🥰🥰🥰🥰",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=b82e1e06&x-expires=1770375600&x-signature=15H%2ByM4ocEzKw14cMrNSFNdBpNY%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=4f5945ce&x-expires=1770375600&x-signature=X%2FvSHdQlTK9xlS%2BMTqj4unX6P4A%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=cf713495&x-expires=1770375600&x-signature=KVBl9NHD0hqe72kDpqKbp%2FVZGCg%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "MaLiK_AmiR",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAANEBjYZftav9ageYSsYCDrCMiiV5go9Yial550VOhXNSI-hjVYtvl8ZzdqXNH_cFF",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7233611482831209477",
          "unique_id": "malik_amir056",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603304371027280658",
        "collect_stat": 0,
        "comment_language": "ur",
        "comment_post_item_ids": null,
        "create_time": 1770282258,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "💸💫Khalil nonari💯’s comment: دکھ سنائے ک\n🥰\nسے سنائے اپنے🥰",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7530877892739056647&preview_pb=0&share_comment_id=7603304371027280658&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.004622,
          "show_more_score": 0.0005
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "دکھ سنائے ک\n🥰\nسے سنائے اپنے🥰",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/a574a3f0454659eb7b0c5300fa5522a8",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/a574a3f0454659eb7b0c5300fa5522a8~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=3d8ab074&x-expires=1770375600&x-signature=CumEIm4HfsFbf0Vs9NhFS6WrlV0%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/a574a3f0454659eb7b0c5300fa5522a8~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=d897d137&x-expires=1770375600&x-signature=Cj2h6WAx3DbtInhtSgaXsSGH3AQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/a574a3f0454659eb7b0c5300fa5522a8~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=6e8e8b7f&x-expires=1770375600&x-signature=RpEyB%2Bd16oSz41qfzLaJpvBAhUk%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "💸💫Khalil nonari💯",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAxA8jN8-rbu6WZEeueWNn-sdfcwSC8o0yW6kKMIIdOlZ5BoCCV1FLef2wLa6SlHFX",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7530877892739056647",
          "unique_id": "don_of_multan",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603320309673542407",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770285974,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": true,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "Tujammil Hussain’s comment: So Cute 💙",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=6607063558743506950&preview_pb=0&share_comment_id=7603320309673542407&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.003968,
          "show_more_score": 0.000507
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "So Cute 💙",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/349f938222975bd948d00acd0363addc",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/349f938222975bd948d00acd0363addc~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=db20833e&x-expires=1770375600&x-signature=YjMglVVmhr5ybLB1IF2VCRhOZno%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/349f938222975bd948d00acd0363addc~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=b5a2fdd1&x-expires=1770375600&x-signature=2BJL4DDWV4NFigPj9RTathzBmMc%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/349f938222975bd948d00acd0363addc~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=45ebbd63&x-expires=1770375600&x-signature=mI5SgMjsAvPt442CulUqlqpGx80%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "Tujammil Hussain",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAAQ3GWy5uEHwVBEK2K1o3F4b3tIFodCujukut0mI-20oJmtKrO7AshhC6l69Rbb8B",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "6607063558743506950",
          "unique_id": "tujammilhussain88",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603332041572205330",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770288701,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "akeelur rehman khan’s comment: nice",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7328363713990509574&preview_pb=0&share_comment_id=7603332041572205330&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.003482,
          "show_more_score": 0.000725
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "nice",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=114d6223&x-expires=1770375600&x-signature=Y3QeOsAGBDKeBuM8dvr7qvBhAFU%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=57b6b6ee&x-expires=1770375600&x-signature=fm6m9LbZ14NN08gG7GIr%2F5LlFWw%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=c287c7bd&x-expires=1770375600&x-signature=hwMNl6EcrosK3%2F%2BK%2BtC6H5gj%2BCQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "akeelur rehman khan",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAz-kQItlqNmEtEgPKm8CUozFF_pA-YjYzHnVmAjsAFHerzQ-0ZYgGBVwE7HorXb5K",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7328363713990509574",
          "unique_id": "akeelur.rehman21",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603296835620913940",
        "collect_stat": 0,
        "comment_language": "ms",
        "comment_post_item_ids": null,
        "create_time": 1770280509,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "@ Itx Waseem ❤️’s comment: Hmm",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7280901224407532549&preview_pb=0&share_comment_id=7603296835620913940&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.001856,
          "show_more_score": 0.000115
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "Hmm",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/d7b83516a3aa28dde16610d7a2237d75",
            "url_list": [
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/d7b83516a3aa28dde16610d7a2237d75~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=1bfea525&x-expires=1770375600&x-signature=FAByy1hKW0sNMQCAwJ07mlagHh8%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/d7b83516a3aa28dde16610d7a2237d75~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=8668f503&x-expires=1770375600&x-signature=RGts7fwKVwXnN6OX4J0NkhgYu%2B0%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/d7b83516a3aa28dde16610d7a2237d75~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=d415e6a8&x-expires=1770375600&x-signature=TFHMEP3KPlYsk3JEP3BpjG98yQk%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "@ Itx Waseem ❤️",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAASY8xjEou_8drGqFJJue_WdpOQ1SXBa5slNKZUXQDG5p3rqbA2IjwOxML5FbpH0zl",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7280901224407532549",
          "unique_id": "badnaaamlarka",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603300310883484437",
        "collect_stat": 0,
        "comment_language": "tr",
        "comment_post_item_ids": null,
        "create_time": 1770281486,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "Malik Amir Bucha’s comment: hayati hovi",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7122750790733988869&preview_pb=0&share_comment_id=7603300310883484437&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.004741,
          "show_more_score": 0.000511
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "hayati hovi",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=648417a7&x-expires=1770375600&x-signature=7WsvRfmxzvLgnjhtDN6NO%2Fputp8%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=928d1aa4&x-expires=1770375600&x-signature=InnX%2B6n1SOol9DvTVsoeUjputLQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/6f480f9cfc32308f76f7eb8c5b37a6a4~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=75c26e11&x-expires=1770375600&x-signature=3QOHV6RU1YzzWJ70Tr6%2BNGNO8PE%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "Malik Amir Bucha",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAA87Lm8wOb3w_yAZUcVpDMnR3hN3F1bSs64V7XoA_Godvu69VDVxY7SlubHMI5rWhK",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7122750790733988869",
          "unique_id": "user8227119969590",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603332018608866066",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770288699,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "akeelur rehman khan’s comment: beautiful",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7328363713990509574&preview_pb=0&share_comment_id=7603332018608866066&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.003482,
          "show_more_score": 0.000725
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "beautiful",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=114d6223&x-expires=1770375600&x-signature=Y3QeOsAGBDKeBuM8dvr7qvBhAFU%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=57b6b6ee&x-expires=1770375600&x-signature=fm6m9LbZ14NN08gG7GIr%2F5LlFWw%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=c287c7bd&x-expires=1770375600&x-signature=hwMNl6EcrosK3%2F%2BK%2BtC6H5gj%2BCQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "akeelur rehman khan",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAz-kQItlqNmEtEgPKm8CUozFF_pA-YjYzHnVmAjsAFHerzQ-0ZYgGBVwE7HorXb5K",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7328363713990509574",
          "unique_id": "akeelur.rehman21",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603332027802534663",
        "collect_stat": 0,
        "comment_language": "ur",
        "comment_post_item_ids": null,
        "create_time": 1770288698,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "akeelur rehman khan’s comment: زندگی دی خیر ہووی",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7328363713990509574&preview_pb=0&share_comment_id=7603332027802534663&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0.002243,
          "show_more_score": 0.00051
        },
        "sort_tags": "{\"top_list\":1}",
        "status": 1,
        "stick_position": 0,
        "text": "زندگی دی خیر ہووی",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=114d6223&x-expires=1770375600&x-signature=Y3QeOsAGBDKeBuM8dvr7qvBhAFU%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=57b6b6ee&x-expires=1770375600&x-signature=fm6m9LbZ14NN08gG7GIr%2F5LlFWw%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/3214fe95abb4b9986e8017a7e4303bfd~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=c287c7bd&x-expires=1770375600&x-signature=hwMNl6EcrosK3%2F%2BK%2BtC6H5gj%2BCQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "akeelur rehman khan",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAz-kQItlqNmEtEgPKm8CUozFF_pA-YjYzHnVmAjsAFHerzQ-0ZYgGBVwE7HorXb5K",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7328363713990509574",
          "unique_id": "akeelur.rehman21",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603328008933442324",
        "collect_stat": 0,
        "comment_language": "en",
        "comment_post_item_ids": null,
        "create_time": 1770287763,
        "digg_count": 1,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": false,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "MaLiK_AmiR’s comment: Nice ❤🥰",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7233611482831209477&preview_pb=0&share_comment_id=7603328008933442324&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0,
          "show_more_score": 0
        },
        "sort_tags": "{}",
        "status": 1,
        "stick_position": 0,
        "text": "Nice ❤🥰",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 0,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=b82e1e06&x-expires=1770375600&x-signature=15H%2ByM4ocEzKw14cMrNSFNdBpNY%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=4f5945ce&x-expires=1770375600&x-signature=X%2FvSHdQlTK9xlS%2BMTqj4unX6P4A%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/71a37b625246685282216d6a88a3d44e~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=cf713495&x-expires=1770375600&x-signature=KVBl9NHD0hqe72kDpqKbp%2FVZGCg%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "MaLiK_AmiR",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAANEBjYZftav9ageYSsYCDrCMiiV5go9Yial550VOhXNSI-hjVYtvl8ZzdqXNH_cFF",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7233611482831209477",
          "unique_id": "malik_amir056",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      },
      {
        "allow_download_photo": false,
        "author_pin": false,
        "aweme_id": "7603296357641735445",
        "cid": "7603296849801544449",
        "collect_stat": 0,
        "comment_language": "id",
        "comment_post_item_ids": null,
        "create_time": 1770280520,
        "digg_count": 0,
        "fold_status": -1,
        "image_list": null,
        "is_author_digged": false,
        "is_comment_translatable": true,
        "is_high_purchase_intent": true,
        "label_list": null,
        "no_show": false,
        "reply_comment": null,
        "reply_comment_total": 0,
        "reply_id": "0",
        "reply_to_reply_id": "0",
        "share_info": {
          "acl": {
            "code": 0,
            "extra": "{}"
          },
          "desc": "🦅🦅»»»»» ray Fahad «««««🦅🦅’s comment: wadiii hayyyyatiiiiii",
          "title": "Dhoky 🤭🤌🏻❤️#foryou#سارائیکی#viralvideo#tiktok#growmyaccount ",
          "url": "https://m.tiktok.com/v/7603296357641735445.html?_d=f0ja0akic34cb9&comment_author_id=7066758050169979930&preview_pb=0&share_comment_id=7603296849801544449&share_item_id=7603296357641735445&sharer_language=en-US&source=h5_m&u_code=0"
        },
        "sort_extra_score": {
          "reply_score": 0,
          "show_more_score": 0
        },
        "sort_tags": "{}",
        "status": 1,
        "stick_position": 0,
        "text": "wadiii hayyyyatiiiiii",
        "text_extra": [],
        "thread_has_more": false,
        "thread_id": 0,
        "trans_btn_style": 1,
        "user": {
          "account_labels": null,
          "ad_cover_url": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "avatar_thumb": {
            "uri": "tos-alisg-avt-0068/c8a441917cd8e137b08c2d76234e2f41",
            "url_list": [
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/c8a441917cd8e137b08c2d76234e2f41~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=f0c10acf&x-expires=1770375600&x-signature=OHReblJzO5Bv7%2B4mmr0aArmrthQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/c8a441917cd8e137b08c2d76234e2f41~tplv-tiktokx-cropcenter:100:100.jpg?dr=9640&refresh_token=9c298a65&x-expires=1770375600&x-signature=4lbUHlnVJ2oGXWmdUc0yS0ICk5U%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8",
              "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/c8a441917cd8e137b08c2d76234e2f41~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=1936ab1c&x-expires=1770375600&x-signature=h6kt1GPTryCD2oRHIpPS9ayp5tU%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=useast8"
            ],
            "url_prefix": null
          },
          "bold_fields": null,
          "can_message_follow_status_list": null,
          "can_set_geofencing": null,
          "cha_list": null,
          "cover_url": null,
          "custom_verify": "",
          "enterprise_verify_reason": "",
          "events": null,
          "followers_detail": null,
          "geofencing": null,
          "homepage_bottom_toast": null,
          "item_list": null,
          "mutual_relation_avatars": null,
          "need_points": null,
          "nickname": "🦅🦅»»»»» ray Fahad «««««🦅🦅",
          "platform_sync_info": null,
          "relative_users": null,
          "search_highlight": null,
          "sec_uid": "MS4wLjABAAAAhCYqwo7fcd7GKIcsf_4Temq1CpwYl2R95AHsMQqm-3zUcW3V2-14zhjJ_QQj_3Q7",
          "shield_edit_field_info": null,
          "type_label": null,
          "uid": "7066758050169979930",
          "unique_id": "muzaffarghr7",
          "user_profile_guide": null,
          "user_tags": null,
          "white_cover_url": null
        },
        "user_buried": false,
        "user_digged": 0
      }
    ],
    "cursor": 20,
    "extra": {
      "api_debug_info": null,
      "fatal_item_ids": null,
      "now": 1770291785000
    },
    "has_filtered_comments": 0,
    "has_more": 1,
    "log_pb": {
      "impr_id": "202602051143059455C5ABD1C7C1053223"
    },
    "reply_style": 2,
    "status_code": 0,
    "status_msg": "",
    "top_gifts": null,
    "total": 227,
    "tt_chain_token": "1dBY7NPdCg90DxmTo+WjsA==",
    "cookie": "tt_chain_token=1dBY7NPdCg90DxmTo+WjsA==;"
  }
}
Response headers
 alt-svc: h3=":443"; ma=86400 
 cf-cache-status: DYNAMIC 
 cf-ray: 9c9225eb7ce08900-LAX 
 content-encoding: gzip 
 content-type: application/json 
 date: Thu,05 Feb 2026 11:43:06 GMT 
 nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800} 
 report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oLfdv7lxCIRr4gnvzq2xsO15j%2F0zbZLHn8IjlRrdA7UGPBZRMXPUnZzt3xuciV6cxL7fMWChlTs8xlQ1jRUF%2B%2Bc0OAZ0tXJPePKsug%3D%3D"}]} 
 server: cloudflare 
 speculation-rules: "/cdn-cgi/speculation" 
 vary: Accept-Encoding 
 x-request-id: 708b944a-c203-4e7e-ac2a-e6487a7798be 
 x-upstream-response-time: - 
 x-upstream-server: 64.23.129.41:80 
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