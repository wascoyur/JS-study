!(function (e) {
  var t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (e, t, o) {
    "use strict";
    o.r(t);
    var n = function (e) {
      const t = document.querySelector("#timer-hours"),
        o = document.querySelector("#timer-minutes"),
        n = document.querySelector("#timer-seconds");
      let r = setInterval(
        function (c) {
          const a = (function () {
            const t = new Date().getTime(),
              o = (new Date(e).getTime() - t) / 1e3;
            let n = Math.floor(o % 60);
            n = n < 10 ? "0" + n : n;
            let r = Math.floor((o / 60) % 60);
            r = r < 10 ? "0" + r : r;
            let c = Math.floor((o / 60 / 60) % 24);
            return (
              (c = c < 10 ? "0" + c : c),
              { timeRemining: o, hourse: c, minutes: r, seconds: n }
            );
          })();
          (t.textContent = a.hourse),
            (o.textContent = a.minutes),
            (n.textContent = a.seconds),
            a.timeRemining <= 0 &&
              ((t.textContent = "00"),
              (o.textContent = "00"),
              (n.textContent = "00"),
              clearInterval(r));
        },
        1e3,
        e
      );
    };
    var r = () => {
      const e = document.querySelector(".menu"),
        t = document.querySelector("menu"),
        o = () => {
          t.classList.toggle("active-menu");
        };
      t.addEventListener("click", (e) => {
        let { target: t } = e;
        (t = t.closest("ul")), o();
      }),
        e.addEventListener("click", o);
    };
    var c = () => {
      const e = document.querySelector(".popup"),
        t = document.querySelectorAll(".popup-btn"),
        o = document.querySelector(".popup-close");
      t.forEach((t) => {
        t.addEventListener("click", () => {
          e.style.display = "block";
        });
      }),
        o.addEventListener("click", () => {
          e.style.display = "none";
        }),
        e.addEventListener("click", (t) => {
          let { target: o } = t;
          (o = o.closest(".popup-content")), o || (e.style.display = "none");
        });
    };
    var a = () => {
      const e = document.querySelector(".service-header"),
        t = document.querySelectorAll(".service-header-tab"),
        o = document.querySelectorAll(".service-tab");
      e.addEventListener("click", (e) => {
        let { target: n } = e;
        (n = n.closest(".service-header-tab")),
          n &&
            t.forEach((e, r) => {
              e === n &&
                ((e) => {
                  for (let n = 0; n < o.length; n++)
                    e === n
                      ? (o[n].classList.remove("d-none"),
                        t[n].classList.add("active"))
                      : (t[n].classList.remove("active"),
                        o[n].classList.add("d-none"));
                })(r);
            });
      });
    };
    var l = () => {
      const e = document.querySelectorAll(".portfolio-item"),
        t = document.querySelector(".portfolio-dots"),
        o = document.querySelector(".portfolio-content");
      e.forEach((e, o) => {
        const n = document.createElement("li");
        n.classList.add("dot"), t.append(n);
      });
      const n = document.querySelectorAll(".dot");
      let r,
        c = 0;
      const a = (e, t, o) => {
          e[t].classList.add(o);
        },
        l = (e, t, o) => {
          e[t].classList.remove(o);
        },
        s = (t) => {
          l(e, c, "portfolio-item-active"),
            l(n, c, "dot-active"),
            c++,
            c >= e.length && (c = 0),
            a(e, c, "portfolio-item-active"),
            a(n, c, "dot-active");
        },
        u = (e = 3e3) => {
          r = setInterval(s, e);
        };
      o.addEventListener("click", (t) => {
        t.preventDefault();
        const { target: o } = t;
        o.matches(".portfolio-btn, .dot") &&
          (l(e, c, "portfolio-item-active"),
          l(n, c, "dot-active"),
          o.matches(".next")
            ? (c++, c >= e.length && (c = 0))
            : o.matches(".prev")
            ? (c--, c < 0 && (c = e.length - 1))
            : o.matches(".dot") &&
              n.forEach((e, t) => {
                e === o && (c = t);
              }),
          a(e, c, "portfolio-item-active"),
          a(n, c, "dot-active"));
      }),
        o.addEventListener("mouseover", (e) => {
          (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) &&
            clearInterval(r);
        }),
        o.addEventListener("mouseout", (e) => {
          (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) &&
            u();
        }),
        u(1500);
    };
    var s = () => {
      const e = document.querySelectorAll("img.command__photo");
      let t = "s";
      const o = document.querySelector(".command");
      o.addEventListener("mouseover", (t) => {
        t.target.matches("img.command__photo") &&
          e.forEach((e) => {
            const o = e.getAttribute("src");
            t.target.getAttribute("src") === o &&
              e.addEventListener("mouseover", n(e));
          });
      }),
        o.addEventListener("mouseout", (t) => {
          t.target.matches("img.command__photo") &&
            e.forEach((e) => {
              const o = e.getAttribute("src");
              t.target.getAttribute("src") === o &&
                e.addEventListener("mouseout", r(e));
            });
        });
      const n = (e) => {
          t = e.getAttribute("src");
          const o = e.getAttribute("data-img");
          e.setAttribute("src", o);
        },
        r = (e) => {
          e.setAttribute("src", t);
        };
    };
    var u = (e) => {
      console.log(e);
      const t = document.querySelectorAll(e);
      t.forEach((e) => {
        e.addEventListener("input", () => {
          t.forEach((e) => {
            (e.value = e.value.replace(/e/g, "")), calc();
          });
        });
      });
    };
    var i = () => {
      const e = "Что-то пошло не так",
        t = "Спасибо, мы скоро с Вами свяжемся",
        o = document.getElementById("form1"),
        n = document.getElementById("form3"),
        r = document.createElement("div");
      (r.textContent = "Тестове сообщение "),
        o.addEventListener("submit", (n) => {
          n.preventDefault(), o.appendChild(r);
          const a = new FormData(o);
          let l = {};
          for (let e of a.entries()) l[e[0]] = e[1];
          c(l)
            .then((r.textContent = t))
            .catch((t) => {
              (r.textContent = e), console.error(t);
            }),
            o.reset();
        });
      const c = (o) =>
        new Promise((n, c) => {
          const a = new XMLHttpRequest();
          a.addEventListener("readystatechange", () => {
            (r.textContent = "Загрузка..."),
              4 === a.readyState &&
                (200 === a.status
                  ? ((r.textContent = t), n())
                  : ((r.textContent = e), c()));
          }),
            a.open("POST", "./server.php"),
            a.setRequestHeader("Content-Type", "application/json"),
            a.send(JSON.stringify(o));
        });
      n.addEventListener("submit", (o) => {
        o.preventDefault(), n.appendChild(r);
        const a = new FormData(n);
        let l = {};
        for (let e of a.entries()) l[e[0]] = e[1];
        c(l)
          .then((r.textContent = t))
          .catch((t) => {
            (r.textContent = e), console.error(t);
          }),
          n.reset();
      });
    };
    document.querySelectorAll("input[type='tel']");
    var d = (e) => {
      e.forEach((e) => {
        e.addEventListener("input", () => {
          console.log(e.value), (e.value = e.value.match(/^[0-9 ()+-]+$/g));
        });
      });
    };
    var m = (e) => {
      e.forEach((e) => {
        e.addEventListener("input", () => {
          console.log(e.value), (e.value = e.value.match(/[А-я]+$/g));
        });
      });
    };
    window.addEventListener("DOMContentLoaded", () => {
      n("11 may 2020 22:00:00"), r(), c(), a(), l();
      document.querySelector(".calc-block"),
        document.querySelector(".calc-type"),
        document.querySelector(".calc-square"),
        document.querySelector(".calc-day"),
        document.querySelector(".calc-count"),
        document.querySelector("#total");
      s(), u("input"), i();
      const e = document.querySelectorAll("input[type='tel']"),
        t = document.querySelectorAll("input[name='user_name']");
      d(e), m(t);
    });
  },
]);
