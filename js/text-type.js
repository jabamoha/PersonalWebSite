jQuery(document).ready(function (s) {
  var e = 2500,
    a = 3800,
    n =
      (s(".cd-headline.letters")
        .find("b")
        .each(function () {
          var e = s(this),
            a = e.text().split(""),
            n = e.hasClass("is-visible");
          for (i in a)
            0 < e.parents(".rotate-2").length &&
              (a[i] = "<em>" + a[i] + "</em>"),
              (a[i] = n
                ? '<i class="in">' + a[i] + "</i>"
                : "<i>" + a[i] + "</i>");
          var t = a.join("");
          e.html(t).css("opacity", 1);
        }),
      s(".cd-headline")),
    t = e;
  function d(i) {
    var n,
      t,
      h = o(i);
    i.parents(".cd-headline").hasClass("type")
      ? ((n = i.parent(".cd-words-wrapper"))
          .addClass("selected")
          .removeClass("waiting"),
        setTimeout(function () {
          n.removeClass("selected"),
            i
              .removeClass("is-visible")
              .addClass("is-hidden")
              .children("i")
              .removeClass("in")
              .addClass("out");
        }, 500),
        setTimeout(function () {
          l(h, 150);
        }, 1300))
      : i.parents(".cd-headline").hasClass("letters")
      ? ((t = i.children("i").length >= h.children("i").length),
        (function i(a, n, t, l) {
          var r;
          a.removeClass("in").addClass("out"),
            a.is(":last-child")
              ? t &&
                setTimeout(function () {
                  d(o(n));
                }, e)
              : setTimeout(function () {
                  i(a.next(), n, t, l);
                }, l),
            a.is(":last-child") &&
              s("html").hasClass("no-csstransitions") &&
              ((r = o(n)), c(n, r));
        })(i.find("i").eq(0), i, t, 50),
        r(h.find("i").eq(0), h, t, 50))
      : i.parents(".cd-headline").hasClass("clip")
      ? i
          .parents(".cd-words-wrapper")
          .animate({ width: "2px" }, 600, function () {
            c(i, h), l(h);
          })
      : i.parents(".cd-headline").hasClass("loading-bar")
      ? (i.parents(".cd-words-wrapper").removeClass("is-loading"),
        c(i, h),
        setTimeout(function () {
          d(h);
        }, a),
        setTimeout(function () {
          i.parents(".cd-words-wrapper").addClass("is-loading");
        }, 800))
      : (c(i, h),
        setTimeout(function () {
          d(h);
        }, e));
  }
  function l(s, i) {
    s.parents(".cd-headline").hasClass("type")
      ? (r(s.find("i").eq(0), s, !1, i),
        s.addClass("is-visible").removeClass("is-hidden"))
      : s.parents(".cd-headline").hasClass("clip") &&
        s
          .parents(".cd-words-wrapper")
          .animate({ width: s.width() + 10 }, 600, function () {
            setTimeout(function () {
              d(s);
            }, 1500);
          });
  }
  function r(s, i, a, n) {
    s.addClass("in").removeClass("out"),
      s.is(":last-child")
        ? (i.parents(".cd-headline").hasClass("type") &&
            setTimeout(function () {
              i.parents(".cd-words-wrapper").addClass("waiting");
            }, 200),
          a ||
            setTimeout(function () {
              d(i);
            }, e))
        : setTimeout(function () {
            r(s.next(), i, a, n);
          }, n);
  }
  function o(s) {
    return s.is(":last-child") ? s.parent().children().eq(0) : s.next();
  }
  function c(s, i) {
    s.removeClass("is-visible").addClass("is-hidden"),
      i.removeClass("is-hidden").addClass("is-visible");
  }
  n.each(function () {
    var i,
      e,
      n,
      l = s(this);
    l.hasClass("loading-bar")
      ? ((t = a),
        setTimeout(function () {
          l.find(".cd-words-wrapper").addClass("is-loading");
        }, 800))
      : l.hasClass("clip")
      ? ((i = (e = l.find(".cd-words-wrapper")).width() + 10),
        e.css("width", i))
      : l.hasClass("type") ||
        ((e = l.find(".cd-words-wrapper b")),
        (n = 0),
        e.each(function () {
          var i = s(this).width();
          n < i && (n = i);
        }),
        l.find(".cd-words-wrapper").css("width", n)),
      setTimeout(function () {
        d(l.find(".is-visible").eq(0));
      }, t);
  });
});
