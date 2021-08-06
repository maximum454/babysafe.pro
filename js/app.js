! function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 134)
}([function(e, t, n) {
  (function(e) {
    var t;
    t = function() {
      "use strict";
      var t, r;

      function i() {
        return t.apply(null, arguments)
      }

      function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
      }

      function s(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
      }

      function o(e) {
        return void 0 === e
      }

      function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
      }

      function l(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
      }

      function d(e, t) {
        var n, r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r
      }

      function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function h(e, t) {
        for (var n in t) c(t, n) && (e[n] = t[n]);
        return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
      }

      function m(e, t, n, r) {
        return St(e, t, n, r, !0).utc()
      }

      function f(e) {
        return null == e._pf && (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        }), e._pf
      }

      function _(e) {
        if (null == e._isValid) {
          var t = f(e),
            n = r.call(t.parsedDateParts, function(e) {
              return null != e
            }),
            i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
          if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
          e._isValid = i
        }
        return e._isValid
      }

      function p(e) {
        var t = m(NaN);
        return null != e ? h(f(t), e) : f(t).userInvalidated = !0, t
      }
      r = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
          if (r in t && e.call(this, t[r], r, t)) return !0;
        return !1
      };
      var y = i.momentProperties = [];

      function g(e, t) {
        var n, r, i;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = f(t)), o(t._locale) || (e._locale = t._locale), y.length > 0)
          for (n = 0; n < y.length; n++) o(i = t[r = y[n]]) || (e[r] = i);
        return e
      }
      var v = !1;

      function M(e) {
        g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, i.updateOffset(this), v = !1)
      }

      function L(e) {
        return e instanceof M || null != e && null != e._isAMomentObject
      }

      function k(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
      }

      function b(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = k(t)), n
      }

      function Y(e, t, n) {
        var r, i = Math.min(e.length, t.length),
          a = Math.abs(e.length - t.length),
          s = 0;
        for (r = 0; r < i; r++)(n && e[r] !== t[r] || !n && b(e[r]) !== b(t[r])) && s++;
        return s + a
      }

      function w(e) {
        !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
      }

      function D(e, t) {
        var n = !0;
        return h(function() {
          if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) {
            for (var r, a = [], s = 0; s < arguments.length; s++) {
              if (r = "", "object" == typeof arguments[s]) {
                for (var o in r += "\n[" + s + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                r = r.slice(0, -2)
              } else r = arguments[s];
              a.push(r)
            }
            w(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
          }
          return t.apply(this, arguments)
        }, t)
      }
      var T, x = {};

      function S(e, t) {
        null != i.deprecationHandler && i.deprecationHandler(e, t), x[e] || (w(t), x[e] = !0)
      }

      function j(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
      }

      function H(e, t) {
        var n, r = h({}, e);
        for (n in t) c(t, n) && (s(e[n]) && s(t[n]) ? (r[n] = {}, h(r[n], e[n]), h(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
        for (n in e) c(e, n) && !c(t, n) && s(e[n]) && (r[n] = h({}, r[n]));
        return r
      }

      function E(e) {
        null != e && this.set(e)
      }
      i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, T = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) c(e, t) && n.push(t);
        return n
      };
      var A = {};

      function C(e, t) {
        var n = e.toLowerCase();
        A[n] = A[n + "s"] = A[t] = e
      }

      function O(e) {
        return "string" == typeof e ? A[e] || A[e.toLowerCase()] : void 0
      }

      function P(e) {
        var t, n, r = {};
        for (n in e) c(e, n) && (t = O(n)) && (r[t] = e[n]);
        return r
      }
      var W = {};

      function N(e, t) {
        W[e] = t
      }

      function F(e, t, n) {
        var r = "" + Math.abs(e),
          i = t - r.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
      }
      var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        z = {},
        $ = {};

      function q(e, t, n, r) {
        var i = r;
        "string" == typeof r && (i = function() {
          return this[r]()
        }), e && ($[e] = i), t && ($[t[0]] = function() {
          return F(i.apply(this, arguments), t[1], t[2])
        }), n && ($[n] = function() {
          return this.localeData().ordinal(i.apply(this, arguments), e)
        })
      }

      function B(e, t) {
        return e.isValid() ? (t = U(t, e.localeData()), z[t] = z[t] || function(e) {
          var t, n, r, i = e.match(I);
          for (t = 0, n = i.length; t < n; t++) $[i[t]] ? i[t] = $[i[t]] : i[t] = (r = i[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
          return function(t) {
            var r, a = "";
            for (r = 0; r < n; r++) a += j(i[r]) ? i[r].call(t, e) : i[r];
            return a
          }
        }(t), z[t](e)) : e.localeData().invalidDate()
      }

      function U(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e
        }
        for (R.lastIndex = 0; n >= 0 && R.test(e);) e = e.replace(R, r), R.lastIndex = 0, n -= 1;
        return e
      }
      var V = /\d/,
        J = /\d\d/,
        G = /\d{3}/,
        K = /\d{4}/,
        X = /[+-]?\d{6}/,
        Z = /\d\d?/,
        Q = /\d\d\d\d?/,
        ee = /\d\d\d\d\d\d?/,
        te = /\d{1,3}/,
        ne = /\d{1,4}/,
        re = /[+-]?\d{1,6}/,
        ie = /\d+/,
        ae = /[+-]?\d+/,
        se = /Z|[+-]\d\d:?\d\d/gi,
        oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ue = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        le = {};

      function de(e, t, n) {
        le[e] = j(t) ? t : function(e, r) {
          return e && n ? n : t
        }
      }

      function ce(e, t) {
        return c(le, e) ? le[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
          return t || n || r || i
        })))
      }

      function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      var me = {};

      function fe(e, t) {
        var n, r = t;
        for ("string" == typeof e && (e = [e]), u(t) && (r = function(e, n) {
            n[t] = b(e)
          }), n = 0; n < e.length; n++) me[e[n]] = r
      }

      function _e(e, t) {
        fe(e, function(e, n, r, i) {
          r._w = r._w || {}, t(e, r._w, r, i)
        })
      }

      function pe(e, t, n) {
        null != t && c(me, e) && me[e](t, n._a, n, e)
      }
      var ye = 0,
        ge = 1,
        ve = 2,
        Me = 3,
        Le = 4,
        ke = 5,
        be = 6,
        Ye = 7,
        we = 8;

      function De(e) {
        return Te(e) ? 366 : 365
      }

      function Te(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
      }
      q("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
      }), q(0, ["YY", 2], 0, function() {
        return this.year() % 100
      }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), N("year", 1), de("Y", ae), de("YY", Z, J), de("YYYY", ne, K), de("YYYYY", re, X), de("YYYYYY", re, X), fe(["YYYYY", "YYYYYY"], ye), fe("YYYY", function(e, t) {
        t[ye] = 2 === e.length ? i.parseTwoDigitYear(e) : b(e)
      }), fe("YY", function(e, t) {
        t[ye] = i.parseTwoDigitYear(e)
      }), fe("Y", function(e, t) {
        t[ye] = parseInt(e, 10)
      }), i.parseTwoDigitYear = function(e) {
        return b(e) + (b(e) > 68 ? 1900 : 2e3)
      };
      var xe, Se = je("FullYear", !0);

      function je(e, t) {
        return function(n) {
          return null != n ? (Ee(this, e, n), i.updateOffset(this, t), this) : He(this, e)
        }
      }

      function He(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
      }

      function Ee(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && Te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ae(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
      }

      function Ae(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, r = (t % (n = 12) + n) % n;
        return e += (t - r) / 12, 1 === r ? Te(e) ? 29 : 28 : 31 - r % 7 % 2
      }
      xe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
          if (this[t] === e) return t;
        return -1
      }, q("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
      }), q("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
      }), q("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
      }), C("month", "M"), N("month", 8), de("M", Z), de("MM", Z, J), de("MMM", function(e, t) {
        return t.monthsShortRegex(e)
      }), de("MMMM", function(e, t) {
        return t.monthsRegex(e)
      }), fe(["M", "MM"], function(e, t) {
        t[ge] = b(e) - 1
      }), fe(["MMM", "MMMM"], function(e, t, n, r) {
        var i = n._locale.monthsParse(e, r, n._strict);
        null != i ? t[ge] = i : f(n).invalidMonth = e
      });
      var Ce = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
      var Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

      function We(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = b(t);
          else if (!u(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Ae(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
      }

      function Ne(e) {
        return null != e ? (We(this, e), i.updateOffset(this, !0), this) : He(this, "Month")
      }
      var Fe = ue;
      var Ie = ue;

      function Re() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, r = [],
          i = [],
          a = [];
        for (t = 0; t < 12; t++) n = m([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
        for (r.sort(e), i.sort(e), a.sort(e), t = 0; t < 12; t++) r[t] = he(r[t]), i[t] = he(i[t]);
        for (t = 0; t < 24; t++) a[t] = he(a[t]);
        this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
      }

      function ze(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
      }

      function $e(e, t, n) {
        var r = 7 + t - n;
        return -((7 + ze(e, 0, r).getUTCDay() - t) % 7) + r - 1
      }

      function qe(e, t, n, r, i) {
        var a, s, o = 1 + 7 * (t - 1) + (7 + n - r) % 7 + $e(e, r, i);
        return o <= 0 ? s = De(a = e - 1) + o : o > De(e) ? (a = e + 1, s = o - De(e)) : (a = e, s = o), {
          year: a,
          dayOfYear: s
        }
      }

      function Be(e, t, n) {
        var r, i, a = $e(e.year(), t, n),
          s = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
        return s < 1 ? r = s + Ue(i = e.year() - 1, t, n) : s > Ue(e.year(), t, n) ? (r = s - Ue(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = s), {
          week: r,
          year: i
        }
      }

      function Ue(e, t, n) {
        var r = $e(e, t, n),
          i = $e(e + 1, t, n);
        return (De(e) - r + i) / 7
      }
      q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), N("week", 5), N("isoWeek", 5), de("w", Z), de("ww", Z, J), de("W", Z), de("WW", Z, J), _e(["w", "ww", "W", "WW"], function(e, t, n, r) {
        t[r.substr(0, 1)] = b(e)
      });
      q("d", 0, "do", "day"), q("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
      }), q("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
      }), q("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
      }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), de("d", Z), de("e", Z), de("E", Z), de("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
      }), de("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
      }), de("dddd", function(e, t) {
        return t.weekdaysRegex(e)
      }), _e(["dd", "ddd", "dddd"], function(e, t, n, r) {
        var i = n._locale.weekdaysParse(e, r, n._strict);
        null != i ? t.d = i : f(n).invalidWeekday = e
      }), _e(["d", "e", "E"], function(e, t, n, r) {
        t[r] = b(e)
      });
      var Ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
      var Je = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
      var Ge = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
      var Ke = ue;
      var Xe = ue;
      var Ze = ue;

      function Qe() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, r, i, a, s = [],
          o = [],
          u = [],
          l = [];
        for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), s.push(r), o.push(i), u.push(a), l.push(r), l.push(i), l.push(a);
        for (s.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]), u[t] = he(u[t]), l[t] = he(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
      }

      function et() {
        return this.hours() % 12 || 12
      }

      function tt(e, t) {
        q(e, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
      }

      function nt(e, t) {
        return t._meridiemParse
      }
      q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, et), q("k", ["kk", 2], 0, function() {
        return this.hours() || 24
      }), q("hmm", 0, 0, function() {
        return "" + et.apply(this) + F(this.minutes(), 2)
      }), q("hmmss", 0, 0, function() {
        return "" + et.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2)
      }), q("Hmm", 0, 0, function() {
        return "" + this.hours() + F(this.minutes(), 2)
      }), q("Hmmss", 0, 0, function() {
        return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
      }), tt("a", !0), tt("A", !1), C("hour", "h"), N("hour", 13), de("a", nt), de("A", nt), de("H", Z), de("h", Z), de("k", Z), de("HH", Z, J), de("hh", Z, J), de("kk", Z, J), de("hmm", Q), de("hmmss", ee), de("Hmm", Q), de("Hmmss", ee), fe(["H", "HH"], Me), fe(["k", "kk"], function(e, t, n) {
        var r = b(e);
        t[Me] = 24 === r ? 0 : r
      }), fe(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
      }), fe(["h", "hh"], function(e, t, n) {
        t[Me] = b(e), f(n).bigHour = !0
      }), fe("hmm", function(e, t, n) {
        var r = e.length - 2;
        t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r)), f(n).bigHour = !0
      }), fe("hmmss", function(e, t, n) {
        var r = e.length - 4,
          i = e.length - 2;
        t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r, 2)), t[ke] = b(e.substr(i)), f(n).bigHour = !0
      }), fe("Hmm", function(e, t, n) {
        var r = e.length - 2;
        t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r))
      }), fe("Hmmss", function(e, t, n) {
        var r = e.length - 4,
          i = e.length - 2;
        t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r, 2)), t[ke] = b(e.substr(i))
      });
      var rt, it = je("Hours", !0),
        at = {
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          months: Oe,
          monthsShort: Pe,
          week: {
            dow: 0,
            doy: 6
          },
          weekdays: Ve,
          weekdaysMin: Ge,
          weekdaysShort: Je,
          meridiemParse: /[ap]\.?m?\.?/i
        },
        st = {},
        ot = {};

      function ut(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
      }

      function lt(t) {
        var r = null;
        if (!st[t] && void 0 !== e && e && e.exports) try {
          r = rt._abbr;
          n(139)("./" + t), dt(r)
        } catch (e) {}
        return st[t]
      }

      function dt(e, t) {
        var n;
        return e && ((n = o(t) ? ht(e) : ct(e, t)) ? rt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), rt._abbr
      }

      function ct(e, t) {
        if (null !== t) {
          var n, r = at;
          if (t.abbr = e, null != st[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = st[e]._config;
          else if (null != t.parentLocale)
            if (null != st[t.parentLocale]) r = st[t.parentLocale]._config;
            else {
              if (null == (n = lt(t.parentLocale))) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              r = n._config
            }
          return st[e] = new E(H(r, t)), ot[e] && ot[e].forEach(function(e) {
            ct(e.name, e.config)
          }), dt(e), st[e]
        }
        return delete st[e], null
      }

      function ht(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return rt;
        if (!a(e)) {
          if (t = lt(e)) return t;
          e = [e]
        }
        return function(e) {
          for (var t, n, r, i, a = 0; a < e.length;) {
            for (t = (i = ut(e[a]).split("-")).length, n = (n = ut(e[a + 1])) ? n.split("-") : null; t > 0;) {
              if (r = lt(i.slice(0, t).join("-"))) return r;
              if (n && n.length >= t && Y(i, n, !0) >= t - 1) break;
              t--
            }
            a++
          }
          return rt
        }(e)
      }

      function mt(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[ge] < 0 || n[ge] > 11 ? ge : n[ve] < 1 || n[ve] > Ae(n[ye], n[ge]) ? ve : n[Me] < 0 || n[Me] > 24 || 24 === n[Me] && (0 !== n[Le] || 0 !== n[ke] || 0 !== n[be]) ? Me : n[Le] < 0 || n[Le] > 59 ? Le : n[ke] < 0 || n[ke] > 59 ? ke : n[be] < 0 || n[be] > 999 ? be : -1, f(e)._overflowDayOfYear && (t < ye || t > ve) && (t = ve), f(e)._overflowWeeks && -1 === t && (t = Ye), f(e)._overflowWeekday && -1 === t && (t = we), f(e).overflow = t), e
      }

      function ft(e, t, n) {
        return null != e ? e : null != t ? t : n
      }

      function _t(e) {
        var t, n, r, a, s, o = [];
        if (!e._d) {
          for (r = function(e) {
              var t = new Date(i.now());
              return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e), e._w && null == e._a[ve] && null == e._a[ge] && function(e) {
              var t, n, r, i, a, s, o, u;
              if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1, s = 4, n = ft(t.GG, e._a[ye], Be(jt(), 1, 4).year), r = ft(t.W, 1), ((i = ft(t.E, 1)) < 1 || i > 7) && (u = !0);
              else {
                a = e._locale._week.dow, s = e._locale._week.doy;
                var l = Be(jt(), a, s);
                n = ft(t.gg, e._a[ye], l.year), r = ft(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : i = a
              }
              r < 1 || r > Ue(n, a, s) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = qe(n, r, i, a, s), e._a[ye] = o.year, e._dayOfYear = o.dayOfYear)
            }(e), null != e._dayOfYear && (s = ft(e._a[ye], r[ye]), (e._dayOfYear > De(s) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = ze(s, 0, e._dayOfYear), e._a[ge] = n.getUTCMonth(), e._a[ve] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
          for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          24 === e._a[Me] && 0 === e._a[Le] && 0 === e._a[ke] && 0 === e._a[be] && (e._nextDay = !0, e._a[Me] = 0), e._d = (e._useUTC ? ze : function(e, t, n, r, i, a, s) {
            var o = new Date(e, t, n, r, i, a, s);
            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
          }).apply(null, o), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Me] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (f(e).weekdayMismatch = !0)
        }
      }
      var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        gt = /Z|[+-]\d\d(?::?\d\d)?/,
        vt = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/]
        ],
        Mt = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ],
        Lt = /^\/?Date\((\-?\d+)/i;

      function kt(e) {
        var t, n, r, i, a, s, o = e._i,
          u = pt.exec(o) || yt.exec(o);
        if (u) {
          for (f(e).iso = !0, t = 0, n = vt.length; t < n; t++)
            if (vt[t][1].exec(u[1])) {
              i = vt[t][0], r = !1 !== vt[t][2];
              break
            }
          if (null == i) return void(e._isValid = !1);
          if (u[3]) {
            for (t = 0, n = Mt.length; t < n; t++)
              if (Mt[t][1].exec(u[3])) {
                a = (u[2] || " ") + Mt[t][0];
                break
              }
            if (null == a) return void(e._isValid = !1)
          }
          if (!r && null != a) return void(e._isValid = !1);
          if (u[4]) {
            if (!gt.exec(u[4])) return void(e._isValid = !1);
            s = "Z"
          }
          e._f = i + (a || "") + (s || ""), Tt(e)
        } else e._isValid = !1
      }
      var bt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function Yt(e, t, n, r, i, a) {
        var s = [function(e) {
          var t = parseInt(e, 10);
          if (t <= 49) return 2e3 + t;
          if (t <= 999) return 1900 + t;
          return t
        }(e), Pe.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
        return a && s.push(parseInt(a, 10)), s
      }
      var wt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
      };

      function Dt(e) {
        var t = bt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (t) {
          var n = Yt(t[4], t[3], t[2], t[5], t[6], t[7]);
          if (! function(e, t, n) {
              return !e || Je.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (f(n).weekdayMismatch = !0, n._isValid = !1, !1)
            }(t[1], n, e)) return;
          e._a = n, e._tzm = function(e, t, n) {
            if (e) return wt[e];
            if (t) return 0;
            var r = parseInt(n, 10),
              i = r % 100;
            return (r - i) / 100 * 60 + i
          }(t[8], t[9], t[10]), e._d = ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
        } else e._isValid = !1
      }

      function Tt(e) {
        if (e._f !== i.ISO_8601)
          if (e._f !== i.RFC_2822) {
            e._a = [], f(e).empty = !0;
            var t, n, r, a, s, o = "" + e._i,
              u = o.length,
              l = 0;
            for (r = U(e._f, e._locale).match(I) || [], t = 0; t < r.length; t++) a = r[t], (n = (o.match(ce(a, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(n))).length > 0 && f(e).unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), l += n.length), $[a] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(a), pe(a, n, e)) : e._strict && !n && f(e).unusedTokens.push(a);
            f(e).charsLeftOver = u - l, o.length > 0 && f(e).unusedInput.push(o), e._a[Me] <= 12 && !0 === f(e).bigHour && e._a[Me] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Me] = function(e, t, n) {
              var r;
              if (null == n) return t;
              return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[Me], e._meridiem), _t(e), mt(e)
          } else Dt(e);
        else kt(e)
      }

      function xt(e) {
        var t = e._i,
          n = e._f;
        return e._locale = e._locale || ht(e._l), null === t || void 0 === n && "" === t ? p({
          nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), L(t) ? new M(mt(t)) : (l(t) ? e._d = t : a(n) ? function(e) {
          var t, n, r, i, a;
          if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
          for (i = 0; i < e._f.length; i++) a = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Tt(t), _(t) && (a += f(t).charsLeftOver, a += 10 * f(t).unusedTokens.length, f(t).score = a, (null == r || a < r) && (r = a, n = t));
          h(e, n || t)
        }(e) : n ? Tt(e) : function(e) {
          var t = e._i;
          o(t) ? e._d = new Date(i.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
            var t = Lt.exec(e._i);
            null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, Dt(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
          }(e) : a(t) ? (e._a = d(t.slice(0), function(e) {
            return parseInt(e, 10)
          }), _t(e)) : s(t) ? function(e) {
            if (!e._d) {
              var t = P(e._i);
              e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                return e && parseInt(e, 10)
              }), _t(e)
            }
          }(e) : u(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
        }(e), _(e) || (e._d = null), e))
      }

      function St(e, t, n, r, i) {
        var o, u = {};
        return !0 !== n && !1 !== n || (r = n, n = void 0), (s(e) && function(e) {
          if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e)
            if (e.hasOwnProperty(t)) return !1;
          return !0
        }(e) || a(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = i, u._l = n, u._i = e, u._f = t, u._strict = r, (o = new M(mt(xt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
      }

      function jt(e, t, n, r) {
        return St(e, t, n, r, !1)
      }
      i.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
      }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
      var Ht = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var e = jt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e < this ? this : e : p()
        }),
        Et = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var e = jt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e > this ? this : e : p()
        });

      function At(e, t) {
        var n, r;
        if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return jt();
        for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
        return n
      }
      var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

      function Ot(e) {
        var t = P(e),
          n = t.year || 0,
          r = t.quarter || 0,
          i = t.month || 0,
          a = t.week || 0,
          s = t.day || 0,
          o = t.hour || 0,
          u = t.minute || 0,
          l = t.second || 0,
          d = t.millisecond || 0;
        this._isValid = function(e) {
          for (var t in e)
            if (-1 === xe.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
          for (var n = !1, r = 0; r < Ct.length; ++r)
            if (e[Ct[r]]) {
              if (n) return !1;
              parseFloat(e[Ct[r]]) !== b(e[Ct[r]]) && (n = !0)
            }
          return !0
        }(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +s + 7 * a, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = ht(), this._bubble()
      }

      function Pt(e) {
        return e instanceof Ot
      }

      function Wt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
      }

      function Nt(e, t) {
        q(e, 0, 0, function() {
          var e = this.utcOffset(),
            n = "+";
          return e < 0 && (e = -e, n = "-"), n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
        })
      }
      Nt("Z", ":"), Nt("ZZ", ""), de("Z", oe), de("ZZ", oe), fe(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0, n._tzm = It(oe, e)
      });
      var Ft = /([\+\-]|\d\d)/gi;

      function It(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var r = ((n[n.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
          i = 60 * r[1] + b(r[2]);
        return 0 === i ? 0 : "+" === r[0] ? i : -i
      }

      function Rt(e, t) {
        var n, r;
        return t._isUTC ? (n = t.clone(), r = (L(e) || l(e) ? e.valueOf() : jt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : jt(e).local()
      }

      function zt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
      }

      function $t() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
      }
      i.updateOffset = function() {};
      var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Bt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Ut(e, t) {
        var n, r, i, a = e,
          s = null;
        return Pt(e) ? a = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        } : u(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = qt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
          y: 0,
          d: b(s[ve]) * n,
          h: b(s[Me]) * n,
          m: b(s[Le]) * n,
          s: b(s[ke]) * n,
          ms: b(Wt(1e3 * s[be])) * n
        }) : (s = Bt.exec(e)) ? (n = "-" === s[1] ? -1 : (s[1], 1), a = {
          y: Vt(s[2], n),
          M: Vt(s[3], n),
          w: Vt(s[4], n),
          d: Vt(s[5], n),
          h: Vt(s[6], n),
          m: Vt(s[7], n),
          s: Vt(s[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (i = function(e, t) {
          var n;
          if (!e.isValid() || !t.isValid()) return {
            milliseconds: 0,
            months: 0
          };
          t = Rt(t, e), e.isBefore(t) ? n = Jt(e, t) : ((n = Jt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
          return n
        }(jt(a.from), jt(a.to)), (a = {}).ms = i.milliseconds, a.M = i.months), r = new Ot(a), Pt(e) && c(e, "_locale") && (r._locale = e._locale), r
      }

      function Vt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
      }

      function Jt(e, t) {
        var n = {
          milliseconds: 0,
          months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
      }

      function Gt(e, t) {
        return function(n, r) {
          var i;
          return null === r || isNaN(+r) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), Kt(this, Ut(n = "string" == typeof n ? +n : n, r), e), this
        }
      }

      function Kt(e, t, n, r) {
        var a = t._milliseconds,
          s = Wt(t._days),
          o = Wt(t._months);
        e.isValid() && (r = null == r || r, o && We(e, He(e, "Month") + o * n), s && Ee(e, "Date", He(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), r && i.updateOffset(e, s || o))
      }
      Ut.fn = Ot.prototype, Ut.invalid = function() {
        return Ut(NaN)
      };
      var Xt = Gt(1, "add"),
        Zt = Gt(-1, "subtract");

      function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          r = e.clone().add(n, "months");
        return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
      }

      function en(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this)
      }
      i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      var tn = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
      });

      function nn() {
        return this._locale
      }

      function rn(e, t) {
        q(0, [e, e.length], 0, t)
      }

      function an(e, t, n, r, i) {
        var a;
        return null == e ? Be(this, r, i).year : (t > (a = Ue(e, r, i)) && (t = a), function(e, t, n, r, i) {
          var a = qe(e, t, n, r, i),
            s = ze(a.year, 0, a.dayOfYear);
          return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }.call(this, e, t, n, r, i))
      }
      q(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
      }), q(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
      }), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), rn("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), de("G", ae), de("g", ae), de("GG", Z, J), de("gg", Z, J), de("GGGG", ne, K), de("gggg", ne, K), de("GGGGG", re, X), de("ggggg", re, X), _e(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
        t[r.substr(0, 2)] = b(e)
      }), _e(["gg", "GG"], function(e, t, n, r) {
        t[r] = i.parseTwoDigitYear(e)
      }), q("Q", 0, "Qo", "quarter"), C("quarter", "Q"), N("quarter", 7), de("Q", V), fe("Q", function(e, t) {
        t[ge] = 3 * (b(e) - 1)
      }), q("D", ["DD", 2], "Do", "date"), C("date", "D"), N("date", 9), de("D", Z), de("DD", Z, J), de("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
      }), fe(["D", "DD"], ve), fe("Do", function(e, t) {
        t[ve] = b(e.match(Z)[0])
      });
      var sn = je("Date", !0);
      q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), N("dayOfYear", 4), de("DDD", te), de("DDDD", G), fe(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = b(e)
      }), q("m", ["mm", 2], 0, "minute"), C("minute", "m"), N("minute", 14), de("m", Z), de("mm", Z, J), fe(["m", "mm"], Le);
      var on = je("Minutes", !1);
      q("s", ["ss", 2], 0, "second"), C("second", "s"), N("second", 15), de("s", Z), de("ss", Z, J), fe(["s", "ss"], ke);
      var un, ln = je("Seconds", !1);
      for (q("S", 0, 0, function() {
          return ~~(this.millisecond() / 100)
        }), q(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10)
        }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
          return 10 * this.millisecond()
        }), q(0, ["SSSSS", 5], 0, function() {
          return 100 * this.millisecond()
        }), q(0, ["SSSSSS", 6], 0, function() {
          return 1e3 * this.millisecond()
        }), q(0, ["SSSSSSS", 7], 0, function() {
          return 1e4 * this.millisecond()
        }), q(0, ["SSSSSSSS", 8], 0, function() {
          return 1e5 * this.millisecond()
        }), q(0, ["SSSSSSSSS", 9], 0, function() {
          return 1e6 * this.millisecond()
        }), C("millisecond", "ms"), N("millisecond", 16), de("S", te, V), de("SS", te, J), de("SSS", te, G), un = "SSSS"; un.length <= 9; un += "S") de(un, ie);

      function dn(e, t) {
        t[be] = b(1e3 * ("0." + e))
      }
      for (un = "S"; un.length <= 9; un += "S") fe(un, dn);
      var cn = je("Milliseconds", !1);
      q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
      var hn = M.prototype;

      function mn(e) {
        return e
      }
      hn.add = Xt, hn.calendar = function(e, t) {
        var n = e || jt(),
          r = Rt(n, this).startOf("day"),
          a = i.calendarFormat(this, r) || "sameElse",
          s = t && (j(t[a]) ? t[a].call(this, n) : t[a]);
        return this.format(s || this.localeData().calendar(a, this, jt(n)))
      }, hn.clone = function() {
        return new M(this)
      }, hn.diff = function(e, t, n) {
        var r, i, a;
        if (!this.isValid()) return NaN;
        if (!(r = Rt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = O(t)) {
          case "year":
            a = Qt(this, r) / 12;
            break;
          case "month":
            a = Qt(this, r);
            break;
          case "quarter":
            a = Qt(this, r) / 3;
            break;
          case "second":
            a = (this - r) / 1e3;
            break;
          case "minute":
            a = (this - r) / 6e4;
            break;
          case "hour":
            a = (this - r) / 36e5;
            break;
          case "day":
            a = (this - r - i) / 864e5;
            break;
          case "week":
            a = (this - r - i) / 6048e5;
            break;
          default:
            a = this - r
        }
        return n ? a : k(a)
      }, hn.endOf = function(e) {
        return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
      }, hn.format = function(e) {
        e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
        var t = B(this, e);
        return this.localeData().postformat(t)
      }, hn.from = function(e, t) {
        return this.isValid() && (L(e) && e.isValid() || jt(e).isValid()) ? Ut({
          to: this,
          from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }, hn.fromNow = function(e) {
        return this.from(jt(), e)
      }, hn.to = function(e, t) {
        return this.isValid() && (L(e) && e.isValid() || jt(e).isValid()) ? Ut({
          from: this,
          to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }, hn.toNow = function(e) {
        return this.to(jt(), e)
      }, hn.get = function(e) {
        return j(this[e = O(e)]) ? this[e]() : this
      }, hn.invalidAt = function() {
        return f(this).overflow
      }, hn.isAfter = function(e, t) {
        var n = L(e) ? e : jt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(o(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
      }, hn.isBefore = function(e, t) {
        var n = L(e) ? e : jt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(o(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
      }, hn.isBetween = function(e, t, n, r) {
        return ("(" === (r = r || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      }, hn.isSame = function(e, t) {
        var n, r = L(e) ? e : jt(e);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = O(t || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
      }, hn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
      }, hn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
      }, hn.isValid = function() {
        return _(this)
      }, hn.lang = tn, hn.locale = en, hn.localeData = nn, hn.max = Et, hn.min = Ht, hn.parsingFlags = function() {
        return h({}, f(this))
      }, hn.set = function(e, t) {
        if ("object" == typeof e)
          for (var n = function(e) {
              var t = [];
              for (var n in e) t.push({
                unit: n,
                priority: W[n]
              });
              return t.sort(function(e, t) {
                return e.priority - t.priority
              }), t
            }(e = P(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
        else if (j(this[e = O(e)])) return this[e](t);
        return this
      }, hn.startOf = function(e) {
        switch (e = O(e)) {
          case "year":
            this.month(0);
          case "quarter":
          case "month":
            this.date(1);
          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);
          case "hour":
            this.minutes(0);
          case "minute":
            this.seconds(0);
          case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
      }, hn.subtract = Zt, hn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
      }, hn.toObject = function() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds()
        }
      }, hn.toDate = function() {
        return new Date(this.valueOf())
      }, hn.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? B(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(n, "Z")) : B(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
      }, hn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
          t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
          r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          i = t + '[")]';
        return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
      }, hn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
      }, hn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      }, hn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
      }, hn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
      }, hn.creationData = function() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        }
      }, hn.year = Se, hn.isLeapYear = function() {
        return Te(this.year())
      }, hn.weekYear = function(e) {
        return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
      }, hn.isoWeekYear = function(e) {
        return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
      }, hn.quarter = hn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
      }, hn.month = Ne, hn.daysInMonth = function() {
        return Ae(this.year(), this.month())
      }, hn.week = hn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
      }, hn.isoWeek = hn.isoWeeks = function(e) {
        var t = Be(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
      }, hn.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ue(this.year(), e.dow, e.doy)
      }, hn.isoWeeksInYear = function() {
        return Ue(this.year(), 1, 4)
      }, hn.date = sn, hn.day = hn.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function(e, t) {
          return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()), this.add(e - t, "d")) : t
      }, hn.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
      }, hn.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = function(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
          }(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
      }, hn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
      }, hn.hour = hn.hours = it, hn.minute = hn.minutes = on, hn.second = hn.seconds = ln, hn.millisecond = hn.milliseconds = cn, hn.utcOffset = function(e, t, n) {
        var r, a = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = It(oe, e))) return this
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return !this._isUTC && t && (r = zt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Kt(this, Ut(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? a : zt(this)
      }, hn.utc = function(e) {
        return this.utcOffset(0, e)
      }, hn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(zt(this), "m")), this
      }, hn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = It(se, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
      }, hn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? jt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
      }, hn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
      }, hn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
      }, hn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
      }, hn.isUtc = $t, hn.isUTC = $t, hn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
      }, hn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      }, hn.dates = D("dates accessor is deprecated. Use date instead.", sn), hn.months = D("months accessor is deprecated. Use month instead", Ne), hn.years = D("years accessor is deprecated. Use year instead", Se), hn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
      }), hn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (g(e, this), (e = xt(e))._a) {
          var t = e._isUTC ? m(e._a) : jt(e._a);
          this._isDSTShifted = this.isValid() && Y(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
      });
      var fn = E.prototype;

      function _n(e, t, n, r) {
        var i = ht(),
          a = m().set(r, t);
        return i[n](a, e)
      }

      function pn(e, t, n) {
        if (u(e) && (t = e, e = void 0), e = e || "", null != t) return _n(e, t, n, "month");
        var r, i = [];
        for (r = 0; r < 12; r++) i[r] = _n(e, r, n, "month");
        return i
      }

      function yn(e, t, n, r) {
        "boolean" == typeof e ? (u(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, u(t) && (n = t, t = void 0), t = t || "");
        var i, a = ht(),
          s = e ? a._week.dow : 0;
        if (null != n) return _n(t, (n + s) % 7, r, "day");
        var o = [];
        for (i = 0; i < 7; i++) o[i] = _n(t, (i + s) % 7, r, "day");
        return o
      }
      fn.calendar = function(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return j(r) ? r.call(t, n) : r
      }, fn.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
          return e.slice(1)
        }), this._longDateFormat[e])
      }, fn.invalidDate = function() {
        return this._invalidDate
      }, fn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
      }, fn.preparse = mn, fn.postformat = mn, fn.relativeTime = function(e, t, n, r) {
        var i = this._relativeTime[n];
        return j(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
      }, fn.pastFuture = function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return j(n) ? n(t) : n.replace(/%s/i, t)
      }, fn.set = function(e) {
        var t, n;
        for (n in e) j(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
      }, fn.months = function(e, t) {
        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ce).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
      }, fn.monthsShort = function(e, t) {
        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ce.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
      }, fn.monthsParse = function(e, t, n) {
        var r, i, a;
        if (this._monthsParseExact) return function(e, t, n) {
          var r, i, a, s = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = m([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
          return n ? "MMM" === t ? -1 !== (i = xe.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = xe.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = xe.call(this._shortMonthsParse, s)) ? i : -1 !== (i = xe.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = xe.call(this._longMonthsParse, s)) ? i : -1 !== (i = xe.call(this._shortMonthsParse, s)) ? i : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
          if (i = m([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r
        }
      }, fn.monthsRegex = function(e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || Re.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ie), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
      }, fn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || Re.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      }, fn.week = function(e) {
        return Be(e, this._week.dow, this._week.doy).week
      }, fn.firstDayOfYear = function() {
        return this._week.doy
      }, fn.firstDayOfWeek = function() {
        return this._week.dow
      }, fn.weekdays = function(e, t) {
        return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
      }, fn.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
      }, fn.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
      }, fn.weekdaysParse = function(e, t, n) {
        var r, i, a;
        if (this._weekdaysParseExact) return function(e, t, n) {
          var r, i, a, s = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = m([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
          return n ? "dddd" === t ? -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
          if (i = m([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r
        }
      }, fn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      }, fn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      }, fn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      }, fn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
      }, fn.meridiem = function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
      }, dt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
          var t = e % 10;
          return e + (1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      }), i.lang = D("moment.lang is deprecated. Use moment.locale instead.", dt), i.langData = D("moment.langData is deprecated. Use moment.localeData instead.", ht);
      var gn = Math.abs;

      function vn(e, t, n, r) {
        var i = Ut(t, n);
        return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
      }

      function Mn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
      }

      function Ln(e) {
        return 4800 * e / 146097
      }

      function kn(e) {
        return 146097 * e / 4800
      }

      function bn(e) {
        return function() {
          return this.as(e)
        }
      }
      var Yn = bn("ms"),
        wn = bn("s"),
        Dn = bn("m"),
        Tn = bn("h"),
        xn = bn("d"),
        Sn = bn("w"),
        jn = bn("M"),
        Hn = bn("y");

      function En(e) {
        return function() {
          return this.isValid() ? this._data[e] : NaN
        }
      }
      var An = En("milliseconds"),
        Cn = En("seconds"),
        On = En("minutes"),
        Pn = En("hours"),
        Wn = En("days"),
        Nn = En("months"),
        Fn = En("years");
      var In = Math.round,
        Rn = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        };
      var zn = Math.abs;

      function $n(e) {
        return (e > 0) - (e < 0) || +e
      }

      function qn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = zn(this._milliseconds) / 1e3,
          r = zn(this._days),
          i = zn(this._months);
        t = k((e = k(n / 60)) / 60), n %= 60, e %= 60;
        var a = k(i / 12),
          s = i %= 12,
          o = r,
          u = t,
          l = e,
          d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
          c = this.asSeconds();
        if (!c) return "P0D";
        var h = c < 0 ? "-" : "",
          m = $n(this._months) !== $n(c) ? "-" : "",
          f = $n(this._days) !== $n(c) ? "-" : "",
          _ = $n(this._milliseconds) !== $n(c) ? "-" : "";
        return h + "P" + (a ? m + a + "Y" : "") + (s ? m + s + "M" : "") + (o ? f + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "")
      }
      var Bn = Ot.prototype;
      return Bn.isValid = function() {
        return this._isValid
      }, Bn.abs = function() {
        var e = this._data;
        return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), this._months = gn(this._months), e.milliseconds = gn(e.milliseconds), e.seconds = gn(e.seconds), e.minutes = gn(e.minutes), e.hours = gn(e.hours), e.months = gn(e.months), e.years = gn(e.years), this
      }, Bn.add = function(e, t) {
        return vn(this, e, t, 1)
      }, Bn.subtract = function(e, t) {
        return vn(this, e, t, -1)
      }, Bn.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, r = this._milliseconds;
        if ("month" === (e = O(e)) || "year" === e) return t = this._days + r / 864e5, n = this._months + Ln(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(kn(this._months)), e) {
          case "week":
            return t / 7 + r / 6048e5;
          case "day":
            return t + r / 864e5;
          case "hour":
            return 24 * t + r / 36e5;
          case "minute":
            return 1440 * t + r / 6e4;
          case "second":
            return 86400 * t + r / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + r;
          default:
            throw new Error("Unknown unit " + e)
        }
      }, Bn.asMilliseconds = Yn, Bn.asSeconds = wn, Bn.asMinutes = Dn, Bn.asHours = Tn, Bn.asDays = xn, Bn.asWeeks = Sn, Bn.asMonths = jn, Bn.asYears = Hn, Bn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
      }, Bn._bubble = function() {
        var e, t, n, r, i, a = this._milliseconds,
          s = this._days,
          o = this._months,
          u = this._data;
        return a >= 0 && s >= 0 && o >= 0 || a <= 0 && s <= 0 && o <= 0 || (a += 864e5 * Mn(kn(o) + s), s = 0, o = 0), u.milliseconds = a % 1e3, e = k(a / 1e3), u.seconds = e % 60, t = k(e / 60), u.minutes = t % 60, n = k(t / 60), u.hours = n % 24, o += i = k(Ln(s += k(n / 24))), s -= Mn(kn(i)), r = k(o / 12), o %= 12, u.days = s, u.months = o, u.years = r, this
      }, Bn.clone = function() {
        return Ut(this)
      }, Bn.get = function(e) {
        return e = O(e), this.isValid() ? this[e + "s"]() : NaN
      }, Bn.milliseconds = An, Bn.seconds = Cn, Bn.minutes = On, Bn.hours = Pn, Bn.days = Wn, Bn.weeks = function() {
        return k(this.days() / 7)
      }, Bn.months = Nn, Bn.years = Fn, Bn.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(),
          n = function(e, t, n) {
            var r = Ut(e).abs(),
              i = In(r.as("s")),
              a = In(r.as("m")),
              s = In(r.as("h")),
              o = In(r.as("d")),
              u = In(r.as("M")),
              l = In(r.as("y")),
              d = i <= Rn.ss && ["s", i] || i < Rn.s && ["ss", i] || a <= 1 && ["m"] || a < Rn.m && ["mm", a] || s <= 1 && ["h"] || s < Rn.h && ["hh", s] || o <= 1 && ["d"] || o < Rn.d && ["dd", o] || u <= 1 && ["M"] || u < Rn.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l];
            return d[2] = t, d[3] = +e > 0, d[4] = n,
              function(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r)
              }.apply(null, d)
          }(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
      }, Bn.toISOString = qn, Bn.toString = qn, Bn.toJSON = qn, Bn.locale = en, Bn.localeData = nn, Bn.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), Bn.lang = tn, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), de("x", ae), de("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
      }), fe("x", function(e, t, n) {
        n._d = new Date(b(e))
      }), i.version = "2.22.2", t = jt, i.fn = hn, i.min = function() {
        return At("isBefore", [].slice.call(arguments, 0))
      }, i.max = function() {
        return At("isAfter", [].slice.call(arguments, 0))
      }, i.now = function() {
        return Date.now ? Date.now() : +new Date
      }, i.utc = m, i.unix = function(e) {
        return jt(1e3 * e)
      }, i.months = function(e, t) {
        return pn(e, t, "months")
      }, i.isDate = l, i.locale = dt, i.invalid = p, i.duration = Ut, i.isMoment = L, i.weekdays = function(e, t, n) {
        return yn(e, t, n, "weekdays")
      }, i.parseZone = function() {
        return jt.apply(null, arguments).parseZone()
      }, i.localeData = ht, i.isDuration = Pt, i.monthsShort = function(e, t) {
        return pn(e, t, "monthsShort")
      }, i.weekdaysMin = function(e, t, n) {
        return yn(e, t, n, "weekdaysMin")
      }, i.defineLocale = ct, i.updateLocale = function(e, t) {
        if (null != t) {
          var n, r, i = at;
          null != (r = lt(e)) && (i = r._config), (n = new E(t = H(i, t))).parentLocale = st[e], st[e] = n, dt(e)
        } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);
        return st[e]
      }, i.locales = function() {
        return T(st)
      }, i.weekdaysShort = function(e, t, n) {
        return yn(e, t, n, "weekdaysShort")
      }, i.normalizeUnits = O, i.relativeTimeRounding = function(e) {
        return void 0 === e ? In : "function" == typeof e && (In = e, !0)
      }, i.relativeTimeThreshold = function(e, t) {
        return void 0 !== Rn[e] && (void 0 === t ? Rn[e] : (Rn[e] = t, "s" === e && (Rn.ss = t - 1), !0))
      }, i.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
      }, i.prototype = hn, i.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
      }, i
    }, e.exports = t()
  }).call(t, n(5)(e))
}, function(e, t, n) {
  "use strict";
  var r = n(129),
    i = n(148),
    a = Object.prototype.toString;

  function s(e) {
    return "[object Array]" === a.call(e)
  }

  function o(e) {
    return null !== e && "object" == typeof e
  }

  function u(e) {
    return "[object Function]" === a.call(e)
  }

  function l(e, t) {
    if (null !== e && void 0 !== e)
      if ("object" != typeof e && (e = [e]), s(e))
        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
  }
  e.exports = {
    isArray: s,
    isArrayBuffer: function(e) {
      return "[object ArrayBuffer]" === a.call(e)
    },
    isBuffer: i,
    isFormData: function(e) {
      return "undefined" != typeof FormData && e instanceof FormData
    },
    isArrayBufferView: function(e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    },
    isString: function(e) {
      return "string" == typeof e
    },
    isNumber: function(e) {
      return "number" == typeof e
    },
    isObject: o,
    isUndefined: function(e) {
      return void 0 === e
    },
    isDate: function(e) {
      return "[object Date]" === a.call(e)
    },
    isFile: function(e) {
      return "[object File]" === a.call(e)
    },
    isBlob: function(e) {
      return "[object Blob]" === a.call(e)
    },
    isFunction: u,
    isStream: function(e) {
      return o(e) && u(e.pipe)
    },
    isURLSearchParams: function(e) {
      return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    },
    isStandardBrowserEnv: function() {
      return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
    },
    forEach: l,
    merge: function e() {
      var t = {};

      function n(n, r) {
        "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
      }
      for (var r = 0, i = arguments.length; r < i; r++) l(arguments[r], n);
      return t
    },
    extend: function(e, t, n) {
      return l(t, function(t, i) {
        e[i] = n && "function" == typeof t ? r(t, n) : t
      }), e
    },
    trim: function(e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }
  }
}, function(e, t, n) {
  var r;
  ! function(t, n) {
    "use strict";
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function(n, i) {
    "use strict";
    var a = [],
      s = n.document,
      o = Object.getPrototypeOf,
      u = a.slice,
      l = a.concat,
      d = a.push,
      c = a.indexOf,
      h = {},
      m = h.toString,
      f = h.hasOwnProperty,
      _ = f.toString,
      p = _.call(Object),
      y = {},
      g = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      v = function(e) {
        return null != e && e === e.window
      },
      M = {
        type: !0,
        src: !0,
        noModule: !0
      };

    function L(e, t, n) {
      var r, i = (t = t || s).createElement("script");
      if (i.text = e, n)
        for (r in M) n[r] && (i[r] = n[r]);
      t.head.appendChild(i).parentNode.removeChild(i)
    }

    function k(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[m.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
        return new b.fn.init(e, t)
      },
      Y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function w(e) {
      var t = !!e && "length" in e && e.length,
        n = k(e);
      return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
      jquery: "3.3.1",
      constructor: b,
      length: 0,
      toArray: function() {
        return u.call(this)
      },
      get: function(e) {
        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = b.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return b.each(this, e)
      },
      map: function(e) {
        return this.pushStack(b.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(u.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: d,
      sort: a.sort,
      splice: a.splice
    }, b.extend = b.fn.extend = function() {
      var e, t, n, r, i, a, s = arguments[0] || {},
        o = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[o] || {}, o++), "object" == typeof s || g(s) || (s = {}), o === u && (s = this, o--); o < u; o++)
        if (null != (e = arguments[o]))
          for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, a = n && Array.isArray(n) ? n : []) : a = n && b.isPlainObject(n) ? n : {}, s[t] = b.extend(l, a, r)) : void 0 !== r && (s[t] = r));
      return s
    }, b.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== m.call(e)) && (!(t = o(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && _.call(n) === p)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e) {
        L(e)
      },
      each: function(e, t) {
        var n, r = 0;
        if (w(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(Y, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (w(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : c.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return e.length = i, e
      },
      grep: function(e, t, n) {
        for (var r = [], i = 0, a = e.length, s = !n; i < a; i++) !t(e[i], i) !== s && r.push(e[i]);
        return r
      },
      map: function(e, t, n) {
        var r, i, a = 0,
          s = [];
        if (w(e))
          for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
        else
          for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
        return l.apply([], s)
      },
      guid: 1,
      support: y
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = a[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      h["[object " + t + "]"] = t.toLowerCase()
    });
    var D = function(e) {
      var t, n, r, i, a, s, o, u, l, d, c, h, m, f, _, p, y, g, v, M = "sizzle" + 1 * new Date,
        L = e.document,
        k = 0,
        b = 0,
        Y = se(),
        w = se(),
        D = se(),
        T = function(e, t) {
          return e === t && (c = !0), 0
        },
        x = {}.hasOwnProperty,
        S = [],
        j = S.pop,
        H = S.push,
        E = S.push,
        A = S.slice,
        C = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        N = "\\[" + P + "*(" + W + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + P + "*\\]",
        F = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        I = new RegExp(P + "+", "g"),
        R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        z = new RegExp("^" + P + "*," + P + "*"),
        $ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        q = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        B = new RegExp(F),
        U = new RegExp("^" + W + "$"),
        V = {
          ID: new RegExp("^#(" + W + ")"),
          CLASS: new RegExp("^\\.(" + W + ")"),
          TAG: new RegExp("^(" + W + "|[*])"),
          ATTR: new RegExp("^" + N),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + O + ")$", "i"),
          needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        J = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        Q = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        ee = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function(e, t) {
          return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        re = function() {
          h()
        },
        ie = ge(function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        E.apply(S = A.call(L.childNodes), L.childNodes), S[L.childNodes.length].nodeType
      } catch (e) {
        E = {
          apply: S.length ? function(e, t) {
            H.apply(e, A.call(t))
          } : function(e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1
          }
        }
      }

      function ae(e, t, r, i) {
        var a, o, l, d, c, f, y, g = t && t.ownerDocument,
          k = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
        if (!i && ((t ? t.ownerDocument || t : L) !== m && h(t), t = t || m, _)) {
          if (11 !== k && (c = X.exec(e)))
            if (a = c[1]) {
              if (9 === k) {
                if (!(l = t.getElementById(a))) return r;
                if (l.id === a) return r.push(l), r
              } else if (g && (l = g.getElementById(a)) && v(t, l) && l.id === a) return r.push(l), r
            } else {
              if (c[2]) return E.apply(r, t.getElementsByTagName(e)), r;
              if ((a = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return E.apply(r, t.getElementsByClassName(a)), r
            }
          if (n.qsa && !D[e + " "] && (!p || !p.test(e))) {
            if (1 !== k) g = t, y = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((d = t.getAttribute("id")) ? d = d.replace(te, ne) : t.setAttribute("id", d = M), o = (f = s(e)).length; o--;) f[o] = "#" + d + " " + ye(f[o]);
              y = f.join(","), g = Z.test(e) && _e(t.parentNode) || t
            }
            if (y) try {
              return E.apply(r, g.querySelectorAll(y)), r
            } catch (e) {} finally {
              d === M && t.removeAttribute("id")
            }
          }
        }
        return u(e.replace(R, "$1"), t, r, i)
      }

      function se() {
        var e = [];
        return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
        }
      }

      function oe(e) {
        return e[M] = !0, e
      }

      function ue(e) {
        var t = m.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function le(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
      }

      function de(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function ce(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function he(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function me(e) {
        return function(t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function fe(e) {
        return oe(function(t) {
          return t = +t, oe(function(n, r) {
            for (var i, a = e([], n.length, t), s = a.length; s--;) n[i = a[s]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function _e(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (t in n = ae.support = {}, a = ae.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, h = ae.setDocument = function(e) {
          var t, i, s = e ? e.ownerDocument || e : L;
          return s !== m && 9 === s.nodeType && s.documentElement ? (f = (m = s).documentElement, _ = !a(m), L !== m && (i = m.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), n.getElementsByTagName = ue(function(e) {
            return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
          }), n.getElementsByClassName = K.test(m.getElementsByClassName), n.getById = ue(function(e) {
            return f.appendChild(e).id = M, !m.getElementsByName || !m.getElementsByName(M).length
          }), n.getById ? (r.filter.ID = function(e) {
            var t = e.replace(Q, ee);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }, r.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && _) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (r.filter.ID = function(e) {
            var t = e.replace(Q, ee);
            return function(e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }, r.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && _) {
              var n, r, i, a = t.getElementById(e);
              if (a) {
                if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                for (i = t.getElementsByName(e), r = 0; a = i[r++];)
                  if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
              }
              return []
            }
          }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, r = [],
              i = 0,
              a = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = a[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return a
          }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
            if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e)
          }, y = [], p = [], (n.qsa = K.test(m.querySelectorAll)) && (ue(function(e) {
            f.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && p.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || p.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + M + "-]").length || p.push("~="), e.querySelectorAll(":checked").length || p.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || p.push(".#.+[+~]")
          }), ue(function(e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = m.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && p.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && p.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), p.push(",.*:")
          })), (n.matchesSelector = K.test(g = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue(function(e) {
            n.disconnectedMatch = g.call(e, "*"), g.call(e, "[s!='']:x"), y.push("!=", F)
          }), p = p.length && new RegExp(p.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(f.compareDocumentPosition), v = t || K.test(f.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, T = t ? function(e, t) {
            if (e === t) return c = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === m || e.ownerDocument === L && v(L, e) ? -1 : t === m || t.ownerDocument === L && v(L, t) ? 1 : d ? C(d, e) - C(d, t) : 0 : 4 & r ? -1 : 1)
          } : function(e, t) {
            if (e === t) return c = !0, 0;
            var n, r = 0,
              i = e.parentNode,
              a = t.parentNode,
              s = [e],
              o = [t];
            if (!i || !a) return e === m ? -1 : t === m ? 1 : i ? -1 : a ? 1 : d ? C(d, e) - C(d, t) : 0;
            if (i === a) return de(e, t);
            for (n = e; n = n.parentNode;) s.unshift(n);
            for (n = t; n = n.parentNode;) o.unshift(n);
            for (; s[r] === o[r];) r++;
            return r ? de(s[r], o[r]) : s[r] === L ? -1 : o[r] === L ? 1 : 0
          }, m) : m
        }, ae.matches = function(e, t) {
          return ae(e, null, null, t)
        }, ae.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== m && h(e), t = t.replace(q, "='$1']"), n.matchesSelector && _ && !D[t + " "] && (!y || !y.test(t)) && (!p || !p.test(t))) try {
            var r = g.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {}
          return ae(t, m, null, [e]).length > 0
        }, ae.contains = function(e, t) {
          return (e.ownerDocument || e) !== m && h(e), v(e, t)
        }, ae.attr = function(e, t) {
          (e.ownerDocument || e) !== m && h(e);
          var i = r.attrHandle[t.toLowerCase()],
            a = i && x.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !_) : void 0;
          return void 0 !== a ? a : n.attributes || !_ ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }, ae.escape = function(e) {
          return (e + "").replace(te, ne)
        }, ae.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, ae.uniqueSort = function(e) {
          var t, r = [],
            i = 0,
            a = 0;
          if (c = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(T), c) {
            for (; t = e[a++];) t === e[a] && (i = r.push(a));
            for (; i--;) e.splice(r[i], 1)
          }
          return d = null, e
        }, i = ae.getText = function(e) {
          var t, n = "",
            r = 0,
            a = e.nodeType;
          if (a) {
            if (1 === a || 9 === a || 11 === a) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (3 === a || 4 === a) return e.nodeValue
          } else
            for (; t = e[r++];) n += i(t);
          return n
        }, (r = ae.selectors = {
          cacheLength: 50,
          createPseudo: oe,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(Q, ee).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = Y[e + " "];
              return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && Y(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(e, t, n) {
              return function(r) {
                var i = ae.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function(e, t, n, r, i) {
              var a = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                o = "of-type" === t;
              return 1 === r && 0 === i ? function(e) {
                return !!e.parentNode
              } : function(t, n, u) {
                var l, d, c, h, m, f, _ = a !== s ? "nextSibling" : "previousSibling",
                  p = t.parentNode,
                  y = o && t.nodeName.toLowerCase(),
                  g = !u && !o,
                  v = !1;
                if (p) {
                  if (a) {
                    for (; _;) {
                      for (h = t; h = h[_];)
                        if (o ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                      f = _ = "only" === e && !f && "nextSibling"
                    }
                    return !0
                  }
                  if (f = [s ? p.firstChild : p.lastChild], s && g) {
                    for (v = (m = (l = (d = (c = (h = p)[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === k && l[1]) && l[2], h = m && p.childNodes[m]; h = ++m && h && h[_] || (v = m = 0) || f.pop();)
                      if (1 === h.nodeType && ++v && h === t) {
                        d[e] = [k, m, v];
                        break
                      }
                  } else if (g && (v = m = (l = (d = (c = (h = t)[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === k && l[1]), !1 === v)
                    for (;
                      (h = ++m && h && h[_] || (v = m = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++v || (g && ((d = (c = h[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] = [k, v]), h !== t)););
                  return (v -= i) === r || v % r == 0 && v / r >= 0
                }
              }
            },
            PSEUDO: function(e, t) {
              var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
              return i[M] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, n) {
                for (var r, a = i(e, t), s = a.length; s--;) e[r = C(e, a[s])] = !(n[r] = a[s])
              }) : function(e) {
                return i(e, 0, n)
              }) : i
            }
          },
          pseudos: {
            not: oe(function(e) {
              var t = [],
                n = [],
                r = o(e.replace(R, "$1"));
              return r[M] ? oe(function(e, t, n, i) {
                for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
              }) : function(e, i, a) {
                return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
              }
            }),
            has: oe(function(e) {
              return function(t) {
                return ae(e, t).length > 0
              }
            }),
            contains: oe(function(e) {
              return e = e.replace(Q, ee),
                function(t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                }
            }),
            lang: oe(function(e) {
              return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(),
                function(t) {
                  var n;
                  do {
                    if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function(e) {
              return e === f
            },
            focus: function(e) {
              return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !r.pseudos.empty(e)
            },
            header: function(e) {
              return G.test(e.nodeName)
            },
            input: function(e) {
              return J.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: fe(function() {
              return [0]
            }),
            last: fe(function(e, t) {
              return [t - 1]
            }),
            eq: fe(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: fe(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: fe(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: fe(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
              return e
            }),
            gt: fe(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[t] = ce(t);
      for (t in {
          submit: !0,
          reset: !0
        }) r.pseudos[t] = he(t);

      function pe() {}

      function ye(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
      }

      function ge(e, t, n) {
        var r = t.dir,
          i = t.next,
          a = i || r,
          s = n && "parentNode" === a,
          o = b++;
        return t.first ? function(t, n, i) {
          for (; t = t[r];)
            if (1 === t.nodeType || s) return e(t, n, i);
          return !1
        } : function(t, n, u) {
          var l, d, c, h = [k, o];
          if (u) {
            for (; t = t[r];)
              if ((1 === t.nodeType || s) && e(t, n, u)) return !0
          } else
            for (; t = t[r];)
              if (1 === t.nodeType || s)
                if (d = (c = t[M] || (t[M] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                else {
                  if ((l = d[a]) && l[0] === k && l[1] === o) return h[2] = l[2];
                  if (d[a] = h, h[2] = e(t, n, u)) return !0
                } return !1
        }
      }

      function ve(e) {
        return e.length > 1 ? function(t, n, r) {
          for (var i = e.length; i--;)
            if (!e[i](t, n, r)) return !1;
          return !0
        } : e[0]
      }

      function Me(e, t, n, r, i) {
        for (var a, s = [], o = 0, u = e.length, l = null != t; o < u; o++)(a = e[o]) && (n && !n(a, r, i) || (s.push(a), l && t.push(o)));
        return s
      }

      function Le(e, t, n, r, i, a) {
        return r && !r[M] && (r = Le(r)), i && !i[M] && (i = Le(i, a)), oe(function(a, s, o, u) {
          var l, d, c, h = [],
            m = [],
            f = s.length,
            _ = a || function(e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
              return n
            }(t || "*", o.nodeType ? [o] : o, []),
            p = !e || !a && t ? _ : Me(_, h, e, o, u),
            y = n ? i || (a ? e : f || r) ? [] : s : p;
          if (n && n(p, y, o, u), r)
            for (l = Me(y, m), r(l, [], o, u), d = l.length; d--;)(c = l[d]) && (y[m[d]] = !(p[m[d]] = c));
          if (a) {
            if (i || e) {
              if (i) {
                for (l = [], d = y.length; d--;)(c = y[d]) && l.push(p[d] = c);
                i(null, y = [], l, u)
              }
              for (d = y.length; d--;)(c = y[d]) && (l = i ? C(a, c) : h[d]) > -1 && (a[l] = !(s[l] = c))
            }
          } else y = Me(y === s ? y.splice(f, y.length) : y), i ? i(null, s, y, u) : E.apply(s, y)
        })
      }

      function ke(e) {
        for (var t, n, i, a = e.length, s = r.relative[e[0].type], o = s || r.relative[" "], u = s ? 1 : 0, d = ge(function(e) {
            return e === t
          }, o, !0), c = ge(function(e) {
            return C(t, e) > -1
          }, o, !0), h = [function(e, n, r) {
            var i = !s && (r || n !== l) || ((t = n).nodeType ? d(e, n, r) : c(e, n, r));
            return t = null, i
          }]; u < a; u++)
          if (n = r.relative[e[u].type]) h = [ge(ve(h), n)];
          else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[M]) {
              for (i = ++u; i < a && !r.relative[e[i].type]; i++);
              return Le(u > 1 && ve(h), u > 1 && ye(e.slice(0, u - 1).concat({
                value: " " === e[u - 2].type ? "*" : ""
              })).replace(R, "$1"), n, u < i && ke(e.slice(u, i)), i < a && ke(e = e.slice(i)), i < a && ye(e))
            }
            h.push(n)
          }
        return ve(h)
      }
      return pe.prototype = r.filters = r.pseudos, r.setFilters = new pe, s = ae.tokenize = function(e, t) {
        var n, i, a, s, o, u, l, d = w[e + " "];
        if (d) return t ? 0 : d.slice(0);
        for (o = e, u = [], l = r.preFilter; o;) {
          for (s in n && !(i = z.exec(o)) || (i && (o = o.slice(i[0].length) || o), u.push(a = [])), n = !1, (i = $.exec(o)) && (n = i.shift(), a.push({
              value: n,
              type: i[0].replace(R, " ")
            }), o = o.slice(n.length)), r.filter) !(i = V[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(), a.push({
            value: n,
            type: s,
            matches: i
          }), o = o.slice(n.length));
          if (!n) break
        }
        return t ? o.length : o ? ae.error(e) : w(e, u).slice(0)
      }, o = ae.compile = function(e, t) {
        var n, i = [],
          a = [],
          o = D[e + " "];
        if (!o) {
          for (t || (t = s(e)), n = t.length; n--;)(o = ke(t[n]))[M] ? i.push(o) : a.push(o);
          (o = D(e, function(e, t) {
            var n = t.length > 0,
              i = e.length > 0,
              a = function(a, s, o, u, d) {
                var c, f, p, y = 0,
                  g = "0",
                  v = a && [],
                  M = [],
                  L = l,
                  b = a || i && r.find.TAG("*", d),
                  Y = k += null == L ? 1 : Math.random() || .1,
                  w = b.length;
                for (d && (l = s === m || s || d); g !== w && null != (c = b[g]); g++) {
                  if (i && c) {
                    for (f = 0, s || c.ownerDocument === m || (h(c), o = !_); p = e[f++];)
                      if (p(c, s || m, o)) {
                        u.push(c);
                        break
                      }
                    d && (k = Y)
                  }
                  n && ((c = !p && c) && y--, a && v.push(c))
                }
                if (y += g, n && g !== y) {
                  for (f = 0; p = t[f++];) p(v, M, s, o);
                  if (a) {
                    if (y > 0)
                      for (; g--;) v[g] || M[g] || (M[g] = j.call(u));
                    M = Me(M)
                  }
                  E.apply(u, M), d && !a && M.length > 0 && y + t.length > 1 && ae.uniqueSort(u)
                }
                return d && (k = Y, l = L), v
              };
            return n ? oe(a) : a
          }(a, i))).selector = e
        }
        return o
      }, u = ae.select = function(e, t, n, i) {
        var a, u, l, d, c, h = "function" == typeof e && e,
          m = !i && s(e = h.selector || e);
        if (n = n || [], 1 === m.length) {
          if ((u = m[0] = m[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && _ && r.relative[u[1].type]) {
            if (!(t = (r.find.ID(l.matches[0].replace(Q, ee), t) || [])[0])) return n;
            h && (t = t.parentNode), e = e.slice(u.shift().value.length)
          }
          for (a = V.needsContext.test(e) ? 0 : u.length; a-- && (l = u[a], !r.relative[d = l.type]);)
            if ((c = r.find[d]) && (i = c(l.matches[0].replace(Q, ee), Z.test(u[0].type) && _e(t.parentNode) || t))) {
              if (u.splice(a, 1), !(e = i.length && ye(u))) return E.apply(n, i), n;
              break
            }
        }
        return (h || o(e, m))(i, t, !_, n, !t || Z.test(e) && _e(t.parentNode) || t), n
      }, n.sortStable = M.split("").sort(T).join("") === M, n.detectDuplicates = !!c, h(), n.sortDetached = ue(function(e) {
        return 1 & e.compareDocumentPosition(m.createElement("fieldset"))
      }), ue(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || le("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), n.attributes && ue(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || le("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), ue(function(e) {
        return null == e.getAttribute("disabled")
      }) || le(O, function(e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), ae
    }(n);
    b.find = D, b.expr = D.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = D.uniqueSort, b.text = D.getText, b.isXMLDoc = D.isXML, b.contains = D.contains, b.escapeSelector = D.escape;
    var T = function(e, t, n) {
        for (var r = [], i = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && b(e).is(n)) break;
            r.push(e)
          }
        return r
      },
      x = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      S = b.expr.match.needsContext;

    function j(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function E(e, t, n) {
      return g(t) ? b.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n
      }) : t.nodeType ? b.grep(e, function(e) {
        return e === t !== n
      }) : "string" != typeof t ? b.grep(e, function(e) {
        return c.call(t, e) > -1 !== n
      }) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, b.fn.extend({
      find: function(e) {
        var t, n, r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(b(e).filter(function() {
          for (t = 0; t < r; t++)
            if (b.contains(i[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
        return r > 1 ? b.uniqueSort(n) : n
      },
      filter: function(e) {
        return this.pushStack(E(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(E(this, e || [], !0))
      },
      is: function(e) {
        return !!E(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length
      }
    });
    var A, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || A, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : C.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), H.test(r[1]) && b.isPlainObject(t))
            for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (i = s.getElementById(r[2])) && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, A = b(s);
    var O = /^(?:parents|prev(?:Until|All))/,
      P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function W(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    b.fn.extend({
      has: function(e) {
        var t = b(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (b.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var n, r = 0,
          i = this.length,
          a = [],
          s = "string" != typeof e && b(e);
        if (!S.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                a.push(n);
                break
              }
        return this.pushStack(a.length > 1 ? b.uniqueSort(a) : a)
      },
      index: function(e) {
        return e ? "string" == typeof e ? c.call(b(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), b.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return T(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return T(e, "parentNode", n)
      },
      next: function(e) {
        return W(e, "nextSibling")
      },
      prev: function(e) {
        return W(e, "previousSibling")
      },
      nextAll: function(e) {
        return T(e, "nextSibling")
      },
      prevAll: function(e) {
        return T(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return T(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return T(e, "previousSibling", n)
      },
      siblings: function(e) {
        return x((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return x(e.firstChild)
      },
      contents: function(e) {
        return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
      }
    }, function(e, t) {
      b.fn[e] = function(n, r) {
        var i = b.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (P[e] || b.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i)
      }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function F(e) {
      return e
    }

    function I(e) {
      throw e
    }

    function R(e, t, n, r) {
      var i;
      try {
        e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }
    b.Callbacks = function(e) {
      e = "string" == typeof e ? function(e) {
        var t = {};
        return b.each(e.match(N) || [], function(e, n) {
          t[n] = !0
        }), t
      }(e) : b.extend({}, e);
      var t, n, r, i, a = [],
        s = [],
        o = -1,
        u = function() {
          for (i = i || e.once, r = t = !0; s.length; o = -1)
            for (n = s.shift(); ++o < a.length;) !1 === a[o].apply(n[0], n[1]) && e.stopOnFalse && (o = a.length, n = !1);
          e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
        },
        l = {
          add: function() {
            return a && (n && !t && (o = a.length - 1, s.push(n)), function t(n) {
              b.each(n, function(n, r) {
                g(r) ? e.unique && l.has(r) || a.push(r) : r && r.length && "string" !== k(r) && t(r)
              })
            }(arguments), n && !t && u()), this
          },
          remove: function() {
            return b.each(arguments, function(e, t) {
              for (var n;
                (n = b.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= o && o--
            }), this
          },
          has: function(e) {
            return e ? b.inArray(e, a) > -1 : a.length > 0
          },
          empty: function() {
            return a && (a = []), this
          },
          disable: function() {
            return i = s = [], a = n = "", this
          },
          disabled: function() {
            return !a
          },
          lock: function() {
            return i = s = [], n || t || (a = n = ""), this
          },
          locked: function() {
            return !!i
          },
          fireWith: function(e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
          },
          fire: function() {
            return l.fireWith(this, arguments), this
          },
          fired: function() {
            return !!r
          }
        };
      return l
    }, b.extend({
      Deferred: function(e) {
        var t = [
            ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
            ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          i = {
            state: function() {
              return r
            },
            always: function() {
              return a.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return i.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return b.Deferred(function(n) {
                b.each(t, function(t, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  a[r[1]](function() {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            then: function(e, r, i) {
              var a = 0;

              function s(e, t, r, i) {
                return function() {
                  var o = this,
                    u = arguments,
                    l = function() {
                      var n, l;
                      if (!(e < a)) {
                        if ((n = r.apply(o, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, g(l) ? i ? l.call(n, s(a, t, F, i), s(a, t, I, i)) : (a++, l.call(n, s(a, t, F, i), s(a, t, I, i), s(a, t, F, t.notifyWith))) : (r !== F && (o = void 0, u = [n]), (i || t.resolveWith)(o, u))
                      }
                    },
                    d = i ? l : function() {
                      try {
                        l()
                      } catch (n) {
                        b.Deferred.exceptionHook && b.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= a && (r !== I && (o = void 0, u = [n]), t.rejectWith(o, u))
                      }
                    };
                  e ? d() : (b.Deferred.getStackHook && (d.stackTrace = b.Deferred.getStackHook()), n.setTimeout(d))
                }
              }
              return b.Deferred(function(n) {
                t[0][3].add(s(0, n, g(i) ? i : F, n.notifyWith)), t[1][3].add(s(0, n, g(e) ? e : F)), t[2][3].add(s(0, n, g(r) ? r : I))
              }).promise()
            },
            promise: function(e) {
              return null != e ? b.extend(e, i) : i
            }
          },
          a = {};
        return b.each(t, function(e, n) {
          var s = n[2],
            o = n[5];
          i[n[1]] = s.add, o && s.add(function() {
            r = o
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), a[n[0]] = function() {
            return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
          }, a[n[0] + "With"] = s.fireWith
        }), i.promise(a), e && e.call(a, a), a
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = u.call(arguments),
          a = b.Deferred(),
          s = function(e) {
            return function(n) {
              r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || a.resolveWith(r, i)
            }
          };
        if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
        for (; n--;) R(i[n], s(n), a.reject);
        return a.promise()
      }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(e, t) {
      n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, b.readyException = function(e) {
      n.setTimeout(function() {
        throw e
      })
    };
    var $ = b.Deferred();

    function q() {
      s.removeEventListener("DOMContentLoaded", q), n.removeEventListener("load", q), b.ready()
    }
    b.fn.ready = function(e) {
      return $.then(e).catch(function(e) {
        b.readyException(e)
      }), this
    }, b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || $.resolveWith(s, [b]))
      }
    }), b.ready.then = $.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(b.ready) : (s.addEventListener("DOMContentLoaded", q), n.addEventListener("load", q));
    var B = function(e, t, n, r, i, a, s) {
        var o = 0,
          u = e.length,
          l = null == n;
        if ("object" === k(n))
          for (o in i = !0, n) B(e, t, o, n[o], !0, a, s);
        else if (void 0 !== r && (i = !0, g(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(b(e), n)
          })), t))
          for (; o < u; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : a
      },
      U = /^-ms-/,
      V = /-([a-z])/g;

    function J(e, t) {
      return t.toUpperCase()
    }

    function G(e) {
      return e.replace(U, "ms-").replace(V, J)
    }
    var K = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
      this.expando = b.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var r, i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else
          for (r in t) i[G(r)] = t[r];
        return i
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
      },
      access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(N) || []).length;
            for (; n--;) delete r[t[n]]
          }(void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t)
      }
    };
    var Z = new X,
      Q = new X,
      ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      te = /[A-Z]/g;

    function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try {
            n = function(e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
            }(n)
          } catch (e) {}
          Q.set(e, t, n)
        } else n = void 0;
      return n
    }
    b.extend({
      hasData: function(e) {
        return Q.hasData(e) || Z.hasData(e)
      },
      data: function(e, t, n) {
        return Q.access(e, t, n)
      },
      removeData: function(e, t) {
        Q.remove(e, t)
      },
      _data: function(e, t, n) {
        return Z.access(e, t, n)
      },
      _removeData: function(e, t) {
        Z.remove(e, t)
      }
    }), b.fn.extend({
      data: function(e, t) {
        var n, r, i, a = this[0],
          s = a && a.attributes;
        if (void 0 === e) {
          if (this.length && (i = Q.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(a, r, i[r]));
            Z.set(a, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof e ? this.each(function() {
          Q.set(this, e)
        }) : B(this, function(t) {
          var n;
          if (a && void 0 === t) return void 0 !== (n = Q.get(a, e)) ? n : void 0 !== (n = ne(a, e)) ? n : void 0;
          this.each(function() {
            Q.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          Q.remove(this, e)
        })
      }
    }), b.extend({
      queue: function(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, b.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = b.queue(e, t),
          r = n.length,
          i = n.shift(),
          a = b._queueHooks(e, t);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, function() {
          b.dequeue(e, t)
        }, a)), !r && a && a.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Z.get(e, n) || Z.access(e, n, {
          empty: b.Callbacks("once memory").add(function() {
            Z.remove(e, [t + "queue", n])
          })
        })
      }
    }), b.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = b.queue(this, e, t);
          b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          b.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, r = 1,
          i = b.Deferred(),
          a = this,
          s = this.length,
          o = function() {
            --r || i.resolveWith(a, [a])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Z.get(a[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
        return o(), i.promise(t)
      }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      ae = ["Top", "Right", "Bottom", "Left"],
      se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display")
      },
      oe = function(e, t, n, r) {
        var i, a, s = {};
        for (a in t) s[a] = e.style[a], e.style[a] = t[a];
        for (a in i = n.apply(e, r || []), t) e.style[a] = s[a];
        return i
      };

    function ue(e, t, n, r) {
      var i, a, s = 20,
        o = r ? function() {
          return r.cur()
        } : function() {
          return b.css(e, t, "")
        },
        u = o(),
        l = n && n[3] || (b.cssNumber[t] ? "" : "px"),
        d = (b.cssNumber[t] || "px" !== l && +u) && ie.exec(b.css(e, t));
      if (d && d[3] !== l) {
        for (u /= 2, l = l || d[3], d = +u || 1; s--;) b.style(e, t, d + l), (1 - a) * (1 - (a = o() / u || .5)) <= 0 && (s = 0), d /= a;
        d *= 2, b.style(e, t, d + l), n = n || []
      }
      return n && (d = +d || +u || 0, i = n[1] ? d + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = d, r.end = i)), i
    }
    var le = {};

    function de(e) {
      var t, n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = b.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function ce(e, t) {
      for (var n, r, i = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (n = r.style.display, t ? ("none" === n && (i[a] = Z.get(r, "display") || null, i[a] || (r.style.display = "")), "" === r.style.display && se(r) && (i[a] = de(r))) : "none" !== n && (i[a] = "none", Z.set(r, "display", n)));
      for (a = 0; a < s; a++) null != i[a] && (e[a].style.display = i[a]);
      return e
    }
    b.fn.extend({
      show: function() {
        return ce(this, !0)
      },
      hide: function() {
        return ce(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          se(this) ? b(this).show() : b(this).hide()
        })
      }
    });
    var he = /^(?:checkbox|radio)$/i,
      me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      fe = /^$|^module$|\/(?:java|ecma)script/i,
      _e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function pe(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? b.merge([e], n) : n
    }

    function ye(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
    }
    _e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td;
    var ge, ve, Me = /<|&#?\w+;/;

    function Le(e, t, n, r, i) {
      for (var a, s, o, u, l, d, c = t.createDocumentFragment(), h = [], m = 0, f = e.length; m < f; m++)
        if ((a = e[m]) || 0 === a)
          if ("object" === k(a)) b.merge(h, a.nodeType ? [a] : a);
          else if (Me.test(a)) {
        for (s = s || c.appendChild(t.createElement("div")), o = (me.exec(a) || ["", ""])[1].toLowerCase(), u = _e[o] || _e._default, s.innerHTML = u[1] + b.htmlPrefilter(a) + u[2], d = u[0]; d--;) s = s.lastChild;
        b.merge(h, s.childNodes), (s = c.firstChild).textContent = ""
      } else h.push(t.createTextNode(a));
      for (c.textContent = "", m = 0; a = h[m++];)
        if (r && b.inArray(a, r) > -1) i && i.push(a);
        else if (l = b.contains(a.ownerDocument, a), s = pe(c.appendChild(a), "script"), l && ye(s), n)
        for (d = 0; a = s[d++];) fe.test(a.type || "") && n.push(a);
      return c
    }
    ge = s.createDocumentFragment().appendChild(s.createElement("div")), (ve = s.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), ge.appendChild(ve), y.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
    var ke = s.documentElement,
      be = /^key/,
      Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      we = /^([^.]*)(?:\.(.+)|)/;

    function De() {
      return !0
    }

    function Te() {
      return !1
    }

    function xe() {
      try {
        return s.activeElement
      } catch (e) {}
    }

    function Se(e, t, n, r, i, a) {
      var s, o;
      if ("object" == typeof t) {
        for (o in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, o, n, r, t[o], a);
        return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
      else if (!i) return e;
      return 1 === a && (s = i, (i = function(e) {
        return b().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = b.guid++)), e.each(function() {
        b.event.add(this, t, i, r, n)
      })
    }
    b.event = {
      global: {},
      add: function(e, t, n, r, i) {
        var a, s, o, u, l, d, c, h, m, f, _, p = Z.get(e);
        if (p)
          for (n.handler && (n = (a = n).handler, i = a.selector), i && b.find.matchesSelector(ke, i), n.guid || (n.guid = b.guid++), (u = p.events) || (u = p.events = {}), (s = p.handle) || (s = p.handle = function(t) {
              return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
            }), l = (t = (t || "").match(N) || [""]).length; l--;) m = _ = (o = we.exec(t[l]) || [])[1], f = (o[2] || "").split(".").sort(), m && (c = b.event.special[m] || {}, m = (i ? c.delegateType : c.bindType) || m, c = b.event.special[m] || {}, d = b.extend({
            type: m,
            origType: _,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && b.expr.match.needsContext.test(i),
            namespace: f.join(".")
          }, a), (h = u[m]) || ((h = u[m] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, f, s) || e.addEventListener && e.addEventListener(m, s)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[m] = !0)
      },
      remove: function(e, t, n, r, i) {
        var a, s, o, u, l, d, c, h, m, f, _, p = Z.hasData(e) && Z.get(e);
        if (p && (u = p.events)) {
          for (l = (t = (t || "").match(N) || [""]).length; l--;)
            if (m = _ = (o = we.exec(t[l]) || [])[1], f = (o[2] || "").split(".").sort(), m) {
              for (c = b.event.special[m] || {}, h = u[m = (r ? c.delegateType : c.bindType) || m] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--;) d = h[a], !i && _ !== d.origType || n && n.guid !== d.guid || o && !o.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, c.remove && c.remove.call(e, d));
              s && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, p.handle) || b.removeEvent(e, m, p.handle), delete u[m])
            } else
              for (m in u) b.event.remove(e, m + t[l], n, r, !0);
          b.isEmptyObject(u) && Z.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, n, r, i, a, s, o = b.event.fix(e),
          u = new Array(arguments.length),
          l = (Z.get(this, "events") || {})[o.type] || [],
          d = b.event.special[o.type] || {};
        for (u[0] = o, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
          for (s = b.event.handlers.call(this, o, l), t = 0;
            (i = s[t++]) && !o.isPropagationStopped();)
            for (o.currentTarget = i.elem, n = 0;
              (a = i.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (r = ((b.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, u)) && !1 === (o.result = r) && (o.preventDefault(), o.stopPropagation()));
          return d.postDispatch && d.postDispatch.call(this, o), o.result
        }
      },
      handlers: function(e, t) {
        var n, r, i, a, s, o = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (a = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), s[i] && a.push(r);
              a.length && o.push({
                elem: l,
                handlers: a
              })
            }
        return l = this, u < t.length && o.push({
          elem: l,
          handlers: t.slice(u)
        }), o
      },
      addProp: function(e, t) {
        Object.defineProperty(b.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: g(t) ? function() {
            if (this.originalEvent) return t(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function(e) {
        return e[b.expando] ? e : new b.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== xe() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === xe() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && j(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return j(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, b.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function(e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? De : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = De, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = De, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = De, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, b.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, b.event.addProp), b.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      b.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, r = e.relatedTarget,
            i = e.handleObj;
          return r && (r === this || b.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), b.fn.extend({
      on: function(e, t, n, r) {
        return Se(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
        return Se(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
          b.event.remove(this, e, n, t)
        })
      }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      He = /<script|<style|<link/i,
      Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ce(e, t) {
      return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function Oe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function We(e, t) {
      var n, r, i, a, s, o, u, l;
      if (1 === t.nodeType) {
        if (Z.hasData(e) && (a = Z.access(e), s = Z.set(t, a), l = a.events))
          for (i in delete s.handle, s.events = {}, l)
            for (n = 0, r = l[i].length; n < r; n++) b.event.add(t, i, l[i][n]);
        Q.hasData(e) && (o = Q.access(e), u = b.extend({}, o), Q.set(t, u))
      }
    }

    function Ne(e, t, n, r) {
      t = l.apply([], t);
      var i, a, s, o, u, d, c = 0,
        h = e.length,
        m = h - 1,
        f = t[0],
        _ = g(f);
      if (_ || h > 1 && "string" == typeof f && !y.checkClone && Ee.test(f)) return e.each(function(i) {
        var a = e.eq(i);
        _ && (t[0] = f.call(this, i, a.html())), Ne(a, t, n, r)
      });
      if (h && (a = (i = Le(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
        for (o = (s = b.map(pe(i, "script"), Oe)).length; c < h; c++) u = i, c !== m && (u = b.clone(u, !0, !0), o && b.merge(s, pe(u, "script"))), n.call(e[c], u, c);
        if (o)
          for (d = s[s.length - 1].ownerDocument, b.map(s, Pe), c = 0; c < o; c++) u = s[c], fe.test(u.type || "") && !Z.access(u, "globalEval") && b.contains(d, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(u.src) : L(u.textContent.replace(Ae, ""), d, u))
      }
      return e
    }

    function Fe(e, t, n) {
      for (var r, i = t ? b.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || b.cleanData(pe(r)), r.parentNode && (n && b.contains(r.ownerDocument, r) && ye(pe(r, "script")), r.parentNode.removeChild(r));
      return e
    }
    b.extend({
      htmlPrefilter: function(e) {
        return e.replace(je, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var r, i, a, s, o, u, l, d = e.cloneNode(!0),
          c = b.contains(e.ownerDocument, e);
        if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
          for (s = pe(d), r = 0, i = (a = pe(e)).length; r < i; r++) o = a[r], u = s[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && he.test(o.type) ? u.checked = o.checked : "input" !== l && "textarea" !== l || (u.defaultValue = o.defaultValue);
        if (t)
          if (n)
            for (a = a || pe(e), s = s || pe(d), r = 0, i = a.length; r < i; r++) We(a[r], s[r]);
          else We(e, d);
        return (s = pe(d, "script")).length > 0 && ye(s, !c && pe(e, "script")), d
      },
      cleanData: function(e) {
        for (var t, n, r, i = b.event.special, a = 0; void 0 !== (n = e[a]); a++)
          if (K(n)) {
            if (t = n[Z.expando]) {
              if (t.events)
                for (r in t.events) i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
              n[Z.expando] = void 0
            }
            n[Q.expando] && (n[Q.expando] = void 0)
          }
      }
    }), b.fn.extend({
      detach: function(e) {
        return Fe(this, e, !0)
      },
      remove: function(e) {
        return Fe(this, e)
      },
      text: function(e) {
        return B(this, function(e) {
          return void 0 === e ? b.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return Ne(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ce(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return Ne(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Ce(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return Ne(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return Ne(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(pe(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return b.clone(this, e, t)
        })
      },
      html: function(e) {
        return B(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !He.test(e) && !_e[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = b.htmlPrefilter(e);
            try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(pe(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return Ne(this, arguments, function(t) {
          var n = this.parentNode;
          b.inArray(this, e) < 0 && (b.cleanData(pe(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), b.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      b.fn[e] = function(e) {
        for (var n, r = [], i = b(e), a = i.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), b(i[s])[t](n), d.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var Ie = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      Re = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      ze = new RegExp(ae.join("|"), "i");

    function $e(e, t, n) {
      var r, i, a, s, o = e.style;
      return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (s = b.style(e, t)), !y.pixelBoxStyles() && Ie.test(s) && ze.test(t) && (r = o.width, i = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = i, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }! function() {
      function e() {
        if (d) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ke.appendChild(l).appendChild(d);
          var e = n.getComputedStyle(d);
          r = "1%" !== e.top, u = 12 === t(e.marginLeft), d.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), d.style.position = "absolute", a = 36 === d.offsetWidth || "absolute", ke.removeChild(l), d = null
        }
      }

      function t(e) {
        return Math.round(parseFloat(e))
      }
      var r, i, a, o, u, l = s.createElement("div"),
        d = s.createElement("div");
      d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === d.style.backgroundClip, b.extend(y, {
        boxSizingReliable: function() {
          return e(), i
        },
        pixelBoxStyles: function() {
          return e(), o
        },
        pixelPosition: function() {
          return e(), r
        },
        reliableMarginLeft: function() {
          return e(), u
        },
        scrollboxSize: function() {
          return e(), a
        }
      }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
      Ue = /^--/,
      Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Je = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Ge = ["Webkit", "Moz", "ms"],
      Ke = s.createElement("div").style;

    function Xe(e) {
      var t = b.cssProps[e];
      return t || (t = b.cssProps[e] = function(e) {
        if (e in Ke) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
          if ((e = Ge[n] + t) in Ke) return e
      }(e) || e), t
    }

    function Ze(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, a) {
      var s = "width" === t ? 1 : 0,
        o = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (u += b.css(e, n + ae[s], !0, i)), r ? ("content" === n && (u -= b.css(e, "padding" + ae[s], !0, i)), "margin" !== n && (u -= b.css(e, "border" + ae[s] + "Width", !0, i))) : (u += b.css(e, "padding" + ae[s], !0, i), "padding" !== n ? u += b.css(e, "border" + ae[s] + "Width", !0, i) : o += b.css(e, "border" + ae[s] + "Width", !0, i));
      return !r && a >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - u - o - .5))), u
    }

    function et(e, t, n) {
      var r = Re(e),
        i = $e(e, t, r),
        a = "border-box" === b.css(e, "boxSizing", !1, r),
        s = a;
      if (Ie.test(i)) {
        if (!n) return i;
        i = "auto"
      }
      return s = s && (y.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === b.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Qe(e, t, n || (a ? "border" : "content"), s, r, i) + "px"
    }

    function tt(e, t, n, r, i) {
      return new tt.prototype.init(e, t, n, r, i)
    }
    b.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = $e(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, a, s, o = G(t),
            u = Ue.test(t),
            l = e.style;
          if (u || (t = Xe(o)), s = b.cssHooks[t] || b.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
          "string" === (a = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), a = "number"), null != n && n == n && ("number" === a && (n += i && i[3] || (b.cssNumber[o] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
        }
      },
      css: function(e, t, n, r) {
        var i, a, s, o = G(t);
        return Ue.test(t) || (t = Xe(o)), (s = b.cssHooks[t] || b.cssHooks[o]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = $e(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
      }
    }), b.each(["height", "width"], function(e, t) {
      b.cssHooks[t] = {
        get: function(e, n, r) {
          if (n) return !Be.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : oe(e, Ve, function() {
            return et(e, t, r)
          })
        },
        set: function(e, n, r) {
          var i, a = Re(e),
            s = "border-box" === b.css(e, "boxSizing", !1, a),
            o = r && Qe(e, t, r, s, a);
          return s && y.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Qe(e, t, "border", !1, a) - .5)), o && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ze(0, n, o)
        }
      }
    }), b.cssHooks.marginLeft = qe(y.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), b.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      b.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ae[r] + t] = a[r] || a[r - 2] || a[0];
          return i
        }
      }, "margin" !== e && (b.cssHooks[e + t].set = Ze)
    }), b.fn.extend({
      css: function(e, t) {
        return B(this, function(e, t, n) {
          var r, i, a = {},
            s = 0;
          if (Array.isArray(t)) {
            for (r = Re(e), i = t.length; s < i; s++) a[t[s]] = b.css(e, t[s], !1, r);
            return a
          }
          return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }), b.Tween = tt, tt.prototype = {
      constructor: tt,
      init: function(e, t, n, r, i, a) {
        this.elem = e, this.prop = n, this.easing = i || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (b.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = tt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
      }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, b.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, b.fx = tt.prototype.init, b.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

    function st() {
      rt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, b.fx.interval), b.fx.tick())
    }

    function ot() {
      return n.setTimeout(function() {
        nt = void 0
      }), nt = Date.now()
    }

    function ut(e, t) {
      var n, r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ae[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
      for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), a = 0, s = i.length; a < s; a++)
        if (r = i[a].call(n, t, e)) return r
    }

    function dt(e, t, n) {
      var r, i, a = 0,
        s = dt.prefilters.length,
        o = b.Deferred().always(function() {
          delete u.elem
        }),
        u = function() {
          if (i) return !1;
          for (var t = nt || ot(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), a = 0, s = l.tweens.length; a < s; a++) l.tweens[a].run(r);
          return o.notifyWith(e, [l, r, n]), r < 1 && s ? n : (s || o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l]), !1)
        },
        l = o.promise({
          elem: e,
          props: b.extend({}, t),
          opts: b.extend(!0, {
            specialEasing: {},
            easing: b.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: nt || ot(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r
          },
          stop: function(t) {
            var n = 0,
              r = t ? l.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) l.tweens[n].run(1);
            return t ? (o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l, t])) : o.rejectWith(e, [l, t]), this
          }
        }),
        d = l.props;
      for (! function(e, t) {
          var n, r, i, a, s;
          for (n in e)
            if (i = t[r = G(n)], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (s = b.cssHooks[r]) && "expand" in s)
              for (n in a = s.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
            else t[r] = i
        }(d, l.opts.specialEasing); a < s; a++)
        if (r = dt.prefilters[a].call(l, e, d, l.opts)) return g(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return b.map(d, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), b.fx.timer(b.extend(u, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l
    }
    b.Animation = b.extend(dt, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return ue(n.elem, e, ie.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          g(e) ? (t = e, e = ["*"]) : e = e.match(N);
          for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
          var r, i, a, s, o, u, l, d, c = "width" in t || "height" in t,
            h = this,
            m = {},
            f = e.style,
            _ = e.nodeType && se(e),
            p = Z.get(e, "fxshow");
          for (r in n.queue || (null == (s = b._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
              s.unqueued || o()
            }), s.unqueued++, h.always(function() {
              h.always(function() {
                s.unqueued--, b.queue(e, "fx").length || s.empty.fire()
              })
            })), t)
            if (i = t[r], it.test(i)) {
              if (delete t[r], a = a || "toggle" === i, i === (_ ? "hide" : "show")) {
                if ("show" !== i || !p || void 0 === p[r]) continue;
                _ = !0
              }
              m[r] = p && p[r] || b.style(e, r)
            }
          if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(m))
            for (r in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (l = p && p.display) && (l = Z.get(e, "display")), "none" === (d = b.css(e, "display")) && (l ? d = l : (ce([e], !0), l = e.style.display || l, d = b.css(e, "display"), ce([e]))), ("inline" === d || "inline-block" === d && null != l) && "none" === b.css(e, "float") && (u || (h.done(function() {
                f.display = l
              }), null == l && (d = f.display, l = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
              })), u = !1, m) u || (p ? "hidden" in p && (_ = p.hidden) : p = Z.access(e, "fxshow", {
              display: l
            }), a && (p.hidden = !_), _ && ce([e], !0), h.done(function() {
              for (r in _ || ce([e]), Z.remove(e, "fxshow"), m) b.style(e, r, m[r])
            })), u = lt(_ ? p[r] : 0, r, h), r in p || (p[r] = u.start, _ && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
          t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
      }), b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
          complete: n || !n && t || g(e) && e,
          duration: e,
          easing: n && t || t && !g(t) && t
        };
        return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          g(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
      }, b.fn.extend({
        fadeTo: function(e, t, n, r) {
          return this.filter(se).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r)
        },
        animate: function(e, t, n, r) {
          var i = b.isEmptyObject(e),
            a = b.speed(t, n, r),
            s = function() {
              var t = dt(this, b.extend({}, e), a);
              (i || Z.get(this, "finish")) && t.stop(!0)
            };
          return s.finish = s, i || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(e, t, n) {
          var r = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              i = null != e && e + "queueHooks",
              a = b.timers,
              s = Z.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else
              for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
            for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
            !t && n || b.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, n = Z.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              a = b.timers,
              s = r ? r.length : 0;
            for (n.finish = !0, b.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      }), b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
      }), b.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        b.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
        }
      }), b.timers = [], b.fx.tick = function() {
        var e, t = 0,
          n = b.timers;
        for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || b.fx.stop(), nt = void 0
      }, b.fx.timer = function(e) {
        b.timers.push(e), b.fx.start()
      }, b.fx.interval = 13, b.fx.start = function() {
        rt || (rt = !0, st())
      }, b.fx.stop = function() {
        rt = null
      }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, b.fn.delay = function(e, t) {
        return e = b.fx && b.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
          var i = n.setTimeout(t, e);
          r.stop = function() {
            n.clearTimeout(i)
          }
        })
      },
      function() {
        var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));
        e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value
      }();
    var ct, ht = b.expr.attrHandle;
    b.fn.extend({
      attr: function(e, t) {
        return B(this, b.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          b.removeAttr(this, e)
        })
      }
    }), b.extend({
      attr: function(e, t, n) {
        var r, i, a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === a && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!y.radioValue && "radio" === t && j(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0,
          i = t && t.match(N);
        if (i && 1 === e.nodeType)
          for (; n = i[r++];) e.removeAttribute(n)
      }
    }), ct = {
      set: function(e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ht[t] || b.find.attr;
      ht[t] = function(e, t, r) {
        var i, a, s = t.toLowerCase();
        return r || (a = ht[s], ht[s] = i, i = null != n(e, t, r) ? s : null, ht[s] = a), i
      }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
      ft = /^(?:a|area)$/i;

    function _t(e) {
      return (e.match(N) || []).join(" ")
    }

    function pt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }
    b.fn.extend({
      prop: function(e, t) {
        return B(this, b.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[b.propFix[e] || e]
        })
      }
    }), b.extend({
      prop: function(e, t, n) {
        var r, i, a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return 1 === a && b.isXMLDoc(e) || (t = b.propFix[t] || t, i = b.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = b.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : mt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), y.optSelected || (b.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
      addClass: function(e) {
        var t, n, r, i, a, s, o, u = 0;
        if (g(e)) return this.each(function(t) {
          b(this).addClass(e.call(this, t, pt(this)))
        });
        if ((t = yt(e)).length)
          for (; n = this[u++];)
            if (i = pt(n), r = 1 === n.nodeType && " " + _t(i) + " ") {
              for (s = 0; a = t[s++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
              i !== (o = _t(r)) && n.setAttribute("class", o)
            }
        return this
      },
      removeClass: function(e) {
        var t, n, r, i, a, s, o, u = 0;
        if (g(e)) return this.each(function(t) {
          b(this).removeClass(e.call(this, t, pt(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = yt(e)).length)
          for (; n = this[u++];)
            if (i = pt(n), r = 1 === n.nodeType && " " + _t(i) + " ") {
              for (s = 0; a = t[s++];)
                for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
              i !== (o = _t(r)) && n.setAttribute("class", o)
            }
        return this
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
          b(this).toggleClass(e.call(this, n, pt(this), t), t)
        }) : this.each(function() {
          var t, i, a, s;
          if (r)
            for (i = 0, a = b(this), s = yt(e); t = s[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
          else void 0 !== e && "boolean" !== n || ((t = pt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (1 === n.nodeType && (" " + _t(pt(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var gt = /\r/g;
    b.fn.extend({
      val: function(e) {
        var t, n, r, i = this[0];
        return arguments.length ? (r = g(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, function(e) {
            return null == e ? "" : e + ""
          })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        })) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
      }
    }), b.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = b.find.attr(e, "value");
            return null != t ? t : _t(b.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, n, r, i = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              o = s ? null : [],
              u = s ? a + 1 : i.length;
            for (r = a < 0 ? u : s ? a : 0; r < u; r++)
              if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                if (t = b(n).val(), s) return t;
                o.push(t)
              }
            return o
          },
          set: function(e, t) {
            for (var n, r, i = e.options, a = b.makeArray(t), s = i.length; s--;)((r = i[s]).selected = b.inArray(b.valHooks.option.get(r), a) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), a
          }
        }
      }
    }), b.each(["radio", "checkbox"], function() {
      b.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
        }
      }, y.checkOn || (b.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), y.focusin = "onfocusin" in n;
    var vt = /^(?:focusinfocus|focusoutblur)$/,
      Mt = function(e) {
        e.stopPropagation()
      };
    b.extend(b.event, {
      trigger: function(e, t, r, i) {
        var a, o, u, l, d, c, h, m, _ = [r || s],
          p = f.call(e, "type") ? e.type : e,
          y = f.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = m = u = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !vt.test(p + b.event.triggered) && (p.indexOf(".") > -1 && (p = (y = p.split(".")).shift(), y.sort()), d = p.indexOf(":") < 0 && "on" + p, (e = e[b.expando] ? e : new b.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : b.makeArray(t, [e]), h = b.event.special[p] || {}, i || !h.trigger || !1 !== h.trigger.apply(r, t))) {
          if (!i && !h.noBubble && !v(r)) {
            for (l = h.delegateType || p, vt.test(l + p) || (o = o.parentNode); o; o = o.parentNode) _.push(o), u = o;
            u === (r.ownerDocument || s) && _.push(u.defaultView || u.parentWindow || n)
          }
          for (a = 0;
            (o = _[a++]) && !e.isPropagationStopped();) m = o, e.type = a > 1 ? l : h.bindType || p, (c = (Z.get(o, "events") || {})[e.type] && Z.get(o, "handle")) && c.apply(o, t), (c = d && o[d]) && c.apply && K(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
          return e.type = p, i || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(_.pop(), t) || !K(r) || d && g(r[p]) && !v(r) && ((u = r[d]) && (r[d] = null), b.event.triggered = p, e.isPropagationStopped() && m.addEventListener(p, Mt), r[p](), e.isPropagationStopped() && m.removeEventListener(p, Mt), b.event.triggered = void 0, u && (r[d] = u)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = b.extend(new b.Event, n, {
          type: e,
          isSimulated: !0
        });
        b.event.trigger(r, null, t)
      }
    }), b.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          b.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0)
      }
    }), y.focusin || b.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        b.event.simulate(t, e.target, b.event.fix(e))
      };
      b.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            i = Z.access(r, t);
          i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            i = Z.access(r, t) - 1;
          i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
        }
      }
    });
    var Lt = n.location,
      kt = Date.now(),
      bt = /\?/;
    b.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), t
    };
    var Yt = /\[\]$/,
      wt = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      Tt = /^(?:input|select|textarea|keygen)/i;

    function xt(e, t, n, r) {
      var i;
      if (Array.isArray(t)) b.each(t, function(t, i) {
        n || Yt.test(e) ? r(e, i) : xt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== k(t)) r(e, t);
      else
        for (i in t) xt(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function(e, t) {
      var n, r = [],
        i = function(e, t) {
          var n = g(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
        i(this.name, this.value)
      });
      else
        for (n in e) xt(n, e[n], t, i);
      return r.join("&")
    }, b.fn.extend({
      serialize: function() {
        return b.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = b.prop(this, "elements");
          return e ? b.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !b(this).is(":disabled") && Tt.test(this.nodeName) && !Dt.test(e) && (this.checked || !he.test(e))
        }).map(function(e, t) {
          var n = b(this).val();
          return null == n ? null : Array.isArray(n) ? b.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(wt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(wt, "\r\n")
          }
        }).get()
      }
    });
    var St = /%20/g,
      jt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      At = /^(?:GET|HEAD)$/,
      Ct = /^\/\//,
      Ot = {},
      Pt = {},
      Wt = "*/".concat("*"),
      Nt = s.createElement("a");

    function Ft(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r, i = 0,
          a = t.toLowerCase().match(N) || [];
        if (g(n))
          for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
    }

    function It(e, t, n, r) {
      var i = {},
        a = e === Pt;

      function s(o) {
        var u;
        return i[o] = !0, b.each(e[o] || [], function(e, o) {
          var l = o(t, n, r);
          return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
        }), u
      }
      return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function Rt(e, t) {
      var n, r, i = b.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && b.extend(!0, e, r), e
    }
    Nt.href = Lt.href, b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Lt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Wt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": b.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? Rt(Rt(e, b.ajaxSettings), t) : Rt(b.ajaxSettings, e)
      },
      ajaxPrefilter: Ft(Ot),
      ajaxTransport: Ft(Pt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var r, i, a, o, u, l, d, c, h, m, f = b.ajaxSetup({}, t),
          _ = f.context || f,
          p = f.context && (_.nodeType || _.jquery) ? b(_) : b.event,
          y = b.Deferred(),
          g = b.Callbacks("once memory"),
          v = f.statusCode || {},
          M = {},
          L = {},
          k = "canceled",
          Y = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (d) {
                if (!o)
                  for (o = {}; t = Et.exec(a);) o[t[1].toLowerCase()] = t[2];
                t = o[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return d ? a : null
            },
            setRequestHeader: function(e, t) {
              return null == d && (e = L[e.toLowerCase()] = L[e.toLowerCase()] || e, M[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == d && (f.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (d) Y.always(e[Y.status]);
                else
                  for (t in e) v[t] = [v[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || k;
              return r && r.abort(t), w(0, t), this
            }
          };
        if (y.promise(Y), f.url = ((e || f.url || Lt.href) + "").replace(Ct, Lt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""], null == f.crossDomain) {
          l = s.createElement("a");
          try {
            l.href = f.url, l.href = l.href, f.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host
          } catch (e) {
            f.crossDomain = !0
          }
        }
        if (f.data && f.processData && "string" != typeof f.data && (f.data = b.param(f.data, f.traditional)), It(Ot, f, t, Y), d) return Y;
        for (h in (c = b.event && f.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !At.test(f.type), i = f.url.replace(jt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(St, "+")) : (m = f.url.slice(i.length), f.data && (f.processData || "string" == typeof f.data) && (i += (bt.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (i = i.replace(Ht, "$1"), m = (bt.test(i) ? "&" : "?") + "_=" + kt++ + m), f.url = i + m), f.ifModified && (b.lastModified[i] && Y.setRequestHeader("If-Modified-Since", b.lastModified[i]), b.etag[i] && Y.setRequestHeader("If-None-Match", b.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && Y.setRequestHeader("Content-Type", f.contentType), Y.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]), f.headers) Y.setRequestHeader(h, f.headers[h]);
        if (f.beforeSend && (!1 === f.beforeSend.call(_, Y, f) || d)) return Y.abort();
        if (k = "abort", g.add(f.complete), Y.done(f.success), Y.fail(f.error), r = It(Pt, f, t, Y)) {
          if (Y.readyState = 1, c && p.trigger("ajaxSend", [Y, f]), d) return Y;
          f.async && f.timeout > 0 && (u = n.setTimeout(function() {
            Y.abort("timeout")
          }, f.timeout));
          try {
            d = !1, r.send(M, w)
          } catch (e) {
            if (d) throw e;
            w(-1, e)
          }
        } else w(-1, "No Transport");

        function w(e, t, s, o) {
          var l, h, m, M, L, k = t;
          d || (d = !0, u && n.clearTimeout(u), r = void 0, a = o || "", Y.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, s && (M = function(e, t, n) {
            for (var r, i, a, s, o = e.contents, u = e.dataTypes;
              "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (i in o)
                if (o[i] && o[i].test(r)) {
                  u.unshift(i);
                  break
                }
            if (u[0] in n) a = u[0];
            else {
              for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                  a = i;
                  break
                }
                s || (s = i)
              }
              a = a || s
            }
            if (a) return a !== u[0] && u.unshift(a), n[a]
          }(f, Y, s)), M = function(e, t, n, r) {
            var i, a, s, o, u, l = {},
              d = e.dataTypes.slice();
            if (d[1])
              for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
            for (a = d.shift(); a;)
              if (e.responseFields[a] && (n[e.responseFields[a]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = a, a = d.shift())
                if ("*" === a) a = u;
                else if ("*" !== u && u !== a) {
              if (!(s = l[u + " " + a] || l["* " + a]))
                for (i in l)
                  if ((o = i.split(" "))[1] === a && (s = l[u + " " + o[0]] || l["* " + o[0]])) {
                    !0 === s ? s = l[i] : !0 !== l[i] && (a = o[0], d.unshift(o[1]));
                    break
                  }
              if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                  t = s(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + u + " to " + a
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(f, M, Y, l), l ? (f.ifModified && ((L = Y.getResponseHeader("Last-Modified")) && (b.lastModified[i] = L), (L = Y.getResponseHeader("etag")) && (b.etag[i] = L)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = M.state, h = M.data, l = !(m = M.error))) : (m = k, !e && k || (k = "error", e < 0 && (e = 0))), Y.status = e, Y.statusText = (t || k) + "", l ? y.resolveWith(_, [h, k, Y]) : y.rejectWith(_, [Y, k, m]), Y.statusCode(v), v = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [Y, f, l ? h : m]), g.fireWith(_, [Y, k]), c && (p.trigger("ajaxComplete", [Y, f]), --b.active || b.event.trigger("ajaxStop")))
        }
        return Y
      },
      getJSON: function(e, t, n) {
        return b.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return b.get(e, void 0, t, "script")
      }
    }), b.each(["get", "post"], function(e, t) {
      b[t] = function(e, n, r, i) {
        return g(n) && (i = i || r, r = n, n = void 0), b.ajax(b.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        }, b.isPlainObject(e) && e))
      }
    }), b._evalUrl = function(e) {
      return b.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, b.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(e) {
        return g(e) ? this.each(function(t) {
          b(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = b(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = g(e);
        return this.each(function(n) {
          b(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          b(this).replaceWith(this.childNodes)
        }), this
      }
    }), b.expr.pseudos.hidden = function(e) {
      return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var zt = {
        0: 200,
        1223: 204
      },
      $t = b.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, b.ajaxTransport(function(e) {
      var t, r;
      if (y.cors || $t && !e.crossDomain) return {
        send: function(i, a) {
          var s, o = e.xhr();
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) o[s] = e.xhrFields[s];
          for (s in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) o.setRequestHeader(s, i[s]);
          t = function(e) {
            return function() {
              t && (t = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(zt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                binary: o.response
              } : {
                text: o.responseText
              }, o.getAllResponseHeaders()))
            }
          }, o.onload = t(), r = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function() {
            4 === o.readyState && n.setTimeout(function() {
              t && r()
            })
          }, t = t("abort");
          try {
            o.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), b.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }), b.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return b.globalEval(e), e
        }
      }
    }), b.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), b.ajaxTransport("script", function(e) {
      var t, n;
      if (e.crossDomain) return {
        send: function(r, i) {
          t = b("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), s.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    });
    var qt, Bt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Bt.pop() || b.expando + "_" + kt++;
        return this[e] = !0, e
      }
    }), b.ajaxPrefilter("json jsonp", function(e, t, r) {
      var i, a, s, o = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
      if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
        return s || b.error(i + " was not called"), s[0]
      }, e.dataTypes[0] = "json", a = n[i], n[i] = function() {
        s = arguments
      }, r.always(function() {
        void 0 === a ? b(n).removeProp(i) : n[i] = a, e[i] && (e.jsonpCallback = t.jsonpCallback, Bt.push(i)), s && g(a) && a(s[0]), s = a = void 0
      }), "script"
    }), y.createHTMLDocument = ((qt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), b.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(r)) : t = s), i = H.exec(e), a = !n && [], i ? [t.createElement(i[1])] : (i = Le([e], t, a), a && a.length && b(a).remove(), b.merge([], i.childNodes)));
      var r, i, a
    }, b.fn.load = function(e, t, n) {
      var r, i, a, s = this,
        o = e.indexOf(" ");
      return o > -1 && (r = _t(e.slice(o)), e = e.slice(0, o)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && b.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        a = arguments, s.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
        s.each(function() {
          n.apply(this, a || [e.responseText, t, e])
        })
      }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      b.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), b.expr.pseudos.animated = function(e) {
      return b.grep(b.timers, function(t) {
        return e === t.elem
      }).length
    }, b.offset = {
      setOffset: function(e, t, n) {
        var r, i, a, s, o, u, l = b.css(e, "position"),
          d = b(e),
          c = {};
        "static" === l && (e.style.position = "relative"), o = d.offset(), a = b.css(e, "top"), u = b.css(e, "left"), ("absolute" === l || "fixed" === l) && (a + u).indexOf("auto") > -1 ? (s = (r = d.position()).top, i = r.left) : (s = parseFloat(a) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, b.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + i), "using" in t ? t.using.call(e, c) : d.css(c)
      }
    }, b.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          b.offset.setOffset(this, e, t)
        });
        var t, n, r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0), i.left += b.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - i.top - b.css(r, "marginTop", !0),
            left: t.left - i.left - b.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
          return e || ke
        })
      }
    }), b.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      b.fn[e] = function(r) {
        return B(this, function(e, r, i) {
          var a;
          if (v(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === i) return a ? a[t] : e[r];
          a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i
        }, e, r, arguments.length)
      }
    }), b.each(["top", "left"], function(e, t) {
      b.cssHooks[t] = qe(y.pixelPosition, function(e, n) {
        if (n) return n = $e(e, t), Ie.test(n) ? b(e).position()[t] + "px" : n
      })
    }), b.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      b.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        b.fn[r] = function(i, a) {
          var s = arguments.length && (n || "boolean" != typeof i),
            o = n || (!0 === i || !0 === a ? "margin" : "border");
          return B(this, function(t, n, i) {
            var a;
            return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? b.css(t, n, o) : b.style(t, n, i, o)
          }, t, s ? i : void 0, s)
        }
      })
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      b.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), b.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), b.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), b.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = u.call(arguments, 2), (i = function() {
        return e.apply(t || this, r.concat(u.call(arguments)))
      }).guid = e.guid = e.guid || b.guid++, i
    }, b.holdReady = function(e) {
      e ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = j, b.isFunction = g, b.isWindow = v, b.camelCase = G, b.type = k, b.now = Date.now, b.isNumeric = function(e) {
      var t = b.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, void 0 === (r = function() {
      return b
    }.apply(t, [])) || (e.exports = r);
    var Vt = n.jQuery,
      Jt = n.$;
    return b.noConflict = function(e) {
      return n.$ === b && (n.$ = Jt), e && n.jQuery === b && (n.jQuery = Vt), b
    }, i || (n.jQuery = n.$ = b), b
  })
}, function(e, t, n) {
  "use strict";
  (function(t) {
    var r = n(1),
      i = n(151),
      a = {
        "Content-Type": "application/x-www-form-urlencoded"
      };

    function s(e, t) {
      !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }
    var o, u = {
      adapter: ("undefined" != typeof XMLHttpRequest ? o = n(130) : void 0 !== t && (o = n(130)), o),
      transformRequest: [function(e, t) {
        return i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
      }],
      transformResponse: [function(e) {
        if ("string" == typeof e) try {
          e = JSON.parse(e)
        } catch (e) {}
        return e
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function(e) {
        return e >= 200 && e < 300
      }
    };
    u.headers = {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }, r.forEach(["delete", "get", "head"], function(e) {
      u.headers[e] = {}
    }), r.forEach(["post", "put", "patch"], function(e) {
      u.headers[e] = r.merge(a)
    }), e.exports = u
  }).call(t, n(150))
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("af", {
      months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
      monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
      weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
      weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
      meridiemParse: /vm|nm/i,
      isPM: function(e) {
        return /^nm$/i.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Vandag om] LT",
        nextDay: "[MÃ´re om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[Gister om] LT",
        lastWeek: "[Laas] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "oor %s",
        past: "%s gelede",
        s: "'n paar sekondes",
        ss: "%d sekondes",
        m: "'n minuut",
        mm: "%d minute",
        h: "'n uur",
        hh: "%d ure",
        d: "'n dag",
        dd: "%d dae",
        M: "'n maand",
        MM: "%d maande",
        y: "'n jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "Ù¡",
        2: "Ù¢",
        3: "Ù£",
        4: "Ù¤",
        5: "Ù¥",
        6: "Ù¦",
        7: "Ù§",
        8: "Ù¨",
        9: "Ù©",
        0: "Ù "
      },
      n = {
        "Ù¡": "1",
        "Ù¢": "2",
        "Ù£": "3",
        "Ù¤": "4",
        "Ù¥": "5",
        "Ù¦": "6",
        "Ù§": "7",
        "Ù¨": "8",
        "Ù©": "9",
        "Ù ": "0"
      },
      r = function(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      i = {
        s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
        m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
        h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
        d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
        M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
        y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
      },
      a = function(e) {
        return function(t, n, a, s) {
          var o = r(t),
            u = i[e][r(t)];
          return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t)
        }
      },
      s = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
    e.defineLocale("ar", {
      months: s,
      monthsShort: s,
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/â€M/â€YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Øµ|Ù…/,
      isPM: function(e) {
        return "Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Øµ" : "Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ø¨Ø¹Ø¯ %s",
        past: "Ù…Ù†Ø° %s",
        s: a("s"),
        ss: a("s"),
        m: a("m"),
        mm: a("m"),
        h: a("h"),
        hh: a("h"),
        d: a("d"),
        dd: a("d"),
        M: a("M"),
        MM: a("M"),
        y: a("y"),
        yy: a("y")
      },
      preparse: function(e) {
        return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) {
          return n[e]
        }).replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        }).replace(/,/g, "ØŒ")
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ar-dz", {
      months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø£Ø­_Ø¥Ø«_Ø«Ù„Ø§_Ø£Ø±_Ø®Ù…_Ø¬Ù…_Ø³Ø¨".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 0,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ar-kw", {
      months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 0,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
      },
      n = function(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      r = {
        s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
        m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
        h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
        d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
        M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
        y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
      },
      i = function(e) {
        return function(t, i, a, s) {
          var o = n(t),
            u = r[e][n(t)];
          return 2 === o && (u = u[i ? 0 : 1]), u.replace(/%d/i, t)
        }
      },
      a = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
    e.defineLocale("ar-ly", {
      months: a,
      monthsShort: a,
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/â€M/â€YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Øµ|Ù…/,
      isPM: function(e) {
        return "Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Øµ" : "Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ø¨Ø¹Ø¯ %s",
        past: "Ù…Ù†Ø° %s",
        s: i("s"),
        ss: i("s"),
        m: i("m"),
        mm: i("m"),
        h: i("h"),
        hh: i("h"),
        d: i("d"),
        dd: i("d"),
        M: i("M"),
        MM: i("M"),
        y: i("y"),
        yy: i("y")
      },
      preparse: function(e) {
        return e.replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        }).replace(/,/g, "ØŒ")
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ar-ma", {
      months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "Ù¡",
        2: "Ù¢",
        3: "Ù£",
        4: "Ù¤",
        5: "Ù¥",
        6: "Ù¦",
        7: "Ù§",
        8: "Ù¨",
        9: "Ù©",
        0: "Ù "
      },
      n = {
        "Ù¡": "1",
        "Ù¢": "2",
        "Ù£": "3",
        "Ù¤": "4",
        "Ù¥": "5",
        "Ù¦": "6",
        "Ù§": "7",
        "Ù¨": "8",
        "Ù©": "9",
        "Ù ": "0"
      };
    e.defineLocale("ar-sa", {
      months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Øµ|Ù…/,
      isPM: function(e) {
        return "Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Øµ" : "Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      preparse: function(e) {
        return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) {
          return n[e]
        }).replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        }).replace(/,/g, "ØŒ")
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ar-tn", {
      months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      1: "-inci",
      5: "-inci",
      8: "-inci",
      70: "-inci",
      80: "-inci",
      2: "-nci",
      7: "-nci",
      20: "-nci",
      50: "-nci",
      3: "-Ã¼ncÃ¼",
      4: "-Ã¼ncÃ¼",
      100: "-Ã¼ncÃ¼",
      6: "-ncÄ±",
      9: "-uncu",
      10: "-uncu",
      30: "-uncu",
      60: "-Ä±ncÄ±",
      90: "-Ä±ncÄ±"
    };
    e.defineLocale("az", {
      months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
      weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
      weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugÃ¼n saat] LT",
        nextDay: "[sabah saat] LT",
        nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
        lastDay: "[dÃ¼nÉ™n] LT",
        lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s É™vvÉ™l",
        s: "birneÃ§É™ saniyÉ™",
        ss: "%d saniyÉ™",
        m: "bir dÉ™qiqÉ™",
        mm: "%d dÉ™qiqÉ™",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gÃ¼n",
        dd: "%d gÃ¼n",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
      isPM: function(e) {
        return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
      ordinal: function(e) {
        if (0 === e) return e + "-Ä±ncÄ±";
        var n = e % 10;
        return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      var r, i;
      return "m" === n ? t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : e + " " + (r = +e, i = {
        ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
        mm: t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
        hh: t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
        dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
        MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
        yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
      }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2])
    }
    e.defineLocale("be", {
      months: {
        format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
        standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
      },
      monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
      weekdays: {
        format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
        standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
        isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
      },
      weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
      weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY Ð³.",
        LLL: "D MMMM YYYY Ð³., HH:mm",
        LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
      },
      calendar: {
        sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
        nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
        lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
        nextWeek: function() {
          return "[Ð£] dddd [Ñž] LT"
        },
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
            case 1:
            case 2:
            case 4:
              return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Ð¿Ñ€Ð°Ð· %s",
        past: "%s Ñ‚Ð°Ð¼Ñƒ",
        s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "Ð´Ð·ÐµÐ½ÑŒ",
        dd: t,
        M: "Ð¼ÐµÑÑÑ†",
        MM: t,
        y: "Ð³Ð¾Ð´",
        yy: t
      },
      meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
      isPM: function(e) {
        return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "Ð½Ð¾Ñ‡Ñ‹" : e < 12 ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
      ordinal: function(e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-Ñ‹" : e + "-Ñ–";
          case "D":
            return e + "-Ð³Ð°";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("bg", {
      months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
      monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
      weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
      weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
      weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
        nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
        nextWeek: "dddd [Ð²] LT",
        lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "ÑÐ»ÐµÐ´ %s",
        past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
        s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
        ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
        m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
        mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
        h: "Ñ‡Ð°Ñ",
        hh: "%d Ñ‡Ð°ÑÐ°",
        d: "Ð´ÐµÐ½",
        dd: "%d Ð´Ð½Ð¸",
        M: "Ð¼ÐµÑÐµÑ†",
        MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
        y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
        yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
      ordinal: function(e) {
        var t = e % 10,
          n = e % 100;
        return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("bm", {
      months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
      monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
      weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
      weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
      weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "MMMM [tile] D [san] YYYY",
        LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
        LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
      },
      calendar: {
        sameDay: "[Bi lÉ›rÉ›] LT",
        nextDay: "[Sini lÉ›rÉ›] LT",
        nextWeek: "dddd [don lÉ›rÉ›] LT",
        lastDay: "[Kunu lÉ›rÉ›] LT",
        lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s kÉ”nÉ”",
        past: "a bÉ› %s bÉ”",
        s: "sanga dama dama",
        ss: "sekondi %d",
        m: "miniti kelen",
        mm: "miniti %d",
        h: "lÉ›rÉ› kelen",
        hh: "lÉ›rÉ› %d",
        d: "tile kelen",
        dd: "tile %d",
        M: "kalo kelen",
        MM: "kalo %d",
        y: "san kelen",
        yy: "san %d"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à§§",
        2: "à§¨",
        3: "à§©",
        4: "à§ª",
        5: "à§«",
        6: "à§¬",
        7: "à§­",
        8: "à§®",
        9: "à§¯",
        0: "à§¦"
      },
      n = {
        "à§§": "1",
        "à§¨": "2",
        "à§©": "3",
        "à§ª": "4",
        "à§«": "5",
        "à§¬": "6",
        "à§­": "7",
        "à§®": "8",
        "à§¯": "9",
        "à§¦": "0"
      };
    e.defineLocale("bn", {
      months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
      monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦†à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
      weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
      weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
      weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦ƒ_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
      longDateFormat: {
        LT: "A h:mm à¦¸à¦®à§Ÿ",
        LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
        LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
      },
      calendar: {
        sameDay: "[à¦†à¦œ] LT",
        nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
        lastWeek: "[à¦—à¦¤] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à¦ªà¦°à§‡",
        past: "%s à¦†à¦—à§‡",
        s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
        ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
        m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
        mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
        h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
        hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
        d: "à¦à¦• à¦¦à¦¿à¦¨",
        dd: "%d à¦¦à¦¿à¦¨",
        M: "à¦à¦• à¦®à¦¾à¦¸",
        MM: "%d à¦®à¦¾à¦¸",
        y: "à¦à¦• à¦¬à¦›à¦°",
        yy: "%d à¦¬à¦›à¦°"
      },
      preparse: function(e) {
        return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t && e >= 4 || "à¦¦à§à¦ªà§à¦°" === t && e < 5 || "à¦¬à¦¿à¦•à¦¾à¦²" === t ? e + 12 : e
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à¦°à¦¾à¦¤" : e < 10 ? "à¦¸à¦•à¦¾à¦²" : e < 17 ? "à¦¦à§à¦ªà§à¦°" : e < 20 ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à¼¡",
        2: "à¼¢",
        3: "à¼£",
        4: "à¼¤",
        5: "à¼¥",
        6: "à¼¦",
        7: "à¼§",
        8: "à¼¨",
        9: "à¼©",
        0: "à¼ "
      },
      n = {
        "à¼¡": "1",
        "à¼¢": "2",
        "à¼£": "3",
        "à¼¤": "4",
        "à¼¥": "5",
        "à¼¦": "6",
        "à¼§": "7",
        "à¼¨": "8",
        "à¼©": "9",
        "à¼ ": "0"
      };
    e.defineLocale("bo", {
      months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
      monthsShort: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
      weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
      weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
      weekdaysMin: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
        nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
        nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
        lastDay: "[à½à¼‹à½¦à½„] LT",
        lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à½£à¼‹",
        past: "%s à½¦à¾”à½“à¼‹à½£",
        s: "à½£à½˜à¼‹à½¦à½„",
        ss: "%d à½¦à¾à½¢à¼‹à½†à¼",
        m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
        mm: "%d à½¦à¾à½¢à¼‹à½˜",
        h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
        hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
        d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
        dd: "%d à½‰à½²à½“à¼‹",
        M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
        MM: "%d à½Ÿà¾³à¼‹à½–",
        y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
        yy: "%d à½£à½¼"
      },
      preparse: function(e) {
        return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === t && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === t && e < 5 || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === t ? e + 12 : e
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à½˜à½šà½“à¼‹à½˜à½¼" : e < 10 ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : e < 17 ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : e < 20 ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      return e + " " + function(e, t) {
        if (2 === t) return function(e) {
          var t = {
            m: "v",
            b: "v",
            d: "z"
          };
          if (void 0 === t[e.charAt(0)]) return e;
          return t[e.charAt(0)] + e.substring(1)
        }(e);
        return e
      }({
        mm: "munutenn",
        MM: "miz",
        dd: "devezh"
      }[n], e)
    }
    e.defineLocale("br", {
      months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
      monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
      weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
      weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h[e]mm A",
        LTS: "h[e]mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D [a viz] MMMM YYYY",
        LLL: "D [a viz] MMMM YYYY h[e]mm A",
        LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
      },
      calendar: {
        sameDay: "[Hiziv da] LT",
        nextDay: "[Warc'hoazh da] LT",
        nextWeek: "dddd [da] LT",
        lastDay: "[Dec'h da] LT",
        lastWeek: "dddd [paset da] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "a-benn %s",
        past: "%s 'zo",
        s: "un nebeud segondennoÃ¹",
        ss: "%d eilenn",
        m: "ur vunutenn",
        mm: t,
        h: "un eur",
        hh: "%d eur",
        d: "un devezh",
        dd: t,
        M: "ur miz",
        MM: t,
        y: "ur bloaz",
        yy: function(e) {
          switch (function e(t) {
            return t > 9 ? e(t % 10) : t
          }(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz"
          }
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
      ordinal: function(e) {
        return e + (1 === e ? "aÃ±" : "vet")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      var r = e + " ";
      switch (n) {
        case "ss":
          return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
        case "m":
          return t ? "jedna minuta" : "jedne minute";
        case "mm":
          return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
        case "h":
          return t ? "jedan sat" : "jednog sata";
        case "hh":
          return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
        case "dd":
          return r += 1 === e ? "dan" : "dana";
        case "MM":
          return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
        case "yy":
          return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
    }
    e.defineLocale("bs", {
      months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juÄer u] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
              return "[proÅ¡lu] dddd [u] LT";
            case 6:
              return "[proÅ¡le] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[proÅ¡li] dddd [u] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "dan",
        dd: t,
        M: "mjesec",
        MM: t,
        y: "godinu",
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ca", {
      months: {
        standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
        isFormat: /D[oD]?(\s)+MMMM/
      },
      monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
      monthsParseExact: !0,
      weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
      weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
      weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [de] YYYY",
        ll: "D MMM YYYY",
        LLL: "D MMMM [de] YYYY [a les] H:mm",
        lll: "D MMM YYYY, H:mm",
        LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
        llll: "ddd D MMM YYYY, H:mm"
      },
      calendar: {
        sameDay: function() {
          return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        nextDay: function() {
          return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        nextWeek: function() {
          return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        lastDay: function() {
          return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        lastWeek: function() {
          return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "d'aquÃ­ %s",
        past: "fa %s",
        s: "uns segons",
        ss: "%d segons",
        m: "un minut",
        mm: "%d minuts",
        h: "una hora",
        hh: "%d hores",
        d: "un dia",
        dd: "%d dies",
        M: "un mes",
        MM: "%d mesos",
        y: "un any",
        yy: "%d anys"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
      ordinal: function(e, t) {
        var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
        return "w" !== t && "W" !== t || (n = "a"), e + n
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
      n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_");

    function r(e) {
      return e > 1 && e < 5 && 1 != ~~(e / 10)
    }

    function i(e, t, n, i) {
      var a = e + " ";
      switch (n) {
        case "s":
          return t || i ? "pÃ¡r sekund" : "pÃ¡r sekundami";
        case "ss":
          return t || i ? a + (r(e) ? "sekundy" : "sekund") : a + "sekundami";
        case "m":
          return t ? "minuta" : i ? "minutu" : "minutou";
        case "mm":
          return t || i ? a + (r(e) ? "minuty" : "minut") : a + "minutami";
        case "h":
          return t ? "hodina" : i ? "hodinu" : "hodinou";
        case "hh":
          return t || i ? a + (r(e) ? "hodiny" : "hodin") : a + "hodinami";
        case "d":
          return t || i ? "den" : "dnem";
        case "dd":
          return t || i ? a + (r(e) ? "dny" : "dnÃ­") : a + "dny";
        case "M":
          return t || i ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
        case "MM":
          return t || i ? a + (r(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : a + "mÄ›sÃ­ci";
        case "y":
          return t || i ? "rok" : "rokem";
        case "yy":
          return t || i ? a + (r(e) ? "roky" : "let") : a + "lety"
      }
    }
    e.defineLocale("cs", {
      months: t,
      monthsShort: n,
      monthsParse: function(e, t) {
        var n, r = [];
        for (n = 0; n < 12; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
        return r
      }(t, n),
      shortMonthsParse: function(e) {
        var t, n = [];
        for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
        return n
      }(n),
      longMonthsParse: function(e) {
        var t, n = [];
        for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
        return n
      }(t),
      weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
      weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
      weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[zÃ­tra v] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v nedÄ›li v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve stÅ™edu v] LT";
            case 4:
              return "[ve Ätvrtek v] LT";
            case 5:
              return "[v pÃ¡tek v] LT";
            case 6:
              return "[v sobotu v] LT"
          }
        },
        lastDay: "[vÄera v] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[minulou nedÄ›li v] LT";
            case 1:
            case 2:
              return "[minulÃ©] dddd [v] LT";
            case 3:
              return "[minulou stÅ™edu v] LT";
            case 4:
            case 5:
              return "[minulÃ½] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pÅ™ed %s",
        s: i,
        ss: i,
        m: i,
        mm: i,
        h: i,
        hh: i,
        d: i,
        dd: i,
        M: i,
        MM: i,
        y: i,
        yy: i
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("cv", {
      months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
      monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
      weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
      weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
      weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
        LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
        LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
      },
      calendar: {
        sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
        nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
        lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
        nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
        lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
        sameElse: "L"
      },
      relativeTime: {
        future: function(e) {
          return e + (/ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½")
        },
        past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
        s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
        ss: "%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
        m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
        mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
        h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
        hh: "%d ÑÐµÑ…ÐµÑ‚",
        d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
        dd: "%d ÐºÑƒÐ½",
        M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
        MM: "%d ÑƒÐ¹Ó‘Ñ…",
        y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
        yy: "%d Ò«ÑƒÐ»"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
      ordinal: "%d-Ð¼Ó—Ñˆ",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("cy", {
      months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
      monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
      weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
      weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Heddiw am] LT",
        nextDay: "[Yfory am] LT",
        nextWeek: "dddd [am] LT",
        lastDay: "[Ddoe am] LT",
        lastWeek: "dddd [diwethaf am] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "mewn %s",
        past: "%s yn Ã´l",
        s: "ychydig eiliadau",
        ss: "%d eiliad",
        m: "munud",
        mm: "%d munud",
        h: "awr",
        hh: "%d awr",
        d: "diwrnod",
        dd: "%d diwrnod",
        M: "mis",
        MM: "%d mis",
        y: "blwyddyn",
        yy: "%d flynedd"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
      ordinal: function(e) {
        var t = "";
        return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("da", {
      months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
      weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
      weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "pÃ¥ dddd [kl.] LT",
        lastDay: "[i gÃ¥r kl.] LT",
        lastWeek: "[i] dddd[s kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "fÃ¥ sekunder",
        ss: "%d sekunder",
        m: "et minut",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dage",
        M: "en mÃ¥ned",
        MM: "%d mÃ¥neder",
        y: "et Ã¥r",
        yy: "%d Ã¥r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }
    e.defineLocale("de", {
      months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }
    e.defineLocale("de-at", {
      months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }
    e.defineLocale("de-ch", {
      months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
      n = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"];
    e.defineLocale("dv", {
      months: t,
      monthsShort: t,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/M/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
      isPM: function(e) {
        return "Þ‰ÞŠ" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Þ‰Þ†" : "Þ‰ÞŠ"
      },
      calendar: {
        sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
        nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
        nextWeek: "dddd LT",
        lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
        lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
        past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
        s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
        ss: "d% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª",
        m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
        mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
        h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
        hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
        d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
        dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
        M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
        MM: "Þ‰Þ¦ÞÞ° %d",
        y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
        yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
      },
      preparse: function(e) {
        return e.replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/,/g, "ØŒ")
      },
      week: {
        dow: 7,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("el", {
      monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
      monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
      months: function(e, t) {
        return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
      },
      monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
      weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
      weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
      weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
      meridiem: function(e, t, n) {
        return e > 11 ? n ? "Î¼Î¼" : "ÎœÎœ" : n ? "Ï€Î¼" : "Î Îœ"
      },
      isPM: function(e) {
        return "Î¼" === (e + "").toLowerCase()[0]
      },
      meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendarEl: {
        sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
        nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 6:
              return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
            default:
              return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
          }
        },
        sameElse: "L"
      },
      calendar: function(e, t) {
        var n, r = this._calendarEl[e],
          i = t && t.hours();
        return ((n = r) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (r = r.apply(t)), r.replace("{}", i % 12 == 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
      },
      relativeTime: {
        future: "ÏƒÎµ %s",
        past: "%s Ï€ÏÎ¹Î½",
        s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
        ss: "%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
        m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
        mm: "%d Î»ÎµÏ€Ï„Î¬",
        h: "Î¼Î¯Î± ÏŽÏÎ±",
        hh: "%d ÏŽÏÎµÏ‚",
        d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
        dd: "%d Î¼Î­ÏÎµÏ‚",
        M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
        MM: "%d Î¼Î®Î½ÎµÏ‚",
        y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
        yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Î·/,
      ordinal: "%dÎ·",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("en-au", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("en-ca", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "YYYY-MM-DD",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("en-gb", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("en-ie", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("en-il", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("en-nz", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("eo", {
      months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"),
      weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"),
      weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"),
      weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D[-a de] MMMM, YYYY",
        LLL: "D[-a de] MMMM, YYYY HH:mm",
        LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM: function(e) {
        return "p" === e.charAt(0).toLowerCase()
      },
      meridiem: function(e, t, n) {
        return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
      },
      calendar: {
        sameDay: "[HodiaÅ­ je] LT",
        nextDay: "[MorgaÅ­ je] LT",
        nextWeek: "dddd [je] LT",
        lastDay: "[HieraÅ­ je] LT",
        lastWeek: "[pasinta] dddd [je] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "post %s",
        past: "antaÅ­ %s",
        s: "sekundoj",
        ss: "%d sekundoj",
        m: "minuto",
        mm: "%d minutoj",
        h: "horo",
        hh: "%d horoj",
        d: "tago",
        dd: "%d tagoj",
        M: "monato",
        MM: "%d monatoj",
        y: "jaro",
        yy: "%d jaroj"
      },
      dayOfMonthOrdinalParse: /\d{1,2}a/,
      ordinal: "%da",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    e.defineLocale("es", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function(e, r) {
        return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
      weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY H:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
      },
      calendar: {
        sameDay: function() {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function() {
          return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function() {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function() {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function() {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un dÃ­a",
        dd: "%d dÃ­as",
        M: "un mes",
        MM: "%d meses",
        y: "un aÃ±o",
        yy: "%d aÃ±os"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    e.defineLocale("es-do", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function(e, r) {
        return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
      weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY h:mm A",
        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
      },
      calendar: {
        sameDay: function() {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function() {
          return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function() {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function() {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function() {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un dÃ­a",
        dd: "%d dÃ­as",
        M: "un mes",
        MM: "%d meses",
        y: "un aÃ±o",
        yy: "%d aÃ±os"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    e.defineLocale("es-us", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function(e, r) {
        return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsParseExact: !0,
      weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
      weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "MM/DD/YYYY",
        LL: "MMMM [de] D [de] YYYY",
        LLL: "MMMM [de] D [de] YYYY h:mm A",
        LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
      },
      calendar: {
        sameDay: function() {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function() {
          return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function() {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function() {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function() {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un dÃ­a",
        dd: "%d dÃ­as",
        M: "un mes",
        MM: "%d meses",
        y: "un aÃ±o",
        yy: "%d aÃ±os"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
        ss: [e + "sekundi", e + "sekundit"],
        m: ["Ã¼he minuti", "Ã¼ks minut"],
        mm: [e + " minuti", e + " minutit"],
        h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
        hh: [e + " tunni", e + " tundi"],
        d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
        M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
        MM: [e + " kuu", e + " kuud"],
        y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
        yy: [e + " aasta", e + " aastat"]
      };
      return t ? i[n][2] ? i[n][2] : i[n][1] : r ? i[n][0] : i[n][1]
    }
    e.defineLocale("et", {
      months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
      monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
      weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
      weekdaysShort: "P_E_T_K_N_R_L".split("_"),
      weekdaysMin: "P_E_T_K_N_R_L".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[TÃ¤na,] LT",
        nextDay: "[Homme,] LT",
        nextWeek: "[JÃ¤rgmine] dddd LT",
        lastDay: "[Eile,] LT",
        lastWeek: "[Eelmine] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s pÃ¤rast",
        past: "%s tagasi",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: "%d pÃ¤eva",
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("eu", {
      months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
      monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
      monthsParseExact: !0,
      weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
      weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
      weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY[ko] MMMM[ren] D[a]",
        LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
        l: "YYYY-M-D",
        ll: "YYYY[ko] MMM D[a]",
        lll: "YYYY[ko] MMM D[a] HH:mm",
        llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
      },
      calendar: {
        sameDay: "[gaur] LT[etan]",
        nextDay: "[bihar] LT[etan]",
        nextWeek: "dddd LT[etan]",
        lastDay: "[atzo] LT[etan]",
        lastWeek: "[aurreko] dddd LT[etan]",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s barru",
        past: "duela %s",
        s: "segundo batzuk",
        ss: "%d segundo",
        m: "minutu bat",
        mm: "%d minutu",
        h: "ordu bat",
        hh: "%d ordu",
        d: "egun bat",
        dd: "%d egun",
        M: "hilabete bat",
        MM: "%d hilabete",
        y: "urte bat",
        yy: "%d urte"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "Û±",
        2: "Û²",
        3: "Û³",
        4: "Û´",
        5: "Ûµ",
        6: "Û¶",
        7: "Û·",
        8: "Û¸",
        9: "Û¹",
        0: "Û°"
      },
      n = {
        "Û±": "1",
        "Û²": "2",
        "Û³": "3",
        "Û´": "4",
        "Ûµ": "5",
        "Û¶": "6",
        "Û·": "7",
        "Û¸": "8",
        "Û¹": "9",
        "Û°": "0"
      };
    e.defineLocale("fa", {
      months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
      monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
      weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
      weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
      weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
      isPM: function(e) {
        return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
      },
      calendar: {
        sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
        nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
        nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
        lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
        lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ø¯Ø± %s",
        past: "%s Ù¾ÛŒØ´",
        s: "Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡",
        ss: "Ø«Ø§Ù†ÛŒÙ‡ d%",
        m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
        mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
        h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
        hh: "%d Ø³Ø§Ø¹Øª",
        d: "ÛŒÚ© Ø±ÙˆØ²",
        dd: "%d Ø±ÙˆØ²",
        M: "ÛŒÚ© Ù…Ø§Ù‡",
        MM: "%d Ù…Ø§Ù‡",
        y: "ÛŒÚ© Ø³Ø§Ù„",
        yy: "%d Ø³Ø§Ù„"
      },
      preparse: function(e) {
        return e.replace(/[Û°-Û¹]/g, function(e) {
          return n[e]
        }).replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        }).replace(/,/g, "ØŒ")
      },
      dayOfMonthOrdinalParse: /\d{1,2}Ù…/,
      ordinal: "%dÙ…",
      week: {
        dow: 6,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
      n = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", t[7], t[8], t[9]];

    function r(e, r, i, a) {
      var s = "";
      switch (i) {
        case "s":
          return a ? "muutaman sekunnin" : "muutama sekunti";
        case "ss":
          return a ? "sekunnin" : "sekuntia";
        case "m":
          return a ? "minuutin" : "minuutti";
        case "mm":
          s = a ? "minuutin" : "minuuttia";
          break;
        case "h":
          return a ? "tunnin" : "tunti";
        case "hh":
          s = a ? "tunnin" : "tuntia";
          break;
        case "d":
          return a ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
        case "dd":
          s = a ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
          break;
        case "M":
          return a ? "kuukauden" : "kuukausi";
        case "MM":
          s = a ? "kuukauden" : "kuukautta";
          break;
        case "y":
          return a ? "vuoden" : "vuosi";
        case "yy":
          s = a ? "vuoden" : "vuotta"
      }
      return s = function(e, r) {
        return e < 10 ? r ? n[e] : t[e] : e
      }(e, a) + " " + s
    }
    e.defineLocale("fi", {
      months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
      monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
      weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
      weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
      weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[ta] YYYY",
        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
        l: "D.M.YYYY",
        ll: "Do MMM YYYY",
        lll: "Do MMM YYYY, [klo] HH.mm",
        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
      },
      calendar: {
        sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
        nextDay: "[huomenna] [klo] LT",
        nextWeek: "dddd [klo] LT",
        lastDay: "[eilen] [klo] LT",
        lastWeek: "[viime] dddd[na] [klo] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s pÃ¤Ã¤stÃ¤",
        past: "%s sitten",
        s: r,
        ss: r,
        m: r,
        mm: r,
        h: r,
        hh: r,
        d: r,
        dd: r,
        M: r,
        MM: r,
        y: r,
        yy: r
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("fo", {
      months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
      weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
      weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
      weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D. MMMM, YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ã dag kl.] LT",
        nextDay: "[Ã morgin kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[Ã gjÃ¡r kl.] LT",
        lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "um %s",
        past: "%s sÃ­Ã°ani",
        s: "fÃ¡ sekund",
        ss: "%d sekundir",
        m: "ein minutt",
        mm: "%d minuttir",
        h: "ein tÃ­mi",
        hh: "%d tÃ­mar",
        d: "ein dagur",
        dd: "%d dagar",
        M: "ein mÃ¡naÃ°i",
        MM: "%d mÃ¡naÃ°ir",
        y: "eitt Ã¡r",
        yy: "%d Ã¡r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("fr", {
      months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
      monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
      monthsParseExact: !0,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourdâ€™hui Ã ] LT",
        nextDay: "[Demain Ã ] LT",
        nextWeek: "dddd [Ã ] LT",
        lastDay: "[Hier Ã ] LT",
        lastWeek: "dddd [dernier Ã ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
      ordinal: function(e, t) {
        switch (t) {
          case "D":
            return e + (1 === e ? "er" : "");
          default:
          case "M":
          case "Q":
          case "DDD":
          case "d":
            return e + (1 === e ? "er" : "e");
          case "w":
          case "W":
            return e + (1 === e ? "re" : "e")
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("fr-ca", {
      months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
      monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
      monthsParseExact: !0,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourdâ€™hui Ã ] LT",
        nextDay: "[Demain Ã ] LT",
        nextWeek: "dddd [Ã ] LT",
        lastDay: "[Hier Ã ] LT",
        lastWeek: "dddd [dernier Ã ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function(e, t) {
        switch (t) {
          default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
            return e + (1 === e ? "er" : "e");
          case "w":
              case "W":
              return e + (1 === e ? "re" : "e")
        }
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("fr-ch", {
      months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
      monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
      monthsParseExact: !0,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourdâ€™hui Ã ] LT",
        nextDay: "[Demain Ã ] LT",
        nextWeek: "dddd [Ã ] LT",
        lastDay: "[Hier Ã ] LT",
        lastWeek: "dddd [dernier Ã ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function(e, t) {
        switch (t) {
          default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
            return e + (1 === e ? "er" : "e");
          case "w":
              case "W":
              return e + (1 === e ? "re" : "e")
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    e.defineLocale("fy", {
      months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
      monthsShort: function(e, r) {
        return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsParseExact: !0,
      weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
      weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
      weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[hjoed om] LT",
        nextDay: "[moarn om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[juster om] LT",
        lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "oer %s",
        past: "%s lyn",
        s: "in pear sekonden",
        ss: "%d sekonden",
        m: "ien minÃºt",
        mm: "%d minuten",
        h: "ien oere",
        hh: "%d oeren",
        d: "ien dei",
        dd: "%d dagen",
        M: "ien moanne",
        MM: "%d moannen",
        y: "ien jier",
        yy: "%d jierren"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("gd", {
      months: ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
      monthsShort: ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
      monthsParseExact: !0,
      weekdays: ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
      weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
      weekdaysMin: ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[An-diugh aig] LT",
        nextDay: "[A-mÃ ireach aig] LT",
        nextWeek: "dddd [aig] LT",
        lastDay: "[An-dÃ¨ aig] LT",
        lastWeek: "dddd [seo chaidh] [aig] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ann an %s",
        past: "bho chionn %s",
        s: "beagan diogan",
        ss: "%d diogan",
        m: "mionaid",
        mm: "%d mionaidean",
        h: "uair",
        hh: "%d uairean",
        d: "latha",
        dd: "%d latha",
        M: "mÃ¬os",
        MM: "%d mÃ¬osan",
        y: "bliadhna",
        yy: "%d bliadhna"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
      ordinal: function(e) {
        return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("gl", {
      months: "xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
      monthsShort: "xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado".split("_"),
      weekdaysShort: "dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.".split("_"),
      weekdaysMin: "do_lu_ma_mÃ©_xo_ve_sÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY H:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
      },
      calendar: {
        sameDay: function() {
          return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
        },
        nextDay: function() {
          return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
        },
        nextWeek: function() {
          return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
        },
        lastDay: function() {
          return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
        },
        lastWeek: function() {
          return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: function(e) {
          return 0 === e.indexOf("un") ? "n" + e : "en " + e
        },
        past: "hai %s",
        s: "uns segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "unha hora",
        hh: "%d horas",
        d: "un dÃ­a",
        dd: "%d dÃ­as",
        M: "un mes",
        MM: "%d meses",
        y: "un ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        s: ["thodde secondanim", "thodde second"],
        ss: [e + " secondanim", e + " second"],
        m: ["eka mintan", "ek minute"],
        mm: [e + " mintanim", e + " mintam"],
        h: ["eka horan", "ek hor"],
        hh: [e + " horanim", e + " horam"],
        d: ["eka disan", "ek dis"],
        dd: [e + " disanim", e + " dis"],
        M: ["eka mhoinean", "ek mhoino"],
        MM: [e + " mhoineanim", e + " mhoine"],
        y: ["eka vorsan", "ek voros"],
        yy: [e + " vorsanim", e + " vorsam"]
      };
      return t ? i[n][0] : i[n][1]
    }
    e.defineLocale("gom-latn", {
      months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
      monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
      weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
      weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "A h:mm [vazta]",
        LTS: "A h:mm:ss [vazta]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [vazta]",
        LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
      },
      calendar: {
        sameDay: "[Aiz] LT",
        nextDay: "[Faleam] LT",
        nextWeek: "[Ieta to] dddd[,] LT",
        lastDay: "[Kal] LT",
        lastWeek: "[Fatlo] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s",
        past: "%s adim",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er)/,
      ordinal: function(e, t) {
        switch (t) {
          case "D":
            return e + "er";
          default:
          case "M":
          case "Q":
          case "DDD":
          case "d":
          case "w":
          case "W":
            return e
        }
      },
      week: {
        dow: 1,
        doy: 4
      },
      meridiemParse: /rati|sokalli|donparam|sanje/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à«§",
        2: "à«¨",
        3: "à«©",
        4: "à«ª",
        5: "à««",
        6: "à«¬",
        7: "à«­",
        8: "à«®",
        9: "à«¯",
        0: "à«¦"
      },
      n = {
        "à«§": "1",
        "à«¨": "2",
        "à«©": "3",
        "à«ª": "4",
        "à««": "5",
        "à«¬": "6",
        "à«­": "7",
        "à«®": "8",
        "à«¯": "9",
        "à«¦": "0"
      };
    e.defineLocale("gu", {
      months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"),
      monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"),
      monthsParseExact: !0,
      weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"),
      weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"),
      weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"),
      longDateFormat: {
        LT: "A h:mm àªµàª¾àª—à«àª¯à«‡",
        LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡",
        LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡"
      },
      calendar: {
        sameDay: "[àª†àªœ] LT",
        nextDay: "[àª•àª¾àª²à«‡] LT",
        nextWeek: "dddd, LT",
        lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT",
        lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s àª®àª¾",
        past: "%s àªªà«‡àª¹àª²àª¾",
        s: "àª…àª®à«àª• àªªàª³à«‹",
        ss: "%d àª¸à«‡àª•àª‚àª¡",
        m: "àªàª• àª®àª¿àª¨àª¿àªŸ",
        mm: "%d àª®àª¿àª¨àª¿àªŸ",
        h: "àªàª• àª•àª²àª¾àª•",
        hh: "%d àª•àª²àª¾àª•",
        d: "àªàª• àª¦àª¿àªµàª¸",
        dd: "%d àª¦àª¿àªµàª¸",
        M: "àªàª• àª®àª¹àª¿àª¨à«‹",
        MM: "%d àª®àª¹àª¿àª¨à«‹",
        y: "àªàª• àªµàª°à«àª·",
        yy: "%d àªµàª°à«àª·"
      },
      preparse: function(e) {
        return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "àª°àª¾àª¤" === t ? e < 4 ? e : e + 12 : "àª¸àªµàª¾àª°" === t ? e : "àª¬àªªà«‹àª°" === t ? e >= 10 ? e : e + 12 : "àª¸àª¾àª‚àªœ" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "àª°àª¾àª¤" : e < 10 ? "àª¸àªµàª¾àª°" : e < 17 ? "àª¬àªªà«‹àª°" : e < 20 ? "àª¸àª¾àª‚àªœ" : "àª°àª¾àª¤"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("he", {
      months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
      monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
      weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
      weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
      weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [×‘]MMMM YYYY",
        LLL: "D [×‘]MMMM YYYY HH:mm",
        LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[×”×™×•× ×‘Ö¾]LT",
        nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
        nextWeek: "dddd [×‘×©×¢×”] LT",
        lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
        lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "×‘×¢×•×“ %s",
        past: "×œ×¤× ×™ %s",
        s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
        ss: "%d ×©× ×™×•×ª",
        m: "×“×§×”",
        mm: "%d ×“×§×•×ª",
        h: "×©×¢×”",
        hh: function(e) {
          return 2 === e ? "×©×¢×ª×™×™×" : e + " ×©×¢×•×ª"
        },
        d: "×™×•×",
        dd: function(e) {
          return 2 === e ? "×™×•×ž×™×™×" : e + " ×™×ž×™×"
        },
        M: "×—×•×“×©",
        MM: function(e) {
          return 2 === e ? "×—×•×“×©×™×™×" : e + " ×—×•×“×©×™×"
        },
        y: "×©× ×”",
        yy: function(e) {
          return 2 === e ? "×©× ×ª×™×™×" : e % 10 == 0 && 10 !== e ? e + " ×©× ×”" : e + " ×©× ×™×"
        }
      },
      meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
      isPM: function(e) {
        return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 5 ? "×œ×¤× ×•×ª ×‘×•×§×¨" : e < 10 ? "×‘×‘×•×§×¨" : e < 12 ? n ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : e < 18 ? n ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à¥§",
        2: "à¥¨",
        3: "à¥©",
        4: "à¥ª",
        5: "à¥«",
        6: "à¥¬",
        7: "à¥­",
        8: "à¥®",
        9: "à¥¯",
        0: "à¥¦"
      },
      n = {
        "à¥§": "1",
        "à¥¨": "2",
        "à¥©": "3",
        "à¥ª": "4",
        "à¥«": "5",
        "à¥¬": "6",
        "à¥­": "7",
        "à¥®": "8",
        "à¥¯": "9",
        "à¥¦": "0"
      };
    e.defineLocale("hi", {
      months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
      monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
      monthsParseExact: !0,
      weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
      weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
      weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
      longDateFormat: {
        LT: "A h:mm à¤¬à¤œà¥‡",
        LTS: "A h:mm:ss à¤¬à¤œà¥‡",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
        LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
      },
      calendar: {
        sameDay: "[à¤†à¤œ] LT",
        nextDay: "[à¤•à¤²] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à¤•à¤²] LT",
        lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à¤®à¥‡à¤‚",
        past: "%s à¤ªà¤¹à¤²à¥‡",
        s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
        ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡",
        m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
        mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
        h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
        hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
        d: "à¤à¤• à¤¦à¤¿à¤¨",
        dd: "%d à¤¦à¤¿à¤¨",
        M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
        MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
        y: "à¤à¤• à¤µà¤°à¥à¤·",
        yy: "%d à¤µà¤°à¥à¤·"
      },
      preparse: function(e) {
        return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === t ? e < 4 ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === t ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === t ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à¤°à¤¾à¤¤" : e < 10 ? "à¤¸à¥à¤¬à¤¹" : e < 17 ? "à¤¦à¥‹à¤ªà¤¹à¤°" : e < 20 ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      var r = e + " ";
      switch (n) {
        case "ss":
          return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
        case "m":
          return t ? "jedna minuta" : "jedne minute";
        case "mm":
          return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
        case "h":
          return t ? "jedan sat" : "jednog sata";
        case "hh":
          return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
        case "dd":
          return r += 1 === e ? "dan" : "dana";
        case "MM":
          return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
        case "yy":
          return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
    }
    e.defineLocale("hr", {
      months: {
        format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
        standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
      },
      monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juÄer u] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
              return "[proÅ¡lu] dddd [u] LT";
            case 6:
              return "[proÅ¡le] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[proÅ¡li] dddd [u] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "dan",
        dd: t,
        M: "mjesec",
        MM: t,
        y: "godinu",
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");

    function n(e, t, n, r) {
      var i = e;
      switch (n) {
        case "s":
          return r || t ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
        case "ss":
          return i + (r || t) ? " mÃ¡sodperc" : " mÃ¡sodperce";
        case "m":
          return "egy" + (r || t ? " perc" : " perce");
        case "mm":
          return i + (r || t ? " perc" : " perce");
        case "h":
          return "egy" + (r || t ? " Ã³ra" : " Ã³rÃ¡ja");
        case "hh":
          return i + (r || t ? " Ã³ra" : " Ã³rÃ¡ja");
        case "d":
          return "egy" + (r || t ? " nap" : " napja");
        case "dd":
          return i + (r || t ? " nap" : " napja");
        case "M":
          return "egy" + (r || t ? " hÃ³nap" : " hÃ³napja");
        case "MM":
          return i + (r || t ? " hÃ³nap" : " hÃ³napja");
        case "y":
          return "egy" + (r || t ? " Ã©v" : " Ã©ve");
        case "yy":
          return i + (r || t ? " Ã©v" : " Ã©ve")
      }
      return ""
    }

    function r(e) {
      return (e ? "" : "[mÃºlt] ") + "[" + t[this.day()] + "] LT[-kor]"
    }
    e.defineLocale("hu", {
      months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
      monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
      weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
      weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      },
      meridiemParse: /de|du/i,
      isPM: function(e) {
        return "u" === e.charAt(1).toLowerCase()
      },
      meridiem: function(e, t, n) {
        return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function() {
          return r.call(this, !0)
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function() {
          return r.call(this, !1)
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s mÃºlva",
        past: "%s",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("hy-am", {
      months: {
        format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
        standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
      },
      monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
      weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
      weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
      weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY Õ©.",
        LLL: "D MMMM YYYY Õ©., HH:mm",
        LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
      },
      calendar: {
        sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
        nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
        lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
        nextWeek: function() {
          return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
        },
        lastWeek: function() {
          return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s Õ°Õ¥Õ¿Õ¸",
        past: "%s Õ¡Õ¼Õ¡Õ»",
        s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
        ss: "%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
        m: "Ö€Õ¸ÕºÕ¥",
        mm: "%d Ö€Õ¸ÕºÕ¥",
        h: "ÕªÕ¡Õ´",
        hh: "%d ÕªÕ¡Õ´",
        d: "Ö…Ö€",
        dd: "%d Ö…Ö€",
        M: "Õ¡Õ´Õ«Õ½",
        MM: "%d Õ¡Õ´Õ«Õ½",
        y: "Õ¿Õ¡Ö€Õ«",
        yy: "%d Õ¿Õ¡Ö€Õ«"
      },
      meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
      isPM: function(e) {
        return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)
      },
      meridiem: function(e) {
        return e < 4 ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : e < 12 ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : e < 17 ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
      },
      dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
      ordinal: function(e, t) {
        switch (t) {
          case "DDD":
          case "w":
          case "W":
          case "DDDo":
            return 1 === e ? e + "-Õ«Õ¶" : e + "-Ö€Õ¤";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("id", {
      months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
      weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /pagi|siang|sore|malam/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
      },
      calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Besok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kemarin pukul] LT",
        lastWeek: "dddd [lalu pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lalu",
        s: "beberapa detik",
        ss: "%d detik",
        m: "semenit",
        mm: "%d menit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e) {
      return e % 100 == 11 || e % 10 != 1
    }

    function n(e, n, r, i) {
      var a = e + " ";
      switch (r) {
        case "s":
          return n || i ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
        case "ss":
          return t(e) ? a + (n || i ? "sekÃºndur" : "sekÃºndum") : a + "sekÃºnda";
        case "m":
          return n ? "mÃ­nÃºta" : "mÃ­nÃºtu";
        case "mm":
          return t(e) ? a + (n || i ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : n ? a + "mÃ­nÃºta" : a + "mÃ­nÃºtu";
        case "hh":
          return t(e) ? a + (n || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
        case "d":
          return n ? "dagur" : i ? "dag" : "degi";
        case "dd":
          return t(e) ? n ? a + "dagar" : a + (i ? "daga" : "dÃ¶gum") : n ? a + "dagur" : a + (i ? "dag" : "degi");
        case "M":
          return n ? "mÃ¡nuÃ°ur" : i ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
        case "MM":
          return t(e) ? n ? a + "mÃ¡nuÃ°ir" : a + (i ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : n ? a + "mÃ¡nuÃ°ur" : a + (i ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
        case "y":
          return n || i ? "Ã¡r" : "Ã¡ri";
        case "yy":
          return t(e) ? a + (n || i ? "Ã¡r" : "Ã¡rum") : a + (n || i ? "Ã¡r" : "Ã¡ri")
      }
    }
    e.defineLocale("is", {
      months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
      weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
      weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
      weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
      },
      calendar: {
        sameDay: "[Ã­ dag kl.] LT",
        nextDay: "[Ã¡ morgun kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[Ã­ gÃ¦r kl.] LT",
        lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "eftir %s",
        past: "fyrir %s sÃ­Ã°an",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: "klukkustund",
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("it", {
      months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
      monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
      weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
      weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
      weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Oggi alle] LT",
        nextDay: "[Domani alle] LT",
        nextWeek: "dddd [alle] LT",
        lastDay: "[Ieri alle] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[la scorsa] dddd [alle] LT";
            default:
              return "[lo scorso] dddd [alle] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: function(e) {
          return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
        },
        past: "%s fa",
        s: "alcuni secondi",
        ss: "%d secondi",
        m: "un minuto",
        mm: "%d minuti",
        h: "un'ora",
        hh: "%d ore",
        d: "un giorno",
        dd: "%d giorni",
        M: "un mese",
        MM: "%d mesi",
        y: "un anno",
        yy: "%d anni"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ja", {
      months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
      monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
      weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
      weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
      weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYYå¹´MæœˆDæ—¥",
        LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm",
        l: "YYYY/MM/DD",
        ll: "YYYYå¹´MæœˆDæ—¥",
        lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm"
      },
      meridiemParse: /åˆå‰|åˆå¾Œ/i,
      isPM: function(e) {
        return "åˆå¾Œ" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "åˆå‰" : "åˆå¾Œ"
      },
      calendar: {
        sameDay: "[ä»Šæ—¥] LT",
        nextDay: "[æ˜Žæ—¥] LT",
        nextWeek: function(e) {
          return e.week() < this.week() ? "[æ¥é€±]dddd LT" : "dddd LT"
        },
        lastDay: "[æ˜¨æ—¥] LT",
        lastWeek: function(e) {
          return this.week() < e.week() ? "[å…ˆé€±]dddd LT" : "dddd LT"
        },
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "æ—¥";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%så¾Œ",
        past: "%så‰",
        s: "æ•°ç§’",
        ss: "%dç§’",
        m: "1åˆ†",
        mm: "%dåˆ†",
        h: "1æ™‚é–“",
        hh: "%dæ™‚é–“",
        d: "1æ—¥",
        dd: "%dæ—¥",
        M: "1ãƒ¶æœˆ",
        MM: "%dãƒ¶æœˆ",
        y: "1å¹´",
        yy: "%då¹´"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("jv", {
      months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
      weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
      weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /enjing|siyang|sonten|ndalu/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
      },
      calendar: {
        sameDay: "[Dinten puniko pukul] LT",
        nextDay: "[Mbenjang pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kala wingi pukul] LT",
        lastWeek: "dddd [kepengker pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "wonten ing %s",
        past: "%s ingkang kepengker",
        s: "sawetawis detik",
        ss: "%d detik",
        m: "setunggal menit",
        mm: "%d menit",
        h: "setunggal jam",
        hh: "%d jam",
        d: "sedinten",
        dd: "%d dinten",
        M: "sewulan",
        MM: "%d wulan",
        y: "setaun",
        yy: "%d taun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ka", {
      months: {
        standalone: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
        format: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")
      },
      monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
      weekdays: {
        standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
        format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
        isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
      },
      weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
      weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
        nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
        lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
        nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
        lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
        sameElse: "L"
      },
      relativeTime: {
        future: function(e) {
          return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(e) ? e.replace(/áƒ˜$/, "áƒ¨áƒ˜") : e + "áƒ¨áƒ˜"
        },
        past: function(e) {
          return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e) ? e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(e) ? e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0
        },
        s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
        ss: "%d áƒ¬áƒáƒ›áƒ˜",
        m: "áƒ¬áƒ£áƒ—áƒ˜",
        mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
        h: "áƒ¡áƒáƒáƒ—áƒ˜",
        hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
        d: "áƒ“áƒ¦áƒ”",
        dd: "%d áƒ“áƒ¦áƒ”",
        M: "áƒ—áƒ•áƒ”",
        MM: "%d áƒ—áƒ•áƒ”",
        y: "áƒ¬áƒ”áƒšáƒ˜",
        yy: "%d áƒ¬áƒ”áƒšáƒ˜"
      },
      dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
      ordinal: function(e) {
        return 0 === e ? e : 1 === e ? e + "-áƒšáƒ˜" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "áƒ›áƒ”-" + e : e + "-áƒ”"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      0: "-ÑˆÑ–",
      1: "-ÑˆÑ–",
      2: "-ÑˆÑ–",
      3: "-ÑˆÑ–",
      4: "-ÑˆÑ–",
      5: "-ÑˆÑ–",
      6: "-ÑˆÑ‹",
      7: "-ÑˆÑ–",
      8: "-ÑˆÑ–",
      9: "-ÑˆÑ‹",
      10: "-ÑˆÑ‹",
      20: "-ÑˆÑ‹",
      30: "-ÑˆÑ‹",
      40: "-ÑˆÑ‹",
      50: "-ÑˆÑ–",
      60: "-ÑˆÑ‹",
      70: "-ÑˆÑ–",
      80: "-ÑˆÑ–",
      90: "-ÑˆÑ‹",
      100: "-ÑˆÑ–"
    };
    e.defineLocale("kk", {
      months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
      monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
      weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
      weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
      weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
        nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
        nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
        lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
        lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
        past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
        s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
        ss: "%d ÑÐµÐºÑƒÐ½Ð´",
        m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
        mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
        h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
        hh: "%d ÑÐ°Ò“Ð°Ñ‚",
        d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
        dd: "%d ÐºÒ¯Ð½",
        M: "Ð±Ñ–Ñ€ Ð°Ð¹",
        MM: "%d Ð°Ð¹",
        y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
        yy: "%d Ð¶Ñ‹Ð»"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
      ordinal: function(e) {
        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "áŸ¡",
        2: "áŸ¢",
        3: "áŸ£",
        4: "áŸ¤",
        5: "áŸ¥",
        6: "áŸ¦",
        7: "áŸ§",
        8: "áŸ¨",
        9: "áŸ©",
        0: "áŸ "
      },
      n = {
        "áŸ¡": "1",
        "áŸ¢": "2",
        "áŸ£": "3",
        "áŸ¤": "4",
        "áŸ¥": "5",
        "áŸ¦": "6",
        "áŸ§": "7",
        "áŸ¨": "8",
        "áŸ©": "9",
        "áŸ ": "0"
      };
    e.defineLocale("km", {
      months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
      monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
      weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
      weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
      weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
      isPM: function(e) {
        return "áž›áŸ’áž„áž¶áž…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…"
      },
      calendar: {
        sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
        nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
        nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
        lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
        lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sáž‘áŸ€áž",
        past: "%sáž˜áž»áž“",
        s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
        ss: "%d ážœáž·áž“áž¶áž‘áž¸",
        m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
        mm: "%d áž“áž¶áž‘áž¸",
        h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
        hh: "%d áž˜áŸ‰áŸ„áž„",
        d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
        dd: "%d ážáŸ’áž„áŸƒ",
        M: "áž˜áž½áž™ážáŸ‚",
        MM: "%d ážáŸ‚",
        y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
        yy: "%d áž†áŸ’áž“áž¶áŸ†"
      },
      dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
      ordinal: "áž‘áž¸%d",
      preparse: function(e) {
        return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à³§",
        2: "à³¨",
        3: "à³©",
        4: "à³ª",
        5: "à³«",
        6: "à³¬",
        7: "à³­",
        8: "à³®",
        9: "à³¯",
        0: "à³¦"
      },
      n = {
        "à³§": "1",
        "à³¨": "2",
        "à³©": "3",
        "à³ª": "4",
        "à³«": "5",
        "à³¬": "6",
        "à³­": "7",
        "à³®": "8",
        "à³¯": "9",
        "à³¦": "0"
      };
    e.defineLocale("kn", {
      months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
      monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
      monthsParseExact: !0,
      weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
      weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
      weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[à²‡à²‚à²¦à³] LT",
        nextDay: "[à²¨à²¾à²³à³†] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
        lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à²¨à²‚à²¤à²°",
        past: "%s à²¹à²¿à²‚à²¦à³†",
        s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
        ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
        m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
        mm: "%d à²¨à²¿à²®à²¿à²·",
        h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
        hh: "%d à²—à²‚à²Ÿà³†",
        d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
        dd: "%d à²¦à²¿à²¨",
        M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
        MM: "%d à²¤à²¿à²‚à²—à²³à³",
        y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
        yy: "%d à²µà²°à³à²·"
      },
      preparse: function(e) {
        return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === t ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === t ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === t ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
      ordinal: function(e) {
        return e + "à²¨à³†à³•"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ko", {
      months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
      monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
      weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
      weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
      weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYYë…„ MMMM Dì¼",
        LLL: "YYYYë…„ MMMM Dì¼ A h:mm",
        LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
        l: "YYYY.MM.DD.",
        ll: "YYYYë…„ MMMM Dì¼",
        lll: "YYYYë…„ MMMM Dì¼ A h:mm",
        llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm"
      },
      calendar: {
        sameDay: "ì˜¤ëŠ˜ LT",
        nextDay: "ë‚´ì¼ LT",
        nextWeek: "dddd LT",
        lastDay: "ì–´ì œ LT",
        lastWeek: "ì§€ë‚œì£¼ dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s í›„",
        past: "%s ì „",
        s: "ëª‡ ì´ˆ",
        ss: "%dì´ˆ",
        m: "1ë¶„",
        mm: "%dë¶„",
        h: "í•œ ì‹œê°„",
        hh: "%dì‹œê°„",
        d: "í•˜ë£¨",
        dd: "%dì¼",
        M: "í•œ ë‹¬",
        MM: "%dë‹¬",
        y: "ì¼ ë…„",
        yy: "%dë…„"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "ì¼";
          case "M":
            return e + "ì›”";
          case "w":
          case "W":
            return e + "ì£¼";
          default:
            return e
        }
      },
      meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
      isPM: function(e) {
        return "ì˜¤í›„" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      0: "-Ñ‡Ò¯",
      1: "-Ñ‡Ð¸",
      2: "-Ñ‡Ð¸",
      3: "-Ñ‡Ò¯",
      4: "-Ñ‡Ò¯",
      5: "-Ñ‡Ð¸",
      6: "-Ñ‡Ñ‹",
      7: "-Ñ‡Ð¸",
      8: "-Ñ‡Ð¸",
      9: "-Ñ‡Ñƒ",
      10: "-Ñ‡Ñƒ",
      20: "-Ñ‡Ñ‹",
      30: "-Ñ‡Ñƒ",
      40: "-Ñ‡Ñ‹",
      50: "-Ñ‡Ò¯",
      60: "-Ñ‡Ñ‹",
      70: "-Ñ‡Ð¸",
      80: "-Ñ‡Ð¸",
      90: "-Ñ‡Ñƒ",
      100: "-Ñ‡Ò¯"
    };
    e.defineLocale("ky", {
      months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
      monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
      weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
      weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
      weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
        nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
        nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
        lastDay: "[ÐšÐµÑ‡Ðµ ÑÐ°Ð°Ñ‚] LT",
        lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
        past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
        s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
        ss: "%d ÑÐµÐºÑƒÐ½Ð´",
        m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
        mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
        h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
        hh: "%d ÑÐ°Ð°Ñ‚",
        d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
        dd: "%d ÐºÒ¯Ð½",
        M: "Ð±Ð¸Ñ€ Ð°Ð¹",
        MM: "%d Ð°Ð¹",
        y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
        yy: "%d Ð¶Ñ‹Ð»"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
      ordinal: function(e) {
        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eng Minutt", "enger Minutt"],
        h: ["eng Stonn", "enger Stonn"],
        d: ["een Dag", "engem Dag"],
        M: ["ee Mount", "engem Mount"],
        y: ["ee Joer", "engem Joer"]
      };
      return t ? i[n][0] : i[n][1]
    }

    function n(e) {
      if (e = parseInt(e, 10), isNaN(e)) return !1;
      if (e < 0) return !0;
      if (e < 10) return 4 <= e && e <= 7;
      if (e < 100) {
        var t = e % 10;
        return n(0 === t ? e / 10 : t)
      }
      if (e < 1e4) {
        for (; e >= 10;) e /= 10;
        return n(e)
      }
      return n(e /= 1e3)
    }
    e.defineLocale("lb", {
      months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
      weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm [Auer]",
        LTS: "H:mm:ss [Auer]",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm [Auer]",
        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
      },
      calendar: {
        sameDay: "[Haut um] LT",
        sameElse: "L",
        nextDay: "[Muer um] LT",
        nextWeek: "dddd [um] LT",
        lastDay: "[GÃ«schter um] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 2:
            case 4:
              return "[Leschten] dddd [um] LT";
            default:
              return "[Leschte] dddd [um] LT"
          }
        }
      },
      relativeTime: {
        future: function(e) {
          return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
        },
        past: function(e) {
          return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
        },
        s: "e puer Sekonnen",
        ss: "%d Sekonnen",
        m: t,
        mm: "%d Minutten",
        h: t,
        hh: "%d Stonnen",
        d: t,
        dd: "%d Deeg",
        M: t,
        MM: "%d MÃ©int",
        y: t,
        yy: "%d Joer"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("lo", {
      months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
      monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
      weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
      weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
      weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
      isPM: function(e) {
        return "àº•àº­àº™à»àº¥àº‡" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
      },
      calendar: {
        sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
        nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
        nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
        lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
        lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "àº­àºµàº %s",
        past: "%sàºœà»ˆàº²àº™àº¡àº²",
        s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
        ss: "%d àº§àº´àº™àº²àº—àºµ",
        m: "1 àº™àº²àº—àºµ",
        mm: "%d àº™àº²àº—àºµ",
        h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
        hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
        d: "1 àº¡àº·à»‰",
        dd: "%d àº¡àº·à»‰",
        M: "1 à»€àº”àº·àº­àº™",
        MM: "%d à»€àº”àº·àº­àº™",
        y: "1 àº›àºµ",
        yy: "%d àº›àºµ"
      },
      dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
      ordinal: function(e) {
        return "àº—àºµà»ˆ" + e
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      ss: "sekundÄ—_sekundÅ¾iÅ³_sekundes",
      m: "minutÄ—_minutÄ—s_minutÄ™",
      mm: "minutÄ—s_minuÄiÅ³_minutes",
      h: "valanda_valandos_valandÄ…",
      hh: "valandos_valandÅ³_valandas",
      d: "diena_dienos_dienÄ…",
      dd: "dienos_dienÅ³_dienas",
      M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
      MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
      y: "metai_metÅ³_metus",
      yy: "metai_metÅ³_metus"
    };

    function n(e, t, n, r) {
      return t ? i(n)[0] : r ? i(n)[1] : i(n)[2]
    }

    function r(e) {
      return e % 10 == 0 || e > 10 && e < 20
    }

    function i(e) {
      return t[e].split("_")
    }

    function a(e, t, a, s) {
      var o = e + " ";
      return 1 === e ? o + n(0, t, a[0], s) : t ? o + (r(e) ? i(a)[1] : i(a)[0]) : s ? o + i(a)[1] : o + (r(e) ? i(a)[1] : i(a)[2])
    }
    e.defineLocale("lt", {
      months: {
        format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
        standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_"),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
      },
      monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
      weekdays: {
        format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
        standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
        isFormat: /dddd HH:mm/
      },
      weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
      weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY [m.] MMMM D [d.]",
        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
        l: "YYYY-MM-DD",
        ll: "YYYY [m.] MMMM D [d.]",
        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
      },
      calendar: {
        sameDay: "[Å iandien] LT",
        nextDay: "[Rytoj] LT",
        nextWeek: "dddd LT",
        lastDay: "[Vakar] LT",
        lastWeek: "[PraÄ—jusÄ¯] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "po %s",
        past: "prieÅ¡ %s",
        s: function(e, t, n, r) {
          return t ? "kelios sekundÄ—s" : r ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
        },
        ss: a,
        m: n,
        mm: a,
        h: n,
        hh: a,
        d: n,
        dd: a,
        M: n,
        MM: a,
        y: n,
        yy: a
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal: function(e) {
        return e + "-oji"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"),
      m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
      mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
      h: "stundas_stundÄm_stunda_stundas".split("_"),
      hh: "stundas_stundÄm_stunda_stundas".split("_"),
      d: "dienas_dienÄm_diena_dienas".split("_"),
      dd: "dienas_dienÄm_diena_dienas".split("_"),
      M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
      MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
      y: "gada_gadiem_gads_gadi".split("_"),
      yy: "gada_gadiem_gads_gadi".split("_")
    };

    function n(e, t, n) {
      return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
    }

    function r(e, r, i) {
      return e + " " + n(t[i], e, r)
    }

    function i(e, r, i) {
      return n(t[i], e, r)
    }
    e.defineLocale("lv", {
      months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
      weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
      weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY.",
        LL: "YYYY. [gada] D. MMMM",
        LLL: "YYYY. [gada] D. MMMM, HH:mm",
        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
      },
      calendar: {
        sameDay: "[Å odien pulksten] LT",
        nextDay: "[RÄ«t pulksten] LT",
        nextWeek: "dddd [pulksten] LT",
        lastDay: "[Vakar pulksten] LT",
        lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "pÄ“c %s",
        past: "pirms %s",
        s: function(e, t) {
          return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
        },
        ss: r,
        m: i,
        mm: r,
        h: i,
        hh: r,
        d: i,
        dd: r,
        M: i,
        MM: r,
        y: i,
        yy: r
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      words: {
        ss: ["sekund", "sekunda", "sekundi"],
        m: ["jedan minut", "jednog minuta"],
        mm: ["minut", "minuta", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        dd: ["dan", "dana", "dana"],
        MM: ["mjesec", "mjeseca", "mjeseci"],
        yy: ["godina", "godine", "godina"]
      },
      correctGrammaticalCase: function(e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
      },
      translate: function(e, n, r) {
        var i = t.words[r];
        return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
      }
    };
    e.defineLocale("me", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sjutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juÄe u] LT",
        lastWeek: function() {
          return ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "nekoliko sekundi",
        ss: t.translate,
        m: t.translate,
        mm: t.translate,
        h: t.translate,
        hh: t.translate,
        d: "dan",
        dd: t.translate,
        M: "mjesec",
        MM: t.translate,
        y: "godinu",
        yy: t.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("mi", {
      months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"),
      monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
      monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
      weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"),
      weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
      weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [i] HH:mm",
        LLLL: "dddd, D MMMM YYYY [i] HH:mm"
      },
      calendar: {
        sameDay: "[i teie mahana, i] LT",
        nextDay: "[apopo i] LT",
        nextWeek: "dddd [i] LT",
        lastDay: "[inanahi i] LT",
        lastWeek: "dddd [whakamutunga i] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "i roto i %s",
        past: "%s i mua",
        s: "te hÄ“kona ruarua",
        ss: "%d hÄ“kona",
        m: "he meneti",
        mm: "%d meneti",
        h: "te haora",
        hh: "%d haora",
        d: "he ra",
        dd: "%d ra",
        M: "he marama",
        MM: "%d marama",
        y: "he tau",
        yy: "%d tau"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("mk", {
      months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
      monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
      weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
      weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
      weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
        nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
        nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
        lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Ð¿Ð¾ÑÐ»Ðµ %s",
        past: "Ð¿Ñ€ÐµÐ´ %s",
        s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
        ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
        m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
        mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
        h: "Ñ‡Ð°Ñ",
        hh: "%d Ñ‡Ð°ÑÐ°",
        d: "Ð´ÐµÐ½",
        dd: "%d Ð´ÐµÐ½Ð°",
        M: "Ð¼ÐµÑÐµÑ†",
        MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
        y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
        yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
      ordinal: function(e) {
        var t = e % 10,
          n = e % 100;
        return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ml", {
      months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
      monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
      monthsParseExact: !0,
      weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
      weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
      weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
      longDateFormat: {
        LT: "A h:mm -à´¨àµ",
        LTS: "A h:mm:ss -à´¨àµ",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
        LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
      },
      calendar: {
        sameDay: "[à´‡à´¨àµà´¨àµ] LT",
        nextDay: "[à´¨à´¾à´³àµ†] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
        lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à´•à´´à´¿à´žàµà´žàµ",
        past: "%s à´®àµàµ»à´ªàµ",
        s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
        ss: "%d à´¸àµ†à´•àµà´•àµ»à´¡àµ",
        m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
        mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
        h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
        hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
        d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
        dd: "%d à´¦à´¿à´µà´¸à´‚",
        M: "à´’à´°àµ à´®à´¾à´¸à´‚",
        MM: "%d à´®à´¾à´¸à´‚",
        y: "à´’à´°àµ à´µàµ¼à´·à´‚",
        yy: "%d à´µàµ¼à´·à´‚"
      },
      meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à´°à´¾à´¤àµà´°à´¿" === t && e >= 4 || "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" === t || "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" === t ? e + 12 : e
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à´°à´¾à´¤àµà´°à´¿" : e < 12 ? "à´°à´¾à´µà´¿à´²àµ†" : e < 17 ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : e < 20 ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      switch (n) {
        case "s":
          return t ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
        case "ss":
          return e + (t ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
        case "m":
        case "mm":
          return e + (t ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
        case "h":
        case "hh":
          return e + (t ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
        case "d":
        case "dd":
          return e + (t ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
        case "M":
        case "MM":
          return e + (t ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
        case "y":
        case "yy":
          return e + (t ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
        default:
          return e
      }
    }
    e.defineLocale("mn", {
      months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
      monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
      monthsParseExact: !0,
      weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
      weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
      weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D",
        LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm",
        LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm"
      },
      meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
      isPM: function(e) {
        return "Ò®Ð¥" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Ò®Ó¨" : "Ò®Ð¥"
      },
      calendar: {
        sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT",
        nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT",
        nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT",
        lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT",
        lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s Ð´Ð°Ñ€Ð°Ð°",
        past: "%s Ó©Ð¼Ð½Ó©",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + " Ó©Ð´Ó©Ñ€";
          default:
            return e
        }
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à¥§",
        2: "à¥¨",
        3: "à¥©",
        4: "à¥ª",
        5: "à¥«",
        6: "à¥¬",
        7: "à¥­",
        8: "à¥®",
        9: "à¥¯",
        0: "à¥¦"
      },
      n = {
        "à¥§": "1",
        "à¥¨": "2",
        "à¥©": "3",
        "à¥ª": "4",
        "à¥«": "5",
        "à¥¬": "6",
        "à¥­": "7",
        "à¥®": "8",
        "à¥¯": "9",
        "à¥¦": "0"
      };

    function r(e, t, n, r) {
      var i = "";
      if (t) switch (n) {
        case "s":
          i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
          break;
        case "ss":
          i = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
          break;
        case "m":
          i = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
          break;
        case "mm":
          i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
          break;
        case "h":
          i = "à¤à¤• à¤¤à¤¾à¤¸";
          break;
        case "hh":
          i = "%d à¤¤à¤¾à¤¸";
          break;
        case "d":
          i = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
          break;
        case "dd":
          i = "%d à¤¦à¤¿à¤µà¤¸";
          break;
        case "M":
          i = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
          break;
        case "MM":
          i = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
          break;
        case "y":
          i = "à¤à¤• à¤µà¤°à¥à¤·";
          break;
        case "yy":
          i = "%d à¤µà¤°à¥à¤·à¥‡"
      } else switch (n) {
        case "s":
          i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
          break;
        case "ss":
          i = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
          break;
        case "m":
          i = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
          break;
        case "mm":
          i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
          break;
        case "h":
          i = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
          break;
        case "hh":
          i = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
          break;
        case "d":
          i = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
          break;
        case "dd":
          i = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
          break;
        case "M":
          i = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
          break;
        case "MM":
          i = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
          break;
        case "y":
          i = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
          break;
        case "yy":
          i = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
      }
      return i.replace(/%d/i, e)
    }
    e.defineLocale("mr", {
      months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
      monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
      monthsParseExact: !0,
      weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
      weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
      weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
      longDateFormat: {
        LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
        LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
        LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
      },
      calendar: {
        sameDay: "[à¤†à¤œ] LT",
        nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à¤•à¤¾à¤²] LT",
        lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sà¤®à¤§à¥à¤¯à¥‡",
        past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
        s: r,
        ss: r,
        m: r,
        mm: r,
        h: r,
        hh: r,
        d: r,
        dd: r,
        M: r,
        MM: r,
        y: r,
        yy: r
      },
      preparse: function(e) {
        return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? e < 4 ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : e < 10 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ms", {
      months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
      weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
      weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
      weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
      },
      calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Esok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kelmarin pukul] LT",
        lastWeek: "dddd [lepas pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lepas",
        s: "beberapa saat",
        ss: "%d saat",
        m: "seminit",
        mm: "%d minit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ms-my", {
      months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
      weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
      weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
      weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
      },
      calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Esok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kelmarin pukul] LT",
        lastWeek: "dddd [lepas pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lepas",
        s: "beberapa saat",
        ss: "%d saat",
        m: "seminit",
        mm: "%d minit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("mt", {
      months: "Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru".split("_"),
      monthsShort: "Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹".split("_"),
      weekdays: "Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt".split("_"),
      weekdaysShort: "Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib".split("_"),
      weekdaysMin: "Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Illum fil-]LT",
        nextDay: "[GÄ§ada fil-]LT",
        nextWeek: "dddd [fil-]LT",
        lastDay: "[Il-bieraÄ§ fil-]LT",
        lastWeek: "dddd [li gÄ§adda] [fil-]LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "fâ€™ %s",
        past: "%s ilu",
        s: "ftit sekondi",
        ss: "%d sekondi",
        m: "minuta",
        mm: "%d minuti",
        h: "siegÄ§a",
        hh: "%d siegÄ§at",
        d: "Ä¡urnata",
        dd: "%d Ä¡ranet",
        M: "xahar",
        MM: "%d xhur",
        y: "sena",
        yy: "%d sni"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "á",
        2: "á‚",
        3: "áƒ",
        4: "á„",
        5: "á…",
        6: "á†",
        7: "á‡",
        8: "áˆ",
        9: "á‰",
        0: "á€"
      },
      n = {
        "á": "1",
        "á‚": "2",
        "áƒ": "3",
        "á„": "4",
        "á…": "5",
        "á†": "6",
        "á‡": "7",
        "áˆ": "8",
        "á‰": "9",
        "á€": "0"
      };
    e.defineLocale("my", {
      months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
      monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
      weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
      weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
      weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
        nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
        nextWeek: "dddd LT [á€™á€¾á€¬]",
        lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
        lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
        sameElse: "L"
      },
      relativeTime: {
        future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
        past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
        s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
        ss: "%d á€…á€€á€¹á€€á€”á€·á€º",
        m: "á€á€…á€ºá€™á€­á€”á€…á€º",
        mm: "%d á€™á€­á€”á€…á€º",
        h: "á€á€…á€ºá€”á€¬á€›á€®",
        hh: "%d á€”á€¬á€›á€®",
        d: "á€á€…á€ºá€›á€€á€º",
        dd: "%d á€›á€€á€º",
        M: "á€á€…á€ºá€œ",
        MM: "%d á€œ",
        y: "á€á€…á€ºá€”á€¾á€…á€º",
        yy: "%d á€”á€¾á€…á€º"
      },
      preparse: function(e) {
        return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("nb", {
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
      monthsParseExact: !0,
      weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
      weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
      weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[i gÃ¥r kl.] LT",
        lastWeek: "[forrige] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "noen sekunder",
        ss: "%d sekunder",
        m: "ett minutt",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dager",
        M: "en mÃ¥ned",
        MM: "%d mÃ¥neder",
        y: "ett Ã¥r",
        yy: "%d Ã¥r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à¥§",
        2: "à¥¨",
        3: "à¥©",
        4: "à¥ª",
        5: "à¥«",
        6: "à¥¬",
        7: "à¥­",
        8: "à¥®",
        9: "à¥¯",
        0: "à¥¦"
      },
      n = {
        "à¥§": "1",
        "à¥¨": "2",
        "à¥©": "3",
        "à¥ª": "4",
        "à¥«": "5",
        "à¥¬": "6",
        "à¥­": "7",
        "à¥®": "8",
        "à¥¯": "9",
        "à¥¦": "0"
      };
    e.defineLocale("ne", {
      months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
      monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
      monthsParseExact: !0,
      weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
      weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
      weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
        LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
        LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
      },
      preparse: function(e) {
        return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
      },
      calendar: {
        sameDay: "[à¤†à¤œ] LT",
        nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
        nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
        lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
        lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sà¤®à¤¾",
        past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
        s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
        ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
        m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
        mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
        h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
        hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
        d: "à¤à¤• à¤¦à¤¿à¤¨",
        dd: "%d à¤¦à¤¿à¤¨",
        M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
        MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
        y: "à¤à¤• à¤¬à¤°à¥à¤·",
        yy: "%d à¤¬à¤°à¥à¤·"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    e.defineLocale("nl", {
      months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
      monthsShort: function(e, r) {
        return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
      weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
      weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[vandaag om] LT",
        nextDay: "[morgen om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[gisteren om] LT",
        lastWeek: "[afgelopen] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "over %s",
        past: "%s geleden",
        s: "een paar seconden",
        ss: "%d seconden",
        m: "Ã©Ã©n minuut",
        mm: "%d minuten",
        h: "Ã©Ã©n uur",
        hh: "%d uur",
        d: "Ã©Ã©n dag",
        dd: "%d dagen",
        M: "Ã©Ã©n maand",
        MM: "%d maanden",
        y: "Ã©Ã©n jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    e.defineLocale("nl-be", {
      months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
      monthsShort: function(e, r) {
        return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
      weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
      weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[vandaag om] LT",
        nextDay: "[morgen om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[gisteren om] LT",
        lastWeek: "[afgelopen] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "over %s",
        past: "%s geleden",
        s: "een paar seconden",
        ss: "%d seconden",
        m: "Ã©Ã©n minuut",
        mm: "%d minuten",
        h: "Ã©Ã©n uur",
        hh: "%d uur",
        d: "Ã©Ã©n dag",
        dd: "%d dagen",
        M: "Ã©Ã©n maand",
        MM: "%d maanden",
        y: "Ã©Ã©n jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("nn", {
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
      weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
      weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),
      weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[I dag klokka] LT",
        nextDay: "[I morgon klokka] LT",
        nextWeek: "dddd [klokka] LT",
        lastDay: "[I gÃ¥r klokka] LT",
        lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s sidan",
        s: "nokre sekund",
        ss: "%d sekund",
        m: "eit minutt",
        mm: "%d minutt",
        h: "ein time",
        hh: "%d timar",
        d: "ein dag",
        dd: "%d dagar",
        M: "ein mÃ¥nad",
        MM: "%d mÃ¥nader",
        y: "eit Ã¥r",
        yy: "%d Ã¥r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à©§",
        2: "à©¨",
        3: "à©©",
        4: "à©ª",
        5: "à©«",
        6: "à©¬",
        7: "à©­",
        8: "à©®",
        9: "à©¯",
        0: "à©¦"
      },
      n = {
        "à©§": "1",
        "à©¨": "2",
        "à©©": "3",
        "à©ª": "4",
        "à©«": "5",
        "à©¬": "6",
        "à©­": "7",
        "à©®": "8",
        "à©¯": "9",
        "à©¦": "0"
      };
    e.defineLocale("pa-in", {
      months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
      monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
      weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
      weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
      weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
      longDateFormat: {
        LT: "A h:mm à¨µà¨œà©‡",
        LTS: "A h:mm:ss à¨µà¨œà©‡",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
        LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
      },
      calendar: {
        sameDay: "[à¨…à¨œ] LT",
        nextDay: "[à¨•à¨²] LT",
        nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT",
        lastDay: "[à¨•à¨²] LT",
        lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à¨µà¨¿à©±à¨š",
        past: "%s à¨ªà¨¿à¨›à¨²à©‡",
        s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
        ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ",
        m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
        mm: "%d à¨®à¨¿à©°à¨Ÿ",
        h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
        hh: "%d à¨˜à©°à¨Ÿà©‡",
        d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
        dd: "%d à¨¦à¨¿à¨¨",
        M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
        MM: "%d à¨®à¨¹à©€à¨¨à©‡",
        y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
        yy: "%d à¨¸à¨¾à¨²"
      },
      preparse: function(e) {
        return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === t ? e < 4 ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === t ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === t ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à¨°à¨¾à¨¤" : e < 10 ? "à¨¸à¨µà©‡à¨°" : e < 17 ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : e < 20 ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
      n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");

    function r(e) {
      return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
    }

    function i(e, t, n) {
      var i = e + " ";
      switch (n) {
        case "ss":
          return i + (r(e) ? "sekundy" : "sekund");
        case "m":
          return t ? "minuta" : "minutÄ™";
        case "mm":
          return i + (r(e) ? "minuty" : "minut");
        case "h":
          return t ? "godzina" : "godzinÄ™";
        case "hh":
          return i + (r(e) ? "godziny" : "godzin");
        case "MM":
          return i + (r(e) ? "miesiÄ…ce" : "miesiÄ™cy");
        case "yy":
          return i + (r(e) ? "lata" : "lat")
      }
    }
    e.defineLocale("pl", {
      months: function(e, r) {
        return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
      },
      monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
      weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
      weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
      weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[DziÅ› o] LT",
        nextDay: "[Jutro o] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[W niedzielÄ™ o] LT";
            case 2:
              return "[We wtorek o] LT";
            case 3:
              return "[W Å›rodÄ™ o] LT";
            case 6:
              return "[W sobotÄ™ o] LT";
            default:
              return "[W] dddd [o] LT"
          }
        },
        lastDay: "[Wczoraj o] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
            case 3:
              return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
            case 6:
              return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
            default:
              return "[W zeszÅ‚y] dddd [o] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "%s temu",
        s: "kilka sekund",
        ss: i,
        m: i,
        mm: i,
        h: i,
        hh: i,
        d: "1 dzieÅ„",
        dd: "%d dni",
        M: "miesiÄ…c",
        MM: i,
        y: "rok",
        yy: i
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("pt", {
      months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
      monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
      weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
      weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
      weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY HH:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hoje Ã s] LT",
        nextDay: "[AmanhÃ£ Ã s] LT",
        nextWeek: "dddd [Ã s] LT",
        lastDay: "[Ontem Ã s] LT",
        lastWeek: function() {
          return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "em %s",
        past: "hÃ¡ %s",
        s: "segundos",
        ss: "%d segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        M: "um mÃªs",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("pt-br", {
      months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
      monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
      weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
      weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
      weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
      },
      calendar: {
        sameDay: "[Hoje Ã s] LT",
        nextDay: "[AmanhÃ£ Ã s] LT",
        nextWeek: "dddd [Ã s] LT",
        lastDay: "[Ontem Ã s] LT",
        lastWeek: function() {
          return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "em %s",
        past: "hÃ¡ %s",
        s: "poucos segundos",
        ss: "%d segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        M: "um mÃªs",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}Âº/,
      ordinal: "%dÂº"
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      var r = " ";
      return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
        ss: "secunde",
        mm: "minute",
        hh: "ore",
        dd: "zile",
        MM: "luni",
        yy: "ani"
      }[n]
    }
    e.defineLocale("ro", {
      months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
      monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
      weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
      weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[azi la] LT",
        nextDay: "[mÃ¢ine la] LT",
        nextWeek: "dddd [la] LT",
        lastDay: "[ieri la] LT",
        lastWeek: "[fosta] dddd [la] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "peste %s",
        past: "%s Ã®n urmÄƒ",
        s: "cÃ¢teva secunde",
        ss: t,
        m: "un minut",
        mm: t,
        h: "o orÄƒ",
        hh: t,
        d: "o zi",
        dd: t,
        M: "o lunÄƒ",
        MM: t,
        y: "un an",
        yy: t
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      var r, i;
      return "m" === n ? t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + (r = +e, i = {
        ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
        mm: t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
        hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
        dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
        MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
        yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
      }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2])
    }
    var n = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
    e.defineLocale("ru", {
      months: {
        format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
        standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
      },
      monthsShort: {
        format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
        standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
      },
      weekdays: {
        standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
        format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
        isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/
      },
      weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
      weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
      monthsParse: n,
      longMonthsParse: n,
      shortMonthsParse: n,
      monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
      monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
      monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
      monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY Ð³.",
        LLL: "D MMMM YYYY Ð³., H:mm",
        LLLL: "dddd, D MMMM YYYY Ð³., H:mm"
      },
      calendar: {
        sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
        nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
        lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
        nextWeek: function(e) {
          if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
          switch (this.day()) {
            case 0:
              return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
            case 1:
            case 2:
            case 4:
              return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
            case 3:
            case 5:
            case 6:
              return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
          }
        },
        lastWeek: function(e) {
          if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
          switch (this.day()) {
            case 0:
              return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
            case 1:
            case 2:
            case 4:
              return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
            case 3:
            case 5:
            case 6:
              return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Ñ‡ÐµÑ€ÐµÐ· %s",
        past: "%s Ð½Ð°Ð·Ð°Ð´",
        s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
        ss: t,
        m: t,
        mm: t,
        h: "Ñ‡Ð°Ñ",
        hh: t,
        d: "Ð´ÐµÐ½ÑŒ",
        dd: t,
        M: "Ð¼ÐµÑÑÑ†",
        MM: t,
        y: "Ð³Ð¾Ð´",
        yy: t
      },
      meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
      isPM: function(e) {
        return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "Ð½Ð¾Ñ‡Ð¸" : e < 12 ? "ÑƒÑ‚Ñ€Ð°" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
      ordinal: function(e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
            return e + "-Ð¹";
          case "D":
            return e + "-Ð³Ð¾";
          case "w":
          case "W":
            return e + "-Ñ";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
      n = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"];
    e.defineLocale("sd", {
      months: t,
      monthsShort: t,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: n,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "ddddØŒ D MMMM YYYY HH:mm"
      },
      meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
      isPM: function(e) {
        return "Ø´Ø§Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ú„] LT",
        nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT",
        nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT",
        lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT",
        lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s Ù¾ÙˆØ¡",
        past: "%s Ø§Ú³",
        s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ",
        ss: "%d Ø³ÙŠÚªÙ†ÚŠ",
        m: "Ù‡Úª Ù…Ù†Ù½",
        mm: "%d Ù…Ù†Ù½",
        h: "Ù‡Úª ÚªÙ„Ø§Úª",
        hh: "%d ÚªÙ„Ø§Úª",
        d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†",
        dd: "%d ÚÙŠÙ†Ù‡Ù†",
        M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ",
        MM: "%d Ù…Ù‡ÙŠÙ†Ø§",
        y: "Ù‡Úª Ø³Ø§Ù„",
        yy: "%d Ø³Ø§Ù„"
      },
      preparse: function(e) {
        return e.replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/,/g, "ØŒ")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("se", {
      months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
      monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
      weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
      weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
      weekdaysMin: "s_v_m_g_d_b_L".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "MMMM D. [b.] YYYY",
        LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
        LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
      },
      calendar: {
        sameDay: "[otne ti] LT",
        nextDay: "[ihttin ti] LT",
        nextWeek: "dddd [ti] LT",
        lastDay: "[ikte ti] LT",
        lastWeek: "[ovddit] dddd [ti] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s geaÅ¾es",
        past: "maÅ‹it %s",
        s: "moadde sekunddat",
        ss: "%d sekunddat",
        m: "okta minuhta",
        mm: "%d minuhtat",
        h: "okta diimmu",
        hh: "%d diimmut",
        d: "okta beaivi",
        dd: "%d beaivvit",
        M: "okta mÃ¡nnu",
        MM: "%d mÃ¡nut",
        y: "okta jahki",
        yy: "%d jagit"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("si", {
      months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
      monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
      weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
      weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
      weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "a h:mm",
        LTS: "a h:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY MMMM D",
        LLL: "YYYY MMMM D, a h:mm",
        LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
      },
      calendar: {
        sameDay: "[à¶…à¶¯] LT[à¶§]",
        nextDay: "[à·„à·™à¶§] LT[à¶§]",
        nextWeek: "dddd LT[à¶§]",
        lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
        lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sà¶šà·’à¶±à·Š",
        past: "%sà¶šà¶§ à¶´à·™à¶»",
        s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
        ss: "à¶­à¶­à·Šà¶´à¶» %d",
        m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
        mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
        h: "à¶´à·à¶º",
        hh: "à¶´à·à¶º %d",
        d: "à¶¯à·’à¶±à¶º",
        dd: "à¶¯à·’à¶± %d",
        M: "à¶¸à·à·ƒà¶º",
        MM: "à¶¸à·à·ƒ %d",
        y: "à·€à·ƒà¶»",
        yy: "à·€à·ƒà¶» %d"
      },
      dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
      ordinal: function(e) {
        return e + " à·€à·à¶±à·’"
      },
      meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
      isPM: function(e) {
        return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e
      },
      meridiem: function(e, t, n) {
        return e > 11 ? n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
      n = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");

    function r(e) {
      return e > 1 && e < 5
    }

    function i(e, t, n, i) {
      var a = e + " ";
      switch (n) {
        case "s":
          return t || i ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
        case "ss":
          return t || i ? a + (r(e) ? "sekundy" : "sekÃºnd") : a + "sekundami";
        case "m":
          return t ? "minÃºta" : i ? "minÃºtu" : "minÃºtou";
        case "mm":
          return t || i ? a + (r(e) ? "minÃºty" : "minÃºt") : a + "minÃºtami";
        case "h":
          return t ? "hodina" : i ? "hodinu" : "hodinou";
        case "hh":
          return t || i ? a + (r(e) ? "hodiny" : "hodÃ­n") : a + "hodinami";
        case "d":
          return t || i ? "deÅˆ" : "dÅˆom";
        case "dd":
          return t || i ? a + (r(e) ? "dni" : "dnÃ­") : a + "dÅˆami";
        case "M":
          return t || i ? "mesiac" : "mesiacom";
        case "MM":
          return t || i ? a + (r(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
        case "y":
          return t || i ? "rok" : "rokom";
        case "yy":
          return t || i ? a + (r(e) ? "roky" : "rokov") : a + "rokmi"
      }
    }
    e.defineLocale("sk", {
      months: t,
      monthsShort: n,
      weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
      weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v nedeÄ¾u o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo Å¡tvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT"
          }
        },
        lastDay: "[vÄera o] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[minulÃº nedeÄ¾u o] LT";
            case 1:
            case 2:
              return "[minulÃ½] dddd [o] LT";
            case 3:
              return "[minulÃº stredu o] LT";
            case 4:
            case 5:
              return "[minulÃ½] dddd [o] LT";
            case 6:
              return "[minulÃº sobotu o] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: i,
        ss: i,
        m: i,
        mm: i,
        h: i,
        hh: i,
        d: i,
        dd: i,
        M: i,
        MM: i,
        y: i,
        yy: i
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = e + " ";
      switch (n) {
        case "s":
          return t || r ? "nekaj sekund" : "nekaj sekundami";
        case "ss":
          return i += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
        case "m":
          return t ? "ena minuta" : "eno minuto";
        case "mm":
          return i += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
        case "h":
          return t ? "ena ura" : "eno uro";
        case "hh":
          return i += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
        case "d":
          return t || r ? "en dan" : "enim dnem";
        case "dd":
          return i += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
        case "M":
          return t || r ? "en mesec" : "enim mesecem";
        case "MM":
          return i += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
        case "y":
          return t || r ? "eno leto" : "enim letom";
        case "yy":
          return i += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
      }
    }
    e.defineLocale("sl", {
      months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
      weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
      weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v] [nedeljo] [ob] LT";
            case 3:
              return "[v] [sredo] [ob] LT";
            case 6:
              return "[v] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[v] dddd [ob] LT"
          }
        },
        lastDay: "[vÄeraj ob] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[prejÅ¡njo] [nedeljo] [ob] LT";
            case 3:
              return "[prejÅ¡njo] [sredo] [ob] LT";
            case 6:
              return "[prejÅ¡njo] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prejÅ¡nji] dddd [ob] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Äez %s",
        past: "pred %s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("sq", {
      months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
      monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
      weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
      weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
      weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
      weekdaysParseExact: !0,
      meridiemParse: /PD|MD/,
      isPM: function(e) {
        return "M" === e.charAt(0)
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "PD" : "MD"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Sot nÃ«] LT",
        nextDay: "[NesÃ«r nÃ«] LT",
        nextWeek: "dddd [nÃ«] LT",
        lastDay: "[Dje nÃ«] LT",
        lastWeek: "dddd [e kaluar nÃ«] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "nÃ« %s",
        past: "%s mÃ« parÃ«",
        s: "disa sekonda",
        ss: "%d sekonda",
        m: "njÃ« minutÃ«",
        mm: "%d minuta",
        h: "njÃ« orÃ«",
        hh: "%d orÃ«",
        d: "njÃ« ditÃ«",
        dd: "%d ditÃ«",
        M: "njÃ« muaj",
        MM: "%d muaj",
        y: "njÃ« vit",
        yy: "%d vite"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      words: {
        ss: ["sekunda", "sekunde", "sekundi"],
        m: ["jedan minut", "jedne minute"],
        mm: ["minut", "minute", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        dd: ["dan", "dana", "dana"],
        MM: ["mesec", "meseca", "meseci"],
        yy: ["godina", "godine", "godina"]
      },
      correctGrammaticalCase: function(e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
      },
      translate: function(e, n, r) {
        var i = t.words[r];
        return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
      }
    };
    e.defineLocale("sr", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedelju] [u] LT";
            case 3:
              return "[u] [sredu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juÄe u] LT",
        lastWeek: function() {
          return ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pre %s",
        s: "nekoliko sekundi",
        ss: t.translate,
        m: t.translate,
        mm: t.translate,
        h: t.translate,
        hh: t.translate,
        d: "dan",
        dd: t.translate,
        M: "mesec",
        MM: t.translate,
        y: "godinu",
        yy: t.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      words: {
        ss: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ðµ", "ÑÐµÐºÑƒÐ½Ð´Ð¸"],
        m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
        mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
        h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
        hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
        dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
        MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
        yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
      },
      correctGrammaticalCase: function(e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
      },
      translate: function(e, n, r) {
        var i = t.words[r];
        return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
      }
    };
    e.defineLocale("sr-cyrl", {
      months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
      monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
      monthsParseExact: !0,
      weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
      weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
      weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
        nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
            case 3:
              return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
            case 6:
              return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Ñƒ] dddd [Ñƒ] LT"
          }
        },
        lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
        lastWeek: function() {
          return ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"][this.day()]
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Ð·Ð° %s",
        past: "Ð¿Ñ€Ðµ %s",
        s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
        ss: t.translate,
        m: t.translate,
        mm: t.translate,
        h: t.translate,
        hh: t.translate,
        d: "Ð´Ð°Ð½",
        dd: t.translate,
        M: "Ð¼ÐµÑÐµÑ†",
        MM: t.translate,
        y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
        yy: t.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ss", {
      months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
      monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
      weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
      weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
      weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Namuhla nga] LT",
        nextDay: "[Kusasa nga] LT",
        nextWeek: "dddd [nga] LT",
        lastDay: "[Itolo nga] LT",
        lastWeek: "dddd [leliphelile] [nga] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "nga %s",
        past: "wenteka nga %s",
        s: "emizuzwana lomcane",
        ss: "%d mzuzwana",
        m: "umzuzu",
        mm: "%d emizuzu",
        h: "lihora",
        hh: "%d emahora",
        d: "lilanga",
        dd: "%d emalanga",
        M: "inyanga",
        MM: "%d tinyanga",
        y: "umnyaka",
        yy: "%d iminyaka"
      },
      meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
      meridiem: function(e, t, n) {
        return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
      },
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: "%d",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("sv", {
      months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
      weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
      weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Idag] LT",
        nextDay: "[Imorgon] LT",
        lastDay: "[IgÃ¥r] LT",
        nextWeek: "[PÃ¥] dddd LT",
        lastWeek: "[I] dddd[s] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "fÃ¶r %s sedan",
        s: "nÃ¥gra sekunder",
        ss: "%d sekunder",
        m: "en minut",
        mm: "%d minuter",
        h: "en timme",
        hh: "%d timmar",
        d: "en dag",
        dd: "%d dagar",
        M: "en mÃ¥nad",
        MM: "%d mÃ¥nader",
        y: "ett Ã¥r",
        yy: "%d Ã¥r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("sw", {
      months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
      weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
      weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[leo saa] LT",
        nextDay: "[kesho saa] LT",
        nextWeek: "[wiki ijayo] dddd [saat] LT",
        lastDay: "[jana] LT",
        lastWeek: "[wiki iliyopita] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s baadaye",
        past: "tokea %s",
        s: "hivi punde",
        ss: "sekunde %d",
        m: "dakika moja",
        mm: "dakika %d",
        h: "saa limoja",
        hh: "masaa %d",
        d: "siku moja",
        dd: "masiku %d",
        M: "mwezi mmoja",
        MM: "miezi %d",
        y: "mwaka mmoja",
        yy: "miaka %d"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
        1: "à¯§",
        2: "à¯¨",
        3: "à¯©",
        4: "à¯ª",
        5: "à¯«",
        6: "à¯¬",
        7: "à¯­",
        8: "à¯®",
        9: "à¯¯",
        0: "à¯¦"
      },
      n = {
        "à¯§": "1",
        "à¯¨": "2",
        "à¯©": "3",
        "à¯ª": "4",
        "à¯«": "5",
        "à¯¬": "6",
        "à¯­": "7",
        "à¯®": "8",
        "à¯¯": "9",
        "à¯¦": "0"
      };
    e.defineLocale("ta", {
      months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
      monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
      weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
      weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
      weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, HH:mm",
        LLLL: "dddd, D MMMM YYYY, HH:mm"
      },
      calendar: {
        sameDay: "[à®‡à®©à¯à®±à¯] LT",
        nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
        lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à®‡à®²à¯",
        past: "%s à®®à¯à®©à¯",
        s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
        ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
        m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
        mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
        h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
        hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
        d: "à®’à®°à¯ à®¨à®¾à®³à¯",
        dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
        M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
        MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
        y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
        yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
      },
      dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
      ordinal: function(e) {
        return e + "à®µà®¤à¯"
      },
      preparse: function(e) {
        return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function(e) {
          return n[e]
        })
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(e) {
          return t[e]
        })
      },
      meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
      meridiem: function(e, t, n) {
        return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
      },
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t ? e : "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("te", {
      months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
      monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
      monthsParseExact: !0,
      weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
      weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
      weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[à°¨à±‡à°¡à±] LT",
        nextDay: "[à°°à±‡à°ªà±] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
        lastWeek: "[à°—à°¤] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à°²à±‹",
        past: "%s à°•à±à°°à°¿à°¤à°‚",
        s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
        ss: "%d à°¸à±†à°•à°¨à±à°²à±",
        m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
        mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
        h: "à°’à°• à°—à°‚à°Ÿ",
        hh: "%d à°—à°‚à°Ÿà°²à±",
        d: "à°’à°• à°°à±‹à°œà±",
        dd: "%d à°°à±‹à°œà±à°²à±",
        M: "à°’à°• à°¨à±†à°²",
        MM: "%d à°¨à±†à°²à°²à±",
        y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
        yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
      },
      dayOfMonthOrdinalParse: /\d{1,2}à°µ/,
      ordinal: "%dà°µ",
      meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à°°à°¾à°¤à±à°°à°¿" === t ? e < 4 ? e : e + 12 : "à°‰à°¦à°¯à°‚" === t ? e : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === t ? e >= 10 ? e : e + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à°°à°¾à°¤à±à°°à°¿" : e < 10 ? "à°‰à°¦à°¯à°‚" : e < 17 ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : e < 20 ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("tet", {
      months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
      monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
      weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
      weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
      weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ohin iha] LT",
        nextDay: "[Aban iha] LT",
        nextWeek: "dddd [iha] LT",
        lastDay: "[Horiseik iha] LT",
        lastWeek: "dddd [semana kotuk] [iha] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "iha %s",
        past: "%s liuba",
        s: "minutu balun",
        ss: "minutu %d",
        m: "minutu ida",
        mm: "minutu %d",
        h: "oras ida",
        hh: "oras %d",
        d: "loron ida",
        dd: "loron %d",
        M: "fulan ida",
        MM: "fulan %d",
        y: "tinan ida",
        yy: "tinan %d"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      0: "-ÑƒÐ¼",
      1: "-ÑƒÐ¼",
      2: "-ÑŽÐ¼",
      3: "-ÑŽÐ¼",
      4: "-ÑƒÐ¼",
      5: "-ÑƒÐ¼",
      6: "-ÑƒÐ¼",
      7: "-ÑƒÐ¼",
      8: "-ÑƒÐ¼",
      9: "-ÑƒÐ¼",
      10: "-ÑƒÐ¼",
      12: "-ÑƒÐ¼",
      13: "-ÑƒÐ¼",
      20: "-ÑƒÐ¼",
      30: "-ÑŽÐ¼",
      40: "-ÑƒÐ¼",
      50: "-ÑƒÐ¼",
      60: "-ÑƒÐ¼",
      70: "-ÑƒÐ¼",
      80: "-ÑƒÐ¼",
      90: "-ÑƒÐ¼",
      100: "-ÑƒÐ¼"
    };
    e.defineLocale("tg", {
      months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
      monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
      weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
      weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
      weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
        nextDay: "[ÐŸÐ°Ð³Ð¾Ò³ ÑÐ¾Ð°Ñ‚Ð¸] LT",
        lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
        nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
        lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
        past: "%s Ð¿ÐµÑˆ",
        s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
        m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
        mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
        h: "ÑÐº ÑÐ¾Ð°Ñ‚",
        hh: "%d ÑÐ¾Ð°Ñ‚",
        d: "ÑÐº Ñ€Ó¯Ð·",
        dd: "%d Ñ€Ó¯Ð·",
        M: "ÑÐº Ð¼Ð¾Ò³",
        MM: "%d Ð¼Ð¾Ò³",
        y: "ÑÐº ÑÐ¾Ð»",
        yy: "%d ÑÐ¾Ð»"
      },
      meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "ÑˆÐ°Ð±" === t ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === t ? e : "Ñ€Ó¯Ð·" === t ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
      ordinal: function(e) {
        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("th", {
      months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
      monthsShort: "à¸¡.à¸„._à¸.à¸ž._à¸¡à¸µ.à¸„._à¹€à¸¡.à¸¢._à¸ž.à¸„._à¸¡à¸´.à¸¢._à¸.à¸„._à¸ª.à¸„._à¸.à¸¢._à¸•.à¸„._à¸ž.à¸¢._à¸˜.à¸„.".split("_"),
      monthsParseExact: !0,
      weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
      weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
      weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm",
        LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm"
      },
      meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
      isPM: function(e) {
        return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
      },
      calendar: {
        sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
        nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
        nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
        lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
        lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "à¸­à¸µà¸ %s",
        past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
        s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
        ss: "%d à¸§à¸´à¸™à¸²à¸—à¸µ",
        m: "1 à¸™à¸²à¸—à¸µ",
        mm: "%d à¸™à¸²à¸—à¸µ",
        h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
        hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
        d: "1 à¸§à¸±à¸™",
        dd: "%d à¸§à¸±à¸™",
        M: "1 à¹€à¸”à¸·à¸­à¸™",
        MM: "%d à¹€à¸”à¸·à¸­à¸™",
        y: "1 à¸›à¸µ",
        yy: "%d à¸›à¸µ"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("tl-ph", {
      months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
      monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
      weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
      weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
      weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "MM/D/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY HH:mm",
        LLLL: "dddd, MMMM DD, YYYY HH:mm"
      },
      calendar: {
        sameDay: "LT [ngayong araw]",
        nextDay: "[Bukas ng] LT",
        nextWeek: "LT [sa susunod na] dddd",
        lastDay: "LT [kahapon]",
        lastWeek: "LT [noong nakaraang] dddd",
        sameElse: "L"
      },
      relativeTime: {
        future: "sa loob ng %s",
        past: "%s ang nakalipas",
        s: "ilang segundo",
        ss: "%d segundo",
        m: "isang minuto",
        mm: "%d minuto",
        h: "isang oras",
        hh: "%d oras",
        d: "isang araw",
        dd: "%d araw",
        M: "isang buwan",
        MM: "%d buwan",
        y: "isang taon",
        yy: "%d taon"
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function(e) {
        return e
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

    function n(e, n, r, i) {
      var a = function(e) {
        var n = Math.floor(e % 1e3 / 100),
          r = Math.floor(e % 100 / 10),
          i = e % 10,
          a = "";
        n > 0 && (a += t[n] + "vatlh");
        r > 0 && (a += ("" !== a ? " " : "") + t[r] + "maH");
        i > 0 && (a += ("" !== a ? " " : "") + t[i]);
        return "" === a ? "pagh" : a
      }(e);
      switch (r) {
        case "ss":
          return a + " lup";
        case "mm":
          return a + " tup";
        case "hh":
          return a + " rep";
        case "dd":
          return a + " jaj";
        case "MM":
          return a + " jar";
        case "yy":
          return a + " DIS"
      }
    }
    e.defineLocale("tlh", {
      months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
      monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
      monthsParseExact: !0,
      weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[DaHjaj] LT",
        nextDay: "[waâ€™leS] LT",
        nextWeek: "LLL",
        lastDay: "[waâ€™Huâ€™] LT",
        lastWeek: "LLL",
        sameElse: "L"
      },
      relativeTime: {
        future: function(e) {
          var t = e;
          return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
        },
        past: function(e) {
          var t = e;
          return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Huâ€™" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
        },
        s: "puS lup",
        ss: n,
        m: "waâ€™ tup",
        mm: n,
        h: "waâ€™ rep",
        hh: n,
        d: "waâ€™ jaj",
        dd: n,
        M: "waâ€™ jar",
        MM: n,
        y: "waâ€™ DIS",
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = {
      1: "'inci",
      5: "'inci",
      8: "'inci",
      70: "'inci",
      80: "'inci",
      2: "'nci",
      7: "'nci",
      20: "'nci",
      50: "'nci",
      3: "'Ã¼ncÃ¼",
      4: "'Ã¼ncÃ¼",
      100: "'Ã¼ncÃ¼",
      6: "'ncÄ±",
      9: "'uncu",
      10: "'uncu",
      30: "'uncu",
      60: "'Ä±ncÄ±",
      90: "'Ä±ncÄ±"
    };
    e.defineLocale("tr", {
      months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
      monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
      weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
      weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
      weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugÃ¼n saat] LT",
        nextDay: "[yarÄ±n saat] LT",
        nextWeek: "[gelecek] dddd [saat] LT",
        lastDay: "[dÃ¼n] LT",
        lastWeek: "[geÃ§en] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s Ã¶nce",
        s: "birkaÃ§ saniye",
        ss: "%d saniye",
        m: "bir dakika",
        mm: "%d dakika",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gÃ¼n",
        dd: "%d gÃ¼n",
        M: "bir ay",
        MM: "%d ay",
        y: "bir yÄ±l",
        yy: "%d yÄ±l"
      },
      ordinal: function(e, n) {
        switch (n) {
          case "d":
          case "D":
          case "Do":
          case "DD":
            return e;
          default:
            if (0 === e) return e + "'Ä±ncÄ±";
            var r = e % 10;
            return e + (t[r] || t[e % 100 - r] || t[e >= 100 ? 100 : null])
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        s: ["viensas secunds", "'iensas secunds"],
        ss: [e + " secunds", e + " secunds"],
        m: ["'n mÃ­ut", "'iens mÃ­ut"],
        mm: [e + " mÃ­uts", e + " mÃ­uts"],
        h: ["'n Ã¾ora", "'iensa Ã¾ora"],
        hh: [e + " Ã¾oras", e + " Ã¾oras"],
        d: ["'n ziua", "'iensa ziua"],
        dd: [e + " ziuas", e + " ziuas"],
        M: ["'n mes", "'iens mes"],
        MM: [e + " mesen", e + " mesen"],
        y: ["'n ar", "'iens ar"],
        yy: [e + " ars", e + " ars"]
      };
      return r ? i[n][0] : t ? i[n][0] : i[n][1]
    }
    e.defineLocale("tzl", {
      months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
      monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
      weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
      weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
      weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM [dallas] YYYY",
        LLL: "D. MMMM [dallas] YYYY HH.mm",
        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
      },
      meridiemParse: /d\'o|d\'a/i,
      isPM: function(e) {
        return "d'o" === e.toLowerCase()
      },
      meridiem: function(e, t, n) {
        return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
      },
      calendar: {
        sameDay: "[oxhi Ã ] LT",
        nextDay: "[demÃ  Ã ] LT",
        nextWeek: "dddd [Ã ] LT",
        lastDay: "[ieiri Ã ] LT",
        lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "osprei %s",
        past: "ja%s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("tzm", {
      months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
      monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
      weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
      weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
      weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[â´°âµ™â´·âµ… â´´] LT",
        nextDay: "[â´°âµ™â´½â´° â´´] LT",
        nextWeek: "dddd [â´´] LT",
        lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
        lastWeek: "dddd [â´´] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
        past: "âµ¢â´°âµ %s",
        s: "âµ‰âµŽâµ‰â´½",
        ss: "%d âµ‰âµŽâµ‰â´½",
        m: "âµŽâµ‰âµâµ“â´º",
        mm: "%d âµŽâµ‰âµâµ“â´º",
        h: "âµ™â´°âµ„â´°",
        hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
        d: "â´°âµ™âµ™",
        dd: "%d oâµ™âµ™â´°âµ",
        M: "â´°âµ¢oâµ“âµ”",
        MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
        y: "â´°âµ™â´³â´°âµ™",
        yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("tzm-latn", {
      months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
      monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
      weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
      weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
      weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[asdkh g] LT",
        nextDay: "[aska g] LT",
        nextWeek: "dddd [g] LT",
        lastDay: "[assant g] LT",
        lastWeek: "dddd [g] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dadkh s yan %s",
        past: "yan %s",
        s: "imik",
        ss: "%d imik",
        m: "minuá¸",
        mm: "%d minuá¸",
        h: "saÉ›a",
        hh: "%d tassaÉ›in",
        d: "ass",
        dd: "%d ossan",
        M: "ayowr",
        MM: "%d iyyirn",
        y: "asgas",
        yy: "%d isgasn"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("ug-cn", {
      months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
      monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
      weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
      weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
      weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰",
        LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm",
        LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm"
      },
      meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" === t || "Ø³Û•Ú¾Û•Ø±" === t || "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" === t ? e : "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" === t || "ÙƒÛ•Ú†" === t ? e + 12 : e >= 11 ? e : e + 12
      },
      meridiem: function(e, t, n) {
        var r = 100 * e + t;
        return r < 600 ? "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" : r < 900 ? "Ø³Û•Ú¾Û•Ø±" : r < 1130 ? "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" : r < 1230 ? "Ú†ÛˆØ´" : r < 1800 ? "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" : "ÙƒÛ•Ú†"
      },
      calendar: {
        sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT",
        nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT",
        nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
        lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT",
        lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ÙƒÛÙŠÙ‰Ù†",
        past: "%s Ø¨Û‡Ø±Û‡Ù†",
        s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª",
        ss: "%d Ø³ÛÙƒÙˆÙ†Øª",
        m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª",
        mm: "%d Ù…Ù‰Ù†Û‡Øª",
        h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª",
        hh: "%d Ø³Ø§Ø¦Û•Øª",
        d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†",
        dd: "%d ÙƒÛˆÙ†",
        M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ",
        MM: "%d Ø¦Ø§ÙŠ",
        y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„",
        yy: "%d ÙŠÙ‰Ù„"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "-ÙƒÛˆÙ†Ù‰";
          case "w":
          case "W":
            return e + "-Ú¾Û•Ù¾ØªÛ•";
          default:
            return e
        }
      },
      preparse: function(e) {
        return e.replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/,/g, "ØŒ")
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";

    function t(e, t, n) {
      var r, i;
      return "m" === n ? t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + (r = +e, i = {
        ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´",
        mm: t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
        hh: t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
        dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
        MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
        yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
      }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2])
    }

    function n(e) {
      return function() {
        return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
      }
    }
    e.defineLocale("uk", {
      months: {
        format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
        standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
      },
      monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
      weekdays: function(e, t) {
        var n = {
          nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
          accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
          genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
        };
        return e ? n[/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
      },
      weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
      weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY Ñ€.",
        LLL: "D MMMM YYYY Ñ€., HH:mm",
        LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
      },
      calendar: {
        sameDay: n("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
        nextDay: n("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
        lastDay: n("[Ð’Ñ‡Ð¾Ñ€Ð° "),
        nextWeek: n("[Ð£] dddd ["),
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
            case 1:
            case 2:
            case 4:
              return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Ð·Ð° %s",
        past: "%s Ñ‚Ð¾Ð¼Ñƒ",
        s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
        ss: t,
        m: t,
        mm: t,
        h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
        hh: t,
        d: "Ð´ÐµÐ½ÑŒ",
        dd: t,
        M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
        MM: t,
        y: "Ñ€Ñ–Ðº",
        yy: t
      },
      meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
      isPM: function(e) {
        return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "Ð½Ð¾Ñ‡Ñ–" : e < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
      ordinal: function(e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return e + "-Ð¹";
          case "D":
            return e + "-Ð³Ð¾";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    var t = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
      n = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"];
    e.defineLocale("ur", {
      months: t,
      monthsShort: t,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: n,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "ddddØŒ D MMMM YYYY HH:mm"
      },
      meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
      isPM: function(e) {
        return "Ø´Ø§Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
      },
      calendar: {
        sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT",
        nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT",
        nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT",
        lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT",
        lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s Ø¨Ø¹Ø¯",
        past: "%s Ù‚Ø¨Ù„",
        s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ",
        ss: "%d Ø³ÛŒÚ©Ù†Úˆ",
        m: "Ø§ÛŒÚ© Ù…Ù†Ù¹",
        mm: "%d Ù…Ù†Ù¹",
        h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û",
        hh: "%d Ú¯Ú¾Ù†Ù¹Û’",
        d: "Ø§ÛŒÚ© Ø¯Ù†",
        dd: "%d Ø¯Ù†",
        M: "Ø§ÛŒÚ© Ù…Ø§Û",
        MM: "%d Ù…Ø§Û",
        y: "Ø§ÛŒÚ© Ø³Ø§Ù„",
        yy: "%d Ø³Ø§Ù„"
      },
      preparse: function(e) {
        return e.replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/,/g, "ØŒ")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("uz", {
      months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
      monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
      weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
      weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
      weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "D MMMM YYYY, dddd HH:mm"
      },
      calendar: {
        sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
        nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
        nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
        lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
        lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
        past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
        s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
        ss: "%d Ñ„ÑƒÑ€ÑÐ°Ñ‚",
        m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
        mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
        h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
        hh: "%d ÑÐ¾Ð°Ñ‚",
        d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
        dd: "%d ÐºÑƒÐ½",
        M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
        MM: "%d Ð¾Ð¹",
        y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
        yy: "%d Ð¹Ð¸Ð»"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("uz-latn", {
      months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
      monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
      weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
      weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
      weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "D MMMM YYYY, dddd HH:mm"
      },
      calendar: {
        sameDay: "[Bugun soat] LT [da]",
        nextDay: "[Ertaga] LT [da]",
        nextWeek: "dddd [kuni soat] LT [da]",
        lastDay: "[Kecha soat] LT [da]",
        lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
        sameElse: "L"
      },
      relativeTime: {
        future: "Yaqin %s ichida",
        past: "Bir necha %s oldin",
        s: "soniya",
        ss: "%d soniya",
        m: "bir daqiqa",
        mm: "%d daqiqa",
        h: "bir soat",
        hh: "%d soat",
        d: "bir kun",
        dd: "%d kun",
        M: "bir oy",
        MM: "%d oy",
        y: "bir yil",
        yy: "%d yil"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("vi", {
      months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
      monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
      monthsParseExact: !0,
      weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
      weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysParseExact: !0,
      meridiemParse: /sa|ch/i,
      isPM: function(e) {
        return /^ch$/i.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [nÄƒm] YYYY",
        LLL: "D MMMM [nÄƒm] YYYY HH:mm",
        LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
        l: "DD/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[HÃ´m nay lÃºc] LT",
        nextDay: "[NgÃ y mai lÃºc] LT",
        nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
        lastDay: "[HÃ´m qua lÃºc] LT",
        lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s tá»›i",
        past: "%s trÆ°á»›c",
        s: "vÃ i giÃ¢y",
        ss: "%d giÃ¢y",
        m: "má»™t phÃºt",
        mm: "%d phÃºt",
        h: "má»™t giá»",
        hh: "%d giá»",
        d: "má»™t ngÃ y",
        dd: "%d ngÃ y",
        M: "má»™t thÃ¡ng",
        MM: "%d thÃ¡ng",
        y: "má»™t nÄƒm",
        yy: "%d nÄƒm"
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function(e) {
        return e
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("x-pseudo", {
      months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
      monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
      monthsParseExact: !0,
      weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
      weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
      weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT",
        nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT",
        nextWeek: "dddd [Ã¡t] LT",
        lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT",
        lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ã­~Ã± %s",
        past: "%s Ã¡~gÃ³",
        s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds",
        ss: "%d s~Ã©cÃ³Ã±~ds",
        m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©",
        mm: "%d m~Ã­Ã±Ãº~tÃ©s",
        h: "Ã¡~Ã± hÃ³~Ãºr",
        hh: "%d h~Ã³Ãºrs",
        d: "Ã¡ ~dÃ¡Ã½",
        dd: "%d d~Ã¡Ã½s",
        M: "Ã¡ ~mÃ³Ã±~th",
        MM: "%d m~Ã³Ã±t~hs",
        y: "Ã¡ ~Ã½Ã©Ã¡r",
        yy: "%d Ã½~Ã©Ã¡rs"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("yo", {
      months: "Sáº¹Ìráº¹Ì_EÌ€reÌ€leÌ€_áº¸ráº¹Ì€naÌ€_IÌ€gbeÌ_EÌ€bibi_OÌ€kuÌ€du_Agáº¹mo_OÌ€guÌn_Owewe_á»ŒÌ€waÌ€raÌ€_BeÌluÌ_á»ŒÌ€páº¹Ì€Ì€".split("_"),
      monthsShort: "Sáº¹Ìr_EÌ€rl_áº¸rn_IÌ€gb_EÌ€bi_OÌ€kuÌ€_Agáº¹_OÌ€guÌ_Owe_á»ŒÌ€waÌ€_BeÌl_á»ŒÌ€páº¹Ì€Ì€".split("_"),
      weekdays: "AÌ€iÌ€kuÌ_AjeÌ_IÌ€sáº¹Ìgun_á»Œjá»ÌruÌ_á»Œjá»Ìbá»_áº¸tiÌ€_AÌ€baÌmáº¹Ìta".split("_"),
      weekdaysShort: "AÌ€iÌ€k_AjeÌ_IÌ€sáº¹Ì_á»Œjr_á»Œjb_áº¸tiÌ€_AÌ€baÌ".split("_"),
      weekdaysMin: "AÌ€iÌ€_Aj_IÌ€s_á»Œr_á»Œb_áº¸t_AÌ€b".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[OÌ€niÌ€ ni] LT",
        nextDay: "[á»ŒÌ€la ni] LT",
        nextWeek: "dddd [á»Œsáº¹Ì€ toÌn'bá»] [ni] LT",
        lastDay: "[AÌ€na ni] LT",
        lastWeek: "dddd [á»Œsáº¹Ì€ toÌlá»Ì] [ni] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "niÌ %s",
        past: "%s ká»jaÌ",
        s: "iÌ€sáº¹juÌ aayaÌ die",
        ss: "aayaÌ %d",
        m: "iÌ€sáº¹juÌ kan",
        mm: "iÌ€sáº¹juÌ %d",
        h: "waÌkati kan",
        hh: "waÌkati %d",
        d: "á»já»Ì kan",
        dd: "á»já»Ì %d",
        M: "osuÌ€ kan",
        MM: "osuÌ€ %d",
        y: "á»duÌn kan",
        yy: "á»duÌn %d"
      },
      dayOfMonthOrdinalParse: /á»já»Ì\s\d{1,2}/,
      ordinal: "á»já»Ì %d",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("zh-cn", {
      months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
      monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
      weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
      weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
      weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYYå¹´MæœˆDæ—¥",
        LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†",
        LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†",
        l: "YYYY/M/D",
        ll: "YYYYå¹´MæœˆDæ—¥",
        lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
      },
      meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : e >= 11 ? e : e + 12
      },
      meridiem: function(e, t, n) {
        var r = 100 * e + t;
        return r < 600 ? "å‡Œæ™¨" : r < 900 ? "æ—©ä¸Š" : r < 1130 ? "ä¸Šåˆ" : r < 1230 ? "ä¸­åˆ" : r < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
      },
      calendar: {
        sameDay: "[ä»Šå¤©]LT",
        nextDay: "[æ˜Žå¤©]LT",
        nextWeek: "[ä¸‹]ddddLT",
        lastDay: "[æ˜¨å¤©]LT",
        lastWeek: "[ä¸Š]ddddLT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "æ—¥";
          case "M":
            return e + "æœˆ";
          case "w":
          case "W":
            return e + "å‘¨";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%så†…",
        past: "%så‰",
        s: "å‡ ç§’",
        ss: "%d ç§’",
        m: "1 åˆ†é’Ÿ",
        mm: "%d åˆ†é’Ÿ",
        h: "1 å°æ—¶",
        hh: "%d å°æ—¶",
        d: "1 å¤©",
        dd: "%d å¤©",
        M: "1 ä¸ªæœˆ",
        MM: "%d ä¸ªæœˆ",
        y: "1 å¹´",
        yy: "%d å¹´"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("zh-hk", {
      months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
      monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
      weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
      weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
      weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYYå¹´MæœˆDæ—¥",
        LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
        l: "YYYY/M/D",
        ll: "YYYYå¹´MæœˆDæ—¥",
        lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
      },
      meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        var r = 100 * e + t;
        return r < 600 ? "å‡Œæ™¨" : r < 900 ? "æ—©ä¸Š" : r < 1130 ? "ä¸Šåˆ" : r < 1230 ? "ä¸­åˆ" : r < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
      },
      calendar: {
        sameDay: "[ä»Šå¤©]LT",
        nextDay: "[æ˜Žå¤©]LT",
        nextWeek: "[ä¸‹]ddddLT",
        lastDay: "[æ˜¨å¤©]LT",
        lastWeek: "[ä¸Š]ddddLT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "æ—¥";
          case "M":
            return e + "æœˆ";
          case "w":
          case "W":
            return e + "é€±";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%så…§",
        past: "%så‰",
        s: "å¹¾ç§’",
        ss: "%d ç§’",
        m: "1 åˆ†é˜",
        mm: "%d åˆ†é˜",
        h: "1 å°æ™‚",
        hh: "%d å°æ™‚",
        d: "1 å¤©",
        dd: "%d å¤©",
        M: "1 å€‹æœˆ",
        MM: "%d å€‹æœˆ",
        y: "1 å¹´",
        yy: "%d å¹´"
      }
    })
  })(n(0))
}, function(e, t, n) {
  (function(e) {
    "use strict";
    e.defineLocale("zh-tw", {
      months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
      monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
      weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
      weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
      weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYYå¹´MæœˆDæ—¥",
        LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
        l: "YYYY/M/D",
        ll: "YYYYå¹´MæœˆDæ—¥",
        lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
        llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
      },
      meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
      },
      meridiem: function(e, t, n) {
        var r = 100 * e + t;
        return r < 600 ? "å‡Œæ™¨" : r < 900 ? "æ—©ä¸Š" : r < 1130 ? "ä¸Šåˆ" : r < 1230 ? "ä¸­åˆ" : r < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
      },
      calendar: {
        sameDay: "[ä»Šå¤©] LT",
        nextDay: "[æ˜Žå¤©] LT",
        nextWeek: "[ä¸‹]dddd LT",
        lastDay: "[æ˜¨å¤©] LT",
        lastWeek: "[ä¸Š]dddd LT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
      ordinal: function(e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "æ—¥";
          case "M":
            return e + "æœˆ";
          case "w":
          case "W":
            return e + "é€±";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%så…§",
        past: "%så‰",
        s: "å¹¾ç§’",
        ss: "%d ç§’",
        m: "1 åˆ†é˜",
        mm: "%d åˆ†é˜",
        h: "1 å°æ™‚",
        hh: "%d å°æ™‚",
        d: "1 å¤©",
        dd: "%d å¤©",
        M: "1 å€‹æœˆ",
        MM: "%d å€‹æœˆ",
        y: "1 å¹´",
        yy: "%d å¹´"
      }
    })
  })(n(0))
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t) {
    return function() {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
      return e.apply(t, n)
    }
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1),
    i = n(152),
    a = n(154),
    s = n(155),
    o = n(156),
    u = n(131),
    l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(157);
  e.exports = function(e) {
    return new Promise(function(t, d) {
      var c = e.data,
        h = e.headers;
      r.isFormData(c) && delete h["Content-Type"];
      var m = new XMLHttpRequest,
        f = "onreadystatechange",
        _ = !1;
      if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in m || o(e.url) || (m = new window.XDomainRequest, f = "onload", _ = !0, m.onprogress = function() {}, m.ontimeout = function() {}), e.auth) {
        var p = e.auth.username || "",
          y = e.auth.password || "";
        h.Authorization = "Basic " + l(p + ":" + y)
      }
      if (m.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0), m.timeout = e.timeout, m[f] = function() {
          if (m && (4 === m.readyState || _) && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:"))) {
            var n = "getAllResponseHeaders" in m ? s(m.getAllResponseHeaders()) : null,
              r = {
                data: e.responseType && "text" !== e.responseType ? m.response : m.responseText,
                status: 1223 === m.status ? 204 : m.status,
                statusText: 1223 === m.status ? "No Content" : m.statusText,
                headers: n,
                config: e,
                request: m
              };
            i(t, d, r), m = null
          }
        }, m.onerror = function() {
          d(u("Network Error", e, null, m)), m = null
        }, m.ontimeout = function() {
          d(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", m)), m = null
        }, r.isStandardBrowserEnv()) {
        var g = n(158),
          v = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
        v && (h[e.xsrfHeaderName] = v)
      }
      if ("setRequestHeader" in m && r.forEach(h, function(e, t) {
          void 0 === c && "content-type" === t.toLowerCase() ? delete h[t] : m.setRequestHeader(t, e)
        }), e.withCredentials && (m.withCredentials = !0), e.responseType) try {
        m.responseType = e.responseType
      } catch (t) {
        if ("json" !== e.responseType) throw t
      }
      "function" == typeof e.onDownloadProgress && m.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && m.upload && m.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
        m && (m.abort(), d(e), m = null)
      }), void 0 === c && (c = null), m.send(c)
    })
  }
}, function(e, t, n) {
  "use strict";
  var r = n(153);
  e.exports = function(e, t, n, i, a) {
    var s = new Error(e);
    return r(s, t, n, i, a)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    return !(!e || !e.__CANCEL__)
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    this.message = e
  }
  r.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "")
  }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
  n(135), e.exports = n(166)
}, function(e, t, n) {
  n(136), $(document).ready(function() {
    var e, t;
    $(window).resize(function() {
      $(this).innerWidth() <= 500 && "none" !== $(".features__subtitle br").css("display") ? $(".features__subtitle br").hide() : $(".features__subtitle br").show(), $(this).innerWidth() <= 1024 && (e && (e.width = "98%"), t && (t.width = "50%")), $(this).innerWidth() <= 720 && t && (t.width = "80%"), $(this).innerWidth() <= 420 && t && (t.width = "98%")
    }), $(window).on("scroll", function() {
      $(document).scrollTop() > 10 ? $(".nav").addClass("sticky") : $(".nav").removeClass("sticky")
    })})}, function(e, t, n) {
  window._ = n(137), window.$ = window.jQuery = n(2), n(138), window.moment = n(0), $.bootstrapMaterialDatePicker = n(140), window.toastr = n(141), window.Plyr = n(143), $.reel = n(144), window.axios = n(146), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  var r = document.head.querySelector('meta[name="csrf-token"]');
  r ? window.axios.defaults.headers.common["X-CSRF-TOKEN"] = r.content : console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")
}, function(e, t, n) {
  (function(e, r) {
    var i;
    (function() {
      var a, s = 200,
        o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        u = "Expected a function",
        l = "__lodash_hash_undefined__",
        d = 500,
        c = "__lodash_placeholder__",
        h = 1,
        m = 2,
        f = 4,
        _ = 1,
        p = 2,
        y = 1,
        g = 2,
        v = 4,
        M = 8,
        L = 16,
        k = 32,
        b = 64,
        Y = 128,
        w = 256,
        D = 512,
        T = 30,
        x = "...",
        S = 800,
        j = 16,
        H = 1,
        E = 2,
        A = 1 / 0,
        C = 9007199254740991,
        O = 1.7976931348623157e308,
        P = NaN,
        W = 4294967295,
        N = W - 1,
        F = W >>> 1,
        I = [
          ["ary", Y],
          ["bind", y],
          ["bindKey", g],
          ["curry", M],
          ["curryRight", L],
          ["flip", D],
          ["partial", k],
          ["partialRight", b],
          ["rearg", w]
        ],
        R = "[object Arguments]",
        z = "[object Array]",
        $ = "[object AsyncFunction]",
        q = "[object Boolean]",
        B = "[object Date]",
        U = "[object DOMException]",
        V = "[object Error]",
        J = "[object Function]",
        G = "[object GeneratorFunction]",
        K = "[object Map]",
        X = "[object Number]",
        Z = "[object Null]",
        Q = "[object Object]",
        ee = "[object Proxy]",
        te = "[object RegExp]",
        ne = "[object Set]",
        re = "[object String]",
        ie = "[object Symbol]",
        ae = "[object Undefined]",
        se = "[object WeakMap]",
        oe = "[object WeakSet]",
        ue = "[object ArrayBuffer]",
        le = "[object DataView]",
        de = "[object Float32Array]",
        ce = "[object Float64Array]",
        he = "[object Int8Array]",
        me = "[object Int16Array]",
        fe = "[object Int32Array]",
        _e = "[object Uint8Array]",
        pe = "[object Uint8ClampedArray]",
        ye = "[object Uint16Array]",
        ge = "[object Uint32Array]",
        ve = /\b__p \+= '';/g,
        Me = /\b(__p \+=) '' \+/g,
        Le = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        ke = /&(?:amp|lt|gt|quot|#39);/g,
        be = /[&<>"']/g,
        Ye = RegExp(ke.source),
        we = RegExp(be.source),
        De = /<%-([\s\S]+?)%>/g,
        Te = /<%([\s\S]+?)%>/g,
        xe = /<%=([\s\S]+?)%>/g,
        Se = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        je = /^\w*$/,
        He = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ee = /[\\^$.*+?()[\]{}|]/g,
        Ae = RegExp(Ee.source),
        Ce = /^\s+|\s+$/g,
        Oe = /^\s+/,
        Pe = /\s+$/,
        We = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        Ne = /\{\n\/\* \[wrapped with (.+)\] \*/,
        Fe = /,? & /,
        Ie = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        Re = /\\(\\)?/g,
        ze = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        $e = /\w*$/,
        qe = /^[-+]0x[0-9a-f]+$/i,
        Be = /^0b[01]+$/i,
        Ue = /^\[object .+?Constructor\]$/,
        Ve = /^0o[0-7]+$/i,
        Je = /^(?:0|[1-9]\d*)$/,
        Ge = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        Ke = /($^)/,
        Xe = /['\n\r\u2028\u2029\\]/g,
        Ze = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        Qe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        et = "[\\ud800-\\udfff]",
        tt = "[" + Qe + "]",
        nt = "[" + Ze + "]",
        rt = "\\d+",
        it = "[\\u2700-\\u27bf]",
        at = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        st = "[^\\ud800-\\udfff" + Qe + rt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        ot = "\\ud83c[\\udffb-\\udfff]",
        ut = "[^\\ud800-\\udfff]",
        lt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        dt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        ct = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        ht = "(?:" + at + "|" + st + ")",
        mt = "(?:" + ct + "|" + st + ")",
        ft = "(?:" + nt + "|" + ot + ")" + "?",
        _t = "[\\ufe0e\\ufe0f]?" + ft + ("(?:\\u200d(?:" + [ut, lt, dt].join("|") + ")[\\ufe0e\\ufe0f]?" + ft + ")*"),
        pt = "(?:" + [it, lt, dt].join("|") + ")" + _t,
        yt = "(?:" + [ut + nt + "?", nt, lt, dt, et].join("|") + ")",
        gt = RegExp("['â€™]", "g"),
        vt = RegExp(nt, "g"),
        Mt = RegExp(ot + "(?=" + ot + ")|" + yt + _t, "g"),
        Lt = RegExp([ct + "?" + at + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?(?=" + [tt, ct, "$"].join("|") + ")", mt + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?(?=" + [tt, ct + ht, "$"].join("|") + ")", ct + "?" + ht + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?", ct + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rt, pt].join("|"), "g"),
        kt = RegExp("[\\u200d\\ud800-\\udfff" + Ze + "\\ufe0e\\ufe0f]"),
        bt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Yt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        wt = -1,
        Dt = {};
      Dt[de] = Dt[ce] = Dt[he] = Dt[me] = Dt[fe] = Dt[_e] = Dt[pe] = Dt[ye] = Dt[ge] = !0, Dt[R] = Dt[z] = Dt[ue] = Dt[q] = Dt[le] = Dt[B] = Dt[V] = Dt[J] = Dt[K] = Dt[X] = Dt[Q] = Dt[te] = Dt[ne] = Dt[re] = Dt[se] = !1;
      var Tt = {};
      Tt[R] = Tt[z] = Tt[ue] = Tt[le] = Tt[q] = Tt[B] = Tt[de] = Tt[ce] = Tt[he] = Tt[me] = Tt[fe] = Tt[K] = Tt[X] = Tt[Q] = Tt[te] = Tt[ne] = Tt[re] = Tt[ie] = Tt[_e] = Tt[pe] = Tt[ye] = Tt[ge] = !0, Tt[V] = Tt[J] = Tt[se] = !1;
      var xt = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        St = parseFloat,
        jt = parseInt,
        Ht = "object" == typeof e && e && e.Object === Object && e,
        Et = "object" == typeof self && self && self.Object === Object && self,
        At = Ht || Et || Function("return this")(),
        Ct = "object" == typeof t && t && !t.nodeType && t,
        Ot = Ct && "object" == typeof r && r && !r.nodeType && r,
        Pt = Ot && Ot.exports === Ct,
        Wt = Pt && Ht.process,
        Nt = function() {
          try {
            var e = Ot && Ot.require && Ot.require("util").types;
            return e || Wt && Wt.binding && Wt.binding("util")
          } catch (e) {}
        }(),
        Ft = Nt && Nt.isArrayBuffer,
        It = Nt && Nt.isDate,
        Rt = Nt && Nt.isMap,
        zt = Nt && Nt.isRegExp,
        $t = Nt && Nt.isSet,
        qt = Nt && Nt.isTypedArray;

      function Bt(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
      }

      function Ut(e, t, n, r) {
        for (var i = -1, a = null == e ? 0 : e.length; ++i < a;) {
          var s = e[i];
          t(r, s, n(s), e)
        }
        return r
      }

      function Vt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        return e
      }

      function Jt(e, t) {
        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
        return e
      }

      function Gt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
          if (!t(e[n], n, e)) return !1;
        return !0
      }

      function Kt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r;) {
          var s = e[n];
          t(s, n, e) && (a[i++] = s)
        }
        return a
      }

      function Xt(e, t) {
        return !!(null == e ? 0 : e.length) && un(e, t, 0) > -1
      }

      function Zt(e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
          if (n(t, e[r])) return !0;
        return !1
      }

      function Qt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
      }

      function en(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
        return e
      }

      function tn(e, t, n, r) {
        var i = -1,
          a = null == e ? 0 : e.length;
        for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
        return n
      }

      function nn(e, t, n, r) {
        var i = null == e ? 0 : e.length;
        for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
        return n
      }

      function rn(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
          if (t(e[n], n, e)) return !0;
        return !1
      }
      var an = hn("length");

      function sn(e, t, n) {
        var r;
        return n(e, function(e, n, i) {
          if (t(e, n, i)) return r = n, !1
        }), r
      }

      function on(e, t, n, r) {
        for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
          if (t(e[a], a, e)) return a;
        return -1
      }

      function un(e, t, n) {
        return t == t ? function(e, t, n) {
          var r = n - 1,
            i = e.length;
          for (; ++r < i;)
            if (e[r] === t) return r;
          return -1
        }(e, t, n) : on(e, dn, n)
      }

      function ln(e, t, n, r) {
        for (var i = n - 1, a = e.length; ++i < a;)
          if (r(e[i], t)) return i;
        return -1
      }

      function dn(e) {
        return e != e
      }

      function cn(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? _n(e, t) / n : P
      }

      function hn(e) {
        return function(t) {
          return null == t ? a : t[e]
        }
      }

      function mn(e) {
        return function(t) {
          return null == e ? a : e[t]
        }
      }

      function fn(e, t, n, r, i) {
        return i(e, function(e, i, a) {
          n = r ? (r = !1, e) : t(n, e, i, a)
        }), n
      }

      function _n(e, t) {
        for (var n, r = -1, i = e.length; ++r < i;) {
          var s = t(e[r]);
          s !== a && (n = n === a ? s : n + s)
        }
        return n
      }

      function pn(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
      }

      function yn(e) {
        return function(t) {
          return e(t)
        }
      }

      function gn(e, t) {
        return Qt(t, function(t) {
          return e[t]
        })
      }

      function vn(e, t) {
        return e.has(t)
      }

      function Mn(e, t) {
        for (var n = -1, r = e.length; ++n < r && un(t, e[n], 0) > -1;);
        return n
      }

      function Ln(e, t) {
        for (var n = e.length; n-- && un(t, e[n], 0) > -1;);
        return n
      }
      var kn = mn({
          "Ã€": "A",
          "Ã": "A",
          "Ã‚": "A",
          "Ãƒ": "A",
          "Ã„": "A",
          "Ã…": "A",
          "Ã ": "a",
          "Ã¡": "a",
          "Ã¢": "a",
          "Ã£": "a",
          "Ã¤": "a",
          "Ã¥": "a",
          "Ã‡": "C",
          "Ã§": "c",
          "Ã": "D",
          "Ã°": "d",
          "Ãˆ": "E",
          "Ã‰": "E",
          "ÃŠ": "E",
          "Ã‹": "E",
          "Ã¨": "e",
          "Ã©": "e",
          "Ãª": "e",
          "Ã«": "e",
          "ÃŒ": "I",
          "Ã": "I",
          "ÃŽ": "I",
          "Ã": "I",
          "Ã¬": "i",
          "Ã­": "i",
          "Ã®": "i",
          "Ã¯": "i",
          "Ã‘": "N",
          "Ã±": "n",
          "Ã’": "O",
          "Ã“": "O",
          "Ã”": "O",
          "Ã•": "O",
          "Ã–": "O",
          "Ã˜": "O",
          "Ã²": "o",
          "Ã³": "o",
          "Ã´": "o",
          "Ãµ": "o",
          "Ã¶": "o",
          "Ã¸": "o",
          "Ã™": "U",
          "Ãš": "U",
          "Ã›": "U",
          "Ãœ": "U",
          "Ã¹": "u",
          "Ãº": "u",
          "Ã»": "u",
          "Ã¼": "u",
          "Ã": "Y",
          "Ã½": "y",
          "Ã¿": "y",
          "Ã†": "Ae",
          "Ã¦": "ae",
          "Ãž": "Th",
          "Ã¾": "th",
          "ÃŸ": "ss",
          "Ä€": "A",
          "Ä‚": "A",
          "Ä„": "A",
          "Ä": "a",
          "Äƒ": "a",
          "Ä…": "a",
          "Ä†": "C",
          "Äˆ": "C",
          "ÄŠ": "C",
          "ÄŒ": "C",
          "Ä‡": "c",
          "Ä‰": "c",
          "Ä‹": "c",
          "Ä": "c",
          "ÄŽ": "D",
          "Ä": "D",
          "Ä": "d",
          "Ä‘": "d",
          "Ä’": "E",
          "Ä”": "E",
          "Ä–": "E",
          "Ä˜": "E",
          "Äš": "E",
          "Ä“": "e",
          "Ä•": "e",
          "Ä—": "e",
          "Ä™": "e",
          "Ä›": "e",
          "Äœ": "G",
          "Äž": "G",
          "Ä ": "G",
          "Ä¢": "G",
          "Ä": "g",
          "ÄŸ": "g",
          "Ä¡": "g",
          "Ä£": "g",
          "Ä¤": "H",
          "Ä¦": "H",
          "Ä¥": "h",
          "Ä§": "h",
          "Ä¨": "I",
          "Äª": "I",
          "Ä¬": "I",
          "Ä®": "I",
          "Ä°": "I",
          "Ä©": "i",
          "Ä«": "i",
          "Ä­": "i",
          "Ä¯": "i",
          "Ä±": "i",
          "Ä´": "J",
          "Äµ": "j",
          "Ä¶": "K",
          "Ä·": "k",
          "Ä¸": "k",
          "Ä¹": "L",
          "Ä»": "L",
          "Ä½": "L",
          "Ä¿": "L",
          "Å": "L",
          "Äº": "l",
          "Ä¼": "l",
          "Ä¾": "l",
          "Å€": "l",
          "Å‚": "l",
          "Åƒ": "N",
          "Å…": "N",
          "Å‡": "N",
          "ÅŠ": "N",
          "Å„": "n",
          "Å†": "n",
          "Åˆ": "n",
          "Å‹": "n",
          "ÅŒ": "O",
          "ÅŽ": "O",
          "Å": "O",
          "Å": "o",
          "Å": "o",
          "Å‘": "o",
          "Å”": "R",
          "Å–": "R",
          "Å˜": "R",
          "Å•": "r",
          "Å—": "r",
          "Å™": "r",
          "Åš": "S",
          "Åœ": "S",
          "Åž": "S",
          "Å ": "S",
          "Å›": "s",
          "Å": "s",
          "ÅŸ": "s",
          "Å¡": "s",
          "Å¢": "T",
          "Å¤": "T",
          "Å¦": "T",
          "Å£": "t",
          "Å¥": "t",
          "Å§": "t",
          "Å¨": "U",
          "Åª": "U",
          "Å¬": "U",
          "Å®": "U",
          "Å°": "U",
          "Å²": "U",
          "Å©": "u",
          "Å«": "u",
          "Å­": "u",
          "Å¯": "u",
          "Å±": "u",
          "Å³": "u",
          "Å´": "W",
          "Åµ": "w",
          "Å¶": "Y",
          "Å·": "y",
          "Å¸": "Y",
          "Å¹": "Z",
          "Å»": "Z",
          "Å½": "Z",
          "Åº": "z",
          "Å¼": "z",
          "Å¾": "z",
          "Ä²": "IJ",
          "Ä³": "ij",
          "Å’": "Oe",
          "Å“": "oe",
          "Å‰": "'n",
          "Å¿": "s"
        }),
        bn = mn({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        });

      function Yn(e) {
        return "\\" + xt[e]
      }

      function wn(e) {
        return kt.test(e)
      }

      function Dn(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach(function(e, r) {
          n[++t] = [r, e]
        }), n
      }

      function Tn(e, t) {
        return function(n) {
          return e(t(n))
        }
      }

      function xn(e, t) {
        for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
          var s = e[n];
          s !== t && s !== c || (e[n] = c, a[i++] = n)
        }
        return a
      }

      function Sn(e, t) {
        return "__proto__" == t ? a : e[t]
      }

      function jn(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach(function(e) {
          n[++t] = e
        }), n
      }

      function Hn(e) {
        var t = -1,
          n = Array(e.size);
        return e.forEach(function(e) {
          n[++t] = [e, e]
        }), n
      }

      function En(e) {
        return wn(e) ? function(e) {
          var t = Mt.lastIndex = 0;
          for (; Mt.test(e);) ++t;
          return t
        }(e) : an(e)
      }

      function An(e) {
        return wn(e) ? function(e) {
          return e.match(Mt) || []
        }(e) : function(e) {
          return e.split("")
        }(e)
      }
      var Cn = mn({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      });
      var On = function e(t) {
        var n, r = (t = null == t ? At : On.defaults(At.Object(), t, On.pick(At, Yt))).Array,
          i = t.Date,
          Ze = t.Error,
          Qe = t.Function,
          et = t.Math,
          tt = t.Object,
          nt = t.RegExp,
          rt = t.String,
          it = t.TypeError,
          at = r.prototype,
          st = Qe.prototype,
          ot = tt.prototype,
          ut = t["__core-js_shared__"],
          lt = st.toString,
          dt = ot.hasOwnProperty,
          ct = 0,
          ht = (n = /[^.]+$/.exec(ut && ut.keys && ut.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
          mt = ot.toString,
          ft = lt.call(tt),
          _t = At._,
          pt = nt("^" + lt.call(dt).replace(Ee, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          yt = Pt ? t.Buffer : a,
          Mt = t.Symbol,
          kt = t.Uint8Array,
          xt = yt ? yt.allocUnsafe : a,
          Ht = Tn(tt.getPrototypeOf, tt),
          Et = tt.create,
          Ct = ot.propertyIsEnumerable,
          Ot = at.splice,
          Wt = Mt ? Mt.isConcatSpreadable : a,
          Nt = Mt ? Mt.iterator : a,
          an = Mt ? Mt.toStringTag : a,
          mn = function() {
            try {
              var e = Fa(tt, "defineProperty");
              return e({}, "", {}), e
            } catch (e) {}
          }(),
          Pn = t.clearTimeout !== At.clearTimeout && t.clearTimeout,
          Wn = i && i.now !== At.Date.now && i.now,
          Nn = t.setTimeout !== At.setTimeout && t.setTimeout,
          Fn = et.ceil,
          In = et.floor,
          Rn = tt.getOwnPropertySymbols,
          zn = yt ? yt.isBuffer : a,
          $n = t.isFinite,
          qn = at.join,
          Bn = Tn(tt.keys, tt),
          Un = et.max,
          Vn = et.min,
          Jn = i.now,
          Gn = t.parseInt,
          Kn = et.random,
          Xn = at.reverse,
          Zn = Fa(t, "DataView"),
          Qn = Fa(t, "Map"),
          er = Fa(t, "Promise"),
          tr = Fa(t, "Set"),
          nr = Fa(t, "WeakMap"),
          rr = Fa(tt, "create"),
          ir = nr && new nr,
          ar = {},
          sr = ds(Zn),
          or = ds(Qn),
          ur = ds(er),
          lr = ds(tr),
          dr = ds(nr),
          cr = Mt ? Mt.prototype : a,
          hr = cr ? cr.valueOf : a,
          mr = cr ? cr.toString : a;

        function fr(e) {
          if (xo(e) && !yo(e) && !(e instanceof gr)) {
            if (e instanceof yr) return e;
            if (dt.call(e, "__wrapped__")) return cs(e)
          }
          return new yr(e)
        }
        var _r = function() {
          function e() {}
          return function(t) {
            if (!To(t)) return {};
            if (Et) return Et(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = a, n
          }
        }();

        function pr() {}

        function yr(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = a
        }

        function gr(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = W, this.__views__ = []
        }

        function vr(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
          }
        }

        function Mr(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
          }
        }

        function Lr(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
          }
        }

        function kr(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new Lr; ++t < n;) this.add(e[t])
        }

        function br(e) {
          var t = this.__data__ = new Mr(e);
          this.size = t.size
        }

        function Yr(e, t) {
          var n = yo(e),
            r = !n && po(e),
            i = !n && !r && Lo(e),
            a = !n && !r && !i && Po(e),
            s = n || r || i || a,
            o = s ? pn(e.length, rt) : [],
            u = o.length;
          for (var l in e) !t && !dt.call(e, l) || s && ("length" == l || i && ("offset" == l || "parent" == l) || a && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Ua(l, u)) || o.push(l);
          return o
        }

        function wr(e) {
          var t = e.length;
          return t ? e[ki(0, t - 1)] : a
        }

        function Dr(e, t) {
          return os(ra(e), Or(t, 0, e.length))
        }

        function Tr(e) {
          return os(ra(e))
        }

        function xr(e, t, n) {
          (n === a || mo(e[t], n)) && (n !== a || t in e) || Ar(e, t, n)
        }

        function Sr(e, t, n) {
          var r = e[t];
          dt.call(e, t) && mo(r, n) && (n !== a || t in e) || Ar(e, t, n)
        }

        function jr(e, t) {
          for (var n = e.length; n--;)
            if (mo(e[n][0], t)) return n;
          return -1
        }

        function Hr(e, t, n, r) {
          return Ir(e, function(e, i, a) {
            t(r, e, n(e), a)
          }), r
        }

        function Er(e, t) {
          return e && ia(t, iu(t), e)
        }

        function Ar(e, t, n) {
          "__proto__" == t && mn ? mn(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n
        }

        function Cr(e, t) {
          for (var n = -1, i = t.length, s = r(i), o = null == e; ++n < i;) s[n] = o ? a : Qo(e, t[n]);
          return s
        }

        function Or(e, t, n) {
          return e == e && (n !== a && (e = e <= n ? e : n), t !== a && (e = e >= t ? e : t)), e
        }

        function Pr(e, t, n, r, i, s) {
          var o, u = t & h,
            l = t & m,
            d = t & f;
          if (n && (o = i ? n(e, r, i, s) : n(e)), o !== a) return o;
          if (!To(e)) return e;
          var c = yo(e);
          if (c) {
            if (o = function(e) {
                var t = e.length,
                  n = new e.constructor(t);
                return t && "string" == typeof e[0] && dt.call(e, "index") && (n.index = e.index, n.input = e.input), n
              }(e), !u) return ra(e, o)
          } else {
            var _ = za(e),
              p = _ == J || _ == G;
            if (Lo(e)) return Xi(e, u);
            if (_ == Q || _ == R || p && !i) {
              if (o = l || p ? {} : qa(e), !u) return l ? function(e, t) {
                return ia(e, Ra(e), t)
              }(e, function(e, t) {
                return e && ia(t, au(t), e)
              }(o, e)) : function(e, t) {
                return ia(e, Ia(e), t)
              }(e, Er(o, e))
            } else {
              if (!Tt[_]) return i ? e : {};
              o = function(e, t, n) {
                var r, i, a, s = e.constructor;
                switch (t) {
                  case ue:
                    return Zi(e);
                  case q:
                  case B:
                    return new s(+e);
                  case le:
                    return function(e, t) {
                      var n = t ? Zi(e.buffer) : e.buffer;
                      return new e.constructor(n, e.byteOffset, e.byteLength)
                    }(e, n);
                  case de:
                  case ce:
                  case he:
                  case me:
                  case fe:
                  case _e:
                  case pe:
                  case ye:
                  case ge:
                    return Qi(e, n);
                  case K:
                    return new s;
                  case X:
                  case re:
                    return new s(e);
                  case te:
                    return (a = new(i = e).constructor(i.source, $e.exec(i))).lastIndex = i.lastIndex, a;
                  case ne:
                    return new s;
                  case ie:
                    return r = e, hr ? tt(hr.call(r)) : {}
                }
              }(e, _, u)
            }
          }
          s || (s = new br);
          var y = s.get(e);
          if (y) return y;
          if (s.set(e, o), Ao(e)) return e.forEach(function(r) {
            o.add(Pr(r, t, n, r, e, s))
          }), o;
          if (So(e)) return e.forEach(function(r, i) {
            o.set(i, Pr(r, t, n, i, e, s))
          }), o;
          var g = c ? a : (d ? l ? Ea : Ha : l ? au : iu)(e);
          return Vt(g || e, function(r, i) {
            g && (r = e[i = r]), Sr(o, i, Pr(r, t, n, i, e, s))
          }), o
        }

        function Wr(e, t, n) {
          var r = n.length;
          if (null == e) return !r;
          for (e = tt(e); r--;) {
            var i = n[r],
              s = t[i],
              o = e[i];
            if (o === a && !(i in e) || !s(o)) return !1
          }
          return !0
        }

        function Nr(e, t, n) {
          if ("function" != typeof e) throw new it(u);
          return rs(function() {
            e.apply(a, n)
          }, t)
        }

        function Fr(e, t, n, r) {
          var i = -1,
            a = Xt,
            o = !0,
            u = e.length,
            l = [],
            d = t.length;
          if (!u) return l;
          n && (t = Qt(t, yn(n))), r ? (a = Zt, o = !1) : t.length >= s && (a = vn, o = !1, t = new kr(t));
          e: for (; ++i < u;) {
            var c = e[i],
              h = null == n ? c : n(c);
            if (c = r || 0 !== c ? c : 0, o && h == h) {
              for (var m = d; m--;)
                if (t[m] === h) continue e;
              l.push(c)
            } else a(t, h, r) || l.push(c)
          }
          return l
        }
        fr.templateSettings = {
          escape: De,
          evaluate: Te,
          interpolate: xe,
          variable: "",
          imports: {
            _: fr
          }
        }, fr.prototype = pr.prototype, fr.prototype.constructor = fr, yr.prototype = _r(pr.prototype), yr.prototype.constructor = yr, gr.prototype = _r(pr.prototype), gr.prototype.constructor = gr, vr.prototype.clear = function() {
          this.__data__ = rr ? rr(null) : {}, this.size = 0
        }, vr.prototype.delete = function(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t
        }, vr.prototype.get = function(e) {
          var t = this.__data__;
          if (rr) {
            var n = t[e];
            return n === l ? a : n
          }
          return dt.call(t, e) ? t[e] : a
        }, vr.prototype.has = function(e) {
          var t = this.__data__;
          return rr ? t[e] !== a : dt.call(t, e)
        }, vr.prototype.set = function(e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = rr && t === a ? l : t, this
        }, Mr.prototype.clear = function() {
          this.__data__ = [], this.size = 0
        }, Mr.prototype.delete = function(e) {
          var t = this.__data__,
            n = jr(t, e);
          return !(n < 0 || (n == t.length - 1 ? t.pop() : Ot.call(t, n, 1), --this.size, 0))
        }, Mr.prototype.get = function(e) {
          var t = this.__data__,
            n = jr(t, e);
          return n < 0 ? a : t[n][1]
        }, Mr.prototype.has = function(e) {
          return jr(this.__data__, e) > -1
        }, Mr.prototype.set = function(e, t) {
          var n = this.__data__,
            r = jr(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }, Lr.prototype.clear = function() {
          this.size = 0, this.__data__ = {
            hash: new vr,
            map: new(Qn || Mr),
            string: new vr
          }
        }, Lr.prototype.delete = function(e) {
          var t = Wa(this, e).delete(e);
          return this.size -= t ? 1 : 0, t
        }, Lr.prototype.get = function(e) {
          return Wa(this, e).get(e)
        }, Lr.prototype.has = function(e) {
          return Wa(this, e).has(e)
        }, Lr.prototype.set = function(e, t) {
          var n = Wa(this, e),
            r = n.size;
          return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }, kr.prototype.add = kr.prototype.push = function(e) {
          return this.__data__.set(e, l), this
        }, kr.prototype.has = function(e) {
          return this.__data__.has(e)
        }, br.prototype.clear = function() {
          this.__data__ = new Mr, this.size = 0
        }, br.prototype.delete = function(e) {
          var t = this.__data__,
            n = t.delete(e);
          return this.size = t.size, n
        }, br.prototype.get = function(e) {
          return this.__data__.get(e)
        }, br.prototype.has = function(e) {
          return this.__data__.has(e)
        }, br.prototype.set = function(e, t) {
          var n = this.__data__;
          if (n instanceof Mr) {
            var r = n.__data__;
            if (!Qn || r.length < s - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new Lr(r)
          }
          return n.set(e, t), this.size = n.size, this
        };
        var Ir = oa(Jr),
          Rr = oa(Gr, !0);

        function zr(e, t) {
          var n = !0;
          return Ir(e, function(e, r, i) {
            return n = !!t(e, r, i)
          }), n
        }

        function $r(e, t, n) {
          for (var r = -1, i = e.length; ++r < i;) {
            var s = e[r],
              o = t(s);
            if (null != o && (u === a ? o == o && !Oo(o) : n(o, u))) var u = o,
              l = s
          }
          return l
        }

        function qr(e, t) {
          var n = [];
          return Ir(e, function(e, r, i) {
            t(e, r, i) && n.push(e)
          }), n
        }

        function Br(e, t, n, r, i) {
          var a = -1,
            s = e.length;
          for (n || (n = Ba), i || (i = []); ++a < s;) {
            var o = e[a];
            t > 0 && n(o) ? t > 1 ? Br(o, t - 1, n, r, i) : en(i, o) : r || (i[i.length] = o)
          }
          return i
        }
        var Ur = ua(),
          Vr = ua(!0);

        function Jr(e, t) {
          return e && Ur(e, t, iu)
        }

        function Gr(e, t) {
          return e && Vr(e, t, iu)
        }

        function Kr(e, t) {
          return Kt(t, function(t) {
            return Yo(e[t])
          })
        }

        function Xr(e, t) {
          for (var n = 0, r = (t = Vi(t, e)).length; null != e && n < r;) e = e[ls(t[n++])];
          return n && n == r ? e : a
        }

        function Zr(e, t, n) {
          var r = t(e);
          return yo(e) ? r : en(r, n(e))
        }

        function Qr(e) {
          return null == e ? e === a ? ae : Z : an && an in tt(e) ? function(e) {
            var t = dt.call(e, an),
              n = e[an];
            try {
              e[an] = a;
              var r = !0
            } catch (e) {}
            var i = mt.call(e);
            return r && (t ? e[an] = n : delete e[an]), i
          }(e) : function(e) {
            return mt.call(e)
          }(e)
        }

        function ei(e, t) {
          return e > t
        }

        function ti(e, t) {
          return null != e && dt.call(e, t)
        }

        function ni(e, t) {
          return null != e && t in tt(e)
        }

        function ri(e, t, n) {
          for (var i = n ? Zt : Xt, s = e[0].length, o = e.length, u = o, l = r(o), d = 1 / 0, c = []; u--;) {
            var h = e[u];
            u && t && (h = Qt(h, yn(t))), d = Vn(h.length, d), l[u] = !n && (t || s >= 120 && h.length >= 120) ? new kr(u && h) : a
          }
          h = e[0];
          var m = -1,
            f = l[0];
          e: for (; ++m < s && c.length < d;) {
            var _ = h[m],
              p = t ? t(_) : _;
            if (_ = n || 0 !== _ ? _ : 0, !(f ? vn(f, p) : i(c, p, n))) {
              for (u = o; --u;) {
                var y = l[u];
                if (!(y ? vn(y, p) : i(e[u], p, n))) continue e
              }
              f && f.push(p), c.push(_)
            }
          }
          return c
        }

        function ii(e, t, n) {
          var r = null == (e = ts(e, t = Vi(t, e))) ? e : e[ls(ks(t))];
          return null == r ? a : Bt(r, e, n)
        }

        function ai(e) {
          return xo(e) && Qr(e) == R
        }

        function si(e, t, n, r, i) {
          return e === t || (null == e || null == t || !xo(e) && !xo(t) ? e != e && t != t : function(e, t, n, r, i, s) {
            var o = yo(e),
              u = yo(t),
              l = o ? z : za(e),
              d = u ? z : za(t),
              c = (l = l == R ? Q : l) == Q,
              h = (d = d == R ? Q : d) == Q,
              m = l == d;
            if (m && Lo(e)) {
              if (!Lo(t)) return !1;
              o = !0, c = !1
            }
            if (m && !c) return s || (s = new br), o || Po(e) ? Sa(e, t, n, r, i, s) : function(e, t, n, r, i, a, s) {
              switch (n) {
                case le:
                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                  e = e.buffer, t = t.buffer;
                case ue:
                  return !(e.byteLength != t.byteLength || !a(new kt(e), new kt(t)));
                case q:
                case B:
                case X:
                  return mo(+e, +t);
                case V:
                  return e.name == t.name && e.message == t.message;
                case te:
                case re:
                  return e == t + "";
                case K:
                  var o = Dn;
                case ne:
                  var u = r & _;
                  if (o || (o = jn), e.size != t.size && !u) return !1;
                  var l = s.get(e);
                  if (l) return l == t;
                  r |= p, s.set(e, t);
                  var d = Sa(o(e), o(t), r, i, a, s);
                  return s.delete(e), d;
                case ie:
                  if (hr) return hr.call(e) == hr.call(t)
              }
              return !1
            }(e, t, l, n, r, i, s);
            if (!(n & _)) {
              var f = c && dt.call(e, "__wrapped__"),
                y = h && dt.call(t, "__wrapped__");
              if (f || y) {
                var g = f ? e.value() : e,
                  v = y ? t.value() : t;
                return s || (s = new br), i(g, v, n, r, s)
              }
            }
            return !!m && (s || (s = new br), function(e, t, n, r, i, s) {
              var o = n & _,
                u = Ha(e),
                l = u.length,
                d = Ha(t).length;
              if (l != d && !o) return !1;
              for (var c = l; c--;) {
                var h = u[c];
                if (!(o ? h in t : dt.call(t, h))) return !1
              }
              var m = s.get(e);
              if (m && s.get(t)) return m == t;
              var f = !0;
              s.set(e, t), s.set(t, e);
              for (var p = o; ++c < l;) {
                h = u[c];
                var y = e[h],
                  g = t[h];
                if (r) var v = o ? r(g, y, h, t, e, s) : r(y, g, h, e, t, s);
                if (!(v === a ? y === g || i(y, g, n, r, s) : v)) {
                  f = !1;
                  break
                }
                p || (p = "constructor" == h)
              }
              if (f && !p) {
                var M = e.constructor,
                  L = t.constructor;
                M != L && "constructor" in e && "constructor" in t && !("function" == typeof M && M instanceof M && "function" == typeof L && L instanceof L) && (f = !1)
              }
              return s.delete(e), s.delete(t), f
            }(e, t, n, r, i, s))
          }(e, t, n, r, si, i))
        }

        function oi(e, t, n, r) {
          var i = n.length,
            s = i,
            o = !r;
          if (null == e) return !s;
          for (e = tt(e); i--;) {
            var u = n[i];
            if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
          }
          for (; ++i < s;) {
            var l = (u = n[i])[0],
              d = e[l],
              c = u[1];
            if (o && u[2]) {
              if (d === a && !(l in e)) return !1
            } else {
              var h = new br;
              if (r) var m = r(d, c, l, e, t, h);
              if (!(m === a ? si(c, d, _ | p, r, h) : m)) return !1
            }
          }
          return !0
        }

        function ui(e) {
          return !(!To(e) || ht && ht in e) && (Yo(e) ? pt : Ue).test(ds(e))
        }

        function li(e) {
          return "function" == typeof e ? e : null == e ? ju : "object" == typeof e ? yo(e) ? _i(e[0], e[1]) : fi(e) : Fu(e)
        }

        function di(e) {
          if (!Xa(e)) return Bn(e);
          var t = [];
          for (var n in tt(e)) dt.call(e, n) && "constructor" != n && t.push(n);
          return t
        }

        function ci(e) {
          if (!To(e)) return function(e) {
            var t = [];
            if (null != e)
              for (var n in tt(e)) t.push(n);
            return t
          }(e);
          var t = Xa(e),
            n = [];
          for (var r in e)("constructor" != r || !t && dt.call(e, r)) && n.push(r);
          return n
        }

        function hi(e, t) {
          return e < t
        }

        function mi(e, t) {
          var n = -1,
            i = vo(e) ? r(e.length) : [];
          return Ir(e, function(e, r, a) {
            i[++n] = t(e, r, a)
          }), i
        }

        function fi(e) {
          var t = Na(e);
          return 1 == t.length && t[0][2] ? Qa(t[0][0], t[0][1]) : function(n) {
            return n === e || oi(n, e, t)
          }
        }

        function _i(e, t) {
          return Ja(e) && Za(t) ? Qa(ls(e), t) : function(n) {
            var r = Qo(n, e);
            return r === a && r === t ? eu(n, e) : si(t, r, _ | p)
          }
        }

        function pi(e, t, n, r, i) {
          e !== t && Ur(t, function(s, o) {
            if (To(s)) i || (i = new br),
              function(e, t, n, r, i, s, o) {
                var u = Sn(e, n),
                  l = Sn(t, n),
                  d = o.get(l);
                if (d) xr(e, n, d);
                else {
                  var c = s ? s(u, l, n + "", e, t, o) : a,
                    h = c === a;
                  if (h) {
                    var m = yo(l),
                      f = !m && Lo(l),
                      _ = !m && !f && Po(l);
                    c = l, m || f || _ ? yo(u) ? c = u : Mo(u) ? c = ra(u) : f ? (h = !1, c = Xi(l, !0)) : _ ? (h = !1, c = Qi(l, !0)) : c = [] : Ho(l) || po(l) ? (c = u, po(u) ? c = qo(u) : (!To(u) || r && Yo(u)) && (c = qa(l))) : h = !1
                  }
                  h && (o.set(l, c), i(c, l, r, s, o), o.delete(l)), xr(e, n, c)
                }
              }(e, t, o, n, pi, r, i);
            else {
              var u = r ? r(Sn(e, o), s, o + "", e, t, i) : a;
              u === a && (u = s), xr(e, o, u)
            }
          }, au)
        }

        function yi(e, t) {
          var n = e.length;
          if (n) return Ua(t += t < 0 ? n : 0, n) ? e[t] : a
        }

        function gi(e, t, n) {
          var r = -1;
          return t = Qt(t.length ? t : [ju], yn(Pa())),
            function(e, t) {
              var n = e.length;
              for (e.sort(t); n--;) e[n] = e[n].value;
              return e
            }(mi(e, function(e, n, i) {
              return {
                criteria: Qt(t, function(t) {
                  return t(e)
                }),
                index: ++r,
                value: e
              }
            }), function(e, t) {
              return function(e, t, n) {
                for (var r = -1, i = e.criteria, a = t.criteria, s = i.length, o = n.length; ++r < s;) {
                  var u = ea(i[r], a[r]);
                  if (u) {
                    if (r >= o) return u;
                    var l = n[r];
                    return u * ("desc" == l ? -1 : 1)
                  }
                }
                return e.index - t.index
              }(e, t, n)
            })
        }

        function vi(e, t, n) {
          for (var r = -1, i = t.length, a = {}; ++r < i;) {
            var s = t[r],
              o = Xr(e, s);
            n(o, s) && Ti(a, Vi(s, e), o)
          }
          return a
        }

        function Mi(e, t, n, r) {
          var i = r ? ln : un,
            a = -1,
            s = t.length,
            o = e;
          for (e === t && (t = ra(t)), n && (o = Qt(e, yn(n))); ++a < s;)
            for (var u = 0, l = t[a], d = n ? n(l) : l;
              (u = i(o, d, u, r)) > -1;) o !== e && Ot.call(o, u, 1), Ot.call(e, u, 1);
          return e
        }

        function Li(e, t) {
          for (var n = e ? t.length : 0, r = n - 1; n--;) {
            var i = t[n];
            if (n == r || i !== a) {
              var a = i;
              Ua(i) ? Ot.call(e, i, 1) : Fi(e, i)
            }
          }
          return e
        }

        function ki(e, t) {
          return e + In(Kn() * (t - e + 1))
        }

        function bi(e, t) {
          var n = "";
          if (!e || t < 1 || t > C) return n;
          do {
            t % 2 && (n += e), (t = In(t / 2)) && (e += e)
          } while (t);
          return n
        }

        function Yi(e, t) {
          return is(es(e, t, ju), e + "")
        }

        function wi(e) {
          return wr(mu(e))
        }

        function Di(e, t) {
          var n = mu(e);
          return os(n, Or(t, 0, n.length))
        }

        function Ti(e, t, n, r) {
          if (!To(e)) return e;
          for (var i = -1, s = (t = Vi(t, e)).length, o = s - 1, u = e; null != u && ++i < s;) {
            var l = ls(t[i]),
              d = n;
            if (i != o) {
              var c = u[l];
              (d = r ? r(c, l, u) : a) === a && (d = To(c) ? c : Ua(t[i + 1]) ? [] : {})
            }
            Sr(u, l, d), u = u[l]
          }
          return e
        }
        var xi = ir ? function(e, t) {
            return ir.set(e, t), e
          } : ju,
          Si = mn ? function(e, t) {
            return mn(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: Tu(t),
              writable: !0
            })
          } : ju;

        function ji(e) {
          return os(mu(e))
        }

        function Hi(e, t, n) {
          var i = -1,
            a = e.length;
          t < 0 && (t = -t > a ? 0 : a + t), (n = n > a ? a : n) < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var s = r(a); ++i < a;) s[i] = e[i + t];
          return s
        }

        function Ei(e, t) {
          var n;
          return Ir(e, function(e, r, i) {
            return !(n = t(e, r, i))
          }), !!n
        }

        function Ai(e, t, n) {
          var r = 0,
            i = null == e ? r : e.length;
          if ("number" == typeof t && t == t && i <= F) {
            for (; r < i;) {
              var a = r + i >>> 1,
                s = e[a];
              null !== s && !Oo(s) && (n ? s <= t : s < t) ? r = a + 1 : i = a
            }
            return i
          }
          return Ci(e, t, ju, n)
        }

        function Ci(e, t, n, r) {
          t = n(t);
          for (var i = 0, s = null == e ? 0 : e.length, o = t != t, u = null === t, l = Oo(t), d = t === a; i < s;) {
            var c = In((i + s) / 2),
              h = n(e[c]),
              m = h !== a,
              f = null === h,
              _ = h == h,
              p = Oo(h);
            if (o) var y = r || _;
            else y = d ? _ && (r || m) : u ? _ && m && (r || !f) : l ? _ && m && !f && (r || !p) : !f && !p && (r ? h <= t : h < t);
            y ? i = c + 1 : s = c
          }
          return Vn(s, N)
        }

        function Oi(e, t) {
          for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
            var s = e[n],
              o = t ? t(s) : s;
            if (!n || !mo(o, u)) {
              var u = o;
              a[i++] = 0 === s ? 0 : s
            }
          }
          return a
        }

        function Pi(e) {
          return "number" == typeof e ? e : Oo(e) ? P : +e
        }

        function Wi(e) {
          if ("string" == typeof e) return e;
          if (yo(e)) return Qt(e, Wi) + "";
          if (Oo(e)) return mr ? mr.call(e) : "";
          var t = e + "";
          return "0" == t && 1 / e == -A ? "-0" : t
        }

        function Ni(e, t, n) {
          var r = -1,
            i = Xt,
            a = e.length,
            o = !0,
            u = [],
            l = u;
          if (n) o = !1, i = Zt;
          else if (a >= s) {
            var d = t ? null : ba(e);
            if (d) return jn(d);
            o = !1, i = vn, l = new kr
          } else l = t ? [] : u;
          e: for (; ++r < a;) {
            var c = e[r],
              h = t ? t(c) : c;
            if (c = n || 0 !== c ? c : 0, o && h == h) {
              for (var m = l.length; m--;)
                if (l[m] === h) continue e;
              t && l.push(h), u.push(c)
            } else i(l, h, n) || (l !== u && l.push(h), u.push(c))
          }
          return u
        }

        function Fi(e, t) {
          return null == (e = ts(e, t = Vi(t, e))) || delete e[ls(ks(t))]
        }

        function Ii(e, t, n, r) {
          return Ti(e, t, n(Xr(e, t)), r)
        }

        function Ri(e, t, n, r) {
          for (var i = e.length, a = r ? i : -1;
            (r ? a-- : ++a < i) && t(e[a], a, e););
          return n ? Hi(e, r ? 0 : a, r ? a + 1 : i) : Hi(e, r ? a + 1 : 0, r ? i : a)
        }

        function zi(e, t) {
          var n = e;
          return n instanceof gr && (n = n.value()), tn(t, function(e, t) {
            return t.func.apply(t.thisArg, en([e], t.args))
          }, n)
        }

        function $i(e, t, n) {
          var i = e.length;
          if (i < 2) return i ? Ni(e[0]) : [];
          for (var a = -1, s = r(i); ++a < i;)
            for (var o = e[a], u = -1; ++u < i;) u != a && (s[a] = Fr(s[a] || o, e[u], t, n));
          return Ni(Br(s, 1), t, n)
        }

        function qi(e, t, n) {
          for (var r = -1, i = e.length, s = t.length, o = {}; ++r < i;) {
            var u = r < s ? t[r] : a;
            n(o, e[r], u)
          }
          return o
        }

        function Bi(e) {
          return Mo(e) ? e : []
        }

        function Ui(e) {
          return "function" == typeof e ? e : ju
        }

        function Vi(e, t) {
          return yo(e) ? e : Ja(e, t) ? [e] : us(Bo(e))
        }
        var Ji = Yi;

        function Gi(e, t, n) {
          var r = e.length;
          return n = n === a ? r : n, !t && n >= r ? e : Hi(e, t, n)
        }
        var Ki = Pn || function(e) {
          return At.clearTimeout(e)
        };

        function Xi(e, t) {
          if (t) return e.slice();
          var n = e.length,
            r = xt ? xt(n) : new e.constructor(n);
          return e.copy(r), r
        }

        function Zi(e) {
          var t = new e.constructor(e.byteLength);
          return new kt(t).set(new kt(e)), t
        }

        function Qi(e, t) {
          var n = t ? Zi(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length)
        }

        function ea(e, t) {
          if (e !== t) {
            var n = e !== a,
              r = null === e,
              i = e == e,
              s = Oo(e),
              o = t !== a,
              u = null === t,
              l = t == t,
              d = Oo(t);
            if (!u && !d && !s && e > t || s && o && l && !u && !d || r && o && l || !n && l || !i) return 1;
            if (!r && !s && !d && e < t || d && n && i && !r && !s || u && n && i || !o && i || !l) return -1
          }
          return 0
        }

        function ta(e, t, n, i) {
          for (var a = -1, s = e.length, o = n.length, u = -1, l = t.length, d = Un(s - o, 0), c = r(l + d), h = !i; ++u < l;) c[u] = t[u];
          for (; ++a < o;)(h || a < s) && (c[n[a]] = e[a]);
          for (; d--;) c[u++] = e[a++];
          return c
        }

        function na(e, t, n, i) {
          for (var a = -1, s = e.length, o = -1, u = n.length, l = -1, d = t.length, c = Un(s - u, 0), h = r(c + d), m = !i; ++a < c;) h[a] = e[a];
          for (var f = a; ++l < d;) h[f + l] = t[l];
          for (; ++o < u;)(m || a < s) && (h[f + n[o]] = e[a++]);
          return h
        }

        function ra(e, t) {
          var n = -1,
            i = e.length;
          for (t || (t = r(i)); ++n < i;) t[n] = e[n];
          return t
        }

        function ia(e, t, n, r) {
          var i = !n;
          n || (n = {});
          for (var s = -1, o = t.length; ++s < o;) {
            var u = t[s],
              l = r ? r(n[u], e[u], u, n, e) : a;
            l === a && (l = e[u]), i ? Ar(n, u, l) : Sr(n, u, l)
          }
          return n
        }

        function aa(e, t) {
          return function(n, r) {
            var i = yo(n) ? Ut : Hr,
              a = t ? t() : {};
            return i(n, e, Pa(r, 2), a)
          }
        }

        function sa(e) {
          return Yi(function(t, n) {
            var r = -1,
              i = n.length,
              s = i > 1 ? n[i - 1] : a,
              o = i > 2 ? n[2] : a;
            for (s = e.length > 3 && "function" == typeof s ? (i--, s) : a, o && Va(n[0], n[1], o) && (s = i < 3 ? a : s, i = 1), t = tt(t); ++r < i;) {
              var u = n[r];
              u && e(t, u, r, s)
            }
            return t
          })
        }

        function oa(e, t) {
          return function(n, r) {
            if (null == n) return n;
            if (!vo(n)) return e(n, r);
            for (var i = n.length, a = t ? i : -1, s = tt(n);
              (t ? a-- : ++a < i) && !1 !== r(s[a], a, s););
            return n
          }
        }

        function ua(e) {
          return function(t, n, r) {
            for (var i = -1, a = tt(t), s = r(t), o = s.length; o--;) {
              var u = s[e ? o : ++i];
              if (!1 === n(a[u], u, a)) break
            }
            return t
          }
        }

        function la(e) {
          return function(t) {
            var n = wn(t = Bo(t)) ? An(t) : a,
              r = n ? n[0] : t.charAt(0),
              i = n ? Gi(n, 1).join("") : t.slice(1);
            return r[e]() + i
          }
        }

        function da(e) {
          return function(t) {
            return tn(Yu(pu(t).replace(gt, "")), e, "")
          }
        }

        function ca(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e;
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var n = _r(e.prototype),
              r = e.apply(n, t);
            return To(r) ? r : n
          }
        }

        function ha(e) {
          return function(t, n, r) {
            var i = tt(t);
            if (!vo(t)) {
              var s = Pa(n, 3);
              t = iu(t), n = function(e) {
                return s(i[e], e, i)
              }
            }
            var o = e(t, n, r);
            return o > -1 ? i[s ? t[o] : o] : a
          }
        }

        function ma(e) {
          return ja(function(t) {
            var n = t.length,
              r = n,
              i = yr.prototype.thru;
            for (e && t.reverse(); r--;) {
              var s = t[r];
              if ("function" != typeof s) throw new it(u);
              if (i && !o && "wrapper" == Ca(s)) var o = new yr([], !0)
            }
            for (r = o ? r : n; ++r < n;) {
              var l = Ca(s = t[r]),
                d = "wrapper" == l ? Aa(s) : a;
              o = d && Ga(d[0]) && d[1] == (Y | M | k | w) && !d[4].length && 1 == d[9] ? o[Ca(d[0])].apply(o, d[3]) : 1 == s.length && Ga(s) ? o[l]() : o.thru(s)
            }
            return function() {
              var e = arguments,
                r = e[0];
              if (o && 1 == e.length && yo(r)) return o.plant(r).value();
              for (var i = 0, a = n ? t[i].apply(this, e) : r; ++i < n;) a = t[i].call(this, a);
              return a
            }
          })
        }

        function fa(e, t, n, i, s, o, u, l, d, c) {
          var h = t & Y,
            m = t & y,
            f = t & g,
            _ = t & (M | L),
            p = t & D,
            v = f ? a : ca(e);
          return function y() {
            for (var g = arguments.length, M = r(g), L = g; L--;) M[L] = arguments[L];
            if (_) var k = Oa(y),
              b = function(e, t) {
                for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                return r
              }(M, k);
            if (i && (M = ta(M, i, s, _)), o && (M = na(M, o, u, _)), g -= b, _ && g < c) {
              var Y = xn(M, k);
              return La(e, t, fa, y.placeholder, n, M, Y, l, d, c - g)
            }
            var w = m ? n : this,
              D = f ? w[e] : e;
            return g = M.length, l ? M = function(e, t) {
              for (var n = e.length, r = Vn(t.length, n), i = ra(e); r--;) {
                var s = t[r];
                e[r] = Ua(s, n) ? i[s] : a
              }
              return e
            }(M, l) : p && g > 1 && M.reverse(), h && d < g && (M.length = d), this && this !== At && this instanceof y && (D = v || ca(D)), D.apply(w, M)
          }
        }

        function _a(e, t) {
          return function(n, r) {
            return function(e, t, n, r) {
              return Jr(e, function(e, i, a) {
                t(r, n(e), i, a)
              }), r
            }(n, e, t(r), {})
          }
        }

        function pa(e, t) {
          return function(n, r) {
            var i;
            if (n === a && r === a) return t;
            if (n !== a && (i = n), r !== a) {
              if (i === a) return r;
              "string" == typeof n || "string" == typeof r ? (n = Wi(n), r = Wi(r)) : (n = Pi(n), r = Pi(r)), i = e(n, r)
            }
            return i
          }
        }

        function ya(e) {
          return ja(function(t) {
            return t = Qt(t, yn(Pa())), Yi(function(n) {
              var r = this;
              return e(t, function(e) {
                return Bt(e, r, n)
              })
            })
          })
        }

        function ga(e, t) {
          var n = (t = t === a ? " " : Wi(t)).length;
          if (n < 2) return n ? bi(t, e) : t;
          var r = bi(t, Fn(e / En(t)));
          return wn(t) ? Gi(An(r), 0, e).join("") : r.slice(0, e)
        }

        function va(e) {
          return function(t, n, i) {
            return i && "number" != typeof i && Va(t, n, i) && (n = i = a), t = Io(t), n === a ? (n = t, t = 0) : n = Io(n),
              function(e, t, n, i) {
                for (var a = -1, s = Un(Fn((t - e) / (n || 1)), 0), o = r(s); s--;) o[i ? s : ++a] = e, e += n;
                return o
              }(t, n, i = i === a ? t < n ? 1 : -1 : Io(i), e)
          }
        }

        function Ma(e) {
          return function(t, n) {
            return "string" == typeof t && "string" == typeof n || (t = $o(t), n = $o(n)), e(t, n)
          }
        }

        function La(e, t, n, r, i, s, o, u, l, d) {
          var c = t & M;
          t |= c ? k : b, (t &= ~(c ? b : k)) & v || (t &= ~(y | g));
          var h = [e, t, i, c ? s : a, c ? o : a, c ? a : s, c ? a : o, u, l, d],
            m = n.apply(a, h);
          return Ga(e) && ns(m, h), m.placeholder = r, as(m, e, t)
        }

        function ka(e) {
          var t = et[e];
          return function(e, n) {
            if (e = $o(e), n = null == n ? 0 : Vn(Ro(n), 292)) {
              var r = (Bo(e) + "e").split("e");
              return +((r = (Bo(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return t(e)
          }
        }
        var ba = tr && 1 / jn(new tr([, -0]))[1] == A ? function(e) {
          return new tr(e)
        } : Ou;

        function Ya(e) {
          return function(t) {
            var n = za(t);
            return n == K ? Dn(t) : n == ne ? Hn(t) : function(e, t) {
              return Qt(t, function(t) {
                return [t, e[t]]
              })
            }(t, e(t))
          }
        }

        function wa(e, t, n, i, s, o, l, d) {
          var h = t & g;
          if (!h && "function" != typeof e) throw new it(u);
          var m = i ? i.length : 0;
          if (m || (t &= ~(k | b), i = s = a), l = l === a ? l : Un(Ro(l), 0), d = d === a ? d : Ro(d), m -= s ? s.length : 0, t & b) {
            var f = i,
              _ = s;
            i = s = a
          }
          var p = h ? a : Aa(e),
            D = [e, t, n, i, s, f, _, o, l, d];
          if (p && function(e, t) {
              var n = e[1],
                r = t[1],
                i = n | r,
                a = i < (y | g | Y),
                s = r == Y && n == M || r == Y && n == w && e[7].length <= t[8] || r == (Y | w) && t[7].length <= t[8] && n == M;
              if (!a && !s) return e;
              r & y && (e[2] = t[2], i |= n & y ? 0 : v);
              var o = t[3];
              if (o) {
                var u = e[3];
                e[3] = u ? ta(u, o, t[4]) : o, e[4] = u ? xn(e[3], c) : t[4]
              }(o = t[5]) && (u = e[5], e[5] = u ? na(u, o, t[6]) : o, e[6] = u ? xn(e[5], c) : t[6]), (o = t[7]) && (e[7] = o), r & Y && (e[8] = null == e[8] ? t[8] : Vn(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
            }(D, p), e = D[0], t = D[1], n = D[2], i = D[3], s = D[4], !(d = D[9] = D[9] === a ? h ? 0 : e.length : Un(D[9] - m, 0)) && t & (M | L) && (t &= ~(M | L)), t && t != y) T = t == M || t == L ? function(e, t, n) {
            var i = ca(e);
            return function s() {
              for (var o = arguments.length, u = r(o), l = o, d = Oa(s); l--;) u[l] = arguments[l];
              var c = o < 3 && u[0] !== d && u[o - 1] !== d ? [] : xn(u, d);
              return (o -= c.length) < n ? La(e, t, fa, s.placeholder, a, u, c, a, a, n - o) : Bt(this && this !== At && this instanceof s ? i : e, this, u)
            }
          }(e, t, d) : t != k && t != (y | k) || s.length ? fa.apply(a, D) : function(e, t, n, i) {
            var a = t & y,
              s = ca(e);
            return function t() {
              for (var o = -1, u = arguments.length, l = -1, d = i.length, c = r(d + u), h = this && this !== At && this instanceof t ? s : e; ++l < d;) c[l] = i[l];
              for (; u--;) c[l++] = arguments[++o];
              return Bt(h, a ? n : this, c)
            }
          }(e, t, n, i);
          else var T = function(e, t, n) {
            var r = t & y,
              i = ca(e);
            return function t() {
              return (this && this !== At && this instanceof t ? i : e).apply(r ? n : this, arguments)
            }
          }(e, t, n);
          return as((p ? xi : ns)(T, D), e, t)
        }

        function Da(e, t, n, r) {
          return e === a || mo(e, ot[n]) && !dt.call(r, n) ? t : e
        }

        function Ta(e, t, n, r, i, s) {
          return To(e) && To(t) && (s.set(t, e), pi(e, t, a, Ta, s), s.delete(t)), e
        }

        function xa(e) {
          return Ho(e) ? a : e
        }

        function Sa(e, t, n, r, i, s) {
          var o = n & _,
            u = e.length,
            l = t.length;
          if (u != l && !(o && l > u)) return !1;
          var d = s.get(e);
          if (d && s.get(t)) return d == t;
          var c = -1,
            h = !0,
            m = n & p ? new kr : a;
          for (s.set(e, t), s.set(t, e); ++c < u;) {
            var f = e[c],
              y = t[c];
            if (r) var g = o ? r(y, f, c, t, e, s) : r(f, y, c, e, t, s);
            if (g !== a) {
              if (g) continue;
              h = !1;
              break
            }
            if (m) {
              if (!rn(t, function(e, t) {
                  if (!vn(m, t) && (f === e || i(f, e, n, r, s))) return m.push(t)
                })) {
                h = !1;
                break
              }
            } else if (f !== y && !i(f, y, n, r, s)) {
              h = !1;
              break
            }
          }
          return s.delete(e), s.delete(t), h
        }

        function ja(e) {
          return is(es(e, a, ys), e + "")
        }

        function Ha(e) {
          return Zr(e, iu, Ia)
        }

        function Ea(e) {
          return Zr(e, au, Ra)
        }
        var Aa = ir ? function(e) {
          return ir.get(e)
        } : Ou;

        function Ca(e) {
          for (var t = e.name + "", n = ar[t], r = dt.call(ar, t) ? n.length : 0; r--;) {
            var i = n[r],
              a = i.func;
            if (null == a || a == e) return i.name
          }
          return t
        }

        function Oa(e) {
          return (dt.call(fr, "placeholder") ? fr : e).placeholder
        }

        function Pa() {
          var e = fr.iteratee || Hu;
          return e = e === Hu ? li : e, arguments.length ? e(arguments[0], arguments[1]) : e
        }

        function Wa(e, t) {
          var n, r, i = e.__data__;
          return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
        }

        function Na(e) {
          for (var t = iu(e), n = t.length; n--;) {
            var r = t[n],
              i = e[r];
            t[n] = [r, i, Za(i)]
          }
          return t
        }

        function Fa(e, t) {
          var n = function(e, t) {
            return null == e ? a : e[t]
          }(e, t);
          return ui(n) ? n : a
        }
        var Ia = Rn ? function(e) {
            return null == e ? [] : (e = tt(e), Kt(Rn(e), function(t) {
              return Ct.call(e, t)
            }))
          } : zu,
          Ra = Rn ? function(e) {
            for (var t = []; e;) en(t, Ia(e)), e = Ht(e);
            return t
          } : zu,
          za = Qr;

        function $a(e, t, n) {
          for (var r = -1, i = (t = Vi(t, e)).length, a = !1; ++r < i;) {
            var s = ls(t[r]);
            if (!(a = null != e && n(e, s))) break;
            e = e[s]
          }
          return a || ++r != i ? a : !!(i = null == e ? 0 : e.length) && Do(i) && Ua(s, i) && (yo(e) || po(e))
        }

        function qa(e) {
          return "function" != typeof e.constructor || Xa(e) ? {} : _r(Ht(e))
        }

        function Ba(e) {
          return yo(e) || po(e) || !!(Wt && e && e[Wt])
        }

        function Ua(e, t) {
          var n = typeof e;
          return !!(t = null == t ? C : t) && ("number" == n || "symbol" != n && Je.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function Va(e, t, n) {
          if (!To(n)) return !1;
          var r = typeof t;
          return !!("number" == r ? vo(n) && Ua(t, n.length) : "string" == r && t in n) && mo(n[t], e)
        }

        function Ja(e, t) {
          if (yo(e)) return !1;
          var n = typeof e;
          return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Oo(e)) || je.test(e) || !Se.test(e) || null != t && e in tt(t)
        }

        function Ga(e) {
          var t = Ca(e),
            n = fr[t];
          if ("function" != typeof n || !(t in gr.prototype)) return !1;
          if (e === n) return !0;
          var r = Aa(n);
          return !!r && e === r[0]
        }(Zn && za(new Zn(new ArrayBuffer(1))) != le || Qn && za(new Qn) != K || er && "[object Promise]" != za(er.resolve()) || tr && za(new tr) != ne || nr && za(new nr) != se) && (za = function(e) {
          var t = Qr(e),
            n = t == Q ? e.constructor : a,
            r = n ? ds(n) : "";
          if (r) switch (r) {
            case sr:
              return le;
            case or:
              return K;
            case ur:
              return "[object Promise]";
            case lr:
              return ne;
            case dr:
              return se
          }
          return t
        });
        var Ka = ut ? Yo : $u;

        function Xa(e) {
          var t = e && e.constructor;
          return e === ("function" == typeof t && t.prototype || ot)
        }

        function Za(e) {
          return e == e && !To(e)
        }

        function Qa(e, t) {
          return function(n) {
            return null != n && n[e] === t && (t !== a || e in tt(n))
          }
        }

        function es(e, t, n) {
          return t = Un(t === a ? e.length - 1 : t, 0),
            function() {
              for (var i = arguments, a = -1, s = Un(i.length - t, 0), o = r(s); ++a < s;) o[a] = i[t + a];
              a = -1;
              for (var u = r(t + 1); ++a < t;) u[a] = i[a];
              return u[t] = n(o), Bt(e, this, u)
            }
        }

        function ts(e, t) {
          return t.length < 2 ? e : Xr(e, Hi(t, 0, -1))
        }
        var ns = ss(xi),
          rs = Nn || function(e, t) {
            return At.setTimeout(e, t)
          },
          is = ss(Si);

        function as(e, t, n) {
          var r = t + "";
          return is(e, function(e, t) {
            var n = t.length;
            if (!n) return e;
            var r = n - 1;
            return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(We, "{\n/* [wrapped with " + t + "] */\n")
          }(r, function(e, t) {
            return Vt(I, function(n) {
              var r = "_." + n[0];
              t & n[1] && !Xt(e, r) && e.push(r)
            }), e.sort()
          }(function(e) {
            var t = e.match(Ne);
            return t ? t[1].split(Fe) : []
          }(r), n)))
        }

        function ss(e) {
          var t = 0,
            n = 0;
          return function() {
            var r = Jn(),
              i = j - (r - n);
            if (n = r, i > 0) {
              if (++t >= S) return arguments[0]
            } else t = 0;
            return e.apply(a, arguments)
          }
        }

        function os(e, t) {
          var n = -1,
            r = e.length,
            i = r - 1;
          for (t = t === a ? r : t; ++n < t;) {
            var s = ki(n, i),
              o = e[s];
            e[s] = e[n], e[n] = o
          }
          return e.length = t, e
        }
        var us = function(e) {
          var t = so(e, function(e) {
              return n.size === d && n.clear(), e
            }),
            n = t.cache;
          return t
        }(function(e) {
          var t = [];
          return 46 === e.charCodeAt(0) && t.push(""), e.replace(He, function(e, n, r, i) {
            t.push(r ? i.replace(Re, "$1") : n || e)
          }), t
        });

        function ls(e) {
          if ("string" == typeof e || Oo(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -A ? "-0" : t
        }

        function ds(e) {
          if (null != e) {
            try {
              return lt.call(e)
            } catch (e) {}
            try {
              return e + ""
            } catch (e) {}
          }
          return ""
        }

        function cs(e) {
          if (e instanceof gr) return e.clone();
          var t = new yr(e.__wrapped__, e.__chain__);
          return t.__actions__ = ra(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        var hs = Yi(function(e, t) {
            return Mo(e) ? Fr(e, Br(t, 1, Mo, !0)) : []
          }),
          ms = Yi(function(e, t) {
            var n = ks(t);
            return Mo(n) && (n = a), Mo(e) ? Fr(e, Br(t, 1, Mo, !0), Pa(n, 2)) : []
          }),
          fs = Yi(function(e, t) {
            var n = ks(t);
            return Mo(n) && (n = a), Mo(e) ? Fr(e, Br(t, 1, Mo, !0), a, n) : []
          });

        function _s(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = null == n ? 0 : Ro(n);
          return i < 0 && (i = Un(r + i, 0)), on(e, Pa(t, 3), i)
        }

        function ps(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = r - 1;
          return n !== a && (i = Ro(n), i = n < 0 ? Un(r + i, 0) : Vn(i, r - 1)), on(e, Pa(t, 3), i, !0)
        }

        function ys(e) {
          return null != e && e.length ? Br(e, 1) : []
        }

        function gs(e) {
          return e && e.length ? e[0] : a
        }
        var vs = Yi(function(e) {
            var t = Qt(e, Bi);
            return t.length && t[0] === e[0] ? ri(t) : []
          }),
          Ms = Yi(function(e) {
            var t = ks(e),
              n = Qt(e, Bi);
            return t === ks(n) ? t = a : n.pop(), n.length && n[0] === e[0] ? ri(n, Pa(t, 2)) : []
          }),
          Ls = Yi(function(e) {
            var t = ks(e),
              n = Qt(e, Bi);
            return (t = "function" == typeof t ? t : a) && n.pop(), n.length && n[0] === e[0] ? ri(n, a, t) : []
          });

        function ks(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : a
        }
        var bs = Yi(Ys);

        function Ys(e, t) {
          return e && e.length && t && t.length ? Mi(e, t) : e
        }
        var ws = ja(function(e, t) {
          var n = null == e ? 0 : e.length,
            r = Cr(e, t);
          return Li(e, Qt(t, function(e) {
            return Ua(e, n) ? +e : e
          }).sort(ea)), r
        });

        function Ds(e) {
          return null == e ? e : Xn.call(e)
        }
        var Ts = Yi(function(e) {
            return Ni(Br(e, 1, Mo, !0))
          }),
          xs = Yi(function(e) {
            var t = ks(e);
            return Mo(t) && (t = a), Ni(Br(e, 1, Mo, !0), Pa(t, 2))
          }),
          Ss = Yi(function(e) {
            var t = ks(e);
            return t = "function" == typeof t ? t : a, Ni(Br(e, 1, Mo, !0), a, t)
          });

        function js(e) {
          if (!e || !e.length) return [];
          var t = 0;
          return e = Kt(e, function(e) {
            if (Mo(e)) return t = Un(e.length, t), !0
          }), pn(t, function(t) {
            return Qt(e, hn(t))
          })
        }

        function Hs(e, t) {
          if (!e || !e.length) return [];
          var n = js(e);
          return null == t ? n : Qt(n, function(e) {
            return Bt(t, a, e)
          })
        }
        var Es = Yi(function(e, t) {
            return Mo(e) ? Fr(e, t) : []
          }),
          As = Yi(function(e) {
            return $i(Kt(e, Mo))
          }),
          Cs = Yi(function(e) {
            var t = ks(e);
            return Mo(t) && (t = a), $i(Kt(e, Mo), Pa(t, 2))
          }),
          Os = Yi(function(e) {
            var t = ks(e);
            return t = "function" == typeof t ? t : a, $i(Kt(e, Mo), a, t)
          }),
          Ps = Yi(js);
        var Ws = Yi(function(e) {
          var t = e.length,
            n = t > 1 ? e[t - 1] : a;
          return Hs(e, n = "function" == typeof n ? (e.pop(), n) : a)
        });

        function Ns(e) {
          var t = fr(e);
          return t.__chain__ = !0, t
        }

        function Fs(e, t) {
          return t(e)
        }
        var Is = ja(function(e) {
          var t = e.length,
            n = t ? e[0] : 0,
            r = this.__wrapped__,
            i = function(t) {
              return Cr(t, e)
            };
          return !(t > 1 || this.__actions__.length) && r instanceof gr && Ua(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
            func: Fs,
            args: [i],
            thisArg: a
          }), new yr(r, this.__chain__).thru(function(e) {
            return t && !e.length && e.push(a), e
          })) : this.thru(i)
        });
        var Rs = aa(function(e, t, n) {
          dt.call(e, n) ? ++e[n] : Ar(e, n, 1)
        });
        var zs = ha(_s),
          $s = ha(ps);

        function qs(e, t) {
          return (yo(e) ? Vt : Ir)(e, Pa(t, 3))
        }

        function Bs(e, t) {
          return (yo(e) ? Jt : Rr)(e, Pa(t, 3))
        }
        var Us = aa(function(e, t, n) {
          dt.call(e, n) ? e[n].push(t) : Ar(e, n, [t])
        });
        var Vs = Yi(function(e, t, n) {
            var i = -1,
              a = "function" == typeof t,
              s = vo(e) ? r(e.length) : [];
            return Ir(e, function(e) {
              s[++i] = a ? Bt(t, e, n) : ii(e, t, n)
            }), s
          }),
          Js = aa(function(e, t, n) {
            Ar(e, n, t)
          });

        function Gs(e, t) {
          return (yo(e) ? Qt : mi)(e, Pa(t, 3))
        }
        var Ks = aa(function(e, t, n) {
          e[n ? 0 : 1].push(t)
        }, function() {
          return [
            [],
            []
          ]
        });
        var Xs = Yi(function(e, t) {
            if (null == e) return [];
            var n = t.length;
            return n > 1 && Va(e, t[0], t[1]) ? t = [] : n > 2 && Va(t[0], t[1], t[2]) && (t = [t[0]]), gi(e, Br(t, 1), [])
          }),
          Zs = Wn || function() {
            return At.Date.now()
          };

        function Qs(e, t, n) {
          return t = n ? a : t, t = e && null == t ? e.length : t, wa(e, Y, a, a, a, a, t)
        }

        function eo(e, t) {
          var n;
          if ("function" != typeof t) throw new it(u);
          return e = Ro(e),
            function() {
              return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = a), n
            }
        }
        var to = Yi(function(e, t, n) {
            var r = y;
            if (n.length) {
              var i = xn(n, Oa(to));
              r |= k
            }
            return wa(e, r, t, n, i)
          }),
          no = Yi(function(e, t, n) {
            var r = y | g;
            if (n.length) {
              var i = xn(n, Oa(no));
              r |= k
            }
            return wa(t, r, e, n, i)
          });

        function ro(e, t, n) {
          var r, i, s, o, l, d, c = 0,
            h = !1,
            m = !1,
            f = !0;
          if ("function" != typeof e) throw new it(u);

          function _(t) {
            var n = r,
              s = i;
            return r = i = a, c = t, o = e.apply(s, n)
          }

          function p(e) {
            var n = e - d;
            return d === a || n >= t || n < 0 || m && e - c >= s
          }

          function y() {
            var e = Zs();
            if (p(e)) return g(e);
            l = rs(y, function(e) {
              var n = t - (e - d);
              return m ? Vn(n, s - (e - c)) : n
            }(e))
          }

          function g(e) {
            return l = a, f && r ? _(e) : (r = i = a, o)
          }

          function v() {
            var e = Zs(),
              n = p(e);
            if (r = arguments, i = this, d = e, n) {
              if (l === a) return function(e) {
                return c = e, l = rs(y, t), h ? _(e) : o
              }(d);
              if (m) return l = rs(y, t), _(d)
            }
            return l === a && (l = rs(y, t)), o
          }
          return t = $o(t) || 0, To(n) && (h = !!n.leading, s = (m = "maxWait" in n) ? Un($o(n.maxWait) || 0, t) : s, f = "trailing" in n ? !!n.trailing : f), v.cancel = function() {
            l !== a && Ki(l), c = 0, r = d = i = l = a
          }, v.flush = function() {
            return l === a ? o : g(Zs())
          }, v
        }
        var io = Yi(function(e, t) {
            return Nr(e, 1, t)
          }),
          ao = Yi(function(e, t, n) {
            return Nr(e, $o(t) || 0, n)
          });

        function so(e, t) {
          if ("function" != typeof e || null != t && "function" != typeof t) throw new it(u);
          var n = function() {
            var r = arguments,
              i = t ? t.apply(this, r) : r[0],
              a = n.cache;
            if (a.has(i)) return a.get(i);
            var s = e.apply(this, r);
            return n.cache = a.set(i, s) || a, s
          };
          return n.cache = new(so.Cache || Lr), n
        }

        function oo(e) {
          if ("function" != typeof e) throw new it(u);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2])
            }
            return !e.apply(this, t)
          }
        }
        so.Cache = Lr;
        var uo = Ji(function(e, t) {
            var n = (t = 1 == t.length && yo(t[0]) ? Qt(t[0], yn(Pa())) : Qt(Br(t, 1), yn(Pa()))).length;
            return Yi(function(r) {
              for (var i = -1, a = Vn(r.length, n); ++i < a;) r[i] = t[i].call(this, r[i]);
              return Bt(e, this, r)
            })
          }),
          lo = Yi(function(e, t) {
            var n = xn(t, Oa(lo));
            return wa(e, k, a, t, n)
          }),
          co = Yi(function(e, t) {
            var n = xn(t, Oa(co));
            return wa(e, b, a, t, n)
          }),
          ho = ja(function(e, t) {
            return wa(e, w, a, a, a, t)
          });

        function mo(e, t) {
          return e === t || e != e && t != t
        }
        var fo = Ma(ei),
          _o = Ma(function(e, t) {
            return e >= t
          }),
          po = ai(function() {
            return arguments
          }()) ? ai : function(e) {
            return xo(e) && dt.call(e, "callee") && !Ct.call(e, "callee")
          },
          yo = r.isArray,
          go = Ft ? yn(Ft) : function(e) {
            return xo(e) && Qr(e) == ue
          };

        function vo(e) {
          return null != e && Do(e.length) && !Yo(e)
        }

        function Mo(e) {
          return xo(e) && vo(e)
        }
        var Lo = zn || $u,
          ko = It ? yn(It) : function(e) {
            return xo(e) && Qr(e) == B
          };

        function bo(e) {
          if (!xo(e)) return !1;
          var t = Qr(e);
          return t == V || t == U || "string" == typeof e.message && "string" == typeof e.name && !Ho(e)
        }

        function Yo(e) {
          if (!To(e)) return !1;
          var t = Qr(e);
          return t == J || t == G || t == $ || t == ee
        }

        function wo(e) {
          return "number" == typeof e && e == Ro(e)
        }

        function Do(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= C
        }

        function To(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
        }

        function xo(e) {
          return null != e && "object" == typeof e
        }
        var So = Rt ? yn(Rt) : function(e) {
          return xo(e) && za(e) == K
        };

        function jo(e) {
          return "number" == typeof e || xo(e) && Qr(e) == X
        }

        function Ho(e) {
          if (!xo(e) || Qr(e) != Q) return !1;
          var t = Ht(e);
          if (null === t) return !0;
          var n = dt.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && lt.call(n) == ft
        }
        var Eo = zt ? yn(zt) : function(e) {
          return xo(e) && Qr(e) == te
        };
        var Ao = $t ? yn($t) : function(e) {
          return xo(e) && za(e) == ne
        };

        function Co(e) {
          return "string" == typeof e || !yo(e) && xo(e) && Qr(e) == re
        }

        function Oo(e) {
          return "symbol" == typeof e || xo(e) && Qr(e) == ie
        }
        var Po = qt ? yn(qt) : function(e) {
          return xo(e) && Do(e.length) && !!Dt[Qr(e)]
        };
        var Wo = Ma(hi),
          No = Ma(function(e, t) {
            return e <= t
          });

        function Fo(e) {
          if (!e) return [];
          if (vo(e)) return Co(e) ? An(e) : ra(e);
          if (Nt && e[Nt]) return function(e) {
            for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
            return n
          }(e[Nt]());
          var t = za(e);
          return (t == K ? Dn : t == ne ? jn : mu)(e)
        }

        function Io(e) {
          return e ? (e = $o(e)) === A || e === -A ? (e < 0 ? -1 : 1) * O : e == e ? e : 0 : 0 === e ? e : 0
        }

        function Ro(e) {
          var t = Io(e),
            n = t % 1;
          return t == t ? n ? t - n : t : 0
        }

        function zo(e) {
          return e ? Or(Ro(e), 0, W) : 0
        }

        function $o(e) {
          if ("number" == typeof e) return e;
          if (Oo(e)) return P;
          if (To(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = To(t) ? t + "" : t
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(Ce, "");
          var n = Be.test(e);
          return n || Ve.test(e) ? jt(e.slice(2), n ? 2 : 8) : qe.test(e) ? P : +e
        }

        function qo(e) {
          return ia(e, au(e))
        }

        function Bo(e) {
          return null == e ? "" : Wi(e)
        }
        var Uo = sa(function(e, t) {
            if (Xa(t) || vo(t)) ia(t, iu(t), e);
            else
              for (var n in t) dt.call(t, n) && Sr(e, n, t[n])
          }),
          Vo = sa(function(e, t) {
            ia(t, au(t), e)
          }),
          Jo = sa(function(e, t, n, r) {
            ia(t, au(t), e, r)
          }),
          Go = sa(function(e, t, n, r) {
            ia(t, iu(t), e, r)
          }),
          Ko = ja(Cr);
        var Xo = Yi(function(e, t) {
            e = tt(e);
            var n = -1,
              r = t.length,
              i = r > 2 ? t[2] : a;
            for (i && Va(t[0], t[1], i) && (r = 1); ++n < r;)
              for (var s = t[n], o = au(s), u = -1, l = o.length; ++u < l;) {
                var d = o[u],
                  c = e[d];
                (c === a || mo(c, ot[d]) && !dt.call(e, d)) && (e[d] = s[d])
              }
            return e
          }),
          Zo = Yi(function(e) {
            return e.push(a, Ta), Bt(ou, a, e)
          });

        function Qo(e, t, n) {
          var r = null == e ? a : Xr(e, t);
          return r === a ? n : r
        }

        function eu(e, t) {
          return null != e && $a(e, t, ni)
        }
        var tu = _a(function(e, t, n) {
            null != t && "function" != typeof t.toString && (t = mt.call(t)), e[t] = n
          }, Tu(ju)),
          nu = _a(function(e, t, n) {
            null != t && "function" != typeof t.toString && (t = mt.call(t)), dt.call(e, t) ? e[t].push(n) : e[t] = [n]
          }, Pa),
          ru = Yi(ii);

        function iu(e) {
          return vo(e) ? Yr(e) : di(e)
        }

        function au(e) {
          return vo(e) ? Yr(e, !0) : ci(e)
        }
        var su = sa(function(e, t, n) {
            pi(e, t, n)
          }),
          ou = sa(function(e, t, n, r) {
            pi(e, t, n, r)
          }),
          uu = ja(function(e, t) {
            var n = {};
            if (null == e) return n;
            var r = !1;
            t = Qt(t, function(t) {
              return t = Vi(t, e), r || (r = t.length > 1), t
            }), ia(e, Ea(e), n), r && (n = Pr(n, h | m | f, xa));
            for (var i = t.length; i--;) Fi(n, t[i]);
            return n
          });
        var lu = ja(function(e, t) {
          return null == e ? {} : function(e, t) {
            return vi(e, t, function(t, n) {
              return eu(e, n)
            })
          }(e, t)
        });

        function du(e, t) {
          if (null == e) return {};
          var n = Qt(Ea(e), function(e) {
            return [e]
          });
          return t = Pa(t), vi(e, n, function(e, n) {
            return t(e, n[0])
          })
        }
        var cu = Ya(iu),
          hu = Ya(au);

        function mu(e) {
          return null == e ? [] : gn(e, iu(e))
        }
        var fu = da(function(e, t, n) {
          return t = t.toLowerCase(), e + (n ? _u(t) : t)
        });

        function _u(e) {
          return bu(Bo(e).toLowerCase())
        }

        function pu(e) {
          return (e = Bo(e)) && e.replace(Ge, kn).replace(vt, "")
        }
        var yu = da(function(e, t, n) {
            return e + (n ? "-" : "") + t.toLowerCase()
          }),
          gu = da(function(e, t, n) {
            return e + (n ? " " : "") + t.toLowerCase()
          }),
          vu = la("toLowerCase");
        var Mu = da(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase()
        });
        var Lu = da(function(e, t, n) {
          return e + (n ? " " : "") + bu(t)
        });
        var ku = da(function(e, t, n) {
            return e + (n ? " " : "") + t.toUpperCase()
          }),
          bu = la("toUpperCase");

        function Yu(e, t, n) {
          return e = Bo(e), (t = n ? a : t) === a ? function(e) {
            return bt.test(e)
          }(e) ? function(e) {
            return e.match(Lt) || []
          }(e) : function(e) {
            return e.match(Ie) || []
          }(e) : e.match(t) || []
        }
        var wu = Yi(function(e, t) {
            try {
              return Bt(e, a, t)
            } catch (e) {
              return bo(e) ? e : new Ze(e)
            }
          }),
          Du = ja(function(e, t) {
            return Vt(t, function(t) {
              t = ls(t), Ar(e, t, to(e[t], e))
            }), e
          });

        function Tu(e) {
          return function() {
            return e
          }
        }
        var xu = ma(),
          Su = ma(!0);

        function ju(e) {
          return e
        }

        function Hu(e) {
          return li("function" == typeof e ? e : Pr(e, h))
        }
        var Eu = Yi(function(e, t) {
            return function(n) {
              return ii(n, e, t)
            }
          }),
          Au = Yi(function(e, t) {
            return function(n) {
              return ii(e, n, t)
            }
          });

        function Cu(e, t, n) {
          var r = iu(t),
            i = Kr(t, r);
          null != n || To(t) && (i.length || !r.length) || (n = t, t = e, e = this, i = Kr(t, iu(t)));
          var a = !(To(n) && "chain" in n && !n.chain),
            s = Yo(e);
          return Vt(i, function(n) {
            var r = t[n];
            e[n] = r, s && (e.prototype[n] = function() {
              var t = this.__chain__;
              if (a || t) {
                var n = e(this.__wrapped__);
                return (n.__actions__ = ra(this.__actions__)).push({
                  func: r,
                  args: arguments,
                  thisArg: e
                }), n.__chain__ = t, n
              }
              return r.apply(e, en([this.value()], arguments))
            })
          }), e
        }

        function Ou() {}
        var Pu = ya(Qt),
          Wu = ya(Gt),
          Nu = ya(rn);

        function Fu(e) {
          return Ja(e) ? hn(ls(e)) : function(e) {
            return function(t) {
              return Xr(t, e)
            }
          }(e)
        }
        var Iu = va(),
          Ru = va(!0);

        function zu() {
          return []
        }

        function $u() {
          return !1
        }
        var qu = pa(function(e, t) {
            return e + t
          }, 0),
          Bu = ka("ceil"),
          Uu = pa(function(e, t) {
            return e / t
          }, 1),
          Vu = ka("floor");
        var Ju, Gu = pa(function(e, t) {
            return e * t
          }, 1),
          Ku = ka("round"),
          Xu = pa(function(e, t) {
            return e - t
          }, 0);
        return fr.after = function(e, t) {
          if ("function" != typeof t) throw new it(u);
          return e = Ro(e),
            function() {
              if (--e < 1) return t.apply(this, arguments)
            }
        }, fr.ary = Qs, fr.assign = Uo, fr.assignIn = Vo, fr.assignInWith = Jo, fr.assignWith = Go, fr.at = Ko, fr.before = eo, fr.bind = to, fr.bindAll = Du, fr.bindKey = no, fr.castArray = function() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return yo(e) ? e : [e]
        }, fr.chain = Ns, fr.chunk = function(e, t, n) {
          t = (n ? Va(e, t, n) : t === a) ? 1 : Un(Ro(t), 0);
          var i = null == e ? 0 : e.length;
          if (!i || t < 1) return [];
          for (var s = 0, o = 0, u = r(Fn(i / t)); s < i;) u[o++] = Hi(e, s, s += t);
          return u
        }, fr.compact = function(e) {
          for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
            var a = e[t];
            a && (i[r++] = a)
          }
          return i
        }, fr.concat = function() {
          var e = arguments.length;
          if (!e) return [];
          for (var t = r(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
          return en(yo(n) ? ra(n) : [n], Br(t, 1))
        }, fr.cond = function(e) {
          var t = null == e ? 0 : e.length,
            n = Pa();
          return e = t ? Qt(e, function(e) {
            if ("function" != typeof e[1]) throw new it(u);
            return [n(e[0]), e[1]]
          }) : [], Yi(function(n) {
            for (var r = -1; ++r < t;) {
              var i = e[r];
              if (Bt(i[0], this, n)) return Bt(i[1], this, n)
            }
          })
        }, fr.conforms = function(e) {
          return function(e) {
            var t = iu(e);
            return function(n) {
              return Wr(n, e, t)
            }
          }(Pr(e, h))
        }, fr.constant = Tu, fr.countBy = Rs, fr.create = function(e, t) {
          var n = _r(e);
          return null == t ? n : Er(n, t)
        }, fr.curry = function e(t, n, r) {
          var i = wa(t, M, a, a, a, a, a, n = r ? a : n);
          return i.placeholder = e.placeholder, i
        }, fr.curryRight = function e(t, n, r) {
          var i = wa(t, L, a, a, a, a, a, n = r ? a : n);
          return i.placeholder = e.placeholder, i
        }, fr.debounce = ro, fr.defaults = Xo, fr.defaultsDeep = Zo, fr.defer = io, fr.delay = ao, fr.difference = hs, fr.differenceBy = ms, fr.differenceWith = fs, fr.drop = function(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? Hi(e, (t = n || t === a ? 1 : Ro(t)) < 0 ? 0 : t, r) : []
        }, fr.dropRight = function(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? Hi(e, 0, (t = r - (t = n || t === a ? 1 : Ro(t))) < 0 ? 0 : t) : []
        }, fr.dropRightWhile = function(e, t) {
          return e && e.length ? Ri(e, Pa(t, 3), !0, !0) : []
        }, fr.dropWhile = function(e, t) {
          return e && e.length ? Ri(e, Pa(t, 3), !0) : []
        }, fr.fill = function(e, t, n, r) {
          var i = null == e ? 0 : e.length;
          return i ? (n && "number" != typeof n && Va(e, t, n) && (n = 0, r = i), function(e, t, n, r) {
            var i = e.length;
            for ((n = Ro(n)) < 0 && (n = -n > i ? 0 : i + n), (r = r === a || r > i ? i : Ro(r)) < 0 && (r += i), r = n > r ? 0 : zo(r); n < r;) e[n++] = t;
            return e
          }(e, t, n, r)) : []
        }, fr.filter = function(e, t) {
          return (yo(e) ? Kt : qr)(e, Pa(t, 3))
        }, fr.flatMap = function(e, t) {
          return Br(Gs(e, t), 1)
        }, fr.flatMapDeep = function(e, t) {
          return Br(Gs(e, t), A)
        }, fr.flatMapDepth = function(e, t, n) {
          return n = n === a ? 1 : Ro(n), Br(Gs(e, t), n)
        }, fr.flatten = ys, fr.flattenDeep = function(e) {
          return null != e && e.length ? Br(e, A) : []
        }, fr.flattenDepth = function(e, t) {
          return null != e && e.length ? Br(e, t = t === a ? 1 : Ro(t)) : []
        }, fr.flip = function(e) {
          return wa(e, D)
        }, fr.flow = xu, fr.flowRight = Su, fr.fromPairs = function(e) {
          for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
            var i = e[t];
            r[i[0]] = i[1]
          }
          return r
        }, fr.functions = function(e) {
          return null == e ? [] : Kr(e, iu(e))
        }, fr.functionsIn = function(e) {
          return null == e ? [] : Kr(e, au(e))
        }, fr.groupBy = Us, fr.initial = function(e) {
          return null != e && e.length ? Hi(e, 0, -1) : []
        }, fr.intersection = vs, fr.intersectionBy = Ms, fr.intersectionWith = Ls, fr.invert = tu, fr.invertBy = nu, fr.invokeMap = Vs, fr.iteratee = Hu, fr.keyBy = Js, fr.keys = iu, fr.keysIn = au, fr.map = Gs, fr.mapKeys = function(e, t) {
          var n = {};
          return t = Pa(t, 3), Jr(e, function(e, r, i) {
            Ar(n, t(e, r, i), e)
          }), n
        }, fr.mapValues = function(e, t) {
          var n = {};
          return t = Pa(t, 3), Jr(e, function(e, r, i) {
            Ar(n, r, t(e, r, i))
          }), n
        }, fr.matches = function(e) {
          return fi(Pr(e, h))
        }, fr.matchesProperty = function(e, t) {
          return _i(e, Pr(t, h))
        }, fr.memoize = so, fr.merge = su, fr.mergeWith = ou, fr.method = Eu, fr.methodOf = Au, fr.mixin = Cu, fr.negate = oo, fr.nthArg = function(e) {
          return e = Ro(e), Yi(function(t) {
            return yi(t, e)
          })
        }, fr.omit = uu, fr.omitBy = function(e, t) {
          return du(e, oo(Pa(t)))
        }, fr.once = function(e) {
          return eo(2, e)
        }, fr.orderBy = function(e, t, n, r) {
          return null == e ? [] : (yo(t) || (t = null == t ? [] : [t]), yo(n = r ? a : n) || (n = null == n ? [] : [n]), gi(e, t, n))
        }, fr.over = Pu, fr.overArgs = uo, fr.overEvery = Wu, fr.overSome = Nu, fr.partial = lo, fr.partialRight = co, fr.partition = Ks, fr.pick = lu, fr.pickBy = du, fr.property = Fu, fr.propertyOf = function(e) {
          return function(t) {
            return null == e ? a : Xr(e, t)
          }
        }, fr.pull = bs, fr.pullAll = Ys, fr.pullAllBy = function(e, t, n) {
          return e && e.length && t && t.length ? Mi(e, t, Pa(n, 2)) : e
        }, fr.pullAllWith = function(e, t, n) {
          return e && e.length && t && t.length ? Mi(e, t, a, n) : e
        }, fr.pullAt = ws, fr.range = Iu, fr.rangeRight = Ru, fr.rearg = ho, fr.reject = function(e, t) {
          return (yo(e) ? Kt : qr)(e, oo(Pa(t, 3)))
        }, fr.remove = function(e, t) {
          var n = [];
          if (!e || !e.length) return n;
          var r = -1,
            i = [],
            a = e.length;
          for (t = Pa(t, 3); ++r < a;) {
            var s = e[r];
            t(s, r, e) && (n.push(s), i.push(r))
          }
          return Li(e, i), n
        }, fr.rest = function(e, t) {
          if ("function" != typeof e) throw new it(u);
          return Yi(e, t = t === a ? t : Ro(t))
        }, fr.reverse = Ds, fr.sampleSize = function(e, t, n) {
          return t = (n ? Va(e, t, n) : t === a) ? 1 : Ro(t), (yo(e) ? Dr : Di)(e, t)
        }, fr.set = function(e, t, n) {
          return null == e ? e : Ti(e, t, n)
        }, fr.setWith = function(e, t, n, r) {
          return r = "function" == typeof r ? r : a, null == e ? e : Ti(e, t, n, r)
        }, fr.shuffle = function(e) {
          return (yo(e) ? Tr : ji)(e)
        }, fr.slice = function(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? (n && "number" != typeof n && Va(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : Ro(t), n = n === a ? r : Ro(n)), Hi(e, t, n)) : []
        }, fr.sortBy = Xs, fr.sortedUniq = function(e) {
          return e && e.length ? Oi(e) : []
        }, fr.sortedUniqBy = function(e, t) {
          return e && e.length ? Oi(e, Pa(t, 2)) : []
        }, fr.split = function(e, t, n) {
          return n && "number" != typeof n && Va(e, t, n) && (t = n = a), (n = n === a ? W : n >>> 0) ? (e = Bo(e)) && ("string" == typeof t || null != t && !Eo(t)) && !(t = Wi(t)) && wn(e) ? Gi(An(e), 0, n) : e.split(t, n) : []
        }, fr.spread = function(e, t) {
          if ("function" != typeof e) throw new it(u);
          return t = null == t ? 0 : Un(Ro(t), 0), Yi(function(n) {
            var r = n[t],
              i = Gi(n, 0, t);
            return r && en(i, r), Bt(e, this, i)
          })
        }, fr.tail = function(e) {
          var t = null == e ? 0 : e.length;
          return t ? Hi(e, 1, t) : []
        }, fr.take = function(e, t, n) {
          return e && e.length ? Hi(e, 0, (t = n || t === a ? 1 : Ro(t)) < 0 ? 0 : t) : []
        }, fr.takeRight = function(e, t, n) {
          var r = null == e ? 0 : e.length;
          return r ? Hi(e, (t = r - (t = n || t === a ? 1 : Ro(t))) < 0 ? 0 : t, r) : []
        }, fr.takeRightWhile = function(e, t) {
          return e && e.length ? Ri(e, Pa(t, 3), !1, !0) : []
        }, fr.takeWhile = function(e, t) {
          return e && e.length ? Ri(e, Pa(t, 3)) : []
        }, fr.tap = function(e, t) {
          return t(e), e
        }, fr.throttle = function(e, t, n) {
          var r = !0,
            i = !0;
          if ("function" != typeof e) throw new it(u);
          return To(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ro(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
          })
        }, fr.thru = Fs, fr.toArray = Fo, fr.toPairs = cu, fr.toPairsIn = hu, fr.toPath = function(e) {
          return yo(e) ? Qt(e, ls) : Oo(e) ? [e] : ra(us(Bo(e)))
        }, fr.toPlainObject = qo, fr.transform = function(e, t, n) {
          var r = yo(e),
            i = r || Lo(e) || Po(e);
          if (t = Pa(t, 4), null == n) {
            var a = e && e.constructor;
            n = i ? r ? new a : [] : To(e) && Yo(a) ? _r(Ht(e)) : {}
          }
          return (i ? Vt : Jr)(e, function(e, r, i) {
            return t(n, e, r, i)
          }), n
        }, fr.unary = function(e) {
          return Qs(e, 1)
        }, fr.union = Ts, fr.unionBy = xs, fr.unionWith = Ss, fr.uniq = function(e) {
          return e && e.length ? Ni(e) : []
        }, fr.uniqBy = function(e, t) {
          return e && e.length ? Ni(e, Pa(t, 2)) : []
        }, fr.uniqWith = function(e, t) {
          return t = "function" == typeof t ? t : a, e && e.length ? Ni(e, a, t) : []
        }, fr.unset = function(e, t) {
          return null == e || Fi(e, t)
        }, fr.unzip = js, fr.unzipWith = Hs, fr.update = function(e, t, n) {
          return null == e ? e : Ii(e, t, Ui(n))
        }, fr.updateWith = function(e, t, n, r) {
          return r = "function" == typeof r ? r : a, null == e ? e : Ii(e, t, Ui(n), r)
        }, fr.values = mu, fr.valuesIn = function(e) {
          return null == e ? [] : gn(e, au(e))
        }, fr.without = Es, fr.words = Yu, fr.wrap = function(e, t) {
          return lo(Ui(t), e)
        }, fr.xor = As, fr.xorBy = Cs, fr.xorWith = Os, fr.zip = Ps, fr.zipObject = function(e, t) {
          return qi(e || [], t || [], Sr)
        }, fr.zipObjectDeep = function(e, t) {
          return qi(e || [], t || [], Ti)
        }, fr.zipWith = Ws, fr.entries = cu, fr.entriesIn = hu, fr.extend = Vo, fr.extendWith = Jo, Cu(fr, fr), fr.add = qu, fr.attempt = wu, fr.camelCase = fu, fr.capitalize = _u, fr.ceil = Bu, fr.clamp = function(e, t, n) {
          return n === a && (n = t, t = a), n !== a && (n = (n = $o(n)) == n ? n : 0), t !== a && (t = (t = $o(t)) == t ? t : 0), Or($o(e), t, n)
        }, fr.clone = function(e) {
          return Pr(e, f)
        }, fr.cloneDeep = function(e) {
          return Pr(e, h | f)
        }, fr.cloneDeepWith = function(e, t) {
          return Pr(e, h | f, t = "function" == typeof t ? t : a)
        }, fr.cloneWith = function(e, t) {
          return Pr(e, f, t = "function" == typeof t ? t : a)
        }, fr.conformsTo = function(e, t) {
          return null == t || Wr(e, t, iu(t))
        }, fr.deburr = pu, fr.defaultTo = function(e, t) {
          return null == e || e != e ? t : e
        }, fr.divide = Uu, fr.endsWith = function(e, t, n) {
          e = Bo(e), t = Wi(t);
          var r = e.length,
            i = n = n === a ? r : Or(Ro(n), 0, r);
          return (n -= t.length) >= 0 && e.slice(n, i) == t
        }, fr.eq = mo, fr.escape = function(e) {
          return (e = Bo(e)) && we.test(e) ? e.replace(be, bn) : e
        }, fr.escapeRegExp = function(e) {
          return (e = Bo(e)) && Ae.test(e) ? e.replace(Ee, "\\$&") : e
        }, fr.every = function(e, t, n) {
          var r = yo(e) ? Gt : zr;
          return n && Va(e, t, n) && (t = a), r(e, Pa(t, 3))
        }, fr.find = zs, fr.findIndex = _s, fr.findKey = function(e, t) {
          return sn(e, Pa(t, 3), Jr)
        }, fr.findLast = $s, fr.findLastIndex = ps, fr.findLastKey = function(e, t) {
          return sn(e, Pa(t, 3), Gr)
        }, fr.floor = Vu, fr.forEach = qs, fr.forEachRight = Bs, fr.forIn = function(e, t) {
          return null == e ? e : Ur(e, Pa(t, 3), au)
        }, fr.forInRight = function(e, t) {
          return null == e ? e : Vr(e, Pa(t, 3), au)
        }, fr.forOwn = function(e, t) {
          return e && Jr(e, Pa(t, 3))
        }, fr.forOwnRight = function(e, t) {
          return e && Gr(e, Pa(t, 3))
        }, fr.get = Qo, fr.gt = fo, fr.gte = _o, fr.has = function(e, t) {
          return null != e && $a(e, t, ti)
        }, fr.hasIn = eu, fr.head = gs, fr.identity = ju, fr.includes = function(e, t, n, r) {
          e = vo(e) ? e : mu(e), n = n && !r ? Ro(n) : 0;
          var i = e.length;
          return n < 0 && (n = Un(i + n, 0)), Co(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && un(e, t, n) > -1
        }, fr.indexOf = function(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = null == n ? 0 : Ro(n);
          return i < 0 && (i = Un(r + i, 0)), un(e, t, i)
        }, fr.inRange = function(e, t, n) {
          return t = Io(t), n === a ? (n = t, t = 0) : n = Io(n),
            function(e, t, n) {
              return e >= Vn(t, n) && e < Un(t, n)
            }(e = $o(e), t, n)
        }, fr.invoke = ru, fr.isArguments = po, fr.isArray = yo, fr.isArrayBuffer = go, fr.isArrayLike = vo, fr.isArrayLikeObject = Mo, fr.isBoolean = function(e) {
          return !0 === e || !1 === e || xo(e) && Qr(e) == q
        }, fr.isBuffer = Lo, fr.isDate = ko, fr.isElement = function(e) {
          return xo(e) && 1 === e.nodeType && !Ho(e)
        }, fr.isEmpty = function(e) {
          if (null == e) return !0;
          if (vo(e) && (yo(e) || "string" == typeof e || "function" == typeof e.splice || Lo(e) || Po(e) || po(e))) return !e.length;
          var t = za(e);
          if (t == K || t == ne) return !e.size;
          if (Xa(e)) return !di(e).length;
          for (var n in e)
            if (dt.call(e, n)) return !1;
          return !0
        }, fr.isEqual = function(e, t) {
          return si(e, t)
        }, fr.isEqualWith = function(e, t, n) {
          var r = (n = "function" == typeof n ? n : a) ? n(e, t) : a;
          return r === a ? si(e, t, a, n) : !!r
        }, fr.isError = bo, fr.isFinite = function(e) {
          return "number" == typeof e && $n(e)
        }, fr.isFunction = Yo, fr.isInteger = wo, fr.isLength = Do, fr.isMap = So, fr.isMatch = function(e, t) {
          return e === t || oi(e, t, Na(t))
        }, fr.isMatchWith = function(e, t, n) {
          return n = "function" == typeof n ? n : a, oi(e, t, Na(t), n)
        }, fr.isNaN = function(e) {
          return jo(e) && e != +e
        }, fr.isNative = function(e) {
          if (Ka(e)) throw new Ze(o);
          return ui(e)
        }, fr.isNil = function(e) {
          return null == e
        }, fr.isNull = function(e) {
          return null === e
        }, fr.isNumber = jo, fr.isObject = To, fr.isObjectLike = xo, fr.isPlainObject = Ho, fr.isRegExp = Eo, fr.isSafeInteger = function(e) {
          return wo(e) && e >= -C && e <= C
        }, fr.isSet = Ao, fr.isString = Co, fr.isSymbol = Oo, fr.isTypedArray = Po, fr.isUndefined = function(e) {
          return e === a
        }, fr.isWeakMap = function(e) {
          return xo(e) && za(e) == se
        }, fr.isWeakSet = function(e) {
          return xo(e) && Qr(e) == oe
        }, fr.join = function(e, t) {
          return null == e ? "" : qn.call(e, t)
        }, fr.kebabCase = yu, fr.last = ks, fr.lastIndexOf = function(e, t, n) {
          var r = null == e ? 0 : e.length;
          if (!r) return -1;
          var i = r;
          return n !== a && (i = (i = Ro(n)) < 0 ? Un(r + i, 0) : Vn(i, r - 1)), t == t ? function(e, t, n) {
            for (var r = n + 1; r--;)
              if (e[r] === t) return r;
            return r
          }(e, t, i) : on(e, dn, i, !0)
        }, fr.lowerCase = gu, fr.lowerFirst = vu, fr.lt = Wo, fr.lte = No, fr.max = function(e) {
          return e && e.length ? $r(e, ju, ei) : a
        }, fr.maxBy = function(e, t) {
          return e && e.length ? $r(e, Pa(t, 2), ei) : a
        }, fr.mean = function(e) {
          return cn(e, ju)
        }, fr.meanBy = function(e, t) {
          return cn(e, Pa(t, 2))
        }, fr.min = function(e) {
          return e && e.length ? $r(e, ju, hi) : a
        }, fr.minBy = function(e, t) {
          return e && e.length ? $r(e, Pa(t, 2), hi) : a
        }, fr.stubArray = zu, fr.stubFalse = $u, fr.stubObject = function() {
          return {}
        }, fr.stubString = function() {
          return ""
        }, fr.stubTrue = function() {
          return !0
        }, fr.multiply = Gu, fr.nth = function(e, t) {
          return e && e.length ? yi(e, Ro(t)) : a
        }, fr.noConflict = function() {
          return At._ === this && (At._ = _t), this
        }, fr.noop = Ou, fr.now = Zs, fr.pad = function(e, t, n) {
          e = Bo(e);
          var r = (t = Ro(t)) ? En(e) : 0;
          if (!t || r >= t) return e;
          var i = (t - r) / 2;
          return ga(In(i), n) + e + ga(Fn(i), n)
        }, fr.padEnd = function(e, t, n) {
          e = Bo(e);
          var r = (t = Ro(t)) ? En(e) : 0;
          return t && r < t ? e + ga(t - r, n) : e
        }, fr.padStart = function(e, t, n) {
          e = Bo(e);
          var r = (t = Ro(t)) ? En(e) : 0;
          return t && r < t ? ga(t - r, n) + e : e
        }, fr.parseInt = function(e, t, n) {
          return n || null == t ? t = 0 : t && (t = +t), Gn(Bo(e).replace(Oe, ""), t || 0)
        }, fr.random = function(e, t, n) {
          if (n && "boolean" != typeof n && Va(e, t, n) && (t = n = a), n === a && ("boolean" == typeof t ? (n = t, t = a) : "boolean" == typeof e && (n = e, e = a)), e === a && t === a ? (e = 0, t = 1) : (e = Io(e), t === a ? (t = e, e = 0) : t = Io(t)), e > t) {
            var r = e;
            e = t, t = r
          }
          if (n || e % 1 || t % 1) {
            var i = Kn();
            return Vn(e + i * (t - e + St("1e-" + ((i + "").length - 1))), t)
          }
          return ki(e, t)
        }, fr.reduce = function(e, t, n) {
          var r = yo(e) ? tn : fn,
            i = arguments.length < 3;
          return r(e, Pa(t, 4), n, i, Ir)
        }, fr.reduceRight = function(e, t, n) {
          var r = yo(e) ? nn : fn,
            i = arguments.length < 3;
          return r(e, Pa(t, 4), n, i, Rr)
        }, fr.repeat = function(e, t, n) {
          return t = (n ? Va(e, t, n) : t === a) ? 1 : Ro(t), bi(Bo(e), t)
        }, fr.replace = function() {
          var e = arguments,
            t = Bo(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2])
        }, fr.result = function(e, t, n) {
          var r = -1,
            i = (t = Vi(t, e)).length;
          for (i || (i = 1, e = a); ++r < i;) {
            var s = null == e ? a : e[ls(t[r])];
            s === a && (r = i, s = n), e = Yo(s) ? s.call(e) : s
          }
          return e
        }, fr.round = Ku, fr.runInContext = e, fr.sample = function(e) {
          return (yo(e) ? wr : wi)(e)
        }, fr.size = function(e) {
          if (null == e) return 0;
          if (vo(e)) return Co(e) ? En(e) : e.length;
          var t = za(e);
          return t == K || t == ne ? e.size : di(e).length
        }, fr.snakeCase = Mu, fr.some = function(e, t, n) {
          var r = yo(e) ? rn : Ei;
          return n && Va(e, t, n) && (t = a), r(e, Pa(t, 3))
        }, fr.sortedIndex = function(e, t) {
          return Ai(e, t)
        }, fr.sortedIndexBy = function(e, t, n) {
          return Ci(e, t, Pa(n, 2))
        }, fr.sortedIndexOf = function(e, t) {
          var n = null == e ? 0 : e.length;
          if (n) {
            var r = Ai(e, t);
            if (r < n && mo(e[r], t)) return r
          }
          return -1
        }, fr.sortedLastIndex = function(e, t) {
          return Ai(e, t, !0)
        }, fr.sortedLastIndexBy = function(e, t, n) {
          return Ci(e, t, Pa(n, 2), !0)
        }, fr.sortedLastIndexOf = function(e, t) {
          if (null != e && e.length) {
            var n = Ai(e, t, !0) - 1;
            if (mo(e[n], t)) return n
          }
          return -1
        }, fr.startCase = Lu, fr.startsWith = function(e, t, n) {
          return e = Bo(e), n = null == n ? 0 : Or(Ro(n), 0, e.length), t = Wi(t), e.slice(n, n + t.length) == t
        }, fr.subtract = Xu, fr.sum = function(e) {
          return e && e.length ? _n(e, ju) : 0
        }, fr.sumBy = function(e, t) {
          return e && e.length ? _n(e, Pa(t, 2)) : 0
        }, fr.template = function(e, t, n) {
          var r = fr.templateSettings;
          n && Va(e, t, n) && (t = a), e = Bo(e), t = Jo({}, t, r, Da);
          var i, s, o = Jo({}, t.imports, r.imports, Da),
            u = iu(o),
            l = gn(o, u),
            d = 0,
            c = t.interpolate || Ke,
            h = "__p += '",
            m = nt((t.escape || Ke).source + "|" + c.source + "|" + (c === xe ? ze : Ke).source + "|" + (t.evaluate || Ke).source + "|$", "g"),
            f = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++wt + "]") + "\n";
          e.replace(m, function(t, n, r, a, o, u) {
            return r || (r = a), h += e.slice(d, u).replace(Xe, Yn), n && (i = !0, h += "' +\n__e(" + n + ") +\n'"), o && (s = !0, h += "';\n" + o + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), d = u + t.length, t
          }), h += "';\n";
          var _ = t.variable;
          _ || (h = "with (obj) {\n" + h + "\n}\n"), h = (s ? h.replace(ve, "") : h).replace(Me, "$1").replace(Le, "$1;"), h = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
          var p = wu(function() {
            return Qe(u, f + "return " + h).apply(a, l)
          });
          if (p.source = h, bo(p)) throw p;
          return p
        }, fr.times = function(e, t) {
          if ((e = Ro(e)) < 1 || e > C) return [];
          var n = W,
            r = Vn(e, W);
          t = Pa(t), e -= W;
          for (var i = pn(r, t); ++n < e;) t(n);
          return i
        }, fr.toFinite = Io, fr.toInteger = Ro, fr.toLength = zo, fr.toLower = function(e) {
          return Bo(e).toLowerCase()
        }, fr.toNumber = $o, fr.toSafeInteger = function(e) {
          return e ? Or(Ro(e), -C, C) : 0 === e ? e : 0
        }, fr.toString = Bo, fr.toUpper = function(e) {
          return Bo(e).toUpperCase()
        }, fr.trim = function(e, t, n) {
          if ((e = Bo(e)) && (n || t === a)) return e.replace(Ce, "");
          if (!e || !(t = Wi(t))) return e;
          var r = An(e),
            i = An(t);
          return Gi(r, Mn(r, i), Ln(r, i) + 1).join("")
        }, fr.trimEnd = function(e, t, n) {
          if ((e = Bo(e)) && (n || t === a)) return e.replace(Pe, "");
          if (!e || !(t = Wi(t))) return e;
          var r = An(e);
          return Gi(r, 0, Ln(r, An(t)) + 1).join("")
        }, fr.trimStart = function(e, t, n) {
          if ((e = Bo(e)) && (n || t === a)) return e.replace(Oe, "");
          if (!e || !(t = Wi(t))) return e;
          var r = An(e);
          return Gi(r, Mn(r, An(t))).join("")
        }, fr.truncate = function(e, t) {
          var n = T,
            r = x;
          if (To(t)) {
            var i = "separator" in t ? t.separator : i;
            n = "length" in t ? Ro(t.length) : n, r = "omission" in t ? Wi(t.omission) : r
          }
          var s = (e = Bo(e)).length;
          if (wn(e)) {
            var o = An(e);
            s = o.length
          }
          if (n >= s) return e;
          var u = n - En(r);
          if (u < 1) return r;
          var l = o ? Gi(o, 0, u).join("") : e.slice(0, u);
          if (i === a) return l + r;
          if (o && (u += l.length - u), Eo(i)) {
            if (e.slice(u).search(i)) {
              var d, c = l;
              for (i.global || (i = nt(i.source, Bo($e.exec(i)) + "g")), i.lastIndex = 0; d = i.exec(c);) var h = d.index;
              l = l.slice(0, h === a ? u : h)
            }
          } else if (e.indexOf(Wi(i), u) != u) {
            var m = l.lastIndexOf(i);
            m > -1 && (l = l.slice(0, m))
          }
          return l + r
        }, fr.unescape = function(e) {
          return (e = Bo(e)) && Ye.test(e) ? e.replace(ke, Cn) : e
        }, fr.uniqueId = function(e) {
          var t = ++ct;
          return Bo(e) + t
        }, fr.upperCase = ku, fr.upperFirst = bu, fr.each = qs, fr.eachRight = Bs, fr.first = gs, Cu(fr, (Ju = {}, Jr(fr, function(e, t) {
          dt.call(fr.prototype, t) || (Ju[t] = e)
        }), Ju), {
          chain: !1
        }), fr.VERSION = "4.17.10", Vt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          fr[e].placeholder = fr
        }), Vt(["drop", "take"], function(e, t) {
          gr.prototype[e] = function(n) {
            n = n === a ? 1 : Un(Ro(n), 0);
            var r = this.__filtered__ && !t ? new gr(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = Vn(n, r.__takeCount__) : r.__views__.push({
              size: Vn(n, W),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r
          }, gr.prototype[e + "Right"] = function(t) {
            return this.reverse()[e](t).reverse()
          }
        }), Vt(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1,
            r = n == H || 3 == n;
          gr.prototype[e] = function(e) {
            var t = this.clone();
            return t.__iteratees__.push({
              iteratee: Pa(e, 3),
              type: n
            }), t.__filtered__ = t.__filtered__ || r, t
          }
        }), Vt(["head", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          gr.prototype[e] = function() {
            return this[n](1).value()[0]
          }
        }), Vt(["initial", "tail"], function(e, t) {
          var n = "drop" + (t ? "" : "Right");
          gr.prototype[e] = function() {
            return this.__filtered__ ? new gr(this) : this[n](1)
          }
        }), gr.prototype.compact = function() {
          return this.filter(ju)
        }, gr.prototype.find = function(e) {
          return this.filter(e).head()
        }, gr.prototype.findLast = function(e) {
          return this.reverse().find(e)
        }, gr.prototype.invokeMap = Yi(function(e, t) {
          return "function" == typeof e ? new gr(this) : this.map(function(n) {
            return ii(n, e, t)
          })
        }), gr.prototype.reject = function(e) {
          return this.filter(oo(Pa(e)))
        }, gr.prototype.slice = function(e, t) {
          e = Ro(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new gr(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== a && (n = (t = Ro(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
        }, gr.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse()
        }, gr.prototype.toArray = function() {
          return this.take(W)
        }, Jr(gr.prototype, function(e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t),
            r = /^(?:head|last)$/.test(t),
            i = fr[r ? "take" + ("last" == t ? "Right" : "") : t],
            s = r || /^find/.test(t);
          i && (fr.prototype[t] = function() {
            var t = this.__wrapped__,
              o = r ? [1] : arguments,
              u = t instanceof gr,
              l = o[0],
              d = u || yo(t),
              c = function(e) {
                var t = i.apply(fr, en([e], o));
                return r && h ? t[0] : t
              };
            d && n && "function" == typeof l && 1 != l.length && (u = d = !1);
            var h = this.__chain__,
              m = !!this.__actions__.length,
              f = s && !h,
              _ = u && !m;
            if (!s && d) {
              t = _ ? t : new gr(this);
              var p = e.apply(t, o);
              return p.__actions__.push({
                func: Fs,
                args: [c],
                thisArg: a
              }), new yr(p, h)
            }
            return f && _ ? e.apply(this, o) : (p = this.thru(c), f ? r ? p.value()[0] : p.value() : p)
          })
        }), Vt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = at[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
            r = /^(?:pop|shift)$/.test(e);
          fr.prototype[e] = function() {
            var e = arguments;
            if (r && !this.__chain__) {
              var i = this.value();
              return t.apply(yo(i) ? i : [], e)
            }
            return this[n](function(n) {
              return t.apply(yo(n) ? n : [], e)
            })
          }
        }), Jr(gr.prototype, function(e, t) {
          var n = fr[t];
          if (n) {
            var r = n.name + "";
            (ar[r] || (ar[r] = [])).push({
              name: t,
              func: n
            })
          }
        }), ar[fa(a, g).name] = [{
          name: "wrapper",
          func: a
        }], gr.prototype.clone = function() {
          var e = new gr(this.__wrapped__);
          return e.__actions__ = ra(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ra(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ra(this.__views__), e
        }, gr.prototype.reverse = function() {
          if (this.__filtered__) {
            var e = new gr(this);
            e.__dir__ = -1, e.__filtered__ = !0
          } else(e = this.clone()).__dir__ *= -1;
          return e
        }, gr.prototype.value = function() {
          var e = this.__wrapped__.value(),
            t = this.__dir__,
            n = yo(e),
            r = t < 0,
            i = n ? e.length : 0,
            a = function(e, t, n) {
              for (var r = -1, i = n.length; ++r < i;) {
                var a = n[r],
                  s = a.size;
                switch (a.type) {
                  case "drop":
                    e += s;
                    break;
                  case "dropRight":
                    t -= s;
                    break;
                  case "take":
                    t = Vn(t, e + s);
                    break;
                  case "takeRight":
                    e = Un(e, t - s)
                }
              }
              return {
                start: e,
                end: t
              }
            }(0, i, this.__views__),
            s = a.start,
            o = a.end,
            u = o - s,
            l = r ? o : s - 1,
            d = this.__iteratees__,
            c = d.length,
            h = 0,
            m = Vn(u, this.__takeCount__);
          if (!n || !r && i == u && m == u) return zi(e, this.__actions__);
          var f = [];
          e: for (; u-- && h < m;) {
            for (var _ = -1, p = e[l += t]; ++_ < c;) {
              var y = d[_],
                g = y.iteratee,
                v = y.type,
                M = g(p);
              if (v == E) p = M;
              else if (!M) {
                if (v == H) continue e;
                break e
              }
            }
            f[h++] = p
          }
          return f
        }, fr.prototype.at = Is, fr.prototype.chain = function() {
          return Ns(this)
        }, fr.prototype.commit = function() {
          return new yr(this.value(), this.__chain__)
        }, fr.prototype.next = function() {
          this.__values__ === a && (this.__values__ = Fo(this.value()));
          var e = this.__index__ >= this.__values__.length;
          return {
            done: e,
            value: e ? a : this.__values__[this.__index__++]
          }
        }, fr.prototype.plant = function(e) {
          for (var t, n = this; n instanceof pr;) {
            var r = cs(n);
            r.__index__ = 0, r.__values__ = a, t ? i.__wrapped__ = r : t = r;
            var i = r;
            n = n.__wrapped__
          }
          return i.__wrapped__ = e, t
        }, fr.prototype.reverse = function() {
          var e = this.__wrapped__;
          if (e instanceof gr) {
            var t = e;
            return this.__actions__.length && (t = new gr(this)), (t = t.reverse()).__actions__.push({
              func: Fs,
              args: [Ds],
              thisArg: a
            }), new yr(t, this.__chain__)
          }
          return this.thru(Ds)
        }, fr.prototype.toJSON = fr.prototype.valueOf = fr.prototype.value = function() {
          return zi(this.__wrapped__, this.__actions__)
        }, fr.prototype.first = fr.prototype.head, Nt && (fr.prototype[Nt] = function() {
          return this
        }), fr
      }();
      At._ = On, (i = function() {
        return On
      }.call(t, n, t, r)) === a || (r.exports = i)
    }).call(this)
  }).call(t, n(4), n(5)(e))
}, function(e, t, n) {
  var r;
  ! function e(t, n, i) {
    function a(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          if (!u && ("function" == typeof r && r)) return r(o, !0);
          if (s) return s(o, !0);
          var l = new Error("Cannot find module '" + o + "'");
          throw l.code = "MODULE_NOT_FOUND", l
        }
        var d = n[o] = {
          exports: {}
        };
        t[o][0].call(d.exports, function(e) {
          var n = t[o][1][e];
          return a(n || e)
        }, d, d.exports, e, t, n, i)
      }
      return n[o].exports
    }
    for (var s = "function" == typeof r && r, o = 0; o < i.length; o++) a(i[o]);
    return a
  }({
    1: [function(e, t, n) {
      var r, i, a, s = function(e, t) {
        return function() {
          return e.apply(t, arguments)
        }
      };
      i = e("./helpers.coffee"), a = e("./templates.coffee"), r = function() {
        function e(e) {
          this.params = e, this.close = s(this.close, this)
        }
        var t;
        return {}, t = null, e.prototype.getParams = function() {
          return this.params
        }, e.prototype._constructButtons = function(e) {
          var t, n, r, s, o, u;
          if (n = $(a.buttons), "object" == typeof this.params.buttons && i.objectSize(this.params.buttons) > 0) {
            for (s in u = this.params.buttons) o = u[s], (o = $.extend({
              label: void 0,
              action: function() {},
              classes: "",
              class: ""
            }, o)).classes.length < 1 && (o.classes = o.class), r = o.label || "" === o.label ? o.label : s, (t = $('<a href="javascript:void(0);" class="button ' + o.classes + '">' + r + "</a>")).bind("click", {
              buttonObject: o,
              parentObject: this
            }, function(e) {
              var t;
              return e.preventDefault(), void 0 === (t = e.data.buttonObject.action(e.data.parentObject)) || !1 !== t ? e.data.parentObject.close() : void 0
            }), n.append(t);
            e.append(n)
          }
          return n
        }, e.prototype._constructTitle = function(e, t) {
          var n, r, i, s, o, u, l, d, c, h;
          if ("string" == typeof this.params.title) return "" !== this.params.title ? t.find(".sweet-modal-title h2").html(this.params.title) : t.find(".sweet-modal-title-wrap").remove();
          if ("object" == typeof this.params.title) {
            for (l in e.addClass("tabbed"), (s = t.find(".sweet-modal-title")).find("h2").remove(), i = (r = $(a.tabs.links)).find("ul"), c = this.params.title) h = c[l], o = $(a.prepare(a.tabs.link, {
              TAB_ID: l
            })), d = u = !1, "string" == typeof h ? (d = h, u = !1) : (d = h.label || !1, u = h.icon || !1), u ? (n = o.find("a .icon").html(u), h.iconCSS && n.find("img, svg").css(h.iconCSS)) : o.find("a .icon").remove(), d || o.find("a label").remove(), o.find("a label").text(d), i.append(o);
            return i.find("li:first-child").addClass("active"), s.append(r)
          }
          throw "Invalid title type."
        }, e.prototype._constructContent = function(e, t) {
          var n, r, i, s, o, u;
          if ("string" == typeof this.params.content) {
            if ((s = this.params.content.match(/^\S+youtu\.?be\S+(?:v=|\/v\/)(\w+)$/)) && (this.params.content = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/' + s[1] + '" frameborder="0" allowfullscreen></iframe>'), "" !== this.params.icon) switch (e.addClass("sweet-modal-has-icon"), this.params.icon) {
              case $.sweetModal.ICON_SUCCESS:
                this.params.content = a.icons.success + this.params.content;
                break;
              case $.sweetModal.ICON_ERROR:
                this.params.content = a.icons.error + this.params.content;
                break;
              case $.sweetModal.ICON_WARNING:
                this.params.content = a.icons.warning + this.params.content
            }
            t.find(".sweet-modal-content").html(this.params.content)
          } else {
            for (i in n = $(a.tabs.content), o = this.params.content) u = o[i], (r = $(a.prepare(a.tabs.tab, {
              TAB_ID: i
            }))).append(u), n.append(r);
            n.find(".sweet-modal-tab:not(:first-child)").hide(), t.find(".sweet-modal-content").html(n)
          }
          return t.addClass(this.params.classes.join(" ")), e.append(t)
        }, e.prototype.tojQueryObject = function() {
          var e;
          return this.$overlay ? this.$overlay : (t = $(a.overlay).addClass(this.params.theme ? this.params.theme.join(" ") : $.sweetModal.THEME_LIGHT.join(" ")), e = $(a.modal), this.params.showCloseButton || e.find(".sweet-modal-close").remove(), "auto" !== this.params.width && e.css({
            width: this.params.width,
            left: "50%",
            transform: "translateX(-50%)"
          }), this._constructButtons(e), this._constructTitle(t, e), this._constructContent(t, e), this.$overlay = t, t)
        }, e.prototype.open = function() {
          var e, n, r;
          if (n = this, t = this.tojQueryObject(), $("body").append(this.$overlay), t.click((r = this, function(e) {
              return void 0 !== e.target.hasClass && e.target.hasClass("sweet-modal-clickable") ? void 0 : r.params.blocking ? r.bounce() : r.close()
            })).delay(100).queue(function() {
              return $(this).addClass("open"), n.params.onOpen(n.tojQueryObject())
            }), t.find(".sweet-modal-box").click(function(e) {
              return void 0 !== e.target.hasClass && e.target.hasClass("sweet-modal-clickable") ? void 0 : e.stopPropagation()
            }), t.find(".sweet-modal-icon").length > 0) switch (e = t.find(".sweet-modal-icon"), this.params.icon) {
            case $.sweetModal.ICON_SUCCESS:
              e.delay(80).queue(function() {
                return e.addClass("animate"), e.find(".sweet-modal-tip").addClass("animateSuccessTip"), e.find(".sweet-modal-long").addClass("animateSuccessLong")
              });
              break;
            case $.sweetModal.ICON_WARNING:
              e.addClass("pulseWarning"), e.find(".sweet-modal-body, .sweet-modal-dot").addClass("pulseWarningIns");
              break;
            case $.sweetModal.ICON_ERROR:
              e.delay(240).queue(function() {
                return e.addClass("animateErrorIcon"), e.find(".sweet-modal-x-mark").addClass("animateXMark")
              })
          }
          return this.params.timeout && setTimeout(function(e) {
            return function() {
              return e.close()
            }
          }(this), this.params.timeout), this.resize(), this.appendListeners(), this
        }, e.prototype.bounce = function() {
          return (t = this.tojQueryObject()).addClass("bounce"), setTimeout(function() {
            return t.removeClass("bounce")
          }, 300)
        }, e.prototype.resize = function() {
          var e;
          return t = this.tojQueryObject(), e = t.find(".sweet-modal-box"), window.matchMedia("screen and (max-width: 914px)").matches ? e.removeAttr("style") : ($(window).resize(function() {
            return e.height() > $(window).height() ? e.css({
              top: "0",
              marginTop: "96px"
            }) : e.css({
              top: "50%",
              marginTop: -e.height() / 2 - 6
            })
          }), $(window).trigger("resize")), this
        }, e.prototype.appendListeners = function() {
          return (t = this.tojQueryObject()).find(".sweet-modal-close-link").off("click").click((e = this, function() {
            return e.close()
          })), t.find(".sweet-modal-tabs-links a").off("click").click(function(e) {
            var t, n;
            return e.preventDefault(), n = $(this).attr("href").replace("#", ""), (t = $(this).closest(".sweet-modal-overlay")).find(".sweet-modal-tabs-links li").removeClass("active").find("a[href='#" + n + "']").closest("li").addClass("active"), t.find(".sweet-modal-tabs-content .sweet-modal-tab").hide().filter("[data-tab=" + n + "]").show()
          }), this;
          var e
        }, e.prototype.close = function() {
          var e;
          return t = this.tojQueryObject(), $.sweetModal.storage.openModals = function() {
            var t, n, r, i;
            for (i = [], t = 0, n = (r = $.sweetModal.storage.openModals).length; n > t; t++)(e = r[t]).getParams() !== this.getParams() && i.push(e);
            return i
          }.call(this), t.removeClass("open"), this.params.onClose(), setTimeout(function() {
            return t.remove()
          }, 300), this
        }, e
      }(), t.exports = r
    }, {
      "./helpers.coffee": 2,
      "./templates.coffee": 4
    }],
    2: [function(e, t, n) {
      t.exports = {
        isMobile: function() {
          return window.matchMedia("screen and (max-width: 420px)").matches
        },
        validate: function(e) {
          if (e.title, "object" == typeof e.content && !1 && e.content.length !== e.title.length) throw "Title and Content count did not match.";
          return !0
        },
        objectSize: function(e) {
          return Object.keys(e).length
        }
      }
    }, {}],
    3: [function(e, t, n) {
      var r, i, a, s;
      r = jQuery, i = e("./SweetModal.class.coffee"), a = e("./helpers.coffee"), s = e("./templates.coffee"), r.sweetModal = function(e, t) {
        var n, s, o;
        return "string" == typeof e && (e = void 0 === t ? {
          content: e
        } : {
          title: e,
          content: t
        }), (!e.title || e.icon && e.title) && (e.type = r.sweetModal.TYPE_ALERT, e.classes = e.classes || ["alert"]), (o = r.extend({}, r.sweetModal.defaultSettings, e)).content.length < 1 && (o.content = o.message), "function" == typeof o.onDisplay && (o.onOpen = o.onDisplay), n = {
          onOpen: o.onOpen,
          onClose: o.onClose
        }, o.onOpen = function(e) {
          return r.sweetModal.defaultCallbacks.onOpen(), "function" == typeof n.onOpen ? n.onOpen(e) : void 0
        }, o.onClose = function() {
          return r.sweetModal.defaultCallbacks.onClose(), "function" == typeof n.onClose ? n.onClose() : void 0
        }, a.validate(o), (s = new i(o)).open(), r.sweetModal.storage.openModals.push(s), s
      }, r.sweetModal.confirm = function(e, t, n, i) {
        var a, s, o, u;
        if (u = "", "string" != typeof e || "function" != typeof t && void 0 !== t && null !== t) {
          if ("string" != typeof e || "string" != typeof t || "function" != typeof n && void 0 !== n && null !== n) throw "Invalid argument configuration.";
          u = e, a = t, o = n || function() {}, s = i || function() {}
        } else a = e, o = t || function() {}, s = n || function() {};
        return r.sweetModal({
          title: u,
          content: a,
          buttons: {
            cancel: {
              label: r.sweetModal.defaultSettings.confirm.cancel.label,
              action: s,
              classes: r.sweetModal.defaultSettings.confirm.cancel.classes
            },
            ok: {
              label: r.sweetModal.defaultSettings.confirm.yes.label,
              action: o,
              classes: r.sweetModal.defaultSettings.confirm.yes.classes
            }
          },
          classes: ["alert", "confirm"],
          showCloseButton: !1,
          blocking: !0
        })
      }, r.sweetModal.prompt = function(e, t, n, i, a) {
        var o;
        return null == t && (t = ""), null == n && (n = ""), null == i && (i = null), null == a && (a = null), o = r(s.prepare(s.prompt, {
          TYPE: "text",
          PLACEHOLDER: t,
          VALUE: n
        })), i = i || function() {}, a = a || function() {}, r.sweetModal({
          title: e,
          content: o.wrap("<div />").parent().html(),
          buttons: {
            cancel: {
              label: r.sweetModal.defaultSettings.confirm.cancel.label,
              action: a,
              classes: r.sweetModal.defaultSettings.confirm.cancel.classes
            },
            ok: {
              label: r.sweetModal.defaultSettings.confirm.ok.label,
              classes: r.sweetModal.defaultSettings.confirm.ok.classes,
              action: function() {
                return i(r(".sweet-modal-prompt input").val())
              }
            }
          },
          classes: ["prompt"],
          showCloseButton: !1,
          blocking: !0,
          onOpen: function(e) {
            return e.find("input").focus()
          }
        })
      }, r.sweetModal.allModalsClosed = function() {
        return 0 === r.sweetModal.storage.openModals.length
      }, r.sweetModal.defaultSettings = {
        title: "",
        message: "",
        content: "",
        icon: "",
        classes: [],
        showCloseButton: !0,
        blocking: !1,
        timeout: null,
        theme: r.sweetModal.THEME_LIGHT,
        type: r.sweetModal.TYPE_MODAL,
        width: "auto",
        buttons: {},
        confirm: {
          yes: {
            label: "Yes",
            classes: "greenB"
          },
          ok: {
            label: "OK",
            classes: "greenB"
          },
          cancel: {
            label: "Cancel",
            classes: "redB bordered flat"
          }
        },
        onOpen: null,
        onClose: null
      }, r.sweetModal.defaultCallbacks = {
        onOpen: function() {
          return r("body").css({
            overflow: "hidden"
          }), r("#content_wrap").addClass("blurred")
        },
        onClose: function() {
          return r.sweetModal.allModalsClosed() ? (r("body").css({
            overflow: "auto"
          }), r("#content_wrap").removeClass("blurred")) : void 0
        }
      }, r.sweetModal.storage = {
        openModals: []
      }, "function" != typeof r.confirm && (r.confirm = r.sweetModal, r.confirm.close = r.sweetModal.closeAll), r.sweetModal.mapNativeFunctions = function() {
        return window.alert = function(e) {
          return r.sweetModal(e)
        }
      }, r.sweetModal.THEME_COMPONENTS = {
        LIGHT_OVERLAY: "light-overlay",
        LIGHT_MODAL: "light-modal",
        DARK_OVERLAY: "dark-overlay",
        DARK_MODAL: "dark-modal"
      }, r.sweetModal.THEME_LIGHT = [r.sweetModal.THEME_COMPONENTS.LIGHT_OVERLAY, r.sweetModal.THEME_COMPONENTS.LIGHT_MODAL], r.sweetModal.THEME_DARK = [r.sweetModal.THEME_COMPONENTS.DARK_OVERLAY, r.sweetModal.THEME_COMPONENTS.DARK_MODAL], r.sweetModal.THEME_MIXED = [r.sweetModal.THEME_COMPONENTS.DARK_OVERLAY, r.sweetModal.THEME_COMPONENTS.LIGHT_MODAL], r.sweetModal.TYPE_ALERT = "alert", r.sweetModal.TYPE_MODAL = "modal", r.sweetModal.ICON_SUCCESS = "success", r.sweetModal.ICON_ERROR = "error", r.sweetModal.ICON_WARNING = "warning"
    }, {
      "./SweetModal.class.coffee": 1,
      "./helpers.coffee": 2,
      "./templates.coffee": 4
    }],
    4: [function(e, t, n) {
      t.exports = {
        overlay: '<div class="sweet-modal-overlay">\n</div>',
        modal: '<div class="sweet-modal-box">\n\t<div class="sweet-modal-close"><a href="javascript:void(0);" class="sweet-modal-close-link"></a></div>\n\t<div class="sweet-modal-title-wrap">\n\t\t<div class="sweet-modal-title"><h2></h2></div>\n\t</div>\n\t\n\t<div class="sweet-modal-content">\n\t</div>\n</div>',
        buttons: '<div class="sweet-modal-buttons"></div>',
        tabs: {
          links: '<div class="sweet-modal-tabs-links">\n\t<ul>\n\t</ul>\n</div>',
          content: '<div class="sweet-modal-tabs-content">\n</div>',
          link: '<li>\n\t<a href="#modal-{TAB_ID}">\n\t\t<span class="icon"></span>\n\t\t<label></label>\n\t</a>\n</li>',
          tab: '<div class="sweet-modal-tab" data-tab="modal-{TAB_ID}">\n</div>'
        },
        icons: {
          error: '<div class="sweet-modal-icon sweet-modal-error">\n\t<span class="sweet-modal-x-mark">\n\t\t<span class="sweet-modal-line sweet-modal-left"></span>\n\t\t<span class="sweet-modal-line sweet-modal-right"></span>\n\t</span>\n</div>',
          warning: '<div class="sweet-modal-icon sweet-modal-warning">\n\t<span class="sweet-modal-body"></span>\n\t<span class="sweet-modal-dot"></span>\n</div>',
          info: '<div class="sweet-modal-icon sweet-modal-info"></div>',
          success: '<div class="sweet-modal-icon sweet-modal-success">\n\t<span class="sweet-modal-line sweet-modal-tip"></span>\n\t<span class="sweet-modal-line sweet-modal-long"></span>\n\t<div class="sweet-modal-placeholder"></div>\n\t<div class="sweet-modal-fix"></div>\n</div>'
        },
        prompt: '<div class="sweet-modal-prompt">\n\t<input type="{TYPE}" placeholder="{PLACEHOLDER}" value="{VALUE}" />\n</div>',
        prepare: function(e, t) {
          var n, r, i, a, s, o;
          for (n = 0, r = (s = e.match(/\{([A-Z0-9_\-]+)\}/g) || []).length; r > n; n++) void 0 === (o = t[i = (a = s[n]).replace(/\{|\}/g, "")]) && (o = "{" + i + "}"), e = e.replace(new RegExp(a, "g"), o);
          return e
        }
      }
    }, {}]
  }, {}, [3])
}, function(e, t, n) {
  var r = {
    "./af": 6,
    "./af.js": 6,
    "./ar": 7,
    "./ar-dz": 8,
    "./ar-dz.js": 8,
    "./ar-kw": 9,
    "./ar-kw.js": 9,
    "./ar-ly": 10,
    "./ar-ly.js": 10,
    "./ar-ma": 11,
    "./ar-ma.js": 11,
    "./ar-sa": 12,
    "./ar-sa.js": 12,
    "./ar-tn": 13,
    "./ar-tn.js": 13,
    "./ar.js": 7,
    "./az": 14,
    "./az.js": 14,
    "./be": 15,
    "./be.js": 15,
    "./bg": 16,
    "./bg.js": 16,
    "./bm": 17,
    "./bm.js": 17,
    "./bn": 18,
    "./bn.js": 18,
    "./bo": 19,
    "./bo.js": 19,
    "./br": 20,
    "./br.js": 20,
    "./bs": 21,
    "./bs.js": 21,
    "./ca": 22,
    "./ca.js": 22,
    "./cs": 23,
    "./cs.js": 23,
    "./cv": 24,
    "./cv.js": 24,
    "./cy": 25,
    "./cy.js": 25,
    "./da": 26,
    "./da.js": 26,
    "./de": 27,
    "./de-at": 28,
    "./de-at.js": 28,
    "./de-ch": 29,
    "./de-ch.js": 29,
    "./de.js": 27,
    "./dv": 30,
    "./dv.js": 30,
    "./el": 31,
    "./el.js": 31,
    "./en-au": 32,
    "./en-au.js": 32,
    "./en-ca": 33,
    "./en-ca.js": 33,
    "./en-gb": 34,
    "./en-gb.js": 34,
    "./en-ie": 35,
    "./en-ie.js": 35,
    "./en-il": 36,
    "./en-il.js": 36,
    "./en-nz": 37,
    "./en-nz.js": 37,
    "./eo": 38,
    "./eo.js": 38,
    "./es": 39,
    "./es-do": 40,
    "./es-do.js": 40,
    "./es-us": 41,
    "./es-us.js": 41,
    "./es.js": 39,
    "./et": 42,
    "./et.js": 42,
    "./eu": 43,
    "./eu.js": 43,
    "./fa": 44,
    "./fa.js": 44,
    "./fi": 45,
    "./fi.js": 45,
    "./fo": 46,
    "./fo.js": 46,
    "./fr": 47,
    "./fr-ca": 48,
    "./fr-ca.js": 48,
    "./fr-ch": 49,
    "./fr-ch.js": 49,
    "./fr.js": 47,
    "./fy": 50,
    "./fy.js": 50,
    "./gd": 51,
    "./gd.js": 51,
    "./gl": 52,
    "./gl.js": 52,
    "./gom-latn": 53,
    "./gom-latn.js": 53,
    "./gu": 54,
    "./gu.js": 54,
    "./he": 55,
    "./he.js": 55,
    "./hi": 56,
    "./hi.js": 56,
    "./hr": 57,
    "./hr.js": 57,
    "./hu": 58,
    "./hu.js": 58,
    "./hy-am": 59,
    "./hy-am.js": 59,
    "./id": 60,
    "./id.js": 60,
    "./is": 61,
    "./is.js": 61,
    "./it": 62,
    "./it.js": 62,
    "./ja": 63,
    "./ja.js": 63,
    "./jv": 64,
    "./jv.js": 64,
    "./ka": 65,
    "./ka.js": 65,
    "./kk": 66,
    "./kk.js": 66,
    "./km": 67,
    "./km.js": 67,
    "./kn": 68,
    "./kn.js": 68,
    "./ko": 69,
    "./ko.js": 69,
    "./ky": 70,
    "./ky.js": 70,
    "./lb": 71,
    "./lb.js": 71,
    "./lo": 72,
    "./lo.js": 72,
    "./lt": 73,
    "./lt.js": 73,
    "./lv": 74,
    "./lv.js": 74,
    "./me": 75,
    "./me.js": 75,
    "./mi": 76,
    "./mi.js": 76,
    "./mk": 77,
    "./mk.js": 77,
    "./ml": 78,
    "./ml.js": 78,
    "./mn": 79,
    "./mn.js": 79,
    "./mr": 80,
    "./mr.js": 80,
    "./ms": 81,
    "./ms-my": 82,
    "./ms-my.js": 82,
    "./ms.js": 81,
    "./mt": 83,
    "./mt.js": 83,
    "./my": 84,
    "./my.js": 84,
    "./nb": 85,
    "./nb.js": 85,
    "./ne": 86,
    "./ne.js": 86,
    "./nl": 87,
    "./nl-be": 88,
    "./nl-be.js": 88,
    "./nl.js": 87,
    "./nn": 89,
    "./nn.js": 89,
    "./pa-in": 90,
    "./pa-in.js": 90,
    "./pl": 91,
    "./pl.js": 91,
    "./pt": 92,
    "./pt-br": 93,
    "./pt-br.js": 93,
    "./pt.js": 92,
    "./ro": 94,
    "./ro.js": 94,
    "./ru": 95,
    "./ru.js": 95,
    "./sd": 96,
    "./sd.js": 96,
    "./se": 97,
    "./se.js": 97,
    "./si": 98,
    "./si.js": 98,
    "./sk": 99,
    "./sk.js": 99,
    "./sl": 100,
    "./sl.js": 100,
    "./sq": 101,
    "./sq.js": 101,
    "./sr": 102,
    "./sr-cyrl": 103,
    "./sr-cyrl.js": 103,
    "./sr.js": 102,
    "./ss": 104,
    "./ss.js": 104,
    "./sv": 105,
    "./sv.js": 105,
    "./sw": 106,
    "./sw.js": 106,
    "./ta": 107,
    "./ta.js": 107,
    "./te": 108,
    "./te.js": 108,
    "./tet": 109,
    "./tet.js": 109,
    "./tg": 110,
    "./tg.js": 110,
    "./th": 111,
    "./th.js": 111,
    "./tl-ph": 112,
    "./tl-ph.js": 112,
    "./tlh": 113,
    "./tlh.js": 113,
    "./tr": 114,
    "./tr.js": 114,
    "./tzl": 115,
    "./tzl.js": 115,
    "./tzm": 116,
    "./tzm-latn": 117,
    "./tzm-latn.js": 117,
    "./tzm.js": 116,
    "./ug-cn": 118,
    "./ug-cn.js": 118,
    "./uk": 119,
    "./uk.js": 119,
    "./ur": 120,
    "./ur.js": 120,
    "./uz": 121,
    "./uz-latn": 122,
    "./uz-latn.js": 122,
    "./uz.js": 121,
    "./vi": 123,
    "./vi.js": 123,
    "./x-pseudo": 124,
    "./x-pseudo.js": 124,
    "./yo": 125,
    "./yo.js": 125,
    "./zh-cn": 126,
    "./zh-cn.js": 126,
    "./zh-hk": 127,
    "./zh-hk.js": 127,
    "./zh-tw": 128,
    "./zh-tw.js": 128
  };

  function i(e) {
    return n(a(e))
  }

  function a(e) {
    var t = r[e];
    if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
    return t
  }
  i.keys = function() {
    return Object.keys(r)
  }, i.resolve = a, e.exports = i, i.id = 139
}, function(e, t) {
  ! function(e, t) {
    var n = "plugin_bootstrapMaterialDatePicker";

    function r(n, r) {
      this.currentView = 0, this.minDate, this.maxDate, this._attachedEvents = [], this.element = n, this.$element = e(n), this.params = {
        date: !0,
        time: !0,
        format: "YYYY-MM-DD",
        minDate: null,
        maxDate: null,
        currentDate: null,
        lang: "en",
        weekStart: 0,
        disabledDays: [],
        shortTime: !1,
        clearButton: !1,
        nowButton: !1,
        cancelText: "Cancel",
        okText: "OK",
        clearText: "Clear",
        nowText: "Now",
        switchOnClick: !1,
        triggerEvent: "focus",
        monthPicker: !1,
        year: !0
      }, this.params = e.fn.extend(this.params, r), this.name = "dtp_" + this.setName(), this.$element.attr("data-dtp", this.name), t.locale(this.params.lang), this.init()
    }
    t.locale("en"), e.fn.bootstrapMaterialDatePicker = function(t, i) {
      return this.each(function() {
        e.data(this, n) ? ("function" == typeof e.data(this, n)[t] && e.data(this, n)[t](i), "destroy" === t && e.data(this, n)) : e.data(this, n, new r(this, t))
      }), this
    }, r.prototype = {
      init: function() {
        this.initDays(), this.initDates(), this.initTemplate(), this.initButtons(), this._attachEvent(e(window), "resize", this._centerBox.bind(this)), this._attachEvent(this.$dtpElement.find(".dtp-content"), "click", this._onElementClick.bind(this)), this._attachEvent(this.$dtpElement, "click", this._onBackgroundClick.bind(this)), this._attachEvent(this.$dtpElement.find(".dtp-close > a"), "click", this._onCloseClick.bind(this)), this._attachEvent(this.$element, this.params.triggerEvent, this._fireCalendar.bind(this))
      },
      initDays: function() {
        this.days = [];
        for (var e = this.params.weekStart; this.days.length < 7; e++) e > 6 && (e = 0), this.days.push(e.toString())
      },
      initDates: function() {
        if (this.$element.val().length > 0) void 0 !== this.params.format && null !== this.params.format ? this.currentDate = t(this.$element.val(), this.params.format).locale(this.params.lang) : this.currentDate = t(this.$element.val()).locale(this.params.lang);
        else if (void 0 !== this.$element.attr("value") && null !== this.$element.attr("value") && "" !== this.$element.attr("value")) "string" == typeof this.$element.attr("value") && (void 0 !== this.params.format && null !== this.params.format ? this.currentDate = t(this.$element.attr("value"), this.params.format).locale(this.params.lang) : this.currentDate = t(this.$element.attr("value")).locale(this.params.lang));
        else if (void 0 !== this.params.currentDate && null !== this.params.currentDate) {
          if ("string" == typeof this.params.currentDate) void 0 !== this.params.format && null !== this.params.format ? this.currentDate = t(this.params.currentDate, this.params.format).locale(this.params.lang) : this.currentDate = t(this.params.currentDate).locale(this.params.lang);
          else if (void 0 === this.params.currentDate.isValid || "function" != typeof this.params.currentDate.isValid) {
            var e = this.params.currentDate.getTime();
            this.currentDate = t(e, "x").locale(this.params.lang)
          } else this.currentDate = this.params.currentDate;
          this.$element.val(this.currentDate.format(this.params.format))
        } else this.currentDate = t();
        if (void 0 !== this.params.minDate && null !== this.params.minDate)
          if ("string" == typeof this.params.minDate) void 0 !== this.params.format && null !== this.params.format ? this.minDate = t(this.params.minDate, this.params.format).locale(this.params.lang) : this.minDate = t(this.params.minDate).locale(this.params.lang);
          else if (void 0 === this.params.minDate.isValid || "function" != typeof this.params.minDate.isValid) {
          e = this.params.minDate.getTime();
          this.minDate = t(e, "x").locale(this.params.lang)
        } else this.minDate = this.params.minDate;
        else null === this.params.minDate && (this.minDate = null);
        if (void 0 !== this.params.maxDate && null !== this.params.maxDate)
          if ("string" == typeof this.params.maxDate) void 0 !== this.params.format && null !== this.params.format ? this.maxDate = t(this.params.maxDate, this.params.format).locale(this.params.lang) : this.maxDate = t(this.params.maxDate).locale(this.params.lang);
          else if (void 0 === this.params.maxDate.isValid || "function" != typeof this.params.maxDate.isValid) {
          e = this.params.maxDate.getTime();
          this.maxDate = t(e, "x").locale(this.params.lang)
        } else this.maxDate = this.params.maxDate;
        else null === this.params.maxDate && (this.maxDate = null);
        this.isAfterMinDate(this.currentDate) || (this.currentDate = t(this.minDate)), this.isBeforeMaxDate(this.currentDate) || (this.currentDate = t(this.maxDate))
      },
      initTemplate: function() {
        for (var t = "", n = this.currentDate.year(), r = n - 3; r < n + 4; r++) t += '<div class="year-picker-item" data-year="' + r + '">' + r + "</div>";
        this.midYear = n;
        var i = '<div class="dtp-picker-year hidden" ><div><a href="javascript:void(0);" class="btn btn-default dtp-select-year-range before" style="margin: 0;"><i class="material-icons">keyboard_arrow_up</i></a></div>' + t + '<div><a href="javascript:void(0);" class="btn btn-default dtp-select-year-range after" style="margin: 0;"><i class="material-icons">keyboard_arrow_down</i></a></div></div>';
        this.template = '<div class="dtp hidden" id="' + this.name + '"><div class="dtp-content"><div class="dtp-date-view"><header class="dtp-header"><div class="dtp-actual-day">Lundi</div><div class="dtp-close"><a href="javascript:void(0);"><i class="material-icons">clear</i></a></div></header><div class="dtp-date hidden"><div><div class="left center p10"><a href="javascript:void(0);" class="dtp-select-month-before"><i class="material-icons">chevron_left</i></a></div><div class="dtp-actual-month p80">MAR</div><div class="right center p10"><a href="javascript:void(0);" class="dtp-select-month-after"><i class="material-icons">chevron_right</i></a></div><div class="clearfix"></div></div><div class="dtp-actual-num">13</div><div><div class="left center p10"><a href="javascript:void(0);" class="dtp-select-year-before"><i class="material-icons">chevron_left</i></a></div><div class="dtp-actual-year p80' + (this.params.year ? "" : " disabled") + '">2014</div><div class="right center p10"><a href="javascript:void(0);" class="dtp-select-year-after"><i class="material-icons">chevron_right</i></a></div><div class="clearfix"></div></div></div><div class="dtp-time hidden"><div class="dtp-actual-maxtime">23:55</div></div><div class="dtp-picker"><div class="dtp-picker-calendar"></div><div class="dtp-picker-datetime hidden"><div class="dtp-actual-meridien"><div class="left p20"><a class="dtp-meridien-am" href="javascript:void(0);">AM</a></div><div class="dtp-actual-time p60"></div><div class="right p20"><a class="dtp-meridien-pm" href="javascript:void(0);">PM</a></div><div class="clearfix"></div></div><div id="dtp-svg-clock"></div></div>' + i + '</div></div><div class="dtp-buttons"><button class="dtp-btn-now btn btn-flat hidden">' + this.params.nowText + '</button><button class="dtp-btn-clear btn btn-flat hidden">' + this.params.clearText + '</button><button class="dtp-btn-cancel btn btn-flat">' + this.params.cancelText + '</button><button class="dtp-btn-ok btn btn-flat">' + this.params.okText + '</button><div class="clearfix"></div></div></div></div>', e("body").find("#" + this.name).length <= 0 && (e("body").append(this.template), this && (this.dtpElement = e("body").find("#" + this.name)), this.$dtpElement = e(this.dtpElement))
      },
      initButtons: function() {
        this._attachEvent(this.$dtpElement.find(".dtp-btn-cancel"), "click", this._onCancelClick.bind(this)), this._attachEvent(this.$dtpElement.find(".dtp-btn-ok"), "click", this._onOKClick.bind(this)), this._attachEvent(this.$dtpElement.find("a.dtp-select-month-before"), "click", this._onMonthBeforeClick.bind(this)), this._attachEvent(this.$dtpElement.find("a.dtp-select-month-after"), "click", this._onMonthAfterClick.bind(this)), this._attachEvent(this.$dtpElement.find("a.dtp-select-year-before"), "click", this._onYearBeforeClick.bind(this)), this._attachEvent(this.$dtpElement.find("a.dtp-select-year-after"), "click", this._onYearAfterClick.bind(this)), this._attachEvent(this.$dtpElement.find(".dtp-actual-year"), "click", this._onActualYearClick.bind(this)), this._attachEvent(this.$dtpElement.find("a.dtp-select-year-range.before"), "click", this._onYearRangeBeforeClick.bind(this)), this._attachEvent(this.$dtpElement.find("a.dtp-select-year-range.after"), "click", this._onYearRangeAfterClick.bind(this)), this._attachEvent(this.$dtpElement.find("div.year-picker-item"), "click", this._onYearItemClick.bind(this)), !0 === this.params.clearButton && (this._attachEvent(this.$dtpElement.find(".dtp-btn-clear"), "click", this._onClearClick.bind(this)), this.$dtpElement.find(".dtp-btn-clear").removeClass("hidden")), !0 === this.params.nowButton && (this._attachEvent(this.$dtpElement.find(".dtp-btn-now"), "click", this._onNowClick.bind(this)), this.$dtpElement.find(".dtp-btn-now").removeClass("hidden")), !0 === this.params.nowButton && !0 === this.params.clearButton ? this.$dtpElement.find(".dtp-btn-clear, .dtp-btn-now, .dtp-btn-cancel, .dtp-btn-ok").addClass("btn-xs") : !0 !== this.params.nowButton && !0 !== this.params.clearButton || this.$dtpElement.find(".dtp-btn-clear, .dtp-btn-now, .dtp-btn-cancel, .dtp-btn-ok").addClass("btn-sm")
      },
      initMeridienButtons: function() {
        this.$dtpElement.find("a.dtp-meridien-am").off("click").on("click", this._onSelectAM.bind(this)), this.$dtpElement.find("a.dtp-meridien-pm").off("click").on("click", this._onSelectPM.bind(this))
      },
      initDate: function(e) {
        this.currentView = 0, !1 === this.params.monthPicker && this.$dtpElement.find(".dtp-picker-calendar").removeClass("hidden"), this.$dtpElement.find(".dtp-picker-datetime").addClass("hidden"), this.$dtpElement.find(".dtp-picker-year").addClass("hidden");
        var t = void 0 !== this.currentDate && null !== this.currentDate ? this.currentDate : null,
          n = this.generateCalendar(this.currentDate);
        if (void 0 !== n.week && void 0 !== n.days) {
          var r = this.constructHTMLCalendar(t, n);
          this.$dtpElement.find("a.dtp-select-day").off("click"), this.$dtpElement.find(".dtp-picker-calendar").html(r), this.$dtpElement.find("a.dtp-select-day").on("click", this._onSelectDate.bind(this)), this.toggleButtons(t)
        }
        this._centerBox(), this.showDate(t)
      },
      initHours: function() {
        this.currentView = 1, this.showTime(this.currentDate), this.initMeridienButtons(), this.currentDate.hour() < 12 ? this.$dtpElement.find("a.dtp-meridien-am").click() : this.$dtpElement.find("a.dtp-meridien-pm").click();
        var e = this.params.shortTime ? "h" : "H";
        this.$dtpElement.find(".dtp-picker-datetime").removeClass("hidden"), this.$dtpElement.find(".dtp-picker-calendar").addClass("hidden"), this.$dtpElement.find(".dtp-picker-year").addClass("hidden");
        for (var t = this.createSVGClock(!0), n = 0; n < 12; n++) {
          var r = -162 * Math.sin(2 * -Math.PI * (n / 12)),
            i = -162 * Math.cos(2 * -Math.PI * (n / 12)),
            a = this.currentDate.format(e) == n ? "#8BC34A" : "transparent",
            s = this.currentDate.format(e) == n ? "#fff" : "#000",
            o = this.createSVGElement("circle", {
              id: "h-" + n,
              class: "dtp-select-hour",
              style: "cursor:pointer",
              r: "30",
              cx: r,
              cy: i,
              fill: a,
              "data-hour": n
            });
          (u = this.createSVGElement("text", {
            id: "th-" + n,
            class: "dtp-select-hour-text",
            "text-anchor": "middle",
            style: "cursor:pointer",
            "font-weight": "bold",
            "font-size": "20",
            x: r,
            y: i + 7,
            fill: s,
            "data-hour": n
          })).textContent = 0 === n && this.params.shortTime ? 12 : n, this.toggleTime(n, !0) ? (o.addEventListener("click", this._onSelectHour.bind(this)), u.addEventListener("click", this._onSelectHour.bind(this))) : (o.className += " disabled", u.className += " disabled", u.setAttribute("fill", "#bdbdbd")), t.appendChild(o), t.appendChild(u)
        }
        if (!this.params.shortTime) {
          for (n = 0; n < 12; n++) {
            var u;
            r = -110 * Math.sin(2 * -Math.PI * (n / 12)), i = -110 * Math.cos(2 * -Math.PI * (n / 12)), a = this.currentDate.format(e) == n + 12 ? "#8BC34A" : "transparent", s = this.currentDate.format(e) == n + 12 ? "#fff" : "#000", o = this.createSVGElement("circle", {
              id: "h-" + (n + 12),
              class: "dtp-select-hour",
              style: "cursor:pointer",
              r: "30",
              cx: r,
              cy: i,
              fill: a,
              "data-hour": n + 12
            });
            (u = this.createSVGElement("text", {
              id: "th-" + (n + 12),
              class: "dtp-select-hour-text",
              "text-anchor": "middle",
              style: "cursor:pointer",
              "font-weight": "bold",
              "font-size": "22",
              x: r,
              y: i + 7,
              fill: s,
              "data-hour": n + 12
            })).textContent = n + 12, this.toggleTime(n + 12, !0) ? (o.addEventListener("click", this._onSelectHour.bind(this)), u.addEventListener("click", this._onSelectHour.bind(this))) : (o.className += " disabled", u.className += " disabled", u.setAttribute("fill", "#bdbdbd")), t.appendChild(o), t.appendChild(u)
          }
          this.$dtpElement.find("a.dtp-meridien-am").addClass("hidden"), this.$dtpElement.find("a.dtp-meridien-pm").addClass("hidden")
        }
        this._centerBox()
      },
      initMinutes: function() {
        this.currentView = 2, this.showTime(this.currentDate), this.initMeridienButtons(), this.currentDate.hour() < 12 ? this.$dtpElement.find("a.dtp-meridien-am").click() : this.$dtpElement.find("a.dtp-meridien-pm").click(), this.$dtpElement.find(".dtp-picker-year").addClass("hidden"), this.$dtpElement.find(".dtp-picker-calendar").addClass("hidden"), this.$dtpElement.find(".dtp-picker-datetime").removeClass("hidden");
        for (var e = this.createSVGClock(!1), t = 0; t < 60; t++) {
          var n = t % 5 == 0 ? 162 : 158,
            r = t % 5 == 0 ? 30 : 20,
            i = -n * Math.sin(2 * -Math.PI * (t / 60)),
            a = -n * Math.cos(2 * -Math.PI * (t / 60)),
            s = this.currentDate.format("m") == t ? "#8BC34A" : "transparent",
            o = this.createSVGElement("circle", {
              id: "m-" + t,
              class: "dtp-select-minute",
              style: "cursor:pointer",
              r: r,
              cx: i,
              cy: a,
              fill: s,
              "data-minute": t
            });
          this.toggleTime(t, !1) ? o.addEventListener("click", this._onSelectMinute.bind(this)) : o.className += " disabled", e.appendChild(o)
        }
        for (t = 0; t < 60; t++)
          if (t % 5 == 0) {
            i = -162 * Math.sin(2 * -Math.PI * (t / 60)), a = -162 * Math.cos(2 * -Math.PI * (t / 60)), s = this.currentDate.format("m") == t ? "#fff" : "#000";
            var u = this.createSVGElement("text", {
              id: "tm-" + t,
              class: "dtp-select-minute-text",
              "text-anchor": "middle",
              style: "cursor:pointer",
              "font-weight": "bold",
              "font-size": "20",
              x: i,
              y: a + 7,
              fill: s,
              "data-minute": t
            });
            u.textContent = t, this.toggleTime(t, !1) ? u.addEventListener("click", this._onSelectMinute.bind(this)) : (u.className += " disabled", u.setAttribute("fill", "#bdbdbd")), e.appendChild(u)
          }
        this._centerBox()
      },
      animateHands: function() {
        var e = this.currentDate.hour(),
          t = this.currentDate.minute();
        this.$dtpElement.find(".hour-hand")[0].setAttribute("transform", "rotate(" + 360 * e / 12 + ")"), this.$dtpElement.find(".minute-hand")[0].setAttribute("transform", "rotate(" + 360 * t / 60 + ")")
      },
      createSVGClock: function(e) {
        var t = this.params.shortTime ? -120 : -90,
          n = this.createSVGElement("svg", {
            class: "svg-clock",
            viewBox: "0,0,400,400"
          }),
          r = this.createSVGElement("g", {
            transform: "translate(200,200) "
          }),
          i = this.createSVGElement("circle", {
            r: "192",
            fill: "#eee",
            stroke: "#bdbdbd",
            "stroke-width": 2
          }),
          a = this.createSVGElement("circle", {
            r: "15",
            fill: "#757575"
          });
        if (r.appendChild(i), e) {
          var s = this.createSVGElement("line", {
              class: "minute-hand",
              x1: 0,
              y1: 0,
              x2: 0,
              y2: -150,
              stroke: "#bdbdbd",
              "stroke-width": 2
            }),
            o = this.createSVGElement("line", {
              class: "hour-hand",
              x1: 0,
              y1: 0,
              x2: 0,
              y2: t,
              stroke: "#8BC34A",
              "stroke-width": 8
            });
          r.appendChild(s), r.appendChild(o)
        } else {
          s = this.createSVGElement("line", {
            class: "minute-hand",
            x1: 0,
            y1: 0,
            x2: 0,
            y2: -150,
            stroke: "#8BC34A",
            "stroke-width": 2
          }), o = this.createSVGElement("line", {
            class: "hour-hand",
            x1: 0,
            y1: 0,
            x2: 0,
            y2: t,
            stroke: "#bdbdbd",
            "stroke-width": 8
          });
          r.appendChild(o), r.appendChild(s)
        }
        return r.appendChild(a), n.appendChild(r), this.$dtpElement.find("#dtp-svg-clock").empty(), this.$dtpElement.find("#dtp-svg-clock")[0].appendChild(n), this.animateHands(), r
      },
      createSVGElement: function(e, t) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", e);
        for (var r in t) n.setAttribute(r, t[r]);
        return n
      },
      isAfterMinDate: function(e, n, r) {
        var i = !0;
        if (void 0 !== this.minDate && null !== this.minDate) {
          var a = t(this.minDate),
            s = t(e);
          n || r || (a.hour(0), a.minute(0), s.hour(0), s.minute(0)), a.second(0), s.second(0), a.millisecond(0), s.millisecond(0), r ? i = parseInt(s.format("X")) >= parseInt(a.format("X")) : (s.minute(0), a.minute(0), i = parseInt(s.format("X")) >= parseInt(a.format("X")))
        }
        return i
      },
      isBeforeMaxDate: function(e, n, r) {
        var i = !0;
        if (void 0 !== this.maxDate && null !== this.maxDate) {
          var a = t(this.maxDate),
            s = t(e);
          n || r || (a.hour(0), a.minute(0), s.hour(0), s.minute(0)), a.second(0), s.second(0), a.millisecond(0), s.millisecond(0), r ? i = parseInt(s.format("X")) <= parseInt(a.format("X")) : (s.minute(0), a.minute(0), i = parseInt(s.format("X")) <= parseInt(a.format("X")))
        }
        return i
      },
      rotateElement: function(t, n) {
        e(t).css({
          WebkitTransform: "rotate(" + n + "deg)",
          "-moz-transform": "rotate(" + n + "deg)"
        })
      },
      showDate: function(e) {
        e && (this.$dtpElement.find(".dtp-actual-day").html(e.locale(this.params.lang).format("dddd")), this.$dtpElement.find(".dtp-actual-month").html(e.locale(this.params.lang).format("MMM").toUpperCase()), this.$dtpElement.find(".dtp-actual-num").html(e.locale(this.params.lang).format("DD")), this.$dtpElement.find(".dtp-actual-year").html(e.locale(this.params.lang).format("YYYY")))
      },
      showTime: function(e) {
        if (e) {
          var t = e.minute(),
            n = (this.params.shortTime ? e.format("hh") : e.format("HH")) + ":" + (2 == t.toString().length ? t : "0" + t) + (this.params.shortTime ? " " + e.format("A") : "");
          this.params.date ? this.$dtpElement.find(".dtp-actual-time").html(n) : (this.params.shortTime ? this.$dtpElement.find(".dtp-actual-day").html(e.format("A")) : this.$dtpElement.find(".dtp-actual-day").html("&nbsp;"), this.$dtpElement.find(".dtp-actual-maxtime").html(n))
        }
      },
      selectDate: function(e) {
        e && (this.currentDate.date(e), this.showDate(this.currentDate), this.$element.trigger("dateSelected", this.currentDate))
      },
      generateCalendar: function(e) {
        var n = {};
        if (null !== e) {
          var r = t(e).locale(this.params.lang).startOf("month"),
            i = t(e).locale(this.params.lang).endOf("month"),
            a = r.format("d");
          n.week = this.days, n.days = [];
          for (var s = r.date(); s <= i.date(); s++) {
            if (s === r.date()) {
              var o = n.week.indexOf(a.toString());
              if (o > 0)
                for (var u = 0; u < o; u++) n.days.push(0)
            }
            n.days.push(t(r).locale(this.params.lang).date(s))
          }
        }
        return n
      },
      constructHTMLCalendar: function(e, n) {
        var r = "";
        r += '<div class="dtp-picker-month">' + e.locale(this.params.lang).format("MMMM YYYY") + "</div>", r += '<table class="table dtp-picker-days"><thead>';
        for (var i = 0; i < n.week.length; i++) r += "<th>" + t(parseInt(n.week[i]), "d").locale(this.params.lang).format("dd").substring(0, 1) + "</th>";
        r += "</thead>", r += "<tbody><tr>";
        for (i = 0; i < n.days.length; i++) i % 7 == 0 && (r += "</tr><tr>"), r += '<td data-date="' + t(n.days[i]).locale(this.params.lang).format("D") + '">', 0 != n.days[i] && (!1 === this.isBeforeMaxDate(t(n.days[i]), !1, !1) || !1 === this.isAfterMinDate(t(n.days[i]), !1, !1) || -1 !== this.params.disabledDays.indexOf(n.days[i].isoWeekday()) ? r += '<span class="dtp-select-day">' + t(n.days[i]).locale(this.params.lang).format("DD") + "</span>" : t(n.days[i]).locale(this.params.lang).format("DD") === t(this.currentDate).locale(this.params.lang).format("DD") ? r += '<a href="javascript:void(0);" class="dtp-select-day selected">' + t(n.days[i]).locale(this.params.lang).format("DD") + "</a>" : r += '<a href="javascript:void(0);" class="dtp-select-day">' + t(n.days[i]).locale(this.params.lang).format("DD") + "</a>", r += "</td>");
        return r += "</tr></tbody></table>"
      },
      setName: function() {
        for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 5; n++) e += t.charAt(Math.floor(Math.random() * t.length));
        return e
      },
      isPM: function() {
        return this.$dtpElement.find("a.dtp-meridien-pm").hasClass("selected")
      },
      setElementValue: function() {
        this.$element.trigger("beforeChange", this.currentDate), void 0 !== e.material && this.$element.removeClass("empty"), this.$element.val(t(this.currentDate).locale(this.params.lang).format(this.params.format)), this.$element.trigger("change", this.currentDate)
      },
      toggleButtons: function(e) {
        if (e && e.isValid()) {
          var n = t(e).locale(this.params.lang).startOf("month"),
            r = t(e).locale(this.params.lang).endOf("month");
          this.isAfterMinDate(n, !1, !1) ? this.$dtpElement.find("a.dtp-select-month-before").removeClass("invisible") : this.$dtpElement.find("a.dtp-select-month-before").addClass("invisible"), this.isBeforeMaxDate(r, !1, !1) ? this.$dtpElement.find("a.dtp-select-month-after").removeClass("invisible") : this.$dtpElement.find("a.dtp-select-month-after").addClass("invisible");
          var i = t(e).locale(this.params.lang).startOf("year"),
            a = t(e).locale(this.params.lang).endOf("year");
          this.isAfterMinDate(i, !1, !1) ? this.$dtpElement.find("a.dtp-select-year-before").removeClass("invisible") : this.$dtpElement.find("a.dtp-select-year-before").addClass("invisible"), this.isBeforeMaxDate(a, !1, !1) ? this.$dtpElement.find("a.dtp-select-year-after").removeClass("invisible") : this.$dtpElement.find("a.dtp-select-year-after").addClass("invisible")
        }
      },
      toggleTime: function(e, n) {
        var r, i = !1;
        n ? ((r = t(this.currentDate)).hour(this.convertHours(e)).minute(0).second(0), i = !(!1 === this.isAfterMinDate(r, !0, !1) || !1 === this.isBeforeMaxDate(r, !0, !1))) : ((r = t(this.currentDate)).minute(e).second(0), i = !(!1 === this.isAfterMinDate(r, !0, !0) || !1 === this.isBeforeMaxDate(r, !0, !0)));
        return i
      },
      _attachEvent: function(e, t, n) {
        e.on(t, null, null, n), this._attachedEvents.push([e, t, n])
      },
      _detachEvents: function() {
        for (var e = this._attachedEvents.length - 1; e >= 0; e--) this._attachedEvents[e][0].off(this._attachedEvents[e][1], this._attachedEvents[e][2]), this._attachedEvents.splice(e, 1)
      },
      _fireCalendar: function() {
        this.currentView = 0, this.$element.blur(), this.initDates(), this.show(), this.params.date ? (this.$dtpElement.find(".dtp-date").removeClass("hidden"), this.initDate()) : this.params.time && (this.$dtpElement.find(".dtp-time").removeClass("hidden"), this.initHours())
      },
      _onBackgroundClick: function(e) {
        e.stopPropagation(), this.hide()
      },
      _onElementClick: function(e) {
        e.stopPropagation()
      },
      _onKeydown: function(e) {
        27 === e.which && this.hide()
      },
      _onCloseClick: function() {
        this.hide()
      },
      _onClearClick: function() {
        this.currentDate = null, this.$element.trigger("beforeChange", this.currentDate), this.hide(), void 0 !== e.material && this.$element.addClass("empty"), this.$element.val(""), this.$element.trigger("change", this.currentDate)
      },
      _onNowClick: function() {
        if (this.currentDate = t(), !0 === this.params.date && (this.showDate(this.currentDate), 0 === this.currentView && this.initDate()), !0 === this.params.time) {
          switch (this.showTime(this.currentDate), this.currentView) {
            case 1:
              this.initHours();
              break;
            case 2:
              this.initMinutes()
          }
          this.animateHands()
        }
      },
      _onOKClick: function() {
        switch (this.currentView) {
          case 0:
            !0 === this.params.time ? this.initHours() : (this.setElementValue(), this.hide());
            break;
          case 1:
            this.initMinutes();
            break;
          case 2:
            this.setElementValue(), this.hide()
        }
      },
      _onCancelClick: function() {
        if (this.params.time) switch (this.currentView) {
          case 0:
            this.hide();
            break;
          case 1:
            this.params.date ? this.initDate() : this.hide();
            break;
          case 2:
            this.initHours()
        } else this.hide()
      },
      _onMonthBeforeClick: function() {
        this.currentDate.subtract(1, "months"), this.initDate(this.currentDate), this._closeYearPicker()
      },
      _onMonthAfterClick: function() {
        this.currentDate.add(1, "months"), this.initDate(this.currentDate), this._closeYearPicker()
      },
      _onYearBeforeClick: function() {
        this.currentDate.subtract(1, "years"), this.initDate(this.currentDate), this._closeYearPicker()
      },
      _onYearAfterClick: function() {
        this.currentDate.add(1, "years"), this.initDate(this.currentDate), this._closeYearPicker()
      },
      refreshYearItems: function() {
        var n = this.currentDate.year(),
          r = this.midYear,
          i = 1850;
        void 0 !== this.minDate && null !== this.minDate && (i = t(this.minDate).year());
        var a = 2200;
        void 0 !== this.maxDate && null !== this.maxDate && (a = t(this.maxDate).year()), this.$dtpElement.find(".dtp-picker-year .invisible").removeClass("invisible"), this.$dtpElement.find(".year-picker-item").each(function(t, s) {
          var o = r - 3 + t;
          e(s).attr("data-year", o).text(o).data("year", o), n == o ? e(s).addClass("active") : e(s).removeClass("active"), (o < i || o > a) && e(s).addClass("invisible")
        }), i >= r - 3 && this.$dtpElement.find(".dtp-select-year-range.before").addClass("invisible"), a <= r + 3 && this.$dtpElement.find(".dtp-select-year-range.after").addClass("invisible"), this.$dtpElement.find(".dtp-select-year-range").data("mid", r)
      },
      _onActualYearClick: function() {
        this.params.year && (this.$dtpElement.find(".dtp-picker-year.hidden").length > 0 ? (this.$dtpElement.find(".dtp-picker-datetime").addClass("hidden"), this.$dtpElement.find(".dtp-picker-calendar").addClass("hidden"), this.$dtpElement.find(".dtp-picker-year").removeClass("hidden"), this.midYear = this.currentDate.year(), this.refreshYearItems()) : this._closeYearPicker())
      },
      _onYearRangeBeforeClick: function() {
        this.midYear -= 7, this.refreshYearItems()
      },
      _onYearRangeAfterClick: function() {
        this.midYear += 7, this.refreshYearItems()
      },
      _onYearItemClick: function(t) {
        var n = e(t.currentTarget).data("year") - this.currentDate.year();
        this.currentDate.add(n, "years"), this.initDate(this.currentDate), this._closeYearPicker(), this.$element.trigger("yearSelected", this.currentDate)
      },
      _closeYearPicker: function() {
        this.$dtpElement.find(".dtp-picker-calendar").removeClass("hidden"), this.$dtpElement.find(".dtp-picker-year").addClass("hidden")
      },
      enableYearPicker: function() {
        this.params.year = !0, this.$dtpElement.find(".dtp-actual-year").reomveClass("disabled")
      },
      disableYearPicker: function() {
        this.params.year = !1, this.$dtpElement.find(".dtp-actual-year").addClass("disabled"), this._closeYearPicker()
      },
      _onSelectDate: function(t) {
        this.$dtpElement.find("a.dtp-select-day").removeClass("selected"), e(t.currentTarget).addClass("selected"), this.selectDate(e(t.currentTarget).parent().data("date")), !0 === this.params.switchOnClick && !0 === this.params.time && setTimeout(this.initHours.bind(this), 200), !0 === this.params.switchOnClick && !1 === this.params.time && setTimeout(this._onOKClick.bind(this), 200)
      },
      _onSelectHour: function(t) {
        if (!e(t.target).hasClass("disabled")) {
          for (var n = e(t.target).data("hour"), r = e(t.target).parent(), i = r.find(".dtp-select-hour"), a = 0; a < i.length; a++) e(i[a]).attr("fill", "transparent");
          var s = r.find(".dtp-select-hour-text");
          for (a = 0; a < s.length; a++) e(s[a]).attr("fill", "#000");
          e(r.find("#h-" + n)).attr("fill", "#8BC34A"), e(r.find("#th-" + n)).attr("fill", "#fff"), this.currentDate.hour(parseInt(n)), !0 === this.params.shortTime && this.isPM() && this.currentDate.add(12, "hours"), this.showTime(this.currentDate), this.animateHands(), !0 === this.params.switchOnClick && setTimeout(this.initMinutes.bind(this), 200)
        }
      },
      _onSelectMinute: function(t) {
        if (!e(t.target).hasClass("disabled")) {
          for (var n = e(t.target).data("minute"), r = e(t.target).parent(), i = r.find(".dtp-select-minute"), a = 0; a < i.length; a++) e(i[a]).attr("fill", "transparent");
          var s = r.find(".dtp-select-minute-text");
          for (a = 0; a < s.length; a++) e(s[a]).attr("fill", "#000");
          e(r.find("#m-" + n)).attr("fill", "#8BC34A"), e(r.find("#tm-" + n)).attr("fill", "#fff"), this.currentDate.minute(parseInt(n)), this.showTime(this.currentDate), this.animateHands(), !0 === this.params.switchOnClick && setTimeout(function() {
            this.setElementValue(), this.hide()
          }.bind(this), 200)
        }
      },
      _onSelectAM: function(t) {
        e(".dtp-actual-meridien").find("a").removeClass("selected"), e(t.currentTarget).addClass("selected"), this.currentDate.hour() >= 12 && this.currentDate.subtract(12, "hours") && this.showTime(this.currentDate), this.toggleTime(1 === this.currentView)
      },
      _onSelectPM: function(t) {
        e(".dtp-actual-meridien").find("a").removeClass("selected"), e(t.currentTarget).addClass("selected"), this.currentDate.hour() < 12 && this.currentDate.add(12, "hours") && this.showTime(this.currentDate), this.toggleTime(1 === this.currentView)
      },
      _hideCalendar: function() {
        this.$dtpElement.find(".dtp-picker-calendar").addClass("hidden")
      },
      convertHours: function(e) {
        var t = e;
        return !0 === this.params.shortTime && e < 12 && this.isPM() && (t += 12), t
      },
      setDate: function(e) {
        this.params.currentDate = e, this.initDates()
      },
      setMinDate: function(e) {
        this.params.minDate = e, this.initDates()
      },
      setMaxDate: function(e) {
        this.params.maxDate = e, this.initDates()
      },
      destroy: function() {
        this._detachEvents(), this.$dtpElement.remove()
      },
      show: function() {
        this.$dtpElement.removeClass("hidden"), this._attachEvent(e(window), "keydown", this._onKeydown.bind(this)), this._centerBox(), this.$element.trigger("open"), !0 === this.params.monthPicker && this._hideCalendar()
      },
      hide: function() {
        e(window).off("keydown", null, null, this._onKeydown.bind(this)), this.$dtpElement.addClass("hidden"), this.$element.trigger("close")
      },
      _centerBox: function() {
        var e = (this.$dtpElement.height() - this.$dtpElement.find(".dtp-content").height()) / 2;
        this.$dtpElement.find(".dtp-content").css("marginLeft", -this.$dtpElement.find(".dtp-content").width() / 2 + "px"), this.$dtpElement.find(".dtp-content").css("top", e + "px")
      },
      enableDays: function() {
        var t = this.params.enableDays;
        t && e(".dtp-picker-days tbody tr td").each(function() {
          e.inArray(e(this).index(), t) >= 0 || e(this).find("a").css({
            background: "#e3e3e3",
            cursor: "no-drop",
            opacity: "0.5"
          }).off("click")
        })
      }
    }
  }(jQuery, moment)
}, function(e, t, n) {
  var r, i;
  n(142), r = [n(2)], void 0 === (i = function(e) {
    return function() {
      var t, n, r, i = 0,
        a = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning"
        },
        s = {
          clear: function(n, r) {
            var i = c();
            t || o(i), u(n, i, r) || function(n) {
              for (var r = t.children(), i = r.length - 1; i >= 0; i--) u(e(r[i]), n)
            }(i)
          },
          remove: function(n) {
            var r = c();
            t || o(r), n && 0 === e(":focus", n).length ? h(n) : t.children().length && t.remove()
          },
          error: function(e, t, n) {
            return d({
              type: a.error,
              iconClass: c().iconClasses.error,
              message: e,
              optionsOverride: n,
              title: t
            })
          },
          getContainer: o,
          info: function(e, t, n) {
            return d({
              type: a.info,
              iconClass: c().iconClasses.info,
              message: e,
              optionsOverride: n,
              title: t
            })
          },
          options: {},
          subscribe: function(e) {
            n = e
          },
          success: function(e, t, n) {
            return d({
              type: a.success,
              iconClass: c().iconClasses.success,
              message: e,
              optionsOverride: n,
              title: t
            })
          },
          version: "2.1.4",
          warning: function(e, t, n) {
            return d({
              type: a.warning,
              iconClass: c().iconClasses.warning,
              message: e,
              optionsOverride: n,
              title: t
            })
          }
        };
      return s;

      function o(n, r) {
        return n || (n = c()), (t = e("#" + n.containerId)).length ? t : (r && (t = function(n) {
          return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass)).appendTo(e(n.target)), t
        }(n)), t)
      }

      function u(t, n, r) {
        var i = !(!r || !r.force) && r.force;
        return !(!t || !i && 0 !== e(":focus", t).length || (t[n.hideMethod]({
          duration: n.hideDuration,
          easing: n.hideEasing,
          complete: function() {
            h(t)
          }
        }), 0))
      }

      function l(e) {
        n && n(e)
      }

      function d(n) {
        var a = c(),
          s = n.iconClass || a.iconClass;
        if (void 0 !== n.optionsOverride && (a = e.extend(a, n.optionsOverride), s = n.optionsOverride.iconClass || s), ! function(e, t) {
            if (e.preventDuplicates) {
              if (t.message === r) return !0;
              r = t.message
            }
            return !1
          }(a, n)) {
          i++, t = o(a, !0);
          var u = null,
            d = e("<div/>"),
            m = e("<div/>"),
            f = e("<div/>"),
            _ = e("<div/>"),
            p = e(a.closeHtml),
            y = {
              intervalId: null,
              hideEta: null,
              maxHideTime: null
            },
            g = {
              toastId: i,
              state: "visible",
              startTime: new Date,
              options: a,
              map: n
            };
          return n.iconClass && d.addClass(a.toastClass).addClass(s),
            function() {
              if (n.title) {
                var e = n.title;
                a.escapeHtml && (e = v(n.title)), m.append(e).addClass(a.titleClass), d.append(m)
              }
            }(),
            function() {
              if (n.message) {
                var e = n.message;
                a.escapeHtml && (e = v(n.message)), f.append(e).addClass(a.messageClass), d.append(f)
              }
            }(), a.closeButton && (p.addClass(a.closeClass).attr("role", "button"), d.prepend(p)), a.progressBar && (_.addClass(a.progressClass), d.prepend(_)), a.rtl && d.addClass("rtl"), a.newestOnTop ? t.prepend(d) : t.append(d),
            function() {
              var e = "";
              switch (n.iconClass) {
                case "toast-success":
                case "toast-info":
                  e = "polite";
                  break;
                default:
                  e = "assertive"
              }
              d.attr("aria-live", e)
            }(), d.hide(), d[a.showMethod]({
              duration: a.showDuration,
              easing: a.showEasing,
              complete: a.onShown
            }), a.timeOut > 0 && (u = setTimeout(M, a.timeOut), y.maxHideTime = parseFloat(a.timeOut), y.hideEta = (new Date).getTime() + y.maxHideTime, a.progressBar && (y.intervalId = setInterval(b, 10))), a.closeOnHover && d.hover(k, L), !a.onclick && a.tapToDismiss && d.click(M), a.closeButton && p && p.click(function(e) {
              e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), a.onCloseClick && a.onCloseClick(e), M(!0)
            }), a.onclick && d.click(function(e) {
              a.onclick(e), M()
            }), l(g), a.debug && console && console.log(g), d
        }

        function v(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function M(t) {
          var n = t && !1 !== a.closeMethod ? a.closeMethod : a.hideMethod,
            r = t && !1 !== a.closeDuration ? a.closeDuration : a.hideDuration,
            i = t && !1 !== a.closeEasing ? a.closeEasing : a.hideEasing;
          if (!e(":focus", d).length || t) return clearTimeout(y.intervalId), d[n]({
            duration: r,
            easing: i,
            complete: function() {
              h(d), clearTimeout(u), a.onHidden && "hidden" !== g.state && a.onHidden(), g.state = "hidden", g.endTime = new Date, l(g)
            }
          })
        }

        function L() {
          (a.timeOut > 0 || a.extendedTimeOut > 0) && (u = setTimeout(M, a.extendedTimeOut), y.maxHideTime = parseFloat(a.extendedTimeOut), y.hideEta = (new Date).getTime() + y.maxHideTime)
        }

        function k() {
          clearTimeout(u), y.hideEta = 0, d.stop(!0, !0)[a.showMethod]({
            duration: a.showDuration,
            easing: a.showEasing
          })
        }

        function b() {
          var e = (y.hideEta - (new Date).getTime()) / y.maxHideTime * 100;
          _.width(e + "%")
        }
      }

      function c() {
        return e.extend({}, {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning"
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1
        }, s.options)
      }

      function h(e) {
        t || (t = o()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), r = void 0))
      }
    }()
  }.apply(t, r)) || (e.exports = i)
}, function(e, t) {
  e.exports = function() {
    throw new Error("define cannot be used indirect")
  }
}, function(e, t, n) {
  (function(t) {
    var n;
    "object" == typeof navigator && (n = function() {
      "use strict";
      var e = function(e) {
          return null != e ? e.constructor : null
        },
        n = function(e, t) {
          return Boolean(e && t && e instanceof t)
        },
        r = function(e) {
          return null == e
        },
        i = function(t) {
          return e(t) === Object
        },
        a = function(t) {
          return e(t) === String
        },
        s = function(e) {
          return Array.isArray(e)
        },
        o = function(e) {
          return n(e, NodeList)
        },
        u = function(e) {
          return r(e) || (a(e) || s(e) || o(e)) && !e.length || i(e) && !Object.keys(e).length
        },
        l = {
          nullOrUndefined: r,
          object: i,
          number: function(t) {
            return e(t) === Number && !Number.isNaN(t)
          },
          string: a,
          boolean: function(t) {
            return e(t) === Boolean
          },
          function: function(t) {
            return e(t) === Function
          },
          array: s,
          weakMap: function(e) {
            return n(e, WeakMap)
          },
          nodeList: o,
          element: function(e) {
            return n(e, Element)
          },
          textNode: function(t) {
            return e(t) === Text
          },
          event: function(e) {
            return n(e, Event)
          },
          keyboardEvent: function(e) {
            return n(e, KeyboardEvent)
          },
          cue: function(e) {
            return n(e, window.TextTrackCue) || n(e, window.VTTCue)
          },
          track: function(e) {
            return n(e, TextTrack) || !r(e) && a(e.kind)
          },
          url: function(e) {
            if (n(e, window.URL)) return !0;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
            try {
              return !u(new URL(t).hostname)
            } catch (e) {
              return !1
            }
          },
          empty: u
        },
        d = function() {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function() {
                return e = !0, null
              }
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
          } catch (e) {}
          return e
        }();

      function c(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = this,
          a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !l.empty(t) && l.function(n)) {
          var o = t.split(" "),
            u = s;
          d && (u = {
            passive: a,
            capture: s
          }), o.forEach(function(t) {
            i && i.eventListeners && r && i.eventListeners.push({
              element: e,
              type: t,
              callback: n,
              options: u
            }), e[r ? "addEventListener" : "removeEventListener"](t, n, u)
          })
        }
      }

      function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments[2],
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        c.call(this, e, t, n, !0, r, i)
      }

      function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments[2],
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        c.call(this, e, t, n, !1, r, i)
      }

      function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments[2],
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        c.call(this, e, t, function a() {
          m(e, t, a, r, i);
          for (var s = arguments.length, o = Array(s), u = 0; u < s; u++) o[u] = arguments[u];
          n.apply(this, o)
        }, !0, r, i)
      }

      function _(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (l.element(e) && !l.empty(t)) {
          var i = new CustomEvent(t, {
            bubbles: n,
            detail: Object.assign({}, r, {
              plyr: this
            })
          });
          e.dispatchEvent(i)
        }
      }
      var p = function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        y = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        g = function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        },
        v = function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              a = void 0;
            try {
              for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
            } catch (e) {
              i = !0, a = e
            } finally {
              try {
                !r && o.return && o.return()
              } finally {
                if (i) throw a
              }
            }
            return n
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

      function M(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach(function(e, n) {
          var r = n > 0 ? t.cloneNode(!0) : t,
            i = e.parentNode,
            a = e.nextSibling;
          r.appendChild(e), a ? i.insertBefore(r, a) : i.appendChild(r)
        })
      }

      function L(e, t) {
        l.element(e) && !l.empty(t) && Object.entries(t).filter(function(e) {
          var t = v(e, 2)[1];
          return !l.nullOrUndefined(t)
        }).forEach(function(t) {
          var n = v(t, 2),
            r = n[0],
            i = n[1];
          return e.setAttribute(r, i)
        })
      }

      function k(e, t, n) {
        var r = document.createElement(e);
        return l.object(t) && L(r, t), l.string(n) && (r.innerText = n), r
      }

      function b(e, t, n, r) {
        l.element(t) && t.appendChild(k(e, n, r))
      }

      function Y(e) {
        l.nodeList(e) || l.array(e) ? Array.from(e).forEach(Y) : l.element(e) && l.element(e.parentNode) && e.parentNode.removeChild(e)
      }

      function w(e) {
        if (l.element(e))
          for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
      }

      function D(e, t) {
        return l.element(t) && l.element(t.parentNode) && l.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
      }

      function T(e, t) {
        if (!l.string(e) || l.empty(e)) return {};
        var n = {},
          r = t;
        return e.split(",").forEach(function(e) {
          var t = e.trim(),
            i = t.replace(".", ""),
            a = t.replace(/[[\]]/g, "").split("="),
            s = a[0],
            o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              l.object(r) && l.string(r.class) && (r.class += " " + i), n.class = i;
              break;
            case "#":
              n.id = t.replace("#", "");
              break;
            case "[":
              n[s] = o
          }
        }), n
      }

      function x(e, t) {
        if (l.element(e)) {
          var n = t;
          l.boolean(n) || (n = !e.hidden), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
        }
      }

      function S(e, t, n) {
        if (l.nodeList(e)) return Array.from(e).map(function(e) {
          return S(e, t, n)
        });
        if (l.element(e)) {
          var r = "toggle";
          return void 0 !== n && (r = n ? "add" : "remove"), e.classList[r](t), e.classList.contains(t)
        }
        return !1
      }

      function j(e, t) {
        return l.element(e) && e.classList.contains(t)
      }

      function H(e, t) {
        var n = {
          Element: Element
        };
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
          return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
      }

      function E(e) {
        return this.elements.container.querySelectorAll(e)
      }

      function A(e) {
        return this.elements.container.querySelector(e)
      }

      function C() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.element(e) && (e.focus(), t && S(e, this.config.classNames.tabFocus))
      }
      var O, P, W, N = (O = document.createElement("span"), P = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      }, W = Object.keys(P).find(function(e) {
        return void 0 !== O.style[e]
      }), !!l.string(W) && P[W]);

      function F(e) {
        setTimeout(function() {
          try {
            x(e, !0), e.offsetHeight, x(e, !1)
          } catch (e) {}
        }, 0)
      }
      var I, R = {
          isIE: !!document.documentMode,
          isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
          isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
          isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        },
        z = {
          "audio/ogg": "vorbis",
          "audio/wav": "1",
          "video/webm": "vp8, vorbis",
          "video/mp4": "avc1.42E01E, mp4a.40.2",
          "video/ogg": "theora"
        },
        $ = {
          audio: "canPlayType" in document.createElement("audio"),
          video: "canPlayType" in document.createElement("video"),
          check: function(e, t, n) {
            var r = R.isIPhone && n && $.playsinline,
              i = $[e] || "html5" !== t;
            return {
              api: i,
              ui: i && $.rangeInput && ("video" !== e || !R.isIPhone || r)
            }
          },
          pip: !R.isIPhone && l.function(k("video").webkitSetPresentationMode),
          airplay: l.function(window.WebKitPlaybackTargetAvailabilityEvent),
          playsinline: "playsInline" in document.createElement("video"),
          mime: function(e) {
            var t = e.split("/"),
              n = v(t, 1)[0];
            if (!this.isHTML5 || n !== this.type) return !1;
            var r = void 0;
            e && e.includes("codecs=") ? r = e : "audio/mpeg" === e ? r = "audio/mpeg;" : e in z && (r = e + '; codecs="' + z[e] + '"');
            try {
              return Boolean(r && this.media.canPlayType(r).replace(/no/, ""))
            } catch (e) {
              return !1
            }
          },
          textTracks: "textTracks" in document.createElement("video"),
          rangeInput: (I = document.createElement("input"), I.type = "range", "range" === I.type),
          touch: "ontouchstart" in document.documentElement,
          transitions: !1 !== N,
          reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        q = {
          getSources: function() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function(t) {
              return $.mime.call(e, t.getAttribute("type"))
            }) : []
          },
          getQualityOptions: function() {
            return q.getSources.call(this).map(function(e) {
              return Number(e.getAttribute("size"))
            }).filter(Boolean)
          },
          extend: function() {
            if (this.isHTML5) {
              var e = this;
              Object.defineProperty(e.media, "quality", {
                get: function() {
                  var t = q.getSources.call(e).find(function(t) {
                    return t.getAttribute("src") === e.source
                  });
                  return t && Number(t.getAttribute("size"))
                },
                set: function(t) {
                  var n = q.getSources.call(e).find(function(e) {
                    return Number(e.getAttribute("size")) === t
                  });
                  if (n) {
                    var r = e.media,
                      i = r.currentTime,
                      a = r.paused,
                      s = r.preload,
                      o = r.readyState;
                    e.media.src = n.getAttribute("src"), ("none" !== s || o) && (e.once("loadedmetadata", function() {
                      e.currentTime = i, a || e.play()
                    }), e.media.load()), _.call(e, e.media, "qualitychange", !1, {
                      quality: t
                    }), e.storage.set({
                      quality: t
                    })
                  }
                }
              })
            }
          },
          cancelRequests: function() {
            this.isHTML5 && (Y(q.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
          }
        };

      function B(e) {
        return l.array(e) ? e.filter(function(t, n) {
          return e.indexOf(t) === n
        }) : e
      }

      function U(e, t) {
        return t.split(".").reduce(function(e, t) {
          return e && e[t]
        }, e)
      }

      function V() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var i = n.shift();
        return l.object(i) ? (Object.keys(i).forEach(function(t) {
          l.object(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, g({}, t, {})), V(e[t], i[t])) : Object.assign(e, g({}, t, i[t]))
        }), V.apply(void 0, [e].concat(n))) : e
      }

      function J(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return l.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function(e, t) {
          return n[t].toString()
        })
      }

      function G() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
      }

      function K() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        })
      }

      function X(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
      }
      var Z = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (l.empty(e) || l.empty(t)) return "";
          var n = U(t.i18n, e);
          if (l.empty(n)) return "";
          var r = {
            "{seektime}": t.seekTime,
            "{title}": t.title
          };
          return Object.entries(r).forEach(function(e) {
            var t = v(e, 2),
              r = t[0],
              i = t[1];
            n = G(n, r, i)
          }), n
        },
        Q = function() {
          function e(t) {
            p(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
          }
          return y(e, [{
            key: "get",
            value: function(t) {
              if (!e.supported || !this.enabled) return null;
              var n = window.localStorage.getItem(this.key);
              if (l.empty(n)) return null;
              var r = JSON.parse(n);
              return l.string(t) && t.length ? r[t] : r
            }
          }, {
            key: "set",
            value: function(t) {
              if (e.supported && this.enabled && l.object(t)) {
                var n = this.get();
                l.empty(n) && (n = {}), V(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
              }
            }
          }], [{
            key: "supported",
            get: function() {
              try {
                return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
              } catch (e) {
                return !1
              }
            }
          }]), e
        }();

      function ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise(function(n, r) {
          try {
            var i = new XMLHttpRequest;
            if (!("withCredentials" in i)) return;
            i.addEventListener("load", function() {
              if ("text" === t) try {
                n(JSON.parse(i.responseText))
              } catch (e) {
                n(i.responseText)
              } else n(i.response)
            }), i.addEventListener("error", function() {
              throw new Error(i.status)
            }), i.open("GET", e, !0), i.responseType = t, i.send()
          } catch (e) {
            r(e)
          }
        })
      }

      function te(e, t) {
        if (l.string(e)) {
          var n = l.string(t),
            r = function() {
              return null !== document.getElementById(t)
            },
            i = function(e, t) {
              e.innerHTML = t, n && r() || document.body.insertAdjacentElement("afterbegin", e)
            };
          if (!n || !r()) {
            var a = Q.supported,
              s = document.createElement("div");
            if (s.setAttribute("hidden", ""), n && s.setAttribute("id", t), a) {
              var o = window.localStorage.getItem("cache-" + t);
              if (null !== o) {
                var u = JSON.parse(o);
                i(s, u.content)
              }
            }
            ee(e).then(function(e) {
              l.empty(e) || (a && window.localStorage.setItem("cache-" + t, JSON.stringify({
                content: e
              })), i(s, e))
            }).catch(function() {})
          }
        }
      }
      var ne = function(e) {
          return parseInt(e / 60 / 60 % 60, 10)
        },
        re = function(e) {
          return parseInt(e / 60 % 60, 10)
        },
        ie = function(e) {
          return parseInt(e % 60, 10)
        };

      function ae() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!l.number(e)) return ae(null, t, n);
        var r = function(e) {
            return ("0" + e).slice(-2)
          },
          i = ne(e),
          a = re(e),
          s = ie(e);
        return t || i > 0 ? i += ":" : i = "", (n && e > 0 ? "-" : "") + i + r(a) + ":" + r(s)
      }
      var se = {
        getIconUrl: function() {
          var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || R.isIE && !window.svg4everybody;
          return {
            url: this.config.iconUrl,
            cors: e
          }
        },
        findElements: function() {
          try {
            return this.elements.controls = A.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
              play: E.call(this, this.config.selectors.buttons.play),
              pause: A.call(this, this.config.selectors.buttons.pause),
              restart: A.call(this, this.config.selectors.buttons.restart),
              rewind: A.call(this, this.config.selectors.buttons.rewind),
              fastForward: A.call(this, this.config.selectors.buttons.fastForward),
              mute: A.call(this, this.config.selectors.buttons.mute),
              pip: A.call(this, this.config.selectors.buttons.pip),
              airplay: A.call(this, this.config.selectors.buttons.airplay),
              settings: A.call(this, this.config.selectors.buttons.settings),
              captions: A.call(this, this.config.selectors.buttons.captions),
              fullscreen: A.call(this, this.config.selectors.buttons.fullscreen)
            }, this.elements.progress = A.call(this, this.config.selectors.progress), this.elements.inputs = {
              seek: A.call(this, this.config.selectors.inputs.seek),
              volume: A.call(this, this.config.selectors.inputs.volume)
            }, this.elements.display = {
              buffer: A.call(this, this.config.selectors.display.buffer),
              currentTime: A.call(this, this.config.selectors.display.currentTime),
              duration: A.call(this, this.config.selectors.display.duration)
            }, l.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
          } catch (e) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
          }
        },
        createIcon: function(e, t) {
          var n = se.getIconUrl.call(this),
            r = (n.cors ? "" : n.url) + "#" + this.config.iconPrefix,
            i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          L(i, V(t, {
            role: "presentation",
            focusable: "false"
          }));
          var a = document.createElementNS("http://www.w3.org/2000/svg", "use"),
            s = r + "-" + e;
          return "href" in a ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s) : a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), i.appendChild(a), i
        },
        createLabel: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              pip: "PIP",
              airplay: "AirPlay"
            }[e] || Z(e, this.config);
          return k("span", Object.assign({}, t, {
            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
          }), n)
        },
        createBadge: function(e) {
          if (l.empty(e)) return null;
          var t = k("span", {
            class: this.config.classNames.menu.value
          });
          return t.appendChild(k("span", {
            class: this.config.classNames.menu.badge
          }, e)), t
        },
        createButton: function(e, t) {
          var n = k("button"),
            r = Object.assign({}, t),
            i = function() {
              var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
              return (e = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                return G(e = K(e = G(e = G(e, "-", " "), "_", " ")), " ", "")
              }(e)).charAt(0).toLowerCase() + e.slice(1)
            }(e),
            a = !1,
            s = void 0,
            o = void 0,
            u = void 0,
            d = void 0;
          switch ("type" in r || (r.type = "button"), "class" in r ? r.class.includes(this.config.classNames.control) || (r.class += " " + this.config.classNames.control) : r.class = this.config.classNames.control, e) {
            case "play":
              a = !0, s = "play", u = "pause", o = "play", d = "pause";
              break;
            case "mute":
              a = !0, s = "mute", u = "unmute", o = "volume", d = "muted";
              break;
            case "captions":
              a = !0, s = "enableCaptions", u = "disableCaptions", o = "captions-off", d = "captions-on";
              break;
            case "fullscreen":
              a = !0, s = "enterFullscreen", u = "exitFullscreen", o = "enter-fullscreen", d = "exit-fullscreen";
              break;
            case "play-large":
              r.class += " " + this.config.classNames.control + "--overlaid", i = "play", s = "play", o = "play";
              break;
            default:
              s = i, o = e
          }
          return a ? (n.appendChild(se.createIcon.call(this, d, {
            class: "icon--pressed"
          })), n.appendChild(se.createIcon.call(this, o, {
            class: "icon--not-pressed"
          })), n.appendChild(se.createLabel.call(this, u, {
            class: "label--pressed"
          })), n.appendChild(se.createLabel.call(this, s, {
            class: "label--not-pressed"
          }))) : (n.appendChild(se.createIcon.call(this, o)), n.appendChild(se.createLabel.call(this, s))), V(r, T(this.config.selectors.buttons[i], r)), L(n, r), "play" === i ? (l.array(this.elements.buttons[i]) || (this.elements.buttons[i] = []), this.elements.buttons[i].push(n)) : this.elements.buttons[i] = n, n
        },
        createRange: function(e, t) {
          var n = k("input", V(T(this.config.selectors.inputs[e]), {
            type: "range",
            min: 0,
            max: 100,
            step: .01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-label": Z(e, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
          }, t));
          return this.elements.inputs[e] = n, se.updateRangeFill.call(this, n), n
        },
        createProgress: function(e, t) {
          var n = k("progress", V(T(this.config.selectors.display[e]), {
            min: 0,
            max: 100,
            value: 0,
            role: "presentation",
            "aria-hidden": !0
          }, t));
          if ("volume" !== e) {
            n.appendChild(k("span", null, "0"));
            var r = {
                played: "played",
                buffer: "buffered"
              }[e],
              i = r ? Z(r, this.config) : "";
            n.innerText = "% " + i.toLowerCase()
          }
          return this.elements.display[e] = n, n
        },
        createTime: function(e) {
          var t = T(this.config.selectors.display[e]),
            n = k("div", V(t, {
              class: (this.config.classNames.display.time + " " + (t.class ? t.class : "")).trim(),
              "aria-label": Z(e, this.config)
            }), "00:00");
          return this.elements.display[e] = n, n
        },
        bindMenuItemShortcuts: function(e, t) {
          var n = this;
          h(e, "keydown keyup", function(r) {
            if ([32, 38, 39, 40].includes(r.which) && (r.preventDefault(), r.stopPropagation(), "keydown" !== r.type)) {
              var i = H(e, '[role="menuitemradio"]');
              if (!i && [32, 39].includes(r.which)) se.showMenuPanel.call(n, t, !0);
              else {
                var a = void 0;
                32 !== r.which && (40 === r.which || i && 39 === r.which ? (a = e.nextElementSibling, l.element(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, l.element(a) || (a = e.parentNode.lastElementChild)), C.call(n, a, !0))
              }
            }
          }, !1), h(e, "keyup", function(e) {
            13 === e.which && se.focusFirstMenuItem.call(n, null, !0)
          })
        },
        createMenuItem: function(e) {
          var t = this,
            n = e.value,
            r = e.list,
            i = e.type,
            a = e.title,
            s = e.badge,
            o = void 0 === s ? null : s,
            u = e.checked,
            d = void 0 !== u && u,
            c = T(this.config.selectors.inputs[i]),
            h = k("button", V(c, {
              type: "button",
              role: "menuitemradio",
              class: (this.config.classNames.control + " " + (c.class ? c.class : "")).trim(),
              "aria-checked": d,
              value: n
            })),
            m = k("span");
          m.innerHTML = a, l.element(o) && m.appendChild(o), h.appendChild(m), Object.defineProperty(h, "checked", {
            enumerable: !0,
            get: function() {
              return "true" === h.getAttribute("aria-checked")
            },
            set: function(e) {
              e && Array.from(h.parentNode.children).filter(function(e) {
                return H(e, '[role="menuitemradio"]')
              }).forEach(function(e) {
                return e.setAttribute("aria-checked", "false")
              }), h.setAttribute("aria-checked", e ? "true" : "false")
            }
          }), this.listeners.bind(h, "click keyup", function(e) {
            if (!l.keyboardEvent(e) || 32 === e.which) {
              switch (e.preventDefault(), e.stopPropagation(), h.checked = !0, i) {
                case "language":
                  t.currentTrack = Number(n);
                  break;
                case "quality":
                  t.quality = n;
                  break;
                case "speed":
                  t.speed = parseFloat(n)
              }
              se.showMenuPanel.call(t, "home", l.keyboardEvent(e))
            }
          }, i, !1), se.bindMenuItemShortcuts.call(this, h, i), r.appendChild(h)
        },
        formatTime: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return l.number(e) ? ae(e, ne(this.duration) > 0, t) : e
        },
        updateTimeDisplay: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          l.element(e) && l.number(t) && (e.innerText = se.formatTime(t, n))
        },
        updateVolume: function() {
          this.supported.ui && (l.element(this.elements.inputs.volume) && se.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), l.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          l.element(e) && (e.value = t, se.updateRangeFill.call(this, e))
        },
        updateProgress: function(e) {
          var t = this;
          if (this.supported.ui && l.event(e)) {
            var n, r, i = 0;
            if (e) switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                n = this.currentTime, r = this.duration, i = 0 === n || 0 === r || Number.isNaN(n) || Number.isNaN(r) ? 0 : (n / r * 100).toFixed(2), "timeupdate" === e.type && se.setRange.call(this, this.elements.inputs.seek, i);
                break;
              case "playing":
              case "progress":
                ! function(e, n) {
                  var r = l.number(n) ? n : 0,
                    i = l.element(e) ? e : t.elements.display.buffer;
                  if (l.element(i)) {
                    i.value = r;
                    var a = i.getElementsByTagName("span")[0];
                    l.element(a) && (a.childNodes[0].nodeValue = r)
                  }
                }(this.elements.display.buffer, 100 * this.buffered)
            }
          }
        },
        updateRangeFill: function(e) {
          var t = l.event(e) ? e.target : e;
          if (l.element(t) && "range" === t.getAttribute("type")) {
            if (H(t, this.config.selectors.inputs.seek)) {
              t.setAttribute("aria-valuenow", this.currentTime);
              var n = se.formatTime(this.currentTime),
                r = se.formatTime(this.duration),
                i = Z("seekLabel", this.config);
              t.setAttribute("aria-valuetext", i.replace("{currentTime}", n).replace("{duration}", r))
            } else if (H(t, this.config.selectors.inputs.volume)) {
              var a = 100 * t.value;
              t.setAttribute("aria-valuenow", a), t.setAttribute("aria-valuetext", a.toFixed(1) + "%")
            } else t.setAttribute("aria-valuenow", t.value);
            R.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
          }
        },
        updateSeekTooltip: function(e) {
          var t = this;
          if (this.config.tooltips.seek && l.element(this.elements.inputs.seek) && l.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
            var n = 0,
              r = this.elements.progress.getBoundingClientRect(),
              i = this.config.classNames.tooltip + "--visible",
              a = function(e) {
                S(t.elements.display.seekTooltip, i, e)
              };
            if (this.touch) a(!1);
            else {
              if (l.event(e)) n = 100 / r.width * (e.pageX - r.left);
              else {
                if (!j(this.elements.display.seekTooltip, i)) return;
                n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
              }
              n < 0 ? n = 0 : n > 100 && (n = 100), se.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = n + "%", l.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && a("mouseenter" === e.type)
            }
          }
        },
        timeUpdate: function(e) {
          var t = !l.element(this.elements.display.duration) && this.config.invertTime;
          se.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || se.updateProgress.call(this, e)
        },
        durationUpdate: function() {
          if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
            if (this.duration >= Math.pow(2, 32)) return x(this.elements.display.currentTime, !0), void x(this.elements.progress, !0);
            l.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            var e = l.element(this.elements.display.duration);
            !e && this.config.displayDuration && this.paused && se.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && se.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), se.updateSeekTooltip.call(this)
          }
        },
        toggleMenuButton: function(e, t) {
          x(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function(e, t, n) {
          var r = this.elements.settings.panels[e],
            i = null,
            a = t;
          if ("captions" === e) i = this.currentTrack;
          else {
            if (i = l.empty(n) ? this[e] : n, l.empty(i) && (i = this.config[e].default), !l.empty(this.options[e]) && !this.options[e].includes(i)) return void this.debug.warn("Unsupported value of '" + i + "' for " + e);
            if (!this.config[e].options.includes(i)) return void this.debug.warn("Disabled value of '" + i + "' for " + e)
          }
          if (l.element(a) || (a = r && r.querySelector('[role="menu"]')), l.element(a)) {
            this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = se.getLabel.call(this, e, i);
            var s = a && a.querySelector('[value="' + i + '"]');
            l.element(s) && (s.checked = !0)
          }
        },
        getLabel: function(e, t) {
          switch (e) {
            case "speed":
              return 1 === t ? Z("normal", this.config) : t + "&times;";
            case "quality":
              if (l.number(t)) {
                var n = Z("qualityLabel." + t, this.config);
                return n.length ? n : t + "p"
              }
              return K(t);
            case "captions":
              return le.getLabel.call(this);
            default:
              return null
          }
        },
        setQualityMenu: function(e) {
          var t = this;
          if (l.element(this.elements.settings.panels.quality)) {
            var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            l.array(e) && (this.options.quality = B(e).filter(function(e) {
              return t.config.quality.options.includes(e)
            }));
            var r = !l.empty(this.options.quality) && this.options.quality.length > 1;
            se.toggleMenuButton.call(this, "quality", r), w(n), se.checkMenu.call(this), r && (this.options.quality.sort(function(e, n) {
              var r = t.config.quality.options;
              return r.indexOf(e) > r.indexOf(n) ? 1 : -1
            }).forEach(function(e) {
              se.createMenuItem.call(t, {
                value: e,
                list: n,
                type: "quality",
                title: se.getLabel.call(t, "quality", e),
                badge: function(e) {
                  var n = Z("qualityBadge." + e, t.config);
                  return n.length ? se.createBadge.call(t, n) : null
                }(e)
              })
            }), se.updateSetting.call(this, "quality", n))
          }
        },
        setCaptionsMenu: function() {
          var e = this;
          if (l.element(this.elements.settings.panels.captions)) {
            var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
              n = le.getTracks.call(this),
              r = Boolean(n.length);
            if (se.toggleMenuButton.call(this, "captions", r), w(t), se.checkMenu.call(this), r) {
              var i = n.map(function(n, r) {
                return {
                  value: r,
                  checked: e.captions.toggled && e.currentTrack === r,
                  title: le.getLabel.call(e, n),
                  badge: n.language && se.createBadge.call(e, n.language.toUpperCase()),
                  list: t,
                  type: "language"
                }
              });
              i.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: Z("disabled", this.config),
                list: t,
                type: "language"
              }), i.forEach(se.createMenuItem.bind(this)), se.updateSetting.call(this, "captions", t)
            }
          }
        },
        setSpeedMenu: function(e) {
          var t = this;
          if (l.element(this.elements.settings.panels.speed)) {
            var n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            l.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function(e) {
              return t.config.speed.options.includes(e)
            });
            var r = !l.empty(this.options.speed) && this.options.speed.length > 1;
            se.toggleMenuButton.call(this, "speed", r), w(n), se.checkMenu.call(this), r && (this.options.speed.forEach(function(e) {
              se.createMenuItem.call(t, {
                value: e,
                list: n,
                type: "speed",
                title: se.getLabel.call(t, "speed", e)
              })
            }), se.updateSetting.call(this, "speed", n))
          }
        },
        checkMenu: function() {
          var e = this.elements.settings.buttons,
            t = !l.empty(e) && Object.values(e).some(function(e) {
              return !e.hidden
            });
          x(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.elements.settings.popup.hidden) {
            var n = e;
            l.element(n) || (n = Object.values(this.elements.settings.panels).find(function(e) {
              return !e.hidden
            }));
            var r = n.querySelector('[role^="menuitem"]');
            C.call(this, r, t)
          }
        },
        toggleMenu: function(e) {
          var t = this.elements.settings.popup,
            n = this.elements.buttons.settings;
          if (l.element(t) && l.element(n)) {
            var r = t.hidden,
              i = r;
            if (l.boolean(e)) i = e;
            else if (l.keyboardEvent(e) && 27 === e.which) i = !1;
            else if (l.event(e)) {
              var a = t.contains(e.target);
              if (a || !a && e.target !== n && i) return
            }
            n.setAttribute("aria-expanded", i), x(t, !i), S(this.elements.container, this.config.classNames.menu.open, i), i && l.keyboardEvent(e) ? se.focusFirstMenuItem.call(this, null, !0) : i || r || C.call(this, n, l.keyboardEvent(e))
          }
        },
        getMenuSize: function(e) {
          var t = e.cloneNode(!0);
          t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
          var n = t.scrollWidth,
            r = t.scrollHeight;
          return Y(t), {
            width: n,
            height: r
          }
        },
        showMenuPanel: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = document.getElementById("plyr-settings-" + this.id + "-" + t);
          if (l.element(r)) {
            var i = r.parentNode,
              a = Array.from(i.children).find(function(e) {
                return !e.hidden
              });
            if ($.transitions && !$.reducedMotion) {
              i.style.width = a.scrollWidth + "px", i.style.height = a.scrollHeight + "px";
              var s = se.getMenuSize.call(this, r);
              h.call(this, i, N, function t(n) {
                n.target === i && ["width", "height"].includes(n.propertyName) && (i.style.width = "", i.style.height = "", m.call(e, i, N, t))
              }), i.style.width = s.width + "px", i.style.height = s.height + "px"
            }
            x(a, !0), x(r, !1), se.focusFirstMenuItem.call(this, r, n)
          }
        },
        create: function(e) {
          var t = this,
            n = k("div", T(this.config.selectors.controls.wrapper));
          if (this.config.controls.includes("restart") && n.appendChild(se.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(se.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(se.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(se.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
            var r = k("div", T(this.config.selectors.progress));
            if (r.appendChild(se.createRange.call(this, "seek", {
                id: "plyr-seek-" + e.id
              })), r.appendChild(se.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
              var i = k("span", {
                class: this.config.classNames.tooltip
              }, "00:00");
              r.appendChild(i), this.elements.display.seekTooltip = i
            }
            this.elements.progress = r, n.appendChild(this.elements.progress)
          }
          if (this.config.controls.includes("current-time") && n.appendChild(se.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(se.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
            var a = k("div", {
              class: "plyr__volume"
            });
            if (this.config.controls.includes("mute") && a.appendChild(se.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
              var s = {
                max: 1,
                step: .05,
                value: this.config.volume
              };
              a.appendChild(se.createRange.call(this, "volume", V(s, {
                id: "plyr-volume-" + e.id
              }))), this.elements.volume = a
            }
            n.appendChild(a)
          }
          if (this.config.controls.includes("captions") && n.appendChild(se.createButton.call(this, "captions")), this.config.controls.includes("settings") && !l.empty(this.config.settings)) {
            var o = k("div", {
              class: "plyr__menu",
              hidden: ""
            });
            o.appendChild(se.createButton.call(this, "settings", {
              "aria-haspopup": !0,
              "aria-controls": "plyr-settings-" + e.id,
              "aria-expanded": !1
            }));
            var u = k("div", {
                class: "plyr__menu__container",
                id: "plyr-settings-" + e.id,
                hidden: ""
              }),
              d = k("div"),
              c = k("div", {
                id: "plyr-settings-" + e.id + "-home"
              }),
              m = k("div", {
                role: "menu"
              });
            c.appendChild(m), d.appendChild(c), this.elements.settings.panels.home = c, this.config.settings.forEach(function(n) {
              var r = k("button", V(T(t.config.selectors.buttons.settings), {
                type: "button",
                class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                role: "menuitem",
                "aria-haspopup": !0,
                hidden: ""
              }));
              se.bindMenuItemShortcuts.call(t, r, n), h(r, "click", function() {
                se.showMenuPanel.call(t, n, !1)
              });
              var i = k("span", null, Z(n, t.config)),
                a = k("span", {
                  class: t.config.classNames.menu.value
                });
              a.innerHTML = e[n], i.appendChild(a), r.appendChild(i), m.appendChild(r);
              var s = k("div", {
                  id: "plyr-settings-" + e.id + "-" + n,
                  hidden: ""
                }),
                o = k("button", {
                  type: "button",
                  class: t.config.classNames.control + " " + t.config.classNames.control + "--back"
                });
              o.appendChild(k("span", {
                "aria-hidden": !0
              }, Z(n, t.config))), o.appendChild(k("span", {
                class: t.config.classNames.hidden
              }, Z("menuBack", t.config))), h(s, "keydown", function(e) {
                37 === e.which && (e.preventDefault(), e.stopPropagation(), se.showMenuPanel.call(t, "home", !0))
              }, !1), h(o, "click", function() {
                se.showMenuPanel.call(t, "home", !1)
              }), s.appendChild(o), s.appendChild(k("div", {
                role: "menu"
              })), d.appendChild(s), t.elements.settings.buttons[n] = r, t.elements.settings.panels[n] = s
            }), u.appendChild(d), o.appendChild(u), n.appendChild(o), this.elements.settings.popup = u, this.elements.settings.menu = o
          }
          return this.config.controls.includes("pip") && $.pip && n.appendChild(se.createButton.call(this, "pip")), this.config.controls.includes("airplay") && $.airplay && n.appendChild(se.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(se.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(se.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && se.setQualityMenu.call(this, q.getQualityOptions.call(this)), se.setSpeedMenu.call(this), n
        },
        inject: function() {
          var e = this;
          if (this.config.loadSprite) {
            var t = se.getIconUrl.call(this);
            t.cors && te(t.url, "sprite-plyr")
          }
          this.id = Math.floor(1e4 * Math.random());
          var n = null;
          this.elements.controls = null;
          var r = {
              id: this.id,
              seektime: this.config.seekTime,
              title: this.config.title
            },
            i = !0;
          l.function(this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), l.element(this.config.controls) || l.string(this.config.controls) ? n = this.config.controls : (n = se.create.call(this, {
            id: this.id,
            seektime: this.config.seekTime,
            speed: this.speed,
            quality: this.quality,
            captions: le.getLabel.call(this)
          }), i = !1);
          var a = function(e) {
            var t = e;
            return Object.entries(r).forEach(function(e) {
              var n = v(e, 2),
                r = n[0],
                i = n[1];
              t = G(t, "{" + r + "}", i)
            }), t
          };
          i && (l.string(this.config.controls) ? n = a(n) : l.element(n) && (n.innerHTML = a(n.innerHTML)));
          var s = void 0;
          if (l.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), l.element(s) || (s = this.elements.container), s[l.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), l.element(this.elements.controls) || se.findElements.call(this), !l.empty(this.elements.buttons)) {
            var o = function(t) {
              var n = e.config.classNames.controlPressed;
              Object.defineProperty(t, "pressed", {
                enumerable: !0,
                get: function() {
                  return j(t, n)
                },
                set: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  S(t, n, e)
                }
              })
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach(function(e) {
              l.array(e) || l.nodeList(e) ? Array.from(e).filter(Boolean).forEach(o) : o(e)
            })
          }
          if (window.navigator.userAgent.includes("Edge") && F(s), this.config.tooltips.controls) {
            var u = this.config,
              d = u.classNames,
              c = u.selectors,
              h = c.controls.wrapper + " " + c.labels + " ." + d.hidden,
              m = E.call(this, h);
            Array.from(m).forEach(function(t) {
              S(t, e.config.classNames.hidden, !1), S(t, e.config.classNames.tooltip, !0)
            })
          }
        }
      };

      function oe(e) {
        var t = e;
        if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
          var n = document.createElement("a");
          n.href = t, t = n.href
        }
        try {
          return new URL(t)
        } catch (e) {
          return null
        }
      }

      function ue(e) {
        var t = new URLSearchParams;
        return l.object(e) && Object.entries(e).forEach(function(e) {
          var n = v(e, 2),
            r = n[0],
            i = n[1];
          t.set(r, i)
        }), t
      }
      var le = {
          setup: function() {
            if (this.supported.ui)
              if (!this.isVideo || this.isYouTube || this.isHTML5 && !$.textTracks) l.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && se.setCaptionsMenu.call(this);
              else {
                var e, t;
                if (l.element(this.elements.captions) || (this.elements.captions = k("div", T(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, l.element(e) && l.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), R.isIE && window.URL) {
                  var n = this.media.querySelectorAll("track");
                  Array.from(n).forEach(function(e) {
                    var t = e.getAttribute("src"),
                      n = oe(t);
                    null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && ee(t, "blob").then(function(t) {
                      e.setAttribute("src", window.URL.createObjectURL(t))
                    }).catch(function() {
                      Y(e)
                    })
                  })
                }
                var r = B((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function(e) {
                    return e.split("-")[0]
                  })),
                  i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                "auto" === i && (i = v(r, 1)[0]);
                var a = this.storage.get("captions");
                if (l.boolean(a) || (a = this.config.captions.active), Object.assign(this.captions, {
                    toggled: !1,
                    active: a,
                    language: i,
                    languages: r
                  }), this.isHTML5) {
                  var s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                  h.call(this, this.media.textTracks, s, le.update.bind(this))
                }
                setTimeout(le.update.bind(this), 0)
              }
          },
          update: function() {
            var e = this,
              t = le.getTracks.call(this, !0),
              n = this.captions,
              r = n.active,
              i = n.language,
              a = n.meta,
              s = n.currentTrackNode,
              o = Boolean(t.find(function(e) {
                return e.language === i
              }));
            this.isHTML5 && this.isVideo && t.filter(function(e) {
              return !a.get(e)
            }).forEach(function(t) {
              e.debug.log("Track added", t), a.set(t, {
                default: "showing" === t.mode
              }), t.mode = "hidden", h.call(e, t, "cuechange", function() {
                return le.updateCues.call(e)
              })
            }), (o && this.language !== i || !t.includes(s)) && (le.setLanguage.call(this, i), le.toggle.call(this, r && o)), S(this.elements.container, this.config.classNames.captions.enabled, !l.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && se.setCaptionsMenu.call(this)
          },
          toggle: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.supported.ui) {
              var n = this.captions.toggled,
                r = this.config.classNames.captions.active,
                i = l.nullOrUndefined(e) ? !n : e;
              if (i !== n) {
                if (t || (this.captions.active = i, this.storage.set({
                    captions: i
                  })), !this.language && i && !t) {
                  var a = le.getTracks.call(this),
                    s = le.findTrack.call(this, [this.captions.language].concat(function(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                      }
                      return Array.from(e)
                    }(this.captions.languages)), !0);
                  return this.captions.language = s.language, void le.set.call(this, a.indexOf(s))
                }
                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = i), S(this.elements.container, r, i), this.captions.toggled = i, se.updateSetting.call(this, "captions"), _.call(this, this.media, i ? "captionsenabled" : "captionsdisabled")
              }
            }
          },
          set: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = le.getTracks.call(this);
            if (-1 !== e)
              if (l.number(e))
                if (e in n) {
                  if (this.captions.currentTrack !== e) {
                    this.captions.currentTrack = e;
                    var r = n[e],
                      i = (r || {}).language;
                    this.captions.currentTrackNode = r, se.updateSetting.call(this, "captions"), t || (this.captions.language = i, this.storage.set({
                      language: i
                    })), this.isVimeo && this.embed.enableTextTrack(i), _.call(this, this.media, "languagechange")
                  }
                  le.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && le.updateCues.call(this)
                } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
            else le.toggle.call(this, !1, t)
          },
          setLanguage: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (l.string(e)) {
              var n = e.toLowerCase();
              this.captions.language = n;
              var r = le.getTracks.call(this),
                i = le.findTrack.call(this, [n]);
              le.set.call(this, r.indexOf(i), t)
            } else this.debug.warn("Invalid language argument", e)
          },
          getTracks: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return Array.from((this.media || {}).textTracks || []).filter(function(n) {
              return !e.isHTML5 || t || e.captions.meta.has(n)
            }).filter(function(e) {
              return ["captions", "subtitles"].includes(e.kind)
            })
          },
          findTrack: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = le.getTracks.call(this),
              i = function(e) {
                return Number((t.captions.meta.get(e) || {}).default)
              },
              a = Array.from(r).sort(function(e, t) {
                return i(t) - i(e)
              }),
              s = void 0;
            return e.every(function(e) {
              return !(s = a.find(function(t) {
                return t.language === e
              }))
            }), s || (n ? a[0] : void 0)
          },
          getCurrentTrack: function() {
            return le.getTracks.call(this)[this.currentTrack]
          },
          getLabel: function(e) {
            var t = e;
            return !l.track(t) && $.textTracks && this.captions.toggled && (t = le.getCurrentTrack.call(this)), l.track(t) ? l.empty(t.label) ? l.empty(t.language) ? Z("enabled", this.config) : e.language.toUpperCase() : t.label : Z("disabled", this.config)
          },
          updateCues: function(e) {
            if (this.supported.ui)
              if (l.element(this.elements.captions))
                if (l.nullOrUndefined(e) || Array.isArray(e)) {
                  var t = e;
                  if (!t) {
                    var n = le.getCurrentTrack.call(this);
                    t = Array.from((n || {}).activeCues || []).map(function(e) {
                      return e.getCueAsHTML()
                    }).map(X)
                  }
                  var r = t.map(function(e) {
                    return e.trim()
                  }).join("\n");
                  if (r !== this.elements.captions.innerHTML) {
                    w(this.elements.captions);
                    var i = k("span", T(this.config.selectors.caption));
                    i.innerHTML = r, this.elements.captions.appendChild(i), _.call(this, this.media, "cuechange")
                  }
                } else this.debug.warn("updateCues: Invalid input", e);
            else this.debug.warn("No captions element to render to")
          }
        },
        de = {
          enabled: !0,
          title: "",
          debug: !1,
          autoplay: !1,
          autopause: !0,
          playsinline: !0,
          seekTime: 10,
          volume: 1,
          muted: !1,
          duration: null,
          displayDuration: !0,
          invertTime: !0,
          toggleInvert: !0,
          ratio: "16:9",
          clickToPlay: !0,
          hideControls: !0,
          resetOnEnd: !1,
          disableContextMenu: !0,
          loadSprite: !0,
          iconPrefix: "plyr",
          iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg",
          blankVideo: "https://cdn.plyr.io/static/blank.mp4",
          quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
          },
          loop: {
            active: !1
          },
          speed: {
            selected: 1,
            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
          },
          keyboard: {
            focused: !0,
            global: !1
          },
          tooltips: {
            controls: !1,
            seek: !0
          },
          captions: {
            active: !1,
            language: "auto",
            update: !1
          },
          fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
          },
          storage: {
            enabled: !0,
            key: "plyr"
          },
          controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
          settings: ["captions", "quality", "speed"],
          i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
              2160: "4K",
              1440: "HD",
              1080: "HD",
              720: "HD",
              576: "SD",
              480: "SD"
            }
          },
          urls: {
            vimeo: {
              sdk: "https://player.vimeo.com/api/player.js",
              iframe: "https://player.vimeo.com/video/{0}?{1}",
              api: "https://vimeo.com/api/v2/video/{0}.json"
            },
            youtube: {
              sdk: "https://www.youtube.com/iframe_api",
              api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
            },
            googleIMA: {
              sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
          },
          listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
          },
          events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
          selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
              container: null,
              wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
              play: '[data-plyr="play"]',
              pause: '[data-plyr="pause"]',
              restart: '[data-plyr="restart"]',
              rewind: '[data-plyr="rewind"]',
              fastForward: '[data-plyr="fast-forward"]',
              mute: '[data-plyr="mute"]',
              captions: '[data-plyr="captions"]',
              fullscreen: '[data-plyr="fullscreen"]',
              pip: '[data-plyr="pip"]',
              airplay: '[data-plyr="airplay"]',
              settings: '[data-plyr="settings"]',
              loop: '[data-plyr="loop"]'
            },
            inputs: {
              seek: '[data-plyr="seek"]',
              volume: '[data-plyr="volume"]',
              speed: '[data-plyr="speed"]',
              language: '[data-plyr="language"]',
              quality: '[data-plyr="quality"]'
            },
            display: {
              currentTime: ".plyr__time--current",
              duration: ".plyr__time--duration",
              buffer: ".plyr__progress__buffer",
              loop: ".plyr__progress__loop",
              volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption",
            menu: {
              quality: ".js-plyr__menu__list--quality"
            }
          },
          classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
              time: "plyr__time"
            },
            menu: {
              value: "plyr__menu__value",
              badge: "plyr__badge",
              open: "plyr--menu-open"
            },
            captions: {
              enabled: "plyr--captions-enabled",
              active: "plyr--captions-active"
            },
            fullscreen: {
              enabled: "plyr--fullscreen-enabled",
              fallback: "plyr--fullscreen-fallback"
            },
            pip: {
              supported: "plyr--pip-supported",
              active: "plyr--pip-active"
            },
            airplay: {
              supported: "plyr--airplay-supported",
              active: "plyr--airplay-active"
            },
            tabFocus: "plyr__tab-focus"
          },
          attributes: {
            embed: {
              provider: "data-plyr-provider",
              id: "data-plyr-embed-id"
            }
          },
          keys: {
            google: null
          },
          ads: {
            enabled: !1,
            publisherId: ""
          }
        },
        ce = {
          html5: "html5",
          youtube: "youtube",
          vimeo: "vimeo"
        },
        he = {
          audio: "audio",
          video: "video"
        },
        me = function() {},
        fe = function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            p(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
          }
          return y(e, [{
            key: "log",
            get: function() {
              return this.enabled ? Function.prototype.bind.call(console.log, console) : me
            }
          }, {
            key: "warn",
            get: function() {
              return this.enabled ? Function.prototype.bind.call(console.warn, console) : me
            }
          }, {
            key: "error",
            get: function() {
              return this.enabled ? Function.prototype.bind.call(console.error, console) : me
            }
          }]), e
        }();

      function _e() {
        if (this.enabled) {
          var e = this.player.elements.buttons.fullscreen;
          l.element(e) && (e.pressed = this.active), _.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), R.isIos || function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (l.element(e)) {
              var n = E.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                r = n[0],
                i = n[n.length - 1];
              c.call(this, this.elements.container, "keydown", function(e) {
                if ("Tab" === e.key && 9 === e.keyCode) {
                  var t = document.activeElement;
                  t !== i || e.shiftKey ? t === r && e.shiftKey && (i.focus(), e.preventDefault()) : (r.focus(), e.preventDefault())
                }
              }, t, !1)
            }
          }.call(this.player, this.target, this.active)
        }
      }

      function pe() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e ? this.scrollPosition = {
          x: window.scrollX || 0,
          y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", S(this.target, this.player.config.classNames.fullscreen.fallback, e), _e.call(this)
      }
      var ye = function() {
        function e(t) {
          var n = this;
          p(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
            x: 0,
            y: 0
          }, h.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function() {
            _e.call(n)
          }), h.call(this.player, this.player.elements.container, "dblclick", function(e) {
            l.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
          }), this.update()
        }
        return y(e, [{
          key: "update",
          value: function() {
            this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), S(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
          }
        }, {
          key: "enter",
          value: function() {
            this.enabled && (R.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : e.native ? this.prefix ? l.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : pe.call(this, !0))
          }
        }, {
          key: "exit",
          value: function() {
            if (this.enabled)
              if (R.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
              else if (e.native)
              if (this.prefix) {
                if (!l.empty(this.prefix)) {
                  var t = "moz" === this.prefix ? "Cancel" : "Exit";
                  document["" + this.prefix + t + this.property]()
                }
              } else(document.cancelFullScreen || document.exitFullscreen).call(document);
            else pe.call(this, !1)
          }
        }, {
          key: "toggle",
          value: function() {
            this.active ? this.exit() : this.enter()
          }
        }, {
          key: "enabled",
          get: function() {
            return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
          }
        }, {
          key: "active",
          get: function() {
            return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : j(this.target, this.player.config.classNames.fullscreen.fallback))
          }
        }, {
          key: "target",
          get: function() {
            return R.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
          }
        }], [{
          key: "native",
          get: function() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
          }
        }, {
          key: "prefix",
          get: function() {
            if (l.function(document.exitFullscreen)) return "";
            var e = "";
            return ["webkit", "moz", "ms"].some(function(t) {
              return !(!l.function(document[t + "ExitFullscreen"]) && !l.function(document[t + "CancelFullScreen"]) || (e = t, 0))
            }), e
          }
        }, {
          key: "property",
          get: function() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
          }
        }]), e
      }();

      function ge(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise(function(n, r) {
          var i = new Image,
            a = function() {
              delete i.onload, delete i.onerror, (i.naturalWidth >= t ? n : r)(i)
            };
          Object.assign(i, {
            onload: a,
            onerror: a,
            src: e
          })
        })
      }
      var ve = {
          addStyleHook: function() {
            S(this.elements.container, this.config.selectors.container.replace(".", ""), !0), S(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
          },
          toggleNativeControls: function() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
          },
          build: function() {
            var e = this;
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void ve.toggleNativeControls.call(this, !0);
            l.element(this.elements.controls) || (se.inject.call(this), this.listeners.controls()), ve.toggleNativeControls.call(this), this.isHTML5 && le.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, se.updateVolume.call(this), se.timeUpdate.call(this), ve.checkPlaying.call(this), S(this.elements.container, this.config.classNames.pip.supported, $.pip && this.isHTML5 && this.isVideo), S(this.elements.container, this.config.classNames.airplay.supported, $.airplay && this.isHTML5), S(this.elements.container, this.config.classNames.isIos, R.isIos), S(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
              _.call(e, e.media, "ready")
            }, 0), ve.setTitle.call(this), this.poster && ve.setPoster.call(this, this.poster, !1).catch(function() {}), this.config.duration && se.durationUpdate.call(this)
          },
          setTitle: function() {
            var e = Z("play", this.config);
            if (l.string(this.config.title) && !l.empty(this.config.title) && (e += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(function(t) {
                t.setAttribute("aria-label", e)
              }), this.isEmbed) {
              var t = A.call(this, "iframe");
              if (!l.element(t)) return;
              var n = l.empty(this.config.title) ? "video" : this.config.title,
                r = Z("frameTitle", this.config);
              t.setAttribute("title", r.replace("{title}", n))
            }
          },
          togglePoster: function(e) {
            S(this.elements.container, this.config.classNames.posterEnabled, e)
          },
          setPoster: function(e) {
            var t = this;
            return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function() {
              var e = this;
              return new Promise(function(t) {
                return e.ready ? setTimeout(t, 0) : h.call(e, e.elements.container, "ready", t)
              }).then(function() {})
            }.call(this).then(function() {
              return ge(e)
            }).catch(function(n) {
              throw e === t.poster && ve.togglePoster.call(t, !1), n
            }).then(function() {
              if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
            }).then(function() {
              return Object.assign(t.elements.poster.style, {
                backgroundImage: "url('" + e + "')",
                backgroundSize: ""
              }), ve.togglePoster.call(t, !0), e
            })) : Promise.reject(new Error("Poster already set"))
          },
          checkPlaying: function(e) {
            var t = this;
            S(this.elements.container, this.config.classNames.playing, this.playing), S(this.elements.container, this.config.classNames.paused, this.paused), S(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function(e) {
              e.pressed = t.playing
            }), l.event(e) && "timeupdate" === e.type || ve.toggleControls.call(this)
          },
          checkLoading: function(e) {
            var t = this;
            this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
              S(t.elements.container, t.config.classNames.loading, t.loading), ve.toggleControls.call(t)
            }, this.loading ? 250 : 0)
          },
          toggleControls: function(e) {
            var t = this.elements.controls;
            t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover))
          }
        },
        Me = function() {
          function e(t) {
            p(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
          }
          return y(e, [{
            key: "handleKey",
            value: function(e) {
              var t = this.player,
                n = t.elements,
                r = e.keyCode ? e.keyCode : e.which,
                i = "keydown" === e.type,
                a = i && r === this.lastKey;
              if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && l.number(r))
                if (i) {
                  var s = document.activeElement;
                  if (l.element(s)) {
                    var o = t.config.selectors.editable;
                    if (s !== n.inputs.seek && H(s, o)) return;
                    if (32 === e.which && H(s, 'button, [role^="menuitem"]')) return
                  }
                  switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(r) && (e.preventDefault(), e.stopPropagation()), r) {
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      a || (t.currentTime = t.duration / 10 * (r - 48));
                      break;
                    case 32:
                    case 75:
                      a || t.togglePlay();
                      break;
                    case 38:
                      t.increaseVolume(.1);
                      break;
                    case 40:
                      t.decreaseVolume(.1);
                      break;
                    case 77:
                      a || (t.muted = !t.muted);
                      break;
                    case 39:
                      t.forward();
                      break;
                    case 37:
                      t.rewind();
                      break;
                    case 70:
                      t.fullscreen.toggle();
                      break;
                    case 67:
                      a || t.toggleCaptions();
                      break;
                    case 76:
                      t.loop = !t.loop
                  }!t.fullscreen.enabled && t.fullscreen.active && 27 === r && t.fullscreen.toggle(), this.lastKey = r
                } else this.lastKey = null
            }
          }, {
            key: "toggleMenu",
            value: function(e) {
              se.toggleMenu.call(this.player, e)
            }
          }, {
            key: "firstTouch",
            value: function() {
              var e = this.player,
                t = e.elements;
              e.touch = !0, S(t.container, e.config.classNames.isTouch, !0)
            }
          }, {
            key: "setTabFocus",
            value: function(e) {
              var t = this.player,
                n = t.elements;
              if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                var r, i = e.timeStamp - this.lastKeyDown <= 20;
                ("focus" !== e.type || i) && (r = t.config.classNames.tabFocus, S(E.call(t, "." + r), r, !1), this.focusTimer = setTimeout(function() {
                  var e = document.activeElement;
                  n.container.contains(e) && S(document.activeElement, t.config.classNames.tabFocus, !0)
                }, 10))
              }
            }
          }, {
            key: "global",
            value: function() {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = this.player;
              t.config.keyboard.global && c.call(t, window, "keydown keyup", this.handleKey, e, !1), c.call(t, document.body, "click", this.toggleMenu, e), f.call(t, document.body, "touchstart", this.firstTouch), c.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
            }
          }, {
            key: "container",
            value: function() {
              var e = this.player,
                t = e.elements;
              !e.config.keyboard.global && e.config.keyboard.focused && h.call(e, t.container, "keydown keyup", this.handleKey, !1), h.call(e, t.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function(n) {
                var r = t.controls;
                r && "enterfullscreen" === n.type && (r.pressed = !1, r.hover = !1);
                var i = 0;
                ["touchstart", "touchmove", "mousemove"].includes(n.type) && (ve.toggleControls.call(e, !0), i = e.touch ? 3e3 : 2e3), clearTimeout(e.timers.controls), e.timers.controls = setTimeout(function() {
                  return ve.toggleControls.call(e, !1)
                }, i)
              })
            }
          }, {
            key: "media",
            value: function() {
              var e = this.player,
                t = e.elements;
              if (h.call(e, e.media, "timeupdate seeking seeked", function(t) {
                  return se.timeUpdate.call(e, t)
                }), h.call(e, e.media, "durationchange loadeddata loadedmetadata", function(t) {
                  return se.durationUpdate.call(e, t)
                }), h.call(e, e.media, "canplay", function() {
                  x(t.volume, !e.hasAudio), x(t.buttons.mute, !e.hasAudio)
                }), h.call(e, e.media, "ended", function() {
                  e.isHTML5 && e.isVideo && e.config.resetOnEnd && e.restart()
                }), h.call(e, e.media, "progress playing seeking seeked", function(t) {
                  return se.updateProgress.call(e, t)
                }), h.call(e, e.media, "volumechange", function(t) {
                  return se.updateVolume.call(e, t)
                }), h.call(e, e.media, "playing play pause ended emptied timeupdate", function(t) {
                  return ve.checkPlaying.call(e, t)
                }), h.call(e, e.media, "waiting canplay seeked playing", function(t) {
                  return ve.checkLoading.call(e, t)
                }), h.call(e, e.media, "playing", function() {
                  e.ads && e.ads.enabled && !e.ads.initialized && e.ads.managerPromise.then(function() {
                    return e.ads.play()
                  }).catch(function() {
                    return e.play()
                  })
                }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                var n = A.call(e, "." + e.config.classNames.video);
                if (!l.element(n)) return;
                h.call(e, t.container, "click touchstart", function(r) {
                  ([t.container, n].includes(r.target) || n.contains(r.target)) && (e.config.hideControls && e.touch && j(t.container, e.config.classNames.hideControls) || (e.ended ? (e.restart(), e.play()) : e.togglePlay()))
                })
              }
              e.supported.ui && e.config.disableContextMenu && h.call(e, t.wrapper, "contextmenu", function(e) {
                e.preventDefault()
              }, !1), h.call(e, e.media, "volumechange", function() {
                e.storage.set({
                  volume: e.volume,
                  muted: e.muted
                })
              }), h.call(e, e.media, "ratechange", function() {
                se.updateSetting.call(e, "speed"), e.storage.set({
                  speed: e.speed
                })
              }), h.call(e, e.media, "qualitychange", function(t) {
                se.updateSetting.call(e, "quality", null, t.detail.quality)
              });
              var r = e.config.events.concat(["keyup", "keydown"]).join(" ");
              h.call(e, e.media, r, function(n) {
                var r = n.detail,
                  i = void 0 === r ? {} : r;
                "error" === n.type && (i = e.media.error), _.call(e, t.container, n.type, !0, i)
              })
            }
          }, {
            key: "proxy",
            value: function(e, t, n) {
              var r = this.player,
                i = r.config.listeners[n],
                a = !0;
              l.function(i) && (a = i.call(r, e)), a && l.function(t) && t.call(r, e)
            }
          }, {
            key: "bind",
            value: function(e, t, n, r) {
              var i = this,
                a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                s = this.player,
                o = s.config.listeners[r],
                u = l.function(o);
              h.call(s, e, t, function(e) {
                return i.proxy(e, n, r)
              }, a && !u)
            }
          }, {
            key: "controls",
            value: function() {
              var e = this,
                t = this.player,
                n = t.elements,
                r = R.isIE ? "change" : "input";
              if (n.buttons.play && Array.from(n.buttons.play).forEach(function(n) {
                  e.bind(n, "click", t.togglePlay, "play")
                }), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", function() {
                  t.muted = !t.muted
                }, "mute"), this.bind(n.buttons.captions, "click", function() {
                  return t.toggleCaptions()
                }), this.bind(n.buttons.fullscreen, "click", function() {
                  t.fullscreen.toggle()
                }, "fullscreen"), this.bind(n.buttons.pip, "click", function() {
                  t.pip = "toggle"
                }, "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", function(e) {
                  e.stopPropagation(), se.toggleMenu.call(t, e)
                }), this.bind(n.buttons.settings, "keyup", function(e) {
                  var n = e.which;
                  [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), se.toggleMenu.call(t, e)) : se.focusFirstMenuItem.call(t, null, !0))
                }, null, !1), this.bind(n.settings.menu, "keydown", function(e) {
                  27 === e.which && se.toggleMenu.call(t, e)
                }), this.bind(n.inputs.seek, "mousedown mousemove", function(e) {
                  var t = n.progress.getBoundingClientRect(),
                    r = 100 / t.width * (e.pageX - t.left);
                  e.currentTarget.setAttribute("seek-value", r)
                }), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function(e) {
                  var n = e.currentTarget,
                    r = e.keyCode ? e.keyCode : e.which;
                  if (!l.keyboardEvent(e) || 39 === r || 37 === r) {
                    var i = n.hasAttribute("play-on-seeked"),
                      a = ["mouseup", "touchend", "keyup"].includes(e.type);
                    i && a ? (n.removeAttribute("play-on-seeked"), t.play()) : !a && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause())
                  }
                }), R.isIos) {
                var i = E.call(t, 'input[type="range"]');
                Array.from(i).forEach(function(t) {
                  return e.bind(t, r, function(e) {
                    return F(e.target)
                  })
                })
              }
              this.bind(n.inputs.seek, r, function(e) {
                var n = e.currentTarget,
                  r = n.getAttribute("seek-value");
                l.empty(r) && (r = n.value), n.removeAttribute("seek-value"), t.currentTime = r / n.max * t.duration
              }, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function(e) {
                return se.updateSeekTooltip.call(t, e)
              }), R.isWebkit && Array.from(E.call(t, 'input[type="range"]')).forEach(function(n) {
                e.bind(n, "input", function(e) {
                  return se.updateRangeFill.call(t, e.target)
                })
              }), t.config.toggleInvert && !l.element(n.display.duration) && this.bind(n.display.currentTime, "click", function() {
                0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, se.timeUpdate.call(t))
              }), this.bind(n.inputs.volume, r, function(e) {
                t.volume = e.target.value
              }, "volume"), this.bind(n.controls, "mouseenter mouseleave", function(e) {
                n.controls.hover = !t.touch && "mouseenter" === e.type
              }), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
              }), this.bind(n.controls, "focusin focusout", function(n) {
                var r = t.config,
                  i = t.elements,
                  a = t.timers,
                  s = "focusin" === n.type;
                if (S(i.controls, r.classNames.noTransition, s), ve.toggleControls.call(t, s), s) {
                  setTimeout(function() {
                    S(i.controls, r.classNames.noTransition, !1)
                  }, 0);
                  var o = e.touch ? 3e3 : 4e3;
                  clearTimeout(a.controls), a.controls = setTimeout(function() {
                    return ve.toggleControls.call(t, !1)
                  }, o)
                }
              }), this.bind(n.inputs.volume, "wheel", function(e) {
                var n = e.webkitDirectionInvertedFromDevice,
                  r = [e.deltaX, -e.deltaY].map(function(e) {
                    return n ? -e : e
                  }),
                  i = v(r, 2),
                  a = i[0],
                  s = i[1],
                  o = Math.sign(Math.abs(a) > Math.abs(s) ? a : s);
                t.increaseVolume(o / 50);
                var u = t.media.volume;
                (1 === o && u < 1 || -1 === o && u > 0) && e.preventDefault()
              }, "volume", !1)
            }
          }]), e
        }();
      "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
      var Le, ke = (function(e, t) {
        var n;
        n = function() {
          var e = function() {},
            t = {},
            n = {},
            r = {};

          function i(e, t) {
            if (e) {
              var i = r[e];
              if (n[e] = t, i)
                for (; i.length;) i[0](e, t), i.splice(0, 1)
            }
          }

          function a(t, n) {
            t.call && (t = {
              success: t
            }), n.length ? (t.error || e)(n) : (t.success || e)(t)
          }

          function s(t, n, r, i) {
            var a, o, u = document,
              l = r.async,
              d = (r.numRetries || 0) + 1,
              c = r.before || e,
              h = t.replace(/^(css|img)!/, "");
            i = i || 0, /(^css!|\.css$)/.test(t) ? (a = !0, (o = u.createElement("link")).rel = "stylesheet", o.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (o = u.createElement("img")).src = h : ((o = u.createElement("script")).src = t, o.async = void 0 === l || l), o.onload = o.onerror = o.onbeforeload = function(e) {
              var u = e.type[0];
              if (a && "hideFocus" in o) try {
                o.sheet.cssText.length || (u = "e")
              } catch (e) {
                u = "e"
              }
              if ("e" == u && (i += 1) < d) return s(t, n, r, i);
              n(t, u, e.defaultPrevented)
            }, !1 !== c(t, o) && u.head.appendChild(o)
          }

          function o(e, n, r) {
            var o, u;
            if (n && n.trim && (o = n), u = (o ? r : n) || {}, o) {
              if (o in t) throw "LoadJS";
              t[o] = !0
            }! function(e, t, n) {
              var r, i, a = (e = e.push ? e : [e]).length,
                o = a,
                u = [];
              for (r = function(e, n, r) {
                  if ("e" == n && u.push(e), "b" == n) {
                    if (!r) return;
                    u.push(e)
                  }--a || t(u)
                }, i = 0; i < o; i++) s(e[i], r, n)
            }(e, function(e) {
              a(u, e), i(o, e)
            }, u)
          }
          return o.ready = function(e, t) {
            return function(e, t) {
              var i, a, s, o = [],
                u = (e = e.push ? e : [e]).length,
                l = u;
              for (i = function(e, n) {
                  n.length && o.push(e), --l || t(o)
                }; u--;) a = e[u], (s = n[a]) ? i(a, s) : (r[a] = r[a] || []).push(i)
            }(e, function(e) {
              a(t, e)
            }), o
          }, o.done = function(e) {
            i(e, [])
          }, o.reset = function() {
            t = {}, n = {}, r = {}
          }, o.isDefined = function(e) {
            return e in t
          }, o
        }, e.exports = n()
      }(Le = {
        exports: {}
      }), Le.exports);

      function be(e) {
        return new Promise(function(t, n) {
          ke(e, {
            success: t,
            error: n
          })
        })
      }

      function Ye(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, _.call(this, this.media, e ? "play" : "pause"))
      }
      var we = {
        setup: function() {
          var e = this;
          S(this.elements.wrapper, this.config.classNames.embed, !0), we.setAspectRatio.call(this), l.object(window.Vimeo) ? we.ready.call(this) : be(this.config.urls.vimeo.sdk).then(function() {
            we.ready.call(e)
          }).catch(function(t) {
            e.debug.warn("Vimeo API failed to load", t)
          })
        },
        setAspectRatio: function(e) {
          var t = (l.string(e) ? e : this.config.ratio).split(":"),
            n = v(t, 2),
            r = 100 / n[0] * n[1];
          if (this.elements.wrapper.style.paddingBottom = r + "%", this.supported.ui) {
            var i = (240 - r) / 4.8;
            this.media.style.transform = "translateY(-" + i + "%)"
          }
        },
        ready: function() {
          var e = this,
            t = this,
            n = ue({
              loop: t.config.loop.active,
              autoplay: t.autoplay,
              byline: !1,
              portrait: !1,
              title: !1,
              speed: !0,
              transparent: 0,
              gesture: "media",
              playsinline: !this.config.fullscreen.iosNative
            }),
            r = t.media.getAttribute("src");
          l.empty(r) && (r = t.media.getAttribute(t.config.attributes.embed.id));
          var i, a = (i = r, l.empty(i) ? null : l.number(Number(i)) ? i : i.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : i),
            s = k("iframe"),
            o = J(t.config.urls.vimeo.iframe, a, n);
          s.setAttribute("src", o), s.setAttribute("allowfullscreen", ""), s.setAttribute("allowtransparency", ""), s.setAttribute("allow", "autoplay");
          var u = k("div", {
            poster: t.poster,
            class: t.config.classNames.embedContainer
          });
          u.appendChild(s), t.media = D(u, t.media), ee(J(t.config.urls.vimeo.api, a), "json").then(function(e) {
            if (!l.empty(e)) {
              var n = new URL(e[0].thumbnail_large);
              n.pathname = n.pathname.split("_")[0] + ".jpg", ve.setPoster.call(t, n.href).catch(function() {})
            }
          }), t.embed = new window.Vimeo.Player(s, {
            autopause: t.config.autopause,
            muted: t.muted
          }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
            return Ye.call(t, !0), t.embed.play()
          }, t.media.pause = function() {
            return Ye.call(t, !1), t.embed.pause()
          }, t.media.stop = function() {
            t.pause(), t.currentTime = 0
          };
          var d = t.media.currentTime;
          Object.defineProperty(t.media, "currentTime", {
            get: function() {
              return d
            },
            set: function(e) {
              var n = t.embed,
                r = t.media,
                i = t.paused,
                a = t.volume,
                s = i && !n.hasPlayed;
              r.seeking = !0, _.call(t, r, "seeking"), Promise.resolve(s && n.setVolume(0)).then(function() {
                return n.setCurrentTime(e)
              }).then(function() {
                return s && n.pause()
              }).then(function() {
                return s && n.setVolume(a)
              }).catch(function() {})
            }
          });
          var c = t.config.speed.selected;
          Object.defineProperty(t.media, "playbackRate", {
            get: function() {
              return c
            },
            set: function(e) {
              t.embed.setPlaybackRate(e).then(function() {
                c = e, _.call(t, t.media, "ratechange")
              }).catch(function(e) {
                "Error" === e.name && se.setSpeedMenu.call(t, [])
              })
            }
          });
          var h = t.config.volume;
          Object.defineProperty(t.media, "volume", {
            get: function() {
              return h
            },
            set: function(e) {
              t.embed.setVolume(e).then(function() {
                h = e, _.call(t, t.media, "volumechange")
              })
            }
          });
          var m = t.config.muted;
          Object.defineProperty(t.media, "muted", {
            get: function() {
              return m
            },
            set: function(e) {
              var n = !!l.boolean(e) && e;
              t.embed.setVolume(n ? 0 : t.config.volume).then(function() {
                m = n, _.call(t, t.media, "volumechange")
              })
            }
          });
          var f = t.config.loop;
          Object.defineProperty(t.media, "loop", {
            get: function() {
              return f
            },
            set: function(e) {
              var n = l.boolean(e) ? e : t.config.loop.active;
              t.embed.setLoop(n).then(function() {
                f = n
              })
            }
          });
          var p = void 0;
          t.embed.getVideoUrl().then(function(e) {
            p = e
          }).catch(function(t) {
            e.debug.warn(t)
          }), Object.defineProperty(t.media, "currentSrc", {
            get: function() {
              return p
            }
          }), Object.defineProperty(t.media, "ended", {
            get: function() {
              return t.currentTime === t.duration
            }
          }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function(t) {
            var n = function(e, t) {
              var n = function e(t, n) {
                return 0 === n ? t : e(n, t % n)
              }(e, t);
              return e / n + ":" + t / n
            }(t[0], t[1]);
            we.setAspectRatio.call(e, n)
          }), t.embed.setAutopause(t.config.autopause).then(function(e) {
            t.config.autopause = e
          }), t.embed.getVideoTitle().then(function(n) {
            t.config.title = n, ve.setTitle.call(e)
          }), t.embed.getCurrentTime().then(function(e) {
            d = e, _.call(t, t.media, "timeupdate")
          }), t.embed.getDuration().then(function(e) {
            t.media.duration = e, _.call(t, t.media, "durationchange")
          }), t.embed.getTextTracks().then(function(e) {
            t.media.textTracks = e, le.setup.call(t)
          }), t.embed.on("cuechange", function(e) {
            var n = e.cues,
              r = (void 0 === n ? [] : n).map(function(e) {
                return t = e.text, n = document.createDocumentFragment(), r = document.createElement("div"), n.appendChild(r), r.innerHTML = t, n.firstChild.innerText;
                var t, n, r
              });
            le.updateCues.call(t, r)
          }), t.embed.on("loaded", function() {
            t.embed.getPaused().then(function(e) {
              Ye.call(t, !e), e || _.call(t, t.media, "playing")
            }), l.element(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
          }), t.embed.on("play", function() {
            Ye.call(t, !0), _.call(t, t.media, "playing")
          }), t.embed.on("pause", function() {
            Ye.call(t, !1)
          }), t.embed.on("timeupdate", function(e) {
            t.media.seeking = !1, d = e.seconds, _.call(t, t.media, "timeupdate")
          }), t.embed.on("progress", function(e) {
            t.media.buffered = e.percent, _.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && _.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function(e) {
              e !== t.media.duration && (t.media.duration = e, _.call(t, t.media, "durationchange"))
            })
          }), t.embed.on("seeked", function() {
            t.media.seeking = !1, _.call(t, t.media, "seeked")
          }), t.embed.on("ended", function() {
            t.media.paused = !0, _.call(t, t.media, "ended")
          }), t.embed.on("error", function(e) {
            t.media.error = e, _.call(t, t.media, "error")
          }), setTimeout(function() {
            return ve.build.call(t)
          }, 0)
        }
      };

      function De(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, _.call(this, this.media, e ? "play" : "pause"))
      }
      var Te, xe = {
          setup: function() {
            var e = this;
            S(this.elements.wrapper, this.config.classNames.embed, !0), xe.setAspectRatio.call(this), l.object(window.YT) && l.function(window.YT.Player) ? xe.ready.call(this) : (be(this.config.urls.youtube.sdk).catch(function(t) {
              e.debug.warn("YouTube API failed to load", t)
            }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function() {
              xe.ready.call(e)
            }), window.onYouTubeIframeAPIReady = function() {
              window.onYouTubeReadyCallbacks.forEach(function(e) {
                e()
              })
            })
          },
          getTitle: function(e) {
            var t = this;
            if (l.function(this.embed.getVideoData)) {
              var n = this.embed.getVideoData().title;
              if (l.empty(n)) return this.config.title = n, void ve.setTitle.call(this)
            }
            var r = this.config.keys.google;
            l.string(r) && !l.empty(r) && ee(J(this.config.urls.youtube.api, e, r)).then(function(e) {
              l.object(e) && (t.config.title = e.items[0].snippet.title, ve.setTitle.call(t))
            }).catch(function() {})
          },
          setAspectRatio: function() {
            var e = this.config.ratio.split(":");
            this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
          },
          ready: function() {
            var e = this,
              t = e.media.getAttribute("id");
            if (l.empty(t) || !t.startsWith("youtube-")) {
              var n = e.media.getAttribute("src");
              l.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
              var r, i = (r = n, l.empty(r) ? null : r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : r),
                a = e.provider + "-" + Math.floor(1e4 * Math.random()),
                s = k("div", {
                  id: a,
                  poster: e.poster
                });
              e.media = D(s, e.media);
              var o = function(e) {
                return "https://img.youtube.com/vi/" + i + "/" + e + "default.jpg"
              };
              ge(o("maxres"), 121).catch(function() {
                return ge(o("sd"), 121)
              }).catch(function() {
                return ge(o("hq"))
              }).then(function(t) {
                return ve.setPoster.call(e, t.src)
              }).then(function(t) {
                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
              }).catch(function() {}), e.embed = new window.YT.Player(a, {
                videoId: i,
                playerVars: {
                  autoplay: e.config.autoplay ? 1 : 0,
                  hl: e.config.hl,
                  controls: e.supported.ui ? 0 : 1,
                  rel: 0,
                  showinfo: 0,
                  iv_load_policy: 3,
                  modestbranding: 1,
                  disablekb: 1,
                  playsinline: 1,
                  widget_referrer: window ? window.location.href : null,
                  cc_load_policy: e.captions.active ? 1 : 0,
                  cc_lang_pref: e.config.captions.language
                },
                events: {
                  onError: function(t) {
                    if (!e.media.error) {
                      var n = t.data,
                        r = {
                          2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                          5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                          100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                          101: "The owner of the requested video does not allow it to be played in embedded players.",
                          150: "The owner of the requested video does not allow it to be played in embedded players."
                        }[n] || "An unknown error occured";
                      e.media.error = {
                        code: n,
                        message: r
                      }, _.call(e, e.media, "error")
                    }
                  },
                  onPlaybackRateChange: function(t) {
                    var n = t.target;
                    e.media.playbackRate = n.getPlaybackRate(), _.call(e, e.media, "ratechange")
                  },
                  onReady: function(t) {
                    if (!l.function(e.media.play)) {
                      var n = t.target;
                      xe.getTitle.call(e, i), e.media.play = function() {
                        De.call(e, !0), n.playVideo()
                      }, e.media.pause = function() {
                        De.call(e, !1), n.pauseVideo()
                      }, e.media.stop = function() {
                        n.stopVideo()
                      }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                        get: function() {
                          return Number(n.getCurrentTime())
                        },
                        set: function(t) {
                          e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, _.call(e, e.media, "seeking"), n.seekTo(t)
                        }
                      }), Object.defineProperty(e.media, "playbackRate", {
                        get: function() {
                          return n.getPlaybackRate()
                        },
                        set: function(e) {
                          n.setPlaybackRate(e)
                        }
                      });
                      var r = e.config.volume;
                      Object.defineProperty(e.media, "volume", {
                        get: function() {
                          return r
                        },
                        set: function(t) {
                          r = t, n.setVolume(100 * r), _.call(e, e.media, "volumechange")
                        }
                      });
                      var a = e.config.muted;
                      Object.defineProperty(e.media, "muted", {
                        get: function() {
                          return a
                        },
                        set: function(t) {
                          var r = l.boolean(t) ? t : a;
                          a = r, n[r ? "mute" : "unMute"](), _.call(e, e.media, "volumechange")
                        }
                      }), Object.defineProperty(e.media, "currentSrc", {
                        get: function() {
                          return n.getVideoUrl()
                        }
                      }), Object.defineProperty(e.media, "ended", {
                        get: function() {
                          return e.currentTime === e.duration
                        }
                      }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), _.call(e, e.media, "timeupdate"), _.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function() {
                        e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && _.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), _.call(e, e.media, "canplaythrough"))
                      }, 200), setTimeout(function() {
                        return ve.build.call(e)
                      }, 50)
                    }
                  },
                  onStateChange: function(t) {
                    var n = t.target;
                    switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, _.call(e, e.media, "seeked")), t.data) {
                      case -1:
                        _.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), _.call(e, e.media, "progress");
                        break;
                      case 0:
                        De.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : _.call(e, e.media, "ended");
                        break;
                      case 1:
                        e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (De.call(e, !0), _.call(e, e.media, "playing"), e.timers.playing = setInterval(function() {
                          _.call(e, e.media, "timeupdate")
                        }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), _.call(e, e.media, "durationchange")));
                        break;
                      case 2:
                        e.muted || e.embed.unMute(), De.call(e, !1)
                    }
                    _.call(e, e.elements.container, "statechange", !1, {
                      code: t.data
                    })
                  }
                }
              })
            }
          }
        },
        Se = {
          setup: function() {
            this.media ? (S(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), S(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && S(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = k("div", {
              class: this.config.classNames.video
            }), M(this.media, this.elements.wrapper), this.elements.poster = k("div", {
              class: this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? q.extend.call(this) : this.isYouTube ? xe.setup.call(this) : this.isVimeo && we.setup.call(this)) : this.debug.warn("No media element found!")
          }
        },
        je = function() {
          function e(t) {
            var n = this;
            p(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
              container: null,
              displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e, t) {
              n.on("loaded", e), n.on("error", t)
            }), this.load()
          }
          return y(e, [{
            key: "load",
            value: function() {
              var e = this;
              this.enabled && (l.object(window.google) && l.object(window.google.ima) ? this.ready() : be(this.player.config.urls.googleIMA.sdk).then(function() {
                e.ready()
              }).catch(function() {
                e.trigger("error", new Error("Google IMA SDK failed to load"))
              }))
            }
          }, {
            key: "ready",
            value: function() {
              var e = this;
              this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
                e.clearSafetyTimer("onAdsManagerLoaded()")
              }), this.listeners(), this.setupIMA()
            }
          }, {
            key: "setupIMA",
            value: function() {
              this.elements.container = k("div", {
                class: this.player.config.classNames.ads
              }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
            }
          }, {
            key: "requestAds",
            value: function() {
              var e = this,
                t = this.player.elements.container;
              try {
                this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
                  return e.onAdsManagerLoaded(t)
                }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                  return e.onAdError(t)
                }, !1);
                var n = new google.ima.AdsRequest;
                n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
              } catch (e) {
                this.onAdError(e)
              }
            }
          }, {
            key: "pollCountdown",
            value: function() {
              var e = this;
              if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(function() {
                var t = ae(Math.max(e.manager.getRemainingTime(), 0)),
                  n = Z("advertisement", e.player.config) + " - " + t;
                e.elements.container.setAttribute("data-badge-text", n)
              }, 100)
            }
          }, {
            key: "onAdsManagerLoaded",
            value: function(e) {
              var t = this;
              if (this.enabled) {
                var n = new google.ima.AdsRenderingSettings;
                n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), l.empty(this.cuePoints) || this.cuePoints.forEach(function(e) {
                  if (0 !== e && -1 !== e && e < t.player.duration) {
                    var n = t.player.elements.progress;
                    if (l.element(n)) {
                      var r = 100 / t.player.duration * e,
                        i = k("span", {
                          class: t.player.config.classNames.cues
                        });
                      i.style.left = r.toString() + "%", n.appendChild(i)
                    }
                  }
                }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                  return t.onAdError(e)
                }), Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
                  t.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                    return t.onAdEvent(e)
                  })
                }), this.trigger("loaded")
              }
            }
          }, {
            key: "onAdEvent",
            value: function(e) {
              var t = this,
                n = this.player.elements.container,
                r = e.getAd(),
                i = function(e) {
                  var n = "ads" + e.replace(/_/g, "").toLowerCase();
                  _.call(t.player, t.player.media, n)
                };
              switch (e.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), i(e.type), this.pollCountdown(!0), r.isLinear() || (r.width = n.offsetWidth, r.height = n.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  i(e.type), this.loadAds();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  i(e.type), this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  i(e.type), this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.STARTED:
                case google.ima.AdEvent.Type.MIDPOINT:
                case google.ima.AdEvent.Type.COMPLETE:
                case google.ima.AdEvent.Type.IMPRESSION:
                case google.ima.AdEvent.Type.CLICK:
                  i(e.type)
              }
            }
          }, {
            key: "onAdError",
            value: function(e) {
              this.cancel(), this.player.debug.warn("Ads error", e)
            }
          }, {
            key: "listeners",
            value: function() {
              var e = this,
                t = this.player.elements.container,
                n = void 0;
              this.player.on("ended", function() {
                e.loader.contentComplete()
              }), this.player.on("seeking", function() {
                return n = e.player.currentTime
              }), this.player.on("seeked", function() {
                var t = e.player.currentTime;
                l.empty(e.cuePoints) || e.cuePoints.forEach(function(r, i) {
                  n < r && r < t && (e.manager.discardAdBreak(), e.cuePoints.splice(i, 1))
                })
              }), window.addEventListener("resize", function() {
                e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
              })
            }
          }, {
            key: "play",
            value: function() {
              var e = this,
                t = this.player.elements.container;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
                e.elements.displayContainer.initialize();
                try {
                  e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                } catch (t) {
                  e.onAdError(t)
                }
              }).catch(function() {})
            }
          }, {
            key: "resumeContent",
            value: function() {
              this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
            }
          }, {
            key: "pauseContent",
            value: function() {
              this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
            }
          }, {
            key: "cancel",
            value: function() {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
            }
          }, {
            key: "loadAds",
            value: function() {
              var e = this;
              this.managerPromise.then(function() {
                e.manager && e.manager.destroy(), e.managerPromise = new Promise(function(t) {
                  e.on("loaded", t), e.player.debug.log(e.manager)
                }), e.requestAds()
              }).catch(function() {})
            }
          }, {
            key: "trigger",
            value: function(e) {
              for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
              var a = this.events[e];
              l.array(a) && a.forEach(function(e) {
                l.function(e) && e.apply(t, r)
              })
            }
          }, {
            key: "on",
            value: function(e, t) {
              return l.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
            }
          }, {
            key: "startSafetyTimer",
            value: function(e, t) {
              var n = this;
              this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function() {
                n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
              }, e)
            }
          }, {
            key: "clearSafetyTimer",
            value: function(e) {
              l.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
            }
          }, {
            key: "enabled",
            get: function() {
              return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !l.empty(this.publisherId)
            }
          }, {
            key: "tagUrl",
            get: function() {
              return "https://go.aniview.com/api/adserver6/vast/?" + ue({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: this.publisherId
              })
            }
          }]), e
        }(),
        He = {
          insertElements: function(e, t) {
            var n = this;
            l.string(t) ? b(e, this.media, {
              src: t
            }) : l.array(t) && t.forEach(function(t) {
              b(e, n.media, t)
            })
          },
          change: function(e) {
            var t = this;
            U(e, "sources.length") ? (q.cancelRequests.call(this), this.destroy.call(this, function() {
              t.options.quality = [], Y(t.media), t.media = null, l.element(t.elements.container) && t.elements.container.removeAttribute("class");
              var n = e.sources,
                r = e.type,
                i = v(n, 1)[0],
                a = i.provider,
                s = void 0 === a ? ce.html5 : a,
                o = i.src,
                u = "html5" === s ? r : "div",
                d = "html5" === s ? {} : {
                  src: o
                };
              Object.assign(t, {
                provider: s,
                type: r,
                supported: $.check(r, s, t.config.playsinline),
                media: k(u, d)
              }), t.elements.container.appendChild(t.media), l.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), l.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), ve.addStyleHook.call(t), t.isHTML5 && He.insertElements.call(t, "source", n), t.config.title = e.title, Se.setup.call(t), t.isHTML5 && ("tracks" in e && He.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && ve.build.call(t), t.fullscreen.update()
            }, !0)) : this.debug.warn("Invalid source format")
          }
        },
        Ee = function() {
          function e(t, n) {
            var r = this;
            if (p(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = $.touch, this.media = t, l.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || l.nodeList(this.media) || l.array(this.media)) && (this.media = this.media[0]), this.config = V({}, de, e.defaults, n || {}, function() {
                try {
                  return JSON.parse(r.media.getAttribute("data-plyr-config"))
                } catch (e) {
                  return {}
                }
              }()), this.elements = {
                container: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {
                  popup: null,
                  menu: null,
                  panels: {},
                  buttons: {}
                }
              }, this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
              }, this.fullscreen = {
                active: !1
              }, this.options = {
                speed: [],
                quality: []
              }, this.debug = new fe(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", $), !l.nullOrUndefined(this.media) && l.element(this.media))
              if (this.media.plyr) this.debug.warn("Target already setup");
              else if (this.config.enabled)
              if ($.check().api) {
                var i = this.media.cloneNode(!0);
                i.autoplay = !1, this.elements.original = i;
                var a = this.media.tagName.toLowerCase(),
                  s = null,
                  o = null;
                switch (a) {
                  case "div":
                    if (s = this.media.querySelector("iframe"), l.element(s)) {
                      if (o = oe(s.getAttribute("src")), this.provider = function(e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? ce.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ce.vimeo : null
                        }(o.toString()), this.elements.container = this.media, this.media = s, this.elements.container.className = "", o.search.length) {
                        var u = ["1", "true"];
                        u.includes(o.searchParams.get("autoplay")) && (this.config.autoplay = !0), u.includes(o.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = u.includes(o.searchParams.get("playsinline")), this.config.hl = o.searchParams.get("hl")) : this.config.playsinline = !0
                      }
                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                    if (l.empty(this.provider) || !Object.keys(ce).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                    this.type = he.video;
                    break;
                  case "video":
                  case "audio":
                    this.type = a, this.provider = ce.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                    break;
                  default:
                    return void this.debug.error("Setup failed: unsupported type")
                }
                this.supported = $.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Me(this), this.storage = new Q(this), this.media.plyr = this, l.element(this.elements.container) || (this.elements.container = k("div"), M(this.media, this.elements.container)), ve.addStyleHook.call(this), Se.setup.call(this), this.config.debug && h.call(this, this.elements.container, this.config.events.join(" "), function(e) {
                  r.debug.log("event: " + e.type)
                }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ve.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new ye(this), this.config.ads.enabled && (this.ads = new je(this)), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support")
              } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
          }
          return y(e, [{
            key: "play",
            value: function() {
              return l.function(this.media.play) ? this.media.play() : null
            }
          }, {
            key: "pause",
            value: function() {
              this.playing && l.function(this.media.pause) && this.media.pause()
            }
          }, {
            key: "togglePlay",
            value: function(e) {
              (l.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
            }
          }, {
            key: "stop",
            value: function() {
              this.isHTML5 ? (this.pause(), this.restart()) : l.function(this.media.stop) && this.media.stop()
            }
          }, {
            key: "restart",
            value: function() {
              this.currentTime = 0
            }
          }, {
            key: "rewind",
            value: function(e) {
              this.currentTime = this.currentTime - (l.number(e) ? e : this.config.seekTime)
            }
          }, {
            key: "forward",
            value: function(e) {
              this.currentTime = this.currentTime + (l.number(e) ? e : this.config.seekTime)
            }
          }, {
            key: "increaseVolume",
            value: function(e) {
              var t = this.media.muted ? 0 : this.volume;
              this.volume = t + (l.number(e) ? e : 0)
            }
          }, {
            key: "decreaseVolume",
            value: function(e) {
              this.increaseVolume(-e)
            }
          }, {
            key: "toggleCaptions",
            value: function(e) {
              le.toggle.call(this, e, !1)
            }
          }, {
            key: "airplay",
            value: function() {
              $.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
          }, {
            key: "toggleControls",
            value: function(e) {
              if (this.supported.ui && !this.isAudio) {
                var t = j(this.elements.container, this.config.classNames.hideControls),
                  n = void 0 === e ? void 0 : !e,
                  r = S(this.elements.container, this.config.classNames.hideControls, n);
                if (r && this.config.controls.includes("settings") && !l.empty(this.config.settings) && se.toggleMenu.call(this, !1), r !== t) {
                  var i = r ? "controlshidden" : "controlsshown";
                  _.call(this, this.media, i)
                }
                return !r
              }
              return !1
            }
          }, {
            key: "on",
            value: function(e, t) {
              h.call(this, this.elements.container, e, t)
            }
          }, {
            key: "once",
            value: function(e, t) {
              f.call(this, this.elements.container, e, t)
            }
          }, {
            key: "off",
            value: function(e, t) {
              m(this.elements.container, e, t)
            }
          }, {
            key: "destroy",
            value: function(e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (this.ready) {
                var r = function() {
                  document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (Y(t.elements.buttons.play), Y(t.elements.captions), Y(t.elements.controls), Y(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), l.function(e) && e()) : (function() {
                    this && this.eventListeners && (this.eventListeners.forEach(function(e) {
                      var t = e.element,
                        n = e.type,
                        r = e.callback,
                        i = e.options;
                      t.removeEventListener(n, r, i)
                    }), this.eventListeners = [])
                  }.call(t), D(t.elements.original, t.elements.container), _.call(t, t.elements.original, "destroyed", !0), l.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function() {
                    t.elements = null, t.media = null
                  }, 200))
                };
                this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), ve.toggleNativeControls.call(this, !0), r()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && l.function(this.embed.destroy) && this.embed.destroy(), r()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(r), setTimeout(r, 200))
              }
            }
          }, {
            key: "supports",
            value: function(e) {
              return $.mime.call(this, e)
            }
          }, {
            key: "isHTML5",
            get: function() {
              return Boolean(this.provider === ce.html5)
            }
          }, {
            key: "isEmbed",
            get: function() {
              return Boolean(this.isYouTube || this.isVimeo)
            }
          }, {
            key: "isYouTube",
            get: function() {
              return Boolean(this.provider === ce.youtube)
            }
          }, {
            key: "isVimeo",
            get: function() {
              return Boolean(this.provider === ce.vimeo)
            }
          }, {
            key: "isVideo",
            get: function() {
              return Boolean(this.type === he.video)
            }
          }, {
            key: "isAudio",
            get: function() {
              return Boolean(this.type === he.audio)
            }
          }, {
            key: "playing",
            get: function() {
              return Boolean(this.ready && !this.paused && !this.ended)
            }
          }, {
            key: "paused",
            get: function() {
              return Boolean(this.media.paused)
            }
          }, {
            key: "stopped",
            get: function() {
              return Boolean(this.paused && 0 === this.currentTime)
            }
          }, {
            key: "ended",
            get: function() {
              return Boolean(this.media.ended)
            }
          }, {
            key: "currentTime",
            set: function(e) {
              if (this.duration) {
                var t = l.number(e) && e > 0;
                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to " + this.currentTime + " seconds")
              }
            },
            get: function() {
              return Number(this.media.currentTime)
            }
          }, {
            key: "buffered",
            get: function() {
              var e = this.media.buffered;
              return l.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
          }, {
            key: "seeking",
            get: function() {
              return Boolean(this.media.seeking)
            }
          }, {
            key: "duration",
            get: function() {
              var e = parseFloat(this.config.duration),
                t = (this.media || {}).duration,
                n = l.number(t) && t !== 1 / 0 ? t : 0;
              return e || n
            }
          }, {
            key: "volume",
            set: function(e) {
              var t = e;
              l.string(t) && (t = Number(t)), l.number(t) || (t = this.storage.get("volume")), l.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !l.empty(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
              return Number(this.media.volume)
            }
          }, {
            key: "muted",
            set: function(e) {
              var t = e;
              l.boolean(t) || (t = this.storage.get("muted")), l.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function() {
              return Boolean(this.media.muted)
            }
          }, {
            key: "hasAudio",
            get: function() {
              return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
            }
          }, {
            key: "speed",
            set: function(e) {
              var t = null;
              l.number(e) && (t = e), l.number(t) || (t = this.storage.get("speed")), l.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
            },
            get: function() {
              return Number(this.media.playbackRate)
            }
          }, {
            key: "quality",
            set: function(e) {
              var t = this.config.quality,
                n = this.options.quality;
              if (n.length) {
                var r = [!l.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(l.number);
                if (!n.includes(r)) {
                  var i = function(e, t) {
                    return l.array(e) && e.length ? e.reduce(function(e, n) {
                      return Math.abs(n - t) < Math.abs(e - t) ? n : e
                    }) : null
                  }(n, r);
                  this.debug.warn("Unsupported quality option: " + r + ", using " + i + " instead"), r = i
                }
                t.selected = r, this.media.quality = r
              }
            },
            get: function() {
              return this.media.quality
            }
          }, {
            key: "loop",
            set: function(e) {
              var t = l.boolean(e) ? e : this.config.loop.active;
              this.config.loop.active = t, this.media.loop = t
            },
            get: function() {
              return Boolean(this.media.loop)
            }
          }, {
            key: "source",
            set: function(e) {
              He.change.call(this, e)
            },
            get: function() {
              return this.media.currentSrc
            }
          }, {
            key: "poster",
            set: function(e) {
              this.isVideo ? ve.setPoster.call(this, e, !1).catch(function() {}) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
              return this.isVideo ? this.media.getAttribute("poster") : null
            }
          }, {
            key: "autoplay",
            set: function(e) {
              var t = l.boolean(e) ? e : this.config.autoplay;
              this.config.autoplay = t
            },
            get: function() {
              return Boolean(this.config.autoplay)
            }
          }, {
            key: "currentTrack",
            set: function(e) {
              le.set.call(this, e, !1)
            },
            get: function() {
              var e = this.captions,
                t = e.toggled,
                n = e.currentTrack;
              return t ? n : -1
            }
          }, {
            key: "language",
            set: function(e) {
              le.setLanguage.call(this, e, !1)
            },
            get: function() {
              return (le.getCurrentTrack.call(this) || {}).language
            }
          }, {
            key: "pip",
            set: function(e) {
              var t = "inline";
              if ($.pip) {
                var n = l.boolean(e) ? e : this.pip === t;
                this.media.webkitSetPresentationMode(n ? "picture-in-picture" : t)
              }
            },
            get: function() {
              return $.pip ? this.media.webkitPresentationMode : null
            }
          }], [{
            key: "supported",
            value: function(e, t, n) {
              return $.check(e, t, n)
            }
          }, {
            key: "loadSprite",
            value: function(e, t) {
              return te(e, t)
            }
          }, {
            key: "setup",
            value: function(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = null;
              return l.string(t) ? r = Array.from(document.querySelectorAll(t)) : l.nodeList(t) ? r = Array.from(t) : l.array(t) && (r = t.filter(l.element)), l.empty(r) ? null : r.map(function(t) {
                return new e(t, n)
              })
            }
          }]), e
        }();
      return Ee.defaults = (Te = de, JSON.parse(JSON.stringify(Te))), Ee
    }, e.exports = n())
  }).call(t, n(4))
}, function(e, t, n) {
  var r, i, a, s, o, u;
  s = function() {
    return jQuery.reel || function(e, t, n, r) {
      if (e) {
        var i = e && e().jquery.split(/\./);
        if (!i || +(Rt(i[0]) + Rt(i[1]) + Rt(i[2] || "")) < 10602) return Bt("Too old jQuery library. Please upgrade your jQuery to version 1.6.2 or higher");
        var a, s = e.reel = {
            version: "1.3.0",
            def: {
              frame: 1,
              frames: 36,
              loops: !0,
              clickfree: !1,
              draggable: !0,
              scrollable: !0,
              steppable: !0,
              throwable: !0,
              wheelable: !0,
              orientable: !1,
              cw: !1,
              revolution: r,
              stitched: 0,
              directional: !1,
              row: 1,
              rows: 0,
              rowlock: !1,
              framelock: !1,
              orbital: 0,
              vertical: !1,
              inversed: !1,
              footage: 6,
              spacing: 0,
              horizontal: !0,
              suffix: "-reel",
              image: r,
              images: "",
              path: "",
              preload: "fidelity",
              shy: !1,
              speed: 0,
              delay: 0,
              timeout: 2,
              duration: r,
              rebound: .5,
              entry: r,
              opening: 0,
              brake: .23,
              velocity: 0,
              tempo: 36,
              laziness: 6,
              cursor: r,
              hint: "",
              indicator: 0,
              klass: "",
              preloader: 2,
              area: r,
              attr: {},
              annotations: r,
              responsive: !1,
              graph: r,
              monitor: r
            },
            scan: function() {
              return e(jt(f) + ":not(" + jt(_) + " > " + jt(f) + ")").each(function(t, n) {
                var r = e(n),
                  i = r.data(),
                  a = (i.images = $t(i.images), {});
                e(jt(M) + "[data-for=" + r.attr(ft) + "]").each(function(t, n) {
                  var r = e(n),
                    i = r.data(),
                    s = (i.x = qt($t(i.x)), i.y = qt($t(i.y)), r.attr(ft));
                  i.node = r.removeData();
                  a[s] = i
                }), i.annotations = a, r.removeData().reel(i)
              })
            },
            fn: {
              reel: function() {
                var n = arguments,
                  i = e(this),
                  u = i.data(),
                  l = n[0] || {},
                  d = n[1];
                if ("object" != typeof l) return ":" == l.slice(0, 1) ? i.trigger(l.slice(1), d) : 1 == n.length ? u[l] : (d !== r && (s.normal[l] && (d = s.normal[l](d, u)), u[l] === r ? u[l] = d : u[l] !== d && i.trigger(l + "Change", [r, u[l] = d])), i);
                var c = e.extend({}, s.def, l),
                  h = [];
                return i.filter(_t).unreel().filter(function() {
                  var t = e(this),
                    n = c.attr,
                    r = n.src || t.attr(xe),
                    i = n.width || t.attr(ie) || t.width(),
                    a = n.height || t.attr(Re) || t.height();
                  return r ? !(!i || !a) || Bt("Dimension(s) of the target image unknown") : Bt("`src` attribute missing on target image")
                }).each(function() {
                  var n, i, a, u = e(this),
                    l = function(e, t) {
                      return u.reel(e, t) && d(e)
                    },
                    d = function(e) {
                      return u.data(e)
                    },
                    lt = {
                      setup: function(t) {
                        if (!u.hasClass(f) || !u.parent().hasClass(_)) {
                          l(me, c);
                          var n = {
                              src: u.attr(xe),
                              width: u.attr(Re) || null,
                              height: u.attr(ie) || null,
                              style: u.attr(Ce) || null,
                              class: u.attr($) || null
                            },
                            r = u.attr(c.attr).attr(xe),
                            i = l(ft, u.attr(ft) || u.attr(ft, f + "-" + +new Date).attr(ft)),
                            a = e.extend({}, u.data()),
                            y = l(ue, c.images || []),
                            g = l(je, c.stitched),
                            v = !y.length || g,
                            M = l(ve, c.responsive && (!!m || !v)),
                            L = l(Ne, {}),
                            k = c.loops,
                            Y = c.orbital,
                            w = c.revolution,
                            D = c.rows,
                            S = l(Q, x(c.footage, c.frames)),
                            j = (l(De, c.spacing), l(Re, +u.attr(Re) || u.width())),
                            H = l(ie, +u.attr(ie) || u.height()),
                            E = l(we, c.shy),
                            O = l(re, Y && S || D <= 1 && y.length || c.frames),
                            q = D > 1 || Y,
                            fe = (l(Me, At("x", w) || g / 2 || 2 * j), l(Le, q ? At("y", w) || (D > 3 ? H : H / (5 - D)) : 0), D = g ? 1 : T(O / S), l(Ee, g - (k ? 0 : j)), l(He, 0), Ft(i + c.suffix)),
                            Ae = u.attr($),
                            ze = Ae ? Ae + at : it,
                            $e = e(St(dt), {
                              id: fe.substr(1),
                              class: ze + at + _ + at + b + "0"
                            }),
                            qe = u.wrap($e.addClass(c.klass)).addClass(f);
                          h.push(function(e) {
                            return s.instances.push(e[0]) && e
                          }(qe)[0]), $e = qe.parent().bind(lt.instance);
                          l(oe, y.length ? it : c.image || r.replace(s.re.image, "$1" + c.suffix + ".$2")), l(I, e(St(dt), {
                            class: p
                          }).appendTo("body")), l(C, e()), l(R, []), l(te, null), l(ee, null), l(ke, c.row), l(We, 0), l(Ye, D), l(be, c.rowlock), l(ne, c.framelock), l(K, l(X, l(Z, 0))), l(N, 1 / O), l(Se, fe), l(W, l(Te, c.speed) < 0), l(de, !1), l(Fe, 0), l(Ie, c.vertical), l(_e, 0), l(G, Ot(1, !c.cw && !g)), l(U, {}), l(B, !1), l(V, l(J, 0)), l(le, l(ae, 0)), l(ye, !1), l(ge, !1), l(ce, !1), l(F, c.brake), l(z, !!Y), l(Oe, c.tempo / (s.lazy ? c.laziness : 1)), l(he, -1), l(Pe, -1), l(A, c.annotations || $e.unbind(jt(A)) && {}), l(pe, 1), l(P, {
                            attr: n,
                            data: a
                          }), c.steppable || $e.unbind("up.steppable"), c.indicator || $e.unbind(".indicator"), Gt(it, {
                            overflow: se,
                            position: "relative"
                          }), M || Gt(it, {
                            width: j,
                            height: H
                          }), M && e.each(Mt, function(e, t) {
                            L[t] = d(t)
                          }), Gt(st + at + jt(f), {
                            display: ut
                          }), Gt(jt(p), {
                            position: "fixed",
                            left: Nt(-100),
                            top: Nt(-100)
                          }, !0), Gt(jt(p) + at + _t, {
                            position: ot,
                            width: 10,
                            height: 10
                          }, !0), o.bind(lt.pool), u.trigger(E ? "prepare" : "setup")
                        }
                      },
                      instance: {
                        teardown: function(n) {
                          var r, l = u.data(P);
                          u.parent().unbind(lt.instance), d(we) ? u.parent().unbind(q, Tt) : d(Ce).remove() && d(C).unbind(ze), d(I).empty(), clearTimeout(i), clearTimeout(a), e(t).unbind(rt, rn), e(t).unbind(ze), o.unbind(lt.pool), ln.unbind($e), u.siblings().unbind(ze).remove(), en(), u.removeAttr("onloaded"), r = u.unbind(ze).removeData().unwrap().attr(l.attr).data(l.data), s.instances = s.instances.not(Ft(r.attr(ft))), u.attr(Ce) == it && u.removeAttr(Ce)
                        },
                        setup: function(n) {
                          var i = u.parent().append(Vt()),
                            a = l(C, e(c.area || i)),
                            s = c.rows > 1,
                            o = c.cursor,
                            h = o == ct ? Yt : o || bt,
                            m = o == ct ? wt + at + "!important" : r;

                          function _(e) {
                            return u.trigger("down", [Pt(e).clientX, Pt(e).clientY, e]) && e.give
                          }
                          Gt(at + jt(f), {
                            MozUserSelect: yt,
                            WebkitUserSelect: yt,
                            MozTransform: "translateZ(0)"
                          }), u.unbind(q, Tt), a.bind(tt, _).bind(c.clickfree ? Ve : Ue, _).bind(c.wheelable ? Xe : null, function(e, t) {
                            return !t || u.trigger("wheel", [t, e]) && e.give
                          }).bind(Be, function() {
                            return !1
                          }), Gt(it, {
                            cursor: Ht(h)
                          }), Gt(jt(k), {
                            cursor: "wait"
                          }), Gt(jt(L) + st + jt(L) + " *", {
                            cursor: Ht(m || h)
                          }, !0), d(ve) && (Gt(at + jt(f), {
                            width: "100%",
                            height: O
                          }), e(t).bind(rt, rn)), c.hint && a.attr("title", c.hint), c.indicator && i.append(Jt("x")), s && c.indicator && i.append(Jt("y")), c.monitor && i.append(Ut = e(St(dt), {
                            class: v
                          })) && Gt(at + jt(v), {
                            position: ot,
                            left: 0,
                            top: 0
                          })
                        },
                        preload: function(t) {
                          var n = u.parent(),
                            r = d(ue),
                            i = !r.length,
                            a = s.preload[c.preload] || s.preload[s.def.preload],
                            o = i ? [d(oe)] : a(r.slice(0), c, d),
                            h = (o.length, l(_e, i ? .5 : 0), 0),
                            m = d(I).empty(),
                            f = [];
                          for (n.addClass(k), l(Ce, d(Ce) || e("<" + Ce + ' type="text/css">' + Gt.rules.join("\n") + "</" + Ce + ">").prependTo(ht)), l(de, !0), u.trigger("stop"), c.responsive && an(), u.trigger("resize", !0); o.length;) {
                            var _ = s.substitute(c.path + o.shift(), d);
                            e(St(_t)).data(xe, _).appendTo(m).bind("load error abort", function(e) {
                              return "load" != e.type && u.trigger(e.type), !!n.parents(mt).length && u.trigger("preloaded") && p() && !1
                            }), f.push(_)
                          }

                          function p() {
                            var e = m.children(":not([src]):first");
                            return e.attr(xe, e.data(xe))
                          }
                          setTimeout(function() {
                            for (; ++h < s.concurrent_requests;) p()
                          }, 0), l(R, f), l(we, !1)
                        },
                        preloaded: function(e) {
                          var t = d(ue).length || 1,
                            n = l(_e, x(d(_e) + 1, t));
                          if (1 === n) u.trigger("frameChange", [r, d(te)]);
                          n === t && (u.parent().removeClass(k), u.trigger("loaded"))
                        },
                        loaded: function(e) {
                          d(ue).length > 1 || u.css({
                            backgroundImage: Et(s.substitute(c.path + d(oe), d))
                          }).attr({
                            src: Ht(kt)
                          }), d(je) && u.attr({
                            src: Ht(kt)
                          }), d(ge) || l(Fe, c.velocity || 0), l(de, !1), pt = !0
                        },
                        prepare: function(e) {
                          u.css("display", ut).parent().one(q, Tt)
                        },
                        opening: function(e) {
                          if (!c.opening) return u.trigger("openingDone");
                          l(ce, !0), l(Ae, !d(Te));
                          var t = c.entry || c.speed,
                            n = d(ee),
                            r = c.opening;
                          l(ee, n - t * r), l(he, T(r * xt(Oe)))
                        },
                        openingDone: function(n) {
                          l(fe, !1), l(ce, !1);
                          var r = Ze + jt(ce);
                          o.unbind(r, lt.pool[r]), c.orientable && e(t).bind(qe, function(e) {
                            return u.trigger("orient", [Wt(e).alpha, Wt(e).beta, Wt(e).gamma, e]) && e.give
                          }), c.delay > 0 ? i = setTimeout(function() {
                            u.trigger("play")
                          }, 1e3 * c.delay) : u.trigger("play")
                        },
                        play: function(e, t) {
                          t = t ? l(Te, t) : d(Te) * Ot(1, d(W));
                          var n = c.duration,
                            r = (n && l(Pe, T(n * xt(Oe))), l(W, t < 0), l(fe, !!t));
                          l(Ae, !r);
                          It()
                        },
                        reach: function(e, t, n) {
                          if (t != d(te)) {
                            var r = d(re),
                              i = (l(ke, T(t / r)), l(K, d(te))),
                              a = (t = l(X, t), l(Z, s.math.distance(i, t, r)));
                            n = j(n || d(Te)) * Ot(1, a < 0);
                            u.trigger("play", n)
                          }
                        },
                        pause: function(e) {
                          Rt()
                        },
                        stop: function(e) {
                          var t = l(Ae, !0);
                          l(fe, !t)
                        },
                        down: function(t, n, i, a) {
                          if ((c.clickfree || !a || a.button === r || a.button == Dt) && c.draggable) {
                            l(B, d(te));
                            var s = c.clickfree,
                              o = (l(Fe, 0), s ? d(C) : ln);
                            Zt = sn(d(Me), n, i);
                            Rt(), en(), $t = 0, e(mt, ln).addClass(L), o.bind(nt + at + Ge, function(e) {
                              return u.trigger("pan", [Pt(e).clientX, Pt(e).clientY, e]) && e.give
                            }).bind(et + at + Qe, h).bind(s ? Je : Ke, h)
                          }

                          function h(e) {
                            return u.trigger("up", [e]) && e.give
                          }
                        },
                        up: function(t, n) {
                          l(B, !1), l(ye, !1);
                          var r = c.throwable,
                            i = j(tn[0] + tn[1]) / 60,
                            a = l(Fe, r ? !0 === r ? i : x(r, i) : 0);
                          Ct = a ? 1 : 0;
                          Rt(), en(), e(mt, ln).removeClass(L), (c.clickfree ? d(C) : ln).unbind($e)
                        },
                        pan: function(e, t, n, r) {
                          if (c.draggable && on) {
                            on = !1, Rt();
                            var i = c.rows,
                              a = c.orbital,
                              o = !d(ye) && i <= 1 && !a && c.scrollable,
                              u = {
                                x: t - Zt.x,
                                y: n - Zt.y
                              },
                              h = {
                                x: j(u.x),
                                y: j(u.y)
                              };
                            if (r && o && h.x < h.y) return r.give = !0;
                            if (h.x > 0 || h.y > 0) {
                              r && (r.give = !1), $t = S(h.x, h.y), Zt = {
                                x: t,
                                y: n
                              };
                              var m = d(Me),
                                f = d(U),
                                _ = d(Ie);
                              if (!d(ne)) {
                                var p = l(ee, nn(_ ? n - f.y : t - f.x, d(V), m, d(le), d(ae), d(G), _ ? n - f.y : t - f.x)),
                                  y = (l(ye, d(ye) || d(te) != d(B)), Qt(_ ? u.y : u.x || 0));
                                y && l(W, y < 0)
                              }
                              if (a && d(z)) _ = l(Ie, j(n - f.y) > j(t - f.x)), f = sn(m, t, n);
                              if (i > 1 && !d(be)) {
                                var g = d(Le),
                                  v = d(J),
                                  M = -v * g;
                                l(We, s.math.envelope(n - f.y, v, g, M, M + g, -1))
                              }
                              if (!(p % 1 || c.loops)) f = sn(m, t, n)
                            }
                          }
                        },
                        wheel: function(e, t, n) {
                          if (t) {
                            qt = !0;
                            var r = Ot(r = T(Y.sqrt(j(t)) / 2), t > 0),
                              i = .0833 * d(Me);
                            sn(i), r && l(W, r < 0), l(Fe, 0), l(ee, nn(r, d(V), i, d(le), d(ae), d(G)));
                            n && n.preventDefault(), n && (n.give = !1), Rt(), u.trigger("up", [n])
                          }
                        },
                        orient: function(e, t, r, i, a) {
                          if (on && !n) {
                            Bt = !0;
                            var s = t / 360;
                            fraction = l(ee, +(c.stitched || c.cw ? 1 - s : s).toFixed(2)), on = !1
                          }
                        },
                        fractionChange: function(e, t, n) {
                          if (t === r) {
                            var i = 1 + D(n / d(N)),
                              a = c.rows > 1,
                              s = c.orbital;
                            l(z, !!s && (i <= s || i >= d(Q) - s + 2));
                            if (a) i = i + (d(ke) - 1) * d(re);
                            i = l(te, i)
                          }
                        },
                        tierChange: function(e, t, n) {
                          if (t === r) {
                            var i = l(ke, w(E(n, 1, c.rows))),
                              a = d(re),
                              s = d(te) % a || a;
                            s = l(te, s + i * a - a)
                          }
                        },
                        rowChange: function(e, t, n) {
                          if (t === r) un(We, r, n, c.rows)
                        },
                        frameChange: function(e, t, n) {
                          if (t === r) {
                            this.className = this.className.replace(s.re.frame_klass, b + n);
                            var i = d(re),
                              a = c.rows,
                              o = c.path,
                              h = n % i || i,
                              m = ((n - h) / i + 1 - 1) / (a - 1),
                              f = d(ke),
                              _ = (a ? un(We, m, f, a) : d(We), un(ee, r, h, i)),
                              p = d(Q);
                            if (c.orbital && d(Ie)) n = (n = c.inversed ? p + 1 - n : n) + p;
                            var y = d(je),
                              g = d(ue);
                            if (!g.length || y) {
                              var v = d(De),
                                M = d(Re),
                                L = d(ie);
                              if (y) {
                                var k = l(He, w(E(_, 0, d(Ee))) % y),
                                  Y = a <= 1 ? 0 : (L + v) * (a - f),
                                  T = (C = [Nt(-k), Nt(-Y)], g.length > 1 && g[f - 1]),
                                  x = s.substitute(o + T, d);
                                T && u.css("backgroundImage").search(x) < 0 && u.css({
                                  backgroundImage: Et(x)
                                })
                              } else var S = c.horizontal,
                                j = (j = n % p - 1) < 0 ? p - 1 : j,
                                H = (D((n - .1) / p) + (a > 1 ? 0 : d(W) ? 0 : c.directional ? d(Ye) : 0)) * ((S ? L : M) + v),
                                A = j * ((S ? M : L) + v),
                                C = g.length ? [0, 0] : S ? [Nt(-A), Nt(-H)] : [Nt(-H), Nt(-A)];
                              u.css({
                                backgroundPosition: C.join(at)
                              })
                            } else d(ve) && an(), d(_e) && u.attr({
                              src: zt(s.substitute(o + g[n - 1], d))
                            })
                          }
                        },
                        "frameChange.reach": function(e, t, n) {
                          if (d(X) && t === r) {
                            var i = s.math.distance(d(K), n, d(re));
                            j(i) >= j(d(Z)) && (l(te, l(X)), l(X, l(Z, l(K, 0))), u.trigger("stop"))
                          }
                        },
                        "imageChange imagesChange": function(e, t, n) {
                          u.trigger("preload")
                        },
                        "fractionChange.indicator": function(e, t, n) {
                          if (c.indicator && t === r) {
                            var i = c.indicator,
                              a = c.orbital,
                              s = a && d(Ie) ? d(ie) : d(Re),
                              o = a ? d(Q) : c.images.length || d(re),
                              u = T(s / o),
                              l = w(E(n, 0, s = s - u));
                            l = !c.cw || d(je) ? l : s - l, Jt.$x.css(d(Ie) ? {
                              left: 0,
                              top: Nt(l),
                              bottom: O,
                              width: i,
                              height: u
                            } : {
                              bottom: 0,
                              left: Nt(l),
                              top: O,
                              width: u,
                              height: i
                            })
                          }
                        },
                        "tierChange.indicator": function(e, t, n) {
                          if (c.rows > 1 && c.indicator && t === r) {
                            var i = d(ie),
                              a = c.indicator,
                              s = T(i / c.rows),
                              o = w(n * (i = i - s));
                            Jt.$y.css({
                              left: 0,
                              top: o,
                              width: a,
                              height: s
                            })
                          }
                        },
                        "setup.annotations": function(t) {
                          var n = u.parent();
                          e.each(d(A), function(t, r) {
                            var i = (i = (i = typeof r.node == vt ? e(r.node) : r.node || {}).jquery ? i : e(St(dt), i)).attr({
                                id: t
                              }).addClass(M),
                              a = r.image ? e(St(_t), r.image) : e(),
                              s = r.link ? e(St("a"), r.link).click(function() {
                                u.trigger("up.annotations", {
                                  target: s
                                })
                              }) : e();
                            Gt(Ft(t), {
                              display: yt,
                              position: ot
                            }, !0), r.image || r.link && i.append(s), r.link || r.image && i.append(a), r.link && r.image && i.append(s.append(a)), i.appendTo(n)
                          })
                        },
                        "prepare.annotations": function(t) {
                          e.each(d(A), function(t, n) {
                            e(Ft(t)).hide()
                          })
                        },
                        "frameChange.annotations": function(t, n, i) {
                          if (d(_e) && n === r) {
                            var a = d(Re),
                              s = d(je),
                              o = d(He);
                            e.each(d(A), function(t, n) {
                              var i = e(Ft(t)),
                                u = n.start || 1,
                                l = n.end,
                                c = c || d(te),
                                h = c - 1,
                                m = !!n.at && "+" == n.at[h],
                                f = (h = n.at ? h : h - u + 1, typeof n.x != gt ? n.x : n.x[h]),
                                _ = typeof n.y != gt ? n.y : n.y[h],
                                p = f !== r && _ !== r && (n.at ? m : h >= 0 && (!l || h <= l - u));
                              if (s) {
                                var y = f > s - a && o >= 0 && o < a;
                                f = f < a && o > s - a ? f + s : f, f = (f = y ? f - s : f) - o
                              }
                              if (d(ve)) {
                                var g = d(pe);
                                f = f && f * g, _ = _ && _ * g
                              }
                              var v = {
                                display: p ? ut : yt,
                                left: Nt(f),
                                top: Nt(_)
                              };
                              i.css(v)
                            })
                          }
                        },
                        "up.annotations": function(t, n) {
                          if (!($t > 10 || qt)) {
                            var r = e(n.target);
                            (r.is("a") ? r : r.parents("a")).attr("href") && ($t = 10)
                          }
                        },
                        "up.steppable": function(e, t) {
                          $t || qt || u.trigger(d(U).x - u.offset().left > .5 * d(Re) ? "stepRight" : "stepLeft")
                        },
                        "stepLeft stepRight": function(e) {
                          Rt()
                        },
                        stepLeft: function(e) {
                          l(W, !1), l(ee, d(ee) - d(N) * d(G))
                        },
                        stepRight: function(e) {
                          l(W, !0), l(ee, d(ee) + d(N) * d(G))
                        },
                        stepUp: function(e) {
                          l(ke, d(ke) - 1)
                        },
                        stepDown: function(e) {
                          l(ke, d(ke) + 1)
                        },
                        resize: function(e, t) {
                          if (!d(de) || t) {
                            var n = d(je),
                              i = d(De),
                              a = d(ie),
                              s = !d(ue).length || n,
                              o = c.rows || 1,
                              l = d(ue).length ? n ? Nt(n) + at + Nt(a) : r : n && Nt(n) + at + Nt((a + i) * o - i) || Nt((d(Re) + i) * d(Q) - i) + at + Nt((a + i) * d(Ye) * o * (c.directional ? 2 : 1) - i);
                            u.css({
                              height: s ? Nt(a) : null,
                              backgroundSize: l || null
                            }), t || u.trigger("imagesChange")
                          }
                        },
                        "setup.fu": function(e) {
                          l(te, c.frame + (d(ke) - 1) * d(re));
                          u.trigger("preload")
                        },
                        "wheel.fu": function() {
                          qt = !1
                        },
                        "clean.fu": function() {
                          u.trigger("teardown")
                        },
                        "loaded.fu": function() {
                          u.trigger("opening")
                        }
                      },
                      pool: {
                        "tick.reel.preload": function(e) {
                          if ((pt || d(de)) && !d(we)) {
                            var t = d(Re),
                              n = H(Vt.$.css(Re)),
                              r = d(ue).length || 1,
                              i = w(1 / r * d(_e) * t);
                            Vt.$.css({
                              width: n + (i - n) / 3 + 1
                            }), d(_e) === r && n > t - 1 && (pt = !1, Vt.$.fadeOut(300, function() {
                              Vt.$.css({
                                opacity: 1,
                                width: 0
                              })
                            }))
                          }
                        },
                        "tick.reel": function(e) {
                          if (!d(we)) {
                            var t = d(Fe),
                              r = xt(Oe),
                              i = c.monitor;
                            if (s.intense || !Kt()) {
                              if (Ct) {
                                var a = t - d(F) / r * Ct;
                                t = l(Fe, a > .1 ? a : Ct = n = 0)
                              }
                              if (i && Ut.text(d(i)), t && Ct++, n && n++, Qt(0), on = !0, n && !t) return Lt(e);
                              if (d(B)) return Lt(e, Rt());
                              if (!(d(he) > 0)) {
                                if (!c.loops && c.rebound) n || d(ee) % 1 ? Xt = 0 : Xt++, Xt >= 1e3 * c.rebound / r && l(W, !d(W));
                                var o = d(G) * Ot(1, d(W)),
                                  h = d(Pe),
                                  m = (d(fe) && !Bt && h ? j(d(Te)) + t : t) / xt(Oe);
                                l(ee, d(ee) - m * o);
                                !(h = c.duration ? h > 0 && l(Pe, h - 1) : h) && d(fe) && u.trigger("stop")
                              }
                            }
                          }
                        },
                        "tick.reel.opening": function(e) {
                          if (d(ce)) {
                            var t = (c.entry || c.speed) / xt(Oe) * (c.cw ? -1 : 1),
                              n = l(he, d(he) - 1);
                            l(ee, d(ee) + t);
                            n || u.trigger("openingDone")
                          }
                        }
                      }
                    },
                    pt = !1,
                    Lt = function(e, t) {
                      return e.stopImmediatePropagation() || t
                    },
                    Tt = function() {
                      u.trigger("setup")
                    },
                    Ct = 0,
                    It = function() {
                      return n = 0
                    },
                    Rt = function() {
                      return clearTimeout(i), o.unbind(Ze + jt(ce), lt.pool[Ze + jt(ce)]), l(he, 0), l(ge, !0), n = -c.timeout * xt(Oe)
                    },
                    $t = 0,
                    qt = !1,
                    Bt = !1,
                    Ut = e(),
                    Vt = function() {
                      return Gt(at + jt(g), {
                        position: ot,
                        left: 0,
                        bottom: 0,
                        height: c.preloader,
                        overflow: se,
                        backgroundColor: "#000"
                      }), Vt.$ = e(St(dt), {
                        class: g
                      })
                    },
                    Jt = function(t) {
                      return Gt(at + jt(y) + jt(t), {
                        position: ot,
                        width: 0,
                        height: 0,
                        overflow: se,
                        backgroundColor: "#000"
                      }), Jt["$" + t] = e(St(dt), {
                        class: y + at + t
                      })
                    },
                    Gt = function(t, n, r) {
                      var i, a, s = r ? it : d(Se);
                      t = t.replace(/^/, s).replace(st, st + s);
                      return Gt.rules.push(t + (i = n, a = [], e.each(i, function(e, t) {
                        a.push(e.replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + Nt(t) + ";")
                      }), "{" + a.join(it) + "}")) && n
                    },
                    Kt = function() {
                      var n = d(ie),
                        r = d(Re),
                        i = u[0].getBoundingClientRect();
                      return i.top < -n || i.left < -r || i.right > r + e(t).width() || i.bottom > n + e(t).height()
                    },
                    Xt = 0,
                    Zt = {
                      x: 0,
                      y: 0
                    },
                    Qt = function(e) {
                      return tn.push(e) && tn.shift() && e
                    },
                    en = function() {
                      return tn = [0, 0]
                    },
                    tn = en(),
                    nn = c.graph || s.math[c.loops ? "hatch" : "envelope"],
                    rn = (s.normal, function() {
                      clearTimeout(a), a = setTimeout(an, s.resize_gauge)
                    }),
                    an = function() {
                      if (u.width() != d(Re)) {
                        var t = d(Ne),
                          n = l(pe, u.width() / t.width);
                        e.each(t, function(e, t) {
                          l(e, w(t * n))
                        }), u.trigger("resize")
                      }
                    },
                    sn = function(e, t, n) {
                      var i = l(V, d(ee)),
                        a = (l(J, d(We)), c.loops);
                      l(le, a ? 0 : -i * e), l(ae, a ? e : e - i * e);
                      return t !== r && l(U, {
                        x: t,
                        y: n
                      }) || r
                    },
                    on = !0,
                    un = function(e, t, n, i) {
                      if (i) {
                        var a = d(e) || 0,
                          s = t !== r ? t : (n - 1) / (i - 1);
                        s = e != ee ? s : x(s, .9999);
                        return t = +j(a - s).toFixed(8) >= +(1 / (i - 1)).toFixed(8) ? l(e, s) : t || a
                      }
                    },
                    ln = o;
                  try {
                    o[0] != top.document && (ln = o.add(top.document))
                  } catch (e) {}
                  var dn;
                  top === self ? e() : e("iframe", ln.last()).each(function() {
                    try {
                      if (e(this).contents().find(ht).html() == e(ht).html()) return (dn = e(this)) && !1
                    } catch (e) {}
                  });
                  Gt.rules = [], lt.setup()
                }), a = a || function e() {
                  var t = +new Date,
                    n = xt(Oe);
                  return n ? (o.trigger(Ze), s.cost = (+new Date + s.cost - t) / 2, a = setTimeout(e, S(4, 1e3 / n - s.cost))) : a = null
                }(), e(h)
              },
              unreel: function() {
                return this.trigger("teardown")
              }
            },
            re: {
              image: /^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,
              ua: [/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i, /(webkit)\/([\d.]+)/i, /(mozilla)\/([\d.]+)/i],
              array: / *, */,
              lazy_agent: /\(iphone|ipod|android|fennec|blackberry/i,
              frame_klass: /frame-\d+/,
              substitution: /(@([A-Z]))/g,
              no_match: /^(undefined|)$/,
              sequence: /(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/
            },
            cdn: "http://code.vostrel.net/",
            math: {
              envelope: function(e, t, n, r, i, a, s) {
                return t + Ct(r, i, -e * a) / n
              },
              hatch: function(e, t, n, r, i, a, s) {
                var o = t + -(e = (e < r ? i : 0) + e % i) * a / n;
                return o - D(o)
              },
              interpolate: function(e, t, n) {
                return t + e * (n - t)
              },
              distance: function(e, t, n) {
                var r = n / 2,
                  i = t - e;
                return i < -r ? i + n : i > r ? i - n : i
              }
            },
            preload: {
              fidelity: function(e, t, n) {
                var r = t.orbital,
                  i = r ? 2 : t.rows || 1,
                  a = n(r ? Q : re),
                  s = (t.row - 1) * a,
                  o = (new Array).concat(e),
                  u = new Array(e.length + 1);
                return l(i < 2 ? [] : o.slice(s, s + a), 1, s).concat(l(o, i, 0));

                function l(e, n, r) {
                  if (!e.length) return [];
                  for (var i = [], a = 4 * n, s = t.frame, o = e.length, l = !0, d = o / a, c = 0; c < a; c++) m(s + w(c * d));
                  for (; d > 1;) {
                    c = 0;
                    var h = i.length;
                    for (d = d / 2, l = !l; c < h; c++) m(i[c] + (l ? 1 : -1) * w(d))
                  }
                  for (c = 0; c <= o; c++) m(c);
                  for (c = 0; c < i.length; c++) i[c] = e[i[c] - 1];
                  return i;

                  function m(e) {
                    for (; !(e >= 1 && e <= o);) e += e < 1 ? +o : -o;
                    return u[r + e] || (u[r + e] = !!i.push(e))
                  }
                }
              },
              linear: function(e, t, n) {
                return e
              }
            },
            substitute: function(e, t) {
              return e.replace(s.re.substitution, function(e, n, r) {
                return "function" == typeof s.substitutes[r] ? s.substitutes[r](t) : Lt[r] ? t(Lt[r]) : n
              })
            },
            substitutes: {
              T: function(e) {
                return +new Date
              }
            },
            normal: {
              fraction: function(e, t) {
                return null === e ? e : t[me].loops ? e - D(e) : Ct(0, 1, e)
              },
              tier: function(e, t) {
                return null === e ? e : Ct(0, 1, e)
              },
              row: function(e, t) {
                return null === e ? e : w(Ct(1, t[me].rows, e))
              },
              frame: function(e, t) {
                if (null === e) return e;
                var n = t[me],
                  r = t[re] * (n.orbital ? 2 : n.rows || 1),
                  i = w(n.loops ? e % r || r : Ct(1, r, e));
                return i < 0 ? i + r : i
              },
              images: function(e, t) {
                var n = s.re.sequence.exec(e);
                return n ? s.sequence(n, t[me]) : e
              }
            },
            sequence: function(e, t) {
              if (e.length <= 1) return t.images;
              for (var n = [], r = t.orbital, i = e[1], a = e[2], o = e[4], u = (o = s.re.no_match.test(o + it) ? 1 : +o, r ? 2 : t.rows || 1), l = r ? t.footage : t.stitched ? 1 : t.frames, d = +(e[5] || u * l) - o, c = +e[7] || 1, h = 0; h <= d;) n.push(i.replace(a, It(o + h + it, a.length, "0"))), h += c;
              return n
            },
            instances: e(),
            leader: xt,
            resize_gauge: 300,
            concurrent_requests: 4,
            cost: 0
          },
          o = e(n),
          u = navigator.userAgent,
          l = s.re.ua[0].exec(u) || s.re.ua[1].exec(u) || s.re.ua[2].exec(u),
          d = +l[2].split(".").slice(0, 2).join("."),
          c = "MSIE" == l[1],
          h = !(c && d < 8),
          m = !(c && d < 9),
          f = "reel",
          _ = f + "-overlay",
          p = f + "-cache",
          y = f + "-indicator",
          g = f + "-preloader",
          v = f + "-monitor",
          M = f + "-annotation",
          L = f + "-panning",
          k = f + "-loading",
          b = "frame-",
          Y = Math,
          w = Y.round,
          D = Y.floor,
          T = Y.ceil,
          x = Y.min,
          S = Y.max,
          j = Y.abs,
          H = parseInt,
          E = s.math.interpolate,
          A = "annotations",
          C = "area",
          O = "auto",
          P = "backup",
          W = "backwards",
          N = "bit",
          F = "brake",
          I = "cache",
          R = I + "d",
          z = "center",
          $ = "class",
          q = "click",
          B = q + "ed",
          U = B + "_location",
          V = B + "_on",
          J = B + "_tier",
          G = "cwish",
          K = "departure",
          X = "destination",
          Z = "distance",
          Q = "footage",
          ee = "fraction",
          te = "frame",
          ne = "framelock",
          re = "frames",
          ie = "height",
          ae = "hi",
          se = "hidden",
          oe = "image",
          ue = "images",
          le = "lo",
          de = "loading",
          ce = "opening",
          he = ce + "_ticks",
          me = "options",
          fe = "playing",
          _e = "preloaded",
          pe = "ratio",
          ye = "reeling",
          ge = "reeled",
          ve = "responsive",
          Me = "revolution",
          Le = "revolution_y",
          ke = "row",
          be = "rowlock",
          Ye = "rows",
          we = "shy",
          De = "spacing",
          Te = "speed",
          xe = "src",
          Se = "stage",
          je = "stitched",
          He = je + "_shift",
          Ee = je + "_travel",
          Ae = "stopped",
          Ce = "style",
          Oe = "tempo",
          Pe = "ticks",
          We = "tier",
          Ne = "truescale",
          Fe = "velocity",
          Ie = "vertical",
          Re = "width",
          ze = jt(f),
          $e = jt("pan") + ze,
          qe = "deviceorientation" + ze,
          Be = "dragstart" + ze,
          Ue = "mousedown" + ze,
          Ve = "mouseenter" + ze,
          Je = "mouseleave" + $e,
          Ge = "mousemove" + $e,
          Ke = "mouseup" + $e,
          Xe = "mousewheel" + ze,
          Ze = "tick" + ze,
          Qe = "touchcancel" + $e,
          et = "touchend" + $e,
          tt = "touchstart" + ze,
          nt = "touchmove" + $e,
          rt = "resize" + ze,
          it = "",
          at = " ",
          st = ",",
          ot = "absolute",
          ut = "block",
          lt = "@CDN@",
          dt = "div",
          ct = "hand",
          ht = "head",
          mt = "html",
          ft = "id",
          _t = "img",
          pt = "jquery." + f,
          yt = "none",
          gt = "object",
          vt = "string",
          Mt = [Re, ie, De, Me, Le, je, He, Ee],
          Lt = {
            W: Re,
            H: ie
          },
          kt = h ? "data:image/gif;base64,R0lGODlh" + "CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7" : lt + "blank.gif",
          bt = Et(lt + pt + ".cur") + st + "move",
          Yt = Et(lt + pt + "-drag.cur") + st + "move",
          wt = Et(lt + pt + "-drag-down.cur") + st + "move",
          Dt = (s.lazy = s.re.lazy_agent.test(u), c && d < 9 ? 1 : 0),
          Tt = e.cleanData;
        e.cleanData = function(t) {
          return e(t).each(function() {
            e(this).triggerHandler("clean")
          }), Tt.apply(this, arguments)
        };
        return e.extend(e.fn, s.fn) && e(s.scan), s
      }

      function xt(e) {
        return s.instances.first().data(e)
      }

      function St(e) {
        return "<" + e + "/>"
      }

      function jt(e) {
        return "." + (e || "")
      }

      function Ht(e) {
        return e.replace(lt, s.cdn)
      }

      function Et(e) {
        return "url('" + zt(e) + "')"
      }

      function At(e, t) {
        return typeof t == gt ? t[e] : t
      }

      function Ct(e, t, n) {
        return S(e, x(t, n))
      }

      function Ot(e, t) {
        return j(e) * (t ? -1 : 1)
      }

      function Pt(e) {
        return e.touch || e.originalEvent.touches && e.originalEvent.touches[0] || e
      }

      function Wt(e) {
        return e.originalEvent
      }

      function Nt(e) {
        return e === r ? 0 : typeof e == vt ? e : e + "px"
      }

      function Ft(e) {
        return "#" + e
      }

      function It(e, t, n) {
        for (; e.length < t;) e = n + e;
        return e
      }

      function Rt(e) {
        return It(e, 2, "0")
      }

      function zt(e) {
        return encodeURI(decodeURI(e))
      }

      function $t(e) {
        return s.re.array.exec(e) ? e.split(s.re.array) : e
      }

      function qt(t) {
        return typeof t == vt ? t : e.each(t, function(e, n) {
          t[e] = n ? +n : r
        })
      }

      function Bt(e) {
        try {
          console.error("[ Reel ] " + e)
        } catch (e) {}
      }
    }(jQuery, window, document)
  }, o = n(145) && (i = [n(2)], !(void 0 !== (a = "function" == typeof(r = s) ? r.apply(t, i) : r) && (e.exports = a), 0)), u = !o && "object" == typeof e && "object" == typeof e.exports && (e.exports = s), !o && !u && s()
}, function(e, t) {
  (function(t) {
    e.exports = t
  }).call(t, {})
}, function(e, t, n) {
  e.exports = n(147)
}, function(e, t, n) {
  "use strict";
  var r = n(1),
    i = n(129),
    a = n(149),
    s = n(3);

  function o(e) {
    var t = new a(e),
      n = i(a.prototype.request, t);
    return r.extend(n, a.prototype, t), r.extend(n, t), n
  }
  var u = o(s);
  u.Axios = a, u.create = function(e) {
    return o(r.merge(s, e))
  }, u.Cancel = n(133), u.CancelToken = n(164), u.isCancel = n(132), u.all = function(e) {
    return Promise.all(e)
  }, u.spread = n(165), e.exports = u, e.exports.default = u
}, function(e, t) {
  function n(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
  }
  e.exports = function(e) {
    return null != e && (n(e) || function(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }(e) || !!e._isBuffer)
  }
}, function(e, t, n) {
  "use strict";
  var r = n(3),
    i = n(1),
    a = n(159),
    s = n(160);

  function o(e) {
    this.defaults = e, this.interceptors = {
      request: new a,
      response: new a
    }
  }
  o.prototype.request = function(e) {
    "string" == typeof e && (e = i.merge({
      url: arguments[0]
    }, arguments[1])), (e = i.merge(r, this.defaults, {
      method: "get"
    }, e)).method = e.method.toLowerCase();
    var t = [s, void 0],
      n = Promise.resolve(e);
    for (this.interceptors.request.forEach(function(e) {
        t.unshift(e.fulfilled, e.rejected)
      }), this.interceptors.response.forEach(function(e) {
        t.push(e.fulfilled, e.rejected)
      }); t.length;) n = n.then(t.shift(), t.shift());
    return n
  }, i.forEach(["delete", "get", "head", "options"], function(e) {
    o.prototype[e] = function(t, n) {
      return this.request(i.merge(n || {}, {
        method: e,
        url: t
      }))
    }
  }), i.forEach(["post", "put", "patch"], function(e) {
    o.prototype[e] = function(t, n, r) {
      return this.request(i.merge(r || {}, {
        method: e,
        url: t,
        data: n
      }))
    }
  }), e.exports = o
}, function(e, t) {
  var n, r, i = e.exports = {};

  function a() {
    throw new Error("setTimeout has not been defined")
  }

  function s() {
    throw new Error("clearTimeout has not been defined")
  }

  function o(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : a
    } catch (e) {
      n = a
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : s
    } catch (e) {
      r = s
    }
  }();
  var u, l = [],
    d = !1,
    c = -1;

  function h() {
    d && u && (d = !1, u.length ? l = u.concat(l) : c = -1, l.length && m())
  }

  function m() {
    if (!d) {
      var e = o(h);
      d = !0;
      for (var t = l.length; t;) {
        for (u = l, l = []; ++c < t;) u && u[c].run();
        c = -1, t = l.length
      }
      u = null, d = !1,
        function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function f(e, t) {
    this.fun = e, this.array = t
  }

  function _() {}
  i.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    l.push(new f(e, t)), 1 !== l.length || d || o(m)
  }, f.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = _, i.addListener = _, i.once = _, i.off = _, i.removeListener = _, i.removeAllListeners = _, i.emit = _, i.prependListener = _, i.prependOnceListener = _, i.listeners = function(e) {
    return []
  }, i.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, i.cwd = function() {
    return "/"
  }, i.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, i.umask = function() {
    return 0
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1);
  e.exports = function(e, t) {
    r.forEach(e, function(n, r) {
      r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
    })
  }
}, function(e, t, n) {
  "use strict";
  var r = n(131);
  e.exports = function(e, t, n) {
    var i = n.config.validateStatus;
    n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t, n, r, i) {
    return e.config = t, n && (e.code = n), e.request = r, e.response = i, e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1);

  function i(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }
  e.exports = function(e, t, n) {
    if (!t) return e;
    var a;
    if (n) a = n(t);
    else if (r.isURLSearchParams(t)) a = t.toString();
    else {
      var s = [];
      r.forEach(t, function(e, t) {
        null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [e]), r.forEach(e, function(e) {
          r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e))
        }))
      }), a = s.join("&")
    }
    return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a), e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1),
    i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  e.exports = function(e) {
    var t, n, a, s = {};
    return e ? (r.forEach(e.split("\n"), function(e) {
      if (a = e.indexOf(":"), t = r.trim(e.substr(0, a)).toLowerCase(), n = r.trim(e.substr(a + 1)), t) {
        if (s[t] && i.indexOf(t) >= 0) return;
        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
      }
    }), s) : s
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1);
  e.exports = r.isStandardBrowserEnv() ? function() {
    var e, t = /(msie|trident)/i.test(navigator.userAgent),
      n = document.createElement("a");

    function i(e) {
      var r = e;
      return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
      }
    }
    return e = i(window.location.href),
      function(t) {
        var n = r.isString(t) ? i(t) : t;
        return n.protocol === e.protocol && n.host === e.host
      }
  }() : function() {
    return !0
  }
}, function(e, t, n) {
  "use strict";
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function i() {
    this.message = "String contains an invalid character"
  }
  i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", e.exports = function(e) {
    for (var t, n, a = String(e), s = "", o = 0, u = r; a.charAt(0 | o) || (u = "=", o % 1); s += u.charAt(63 & t >> 8 - o % 1 * 8)) {
      if ((n = a.charCodeAt(o += .75)) > 255) throw new i;
      t = t << 8 | n
    }
    return s
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1);
  e.exports = r.isStandardBrowserEnv() ? {
    write: function(e, t, n, i, a, s) {
      var o = [];
      o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(i) && o.push("path=" + i), r.isString(a) && o.push("domain=" + a), !0 === s && o.push("secure"), document.cookie = o.join("; ")
    },
    read: function(e) {
      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null
    },
    remove: function(e) {
      this.write(e, "", Date.now() - 864e5)
    }
  } : {
    write: function() {},
    read: function() {
      return null
    },
    remove: function() {}
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1);

  function i() {
    this.handlers = []
  }
  i.prototype.use = function(e, t) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t
    }), this.handlers.length - 1
  }, i.prototype.eject = function(e) {
    this.handlers[e] && (this.handlers[e] = null)
  }, i.prototype.forEach = function(e) {
    r.forEach(this.handlers, function(t) {
      null !== t && e(t)
    })
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var r = n(1),
    i = n(161),
    a = n(132),
    s = n(3),
    o = n(162),
    u = n(163);

  function l(e) {
    e.cancelToken && e.cancelToken.throwIfRequested()
  }
  e.exports = function(e) {
    return l(e), e.baseURL && !o(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
      delete e.headers[t]
    }), (e.adapter || s.adapter)(e).then(function(t) {
      return l(e), t.data = i(t.data, t.headers, e.transformResponse), t
    }, function(t) {
      return a(t) || (l(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
    })
  }
}, function(e, t, n) {
  "use strict";
  var r = n(1);
  e.exports = function(e, t, n) {
    return r.forEach(n, function(n) {
      e = n(e, t)
    }), e
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(133);

  function i(e) {
    if ("function" != typeof e) throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(e) {
      t = e
    });
    var n = this;
    e(function(e) {
      n.reason || (n.reason = new r(e), t(n.reason))
    })
  }
  i.prototype.throwIfRequested = function() {
    if (this.reason) throw this.reason
  }, i.source = function() {
    var e;
    return {
      token: new i(function(t) {
        e = t
      }),
      cancel: e
    }
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    return function(t) {
      return e.apply(null, t)
    }
  }
}, function(e, t) {}]);