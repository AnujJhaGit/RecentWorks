!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/dist/"),
    r((r.s = 27));
})([
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t, r) {
    !(function (t, r) {
      e.exports = r();
    })(0, function () {
      "use strict";
      var e = navigator.userAgent,
        t = navigator.platform,
        r = /gecko\/\d/i.test(e),
        n = /MSIE \d/.test(e),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        o = /Edge\/(\d+)/.exec(e),
        a = n || i || o,
        s = a && (n ? document.documentMode || 6 : +(o || i)[1]),
        l = !o && /WebKit\//.test(e),
        c = l && /Qt\/\d+\.\d+/.test(e),
        u = !o && /Chrome\/(\d+)/.exec(e),
        f = u && +u[1],
        h = /Opera\//.test(e),
        d = /Apple Computer/.test(navigator.vendor),
        p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        g = /PhantomJS/.test(e),
        m = d && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
        v = /Android/.test(e),
        y =
          m || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        b = m || /Mac/.test(t),
        w = /\bCrOS\b/.test(e),
        x = /win/i.test(t),
        C = h && e.match(/Version\/(\d*\.\d*)/);
      C && (C = Number(C[1])), C && C >= 15 && ((h = !1), (l = !0));
      var _ = b && (c || (h && (null == C || C < 12.11))),
        S = r || (a && s >= 9);
      function T(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var k,
        L = function (e, t) {
          var r = e.className,
            n = T(t).exec(r);
          if (n) {
            var i = r.slice(n.index + n[0].length);
            e.className = r.slice(0, n.index) + (i ? n[1] + i : "");
          }
        };
      function A(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function M(e, t) {
        return A(e).appendChild(t);
      }
      function O(e, t, r, n) {
        var i = document.createElement(e);
        if (
          (r && (i.className = r),
          n && (i.style.cssText = n),
          "string" == typeof t)
        )
          i.appendChild(document.createTextNode(t));
        else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
        return i;
      }
      function E(e, t, r, n) {
        var i = O(e, t, r, n);
        return i.setAttribute("role", "presentation"), i;
      }
      function R(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t);
        do {
          if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
        } while ((t = t.parentNode));
      }
      function N(e) {
        var t;
        try {
          t = e.activeElement;
        } catch (r) {
          t = e.body || null;
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
          t = t.shadowRoot.activeElement;
        return t;
      }
      function I(e, t) {
        var r = e.className;
        T(t).test(r) || (e.className += (r ? " " : "") + t);
      }
      function D(e, t) {
        for (var r = e.split(" "), n = 0; n < r.length; n++)
          r[n] && !T(r[n]).test(t) && (t += " " + r[n]);
        return t;
      }
      k = document.createRange
        ? function (e, t, r, n) {
            var i = document.createRange();
            return i.setEnd(n || e, r), i.setStart(e, t), i;
          }
        : function (e, t, r) {
            var n = document.body.createTextRange();
            try {
              n.moveToElementText(e.parentNode);
            } catch (e) {
              return n;
            }
            return (
              n.collapse(!0),
              n.moveEnd("character", r),
              n.moveStart("character", t),
              n
            );
          };
      var P = function (e) {
        e.select();
      };
      function H(e) {
        return e.display.wrapper.ownerDocument;
      }
      function $(e) {
        return H(e).defaultView;
      }
      function B(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
          return e.apply(null, t);
        };
      }
      function F(e, t, r) {
        for (var n in (t || (t = {}), e))
          !e.hasOwnProperty(n) ||
            (!1 === r && t.hasOwnProperty(n)) ||
            (t[n] = e[n]);
        return t;
      }
      function U(e, t, r, n, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = n || 0, a = i || 0; ; ) {
          var s = e.indexOf("\t", o);
          if (s < 0 || s >= t) return a + (t - o);
          (a += s - o), (a += r - (a % r)), (o = s + 1);
        }
      }
      m
        ? (P = function (e) {
            (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : a &&
          (P = function (e) {
            try {
              e.select();
            } catch (e) {}
          });
      var j = function () {
        (this.id = null),
          (this.f = null),
          (this.time = 0),
          (this.handler = B(this.onTimeout, this));
      };
      function W(e, t) {
        for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
        return -1;
      }
      (j.prototype.onTimeout = function (e) {
        (e.id = 0),
          e.time <= +new Date()
            ? e.f()
            : setTimeout(e.handler, e.time - +new Date());
      }),
        (j.prototype.set = function (e, t) {
          this.f = t;
          var r = +new Date() + e;
          (!this.id || r < this.time) &&
            (clearTimeout(this.id),
            (this.id = setTimeout(this.handler, e)),
            (this.time = r));
        });
      var z = 50,
        V = {
          toString: function () {
            return "CodeMirror.Pass";
          },
        },
        K = { scroll: !1 },
        q = { origin: "*mouse" },
        Y = { origin: "+move" };
      function G(e, t, r) {
        for (var n = 0, i = 0; ; ) {
          var o = e.indexOf("\t", n);
          -1 == o && (o = e.length);
          var a = o - n;
          if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
          if (((i += o - n), (n = o + 1), (i += r - (i % r)) >= t)) return n;
        }
      }
      var X = [""];
      function Z(e) {
        for (; X.length <= e; ) X.push(J(X) + " ");
        return X[e];
      }
      function J(e) {
        return e[e.length - 1];
      }
      function Q(e, t) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
        return r;
      }
      function ee() {}
      function te(e, t) {
        var r;
        return (
          Object.create
            ? (r = Object.create(e))
            : ((ee.prototype = e), (r = new ee())),
          t && F(t, r),
          r
        );
      }
      var re =
        /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function ne(e) {
        return (
          /\w/.test(e) ||
          (e > "" && (e.toUpperCase() != e.toLowerCase() || re.test(e)))
        );
      }
      function ie(e, t) {
        return t
          ? !!(t.source.indexOf("\\w") > -1 && ne(e)) || t.test(e)
          : ne(e);
      }
      function oe(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
        return !0;
      }
      var ae =
        /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function se(e) {
        return e.charCodeAt(0) >= 768 && ae.test(e);
      }
      function le(e, t, r) {
        for (; (r < 0 ? t > 0 : t < e.length) && se(e.charAt(t)); ) t += r;
        return t;
      }
      function ce(e, t, r) {
        for (var n = t > r ? -1 : 1; ; ) {
          if (t == r) return t;
          var i = (t + r) / 2,
            o = n < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == t) return e(o) ? t : r;
          e(o) ? (r = o) : (t = o + n);
        }
      }
      var ue = null;
      function fe(e, t, r) {
        var n;
        ue = null;
        for (var i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.from < t && o.to > t) return i;
          o.to == t && (o.from != o.to && "before" == r ? (n = i) : (ue = i)),
            o.from == t &&
              (o.from != o.to && "before" != r ? (n = i) : (ue = i));
        }
        return null != n ? n : ue;
      }
      var he = (function () {
        var e =
            "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          t =
            "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function r(r) {
          return r <= 247
            ? e.charAt(r)
            : 1424 <= r && r <= 1524
            ? "R"
            : 1536 <= r && r <= 1785
            ? t.charAt(r - 1536)
            : 1774 <= r && r <= 2220
            ? "r"
            : 8192 <= r && r <= 8203
            ? "w"
            : 8204 == r
            ? "b"
            : "L";
        }
        var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          i = /[stwN]/,
          o = /[LRr]/,
          a = /[Lb1n]/,
          s = /[1n]/;
        function l(e, t, r) {
          (this.level = e), (this.from = t), (this.to = r);
        }
        return function (e, t) {
          var c = "ltr" == t ? "L" : "R";
          if (0 == e.length || ("ltr" == t && !n.test(e))) return !1;
          for (var u = e.length, f = [], h = 0; h < u; ++h)
            f.push(r(e.charCodeAt(h)));
          for (var d = 0, p = c; d < u; ++d) {
            var g = f[d];
            "m" == g ? (f[d] = p) : (p = g);
          }
          for (var m = 0, v = c; m < u; ++m) {
            var y = f[m];
            "1" == y && "r" == v
              ? (f[m] = "n")
              : o.test(y) && ((v = y), "r" == y && (f[m] = "R"));
          }
          for (var b = 1, w = f[0]; b < u - 1; ++b) {
            var x = f[b];
            "+" == x && "1" == w && "1" == f[b + 1]
              ? (f[b] = "1")
              : "," != x ||
                w != f[b + 1] ||
                ("1" != w && "n" != w) ||
                (f[b] = w),
              (w = x);
          }
          for (var C = 0; C < u; ++C) {
            var _ = f[C];
            if ("," == _) f[C] = "N";
            else if ("%" == _) {
              var S = void 0;
              for (S = C + 1; S < u && "%" == f[S]; ++S);
              for (
                var T =
                    (C && "!" == f[C - 1]) || (S < u && "1" == f[S])
                      ? "1"
                      : "N",
                  k = C;
                k < S;
                ++k
              )
                f[k] = T;
              C = S - 1;
            }
          }
          for (var L = 0, A = c; L < u; ++L) {
            var M = f[L];
            "L" == A && "1" == M ? (f[L] = "L") : o.test(M) && (A = M);
          }
          for (var O = 0; O < u; ++O)
            if (i.test(f[O])) {
              var E = void 0;
              for (E = O + 1; E < u && i.test(f[E]); ++E);
              for (
                var R = "L" == (O ? f[O - 1] : c),
                  N = R == ("L" == (E < u ? f[E] : c)) ? (R ? "L" : "R") : c,
                  I = O;
                I < E;
                ++I
              )
                f[I] = N;
              O = E - 1;
            }
          for (var D, P = [], H = 0; H < u; )
            if (a.test(f[H])) {
              var $ = H;
              for (++H; H < u && a.test(f[H]); ++H);
              P.push(new l(0, $, H));
            } else {
              var B = H,
                F = P.length,
                U = "rtl" == t ? 1 : 0;
              for (++H; H < u && "L" != f[H]; ++H);
              for (var j = B; j < H; )
                if (s.test(f[j])) {
                  B < j && (P.splice(F, 0, new l(1, B, j)), (F += U));
                  var W = j;
                  for (++j; j < H && s.test(f[j]); ++j);
                  P.splice(F, 0, new l(2, W, j)), (F += U), (B = j);
                } else ++j;
              B < H && P.splice(F, 0, new l(1, B, H));
            }
          return (
            "ltr" == t &&
              (1 == P[0].level &&
                (D = e.match(/^\s+/)) &&
                ((P[0].from = D[0].length),
                P.unshift(new l(0, 0, D[0].length))),
              1 == J(P).level &&
                (D = e.match(/\s+$/)) &&
                ((J(P).to -= D[0].length),
                P.push(new l(0, u - D[0].length, u)))),
            "rtl" == t ? P.reverse() : P
          );
        };
      })();
      function de(e, t) {
        var r = e.order;
        return null == r && (r = e.order = he(e.text, t)), r;
      }
      var pe = [],
        ge = function (e, t, r) {
          if (e.addEventListener) e.addEventListener(t, r, !1);
          else if (e.attachEvent) e.attachEvent("on" + t, r);
          else {
            var n = e._handlers || (e._handlers = {});
            n[t] = (n[t] || pe).concat(r);
          }
        };
      function me(e, t) {
        return (e._handlers && e._handlers[t]) || pe;
      }
      function ve(e, t, r) {
        if (e.removeEventListener) e.removeEventListener(t, r, !1);
        else if (e.detachEvent) e.detachEvent("on" + t, r);
        else {
          var n = e._handlers,
            i = n && n[t];
          if (i) {
            var o = W(i, r);
            o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function ye(e, t) {
        var r = me(e, t);
        if (r.length)
          for (
            var n = Array.prototype.slice.call(arguments, 2), i = 0;
            i < r.length;
            ++i
          )
            r[i].apply(null, n);
      }
      function be(e, t, r) {
        return (
          "string" == typeof t &&
            (t = {
              type: t,
              preventDefault: function () {
                this.defaultPrevented = !0;
              },
            }),
          ye(e, r || t.type, e, t),
          Te(t) || t.codemirrorIgnore
        );
      }
      function we(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (
            var r =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              n = 0;
            n < t.length;
            ++n
          )
            -1 == W(r, t[n]) && r.push(t[n]);
      }
      function xe(e, t) {
        return me(e, t).length > 0;
      }
      function Ce(e) {
        (e.prototype.on = function (e, t) {
          ge(this, e, t);
        }),
          (e.prototype.off = function (e, t) {
            ve(this, e, t);
          });
      }
      function _e(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      }
      function Se(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
      }
      function Te(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue;
      }
      function ke(e) {
        _e(e), Se(e);
      }
      function Le(e) {
        return e.target || e.srcElement;
      }
      function Ae(e) {
        var t = e.which;
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button
              ? (t = 3)
              : 4 & e.button && (t = 2)),
          b && e.ctrlKey && 1 == t && (t = 3),
          t
        );
      }
      var Me,
        Oe,
        Ee = (function () {
          if (a && s < 9) return !1;
          var e = O("div");
          return "draggable" in e || "dragDrop" in e;
        })();
      function Re(e) {
        if (null == Me) {
          var t = O("span", "​");
          M(e, O("span", [t, document.createTextNode("x")])),
            0 != e.firstChild.offsetHeight &&
              (Me = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8));
        }
        var r = Me
          ? O("span", "​")
          : O(
              "span",
              " ",
              null,
              "display: inline-block; width: 1px; margin-right: -1px"
            );
        return r.setAttribute("cm-text", ""), r;
      }
      function Ne(e) {
        if (null != Oe) return Oe;
        var t = M(e, document.createTextNode("AخA")),
          r = k(t, 0, 1).getBoundingClientRect(),
          n = k(t, 1, 2).getBoundingClientRect();
        return A(e), !(!r || r.left == r.right) && (Oe = n.right - r.right < 3);
      }
      var Ie =
          3 != "\n\nb".split(/\n/).length
            ? function (e) {
                for (var t = 0, r = [], n = e.length; t <= n; ) {
                  var i = e.indexOf("\n", t);
                  -1 == i && (i = e.length);
                  var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                    a = o.indexOf("\r");
                  -1 != a
                    ? (r.push(o.slice(0, a)), (t += a + 1))
                    : (r.push(o), (t = i + 1));
                }
                return r;
              }
            : function (e) {
                return e.split(/\r\n?|\n/);
              },
        De = window.getSelection
          ? function (e) {
              try {
                return e.selectionStart != e.selectionEnd;
              } catch (e) {
                return !1;
              }
            }
          : function (e) {
              var t;
              try {
                t = e.ownerDocument.selection.createRange();
              } catch (e) {}
              return (
                !(!t || t.parentElement() != e) &&
                0 != t.compareEndPoints("StartToEnd", t)
              );
            },
        Pe = (function () {
          var e = O("div");
          return (
            "oncopy" in e ||
            (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
          );
        })(),
        He = null;
      var $e = {},
        Be = {};
      function Fe(e) {
        if ("string" == typeof e && Be.hasOwnProperty(e)) e = Be[e];
        else if (e && "string" == typeof e.name && Be.hasOwnProperty(e.name)) {
          var t = Be[e.name];
          "string" == typeof t && (t = { name: t }),
            ((e = te(t, e)).name = t.name);
        } else {
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Fe("application/xml");
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Fe("application/json");
        }
        return "string" == typeof e ? { name: e } : e || { name: "null" };
      }
      function Ue(e, t) {
        t = Fe(t);
        var r = $e[t.name];
        if (!r) return Ue(e, "text/plain");
        var n = r(e, t);
        if (je.hasOwnProperty(t.name)) {
          var i = je[t.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (n.hasOwnProperty(o) && (n["_" + o] = n[o]), (n[o] = i[o]));
        }
        if (
          ((n.name = t.name),
          t.helperType && (n.helperType = t.helperType),
          t.modeProps)
        )
          for (var a in t.modeProps) n[a] = t.modeProps[a];
        return n;
      }
      var je = {};
      function We(e, t) {
        F(t, je.hasOwnProperty(e) ? je[e] : (je[e] = {}));
      }
      function ze(e, t) {
        if (!0 === t) return t;
        if (e.copyState) return e.copyState(t);
        var r = {};
        for (var n in t) {
          var i = t[n];
          i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
      }
      function Ve(e, t) {
        for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; )
          (t = r.state), (e = r.mode);
        return r || { mode: e, state: t };
      }
      function Ke(e, t, r) {
        return !e.startState || e.startState(t, r);
      }
      var qe = function (e, t, r) {
        (this.pos = this.start = 0),
          (this.string = e),
          (this.tabSize = t || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = r);
      };
      function Ye(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
          throw new Error(
            "There is no line " + (t + e.first) + " in the document."
          );
        for (var r = e; !r.lines; )
          for (var n = 0; ; ++n) {
            var i = r.children[n],
              o = i.chunkSize();
            if (t < o) {
              r = i;
              break;
            }
            t -= o;
          }
        return r.lines[t];
      }
      function Ge(e, t, r) {
        var n = [],
          i = t.line;
        return (
          e.iter(t.line, r.line + 1, function (e) {
            var o = e.text;
            i == r.line && (o = o.slice(0, r.ch)),
              i == t.line && (o = o.slice(t.ch)),
              n.push(o),
              ++i;
          }),
          n
        );
      }
      function Xe(e, t, r) {
        var n = [];
        return (
          e.iter(t, r, function (e) {
            n.push(e.text);
          }),
          n
        );
      }
      function Ze(e, t) {
        var r = t - e.height;
        if (r) for (var n = e; n; n = n.parent) n.height += r;
      }
      function Je(e) {
        if (null == e.parent) return null;
        for (
          var t = e.parent, r = W(t.lines, e), n = t.parent;
          n;
          t = n, n = n.parent
        )
          for (var i = 0; n.children[i] != t; ++i)
            r += n.children[i].chunkSize();
        return r + t.first;
      }
      function Qe(e, t) {
        var r = e.first;
        e: do {
          for (var n = 0; n < e.children.length; ++n) {
            var i = e.children[n],
              o = i.height;
            if (t < o) {
              e = i;
              continue e;
            }
            (t -= o), (r += i.chunkSize());
          }
          return r;
        } while (!e.lines);
        for (var a = 0; a < e.lines.length; ++a) {
          var s = e.lines[a].height;
          if (t < s) break;
          t -= s;
        }
        return r + a;
      }
      function et(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function tt(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function rt(e, t, r) {
        if ((void 0 === r && (r = null), !(this instanceof rt)))
          return new rt(e, t, r);
        (this.line = e), (this.ch = t), (this.sticky = r);
      }
      function nt(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function it(e, t) {
        return e.sticky == t.sticky && 0 == nt(e, t);
      }
      function ot(e) {
        return rt(e.line, e.ch);
      }
      function at(e, t) {
        return nt(e, t) < 0 ? t : e;
      }
      function st(e, t) {
        return nt(e, t) < 0 ? e : t;
      }
      function lt(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function ct(e, t) {
        if (t.line < e.first) return rt(e.first, 0);
        var r = e.first + e.size - 1;
        return t.line > r
          ? rt(r, Ye(e, r).text.length)
          : (function (e, t) {
              var r = e.ch;
              return null == r || r > t
                ? rt(e.line, t)
                : r < 0
                ? rt(e.line, 0)
                : e;
            })(t, Ye(e, t.line).text.length);
      }
      function ut(e, t) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = ct(e, t[n]);
        return r;
      }
      (qe.prototype.eol = function () {
        return this.pos >= this.string.length;
      }),
        (qe.prototype.sol = function () {
          return this.pos == this.lineStart;
        }),
        (qe.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        }),
        (qe.prototype.next = function () {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (qe.prototype.eat = function (e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t;
        }),
        (qe.prototype.eatWhile = function (e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t;
        }),
        (qe.prototype.eatSpace = function () {
          for (
            var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos;
          return this.pos > e;
        }),
        (qe.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        }),
        (qe.prototype.skipTo = function (e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return (this.pos = t), !0;
        }),
        (qe.prototype.backUp = function (e) {
          this.pos -= e;
        }),
        (qe.prototype.column = function () {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = U(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? U(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (qe.prototype.indentation = function () {
          return (
            U(this.string, null, this.tabSize) -
            (this.lineStart ? U(this.string, this.lineStart, this.tabSize) : 0)
          );
        }),
        (qe.prototype.match = function (e, t, r) {
          if ("string" != typeof e) {
            var n = this.string.slice(this.pos).match(e);
            return n && n.index > 0
              ? null
              : (n && !1 !== t && (this.pos += n[0].length), n);
          }
          var i = function (e) {
            return r ? e.toLowerCase() : e;
          };
          if (i(this.string.substr(this.pos, e.length)) == i(e))
            return !1 !== t && (this.pos += e.length), !0;
        }),
        (qe.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        }),
        (qe.prototype.hideFirstChars = function (e, t) {
          this.lineStart += e;
          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }),
        (qe.prototype.lookAhead = function (e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }),
        (qe.prototype.baseToken = function () {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        });
      var ft = function (e, t) {
          (this.state = e), (this.lookAhead = t);
        },
        ht = function (e, t, r, n) {
          (this.state = t),
            (this.doc = e),
            (this.line = r),
            (this.maxLookAhead = n || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      function dt(e, t, r, n) {
        var i = [e.state.modeGen],
          o = {};
        Ct(
          e,
          t.text,
          e.doc.mode,
          r,
          function (e, t) {
            return i.push(e, t);
          },
          o,
          n
        );
        for (
          var a = r.state,
            s = function (n) {
              r.baseTokens = i;
              var s = e.state.overlays[n],
                l = 1,
                c = 0;
              (r.state = !0),
                Ct(
                  e,
                  t.text,
                  s.mode,
                  r,
                  function (e, t) {
                    for (var r = l; c < e; ) {
                      var n = i[l];
                      n > e && i.splice(l, 1, e, i[l + 1], n),
                        (l += 2),
                        (c = Math.min(e, n));
                    }
                    if (t)
                      if (s.opaque)
                        i.splice(r, l - r, e, "overlay " + t), (l = r + 2);
                      else
                        for (; r < l; r += 2) {
                          var o = i[r + 1];
                          i[r + 1] = (o ? o + " " : "") + "overlay " + t;
                        }
                  },
                  o
                ),
                (r.state = a),
                (r.baseTokens = null),
                (r.baseTokenPos = 1);
            },
            l = 0;
          l < e.state.overlays.length;
          ++l
        )
          s(l);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function pt(e, t, r) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var n = gt(e, Je(t)),
            i =
              t.text.length > e.options.maxHighlightLength &&
              ze(e.doc.mode, n.state),
            o = dt(e, t, n);
          i && (n.state = i),
            (t.stateAfter = n.save(!i)),
            (t.styles = o.styles),
            o.classes
              ? (t.styleClasses = o.classes)
              : t.styleClasses && (t.styleClasses = null),
            r === e.doc.highlightFrontier &&
              (e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier
              ));
        }
        return t.styles;
      }
      function gt(e, t, r) {
        var n = e.doc,
          i = e.display;
        if (!n.mode.startState) return new ht(n, !0, t);
        var o = (function (e, t, r) {
            for (
              var n,
                i,
                o = e.doc,
                a = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                s = t;
              s > a;
              --s
            ) {
              if (s <= o.first) return o.first;
              var l = Ye(o, s - 1),
                c = l.stateAfter;
              if (
                c &&
                (!r ||
                  s + (c instanceof ft ? c.lookAhead : 0) <= o.modeFrontier)
              )
                return s;
              var u = U(l.text, null, e.options.tabSize);
              (null == i || n > u) && ((i = s - 1), (n = u));
            }
            return i;
          })(e, t, r),
          a = o > n.first && Ye(n, o - 1).stateAfter,
          s = a ? ht.fromSaved(n, a, o) : new ht(n, Ke(n.mode), o);
        return (
          n.iter(o, t, function (r) {
            mt(e, r.text, s);
            var n = s.line;
            (r.stateAfter =
              n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo)
                ? s.save()
                : null),
              s.nextLine();
          }),
          r && (n.modeFrontier = s.line),
          s
        );
      }
      function mt(e, t, r, n) {
        var i = e.doc.mode,
          o = new qe(t, e.options.tabSize, r);
        for (o.start = o.pos = n || 0, "" == t && vt(i, r.state); !o.eol(); )
          yt(i, o, r.state), (o.start = o.pos);
      }
      function vt(e, t) {
        if (e.blankLine) return e.blankLine(t);
        if (e.innerMode) {
          var r = Ve(e, t);
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
      }
      function yt(e, t, r, n) {
        for (var i = 0; i < 10; i++) {
          n && (n[0] = Ve(e, r).mode);
          var o = e.token(t, r);
          if (t.pos > t.start) return o;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      (ht.prototype.lookAhead = function (e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }),
        (ht.prototype.baseToken = function (e) {
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= e; )
            this.baseTokenPos += 2;
          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - e,
          };
        }),
        (ht.prototype.nextLine = function () {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (ht.fromSaved = function (e, t, r) {
          return t instanceof ft
            ? new ht(e, ze(e.mode, t.state), r, t.lookAhead)
            : new ht(e, ze(e.mode, t), r);
        }),
        (ht.prototype.save = function (e) {
          var t = !1 !== e ? ze(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ft(t, this.maxLookAhead) : t;
        });
      var bt = function (e, t, r) {
        (this.start = e.start),
          (this.end = e.pos),
          (this.string = e.current()),
          (this.type = t || null),
          (this.state = r);
      };
      function wt(e, t, r, n) {
        var i,
          o,
          a = e.doc,
          s = a.mode,
          l = Ye(a, (t = ct(a, t)).line),
          c = gt(e, t.line, r),
          u = new qe(l.text, e.options.tabSize, c);
        for (n && (o = []); (n || u.pos < t.ch) && !u.eol(); )
          (u.start = u.pos),
            (i = yt(s, u, c.state)),
            n && o.push(new bt(u, i, ze(a.mode, c.state)));
        return n ? o : new bt(u, i, c.state);
      }
      function xt(e, t) {
        if (e)
          for (;;) {
            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!r) break;
            e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
            var n = r[1] ? "bgClass" : "textClass";
            null == t[n]
              ? (t[n] = r[2])
              : new RegExp("(?:^|\\s)" + r[2] + "(?:$|\\s)").test(t[n]) ||
                (t[n] += " " + r[2]);
          }
        return e;
      }
      function Ct(e, t, r, n, i, o, a) {
        var s = r.flattenSpans;
        null == s && (s = e.options.flattenSpans);
        var l,
          c = 0,
          u = null,
          f = new qe(t, e.options.tabSize, n),
          h = e.options.addModeClass && [null];
        for ("" == t && xt(vt(r, n.state), o); !f.eol(); ) {
          if (
            (f.pos > e.options.maxHighlightLength
              ? ((s = !1),
                a && mt(e, t, n, f.pos),
                (f.pos = t.length),
                (l = null))
              : (l = xt(yt(r, f, n.state, h), o)),
            h)
          ) {
            var d = h[0].name;
            d && (l = "m-" + (l ? d + " " + l : d));
          }
          if (!s || u != l) {
            for (; c < f.start; ) i((c = Math.min(f.start, c + 5e3)), u);
            u = l;
          }
          f.start = f.pos;
        }
        for (; c < f.pos; ) {
          var p = Math.min(f.pos, c + 5e3);
          i(p, u), (c = p);
        }
      }
      var _t = !1,
        St = !1;
      function Tt(e, t, r) {
        (this.marker = e), (this.from = t), (this.to = r);
      }
      function kt(e, t) {
        if (e)
          for (var r = 0; r < e.length; ++r) {
            var n = e[r];
            if (n.marker == t) return n;
          }
      }
      function Lt(e, t) {
        for (var r, n = 0; n < e.length; ++n)
          e[n] != t && (r || (r = [])).push(e[n]);
        return r;
      }
      function At(e, t) {
        if (t.full) return null;
        var r = et(e, t.from.line) && Ye(e, t.from.line).markedSpans,
          n = et(e, t.to.line) && Ye(e, t.to.line).markedSpans;
        if (!r && !n) return null;
        var i = t.from.ch,
          o = t.to.ch,
          a = 0 == nt(t.from, t.to),
          s = (function (e, t, r) {
            var n;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  a = o.marker;
                if (
                  null == o.from ||
                  (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                  (o.from == t &&
                    "bookmark" == a.type &&
                    (!r || !o.marker.insertLeft))
                ) {
                  var s =
                    null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                  (n || (n = [])).push(new Tt(a, o.from, s ? null : o.to));
                }
              }
            return n;
          })(r, i, a),
          l = (function (e, t, r) {
            var n;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  a = o.marker;
                if (
                  null == o.to ||
                  (a.inclusiveRight ? o.to >= t : o.to > t) ||
                  (o.from == t &&
                    "bookmark" == a.type &&
                    (!r || o.marker.insertLeft))
                ) {
                  var s =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= t : o.from < t);
                  (n || (n = [])).push(
                    new Tt(
                      a,
                      s ? null : o.from - t,
                      null == o.to ? null : o.to - t
                    )
                  );
                }
              }
            return n;
          })(n, o, a),
          c = 1 == t.text.length,
          u = J(t.text).length + (c ? i : 0);
        if (s)
          for (var f = 0; f < s.length; ++f) {
            var h = s[f];
            if (null == h.to) {
              var d = kt(l, h.marker);
              d ? c && (h.to = null == d.to ? null : d.to + u) : (h.to = i);
            }
          }
        if (l)
          for (var p = 0; p < l.length; ++p) {
            var g = l[p];
            if ((null != g.to && (g.to += u), null == g.from))
              kt(s, g.marker) || ((g.from = u), c && (s || (s = [])).push(g));
            else (g.from += u), c && (s || (s = [])).push(g);
          }
        s && (s = Mt(s)), l && l != s && (l = Mt(l));
        var m = [s];
        if (!c) {
          var v,
            y = t.text.length - 2;
          if (y > 0 && s)
            for (var b = 0; b < s.length; ++b)
              null == s[b].to &&
                (v || (v = [])).push(new Tt(s[b].marker, null, null));
          for (var w = 0; w < y; ++w) m.push(v);
          m.push(l);
        }
        return m;
      }
      function Mt(e) {
        for (var t = 0; t < e.length; ++t) {
          var r = e[t];
          null != r.from &&
            r.from == r.to &&
            !1 !== r.marker.clearWhenEmpty &&
            e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function Ot(e) {
        var t = e.markedSpans;
        if (t) {
          for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Et(e, t) {
        if (t) {
          for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function Rt(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function Nt(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function It(e, t) {
        var r = e.lines.length - t.lines.length;
        if (0 != r) return r;
        var n = e.find(),
          i = t.find(),
          o = nt(n.from, i.from) || Rt(e) - Rt(t);
        if (o) return -o;
        var a = nt(n.to, i.to) || Nt(e) - Nt(t);
        return a || t.id - e.id;
      }
      function Dt(e, t) {
        var r,
          n = St && e.markedSpans;
        if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
            (i = n[o]).marker.collapsed &&
              null == (t ? i.from : i.to) &&
              (!r || It(r, i.marker) < 0) &&
              (r = i.marker);
        return r;
      }
      function Pt(e) {
        return Dt(e, !0);
      }
      function Ht(e) {
        return Dt(e, !1);
      }
      function $t(e, t) {
        var r,
          n = St && e.markedSpans;
        if (n)
          for (var i = 0; i < n.length; ++i) {
            var o = n[i];
            o.marker.collapsed &&
              (null == o.from || o.from < t) &&
              (null == o.to || o.to > t) &&
              (!r || It(r, o.marker) < 0) &&
              (r = o.marker);
          }
        return r;
      }
      function Bt(e, t, r, n, i) {
        var o = Ye(e, t),
          a = St && o.markedSpans;
        if (a)
          for (var s = 0; s < a.length; ++s) {
            var l = a[s];
            if (l.marker.collapsed) {
              var c = l.marker.find(0),
                u = nt(c.from, r) || Rt(l.marker) - Rt(i),
                f = nt(c.to, n) || Nt(l.marker) - Nt(i);
              if (
                !((u >= 0 && f <= 0) || (u <= 0 && f >= 0)) &&
                ((u <= 0 &&
                  (l.marker.inclusiveRight && i.inclusiveLeft
                    ? nt(c.to, r) >= 0
                    : nt(c.to, r) > 0)) ||
                  (u >= 0 &&
                    (l.marker.inclusiveRight && i.inclusiveLeft
                      ? nt(c.from, n) <= 0
                      : nt(c.from, n) < 0)))
              )
                return !0;
            }
          }
      }
      function Ft(e) {
        for (var t; (t = Pt(e)); ) e = t.find(-1, !0).line;
        return e;
      }
      function Ut(e, t) {
        var r = Ye(e, t),
          n = Ft(r);
        return r == n ? t : Je(n);
      }
      function jt(e, t) {
        if (t > e.lastLine()) return t;
        var r,
          n = Ye(e, t);
        if (!Wt(e, n)) return t;
        for (; (r = Ht(n)); ) n = r.find(1, !0).line;
        return Je(n) + 1;
      }
      function Wt(e, t) {
        var r = St && t.markedSpans;
        if (r)
          for (var n = void 0, i = 0; i < r.length; ++i)
            if ((n = r[i]).marker.collapsed) {
              if (null == n.from) return !0;
              if (
                !n.marker.widgetNode &&
                0 == n.from &&
                n.marker.inclusiveLeft &&
                zt(e, t, n)
              )
                return !0;
            }
      }
      function zt(e, t, r) {
        if (null == r.to) {
          var n = r.marker.find(1, !0);
          return zt(e, n.line, kt(n.line.markedSpans, r.marker));
        }
        if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
          if (
            (i = t.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == r.to &&
            (null == i.to || i.to != r.from) &&
            (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
            zt(e, t, i)
          )
            return !0;
      }
      function Vt(e) {
        for (
          var t = 0, r = (e = Ft(e)).parent, n = 0;
          n < r.lines.length;
          ++n
        ) {
          var i = r.lines[n];
          if (i == e) break;
          t += i.height;
        }
        for (var o = r.parent; o; o = (r = o).parent)
          for (var a = 0; a < o.children.length; ++a) {
            var s = o.children[a];
            if (s == r) break;
            t += s.height;
          }
        return t;
      }
      function Kt(e) {
        if (0 == e.height) return 0;
        for (var t, r = e.text.length, n = e; (t = Pt(n)); ) {
          var i = t.find(0, !0);
          (n = i.from.line), (r += i.from.ch - i.to.ch);
        }
        for (n = e; (t = Ht(n)); ) {
          var o = t.find(0, !0);
          (r -= n.text.length - o.from.ch),
            (r += (n = o.to.line).text.length - o.to.ch);
        }
        return r;
      }
      function qt(e) {
        var t = e.display,
          r = e.doc;
        (t.maxLine = Ye(r, r.first)),
          (t.maxLineLength = Kt(t.maxLine)),
          (t.maxLineChanged = !0),
          r.iter(function (e) {
            var r = Kt(e);
            r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
          });
      }
      var Yt = function (e, t, r) {
        (this.text = e), Et(this, t), (this.height = r ? r(this) : 1);
      };
      function Gt(e) {
        (e.parent = null), Ot(e);
      }
      (Yt.prototype.lineNo = function () {
        return Je(this);
      }),
        Ce(Yt);
      var Xt = {},
        Zt = {};
      function Jt(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        var r = t.addModeClass ? Zt : Xt;
        return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function Qt(e, t) {
        var r = E("span", null, null, l ? "padding-right: .1px" : null),
          n = {
            pre: E("pre", [r], "CodeMirror-line"),
            content: r,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption("lineWrapping"),
          };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
          var o = i ? t.rest[i - 1] : t.line,
            a = void 0;
          (n.pos = 0),
            (n.addToken = tr),
            Ne(e.display.measure) &&
              (a = de(o, e.doc.direction)) &&
              (n.addToken = rr(n.addToken, a)),
            (n.map = []),
            ir(o, n, pt(e, o, t != e.display.externalMeasured && Je(o))),
            o.styleClasses &&
              (o.styleClasses.bgClass &&
                (n.bgClass = D(o.styleClasses.bgClass, n.bgClass || "")),
              o.styleClasses.textClass &&
                (n.textClass = D(o.styleClasses.textClass, n.textClass || ""))),
            0 == n.map.length &&
              n.map.push(0, 0, n.content.appendChild(Re(e.display.measure))),
            0 == i
              ? ((t.measure.map = n.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (l) {
          var s = n.content.lastChild;
          (/\bcm-tab\b/.test(s.className) ||
            (s.querySelector && s.querySelector(".cm-tab"))) &&
            (n.content.className = "cm-tab-wrap-hack");
        }
        return (
          ye(e, "renderLine", e, t.line, n.pre),
          n.pre.className &&
            (n.textClass = D(n.pre.className, n.textClass || "")),
          n
        );
      }
      function er(e) {
        var t = O("span", "•", "cm-invalidchar");
        return (
          (t.title = "\\u" + e.charCodeAt(0).toString(16)),
          t.setAttribute("aria-label", t.title),
          t
        );
      }
      function tr(e, t, r, n, i, o, l) {
        if (t) {
          var c,
            u = e.splitSpaces
              ? (function (e, t) {
                  if (e.length > 1 && !/  /.test(e)) return e;
                  for (var r = t, n = "", i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    " " != o ||
                      !r ||
                      (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                      (o = " "),
                      (n += o),
                      (r = " " == o);
                  }
                  return n;
                })(t, e.trailingSpace)
              : t,
            f = e.cm.state.specialChars,
            h = !1;
          if (f.test(t)) {
            c = document.createDocumentFragment();
            for (var d = 0; ; ) {
              f.lastIndex = d;
              var p = f.exec(t),
                g = p ? p.index - d : t.length - d;
              if (g) {
                var m = document.createTextNode(u.slice(d, d + g));
                a && s < 9 ? c.appendChild(O("span", [m])) : c.appendChild(m),
                  e.map.push(e.pos, e.pos + g, m),
                  (e.col += g),
                  (e.pos += g);
              }
              if (!p) break;
              d += g + 1;
              var v = void 0;
              if ("\t" == p[0]) {
                var y = e.cm.options.tabSize,
                  b = y - (e.col % y);
                (v = c.appendChild(O("span", Z(b), "cm-tab"))).setAttribute(
                  "role",
                  "presentation"
                ),
                  v.setAttribute("cm-text", "\t"),
                  (e.col += b);
              } else
                "\r" == p[0] || "\n" == p[0]
                  ? ((v = c.appendChild(
                      O("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")
                    )).setAttribute("cm-text", p[0]),
                    (e.col += 1))
                  : ((v = e.cm.options.specialCharPlaceholder(
                      p[0]
                    )).setAttribute("cm-text", p[0]),
                    a && s < 9
                      ? c.appendChild(O("span", [v]))
                      : c.appendChild(v),
                    (e.col += 1));
              e.map.push(e.pos, e.pos + 1, v), e.pos++;
            }
          } else
            (e.col += t.length),
              (c = document.createTextNode(u)),
              e.map.push(e.pos, e.pos + t.length, c),
              a && s < 9 && (h = !0),
              (e.pos += t.length);
          if (
            ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
            r || n || i || h || o || l)
          ) {
            var w = r || "";
            n && (w += n), i && (w += i);
            var x = O("span", [c], w, o);
            if (l)
              for (var C in l)
                l.hasOwnProperty(C) &&
                  "style" != C &&
                  "class" != C &&
                  x.setAttribute(C, l[C]);
            return e.content.appendChild(x);
          }
          e.content.appendChild(c);
        }
      }
      function rr(e, t) {
        return function (r, n, i, o, a, s, l) {
          i = i ? i + " cm-force-border" : "cm-force-border";
          for (var c = r.pos, u = c + n.length; ; ) {
            for (
              var f = void 0, h = 0;
              h < t.length && !((f = t[h]).to > c && f.from <= c);
              h++
            );
            if (f.to >= u) return e(r, n, i, o, a, s, l);
            e(r, n.slice(0, f.to - c), i, o, null, s, l),
              (o = null),
              (n = n.slice(f.to - c)),
              (c = f.to);
          }
        };
      }
      function nr(e, t, r, n) {
        var i = !n && r.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
          !n &&
            e.cm.display.input.needsContentAttribute &&
            (i || (i = e.content.appendChild(document.createElement("span"))),
            i.setAttribute("cm-marker", r.id)),
          i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
          (e.pos += t),
          (e.trailingSpace = !1);
      }
      function ir(e, t, r) {
        var n = e.markedSpans,
          i = e.text,
          o = 0;
        if (n)
          for (
            var a, s, l, c, u, f, h, d = i.length, p = 0, g = 1, m = "", v = 0;
            ;

          ) {
            if (v == p) {
              (l = c = u = s = ""), (h = null), (f = null), (v = 1 / 0);
              for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                var x = n[w],
                  C = x.marker;
                if ("bookmark" == C.type && x.from == p && C.widgetNode)
                  y.push(C);
                else if (
                  x.from <= p &&
                  (null == x.to ||
                    x.to > p ||
                    (C.collapsed && x.to == p && x.from == p))
                ) {
                  if (
                    (null != x.to &&
                      x.to != p &&
                      v > x.to &&
                      ((v = x.to), (c = "")),
                    C.className && (l += " " + C.className),
                    C.css && (s = (s ? s + ";" : "") + C.css),
                    C.startStyle && x.from == p && (u += " " + C.startStyle),
                    C.endStyle &&
                      x.to == v &&
                      (b || (b = [])).push(C.endStyle, x.to),
                    C.title && ((h || (h = {})).title = C.title),
                    C.attributes)
                  )
                    for (var _ in C.attributes)
                      (h || (h = {}))[_] = C.attributes[_];
                  C.collapsed && (!f || It(f.marker, C) < 0) && (f = x);
                } else x.from > p && v > x.from && (v = x.from);
              }
              if (b)
                for (var S = 0; S < b.length; S += 2)
                  b[S + 1] == v && (c += " " + b[S]);
              if (!f || f.from == p)
                for (var T = 0; T < y.length; ++T) nr(t, 0, y[T]);
              if (f && (f.from || 0) == p) {
                if (
                  (nr(
                    t,
                    (null == f.to ? d + 1 : f.to) - p,
                    f.marker,
                    null == f.from
                  ),
                  null == f.to)
                )
                  return;
                f.to == p && (f = !1);
              }
            }
            if (p >= d) break;
            for (var k = Math.min(d, v); ; ) {
              if (m) {
                var L = p + m.length;
                if (!f) {
                  var A = L > k ? m.slice(0, k - p) : m;
                  t.addToken(
                    t,
                    A,
                    a ? a + l : l,
                    u,
                    p + A.length == v ? c : "",
                    s,
                    h
                  );
                }
                if (L >= k) {
                  (m = m.slice(k - p)), (p = k);
                  break;
                }
                (p = L), (u = "");
              }
              (m = i.slice(o, (o = r[g++]))), (a = Jt(r[g++], t.cm.options));
            }
          }
        else
          for (var M = 1; M < r.length; M += 2)
            t.addToken(t, i.slice(o, (o = r[M])), Jt(r[M + 1], t.cm.options));
      }
      function or(e, t, r) {
        (this.line = t),
          (this.rest = (function (e) {
            for (var t, r; (t = Ht(e)); )
              (e = t.find(1, !0).line), (r || (r = [])).push(e);
            return r;
          })(t)),
          (this.size = this.rest ? Je(J(this.rest)) - r + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = Wt(e, t));
      }
      function ar(e, t, r) {
        for (var n, i = [], o = t; o < r; o = n) {
          var a = new or(e.doc, Ye(e.doc, o), o);
          (n = o + a.size), i.push(a);
        }
        return i;
      }
      var sr = null;
      var lr = null;
      function cr(e, t) {
        var r = me(e, t);
        if (r.length) {
          var n,
            i = Array.prototype.slice.call(arguments, 2);
          sr
            ? (n = sr.delayedCallbacks)
            : lr
            ? (n = lr)
            : ((n = lr = []), setTimeout(ur, 0));
          for (
            var o = function (e) {
                n.push(function () {
                  return r[e].apply(null, i);
                });
              },
              a = 0;
            a < r.length;
            ++a
          )
            o(a);
        }
      }
      function ur() {
        var e = lr;
        lr = null;
        for (var t = 0; t < e.length; ++t) e[t]();
      }
      function fr(e, t, r, n) {
        for (var i = 0; i < t.changes.length; i++) {
          var o = t.changes[i];
          "text" == o
            ? pr(e, t)
            : "gutter" == o
            ? mr(e, t, r, n)
            : "class" == o
            ? gr(e, t)
            : "widget" == o && vr(e, t, n);
        }
        t.changes = null;
      }
      function hr(e) {
        return (
          e.node == e.text &&
            ((e.node = O("div", null, null, "position: relative")),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            a && s < 8 && (e.node.style.zIndex = 2)),
          e.node
        );
      }
      function dr(e, t) {
        var r = e.display.externalMeasured;
        return r && r.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = r.measure),
            r.built)
          : Qt(e, t);
      }
      function pr(e, t) {
        var r = t.text.className,
          n = dr(e, t);
        t.text == t.node && (t.node = n.pre),
          t.text.parentNode.replaceChild(n.pre, t.text),
          (t.text = n.pre),
          n.bgClass != t.bgClass || n.textClass != t.textClass
            ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), gr(e, t))
            : r && (t.text.className = r);
      }
      function gr(e, t) {
        !(function (e, t) {
          var r = t.bgClass
            ? t.bgClass + " " + (t.line.bgClass || "")
            : t.line.bgClass;
          if ((r && (r += " CodeMirror-linebackground"), t.background))
            r
              ? (t.background.className = r)
              : (t.background.parentNode.removeChild(t.background),
                (t.background = null));
          else if (r) {
            var n = hr(t);
            (t.background = n.insertBefore(O("div", null, r), n.firstChild)),
              e.display.input.setUneditable(t.background);
          }
        })(e, t),
          t.line.wrapClass
            ? (hr(t).className = t.line.wrapClass)
            : t.node != t.text && (t.node.className = "");
        var r = t.textClass
          ? t.textClass + " " + (t.line.textClass || "")
          : t.line.textClass;
        t.text.className = r || "";
      }
      function mr(e, t, r, n) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var i = hr(t);
          (t.gutterBackground = O(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " +
              (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
              "px; width: " +
              n.gutterTotalWidth +
              "px"
          )),
            e.display.input.setUneditable(t.gutterBackground),
            i.insertBefore(t.gutterBackground, t.text);
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
          var a = hr(t),
            s = (t.gutter = O(
              "div",
              null,
              "CodeMirror-gutter-wrapper",
              "left: " +
                (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                "px"
            ));
          if (
            (s.setAttribute("aria-hidden", "true"),
            e.display.input.setUneditable(s),
            a.insertBefore(s, t.text),
            t.line.gutterClass && (s.className += " " + t.line.gutterClass),
            !e.options.lineNumbers ||
              (o && o["CodeMirror-linenumbers"]) ||
              (t.lineNumber = s.appendChild(
                O(
                  "div",
                  tt(e.options, r),
                  "CodeMirror-linenumber CodeMirror-gutter-elt",
                  "left: " +
                    n.gutterLeft["CodeMirror-linenumbers"] +
                    "px; width: " +
                    e.display.lineNumInnerWidth +
                    "px"
                )
              )),
            o)
          )
            for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
              var c = e.display.gutterSpecs[l].className,
                u = o.hasOwnProperty(c) && o[c];
              u &&
                s.appendChild(
                  O(
                    "div",
                    [u],
                    "CodeMirror-gutter-elt",
                    "left: " +
                      n.gutterLeft[c] +
                      "px; width: " +
                      n.gutterWidth[c] +
                      "px"
                  )
                );
            }
        }
      }
      function vr(e, t, r) {
        t.alignable && (t.alignable = null);
        for (
          var n = T("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0;
          i;
          i = o
        )
          (o = i.nextSibling), n.test(i.className) && t.node.removeChild(i);
        br(e, t, r);
      }
      function yr(e, t, r, n) {
        var i = dr(e, t);
        return (
          (t.text = t.node = i.pre),
          i.bgClass && (t.bgClass = i.bgClass),
          i.textClass && (t.textClass = i.textClass),
          gr(e, t),
          mr(e, t, r, n),
          br(e, t, n),
          t.node
        );
      }
      function br(e, t, r) {
        if ((wr(e, t.line, t, r, !0), t.rest))
          for (var n = 0; n < t.rest.length; n++) wr(e, t.rest[n], t, r, !1);
      }
      function wr(e, t, r, n, i) {
        if (t.widgets)
          for (var o = hr(r), a = 0, s = t.widgets; a < s.length; ++a) {
            var l = s[a],
              c = O(
                "div",
                [l.node],
                "CodeMirror-linewidget" + (l.className ? " " + l.className : "")
              );
            l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
              xr(l, c, r, n),
              e.display.input.setUneditable(c),
              i && l.above
                ? o.insertBefore(c, r.gutter || r.text)
                : o.appendChild(c),
              cr(l, "redraw");
          }
      }
      function xr(e, t, r, n) {
        if (e.noHScroll) {
          (r.alignable || (r.alignable = [])).push(t);
          var i = n.wrapperWidth;
          (t.style.left = n.fixedPos + "px"),
            e.coverGutter ||
              ((i -= n.gutterTotalWidth),
              (t.style.paddingLeft = n.gutterTotalWidth + "px")),
            (t.style.width = i + "px");
        }
        e.coverGutter &&
          ((t.style.zIndex = 5),
          (t.style.position = "relative"),
          e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
      }
      function Cr(e) {
        if (null != e.height) return e.height;
        var t = e.doc.cm;
        if (!t) return 0;
        if (!R(document.body, e.node)) {
          var r = "position: relative;";
          e.coverGutter &&
            (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
            e.noHScroll &&
              (r += "width: " + t.display.wrapper.clientWidth + "px;"),
            M(t.display.measure, O("div", [e.node], null, r));
        }
        return (e.height = e.node.parentNode.offsetHeight);
      }
      function _r(e, t) {
        for (var r = Le(t); r != e.wrapper; r = r.parentNode)
          if (
            !r ||
            (1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events")) ||
            (r.parentNode == e.sizer && r != e.mover)
          )
            return !0;
      }
      function Sr(e) {
        return e.lineSpace.offsetTop;
      }
      function Tr(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function kr(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = M(e.measure, O("pre", "x", "CodeMirror-line-like")),
          r = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          n = {
            left: parseInt(r.paddingLeft),
            right: parseInt(r.paddingRight),
          };
        return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
      }
      function Lr(e) {
        return z - e.display.nativeBarWidth;
      }
      function Ar(e) {
        return e.display.scroller.clientWidth - Lr(e) - e.display.barWidth;
      }
      function Mr(e) {
        return e.display.scroller.clientHeight - Lr(e) - e.display.barHeight;
      }
      function Or(e, t, r) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var n = 0; n < e.rest.length; n++)
            if (e.rest[n] == t)
              return { map: e.measure.maps[n], cache: e.measure.caches[n] };
          for (var i = 0; i < e.rest.length; i++)
            if (Je(e.rest[i]) > r)
              return {
                map: e.measure.maps[i],
                cache: e.measure.caches[i],
                before: !0,
              };
        }
      }
      function Er(e, t, r, n) {
        return Ir(e, Nr(e, t), r, n);
      }
      function Rr(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[un(e, t)];
        var r = e.display.externalMeasured;
        return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
      }
      function Nr(e, t) {
        var r = Je(t),
          n = Rr(e, r);
        n && !n.text
          ? (n = null)
          : n && n.changes && (fr(e, n, r, on(e)), (e.curOp.forceUpdate = !0)),
          n ||
            (n = (function (e, t) {
              var r = Je((t = Ft(t))),
                n = (e.display.externalMeasured = new or(e.doc, t, r));
              n.lineN = r;
              var i = (n.built = Qt(e, n));
              return (n.text = i.pre), M(e.display.lineMeasure, i.pre), n;
            })(e, t));
        var i = Or(n, t, r);
        return {
          line: t,
          view: n,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1,
        };
      }
      function Ir(e, t, r, n, i) {
        t.before && (r = -1);
        var o,
          l = r + (n || "");
        return (
          t.cache.hasOwnProperty(l)
            ? (o = t.cache[l])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights ||
                (!(function (e, t, r) {
                  var n = e.options.lineWrapping,
                    i = n && Ar(e);
                  if (!t.measure.heights || (n && t.measure.width != i)) {
                    var o = (t.measure.heights = []);
                    if (n) {
                      t.measure.width = i;
                      for (
                        var a = t.text.firstChild.getClientRects(), s = 0;
                        s < a.length - 1;
                        s++
                      ) {
                        var l = a[s],
                          c = a[s + 1];
                        Math.abs(l.bottom - c.bottom) > 2 &&
                          o.push((l.bottom + c.top) / 2 - r.top);
                      }
                    }
                    o.push(r.bottom - r.top);
                  }
                })(e, t.view, t.rect),
                (t.hasHeights = !0)),
              (o = (function (e, t, r, n) {
                var i,
                  o = Hr(t.map, r, n),
                  l = o.node,
                  c = o.start,
                  u = o.end,
                  f = o.collapse;
                if (3 == l.nodeType) {
                  for (var h = 0; h < 4; h++) {
                    for (; c && se(t.line.text.charAt(o.coverStart + c)); ) --c;
                    for (
                      ;
                      o.coverStart + u < o.coverEnd &&
                      se(t.line.text.charAt(o.coverStart + u));

                    )
                      ++u;
                    if (
                      (i =
                        a && s < 9 && 0 == c && u == o.coverEnd - o.coverStart
                          ? l.parentNode.getBoundingClientRect()
                          : $r(k(l, c, u).getClientRects(), n)).left ||
                      i.right ||
                      0 == c
                    )
                      break;
                    (u = c), (c -= 1), (f = "right");
                  }
                  a &&
                    s < 11 &&
                    (i = (function (e, t) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function (e) {
                          if (null != He) return He;
                          var t = M(e, O("span", "x")),
                            r = t.getBoundingClientRect(),
                            n = k(t, 0, 1).getBoundingClientRect();
                          return (He = Math.abs(r.left - n.left) > 1);
                        })(e)
                      )
                        return t;
                      var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: t.left * r,
                        right: t.right * r,
                        top: t.top * n,
                        bottom: t.bottom * n,
                      };
                    })(e.display.measure, i));
                } else {
                  var d;
                  c > 0 && (f = n = "right"),
                    (i =
                      e.options.lineWrapping &&
                      (d = l.getClientRects()).length > 1
                        ? d["right" == n ? d.length - 1 : 0]
                        : l.getBoundingClientRect());
                }
                if (a && s < 9 && !c && (!i || (!i.left && !i.right))) {
                  var p = l.parentNode.getClientRects()[0];
                  i = p
                    ? {
                        left: p.left,
                        right: p.left + nn(e.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : Pr;
                }
                for (
                  var g = i.top - t.rect.top,
                    m = i.bottom - t.rect.top,
                    v = (g + m) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(v < y[b]);
                  b++
                );
                var w = b ? y[b - 1] : 0,
                  x = y[b],
                  C = {
                    left: ("right" == f ? i.right : i.left) - t.rect.left,
                    right: ("left" == f ? i.left : i.right) - t.rect.left,
                    top: w,
                    bottom: x,
                  };
                i.left || i.right || (C.bogus = !0);
                e.options.singleCursorHeightPerLine ||
                  ((C.rtop = g), (C.rbottom = m));
                return C;
              })(e, t, r, n)).bogus || (t.cache[l] = o)),
          {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom,
          }
        );
      }
      var Dr,
        Pr = { left: 0, right: 0, top: 0, bottom: 0 };
      function Hr(e, t, r) {
        for (var n, i, o, a, s, l, c = 0; c < e.length; c += 3)
          if (
            ((s = e[c]),
            (l = e[c + 1]),
            t < s
              ? ((i = 0), (o = 1), (a = "left"))
              : t < l
              ? (o = (i = t - s) + 1)
              : (c == e.length - 3 || (t == l && e[c + 3] > t)) &&
                ((i = (o = l - s) - 1), t >= l && (a = "right")),
            null != i)
          ) {
            if (
              ((n = e[c + 2]),
              s == l && r == (n.insertLeft ? "left" : "right") && (a = r),
              "left" == r && 0 == i)
            )
              for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                (n = e[2 + (c -= 3)]), (a = "left");
            if ("right" == r && i == l - s)
              for (
                ;
                c < e.length - 3 &&
                e[c + 3] == e[c + 4] &&
                !e[c + 5].insertLeft;

              )
                (n = e[(c += 3) + 2]), (a = "right");
            break;
          }
        return {
          node: n,
          start: i,
          end: o,
          collapse: a,
          coverStart: s,
          coverEnd: l,
        };
      }
      function $r(e, t) {
        var r = Pr;
        if ("left" == t)
          for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
        else
          for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--);
        return r;
      }
      function Br(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
      }
      function Fr(e) {
        (e.display.externalMeasure = null), A(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++) Br(e.display.view[t]);
      }
      function Ur(e) {
        Fr(e),
          (e.display.cachedCharWidth =
            e.display.cachedTextHeight =
            e.display.cachedPaddingH =
              null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null);
      }
      function jr(e) {
        return u && v
          ? -(
              e.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(e.body).marginLeft)
            )
          : e.defaultView.pageXOffset ||
              (e.documentElement || e.body).scrollLeft;
      }
      function Wr(e) {
        return u && v
          ? -(
              e.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(e.body).marginTop)
            )
          : e.defaultView.pageYOffset ||
              (e.documentElement || e.body).scrollTop;
      }
      function zr(e) {
        var t = Ft(e).widgets,
          r = 0;
        if (t) for (var n = 0; n < t.length; ++n) t[n].above && (r += Cr(t[n]));
        return r;
      }
      function Vr(e, t, r, n, i) {
        if (!i) {
          var o = zr(t);
          (r.top += o), (r.bottom += o);
        }
        if ("line" == n) return r;
        n || (n = "local");
        var a = Vt(t);
        if (
          ("local" == n ? (a += Sr(e.display)) : (a -= e.display.viewOffset),
          "page" == n || "window" == n)
        ) {
          var s = e.display.lineSpace.getBoundingClientRect();
          a += s.top + ("window" == n ? 0 : Wr(H(e)));
          var l = s.left + ("window" == n ? 0 : jr(H(e)));
          (r.left += l), (r.right += l);
        }
        return (r.top += a), (r.bottom += a), r;
      }
      function Kr(e, t, r) {
        if ("div" == r) return t;
        var n = t.left,
          i = t.top;
        if ("page" == r) (n -= jr(H(e))), (i -= Wr(H(e)));
        else if ("local" == r || !r) {
          var o = e.display.sizer.getBoundingClientRect();
          (n += o.left), (i += o.top);
        }
        var a = e.display.lineSpace.getBoundingClientRect();
        return { left: n - a.left, top: i - a.top };
      }
      function qr(e, t, r, n, i) {
        return n || (n = Ye(e.doc, t.line)), Vr(e, n, Er(e, n, t.ch, i), r);
      }
      function Yr(e, t, r, n, i, o) {
        function a(t, a) {
          var s = Ir(e, i, t, a ? "right" : "left", o);
          return a ? (s.left = s.right) : (s.right = s.left), Vr(e, n, s, r);
        }
        (n = n || Ye(e.doc, t.line)), i || (i = Nr(e, n));
        var s = de(n, e.doc.direction),
          l = t.ch,
          c = t.sticky;
        if (
          (l >= n.text.length
            ? ((l = n.text.length), (c = "before"))
            : l <= 0 && ((l = 0), (c = "after")),
          !s)
        )
          return a("before" == c ? l - 1 : l, "before" == c);
        function u(e, t, r) {
          var n = 1 == s[t].level;
          return a(r ? e - 1 : e, n != r);
        }
        var f = fe(s, l, c),
          h = ue,
          d = u(l, f, "before" == c);
        return null != h && (d.other = u(l, h, "before" != c)), d;
      }
      function Gr(e, t) {
        var r = 0;
        (t = ct(e.doc, t)),
          e.options.lineWrapping || (r = nn(e.display) * t.ch);
        var n = Ye(e.doc, t.line),
          i = Vt(n) + Sr(e.display);
        return { left: r, right: r, top: i, bottom: i + n.height };
      }
      function Xr(e, t, r, n, i) {
        var o = rt(e, t, r);
        return (o.xRel = i), n && (o.outside = n), o;
      }
      function Zr(e, t, r) {
        var n = e.doc;
        if ((r += e.display.viewOffset) < 0)
          return Xr(n.first, 0, null, -1, -1);
        var i = Qe(n, r),
          o = n.first + n.size - 1;
        if (i > o)
          return Xr(n.first + n.size - 1, Ye(n, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var a = Ye(n, i); ; ) {
          var s = tn(e, a, i, t, r),
            l = $t(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
          if (!l) return s;
          var c = l.find(1);
          if (c.line == i) return c;
          a = Ye(n, (i = c.line));
        }
      }
      function Jr(e, t, r, n) {
        n -= zr(t);
        var i = t.text.length,
          o = ce(
            function (t) {
              return Ir(e, r, t - 1).bottom <= n;
            },
            i,
            0
          );
        return {
          begin: o,
          end: (i = ce(
            function (t) {
              return Ir(e, r, t).top > n;
            },
            o,
            i
          )),
        };
      }
      function Qr(e, t, r, n) {
        return (
          r || (r = Nr(e, t)), Jr(e, t, r, Vr(e, t, Ir(e, r, n), "line").top)
        );
      }
      function en(e, t, r, n) {
        return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
      }
      function tn(e, t, r, n, i) {
        i -= Vt(t);
        var o = Nr(e, t),
          a = zr(t),
          s = 0,
          l = t.text.length,
          c = !0,
          u = de(t, e.doc.direction);
        if (u) {
          var f = (
            e.options.lineWrapping
              ? function (e, t, r, n, i, o, a) {
                  var s = Jr(e, t, n, a),
                    l = s.begin,
                    c = s.end;
                  /\s/.test(t.text.charAt(c - 1)) && c--;
                  for (var u = null, f = null, h = 0; h < i.length; h++) {
                    var d = i[h];
                    if (!(d.from >= c || d.to <= l)) {
                      var p = 1 != d.level,
                        g = Ir(
                          e,
                          n,
                          p ? Math.min(c, d.to) - 1 : Math.max(l, d.from)
                        ).right,
                        m = g < o ? o - g + 1e9 : g - o;
                      (!u || f > m) && ((u = d), (f = m));
                    }
                  }
                  u || (u = i[i.length - 1]);
                  u.from < l && (u = { from: l, to: u.to, level: u.level });
                  u.to > c && (u = { from: u.from, to: c, level: u.level });
                  return u;
                }
              : function (e, t, r, n, i, o, a) {
                  var s = ce(
                      function (s) {
                        var l = i[s],
                          c = 1 != l.level;
                        return en(
                          Yr(
                            e,
                            rt(r, c ? l.to : l.from, c ? "before" : "after"),
                            "line",
                            t,
                            n
                          ),
                          o,
                          a,
                          !0
                        );
                      },
                      0,
                      i.length - 1
                    ),
                    l = i[s];
                  if (s > 0) {
                    var c = 1 != l.level,
                      u = Yr(
                        e,
                        rt(r, c ? l.from : l.to, c ? "after" : "before"),
                        "line",
                        t,
                        n
                      );
                    en(u, o, a, !0) && u.top > a && (l = i[s - 1]);
                  }
                  return l;
                }
          )(e, t, r, o, u, n, i);
          (s = (c = 1 != f.level) ? f.from : f.to - 1),
            (l = c ? f.to : f.from - 1);
        }
        var h,
          d,
          p = null,
          g = null,
          m = ce(
            function (t) {
              var r = Ir(e, o, t);
              return (
                (r.top += a),
                (r.bottom += a),
                !!en(r, n, i, !1) &&
                  (r.top <= i && r.left <= n && ((p = t), (g = r)), !0)
              );
            },
            s,
            l
          ),
          v = !1;
        if (g) {
          var y = n - g.left < g.right - n,
            b = y == c;
          (m = p + (b ? 0 : 1)),
            (d = b ? "after" : "before"),
            (h = y ? g.left : g.right);
        } else {
          c || (m != l && m != s) || m++,
            (d =
              0 == m
                ? "after"
                : m == t.text.length
                ? "before"
                : Ir(e, o, m - (c ? 1 : 0)).bottom + a <= i == c
                ? "after"
                : "before");
          var w = Yr(e, rt(r, m, d), "line", t, o);
          (h = w.left), (v = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
        }
        return Xr(r, (m = le(t.text, m, 1)), d, v, n - h);
      }
      function rn(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Dr) {
          Dr = O("pre", null, "CodeMirror-line-like");
          for (var t = 0; t < 49; ++t)
            Dr.appendChild(document.createTextNode("x")),
              Dr.appendChild(O("br"));
          Dr.appendChild(document.createTextNode("x"));
        }
        M(e.measure, Dr);
        var r = Dr.offsetHeight / 50;
        return r > 3 && (e.cachedTextHeight = r), A(e.measure), r || 1;
      }
      function nn(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = O("span", "xxxxxxxxxx"),
          r = O("pre", [t], "CodeMirror-line-like");
        M(e.measure, r);
        var n = t.getBoundingClientRect(),
          i = (n.right - n.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
      }
      function on(e) {
        for (
          var t = e.display,
            r = {},
            n = {},
            i = t.gutters.clientLeft,
            o = t.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        ) {
          var s = e.display.gutterSpecs[a].className;
          (r[s] = o.offsetLeft + o.clientLeft + i), (n[s] = o.clientWidth);
        }
        return {
          fixedPos: an(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
          wrapperWidth: t.wrapper.clientWidth,
        };
      }
      function an(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        );
      }
      function sn(e) {
        var t = rn(e.display),
          r = e.options.lineWrapping,
          n =
            r &&
            Math.max(5, e.display.scroller.clientWidth / nn(e.display) - 3);
        return function (i) {
          if (Wt(e.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
        };
      }
      function ln(e) {
        var t = e.doc,
          r = sn(e);
        t.iter(function (e) {
          var t = r(e);
          t != e.height && Ze(e, t);
        });
      }
      function cn(e, t, r, n) {
        var i = e.display;
        if (!r && "true" == Le(t).getAttribute("cm-not-content")) return null;
        var o,
          a,
          s = i.lineSpace.getBoundingClientRect();
        try {
          (o = t.clientX - s.left), (a = t.clientY - s.top);
        } catch (e) {
          return null;
        }
        var l,
          c = Zr(e, o, a);
        if (n && c.xRel > 0 && (l = Ye(e.doc, c.line).text).length == c.ch) {
          var u = U(l, l.length, e.options.tabSize) - l.length;
          c = rt(
            c.line,
            Math.max(
              0,
              Math.round((o - kr(e.display).left) / nn(e.display)) - u
            )
          );
        }
        return c;
      }
      function un(e, t) {
        if (t >= e.display.viewTo) return null;
        if ((t -= e.display.viewFrom) < 0) return null;
        for (var r = e.display.view, n = 0; n < r.length; n++)
          if ((t -= r[n].size) < 0) return n;
      }
      function fn(e, t, r, n) {
        null == t && (t = e.doc.first),
          null == r && (r = e.doc.first + e.doc.size),
          n || (n = 0);
        var i = e.display;
        if (
          (n &&
            r < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
            (i.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= i.viewTo)
        )
          St && Ut(e.doc, t) < i.viewTo && dn(e);
        else if (r <= i.viewFrom)
          St && jt(e.doc, r + n) > i.viewFrom
            ? dn(e)
            : ((i.viewFrom += n), (i.viewTo += n));
        else if (t <= i.viewFrom && r >= i.viewTo) dn(e);
        else if (t <= i.viewFrom) {
          var o = pn(e, r, r + n, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += n))
            : dn(e);
        } else if (r >= i.viewTo) {
          var a = pn(e, t, t, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : dn(e);
        } else {
          var s = pn(e, t, t, -1),
            l = pn(e, r, r + n, 1);
          s && l
            ? ((i.view = i.view
                .slice(0, s.index)
                .concat(ar(e, s.lineN, l.lineN))
                .concat(i.view.slice(l.index))),
              (i.viewTo += n))
            : dn(e);
        }
        var c = i.externalMeasured;
        c &&
          (r < c.lineN
            ? (c.lineN += n)
            : t < c.lineN + c.size && (i.externalMeasured = null));
      }
      function hn(e, t, r) {
        e.curOp.viewChanged = !0;
        var n = e.display,
          i = e.display.externalMeasured;
        if (
          (i &&
            t >= i.lineN &&
            t < i.lineN + i.size &&
            (n.externalMeasured = null),
          !(t < n.viewFrom || t >= n.viewTo))
        ) {
          var o = n.view[un(e, t)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == W(a, r) && a.push(r);
          }
        }
      }
      function dn(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0);
      }
      function pn(e, t, r, n) {
        var i,
          o = un(e, t),
          a = e.display.view;
        if (!St || r == e.doc.first + e.doc.size) return { index: o, lineN: r };
        for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
        if (s != t) {
          if (n > 0) {
            if (o == a.length - 1) return null;
            (i = s + a[o].size - t), o++;
          } else i = s - t;
          (t += i), (r += i);
        }
        for (; Ut(e.doc, r) != r; ) {
          if (o == (n < 0 ? 0 : a.length - 1)) return null;
          (r += n * a[o - (n < 0 ? 1 : 0)].size), (o += n);
        }
        return { index: o, lineN: r };
      }
      function gn(e) {
        for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
          var i = t[n];
          i.hidden || (i.node && !i.changes) || ++r;
        }
        return r;
      }
      function mn(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function vn(e, t) {
        void 0 === t && (t = !0);
        var r = e.doc,
          n = {},
          i = (n.cursors = document.createDocumentFragment()),
          o = (n.selection = document.createDocumentFragment()),
          a = e.options.$customCursor;
        a && (t = !0);
        for (var s = 0; s < r.sel.ranges.length; s++)
          if (t || s != r.sel.primIndex) {
            var l = r.sel.ranges[s];
            if (
              !(
                l.from().line >= e.display.viewTo ||
                l.to().line < e.display.viewFrom
              )
            ) {
              var c = l.empty();
              if (a) {
                var u = a(e, l);
                u && yn(e, u, i);
              } else
                (c || e.options.showCursorWhenSelecting) && yn(e, l.head, i);
              c || wn(e, l, o);
            }
          }
        return n;
      }
      function yn(e, t, r) {
        var n = Yr(
            e,
            t,
            "div",
            null,
            null,
            !e.options.singleCursorHeightPerLine
          ),
          i = r.appendChild(O("div", " ", "CodeMirror-cursor"));
        if (
          ((i.style.left = n.left + "px"),
          (i.style.top = n.top + "px"),
          (i.style.height =
            Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px"),
          /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
        ) {
          var o = qr(e, t, "div", null, null),
            a = o.right - o.left;
          i.style.width = (a > 0 ? a : e.defaultCharWidth()) + "px";
        }
        if (n.other) {
          var s = r.appendChild(
            O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
          );
          (s.style.display = ""),
            (s.style.left = n.other.left + "px"),
            (s.style.top = n.other.top + "px"),
            (s.style.height = 0.85 * (n.other.bottom - n.other.top) + "px");
        }
      }
      function bn(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function wn(e, t, r) {
        var n = e.display,
          i = e.doc,
          o = document.createDocumentFragment(),
          a = kr(e.display),
          s = a.left,
          l = Math.max(n.sizerWidth, Ar(e) - n.sizer.offsetLeft) - a.right,
          c = "ltr" == i.direction;
        function u(e, t, r, n) {
          t < 0 && (t = 0),
            (t = Math.round(t)),
            (n = Math.round(n)),
            o.appendChild(
              O(
                "div",
                null,
                "CodeMirror-selected",
                "position: absolute; left: " +
                  e +
                  "px;\n                             top: " +
                  t +
                  "px; width: " +
                  (null == r ? l - e : r) +
                  "px;\n                             height: " +
                  (n - t) +
                  "px"
              )
            );
        }
        function f(t, r, n) {
          var o,
            a,
            f = Ye(i, t),
            h = f.text.length;
          function d(r, n) {
            return qr(e, rt(t, r), "div", f, n);
          }
          function p(t, r, n) {
            var i = Qr(e, f, null, t),
              o = ("ltr" == r) == ("after" == n) ? "left" : "right";
            return d(
              "after" == n
                ? i.begin
                : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1),
              o
            )[o];
          }
          var g = de(f, i.direction);
          return (
            (function (e, t, r, n) {
              if (!e) return n(t, r, "ltr", 0);
              for (var i = !1, o = 0; o < e.length; ++o) {
                var a = e[o];
                ((a.from < r && a.to > t) || (t == r && a.to == t)) &&
                  (n(
                    Math.max(a.from, t),
                    Math.min(a.to, r),
                    1 == a.level ? "rtl" : "ltr",
                    o
                  ),
                  (i = !0));
              }
              i || n(t, r, "ltr");
            })(g, r || 0, null == n ? h : n, function (e, t, i, f) {
              var m = "ltr" == i,
                v = d(e, m ? "left" : "right"),
                y = d(t - 1, m ? "right" : "left"),
                b = null == r && 0 == e,
                w = null == n && t == h,
                x = 0 == f,
                C = !g || f == g.length - 1;
              if (y.top - v.top <= 3) {
                var _ = (c ? w : b) && C,
                  S = (c ? b : w) && x ? s : (m ? v : y).left,
                  T = _ ? l : (m ? y : v).right;
                u(S, v.top, T - S, v.bottom);
              } else {
                var k, L, A, M;
                m
                  ? ((k = c && b && x ? s : v.left),
                    (L = c ? l : p(e, i, "before")),
                    (A = c ? s : p(t, i, "after")),
                    (M = c && w && C ? l : y.right))
                  : ((k = c ? p(e, i, "before") : s),
                    (L = !c && b && x ? l : v.right),
                    (A = !c && w && C ? s : y.left),
                    (M = c ? p(t, i, "after") : l)),
                  u(k, v.top, L - k, v.bottom),
                  v.bottom < y.top && u(s, v.bottom, null, y.top),
                  u(A, y.top, M - A, y.bottom);
              }
              (!o || bn(v, o) < 0) && (o = v),
                bn(y, o) < 0 && (o = y),
                (!a || bn(v, a) < 0) && (a = v),
                bn(y, a) < 0 && (a = y);
            }),
            { start: o, end: a }
          );
        }
        var h = t.from(),
          d = t.to();
        if (h.line == d.line) f(h.line, h.ch, d.ch);
        else {
          var p = Ye(i, h.line),
            g = Ye(i, d.line),
            m = Ft(p) == Ft(g),
            v = f(h.line, h.ch, m ? p.text.length + 1 : null).end,
            y = f(d.line, m ? 0 : null, d.ch).start;
          m &&
            (v.top < y.top - 2
              ? (u(v.right, v.top, null, v.bottom),
                u(s, y.top, y.left, y.bottom))
              : u(v.right, v.top, y.left - v.right, v.bottom)),
            v.bottom < y.top && u(s, v.bottom, null, y.top);
        }
        r.appendChild(o);
      }
      function xn(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var r = !0;
          (t.cursorDiv.style.visibility = ""),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function () {
                  e.hasFocus() || Tn(e),
                    (t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden");
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function Cn(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Sn(e));
      }
      function _n(e) {
        (e.state.delayingBlurEvent = !0),
          setTimeout(function () {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), e.state.focused && Tn(e));
          }, 100);
      }
      function Sn(e, t) {
        e.state.delayingBlurEvent &&
          !e.state.draggingText &&
          (e.state.delayingBlurEvent = !1),
          "nocursor" != e.options.readOnly &&
            (e.state.focused ||
              (ye(e, "focus", e, t),
              (e.state.focused = !0),
              I(e.display.wrapper, "CodeMirror-focused"),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                l &&
                  setTimeout(function () {
                    return e.display.input.reset(!0);
                  }, 20)),
              e.display.input.receivedFocus()),
            xn(e));
      }
      function Tn(e, t) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (ye(e, "blur", e, t),
            (e.state.focused = !1),
            L(e.display.wrapper, "CodeMirror-focused")),
          clearInterval(e.display.blinker),
          setTimeout(function () {
            e.state.focused || (e.display.shift = !1);
          }, 150));
      }
      function kn(e) {
        for (
          var t = e.display,
            r = t.lineDiv.offsetTop,
            n = Math.max(0, t.scroller.getBoundingClientRect().top),
            i = t.lineDiv.getBoundingClientRect().top,
            o = 0,
            l = 0;
          l < t.view.length;
          l++
        ) {
          var c = t.view[l],
            u = e.options.lineWrapping,
            f = void 0,
            h = 0;
          if (!c.hidden) {
            if (((i += c.line.height), a && s < 8)) {
              var d = c.node.offsetTop + c.node.offsetHeight;
              (f = d - r), (r = d);
            } else {
              var p = c.node.getBoundingClientRect();
              (f = p.bottom - p.top),
                !u &&
                  c.text.firstChild &&
                  (h =
                    c.text.firstChild.getBoundingClientRect().right -
                    p.left -
                    1);
            }
            var g = c.line.height - f;
            if (
              (g > 0.005 || g < -0.005) &&
              (i < n && (o -= g), Ze(c.line, f), Ln(c.line), c.rest)
            )
              for (var m = 0; m < c.rest.length; m++) Ln(c.rest[m]);
            if (h > e.display.sizerWidth) {
              var v = Math.ceil(h / nn(e.display));
              v > e.display.maxLineLength &&
                ((e.display.maxLineLength = v),
                (e.display.maxLine = c.line),
                (e.display.maxLineChanged = !0));
            }
          }
        }
        Math.abs(o) > 2 && (t.scroller.scrollTop += o);
      }
      function Ln(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var r = e.widgets[t],
              n = r.node.parentNode;
            n && (r.height = n.offsetHeight);
          }
      }
      function An(e, t, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
        n = Math.floor(n - Sr(e));
        var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
          o = Qe(t, n),
          a = Qe(t, i);
        if (r && r.ensure) {
          var s = r.ensure.from.line,
            l = r.ensure.to.line;
          s < o
            ? ((o = s), (a = Qe(t, Vt(Ye(t, s)) + e.wrapper.clientHeight)))
            : Math.min(l, t.lastLine()) >= a &&
              ((o = Qe(t, Vt(Ye(t, l)) - e.wrapper.clientHeight)), (a = l));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function Mn(e, t) {
        var r = e.display,
          n = rn(e.display);
        t.top < 0 && (t.top = 0);
        var i =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : r.scroller.scrollTop,
          o = Mr(e),
          a = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var s = e.doc.height + Tr(r),
          l = t.top < n,
          c = t.bottom > s - n;
        if (t.top < i) a.scrollTop = l ? 0 : t.top;
        else if (t.bottom > i + o) {
          var u = Math.min(t.top, (c ? s : t.bottom) - o);
          u != i && (a.scrollTop = u);
        }
        var f = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
          h =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : r.scroller.scrollLeft - f,
          d = Ar(e) - r.gutters.offsetWidth,
          p = t.right - t.left > d;
        return (
          p && (t.right = t.left + d),
          t.left < 10
            ? (a.scrollLeft = 0)
            : t.left < h
            ? (a.scrollLeft = Math.max(0, t.left + f - (p ? 0 : 10)))
            : t.right > d + h - 3 &&
              (a.scrollLeft = t.right + (p ? 0 : 10) - d),
          a
        );
      }
      function On(e, t) {
        null != t &&
          (Nn(e),
          (e.curOp.scrollTop =
            (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) +
            t));
      }
      function En(e) {
        Nn(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin,
        };
      }
      function Rn(e, t, r) {
        (null == t && null == r) || Nn(e),
          null != t && (e.curOp.scrollLeft = t),
          null != r && (e.curOp.scrollTop = r);
      }
      function Nn(e) {
        var t = e.curOp.scrollToPos;
        t &&
          ((e.curOp.scrollToPos = null),
          In(e, Gr(e, t.from), Gr(e, t.to), t.margin));
      }
      function In(e, t, r, n) {
        var i = Mn(e, {
          left: Math.min(t.left, r.left),
          top: Math.min(t.top, r.top) - n,
          right: Math.max(t.right, r.right),
          bottom: Math.max(t.bottom, r.bottom) + n,
        });
        Rn(e, i.scrollLeft, i.scrollTop);
      }
      function Dn(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          (r || ci(e, { top: t }), Pn(e, t, !0), r && ci(e), ni(e, 100));
      }
      function Pn(e, t, r) {
        (t = Math.max(
          0,
          Math.min(
            e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
            t
          )
        )),
          (e.display.scroller.scrollTop != t || r) &&
            ((e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t &&
              (e.display.scroller.scrollTop = t));
      }
      function Hn(e, t, r, n) {
        (t = Math.max(
          0,
          Math.min(
            t,
            e.display.scroller.scrollWidth - e.display.scroller.clientWidth
          )
        )),
          ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
            !n) ||
            ((e.doc.scrollLeft = t),
            hi(e),
            e.display.scroller.scrollLeft != t &&
              (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t));
      }
      function $n(e) {
        var t = e.display,
          r = t.gutters.offsetWidth,
          n = Math.round(e.doc.height + Tr(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + Lr(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: r,
        };
      }
      var Bn = function (e, t, r) {
        this.cm = r;
        var n = (this.vert = O(
            "div",
            [O("div", null, null, "min-width: 1px")],
            "CodeMirror-vscrollbar"
          )),
          i = (this.horiz = O(
            "div",
            [O("div", null, null, "height: 100%; min-height: 1px")],
            "CodeMirror-hscrollbar"
          ));
        (n.tabIndex = i.tabIndex = -1),
          e(n),
          e(i),
          ge(n, "scroll", function () {
            n.clientHeight && t(n.scrollTop, "vertical");
          }),
          ge(i, "scroll", function () {
            i.clientWidth && t(i.scrollLeft, "horizontal");
          }),
          (this.checkedZeroWidth = !1),
          a &&
            s < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      (Bn.prototype.update = function (e) {
        var t = e.scrollWidth > e.clientWidth + 1,
          r = e.scrollHeight > e.clientHeight + 1,
          n = e.nativeBarWidth;
        if (r) {
          (this.vert.style.display = "block"),
            (this.vert.style.bottom = t ? n + "px" : "0");
          var i = e.viewHeight - (t ? n : 0);
          this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
        } else
          (this.vert.scrollTop = 0),
            (this.vert.style.display = ""),
            (this.vert.firstChild.style.height = "0");
        if (t) {
          (this.horiz.style.display = "block"),
            (this.horiz.style.right = r ? n + "px" : "0"),
            (this.horiz.style.left = e.barLeft + "px");
          var o = e.viewWidth - e.barLeft - (r ? n : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
        } else
          (this.horiz.style.display = ""),
            (this.horiz.firstChild.style.width = "0");
        return (
          !this.checkedZeroWidth &&
            e.clientHeight > 0 &&
            (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: r ? n : 0, bottom: t ? n : 0 }
        );
      }),
        (Bn.prototype.setScrollLeft = function (e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
        }),
        (Bn.prototype.setScrollTop = function (e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
        }),
        (Bn.prototype.zeroWidthHack = function () {
          var e = b && !p ? "12px" : "18px";
          (this.horiz.style.height = this.vert.style.width = e),
            (this.horiz.style.visibility = this.vert.style.visibility =
              "hidden"),
            (this.disableHoriz = new j()),
            (this.disableVert = new j());
        }),
        (Bn.prototype.enableZeroWidthBar = function (e, t, r) {
          (e.style.visibility = ""),
            t.set(1e3, function n() {
              var i = e.getBoundingClientRect();
              ("vert" == r
                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                : document.elementFromPoint(
                    (i.right + i.left) / 2,
                    i.bottom - 1
                  )) != e
                ? (e.style.visibility = "hidden")
                : t.set(1e3, n);
            });
        }),
        (Bn.prototype.clear = function () {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        });
      var Fn = function () {};
      function Un(e, t) {
        t || (t = $n(e));
        var r = e.display.barWidth,
          n = e.display.barHeight;
        jn(e, t);
        for (
          var i = 0;
          (i < 4 && r != e.display.barWidth) || n != e.display.barHeight;
          i++
        )
          r != e.display.barWidth && e.options.lineWrapping && kn(e),
            jn(e, $n(e)),
            (r = e.display.barWidth),
            (n = e.display.barHeight);
      }
      function jn(e, t) {
        var r = e.display,
          n = r.scrollbars.update(t);
        (r.sizer.style.paddingRight = (r.barWidth = n.right) + "px"),
          (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px"),
          (r.heightForcer.style.borderBottom =
            n.bottom + "px solid transparent"),
          n.right && n.bottom
            ? ((r.scrollbarFiller.style.display = "block"),
              (r.scrollbarFiller.style.height = n.bottom + "px"),
              (r.scrollbarFiller.style.width = n.right + "px"))
            : (r.scrollbarFiller.style.display = ""),
          n.bottom &&
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((r.gutterFiller.style.display = "block"),
              (r.gutterFiller.style.height = n.bottom + "px"),
              (r.gutterFiller.style.width = t.gutterWidth + "px"))
            : (r.gutterFiller.style.display = "");
      }
      (Fn.prototype.update = function () {
        return { bottom: 0, right: 0 };
      }),
        (Fn.prototype.setScrollLeft = function () {}),
        (Fn.prototype.setScrollTop = function () {}),
        (Fn.prototype.clear = function () {});
      var Wn = { native: Bn, null: Fn };
      function zn(e) {
        e.display.scrollbars &&
          (e.display.scrollbars.clear(),
          e.display.scrollbars.addClass &&
            L(e.display.wrapper, e.display.scrollbars.addClass)),
          (e.display.scrollbars = new Wn[e.options.scrollbarStyle](
            function (t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                ge(t, "mousedown", function () {
                  e.state.focused &&
                    setTimeout(function () {
                      return e.display.input.focus();
                    }, 0);
                }),
                t.setAttribute("cm-not-content", "true");
            },
            function (t, r) {
              "horizontal" == r ? Hn(e, t) : Dn(e, t);
            },
            e
          )),
          e.display.scrollbars.addClass &&
            I(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var Vn = 0;
      function Kn(e) {
        (e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Vn,
          markArrays: null,
        }),
          (function (e) {
            sr
              ? sr.ops.push(e)
              : (e.ownsGroup = sr = { ops: [e], delayedCallbacks: [] });
          })(e.curOp);
      }
      function qn(e) {
        var t = e.curOp;
        t &&
          (function (e, t) {
            var r = e.ownsGroup;
            if (r)
              try {
                !(function (e) {
                  var t = e.delayedCallbacks,
                    r = 0;
                  do {
                    for (; r < t.length; r++) t[r].call(null);
                    for (var n = 0; n < e.ops.length; n++) {
                      var i = e.ops[n];
                      if (i.cursorActivityHandlers)
                        for (
                          ;
                          i.cursorActivityCalled <
                          i.cursorActivityHandlers.length;

                        )
                          i.cursorActivityHandlers[
                            i.cursorActivityCalled++
                          ].call(null, i.cm);
                    }
                  } while (r < t.length);
                })(r);
              } finally {
                (sr = null), t(r);
              }
          })(t, function (e) {
            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
            !(function (e) {
              for (var t = e.ops, r = 0; r < t.length; r++) Yn(t[r]);
              for (var n = 0; n < t.length; n++) Gn(t[n]);
              for (var i = 0; i < t.length; i++) Xn(t[i]);
              for (var o = 0; o < t.length; o++) Zn(t[o]);
              for (var a = 0; a < t.length; a++) Jn(t[a]);
            })(e);
          });
      }
      function Yn(e) {
        var t = e.cm,
          r = t.display;
        !(function (e) {
          var t = e.display;
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth =
              t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = Lr(e) + "px"),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
            (t.sizer.style.borderRightWidth = Lr(e) + "px"),
            (t.scrollbarsClipped = !0));
        })(t),
          e.updateMaxLine && qt(t),
          (e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            null != e.scrollTop ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < r.viewFrom ||
                e.scrollToPos.to.line >= r.viewTo)) ||
            (r.maxLineChanged && t.options.lineWrapping)),
          (e.update =
            e.mustUpdate &&
            new oi(
              t,
              e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
              e.forceUpdate
            ));
      }
      function Gn(e) {
        e.updatedDisplay = e.mustUpdate && si(e.cm, e.update);
      }
      function Xn(e) {
        var t = e.cm,
          r = t.display;
        e.updatedDisplay && kn(t),
          (e.barMeasure = $n(t)),
          r.maxLineChanged &&
            !t.options.lineWrapping &&
            ((e.adjustWidthTo =
              Er(t, r.maxLine, r.maxLine.text.length).left + 3),
            (t.display.sizerWidth = e.adjustWidthTo),
            (e.barMeasure.scrollWidth = Math.max(
              r.scroller.clientWidth,
              r.sizer.offsetLeft + e.adjustWidthTo + Lr(t) + t.display.barWidth
            )),
            (e.maxScrollLeft = Math.max(
              0,
              r.sizer.offsetLeft + e.adjustWidthTo - Ar(t)
            ))),
          (e.updatedDisplay || e.selectionChanged) &&
            (e.preparedSelection = r.input.prepareSelection());
      }
      function Zn(e) {
        var t = e.cm;
        null != e.adjustWidthTo &&
          ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
          e.maxScrollLeft < t.doc.scrollLeft &&
            Hn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
          (t.display.maxLineChanged = !1));
        var r = e.focus && e.focus == N(H(t));
        e.preparedSelection &&
          t.display.input.showSelection(e.preparedSelection, r),
          (e.updatedDisplay || e.startHeight != t.doc.height) &&
            Un(t, e.barMeasure),
          e.updatedDisplay && fi(t, e.barMeasure),
          e.selectionChanged && xn(t),
          t.state.focused && e.updateInput && t.display.input.reset(e.typing),
          r && Cn(e.cm);
      }
      function Jn(e) {
        var t = e.cm,
          r = t.display,
          n = t.doc;
        (e.updatedDisplay && li(t, e.update),
        null == r.wheelStartX ||
          (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
          (r.wheelStartX = r.wheelStartY = null),
        null != e.scrollTop && Pn(t, e.scrollTop, e.forceScroll),
        null != e.scrollLeft && Hn(t, e.scrollLeft, !0, !0),
        e.scrollToPos) &&
          (function (e, t) {
            if (!be(e, "scrollCursorIntoView")) {
              var r = e.display,
                n = r.sizer.getBoundingClientRect(),
                i = null,
                o = r.wrapper.ownerDocument;
              if (
                (t.top + n.top < 0
                  ? (i = !0)
                  : t.bottom + n.top >
                      (o.defaultView.innerHeight ||
                        o.documentElement.clientHeight) && (i = !1),
                null != i && !g)
              ) {
                var a = O(
                  "div",
                  "​",
                  null,
                  "position: absolute;\n                         top: " +
                    (t.top - r.viewOffset - Sr(e.display)) +
                    "px;\n                         height: " +
                    (t.bottom - t.top + Lr(e) + r.barHeight) +
                    "px;\n                         left: " +
                    t.left +
                    "px; width: " +
                    Math.max(2, t.right - t.left) +
                    "px;"
                );
                e.display.lineSpace.appendChild(a),
                  a.scrollIntoView(i),
                  e.display.lineSpace.removeChild(a);
              }
            }
          })(
            t,
            (function (e, t, r, n) {
              var i;
              null == n && (n = 0),
                e.options.lineWrapping ||
                  t != r ||
                  ((r =
                    "before" == t.sticky ? rt(t.line, t.ch + 1, "before") : t),
                  (t = t.ch
                    ? rt(
                        t.line,
                        "before" == t.sticky ? t.ch - 1 : t.ch,
                        "after"
                      )
                    : t));
              for (var o = 0; o < 5; o++) {
                var a = !1,
                  s = Yr(e, t),
                  l = r && r != t ? Yr(e, r) : s,
                  c = Mn(
                    e,
                    (i = {
                      left: Math.min(s.left, l.left),
                      top: Math.min(s.top, l.top) - n,
                      right: Math.max(s.left, l.left),
                      bottom: Math.max(s.bottom, l.bottom) + n,
                    })
                  ),
                  u = e.doc.scrollTop,
                  f = e.doc.scrollLeft;
                if (
                  (null != c.scrollTop &&
                    (Dn(e, c.scrollTop),
                    Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                  null != c.scrollLeft &&
                    (Hn(e, c.scrollLeft),
                    Math.abs(e.doc.scrollLeft - f) > 1 && (a = !0)),
                  !a)
                )
                  break;
              }
              return i;
            })(
              t,
              ct(n, e.scrollToPos.from),
              ct(n, e.scrollToPos.to),
              e.scrollToPos.margin
            )
          );
        var i = e.maybeHiddenMarkers,
          o = e.maybeUnhiddenMarkers;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].lines.length || ye(i[a], "hide");
        if (o)
          for (var s = 0; s < o.length; ++s)
            o[s].lines.length && ye(o[s], "unhide");
        r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
          e.changeObjs && ye(t, "changes", t, e.changeObjs),
          e.update && e.update.finish();
      }
      function Qn(e, t) {
        if (e.curOp) return t();
        Kn(e);
        try {
          return t();
        } finally {
          qn(e);
        }
      }
      function ei(e, t) {
        return function () {
          if (e.curOp) return t.apply(e, arguments);
          Kn(e);
          try {
            return t.apply(e, arguments);
          } finally {
            qn(e);
          }
        };
      }
      function ti(e) {
        return function () {
          if (this.curOp) return e.apply(this, arguments);
          Kn(this);
          try {
            return e.apply(this, arguments);
          } finally {
            qn(this);
          }
        };
      }
      function ri(e) {
        return function () {
          var t = this.cm;
          if (!t || t.curOp) return e.apply(this, arguments);
          Kn(t);
          try {
            return e.apply(this, arguments);
          } finally {
            qn(t);
          }
        };
      }
      function ni(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
          e.state.highlight.set(t, B(ii, e));
      }
      function ii(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var r = +new Date() + e.options.workTime,
            n = gt(e, t.highlightFrontier),
            i = [];
          t.iter(
            n.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function (o) {
              if (n.line >= e.display.viewFrom) {
                var a = o.styles,
                  s =
                    o.text.length > e.options.maxHighlightLength
                      ? ze(t.mode, n.state)
                      : null,
                  l = dt(e, o, n, !0);
                s && (n.state = s), (o.styles = l.styles);
                var c = o.styleClasses,
                  u = l.classes;
                u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                for (
                  var f =
                      !a ||
                      a.length != o.styles.length ||
                      (c != u &&
                        (!c ||
                          !u ||
                          c.bgClass != u.bgClass ||
                          c.textClass != u.textClass)),
                    h = 0;
                  !f && h < a.length;
                  ++h
                )
                  f = a[h] != o.styles[h];
                f && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
              } else
                o.text.length <= e.options.maxHighlightLength &&
                  mt(e, o.text, n),
                  (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
                  n.nextLine();
              if (+new Date() > r) return ni(e, e.options.workDelay), !0;
            }
          ),
            (t.highlightFrontier = n.line),
            (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
            i.length &&
              Qn(e, function () {
                for (var t = 0; t < i.length; t++) hn(e, i[t], "text");
              });
        }
      }
      var oi = function (e, t, r) {
        var n = e.display;
        (this.viewport = t),
          (this.visible = An(n, e.doc, t)),
          (this.editorIsHidden = !n.wrapper.offsetWidth),
          (this.wrapperHeight = n.wrapper.clientHeight),
          (this.wrapperWidth = n.wrapper.clientWidth),
          (this.oldDisplayWidth = Ar(e)),
          (this.force = r),
          (this.dims = on(e)),
          (this.events = []);
      };
      function ai(e) {
        if (e.hasFocus()) return null;
        var t = N(H(e));
        if (!t || !R(e.display.lineDiv, t)) return null;
        var r = { activeElt: t };
        if (window.getSelection) {
          var n = $(e).getSelection();
          n.anchorNode &&
            n.extend &&
            R(e.display.lineDiv, n.anchorNode) &&
            ((r.anchorNode = n.anchorNode),
            (r.anchorOffset = n.anchorOffset),
            (r.focusNode = n.focusNode),
            (r.focusOffset = n.focusOffset));
        }
        return r;
      }
      function si(e, t) {
        var r = e.display,
          n = e.doc;
        if (t.editorIsHidden) return dn(e), !1;
        if (
          !t.force &&
          t.visible.from >= r.viewFrom &&
          t.visible.to <= r.viewTo &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
          r.renderedView == r.view &&
          0 == gn(e)
        )
          return !1;
        di(e) && (dn(e), (t.dims = on(e)));
        var i = n.first + n.size,
          o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
          a = Math.min(i, t.visible.to + e.options.viewportMargin);
        r.viewFrom < o &&
          o - r.viewFrom < 20 &&
          (o = Math.max(n.first, r.viewFrom)),
          r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)),
          St && ((o = Ut(e.doc, o)), (a = jt(e.doc, a)));
        var s =
          o != r.viewFrom ||
          a != r.viewTo ||
          r.lastWrapHeight != t.wrapperHeight ||
          r.lastWrapWidth != t.wrapperWidth;
        !(function (e, t, r) {
          var n = e.display;
          0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
            ? ((n.view = ar(e, t, r)), (n.viewFrom = t))
            : (n.viewFrom > t
                ? (n.view = ar(e, t, n.viewFrom).concat(n.view))
                : n.viewFrom < t && (n.view = n.view.slice(un(e, t))),
              (n.viewFrom = t),
              n.viewTo < r
                ? (n.view = n.view.concat(ar(e, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, un(e, r)))),
            (n.viewTo = r);
        })(e, o, a),
          (r.viewOffset = Vt(Ye(e.doc, r.viewFrom))),
          (e.display.mover.style.top = r.viewOffset + "px");
        var c = gn(e);
        if (
          !s &&
          0 == c &&
          !t.force &&
          r.renderedView == r.view &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
        )
          return !1;
        var u = ai(e);
        return (
          c > 4 && (r.lineDiv.style.display = "none"),
          (function (e, t, r) {
            var n = e.display,
              i = e.options.lineNumbers,
              o = n.lineDiv,
              a = o.firstChild;
            function s(t) {
              var r = t.nextSibling;
              return (
                l && b && e.display.currentWheelTarget == t
                  ? (t.style.display = "none")
                  : t.parentNode.removeChild(t),
                r
              );
            }
            for (var c = n.view, u = n.viewFrom, f = 0; f < c.length; f++) {
              var h = c[f];
              if (h.hidden);
              else if (h.node && h.node.parentNode == o) {
                for (; a != h.node; ) a = s(a);
                var d = i && null != t && t <= u && h.lineNumber;
                h.changes &&
                  (W(h.changes, "gutter") > -1 && (d = !1), fr(e, h, u, r)),
                  d &&
                    (A(h.lineNumber),
                    h.lineNumber.appendChild(
                      document.createTextNode(tt(e.options, u))
                    )),
                  (a = h.node.nextSibling);
              } else {
                var p = yr(e, h, u, r);
                o.insertBefore(p, a);
              }
              u += h.size;
            }
            for (; a; ) a = s(a);
          })(e, r.updateLineNumbers, t.dims),
          c > 4 && (r.lineDiv.style.display = ""),
          (r.renderedView = r.view),
          (function (e) {
            if (
              e &&
              e.activeElt &&
              e.activeElt != N(e.activeElt.ownerDocument) &&
              (e.activeElt.focus(),
              !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                e.anchorNode &&
                R(document.body, e.anchorNode) &&
                R(document.body, e.focusNode))
            ) {
              var t = e.activeElt.ownerDocument,
                r = t.defaultView.getSelection(),
                n = t.createRange();
              n.setEnd(e.anchorNode, e.anchorOffset),
                n.collapse(!1),
                r.removeAllRanges(),
                r.addRange(n),
                r.extend(e.focusNode, e.focusOffset);
            }
          })(u),
          A(r.cursorDiv),
          A(r.selectionDiv),
          (r.gutters.style.height = r.sizer.style.minHeight = 0),
          s &&
            ((r.lastWrapHeight = t.wrapperHeight),
            (r.lastWrapWidth = t.wrapperWidth),
            ni(e, 400)),
          (r.updateLineNumbers = null),
          !0
        );
      }
      function li(e, t) {
        for (var r = t.viewport, n = !0; ; n = !1) {
          if (n && e.options.lineWrapping && t.oldDisplayWidth != Ar(e))
            n && (t.visible = An(e.display, e.doc, r));
          else if (
            (r &&
              null != r.top &&
              (r = {
                top: Math.min(e.doc.height + Tr(e.display) - Mr(e), r.top),
              }),
            (t.visible = An(e.display, e.doc, r)),
            t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo)
          )
            break;
          if (!si(e, t)) break;
          kn(e);
          var i = $n(e);
          mn(e), Un(e, i), fi(e, i), (t.force = !1);
        }
        t.signal(e, "update", e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              "viewportChange",
              e,
              e.display.viewFrom,
              e.display.viewTo
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo));
      }
      function ci(e, t) {
        var r = new oi(e, t);
        if (si(e, r)) {
          kn(e), li(e, r);
          var n = $n(e);
          mn(e), Un(e, n), fi(e, n), r.finish();
        }
      }
      function ui(e) {
        var t = e.gutters.offsetWidth;
        (e.sizer.style.marginLeft = t + "px"), cr(e, "gutterChanged", e);
      }
      function fi(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + "px"),
          (e.display.heightForcer.style.top = t.docHeight + "px"),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + Lr(e) + "px");
      }
      function hi(e) {
        var t = e.display,
          r = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var n = an(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
              i = t.gutters.offsetWidth,
              o = n + "px",
              a = 0;
            a < r.length;
            a++
          )
            if (!r[a].hidden) {
              e.options.fixedGutter &&
                (r[a].gutter && (r[a].gutter.style.left = o),
                r[a].gutterBackground &&
                  (r[a].gutterBackground.style.left = o));
              var s = r[a].alignable;
              if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
        }
      }
      function di(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.doc,
          r = tt(e.options, t.first + t.size - 1),
          n = e.display;
        if (r.length != n.lineNumChars) {
          var i = n.measure.appendChild(
              O(
                "div",
                [O("div", r)],
                "CodeMirror-linenumber CodeMirror-gutter-elt"
              )
            ),
            o = i.firstChild.offsetWidth,
            a = i.offsetWidth - o;
          return (
            (n.lineGutter.style.width = ""),
            (n.lineNumInnerWidth =
              Math.max(o, n.lineGutter.offsetWidth - a) + 1),
            (n.lineNumWidth = n.lineNumInnerWidth + a),
            (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
            (n.lineGutter.style.width = n.lineNumWidth + "px"),
            ui(e.display),
            !0
          );
        }
        return !1;
      }
      function pi(e, t) {
        for (var r = [], n = !1, i = 0; i < e.length; i++) {
          var o = e[i],
            a = null;
          if (
            ("string" != typeof o && ((a = o.style), (o = o.className)),
            "CodeMirror-linenumbers" == o)
          ) {
            if (!t) continue;
            n = !0;
          }
          r.push({ className: o, style: a });
        }
        return (
          t &&
            !n &&
            r.push({ className: "CodeMirror-linenumbers", style: null }),
          r
        );
      }
      function gi(e) {
        var t = e.gutters,
          r = e.gutterSpecs;
        A(t), (e.lineGutter = null);
        for (var n = 0; n < r.length; ++n) {
          var i = r[n],
            o = i.className,
            a = i.style,
            s = t.appendChild(O("div", null, "CodeMirror-gutter " + o));
          a && (s.style.cssText = a),
            "CodeMirror-linenumbers" == o &&
              ((e.lineGutter = s),
              (s.style.width = (e.lineNumWidth || 1) + "px"));
        }
        (t.style.display = r.length ? "" : "none"), ui(e);
      }
      function mi(e) {
        gi(e.display), fn(e), hi(e);
      }
      (oi.prototype.signal = function (e, t) {
        xe(e, t) && this.events.push(arguments);
      }),
        (oi.prototype.finish = function () {
          for (var e = 0; e < this.events.length; e++)
            ye.apply(null, this.events[e]);
        });
      var vi = 0,
        yi = null;
      function bi(e) {
        var t = e.wheelDeltaX,
          r = e.wheelDeltaY;
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == r && e.detail && e.axis == e.VERTICAL_AXIS
            ? (r = e.detail)
            : null == r && (r = e.wheelDelta),
          { x: t, y: r }
        );
      }
      function wi(e) {
        var t = bi(e);
        return (t.x *= yi), (t.y *= yi), t;
      }
      function xi(e, t) {
        u &&
          102 == f &&
          (null == e.display.chromeScrollHack
            ? (e.display.sizer.style.pointerEvents = "none")
            : clearTimeout(e.display.chromeScrollHack),
          (e.display.chromeScrollHack = setTimeout(function () {
            (e.display.chromeScrollHack = null),
              (e.display.sizer.style.pointerEvents = "");
          }, 100)));
        var n = bi(t),
          i = n.x,
          o = n.y,
          a = yi;
        0 === t.deltaMode && ((i = t.deltaX), (o = t.deltaY), (a = 1));
        var s = e.display,
          c = s.scroller,
          d = c.scrollWidth > c.clientWidth,
          p = c.scrollHeight > c.clientHeight;
        if ((i && d) || (o && p)) {
          if (o && b && l)
            e: for (var g = t.target, m = s.view; g != c; g = g.parentNode)
              for (var v = 0; v < m.length; v++)
                if (m[v].node == g) {
                  e.display.currentWheelTarget = g;
                  break e;
                }
          if (i && !r && !h && null != a)
            return (
              o && p && Dn(e, Math.max(0, c.scrollTop + o * a)),
              Hn(e, Math.max(0, c.scrollLeft + i * a)),
              (!o || (o && p)) && _e(t),
              void (s.wheelStartX = null)
            );
          if (o && null != a) {
            var y = o * a,
              w = e.doc.scrollTop,
              x = w + s.wrapper.clientHeight;
            y < 0
              ? (w = Math.max(0, w + y - 50))
              : (x = Math.min(e.doc.height, x + y + 50)),
              ci(e, { top: w, bottom: x });
          }
          vi < 20 &&
            0 !== t.deltaMode &&
            (null == s.wheelStartX
              ? ((s.wheelStartX = c.scrollLeft),
                (s.wheelStartY = c.scrollTop),
                (s.wheelDX = i),
                (s.wheelDY = o),
                setTimeout(function () {
                  if (null != s.wheelStartX) {
                    var e = c.scrollLeft - s.wheelStartX,
                      t = c.scrollTop - s.wheelStartY,
                      r =
                        (t && s.wheelDY && t / s.wheelDY) ||
                        (e && s.wheelDX && e / s.wheelDX);
                    (s.wheelStartX = s.wheelStartY = null),
                      r && ((yi = (yi * vi + r) / (vi + 1)), ++vi);
                  }
                }, 200))
              : ((s.wheelDX += i), (s.wheelDY += o)));
        }
      }
      a ? (yi = -0.53) : r ? (yi = 15) : u ? (yi = -0.7) : d && (yi = -1 / 3);
      var Ci = function (e, t) {
        (this.ranges = e), (this.primIndex = t);
      };
      (Ci.prototype.primary = function () {
        return this.ranges[this.primIndex];
      }),
        (Ci.prototype.equals = function (e) {
          if (e == this) return !0;
          if (
            e.primIndex != this.primIndex ||
            e.ranges.length != this.ranges.length
          )
            return !1;
          for (var t = 0; t < this.ranges.length; t++) {
            var r = this.ranges[t],
              n = e.ranges[t];
            if (!it(r.anchor, n.anchor) || !it(r.head, n.head)) return !1;
          }
          return !0;
        }),
        (Ci.prototype.deepCopy = function () {
          for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new _i(ot(this.ranges[t].anchor), ot(this.ranges[t].head));
          return new Ci(e, this.primIndex);
        }),
        (Ci.prototype.somethingSelected = function () {
          for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty()) return !0;
          return !1;
        }),
        (Ci.prototype.contains = function (e, t) {
          t || (t = e);
          for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r];
            if (nt(t, n.from()) >= 0 && nt(e, n.to()) <= 0) return r;
          }
          return -1;
        });
      var _i = function (e, t) {
        (this.anchor = e), (this.head = t);
      };
      function Si(e, t, r) {
        var n = e && e.options.selectionsMayTouch,
          i = t[r];
        t.sort(function (e, t) {
          return nt(e.from(), t.from());
        }),
          (r = W(t, i));
        for (var o = 1; o < t.length; o++) {
          var a = t[o],
            s = t[o - 1],
            l = nt(s.to(), a.from());
          if (n && !a.empty() ? l > 0 : l >= 0) {
            var c = st(s.from(), a.from()),
              u = at(s.to(), a.to()),
              f = s.empty() ? a.from() == a.head : s.from() == s.head;
            o <= r && --r, t.splice(--o, 2, new _i(f ? u : c, f ? c : u));
          }
        }
        return new Ci(t, r);
      }
      function Ti(e, t) {
        return new Ci([new _i(e, t || e)], 0);
      }
      function ki(e) {
        return e.text
          ? rt(
              e.from.line + e.text.length - 1,
              J(e.text).length + (1 == e.text.length ? e.from.ch : 0)
            )
          : e.to;
      }
      function Li(e, t) {
        if (nt(e, t.from) < 0) return e;
        if (nt(e, t.to) <= 0) return ki(t);
        var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          n = e.ch;
        return e.line == t.to.line && (n += ki(t).ch - t.to.ch), rt(r, n);
      }
      function Ai(e, t) {
        for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
          var i = e.sel.ranges[n];
          r.push(new _i(Li(i.anchor, t), Li(i.head, t)));
        }
        return Si(e.cm, r, e.sel.primIndex);
      }
      function Mi(e, t, r) {
        return e.line == t.line
          ? rt(r.line, e.ch - t.ch + r.ch)
          : rt(r.line + (e.line - t.line), e.ch);
      }
      function Oi(e) {
        (e.doc.mode = Ue(e.options, e.doc.modeOption)), Ei(e);
      }
      function Ei(e) {
        e.doc.iter(function (e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
        }),
          (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
          ni(e, 100),
          e.state.modeGen++,
          e.curOp && fn(e);
      }
      function Ri(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          "" == J(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        );
      }
      function Ni(e, t, r, n) {
        function i(e) {
          return r ? r[e] : null;
        }
        function o(e, r, i) {
          !(function (e, t, r, n) {
            (e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              Ot(e),
              Et(e, r);
            var i = n ? n(e) : 1;
            i != e.height && Ze(e, i);
          })(e, r, i, n),
            cr(e, "change", e, t);
        }
        function a(e, t) {
          for (var r = [], o = e; o < t; ++o) r.push(new Yt(c[o], i(o), n));
          return r;
        }
        var s = t.from,
          l = t.to,
          c = t.text,
          u = Ye(e, s.line),
          f = Ye(e, l.line),
          h = J(c),
          d = i(c.length - 1),
          p = l.line - s.line;
        if (t.full)
          e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
        else if (Ri(e, t)) {
          var g = a(0, c.length - 1);
          o(f, f.text, d),
            p && e.remove(s.line, p),
            g.length && e.insert(s.line, g);
        } else if (u == f)
          if (1 == c.length)
            o(u, u.text.slice(0, s.ch) + h + u.text.slice(l.ch), d);
          else {
            var m = a(1, c.length - 1);
            m.push(new Yt(h + u.text.slice(l.ch), d, n)),
              o(u, u.text.slice(0, s.ch) + c[0], i(0)),
              e.insert(s.line + 1, m);
          }
        else if (1 == c.length)
          o(u, u.text.slice(0, s.ch) + c[0] + f.text.slice(l.ch), i(0)),
            e.remove(s.line + 1, p);
        else {
          o(u, u.text.slice(0, s.ch) + c[0], i(0)),
            o(f, h + f.text.slice(l.ch), d);
          var v = a(1, c.length - 1);
          p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, v);
        }
        cr(e, "change", e, t);
      }
      function Ii(e, t, r) {
        !(function e(n, i, o) {
          if (n.linked)
            for (var a = 0; a < n.linked.length; ++a) {
              var s = n.linked[a];
              if (s.doc != i) {
                var l = o && s.sharedHist;
                (r && !l) || (t(s.doc, l), e(s.doc, n, l));
              }
            }
        })(e, null, !0);
      }
      function Di(e, t) {
        if (t.cm) throw new Error("This document is already in use.");
        (e.doc = t),
          (t.cm = e),
          ln(e),
          Oi(e),
          Pi(e),
          (e.options.direction = t.direction),
          e.options.lineWrapping || qt(e),
          (e.options.mode = t.modeOption),
          fn(e);
      }
      function Pi(e) {
        ("rtl" == e.doc.direction ? I : L)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Hi(e) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = e ? e.undoDepth : 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
      }
      function $i(e, t) {
        var r = { from: ot(t.from), to: ki(t), text: Ge(e, t.from, t.to) };
        return (
          Wi(e, r, t.from.line, t.to.line + 1),
          Ii(
            e,
            function (e) {
              return Wi(e, r, t.from.line, t.to.line + 1);
            },
            !0
          ),
          r
        );
      }
      function Bi(e) {
        for (; e.length; ) {
          if (!J(e).ranges) break;
          e.pop();
        }
      }
      function Fi(e, t, r, n) {
        var i = e.history;
        i.undone.length = 0;
        var o,
          a,
          s = +new Date();
        if (
          (i.lastOp == n ||
            (i.lastOrigin == t.origin &&
              t.origin &&
              (("+" == t.origin.charAt(0) &&
                i.lastModTime >
                  s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                "*" == t.origin.charAt(0)))) &&
          (o = (function (e, t) {
            return t
              ? (Bi(e.done), J(e.done))
              : e.done.length && !J(e.done).ranges
              ? J(e.done)
              : e.done.length > 1 && !e.done[e.done.length - 2].ranges
              ? (e.done.pop(), J(e.done))
              : void 0;
          })(i, i.lastOp == n))
        )
          (a = J(o.changes)),
            0 == nt(t.from, t.to) && 0 == nt(t.from, a.to)
              ? (a.to = ki(t))
              : o.changes.push($i(e, t));
        else {
          var l = J(i.done);
          for (
            (l && l.ranges) || ji(e.sel, i.done),
              o = { changes: [$i(e, t)], generation: i.generation },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(r),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = s),
          (i.lastOp = i.lastSelOp = n),
          (i.lastOrigin = i.lastSelOrigin = t.origin),
          a || ye(e, "historyAdded");
      }
      function Ui(e, t, r, n) {
        var i = e.history,
          o = n && n.origin;
        r == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function (e, t, r, n) {
              var i = t.charAt(0);
              return (
                "*" == i ||
                ("+" == i &&
                  r.ranges.length == n.ranges.length &&
                  r.somethingSelected() == n.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              );
            })(e, o, J(i.done), t)))
          ? (i.done[i.done.length - 1] = t)
          : ji(t, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = r),
          n && !1 !== n.clearRedo && Bi(i.undone);
      }
      function ji(e, t) {
        var r = J(t);
        (r && r.ranges && r.equals(e)) || t.push(e);
      }
      function Wi(e, t, r, n) {
        var i = t["spans_" + e.id],
          o = 0;
        e.iter(
          Math.max(e.first, r),
          Math.min(e.first + e.size, n),
          function (r) {
            r.markedSpans &&
              ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans),
              ++o;
          }
        );
      }
      function zi(e) {
        if (!e) return null;
        for (var t, r = 0; r < e.length; ++r)
          e[r].marker.explicitlyCleared
            ? t || (t = e.slice(0, r))
            : t && t.push(e[r]);
        return t ? (t.length ? t : null) : e;
      }
      function Vi(e, t) {
        var r = (function (e, t) {
            var r = t["spans_" + e.id];
            if (!r) return null;
            for (var n = [], i = 0; i < t.text.length; ++i) n.push(zi(r[i]));
            return n;
          })(e, t),
          n = At(e, t);
        if (!r) return n;
        if (!n) return r;
        for (var i = 0; i < r.length; ++i) {
          var o = r[i],
            a = n[i];
          if (o && a)
            e: for (var s = 0; s < a.length; ++s) {
              for (var l = a[s], c = 0; c < o.length; ++c)
                if (o[c].marker == l.marker) continue e;
              o.push(l);
            }
          else a && (r[i] = a);
        }
        return r;
      }
      function Ki(e, t, r) {
        for (var n = [], i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.ranges) n.push(r ? Ci.prototype.deepCopy.call(o) : o);
          else {
            var a = o.changes,
              s = [];
            n.push({ changes: s });
            for (var l = 0; l < a.length; ++l) {
              var c = a[l],
                u = void 0;
              if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
                for (var f in c)
                  (u = f.match(/^spans_(\d+)$/)) &&
                    W(t, Number(u[1])) > -1 &&
                    ((J(s)[f] = c[f]), delete c[f]);
            }
          }
        }
        return n;
      }
      function qi(e, t, r, n) {
        if (n) {
          var i = e.anchor;
          if (r) {
            var o = nt(t, i) < 0;
            o != nt(r, i) < 0
              ? ((i = t), (t = r))
              : o != nt(t, r) < 0 && (t = r);
          }
          return new _i(i, t);
        }
        return new _i(r || t, t);
      }
      function Yi(e, t, r, n, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
          Qi(e, new Ci([qi(e.sel.primary(), t, r, i)], 0), n);
      }
      function Gi(e, t, r) {
        for (
          var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
          o < e.sel.ranges.length;
          o++
        )
          n[o] = qi(e.sel.ranges[o], t[o], null, i);
        Qi(e, Si(e.cm, n, e.sel.primIndex), r);
      }
      function Xi(e, t, r, n) {
        var i = e.sel.ranges.slice(0);
        (i[t] = r), Qi(e, Si(e.cm, i, e.sel.primIndex), n);
      }
      function Zi(e, t, r, n) {
        Qi(e, Ti(t, r), n);
      }
      function Ji(e, t, r) {
        var n = e.history.done,
          i = J(n);
        i && i.ranges ? ((n[n.length - 1] = t), eo(e, t, r)) : Qi(e, t, r);
      }
      function Qi(e, t, r) {
        eo(e, t, r), Ui(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
      }
      function eo(e, t, r) {
        (xe(e, "beforeSelectionChange") ||
          (e.cm && xe(e.cm, "beforeSelectionChange"))) &&
          (t = (function (e, t, r) {
            var n = {
              ranges: t.ranges,
              update: function (t) {
                this.ranges = [];
                for (var r = 0; r < t.length; r++)
                  this.ranges[r] = new _i(ct(e, t[r].anchor), ct(e, t[r].head));
              },
              origin: r && r.origin,
            };
            return (
              ye(e, "beforeSelectionChange", e, n),
              e.cm && ye(e.cm, "beforeSelectionChange", e.cm, n),
              n.ranges != t.ranges ? Si(e.cm, n.ranges, n.ranges.length - 1) : t
            );
          })(e, t, r)),
          to(
            e,
            no(
              e,
              t,
              (r && r.bias) ||
                (nt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1),
              !0
            )
          ),
          (r && !1 === r.scroll) ||
            !e.cm ||
            "nocursor" == e.cm.getOption("readOnly") ||
            En(e.cm);
      }
      function to(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = 1),
            (e.cm.curOp.selectionChanged = !0),
            we(e.cm)),
          cr(e, "cursorActivity", e));
      }
      function ro(e) {
        to(e, no(e, e.sel, null, !1));
      }
      function no(e, t, r, n) {
        for (var i, o = 0; o < t.ranges.length; o++) {
          var a = t.ranges[o],
            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            l = oo(e, a.anchor, s && s.anchor, r, n),
            c = a.head == a.anchor ? l : oo(e, a.head, s && s.head, r, n);
          (i || l != a.anchor || c != a.head) &&
            (i || (i = t.ranges.slice(0, o)), (i[o] = new _i(l, c)));
        }
        return i ? Si(e.cm, i, t.primIndex) : t;
      }
      function io(e, t, r, n, i) {
        var o = Ye(e, t.line);
        if (o.markedSpans)
          for (var a = 0; a < o.markedSpans.length; ++a) {
            var s = o.markedSpans[a],
              l = s.marker,
              c = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
              u = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
            if (
              (null == s.from || (c ? s.from <= t.ch : s.from < t.ch)) &&
              (null == s.to || (u ? s.to >= t.ch : s.to > t.ch))
            ) {
              if (i && (ye(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                if (o.markedSpans) {
                  --a;
                  continue;
                }
                break;
              }
              if (!l.atomic) continue;
              if (r) {
                var f = l.find(n < 0 ? 1 : -1),
                  h = void 0;
                if (
                  ((n < 0 ? u : c) &&
                    (f = ao(e, f, -n, f && f.line == t.line ? o : null)),
                  f &&
                    f.line == t.line &&
                    (h = nt(f, r)) &&
                    (n < 0 ? h < 0 : h > 0))
                )
                  return io(e, f, t, n, i);
              }
              var d = l.find(n < 0 ? -1 : 1);
              return (
                (n < 0 ? c : u) &&
                  (d = ao(e, d, n, d.line == t.line ? o : null)),
                d ? io(e, d, t, n, i) : null
              );
            }
          }
        return t;
      }
      function oo(e, t, r, n, i) {
        var o = n || 1,
          a =
            io(e, t, r, o, i) ||
            (!i && io(e, t, r, o, !0)) ||
            io(e, t, r, -o, i) ||
            (!i && io(e, t, r, -o, !0));
        return a || ((e.cantEdit = !0), rt(e.first, 0));
      }
      function ao(e, t, r, n) {
        return r < 0 && 0 == t.ch
          ? t.line > e.first
            ? ct(e, rt(t.line - 1))
            : null
          : r > 0 && t.ch == (n || Ye(e, t.line)).text.length
          ? t.line < e.first + e.size - 1
            ? rt(t.line + 1, 0)
            : null
          : new rt(t.line, t.ch + r);
      }
      function so(e) {
        e.setSelection(rt(e.firstLine(), 0), rt(e.lastLine()), K);
      }
      function lo(e, t, r) {
        var n = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function () {
            return (n.canceled = !0);
          },
        };
        return (
          r &&
            (n.update = function (t, r, i, o) {
              t && (n.from = ct(e, t)),
                r && (n.to = ct(e, r)),
                i && (n.text = i),
                void 0 !== o && (n.origin = o);
            }),
          ye(e, "beforeChange", e, n),
          e.cm && ye(e.cm, "beforeChange", e.cm, n),
          n.canceled
            ? (e.cm && (e.cm.curOp.updateInput = 2), null)
            : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        );
      }
      function co(e, t, r) {
        if (e.cm) {
          if (!e.cm.curOp) return ei(e.cm, co)(e, t, r);
          if (e.cm.state.suppressEdits) return;
        }
        if (
          !(xe(e, "beforeChange") || (e.cm && xe(e.cm, "beforeChange"))) ||
          (t = lo(e, t, !0))
        ) {
          var n =
            _t &&
            !r &&
            (function (e, t, r) {
              var n = null;
              if (
                (e.iter(t.line, r.line + 1, function (e) {
                  if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                      var r = e.markedSpans[t].marker;
                      !r.readOnly ||
                        (n && -1 != W(n, r)) ||
                        (n || (n = [])).push(r);
                    }
                }),
                !n)
              )
                return null;
              for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
                for (var a = n[o], s = a.find(0), l = 0; l < i.length; ++l) {
                  var c = i[l];
                  if (!(nt(c.to, s.from) < 0 || nt(c.from, s.to) > 0)) {
                    var u = [l, 1],
                      f = nt(c.from, s.from),
                      h = nt(c.to, s.to);
                    (f < 0 || (!a.inclusiveLeft && !f)) &&
                      u.push({ from: c.from, to: s.from }),
                      (h > 0 || (!a.inclusiveRight && !h)) &&
                        u.push({ from: s.to, to: c.to }),
                      i.splice.apply(i, u),
                      (l += u.length - 3);
                  }
                }
              return i;
            })(e, t.from, t.to);
          if (n)
            for (var i = n.length - 1; i >= 0; --i)
              uo(e, {
                from: n[i].from,
                to: n[i].to,
                text: i ? [""] : t.text,
                origin: t.origin,
              });
          else uo(e, t);
        }
      }
      function uo(e, t) {
        if (1 != t.text.length || "" != t.text[0] || 0 != nt(t.from, t.to)) {
          var r = Ai(e, t);
          Fi(e, t, r, e.cm ? e.cm.curOp.id : NaN), po(e, t, r, At(e, t));
          var n = [];
          Ii(e, function (e, r) {
            r || -1 != W(n, e.history) || (yo(e.history, t), n.push(e.history)),
              po(e, t, null, At(e, t));
          });
        }
      }
      function fo(e, t, r) {
        var n = e.cm && e.cm.state.suppressEdits;
        if (!n || r) {
          for (
            var i,
              o = e.history,
              a = e.sel,
              s = "undo" == t ? o.done : o.undone,
              l = "undo" == t ? o.undone : o.done,
              c = 0;
            c < s.length &&
            ((i = s[c]), r ? !i.ranges || i.equals(e.sel) : i.ranges);
            c++
          );
          if (c != s.length) {
            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
              if (!(i = s.pop()).ranges) {
                if (n) return void s.push(i);
                break;
              }
              if ((ji(i, l), r && !i.equals(e.sel)))
                return void Qi(e, i, { clearRedo: !1 });
              a = i;
            }
            var u = [];
            ji(a, l),
              l.push({ changes: u, generation: o.generation }),
              (o.generation = i.generation || ++o.maxGeneration);
            for (
              var f =
                  xe(e, "beforeChange") || (e.cm && xe(e.cm, "beforeChange")),
                h = function (r) {
                  var n = i.changes[r];
                  if (((n.origin = t), f && !lo(e, n, !1)))
                    return (s.length = 0), {};
                  u.push($i(e, n));
                  var o = r ? Ai(e, n) : J(s);
                  po(e, n, o, Vi(e, n)),
                    !r &&
                      e.cm &&
                      e.cm.scrollIntoView({ from: n.from, to: ki(n) });
                  var a = [];
                  Ii(e, function (e, t) {
                    t ||
                      -1 != W(a, e.history) ||
                      (yo(e.history, n), a.push(e.history)),
                      po(e, n, null, Vi(e, n));
                  });
                },
                d = i.changes.length - 1;
              d >= 0;
              --d
            ) {
              var p = h(d);
              if (p) return p.v;
            }
          }
        }
      }
      function ho(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new Ci(
            Q(e.sel.ranges, function (e) {
              return new _i(
                rt(e.anchor.line + t, e.anchor.ch),
                rt(e.head.line + t, e.head.ch)
              );
            }),
            e.sel.primIndex
          )),
          e.cm)
        ) {
          fn(e.cm, e.first, e.first - t, t);
          for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
            hn(e.cm, n, "gutter");
        }
      }
      function po(e, t, r, n) {
        if (e.cm && !e.cm.curOp) return ei(e.cm, po)(e, t, r, n);
        if (t.to.line < e.first)
          ho(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            ho(e, i),
              (t = {
                from: rt(e.first, 0),
                to: rt(t.to.line + i, t.to.ch),
                text: [J(t.text)],
                origin: t.origin,
              });
          }
          var o = e.lastLine();
          t.to.line > o &&
            (t = {
              from: t.from,
              to: rt(o, Ye(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = Ge(e, t.from, t.to)),
            r || (r = Ai(e, t)),
            e.cm
              ? (function (e, t, r) {
                  var n = e.doc,
                    i = e.display,
                    o = t.from,
                    a = t.to,
                    s = !1,
                    l = o.line;
                  e.options.lineWrapping ||
                    ((l = Je(Ft(Ye(n, o.line)))),
                    n.iter(l, a.line + 1, function (e) {
                      if (e == i.maxLine) return (s = !0), !0;
                    }));
                  n.sel.contains(t.from, t.to) > -1 && we(e);
                  Ni(n, t, r, sn(e)),
                    e.options.lineWrapping ||
                      (n.iter(l, o.line + t.text.length, function (e) {
                        var t = Kt(e);
                        t > i.maxLineLength &&
                          ((i.maxLine = e),
                          (i.maxLineLength = t),
                          (i.maxLineChanged = !0),
                          (s = !1));
                      }),
                      s && (e.curOp.updateMaxLine = !0));
                  (function (e, t) {
                    if (
                      ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                      !(e.highlightFrontier < t - 10))
                    ) {
                      for (var r = e.first, n = t - 1; n > r; n--) {
                        var i = Ye(e, n).stateAfter;
                        if (i && (!(i instanceof ft) || n + i.lookAhead < t)) {
                          r = n + 1;
                          break;
                        }
                      }
                      e.highlightFrontier = Math.min(e.highlightFrontier, r);
                    }
                  })(n, o.line),
                    ni(e, 400);
                  var c = t.text.length - (a.line - o.line) - 1;
                  t.full
                    ? fn(e)
                    : o.line != a.line || 1 != t.text.length || Ri(e.doc, t)
                    ? fn(e, o.line, a.line + 1, c)
                    : hn(e, o.line, "text");
                  var u = xe(e, "changes"),
                    f = xe(e, "change");
                  if (f || u) {
                    var h = {
                      from: o,
                      to: a,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin,
                    };
                    f && cr(e, "change", e, h),
                      u &&
                        (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(
                          h
                        );
                  }
                  e.display.selForContextMenu = null;
                })(e.cm, t, n)
              : Ni(e, t, n),
            eo(e, r, K),
            e.cantEdit && oo(e, rt(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function go(e, t, r, n, i) {
        var o;
        n || (n = r),
          nt(n, r) < 0 && ((r = (o = [n, r])[0]), (n = o[1])),
          "string" == typeof t && (t = e.splitLines(t)),
          co(e, { from: r, to: n, text: t, origin: i });
      }
      function mo(e, t, r, n) {
        r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
      }
      function vo(e, t, r, n) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
            for (var s = 0; s < o.ranges.length; s++)
              mo(o.ranges[s].anchor, t, r, n), mo(o.ranges[s].head, t, r, n);
          } else {
            for (var l = 0; l < o.changes.length; ++l) {
              var c = o.changes[l];
              if (r < c.from.line)
                (c.from = rt(c.from.line + n, c.from.ch)),
                  (c.to = rt(c.to.line + n, c.to.ch));
              else if (t <= c.to.line) {
                a = !1;
                break;
              }
            }
            a || (e.splice(0, i + 1), (i = 0));
          }
        }
      }
      function yo(e, t) {
        var r = t.from.line,
          n = t.to.line,
          i = t.text.length - (n - r) - 1;
        vo(e.done, r, n, i), vo(e.undone, r, n, i);
      }
      function bo(e, t, r, n) {
        var i = t,
          o = t;
        return (
          "number" == typeof t ? (o = Ye(e, lt(e, t))) : (i = Je(t)),
          null == i ? null : (n(o, i) && e.cm && hn(e.cm, i, r), o)
        );
      }
      function wo(e) {
        (this.lines = e), (this.parent = null);
        for (var t = 0, r = 0; r < e.length; ++r)
          (e[r].parent = this), (t += e[r].height);
        this.height = t;
      }
      function xo(e) {
        this.children = e;
        for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
          var i = e[n];
          (t += i.chunkSize()), (r += i.height), (i.parent = this);
        }
        (this.size = t), (this.height = r), (this.parent = null);
      }
      (_i.prototype.from = function () {
        return st(this.anchor, this.head);
      }),
        (_i.prototype.to = function () {
          return at(this.anchor, this.head);
        }),
        (_i.prototype.empty = function () {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (wo.prototype = {
          chunkSize: function () {
            return this.lines.length;
          },
          removeInner: function (e, t) {
            for (var r = e, n = e + t; r < n; ++r) {
              var i = this.lines[r];
              (this.height -= i.height), Gt(i), cr(i, "delete");
            }
            this.lines.splice(e, t);
          },
          collapse: function (e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function (e, t, r) {
            (this.height += r),
              (this.lines = this.lines
                .slice(0, e)
                .concat(t)
                .concat(this.lines.slice(e)));
            for (var n = 0; n < t.length; ++n) t[n].parent = this;
          },
          iterN: function (e, t, r) {
            for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
          },
        }),
        (xo.prototype = {
          chunkSize: function () {
            return this.size;
          },
          removeInner: function (e, t) {
            this.size -= t;
            for (var r = 0; r < this.children.length; ++r) {
              var n = this.children[r],
                i = n.chunkSize();
              if (e < i) {
                var o = Math.min(t, i - e),
                  a = n.height;
                if (
                  (n.removeInner(e, o),
                  (this.height -= a - n.height),
                  i == o && (this.children.splice(r--, 1), (n.parent = null)),
                  0 == (t -= o))
                )
                  break;
                e = 0;
              } else e -= i;
            }
            if (
              this.size - t < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof wo))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new wo(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function (e) {
            for (var t = 0; t < this.children.length; ++t)
              this.children[t].collapse(e);
          },
          insertInner: function (e, t, r) {
            (this.size += t.length), (this.height += r);
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (e <= o) {
                if ((i.insertInner(e, t, r), i.lines && i.lines.length > 50)) {
                  for (
                    var a = (i.lines.length % 25) + 25, s = a;
                    s < i.lines.length;

                  ) {
                    var l = new wo(i.lines.slice(s, (s += 25)));
                    (i.height -= l.height),
                      this.children.splice(++n, 0, l),
                      (l.parent = this);
                  }
                  (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                }
                break;
              }
              e -= o;
            }
          },
          maybeSpill: function () {
            if (!(this.children.length <= 10)) {
              var e = this;
              do {
                var t = new xo(e.children.splice(e.children.length - 5, 5));
                if (e.parent) {
                  (e.size -= t.size), (e.height -= t.height);
                  var r = W(e.parent.children, e);
                  e.parent.children.splice(r + 1, 0, t);
                } else {
                  var n = new xo(e.children);
                  (n.parent = e), (e.children = [n, t]), (e = n);
                }
                t.parent = e.parent;
              } while (e.children.length > 10);
              e.parent.maybeSpill();
            }
          },
          iterN: function (e, t, r) {
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (e < o) {
                var a = Math.min(t, o - e);
                if (i.iterN(e, a, r)) return !0;
                if (0 == (t -= a)) break;
                e = 0;
              } else e -= o;
            }
          },
        });
      var Co = function (e, t, r) {
        if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
        (this.doc = e), (this.node = t);
      };
      function _o(e, t, r) {
        Vt(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && On(e, r);
      }
      (Co.prototype.clear = function () {
        var e = this.doc.cm,
          t = this.line.widgets,
          r = this.line,
          n = Je(r);
        if (null != n && t) {
          for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
          t.length || (r.widgets = null);
          var o = Cr(this);
          Ze(r, Math.max(0, r.height - o)),
            e &&
              (Qn(e, function () {
                _o(e, r, -o), hn(e, n, "widget");
              }),
              cr(e, "lineWidgetCleared", e, this, n));
        }
      }),
        (Co.prototype.changed = function () {
          var e = this,
            t = this.height,
            r = this.doc.cm,
            n = this.line;
          this.height = null;
          var i = Cr(this) - t;
          i &&
            (Wt(this.doc, n) || Ze(n, n.height + i),
            r &&
              Qn(r, function () {
                (r.curOp.forceUpdate = !0),
                  _o(r, n, i),
                  cr(r, "lineWidgetChanged", r, e, Je(n));
              }));
        }),
        Ce(Co);
      var So = 0,
        To = function (e, t) {
          (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++So);
        };
      function ko(e, t, r, n, i) {
        if (n && n.shared)
          return (function (e, t, r, n, i) {
            (n = F(n)).shared = !1;
            var o = [ko(e, t, r, n, i)],
              a = o[0],
              s = n.widgetNode;
            return (
              Ii(e, function (e) {
                s && (n.widgetNode = s.cloneNode(!0)),
                  o.push(ko(e, ct(e, t), ct(e, r), n, i));
                for (var l = 0; l < e.linked.length; ++l)
                  if (e.linked[l].isParent) return;
                a = J(o);
              }),
              new Lo(o, a)
            );
          })(e, t, r, n, i);
        if (e.cm && !e.cm.curOp) return ei(e.cm, ko)(e, t, r, n, i);
        var o = new To(e, i),
          a = nt(t, r);
        if ((n && F(n, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty)))
          return o;
        if (
          (o.replacedWith &&
            ((o.collapsed = !0),
            (o.widgetNode = E("span", [o.replacedWith], "CodeMirror-widget")),
            n.handleMouseEvents ||
              o.widgetNode.setAttribute("cm-ignore-events", "true"),
            n.insertLeft && (o.widgetNode.insertLeft = !0)),
          o.collapsed)
        ) {
          if (
            Bt(e, t.line, t, r, o) ||
            (t.line != r.line && Bt(e, r.line, t, r, o))
          )
            throw new Error(
              "Inserting collapsed marker partially overlapping an existing one"
            );
          St = !0;
        }
        o.addToHistory &&
          Fi(e, { from: t, to: r, origin: "markText" }, e.sel, NaN);
        var s,
          l = t.line,
          c = e.cm;
        if (
          (e.iter(l, r.line + 1, function (n) {
            c &&
              o.collapsed &&
              !c.options.lineWrapping &&
              Ft(n) == c.display.maxLine &&
              (s = !0),
              o.collapsed && l != t.line && Ze(n, 0),
              (function (e, t, r) {
                var n =
                  r &&
                  window.WeakSet &&
                  (r.markedSpans || (r.markedSpans = new WeakSet()));
                n && e.markedSpans && n.has(e.markedSpans)
                  ? e.markedSpans.push(t)
                  : ((e.markedSpans = e.markedSpans
                      ? e.markedSpans.concat([t])
                      : [t]),
                    n && n.add(e.markedSpans)),
                  t.marker.attachLine(e);
              })(
                n,
                new Tt(o, l == t.line ? t.ch : null, l == r.line ? r.ch : null),
                e.cm && e.cm.curOp
              ),
              ++l;
          }),
          o.collapsed &&
            e.iter(t.line, r.line + 1, function (t) {
              Wt(e, t) && Ze(t, 0);
            }),
          o.clearOnEnter &&
            ge(o, "beforeCursorEnter", function () {
              return o.clear();
            }),
          o.readOnly &&
            ((_t = !0),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          o.collapsed && ((o.id = ++So), (o.atomic = !0)),
          c)
        ) {
          if ((s && (c.curOp.updateMaxLine = !0), o.collapsed))
            fn(c, t.line, r.line + 1);
          else if (
            o.className ||
            o.startStyle ||
            o.endStyle ||
            o.css ||
            o.attributes ||
            o.title
          )
            for (var u = t.line; u <= r.line; u++) hn(c, u, "text");
          o.atomic && ro(c.doc), cr(c, "markerAdded", c, o);
        }
        return o;
      }
      (To.prototype.clear = function () {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            t = e && !e.curOp;
          if ((t && Kn(e), xe(this, "clear"))) {
            var r = this.find();
            r && cr(this, "clear", r.from, r.to);
          }
          for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o],
              s = kt(a.markedSpans, this);
            e && !this.collapsed
              ? hn(e, Je(a), "text")
              : e &&
                (null != s.to && (i = Je(a)), null != s.from && (n = Je(a))),
              (a.markedSpans = Lt(a.markedSpans, s)),
              null == s.from &&
                this.collapsed &&
                !Wt(this.doc, a) &&
                e &&
                Ze(a, rn(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var c = Ft(this.lines[l]),
                u = Kt(c);
              u > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = u),
                (e.display.maxLineChanged = !0));
            }
          null != n && e && this.collapsed && fn(e, n, i + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && ro(e.doc)),
            e && cr(e, "markerCleared", e, this, n, i),
            t && qn(e),
            this.parent && this.parent.clear();
        }
      }),
        (To.prototype.find = function (e, t) {
          var r, n;
          null == e && "bookmark" == this.type && (e = 1);
          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
              a = kt(o.markedSpans, this);
            if (null != a.from && ((r = rt(t ? o : Je(o), a.from)), -1 == e))
              return r;
            if (null != a.to && ((n = rt(t ? o : Je(o), a.to)), 1 == e))
              return n;
          }
          return r && { from: r, to: n };
        }),
        (To.prototype.changed = function () {
          var e = this,
            t = this.find(-1, !0),
            r = this,
            n = this.doc.cm;
          t &&
            n &&
            Qn(n, function () {
              var i = t.line,
                o = Je(t.line),
                a = Rr(n, o);
              if (
                (a &&
                  (Br(a),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !Wt(r.doc, i) && null != r.height)
              ) {
                var s = r.height;
                r.height = null;
                var l = Cr(r) - s;
                l && Ze(i, i.height + l);
              }
              cr(n, "markerChanged", n, e);
            });
        }),
        (To.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers && -1 != W(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(e);
        }),
        (To.prototype.detachLine = function (e) {
          if (
            (this.lines.splice(W(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }),
        Ce(To);
      var Lo = function (e, t) {
        (this.markers = e), (this.primary = t);
        for (var r = 0; r < e.length; ++r) e[r].parent = this;
      };
      function Ao(e) {
        return e.findMarks(
          rt(e.first, 0),
          e.clipPos(rt(e.lastLine())),
          function (e) {
            return e.parent;
          }
        );
      }
      function Mo(e) {
        for (
          var t = function (t) {
              var r = e[t],
                n = [r.primary.doc];
              Ii(r.primary.doc, function (e) {
                return n.push(e);
              });
              for (var i = 0; i < r.markers.length; i++) {
                var o = r.markers[i];
                -1 == W(n, o.doc) &&
                  ((o.parent = null), r.markers.splice(i--, 1));
              }
            },
            r = 0;
          r < e.length;
          r++
        )
          t(r);
      }
      (Lo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
          cr(this, "clear");
        }
      }),
        (Lo.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        }),
        Ce(Lo);
      var Oo = 0,
        Eo = function (e, t, r, n, i) {
          if (!(this instanceof Eo)) return new Eo(e, t, r, n, i);
          null == r && (r = 0),
            xo.call(this, [new wo([new Yt("", null)])]),
            (this.first = r),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = r);
          var o = rt(r, 0);
          (this.sel = Ti(o)),
            (this.history = new Hi(null)),
            (this.id = ++Oo),
            (this.modeOption = t),
            (this.lineSep = n),
            (this.direction = "rtl" == i ? "rtl" : "ltr"),
            (this.extend = !1),
            "string" == typeof e && (e = this.splitLines(e)),
            Ni(this, { from: o, to: o, text: e }),
            Qi(this, Ti(o), K);
        };
      (Eo.prototype = te(xo.prototype, {
        constructor: Eo,
        iter: function (e, t, r) {
          r
            ? this.iterN(e - this.first, t - e, r)
            : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function (e, t) {
          for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
          this.insertInner(e - this.first, t, r);
        },
        remove: function (e, t) {
          this.removeInner(e - this.first, t);
        },
        getValue: function (e) {
          var t = Xe(this, this.first, this.first + this.size);
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        setValue: ri(function (e) {
          var t = rt(this.first, 0),
            r = this.first + this.size - 1;
          co(
            this,
            {
              from: t,
              to: rt(r, Ye(this, r).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0,
            },
            !0
          ),
            this.cm && Rn(this.cm, 0, 0),
            Qi(this, Ti(t), K);
        }),
        replaceRange: function (e, t, r, n) {
          go(this, e, (t = ct(this, t)), (r = r ? ct(this, r) : t), n);
        },
        getRange: function (e, t, r) {
          var n = Ge(this, ct(this, e), ct(this, t));
          return !1 === r
            ? n
            : "" === r
            ? n.join("")
            : n.join(r || this.lineSeparator());
        },
        getLine: function (e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function (e) {
          if (et(this, e)) return Ye(this, e);
        },
        getLineNumber: function (e) {
          return Je(e);
        },
        getLineHandleVisualStart: function (e) {
          return "number" == typeof e && (e = Ye(this, e)), Ft(e);
        },
        lineCount: function () {
          return this.size;
        },
        firstLine: function () {
          return this.first;
        },
        lastLine: function () {
          return this.first + this.size - 1;
        },
        clipPos: function (e) {
          return ct(this, e);
        },
        getCursor: function (e) {
          var t = this.sel.primary();
          return null == e || "head" == e
            ? t.head
            : "anchor" == e
            ? t.anchor
            : "end" == e || "to" == e || !1 === e
            ? t.to()
            : t.from();
        },
        listSelections: function () {
          return this.sel.ranges;
        },
        somethingSelected: function () {
          return this.sel.somethingSelected();
        },
        setCursor: ri(function (e, t, r) {
          Zi(this, ct(this, "number" == typeof e ? rt(e, t || 0) : e), null, r);
        }),
        setSelection: ri(function (e, t, r) {
          Zi(this, ct(this, e), ct(this, t || e), r);
        }),
        extendSelection: ri(function (e, t, r) {
          Yi(this, ct(this, e), t && ct(this, t), r);
        }),
        extendSelections: ri(function (e, t) {
          Gi(this, ut(this, e), t);
        }),
        extendSelectionsBy: ri(function (e, t) {
          Gi(this, ut(this, Q(this.sel.ranges, e)), t);
        }),
        setSelections: ri(function (e, t, r) {
          if (e.length) {
            for (var n = [], i = 0; i < e.length; i++)
              n[i] = new _i(
                ct(this, e[i].anchor),
                ct(this, e[i].head || e[i].anchor)
              );
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              Qi(this, Si(this.cm, n, t), r);
          }
        }),
        addSelection: ri(function (e, t, r) {
          var n = this.sel.ranges.slice(0);
          n.push(new _i(ct(this, e), ct(this, t || e))),
            Qi(this, Si(this.cm, n, n.length - 1), r);
        }),
        getSelection: function (e) {
          for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
            var i = Ge(this, r[n].from(), r[n].to());
            t = t ? t.concat(i) : i;
          }
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        getSelections: function (e) {
          for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
            var i = Ge(this, r[n].from(), r[n].to());
            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[n] = i);
          }
          return t;
        },
        replaceSelection: function (e, t, r) {
          for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
          this.replaceSelections(n, t, r || "+input");
        },
        replaceSelections: ri(function (e, t, r) {
          for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var a = i.ranges[o];
            n[o] = {
              from: a.from(),
              to: a.to(),
              text: this.splitLines(e[o]),
              origin: r,
            };
          }
          for (
            var s =
                t &&
                "end" != t &&
                (function (e, t, r) {
                  for (
                    var n = [], i = rt(e.first, 0), o = i, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var s = t[a],
                      l = Mi(s.from, i, o),
                      c = Mi(ki(s), i, o);
                    if (((i = s.to), (o = c), "around" == r)) {
                      var u = e.sel.ranges[a],
                        f = nt(u.head, u.anchor) < 0;
                      n[a] = new _i(f ? c : l, f ? l : c);
                    } else n[a] = new _i(l, l);
                  }
                  return new Ci(n, e.sel.primIndex);
                })(this, n, t),
              l = n.length - 1;
            l >= 0;
            l--
          )
            co(this, n[l]);
          s ? Ji(this, s) : this.cm && En(this.cm);
        }),
        undo: ri(function () {
          fo(this, "undo");
        }),
        redo: ri(function () {
          fo(this, "redo");
        }),
        undoSelection: ri(function () {
          fo(this, "undo", !0);
        }),
        redoSelection: ri(function () {
          fo(this, "redo", !0);
        }),
        setExtending: function (e) {
          this.extend = e;
        },
        getExtending: function () {
          return this.extend;
        },
        historySize: function () {
          for (
            var e = this.history, t = 0, r = 0, n = 0;
            n < e.done.length;
            n++
          )
            e.done[n].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
          return { undo: t, redo: r };
        },
        clearHistory: function () {
          var e = this;
          (this.history = new Hi(this.history)),
            Ii(
              this,
              function (t) {
                return (t.history = e.history);
              },
              !0
            );
        },
        markClean: function () {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function (e) {
          return (
            e &&
              (this.history.lastOp =
                this.history.lastSelOp =
                this.history.lastOrigin =
                  null),
            this.history.generation
          );
        },
        isClean: function (e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function () {
          return {
            done: Ki(this.history.done),
            undone: Ki(this.history.undone),
          };
        },
        setHistory: function (e) {
          var t = (this.history = new Hi(this.history));
          (t.done = Ki(e.done.slice(0), null, !0)),
            (t.undone = Ki(e.undone.slice(0), null, !0));
        },
        setGutterMarker: ri(function (e, t, r) {
          return bo(this, e, "gutter", function (e) {
            var n = e.gutterMarkers || (e.gutterMarkers = {});
            return (n[t] = r), !r && oe(n) && (e.gutterMarkers = null), !0;
          });
        }),
        clearGutter: ri(function (e) {
          var t = this;
          this.iter(function (r) {
            r.gutterMarkers &&
              r.gutterMarkers[e] &&
              bo(t, r, "gutter", function () {
                return (
                  (r.gutterMarkers[e] = null),
                  oe(r.gutterMarkers) && (r.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function (e) {
          var t;
          if ("number" == typeof e) {
            if (!et(this, e)) return null;
            if (((t = e), !(e = Ye(this, e)))) return null;
          } else if (null == (t = Je(e))) return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          };
        },
        addLineClass: ri(function (e, t, r) {
          return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
            var n =
              "text" == t
                ? "textClass"
                : "background" == t
                ? "bgClass"
                : "gutter" == t
                ? "gutterClass"
                : "wrapClass";
            if (e[n]) {
              if (T(r).test(e[n])) return !1;
              e[n] += " " + r;
            } else e[n] = r;
            return !0;
          });
        }),
        removeLineClass: ri(function (e, t, r) {
          return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
            var n =
                "text" == t
                  ? "textClass"
                  : "background" == t
                  ? "bgClass"
                  : "gutter" == t
                  ? "gutterClass"
                  : "wrapClass",
              i = e[n];
            if (!i) return !1;
            if (null == r) e[n] = null;
            else {
              var o = i.match(T(r));
              if (!o) return !1;
              var a = o.index + o[0].length;
              e[n] =
                i.slice(0, o.index) +
                  (o.index && a != i.length ? " " : "") +
                  i.slice(a) || null;
            }
            return !0;
          });
        }),
        addLineWidget: ri(function (e, t, r) {
          return (function (e, t, r, n) {
            var i = new Co(e, r, n),
              o = e.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              bo(e, t, "widget", function (t) {
                var r = t.widgets || (t.widgets = []);
                if (
                  (null == i.insertAt
                    ? r.push(i)
                    : r.splice(
                        Math.min(r.length, Math.max(0, i.insertAt)),
                        0,
                        i
                      ),
                  (i.line = t),
                  o && !Wt(e, t))
                ) {
                  var n = Vt(t) < e.scrollTop;
                  Ze(t, t.height + Cr(i)),
                    n && On(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              o &&
                cr(
                  o,
                  "lineWidgetAdded",
                  o,
                  i,
                  "number" == typeof t ? t : Je(t)
                ),
              i
            );
          })(this, e, t, r);
        }),
        removeLineWidget: function (e) {
          e.clear();
        },
        markText: function (e, t, r) {
          return ko(
            this,
            ct(this, e),
            ct(this, t),
            r,
            (r && r.type) || "range"
          );
        },
        setBookmark: function (e, t) {
          var r = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          };
          return ko(this, (e = ct(this, e)), e, r, "bookmark");
        },
        findMarksAt: function (e) {
          var t = [],
            r = Ye(this, (e = ct(this, e)).line).markedSpans;
          if (r)
            for (var n = 0; n < r.length; ++n) {
              var i = r[n];
              (null == i.from || i.from <= e.ch) &&
                (null == i.to || i.to >= e.ch) &&
                t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function (e, t, r) {
          (e = ct(this, e)), (t = ct(this, t));
          var n = [],
            i = e.line;
          return (
            this.iter(e.line, t.line + 1, function (o) {
              var a = o.markedSpans;
              if (a)
                for (var s = 0; s < a.length; s++) {
                  var l = a[s];
                  (null != l.to && i == e.line && e.ch >= l.to) ||
                    (null == l.from && i != e.line) ||
                    (null != l.from && i == t.line && l.from >= t.ch) ||
                    (r && !r(l.marker)) ||
                    n.push(l.marker.parent || l.marker);
                }
              ++i;
            }),
            n
          );
        },
        getAllMarks: function () {
          var e = [];
          return (
            this.iter(function (t) {
              var r = t.markedSpans;
              if (r)
                for (var n = 0; n < r.length; ++n)
                  null != r[n].from && e.push(r[n].marker);
            }),
            e
          );
        },
        posFromIndex: function (e) {
          var t,
            r = this.first,
            n = this.lineSeparator().length;
          return (
            this.iter(function (i) {
              var o = i.text.length + n;
              if (o > e) return (t = e), !0;
              (e -= o), ++r;
            }),
            ct(this, rt(r, t))
          );
        },
        indexFromPos: function (e) {
          var t = (e = ct(this, e)).ch;
          if (e.line < this.first || e.ch < 0) return 0;
          var r = this.lineSeparator().length;
          return (
            this.iter(this.first, e.line, function (e) {
              t += e.text.length + r;
            }),
            t
          );
        },
        copy: function (e) {
          var t = new Eo(
            Xe(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          );
        },
        linkedDoc: function (e) {
          e || (e = {});
          var t = this.first,
            r = this.first + this.size;
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < r && (r = e.to);
          var n = new Eo(
            Xe(this, t, r),
            e.mode || this.modeOption,
            t,
            this.lineSep,
            this.direction
          );
          return (
            e.sharedHist && (n.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: e.sharedHist,
            }),
            (n.linked = [
              { doc: this, isParent: !0, sharedHist: e.sharedHist },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r],
                  i = n.find(),
                  o = e.clipPos(i.from),
                  a = e.clipPos(i.to);
                if (nt(o, a)) {
                  var s = ko(e, o, a, n.primary, n.primary.type);
                  n.markers.push(s), (s.parent = n);
                }
              }
            })(n, Ao(this)),
            n
          );
        },
        unlinkDoc: function (e) {
          if ((e instanceof La && (e = e.doc), this.linked))
            for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Mo(Ao(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            Ii(
              e,
              function (e) {
                return r.push(e.id);
              },
              !0
            ),
              (e.history = new Hi(null)),
              (e.history.done = Ki(this.history.done, r)),
              (e.history.undone = Ki(this.history.undone, r));
          }
        },
        iterLinkedDocs: function (e) {
          Ii(this, e);
        },
        getMode: function () {
          return this.mode;
        },
        getEditor: function () {
          return this.cm;
        },
        splitLines: function (e) {
          return this.lineSep ? e.split(this.lineSep) : Ie(e);
        },
        lineSeparator: function () {
          return this.lineSep || "\n";
        },
        setDirection: ri(function (e) {
          "rtl" != e && (e = "ltr"),
            e != this.direction &&
              ((this.direction = e),
              this.iter(function (e) {
                return (e.order = null);
              }),
              this.cm &&
                (function (e) {
                  Qn(e, function () {
                    Pi(e), fn(e);
                  });
                })(this.cm));
        }),
      })),
        (Eo.prototype.eachLine = Eo.prototype.iter);
      var Ro = 0;
      function No(e) {
        var t = this;
        if ((Io(t), !be(t, e) && !_r(t.display, e))) {
          _e(e), a && (Ro = +new Date());
          var r = cn(t, e, !0),
            n = e.dataTransfer.files;
          if (r && !t.isReadOnly())
            if (n && n.length && window.FileReader && window.File)
              for (
                var i = n.length,
                  o = Array(i),
                  s = 0,
                  l = function () {
                    ++s == i &&
                      ei(t, function () {
                        var e = {
                          from: (r = ct(t.doc, r)),
                          to: r,
                          text: t.doc.splitLines(
                            o
                              .filter(function (e) {
                                return null != e;
                              })
                              .join(t.doc.lineSeparator())
                          ),
                          origin: "paste",
                        };
                        co(t.doc, e),
                          Ji(t.doc, Ti(ct(t.doc, r), ct(t.doc, ki(e))));
                      })();
                  },
                  c = function (e, r) {
                    if (
                      t.options.allowDropFileTypes &&
                      -1 == W(t.options.allowDropFileTypes, e.type)
                    )
                      l();
                    else {
                      var n = new FileReader();
                      (n.onerror = function () {
                        return l();
                      }),
                        (n.onload = function () {
                          var e = n.result;
                          /[\x00-\x08\x0e-\x1f]{2}/.test(e)
                            ? l()
                            : ((o[r] = e), l());
                        }),
                        n.readAsText(e);
                    }
                  },
                  u = 0;
                u < n.length;
                u++
              )
                c(n[u], u);
            else {
              if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function () {
                    return t.display.input.focus();
                  }, 20)
                );
              try {
                var f = e.dataTransfer.getData("Text");
                if (f) {
                  var h;
                  if (
                    (t.state.draggingText &&
                      !t.state.draggingText.copy &&
                      (h = t.listSelections()),
                    eo(t.doc, Ti(r, r)),
                    h)
                  )
                    for (var d = 0; d < h.length; ++d)
                      go(t.doc, "", h[d].anchor, h[d].head, "drag");
                  t.replaceSelection(f, "around", "paste"),
                    t.display.input.focus();
                }
              } catch (e) {}
            }
        }
      }
      function Io(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null));
      }
      function Do(e) {
        if (document.getElementsByClassName) {
          for (
            var t = document.getElementsByClassName("CodeMirror"),
              r = [],
              n = 0;
            n < t.length;
            n++
          ) {
            var i = t[n].CodeMirror;
            i && r.push(i);
          }
          r.length &&
            r[0].operation(function () {
              for (var t = 0; t < r.length; t++) e(r[t]);
            });
        }
      }
      var Po = !1;
      function Ho() {
        Po ||
          (!(function () {
            var e;
            ge(window, "resize", function () {
              null == e &&
                (e = setTimeout(function () {
                  (e = null), Do($o);
                }, 100));
            }),
              ge(window, "blur", function () {
                return Do(Tn);
              });
          })(),
          (Po = !0));
      }
      function $o(e) {
        var t = e.display;
        (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize();
      }
      for (
        var Bo = {
            3: "Pause",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "PrintScrn",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Mod",
            92: "Mod",
            93: "Mod",
            106: "*",
            107: "=",
            109: "-",
            110: ".",
            111: "/",
            145: "ScrollLock",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            224: "Mod",
            63232: "Up",
            63233: "Down",
            63234: "Left",
            63235: "Right",
            63272: "Delete",
            63273: "Home",
            63275: "End",
            63276: "PageUp",
            63277: "PageDown",
            63302: "Insert",
          },
          Fo = 0;
        Fo < 10;
        Fo++
      )
        Bo[Fo + 48] = Bo[Fo + 96] = String(Fo);
      for (var Uo = 65; Uo <= 90; Uo++) Bo[Uo] = String.fromCharCode(Uo);
      for (var jo = 1; jo <= 12; jo++) Bo[jo + 111] = Bo[jo + 63235] = "F" + jo;
      var Wo = {};
      function zo(e) {
        var t,
          r,
          n,
          i,
          o = e.split(/-(?!$)/);
        e = o[o.length - 1];
        for (var a = 0; a < o.length - 1; a++) {
          var s = o[a];
          if (/^(cmd|meta|m)$/i.test(s)) i = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
          else {
            if (!/^s(hift)?$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            n = !0;
          }
        }
        return (
          t && (e = "Alt-" + e),
          r && (e = "Ctrl-" + e),
          i && (e = "Cmd-" + e),
          n && (e = "Shift-" + e),
          e
        );
      }
      function Vo(e) {
        var t = {};
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var n = e[r];
            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
            if ("..." == n) {
              delete e[r];
              continue;
            }
            for (var i = Q(r.split(" "), zo), o = 0; o < i.length; o++) {
              var a = void 0,
                s = void 0;
              o == i.length - 1
                ? ((s = i.join(" ")), (a = n))
                : ((s = i.slice(0, o + 1).join(" ")), (a = "..."));
              var l = t[s];
              if (l) {
                if (l != a) throw new Error("Inconsistent bindings for " + s);
              } else t[s] = a;
            }
            delete e[r];
          }
        for (var c in t) e[c] = t[c];
        return e;
      }
      function Ko(e, t, r, n) {
        var i = (t = Xo(t)).call ? t.call(e, n) : t[e];
        if (!1 === i) return "nothing";
        if ("..." === i) return "multi";
        if (null != i && r(i)) return "handled";
        if (t.fallthrough) {
          if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
            return Ko(e, t.fallthrough, r, n);
          for (var o = 0; o < t.fallthrough.length; o++) {
            var a = Ko(e, t.fallthrough[o], r, n);
            if (a) return a;
          }
        }
      }
      function qo(e) {
        var t = "string" == typeof e ? e : Bo[e.keyCode];
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
      }
      function Yo(e, t, r) {
        var n = e;
        return (
          t.altKey && "Alt" != n && (e = "Alt-" + e),
          (_ ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
          (_ ? t.ctrlKey : t.metaKey) && "Mod" != n && (e = "Cmd-" + e),
          !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
          e
        );
      }
      function Go(e, t) {
        if (h && 34 == e.keyCode && e.char) return !1;
        var r = Bo[e.keyCode];
        return (
          null != r &&
          !e.altGraphKey &&
          (3 == e.keyCode && e.code && (r = e.code), Yo(r, e, t))
        );
      }
      function Xo(e) {
        return "string" == typeof e ? Wo[e] : e;
      }
      function Zo(e, t) {
        for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
          for (var o = t(r[i]); n.length && nt(o.from, J(n).to) <= 0; ) {
            var a = n.pop();
            if (nt(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          n.push(o);
        }
        Qn(e, function () {
          for (var t = n.length - 1; t >= 0; t--)
            go(e.doc, "", n[t].from, n[t].to, "+delete");
          En(e);
        });
      }
      function Jo(e, t, r) {
        var n = le(e.text, t + r, r);
        return n < 0 || n > e.text.length ? null : n;
      }
      function Qo(e, t, r) {
        var n = Jo(e, t.ch, r);
        return null == n ? null : new rt(t.line, n, r < 0 ? "after" : "before");
      }
      function ea(e, t, r, n, i) {
        if (e) {
          "rtl" == t.doc.direction && (i = -i);
          var o = de(r, t.doc.direction);
          if (o) {
            var a,
              s = i < 0 ? J(o) : o[0],
              l = i < 0 == (1 == s.level) ? "after" : "before";
            if (s.level > 0 || "rtl" == t.doc.direction) {
              var c = Nr(t, r);
              a = i < 0 ? r.text.length - 1 : 0;
              var u = Ir(t, c, a).top;
              (a = ce(
                function (e) {
                  return Ir(t, c, e).top == u;
                },
                i < 0 == (1 == s.level) ? s.from : s.to - 1,
                a
              )),
                "before" == l && (a = Jo(r, a, 1));
            } else a = i < 0 ? s.to : s.from;
            return new rt(n, a, l);
          }
        }
        return new rt(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after");
      }
      (Wo.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection",
      }),
        (Wo.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic",
        }),
        (Wo.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine",
        }),
        (Wo.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"],
        }),
        (Wo.default = b ? Wo.macDefault : Wo.pcDefault);
      var ta = {
        selectAll: so,
        singleSelection: function (e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), K);
        },
        killLine: function (e) {
          return Zo(e, function (t) {
            if (t.empty()) {
              var r = Ye(e.doc, t.head.line).text.length;
              return t.head.ch == r && t.head.line < e.lastLine()
                ? { from: t.head, to: rt(t.head.line + 1, 0) }
                : { from: t.head, to: rt(t.head.line, r) };
            }
            return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function (e) {
          return Zo(e, function (t) {
            return {
              from: rt(t.from().line, 0),
              to: ct(e.doc, rt(t.to().line + 1, 0)),
            };
          });
        },
        delLineLeft: function (e) {
          return Zo(e, function (e) {
            return { from: rt(e.from().line, 0), to: e.from() };
          });
        },
        delWrappedLineLeft: function (e) {
          return Zo(e, function (t) {
            var r = e.charCoords(t.head, "div").top + 5;
            return {
              from: e.coordsChar({ left: 0, top: r }, "div"),
              to: t.from(),
            };
          });
        },
        delWrappedLineRight: function (e) {
          return Zo(e, function (t) {
            var r = e.charCoords(t.head, "div").top + 5,
              n = e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: r },
                "div"
              );
            return { from: t.from(), to: n };
          });
        },
        undo: function (e) {
          return e.undo();
        },
        redo: function (e) {
          return e.redo();
        },
        undoSelection: function (e) {
          return e.undoSelection();
        },
        redoSelection: function (e) {
          return e.redoSelection();
        },
        goDocStart: function (e) {
          return e.extendSelection(rt(e.firstLine(), 0));
        },
        goDocEnd: function (e) {
          return e.extendSelection(rt(e.lastLine()));
        },
        goLineStart: function (e) {
          return e.extendSelectionsBy(
            function (t) {
              return ra(e, t.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function (e) {
          return e.extendSelectionsBy(
            function (t) {
              return na(e, t.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function (e) {
          return e.extendSelectionsBy(
            function (t) {
              return (function (e, t) {
                var r = Ye(e.doc, t),
                  n = (function (e) {
                    for (var t; (t = Ht(e)); ) e = t.find(1, !0).line;
                    return e;
                  })(r);
                n != r && (t = Je(n));
                return ea(!0, e, r, t, -1);
              })(e, t.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function (e) {
          return e.extendSelectionsBy(function (t) {
            var r = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: r },
              "div"
            );
          }, Y);
        },
        goLineLeft: function (e) {
          return e.extendSelectionsBy(function (t) {
            var r = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: r }, "div");
          }, Y);
        },
        goLineLeftSmart: function (e) {
          return e.extendSelectionsBy(function (t) {
            var r = e.cursorCoords(t.head, "div").top + 5,
              n = e.coordsChar({ left: 0, top: r }, "div");
            return n.ch < e.getLine(n.line).search(/\S/) ? na(e, t.head) : n;
          }, Y);
        },
        goLineUp: function (e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function (e) {
          return e.moveV(1, "line");
        },
        goPageUp: function (e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function (e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function (e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function (e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function (e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function (e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function (e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function (e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function (e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function (e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function (e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function (e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function (e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function (e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function (e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function (e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function (e) {
          return e.indentSelection("smart");
        },
        indentMore: function (e) {
          return e.indentSelection("add");
        },
        indentLess: function (e) {
          return e.indentSelection("subtract");
        },
        insertTab: function (e) {
          return e.replaceSelection("\t");
        },
        insertSoftTab: function (e) {
          for (
            var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0;
            i < r.length;
            i++
          ) {
            var o = r[i].from(),
              a = U(e.getLine(o.line), o.ch, n);
            t.push(Z(n - (a % n)));
          }
          e.replaceSelections(t);
        },
        defaultTab: function (e) {
          e.somethingSelected()
            ? e.indentSelection("add")
            : e.execCommand("insertTab");
        },
        transposeChars: function (e) {
          return Qn(e, function () {
            for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
              if (t[n].empty()) {
                var i = t[n].head,
                  o = Ye(e.doc, i.line).text;
                if (o)
                  if (
                    (i.ch == o.length && (i = new rt(i.line, i.ch - 1)),
                    i.ch > 0)
                  )
                    (i = new rt(i.line, i.ch + 1)),
                      e.replaceRange(
                        o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                        rt(i.line, i.ch - 2),
                        i,
                        "+transpose"
                      );
                  else if (i.line > e.doc.first) {
                    var a = Ye(e.doc, i.line - 1).text;
                    a &&
                      ((i = new rt(i.line, 1)),
                      e.replaceRange(
                        o.charAt(0) +
                          e.doc.lineSeparator() +
                          a.charAt(a.length - 1),
                        rt(i.line - 1, a.length - 1),
                        i,
                        "+transpose"
                      ));
                  }
                r.push(new _i(i, i));
              }
            e.setSelections(r);
          });
        },
        newlineAndIndent: function (e) {
          return Qn(e, function () {
            for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
              e.replaceRange(
                e.doc.lineSeparator(),
                t[r].anchor,
                t[r].head,
                "+input"
              );
            t = e.listSelections();
            for (var n = 0; n < t.length; n++)
              e.indentLine(t[n].from().line, null, !0);
            En(e);
          });
        },
        openLine: function (e) {
          return e.replaceSelection("\n", "start");
        },
        toggleOverwrite: function (e) {
          return e.toggleOverwrite();
        },
      };
      function ra(e, t) {
        var r = Ye(e.doc, t),
          n = Ft(r);
        return n != r && (t = Je(n)), ea(!0, e, n, t, 1);
      }
      function na(e, t) {
        var r = ra(e, t.line),
          n = Ye(e.doc, r.line),
          i = de(n, e.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(r.ch, n.text.search(/\S/)),
            a = t.line == r.line && t.ch <= o && t.ch;
          return rt(r.line, a ? 0 : o, r.sticky);
        }
        return r;
      }
      function ia(e, t, r) {
        if ("string" == typeof t && !(t = ta[t])) return !1;
        e.display.input.ensurePolled();
        var n = e.display.shift,
          i = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            r && (e.display.shift = !1),
            (i = t(e) != V);
        } finally {
          (e.display.shift = n), (e.state.suppressEdits = !1);
        }
        return i;
      }
      var oa = new j();
      function aa(e, t, r, n) {
        var i = e.state.keySeq;
        if (i) {
          if (qo(t)) return "handled";
          if (
            (/\'$/.test(t)
              ? (e.state.keySeq = null)
              : oa.set(50, function () {
                  e.state.keySeq == i &&
                    ((e.state.keySeq = null), e.display.input.reset());
                }),
            sa(e, i + " " + t, r, n))
          )
            return !0;
        }
        return sa(e, t, r, n);
      }
      function sa(e, t, r, n) {
        var i = (function (e, t, r) {
          for (var n = 0; n < e.state.keyMaps.length; n++) {
            var i = Ko(t, e.state.keyMaps[n], r, e);
            if (i) return i;
          }
          return (
            (e.options.extraKeys && Ko(t, e.options.extraKeys, r, e)) ||
            Ko(t, e.options.keyMap, r, e)
          );
        })(e, t, n);
        return (
          "multi" == i && (e.state.keySeq = t),
          "handled" == i && cr(e, "keyHandled", e, t, r),
          ("handled" != i && "multi" != i) || (_e(r), xn(e)),
          !!i
        );
      }
      function la(e, t) {
        var r = Go(t, !0);
        return (
          !!r &&
          (t.shiftKey && !e.state.keySeq
            ? aa(e, "Shift-" + r, t, function (t) {
                return ia(e, t, !0);
              }) ||
              aa(e, r, t, function (t) {
                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  return ia(e, t);
              })
            : aa(e, r, t, function (t) {
                return ia(e, t);
              }))
        );
      }
      var ca = null;
      function ua(e) {
        var t = this;
        if (
          !(
            (e.target && e.target != t.display.input.getField()) ||
            ((t.curOp.focus = N(H(t))), be(t, e))
          )
        ) {
          a && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
          var n = e.keyCode;
          t.display.shift = 16 == n || e.shiftKey;
          var i = la(t, e);
          h &&
            ((ca = i ? n : null),
            !i &&
              88 == n &&
              !Pe &&
              (b ? e.metaKey : e.ctrlKey) &&
              t.replaceSelection("", null, "cut")),
            r &&
              !b &&
              !i &&
              46 == n &&
              e.shiftKey &&
              !e.ctrlKey &&
              document.execCommand &&
              document.execCommand("cut"),
            18 != n ||
              /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
              (function (e) {
                var t = e.display.lineDiv;
                function r(e) {
                  (18 != e.keyCode && e.altKey) ||
                    (L(t, "CodeMirror-crosshair"),
                    ve(document, "keyup", r),
                    ve(document, "mouseover", r));
                }
                I(t, "CodeMirror-crosshair"),
                  ge(document, "keyup", r),
                  ge(document, "mouseover", r);
              })(t);
        }
      }
      function fa(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), be(this, e);
      }
      function ha(e) {
        var t = this;
        if (
          !(
            (e.target && e.target != t.display.input.getField()) ||
            _r(t.display, e) ||
            be(t, e) ||
            (e.ctrlKey && !e.altKey) ||
            (b && e.metaKey)
          )
        ) {
          var r = e.keyCode,
            n = e.charCode;
          if (h && r == ca) return (ca = null), void _e(e);
          if (!h || (e.which && !(e.which < 10)) || !la(t, e)) {
            var i = String.fromCharCode(null == n ? r : n);
            "\b" != i &&
              ((function (e, t, r) {
                return aa(e, "'" + r + "'", t, function (t) {
                  return ia(e, t, !0);
                });
              })(t, e, i) ||
                t.display.input.onKeyPress(e));
          }
        }
      }
      var da,
        pa,
        ga = function (e, t, r) {
          (this.time = e), (this.pos = t), (this.button = r);
        };
      function ma(e) {
        var t = this,
          r = t.display;
        if (!(be(t, e) || (r.activeTouch && r.input.supportsTouch())))
          if ((r.input.ensurePolled(), (r.shift = e.shiftKey), _r(r, e)))
            l ||
              ((r.scroller.draggable = !1),
              setTimeout(function () {
                return (r.scroller.draggable = !0);
              }, 100));
          else if (!ba(t, e)) {
            var n = cn(t, e),
              i = Ae(e),
              o = n
                ? (function (e, t) {
                    var r = +new Date();
                    return pa && pa.compare(r, e, t)
                      ? ((da = pa = null), "triple")
                      : da && da.compare(r, e, t)
                      ? ((pa = new ga(r, e, t)), (da = null), "double")
                      : ((da = new ga(r, e, t)), (pa = null), "single");
                  })(n, i)
                : "single";
            $(t).focus(),
              1 == i && t.state.selectingText && t.state.selectingText(e),
              (n &&
                (function (e, t, r, n, i) {
                  var o = "Click";
                  "double" == n
                    ? (o = "Double" + o)
                    : "triple" == n && (o = "Triple" + o);
                  return aa(
                    e,
                    Yo(
                      (o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o),
                      i
                    ),
                    i,
                    function (t) {
                      if (("string" == typeof t && (t = ta[t]), !t)) return !1;
                      var n = !1;
                      try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                          (n = t(e, r) != V);
                      } finally {
                        e.state.suppressEdits = !1;
                      }
                      return n;
                    }
                  );
                })(t, i, n, o, e)) ||
                (1 == i
                  ? n
                    ? (function (e, t, r, n) {
                        a ? setTimeout(B(Cn, e), 0) : (e.curOp.focus = N(H(e)));
                        var i,
                          o = (function (e, t, r) {
                            var n = e.getOption("configureMouse"),
                              i = n ? n(e, t, r) : {};
                            if (null == i.unit) {
                              var o = w ? r.shiftKey && r.metaKey : r.altKey;
                              i.unit = o
                                ? "rectangle"
                                : "single" == t
                                ? "char"
                                : "double" == t
                                ? "word"
                                : "line";
                            }
                            (null == i.extend || e.doc.extend) &&
                              (i.extend = e.doc.extend || r.shiftKey);
                            null == i.addNew &&
                              (i.addNew = b ? r.metaKey : r.ctrlKey);
                            null == i.moveOnDrag &&
                              (i.moveOnDrag = !(b ? r.altKey : r.ctrlKey));
                            return i;
                          })(e, r, n),
                          c = e.doc.sel;
                        e.options.dragDrop &&
                        Ee &&
                        !e.isReadOnly() &&
                        "single" == r &&
                        (i = c.contains(t)) > -1 &&
                        (nt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                        (nt(i.to(), t) > 0 || t.xRel < 0)
                          ? (function (e, t, r, n) {
                              var i = e.display,
                                o = !1,
                                c = ei(e, function (t) {
                                  l && (i.scroller.draggable = !1),
                                    (e.state.draggingText = !1),
                                    e.state.delayingBlurEvent &&
                                      (e.hasFocus()
                                        ? (e.state.delayingBlurEvent = !1)
                                        : _n(e)),
                                    ve(i.wrapper.ownerDocument, "mouseup", c),
                                    ve(i.wrapper.ownerDocument, "mousemove", u),
                                    ve(i.scroller, "dragstart", f),
                                    ve(i.scroller, "drop", c),
                                    o ||
                                      (_e(t),
                                      n.addNew ||
                                        Yi(e.doc, r, null, null, n.extend),
                                      (l && !d) || (a && 9 == s)
                                        ? setTimeout(function () {
                                            i.wrapper.ownerDocument.body.focus({
                                              preventScroll: !0,
                                            }),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                u = function (e) {
                                  o =
                                    o ||
                                    Math.abs(t.clientX - e.clientX) +
                                      Math.abs(t.clientY - e.clientY) >=
                                      10;
                                },
                                f = function () {
                                  return (o = !0);
                                };
                              l && (i.scroller.draggable = !0);
                              (e.state.draggingText = c),
                                (c.copy = !n.moveOnDrag),
                                ge(i.wrapper.ownerDocument, "mouseup", c),
                                ge(i.wrapper.ownerDocument, "mousemove", u),
                                ge(i.scroller, "dragstart", f),
                                ge(i.scroller, "drop", c),
                                (e.state.delayingBlurEvent = !0),
                                setTimeout(function () {
                                  return i.input.focus();
                                }, 20),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                            })(e, n, t, o)
                          : (function (e, t, r, n) {
                              a && _n(e);
                              var i = e.display,
                                o = e.doc;
                              _e(t);
                              var s,
                                l,
                                c = o.sel,
                                u = c.ranges;
                              n.addNew && !n.extend
                                ? ((l = o.sel.contains(r)),
                                  (s = l > -1 ? u[l] : new _i(r, r)))
                                : ((s = o.sel.primary()),
                                  (l = o.sel.primIndex));
                              if ("rectangle" == n.unit)
                                n.addNew || (s = new _i(r, r)),
                                  (r = cn(e, t, !0, !0)),
                                  (l = -1);
                              else {
                                var f = va(e, r, n.unit);
                                s = n.extend
                                  ? qi(s, f.anchor, f.head, n.extend)
                                  : f;
                              }
                              n.addNew
                                ? -1 == l
                                  ? ((l = u.length),
                                    Qi(o, Si(e, u.concat([s]), l), {
                                      scroll: !1,
                                      origin: "*mouse",
                                    }))
                                  : u.length > 1 &&
                                    u[l].empty() &&
                                    "char" == n.unit &&
                                    !n.extend
                                  ? (Qi(
                                      o,
                                      Si(
                                        e,
                                        u.slice(0, l).concat(u.slice(l + 1)),
                                        0
                                      ),
                                      { scroll: !1, origin: "*mouse" }
                                    ),
                                    (c = o.sel))
                                  : Xi(o, l, s, q)
                                : ((l = 0),
                                  Qi(o, new Ci([s], 0), q),
                                  (c = o.sel));
                              var h = r;
                              function d(t) {
                                if (0 != nt(h, t))
                                  if (((h = t), "rectangle" == n.unit)) {
                                    for (
                                      var i = [],
                                        a = e.options.tabSize,
                                        u = U(Ye(o, r.line).text, r.ch, a),
                                        f = U(Ye(o, t.line).text, t.ch, a),
                                        d = Math.min(u, f),
                                        p = Math.max(u, f),
                                        g = Math.min(r.line, t.line),
                                        m = Math.min(
                                          e.lastLine(),
                                          Math.max(r.line, t.line)
                                        );
                                      g <= m;
                                      g++
                                    ) {
                                      var v = Ye(o, g).text,
                                        y = G(v, d, a);
                                      d == p
                                        ? i.push(new _i(rt(g, y), rt(g, y)))
                                        : v.length > y &&
                                          i.push(
                                            new _i(rt(g, y), rt(g, G(v, p, a)))
                                          );
                                    }
                                    i.length || i.push(new _i(r, r)),
                                      Qi(
                                        o,
                                        Si(
                                          e,
                                          c.ranges.slice(0, l).concat(i),
                                          l
                                        ),
                                        { origin: "*mouse", scroll: !1 }
                                      ),
                                      e.scrollIntoView(t);
                                  } else {
                                    var b,
                                      w = s,
                                      x = va(e, t, n.unit),
                                      C = w.anchor;
                                    nt(x.anchor, C) > 0
                                      ? ((b = x.head),
                                        (C = st(w.from(), x.anchor)))
                                      : ((b = x.anchor),
                                        (C = at(w.to(), x.head)));
                                    var _ = c.ranges.slice(0);
                                    (_[l] = (function (e, t) {
                                      var r = t.anchor,
                                        n = t.head,
                                        i = Ye(e.doc, r.line);
                                      if (0 == nt(r, n) && r.sticky == n.sticky)
                                        return t;
                                      var o = de(i);
                                      if (!o) return t;
                                      var a = fe(o, r.ch, r.sticky),
                                        s = o[a];
                                      if (s.from != r.ch && s.to != r.ch)
                                        return t;
                                      var l,
                                        c =
                                          a +
                                          ((s.from == r.ch) == (1 != s.level)
                                            ? 0
                                            : 1);
                                      if (0 == c || c == o.length) return t;
                                      if (n.line != r.line)
                                        l =
                                          (n.line - r.line) *
                                            ("ltr" == e.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var u = fe(o, n.ch, n.sticky),
                                          f =
                                            u - a ||
                                            (n.ch - r.ch) *
                                              (1 == s.level ? -1 : 1);
                                        l =
                                          u == c - 1 || u == c ? f < 0 : f > 0;
                                      }
                                      var h = o[c + (l ? -1 : 0)],
                                        d = l == (1 == h.level),
                                        p = d ? h.from : h.to,
                                        g = d ? "after" : "before";
                                      return r.ch == p && r.sticky == g
                                        ? t
                                        : new _i(new rt(r.line, p, g), n);
                                    })(e, new _i(ct(o, C), b))),
                                      Qi(o, Si(e, _, l), q);
                                  }
                              }
                              var p = i.wrapper.getBoundingClientRect(),
                                g = 0;
                              function m(t) {
                                (e.state.selectingText = !1),
                                  (g = 1 / 0),
                                  t && (_e(t), i.input.focus()),
                                  ve(i.wrapper.ownerDocument, "mousemove", v),
                                  ve(i.wrapper.ownerDocument, "mouseup", y),
                                  (o.history.lastSelOrigin = null);
                              }
                              var v = ei(e, function (t) {
                                  0 !== t.buttons && Ae(t)
                                    ? (function t(r) {
                                        var a = ++g;
                                        var s = cn(
                                          e,
                                          r,
                                          !0,
                                          "rectangle" == n.unit
                                        );
                                        if (!s) return;
                                        if (0 != nt(s, h)) {
                                          (e.curOp.focus = N(H(e))), d(s);
                                          var l = An(i, o);
                                          (s.line >= l.to || s.line < l.from) &&
                                            setTimeout(
                                              ei(e, function () {
                                                g == a && t(r);
                                              }),
                                              150
                                            );
                                        } else {
                                          var c =
                                            r.clientY < p.top
                                              ? -20
                                              : r.clientY > p.bottom
                                              ? 20
                                              : 0;
                                          c &&
                                            setTimeout(
                                              ei(e, function () {
                                                g == a &&
                                                  ((i.scroller.scrollTop += c),
                                                  t(r));
                                              }),
                                              50
                                            );
                                        }
                                      })(t)
                                    : m(t);
                                }),
                                y = ei(e, m);
                              (e.state.selectingText = y),
                                ge(i.wrapper.ownerDocument, "mousemove", v),
                                ge(i.wrapper.ownerDocument, "mouseup", y);
                            })(e, n, t, o);
                      })(t, n, o, e)
                    : Le(e) == r.scroller && _e(e)
                  : 2 == i
                  ? (n && Yi(t.doc, n),
                    setTimeout(function () {
                      return r.input.focus();
                    }, 20))
                  : 3 == i && (S ? t.display.input.onContextMenu(e) : _n(t)));
          }
      }
      function va(e, t, r) {
        if ("char" == r) return new _i(t, t);
        if ("word" == r) return e.findWordAt(t);
        if ("line" == r)
          return new _i(rt(t.line, 0), ct(e.doc, rt(t.line + 1, 0)));
        var n = r(e, t);
        return new _i(n.from, n.to);
      }
      function ya(e, t, r, n) {
        var i, o;
        if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
        else
          try {
            (i = t.clientX), (o = t.clientY);
          } catch (e) {
            return !1;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        n && _e(t);
        var a = e.display,
          s = a.lineDiv.getBoundingClientRect();
        if (o > s.bottom || !xe(e, r)) return Te(t);
        o -= s.top - a.viewOffset;
        for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
          var c = a.gutters.childNodes[l];
          if (c && c.getBoundingClientRect().right >= i)
            return (
              ye(e, r, e, Qe(e.doc, o), e.display.gutterSpecs[l].className, t),
              Te(t)
            );
        }
      }
      function ba(e, t) {
        return ya(e, t, "gutterClick", !0);
      }
      function wa(e, t) {
        _r(e.display, t) ||
          (function (e, t) {
            if (!xe(e, "gutterContextMenu")) return !1;
            return ya(e, t, "gutterContextMenu", !1);
          })(e, t) ||
          be(e, t, "contextmenu") ||
          S ||
          e.display.input.onContextMenu(t);
      }
      function xa(e) {
        (e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
          e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
          Ur(e);
      }
      ga.prototype.compare = function (e, t, r) {
        return this.time + 400 > e && 0 == nt(t, this.pos) && r == this.button;
      };
      var Ca = {
          toString: function () {
            return "CodeMirror.Init";
          },
        },
        _a = {},
        Sa = {};
      function Ta(e, t, r) {
        if (!t != !(r && r != Ca)) {
          var n = e.display.dragFunctions,
            i = t ? ge : ve;
          i(e.display.scroller, "dragstart", n.start),
            i(e.display.scroller, "dragenter", n.enter),
            i(e.display.scroller, "dragover", n.over),
            i(e.display.scroller, "dragleave", n.leave),
            i(e.display.scroller, "drop", n.drop);
        }
      }
      function ka(e) {
        e.options.lineWrapping
          ? (I(e.display.wrapper, "CodeMirror-wrap"),
            (e.display.sizer.style.minWidth = ""),
            (e.display.sizerWidth = null))
          : (L(e.display.wrapper, "CodeMirror-wrap"), qt(e)),
          ln(e),
          fn(e),
          Ur(e),
          setTimeout(function () {
            return Un(e);
          }, 100);
      }
      function La(e, t) {
        var n = this;
        if (!(this instanceof La)) return new La(e, t);
        (this.options = t = t ? F(t) : {}), F(_a, t, !1);
        var i = t.value;
        "string" == typeof i
          ? (i = new Eo(i, t.mode, null, t.lineSeparator, t.direction))
          : t.mode && (i.modeOption = t.mode),
          (this.doc = i);
        var o = new La.inputStyles[t.inputStyle](this),
          c = (this.display = new (function (e, t, n, i) {
            var o = this;
            (this.input = n),
              (o.scrollbarFiller = O(
                "div",
                null,
                "CodeMirror-scrollbar-filler"
              )),
              o.scrollbarFiller.setAttribute("cm-not-content", "true"),
              (o.gutterFiller = O("div", null, "CodeMirror-gutter-filler")),
              o.gutterFiller.setAttribute("cm-not-content", "true"),
              (o.lineDiv = E("div", null, "CodeMirror-code")),
              (o.selectionDiv = O(
                "div",
                null,
                null,
                "position: relative; z-index: 1"
              )),
              (o.cursorDiv = O("div", null, "CodeMirror-cursors")),
              (o.measure = O("div", null, "CodeMirror-measure")),
              (o.lineMeasure = O("div", null, "CodeMirror-measure")),
              (o.lineSpace = E(
                "div",
                [
                  o.measure,
                  o.lineMeasure,
                  o.selectionDiv,
                  o.cursorDiv,
                  o.lineDiv,
                ],
                null,
                "position: relative; outline: none"
              ));
            var c = E("div", [o.lineSpace], "CodeMirror-lines");
            (o.mover = O("div", [c], null, "position: relative")),
              (o.sizer = O("div", [o.mover], "CodeMirror-sizer")),
              (o.sizerWidth = null),
              (o.heightForcer = O(
                "div",
                null,
                null,
                "position: absolute; height: " + z + "px; width: 1px;"
              )),
              (o.gutters = O("div", null, "CodeMirror-gutters")),
              (o.lineGutter = null),
              (o.scroller = O(
                "div",
                [o.sizer, o.heightForcer, o.gutters],
                "CodeMirror-scroll"
              )),
              o.scroller.setAttribute("tabIndex", "-1"),
              (o.wrapper = O(
                "div",
                [o.scrollbarFiller, o.gutterFiller, o.scroller],
                "CodeMirror"
              )),
              u && f >= 105 && (o.wrapper.style.clipPath = "inset(0px)"),
              o.wrapper.setAttribute("translate", "no"),
              a &&
                s < 8 &&
                ((o.gutters.style.zIndex = -1),
                (o.scroller.style.paddingRight = 0)),
              l || (r && y) || (o.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
              (o.viewFrom = o.viewTo = t.first),
              (o.reportedViewFrom = o.reportedViewTo = t.first),
              (o.view = []),
              (o.renderedView = null),
              (o.externalMeasured = null),
              (o.viewOffset = 0),
              (o.lastWrapHeight = o.lastWrapWidth = 0),
              (o.updateLineNumbers = null),
              (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
              (o.scrollbarsClipped = !1),
              (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
              (o.alignWidgets = !1),
              (o.cachedCharWidth =
                o.cachedTextHeight =
                o.cachedPaddingH =
                  null),
              (o.maxLine = null),
              (o.maxLineLength = 0),
              (o.maxLineChanged = !1),
              (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
              (o.shift = !1),
              (o.selForContextMenu = null),
              (o.activeTouch = null),
              (o.gutterSpecs = pi(i.gutters, i.lineNumbers)),
              gi(o),
              n.init(o);
          })(e, i, o, t));
        for (var p in ((c.wrapper.CodeMirror = this),
        xa(this),
        t.lineWrapping &&
          (this.display.wrapper.className += " CodeMirror-wrap"),
        zn(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new j(),
          keySeq: null,
          specialChars: null,
        }),
        t.autofocus && !y && c.input.focus(),
        a &&
          s < 11 &&
          setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20),
        (function (e) {
          var t = e.display;
          ge(t.scroller, "mousedown", ei(e, ma)),
            ge(
              t.scroller,
              "dblclick",
              a && s < 11
                ? ei(e, function (t) {
                    if (!be(e, t)) {
                      var r = cn(e, t);
                      if (r && !ba(e, t) && !_r(e.display, t)) {
                        _e(t);
                        var n = e.findWordAt(r);
                        Yi(e.doc, n.anchor, n.head);
                      }
                    }
                  })
                : function (t) {
                    return be(e, t) || _e(t);
                  }
            );
          ge(t.scroller, "contextmenu", function (t) {
            return wa(e, t);
          }),
            ge(t.input.getField(), "contextmenu", function (r) {
              t.scroller.contains(r.target) || wa(e, r);
            });
          var r,
            n = { end: 0 };
          function i() {
            t.activeTouch &&
              ((r = setTimeout(function () {
                return (t.activeTouch = null);
              }, 1e3)),
              ((n = t.activeTouch).end = +new Date()));
          }
          function o(e, t) {
            if (null == t.left) return !0;
            var r = t.left - e.left,
              n = t.top - e.top;
            return r * r + n * n > 400;
          }
          ge(t.scroller, "touchstart", function (i) {
            if (
              !be(e, i) &&
              !(function (e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1;
              })(i) &&
              !ba(e, i)
            ) {
              t.input.ensurePolled(), clearTimeout(r);
              var o = +new Date();
              (t.activeTouch = {
                start: o,
                moved: !1,
                prev: o - n.end <= 300 ? n : null,
              }),
                1 == i.touches.length &&
                  ((t.activeTouch.left = i.touches[0].pageX),
                  (t.activeTouch.top = i.touches[0].pageY));
            }
          }),
            ge(t.scroller, "touchmove", function () {
              t.activeTouch && (t.activeTouch.moved = !0);
            }),
            ge(t.scroller, "touchend", function (r) {
              var n = t.activeTouch;
              if (
                n &&
                !_r(t, r) &&
                null != n.left &&
                !n.moved &&
                new Date() - n.start < 300
              ) {
                var a,
                  s = e.coordsChar(t.activeTouch, "page");
                (a =
                  !n.prev || o(n, n.prev)
                    ? new _i(s, s)
                    : !n.prev.prev || o(n, n.prev.prev)
                    ? e.findWordAt(s)
                    : new _i(rt(s.line, 0), ct(e.doc, rt(s.line + 1, 0)))),
                  e.setSelection(a.anchor, a.head),
                  e.focus(),
                  _e(r);
              }
              i();
            }),
            ge(t.scroller, "touchcancel", i),
            ge(t.scroller, "scroll", function () {
              t.scroller.clientHeight &&
                (Dn(e, t.scroller.scrollTop),
                Hn(e, t.scroller.scrollLeft, !0),
                ye(e, "scroll", e));
            }),
            ge(t.scroller, "mousewheel", function (t) {
              return xi(e, t);
            }),
            ge(t.scroller, "DOMMouseScroll", function (t) {
              return xi(e, t);
            }),
            ge(t.wrapper, "scroll", function () {
              return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
            }),
            (t.dragFunctions = {
              enter: function (t) {
                be(e, t) || ke(t);
              },
              over: function (t) {
                be(e, t) ||
                  (!(function (e, t) {
                    var r = cn(e, t);
                    if (r) {
                      var n = document.createDocumentFragment();
                      yn(e, r, n),
                        e.display.dragCursor ||
                          ((e.display.dragCursor = O(
                            "div",
                            null,
                            "CodeMirror-cursors CodeMirror-dragcursors"
                          )),
                          e.display.lineSpace.insertBefore(
                            e.display.dragCursor,
                            e.display.cursorDiv
                          )),
                        M(e.display.dragCursor, n);
                    }
                  })(e, t),
                  ke(t));
              },
              start: function (t) {
                return (function (e, t) {
                  if (a && (!e.state.draggingText || +new Date() - Ro < 100))
                    ke(t);
                  else if (
                    !be(e, t) &&
                    !_r(e.display, t) &&
                    (t.dataTransfer.setData("Text", e.getSelection()),
                    (t.dataTransfer.effectAllowed = "copyMove"),
                    t.dataTransfer.setDragImage && !d)
                  ) {
                    var r = O(
                      "img",
                      null,
                      null,
                      "position: fixed; left: 0; top: 0;"
                    );
                    (r.src =
                      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                      h &&
                        ((r.width = r.height = 1),
                        e.display.wrapper.appendChild(r),
                        (r._top = r.offsetTop)),
                      t.dataTransfer.setDragImage(r, 0, 0),
                      h && r.parentNode.removeChild(r);
                  }
                })(e, t);
              },
              drop: ei(e, No),
              leave: function (t) {
                be(e, t) || Io(e);
              },
            });
          var l = t.input.getField();
          ge(l, "keyup", function (t) {
            return fa.call(e, t);
          }),
            ge(l, "keydown", ei(e, ua)),
            ge(l, "keypress", ei(e, ha)),
            ge(l, "focus", function (t) {
              return Sn(e, t);
            }),
            ge(l, "blur", function (t) {
              return Tn(e, t);
            });
        })(this),
        Ho(),
        Kn(this),
        (this.curOp.forceUpdate = !0),
        Di(this, i),
        (t.autofocus && !y) || this.hasFocus()
          ? setTimeout(function () {
              n.hasFocus() && !n.state.focused && Sn(n);
            }, 20)
          : Tn(this),
        Sa))
          Sa.hasOwnProperty(p) && Sa[p](this, t[p], Ca);
        di(this), t.finishInit && t.finishInit(this);
        for (var g = 0; g < Aa.length; ++g) Aa[g](this);
        qn(this),
          l &&
            t.lineWrapping &&
            "optimizelegibility" == getComputedStyle(c.lineDiv).textRendering &&
            (c.lineDiv.style.textRendering = "auto");
      }
      (La.defaults = _a), (La.optionHandlers = Sa);
      var Aa = [];
      function Ma(e, t, r, n) {
        var i,
          o = e.doc;
        null == r && (r = "add"),
          "smart" == r && (o.mode.indent ? (i = gt(e, t).state) : (r = "prev"));
        var a = e.options.tabSize,
          s = Ye(o, t),
          l = U(s.text, null, a);
        s.stateAfter && (s.stateAfter = null);
        var c,
          u = s.text.match(/^\s*/)[0];
        if (n || /\S/.test(s.text)) {
          if (
            "smart" == r &&
            ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == V ||
              c > 150)
          ) {
            if (!n) return;
            r = "prev";
          }
        } else (c = 0), (r = "not");
        "prev" == r
          ? (c = t > o.first ? U(Ye(o, t - 1).text, null, a) : 0)
          : "add" == r
          ? (c = l + e.options.indentUnit)
          : "subtract" == r
          ? (c = l - e.options.indentUnit)
          : "number" == typeof r && (c = l + r),
          (c = Math.max(0, c));
        var f = "",
          h = 0;
        if (e.options.indentWithTabs)
          for (var d = Math.floor(c / a); d; --d) (h += a), (f += "\t");
        if ((h < c && (f += Z(c - h)), f != u))
          return (
            go(o, f, rt(t, 0), rt(t, u.length), "+input"),
            (s.stateAfter = null),
            !0
          );
        for (var p = 0; p < o.sel.ranges.length; p++) {
          var g = o.sel.ranges[p];
          if (g.head.line == t && g.head.ch < u.length) {
            var m = rt(t, u.length);
            Xi(o, p, new _i(m, m));
            break;
          }
        }
      }
      La.defineInitHook = function (e) {
        return Aa.push(e);
      };
      var Oa = null;
      function Ea(e) {
        Oa = e;
      }
      function Ra(e, t, r, n, i) {
        var o = e.doc;
        (e.display.shift = !1), n || (n = o.sel);
        var a = +new Date() - 200,
          s = "paste" == i || e.state.pasteIncoming > a,
          l = Ie(t),
          c = null;
        if (s && n.ranges.length > 1)
          if (Oa && Oa.text.join("\n") == t) {
            if (n.ranges.length % Oa.text.length == 0) {
              c = [];
              for (var u = 0; u < Oa.text.length; u++)
                c.push(o.splitLines(Oa.text[u]));
            }
          } else
            l.length == n.ranges.length &&
              e.options.pasteLinesPerSelection &&
              (c = Q(l, function (e) {
                return [e];
              }));
        for (
          var f = e.curOp.updateInput, h = n.ranges.length - 1;
          h >= 0;
          h--
        ) {
          var d = n.ranges[h],
            p = d.from(),
            g = d.to();
          d.empty() &&
            (r && r > 0
              ? (p = rt(p.line, p.ch - r))
              : e.state.overwrite && !s
              ? (g = rt(
                  g.line,
                  Math.min(Ye(o, g.line).text.length, g.ch + J(l).length)
                ))
              : s &&
                Oa &&
                Oa.lineWise &&
                Oa.text.join("\n") == l.join("\n") &&
                (p = g = rt(p.line, 0)));
          var m = {
            from: p,
            to: g,
            text: c ? c[h % c.length] : l,
            origin:
              i || (s ? "paste" : e.state.cutIncoming > a ? "cut" : "+input"),
          };
          co(e.doc, m), cr(e, "inputRead", e, m);
        }
        t && !s && Ia(e, t),
          En(e),
          e.curOp.updateInput < 2 && (e.curOp.updateInput = f),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = -1);
      }
      function Na(e, t) {
        var r = e.clipboardData && e.clipboardData.getData("Text");
        if (r)
          return (
            e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              !t.hasFocus() ||
              Qn(t, function () {
                return Ra(t, r, 0, null, "paste");
              }),
            !0
          );
      }
      function Ia(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var i = r.ranges[n];
            if (
              !(
                i.head.ch > 100 ||
                (n && r.ranges[n - 1].head.line == i.head.line)
              )
            ) {
              var o = e.getModeAt(i.head),
                a = !1;
              if (o.electricChars) {
                for (var s = 0; s < o.electricChars.length; s++)
                  if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                    a = Ma(e, i.head.line, "smart");
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    Ye(e.doc, i.head.line).text.slice(0, i.head.ch)
                  ) &&
                  (a = Ma(e, i.head.line, "smart"));
              a && cr(e, "electricInput", e, i.head.line);
            }
          }
      }
      function Da(e) {
        for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
          var i = e.doc.sel.ranges[n].head.line,
            o = { anchor: rt(i, 0), head: rt(i + 1, 0) };
          r.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: r };
      }
      function Pa(e, t, r, n) {
        e.setAttribute("autocorrect", r ? "on" : "off"),
          e.setAttribute("autocapitalize", n ? "on" : "off"),
          e.setAttribute("spellcheck", !!t);
      }
      function Ha() {
        var e = O(
            "textarea",
            null,
            null,
            "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"
          ),
          t = O(
            "div",
            [e],
            null,
            "overflow: hidden; position: relative; width: 3px; height: 0px;"
          );
        return (
          l ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
          m && (e.style.border = "1px solid black"),
          t
        );
      }
      function $a(e, t, r, n, i) {
        var o = t,
          a = r,
          s = Ye(e, t.line),
          l = i && "rtl" == e.direction ? -r : r;
        function c(o) {
          var a;
          if ("codepoint" == n) {
            var c = s.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
            if (isNaN(c)) a = null;
            else {
              var u = r > 0 ? c >= 55296 && c < 56320 : c >= 56320 && c < 57343;
              a = new rt(
                t.line,
                Math.max(0, Math.min(s.text.length, t.ch + r * (u ? 2 : 1))),
                -r
              );
            }
          } else
            a = i
              ? (function (e, t, r, n) {
                  var i = de(t, e.doc.direction);
                  if (!i) return Qo(t, r, n);
                  r.ch >= t.text.length
                    ? ((r.ch = t.text.length), (r.sticky = "before"))
                    : r.ch <= 0 && ((r.ch = 0), (r.sticky = "after"));
                  var o = fe(i, r.ch, r.sticky),
                    a = i[o];
                  if (
                    "ltr" == e.doc.direction &&
                    a.level % 2 == 0 &&
                    (n > 0 ? a.to > r.ch : a.from < r.ch)
                  )
                    return Qo(t, r, n);
                  var s,
                    l = function (e, r) {
                      return Jo(t, e instanceof rt ? e.ch : e, r);
                    },
                    c = function (r) {
                      return e.options.lineWrapping
                        ? ((s = s || Nr(e, t)), Qr(e, t, s, r))
                        : { begin: 0, end: t.text.length };
                    },
                    u = c("before" == r.sticky ? l(r, -1) : r.ch);
                  if ("rtl" == e.doc.direction || 1 == a.level) {
                    var f = (1 == a.level) == n < 0,
                      h = l(r, f ? 1 : -1);
                    if (
                      null != h &&
                      (f
                        ? h <= a.to && h <= u.end
                        : h >= a.from && h >= u.begin)
                    ) {
                      var d = f ? "before" : "after";
                      return new rt(r.line, h, d);
                    }
                  }
                  var p = function (e, t, n) {
                      for (
                        var o = function (e, t) {
                          return t
                            ? new rt(r.line, l(e, 1), "before")
                            : new rt(r.line, e, "after");
                        };
                        e >= 0 && e < i.length;
                        e += t
                      ) {
                        var a = i[e],
                          s = t > 0 == (1 != a.level),
                          c = s ? n.begin : l(n.end, -1);
                        if (a.from <= c && c < a.to) return o(c, s);
                        if (
                          ((c = s ? a.from : l(a.to, -1)),
                          n.begin <= c && c < n.end)
                        )
                          return o(c, s);
                      }
                    },
                    g = p(o + n, n, u);
                  if (g) return g;
                  var m = n > 0 ? u.end : l(u.begin, -1);
                  return null == m ||
                    (n > 0 && m == t.text.length) ||
                    !(g = p(n > 0 ? 0 : i.length - 1, n, c(m)))
                    ? null
                    : g;
                })(e.cm, s, t, r)
              : Qo(s, t, r);
          if (null == a) {
            if (
              o ||
              !(function () {
                var r = t.line + l;
                return (
                  !(r < e.first || r >= e.first + e.size) &&
                  ((t = new rt(r, t.ch, t.sticky)), (s = Ye(e, r)))
                );
              })()
            )
              return !1;
            t = ea(i, e.cm, s, t.line, l);
          } else t = a;
          return !0;
        }
        if ("char" == n || "codepoint" == n) c();
        else if ("column" == n) c(!0);
        else if ("word" == n || "group" == n)
          for (
            var u = null,
              f = "group" == n,
              h = e.cm && e.cm.getHelper(t, "wordChars"),
              d = !0;
            !(r < 0) || c(!d);
            d = !1
          ) {
            var p = s.text.charAt(t.ch) || "\n",
              g = ie(p, h)
                ? "w"
                : f && "\n" == p
                ? "n"
                : !f || /\s/.test(p)
                ? null
                : "p";
            if ((!f || d || g || (g = "s"), u && u != g)) {
              r < 0 && ((r = 1), c(), (t.sticky = "after"));
              break;
            }
            if ((g && (u = g), r > 0 && !c(!d))) break;
          }
        var m = oo(e, t, o, a, !0);
        return it(o, m) && (m.hitSide = !0), m;
      }
      function Ba(e, t, r, n) {
        var i,
          o,
          a = e.doc,
          s = t.left;
        if ("page" == n) {
          var l = Math.min(
              e.display.wrapper.clientHeight,
              $(e).innerHeight || a(e).documentElement.clientHeight
            ),
            c = Math.max(l - 0.5 * rn(e.display), 3);
          i = (r > 0 ? t.bottom : t.top) + r * c;
        } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
        for (; (o = Zr(e, s, i)).outside; ) {
          if (r < 0 ? i <= 0 : i >= a.height) {
            o.hitSide = !0;
            break;
          }
          i += 5 * r;
        }
        return o;
      }
      var Fa = function (e) {
        (this.cm = e),
          (this.lastAnchorNode =
            this.lastAnchorOffset =
            this.lastFocusNode =
            this.lastFocusOffset =
              null),
          (this.polling = new j()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null);
      };
      function Ua(e, t) {
        var r = Rr(e, t.line);
        if (!r || r.hidden) return null;
        var n = Ye(e.doc, t.line),
          i = Or(r, n, t.line),
          o = de(n, e.doc.direction),
          a = "left";
        o && (a = fe(o, t.ch) % 2 ? "right" : "left");
        var s = Hr(i.map, t.ch, a);
        return (s.offset = "right" == s.collapse ? s.end : s.start), s;
      }
      function ja(e, t) {
        return t && (e.bad = !0), e;
      }
      function Wa(e, t, r) {
        var n;
        if (t == e.display.lineDiv) {
          if (!(n = e.display.lineDiv.childNodes[r]))
            return ja(e.clipPos(rt(e.display.viewTo - 1)), !0);
          (t = null), (r = 0);
        } else
          for (n = t; ; n = n.parentNode) {
            if (!n || n == e.display.lineDiv) return null;
            if (n.parentNode && n.parentNode == e.display.lineDiv) break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var o = e.display.view[i];
          if (o.node == n) return za(o, t, r);
        }
      }
      function za(e, t, r) {
        var n = e.text.firstChild,
          i = !1;
        if (!t || !R(n, t)) return ja(rt(Je(e.line), 0), !0);
        if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
          var o = e.rest ? J(e.rest) : e.line;
          return ja(rt(Je(o), o.text.length), i);
        }
        var a = 3 == t.nodeType ? t : null,
          s = t;
        for (
          a ||
          1 != t.childNodes.length ||
          3 != t.firstChild.nodeType ||
          ((a = t.firstChild), r && (r = a.nodeValue.length));
          s.parentNode != n;

        )
          s = s.parentNode;
        var l = e.measure,
          c = l.maps;
        function u(t, r, n) {
          for (var i = -1; i < (c ? c.length : 0); i++)
            for (var o = i < 0 ? l.map : c[i], a = 0; a < o.length; a += 3) {
              var s = o[a + 2];
              if (s == t || s == r) {
                var u = Je(i < 0 ? e.line : e.rest[i]),
                  f = o[a] + n;
                return (n < 0 || s != t) && (f = o[a + (n ? 1 : 0)]), rt(u, f);
              }
            }
        }
        var f = u(a, s, r);
        if (f) return ja(f, i);
        for (
          var h = s.nextSibling, d = a ? a.nodeValue.length - r : 0;
          h;
          h = h.nextSibling
        ) {
          if ((f = u(h, h.firstChild, 0))) return ja(rt(f.line, f.ch - d), i);
          d += h.textContent.length;
        }
        for (var p = s.previousSibling, g = r; p; p = p.previousSibling) {
          if ((f = u(p, p.firstChild, -1))) return ja(rt(f.line, f.ch + g), i);
          g += p.textContent.length;
        }
      }
      (Fa.prototype.init = function (e) {
        var t = this,
          r = this,
          n = r.cm,
          i = (r.div = e.lineDiv);
        function o(e) {
          for (var t = e.target; t; t = t.parentNode) {
            if (t == i) return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
          }
          return !1;
        }
        function a(e) {
          if (o(e) && !be(n, e)) {
            if (n.somethingSelected())
              Ea({ lineWise: !1, text: n.getSelections() }),
                "cut" == e.type && n.replaceSelection("", null, "cut");
            else {
              if (!n.options.lineWiseCopyCut) return;
              var t = Da(n);
              Ea({ lineWise: !0, text: t.text }),
                "cut" == e.type &&
                  n.operation(function () {
                    n.setSelections(t.ranges, 0, K),
                      n.replaceSelection("", null, "cut");
                  });
            }
            if (e.clipboardData) {
              e.clipboardData.clearData();
              var a = Oa.text.join("\n");
              if (
                (e.clipboardData.setData("Text", a),
                e.clipboardData.getData("Text") == a)
              )
                return void e.preventDefault();
            }
            var s = Ha(),
              l = s.firstChild;
            Pa(l),
              n.display.lineSpace.insertBefore(
                s,
                n.display.lineSpace.firstChild
              ),
              (l.value = Oa.text.join("\n"));
            var c = N(i.ownerDocument);
            P(l),
              setTimeout(function () {
                n.display.lineSpace.removeChild(s),
                  c.focus(),
                  c == i && r.showPrimarySelection();
              }, 50);
          }
        }
        (i.contentEditable = !0),
          Pa(
            i,
            n.options.spellcheck,
            n.options.autocorrect,
            n.options.autocapitalize
          ),
          ge(i, "paste", function (e) {
            !o(e) ||
              be(n, e) ||
              Na(e, n) ||
              (s <= 11 &&
                setTimeout(
                  ei(n, function () {
                    return t.updateFromDOM();
                  }),
                  20
                ));
          }),
          ge(i, "compositionstart", function (e) {
            t.composing = { data: e.data, done: !1 };
          }),
          ge(i, "compositionupdate", function (e) {
            t.composing || (t.composing = { data: e.data, done: !1 });
          }),
          ge(i, "compositionend", function (e) {
            t.composing &&
              (e.data != t.composing.data && t.readFromDOMSoon(),
              (t.composing.done = !0));
          }),
          ge(i, "touchstart", function () {
            return r.forceCompositionEnd();
          }),
          ge(i, "input", function () {
            t.composing || t.readFromDOMSoon();
          }),
          ge(i, "copy", a),
          ge(i, "cut", a);
      }),
        (Fa.prototype.screenReaderLabelChanged = function (e) {
          e
            ? this.div.setAttribute("aria-label", e)
            : this.div.removeAttribute("aria-label");
        }),
        (Fa.prototype.prepareSelection = function () {
          var e = vn(this.cm, !1);
          return (e.focus = N(this.div.ownerDocument) == this.div), e;
        }),
        (Fa.prototype.showSelection = function (e, t) {
          e &&
            this.cm.display.view.length &&
            ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e));
        }),
        (Fa.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }),
        (Fa.prototype.showPrimarySelection = function () {
          var e = this.getSelection(),
            t = this.cm,
            n = t.doc.sel.primary(),
            i = n.from(),
            o = n.to();
          if (
            t.display.viewTo == t.display.viewFrom ||
            i.line >= t.display.viewTo ||
            o.line < t.display.viewFrom
          )
            e.removeAllRanges();
          else {
            var a = Wa(t, e.anchorNode, e.anchorOffset),
              s = Wa(t, e.focusNode, e.focusOffset);
            if (
              !a ||
              a.bad ||
              !s ||
              s.bad ||
              0 != nt(st(a, s), i) ||
              0 != nt(at(a, s), o)
            ) {
              var l = t.display.view,
                c = (i.line >= t.display.viewFrom && Ua(t, i)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = o.line < t.display.viewTo && Ua(t, o);
              if (!u) {
                var f = l[l.length - 1].measure,
                  h = f.maps ? f.maps[f.maps.length - 1] : f.map;
                u = {
                  node: h[h.length - 1],
                  offset: h[h.length - 2] - h[h.length - 3],
                };
              }
              if (c && u) {
                var d,
                  p = e.rangeCount && e.getRangeAt(0);
                try {
                  d = k(c.node, c.offset, u.offset, u.node);
                } catch (e) {}
                d &&
                  (!r && t.state.focused
                    ? (e.collapse(c.node, c.offset),
                      d.collapsed || (e.removeAllRanges(), e.addRange(d)))
                    : (e.removeAllRanges(), e.addRange(d)),
                  p && null == e.anchorNode
                    ? e.addRange(p)
                    : r && this.startGracePeriod()),
                  this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }),
        (Fa.prototype.startGracePeriod = function () {
          var e = this;
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function () {
              (e.gracePeriod = !1),
                e.selectionChanged() &&
                  e.cm.operation(function () {
                    return (e.cm.curOp.selectionChanged = !0);
                  });
            }, 20));
        }),
        (Fa.prototype.showMultipleSelections = function (e) {
          M(this.cm.display.cursorDiv, e.cursors),
            M(this.cm.display.selectionDiv, e.selection);
        }),
        (Fa.prototype.rememberSelection = function () {
          var e = this.getSelection();
          (this.lastAnchorNode = e.anchorNode),
            (this.lastAnchorOffset = e.anchorOffset),
            (this.lastFocusNode = e.focusNode),
            (this.lastFocusOffset = e.focusOffset);
        }),
        (Fa.prototype.selectionInEditor = function () {
          var e = this.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return R(this.div, t);
        }),
        (Fa.prototype.focus = function () {
          "nocursor" != this.cm.options.readOnly &&
            ((this.selectionInEditor() &&
              N(this.div.ownerDocument) == this.div) ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (Fa.prototype.blur = function () {
          this.div.blur();
        }),
        (Fa.prototype.getField = function () {
          return this.div;
        }),
        (Fa.prototype.supportsTouch = function () {
          return !0;
        }),
        (Fa.prototype.receivedFocus = function () {
          var e = this,
            t = this;
          this.selectionInEditor()
            ? setTimeout(function () {
                return e.pollSelection();
              }, 20)
            : Qn(this.cm, function () {
                return (t.cm.curOp.selectionChanged = !0);
              }),
            this.polling.set(this.cm.options.pollInterval, function e() {
              t.cm.state.focused &&
                (t.pollSelection(),
                t.polling.set(t.cm.options.pollInterval, e));
            });
        }),
        (Fa.prototype.selectionChanged = function () {
          var e = this.getSelection();
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          );
        }),
        (Fa.prototype.pollSelection = function () {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var e = this.getSelection(),
              t = this.cm;
            if (
              v &&
              u &&
              this.cm.display.gutterSpecs.length &&
              (function (e) {
                for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                return !1;
              })(e.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: "keydown",
                  keyCode: 8,
                  preventDefault: Math.abs,
                }),
                this.blur(),
                void this.focus()
              );
            if (!this.composing) {
              this.rememberSelection();
              var r = Wa(t, e.anchorNode, e.anchorOffset),
                n = Wa(t, e.focusNode, e.focusOffset);
              r &&
                n &&
                Qn(t, function () {
                  Qi(t.doc, Ti(r, n), K),
                    (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Fa.prototype.pollContent = function () {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var e,
            t,
            r,
            n = this.cm,
            i = n.display,
            o = n.doc.sel.primary(),
            a = o.from(),
            s = o.to();
          if (
            (0 == a.ch &&
              a.line > n.firstLine() &&
              (a = rt(a.line - 1, Ye(n.doc, a.line - 1).length)),
            s.ch == Ye(n.doc, s.line).text.length &&
              s.line < n.lastLine() &&
              (s = rt(s.line + 1, 0)),
            a.line < i.viewFrom || s.line > i.viewTo - 1)
          )
            return !1;
          a.line == i.viewFrom || 0 == (e = un(n, a.line))
            ? ((t = Je(i.view[0].line)), (r = i.view[0].node))
            : ((t = Je(i.view[e].line)), (r = i.view[e - 1].node.nextSibling));
          var l,
            c,
            u = un(n, s.line);
          if (
            (u == i.view.length - 1
              ? ((l = i.viewTo - 1), (c = i.lineDiv.lastChild))
              : ((l = Je(i.view[u + 1].line) - 1),
                (c = i.view[u + 1].node.previousSibling)),
            !r)
          )
            return !1;
          for (
            var f = n.doc.splitLines(
                (function (e, t, r, n, i) {
                  var o = "",
                    a = !1,
                    s = e.doc.lineSeparator(),
                    l = !1;
                  function c() {
                    a && ((o += s), l && (o += s), (a = l = !1));
                  }
                  function u(e) {
                    e && (c(), (o += e));
                  }
                  function f(t) {
                    if (1 == t.nodeType) {
                      var r = t.getAttribute("cm-text");
                      if (r) return void u(r);
                      var o,
                        h = t.getAttribute("cm-marker");
                      if (h) {
                        var d = e.findMarks(
                          rt(n, 0),
                          rt(i + 1, 0),
                          (function (e) {
                            return function (t) {
                              return t.id == e;
                            };
                          })(+h)
                        );
                        return void (
                          d.length &&
                          (o = d[0].find(0)) &&
                          u(Ge(e.doc, o.from, o.to).join(s))
                        );
                      }
                      if ("false" == t.getAttribute("contenteditable")) return;
                      var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                      if (
                        !/^br$/i.test(t.nodeName) &&
                        0 == t.textContent.length
                      )
                        return;
                      p && c();
                      for (var g = 0; g < t.childNodes.length; g++)
                        f(t.childNodes[g]);
                      /^(pre|p)$/i.test(t.nodeName) && (l = !0), p && (a = !0);
                    } else
                      3 == t.nodeType &&
                        u(
                          t.nodeValue
                            .replace(/\u200b/g, "")
                            .replace(/\u00a0/g, " ")
                        );
                  }
                  for (; f(t), t != r; ) (t = t.nextSibling), (l = !1);
                  return o;
                })(n, r, c, t, l)
              ),
              h = Ge(n.doc, rt(t, 0), rt(l, Ye(n.doc, l).text.length));
            f.length > 1 && h.length > 1;

          )
            if (J(f) == J(h)) f.pop(), h.pop(), l--;
            else {
              if (f[0] != h[0]) break;
              f.shift(), h.shift(), t++;
            }
          for (
            var d = 0,
              p = 0,
              g = f[0],
              m = h[0],
              v = Math.min(g.length, m.length);
            d < v && g.charCodeAt(d) == m.charCodeAt(d);

          )
            ++d;
          for (
            var y = J(f),
              b = J(h),
              w = Math.min(
                y.length - (1 == f.length ? d : 0),
                b.length - (1 == h.length ? d : 0)
              );
            p < w &&
            y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

          )
            ++p;
          if (1 == f.length && 1 == h.length && t == a.line)
            for (
              ;
              d &&
              d > a.ch &&
              y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

            )
              d--, p++;
          (f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, "")),
            (f[0] = f[0].slice(d).replace(/\u200b+$/, ""));
          var x = rt(t, d),
            C = rt(l, h.length ? J(h).length - p : 0);
          return f.length > 1 || f[0] || nt(x, C)
            ? (go(n.doc, f, x, C, "+input"), !0)
            : void 0;
        }),
        (Fa.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        }),
        (Fa.prototype.reset = function () {
          this.forceCompositionEnd();
        }),
        (Fa.prototype.forceCompositionEnd = function () {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (Fa.prototype.readFromDOMSoon = function () {
          var e = this;
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function () {
              if (((e.readDOMTimeout = null), e.composing)) {
                if (!e.composing.done) return;
                e.composing = null;
              }
              e.updateFromDOM();
            }, 80));
        }),
        (Fa.prototype.updateFromDOM = function () {
          var e = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            Qn(this.cm, function () {
              return fn(e.cm);
            });
        }),
        (Fa.prototype.setUneditable = function (e) {
          e.contentEditable = "false";
        }),
        (Fa.prototype.onKeyPress = function (e) {
          0 == e.charCode ||
            this.composing ||
            (e.preventDefault(),
            this.cm.isReadOnly() ||
              ei(this.cm, Ra)(
                this.cm,
                String.fromCharCode(
                  null == e.charCode ? e.keyCode : e.charCode
                ),
                0
              ));
        }),
        (Fa.prototype.readOnlyChanged = function (e) {
          this.div.contentEditable = String("nocursor" != e);
        }),
        (Fa.prototype.onContextMenu = function () {}),
        (Fa.prototype.resetPosition = function () {}),
        (Fa.prototype.needsContentAttribute = !0);
      var Va = function (e) {
        (this.cm = e),
          (this.prevInput = ""),
          (this.pollingFast = !1),
          (this.polling = new j()),
          (this.hasSelection = !1),
          (this.composing = null),
          (this.resetting = !1);
      };
      (Va.prototype.init = function (e) {
        var t = this,
          r = this,
          n = this.cm;
        this.createField(e);
        var i = this.textarea;
        function o(e) {
          if (!be(n, e)) {
            if (n.somethingSelected())
              Ea({ lineWise: !1, text: n.getSelections() });
            else {
              if (!n.options.lineWiseCopyCut) return;
              var t = Da(n);
              Ea({ lineWise: !0, text: t.text }),
                "cut" == e.type
                  ? n.setSelections(t.ranges, null, K)
                  : ((r.prevInput = ""), (i.value = t.text.join("\n")), P(i));
            }
            "cut" == e.type && (n.state.cutIncoming = +new Date());
          }
        }
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
          m && (i.style.width = "0px"),
          ge(i, "input", function () {
            a && s >= 9 && t.hasSelection && (t.hasSelection = null), r.poll();
          }),
          ge(i, "paste", function (e) {
            be(n, e) ||
              Na(e, n) ||
              ((n.state.pasteIncoming = +new Date()), r.fastPoll());
          }),
          ge(i, "cut", o),
          ge(i, "copy", o),
          ge(e.scroller, "paste", function (t) {
            if (!_r(e, t) && !be(n, t)) {
              if (!i.dispatchEvent)
                return (n.state.pasteIncoming = +new Date()), void r.focus();
              var o = new Event("paste");
              (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
            }
          }),
          ge(e.lineSpace, "selectstart", function (t) {
            _r(e, t) || _e(t);
          }),
          ge(i, "compositionstart", function () {
            var e = n.getCursor("from");
            r.composing && r.composing.range.clear(),
              (r.composing = {
                start: e,
                range: n.markText(e, n.getCursor("to"), {
                  className: "CodeMirror-composing",
                }),
              });
          }),
          ge(i, "compositionend", function () {
            r.composing &&
              (r.poll(), r.composing.range.clear(), (r.composing = null));
          });
      }),
        (Va.prototype.createField = function (e) {
          (this.wrapper = Ha()), (this.textarea = this.wrapper.firstChild);
          var t = this.cm.options;
          Pa(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
        }),
        (Va.prototype.screenReaderLabelChanged = function (e) {
          e
            ? this.textarea.setAttribute("aria-label", e)
            : this.textarea.removeAttribute("aria-label");
        }),
        (Va.prototype.prepareSelection = function () {
          var e = this.cm,
            t = e.display,
            r = e.doc,
            n = vn(e);
          if (e.options.moveInputWithCursor) {
            var i = Yr(e, r.sel.primary().head, "div"),
              o = t.wrapper.getBoundingClientRect(),
              a = t.lineDiv.getBoundingClientRect();
            (n.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)
            )),
              (n.teLeft = Math.max(
                0,
                Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)
              ));
          }
          return n;
        }),
        (Va.prototype.showSelection = function (e) {
          var t = this.cm.display;
          M(t.cursorDiv, e.cursors),
            M(t.selectionDiv, e.selection),
            null != e.teTop &&
              ((this.wrapper.style.top = e.teTop + "px"),
              (this.wrapper.style.left = e.teLeft + "px"));
        }),
        (Va.prototype.reset = function (e) {
          if (!(this.contextMenuPending || (this.composing && e))) {
            var t = this.cm;
            if (((this.resetting = !0), t.somethingSelected())) {
              this.prevInput = "";
              var r = t.getSelection();
              (this.textarea.value = r),
                t.state.focused && P(this.textarea),
                a && s >= 9 && (this.hasSelection = r);
            } else
              e ||
                ((this.prevInput = this.textarea.value = ""),
                a && s >= 9 && (this.hasSelection = null));
            this.resetting = !1;
          }
        }),
        (Va.prototype.getField = function () {
          return this.textarea;
        }),
        (Va.prototype.supportsTouch = function () {
          return !1;
        }),
        (Va.prototype.focus = function () {
          if (
            "nocursor" != this.cm.options.readOnly &&
            (!y || N(this.textarea.ownerDocument) != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (e) {}
        }),
        (Va.prototype.blur = function () {
          this.textarea.blur();
        }),
        (Va.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Va.prototype.receivedFocus = function () {
          this.slowPoll();
        }),
        (Va.prototype.slowPoll = function () {
          var e = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function () {
              e.poll(), e.cm.state.focused && e.slowPoll();
            });
        }),
        (Va.prototype.fastPoll = function () {
          var e = !1,
            t = this;
          (t.pollingFast = !0),
            t.polling.set(20, function r() {
              t.poll() || e
                ? ((t.pollingFast = !1), t.slowPoll())
                : ((e = !0), t.polling.set(60, r));
            });
        }),
        (Va.prototype.poll = function () {
          var e = this,
            t = this.cm,
            r = this.textarea,
            n = this.prevInput;
          if (
            this.contextMenuPending ||
            this.resetting ||
            !t.state.focused ||
            (De(r) && !n && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          )
            return !1;
          var i = r.value;
          if (i == n && !t.somethingSelected()) return !1;
          if (
            (a && s >= 9 && this.hasSelection === i) ||
            (b && /[\uf700-\uf7ff]/.test(i))
          )
            return t.display.input.reset(), !1;
          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || n || (n = "​"), 8666 == o))
              return this.reset(), this.cm.execCommand("undo");
          }
          for (
            var l = 0, c = Math.min(n.length, i.length);
            l < c && n.charCodeAt(l) == i.charCodeAt(l);

          )
            ++l;
          return (
            Qn(t, function () {
              Ra(
                t,
                i.slice(l),
                n.length - l,
                null,
                e.composing ? "*compose" : null
              ),
                i.length > 1e3 || i.indexOf("\n") > -1
                  ? (r.value = e.prevInput = "")
                  : (e.prevInput = i),
                e.composing &&
                  (e.composing.range.clear(),
                  (e.composing.range = t.markText(
                    e.composing.start,
                    t.getCursor("to"),
                    { className: "CodeMirror-composing" }
                  )));
            }),
            !0
          );
        }),
        (Va.prototype.ensurePolled = function () {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Va.prototype.onKeyPress = function () {
          a && s >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Va.prototype.onContextMenu = function (e) {
          var t = this,
            r = t.cm,
            n = r.display,
            i = t.textarea;
          t.contextMenuPending && t.contextMenuPending();
          var o = cn(r, e),
            c = n.scroller.scrollTop;
          if (o && !h) {
            r.options.resetSelectionOnContextMenu &&
              -1 == r.doc.sel.contains(o) &&
              ei(r, Qi)(r.doc, Ti(o), K);
            var u,
              f = i.style.cssText,
              d = t.wrapper.style.cssText,
              p = t.wrapper.offsetParent.getBoundingClientRect();
            if (
              ((t.wrapper.style.cssText = "position: static"),
              (i.style.cssText =
                "position: absolute; width: 30px; height: 30px;\n      top: " +
                (e.clientY - p.top - 5) +
                "px; left: " +
                (e.clientX - p.left - 5) +
                "px;\n      z-index: 1000; background: " +
                (a ? "rgba(255, 255, 255, .05)" : "transparent") +
                ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
              l && (u = i.ownerDocument.defaultView.scrollY),
              n.input.focus(),
              l && i.ownerDocument.defaultView.scrollTo(null, u),
              n.input.reset(),
              r.somethingSelected() || (i.value = t.prevInput = " "),
              (t.contextMenuPending = v),
              (n.selForContextMenu = r.doc.sel),
              clearTimeout(n.detectingSelectAll),
              a && s >= 9 && m(),
              S)
            ) {
              ke(e);
              var g = function () {
                ve(window, "mouseup", g), setTimeout(v, 20);
              };
              ge(window, "mouseup", g);
            } else setTimeout(v, 50);
          }
          function m() {
            if (null != i.selectionStart) {
              var e = r.somethingSelected(),
                o = "​" + (e ? i.value : "");
              (i.value = "⇚"),
                (i.value = o),
                (t.prevInput = e ? "" : "​"),
                (i.selectionStart = 1),
                (i.selectionEnd = o.length),
                (n.selForContextMenu = r.doc.sel);
            }
          }
          function v() {
            if (
              t.contextMenuPending == v &&
              ((t.contextMenuPending = !1),
              (t.wrapper.style.cssText = d),
              (i.style.cssText = f),
              a &&
                s < 9 &&
                n.scrollbars.setScrollTop((n.scroller.scrollTop = c)),
              null != i.selectionStart)
            ) {
              (!a || (a && s < 9)) && m();
              var e = 0,
                o = function () {
                  n.selForContextMenu == r.doc.sel &&
                  0 == i.selectionStart &&
                  i.selectionEnd > 0 &&
                  "​" == t.prevInput
                    ? ei(r, so)(r)
                    : e++ < 10
                    ? (n.detectingSelectAll = setTimeout(o, 500))
                    : ((n.selForContextMenu = null), n.input.reset());
                };
              n.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }),
        (Va.prototype.readOnlyChanged = function (e) {
          e || this.reset(),
            (this.textarea.disabled = "nocursor" == e),
            (this.textarea.readOnly = !!e);
        }),
        (Va.prototype.setUneditable = function () {}),
        (Va.prototype.needsContentAttribute = !1),
        (function (e) {
          var t = e.optionHandlers;
          function r(r, n, i, o) {
            (e.defaults[r] = n),
              i &&
                (t[r] = o
                  ? function (e, t, r) {
                      r != Ca && i(e, t, r);
                    }
                  : i);
          }
          (e.defineOption = r),
            (e.Init = Ca),
            r(
              "value",
              "",
              function (e, t) {
                return e.setValue(t);
              },
              !0
            ),
            r(
              "mode",
              null,
              function (e, t) {
                (e.doc.modeOption = t), Oi(e);
              },
              !0
            ),
            r("indentUnit", 2, Oi, !0),
            r("indentWithTabs", !1),
            r("smartIndent", !0),
            r(
              "tabSize",
              4,
              function (e) {
                Ei(e), Ur(e), fn(e);
              },
              !0
            ),
            r("lineSeparator", null, function (e, t) {
              if (((e.doc.lineSep = t), t)) {
                var r = [],
                  n = e.doc.first;
                e.doc.iter(function (e) {
                  for (var i = 0; ; ) {
                    var o = e.text.indexOf(t, i);
                    if (-1 == o) break;
                    (i = o + t.length), r.push(rt(n, o));
                  }
                  n++;
                });
                for (var i = r.length - 1; i >= 0; i--)
                  go(e.doc, t, r[i], rt(r[i].line, r[i].ch + t.length));
              }
            }),
            r(
              "specialChars",
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
              function (e, t, r) {
                (e.state.specialChars = new RegExp(
                  t.source + (t.test("\t") ? "" : "|\t"),
                  "g"
                )),
                  r != Ca && e.refresh();
              }
            ),
            r(
              "specialCharPlaceholder",
              er,
              function (e) {
                return e.refresh();
              },
              !0
            ),
            r("electricChars", !0),
            r(
              "inputStyle",
              y ? "contenteditable" : "textarea",
              function () {
                throw new Error(
                  "inputStyle can not (yet) be changed in a running editor"
                );
              },
              !0
            ),
            r(
              "spellcheck",
              !1,
              function (e, t) {
                return (e.getInputField().spellcheck = t);
              },
              !0
            ),
            r(
              "autocorrect",
              !1,
              function (e, t) {
                return (e.getInputField().autocorrect = t);
              },
              !0
            ),
            r(
              "autocapitalize",
              !1,
              function (e, t) {
                return (e.getInputField().autocapitalize = t);
              },
              !0
            ),
            r("rtlMoveVisually", !x),
            r("wholeLineUpdateBefore", !0),
            r(
              "theme",
              "default",
              function (e) {
                xa(e), mi(e);
              },
              !0
            ),
            r("keyMap", "default", function (e, t, r) {
              var n = Xo(t),
                i = r != Ca && Xo(r);
              i && i.detach && i.detach(e, n),
                n.attach && n.attach(e, i || null);
            }),
            r("extraKeys", null),
            r("configureMouse", null),
            r("lineWrapping", !1, ka, !0),
            r(
              "gutters",
              [],
              function (e, t) {
                (e.display.gutterSpecs = pi(t, e.options.lineNumbers)), mi(e);
              },
              !0
            ),
            r(
              "fixedGutter",
              !0,
              function (e, t) {
                (e.display.gutters.style.left = t ? an(e.display) + "px" : "0"),
                  e.refresh();
              },
              !0
            ),
            r(
              "coverGutterNextToScrollbar",
              !1,
              function (e) {
                return Un(e);
              },
              !0
            ),
            r(
              "scrollbarStyle",
              "native",
              function (e) {
                zn(e),
                  Un(e),
                  e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                  e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
              },
              !0
            ),
            r(
              "lineNumbers",
              !1,
              function (e, t) {
                (e.display.gutterSpecs = pi(e.options.gutters, t)), mi(e);
              },
              !0
            ),
            r("firstLineNumber", 1, mi, !0),
            r(
              "lineNumberFormatter",
              function (e) {
                return e;
              },
              mi,
              !0
            ),
            r("showCursorWhenSelecting", !1, mn, !0),
            r("resetSelectionOnContextMenu", !0),
            r("lineWiseCopyCut", !0),
            r("pasteLinesPerSelection", !0),
            r("selectionsMayTouch", !1),
            r("readOnly", !1, function (e, t) {
              "nocursor" == t && (Tn(e), e.display.input.blur()),
                e.display.input.readOnlyChanged(t);
            }),
            r("screenReaderLabel", null, function (e, t) {
              (t = "" === t ? null : t),
                e.display.input.screenReaderLabelChanged(t);
            }),
            r(
              "disableInput",
              !1,
              function (e, t) {
                t || e.display.input.reset();
              },
              !0
            ),
            r("dragDrop", !0, Ta),
            r("allowDropFileTypes", null),
            r("cursorBlinkRate", 530),
            r("cursorScrollMargin", 0),
            r("cursorHeight", 1, mn, !0),
            r("singleCursorHeightPerLine", !0, mn, !0),
            r("workTime", 100),
            r("workDelay", 100),
            r("flattenSpans", !0, Ei, !0),
            r("addModeClass", !1, Ei, !0),
            r("pollInterval", 100),
            r("undoDepth", 200, function (e, t) {
              return (e.doc.history.undoDepth = t);
            }),
            r("historyEventDelay", 1250),
            r(
              "viewportMargin",
              10,
              function (e) {
                return e.refresh();
              },
              !0
            ),
            r("maxHighlightLength", 1e4, Ei, !0),
            r("moveInputWithCursor", !0, function (e, t) {
              t || e.display.input.resetPosition();
            }),
            r("tabindex", null, function (e, t) {
              return (e.display.input.getField().tabIndex = t || "");
            }),
            r("autofocus", null),
            r(
              "direction",
              "ltr",
              function (e, t) {
                return e.doc.setDirection(t);
              },
              !0
            ),
            r("phrases", null);
        })(La),
        (function (e) {
          var t = e.optionHandlers,
            r = (e.helpers = {});
          (e.prototype = {
            constructor: e,
            focus: function () {
              $(this).focus(), this.display.input.focus();
            },
            setOption: function (e, r) {
              var n = this.options,
                i = n[e];
              (n[e] == r && "mode" != e) ||
                ((n[e] = r),
                t.hasOwnProperty(e) && ei(this, t[e])(this, r, i),
                ye(this, "optionChange", this, e));
            },
            getOption: function (e) {
              return this.options[e];
            },
            getDoc: function () {
              return this.doc;
            },
            addKeyMap: function (e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](Xo(e));
            },
            removeKeyMap: function (e) {
              for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
            },
            addOverlay: ti(function (t, r) {
              var n = t.token ? t : e.getMode(this.options, t);
              if (n.startState)
                throw new Error("Overlays may not be stateful.");
              !(function (e, t, r) {
                for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++;
                e.splice(n, 0, t);
              })(
                this.state.overlays,
                {
                  mode: n,
                  modeSpec: t,
                  opaque: r && r.opaque,
                  priority: (r && r.priority) || 0,
                },
                function (e) {
                  return e.priority;
                }
              ),
                this.state.modeGen++,
                fn(this);
            }),
            removeOverlay: ti(function (e) {
              for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                var n = t[r].modeSpec;
                if (n == e || ("string" == typeof e && n.name == e))
                  return t.splice(r, 1), this.state.modeGen++, void fn(this);
              }
            }),
            indentLine: ti(function (e, t, r) {
              "string" != typeof t &&
                "number" != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent
                      ? "smart"
                      : "prev"
                    : t
                    ? "add"
                    : "subtract"),
                et(this.doc, e) && Ma(this, e, t, r);
            }),
            indentSelection: ti(function (e) {
              for (
                var t = this.doc.sel.ranges, r = -1, n = 0;
                n < t.length;
                n++
              ) {
                var i = t[n];
                if (i.empty())
                  i.head.line > r &&
                    (Ma(this, i.head.line, e, !0),
                    (r = i.head.line),
                    n == this.doc.sel.primIndex && En(this));
                else {
                  var o = i.from(),
                    a = i.to(),
                    s = Math.max(r, o.line);
                  r = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                  for (var l = s; l < r; ++l) Ma(this, l, e);
                  var c = this.doc.sel.ranges;
                  0 == o.ch &&
                    t.length == c.length &&
                    c[n].from().ch > 0 &&
                    Xi(this.doc, n, new _i(o, c[n].to()), K);
                }
              }
            }),
            getTokenAt: function (e, t) {
              return wt(this, e, t);
            },
            getLineTokens: function (e, t) {
              return wt(this, rt(e), t, !0);
            },
            getTokenTypeAt: function (e) {
              e = ct(this.doc, e);
              var t,
                r = pt(this, Ye(this.doc, e.line)),
                n = 0,
                i = (r.length - 1) / 2,
                o = e.ch;
              if (0 == o) t = r[2];
              else
                for (;;) {
                  var a = (n + i) >> 1;
                  if ((a ? r[2 * a - 1] : 0) >= o) i = a;
                  else {
                    if (!(r[2 * a + 1] < o)) {
                      t = r[2 * a + 2];
                      break;
                    }
                    n = a + 1;
                  }
                }
              var s = t ? t.indexOf("overlay ") : -1;
              return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
            },
            getModeAt: function (t) {
              var r = this.doc.mode;
              return r.innerMode
                ? e.innerMode(r, this.getTokenAt(t).state).mode
                : r;
            },
            getHelper: function (e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function (e, t) {
              var n = [];
              if (!r.hasOwnProperty(t)) return n;
              var i = r[t],
                o = this.getModeAt(e);
              if ("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
              else if (o[t])
                for (var a = 0; a < o[t].length; a++) {
                  var s = i[o[t][a]];
                  s && n.push(s);
                }
              else
                o.helperType && i[o.helperType]
                  ? n.push(i[o.helperType])
                  : i[o.name] && n.push(i[o.name]);
              for (var l = 0; l < i._global.length; l++) {
                var c = i._global[l];
                c.pred(o, this) && -1 == W(n, c.val) && n.push(c.val);
              }
              return n;
            },
            getStateAfter: function (e, t) {
              var r = this.doc;
              return gt(
                this,
                (e = lt(r, null == e ? r.first + r.size - 1 : e)) + 1,
                t
              ).state;
            },
            cursorCoords: function (e, t) {
              var r = this.doc.sel.primary();
              return Yr(
                this,
                null == e
                  ? r.head
                  : "object" == typeof e
                  ? ct(this.doc, e)
                  : e
                  ? r.from()
                  : r.to(),
                t || "page"
              );
            },
            charCoords: function (e, t) {
              return qr(this, ct(this.doc, e), t || "page");
            },
            coordsChar: function (e, t) {
              return Zr(this, (e = Kr(this, e, t || "page")).left, e.top);
            },
            lineAtHeight: function (e, t) {
              return (
                (e = Kr(this, { top: e, left: 0 }, t || "page").top),
                Qe(this.doc, e + this.display.viewOffset)
              );
            },
            heightAtLine: function (e, t, r) {
              var n,
                i = !1;
              if ("number" == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first
                  ? (e = this.doc.first)
                  : e > o && ((e = o), (i = !0)),
                  (n = Ye(this.doc, e));
              } else n = e;
              return (
                Vr(this, n, { top: 0, left: 0 }, t || "page", r || i).top +
                (i ? this.doc.height - Vt(n) : 0)
              );
            },
            defaultTextHeight: function () {
              return rn(this.display);
            },
            defaultCharWidth: function () {
              return nn(this.display);
            },
            getViewport: function () {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function (e, t, r, n, i) {
              var o = this.display,
                a = (e = Yr(this, ct(this.doc, e))).bottom,
                s = e.left;
              if (
                ((t.style.position = "absolute"),
                t.setAttribute("cm-ignore-events", "true"),
                this.display.input.setUneditable(t),
                o.sizer.appendChild(t),
                "over" == n)
              )
                a = e.top;
              else if ("above" == n || "near" == n) {
                var l = Math.max(o.wrapper.clientHeight, this.doc.height),
                  c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ("above" == n || e.bottom + t.offsetHeight > l) &&
                e.top > t.offsetHeight
                  ? (a = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= l && (a = e.bottom),
                  s + t.offsetWidth > c && (s = c - t.offsetWidth);
              }
              (t.style.top = a + "px"),
                (t.style.left = t.style.right = ""),
                "right" == i
                  ? ((s = o.sizer.clientWidth - t.offsetWidth),
                    (t.style.right = "0px"))
                  : ("left" == i
                      ? (s = 0)
                      : "middle" == i &&
                        (s = (o.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = s + "px")),
                r &&
                  (function (e, t) {
                    var r = Mn(e, t);
                    null != r.scrollTop && Dn(e, r.scrollTop),
                      null != r.scrollLeft && Hn(e, r.scrollLeft);
                  })(this, {
                    left: s,
                    top: a,
                    right: s + t.offsetWidth,
                    bottom: a + t.offsetHeight,
                  });
            },
            triggerOnKeyDown: ti(ua),
            triggerOnKeyPress: ti(ha),
            triggerOnKeyUp: fa,
            triggerOnMouseDown: ti(ma),
            execCommand: function (e) {
              if (ta.hasOwnProperty(e)) return ta[e].call(null, this);
            },
            triggerElectric: ti(function (e) {
              Ia(this, e);
            }),
            findPosH: function (e, t, r, n) {
              var i = 1;
              t < 0 && ((i = -1), (t = -t));
              for (
                var o = ct(this.doc, e), a = 0;
                a < t && !(o = $a(this.doc, o, i, r, n)).hitSide;
                ++a
              );
              return o;
            },
            moveH: ti(function (e, t) {
              var r = this;
              this.extendSelectionsBy(function (n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? $a(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                  : e < 0
                  ? n.from()
                  : n.to();
              }, Y);
            }),
            deleteH: ti(function (e, t) {
              var r = this.doc.sel,
                n = this.doc;
              r.somethingSelected()
                ? n.replaceSelection("", null, "+delete")
                : Zo(this, function (r) {
                    var i = $a(n, r.head, e, t, !1);
                    return e < 0
                      ? { from: i, to: r.head }
                      : { from: r.head, to: i };
                  });
            }),
            findPosV: function (e, t, r, n) {
              var i = 1,
                o = n;
              t < 0 && ((i = -1), (t = -t));
              for (var a = ct(this.doc, e), s = 0; s < t; ++s) {
                var l = Yr(this, a, "div");
                if (
                  (null == o ? (o = l.left) : (l.left = o),
                  (a = Ba(this, l, i, r)).hitSide)
                )
                  break;
              }
              return a;
            },
            moveV: ti(function (e, t) {
              var r = this,
                n = this.doc,
                i = [],
                o =
                  !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (
                (n.extendSelectionsBy(function (a) {
                  if (o) return e < 0 ? a.from() : a.to();
                  var s = Yr(r, a.head, "div");
                  null != a.goalColumn && (s.left = a.goalColumn),
                    i.push(s.left);
                  var l = Ba(r, s, e, t);
                  return (
                    "page" == t &&
                      a == n.sel.primary() &&
                      On(r, qr(r, l, "div").top - s.top),
                    l
                  );
                }, Y),
                i.length)
              )
                for (var a = 0; a < n.sel.ranges.length; a++)
                  n.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function (e) {
              var t = Ye(this.doc, e.line).text,
                r = e.ch,
                n = e.ch;
              if (t) {
                var i = this.getHelper(e, "wordChars");
                ("before" != e.sticky && n != t.length) || !r ? ++n : --r;
                for (
                  var o = t.charAt(r),
                    a = ie(o, i)
                      ? function (e) {
                          return ie(e, i);
                        }
                      : /\s/.test(o)
                      ? function (e) {
                          return /\s/.test(e);
                        }
                      : function (e) {
                          return !/\s/.test(e) && !ie(e);
                        };
                  r > 0 && a(t.charAt(r - 1));

                )
                  --r;
                for (; n < t.length && a(t.charAt(n)); ) ++n;
              }
              return new _i(rt(e.line, r), rt(e.line, n));
            },
            toggleOverwrite: function (e) {
              (null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? I(this.display.cursorDiv, "CodeMirror-overwrite")
                  : L(this.display.cursorDiv, "CodeMirror-overwrite"),
                ye(this, "overwriteToggle", this, this.state.overwrite));
            },
            hasFocus: function () {
              return this.display.input.getField() == N(H(this));
            },
            isReadOnly: function () {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: ti(function (e, t) {
              Rn(this, e, t);
            }),
            getScrollInfo: function () {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Lr(this) - this.display.barHeight,
                width: e.scrollWidth - Lr(this) - this.display.barWidth,
                clientHeight: Mr(this),
                clientWidth: Ar(this),
              };
            },
            scrollIntoView: ti(function (e, t) {
              null == e
                ? ((e = { from: this.doc.sel.primary().head, to: null }),
                  null == t && (t = this.options.cursorScrollMargin))
                : "number" == typeof e
                ? (e = { from: rt(e, 0), to: null })
                : null == e.from && (e = { from: e, to: null }),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line
                  ? (function (e, t) {
                      Nn(e), (e.curOp.scrollToPos = t);
                    })(this, e)
                  : In(this, e.from, e.to, e.margin);
            }),
            setSize: ti(function (e, t) {
              var r = this,
                n = function (e) {
                  return "number" == typeof e || /^\d+$/.test(String(e))
                    ? e + "px"
                    : e;
                };
              null != e && (this.display.wrapper.style.width = n(e)),
                null != t && (this.display.wrapper.style.height = n(t)),
                this.options.lineWrapping && Fr(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function (e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      hn(r, i, "widget");
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                ye(this, "refresh", this);
            }),
            operation: function (e) {
              return Qn(this, e);
            },
            startOperation: function () {
              return Kn(this);
            },
            endOperation: function () {
              return qn(this);
            },
            refresh: ti(function () {
              var e = this.display.cachedTextHeight;
              fn(this),
                (this.curOp.forceUpdate = !0),
                Ur(this),
                Rn(this, this.doc.scrollLeft, this.doc.scrollTop),
                ui(this.display),
                (null == e ||
                  Math.abs(e - rn(this.display)) > 0.5 ||
                  this.options.lineWrapping) &&
                  ln(this),
                ye(this, "refresh", this);
            }),
            swapDoc: ti(function (e) {
              var t = this.doc;
              return (
                (t.cm = null),
                this.state.selectingText && this.state.selectingText(),
                Di(this, e),
                Ur(this),
                this.display.input.reset(),
                Rn(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                cr(this, "swapDoc", this, t),
                t
              );
            }),
            phrase: function (e) {
              var t = this.options.phrases;
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
            },
            getInputField: function () {
              return this.display.input.getField();
            },
            getWrapperElement: function () {
              return this.display.wrapper;
            },
            getScrollerElement: function () {
              return this.display.scroller;
            },
            getGutterElement: function () {
              return this.display.gutters;
            },
          }),
            Ce(e),
            (e.registerHelper = function (t, n, i) {
              r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }),
                (r[t][n] = i);
            }),
            (e.registerGlobalHelper = function (t, n, i, o) {
              e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o });
            });
        })(La);
      var Ka = "iter insert remove copy getEditor constructor".split(" ");
      for (var qa in Eo.prototype)
        Eo.prototype.hasOwnProperty(qa) &&
          W(Ka, qa) < 0 &&
          (La.prototype[qa] = (function (e) {
            return function () {
              return e.apply(this.doc, arguments);
            };
          })(Eo.prototype[qa]));
      return (
        Ce(Eo),
        (La.inputStyles = { textarea: Va, contenteditable: Fa }),
        (La.defineMode = function (e) {
          La.defaults.mode || "null" == e || (La.defaults.mode = e),
            function (e, t) {
              arguments.length > 2 &&
                (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                ($e[e] = t);
            }.apply(this, arguments);
        }),
        (La.defineMIME = function (e, t) {
          Be[e] = t;
        }),
        La.defineMode("null", function () {
          return {
            token: function (e) {
              return e.skipToEnd();
            },
          };
        }),
        La.defineMIME("text/plain", "null"),
        (La.defineExtension = function (e, t) {
          La.prototype[e] = t;
        }),
        (La.defineDocExtension = function (e, t) {
          Eo.prototype[e] = t;
        }),
        (La.fromTextArea = function (e, t) {
          if (
            (((t = t ? F(t) : {}).value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var r = N(e.ownerDocument);
            t.autofocus =
              r == e ||
              (null != e.getAttribute("autofocus") && r == document.body);
          }
          function n() {
            e.value = s.getValue();
          }
          var i;
          if (e.form && (ge(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;
            try {
              var a = (o.submit = function () {
                n(), (o.submit = i), o.submit(), (o.submit = a);
              });
            } catch (e) {}
          }
          (t.finishInit = function (r) {
            (r.save = n),
              (r.getTextArea = function () {
                return e;
              }),
              (r.toTextArea = function () {
                (r.toTextArea = isNaN),
                  n(),
                  e.parentNode.removeChild(r.getWrapperElement()),
                  (e.style.display = ""),
                  e.form &&
                    (ve(e.form, "submit", n),
                    t.leaveSubmitMethodAlone ||
                      "function" != typeof e.form.submit ||
                      (e.form.submit = i));
              });
          }),
            (e.style.display = "none");
          var s = La(function (t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return s;
        }),
        (function (e) {
          (e.off = ve),
            (e.on = ge),
            (e.wheelEventPixels = wi),
            (e.Doc = Eo),
            (e.splitLines = Ie),
            (e.countColumn = U),
            (e.findColumn = G),
            (e.isWordChar = ne),
            (e.Pass = V),
            (e.signal = ye),
            (e.Line = Yt),
            (e.changeEnd = ki),
            (e.scrollbarModel = Wn),
            (e.Pos = rt),
            (e.cmpPos = nt),
            (e.modes = $e),
            (e.mimeModes = Be),
            (e.resolveMode = Fe),
            (e.getMode = Ue),
            (e.modeExtensions = je),
            (e.extendMode = We),
            (e.copyState = ze),
            (e.startState = Ke),
            (e.innerMode = Ve),
            (e.commands = ta),
            (e.keyMap = Wo),
            (e.keyName = Go),
            (e.isModifierKey = qo),
            (e.lookupKey = Ko),
            (e.normalizeKeyMap = Vo),
            (e.StringStream = qe),
            (e.SharedTextMarker = Lo),
            (e.TextMarker = To),
            (e.LineWidget = Co),
            (e.e_preventDefault = _e),
            (e.e_stopPropagation = Se),
            (e.e_stop = ke),
            (e.addClass = I),
            (e.contains = R),
            (e.rmClass = L),
            (e.keyNames = Bo);
        })(La),
        (La.version = "5.65.13"),
        La
      );
    });
  },
  function (e, t, r) {
    "use strict";
    var n = r(9),
      i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return t;
        };
    e.exports = f;
    var o = Object.create(r(4));
    o.inherits = r(3);
    var a = r(20),
      s = r(16);
    o.inherits(f, a);
    for (var l = i(s.prototype), c = 0; c < l.length; c++) {
      var u = l[c];
      f.prototype[u] || (f.prototype[u] = s.prototype[u]);
    }
    function f(e) {
      if (!(this instanceof f)) return new f(e);
      a.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", h);
    }
    function h() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this);
    }
    function d(e) {
      e.end();
    }
    Object.defineProperty(f.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(f.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (f.prototype._destroy = function (e, t) {
        this.push(null), this.end(), n.nextTick(t, e);
      });
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var r = function () {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t, r) {
    function n(e) {
      return Object.prototype.toString.call(e);
    }
    (t.isArray = function (e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
    }),
      (t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }),
      (t.isNull = function (e) {
        return null === e;
      }),
      (t.isNullOrUndefined = function (e) {
        return null == e;
      }),
      (t.isNumber = function (e) {
        return "number" == typeof e;
      }),
      (t.isString = function (e) {
        return "string" == typeof e;
      }),
      (t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }),
      (t.isUndefined = function (e) {
        return void 0 === e;
      }),
      (t.isRegExp = function (e) {
        return "[object RegExp]" === n(e);
      }),
      (t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }),
      (t.isDate = function (e) {
        return "[object Date]" === n(e);
      }),
      (t.isError = function (e) {
        return "[object Error]" === n(e) || e instanceof Error;
      }),
      (t.isFunction = function (e) {
        return "function" == typeof e;
      }),
      (t.isPrimitive = function (e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          void 0 === e
        );
      }),
      (t.isBuffer = r(23).Buffer.isBuffer);
  },
  function (e, t) {
    var r,
      n,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    })();
    var l,
      c = [],
      u = !1,
      f = -1;
    function h() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (f = -1), c.length && d());
    }
    function d() {
      if (!u) {
        var e = s(h);
        u = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++f < t; ) l && l[f].run();
          (f = -1), (t = c.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      c.push(new p(e, t)), 1 !== c.length || u || s(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = g),
      (i.addListener = g),
      (i.once = g),
      (i.off = g),
      (i.removeListener = g),
      (i.removeAllListeners = g),
      (i.emit = g),
      (i.prependListener = g),
      (i.prependOnceListener = g),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var r = (function (e, t) {
              var r = e[1] || "",
                n = e[3];
              if (!n) return r;
              if (t && "function" == typeof btoa) {
                var i = (function (e) {
                    return (
                      "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
                      " */"
                    );
                  })(n),
                  o = n.sources.map(function (e) {
                    return "/*# sourceURL=" + n.sourceRoot + e + " */";
                  });
                return [r].concat(o).concat([i]).join("\n");
              }
              return [r].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
          }).join("");
        }),
        (t.i = function (e, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var n = {}, i = 0; i < this.length; i++) {
            var o = this[i][0];
            "number" == typeof o && (n[o] = !0);
          }
          for (i = 0; i < e.length; i++) {
            var a = e[i];
            ("number" == typeof a[0] && n[a[0]]) ||
              (r && !a[2]
                ? (a[2] = r)
                : r && (a[2] = "(" + a[2] + ") and (" + r + ")"),
              t.push(a));
          }
        }),
        t
      );
    };
  },
  function (e, t, r) {
    var n = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !n)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var i = r(33),
      o = {},
      a = n && (document.head || document.getElementsByTagName("head")[0]),
      s = null,
      l = 0,
      c = !1,
      u = function () {},
      f = null,
      h = "data-vue-ssr-id",
      d =
        "undefined" != typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function p(e) {
      for (var t = 0; t < e.length; t++) {
        var r = e[t],
          n = o[r.id];
        if (n) {
          n.refs++;
          for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) n.parts.push(m(r.parts[i]));
          n.parts.length > r.parts.length && (n.parts.length = r.parts.length);
        } else {
          var a = [];
          for (i = 0; i < r.parts.length; i++) a.push(m(r.parts[i]));
          o[r.id] = { id: r.id, refs: 1, parts: a };
        }
      }
    }
    function g() {
      var e = document.createElement("style");
      return (e.type = "text/css"), a.appendChild(e), e;
    }
    function m(e) {
      var t,
        r,
        n = document.querySelector("style[" + h + '~="' + e.id + '"]');
      if (n) {
        if (c) return u;
        n.parentNode.removeChild(n);
      }
      if (d) {
        var i = l++;
        (n = s || (s = g())),
          (t = y.bind(null, n, i, !1)),
          (r = y.bind(null, n, i, !0));
      } else
        (n = g()),
          (t = function (e, t) {
            var r = t.css,
              n = t.media,
              i = t.sourceMap;
            n && e.setAttribute("media", n);
            f.ssrId && e.setAttribute(h, t.id);
            i &&
              ((r += "\n/*# sourceURL=" + i.sources[0] + " */"),
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                " */"));
            if (e.styleSheet) e.styleSheet.cssText = r;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(r));
            }
          }.bind(null, n)),
          (r = function () {
            n.parentNode.removeChild(n);
          });
      return (
        t(e),
        function (n) {
          if (n) {
            if (
              n.css === e.css &&
              n.media === e.media &&
              n.sourceMap === e.sourceMap
            )
              return;
            t((e = n));
          } else r();
        }
      );
    }
    e.exports = function (e, t, r, n) {
      (c = r), (f = n || {});
      var a = i(e, t);
      return (
        p(a),
        function (t) {
          for (var r = [], n = 0; n < a.length; n++) {
            var s = a[n];
            (l = o[s.id]).refs--, r.push(l);
          }
          t ? p((a = i(e, t))) : (a = []);
          for (n = 0; n < r.length; n++) {
            var l;
            if (0 === (l = r[n]).refs) {
              for (var c = 0; c < l.parts.length; c++) l.parts[c]();
              delete o[l.id];
            }
          }
        }
      );
    };
    var v = (function () {
      var e = [];
      return function (t, r) {
        return (e[t] = r), e.filter(Boolean).join("\n");
      };
    })();
    function y(e, t, r, n) {
      var i = r ? "" : n.css;
      if (e.styleSheet) e.styleSheet.cssText = v(t, i);
      else {
        var o = document.createTextNode(i),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      (module.exports = makeParserClass(__webpack_require__(51))),
        (module.exports.makeParserClass = makeParserClass);
      class TomlError extends Error {
        constructor(e) {
          super(e),
            (this.name = "TomlError"),
            Error.captureStackTrace && Error.captureStackTrace(this, TomlError),
            (this.fromTOML = !0),
            (this.wrapped = null);
        }
      }
      (TomlError.wrap = (e) => {
        const t = new TomlError(e.message);
        return (t.code = e.code), (t.wrapped = e), t;
      }),
        (module.exports.TomlError = TomlError);
      const createDateTime = __webpack_require__(52),
        createDateTimeFloat = __webpack_require__(53),
        createDate = __webpack_require__(54),
        createTime = __webpack_require__(55),
        CTRL_I = 9,
        CTRL_J = 10,
        CTRL_M = 13,
        CTRL_CHAR_BOUNDARY = 31,
        CHAR_SP = 32,
        CHAR_QUOT = 34,
        CHAR_NUM = 35,
        CHAR_APOS = 39,
        CHAR_PLUS = 43,
        CHAR_COMMA = 44,
        CHAR_HYPHEN = 45,
        CHAR_PERIOD = 46,
        CHAR_0 = 48,
        CHAR_1 = 49,
        CHAR_7 = 55,
        CHAR_9 = 57,
        CHAR_COLON = 58,
        CHAR_EQUALS = 61,
        CHAR_A = 65,
        CHAR_E = 69,
        CHAR_F = 70,
        CHAR_T = 84,
        CHAR_U = 85,
        CHAR_Z = 90,
        CHAR_LOWBAR = 95,
        CHAR_a = 97,
        CHAR_b = 98,
        CHAR_e = 101,
        CHAR_f = 102,
        CHAR_i = 105,
        CHAR_l = 108,
        CHAR_n = 110,
        CHAR_o = 111,
        CHAR_r = 114,
        CHAR_s = 115,
        CHAR_t = 116,
        CHAR_u = 117,
        CHAR_x = 120,
        CHAR_z = 122,
        CHAR_LCUB = 123,
        CHAR_RCUB = 125,
        CHAR_LSQB = 91,
        CHAR_BSOL = 92,
        CHAR_RSQB = 93,
        CHAR_DEL = 127,
        SURROGATE_FIRST = 55296,
        SURROGATE_LAST = 57343,
        escapes = {
          [CHAR_b]: "\b",
          [CHAR_t]: "\t",
          [CHAR_n]: "\n",
          [CHAR_f]: "\f",
          [CHAR_r]: "\r",
          [CHAR_QUOT]: '"',
          [CHAR_BSOL]: "\\",
        };
      function isDigit(e) {
        return e >= CHAR_0 && e <= CHAR_9;
      }
      function isHexit(e) {
        return (
          (e >= CHAR_A && e <= CHAR_F) ||
          (e >= CHAR_a && e <= CHAR_f) ||
          (e >= CHAR_0 && e <= CHAR_9)
        );
      }
      function isBit(e) {
        return e === CHAR_1 || e === CHAR_0;
      }
      function isOctit(e) {
        return e >= CHAR_0 && e <= CHAR_7;
      }
      function isAlphaNumQuoteHyphen(e) {
        return (
          (e >= CHAR_A && e <= CHAR_Z) ||
          (e >= CHAR_a && e <= CHAR_z) ||
          (e >= CHAR_0 && e <= CHAR_9) ||
          e === CHAR_APOS ||
          e === CHAR_QUOT ||
          e === CHAR_LOWBAR ||
          e === CHAR_HYPHEN
        );
      }
      function isAlphaNumHyphen(e) {
        return (
          (e >= CHAR_A && e <= CHAR_Z) ||
          (e >= CHAR_a && e <= CHAR_z) ||
          (e >= CHAR_0 && e <= CHAR_9) ||
          e === CHAR_LOWBAR ||
          e === CHAR_HYPHEN
        );
      }
      const _type = Symbol("type"),
        _declared = Symbol("declared"),
        hasOwnProperty = Object.prototype.hasOwnProperty,
        defineProperty = Object.defineProperty,
        descriptor = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0,
        };
      function hasKey(e, t) {
        return (
          !!hasOwnProperty.call(e, t) ||
          ("__proto__" === t && defineProperty(e, "__proto__", descriptor), !1)
        );
      }
      const INLINE_TABLE = Symbol("inline-table");
      function InlineTable() {
        return Object.defineProperties(
          {},
          { [_type]: { value: INLINE_TABLE } }
        );
      }
      function isInlineTable(e) {
        return null !== e && "object" == typeof e && e[_type] === INLINE_TABLE;
      }
      const TABLE = Symbol("table");
      function Table() {
        return Object.defineProperties(
          {},
          {
            [_type]: { value: TABLE },
            [_declared]: { value: !1, writable: !0 },
          }
        );
      }
      function isTable(e) {
        return null !== e && "object" == typeof e && e[_type] === TABLE;
      }
      const _contentType = Symbol("content-type"),
        INLINE_LIST = Symbol("inline-list");
      function InlineList(e) {
        return Object.defineProperties([], {
          [_type]: { value: INLINE_LIST },
          [_contentType]: { value: e },
        });
      }
      function isInlineList(e) {
        return null !== e && "object" == typeof e && e[_type] === INLINE_LIST;
      }
      const LIST = Symbol("list");
      function List() {
        return Object.defineProperties([], { [_type]: { value: LIST } });
      }
      function isList(e) {
        return null !== e && "object" == typeof e && e[_type] === LIST;
      }
      let _custom;
      try {
        const utilInspect = eval("require('util').inspect");
        _custom = utilInspect.custom;
      } catch (e) {}
      const _inspect = _custom || "inspect";
      class BoxedBigInt {
        constructor(e) {
          try {
            this.value = global.BigInt.asIntN(64, e);
          } catch (e) {
            this.value = null;
          }
          Object.defineProperty(this, _type, { value: INTEGER });
        }
        isNaN() {
          return null === this.value;
        }
        toString() {
          return String(this.value);
        }
        [_inspect]() {
          return `[BigInt: ${this.toString()}]}`;
        }
        valueOf() {
          return this.value;
        }
      }
      const INTEGER = Symbol("integer");
      function Integer(e) {
        let t = Number(e);
        return (
          Object.is(t, -0) && (t = 0),
          global.BigInt && !Number.isSafeInteger(t)
            ? new BoxedBigInt(e)
            : Object.defineProperties(new Number(t), {
                isNaN: {
                  value: function () {
                    return isNaN(this);
                  },
                },
                [_type]: { value: INTEGER },
                [_inspect]: { value: () => `[Integer: ${e}]` },
              })
        );
      }
      function isInteger(e) {
        return null !== e && "object" == typeof e && e[_type] === INTEGER;
      }
      const FLOAT = Symbol("float");
      function Float(e) {
        return Object.defineProperties(new Number(e), {
          [_type]: { value: FLOAT },
          [_inspect]: { value: () => `[Float: ${e}]` },
        });
      }
      function isFloat(e) {
        return null !== e && "object" == typeof e && e[_type] === FLOAT;
      }
      function tomlType(e) {
        const t = typeof e;
        if ("object" === t) {
          if (null === e) return "null";
          if (e instanceof Date) return "datetime";
          if (_type in e)
            switch (e[_type]) {
              case INLINE_TABLE:
                return "inline-table";
              case INLINE_LIST:
                return "inline-list";
              case TABLE:
                return "table";
              case LIST:
                return "list";
              case FLOAT:
                return "float";
              case INTEGER:
                return "integer";
            }
        }
        return t;
      }
      function makeParserClass(e) {
        return class extends e {
          constructor() {
            super(), (this.ctx = this.obj = Table());
          }
          atEndOfWord() {
            return (
              this.char === CHAR_NUM ||
              this.char === CTRL_I ||
              this.char === CHAR_SP ||
              this.atEndOfLine()
            );
          }
          atEndOfLine() {
            return (
              this.char === e.END ||
              this.char === CTRL_J ||
              this.char === CTRL_M
            );
          }
          parseStart() {
            if (this.char === e.END) return null;
            if (this.char === CHAR_LSQB)
              return this.call(this.parseTableOrList);
            if (this.char === CHAR_NUM) return this.call(this.parseComment);
            if (
              this.char === CTRL_J ||
              this.char === CHAR_SP ||
              this.char === CTRL_I ||
              this.char === CTRL_M
            )
              return null;
            if (isAlphaNumQuoteHyphen(this.char))
              return this.callNow(this.parseAssignStatement);
            throw this.error(new TomlError(`Unknown character "${this.char}"`));
          }
          parseWhitespaceToEOL() {
            if (
              this.char === CHAR_SP ||
              this.char === CTRL_I ||
              this.char === CTRL_M
            )
              return null;
            if (this.char === CHAR_NUM) return this.goto(this.parseComment);
            if (this.char === e.END || this.char === CTRL_J)
              return this.return();
            throw this.error(
              new TomlError(
                "Unexpected character, expected only whitespace or comments till end of line"
              )
            );
          }
          parseAssignStatement() {
            return this.callNow(this.parseAssign, this.recordAssignStatement);
          }
          recordAssignStatement(e) {
            let t = this.ctx,
              r = e.key.pop();
            for (let r of e.key) {
              if (hasKey(t, r) && !isTable(t[r]))
                throw this.error(new TomlError("Can't redefine existing key"));
              t = t[r] = t[r] || Table();
            }
            if (hasKey(t, r))
              throw this.error(new TomlError("Can't redefine existing key"));
            return (
              (t[_declared] = !0),
              isInteger(e.value) || isFloat(e.value)
                ? (t[r] = e.value.valueOf())
                : (t[r] = e.value),
              this.goto(this.parseWhitespaceToEOL)
            );
          }
          parseAssign() {
            return this.callNow(this.parseKeyword, this.recordAssignKeyword);
          }
          recordAssignKeyword(e) {
            return (
              this.state.resultTable
                ? this.state.resultTable.push(e)
                : (this.state.resultTable = [e]),
              this.goto(this.parseAssignKeywordPreDot)
            );
          }
          parseAssignKeywordPreDot() {
            return this.char === CHAR_PERIOD
              ? this.next(this.parseAssignKeywordPostDot)
              : this.char !== CHAR_SP && this.char !== CTRL_I
              ? this.goto(this.parseAssignEqual)
              : void 0;
          }
          parseAssignKeywordPostDot() {
            if (this.char !== CHAR_SP && this.char !== CTRL_I)
              return this.callNow(this.parseKeyword, this.recordAssignKeyword);
          }
          parseAssignEqual() {
            if (this.char === CHAR_EQUALS)
              return this.next(this.parseAssignPreValue);
            throw this.error(new TomlError('Invalid character, expected "="'));
          }
          parseAssignPreValue() {
            return this.char === CHAR_SP || this.char === CTRL_I
              ? null
              : this.callNow(this.parseValue, this.recordAssignValue);
          }
          recordAssignValue(e) {
            return this.returnNow({ key: this.state.resultTable, value: e });
          }
          parseComment() {
            do {
              if (this.char === e.END || this.char === CTRL_J)
                return this.return();
              if (
                this.char === CHAR_DEL ||
                (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I)
              )
                throw this.errorControlCharIn("comments");
            } while (this.nextChar());
          }
          parseTableOrList() {
            if (this.char !== CHAR_LSQB) return this.goto(this.parseTable);
            this.next(this.parseList);
          }
          parseTable() {
            return (this.ctx = this.obj), this.goto(this.parseTableNext);
          }
          parseTableNext() {
            return this.char === CHAR_SP || this.char === CTRL_I
              ? null
              : this.callNow(this.parseKeyword, this.parseTableMore);
          }
          parseTableMore(e) {
            if (this.char === CHAR_SP || this.char === CTRL_I) return null;
            if (this.char === CHAR_RSQB) {
              if (
                hasKey(this.ctx, e) &&
                (!isTable(this.ctx[e]) || this.ctx[e][_declared])
              )
                throw this.error(new TomlError("Can't redefine existing key"));
              return (
                (this.ctx = this.ctx[e] = this.ctx[e] || Table()),
                (this.ctx[_declared] = !0),
                this.next(this.parseWhitespaceToEOL)
              );
            }
            if (this.char === CHAR_PERIOD) {
              if (hasKey(this.ctx, e))
                if (isTable(this.ctx[e])) this.ctx = this.ctx[e];
                else {
                  if (!isList(this.ctx[e]))
                    throw this.error(
                      new TomlError("Can't redefine existing key")
                    );
                  this.ctx = this.ctx[e][this.ctx[e].length - 1];
                }
              else this.ctx = this.ctx[e] = Table();
              return this.next(this.parseTableNext);
            }
            throw this.error(
              new TomlError("Unexpected character, expected whitespace, . or ]")
            );
          }
          parseList() {
            return (this.ctx = this.obj), this.goto(this.parseListNext);
          }
          parseListNext() {
            return this.char === CHAR_SP || this.char === CTRL_I
              ? null
              : this.callNow(this.parseKeyword, this.parseListMore);
          }
          parseListMore(e) {
            if (this.char === CHAR_SP || this.char === CTRL_I) return null;
            if (this.char === CHAR_RSQB) {
              if (
                (hasKey(this.ctx, e) || (this.ctx[e] = List()),
                isInlineList(this.ctx[e]))
              )
                throw this.error(new TomlError("Can't extend an inline array"));
              if (!isList(this.ctx[e]))
                throw this.error(
                  new TomlError("Can't redefine an existing key")
                );
              {
                const t = Table();
                this.ctx[e].push(t), (this.ctx = t);
              }
              return this.next(this.parseListEnd);
            }
            if (this.char === CHAR_PERIOD) {
              if (hasKey(this.ctx, e)) {
                if (isInlineList(this.ctx[e]))
                  throw this.error(
                    new TomlError("Can't extend an inline array")
                  );
                if (isInlineTable(this.ctx[e]))
                  throw this.error(
                    new TomlError("Can't extend an inline table")
                  );
                if (isList(this.ctx[e]))
                  this.ctx = this.ctx[e][this.ctx[e].length - 1];
                else {
                  if (!isTable(this.ctx[e]))
                    throw this.error(
                      new TomlError("Can't redefine an existing key")
                    );
                  this.ctx = this.ctx[e];
                }
              } else this.ctx = this.ctx[e] = Table();
              return this.next(this.parseListNext);
            }
            throw this.error(
              new TomlError("Unexpected character, expected whitespace, . or ]")
            );
          }
          parseListEnd(e) {
            if (this.char === CHAR_RSQB)
              return this.next(this.parseWhitespaceToEOL);
            throw this.error(
              new TomlError("Unexpected character, expected whitespace, . or ]")
            );
          }
          parseValue() {
            if (this.char === e.END)
              throw this.error(new TomlError("Key without value"));
            if (this.char === CHAR_QUOT)
              return this.next(this.parseDoubleString);
            if (this.char === CHAR_APOS)
              return this.next(this.parseSingleString);
            if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS)
              return this.goto(this.parseNumberSign);
            if (this.char === CHAR_i) return this.next(this.parseInf);
            if (this.char === CHAR_n) return this.next(this.parseNan);
            if (isDigit(this.char))
              return this.goto(this.parseNumberOrDateTime);
            if (this.char === CHAR_t || this.char === CHAR_f)
              return this.goto(this.parseBoolean);
            if (this.char === CHAR_LSQB)
              return this.call(this.parseInlineList, this.recordValue);
            if (this.char === CHAR_LCUB)
              return this.call(this.parseInlineTable, this.recordValue);
            throw this.error(
              new TomlError(
                "Unexpected character, expecting string, number, datetime, boolean, inline array or inline table"
              )
            );
          }
          recordValue(e) {
            return this.returnNow(e);
          }
          parseInf() {
            if (this.char === CHAR_n) return this.next(this.parseInf2);
            throw this.error(
              new TomlError(
                'Unexpected character, expected "inf", "+inf" or "-inf"'
              )
            );
          }
          parseInf2() {
            if (this.char === CHAR_f)
              return "-" === this.state.buf
                ? this.return(-1 / 0)
                : this.return(1 / 0);
            throw this.error(
              new TomlError(
                'Unexpected character, expected "inf", "+inf" or "-inf"'
              )
            );
          }
          parseNan() {
            if (this.char === CHAR_a) return this.next(this.parseNan2);
            throw this.error(
              new TomlError('Unexpected character, expected "nan"')
            );
          }
          parseNan2() {
            if (this.char === CHAR_n) return this.return(NaN);
            throw this.error(
              new TomlError('Unexpected character, expected "nan"')
            );
          }
          parseKeyword() {
            return this.char === CHAR_QUOT
              ? this.next(this.parseBasicString)
              : this.char === CHAR_APOS
              ? this.next(this.parseLiteralString)
              : this.goto(this.parseBareKey);
          }
          parseBareKey() {
            do {
              if (this.char === e.END)
                throw this.error(new TomlError("Key ended without value"));
              if (!isAlphaNumHyphen(this.char)) {
                if (0 === this.state.buf.length)
                  throw this.error(
                    new TomlError("Empty bare keys are not allowed")
                  );
                return this.returnNow();
              }
              this.consume();
            } while (this.nextChar());
          }
          parseSingleString() {
            return this.char === CHAR_APOS
              ? this.next(this.parseLiteralMultiStringMaybe)
              : this.goto(this.parseLiteralString);
          }
          parseLiteralString() {
            do {
              if (this.char === CHAR_APOS) return this.return();
              if (this.atEndOfLine())
                throw this.error(new TomlError("Unterminated string"));
              if (
                this.char === CHAR_DEL ||
                (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I)
              )
                throw this.errorControlCharIn("strings");
              this.consume();
            } while (this.nextChar());
          }
          parseLiteralMultiStringMaybe() {
            return this.char === CHAR_APOS
              ? this.next(this.parseLiteralMultiString)
              : this.returnNow();
          }
          parseLiteralMultiString() {
            return this.char === CTRL_M
              ? null
              : this.char === CTRL_J
              ? this.next(this.parseLiteralMultiStringContent)
              : this.goto(this.parseLiteralMultiStringContent);
          }
          parseLiteralMultiStringContent() {
            do {
              if (this.char === CHAR_APOS)
                return this.next(this.parseLiteralMultiEnd);
              if (this.char === e.END)
                throw this.error(
                  new TomlError("Unterminated multi-line string")
                );
              if (
                this.char === CHAR_DEL ||
                (this.char <= CTRL_CHAR_BOUNDARY &&
                  this.char !== CTRL_I &&
                  this.char !== CTRL_J &&
                  this.char !== CTRL_M)
              )
                throw this.errorControlCharIn("strings");
              this.consume();
            } while (this.nextChar());
          }
          parseLiteralMultiEnd() {
            return this.char === CHAR_APOS
              ? this.next(this.parseLiteralMultiEnd2)
              : ((this.state.buf += "'"),
                this.goto(this.parseLiteralMultiStringContent));
          }
          parseLiteralMultiEnd2() {
            return this.char === CHAR_APOS
              ? this.next(this.parseLiteralMultiEnd3)
              : ((this.state.buf += "''"),
                this.goto(this.parseLiteralMultiStringContent));
          }
          parseLiteralMultiEnd3() {
            return this.char === CHAR_APOS
              ? ((this.state.buf += "'"), this.next(this.parseLiteralMultiEnd4))
              : this.returnNow();
          }
          parseLiteralMultiEnd4() {
            return this.char === CHAR_APOS
              ? ((this.state.buf += "'"), this.return())
              : this.returnNow();
          }
          parseDoubleString() {
            return this.char === CHAR_QUOT
              ? this.next(this.parseMultiStringMaybe)
              : this.goto(this.parseBasicString);
          }
          parseBasicString() {
            do {
              if (this.char === CHAR_BSOL)
                return this.call(
                  this.parseEscape,
                  this.recordEscapeReplacement
                );
              if (this.char === CHAR_QUOT) return this.return();
              if (this.atEndOfLine())
                throw this.error(new TomlError("Unterminated string"));
              if (
                this.char === CHAR_DEL ||
                (this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I)
              )
                throw this.errorControlCharIn("strings");
              this.consume();
            } while (this.nextChar());
          }
          recordEscapeReplacement(e) {
            return (this.state.buf += e), this.goto(this.parseBasicString);
          }
          parseMultiStringMaybe() {
            return this.char === CHAR_QUOT
              ? this.next(this.parseMultiString)
              : this.returnNow();
          }
          parseMultiString() {
            return this.char === CTRL_M
              ? null
              : this.char === CTRL_J
              ? this.next(this.parseMultiStringContent)
              : this.goto(this.parseMultiStringContent);
          }
          parseMultiStringContent() {
            do {
              if (this.char === CHAR_BSOL)
                return this.call(
                  this.parseMultiEscape,
                  this.recordMultiEscapeReplacement
                );
              if (this.char === CHAR_QUOT) return this.next(this.parseMultiEnd);
              if (this.char === e.END)
                throw this.error(
                  new TomlError("Unterminated multi-line string")
                );
              if (
                this.char === CHAR_DEL ||
                (this.char <= CTRL_CHAR_BOUNDARY &&
                  this.char !== CTRL_I &&
                  this.char !== CTRL_J &&
                  this.char !== CTRL_M)
              )
                throw this.errorControlCharIn("strings");
              this.consume();
            } while (this.nextChar());
          }
          errorControlCharIn(e) {
            let t = "\\u00";
            return (
              this.char < 16 && (t += "0"),
              (t += this.char.toString(16)),
              this.error(
                new TomlError(
                  `Control characters (codes < 0x1f and 0x7f) are not allowed in ${e}, use ${t} instead`
                )
              )
            );
          }
          recordMultiEscapeReplacement(e) {
            return (
              (this.state.buf += e), this.goto(this.parseMultiStringContent)
            );
          }
          parseMultiEnd() {
            return this.char === CHAR_QUOT
              ? this.next(this.parseMultiEnd2)
              : ((this.state.buf += '"'),
                this.goto(this.parseMultiStringContent));
          }
          parseMultiEnd2() {
            return this.char === CHAR_QUOT
              ? this.next(this.parseMultiEnd3)
              : ((this.state.buf += '""'),
                this.goto(this.parseMultiStringContent));
          }
          parseMultiEnd3() {
            return this.char === CHAR_QUOT
              ? ((this.state.buf += '"'), this.next(this.parseMultiEnd4))
              : this.returnNow();
          }
          parseMultiEnd4() {
            return this.char === CHAR_QUOT
              ? ((this.state.buf += '"'), this.return())
              : this.returnNow();
          }
          parseMultiEscape() {
            return this.char === CTRL_M || this.char === CTRL_J
              ? this.next(this.parseMultiTrim)
              : this.char === CHAR_SP || this.char === CTRL_I
              ? this.next(this.parsePreMultiTrim)
              : this.goto(this.parseEscape);
          }
          parsePreMultiTrim() {
            if (this.char === CHAR_SP || this.char === CTRL_I) return null;
            if (this.char === CTRL_M || this.char === CTRL_J)
              return this.next(this.parseMultiTrim);
            throw this.error(new TomlError("Can't escape whitespace"));
          }
          parseMultiTrim() {
            return this.char === CTRL_J ||
              this.char === CHAR_SP ||
              this.char === CTRL_I ||
              this.char === CTRL_M
              ? null
              : this.returnNow();
          }
          parseEscape() {
            if (this.char in escapes) return this.return(escapes[this.char]);
            if (this.char === CHAR_u)
              return this.call(this.parseSmallUnicode, this.parseUnicodeReturn);
            if (this.char === CHAR_U)
              return this.call(this.parseLargeUnicode, this.parseUnicodeReturn);
            throw this.error(
              new TomlError("Unknown escape character: " + this.char)
            );
          }
          parseUnicodeReturn(e) {
            try {
              const t = parseInt(e, 16);
              if (t >= SURROGATE_FIRST && t <= SURROGATE_LAST)
                throw this.error(
                  new TomlError(
                    "Invalid unicode, character in range 0xD800 - 0xDFFF is reserved"
                  )
                );
              return this.returnNow(String.fromCodePoint(t));
            } catch (e) {
              throw this.error(TomlError.wrap(e));
            }
          }
          parseSmallUnicode() {
            if (!isHexit(this.char))
              throw this.error(
                new TomlError(
                  "Invalid character in unicode sequence, expected hex"
                )
              );
            if ((this.consume(), this.state.buf.length >= 4))
              return this.return();
          }
          parseLargeUnicode() {
            if (!isHexit(this.char))
              throw this.error(
                new TomlError(
                  "Invalid character in unicode sequence, expected hex"
                )
              );
            if ((this.consume(), this.state.buf.length >= 8))
              return this.return();
          }
          parseNumberSign() {
            return this.consume(), this.next(this.parseMaybeSignedInfOrNan);
          }
          parseMaybeSignedInfOrNan() {
            return this.char === CHAR_i
              ? this.next(this.parseInf)
              : this.char === CHAR_n
              ? this.next(this.parseNan)
              : this.callNow(this.parseNoUnder, this.parseNumberIntegerStart);
          }
          parseNumberIntegerStart() {
            return this.char === CHAR_0
              ? (this.consume(),
                this.next(this.parseNumberIntegerExponentOrDecimal))
              : this.goto(this.parseNumberInteger);
          }
          parseNumberIntegerExponentOrDecimal() {
            return this.char === CHAR_PERIOD
              ? (this.consume(),
                this.call(this.parseNoUnder, this.parseNumberFloat))
              : this.char === CHAR_E || this.char === CHAR_e
              ? (this.consume(), this.next(this.parseNumberExponentSign))
              : this.returnNow(Integer(this.state.buf));
          }
          parseNumberInteger() {
            if (!isDigit(this.char)) {
              if (this.char === CHAR_LOWBAR)
                return this.call(this.parseNoUnder);
              if (this.char === CHAR_E || this.char === CHAR_e)
                return this.consume(), this.next(this.parseNumberExponentSign);
              if (this.char === CHAR_PERIOD)
                return (
                  this.consume(),
                  this.call(this.parseNoUnder, this.parseNumberFloat)
                );
              {
                const e = Integer(this.state.buf);
                if (e.isNaN())
                  throw this.error(new TomlError("Invalid number"));
                return this.returnNow(e);
              }
            }
            this.consume();
          }
          parseNoUnder() {
            if (
              this.char === CHAR_LOWBAR ||
              this.char === CHAR_PERIOD ||
              this.char === CHAR_E ||
              this.char === CHAR_e
            )
              throw this.error(
                new TomlError("Unexpected character, expected digit")
              );
            if (this.atEndOfWord())
              throw this.error(new TomlError("Incomplete number"));
            return this.returnNow();
          }
          parseNoUnderHexOctBinLiteral() {
            if (this.char === CHAR_LOWBAR || this.char === CHAR_PERIOD)
              throw this.error(
                new TomlError("Unexpected character, expected digit")
              );
            if (this.atEndOfWord())
              throw this.error(new TomlError("Incomplete number"));
            return this.returnNow();
          }
          parseNumberFloat() {
            return this.char === CHAR_LOWBAR
              ? this.call(this.parseNoUnder, this.parseNumberFloat)
              : isDigit(this.char)
              ? void this.consume()
              : this.char === CHAR_E || this.char === CHAR_e
              ? (this.consume(), this.next(this.parseNumberExponentSign))
              : this.returnNow(Float(this.state.buf));
          }
          parseNumberExponentSign() {
            if (isDigit(this.char)) return this.goto(this.parseNumberExponent);
            if (this.char !== CHAR_HYPHEN && this.char !== CHAR_PLUS)
              throw this.error(
                new TomlError("Unexpected character, expected -, + or digit")
              );
            this.consume(),
              this.call(this.parseNoUnder, this.parseNumberExponent);
          }
          parseNumberExponent() {
            if (!isDigit(this.char))
              return this.char === CHAR_LOWBAR
                ? this.call(this.parseNoUnder)
                : this.returnNow(Float(this.state.buf));
            this.consume();
          }
          parseNumberOrDateTime() {
            return this.char === CHAR_0
              ? (this.consume(), this.next(this.parseNumberBaseOrDateTime))
              : this.goto(this.parseNumberOrDateTimeOnly);
          }
          parseNumberOrDateTimeOnly() {
            return this.char === CHAR_LOWBAR
              ? this.call(this.parseNoUnder, this.parseNumberInteger)
              : isDigit(this.char)
              ? (this.consume(),
                void (
                  this.state.buf.length > 4 &&
                  this.next(this.parseNumberInteger)
                ))
              : this.char === CHAR_E || this.char === CHAR_e
              ? (this.consume(), this.next(this.parseNumberExponentSign))
              : this.char === CHAR_PERIOD
              ? (this.consume(),
                this.call(this.parseNoUnder, this.parseNumberFloat))
              : this.char === CHAR_HYPHEN
              ? this.goto(this.parseDateTime)
              : this.char === CHAR_COLON
              ? this.goto(this.parseOnlyTimeHour)
              : this.returnNow(Integer(this.state.buf));
          }
          parseDateTimeOnly() {
            if (this.state.buf.length < 4) {
              if (isDigit(this.char)) return this.consume();
              if (this.char === CHAR_COLON)
                return this.goto(this.parseOnlyTimeHour);
              throw this.error(
                new TomlError(
                  "Expected digit while parsing year part of a date"
                )
              );
            }
            if (this.char === CHAR_HYPHEN) return this.goto(this.parseDateTime);
            throw this.error(
              new TomlError(
                "Expected hyphen (-) while parsing year part of date"
              )
            );
          }
          parseNumberBaseOrDateTime() {
            return this.char === CHAR_b
              ? (this.consume(),
                this.call(
                  this.parseNoUnderHexOctBinLiteral,
                  this.parseIntegerBin
                ))
              : this.char === CHAR_o
              ? (this.consume(),
                this.call(
                  this.parseNoUnderHexOctBinLiteral,
                  this.parseIntegerOct
                ))
              : this.char === CHAR_x
              ? (this.consume(),
                this.call(
                  this.parseNoUnderHexOctBinLiteral,
                  this.parseIntegerHex
                ))
              : this.char === CHAR_PERIOD
              ? this.goto(this.parseNumberInteger)
              : isDigit(this.char)
              ? this.goto(this.parseDateTimeOnly)
              : this.returnNow(Integer(this.state.buf));
          }
          parseIntegerHex() {
            if (!isHexit(this.char)) {
              if (this.char === CHAR_LOWBAR)
                return this.call(this.parseNoUnderHexOctBinLiteral);
              {
                const e = Integer(this.state.buf);
                if (e.isNaN())
                  throw this.error(new TomlError("Invalid number"));
                return this.returnNow(e);
              }
            }
            this.consume();
          }
          parseIntegerOct() {
            if (!isOctit(this.char)) {
              if (this.char === CHAR_LOWBAR)
                return this.call(this.parseNoUnderHexOctBinLiteral);
              {
                const e = Integer(this.state.buf);
                if (e.isNaN())
                  throw this.error(new TomlError("Invalid number"));
                return this.returnNow(e);
              }
            }
            this.consume();
          }
          parseIntegerBin() {
            if (!isBit(this.char)) {
              if (this.char === CHAR_LOWBAR)
                return this.call(this.parseNoUnderHexOctBinLiteral);
              {
                const e = Integer(this.state.buf);
                if (e.isNaN())
                  throw this.error(new TomlError("Invalid number"));
                return this.returnNow(e);
              }
            }
            this.consume();
          }
          parseDateTime() {
            if (this.state.buf.length < 4)
              throw this.error(
                new TomlError(
                  "Years less than 1000 must be zero padded to four characters"
                )
              );
            return (
              (this.state.result = this.state.buf),
              (this.state.buf = ""),
              this.next(this.parseDateMonth)
            );
          }
          parseDateMonth() {
            if (this.char === CHAR_HYPHEN) {
              if (this.state.buf.length < 2)
                throw this.error(
                  new TomlError(
                    "Months less than 10 must be zero padded to two characters"
                  )
                );
              return (
                (this.state.result += "-" + this.state.buf),
                (this.state.buf = ""),
                this.next(this.parseDateDay)
              );
            }
            if (!isDigit(this.char))
              throw this.error(new TomlError("Incomplete datetime"));
            this.consume();
          }
          parseDateDay() {
            if (this.char === CHAR_T || this.char === CHAR_SP) {
              if (this.state.buf.length < 2)
                throw this.error(
                  new TomlError(
                    "Days less than 10 must be zero padded to two characters"
                  )
                );
              return (
                (this.state.result += "-" + this.state.buf),
                (this.state.buf = ""),
                this.next(this.parseStartTimeHour)
              );
            }
            if (this.atEndOfWord())
              return this.returnNow(
                createDate(this.state.result + "-" + this.state.buf)
              );
            if (!isDigit(this.char))
              throw this.error(new TomlError("Incomplete datetime"));
            this.consume();
          }
          parseStartTimeHour() {
            return this.atEndOfWord()
              ? this.returnNow(createDate(this.state.result))
              : this.goto(this.parseTimeHour);
          }
          parseTimeHour() {
            if (this.char === CHAR_COLON) {
              if (this.state.buf.length < 2)
                throw this.error(
                  new TomlError(
                    "Hours less than 10 must be zero padded to two characters"
                  )
                );
              return (
                (this.state.result += "T" + this.state.buf),
                (this.state.buf = ""),
                this.next(this.parseTimeMin)
              );
            }
            if (!isDigit(this.char))
              throw this.error(new TomlError("Incomplete datetime"));
            this.consume();
          }
          parseTimeMin() {
            if (!(this.state.buf.length < 2 && isDigit(this.char))) {
              if (2 === this.state.buf.length && this.char === CHAR_COLON)
                return (
                  (this.state.result += ":" + this.state.buf),
                  (this.state.buf = ""),
                  this.next(this.parseTimeSec)
                );
              throw this.error(new TomlError("Incomplete datetime"));
            }
            this.consume();
          }
          parseTimeSec() {
            if (!isDigit(this.char))
              throw this.error(new TomlError("Incomplete datetime"));
            if ((this.consume(), 2 === this.state.buf.length))
              return (
                (this.state.result += ":" + this.state.buf),
                (this.state.buf = ""),
                this.next(this.parseTimeZoneOrFraction)
              );
          }
          parseOnlyTimeHour() {
            if (this.char === CHAR_COLON) {
              if (this.state.buf.length < 2)
                throw this.error(
                  new TomlError(
                    "Hours less than 10 must be zero padded to two characters"
                  )
                );
              return (
                (this.state.result = this.state.buf),
                (this.state.buf = ""),
                this.next(this.parseOnlyTimeMin)
              );
            }
            throw this.error(new TomlError("Incomplete time"));
          }
          parseOnlyTimeMin() {
            if (!(this.state.buf.length < 2 && isDigit(this.char))) {
              if (2 === this.state.buf.length && this.char === CHAR_COLON)
                return (
                  (this.state.result += ":" + this.state.buf),
                  (this.state.buf = ""),
                  this.next(this.parseOnlyTimeSec)
                );
              throw this.error(new TomlError("Incomplete time"));
            }
            this.consume();
          }
          parseOnlyTimeSec() {
            if (!isDigit(this.char))
              throw this.error(new TomlError("Incomplete time"));
            if ((this.consume(), 2 === this.state.buf.length))
              return this.next(this.parseOnlyTimeFractionMaybe);
          }
          parseOnlyTimeFractionMaybe() {
            if (
              ((this.state.result += ":" + this.state.buf),
              this.char !== CHAR_PERIOD)
            )
              return this.return(createTime(this.state.result));
            (this.state.buf = ""), this.next(this.parseOnlyTimeFraction);
          }
          parseOnlyTimeFraction() {
            if (!isDigit(this.char)) {
              if (this.atEndOfWord()) {
                if (0 === this.state.buf.length)
                  throw this.error(
                    new TomlError("Expected digit in milliseconds")
                  );
                return this.returnNow(
                  createTime(this.state.result + "." + this.state.buf)
                );
              }
              throw this.error(
                new TomlError(
                  "Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"
                )
              );
            }
            this.consume();
          }
          parseTimeZoneOrFraction() {
            if (this.char === CHAR_PERIOD)
              this.consume(), this.next(this.parseDateTimeFraction);
            else {
              if (this.char !== CHAR_HYPHEN && this.char !== CHAR_PLUS) {
                if (this.char === CHAR_Z)
                  return (
                    this.consume(),
                    this.return(
                      createDateTime(this.state.result + this.state.buf)
                    )
                  );
                if (this.atEndOfWord())
                  return this.returnNow(
                    createDateTimeFloat(this.state.result + this.state.buf)
                  );
                throw this.error(
                  new TomlError(
                    "Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"
                  )
                );
              }
              this.consume(), this.next(this.parseTimeZoneHour);
            }
          }
          parseDateTimeFraction() {
            if (isDigit(this.char)) this.consume();
            else {
              if (1 === this.state.buf.length)
                throw this.error(
                  new TomlError("Expected digit in milliseconds")
                );
              if (this.char !== CHAR_HYPHEN && this.char !== CHAR_PLUS) {
                if (this.char === CHAR_Z)
                  return (
                    this.consume(),
                    this.return(
                      createDateTime(this.state.result + this.state.buf)
                    )
                  );
                if (this.atEndOfWord())
                  return this.returnNow(
                    createDateTimeFloat(this.state.result + this.state.buf)
                  );
                throw this.error(
                  new TomlError(
                    "Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"
                  )
                );
              }
              this.consume(), this.next(this.parseTimeZoneHour);
            }
          }
          parseTimeZoneHour() {
            if (!isDigit(this.char))
              throw this.error(
                new TomlError(
                  "Unexpected character in datetime, expected digit"
                )
              );
            if ((this.consume(), /\d\d$/.test(this.state.buf)))
              return this.next(this.parseTimeZoneSep);
          }
          parseTimeZoneSep() {
            if (this.char !== CHAR_COLON)
              throw this.error(
                new TomlError(
                  "Unexpected character in datetime, expected colon"
                )
              );
            this.consume(), this.next(this.parseTimeZoneMin);
          }
          parseTimeZoneMin() {
            if (!isDigit(this.char))
              throw this.error(
                new TomlError(
                  "Unexpected character in datetime, expected digit"
                )
              );
            if ((this.consume(), /\d\d$/.test(this.state.buf)))
              return this.return(
                createDateTime(this.state.result + this.state.buf)
              );
          }
          parseBoolean() {
            return this.char === CHAR_t
              ? (this.consume(), this.next(this.parseTrue_r))
              : this.char === CHAR_f
              ? (this.consume(), this.next(this.parseFalse_a))
              : void 0;
          }
          parseTrue_r() {
            if (this.char === CHAR_r)
              return this.consume(), this.next(this.parseTrue_u);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseTrue_u() {
            if (this.char === CHAR_u)
              return this.consume(), this.next(this.parseTrue_e);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseTrue_e() {
            if (this.char === CHAR_e) return this.return(!0);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseFalse_a() {
            if (this.char === CHAR_a)
              return this.consume(), this.next(this.parseFalse_l);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseFalse_l() {
            if (this.char === CHAR_l)
              return this.consume(), this.next(this.parseFalse_s);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseFalse_s() {
            if (this.char === CHAR_s)
              return this.consume(), this.next(this.parseFalse_e);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseFalse_e() {
            if (this.char === CHAR_e) return this.return(!1);
            throw this.error(
              new TomlError("Invalid boolean, expected true or false")
            );
          }
          parseInlineList() {
            if (
              this.char === CHAR_SP ||
              this.char === CTRL_I ||
              this.char === CTRL_M ||
              this.char === CTRL_J
            )
              return null;
            if (this.char === e.END)
              throw this.error(new TomlError("Unterminated inline array"));
            return this.char === CHAR_NUM
              ? this.call(this.parseComment)
              : this.char === CHAR_RSQB
              ? this.return(this.state.resultArr || InlineList())
              : this.callNow(this.parseValue, this.recordInlineListValue);
          }
          recordInlineListValue(e) {
            return (
              this.state.resultArr ||
                (this.state.resultArr = InlineList(tomlType(e))),
              isFloat(e) || isInteger(e)
                ? this.state.resultArr.push(e.valueOf())
                : this.state.resultArr.push(e),
              this.goto(this.parseInlineListNext)
            );
          }
          parseInlineListNext() {
            if (
              this.char === CHAR_SP ||
              this.char === CTRL_I ||
              this.char === CTRL_M ||
              this.char === CTRL_J
            )
              return null;
            if (this.char === CHAR_NUM) return this.call(this.parseComment);
            if (this.char === CHAR_COMMA)
              return this.next(this.parseInlineList);
            if (this.char === CHAR_RSQB) return this.goto(this.parseInlineList);
            throw this.error(
              new TomlError(
                "Invalid character, expected whitespace, comma (,) or close bracket (])"
              )
            );
          }
          parseInlineTable() {
            if (this.char === CHAR_SP || this.char === CTRL_I) return null;
            if (
              this.char === e.END ||
              this.char === CHAR_NUM ||
              this.char === CTRL_J ||
              this.char === CTRL_M
            )
              throw this.error(new TomlError("Unterminated inline array"));
            return this.char === CHAR_RCUB
              ? this.return(this.state.resultTable || InlineTable())
              : (this.state.resultTable ||
                  (this.state.resultTable = InlineTable()),
                this.callNow(this.parseAssign, this.recordInlineTableValue));
          }
          recordInlineTableValue(e) {
            let t = this.state.resultTable,
              r = e.key.pop();
            for (let r of e.key) {
              if (hasKey(t, r) && (!isTable(t[r]) || t[r][_declared]))
                throw this.error(new TomlError("Can't redefine existing key"));
              t = t[r] = t[r] || Table();
            }
            if (hasKey(t, r))
              throw this.error(new TomlError("Can't redefine existing key"));
            return (
              isInteger(e.value) || isFloat(e.value)
                ? (t[r] = e.value.valueOf())
                : (t[r] = e.value),
              this.goto(this.parseInlineTableNext)
            );
          }
          parseInlineTableNext() {
            if (this.char === CHAR_SP || this.char === CTRL_I) return null;
            if (
              this.char === e.END ||
              this.char === CHAR_NUM ||
              this.char === CTRL_J ||
              this.char === CTRL_M
            )
              throw this.error(new TomlError("Unterminated inline array"));
            if (this.char === CHAR_COMMA)
              return this.next(this.parseInlineTablePostComma);
            if (this.char === CHAR_RCUB)
              return this.goto(this.parseInlineTable);
            throw this.error(
              new TomlError(
                "Invalid character, expected whitespace, comma (,) or close bracket (])"
              )
            );
          }
          parseInlineTablePostComma() {
            if (this.char === CHAR_SP || this.char === CTRL_I) return null;
            if (
              this.char === e.END ||
              this.char === CHAR_NUM ||
              this.char === CTRL_J ||
              this.char === CTRL_M
            )
              throw this.error(new TomlError("Unterminated inline array"));
            if (this.char === CHAR_COMMA)
              throw this.error(
                new TomlError(
                  "Empty elements in inline tables are not permitted"
                )
              );
            if (this.char === CHAR_RCUB)
              throw this.error(
                new TomlError(
                  "Trailing commas in inline tables are not permitted"
                )
              );
            return this.goto(this.parseInlineTable);
          }
        };
      }
    }).call(exports, __webpack_require__(0));
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      void 0 === t ||
      !t.version ||
      0 === t.version.indexOf("v0.") ||
      (0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
        ? (e.exports = {
            nextTick: function (e, r, n, i) {
              if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var o,
                a,
                s = arguments.length;
              switch (s) {
                case 0:
                case 1:
                  return t.nextTick(e);
                case 2:
                  return t.nextTick(function () {
                    e.call(null, r);
                  });
                case 3:
                  return t.nextTick(function () {
                    e.call(null, r, n);
                  });
                case 4:
                  return t.nextTick(function () {
                    e.call(null, r, n, i);
                  });
                default:
                  for (o = new Array(s - 1), a = 0; a < o.length; )
                    o[a++] = arguments[a];
                  return t.nextTick(function () {
                    e.apply(null, o);
                  });
              }
            },
          })
        : (e.exports = t);
    }).call(t, r(5));
  },
  function (e, t, r) {
    var n = r(23),
      i = n.Buffer;
    function o(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function a(e, t, r) {
      return i(e, t, r);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = n)
      : (o(n, t), (t.Buffer = a)),
      o(i, a),
      (a.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return i(e, t, r);
      }),
      (a.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var n = i(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? n.fill(t, r)
              : n.fill(t)
            : n.fill(0),
          n
        );
      }),
      (a.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    (function (e) {
      var n =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        i = Function.prototype.apply;
      function o(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new o(i.call(setTimeout, n, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new o(i.call(setInterval, n, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(n, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        r(29),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }).call(t, r(0));
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e, t) => {
      for (t = String(t); t.length < e; ) t = "0" + t;
      return t;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      if (null == e.pos || null == e.line) return e;
      let r = e.message;
      if (
        ((r += ` at row ${e.line + 1}, col ${e.col + 1}, pos ${e.pos}:\n`),
        t && t.split)
      ) {
        const n = t.split(/\n/),
          i = String(Math.min(n.length, e.line + 3)).length;
        let o = " ";
        for (; o.length < i; ) o += " ";
        for (
          let t = Math.max(0, e.line - 1);
          t < Math.min(n.length, e.line + 2);
          ++t
        ) {
          let a = String(t + 1);
          if ((a.length < i && (a = " " + a), e.line === t)) {
            (r += a + "> " + n[t] + "\n"), (r += o + "  ");
            for (let t = 0; t < e.col; ++t) r += " ";
            r += "^\n";
          } else r += a + ": " + n[t] + "\n";
        }
      }
      return (e.message = r + "\n"), e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n,
      i = "object" == typeof Reflect ? Reflect : null,
      o =
        i && "function" == typeof i.apply
          ? i.apply
          : function (e, t, r) {
              return Function.prototype.apply.call(e, t, r);
            };
    n =
      i && "function" == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var a =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (e.exports.once = function (e, t) {
        return new Promise(function (r, n) {
          function i(r) {
            e.removeListener(t, o), n(r);
          }
          function o() {
            "function" == typeof e.removeListener &&
              e.removeListener("error", i),
              r([].slice.call(arguments));
          }
          m(e, t, o, { once: !0 }),
            "error" !== t &&
              (function (e, t, r) {
                "function" == typeof e.on && m(e, "error", t, r);
              })(e, i, { once: !0 });
        });
      }),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var l = 10;
    function c(e) {
      if ("function" != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function u(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function f(e, t, r, n) {
      var i, o, a;
      if (
        (c(r),
        void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit("newListener", t, r.listener ? r.listener : r),
              (o = e._events)),
            (a = o[t])),
        void 0 === a)
      )
        (a = o[t] = r), ++e._eventsCount;
      else if (
        ("function" == typeof a
          ? (a = o[t] = n ? [r, a] : [a, r])
          : n
          ? a.unshift(r)
          : a.push(r),
        (i = u(e)) > 0 && a.length > i && !a.warned)
      ) {
        a.warned = !0;
        var s = new Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (s.name = "MaxListenersExceededWarning"),
          (s.emitter = e),
          (s.type = t),
          (s.count = a.length),
          (function (e) {
            console && console.warn && console.warn(e);
          })(s);
      }
      return e;
    }
    function h(e, t, r) {
      var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
        i = function () {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }.bind(n);
      return (i.listener = r), (n.wrapFn = i), i;
    }
    function d(e, t, r) {
      var n = e._events;
      if (void 0 === n) return [];
      var i = n[t];
      return void 0 === i
        ? []
        : "function" == typeof i
        ? r
          ? [i.listener || i]
          : [i]
        : r
        ? (function (e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
              t[r] = e[r].listener || e[r];
            return t;
          })(i)
        : g(i, i.length);
    }
    function p(e) {
      var t = this._events;
      if (void 0 !== t) {
        var r = t[e];
        if ("function" == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }
      return 0;
    }
    function g(e, t) {
      for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
      return r;
    }
    function m(e, t, r, n) {
      if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
      else {
        if ("function" != typeof e.addEventListener)
          throw new TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
        e.addEventListener(t, function i(o) {
          n.once && e.removeEventListener(t, i), r(o);
        });
      }
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return l;
      },
      set: function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        l = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return u(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var n = "error" === e,
          i = this._events;
        if (void 0 !== i) n = n && void 0 === i.error;
        else if (!n) return !1;
        if (n) {
          var a;
          if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
          var s = new Error(
            "Unhandled error." + (a ? " (" + a.message + ")" : "")
          );
          throw ((s.context = a), s);
        }
        var l = i[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) o(l, this, t);
        else {
          var c = l.length,
            u = g(l, c);
          for (r = 0; r < c; ++r) o(u[r], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return f(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return f(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        return c(t), this.on(e, h(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        return c(t), this.prependListener(e, h(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var r, n, i, o, a;
        if ((c(t), void 0 === (n = this._events))) return this;
        if (void 0 === (r = n[e])) return this;
        if (r === t || r.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete n[e],
              n.removeListener &&
                this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
          for (i = -1, o = r.length - 1; o >= 0; o--)
            if (r[o] === t || r[o].listener === t) {
              (a = r[o].listener), (i = o);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? r.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(r, i),
            1 === r.length && (n[e] = r[0]),
            void 0 !== n.removeListener &&
              this.emit("removeListener", e, a || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, r, n;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== r[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete r[e]),
            this
          );
        if (0 === arguments.length) {
          var i,
            o = Object.keys(r);
          for (n = 0; n < o.length; ++n)
            "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return d(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return d(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : p.call(e, t);
      }),
      (s.prototype.listenerCount = p),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : [];
      });
  },
  function (e, t, r) {
    ((t = e.exports = r(20)).Stream = t),
      (t.Readable = t),
      (t.Writable = r(16)),
      (t.Duplex = r(2)),
      (t.Transform = r(26)),
      (t.PassThrough = r(65));
  },
  function (e, t, r) {
    "use strict";
    (function (t, n, i) {
      var o = r(9);
      function a(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, r) {
              var n = e.entry;
              e.entry = null;
              for (; n; ) {
                var i = n.callback;
                t.pendingcb--, i(r), (n = n.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      e.exports = y;
      var s,
        l =
          !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
            ? n
            : o.nextTick;
      y.WritableState = v;
      var c = Object.create(r(4));
      c.inherits = r(3);
      var u = { deprecate: r(64) },
        f = r(22),
        h = r(10).Buffer,
        d =
          (void 0 !== i
            ? i
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      var p,
        g = r(24);
      function m() {}
      function v(e, t) {
        (s = s || r(2)), (e = e || {});
        var n = t instanceof s;
        (this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var i = e.highWaterMark,
          c = e.writableHighWaterMark,
          u = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : u),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var f = !1 === e.decodeStrings;
        (this.decodeStrings = !f),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var r = e._writableState,
                n = r.sync,
                i = r.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(r),
                t)
              )
                !(function (e, t, r, n, i) {
                  --t.pendingcb,
                    r
                      ? (o.nextTick(i, n),
                        o.nextTick(S, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", n))
                      : (i(n),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", n),
                        S(e, t));
                })(e, r, n, t, i);
              else {
                var a = C(r);
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  x(e, r),
                  n ? l(w, e, r, a, i) : w(e, r, a, i);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function y(e) {
        if (((s = s || r(2)), !(p.call(y, this) || this instanceof s)))
          return new y(e);
        (this._writableState = new v(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          f.call(this);
      }
      function b(e, t, r, n, i, o, a) {
        (t.writelen = n),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function w(e, t, r, n) {
        r ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          n(),
          S(e, t);
      }
      function x(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
            i = new Array(n),
            o = t.corkedRequestsFree;
          o.entry = r;
          for (var s = 0, l = !0; r; )
            (i[s] = r), r.isBuf || (l = !1), (r = r.next), (s += 1);
          (i.allBuffers = l),
            b(e, t, !0, t.length, i, "", o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new a(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var c = r.chunk,
              u = r.encoding,
              f = r.callback;
            if (
              (b(e, t, !1, t.objectMode ? 1 : c.length, c, u, f),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === r && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = r), (t.bufferProcessing = !1);
      }
      function C(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function _(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && e.emit("error", r),
            (t.prefinished = !0),
            e.emit("prefinish"),
            S(e, t);
        });
      }
      function S(e, t) {
        var r = C(t);
        return (
          r &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(_, e, t))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          r
        );
      }
      c.inherits(y, f),
        (v.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(v.prototype, "buffer", {
              get: u.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(y, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!p.call(this, e) ||
                  (this === y && e && e._writableState instanceof v)
                );
              },
            }))
          : (p = function (e) {
              return e instanceof this;
            }),
        (y.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (y.prototype.write = function (e, t, r) {
          var n = this._writableState,
            i = !1,
            a =
              !n.objectMode &&
              (function (e) {
                return h.isBuffer(e) || e instanceof d;
              })(e);
          return (
            a &&
              !h.isBuffer(e) &&
              (e = (function (e) {
                return h.from(e);
              })(e)),
            "function" == typeof t && ((r = t), (t = null)),
            a ? (t = "buffer") : t || (t = n.defaultEncoding),
            "function" != typeof r && (r = m),
            n.ended
              ? (function (e, t) {
                  var r = new Error("write after end");
                  e.emit("error", r), o.nextTick(t, r);
                })(this, r)
              : (a ||
                  (function (e, t, r, n) {
                    var i = !0,
                      a = !1;
                    return (
                      null === r
                        ? (a = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof r ||
                          void 0 === r ||
                          t.objectMode ||
                          (a = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      a && (e.emit("error", a), o.nextTick(n, a), (i = !1)),
                      i
                    );
                  })(this, n, e, r)) &&
                (n.pendingcb++,
                (i = (function (e, t, r, n, i, o) {
                  if (!r) {
                    var a = (function (e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = h.from(t, r));
                      return t;
                    })(t, n, i);
                    n !== a && ((r = !0), (i = "buffer"), (n = a));
                  }
                  var s = t.objectMode ? 1 : n.length;
                  t.length += s;
                  var l = t.length < t.highWaterMark;
                  l || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      c
                        ? (c.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else b(e, t, !1, s, n, i, o);
                  return l;
                })(this, n, a, e, t, r))),
            i
          );
        }),
        (y.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (y.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              x(this, e));
        }),
        (y.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(y.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (y.prototype._write = function (e, t, r) {
          r(new Error("_write() is not implemented"));
        }),
        (y.prototype._writev = null),
        (y.prototype.end = function (e, t, r) {
          var n = this._writableState;
          "function" == typeof e
            ? ((r = e), (e = null), (t = null))
            : "function" == typeof t && ((r = t), (t = null)),
            null !== e && void 0 !== e && this.write(e, t),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function (e, t, r) {
                (t.ending = !0),
                  S(e, t),
                  r && (t.finished ? o.nextTick(r) : e.once("finish", r));
                (t.ended = !0), (e.writable = !1);
              })(this, n, r);
        }),
        Object.defineProperty(y.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (y.prototype.destroy = g.destroy),
        (y.prototype._undestroy = g.undestroy),
        (y.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    }).call(t, r(5), r(11).setImmediate, r(0));
  },
  function (e, t, r) {
    "use strict";
    var n = r(35),
      i = (r.n(n), r(36)),
      o = (r.n(i), r(38)),
      a = (r.n(o), r(39)),
      s = (r.n(a), r(41)),
      l = (r.n(s), r(42)),
      c = (r.n(l), r(43)),
      u = (r.n(c), r(44)),
      f = (r.n(u), r(18)),
      h = (r.n(f), r(45)),
      d = (r.n(h), r(19)),
      p = (r.n(d), r(47)),
      g = (r.n(p), r(48)),
      m = (r.n(g), r(8));
    r.n(m);
    t.a = {
      components: { codemirror: n.codemirror },
      name: "app",
      data: () => ({
        code: "",
        err: "",
        line: 0,
        column: 0,
        valid: "",
        cminstance: null,
        cmOptions: {
          autoCloseBrackets: !0,
          tabSize: 4,
          lineNumbers: !0,
          line: !0,
          mode: "toml",
          theme: "base16-light",
          readOnly: !1,
        },
      }),
      methods: {
        highlight_error: function () {
          this.cminstance.addLineClass(
            this.line - 1,
            "background",
            "line-error"
          ),
            this.cminstance.setCursor(this.line - 1);
        },
        remove_highlight: function () {
          0 !== this.line &&
            this.cminstance.removeLineClass(
              this.line - 1,
              "background",
              "line-error"
            );
        },
        validate: function () {
          try {
            g.parse(this.code);
            (this.valid = "Valid TOML"),
              (this.err = ""),
              this.remove_highlight();
          } catch (e) {
            "TomlError" === e.constructor.name &&
              ((this.err = e.message),
              this.remove_highlight(),
              (this.line = e.line),
              (this.column = e.column),
              this.highlight_error(),
              (this.valid = ""));
          }
        },
        clear: function () {
          (this.code = ""),
            (this.err = ""),
            (this.valid = ""),
            this.remove_highlight();
        },
        onCmReady(e) {
          this.cminstance = e;
        },
      },
    };
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      function t(t, r, n) {
        var i,
          o = t.getWrapperElement();
        return (
          ((i = o.appendChild(document.createElement("div"))).className = n
            ? "CodeMirror-dialog CodeMirror-dialog-bottom"
            : "CodeMirror-dialog CodeMirror-dialog-top"),
          "string" == typeof r ? (i.innerHTML = r) : i.appendChild(r),
          e.addClass(o, "dialog-opened"),
          i
        );
      }
      function r(e, t) {
        e.state.currentNotificationClose && e.state.currentNotificationClose(),
          (e.state.currentNotificationClose = t);
      }
      e.defineExtension("openDialog", function (n, i, o) {
        o || (o = {}), r(this, null);
        var a = t(this, n, o.bottom),
          s = !1,
          l = this;
        function c(t) {
          if ("string" == typeof t) f.value = t;
          else {
            if (s) return;
            (s = !0),
              e.rmClass(a.parentNode, "dialog-opened"),
              a.parentNode.removeChild(a),
              l.focus(),
              o.onClose && o.onClose(a);
          }
        }
        var u,
          f = a.getElementsByTagName("input")[0];
        return (
          f
            ? (f.focus(),
              o.value &&
                ((f.value = o.value), !1 !== o.selectValueOnOpen && f.select()),
              o.onInput &&
                e.on(f, "input", function (e) {
                  o.onInput(e, f.value, c);
                }),
              o.onKeyUp &&
                e.on(f, "keyup", function (e) {
                  o.onKeyUp(e, f.value, c);
                }),
              e.on(f, "keydown", function (t) {
                (o && o.onKeyDown && o.onKeyDown(t, f.value, c)) ||
                  ((27 == t.keyCode ||
                    (!1 !== o.closeOnEnter && 13 == t.keyCode)) &&
                    (f.blur(), e.e_stop(t), c()),
                  13 == t.keyCode && i(f.value, t));
              }),
              !1 !== o.closeOnBlur &&
                e.on(a, "focusout", function (e) {
                  null !== e.relatedTarget && c();
                }))
            : (u = a.getElementsByTagName("button")[0]) &&
              (e.on(u, "click", function () {
                c(), l.focus();
              }),
              !1 !== o.closeOnBlur && e.on(u, "blur", c),
              u.focus()),
          c
        );
      }),
        e.defineExtension("openConfirm", function (n, i, o) {
          r(this, null);
          var a = t(this, n, o && o.bottom),
            s = a.getElementsByTagName("button"),
            l = !1,
            c = this,
            u = 1;
          function f() {
            l ||
              ((l = !0),
              e.rmClass(a.parentNode, "dialog-opened"),
              a.parentNode.removeChild(a),
              c.focus());
          }
          s[0].focus();
          for (var h = 0; h < s.length; ++h) {
            var d = s[h];
            !(function (t) {
              e.on(d, "click", function (r) {
                e.e_preventDefault(r), f(), t && t(c);
              });
            })(i[h]),
              e.on(d, "blur", function () {
                --u,
                  setTimeout(function () {
                    u <= 0 && f();
                  }, 200);
              }),
              e.on(d, "focus", function () {
                ++u;
              });
          }
        }),
        e.defineExtension("openNotification", function (n, i) {
          r(this, c);
          var o,
            a = t(this, n, i && i.bottom),
            s = !1,
            l = i && void 0 !== i.duration ? i.duration : 5e3;
          function c() {
            s ||
              ((s = !0),
              clearTimeout(o),
              e.rmClass(a.parentNode, "dialog-opened"),
              a.parentNode.removeChild(a));
          }
          return (
            e.on(a, "click", function (t) {
              e.e_preventDefault(t), c();
            }),
            l && (o = setTimeout(c, l)),
            c
          );
        });
    });
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      "use strict";
      var t,
        r,
        n = e.Pos;
      function i(e, t) {
        for (
          var r = (function (e) {
              var t = e.flags;
              return null != t
                ? t
                : (e.ignoreCase ? "i" : "") +
                    (e.global ? "g" : "") +
                    (e.multiline ? "m" : "");
            })(e),
            n = r,
            i = 0;
          i < t.length;
          i++
        )
          -1 == n.indexOf(t.charAt(i)) && (n += t.charAt(i));
        return r == n ? e : new RegExp(e.source, n);
      }
      function o(e) {
        return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
      }
      function a(e, t, r) {
        t = i(t, "g");
        for (var o = r.line, a = r.ch, s = e.lastLine(); o <= s; o++, a = 0) {
          t.lastIndex = a;
          var l = e.getLine(o),
            c = t.exec(l);
          if (c)
            return {
              from: n(o, c.index),
              to: n(o, c.index + c[0].length),
              match: c,
            };
        }
      }
      function s(e, t, r) {
        for (var n, i = 0; i <= e.length; ) {
          t.lastIndex = i;
          var o = t.exec(e);
          if (!o) break;
          var a = o.index + o[0].length;
          if (a > e.length - r) break;
          (!n || a > n.index + n[0].length) && (n = o), (i = o.index + 1);
        }
        return n;
      }
      function l(e, t, r) {
        t = i(t, "g");
        for (var o = r.line, a = r.ch, l = e.firstLine(); o >= l; o--, a = -1) {
          var c = e.getLine(o),
            u = s(c, t, a < 0 ? 0 : c.length - a);
          if (u)
            return {
              from: n(o, u.index),
              to: n(o, u.index + u[0].length),
              match: u,
            };
        }
      }
      function c(e, t, r, n) {
        if (e.length == t.length) return r;
        for (var i = 0, o = r + Math.max(0, e.length - t.length); ; ) {
          if (i == o) return i;
          var a = (i + o) >> 1,
            s = n(e.slice(0, a)).length;
          if (s == r) return a;
          s > r ? (o = a) : (i = a + 1);
        }
      }
      function u(e, u, f, h) {
        var d;
        (this.atOccurrence = !1),
          (this.afterEmptyMatch = !1),
          (this.doc = e),
          (f = f ? e.clipPos(f) : n(0, 0)),
          (this.pos = { from: f, to: f }),
          "object" == typeof h ? (d = h.caseFold) : ((d = h), (h = null)),
          "string" == typeof u
            ? (null == d && (d = !1),
              (this.matches = function (i, o) {
                return (
                  i
                    ? function (e, i, o, a) {
                        if (!i.length) return null;
                        var s = a ? t : r,
                          l = s(i).split(/\r|\n\r?/);
                        e: for (
                          var u = o.line,
                            f = o.ch,
                            h = e.firstLine() - 1 + l.length;
                          u >= h;
                          u--, f = -1
                        ) {
                          var d = e.getLine(u);
                          f > -1 && (d = d.slice(0, f));
                          var p = s(d);
                          if (1 == l.length) {
                            var g = p.lastIndexOf(l[0]);
                            if (-1 == g) continue e;
                            return {
                              from: n(u, c(d, p, g, s)),
                              to: n(u, c(d, p, g + l[0].length, s)),
                            };
                          }
                          var m = l[l.length - 1];
                          if (p.slice(0, m.length) == m) {
                            var v = 1;
                            for (o = u - l.length + 1; v < l.length - 1; v++)
                              if (s(e.getLine(o + v)) != l[v]) continue e;
                            var y = e.getLine(u + 1 - l.length),
                              b = s(y);
                            if (b.slice(b.length - l[0].length) == l[0])
                              return {
                                from: n(
                                  u + 1 - l.length,
                                  c(y, b, y.length - l[0].length, s)
                                ),
                                to: n(u, c(d, p, m.length, s)),
                              };
                          }
                        }
                      }
                    : function (e, i, o, a) {
                        if (!i.length) return null;
                        var s = a ? t : r,
                          l = s(i).split(/\r|\n\r?/);
                        e: for (
                          var u = o.line,
                            f = o.ch,
                            h = e.lastLine() + 1 - l.length;
                          u <= h;
                          u++, f = 0
                        ) {
                          var d = e.getLine(u).slice(f),
                            p = s(d);
                          if (1 == l.length) {
                            var g = p.indexOf(l[0]);
                            if (-1 == g) continue e;
                            return (
                              (o = c(d, p, g, s) + f),
                              {
                                from: n(u, c(d, p, g, s) + f),
                                to: n(u, c(d, p, g + l[0].length, s) + f),
                              }
                            );
                          }
                          var m = p.length - l[0].length;
                          if (p.slice(m) == l[0]) {
                            for (var v = 1; v < l.length - 1; v++)
                              if (s(e.getLine(u + v)) != l[v]) continue e;
                            var y = e.getLine(u + l.length - 1),
                              b = s(y),
                              w = l[l.length - 1];
                            if (b.slice(0, w.length) == w)
                              return {
                                from: n(u, c(d, p, m, s) + f),
                                to: n(u + l.length - 1, c(y, b, w.length, s)),
                              };
                          }
                        }
                      }
                )(e, u, o, d);
              }))
            : ((u = i(u, "gm")),
              h && !1 === h.multiline
                ? (this.matches = function (t, r) {
                    return (t ? l : a)(e, u, r);
                  })
                : (this.matches = function (t, r) {
                    return (
                      t
                        ? function (e, t, r) {
                            if (!o(t)) return l(e, t, r);
                            t = i(t, "gm");
                            for (
                              var a,
                                c = 1,
                                u = e.getLine(r.line).length - r.ch,
                                f = r.line,
                                h = e.firstLine();
                              f >= h;

                            ) {
                              for (var d = 0; d < c && f >= h; d++) {
                                var p = e.getLine(f--);
                                a = null == a ? p : p + "\n" + a;
                              }
                              c *= 2;
                              var g = s(a, t, u);
                              if (g) {
                                var m = a.slice(0, g.index).split("\n"),
                                  v = g[0].split("\n"),
                                  y = f + m.length,
                                  b = m[m.length - 1].length;
                                return {
                                  from: n(y, b),
                                  to: n(
                                    y + v.length - 1,
                                    1 == v.length
                                      ? b + v[0].length
                                      : v[v.length - 1].length
                                  ),
                                  match: g,
                                };
                              }
                            }
                          }
                        : function (e, t, r) {
                            if (!o(t)) return a(e, t, r);
                            t = i(t, "gm");
                            for (
                              var s, l = 1, c = r.line, u = e.lastLine();
                              c <= u;

                            ) {
                              for (var f = 0; f < l && !(c > u); f++) {
                                var h = e.getLine(c++);
                                s = null == s ? h : s + "\n" + h;
                              }
                              (l *= 2), (t.lastIndex = r.ch);
                              var d = t.exec(s);
                              if (d) {
                                var p = s.slice(0, d.index).split("\n"),
                                  g = d[0].split("\n"),
                                  m = r.line + p.length - 1,
                                  v = p[p.length - 1].length;
                                return {
                                  from: n(m, v),
                                  to: n(
                                    m + g.length - 1,
                                    1 == g.length
                                      ? v + g[0].length
                                      : g[g.length - 1].length
                                  ),
                                  match: d,
                                };
                              }
                            }
                          }
                    )(e, u, r);
                  }));
      }
      String.prototype.normalize
        ? ((t = function (e) {
            return e.normalize("NFD").toLowerCase();
          }),
          (r = function (e) {
            return e.normalize("NFD");
          }))
        : ((t = function (e) {
            return e.toLowerCase();
          }),
          (r = function (e) {
            return e;
          })),
        (u.prototype = {
          findNext: function () {
            return this.find(!1);
          },
          findPrevious: function () {
            return this.find(!0);
          },
          find: function (t) {
            var r = this.doc.clipPos(t ? this.pos.from : this.pos.to);
            if (
              this.afterEmptyMatch &&
              this.atOccurrence &&
              ((r = n(r.line, r.ch)),
              t
                ? (r.ch--,
                  r.ch < 0 &&
                    (r.line--,
                    (r.ch = (this.doc.getLine(r.line) || "").length)))
                : (r.ch++,
                  r.ch > (this.doc.getLine(r.line) || "").length &&
                    ((r.ch = 0), r.line++)),
              0 != e.cmpPos(r, this.doc.clipPos(r)))
            )
              return (this.atOccurrence = !1);
            var i = this.matches(t, r);
            if (((this.afterEmptyMatch = i && 0 == e.cmpPos(i.from, i.to)), i))
              return (
                (this.pos = i), (this.atOccurrence = !0), this.pos.match || !0
              );
            var o = n(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
            return (this.pos = { from: o, to: o }), (this.atOccurrence = !1);
          },
          from: function () {
            if (this.atOccurrence) return this.pos.from;
          },
          to: function () {
            if (this.atOccurrence) return this.pos.to;
          },
          replace: function (t, r) {
            if (this.atOccurrence) {
              var i = e.splitLines(t);
              this.doc.replaceRange(i, this.pos.from, this.pos.to, r),
                (this.pos.to = n(
                  this.pos.from.line + i.length - 1,
                  i[i.length - 1].length +
                    (1 == i.length ? this.pos.from.ch : 0)
                ));
            }
          },
        }),
        e.defineExtension("getSearchCursor", function (e, t, r) {
          return new u(this.doc, e, t, r);
        }),
        e.defineDocExtension("getSearchCursor", function (e, t, r) {
          return new u(this, e, t, r);
        }),
        e.defineExtension("selectMatches", function (t, r) {
          for (
            var n = [], i = this.getSearchCursor(t, this.getCursor("from"), r);
            i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);

          )
            n.push({ anchor: i.from(), head: i.to() });
          n.length && this.setSelections(n, 0);
        });
    });
  },
  function (e, t, r) {
    "use strict";
    (function (t, n) {
      var i = r(9);
      e.exports = b;
      var o,
        a = r(21);
      b.ReadableState = y;
      r(14).EventEmitter;
      var s = function (e, t) {
          return e.listeners(t).length;
        },
        l = r(22),
        c = r(10).Buffer,
        u =
          (void 0 !== t
            ? t
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      var f = Object.create(r(4));
      f.inherits = r(3);
      var h = r(61),
        d = void 0;
      d = h && h.debuglog ? h.debuglog("stream") : function () {};
      var p,
        g = r(62),
        m = r(24);
      f.inherits(b, l);
      var v = ["error", "close", "destroy", "pause", "resume"];
      function y(e, t) {
        (o = o || r(2)), (e = e || {});
        var n = t instanceof o;
        (this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var i = e.highWaterMark,
          a = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new g()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (p || (p = r(25).StringDecoder),
            (this.decoder = new p(e.encoding)),
            (this.encoding = e.encoding));
      }
      function b(e) {
        if (((o = o || r(2)), !(this instanceof b))) return new b(e);
        (this._readableState = new y(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          l.call(this);
      }
      function w(e, t, r, n, i) {
        var o,
          a = e._readableState;
        null === t
          ? ((a.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var r = t.decoder.end();
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
              }
              (t.ended = !0), S(e);
            })(e, a))
          : (i ||
              (o = (function (e, t) {
                var r;
                (function (e) {
                  return c.isBuffer(e) || e instanceof u;
                })(t) ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (r = new TypeError("Invalid non-string/buffer chunk"));
                return r;
              })(a, t)),
            o
              ? e.emit("error", o)
              : a.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  a.objectMode ||
                  Object.getPrototypeOf(t) === c.prototype ||
                  (t = (function (e) {
                    return c.from(e);
                  })(t)),
                n
                  ? a.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : x(e, a, t, !0)
                  : a.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((a.reading = !1),
                    a.decoder && !r
                      ? ((t = a.decoder.write(t)),
                        a.objectMode || 0 !== t.length
                          ? x(e, a, t, !1)
                          : k(e, a))
                      : x(e, a, t, !1)))
              : n || (a.reading = !1));
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(a);
      }
      function x(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", r), e.read(0))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && S(e)),
          k(e, t);
      }
      Object.defineProperty(b.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (b.prototype.destroy = m.destroy),
        (b.prototype._undestroy = m.undestroy),
        (b.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (b.prototype.push = function (e, t) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = c.from(e, t)), (t = "")),
                (r = !0)),
            w(this, e, t, !1, r)
          );
        }),
        (b.prototype.unshift = function (e) {
          return w(this, e, null, !0, !1);
        }),
        (b.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (b.prototype.setEncoding = function (e) {
          return (
            p || (p = r(25).StringDecoder),
            (this._readableState.decoder = new p(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      var C = 8388608;
      function _(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= C
                    ? (e = C)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function S(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (d("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? i.nextTick(T, e) : T(e));
      }
      function T(e) {
        d("emit readable"), e.emit("readable"), O(e);
      }
      function k(e, t) {
        t.readingMore || ((t.readingMore = !0), i.nextTick(L, e, t));
      }
      function L(e, t) {
        for (
          var r = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (d("maybeReadMore read 0"), e.read(0), r !== t.length);

        )
          r = t.length;
        t.readingMore = !1;
      }
      function A(e) {
        d("readable nexttick read 0"), e.read(0);
      }
      function M(e, t) {
        t.reading || (d("resume read 0"), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit("resume"),
          O(e),
          t.flowing && !t.reading && e.read(0);
      }
      function O(e) {
        var t = e._readableState;
        for (d("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function E(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = (function (e, t, r) {
                  var n;
                  e < t.head.data.length
                    ? ((n = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (n =
                        e === t.head.data.length
                          ? t.shift()
                          : r
                          ? (function (e, t) {
                              var r = t.head,
                                n = 1,
                                i = r.data;
                              e -= i.length;
                              for (; (r = r.next); ) {
                                var o = r.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (a === o.length
                                    ? (i += o)
                                    : (i += o.slice(0, e)),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++n,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = o.slice(a)));
                                  break;
                                }
                                ++n;
                              }
                              return (t.length -= n), i;
                            })(e, t)
                          : (function (e, t) {
                              var r = c.allocUnsafe(e),
                                n = t.head,
                                i = 1;
                              n.data.copy(r), (e -= n.data.length);
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (o.copy(r, r.length - e, 0, a),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++i,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(a)));
                                  break;
                                }
                                ++i;
                              }
                              return (t.length -= i), r;
                            })(e, t));
                  return n;
                })(e, t.buffer, t.decoder)),
            r);
        var r;
      }
      function R(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), i.nextTick(N, t, e));
      }
      function N(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function I(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      }
      (b.prototype.read = function (e) {
        d("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          r = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            d("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? R(this) : S(this),
            null
          );
        if (0 === (e = _(e, t)) && t.ended)
          return 0 === t.length && R(this), null;
        var n,
          i = t.needReadable;
        return (
          d("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            d("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? d("reading or ended", (i = !1))
            : i &&
              (d("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = _(r, t))),
          null === (n = e > 0 ? E(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), r !== e && t.ended && R(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (b.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (b.prototype.pipe = function (e, t) {
          var r = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          (o.pipesCount += 1), d("pipe count=%d opts=%j", o.pipesCount, t);
          var l =
            (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : b;
          function c(t, n) {
            d("onunpipe"),
              t === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                d("cleanup"),
                e.removeListener("close", v),
                e.removeListener("finish", y),
                e.removeListener("drain", f),
                e.removeListener("error", m),
                e.removeListener("unpipe", c),
                r.removeListener("end", u),
                r.removeListener("end", b),
                r.removeListener("data", g),
                (h = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  f());
          }
          function u() {
            d("onend"), e.end();
          }
          o.endEmitted ? i.nextTick(l) : r.once("end", l), e.on("unpipe", c);
          var f = (function (e) {
            return function () {
              var t = e._readableState;
              d("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, "data") && ((t.flowing = !0), O(e));
            };
          })(r);
          e.on("drain", f);
          var h = !1;
          var p = !1;
          function g(t) {
            d("ondata"),
              (p = !1),
              !1 !== e.write(t) ||
                p ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== I(o.pipes, e))) &&
                  !h &&
                  (d("false write response, pause", o.awaitDrain),
                  o.awaitDrain++,
                  (p = !0)),
                r.pause());
          }
          function m(t) {
            d("onerror", t),
              b(),
              e.removeListener("error", m),
              0 === s(e, "error") && e.emit("error", t);
          }
          function v() {
            e.removeListener("finish", y), b();
          }
          function y() {
            d("onfinish"), e.removeListener("close", v), b();
          }
          function b() {
            d("unpipe"), r.unpipe(e);
          }
          return (
            r.on("data", g),
            (function (e, t, r) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, r);
              e._events && e._events[t]
                ? a(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r);
            })(e, "error", m),
            e.once("close", v),
            e.once("finish", y),
            e.emit("pipe", r),
            o.flowing || (d("pipe resume"), r.resume()),
            e
          );
        }),
        (b.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return e && e !== t.pipes
              ? this
              : (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, r),
                this);
          if (!e) {
            var n = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++)
              n[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = I(t.pipes, e);
          return -1 === a
            ? this
            : (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, r),
              this);
        }),
        (b.prototype.on = function (e, t) {
          var r = l.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var n = this._readableState;
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && S(this) : i.nextTick(A, this));
          }
          return r;
        }),
        (b.prototype.addListener = b.prototype.on),
        (b.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (d("resume"),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), i.nextTick(M, e, t));
              })(this, e)),
            this
          );
        }),
        (b.prototype.pause = function () {
          return (
            d("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (d("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (b.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1;
          for (var i in (e.on("end", function () {
            if ((d("wrapped end"), r.decoder && !r.ended)) {
              var e = r.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (d("wrapped data"),
            r.decoder && (i = r.decoder.write(i)),
            !r.objectMode || (null !== i && void 0 !== i)) &&
              (r.objectMode || (i && i.length)) &&
              (t.push(i) || ((n = !0), e.pause()));
          }),
          e))
            void 0 === this[i] &&
              "function" == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < v.length; o++)
            e.on(v[o], this.emit.bind(this, v[o]));
          return (
            (this._read = function (t) {
              d("wrapped _read", t), n && ((n = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(b.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (b._fromList = E);
    }).call(t, r(0), r(5));
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t, r) {
    e.exports = r(14).EventEmitter;
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(59),
        i = r(60),
        o = r(21);
      function a() {
        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (a() < t) throw new RangeError("Invalid typed array length");
        return (
          l.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
            : (null === e && (e = new l(t)), (e.length = t)),
          e
        );
      }
      function l(e, t, r) {
        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
          return new l(e, t, r);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return f(this, e);
        }
        return c(this, e, t, r);
      }
      function c(e, t, r, n) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, n) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === r && void 0 === n
                  ? new Uint8Array(t)
                  : void 0 === n
                  ? new Uint8Array(t, r)
                  : new Uint8Array(t, r, n);
              l.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = l.prototype)
                : (e = h(e, t));
              return e;
            })(e, t, r, n)
          : "string" == typeof t
          ? (function (e, t, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!l.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | p(t, r),
                i = (e = s(e, n)).write(t, r);
              i !== n && (e = e.slice(0, i));
              return e;
            })(e, t, r)
          : (function (e, t) {
              if (l.isBuffer(t)) {
                var r = 0 | d(t.length);
                return 0 === (e = s(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length ||
                    (function (e) {
                      return e != e;
                    })(t.length)
                    ? s(e, 0)
                    : h(e, t);
                if ("Buffer" === t.type && o(t.data)) return h(e, t.data);
              }
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function f(e, t) {
        if ((u(t), (e = s(e, t < 0 ? 0 : 0 | d(t))), !l.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function h(e, t) {
        var r = t.length < 0 ? 0 : 0 | d(t.length);
        e = s(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function d(e) {
        if (e >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function p(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return F(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return U(e).length;
            default:
              if (n) return F(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function g(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function m(e, t, r, n, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, n, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            l.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : v(e, [t], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(e, t, r, n, i) {
        var o,
          a = 1,
          s = e.length,
          l = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (s /= 2), (l /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var u = -1;
          for (o = r; o < s; o++)
            if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
              if ((-1 === u && (u = o), o - u + 1 === l)) return u * a;
            } else -1 !== u && (o -= o - u), (u = -1);
        } else
          for (r + l > s && (r = s - l), o = r; o >= 0; o--) {
            for (var f = !0, h = 0; h < l; h++)
              if (c(e, o + h) !== c(t, h)) {
                f = !1;
                break;
              }
            if (f) return o;
          }
        return -1;
      }
      function y(e, t, r, n) {
        r = Number(r) || 0;
        var i = e.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        n > o / 2 && (n = o / 2);
        for (var a = 0; a < n; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[r + a] = s;
        }
        return a;
      }
      function b(e, t, r, n) {
        return j(F(t, e.length - r), e, r, n);
      }
      function w(e, t, r, n) {
        return j(
          (function (e) {
            for (var t = [], r = 0; r < e.length; ++r)
              t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n
        );
      }
      function x(e, t, r, n) {
        return w(e, t, r, n);
      }
      function C(e, t, r, n) {
        return j(U(t), e, r, n);
      }
      function _(e, t, r, n) {
        return j(
          (function (e, t) {
            for (
              var r, n, i, o = [], a = 0;
              a < e.length && !((t -= 2) < 0);
              ++a
            )
              (r = e.charCodeAt(a)),
                (n = r >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n);
            return o;
          })(t, e.length - r),
          e,
          r,
          n
        );
      }
      function S(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r));
      }
      function T(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], i = t; i < r; ) {
          var o,
            a,
            s,
            l,
            c = e[i],
            u = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (i + f <= r)
            switch (f) {
              case 1:
                c < 128 && (u = c);
                break;
              case 2:
                128 == (192 & (o = e[i + 1])) &&
                  (l = ((31 & c) << 6) | (63 & o)) > 127 &&
                  (u = l);
                break;
              case 3:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    (l = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (u = l);
                break;
              case 4:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  (s = e[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (l =
                      ((15 & c) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    l < 1114112 &&
                    (u = l);
            }
          null === u
            ? ((u = 65533), (f = 1))
            : u > 65535 &&
              ((u -= 65536),
              n.push(((u >>> 10) & 1023) | 55296),
              (u = 56320 | (1023 & u))),
            n.push(u),
            (i += f);
        }
        return (function (e) {
          var t = e.length;
          if (t <= k) return String.fromCharCode.apply(String, e);
          var r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += k)));
          return r;
        })(n);
      }
      (t.Buffer = l),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return l.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (l.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = a()),
        (l.poolSize = 8192),
        (l._augment = function (e) {
          return (e.__proto__ = l.prototype), e;
        }),
        (l.from = function (e, t, r) {
          return c(null, e, t, r);
        }),
        l.TYPED_ARRAY_SUPPORT &&
          ((l.prototype.__proto__ = Uint8Array.prototype),
          (l.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            l[Symbol.species] === l &&
            Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (l.alloc = function (e, t, r) {
          return (function (e, t, r, n) {
            return (
              u(t),
              t <= 0
                ? s(e, t)
                : void 0 !== r
                ? "string" == typeof n
                  ? s(e, t).fill(r, n)
                  : s(e, t).fill(r)
                : s(e, t)
            );
          })(null, e, t, r);
        }),
        (l.allocUnsafe = function (e) {
          return f(null, e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return f(null, e);
        }),
        (l.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (l.compare = function (e, t) {
          if (!l.isBuffer(e) || !l.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          var r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var n = l.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            var a = e[r];
            if (!l.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(n, i), (i += a.length);
          }
          return n;
        }),
        (l.byteLength = p),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? T(this, 0, e)
            : function (e, t, r) {
                var n = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === r || r > this.length) && (r = this.length),
                  r <= 0)
                )
                  return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return M(this, t, r);
                    case "utf8":
                    case "utf-8":
                      return T(this, t, r);
                    case "ascii":
                      return L(this, t, r);
                    case "latin1":
                    case "binary":
                      return A(this, t, r);
                    case "base64":
                      return S(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return O(this, t, r);
                    default:
                      if (n) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (n = !0);
                  }
              }.apply(this, arguments);
        }),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          var e = "",
            r = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (l.prototype.compare = function (e, t, r, n, i) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e))
            return 0;
          for (
            var o = i - n,
              a = r - t,
              s = Math.min(o, a),
              c = this.slice(n, i),
              u = e.slice(t, r),
              f = 0;
            f < s;
            ++f
          )
            if (c[f] !== u[f]) {
              (o = c[f]), (a = u[f]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (l.prototype.indexOf = function (e, t, r) {
          return m(this, e, t, r, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, r) {
          return m(this, e, t, r, !1);
        }),
        (l.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var i = this.length - t;
          if (
            ((void 0 === r || r > i) && (r = i),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var o = !1; ; )
            switch (n) {
              case "hex":
                return y(this, e, t, r);
              case "utf8":
              case "utf-8":
                return b(this, e, t, r);
              case "ascii":
                return w(this, e, t, r);
              case "latin1":
              case "binary":
                return x(this, e, t, r);
              case "base64":
                return C(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, e, t, r);
              default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (o = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var k = 4096;
      function L(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
        return n;
      }
      function A(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n;
      }
      function M(e, t, r) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        for (var i = "", o = t; o < r; ++o) i += B(e[o]);
        return i;
      }
      function O(e, t, r) {
        for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
      }
      function E(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function R(e, t, r, n, i, o) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function N(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
          e[r + i] =
            (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
      }
      function I(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
          e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
      }
      function D(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function P(e, t, r, n, o) {
        return o || D(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
      }
      function H(e, t, r, n, o) {
        return o || D(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
      }
      (l.prototype.slice = function (e, t) {
        var r,
          n = this.length;
        if (
          ((e = ~~e),
          (t = void 0 === t ? n : ~~t),
          e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          t < e && (t = e),
          l.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(e, t)).__proto__ = l.prototype;
        else {
          var i = t - e;
          r = new l(i, void 0);
          for (var o = 0; o < i; ++o) r[o] = this[o + e];
        }
        return r;
      }),
        (l.prototype.readUIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            n += this[e + o] * i;
          return n;
        }),
        (l.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
            n += this[e + --t] * i;
          return n;
        }),
        (l.prototype.readUInt8 = function (e, t) {
          return t || E(e, 1, this.length), this[e];
        }),
        (l.prototype.readUInt16LE = function (e, t) {
          return t || E(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (l.prototype.readUInt16BE = function (e, t) {
          return t || E(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (l.prototype.readUInt32LE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (l.prototype.readUInt32BE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (l.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            n += this[e + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (l.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
            o += this[e + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            t || E(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          t || E(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          t || E(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readFloatLE = function (e, t) {
          return t || E(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return t || E(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return t || E(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return t || E(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (l.prototype.writeUIntLE = function (e, t, r, n) {
          ((e = +e), (t |= 0), (r |= 0), n) ||
            R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < r && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + r;
        }),
        (l.prototype.writeUIntBE = function (e, t, r, n) {
          ((e = +e), (t |= 0), (r |= 0), n) ||
            R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var i = r - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + r;
        }),
        (l.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 1, 255, 0),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : N(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : N(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : I(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : I(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            R(this, e, t, r, i - 1, -i);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < r && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            R(this, e, t, r, i - 1, -i);
          }
          var o = r - 1,
            a = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 1, 127, -128),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : N(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : N(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 4, 2147483647, -2147483648),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : I(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || R(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : I(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeFloatLE = function (e, t, r) {
          return P(this, e, t, !0, r);
        }),
        (l.prototype.writeFloatBE = function (e, t, r) {
          return P(this, e, t, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (e, t, r) {
          return H(this, e, t, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (e, t, r) {
          return H(this, e, t, !1, r);
        }),
        (l.prototype.copy = function (e, t, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var i,
            o = n - r;
          if (this === e && r < t && t < n)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
          else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
          return o;
        }),
        (l.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !l.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < r; ++o) this[o] = e;
          else {
            var a = l.isBuffer(e) ? e : F(new l(e, n).toString()),
              s = a.length;
            for (o = 0; o < r - t; ++o) this[o + t] = a[o % s];
          }
          return this;
        });
      var $ = /[^+\/0-9A-Za-z-_]/g;
      function B(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function F(e, t) {
        var r;
        t = t || 1 / 0;
        for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
          if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function U(e) {
        return n.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace($, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function j(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
    }).call(t, r(0));
  },
  function (e, t, r) {
    "use strict";
    var n = r(9);
    function i(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function (e, t) {
        var r = this,
          o = this._readableState && this._readableState.destroyed,
          a = this._writableState && this._writableState.destroyed;
        return o || a
          ? (t
              ? t(e)
              : e &&
                (this._writableState
                  ? this._writableState.errorEmitted ||
                    ((this._writableState.errorEmitted = !0),
                    n.nextTick(i, this, e))
                  : n.nextTick(i, this, e)),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? r._writableState
                  ? r._writableState.errorEmitted ||
                    ((r._writableState.errorEmitted = !0), n.nextTick(i, r, e))
                  : n.nextTick(i, r, e)
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finalCalled = !1),
            (this._writableState.prefinished = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(10).Buffer,
      i =
        n.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (n.isEncoding === i || !i(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = l), (this.end = c), (t = 4);
          break;
        case "utf8":
          (this.fillLast = s), (t = 4);
          break;
        case "base64":
          (this.text = u), (this.end = f), (t = 3);
          break;
        default:
          return (this.write = h), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = n.allocUnsafe(t));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        r = (function (e, t, r) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== r
        ? r
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function l(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              r.slice(0, -1)
            );
        }
        return r;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function c(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function u(e, t) {
      var r = (e.length - t) % 3;
      return 0 === r
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - r),
          (this.lastTotal = 3),
          1 === r
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - r));
    }
    function f(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function h(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, r;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (r = this.lastNeed), (this.lastNeed = 0);
        } else r = 0;
        return r < e.length
          ? t
            ? t + this.text(e, r)
            : this.text(e, r)
          : t || "";
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (o.prototype.text = function (e, t) {
        var r = (function (e, t, r) {
          var n = t.length - 1;
          if (n < r) return 0;
          var i = a(t[n]);
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
          if (--n < r || -2 === i) return 0;
          if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
          if (--n < r || -2 === i) return 0;
          if ((i = a(t[n])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = r;
        var n = e.length - (r - this.lastNeed);
        return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(2),
      i = Object.create(r(4));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      n.call(this, e),
        (this._transformState = {
          afterTransform: function (e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (!n)
              return this.emit(
                "error",
                new Error("write callback called multiple times")
              );
            (r.writechunk = null),
              (r.writecb = null),
              null != t && this.push(t),
              n(e);
            var i = this._readableState;
            (i.reading = !1),
              (i.needReadable || i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
          }.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", a);
    }
    function a() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function (t, r) {
            s(e, t, r);
          })
        : s(this, null, null);
    }
    function s(e, t, r) {
      if (t) return e.emit("error", t);
      if ((null != r && e.push(r), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (i.inherits = r(3)),
      i.inherits(o, n),
      (o.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, e, t)
        );
      }),
      (o.prototype._transform = function (e, t, r) {
        throw new Error("_transform() is not implemented");
      }),
      (o.prototype._write = function (e, t, r) {
        var n = this._transformState;
        if (
          ((n.writecb = r),
          (n.writechunk = e),
          (n.writeencoding = t),
          !n.transforming)
        ) {
          var i = this._readableState;
          (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (o.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (o.prototype._destroy = function (e, t) {
        var r = this;
        n.prototype._destroy.call(this, e, function (e) {
          t(e), r.emit("close");
        });
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(28),
      i = r(30);
    new n.a({ el: "#app", render: (e) => e(i.a) });
  },
  function (e, t, r) {
    "use strict";
    (function (e, n) {
      r.d(t, "a", function () {
        return Zr;
      });
      /*!
       * Vue.js v2.7.14
       * (c) 2014-2022 Evan You
       * Released under the MIT License.
       */
      var i = Object.freeze({}),
        o = Array.isArray;
      function a(e) {
        return void 0 === e || null === e;
      }
      function s(e) {
        return void 0 !== e && null !== e;
      }
      function l(e) {
        return !0 === e;
      }
      function c(e) {
        return (
          "string" == typeof e ||
          "number" == typeof e ||
          "symbol" == typeof e ||
          "boolean" == typeof e
        );
      }
      function u(e) {
        return "function" == typeof e;
      }
      function f(e) {
        return null !== e && "object" == typeof e;
      }
      var h = Object.prototype.toString;
      function d(e) {
        return "[object Object]" === h.call(e);
      }
      function p(e) {
        return "[object RegExp]" === h.call(e);
      }
      function g(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }
      function m(e) {
        return (
          s(e) && "function" == typeof e.then && "function" == typeof e.catch
        );
      }
      function v(e) {
        return null == e
          ? ""
          : Array.isArray(e) || (d(e) && e.toString === h)
          ? JSON.stringify(e, null, 2)
          : String(e);
      }
      function y(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }
      function b(e, t) {
        for (
          var r = Object.create(null), n = e.split(","), i = 0;
          i < n.length;
          i++
        )
          r[n[i]] = !0;
        return t
          ? function (e) {
              return r[e.toLowerCase()];
            }
          : function (e) {
              return r[e];
            };
      }
      var w = b("slot,component", !0),
        x = b("key,ref,slot,slot-scope,is");
      function C(e, t) {
        var r = e.length;
        if (r) {
          if (t === e[r - 1]) return void (e.length = r - 1);
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1);
        }
      }
      var _ = Object.prototype.hasOwnProperty;
      function S(e, t) {
        return _.call(e, t);
      }
      function T(e) {
        var t = Object.create(null);
        return function (r) {
          return t[r] || (t[r] = e(r));
        };
      }
      var k = /-(\w)/g,
        L = T(function (e) {
          return e.replace(k, function (e, t) {
            return t ? t.toUpperCase() : "";
          });
        }),
        A = T(function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }),
        M = /\B([A-Z])/g,
        O = T(function (e) {
          return e.replace(M, "-$1").toLowerCase();
        });
      var E = Function.prototype.bind
        ? function (e, t) {
            return e.bind(t);
          }
        : function (e, t) {
            function r(r) {
              var n = arguments.length;
              return n
                ? n > 1
                  ? e.apply(t, arguments)
                  : e.call(t, r)
                : e.call(t);
            }
            return (r._length = e.length), r;
          };
      function R(e, t) {
        t = t || 0;
        for (var r = e.length - t, n = new Array(r); r--; ) n[r] = e[r + t];
        return n;
      }
      function N(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      }
      function I(e) {
        for (var t = {}, r = 0; r < e.length; r++) e[r] && N(t, e[r]);
        return t;
      }
      function D(e, t, r) {}
      var P = function (e, t, r) {
          return !1;
        },
        H = function (e) {
          return e;
        };
      function $(e, t) {
        if (e === t) return !0;
        var r = f(e),
          n = f(t);
        if (!r || !n) return !r && !n && String(e) === String(t);
        try {
          var i = Array.isArray(e),
            o = Array.isArray(t);
          if (i && o)
            return (
              e.length === t.length &&
              e.every(function (e, r) {
                return $(e, t[r]);
              })
            );
          if (e instanceof Date && t instanceof Date)
            return e.getTime() === t.getTime();
          if (i || o) return !1;
          var a = Object.keys(e),
            s = Object.keys(t);
          return (
            a.length === s.length &&
            a.every(function (r) {
              return $(e[r], t[r]);
            })
          );
        } catch (e) {
          return !1;
        }
      }
      function B(e, t) {
        for (var r = 0; r < e.length; r++) if ($(e[r], t)) return r;
        return -1;
      }
      function F(e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(this, arguments));
        };
      }
      function U(e, t) {
        return e === t ? 0 === e && 1 / e != 1 / t : e == e || t == t;
      }
      var j = "data-server-rendered",
        W = ["component", "directive", "filter"],
        z = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch",
          "renderTracked",
          "renderTriggered",
        ],
        V = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: P,
          isReservedAttr: P,
          isUnknownElement: P,
          getTagNamespace: D,
          parsePlatformTagName: H,
          mustUseProp: P,
          async: !0,
          _lifecycleHooks: z,
        },
        K =
          /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      function q(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
      }
      function Y(e, t, r, n) {
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !!n,
          writable: !0,
          configurable: !0,
        });
      }
      var G = new RegExp("[^".concat(K.source, ".$_\\d]"));
      var X = "__proto__" in {},
        Z = "undefined" != typeof window,
        J = Z && window.navigator.userAgent.toLowerCase(),
        Q = J && /msie|trident/.test(J),
        ee = J && J.indexOf("msie 9.0") > 0,
        te = J && J.indexOf("edge/") > 0;
      J && J.indexOf("android");
      var re = J && /iphone|ipad|ipod|ios/.test(J);
      J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J);
      var ne,
        ie = J && J.match(/firefox\/(\d+)/),
        oe = {}.watch,
        ae = !1;
      if (Z)
        try {
          var se = {};
          Object.defineProperty(se, "passive", {
            get: function () {
              ae = !0;
            },
          }),
            window.addEventListener("test-passive", null, se);
        } catch (e) {}
      var le = function () {
          return (
            void 0 === ne &&
              (ne =
                !Z &&
                void 0 !== e &&
                e.process &&
                "server" === e.process.env.VUE_ENV),
            ne
          );
        },
        ce = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function ue(e) {
        return "function" == typeof e && /native code/.test(e.toString());
      }
      var fe,
        he =
          "undefined" != typeof Symbol &&
          ue(Symbol) &&
          "undefined" != typeof Reflect &&
          ue(Reflect.ownKeys);
      fe =
        "undefined" != typeof Set && ue(Set)
          ? Set
          : (function () {
              function e() {
                this.set = Object.create(null);
              }
              return (
                (e.prototype.has = function (e) {
                  return !0 === this.set[e];
                }),
                (e.prototype.add = function (e) {
                  this.set[e] = !0;
                }),
                (e.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                e
              );
            })();
      var de = null;
      function pe(e) {
        void 0 === e && (e = null),
          e || (de && de._scope.off()),
          (de = e),
          e && e._scope.on();
      }
      var ge = (function () {
          function e(e, t, r, n, i, o, a, s) {
            (this.tag = e),
              (this.data = t),
              (this.children = r),
              (this.text = n),
              (this.elm = i),
              (this.ns = void 0),
              (this.context = o),
              (this.fnContext = void 0),
              (this.fnOptions = void 0),
              (this.fnScopeId = void 0),
              (this.key = t && t.key),
              (this.componentOptions = a),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = s),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1);
          }
          return (
            Object.defineProperty(e.prototype, "child", {
              get: function () {
                return this.componentInstance;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        me = function (e) {
          void 0 === e && (e = "");
          var t = new ge();
          return (t.text = e), (t.isComment = !0), t;
        };
      function ve(e) {
        return new ge(void 0, void 0, void 0, String(e));
      }
      function ye(e) {
        var t = new ge(
          e.tag,
          e.data,
          e.children && e.children.slice(),
          e.text,
          e.elm,
          e.context,
          e.componentOptions,
          e.asyncFactory
        );
        return (
          (t.ns = e.ns),
          (t.isStatic = e.isStatic),
          (t.key = e.key),
          (t.isComment = e.isComment),
          (t.fnContext = e.fnContext),
          (t.fnOptions = e.fnOptions),
          (t.fnScopeId = e.fnScopeId),
          (t.asyncMeta = e.asyncMeta),
          (t.isCloned = !0),
          t
        );
      }
      var be = 0,
        we = [],
        xe = function () {
          for (var e = 0; e < we.length; e++) {
            var t = we[e];
            (t.subs = t.subs.filter(function (e) {
              return e;
            })),
              (t._pending = !1);
          }
          we.length = 0;
        },
        Ce = (function () {
          function e() {
            (this._pending = !1), (this.id = be++), (this.subs = []);
          }
          return (
            (e.prototype.addSub = function (e) {
              this.subs.push(e);
            }),
            (e.prototype.removeSub = function (e) {
              (this.subs[this.subs.indexOf(e)] = null),
                this._pending || ((this._pending = !0), we.push(this));
            }),
            (e.prototype.depend = function (t) {
              e.target && e.target.addDep(this);
            }),
            (e.prototype.notify = function (e) {
              var t = this.subs.filter(function (e) {
                return e;
              });
              for (var r = 0, n = t.length; r < n; r++) {
                var i = t[r];
                0, i.update();
              }
            }),
            e
          );
        })();
      Ce.target = null;
      var _e = [];
      function Se(e) {
        _e.push(e), (Ce.target = e);
      }
      function Te() {
        _e.pop(), (Ce.target = _e[_e.length - 1]);
      }
      var ke = Array.prototype,
        Le = Object.create(ke);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        function (e) {
          var t = ke[e];
          Y(Le, e, function () {
            for (var r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            var i,
              o = t.apply(this, r),
              a = this.__ob__;
            switch (e) {
              case "push":
              case "unshift":
                i = r;
                break;
              case "splice":
                i = r.slice(2);
            }
            return i && a.observeArray(i), a.dep.notify(), o;
          });
        }
      );
      var Ae = Object.getOwnPropertyNames(Le),
        Me = {},
        Oe = !0;
      function Ee(e) {
        Oe = e;
      }
      var Re = { notify: D, depend: D, addSub: D, removeSub: D },
        Ne = (function () {
          function e(e, t, r) {
            if (
              (void 0 === t && (t = !1),
              void 0 === r && (r = !1),
              (this.value = e),
              (this.shallow = t),
              (this.mock = r),
              (this.dep = r ? Re : new Ce()),
              (this.vmCount = 0),
              Y(e, "__ob__", this),
              o(e))
            ) {
              if (!r)
                if (X) e.__proto__ = Le;
                else
                  for (var n = 0, i = Ae.length; n < i; n++) {
                    Y(e, (s = Ae[n]), Le[s]);
                  }
              t || this.observeArray(e);
            } else {
              var a = Object.keys(e);
              for (n = 0; n < a.length; n++) {
                var s;
                De(e, (s = a[n]), Me, void 0, t, r);
              }
            }
          }
          return (
            (e.prototype.observeArray = function (e) {
              for (var t = 0, r = e.length; t < r; t++) Ie(e[t], !1, this.mock);
            }),
            e
          );
        })();
      function Ie(e, t, r) {
        return e && S(e, "__ob__") && e.__ob__ instanceof Ne
          ? e.__ob__
          : !Oe ||
            (!r && le()) ||
            (!o(e) && !d(e)) ||
            !Object.isExtensible(e) ||
            e.__v_skip ||
            Ue(e) ||
            e instanceof ge
          ? void 0
          : new Ne(e, t, r);
      }
      function De(e, t, r, n, i, a) {
        var s = new Ce(),
          l = Object.getOwnPropertyDescriptor(e, t);
        if (!l || !1 !== l.configurable) {
          var c = l && l.get,
            u = l && l.set;
          (c && !u) || (r !== Me && 2 !== arguments.length) || (r = e[t]);
          var f = !i && Ie(r, !1, a);
          return (
            Object.defineProperty(e, t, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                var t = c ? c.call(e) : r;
                return (
                  Ce.target &&
                    (s.depend(),
                    f &&
                      (f.dep.depend(),
                      o(t) &&
                        (function e(t) {
                          for (var r = void 0, n = 0, i = t.length; n < i; n++)
                            (r = t[n]) && r.__ob__ && r.__ob__.dep.depend(),
                              o(r) && e(r);
                        })(t))),
                  Ue(t) && !i ? t.value : t
                );
              },
              set: function (t) {
                var n = c ? c.call(e) : r;
                if (U(n, t)) {
                  if (u) u.call(e, t);
                  else {
                    if (c) return;
                    if (!i && Ue(n) && !Ue(t)) return void (n.value = t);
                    r = t;
                  }
                  (f = !i && Ie(t, !1, a)), s.notify();
                }
              },
            }),
            s
          );
        }
      }
      function Pe(e, t, r) {
        if (!Fe(e)) {
          var n = e.__ob__;
          return o(e) && g(t)
            ? ((e.length = Math.max(e.length, t)),
              e.splice(t, 1, r),
              n && !n.shallow && n.mock && Ie(r, !1, !0),
              r)
            : t in e && !(t in Object.prototype)
            ? ((e[t] = r), r)
            : e._isVue || (n && n.vmCount)
            ? r
            : n
            ? (De(n.value, t, r, void 0, n.shallow, n.mock), n.dep.notify(), r)
            : ((e[t] = r), r);
        }
      }
      function He(e, t) {
        if (o(e) && g(t)) e.splice(t, 1);
        else {
          var r = e.__ob__;
          e._isVue ||
            (r && r.vmCount) ||
            Fe(e) ||
            (S(e, t) && (delete e[t], r && r.dep.notify()));
        }
      }
      function $e(e) {
        return Be(e, !0), Y(e, "__v_isShallow", !0), e;
      }
      function Be(e, t) {
        if (!Fe(e)) {
          Ie(e, t, le());
          0;
        }
      }
      function Fe(e) {
        return !(!e || !e.__v_isReadonly);
      }
      function Ue(e) {
        return !(!e || !0 !== e.__v_isRef);
      }
      function je(e, t, r) {
        Object.defineProperty(e, r, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            var e = t[r];
            if (Ue(e)) return e.value;
            var n = e && e.__ob__;
            return n && n.dep.depend(), e;
          },
          set: function (e) {
            var n = t[r];
            Ue(n) && !Ue(e) ? (n.value = e) : (t[r] = e);
          },
        });
      }
      var We = T(function (e) {
        var t = "&" === e.charAt(0),
          r = "~" === (e = t ? e.slice(1) : e).charAt(0),
          n = "!" === (e = r ? e.slice(1) : e).charAt(0);
        return {
          name: (e = n ? e.slice(1) : e),
          once: r,
          capture: n,
          passive: t,
        };
      });
      function ze(e, t) {
        function r() {
          var e = r.fns;
          if (!o(e)) return er(e, null, arguments, t, "v-on handler");
          for (var n = e.slice(), i = 0; i < n.length; i++)
            er(n[i], null, arguments, t, "v-on handler");
        }
        return (r.fns = e), r;
      }
      function Ve(e, t, r, n, i, o) {
        var s, c, u, f;
        for (s in e)
          (c = e[s]),
            (u = t[s]),
            (f = We(s)),
            a(c) ||
              (a(u)
                ? (a(c.fns) && (c = e[s] = ze(c, o)),
                  l(f.once) && (c = e[s] = i(f.name, c, f.capture)),
                  r(f.name, c, f.capture, f.passive, f.params))
                : c !== u && ((u.fns = c), (e[s] = u)));
        for (s in t) a(e[s]) && n((f = We(s)).name, t[s], f.capture);
      }
      function Ke(e, t, r) {
        var n;
        e instanceof ge && (e = e.data.hook || (e.data.hook = {}));
        var i = e[t];
        function o() {
          r.apply(this, arguments), C(n.fns, o);
        }
        a(i)
          ? (n = ze([o]))
          : s(i.fns) && l(i.merged)
          ? (n = i).fns.push(o)
          : (n = ze([i, o])),
          (n.merged = !0),
          (e[t] = n);
      }
      function qe(e, t, r, n, i) {
        if (s(t)) {
          if (S(t, r)) return (e[r] = t[r]), i || delete t[r], !0;
          if (S(t, n)) return (e[r] = t[n]), i || delete t[n], !0;
        }
        return !1;
      }
      function Ye(e) {
        return c(e)
          ? [ve(e)]
          : o(e)
          ? (function e(t, r) {
              var n = [];
              var i, u, f, h;
              for (i = 0; i < t.length; i++)
                a((u = t[i])) ||
                  "boolean" == typeof u ||
                  ((f = n.length - 1),
                  (h = n[f]),
                  o(u)
                    ? u.length > 0 &&
                      (Ge((u = e(u, "".concat(r || "", "_").concat(i)))[0]) &&
                        Ge(h) &&
                        ((n[f] = ve(h.text + u[0].text)), u.shift()),
                      n.push.apply(n, u))
                    : c(u)
                    ? Ge(h)
                      ? (n[f] = ve(h.text + u))
                      : "" !== u && n.push(ve(u))
                    : Ge(u) && Ge(h)
                    ? (n[f] = ve(h.text + u.text))
                    : (l(t._isVList) &&
                        s(u.tag) &&
                        a(u.key) &&
                        s(r) &&
                        (u.key = "__vlist".concat(r, "_").concat(i, "__")),
                      n.push(u)));
              return n;
            })(e)
          : void 0;
      }
      function Ge(e) {
        return (
          s(e) &&
          s(e.text) &&
          (function (e) {
            return !1 === e;
          })(e.isComment)
        );
      }
      var Xe = 1,
        Ze = 2;
      function Je(e, t, r, n, i, h) {
        return (
          (o(r) || c(r)) && ((i = n), (n = r), (r = void 0)),
          l(h) && (i = Ze),
          (function (e, t, r, n, i) {
            if (s(r) && s(r.__ob__)) return me();
            s(r) && s(r.is) && (t = r.is);
            if (!t) return me();
            0;
            o(n) &&
              u(n[0]) &&
              (((r = r || {}).scopedSlots = { default: n[0] }), (n.length = 0));
            i === Ze
              ? (n = Ye(n))
              : i === Xe &&
                (n = (function (e) {
                  for (var t = 0; t < e.length; t++)
                    if (o(e[t])) return Array.prototype.concat.apply([], e);
                  return e;
                })(n));
            var c, h;
            if ("string" == typeof t) {
              var d = void 0;
              (h = (e.$vnode && e.$vnode.ns) || V.getTagNamespace(t)),
                (c = V.isReservedTag(t)
                  ? new ge(V.parsePlatformTagName(t), r, n, void 0, void 0, e)
                  : (r && r.pre) || !s((d = Vr(e.$options, "components", t)))
                  ? new ge(t, r, n, void 0, void 0, e)
                  : Dr(d, r, e, n, t));
            } else c = Dr(t, r, e, n);
            return o(c)
              ? c
              : s(c)
              ? (s(h) &&
                  (function e(t, r, n) {
                    t.ns = r;
                    "foreignObject" === t.tag && ((r = void 0), (n = !0));
                    if (s(t.children))
                      for (var i = 0, o = t.children.length; i < o; i++) {
                        var c = t.children[i];
                        s(c.tag) &&
                          (a(c.ns) || (l(n) && "svg" !== c.tag)) &&
                          e(c, r, n);
                      }
                  })(c, h),
                s(r) &&
                  (function (e) {
                    f(e.style) && gr(e.style);
                    f(e.class) && gr(e.class);
                  })(r),
                c)
              : me();
          })(e, t, r, n, i)
        );
      }
      function Qe(e, t) {
        var r,
          n,
          i,
          a,
          l = null;
        if (o(e) || "string" == typeof e)
          for (l = new Array(e.length), r = 0, n = e.length; r < n; r++)
            l[r] = t(e[r], r);
        else if ("number" == typeof e)
          for (l = new Array(e), r = 0; r < e; r++) l[r] = t(r + 1, r);
        else if (f(e))
          if (he && e[Symbol.iterator]) {
            l = [];
            for (var c = e[Symbol.iterator](), u = c.next(); !u.done; )
              l.push(t(u.value, l.length)), (u = c.next());
          } else
            for (
              i = Object.keys(e), l = new Array(i.length), r = 0, n = i.length;
              r < n;
              r++
            )
              (a = i[r]), (l[r] = t(e[a], a, r));
        return s(l) || (l = []), (l._isVList = !0), l;
      }
      function et(e, t, r, n) {
        var i,
          o = this.$scopedSlots[e];
        o
          ? ((r = r || {}),
            n && (r = N(N({}, n), r)),
            (i = o(r) || (u(t) ? t() : t)))
          : (i = this.$slots[e] || (u(t) ? t() : t));
        var a = r && r.slot;
        return a ? this.$createElement("template", { slot: a }, i) : i;
      }
      function tt(e) {
        return Vr(this.$options, "filters", e, !0) || H;
      }
      function rt(e, t) {
        return o(e) ? -1 === e.indexOf(t) : e !== t;
      }
      function nt(e, t, r, n, i) {
        var o = V.keyCodes[t] || r;
        return i && n && !V.keyCodes[t]
          ? rt(i, n)
          : o
          ? rt(o, e)
          : n
          ? O(n) !== t
          : void 0 === e;
      }
      function it(e, t, r, n, i) {
        if (r)
          if (f(r)) {
            o(r) && (r = I(r));
            var a = void 0,
              s = function (o) {
                if ("class" === o || "style" === o || x(o)) a = e;
                else {
                  var s = e.attrs && e.attrs.type;
                  a =
                    n || V.mustUseProp(t, s, o)
                      ? e.domProps || (e.domProps = {})
                      : e.attrs || (e.attrs = {});
                }
                var l = L(o),
                  c = O(o);
                l in a ||
                  c in a ||
                  ((a[o] = r[o]),
                  i &&
                    ((e.on || (e.on = {}))["update:".concat(o)] = function (e) {
                      r[o] = e;
                    }));
              };
            for (var l in r) s(l);
          } else;
        return e;
      }
      function ot(e, t) {
        var r = this._staticTrees || (this._staticTrees = []),
          n = r[e];
        return n && !t
          ? n
          : (st(
              (n = r[e] =
                this.$options.staticRenderFns[e].call(
                  this._renderProxy,
                  this._c,
                  this
                )),
              "__static__".concat(e),
              !1
            ),
            n);
      }
      function at(e, t, r) {
        return (
          st(e, "__once__".concat(t).concat(r ? "_".concat(r) : ""), !0), e
        );
      }
      function st(e, t, r) {
        if (o(e))
          for (var n = 0; n < e.length; n++)
            e[n] &&
              "string" != typeof e[n] &&
              lt(e[n], "".concat(t, "_").concat(n), r);
        else lt(e, t, r);
      }
      function lt(e, t, r) {
        (e.isStatic = !0), (e.key = t), (e.isOnce = r);
      }
      function ct(e, t) {
        if (t)
          if (d(t)) {
            var r = (e.on = e.on ? N({}, e.on) : {});
            for (var n in t) {
              var i = r[n],
                o = t[n];
              r[n] = i ? [].concat(i, o) : o;
            }
          } else;
        return e;
      }
      function ut(e, t, r, n) {
        t = t || { $stable: !r };
        for (var i = 0; i < e.length; i++) {
          var a = e[i];
          o(a)
            ? ut(a, t, r)
            : a && (a.proxy && (a.fn.proxy = !0), (t[a.key] = a.fn));
        }
        return n && (t.$key = n), t;
      }
      function ft(e, t) {
        for (var r = 0; r < t.length; r += 2) {
          var n = t[r];
          "string" == typeof n && n && (e[t[r]] = t[r + 1]);
        }
        return e;
      }
      function ht(e, t) {
        return "string" == typeof e ? t + e : e;
      }
      function dt(e) {
        (e._o = at),
          (e._n = y),
          (e._s = v),
          (e._l = Qe),
          (e._t = et),
          (e._q = $),
          (e._i = B),
          (e._m = ot),
          (e._f = tt),
          (e._k = nt),
          (e._b = it),
          (e._v = ve),
          (e._e = me),
          (e._u = ut),
          (e._g = ct),
          (e._d = ft),
          (e._p = ht);
      }
      function pt(e, t) {
        if (!e || !e.length) return {};
        for (var r = {}, n = 0, i = e.length; n < i; n++) {
          var o = e[n],
            a = o.data;
          if (
            (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
            (o.context !== t && o.fnContext !== t) || !a || null == a.slot)
          )
            (r.default || (r.default = [])).push(o);
          else {
            var s = a.slot,
              l = r[s] || (r[s] = []);
            "template" === o.tag
              ? l.push.apply(l, o.children || [])
              : l.push(o);
          }
        }
        for (var c in r) r[c].every(gt) && delete r[c];
        return r;
      }
      function gt(e) {
        return (e.isComment && !e.asyncFactory) || " " === e.text;
      }
      function mt(e) {
        return e.isComment && e.asyncFactory;
      }
      function vt(e, t, r, n) {
        var o,
          a = Object.keys(r).length > 0,
          s = t ? !!t.$stable : !a,
          l = t && t.$key;
        if (t) {
          if (t._normalized) return t._normalized;
          if (s && n && n !== i && l === n.$key && !a && !n.$hasNormal)
            return n;
          for (var c in ((o = {}), t))
            t[c] && "$" !== c[0] && (o[c] = yt(e, r, c, t[c]));
        } else o = {};
        for (var u in r) u in o || (o[u] = bt(r, u));
        return (
          t && Object.isExtensible(t) && (t._normalized = o),
          Y(o, "$stable", s),
          Y(o, "$key", l),
          Y(o, "$hasNormal", a),
          o
        );
      }
      function yt(e, t, r, n) {
        var i = function () {
          var t = de;
          pe(e);
          var r = arguments.length ? n.apply(null, arguments) : n({}),
            i = (r = r && "object" == typeof r && !o(r) ? [r] : Ye(r)) && r[0];
          return (
            pe(t),
            r && (!i || (1 === r.length && i.isComment && !mt(i))) ? void 0 : r
          );
        };
        return (
          n.proxy &&
            Object.defineProperty(t, r, {
              get: i,
              enumerable: !0,
              configurable: !0,
            }),
          i
        );
      }
      function bt(e, t) {
        return function () {
          return e[t];
        };
      }
      function wt(e) {
        return {
          get attrs() {
            if (!e._attrsProxy) {
              var t = (e._attrsProxy = {});
              Y(t, "_v_attr_proxy", !0), xt(t, e.$attrs, i, e, "$attrs");
            }
            return e._attrsProxy;
          },
          get listeners() {
            e._listenersProxy ||
              xt((e._listenersProxy = {}), e.$listeners, i, e, "$listeners");
            return e._listenersProxy;
          },
          get slots() {
            return (function (e) {
              e._slotsProxy || _t((e._slotsProxy = {}), e.$scopedSlots);
              return e._slotsProxy;
            })(e);
          },
          emit: E(e.$emit, e),
          expose: function (t) {
            t &&
              Object.keys(t).forEach(function (r) {
                return je(e, t, r);
              });
          },
        };
      }
      function xt(e, t, r, n, i) {
        var o = !1;
        for (var a in t)
          a in e ? t[a] !== r[a] && (o = !0) : ((o = !0), Ct(e, a, n, i));
        for (var a in e) a in t || ((o = !0), delete e[a]);
        return o;
      }
      function Ct(e, t, r, n) {
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return r[n][t];
          },
        });
      }
      function _t(e, t) {
        for (var r in t) e[r] = t[r];
        for (var r in e) r in t || delete e[r];
      }
      var St,
        Tt = null;
      function kt(e, t) {
        return (
          (e.__esModule || (he && "Module" === e[Symbol.toStringTag])) &&
            (e = e.default),
          f(e) ? t.extend(e) : e
        );
      }
      function Lt(e) {
        if (o(e))
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (s(r) && (s(r.componentOptions) || mt(r))) return r;
          }
      }
      function At(e, t) {
        St.$on(e, t);
      }
      function Mt(e, t) {
        St.$off(e, t);
      }
      function Ot(e, t) {
        var r = St;
        return function n() {
          null !== t.apply(null, arguments) && r.$off(e, n);
        };
      }
      function Et(e, t, r) {
        (St = e), Ve(t, r || {}, At, Mt, Ot, e), (St = void 0);
      }
      var Rt = null;
      function Nt(e) {
        var t = Rt;
        return (
          (Rt = e),
          function () {
            Rt = t;
          }
        );
      }
      function It(e) {
        for (; e && (e = e.$parent); ) if (e._inactive) return !0;
        return !1;
      }
      function Dt(e, t) {
        if (t) {
          if (((e._directInactive = !1), It(e))) return;
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
          e._inactive = !1;
          for (var r = 0; r < e.$children.length; r++) Dt(e.$children[r]);
          Pt(e, "activated");
        }
      }
      function Pt(e, t, r, n) {
        void 0 === n && (n = !0), Se();
        var i = de;
        n && pe(e);
        var o = e.$options[t],
          a = "".concat(t, " hook");
        if (o)
          for (var s = 0, l = o.length; s < l; s++)
            er(o[s], e, r || null, e, a);
        e._hasHookEvent && e.$emit("hook:" + t), n && pe(i), Te();
      }
      var Ht = [],
        $t = [],
        Bt = {},
        Ft = !1,
        Ut = !1,
        jt = 0;
      var Wt = 0,
        zt = Date.now;
      if (Z && !Q) {
        var Vt = window.performance;
        Vt &&
          "function" == typeof Vt.now &&
          zt() > document.createEvent("Event").timeStamp &&
          (zt = function () {
            return Vt.now();
          });
      }
      var Kt = function (e, t) {
        if (e.post) {
          if (!t.post) return 1;
        } else if (t.post) return -1;
        return e.id - t.id;
      };
      function qt() {
        var e, t;
        for (Wt = zt(), Ut = !0, Ht.sort(Kt), jt = 0; jt < Ht.length; jt++)
          (e = Ht[jt]).before && e.before(),
            (t = e.id),
            (Bt[t] = null),
            e.run();
        var r = $t.slice(),
          n = Ht.slice();
        (jt = Ht.length = $t.length = 0),
          (Bt = {}),
          (Ft = Ut = !1),
          (function (e) {
            for (var t = 0; t < e.length; t++)
              (e[t]._inactive = !0), Dt(e[t], !0);
          })(r),
          (function (e) {
            var t = e.length;
            for (; t--; ) {
              var r = e[t],
                n = r.vm;
              n &&
                n._watcher === r &&
                n._isMounted &&
                !n._isDestroyed &&
                Pt(n, "updated");
            }
          })(n),
          xe(),
          ce && V.devtools && ce.emit("flush");
      }
      function Yt(e) {
        var t = e.id;
        if (null == Bt[t] && (e !== Ce.target || !e.noRecurse)) {
          if (((Bt[t] = !0), Ut)) {
            for (var r = Ht.length - 1; r > jt && Ht[r].id > e.id; ) r--;
            Ht.splice(r + 1, 0, e);
          } else Ht.push(e);
          Ft || ((Ft = !0), hr(qt));
        }
      }
      var Gt = "watcher";
      "".concat(Gt, " callback"),
        "".concat(Gt, " getter"),
        "".concat(Gt, " cleanup");
      var Xt;
      var Zt = (function () {
        function e(e) {
          void 0 === e && (e = !1),
            (this.detached = e),
            (this.active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = Xt),
            !e &&
              Xt &&
              (this.index = (Xt.scopes || (Xt.scopes = [])).push(this) - 1);
        }
        return (
          (e.prototype.run = function (e) {
            if (this.active) {
              var t = Xt;
              try {
                return (Xt = this), e();
              } finally {
                Xt = t;
              }
            } else 0;
          }),
          (e.prototype.on = function () {
            Xt = this;
          }),
          (e.prototype.off = function () {
            Xt = this.parent;
          }),
          (e.prototype.stop = function (e) {
            if (this.active) {
              var t = void 0,
                r = void 0;
              for (t = 0, r = this.effects.length; t < r; t++)
                this.effects[t].teardown();
              for (t = 0, r = this.cleanups.length; t < r; t++)
                this.cleanups[t]();
              if (this.scopes)
                for (t = 0, r = this.scopes.length; t < r; t++)
                  this.scopes[t].stop(!0);
              if (!this.detached && this.parent && !e) {
                var n = this.parent.scopes.pop();
                n &&
                  n !== this &&
                  ((this.parent.scopes[this.index] = n),
                  (n.index = this.index));
              }
              (this.parent = void 0), (this.active = !1);
            }
          }),
          e
        );
      })();
      function Jt(e) {
        var t = e._provided,
          r = e.$parent && e.$parent._provided;
        return r === t ? (e._provided = Object.create(r)) : t;
      }
      function Qt(e, t, r) {
        Se();
        try {
          if (t)
            for (var n = t; (n = n.$parent); ) {
              var i = n.$options.errorCaptured;
              if (i)
                for (var o = 0; o < i.length; o++)
                  try {
                    if (!1 === i[o].call(n, e, t, r)) return;
                  } catch (e) {
                    tr(e, n, "errorCaptured hook");
                  }
            }
          tr(e, t, r);
        } finally {
          Te();
        }
      }
      function er(e, t, r, n, i) {
        var o;
        try {
          (o = r ? e.apply(t, r) : e.call(t)) &&
            !o._isVue &&
            m(o) &&
            !o._handled &&
            (o.catch(function (e) {
              return Qt(e, n, i + " (Promise/async)");
            }),
            (o._handled = !0));
        } catch (e) {
          Qt(e, n, i);
        }
        return o;
      }
      function tr(e, t, r) {
        if (V.errorHandler)
          try {
            return V.errorHandler.call(null, e, t, r);
          } catch (t) {
            t !== e && rr(t, null, "config.errorHandler");
          }
        rr(e, t, r);
      }
      function rr(e, t, r) {
        if (!Z || "undefined" == typeof console) throw e;
        console.error(e);
      }
      var nr,
        ir = !1,
        or = [],
        ar = !1;
      function sr() {
        ar = !1;
        var e = or.slice(0);
        or.length = 0;
        for (var t = 0; t < e.length; t++) e[t]();
      }
      if ("undefined" != typeof Promise && ue(Promise)) {
        var lr = Promise.resolve();
        (nr = function () {
          lr.then(sr), re && setTimeout(D);
        }),
          (ir = !0);
      } else if (
        Q ||
        "undefined" == typeof MutationObserver ||
        (!ue(MutationObserver) &&
          "[object MutationObserverConstructor]" !==
            MutationObserver.toString())
      )
        nr =
          void 0 !== n && ue(n)
            ? function () {
                n(sr);
              }
            : function () {
                setTimeout(sr, 0);
              };
      else {
        var cr = 1,
          ur = new MutationObserver(sr),
          fr = document.createTextNode(String(cr));
        ur.observe(fr, { characterData: !0 }),
          (nr = function () {
            (cr = (cr + 1) % 2), (fr.data = String(cr));
          }),
          (ir = !0);
      }
      function hr(e, t) {
        var r;
        if (
          (or.push(function () {
            if (e)
              try {
                e.call(t);
              } catch (e) {
                Qt(e, t, "nextTick");
              }
            else r && r(t);
          }),
          ar || ((ar = !0), nr()),
          !e && "undefined" != typeof Promise)
        )
          return new Promise(function (e) {
            r = e;
          });
      }
      function dr(e) {
        return function (t, r) {
          if ((void 0 === r && (r = de), r))
            return (function (e, t, r) {
              var n = e.$options;
              n[t] = Ur(n[t], r);
            })(r, e, t);
        };
      }
      dr("beforeMount"),
        dr("mounted"),
        dr("beforeUpdate"),
        dr("updated"),
        dr("beforeDestroy"),
        dr("destroyed"),
        dr("activated"),
        dr("deactivated"),
        dr("serverPrefetch"),
        dr("renderTracked"),
        dr("renderTriggered"),
        dr("errorCaptured");
      var pr = new fe();
      function gr(e) {
        return (
          (function e(t, r) {
            var n, i;
            var a = o(t);
            if (
              (!a && !f(t)) ||
              t.__v_skip ||
              Object.isFrozen(t) ||
              t instanceof ge
            )
              return;
            if (t.__ob__) {
              var s = t.__ob__.dep.id;
              if (r.has(s)) return;
              r.add(s);
            }
            if (a) for (n = t.length; n--; ) e(t[n], r);
            else if (Ue(t)) e(t.value, r);
            else for (i = Object.keys(t), n = i.length; n--; ) e(t[i[n]], r);
          })(e, pr),
          pr.clear(),
          e
        );
      }
      var mr = 0,
        vr = (function () {
          function e(e, t, r, n, i) {
            !(function (e, t) {
              void 0 === t && (t = Xt), t && t.active && t.effects.push(e);
            })(this, Xt && !Xt._vm ? Xt : e ? e._scope : void 0),
              (this.vm = e) && i && (e._watcher = this),
              n
                ? ((this.deep = !!n.deep),
                  (this.user = !!n.user),
                  (this.lazy = !!n.lazy),
                  (this.sync = !!n.sync),
                  (this.before = n.before))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = r),
              (this.id = ++mr),
              (this.active = !0),
              (this.post = !1),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new fe()),
              (this.newDepIds = new fe()),
              (this.expression = ""),
              u(t)
                ? (this.getter = t)
                : ((this.getter = (function (e) {
                    if (!G.test(e)) {
                      var t = e.split(".");
                      return function (e) {
                        for (var r = 0; r < t.length; r++) {
                          if (!e) return;
                          e = e[t[r]];
                        }
                        return e;
                      };
                    }
                  })(t)),
                  this.getter || (this.getter = D)),
              (this.value = this.lazy ? void 0 : this.get());
          }
          return (
            (e.prototype.get = function () {
              var e;
              Se(this);
              var t = this.vm;
              try {
                e = this.getter.call(t, t);
              } catch (e) {
                if (!this.user) throw e;
                Qt(e, t, 'getter for watcher "'.concat(this.expression, '"'));
              } finally {
                this.deep && gr(e), Te(), this.cleanupDeps();
              }
              return e;
            }),
            (e.prototype.addDep = function (e) {
              var t = e.id;
              this.newDepIds.has(t) ||
                (this.newDepIds.add(t),
                this.newDeps.push(e),
                this.depIds.has(t) || e.addSub(this));
            }),
            (e.prototype.cleanupDeps = function () {
              for (var e = this.deps.length; e--; ) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this);
              }
              var r = this.depIds;
              (this.depIds = this.newDepIds),
                (this.newDepIds = r),
                this.newDepIds.clear(),
                (r = this.deps),
                (this.deps = this.newDeps),
                (this.newDeps = r),
                (this.newDeps.length = 0);
            }),
            (e.prototype.update = function () {
              this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Yt(this);
            }),
            (e.prototype.run = function () {
              if (this.active) {
                var e = this.get();
                if (e !== this.value || f(e) || this.deep) {
                  var t = this.value;
                  if (((this.value = e), this.user)) {
                    var r = 'callback for watcher "'.concat(
                      this.expression,
                      '"'
                    );
                    er(this.cb, this.vm, [e, t], this.vm, r);
                  } else this.cb.call(this.vm, e, t);
                }
              }
            }),
            (e.prototype.evaluate = function () {
              (this.value = this.get()), (this.dirty = !1);
            }),
            (e.prototype.depend = function () {
              for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }),
            (e.prototype.teardown = function () {
              if (
                (this.vm &&
                  !this.vm._isBeingDestroyed &&
                  C(this.vm._scope.effects, this),
                this.active)
              ) {
                for (var e = this.deps.length; e--; )
                  this.deps[e].removeSub(this);
                (this.active = !1), this.onStop && this.onStop();
              }
            }),
            e
          );
        })(),
        yr = { enumerable: !0, configurable: !0, get: D, set: D };
      function br(e, t, r) {
        (yr.get = function () {
          return this[t][r];
        }),
          (yr.set = function (e) {
            this[t][r] = e;
          }),
          Object.defineProperty(e, r, yr);
      }
      function wr(e) {
        var t = e.$options;
        if (
          (t.props &&
            (function (e, t) {
              var r = e.$options.propsData || {},
                n = (e._props = $e({})),
                i = (e.$options._propKeys = []),
                o = !e.$parent;
              o || Ee(!1);
              var a = function (o) {
                i.push(o);
                var a = Kr(o, t, r, e);
                De(n, o, a), o in e || br(e, "_props", o);
              };
              for (var s in t) a(s);
              Ee(!0);
            })(e, t.props),
          (function (e) {
            var t = e.$options,
              r = t.setup;
            if (r) {
              var n = (e._setupContext = wt(e));
              pe(e), Se();
              var i = er(r, null, [e._props || $e({}), n], e, "setup");
              if ((Te(), pe(), u(i))) t.render = i;
              else if (f(i))
                if (((e._setupState = i), i.__sfc)) {
                  var o = (e._setupProxy = {});
                  for (var a in i) "__sfc" !== a && je(o, i, a);
                } else for (var a in i) q(a) || je(e, i, a);
            }
          })(e),
          t.methods &&
            (function (e, t) {
              e.$options.props;
              for (var r in t)
                e[r] = "function" != typeof t[r] ? D : E(t[r], e);
            })(e, t.methods),
          t.data)
        )
          !(function (e) {
            var t = e.$options.data;
            d(
              (t = e._data =
                u(t)
                  ? (function (e, t) {
                      Se();
                      try {
                        return e.call(t, t);
                      } catch (e) {
                        return Qt(e, t, "data()"), {};
                      } finally {
                        Te();
                      }
                    })(t, e)
                  : t || {})
            ) || (t = {});
            var r = Object.keys(t),
              n = e.$options.props,
              i = (e.$options.methods, r.length);
            for (; i--; ) {
              var o = r[i];
              0, (n && S(n, o)) || q(o) || br(e, "_data", o);
            }
            var a = Ie(t);
            a && a.vmCount++;
          })(e);
        else {
          var r = Ie((e._data = {}));
          r && r.vmCount++;
        }
        t.computed &&
          (function (e, t) {
            var r = (e._computedWatchers = Object.create(null)),
              n = le();
            for (var i in t) {
              var o = t[i],
                a = u(o) ? o : o.get;
              0, n || (r[i] = new vr(e, a || D, D, xr)), i in e || Cr(e, i, o);
            }
          })(e, t.computed),
          t.watch &&
            t.watch !== oe &&
            (function (e, t) {
              for (var r in t) {
                var n = t[r];
                if (o(n)) for (var i = 0; i < n.length; i++) Tr(e, r, n[i]);
                else Tr(e, r, n);
              }
            })(e, t.watch);
      }
      var xr = { lazy: !0 };
      function Cr(e, t, r) {
        var n = !le();
        u(r)
          ? ((yr.get = n ? _r(t) : Sr(r)), (yr.set = D))
          : ((yr.get = r.get ? (n && !1 !== r.cache ? _r(t) : Sr(r.get)) : D),
            (yr.set = r.set || D)),
          Object.defineProperty(e, t, yr);
      }
      function _r(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t)
            return t.dirty && t.evaluate(), Ce.target && t.depend(), t.value;
        };
      }
      function Sr(e) {
        return function () {
          return e.call(this, this);
        };
      }
      function Tr(e, t, r, n) {
        return (
          d(r) && ((n = r), (r = r.handler)),
          "string" == typeof r && (r = e[r]),
          e.$watch(t, r, n)
        );
      }
      function kr(e, t) {
        if (e) {
          for (
            var r = Object.create(null),
              n = he ? Reflect.ownKeys(e) : Object.keys(e),
              i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i];
            if ("__ob__" !== o) {
              var a = e[o].from;
              if (a in t._provided) r[o] = t._provided[a];
              else if ("default" in e[o]) {
                var s = e[o].default;
                r[o] = u(s) ? s.call(t) : s;
              } else 0;
            }
          }
          return r;
        }
      }
      var Lr = 0;
      function Ar(e) {
        var t = e.options;
        if (e.super) {
          var r = Ar(e.super);
          if (r !== e.superOptions) {
            e.superOptions = r;
            var n = (function (e) {
              var t,
                r = e.options,
                n = e.sealedOptions;
              for (var i in r) r[i] !== n[i] && (t || (t = {}), (t[i] = r[i]));
              return t;
            })(e);
            n && N(e.extendOptions, n),
              (t = e.options = zr(r, e.extendOptions)).name &&
                (t.components[t.name] = e);
          }
        }
        return t;
      }
      function Mr(e, t, r, n, a) {
        var s,
          c = this,
          u = a.options;
        S(n, "_uid")
          ? ((s = Object.create(n))._original = n)
          : ((s = n), (n = n._original));
        var f = l(u._compiled),
          h = !f;
        (this.data = e),
          (this.props = t),
          (this.children = r),
          (this.parent = n),
          (this.listeners = e.on || i),
          (this.injections = kr(u.inject, n)),
          (this.slots = function () {
            return (
              c.$slots || vt(n, e.scopedSlots, (c.$slots = pt(r, n))), c.$slots
            );
          }),
          Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function () {
              return vt(n, e.scopedSlots, this.slots());
            },
          }),
          f &&
            ((this.$options = u),
            (this.$slots = this.slots()),
            (this.$scopedSlots = vt(n, e.scopedSlots, this.$slots))),
          u._scopeId
            ? (this._c = function (e, t, r, i) {
                var a = Je(s, e, t, r, i, h);
                return (
                  a && !o(a) && ((a.fnScopeId = u._scopeId), (a.fnContext = n)),
                  a
                );
              })
            : (this._c = function (e, t, r, n) {
                return Je(s, e, t, r, n, h);
              });
      }
      function Or(e, t, r, n, i) {
        var o = ye(e);
        return (
          (o.fnContext = r),
          (o.fnOptions = n),
          t.slot && ((o.data || (o.data = {})).slot = t.slot),
          o
        );
      }
      function Er(e, t) {
        for (var r in t) e[L(r)] = t[r];
      }
      function Rr(e) {
        return e.name || e.__name || e._componentTag;
      }
      dt(Mr.prototype);
      var Nr = {
          init: function (e, t) {
            if (
              e.componentInstance &&
              !e.componentInstance._isDestroyed &&
              e.data.keepAlive
            ) {
              var r = e;
              Nr.prepatch(r, r);
            } else {
              (e.componentInstance = (function (e, t) {
                var r = { _isComponent: !0, _parentVnode: e, parent: t },
                  n = e.data.inlineTemplate;
                s(n) &&
                  ((r.render = n.render),
                  (r.staticRenderFns = n.staticRenderFns));
                return new e.componentOptions.Ctor(r);
              })(e, Rt)).$mount(t ? e.elm : void 0, t);
            }
          },
          prepatch: function (e, t) {
            var r = t.componentOptions;
            !(function (e, t, r, n, o) {
              var a = n.data.scopedSlots,
                s = e.$scopedSlots,
                l = !!(
                  (a && !a.$stable) ||
                  (s !== i && !s.$stable) ||
                  (a && e.$scopedSlots.$key !== a.$key) ||
                  (!a && e.$scopedSlots.$key)
                ),
                c = !!(o || e.$options._renderChildren || l),
                u = e.$vnode;
              (e.$options._parentVnode = n),
                (e.$vnode = n),
                e._vnode && (e._vnode.parent = n),
                (e.$options._renderChildren = o);
              var f = n.data.attrs || i;
              e._attrsProxy &&
                xt(
                  e._attrsProxy,
                  f,
                  (u.data && u.data.attrs) || i,
                  e,
                  "$attrs"
                ) &&
                (c = !0),
                (e.$attrs = f),
                (r = r || i);
              var h = e.$options._parentListeners;
              if (
                (e._listenersProxy &&
                  xt(e._listenersProxy, r, h || i, e, "$listeners"),
                (e.$listeners = e.$options._parentListeners = r),
                Et(e, r, h),
                t && e.$options.props)
              ) {
                Ee(!1);
                for (
                  var d = e._props, p = e.$options._propKeys || [], g = 0;
                  g < p.length;
                  g++
                ) {
                  var m = p[g],
                    v = e.$options.props;
                  d[m] = Kr(m, v, t, e);
                }
                Ee(!0), (e.$options.propsData = t);
              }
              c && ((e.$slots = pt(o, n.context)), e.$forceUpdate());
            })(
              (t.componentInstance = e.componentInstance),
              r.propsData,
              r.listeners,
              t,
              r.children
            );
          },
          insert: function (e) {
            var t = e.context,
              r = e.componentInstance;
            r._isMounted || ((r._isMounted = !0), Pt(r, "mounted")),
              e.data.keepAlive &&
                (t._isMounted
                  ? (function (e) {
                      (e._inactive = !1), $t.push(e);
                    })(r)
                  : Dt(r, !0));
          },
          destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed ||
              (e.data.keepAlive
                ? (function e(t, r) {
                    if (
                      !((r && ((t._directInactive = !0), It(t))) || t._inactive)
                    ) {
                      t._inactive = !0;
                      for (var n = 0; n < t.$children.length; n++)
                        e(t.$children[n]);
                      Pt(t, "deactivated");
                    }
                  })(t, !0)
                : t.$destroy());
          },
        },
        Ir = Object.keys(Nr);
      function Dr(e, t, r, n, c) {
        if (!a(e)) {
          var u = r.$options._base;
          if ((f(e) && (e = u.extend(e)), "function" == typeof e)) {
            var h;
            if (
              a(e.cid) &&
              void 0 ===
                (e = (function (e, t) {
                  if (l(e.error) && s(e.errorComp)) return e.errorComp;
                  if (s(e.resolved)) return e.resolved;
                  var r = Tt;
                  if (
                    (r &&
                      s(e.owners) &&
                      -1 === e.owners.indexOf(r) &&
                      e.owners.push(r),
                    l(e.loading) && s(e.loadingComp))
                  )
                    return e.loadingComp;
                  if (r && !s(e.owners)) {
                    var n = (e.owners = [r]),
                      i = !0,
                      o = null,
                      c = null;
                    r.$on("hook:destroyed", function () {
                      return C(n, r);
                    });
                    var u = function (e) {
                        for (var t = 0, r = n.length; t < r; t++)
                          n[t].$forceUpdate();
                        e &&
                          ((n.length = 0),
                          null !== o && (clearTimeout(o), (o = null)),
                          null !== c && (clearTimeout(c), (c = null)));
                      },
                      h = F(function (r) {
                        (e.resolved = kt(r, t)), i ? (n.length = 0) : u(!0);
                      }),
                      d = F(function (t) {
                        s(e.errorComp) && ((e.error = !0), u(!0));
                      }),
                      p = e(h, d);
                    return (
                      f(p) &&
                        (m(p)
                          ? a(e.resolved) && p.then(h, d)
                          : m(p.component) &&
                            (p.component.then(h, d),
                            s(p.error) && (e.errorComp = kt(p.error, t)),
                            s(p.loading) &&
                              ((e.loadingComp = kt(p.loading, t)),
                              0 === p.delay
                                ? (e.loading = !0)
                                : (o = setTimeout(function () {
                                    (o = null),
                                      a(e.resolved) &&
                                        a(e.error) &&
                                        ((e.loading = !0), u(!1));
                                  }, p.delay || 200))),
                            s(p.timeout) &&
                              (c = setTimeout(function () {
                                (c = null), a(e.resolved) && d(null);
                              }, p.timeout)))),
                      (i = !1),
                      e.loading ? e.loadingComp : e.resolved
                    );
                  }
                })((h = e), u))
            )
              return (function (e, t, r, n, i) {
                var o = me();
                return (
                  (o.asyncFactory = e),
                  (o.asyncMeta = { data: t, context: r, children: n, tag: i }),
                  o
                );
              })(h, t, r, n, c);
            (t = t || {}),
              Ar(e),
              s(t.model) &&
                (function (e, t) {
                  var r = (e.model && e.model.prop) || "value",
                    n = (e.model && e.model.event) || "input";
                  (t.attrs || (t.attrs = {}))[r] = t.model.value;
                  var i = t.on || (t.on = {}),
                    a = i[n],
                    l = t.model.callback;
                  s(a)
                    ? (o(a) ? -1 === a.indexOf(l) : a !== l) &&
                      (i[n] = [l].concat(a))
                    : (i[n] = l);
                })(e.options, t);
            var d = (function (e, t, r) {
              var n = t.options.props;
              if (!a(n)) {
                var i = {},
                  o = e.attrs,
                  l = e.props;
                if (s(o) || s(l))
                  for (var c in n) {
                    var u = O(c);
                    qe(i, l, c, u, !0) || qe(i, o, c, u, !1);
                  }
                return i;
              }
            })(t, e);
            if (l(e.options.functional))
              return (function (e, t, r, n, a) {
                var l = e.options,
                  c = {},
                  u = l.props;
                if (s(u)) for (var f in u) c[f] = Kr(f, u, t || i);
                else s(r.attrs) && Er(c, r.attrs), s(r.props) && Er(c, r.props);
                var h = new Mr(r, c, a, n, e),
                  d = l.render.call(null, h._c, h);
                if (d instanceof ge) return Or(d, r, h.parent, l);
                if (o(d)) {
                  for (
                    var p = Ye(d) || [], g = new Array(p.length), m = 0;
                    m < p.length;
                    m++
                  )
                    g[m] = Or(p[m], r, h.parent, l);
                  return g;
                }
              })(e, d, t, r, n);
            var p = t.on;
            if (((t.on = t.nativeOn), l(e.options.abstract))) {
              var g = t.slot;
              (t = {}), g && (t.slot = g);
            }
            !(function (e) {
              for (var t = e.hook || (e.hook = {}), r = 0; r < Ir.length; r++) {
                var n = Ir[r],
                  i = t[n],
                  o = Nr[n];
                i === o || (i && i._merged) || (t[n] = i ? Pr(o, i) : o);
              }
            })(t);
            var v = Rr(e.options) || c;
            return new ge(
              "vue-component-".concat(e.cid).concat(v ? "-".concat(v) : ""),
              t,
              void 0,
              void 0,
              void 0,
              r,
              { Ctor: e, propsData: d, listeners: p, tag: c, children: n },
              h
            );
          }
        }
      }
      function Pr(e, t) {
        var r = function (r, n) {
          e(r, n), t(r, n);
        };
        return (r._merged = !0), r;
      }
      var Hr = D,
        $r = V.optionMergeStrategies;
      function Br(e, t, r) {
        if ((void 0 === r && (r = !0), !t)) return e;
        for (
          var n, i, o, a = he ? Reflect.ownKeys(t) : Object.keys(t), s = 0;
          s < a.length;
          s++
        )
          "__ob__" !== (n = a[s]) &&
            ((i = e[n]),
            (o = t[n]),
            r && S(e, n) ? i !== o && d(i) && d(o) && Br(i, o) : Pe(e, n, o));
        return e;
      }
      function Fr(e, t, r) {
        return r
          ? function () {
              var n = u(t) ? t.call(r, r) : t,
                i = u(e) ? e.call(r, r) : e;
              return n ? Br(n, i) : i;
            }
          : t
          ? e
            ? function () {
                return Br(
                  u(t) ? t.call(this, this) : t,
                  u(e) ? e.call(this, this) : e
                );
              }
            : t
          : e;
      }
      function Ur(e, t) {
        var r = t ? (e ? e.concat(t) : o(t) ? t : [t]) : e;
        return r
          ? (function (e) {
              for (var t = [], r = 0; r < e.length; r++)
                -1 === t.indexOf(e[r]) && t.push(e[r]);
              return t;
            })(r)
          : r;
      }
      function jr(e, t, r, n) {
        var i = Object.create(e || null);
        return t ? N(i, t) : i;
      }
      ($r.data = function (e, t, r) {
        return r ? Fr(e, t, r) : t && "function" != typeof t ? e : Fr(e, t);
      }),
        z.forEach(function (e) {
          $r[e] = Ur;
        }),
        W.forEach(function (e) {
          $r[e + "s"] = jr;
        }),
        ($r.watch = function (e, t, r, n) {
          if ((e === oe && (e = void 0), t === oe && (t = void 0), !t))
            return Object.create(e || null);
          if (!e) return t;
          var i = {};
          for (var a in (N(i, e), t)) {
            var s = i[a],
              l = t[a];
            s && !o(s) && (s = [s]), (i[a] = s ? s.concat(l) : o(l) ? l : [l]);
          }
          return i;
        }),
        ($r.props =
          $r.methods =
          $r.inject =
          $r.computed =
            function (e, t, r, n) {
              if (!e) return t;
              var i = Object.create(null);
              return N(i, e), t && N(i, t), i;
            }),
        ($r.provide = function (e, t) {
          return e
            ? function () {
                var r = Object.create(null);
                return (
                  Br(r, u(e) ? e.call(this) : e),
                  t && Br(r, u(t) ? t.call(this) : t, !1),
                  r
                );
              }
            : t;
        });
      var Wr = function (e, t) {
        return void 0 === t ? e : t;
      };
      function zr(e, t, r) {
        if (
          (u(t) && (t = t.options),
          (function (e, t) {
            var r = e.props;
            if (r) {
              var n,
                i,
                a = {};
              if (o(r))
                for (n = r.length; n--; )
                  "string" == typeof (i = r[n]) && (a[L(i)] = { type: null });
              else if (d(r))
                for (var s in r) (i = r[s]), (a[L(s)] = d(i) ? i : { type: i });
              e.props = a;
            }
          })(t),
          (function (e, t) {
            var r = e.inject;
            if (r) {
              var n = (e.inject = {});
              if (o(r))
                for (var i = 0; i < r.length; i++) n[r[i]] = { from: r[i] };
              else if (d(r))
                for (var a in r) {
                  var s = r[a];
                  n[a] = d(s) ? N({ from: a }, s) : { from: s };
                }
            }
          })(t),
          (function (e) {
            var t = e.directives;
            if (t)
              for (var r in t) {
                var n = t[r];
                u(n) && (t[r] = { bind: n, update: n });
              }
          })(t),
          !t._base && (t.extends && (e = zr(e, t.extends, r)), t.mixins))
        )
          for (var n = 0, i = t.mixins.length; n < i; n++)
            e = zr(e, t.mixins[n], r);
        var a,
          s = {};
        for (a in e) l(a);
        for (a in t) S(e, a) || l(a);
        function l(n) {
          var i = $r[n] || Wr;
          s[n] = i(e[n], t[n], r, n);
        }
        return s;
      }
      function Vr(e, t, r, n) {
        if ("string" == typeof r) {
          var i = e[t];
          if (S(i, r)) return i[r];
          var o = L(r);
          if (S(i, o)) return i[o];
          var a = A(o);
          return S(i, a) ? i[a] : i[r] || i[o] || i[a];
        }
      }
      function Kr(e, t, r, n) {
        var i = t[e],
          o = !S(r, e),
          a = r[e],
          s = Xr(Boolean, i.type);
        if (s > -1)
          if (o && !S(i, "default")) a = !1;
          else if ("" === a || a === O(e)) {
            var l = Xr(String, i.type);
            (l < 0 || s < l) && (a = !0);
          }
        if (void 0 === a) {
          a = (function (e, t, r) {
            if (!S(t, "default")) return;
            var n = t.default;
            0;
            if (
              e &&
              e.$options.propsData &&
              void 0 === e.$options.propsData[r] &&
              void 0 !== e._props[r]
            )
              return e._props[r];
            return u(n) && "Function" !== Yr(t.type) ? n.call(e) : n;
          })(n, i, e);
          var c = Oe;
          Ee(!0), Ie(a), Ee(c);
        }
        return a;
      }
      var qr = /^\s*function (\w+)/;
      function Yr(e) {
        var t = e && e.toString().match(qr);
        return t ? t[1] : "";
      }
      function Gr(e, t) {
        return Yr(e) === Yr(t);
      }
      function Xr(e, t) {
        if (!o(t)) return Gr(t, e) ? 0 : -1;
        for (var r = 0, n = t.length; r < n; r++) if (Gr(t[r], e)) return r;
        return -1;
      }
      function Zr(e) {
        this._init(e);
      }
      function Jr(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function (e) {
          e = e || {};
          var r = this,
            n = r.cid,
            i = e._Ctor || (e._Ctor = {});
          if (i[n]) return i[n];
          var o = Rr(e) || Rr(r.options);
          var a = function (e) {
            this._init(e);
          };
          return (
            ((a.prototype = Object.create(r.prototype)).constructor = a),
            (a.cid = t++),
            (a.options = zr(r.options, e)),
            (a.super = r),
            a.options.props &&
              (function (e) {
                var t = e.options.props;
                for (var r in t) br(e.prototype, "_props", r);
              })(a),
            a.options.computed &&
              (function (e) {
                var t = e.options.computed;
                for (var r in t) Cr(e.prototype, r, t[r]);
              })(a),
            (a.extend = r.extend),
            (a.mixin = r.mixin),
            (a.use = r.use),
            W.forEach(function (e) {
              a[e] = r[e];
            }),
            o && (a.options.components[o] = a),
            (a.superOptions = r.options),
            (a.extendOptions = e),
            (a.sealedOptions = N({}, a.options)),
            (i[n] = a),
            a
          );
        };
      }
      function Qr(e) {
        return e && (Rr(e.Ctor.options) || e.tag);
      }
      function en(e, t) {
        return o(e)
          ? e.indexOf(t) > -1
          : "string" == typeof e
          ? e.split(",").indexOf(t) > -1
          : !!p(e) && e.test(t);
      }
      function tn(e, t) {
        var r = e.cache,
          n = e.keys,
          i = e._vnode;
        for (var o in r) {
          var a = r[o];
          if (a) {
            var s = a.name;
            s && !t(s) && rn(r, o, n, i);
          }
        }
      }
      function rn(e, t, r, n) {
        var i = e[t];
        !i || (n && i.tag === n.tag) || i.componentInstance.$destroy(),
          (e[t] = null),
          C(r, t);
      }
      !(function (e) {
        e.prototype._init = function (e) {
          var t = this;
          (t._uid = Lr++),
            (t._isVue = !0),
            (t.__v_skip = !0),
            (t._scope = new Zt(!0)),
            (t._scope._vm = !0),
            e && e._isComponent
              ? (function (e, t) {
                  var r = (e.$options = Object.create(e.constructor.options)),
                    n = t._parentVnode;
                  (r.parent = t.parent), (r._parentVnode = n);
                  var i = n.componentOptions;
                  (r.propsData = i.propsData),
                    (r._parentListeners = i.listeners),
                    (r._renderChildren = i.children),
                    (r._componentTag = i.tag),
                    t.render &&
                      ((r.render = t.render),
                      (r.staticRenderFns = t.staticRenderFns));
                })(t, e)
              : (t.$options = zr(Ar(t.constructor), e || {}, t)),
            (t._renderProxy = t),
            (t._self = t),
            (function (e) {
              var t = e.$options,
                r = t.parent;
              if (r && !t.abstract) {
                for (; r.$options.abstract && r.$parent; ) r = r.$parent;
                r.$children.push(e);
              }
              (e.$parent = r),
                (e.$root = r ? r.$root : e),
                (e.$children = []),
                (e.$refs = {}),
                (e._provided = r ? r._provided : Object.create(null)),
                (e._watcher = null),
                (e._inactive = null),
                (e._directInactive = !1),
                (e._isMounted = !1),
                (e._isDestroyed = !1),
                (e._isBeingDestroyed = !1);
            })(t),
            (function (e) {
              (e._events = Object.create(null)), (e._hasHookEvent = !1);
              var t = e.$options._parentListeners;
              t && Et(e, t);
            })(t),
            (function (e) {
              (e._vnode = null), (e._staticTrees = null);
              var t = e.$options,
                r = (e.$vnode = t._parentVnode),
                n = r && r.context;
              (e.$slots = pt(t._renderChildren, n)),
                (e.$scopedSlots = r
                  ? vt(e.$parent, r.data.scopedSlots, e.$slots)
                  : i),
                (e._c = function (t, r, n, i) {
                  return Je(e, t, r, n, i, !1);
                }),
                (e.$createElement = function (t, r, n, i) {
                  return Je(e, t, r, n, i, !0);
                });
              var o = r && r.data;
              De(e, "$attrs", (o && o.attrs) || i, null, !0),
                De(e, "$listeners", t._parentListeners || i, null, !0);
            })(t),
            Pt(t, "beforeCreate", void 0, !1),
            (function (e) {
              var t = kr(e.$options.inject, e);
              t &&
                (Ee(!1),
                Object.keys(t).forEach(function (r) {
                  De(e, r, t[r]);
                }),
                Ee(!0));
            })(t),
            wr(t),
            (function (e) {
              var t = e.$options.provide;
              if (t) {
                var r = u(t) ? t.call(e) : t;
                if (!f(r)) return;
                for (
                  var n = Jt(e),
                    i = he ? Reflect.ownKeys(r) : Object.keys(r),
                    o = 0;
                  o < i.length;
                  o++
                ) {
                  var a = i[o];
                  Object.defineProperty(
                    n,
                    a,
                    Object.getOwnPropertyDescriptor(r, a)
                  );
                }
              }
            })(t),
            Pt(t, "created"),
            t.$options.el && t.$mount(t.$options.el);
        };
      })(Zr),
        (function (e) {
          var t = {
              get: function () {
                return this._data;
              },
            },
            r = {
              get: function () {
                return this._props;
              },
            };
          Object.defineProperty(e.prototype, "$data", t),
            Object.defineProperty(e.prototype, "$props", r),
            (e.prototype.$set = Pe),
            (e.prototype.$delete = He),
            (e.prototype.$watch = function (e, t, r) {
              if (d(t)) return Tr(this, e, t, r);
              (r = r || {}).user = !0;
              var n = new vr(this, e, t, r);
              if (r.immediate) {
                var i = 'callback for immediate watcher "'.concat(
                  n.expression,
                  '"'
                );
                Se(), er(t, this, [n.value], this, i), Te();
              }
              return function () {
                n.teardown();
              };
            });
        })(Zr),
        (function (e) {
          var t = /^hook:/;
          (e.prototype.$on = function (e, r) {
            var n = this;
            if (o(e)) for (var i = 0, a = e.length; i < a; i++) n.$on(e[i], r);
            else
              (n._events[e] || (n._events[e] = [])).push(r),
                t.test(e) && (n._hasHookEvent = !0);
            return n;
          }),
            (e.prototype.$once = function (e, t) {
              var r = this;
              function n() {
                r.$off(e, n), t.apply(r, arguments);
              }
              return (n.fn = t), r.$on(e, n), r;
            }),
            (e.prototype.$off = function (e, t) {
              var r = this;
              if (!arguments.length)
                return (r._events = Object.create(null)), r;
              if (o(e)) {
                for (var n = 0, i = e.length; n < i; n++) r.$off(e[n], t);
                return r;
              }
              var a,
                s = r._events[e];
              if (!s) return r;
              if (!t) return (r._events[e] = null), r;
              for (var l = s.length; l--; )
                if ((a = s[l]) === t || a.fn === t) {
                  s.splice(l, 1);
                  break;
                }
              return r;
            }),
            (e.prototype.$emit = function (e) {
              var t = this,
                r = t._events[e];
              if (r) {
                r = r.length > 1 ? R(r) : r;
                for (
                  var n = R(arguments, 1),
                    i = 'event handler for "'.concat(e, '"'),
                    o = 0,
                    a = r.length;
                  o < a;
                  o++
                )
                  er(r[o], t, n, t, i);
              }
              return t;
            });
        })(Zr),
        (function (e) {
          (e.prototype._update = function (e, t) {
            var r = this,
              n = r.$el,
              i = r._vnode,
              o = Nt(r);
            (r._vnode = e),
              (r.$el = i ? r.__patch__(i, e) : r.__patch__(r.$el, e, t, !1)),
              o(),
              n && (n.__vue__ = null),
              r.$el && (r.$el.__vue__ = r);
            for (
              var a = r;
              a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode;

            )
              (a.$parent.$el = a.$el), (a = a.$parent);
          }),
            (e.prototype.$forceUpdate = function () {
              this._watcher && this._watcher.update();
            }),
            (e.prototype.$destroy = function () {
              var e = this;
              if (!e._isBeingDestroyed) {
                Pt(e, "beforeDestroy"), (e._isBeingDestroyed = !0);
                var t = e.$parent;
                !t ||
                  t._isBeingDestroyed ||
                  e.$options.abstract ||
                  C(t.$children, e),
                  e._scope.stop(),
                  e._data.__ob__ && e._data.__ob__.vmCount--,
                  (e._isDestroyed = !0),
                  e.__patch__(e._vnode, null),
                  Pt(e, "destroyed"),
                  e.$off(),
                  e.$el && (e.$el.__vue__ = null),
                  e.$vnode && (e.$vnode.parent = null);
              }
            });
        })(Zr),
        (function (e) {
          dt(e.prototype),
            (e.prototype.$nextTick = function (e) {
              return hr(e, this);
            }),
            (e.prototype._render = function () {
              var e,
                t = this,
                r = t.$options,
                n = r.render,
                i = r._parentVnode;
              i &&
                t._isMounted &&
                ((t.$scopedSlots = vt(
                  t.$parent,
                  i.data.scopedSlots,
                  t.$slots,
                  t.$scopedSlots
                )),
                t._slotsProxy && _t(t._slotsProxy, t.$scopedSlots)),
                (t.$vnode = i);
              try {
                pe(t), (Tt = t), (e = n.call(t._renderProxy, t.$createElement));
              } catch (r) {
                Qt(r, t, "render"), (e = t._vnode);
              } finally {
                (Tt = null), pe();
              }
              return (
                o(e) && 1 === e.length && (e = e[0]),
                e instanceof ge || (e = me()),
                (e.parent = i),
                e
              );
            });
        })(Zr);
      var nn = [String, RegExp, Array],
        on = {
          KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: { include: nn, exclude: nn, max: [String, Number] },
            methods: {
              cacheVNode: function () {
                var e = this.cache,
                  t = this.keys,
                  r = this.vnodeToCache,
                  n = this.keyToCache;
                if (r) {
                  var i = r.tag,
                    o = r.componentInstance,
                    a = r.componentOptions;
                  (e[n] = { name: Qr(a), tag: i, componentInstance: o }),
                    t.push(n),
                    this.max &&
                      t.length > parseInt(this.max) &&
                      rn(e, t[0], t, this._vnode),
                    (this.vnodeToCache = null);
                }
              },
            },
            created: function () {
              (this.cache = Object.create(null)), (this.keys = []);
            },
            destroyed: function () {
              for (var e in this.cache) rn(this.cache, e, this.keys);
            },
            mounted: function () {
              var e = this;
              this.cacheVNode(),
                this.$watch("include", function (t) {
                  tn(e, function (e) {
                    return en(t, e);
                  });
                }),
                this.$watch("exclude", function (t) {
                  tn(e, function (e) {
                    return !en(t, e);
                  });
                });
            },
            updated: function () {
              this.cacheVNode();
            },
            render: function () {
              var e = this.$slots.default,
                t = Lt(e),
                r = t && t.componentOptions;
              if (r) {
                var n = Qr(r),
                  i = this.include,
                  o = this.exclude;
                if ((i && (!n || !en(i, n))) || (o && n && en(o, n))) return t;
                var a = this.cache,
                  s = this.keys,
                  l =
                    null == t.key
                      ? r.Ctor.cid + (r.tag ? "::".concat(r.tag) : "")
                      : t.key;
                a[l]
                  ? ((t.componentInstance = a[l].componentInstance),
                    C(s, l),
                    s.push(l))
                  : ((this.vnodeToCache = t), (this.keyToCache = l)),
                  (t.data.keepAlive = !0);
              }
              return t || (e && e[0]);
            },
          },
        };
      !(function (e) {
        var t = {
          get: function () {
            return V;
          },
        };
        Object.defineProperty(e, "config", t),
          (e.util = {
            warn: Hr,
            extend: N,
            mergeOptions: zr,
            defineReactive: De,
          }),
          (e.set = Pe),
          (e.delete = He),
          (e.nextTick = hr),
          (e.observable = function (e) {
            return Ie(e), e;
          }),
          (e.options = Object.create(null)),
          W.forEach(function (t) {
            e.options[t + "s"] = Object.create(null);
          }),
          (e.options._base = e),
          N(e.options.components, on),
          (function (e) {
            e.use = function (e) {
              var t = this._installedPlugins || (this._installedPlugins = []);
              if (t.indexOf(e) > -1) return this;
              var r = R(arguments, 1);
              return (
                r.unshift(this),
                u(e.install) ? e.install.apply(e, r) : u(e) && e.apply(null, r),
                t.push(e),
                this
              );
            };
          })(e),
          (function (e) {
            e.mixin = function (e) {
              return (this.options = zr(this.options, e)), this;
            };
          })(e),
          Jr(e),
          (function (e) {
            W.forEach(function (t) {
              e[t] = function (e, r) {
                return r
                  ? ("component" === t &&
                      d(r) &&
                      ((r.name = r.name || e),
                      (r = this.options._base.extend(r))),
                    "directive" === t && u(r) && (r = { bind: r, update: r }),
                    (this.options[t + "s"][e] = r),
                    r)
                  : this.options[t + "s"][e];
              };
            });
          })(e);
      })(Zr),
        Object.defineProperty(Zr.prototype, "$isServer", { get: le }),
        Object.defineProperty(Zr.prototype, "$ssrContext", {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        Object.defineProperty(Zr, "FunctionalRenderContext", { value: Mr }),
        (Zr.version = "2.7.14");
      var an = b("style,class"),
        sn = b("input,textarea,option,select,progress"),
        ln = function (e, t, r) {
          return (
            ("value" === r && sn(e) && "button" !== t) ||
            ("selected" === r && "option" === e) ||
            ("checked" === r && "input" === e) ||
            ("muted" === r && "video" === e)
          );
        },
        cn = b("contenteditable,draggable,spellcheck"),
        un = b("events,caret,typing,plaintext-only"),
        fn = function (e, t) {
          return mn(t) || "false" === t
            ? "false"
            : "contenteditable" === e && un(t)
            ? t
            : "true";
        },
        hn = b(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
        ),
        dn = "http://www.w3.org/1999/xlink",
        pn = function (e) {
          return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
        },
        gn = function (e) {
          return pn(e) ? e.slice(6, e.length) : "";
        },
        mn = function (e) {
          return null == e || !1 === e;
        };
      function vn(e) {
        for (var t = e.data, r = e, n = e; s(n.componentInstance); )
          (n = n.componentInstance._vnode) && n.data && (t = yn(n.data, t));
        for (; s((r = r.parent)); ) r && r.data && (t = yn(t, r.data));
        return (function (e, t) {
          if (s(e) || s(t)) return bn(e, wn(t));
          return "";
        })(t.staticClass, t.class);
      }
      function yn(e, t) {
        return {
          staticClass: bn(e.staticClass, t.staticClass),
          class: s(e.class) ? [e.class, t.class] : t.class,
        };
      }
      function bn(e, t) {
        return e ? (t ? e + " " + t : e) : t || "";
      }
      function wn(e) {
        return Array.isArray(e)
          ? (function (e) {
              for (var t, r = "", n = 0, i = e.length; n < i; n++)
                s((t = wn(e[n]))) && "" !== t && (r && (r += " "), (r += t));
              return r;
            })(e)
          : f(e)
          ? (function (e) {
              var t = "";
              for (var r in e) e[r] && (t && (t += " "), (t += r));
              return t;
            })(e)
          : "string" == typeof e
          ? e
          : "";
      }
      var xn = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        },
        Cn = b(
          "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
        ),
        _n = b(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          !0
        ),
        Sn = function (e) {
          return Cn(e) || _n(e);
        };
      function Tn(e) {
        return _n(e) ? "svg" : "math" === e ? "math" : void 0;
      }
      var kn = Object.create(null);
      var Ln = b("text,number,password,search,email,tel,url");
      function An(e) {
        if ("string" == typeof e) {
          var t = document.querySelector(e);
          return t || document.createElement("div");
        }
        return e;
      }
      var Mn = Object.freeze({
          __proto__: null,
          createElement: function (e, t) {
            var r = document.createElement(e);
            return "select" !== e
              ? r
              : (t.data &&
                  t.data.attrs &&
                  void 0 !== t.data.attrs.multiple &&
                  r.setAttribute("multiple", "multiple"),
                r);
          },
          createElementNS: function (e, t) {
            return document.createElementNS(xn[e], t);
          },
          createTextNode: function (e) {
            return document.createTextNode(e);
          },
          createComment: function (e) {
            return document.createComment(e);
          },
          insertBefore: function (e, t, r) {
            e.insertBefore(t, r);
          },
          removeChild: function (e, t) {
            e.removeChild(t);
          },
          appendChild: function (e, t) {
            e.appendChild(t);
          },
          parentNode: function (e) {
            return e.parentNode;
          },
          nextSibling: function (e) {
            return e.nextSibling;
          },
          tagName: function (e) {
            return e.tagName;
          },
          setTextContent: function (e, t) {
            e.textContent = t;
          },
          setStyleScope: function (e, t) {
            e.setAttribute(t, "");
          },
        }),
        On = {
          create: function (e, t) {
            En(t);
          },
          update: function (e, t) {
            e.data.ref !== t.data.ref && (En(e, !0), En(t));
          },
          destroy: function (e) {
            En(e, !0);
          },
        };
      function En(e, t) {
        var r = e.data.ref;
        if (s(r)) {
          var n = e.context,
            i = e.componentInstance || e.elm,
            a = t ? null : i,
            l = t ? void 0 : i;
          if (u(r)) er(r, n, [a], n, "template ref function");
          else {
            var c = e.data.refInFor,
              f = "string" == typeof r || "number" == typeof r,
              h = Ue(r),
              d = n.$refs;
            if (f || h)
              if (c) {
                var p = f ? d[r] : r.value;
                t
                  ? o(p) && C(p, i)
                  : o(p)
                  ? p.includes(i) || p.push(i)
                  : f
                  ? ((d[r] = [i]), Rn(n, r, d[r]))
                  : (r.value = [i]);
              } else if (f) {
                if (t && d[r] !== i) return;
                (d[r] = l), Rn(n, r, a);
              } else if (h) {
                if (t && r.value !== i) return;
                r.value = a;
              } else 0;
          }
        }
      }
      function Rn(e, t, r) {
        var n = e._setupState;
        n && S(n, t) && (Ue(n[t]) ? (n[t].value = r) : (n[t] = r));
      }
      var Nn = new ge("", {}, []),
        In = ["create", "activate", "update", "remove", "destroy"];
      function Dn(e, t) {
        return (
          e.key === t.key &&
          e.asyncFactory === t.asyncFactory &&
          ((e.tag === t.tag &&
            e.isComment === t.isComment &&
            s(e.data) === s(t.data) &&
            (function (e, t) {
              if ("input" !== e.tag) return !0;
              var r,
                n = s((r = e.data)) && s((r = r.attrs)) && r.type,
                i = s((r = t.data)) && s((r = r.attrs)) && r.type;
              return n === i || (Ln(n) && Ln(i));
            })(e, t)) ||
            (l(e.isAsyncPlaceholder) && a(t.asyncFactory.error)))
        );
      }
      function Pn(e, t, r) {
        var n,
          i,
          o = {};
        for (n = t; n <= r; ++n) s((i = e[n].key)) && (o[i] = n);
        return o;
      }
      var Hn = {
        create: $n,
        update: $n,
        destroy: function (e) {
          $n(e, Nn);
        },
      };
      function $n(e, t) {
        (e.data.directives || t.data.directives) &&
          (function (e, t) {
            var r,
              n,
              i,
              o = e === Nn,
              a = t === Nn,
              s = Fn(e.data.directives, e.context),
              l = Fn(t.data.directives, t.context),
              c = [],
              u = [];
            for (r in l)
              (n = s[r]),
                (i = l[r]),
                n
                  ? ((i.oldValue = n.value),
                    (i.oldArg = n.arg),
                    jn(i, "update", t, e),
                    i.def && i.def.componentUpdated && u.push(i))
                  : (jn(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
            if (c.length) {
              var f = function () {
                for (var r = 0; r < c.length; r++) jn(c[r], "inserted", t, e);
              };
              o ? Ke(t, "insert", f) : f();
            }
            u.length &&
              Ke(t, "postpatch", function () {
                for (var r = 0; r < u.length; r++)
                  jn(u[r], "componentUpdated", t, e);
              });
            if (!o) for (r in s) l[r] || jn(s[r], "unbind", e, e, a);
          })(e, t);
      }
      var Bn = Object.create(null);
      function Fn(e, t) {
        var r,
          n,
          i = Object.create(null);
        if (!e) return i;
        for (r = 0; r < e.length; r++) {
          if (
            ((n = e[r]).modifiers || (n.modifiers = Bn),
            (i[Un(n)] = n),
            t._setupState && t._setupState.__sfc)
          ) {
            var o = n.def || Vr(t, "_setupState", "v-" + n.name);
            n.def = "function" == typeof o ? { bind: o, update: o } : o;
          }
          n.def = n.def || Vr(t.$options, "directives", n.name);
        }
        return i;
      }
      function Un(e) {
        return (
          e.rawName ||
          ""
            .concat(e.name, ".")
            .concat(Object.keys(e.modifiers || {}).join("."))
        );
      }
      function jn(e, t, r, n, i) {
        var o = e.def && e.def[t];
        if (o)
          try {
            o(r.elm, e, r, n, i);
          } catch (n) {
            Qt(
              n,
              r.context,
              "directive ".concat(e.name, " ").concat(t, " hook")
            );
          }
      }
      var Wn = [On, Hn];
      function zn(e, t) {
        var r = t.componentOptions;
        if (
          !(
            (s(r) && !1 === r.Ctor.options.inheritAttrs) ||
            (a(e.data.attrs) && a(t.data.attrs))
          )
        ) {
          var n,
            i,
            o = t.elm,
            c = e.data.attrs || {},
            u = t.data.attrs || {};
          for (n in ((s(u.__ob__) || l(u._v_attr_proxy)) &&
            (u = t.data.attrs = N({}, u)),
          u))
            (i = u[n]), c[n] !== i && Vn(o, n, i, t.data.pre);
          for (n in ((Q || te) &&
            u.value !== c.value &&
            Vn(o, "value", u.value),
          c))
            a(u[n]) &&
              (pn(n)
                ? o.removeAttributeNS(dn, gn(n))
                : cn(n) || o.removeAttribute(n));
        }
      }
      function Vn(e, t, r, n) {
        n || e.tagName.indexOf("-") > -1
          ? Kn(e, t, r)
          : hn(t)
          ? mn(r)
            ? e.removeAttribute(t)
            : ((r =
                "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t),
              e.setAttribute(t, r))
          : cn(t)
          ? e.setAttribute(t, fn(t, r))
          : pn(t)
          ? mn(r)
            ? e.removeAttributeNS(dn, gn(t))
            : e.setAttributeNS(dn, t, r)
          : Kn(e, t, r);
      }
      function Kn(e, t, r) {
        if (mn(r)) e.removeAttribute(t);
        else {
          if (
            Q &&
            !ee &&
            "TEXTAREA" === e.tagName &&
            "placeholder" === t &&
            "" !== r &&
            !e.__ieph
          ) {
            var n = function (t) {
              t.stopImmediatePropagation(), e.removeEventListener("input", n);
            };
            e.addEventListener("input", n), (e.__ieph = !0);
          }
          e.setAttribute(t, r);
        }
      }
      var qn = { create: zn, update: zn };
      function Yn(e, t) {
        var r = t.elm,
          n = t.data,
          i = e.data;
        if (
          !(
            a(n.staticClass) &&
            a(n.class) &&
            (a(i) || (a(i.staticClass) && a(i.class)))
          )
        ) {
          var o = vn(t),
            l = r._transitionClasses;
          s(l) && (o = bn(o, wn(l))),
            o !== r._prevClass &&
              (r.setAttribute("class", o), (r._prevClass = o));
        }
      }
      var Gn,
        Xn,
        Zn,
        Jn,
        Qn,
        ei,
        ti = { create: Yn, update: Yn },
        ri = /[\w).+\-_$\]]/;
      function ni(e) {
        var t,
          r,
          n,
          i,
          o,
          a = !1,
          s = !1,
          l = !1,
          c = !1,
          u = 0,
          f = 0,
          h = 0,
          d = 0;
        for (n = 0; n < e.length; n++)
          if (((r = t), (t = e.charCodeAt(n)), a))
            39 === t && 92 !== r && (a = !1);
          else if (s) 34 === t && 92 !== r && (s = !1);
          else if (l) 96 === t && 92 !== r && (l = !1);
          else if (c) 47 === t && 92 !== r && (c = !1);
          else if (
            124 !== t ||
            124 === e.charCodeAt(n + 1) ||
            124 === e.charCodeAt(n - 1) ||
            u ||
            f ||
            h
          ) {
            switch (t) {
              case 34:
                s = !0;
                break;
              case 39:
                a = !0;
                break;
              case 96:
                l = !0;
                break;
              case 40:
                h++;
                break;
              case 41:
                h--;
                break;
              case 91:
                f++;
                break;
              case 93:
                f--;
                break;
              case 123:
                u++;
                break;
              case 125:
                u--;
            }
            if (47 === t) {
              for (
                var p = n - 1, g = void 0;
                p >= 0 && " " === (g = e.charAt(p));
                p--
              );
              (g && ri.test(g)) || (c = !0);
            }
          } else void 0 === i ? ((d = n + 1), (i = e.slice(0, n).trim())) : m();
        function m() {
          (o || (o = [])).push(e.slice(d, n).trim()), (d = n + 1);
        }
        if ((void 0 === i ? (i = e.slice(0, n).trim()) : 0 !== d && m(), o))
          for (n = 0; n < o.length; n++) i = ii(i, o[n]);
        return i;
      }
      function ii(e, t) {
        var r = t.indexOf("(");
        if (r < 0) return '_f("'.concat(t, '")(').concat(e, ")");
        var n = t.slice(0, r),
          i = t.slice(r + 1);
        return '_f("'
          .concat(n, '")(')
          .concat(e)
          .concat(")" !== i ? "," + i : i);
      }
      function oi(e, t) {
        console.error("[Vue compiler]: ".concat(e));
      }
      function ai(e, t) {
        return e
          ? e
              .map(function (e) {
                return e[t];
              })
              .filter(function (e) {
                return e;
              })
          : [];
      }
      function si(e, t, r, n, i) {
        (e.props || (e.props = [])).push(
          vi({ name: t, value: r, dynamic: i }, n)
        ),
          (e.plain = !1);
      }
      function li(e, t, r, n, i) {
        (i
          ? e.dynamicAttrs || (e.dynamicAttrs = [])
          : e.attrs || (e.attrs = [])
        ).push(vi({ name: t, value: r, dynamic: i }, n)),
          (e.plain = !1);
      }
      function ci(e, t, r, n) {
        (e.attrsMap[t] = r), e.attrsList.push(vi({ name: t, value: r }, n));
      }
      function ui(e, t, r, n, i, o, a, s) {
        (e.directives || (e.directives = [])).push(
          vi(
            {
              name: t,
              rawName: r,
              value: n,
              arg: i,
              isDynamicArg: o,
              modifiers: a,
            },
            s
          )
        ),
          (e.plain = !1);
      }
      function fi(e, t, r) {
        return r ? "_p(".concat(t, ',"').concat(e, '")') : e + t;
      }
      function hi(e, t, r, n, o, a, s, l) {
        var c;
        (n = n || i).right
          ? l
            ? (t = "(".concat(t, ")==='click'?'contextmenu':(").concat(t, ")"))
            : "click" === t && ((t = "contextmenu"), delete n.right)
          : n.middle &&
            (l
              ? (t = "(".concat(t, ")==='click'?'mouseup':(").concat(t, ")"))
              : "click" === t && (t = "mouseup")),
          n.capture && (delete n.capture, (t = fi("!", t, l))),
          n.once && (delete n.once, (t = fi("~", t, l))),
          n.passive && (delete n.passive, (t = fi("&", t, l))),
          n.native
            ? (delete n.native, (c = e.nativeEvents || (e.nativeEvents = {})))
            : (c = e.events || (e.events = {}));
        var u = vi({ value: r.trim(), dynamic: l }, s);
        n !== i && (u.modifiers = n);
        var f = c[t];
        Array.isArray(f)
          ? o
            ? f.unshift(u)
            : f.push(u)
          : (c[t] = f ? (o ? [u, f] : [f, u]) : u),
          (e.plain = !1);
      }
      function di(e, t) {
        return (
          e.rawAttrsMap[":" + t] ||
          e.rawAttrsMap["v-bind:" + t] ||
          e.rawAttrsMap[t]
        );
      }
      function pi(e, t, r) {
        var n = gi(e, ":" + t) || gi(e, "v-bind:" + t);
        if (null != n) return ni(n);
        if (!1 !== r) {
          var i = gi(e, t);
          if (null != i) return JSON.stringify(i);
        }
      }
      function gi(e, t, r) {
        var n;
        if (null != (n = e.attrsMap[t]))
          for (var i = e.attrsList, o = 0, a = i.length; o < a; o++)
            if (i[o].name === t) {
              i.splice(o, 1);
              break;
            }
        return r && delete e.attrsMap[t], n;
      }
      function mi(e, t) {
        for (var r = e.attrsList, n = 0, i = r.length; n < i; n++) {
          var o = r[n];
          if (t.test(o.name)) return r.splice(n, 1), o;
        }
      }
      function vi(e, t) {
        return (
          t &&
            (null != t.start && (e.start = t.start),
            null != t.end && (e.end = t.end)),
          e
        );
      }
      function yi(e, t, r) {
        var n = r || {},
          i = n.number,
          o = "$$v";
        n.trim &&
          (o =
            "(typeof ".concat("$$v", " === 'string'") +
            "? ".concat("$$v", ".trim()") +
            ": ".concat("$$v", ")")),
          i && (o = "_n(".concat(o, ")"));
        var a = bi(t, o);
        e.model = {
          value: "(".concat(t, ")"),
          expression: JSON.stringify(t),
          callback: "function (".concat("$$v", ") {").concat(a, "}"),
        };
      }
      function bi(e, t) {
        var r = (function (e) {
          if (
            ((e = e.trim()),
            (Gn = e.length),
            e.indexOf("[") < 0 || e.lastIndexOf("]") < Gn - 1)
          )
            return (Jn = e.lastIndexOf(".")) > -1
              ? { exp: e.slice(0, Jn), key: '"' + e.slice(Jn + 1) + '"' }
              : { exp: e, key: null };
          (Xn = e), (Jn = Qn = ei = 0);
          for (; !xi(); ) Ci((Zn = wi())) ? Si(Zn) : 91 === Zn && _i(Zn);
          return { exp: e.slice(0, Qn), key: e.slice(Qn + 1, ei) };
        })(e);
        return null === r.key
          ? "".concat(e, "=").concat(t)
          : "$set(".concat(r.exp, ", ").concat(r.key, ", ").concat(t, ")");
      }
      function wi() {
        return Xn.charCodeAt(++Jn);
      }
      function xi() {
        return Jn >= Gn;
      }
      function Ci(e) {
        return 34 === e || 39 === e;
      }
      function _i(e) {
        var t = 1;
        for (Qn = Jn; !xi(); )
          if (Ci((e = wi()))) Si(e);
          else if ((91 === e && t++, 93 === e && t--, 0 === t)) {
            ei = Jn;
            break;
          }
      }
      function Si(e) {
        for (var t = e; !xi() && (e = wi()) !== t; );
      }
      var Ti,
        ki = "__r",
        Li = "__c";
      function Ai(e, t, r) {
        var n = Ti;
        return function i() {
          null !== t.apply(null, arguments) && Ei(e, i, r, n);
        };
      }
      var Mi = ir && !(ie && Number(ie[1]) <= 53);
      function Oi(e, t, r, n) {
        if (Mi) {
          var i = Wt,
            o = t;
          t = o._wrapper = function (e) {
            if (
              e.target === e.currentTarget ||
              e.timeStamp >= i ||
              e.timeStamp <= 0 ||
              e.target.ownerDocument !== document
            )
              return o.apply(this, arguments);
          };
        }
        Ti.addEventListener(e, t, ae ? { capture: r, passive: n } : r);
      }
      function Ei(e, t, r, n) {
        (n || Ti).removeEventListener(e, t._wrapper || t, r);
      }
      function Ri(e, t) {
        if (!a(e.data.on) || !a(t.data.on)) {
          var r = t.data.on || {},
            n = e.data.on || {};
          (Ti = t.elm || e.elm),
            (function (e) {
              if (s(e[ki])) {
                var t = Q ? "change" : "input";
                (e[t] = [].concat(e[ki], e[t] || [])), delete e[ki];
              }
              s(e[Li]) &&
                ((e.change = [].concat(e[Li], e.change || [])), delete e[Li]);
            })(r),
            Ve(r, n, Oi, Ei, Ai, t.context),
            (Ti = void 0);
        }
      }
      var Ni,
        Ii = {
          create: Ri,
          update: Ri,
          destroy: function (e) {
            return Ri(e, Nn);
          },
        };
      function Di(e, t) {
        if (!a(e.data.domProps) || !a(t.data.domProps)) {
          var r,
            n,
            i = t.elm,
            o = e.data.domProps || {},
            c = t.data.domProps || {};
          for (r in ((s(c.__ob__) || l(c._v_attr_proxy)) &&
            (c = t.data.domProps = N({}, c)),
          o))
            r in c || (i[r] = "");
          for (r in c) {
            if (((n = c[r]), "textContent" === r || "innerHTML" === r)) {
              if ((t.children && (t.children.length = 0), n === o[r])) continue;
              1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
            }
            if ("value" === r && "PROGRESS" !== i.tagName) {
              i._value = n;
              var u = a(n) ? "" : String(n);
              Pi(i, u) && (i.value = u);
            } else if ("innerHTML" === r && _n(i.tagName) && a(i.innerHTML)) {
              (Ni = Ni || document.createElement("div")).innerHTML =
                "<svg>".concat(n, "</svg>");
              for (var f = Ni.firstChild; i.firstChild; )
                i.removeChild(i.firstChild);
              for (; f.firstChild; ) i.appendChild(f.firstChild);
            } else if (n !== o[r])
              try {
                i[r] = n;
              } catch (e) {}
          }
        }
      }
      function Pi(e, t) {
        return (
          !e.composing &&
          ("OPTION" === e.tagName ||
            (function (e, t) {
              var r = !0;
              try {
                r = document.activeElement !== e;
              } catch (e) {}
              return r && e.value !== t;
            })(e, t) ||
            (function (e, t) {
              var r = e.value,
                n = e._vModifiers;
              if (s(n)) {
                if (n.number) return y(r) !== y(t);
                if (n.trim) return r.trim() !== t.trim();
              }
              return r !== t;
            })(e, t))
        );
      }
      var Hi = { create: Di, update: Di },
        $i = T(function (e) {
          var t = {},
            r = /:(.+)/;
          return (
            e.split(/;(?![^(]*\))/g).forEach(function (e) {
              if (e) {
                var n = e.split(r);
                n.length > 1 && (t[n[0].trim()] = n[1].trim());
              }
            }),
            t
          );
        });
      function Bi(e) {
        var t = Fi(e.style);
        return e.staticStyle ? N(e.staticStyle, t) : t;
      }
      function Fi(e) {
        return Array.isArray(e) ? I(e) : "string" == typeof e ? $i(e) : e;
      }
      var Ui,
        ji = /^--/,
        Wi = /\s*!important$/,
        zi = function (e, t, r) {
          if (ji.test(t)) e.style.setProperty(t, r);
          else if (Wi.test(r))
            e.style.setProperty(O(t), r.replace(Wi, ""), "important");
          else {
            var n = Ki(t);
            if (Array.isArray(r))
              for (var i = 0, o = r.length; i < o; i++) e.style[n] = r[i];
            else e.style[n] = r;
          }
        },
        Vi = ["Webkit", "Moz", "ms"],
        Ki = T(function (e) {
          if (
            ((Ui = Ui || document.createElement("div").style),
            "filter" !== (e = L(e)) && e in Ui)
          )
            return e;
          for (
            var t = e.charAt(0).toUpperCase() + e.slice(1), r = 0;
            r < Vi.length;
            r++
          ) {
            var n = Vi[r] + t;
            if (n in Ui) return n;
          }
        });
      function qi(e, t) {
        var r = t.data,
          n = e.data;
        if (
          !(a(r.staticStyle) && a(r.style) && a(n.staticStyle) && a(n.style))
        ) {
          var i,
            o,
            l = t.elm,
            c = n.staticStyle,
            u = n.normalizedStyle || n.style || {},
            f = c || u,
            h = Fi(t.data.style) || {};
          t.data.normalizedStyle = s(h.__ob__) ? N({}, h) : h;
          var d = (function (e, t) {
            var r,
              n = {};
            if (t)
              for (var i = e; i.componentInstance; )
                (i = i.componentInstance._vnode) &&
                  i.data &&
                  (r = Bi(i.data)) &&
                  N(n, r);
            (r = Bi(e.data)) && N(n, r);
            for (var o = e; (o = o.parent); )
              o.data && (r = Bi(o.data)) && N(n, r);
            return n;
          })(t, !0);
          for (o in f) a(d[o]) && zi(l, o, "");
          for (o in d) (i = d[o]) !== f[o] && zi(l, o, null == i ? "" : i);
        }
      }
      var Yi = { create: qi, update: qi },
        Gi = /\s+/;
      function Xi(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(" ") > -1
              ? t.split(Gi).forEach(function (t) {
                  return e.classList.add(t);
                })
              : e.classList.add(t);
          else {
            var r = " ".concat(e.getAttribute("class") || "", " ");
            r.indexOf(" " + t + " ") < 0 &&
              e.setAttribute("class", (r + t).trim());
          }
      }
      function Zi(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(" ") > -1
              ? t.split(Gi).forEach(function (t) {
                  return e.classList.remove(t);
                })
              : e.classList.remove(t),
              e.classList.length || e.removeAttribute("class");
          else {
            for (
              var r = " ".concat(e.getAttribute("class") || "", " "),
                n = " " + t + " ";
              r.indexOf(n) >= 0;

            )
              r = r.replace(n, " ");
            (r = r.trim())
              ? e.setAttribute("class", r)
              : e.removeAttribute("class");
          }
      }
      function Ji(e) {
        if (e) {
          if ("object" == typeof e) {
            var t = {};
            return !1 !== e.css && N(t, Qi(e.name || "v")), N(t, e), t;
          }
          return "string" == typeof e ? Qi(e) : void 0;
        }
      }
      var Qi = T(function (e) {
          return {
            enterClass: "".concat(e, "-enter"),
            enterToClass: "".concat(e, "-enter-to"),
            enterActiveClass: "".concat(e, "-enter-active"),
            leaveClass: "".concat(e, "-leave"),
            leaveToClass: "".concat(e, "-leave-to"),
            leaveActiveClass: "".concat(e, "-leave-active"),
          };
        }),
        eo = Z && !ee,
        to = "transition",
        ro = "animation",
        no = "transition",
        io = "transitionend",
        oo = "animation",
        ao = "animationend";
      eo &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((no = "WebkitTransition"), (io = "webkitTransitionEnd")),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((oo = "WebkitAnimation"), (ao = "webkitAnimationEnd")));
      var so = Z
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function (e) {
            return e();
          };
      function lo(e) {
        so(function () {
          so(e);
        });
      }
      function co(e, t) {
        var r = e._transitionClasses || (e._transitionClasses = []);
        r.indexOf(t) < 0 && (r.push(t), Xi(e, t));
      }
      function uo(e, t) {
        e._transitionClasses && C(e._transitionClasses, t), Zi(e, t);
      }
      function fo(e, t, r) {
        var n = po(e, t),
          i = n.type,
          o = n.timeout,
          a = n.propCount;
        if (!i) return r();
        var s = i === to ? io : ao,
          l = 0,
          c = function () {
            e.removeEventListener(s, u), r();
          },
          u = function (t) {
            t.target === e && ++l >= a && c();
          };
        setTimeout(function () {
          l < a && c();
        }, o + 1),
          e.addEventListener(s, u);
      }
      var ho = /\b(transform|all)(,|$)/;
      function po(e, t) {
        var r,
          n = window.getComputedStyle(e),
          i = (n[no + "Delay"] || "").split(", "),
          o = (n[no + "Duration"] || "").split(", "),
          a = go(i, o),
          s = (n[oo + "Delay"] || "").split(", "),
          l = (n[oo + "Duration"] || "").split(", "),
          c = go(s, l),
          u = 0,
          f = 0;
        return (
          t === to
            ? a > 0 && ((r = to), (u = a), (f = o.length))
            : t === ro
            ? c > 0 && ((r = ro), (u = c), (f = l.length))
            : (f = (r = (u = Math.max(a, c)) > 0 ? (a > c ? to : ro) : null)
                ? r === to
                  ? o.length
                  : l.length
                : 0),
          {
            type: r,
            timeout: u,
            propCount: f,
            hasTransform: r === to && ho.test(n[no + "Property"]),
          }
        );
      }
      function go(e, t) {
        for (; e.length < t.length; ) e = e.concat(e);
        return Math.max.apply(
          null,
          t.map(function (t, r) {
            return mo(t) + mo(e[r]);
          })
        );
      }
      function mo(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
      }
      function vo(e, t) {
        var r = e.elm;
        s(r._leaveCb) && ((r._leaveCb.cancelled = !0), r._leaveCb());
        var n = Ji(e.data.transition);
        if (!a(n) && !s(r._enterCb) && 1 === r.nodeType) {
          for (
            var i = n.css,
              o = n.type,
              l = n.enterClass,
              c = n.enterToClass,
              h = n.enterActiveClass,
              d = n.appearClass,
              p = n.appearToClass,
              g = n.appearActiveClass,
              m = n.beforeEnter,
              v = n.enter,
              b = n.afterEnter,
              w = n.enterCancelled,
              x = n.beforeAppear,
              C = n.appear,
              _ = n.afterAppear,
              S = n.appearCancelled,
              T = n.duration,
              k = Rt,
              L = Rt.$vnode;
            L && L.parent;

          )
            (k = L.context), (L = L.parent);
          var A = !k._isMounted || !e.isRootInsert;
          if (!A || C || "" === C) {
            var M = A && d ? d : l,
              O = A && g ? g : h,
              E = A && p ? p : c,
              R = (A && x) || m,
              N = A && u(C) ? C : v,
              I = (A && _) || b,
              D = (A && S) || w,
              P = y(f(T) ? T.enter : T);
            0;
            var H = !1 !== i && !ee,
              $ = wo(N),
              B = (r._enterCb = F(function () {
                H && (uo(r, E), uo(r, O)),
                  B.cancelled ? (H && uo(r, M), D && D(r)) : I && I(r),
                  (r._enterCb = null);
              }));
            e.data.show ||
              Ke(e, "insert", function () {
                var t = r.parentNode,
                  n = t && t._pending && t._pending[e.key];
                n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(),
                  N && N(r, B);
              }),
              R && R(r),
              H &&
                (co(r, M),
                co(r, O),
                lo(function () {
                  uo(r, M),
                    B.cancelled ||
                      (co(r, E), $ || (bo(P) ? setTimeout(B, P) : fo(r, o, B)));
                })),
              e.data.show && (t && t(), N && N(r, B)),
              H || $ || B();
          }
        }
      }
      function yo(e, t) {
        var r = e.elm;
        s(r._enterCb) && ((r._enterCb.cancelled = !0), r._enterCb());
        var n = Ji(e.data.transition);
        if (a(n) || 1 !== r.nodeType) return t();
        if (!s(r._leaveCb)) {
          var i = n.css,
            o = n.type,
            l = n.leaveClass,
            c = n.leaveToClass,
            u = n.leaveActiveClass,
            h = n.beforeLeave,
            d = n.leave,
            p = n.afterLeave,
            g = n.leaveCancelled,
            m = n.delayLeave,
            v = n.duration,
            b = !1 !== i && !ee,
            w = wo(d),
            x = y(f(v) ? v.leave : v);
          0;
          var C = (r._leaveCb = F(function () {
            r.parentNode &&
              r.parentNode._pending &&
              (r.parentNode._pending[e.key] = null),
              b && (uo(r, c), uo(r, u)),
              C.cancelled ? (b && uo(r, l), g && g(r)) : (t(), p && p(r)),
              (r._leaveCb = null);
          }));
          m ? m(_) : _();
        }
        function _() {
          C.cancelled ||
            (!e.data.show &&
              r.parentNode &&
              ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] =
                e),
            h && h(r),
            b &&
              (co(r, l),
              co(r, u),
              lo(function () {
                uo(r, l),
                  C.cancelled ||
                    (co(r, c), w || (bo(x) ? setTimeout(C, x) : fo(r, o, C)));
              })),
            d && d(r, C),
            b || w || C());
        }
      }
      function bo(e) {
        return "number" == typeof e && !isNaN(e);
      }
      function wo(e) {
        if (a(e)) return !1;
        var t = e.fns;
        return s(t)
          ? wo(Array.isArray(t) ? t[0] : t)
          : (e._length || e.length) > 1;
      }
      function xo(e, t) {
        !0 !== t.data.show && vo(t);
      }
      var Co = (function (e) {
        var t,
          r,
          n = {},
          i = e.modules,
          u = e.nodeOps;
        for (t = 0; t < In.length; ++t)
          for (n[In[t]] = [], r = 0; r < i.length; ++r)
            s(i[r][In[t]]) && n[In[t]].push(i[r][In[t]]);
        function f(e) {
          var t = u.parentNode(e);
          s(t) && u.removeChild(t, e);
        }
        function h(e, t, r, i, o, a, c) {
          if (
            (s(e.elm) && s(a) && (e = a[c] = ye(e)),
            (e.isRootInsert = !o),
            !(function (e, t, r, i) {
              var o = e.data;
              if (s(o)) {
                var a = s(e.componentInstance) && o.keepAlive;
                if (
                  (s((o = o.hook)) && s((o = o.init)) && o(e, !1),
                  s(e.componentInstance))
                )
                  return (
                    d(e, t),
                    p(r, e.elm, i),
                    l(a) &&
                      (function (e, t, r, i) {
                        for (var o, a = e; a.componentInstance; )
                          if (
                            ((a = a.componentInstance._vnode),
                            s((o = a.data)) && s((o = o.transition)))
                          ) {
                            for (o = 0; o < n.activate.length; ++o)
                              n.activate[o](Nn, a);
                            t.push(a);
                            break;
                          }
                        p(r, e.elm, i);
                      })(e, t, r, i),
                    !0
                  );
              }
            })(e, t, r, i))
          ) {
            var f = e.data,
              h = e.children,
              m = e.tag;
            s(m)
              ? ((e.elm = e.ns
                  ? u.createElementNS(e.ns, m)
                  : u.createElement(m, e)),
                y(e),
                g(e, h, t),
                s(f) && v(e, t),
                p(r, e.elm, i))
              : l(e.isComment)
              ? ((e.elm = u.createComment(e.text)), p(r, e.elm, i))
              : ((e.elm = u.createTextNode(e.text)), p(r, e.elm, i));
          }
        }
        function d(e, t) {
          s(e.data.pendingInsert) &&
            (t.push.apply(t, e.data.pendingInsert),
            (e.data.pendingInsert = null)),
            (e.elm = e.componentInstance.$el),
            m(e) ? (v(e, t), y(e)) : (En(e), t.push(e));
        }
        function p(e, t, r) {
          s(e) &&
            (s(r)
              ? u.parentNode(r) === e && u.insertBefore(e, t, r)
              : u.appendChild(e, t));
        }
        function g(e, t, r) {
          if (o(t))
            for (var n = 0; n < t.length; ++n)
              h(t[n], r, e.elm, null, !0, t, n);
          else
            c(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)));
        }
        function m(e) {
          for (; e.componentInstance; ) e = e.componentInstance._vnode;
          return s(e.tag);
        }
        function v(e, r) {
          for (var i = 0; i < n.create.length; ++i) n.create[i](Nn, e);
          s((t = e.data.hook)) &&
            (s(t.create) && t.create(Nn, e), s(t.insert) && r.push(e));
        }
        function y(e) {
          var t;
          if (s((t = e.fnScopeId))) u.setStyleScope(e.elm, t);
          else
            for (var r = e; r; )
              s((t = r.context)) &&
                s((t = t.$options._scopeId)) &&
                u.setStyleScope(e.elm, t),
                (r = r.parent);
          s((t = Rt)) &&
            t !== e.context &&
            t !== e.fnContext &&
            s((t = t.$options._scopeId)) &&
            u.setStyleScope(e.elm, t);
        }
        function w(e, t, r, n, i, o) {
          for (; n <= i; ++n) h(r[n], o, e, t, !1, r, n);
        }
        function x(e) {
          var t,
            r,
            i = e.data;
          if (s(i))
            for (
              s((t = i.hook)) && s((t = t.destroy)) && t(e), t = 0;
              t < n.destroy.length;
              ++t
            )
              n.destroy[t](e);
          if (s((t = e.children)))
            for (r = 0; r < e.children.length; ++r) x(e.children[r]);
        }
        function C(e, t, r) {
          for (; t <= r; ++t) {
            var n = e[t];
            s(n) && (s(n.tag) ? (_(n), x(n)) : f(n.elm));
          }
        }
        function _(e, t) {
          if (s(t) || s(e.data)) {
            var r,
              i = n.remove.length + 1;
            for (
              s(t)
                ? (t.listeners += i)
                : (t = (function (e, t) {
                    function r() {
                      0 == --r.listeners && f(e);
                    }
                    return (r.listeners = t), r;
                  })(e.elm, i)),
                s((r = e.componentInstance)) &&
                  s((r = r._vnode)) &&
                  s(r.data) &&
                  _(r, t),
                r = 0;
              r < n.remove.length;
              ++r
            )
              n.remove[r](e, t);
            s((r = e.data.hook)) && s((r = r.remove)) ? r(e, t) : t();
          } else f(e.elm);
        }
        function S(e, t, r, n) {
          for (var i = r; i < n; i++) {
            var o = t[i];
            if (s(o) && Dn(e, o)) return i;
          }
        }
        function T(e, t, r, i, o, c) {
          if (e !== t) {
            s(t.elm) && s(i) && (t = i[o] = ye(t));
            var f = (t.elm = e.elm);
            if (l(e.isAsyncPlaceholder))
              s(t.asyncFactory.resolved)
                ? A(e.elm, t, r)
                : (t.isAsyncPlaceholder = !0);
            else if (
              l(t.isStatic) &&
              l(e.isStatic) &&
              t.key === e.key &&
              (l(t.isCloned) || l(t.isOnce))
            )
              t.componentInstance = e.componentInstance;
            else {
              var d,
                p = t.data;
              s(p) && s((d = p.hook)) && s((d = d.prepatch)) && d(e, t);
              var g = e.children,
                v = t.children;
              if (s(p) && m(t)) {
                for (d = 0; d < n.update.length; ++d) n.update[d](e, t);
                s((d = p.hook)) && s((d = d.update)) && d(e, t);
              }
              a(t.text)
                ? s(g) && s(v)
                  ? g !== v &&
                    (function (e, t, r, n, i) {
                      for (
                        var o,
                          l,
                          c,
                          f = 0,
                          d = 0,
                          p = t.length - 1,
                          g = t[0],
                          m = t[p],
                          v = r.length - 1,
                          y = r[0],
                          b = r[v],
                          x = !i;
                        f <= p && d <= v;

                      )
                        a(g)
                          ? (g = t[++f])
                          : a(m)
                          ? (m = t[--p])
                          : Dn(g, y)
                          ? (T(g, y, n, r, d), (g = t[++f]), (y = r[++d]))
                          : Dn(m, b)
                          ? (T(m, b, n, r, v), (m = t[--p]), (b = r[--v]))
                          : Dn(g, b)
                          ? (T(g, b, n, r, v),
                            x && u.insertBefore(e, g.elm, u.nextSibling(m.elm)),
                            (g = t[++f]),
                            (b = r[--v]))
                          : Dn(m, y)
                          ? (T(m, y, n, r, d),
                            x && u.insertBefore(e, m.elm, g.elm),
                            (m = t[--p]),
                            (y = r[++d]))
                          : (a(o) && (o = Pn(t, f, p)),
                            a((l = s(y.key) ? o[y.key] : S(y, t, f, p)))
                              ? h(y, n, e, g.elm, !1, r, d)
                              : Dn((c = t[l]), y)
                              ? (T(c, y, n, r, d),
                                (t[l] = void 0),
                                x && u.insertBefore(e, c.elm, g.elm))
                              : h(y, n, e, g.elm, !1, r, d),
                            (y = r[++d]));
                      f > p
                        ? w(e, a(r[v + 1]) ? null : r[v + 1].elm, r, d, v, n)
                        : d > v && C(t, f, p);
                    })(f, g, v, r, c)
                  : s(v)
                  ? (s(e.text) && u.setTextContent(f, ""),
                    w(f, null, v, 0, v.length - 1, r))
                  : s(g)
                  ? C(g, 0, g.length - 1)
                  : s(e.text) && u.setTextContent(f, "")
                : e.text !== t.text && u.setTextContent(f, t.text),
                s(p) && s((d = p.hook)) && s((d = d.postpatch)) && d(e, t);
            }
          }
        }
        function k(e, t, r) {
          if (l(r) && s(e.parent)) e.parent.data.pendingInsert = t;
          else for (var n = 0; n < t.length; ++n) t[n].data.hook.insert(t[n]);
        }
        var L = b("attrs,class,staticClass,staticStyle,key");
        function A(e, t, r, n) {
          var i,
            o = t.tag,
            a = t.data,
            c = t.children;
          if (
            ((n = n || (a && a.pre)),
            (t.elm = e),
            l(t.isComment) && s(t.asyncFactory))
          )
            return (t.isAsyncPlaceholder = !0), !0;
          if (
            s(a) &&
            (s((i = a.hook)) && s((i = i.init)) && i(t, !0),
            s((i = t.componentInstance)))
          )
            return d(t, r), !0;
          if (s(o)) {
            if (s(c))
              if (e.hasChildNodes())
                if (s((i = a)) && s((i = i.domProps)) && s((i = i.innerHTML))) {
                  if (i !== e.innerHTML) return !1;
                } else {
                  for (var u = !0, f = e.firstChild, h = 0; h < c.length; h++) {
                    if (!f || !A(f, c[h], r, n)) {
                      u = !1;
                      break;
                    }
                    f = f.nextSibling;
                  }
                  if (!u || f) return !1;
                }
              else g(t, c, r);
            if (s(a)) {
              var p = !1;
              for (var m in a)
                if (!L(m)) {
                  (p = !0), v(t, r);
                  break;
                }
              !p && a.class && gr(a.class);
            }
          } else e.data !== t.text && (e.data = t.text);
          return !0;
        }
        return function (e, t, r, i) {
          if (!a(t)) {
            var o = !1,
              c = [];
            if (a(e)) (o = !0), h(t, c);
            else {
              var f = s(e.nodeType);
              if (!f && Dn(e, t)) T(e, t, c, null, null, i);
              else {
                if (f) {
                  if (
                    (1 === e.nodeType &&
                      e.hasAttribute(j) &&
                      (e.removeAttribute(j), (r = !0)),
                    l(r) && A(e, t, c))
                  )
                    return k(t, c, !0), e;
                  e = (function (e) {
                    return new ge(
                      u.tagName(e).toLowerCase(),
                      {},
                      [],
                      void 0,
                      e
                    );
                  })(e);
                }
                var d = e.elm,
                  p = u.parentNode(d);
                if (
                  (h(t, c, d._leaveCb ? null : p, u.nextSibling(d)),
                  s(t.parent))
                )
                  for (var g = t.parent, v = m(t); g; ) {
                    for (var y = 0; y < n.destroy.length; ++y) n.destroy[y](g);
                    if (((g.elm = t.elm), v)) {
                      for (var b = 0; b < n.create.length; ++b)
                        n.create[b](Nn, g);
                      var w = g.data.hook.insert;
                      if (w.merged)
                        for (var _ = 1; _ < w.fns.length; _++) w.fns[_]();
                    } else En(g);
                    g = g.parent;
                  }
                s(p) ? C([e], 0, 0) : s(e.tag) && x(e);
              }
            }
            return k(t, c, o), t.elm;
          }
          s(e) && x(e);
        };
      })({
        nodeOps: Mn,
        modules: [
          qn,
          ti,
          Ii,
          Hi,
          Yi,
          Z
            ? {
                create: xo,
                activate: xo,
                remove: function (e, t) {
                  !0 !== e.data.show ? yo(e, t) : t();
                },
              }
            : {},
        ].concat(Wn),
      });
      ee &&
        document.addEventListener("selectionchange", function () {
          var e = document.activeElement;
          e && e.vmodel && Oo(e, "input");
        });
      var _o = {
        inserted: function (e, t, r, n) {
          "select" === r.tag
            ? (n.elm && !n.elm._vOptions
                ? Ke(r, "postpatch", function () {
                    _o.componentUpdated(e, t, r);
                  })
                : So(e, t, r.context),
              (e._vOptions = [].map.call(e.options, Lo)))
            : ("textarea" === r.tag || Ln(e.type)) &&
              ((e._vModifiers = t.modifiers),
              t.modifiers.lazy ||
                (e.addEventListener("compositionstart", Ao),
                e.addEventListener("compositionend", Mo),
                e.addEventListener("change", Mo),
                ee && (e.vmodel = !0)));
        },
        componentUpdated: function (e, t, r) {
          if ("select" === r.tag) {
            So(e, t, r.context);
            var n = e._vOptions,
              i = (e._vOptions = [].map.call(e.options, Lo));
            if (
              i.some(function (e, t) {
                return !$(e, n[t]);
              })
            )
              (e.multiple
                ? t.value.some(function (e) {
                    return ko(e, i);
                  })
                : t.value !== t.oldValue && ko(t.value, i)) && Oo(e, "change");
          }
        },
      };
      function So(e, t, r) {
        To(e, t, r),
          (Q || te) &&
            setTimeout(function () {
              To(e, t, r);
            }, 0);
      }
      function To(e, t, r) {
        var n = t.value,
          i = e.multiple;
        if (!i || Array.isArray(n)) {
          for (var o, a, s = 0, l = e.options.length; s < l; s++)
            if (((a = e.options[s]), i))
              (o = B(n, Lo(a)) > -1), a.selected !== o && (a.selected = o);
            else if ($(Lo(a), n))
              return void (e.selectedIndex !== s && (e.selectedIndex = s));
          i || (e.selectedIndex = -1);
        }
      }
      function ko(e, t) {
        return t.every(function (t) {
          return !$(t, e);
        });
      }
      function Lo(e) {
        return "_value" in e ? e._value : e.value;
      }
      function Ao(e) {
        e.target.composing = !0;
      }
      function Mo(e) {
        e.target.composing &&
          ((e.target.composing = !1), Oo(e.target, "input"));
      }
      function Oo(e, t) {
        var r = document.createEvent("HTMLEvents");
        r.initEvent(t, !0, !0), e.dispatchEvent(r);
      }
      function Eo(e) {
        return !e.componentInstance || (e.data && e.data.transition)
          ? e
          : Eo(e.componentInstance._vnode);
      }
      var Ro = {
          model: _o,
          show: {
            bind: function (e, t, r) {
              var n = t.value,
                i = (r = Eo(r)).data && r.data.transition,
                o = (e.__vOriginalDisplay =
                  "none" === e.style.display ? "" : e.style.display);
              n && i
                ? ((r.data.show = !0),
                  vo(r, function () {
                    e.style.display = o;
                  }))
                : (e.style.display = n ? o : "none");
            },
            update: function (e, t, r) {
              var n = t.value;
              !n != !t.oldValue &&
                ((r = Eo(r)).data && r.data.transition
                  ? ((r.data.show = !0),
                    n
                      ? vo(r, function () {
                          e.style.display = e.__vOriginalDisplay;
                        })
                      : yo(r, function () {
                          e.style.display = "none";
                        }))
                  : (e.style.display = n ? e.__vOriginalDisplay : "none"));
            },
            unbind: function (e, t, r, n, i) {
              i || (e.style.display = e.__vOriginalDisplay);
            },
          },
        },
        No = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        };
      function Io(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? Io(Lt(t.children)) : e;
      }
      function Do(e) {
        var t = {},
          r = e.$options;
        for (var n in r.propsData) t[n] = e[n];
        var i = r._parentListeners;
        for (var n in i) t[L(n)] = i[n];
        return t;
      }
      function Po(e, t) {
        if (/\d-keep-alive$/.test(t.tag))
          return e("keep-alive", { props: t.componentOptions.propsData });
      }
      var Ho = function (e) {
          return e.tag || mt(e);
        },
        $o = function (e) {
          return "show" === e.name;
        },
        Bo = {
          name: "transition",
          props: No,
          abstract: !0,
          render: function (e) {
            var t = this,
              r = this.$slots.default;
            if (r && (r = r.filter(Ho)).length) {
              0;
              var n = this.mode;
              0;
              var i = r[0];
              if (
                (function (e) {
                  for (; (e = e.parent); ) if (e.data.transition) return !0;
                })(this.$vnode)
              )
                return i;
              var o = Io(i);
              if (!o) return i;
              if (this._leaving) return Po(e, i);
              var a = "__transition-".concat(this._uid, "-");
              o.key =
                null == o.key
                  ? o.isComment
                    ? a + "comment"
                    : a + o.tag
                  : c(o.key)
                  ? 0 === String(o.key).indexOf(a)
                    ? o.key
                    : a + o.key
                  : o.key;
              var s = ((o.data || (o.data = {})).transition = Do(this)),
                l = this._vnode,
                u = Io(l);
              if (
                (o.data.directives &&
                  o.data.directives.some($o) &&
                  (o.data.show = !0),
                u &&
                  u.data &&
                  !(function (e, t) {
                    return t.key === e.key && t.tag === e.tag;
                  })(o, u) &&
                  !mt(u) &&
                  (!u.componentInstance ||
                    !u.componentInstance._vnode.isComment))
              ) {
                var f = (u.data.transition = N({}, s));
                if ("out-in" === n)
                  return (
                    (this._leaving = !0),
                    Ke(f, "afterLeave", function () {
                      (t._leaving = !1), t.$forceUpdate();
                    }),
                    Po(e, i)
                  );
                if ("in-out" === n) {
                  if (mt(o)) return l;
                  var h,
                    d = function () {
                      h();
                    };
                  Ke(s, "afterEnter", d),
                    Ke(s, "enterCancelled", d),
                    Ke(f, "delayLeave", function (e) {
                      h = e;
                    });
                }
              }
              return i;
            }
          },
        },
        Fo = N({ tag: String, moveClass: String }, No);
      function Uo(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }
      function jo(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }
      function Wo(e) {
        var t = e.data.pos,
          r = e.data.newPos,
          n = t.left - r.left,
          i = t.top - r.top;
        if (n || i) {
          e.data.moved = !0;
          var o = e.elm.style;
          (o.transform = o.WebkitTransform =
            "translate(".concat(n, "px,").concat(i, "px)")),
            (o.transitionDuration = "0s");
        }
      }
      delete Fo.mode;
      var zo = {
        Transition: Bo,
        TransitionGroup: {
          props: Fo,
          beforeMount: function () {
            var e = this,
              t = this._update;
            this._update = function (r, n) {
              var i = Nt(e);
              e.__patch__(e._vnode, e.kept, !1, !0),
                (e._vnode = e.kept),
                i(),
                t.call(e, r, n);
            };
          },
          render: function (e) {
            for (
              var t = this.tag || this.$vnode.data.tag || "span",
                r = Object.create(null),
                n = (this.prevChildren = this.children),
                i = this.$slots.default || [],
                o = (this.children = []),
                a = Do(this),
                s = 0;
              s < i.length;
              s++
            ) {
              if ((u = i[s]).tag)
                if (null != u.key && 0 !== String(u.key).indexOf("__vlist"))
                  o.push(u),
                    (r[u.key] = u),
                    ((u.data || (u.data = {})).transition = a);
                else;
            }
            if (n) {
              var l = [],
                c = [];
              for (s = 0; s < n.length; s++) {
                var u;
                ((u = n[s]).data.transition = a),
                  (u.data.pos = u.elm.getBoundingClientRect()),
                  r[u.key] ? l.push(u) : c.push(u);
              }
              (this.kept = e(t, null, l)), (this.removed = c);
            }
            return e(t, null, o);
          },
          updated: function () {
            var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
            e.length &&
              this.hasMove(e[0].elm, t) &&
              (e.forEach(Uo),
              e.forEach(jo),
              e.forEach(Wo),
              (this._reflow = document.body.offsetHeight),
              e.forEach(function (e) {
                if (e.data.moved) {
                  var r = e.elm,
                    n = r.style;
                  co(r, t),
                    (n.transform =
                      n.WebkitTransform =
                      n.transitionDuration =
                        ""),
                    r.addEventListener(
                      io,
                      (r._moveCb = function e(n) {
                        (n && n.target !== r) ||
                          (n && !/transform$/.test(n.propertyName)) ||
                          (r.removeEventListener(io, e),
                          (r._moveCb = null),
                          uo(r, t));
                      })
                    );
                }
              }));
          },
          methods: {
            hasMove: function (e, t) {
              if (!eo) return !1;
              if (this._hasMove) return this._hasMove;
              var r = e.cloneNode();
              e._transitionClasses &&
                e._transitionClasses.forEach(function (e) {
                  Zi(r, e);
                }),
                Xi(r, t),
                (r.style.display = "none"),
                this.$el.appendChild(r);
              var n = po(r);
              return this.$el.removeChild(r), (this._hasMove = n.hasTransform);
            },
          },
        },
      };
      (Zr.config.mustUseProp = ln),
        (Zr.config.isReservedTag = Sn),
        (Zr.config.isReservedAttr = an),
        (Zr.config.getTagNamespace = Tn),
        (Zr.config.isUnknownElement = function (e) {
          if (!Z) return !0;
          if (Sn(e)) return !1;
          if (((e = e.toLowerCase()), null != kn[e])) return kn[e];
          var t = document.createElement(e);
          return e.indexOf("-") > -1
            ? (kn[e] =
                t.constructor === window.HTMLUnknownElement ||
                t.constructor === window.HTMLElement)
            : (kn[e] = /HTMLUnknownElement/.test(t.toString()));
        }),
        N(Zr.options.directives, Ro),
        N(Zr.options.components, zo),
        (Zr.prototype.__patch__ = Z ? Co : D),
        (Zr.prototype.$mount = function (e, t) {
          return (function (e, t, r) {
            (e.$el = t),
              e.$options.render || (e.$options.render = me),
              Pt(e, "beforeMount");
            var n = {
              before: function () {
                e._isMounted && !e._isDestroyed && Pt(e, "beforeUpdate");
              },
            };
            new vr(
              e,
              function () {
                e._update(e._render(), r);
              },
              D,
              n,
              !0
            ),
              (r = !1);
            var i = e._preWatchers;
            if (i) for (var o = 0; o < i.length; o++) i[o].run();
            return (
              null == e.$vnode && ((e._isMounted = !0), Pt(e, "mounted")), e
            );
          })(this, (e = e && Z ? An(e) : void 0), t);
        }),
        Z &&
          setTimeout(function () {
            V.devtools && ce && ce.emit("init", Zr);
          }, 0);
      var Vo = /\{\{((?:.|\r?\n)+?)\}\}/g,
        Ko = /[-.*+?^${}()|[\]\/\\]/g,
        qo = T(function (e) {
          var t = e[0].replace(Ko, "\\$&"),
            r = e[1].replace(Ko, "\\$&");
          return new RegExp(t + "((?:.|\\n)+?)" + r, "g");
        });
      function Yo(e, t) {
        var r = t ? qo(t) : Vo;
        if (r.test(e)) {
          for (
            var n, i, o, a = [], s = [], l = (r.lastIndex = 0);
            (n = r.exec(e));

          ) {
            (i = n.index) > l &&
              (s.push((o = e.slice(l, i))), a.push(JSON.stringify(o)));
            var c = ni(n[1].trim());
            a.push("_s(".concat(c, ")")),
              s.push({ "@binding": c }),
              (l = i + n[0].length);
          }
          return (
            l < e.length &&
              (s.push((o = e.slice(l))), a.push(JSON.stringify(o))),
            { expression: a.join("+"), tokens: s }
          );
        }
      }
      var Go = {
        staticKeys: ["staticClass"],
        transformNode: function (e, t) {
          t.warn;
          var r = gi(e, "class");
          r && (e.staticClass = JSON.stringify(r.replace(/\s+/g, " ").trim()));
          var n = pi(e, "class", !1);
          n && (e.classBinding = n);
        },
        genData: function (e) {
          var t = "";
          return (
            e.staticClass && (t += "staticClass:".concat(e.staticClass, ",")),
            e.classBinding && (t += "class:".concat(e.classBinding, ",")),
            t
          );
        },
      };
      var Xo,
        Zo = {
          staticKeys: ["staticStyle"],
          transformNode: function (e, t) {
            t.warn;
            var r = gi(e, "style");
            r && (e.staticStyle = JSON.stringify($i(r)));
            var n = pi(e, "style", !1);
            n && (e.styleBinding = n);
          },
          genData: function (e) {
            var t = "";
            return (
              e.staticStyle && (t += "staticStyle:".concat(e.staticStyle, ",")),
              e.styleBinding && (t += "style:(".concat(e.styleBinding, "),")),
              t
            );
          },
        },
        Jo = function (e) {
          return (
            ((Xo = Xo || document.createElement("div")).innerHTML = e),
            Xo.textContent
          );
        },
        Qo = b(
          "area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
        ),
        ea = b("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        ta = b(
          "address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
        ),
        ra =
          /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        na =
          /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        ia = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(K.source, "]*"),
        oa = "((?:".concat(ia, "\\:)?").concat(ia, ")"),
        aa = new RegExp("^<".concat(oa)),
        sa = /^\s*(\/?)>/,
        la = new RegExp("^<\\/".concat(oa, "[^>]*>")),
        ca = /^<!DOCTYPE [^>]+>/i,
        ua = /^<!\--/,
        fa = /^<!\[/,
        ha = b("script,style,textarea", !0),
        da = {},
        pa = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "\t",
          "&#39;": "'",
        },
        ga = /&(?:lt|gt|quot|amp|#39);/g,
        ma = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        va = b("pre,textarea", !0),
        ya = function (e, t) {
          return e && va(e) && "\n" === t[0];
        };
      function ba(e, t) {
        var r = t ? ma : ga;
        return e.replace(r, function (e) {
          return pa[e];
        });
      }
      function wa(e, t) {
        for (
          var r,
            n,
            i = [],
            o = t.expectHTML,
            a = t.isUnaryTag || P,
            s = t.canBeLeftOpenTag || P,
            l = 0,
            c = function () {
              if (((r = e), n && ha(n))) {
                var c = 0,
                  h = n.toLowerCase(),
                  d =
                    da[h] ||
                    (da[h] = new RegExp(
                      "([\\s\\S]*?)(</" + h + "[^>]*>)",
                      "i"
                    ));
                C = e.replace(d, function (e, r, n) {
                  return (
                    (c = n.length),
                    ha(h) ||
                      "noscript" === h ||
                      (r = r
                        .replace(/<!\--([\s\S]*?)-->/g, "$1")
                        .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                    ya(h, r) && (r = r.slice(1)),
                    t.chars && t.chars(r),
                    ""
                  );
                });
                (l += e.length - C.length), (e = C), f(h, l - c, l);
              } else {
                var p = e.indexOf("<");
                if (0 === p) {
                  if (ua.test(e)) {
                    var g = e.indexOf("--\x3e");
                    if (g >= 0)
                      return (
                        t.shouldKeepComment &&
                          t.comment &&
                          t.comment(e.substring(4, g), l, l + g + 3),
                        u(g + 3),
                        "continue"
                      );
                  }
                  if (fa.test(e)) {
                    var m = e.indexOf("]>");
                    if (m >= 0) return u(m + 2), "continue";
                  }
                  var v = e.match(ca);
                  if (v) return u(v[0].length), "continue";
                  var y = e.match(la);
                  if (y) {
                    var b = l;
                    return u(y[0].length), f(y[1], b, l), "continue";
                  }
                  var w = (function () {
                    var t = e.match(aa);
                    if (t) {
                      var r = { tagName: t[1], attrs: [], start: l };
                      u(t[0].length);
                      for (
                        var n = void 0, i = void 0;
                        !(n = e.match(sa)) && (i = e.match(na) || e.match(ra));

                      )
                        (i.start = l),
                          u(i[0].length),
                          (i.end = l),
                          r.attrs.push(i);
                      if (n)
                        return (
                          (r.unarySlash = n[1]), u(n[0].length), (r.end = l), r
                        );
                    }
                  })();
                  if (w)
                    return (
                      (function (e) {
                        var r = e.tagName,
                          l = e.unarySlash;
                        o &&
                          ("p" === n && ta(r) && f(n), s(r) && n === r && f(r));
                        for (
                          var c = a(r) || !!l,
                            u = e.attrs.length,
                            h = new Array(u),
                            d = 0;
                          d < u;
                          d++
                        ) {
                          var p = e.attrs[d],
                            g = p[3] || p[4] || p[5] || "",
                            m =
                              "a" === r && "href" === p[1]
                                ? t.shouldDecodeNewlinesForHref
                                : t.shouldDecodeNewlines;
                          h[d] = { name: p[1], value: ba(g, m) };
                        }
                        c ||
                          (i.push({
                            tag: r,
                            lowerCasedTag: r.toLowerCase(),
                            attrs: h,
                            start: e.start,
                            end: e.end,
                          }),
                          (n = r));
                        t.start && t.start(r, h, c, e.start, e.end);
                      })(w),
                      ya(w.tagName, e) && u(1),
                      "continue"
                    );
                }
                var x = void 0,
                  C = void 0,
                  _ = void 0;
                if (p >= 0) {
                  for (
                    C = e.slice(p);
                    !(
                      la.test(C) ||
                      aa.test(C) ||
                      ua.test(C) ||
                      fa.test(C) ||
                      (_ = C.indexOf("<", 1)) < 0
                    );

                  )
                    (p += _), (C = e.slice(p));
                  x = e.substring(0, p);
                }
                p < 0 && (x = e),
                  x && u(x.length),
                  t.chars && x && t.chars(x, l - x.length, l);
              }
              if (e === r) return t.chars && t.chars(e), "break";
            };
          e;

        ) {
          if ("break" === c()) break;
        }
        function u(t) {
          (l += t), (e = e.substring(t));
        }
        function f(e, r, o) {
          var a, s;
          if ((null == r && (r = l), null == o && (o = l), e))
            for (
              s = e.toLowerCase(), a = i.length - 1;
              a >= 0 && i[a].lowerCasedTag !== s;
              a--
            );
          else a = 0;
          if (a >= 0) {
            for (var c = i.length - 1; c >= a; c--)
              t.end && t.end(i[c].tag, r, o);
            (i.length = a), (n = a && i[a - 1].tag);
          } else
            "br" === s
              ? t.start && t.start(e, [], !0, r, o)
              : "p" === s &&
                (t.start && t.start(e, [], !1, r, o), t.end && t.end(e, r, o));
        }
        f();
      }
      var xa,
        Ca,
        _a,
        Sa,
        Ta,
        ka,
        La,
        Aa,
        Ma = /^@|^v-on:/,
        Oa = /^v-|^@|^:|^#/,
        Ea = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Ra = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        Na = /^\(|\)$/g,
        Ia = /^\[.*\]$/,
        Da = /:(.*)$/,
        Pa = /^:|^\.|^v-bind:/,
        Ha = /\.[^.\]]+(?=[^\]]*$)/g,
        $a = /^v-slot(:|$)|^#/,
        Ba = /[\r\n]/,
        Fa = /[ \f\t\r\n]+/g,
        Ua = T(Jo),
        ja = "_empty_";
      function Wa(e, t, r) {
        return {
          type: 1,
          tag: e,
          attrsList: t,
          attrsMap: (function (e) {
            for (var t = {}, r = 0, n = e.length; r < n; r++)
              t[e[r].name] = e[r].value;
            return t;
          })(t),
          rawAttrsMap: {},
          parent: r,
          children: [],
        };
      }
      function za(e, t) {
        (xa = t.warn || oi),
          (ka = t.isPreTag || P),
          (La = t.mustUseProp || P),
          (Aa = t.getTagNamespace || P);
        var r = t.isReservedTag || P;
        (function (e) {
          return !(
            !(e.component || e.attrsMap[":is"] || e.attrsMap["v-bind:is"]) &&
            (e.attrsMap.is ? r(e.attrsMap.is) : r(e.tag))
          );
        }),
          (_a = ai(t.modules, "transformNode")),
          (Sa = ai(t.modules, "preTransformNode")),
          (Ta = ai(t.modules, "postTransformNode")),
          (Ca = t.delimiters);
        var n,
          i,
          o = [],
          a = !1 !== t.preserveWhitespace,
          s = t.whitespace,
          l = !1,
          c = !1;
        function u(e) {
          if (
            (f(e),
            l || e.processed || (e = Va(e, t)),
            o.length ||
              e === n ||
              (n.if &&
                (e.elseif || e.else) &&
                qa(n, { exp: e.elseif, block: e })),
            i && !e.forbidden)
          )
            if (e.elseif || e.else)
              !(function (e, t) {
                var r = (function (e) {
                  var t = e.length;
                  for (; t--; ) {
                    if (1 === e[t].type) return e[t];
                    e.pop();
                  }
                })(t.children);
                r && r.if && qa(r, { exp: e.elseif, block: e });
              })(e, i);
            else {
              if (e.slotScope) {
                var r = e.slotTarget || '"default"';
                (i.scopedSlots || (i.scopedSlots = {}))[r] = e;
              }
              i.children.push(e), (e.parent = i);
            }
          (e.children = e.children.filter(function (e) {
            return !e.slotScope;
          })),
            f(e),
            e.pre && (l = !1),
            ka(e.tag) && (c = !1);
          for (var a = 0; a < Ta.length; a++) Ta[a](e, t);
        }
        function f(e) {
          if (!c)
            for (
              var t = void 0;
              (t = e.children[e.children.length - 1]) &&
              3 === t.type &&
              " " === t.text;

            )
              e.children.pop();
        }
        return (
          wa(e, {
            warn: xa,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function (e, r, a, s, f) {
              var h = (i && i.ns) || Aa(e);
              Q &&
                "svg" === h &&
                (r = (function (e) {
                  for (var t = [], r = 0; r < e.length; r++) {
                    var n = e[r];
                    Xa.test(n.name) ||
                      ((n.name = n.name.replace(Za, "")), t.push(n));
                  }
                  return t;
                })(r));
              var d = Wa(e, r, i);
              h && (d.ns = h),
                (function (e) {
                  return (
                    "style" === e.tag ||
                    ("script" === e.tag &&
                      (!e.attrsMap.type ||
                        "text/javascript" === e.attrsMap.type))
                  );
                })(d) &&
                  !le() &&
                  (d.forbidden = !0);
              for (var p = 0; p < Sa.length; p++) d = Sa[p](d, t) || d;
              l ||
                (!(function (e) {
                  null != gi(e, "v-pre") && (e.pre = !0);
                })(d),
                d.pre && (l = !0)),
                ka(d.tag) && (c = !0),
                l
                  ? (function (e) {
                      var t = e.attrsList,
                        r = t.length;
                      if (r)
                        for (
                          var n = (e.attrs = new Array(r)), i = 0;
                          i < r;
                          i++
                        )
                          (n[i] = {
                            name: t[i].name,
                            value: JSON.stringify(t[i].value),
                          }),
                            null != t[i].start &&
                              ((n[i].start = t[i].start),
                              (n[i].end = t[i].end));
                      else e.pre || (e.plain = !0);
                    })(d)
                  : d.processed ||
                    (Ka(d),
                    (function (e) {
                      var t = gi(e, "v-if");
                      if (t) (e.if = t), qa(e, { exp: t, block: e });
                      else {
                        null != gi(e, "v-else") && (e.else = !0);
                        var r = gi(e, "v-else-if");
                        r && (e.elseif = r);
                      }
                    })(d),
                    (function (e) {
                      null != gi(e, "v-once") && (e.once = !0);
                    })(d)),
                n || (n = d),
                a ? u(d) : ((i = d), o.push(d));
            },
            end: function (e, t, r) {
              var n = o[o.length - 1];
              (o.length -= 1), (i = o[o.length - 1]), u(n);
            },
            chars: function (e, t, r) {
              if (
                i &&
                (!Q || "textarea" !== i.tag || i.attrsMap.placeholder !== e)
              ) {
                var n = i.children;
                if (
                  (e =
                    c || e.trim()
                      ? (function (e) {
                          return "script" === e.tag || "style" === e.tag;
                        })(i)
                        ? e
                        : Ua(e)
                      : n.length
                      ? s
                        ? "condense" === s && Ba.test(e)
                          ? ""
                          : " "
                        : a
                        ? " "
                        : ""
                      : "")
                ) {
                  c || "condense" !== s || (e = e.replace(Fa, " "));
                  var o = void 0,
                    u = void 0;
                  !l && " " !== e && (o = Yo(e, Ca))
                    ? (u = {
                        type: 2,
                        expression: o.expression,
                        tokens: o.tokens,
                        text: e,
                      })
                    : (" " === e && n.length && " " === n[n.length - 1].text) ||
                      (u = { type: 3, text: e }),
                    u && n.push(u);
                }
              }
            },
            comment: function (e, t, r) {
              if (i) {
                var n = { type: 3, text: e, isComment: !0 };
                0, i.children.push(n);
              }
            },
          }),
          n
        );
      }
      function Va(e, t) {
        !(function (e) {
          var t = pi(e, "key");
          if (t) {
            e.key = t;
          }
        })(e),
          (e.plain = !e.key && !e.scopedSlots && !e.attrsList.length),
          (function (e) {
            var t = pi(e, "ref");
            t &&
              ((e.ref = t),
              (e.refInFor = (function (e) {
                var t = e;
                for (; t; ) {
                  if (void 0 !== t.for) return !0;
                  t = t.parent;
                }
                return !1;
              })(e)));
          })(e),
          (function (e) {
            var t;
            "template" === e.tag
              ? ((t = gi(e, "scope")), (e.slotScope = t || gi(e, "slot-scope")))
              : (t = gi(e, "slot-scope")) && (e.slotScope = t);
            var r = pi(e, "slot");
            r &&
              ((e.slotTarget = '""' === r ? '"default"' : r),
              (e.slotTargetDynamic = !(
                !e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]
              )),
              "template" === e.tag ||
                e.slotScope ||
                li(e, "slot", r, di(e, "slot")));
            if ("template" === e.tag) {
              var n = mi(e, $a);
              if (n) {
                0;
                var i = Ya(n),
                  o = i.name,
                  a = i.dynamic;
                (e.slotTarget = o),
                  (e.slotTargetDynamic = a),
                  (e.slotScope = n.value || ja);
              }
            } else {
              var n = mi(e, $a);
              if (n) {
                0;
                var s = e.scopedSlots || (e.scopedSlots = {}),
                  l = Ya(n),
                  c = l.name,
                  a = l.dynamic,
                  u = (s[c] = Wa("template", [], e));
                (u.slotTarget = c),
                  (u.slotTargetDynamic = a),
                  (u.children = e.children.filter(function (e) {
                    if (!e.slotScope) return (e.parent = u), !0;
                  })),
                  (u.slotScope = n.value || ja),
                  (e.children = []),
                  (e.plain = !1);
              }
            }
          })(e),
          (function (e) {
            "slot" === e.tag && (e.slotName = pi(e, "name"));
          })(e),
          (function (e) {
            var t;
            (t = pi(e, "is")) && (e.component = t);
            null != gi(e, "inline-template") && (e.inlineTemplate = !0);
          })(e);
        for (var r = 0; r < _a.length; r++) e = _a[r](e, t) || e;
        return (
          (function (e) {
            var t,
              r,
              n,
              i,
              o,
              a,
              s,
              l,
              c = e.attrsList;
            for (t = 0, r = c.length; t < r; t++) {
              if (((n = i = c[t].name), (o = c[t].value), Oa.test(n)))
                if (
                  ((e.hasBindings = !0),
                  (a = Ga(n.replace(Oa, ""))) && (n = n.replace(Ha, "")),
                  Pa.test(n))
                )
                  (n = n.replace(Pa, "")),
                    (o = ni(o)),
                    (l = Ia.test(n)) && (n = n.slice(1, -1)),
                    a &&
                      (a.prop &&
                        !l &&
                        "innerHtml" === (n = L(n)) &&
                        (n = "innerHTML"),
                      a.camel && !l && (n = L(n)),
                      a.sync &&
                        ((s = bi(o, "$event")),
                        l
                          ? hi(
                              e,
                              '"update:"+('.concat(n, ")"),
                              s,
                              null,
                              !1,
                              0,
                              c[t],
                              !0
                            )
                          : (hi(
                              e,
                              "update:".concat(L(n)),
                              s,
                              null,
                              !1,
                              0,
                              c[t]
                            ),
                            O(n) !== L(n) &&
                              hi(
                                e,
                                "update:".concat(O(n)),
                                s,
                                null,
                                !1,
                                0,
                                c[t]
                              )))),
                    (a && a.prop) ||
                    (!e.component && La(e.tag, e.attrsMap.type, n))
                      ? si(e, n, o, c[t], l)
                      : li(e, n, o, c[t], l);
                else if (Ma.test(n))
                  (n = n.replace(Ma, "")),
                    (l = Ia.test(n)) && (n = n.slice(1, -1)),
                    hi(e, n, o, a, !1, 0, c[t], l);
                else {
                  var u = (n = n.replace(Oa, "")).match(Da),
                    f = u && u[1];
                  (l = !1),
                    f &&
                      ((n = n.slice(0, -(f.length + 1))),
                      Ia.test(f) && ((f = f.slice(1, -1)), (l = !0))),
                    ui(e, n, i, o, f, l, a, c[t]);
                }
              else
                li(e, n, JSON.stringify(o), c[t]),
                  !e.component &&
                    "muted" === n &&
                    La(e.tag, e.attrsMap.type, n) &&
                    si(e, n, "true", c[t]);
            }
          })(e),
          e
        );
      }
      function Ka(e) {
        var t;
        if ((t = gi(e, "v-for"))) {
          var r = (function (e) {
            var t = e.match(Ea);
            if (!t) return;
            var r = {};
            r.for = t[2].trim();
            var n = t[1].trim().replace(Na, ""),
              i = n.match(Ra);
            i
              ? ((r.alias = n.replace(Ra, "").trim()),
                (r.iterator1 = i[1].trim()),
                i[2] && (r.iterator2 = i[2].trim()))
              : (r.alias = n);
            return r;
          })(t);
          r && N(e, r);
        }
      }
      function qa(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }
      function Ya(e) {
        var t = e.name.replace($a, "");
        return (
          t || ("#" !== e.name[0] && (t = "default")),
          Ia.test(t)
            ? { name: t.slice(1, -1), dynamic: !0 }
            : { name: '"'.concat(t, '"'), dynamic: !1 }
        );
      }
      function Ga(e) {
        var t = e.match(Ha);
        if (t) {
          var r = {};
          return (
            t.forEach(function (e) {
              r[e.slice(1)] = !0;
            }),
            r
          );
        }
      }
      var Xa = /^xmlns:NS\d+/,
        Za = /^NS\d+:/;
      function Ja(e) {
        return Wa(e.tag, e.attrsList.slice(), e.parent);
      }
      var Qa = [
        Go,
        Zo,
        {
          preTransformNode: function (e, t) {
            if ("input" === e.tag) {
              var r = e.attrsMap;
              if (!r["v-model"]) return;
              var n = void 0;
              if (
                ((r[":type"] || r["v-bind:type"]) && (n = pi(e, "type")),
                r.type ||
                  n ||
                  !r["v-bind"] ||
                  (n = "(".concat(r["v-bind"], ").type")),
                n)
              ) {
                var i = gi(e, "v-if", !0),
                  o = i ? "&&(".concat(i, ")") : "",
                  a = null != gi(e, "v-else", !0),
                  s = gi(e, "v-else-if", !0),
                  l = Ja(e);
                Ka(l),
                  ci(l, "type", "checkbox"),
                  Va(l, t),
                  (l.processed = !0),
                  (l.if = "(".concat(n, ")==='checkbox'") + o),
                  qa(l, { exp: l.if, block: l });
                var c = Ja(e);
                gi(c, "v-for", !0),
                  ci(c, "type", "radio"),
                  Va(c, t),
                  qa(l, { exp: "(".concat(n, ")==='radio'") + o, block: c });
                var u = Ja(e);
                return (
                  gi(u, "v-for", !0),
                  ci(u, ":type", n),
                  Va(u, t),
                  qa(l, { exp: i, block: u }),
                  a ? (l.else = !0) : s && (l.elseif = s),
                  l
                );
              }
            }
          },
        },
      ];
      var es,
        ts,
        rs = {
          expectHTML: !0,
          modules: Qa,
          directives: {
            model: function (e, t, r) {
              r;
              var n = t.value,
                i = t.modifiers,
                o = e.tag,
                a = e.attrsMap.type;
              if (e.component) return yi(e, n, i), !1;
              if ("select" === o)
                !(function (e, t, r) {
                  var n = r && r.number,
                    i =
                      'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;' +
                      "return ".concat(n ? "_n(val)" : "val", "})"),
                    o = "var $$selectedVal = ".concat(i, ";");
                  (o = ""
                    .concat(o, " ")
                    .concat(
                      bi(
                        t,
                        "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"
                      )
                    )),
                    hi(e, "change", o, null, !0);
                })(e, n, i);
              else if ("input" === o && "checkbox" === a)
                !(function (e, t, r) {
                  var n = r && r.number,
                    i = pi(e, "value") || "null",
                    o = pi(e, "true-value") || "true",
                    a = pi(e, "false-value") || "false";
                  si(
                    e,
                    "checked",
                    "Array.isArray(".concat(t, ")") +
                      "?_i(".concat(t, ",").concat(i, ")>-1") +
                      ("true" === o
                        ? ":(".concat(t, ")")
                        : ":_q(".concat(t, ",").concat(o, ")"))
                  ),
                    hi(
                      e,
                      "change",
                      "var $$a=".concat(t, ",") +
                        "$$el=$event.target," +
                        "$$c=$$el.checked?(".concat(o, "):(").concat(a, ");") +
                        "if(Array.isArray($$a)){" +
                        "var $$v=".concat(n ? "_n(" + i + ")" : i, ",") +
                        "$$i=_i($$a,$$v);" +
                        "if($$el.checked){$$i<0&&(".concat(
                          bi(t, "$$a.concat([$$v])"),
                          ")}"
                        ) +
                        "else{$$i>-1&&(".concat(
                          bi(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))"),
                          ")}"
                        ) +
                        "}else{".concat(bi(t, "$$c"), "}"),
                      null,
                      !0
                    );
                })(e, n, i);
              else if ("input" === o && "radio" === a)
                !(function (e, t, r) {
                  var n = r && r.number,
                    i = pi(e, "value") || "null";
                  (i = n ? "_n(".concat(i, ")") : i),
                    si(e, "checked", "_q(".concat(t, ",").concat(i, ")")),
                    hi(e, "change", bi(t, i), null, !0);
                })(e, n, i);
              else if ("input" === o || "textarea" === o)
                !(function (e, t, r) {
                  var n = e.attrsMap.type,
                    i = r || {},
                    o = i.lazy,
                    a = i.number,
                    s = i.trim,
                    l = !o && "range" !== n,
                    c = o ? "change" : "range" === n ? ki : "input",
                    u = "$event.target.value";
                  s && (u = "$event.target.value.trim()"),
                    a && (u = "_n(".concat(u, ")"));
                  var f = bi(t, u);
                  l && (f = "if($event.target.composing)return;".concat(f)),
                    si(e, "value", "(".concat(t, ")")),
                    hi(e, c, f, null, !0),
                    (s || a) && hi(e, "blur", "$forceUpdate()");
                })(e, n, i);
              else if (!V.isReservedTag(o)) return yi(e, n, i), !1;
              return !0;
            },
            text: function (e, t) {
              t.value && si(e, "textContent", "_s(".concat(t.value, ")"), t);
            },
            html: function (e, t) {
              t.value && si(e, "innerHTML", "_s(".concat(t.value, ")"), t);
            },
          },
          isPreTag: function (e) {
            return "pre" === e;
          },
          isUnaryTag: Qo,
          mustUseProp: ln,
          canBeLeftOpenTag: ea,
          isReservedTag: Sn,
          getTagNamespace: Tn,
          staticKeys: (function (e) {
            return e
              .reduce(function (e, t) {
                return e.concat(t.staticKeys || []);
              }, [])
              .join(",");
          })(Qa),
        },
        ns = T(function (e) {
          return b(
            "type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" +
              (e ? "," + e : "")
          );
        });
      function is(e, t) {
        e &&
          ((es = ns(t.staticKeys || "")),
          (ts = t.isReservedTag || P),
          (function e(t) {
            t.static = (function (e) {
              if (2 === e.type) return !1;
              if (3 === e.type) return !0;
              return !(
                !e.pre &&
                (e.hasBindings ||
                  e.if ||
                  e.for ||
                  w(e.tag) ||
                  !ts(e.tag) ||
                  (function (e) {
                    for (; e.parent; ) {
                      if ("template" !== (e = e.parent).tag) return !1;
                      if (e.for) return !0;
                    }
                    return !1;
                  })(e) ||
                  !Object.keys(e).every(es))
              );
            })(t);
            if (1 === t.type) {
              if (
                !ts(t.tag) &&
                "slot" !== t.tag &&
                null == t.attrsMap["inline-template"]
              )
                return;
              for (var r = 0, n = t.children.length; r < n; r++) {
                var i = t.children[r];
                e(i), i.static || (t.static = !1);
              }
              if (t.ifConditions)
                for (var r = 1, n = t.ifConditions.length; r < n; r++) {
                  var o = t.ifConditions[r].block;
                  e(o), o.static || (t.static = !1);
                }
            }
          })(e),
          (function e(t, r) {
            if (1 === t.type) {
              if (
                ((t.static || t.once) && (t.staticInFor = r),
                t.static &&
                  t.children.length &&
                  (1 !== t.children.length || 3 !== t.children[0].type))
              )
                return void (t.staticRoot = !0);
              if (((t.staticRoot = !1), t.children))
                for (var n = 0, i = t.children.length; n < i; n++)
                  e(t.children[n], r || !!t.for);
              if (t.ifConditions)
                for (var n = 1, i = t.ifConditions.length; n < i; n++)
                  e(t.ifConditions[n].block, r);
            }
          })(e, !1));
      }
      var os = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        as = /\([^)]*?\);*$/,
        ss =
          /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        ls = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46],
        },
        cs = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"],
        },
        us = function (e) {
          return "if(".concat(e, ")return null;");
        },
        fs = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: us("$event.target !== $event.currentTarget"),
          ctrl: us("!$event.ctrlKey"),
          shift: us("!$event.shiftKey"),
          alt: us("!$event.altKey"),
          meta: us("!$event.metaKey"),
          left: us("'button' in $event && $event.button !== 0"),
          middle: us("'button' in $event && $event.button !== 1"),
          right: us("'button' in $event && $event.button !== 2"),
        };
      function hs(e, t) {
        var r = t ? "nativeOn:" : "on:",
          n = "",
          i = "";
        for (var o in e) {
          var a = ds(e[o]);
          e[o] && e[o].dynamic
            ? (i += "".concat(o, ",").concat(a, ","))
            : (n += '"'.concat(o, '":').concat(a, ","));
        }
        return (
          (n = "{".concat(n.slice(0, -1), "}")),
          i ? r + "_d(".concat(n, ",[").concat(i.slice(0, -1), "])") : r + n
        );
      }
      function ds(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e))
          return "[".concat(
            e
              .map(function (e) {
                return ds(e);
              })
              .join(","),
            "]"
          );
        var t = ss.test(e.value),
          r = os.test(e.value),
          n = ss.test(e.value.replace(as, ""));
        if (e.modifiers) {
          var i = "",
            o = "",
            a = [],
            s = function (t) {
              if (fs[t]) (o += fs[t]), ls[t] && a.push(t);
              else if ("exact" === t) {
                var r = e.modifiers;
                o += us(
                  ["ctrl", "shift", "alt", "meta"]
                    .filter(function (e) {
                      return !r[e];
                    })
                    .map(function (e) {
                      return "$event.".concat(e, "Key");
                    })
                    .join("||")
                );
              } else a.push(t);
            };
          for (var l in e.modifiers) s(l);
          a.length &&
            (i += (function (e) {
              return (
                "if(!$event.type.indexOf('key')&&" +
                "".concat(e.map(ps).join("&&"), ")return null;")
              );
            })(a)),
            o && (i += o);
          var c = t
            ? "return ".concat(e.value, ".apply(null, arguments)")
            : r
            ? "return (".concat(e.value, ").apply(null, arguments)")
            : n
            ? "return ".concat(e.value)
            : e.value;
          return "function($event){".concat(i).concat(c, "}");
        }
        return t || r
          ? e.value
          : "function($event){".concat(
              n ? "return ".concat(e.value) : e.value,
              "}"
            );
      }
      function ps(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==".concat(t);
        var r = ls[e],
          n = cs[e];
        return (
          "_k($event.keyCode," +
          "".concat(JSON.stringify(e), ",") +
          "".concat(JSON.stringify(r), ",") +
          "$event.key," +
          "".concat(JSON.stringify(n)) +
          ")"
        );
      }
      var gs = {
          on: function (e, t) {
            e.wrapListeners = function (e) {
              return "_g(".concat(e, ",").concat(t.value, ")");
            };
          },
          bind: function (e, t) {
            e.wrapData = function (r) {
              return "_b("
                .concat(r, ",'")
                .concat(e.tag, "',")
                .concat(t.value, ",")
                .concat(t.modifiers && t.modifiers.prop ? "true" : "false")
                .concat(t.modifiers && t.modifiers.sync ? ",true" : "", ")");
            };
          },
          cloak: D,
        },
        ms = (function () {
          return function (e) {
            (this.options = e),
              (this.warn = e.warn || oi),
              (this.transforms = ai(e.modules, "transformCode")),
              (this.dataGenFns = ai(e.modules, "genData")),
              (this.directives = N(N({}, gs), e.directives));
            var t = e.isReservedTag || P;
            (this.maybeComponent = function (e) {
              return !!e.component || !t(e.tag);
            }),
              (this.onceId = 0),
              (this.staticRenderFns = []),
              (this.pre = !1);
          };
        })();
      function vs(e, t) {
        var r = new ms(t),
          n = e ? ("script" === e.tag ? "null" : ys(e, r)) : '_c("div")';
        return {
          render: "with(this){return ".concat(n, "}"),
          staticRenderFns: r.staticRenderFns,
        };
      }
      function ys(e, t) {
        if (
          (e.parent && (e.pre = e.pre || e.parent.pre),
          e.staticRoot && !e.staticProcessed)
        )
          return bs(e, t);
        if (e.once && !e.onceProcessed) return ws(e, t);
        if (e.for && !e.forProcessed) return Cs(e, t);
        if (e.if && !e.ifProcessed) return xs(e, t);
        if ("template" !== e.tag || e.slotTarget || t.pre) {
          if ("slot" === e.tag)
            return (function (e, t) {
              var r = e.slotName || '"default"',
                n = ks(e, t),
                i = "_t("
                  .concat(r)
                  .concat(n ? ",function(){return ".concat(n, "}") : ""),
                o =
                  e.attrs || e.dynamicAttrs
                    ? Ms(
                        (e.attrs || [])
                          .concat(e.dynamicAttrs || [])
                          .map(function (e) {
                            return {
                              name: L(e.name),
                              value: e.value,
                              dynamic: e.dynamic,
                            };
                          })
                      )
                    : null,
                a = e.attrsMap["v-bind"];
              (!o && !a) || n || (i += ",null");
              o && (i += ",".concat(o));
              a && (i += "".concat(o ? "" : ",null", ",").concat(a));
              return i + ")";
            })(e, t);
          var r = void 0;
          if (e.component)
            r = (function (e, t, r) {
              var n = t.inlineTemplate ? null : ks(t, r, !0);
              return "_c("
                .concat(e, ",")
                .concat(_s(t, r))
                .concat(n ? ",".concat(n) : "", ")");
            })(e.component, e, t);
          else {
            var n = void 0,
              i = t.maybeComponent(e);
            (!e.plain || (e.pre && i)) && (n = _s(e, t));
            var o = void 0,
              a = t.options.bindings;
            i &&
              a &&
              !1 !== a.__isScriptSetup &&
              (o = (function (e, t) {
                var r = L(t),
                  n = A(r),
                  i = function (i) {
                    return e[t] === i
                      ? t
                      : e[r] === i
                      ? r
                      : e[n] === i
                      ? n
                      : void 0;
                  },
                  o = i("setup-const") || i("setup-reactive-const");
                if (o) return o;
                var a =
                  i("setup-let") || i("setup-ref") || i("setup-maybe-ref");
                if (a) return a;
              })(a, e.tag)),
              o || (o = "'".concat(e.tag, "'"));
            var s = e.inlineTemplate ? null : ks(e, t, !0);
            r = "_c("
              .concat(o)
              .concat(n ? ",".concat(n) : "")
              .concat(s ? ",".concat(s) : "", ")");
          }
          for (var l = 0; l < t.transforms.length; l++)
            r = t.transforms[l](e, r);
          return r;
        }
        return ks(e, t) || "void 0";
      }
      function bs(e, t) {
        e.staticProcessed = !0;
        var r = t.pre;
        return (
          e.pre && (t.pre = e.pre),
          t.staticRenderFns.push("with(this){return ".concat(ys(e, t), "}")),
          (t.pre = r),
          "_m("
            .concat(t.staticRenderFns.length - 1)
            .concat(e.staticInFor ? ",true" : "", ")")
        );
      }
      function ws(e, t) {
        if (((e.onceProcessed = !0), e.if && !e.ifProcessed)) return xs(e, t);
        if (e.staticInFor) {
          for (var r = "", n = e.parent; n; ) {
            if (n.for) {
              r = n.key;
              break;
            }
            n = n.parent;
          }
          return r
            ? "_o(".concat(ys(e, t), ",").concat(t.onceId++, ",").concat(r, ")")
            : ys(e, t);
        }
        return bs(e, t);
      }
      function xs(e, t, r, n) {
        return (
          (e.ifProcessed = !0),
          (function e(t, r, n, i) {
            if (!t.length) return i || "_e()";
            var o = t.shift();
            return o.exp
              ? "("
                  .concat(o.exp, ")?")
                  .concat(a(o.block), ":")
                  .concat(e(t, r, n, i))
              : "".concat(a(o.block));
            function a(e) {
              return n ? n(e, r) : e.once ? ws(e, r) : ys(e, r);
            }
          })(e.ifConditions.slice(), t, r, n)
        );
      }
      function Cs(e, t, r, n) {
        var i = e.for,
          o = e.alias,
          a = e.iterator1 ? ",".concat(e.iterator1) : "",
          s = e.iterator2 ? ",".concat(e.iterator2) : "";
        return (
          (e.forProcessed = !0),
          "".concat(n || "_l", "((").concat(i, "),") +
            "function(".concat(o).concat(a).concat(s, "){") +
            "return ".concat((r || ys)(e, t)) +
            "})"
        );
      }
      function _s(e, t) {
        var r = "{",
          n = (function (e, t) {
            var r = e.directives;
            if (!r) return;
            var n,
              i,
              o,
              a,
              s = "directives:[",
              l = !1;
            for (n = 0, i = r.length; n < i; n++) {
              (o = r[n]), (a = !0);
              var c = t.directives[o.name];
              c && (a = !!c(e, o, t.warn)),
                a &&
                  ((l = !0),
                  (s += '{name:"'
                    .concat(o.name, '",rawName:"')
                    .concat(o.rawName, '"')
                    .concat(
                      o.value
                        ? ",value:("
                            .concat(o.value, "),expression:")
                            .concat(JSON.stringify(o.value))
                        : ""
                    )
                    .concat(
                      o.arg
                        ? ",arg:".concat(
                            o.isDynamicArg ? o.arg : '"'.concat(o.arg, '"')
                          )
                        : ""
                    )
                    .concat(
                      o.modifiers
                        ? ",modifiers:".concat(JSON.stringify(o.modifiers))
                        : "",
                      "},"
                    )));
            }
            if (l) return s.slice(0, -1) + "]";
          })(e, t);
        n && (r += n + ","),
          e.key && (r += "key:".concat(e.key, ",")),
          e.ref && (r += "ref:".concat(e.ref, ",")),
          e.refInFor && (r += "refInFor:true,"),
          e.pre && (r += "pre:true,"),
          e.component && (r += 'tag:"'.concat(e.tag, '",'));
        for (var i = 0; i < t.dataGenFns.length; i++) r += t.dataGenFns[i](e);
        if (
          (e.attrs && (r += "attrs:".concat(Ms(e.attrs), ",")),
          e.props && (r += "domProps:".concat(Ms(e.props), ",")),
          e.events && (r += "".concat(hs(e.events, !1), ",")),
          e.nativeEvents && (r += "".concat(hs(e.nativeEvents, !0), ",")),
          e.slotTarget &&
            !e.slotScope &&
            (r += "slot:".concat(e.slotTarget, ",")),
          e.scopedSlots &&
            (r += "".concat(
              (function (e, t, r) {
                var n =
                    e.for ||
                    Object.keys(t).some(function (e) {
                      var r = t[e];
                      return r.slotTargetDynamic || r.if || r.for || Ss(r);
                    }),
                  i = !!e.if;
                if (!n)
                  for (var o = e.parent; o; ) {
                    if ((o.slotScope && o.slotScope !== ja) || o.for) {
                      n = !0;
                      break;
                    }
                    o.if && (i = !0), (o = o.parent);
                  }
                var a = Object.keys(t)
                  .map(function (e) {
                    return Ts(t[e], r);
                  })
                  .join(",");
                return "scopedSlots:_u(["
                  .concat(a, "]")
                  .concat(n ? ",null,true" : "")
                  .concat(
                    !n && i
                      ? ",null,false,".concat(
                          (function (e) {
                            var t = 5381,
                              r = e.length;
                            for (; r; ) t = (33 * t) ^ e.charCodeAt(--r);
                            return t >>> 0;
                          })(a)
                        )
                      : "",
                    ")"
                  );
              })(e, e.scopedSlots, t),
              ","
            )),
          e.model &&
            (r += "model:{value:"
              .concat(e.model.value, ",callback:")
              .concat(e.model.callback, ",expression:")
              .concat(e.model.expression, "},")),
          e.inlineTemplate)
        ) {
          var o = (function (e, t) {
            var r = e.children[0];
            0;
            if (r && 1 === r.type) {
              var n = vs(r, t.options);
              return "inlineTemplate:{render:function(){"
                .concat(n.render, "},staticRenderFns:[")
                .concat(
                  n.staticRenderFns
                    .map(function (e) {
                      return "function(){".concat(e, "}");
                    })
                    .join(","),
                  "]}"
                );
            }
          })(e, t);
          o && (r += "".concat(o, ","));
        }
        return (
          (r = r.replace(/,$/, "") + "}"),
          e.dynamicAttrs &&
            (r = "_b("
              .concat(r, ',"')
              .concat(e.tag, '",')
              .concat(Ms(e.dynamicAttrs), ")")),
          e.wrapData && (r = e.wrapData(r)),
          e.wrapListeners && (r = e.wrapListeners(r)),
          r
        );
      }
      function Ss(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(Ss));
      }
      function Ts(e, t) {
        var r = e.attrsMap["slot-scope"];
        if (e.if && !e.ifProcessed && !r) return xs(e, t, Ts, "null");
        if (e.for && !e.forProcessed) return Cs(e, t, Ts);
        var n = e.slotScope === ja ? "" : String(e.slotScope),
          i =
            "function(".concat(n, "){") +
            "return ".concat(
              "template" === e.tag
                ? e.if && r
                  ? "("
                      .concat(e.if, ")?")
                      .concat(ks(e, t) || "undefined", ":undefined")
                  : ks(e, t) || "undefined"
                : ys(e, t),
              "}"
            ),
          o = n ? "" : ",proxy:true";
        return "{key:"
          .concat(e.slotTarget || '"default"', ",fn:")
          .concat(i)
          .concat(o, "}");
      }
      function ks(e, t, r, n, i) {
        var o = e.children;
        if (o.length) {
          var a = o[0];
          if (
            1 === o.length &&
            a.for &&
            "template" !== a.tag &&
            "slot" !== a.tag
          ) {
            var s = r ? (t.maybeComponent(a) ? ",1" : ",0") : "";
            return "".concat((n || ys)(a, t)).concat(s);
          }
          var l = r
              ? (function (e, t) {
                  for (var r = 0, n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (1 === i.type) {
                      if (
                        Ls(i) ||
                        (i.ifConditions &&
                          i.ifConditions.some(function (e) {
                            return Ls(e.block);
                          }))
                      ) {
                        r = 2;
                        break;
                      }
                      (t(i) ||
                        (i.ifConditions &&
                          i.ifConditions.some(function (e) {
                            return t(e.block);
                          }))) &&
                        (r = 1);
                    }
                  }
                  return r;
                })(o, t.maybeComponent)
              : 0,
            c = i || As;
          return "["
            .concat(
              o
                .map(function (e) {
                  return c(e, t);
                })
                .join(","),
              "]"
            )
            .concat(l ? ",".concat(l) : "");
        }
      }
      function Ls(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag;
      }
      function As(e, t) {
        return 1 === e.type
          ? ys(e, t)
          : 3 === e.type && e.isComment
          ? (function (e) {
              return "_e(".concat(JSON.stringify(e.text), ")");
            })(e)
          : (function (e) {
              return "_v(".concat(
                2 === e.type ? e.expression : Os(JSON.stringify(e.text)),
                ")"
              );
            })(e);
      }
      function Ms(e) {
        for (var t = "", r = "", n = 0; n < e.length; n++) {
          var i = e[n],
            o = Os(i.value);
          i.dynamic
            ? (r += "".concat(i.name, ",").concat(o, ","))
            : (t += '"'.concat(i.name, '":').concat(o, ","));
        }
        return (
          (t = "{".concat(t.slice(0, -1), "}")),
          r ? "_d(".concat(t, ",[").concat(r.slice(0, -1), "])") : t
        );
      }
      function Os(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      new RegExp(
        "\\b" +
          "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments"
            .split(",")
            .join("\\b|\\b") +
          "\\b"
      ),
        new RegExp(
          "\\b" +
            "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
            "\\s*\\([^\\)]*\\)"
        );
      function Es(e, t) {
        try {
          return new Function(e);
        } catch (r) {
          return t.push({ err: r, code: e }), D;
        }
      }
      function Rs(e) {
        var t = Object.create(null);
        return function (r, n, i) {
          (n = N({}, n)).warn;
          delete n.warn;
          var o = n.delimiters ? String(n.delimiters) + r : r;
          if (t[o]) return t[o];
          var a = e(r, n);
          var s = {},
            l = [];
          return (
            (s.render = Es(a.render, l)),
            (s.staticRenderFns = a.staticRenderFns.map(function (e) {
              return Es(e, l);
            })),
            (t[o] = s)
          );
        };
      }
      var Ns,
        Is = (function (e) {
          return function (t) {
            function r(r, n) {
              var i = Object.create(t),
                o = [],
                a = [],
                s = function (e, t, r) {
                  (r ? a : o).push(e);
                };
              if (n)
                for (var l in (n.modules &&
                  (i.modules = (t.modules || []).concat(n.modules)),
                n.directives &&
                  (i.directives = N(
                    Object.create(t.directives || null),
                    n.directives
                  )),
                n))
                  "modules" !== l && "directives" !== l && (i[l] = n[l]);
              i.warn = s;
              var c = e(r.trim(), i);
              return (c.errors = o), (c.tips = a), c;
            }
            return { compile: r, compileToFunctions: Rs(r) };
          };
        })(function (e, t) {
          var r = za(e.trim(), t);
          !1 !== t.optimize && is(r, t);
          var n = vs(r, t);
          return {
            ast: r,
            render: n.render,
            staticRenderFns: n.staticRenderFns,
          };
        })(rs).compileToFunctions;
      function Ds(e) {
        return (
          ((Ns = Ns || document.createElement("div")).innerHTML = e
            ? '<a href="\n"/>'
            : '<div a="\n"/>'),
          Ns.innerHTML.indexOf("&#10;") > 0
        );
      }
      var Ps = !!Z && Ds(!1),
        Hs = !!Z && Ds(!0),
        $s = T(function (e) {
          var t = An(e);
          return t && t.innerHTML;
        }),
        Bs = Zr.prototype.$mount;
      (Zr.prototype.$mount = function (e, t) {
        if (
          (e = e && An(e)) === document.body ||
          e === document.documentElement
        )
          return this;
        var r = this.$options;
        if (!r.render) {
          var n = r.template;
          if (n)
            if ("string" == typeof n) "#" === n.charAt(0) && (n = $s(n));
            else {
              if (!n.nodeType) return this;
              n = n.innerHTML;
            }
          else
            e &&
              (n = (function (e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)), t.innerHTML;
              })(e));
          if (n) {
            0;
            var i = Is(
                n,
                {
                  outputSourceRange: !1,
                  shouldDecodeNewlines: Ps,
                  shouldDecodeNewlinesForHref: Hs,
                  delimiters: r.delimiters,
                  comments: r.comments,
                },
                this
              ),
              o = i.render,
              a = i.staticRenderFns;
            (r.render = o), (r.staticRenderFns = a);
          }
        }
        return Bs.call(this, e, t);
      }),
        (Zr.compile = Is);
    }).call(t, r(0), r(11).setImmediate);
  },
  function (e, t, r) {
    (function (e, t) {
      !(function (e, r) {
        "use strict";
        if (!e.setImmediate) {
          var n,
            i = 1,
            o = {},
            a = !1,
            s = e.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (l = l && l.setTimeout ? l : e),
            "[object process]" === {}.toString.call(e.process)
              ? (n = function (e) {
                  t.nextTick(function () {
                    u(e);
                  });
                })
              : (function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      r = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = r),
                      t
                    );
                  }
                })()
              ? (function () {
                  var t = "setImmediate$" + Math.random() + "$",
                    r = function (r) {
                      r.source === e &&
                        "string" == typeof r.data &&
                        0 === r.data.indexOf(t) &&
                        u(+r.data.slice(t.length));
                    };
                  e.addEventListener
                    ? e.addEventListener("message", r, !1)
                    : e.attachEvent("onmessage", r),
                    (n = function (r) {
                      e.postMessage(t + r, "*");
                    });
                })()
              : e.MessageChannel
              ? (function () {
                  var e = new MessageChannel();
                  (e.port1.onmessage = function (e) {
                    u(e.data);
                  }),
                    (n = function (t) {
                      e.port2.postMessage(t);
                    });
                })()
              : s && "onreadystatechange" in s.createElement("script")
              ? (function () {
                  var e = s.documentElement;
                  n = function (t) {
                    var r = s.createElement("script");
                    (r.onreadystatechange = function () {
                      u(t),
                        (r.onreadystatechange = null),
                        e.removeChild(r),
                        (r = null);
                    }),
                      e.appendChild(r);
                  };
                })()
              : (n = function (e) {
                  setTimeout(u, 0, e);
                }),
            (l.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), r = 0;
                r < t.length;
                r++
              )
                t[r] = arguments[r + 1];
              var a = { callback: e, args: t };
              return (o[i] = a), n(i), i++;
            }),
            (l.clearImmediate = c);
        }
        function c(e) {
          delete o[e];
        }
        function u(e) {
          if (a) setTimeout(u, 0, e);
          else {
            var t = o[e];
            if (t) {
              a = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(r, n);
                  }
                })(t);
              } finally {
                c(e), (a = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }).call(t, r(0), r(5));
  },
  function (e, t, r) {
    "use strict";
    var n = r(17),
      i = r(71);
    var o = function (e) {
        r(31);
      },
      a = r(34)(n.a, i.a, !1, o, null, null);
    t.a = a.exports;
  },
  function (e, t, r) {
    var n = r(32);
    "string" == typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    r(7)("530e9d33", n, !0, {});
  },
  function (e, t, r) {
    (e.exports = r(6)(!1)).push([
      e.i,
      "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#app,.alert{margin-top:1em}.line-error{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}h1,h2{font-weight:400}a{color:#42b983}.codemirror{text-align:left}.message{margin:1em}.validate{margin-top:1em}",
      "",
    ]);
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var r = [], n = {}, i = 0; i < t.length; i++) {
        var o = t[i],
          a = o[0],
          s = { id: e + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
        n[a] ? n[a].parts.push(s) : r.push((n[a] = { id: a, parts: [s] }));
      }
      return r;
    };
  },
  function (e, t) {
    e.exports = function (e, t, r, n, i, o) {
      var a,
        s = (e = e || {}),
        l = typeof e.default;
      ("object" !== l && "function" !== l) || ((a = e), (s = e.default));
      var c,
        u = "function" == typeof s ? s.options : s;
      if (
        (t &&
          ((u.render = t.render),
          (u.staticRenderFns = t.staticRenderFns),
          (u._compiled = !0)),
        r && (u.functional = !0),
        i && (u._scopeId = i),
        o
          ? ((c = function (e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                n && n.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(o);
            }),
            (u._ssrRegister = c))
          : n && (c = n),
        c)
      ) {
        var f = u.functional,
          h = f ? u.render : u.beforeCreate;
        f
          ? ((u._injectStyles = c),
            (u.render = function (e, t) {
              return c.call(t), h(e, t);
            }))
          : (u.beforeCreate = h ? [].concat(h, c) : [c]);
      }
      return { esModule: a, exports: s, options: u };
    };
  },
  function (e, t, r) {
    !(function (t, n) {
      e.exports = n(r(1));
    })(0, function (e) {
      return (function (e) {
        function t(n) {
          if (r[n]) return r[n].exports;
          var i = (r[n] = { i: n, l: !1, exports: {} });
          return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
        }
        var r = {};
        return (
          (t.m = e),
          (t.c = r),
          (t.i = function (e) {
            return e;
          }),
          (t.d = function (e, r, n) {
            t.o(e, r) ||
              Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n,
              });
          }),
          (t.n = function (e) {
            var r =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(r, "a", r), r;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = "/"),
          t((t.s = 3))
        );
      })([
        function (t, r) {
          t.exports = e;
        },
        function (e, t, r) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(r(0)),
            i = window.CodeMirror || n.default;
          "function" != typeof Object.assign &&
            Object.defineProperty(Object, "assign", {
              value: function (e, t) {
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var r = Object(e), n = 1; n < arguments.length; n++) {
                  var i = arguments[n];
                  if (null != i)
                    for (var o in i)
                      Object.prototype.hasOwnProperty.call(i, o) &&
                        (r[o] = i[o]);
                }
                return r;
              },
              writable: !0,
              configurable: !0,
            }),
            (t.default = {
              name: "codemirror",
              data: function () {
                return { content: "", codemirror: null, cminstance: null };
              },
              props: {
                code: String,
                value: String,
                marker: Function,
                unseenLines: Array,
                name: { type: String, default: "codemirror" },
                placeholder: { type: String, default: "" },
                merge: { type: Boolean, default: !1 },
                options: {
                  type: Object,
                  default: function () {
                    return {};
                  },
                },
                events: {
                  type: Array,
                  default: function () {
                    return [];
                  },
                },
                globalOptions: {
                  type: Object,
                  default: function () {
                    return {};
                  },
                },
                globalEvents: {
                  type: Array,
                  default: function () {
                    return [];
                  },
                },
              },
              watch: {
                options: {
                  deep: !0,
                  handler: function (e) {
                    for (var t in e) this.cminstance.setOption(t, e[t]);
                  },
                },
                merge: function () {
                  this.$nextTick(this.switchMerge);
                },
                code: function (e) {
                  this.handerCodeChange(e);
                },
                value: function (e) {
                  this.handerCodeChange(e);
                },
              },
              methods: {
                initialize: function () {
                  var e = this,
                    t = Object.assign({}, this.globalOptions, this.options);
                  this.merge
                    ? ((this.codemirror = i.MergeView(this.$refs.mergeview, t)),
                      (this.cminstance = this.codemirror.edit))
                    : ((this.codemirror = i.fromTextArea(
                        this.$refs.textarea,
                        t
                      )),
                      (this.cminstance = this.codemirror),
                      this.cminstance.setValue(
                        this.code || this.value || this.content
                      )),
                    this.cminstance.on("change", function (t) {
                      (e.content = t.getValue()),
                        e.$emit && e.$emit("input", e.content);
                    });
                  var r = {};
                  [
                    "scroll",
                    "changes",
                    "beforeChange",
                    "cursorActivity",
                    "keyHandled",
                    "inputRead",
                    "electricInput",
                    "beforeSelectionChange",
                    "viewportChange",
                    "swapDoc",
                    "gutterClick",
                    "gutterContextMenu",
                    "focus",
                    "blur",
                    "refresh",
                    "optionChange",
                    "scrollCursorIntoView",
                    "update",
                  ]
                    .concat(this.events)
                    .concat(this.globalEvents)
                    .filter(function (e) {
                      return !r[e] && (r[e] = !0);
                    })
                    .forEach(function (t) {
                      e.cminstance.on(t, function () {
                        for (
                          var r = arguments.length, n = Array(r), i = 0;
                          i < r;
                          i++
                        )
                          n[i] = arguments[i];
                        e.$emit.apply(e, [t].concat(n));
                        var o = t.replace(/([A-Z])/g, "-$1").toLowerCase();
                        o !== t && e.$emit.apply(e, [o].concat(n));
                      });
                    }),
                    this.$emit("ready", this.codemirror),
                    this.unseenLineMarkers(),
                    this.refresh();
                },
                refresh: function () {
                  var e = this;
                  this.$nextTick(function () {
                    e.cminstance.refresh();
                  });
                },
                destroy: function () {
                  var e = this.cminstance.doc.cm.getWrapperElement();
                  e && e.remove && e.remove();
                },
                handerCodeChange: function (e) {
                  if (e !== this.cminstance.getValue()) {
                    var t = this.cminstance.getScrollInfo();
                    this.cminstance.setValue(e),
                      (this.content = e),
                      this.cminstance.scrollTo(t.left, t.top);
                  }
                  this.unseenLineMarkers();
                },
                unseenLineMarkers: function () {
                  var e = this;
                  void 0 !== this.unseenLines &&
                    void 0 !== this.marker &&
                    this.unseenLines.forEach(function (t) {
                      var r = e.cminstance.lineInfo(t);
                      e.cminstance.setGutterMarker(
                        t,
                        "breakpoints",
                        r.gutterMarkers ? null : e.marker()
                      );
                    });
                },
                switchMerge: function () {
                  var e = this.cminstance.doc.history,
                    t = this.cminstance.doc.cleanGeneration;
                  (this.options.value = this.cminstance.getValue()),
                    this.destroy(),
                    this.initialize(),
                    (this.cminstance.doc.history = e),
                    (this.cminstance.doc.cleanGeneration = t);
                },
              },
              mounted: function () {
                this.initialize();
              },
              beforeDestroy: function () {
                this.destroy();
              },
            });
        },
        function (e, t, r) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = r(1),
            i = r.n(n);
          for (var o in n)
            ["default", "default"].indexOf(o) < 0 &&
              (function (e) {
                r.d(t, e, function () {
                  return n[e];
                });
              })(o);
          var a = r(5),
            s = r(4)(i.a, a.a, !1, null, null, null);
          t.default = s.exports;
        },
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.install = t.codemirror = t.CodeMirror = void 0);
          var i = n(r(0)),
            o = n(r(2)),
            a = window.CodeMirror || i.default,
            s = function (e, t) {
              t &&
                (t.options &&
                  (o.default.props.globalOptions.default = function () {
                    return t.options;
                  }),
                t.events &&
                  (o.default.props.globalEvents.default = function () {
                    return t.events;
                  })),
                e.component(o.default.name, o.default);
            },
            l = { CodeMirror: a, codemirror: o.default, install: s };
          (t.default = l),
            (t.CodeMirror = a),
            (t.codemirror = o.default),
            (t.install = s);
        },
        function (e, t) {
          e.exports = function (e, t, r, n, i, o) {
            var a,
              s = (e = e || {}),
              l = typeof e.default;
            ("object" !== l && "function" !== l) || ((a = e), (s = e.default));
            var c,
              u = "function" == typeof s ? s.options : s;
            if (
              (t &&
                ((u.render = t.render),
                (u.staticRenderFns = t.staticRenderFns),
                (u._compiled = !0)),
              r && (u.functional = !0),
              i && (u._scopeId = i),
              o
                ? ((c = function (e) {
                    (e =
                      e ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent &&
                        this.parent.$vnode &&
                        this.parent.$vnode.ssrContext)) ||
                      "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                      (e = __VUE_SSR_CONTEXT__),
                      n && n.call(this, e),
                      e &&
                        e._registeredComponents &&
                        e._registeredComponents.add(o);
                  }),
                  (u._ssrRegister = c))
                : n && (c = n),
              c)
            ) {
              var f = u.functional,
                h = f ? u.render : u.beforeCreate;
              f
                ? ((u._injectStyles = c),
                  (u.render = function (e, t) {
                    return c.call(t), h(e, t);
                  }))
                : (u.beforeCreate = h ? [].concat(h, c) : [c]);
            }
            return { esModule: a, exports: s, options: u };
          };
        },
        function (e, t, r) {
          "use strict";
          var n = {
            render: function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r(
                "div",
                { staticClass: "vue-codemirror", class: { merge: e.merge } },
                [
                  e.merge
                    ? r("div", { ref: "mergeview" })
                    : r("textarea", {
                        ref: "textarea",
                        attrs: { name: e.name, placeholder: e.placeholder },
                      }),
                ]
              );
            },
            staticRenderFns: [],
          };
          t.a = n;
        },
      ]);
    });
  },
  function (e, t, r) {
    var n = r(37);
    "string" == typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    r(7)("10c1cfc9", n, !0, {});
  },
  function (e, t, r) {
    (e.exports = r(6)(!1)).push([
      e.i,
      '.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:none;position:relative;z-index:0}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}',
      "",
    ]);
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      "use strict";
      e.defineMode("toml", function () {
        return {
          startState: function () {
            return { inString: !1, stringType: "", lhs: !0, inArray: 0 };
          },
          token: function (e, t) {
            if (
              (t.inString ||
                ('"' != e.peek() && "'" != e.peek()) ||
                ((t.stringType = e.peek()), e.next(), (t.inString = !0)),
              e.sol() && 0 === t.inArray && (t.lhs = !0),
              t.inString)
            ) {
              for (; t.inString && !e.eol(); )
                e.peek() === t.stringType
                  ? (e.next(), (t.inString = !1))
                  : "\\" === e.peek()
                  ? (e.next(), e.next())
                  : e.match(/^.[^\\\"\']*/);
              return t.lhs ? "property string" : "string";
            }
            return t.inArray && "]" === e.peek()
              ? (e.next(), t.inArray--, "bracket")
              : t.lhs && "[" === e.peek() && e.skipTo("]")
              ? (e.next(), "]" === e.peek() && e.next(), "atom")
              : "#" === e.peek()
              ? (e.skipToEnd(), "comment")
              : e.eatSpace()
              ? null
              : t.lhs &&
                e.eatWhile(function (e) {
                  return "=" != e && " " != e;
                })
              ? "property"
              : t.lhs && "=" === e.peek()
              ? (e.next(), (t.lhs = !1), null)
              : !t.lhs && e.match(/^\d\d\d\d[\d\-\:\.T]*Z/)
              ? "atom"
              : t.lhs || (!e.match("true") && !e.match("false"))
              ? t.lhs || "[" !== e.peek()
                ? !t.lhs && e.match(/^\-?\d+(?:\.\d+)?/)
                  ? "number"
                  : (e.eatSpace() || e.next(), null)
                : (t.inArray++, e.next(), "bracket")
              : "atom";
          },
        };
      }),
        e.defineMIME("text/x-toml", "toml");
    });
  },
  function (e, t, r) {
    var n = r(40);
    "string" == typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    r(7)("a67005b6", n, !0, {});
  },
  function (e, t, r) {
    (e.exports = r(6)(!1)).push([
      e.i,
      ".cm-s-base16-light.CodeMirror{background:#f5f5f5;color:#202020}.cm-s-base16-light div.CodeMirror-selected{background:#e0e0e0}.cm-s-base16-light .CodeMirror-line::selection,.cm-s-base16-light .CodeMirror-line>span::selection,.cm-s-base16-light .CodeMirror-line>span>span::selection{background:#e0e0e0}.cm-s-base16-light .CodeMirror-line::-moz-selection,.cm-s-base16-light .CodeMirror-line>span::-moz-selection,.cm-s-base16-light .CodeMirror-line>span>span::-moz-selection{background:#e0e0e0}.cm-s-base16-light .CodeMirror-gutters{background:#f5f5f5;border-right:0}.cm-s-base16-light .CodeMirror-guttermarker{color:#ac4142}.cm-s-base16-light .CodeMirror-guttermarker-subtle,.cm-s-base16-light .CodeMirror-linenumber{color:#b0b0b0}.cm-s-base16-light .CodeMirror-cursor{border-left:1px solid #505050}.cm-s-base16-light span.cm-comment{color:#8f5536}.cm-s-base16-light span.cm-atom,.cm-s-base16-light span.cm-number{color:#aa759f}.cm-s-base16-light span.cm-attribute,.cm-s-base16-light span.cm-property{color:#90a959}.cm-s-base16-light span.cm-keyword{color:#ac4142}.cm-s-base16-light span.cm-string{color:#f4bf75}.cm-s-base16-light span.cm-variable{color:#90a959}.cm-s-base16-light span.cm-variable-2{color:#6a9fb5}.cm-s-base16-light span.cm-def{color:#d28445}.cm-s-base16-light span.cm-bracket{color:#202020}.cm-s-base16-light span.cm-tag{color:#ac4142}.cm-s-base16-light span.cm-link{color:#aa759f}.cm-s-base16-light span.cm-error{background:#ac4142;color:#505050}.cm-s-base16-light .CodeMirror-activeline-background{background:#dddcdc}.cm-s-base16-light .CodeMirror-matchingbracket{color:#f5f5f5!important;background-color:#6a9fb5!important}",
      "",
    ]);
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      "use strict";
      var t = "CodeMirror-activeline",
        r = "CodeMirror-activeline-background",
        n = "CodeMirror-activeline-gutter";
      function i(e) {
        for (var i = 0; i < e.state.activeLines.length; i++)
          e.removeLineClass(e.state.activeLines[i], "wrap", t),
            e.removeLineClass(e.state.activeLines[i], "background", r),
            e.removeLineClass(e.state.activeLines[i], "gutter", n);
      }
      function o(e, o) {
        for (var a = [], s = 0; s < o.length; s++) {
          var l = o[s],
            c = e.getOption("styleActiveLine");
          if (
            "object" == typeof c && c.nonEmpty
              ? l.anchor.line == l.head.line
              : l.empty()
          ) {
            var u = e.getLineHandleVisualStart(l.head.line);
            a[a.length - 1] != u && a.push(u);
          }
        }
        (function (e, t) {
          if (e.length != t.length) return !1;
          for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
          return !0;
        })(e.state.activeLines, a) ||
          e.operation(function () {
            i(e);
            for (var o = 0; o < a.length; o++)
              e.addLineClass(a[o], "wrap", t),
                e.addLineClass(a[o], "background", r),
                e.addLineClass(a[o], "gutter", n);
            e.state.activeLines = a;
          });
      }
      function a(e, t) {
        o(e, t.ranges);
      }
      e.defineOption("styleActiveLine", !1, function (t, r, n) {
        var s = n != e.Init && n;
        r != s &&
          (s &&
            (t.off("beforeSelectionChange", a),
            i(t),
            delete t.state.activeLines),
          r &&
            ((t.state.activeLines = []),
            o(t, t.listSelections()),
            t.on("beforeSelectionChange", a)));
      });
    });
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      var t = {
          pairs: "()[]{}''\"\"",
          closeBefore: ")]}'\":;>",
          triples: "",
          explode: "[]{}",
        },
        r = e.Pos;
      function n(e, r) {
        return "pairs" == r && "string" == typeof e
          ? e
          : "object" == typeof e && null != e[r]
          ? e[r]
          : t[r];
      }
      e.defineOption("autoCloseBrackets", !1, function (t, r, a) {
        a && a != e.Init && (t.removeKeyMap(i), (t.state.closeBrackets = null)),
          r && (o(n(r, "pairs")), (t.state.closeBrackets = r), t.addKeyMap(i));
      });
      var i = {
        Backspace: function (t) {
          var i = s(t);
          if (!i || t.getOption("disableInput")) return e.Pass;
          for (
            var o = n(i, "pairs"), a = t.listSelections(), l = 0;
            l < a.length;
            l++
          ) {
            if (!a[l].empty()) return e.Pass;
            var c = u(t, a[l].head);
            if (!c || o.indexOf(c) % 2 != 0) return e.Pass;
          }
          for (var l = a.length - 1; l >= 0; l--) {
            var f = a[l].head;
            t.replaceRange(
              "",
              r(f.line, f.ch - 1),
              r(f.line, f.ch + 1),
              "+delete"
            );
          }
        },
        Enter: function (t) {
          var r = s(t),
            i = r && n(r, "explode");
          if (!i || t.getOption("disableInput")) return e.Pass;
          for (var o = t.listSelections(), a = 0; a < o.length; a++) {
            if (!o[a].empty()) return e.Pass;
            var c = u(t, o[a].head);
            if (!c || i.indexOf(c) % 2 != 0) return e.Pass;
          }
          t.operation(function () {
            var e = t.lineSeparator() || "\n";
            t.replaceSelection(e + e, null), l(t, -1), (o = t.listSelections());
            for (var r = 0; r < o.length; r++) {
              var n = o[r].head.line;
              t.indentLine(n, null, !0), t.indentLine(n + 1, null, !0);
            }
          });
        },
      };
      function o(e) {
        for (var t = 0; t < e.length; t++) {
          var r = e.charAt(t),
            n = "'" + r + "'";
          i[n] || (i[n] = a(r));
        }
      }
      function a(t) {
        return function (i) {
          return (function (t, i) {
            var o = s(t);
            if (!o || t.getOption("disableInput")) return e.Pass;
            var a = n(o, "pairs"),
              u = a.indexOf(i);
            if (-1 == u) return e.Pass;
            for (
              var h,
                d = n(o, "closeBefore"),
                p = n(o, "triples"),
                g = a.charAt(u + 1) == i,
                m = t.listSelections(),
                v = u % 2 == 0,
                y = 0;
              y < m.length;
              y++
            ) {
              var b,
                w = m[y],
                x = w.head,
                C = t.getRange(x, r(x.line, x.ch + 1));
              if (v && !w.empty()) b = "surround";
              else if ((!g && v) || C != i)
                if (
                  g &&
                  x.ch > 1 &&
                  p.indexOf(i) >= 0 &&
                  t.getRange(r(x.line, x.ch - 2), x) == i + i
                ) {
                  if (
                    x.ch > 2 &&
                    /\bstring/.test(t.getTokenTypeAt(r(x.line, x.ch - 2)))
                  )
                    return e.Pass;
                  b = "addFour";
                } else if (g) {
                  var _ = 0 == x.ch ? " " : t.getRange(r(x.line, x.ch - 1), x);
                  if (e.isWordChar(C) || _ == i || e.isWordChar(_))
                    return e.Pass;
                  b = "both";
                } else {
                  if (
                    !v ||
                    !(0 === C.length || /\s/.test(C) || d.indexOf(C) > -1)
                  )
                    return e.Pass;
                  b = "both";
                }
              else
                b =
                  g && f(t, x)
                    ? "both"
                    : p.indexOf(i) >= 0 &&
                      t.getRange(x, r(x.line, x.ch + 3)) == i + i + i
                    ? "skipThree"
                    : "skip";
              if (h) {
                if (h != b) return e.Pass;
              } else h = b;
            }
            var S = u % 2 ? a.charAt(u - 1) : i,
              T = u % 2 ? i : a.charAt(u + 1);
            t.operation(function () {
              if ("skip" == h) l(t, 1);
              else if ("skipThree" == h) l(t, 3);
              else if ("surround" == h) {
                for (var e = t.getSelections(), r = 0; r < e.length; r++)
                  e[r] = S + e[r] + T;
                t.replaceSelections(e, "around"),
                  (e = t.listSelections().slice());
                for (var r = 0; r < e.length; r++) e[r] = c(e[r]);
                t.setSelections(e);
              } else
                "both" == h
                  ? (t.replaceSelection(S + T, null),
                    t.triggerElectric(S + T),
                    l(t, -1))
                  : "addFour" == h &&
                    (t.replaceSelection(S + S + S + S, "before"), l(t, 1));
            });
          })(i, t);
        };
      }
      function s(e) {
        var t = e.state.closeBrackets;
        return !t || t.override
          ? t
          : e.getModeAt(e.getCursor()).closeBrackets || t;
      }
      function l(e, t) {
        for (
          var r = [], n = e.listSelections(), i = 0, o = 0;
          o < n.length;
          o++
        ) {
          var a = n[o];
          a.head == e.getCursor() && (i = o);
          var s =
            a.head.ch || t > 0
              ? { line: a.head.line, ch: a.head.ch + t }
              : { line: a.head.line - 1 };
          r.push({ anchor: s, head: s });
        }
        e.setSelections(r, i);
      }
      function c(t) {
        var n = e.cmpPos(t.anchor, t.head) > 0;
        return {
          anchor: new r(t.anchor.line, t.anchor.ch + (n ? -1 : 1)),
          head: new r(t.head.line, t.head.ch + (n ? 1 : -1)),
        };
      }
      function u(e, t) {
        var n = e.getRange(r(t.line, t.ch - 1), r(t.line, t.ch + 1));
        return 2 == n.length ? n : null;
      }
      function f(e, t) {
        var n = e.getTokenAt(r(t.line, t.ch + 1));
        return (
          /\bstring/.test(n.type) &&
          n.start == t.ch &&
          (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)))
        );
      }
      o(t.pairs + "`");
    });
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      "use strict";
      function t(e, t, r, n, i, o) {
        (this.indented = e),
          (this.column = t),
          (this.type = r),
          (this.info = n),
          (this.align = i),
          (this.prev = o);
      }
      function r(e, r, n, i) {
        var o = e.indented;
        return (
          e.context &&
            "statement" == e.context.type &&
            "statement" != n &&
            (o = e.context.indented),
          (e.context = new t(o, r, n, i, null, e.context))
        );
      }
      function n(e) {
        var t = e.context.type;
        return (
          (")" != t && "]" != t && "}" != t) ||
            (e.indented = e.context.indented),
          (e.context = e.context.prev)
        );
      }
      function i(e, t, r) {
        return (
          "variable" == t.prevToken ||
          "type" == t.prevToken ||
          !!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, r)) ||
          !(!t.typeAtEndOfLine || e.column() != e.indentation()) ||
          void 0
        );
      }
      function o(e) {
        for (;;) {
          if (!e || "top" == e.type) return !0;
          if ("}" == e.type && "namespace" != e.prev.info) return !1;
          e = e.prev;
        }
      }
      function a(e) {
        for (var t = {}, r = e.split(" "), n = 0; n < r.length; ++n)
          t[r[n]] = !0;
        return t;
      }
      function s(e, t) {
        return "function" == typeof e ? e(t) : e.propertyIsEnumerable(t);
      }
      e.defineMode("clike", function (a, l) {
        var c,
          u,
          f = a.indentUnit,
          h = l.statementIndentUnit || f,
          d = l.dontAlignCalls,
          p = l.keywords || {},
          g = l.types || {},
          m = l.builtin || {},
          v = l.blockKeywords || {},
          y = l.defKeywords || {},
          b = l.atoms || {},
          w = l.hooks || {},
          x = l.multiLineStrings,
          C = !1 !== l.indentStatements,
          _ = !1 !== l.indentSwitch,
          S = l.namespaceSeparator,
          T = l.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
          k = l.numberStart || /[\d\.]/,
          L =
            l.number ||
            /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
          A = l.isOperatorChar || /[+\-*&%=<>!?|\/]/,
          M = l.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
          O = l.isReservedIdentifier || !1;
        function E(e, t) {
          var r = e.next();
          if (w[r]) {
            var n = w[r](e, t);
            if (!1 !== n) return n;
          }
          if ('"' == r || "'" == r)
            return (
              (t.tokenize = (function (e) {
                return function (t, r) {
                  for (var n, i = !1, o = !1; null != (n = t.next()); ) {
                    if (n == e && !i) {
                      o = !0;
                      break;
                    }
                    i = !i && "\\" == n;
                  }
                  return (o || (!i && !x)) && (r.tokenize = null), "string";
                };
              })(r)),
              t.tokenize(e, t)
            );
          if (k.test(r)) {
            if ((e.backUp(1), e.match(L))) return "number";
            e.next();
          }
          if (T.test(r)) return (c = r), null;
          if ("/" == r) {
            if (e.eat("*")) return (t.tokenize = R), R(e, t);
            if (e.eat("/")) return e.skipToEnd(), "comment";
          }
          if (A.test(r)) {
            for (; !e.match(/^\/[\/*]/, !1) && e.eat(A); );
            return "operator";
          }
          if ((e.eatWhile(M), S)) for (; e.match(S); ) e.eatWhile(M);
          var i = e.current();
          return s(p, i)
            ? (s(v, i) && (c = "newstatement"), s(y, i) && (u = !0), "keyword")
            : s(g, i)
            ? "type"
            : s(m, i) || (O && O(i))
            ? (s(v, i) && (c = "newstatement"), "builtin")
            : s(b, i)
            ? "atom"
            : "variable";
        }
        function R(e, t) {
          for (var r, n = !1; (r = e.next()); ) {
            if ("/" == r && n) {
              t.tokenize = null;
              break;
            }
            n = "*" == r;
          }
          return "comment";
        }
        function N(e, t) {
          l.typeFirstDefinitions &&
            e.eol() &&
            o(t.context) &&
            (t.typeAtEndOfLine = i(e, t, e.pos));
        }
        return {
          startState: function (e) {
            return {
              tokenize: null,
              context: new t((e || 0) - f, 0, "top", null, !1),
              indented: 0,
              startOfLine: !0,
              prevToken: null,
            };
          },
          token: function (e, t) {
            var a = t.context;
            if (
              (e.sol() &&
                (null == a.align && (a.align = !1),
                (t.indented = e.indentation()),
                (t.startOfLine = !0)),
              e.eatSpace())
            )
              return N(e, t), null;
            c = u = null;
            var s = (t.tokenize || E)(e, t);
            if ("comment" == s || "meta" == s) return s;
            if (
              (null == a.align && (a.align = !0),
              ";" == c ||
                ":" == c ||
                ("," == c && e.match(/^\s*(?:\/\/.*)?$/, !1)))
            )
              for (; "statement" == t.context.type; ) n(t);
            else if ("{" == c) r(t, e.column(), "}");
            else if ("[" == c) r(t, e.column(), "]");
            else if ("(" == c) r(t, e.column(), ")");
            else if ("}" == c) {
              for (; "statement" == a.type; ) a = n(t);
              for ("}" == a.type && (a = n(t)); "statement" == a.type; )
                a = n(t);
            } else
              c == a.type
                ? n(t)
                : C &&
                  ((("}" == a.type || "top" == a.type) && ";" != c) ||
                    ("statement" == a.type && "newstatement" == c)) &&
                  r(t, e.column(), "statement", e.current());
            if (
              ("variable" == s &&
                ("def" == t.prevToken ||
                  (l.typeFirstDefinitions &&
                    i(e, t, e.start) &&
                    o(t.context) &&
                    e.match(/^\s*\(/, !1))) &&
                (s = "def"),
              w.token)
            ) {
              var f = w.token(e, t, s);
              void 0 !== f && (s = f);
            }
            return (
              "def" == s && !1 === l.styleDefs && (s = "variable"),
              (t.startOfLine = !1),
              (t.prevToken = u ? "def" : s || c),
              N(e, t),
              s
            );
          },
          indent: function (t, r) {
            if ((t.tokenize != E && null != t.tokenize) || t.typeAtEndOfLine)
              return e.Pass;
            var n = t.context,
              i = r && r.charAt(0),
              o = i == n.type;
            if (
              ("statement" == n.type && "}" == i && (n = n.prev),
              l.dontIndentStatements)
            )
              for (
                ;
                "statement" == n.type && l.dontIndentStatements.test(n.info);

              )
                n = n.prev;
            if (w.indent) {
              var a = w.indent(t, n, r, f);
              if ("number" == typeof a) return a;
            }
            var s = n.prev && "switch" == n.prev.info;
            if (l.allmanIndentation && /[{(]/.test(i)) {
              for (; "top" != n.type && "}" != n.type; ) n = n.prev;
              return n.indented;
            }
            return "statement" == n.type
              ? n.indented + ("{" == i ? 0 : h)
              : !n.align || (d && ")" == n.type)
              ? ")" != n.type || o
                ? n.indented +
                  (o ? 0 : f) +
                  (o || !s || /^(?:case|default)\b/.test(r) ? 0 : f)
                : n.indented + h
              : n.column + (o ? 0 : 1);
          },
          electricInput: _
            ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
            : /^\s*[{}]$/,
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          blockCommentContinue: " * ",
          lineComment: "//",
          fold: "brace",
        };
      });
      var l =
          "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",
        c =
          "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",
        u =
          "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",
        f =
          "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",
        h = a("int long char short double float unsigned signed void bool"),
        d = a("SEL instancetype id Class Protocol BOOL");
      function p(e) {
        return s(h, e) || /.+_t$/.test(e);
      }
      function g(e) {
        return p(e) || s(d, e);
      }
      var m = "case do else for if switch while struct enum union";
      function v(e, t) {
        if (!t.startOfLine) return !1;
        for (var r, n = null; (r = e.peek()); ) {
          if ("\\" == r && e.match(/^.$/)) {
            n = v;
            break;
          }
          if ("/" == r && e.match(/^\/[\/\*]/, !1)) break;
          e.next();
        }
        return (t.tokenize = n), "meta";
      }
      function y(e, t) {
        return "type" == t.prevToken && "type";
      }
      function b(e) {
        return (
          !(!e || e.length < 2) &&
          "_" == e[0] &&
          ("_" == e[1] || e[1] !== e[1].toLowerCase())
        );
      }
      function w(e) {
        return e.eatWhile(/[\w\.']/), "number";
      }
      function x(e, t) {
        if ((e.backUp(1), e.match(/^(?:R|u8R|uR|UR|LR)/))) {
          var r = e.match(/^"([^\s\\()]{0,16})\(/);
          return (
            !!r && ((t.cpp11RawStringDelim = r[1]), (t.tokenize = S), S(e, t))
          );
        }
        return e.match(/^(?:u8|u|U|L)/)
          ? !!e.match(/^["']/, !1) && "string"
          : (e.next(), !1);
      }
      function C(e) {
        var t = /(\w+)::~?(\w+)$/.exec(e);
        return t && t[1] == t[2];
      }
      function _(e, t) {
        for (var r; null != (r = e.next()); )
          if ('"' == r && !e.eat('"')) {
            t.tokenize = null;
            break;
          }
        return "string";
      }
      function S(e, t) {
        var r = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
        return (
          e.match(new RegExp(".*?\\)" + r + '"'))
            ? (t.tokenize = null)
            : e.skipToEnd(),
          "string"
        );
      }
      function T(t, r) {
        "string" == typeof t && (t = [t]);
        var n = [];
        function i(e) {
          if (e) for (var t in e) e.hasOwnProperty(t) && n.push(t);
        }
        i(r.keywords),
          i(r.types),
          i(r.builtin),
          i(r.atoms),
          n.length &&
            ((r.helperType = t[0]), e.registerHelper("hintWords", t[0], n));
        for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], r);
      }
      function k(e, t) {
        for (var r = !1; !e.eol(); ) {
          if (!r && e.match('"""')) {
            t.tokenize = null;
            break;
          }
          r = "\\" == e.next() && !r;
        }
        return "string";
      }
      function L(e) {
        return function (t, r) {
          for (var n; (n = t.next()); ) {
            if ("*" == n && t.eat("/")) {
              if (1 == e) {
                r.tokenize = null;
                break;
              }
              return (r.tokenize = L(e - 1)), r.tokenize(t, r);
            }
            if ("/" == n && t.eat("*"))
              return (r.tokenize = L(e + 1)), r.tokenize(t, r);
          }
          return "comment";
        };
      }
      T(["text/x-csrc", "text/x-c", "text/x-chdr"], {
        name: "clike",
        keywords: a(l),
        types: p,
        blockKeywords: a(m),
        defKeywords: a("struct enum union"),
        typeFirstDefinitions: !0,
        atoms: a("NULL true false"),
        isReservedIdentifier: b,
        hooks: { "#": v, "*": y },
        modeProps: { fold: ["brace", "include"] },
      }),
        T(["text/x-c++src", "text/x-c++hdr"], {
          name: "clike",
          keywords: a(l + " " + c),
          types: p,
          blockKeywords: a(m + " class try catch"),
          defKeywords: a("struct enum union class namespace"),
          typeFirstDefinitions: !0,
          atoms: a("true false NULL nullptr"),
          dontIndentStatements: /^template$/,
          isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
          isReservedIdentifier: b,
          hooks: {
            "#": v,
            "*": y,
            u: x,
            U: x,
            L: x,
            R: x,
            0: w,
            1: w,
            2: w,
            3: w,
            4: w,
            5: w,
            6: w,
            7: w,
            8: w,
            9: w,
            token: function (e, t, r) {
              if (
                "variable" == r &&
                "(" == e.peek() &&
                (";" == t.prevToken ||
                  null == t.prevToken ||
                  "}" == t.prevToken) &&
                C(e.current())
              )
                return "def";
            },
          },
          namespaceSeparator: "::",
          modeProps: { fold: ["brace", "include"] },
        }),
        T("text/x-java", {
          name: "clike",
          keywords: a(
            "abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"
          ),
          types: a(
            "var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"
          ),
          blockKeywords: a(
            "catch class do else finally for if switch try while"
          ),
          defKeywords: a("class interface enum @interface"),
          typeFirstDefinitions: !0,
          atoms: a("true false null"),
          number:
            /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
          hooks: {
            "@": function (e) {
              return (
                !e.match("interface", !1) && (e.eatWhile(/[\w\$_]/), "meta")
              );
            },
            '"': function (e, t) {
              return !!e.match(/""$/) && ((t.tokenize = k), t.tokenize(e, t));
            },
          },
          modeProps: { fold: ["brace", "import"] },
        }),
        T("text/x-csharp", {
          name: "clike",
          keywords: a(
            "abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"
          ),
          types: a(
            "Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"
          ),
          blockKeywords: a(
            "catch class do else finally for foreach if struct switch try while"
          ),
          defKeywords: a("class interface namespace record struct var"),
          typeFirstDefinitions: !0,
          atoms: a("true false null"),
          hooks: {
            "@": function (e, t) {
              return e.eat('"')
                ? ((t.tokenize = _), _(e, t))
                : (e.eatWhile(/[\w\$_]/), "meta");
            },
          },
        }),
        T("text/x-scala", {
          name: "clike",
          keywords: a(
            "abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"
          ),
          types: a(
            "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
          ),
          multiLineStrings: !0,
          blockKeywords: a(
            "catch class enum do else finally for forSome if match switch try while"
          ),
          defKeywords: a("class enum def object package trait type val var"),
          atoms: a("true false null"),
          indentStatements: !1,
          indentSwitch: !1,
          isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
          hooks: {
            "@": function (e) {
              return e.eatWhile(/[\w\$_]/), "meta";
            },
            '"': function (e, t) {
              return !!e.match('""') && ((t.tokenize = k), t.tokenize(e, t));
            },
            "'": function (e) {
              return e.match(/^(\\[^'\s]+|[^\\'])'/)
                ? "string-2"
                : (e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom");
            },
            "=": function (e, r) {
              var n = r.context;
              return (
                !("}" != n.type || !n.align || !e.eat(">")) &&
                ((r.context = new t(
                  n.indented,
                  n.column,
                  n.type,
                  n.info,
                  null,
                  n.prev
                )),
                "operator")
              );
            },
            "/": function (e, t) {
              return !!e.eat("*") && ((t.tokenize = L(1)), t.tokenize(e, t));
            },
          },
          modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
        }),
        T("text/x-kotlin", {
          name: "clike",
          keywords: a(
            "package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"
          ),
          types: a(
            "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"
          ),
          intendSwitch: !1,
          indentStatements: !1,
          multiLineStrings: !0,
          number:
            /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
          blockKeywords: a(
            "catch class do else finally for if where try while enum"
          ),
          defKeywords: a("class val var object interface fun"),
          atoms: a("true false null this"),
          hooks: {
            "@": function (e) {
              return e.eatWhile(/[\w\$_]/), "meta";
            },
            "*": function (e, t) {
              return "." == t.prevToken ? "variable" : "operator";
            },
            '"': function (e, t) {
              return (
                (t.tokenize = (function (e) {
                  return function (t, r) {
                    for (var n, i = !1, o = !1; !t.eol(); ) {
                      if (!e && !i && t.match('"')) {
                        o = !0;
                        break;
                      }
                      if (e && t.match('"""')) {
                        o = !0;
                        break;
                      }
                      (n = t.next()),
                        !i && "$" == n && t.match("{") && t.skipTo("}"),
                        (i = !i && "\\" == n && !e);
                    }
                    return (!o && e) || (r.tokenize = null), "string";
                  };
                })(e.match('""'))),
                t.tokenize(e, t)
              );
            },
            "/": function (e, t) {
              return !!e.eat("*") && ((t.tokenize = L(1)), t.tokenize(e, t));
            },
            indent: function (e, t, r, n) {
              var i = r && r.charAt(0);
              return ("}" != e.prevToken && ")" != e.prevToken) || "" != r
                ? ("operator" == e.prevToken &&
                    "}" != r &&
                    "}" != e.context.type) ||
                  ("variable" == e.prevToken && "." == i) ||
                  (("}" == e.prevToken || ")" == e.prevToken) && "." == i)
                  ? 2 * n + t.indented
                  : t.align && "}" == t.type
                  ? t.indented + (e.context.type == (r || "").charAt(0) ? 0 : n)
                  : void 0
                : e.indented;
            },
          },
          modeProps: { closeBrackets: { triples: '"' } },
        }),
        T(["x-shader/x-vertex", "x-shader/x-fragment"], {
          name: "clike",
          keywords: a(
            "sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"
          ),
          types: a(
            "float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"
          ),
          blockKeywords: a("for while do if else struct"),
          builtin: a(
            "radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"
          ),
          atoms: a(
            "true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"
          ),
          indentSwitch: !1,
          hooks: { "#": v },
          modeProps: { fold: ["brace", "include"] },
        }),
        T("text/x-nesc", {
          name: "clike",
          keywords: a(
            l +
              " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"
          ),
          types: p,
          blockKeywords: a(m),
          atoms: a("null true false"),
          hooks: { "#": v },
          modeProps: { fold: ["brace", "include"] },
        }),
        T("text/x-objectivec", {
          name: "clike",
          keywords: a(l + " " + u),
          types: g,
          builtin: a(f),
          blockKeywords: a(
            m +
              " @synthesize @try @catch @finally @autoreleasepool @synchronized"
          ),
          defKeywords: a(
            "struct enum union @interface @implementation @protocol @class"
          ),
          dontIndentStatements: /^@.*$/,
          typeFirstDefinitions: !0,
          atoms: a("YES NO NULL Nil nil true false nullptr"),
          isReservedIdentifier: b,
          hooks: { "#": v, "*": y },
          modeProps: { fold: ["brace", "include"] },
        }),
        T("text/x-objectivec++", {
          name: "clike",
          keywords: a(l + " " + u + " " + c),
          types: g,
          builtin: a(f),
          blockKeywords: a(
            m +
              " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"
          ),
          defKeywords: a(
            "struct enum union @interface @implementation @protocol @class class namespace"
          ),
          dontIndentStatements: /^@.*$|^template$/,
          typeFirstDefinitions: !0,
          atoms: a("YES NO NULL Nil nil true false nullptr"),
          isReservedIdentifier: b,
          hooks: {
            "#": v,
            "*": y,
            u: x,
            U: x,
            L: x,
            R: x,
            0: w,
            1: w,
            2: w,
            3: w,
            4: w,
            5: w,
            6: w,
            7: w,
            8: w,
            9: w,
            token: function (e, t, r) {
              if (
                "variable" == r &&
                "(" == e.peek() &&
                (";" == t.prevToken ||
                  null == t.prevToken ||
                  "}" == t.prevToken) &&
                C(e.current())
              )
                return "def";
            },
          },
          namespaceSeparator: "::",
          modeProps: { fold: ["brace", "include"] },
        }),
        T("text/x-squirrel", {
          name: "clike",
          keywords: a(
            "base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"
          ),
          types: p,
          blockKeywords: a(
            "case catch class else for foreach if switch try while"
          ),
          defKeywords: a("function local class"),
          typeFirstDefinitions: !0,
          atoms: a("true false null"),
          hooks: { "#": v },
          modeProps: { fold: ["brace", "include"] },
        });
      var A = null;
      T("text/x-ceylon", {
        name: "clike",
        keywords: a(
          "abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"
        ),
        types: function (e) {
          var t = e.charAt(0);
          return t === t.toUpperCase() && t !== t.toLowerCase();
        },
        blockKeywords: a(
          "case catch class dynamic else finally for function if interface module new object switch try while"
        ),
        defKeywords: a(
          "class dynamic function interface module object package value"
        ),
        builtin: a(
          "abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"
        ),
        isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
        isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
        numberStart: /[\d#$]/,
        number:
          /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
        multiLineStrings: !0,
        typeFirstDefinitions: !0,
        atoms: a("true false null larger smaller equal empty finished"),
        indentSwitch: !1,
        styleDefs: !1,
        hooks: {
          "@": function (e) {
            return e.eatWhile(/[\w\$_]/), "meta";
          },
          '"': function (e, t) {
            return (
              (t.tokenize = (function e(t) {
                return function (r, n) {
                  for (var i, o = !1, a = !1; !r.eol(); ) {
                    if (
                      !o &&
                      r.match('"') &&
                      ("single" == t || r.match('""'))
                    ) {
                      a = !0;
                      break;
                    }
                    if (!o && r.match("``")) {
                      (A = e(t)), (a = !0);
                      break;
                    }
                    (i = r.next()), (o = "single" == t && !o && "\\" == i);
                  }
                  return a && (n.tokenize = null), "string";
                };
              })(e.match('""') ? "triple" : "single")),
              t.tokenize(e, t)
            );
          },
          "`": function (e, t) {
            return (
              !(!A || !e.match("`")) &&
              ((t.tokenize = A), (A = null), t.tokenize(e, t))
            );
          },
          "'": function (e) {
            return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom";
          },
          token: function (e, t, r) {
            if (("variable" == r || "type" == r) && "." == t.prevToken)
              return "variable-2";
          },
        },
        modeProps: {
          fold: ["brace", "import"],
          closeBrackets: { triples: '"' },
        },
      });
    });
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1));
    })(function (e) {
      var t =
          /MSIE \d/.test(navigator.userAgent) &&
          (null == document.documentMode || document.documentMode < 8),
        r = e.Pos,
        n = {
          "(": ")>",
          ")": "(<",
          "[": "]>",
          "]": "[<",
          "{": "}>",
          "}": "{<",
          "<": ">>",
          ">": "<<",
        };
      function i(e) {
        return (e && e.bracketRegex) || /[(){}[\]]/;
      }
      function o(e, t, o) {
        var s = e.getLineHandle(t.line),
          l = t.ch - 1,
          c = o && o.afterCursor;
        null == c &&
          (c = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));
        var u = i(o),
          f =
            (!c && l >= 0 && u.test(s.text.charAt(l)) && n[s.text.charAt(l)]) ||
            (u.test(s.text.charAt(l + 1)) && n[s.text.charAt(++l)]);
        if (!f) return null;
        var h = ">" == f.charAt(1) ? 1 : -1;
        if (o && o.strict && h > 0 != (l == t.ch)) return null;
        var d = e.getTokenTypeAt(r(t.line, l + 1)),
          p = a(e, r(t.line, l + (h > 0 ? 1 : 0)), h, d, o);
        return null == p
          ? null
          : {
              from: r(t.line, l),
              to: p && p.pos,
              match: p && p.ch == f.charAt(0),
              forward: h > 0,
            };
      }
      function a(e, t, o, a, s) {
        for (
          var l = (s && s.maxScanLineLength) || 1e4,
            c = (s && s.maxScanLines) || 1e3,
            u = [],
            f = i(s),
            h =
              o > 0
                ? Math.min(t.line + c, e.lastLine() + 1)
                : Math.max(e.firstLine() - 1, t.line - c),
            d = t.line;
          d != h;
          d += o
        ) {
          var p = e.getLine(d);
          if (p) {
            var g = o > 0 ? 0 : p.length - 1,
              m = o > 0 ? p.length : -1;
            if (!(p.length > l))
              for (
                d == t.line && (g = t.ch - (o < 0 ? 1 : 0));
                g != m;
                g += o
              ) {
                var v = p.charAt(g);
                if (
                  f.test(v) &&
                  (void 0 === a ||
                    (e.getTokenTypeAt(r(d, g + 1)) || "") == (a || ""))
                ) {
                  var y = n[v];
                  if (y && (">" == y.charAt(1)) == o > 0) u.push(v);
                  else {
                    if (!u.length) return { pos: r(d, g), ch: v };
                    u.pop();
                  }
                }
              }
          }
        }
        return d - o != (o > 0 ? e.lastLine() : e.firstLine()) && null;
      }
      function s(e, n, i) {
        for (
          var a = e.state.matchBrackets.maxHighlightLineLength || 1e3,
            s = i && i.highlightNonMatching,
            l = [],
            c = e.listSelections(),
            u = 0;
          u < c.length;
          u++
        ) {
          var f = c[u].empty() && o(e, c[u].head, i);
          if (
            f &&
            (f.match || !1 !== s) &&
            e.getLine(f.from.line).length <= a
          ) {
            var h = f.match
              ? "CodeMirror-matchingbracket"
              : "CodeMirror-nonmatchingbracket";
            l.push(
              e.markText(f.from, r(f.from.line, f.from.ch + 1), {
                className: h,
              })
            ),
              f.to &&
                e.getLine(f.to.line).length <= a &&
                l.push(
                  e.markText(f.to, r(f.to.line, f.to.ch + 1), { className: h })
                );
          }
        }
        if (l.length) {
          t && e.state.focused && e.focus();
          var d = function () {
            e.operation(function () {
              for (var e = 0; e < l.length; e++) l[e].clear();
            });
          };
          if (!n) return d;
          setTimeout(d, 800);
        }
      }
      function l(e) {
        e.operation(function () {
          e.state.matchBrackets.currentlyHighlighted &&
            (e.state.matchBrackets.currentlyHighlighted(),
            (e.state.matchBrackets.currentlyHighlighted = null)),
            (e.state.matchBrackets.currentlyHighlighted = s(
              e,
              !1,
              e.state.matchBrackets
            ));
        });
      }
      function c(e) {
        e.state.matchBrackets &&
          e.state.matchBrackets.currentlyHighlighted &&
          (e.state.matchBrackets.currentlyHighlighted(),
          (e.state.matchBrackets.currentlyHighlighted = null));
      }
      e.defineOption("matchBrackets", !1, function (t, r, n) {
        n &&
          n != e.Init &&
          (t.off("cursorActivity", l),
          t.off("focus", l),
          t.off("blur", c),
          c(t)),
          r &&
            ((t.state.matchBrackets = "object" == typeof r ? r : {}),
            t.on("cursorActivity", l),
            t.on("focus", l),
            t.on("blur", c));
      }),
        e.defineExtension("matchBrackets", function () {
          s(this, !0);
        }),
        e.defineExtension("findMatchingBracket", function (e, t, r) {
          return (
            (r || "boolean" == typeof t) &&
              (r ? ((r.strict = t), (t = r)) : (t = t ? { strict: !0 } : null)),
            o(this, e, t)
          );
        }),
        e.defineExtension("scanForBracket", function (e, t, r, n) {
          return a(this, e, t, r, n);
        });
    });
  },
  function (e, t, r) {
    var n = r(46);
    "string" == typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    r(7)("7d22646a", n, !0, {});
  },
  function (e, t, r) {
    (e.exports = r(6)(!1)).push([
      e.i,
      ".CodeMirror-dialog{position:absolute;left:0;right:0;background:inherit;z-index:15;padding:.1em .8em;overflow:hidden;color:inherit}.CodeMirror-dialog-top{border-bottom:1px solid #eee;top:0}.CodeMirror-dialog-bottom{border-top:1px solid #eee;bottom:0}.CodeMirror-dialog input{border:none;outline:none;background:transparent;width:20em;color:inherit;font-family:monospace}.CodeMirror-dialog button{font-size:70%}",
      "",
    ]);
  },
  function (e, t, r) {
    !(function (e) {
      e(r(1), r(19), r(18));
    })(function (e) {
      "use strict";
      function t(e) {
        return (
          e.state.search ||
          (e.state.search = new (function () {
            (this.posFrom = this.posTo = this.lastQuery = this.query = null),
              (this.overlay = null);
          })())
        );
      }
      function r(e) {
        return "string" == typeof e && e == e.toLowerCase();
      }
      function n(e, t, n) {
        return e.getSearchCursor(t, n, { caseFold: r(t), multiline: !0 });
      }
      function i(e, t, r, n, i) {
        e.openDialog
          ? e.openDialog(t, i, {
              value: n,
              selectValueOnOpen: !0,
              bottom: e.options.search.bottom,
            })
          : i(prompt(r, n));
      }
      function o(e) {
        return e.replace(/\\([nrt\\])/g, function (e, t) {
          return "n" == t
            ? "\n"
            : "r" == t
            ? "\r"
            : "t" == t
            ? "\t"
            : "\\" == t
            ? "\\"
            : e;
        });
      }
      function a(e) {
        var t = e.match(/^\/(.*)\/([a-z]*)$/);
        if (t)
          try {
            e = new RegExp(t[1], -1 == t[2].indexOf("i") ? "" : "i");
          } catch (e) {}
        else e = o(e);
        return ("string" == typeof e ? "" == e : e.test("")) && (e = /x^/), e;
      }
      function s(e, t, n) {
        (t.queryText = n),
          (t.query = a(n)),
          e.removeOverlay(t.overlay, r(t.query)),
          (t.overlay = (function (e, t) {
            return (
              "string" == typeof e
                ? (e = new RegExp(
                    e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
                    t ? "gi" : "g"
                  ))
                : e.global ||
                  (e = new RegExp(e.source, e.ignoreCase ? "gi" : "g")),
              {
                token: function (t) {
                  e.lastIndex = t.pos;
                  var r = e.exec(t.string);
                  if (r && r.index == t.pos)
                    return (t.pos += r[0].length || 1), "searching";
                  r ? (t.pos = r.index) : t.skipToEnd();
                },
              }
            );
          })(t.query, r(t.query))),
          e.addOverlay(t.overlay),
          e.showMatchesOnScrollbar &&
            (t.annotate && (t.annotate.clear(), (t.annotate = null)),
            (t.annotate = e.showMatchesOnScrollbar(t.query, r(t.query))));
      }
      function l(r, n, o, a) {
        var l = t(r);
        if (l.query) return c(r, n);
        var f = r.getSelection() || l.lastQuery;
        if (
          (f instanceof RegExp && "x^" == f.source && (f = null),
          o && r.openDialog)
        ) {
          var d = null,
            p = function (t, n) {
              e.e_stop(n),
                t &&
                  (t != l.queryText &&
                    (s(r, l, t), (l.posFrom = l.posTo = r.getCursor())),
                  d && (d.style.opacity = 1),
                  c(r, n.shiftKey, function (e, t) {
                    var n;
                    t.line < 3 &&
                      document.querySelector &&
                      (n =
                        r.display.wrapper.querySelector(
                          ".CodeMirror-dialog"
                        )) &&
                      n.getBoundingClientRect().bottom - 4 >
                        r.cursorCoords(t, "window").top &&
                      ((d = n).style.opacity = 0.4);
                  }));
            };
          !(function (e, t, r, n, i) {
            e.openDialog(t, n, {
              value: r,
              selectValueOnOpen: !0,
              closeOnEnter: !1,
              onClose: function () {
                u(e);
              },
              onKeyDown: i,
              bottom: e.options.search.bottom,
            });
          })(r, h(r), f, p, function (n, i) {
            var o = e.keyName(n),
              a = r.getOption("extraKeys"),
              l = (a && a[o]) || e.keyMap[r.getOption("keyMap")][o];
            "findNext" == l ||
            "findPrev" == l ||
            "findPersistentNext" == l ||
            "findPersistentPrev" == l
              ? (e.e_stop(n), s(r, t(r), i), r.execCommand(l))
              : ("find" != l && "findPersistent" != l) ||
                (e.e_stop(n), p(i, n));
          }),
            a && f && (s(r, l, f), c(r, n));
        } else
          i(r, h(r), "Search for:", f, function (e) {
            e &&
              !l.query &&
              r.operation(function () {
                s(r, l, e), (l.posFrom = l.posTo = r.getCursor()), c(r, n);
              });
          });
      }
      function c(r, i, o) {
        r.operation(function () {
          var a = t(r),
            s = n(r, a.query, i ? a.posFrom : a.posTo);
          (s.find(i) ||
            (s = n(
              r,
              a.query,
              i ? e.Pos(r.lastLine()) : e.Pos(r.firstLine(), 0)
            )).find(i)) &&
            (r.setSelection(s.from(), s.to()),
            r.scrollIntoView({ from: s.from(), to: s.to() }, 20),
            (a.posFrom = s.from()),
            (a.posTo = s.to()),
            o && o(s.from(), s.to()));
        });
      }
      function u(e) {
        e.operation(function () {
          var r = t(e);
          (r.lastQuery = r.query),
            r.query &&
              ((r.query = r.queryText = null),
              e.removeOverlay(r.overlay),
              r.annotate && (r.annotate.clear(), (r.annotate = null)));
        });
      }
      function f(e, t) {
        var r = e
          ? document.createElement(e)
          : document.createDocumentFragment();
        for (var n in t) r[n] = t[n];
        for (var i = 2; i < arguments.length; i++) {
          var o = arguments[i];
          r.appendChild("string" == typeof o ? document.createTextNode(o) : o);
        }
        return r;
      }
      function h(e) {
        var t = f(
          "label",
          { className: "CodeMirror-search-label" },
          e.phrase("Search:"),
          f("input", {
            type: "text",
            style: "width: 10em",
            className: "CodeMirror-search-field",
            id: "CodeMirror-search-field",
          })
        );
        return (
          t.setAttribute("for", "CodeMirror-search-field"),
          f(
            "",
            null,
            t,
            " ",
            f(
              "span",
              { style: "color: #666", className: "CodeMirror-search-hint" },
              e.phrase("(Use /re/ syntax for regexp search)")
            )
          )
        );
      }
      function d(e, t, r) {
        e.operation(function () {
          for (var i = n(e, t); i.findNext(); )
            if ("string" != typeof t) {
              var o = e.getRange(i.from(), i.to()).match(t);
              i.replace(
                r.replace(/\$(\d)/g, function (e, t) {
                  return o[t];
                })
              );
            } else i.replace(r);
        });
      }
      function p(e, r) {
        if (!e.getOption("readOnly")) {
          var s = e.getSelection() || t(e).lastQuery,
            l = r ? e.phrase("Replace all:") : e.phrase("Replace:"),
            c = f(
              "",
              null,
              f("span", { className: "CodeMirror-search-label" }, l),
              (function (e) {
                return f(
                  "",
                  null,
                  " ",
                  f("input", {
                    type: "text",
                    style: "width: 10em",
                    className: "CodeMirror-search-field",
                  }),
                  " ",
                  f(
                    "span",
                    {
                      style: "color: #666",
                      className: "CodeMirror-search-hint",
                    },
                    e.phrase("(Use /re/ syntax for regexp search)")
                  )
                );
              })(e)
            );
          i(e, c, l, s, function (t) {
            t &&
              ((t = a(t)),
              i(
                e,
                (function (e) {
                  return f(
                    "",
                    null,
                    f(
                      "span",
                      { className: "CodeMirror-search-label" },
                      e.phrase("With:")
                    ),
                    " ",
                    f("input", {
                      type: "text",
                      style: "width: 10em",
                      className: "CodeMirror-search-field",
                    })
                  );
                })(e),
                e.phrase("Replace with:"),
                "",
                function (i) {
                  if (((i = o(i)), r)) d(e, t, i);
                  else {
                    u(e);
                    var a = n(e, t, e.getCursor("from")),
                      s = function () {
                        var r,
                          o = a.from();
                        (!(r = a.findNext()) &&
                          ((a = n(e, t)),
                          !(r = a.findNext()) ||
                            (o &&
                              a.from().line == o.line &&
                              a.from().ch == o.ch))) ||
                          (e.setSelection(a.from(), a.to()),
                          e.scrollIntoView({ from: a.from(), to: a.to() }),
                          (function (e, t, r, n) {
                            e.openConfirm
                              ? e.openConfirm(t, n)
                              : confirm(r) && n[0]();
                          })(
                            e,
                            (function (e) {
                              return f(
                                "",
                                null,
                                f(
                                  "span",
                                  { className: "CodeMirror-search-label" },
                                  e.phrase("Replace?")
                                ),
                                " ",
                                f("button", {}, e.phrase("Yes")),
                                " ",
                                f("button", {}, e.phrase("No")),
                                " ",
                                f("button", {}, e.phrase("All")),
                                " ",
                                f("button", {}, e.phrase("Stop"))
                              );
                            })(e),
                            e.phrase("Replace?"),
                            [
                              function () {
                                l(r);
                              },
                              s,
                              function () {
                                d(e, t, i);
                              },
                            ]
                          ));
                      },
                      l = function (e) {
                        a.replace(
                          "string" == typeof t
                            ? i
                            : i.replace(/\$(\d)/g, function (t, r) {
                                return e[r];
                              })
                        ),
                          s();
                      };
                    s();
                  }
                }
              ));
          });
        }
      }
      e.defineOption("search", { bottom: !1 }),
        (e.commands.find = function (e) {
          u(e), l(e);
        }),
        (e.commands.findPersistent = function (e) {
          u(e), l(e, !1, !0);
        }),
        (e.commands.findPersistentNext = function (e) {
          l(e, !1, !0, !0);
        }),
        (e.commands.findPersistentPrev = function (e) {
          l(e, !0, !0, !0);
        }),
        (e.commands.findNext = l),
        (e.commands.findPrev = function (e) {
          l(e, !0);
        }),
        (e.commands.clearSearch = u),
        (e.commands.replace = p),
        (e.commands.replaceAll = function (e) {
          p(e, !0);
        });
    });
  },
  function (e, t, r) {
    "use strict";
    (t.parse = r(49)), (t.stringify = r(70));
  },
  function (e, t, r) {
    "use strict";
    (e.exports = r(50)),
      (e.exports.async = r(56)),
      (e.exports.stream = r(57)),
      (e.exports.prettyError = r(13));
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      e.exports = function (e) {
        t.Buffer && t.Buffer.isBuffer(e) && (e = e.toString("utf8"));
        const r = new n();
        try {
          return r.parse(e), r.finish();
        } catch (t) {
          throw i(t, e);
        }
      };
      const n = r(8),
        i = r(13);
    }).call(t, r(0));
  },
  function (e, t, r) {
    "use strict";
    const n = 1114112;
    class i extends Error {
      constructor(e, t, r) {
        super("[ParserError] " + e, t, r),
          (this.name = "ParserError"),
          (this.code = "ParserError"),
          Error.captureStackTrace && Error.captureStackTrace(this, i);
      }
    }
    class o {
      constructor(e) {
        (this.parser = e),
          (this.buf = ""),
          (this.returned = null),
          (this.result = null),
          (this.resultTable = null),
          (this.resultArr = null);
      }
    }
    class a {
      constructor() {
        (this.pos = 0),
          (this.col = 0),
          (this.line = 0),
          (this.obj = {}),
          (this.ctx = this.obj),
          (this.stack = []),
          (this._buf = ""),
          (this.char = null),
          (this.ii = 0),
          (this.state = new o(this.parseStart));
      }
      parse(e) {
        if (0 === e.length || null == e.length) return;
        let t;
        for (
          this._buf = String(e), this.ii = -1, this.char = -1;
          !1 === t || this.nextChar();

        )
          t = this.runOne();
        this._buf = null;
      }
      nextChar() {
        return (
          10 === this.char && (++this.line, (this.col = -1)),
          ++this.ii,
          (this.char = this._buf.codePointAt(this.ii)),
          ++this.pos,
          ++this.col,
          this.haveBuffer()
        );
      }
      haveBuffer() {
        return this.ii < this._buf.length;
      }
      runOne() {
        return this.state.parser.call(this, this.state.returned);
      }
      finish() {
        let e;
        this.char = n;
        do {
          (e = this.state.parser), this.runOne();
        } while (this.state.parser !== e);
        return (
          (this.ctx = null), (this.state = null), (this._buf = null), this.obj
        );
      }
      next(e) {
        if ("function" != typeof e)
          throw new i(
            "Tried to set state to non-existent state: " + JSON.stringify(e)
          );
        this.state.parser = e;
      }
      goto(e) {
        return this.next(e), this.runOne();
      }
      call(e, t) {
        t && this.next(t), this.stack.push(this.state), (this.state = new o(e));
      }
      callNow(e, t) {
        return this.call(e, t), this.runOne();
      }
      return(e) {
        if (0 === this.stack.length) throw this.error(new i("Stack underflow"));
        void 0 === e && (e = this.state.buf),
          (this.state = this.stack.pop()),
          (this.state.returned = e);
      }
      returnNow(e) {
        return this.return(e), this.runOne();
      }
      consume() {
        if (this.char === n)
          throw this.error(new i("Unexpected end-of-buffer"));
        this.state.buf += this._buf[this.ii];
      }
      error(e) {
        return (e.line = this.line), (e.col = this.col), (e.pos = this.pos), e;
      }
      parseStart() {
        throw new i("Must declare a parseStart method");
      }
    }
    (a.END = n), (a.Error = i), (e.exports = a);
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e) => {
      const t = new Date(e);
      if (isNaN(t)) throw new TypeError("Invalid Datetime");
      return t;
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(12);
    e.exports = (e) => {
      const t = new (class extends Date {
        constructor(e) {
          super(e + "Z"), (this.isFloating = !0);
        }
        toISOString() {
          return `${`${this.getUTCFullYear()}-${n(
            2,
            this.getUTCMonth() + 1
          )}-${n(2, this.getUTCDate())}`}T${`${n(2, this.getUTCHours())}:${n(
            2,
            this.getUTCMinutes()
          )}:${n(2, this.getUTCSeconds())}.${n(
            3,
            this.getUTCMilliseconds()
          )}`}`;
        }
      })(e);
      if (isNaN(t)) throw new TypeError("Invalid Datetime");
      return t;
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      const n = r(12),
        i = t.Date;
      e.exports = (e) => {
        const t = new (class extends i {
          constructor(e) {
            super(e), (this.isDate = !0);
          }
          toISOString() {
            return `${this.getUTCFullYear()}-${n(
              2,
              this.getUTCMonth() + 1
            )}-${n(2, this.getUTCDate())}`;
          }
        })(e);
        if (isNaN(t)) throw new TypeError("Invalid Datetime");
        return t;
      };
    }).call(t, r(0));
  },
  function (e, t, r) {
    "use strict";
    const n = r(12);
    e.exports = (e) => {
      const t = new (class extends Date {
        constructor(e) {
          super(`0000-01-01T${e}Z`), (this.isTime = !0);
        }
        toISOString() {
          return `${n(2, this.getUTCHours())}:${n(2, this.getUTCMinutes())}:${n(
            2,
            this.getUTCSeconds()
          )}.${n(3, this.getUTCMilliseconds())}`;
        }
      })(e);
      if (isNaN(t)) throw new TypeError("Invalid Datetime");
      return t;
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      e.exports = function (e, r) {
        r || (r = {});
        const o = r.blocksize || 40960,
          a = new n();
        return new Promise((e, r) => {
          t(s, 0, o, e, r);
        });
        function s(r, n, o, l) {
          if (r >= e.length)
            try {
              return o(a.finish());
            } catch (t) {
              return l(i(t, e));
            }
          try {
            a.parse(e.slice(r, r + n)), t(s, r + n, n, o, l);
          } catch (t) {
            l(i(t, e));
          }
        }
      };
      const n = r(8),
        i = r(13);
    }).call(t, r(11).setImmediate);
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return e
        ? (function (e) {
            const t = new i();
            return (
              e.setEncoding("utf8"),
              new Promise((r, n) => {
                let i,
                  o = !1,
                  a = !1;
                function s() {
                  if (((o = !0), !i))
                    try {
                      r(t.finish());
                    } catch (e) {
                      n(e);
                    }
                }
                function l(e) {
                  (a = !0), n(e);
                }
                e.once("end", s),
                  e.once("error", l),
                  (function r() {
                    let n;
                    for (i = !0; null !== (n = e.read()); )
                      try {
                        t.parse(n);
                      } catch (e) {
                        return l(e);
                      }
                    if (((i = !1), o)) return s();
                    a || e.once("readable", r);
                  })();
              })
            );
          })(e)
        : (function () {
            const e = new i();
            return new n.Transform({
              objectMode: !0,
              transform(t, r, n) {
                try {
                  e.parse(t.toString(r));
                } catch (e) {
                  this.emit("error", e);
                }
                n();
              },
              flush(t) {
                try {
                  this.push(e.finish());
                } catch (e) {
                  this.emit("error", e);
                }
                t();
              },
            });
          })();
    };
    const n = r(58),
      i = r(8);
  },
  function (e, t, r) {
    e.exports = i;
    var n = r(14).EventEmitter;
    function i() {
      n.call(this);
    }
    r(3)(i, n),
      (i.Readable = r(15)),
      (i.Writable = r(66)),
      (i.Duplex = r(67)),
      (i.Transform = r(68)),
      (i.PassThrough = r(69)),
      (i.Stream = i),
      (i.prototype.pipe = function (e, t) {
        var r = this;
        function i(t) {
          e.writable && !1 === e.write(t) && r.pause && r.pause();
        }
        function o() {
          r.readable && r.resume && r.resume();
        }
        r.on("data", i),
          e.on("drain", o),
          e._isStdio ||
            (t && !1 === t.end) ||
            (r.on("end", s), r.on("close", l));
        var a = !1;
        function s() {
          a || ((a = !0), e.end());
        }
        function l() {
          a || ((a = !0), "function" == typeof e.destroy && e.destroy());
        }
        function c(e) {
          if ((u(), 0 === n.listenerCount(this, "error"))) throw e;
        }
        function u() {
          r.removeListener("data", i),
            e.removeListener("drain", o),
            r.removeListener("end", s),
            r.removeListener("close", l),
            r.removeListener("error", c),
            e.removeListener("error", c),
            r.removeListener("end", u),
            r.removeListener("close", u),
            e.removeListener("close", u);
        }
        return (
          r.on("error", c),
          e.on("error", c),
          r.on("end", u),
          r.on("close", u),
          e.on("close", u),
          e.emit("pipe", r),
          e
        );
      });
  },
  function (e, t, r) {
    "use strict";
    (t.byteLength = function (e) {
      var t = c(e),
        r = t[0],
        n = t[1];
      return (3 * (r + n)) / 4 - n;
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          n = c(e),
          a = n[0],
          s = n[1],
          l = new o(
            (function (e, t, r) {
              return (3 * (t + r)) / 4 - r;
            })(0, a, s)
          ),
          u = 0,
          f = s > 0 ? a - 4 : a;
        for (r = 0; r < f; r += 4)
          (t =
            (i[e.charCodeAt(r)] << 18) |
            (i[e.charCodeAt(r + 1)] << 12) |
            (i[e.charCodeAt(r + 2)] << 6) |
            i[e.charCodeAt(r + 3)]),
            (l[u++] = (t >> 16) & 255),
            (l[u++] = (t >> 8) & 255),
            (l[u++] = 255 & t);
        2 === s &&
          ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
          (l[u++] = 255 & t));
        1 === s &&
          ((t =
            (i[e.charCodeAt(r)] << 10) |
            (i[e.charCodeAt(r + 1)] << 4) |
            (i[e.charCodeAt(r + 2)] >> 2)),
          (l[u++] = (t >> 8) & 255),
          (l[u++] = 255 & t));
        return l;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i;
          a < s;
          a += 16383
        )
          o.push(f(e, a, a + 16383 > s ? s : a + 16383));
        1 === i
          ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
          : 2 === i &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var n = [],
        i = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        l = a.length;
      s < l;
      ++s
    )
      (n[s] = a[s]), (i[a.charCodeAt(s)] = s);
    function c(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
    }
    function u(e) {
      return (
        n[(e >> 18) & 63] + n[(e >> 12) & 63] + n[(e >> 6) & 63] + n[63 & e]
      );
    }
    function f(e, t, r) {
      for (var n, i = [], o = t; o < r; o += 3)
        (n =
          ((e[o] << 16) & 16711680) +
          ((e[o + 1] << 8) & 65280) +
          (255 & e[o + 2])),
          i.push(u(n));
      return i.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    (t.read = function (e, t, r, n, i) {
      var o,
        a,
        s = 8 * i - n - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        u = -7,
        f = r ? i - 1 : 0,
        h = r ? -1 : 1,
        d = e[t + f];
      for (
        f += h, o = d & ((1 << -u) - 1), d >>= -u, u += s;
        u > 0;
        o = 256 * o + e[t + f], f += h, u -= 8
      );
      for (
        a = o & ((1 << -u) - 1), o >>= -u, u += n;
        u > 0;
        a = 256 * a + e[t + f], f += h, u -= 8
      );
      if (0 === o) o = 1 - c;
      else {
        if (o === l) return a ? NaN : (1 / 0) * (d ? -1 : 1);
        (a += Math.pow(2, n)), (o -= c);
      }
      return (d ? -1 : 1) * a * Math.pow(2, o - n);
    }),
      (t.write = function (e, t, r, n, i, o) {
        var a,
          s,
          l,
          c = 8 * o - i - 1,
          u = (1 << c) - 1,
          f = u >> 1,
          h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = n ? 0 : o - 1,
          p = n ? 1 : -1,
          g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = u))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                (t += a + f >= 1 ? h / l : h * Math.pow(2, 1 - f)) * l >= 2 &&
                  (a++, (l /= 2)),
                a + f >= u
                  ? ((s = 0), (a = u))
                  : a + f >= 1
                  ? ((s = (t * l - 1) * Math.pow(2, i)), (a += f))
                  : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          e[r + d] = 255 & s, d += p, s /= 256, i -= 8
        );
        for (
          a = (a << i) | s, c += i;
          c > 0;
          e[r + d] = 255 & a, d += p, a /= 256, c -= 8
        );
        e[r + d - p] |= 128 * g;
      });
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    var n = r(10).Buffer,
      i = r(63);
    function o(e, t, r) {
      e.copy(t, r);
    }
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, r = "" + t.data; (t = t.next); )
            r += e + t.data;
          return r;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return n.alloc(0);
          for (var t = n.allocUnsafe(e >>> 0), r = this.head, i = 0; r; )
            o(r.data, t, i), (i += r.data.length), (r = r.next);
          return t;
        }),
        e
      );
    })()),
      i &&
        i.inspect &&
        i.inspect.custom &&
        (e.exports.prototype[i.inspect.custom] = function () {
          var e = i.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        });
  },
  function (e, t) {},
  function (e, t, r) {
    (function (t) {
      function r(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var r = t.localStorage[e];
        return null != r && "true" === String(r).toLowerCase();
      }
      e.exports = function (e, t) {
        if (r("noDeprecation")) return e;
        var n = !1;
        return function () {
          if (!n) {
            if (r("throwDeprecation")) throw new Error(t);
            r("traceDeprecation") ? console.trace(t) : console.warn(t),
              (n = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }).call(t, r(0));
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(26),
      i = Object.create(r(4));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      n.call(this, e);
    }
    (i.inherits = r(3)),
      i.inherits(o, n),
      (o.prototype._transform = function (e, t, r) {
        r(null, e);
      });
  },
  function (e, t, r) {
    e.exports = r(16);
  },
  function (e, t, r) {
    e.exports = r(2);
  },
  function (e, t, r) {
    e.exports = r(15).Transform;
  },
  function (e, t, r) {
    e.exports = r(15).PassThrough;
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      return new Error("Can only stringify objects, not " + e);
    }
    function i(e) {
      return Object.keys(e).filter((t) => s(e[t]));
    }
    function o(e) {
      let t = Array.isArray(e)
        ? []
        : Object.prototype.hasOwnProperty.call(e, "__proto__")
        ? { __proto__: void 0 }
        : {};
      for (let r of Object.keys(e))
        !e[r] || "function" != typeof e[r].toJSON || "toISOString" in e[r]
          ? (t[r] = e[r])
          : (t[r] = e[r].toJSON());
      return t;
    }
    function a(e, t, r) {
      let u, f;
      (u = i((r = o(r)))),
        (f = (function (e) {
          return Object.keys(e).filter((t) => !s(e[t]));
        })(r));
      const d = [],
        p = t || "";
      u.forEach((e) => {
        var t = l(r[e]);
        "undefined" !== t &&
          "null" !== t &&
          d.push(p + c(e) + " = " + h(r[e], !0));
      }),
        d.length > 0 && d.push("");
      const g = e && u.length > 0 ? t + "  " : "";
      return (
        f.forEach((t) => {
          d.push(
            (function (e, t, r, s) {
              const u = l(s);
              if ("array" === u)
                return (function (e, t, r, i) {
                  const s = l((i = o(i))[0]);
                  if ("table" !== s) throw n(s);
                  const u = e + c(r);
                  let f = "";
                  return (
                    i.forEach((e) => {
                      f.length > 0 && (f += "\n"),
                        (f += t + "[[" + u + "]]\n"),
                        (f += a(u + ".", t, e));
                    }),
                    f
                  );
                })(e, t, r, s);
              if ("table" === u)
                return (function (e, t, r, n) {
                  const o = e + c(r);
                  let s = "";
                  i(n).length > 0 && (s += t + "[" + o + "]\n");
                  return s + a(o + ".", t, n);
                })(e, t, r, s);
              throw n(u);
            })(e, g, t, r[t])
          );
        }),
        d.join("\n")
      );
    }
    function s(e) {
      switch (l(e)) {
        case "undefined":
        case "null":
        case "integer":
        case "nan":
        case "float":
        case "boolean":
        case "string":
        case "datetime":
          return !0;
        case "array":
          return 0 === e.length || "table" !== l(e[0]);
        case "table":
          return 0 === Object.keys(e).length;
        default:
          return !1;
      }
    }
    function l(e) {
      return void 0 === e
        ? "undefined"
        : null === e
        ? "null"
        : "bigint" == typeof e || (Number.isInteger(e) && !Object.is(e, -0))
        ? "integer"
        : "number" == typeof e
        ? "float"
        : "boolean" == typeof e
        ? "boolean"
        : "string" == typeof e
        ? "string"
        : "toISOString" in e
        ? isNaN(e)
          ? "undefined"
          : "datetime"
        : Array.isArray(e)
        ? "array"
        : "table";
    }
    function c(e) {
      const t = String(e);
      return /^[-A-Za-z0-9_]+$/.test(t) ? t : u(t);
    }
    function u(e) {
      return '"' + f(e).replace(/"/g, '\\"') + '"';
    }
    function f(e) {
      return e
        .replace(/\\/g, "\\\\")
        .replace(/[\b]/g, "\\b")
        .replace(/\t/g, "\\t")
        .replace(/\n/g, "\\n")
        .replace(/\f/g, "\\f")
        .replace(/\r/g, "\\r")
        .replace(
          /([\u0000-\u001f\u007f])/,
          (e) =>
            "\\u" +
            (function (e, t) {
              for (; t.length < e; ) t = "0" + t;
              return t;
            })(4, e.codePointAt(0).toString(16))
        );
    }
    function h(e, t) {
      let r = l(e);
      return (
        "string" === r &&
          (t && /\n/.test(e)
            ? (r = "string-multiline")
            : !/[\b\t\n\f\r']/.test(e) &&
              /"/.test(e) &&
              (r = "string-literal")),
        d(e, r)
      );
    }
    function d(e, t) {
      switch ((t || (t = l(e)), t)) {
        case "string-multiline":
          return (function (e) {
            let t = e
              .split(/\n/)
              .map((e) => f(e).replace(/"(?="")/g, '\\"'))
              .join("\n");
            return '"' === t.slice(-1) && (t += "\\\n"), '"""\n' + t + '"""';
          })(e);
        case "string":
          return u(e);
        case "string-literal":
          return (function (e) {
            return "'" + e + "'";
          })(e);
        case "integer":
          return p(e);
        case "float":
          return (function (e) {
            if (e === 1 / 0) return "inf";
            if (e === -1 / 0) return "-inf";
            if (Object.is(e, NaN)) return "nan";
            if (Object.is(e, -0)) return "-0.0";
            const [t, r] = String(e).split(".");
            return p(t) + "." + r;
          })(e);
        case "boolean":
          return (function (e) {
            return String(e);
          })(e);
        case "datetime":
          return (function (e) {
            return e.toISOString();
          })(e);
        case "array":
          return (function (e) {
            let t = "[";
            const r = (e = o(e)).map((e) => d(e));
            r.join(", ").length > 60 || /\n/.test(r)
              ? (t += "\n  " + r.join(",\n  ") + "\n")
              : (t += " " + r.join(", ") + (r.length > 0 ? " " : ""));
            return t + "]";
          })(
            e.filter(
              (e) => "null" !== l(e) && "undefined" !== l(e) && "nan" !== l(e)
            )
          );
        case "table":
          return (function (e) {
            e = o(e);
            const t = [];
            return (
              Object.keys(e).forEach((r) => {
                t.push(c(r) + " = " + h(e[r], !1));
              }),
              "{ " + t.join(", ") + (t.length > 0 ? " " : "") + "}"
            );
          })(e);
        default:
          throw n(t);
      }
    }
    function p(e) {
      return String(e).replace(/\B(?=(\d{3})+(?!\d))/g, "_");
    }
    (e.exports = function (e) {
      if (null === e) throw n("null");
      if (void 0 === e) throw n("undefined");
      if ("object" != typeof e) throw n(typeof e);
      "function" == typeof e.toJSON && (e = e.toJSON());
      if (null == e) return null;
      const t = l(e);
      if ("table" !== t) throw n(t);
      return a("", "", e);
    }),
      (e.exports.value = d);
  },
  function (e, t, r) {
    "use strict";
    var n = {
      render: function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "container", attrs: { id: "app" } }, [
          r("h1", { staticClass: "message title is-3" }, [
            e._v("Enter your TOML file below"),
          ]),
          e._v(" "),
          r(
            "div",
            { staticClass: "codemirror" },
            [
              r("codemirror", {
                attrs: { options: e.cmOptions },
                on: { ready: e.onCmReady },
                model: {
                  value: e.code,
                  callback: function (t) {
                    e.code = t;
                  },
                  expression: "code",
                },
              }),
            ],
            1
          ),
          e._v(" "),
          r("div", { staticClass: "validate" }, [
            r(
              "button",
              {
                staticClass: "button is-primary",
                attrs: { type: "button" },
                on: { click: e.validate },
              },
              [e._v("Validate")]
            ),
            e._v(" "),
            r(
              "button",
              {
                staticClass: "button is-danger",
                attrs: { type: "button" },
                on: { click: e.clear },
              },
              [e._v("Clear")]
            ),
          ]),
          e._v(" "),
          r(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "" !== e.err && "" === e.valid,
                  expression: "err !== '' && valid === ''",
                },
              ],
              staticClass: "alert alert-danger",
              attrs: { role: "alert" },
            },
            [
              r("p", [e._v("Error on line " + e._s(e.line) + ":")]),
              e._v(" "),
              r("p", [e._v(e._s(e.err))]),
            ]
          ),
          e._v(" "),
          r(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "" !== e.valid && "" === e.err,
                  expression: "valid !== '' && err === ''",
                },
              ],
              staticClass: "alert alert-success",
              attrs: { role: "alert" },
            },
            [e._v("\n    " + e._s(e.valid) + "\n  ")]
          ),
        ]);
      },
      staticRenderFns: [],
    };
    t.a = n;
  },
]);
