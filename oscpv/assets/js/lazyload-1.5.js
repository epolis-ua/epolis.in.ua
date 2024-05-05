var lzld = 3231930;
function t_lazyload_update() {
    "undefined" != typeof lazyload_cover && lazyload_cover.update(),
    "undefined" != typeof lazyload_img && lazyload_img.update(),
    "undefined" != typeof lazyload_bgimg && lazyload_bgimg.update()
}
function t_lazyload_getResizeUrl(e, t, i, o, n, l, a, r) {
    if ("undefined" == i || null == i)
        return i;
    if (0 < i.indexOf(".svg") || 0 < i.indexOf(".gif") || 0 < i.indexOf(".ico") || -1 === i.indexOf("static") || 0 < i.indexOf("-/empty/") || 0 < i.indexOf("-/resizeb/"))
        return i;
    if (-1 < i.indexOf("/-/"))
        return i;
    if (!(0 < o && 0 < n))
        return i;
    if ("y" == window.lazy_err)
        return i;
    if (-1 < i.indexOf("lib"))
        return i;
    if ("IMG" != e && "DIV" != e && "TD" != e && "A" != e)
        return i;
    var s;
    if (1 < window.devicePixelRatio && window.t_lazyload_domloaded < 2500 && (0 < o && (o = parseInt(2 * o)),
    0 < n && (n = parseInt(2 * n))),
    1e3 < o || 1800 < n)
        return d = t_lazyload_getWebPUrl(i);
    if ("resize" == t) {
        (s = i.split("/")).splice(i.split("/").length - 1, 0, "-/resize/" + o + "x" + ("DIV" == e && 0 < n ? n : "") + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
        var d = s.join("/").replace("static", "thumb")
    } else {
        if (!(0 < o && 0 < n))
            return i;
        "left" == l || "right" == l || (l = "center"),
        "top" == a || "bottom" == a || (a = "center"),
        (s = i.split("/")).splice(i.split("/").length - 1, 0, "-/" + t + "/" + o + "x" + n + "/" + l + "/" + a + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
        d = s.join("/").replace("static", "thumb")
    }
    return d
}
function t_lazyload_round(e, t, i, o) {
    var n, l;
    return "cover" == e && 0 < t && 0 < i ? (n = t / i) <= (l = 1) ? (n <= .8 && (l = .8),
    n <= .751 && (l = .75),
    n <= .667 && (l = .667),
    n <= .563 && (l = .562),
    n <= .501 && (l = .5),
    i = Math.ceil(i / o) * o,
    t = Math.ceil(i * l),
    t = 10 * Math.ceil(t / 10)) : (1.25 <= n && (l = 1.25),
    1.332 <= n && (l = 1.333),
    1.5 <= n && (l = 1.5),
    1.777 <= n && (l = 1.777),
    2 <= n && (l = 2),
    t = Math.ceil(t / o) * o,
    i = Math.ceil(t / l),
    i = 10 * Math.ceil(i / 10)) : (0 < t && (t = Math.ceil(t / o) * o),
    0 < i && (i = Math.ceil(i / o) * o)),
    [t, i]
}
function t_lazyload_reloadonError(e, t) {
    if (void 0 !== t && null != t && "" != t && -1 !== t.indexOf("thumb") && -1 !== t.indexOf("/-/")) {
        var i = t.split("/")
          , o = ""
          , n = "";
        if (3 < i.length)
            for (var l = 0; l < i.length; l++)
                "" != i[l] && ("til" == i[l].substring(0, 3) && 36 == i[l].length && 4 == (i[l].match(/-/g) || []).length && (o = i[l]),
                l == i.length - 1 && (n = i[l]));
        if ("" != o && "" != n) {
            var a = "assets/images/static/" + o + "/" + n;
            if (console.log("try reload:" + a),
            "IMG" === e.tagName)
                return void (a && e.setAttribute("src", a));
            e.style.backgroundImage = "url(" + a + ")"
        }
    }
}
function t_lazyload_getWebPUrl(e) {
    if ("undefined" == e || null == e)
        return e;
    if (0 < e.indexOf(".svg") || 0 < e.indexOf(".gif") || 0 < e.indexOf(".ico") || -1 === e.indexOf("static") || 0 < e.indexOf("-/empty/") || 0 < e.indexOf("-/resizeb/"))
        return e;
    if (-1 < e.indexOf("/-/"))
        return e;
    if (-1 < e.indexOf("lib"))
        return e;
    if ("y" != window.lazy_webp)
        return e;
    if ("y" == window.lazy_err)
        return e;
    var t = e.split("/");
    return t.splice(e.split("/").length - 1, 0, "-/format/webp"),
    t.join("/").replace("static", "thumb")
}
function t_lazyload_onWindowResize() {
    $(".t-cover__carrier, .t-bgimg, .t-img").each(function() {
        window.t_lazyload_updateResize_elem($(this))
    })
}
function t_lazyload_detectwebp() {
    var e = new Image;
    e.onload = e.onerror = function() {
        2 != e.height ? window.lazy_webp = "y" : window.lazy_webp = "y"
    }
    ,
    e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}
!function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.LazyLoad = t()
}(this, function() {
    var t, n, l, i, o = !1;
    function a(e, t, i) {
        var o;
        n ? e.addEventListener(t, i) : l && (e.attachEvent("on" + t, (o = e,
        function() {
            i.call(o, window.event)
        }
        )),
        e = null)
    }
    function r(e, t, i) {
        n ? e.removeEventListener(t, i) : l && e.detachEvent("on" + t, i)
    }
    function s(e, t, i) {
        var o, n, l;
        function a() {
            return window.innerWidth || o.documentElement.clientWidth || document.body.clientWidth
        }
        function r(e) {
            return e.getBoundingClientRect().top + n - o.documentElement.clientTop
        }
        function s(e) {
            return e.getBoundingClientRect().left + l - o.documentElement.clientLeft
        }
        return o = e.ownerDocument,
        n = window.pageYOffset || o.body.scrollTop,
        l = window.pageXOffset || o.body.scrollLeft,
        "fixed" == e.dataset.contentCoverParallax && e.closest && e.closest(".t-cover__container") && (e = e.closest(".t-cover__container")),
        !((t === window ? (window.innerHeight || o.documentElement.clientHeight || document.body.clientHeight) + n : r(t) + t.offsetHeight) <= r(e) - i || (t === window ? n : r(t)) >= r(e) + i + e.offsetHeight || (t === window ? a() + window.pageXOffset : s(t) + a()) <= s(e) - i || (t === window ? l : s(t)) >= s(e) + i + e.offsetWidth)
    }
    function d() {
        return (new Date).getTime()
    }
    function c(e, t) {
        i ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
    }
    function u(e, t) {
        i ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function _(e, t, i, o) {
        var n = t.getAttribute("data-" + o);
        if (null != n) {
            var l = t.clientWidth
              , a = t.clientHeight
              , r = $(t);
            !r.hasClass("t-slds__bgimg") && !r.hasClass("t-slds__img") || r.hasClass("t827__image") || (a = r.parents(".t-slds__container").height(),
            l = r.parents(".t-slds__container").width());
            var s, d = "", c = "", u = "", _ = "", h = 1, f = !0, g = !1;
            if ("IMG" === t.tagName ? _ = "resize" : ("50%" == (d = (s = r.css("backgroundPosition").split(" "))[0]) ? d = "center" : "0%" == d ? d = "left" : "100%" == d && (d = "right"),
            "50%" == (c = s[1]) ? c = "center" : "0%" == c ? c = "top" : "100%" == c && (d = "bottom"),
            _ = "contain" == (u = r.css("background-size")) ? "contain" : "cover",
            "fixed" == r.css("background-attachment") && (g = !0)),
            void 0 !== r.attr("data-lazy-rule"))
                for (var p = r.attr("data-lazy-rule").split(","), m = 0; m < p.length; m++)
                    -1 < p[m].indexOf("round:") && (h = +p[m].split(":")[1]),
                    -1 < p[m].indexOf("comm:") && "resize" != (_ = p[m].split(":")[1]) && "cover" != _ && "contain" != _ && (f = !1),
                    -1 < p[m].indexOf("skip") && (g = !0);
            1 < h && (l = (s = t_lazyload_round(_, l, a, h))[0],
            a = s[1]),
            "cover" == _ && 0 < l && 0 < a && l <= 1e3 && (l === 5 * Math.ceil(l / 5) && a === 5 * Math.ceil(a / 5) || -1 < ["200x151", "640x712", "320x356", "670x744", "335x372", "300x225", "500x375", "400x301", "748x832", "374x416", "670x502", "335x251", "360x234", "560x622", "280x311", "640x416"].indexOf(l + "x" + a) || r.hasClass("tn-atom") || r.hasClass("tn-atom__img") || (f = !1)),
            !0 === f && (n = 1e3 < l || 1e3 < a || 0 == l || "IMG" != t.tagName && 0 == a || !0 === g ? t_lazyload_getWebPUrl(n) : t_lazyload_getResizeUrl(t.tagName, _, n, l, a, d, c, u)),
            "IMG" !== e.tagName && "IFRAME" !== e.tagName ? e.style.backgroundImage = "url(" + n + ")" : n && e.setAttribute("src", n)
        }
    }
    function h(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function e(e) {
        o || (t = {
            elements_selector: "img",
            container: window,
            threshold: 300,
            throttle: 50,
            data_src: "original",
            data_srcset: "original-set",
            class_loading: "loading",
            class_loaded: "loaded",
            skip_invisible: !0,
            show_while_loading: !0,
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_processed: null,
            placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        },
        n = !!window.addEventListener,
        l = !!window.attachEvent,
        i = !!document.body.classList,
        o = !0),
        this._settings = function(e, t) {
            var i, o = {};
            for (i in e)
                e.hasOwnProperty(i) && (o[i] = e[i]);
            for (i in t)
                t.hasOwnProperty(i) && (o[i] = t[i]);
            return o
        }(t, e),
        this._queryOriginNode = this._settings.container === window ? document : this._settings.container,
        this._previousLoopTime = 0,
        this._loopTimeout = null,
        this._handleScrollFn = h(this.handleScroll, this),
        a(window, "resize", this._handleScrollFn),
        this.update(),
        this.loadAnimatedImages()
    }
    return e.prototype._showOnLoad = function(t) {
        var i, o = this._settings;
        t.getAttribute("src") || t.setAttribute("src", o.placeholder),
        a(i = document.createElement("img"), "load", function e() {
            null !== o && (o.callback_load && o.callback_load(t),
            _(t, t, o.data_srcset, o.data_src),
            o.callback_set && o.callback_set(t),
            u(t, o.class_loading),
            c(t, o.class_loaded),
            r(i, "load", e))
        }),
        a(i, "error", function(e) {
            u(t, o.class_loading),
            o.callback_error && o.callback_error(t),
            window.lazy_err = "y",
            console.log("lazy loading err"),
            t_lazyload_reloadonError(t, e.path[0].currentSrc)
        }),
        c(t, o.class_loading),
        Date.now(),
        _(i, t, o.data_srcset, o.data_src)
    }
    ,
    e.prototype._showOnAppear = function(t) {
        var i = this._settings;
        function o() {
            null !== i && (i.callback_load && i.callback_load(t),
            u(t, i.class_loading),
            c(t, i.class_loaded),
            r(t, "load", o))
        }
        "IMG" !== t.tagName && "IFRAME" !== t.tagName || (a(t, "load", o),
        a(t, "error", function(e) {
            r(t, "load", o),
            u(t, i.class_loading),
            i.callback_error && i.callback_error(t),
            window.lazy_err = "y",
            console.log("lazy loading err"),
            t_lazyload_reloadonError(t, e.path[0].currentSrc)
        }),
        c(t, i.class_loading)),
        startTime = Date.now(),
        _(t, t, i.data_srcset, i.data_src),
        i.callback_set && i.callback_set(t)
    }
    ,
    e.prototype._loopThroughElements = function() {
        for (var e, t = this._settings, i = this._elements, o = i ? i.length : 0, n = [], l = 0; l < o; l++)
            e = i[l],
            t.skip_invisible && null === e.offsetParent && "fixed" != e.dataset.contentCoverParallax || s(e, t.container, t.threshold) && (t.show_while_loading ? this._showOnAppear(e) : this._showOnLoad(e),
            n.push(l),
            e.wasProcessed = !0);
        for (; 0 < n.length; )
            i.splice(n.pop(), 1),
            t.callback_processed && t.callback_processed(i.length);
        0 === o && this._stopScrollHandler()
    }
    ,
    e.prototype._purgeElements = function() {
        for (var e = this._elements, t = e.length, i = [], o = 0; o < t; o++)
            e[o].wasProcessed && i.push(o);
        for (; 0 < i.length; )
            e.splice(i.pop(), 1)
    }
    ,
    e.prototype._startScrollHandler = function() {
        this._isHandlingScroll || (this._isHandlingScroll = !0,
        a(this._settings.container, "scroll", this._handleScrollFn))
    }
    ,
    e.prototype._stopScrollHandler = function() {
        this._isHandlingScroll && (this._isHandlingScroll = !1,
        r(this._settings.container, "scroll", this._handleScrollFn))
    }
    ,
    e.prototype.loadAnimatedImages = function() {
        var e, t, d = this._settings, i = this._elements, o = i ? i.length : 0, n = [];
        function l(e, t) {
            var i, o, n, l, a = (i = e,
            "trigger" === (o = t) ? (n = i.attr("data-animate-sbs-trgels"),
            l = $('[data-elem-id="' + n + '"]')) : "viewport" === o && (l = i.parents(".t396")),
            l ? l.offset() : null);
            if (a) {
                var r = Math.abs(a.top - e.offset().top)
                  , s = Math.abs(a.left - e.offset().left);
                return r > d.threshold || s > d.threshold
            }
        }
        for (e = 0; e < o; e++) {
            t = i[e];
            var a, r = $(t).parents(".tn-elem"), s = r.attr("data-animate-sbs-opts"), c = r.attr("data-animate-sbs-event");
            "intoview" !== c && "blockintoview" !== c || (a = "viewport"),
            r.attr("data-animate-sbs-trgels") && (a = "trigger"),
            d.skip_invisible && null === t.offsetParent || !s || l(r, a) && (d.show_while_loading ? this._showOnAppear(t) : this._showOnLoad(t),
            n.push(e),
            t.wasProcessed = !0)
        }
        for (; 0 < n.length; )
            i.splice(n.pop(), 1),
            d.callback_processed && d.callback_processed(i.length)
    }
    ,
    e.prototype.handleScroll = function() {
        var e, t, i;
        this._settings && (t = d(),
        0 !== (i = this._settings.throttle) ? (e = i - (t - this._previousLoopTime)) <= 0 || i < e ? (this._loopTimeout && (clearTimeout(this._loopTimeout),
        this._loopTimeout = null),
        this._previousLoopTime = t,
        this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(h(function() {
            this._previousLoopTime = d(),
            this._loopTimeout = null,
            this._loopThroughElements()
        }, this), e)) : this._loopThroughElements())
    }
    ,
    e.prototype.update = function() {
        this._elements = function(t) {
            try {
                return Array.prototype.slice.call(t)
            } catch (e) {
                var i, o = [], n = t.length;
                for (i = 0; i < n; i++)
                    o.push(t[i]);
                return o
            }
        }(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),
        this._purgeElements(),
        this._loopThroughElements(),
        this._startScrollHandler()
    }
    ,
    e.prototype.destroy = function() {
        r(window, "resize", this._handleScrollFn),
        this._loopTimeout && (clearTimeout(this._loopTimeout),
        this._loopTimeout = null),
        this._stopScrollHandler(),
        this._elements = null,
        this._queryOriginNode = null,
        this._settings = null
    }
    ,
    e
}),
window.lazy = "y",
$(document).ready(function() {
    t_lazyload_detectwebp(),
    window.lazy_uc = "",
    $(".t156").find(".t-img").attr("data-lazy-rule", "skip"),
    $(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546").find(".t-bgimg").attr("data-lazy-rule", "comm:resize,round:100"),
    setTimeout(function() {
        lazyload_cover = new LazyLoad({
            elements_selector: ".t-cover__carrier",
            show_while_loading: !1,
            data_src: "content-cover-bg",
            placeholder: "",
            threshold: 700
        })
    }, 100),
    setTimeout(function() {
        lazyload_img = new LazyLoad({
            elements_selector: ".t-img",
            threshold: 800
        }),
        lazyload_bgimg = new LazyLoad({
            elements_selector: ".t-bgimg",
            show_while_loading: !1,
            placeholder: "",
            threshold: 800
        }),
        lazyload_iframe = new LazyLoad({
            elements_selector: ".t-iframe"
        }),
        $(document).bind("slide.bs.carousel", function(e) {
            setTimeout(function() {
                lazyload_cover.update(),
                lazyload_img.update(),
                lazyload_bgimg.update()
            }, 500)
        }),
        $isMobile && ($("body").append("<div class='t-mbfix'></div>"),
        setTimeout(function() {
            $(".t-mbfix").addClass("t-mbfix_hide")
        }, 50),
        setTimeout(function() {
            $(".t-mbfix").remove()
        }, 1e3))
    }, 500),
    $(window).bind("resize", t_throttle(function() {
        clearTimeout(window.t_lazyload_resize_timerid),
        window.t_lazyload_resize_timerid = setTimeout(t_lazyload_onWindowResize, 1e3)
    }, 500)),
    setTimeout(function() {
        window.t_lazyload_domloaded = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
    }, 0)
}),
window.t_lazyload_updateResize_elem = function(e) {
    var t, i, o, n, l, a, r, s, d, c;
    console.log("update resize elem"),
    0 != e.length && (n = "IMG" == (i = (t = e.get(0)).tagName) ? (o = e.attr("src"),
    "-/resize/") : (o = e.css("background-image").replace("url(", "").replace(")", "").replace(/\"/gi, ""),
    "contain" == e.css("background-size") ? "-/contain/" : "-/cover/"),
    void 0 === o || -1 === o.indexOf(n) || 0 < o.indexOf(".svg") || 0 < o.indexOf(".gif") || 0 < o.indexOf(".ico") || -1 === o.indexOf("thumb") || 0 < o.indexOf("-/empty/") && 0 < o.indexOf("-/resizeb/") || (l = o.indexOf(n) + n.length,
    a = o.indexOf("/", l),
    0 < l && 0 < a && (r = o.slice(l, a).split("x"),
    s = t.clientWidth,
    d = t.clientHeight,
    0 < s && 0 < d && (0 < r[0] || 0 < r[1]) && (0 < r[0] && s > r[0] || 0 < r[1] && d > r[1]) && (0 < r[0] && 100 < s - r[0] || 0 < r[1] && 100 < d - r[1]) && (c = o.slice(0, l) + (0 < r[0] ? s : "") + "x" + (0 < r[1] ? d : "") + o.substring(a),
    "IMG" == i ? e.attr("src", c) : e.css("background-image", "url(" + c + ")")))))
}
;
