!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
        t());
})(this, function () {
  "use strict";
  const e = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        const i = [];
        let s = e.parentNode;
        for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
          s.matches(t) && i.push(s), (s = s.parentNode);
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
    },
    t = (e) => {
      for (
        ;
        (e += Math.floor(1e6 * Math.random())), document.getElementById(e);

      );
      return e;
    },
    i = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t;
    },
    s = (e) => ((e = i(e)) && document.querySelector(e) ? e : null),
    n = (e) => ((e = i(e)) ? document.querySelector(e) : null),
    o = (e) => {
      e.dispatchEvent(new Event("transitionend"));
    },
    r = (e) =>
      !(!e || "object" != typeof e) &&
      void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
    a = (t) =>
      r(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && 0 < t.length
        ? e.findOne(t)
        : null,
    l = (e, t, i) => {
      Object.keys(i).forEach((s) => {
        var n = i[s],
          o =
            (o = t[s]) && r(o)
              ? "element"
              : null == o
              ? "" + o
              : {}.toString
                  .call(o)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        if (!new RegExp(n).test(o))
          throw new TypeError(
            e.toUpperCase() +
              `: Option "${s}" provided type "${o}" but expected type "${n}".`
          );
      });
    },
    c = (e) =>
      !(!r(e) || 0 === e.getClientRects().length) &&
      "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    h = (e) =>
      !e ||
      e.nodeType !== Node.ELEMENT_NODE ||
      !!e.classList.contains("disabled") ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    d = (e) => {
      return document.documentElement.attachShadow
        ? "function" == typeof e.getRootNode
          ? (t = e.getRootNode()) instanceof ShadowRoot
            ? t
            : null
          : e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? d(e.parentNode)
          : null
        : null;
      var t;
    },
    u = () => {},
    f = (e) => e.offsetHeight,
    p = () => {
      var e = window.jQuery;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
    m = [],
    g = () => "rtl" === document.documentElement.dir,
    _ = (e) => {
      var t = () => {
        const t = p();
        if (t) {
          const i = e.NAME,
            s = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = s), e.jQueryInterface));
        }
      };
      "loading" === document.readyState
        ? (m.length ||
            document.addEventListener("DOMContentLoaded", () => {
              m.forEach((e) => e());
            }),
          m.push(t))
        : t();
    },
    b = (e) => {
      "function" == typeof e && e();
    },
    v = (e, t, i = !0) => {
      if (i) {
        i =
          (() => {
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } =
              window.getComputedStyle(t);
            var s = Number.parseFloat(e),
              n = Number.parseFloat(i);
            return s || n
              ? ((e = e.split(",")[0]),
                (i = i.split(",")[0]),
                1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
              : 0;
          })() + 5;
        let s = !1;
        const n = ({ target: i }) => {
          i === t &&
            ((s = !0), t.removeEventListener("transitionend", n), b(e));
        };
        t.addEventListener("transitionend", n),
          setTimeout(() => {
            s || o(t);
          }, i);
      } else b(e);
    },
    y = (e, t, i, s) => {
      let n = e.indexOf(t);
      return -1 === n
        ? e[!i && s ? e.length - 1 : 0]
        : ((t = e.length),
          (n += i ? 1 : -1),
          s && (n = (n + t) % t),
          e[Math.max(0, Math.min(n, t - 1))]);
    },
    w = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    A = /::\d+$/,
    T = {};
  let O = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
    k = /^(mouseenter|mouseleave)/i,
    L = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function x(e, t) {
    return (t && t + "::" + O++) || e.uidEvent || O++;
  }
  function D(e) {
    var t = x(e);
    return (e.uidEvent = t), (T[t] = T[t] || {}), T[t];
  }
  function S(e, t, i = null) {
    var s = Object.keys(e);
    for (let o = 0, r = s.length; o < r; o++) {
      var n = e[s[o]];
      if (n.originalHandler === t && n.delegationSelector === i) return n;
    }
    return null;
  }
  function I(e, t, i) {
    var s = "string" == typeof t;
    i = s ? i : t;
    let n = M(e);
    return [s, i, (n = L.has(n) ? n : e)];
  }
  function N(e, t, i, s, n) {
    if ("string" == typeof t && e) {
      if ((i || ((i = s), (s = null)), k.test(t))) {
        const e = (e) =>
          function (t) {
            if (
              !t.relatedTarget ||
              (t.relatedTarget !== t.delegateTarget &&
                !t.delegateTarget.contains(t.relatedTarget))
            )
              return e.call(this, t);
          };
        s ? (s = e(s)) : (i = e(i));
      }
      const [h, d, u] = I(t, i, s),
        f = D(e),
        p = f[u] || (f[u] = {}),
        m = S(p, d, h ? i : null);
      if (m) return (m.oneOff = m.oneOff && n);
      const g = x(d, t.replace(w, "")),
        _ = h
          ? ((a = e),
            (l = i),
            (c = s),
            function e(t) {
              var i = a.querySelectorAll(l);
              for (let s = t.target; s && s !== this; s = s.parentNode)
                for (let n = i.length; n--; )
                  if (i[n] === s)
                    return (
                      (t.delegateTarget = s),
                      e.oneOff && P.off(a, t.type, l, c),
                      c.apply(s, [t])
                    );
              return null;
            })
          : ((o = e),
            (r = i),
            function e(t) {
              return (
                (t.delegateTarget = o),
                e.oneOff && P.off(o, t.type, r),
                r.apply(o, [t])
              );
            });
      var o, r, a, l, c;
      (_.delegationSelector = h ? i : null),
        (_.originalHandler = d),
        (_.oneOff = n),
        (_.uidEvent = g),
        (p[g] = _),
        e.addEventListener(u, _, h);
    }
  }
  function j(e, t, i, s, n) {
    (s = S(t[i], s, n)) &&
      (e.removeEventListener(i, s, Boolean(n)), delete t[i][s.uidEvent]);
  }
  function M(e) {
    return (e = e.replace(E, "")), C[e] || e;
  }
  const P = {
      on(e, t, i, s) {
        N(e, t, i, s, !1);
      },
      one(e, t, i, s) {
        N(e, t, i, s, !0);
      },
      off(e, t, i, s) {
        if ("string" == typeof t && e) {
          const [n, o, r] = I(t, i, s),
            a = r !== t,
            l = D(e),
            c = t.startsWith(".");
          if (void 0 !== o)
            return l && l[r] ? void j(e, l, r, o, n ? i : null) : void 0;
          c &&
            Object.keys(l).forEach((i) => {
              {
                var s = e,
                  n = l,
                  o = i,
                  r = t.slice(1);
                const a = n[o] || {};
                return void Object.keys(a).forEach((e) => {
                  if (e.includes(r)) {
                    const t = a[e];
                    j(s, n, o, t.originalHandler, t.delegationSelector);
                  }
                });
              }
            });
          const h = l[r] || {};
          Object.keys(h).forEach((i) => {
            var s = i.replace(A, "");
            if (!a || t.includes(s)) {
              const t = h[i];
              j(e, l, r, t.originalHandler, t.delegationSelector);
            }
          });
        }
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        const s = p(),
          n = M(t),
          o = t !== n,
          r = L.has(n);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            s &&
            ((a = s.Event(t, i)),
            s(e).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? (d = document.createEvent("HTMLEvents")).initEvent(n, l, !0)
            : (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((e) => {
              Object.defineProperty(d, e, { get: () => i[e] });
            }),
          h && d.preventDefault(),
          c && e.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    H = new Map();
  var R = function (e, t, i) {
      H.has(e) || H.set(e, new Map());
      const s = H.get(e);
      s.has(t) || 0 === s.size
        ? s.set(t, i)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(s.keys())[0]
            }.`
          );
    },
    B = (e, t) => (H.has(e) && H.get(e).get(t)) || null;
  class W {
    constructor(e) {
      (e = a(e)) &&
        ((this._element = e),
        R(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      (function (e, t) {
        if (H.has(e)) {
          const i = H.get(e);
          i.delete(t), 0 === i.size && H.delete(e);
        }
      })(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
    }
    _queueCallback(e, t, i = !0) {
      v(e, t, i);
    }
    static getInstance(e) {
      return B(e, this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.0.2";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
  }
  class q extends W {
    static get NAME() {
      return "alert";
    }
    close(e) {
      e = e ? this._getRootElement(e) : this._element;
      var t = this._triggerCloseEvent(e);
      null === t || t.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(e) {
      return n(e) || e.closest(".alert");
    }
    _triggerCloseEvent(e) {
      return P.trigger(e, "close.bs.alert");
    }
    _removeElement(e) {
      e.classList.remove("show");
      var t = e.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(e), e, t);
    }
    _destroyElement(e) {
      e.remove(), P.trigger(e, "closed.bs.alert");
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = q.getOrCreateInstance(this);
        "close" === e && t[e](this);
      });
    }
    static handleDismiss(e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }
  }
  P.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    q.handleDismiss(new q())
  ),
    _(q);
  class z extends W {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = z.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  function U(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        (e === Number(e).toString()
          ? Number(e)
          : "" === e || "null" === e
          ? null
          : e))
    );
  }
  function F(e) {
    return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
  }
  P.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (e) => {
      e.preventDefault(),
        (e = e.target.closest('[data-bs-toggle="button"]')),
        z.getOrCreateInstance(e).toggle();
    }
  ),
    _(z);
  const $ = {
      setDataAttribute(e, t, i) {
        e.setAttribute("data-bs-" + F(t), i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute("data-bs-" + F(t));
      },
      getDataAttributes(e) {
        if (!e) return {};
        const t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((i) => {
              let s = i.replace(/^bs/, "");
              (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)),
                (t[s] = U(e.dataset[i]));
            }),
          t
        );
      },
      getDataAttribute: (e, t) => U(e.getAttribute("data-bs-" + F(t))),
      offset: (e) => ({
        top: (e = e.getBoundingClientRect()).top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft,
      }),
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    },
    V = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    K = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    X = "next",
    Y = "prev",
    Q = "left",
    G = "right",
    Z = { ArrowLeft: G, ArrowRight: Q };
  class J extends W {
    constructor(t, i) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(i)),
        (this._indicatorsElement = e.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          0 < navigator.maxTouchPoints),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return V;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(X);
    }
    nextWhenVisible() {
      !document.hidden && c(this._element) && this.next();
    }
    prev() {
      this._slide(Y);
    }
    pause(t) {
      t || (this._isPaused = !0),
        e.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (o(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(e) {
      e || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = e.findOne(".active.carousel-item", this._element);
      var i = this._getItemIndex(this._activeElement);
      if (!(t > this._items.length - 1 || t < 0))
        if (this._isSliding)
          P.one(this._element, "slid.bs.carousel", () => this.to(t));
        else {
          if (i === t) return this.pause(), void this.cycle();
          (i = i < t ? X : Y), this._slide(i, this._items[t]);
        }
    }
    _getConfig(e) {
      return (
        (e = {
          ...V,
          ...$.getDataAttributes(this._element),
          ...("object" == typeof e ? e : {}),
        }),
        l("carousel", e, K),
        e
      );
    }
    _handleSwipe() {
      var e = Math.abs(this.touchDeltaX);
      e <= 40 ||
        ((e /= this.touchDeltaX),
        (this.touchDeltaX = 0),
        e && this._slide(0 < e ? G : Q));
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", (e) => this.pause(e)),
          P.on(this._element, "mouseleave.bs.carousel", (e) => this.cycle(e))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (e) => {
          !this._pointerEvent ||
          ("pen" !== e.pointerType && "touch" !== e.pointerType)
            ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
            : (this.touchStartX = e.clientX);
        },
        i = (e) => {
          this.touchDeltaX =
            e.touches && 1 < e.touches.length
              ? 0
              : e.touches[0].clientX - this.touchStartX;
        },
        s = (e) => {
          !this._pointerEvent ||
            ("pen" !== e.pointerType && "touch" !== e.pointerType) ||
            (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (e) => this.cycle(e),
                500 + this._config.interval
              )));
        };
      e.find(".carousel-item img", this._element).forEach((e) => {
        P.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
            P.on(this._element, "pointerup.bs.carousel", (e) => s(e)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
            P.on(this._element, "touchmove.bs.carousel", (e) => i(e)),
            P.on(this._element, "touchend.bs.carousel", (e) => s(e)));
    }
    _keydown(e) {
      var t;
      /input|textarea/i.test(e.target.tagName) ||
        ((t = Z[e.key]) && (e.preventDefault(), this._slide(t)));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? e.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(e, t) {
      return (e = e === X), y(this._items, t, e, this._config.wrap);
    }
    _triggerSlideEvent(t, i) {
      var s = this._getItemIndex(t),
        n = this._getItemIndex(
          e.findOne(".active.carousel-item", this._element)
        );
      return P.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: i,
        from: n,
        to: s,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const i = e.findOne(".active", this._indicatorsElement),
          s =
            (i.classList.remove("active"),
            i.removeAttribute("aria-current"),
            e.find("[data-bs-target]", this._indicatorsElement));
        for (let e = 0; e < s.length; e++)
          if (
            Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            s[e].classList.add("active"),
              s[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t =
        this._activeElement ||
        e.findOne(".active.carousel-item", this._element);
      var i;
      t &&
        ((i = Number.parseInt(t.getAttribute("data-bs-interval"), 10))
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = i))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval));
    }
    _slide(t, i) {
      const s = this._directionToOrder(t),
        n = e.findOne(".active.carousel-item", this._element),
        o = this._getItemIndex(n),
        r = i || this._getItemByOrder(s, n),
        a = this._getItemIndex(r),
        l = Boolean(this._interval),
        c = s === X,
        h = c ? "carousel-item-start" : "carousel-item-end",
        d = c ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(s);
      if (r && r.classList.contains("active")) this._isSliding = !1;
      else if (
        !this._isSliding &&
        !this._triggerSlideEvent(r, u).defaultPrevented &&
        n &&
        r
      ) {
        (this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(r),
          (this._activeElement = r);
        const e = () => {
          P.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a,
          });
        };
        if (this._element.classList.contains("slide")) {
          r.classList.add(d), f(r), n.classList.add(h), r.classList.add(h);
          const t = () => {
            r.classList.remove(h, d),
              r.classList.add("active"),
              n.classList.remove("active", d, h),
              (this._isSliding = !1),
              setTimeout(e, 0);
          };
          this._queueCallback(t, n, !0);
        } else
          n.classList.remove("active"),
            r.classList.add("active"),
            (this._isSliding = !1),
            e();
        l && this.cycle();
      }
    }
    _directionToOrder(e) {
      return [G, Q].includes(e)
        ? g()
          ? e === Q
            ? Y
            : X
          : e === Q
          ? X
          : Y
        : e;
    }
    _orderToDirection(e) {
      return [X, Y].includes(e)
        ? g()
          ? e === Y
            ? Q
            : G
          : e === Y
          ? G
          : Q
        : e;
    }
    static carouselInterface(e, t) {
      const i = J.getOrCreateInstance(e, t);
      let s = i._config;
      if (
        ("object" == typeof t && (s = { ...s, ...t }),
        (e = "string" == typeof t ? t : s.slide),
        "number" == typeof t)
      )
        i.to(t);
      else if ("string" == typeof e) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]();
      } else s.interval && s.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function () {
        J.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      const t = n(this);
      if (t && t.classList.contains("carousel")) {
        const i = { ...$.getDataAttributes(t), ...$.getDataAttributes(this) },
          s = this.getAttribute("data-bs-slide-to");
        s && (i.interval = !1),
          J.carouselInterface(t, i),
          s && J.getInstance(t).to(s),
          e.preventDefault();
      }
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    J.dataApiClickHandler
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      var t = e.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        J.carouselInterface(t[e], J.getInstance(t[e]));
    }),
    _(J);
  const ee = { toggle: !0, parent: "" },
    te = { toggle: "boolean", parent: "(string|element)" };
  class ie extends W {
    constructor(t, i) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(i)),
        (this._triggerArray = e.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      var n = e.find('[data-bs-toggle="collapse"]');
      for (let t = 0, i = n.length; t < i; t++) {
        const i = n[t],
          o = s(i),
          r = e.find(o).filter((e) => e === this._element);
        null !== o &&
          r.length &&
          ((this._selector = o), this._triggerArray.push(i));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ee;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (!this._isTransitioning && !this._element.classList.contains("show")) {
        let i, s;
        this._parent &&
          0 ===
            (i = e
              .find(".show, .collapsing", this._parent)
              .filter((e) =>
                "string" == typeof this._config.parent
                  ? e.getAttribute("data-bs-parent") === this._config.parent
                  : e.classList.contains("collapse")
              )).length &&
          (i = null);
        const n = e.findOne(this._selector);
        if (i) {
          const e = i.find((e) => n !== e);
          if ((s = e ? ie.getInstance(e) : null) && s._isTransitioning) return;
        }
        if (!P.trigger(this._element, "show.bs.collapse").defaultPrevented) {
          i &&
            i.forEach((e) => {
              n !== e && ie.collapseInterface(e, "hide"),
                s || R(e, "bs.collapse", null);
            });
          const e = this._getDimension();
          this._element.classList.remove("collapse"),
            this._element.classList.add("collapsing"),
            (this._element.style[e] = 0),
            this._triggerArray.length &&
              this._triggerArray.forEach((e) => {
                e.classList.remove("collapsed"),
                  e.setAttribute("aria-expanded", !0);
              }),
            this.setTransitioning(!0);
          var t = "scroll" + (e[0].toUpperCase() + e.slice(1));
          this._queueCallback(
            () => {
              this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse", "show"),
                (this._element.style[e] = ""),
                this.setTransitioning(!1),
                P.trigger(this._element, "shown.bs.collapse");
            },
            this._element,
            !0
          ),
            (this._element.style[e] = this._element[t] + "px");
        }
      }
    }
    hide() {
      if (
        !this._isTransitioning &&
        this._element.classList.contains("show") &&
        !P.trigger(this._element, "hide.bs.collapse").defaultPrevented
      ) {
        var e = this._getDimension();
        (this._element.style[e] =
          this._element.getBoundingClientRect()[e] + "px"),
          f(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const t = this._triggerArray.length;
        if (0 < t)
          for (let e = 0; e < t; e++) {
            const t = this._triggerArray[e],
              i = n(t);
            i &&
              !i.classList.contains("show") &&
              (t.classList.add("collapsed"),
              t.setAttribute("aria-expanded", !1));
          }
        this.setTransitioning(!0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              this.setTransitioning(!1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                P.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
    }
    setTransitioning(e) {
      this._isTransitioning = e;
    }
    _getConfig(e) {
      return (
        ((e = { ...ee, ...e }).toggle = Boolean(e.toggle)),
        l("collapse", e, te),
        e
      );
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      var t = this._config.parent,
        i = `[data-bs-toggle="collapse"][data-bs-parent="${(t = a(t))}"]`;
      return (
        e.find(i, t).forEach((e) => {
          var t = n(e);
          this._addAriaAndCollapsedClass(t, [e]);
        }),
        t
      );
    }
    _addAriaAndCollapsedClass(e, t) {
      if (e && t.length) {
        const i = e.classList.contains("show");
        t.forEach((e) => {
          i ? e.classList.remove("collapsed") : e.classList.add("collapsed"),
            e.setAttribute("aria-expanded", i);
        });
      }
    }
    static collapseInterface(e, t) {
      let i = ie.getInstance(e);
      const s = {
        ...ee,
        ...$.getDataAttributes(e),
        ...("object" == typeof t && t ? t : {}),
      };
      if (
        (!i &&
          s.toggle &&
          "string" == typeof t &&
          /show|hide/.test(t) &&
          (s.toggle = !1),
        (i = i || new ie(e, s)),
        "string" == typeof t)
      ) {
        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    }
    static jQueryInterface(e) {
      return this.each(function () {
        ie.collapseInterface(this, e);
      });
    }
  }
  P.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (t) {
      ("A" === t.target.tagName ||
        (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
      const i = $.getDataAttributes(this),
        n = s(this);
      e.find(n).forEach((e) => {
        const t = ie.getInstance(e);
        let s;
        (s = t
          ? (null === t._parent &&
              "string" == typeof i.parent &&
              ((t._config.parent = i.parent), (t._parent = t._getParent())),
            "toggle")
          : i),
          ie.collapseInterface(e, s);
      });
    }
  ),
    _(ie);
  var se = "top",
    ne = "bottom",
    oe = "right",
    re = "left",
    ae = [se, ne, oe, re],
    le = ae.reduce(function (e, t) {
      return e.concat([t + "-start", t + "-end"]);
    }, []),
    ce = [].concat(ae, ["auto"]).reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
    he = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function de(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function ue(e) {
    return null == e
      ? window
      : "[object Window]" !== e.toString()
      ? ((t = e.ownerDocument) && t.defaultView) || window
      : e;
    var t;
  }
  function fe(e) {
    return e instanceof ue(e).Element || e instanceof Element;
  }
  function pe(e) {
    return e instanceof ue(e).HTMLElement || e instanceof HTMLElement;
  }
  function me(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof ue(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var ge = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var i = t.styles[e] || {},
          s = t.attributes[e] || {},
          n = t.elements[e];
        pe(n) &&
          de(n) &&
          (Object.assign(n.style, i),
          Object.keys(s).forEach(function (e) {
            var t = s[e];
            !1 === t
              ? n.removeAttribute(e)
              : n.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        i = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, i.popper),
        (t.styles = i),
        t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var s = t.elements[e],
              n = t.attributes[e] || {};
            e = Object.keys(
              (t.styles.hasOwnProperty(e) ? t.styles : i)[e]
            ).reduce(function (e, t) {
              return (e[t] = ""), e;
            }, {});
            pe(s) &&
              de(s) &&
              (Object.assign(s.style, e),
              Object.keys(n).forEach(function (e) {
                s.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function _e(e) {
    return e.split("-")[0];
  }
  function be(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function ve(e) {
    var t = be(e),
      i = e.offsetWidth,
      s = e.offsetHeight;
    return (
      Math.abs(t.width - i) <= 1 && (i = t.width),
      Math.abs(t.height - s) <= 1 && (s = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
    );
  }
  function ye(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && me(i)) {
      var s = t;
      do {
        if (s && e.isSameNode(s)) return !0;
      } while ((s = s.parentNode || s.host));
    }
    return !1;
  }
  function we(e) {
    return ue(e).getComputedStyle(e);
  }
  function Ee(e) {
    return (
      (fe(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function Ae(e) {
    return "html" === de(e)
      ? e
      : e.assignedSlot || e.parentNode || (me(e) ? e.host : null) || Ee(e);
  }
  function Te(e) {
    return pe(e) && "fixed" !== we(e).position ? e.offsetParent : null;
  }
  function Oe(e) {
    for (
      var t = ue(e), i = Te(e);
      i &&
      0 <= ["table", "td", "th"].indexOf(de(i)) &&
      "static" === we(i).position;

    )
      i = Te(i);
    return (
      ((!i ||
        ("html" !== de(i) &&
          ("body" !== de(i) || "static" !== we(i).position))) &&
        (i ||
          (function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              pe(e) &&
              "fixed" === we(e).position
            )
              return null;
            for (
              var i = Ae(e);
              pe(i) && ["html", "body"].indexOf(de(i)) < 0;

            ) {
              var s = we(i);
              if (
                "none" !== s.transform ||
                "none" !== s.perspective ||
                "paint" === s.contain ||
                -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                (t && "filter" === s.willChange) ||
                (t && s.filter && "none" !== s.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(e))) ||
      t
    );
  }
  function Ce(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }
  var ke = Math.max,
    Le = Math.min,
    xe = Math.round;
  function De(e, t, i) {
    return ke(e, Le(t, i));
  }
  function Se(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function Ie(e, t) {
    return t.reduce(function (t, i) {
      return (t[i] = e), t;
    }, {});
  }
  var Ne = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          i,
          s,
          n,
          o = e.state,
          r = e.name,
          a = ((e = e.options), o.elements.arrow),
          l = o.modifiersData.popperOffsets,
          c = Ce((h = _e(o.placement))),
          h = 0 <= [re, oe].indexOf(h) ? "height" : "width";
        a &&
          l &&
          ((e = Se(
            "number" !=
              typeof (e =
                "function" == typeof (e = e.padding)
                  ? e(Object.assign({}, o.rects, { placement: o.placement }))
                  : e)
              ? e
              : Ie(e, ae)
          )),
          (t = ve(a)),
          (n = "y" === c ? se : re),
          (s = "y" === c ? ne : oe),
          (i =
            o.rects.reference[h] +
            o.rects.reference[c] -
            l[c] -
            o.rects.popper[h]),
          (l = l[c] - o.rects.reference[c]),
          (a = (a = Oe(a))
            ? "y" === c
              ? a.clientHeight || 0
              : a.clientWidth || 0
            : 0),
          (n = e[n]),
          (e = a - t[h] - e[s]),
          (n = De(n, (s = a / 2 - t[h] / 2 + (i / 2 - l / 2)), e)),
          (o.modifiersData[r] =
            (((a = {})[c] = n), (a.centerOffset = n - s), a)));
      },
      effect: function (e) {
        var t = e.state;
        null !=
          (e =
            void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) &&
          ("string" != typeof e || (e = t.elements.popper.querySelector(e))) &&
          ye(t.elements.popper, e) &&
          (t.elements.arrow = e);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    je = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Me(e) {
    var t,
      i,
      s = e.popper,
      n = e.popperRect,
      o = e.placement,
      r = e.offsets,
      a = e.position,
      l = e.gpuAcceleration,
      c = e.adaptive,
      h =
        !0 === (e = e.roundOffsets)
          ? ((h = r.x),
            (d = r.y),
            (u = window.devicePixelRatio || 1),
            { x: xe(xe(h * u) / u) || 0, y: xe(xe(d * u) / u) || 0 })
          : "function" == typeof e
          ? e(r)
          : r,
      d = h.x,
      u = void 0 === d ? 0 : d,
      f = ((e = void 0 === (e = h.y) ? 0 : e), r.hasOwnProperty("x")),
      p = ((r = r.hasOwnProperty("y")), re),
      m = se,
      g = window;
    c &&
      ((_ = "clientHeight"),
      (i = "clientWidth"),
      (t = Oe(s)) === ue(s) &&
        "static" !== we((t = Ee(s))).position &&
        ((_ = "scrollHeight"), (i = "scrollWidth")),
      o === se && ((m = ne), (e = (e - (t[_] - n.height)) * (l ? 1 : -1))),
      o === re && ((p = oe), (u = (u - (t[i] - n.width)) * (l ? 1 : -1))));
    var _;
    s = Object.assign({ position: a }, c && je);
    return l
      ? Object.assign(
          {},
          s,
          (((_ = {})[m] = r ? "0" : ""),
          (_[p] = f ? "0" : ""),
          (_.transform =
            (g.devicePixelRatio || 1) < 2
              ? "translate(" + u + "px, " + e + "px)"
              : "translate3d(" + u + "px, " + e + "px, 0)"),
          _)
        )
      : Object.assign(
          {},
          s,
          (((o = {})[m] = r ? e + "px" : ""),
          (o[p] = f ? u + "px" : ""),
          (o.transform = ""),
          o)
        );
  }
  var Pe = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          i = void 0 === (i = (e = e.options).gpuAcceleration) || i,
          s = void 0 === (s = e.adaptive) || s;
        (e = void 0 === (e = e.roundOffsets) || e),
          (i = {
            placement: _e(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: i,
          });
        null != t.modifiersData.popperOffsets &&
          (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            Me(
              Object.assign({}, i, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: s,
                roundOffsets: e,
              })
            )
          )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              Me(
                Object.assign({}, i, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: e,
                })
              )
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          }));
      },
      data: {},
    },
    He = { passive: !0 },
    Re = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t,
          i = e.state,
          s = e.instance,
          n = void 0 === (t = (e = e.options).scroll) || t,
          o = void 0 === (t = e.resize) || t,
          r = ue(i.elements.popper),
          a = [].concat(i.scrollParents.reference, i.scrollParents.popper);
        return (
          n &&
            a.forEach(function (e) {
              e.addEventListener("scroll", s.update, He);
            }),
          o && r.addEventListener("resize", s.update, He),
          function () {
            n &&
              a.forEach(function (e) {
                e.removeEventListener("scroll", s.update, He);
              }),
              o && r.removeEventListener("resize", s.update, He);
          }
        );
      },
      data: {},
    },
    Be = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function We(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return Be[e];
    });
  }
  var qe = { start: "end", end: "start" };
  function ze(e) {
    return e.replace(/start|end/g, function (e) {
      return qe[e];
    });
  }
  function Ue(e) {
    return { scrollLeft: (e = ue(e)).pageXOffset, scrollTop: e.pageYOffset };
  }
  function Fe(e) {
    return be(Ee(e)).left + Ue(e).scrollLeft;
  }
  function $e(e) {
    var t = (e = we(e)).overflow,
      i = e.overflowX;
    e = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + e + i);
  }
  function Ve(e, t) {
    void 0 === t && (t = []);
    e =
      (s = (function e(t) {
        return 0 <= ["html", "body", "#document"].indexOf(de(t))
          ? t.ownerDocument.body
          : pe(t) && $e(t)
          ? t
          : e(Ae(t));
      })(e)) === (null == (e = e.ownerDocument) ? void 0 : e.body);
    var i = ue(s),
      s =
        ((i = e ? [i].concat(i.visualViewport || [], $e(s) ? s : []) : s),
        t.concat(i));
    return e ? s : s.concat(Ve(Ae(i)));
  }
  function Ke(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function Xe(e, t) {
    return "viewport" === t
      ? Ke(
          ((s = ue((i = e))),
          (n = Ee(i)),
          (s = s.visualViewport),
          (o = n.clientWidth),
          (n = n.clientHeight),
          (a = r = 0),
          s &&
            ((o = s.width),
            (n = s.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
              ((r = s.offsetLeft), (a = s.offsetTop))),
          { width: o, height: n, x: r + Fe(i), y: a })
        )
      : pe(t)
      ? (((o = be((s = t))).top = o.top + s.clientTop),
        (o.left = o.left + s.clientLeft),
        (o.bottom = o.top + s.clientHeight),
        (o.right = o.left + s.clientWidth),
        (o.width = s.clientWidth),
        (o.height = s.clientHeight),
        (o.x = o.left),
        (o.y = o.top),
        o)
      : Ke(
          ((n = Ee(e)),
          (r = Ee(n)),
          (i = Ue(n)),
          (a = null == (a = n.ownerDocument) ? void 0 : a.body),
          (t = ke(
            r.scrollWidth,
            r.clientWidth,
            a ? a.scrollWidth : 0,
            a ? a.clientWidth : 0
          )),
          (e = ke(
            r.scrollHeight,
            r.clientHeight,
            a ? a.scrollHeight : 0,
            a ? a.clientHeight : 0
          )),
          (n = -i.scrollLeft + Fe(n)),
          (i = -i.scrollTop),
          "rtl" === we(a || r).direction &&
            (n += ke(r.clientWidth, a ? a.clientWidth : 0) - t),
          { width: t, height: e, x: n, y: i })
        );
    var i, s, n, o, r, a;
  }
  function Ye(e) {
    return e.split("-")[1];
  }
  function Qe(e) {
    var t,
      i = e.reference,
      s = e.element,
      n = (e = e.placement) ? _e(e) : null,
      o = ((e = e ? Ye(e) : null), i.x + i.width / 2 - s.width / 2),
      r = i.y + i.height / 2 - s.height / 2;
    switch (n) {
      case se:
        t = { x: o, y: i.y - s.height };
        break;
      case ne:
        t = { x: o, y: i.y + i.height };
        break;
      case oe:
        t = { x: i.x + i.width, y: r };
        break;
      case re:
        t = { x: i.x - s.width, y: r };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var a = n ? Ce(n) : null;
    if (null != a) {
      var l = "y" === a ? "height" : "width";
      switch (e) {
        case "start":
          t[a] = t[a] - (i[l] / 2 - s[l] / 2);
          break;
        case "end":
          t[a] = t[a] + (i[l] / 2 - s[l] / 2);
      }
    }
    return t;
  }
  function Ge(e, t) {
    var i,
      s,
      n,
      o,
      r,
      a =
        void 0 === (a = (t = t = void 0 === t ? {} : t).placement)
          ? e.placement
          : a,
      l = void 0 === (l = t.boundary) ? "clippingParents" : l,
      c = void 0 === (c = t.rootBoundary) ? "viewport" : c,
      h = void 0 === (h = t.elementContext) ? "popper" : h,
      d = void 0 !== (d = t.altBoundary) && d,
      u =
        ((t = Se(
          "number" != typeof (t = void 0 === (t = t.padding) ? 0 : t)
            ? t
            : Ie(t, ae)
        )),
        e.elements.reference),
      f = e.rects.popper,
      p =
        ((d = e.elements[d ? ("popper" === h ? "reference" : "popper") : h]),
        (l =
          ((i = fe(d) ? d : d.contextElement || Ee(e.elements.popper)),
          (d = c),
          (n =
            "clippingParents" === (c = l)
              ? ((o = Ve(Ae((n = i)))),
                fe(
                  (s =
                    0 <= ["absolute", "fixed"].indexOf(we(n).position) && pe(n)
                      ? Oe(n)
                      : n)
                )
                  ? o.filter(function (e) {
                      return fe(e) && ye(e, s) && "body" !== de(e);
                    })
                  : [])
              : [].concat(c)),
          (c = (o = [].concat(n, [d]))[0]),
          ((d = o.reduce(function (e, t) {
            return (
              (t = Xe(i, t)),
              (e.top = ke(t.top, e.top)),
              (e.right = Le(t.right, e.right)),
              (e.bottom = Le(t.bottom, e.bottom)),
              (e.left = ke(t.left, e.left)),
              e
            );
          }, Xe(i, c))).width = d.right - d.left),
          (d.height = d.bottom - d.top),
          (d.x = d.left),
          (d.y = d.top),
          d)),
        (d = Qe({
          reference: (c = be(u)),
          element: f,
          strategy: "absolute",
          placement: a,
        })),
        (u = Ke(Object.assign({}, f, d))),
        (f = "popper" === h ? u : c),
        {
          top: l.top - f.top + t.top,
          bottom: f.bottom - l.bottom + t.bottom,
          left: l.left - f.left + t.left,
          right: f.right - l.right + t.right,
        });
    d = e.modifiersData.offset;
    return (
      "popper" === h &&
        d &&
        ((r = d[a]),
        Object.keys(p).forEach(function (e) {
          var t = 0 <= [oe, ne].indexOf(e) ? 1 : -1,
            i = 0 <= [se, ne].indexOf(e) ? "y" : "x";
          p[e] += r[i] * t;
        })),
      p
    );
  }
  var Ze = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        i = e.options;
      e = e.name;
      if (!t.modifiersData[e]._skip) {
        for (
          var s,
            n = void 0 === (r = i.mainAxis) || r,
            o = void 0 === (r = i.altAxis) || r,
            r = i.fallbackPlacements,
            a = i.padding,
            l = i.boundary,
            c = i.rootBoundary,
            h = i.altBoundary,
            d = void 0 === (s = i.flipVariations) || s,
            u = i.allowedAutoPlacements,
            f =
              ((i = _e((s = t.options.placement))),
              (r =
                r ||
                (i !== s && d
                  ? (function (e) {
                      if ("auto" === _e(e)) return [];
                      var t = We(e);
                      return [ze(e), t, ze(t)];
                    })(s)
                  : [We(s)])),
              [s].concat(r).reduce(function (e, i) {
                return e.concat(
                  "auto" === _e(i)
                    ? ((s = t),
                      (n = (e = e =
                        void 0 ===
                        (e = {
                          placement: i,
                          boundary: l,
                          rootBoundary: c,
                          padding: a,
                          flipVariations: d,
                          allowedAutoPlacements: u,
                        })
                          ? {}
                          : e).placement),
                      (o = e.boundary),
                      (r = e.rootBoundary),
                      (h = e.padding),
                      (f = e.flipVariations),
                      (p = void 0 === (e = e.allowedAutoPlacements) ? ce : e),
                      (e = (m = Ye(n))
                        ? f
                          ? le
                          : le.filter(function (e) {
                              return Ye(e) === m;
                            })
                        : ae),
                      (g = (n =
                        0 ===
                        (n = e.filter(function (e) {
                          return 0 <= p.indexOf(e);
                        })).length
                          ? e
                          : n).reduce(function (e, t) {
                        return (
                          (e[t] = Ge(s, {
                            placement: t,
                            boundary: o,
                            rootBoundary: r,
                            padding: h,
                          })[_e(t)]),
                          e
                        );
                      }, {})),
                      Object.keys(g).sort(function (e, t) {
                        return g[e] - g[t];
                      }))
                    : i
                );
                var s, n, o, r, h, f, p, m, g;
              }, [])),
            p = t.rects.reference,
            m = t.rects.popper,
            g = new Map(),
            _ = !0,
            b = f[0],
            v = 0;
          v < f.length;
          v++
        ) {
          var y = f[v],
            w = _e(y),
            E = "start" === Ye(y),
            A = (O = 0 <= [se, ne].indexOf(w)) ? "width" : "height",
            T = Ge(t, {
              placement: y,
              boundary: l,
              rootBoundary: c,
              altBoundary: h,
              padding: a,
            }),
            O = O ? (E ? oe : re) : E ? ne : se;
          (E = (p[A] > m[A] && (O = We(O)), We(O))), (A = []);
          if (
            (n && A.push(T[w] <= 0),
            o && A.push(T[O] <= 0, T[E] <= 0),
            A.every(function (e) {
              return e;
            }))
          ) {
            (b = y), (_ = !1);
            break;
          }
          g.set(y, A);
        }
        if (_)
          for (
            var C = d ? 3 : 1;
            0 < C &&
            "break" !==
              (function (e) {
                var t = f.find(function (t) {
                  if ((t = g.get(t)))
                    return t.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (b = t), "break";
              })(C);
            C--
          );
        t.placement !== b &&
          ((t.modifiersData[e]._skip = !0), (t.placement = b), (t.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Je(e, t, i) {
    return {
      top: e.top - t.height - (i = void 0 === i ? { x: 0, y: 0 } : i).y,
      right: e.right - t.width + i.x,
      bottom: e.bottom - t.height + i.y,
      left: e.left - t.width - i.x,
    };
  }
  function et(e) {
    return [se, oe, ne, re].some(function (t) {
      return 0 <= e[t];
    });
  }
  var tt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          i = ((e = e.name), t.rects.reference),
          s = t.rects.popper,
          n = t.modifiersData.preventOverflow,
          o = Ge(t, { elementContext: "reference" }),
          r = Ge(t, { altBoundary: !0 });
        (o = Je(o, i)), (i = Je(r, s, n)), (r = et(o)), (s = et(i));
        (t.modifiersData[e] = {
          referenceClippingOffsets: o,
          popperEscapeOffsets: i,
          isReferenceHidden: r,
          hasPopperEscaped: s,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": r,
            "data-popper-escaped": s,
          }));
      },
    },
    it = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          i = e.options,
          s = ((e = e.name), void 0 === (i = i.offset) ? [0, 0] : i),
          n =
            ((i = ce.reduce(function (e, i) {
              return (
                (e[i] =
                  ((i = i),
                  (n = t.rects),
                  (o = s),
                  (r = _e(i)),
                  (a = 0 <= [re, se].indexOf(r) ? -1 : 1),
                  (i =
                    (n =
                      "function" == typeof o
                        ? o(Object.assign({}, n, { placement: i }))
                        : o)[0] || 0),
                  (o = (n[1] || 0) * a),
                  0 <= [re, oe].indexOf(r) ? { x: o, y: i } : { x: i, y: o })),
                e
              );
              var n, o, r, a;
            }, {})),
            (o = i[t.placement]).x),
          o = o.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += n),
          (t.modifiersData.popperOffsets.y += o)),
          (t.modifiersData[e] = i);
      },
    },
    st = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state;
        e = e.name;
        t.modifiersData[e] = Qe({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    nt = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          i,
          s,
          n,
          o,
          r,
          a,
          l,
          c,
          h = e.state,
          d = e.options,
          u = ((e = e.name), void 0 === (u = d.mainAxis) || u),
          f = void 0 !== (f = d.altAxis) && f,
          p = d.boundary,
          m = d.rootBoundary,
          g = d.altBoundary,
          _ = d.padding,
          b = void 0 === (b = d.tether) || b,
          v =
            ((d = void 0 === (d = d.tetherOffset) ? 0 : d),
            (p = Ge(h, {
              boundary: p,
              rootBoundary: m,
              padding: _,
              altBoundary: g,
            })),
            (m = _e(h.placement)),
            (g = !(_ = Ye(h.placement))),
            "x" === (m = Ce(m)) ? "y" : "x"),
          y = h.modifiersData.popperOffsets,
          w = h.rects.reference,
          E = h.rects.popper,
          A =
            ((d =
              "function" == typeof d
                ? d(Object.assign({}, h.rects, { placement: h.placement }))
                : d),
            { x: 0, y: 0 });
        y &&
          ((u || f) &&
            ((o = "y" === m ? "height" : "width"),
            (t = y[m]),
            (i = y[m] + p[(c = "y" === m ? se : re)]),
            (s = y[m] - p[(a = "y" === m ? ne : oe)]),
            (r = b ? -E[o] / 2 : 0),
            (n = ("start" === _ ? w : E)[o]),
            (_ = "start" === _ ? -E[o] : -w[o]),
            (E = h.elements.arrow),
            (E = b && E ? ve(E) : { width: 0, height: 0 }),
            (c = (l = h.modifiersData["arrow#persistent"]
              ? h.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 })[c]),
            (l = l[a]),
            (a = De(0, w[o], E[o])),
            (E = g ? w[o] / 2 - r - a - c - d : n - a - c - d),
            (n = g ? -w[o] / 2 + r + a + l + d : _ + a + l + d),
            (g = (c = h.elements.arrow && Oe(h.elements.arrow))
              ? "y" === m
                ? c.clientTop || 0
                : c.clientLeft || 0
              : 0),
            (w = h.modifiersData.offset
              ? h.modifiersData.offset[h.placement][m]
              : 0),
            (o = y[m] + E - w - g),
            (r = y[m] + n - w),
            u &&
              ((_ = De(b ? Le(i, o) : i, t, b ? ke(s, r) : s)),
              (y[m] = _),
              (A[m] = _ - t)),
            f &&
              ((l = (a = y[v]) + p["x" === m ? se : re]),
              (d = a - p["x" === m ? ne : oe]),
              (c = De(b ? Le(l, o) : l, a, b ? ke(d, r) : d)),
              (y[v] = c),
              (A[v] = c - a))),
          (h.modifiersData[e] = A));
      },
      requiresIfExists: ["offset"],
    },
    ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function rt() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function at(e) {
    var t,
      i =
        void 0 === (t = (e = e = void 0 === e ? {} : e).defaultModifiers)
          ? []
          : t,
      s = void 0 === (t = e.defaultOptions) ? ot : t;
    return function (e, t, n) {
      void 0 === n && (n = s);
      var o,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, ot, s),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (n) {
            d(),
              (a.options = Object.assign({}, s, a.options, n)),
              (a.scrollParents = {
                reference: fe(e)
                  ? Ve(e)
                  : e.contextElement
                  ? Ve(e.contextElement)
                  : [],
                popper: Ve(t),
              }),
              (n = [].concat(i, a.options.modifiers)),
              (o = n.reduce(function (e, t) {
                var i = e[t.name];
                return (
                  (e[t.name] = i
                    ? Object.assign({}, i, t, {
                        options: Object.assign({}, i.options, t.options),
                        data: Object.assign({}, i.data, t.data),
                      })
                    : t),
                  e
                );
              }, {})),
              (n = n =
                Object.keys(o).map(function (e) {
                  return o[e];
                })),
              (r = new Map()),
              (c = new Set()),
              (u = []),
              n.forEach(function (e) {
                r.set(e.name, e);
              }),
              n.forEach(function (e) {
                c.has(e.name) ||
                  (function e(t) {
                    c.add(t.name),
                      []
                        .concat(t.requires || [], t.requiresIfExists || [])
                        .forEach(function (t) {
                          c.has(t) || ((t = r.get(t)) && e(t));
                        }),
                      u.push(t);
                  })(e);
              }),
              (f = u);
            var o, r, c, u, f;
            n = he.reduce(function (e, t) {
              return e.concat(
                f.filter(function (e) {
                  return e.phase === t;
                })
              );
            }, []);
            return (
              (a.orderedModifiers = n.filter(function (e) {
                return e.enabled;
              })),
              a.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options;
                "function" == typeof (e = e.effect) &&
                  ((e = e({
                    state: a,
                    name: t,
                    instance: h,
                    options: void 0 === i ? {} : i,
                  })),
                  l.push(e || function () {}));
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var e,
                t = (e = a.elements).reference;
              if (rt(t, (e = e.popper))) {
                (a.rects = {
                  reference:
                    ((t = t),
                    (r = Oe(e)),
                    void 0 === (l = "fixed" === a.options.strategy) && (l = !1),
                    (d = Ee(r)),
                    (t = be(t)),
                    (u = pe(r)),
                    (f = { scrollLeft: 0, scrollTop: 0 }),
                    (p = { x: 0, y: 0 }),
                    (!u && l) ||
                      (("body" === de(r) && !$e(d)) ||
                        (f =
                          (u = r) !== ue(u) && pe(u)
                            ? {
                                scrollLeft: u.scrollLeft,
                                scrollTop: u.scrollTop,
                              }
                            : Ue(u)),
                      pe(r)
                        ? (((p = be(r)).x += r.clientLeft),
                          (p.y += r.clientTop))
                        : d && (p.x = Fe(d))),
                    {
                      x: t.left + f.scrollLeft - p.x,
                      y: t.top + f.scrollTop - p.y,
                      width: t.width,
                      height: t.height,
                    }),
                  popper: ve(e),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (e) {
                    return (a.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var i, s, n, o = 0; o < a.orderedModifiers.length; o++)
                  !0 !== a.reset
                    ? ((i = (n = a.orderedModifiers[o]).fn),
                      (s = n.options),
                      (n = n.name),
                      "function" == typeof i &&
                        (a =
                          i({
                            state: a,
                            options: void 0 === s ? {} : s,
                            name: n,
                            instance: h,
                          }) || a))
                    : ((a.reset = !1), (o = -1));
              }
            }
            var r, l, d, u, f, p;
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                h.forceUpdate(), e(a);
              });
            }),
            function () {
              return (r =
                r ||
                new Promise(function (e) {
                  Promise.resolve().then(function () {
                    (r = void 0), e(o());
                  });
                }));
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      return (
        rt(e, t) &&
          h.setOptions(n).then(function (e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e);
          }),
        h
      );
      function d() {
        l.forEach(function (e) {
          return e();
        }),
          (l = []);
      }
    };
  }
  var lt = at(),
    ct = at({ defaultModifiers: [Re, st, Pe, ge] }),
    ht = at({ defaultModifiers: [Re, st, Pe, ge, it, Ze, nt, Ne, tt] }),
    dt = Object.freeze({
      __proto__: null,
      popperGenerator: at,
      detectOverflow: Ge,
      createPopperBase: lt,
      createPopper: ht,
      createPopperLite: ct,
      top: se,
      bottom: ne,
      right: oe,
      left: re,
      auto: "auto",
      basePlacements: ae,
      start: "start",
      end: "end",
      clippingParents: "clippingParents",
      viewport: "viewport",
      popper: "popper",
      reference: "reference",
      variationPlacements: le,
      placements: ce,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: he,
      applyStyles: ge,
      arrow: Ne,
      computeStyles: Pe,
      eventListeners: Re,
      flip: Ze,
      hide: tt,
      offset: it,
      popperOffsets: st,
      preventOverflow: nt,
    });
  const ut = new RegExp("ArrowUp|ArrowDown|Escape"),
    ft = g() ? "top-end" : "top-start",
    pt = g() ? "top-start" : "top-end",
    mt = g() ? "bottom-end" : "bottom-start",
    gt = g() ? "bottom-start" : "bottom-end",
    _t = g() ? "left-start" : "right-start",
    bt = g() ? "right-start" : "left-start",
    vt = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    yt = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class wt extends W {
    constructor(e, t) {
      super(e),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return vt;
    }
    static get DefaultType() {
      return yt;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      h(this._element) ||
        (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (!h(this._element) && !this._menu.classList.contains("show")) {
        const e = wt.getParentFromElement(this._element),
          t = { relatedTarget: this._element };
        if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
          if (this._inNavbar) $.setDataAttribute(this._menu, "popper", "none");
          else {
            if (void 0 === dt)
              throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let t = this._element;
            "parent" === this._config.reference
              ? (t = e)
              : r(this._config.reference)
              ? (t = a(this._config.reference))
              : "object" == typeof this._config.reference &&
                (t = this._config.reference);
            const i = this._getPopperConfig(),
              s = i.modifiers.find(
                (e) => "applyStyles" === e.name && !1 === e.enabled
              );
            (this._popper = ht(t, this._menu, i)),
              s && $.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement &&
            !e.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((e) => P.on(e, "mouseover", u)),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            P.trigger(this._element, "shown.bs.dropdown", t);
        }
      }
    }
    hide() {
      var e;
      !h(this._element) &&
        this._menu.classList.contains("show") &&
        ((e = { relatedTarget: this._element }), this._completeHide(e));
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      P.on(this._element, "click.bs.dropdown", (e) => {
        e.preventDefault(), this.toggle();
      });
    }
    _completeHide(e) {
      P.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((e) => P.off(e, "mouseover", u)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        $.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, "hidden.bs.dropdown", e));
    }
    _getConfig(e) {
      if (
        ((e = {
          ...this.constructor.Default,
          ...$.getDataAttributes(this._element),
          ...e,
        }),
        l("dropdown", e, this.constructor.DefaultType),
        "object" != typeof e.reference ||
          r(e.reference) ||
          "function" == typeof e.reference.getBoundingClientRect)
      )
        return e;
      throw new TypeError(
        "dropdown".toUpperCase() +
          ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
      );
    }
    _getMenuElement() {
      return e.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const e = this._element.parentNode;
      if (e.classList.contains("dropend")) return _t;
      if (e.classList.contains("dropstart")) return bt;
      var t =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? (t ? pt : ft) : t ? gt : mt;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const e = this._config.offset;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _getPopperConfig() {
      const e = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...e,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(e)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: i }) {
      const s = e
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(c);
      s.length && y(s, i, "ArrowDown" === t, !s.includes(i)).focus();
    }
    static dropdownInterface(e, t) {
      const i = wt.getOrCreateInstance(e, t);
      if ("string" == typeof t) {
        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    }
    static jQueryInterface(e) {
      return this.each(function () {
        wt.dropdownInterface(this, e);
      });
    }
    static clearMenus(t) {
      if (!t || (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))) {
        const i = e.find('[data-bs-toggle="dropdown"]');
        for (let e = 0, s = i.length; e < s; e++) {
          const s = wt.getInstance(i[e]);
          if (
            s &&
            !1 !== s._config.autoClose &&
            s._element.classList.contains("show")
          ) {
            const e = { relatedTarget: s._element };
            if (t) {
              const i = t.composedPath(),
                n = i.includes(s._menu);
              if (
                i.includes(s._element) ||
                ("inside" === s._config.autoClose && !n) ||
                ("outside" === s._config.autoClose && n)
              )
                continue;
              if (
                s._menu.contains(t.target) &&
                (("keyup" === t.type && "Tab" === t.key) ||
                  /input|select|option|textarea|form/i.test(t.target.tagName))
              )
                continue;
              "click" === t.type && (e.clickEvent = t);
            }
            s._completeHide(e);
          }
        }
      }
    }
    static getParentFromElement(e) {
      return n(e) || e.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? !(
              "Space" === t.key ||
              ("Escape" !== t.key &&
                (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                  t.target.closest(".dropdown-menu")))
            )
          : ut.test(t.key)
      ) {
        var i,
          s = this.classList.contains("show");
        if (
          (s || "Escape" !== t.key) &&
          (t.preventDefault(), t.stopPropagation(), !h(this))
        )
          return (
            (i = () =>
              this.matches('[data-bs-toggle="dropdown"]')
                ? this
                : e.prev(this, '[data-bs-toggle="dropdown"]')[0]),
            "Escape" === t.key
              ? (i().focus(), void wt.clearMenus())
              : "ArrowUp" === t.key || "ArrowDown" === t.key
              ? (s || i().click(), void wt.getInstance(i())._selectMenuItem(t))
              : void ((s && "Space" !== t.key) || wt.clearMenus())
          );
      }
    }
  }
  P.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    wt.dataApiKeydownHandler
  ),
    P.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      wt.dataApiKeydownHandler
    ),
    P.on(document, "click.bs.dropdown.data-api", wt.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", wt.clearMenus),
    P.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (e) {
        e.preventDefault(), wt.dropdownInterface(this);
      }
    ),
    _(wt);
  class Et {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      var e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      const e = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (t) => t + e),
        this._setElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (t) => t + e
        ),
        this._setElementAttributes(".sticky-top", "marginRight", (t) => t - e);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, t, i) {
      const s = this.getWidth();
      this._applyManipulationCallback(e, (e) => {
        var n;
        (e !== this._element && window.innerWidth > e.clientWidth + s) ||
          (this._saveInitialAttribute(e, t),
          (n = window.getComputedStyle(e)[t]),
          (e.style[t] = i(Number.parseFloat(n)) + "px"));
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight"
        ),
        this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(e, t) {
      var i = e.style[t];
      i && $.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, (e) => {
        var i = $.getDataAttribute(e, t);
        void 0 === i
          ? e.style.removeProperty(t)
          : ($.removeDataAttribute(e, t), (e.style[t] = i));
      });
    }
    _applyManipulationCallback(t, i) {
      r(t) ? i(t) : e.find(t, this._element).forEach(i);
    }
    isOverflowing() {
      return 0 < this.getWidth();
    }
  }
  const At = {
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Tt = {
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    };
  class Ot {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(e) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && f(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            b(e);
          }))
        : b(e);
    }
    hide(e) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), b(e);
          }))
        : b(e);
    }
    _getElement() {
      if (!this._element) {
        const e = document.createElement("div");
        (e.className = "modal-backdrop"),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e);
      }
      return this._element;
    }
    _getConfig(e) {
      return (
        ((e = { ...At, ...("object" == typeof e ? e : {}) }).rootElement = a(
          e.rootElement
        )),
        l("backdrop", e, Tt),
        e
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.appendChild(this._getElement()),
        P.on(this._getElement(), "mousedown.bs.backdrop", () => {
          b(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, "mousedown.bs.backdrop"),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(e) {
      v(e, this._getElement(), this._config.isAnimated);
    }
  }
  const Ct = { backdrop: !0, keyboard: !0, focus: !0 },
    kt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class Lt extends W {
    constructor(t, i) {
      super(t),
        (this._config = this._getConfig(i)),
        (this._dialog = e.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Et());
    }
    static get Default() {
      return Ct;
    }
    static get NAME() {
      return "modal";
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, "show.bs.modal", { relatedTarget: e })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(
          this._element,
          "click.dismiss.bs.modal",
          '[data-bs-dismiss="modal"]',
          (e) => this.hide(e)
        ),
        P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          P.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
            e.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(e)));
    }
    hide(e) {
      e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(),
        !this._isShown ||
          this._isTransitioning ||
          P.trigger(this._element, "hide.bs.modal").defaultPrevented ||
          ((this._isShown = !1),
          (e = this._isAnimated()) && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          P.off(document, "focusin.bs.modal"),
          this._element.classList.remove("show"),
          P.off(this._element, "click.dismiss.bs.modal"),
          P.off(this._dialog, "mousedown.dismiss.bs.modal"),
          this._queueCallback(() => this._hideModal(), this._element, e));
    }
    dispose() {
      [window, this._dialog].forEach((e) => P.off(e, ".bs.modal")),
        this._backdrop.dispose(),
        super.dispose(),
        P.off(document, "focusin.bs.modal");
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ot({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _getConfig(e) {
      return (
        (e = {
          ...Ct,
          ...$.getDataAttributes(this._element),
          ...("object" == typeof e ? e : {}),
        }),
        l("modal", e, kt),
        e
      );
    }
    _showElement(t) {
      const i = this._isAnimated(),
        s = e.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        s && (s.scrollTop = 0),
        i && f(this._element),
        this._element.classList.add("show"),
        this._config.focus && this._enforceFocus(),
        this._queueCallback(
          () => {
            this._config.focus && this._element.focus(),
              (this._isTransitioning = !1),
              P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          i
        );
    }
    _enforceFocus() {
      P.off(document, "focusin.bs.modal"),
        P.on(document, "focusin.bs.modal", (e) => {
          document === e.target ||
            this._element === e.target ||
            this._element.contains(e.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, "keydown.dismiss.bs.modal", (e) => {
            this._config.keyboard && "Escape" === e.key
              ? (e.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== e.key ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
        : P.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, "hidden.bs.modal");
        });
    }
    _showBackdrop(e) {
      P.on(this._element, "click.dismiss.bs.modal", (e) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : e.target === e.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(e);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (
        !P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented
      ) {
        const { classList: e, scrollHeight: t, style: i } = this._element,
          s = t > document.documentElement.clientHeight;
        (!s && "hidden" === i.overflowY) ||
          e.contains("modal-static") ||
          (s || (i.overflowY = "hidden"),
          e.add("modal-static"),
          this._queueCallback(() => {
            e.remove("modal-static"),
              s ||
                this._queueCallback(() => {
                  i.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
    }
    _adjustDialog() {
      var e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._scrollBar.getWidth(),
        i = 0 < t;
      ((!i && e && !g()) || (i && !e && g())) &&
        (this._element.style.paddingLeft = t + "px"),
        ((i && !e && !g()) || (!i && e && g())) &&
          (this._element.style.paddingRight = t + "px");
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, t) {
      return this.each(function () {
        const i = Lt.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e](t);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (e) {
      const t = n(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        P.one(t, "show.bs.modal", (e) => {
          e.defaultPrevented ||
            P.one(t, "hidden.bs.modal", () => {
              c(this) && this.focus();
            });
        }),
        Lt.getOrCreateInstance(t).toggle(this);
    }
  ),
    _(Lt);
  const xt = { backdrop: !0, keyboard: !0, scroll: !1 },
    Dt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class St extends W {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        this._addEventListeners();
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return xt;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll ||
          (new Et().hide(), this._enforceFocusOnElement(this._element)),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        this._queueCallback(
          () => {
            P.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: e,
            });
          },
          this._element,
          !0
        ));
    }
    hide() {
      !this._isShown ||
        P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
        (P.off(document, "focusin.bs.offcanvas"),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove("show"),
        this._backdrop.hide(),
        this._queueCallback(
          () => {
            this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._element.style.visibility = "hidden"),
              this._config.scroll || new Et().reset(),
              P.trigger(this._element, "hidden.bs.offcanvas");
          },
          this._element,
          !0
        ));
    }
    dispose() {
      this._backdrop.dispose(),
        super.dispose(),
        P.off(document, "focusin.bs.offcanvas");
    }
    _getConfig(e) {
      return (
        (e = {
          ...xt,
          ...$.getDataAttributes(this._element),
          ...("object" == typeof e ? e : {}),
        }),
        l("offcanvas", e, Dt),
        e
      );
    }
    _initializeBackDrop() {
      return new Ot({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _enforceFocusOnElement(e) {
      P.off(document, "focusin.bs.offcanvas"),
        P.on(document, "focusin.bs.offcanvas", (t) => {
          document === t.target ||
            e === t.target ||
            e.contains(t.target) ||
            e.focus();
        }),
        e.focus();
    }
    _addEventListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.offcanvas",
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        P.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
          this._config.keyboard && "Escape" === e.key && this.hide();
        });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = St.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw new TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      var i = n(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        h(this) ||
          (P.one(i, "hidden.bs.offcanvas", () => {
            c(this) && this.focus();
          }),
          (t = e.findOne(".offcanvas.show")) &&
            t !== i &&
            St.getInstance(t).hide(),
          St.getOrCreateInstance(i).toggle(this));
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () =>
      e.find(".offcanvas.show").forEach((e) => St.getOrCreateInstance(e).show())
    ),
    _(St);
  const It = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    jt =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Mt(e, t, i) {
    if (!e.length) return e;
    if (i && "function" == typeof i) return i(e);
    const s = new window.DOMParser().parseFromString(e, "text/html"),
      n = Object.keys(t),
      o = [].concat(...s.body.querySelectorAll("*"));
    for (let e = 0, i = o.length; e < i; e++) {
      const i = o[e],
        s = i.nodeName.toLowerCase();
      if (n.includes(s)) {
        const e = [].concat(...i.attributes),
          n = [].concat(t["*"] || [], t[s] || []);
        e.forEach((e) => {
          ((e, t) => {
            var i = e.nodeName.toLowerCase();
            if (t.includes(i))
              return (
                !It.has(i) ||
                Boolean(Nt.test(e.nodeValue) || jt.test(e.nodeValue))
              );
            const s = t.filter((e) => e instanceof RegExp);
            for (let e = 0, t = s.length; e < t; e++)
              if (s[e].test(i)) return !0;
            return !1;
          })(e, n) || i.removeAttribute(e.nodeName);
        });
      } else i.remove();
    }
    return s.body.innerHTML;
  }
  const Pt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Ht = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Rt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Bt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: g() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: g() ? "right" : "left",
    },
    Wt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    qt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class zt extends W {
    constructor(e, t) {
      if (void 0 === dt)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Wt;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return qt;
    }
    static get DefaultType() {
      return Rt;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(e) {
      if (this._isEnabled)
        if (e) {
          const t = this._initializeOnDelegatedTarget(e);
          (t._activeTrigger.click = !t._activeTrigger.click),
            t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
        } else
          this.getTipElement().classList.contains("show")
            ? this._leave(null, this)
            : this._enter(null, this);
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip && this.tip.remove(),
        this._popper && this._popper.destroy(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (this.isWithContent() && this._isEnabled) {
        const i = P.trigger(this._element, this.constructor.Event.SHOW),
          s = d(this._element),
          n = (
            null === s ? this._element.ownerDocument.documentElement : s
          ).contains(this._element);
        if (!i.defaultPrevented && n) {
          const i = this.getTipElement(),
            s = t(this.constructor.NAME);
          i.setAttribute("id", s),
            this._element.setAttribute("aria-describedby", s),
            this.setContent(),
            this._config.animation && i.classList.add("fade");
          var e =
            "function" == typeof this._config.placement
              ? this._config.placement.call(this, i, this._element)
              : this._config.placement;
          e = this._getAttachment(e);
          this._addAttachmentClass(e);
          const n = this._config.container,
            o =
              (R(i, this.constructor.DATA_KEY, this),
              this._element.ownerDocument.documentElement.contains(this.tip) ||
                (n.appendChild(i),
                P.trigger(this._element, this.constructor.Event.INSERTED)),
              this._popper
                ? this._popper.update()
                : (this._popper = ht(
                    this._element,
                    i,
                    this._getPopperConfig(e)
                  )),
              i.classList.add("show"),
              "function" == typeof this._config.customClass
                ? this._config.customClass()
                : this._config.customClass);
          o && i.classList.add(...o.split(" ")),
            "ontouchstart" in document.documentElement &&
              [].concat(...document.body.children).forEach((e) => {
                P.on(e, "mouseover", u);
              }),
            (e = this.tip.classList.contains("fade")),
            this._queueCallback(
              () => {
                var e = this._hoverState;
                (this._hoverState = null),
                  P.trigger(this._element, this.constructor.Event.SHOWN),
                  "out" === e && this._leave(null, this);
              },
              this.tip,
              e
            );
        }
      }
    }
    hide() {
      if (this._popper) {
        const t = this.getTipElement();
        var e;
        P.trigger(this._element, this.constructor.Event.HIDE)
          .defaultPrevented ||
          (t.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => P.off(e, "mouseover", u)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          (e = this.tip.classList.contains("fade")),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                ("show" !== this._hoverState && t.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                P.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper &&
                  (this._popper.destroy(), (this._popper = null)));
            },
            this.tip,
            e
          ),
          (this._hoverState = ""));
      }
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const e = document.createElement("div");
      return (
        (e.innerHTML = this._config.template),
        (this.tip = e.children[0]),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(e.findOne(".tooltip-inner", t), this.getTitle()),
        t.classList.remove("fade", "show");
    }
    setElementContent(e, t) {
      if (null !== e)
        return r(t)
          ? ((t = a(t)),
            void (this._config.html
              ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t))
              : (e.textContent = t.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (t = Mt(t, this._config.allowList, this._config.sanitizeFn)),
                (e.innerHTML = t))
              : (e.textContent = t));
    }
    getTitle() {
      let e = this._element.getAttribute("data-bs-original-title");
      return (
        e ||
        ("function" == typeof this._config.title
          ? this._config.title.call(this._element)
          : this._config.title)
      );
    }
    updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
    _initializeOnDelegatedTarget(e, t) {
      var i = this.constructor.DATA_KEY;
      return (
        (t = t || B(e.delegateTarget, i)) ||
          ((t = new this.constructor(
            e.delegateTarget,
            this._getDelegateConfig()
          )),
          R(e.delegateTarget, i, t)),
        t
      );
    }
    _getOffset() {
      const e = this._config.offset;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _getPopperConfig(e) {
      return (
        (e = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (e) => this._handlePopperPlacementChange(e),
            },
          ],
          onFirstUpdate: (e) => {
            e.options.placement !== e.placement &&
              this._handlePopperPlacementChange(e);
          },
        }),
        {
          ...e,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(e)
            : this._config.popperConfig),
        }
      );
    }
    _addAttachmentClass(e) {
      this.getTipElement().classList.add(
        "bs-tooltip-" + this.updateAttachment(e)
      );
    }
    _getAttachment(e) {
      return Bt[e.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((e) => {
        var t;
        "click" === e
          ? P.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (e) => this.toggle(e)
            )
          : "manual" !== e &&
            ((t =
              "hover" === e
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN),
            (e =
              "hover" === e
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT),
            P.on(this._element, t, this._config.selector, (e) =>
              this._enter(e)
            ),
            P.on(this._element, e, this._config.selector, (e) =>
              this._leave(e)
            ));
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      var e = this._element.getAttribute("title"),
        t = typeof this._element.getAttribute("data-bs-original-title");
      (!e && "string" == t) ||
        (this._element.setAttribute("data-bs-original-title", e || ""),
        !e ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", e),
        this._element.setAttribute("title", ""));
    }
    _enter(e, t) {
      (t = this._initializeOnDelegatedTarget(e, t)),
        e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
        t.getTipElement().classList.contains("show") || "show" === t._hoverState
          ? (t._hoverState = "show")
          : (clearTimeout(t._timeout),
            (t._hoverState = "show"),
            t._config.delay && t._config.delay.show
              ? (t._timeout = setTimeout(() => {
                  "show" === t._hoverState && t.show();
                }, t._config.delay.show))
              : t.show());
    }
    _leave(e, t) {
      (t = this._initializeOnDelegatedTarget(e, t)),
        e &&
          (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
            t._element.contains(e.relatedTarget)),
        t._isWithActiveTrigger() ||
          (clearTimeout(t._timeout),
          (t._hoverState = "out"),
          t._config.delay && t._config.delay.hide
            ? (t._timeout = setTimeout(() => {
                "out" === t._hoverState && t.hide();
              }, t._config.delay.hide))
            : t.hide());
    }
    _isWithActiveTrigger() {
      for (const e in this._activeTrigger)
        if (this._activeTrigger[e]) return !0;
      return !1;
    }
    _getConfig(e) {
      const t = $.getDataAttributes(this._element);
      return (
        Object.keys(t).forEach((e) => {
          Ht.has(e) && delete t[e];
        }),
        ((e = {
          ...this.constructor.Default,
          ...t,
          ...("object" == typeof e && e ? e : {}),
        }).container = !1 === e.container ? document.body : a(e.container)),
        "number" == typeof e.delay &&
          (e.delay = { show: e.delay, hide: e.delay }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        l("tooltip", e, this.constructor.DefaultType),
        e.sanitize && (e.template = Mt(e.template, e.allowList, e.sanitizeFn)),
        e
      );
    }
    _getDelegateConfig() {
      const e = {};
      if (this._config)
        for (const t in this._config)
          this.constructor.Default[t] !== this._config[t] &&
            (e[t] = this._config[t]);
      return e;
    }
    _cleanTipClass() {
      const e = this.getTipElement(),
        t = e.getAttribute("class").match(Pt);
      null !== t &&
        0 < t.length &&
        t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
    }
    _handlePopperPlacementChange(e) {
      (e = e.state) &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = zt.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  _(zt);
  const Ut = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Ft = {
      ...zt.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    $t = { ...zt.DefaultType, content: "(string|element|function)" },
    Vt = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Kt extends zt {
    static get Default() {
      return Ft;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return Vt;
    }
    static get DefaultType() {
      return $t;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    getTipElement() {
      return (
        this.tip ||
          ((this.tip = super.getTipElement()),
          this.getTitle() || e.findOne(".popover-header", this.tip).remove(),
          this._getContent() || e.findOne(".popover-body", this.tip).remove()),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(e.findOne(".popover-header", t), this.getTitle());
      let i = this._getContent();
      "function" == typeof i && (i = i.call(this._element)),
        this.setElementContent(e.findOne(".popover-body", t), i),
        t.classList.remove("fade", "show");
    }
    _addAttachmentClass(e) {
      this.getTipElement().classList.add(
        "bs-popover-" + this.updateAttachment(e)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this._config.content
      );
    }
    _cleanTipClass() {
      const e = this.getTipElement(),
        t = e.getAttribute("class").match(Ut);
      null !== t &&
        0 < t.length &&
        t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = Kt.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  _(Kt);
  const Xt = { offset: 10, method: "auto", target: "" },
    Yt = { offset: "number", method: "string", target: "(string|element)" };
  class Qt extends W {
    constructor(e, t) {
      super(e),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(t)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Xt;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        i = "auto" === this._config.method ? t : this._config.method,
        n = "position" === i ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        e
          .find(this._selector)
          .map((t) => {
            const o = s(t),
              r = o ? e.findOne(o) : null;
            if (r) {
              const e = r.getBoundingClientRect();
              if (e.width || e.height) return [$[i](r).top + n, o];
            }
            return null;
          })
          .filter((e) => e)
          .sort((e, t) => e[0] - t[0])
          .forEach((e) => {
            this._offsets.push(e[0]), this._targets.push(e[1]);
          });
    }
    dispose() {
      P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(e) {
      if (
        "string" !=
          typeof (e = {
            ...Xt,
            ...$.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }).target &&
        r(e.target)
      ) {
        let i = e.target.id;
        i || ((i = t("scrollspy")), (e.target.id = i)), (e.target = "#" + i);
      }
      return l("scrollspy", e, Yt), e;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        i = this._config.offset + t - this._getOffsetHeight();
      if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
        const e = this._targets[this._targets.length - 1];
        this._activeTarget !== e && this._activate(e);
      } else {
        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
          return (this._activeTarget = null), void this._clear();
        for (let t = this._offsets.length; t--; )
          this._activeTarget !== this._targets[t] &&
            e >= this._offsets[t] &&
            (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
            this._activate(this._targets[t]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const i = this._selector
          .split(",")
          .map((e) => e + `[data-bs-target="${t}"],${e}[href="${t}"]`),
        s = e.findOne(i.join(","));
      s.classList.contains("dropdown-item")
        ? (e
            .findOne(".dropdown-toggle", s.closest(".dropdown"))
            .classList.add("active"),
          s.classList.add("active"))
        : (s.classList.add("active"),
          e.parents(s, ".nav, .list-group").forEach((t) => {
            e
              .prev(t, ".nav-link, .list-group-item")
              .forEach((e) => e.classList.add("active")),
              e.prev(t, ".nav-item").forEach((t) => {
                e.children(t, ".nav-link").forEach((e) =>
                  e.classList.add("active")
                );
              });
          })),
        P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      e.find(this._selector)
        .filter((e) => e.classList.contains("active"))
        .forEach((e) => e.classList.remove("active"));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = Qt.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    e.find('[data-bs-spy="scroll"]').forEach((e) => new Qt(e));
  }),
    _(Qt);
  class Gt extends W {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        !this._element.parentNode ||
        this._element.parentNode.nodeType !== Node.ELEMENT_NODE ||
        !this._element.classList.contains("active")
      ) {
        let i;
        const s = n(this._element),
          o = this._element.closest(".nav, .list-group");
        if (o) {
          const t =
            "UL" === o.nodeName || "OL" === o.nodeName
              ? ":scope > li > .active"
              : ".active";
          i = (i = e.find(t, o))[i.length - 1];
        }
        var t = i
          ? P.trigger(i, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        P.trigger(this._element, "show.bs.tab", { relatedTarget: i })
          .defaultPrevented ||
          (null !== t && t.defaultPrevented) ||
          (this._activate(this._element, o),
          (t = () => {
            P.trigger(i, "hidden.bs.tab", { relatedTarget: this._element }),
              P.trigger(this._element, "shown.bs.tab", { relatedTarget: i });
          }),
          s ? this._activate(s, s.parentNode, t) : t());
      }
    }
    _activate(t, i, s) {
      const n = (
          !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
            ? e.children(i, ".active")
            : e.find(":scope > li > .active", i)
        )[0],
        o = s && n && n.classList.contains("fade"),
        r = () => this._transitionComplete(t, n, s);
      n && o
        ? (n.classList.remove("show"), this._queueCallback(r, t, !0))
        : r();
    }
    _transitionComplete(t, i, s) {
      if (i) {
        i.classList.remove("active");
        const t = e.findOne(":scope > .dropdown-menu .active", i.parentNode);
        t && t.classList.remove("active"),
          "tab" === i.getAttribute("role") &&
            i.setAttribute("aria-selected", !1);
      }
      t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        f(t),
        t.classList.contains("fade") && t.classList.add("show");
      let n = t.parentNode;
      if (
        (n = n && "LI" === n.nodeName ? n.parentNode : n) &&
        n.classList.contains("dropdown-menu")
      ) {
        const i = t.closest(".dropdown");
        i &&
          e
            .find(".dropdown-toggle", i)
            .forEach((e) => e.classList.add("active")),
          t.setAttribute("aria-expanded", !0);
      }
      s && s();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = Gt.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (e) {
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        h(this) || Gt.getOrCreateInstance(this).show();
    }
  ),
    _(Gt);
  const Zt = { animation: "boolean", autohide: "boolean", delay: "number" },
    Jt = { animation: !0, autohide: !0, delay: 5e3 };
  class ei extends W {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Zt;
    }
    static get Default() {
      return Jt;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        f(this._element),
        this._element.classList.add("showing"),
        this._queueCallback(
          () => {
            this._element.classList.remove("showing"),
              this._element.classList.add("show"),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      !this._element.classList.contains("show") ||
        P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
        (this._element.classList.remove("show"),
        this._queueCallback(
          () => {
            this._element.classList.add("hide"),
              P.trigger(this._element, "hidden.bs.toast");
          },
          this._element,
          this._config.animation
        ));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        super.dispose();
    }
    _getConfig(e) {
      return (
        (e = {
          ...Jt,
          ...$.getDataAttributes(this._element),
          ...("object" == typeof e && e ? e : {}),
        }),
        l("toast", e, this.constructor.DefaultType),
        e
      );
    }
    _maybeScheduleHide() {
      !this._config.autohide ||
        this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      t
        ? this._clearTimeout()
        : ((e = e.relatedTarget),
          this._element === e ||
            this._element.contains(e) ||
            this._maybeScheduleHide());
    }
    _setListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.toast",
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      ),
        P.on(this._element, "mouseover.bs.toast", (e) =>
          this._onInteraction(e, !0)
        ),
        P.on(this._element, "mouseout.bs.toast", (e) =>
          this._onInteraction(e, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (e) =>
          this._onInteraction(e, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (e) =>
          this._onInteraction(e, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const t = ei.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  return (
    _(ei),
    {
      Alert: q,
      Button: z,
      Carousel: J,
      Collapse: ie,
      Dropdown: wt,
      Modal: Lt,
      Offcanvas: St,
      Popover: Kt,
      ScrollSpy: Qt,
      Tab: Gt,
      Toast: ei,
      Tooltip: zt,
    }
  );
});
