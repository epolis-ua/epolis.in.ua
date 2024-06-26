function t_menusub_init(u)
{
  $("#rec" + u + " .t-menusub").each(function ()
  {
    var t, e, n = $(this).attr("data-submenu-hook");
    void 0 !== n && "" != n && (t = "", e = !1, $("#rec" + u + " a.t-menu__link-item").each(function ()
    {
      $(this).attr("data-menu-submenu-hook") && (e = !0)
    }), (t = e ? $('a[data-menu-submenu-hook="' + n + '"]') : $('a[href="' + n + '"]')).addClass("t-menusub__target-link"), t.attr("data-tooltip-menu-id", u), t_menusub_add_arrow(u, t, n), t_menusub_set_up_menu(u, t, n), t_menusub_highlight())
  }), $(window).bind("resize", function ()
  {
    isMobile || $("#rec" + u + " .t-menusub").each(function ()
    {
      t_menusub_hide_submenu($(this).find(".t-menusub__menu"))
    })
  }), $(window).bind("orientationchange", function ()
  {
    isMobile && $("#rec" + u + " .t-menusub").each(function ()
    {
      t_menusub_hide_submenu($(this).find(".t-menusub__menu"))
    })
  })
}

function t_menusub_set_up_menu(t, e, n)
{
  var u = $("#rec" + t + ' .t-menusub[data-submenu-hook="' + n + '"] .t-menusub__menu');
  isMobile ? t_menusub_set_up_menu_mobile(t, e, u) : t_menusub_set_up_menu_desktop(t, e, u, n), $(window).bind("scroll", t_throttle(function ()
  {
    isMobile || u.hasClass("t-menusub__menu_show") && t_menusub_hide_submenu(u)
  }, 300))
}

function t_menusub_open_inME401(t)
{
  t.find(".t280__menu__wrapper").hasClass("t280__menu_static") || (t.find(".t280__menu").css("transition", "none"), t.find(".t280__bottom").css("transition", "none"), t.find(".t280__menu__wrapper").addClass("t280__menu_static"))
}

function t_menusub_close_inME401(t)
{
  t.find(".t280__menu__wrapper").hasClass("t280__menu_static") && t.find(".t280__menu__wrapper").removeClass("t280__menu_static")
}

function t_menusub_set_up_menu_mobile(u, t, s)
{
  var _ = $("#rec" + u + " .t-menusub").attr("data-submenu-margin");
  t.on("click", function (t)
  {
    var e, n;
    980 < $(window).width() && $("#rec" + u + " .t-menusub__menu").each(function ()
    {
      t_menusub_hide_submenu($(this))
    }), s.hasClass("t-menusub__menu_show") ? t_menusub_hide_submenu(s) : (t_menusub_show($(this), s, _), n = t_menusub_is_mobile_ME401(e = $(this).parents(".t280")), t_menusub_is_static_ME401(e), "n" == e.find(".t280__menu__wrapper").attr("data-submenu-static") && 0 < e.length && n && t_menusub_open_inME401(e)), t.preventDefault()
  }), $(document).click(function (t)
  {
    var e = $(t.target).hasClass("t-menusub__menu") || 0 < $(t.target).parents(".t-menusub__menu").length,
      n = $(t.target).hasClass("t-menusub__target-link") || 0 < $(t.target).parents(".t-menusub__target-link").length;
    !n || ($(t.target).hasClass("t-menusub__target-link") ? $(t.target) : $(t.target).parents(".t-menusub__target-link")).attr("data-tooltip-menu-id") != u && s.hasClass("t-menusub__menu_show") && t_menusub_hide_submenu(s), e || n || !s.hasClass("t-menusub__menu_show") || t_menusub_hide_submenu(s)
  })
}

function t_menusub_set_up_menu_desktop(t, e, n, u)
{
  var s, _ = $("#rec" + t + " .t-menusub").attr("data-submenu-margin");
  e.add(n).on("mouseover", function ()
  {
    $(this).hasClass("t-menusub__menu") && !$(this).hasClass("t-menusub__menu_show") || (clearTimeout(s), $(this).hasClass("t-menusub__menu") && n.hasClass("t-menusub__menu_show") || t_menusub_show($(this), n, _))
  }), e.add(n).on("mouseout", function ()
  {
    s = setTimeout(function ()
    {
      t_menusub_hide_submenu(n)
    }, 300)
  }), e.on("click auxclick", function (t)
  {
    t.preventDefault()
  })
}

function t_menusub_show(t, e, n)
{
  var u = e.outerHeight(),
    s = e.outerWidth(),
    _ = t.height(),
    a = t.outerWidth(),
    i = parseInt(t.css("margin-left")),
    m = $(window).height(),
    o = $(window).width(),
    b = $(window).scrollTop(),
    r = t.position().left;
  void 0 !== n && "" != n && (n = +n.replace("px", ""), n += 10);
  var h = t.position().top + _ + n,
    d = r;
  b + m < h + u ? (h = Math.max(h - u - _ - 2 * n, b), e.removeClass("t-menusub__menu_bottom").addClass("t-menusub__menu_top")) : e.removeClass("t-menusub__menu_top").addClass("t-menusub__menu_bottom"), $(window).width() <= 980 && (h = 0), d + s / 2 < o ? (d = d + (a - s) / 2 + i) < 0 && (d = 10) : d = o - s - 10, e.css(
  {
    display: "block",
    left: d,
    top: h
  }), e.offsetHeight, e.addClass("t-menusub__menu_show"), t.addClass("t-menusub__target-link_active")
}

function t_menusub_hide_submenu(t)
{
  var e = t.parents(".t280"),
    n = t_menusub_is_mobile_ME401(e);
  t.css(
  {
    display: "",
    left: "",
    top: ""
  }), t.removeClass("t-menusub__menu_show"), $(".t-menusub__target-link_active").removeClass("t-menusub__target-link_active"), "n" == e.find(".t280__menu__wrapper").attr("data-submenu-static") && isMobile && n && t_menusub_close_inME401(e)
}

function t_menusub_add_arrow(t, e, n)
{
  var u = $("#rec" + t + ' .t-menusub[data-submenu-hook="' + n + '"]').attr("data-add-submenu-arrow");
  void 0 !== u && "" != u && e.each(function ()
  {
    var t = $(this).height();
    $(this).append('<div class="t-menusub__arrow" style="height: ' + t + 'px;"></div>')
  })
}

function t_menusub_highlight()
{
  var t = window.location.href,
    e = window.location.pathname;
  "/" == t.substr(t.length - 1) && (t = t.slice(0, -1)), "/" == e.substr(e.length - 1) && (e = e.slice(0, -1)), "/" == e.charAt(0) && (e = e.slice(1)), "" == e && (e = "default.htm"), $('.t-menusub__list-item a[href="' + t + '"]').addClass("t-active"), $('.t-menusub__list-item a[href="' + t + 'default.htm"]').addClass("t-active"), $('.t-menusub__list-item a[href="' + e + '"]').addClass("t-active"), $('.t-menusub__list-item a[href="./' + e + '"]').addClass("t-active"), $('.t-menusub__list-item a[href="' + e + 'default.htm"]').addClass("t-active"), $('.t-menusub__list-item a[href="./' + e + 'default.htm"]').addClass("t-active")
}

function t_menusub_is_static_ME401(t)
{
  t.find(".t280__menu__wrapper").hasClass("t280__menu_static") || t.find(".t280__menu__wrapper").attr("data-submenu-static", "n")
}

function t_menusub_is_mobile_ME401(t)
{
  var e = t.find(".t280__menu").height(),
    n = t.find(".t280__bottom").height(),
    u = t.find(".t280__container").height();
  return $(window).height() - n - u - 40 < e
}