function hexToRgb(e) {
  return (
    (e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
      return t + t + a + a + i + i;
    })),
    (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))
      ? { r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16) }
      : null
  );
}
function clamp(e, t, a) {
  return Math.min(Math.max(e, t), a);
}
function isInArray(e, t) {
  return -1 < t.indexOf(e);
}
var pJS = function (e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el"),
      i =
        ((this.pJS = {
          canvas: { el: a, w: a.offsetWidth, h: a.offsetHeight },
          particles: {
            number: { value: 400, density: { enable: !0, value_area: 800 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#ff0000" },
              polygon: { nb_sides: 5 },
              image: { src: "", width: 100, height: 100 },
            },
            opacity: {
              value: 1,
              random: !1,
              anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
            },
            size: {
              value: 20,
              random: !1,
              anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
            },
            line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !0, mode: "grab" },
              onclick: { enable: !0, mode: "push" },
              resize: !0,
            },
            modes: {
              grab: { distance: 100, line_linked: { opacity: 1 } },
              bubble: { distance: 200, size: 80, duration: 0.4 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
            mouse: {},
          },
          retina_detect: !1,
          fn: { interact: {}, modes: {}, vendors: {} },
          tmp: {},
        }),
        this.pJS);
    t && Object.deepExtend(i, t),
      (i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance,
      }),
      (i.fn.retinaInit = function () {
        i.retina_detect && 1 < window.devicePixelRatio
          ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
          : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
          (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
          (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
          (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
          (i.particles.size.anim.speed =
            i.tmp.obj.size_anim_speed * i.canvas.pxratio),
          (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
          (i.particles.line_linked.distance =
            i.tmp.obj.line_linked_distance * i.canvas.pxratio),
          (i.interactivity.modes.grab.distance =
            i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
          (i.interactivity.modes.bubble.distance =
            i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
          (i.particles.line_linked.width =
            i.tmp.obj.line_linked_width * i.canvas.pxratio),
          (i.interactivity.modes.bubble.size =
            i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
          (i.interactivity.modes.repulse.distance =
            i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
      }),
      (i.fn.canvasInit = function () {
        i.canvas.ctx = i.canvas.el.getContext("2d");
      }),
      (i.fn.canvasSize = function () {
        (i.canvas.el.width = i.canvas.w),
          (i.canvas.el.height = i.canvas.h),
          i &&
            i.interactivity.events.resize &&
            window.addEventListener("resize", function () {
              (i.canvas.w = i.canvas.el.offsetWidth),
                (i.canvas.h = i.canvas.el.offsetHeight),
                i.tmp.retina &&
                  ((i.canvas.w *= i.canvas.pxratio),
                  (i.canvas.h *= i.canvas.pxratio)),
                (i.canvas.el.width = i.canvas.w),
                (i.canvas.el.height = i.canvas.h),
                i.particles.move.enable ||
                  (i.fn.particlesEmpty(),
                  i.fn.particlesCreate(),
                  i.fn.particlesDraw(),
                  i.fn.vendors.densityAutoParticles()),
                i.fn.vendors.densityAutoParticles();
            });
      }),
      (i.fn.canvasPaint = function () {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
      }),
      (i.fn.canvasClear = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
      }),
      (i.fn.particle = function (e, t, a) {
        (this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
          i.particles.size.anim.enable &&
            ((this.size_status = !1),
            (this.vs = i.particles.size.anim.speed / 100),
            i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
          (this.x = a ? a.x : Math.random() * i.canvas.w),
          (this.y = a ? a.y : Math.random() * i.canvas.h),
          this.x > i.canvas.w - 2 * this.radius
            ? (this.x = this.x - this.radius)
            : this.x < 2 * this.radius && (this.x = this.x + this.radius),
          this.y > i.canvas.h - 2 * this.radius
            ? (this.y = this.y - this.radius)
            : this.y < 2 * this.radius && (this.y = this.y + this.radius),
          i.particles.move.bounce && i.fn.vendors.checkOverlap(this, a),
          (this.color = {}),
          "object" == typeof e.value
            ? e.value instanceof Array
              ? ((a =
                  e.value[
                    Math.floor(Math.random() * i.particles.color.value.length)
                  ]),
                (this.color.rgb = hexToRgb(a)))
              : (null != e.value.r &&
                  null != e.value.g &&
                  null != e.value.b &&
                  (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b,
                  }),
                null != e.value.h &&
                  null != e.value.s &&
                  null != e.value.l &&
                  (this.color.hsl = {
                    h: e.value.h,
                    s: e.value.s,
                    l: e.value.l,
                  }))
            : "random" == e.value
            ? (this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0,
              })
            : "string" == typeof e.value &&
              ((this.color = e), (this.color.rgb = hexToRgb(this.color.value))),
          (this.opacity =
            (i.particles.opacity.random ? Math.random() : 1) *
            i.particles.opacity.value),
          i.particles.opacity.anim.enable &&
            ((this.opacity_status = !1),
            (this.vo = i.particles.opacity.anim.speed / 100),
            i.particles.opacity.anim.sync ||
              (this.vo = this.vo * Math.random()));
        var n = {};
        switch (i.particles.move.direction) {
          case "top":
            n = { x: 0, y: -1 };
            break;
          case "top-right":
            n = { x: 0.5, y: -0.5 };
            break;
          case "right":
            n = { x: 1, y: -0 };
            break;
          case "bottom-right":
            n = { x: 0.5, y: 0.5 };
            break;
          case "bottom":
            n = { x: 0, y: 1 };
            break;
          case "bottom-left":
            n = { x: -0.5, y: 1 };
            break;
          case "left":
            n = { x: -1, y: 0 };
            break;
          case "top-left":
            n = { x: -0.5, y: -0.5 };
            break;
          default:
            n = { x: 0, y: 0 };
        }
        i.particles.move.straight
          ? ((this.vx = n.x),
            (this.vy = n.y),
            i.particles.move.random &&
              ((this.vx = this.vx * Math.random()),
              (this.vy = this.vy * Math.random())))
          : ((this.vx = n.x + Math.random() - 0.5),
            (this.vy = n.y + Math.random() - 0.5)),
          (this.vx_i = this.vx),
          (this.vy_i = this.vy),
          "object" == typeof (a = i.particles.shape.type)
            ? a instanceof Array &&
              ((e = a[Math.floor(Math.random() * a.length)]), (this.shape = e))
            : (this.shape = a),
          "image" == this.shape &&
            ((e = i.particles.shape),
            (this.img = {
              src: e.image.src,
              ratio: e.image.width / e.image.height,
            }),
            this.img.ratio || (this.img.ratio = 1),
            "svg" == i.tmp.img_type &&
              null != i.tmp.source_svg &&
              (i.fn.vendors.createSvgImg(this),
              i.tmp.pushing && (this.img.loaded = !1)));
      }),
      (i.fn.particle.prototype.draw = function () {
        var e,
          t,
          a,
          n = this;
        switch (
          ((e = null != n.radius_bubble ? n.radius_bubble : n.radius),
          (t = null != n.opacity_bubble ? n.opacity_bubble : n.opacity),
          (t = n.color.rgb
            ? "rgba(" +
              n.color.rgb.r +
              "," +
              n.color.rgb.g +
              "," +
              n.color.rgb.b +
              "," +
              t +
              ")"
            : "hsla(" +
              n.color.hsl.h +
              "," +
              n.color.hsl.s +
              "%," +
              n.color.hsl.l +
              "%," +
              t +
              ")"),
          (i.canvas.ctx.fillStyle = t),
          i.canvas.ctx.beginPath(),
          n.shape)
        ) {
          case "circle":
            i.canvas.ctx.arc(n.x, n.y, e, 0, 2 * Math.PI, !1);
            break;
          case "edge":
            i.canvas.ctx.rect(n.x - e, n.y - e, 2 * e, 2 * e);
            break;
          case "triangle":
            i.fn.vendors.drawShape(
              i.canvas.ctx,
              n.x - e,
              n.y + e / 1.66,
              2 * e,
              3,
              2
            );
            break;
          case "polygon":
            i.fn.vendors.drawShape(
              i.canvas.ctx,
              n.x - e / (i.particles.shape.polygon.nb_sides / 3.5),
              n.y - e / 0.76,
              (2.66 * e) / (i.particles.shape.polygon.nb_sides / 3),
              i.particles.shape.polygon.nb_sides,
              1
            );
            break;
          case "star":
            i.fn.vendors.drawShape(
              i.canvas.ctx,
              n.x - (2 * e) / (i.particles.shape.polygon.nb_sides / 4),
              n.y - e / 1.52,
              (2 * e * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
              i.particles.shape.polygon.nb_sides,
              2
            );
            break;
          case "image":
            (a = "svg" == i.tmp.img_type ? n.img.obj : i.tmp.img_obj) &&
              i.canvas.ctx.drawImage(
                a,
                n.x - e,
                n.y - e,
                2 * e,
                (2 * e) / n.img.ratio
              );
        }
        i.canvas.ctx.closePath(),
          0 < i.particles.shape.stroke.width &&
            ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
            (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
            i.canvas.ctx.stroke()),
          i.canvas.ctx.fill();
      }),
      (i.fn.particlesCreate = function () {
        for (var e = 0; e < i.particles.number.value; e++)
          i.particles.array.push(
            new i.fn.particle(i.particles.color, i.particles.opacity.value)
          );
      }),
      (i.fn.particlesUpdate = function () {
        for (var e = 0; e < i.particles.array.length; e++) {
          var t,
            a = i.particles.array[e];
          if (
            (i.particles.move.enable &&
              ((t = i.particles.move.speed / 2),
              (a.x += a.vx * t),
              (a.y += a.vy * t)),
            i.particles.opacity.anim.enable &&
              (1 == a.opacity_status
                ? (a.opacity >= i.particles.opacity.value &&
                    (a.opacity_status = !1),
                  (a.opacity += a.vo))
                : (a.opacity <= i.particles.opacity.anim.opacity_min &&
                    (a.opacity_status = !0),
                  (a.opacity -= a.vo)),
              a.opacity < 0 && (a.opacity = 0)),
            i.particles.size.anim.enable &&
              (1 == a.size_status
                ? (a.radius >= i.particles.size.value && (a.size_status = !1),
                  (a.radius += a.vs))
                : (a.radius <= i.particles.size.anim.size_min &&
                    (a.size_status = !0),
                  (a.radius -= a.vs)),
              a.radius < 0 && (a.radius = 0)),
            (t =
              "bounce" == i.particles.move.out_mode
                ? {
                    x_left: a.radius,
                    x_right: i.canvas.w,
                    y_top: a.radius,
                    y_bottom: i.canvas.h,
                  }
                : {
                    x_left: -a.radius,
                    x_right: i.canvas.w + a.radius,
                    y_top: -a.radius,
                    y_bottom: i.canvas.h + a.radius,
                  }),
            "bounce" ===
              (a.x - a.radius > i.canvas.w
                ? ((a.x = t.x_left), (a.y = Math.random() * i.canvas.h))
                : a.x + a.radius < 0 &&
                  ((a.x = t.x_right), (a.y = Math.random() * i.canvas.h)),
              a.y - a.radius > i.canvas.h
                ? ((a.y = t.y_top), (a.x = Math.random() * i.canvas.w))
                : a.y + a.radius < 0 &&
                  ((a.y = t.y_bottom), (a.x = Math.random() * i.canvas.w)),
              i.particles.move.out_mode) &&
              ((a.x + a.radius > i.canvas.w || a.x - a.radius < 0) &&
                (a.vx = -a.vx),
              (a.y + a.radius > i.canvas.h || a.y - a.radius < 0) &&
                (a.vy = -a.vy)),
            isInArray("grab", i.interactivity.events.onhover.mode) &&
              i.fn.modes.grabParticle(a),
            (isInArray("bubble", i.interactivity.events.onhover.mode) ||
              isInArray("bubble", i.interactivity.events.onclick.mode)) &&
              i.fn.modes.bubbleParticle(a),
            (isInArray("repulse", i.interactivity.events.onhover.mode) ||
              isInArray("repulse", i.interactivity.events.onclick.mode)) &&
              i.fn.modes.repulseParticle(a),
            i.particles.line_linked.enable || i.particles.move.attract.enable)
          )
            for (var n = e + 1; n < i.particles.array.length; n++) {
              var s = i.particles.array[n];
              i.particles.line_linked.enable &&
                i.fn.interact.linkParticles(a, s),
                i.particles.move.attract.enable &&
                  i.fn.interact.attractParticles(a, s),
                i.particles.move.bounce && i.fn.interact.bounceParticles(a, s);
            }
        }
      }),
      (i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
          i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++)
          i.particles.array[e].draw();
      }),
      (i.fn.particlesEmpty = function () {
        i.particles.array = [];
      }),
      (i.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(i.fn.checkAnimFrame),
          cancelRequestAnimFrame(i.fn.drawAnimFrame),
          (i.tmp.source_svg = void 0),
          (i.tmp.img_obj = void 0),
          (i.tmp.count_svg = 0),
          i.fn.particlesEmpty(),
          i.fn.canvasClear(),
          i.fn.vendors.start();
      }),
      (i.fn.interact.linkParticles = function (e, t) {
        var a = e.x - t.x,
          n = e.y - t.y;
        (a = Math.sqrt(a * a + n * n)) <= i.particles.line_linked.distance &&
          0 <
            (n =
              i.particles.line_linked.opacity -
              a /
                (1 / i.particles.line_linked.opacity) /
                i.particles.line_linked.distance) &&
          ((a = i.particles.line_linked.color_rgb_line),
          (i.canvas.ctx.strokeStyle =
            "rgba(" + a.r + "," + a.g + "," + a.b + "," + n + ")"),
          (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
          i.canvas.ctx.beginPath(),
          i.canvas.ctx.moveTo(e.x, e.y),
          i.canvas.ctx.lineTo(t.x, t.y),
          i.canvas.ctx.stroke(),
          i.canvas.ctx.closePath());
      }),
      (i.fn.interact.attractParticles = function (e, t) {
        var a = e.x - t.x,
          n = e.y - t.y;
        Math.sqrt(a * a + n * n) <= i.particles.line_linked.distance &&
          ((a /= 1e3 * i.particles.move.attract.rotateX),
          (n /= 1e3 * i.particles.move.attract.rotateY),
          (e.vx -= a),
          (e.vy -= n),
          (t.vx += a),
          (t.vy += n));
      }),
      (i.fn.interact.bounceParticles = function (e, t) {
        var a = e.x - t.x,
          i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= e.radius + t.radius &&
          ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
      }),
      (i.fn.modes.pushParticles = function (e, t) {
        i.tmp.pushing = !0;
        for (var a = 0; a < e; a++)
          i.particles.array.push(
            new i.fn.particle(i.particles.color, i.particles.opacity.value, {
              x: t ? t.pos_x : Math.random() * i.canvas.w,
              y: t ? t.pos_y : Math.random() * i.canvas.h,
            })
          ),
            a == e - 1 &&
              (i.particles.move.enable || i.fn.particlesDraw(),
              (i.tmp.pushing = !1));
      }),
      (i.fn.modes.removeParticles = function (e) {
        i.particles.array.splice(0, e),
          i.particles.move.enable || i.fn.particlesDraw();
      }),
      (i.fn.modes.bubbleParticle = function (e) {
        function t() {
          (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
        }
        function a(t, a, n, s, r) {
          var c;
          t != a &&
            (i.tmp.bubble_duration_end
              ? null != n &&
                ((c =
                  t +
                  (t -
                    (s -
                      (v * (s - t)) / i.interactivity.modes.bubble.duration))),
                "size" == r && (e.radius_bubble = c),
                "opacity" == r && (e.opacity_bubble = c))
              : p <= i.interactivity.modes.bubble.distance
              ? (null != n ? n : s) != t &&
                ((c =
                  s - (v * (s - t)) / i.interactivity.modes.bubble.duration),
                "size" == r && (e.radius_bubble = c),
                "opacity" == r && (e.opacity_bubble = c))
              : ("size" == r && (e.radius_bubble = void 0),
                "opacity" == r && (e.opacity_bubble = void 0)));
        }
        var n, s, r, c, o, l, p, v;
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
          ? ((o = e.x - i.interactivity.mouse.pos_x),
            (l = e.y - i.interactivity.mouse.pos_y),
            (n =
              1 -
              (p = Math.sqrt(o * o + l * l)) /
                i.interactivity.modes.bubble.distance),
            p <= i.interactivity.modes.bubble.distance
              ? 0 <= n &&
                "mousemove" == i.interactivity.status &&
                (i.interactivity.modes.bubble.size != i.particles.size.value &&
                  (i.interactivity.modes.bubble.size > i.particles.size.value
                    ? 0 <=
                        (r =
                          e.radius + i.interactivity.modes.bubble.size * n) &&
                      (e.radius_bubble = r)
                    : ((s = e.radius - i.interactivity.modes.bubble.size),
                      (r = e.radius - s * n),
                      (e.radius_bubble = 0 < r ? r : 0))),
                i.interactivity.modes.bubble.opacity !=
                  i.particles.opacity.value &&
                  (i.interactivity.modes.bubble.opacity >
                  i.particles.opacity.value
                    ? (c = i.interactivity.modes.bubble.opacity * n) >
                        e.opacity &&
                      c <= i.interactivity.modes.bubble.opacity &&
                      (e.opacity_bubble = c)
                    : (c =
                        e.opacity -
                        (i.particles.opacity.value -
                          i.interactivity.modes.bubble.opacity) *
                          n) < e.opacity &&
                      c >= i.interactivity.modes.bubble.opacity &&
                      (e.opacity_bubble = c)))
              : t(),
            "mouseleave" == i.interactivity.status && t())
          : i.interactivity.events.onclick.enable &&
            isInArray("bubble", i.interactivity.events.onclick.mode) &&
            (i.tmp.bubble_clicking &&
              ((o = e.x - i.interactivity.mouse.click_pos_x),
              (l = e.y - i.interactivity.mouse.click_pos_y),
              (p = Math.sqrt(o * o + l * l)),
              (v =
                (new Date().getTime() - i.interactivity.mouse.click_time) /
                1e3) > i.interactivity.modes.bubble.duration &&
                (i.tmp.bubble_duration_end = !0),
              v > 2 * i.interactivity.modes.bubble.duration &&
                ((i.tmp.bubble_clicking = !1),
                (i.tmp.bubble_duration_end = !1))),
            i.tmp.bubble_clicking &&
              (a(
                i.interactivity.modes.bubble.size,
                i.particles.size.value,
                e.radius_bubble,
                e.radius,
                "size"
              ),
              a(
                i.interactivity.modes.bubble.opacity,
                i.particles.opacity.value,
                e.opacity_bubble,
                e.opacity,
                "opacity"
              )));
      }),
      (i.fn.modes.repulseParticle = function (e) {
        var t, a, n, s, r, c, o;
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
          ? ((t = e.x - i.interactivity.mouse.pos_x),
            (c = e.y - i.interactivity.mouse.pos_y),
            (a = t / (t = Math.sqrt(t * t + c * c))),
            (c /= t),
            (t = clamp(
              (1 / (n = i.interactivity.modes.repulse.distance)) *
                (-1 * Math.pow(t / n, 2) + 1) *
                n *
                100,
              0,
              50
            )),
            (a = { x: e.x + a * t, y: e.y + c * t }),
            "bounce" == i.particles.move.out_mode
              ? (0 < a.x - e.radius &&
                  a.x + e.radius < i.canvas.w &&
                  (e.x = a.x),
                0 < a.y - e.radius &&
                  a.y + e.radius < i.canvas.h &&
                  (e.y = a.y))
              : ((e.x = a.x), (e.y = a.y)))
          : i.interactivity.events.onclick.enable &&
            isInArray("repulse", i.interactivity.events.onclick.mode) &&
            (i.tmp.repulse_finish ||
              (i.tmp.repulse_count++,
              i.tmp.repulse_count == i.particles.array.length &&
                (i.tmp.repulse_finish = !0)),
            i.tmp.repulse_clicking
              ? ((n = Math.pow(i.interactivity.modes.repulse.distance / 6, 3)),
                (s = i.interactivity.mouse.click_pos_x - e.x),
                (r = i.interactivity.mouse.click_pos_y - e.y),
                (o = (-n / (c = s * s + r * r)) * 1),
                c <= n &&
                  (function () {
                    var t,
                      a = Math.atan2(r, s);
                    (e.vx = o * Math.cos(a)),
                      (e.vy = o * Math.sin(a)),
                      "bounce" == i.particles.move.out_mode &&
                        ((a = e.x + e.vx),
                        (t = e.y + e.vy),
                        (a + e.radius > i.canvas.w || a - e.radius < 0) &&
                          (e.vx = -e.vx),
                        (t + e.radius > i.canvas.h || t - e.radius < 0) &&
                          (e.vy = -e.vy));
                  })())
              : 0 == i.tmp.repulse_clicking &&
                ((e.vx = e.vx_i), (e.vy = e.vy_i)));
      }),
      (i.fn.modes.grabParticle = function (e) {
        var t, a;
        i.interactivity.events.onhover.enable &&
          "mousemove" == i.interactivity.status &&
          ((a = e.x - i.interactivity.mouse.pos_x),
          (t = e.y - i.interactivity.mouse.pos_y),
          (a = Math.sqrt(a * a + t * t)) <=
            i.interactivity.modes.grab.distance &&
            0 <
              (t =
                i.interactivity.modes.grab.line_linked.opacity -
                a /
                  (1 / i.interactivity.modes.grab.line_linked.opacity) /
                  i.interactivity.modes.grab.distance) &&
            ((a = i.particles.line_linked.color_rgb_line),
            (i.canvas.ctx.strokeStyle =
              "rgba(" + a.r + "," + a.g + "," + a.b + "," + t + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(
              i.interactivity.mouse.pos_x,
              i.interactivity.mouse.pos_y
            ),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath()));
      }),
      (i.fn.vendors.eventsListeners = function () {
        "window" == i.interactivity.detect_on
          ? (i.interactivity.el = window)
          : (i.interactivity.el = i.canvas.el),
          (i.interactivity.events.onhover.enable ||
            i.interactivity.events.onclick.enable) &&
            (i.interactivity.el.addEventListener("mousemove", function (e) {
              var t;
              (e =
                i.interactivity.el == window
                  ? ((t = e.clientX), e.clientY)
                  : ((t = e.offsetX || e.clientX), e.offsetY || e.clientY)),
                (i.interactivity.mouse.pos_x = t),
                (i.interactivity.mouse.pos_y = e),
                i.tmp.retina &&
                  ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                  (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
                (i.interactivity.status = "mousemove");
            }),
            i.interactivity.el.addEventListener("mouseleave", function (e) {
              (i.interactivity.mouse.pos_x = null),
                (i.interactivity.mouse.pos_y = null),
                (i.interactivity.status = "mouseleave");
            })),
          i.interactivity.events.onclick.enable &&
            i.interactivity.el.addEventListener("click", function () {
              if (
                ((i.interactivity.mouse.click_pos_x =
                  i.interactivity.mouse.pos_x),
                (i.interactivity.mouse.click_pos_y =
                  i.interactivity.mouse.pos_y),
                (i.interactivity.mouse.click_time = new Date().getTime()),
                i.interactivity.events.onclick.enable)
              )
                switch (i.interactivity.events.onclick.mode) {
                  case "push":
                    i.particles.move.enable ||
                    1 == i.interactivity.modes.push.particles_nb
                      ? i.fn.modes.pushParticles(
                          i.interactivity.modes.push.particles_nb,
                          i.interactivity.mouse
                        )
                      : 1 < i.interactivity.modes.push.particles_nb &&
                        i.fn.modes.pushParticles(
                          i.interactivity.modes.push.particles_nb
                        );
                    break;
                  case "remove":
                    i.fn.modes.removeParticles(
                      i.interactivity.modes.remove.particles_nb
                    );
                    break;
                  case "bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                  case "repulse":
                    (i.tmp.repulse_clicking = !0),
                      (i.tmp.repulse_count = 0),
                      (i.tmp.repulse_finish = !1),
                      setTimeout(function () {
                        i.tmp.repulse_clicking = !1;
                      }, 1e3 * i.interactivity.modes.repulse.duration);
                }
            });
      }),
      (i.fn.vendors.densityAutoParticles = function () {
        var e;
        i.particles.number.density.enable &&
          ((e = (i.canvas.el.width * i.canvas.el.height) / 1e3),
          i.tmp.retina && (e /= 2 * i.canvas.pxratio),
          (e =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area),
          (e = i.particles.array.length - e) < 0
            ? i.fn.modes.pushParticles(Math.abs(e))
            : i.fn.modes.removeParticles(e));
      }),
      (i.fn.vendors.checkOverlap = function (e, t) {
        for (var a = 0; a < i.particles.array.length; a++) {
          var n = i.particles.array[a],
            s = e.x - n.x,
            r = e.y - n.y;
          Math.sqrt(s * s + r * r) <= e.radius + n.radius &&
            ((e.x = t ? t.x : Math.random() * i.canvas.w),
            (e.y = t ? t.y : Math.random() * i.canvas.h),
            i.fn.vendors.checkOverlap(e));
        }
      }),
      (i.fn.vendors.createSvgImg = function (e) {
        var t = i.tmp.source_svg.replace(
            /#([0-9A-F]{3,6})/gi,
            function (t, a, i, n) {
              return e.color.rgb
                ? "rgba(" +
                    e.color.rgb.r +
                    "," +
                    e.color.rgb.g +
                    "," +
                    e.color.rgb.b +
                    "," +
                    e.opacity +
                    ")"
                : "hsla(" +
                    e.color.hsl.h +
                    "," +
                    e.color.hsl.s +
                    "%," +
                    e.color.hsl.l +
                    "%," +
                    e.opacity +
                    ")";
            }
          ),
          a =
            ((t = new Blob([t], { type: "image/svg+xml;charset=utf-8" })),
            window.URL || window.webkitURL || window),
          n = a.createObjectURL(t),
          s = new Image();
        s.addEventListener("load", function () {
          (e.img.obj = s),
            (e.img.loaded = !0),
            a.revokeObjectURL(n),
            i.tmp.count_svg++;
        }),
          (s.src = n);
      }),
      (i.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(i.fn.drawAnimFrame), a.remove(), (pJSDom = null);
      }),
      (i.fn.vendors.drawShape = function (e, t, a, i, n, s) {
        var r = n * s,
          c = ((n = n / s), Math.PI - (Math.PI * ((180 * (n - 2)) / n)) / 180);
        e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
        for (var o = 0; o < r; o++)
          e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
        e.fill(), e.restore();
      }),
      (i.fn.vendors.exportImg = function () {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank");
      }),
      (i.fn.vendors.loadImg = function (e) {
        var t, a;
        (i.tmp.img_error = void 0),
          "" != i.particles.shape.image.src
            ? "svg" == e
              ? ((t = new XMLHttpRequest()).open(
                  "GET",
                  i.particles.shape.image.src
                ),
                (t.onreadystatechange = function (e) {
                  4 == t.readyState &&
                    (200 == t.status
                      ? ((i.tmp.source_svg = e.currentTarget.response),
                        i.fn.vendors.checkBeforeDraw())
                      : (console.log("Error pJS - Image not found"),
                        (i.tmp.img_error = !0)));
                }),
                t.send())
              : ((a = new Image()).addEventListener("load", function () {
                  (i.tmp.img_obj = a), i.fn.vendors.checkBeforeDraw();
                }),
                (a.src = i.particles.shape.image.src))
            : (console.log("Error pJS - No image.src"), (i.tmp.img_error = !0));
      }),
      (i.fn.vendors.draw = function () {
        "image" == i.particles.shape.type
          ? "svg" == i.tmp.img_type
            ? i.tmp.count_svg >= i.particles.number.value
              ? (i.fn.particlesDraw(),
                i.particles.move.enable
                  ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                  : cancelRequestAnimFrame(i.fn.drawAnimFrame))
              : i.tmp.img_error ||
                (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : null != i.tmp.img_obj
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : (i.fn.particlesDraw(),
            i.particles.move.enable
              ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
              : cancelRequestAnimFrame(i.fn.drawAnimFrame));
      }),
      (i.fn.vendors.checkBeforeDraw = function () {
        "image" == i.particles.shape.type
          ? "svg" == i.tmp.img_type && null == i.tmp.source_svg
            ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
            : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
              i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
          : (i.fn.vendors.init(), i.fn.vendors.draw());
      }),
      (i.fn.vendors.init = function () {
        i.fn.retinaInit(),
          i.fn.canvasInit(),
          i.fn.canvasSize(),
          i.fn.canvasPaint(),
          i.fn.particlesCreate(),
          i.fn.vendors.densityAutoParticles(),
          (i.particles.line_linked.color_rgb_line = hexToRgb(
            i.particles.line_linked.color
          ));
      }),
      (i.fn.vendors.start = function () {
        isInArray("image", i.particles.shape.type)
          ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
              i.particles.shape.image.src.length - 3
            )),
            i.fn.vendors.loadImg(i.tmp.img_type))
          : i.fn.vendors.checkBeforeDraw();
      }),
      i.fn.vendors.eventsListeners(),
      i.fn.vendors.start();
  },
  Stats =
    ((Object.deepExtend = function (e, t) {
      for (var a in t)
        t[a] && t[a].constructor && t[a].constructor === Object
          ? ((e[a] = e[a] || {}), arguments.callee(e[a], t[a]))
          : (e[a] = t[a]);
      return e;
    }),
    (window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }),
    (window.cancelRequestAnimFrame =
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout),
    (window.pJSDom = []),
    (window.particlesJS = function (e, t) {
      "string" != typeof e && ((t = e), (e = "particles-js")),
        (e = e || "particles-js");
      var a = document.getElementById(e),
        i = "particles-js-canvas-el",
        n = a.getElementsByClassName(i);
      if (n.length) for (; 0 < n.length; ) a.removeChild(n[0]);
      var s = document.createElement("canvas");
      (s.className = i),
        (s.style.width = "100%"),
        (s.style.height = "100%"),
        null != document.getElementById(e).appendChild(s) &&
          pJSDom.push(new pJS(e, t));
    }),
    (window.particlesJS.load = function (e, t, a) {
      var i = new XMLHttpRequest();
      i.open("GET", t),
        (i.onreadystatechange = function (t) {
          4 == i.readyState &&
            (200 == i.status
              ? ((t = JSON.parse(t.currentTarget.response)),
                window.particlesJS(e, t),
                a && a())
              : (console.log("Error pJS - XMLHttpRequest status: " + i.status),
                console.log("Error pJS - File config not found")));
        }),
        i.send();
    }),
    function () {
      function e(e) {
        return n.appendChild(e.dom), e;
      }
      function t(e) {
        for (var t = 0; t < n.children.length; t++)
          n.children[t].style.display = t === e ? "block" : "none";
        i = e;
      }
      var a,
        i = 0,
        n = document.createElement("div"),
        s =
          ((n.style.cssText =
            "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
          n.addEventListener(
            "click",
            function (e) {
              e.preventDefault(), t(++i % n.children.length);
            },
            !1
          ),
          (performance || Date).now()),
        r = s,
        c = 0,
        o = e(new Stats.Panel("FPS", "#0ff", "#002")),
        l = e(new Stats.Panel("MS", "#0f0", "#020"));
      return (
        self.performance &&
          self.performance.memory &&
          (a = e(new Stats.Panel("MB", "#f08", "#201"))),
        t(0),
        {
          REVISION: 16,
          dom: n,
          addPanel: e,
          showPanel: t,
          begin: function () {
            s = (performance || Date).now();
          },
          end: function () {
            c++;
            var e,
              t = (performance || Date).now();
            return (
              l.update(t - s, 200),
              r + 1e3 < t &&
                (o.update((1e3 * c) / (t - r), 100), (r = t), (c = 0), a) &&
                ((e = performance.memory),
                a.update(
                  e.usedJSHeapSize / 1048576,
                  e.jsHeapSizeLimit / 1048576
                )),
              t
            );
          },
          update: function () {
            s = this.end();
          },
          domElement: n,
          setMode: t,
        }
      );
    });
(Stats.Panel = function (e, t, a) {
  var i = 1 / 0,
    n = 0,
    s = Math.round,
    r = s(window.devicePixelRatio || 1),
    c = 80 * r,
    o = 48 * r,
    l = 3 * r,
    p = 2 * r,
    v = 3 * r,
    d = 15 * r,
    m = 74 * r,
    u = 30 * r,
    y = document.createElement("canvas"),
    b =
      ((y.width = c),
      (y.height = o),
      (y.style.cssText = "width:80px;height:48px"),
      y.getContext("2d"));
  return (
    (b.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif"),
    (b.textBaseline = "top"),
    (b.fillStyle = a),
    b.fillRect(0, 0, c, o),
    (b.fillStyle = t),
    b.fillText(e, l, p),
    b.fillRect(v, d, m, u),
    (b.fillStyle = a),
    (b.globalAlpha = 0.9),
    b.fillRect(v, d, m, u),
    {
      dom: y,
      update: function (o, h) {
        (i = Math.min(i, o)),
          (n = Math.max(n, o)),
          (b.fillStyle = a),
          (b.globalAlpha = 1),
          b.fillRect(0, 0, c, d),
          (b.fillStyle = t),
          b.fillText(s(o) + " " + e + " (" + s(i) + "-" + s(n) + ")", l, p),
          b.drawImage(y, v + r, d, m - r, u, v, d, m - r, u),
          b.fillRect(v + m - r, d, r, u),
          (b.fillStyle = a),
          (b.globalAlpha = 0.9),
          b.fillRect(v + m - r, d, r, s((1 - o / h) * u));
      },
    }
  );
}),
  "object" == typeof module && (module.exports = Stats);
