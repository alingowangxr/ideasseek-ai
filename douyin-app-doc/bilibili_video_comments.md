GET
/api/v1/bilibili/web/fetch_video_comments
获取指定视频的评论/Get comments on the specified video


[中文]
用途:
获取指定视频的评论
参数:
bv_id: 作品id
pn: 页码
返回:
指定视频的评论数据
[English]
Purpose:
Get comments on the specified video
Parameters:
bv_id: Video id
pn: Page number
Return:
comments of the specified video
[示例/Example]
bv_id = "BV1M1421t7hT" pn = 1

Parameters
Cancel
Name	Description
bv_id *
string
(query)
作品id/Video id

BV1M1421t7hT
pn
integer
(query)
页码/Page number

1
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://api.tikhub.io/api/v1/bilibili/web/fetch_video_comments?bv_id=BV1M1421t7hT&pn=1' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer vZdfXsQag0amkXarPbOZ8S3nNTqVRrVysjLT4kjaa6yL0gTnBk/aTAi8aA=='
Request URL
https://api.tikhub.io/api/v1/bilibili/web/fetch_video_comments?bv_id=BV1M1421t7hT&pn=1
Server response
Code	Details
200	
Response body
Download
{
  "code": 200,
  "request_id": "9a888a6d-a305-405a-baee-afbebfc2d94c",
  "message": "Request successful. This request will incur a charge.",
  "message_zh": "请求成功，本次请求将被计费。",
  "support": "Discord: https://discord.gg/aMEAS8Xsvz",
  "time": "2026-02-05 16:31:33",
  "time_stamp": 1770337893,
  "time_zone": "America/Los_Angeles",
  "docs": "https://api.tikhub.io/#/Bilibili-Web-API/fetch_collect_folders_api_v1_bilibili_web_fetch_video_comments_get",
  "cache_message": "This request will be cached. You can access the cached result directly using the URL below, valid for 24 hours. Accessing the cache will not incur additional charges.",
  "cache_message_zh": "本次请求将被缓存，你可以使用下面的 URL 直接访问缓存结果，有效期为 24 小时，访问缓存不会产生额外费用。",
  "cache_url": "https://cache.tikhub.io/api/v1/cache/public/9a888a6d-a305-405a-baee-afbebfc2d94c?sign=d5b6e7f4b33e9ea5d621d1e4bd163eec68ab9e0886886275305e18161aef7803",
  "router": "/api/v1/bilibili/web/fetch_video_comments",
  "params": {
    "bv_id": "BV1M1421t7hT",
    "pn": "1"
  },
  "data": {
    "code": 0,
    "message": "OK",
    "ttl": 1,
    "data": {
      "page": {
        "num": 1,
        "size": 20,
        "count": 2240,
        "acount": 2240
      },
      "config": {
        "showtopic": 1,
        "show_up_flag": true,
        "read_only": false
      },
      "replies": [
        {
          "rpid": 237106897104,
          "oid": 1556386640,
          "type": 1,
          "mid": 227542137,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 20,
          "rcount": 20,
          "state": 0,
          "fansgrade": 0,
          "attr": 134217728,
          "ctime": 1723373490,
          "mid_str": "227542137",
          "oid_str": "1556386640",
          "rpid_str": "237106897104",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 192,
          "action": 0,
          "member": {
            "mid": "227542137",
            "uname": "峯情無限",
            "sex": "女",
            "sign": "这个人很神秘，什么都没有写",
            "avatar": "https://i0.hdslb.com/bfs/face/9803140440125f298226ae771b9c35b134cfee89.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 1,
            "senior": {
              "status": 2
            },
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 57,
              "name": "收集萌新",
              "image": "https://i0.hdslb.com/bfs/face/7767275600ea63d351b22fa87ec15a79aa24e5e5.png",
              "image_small": "https://i1.hdslb.com/bfs/face/6589d992655595bf51543f268040eaeaed372fae.png",
              "level": "普通勋章",
              "condition": "同时拥有粉丝勋章>=5个"
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1631548800000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/9803140440125f298226ae771b9c35b134cfee89.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "227542137"
            }
          },
          "content": {
            "message": "身伤易愈，心伤难合",
            "members": [],
            "jump_url": {},
            "max_line": 6,
            "pictures": [
              {
                "img_src": "http://i0.hdslb.com/bfs/new_dyn/07982bc137fae62b3bd58ac18afe98f1227542137.jpg",
                "img_width": 750,
                "img_height": 530,
                "img_size": 189.9
              }
            ],
            "picture_scale": 1
          },
          "replies": [
            {
              "rpid": 237108982016,
              "oid": 1556386640,
              "type": 1,
              "mid": 442947096,
              "root": 237106897104,
              "parent": 237106897104,
              "dialog": 237108982016,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723374155,
              "mid_str": "442947096",
              "oid_str": "1556386640",
              "rpid_str": "237108982016",
              "root_str": "237106897104",
              "parent_str": "237106897104",
              "dialog_str": "237108982016",
              "like": 4,
              "action": 0,
              "member": {
                "mid": "442947096",
                "uname": "临时工变态三人组组长",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/63e6a74e151db0686d0ffe6301d8bfc678693258.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1770739200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/63e6a74e151db0686d0ffe6301d8bfc678693258.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "442947096"
                }
              },
              "content": {
                "message": "你在这样我要给三国杀刷好评了[doge]",
                "members": [],
                "emote": {
                  "[doge]": {
                    "id": 26,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[doge]",
                    "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "doge"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237109513696,
              "oid": 1556386640,
              "type": 1,
              "mid": 294618669,
              "root": 237106897104,
              "parent": 237106897104,
              "dialog": 237109513696,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723374369,
              "mid_str": "294618669",
              "oid_str": "1556386640",
              "rpid_str": "237109513696",
              "root_str": "237106897104",
              "parent_str": "237106897104",
              "dialog_str": "237109513696",
              "like": 5,
              "action": 0,
              "member": {
                "mid": "294618669",
                "uname": "bili_294618669",
                "sex": "男",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/8203c7a6d63d31aeb052ce2fcf30fb56042abf40.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 3508,
                  "name": "总之就是非常可爱",
                  "image": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                  "expire": 0,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                  "image_enhance_frame": "",
                  "n_pid": 3508
                },
                "nameplate": {
                  "nid": 70,
                  "name": "风纪精英",
                  "image": "https://i0.hdslb.com/bfs/face/cb3889a15126ed1a1aac024102e3f828ebd8926a.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/86ad99140085962e0df02d08794b1de56b0f54f4.png",
                  "level": "普通勋章",
                  "condition": "风纪委员连任期数 >= 3"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1754150400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 0.787,
                            "height": 0.787
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/8203c7a6d63d31aeb052ce2fcf30fb56042abf40.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.375,
                            "height": 1.375
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "294618669"
                }
              },
              "content": {
                "message": "铁锁链而行，东吴水师可破[嗑瓜子]",
                "members": [],
                "emote": {
                  "[嗑瓜子]": {
                    "id": 3223,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[嗑瓜子]",
                    "url": "https://i0.hdslb.com/bfs/emote/28a91da1685d90124cfeead74622e1ebb417c0eb.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "嗑瓜子"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：辽宁",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237495603232,
              "oid": 1556386640,
              "type": 1,
              "mid": 293749620,
              "root": 237106897104,
              "parent": 237109513696,
              "dialog": 237109513696,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723542536,
              "mid_str": "293749620",
              "oid_str": "1556386640",
              "rpid_str": "237495603232",
              "root_str": "237106897104",
              "parent_str": "237109513696",
              "dialog_str": "237109513696",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "293749620",
                "uname": "许甜甜家的嵩鼠",
                "sex": "男",
                "sign": "",
                "avatar": "http://i0.hdslb.com/bfs/face/73520e4da8ce552695d5093ecccf5c126b1643e7.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 57,
                  "name": "收集萌新",
                  "image": "https://i0.hdslb.com/bfs/face/7767275600ea63d351b22fa87ec15a79aa24e5e5.png",
                  "image_small": "https://i0.hdslb.com/bfs/face/6589d992655595bf51543f268040eaeaed372fae.png",
                  "level": "普通勋章",
                  "condition": "同时拥有粉丝勋章>=5个"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1791388800000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "http://i0.hdslb.com/bfs/face/73520e4da8ce552695d5093ecccf5c126b1643e7.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "293749620"
                }
              },
              "content": {
                "message": "回复 @稳重顾源 :铁锁连舟而行，东吴水师可破",
                "at_name_to_mid": {
                  "稳重顾源": 294618669
                },
                "at_name_to_mid_str": {
                  "稳重顾源": "294618669"
                },
                "members": [
                  {
                    "mid": "294618669",
                    "uname": "bili_294618669",
                    "sex": "男",
                    "sign": "",
                    "avatar": "https://i0.hdslb.com/bfs/face/8203c7a6d63d31aeb052ce2fcf30fb56042abf40.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 3508,
                      "name": "总之就是非常可爱",
                      "image": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                      "expire": 0,
                      "image_enhance": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                      "image_enhance_frame": "",
                      "n_pid": 3508
                    },
                    "nameplate": {
                      "nid": 70,
                      "name": "风纪精英",
                      "image": "https://i0.hdslb.com/bfs/face/cb3889a15126ed1a1aac024102e3f828ebd8926a.png",
                      "image_small": "https://i1.hdslb.com/bfs/face/86ad99140085962e0df02d08794b1de56b0f54f4.png",
                      "level": "普通勋章",
                      "condition": "风纪委员连任期数 >= 3"
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1754150400000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "294618669",
                "name": "稳重顾源"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "541天前发布",
                "location": "IP属地：湖北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共20条回复",
            "sub_reply_title_text": "相关回复共20条",
            "time_desc": "543天前发布",
            "biz_scene": "opus_964370868356513829",
            "location": "IP属地：广东",
            "is_note_v2": true,
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id": 964370868356513800,
          "dynamic_id_str": "964370868356513829",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237108055680,
          "oid": 1556386640,
          "type": 1,
          "mid": 1312345791,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 5,
          "rcount": 5,
          "state": 0,
          "fansgrade": 0,
          "attr": 134217728,
          "ctime": 1723373883,
          "mid_str": "1312345791",
          "oid_str": "1556386640",
          "rpid_str": "237108055680",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 52,
          "action": 0,
          "member": {
            "mid": "1312345791",
            "uname": "她笑着说我是坏人",
            "sex": "男",
            "sign": "我每天都在问自己，明天自己怎么样？",
            "avatar": "https://i0.hdslb.com/bfs/face/c1a19d2e1fba114406e61ae432c9ab30856c6d46.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 0,
              "vipDueDate": 0,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/c1a19d2e1fba114406e61ae432c9ab30856c6d46.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "1312345791"
            }
          },
          "content": {
            "message": "八月寒",
            "members": [],
            "jump_url": {},
            "max_line": 6,
            "pictures": [
              {
                "img_src": "http://i0.hdslb.com/bfs/new_dyn/d89fe6e183b64daa32117c6e17be394c1312345791.jpg",
                "img_width": 1080,
                "img_height": 2383,
                "img_size": 1878.75
              }
            ],
            "picture_scale": 1
          },
          "replies": [
            {
              "rpid": 237250103120,
              "oid": 1556386640,
              "type": 1,
              "mid": 452299494,
              "root": 237108055680,
              "parent": 237108055680,
              "dialog": 237250103120,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723440910,
              "mid_str": "452299494",
              "oid_str": "1556386640",
              "rpid_str": "237250103120",
              "root_str": "237108055680",
              "parent_str": "237108055680",
              "dialog_str": "237250103120",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "452299494",
                "uname": "橘子洲上恰橘子",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/699e4db2ab20908eee0d33d2daade30144782064.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 1,
                "senior": {
                  "status": 2
                },
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1804089600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/699e4db2ab20908eee0d33d2daade30144782064.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "452299494"
                }
              },
              "content": {
                "message": "这么夸张嘛[小黄豆宇宙0.o_笑哭]",
                "members": [],
                "emote": {
                  "[小黄豆宇宙0.o_笑哭]": {
                    "id": 52910,
                    "package_id": 3802,
                    "state": 0,
                    "type": 3,
                    "attr": 0,
                    "text": "[小黄豆宇宙0.o_笑哭]",
                    "url": "https://i0.hdslb.com/bfs/garb/6fe42dcab215668f308424737e14949600365db4.png",
                    "meta": {
                      "size": 2
                    },
                    "mtime": 1700125200,
                    "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=1699950165001&isdiy=0&part=emoji_package&from=emoji&f_source=garb&vmid=3546560478578925&native.theme=1&navhide=1",
                    "jump_title": "笑哭"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：山西",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237256617888,
              "oid": 1556386640,
              "type": 1,
              "mid": 351137404,
              "root": 237108055680,
              "parent": 237108055680,
              "dialog": 237256617888,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723443463,
              "mid_str": "351137404",
              "oid_str": "1556386640",
              "rpid_str": "237256617888",
              "root_str": "237108055680",
              "parent_str": "237108055680",
              "dialog_str": "237256617888",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "351137404",
                "uname": "wangbc163",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/92dccf47c27613865ae76b7362b838cc7f159365.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1718208000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/92dccf47c27613865ae76b7362b838cc7f159365.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "351137404"
                }
              },
              "content": {
                "message": "不会吧，我这里天天高温预警",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：湖北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237303314560,
              "oid": 1556386640,
              "type": 1,
              "mid": 386374246,
              "root": 237108055680,
              "parent": 237108055680,
              "dialog": 237303314560,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723459760,
              "mid_str": "386374246",
              "oid_str": "1556386640",
              "rpid_str": "237303314560",
              "root_str": "237108055680",
              "parent_str": "237108055680",
              "dialog_str": "237303314560",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "386374246",
                "uname": "三角洲行动丶听海",
                "sex": "男",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/83de918abb148765142d3eb4d4c5a1f1860d11e8.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1773072000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/83de918abb148765142d3eb4d4c5a1f1860d11e8.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "386374246"
                }
              },
              "content": {
                "message": "雪梨一个人头",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：江苏",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共5条回复",
            "sub_reply_title_text": "相关回复共5条",
            "time_desc": "543天前发布",
            "biz_scene": "opus_964372556541853697",
            "location": "IP属地：湖北",
            "is_note_v2": true,
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id": 964372556541853700,
          "dynamic_id_str": "964372556541853697",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237107365072,
          "oid": 1556386640,
          "type": 1,
          "mid": 1780502803,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 47,
          "rcount": 36,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373621,
          "mid_str": "1780502803",
          "oid_str": "1556386640",
          "rpid_str": "237107365072",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 2282,
          "action": 0,
          "member": {
            "mid": "1780502803",
            "uname": "笑chu腹肌",
            "sex": "男",
            "sign": "啥个性签名俺不中嘞",
            "avatar": "https://i1.hdslb.com/bfs/face/f7f84362926f6a7ca47061f297bac10fbb49b5cb.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 1,
              "name": "黄金殿堂",
              "image": "https://i0.hdslb.com/bfs/face/82896ff40fcb4e7c7259cb98056975830cb55695.png",
              "image_small": "https://i0.hdslb.com/bfs/face/627e342851dfda6fe7380c2fa0cbd7fae2e61533.png",
              "level": "稀有勋章",
              "condition": "单个自制视频总播放数>=100万，数据次日更新"
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1694102400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/f7f84362926f6a7ca47061f297bac10fbb49b5cb.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "1780502803"
            }
          },
          "content": {
            "message": "惩治谣言，任重道远啊。现在造谣的成本还是有点低",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237108091664,
              "oid": 1556386640,
              "type": 1,
              "mid": 29857251,
              "root": 237107365072,
              "parent": 237107365072,
              "dialog": 237108091664,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723373879,
              "mid_str": "29857251",
              "oid_str": "1556386640",
              "rpid_str": "237108091664",
              "root_str": "237107365072",
              "parent_str": "237107365072",
              "dialog_str": "237108091664",
              "like": 79,
              "action": 0,
              "member": {
                "mid": "29857251",
                "uname": "star小炮",
                "sex": "保密",
                "sign": "",
                "avatar": "http://i0.hdslb.com/bfs/face/de394e1e93b1c8d6cc591b3ef09da5dd3f72bf4d.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 4036,
                  "name": "崩坏3·天穹流星",
                  "image": "https://i0.hdslb.com/bfs/garb/item/5caf84631f46c32bf31e8fa871b5742a2c1ceb18.png",
                  "expire": 0,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/3594b30dfb6e9608d9eb6e67f47a2c90dd2bbf71.webp",
                  "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/d5afe4b28412a982672a7b0eb304b146a457bb5c.png",
                  "n_pid": 4036
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1789401600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "layers": [
                    {
                      "layers": [
                        {
                          "visible": true,
                          "general_spec": {
                            "pos_spec": {
                              "coordinate_pos": 2,
                              "axis_x": 0.9,
                              "axis_y": 0.9
                            },
                            "size_spec": {
                              "width": 0.787,
                              "height": 0.787
                            },
                            "render_spec": {
                              "opacity": 1
                            }
                          },
                          "layer_config": {
                            "tags": {
                              "AVATAR_LAYER": {},
                              "GENERAL_CFG": {
                                "config_type": 1,
                                "general_config": {
                                  "web_css_style": {
                                    "borderRadius": "50%"
                                  }
                                }
                              }
                            },
                            "is_critical": true
                          },
                          "resource": {
                            "res_type": 3,
                            "res_image": {
                              "image_src": {
                                "src_type": 1,
                                "placeholder": 6,
                                "remote": {
                                  "url": "http://i0.hdslb.com/bfs/face/de394e1e93b1c8d6cc591b3ef09da5dd3f72bf4d.jpg",
                                  "bfs_style": "widget-layer-avatar"
                                }
                              }
                            }
                          }
                        }
                      ],
                      "is_critical_group": true
                    },
                    {
                      "layers": [
                        {
                          "visible": true,
                          "general_spec": {
                            "pos_spec": {
                              "coordinate_pos": 2,
                              "axis_x": 0.9,
                              "axis_y": 0.9
                            },
                            "size_spec": {
                              "width": 1.375,
                              "height": 1.375
                            },
                            "render_spec": {
                              "opacity": 1
                            }
                          },
                          "layer_config": {
                            "tags": {
                              "PENDENT_LAYER": {}
                            }
                          },
                          "resource": {
                            "res_type": 4,
                            "res_animation": {
                              "webp_src": {
                                "src_type": 1,
                                "remote": {
                                  "url": "https://i0.hdslb.com/bfs/garb/item/3594b30dfb6e9608d9eb6e67f47a2c90dd2bbf71.webp",
                                  "bfs_style": "widget-layer-avatar"
                                }
                              }
                            }
                          }
                        }
                      ]
                    },
                    {
                      "layers": [
                        {
                          "visible": true,
                          "general_spec": {
                            "pos_spec": {
                              "coordinate_pos": 1,
                              "axis_x": 0.9685,
                              "axis_y": 0.9851666666666666
                            },
                            "size_spec": {
                              "width": 0.41666666666666663,
                              "height": 0.41666666666666663
                            },
                            "render_spec": {
                              "opacity": 1
                            }
                          },
                          "layer_config": {
                            "tags": {
                              "GENERAL_CFG": {
                                "config_type": 1,
                                "general_config": {
                                  "web_css_style": {
                                    "background-color": "rgb(255,255,255)",
                                    "border": "2px solid rgba(255,255,255,1)",
                                    "borderRadius": "50%",
                                    "boxSizing": "border-box"
                                  }
                                }
                              },
                              "ICON_LAYER": {}
                            }
                          },
                          "resource": {
                            "res_type": 3,
                            "res_image": {
                              "image_src": {
                                "src_type": 2,
                                "local": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 0.787,
                            "height": 0.787
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "http://i0.hdslb.com/bfs/face/de394e1e93b1c8d6cc591b3ef09da5dd3f72bf4d.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.375,
                            "height": 1.375
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/garb/item/5caf84631f46c32bf31e8fa871b5742a2c1ceb18.png",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 0.9685,
                            "axis_y": 0.9851666666666666
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "29857251"
                }
              },
              "content": {
                "message": "是啊 就算起诉了 法律判赢了 最多也就赔点钱 然后公开道歉",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：上海",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237109206624,
              "oid": 1556386640,
              "type": 1,
              "mid": 33851537,
              "root": 237107365072,
              "parent": 237107365072,
              "dialog": 237109206624,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723374229,
              "mid_str": "33851537",
              "oid_str": "1556386640",
              "rpid_str": "237109206624",
              "root_str": "237107365072",
              "parent_str": "237107365072",
              "dialog_str": "237109206624",
              "like": 20,
              "action": 0,
              "member": {
                "mid": "33851537",
                "uname": "糖怕苦啊",
                "sex": "保密",
                "sign": "一切为了妇女儿童健康！",
                "avatar": "https://i2.hdslb.com/bfs/face/620db76539829284c025df0dae5654a2f02b04b9.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 1,
                "senior": {
                  "status": 2
                },
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 92,
                  "name": "有爱大佬",
                  "image": "https://i1.hdslb.com/bfs/face/a10ee6b613e0d68d2dfdac8bbf71b94824e10408.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/54f4c31ab9b1f1fa2c29dbbc967f66535699337e.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=15级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1764259200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/620db76539829284c025df0dae5654a2f02b04b9.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "33851537"
                }
              },
              "content": {
                "message": "嘴欠的人太多了…",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237115286160,
              "oid": 1556386640,
              "type": 1,
              "mid": 415156720,
              "root": 237107365072,
              "parent": 237108091664,
              "dialog": 237108091664,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723376201,
              "mid_str": "415156720",
              "oid_str": "1556386640",
              "rpid_str": "237115286160",
              "root_str": "237107365072",
              "parent_str": "237108091664",
              "dialog_str": "237108091664",
              "like": 38,
              "action": 0,
              "member": {
                "mid": "415156720",
                "uname": "疯狂的弁袭君",
                "sex": "男",
                "sign": "无关风月，只为真心",
                "avatar": "https://i1.hdslb.com/bfs/face/4170df75130bf0d17fef8e6378d3d9aa5a91224d.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 90,
                  "name": "有爱萌新",
                  "image": "https://i1.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=5级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1785945600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/4170df75130bf0d17fef8e6378d3d9aa5a91224d.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "415156720"
                }
              },
              "content": {
                "message": "回复 @star小炮 :第一步起诉没问题，第二步开始就跟你想象不一样了",
                "at_name_to_mid": {
                  "star小炮": 29857251
                },
                "at_name_to_mid_str": {
                  "star小炮": "29857251"
                },
                "members": [
                  {
                    "mid": "29857251",
                    "uname": "star小炮",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i0.hdslb.com/bfs/face/de394e1e93b1c8d6cc591b3ef09da5dd3f72bf4d.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 4036,
                      "name": "崩坏3·天穹流星",
                      "image": "https://i0.hdslb.com/bfs/garb/item/5caf84631f46c32bf31e8fa871b5742a2c1ceb18.png",
                      "expire": 0,
                      "image_enhance": "https://i0.hdslb.com/bfs/garb/item/3594b30dfb6e9608d9eb6e67f47a2c90dd2bbf71.webp",
                      "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/d5afe4b28412a982672a7b0eb304b146a457bb5c.png",
                      "n_pid": 4036
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 2,
                      "vipDueDate": 1789401600000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 1,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                        "text": "年度大会员",
                        "label_theme": "annual_vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                        "label_id": -22,
                        "label_goto": {
                          "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                          "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                        }
                      },
                      "avatar_subscript": 1,
                      "nickname_color": "#FB7299"
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "29857251",
                "name": "star小炮"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：浙江",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共36条回复",
            "sub_reply_title_text": "相关回复共36条",
            "time_desc": "543天前发布",
            "location": "IP属地：黑龙江",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237193867152,
          "oid": 1556386640,
          "type": 1,
          "mid": 4194710,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 22,
          "rcount": 13,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723415855,
          "mid_str": "4194710",
          "oid_str": "1556386640",
          "rpid_str": "237193867152",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 728,
          "action": 0,
          "member": {
            "mid": "4194710",
            "uname": "一生的本命仙剑奇侠传",
            "sex": "保密",
            "sign": "写作Clannad，读作人生。",
            "avatar": "https://i2.hdslb.com/bfs/face/864ceb5026b8676500f9226504e443fa154ce6a7.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 90,
              "name": "有爱萌新",
              "image": "https://i2.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
              "image_small": "https://i0.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
              "level": "普通勋章",
              "condition": "当前持有粉丝勋章最高等级>=5级"
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1645718400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/864ceb5026b8676500f9226504e443fa154ce6a7.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "4194710"
            }
          },
          "content": {
            "message": "所以我很喜欢一句话，他道歉不是知道他错了，是知道他要完了，真心悔改的人没多少，很好验证他是不是真心悔改，假如有魔法的是润土，你觉得他会怎样？",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237757270720,
              "oid": 1556386640,
              "type": 1,
              "mid": 44386166,
              "root": 237193867152,
              "parent": 237193867152,
              "dialog": 237757270720,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723643993,
              "mid_str": "44386166",
              "oid_str": "1556386640",
              "rpid_str": "237757270720",
              "root_str": "237193867152",
              "parent_str": "237193867152",
              "dialog_str": "237757270720",
              "like": 21,
              "action": 0,
              "member": {
                "mid": "44386166",
                "uname": "奇怪的御坂",
                "sex": "保密",
                "sign": "不怕黑子爱，就怕御坂很奇怪。",
                "avatar": "https://i2.hdslb.com/bfs/face/2620b5b79b411568aaa3c40c88c3ac481db09eaa.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 2155,
                  "name": "洛天依8th生日纪念",
                  "image": "https://i2.hdslb.com/bfs/garb/item/e98718ae0d09e48bc85df969820b88241bc06883.png",
                  "expire": 0,
                  "image_enhance": "https://i2.hdslb.com/bfs/garb/item/e98718ae0d09e48bc85df969820b88241bc06883.png",
                  "image_enhance_frame": "",
                  "n_pid": 2155
                },
                "nameplate": {
                  "nid": 57,
                  "name": "收集萌新",
                  "image": "https://i1.hdslb.com/bfs/face/7767275600ea63d351b22fa87ec15a79aa24e5e5.png",
                  "image_small": "https://i0.hdslb.com/bfs/face/6589d992655595bf51543f268040eaeaed372fae.png",
                  "level": "普通勋章",
                  "condition": "同时拥有粉丝勋章>=5个"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1780156800000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 0.787,
                            "height": 0.787
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/2620b5b79b411568aaa3c40c88c3ac481db09eaa.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.375,
                            "height": 1.375
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/garb/item/e98718ae0d09e48bc85df969820b88241bc06883.png",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 0.9685,
                            "axis_y": 0.9851666666666666
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "44386166"
                }
              },
              "content": {
                "message": "后悔椅只有放在警局里才叫后悔椅。[洛天依_goodjob]",
                "members": [],
                "emote": {
                  "[洛天依_goodjob]": {
                    "id": 2202,
                    "package_id": 101,
                    "state": 0,
                    "type": 3,
                    "attr": 0,
                    "text": "[洛天依_goodjob]",
                    "url": "http://i0.hdslb.com/bfs/emote/a781b75de326488ba00c937f0d89b4eaba6a0ca0.png",
                    "meta": {
                      "size": 2,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1628587782,
                    "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=2142&isdiy=0&part=emoji_package&from=emoji&f_source=garb&vmid=3546560478578925&native.theme=1&navhide=1",
                    "jump_title": "goodjob"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "540天前发布",
                "location": "IP属地：河北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 238291757616,
              "oid": 1556386640,
              "type": 1,
              "mid": 4194710,
              "root": 237193867152,
              "parent": 237193867152,
              "dialog": 238291757616,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723865487,
              "mid_str": "4194710",
              "oid_str": "1556386640",
              "rpid_str": "238291757616",
              "root_str": "237193867152",
              "parent_str": "237193867152",
              "dialog_str": "238291757616",
              "like": 1,
              "action": 0,
              "member": {
                "mid": "4194710",
                "uname": "一生的本命仙剑奇侠传",
                "sex": "保密",
                "sign": "写作Clannad，读作人生。",
                "avatar": "https://i2.hdslb.com/bfs/face/864ceb5026b8676500f9226504e443fa154ce6a7.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 90,
                  "name": "有爱萌新",
                  "image": "https://i2.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                  "image_small": "https://i0.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=5级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1645718400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": {
                  "pendant": null,
                  "cardbg": null,
                  "cardbg_with_focus": null
                },
                "user_sailing_v2": {},
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/864ceb5026b8676500f9226504e443fa154ce6a7.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "4194710"
                }
              },
              "content": {
                "message": "奇怪，你们聊了这么多，我咋就收到三条回复提示[辣眼睛]",
                "members": [],
                "emote": {
                  "[辣眼睛]": {
                    "id": 2374,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[辣眼睛]",
                    "url": "https://i0.hdslb.com/bfs/emote/35d62c496d1e4ea9e091243fa812866f5fecc101.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "辣眼睛"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "537天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 238508277120,
              "oid": 1556386640,
              "type": 1,
              "mid": 208875472,
              "root": 237193867152,
              "parent": 238291757616,
              "dialog": 238291757616,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723952332,
              "mid_str": "208875472",
              "oid_str": "1556386640",
              "rpid_str": "238508277120",
              "root_str": "237193867152",
              "parent_str": "238291757616",
              "dialog_str": "238291757616",
              "like": 1,
              "action": 0,
              "member": {
                "mid": "208875472",
                "uname": "A巴黎街头",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/22d15b558f8a88865ecfb0d948f713055ab6da3f.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 92,
                  "name": "有爱大佬",
                  "image": "https://i0.hdslb.com/bfs/face/a10ee6b613e0d68d2dfdac8bbf71b94824e10408.png",
                  "image_small": "https://i2.hdslb.com/bfs/face/54f4c31ab9b1f1fa2c29dbbc967f66535699337e.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=15级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1787414400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/0DFy9BHgwE.gif",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/uckjAv3Npy.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/22d15b558f8a88865ecfb0d948f713055ab6da3f.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "208875472"
                }
              },
              "content": {
                "message": "回复 @一生的本命仙剑奇侠传 :因为只有回复你，你才会收到",
                "at_name_to_mid": {
                  "一生的本命仙剑奇侠传": 4194710
                },
                "at_name_to_mid_str": {
                  "一生的本命仙剑奇侠传": "4194710"
                },
                "members": [
                  {
                    "mid": "4194710",
                    "uname": "一生的本命仙剑奇侠传",
                    "sex": "保密",
                    "sign": "写作Clannad，读作人生。",
                    "avatar": "https://i2.hdslb.com/bfs/face/864ceb5026b8676500f9226504e443fa154ce6a7.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 90,
                      "name": "有爱萌新",
                      "image": "https://i2.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                      "image_small": "https://i0.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
                      "level": "普通勋章",
                      "condition": "当前持有粉丝勋章最高等级>=5级"
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1645718400000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "4194710",
                "name": "一生的本命仙剑奇侠传"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "536天前发布",
                "location": "IP属地：安徽",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共13条回复",
            "sub_reply_title_text": "相关回复共13条",
            "time_desc": "543天前发布",
            "location": "IP属地：广东",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237190775680,
          "oid": 1556386640,
          "type": 1,
          "mid": 1042345478,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 55,
          "rcount": 48,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723409722,
          "mid_str": "1042345478",
          "oid_str": "1556386640",
          "rpid_str": "237190775680",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 525,
          "action": 0,
          "member": {
            "mid": "1042345478",
            "uname": "天之凤凰",
            "sex": "保密",
            "sign": "天之凤凰",
            "avatar": "https://i2.hdslb.com/bfs/face/6ee5247a18a961083d4b17193746f0b8cace5bbe.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 90,
              "name": "有爱萌新",
              "image": "https://i1.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
              "image_small": "https://i1.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
              "level": "普通勋章",
              "condition": "当前持有粉丝勋章最高等级>=5级"
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1636300800000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/6ee5247a18a961083d4b17193746f0b8cace5bbe.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "1042345478"
            }
          },
          "content": {
            "message": "死刑犯要被枪毙了开始哭了，不是他和她知道错了，是因为自已要死了才哭的。。。并不是他和她真心悔过了。。。[滑稽][滑稽][滑稽]",
            "members": [],
            "emote": {
              "[滑稽]": {
                "id": 27,
                "package_id": 1,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[滑稽]",
                "url": "https://i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png",
                "meta": {
                  "size": 1,
                  "suggest": [
                    ""
                  ]
                },
                "mtime": 1668688325,
                "jump_title": "滑稽"
              }
            },
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237348192992,
              "oid": 1556386640,
              "type": 1,
              "mid": 27043377,
              "root": 237190775680,
              "parent": 237190775680,
              "dialog": 237348192992,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723472883,
              "mid_str": "27043377",
              "oid_str": "1556386640",
              "rpid_str": "237348192992",
              "root_str": "237190775680",
              "parent_str": "237190775680",
              "dialog_str": "237348192992",
              "like": 6,
              "action": 0,
              "member": {
                "mid": "27043377",
                "uname": "Damon塵埃",
                "sex": "男",
                "sign": "用诈还逢识诈人(⃔ ๑⃙⃘•꒨•๑⃙⃘ )⃕↝",
                "avatar": "https://i0.hdslb.com/bfs/face/592f4da39891ad42b77e3f0936d77d3103c25f19.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 2961,
                  "name": "星座系列：天蝎座",
                  "image": "https://i0.hdslb.com/bfs/garb/item/05fcaa8fdcc39ffb35d32bc42f67716f309dc027.png",
                  "expire": 0,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/05fcaa8fdcc39ffb35d32bc42f67716f309dc027.png",
                  "image_enhance_frame": "",
                  "n_pid": 2961
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1684166400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 0.787,
                            "height": 0.787
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/592f4da39891ad42b77e3f0936d77d3103c25f19.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.375,
                            "height": 1.375
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/garb/item/05fcaa8fdcc39ffb35d32bc42f67716f309dc027.png",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "27043377"
                }
              },
              "content": {
                "message": "陈平安：这话好熟悉啊[BW2024_吃瓜]",
                "members": [],
                "emote": {
                  "[BW2024_吃瓜]": {
                    "id": 74601,
                    "package_id": 5127,
                    "state": 0,
                    "type": 3,
                    "attr": 0,
                    "text": "[BW2024_吃瓜]",
                    "url": "https://i0.hdslb.com/bfs/emote/f8e8f58ffedb0eabaae2e411eb4a747a92ee0178.png",
                    "meta": {
                      "size": 2,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1717579133,
                    "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=68664&isdiy=0&part=emoji_package&from=emoji&f_source=garb&vmid=3546560478578925&native.theme=1&navhide=1",
                    "jump_title": "吃瓜"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：福建",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 243231372321,
              "oid": 1556386640,
              "type": 1,
              "mid": 1716610783,
              "root": 237190775680,
              "parent": 237190775680,
              "dialog": 243231372321,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1727553073,
              "mid_str": "1716610783",
              "oid_str": "1556386640",
              "rpid_str": "243231372321",
              "root_str": "237190775680",
              "parent_str": "237190775680",
              "dialog_str": "243231372321",
              "like": 2,
              "action": 0,
              "member": {
                "mid": "1716610783",
                "uname": "本子库浏览器",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/1594b09105020252708c6ba496f10339913b4045.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/1594b09105020252708c6ba496f10339913b4045.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "1716610783"
                }
              },
              "content": {
                "message": "悔过那是自我救赎，对于受害者没什么意义。所以有无悔意，都不影响已经发生的事实评判。",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "495天前发布",
                "location": "IP属地：黑龙江",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 284554808224,
              "oid": 1556386640,
              "type": 1,
              "mid": 381323808,
              "root": 237190775680,
              "parent": 237190775680,
              "dialog": 284554808224,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1765019107,
              "mid_str": "381323808",
              "oid_str": "1556386640",
              "rpid_str": "284554808224",
              "root_str": "237190775680",
              "parent_str": "237190775680",
              "dialog_str": "284554808224",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "381323808",
                "uname": "威叔已成神",
                "sex": "男",
                "sign": "天律律师事务所",
                "avatar": "https://i0.hdslb.com/bfs/face/da839331eb44865d012163620983c1f096d21e3f.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1779120000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/da839331eb44865d012163620983c1f096d21e3f.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "381323808"
                }
              },
              "content": {
                "message": "不以恶小而为之，不以善小而不为",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "61天前发布",
                "location": "IP属地：江苏",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共48条回复",
            "sub_reply_title_text": "相关回复共48条",
            "time_desc": "543天前发布",
            "location": "IP属地：辽宁",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237116942032,
          "oid": 1556386640,
          "type": 1,
          "mid": 1582054036,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 27,
          "rcount": 19,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723376795,
          "mid_str": "1582054036",
          "oid_str": "1556386640",
          "rpid_str": "237116942032",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 592,
          "action": 0,
          "member": {
            "mid": "1582054036",
            "uname": "汐汐与Mikou",
            "sex": "保密",
            "sign": "心中真有颗爱国情怀。老佩来了，怎么办？已经来了？别又忍，不然站不起来了—2022.8.2–23:29",
            "avatar": "https://i1.hdslb.com/bfs/face/a5cf186227c3843796945c2b22cde726072bd7c1.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1743264000000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/a5cf186227c3843796945c2b22cde726072bd7c1.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "1582054036"
            }
          },
          "content": {
            "message": "先整顿学新闻学的媒体UP和网红，这些人最容易误导路人带节奏，普通人表达意见很容易区分恶意否，路人也翻不起浪花",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237176880144,
              "oid": 1556386640,
              "type": 1,
              "mid": 2126027244,
              "root": 237116942032,
              "parent": 237116942032,
              "dialog": 237176880144,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723396190,
              "mid_str": "2126027244",
              "oid_str": "1556386640",
              "rpid_str": "237176880144",
              "root_str": "237116942032",
              "parent_str": "237116942032",
              "dialog_str": "237176880144",
              "like": 20,
              "action": 0,
              "member": {
                "mid": "2126027244",
                "uname": "一个小玩家93",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/6e24dc3929c0f4a2982277068cc76d12b0e0f4c6.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 4,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1760371200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/6e24dc3929c0f4a2982277068cc76d12b0e0f4c6.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "2126027244"
                }
              },
              "content": {
                "message": "某些美妆博主真是一言难尽[微笑][微笑]",
                "members": [],
                "emote": {
                  "[微笑]": {
                    "id": 1,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[微笑]",
                    "url": "https://i0.hdslb.com/bfs/emote/685612eadc33f6bc233776c6241813385844f182.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "微笑"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：宁夏",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237257713840,
              "oid": 1556386640,
              "type": 1,
              "mid": 349281316,
              "root": 237116942032,
              "parent": 237116942032,
              "dialog": 237257713840,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723443880,
              "mid_str": "349281316",
              "oid_str": "1556386640",
              "rpid_str": "237257713840",
              "root_str": "237116942032",
              "parent_str": "237116942032",
              "dialog_str": "237257713840",
              "like": 2,
              "action": 0,
              "member": {
                "mid": "349281316",
                "uname": "The17yearold",
                "sex": "男",
                "sign": "faw",
                "avatar": "https://i1.hdslb.com/bfs/face/bb0c9dbcff7be7d5386ece67788582afa439df98.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1676563200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/bb0c9dbcff7be7d5386ece67788582afa439df98.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "349281316"
                }
              },
              "content": {
                "message": "比如观察某网",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237437443376,
              "oid": 1556386640,
              "type": 1,
              "mid": 1582054036,
              "root": 237116942032,
              "parent": 237257713840,
              "dialog": 237257713840,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723522907,
              "mid_str": "1582054036",
              "oid_str": "1556386640",
              "rpid_str": "237437443376",
              "root_str": "237116942032",
              "parent_str": "237257713840",
              "dialog_str": "237257713840",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "1582054036",
                "uname": "汐汐与Mikou",
                "sex": "保密",
                "sign": "心中真有颗爱国情怀。老佩来了，怎么办？已经来了？别又忍，不然站不起来了—2022.8.2–23:29",
                "avatar": "https://i1.hdslb.com/bfs/face/a5cf186227c3843796945c2b22cde726072bd7c1.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1743264000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": {
                  "pendant": null,
                  "cardbg": null,
                  "cardbg_with_focus": null
                },
                "user_sailing_v2": {},
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/a5cf186227c3843796945c2b22cde726072bd7c1.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "1582054036"
                }
              },
              "content": {
                "message": "回复 @The17yearold :四川观察，不观察四川",
                "at_name_to_mid": {
                  "The17yearold": 349281316
                },
                "at_name_to_mid_str": {
                  "The17yearold": "349281316"
                },
                "members": [
                  {
                    "mid": "349281316",
                    "uname": "The17yearold",
                    "sex": "男",
                    "sign": "faw",
                    "avatar": "https://i1.hdslb.com/bfs/face/bb0c9dbcff7be7d5386ece67788582afa439df98.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1676563200000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "349281316",
                "name": "The17yearold"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "541天前发布",
                "location": "IP属地：湖北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共19条回复",
            "sub_reply_title_text": "相关回复共19条",
            "time_desc": "543天前发布",
            "location": "IP属地：湖北",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106064384,
          "oid": 1556386640,
          "type": 1,
          "mid": 66368312,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 33,
          "rcount": 29,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373249,
          "mid_str": "66368312",
          "oid_str": "1556386640",
          "rpid_str": "237106064384",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 689,
          "action": 0,
          "member": {
            "mid": "66368312",
            "uname": "柒-柒-柒-柒-柒-柒-柒",
            "sex": "保密",
            "sign": "",
            "avatar": "https://i2.hdslb.com/bfs/face/7e72c58637ff26df68fb30939de078d2bbbfcdbe.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1771430400000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "http://i0.hdslb.com/bfs/vip/label_vip.png",
                "text": "大会员",
                "label_theme": "vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png",
                "label_id": -22,
                "label_goto": {
                  "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                  "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                }
              },
              "avatar_subscript": 1,
              "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/7e72c58637ff26df68fb30939de078d2bbbfcdbe.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 1,
                        "axis_x": 1.025,
                        "axis_y": 1.025
                      },
                      "size_spec": {
                        "width": 0.41666666666666663,
                        "height": 0.41666666666666663
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 2,
                          "local": 1
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "66368312"
            }
          },
          "content": {
            "message": "这结局看得我太爽了",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237119289872,
              "oid": 1556386640,
              "type": 1,
              "mid": 397317909,
              "root": 237106064384,
              "parent": 237106064384,
              "dialog": 237119289872,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723377508,
              "mid_str": "397317909",
              "oid_str": "1556386640",
              "rpid_str": "237119289872",
              "root_str": "237106064384",
              "parent_str": "237106064384",
              "dialog_str": "237119289872",
              "like": 10,
              "action": 0,
              "member": {
                "mid": "397317909",
                "uname": "Dearest-Ayu",
                "sex": "男",
                "sign": "想念毛主席",
                "avatar": "https://i0.hdslb.com/bfs/face/57079a638f8cd88fbcb0303917d74547f3fffeaa.webp",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 3508,
                  "name": "总之就是非常可爱",
                  "image": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                  "expire": 0,
                  "image_enhance": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                  "image_enhance_frame": "",
                  "n_pid": 3508
                },
                "nameplate": {
                  "nid": 3,
                  "name": "白银殿堂",
                  "image": "https://i1.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
                  "image_small": "https://i2.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
                  "level": "高级勋章",
                  "condition": "单个自制视频总播放数>=10万，数据次日更新"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1807459200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": {
                  "region": {
                    "type": 1,
                    "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif",
                    "show_status": 1
                  }
                },
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 0.94,
                            "height": 0.94
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 4,
                          "res_animation": {
                            "webp_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/57079a638f8cd88fbcb0303917d74547f3fffeaa.webp",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.65,
                            "height": 1.65
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.0450000000000002,
                            "axis_y": 1.0616666666666668
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 4,
                          "res_animation": {
                            "webp_src": {
                              "src_type": 1,
                              "placeholder": 5,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "397317909"
                }
              },
              "content": {
                "message": "太魔幻了",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：黑龙江",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237129573056,
              "oid": 1556386640,
              "type": 1,
              "mid": 3493291387521601,
              "root": 237106064384,
              "parent": 237119289872,
              "dialog": 237119289872,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723380749,
              "mid_str": "3493291387521601",
              "oid_str": "1556386640",
              "rpid_str": "237129573056",
              "root_str": "237106064384",
              "parent_str": "237119289872",
              "dialog_str": "237119289872",
              "like": 9,
              "action": 0,
              "member": {
                "mid": "3493291387521601",
                "uname": "温某人M",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/9560730e4820ae66cc8775ee56e6411afdb220c5.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 4,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1733587200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/9560730e4820ae66cc8775ee56e6411afdb220c5.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "3493291387521601"
                }
              },
              "content": {
                "message": "回复 @Dearest-Ayu :额，这结局有啥魔幻的",
                "at_name_to_mid": {
                  "Dearest-Ayu": 397317909
                },
                "at_name_to_mid_str": {
                  "Dearest-Ayu": "397317909"
                },
                "members": [
                  {
                    "mid": "397317909",
                    "uname": "Dearest-Ayu",
                    "sex": "男",
                    "sign": "想念毛主席",
                    "avatar": "https://i0.hdslb.com/bfs/face/57079a638f8cd88fbcb0303917d74547f3fffeaa.webp",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 3508,
                      "name": "总之就是非常可爱",
                      "image": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                      "expire": 0,
                      "image_enhance": "https://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                      "image_enhance_frame": "",
                      "n_pid": 3508
                    },
                    "nameplate": {
                      "nid": 3,
                      "name": "白银殿堂",
                      "image": "https://i1.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
                      "image_small": "https://i2.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
                      "level": "高级勋章",
                      "condition": "单个自制视频总播放数>=10万，数据次日更新"
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 2,
                      "vipDueDate": 1807459200000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 1,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                        "text": "年度大会员",
                        "label_theme": "annual_vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                        "label_id": -22,
                        "label_goto": {
                          "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                          "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                        }
                      },
                      "avatar_subscript": 1,
                      "nickname_color": "#FB7299"
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "397317909",
                "name": "Dearest-Ayu"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237131221216,
              "oid": 1556386640,
              "type": 1,
              "mid": 93037216,
              "root": 237106064384,
              "parent": 237106064384,
              "dialog": 237131221216,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723381208,
              "mid_str": "93037216",
              "oid_str": "1556386640",
              "rpid_str": "237131221216",
              "root_str": "237106064384",
              "parent_str": "237106064384",
              "dialog_str": "237131221216",
              "like": 5,
              "action": 0,
              "member": {
                "mid": "93037216",
                "uname": "背景颜色改一下",
                "sex": "男",
                "sign": "失物招领处",
                "avatar": "https://i1.hdslb.com/bfs/face/7ccb6c560e2ed30465dc09f1a766ed2a298f4a9f.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 57,
                  "name": "收集萌新",
                  "image": "https://i0.hdslb.com/bfs/face/7767275600ea63d351b22fa87ec15a79aa24e5e5.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/6589d992655595bf51543f268040eaeaed372fae.png",
                  "level": "普通勋章",
                  "condition": "同时拥有粉丝勋章>=5个"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1752940800000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/7ccb6c560e2ed30465dc09f1a766ed2a298f4a9f.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "93037216"
                }
              },
              "content": {
                "message": "还不够爽，我觉得闰土人肉的人最后身份公开应该是闰土一个很重要的人才爽",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：四川",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共29条回复",
            "sub_reply_title_text": "相关回复共29条",
            "time_desc": "543天前发布",
            "location": "IP属地：湖南",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237109455120,
          "oid": 1556386640,
          "type": 1,
          "mid": 1316677379,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 16,
          "rcount": 13,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723374319,
          "mid_str": "1316677379",
          "oid_str": "1556386640",
          "rpid_str": "237109455120",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 364,
          "action": 0,
          "member": {
            "mid": "1316677379",
            "uname": "嚼光海鲜味泡面的面饼",
            "sex": "保密",
            "sign": "愿你我永远都看不到这个世界的黑暗面",
            "avatar": "https://i2.hdslb.com/bfs/face/1aa18146060c64908538d28821214d10189d1f0e.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 0,
              "vipDueDate": 0,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/1aa18146060c64908538d28821214d10189d1f0e.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "1316677379"
            }
          },
          "content": {
            "message": "不是每一句对不起，都能换来一句没关系",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237110234048,
              "oid": 1556386640,
              "type": 1,
              "mid": 1045141946,
              "root": 237109455120,
              "parent": 237109455120,
              "dialog": 237110234048,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723374576,
              "mid_str": "1045141946",
              "oid_str": "1556386640",
              "rpid_str": "237110234048",
              "root_str": "237109455120",
              "parent_str": "237109455120",
              "dialog_str": "237110234048",
              "like": 6,
              "action": 0,
              "member": {
                "mid": "1045141946",
                "uname": "你喝几度开水",
                "sex": "保密",
                "sign": "事了拂衣去，深藏身与名",
                "avatar": "https://i2.hdslb.com/bfs/face/2a9ea1a7cd934e7bcbe70a2b54c57ac9561f6801.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 92,
                  "name": "有爱大佬",
                  "image": "https://i2.hdslb.com/bfs/face/a10ee6b613e0d68d2dfdac8bbf71b94824e10408.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/54f4c31ab9b1f1fa2c29dbbc967f66535699337e.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=15级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1773072000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/2a9ea1a7cd934e7bcbe70a2b54c57ac9561f6801.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "1045141946"
                }
              },
              "content": {
                "message": "毕竟有些创下的伤痕，是一辈子也抚平不了的",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：福建",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237129546592,
              "oid": 1556386640,
              "type": 1,
              "mid": 399928429,
              "root": 237109455120,
              "parent": 237109455120,
              "dialog": 237129546592,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723380721,
              "mid_str": "399928429",
              "oid_str": "1556386640",
              "rpid_str": "237129546592",
              "root_str": "237109455120",
              "parent_str": "237109455120",
              "dialog_str": "237129546592",
              "like": 36,
              "action": 0,
              "member": {
                "mid": "399928429",
                "uname": "幻妄尘",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/9b60226a37d3b46135ee8773be383c0c4500e0cc.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1674489600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/9b60226a37d3b46135ee8773be383c0c4500e0cc.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "399928429"
                }
              },
              "content": {
                "message": "不是每一句对不起，都代表着认为自己有错[doge]",
                "members": [],
                "emote": {
                  "[doge]": {
                    "id": 26,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[doge]",
                    "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "doge"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：河北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237220140816,
              "oid": 1556386640,
              "type": 1,
              "mid": 325721145,
              "root": 237109455120,
              "parent": 237129546592,
              "dialog": 237129546592,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723430996,
              "mid_str": "325721145",
              "oid_str": "1556386640",
              "rpid_str": "237220140816",
              "root_str": "237109455120",
              "parent_str": "237129546592",
              "dialog_str": "237129546592",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "325721145",
                "uname": "鄙人正是在下",
                "sex": "保密",
                "sign": "",
                "avatar": "http://i0.hdslb.com/bfs/face/b723d1747357a732b086164cd4f6d844c800b235.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 91,
                  "name": "有爱楷模",
                  "image": "https://i2.hdslb.com/bfs/face/5a90f715451325c642a6ac39e01195cb6d075734.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/5bfc1b4fb3f4b411495dddb0b2127ad80f6fbcac.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=10级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1611590400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "http://i0.hdslb.com/bfs/face/b723d1747357a732b086164cd4f6d844c800b235.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "325721145"
                }
              },
              "content": {
                "message": "回复 @幻妄尘 :我都说对不起了，你还想怎么样[doge][doge]",
                "at_name_to_mid": {
                  "幻妄尘": 399928429
                },
                "at_name_to_mid_str": {
                  "幻妄尘": "399928429"
                },
                "members": [
                  {
                    "mid": "399928429",
                    "uname": "幻妄尘",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "https://i1.hdslb.com/bfs/face/9b60226a37d3b46135ee8773be383c0c4500e0cc.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 5,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1674489600000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "emote": {
                  "[doge]": {
                    "id": 26,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[doge]",
                    "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "doge"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "399928429",
                "name": "幻妄尘"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共13条回复",
            "sub_reply_title_text": "相关回复共13条",
            "time_desc": "543天前发布",
            "location": "IP属地：江苏",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106051920,
          "oid": 1556386640,
          "type": 1,
          "mid": 436203398,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 3,
          "rcount": 3,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373238,
          "mid_str": "436203398",
          "oid_str": "1556386640",
          "rpid_str": "237106051920",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 173,
          "action": 0,
          "member": {
            "mid": "436203398",
            "uname": "mageon",
            "sex": "保密",
            "sign": "",
            "avatar": "http://i2.hdslb.com/bfs/face/ec78f075283e35cbf2e593946bf4a9a141bdc0ef.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 0,
              "vipDueDate": 0,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": {
              "uid": 436203398,
              "medal_id": 30234,
              "medal_name": "六点半",
              "score": 0,
              "level": 17,
              "intimacy": 0,
              "master_status": 0,
              "is_receive": 0,
              "medal_color": 4294503408,
              "medal_color_end": 4294503408,
              "medal_color_border": 4294503408,
              "medal_color_name": 4289423504,
              "medal_color_level": 4292452534,
              "guard_level": 0,
              "guard_icon": "",
              "honor_icon": "",
              "medal_level_bg_color": 16777215
            },
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "http://i2.hdslb.com/bfs/face/ec78f075283e35cbf2e593946bf4a9a141bdc0ef.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "436203398"
            }
          },
          "content": {
            "message": "然而这只发生在电视里，现实生活中这样的人千千万万",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": null,
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共3条回复",
            "sub_reply_title_text": "相关回复共3条",
            "time_desc": "543天前发布",
            "location": "IP属地：广东",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106345536,
          "oid": 1556386640,
          "type": 1,
          "mid": 3546684669823734,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 30,
          "rcount": 21,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373314,
          "mid_str": "3546684669823734",
          "oid_str": "1556386640",
          "rpid_str": "237106345536",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 322,
          "action": 0,
          "member": {
            "mid": "3546684669823734",
            "uname": "账号已注销",
            "sex": "保密",
            "sign": "",
            "avatar": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
            "rank": "5000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 0,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 0,
              "vipDueDate": 0,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "3546684669823734"
            }
          },
          "content": {
            "message": "那么小慧君一定得到了应有的处罚，而在另一头，追风小叶也能得到那个污蔑他偷拍的女生的道歉[呲牙]",
            "members": [],
            "emote": {
              "[呲牙]": {
                "id": 1902,
                "package_id": 1,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[呲牙]",
                "url": "https://i0.hdslb.com/bfs/emote/b5a5898491944a4268360f2e7a84623149672eb6.png",
                "meta": {
                  "size": 1,
                  "suggest": [
                    ""
                  ]
                },
                "mtime": 1668688325,
                "jump_title": "呲牙"
              }
            },
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237107098992,
              "oid": 1556386640,
              "type": 1,
              "mid": 453941724,
              "root": 237106345536,
              "parent": 237106345536,
              "dialog": 237107098992,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723373585,
              "mid_str": "453941724",
              "oid_str": "1556386640",
              "rpid_str": "237107098992",
              "root_str": "237106345536",
              "parent_str": "237106345536",
              "dialog_str": "237107098992",
              "like": 15,
              "action": 0,
              "member": {
                "mid": "453941724",
                "uname": "春风浅浅夏日绵绵",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1777737600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "453941724"
                }
              },
              "content": {
                "message": "是的，那是在另一个平行时空",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：湖北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237107321808,
              "oid": 1556386640,
              "type": 1,
              "mid": 476089034,
              "root": 237106345536,
              "parent": 237106345536,
              "dialog": 237107321808,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723373646,
              "mid_str": "476089034",
              "oid_str": "1556386640",
              "rpid_str": "237107321808",
              "root_str": "237106345536",
              "parent_str": "237106345536",
              "dialog_str": "237107321808",
              "like": 9,
              "action": 0,
              "member": {
                "mid": "476089034",
                "uname": "唱跳rap打篮球得坤坤",
                "sex": "男",
                "sign": "",
                "avatar": "https://i2.hdslb.com/bfs/face/f881165aef74062e3c33c8130916dd12c19fba5c.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1689955200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/f881165aef74062e3c33c8130916dd12c19fba5c.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "476089034"
                }
              },
              "content": {
                "message": "你不提我都忘记了",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237111214816,
              "oid": 1556386640,
              "type": 1,
              "mid": 281706440,
              "root": 237106345536,
              "parent": 237106345536,
              "dialog": 237111214816,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723374878,
              "mid_str": "281706440",
              "oid_str": "1556386640",
              "rpid_str": "237111214816",
              "root_str": "237106345536",
              "parent_str": "237106345536",
              "dialog_str": "237111214816",
              "like": 7,
              "action": 0,
              "member": {
                "mid": "281706440",
                "uname": "fcz624",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i2.hdslb.com/bfs/face/3021fdb8ecd3913d203ea57cf38589cbcdfdb505.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1700755200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/3021fdb8ecd3913d203ea57cf38589cbcdfdb505.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "281706440"
                }
              },
              "content": {
                "message": "我也正想说，真的有那么正义的话，追风小叶也不会这么被动了",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共21条回复",
            "sub_reply_title_text": "相关回复共21条",
            "time_desc": "543天前发布",
            "location": "IP属地：河北",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237105589184,
          "oid": 1556386640,
          "type": 1,
          "mid": 364743411,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 42,
          "rcount": 32,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373115,
          "mid_str": "364743411",
          "oid_str": "1556386640",
          "rpid_str": "237105589184",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 171,
          "action": 0,
          "member": {
            "mid": "364743411",
            "uname": "语直行暖",
            "sex": "男",
            "sign": "如果你独自一个人笑了，那是真心的笑",
            "avatar": "https://i0.hdslb.com/bfs/face/3e8d48644fb1588a714b06a74329c39c80e14c8f.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 10,
              "name": "见习偶像",
              "image": "https://i2.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
              "image_small": "https://i2.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
              "level": "普通勋章",
              "condition": "所有自制视频总播放数>=10万，数据次日更新"
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 2,
              "vipDueDate": 1791216000000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                "text": "年度大会员",
                "label_theme": "annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                "label_id": -22,
                "label_goto": {
                  "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                  "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                }
              },
              "avatar_subscript": 1,
              "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": {
                "id": 2642,
                "name": "三周年恋曲",
                "image": "https://i0.hdslb.com/bfs/garb/item/40c3dda36cd5381ad4de0c284ac2470c6da6bc00.png",
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=2642&isdiy=0&part=card_bg&from=reply&f_source=garb&vmid=364743411&native.theme=1&navhide=1",
                "fan": {
                  "is_fan": 1,
                  "number": 119218,
                  "color": "#e47ed3",
                  "name": "会员购3周年",
                  "num_desc": "119218",
                  "num_prefix": "NO.",
                  "color_format": {
                    "start_point": "0,0",
                    "end_point": "0,100",
                    "colors": [
                      "#e47ed3FF",
                      "#e47ed3FF"
                    ],
                    "gradients": [
                      0,
                      100
                    ]
                  }
                },
                "type": "suit",
                "image_group": null
              },
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {
              "card_bg": {
                "id": 2642,
                "name": "三周年恋曲",
                "image": "https://i0.hdslb.com/bfs/garb/item/40c3dda36cd5381ad4de0c284ac2470c6da6bc00.png",
                "jump_url": "https://www.bilibili.com/h5/mall/equity-link/collect-home?item_id=2642&isdiy=0&part=card_bg&from=reply&f_source=garb&vmid=364743411&native.theme=1&navhide=1",
                "fan": {
                  "is_fan": 1,
                  "number": 119218,
                  "color": "#e47ed3",
                  "name": "会员购3周年",
                  "num_desc": "119218",
                  "num_prefix": "NO.",
                  "color_format": {
                    "start_point": "0,0",
                    "end_point": "0,100",
                    "colors": [
                      "#e47ed3FF",
                      "#e47ed3FF"
                    ],
                    "gradients": [
                      0,
                      100
                    ]
                  }
                },
                "type": "suit"
              }
            },
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/3e8d48644fb1588a714b06a74329c39c80e14c8f.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 1,
                        "axis_x": 1.025,
                        "axis_y": 1.025
                      },
                      "size_spec": {
                        "width": 0.41666666666666663,
                        "height": 0.41666666666666663
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 2,
                          "local": 1
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "364743411"
            }
          },
          "content": {
            "message": "然而现实没有这种魔法",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237112538864,
              "oid": 1556386640,
              "type": 1,
              "mid": 482155635,
              "root": 237105589184,
              "parent": 237105589184,
              "dialog": 237112538864,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723375341,
              "mid_str": "482155635",
              "oid_str": "1556386640",
              "rpid_str": "237112538864",
              "root_str": "237105589184",
              "parent_str": "237105589184",
              "dialog_str": "237112538864",
              "like": 3,
              "action": 0,
              "member": {
                "mid": "482155635",
                "uname": "天下之書",
                "sex": "男",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/46bcb7b890b5db9edf2a9f60a881aeace33505d1.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 1,
                "senior": {
                  "status": 2
                },
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1770825600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_vip.png",
                    "text": "大会员",
                    "label_theme": "vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/46bcb7b890b5db9edf2a9f60a881aeace33505d1.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "482155635"
                }
              },
              "content": {
                "message": "开放时实定位就行了[doge]",
                "members": [],
                "emote": {
                  "[doge]": {
                    "id": 26,
                    "package_id": 1,
                    "state": 0,
                    "type": 1,
                    "attr": 0,
                    "text": "[doge]",
                    "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                    "meta": {
                      "size": 1,
                      "suggest": [
                        ""
                      ]
                    },
                    "mtime": 1668688325,
                    "jump_title": "doge"
                  }
                },
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：江西",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237117214944,
              "oid": 1556386640,
              "type": 1,
              "mid": 1227059249,
              "root": 237105589184,
              "parent": 237112538864,
              "dialog": 237112538864,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723376835,
              "mid_str": "1227059249",
              "oid_str": "1556386640",
              "rpid_str": "237117214944",
              "root_str": "237105589184",
              "parent_str": "237112538864",
              "dialog_str": "237112538864",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "1227059249",
                "uname": "观隅渡川时序知安",
                "sex": "男",
                "sign": "网上为博关注的争执者，皆因内心空茫、自我认同缺失，惯于用无成本的浅层方式强行博取关注，逃避深度交流与真实表达，以此掩饰内心的空虚和现实的无力",
                "avatar": "https://i2.hdslb.com/bfs/face/c3612fea3643845dbed2cdb5f6b6808d8d6c4f82.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1736179200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/c3612fea3643845dbed2cdb5f6b6808d8d6c4f82.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "1227059249"
                }
              },
              "content": {
                "message": "回复 @天下之書 :实时",
                "at_name_to_mid": {
                  "天下之書": 482155635
                },
                "at_name_to_mid_str": {
                  "天下之書": "482155635"
                },
                "members": [
                  {
                    "mid": "482155635",
                    "uname": "天下之書",
                    "sex": "男",
                    "sign": "",
                    "avatar": "https://i0.hdslb.com/bfs/face/46bcb7b890b5db9edf2a9f60a881aeace33505d1.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 1,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1770825600000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 1,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "http://i0.hdslb.com/bfs/vip/label_vip.png",
                        "text": "大会员",
                        "label_theme": "vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png",
                        "label_id": -22,
                        "label_goto": {
                          "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                          "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                        }
                      },
                      "avatar_subscript": 1,
                      "nickname_color": "#FB7299"
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "482155635",
                "name": "天下之書"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：安徽",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237166891632,
              "oid": 1556386640,
              "type": 1,
              "mid": 526042392,
              "root": 237105589184,
              "parent": 237105589184,
              "dialog": 237166891632,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723392053,
              "mid_str": "526042392",
              "oid_str": "1556386640",
              "rpid_str": "237166891632",
              "root_str": "237105589184",
              "parent_str": "237105589184",
              "dialog_str": "237166891632",
              "like": 1,
              "action": 0,
              "member": {
                "mid": "526042392",
                "uname": "巧红_",
                "sex": "男",
                "sign": "善待自己的同胞！",
                "avatar": "https://i0.hdslb.com/bfs/face/8e15c7bc46a6f9dc2ca06e17728bdde34a4911f4.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/8e15c7bc46a6f9dc2ca06e17728bdde34a4911f4.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "526042392"
                }
              },
              "content": {
                "message": "网友举报次数达到一定数值，由专门的审核员审核该账号的信息（避免水军恶意举报），若情况属实，且影响力达到一定程度，直接判刑。造谣应该纳入刑法之中，恶意评论，恶意网暴，恶心带节奏等等都要判刑。\n惩罚一定要严格，不然不痛不痒没人会在乎。\n一个人只能有一个账号，且用身份证号➕人脸核实验证注册。",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：河南",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共32条回复",
            "sub_reply_title_text": "相关回复共32条",
            "time_desc": "543天前发布",
            "location": "IP属地：河南",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106886528,
          "oid": 1556386640,
          "type": 1,
          "mid": 3461583067941444,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 4,
          "rcount": 4,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373480,
          "mid_str": "3461583067941444",
          "oid_str": "1556386640",
          "rpid_str": "237106886528",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 103,
          "action": 0,
          "member": {
            "mid": "3461583067941444",
            "uname": "古仔12138",
            "sex": "男",
            "sign": "人在江湖，身不由己。",
            "avatar": "https://i0.hdslb.com/bfs/face/f34ba2f9b30f46f4a0ab638524a6495596113c02.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 0,
              "vipDueDate": 0,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/f34ba2f9b30f46f4a0ab638524a6495596113c02.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "3461583067941444"
            }
          },
          "content": {
            "message": "相信我，现实里这种人如果不是死到临头，是绝不会改的。",
            "members": [],
            "jump_url": {
              "到临": {
                "title": "到临",
                "state": 0,
                "prefix_icon": "https://i0.hdslb.com/bfs/reply/9f3ad0659e84c96a711b88dd33f4bc2e945045e0.png",
                "app_url_schema": "bilibili://search?from=appcommentline_search&search_from_source=appcommentline_search&direct_return=true&keyword=%E5%88%B0%E4%B8%B4&seid=16445590447262313452&from_avid=1556386640&from_comid=237106886528",
                "app_name": "",
                "app_package_name": "",
                "click_report": "",
                "is_half_screen": false,
                "exposure_report": "",
                "extra": {
                  "goods_show_type": 0,
                  "is_word_search": true,
                  "goods_cm_control": 0,
                  "goods_click_report": "",
                  "goods_exposure_report": ""
                },
                "underline": false,
                "match_once": true,
                "pc_url": "//search.bilibili.com/all?from_source=webcommentline_search&keyword=%E5%88%B0%E4%B8%B4&seid=16445590447262313452&from_avid=1556386640&from_comid=237106886528",
                "icon_position": 1
              }
            },
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237107483888,
              "oid": 1556386640,
              "type": 1,
              "mid": 646026774,
              "root": 237106886528,
              "parent": 237106886528,
              "dialog": 237107483888,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723373721,
              "mid_str": "646026774",
              "oid_str": "1556386640",
              "rpid_str": "237107483888",
              "root_str": "237106886528",
              "parent_str": "237106886528",
              "dialog_str": "237107483888",
              "like": 19,
              "action": 0,
              "member": {
                "mid": "646026774",
                "uname": "叶浽",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/a659ac2f457db8432c95c64b565ce74b1dfc1629.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/a659ac2f457db8432c95c64b565ce74b1dfc1629.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "646026774"
                }
              },
              "content": {
                "message": "还是那句话，他认错不是知道自己错了，而是知道自己要死了",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：河南",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237107917312,
              "oid": 1556386640,
              "type": 1,
              "mid": 3461583067941444,
              "root": 237106886528,
              "parent": 237107483888,
              "dialog": 237107483888,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723373863,
              "mid_str": "3461583067941444",
              "oid_str": "1556386640",
              "rpid_str": "237107917312",
              "root_str": "237106886528",
              "parent_str": "237107483888",
              "dialog_str": "237107483888",
              "like": 4,
              "action": 0,
              "member": {
                "mid": "3461583067941444",
                "uname": "古仔12138",
                "sex": "男",
                "sign": "人在江湖，身不由己。",
                "avatar": "https://i0.hdslb.com/bfs/face/f34ba2f9b30f46f4a0ab638524a6495596113c02.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": {
                  "pendant": null,
                  "cardbg": null,
                  "cardbg_with_focus": null
                },
                "user_sailing_v2": {},
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/f34ba2f9b30f46f4a0ab638524a6495596113c02.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "3461583067941444"
                }
              },
              "content": {
                "message": "回复 @随时Amor :错，那是不可能错的。认，那是暂时认的。只要度过了这次危机，回头又会卷土重来。本性如此。",
                "at_name_to_mid": {
                  "随时Amor": 646026774
                },
                "at_name_to_mid_str": {
                  "随时Amor": "646026774"
                },
                "members": [
                  {
                    "mid": "646026774",
                    "uname": "叶浽",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "https://i0.hdslb.com/bfs/face/a659ac2f457db8432c95c64b565ce74b1dfc1629.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 5,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 0,
                      "vipDueDate": 0,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "646026774",
                "name": "随时Amor"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：浙江",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237367789968,
              "oid": 1556386640,
              "type": 1,
              "mid": 452070388,
              "root": 237106886528,
              "parent": 237106886528,
              "dialog": 237367789968,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723478878,
              "mid_str": "452070388",
              "oid_str": "1556386640",
              "rpid_str": "237367789968",
              "root_str": "237106886528",
              "parent_str": "237106886528",
              "dialog_str": "237367789968",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "452070388",
                "uname": "魔女-喵喵",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 4,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1725292800000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "452070388"
                }
              },
              "content": {
                "message": "看到有个人发了被徐云告的短信通知要出庭的截图，还在网上不停的各种说。。。。",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共4条回复",
            "sub_reply_title_text": "相关回复共4条",
            "time_desc": "543天前发布",
            "location": "IP属地：浙江",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237341181696,
          "oid": 1556386640,
          "type": 1,
          "mid": 1394697760,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 16,
          "rcount": 7,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723470861,
          "mid_str": "1394697760",
          "oid_str": "1556386640",
          "rpid_str": "237341181696",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 101,
          "action": 0,
          "member": {
            "mid": "1394697760",
            "uname": "栗悟饭と龟拨气功",
            "sex": "女",
            "sign": "不回复若只，若只也请拉黑我。若只不予交流",
            "avatar": "https://i1.hdslb.com/bfs/face/334fec7d3986cc997d98f102460eafeac6f56008.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 1886,
              "name": "公主连结可可萝",
              "image": "https://i1.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png",
              "image_enhance_frame": "",
              "n_pid": 1886
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 2,
              "vipDueDate": 1787241600000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                "text": "年度大会员",
                "label_theme": "annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                "label_id": -22,
                "label_goto": {
                  "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                  "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                }
              },
              "avatar_subscript": 1,
              "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": {
                "id": 1886,
                "name": "公主连结可可萝",
                "image": "https://i0.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png",
                "jump_url": "",
                "type": "vip",
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png",
                "image_enhance_frame": ""
              },
              "cardbg": {
                "id": 69431,
                "name": "名侦探柯南30周年",
                "image": "https://i0.hdslb.com/bfs/garb/open/a0f73a0760b995bf94c42c3a245dea6465314c84.png",
                "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=102704&from=reply&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                "fan": {
                  "is_fan": 1,
                  "number": 1019,
                  "color": "#BFC8D2",
                  "name": "",
                  "num_desc": "001019",
                  "num_prefix": "CD.",
                  "color_format": {
                    "start_point": "0,0",
                    "end_point": "100,100",
                    "colors": [
                      "#B8C7D0FF",
                      "#A2A7B0FF"
                    ],
                    "gradients": [
                      0,
                      100
                    ]
                  }
                },
                "type": "collect_card",
                "image_group": null
              },
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {
              "pendant": {
                "id": 1886,
                "name": "公主连结可可萝",
                "image": "https://i0.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png",
                "type": "vip",
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png"
              },
              "card_bg": {
                "id": 69431,
                "name": "名侦探柯南30周年",
                "image": "https://i0.hdslb.com/bfs/garb/open/a0f73a0760b995bf94c42c3a245dea6465314c84.png",
                "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=102704&from=reply&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                "fan": {
                  "is_fan": 1,
                  "number": 1019,
                  "color": "#BFC8D2",
                  "num_desc": "001019",
                  "num_prefix": "CD.",
                  "color_format": {
                    "start_point": "0,0",
                    "end_point": "100,100",
                    "colors": [
                      "#B8C7D0FF",
                      "#A2A7B0FF"
                    ],
                    "gradients": [
                      0,
                      100
                    ]
                  }
                },
                "type": "collect_card"
              }
            },
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 0.787,
                        "height": 0.787
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/334fec7d3986cc997d98f102460eafeac6f56008.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1.375,
                        "height": 1.375
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/garb/item/f8498be6ba4e87e7469943abafa27fff9975c658.png",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 1,
                        "axis_x": 0.9685,
                        "axis_y": 0.9851666666666666
                      },
                      "size_spec": {
                        "width": 0.41666666666666663,
                        "height": 0.41666666666666663
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 2,
                          "local": 1
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "1394697760"
            }
          },
          "content": {
            "message": "在小红书 孙吧 微博上应用这个功能我都不敢想有多爽",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237359862688,
              "oid": 1556386640,
              "type": 1,
              "mid": 388629073,
              "root": 237341181696,
              "parent": 237341181696,
              "dialog": 237359862688,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723476277,
              "mid_str": "388629073",
              "oid_str": "1556386640",
              "rpid_str": "237359862688",
              "root_str": "237341181696",
              "parent_str": "237341181696",
              "dialog_str": "237359862688",
              "like": 1,
              "action": 0,
              "member": {
                "mid": "388629073",
                "uname": "白风远x沐婉荷",
                "sex": "男",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/4add3acfc930fcd07d06ea5e10a3a377314141c2.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 2961,
                  "name": "星座系列：天蝎座",
                  "image": "https://i1.hdslb.com/bfs/garb/item/05fcaa8fdcc39ffb35d32bc42f67716f309dc027.png",
                  "expire": 0,
                  "image_enhance": "https://i1.hdslb.com/bfs/garb/item/05fcaa8fdcc39ffb35d32bc42f67716f309dc027.png",
                  "image_enhance_frame": "",
                  "n_pid": 2961
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1786723200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 0.787,
                            "height": 0.787
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/4add3acfc930fcd07d06ea5e10a3a377314141c2.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.375,
                            "height": 1.375
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "PENDENT_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/garb/item/05fcaa8fdcc39ffb35d32bc42f67716f309dc027.png",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 0.9685,
                            "axis_y": 0.9851666666666666
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "388629073"
                }
              },
              "content": {
                "message": "怎么看不起我小绿书",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：北京",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 238227057280,
              "oid": 1556386640,
              "type": 1,
              "mid": 29151647,
              "root": 237341181696,
              "parent": 237341181696,
              "dialog": 238227057280,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723825627,
              "mid_str": "29151647",
              "oid_str": "1556386640",
              "rpid_str": "238227057280",
              "root_str": "237341181696",
              "parent_str": "237341181696",
              "dialog_str": "238227057280",
              "like": 2,
              "action": 0,
              "member": {
                "mid": "29151647",
                "uname": "chickenbutt",
                "sex": "男",
                "sign": "我都关注你了 你不来看看我动态么",
                "avatar": "https://i2.hdslb.com/bfs/face/cdf060d6cf0e679b42fcc9730a7858cfbced3ff8.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 90,
                  "name": "有爱萌新",
                  "image": "https://i2.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                  "image_small": "https://i0.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=5级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1741968000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/cdf060d6cf0e679b42fcc9730a7858cfbced3ff8.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "29151647"
                }
              },
              "content": {
                "message": "不带B站？",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "538天前发布",
                "location": "IP属地：广西",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 238287261360,
              "oid": 1556386640,
              "type": 1,
              "mid": 367350381,
              "root": 237341181696,
              "parent": 237341181696,
              "dialog": 238287261360,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723864036,
              "mid_str": "367350381",
              "oid_str": "1556386640",
              "rpid_str": "238287261360",
              "root_str": "237341181696",
              "parent_str": "237341181696",
              "dialog_str": "238287261360",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "367350381",
                "uname": "003393",
                "sex": "男",
                "sign": "Palestine  Free！",
                "avatar": "https://i0.hdslb.com/bfs/face/6087113dc5f2c3cf3ae2bf3f57a6e8f87562217f.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 91,
                  "name": "有爱楷模",
                  "image": "https://i0.hdslb.com/bfs/face/5a90f715451325c642a6ac39e01195cb6d075734.png",
                  "image_small": "https://i1.hdslb.com/bfs/face/5bfc1b4fb3f4b411495dddb0b2127ad80f6fbcac.png",
                  "level": "普通勋章",
                  "condition": "当前持有粉丝勋章最高等级>=10级"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/6087113dc5f2c3cf3ae2bf3f57a6e8f87562217f.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "367350381"
                }
              },
              "content": {
                "message": "不止孙吧",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "537天前发布",
                "location": "IP属地：福建",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共7条回复",
            "sub_reply_title_text": "相关回复共7条",
            "time_desc": "542天前发布",
            "location": "IP属地：陕西",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237196092656,
          "oid": 1556386640,
          "type": 1,
          "mid": 14885935,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 21,
          "rcount": 11,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723418376,
          "mid_str": "14885935",
          "oid_str": "1556386640",
          "rpid_str": "237196092656",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 119,
          "action": 0,
          "member": {
            "mid": "14885935",
            "uname": "秋水掩月",
            "sex": "男",
            "sign": "没有我不知道的车牌（腿控版）",
            "avatar": "https://i1.hdslb.com/bfs/face/4708bb817fa4cd251ce400add6e9c08f5a245f5d.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 1,
            "senior": {
              "status": 2
            },
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 997,
              "name": "斯莱特林",
              "image": "https://i1.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png",
              "image_enhance_frame": "",
              "n_pid": 997
            },
            "nameplate": {
              "nid": 71,
              "name": "资深委员",
              "image": "https://i1.hdslb.com/bfs/face/5beecb936bd7422a5ac11c9c5c8df56f334b2a65.png",
              "image_small": "https://i2.hdslb.com/bfs/face/9f8e0d5cd0201cf7177199d9365be562be1deb05.png",
              "level": "高级勋章",
              "condition": "风纪委员连任期数 >= 6"
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 2,
              "vipDueDate": 1778515200000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                "text": "年度大会员",
                "label_theme": "annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                "label_id": -22,
                "label_goto": {
                  "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                  "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                }
              },
              "avatar_subscript": 1,
              "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": {
                "id": 997,
                "name": "斯莱特林",
                "image": "https://i0.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png",
                "jump_url": "",
                "type": "vip",
                "image_enhance": "https://i0.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png",
                "image_enhance_frame": ""
              },
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {
              "pendant": {
                "id": 997,
                "name": "斯莱特林",
                "image": "https://i0.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png",
                "type": "vip",
                "image_enhance": "https://i0.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png"
              }
            },
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 0.787,
                        "height": 0.787
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/4708bb817fa4cd251ce400add6e9c08f5a245f5d.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1.375,
                        "height": 1.375
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/fe28eff09605fda73ccc2c80ba4a47e723cf3d63.png",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 1,
                        "axis_x": 0.9685,
                        "axis_y": 0.9851666666666666
                      },
                      "size_spec": {
                        "width": 0.41666666666666663,
                        "height": 0.41666666666666663
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 2,
                          "local": 1
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "14885935"
            }
          },
          "content": {
            "message": "什么时候地铁案有个令人信服的结果了\n我就信[doge]",
            "members": [],
            "emote": {
              "[doge]": {
                "id": 26,
                "package_id": 1,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[doge]",
                "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                "meta": {
                  "size": 1,
                  "suggest": [
                    ""
                  ]
                },
                "mtime": 1668688325,
                "jump_title": "doge"
              }
            },
            "jump_url": {
              "地铁案": {
                "title": "地铁案",
                "state": 0,
                "prefix_icon": "https://i0.hdslb.com/bfs/reply/9f3ad0659e84c96a711b88dd33f4bc2e945045e0.png",
                "app_url_schema": "bilibili://search?from=appcommentline_search&search_from_source=appcommentline_search&direct_return=true&keyword=%E5%9C%B0%E9%93%81%E6%A1%88&seid=16445590447262313452&from_avid=1556386640&from_comid=237196092656",
                "app_name": "",
                "app_package_name": "",
                "click_report": "",
                "is_half_screen": false,
                "exposure_report": "",
                "extra": {
                  "goods_show_type": 0,
                  "is_word_search": true,
                  "goods_cm_control": 0,
                  "goods_click_report": "",
                  "goods_exposure_report": ""
                },
                "underline": false,
                "match_once": true,
                "pc_url": "//search.bilibili.com/all?from_source=webcommentline_search&keyword=%E5%9C%B0%E9%93%81%E6%A1%88&seid=16445590447262313452&from_avid=1556386640&from_comid=237196092656",
                "icon_position": 1
              }
            },
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237335564256,
              "oid": 1556386640,
              "type": 1,
              "mid": 3546562705754206,
              "root": 237196092656,
              "parent": 237196092656,
              "dialog": 237335564256,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723469193,
              "mid_str": "3546562705754206",
              "oid_str": "1556386640",
              "rpid_str": "237335564256",
              "root_str": "237196092656",
              "parent_str": "237196092656",
              "dialog_str": "237335564256",
              "like": 1,
              "action": 0,
              "member": {
                "mid": "3546562705754206",
                "uname": "i日落Avenue",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/309e6a8505acd2a247fad7b80ba90ee82f6b206a.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/309e6a8505acd2a247fad7b80ba90ee82f6b206a.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "3546562705754206"
                }
              },
              "content": {
                "message": "什么时候柳叶复活了我就信",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共11条回复",
            "sub_reply_title_text": "相关回复共11条",
            "time_desc": "543天前发布",
            "location": "IP属地：上海",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106099072,
          "oid": 1556386640,
          "type": 1,
          "mid": 25494084,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 14,
          "rcount": 12,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373231,
          "mid_str": "25494084",
          "oid_str": "1556386640",
          "rpid_str": "237106099072",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 140,
          "action": 0,
          "member": {
            "mid": "25494084",
            "uname": "仙予涂",
            "sex": "保密",
            "sign": "",
            "avatar": "https://i0.hdslb.com/bfs/face/30c1186b2d23ef65c65e3bcb3665f86ee3bf1f0b.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 0,
              "vipDueDate": 0,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/30c1186b2d23ef65c65e3bcb3665f86ee3bf1f0b.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "25494084"
            }
          },
          "content": {
            "message": "最近正能量有点多啊，能不能多发几期主搞笑元素的[星星眼]",
            "members": [],
            "emote": {
              "[星星眼]": {
                "id": 1956,
                "package_id": 1,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[星星眼]",
                "url": "https://i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png",
                "meta": {
                  "size": 1,
                  "suggest": [
                    ""
                  ]
                },
                "mtime": 1668688325,
                "jump_title": "星星眼"
              }
            },
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237115450640,
              "oid": 1556386640,
              "type": 1,
              "mid": 1519108,
              "root": 237106099072,
              "parent": 237106099072,
              "dialog": 237115450640,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723376274,
              "mid_str": "1519108",
              "oid_str": "1556386640",
              "rpid_str": "237115450640",
              "root_str": "237106099072",
              "parent_str": "237106099072",
              "dialog_str": "237115450640",
              "like": 22,
              "action": 0,
              "member": {
                "mid": "1519108",
                "uname": "Amber_Marina",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/71d194f13752f27d5822d6de17593955fc6748c5.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1518537600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/71d194f13752f27d5822d6de17593955fc6748c5.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "1519108"
                }
              },
              "content": {
                "message": "这期就笑的很开心啊",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：山西",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237115502288,
              "oid": 1556386640,
              "type": 1,
              "mid": 28495198,
              "root": 237106099072,
              "parent": 237106099072,
              "dialog": 237115502288,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723376324,
              "mid_str": "28495198",
              "oid_str": "1556386640",
              "rpid_str": "237115502288",
              "root_str": "237106099072",
              "parent_str": "237106099072",
              "dialog_str": "237115502288",
              "like": 11,
              "action": 0,
              "member": {
                "mid": "28495198",
                "uname": "保持D低调",
                "sex": "男",
                "sign": "",
                "avatar": "https://i1.hdslb.com/bfs/face/9f7f60a705258d1383cf9985df2407077263166a.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1694275200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/9f7f60a705258d1383cf9985df2407077263166a.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "28495198"
                }
              },
              "content": {
                "message": "这期不搞笑吗？",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 249908749152,
              "oid": 1556386640,
              "type": 1,
              "mid": 3546772035078808,
              "root": 237106099072,
              "parent": 237115502288,
              "dialog": 237115502288,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1734404193,
              "mid_str": "3546772035078808",
              "oid_str": "1556386640",
              "rpid_str": "249908749152",
              "root_str": "237106099072",
              "parent_str": "237115502288",
              "dialog_str": "237115502288",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "3546772035078808",
                "uname": "无鹿可退",
                "sex": "保密",
                "sign": "让你失望了吧，消愁",
                "avatar": "https://i1.hdslb.com/bfs/face/88057969aa3c6b8d3e249284bf48ec28213386a4.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 4,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1770912000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_vip.png",
                    "text": "大会员",
                    "label_theme": "vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/88057969aa3c6b8d3e249284bf48ec28213386a4.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "3546772035078808"
                }
              },
              "content": {
                "message": "回复 @保持D低调 :你要搞懂搞笑和爽的区别，这期和搞笑真扯不上什么关系",
                "at_name_to_mid": {
                  "保持D低调": 28495198
                },
                "at_name_to_mid_str": {
                  "保持D低调": "28495198"
                },
                "members": [
                  {
                    "mid": "28495198",
                    "uname": "保持D低调",
                    "sex": "男",
                    "sign": "",
                    "avatar": "https://i1.hdslb.com/bfs/face/9f7f60a705258d1383cf9985df2407077263166a.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1694275200000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "28495198",
                "name": "保持D低调"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "415天前发布",
                "location": "IP属地：江苏",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共12条回复",
            "sub_reply_title_text": "相关回复共12条",
            "time_desc": "543天前发布",
            "location": "IP属地：浙江",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237119626528,
          "oid": 1556386640,
          "type": 1,
          "mid": 15100769,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 17,
          "rcount": 13,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723377597,
          "mid_str": "15100769",
          "oid_str": "1556386640",
          "rpid_str": "237119626528",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 76,
          "action": 0,
          "member": {
            "mid": "15100769",
            "uname": "stray从心",
            "sex": "男",
            "sign": "",
            "avatar": "https://i2.hdslb.com/bfs/face/7e63dc4ed04b90e2cb6739f97755547bc10242a8.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1746633600000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/7e63dc4ed04b90e2cb6739f97755547bc10242a8.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "15100769"
            }
          },
          "content": {
            "message": "想起那句话 “我敢骂世界，骂上帝；我毁佛谤祖，我睥睨天下，但是我不敢骂楼上每个周末都在装修的邻居。”\n实际上大家都是这样",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237209959312,
              "oid": 1556386640,
              "type": 1,
              "mid": 34425679,
              "root": 237119626528,
              "parent": 237119626528,
              "dialog": 237209959312,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723426841,
              "mid_str": "34425679",
              "oid_str": "1556386640",
              "rpid_str": "237209959312",
              "root_str": "237119626528",
              "parent_str": "237119626528",
              "dialog_str": "237209959312",
              "like": 7,
              "action": 0,
              "member": {
                "mid": "34425679",
                "uname": "你永远的相公",
                "sex": "保密",
                "sign": "老子不光歧视嗨人，还歧视为它们说话的玩意",
                "avatar": "https://i1.hdslb.com/bfs/face/b4c2c43cc3c5eac973c80b29724a3128276ca98b.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1644681600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/b4c2c43cc3c5eac973c80b29724a3128276ca98b.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "34425679"
                }
              },
              "content": {
                "message": "咱们国家虽然禁枪战，但是刀战跟嘴炮是每天发生的，你这么说只能说明你是这种人，我不信你长这么大，就没见过硬刚的人，多少有点儿忒窝囊了。就算不骂你也可以报警的。法律规定八点之后装修。那他妈是犯法的",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：北京",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237240241584,
              "oid": 1556386640,
              "type": 1,
              "mid": 515699644,
              "root": 237119626528,
              "parent": 237119626528,
              "dialog": 237240241584,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723437673,
              "mid_str": "515699644",
              "oid_str": "1556386640",
              "rpid_str": "237240241584",
              "root_str": "237119626528",
              "parent_str": "237119626528",
              "dialog_str": "237240241584",
              "like": 3,
              "action": 0,
              "member": {
                "mid": "515699644",
                "uname": "玩个喵",
                "sex": "保密",
                "sign": "一直都有，需要合作留下你的联系方式就行",
                "avatar": "https://i1.hdslb.com/bfs/face/faca0be0af3f13844d0c4d7bec76f5b0e3c3cedf.webp",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 1,
                "senior": {
                  "status": 2
                },
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1797091200000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": {
                  "region": {
                    "type": 1,
                    "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif",
                    "show_status": 1
                  }
                },
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1.3,
                            "height": 1.3
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 4,
                          "res_animation": {
                            "webp_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/faca0be0af3f13844d0c4d7bec76f5b0e3c3cedf.webp",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.175,
                            "axis_y": 1.175
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 4,
                          "res_animation": {
                            "webp_src": {
                              "src_type": 1,
                              "placeholder": 5,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "515699644"
                }
              },
              "content": {
                "message": "小区的话，周末装修打物业电话投诉就行了，不听物业那边会停电的。",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "542天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 239199068464,
              "oid": 1556386640,
              "type": 1,
              "mid": 372259386,
              "root": 237119626528,
              "parent": 237119626528,
              "dialog": 239199068464,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1724228217,
              "mid_str": "372259386",
              "oid_str": "1556386640",
              "rpid_str": "239199068464",
              "root_str": "237119626528",
              "parent_str": "237119626528",
              "dialog_str": "239199068464",
              "like": 2,
              "action": 0,
              "member": {
                "mid": "372259386",
                "uname": "千反田爱瑠916",
                "sex": "保密",
                "sign": "快查成分，米舟物碧，来吧",
                "avatar": "https://i0.hdslb.com/bfs/face/854971eb19cfef126c1057754655432f9f37165e.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1735660800000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/854971eb19cfef126c1057754655432f9f37165e.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "372259386"
                }
              },
              "content": {
                "message": "又大家了？",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "533天前发布",
                "location": "IP属地：安徽",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共13条回复",
            "sub_reply_title_text": "相关回复共13条",
            "time_desc": "543天前发布",
            "location": "IP属地：广东",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106913616,
          "oid": 1556386640,
          "type": 1,
          "mid": 636122855,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 3,
          "rcount": 1,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373505,
          "mid_str": "636122855",
          "oid_str": "1556386640",
          "rpid_str": "237106913616",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 75,
          "action": 0,
          "member": {
            "mid": "636122855",
            "uname": "饕餮lzl",
            "sex": "保密",
            "sign": "没有理想的生活充满着猜疑",
            "avatar": "https://i2.hdslb.com/bfs/face/360a68369fedc9e58775cb25c084c08dc4c71b88.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 2511,
              "name": "初音未来13周年",
              "image": "https://i2.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
              "expire": 0,
              "image_enhance": "https://i2.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
              "image_enhance_frame": "https://i2.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png",
              "n_pid": 2511
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1769961600000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": {
                "id": 2511,
                "name": "初音未来13周年",
                "image": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                "jump_url": "",
                "type": "suit",
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
              },
              "cardbg": {
                "id": 71004,
                "name": "迪士尼大电影收藏集",
                "image": "https://i0.hdslb.com/bfs/garb/open/41fe2106c7f7ba1f7df2d6c1ce83aa708872b51b.png",
                "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=103357&from=reply&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                "fan": {
                  "is_fan": 1,
                  "number": 41,
                  "color": "#E5B261",
                  "name": "",
                  "num_desc": "000041",
                  "num_prefix": "CD.",
                  "color_format": {
                    "start_point": "0,0",
                    "end_point": "100,100",
                    "colors": [
                      "#E29D2FFF",
                      "#FDC773FF",
                      "#FDC773FF",
                      "#E19B2EFF"
                    ],
                    "gradients": [
                      0,
                      33,
                      67,
                      100
                    ]
                  }
                },
                "type": "collect_card",
                "image_group": null
              },
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {
              "pendant": {
                "id": 2511,
                "name": "初音未来13周年",
                "image": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                "type": "suit",
                "image_enhance": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
              },
              "card_bg": {
                "id": 71004,
                "name": "迪士尼大电影收藏集",
                "image": "https://i0.hdslb.com/bfs/garb/open/41fe2106c7f7ba1f7df2d6c1ce83aa708872b51b.png",
                "jump_url": "https://www.bilibili.com/h5/mall/digital-card/home?act_id=103357&from=reply&f_source=garb&-Abrowser=live&hybrid_set_header=2&navhide=1&anchor_task=1",
                "fan": {
                  "is_fan": 1,
                  "number": 41,
                  "color": "#E5B261",
                  "num_desc": "000041",
                  "num_prefix": "CD.",
                  "color_format": {
                    "start_point": "0,0",
                    "end_point": "100,100",
                    "colors": [
                      "#E29D2FFF",
                      "#FDC773FF",
                      "#FDC773FF",
                      "#E19B2EFF"
                    ],
                    "gradients": [
                      0,
                      33,
                      67,
                      100
                    ]
                  }
                },
                "type": "collect_card"
              }
            },
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "layers": [
                {
                  "layers": [
                    {
                      "visible": true,
                      "general_spec": {
                        "pos_spec": {
                          "coordinate_pos": 2,
                          "axis_x": 0.9,
                          "axis_y": 0.9
                        },
                        "size_spec": {
                          "width": 0.787,
                          "height": 0.787
                        },
                        "render_spec": {
                          "opacity": 1
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "AVATAR_LAYER": {},
                          "GENERAL_CFG": {
                            "config_type": 1,
                            "general_config": {
                              "web_css_style": {
                                "borderRadius": "50%"
                              }
                            }
                          }
                        },
                        "is_critical": true
                      },
                      "resource": {
                        "res_type": 3,
                        "res_image": {
                          "image_src": {
                            "src_type": 1,
                            "placeholder": 6,
                            "remote": {
                              "url": "https://i2.hdslb.com/bfs/face/360a68369fedc9e58775cb25c084c08dc4c71b88.jpg",
                              "bfs_style": "widget-layer-avatar"
                            }
                          }
                        }
                      }
                    }
                  ],
                  "is_critical_group": true
                },
                {
                  "layers": [
                    {
                      "visible": true,
                      "general_spec": {
                        "pos_spec": {
                          "coordinate_pos": 2,
                          "axis_x": 0.9,
                          "axis_y": 0.9
                        },
                        "size_spec": {
                          "width": 1.375,
                          "height": 1.375
                        },
                        "render_spec": {
                          "opacity": 1
                        }
                      },
                      "layer_config": {
                        "tags": {
                          "PENDENT_LAYER": {}
                        }
                      },
                      "resource": {
                        "res_type": 4,
                        "res_animation": {
                          "webp_src": {
                            "src_type": 1,
                            "remote": {
                              "url": "https://i2.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                              "bfs_style": "widget-layer-avatar"
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 0.787,
                        "height": 0.787
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/360a68369fedc9e58775cb25c084c08dc4c71b88.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1.375,
                        "height": 1.375
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "636122855"
            }
          },
          "content": {
            "message": "所以说上网要擦亮眼睛，不要人云亦云[doge]",
            "members": [],
            "emote": {
              "[doge]": {
                "id": 26,
                "package_id": 1,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[doge]",
                "url": "https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                "meta": {
                  "size": 1,
                  "suggest": [
                    ""
                  ]
                },
                "mtime": 1668688325,
                "jump_title": "doge"
              }
            },
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 240816199425,
              "oid": 1556386640,
              "type": 1,
              "mid": 509284665,
              "root": 237106913616,
              "parent": 237106913616,
              "dialog": 240816199425,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1724939534,
              "mid_str": "509284665",
              "oid_str": "1556386640",
              "rpid_str": "240816199425",
              "root_str": "237106913616",
              "parent_str": "237106913616",
              "dialog_str": "240816199425",
              "like": 1,
              "action": 0,
              "member": {
                "mid": "509284665",
                "uname": "及时反馈机制",
                "sex": "保密",
                "sign": "高端的人际关系，往往是最原始的交际方式",
                "avatar": "https://i0.hdslb.com/bfs/face/022d0c0be0d925d889e9564495de66fe0711777b.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/022d0c0be0d925d889e9564495de66fe0711777b.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "509284665"
                }
              },
              "content": {
                "message": "都说有教育意义，可社会还不是这样吗？",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "525天前发布",
                "location": "IP属地：辽宁",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共1条回复",
            "sub_reply_title_text": "相关回复共1条",
            "time_desc": "543天前发布",
            "location": "IP属地：广西",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237171538896,
          "oid": 1556386640,
          "type": 1,
          "mid": 38756604,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 21,
          "rcount": 7,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723393791,
          "mid_str": "38756604",
          "oid_str": "1556386640",
          "rpid_str": "237171538896",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 128,
          "action": 0,
          "member": {
            "mid": "38756604",
            "uname": "老杨别摸捞",
            "sex": "男",
            "sign": "",
            "avatar": "https://i0.hdslb.com/bfs/face/d5c0b53a374782da46977cbf93ee48c398a14d08.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 1,
              "vipDueDate": 1717516800000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 0,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "",
                "text": "",
                "label_theme": "",
                "text_color": "",
                "bg_style": 0,
                "bg_color": "",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                "label_id": 0,
                "label_goto": null
              },
              "avatar_subscript": 0,
              "nickname_color": ""
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i0.hdslb.com/bfs/face/d5c0b53a374782da46977cbf93ee48c398a14d08.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "38756604"
            }
          },
          "content": {
            "message": "成都地铁的事情有结果了吗？    为啥一说造谣诽谤特指男性？   你看看这俩天社会诽谤他人男性受害者一多半",
            "members": [],
            "jump_url": {
              "成都地铁": {
                "title": "成都地铁",
                "state": 0,
                "prefix_icon": "https://i0.hdslb.com/bfs/reply/9f3ad0659e84c96a711b88dd33f4bc2e945045e0.png",
                "app_url_schema": "bilibili://search?from=appcommentline_search&search_from_source=appcommentline_search&direct_return=true&keyword=%E6%88%90%E9%83%BD%E5%9C%B0%E9%93%81&seid=16445590447262313452&from_avid=1556386640&from_comid=237171538896",
                "app_name": "",
                "app_package_name": "",
                "click_report": "",
                "is_half_screen": false,
                "exposure_report": "",
                "extra": {
                  "goods_show_type": 0,
                  "is_word_search": true,
                  "goods_cm_control": 0,
                  "goods_click_report": "",
                  "goods_exposure_report": ""
                },
                "underline": false,
                "match_once": true,
                "pc_url": "//search.bilibili.com/all?from_source=webcommentline_search&keyword=%E6%88%90%E9%83%BD%E5%9C%B0%E9%93%81&seid=16445590447262313452&from_avid=1556386640&from_comid=237171538896",
                "icon_position": 1
              }
            },
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237179306528,
              "oid": 1556386640,
              "type": 1,
              "mid": 111401658,
              "root": 237171538896,
              "parent": 237171538896,
              "dialog": 237179306528,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723397504,
              "mid_str": "111401658",
              "oid_str": "1556386640",
              "rpid_str": "237179306528",
              "root_str": "237171538896",
              "parent_str": "237171538896",
              "dialog_str": "237179306528",
              "like": 24,
              "action": 0,
              "member": {
                "mid": "111401658",
                "uname": "ERROR_683",
                "sex": "保密",
                "sign": "大家好，我是萌新。",
                "avatar": "https://i0.hdslb.com/bfs/face/9c822b0f96292d83f20aa8aa21621d0b4f0cf2f6.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 4,
                  "name": "青铜殿堂",
                  "image": "https://i1.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                  "image_small": "https://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                  "level": "普通勋章",
                  "condition": "单个自制视频总播放数>=1万，数据次日更新"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1699200000000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/9c822b0f96292d83f20aa8aa21621d0b4f0cf2f6.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "111401658"
                }
              },
              "content": {
                "message": "我觉得也别搞这么刻意的剧情，应该很多人愿意把实际案例给翔子让你拍的，比如朱军，zhttty，王力宏，蛋糕店老追风小叶小叶，甚至是已经去世的那个老师，货拉拉，拍网暴，拍造谣，都能拍，愿意拍彩礼就拍大别山，福州",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：湖北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 239750332464,
              "oid": 1556386640,
              "type": 1,
              "mid": 313262227,
              "root": 237171538896,
              "parent": 237171538896,
              "dialog": 239750332464,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1724449167,
              "mid_str": "313262227",
              "oid_str": "1556386640",
              "rpid_str": "239750332464",
              "root_str": "237171538896",
              "parent_str": "237171538896",
              "dialog_str": "239750332464",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "313262227",
                "uname": "齉龘纞爩麤龗龖厵纞",
                "sex": "保密",
                "sign": "这个人不神秘 只是不知道写什么( •́ὤ•̀)",
                "avatar": "https://i1.hdslb.com/bfs/face/ccc4d6a4897ce2542d56158dc0e3b20cfca85d30.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/ccc4d6a4897ce2542d56158dc0e3b20cfca85d30.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "313262227"
                }
              },
              "content": {
                "message": "@追风小叶QQQQ",
                "at_name_to_mid": {
                  "追风小叶QQQQ": 417440557
                },
                "at_name_to_mid_str": {
                  "追风小叶QQQQ": "417440557"
                },
                "members": [
                  {
                    "mid": "417440557",
                    "uname": "追风小叶QQQQ",
                    "sex": "保密",
                    "sign": "成都地铁被两女生诬陷偷拍当事人。仅此一个bili号！！V:zfxy2023（本人）",
                    "avatar": "https://i1.hdslb.com/bfs/face/5c20f1b1809bd8877f4463dc4f494e0d73728530.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 2,
                      "vipDueDate": 1773763200000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 1,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                        "text": "年度大会员",
                        "label_theme": "annual_vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                        "label_id": -22,
                        "label_goto": {
                          "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                          "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                        }
                      },
                      "avatar_subscript": 1,
                      "nickname_color": "#FB7299"
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "531天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共7条回复",
            "sub_reply_title_text": "相关回复共7条",
            "time_desc": "543天前发布",
            "location": "IP属地：河北",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237166810784,
          "oid": 1556386640,
          "type": 1,
          "mid": 89403238,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 11,
          "rcount": 5,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723392020,
          "mid_str": "89403238",
          "oid_str": "1556386640",
          "rpid_str": "237166810784",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 78,
          "action": 0,
          "member": {
            "mid": "89403238",
            "uname": "偏执且执念",
            "sex": "男",
            "sign": "太阳一出来，星星都消失了。",
            "avatar": "https://i1.hdslb.com/bfs/face/b5635246afa570dbbad36884ee17075b47d7810c.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 6,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 150,
              "name": "纳米核心",
              "image": "https://i1.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png",
              "expire": 0,
              "image_enhance": "https://i1.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png",
              "image_enhance_frame": "",
              "n_pid": 150
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 2,
              "vipDueDate": 1771603200000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                "text": "年度大会员",
                "label_theme": "annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/0DFy9BHgwE.gif",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/uckjAv3Npy.png",
                "label_id": -22,
                "label_goto": {
                  "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                  "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                }
              },
              "avatar_subscript": 1,
              "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": {
                "id": 150,
                "name": "纳米核心",
                "image": "https://i0.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png",
                "jump_url": "",
                "type": "vip",
                "image_enhance": "https://i0.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png",
                "image_enhance_frame": ""
              },
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {
              "pendant": {
                "id": 150,
                "name": "纳米核心",
                "image": "https://i0.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png",
                "type": "vip",
                "image_enhance": "https://i0.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png"
              }
            },
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 0.787,
                        "height": 0.787
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/b5635246afa570dbbad36884ee17075b47d7810c.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1.375,
                        "height": 1.375
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "PENDENT_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "remote": {
                            "url": "https://i1.hdslb.com/bfs/face/b67a37542d33d093ff28780848448e0a1c78932a.png",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 1,
                        "axis_x": 0.9685,
                        "axis_y": 0.9851666666666666
                      },
                      "size_spec": {
                        "width": 0.41666666666666663,
                        "height": 0.41666666666666663
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 2,
                          "local": 1
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "89403238"
            }
          },
          "content": {
            "message": "成都地铁案被造谣一事还没结果，小叶追风，任重道远啊[大哭]",
            "members": [],
            "emote": {
              "[大哭]": {
                "id": 5,
                "package_id": 1,
                "state": 0,
                "type": 1,
                "attr": 0,
                "text": "[大哭]",
                "url": "https://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                "meta": {
                  "size": 1,
                  "suggest": [
                    ""
                  ]
                },
                "mtime": 1668688325,
                "jump_title": "大哭"
              }
            },
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237590804144,
              "oid": 1556386640,
              "type": 1,
              "mid": 1692826306,
              "root": 237166810784,
              "parent": 237166810784,
              "dialog": 237590804144,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723575241,
              "mid_str": "1692826306",
              "oid_str": "1556386640",
              "rpid_str": "237590804144",
              "root_str": "237166810784",
              "parent_str": "237166810784",
              "dialog_str": "237590804144",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "1692826306",
                "uname": "bili_47496202929",
                "sex": "保密",
                "sign": "我是白嫖怪",
                "avatar": "https://i1.hdslb.com/bfs/face/901435ef227c679e6df25f681e730d5539874fe4.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 3,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/901435ef227c679e6df25f681e730d5539874fe4.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "1692826306"
                }
              },
              "content": {
                "message": "是追风小叶吧",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "541天前发布",
                "location": "IP属地：黑龙江",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 239750327232,
              "oid": 1556386640,
              "type": 1,
              "mid": 313262227,
              "root": 237166810784,
              "parent": 237166810784,
              "dialog": 239750327232,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1724449149,
              "mid_str": "313262227",
              "oid_str": "1556386640",
              "rpid_str": "239750327232",
              "root_str": "237166810784",
              "parent_str": "237166810784",
              "dialog_str": "239750327232",
              "like": 0,
              "action": 0,
              "member": {
                "mid": "313262227",
                "uname": "齉龘纞爩麤龗龖厵纞",
                "sex": "保密",
                "sign": "这个人不神秘 只是不知道写什么( •́ὤ•̀)",
                "avatar": "https://i1.hdslb.com/bfs/face/ccc4d6a4897ce2542d56158dc0e3b20cfca85d30.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 0,
                  "vipDueDate": 0,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/ccc4d6a4897ce2542d56158dc0e3b20cfca85d30.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "313262227"
                }
              },
              "content": {
                "message": "@追风小叶QQQQ",
                "at_name_to_mid": {
                  "追风小叶QQQQ": 417440557
                },
                "at_name_to_mid_str": {
                  "追风小叶QQQQ": "417440557"
                },
                "members": [
                  {
                    "mid": "417440557",
                    "uname": "追风小叶QQQQ",
                    "sex": "保密",
                    "sign": "成都地铁被两女生诬陷偷拍当事人。仅此一个bili号！！V:zfxy2023（本人）",
                    "avatar": "https://i1.hdslb.com/bfs/face/5c20f1b1809bd8877f4463dc4f494e0d73728530.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 0,
                      "name": "",
                      "image": "",
                      "image_small": "",
                      "level": "",
                      "condition": ""
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 2,
                      "vipDueDate": 1773763200000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 1,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                        "text": "年度大会员",
                        "label_theme": "annual_vip",
                        "text_color": "#FFFFFF",
                        "bg_style": 1,
                        "bg_color": "#FB7299",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                        "label_id": -22,
                        "label_goto": {
                          "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                          "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                        }
                      },
                      "avatar_subscript": 1,
                      "nickname_color": "#FB7299"
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "531天前发布",
                "location": "IP属地：广东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共5条回复",
            "sub_reply_title_text": "相关回复共5条",
            "time_desc": "543天前发布",
            "location": "IP属地：湖南",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        },
        {
          "rpid": 237106360576,
          "oid": 1556386640,
          "type": 1,
          "mid": 100852247,
          "root": 0,
          "parent": 0,
          "dialog": 0,
          "count": 32,
          "rcount": 28,
          "state": 0,
          "fansgrade": 0,
          "attr": 0,
          "ctime": 1723373329,
          "mid_str": "100852247",
          "oid_str": "1556386640",
          "rpid_str": "237106360576",
          "root_str": "0",
          "parent_str": "0",
          "dialog_str": "0",
          "like": 810,
          "action": 0,
          "member": {
            "mid": "100852247",
            "uname": "轻城秋水",
            "sex": "男",
            "sign": "这个人很神秘，什么都没有写（这句话是我写的，不是默认的）",
            "avatar": "https://i2.hdslb.com/bfs/face/a349f4485fb0ca4bc9160a432d5b3898df1cf4f4.jpg",
            "rank": "10000",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "senior": {},
            "level_info": {
              "current_level": 5,
              "current_min": 0,
              "current_exp": 0,
              "next_exp": 0
            },
            "pendant": {
              "pid": 0,
              "name": "",
              "image": "",
              "expire": 0,
              "image_enhance": "",
              "image_enhance_frame": "",
              "n_pid": 0
            },
            "nameplate": {
              "nid": 0,
              "name": "",
              "image": "",
              "image_small": "",
              "level": "",
              "condition": ""
            },
            "official_verify": {
              "type": -1,
              "desc": ""
            },
            "vip": {
              "vipType": 2,
              "vipDueDate": 1800460800000,
              "dueRemark": "",
              "accessStatus": 0,
              "vipStatus": 1,
              "vipStatusWarn": "",
              "themeType": 0,
              "label": {
                "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                "text": "年度大会员",
                "label_theme": "annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                "label_id": -22,
                "label_goto": {
                  "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                  "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                }
              },
              "avatar_subscript": 1,
              "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "user_sailing": {
              "pendant": null,
              "cardbg": null,
              "cardbg_with_focus": null
            },
            "user_sailing_v2": {},
            "is_contractor": false,
            "contract_desc": "",
            "nft_interaction": null,
            "avatar_item": {
              "container_size": {
                "width": 1.8,
                "height": 1.8
              },
              "fallback_layers": {
                "layers": [
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 2,
                        "axis_x": 0.9,
                        "axis_y": 0.9
                      },
                      "size_spec": {
                        "width": 1,
                        "height": 1
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "AVATAR_LAYER": {},
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "borderRadius": "50%"
                            }
                          }
                        }
                      },
                      "is_critical": true
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 1,
                          "placeholder": 6,
                          "remote": {
                            "url": "https://i2.hdslb.com/bfs/face/a349f4485fb0ca4bc9160a432d5b3898df1cf4f4.jpg",
                            "bfs_style": "widget-layer-avatar"
                          }
                        }
                      }
                    }
                  },
                  {
                    "visible": true,
                    "general_spec": {
                      "pos_spec": {
                        "coordinate_pos": 1,
                        "axis_x": 1.025,
                        "axis_y": 1.025
                      },
                      "size_spec": {
                        "width": 0.41666666666666663,
                        "height": 0.41666666666666663
                      },
                      "render_spec": {
                        "opacity": 1
                      }
                    },
                    "layer_config": {
                      "tags": {
                        "GENERAL_CFG": {
                          "config_type": 1,
                          "general_config": {
                            "web_css_style": {
                              "background-color": "rgb(255,255,255)",
                              "border": "2px solid rgba(255,255,255,1)",
                              "borderRadius": "50%",
                              "boxSizing": "border-box"
                            }
                          }
                        },
                        "ICON_LAYER": {}
                      }
                    },
                    "resource": {
                      "res_type": 3,
                      "res_image": {
                        "image_src": {
                          "src_type": 2,
                          "local": 1
                        }
                      }
                    }
                  }
                ],
                "is_critical_group": true
              },
              "mid": "100852247"
            }
          },
          "content": {
            "message": "现实里这种人就算付出代价也不会认为是自己的错，他们会认为“我不就是再网上打几个字吗，凭什么针对我”",
            "members": [],
            "jump_url": {},
            "max_line": 6
          },
          "replies": [
            {
              "rpid": 237112045952,
              "oid": 1556386640,
              "type": 1,
              "mid": 405581253,
              "root": 237106360576,
              "parent": 237106360576,
              "dialog": 237112045952,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723375173,
              "mid_str": "405581253",
              "oid_str": "1556386640",
              "rpid_str": "237112045952",
              "root_str": "237106360576",
              "parent_str": "237106360576",
              "dialog_str": "237112045952",
              "like": 98,
              "action": 0,
              "member": {
                "mid": "405581253",
                "uname": "-Lights_",
                "sex": "保密",
                "sign": "",
                "avatar": "https://i0.hdslb.com/bfs/face/c823d4e8388277f74839914ccb3084d1d80dab89.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 10,
                  "name": "见习偶像",
                  "image": "https://i2.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
                  "image_small": "https://i2.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
                  "level": "普通勋章",
                  "condition": "所有自制视频总播放数>=10万，数据次日更新"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 2,
                  "vipDueDate": 1796054400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 1,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "http://i0.hdslb.com/bfs/vip/label_annual.png",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                    "label_id": -22,
                    "label_goto": {
                      "mobile": "https://big.bilibili.com/mobile/index?navhide=1&from_spmid=vipicon",
                      "pc_web": "https://account.bilibili.com/big?from_spmid=vipicon"
                    }
                  },
                  "avatar_subscript": 1,
                  "nickname_color": "#FB7299"
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i0.hdslb.com/bfs/face/c823d4e8388277f74839914ccb3084d1d80dab89.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      },
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 1,
                            "axis_x": 1.025,
                            "axis_y": 1.025
                          },
                          "size_spec": {
                            "width": 0.41666666666666663,
                            "height": 0.41666666666666663
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "background-color": "rgb(255,255,255)",
                                  "border": "2px solid rgba(255,255,255,1)",
                                  "borderRadius": "50%",
                                  "boxSizing": "border-box"
                                }
                              }
                            },
                            "ICON_LAYER": {}
                          }
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 2,
                              "local": 1
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "405581253"
                }
              },
              "content": {
                "message": "四川张薇点赞",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：山东",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237114413888,
              "oid": 1556386640,
              "type": 1,
              "mid": 86284469,
              "root": 237106360576,
              "parent": 237106360576,
              "dialog": 237114413888,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723375931,
              "mid_str": "86284469",
              "oid_str": "1556386640",
              "rpid_str": "237114413888",
              "root_str": "237106360576",
              "parent_str": "237106360576",
              "dialog_str": "237114413888",
              "like": 54,
              "action": 0,
              "member": {
                "mid": "86284469",
                "uname": "大筒木-桃式",
                "sex": "保密",
                "sign": "这个人不懒",
                "avatar": "https://i2.hdslb.com/bfs/face/7feaa94bf01af65001b68f5b3010cbdebb8e8c03.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 6,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 57,
                  "name": "收集萌新",
                  "image": "https://i1.hdslb.com/bfs/face/7767275600ea63d351b22fa87ec15a79aa24e5e5.png",
                  "image_small": "https://i2.hdslb.com/bfs/face/6589d992655595bf51543f268040eaeaed372fae.png",
                  "level": "普通勋章",
                  "condition": "同时拥有粉丝勋章>=5个"
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1725033600000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i2.hdslb.com/bfs/face/7feaa94bf01af65001b68f5b3010cbdebb8e8c03.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "86284469"
                }
              },
              "content": {
                "message": "现实里造谣的人都没人处理，被造谣的人失去了工作家庭名声，明明知道凶手是谁都没办法处理更别说网络上了",
                "members": [],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：四川",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            },
            {
              "rpid": 237129482176,
              "oid": 1556386640,
              "type": 1,
              "mid": 2039440996,
              "root": 237106360576,
              "parent": 237114413888,
              "dialog": 237114413888,
              "count": 0,
              "rcount": 0,
              "state": 0,
              "fansgrade": 0,
              "attr": 0,
              "ctime": 1723380726,
              "mid_str": "2039440996",
              "oid_str": "1556386640",
              "rpid_str": "237129482176",
              "root_str": "237106360576",
              "parent_str": "237114413888",
              "dialog_str": "237114413888",
              "like": 3,
              "action": 0,
              "member": {
                "mid": "2039440996",
                "uname": "Aind魅力宝贝",
                "sex": "保密",
                "sign": "三角洲行动小小下士绿跑，7r=100万，需要请＋绿泡泡:lfdd520996",
                "avatar": "https://i1.hdslb.com/bfs/face/463a375034ef0e7a001b8cb2baa1cf4eb028dcf0.jpg",
                "rank": "10000",
                "face_nft_new": 0,
                "is_senior_member": 0,
                "senior": {},
                "level_info": {
                  "current_level": 5,
                  "current_min": 0,
                  "current_exp": 0,
                  "next_exp": 0
                },
                "pendant": {
                  "pid": 0,
                  "name": "",
                  "image": "",
                  "expire": 0,
                  "image_enhance": "",
                  "image_enhance_frame": "",
                  "n_pid": 0
                },
                "nameplate": {
                  "nid": 0,
                  "name": "",
                  "image": "",
                  "image_small": "",
                  "level": "",
                  "condition": ""
                },
                "official_verify": {
                  "type": -1,
                  "desc": ""
                },
                "vip": {
                  "vipType": 1,
                  "vipDueDate": 1741190400000,
                  "dueRemark": "",
                  "accessStatus": 0,
                  "vipStatus": 0,
                  "vipStatusWarn": "",
                  "themeType": 0,
                  "label": {
                    "path": "",
                    "text": "",
                    "label_theme": "",
                    "text_color": "",
                    "bg_style": 0,
                    "bg_color": "",
                    "border_color": "",
                    "use_img_label": true,
                    "img_label_uri_hans": "",
                    "img_label_uri_hant": "",
                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                    "label_id": 0,
                    "label_goto": null
                  },
                  "avatar_subscript": 0,
                  "nickname_color": ""
                },
                "fans_detail": null,
                "user_sailing": null,
                "is_contractor": false,
                "contract_desc": "",
                "nft_interaction": null,
                "avatar_item": {
                  "container_size": {
                    "width": 1.8,
                    "height": 1.8
                  },
                  "fallback_layers": {
                    "layers": [
                      {
                        "visible": true,
                        "general_spec": {
                          "pos_spec": {
                            "coordinate_pos": 2,
                            "axis_x": 0.9,
                            "axis_y": 0.9
                          },
                          "size_spec": {
                            "width": 1,
                            "height": 1
                          },
                          "render_spec": {
                            "opacity": 1
                          }
                        },
                        "layer_config": {
                          "tags": {
                            "AVATAR_LAYER": {},
                            "GENERAL_CFG": {
                              "config_type": 1,
                              "general_config": {
                                "web_css_style": {
                                  "borderRadius": "50%"
                                }
                              }
                            }
                          },
                          "is_critical": true
                        },
                        "resource": {
                          "res_type": 3,
                          "res_image": {
                            "image_src": {
                              "src_type": 1,
                              "placeholder": 6,
                              "remote": {
                                "url": "https://i1.hdslb.com/bfs/face/463a375034ef0e7a001b8cb2baa1cf4eb028dcf0.jpg",
                                "bfs_style": "widget-layer-avatar"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "is_critical_group": true
                  },
                  "mid": "2039440996"
                }
              },
              "content": {
                "message": "回复 @大筒木-桃式 :现实里造谣的人得看是什么方面",
                "at_name_to_mid": {
                  "大筒木-桃式": 86284469
                },
                "at_name_to_mid_str": {
                  "大筒木-桃式": "86284469"
                },
                "members": [
                  {
                    "mid": "86284469",
                    "uname": "大筒木-桃式",
                    "sex": "保密",
                    "sign": "这个人不懒",
                    "avatar": "https://i2.hdslb.com/bfs/face/7feaa94bf01af65001b68f5b3010cbdebb8e8c03.jpg",
                    "rank": "10000",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "senior": {},
                    "level_info": {
                      "current_level": 6,
                      "current_min": 0,
                      "current_exp": 0,
                      "next_exp": 0
                    },
                    "pendant": {
                      "pid": 0,
                      "name": "",
                      "image": "",
                      "expire": 0,
                      "image_enhance": "",
                      "image_enhance_frame": "",
                      "n_pid": 0
                    },
                    "nameplate": {
                      "nid": 57,
                      "name": "收集萌新",
                      "image": "https://i1.hdslb.com/bfs/face/7767275600ea63d351b22fa87ec15a79aa24e5e5.png",
                      "image_small": "https://i2.hdslb.com/bfs/face/6589d992655595bf51543f268040eaeaed372fae.png",
                      "level": "普通勋章",
                      "condition": "同时拥有粉丝勋章>=5个"
                    },
                    "official_verify": {
                      "type": -1,
                      "desc": ""
                    },
                    "vip": {
                      "vipType": 1,
                      "vipDueDate": 1725033600000,
                      "dueRemark": "",
                      "accessStatus": 0,
                      "vipStatus": 0,
                      "vipStatusWarn": "",
                      "themeType": 0,
                      "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": "",
                        "use_img_label": true,
                        "img_label_uri_hans": "",
                        "img_label_uri_hant": "",
                        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
                        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
                        "label_id": 0,
                        "label_goto": null
                      },
                      "avatar_subscript": 0,
                      "nickname_color": ""
                    }
                  }
                ],
                "jump_url": {},
                "max_line": 6
              },
              "replies": null,
              "parent_reply_member": {
                "mid": "86284469",
                "name": "大筒木-桃式"
              },
              "assist": 0,
              "up_action": {
                "like": false,
                "reply": false
              },
              "invisible": false,
              "reply_control": {
                "max_line": 6,
                "time_desc": "543天前发布",
                "location": "IP属地：湖北",
                "translation_switch": 1,
                "support_share": true
              },
              "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": ""
              },
              "dynamic_id_str": "0",
              "note_cvid_str": "0",
              "track_info": ""
            }
          ],
          "assist": 0,
          "up_action": {
            "like": false,
            "reply": false
          },
          "invisible": false,
          "reply_control": {
            "max_line": 6,
            "sub_reply_entry_text": "共28条回复",
            "sub_reply_title_text": "相关回复共28条",
            "time_desc": "543天前发布",
            "location": "IP属地：山东",
            "translation_switch": 1,
            "support_share": true
          },
          "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": ""
          },
          "dynamic_id_str": "0",
          "note_cvid_str": "0",
          "track_info": ""
        }
      ],
      "upper": {
        "mid": 19286458,
        "top": null,
        "vote": null
      },
      "top": null,
      "vote": 0,
      "blacklist": 0,
      "assist": 0,
      "mode": 3,
      "support_mode": [
        2,
        3
      ],
      "control": {
        "input_disable": false,
        "root_input_text": "这里需要一条查重率0%的评论",
        "child_input_text": "这里需要一条查重率0%的评论",
        "giveup_input_text": "不发没关系，请继续友善哦~",
        "screenshot_icon_state": 1,
        "upload_picture_icon_state": 1,
        "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
        "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
        "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
        "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6",
        "bg_text": "",
        "empty_page": null,
        "show_type": 1,
        "show_text": "",
        "web_selection": false,
        "disable_jump_emote": false,
        "enable_charged": false,
        "enable_cm_biz_helper": false,
        "preload_resources": null
      },
      "folder": {
        "has_folded": false,
        "is_folded": false,
        "rule": ""
      }
    }
  }
}
Response headers
 alt-svc: h3=":443"; ma=86400 
 cf-cache-status: DYNAMIC 
 cf-ray: 9c968b91ac73cd33-LAX 
 content-encoding: gzip 
 content-type: application/json 
 date: Fri,06 Feb 2026 00:31:33 GMT 
 nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800} 
 report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AhYt9bNsiunGCnHvVFaOFfJeP5JDYEpZEcNuQ1a1%2FMkmUhsMuKjIBaXv4OMABZzd5uoCiHMv%2FnBLIN99zrrFpy5iAuxGbrVmlalZBw%3D%3D"}]} 
 server: cloudflare 
 speculation-rules: "/cdn-cgi/speculation" 
 vary: Accept-Encoding 
 x-request-id: 9a888a6d-a305-405a-baee-afbebfc2d94c 
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