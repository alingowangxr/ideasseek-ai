GET
/api/v1/xiaohongshu/web/search_notes
搜索笔记/Search notes


[中文]
用途:
搜索笔记
参数:
keyword: 搜索关键词
page: 页码，默认为1
sort: 排序方式
综合排序（默认参数）: general
最热排序: popularity_descending
最新排序: time_descending
最多评论: comment_descending
最多收藏: collect_descending
noteType: 笔记类型
综合笔记（默认参数）: _0
视频笔记: _1
图文笔记: _2
直播: _3
noteTime: 发布时间
不限: ""
一天内 :一天内
一周内 :一周内
半年内 :半年内
返回:
笔记列表
[English]
Purpose:
Search notes
Parameters:
keyword: Keyword
page: Page, default is 1
sort: Sort
General sort (default): general
Popularity sort: popularity_descending
Latest sort: time_descending
Most comments: comment_descending
Most favorites: collect_descending
noteType: Note type
General note (default): _0
Video note: _1
Image note: _2
Live: _3
noteTime: Release time
No limit: ""
Within one day: 一天内
Within one week: 一周内
Within half a year: 半年内
Return:
Note list
[示例/Example]
keyword="美食" page=1 sort="general" noteType="_0"

Parameters
Cancel
Name	Description
keyword *
string
(query)
搜索关键词/Keyword

陈皮
page
integer
(query)
页码/Page

1
sort
string
(query)
排序方式/Sort

general
noteType
string
(query)
笔记类型/Note type

_0
noteTime
string
(query)
发布时间/Release time

noteTime
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://api.tikhub.io/api/v1/xiaohongshu/web/search_notes?keyword=%E9%99%88%E7%9A%AE&page=1&sort=general&noteType=_0' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA=='
Request URL
https://api.tikhub.io/api/v1/xiaohongshu/web/search_notes?keyword=%E9%99%88%E7%9A%AE&page=1&sort=general&noteType=_0
Server response
Code	Details
200	
Response body
Download
{
  "code": 200,
  "request_id": "e81ac1c3-8f54-4b86-8b98-e4f5a9465393",
  "message": "Request successful. This request will incur a charge.",
  "message_zh": "请求成功，本次请求将被计费。",
  "support": "Discord: https://discord.gg/aMEAS8Xsvz",
  "time": "2026-02-05 18:05:30",
  "time_stamp": 1770343530,
  "time_zone": "America/Los_Angeles",
  "docs": "https://api.tikhub.io/#/Xiaohongshu-Web-API/search_notes_api_v1_xiaohongshu_web_search_notes_get",
  "cache_message": "This request will be cached. You can access the cached result directly using the URL below, valid for 24 hours. Accessing the cache will not incur additional charges.",
  "cache_message_zh": "本次请求将被缓存，你可以使用下面的 URL 直接访问缓存结果，有效期为 24 小时，访问缓存不会产生额外费用。",
  "cache_url": "https://cache.tikhub.io/api/v1/cache/public/e81ac1c3-8f54-4b86-8b98-e4f5a9465393?sign=6324d3b75f3b6229ae7f5abdf164ff0bfcbe118ded2cf121eb7b854d7588b152",
  "router": "/api/v1/xiaohongshu/web/search_notes",
  "params": {
    "keyword": "陈皮",
    "page": "1",
    "sort": "general",
    "noteType": "_0"
  },
  "data": {
    "code": 0,
    "data": {
      "service_status": "{\"filter\":\"not_required\",\"note\":\"success\",\"onebox\":\"not_required\",\"cost\":{\"all\":463,\"zone\":\"alsh1-gray\"}}",
      "strategy_info": {
        "query_can_guide_to_feed": true,
        "query_average_impression_count": 19
      },
      "search_dqa_new_page_exp": 1,
      "search_request_id": "0d1dd3039d464823b237f25f5ae834e9",
      "request_dqa": 0,
      "query_type": 0,
      "is_broad_query": true,
      "show_single_col": false,
      "items": [
        {
          "model_type": "note",
          "note": {
            "note_attributes": [],
            "images_list": [
              {
                "fileid": "notes_pre_post/1040g3k831gasg80i2k7048cpjd3rf4ubu6fgeog",
                "height": 4032,
                "width": 3024,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831gasg80i2k7048cpjd3rf4ubu6fgeog?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=2f8f326e2f2a636bbb9d10ef2d858c9d&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831gasg80i2k7048cpjd3rf4ubu6fgeog?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=2f8f326e2f2a636bbb9d10ef2d858c9d&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831gasg80i2k7048cpjd3rf4ubu6fgeog",
                "need_load_original_image": false
              },
              {
                "fileid": "notes_pre_post/1040g3k831gasg80i2k7g48cpjd3rf4ubm0l0o9g",
                "height": 4032,
                "width": 3024,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831gasg80i2k7g48cpjd3rf4ubm0l0o9g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=bc15125aeb131c672ce35e96eb73e4c6&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831gasg80i2k7g48cpjd3rf4ubm0l0o9g",
                "need_load_original_image": false
              },
              {
                "fileid": "notes_pre_post/1040g3k831gasg80i2k8048cpjd3rf4ub82m367g",
                "height": 4032,
                "width": 3024,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831gasg80i2k8048cpjd3rf4ub82m367g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=1895fa6b73271a6340bfb9aecef4f7b3&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831gasg80i2k8048cpjd3rf4ub82m367g",
                "need_load_original_image": false
              },
              {
                "height": 4032,
                "width": 3024,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831gasg80i2k8g48cpjd3rf4ubcsn26o0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=9328e7813b973235810711f9d7915ac5&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831gasg80i2k8g48cpjd3rf4ubcsn26o0",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831gasg80i2k8g48cpjd3rf4ubcsn26o0"
              }
            ],
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "interaction_area": {
              "status": false,
              "text": "45",
              "type": 1
            },
            "nice_count": 0,
            "niced": false,
            "comments_count": 3,
            "liked": false,
            "title": "【新会陈皮｜别人卷价格，我们只卷品质】",
            "corner_tag_info": [
              {
                "icon": "",
                "text": "RAPwu4tsjt2C+zd1wW0LGDJ1HWgQn13i/V8tdjwEQl05SBECUyD4H0Uxq4stzmbtysMoJz40fbEhDJF0ywwKi0baMLtL5ugkyi",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token"
              },
              {
                "style": 0,
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-04-16",
                "text_en": "2025-04-16"
              }
            ],
            "shared_count": 7,
            "update_time": 1744776738000,
            "desc": "当市场在比谁更便宜 我们选择用岁月说话🌿 🍊正宗新会圈枝柑 道地老树原料 | 足年干仓陈化 传统三瓣开皮 | 天然生",
            "cover_image_index": 0,
            "result_from": "",
            "debug_info_str": "",
            "collected": false,
            "extract_text_enabled": 0,
            "type": "normal",
            "user": {
              "track_duration": 0,
              "followed": false,
              "nickname": "大可皮茶记",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/63fc96b03cd9ccd92bf83095.jpg?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "userid": "574847b76a6a691827d693cb",
              "FStatus": "none",
              "red_id": "888888ii",
              "red_official_verify_type": 0,
              "red_official_verified": false
            },
            "last_update_time": 0,
            "geo_info": {
              "distance": ""
            },
            "widgets_context": "{\"flags\":{},\"author_id\":\"574847b76a6a691827d693cb\",\"author_name\":\"大可皮茶记\"}",
            "collected_count": 28,
            "id": "67ff2df8000000001b03ebc7",
            "liked_count": 45,
            "timestamp": 1744776696,
            "xsec_token": "YBdbxsayeuKymsQz03Vg55RUmQrBUXHnzWaU2pu4AW6iM=",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "has_music": false
          }
        },
        {
          "model_type": "note",
          "note": {
            "debug_info_str": "",
            "last_update_time": 0,
            "cover_image_index": 0,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "2"
            },
            "type": "normal",
            "user": {
              "userid": "69362ae80000000032017972",
              "followed": false,
              "FStatus": "none",
              "red_id": "49947886207",
              "nickname": "新会陈皮岐昌堂",
              "red_official_verify_type": 0,
              "red_official_verified": false,
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31qggs9sjng3g5q9m5bkciubiaituds8?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "track_duration": 0
            },
            "note_attributes": [],
            "shared_count": 0,
            "niced": false,
            "collected_count": 0,
            "liked": false,
            "geo_info": {
              "distance": ""
            },
            "timestamp": 1770334209,
            "result_from": "",
            "desc": "新会陈皮真假辨别✅避开90%的坑 陈皮市场的水有多深，我太有发言权了！ 懂行的都知道陈皮论年定价，年份越久身价越高，这就",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "images_list": [
              {
                "height": 2560,
                "width": 1920,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s6v5vvbm8d05q9m5bkciubip1kot4o?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3ee2688139268fabc9883a9b123dca0f&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s6v5vvbm8d05q9m5bkciubip1kot4o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=3ee2688139268fabc9883a9b123dca0f&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s6v5vvbm8d05q9m5bkciubip1kot4o",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s6v5vvbm8d05q9m5bkciubip1kot4o"
              },
              {
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s6v5vvbm8b05q9m5bkciubi56mtl48",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s6v5vvbm8b05q9m5bkciubi56mtl48",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s6v5vvbm8b05q9m5bkciubi56mtl48?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=7dbec45eff6d547446075ad4f9cc1e14&t=69854c69"
              },
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s6v5vvbm8ag5q9m5bkciubii0oga5g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=b87bb0d35817008a6bfa13736dc12da7&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s6v5vvbm8ag5q9m5bkciubii0oga5g",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s6v5vvbm8ag5q9m5bkciubii0oga5g",
                "height": 2560,
                "width": 1920,
                "url": ""
              },
              {
                "trace_id": "notes_pre_post/1040g3k831s6v5vvbm87g5q9m5bkciubi1d5hnl0",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s6v5vvbm87g5q9m5bkciubi1d5hnl0",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s6v5vvbm87g5q9m5bkciubi1d5hnl0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=bf65e08b11cb233fa75290669b33051b&t=69854c69",
                "original": ""
              }
            ],
            "widgets_context": "{\"flags\":{},\"author_id\":\"69362ae80000000032017972\",\"author_name\":\"新会陈皮岐昌堂\"}",
            "id": "6984683d000000001a02153e",
            "liked_count": 2,
            "nice_count": 0,
            "extract_text_enabled": 0,
            "comments_count": 1,
            "corner_tag_info": [
              {
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RA62k1tmXqIvbz9Tl946amkJ712Xv18HXfa5PpkVn7dq/d5bVBng5QpsAh90RFvvXG9Dvr8vjIeh/mCIQPFYxkXO8fTLCupXZs",
                "text_en": "",
                "style": 0
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2小时前",
                "text_en": "2 hrs ago",
                "style": 0
              }
            ],
            "collected": false,
            "update_time": 1770334209000,
            "xsec_token": "YB0HSxcmj4Nz0qfKWTUHTyouqVdA1_8YSfnLj0wGK1hiY=",
            "title": "陈皮泡水真假分明",
            "has_music": false
          }
        },
        {
          "model_type": "note",
          "note": {
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "note_collection",
                    "cooperate_binds",
                    "rec_next_infos",
                    "video_marks",
                    "product_review",
                    "related_search",
                    "video_goods_cards",
                    "cooperate_comment_component",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "video_recommend_tag",
                    "buyable_goods_card_v2",
                    "cooperate_search_component",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "related_recommend",
                    "next_note_guide",
                    "widgets_ndb",
                    "pgy_bbc_exp",
                    "brand_max_trailer",
                    "super_activity",
                    "note_nice_guide",
                    "pin_search_highlights",
                    "widgets_enhance",
                    "packed_goods",
                    "packed_buyable_goods",
                    "widgets_ncb",
                    "note_nice_compound",
                    "live_shooting_flag",
                    "widgets_nbb",
                    "poi_declare",
                    "async_group"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "guide_post",
                    "video_foot_bar",
                    "follow_guide",
                    "share_to_msg",
                    "note_share_prompt_v1",
                    "note_share_prompt_v2",
                    "group_share",
                    "share_guide_bubble",
                    "goods_enhance_component",
                    "guide_navigator",
                    "sync_group"
                  ]
                }
              ]
            },
            "extract_text_enabled": 0,
            "id": "6705f72a000000001902f1bf",
            "type": "video",
            "user": {
              "track_duration": 0,
              "followed": false,
              "red_id": "613417590",
              "nickname": "山客",
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "userid": "5c557081000000001b03e335",
              "FStatus": "none",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/5edfc9178f1db90001c926db.jpg?imageView2/2/w/80/format/jpg",
              "red_official_verified": false
            },
            "images_list": [
              {
                "original": "",
                "trace_id": "1040g008318ngla7r3k005n2le20mvopll45l7u8",
                "need_load_original_image": false,
                "fileid": "1040g008318ngla7r3k005n2le20mvopll45l7u8",
                "height": 1920,
                "width": 1080,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g008318ngla7r3k005n2le20mvopll45l7u8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=434ae72d1660904f9ae174a88b19cb58&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g008318ngla7r3k005n2le20mvopll45l7u8?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=434ae72d1660904f9ae174a88b19cb58&t=69854c69"
              }
            ],
            "timestamp": 1728444202,
            "debug_info_str": "",
            "shared_count": 28,
            "collected_count": 19,
            "collected": false,
            "nice_count": 1,
            "xsec_token": "YBuOi3dBnPMDqBH0NWb9WliznlR9PX5Eih6C54IeGmjzk=",
            "widgets_context": "{\"video\":true,\"origin_video_key\":\"pre_post/1040g0cg318ngbm50gq005n2le20mvoplrprf4d0\",\"flags\":{\"sound_track\":true},\"author_id\":\"5c557081000000001b03e335\",\"author_name\":\"山客\",\"video_duration\":13}",
            "desc": "沉静式晒果皮\n[黑薯问号R]很多刚接触陈皮的皮友问：陈皮要怎么晒？\n[斜眼R]我自己的经验就是：每年在秋冬季节翻晒，春夏做好密封保存，如有潮湿就用抽湿机或者空调抽湿。\n[色色R]秋冬天气带风干燥，阳光明亮而不炙热，陈皮晒得透而不至于晒伤皮，翻晒次数可以根据自己时间去定，如遇上好天气多拿陈皮出来翻晒透气也利于转化[赞R]#新会陈皮[话题]# #晒陈皮[话题]#",
            "liked_count": 45,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "last_update_time": 0,
            "cover_image_index": 0,
            "result_from": "",
            "comments_count": 2,
            "liked": false,
            "geo_info": {
              "distance": ""
            },
            "note_attributes": [],
            "corner_tag_info": [
              {
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RA27GMA1jXAVmcwg6yyKbhAVhKIEncT/aDSbqNSaZF/MBcWS30NuJP/rQyi/EgL6vWH2gDGdIXJtcBqryrVMzXCbh+g8VuI6ck",
                "text_en": "",
                "style": 0,
                "location": -1
              },
              {
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2024-10-09",
                "text_en": "2024-10-09",
                "style": 0,
                "location": 5
              }
            ],
            "niced": false,
            "update_time": 1728444302000,
            "has_music": false,
            "video_preview_type": "full_vertical_screen",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "45"
            },
            "video_info_v2": {
              "media": {
                "stream": {
                  "av1": [],
                  "h264": [
                    {
                      "stream_type": 258,
                      "audio_duration": 13140,
                      "psnr": 0,
                      "quality_type": "HD",
                      "audio_channels": 2,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/110/258/01e705f4c1a4d60e01037401926f4e74fd_258.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/110/258/01e705f4c1a4d60e01037401926f4e74fd_258.mp4"
                      ],
                      "stream_desc": "X264_MP4",
                      "default_stream": 0,
                      "format": "mp4",
                      "duration": 13142,
                      "video_bitrate": 1419038,
                      "sr": 0,
                      "audio_bitrate": 56639,
                      "width": 720,
                      "rotate": 0,
                      "weight": 48,
                      "token": "",
                      "size": 2438300,
                      "volume": 0,
                      "video_duration": 13133,
                      "hdr_type": 0,
                      "avg_bitrate": 1484279,
                      "fps": 60,
                      "ssim": 0,
                      "vmaf": -1,
                      "opaque1": {
                        "use_pcdn": "0",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "true",
                        "pcdn_supplier": ""
                      },
                      "height": 1280,
                      "video_codec": "h264",
                      "audio_codec": "aac",
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/110/258/01e705f4c1a4d60e01037401926f4e74fd_258.mp4"
                    }
                  ],
                  "h265": [
                    {
                      "stream_type": 34,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/110/34/01e705f4c1a4d60e01037403926f4fa8ab_34.mp4",
                      "ssim": 0,
                      "stream_desc": "R265_MP4_720P_34_ANDROID_prediction",
                      "rotate": 0,
                      "audio_channels": 2,
                      "volume": 0,
                      "audio_bitrate": 56211,
                      "hdr_type": 0,
                      "sr": 0,
                      "audio_duration": 13167,
                      "vmaf": -1,
                      "quality_type": "HD",
                      "opaque1": {
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "true",
                        "roiWeight": "77.6436405",
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"1.5E-6\",\"mvmaf\":\"79.42806\"}",
                        "use_pcdn": "1"
                      },
                      "size": 2061433,
                      "avg_bitrate": 1252389,
                      "video_bitrate": 1189613,
                      "video_duration": 13133,
                      "fps": 60,
                      "audio_codec": "aac",
                      "psnr": 38.42300033569336,
                      "token": "",
                      "format": "mp4",
                      "width": 720,
                      "height": 1280,
                      "duration": 13168,
                      "default_stream": 1,
                      "video_codec": "hevc",
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/110/34/01e705f4c1a4d60e01037403926f4fa8ab_34.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/110/34/01e705f4c1a4d60e01037403926f4fa8ab_34.mp4"
                      ],
                      "weight": 49
                    },
                    {
                      "audio_bitrate": 56639,
                      "weight": 50,
                      "opaque1": {
                        "use_pcdn": "1",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "true",
                        "roiWeight": "86.9714755",
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"1.5E-6\",\"mvmaf\":\"88.67914\"}"
                      },
                      "height": 1920,
                      "fps": 60,
                      "video_duration": 13133,
                      "hdr_type": 0,
                      "stream_desc": "R265_MP4_1080P_50_ANDROID_low",
                      "avg_bitrate": 1204057,
                      "video_bitrate": 1138443,
                      "ssim": 0,
                      "sr": 0,
                      "duration": 13142,
                      "size": 1977966,
                      "audio_codec": "aac",
                      "default_stream": 0,
                      "token": "",
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/110/50/01e705f4c1a4d60e01037401927a5946b4_50.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/110/50/01e705f4c1a4d60e01037401927a5946b4_50.mp4"
                      ],
                      "volume": 0,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/110/50/01e705f4c1a4d60e01037401927a5946b4_50.mp4",
                      "vmaf": -1,
                      "psnr": 37.97100067138672,
                      "audio_channels": 2,
                      "rotate": 0,
                      "width": 1080,
                      "video_codec": "hevc",
                      "audio_duration": 13140,
                      "quality_type": "FHD",
                      "stream_type": 50,
                      "format": "mp4"
                    },
                    {
                      "format": "mp4",
                      "fps": 60,
                      "audio_codec": "aac",
                      "sr": 0,
                      "opaque1": {
                        "use_pcdn": "0",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "true",
                        "pcdn_supplier": ""
                      },
                      "stream_type": 22,
                      "duration": 13168,
                      "video_duration": 13133,
                      "rotate": 0,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/110/22/01e705f4c1a4d60e01037403926f63672c_22.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/110/22/01e705f4c1a4d60e01037403926f63672c_22.mp4"
                      ],
                      "vmaf": -1,
                      "stream_desc": "HDR_R265_MP4_22_ANDROID_multi",
                      "width": 1080,
                      "audio_bitrate": 56207,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/110/22/01e705f4c1a4d60e01037403926f63672c_22.mp4",
                      "quality_type": "HD",
                      "hdr_type": 2,
                      "video_bitrate": 2794803,
                      "default_stream": 1,
                      "height": 1920,
                      "audio_channels": 2,
                      "ssim": 0,
                      "weight": 100,
                      "token": "",
                      "avg_bitrate": 2853667,
                      "video_codec": "hevc",
                      "audio_duration": 13167,
                      "size": 4697136,
                      "volume": 0,
                      "psnr": 42.981998443603516
                    },
                    {
                      "audio_duration": 13140,
                      "size": 4830467,
                      "audio_bitrate": 129371,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/24/01e705f4c1a4d60e010370019a25747889_24.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/24/01e705f4c1a4d60e010370019a25747889_24.mp4"
                      ],
                      "video_codec": "hevc",
                      "weight": 130,
                      "psnr": 0,
                      "opaque1": {
                        "use_pcdn": "0",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false",
                        "pcdn_supplier": ""
                      },
                      "volume": 0,
                      "audio_channels": 2,
                      "rotate": 0,
                      "token": "",
                      "fps": 59,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/24/01e705f4c1a4d60e010370019a25747889_24.mp4",
                      "quality_type": "HD",
                      "vmaf": -1,
                      "sr": 0,
                      "stream_type": 24,
                      "avg_bitrate": 2939357,
                      "video_duration": 13146,
                      "video_bitrate": 2800466,
                      "audio_codec": "aac",
                      "hdr_type": 1,
                      "default_stream": 1,
                      "width": 1080,
                      "height": 1920,
                      "ssim": 0,
                      "stream_desc": "HDR_Dolby_R265_MP4_24_ANDROID_all",
                      "format": "mp4",
                      "duration": 13147
                    }
                  ],
                  "h266": []
                },
                "user_level": 0,
                "video_id": 137084862437053970,
                "video": {
                  "drm_type": 0,
                  "bound": [
                    {
                      "x": 0,
                      "y": 0,
                      "w": 0,
                      "h": 0
                    }
                  ],
                  "width": 1080,
                  "height": 1920,
                  "biz_name": 110,
                  "duration": 14,
                  "hdr_type": 1,
                  "stream_types": [
                    258,
                    34,
                    50,
                    22,
                    24
                  ],
                  "opaque1": {
                    "amend_mobile": "40",
                    "isSupportSubtitle": "false",
                    "amend_4k": "25",
                    "hasHumanVoice": "false",
                    "amend_2k": "25",
                    "loudnorm": "{\"lra\":3.2,\"htp\":-30.71,\"hldn\":-45.63,\"ldn\":-46.12,\"thr\":-56.12}",
                    "amend": "8",
                    "weakNetUserFlag": "1",
                    "domestic": "0"
                  },
                  "biz_id": "281200060860395967",
                  "md5": "351b41f5621ccd467be58fe64e207094"
                }
              },
              "image": {
                "thumbnail": "https://sns-na-i8-a.xhscdn.com/110/0/01e705f4c1a4d60e001000000001926f4eb60d_0.webp?imageView2/2/w/5000/h/5000/format/heif/q/56&redImage/frame/0&ap=5&sc=SRH_ORG&sign=f809634e5060ec24e3143d718b740af5&t=69854c69",
                "thumbnail_dim": "https://sns-na-i8-a.xhscdn.com/110/0/01e705f4c1a4d60e001000000001926f4eb60d_0.webp?imageView2/2/w/720/h/720/format/heif/q/46|imageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_SPRT&sign=f809634e5060ec24e3143d718b740af5&t=69854c69"
              },
              "capa": {
                "duration": 13,
                "frame_ts": 0,
                "is_user_select": false,
                "is_upload": false
              },
              "consumer": {
                "can_super_resolution": false
              }
            }
          }
        },
        {
          "model_type": "note",
          "note": {
            "liked_count": 249,
            "type": "normal",
            "has_music": false,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "cover_image_index": 0,
            "corner_tag_info": [
              {
                "icon": "",
                "text": "RAmIXAFrinQVYsELvUJVWKxmJEmq7KQHBuVfEk3gmvYqAQ5LuzjF3DbeGuur8MoIAISU5mCGfsVzD5eDgQf6z37wBnF8/q6eom",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token"
              },
              {
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-01-04",
                "text_en": "2025-01-04",
                "style": 0,
                "location": 5,
                "type": "publish_time"
              },
              {
                "location": 0,
                "style": 0,
                "poi_id": "4230303134314A454853"
              }
            ],
            "niced": false,
            "liked": false,
            "id": "6777b63c000000000b02395a",
            "title": "新会陈皮真假如何辨别？看完避开90%陈皮坑",
            "images_list": [
              {
                "width": 1280,
                "url": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh6405pr96hnm2lokg5vt3qo?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3d32235900b5815ca9bd8c514ae6034a&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh6405pr96hnm2lokg5vt3qo?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=3d32235900b5815ca9bd8c514ae6034a&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g34o31c6bpnhfh6405pr96hnm2lokg5vt3qo",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31c6bpnhfh6405pr96hnm2lokg5vt3qo",
                "height": 1706
              },
              {
                "trace_id": "spectrum/1040g34o31c6bpnhfh6305pr96hnm2loki4qkn2o",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31c6bpnhfh6305pr96hnm2loki4qkn2o",
                "height": 1706,
                "width": 1280,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh6305pr96hnm2loki4qkn2o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=b555ac2ad0a6627dc1a2cfcb4612de0c&t=69854c69",
                "original": ""
              },
              {
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31c6bpnhfh63g5pr96hnm2lokor1oup0",
                "height": 1706,
                "width": 1280,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh63g5pr96hnm2lokor1oup0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=fe1e3078b6528e127ab1c496a32e196a&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g34o31c6bpnhfh63g5pr96hnm2lokor1oup0"
              },
              {
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31c6bpnhfh64g5pr96hnm2lokg13ni2g",
                "height": 1706,
                "width": 1280,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh64g5pr96hnm2lokg13ni2g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=8440d1e322ee9bedc4bd259c89fc8450&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g34o31c6bpnhfh64g5pr96hnm2lokg13ni2g"
              },
              {
                "trace_id": "spectrum/1040g34o31c6bpnhfh6505pr96hnm2lok6troqf0",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31c6bpnhfh6505pr96hnm2lok6troqf0",
                "height": 1706,
                "width": 1280,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh6505pr96hnm2lok6troqf0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=eb7085591039fe84685562571e467a72&t=69854c69",
                "original": ""
              },
              {
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31c6bpnhfh65g5pr96hnm2lokj5pfalg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=0b29ddfdefe36301e780c1c36af0b5bb&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g34o31c6bpnhfh65g5pr96hnm2lokj5pfalg",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31c6bpnhfh65g5pr96hnm2lokj5pfalg",
                "height": 1706,
                "width": 1280
              }
            ],
            "last_update_time": 0,
            "note_attributes": [],
            "extract_text_enabled": 0,
            "collected": false,
            "desc": "新会陈皮真假鉴别？新会陈皮真假皮混卖？假皮价格甚至跟真皮价格一样高？拒绝做大冤种。 . ✅自然生晒的陈皮： ①内囊蓬松自",
            "timestamp": 1735993861,
            "debug_info_str": "",
            "geo_info": {
              "distance": ""
            },
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "249"
            },
            "nice_count": 0,
            "user": {
              "followed": false,
              "FStatus": "none",
              "red_id": "94159867042",
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "userid": "6769346f0000000018015714",
              "track_duration": 0,
              "nickname": "爱喝陈皮的花花",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31bth4iu1h06g5pr96hnm2lokcrnol9o?imageView2/2/w/80/format/jpg",
              "red_official_verify_type": 0
            },
            "result_from": "",
            "comments_count": 51,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "widgets_context": "{\"flags\":{},\"author_id\":\"6769346f0000000018015714\",\"author_name\":\"爱喝陈皮的花花\"}",
            "shared_count": 169,
            "update_time": 1737405539000,
            "collected_count": 162,
            "xsec_token": "YBVPWiptq1XIchNRJn4UmEYXKovQ4sPmeaFSz_-HoKZY0="
          }
        },
        {
          "model_type": "note",
          "note": {
            "type": "video",
            "geo_info": {
              "distance": ""
            },
            "corner_tag_info": [
              {
                "icon": "",
                "text": "RAVFWyTV+1q5gx5jg6b62e8xcD5bdS/Ujx+uzOq8bEZbisuI96FVVCNSrQyPGiQkOo6P2oVLH1+LylbV5MmFLJFHlhjDytp7LI",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token"
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-11-08",
                "text_en": "2025-11-08",
                "style": 0
              }
            ],
            "widgets_context": "{\"video\":true,\"origin_video_key\":\"1040g2so31ojgpm8p52005q7ckvislb4vls828lo\",\"flags\":{\"sound_track\":true,\"inspiration\":true},\"author_id\":\"68eca7e5000000003202ac9f\",\"author_name\":\"梧栖阁\",\"video_duration\":56}",
            "extract_text_enabled": 0,
            "nice_count": 35,
            "xsec_token": "YBnbEMPBJe9-4C3zKA9BR48pHYNkVtQkiHGhrR8Vy5IRk=",
            "id": "690e2970000000000700ddd1",
            "desc": "制作陈皮的季节到了 赶快囤起来\n#小红书的三餐四季[话题]# #果干[话题]# #纯天然无添加[话题]# #爱如陈皮愈久愈珍[话题]# #陈皮[话题]#",
            "liked_count": 582,
            "user": {
              "followed": false,
              "FStatus": "none",
              "red_id": "27461173656",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31nj8e2mgks6g5q7ckvislb4v3soq8u8?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "userid": "68eca7e5000000003202ac9f",
              "nickname": "梧栖阁",
              "red_official_verify_type": 0,
              "red_official_verified": false,
              "track_duration": 0
            },
            "images_list": [
              {
                "trace_id": "1040g00831ojgpmmf4s005q7ckvislb4vcerc4m0",
                "need_load_original_image": false,
                "fileid": "1040g00831ojgpmmf4s005q7ckvislb4vcerc4m0",
                "height": 1440,
                "width": 1080,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g00831ojgpmmf4s005q7ckvislb4vcerc4m0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=4122831c57c37c6036c8425dab815118&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831ojgpmmf4s005q7ckvislb4vcerc4m0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=4122831c57c37c6036c8425dab815118&t=69854c69",
                "original": ""
              }
            ],
            "note_attributes": [],
            "shared_count": 602,
            "liked": false,
            "result_from": "",
            "timestamp": 1762535792,
            "last_update_time": 0,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "note_collection",
                    "cooperate_binds",
                    "rec_next_infos",
                    "video_marks",
                    "product_review",
                    "related_search",
                    "video_goods_cards",
                    "cooperate_comment_component",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "video_recommend_tag",
                    "buyable_goods_card_v2",
                    "cooperate_search_component",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "related_recommend",
                    "next_note_guide",
                    "widgets_ndb",
                    "pgy_bbc_exp",
                    "brand_max_trailer",
                    "super_activity",
                    "note_nice_guide",
                    "pin_search_highlights",
                    "widgets_enhance",
                    "packed_goods",
                    "packed_buyable_goods",
                    "widgets_ncb",
                    "note_nice_compound",
                    "live_shooting_flag",
                    "widgets_nbb",
                    "poi_declare",
                    "async_group"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "guide_post",
                    "video_foot_bar",
                    "follow_guide",
                    "share_to_msg",
                    "note_share_prompt_v1",
                    "note_share_prompt_v2",
                    "group_share",
                    "share_guide_bubble",
                    "goods_enhance_component",
                    "guide_navigator",
                    "sync_group"
                  ]
                }
              ]
            },
            "collected": false,
            "update_time": 1767826061000,
            "collected_count": 872,
            "video_info_v2": {
              "media": {
                "stream": {
                  "h265": [
                    {
                      "duration": 56564,
                      "audio_duration": 56563,
                      "sr": 0,
                      "video_duration": 56533,
                      "vmaf": -1,
                      "volume": 0,
                      "avg_bitrate": 1419279,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/178/01e90e296f34770d010370019a6c8d2257_178.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/178/01e90e296f34770d010370019a6c8d2257_178.mp4"
                      ],
                      "hdr_type": 0,
                      "opaque1": {
                        "roiWeight": "71.36390721234375",
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"1.0E-5\",\"mvmaf\":\"84.19178721234375\"}",
                        "use_pcdn": "1",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false"
                      },
                      "height": 1280,
                      "video_codec": "hevc",
                      "audio_bitrate": 128278,
                      "ssim": 0,
                      "weight": 48,
                      "width": 720,
                      "size": 10035018,
                      "rotate": 0,
                      "default_stream": 1,
                      "fps": 30,
                      "audio_channels": 2,
                      "quality_type": "HD",
                      "stream_desc": "R265_MP4_720P_178_ANDROID",
                      "format": "mp4",
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/178/01e90e296f34770d010370019a6c8d2257_178.mp4",
                      "psnr": 38.93299865722656,
                      "stream_type": 178,
                      "video_bitrate": 1282788,
                      "audio_codec": "aac"
                    },
                    {
                      "width": 1080,
                      "video_codec": "hevc",
                      "audio_bitrate": 128278,
                      "weight": 49,
                      "default_stream": 0,
                      "size": 14726514,
                      "video_bitrate": 1946679,
                      "audio_codec": "aac",
                      "rotate": 0,
                      "stream_type": 179,
                      "volume": 0,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/179/01e90e296f34770d010370019a6c84f4ac_179.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/179/01e90e296f34770d010370019a6c84f4ac_179.mp4"
                      ],
                      "height": 1920,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/179/01e90e296f34770d010370019a6c84f4ac_179.mp4",
                      "fps": 30,
                      "audio_duration": 56563,
                      "quality_type": "FHD",
                      "format": "mp4",
                      "hdr_type": 0,
                      "psnr": 40.15399932861328,
                      "sr": 0,
                      "duration": 56564,
                      "audio_channels": 2,
                      "opaque1": {
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"1.0E-5\",\"mvmaf\":\"89.954969269375\"}",
                        "use_pcdn": "1",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false",
                        "roiWeight": "70.488179269375"
                      },
                      "avg_bitrate": 2082810,
                      "video_duration": 56533,
                      "vmaf": -1,
                      "ssim": 0,
                      "stream_desc": "R265_MP4_1080P_179_android_low_v0"
                    },
                    {
                      "height": 1920,
                      "video_bitrate": 2696498,
                      "sr": 0,
                      "video_duration": 56533,
                      "audio_codec": "aac",
                      "audio_bitrate": 128278,
                      "quality_type": "FHD",
                      "stream_desc": "R265_MP4_1080P_180_android_high",
                      "format": "mp4",
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/180/01e90e296f34770d010370019a6c8b4183_180.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/180/01e90e296f34770d010370019a6c8b4183_180.mp4"
                      ],
                      "hdr_type": 0,
                      "duration": 56564,
                      "size": 20025232,
                      "audio_channels": 2,
                      "psnr": 41.61399841308594,
                      "weight": 50,
                      "volume": 0,
                      "video_codec": "hevc",
                      "audio_duration": 56563,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/180/01e90e296f34770d010370019a6c8b4183_180.mp4",
                      "ssim": 0,
                      "vmaf": -1,
                      "opaque1": {
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false",
                        "roiWeight": "66.2268665975",
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"1.0E-5\",\"mvmaf\":\"93.1918465975\"}",
                        "use_pcdn": "1"
                      },
                      "stream_type": 180,
                      "fps": 30,
                      "rotate": 0,
                      "default_stream": 0,
                      "width": 1080,
                      "avg_bitrate": 2832222
                    }
                  ],
                  "h266": [],
                  "av1": [],
                  "h264": [
                    {
                      "opaque1": {
                        "pcdn_supplier": "",
                        "use_pcdn": "0",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false"
                      },
                      "volume": 0,
                      "ssim": 0,
                      "sr": 0,
                      "stream_desc": "X264_MP4",
                      "audio_bitrate": 56163,
                      "format": "mp4",
                      "size": 27765638,
                      "video_codec": "h264",
                      "rotate": 0,
                      "width": 720,
                      "psnr": 0,
                      "avg_bitrate": 3926969,
                      "video_duration": 56533,
                      "audio_channels": 2,
                      "weight": 47,
                      "quality_type": "HD",
                      "stream_type": 258,
                      "default_stream": 0,
                      "audio_codec": "aac",
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/79/110/258/01e90e296f34770d4f0370019a5f527ffc_258.mp4",
                      "fps": 30,
                      "video_bitrate": 3866117,
                      "audio_duration": 56563,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/79/110/258/01e90e296f34770d4f0370019a5f527ffc_258.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/79/110/258/01e90e296f34770d4f0370019a5f527ffc_258.mp4"
                      ],
                      "hdr_type": 0,
                      "vmaf": -1,
                      "height": 1280,
                      "duration": 56564
                    }
                  ]
                },
                "user_level": 0,
                "video_id": 137656834733668110,
                "video": {
                  "biz_name": 110,
                  "hdr_type": 0,
                  "opaque1": {
                    "amend": "30",
                    "audioLevInfo": "{\"audio_quality_level\":\"E\",\"mos_overall\":3.8985,\"version\":\"3.0\"}",
                    "amend_2k": "25",
                    "domestic": "0",
                    "insertSubtitleLanguages": "[\"zh-CN\"]",
                    "videoLanguage": "[\"zh-CN\"]",
                    "weakNetUserFlag": "1",
                    "loudnorm": "{\"lra\":2.2,\"htp\":-4.97,\"hldn\":-17.4,\"ldn\":-17.49,\"thr\":-27.64}",
                    "amend_mobile": "40",
                    "topAvgLuma": "137",
                    "bottomAvgLuma": "110",
                    "audioClsInfo": "{\"music_ratio\":0.999469102823056,\"freesound_ratio\":0.05131834982625465,\"speech_ratio\":0.9812422406433863}",
                    "amend_4k": "25",
                    "hasHumanVoice": "true",
                    "rightAvgLuma": "89",
                    "isSupportSubtitle": "true"
                  },
                  "height": 1920,
                  "stream_types": [
                    258,
                    178,
                    179,
                    180
                  ],
                  "bound": [
                    {
                      "x": 0,
                      "y": 0,
                      "w": 0,
                      "h": 0
                    }
                  ],
                  "width": 1080,
                  "biz_id": "281772022824754641",
                  "duration": 57,
                  "md5": "da54febbd00eca4ea7e0e2f3ee5afe0b",
                  "drm_type": 0
                }
              },
              "image": {
                "first_frame": "https://sns-na-i8-a.xhscdn.com/110/0/01e90e296f34770d0010000000019a5f51e6a0_0.jpg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=75f944473e60bd5226f74ec5c8fedccf&t=69854c69",
                "thumbnail": "https://sns-na-i8-a.xhscdn.com/frame/110/0/01e90e296f34770d0010000000019a5f522c47_0.webp?imageView2/2/w/5000/h/5000/format/heif/q/56&redImage/frame/0&ap=5&sc=SRH_ORG&sign=4fef0461828fe4fb711a06f808f82271&t=69854c69",
                "thumbnail_dim": "https://sns-na-i8-a.xhscdn.com/frame/110/0/01e90e296f34770d0010000000019a5f522c47_0.webp?imageView2/2/w/720/h/720/format/heif/q/46|imageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_SPRT&sign=4fef0461828fe4fb711a06f808f82271&t=69854c69"
              },
              "capa": {
                "duration": 56,
                "frame_ts": 0,
                "is_user_select": false,
                "is_upload": false
              },
              "consumer": {
                "can_super_resolution": false
              }
            },
            "interaction_area": {
              "status": false,
              "text": "582",
              "type": 1
            },
            "niced": false,
            "debug_info_str": "",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "has_music": false,
            "cover_image_index": 0,
            "comments_count": 114
          }
        },
        {
          "model_type": "note",
          "note": {
            "id": "697f5629000000000e03c3b0",
            "desc": "Hello呀！今天get新技能——做陈皮，超级沉浸式，让人欲罢不能哦！ 一开始接触陈皮，是在中医朋友的推荐下。据说陈皮不",
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "note_attributes": [],
            "nice_count": 0,
            "xsec_token": "YBv_CE01L_pwhoCgrNNp2slE9pf9_2Vs31adridVUwuAI=",
            "title": "沉浸式做陈皮🍊",
            "type": "normal",
            "has_music": false,
            "cover_image_index": 0,
            "extract_text_enabled": 0,
            "liked_count": 1,
            "result_from": "",
            "update_time": 1769952850000,
            "collected_count": 1,
            "liked": false,
            "shared_count": 0,
            "user": {
              "FStatus": "none",
              "red_id": "116406115",
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "userid": "5939e0175e87e72450d60772",
              "followed": false,
              "nickname": "momo",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/be4e54a984a21be925a215a08fb36c8b.jpg?imageView2/2/w/80/format/jpg",
              "red_official_verify_type": 0,
              "track_duration": 0
            },
            "timestamp": 1769952809,
            "last_update_time": 0,
            "widgets_context": "{\"flags\":{},\"author_id\":\"5939e0175e87e72450d60772\",\"author_name\":\"momo\"}",
            "niced": false,
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "1"
            },
            "collected": false,
            "comments_count": 24,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "images_list": [
              {
                "fileid": "notes_pre_post/1040g3k831s21b2f84ccg49jaupg1e1ri2k6fkm8",
                "height": 2560,
                "width": 1920,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s21b2f84ccg49jaupg1e1ri2k6fkm8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=c289767b9a8849ee7501f44d7dedf79d&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s21b2f84ccg49jaupg1e1ri2k6fkm8?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=c289767b9a8849ee7501f44d7dedf79d&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s21b2f84ccg49jaupg1e1ri2k6fkm8",
                "need_load_original_image": false
              },
              {
                "trace_id": "notes_pre_post/1040g3k831s21b2f84cbg49jaupg1e1riav69p7o",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s21b2f84cbg49jaupg1e1riav69p7o",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s21b2f84cbg49jaupg1e1riav69p7o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=99c32a7d9d885e180090a29a06c0de2d&t=69854c69",
                "original": ""
              },
              {
                "fileid": "notes_pre_post/1040g3k831s21b2f84ca049jaupg1e1ria3efct0",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s21b2f84ca049jaupg1e1ria3efct0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=b4d946f5eccc955cf61ec8cebfb3c7bd&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s21b2f84ca049jaupg1e1ria3efct0",
                "need_load_original_image": false
              },
              {
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s21b2f84cc049jaupg1e1riv4o0d98?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=ddf28de919348d2b22d8531efffa7205&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s21b2f84cc049jaupg1e1riv4o0d98",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s21b2f84cc049jaupg1e1riv4o0d98"
              },
              {
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s21b2f84cag49jaupg1e1rij9cmm30?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=04a0688c9abeb0fba2000cabaf8eead6&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s21b2f84cag49jaupg1e1rij9cmm30",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s21b2f84cag49jaupg1e1rij9cmm30",
                "height": 1920,
                "width": 2560
              }
            ],
            "debug_info_str": "",
            "geo_info": {
              "distance": ""
            },
            "corner_tag_info": [
              {
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RA/2nvifWIyKqs67jyZMsu5pkzbpOyx+o+pD8R+8GYD8/fSNiO3e+7EHrgzj1anfDRQzmnrwDrf7Jn7gozH0alGsAo3GJNZBXy",
                "text_en": "",
                "style": 0
              },
              {
                "text_en": "4 days ago",
                "style": 0,
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "4天前"
              }
            ]
          }
        },
        {
          "model_type": "note",
          "note": {
            "liked_count": 400,
            "cover_image_index": 0,
            "user": {
              "followed": false,
              "red_id": "26970080894",
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "userid": "5c03b31e6b58b761f586d2e0",
              "track_duration": 0,
              "FStatus": "none",
              "nickname": "陈嘻子食养",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31e33ahvrgm6g4bup04phtkn0ones1ug?imageView2/2/w/80/format/jpg",
              "red_official_verified": false
            },
            "tag_info": {
              "title": "",
              "type": ""
            },
            "images_list": [
              {
                "trace_id": "1040g0083119uqcbvmi4g4bup04phtkn0etgnt48",
                "need_load_original_image": false,
                "fileid": "1040g0083119uqcbvmi4g4bup04phtkn0etgnt48",
                "height": 1424,
                "width": 1068,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi4g4bup04phtkn0etgnt48?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3f263b19af9a24834bf052aa630102a8&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi4g4bup04phtkn0etgnt48?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=3f263b19af9a24834bf052aa630102a8&t=69854c69",
                "original": ""
              },
              {
                "trace_id": "1040g0083119uqcbvmi2g4bup04phtkn0ojvkg9o",
                "need_load_original_image": false,
                "fileid": "1040g0083119uqcbvmi2g4bup04phtkn0ojvkg9o",
                "height": 855,
                "width": 641,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi2g4bup04phtkn0ojvkg9o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=bc902176550a70e1475771474d8097cb&t=69854c69",
                "original": ""
              },
              {
                "width": 798,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi504bup04phtkn0tggldjo?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=d2dba9dc1752a536c2a9141515b36567&t=69854c69",
                "original": "",
                "trace_id": "1040g0083119uqcbvmi504bup04phtkn0tggldjo",
                "need_load_original_image": false,
                "fileid": "1040g0083119uqcbvmi504bup04phtkn0tggldjo",
                "height": 1064
              },
              {
                "trace_id": "1040g0083119uqcbvmi304bup04phtkn0hot8nf0",
                "need_load_original_image": false,
                "fileid": "1040g0083119uqcbvmi304bup04phtkn0hot8nf0",
                "height": 1396,
                "width": 1047,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi304bup04phtkn0hot8nf0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=9c7bda75e6fedc7a3a4809eca0323ade&t=69854c69",
                "original": ""
              },
              {
                "fileid": "1040g0083119uqcbvmi104bup04phtkn05bcht98",
                "height": 1200,
                "width": 900,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi104bup04phtkn05bcht98?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=974f5410025329af5adcef3499da501f&t=69854c69",
                "original": "",
                "trace_id": "1040g0083119uqcbvmi104bup04phtkn05bcht98",
                "need_load_original_image": false
              },
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g0083119uqcbvmi3g4bup04phtkn02qq04bg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=cb453c701639afe950557ba7db25547b&t=69854c69",
                "original": "",
                "trace_id": "1040g0083119uqcbvmi3g4bup04phtkn02qq04bg",
                "need_load_original_image": false,
                "fileid": "1040g0083119uqcbvmi3g4bup04phtkn02qq04bg",
                "height": 1200,
                "width": 900,
                "url": ""
              }
            ],
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "400"
            },
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "collected": false,
            "collected_count": 200,
            "type": "normal",
            "last_update_time": 0,
            "widgets_context": "{\"flags\":{},\"author_id\":\"5c03b31e6b58b761f586d2e0\",\"author_name\":\"陈嘻子食养\"}",
            "extract_text_enabled": 0,
            "debug_info_str": "",
            "result_from": "",
            "xsec_token": "YBEUo5HLAm17Vk2CNxtKqJfSIhwwwAbfIca5wXwdaDyEA=",
            "liked": false,
            "timestamp": 1712502052,
            "geo_info": {
              "distance": ""
            },
            "update_time": 1713196205000,
            "id": "6612b524000000001b00de17",
            "niced": false,
            "comments_count": 26,
            "desc": "秋冬养生，喝点陈皮也不错✨|||什么是新会陈皮? 陈皮，为芸香科植物橘及其栽培变种的成熟干燥果皮，主产于广东、福建、江西",
            "has_music": false,
            "note_attributes": [],
            "corner_tag_info": [
              {
                "icon": "",
                "text": "RAzFMQo5zCD1abiQHIuyV8eqi2jwHJkQpYuKtPMH0Vtce5t6RgptS0rXfbHST2SCYfG0NJC4T1YgiBecs2NGapDu1uzZQlwVN5",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token"
              },
              {
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2024-04-07",
                "text_en": "2024-04-07",
                "style": 0,
                "location": 5,
                "type": "publish_time"
              }
            ],
            "shared_count": 110,
            "nice_count": 0
          }
        },
        {
          "model_type": "note",
          "note": {
            "collected": false,
            "liked_count": 9,
            "type": "normal",
            "user": {
              "followed": false,
              "FStatus": "none",
              "red_id": "370589897",
              "red_official_verify_type": 0,
              "red_official_verified": false,
              "nickname": "小红薯5FEB80B3",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/61f217b7fa1877df69431068.jpg?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "userid": "5f589321000000000100a17a",
              "track_duration": 0
            },
            "has_music": false,
            "niced": false,
            "timestamp": 1732073652,
            "geo_info": {
              "distance": ""
            },
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "widgets_context": "{\"flags\":{},\"author_id\":\"5f589321000000000100a17a\",\"author_name\":\"小红薯5FEB80B3\"}",
            "last_update_time": 0,
            "nice_count": 0,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "update_time": 1732073693000,
            "comments_count": 34,
            "xsec_token": "YBh7tGiXwGdh_2uBXK-pfmO0tjRVzdJefiL9LTNBFETbY=",
            "debug_info_str": "",
            "cover_image_index": 0,
            "corner_tag_info": [
              {
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAHVg4q1uT2hy+34KhJuKxHdA26ZrhVa8nSueLS02wzkR82L3G0nqshKQ/r2Vplwqn5SMbY4MxU2tjaHHXqe2hy3katjUJ1Ij0"
              },
              {
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2024-11-20",
                "text_en": "2024-11-20",
                "style": 0,
                "location": 5
              }
            ],
            "collected_count": 2,
            "shared_count": 3,
            "desc": "某宝买到假陈皮，百草堂 避雷这家店。黑皮子 没有油点，泡水烘干皮 ，香气扑鼻加了工艺的#陈皮  #新会陈皮科普  #新会",
            "images_list": [
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u705nqoicgg98bqt0hedkg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=aef617a0ae5a127d1b205fd256b2632c&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg31adja7lh6u705nqoicgg98bqt0hedkg",
                "live_photo_file_id": "1040g2so31adja2l36o705nqoicgg98bqs166uj8",
                "width": 1920,
                "height": 2560,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u705nqoicgg98bqt0hedkg?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=aef617a0ae5a127d1b205fd256b2632c&t=69854c69",
                "need_load_original_image": false,
                "live_photo": {
                  "media": {
                    "video": {
                      "biz_name": 10,
                      "biz_id": "281260952922329885",
                      "hdr_type": 0,
                      "stream_types": [
                        16
                      ],
                      "opaque1": {
                        "weakNetUserFlag": "1",
                        "amend": "8",
                        "domestic": "0",
                        "livephoto_flag": "1",
                        "amend_mobile": "60"
                      },
                      "duration": 2,
                      "drm_type": 0,
                      "bound": [
                        {
                          "x": 0,
                          "y": 0,
                          "w": 1920,
                          "h": 1440
                        }
                      ],
                      "width": 1440,
                      "height": 1920
                    },
                    "stream": {
                      "h264": [],
                      "h265": [
                        {
                          "duration": 1836,
                          "video_codec": "hevc",
                          "weight": 66,
                          "volume": 0,
                          "avg_bitrate": 1409830,
                          "audio_duration": 0,
                          "backup_urls": [
                            "http://sns-bak-v8.xhscdn.com/stream/10/16/01e73d58b4542a04010050039347a29efe_16.mp4",
                            "http://sns-bak-v10.xhscdn.com/stream/10/16/01e73d58b4542a04010050039347a29efe_16.mp4"
                          ],
                          "vmaf": -1,
                          "psnr": 37.290000915527344,
                          "default_stream": 1,
                          "video_bitrate": 1402279,
                          "video_duration": 1835,
                          "height": 1440,
                          "size": 323556,
                          "fps": 29,
                          "audio_channels": 0,
                          "rotate": 0,
                          "ssim": 0,
                          "audio_bitrate": 0,
                          "hdrType": 0,
                          "opaque1": {
                            "pcdn_supplier": "",
                            "amend": "0",
                            "has_soundtrack": "0",
                            "use_pcdn": "0",
                            "pcdn_302_flag": "false",
                            "device_score": "0",
                            "didLoudnorm": "false"
                          },
                          "width": 1080,
                          "quality_type": "FHD",
                          "sr": 0,
                          "stream_type": 16,
                          "stream_desc": "livephoto_r256_1080p_16_andr",
                          "format": "mp4",
                          "master_url": "http://sns-video-zl-a.xhscdn.com/stream/10/16/01e73d58b4542a04010050039347a29efe_16.mp4"
                        }
                      ],
                      "h266": [],
                      "av1": []
                    },
                    "userLevel": 0,
                    "video_id": 137145764849920510
                  }
                },
                "fileid": "1040g2sg31adja7lh6u705nqoicgg98bqt0hedkg"
              },
              {
                "fileid": "1040g2sg31adja7lh6u7g5nqoicgg98bq5fmlvsg",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u7g5nqoicgg98bq5fmlvsg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=6b81a5c89fa75284549427c08f987451&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg31adja7lh6u7g5nqoicgg98bq5fmlvsg",
                "need_load_original_image": false
              },
              {
                "need_load_original_image": false,
                "fileid": "1040g2sg31adja7lh6u805nqoicgg98bqpj0059o",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u805nqoicgg98bqpj0059o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=7c28b93ca66de66c3b5f711c980a8352&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg31adja7lh6u805nqoicgg98bqpj0059o"
              },
              {
                "original": "",
                "trace_id": "1040g2sg31adja7lh6u8g5nqoicgg98bq1amm8ag",
                "need_load_original_image": false,
                "fileid": "1040g2sg31adja7lh6u8g5nqoicgg98bq1amm8ag",
                "height": 2560,
                "width": 1920,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u8g5nqoicgg98bq1amm8ag?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=d6ab8befb3f3a3e439371b984029ae8b&t=69854c69"
              },
              {
                "trace_id": "1040g2sg31adja7lh6u905nqoicgg98bqct0g0c0",
                "need_load_original_image": false,
                "fileid": "1040g2sg31adja7lh6u905nqoicgg98bqct0g0c0",
                "height": 1792,
                "width": 828,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u905nqoicgg98bqct0g0c0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=e15e679aafd676ebce928826fb60feff&t=69854c69",
                "original": ""
              },
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg31adja7lh6u9g5nqoicgg98bqdcl6akg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=1e1c5886c50f5e4420c8036ddda6dd16&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg31adja7lh6u9g5nqoicgg98bqdcl6akg",
                "need_load_original_image": false,
                "fileid": "1040g2sg31adja7lh6u9g5nqoicgg98bqdcl6akg",
                "height": 1792,
                "width": 828,
                "url": ""
              }
            ],
            "result_from": "",
            "note_attributes": [],
            "id": "673d58b4000000000703931d",
            "interaction_area": {
              "status": false,
              "text": "9",
              "type": 1
            },
            "extract_text_enabled": 0,
            "liked": false,
            "title": "买到假陈皮了"
          }
        },
        {
          "model_type": "note",
          "note": {
            "result_from": "",
            "corner_tag_info": [
              {
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAAhpFUrfzYHWBU32YuzI4JlnLRr4wiB+IEdlqZ/sVzcFIooJ9/FqMbilyVuXnQHVtf0Uze0iUJQEBk0OgY0p6Uyg62MpwtaxS",
                "text_en": "",
                "style": 0
              },
              {
                "style": 0,
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-01-27",
                "text_en": "2025-01-27"
              }
            ],
            "xsec_token": "YBexn-afrpz5Q9FTivqGVo-iLTZgR1NUktzA4TCv5bLk8=",
            "liked": false,
            "timestamp": 1737945734,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "note_collection",
                    "cooperate_binds",
                    "rec_next_infos",
                    "video_marks",
                    "product_review",
                    "related_search",
                    "video_goods_cards",
                    "cooperate_comment_component",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "video_recommend_tag",
                    "buyable_goods_card_v2",
                    "cooperate_search_component",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "related_recommend",
                    "next_note_guide",
                    "widgets_ndb",
                    "pgy_bbc_exp",
                    "brand_max_trailer",
                    "super_activity",
                    "note_nice_guide",
                    "pin_search_highlights",
                    "widgets_enhance",
                    "packed_goods",
                    "packed_buyable_goods",
                    "widgets_ncb",
                    "note_nice_compound",
                    "live_shooting_flag",
                    "widgets_nbb",
                    "poi_declare",
                    "async_group"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "guide_post",
                    "video_foot_bar",
                    "follow_guide",
                    "share_to_msg",
                    "note_share_prompt_v1",
                    "note_share_prompt_v2",
                    "group_share",
                    "share_guide_bubble",
                    "goods_enhance_component",
                    "guide_navigator",
                    "sync_group"
                  ]
                }
              ]
            },
            "debug_info_str": "",
            "note_attributes": [],
            "widgets_context": "{\"video\":true,\"origin_video_key\":\"spectrum/1040g0jg31d538ekrge005po7ptvne54lb3a3pu8\",\"flags\":{\"sound_track\":true},\"author_id\":\"6707cf7f000000001d031495\",\"author_name\":\"阿桢慧食养\",\"video_duration\":148}",
            "shared_count": 132,
            "niced": false,
            "images_list": [
              {
                "fileid": "spectrum/1040g0k031d539leg16005po7ptvne54l56gkur0",
                "height": 5077,
                "width": 3808,
                "url": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031d539leg16005po7ptvne54l56gkur0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=0590830e35c2038b81c2a0535d08ed34&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031d539leg16005po7ptvne54l56gkur0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=0590830e35c2038b81c2a0535d08ed34&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031d539leg16005po7ptvne54l56gkur0",
                "need_load_original_image": false
              }
            ],
            "has_music": false,
            "id": "6796f2860000000018010b57",
            "collected_count": 273,
            "last_update_time": 0,
            "cover_image_index": 0,
            "geo_info": {
              "distance": ""
            },
            "extract_text_enabled": 0,
            "liked_count": 312,
            "type": "video",
            "comments_count": 27,
            "video_info_v2": {
              "capa": {
                "duration": 148,
                "frame_ts": 0,
                "is_user_select": false,
                "is_upload": false
              },
              "consumer": {
                "can_super_resolution": false
              },
              "media": {
                "user_level": 0,
                "video_id": 137244280036474110,
                "video": {
                  "stream_types": [
                    258,
                    49,
                    85
                  ],
                  "bound": [
                    {
                      "y": 0,
                      "w": 0,
                      "h": 0,
                      "x": 0
                    }
                  ],
                  "opaque1": {
                    "domestic": "0",
                    "amend": "8",
                    "amend_2k": "25",
                    "hasHumanVoice": "true",
                    "amend_4k": "25",
                    "weakNetUserFlag": "1",
                    "isSupportSubtitle": "true",
                    "insertSubtitleLanguages": "[\"zh-CN\"]",
                    "amend_mobile": "40",
                    "videoLanguage": "[\"zh-CN\"]",
                    "loudnorm": "{\"lra\":9.6,\"htp\":-3.17,\"hldn\":-18.51,\"ldn\":-17.7,\"thr\":-27.87}"
                  },
                  "biz_name": 110,
                  "biz_id": "281359470114704215",
                  "duration": 148,
                  "md5": "5ceee9d0bb4ae30917ad61cce49e8931",
                  "hdr_type": 0,
                  "drm_type": 0,
                  "width": 1920,
                  "height": 1080
                },
                "stream": {
                  "h264": [
                    {
                      "weight": 48,
                      "format": "mp4",
                      "fps": 30,
                      "video_codec": "h264",
                      "audio_bitrate": 56053,
                      "audio_duration": 148002,
                      "hdr_type": 0,
                      "psnr": 0,
                      "quality_type": "HD",
                      "duration": 148003,
                      "audio_channels": 2,
                      "sr": 0,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/258/01e796f20f073d010103700194a5a50d20_258.mp4",
                      "width": 1280,
                      "volume": 0,
                      "stream_type": 258,
                      "default_stream": 0,
                      "audio_codec": "aac",
                      "opaque1": {
                        "use_pcdn": "0",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false",
                        "pcdn_supplier": ""
                      },
                      "size": 24518295,
                      "avg_bitrate": 1325286,
                      "video_bitrate": 1262674,
                      "video_duration": 148000,
                      "vmaf": -1,
                      "stream_desc": "X264_MP4",
                      "height": 720,
                      "rotate": 0,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/258/01e796f20f073d010103700194a5a50d20_258.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/258/01e796f20f073d010103700194a5a50d20_258.mp4"
                      ],
                      "ssim": 0
                    }
                  ],
                  "h265": [
                    {
                      "video_bitrate": 594696,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/49/01e796f20f073d010103700394a99acf24_49.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/49/01e796f20f073d010103700394a99acf24_49.mp4"
                      ],
                      "hdr_type": 0,
                      "sr": 0,
                      "duration": 148003,
                      "audio_codec": "aac",
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/49/01e796f20f073d010103700394a99acf24_49.mp4",
                      "default_stream": 1,
                      "format": "mp4",
                      "stream_desc": "R265_MP4_720P_49_ANDROID",
                      "video_codec": "hevc",
                      "quality_type": "HD",
                      "audio_duration": 148002,
                      "audio_channels": 2,
                      "opaque1": {
                        "roiWeight": "70.10256000000001",
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"2.0E-5\",\"mvmaf\":\"81.99648\"}",
                        "use_pcdn": "1",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false"
                      },
                      "stream_type": 49,
                      "height": 720,
                      "volume": 0,
                      "vmaf": -1,
                      "width": 1280,
                      "fps": 30,
                      "video_duration": 148000,
                      "ssim": 0,
                      "rotate": 0,
                      "psnr": 39.88999938964844,
                      "weight": 49,
                      "size": 13495417,
                      "avg_bitrate": 729467,
                      "audio_bitrate": 128121
                    },
                    {
                      "video_bitrate": 1074681,
                      "sr": 0,
                      "volume": 0,
                      "video_duration": 148000,
                      "width": 1920,
                      "fps": 30,
                      "vmaf": -1,
                      "height": 1080,
                      "format": "mp4",
                      "audio_codec": "aac",
                      "audio_channels": 2,
                      "stream_type": 85,
                      "audio_duration": 148002,
                      "video_codec": "hevc",
                      "audio_bitrate": 128121,
                      "rotate": 0,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/1/110/85/01e796f20f073d010103700194a5a669eb_85.mp4",
                      "quality_type": "FHD",
                      "default_stream": 0,
                      "avg_bitrate": 1209440,
                      "opaque1": {
                        "didLoudnorm": "false",
                        "roiWeight": "69.31021999999999",
                        "pcdn_supplier": "",
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"2.0E-5\",\"mvmaf\":\"90.80384\"}",
                        "use_pcdn": "1",
                        "pcdn_302_flag": "false"
                      },
                      "size": 22375112,
                      "duration": 148003,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/1/110/85/01e796f20f073d010103700194a5a669eb_85.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/1/110/85/01e796f20f073d010103700194a5a669eb_85.mp4"
                      ],
                      "hdr_type": 0,
                      "psnr": 40.38199996948242,
                      "ssim": 0,
                      "weight": 50,
                      "stream_desc": "R265_MP4_1080P_85_and_low"
                    }
                  ],
                  "h266": [],
                  "av1": []
                }
              },
              "image": {
                "thumbnail_dim": "https://sns-na-i8-a.xhscdn.com/110/0/01e796f20f073d0100100000000194a5a3c4a1_0.webp?imageView2/2/w/720/h/720/format/heif/q/46|imageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_SPRT&sign=c276bfcbb8563933166526eef666e9f9&t=69854c69",
                "thumbnail": "https://sns-na-i8-a.xhscdn.com/110/0/01e796f20f073d0100100000000194a5a3c4a1_0.webp?imageView2/2/w/5000/h/5000/format/heif/q/56&redImage/frame/0&ap=5&sc=SRH_ORG&sign=c276bfcbb8563933166526eef666e9f9&t=69854c69"
              }
            },
            "nice_count": 18,
            "collected": false,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "interaction_area": {
              "status": false,
              "text": "312",
              "type": 1
            },
            "update_time": 1767172798000,
            "desc": "川红橘版陈皮制作方法，超详细新手小白必看\n又到了川红桔成熟的季节，每一年，我都会自己做一些川红桔的陈皮。\n川红桔的陈皮，是真正入药的陈皮。\n\t\n川红桔因为不够甜，所以不受果农青睐，也因为农村建设，老树也越来越少，真的物以稀为贵了。\n\t\n因为川红桔是纯野生状态，所以用清水和面粉洗去表面浮灰即可。\n擦干或晾干表皮水分，然后用四刀法开成四瓣皮。\n开好的皮，先晾一个下午，等皮的水分蒸发变软后，就可以进行翻皮。\n将翻好的皮，放在太阳下生晒，天气好的情况下，2-3天即可晒干。\n\t\n晒好的皮，通风散热，然后放进密封罐中保存，之后每年可以翻晒2-3次，保持干燥。\n\t\n剥出来的果肉也有大用处，可以做成食用酵素或",
            "user": {
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "userid": "6707cf7f000000001d031495",
              "FStatus": "none",
              "nickname": "阿桢慧食养",
              "red_official_verify_type": 0,
              "track_duration": 0,
              "followed": false,
              "red_id": "peng81079",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31aikgbfjn26g5po7ptvne54l6a362h8?imageView2/2/w/80/format/jpg"
            }
          }
        },
        {
          "model_type": "note",
          "note": {
            "xsec_token": "YB9IyYZUkNK8MEtRpJwknSsLj1TMDLP_XqWbBopZmcXl8=",
            "has_music": false,
            "timestamp": 1740060558,
            "update_time": 1740060611000,
            "geo_info": {
              "distance": ""
            },
            "note_attributes": [],
            "collected_count": 8,
            "last_update_time": 0,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "note_collection",
                    "cooperate_binds",
                    "rec_next_infos",
                    "video_marks",
                    "product_review",
                    "related_search",
                    "video_goods_cards",
                    "cooperate_comment_component",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "video_recommend_tag",
                    "buyable_goods_card_v2",
                    "cooperate_search_component",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "related_recommend",
                    "next_note_guide",
                    "widgets_ndb",
                    "pgy_bbc_exp",
                    "brand_max_trailer",
                    "super_activity",
                    "note_nice_guide",
                    "pin_search_highlights",
                    "widgets_enhance",
                    "packed_goods",
                    "packed_buyable_goods",
                    "widgets_ncb",
                    "note_nice_compound",
                    "live_shooting_flag",
                    "widgets_nbb",
                    "poi_declare",
                    "async_group"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "guide_post",
                    "video_foot_bar",
                    "follow_guide",
                    "share_to_msg",
                    "note_share_prompt_v1",
                    "note_share_prompt_v2",
                    "group_share",
                    "share_guide_bubble",
                    "goods_enhance_component",
                    "guide_navigator",
                    "sync_group"
                  ]
                }
              ]
            },
            "liked": false,
            "abstract_show": "爱上喝陈皮！…• 制作步骤：陈皮洗净，放入锅中，加适量水，大火煮开后转小火煮15-20分钟。 若喜欢甜口，可在煮好后加入适量冰糖或蜂蜜调味。",
            "video_info_v2": {
              "media": {
                "video_id": 137279757846324540,
                "video": {
                  "biz_name": 110,
                  "biz_id": "281394950972241270",
                  "hdr_type": 0,
                  "bound": [
                    {
                      "w": 0,
                      "h": 0,
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "height": 1280,
                  "duration": 12,
                  "md5": "c8a89d8d9207f6a7f69b74932850a495",
                  "drm_type": 0,
                  "stream_types": [
                    258,
                    49
                  ],
                  "opaque1": {
                    "amend": "8",
                    "amend_2k": "25",
                    "amend_4k": "25",
                    "weakNetUserFlag": "1",
                    "domestic": "0",
                    "hasHumanVoice": "false",
                    "isSupportSubtitle": "false",
                    "amend_mobile": "40",
                    "loudnorm": "{\"lra\":0.4,\"htp\":-18.41,\"hldn\":-28.89,\"ldn\":-28.78,\"thr\":-38.78}"
                  },
                  "width": 720
                },
                "stream": {
                  "h264": [
                    {
                      "video_codec": "h264",
                      "audio_duration": 11051,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/79/110/258/01e7b7366148253b4f0370019523b1204f_258.mp4",
                      "ssim": 0,
                      "sr": 0,
                      "opaque1": {
                        "didLoudnorm": "true",
                        "pcdn_supplier": "",
                        "use_pcdn": "0",
                        "pcdn_302_flag": "false"
                      },
                      "fps": 26,
                      "video_duration": 11000,
                      "vmaf": -1,
                      "weight": 49,
                      "stream_type": 258,
                      "stream_desc": "X264_MP4",
                      "quality_type": "HD",
                      "width": 720,
                      "volume": 0,
                      "avg_bitrate": 1006700,
                      "audio_codec": "aac",
                      "duration": 11053,
                      "hdr_type": 0,
                      "psnr": 0,
                      "format": "mp4",
                      "height": 1280,
                      "video_bitrate": 946928,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/79/110/258/01e7b7366148253b4f0370019523b1204f_258.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/79/110/258/01e7b7366148253b4f0370019523b1204f_258.mp4"
                      ],
                      "default_stream": 0,
                      "size": 1390882,
                      "audio_bitrate": 56346,
                      "audio_channels": 2,
                      "rotate": 0
                    }
                  ],
                  "h265": [
                    {
                      "height": 1280,
                      "volume": 0,
                      "hdr_type": 0,
                      "default_stream": 1,
                      "width": 720,
                      "fps": 26,
                      "video_bitrate": 526617,
                      "psnr": 43.22100067138672,
                      "rotate": 0,
                      "backup_urls": [
                        "http://sns-bak-v8.xhscdn.com/stream/79/110/49/01e7b7366148253b010370039524dd06fa_49.mp4",
                        "http://sns-bak-v10.xhscdn.com/stream/79/110/49/01e7b7366148253b010370039524dd06fa_49.mp4"
                      ],
                      "audio_codec": "aac",
                      "duration": 11053,
                      "video_codec": "hevc",
                      "audio_channels": 2,
                      "format": "mp4",
                      "video_duration": 11000,
                      "audio_duration": 11051,
                      "master_url": "http://sns-video-zl-a.xhscdn.com/stream/79/110/49/01e7b7366148253b010370039524dd06fa_49.mp4",
                      "vmaf": -1,
                      "stream_type": 49,
                      "audio_bitrate": 128545,
                      "opaque1": {
                        "roi_info": "{\"alpha\":\"1.0\",\"gamma\":\"0.0\",\"lambda\":\"2.0E-5\",\"mvmaf\":\"81.99648\"}",
                        "use_pcdn": "1",
                        "pcdn_302_flag": "false",
                        "didLoudnorm": "false",
                        "roiWeight": "71.46414",
                        "pcdn_supplier": ""
                      },
                      "stream_desc": "R265_MP4_720P_49_ANDROID",
                      "size": 912888,
                      "weight": 50,
                      "quality_type": "HD",
                      "sr": 0,
                      "avg_bitrate": 660735,
                      "ssim": 0
                    }
                  ],
                  "h266": [],
                  "av1": []
                },
                "user_level": 0
              },
              "image": {
                "thumbnail": "https://sns-na-i8-a.xhscdn.com/110/0/01e7b7366148253b0010000000019523b10e99_0.webp?imageView2/2/w/5000/h/5000/format/heif/q/56&redImage/frame/0&ap=5&sc=SRH_ORG&sign=7492c590fc0f864b3595c81fde34dd0b&t=69854c69",
                "thumbnail_dim": "https://sns-na-i8-a.xhscdn.com/110/0/01e7b7366148253b0010000000019523b10e99_0.webp?imageView2/2/w/720/h/720/format/heif/q/46|imageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_SPRT&sign=7492c590fc0f864b3595c81fde34dd0b&t=69854c69"
              },
              "capa": {
                "duration": 11,
                "frame_ts": 0,
                "is_user_select": false,
                "is_upload": false
              },
              "consumer": {
                "can_super_resolution": false
              }
            },
            "shared_count": 1,
            "id": "67b7378e000000001201f576",
            "user": {
              "red_id": "177869438",
              "nickname": "仰望着",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/5ec77a15000000000101e85c.jpg?imageView2/2/w/80/format/jpg",
              "red_official_verify_type": 0,
              "userid": "5ec77a15000000000101e85c",
              "track_duration": 0,
              "followed": false,
              "FStatus": "none",
              "show_red_official_verify_icon": false,
              "red_official_verified": false
            },
            "corner_tag_info": [
              {
                "text": "RA22Dx3/zTJ8SJikQaWqXLPRZT4K0ahAs2qdf7CznI0A/QgxxUNU7gLx/u9UjEqzjzEbNFLBaIhYY7SsoB0FJhiKL/zTH2uZo1",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token",
                "icon": ""
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-02-20",
                "text_en": "2025-02-20",
                "style": 0
              },
              {
                "location": 0,
                "style": 0,
                "poi_id": "423030313536474B5557"
              }
            ],
            "result_from": "",
            "widgets_context": "{\"video\":true,\"origin_video_key\":\"pre_post/1040g2t031e4jk88ogs005nm7f8agbq2sco4i898\",\"flags\":{\"sound_track\":true},\"author_id\":\"5ec77a15000000000101e85c\",\"author_name\":\"仰望着\",\"video_duration\":11}",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "images_list": [
              {
                "height": 1280,
                "width": 720,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g00831e4jor3s0s005nm7f8agbq2sacrs0go?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=37ce42714d0d4deb0aafa15c5310bc21&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831e4jor3s0s005nm7f8agbq2sacrs0go?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=37ce42714d0d4deb0aafa15c5310bc21&t=69854c69",
                "original": "",
                "trace_id": "1040g00831e4jor3s0s005nm7f8agbq2sacrs0go",
                "need_load_original_image": false,
                "fileid": "1040g00831e4jor3s0s005nm7f8agbq2sacrs0go"
              }
            ],
            "debug_info_str": "",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "9"
            },
            "collected": false,
            "extract_text_enabled": 0,
            "nice_count": 0,
            "niced": false,
            "comments_count": 0,
            "desc": "爱上喝陈皮！\n#陈皮[话题]# #泡茶[话题]# #滋补品[话题]#\n陈皮煮水是一种常见的养生饮品\n制作方法\n• 材料准备：陈皮5-10克（可根据个人口味调整）、清水适量，可依个人喜好准备冰糖或蜂蜜。\n• 制作步骤：陈皮洗净，放入锅中，加适量水，大火煮开后转小火煮15-20分钟。若喜欢甜口，可在煮好后加入适量冰糖或蜂蜜调味。\n功效作用\n• 理气健脾：有助于调节脾胃气滞，改善脾胃功能，缓解消化不良、食欲不振、腹胀等症状。\n• 燥湿化痰：对湿邪困脾所致的痰多、咳嗽等有一定缓解作用，能稀释痰液，促进排出。\n• 促进消化：含有挥发油、橙皮苷等，可促进消化液分泌，增强胃肠蠕动，有助于食物消化吸收，减轻胃",
            "liked_count": 9,
            "cover_image_index": 0,
            "type": "video"
          }
        },
        {
          "model_type": "note",
          "note": {
            "nice_count": 0,
            "xsec_token": "YBv_CE01L_pwhoCgrNNp2slJGc-V8_09JgYI7Cfak0NrM=",
            "liked_count": 17,
            "collected_count": 11,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "type": "normal",
            "user": {
              "track_duration": 0,
              "followed": false,
              "nickname": "Drinkinn",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31n64f2o7li005pjhl690u4f60sktsp0?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "userid": "6671a99200000000030311e6",
              "FStatus": "none",
              "red_id": "kimodesign",
              "red_official_verify_type": 0,
              "red_official_verified": false
            },
            "images_list": [
              {
                "width": 1190,
                "url": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s2idjh83u005pjhl690u4f6hmn1evg?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3a74f0dd428bfe27d0ce1ba85f531ce3&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s2idjh83u005pjhl690u4f6hmn1evg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=3a74f0dd428bfe27d0ce1ba85f531ce3&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031s2idjh83u005pjhl690u4f6hmn1evg",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g0k031s2idjh83u005pjhl690u4f6hmn1evg",
                "height": 1684
              },
              {
                "fileid": "spectrum/1040g0k031s2idjh83u0g5pjhl690u4f6k4gqh9g",
                "height": 1684,
                "width": 1190,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s2idjh83u0g5pjhl690u4f6k4gqh9g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=4b5242b1033295960bcc5c0eb92c5f1a&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031s2idjh83u0g5pjhl690u4f6k4gqh9g",
                "need_load_original_image": false
              },
              {
                "need_load_original_image": false,
                "fileid": "spectrum/1040g0k031s2idjh83u105pjhl690u4f6f3r15vo",
                "height": 1684,
                "width": 1190,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s2idjh83u105pjhl690u4f6f3r15vo?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=116a93a18f3d20d06eb13c7dd68bd75c&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031s2idjh83u105pjhl690u4f6f3r15vo"
              },
              {
                "width": 1190,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s2idjh83u1g5pjhl690u4f6k7n9tio?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=2fbfd7e70768bbfe9393874959d065d3&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031s2idjh83u1g5pjhl690u4f6k7n9tio",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g0k031s2idjh83u1g5pjhl690u4f6k7n9tio",
                "height": 1684
              },
              {
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s2idjh83u205pjhl690u4f6jpi92d8?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=8f9b88be0679d8ca338291b730288fe8&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031s2idjh83u205pjhl690u4f6jpi92d8",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g0k031s2idjh83u205pjhl690u4f6jpi92d8",
                "height": 1684,
                "width": 1190
              }
            ],
            "geo_info": {
              "distance": ""
            },
            "id": "697fe1d8000000002103d857",
            "has_music": false,
            "note_attributes": [],
            "desc": "一天认识一款养生食材，今天要介绍的是：陈皮 陈皮是成熟柑橘皮干制（以新会陈皮最有代表性），中医常用来理气健脾、燥湿化痰",
            "cover_image_index": 0,
            "niced": false,
            "timestamp": 1770004858,
            "extract_text_enabled": 0,
            "shared_count": 2,
            "result_from": "",
            "widgets_context": "{\"flags\":{},\"author_id\":\"6671a99200000000030311e6\",\"author_name\":\"Drinkinn\"}",
            "interaction_area": {
              "text": "17",
              "type": 1,
              "status": false
            },
            "comments_count": 0,
            "liked": false,
            "title": "陈皮的4种泡水搭配",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "last_update_time": 0,
            "debug_info_str": "",
            "corner_tag_info": [
              {
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RArF8iVVOmRd6mq94NciOijPLSFdWPS1kw2RqN5vNPRZTnw24KUTEJwoRzExz9xdYek2CxMcBWD3UNHa61ncfsowZexKYpG7K3",
                "text_en": "",
                "style": 0,
                "location": -1
              },
              {
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "3天前",
                "text_en": "3 days ago",
                "style": 0,
                "location": 5,
                "type": "publish_time"
              }
            ],
            "collected": false,
            "update_time": 1770004858000
          }
        },
        {
          "model_type": "note",
          "note": {
            "note_attributes": [],
            "corner_tag_info": [
              {
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAPRquToORQNiBT2dIB8JopUFcBz2rVbiM23NzUBtCV4PPvoqaK22VL4nrrI//6c+43RLYFHFuu67S5s2j0cB5ryiugePCJ7Bn",
                "text_en": "",
                "style": 0,
                "location": -1
              },
              {
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "4天前",
                "text_en": "4 days ago",
                "style": 0,
                "location": 5
              }
            ],
            "geo_info": {
              "distance": ""
            },
            "desc": "挖到宝了！原来陈皮不止是煲汤配角，泡水喝搭配不同食材，直接解锁8大养生功效✨ ✅ 陈皮+普洱 → 祛湿化痰，久坐水肿党必",
            "last_update_time": 0,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "9"
            },
            "nice_count": 0,
            "title": "陈皮泡水的神仙搭配！8种喝法告别小毛病",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "has_music": false,
            "liked_count": 9,
            "widgets_context": "{\"flags\":{},\"author_id\":\"5b6655a9013ebe000197c556\",\"author_name\":\"大城小医徐医生\"}",
            "liked": false,
            "cover_image_index": 0,
            "id": "697f7292000000000a0289da",
            "user": {
              "red_id": "dcxyxys1",
              "nickname": "大城小医徐医生",
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "track_duration": 0,
              "FStatus": "none",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/5f895eec005d20000196bcf4.jpg?imageView2/2/w/80/format/jpg",
              "userid": "5b6655a9013ebe000197c556",
              "followed": false
            },
            "images_list": [
              {
                "trace_id": "notes_pre_post/1040g3k831s24nr1e42704a9fc6aqjhamgt0h1n0",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s24nr1e42704a9fc6aqjhamgt0h1n0",
                "height": 2364,
                "width": 1773,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s24nr1e42704a9fc6aqjhamgt0h1n0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=7336e86812af3168e4ffd013aa6e5aec&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s24nr1e42704a9fc6aqjhamgt0h1n0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=7336e86812af3168e4ffd013aa6e5aec&t=69854c69",
                "original": ""
              },
              {
                "height": 2364,
                "width": 1773,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831s24nr1e427g4a9fc6aqjham6otgbdg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=2a0344a6e9a8fe7f024f89bf274b9269&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831s24nr1e427g4a9fc6aqjham6otgbdg",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831s24nr1e427g4a9fc6aqjham6otgbdg"
              }
            ],
            "timestamp": 1769960082,
            "extract_text_enabled": 0,
            "collected_count": 18,
            "type": "normal",
            "collected": false,
            "shared_count": 8,
            "update_time": 1769960121000,
            "xsec_token": "YBv_CE01L_pwhoCgrNNp2slFBHIuHGzJ-_umYQYYKRKYw=",
            "result_from": "",
            "niced": false,
            "comments_count": 0,
            "debug_info_str": ""
          }
        },
        {
          "model_type": "note",
          "note": {
            "update_time": 1741168153000,
            "desc": "✨今日主角：陈皮✨ 🌿药性： 陈皮，性温，味辛、苦，归脾、肺经。 🌿功效： 理气健脾，燥湿化痰，止咳平喘。 🌿配伍",
            "collected": false,
            "note_attributes": [],
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "extract_text_enabled": 0,
            "type": "normal",
            "user": {
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo3163imv290m005n1s1u81morqac78tvg?imageView2/2/w/80/format/jpg",
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "followed": false,
              "FStatus": "none",
              "userid": "5c3c0f90000000000603637a",
              "track_duration": 0,
              "red_id": "505860211",
              "nickname": "豐"
            },
            "widgets_context": "{\"flags\":{},\"author_id\":\"5c3c0f90000000000603637a\",\"author_name\":\"豐\"}",
            "timestamp": 1741168111,
            "corner_tag_info": [
              {
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAT9oxzbA6FDUG0dRnwe70fMVUrYFnuJvVGIt4WFYL2ztyC/GrNV17og8769+zCIC0wb05FdnUHdkQjzAWU3fDJn2cGBRS6x9N",
                "text_en": "",
                "style": 0
              },
              {
                "style": 0,
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-03-05",
                "text_en": "2025-03-05"
              }
            ],
            "nice_count": 0,
            "xsec_token": "YB3K8cRyP-pnfp8PvuCb3E5vij4_aCoktNJi9HJ3JuVNg=",
            "liked_count": 6,
            "cover_image_index": 0,
            "geo_info": {
              "distance": ""
            },
            "interaction_area": {
              "status": false,
              "text": "6",
              "type": 1
            },
            "last_update_time": 0,
            "shared_count": 2,
            "comments_count": 1,
            "id": "67c81def000000002903b065",
            "tag_info": {
              "type": "",
              "title": ""
            },
            "result_from": "",
            "niced": false,
            "collected_count": 1,
            "title": "一天认识一味中药——【陈皮】",
            "images_list": [
              {
                "height": 750,
                "width": 500,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831el3pg0uku005n1s1u81morqb22avbg?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=02b5ba73f1c29fb9485ee9c6ae7f5801&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831el3pg0uku005n1s1u81morqb22avbg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=02b5ba73f1c29fb9485ee9c6ae7f5801&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831el3pg0uku005n1s1u81morqb22avbg",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831el3pg0uku005n1s1u81morqb22avbg"
              }
            ],
            "debug_info_str": "",
            "liked": false,
            "has_music": false
          }
        },
        {
          "model_type": "note",
          "note": {
            "id": "6984bfe8000000000c03616b",
            "title": "无锡存陈皮之如何煮陈皮水",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "1"
            },
            "type": "normal",
            "last_update_time": 0,
            "niced": false,
            "liked": false,
            "tag_info": {
              "type": "",
              "title": ""
            },
            "update_time": 1770307599000,
            "xsec_token": "YB0HSxcmj4Nz0qfKWTUHTyol-gGh0XQYuyDQ3XTqduuHw=",
            "images_list": [
              {
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k031s7ajvaf5a6g4a7l1vbqonc29pvv6f0",
                "height": 2736,
                "width": 3648,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a6g4a7l1vbqonc29pvv6f0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=d4b4cfb205a4616844831c6df8c4a228&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a6g4a7l1vbqonc29pvv6f0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=d4b4cfb205a4616844831c6df8c4a228&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k031s7ajvaf5a6g4a7l1vbqonc29pvv6f0"
              },
              {
                "trace_id": "notes_pre_post/1040g3k031s7ajvaf5a604a7l1vbqonc25l8jdrg",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k031s7ajvaf5a604a7l1vbqonc25l8jdrg",
                "height": 3648,
                "width": 2736,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a604a7l1vbqonc25l8jdrg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=858b190dee40ca17e135d765fd32a50f&t=69854c69",
                "original": ""
              },
              {
                "original": "",
                "trace_id": "notes_pre_post/1040g3k031s7ajvaf5a4g4a7l1vbqonc27h7rqr0",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k031s7ajvaf5a4g4a7l1vbqonc27h7rqr0",
                "height": 3648,
                "width": 2736,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a4g4a7l1vbqonc27h7rqr0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=26faa61871917074c29ca072931ade6e&t=69854c69"
              },
              {
                "height": 3648,
                "width": 2736,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a004a7l1vbqonc2if7utoo?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=d5c861ff5511f921ed9c60c16c9fc9d0&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k031s7ajvaf5a004a7l1vbqonc2if7utoo",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k031s7ajvaf5a004a7l1vbqonc2if7utoo"
              },
              {
                "fileid": "notes_pre_post/1040g3k031s7ajvaf5a504a7l1vbqonc2sa8kl60",
                "height": 3056,
                "width": 4080,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a504a7l1vbqonc2sa8kl60?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=858bf059a90c8f09e33ecd6230c63c20&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k031s7ajvaf5a504a7l1vbqonc2sa8kl60",
                "need_load_original_image": false
              },
              {
                "width": 2736,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k031s7ajvaf5a5g4a7l1vbqonc2du76fno?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=df987339607ec4ecd385da88f65e75a2&t=69854c69",
                "original": "",
                "trace_id": "notes_pre_post/1040g3k031s7ajvaf5a5g4a7l1vbqonc2du76fno",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k031s7ajvaf5a5g4a7l1vbqonc2du76fno",
                "height": 3648
              }
            ],
            "cover_image_index": 0,
            "geo_info": {
              "distance": ""
            },
            "result_from": "",
            "collected": false,
            "extract_text_enabled": 0,
            "has_music": false,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "widgets_context": "{\"flags\":{},\"author_id\":\"5b5d57acf7e8b921b9eb5d82\",\"author_name\":\"夜空\"}",
            "nice_count": 0,
            "user": {
              "red_id": "600248755",
              "nickname": "夜空",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/5b5d57acf7e8b921b9eb5d82.jpg?imageView2/2/w/80/format/jpg",
              "userid": "5b5d57acf7e8b921b9eb5d82",
              "track_duration": 0,
              "followed": false,
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "FStatus": "none"
            },
            "collected_count": 0,
            "desc": "1、取一整片或者一角陈皮，用煮沸的热水泡发1分钟左右，根据陈皮泡发了为准。 2、用勺子将泡发的陈皮，内囊刮掉，为何要刮内",
            "timestamp": 1770307560,
            "debug_info_str": "",
            "note_attributes": [],
            "comments_count": 1,
            "liked_count": 1,
            "corner_tag_info": [
              {
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAj8UwCznzxDPMDn1D5tae8kSzAnXW+roxQtO6SWM7QbCMzY0jngbi8y4wfdYdqgg5e2bENXClji2fA0VKAtQC0VB5Md3JPZC1",
                "text_en": ""
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "9小时前",
                "text_en": "9 hrs ago",
                "style": 0
              }
            ],
            "shared_count": 0
          }
        },
        {
          "model_type": "note",
          "note": {
            "images_list": [
              {
                "width": 1080,
                "url": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31pbdb9tp28105omga3q0g9rdi93o68g?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=02415bbcd18148656a90776d070e57bd&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31pbdb9tp28105omga3q0g9rdi93o68g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=02415bbcd18148656a90776d070e57bd&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g34o31pbdb9tp28105omga3q0g9rdi93o68g",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31pbdb9tp28105omga3q0g9rdi93o68g",
                "height": 1445
              }
            ],
            "result_from": "",
            "corner_tag_info": [
              {
                "icon": "",
                "text": "RAqOulftjR3IG3naW+8KMIMSQJF78dJ5UhHQ6ZtFcK0tZWQeClWt1U5QQJu2PbHp2+b+hcvOOROYIoyJcv7NE4aSB56zXcuiNi",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token"
              },
              {
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-11-26",
                "text_en": "2025-11-26",
                "style": 0,
                "location": 5,
                "type": "publish_time"
              }
            ],
            "extract_text_enabled": 0,
            "user": {
              "show_red_official_verify_icon": false,
              "userid": "62d050f4000000000200276d",
              "track_duration": 0,
              "followed": false,
              "FStatus": "none",
              "red_id": "5435875063",
              "red_official_verify_type": 0,
              "nickname": "小鹏爱喝皮",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31o4o0nlpmm605omga3q0g9rd8bolv3g?imageView2/2/w/80/format/jpg",
              "red_official_verified": false
            },
            "geo_info": {
              "distance": ""
            },
            "note_attributes": [],
            "shared_count": 1,
            "cover_image_index": 0,
            "has_music": false,
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "widgets_context": "{\"flags\":{},\"author_id\":\"62d050f4000000000200276d\",\"author_name\":\"小鹏爱喝皮\"}",
            "nice_count": 0,
            "collected_count": 0,
            "desc": "是不是总觉得陈皮越黑越老越值钱？其实大错特错！很多人被 “黑皮 = 老陈皮” 的误区坑过，花大价钱买了人工造假的工艺皮",
            "timestamp": 1764139320,
            "last_update_time": 0,
            "title": "不会还有人觉得陈皮约黑越值钱吧",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "niced": false,
            "update_time": 1764139363000,
            "abstract_show": "不会还有人觉得陈皮约黑越值钱吧…#新会陈皮 #陈皮 #陈皮白茶",
            "liked_count": 1,
            "xsec_token": "YBsj-0JMDa9UeOqltWaM6vbPhwSyw2YEJeMvOKv91debM=",
            "type": "normal",
            "id": "6926a138000000001b033ce2",
            "debug_info_str": "",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "1"
            },
            "collected": false,
            "comments_count": 4,
            "liked": false
          }
        },
        {
          "model_type": "note",
          "note": {
            "timestamp": 1738988373,
            "collected": false,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "images_list": [
              {
                "need_load_original_image": false,
                "fileid": "1040g00831dkkgi7lh0005ogh0j0k1k4ql6m1p10",
                "height": 2560,
                "width": 1920,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g00831dkkgi7lh0005ogh0j0k1k4ql6m1p10?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=7b777bdf10b18ee42ebccba05b8f3f4a&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831dkkgi7lh0005ogh0j0k1k4ql6m1p10?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=7b777bdf10b18ee42ebccba05b8f3f4a&t=69854c69",
                "original": "",
                "trace_id": "1040g00831dkkgi7lh0005ogh0j0k1k4ql6m1p10"
              },
              {
                "fileid": "1040g00831dkkgi7lh00g5ogh0j0k1k4qh1rddeg",
                "height": 4032,
                "width": 3024,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831dkkgi7lh00g5ogh0j0k1k4qh1rddeg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=d685f0d9e6373aba22337013395a0afc&t=69854c69",
                "original": "",
                "trace_id": "1040g00831dkkgi7lh00g5ogh0j0k1k4qh1rddeg",
                "need_load_original_image": false
              },
              {
                "trace_id": "1040g00831dkkgi7lh0105ogh0j0k1k4qrln6tag",
                "need_load_original_image": false,
                "fileid": "1040g00831dkkgi7lh0105ogh0j0k1k4qrln6tag",
                "height": 4032,
                "width": 3024,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831dkkgi7lh0105ogh0j0k1k4qrln6tag?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=bf7c74fd02a041a0b7053955220f8b53&t=69854c69",
                "original": ""
              },
              {
                "fileid": "1040g00831dkkgi7lh01g5ogh0j0k1k4qju3p360",
                "height": 897,
                "width": 1284,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831dkkgi7lh01g5ogh0j0k1k4qju3p360?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=a8bb5d4ea3597c60311b00539953cb22&t=69854c69",
                "original": "",
                "trace_id": "1040g00831dkkgi7lh01g5ogh0j0k1k4qju3p360",
                "need_load_original_image": false
              }
            ],
            "result_from": "",
            "advanced_widgets_groups": {
              "groups": [
                {
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ],
                  "mode": 1
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "shared_count": 0,
            "update_time": 1738990033000,
            "liked": false,
            "user": {
              "userid": "621104c1000000001000d09a",
              "red_id": "6584076302",
              "nickname": "易懂茶",
              "red_official_verify_type": 0,
              "red_official_verified": false,
              "track_duration": 0,
              "followed": false,
              "FStatus": "none",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31h6vblv0ju005ogh0j0k1k4qschpfig?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false
            },
            "extract_text_enabled": 0,
            "niced": false,
            "note_attributes": [],
            "nice_count": 0,
            "liked_count": 0,
            "last_update_time": 0,
            "collected_count": 0,
            "widgets_context": "{\"flags\":{},\"author_id\":\"621104c1000000001000d09a\",\"author_name\":\"易懂茶\"}",
            "interaction_area": {
              "status": false,
              "text": "0",
              "type": 1
            },
            "id": "67a6db55000000001701d9ea",
            "title": "陈皮的功效",
            "has_music": false,
            "cover_image_index": 0,
            "comments_count": 0,
            "desc": "以前图为实物拍摄，新会陈皮 陈皮是一种常用的中药材，主要由晒干的橘子皮制成。它具有多种药理作用和健康益处，以下是陈皮的主",
            "type": "normal",
            "corner_tag_info": [
              {
                "text": "RA/5jj5qAQY+cFCsePPUNhvO/tLGmje8MSCCZm/8vQFMXMBJTtQeYcl7uSJxu+YBRvqJg8Q0+TtS4sjNJ5rPf5XoGLSMpG3LQX",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token",
                "icon": ""
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-02-08",
                "text_en": "2025-02-08",
                "style": 0
              }
            ],
            "xsec_token": "YBEZFT2jvdkiYc6jhSpSbhv79qFGUrknUjaG7H725g4ls=",
            "debug_info_str": "",
            "geo_info": {
              "distance": ""
            }
          }
        },
        {
          "note": {
            "tag_info": {
              "title": "",
              "type": ""
            },
            "collected": false,
            "nice_count": 0,
            "liked_count": 2,
            "user": {
              "followed": false,
              "FStatus": "none",
              "red_official_verify_type": 0,
              "track_duration": 0,
              "red_id": "26291477779",
              "nickname": "墨北",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31fha9pjt6e005pr637u62h03r5u2sh8?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "userid": "676619fc0000000018014403"
            },
            "update_time": 1762265083000,
            "type": "normal",
            "timestamp": 1762150750,
            "id": "6908495e0000000003034c25",
            "result_from": "",
            "liked": false,
            "images_list": [
              {
                "original": "",
                "trace_id": "notes_pre_post/1040g3k831odp026emg005pr637u62h03slieb4g",
                "need_load_original_image": false,
                "fileid": "notes_pre_post/1040g3k831odp026emg005pr637u62h03slieb4g",
                "height": 800,
                "width": 800,
                "url": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831odp026emg005pr637u62h03slieb4g?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=002250cdb883c02098fbf26767499041&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/notes_pre_post/1040g3k831odp026emg005pr637u62h03slieb4g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=002250cdb883c02098fbf26767499041&t=69854c69"
              }
            ],
            "corner_tag_info": [
              {
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAAetaR9Gzwgu+88kdkWPVoI7epwag02wzzxsL8A2urh8mXGJxS6t5fQTT2Lb7XrBivSDPxyer0wJcpFA70pwy/QLOPrO/C2g5"
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "2025-11-03",
                "text_en": "2025-11-03",
                "style": 0
              }
            ],
            "widgets_context": "{\"flags\":{},\"author_id\":\"676619fc0000000018014403\",\"author_name\":\"墨北\"}",
            "title": "新会陈皮（一）",
            "debug_info_str": "",
            "geo_info": {
              "distance": ""
            },
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "xsec_token": "YB1kPEw70M6PT8DTn148_cikHzySQlZZ4xG230kBPWz8U=",
            "has_music": false,
            "last_update_time": 0,
            "shared_count": 1,
            "niced": false,
            "cover_image_index": 0,
            "extract_text_enabled": 0,
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "2"
            },
            "collected_count": 1,
            "comments_count": 0,
            "desc": "新会陈皮，被誉为“广东三宝”之首，是广东省江门市新会区特产的一种茶枝柑的果皮，经过特定工艺陈化三年及以上而成。一、 核心",
            "note_attributes": []
          },
          "model_type": "note"
        },
        {
          "note": {
            "shared_count": 2,
            "timestamp": 1769938218,
            "debug_info_str": "",
            "collected_count": 8,
            "has_music": false,
            "update_time": 1770046912000,
            "desc": "姐妹，买陈皮前一定要看完！ 选错不仅浪费钱，还可能适得其反⚠️ 🍊 看采摘时间，决定一切！ 青皮是立秋到秋分摘，果子还",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "7"
            },
            "xsec_token": "YBNjUVb9Bi_lS3e0T1K3X0v4Miev4LXpiKIB5XqWdUDoI=",
            "type": "normal",
            "images_list": [
              {
                "original": "",
                "trace_id": "spectrum/1040g34o31s1g60s3l2105n1aneihgd0qk959g1o",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31s1g60s3l2105n1aneihgd0qk959g1o",
                "height": 2364,
                "width": 1773,
                "url": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31s1g60s3l2105n1aneihgd0qk959g1o?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=2fa86708d6fe98b258b6f18af4dc0d85&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31s1g60s3l2105n1aneihgd0qk959g1o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=2fa86708d6fe98b258b6f18af4dc0d85&t=69854c69"
              },
              {
                "height": 2364,
                "width": 1773,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s1g62m4k4005n1aneihgd0q11il508?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=213770fe44a82455f17289dcc77a51e3&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g0k031s1g62m4k4005n1aneihgd0q11il508",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g0k031s1g62m4k4005n1aneihgd0q11il508"
              },
              {
                "trace_id": "spectrum/1040g0k031s1g64bi3u005n1aneihgd0qlfmq99o",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g0k031s1g64bi3u005n1aneihgd0qlfmq99o",
                "height": 2274,
                "width": 1773,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g0k031s1g64bi3u005n1aneihgd0qlfmq99o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=fd951d3cc932a020895c519b20dbd77f&t=69854c69",
                "original": ""
              },
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31s1g666ek4105n1aneihgd0q0v9nv7o?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=2fdb634e76c61d6999c374b44d0f1d66&t=69854c69",
                "original": "",
                "trace_id": "spectrum/1040g34o31s1g666ek4105n1aneihgd0q0v9nv7o",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31s1g666ek4105n1aneihgd0q0v9nv7o",
                "height": 2364,
                "width": 1773,
                "url": ""
              },
              {
                "original": "",
                "trace_id": "spectrum/1040g34o31s1g685kl2105n1aneihgd0q4j2m5og",
                "need_load_original_image": false,
                "fileid": "spectrum/1040g34o31s1g685kl2105n1aneihgd0q4j2m5og",
                "height": 2364,
                "width": 1773,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/spectrum/1040g34o31s1g685kl2105n1aneihgd0q4j2m5og?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=1fa18b8ed1a9ad8772ad9826121b8afc&t=69854c69"
              }
            ],
            "last_update_time": 0,
            "result_from": "",
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ],
                  "mode": 0
                }
              ]
            },
            "nice_count": 0,
            "extract_text_enabled": 0,
            "comments_count": 0,
            "id": "697ef640000000000c034f2a",
            "title": "终于有人把陈皮选购全说清楚了",
            "cover_image_index": 0,
            "geo_info": {
              "distance": ""
            },
            "note_attributes": [],
            "collected": false,
            "liked": false,
            "liked_count": 7,
            "user": {
              "followed": false,
              "FStatus": "none",
              "red_id": "QyChenpi",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31rtk37mnj20g5n1aneihgd0qmgror7g?imageView2/2/w/80/format/jpg",
              "nickname": "陈香入盏",
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "userid": "5c2abba5000000000600341a",
              "track_duration": 0
            },
            "tag_info": {
              "title": "",
              "type": ""
            },
            "corner_tag_info": [
              {
                "icon": "",
                "text": "RA8+5BccsoQ/mYsumIcHc5ZAWK5ns6XHBfN8aUM0pCsfqv+fwrKF/WtZuU2z29od9MO9hTHLB312JFOODlI7YKxnYYC0TigmU0",
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token"
              },
              {
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png",
                "text": "4天前",
                "text_en": "4 days ago",
                "style": 0
              }
            ],
            "widgets_context": "{\"flags\":{},\"author_id\":\"5c2abba5000000000600341a\",\"author_name\":\"陈香入盏\"}",
            "niced": false
          },
          "model_type": "note"
        },
        {
          "model_type": "note",
          "note": {
            "user": {
              "red_official_verify_type": 0,
              "show_red_official_verify_icon": false,
              "red_official_verified": false,
              "followed": false,
              "FStatus": "none",
              "red_id": "9521150392",
              "nickname": "9in-爱养生",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo318u3tu10k6005o2e38cg9008cndpt0g?imageView2/2/w/80/format/jpg",
              "userid": "604e1a190000000001008008",
              "track_duration": 0
            },
            "debug_info_str": "",
            "cover_image_index": 0,
            "extract_text_enabled": 0,
            "tag_info": {
              "title": "",
              "type": ""
            },
            "last_update_time": 0,
            "desc": "⭐️陈皮茯苓 作用:湿气重，代谢差人群，爱吃重口味的引起肥胖的人群 ⭐️陈皮山楂水 作用:促进消化，适合长期腹胀积食，消",
            "type": "normal",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "8840"
            },
            "note_attributes": [],
            "corner_tag_info": [
              {
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAH1KYgLA0F825arlZOF5dfANwKyObtkUO/DWLtIWS0eF5ltwv13fkd2gF/3jquDH99pSGA055zZ07L/tdxpx0W0l6HNuZqvgi",
                "text_en": "",
                "style": 0
              },
              {
                "text": "2024-10-31",
                "text_en": "2024-10-31",
                "style": 0,
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png"
              }
            ],
            "widgets_context": "{\"flags\":{},\"author_id\":\"604e1a190000000001008008\",\"author_name\":\"9in-爱养生\"}",
            "shared_count": 1980,
            "geo_info": {
              "distance": ""
            },
            "comments_count": 117,
            "xsec_token": "YByQ3UBKeEqGsVukWe3tWJdgGnL37A8GkZAXVKB0t7cAw=",
            "liked": false,
            "id": "6722f279000000003c0194b5",
            "timestamp": 1730343545,
            "nice_count": 0,
            "images_list": [
              {
                "height": 1720,
                "width": 1290,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n2705o2e38cg900847lm5n8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=e68fa029f499aa4af33f065345f1fa3e&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n2705o2e38cg900847lm5n8?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=e68fa029f499aa4af33f065345f1fa3e&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg319jqaum7n2705o2e38cg900847lm5n8",
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n2705o2e38cg900847lm5n8"
              },
              {
                "trace_id": "1040g2sg319jqaum7n27g5o2e38cg9008ptgpodg",
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n27g5o2e38cg9008ptgpodg",
                "height": 1720,
                "width": 1290,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n27g5o2e38cg9008ptgpodg?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=84b6554933fe84e8803f8af98d6bf285&t=69854c69",
                "original": ""
              },
              {
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n2805o2e38cg900871leud0",
                "height": 1720,
                "width": 1290,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n2805o2e38cg900871leud0?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=56c34a3ba8ce0aa027fdbece04d423ed&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg319jqaum7n2805o2e38cg900871leud0"
              },
              {
                "original": "",
                "trace_id": "1040g2sg319jqaum7n28g5o2e38cg90088jgsueo",
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n28g5o2e38cg90088jgsueo",
                "height": 1720,
                "width": 1290,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n28g5o2e38cg90088jgsueo?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=6280a9a4fb2dcd1f8bfbf1e61d3e2f0c&t=69854c69"
              },
              {
                "trace_id": "1040g2sg319jqaum7n2905o2e38cg90083vpfk4g",
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n2905o2e38cg90083vpfk4g",
                "height": 1720,
                "width": 1290,
                "url": "",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n2905o2e38cg90083vpfk4g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=5bdf6c2f0bc78182d72eac50a2b6ed19&t=69854c69",
                "original": ""
              },
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n29g5o2e38cg900833r2nro?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=3b0651156ade91445e577ab4efc3c620&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg319jqaum7n29g5o2e38cg900833r2nro",
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n29g5o2e38cg900833r2nro",
                "height": 1720,
                "width": 1290,
                "url": ""
              },
              {
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g2sg319jqaum7n2a05o2e38cg9008val5o9g?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=0f5c7508713dc7eb2c72ab44ff67c998&t=69854c69",
                "original": "",
                "trace_id": "1040g2sg319jqaum7n2a05o2e38cg9008val5o9g",
                "need_load_original_image": false,
                "fileid": "1040g2sg319jqaum7n2a05o2e38cg9008val5o9g",
                "height": 1720,
                "width": 1290,
                "url": ""
              }
            ],
            "result_from": "",
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "collected_count": 10802,
            "update_time": 1748435175000,
            "title": "中医：6种陈皮水减肥法！今天必须教会你们",
            "liked_count": 8840,
            "has_music": false,
            "collected": false,
            "niced": false
          }
        },
        {
          "model_type": "note",
          "note": {
            "debug_info_str": "",
            "interaction_area": {
              "type": 1,
              "status": false,
              "text": "8"
            },
            "collected": false,
            "liked": false,
            "id": "682c20eb00000000220072b1",
            "liked_count": 8,
            "corner_tag_info": [
              {
                "text_en": "",
                "style": 0,
                "location": -1,
                "type": "ubt_sig_token",
                "icon": "",
                "text": "RAyxUExOYwpteSXq6MxXDx3dhLIUw5Emp3ANPUZbS0yt/aeLEbOXrfyLiq11sn1Z59igntCGFqdx0Pj+l4LNAQHuzPqBwLM3Kt"
              },
              {
                "text": "2025-05-20",
                "text_en": "2025-05-20",
                "style": 0,
                "location": 5,
                "type": "publish_time",
                "icon": "http://picasso-static.xiaohongshu.com/fe-platform/e9b67af62f67d9d6cfac936f96ad10a85fdb868e.png"
              }
            ],
            "nice_count": 0,
            "desc": "🎉陈皮，犹如一颗璀璨的明珠，在中医药和美食领域都散发着独特的光芒。 📜《本草纲目》等诸多医书都对陈皮赞誉有加，其药用",
            "timestamp": 1747722475,
            "result_from": "",
            "title": "陈皮的神奇之旅",
            "tag_info": {
              "title": "",
              "type": ""
            },
            "last_update_time": 0,
            "type": "normal",
            "update_time": 1747722515000,
            "shared_count": 3,
            "niced": false,
            "xsec_token": "YBPtwzCg8RfPefwpB8KGsjqSjMuxgcNqrdwixR8FzXM20=",
            "user": {
              "userid": "668a797d0000000003031a92",
              "track_duration": 0,
              "FStatus": "none",
              "images": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo316d12n4t0u0g5pkaf5ugu6kioskohro?imageView2/2/w/80/format/jpg",
              "show_red_official_verify_icon": false,
              "red_official_verify_type": 0,
              "red_official_verified": false,
              "followed": false,
              "red_id": "26978789820",
              "nickname": "御品滋补堂"
            },
            "has_music": false,
            "extract_text_enabled": 0,
            "widgets_context": "{\"flags\":{},\"author_id\":\"668a797d0000000003031a92\",\"author_name\":\"御品滋补堂\"}",
            "collected_count": 2,
            "images_list": [
              {
                "original": "",
                "trace_id": "1040g00831hmp8d7p3q5g5pkaf5ugu6ki30idof8",
                "need_load_original_image": false,
                "fileid": "1040g00831hmp8d7p3q5g5pkaf5ugu6ki30idof8",
                "height": 1217,
                "width": 1123,
                "url": "https://sns-na-i8-a.xhscdn.com/1040g00831hmp8d7p3q5g5pkaf5ugu6ki30idof8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=5243976c8fa6b4ecb4913ea76ed50e3c&t=69854c69",
                "url_size_large": "https://sns-na-i8-a.xhscdn.com/1040g00831hmp8d7p3q5g5pkaf5ugu6ki30idof8?imageView2/2/w/1440/format/heif/q/45&redImage/frame/0&ap=5&sc=SRH_DTL&sign=5243976c8fa6b4ecb4913ea76ed50e3c&t=69854c69"
              }
            ],
            "geo_info": {
              "distance": ""
            },
            "advanced_widgets_groups": {
              "groups": [
                {
                  "mode": 1,
                  "fetch_types": [
                    "guos_test",
                    "note_next_step",
                    "second_jump_bar",
                    "cooperate_binds",
                    "note_collection",
                    "rec_next_infos",
                    "image_stickers",
                    "image_filters",
                    "product_review",
                    "related_search",
                    "cooperate_comment_component",
                    "image_goods_cards",
                    "ads_goods_cards",
                    "ads_comment_component",
                    "goods_card_v2",
                    "image_template",
                    "buyable_goods_card_v2",
                    "ads_engage_bar",
                    "challenge_card",
                    "cooperate_engage_bar",
                    "guide_post",
                    "pgy_comment_component",
                    "pgy_engage_bar",
                    "bar_below_image",
                    "aigc_collection",
                    "co_produce",
                    "widgets_ndb",
                    "next_note_guide",
                    "pgy_bbc_exp",
                    "async_group",
                    "super_activity",
                    "widgets_enhance",
                    "music_player",
                    "soundtrack_player"
                  ]
                },
                {
                  "mode": 0,
                  "fetch_types": [
                    "guos_test",
                    "vote_stickers",
                    "bullet_comment_lead",
                    "note_search_box",
                    "interact_pk",
                    "interact_vote",
                    "guide_heuristic",
                    "share_to_msg",
                    "follow_guide",
                    "note_share_prompt_v1",
                    "sync_group",
                    "group_share",
                    "share_guide_bubble",
                    "widgets_share",
                    "guide_navigator"
                  ]
                }
              ]
            },
            "cover_image_index": 0,
            "note_attributes": [],
            "comments_count": 1
          }
        }
      ],
      "search_pull_down_opt_exp": 1,
      "request_dqa_instant": false,
      "can_cut": false,
      "cur_cut_number": 0,
      "query_debug_info": {
        "is_forbidden": false
      },
      "dqa_authorized_user_by_shared": false,
      "ai_mode_enable": false,
      "query_intent": {
        "goodsIntent": 3,
        "search_ask_intent": true,
        "low_supply_intent": false
      }
    },
    "message": null,
    "recordTime": "2026-02-06T10:05:29.744443803"
  }
}
Response headers
 alt-svc: h3=":443"; ma=86400 
 cf-cache-status: DYNAMIC 
 cf-ray: 9c9715278aceaf88-SEA 
 content-encoding: gzip 
 content-type: application/json 
 date: Fri,06 Feb 2026 02:05:30 GMT 
 nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800} 
 report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0VWz%2FBspq02tASW%2BeQBloDJTu6O8ZDM0ovxg2%2B7sO0he7UI%2BXrHWhIVsifKsPv4v3vVrp8BxbZyFEG8NdyrlRxD%2FOn%2BqAfWooqA%3D"}]} 
 server: cloudflare 
 speculation-rules: "/cdn-cgi/speculation" 
 vary: Accept-Encoding 
 x-request-id: e81ac1c3-8f54-4b86-8b98-e4f5a9465393 
 x-upstream-response-time: - 
 x-upstream-server: 134.199.211.98:80 
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