/**
 * Created by tijn on 15/10/23.
 */
var _bgmusic = !0;
$(function() {
    function t(t) {
        var a = t.attr("style").split(";").filter(function(t, a) {
            return - 1 === t.indexOf("animation")
        }).join(";");
        t.attr("style", a)
    }
    function a(t, a) {
        window.endCurrPage = !1,
            window.endNextPage = !1,
            e(t, a),
            window.isAnimating = !1,
        window._yutuPageCallback && window._yutuPageCallback(t, a)
    }
    function e(t, a) {
        0 != window.pageSwitch ? (t.attr("class", "pandaBox"), a.attr("class", "pandaBox pt-page-current")) : (t.attr("class", "pandaBox"), a.attr("class", "pandaBox"))
    }
    function n(t, a, e, n, i, o) {
        var s = window.location.hostname,
            d = window.location.href,
            r = document.referrer;
        p.src = "http://btrace.qq.com/kvcollect?BossId=2931&Pwd=727257527&sDomain=" + encodeURIComponent(s) + "&sUrl=" + encodeURIComponent(d) + "&sRef=" + encodeURIComponent(r) + "&sSys=" + encodeURIComponent(t) + "&sType=" + encodeURIComponent(a) + "&sName=" + encodeURIComponent(e) + "&sChannel=" + encodeURIComponent(n) + "&sPageID=" + encodeURIComponent(i) + "&sColumn=" + encodeURIComponent(o) + "&_dc=" + Math.random()
    }
    function i() {
        function t() {
            var t = navigator.userAgent.toLowerCase();
            return {
                ipad: t.indexOf("ipad") >= 0,
                iphone: t.indexOf("iphone") >= 0,
                android: t.indexOf("android") >= 0,
                weixin: t.indexOf("micromessenger") >= 0,
                qqnews: t.indexOf("qqnews") >= 0,
                mqq: t.indexOf("mqq") >= 0
            }
        }
        var a = "browser";
        a = t().weixin ? "weixin": t().qqnews ? "qqnews": "browser",
            n(a, "tuijian", "", yt_global.channel, yt_global.id, yt_global.category),
            $(".RecommendList li").each(function(t, e) {
                $(e).on("click",
                    function() {
                        n(a, "tuijian", "tjlist" + t, yt_global.channel, yt_global.id, yt_global.category)
                    })
            })
    }
    function o(t, a, e) {
        var n = {
            text: function() {
                $("[data-yutu-ext]").each(function(t, e) {
                    var n = $(e),
                        i = (n.data("yutu-ext-id"), n.data("yutu-ext-event")),
                        o = n.data("yutu-ext-type"),
                        s = n.data("yutu-ext-url"),
                        d = n.data("yutu-ext-value");
                    $(this).off(i).on(i,
                        function() {
                            "link" == o ? window.open(s, "_self") : d > a.index ? a.doNext(d) : d < a.index && a.doPrev(d)
                        })
                })
            },
            yt_text: function() {
                var t = (e.data("yutu-ext-id"), e.data("yutu-ext-event")),
                    n = e.data("yutu-ext-value");
                "string" == typeof t && e.off(t).on(t,
                    function() {
                        window._yutuPageLock = !1,
                            n > a.index ? a.doNext(n) : n < a.index && a.doPrev(n)
                    })
            },
            image: function() {
                this.text()
            },
            yt_image: function() {
                this.yt_text()
            },
            yt_quickvote: function() {
                var t = $(".package_quickvote").attr("data-surveyID");
                globalVote2.getVote("http://panshi.qq.com/v2/vote/" + t + "?source=1&callback=?")
            },
            yt_surveyvote: function() {
                var t = $(".package_surveyvote").attr("data-surveyID");
                globalVote.getVote("http://panshi.qq.com/v2/vote/" + t + "?source=1&callback=?")
            },
            yt_swiper: function() {
                seajs.use("http://mat1.gtimg.com/news/js/yutu/swiper.js",
                    function() {
                        e.find(".con").swiper({
                            pagination: ".pagination",
                            loop: !0,
                            paginationClickable: !0
                        })
                    })
            },
            yt_share: function() {
                package_yt_share()
            },
            yt_nvideo: function() {
                "object" == typeof $(".package_yt_nvideo") && $(".package_yt_nvideo").each(function(t, a) {
                    var e = $(a),
                        n = e.attr("data-vid"),
                        i = e.find("img").attr("data-src"),
                        o = e.find(".play_box").attr("id");
                    videoread(n, o, i, 0)
                })
            },
            yt_plusvote: function() {
                window.isplusvotepost = !1,
                window.isplusvote || package_yt_plusvote()
            },
            yt_refresh: function() {
                package_yt_refresh()
            },
            yt_video: function() {
                videopopup()
            },
            yt_audio: function() {
                audioPlay()
            },
            yt_iscroll: function() {
                package_yt_iscroll()
            },
            yt_clip: function() {
                package_yt_clip()
            },
            yt_recommend: function() {
                i()
            },
            yt_layerscroll: function() {
                package_yt_layerscroll()
            },
            yt_signup: function() {
                var t = $(".package_yt_signup").attr("data-surveyid");
                globalSignup.getVote("http://panshi.qq.com/v2/vote/" + t + "?source=1&callback=?")
            },
            yt_scratch: function() {
                package_yt_scratch()
            },
            yt_panorama: function() {
                package_yt_panorama()
            },
            yt_barrage: function() {
                package_yt_barrage()
            },
            yt_piecharts: function() {
                package_yt_getPieCharts()
            },
            yt_barcharts: function() {
                package_yt_getBarCharts()
            },
            yt_linecharts: function() {
                package_yt_getLineCharts()
            },
            yt_vote: function() {
                package_yt_vote()
            }
        };
        "undefined" != typeof t && t in n && n[t]()
    }
    var s = function() {
        var t = $(".u-audio").find("audio")[0];
        void 0 != t && t.paused && _bgmusic && ($(".u-audio").addClass("u-play"), t.play())
    };
    window.yt_global_share_count = "";
    var d = function() {
        self.isShareOk = !0;
        var t = setInterval(function() {
                if (self.isShareOk) {
                    var a = window.location.host;
                    a.indexOf("yutu") > 0 ? _murl = "http://active.qq.com/yutu/index.php?vote.achieve&activity_id=" + yt_global.id + "&msg=qq_share": _murl = "http://testshipei.qq.com/yutu/index.php?vote.achieve&activity_id=" + yt_global.id + "&msg=qq_share",
                        $.ajax({
                            type: "get",
                            async: !1,
                            url: _murl,
                            dataType: "jsonp",
                            jsonpCallback: "yutu_vote_achieve_callback",
                            success: function(t) {
                                "success" == t.tip && (self.isShareOk = !1, window.yt_global_share_count = t.data.totalCnt)
                            },
                            error: function() {}
                        })
                } else clearInterval(t)
            },
            300)
    }; (yt_global.share_diy_s || yt_global.share_diy_e) && ("" != yt_global.share_diy_s || "" != yt_global.share_diy_e) && d(),
        window.endCurrPage = !1,
        window.endNextPage = !1,
        window.isAnimating = !1;
    var r = $(".slideArrow"),
        c = {
            index: 1,
            min: 1,
            max: 99,
            prev: 0,
            next: 2,
            width: $(".yt-loadingpage").width(),
            height: $(".yt-loadingpage").height(),
            global: $("#main"),
            scale: "",
            specialBind: function(t) {
                this.left && $(".pandaBox>div").css({
                    marginLeft: this.left
                }),
                    $(t).each(function() {
                        var t = $(this);
                        1 == t.data("special") && o(t.data("panda-type"), g, t),
                        "0px" == t.css("bottom") && $(this).css("bottom", 568 * (c.scale - 1)),
                            t.find("img").each(function() { - 1 != $(this).attr("src").indexOf(".gif") && $(this).attr("src", $(this).attr("src") + "?" + Math.floor(1e4 * Math.random()))
                            }),
                            s()
                    })
            },
            LoadingComplete: function() {
                var t = this;
                $(".yt-loadingpage").remove(),
                    $(".pandaBox").show(),
                    $(document).swipeUp(function() {
                        window._yutuPageLock || t.doNext()
                    }).swipeDown(function() {
                        window._yutuPageLock || t.doPrev()
                    }),
                0 == window.pageSwitch && ($(".pandaBox").css({
                    position: "relative",
                    visibility: "visible",
                    display: "block",
                    "z-index": 0
                }), $("#main,.pandaBox").addClass("page_animate"), this.left && (this.width = this.width / this.scale + 5, this.height = this.height / this.scale + 5), $("#main").css({
                    width: this.width,
                    height: this.height,
                    position: "relative",
                    "-webkit-transform": "translate3d(0px, 0px, 0px)",
                    transform: "translate3d(0px, 0px, 0px)"
                }))
            },
            doPrev: function(e) {
                if (window.isAnimating) return ! 1;
                if (e && (e = Number($.trim(e)), this.prev = e), !(this.index <= this.min)) {
                    window.isAnimating = !0; {
                        var n, i = this;
                        $("#pandaBox" + this.prev).addClass("pt-page-current")
                    }
                    n = 2 != i.pageswitch ? panda_config[0] || i.prevClass: i.prevClass,
                        i.afterindex = i.index,
                        i.afterprev = i.prev,
                    this.replay && (window.isplusvote = !1, $("#pandaBox" + i.index).empty(), $("#pandaBox" + i.prev).html($("#pandaBox" + i.prev).data("yutu-html-m") || $("#pandaBox" + i.prev).html()), this.specialBind($("#pandaBox" + i.prev).find("[data-panda-type]"))),
                        0 != i.pageswitch ? ($("#pandaBox" + i.index).addClass(n[0]).on("webkitAnimationEnd",
                            function() {
                                $("#pandaBox" + i.afterindex).off("webkitAnimationEnd"),
                                    window.endCurrPage = !0,
                                window.endNextPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afterprev))
                            }), $("#pandaBox" + i.prev).addClass(n[1]).on("webkitAnimationEnd",
                            function() {
                                $("#pandaBox" + i.afterprev).off("webkitAnimationEnd"),
                                    window.endNextPage = !0,
                                window.endCurrPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afterprev))
                            }), $("#pandaBox" + this.prev).addClass("pt-page-scaleUp").css({
                            top: "0",
                            "-webkit-transform": "",
                            transform: ""
                        })) : ($("#main").addClass("ease"), this.global.css({
                            "-webkit-transform": "translate3d(0px, -" + this.height * (i.prev - 1) + "px, 0px)",
                            transform: "translate3d(0px, -" + this.height * (i.prev - 1) + "px, 0px)"
                        }), window.endCurrPage = !0, window.endNextPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afterprev)), window.endNextPage = !0, window.endCurrPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afterprev))),
                        e ? this.index = e: this.index--,
                        this.prev = this.index - 1,
                        this.next = this.index + 1,
                        $("#pandaBox" + this.index).find("[data-panda-type]").each(function() {
                            var a = $(this),
                                e = a.data("yutu-animate");
                            e && a.find(".con").css("-webkit-animation", e),
                                t(a)
                        }),
                        r.show()
                }
            },
            doNext: function(e) {
                if (s(), window.isAnimating) return ! 1;
                if (e && (e = Number($.trim(e)), this.next = e), !(this.index >= this.max)) {
                    window.isAnimating = !0; {
                        var n, i = this;
                        $("#pandaBox" + this.next).addClass("pt-page-current")
                    }
                    n = 2 != i.pageswitch ? panda_config[1] || i.nextClass: i.nextClass,
                        i.afterindex = i.index,
                        i.afternext = i.next,
                    this.replay && (window.isplusvote = !1, $("#pandaBox" + i.index).empty(), $("#pandaBox" + i.next).html($("#pandaBox" + i.next).data("yutu-html-m") || $("#pandaBox" + i.next).html()), this.specialBind($("#pandaBox" + i.next).find("[data-panda-type]"))),
                        0 != i.pageswitch ? ($("#pandaBox" + i.index).addClass(n[0]).on("webkitAnimationEnd",
                            function() {
                                $("#pandaBox" + i.afterindex).off("webkitAnimationEnd"),
                                    window.endCurrPage = !0,
                                window.endNextPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afternext))
                            }), $("#pandaBox" + i.next).addClass(n[1]).on("webkitAnimationEnd",
                            function() {
                                $("#pandaBox" + i.afternext).off("webkitAnimationEnd"),
                                    window.endNextPage = !0,
                                window.endCurrPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afternext))
                            }), $("#pandaBox" + this.next).addClass("pt-page-scaleUp").css({
                            top: "0",
                            "-webkit-transform": "",
                            transform: ""
                        })) : ($("#main").addClass("ease"), this.global.css({
                            "-webkit-transform": "translate3d(0px, -" + this.height * (i.next - 1) + "px, 0px)",
                            transform: "translate3d(0px, -" + this.height * (i.next - 1) + "px, 0px)"
                        }), window.endCurrPage = !0, window.endNextPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afternext)), window.endNextPage = !0, window.endCurrPage && a($("#pandaBox" + i.afterindex), $("#pandaBox" + i.afternext))),
                        e ? this.index = e: this.index++,
                        this.prev = this.index - 1,
                        this.next = this.index + 1,
                        $("#pandaBox" + this.index).find("[data-panda-type]").each(function() {
                            var a = $(this),
                                e = a.data("yutu-animate");
                            e && a.find(".con").css("-webkit-animation", e),
                                t(a)
                        }),
                    this.index == this.max && r.hide()
                }
            },
            init: function(a, e) {
                function n() {
                    var t = window.location.host;
                    t.indexOf("yutu") > 0 ? _surl = "http://active.qq.com/yutu/index.php?vote.add&activity_id=" + yt_global.id + "&msg=qq_share": _surl = "http://testshipei.qq.com/yutu/index.php?vote.add&activity_id=" + yt_global.id + "&msg=qq_share",
                        $.ajax({
                            type: "post",
                            async: !1,
                            url: _surl,
                            dataType: "jsonp",
                            jsonpCallback: "yutu_vote_add_callback",
                            success: function(t) {},
                            error: function() {}
                        })
                }
                var i = this;
                this.max = $(".pandaBox").size(),
                1 == this.max && r.hide(),
                    this.prevClass = a[0],
                    this.nextClass = a[1],
                    e = e || {},
                    this.replay = 1,
                    this.pageswitch = Number(e.pageSwitch),
                (yt_global.share_diy_s || yt_global.share_diy_e) && ("" != yt_global.share_diy_s || "" != yt_global.share_diy_e) && n();
                var o = $(".yt-loadingpage"),
                    s = o.width(),
                    d = o.height();
                window.width = s,
                    window.height = d;
                var p, l, u = 1;
                if (s / d >= 320 / 460 ? (u = d / 460, l = (s / u - 320) / 2) : (u = s / 320, p = (d / u - 460) / 2), $("#yt_viewport").attr({
                        content: "width=320,initial-scale=" + u + ",user-scalable=no"
                    }), 320 != o.width() && s == document.documentElement.clientWidth && (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") > -1)) {
                    var h = 320 / s,
                        x = 460 / d,
                        _ = Math.max(h, x);
                    _ = _ > 1 ? _: 160 * _,
                        _ = parseInt(_),
                        $("#yt_viewport").attr({
                            content: "width=320,target-densitydpi=" + _
                        })
                }
                c.scale = u,
                l && (l = Math.ceil(l), o.children("div").css({
                    marginLeft: l
                }), this.left = l, this.scale = u, $(".pandaBox>div").css({
                    marginLeft: l
                })),
                p && u > 1 && $(".pandaBox").css({
                    width: "320px"
                }),
                    window.pageSwitch = Number(e.pageSwitch),
                    document.addEventListener("touchmove",
                        function(t) {
                            t.preventDefault()
                        },
                        !1),
                    0 != Number(e.pageSwitch) ? $("#pandaBox" + i.index).addClass("pt-page-current").find("[data-panda-type]").each(function() {
                        {
                            var a = $(this),
                                e = a.data("yutu-animate");
                            a.data("special"),
                                a.data("panda-type")
                        }
                        e && a.find(".con").css("-webkit-animation", e),
                            t(a)
                    }) : $("#pandaBox" + i.index).find("[data-panda-type]").each(function() {
                        {
                            var a = $(this),
                                e = a.data("yutu-animate");
                            a.data("special"),
                                a.data("panda-type")
                        }
                        e && a.find(".con").css("-webkit-animation", e),
                            t(a)
                    }),
                    $("[data-yutu-fn-name]").each(function(t, a) {
                        var e = $(a),
                            n = e.data("yutu-fn-name");
                        fnparams = e.data("yutu-fn-params").split(","),
                            $.fn[n] ? $.fn[n].apply(e, fnparams) : console.error(n + "函数不存在，请检查自定义函数")
                    });
                var w = function() {
                    function t() {
                        var t = navigator.userAgent.toLowerCase();
                        return {
                            ipad: t.indexOf("ipad") >= 0,
                            iphone: t.indexOf("iphone") >= 0,
                            android: t.indexOf("android") >= 0,
                            weixin: t.indexOf("micromessenger") >= 0,
                            qqnews: t.indexOf("qqnews") >= 0,
                            mqq: t.indexOf("mqq") >= 0
                        }
                    }
                    function a(t, e) {
                        var n = 2e3;
                        e = e || 0,
                            !0 === window.G_WEIXIN_READY || "WeixinJSBridge" in window ? t.apply(null, []) : n >= e && setTimeout(function() {
                                    a(t, e++)
                                },
                                15)
                    }
                    if (t().weixin) {
                        var e = yt_global.title;
                        if ((yt_global.share_diy_s || yt_global.share_diy_e) && ("" != yt_global.share_diy_s || "" != yt_global.share_diy_e)) if (window.yt_global_share_count) e = yt_global.share_diy_s + window.yt_global_share_count + yt_global.share_diy_e;
                        else var n = !0,
                                i = setInterval(function() {
                                        if (n) {
                                            var t = window.location.host;
                                            t.indexOf("yutu") > 0 ? _wurl = "http://active.qq.com/yutu/index.php?vote.achieve&activity_id=" + yt_global.id + "&msg=qq_share": _wurl = "http://testshipei.qq.com/yutu/index.php?vote.achieve&activity_id=" + yt_global.id + "&msg=qq_share",
                                                $.ajax({
                                                    type: "get",
                                                    async: !1,
                                                    url: _wurl,
                                                    dataType: "jsonp",
                                                    jsonpCallback: "yutu_vote_achieve_callback",
                                                    success: function(t) {
                                                        "success" == t.tip && (n = !1, e = yt_global.share_diy_s + t.data.totalCnt + yt_global.share_diy_e)
                                                    },
                                                    error: function() {}
                                                })
                                        } else clearInterval(i)
                                    },
                                    300);
                        a(function() {
                            WeixinJSBridge.on("menu:share:timeline",
                                function(t) {
                                    WeixinJSBridge.invoke("shareTimeline", {
                                            img_url: yt_global.img,
                                            img_width: "120",
                                            img_height: "120",
                                            link: yt_global.url,
                                            desc: yt_global.desc,
                                            title: e
                                        },
                                        function(t) {
                                            if ("share_timeline:ok" == t.err_msg) {
                                                var a = window.location.host;
                                                a.indexOf("yutu") > 0 ? _wsurl = "http://active.qq.com/yutu/index.php?wxshare.save&aid=" + yt_global.id + "&type=wxshare": _wsurl = "http://testshipei.qq.com/yutu/index.php?wxshare.save&aid=" + yt_global.id + "&type=wxshare";
                                                try {
                                                    $.ajax({
                                                        url: _wsurl,
                                                        dataType: "jsonp",
                                                        jsonpCallback: "yutu_share_callback",
                                                        success: function(t) {}
                                                    })
                                                } catch(e) {}
                                            }
                                        })
                                }),
                                WeixinJSBridge.on("menu:share:appmessage",
                                    function() {
                                        WeixinJSBridge.invoke("sendAppMessage", {
                                                img_url: yt_global.img,
                                                img_width: "120",
                                                img_height: "120",
                                                link: yt_global.url,
                                                desc: yt_global.desc,
                                                title: e
                                            },
                                            function(t) {
                                                if ("send_app_msg:confirm" == t.err_msg) {
                                                    var a = window.location.host;
                                                    a.indexOf("yutu") > 0 ? _wsurl = "http://active.qq.com/yutu/index.php?wxshare.save&aid=" + yt_global.id + "&type=wxshare": _wsurl = "http://testshipei.qq.com/yutu/index.php?wxshare.save&aid=" + yt_global.id + "&type=wxshare";
                                                    try {
                                                        $.ajax({
                                                            url: _wsurl,
                                                            dataType: "jsonp",
                                                            jsonpCallback: "yutu_share_callback",
                                                            success: function(t) {}
                                                        })
                                                    } catch(e) {}
                                                }
                                            })
                                    }),
                                WeixinJSBridge.on("menu:share:weibo",
                                    function(t) {
                                        WeixinJSBridge.invoke("shareWeibo", {
                                                content: e,
                                                url: yt_global.url
                                            },
                                            function(t) {})
                                    })
                        })
                    } else t().qqnews && (window.TencentNews && window.TencentNews.showShareMenu ? window.TencentNews.showShareMenu(_s.url, _s.title, _s.des, _s.pic, "news_news_wc") : window.TencentNews.shareFromWebView(_s.title, _s.des, _s.pic))
                };
                w()
            }
        },
        p = new Image(1, 1);
    window.g = c
});
/*  |xGv00|222975be9f8a571f21362ae9c953803f */
