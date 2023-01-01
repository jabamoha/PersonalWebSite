!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.AOS = t());
})(this, function () {
  "use strict";
  function e() {
    return d.Date.now();
  }
  var t =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    o = "Expected a function",
    n = /^\s+|\s+$/g,
    i = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    r = /^0o[0-7]+$/i,
    s = parseInt,
    c = "object" == typeof t && t && t.Object === Object && t,
    u = "object" == typeof self && self && self.Object === Object && self,
    d = c || u || Function("return this")(),
    l = Object.prototype.toString,
    m = Math.max,
    f = Math.min;
  function p(e) {
    var t = typeof e;
    return e && ("object" == t || "function" == t);
  }
  function b(e) {
    if ("number" == typeof e) return e;
    if (
      "symbol" == typeof (t = e) ||
      (t && "object" == typeof t && "[object Symbol]" == l.call(t))
    )
      return NaN;
    if (
      "string" !=
      typeof (e = p(e)
        ? p((t = "function" == typeof e.valueOf ? e.valueOf() : e))
          ? t + ""
          : t
        : e)
    )
      return 0 === e ? e : +e;
    e = e.replace(n, "");
    var t = a.test(e);
    return t || r.test(e) ? s(e.slice(2), t ? 2 : 8) : i.test(e) ? NaN : +e;
  }
  function v() {
    return O.Date.now();
  }
  var g = function (t, n, i) {
      var a = !0,
        r = !0;
      if ("function" != typeof t) throw new TypeError(o);
      return (
        p(i) &&
          ((a = "leading" in i ? !!i.leading : a),
          (r = "trailing" in i ? !!i.trailing : r)),
        (function (t, n, i) {
          var a,
            r,
            s,
            c,
            u,
            d,
            l = 0,
            v = !1,
            g = !1,
            w = !0;
          if ("function" != typeof t) throw new TypeError(o);
          function y(e) {
            var o = a,
              n = r;
            return (a = r = void 0), (l = e), (c = t.apply(n, o));
          }
          function h(e) {
            var t = e - d;
            return void 0 === d || n <= t || t < 0 || (g && s <= e - l);
          }
          function k() {
            var t,
              o = e();
            if (h(o)) return x(o);
            u = setTimeout(k, ((t = n - (o - d)), g ? f(t, s - (o - l)) : t));
          }
          function x(e) {
            return (u = void 0), w && a ? y(e) : ((a = r = void 0), c);
          }
          function O() {
            var t = e(),
              o = h(t);
            if (((a = arguments), (r = this), (d = t), o)) {
              if (void 0 === u)
                return (l = t = d), (u = setTimeout(k, n)), v ? y(t) : c;
              if (g) return (u = setTimeout(k, n)), y(d);
            }
            return void 0 === u && (u = setTimeout(k, n)), c;
          }
          return (
            (n = b(n) || 0),
            p(i) &&
              ((v = !!i.leading),
              (s = (g = "maxWait" in i) ? m(b(i.maxWait) || 0, n) : s),
              (w = "trailing" in i ? !!i.trailing : w)),
            (O.cancel = function () {
              void 0 !== u && clearTimeout(u), (a = d = r = u = void (l = 0));
            }),
            (O.flush = function () {
              return void 0 === u ? c : x(e());
            }),
            O
          );
        })(t, n, { leading: a, maxWait: n, trailing: r })
      );
    },
    w = /^\s+|\s+$/g,
    y = /^[-+]0x[0-9a-f]+$/i,
    h = /^0b[01]+$/i,
    k = /^0o[0-7]+$/i,
    x = parseInt,
    O =
      ((c = "object" == typeof t && t && t.Object === Object && t),
      (u = "object" == typeof self && self && self.Object === Object && self),
      c || u || Function("return this")()),
    j = Object.prototype.toString,
    N = Math.max,
    E = Math.min;
  function z(e) {
    var t = typeof e;
    return e && ("object" == t || "function" == t);
  }
  function C(e) {
    if ("number" == typeof e) return e;
    if (
      "symbol" == typeof (t = e) ||
      (t && "object" == typeof t && "[object Symbol]" == j.call(t))
    )
      return NaN;
    if (
      "string" !=
      typeof (e = z(e)
        ? z((t = "function" == typeof e.valueOf ? e.valueOf() : e))
          ? t + ""
          : t
        : e)
    )
      return 0 === e ? e : +e;
    e = e.replace(w, "");
    var t = h.test(e);
    return t || k.test(e) ? x(e.slice(2), t ? 2 : 8) : y.test(e) ? NaN : +e;
  }
  function A(e, t, o) {
    var n,
      i,
      a,
      r,
      s,
      c,
      u = 0,
      d = !1,
      l = !1,
      m = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function f(t) {
      var o = n,
        a = i;
      return (n = i = void 0), (u = t), (r = e.apply(a, o));
    }
    function p(e) {
      var o = e - c;
      return void 0 === c || t <= o || o < 0 || (l && a <= e - u);
    }
    function b() {
      var e,
        o = v();
      if (p(o)) return g(o);
      s = setTimeout(b, ((e = t - (o - c)), l ? E(e, a - (o - u)) : e));
    }
    function g(e) {
      return (s = void 0), m && n ? f(e) : ((n = i = void 0), r);
    }
    function w() {
      var e = v(),
        o = p(e);
      if (((n = arguments), (i = this), (c = e), o)) {
        if (void 0 === s)
          return (u = e = c), (s = setTimeout(b, t)), d ? f(e) : r;
        if (l) return (s = setTimeout(b, t)), f(c);
      }
      return void 0 === s && (s = setTimeout(b, t)), r;
    }
    return (
      (t = C(t) || 0),
      z(o) &&
        ((d = !!o.leading),
        (a = (l = "maxWait" in o) ? N(C(o.maxWait) || 0, t) : a),
        (m = "trailing" in o ? !!o.trailing : m)),
      (w.cancel = function () {
        void 0 !== s && clearTimeout(s), (n = c = i = s = void (u = 0));
      }),
      (w.flush = function () {
        return void 0 === s ? r : g(v());
      }),
      w
    );
  }
  var q = function () {};
  function L(e) {
    e &&
      e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes);
        e = Array.prototype.slice.call(e.removedNodes);
        if (
          (function e(t) {
            var o,
              n = void 0;
            for (n = 0; n < t.length; n += 1) {
              if ((o = t[n]).dataset && o.dataset.aos) return 1;
              if (o.children && e(o.children)) return 1;
            }
          })(t.concat(e))
        )
          return q();
      });
  }
  function T() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }
  t = function (e, t, o) {
    return t && W(e.prototype, t), o && W(e, o), e;
  };
  var M =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o,
            n = arguments[t];
          for (o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    S =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    D =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    H =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    $ =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function W(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function P() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }
  function Y(e, t) {
    var o = void 0;
    R.ie11()
      ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
          detail: t,
        })
      : (o = new CustomEvent(e, { detail: t })),
      document.dispatchEvent(o);
  }
  function _(e) {
    for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
      (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
        (o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
        (e = e.offsetParent);
    return { top: o, left: t };
  }
  function B(e, t, o) {
    if (void 0 !== (e = e.getAttribute("data-aos-" + t))) {
      if ("true" === e) return !0;
      if ("false" === e) return !1;
    }
    return e || o;
  }
  function F() {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (e) {
      return { node: e };
    });
  }
  function I() {
    return document.all && !window.atob;
  }
  function K() {
    (Z =
      !!(0 < arguments.length && void 0 !== arguments[0] && arguments[0]) ||
      Z) &&
      ((X = V(X, ee)),
      U(X),
      window.addEventListener(
        "scroll",
        g(function () {
          U(X, ee.once);
        }, ee.throttleDelay)
      ));
  }
  function G() {
    if (((X = F()), Q(ee.disable) || I())) return J();
    K();
  }
  function J() {
    X.forEach(function (e, t) {
      e.node.removeAttribute("data-aos"),
        e.node.removeAttribute("data-aos-easing"),
        e.node.removeAttribute("data-aos-duration"),
        e.node.removeAttribute("data-aos-delay"),
        ee.initClassName && e.node.classList.remove(ee.initClassName),
        ee.animatedClassName && e.node.classList.remove(ee.animatedClassName);
    });
  }
  function Q(e) {
    return (
      !0 === e ||
      ("mobile" === e && R.mobile()) ||
      ("phone" === e && R.phone()) ||
      ("tablet" === e && R.tablet()) ||
      ("function" == typeof e && !0 === e())
    );
  }
  t(te, [
    {
      key: "phone",
      value: function () {
        var e = P();
        return !(!S.test(e) && !D.test(e.substr(0, 4)));
      },
    },
    {
      key: "mobile",
      value: function () {
        var e = P();
        return !(!H.test(e) && !$.test(e.substr(0, 4)));
      },
    },
    {
      key: "tablet",
      value: function () {
        return this.mobile() && !this.phone();
      },
    },
    {
      key: "ie11",
      value: function () {
        return (
          "-ms-scroll-limit" in document.documentElement.style &&
          "-ms-ime-align" in document.documentElement.style
        );
      },
    },
  ]);
  var R = new te(),
    U = function (e) {
      return e.forEach(function (e, t) {
        var o = e;
        e = window.pageYOffset;
        function n() {
          var e, t;
          o.animated &&
            ((e = s),
            (t = a.animatedClassNames) &&
              t.forEach(function (t) {
                return e.classList.remove(t);
              }),
            Y("aos:out", s),
            o.options.id && Y("aos:in:" + o.options.id, s),
            (o.animated = !1));
        }
        var i,
          a = o.options,
          r = o.position,
          s = o.node;
        o.data,
          a.mirror && e >= r.out && !a.once
            ? n()
            : e >= r.in
            ? o.animated ||
              ((i = s),
              (e = a.animatedClassNames) &&
                e.forEach(function (e) {
                  return i.classList.add(e);
                }),
              Y("aos:in", s),
              o.options.id && Y("aos:in:" + o.options.id, s),
              (o.animated = !0))
            : o.animated && !a.once && n();
      });
    },
    V = function (e, t) {
      return (
        e.forEach(function (e, o) {
          var n,
            i,
            a,
            r = B(e.node, "mirror", t.mirror),
            s = B(e.node, "once", t.once),
            c = B(e.node, "id"),
            u = t.useClassNames && e.node.getAttribute("data-aos");
          u = [t.animatedClassName]
            .concat(u ? u.split(" ") : [])
            .filter(function (e) {
              return "string" == typeof e;
            });
          t.initClassName && e.node.classList.add(t.initClassName),
            (e.position = {
              in: (function (e, t, o) {
                var n = window.innerHeight,
                  i = B(e, "anchor"),
                  a = B(e, "anchor-placement"),
                  r =
                    ((t = Number(B(e, "offset", a ? 0 : t))), (a = a || o), e),
                  s =
                    (i &&
                      document.querySelectorAll(i) &&
                      (r = document.querySelectorAll(i)[0]),
                    _(r).top - n);
                switch (a) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    s += r.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    s += r.offsetHeight;
                    break;
                  case "top-center":
                    s += n / 2;
                    break;
                  case "center-center":
                    s += n / 2 + r.offsetHeight / 2;
                    break;
                  case "bottom-center":
                    s += n / 2 + r.offsetHeight;
                    break;
                  case "top-top":
                    s += n;
                    break;
                  case "bottom-top":
                    s += n + r.offsetHeight;
                    break;
                  case "center-top":
                    s += n + r.offsetHeight / 2;
                }
                return s + t;
              })(e.node, t.offset, t.anchorPlacement),
              out:
                r &&
                ((n = e.node),
                (i = t.offset),
                window.innerHeight,
                (a = B(n, "anchor")),
                (i = B(n, "offset", i)),
                a &&
                  document.querySelectorAll(a) &&
                  (n = document.querySelectorAll(a)[0]),
                _(n).top + n.offsetHeight - i),
            }),
            (e.options = { once: s, mirror: r, animatedClassNames: u, id: c });
        }),
        e
      );
    },
    X = [],
    Z = !1,
    ee = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      mirror: !1,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
      useClassNames: !1,
      disableMutationObserver: !1,
      throttleDelay: 99,
      debounceDelay: 50,
    };
  function te() {
    if (!(this instanceof te))
      throw new TypeError("Cannot call a class as a function");
  }
  return {
    init: function (e) {
      return (
        (ee = M(ee, e)),
        (X = F()),
        ee.disableMutationObserver ||
          !!T() ||
          (console.info(
            '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
          ),
          (ee.disableMutationObserver = !0)),
        ee.disableMutationObserver ||
          (function (e, t) {
            var o = window.document,
              n = new (T())(L);
            (q = t),
              n.observe(o.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              });
          })(0, G),
        Q(ee.disable) || I()
          ? J()
          : (document
              .querySelector("body")
              .setAttribute("data-aos-easing", ee.easing),
            document
              .querySelector("body")
              .setAttribute("data-aos-duration", ee.duration),
            document
              .querySelector("body")
              .setAttribute("data-aos-delay", ee.delay),
            -1 === ["DOMContentLoaded", "load"].indexOf(ee.startEvent)
              ? document.addEventListener(ee.startEvent, function () {
                  K(!0);
                })
              : window.addEventListener("load", function () {
                  K(!0);
                }),
            "DOMContentLoaded" === ee.startEvent &&
              -1 < ["complete", "interactive"].indexOf(document.readyState) &&
              K(!0),
            window.addEventListener("resize", A(K, ee.debounceDelay, !0)),
            window.addEventListener(
              "orientationchange",
              A(K, ee.debounceDelay, !0)
            ),
            X)
      );
    },
    refresh: K,
    refreshHard: G,
  };
});
