(function () {
  function t(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var e,
    n,
    i,
    o,
    s,
    r =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++)
          if (e in this && this[e] === t) return e;
        return -1;
      };
  function l(e) {
    null == e && (e = {}),
      (this.scrollCallback = t(this.scrollCallback, this)),
      (this.scrollHandler = t(this.scrollHandler, this)),
      (this.resetAnimation = t(this.resetAnimation, this)),
      (this.start = t(this.start, this)),
      (this.scrolled = !0),
      (this.config = this.util().extend(e, this.defaults)),
      null != e.scrollContainer &&
        (this.config.scrollContainer = document.querySelector(
          e.scrollContainer
        )),
      (this.animationNameCache = new i()),
      (this.wowEvent = this.util().createEvent(this.config.boxClass));
  }
  function a() {
    "undefined" != typeof console &&
      null !== console &&
      console.warn("MutationObserver is not supported by your browser."),
      "undefined" != typeof console &&
        null !== console &&
        console.warn(
          "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
        );
  }
  function u() {
    (this.keys = []), (this.values = []);
  }
  function h() {}
  (h.prototype.extend = function (t, e) {
    var n, i;
    for (n in e) (i = e[n]), null == t[n] && (t[n] = i);
    return t;
  }),
    (h.prototype.isMobile = function (t) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        t
      );
    }),
    (h.prototype.createEvent = function (t, e, n, i) {
      var o;
      return (
        null == e && (e = !1),
        null == n && (n = !1),
        null == i && (i = null),
        null != document.createEvent
          ? (o = document.createEvent("CustomEvent")).initCustomEvent(
              t,
              e,
              n,
              i
            )
          : null != document.createEventObject
          ? ((o = document.createEventObject()).eventType = t)
          : (o.eventName = t),
        o
      );
    }),
    (h.prototype.emitEvent = function (t, e) {
      return null != t.dispatchEvent
        ? t.dispatchEvent(e)
        : e in (null != t)
        ? t[e]()
        : "on" + e in (null != t)
        ? t["on" + e]()
        : void 0;
    }),
    (h.prototype.addEvent = function (t, e, n) {
      return null != t.addEventListener
        ? t.addEventListener(e, n, !1)
        : null != t.attachEvent
        ? t.attachEvent("on" + e, n)
        : (t[e] = n);
    }),
    (h.prototype.removeEvent = function (t, e, n) {
      return null != t.removeEventListener
        ? t.removeEventListener(e, n, !1)
        : null != t.detachEvent
        ? t.detachEvent("on" + e, n)
        : delete t[e];
    }),
    (h.prototype.innerHeight = function () {
      return "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.clientHeight;
    }),
    (n = h),
    (i =
      this.WeakMap ||
      this.MozWeakMap ||
      ((u.prototype.get = function (t) {
        for (var e, n = this.keys, i = (e = 0), o = n.length; e < o; i = ++e)
          if (n[i] === t) return this.values[i];
      }),
      (u.prototype.set = function (t, e) {
        for (var n, i = this.keys, o = (n = 0), s = i.length; n < s; o = ++n)
          if (i[o] === t) return void (this.values[o] = e);
        return this.keys.push(t), this.values.push(e);
      }),
      u)),
    (e =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      ((a.notSupported = !0), (a.prototype.observe = function () {}), a)),
    (o =
      this.getComputedStyle ||
      function (t, e) {
        return (
          (this.getPropertyValue = function (e) {
            var n;
            return (
              s.test((e = "float" === e ? "styleFloat" : e)) &&
                e.replace(s, function (t, e) {
                  return e.toUpperCase();
                }),
              (null != (n = t.currentStyle) ? n[e] : void 0) || null
            );
          }),
          this
        );
      }),
    (s = /(\-([a-z]){1})/g),
    (this.WOW =
      ((l.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null,
      }),
      (l.prototype.init = function () {
        var t;
        return (
          (this.element = window.document.documentElement),
          "interactive" === (t = document.readyState) || "complete" === t
            ? this.start()
            : this.util().addEvent(document, "DOMContentLoaded", this.start),
          (this.finished = [])
        );
      }),
      (l.prototype.start = function () {
        var t, n, i, o, s;
        if (
          ((this.stopped = !1),
          (this.boxes = function () {
            for (
              var e = this.element.querySelectorAll("." + this.config.boxClass),
                n = [],
                i = 0,
                o = e.length;
              i < o;
              i++
            )
              (t = e[i]), n.push(t);
            return n;
          }.call(this)),
          (this.all = function () {
            for (var e = this.boxes, n = [], i = 0, o = e.length; i < o; i++)
              (t = e[i]), n.push(t);
            return n;
          }.call(this)),
          this.boxes.length)
        )
          if (this.disabled()) this.resetStyle();
          else
            for (n = 0, i = (o = this.boxes).length; n < i; n++)
              (t = o[n]), this.applyStyle(t, !0);
        return (
          this.disabled() ||
            (this.util().addEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().addEvent(window, "resize", this.scrollHandler),
            (this.interval = setInterval(this.scrollCallback, 50))),
          this.config.live
            ? new e(
                ((s = this),
                function (t) {
                  for (var e, n, i = [], o = 0, r = t.length; o < r; o++)
                    (n = t[o]),
                      i.push(
                        function () {
                          for (
                            var t = n.addedNodes || [],
                              i = [],
                              o = 0,
                              s = t.length;
                            o < s;
                            o++
                          )
                            (e = t[o]), i.push(this.doSync(e));
                          return i;
                        }.call(s)
                      );
                  return i;
                })
              ).observe(document.body, { childList: !0, subtree: !0 })
            : void 0
        );
      }),
      (l.prototype.stop = function () {
        return (
          (this.stopped = !0),
          this.util().removeEvent(
            this.config.scrollContainer || window,
            "scroll",
            this.scrollHandler
          ),
          this.util().removeEvent(window, "resize", this.scrollHandler),
          null != this.interval ? clearInterval(this.interval) : void 0
        );
      }),
      (l.prototype.sync = function (t) {
        return e.notSupported ? this.doSync(this.element) : void 0;
      }),
      (l.prototype.doSync = function (t) {
        var e, n, i, o, s;
        if (1 === (t = null == t ? this.element : t).nodeType) {
          for (
            s = [],
              n = 0,
              i = (o = (t = t.parentNode || t).querySelectorAll(
                "." + this.config.boxClass
              )).length;
            n < i;
            n++
          )
            (e = o[n]),
              r.call(this.all, e) < 0
                ? (this.boxes.push(e),
                  this.all.push(e),
                  this.stopped || this.disabled()
                    ? this.resetStyle()
                    : this.applyStyle(e, !0),
                  s.push((this.scrolled = !0)))
                : s.push(void 0);
          return s;
        }
      }),
      (l.prototype.show = function (t) {
        return (
          this.applyStyle(t),
          (t.className = t.className + " " + this.config.animateClass),
          null != this.config.callback && this.config.callback(t),
          this.util().emitEvent(t, this.wowEvent),
          this.util().addEvent(t, "animationend", this.resetAnimation),
          this.util().addEvent(t, "oanimationend", this.resetAnimation),
          this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
          this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
          t
        );
      }),
      (l.prototype.applyStyle = function (t, e) {
        var n,
          i = t.getAttribute("data-wow-duration"),
          o = t.getAttribute("data-wow-delay"),
          s = t.getAttribute("data-wow-iteration");
        return this.animate(
          ((n = this),
          function () {
            return n.customStyle(t, e, i, o, s);
          })
        );
      }),
      (l.prototype.animate =
        "requestAnimationFrame" in window
          ? function (t) {
              return window.requestAnimationFrame(t);
            }
          : function (t) {
              return t();
            }),
      (l.prototype.resetStyle = function () {
        for (var t, e = this.boxes, n = [], i = 0, o = e.length; i < o; i++)
          (t = e[i]), n.push((t.style.visibility = "visible"));
        return n;
      }),
      (l.prototype.resetAnimation = function (t) {
        return 0 <= t.type.toLowerCase().indexOf("animationend")
          ? ((t = t.target || t.srcElement).className = t.className
              .replace(this.config.animateClass, "")
              .trim())
          : void 0;
      }),
      (l.prototype.customStyle = function (t, e, n, i, o) {
        return (
          e && this.cacheAnimationName(t),
          (t.style.visibility = e ? "hidden" : "visible"),
          n && this.vendorSet(t.style, { animationDuration: n }),
          i && this.vendorSet(t.style, { animationDelay: i }),
          o && this.vendorSet(t.style, { animationIterationCount: o }),
          this.vendorSet(t.style, {
            animationName: e ? "none" : this.cachedAnimationName(t),
          }),
          t
        );
      }),
      (l.prototype.vendors = ["moz", "webkit"]),
      (l.prototype.vendorSet = function (t, e) {
        var n,
          i,
          o,
          s = [];
        for (n in e)
          (i = e[n]),
            (t["" + n] = i),
            s.push(
              function () {
                for (
                  var e = this.vendors, s = [], r = 0, l = e.length;
                  r < l;
                  r++
                )
                  (o = e[r]),
                    s.push(
                      (t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i)
                    );
                return s;
              }.call(this)
            );
        return s;
      }),
      (l.prototype.vendorCSS = function (t, e) {
        for (
          var n,
            i = o(t),
            s = i.getPropertyCSSValue(e),
            r = this.vendors,
            l = 0,
            a = r.length;
          l < a;
          l++
        )
          (n = r[l]), (s = s || i.getPropertyCSSValue("-" + n + "-" + e));
        return s;
      }),
      (l.prototype.animationName = function (t) {
        var e;
        try {
          e = this.vendorCSS(t, "animation-name").cssText;
        } catch (n) {
          e = o(t).getPropertyValue("animation-name");
        }
        return "none" === e ? "" : e;
      }),
      (l.prototype.cacheAnimationName = function (t) {
        return this.animationNameCache.set(t, this.animationName(t));
      }),
      (l.prototype.cachedAnimationName = function (t) {
        return this.animationNameCache.get(t);
      }),
      (l.prototype.scrollHandler = function () {
        return (this.scrolled = !0);
      }),
      (l.prototype.scrollCallback = function () {
        var t;
        return !this.scrolled ||
          ((this.scrolled = !1),
          (this.boxes = function () {
            for (var e = this.boxes, n = [], i = 0, o = e.length; i < o; i++)
              (t = e[i]) && (this.isVisible(t) ? this.show(t) : n.push(t));
            return n;
          }.call(this)),
          this.boxes.length || this.config.live)
          ? void 0
          : this.stop();
      }),
      (l.prototype.offsetTop = function (t) {
        for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
        for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
        return e;
      }),
      (l.prototype.isVisible = function (t) {
        var e = t.getAttribute("data-wow-offset") || this.config.offset,
          n =
            (this.config.scrollContainer &&
              this.config.scrollContainer.scrollTop) ||
            window.pageYOffset,
          i =
            ((e =
              n +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              e),
            this.offsetTop(t));
        t = i + t.clientHeight;
        return i <= e && n <= t;
      }),
      (l.prototype.util = function () {
        return null != this._util ? this._util : (this._util = new n());
      }),
      (l.prototype.disabled = function () {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
      }),
      l));
}.call(this));
