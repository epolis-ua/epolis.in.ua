window.isSearchBot = !1;
if (/Bot/i.test(navigator.userAgent)) {
    window.isSearchBot = !0
}
window.isMobile = !1;
window.$isMobile = !1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobile = !0;
    window.$isMobile = !0
}
window.isiOS = !1;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.isiOS = !0
}
window.browserLang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2);
window.tildaBrowserLang = window.browserLang;
(function($) {
    $(document).ready(function() {
        var userAgent = window.navigator.userAgent;
        var isInstagram = userAgent.indexOf('Instagram') !== -1;
        var isFacebook = userAgent.indexOf('FBAV') !== -1;
        var isYandex = userAgent.indexOf('YaSearchBrowser') !== -1;
        var isSamsung = userAgent.indexOf('SamsungBrowser') !== -1;
        var isAndroid = userAgent.indexOf('Android') !== -1;
        if (isAndroid && (isFacebook || isInstagram || isYandex || isSamsung)) {
            var textElement = document.createElement('p');
            textElement.style.lineHeight = '100px';
            textElement.style.padding = '0';
            textElement.style.margin = '0';
            textElement.style.height = 'auto';
            textElement.style.position = 'absolute';
            textElement.style.opacity = '0.001';
            textElement.innerText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            document.body.appendChild(textElement);
            var factor = 100 / textElement.getBoundingClientRect().height;
            textElement.parentNode.removeChild(textElement);
            if (factor < 0.98) {
                $('body').append('<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' + (factor * 100) + '%;}</style>')
            }
        }
    });
    $isMobile = !1;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $isMobile = !0
    }
    if (/Bot/i.test(navigator.userAgent)) {
        window.isSearchBot = !0
    }
    window.isMobile = $isMobile;
    if ($isMobile == !0) {
        var correctHeight = function() {
            var coverCarries = document.body.querySelectorAll('.t-cover__carrier')
              , viewPortHeight = $(window).height()
              , factor = 0;
            for (var i = 0, l = coverCarries.length, cc, ccStyle, newHeight, parent, opacityLayer, textBox; i < l; i++) {
                cc = coverCarries[i];
                ccStyle = cc.style;
                if (ccStyle.height.indexOf('vh') > -1) {
                    factor = parseInt(ccStyle.height, 10) / 100;
                    newHeight = Math.round(viewPortHeight * factor) + 'px';
                    parent = $(cc).parent('.t-cover');
                    if (parent && (parent = parent[0])) {
                        opacityLayer = parent.querySelector('.t-cover__filter');
                        textBox = parent.querySelector('.t-cover__wrapper');
                        if (opacityLayer) {
                            opacityLayer.style.height = newHeight
                        }
                        if (textBox) {
                            textBox.style.height = newHeight
                        }
                        ccStyle.height = parent.style.height = newHeight
                    }
                }
            }
            var elCarries = document.body.querySelectorAll('[data-height-correct-vh]')
              , viewPortHeight = $(window).height()
              , factor = 0;
            for (var i = 0, l = elCarries.length, cc, ccStyle, newHeight, parent, opacityLayer, textBox; i < l; i++) {
                cc = elCarries[i];
                ccStyle = cc.style;
                if (ccStyle.height.indexOf('vh') > -1) {
                    factor = parseInt(ccStyle.height) / 100;
                    newHeight = viewPortHeight + 'px';
                    parent = $(cc).parent('.t-cover');
                    ccStyle.height = newHeight
                }
            }
        };
        $(document).ready(function() {
            setTimeout(function() {
                correctHeight()
            }, 400)
        });
        $(window).load(function() {
            setTimeout(function() {
                correctHeight()
            }, 400)
        })
    }
    if ($isMobile == !0) {
        if ($(window).width() < 480) {
            $(document).ready(function() {
                $("div[data-customstyle=yes]").each(function(index) {
                    if ($(this).css('font-size').replace('px', '') > 26) {
                        $(this).css('font-size', '');
                        $(this).css('line-height', '')
                    }
                });
                $("[field]").find("span").each(function(index) {
                    if ($(this).css('font-size').replace('px', '') > 26) {
                        $(this).css('font-size', '')
                    }
                });
                var sta;
                $(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom").each(function(index) {
                    sta = $(this).attr('style');
                    if (typeof sta != 'undefined' && sta != '' && sta.indexOf('font-size') > -1) {
                        if ($(this).css('font-size').replace('px', '') > 26) {
                            var newsta = sta.replace('font-size', 'fontsize').replace('line-height', 'lineheight');
                            $(this).attr('style', newsta)
                        }
                    }
                })
            });
            $(window).load(function() {
                var window_width = $(window).width();
                $(".r:visible").each(function() {
                    var el = $(this);
                    $(this).find("div").not("[data-auto-correct-mobile-width=false], .tn-elem, .tn-atom, .tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__videoiframe, .tn-atom .t-form *, .tn-atom__sticky-wrapper, .t-store__relevants__container, .t-slds__items-wrapper, .js-product-controls-wrapper, .js-product-edition-option, .t-product__option-variants").each(function() {
                        var r_div_width = parseInt($(this).outerWidth(!0));
                        if ((r_div_width) > window_width) {
                            console.log('Block not optimized for mobile width. Block width:' + r_div_width + ' Block id:' + el.attr('id'));
                            console.log($(this));
                            el.css("overflow", "auto");
                            if ((r_div_width - 3) > window_width) {
                                el.css("word-break", "break-all")
                            }
                        }
                    })
                })
            })
        } else if ($(window).width() < 900) {
            $(document).ready(function() {
                $("div[data-customstyle=yes]").each(function(index) {
                    if ($(this).css('font-size').replace('px', '') > 30) {
                        $(this).css('font-size', '');
                        $(this).css('line-height', '')
                    }
                });
                $("[field]").find("span").each(function(index) {
                    if ($(this).css('font-size').replace('px', '') > 30) {
                        $(this).css('font-size', '')
                    }
                });
                var sta;
                $(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom").each(function(index) {
                    sta = $(this).attr('style');
                    if (typeof sta != 'undefined' && sta != '' && sta.indexOf('font-size') > -1) {
                        if ($(this).css('font-size').replace('px', '') > 30) {
                            var newsta = sta.replace('font-size', 'fontsize').replace('line-height', 'lineheight');
                            $(this).attr('style', newsta)
                        }
                    }
                })
            })
        }
    }
}
)(jQuery);
(function($) {
    function VideoLoadProcessor() {
        this.setScrollListener()
    }
    VideoLoadProcessor.prototype.videoTags = [];
    VideoLoadProcessor.prototype.defaultConfig = {
        isNeedStop: !1
    };
    VideoLoadProcessor.prototype.videoConfigs = [];
    VideoLoadProcessor.prototype.registerNewVideo = function(video, config) {
        if (!(video instanceof HTMLVideoElement)) {
            throw new Error("Wrong tag passed into registerNewVideo")
        }
        if (this.videoTags.indexOf(video) == -1) {
            this.videoTags.push(video);
            this.videoConfigs.push(typeof config == "undefined" ? this.defaultConfig : config);
            this.scrollCb('', !0);
            return !0
        }
        return !1
    }
    VideoLoadProcessor.prototype.unergisterVideo = function(video) {
        if (!(video instanceof HTMLVideoElement)) {
            throw new Error("Wrong tag passed into unregisterNewVideo")
        }
        var index;
        if ((index = this.videoTags.indexOf(video)) > -1) {
            if (typeof video.remove == "function") {
                video.remove()
            } else {
                if (video.parentNode) {
                    video.parentNode.removeChild(video)
                }
            }
            this.pauseVideo(video, this.videoConfigs[index]);
            this.videoTags.splice(index, 1);
            this.videoConfigs.splice(index, 1);
            return !0
        }
        return !1
    }
    VideoLoadProcessor.prototype.pauseVideo = function(video, config) {
        if (!config) {
            throw new Error("Wrong config type!")
        }
        video.pause();
        if (config.isNeedStop) {
            video.load()
        }
    }
    VideoLoadProcessor.prototype.setScrollListener = function() {
        $(window).bind('scroll', t_throttle(jQuery.proxy(this.scrollCb, this), 200))
    }
    VideoLoadProcessor.prototype.scrollCb = function(e, firstInvoke) {
        var windowHeight = $(window).height()
          , _shift = 0
          , _v = null;
        for (var i = 0, l = this.videoTags.length; i < l; i++) {
            _v = this.videoTags[i],
            _vrect = this.getVideoBoundingRect(_v, !1);
            if (Math.abs(_vrect.top) < windowHeight && Math.abs(_vrect.top) > windowHeight / 2) {
                var vol = 1 - (Math.abs(_vrect.top) - windowHeight / 2) / (windowHeight / 2) - 0.2;
                if (vol > 0 && vol <= 1 && _v.volume != 0) {
                    _v.volume = vol
                }
            }
            if (Math.abs(_vrect.top) > windowHeight || _vrect.height == 0) {
                this.pauseVideo(_v, this.videoConfigs[i]);
                continue
            }
            if (firstInvoke) {
                _v.play()
            }
            if (_v.paused && _v.loop) {
                _v.play()
            }
        }
    }
    ;
    VideoLoadProcessor.prototype.getVideoObject = function(video) {
        for (var i = 0, l = this.videoTags.length; i > l; i++) {
            var vo = this.videoTags[i];
            if (vo.v === video) {
                return vo
            }
        }
        return null
    }
    VideoLoadProcessor.prototype.getVideoBoundingRect = function(video, isNeedParent) {
        if (typeof isNeedParent == "undefined") {
            isNeedParent = !0
        }
        var parent = null;
        if (isNeedParent) {
            parent = $(video).parents('.r')[0];
            if (!parent) {
                parent = video
            }
        } else {
            parent = video
        }
        return parent.getBoundingClientRect()
    }
    window.videoLoadProcessor = new VideoLoadProcessor()
}
)(jQuery);
(function($) {
    function SequenceController() {
        this.setScrollCb();
        this.itemHeight = screen.availHeight;
        var itemTransitionItemRelation = 0.25;
        this.itemTransitionTop = this.itemHeight * itemTransitionItemRelation;
        this.activeItemIndex = null;
        this.windowHeight = document.documentElement.clientHeight || window.innerHeight || screen.availHeight;
        this.topOffsetShift = -150;
        $(window).resize(jQuery.proxy(this.recalculateAllSequencesOffsets, this));
        this._resizeInterval = setInterval(jQuery.proxy(this.scrollCb, this), 500)
    }
    SequenceController.prototype.defaultConfig = {
        orientation: "vertical",
        speedFactor: 1,
        automated: !1
    };
    SequenceController.prototype.sequenceObjects = [];
    SequenceController.prototype.recalculateAllSequencesOffsets = function() {
        if (this._resizeTimeout) {
            clearTimeout(this._resizeTimeout)
        }
        if (this._resizeInterval) {
            clearInterval(this._resizeInterval)
        }
        this._resizeTimeout = setTimeout(jQuery.proxy(function() {
            this.scrollCb();
            this._resizeInterval = setInterval(jQuery.proxy(this.scrollCb, this), 500)
        }, this), 10)
    }
    SequenceController.prototype.registerNewBlock = function(node) {
        if (!(node instanceof HTMLElement)) {
            throw new Error("Wrong node type in registerNewBlock")
        }
        for (var i = 0, l = this.sequenceObjects.length; i < l; i++) {
            if (this.sequenceObjects[i].sequenceBlock === node) {
                return !1
            }
        }
        var sequenceHolder = node.querySelector('[data-hook="sequence-holder"]')
          , sequenceHeight = 0
          , sequenceOffsetTop = this.getAbsoluteTopOffset(sequenceHolder)
          , items = (function() {
            var _items = Array.prototype.slice.call(node.querySelectorAll('[data-hook="sequence-item"]'), 0)
              , __items = [];
            _items.forEach(jQuery.proxy(function(el, i, array) {
                var elHeight = this.getItemHeight(el)
                  , backgroundHolder = el.querySelector('[data-hook="item-background"]');
                el.style.height = elHeight + 'px';
                backgroundHolder.style.height = this.itemHeight + 'px';
                if (i < array.length - 1) {
                    sequenceHeight += elHeight
                }
                __items.push({
                    node: el,
                    height: elHeight,
                    topOffset: this.getAbsoluteTopOffset(el.querySelector('.txt-holder')) - (i == array.length - 1 ? 0 : this.topOffsetShift),
                    backgroundHolder: backgroundHolder
                })
            }, this));
            return __items
        }
        ).call(this)
          , h = this.itemHeight
          , sequenceObject = {
            sequenceBlock: node,
            sequenceHolder: sequenceHolder,
            sequenceHolderTopOffset: sequenceOffsetTop,
            sequenceHeight: sequenceHeight,
            items: items,
            started: !1,
            prevBackgroundColor: ''
        };
        this.sequenceObjects.push(sequenceObject);
        this.scrollCb();
        return !0
    }
    SequenceController.prototype.getItemHeight = function(el) {
        var txtBlock = el.querySelector("[data-hook='item-text']")
          , backgroundHolder = el.querySelector("[data-hook='item-background']");
        st = el.style;
        var computedTop = parseFloat(getComputedStyle(txtBlock).top);
        txtBlock.style.top = computedTop + 'px';
        var totalHeight = Math.max(txtBlock.clientHeight + computedTop, this.itemHeight);
        return totalHeight
    }
    SequenceController.prototype.fixTextBlocksPosition = function(node) {
        txtBlocks = Array.prototype.slice.call(node.querySelectorAll('[data-hook="item-text"]'), 0);
        txtBlocks.forEach(function(el, i, array) {
            var backgroundSibling = el.parentNode.querySelector("[data-hook='item-background']");
            backgroundSibling.style.top = '-' + el.clientHeight + 'px'
        })
    }
    SequenceController.prototype.unergisterBlock = function(node) {
        for (var i = 0, l = this.sequenceObjects.length, index = null; i < l; i++) {
            if (this.sequenceObjects[i].sequenceBlock === node) {
                index = i;
                break
            }
        }
        if (index !== null) {
            this.sequenceObjects.splice(index, 1);
            return !0
        }
        return !1
    }
    SequenceController.prototype.getAbsoluteTopOffset = function(el) {
        var topOffset = el.offsetTop;
        el = el.offsetParent;
        while (el != null) {
            topOffset += el.offsetTop;
            el = el.offsetParent
        }
        return topOffset
    }
    SequenceController.prototype.processSequence = function(sequenceObject) {
        if (sequenceObject.started == !1) {
            sequenceObject.prevBackgroundColor = document.body.style.backgroundColor;
            document.body.style.backgroundColor = 'rgb(0, 0, 0)';
            sequenceObject.started = !0
        }
        var sequenceBlock = sequenceObject.sequenceBlock, sequenceHolder = sequenceObject.sequenceHolder, sequenceItems = sequenceObject.items, currentItemIndex = null, node, backgroundHolder, backgroundHolderStyle, textBlock, opacity;
        for (var i = 0, l = sequenceItems.length, nodeRect, txtBlockRect; i < l; i++) {
            node = sequenceItems[i].node,
            txtBlockRect = node.querySelector('.txt-holder')
            nodeRect = node.getBoundingClientRect();
            if (nodeRect.top < this.itemTransitionTop && (nodeRect.bottom < nodeRect.height + this.itemTransitionTop) && nodeRect.bottom > this.itemTransitionTop) {
                currentItemIndex = i;
                break
            }
        }
        if (currentItemIndex == null) {
            return
        }
        opacity = nodeRect.top / this.itemTransitionTop;
        if (opacity > 1) {
            opacity = 1
        } else {
            if (opacity < 0) {
                opacity = 0
            }
        }
        for (var i = 0, l = sequenceItems.length; i < l; i++) {
            node = sequenceItems[i].node,
            backgroundHolderStyle = sequenceItems[i].backgroundHolder.style;
            if (backgroundHolderStyle.position != "fixed") {
                backgroundHolderStyle.position = "fixed"
            }
            if (i == currentItemIndex) {
                backgroundHolderStyle.opacity = 1 - opacity;
                node.querySelector('.txt-holder').style.opacity = 1 - opacity
            } else {
                if (i == currentItemIndex - 1) {
                    backgroundHolderStyle.opacity = opacity;
                    node.querySelector('.txt-holder').style.opacity = opacity
                } else {
                    backgroundHolderStyle.opacity = 0;
                    node.querySelector('.txt-holder').style.opacity = 0
                }
            }
        }
    }
    SequenceController.prototype.stopSequence = function(sequenceObject) {
        if (sequenceObject.started == !1) {
            return
        }
        sequenceObject.items.forEach(function(el, i, array) {
            el.backgroundHolder.style.position = 'relative';
            el.backgroundHolder.style.display = 'block';
            el.backgroundHolder.style.opacity = 1
        });
        document.body.style.backgroundColor = sequenceObject.prevBackgroundColor;
        sequenceObject.started = !1
    }
    SequenceController.prototype.scrollCb = function() {
        var scrollTop = $(window).scrollTop();
        for (var i = 0, l = this.sequenceObjects.length, sO, top; i < l; i++) {
            sO = this.sequenceObjects[i];
            var boundingRect = sO.sequenceHolder.getBoundingClientRect();
            if (boundingRect.top < 0 && boundingRect.bottom > 0 && boundingRect.bottom > boundingRect.height - sO.sequenceHeight - 100) {
                this.processSequence(sO)
            } else {
                this.stopSequence(sO)
            }
        }
    }
    SequenceController.prototype.setScrollCb = function() {
        this._scrollCb = jQuery.proxy(this.scrollCb, this);
        $(window).bind('scroll', t_throttle(this._scrollCb, 200))
    }
    window.sequenceController = new SequenceController();
    window.processVideo = function(v) {
        mp4Src = $(v).attr('data-content-video-url-mp4');
        webmSrc = $(v).attr('data-content-video-url-webm');
        $(v).css("background-color", "transparent");
        $(v).css("background-image", "");
        var options = {
            mp4: mp4Src,
            webm: webmSrc,
            preload: "none",
            autoplay: !1,
            loop: !0,
            scale: !0,
            zIndex: 0,
            width: "100%"
        };
        vid = $(v).videoBG(options);
        videoLoadProcessor.registerNewVideo(vid, {
            isNeedStop: !1
        })
    }
    window.cover_init = function(id) {
        $(document).ready(function() {
            var cover_carrier = document.body.querySelector('#coverCarry' + id);
            var el = $(cover_carrier);
            var backgroundurl = el.attr('data-content-cover-bg');
            var height = el.attr('data-content-cover-height');
            var parallax = el.attr('data-content-cover-parallax');
            var videomp4 = el.attr('data-content-video-url-mp4');
            var videowebm = el.attr('data-content-video-url-webm');
            var youtubeid = el.attr('data-content-video-url-youtube');
            var noloop = el.attr('data-content-video-noloop');
            var nomute = el.attr('data-content-video-nomute');
            var bgbase64 = el.attr('data-content-bg-base64');
            var video_nocover = el.attr('data-content-video-nocover');
            if (!backgroundurl) {
                backgroundurl = ""
            }
            ;if (!height) {
                height = ""
            }
            if (!parallax) {
                parallax = ""
            }
            if (!videomp4) {
                videomp4 = ""
            }
            if (!videowebm) {
                videowebm = ""
            }
            if (!youtubeid) {
                youtubeid = ""
            }
            if (!noloop) {
                noloop = ""
            }
            if (!nomute) {
                nomute = ""
            }
            if (!youtubeid) {
                youtubeid = ""
            }
            if (!bgbase64) {
                bgbase64 = ""
            }
            if (video_nocover && video_nocover == 'yes') {
                videomp4 = "";
                videowebm = "";
                youtubeid = ""
            }
            if ($isMobile && (videowebm != "" || videomp4 != "" || youtubeid != "")) {
                el.css('background-image', "url('" + backgroundurl + "')")
            }
            setTimeout(function() {
                cover_fixcontentheight(id)
            }, 500);
            var clogo = $("#rec" + id).find("img[data-hook-clogo]");
            if (clogo.length) {
                clogo.load(function() {
                    setTimeout(function() {
                        cover_fixcontentheight(id)
                    }, 500)
                })
            }
            if ($isMobile) {
                $(window).on("orientationchange", function() {
                    cover_fixcontentheight(id)
                })
            }
            if (videomp4 !== "" || videowebm !== "" || youtubeid !== "") {
                if ($isMobile == !1) {
                    if (youtubeid == "" && (videomp4 != "" || videowebm != "")) {
                        el.css("background-color", "#000000");
                        el.css("background-image", "url('../https@tilda.ws/img/spinner-white.gif')");
                        el.css("background-size", "auto");
                        el.attr('data-content-cover-bg', '');
                        var loop = !1;
                        var muted = !0;
                        if (noloop != '') {
                            loop = !1
                        } else {
                            loop = !0
                        }
                        if (nomute != '') {
                            muted = !1
                        } else {
                            muted = !0
                        }
                        var height_more_vh = "";
                        if (parallax == "fixed") {
                            if (height.indexOf('vh') > -1) {
                                if (parseInt(height) > 100) {
                                    el.css("height", "100vh");
                                    height_more_vh = "yes"
                                }
                            }
                            if (height.indexOf('px') > -1) {
                                if (parseInt(height) > $(window).height()) {
                                    el.css("height", "100vh");
                                    height_more_vh = "yes"
                                }
                            }
                        }
                        var cotimer;
                        var flagprocessed = "";
                        var wnd = $(window);
                        var prnt = el.parent();
                        wnd.scroll(function() {
                            if (cotimer) {
                                window.clearTimeout(cotimer)
                            }
                            cotimer = window.setTimeout(function() {
                                if (!(flagprocessed > 0)) {
                                    var a, b, c, d, s;
                                    a = el.offset().top;
                                    b = el.height();
                                    c = wnd.scrollTop();
                                    d = wnd.height();
                                    if (((c + d) > a - 500) && (c <= (a + b + 500))) {
                                        var vid = el.videoBG({
                                            mp4: videomp4,
                                            webm: videowebm,
                                            poster: '',
                                            preload: 'none',
                                            autoplay: 'true',
                                            loop: loop,
                                            muted: muted,
                                            volume: 1,
                                            scale: !0,
                                            zIndex: 0,
                                            width: "100%"
                                        });
                                        videoLoadProcessor.registerNewVideo(vid);
                                        flagprocessed = 1
                                    }
                                }
                            }, 100);
                            if (parallax == "fixed" && height_more_vh == "yes") {
                                var aa, bb, cc, dd, ss;
                                aa = prnt.offset().top;
                                bb = prnt.height();
                                cc = wnd.scrollTop();
                                dd = wnd.height();
                                if (cc >= aa + bb - dd) {
                                    el.css("position", "absolute");
                                    el.css("bottom", "0px");
                                    el.css("top", "auto")
                                } else {
                                    if (cc >= aa) {
                                        el.css("position", "fixed");
                                        el.css("top", "0px")
                                    } else {
                                        if (cc < aa) {
                                            el.css("position", "relative");
                                            el.css("top", "auto")
                                        }
                                    }
                                }
                            }
                        });
                        wnd.scroll()
                    } else {
                        if (youtubeid != "") {
                            el.css("background-color", "#000000");
                            el.css("background-image", "");
                            el.attr('data-content-cover-bg', '');
                            var cotimer;
                            var flagprocessed = 0;
                            var wnd = $(window);
                            wnd.scroll(function() {
                                if (cotimer) {
                                    window.clearTimeout(cotimer)
                                }
                                cotimer = window.setTimeout(function() {
                                    flagprocessed = el.find("iframe").length;
                                    if (!(flagprocessed > 0)) {
                                        var a, b, c, d, s;
                                        a = el.offset().top;
                                        b = el.height();
                                        c = wnd.scrollTop();
                                        d = wnd.height();
                                        if (((c + d) > a - 500) && (c <= (a + b + 500))) {
                                            processYoutubeVideo(cover_carrier, height)
                                        }
                                    }
                                }, 100)
                            });
                            wnd.scroll()
                        }
                    }
                }
            }
            if (parallax == "dynamic") {
                if ($isMobile == !1)
                    el.parallax("50%", 0.2, !0)
            }
            if (bgbase64 == "yes" && backgroundurl != "" && videomp4 == "" && videowebm == "" && youtubeid == "") {
                var bg_already = "";
                $('<img/>').attr('src', backgroundurl).load(function() {
                    $(this).remove();
                    el.css('background-image', "url('" + backgroundurl + "')");
                    el.css("opacity", "1");
                    var bg_already = "yes"
                });
                if (bg_already != "yes") {
                    el.css('background-image', '');
                    el.css("opacity", "0");
                    el.css("transition", "opacity 25ms")
                }
            }
            var coverarrow = $("#rec" + id).find(".t-cover__arrow-wrapper");
            if (coverarrow.length > 0) {
                coverarrow.click(function() {
                    var recheight = $("#rec" + id).height();
                    if (recheight > 0) {
                        $('html, body').animate({
                            scrollTop: $("#rec" + id).offset().top + recheight
                        }, 500)
                    }
                })
            }
        })
    }
    function cover_fixcontentheight(id) {
        var el = $("#rec" + id);
        var hcover = el.find(".t-cover").height();
        var hcontent = el.find("div[data-hook-content]").outerHeight();
        if (hcontent > 300 && hcover < (hcontent + 40)) {
            var hcontent = hcontent + 120;
            if (hcontent > 1000) {
                hcontent += 100
            }
            console.log('auto correct cover height: ' + hcontent);
            el.find(".t-cover").height(hcontent);
            el.find(".t-cover__filter").height(hcontent);
            el.find(".t-cover__carrier").height(hcontent);
            el.find(".t-cover__wrapper").height(hcontent);
            if ($isMobile == !1) {
                setTimeout(function() {
                    var divvideo = el.find(".t-cover__carrier");
                    if (divvideo.find('iframe').length > 0) {
                        console.log('correct video from cover_fixcontentheight');
                        setWidthHeightYoutubeVideo(divvideo, hcontent + 'px')
                    }
                    if (divvideo.find('video').length > 0) {
                        console.log('correct html5video from cover_fixcontentheight')
                    }
                }, 2000)
            }
            if (typeof window.t_lazyload_updateResize_elem === "function") {
                try {
                    window.t_lazyload_updateResize_elem(el.find('.t-cover__carrier'))
                } catch (e) {
                    console.log('error:' + e)
                }
            } else {}
        }
    }
    $(document).ready(function() {
        $(".t-cover__carrier").each(function() {
            var id = $(this).attr('data-content-cover-id');
            if (id > 0) {
                cover_init(id)
            }
        })
    });
    function processSrc(src, nocover, nomute) {
        if (src.indexOf('../https@www.youtube.com/embed') == -1) {
            src = "../https@www.youtube.com/embed" + (src[0] == '/' ? src : './' + src)
        }
        var extractVideoId = function(src) {
            var parts = src.split('/')
              , neededPart = null;
            for (var i = 0, l = parts.length; i < l; i++) {
                if (parts[i] == "embed") {
                    neededPart = parts[i + 1]
                }
            }
            return neededPart
        }
        var currentLocation = location.protocol + '//' + location.host;
        if (nocover != "yes") {
            src = (src[src.length - 1] == '/' ? src : src) + '?autoplay=1&loop=1&enablejsapi=1&&playerapiid=featuredytplayer&controls=0&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&origin=' + currentLocation + '&playlist=' + extractVideoId(src)
        } else {
            src = (src[src.length - 1] == '/' ? src : src) + '?autoplay=0&loop=0&enablejsapi=1&&playerapiid=featuredytplayer&controls=1&modestbranding=1&rel=0&showinfo=0&color=black&iv_load_policy=3&theme=dark&wmode=transparent&origin=' + currentLocation
        }
        if (nomute !== "yes") {
            src += "&mute=1"
        }
        return src
    }
    function onYouTubePlayerReady_do(div, player, nomute) {
        var timer;
        var wnd = $(window);
        var frame = $(div);
        var timer_count = 0;
        wnd.scroll(function() {
            if (timer) {
                window.clearTimeout(timer);
                if (timer_count >= 15) {
                    timer_player_do(frame, wnd, player, nomute);
                    timer_count = 0
                }
                timer_count++
            }
            timer = window.setTimeout(function() {
                timer_player_do(frame, wnd, player, nomute);
                timer_count = 0
            }, 100)
        });
        wnd.scroll()
    }
    function timer_player_do(frame, wnd, player, nomute) {
        var a, b, c, d, s;
        a = frame.offset().top;
        b = frame.height();
        c = wnd.scrollTop();
        d = wnd.height();
        s = player.getPlayerState();
        if (((c + d) > a) && (c <= (a + b))) {
            if (s !== 1) {
                player.playVideo()
            }
            if (nomute == "yes") {
                if (c > a + b - 100) {
                    player.setVolume(30)
                } else {
                    if (c > a + b - 200) {
                        player.setVolume(70)
                    } else {
                        if (c + d < a + 200) {
                            player.setVolume(30)
                        } else {
                            player.setVolume(100)
                        }
                    }
                }
            } else {}
        } else {
            if ((c + d) < a && (c + d) > (a - 500)) {
                if (s !== 2) {
                    player.playVideo();
                    player.pauseVideo()
                }
            } else {
                if (c > (a + b) && c < (a + b + 500)) {
                    if (s !== 2) {
                        player.pauseVideo()
                    }
                } else {
                    if (s !== 2) {
                        player.pauseVideo()
                    }
                }
            }
        }
    }
    var def = $.Deferred();
    window.processYoutubeVideo = function(div, height) {
        load_youtube_api();
        var defFunc = function() {
            var el = $(div);
            var src = el.attr('data-content-video-url-youtube');
            var nomute = el.attr('data-content-video-nomute');
            var noloop = el.attr('data-content-video-noloop');
            var nocover = el.attr('data-content-video-nocover');
            var iframe = document.createElement('iframe');
            iframe.src = processSrc(src, nocover, nomute);
            iframe.frameBorder = 0;
            iframe.allow = 'autoplay';
            var playtimer;
            div.appendChild(iframe);
            if ($isMobile == !1) {
                var player = new YT.Player(iframe,{
                    events: {
                        'onReady': function(e) {
                            onYouTubePlayerReady_do(div, e.target, nomute);
                            if (e.target.setVolume && nomute != "yes") {
                                e.target.setVolume(0)
                            }
                            e.target.setLoop(!0)
                        },
                        'onStateChange': function(e) {
                            if (e.target.setVolume && nomute != "yes") {
                                e.target.setVolume(0)
                            }
                            if (e.data === -1) {
                                var sp = window.fix_scrolltop_beforestop_youtube;
                                if (sp >= 0) {
                                    $('html, body').scrollTop(sp);
                                    delete window.fix_scrolltop_beforestop_youtube
                                }
                            }
                            if (e.data === YT.PlayerState.PLAYING) {
                                playtimer = window.setInterval(function() {
                                    var a = e.target.getCurrentTime();
                                    var b = e.target.getDuration();
                                    if (a + 1 > b && b !== 0) {
                                        e.target.seekTo(0);
                                        if (noloop === "yes") {
                                            e.target.stopVideo();
                                            e.target.clearVideo()
                                        }
                                    }
                                }, 1000)
                            } else {
                                window.clearTimeout(playtimer)
                            }
                        }
                    }
                })
            }
            setWidthHeightYoutubeVideo(el, height)
        }
        def.then(defFunc)
    }
    function load_youtube_api() {
        if (window.loadytapi_flag !== 'yes') {
            window.loadytapi_flag = 'yes';
            var tag = document.createElement('script');
            tag.src = "../https@www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        }
    }
    window.onYouTubeIframeAPIReady = function() {
        def.resolve()
    }
    function setWidthHeightYoutubeVideo(el, height) {
        console.log('setWidthHeightYoutubeVideo:' + height);
        var iframe = el.find('iframe');
        var nocover = el.attr('data-content-video-nocover');
        var noadcut = el.attr('data-content-video-noadcut-youtube');
        var customratio = el.attr('data-content-video-ratio');
        var video_ratio = 0.5625;
        if (customratio > 0)
            video_ratio = parseFloat(customratio) * 1;
        if (nocover != "yes") {
            if (!height) {
                height = "100vh"
            }
            if (height.indexOf('vh') > -1) {
                var wh = window.innerHeight;
                if (!wh) {
                    wh = $(window).height()
                }
                var div_height = Math.floor((wh * (parseInt(height) / 100)))
            } else {
                var div_height = parseInt(height)
            }
            var div_width = Math.floor(parseInt(window.innerWidth));
            if (!div_width) {
                div_width = $(window).width()
            }
            var video_width = div_width;
            var video_height = video_width * video_ratio;
            var vw2 = video_width;
            var vh2 = video_height;
            var vh3 = video_height;
            var delta_coef = 1;
            if (noadcut == 'yes') {} else {
                vh2 = vh2 + 110 + 110;
                vh3 = video_height - 220
            }
            if ((vh3) < div_height) {
                if (video_height < div_height) {
                    var delta_coef = (div_height / video_height) + 0.02
                } else {
                    var delta_coef = (video_height / div_height) + 0.02
                }
            }
            var zoom_video_width = Math.floor(vw2 * delta_coef);
            var zoom_video_height = Math.floor(vh2 * delta_coef);
            var heightDelta = zoom_video_height - div_height;
            var widthDelta = zoom_video_width - div_width;
            iframe.height(zoom_video_height + 'px');
            iframe.width(zoom_video_width + 'px');
            if (heightDelta > 0) {
                iframe.css('margin-top', -Math.floor(heightDelta / 2) + 'px')
            }
            if (widthDelta > 0) {
                iframe.css('margin-left', -Math.floor(widthDelta / 2) + 'px')
            }
        } else {
            var video_height;
            if (!height) {
                video_height = Math.floor(el.width() * video_ratio)
            }
            if (height && height.indexOf('vh') > -1) {
                video_height = Math.floor((window.innerHeight * (parseInt(height) / 100)))
            } else {
                if (height) {
                    video_height = parseInt(height)
                }
            }
            iframe.css('width', '100%');
            iframe.height(video_height + 'px')
        }
    }
}
)(jQuery);
(function($) {
    function Observer() {
        this.callbacks = {}
    }
    Observer.prototype.defaultConfig = {
        single: !1,
        context: null
    };
    Observer.prototype.addEventListener = function(name, callback, config) {
        evtCallbacks = this._getEventCallbacks(name);
        if (!evtCallbacks) {
            evtCallbacks = this.callbacks[name] = []
        }
        evtCallbacks.push({
            callback: callback,
            config: (typeof config == "object" ? config : this.defaultConfig)
        })
    }
    Observer.prototype._getEventCallbacks = function(name) {
        return this.callbacks[name]
    }
    Observer.prototype.removeEventListener = function(name, callback) {
        var cbs = this._getEventCallbacks(name);
        if (!cbs) {
            return !1
        }
        for (var i = 0, l = cbs.length, cbObj; i < l; i++) {
            cbObj = cbs[i];
            if (callback === cbObj.callback) {
                cbs.splice(i, 1);
                return !0
            }
        }
        return !1
    }
    Observer.prototype.emitEvent = function(name, data) {
        var cbs = [];
        extend(cbs, this._getEventCallbacks(name));
        for (var i = 0, l = cbs.length, cbObj, cb, config; i < l; i++) {
            cbObj = cbs[i];
            cb = cbObj.callback;
            config = cbObj.config;
            if (config.context) {
                cb.call(config.context, data)
            } else {
                cb(data)
            }
            if (config.single) {
                this.removeEventListener(name, cb)
            }
        }
    }
    window.observer = new Observer()
}
)(jQuery);
(function($) {
    $(document).ready(function() {
        if ($isMobile == !1 && $('#allrecords').attr('data-blocks-animationoff') !== 'yes' && window.isSearchBot == !1) {
            $(".r").each(function(i) {
                if ($(this).attr('style') && $(this).attr('style').indexOf('background-color') !== -1) {
                    $(this).attr('data-animationappear', 'off')
                }
            });
            var tiles = $(".r").not('[data-animationappear=off], [data-screen-min], [data-screen-max]')
              , wnd = $(window);
            tiles.each(function(i) {
                a = $(this).offset().top;
                b = wnd.scrollTop() + wnd.height() + 300;
                if (a > 1000 && a > b) {
                    $(this).addClass('r_hidden')
                } else {
                    $(this).addClass('r_showed')
                }
                $(this).addClass('r_anim')
            });
            function blocksfade() {
                if (tiles.length) {
                    for (var i = tiles.length - 1, tile, a, b; i >= 0; i--) {
                        tile = $(tiles[i]);
                        a = tile.offset().top;
                        if (tile.outerHeight() <= 100) {
                            b = wnd.scrollTop() + wnd.height()
                        } else {
                            b = wnd.scrollTop() + wnd.height() - 100
                        }
                        if (a < b) {
                            tile.removeClass('r_hidden');
                            tile.addClass('r_showed');
                            tiles.splice(i, 1)
                        }
                    }
                }
            }
            wnd.bind('scroll', t_throttle(blocksfade, 200));
            blocksfade()
        }
        if ($("body").height() + 70 < $(window).height()) {
            $(".t-tildalabel").css("display", "none")
        }
    })
}
)(jQuery);
(function($) {
    function setWindowVars() {
        var wnd = $(window);
        window.winWidth = wnd.width();
        window.winHeight = wnd.height()
    }
    function blocksdisplay() {
        var window_width = $(window).width();
        var recs = $('div.r[data-screen-max], div.r[data-screen-min]');
        var max, min;
        var disp;
        recs.each(function(i) {
            disp = $(this).css("display");
            max = $(this).attr("data-screen-max");
            if (max === undefined) {
                max = 10000
            }
            max = parseInt(max);
            min = $(this).attr("data-screen-min");
            if (min === undefined) {
                min = 0
            }
            min = parseInt(min);
            if (min <= max) {
                if (window_width <= max && window_width > min) {
                    if (disp != "block") {
                        $(this).css("display", "block")
                    }
                } else {
                    if (disp != "none") {
                        $(this).css("display", "none")
                    }
                }
            }
        })
    }
    $(document).ready(function() {
        setWindowVars();
        blocksdisplay();
        $(window).bind('resize', t_throttle(setWindowVars, 200));
        $(window).bind('resize', t_throttle(blocksdisplay, 200))
    })
}
)(jQuery);
(function($) {
    function setWidthHeightHTMLVideo(vel, height_1) {
        var el = vel.closest('.t-cover__carrier');
        var height = height_1 + '';
        console.log('setWidthHeightHTMLVideo:' + height);
        var iframe = el.find('video');
        var nocover = el.attr('data-content-video-nocover');
        var customratio = el.attr('data-content-video-ratio');
        var video_ratio = 0.5625;
        if (customratio > 0)
            video_ratio = parseFloat(customratio) * 1;
        if (nocover != "yes") {
            if (!height) {
                height = "100vh"
            }
            if (height.indexOf('vh') > -1) {
                var wh = window.innerHeight;
                if (!wh) {
                    wh = $(window).height()
                }
                var div_height = Math.floor((wh * (parseInt(height) / 100)))
            } else {
                var div_height = parseInt(height)
            }
            var div_width = Math.floor(parseInt(window.innerWidth));
            if (!div_width) {
                div_width = $(window).width()
            }
            var video_width = div_width;
            var video_height = video_width * video_ratio;
            var vw2 = video_width;
            var vh2 = video_height;
            var vh3 = video_height;
            var delta_coef = 1;
            if ((vh3) < div_height) {
                if (video_height < div_height) {
                    var delta_coef = (div_height / video_height) + 0.02
                } else {
                    var delta_coef = (video_height / div_height) + 0.02
                }
            }
            var zoom_video_width = Math.floor(vw2 * delta_coef);
            var zoom_video_height = Math.floor(vh2 * delta_coef);
            var heightDelta = zoom_video_height - div_height;
            var widthDelta = zoom_video_width - div_width;
            iframe.height(zoom_video_height + 'px');
            iframe.width(zoom_video_width + 'px');
            if (heightDelta > 0) {
                iframe.css('margin-top', -Math.floor(heightDelta / 2) + 'px')
            }
            if (widthDelta > 0) {
                iframe.css('margin-left', -Math.floor(widthDelta / 2) + 'px')
            }
        } else {
            var video_height;
            if (!height) {
                video_height = Math.floor(el.width() * video_ratio)
            }
            if (height && height.indexOf('vh') > -1) {
                video_height = Math.floor((window.innerHeight * (parseInt(height) / 100)))
            } else {
                if (height) {
                    video_height = parseInt(height)
                }
            }
            iframe.css('width', '100%');
            iframe.height(video_height + 'px')
        }
    }
    $.fn.videoBG = function(selector, options) {
        var options = {};
        if (typeof selector == "object") {
            options = $.extend({}, $.fn.videoBG.defaults, selector)
        } else {
            if (!selector) {
                options = $.fn.videoBG.defaults
            } else {
                return $(selector).videoBG(options)
            }
        }
        var container = $(this);
        if (!container.length) {
            return
        }
        if (container.css('position') == 'static' || !container.css('position')) {
            container.css('position', 'relative')
        }
        if (options.width == 0) {
            options.width = container.width()
        }
        if (options.height == 0) {
            options.height = container.height()
        }
        if (options.textReplacement) {
            options.scale = !0;
            container.width(options.width).height(options.height).css('text-indent', '-9999px')
        } else {}
        var video = $.fn.videoBG.video(options);
        if (options.scale) {
            video.height(options.height).width(options.width)
        }
        container.append(video);
        if (typeof container.attr('data-content-video-nomute') === 'undefined') {
            container.find('video').prop('muted', !0)
        }
        setWidthHeightHTMLVideo(video, options.height);
        return video.find("video")[0]
    }
    $.fn.videoBG.setFullscreen = function($el) {
        var windowWidth = $(window).width()
          , windowHeight = $(window).height();
        $el.css('min-height', 0).css('min-width', 0);
        $el.parent().width(windowWidth).height(windowHeight);
        if (windowWidth / windowHeight > $el.aspectRatio) {
            $el.width(windowWidth).height('auto');
            var height = $el.height();
            var shift = (height - windowHeight) / 2;
            if (shift < 0) {
                shift = 0
            }
            $el.css("top", -shift)
        } else {
            $el.width('auto').height(windowHeight);
            var width = $el.width();
            var shift = (width - windowWidth) / 2;
            if (shift < 0) {
                shift = 0
            }
            $el.css("left", -shift);
            if (shift === 0) {
                var t = setTimeout(function() {
                    $.fn.videoBG.setFullscreen($el)
                }, 500)
            }
        }
        $('body > .videoBG_wrapper').width(windowWidth).height(windowHeight)
    }
    $.fn.videoBG.video = function(options) {
        var $div = $('<div/>');
        $div.addClass('videoBG').css('position', options.position).css('z-index', options.zIndex).css('top', 0).css('left', 0).css('height', options.height).css('width', options.width).css('opacity', options.opacity).css('overflow', 'hidden');
        var $video = $('<video/>');
        $video.css('position', 'relative').css('z-index', options.zIndex).attr('poster', options.poster).css('top', 0).css('left', 0).css('min-width', '100%').css('min-height', '100%');
        $video.prop('autoplay', options.autoplay);
        $video.prop('loop', options.loop);
        $video.prop('muted', options.muted);
        if (options.volume > 0) {
            $video.prop("volume", options.volume)
        } else {
            $video.prop("volume", 0)
        }
        if (options.fullscreen) {
            $video.bind('canplay', function() {
                $video.aspectRatio = $video.width() / $video.height();
                $.fn.videoBG.setFullscreen($video)
            })
            var resizeTimeout;
            $(window).resize(function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function() {
                    $.fn.videoBG.setFullscreen($video)
                }, 100)
            });
            $.fn.videoBG.setFullscreen($video)
        }
        var v = $video[0];
        if (options.loop) {
            loops_left = options.loop;
            $video.bind('ended', function() {
                if (loops_left) {
                    v.play()
                }
                if (loops_left !== !0) {
                    loops_left--
                }
            })
        }
        $video.bind('canplay', function() {
            if (options.autoplay) {
                v.play()
            }
        });
        if ($.fn.videoBG.supportsVideo()) {
            if ($.fn.videoBG.supportType('webm') && options.webm != "") {
                $video.attr('src', options.webm)
            } else {
                if ($.fn.videoBG.supportType('mp4') && options.mp4 != "") {
                    $video.attr('src', options.mp4)
                } else {
                    $video.attr('src', options.ogv)
                }
            }
        }
        var $img = $('<img/>');
        $img.attr('src', options.poster).css('position', 'absolute').css('z-index', options.zIndex).css('top', 0).css('left', 0).css('min-width', '100%').css('min-height', '100%');
        if ($.fn.videoBG.supportsVideo()) {
            $div.html($video)
        } else {
            $div.html($img)
        }
        if (options.textReplacement) {
            $div.css('min-height', 1).css('min-width', 1);
            $video.css('min-height', 1).css('min-width', 1);
            $img.css('min-height', 1).css('min-width', 1);
            $div.height(options.height).width(options.width);
            $video.height(options.height).width(options.width);
            $img.height(options.height).width(options.width)
        }
        if ($.fn.videoBG.supportsVideo()) {}
        return $div
    }
    $.fn.videoBG.supportsVideo = function() {
        return (document.createElement('video').canPlayType)
    }
    $.fn.videoBG.supportType = function(str) {
        if (!$.fn.videoBG.supportsVideo()) {
            return !1
        }
        var v = document.createElement('video');
        switch (str) {
        case 'webm':
            return (v.canPlayType('video/webm; codecs="vp8, vorbis"'));
            break;
        case 'mp4':
            return (v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
            break;
        case 'ogv':
            return (v.canPlayType('video/ogg; codecs="theora, vorbis"'));
            break
        }
        return !1
    }
    $.fn.videoBG.wrapper = function() {
        var $wrap = $('<div/>');
        $wrap.addClass('videoBG_wrapper').css('position', 'absolute').css('top', 0).css('left', 0);
        return $wrap
    }
    $.fn.videoBG.defaults = {
        mp4: '',
        ogv: '',
        webm: '',
        poster: '',
        autoplay: !0,
        loop: !0,
        scale: !1,
        position: "absolute",
        opacity: 1,
        textReplacement: !1,
        zIndex: 0,
        width: 0,
        height: 0,
        fullscreen: !1,
        imgFallback: !0
    }
}
)(jQuery);
(function($) {
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() {
        windowHeight = $window.height()
    });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        var isWebkitTransform = (typeof document.body.style['-webkit-transform'] == "undefined" ? !1 : !0);
        if (isWebkitTransform) {
            $this.css('position', 'relative')
        }
        window.correctFirstTop4Parallax = function() {
            $this.each(function() {
                firstTop = $this.offset().top
            })
        }
        ;
        window.correctFirstTop4Parallax();
        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(!0)
            }
        } else {
            getHeight = function(jqo) {
                return jqo.height()
            }
        }
        if (arguments.length < 1 || xpos === null) {
            xpos = "50%"
        }
        if (arguments.length < 2 || speedFactor === null) {
            speedFactor = 0.1
        }
        if (arguments.length < 3 || outerHeight === null) {
            outerHeight = !0
        }
        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                var rect = this.getBoundingClientRect();
                if (top + height < pos || top > pos + windowHeight) {
                    return
                }
                var backgroundVerticalShift = -1 * Math.round(rect.top * speedFactor);
                if (isWebkitTransform) {
                    this.style['-webkit-transform'] = "translateY(" + backgroundVerticalShift + "px)"
                } else {
                    this.style.top = backgroundVerticalShift + "px"
                }
            })
        }
        $(window).resize(window.correctFirstTop4Parallax);
        $window.bind('scroll', update).resize(update);
        if (document.readyState !== "complete") {
            window.addEventListener('load', function() {
                update()
            })
        } else {
            update()
        }
    }
}
)(jQuery);
function t_throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last, deferTimer;
    return function() {
        var context = scope || this;
        var now = +new Date
          , args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now;
            fn.apply(context, args)
        }
    }
}
window.Tilda = window.Tilda || {};
(function($) {
    Tilda.sendEcommerceEvent = function(type, productsArr) {
        if (typeof productsArr == 'undefined' || productsArr.length == 0) {
            return !1
        }
        if (typeof type == 'undefined' || (type != 'add' && type != 'remove' && type != 'purchase' && type != 'detail')) {
            return !1
        }
        var i, virtPage, virtTitle = '', virtPrice = 0, virtProducts = [], variant_str, productObj, recid = '', uid = '', lid = '';
        for (i = 0; i < productsArr.length; i++) {
            productObj = productsArr[i];
            if (virtTitle > '') {
                virtTitle += ', '
            }
            virtTitle += productObj.name;
            virtPrice += productObj.price;
            variant_str = '';
            if (typeof productObj.options != 'undefined' && productObj.options.length > 0) {
                $.each(productObj.options, function(o_index, option) {
                    variant_str += '' + option.option + ': ' + option.variant + '; '
                })
            }
            var virtProduct = {
                "name": productObj.name,
                "price": productObj.price,
                "variant": variant_str,
                "quantity": 1
            };
            if (productObj.uid && productObj.uid > 0) {
                uid = productObj.uid;
                virtProduct.uid = productObj.uid
            }
            if (productObj.recid && productObj.recid > 0) {
                recid = productObj.recid;
                virtProduct.recid = productObj.recid
            }
            if (productObj.lid && productObj.lid > 0) {
                lid = productObj.lid;
                virtProduct.lid = productObj.lid
            }
            if (productObj.sku && productObj.sku > 0) {
                virtProduct.sku = productObj.sku
            }
            virtProducts[virtProducts.length] = virtProduct
        }
        if (type == 'add' || type == 'remove') {
            virtPage = "tilda/cart/" + type + "/";
            if (recid > 0) {
                virtPage += '' + recid
            }
            if (uid > 0) {
                virtPage += '-u' + uid
            } else {
                if (lid > 0)
                    virtPage += "-" + lid
            }
        }
        if (type == 'detail') {
            virtPage = "tilda/product/detail/default.htm";
            if (uid > 0) {
                virtPage += '' + uid + 'default.htm'
            } else {
                if (recid > 0) {
                    virtPage += 'r' + recid
                }
                if (lid > 0)
                    virtPage += "-l" + lid
            }
        }
        if (type == 'purchase') {
            virtPage = "tilda/rec" + recid + "payment/default.htm"
        }
        var virtProduct = {
            "ecommerce": {}
        }
        virtProduct.ecommerce[type] = {
            products: virtProducts
        };
        Tilda.sendEventToStatistics(virtPage, virtTitle, virtProduct, virtPrice)
    }
    ;
    Tilda.sendEventToStatistics = function(virtPage, virtTitle, referer, price) {
        var isVirtPage = virtPage.substring(0, 1) == '/' ? !0 : !1;
        var arProducts = []
          , p = 0;
        var noFbSendEvent = $('#allrecords').data('fb-event');
        noFbSendEvent = (noFbSendEvent && noFbSendEvent == 'nosend' ? !0 : !1);
        var noVkSendEvent = $('#allrecords').data('vk-event');
        noVkSendEvent = (noVkSendEvent && noVkSendEvent == 'nosend' ? !0 : !1);
        var currencyCode = '';
        currencyCode = $('#allrecords').data('tilda-currency') || $('.t706').data('project-currency-code') || 'RUB';
        if (!referer) {
            referer = window.location.href
        }
        price = (price ? parseFloat(price) : 0);
        if (price > 0) {
            if (!window.dataLayer) {
                window.dataLayer = []
            }
            if (virtPage.indexOf('/tilda/') != -1 && virtPage.indexOf('/payment/') != -1 && window.tildaForm && window.tildaForm.orderIdForStat > '') {
                referer = {
                    ecommerce: {
                        purchase: {
                            actionField: {
                                id: window.tildaForm.orderIdForStat,
                                revenue: window.tildaForm.amountForStat
                            },
                            products: window.tildaForm.arProductsForStat
                        }
                    }
                };
                if (window.tildaForm.tildapayment && window.tildaForm.tildapayment.promocode) {
                    referer.ecommerce.purchase.actionField.coupon = window.tildaForm.tildapayment.promocode
                }
                referer.event = 'purchase'
            } else {
                if (referer && referer.ecommerce) {
                    if (referer.ecommerce.add && referer.ecommerce.add.products) {
                        arProducts = referer.ecommerce.add.products
                    } else {
                        if (referer.ecommerce.remove && referer.ecommerce.remove.products) {
                            arProducts = referer.ecommerce.remove.products
                        } else {
                            if (referer.ecommerce.detail && referer.ecommerce.detail.products) {
                                arProducts = referer.ecommerce.detail.products
                            }
                        }
                    }
                    if (arProducts && arProducts.length > 0) {
                        for (p = 0; p < arProducts.length; p++) {
                            if (!arProducts[p].id) {
                                if (arProducts[p].sku) {
                                    arProducts[p].id = arProducts[p].sku
                                } else {
                                    if (arProducts[p].uid) {
                                        arProducts[p].id = arProducts[p].uid
                                    } else {
                                        if (arProducts[p].recid && arProducts[p].lid) {
                                            arProducts[p].id = '' + arProducts[p].recid + '_' + arProducts[p].lid
                                        }
                                    }
                                }
                            }
                        }
                        if (referer.ecommerce.add && referer.ecommerce.add.products) {
                            referer.ecommerce.add.products = arProducts;
                            referer.event = 'addToCart'
                        } else {
                            if (referer.ecommerce.remove && referer.ecommerce.remove.products) {
                                referer.ecommerce.remove.products = arProducts;
                                referer.event = 'removeFromCart'
                            } else {
                                if (referer.ecommerce.detail && referer.ecommerce.detail.products) {
                                    referer.ecommerce.detail.products = arProducts;
                                    referer.event = 'viewProduct'
                                } else {
                                    if (isVirtPage) {
                                        referer.event = 'pageView';
                                        referer.eventAction = virtPage
                                    } else {
                                        referer.event = virtPage
                                    }
                                    referer.title = virtTitle;
                                    referer.value = price
                                }
                            }
                        }
                    }
                }
            }
        }
        if (window.dataLayer != undefined) {
            if (isVirtPage) {
                if (price > 0) {
                    if (referer && referer.ecommerce) {
                        window.dataLayer.push(referer)
                    } else {
                        window.dataLayer.push({
                            'event': 'pageView',
                            'eventAction': virtPage,
                            'title': virtTitle,
                            'value': price,
                            'product': referer
                        })
                    }
                } else {
                    window.dataLayer.push({
                        'event': 'pageView',
                        'eventAction': virtPage,
                        'title': virtTitle,
                        'referer': referer
                    })
                }
            } else {
                if (referer && referer.ecommerce) {
                    window.dataLayer.push(referer)
                } else {
                    window.dataLayer.push({
                        'event': virtPage,
                        'eventAction': virtTitle,
                        'value': price,
                        'referer': referer
                    })
                }
            }
        }
        try {
            if (window.gtagTrackerID && window.mainTracker == 'gtag') {
                if (isVirtPage) {
                    if (referer && referer.event) {
                        if (referer.event == 'purchase') {
                            gtag('event', 'purchase', {
                                transaction_id: referer.ecommerce.purchase.actionField.id,
                                value: parseFloat(price).toFixed(2),
                                currency: currencyCode,
                                items: referer.ecommerce.purchase.products
                            })
                        } else {
                            if (referer.event == 'addToCart' && referer.ecommerce.add) {
                                gtag('event', 'add_to_cart', {
                                    items: referer.ecommerce.add.products
                                })
                            } else {
                                if (referer.event == 'removeFromCart' && referer.ecommerce.remove) {
                                    gtag('event', 'remove_from_cart', {
                                        items: referer.ecommerce.remove.products
                                    })
                                } else {
                                    if (referer.event == 'viewProduct' && referer.ecommerce.detail) {
                                        gtag('event', 'view_item', {
                                            items: referer.ecommerce.detail.products
                                        })
                                    }
                                }
                            }
                        }
                    } else {
                        gtag('config', window.gtagTrackerID, {
                            page_title: virtTitle,
                            page_path: virtPage
                        })
                    }
                } else {
                    gtag('event', virtPage, {
                        event_category: 'tilda',
                        event_label: virtTitle,
                        value: price
                    })
                }
            }
        } catch (e) {}
        if (window.ga && window.mainTracker != 'tilda' && window.mainTracker != 'gtag') {
            if (isVirtPage) {
                if (referer && referer.event) {
                    try {
                        if (!window.Tilda.isLoadGAEcommerce) {
                            window.Tilda.isLoadGAEcommerce = !0;
                            ga('require', 'ec')
                        }
                        ga('set', 'currencyCode', currencyCode);
                        if (referer.event == 'purchase') {
                            var product, i, iProduct = referer.ecommerce.purchase.products.length;
                            for (i = 0; i < iProduct; i++) {
                                product = referer.ecommerce.purchase.products[i];
                                ga('ec:addProduct', {
                                    id: product.id || i,
                                    name: product.name,
                                    price: parseFloat(product.price).toFixed(2),
                                    quantity: product.quantity
                                })
                            }
                            ga('ec:setAction', 'purchase', {
                                id: referer.ecommerce.purchase.actionField.id,
                                revenue: parseFloat(price).toFixed(2)
                            })
                        } else {
                            if (referer.event == 'addToCart' && referer.ecommerce.add) {
                                var product, i, iProduct = referer.ecommerce.add.products.length;
                                for (i = 0; i < iProduct; i++) {
                                    product = referer.ecommerce.add.products[i];
                                    ga('ec:addProduct', {
                                        id: product.id || i,
                                        name: product.name,
                                        price: parseFloat(product.price).toFixed(2),
                                        quantity: product.quantity
                                    })
                                }
                                ga('ec:setAction', 'add')
                            } else {
                                if (referer.event == 'removeFromCart' && referer.ecommerce.remove) {
                                    var product, i, iProduct = referer.ecommerce.remove.products.length;
                                    for (i = 0; i < iProduct; i++) {
                                        product = referer.ecommerce.remove.products[i];
                                        ga('ec:addProduct', {
                                            id: product.id || i,
                                            name: product.name,
                                            price: parseFloat(product.price).toFixed(2),
                                            quantity: product.quantity
                                        })
                                    }
                                    ga('ec:setAction', 'remove')
                                } else {
                                    if (referer.event == 'viewProduct' && referer.ecommerce.detail) {
                                        var product, i, iProduct = referer.ecommerce.detail.products.length;
                                        for (i = 0; i < iProduct; i++) {
                                            product = referer.ecommerce.detail.products[i];
                                            ga('ec:addProduct', {
                                                id: product.id || i,
                                                name: product.name,
                                                price: parseFloat(product.price).toFixed(2),
                                                quantity: product.quantity
                                            })
                                        }
                                        ga('ec:setAction', 'detail')
                                    }
                                }
                            }
                        }
                    } catch (e) {}
                    ga('send', {
                        'hitType': 'pageview',
                        'page': virtPage,
                        'title': virtTitle,
                        'params': referer
                    })
                } else {
                    ga('send', {
                        'hitType': 'pageview',
                        'page': virtPage,
                        'title': virtTitle
                    })
                }
            } else {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'tilda',
                    eventAction: virtPage,
                    eventLabel: virtTitle,
                    eventValue: price
                })
            }
        }
        if (window.mainMetrikaId && window.mainMetrikaId > 0 && typeof ym == 'function') {
            if (isVirtPage) {
                var mOpts = {
                    title: virtTitle
                };
                if (price > 0) {
                    mOpts.params = {
                        order_price: price
                    };
                    if (currencyCode) {
                        mOpts.params.currency = currencyCode
                    }
                    ym(window.mainMetrikaId, 'hit', virtPage, mOpts)
                } else {
                    ym(window.mainMetrikaId, 'hit', virtPage, mOpts)
                }
            } else {
                if (price > 0) {
                    mOpts = {
                        order_price: price,
                    };
                    if (currencyCode) {
                        mOpts.currency = currencyCode
                    }
                    ym(window.mainMetrikaId, 'reachGoal', virtPage, mOpts)
                } else {
                    ym(window.mainMetrikaId, 'reachGoal', virtPage)
                }
            }
        }
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            if (isVirtPage) {
                if (price > 0) {
                    window[window.mainMetrika].hit(virtPage, {
                        title: virtTitle,
                        order_price: price,
                        params: referer
                    })
                } else {
                    window[window.mainMetrika].hit(virtPage, {
                        title: virtTitle
                    })
                }
            } else {
                if (price > 0) {
                    window[window.mainMetrika].reachGoal(virtPage, {
                        title: virtTitle,
                        params: referer,
                        order_price: price
                    })
                } else {
                    window[window.mainMetrika].reachGoal(virtPage, {
                        title: virtTitle,
                        referer: referer
                    })
                }
            }
        }
        if (window.fbq != undefined && noFbSendEvent == !1) {
            try {
                if (isVirtPage) {
                    if (virtPage.indexOf('tilda/') != -1 && (virtPage.indexOf('/payment/') != -1 || virtPage.indexOf('/submitted/') != -1)) {
                        if (price > 0 && currencyCode) {
                            window.fbq('track', 'InitiateCheckout', {
                                content_name: virtTitle,
                                content_category: virtPage,
                                value: price,
                                currency: currencyCode
                            })
                        } else {
                            window.fbq('track', 'Lead', {
                                content_name: virtTitle,
                                content_category: virtPage
                            })
                        }
                    } else {
                        if (referer && referer.event && price > 0) {
                            if (referer.event == 'addToCart' && referer.ecommerce.add) {
                                var product, i, iProduct = referer.ecommerce.add.products.length;
                                var content_ids = [];
                                for (i = 0; i < iProduct; i++) {
                                    product = referer.ecommerce.add.products[i];
                                    content_ids.push((product.id || product.uid || product.name))
                                }
                                window.fbq('track', 'AddToCart', {
                                    content_ids: content_ids,
                                    content_type: 'product',
                                    value: price,
                                    currency: currencyCode
                                })
                            } else {
                                if (referer.event == 'viewProduct' && referer.ecommerce.detail) {
                                    var product, i, iProduct = referer.ecommerce.detail.products.length;
                                    var content_ids = [];
                                    for (i = 0; i < iProduct; i++) {
                                        product = referer.ecommerce.detail.products[i];
                                        content_ids.push((product.id || product.uid || product.name))
                                    }
                                    window.fbq('track', 'ViewContent', {
                                        content_ids: content_ids,
                                        content_type: 'product',
                                        value: price,
                                        currency: currencyCode
                                    })
                                } else {
                                    if (virtPage.indexOf('tilda/popup') != -1) {
                                        window.fbq('track', 'ViewContent', {
                                            content_name: virtTitle,
                                            content_category: virtPage
                                        })
                                    } else {
                                        window.fbq('track', 'ViewContent', {
                                            content_name: virtTitle,
                                            content_category: virtPage
                                        })
                                    }
                                }
                            }
                        } else {
                            if (virtPage.indexOf('tilda/popup') != -1) {
                                window.fbq('track', 'ViewContent', {
                                    content_name: virtTitle,
                                    content_category: virtPage
                                })
                            } else {
                                window.fbq('track', 'ViewContent', {
                                    content_name: virtTitle,
                                    content_category: virtPage
                                })
                            }
                        }
                    }
                } else {
                    window.fbq('track', virtPage, {
                        content_name: virtTitle,
                        value: price
                    })
                }
            } catch (e) {}
        }
        if (typeof window.VK != 'undefined' && typeof window.VK.Retargeting != 'undefined' && noVkSendEvent == !1) {
            try {
                if (isVirtPage) {
                    var priceListID = $('#allrecords').data('vk-price-list-id') ? parseInt($('#allrecords').data('vk-price-list-id')) : 0;
                    var eventName = '';
                    var eventParams = !1;
                    if (referer && referer.event) {
                        eventParams = {
                            products: [],
                            currency_code: '',
                            total_price: 0
                        };
                        if (referer.event == 'purchase' && referer.ecommerce.purchase) {
                            if (price > 0 && priceListID > 0) {
                                eventParams.currency_code = currencyCode;
                                var product, i, iProduct = referer.ecommerce.purchase.products.length;
                                var content_ids = [];
                                for (i = 0; i < iProduct; i++) {
                                    product = referer.ecommerce.purchase.products[i];
                                    eventParams.products.push({
                                        id: (product.id || product.uid || product.name),
                                        price: (product.price ? product.price : 0)
                                    });
                                    eventParams.total_price = price
                                }
                                eventName = 'init_checkout'
                            } else {
                                eventName = 't-purchase'
                            }
                        } else {
                            if (referer.event == 'addToCart' && referer.ecommerce.add) {
                                if (price > 0 && priceListID > 0) {
                                    eventParams.currency_code = currencyCode;
                                    var product, i, iProduct = referer.ecommerce.add.products.length;
                                    var content_ids = [];
                                    for (i = 0; i < iProduct; i++) {
                                        product = referer.ecommerce.add.products[i];
                                        eventParams.products.push({
                                            id: (product.id || product.uid || product.name),
                                            price: (product.price ? product.price : 0)
                                        });
                                        eventParams.total_price = price
                                    }
                                    eventName = 'add_to_cart'
                                } else {
                                    eventName = 't-add-to-cart';
                                    if (referer.ecommerce.add[0] && referer.ecommerce.add[0].uid) {
                                        eventName += '-' + referer.ecommerce.add[0].uid
                                    }
                                }
                            } else {
                                if (referer.event == 'viewProduct' && referer.ecommerce.detail) {
                                    if (price > 0 && priceListID > 0) {
                                        eventParams.currency_code = currencyCode;
                                        var product, i, iProduct = referer.ecommerce.detail.products.length;
                                        var content_ids = [];
                                        for (i = 0; i < iProduct; i++) {
                                            product = referer.ecommerce.detail.products[i];
                                            eventParams.products.push({
                                                id: (product.id || product.uid || product.name),
                                                price: (product.price ? product.price : 0)
                                            });
                                            eventParams.total_price = price
                                        }
                                        eventName = 'view_product'
                                    } else {
                                        eventName = 't-view-product';
                                        if (referer.ecommerce.detail[0] && referer.ecommerce.detail[0].uid) {
                                            eventName += '-' + referer.ecommerce.detail[0].uid
                                        }
                                    }
                                } else {
                                    if (referer.event == 'removeFromCart' && referer.ecommerce.remmove) {
                                        if (price > 0 && priceListID > 0) {
                                            eventParams.currency_code = currencyCode;
                                            var product, i, iProduct = referer.ecommerce.remove.products.length;
                                            var content_ids = [];
                                            for (i = 0; i < iProduct; i++) {
                                                product = referer.ecommerce.remove.products[i];
                                                eventParams.products.push({
                                                    id: (product.id || product.uid || product.name),
                                                    price: (product.price ? product.price : 0)
                                                });
                                                eventParams.total_price = price
                                            }
                                            eventName = 'remove_from_cart'
                                        } else {
                                            eventName = 't-remove-product';
                                            if (referer.ecommerce.remove[0] && referer.ecommerce.remove[0].uid) {
                                                eventName += '-' + referer.ecommerce.remove[0].uid
                                            }
                                        }
                                    } else {
                                        eventName = referer.event
                                    }
                                }
                            }
                        }
                    } else {
                        if (virtPage.indexOf('tilda/') != -1 && virtPage.indexOf('/payment/') != -1) {
                            var tmp = virtPage.replace('tilda/', '');
                            tmp = tmp.replace('payment/default.htm', '');
                            eventName = 't-purchase-' + tmp
                        } else {
                            if (virtPage.indexOf('tilda/') != -1 && virtPage.indexOf('/submitted/') != -1) {
                                var tmp = virtPage.replace('tilda/', '');
                                tmp = tmp.replace('submitted/default.htm', '');
                                eventName = 't-lead-' + tmp
                            } else {
                                if (virtPage.indexOf('tilda/popup') != -1) {
                                    var tmp = virtPage.replace('tilda/', '');
                                    tmp = tmp.replace('default.htm', '-');
                                    eventName = 't-' + tmp
                                } else {
                                    if (virtPage.indexOf('tilda/click') != -1) {
                                        var tmp = virtPage.replace('tilda/', '');
                                        tmp = tmp.replace('default.htm', '-');
                                        eventName = 't-' + tmp
                                    } else {
                                        var tmp = virtPage.replace('default.htm', '-');
                                        eventName = 't-' + tmp
                                    }
                                }
                            }
                        }
                    }
                    if (priceListID > 0 && eventParams && eventParams.currecy_code) {
                        VK.Retargeting.Event('purchase');
                        VK.Retargeting.ProductEvent(priceListID, eventName, eventParams)
                    } else {
                        VK.Retargeting.Event(eventName)
                    }
                } else {
                    VK.Retargeting.Event(virtPage)
                }
            } catch (e) {}
        }
        if (window.mainMailruId > "0") {
            var _tmr = window._tmr || (window._tmr = []);
            if (isVirtPage) {
                if (price > 0) {
                    _tmr.push({
                        id: "" + window.mainMailruId,
                        type: "pageView",
                        url: virtPage,
                        value: price,
                        start: (new Date()).getTime()
                    })
                } else {
                    _tmr.push({
                        id: "" + window.mainMailruId,
                        type: "pageView",
                        url: virtPage,
                        start: (new Date()).getTime()
                    })
                }
            } else {
                if (price > 0) {
                    _tmr.push({
                        id: "" + window.mainMailruId,
                        type: "reachGoal",
                        goal: virtPage,
                        value: price
                    })
                } else {
                    _tmr.push({
                        id: "" + window.mainMailruId,
                        type: "reachGoal",
                        goal: virtPage
                    })
                }
            }
        }
        if (typeof window.tildastat == 'function') {
            if (isVirtPage) {
                if (virtPage.indexOf('payment') > 0 && virtPage.indexOf('tilda/form') > -1) {
                    virtPage = virtPage.replace('tilda/form', 'tilda/rec')
                }
                window.tildastat('pageview', {
                    page: virtPage
                })
            } else {
                window.tildastat('pageview', {
                    page: 'tilda/event/' + virtPage
                })
            }
        }
    }
    ;
    Tilda.saveUTM = function() {
        try {
            var TILDAPAGE_URL = window.location.href
              , TILDAPAGE_QUERY = ''
              , TILDAPAGE_UTM = '';
            if (TILDAPAGE_URL.toLowerCase().indexOf('utm_') !== -1) {
                TILDAPAGE_URL = TILDAPAGE_URL.toLowerCase();
                TILDAPAGE_QUERY = TILDAPAGE_URL.split('?');
                TILDAPAGE_QUERY = TILDAPAGE_QUERY[1];
                if (typeof (TILDAPAGE_QUERY) == 'string') {
                    var arPair, i, arParams = TILDAPAGE_QUERY.split('&');
                    for (i in arParams) {
                        arPair = arParams[i].split('=');
                        if (arPair[0].substring(0, 4) == 'utm_') {
                            TILDAPAGE_UTM = TILDAPAGE_UTM + arParams[i] + '|||'
                        }
                    }
                    if (TILDAPAGE_UTM.length > 0) {
                        var date = new Date()
                        date.setDate(date.getDate() + 30);
                        document.cookie = "TILDAUTM=" + encodeURIComponent(TILDAPAGE_UTM) + "; path=/; expires=" + date.toUTCString()
                    }
                }
            }
        } catch (err) {}
    }
    $(document).ready(function() {
        var myNav = navigator.userAgent.toLowerCase();
        var isIE = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : !1;
        if ((isIE == 8) || (isIE == 9)) {
            $(".t-btn").each(function() {
                var url = $(this).attr('href');
                if ($(this).find('table').length > 0 && url > '' && url.indexOf('#popup:') == -1 && url.indexOf('#price:') == -1) {
                    $(this).click(function(e) {
                        e.preventDefault();
                        var url = $(this).attr('href');
                        window.location.href = url
                    })
                }
            })
        }
        try {
            if ($('#allrecords').length == 1 && $('#allrecords').data('tilda-cookie') == 'no') {} else {
                Tilda.saveUTM()
            }
        } catch (e) {}
        $('.r').off('click', 'a.js-click-stat');
        $('.r').on('click', 'a.js-click-stat', function(e) {
            var virtPage = $(this).data('tilda-event-name');
            var virtTitle = $(this).text();
            var url = $(this).attr('href') || '';
            var target = $(this).attr('target');
            if (!virtPage) {
                virtPage = 'tilda/click/default.htm'.$(this).closest('.r').attr('id') + '/?url=' + url
            }
            Tilda.sendEventToStatistics(virtPage, virtTitle);
            if (url.substring(0, 4) == 'http') {
                window.setTimeout(function() {
                    var params = '', ii, item, html = '';
                    if (target == '_blank') {
                        if (url.indexOf('?') != -1) {
                            params = url.split('?');
                            url = params[0];
                            params = params[1];
                            if (params.indexOf('#') != -1) {
                                params = params.split('#');
                                url = url + '#' + params[1];
                                params = params[0]
                            }
                            params = params.split('&')
                        }
                        if ($('#tildaredirectform').length == 0) {
                            $('body').append('<form id="tildaredirectform" target="_blank" method="GET" action="' + url + '" style="display:none;"></form>')
                        } else {
                            $('#tildaredirectform').attr('method', 'GET').attr('action', url)
                        }
                        html = '';
                        if (params.length > 0) {
                            for (ii in params) {
                                item = (params[ii]).split('=');
                                if (item && item.length > 0) {
                                    html += '<input type="hidden" name="' + item[0] + '" value="' + (item[1] ? item[1] : '') + '">'
                                }
                            }
                        }
                        $('#tildaredirectform').html(html);
                        $('#tildaredirectform').submit()
                    } else {
                        window.location.href = url
                    }
                }, 300);
                e.preventDefault();
                return !1
            }
        });
        $('input.js-amount').each(function() {
            var price = $(this).val();
            price = price.replace(/,/g, '.');
            price = parseFloat(price.replace(/[^0-9\.]/g, ''));
            $(this).val(price)
        });
        Tilda.showFormError = function($form, error) {
            var $errBox = $form.find('.js-errorbox-all');
            if (!$errBox || $errBox.length == 0) {
                $form.prepend('<div class="js-errorbox-all"></div>');
                $errBox = $form.find('.js-errorbox-all')
            }
            var $allError = $errBox.find('.js-rule-error-all');
            if (!$allError || $allError.length == 0) {
                $errBox.append('<p class="js-rule-error-all"></p>');
                $allError = $errBox.find('.js-rule-error-all')
            }
            if ('string' == typeof error) {
                $allError.html(error)
            } else {
                if (error && error.responseText) {
                    $allError.html(error.responseText + '. Later, plaese try again.')
                } else {
                    if (error && error.statusText) {
                        $allError.html('Error - ' + error.statusText + '. Later, plaese try again.')
                    } else {
                        $allError.html('Unknown error. Later, plaese try again.')
                    }
                }
            }
            $allError.show();
            $errBox.show()
        }
        ;
        Tilda.robokassaPayment = function($form, btnformsubmit, price) {
            return $.ajax({
                type: "POST",
                url: "../https@forms.tildacdn.com/payment/robokassa/default.htm",
                data: $form.serialize(),
                dataType: "text",
                success: function(text) {
                    btnformsubmit.removeClass('t-btn_sending');
                    btnformsubmit.data('form-sending-status', '0');
                    btnformsubmit.data('submitform', '');
                    var recid = btnformsubmit.closest('.r').attr('id');
                    if (text.substring(0, 1) == '{') {
                        if (window.JSON && window.JSON.parse) {
                            json = window.JSON.parse(text)
                        } else {
                            json = $.parseJSON(text)
                        }
                        if (!json) {
                            Tilda.showFormError($form, !1);
                            return
                        }
                        if (json.error > '') {
                            Tilda.showFormError($form, json.error);
                            return
                        }
                    } else {
                        if (text.substring(0, 4) == 'http') {
                            Tilda.sendEventToStatistics('tilda/payment/' + recid + 'click/default.htm', 'Payment button: ' + btnformsubmit.val(), '', price);
                            var urlforpayment = text;
                            window.setTimeout(function() {
                                window.location.href = urlforpayment
                            }, 500)
                        } else {
                            Tilda.showFormError($form, text)
                        }
                    }
                },
                fail: function(data) {
                    btnformsubmit.removeClass('t-btn_sending');
                    btnformsubmit.data('form-sending-status', '0');
                    btnformsubmit.data('submitform', '');
                    var str = '';
                    Tilda.showFormError($form, data)
                },
                timeout: 1000 * 15
            })
        }
    })
}
)(jQuery)
