!function (e) {
    function t(i) {
        if (n[i])return n[i].exports;
        var o = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "https://js.intercomcdn.com/", t(0)
}([function (e, t, n) {
    e.exports = n(308)
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return e && !("prototype" in e)
    }

    var o, r, a = n(95), s = n(96), c = a.isUndefined;
    c(window.JSON) || (o = window.JSON.stringify, r = window.JSON.parse);
    var l = i(o) && i(Date.prototype.toJSON) && c(String.prototype.toJSON) && c(Number.prototype.toJSON) && c(Boolean.prototype.toJSON) && c(Array.prototype.toJSON), m = i(r);
    e.exports = {stringify: l ? o : s.stringify, parse: m ? r : s.parse}
}, function (e, t, n) {
    var i, o;
    (function () {
        var n = this, r = n._, a = Array.prototype, s = Object.prototype, c = Function.prototype, l = a.push, m = a.slice, u = a.concat, d = s.toString, p = s.hasOwnProperty, h = Array.isArray, f = Object.keys, g = c.bind, v = function (e) {
            return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
        };
        "undefined" != typeof e && e.exports && (t = e.exports = v), t._ = v, v.VERSION = "1.7.0";
        var b = function (e, t, n) {
            if (void 0 === t)return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function (n, i, o) {
                        return e.call(t, n, i, o)
                    };
                case 4:
                    return function (n, i, o, r) {
                        return e.call(t, n, i, o, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        };
        v.iteratee = function (e, t, n) {
            return null == e ? v.identity : v.isFunction(e) ? b(e, t, n) : v.isObject(e) ? v.matches(e) : v.property(e)
        }, v.each = v.forEach = function (e, t, n) {
            if (null == e)return e;
            t = b(t, n);
            var i, o = e.length;
            if (o === +o)for (i = 0; o > i; i++)t(e[i], i, e); else {
                var r = v.keys(e);
                for (i = 0, o = r.length; o > i; i++)t(e[r[i]], r[i], e)
            }
            return e
        }, v.map = v.collect = function (e, t, n) {
            if (null == e)return [];
            t = v.iteratee(t, n);
            for (var i, o = e.length !== +e.length && v.keys(e), r = (o || e).length, a = Array(r), s = 0; r > s; s++)i = o ? o[s] : s, a[s] = t(e[i], i, e);
            return a
        };
        var y = "Reduce of empty array with no initial value";
        v.reduce = v.foldl = v.inject = function (e, t, n, i) {
            null == e && (e = []), t = b(t, i, 4);
            var o, r = e.length !== +e.length && v.keys(e), a = (r || e).length, s = 0;
            if (arguments.length < 3) {
                if (!a)throw new TypeError(y);
                n = e[r ? r[s++] : s++]
            }
            for (; a > s; s++)o = r ? r[s] : s, n = t(n, e[o], o, e);
            return n
        }, v.reduceRight = v.foldr = function (e, t, n, i) {
            null == e && (e = []), t = b(t, i, 4);
            var o, r = e.length !== +e.length && v.keys(e), a = (r || e).length;
            if (arguments.length < 3) {
                if (!a)throw new TypeError(y);
                n = e[r ? r[--a] : --a]
            }
            for (; a--;)o = r ? r[a] : a, n = t(n, e[o], o, e);
            return n
        }, v.find = v.detect = function (e, t, n) {
            var i;
            return t = v.iteratee(t, n), v.some(e, function (e, n, o) {
                return t(e, n, o) ? (i = e, !0) : void 0
            }), i
        }, v.filter = v.select = function (e, t, n) {
            var i = [];
            return null == e ? i : (t = v.iteratee(t, n), v.each(e, function (e, n, o) {
                t(e, n, o) && i.push(e)
            }), i)
        }, v.reject = function (e, t, n) {
            return v.filter(e, v.negate(v.iteratee(t)), n)
        }, v.every = v.all = function (e, t, n) {
            if (null == e)return !0;
            t = v.iteratee(t, n);
            var i, o, r = e.length !== +e.length && v.keys(e), a = (r || e).length;
            for (i = 0; a > i; i++)if (o = r ? r[i] : i, !t(e[o], o, e))return !1;
            return !0
        }, v.some = v.any = function (e, t, n) {
            if (null == e)return !1;
            t = v.iteratee(t, n);
            var i, o, r = e.length !== +e.length && v.keys(e), a = (r || e).length;
            for (i = 0; a > i; i++)if (o = r ? r[i] : i, t(e[o], o, e))return !0;
            return !1
        }, v.contains = v.include = function (e, t) {
            return null == e ? !1 : (e.length !== +e.length && (e = v.values(e)), v.indexOf(e, t) >= 0)
        }, v.invoke = function (e, t) {
            var n = m.call(arguments, 2), i = v.isFunction(t);
            return v.map(e, function (e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, v.pluck = function (e, t) {
            return v.map(e, v.property(t))
        }, v.where = function (e, t) {
            return v.filter(e, v.matches(t))
        }, v.findWhere = function (e, t) {
            return v.find(e, v.matches(t))
        }, v.max = function (e, t, n) {
            var i, o, r = -(1 / 0), a = -(1 / 0);
            if (null == t && null != e) {
                e = e.length === +e.length ? e : v.values(e);
                for (var s = 0, c = e.length; c > s; s++)i = e[s], i > r && (r = i)
            } else t = v.iteratee(t, n), v.each(e, function (e, n, i) {
                o = t(e, n, i), (o > a || o === -(1 / 0) && r === -(1 / 0)) && (r = e, a = o)
            });
            return r
        }, v.min = function (e, t, n) {
            var i, o, r = 1 / 0, a = 1 / 0;
            if (null == t && null != e) {
                e = e.length === +e.length ? e : v.values(e);
                for (var s = 0, c = e.length; c > s; s++)i = e[s], r > i && (r = i)
            } else t = v.iteratee(t, n), v.each(e, function (e, n, i) {
                o = t(e, n, i), (a > o || o === 1 / 0 && r === 1 / 0) && (r = e, a = o)
            });
            return r
        }, v.shuffle = function (e) {
            for (var t, n = e && e.length === +e.length ? e : v.values(e), i = n.length, o = Array(i), r = 0; i > r; r++)t = v.random(0, r), t !== r && (o[r] = o[t]), o[t] = n[r];
            return o
        }, v.sample = function (e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }, v.sortBy = function (e, t, n) {
            return t = v.iteratee(t, n), v.pluck(v.map(e, function (e, n, i) {
                return {value: e, index: n, criteria: t(e, n, i)}
            }).sort(function (e, t) {
                var n = e.criteria, i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n)return 1;
                    if (i > n || void 0 === i)return -1
                }
                return e.index - t.index
            }), "value")
        };
        var w = function (e) {
            return function (t, n, i) {
                var o = {};
                return n = v.iteratee(n, i), v.each(t, function (i, r) {
                    var a = n(i, r, t);
                    e(o, i, a)
                }), o
            }
        };
        v.groupBy = w(function (e, t, n) {
            v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), v.indexBy = w(function (e, t, n) {
            e[n] = t
        }), v.countBy = w(function (e, t, n) {
            v.has(e, n) ? e[n]++ : e[n] = 1
        }), v.sortedIndex = function (e, t, n, i) {
            n = v.iteratee(n, i, 1);
            for (var o = n(t), r = 0, a = e.length; a > r;) {
                var s = r + a >>> 1;
                n(e[s]) < o ? r = s + 1 : a = s
            }
            return r
        }, v.toArray = function (e) {
            return e ? v.isArray(e) ? m.call(e) : e.length === +e.length ? v.map(e, v.identity) : v.values(e) : []
        }, v.size = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : v.keys(e).length
        }, v.partition = function (e, t, n) {
            t = v.iteratee(t, n);
            var i = [], o = [];
            return v.each(e, function (e, n, r) {
                (t(e, n, r) ? i : o).push(e)
            }), [i, o]
        }, v.first = v.head = v.take = function (e, t, n) {
            return null != e ? null == t || n ? e[0] : 0 > t ? [] : m.call(e, 0, t) : void 0
        }, v.initial = function (e, t, n) {
            return m.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, v.last = function (e, t, n) {
            return null != e ? null == t || n ? e[e.length - 1] : m.call(e, Math.max(e.length - t, 0)) : void 0
        }, v.rest = v.tail = v.drop = function (e, t, n) {
            return m.call(e, null == t || n ? 1 : t)
        }, v.compact = function (e) {
            return v.filter(e, v.identity)
        };
        var x = function (e, t, n, i) {
            if (t && v.every(e, v.isArray))return u.apply(i, e);
            for (var o = 0, r = e.length; r > o; o++) {
                var a = e[o];
                v.isArray(a) || v.isArguments(a) ? t ? l.apply(i, a) : x(a, t, n, i) : n || i.push(a)
            }
            return i
        };
        v.flatten = function (e, t) {
            return x(e, t, !1, [])
        }, v.without = function (e) {
            return v.difference(e, m.call(arguments, 1))
        }, v.uniq = v.unique = function (e, t, n, i) {
            if (null == e)return [];
            v.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = v.iteratee(n, i));
            for (var o = [], r = [], a = 0, s = e.length; s > a; a++) {
                var c = e[a];
                if (t)a && r === c || o.push(c), r = c; else if (n) {
                    var l = n(c, a, e);
                    v.indexOf(r, l) < 0 && (r.push(l), o.push(c))
                } else v.indexOf(o, c) < 0 && o.push(c)
            }
            return o
        }, v.union = function () {
            return v.uniq(x(arguments, !0, !0, []))
        }, v.intersection = function (e) {
            if (null == e)return [];
            for (var t = [], n = arguments.length, i = 0, o = e.length; o > i; i++) {
                var r = e[i];
                if (!v.contains(t, r)) {
                    for (var a = 1; n > a && v.contains(arguments[a], r); a++);
                    a === n && t.push(r)
                }
            }
            return t
        }, v.difference = function (e) {
            var t = x(m.call(arguments, 1), !0, !0, []);
            return v.filter(e, function (e) {
                return !v.contains(t, e)
            })
        }, v.zip = function (e) {
            if (null == e)return [];
            for (var t = v.max(arguments, "length").length, n = Array(t), i = 0; t > i; i++)n[i] = v.pluck(arguments, i);
            return n
        }, v.object = function (e, t) {
            if (null == e)return {};
            for (var n = {}, i = 0, o = e.length; o > i; i++)t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, v.indexOf = function (e, t, n) {
            if (null == e)return -1;
            var i = 0, o = e.length;
            if (n) {
                if ("number" != typeof n)return i = v.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, o + n) : n
            }
            for (; o > i; i++)if (e[i] === t)return i;
            return -1
        }, v.lastIndexOf = function (e, t, n) {
            if (null == e)return -1;
            var i = e.length;
            for ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)); --i >= 0;)if (e[i] === t)return i;
            return -1
        }, v.range = function (e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), o = Array(i), r = 0; i > r; r++, e += n)o[r] = e;
            return o
        };
        var _ = function () {
        };
        v.bind = function (e, t) {
            var n, i;
            if (g && e.bind === g)return g.apply(e, m.call(arguments, 1));
            if (!v.isFunction(e))throw new TypeError("Bind must be called on a function");
            return n = m.call(arguments, 2), i = function () {
                if (!(this instanceof i))return e.apply(t, n.concat(m.call(arguments)));
                _.prototype = e.prototype;
                var o = new _;
                _.prototype = null;
                var r = e.apply(o, n.concat(m.call(arguments)));
                return v.isObject(r) ? r : o
            }
        }, v.partial = function (e) {
            var t = m.call(arguments, 1);
            return function () {
                for (var n = 0, i = t.slice(), o = 0, r = i.length; r > o; o++)i[o] === v && (i[o] = arguments[n++]);
                for (; n < arguments.length;)i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, v.bindAll = function (e) {
            var t, n, i = arguments.length;
            if (1 >= i)throw new Error("bindAll must be passed function names");
            for (t = 1; i > t; t++)n = arguments[t], e[n] = v.bind(e[n], e);
            return e
        }, v.memoize = function (e, t) {
            var n = function (i) {
                var o = n.cache, r = t ? t.apply(this, arguments) : i;
                return v.has(o, r) || (o[r] = e.apply(this, arguments)), o[r]
            };
            return n.cache = {}, n
        }, v.delay = function (e, t) {
            var n = m.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, v.defer = function (e) {
            return v.delay.apply(v, [e, 1].concat(m.call(arguments, 1)))
        }, v.throttle = function (e, t, n) {
            var i, o, r, a = null, s = 0;
            n || (n = {});
            var c = function () {
                s = n.leading === !1 ? 0 : v.now(), a = null, r = e.apply(i, o), a || (i = o = null)
            };
            return function () {
                var l = v.now();
                s || n.leading !== !1 || (s = l);
                var m = t - (l - s);
                return i = this, o = arguments, 0 >= m || m > t ? (clearTimeout(a), a = null, s = l, r = e.apply(i, o), a || (i = o = null)) : a || n.trailing === !1 || (a = setTimeout(c, m)), r
            }
        }, v.debounce = function (e, t, n) {
            var i, o, r, a, s, c = function () {
                var l = v.now() - a;
                t > l && l > 0 ? i = setTimeout(c, t - l) : (i = null, n || (s = e.apply(r, o), i || (r = o = null)))
            };
            return function () {
                r = this, o = arguments, a = v.now();
                var l = n && !i;
                return i || (i = setTimeout(c, t)), l && (s = e.apply(r, o), r = o = null), s
            }
        }, v.wrap = function (e, t) {
            return v.partial(t, e)
        }, v.negate = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }, v.compose = function () {
            var e = arguments, t = e.length - 1;
            return function () {
                for (var n = t, i = e[t].apply(this, arguments); n--;)i = e[n].call(this, i);
                return i
            }
        }, v.after = function (e, t) {
            return function () {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, v.before = function (e, t) {
            var n;
            return function () {
                return --e > 0 ? n = t.apply(this, arguments) : t = null, n
            }
        }, v.once = v.partial(v.before, 2), v.keys = function (e) {
            if (!v.isObject(e))return [];
            if (f)return f(e);
            var t = [];
            for (var n in e)v.has(e, n) && t.push(n);
            return t
        }, v.values = function (e) {
            for (var t = v.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++)i[o] = e[t[o]];
            return i
        }, v.pairs = function (e) {
            for (var t = v.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++)i[o] = [t[o], e[t[o]]];
            return i
        }, v.invert = function (e) {
            for (var t = {}, n = v.keys(e), i = 0, o = n.length; o > i; i++)t[e[n[i]]] = n[i];
            return t
        }, v.functions = v.methods = function (e) {
            var t = [];
            for (var n in e)v.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, v.extend = function (e) {
            if (!v.isObject(e))return e;
            for (var t, n, i = 1, o = arguments.length; o > i; i++) {
                t = arguments[i];
                for (n in t)p.call(t, n) && (e[n] = t[n])
            }
            return e
        }, v.pick = function (e, t, n) {
            var i, o = {};
            if (null == e)return o;
            if (v.isFunction(t)) {
                t = b(t, n);
                for (i in e) {
                    var r = e[i];
                    t(r, i, e) && (o[i] = r)
                }
            } else {
                var a = u.apply([], m.call(arguments, 1));
                e = new Object(e);
                for (var s = 0, c = a.length; c > s; s++)i = a[s], i in e && (o[i] = e[i])
            }
            return o
        }, v.omit = function (e, t, n) {
            if (v.isFunction(t))t = v.negate(t); else {
                var i = v.map(u.apply([], m.call(arguments, 1)), String);
                t = function (e, t) {
                    return !v.contains(i, t)
                }
            }
            return v.pick(e, t, n)
        }, v.defaults = function (e) {
            if (!v.isObject(e))return e;
            for (var t = 1, n = arguments.length; n > t; t++) {
                var i = arguments[t];
                for (var o in i)void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, v.clone = function (e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.tap = function (e, t) {
            return t(e), e
        };
        var k = function (e, t, n, i) {
            if (e === t)return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t)return e === t;
            e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
            var o = d.call(e);
            if (o !== d.call(t))return !1;
            switch (o) {
                case"[object RegExp]":
                case"[object String]":
                    return "" + e == "" + t;
                case"[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case"[object Date]":
                case"[object Boolean]":
                    return +e === +t
            }
            if ("object" != typeof e || "object" != typeof t)return !1;
            for (var r = n.length; r--;)if (n[r] === e)return i[r] === t;
            var a = e.constructor, s = t.constructor;
            if (a !== s && "constructor" in e && "constructor" in t && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s))return !1;
            n.push(e), i.push(t);
            var c, l;
            if ("[object Array]" === o) {
                if (c = e.length, l = c === t.length)for (; c-- && (l = k(e[c], t[c], n, i)););
            } else {
                var m, u = v.keys(e);
                if (c = u.length, l = v.keys(t).length === c)for (; c-- && (m = u[c], l = v.has(t, m) && k(e[m], t[m], n, i)););
            }
            return n.pop(), i.pop(), l
        };
        v.isEqual = function (e, t) {
            return k(e, t, [], [])
        }, v.isEmpty = function (e) {
            if (null == e)return !0;
            if (v.isArray(e) || v.isString(e) || v.isArguments(e))return 0 === e.length;
            for (var t in e)if (v.has(e, t))return !1;
            return !0
        }, v.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, v.isArray = h || function (e) {
                return "[object Array]" === d.call(e)
            }, v.isObject = function (e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
            v["is" + e] = function (t) {
                return d.call(t) === "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function (e) {
            return v.has(e, "callee")
        }), v.isFunction = function (e) {
            return "function" == typeof e || !1
        }, v.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function (e) {
            return v.isNumber(e) && e !== +e
        }, v.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" === d.call(e)
        }, v.isNull = function (e) {
            return null === e
        }, v.isUndefined = function (e) {
            return void 0 === e
        }, v.has = function (e, t) {
            return null != e && p.call(e, t)
        }, v.noConflict = function () {
            return n._ = r, this
        }, v.identity = function (e) {
            return e
        }, v.constant = function (e) {
            return function () {
                return e
            }
        }, v.noop = function () {
        }, v.property = function (e) {
            return function (t) {
                return t[e]
            }
        }, v.matches = function (e) {
            var t = v.pairs(e), n = t.length;
            return function (e) {
                if (null == e)return !n;
                e = new Object(e);
                for (var i = 0; n > i; i++) {
                    var o = t[i], r = o[0];
                    if (o[1] !== e[r] || !(r in e))return !1
                }
                return !0
            }
        }, v.times = function (e, t, n) {
            var i = Array(Math.max(0, e));
            t = b(t, n, 1);
            for (var o = 0; e > o; o++)i[o] = t(o);
            return i
        }, v.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, v.now = Date.now || function () {
                return (new Date).getTime()
            };
        var C = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, A = v.invert(C), T = function (e) {
            var t = function (t) {
                return e[t]
            }, n = "(?:" + v.keys(e).join("|") + ")", i = RegExp(n), o = RegExp(n, "g");
            return function (e) {
                return e = null == e ? "" : "" + e, i.test(e) ? e.replace(o, t) : e
            }
        };
        v.escape = T(C), v.unescape = T(A), v.result = function (e, t) {
            if (null != e) {
                var n = e[t];
                return v.isFunction(n) ? e[t]() : n
            }
        };
        var S = 0;
        v.uniqueId = function (e) {
            var t = ++S + "";
            return e ? e + t : t
        }, v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = /(.)^/, E = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, z = /\\|'|\r|\n|\u2028|\u2029/g, N = function (e) {
            return "\\" + E[e]
        };
        v.template = function (e, t, n) {
            !t && n && (t = n), t = v.defaults({}, t, v.templateSettings);
            var i = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"), o = 0, r = "__p+='";
            e.replace(i, function (t, n, i, a, s) {
                return r += e.slice(o, s).replace(z, N), o = s + t.length, n ? r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (r += "';\n" + a + "\n__p+='"), t
            }), r += "';\n", t.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", r)
            } catch (s) {
                throw s.source = r, s
            }
            var c = function (e) {
                return a.call(this, e, v)
            }, l = t.variable || "obj";
            return c.source = "function(" + l + "){\n" + r + "}", c
        }, v.chain = function (e) {
            var t = v(e);
            return t._chain = !0, t
        };
        var I = function (e) {
            return this._chain ? v(e).chain() : e
        };
        v.mixin = function (e) {
            v.each(v.functions(e), function (t) {
                var n = v[t] = e[t];
                v.prototype[t] = function () {
                    var e = [this._wrapped];
                    return l.apply(e, arguments), I.call(this, n.apply(v, e))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = a[e];
            v.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], I.call(this, n)
            }
        }), v.each(["concat", "join", "slice"], function (e) {
            var t = a[e];
            v.prototype[e] = function () {
                return I.call(this, t.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function () {
            return this._wrapped
        }, i = [], o = function () {
            return v
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }).call(this)
}, function (module, exports) {
    "use strict";
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, i, o, r, a, s = gap, c = t[e];
        switch ("function" == typeof rep && (c = rep.call(t, e, c)), "undefined" == typeof c ? "undefined" : _typeof(c)) {
            case"string":
                return quote(c);
            case"number":
                return isFinite(c) ? String(c) : "null";
            case"boolean":
            case"null":
                return String(c);
            case"object":
                if (!c)return "null";
                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                    for (r = c.length, n = 0; r > n; n += 1)a[n] = str(n, c) || "null";
                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, o
                }
                if (rep && "object" === ("undefined" == typeof rep ? "undefined" : _typeof(rep)))for (r = rep.length, n = 0; r > n; n += 1)"string" == typeof rep[n] && (i = rep[n], o = str(i, c), o && a.push(quote(i) + (gap ? ": " : ":") + o)); else for (i in c)Object.prototype.hasOwnProperty.call(c, i) && (o = str(i, c), o && a.push(quote(i) + (gap ? ": " : ":") + o));
                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, o
        }
    }

    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }, JSON = {}, cx, escapable, gap, indent, meta, rep;
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, JSON.stringify = function (e, t, n) {
        var i;
        if (gap = "", indent = "", "number" == typeof n)for (i = 0; n > i; i += 1)indent += " "; else"string" == typeof n && (indent = n);
        if (rep = t, t && "function" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length))throw new Error("JSON.stringify");
        return str("", {"": e})
    }, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, i, o = e[t];
            if (o && "object" === ("undefined" == typeof o ? "undefined" : _typeof(o)))for (n in o)Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
            return reviver.call(e, t, o)
        }

        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    }, module.exports = JSON
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
    e.exports = function () {
        var e = [];
        return e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    var i = n(95), o = function (e) {
        for (var t, n, i, o, r = [], a = 0, s = e.length; s > a;)i = e.charAt(a), t = e.charCodeAt(a++), t >= 55296 && 56319 >= t && s > a ? (o = e.charAt(a), n = e.charCodeAt(a++), 56320 == (64512 & n) ? r.push([i + o, ((1023 & t) << 10) + (1023 & n) + 65536]) : (r.push([i, t]), a--)) : r.push([i, t]);
        return r
    }, r = "__ic_", a = n(232), s = {};
    i.each(a, function (e, t) {
        i.each(e, function (e) {
            s[e[0]] = [e[1], e[2], e[3], t]
        })
    });
    var c = {
        ":-)": "😀",
        ":-D": "😃",
        ";-)": "😉",
        "}-)": "👿",
        ":-o": "😮",
        ":-O": "😮",
        ":-/": "😕",
        ":-\\": "😕",
        "x-(": "😩",
        "X-(": "😩",
        ":-(": "😞",
        "B-)": "😎",
        ":-p": "😛",
        ":-P": "😛",
        ":-@": "😠",
        ":-|": "😐",
        ":-$": "😳"
    };
    i.each(c, function (e, t) {
        s[e][r + "ascii"] = t
    });
    var l = ["⁉", "✂", "✈", "✉", "❤", "✌", "✏", "⚠", "🈷", "🈂", "Ⓜ", "✒", "✔", "✖", "◼", "◻", "™", "☀", "☁", "♠", "♣", "♥", "♦", "♨", "▪", "▫", "ℹ", "↔", "↕", "↖", "↗", "↘", "↙", "☑", "〰", "♻", "〽", "▶", "☝", "✳", "✴", "❄", "❇", "⬆", "⬇", "⬅", "➡", "◀", "↩", "↪", "⤴", "⤵", "㊗", "㊙", "☺", "‼", "🅰", "🅱", "🅿", "🅾", "🇯", "🇰", "🇩", "🇨", "🇺", "🇫", "🇪", "🇮", "🇷", "🇬", "☔", "⭐", "⚡", "☕", "☎", "⚓", "♈", "♉", "♐", "♑", "♒", "♓", "♿", "♊", "♋", "♌", "♍", "♎", "♏", "◾", "◽", "⚫", "⚪"], m = {};
    i.each(s, function (e, t) {
        m[r + e[0]] = t
    });
    var u = 5, d = i.map(a, function (e) {
        return i.map(e, function (e) {
            return e[0]
        })
    }), p = function (e, t, n) {
        for (var i = [], o = 0, r = 0; o + n <= t.length;) {
            var a = t.slice(o, o + n);
            e.isSupportedAscii(a) ? (o > r && i.push(t.slice(r, o)), i.push(a), o += n, r = o) : ++o
        }
        return r < t.length && i.push(t.slice(r, t.length)), i
    };
    e.exports = {
        getGroupRepresentatives: function () {
            return [["😄", "People"], ["🌸", "Nature"], ["🔔", "Objects"], ["🚙", "Places"], ["🔠", "Symbols"]]
        },
        getUglyNativeEmoji: function () {
            return l.slice()
        },
        isUglyNativeEmoji: function (e) {
            return i.contains(l, e)
        },
        hasNativeSupport: function (e) {
            var t, n = "😀";
            return e.createElement("canvas").getContext ? (t = e.createElement("canvas").getContext("2d"), "function" != typeof t.fillText ? !1 : (t.textBaseline = "top", t.font = "32px Arial", t.fillText(n, 0, 0), 0 !== t.getImageData(16, 16, 1, 1).data[0])) : !1
        },
        isSupportedUnicode: function (e) {
            return i.has(s, e)
        },
        identifierFromUnicode: function (e) {
            return s[e][0]
        },
        asciiFromUnicode: function (e) {
            return s[e][r + "ascii"]
        },
        spritemapIndexFromUnicode: function (e) {
            return {x: s[e][1], y: s[e][2]}
        },
        groupFromUnicode: function (e) {
            return s[e][3]
        },
        isSupportedAscii: function (e) {
            return i.has(c, e)
        },
        unicodeFromAscii: function (e) {
            return c[e]
        },
        isSupportedIdentifier: function (e) {
            return i.has(m, r + e)
        },
        unicodeFromIdentifier: function (e) {
            return m[r + e]
        },
        N_GROUPS: u,
        prettyEmoticonsUnicodeGroups: function () {
            return i.map(d, function (e) {
                var t = [];
                return i.each(e, function (e) {
                    i.contains(l, e) || t.push(e)
                }), t
            })
        },
        allEmoticonsUnicodeGroups: d,
        allEmoticonsUnicodeList: i.keys(s),
        allEmoticonsIdentifierList: i.map(s, function (e) {
            return e[0]
        }),
        prettyEmoticonsIdentifierList: function () {
            return i.map(i.filter(s, function (e, t) {
                return !i.contains(l, t)
            }), function (e) {
                return e[0]
            })
        },
        asciiEmoticonsUnicodeList: i.uniq(i.values(c)),
        asciiEmoticonsIdentifierList: i.map(i.uniq(i.values(c)), function (e) {
            return s[e][0]
        }),
        MIN_ASCII_LENGTH: 3,
        MAX_ASCII_LENGTH: 3,
        asciiEmoticonsAsciiList: i.keys(c),
        spritemapStyleString: function (e, t) {
            var n = this.spritemapIndexFromUnicode(t);
            return "display:inline-block;height:" + e + "px;width:" + e + "px;background-position:-" + e * n.x + "px -" + e * n.y + "px;"
        },
        spritemapStyleHash: function (e, t) {
            var n = this.spritemapIndexFromUnicode(t);
            return {
                display: "inline-block",
                height: e + "px",
                width: e + "px",
                backgroundPosition: "-" + e * n.x + "px -" + e * n.y + "px"
            }
        },
        spritemapSpanTag: function (e, t, n) {
            return i.isUndefined(n) && (n = "intermoji-default-class"), '<span style="' + this.spritemapStyleString(e, t) + '" title="' + this.identifierFromUnicode(t) + '" class="' + n + '"></span>'
        },
        splitOnUnicodeEmojis: function (e) {
            if (i.isUndefined(e))return [];
            var t = [], n = "";
            return i.each(o(e), function (e) {
                var i = e[0];
                this.isSupportedUnicode(i) ? (n.length > 0 && (t.push(n), n = ""), t.push(i)) : n += i
            }, this), n.length > 0 && t.push(n), t
        },
        splitOnAsciiEmojis: function (e) {
            if (i.isUndefined(e))return [];
            for (var t = [e], n = this.MAX_ASCII_LENGTH; n >= this.MIN_ASCII_LENGTH; --n) {
                for (var o = [], r = 0; r < t.length; ++r)o = o.concat(p(this, t[r], n));
                t = o
            }
            return t
        },
        splitOnUnicodeAndAsciiEmojis: function (e) {
            return i.isUndefined(e) ? [] : i.flatten(i.map(this.splitOnUnicodeEmojis(e), function (e) {
                return this.splitOnAsciiEmojis(e)
            }, this), this)
        },
        substituteUnicodeForAsciiEmojis: function (e) {
            return i.isUndefined(e) ? "" : i.reduce(i.map(this.splitOnAsciiEmojis(e), function (e) {
                return this.isSupportedAscii(e) ? this.unicodeFromAscii(e) : e
            }, this), function (e, t) {
                return e + t
            }, "", this)
        },
        substituteSpansForEmojis: function (e, t, n) {
            return i.isUndefined(t) ? "" : i.reduce(i.map(this.splitOnUnicodeAndAsciiEmojis(t), function (t) {
                return this.isSupportedAscii(t) ? this.spritemapSpanTag(e, this.unicodeFromAscii(t), n) : this.isSupportedUnicode(t) ? this.spritemapSpanTag(e, t, n) : t
            }, this), function (e, t) {
                return e + t
            }, "", this)
        },
        wrapUnicodeEmojiInTitledSpans: function (e, t, n) {
            return i.isUndefined(t) ? "" : i.reduce(i.map(this.splitOnUnicodeEmojis(t), function (t) {
                return this.isSupportedUnicode(t) ? this.isUglyNativeEmoji(t) ? this.spritemapSpanTag(e, t, n) : '<span title="' + this.identifierFromUnicode(t) + '">' + t + "</span>" : t
            }, this), function (e, t) {
                return e + t
            }, "", this)
        },
        substituteUnicodeForColonified: function (e) {
            for (var t = function (e) {
                return ":" + e + ":"
            }, n = !0, i = "", o = "", r = 0; r < e.length; r++)":" === e[r] ? (n ? (n = !1, o += i) : (n = !0, o += this.isSupportedIdentifier(i) ? this.unicodeFromIdentifier(i) : t(i)), i = "") : i += e[r];
            return n || (o += ":"), o += i
        },
        codepointIndexFromUnicode: function (e) {
            return this.isSupportedUnicode(e) ? o(e)[0][1] : 0
        }
    }
}, function (e, t) {
    e.exports = [[["😄", "smile", 23, 23], ["😃", "smiley", 22, 23], ["😀", "grinning", 19, 23], ["😊", "blush", 24, 5], ["☺", "relaxed", 27, 24], ["😉", "wink", 24, 4], ["😍", "heart_eyes", 24, 8], ["😘", "kissing_heart", 24, 19], ["😚", "kissing_closed_eyes", 24, 21], ["😜", "stuck_out_tongue_winking_eye", 24, 23], ["😝", "stuck_out_tongue_closed_eyes", 0, 24], ["😛", "stuck_out_tongue", 24, 22], ["😳", "flushed", 22, 24], ["😁", "grin", 20, 23], ["😔", "pensive", 24, 15], ["😌", "relieved", 24, 7], ["😒", "unamused", 24, 13], ["😞", "disappointed", 1, 24], ["😣", "persevere", 6, 24], ["😢", "cry", 5, 24], ["😂", "joy", 21, 23], ["😭", "sob", 16, 24], ["😪", "sleepy", 13, 24], ["😥", "disappointed_relieved", 8, 24], ["😰", "cold_sweat", 19, 24], ["😅", "sweat_smile", 24, 0], ["😓", "sweat", 24, 14], ["😩", "weary", 12, 24], ["😫", "tired_face", 14, 24], ["😨", "fearful", 11, 24], ["😱", "scream", 20, 24], ["😠", "angry", 3, 24], ["😡", "rage", 4, 24], ["😤", "triumph", 7, 24], ["😖", "confounded", 24, 17], ["😆", "laughing", 24, 1], ["😋", "yum", 24, 6], ["😷", "mask", 25, 1], ["😎", "sunglasses", 24, 9], ["😵", "dizzy_face", 24, 24], ["😲", "astonished", 21, 24], ["👿", "imp", 13, 18], ["😮", "open_mouth", 17, 24], ["😐", "neutral_face", 24, 11], ["😕", "confused", 24, 16], ["😏", "smirk", 24, 10], ["👲", "man_with_gua_pi_mao", 0, 18], ["👳", "man_with_turban", 1, 18], ["👮", "cop", 18, 14], ["👷", "construction_worker", 5, 18], ["💂", "guardsman", 16, 18], ["👶", "baby", 4, 18], ["👦", "boy", 18, 6], ["👧", "girl", 18, 7], ["👨", "man", 18, 8], ["👩", "woman", 18, 9], ["👴", "older_man", 2, 18], ["👵", "older_woman", 3, 18], ["👱", "person_with_blond_hair", 18, 17], ["👼", "angel", 10, 18], ["👸", "princess", 6, 18], ["😺", "smiley_cat", 25, 4], ["😸", "smile_cat", 25, 2], ["😻", "heart_eyes_cat", 25, 5], ["😽", "kissing_cat", 25, 7], ["😼", "smirk_cat", 25, 6], ["🙀", "scream_cat", 25, 10], ["😿", "crying_cat_face", 25, 9], ["😹", "joy_cat", 25, 3], ["😾", "pouting_cat", 25, 8], ["👹", "japanese_ogre", 7, 18], ["👺", "japanese_goblin", 8, 18], ["🙈", "see_no_evil", 25, 14], ["🙉", "hear_no_evil", 25, 15], ["🙊", "speak_no_evil", 25, 16], ["💀", "skull", 14, 18], ["👽", "alien", 11, 18], ["💩", "hankey", 17, 19], ["🔥", "fire", 11, 22], ["✨", "sparkles", 28, 17], ["🌟", "star2", 1, 8], ["💫", "dizzy", 19, 19], ["💥", "boom", 13, 19], ["💢", "anger", 10, 19], ["💦", "sweat_drops", 14, 19], ["💧", "droplet", 15, 19], ["💤", "zzz", 12, 19], ["💨", "dash", 16, 19], ["👂", "ear", 17, 5], ["👀", "eyes", 17, 4], ["👃", "nose", 17, 6], ["👅", "tongue", 17, 8], ["👄", "lips", 17, 7], ["👍", "thumbs_up", 17, 16], ["👎", "-1", 0, 17], ["👌", "ok_hand", 17, 15], ["👊", "facepunch", 17, 13], ["✊", "fist", 28, 10], ["✌", "v", 28, 12], ["👋", "wave", 17, 14], ["✋", "hand", 28, 11], ["👐", "open_hands", 2, 17], ["👆", "point_up_2", 17, 9], ["👇", "point_down", 17, 10], ["👉", "point_right", 17, 12], ["👈", "point_left", 17, 11], ["🙌", "raised_hands", 25, 18], ["🙏", "pray", 25, 21], ["☝", "point_up", 27, 23], ["👏", "clap", 1, 17], ["💪", "muscle", 18, 19], ["🚶", "walking", 26, 25], ["🏃", "runner", 14, 10], ["💃", "dancer", 17, 18], ["👫", "couple", 18, 11], ["👪", "family", 18, 10], ["💏", "couplekiss", 19, 10], ["💑", "couple_with_heart", 19, 12], ["👯", "dancers", 18, 15], ["🙆", "ok_woman", 25, 12], ["🙅", "no_good", 25, 11], ["💁", "information_desk_person", 15, 18], ["🙋", "raising_hand", 25, 17], ["💆", "massage", 19, 1], ["💇", "haircut", 19, 2], ["💅", "nail_care", 19, 0], ["👰", "bride_with_veil", 18, 16], ["🙎", "person_with_pouting_face", 25, 20], ["🙍", "person_frowning", 25, 19], ["🙇", "bow", 25, 13], ["🎩", "tophat", 13, 11], ["👑", "crown", 3, 17], ["👒", "womans_hat", 4, 17], ["👟", "athletic_shoe", 17, 17], ["👞", "mans_shoe", 16, 17], ["👡", "sandal", 18, 1], ["👠", "high_heel", 18, 0], ["👢", "boot", 18, 2], ["👕", "shirt", 7, 17], ["👔", "necktie", 6, 17], ["👚", "womans_clothes", 12, 17], ["👗", "dress", 9, 17], ["🎽", "running_shirt_with_sash", 14, 4], ["👖", "jeans", 8, 17], ["👘", "kimono", 10, 17], ["👙", "bikini", 11, 17], ["💼", "briefcase", 20, 16], ["👜", "handbag", 14, 17], ["👝", "pouch", 15, 17], ["👛", "purse", 13, 17], ["👓", "eyeglasses", 5, 17], ["🎀", "ribbon", 12, 7], ["🌂", "closed_umbrella", 2, 6], ["💄", "lipstick", 18, 18], ["💛", "yellow_heart", 3, 19], ["💙", "blue_heart", 1, 19], ["💜", "purple_heart", 4, 19], ["💚", "green_heart", 2, 19], ["❤", "heart", 0, 28], ["💔", "broken_heart", 19, 15], ["💗", "heartpulse", 19, 18], ["💓", "heartbeat", 19, 14], ["💕", "two_hearts", 19, 16], ["💖", "sparkling_heart", 19, 17], ["💞", "revolving_hearts", 6, 19], ["💘", "cupid", 0, 19], ["💌", "love_letter", 19, 7], ["💋", "kiss", 19, 6], ["💍", "ring", 19, 8], ["💎", "gem", 19, 9], ["👤", "bust_in_silhouette", 18, 4], ["💬", "speech_balloon", 20, 0], ["👣", "footprints", 18, 3]], [["🐶", "dog", 12, 16], ["🐺", "wolf", 16, 16], ["🐱", "cat", 7, 16], ["🐭", "mouse", 3, 16], ["🐹", "hamster", 15, 16], ["🐰", "rabbit", 6, 16], ["🐸", "frog", 14, 16], ["🐯", "tiger", 5, 16], ["🐨", "koala", 16, 14], ["🐻", "bear", 17, 0], ["🐷", "pig", 13, 16], ["🐽", "pig_nose", 17, 2], ["🐮", "cow", 4, 16], ["🐗", "boar", 13, 15], ["🐵", "monkey_face", 11, 16], ["🐒", "monkey", 8, 15], ["🐴", "horse", 10, 16], ["🐑", "sheep", 7, 15], ["🐘", "elephant", 14, 15], ["🐼", "panda_face", 17, 1], ["🐧", "penguin", 16, 13], ["🐦", "bird", 16, 12], ["🐤", "baby_chick", 16, 10], ["🐥", "hatched_chick", 16, 11], ["🐣", "hatching_chick", 16, 9], ["🐔", "chicken", 10, 15], ["🐍", "snake", 3, 15], ["🐢", "turtle", 16, 8], ["🐛", "bug", 16, 1], ["🐝", "bee", 16, 3], ["🐜", "ant", 16, 2], ["🐞", "beetle", 16, 4], ["🐌", "snail", 2, 15], ["🐙", "octopus", 15, 15], ["🐚", "shell", 16, 0], ["🐠", "tropical_fish", 16, 6], ["🐟", "fish", 16, 5], ["🐬", "dolphin", 2, 16], ["🐳", "whale", 9, 16], ["🐎", "racehorse", 4, 15], ["🐲", "dragon_face", 8, 16], ["🐡", "blowfish", 16, 7], ["🐫", "camel", 1, 16], ["🐩", "poodle", 16, 15], ["🐾", "feet", 17, 3], ["💐", "bouquet", 19, 11], ["🌸", "cherry_blossom", 9, 1], ["🌷", "tulip", 9, 0], ["🍀", "four_leaf_clover", 0, 9], ["🌹", "rose", 9, 2], ["🌻", "sunflower", 9, 4], ["🌺", "hibiscus", 9, 3], ["🍁", "maple_leaf", 1, 9], ["🍃", "leaves", 3, 9], ["🍂", "fallen_leaf", 2, 9], ["🌿", "herb", 9, 8], ["🌾", "ear_of_rice", 9, 7], ["🍄", "mushroom", 4, 9], ["🌵", "cactus", 8, 8], ["🌴", "palm_tree", 7, 8], ["🌰", "chestnut", 3, 8], ["🌱", "seedling", 4, 8], ["🌼", "blossom", 9, 5], ["🌑", "new_moon", 3, 7], ["🌓", "first_quarter_moon", 5, 7], ["🌔", "moon", 6, 7], ["🌕", "full_moon", 7, 7], ["🌛", "first_quarter_moon_with_face", 8, 5], ["🌙", "crescent_moon", 8, 3], ["🌏", "earth_asia", 1, 7], ["🌋", "volcano", 7, 4], ["🌌", "milky_way", 7, 5], ["🌠", "stars", 2, 8], ["⭐", "star", 14, 28], ["☀", "sunny", 27, 17], ["⛅", "partly_sunny", 25, 27], ["☁", "cloud", 27, 18], ["⚡", "zap", 19, 27], ["☔", "umbrella", 27, 21], ["❄", "snowflake", 28, 20], ["⛄", "snowman", 24, 27], ["🌀", "cyclone", 0, 6], ["🌁", "foggy", 1, 6], ["🌈", "rainbow", 7, 1], ["🌊", "ocean", 7, 3]], [["🎍", "bamboo", 8, 12], ["💝", "gift_heart", 5, 19], ["🎎", "dolls", 9, 12], ["🎒", "school_satchel", 13, 0], ["🎓", "mortar_board", 13, 1], ["🎏", "flags", 10, 12], ["🎆", "fireworks", 1, 12], ["🎇", "sparkler", 2, 12], ["🎐", "wind_chime", 11, 12], ["🎑", "rice_scene", 12, 12], ["🎃", "jack_o_lantern", 12, 10], ["👻", "ghost", 9, 18], ["🎅", "santa", 0, 12], ["🎄", "christmas_tree", 12, 11], ["🎁", "gift", 12, 8], ["🎋", "tanabata_tree", 6, 12], ["🎉", "tada", 4, 12], ["🎊", "confetti_ball", 5, 12], ["🎈", "balloon", 3, 12], ["🎌", "crossed_flags", 7, 12], ["🔮", "crystal_ball", 20, 22], ["🎥", "movie_camera", 13, 7], ["📷", "camera", 13, 21], ["📹", "video_camera", 14, 21], ["📼", "vhs", 17, 21], ["💿", "cd", 20, 19], ["📀", "dvd", 0, 20], ["💽", "minidisc", 0, 0], ["💾", "floppy_disk", 20, 18], ["💻", "computer", 20, 15], ["📱", "iphone", 7, 21], ["☎", "phone", 27, 19], ["📞", "telephone_receiver", 21, 9], ["📟", "pager", 21, 10], ["📠", "fax", 21, 11], ["📡", "satellite", 21, 12], ["📺", "tv", 15, 21], ["📻", "radio", 16, 21], ["🔊", "loud_sound", 22, 6], ["🔔", "bell", 22, 16], ["📢", "loudspeaker", 21, 13], ["📣", "mega", 21, 14], ["⏳", "hourglass_flowing_sand", 27, 7], ["⌛", "hourglass", 27, 1], ["⏰", "alarm_clock", 27, 6], ["⌚", "watch", 27, 0], ["🔓", "unlock", 22, 15], ["🔒", "lock", 22, 14], ["🔏", "lock_with_ink_pen", 22, 11], ["🔐", "closed_lock_with_key", 22, 12], ["🔑", "key", 22, 13], ["🔎", "mag_right", 22, 10], ["💡", "bulb", 9, 19], ["🔦", "flashlight", 12, 22], ["🔌", "electric_plug", 22, 8], ["🔋", "battery", 22, 7], ["🔍", "mag", 22, 9], ["🛀", "bath", 9, 26], ["🚽", "toilet", 6, 26], ["🔧", "wrench", 13, 22], ["🔩", "nut_and_bolt", 15, 22], ["🔨", "hammer", 14, 22], ["🚪", "door", 26, 13], ["🚬", "smoking", 26, 15], ["💣", "bomb", 11, 19], ["🔫", "gun", 17, 22], ["🔪", "hocho", 16, 22], ["💊", "pill", 19, 5], ["💉", "syringe", 19, 4], ["💰", "moneybag", 20, 4], ["💴", "yen", 20, 8], ["💵", "dollar", 20, 9], ["💳", "credit_card", 20, 7], ["💸", "money_with_wings", 20, 12], ["📲", "calling", 8, 21], ["📧", "e-mail", 21, 18], ["📥", "inbox_tray", 21, 16], ["📤", "outbox_tray", 21, 15], ["✉", "email", 28, 9], ["📩", "envelope_with_arrow", 21, 20], ["📨", "incoming_envelope", 21, 19], ["📫", "mailbox", 1, 21], ["📪", "mailbox_closed", 0, 21], ["📮", "postbox", 4, 21], ["📦", "package", 21, 17], ["📝", "memo", 21, 8], ["📄", "page_facing_up", 4, 20], ["📃", "page_with_curl", 3, 20], ["📑", "bookmark_tabs", 17, 20], ["📊", "bar_chart", 10, 20], ["📈", "chart_with_upwards_trend", 8, 20], ["📉", "chart_with_downwards_trend", 9, 20], ["📜", "scroll", 21, 7], ["📋", "clipboard", 11, 20], ["📅", "date", 5, 20], ["📆", "calendar", 6, 20], ["📇", "card_index", 7, 20], ["📁", "file_folder", 1, 20], ["📂", "open_file_folder", 2, 20], ["✂", "scissors", 28, 6], ["📌", "pushpin", 12, 20], ["📎", "paperclip", 14, 20], ["✒", "black_nib", 28, 14], ["✏", "pencil2", 28, 13], ["📏", "straight_ruler", 15, 20], ["📐", "triangular_ruler", 16, 20], ["📕", "closed_book", 21, 0], ["📗", "green_book", 21, 2], ["📘", "blue_book", 21, 3], ["📙", "orange_book", 21, 4], ["📓", "notebook", 19, 20], ["📔", "notebook_with_decorative_cover", 20, 20], ["📒", "ledger", 18, 20], ["📚", "books", 21, 5], ["📖", "book", 21, 1], ["🔖", "bookmark", 22, 18], ["📛", "name_badge", 21, 6], ["📰", "newspaper", 6, 21], ["🎨", "art", 13, 10], ["🎬", "clapper", 1, 13], ["🎤", "microphone", 13, 6], ["🎧", "headphones", 13, 9], ["🎼", "musical_score", 14, 3], ["🎵", "musical_note", 10, 13], ["🎶", "notes", 11, 13], ["🎹", "musical_keyboard", 14, 0], ["🎻", "violin", 14, 2], ["🎺", "trumpet", 14, 1], ["🎷", "saxophone", 12, 13], ["🎸", "guitar", 13, 13], ["👾", "space_invader", 12, 18], ["🎮", "video_game", 3, 13], ["🃏", "black_joker", 20, 17], ["🎴", "flower_playing_cards", 9, 13], ["🀄", "mahjong", 1, 0], ["🎲", "game_die", 7, 13], ["🎯", "dart", 4, 13], ["🏈", "football", 0, 14], ["🏀", "basketball", 14, 7], ["⚽", "soccer", 22, 27], ["⚾", "baseball", 23, 27], ["🎾", "tennis", 14, 5], ["🎱", "8ball", 6, 13], ["🎳", "bowling", 8, 13], ["⛳", "golf", 28, 2], ["🏁", "checkered_flag", 14, 8], ["🏆", "trophy", 14, 12], ["🎿", "ski", 14, 6], ["🏂", "snowboarder", 14, 9], ["🏊", "swimmer", 2, 14], ["🏄", "surfer", 14, 11], ["🎣", "fishing_pole_and_fish", 13, 5], ["☕", "coffee", 27, 22], ["🍵", "tea", 11, 11], ["🍶", "sake", 12, 0], ["🍺", "beer", 12, 4], ["🍻", "beers", 12, 5], ["🍸", "cocktail", 12, 2], ["🍹", "tropical_drink", 12, 3], ["🍷", "wine_glass", 12, 1], ["🍴", "fork_and_knife", 10, 11], ["🍕", "pizza", 1, 10], ["🍔", "hamburger", 0, 10], ["🍟", "fries", 11, 0], ["🍗", "poultry_leg", 3, 10], ["🍖", "meat_on_bone", 2, 10], ["🍝", "spaghetti", 9, 10], ["🍛", "curry", 7, 10], ["🍤", "fried_shrimp", 11, 5], ["🍱", "bento", 7, 11], ["🍣", "sushi", 11, 4], ["🍥", "fish_cake", 11, 6], ["🍙", "rice_ball", 5, 10], ["🍘", "rice_cracker", 4, 10], ["🍚", "rice", 6, 10], ["🍜", "ramen", 8, 10], ["🍲", "stew", 8, 11], ["🍢", "oden", 11, 3], ["🍡", "dango", 11, 2], ["🍳", "egg", 9, 11], ["🍞", "bread", 10, 10], ["🍩", "doughnut", 11, 10], ["🍮", "custard", 4, 11], ["🍦", "icecream", 11, 7], ["🍨", "ice_cream", 11, 9], ["🍧", "shaved_ice", 11, 8], ["🎂", "birthday", 12, 9], ["🍰", "cake", 6, 11], ["🍪", "cookie", 0, 11], ["🍫", "chocolate_bar", 1, 11], ["🍬", "candy", 2, 11], ["🍭", "lollipop", 3, 11], ["🍯", "honey_pot", 5, 11], ["🍎", "apple", 10, 4], ["🍏", "green_apple", 10, 5], ["🍊", "tangerine", 10, 0], ["🍒", "cherries", 10, 8], ["🍇", "grapes", 7, 9], ["🍉", "watermelon", 9, 9], ["🍓", "strawberry", 10, 9], ["🍑", "peach", 10, 7], ["🍈", "melon", 8, 9], ["🍌", "banana", 10, 2], ["🍍", "pineapple", 10, 3], ["🍠", "sweet_potato", 11, 1], ["🍆", "eggplant", 6, 9], ["🍅", "tomato", 5, 9], ["🌽", "corn", 9, 6]], [["🏠", "house", 3, 14], ["🏡", "house_with_garden", 4, 14], ["🏫", "school", 14, 14], ["🏢", "office", 5, 14], ["🏣", "post_office", 6, 14], ["🏥", "hospital", 8, 14], ["🏦", "bank", 9, 14], ["🏪", "convenience_store", 13, 14], ["🏩", "love_hotel", 12, 14], ["🏨", "hotel", 11, 14], ["💒", "wedding", 19, 13], ["⛪", "church", 28, 0], ["🏬", "department_store", 15, 0], ["🌇", "city_sunrise", 7, 0], ["🌆", "city_sunset", 6, 6], ["🏯", "japanese_castle", 15, 3], ["🏰", "european_castle", 15, 4], ["⛺", "tent", 28, 4], ["🏭", "factory", 15, 1], ["🗼", "tokyo_tower", 15, 23], ["🗾", "japan", 17, 23], ["🗻", "mount_fuji", 14, 23], ["🌄", "sunrise_over_mountains", 4, 6], ["🌅", "sunrise", 5, 6], ["🌃", "night_with_stars", 3, 6], ["🗽", "statue_of_liberty", 16, 23], ["🌉", "bridge_at_night", 7, 2], ["🎠", "carousel_horse", 13, 2], ["🎡", "ferris_wheel", 13, 3], ["⛲", "fountain", 28, 1], ["🎢", "roller_coaster", 13, 4], ["🚢", "ship", 26, 5], ["⛵", "boat", 28, 3], ["🚤", "speedboat", 26, 7], ["⚓", "anchor", 17, 27], ["🚀", "rocket", 25, 22], ["✈", "airplane", 28, 8], ["💺", "seat", 20, 14], ["🚉", "station", 6, 25], ["🚄", "bullettrain_side", 1, 25], ["🚅", "bullettrain_front", 2, 25], ["🚇", "metro", 4, 25], ["🚃", "railway_car", 0, 25], ["🚌", "bus", 9, 25], ["🚙", "blue_car", 22, 25], ["🚗", "car", 20, 25], ["🚕", "taxi", 18, 25], ["🚚", "truck", 23, 25], ["🚨", "rotating_light", 26, 11], ["🚓", "police_car", 16, 25], ["🚒", "fire_engine", 15, 25], ["🚑", "ambulance", 14, 25], ["🚲", "bike", 26, 21], ["💈", "barber", 19, 3], ["🚏", "busstop", 12, 25], ["🎫", "ticket", 0, 13], ["🚥", "traffic_light", 26, 8], ["⚠", "warning", 18, 27], ["🚧", "construction", 26, 10], ["🔰", "beginner", 22, 22], ["⛽", "fuelpump", 28, 5], ["🏮", "izakaya_lantern", 15, 2], ["🎰", "slot_machine", 5, 13], ["♨", "hotsprings", 14, 27], ["🗿", "moyai", 18, 23], ["🎪", "circus_tent", 13, 12], ["🎭", "performing_arts", 2, 13], ["📍", "round_pushpin", 13, 20], ["🚩", "triangular_flag_on_post", 26, 12]], [["🔟", "keycap_ten", 5, 22], ["🔢", "1234", 8, 22], ["🔣", "symbols", 9, 22], ["⬆", "arrow_up", 10, 28], ["⬇", "arrow_down", 11, 28], ["⬅", "arrow_left", 9, 28], ["➡", "arrow_right", 4, 28], ["🔠", "capital_abcd", 6, 22], ["🔡", "abcd", 7, 22], ["🔤", "abc", 10, 22], ["↗", "arrow_upper_right", 22, 26], ["↖", "arrow_upper_left", 21, 26], ["↘", "arrow_lower_right", 23, 26], ["↙", "arrow_lower_left", 24, 26], ["↔", "left_right_arrow", 19, 26], ["↕", "arrow_up_down", 20, 26], ["◀", "arrow_backward", 27, 12], ["▶", "arrow_forward", 27, 11], ["🔼", "arrow_up_small", 23, 11], ["🔽", "arrow_down_small", 23, 12], ["↩", "leftwards_arrow_with_hook", 25, 26], ["↪", "arrow_right_hook", 26, 26], ["ℹ", "information_source", 18, 26], ["⏪", "rewind", 27, 3], ["⏩", "fast_forward", 27, 2], ["⏫", "arrow_double_up", 27, 4], ["⏬", "arrow_double_down", 27, 5], ["⤵", "arrow_heading_down", 8, 28], ["⤴", "arrow_heading_up", 7, 28], ["🆗", "ok", 1, 3], ["🆕", "new", 3, 2], ["🆙", "up", 3, 3], ["🆒", "cool", 2, 2], ["🆓", "free", 3, 0], ["🆖", "ng", 0, 3], ["📶", "signal_strength", 12, 21], ["🎦", "cinema", 13, 8], ["🈁", "koko", 5, 2], ["🈯", "u6307", 0, 5], ["🈳", "u7a7a", 2, 5], ["🈵", "u6e80", 4, 5], ["🈴", "u5408", 3, 5], ["🈲", "u7981", 1, 5], ["🉐", "ideograph_advantage", 6, 4], ["🈹", "u5272", 6, 2], ["🈺", "u55b6", 6, 3], ["🈶", "u6709", 5, 5], ["🈚", "u7121", 5, 4], ["🚻", "restroom", 4, 26], ["🚹", "mens", 2, 26], ["🚺", "womens", 3, 26], ["🚼", "baby_symbol", 5, 26], ["🚾", "wc", 7, 26], ["🅿", "parking", 2, 1], ["♿", "wheelchair", 16, 27], ["🚭", "no_smoking", 26, 16], ["🈷", "u6708", 6, 0], ["🈸", "u7533", 6, 1], ["🈂", "sa", 5, 3], ["Ⓜ", "m", 27, 8], ["🉑", "accept", 6, 5], ["㊙", "secret", 19, 28], ["㊗", "congratulations", 18, 28], ["🆑", "cl", 1, 2], ["🆘", "sos", 2, 3], ["🆔", "id", 3, 1], ["🚫", "no_entry_sign", 26, 14], ["🔞", "underage", 4, 22], ["⛔", "no_entry", 27, 27], ["✳", "eight_spoked_asterisk", 28, 18], ["❇", "sparkle", 28, 21], ["❎", "negative_squared_cross_mark", 28, 23], ["✅", "white_check_mark", 28, 7], ["✴", "eight_pointed_black_star", 28, 19], ["💟", "heart_decoration", 7, 19], ["🆚", "vs", 4, 0], ["📳", "vibration_mode", 9, 21], ["📴", "mobile_phone_off", 10, 21], ["🅰", "a", 0, 1], ["🅱", "b", 1, 1], ["🆎", "ab", 0, 2], ["🅾", "o2", 2, 0], ["💠", "diamond_shape_with_a_dot_inside", 8, 19], ["♻", "recycle", 15, 27], ["♈", "aries", 27, 25], ["♉", "taurus", 27, 26], ["♊", "gemini", 0, 27], ["♋", "cancer", 1, 27], ["♌", "leo", 2, 27], ["♍", "virgo", 3, 27], ["♎", "libra", 4, 27], ["♏", "scorpius", 5, 27], ["♐", "sagittarius", 6, 27], ["♑", "capricorn", 7, 27], ["♒", "aquarius", 8, 27], ["♓", "pisces", 9, 27], ["⛎", "ophiuchus", 26, 27], ["🔯", "six_pointed_star", 21, 22], ["🏧", "atm", 10, 14], ["💹", "chart", 20, 13], ["💲", "heavy_dollar_sign", 20, 6], ["💱", "currency_exchange", 20, 5], ["❌", "x", 28, 22], ["‼", "bangbang", 15, 26], ["⁉", "interrobang", 16, 26], ["❗", "exclamation", 28, 27], ["❓", "question", 28, 24], ["❕", "grey_exclamation", 28, 26], ["❔", "grey_question", 28, 25], ["⭕", "o", 15, 28], ["🔝", "top", 3, 22], ["🔚", "end", 0, 22], ["🔙", "back", 22, 21], ["🔛", "on", 1, 22], ["🔜", "soon", 2, 22], ["🔃", "arrows_clockwise", 21, 21], ["🕛", "clock12", 1, 23], ["🕐", "clock1", 23, 13], ["🕑", "clock2", 23, 14], ["🕒", "clock3", 23, 15], ["🕓", "clock4", 23, 16], ["🕔", "clock5", 23, 17], ["🕕", "clock6", 23, 18], ["🕖", "clock7", 23, 19], ["🕗", "clock8", 23, 20], ["🕘", "clock9", 23, 21], ["🕙", "clock10", 23, 22], ["🕚", "clock11", 0, 23], ["✖", "heavy_multiplication_x", 28, 16], ["➕", "heavy_plus_sign", 1, 28], ["➖", "heavy_minus_sign", 2, 28], ["➗", "heavy_division_sign", 3, 28], ["♠", "spades", 10, 27], ["♥", "hearts", 12, 27], ["♣", "clubs", 11, 27], ["♦", "diamonds", 13, 27], ["💮", "white_flower", 20, 2], ["💯", "100", 20, 3], ["✔", "heavy_check_mark", 28, 15], ["☑", "ballot_box_with_check", 27, 20], ["🔘", "radio_button", 22, 20], ["🔗", "link", 22, 19], ["➰", "curly_loop", 5, 28], ["〰", "wavy_dash", 16, 28], ["〽", "part_alternation_mark", 17, 28], ["🔱", "trident", 23, 0], ["◼", "black_medium_square", 27, 14], ["◻", "white_medium_square", 27, 13], ["◾", "black_medium_small_square", 27, 16], ["◽", "white_medium_small_square", 27, 15], ["▪", "black_small_square", 27, 9], ["▫", "white_small_square", 27, 10], ["🔺", "small_red_triangle", 23, 9], ["🔲", "black_square_button", 23, 1], ["🔳", "white_square_button", 23, 2], ["⚫", "black_circle", 21, 27], ["⚪", "white_circle", 20, 27], ["🔴", "red_circle", 23, 3], ["🔵", "large_blue_circle", 23, 4], ["🔻", "small_red_triangle_down", 23, 10], ["⬜", "white_large_square", 13, 28], ["⬛", "black_large_square", 12, 28], ["🔶", "large_orange_diamond", 23, 5], ["🔷", "large_blue_diamond", 23, 6], ["🔸", "small_orange_diamond", 23, 7], ["🔹", "small_blue_diamond", 23, 8]]];
}, , , , , , , , function (e, t, n) {
    "use strict";
    function i(e, t) {
        return e.replace(/{([\s\S]+?)}/g, function (e, n) {
            return t[n]
        })
    }

    var o = n(95), r = n(241), a = ["ar", "bg", "bs", "ca", "cs", "da", "de", "de-form", "el", "en", "es", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "mn", "nb", "nl", "pl", "pt", "ro", "ru", "sl", "sr", "sv", "tr", "vi", "zh-CN", "zh-TW"], s = "en", c = {};
    o.each(a, function (e) {
        c[e] = n(242)("./" + e + ".json")
    });
    var l = {
        translate: function (e, t) {
            var n = c[s];
            if (!n)return r.error("Unknown locale '" + s + "'"), "";
            var o = n[e];
            if (!o)return r.error("Unknown key '" + e + "' in locale '" + s + "'"), "";
            try {
                return i(o, t)
            } catch (a) {
                return r.error("Interpolation failed for key '" + e + "' in locale '" + s + "'"), ""
            }
            return o
        }, setLocales: function (e) {
            c = e
        }, setLocale: function (e) {
            s = e
        }, getLocales: function () {
            return c
        }, getLocale: function () {
            return s
        }, isLocaleEnglish: function () {
            return "en" === s
        }, isSupportedLocale: function (e) {
            return o.has(c, e)
        }
    };
    e.exports = l
}, function (e, t) {
    "use strict";
    function n(e, t) {
        i.push((new Date).toString() + " " + e + " " + t)
    }

    var i = [];
    e.exports = {
        info: function (e) {
            n("INFO ", e)
        }, error: function (e) {
            n("ERROR", e)
        }, getLines: function () {
            return i
        }
    }
}, function (e, t, n) {
    function i(e) {
        return n(o(e))
    }

    function o(e) {
        return r[e] || function () {
                throw new Error("Cannot find module '" + e + "'.")
            }()
    }

    var r = {
        "./ar.json": 243,
        "./bg.json": 244,
        "./bs.json": 245,
        "./ca.json": 246,
        "./cs.json": 247,
        "./da.json": 248,
        "./de-form.json": 249,
        "./de.json": 250,
        "./el.json": 251,
        "./en.json": 252,
        "./es.json": 253,
        "./et.json": 254,
        "./fi.json": 255,
        "./fr.json": 256,
        "./he.json": 257,
        "./hr.json": 258,
        "./hu.json": 259,
        "./id.json": 260,
        "./it.json": 261,
        "./ja.json": 262,
        "./ko.json": 263,
        "./lt.json": 264,
        "./lv.json": 265,
        "./mn.json": 266,
        "./nb.json": 267,
        "./nl.json": 268,
        "./pl.json": 269,
        "./pt.json": 270,
        "./ro.json": 271,
        "./ru.json": 272,
        "./sl.json": 273,
        "./sr.json": 274,
        "./sv.json": 275,
        "./tr.json": 276,
        "./vi.json": 277,
        "./zh-CN.json": 278,
        "./zh-TW.json": 279
    };
    i.keys = function () {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 242
}, function (e, t) {
    e.exports = {
        "language-name-en": "Arabic",
        "language-name": "العربية",
        "new-message": "رسالة جديدة",
        "new-comment-placeholder": "إنتظر الرد",
        "new-conversation-placeholder": "إبدأ محادثة",
        "new-article-conversation-placeholder": "وجًه سؤالًا",
        "no-conversations": "لا يوجد محادثات",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "إرسال",
        "powered-by-intercom": "بواسطة إنتركوم",
        Xs: "الآن",
        Xm: "منذ {delta} دقيقة",
        Xh: "منذ {delta} ساعات",
        Xd: "منذ {delta} أيام",
        Xw: "منذ {delta} أسابيع",
        you: "أنت",
        delivered: "وصلت",
        "anonymous-email-response": "شكرًا لك، سوف نُبلغك عبر البريد الإلكتروني ({email}) عند ردنا.",
        "anonymous-email-responder": "دعنا نُبلغك عبر البريد الإلكتروني.",
        "your-email": "بريدك الإلكتروني",
        sending: "جاري الإرسال",
        failed: "خطأ، إضغط لإعادة المحاولة",
        uploading: "جارٍ التحميل",
        uploaded: "تم التحميل",
        "max-upload-size": "الحد الأقصى للتحميل هو {number} ميجا بايت",
        "insert-emoji": "إدراج رمز تعبيري",
        "send-attachment": "إرسال المرفق",
        "press-enter-to-send": "اضغط Enter للإرسال",
        "not-seen-yet": "لم تتم مشاهدتها بعد",
        seen: "تمت المشاهدتها",
        "x-says": "{firstName} يقول ...",
        "someone-says": "شخص ما يقول ...",
        "active-in-the-last-x-minutes": "كان نشطًا خلال الـ {minutes} دقائق الأخيرة",
        "active-in-the-last-hour": "آخر نشاط كان منذ ساعة",
        "last-active-one-hour-ago": "آخر نشاط كان منذ ساعة",
        "last-active-x-hours-ago": "آخر نشاط كان منذ {hours} ساعات",
        "last-active-one-day-ago": "آخر نشاط كان أمس",
        "last-active-x-days-ago": "وكان آخر نشاط منذ {days} أيام",
        "last-active-more-than-one-week-ago": "آخر نشاط كان منذ أكثر من أسبوع",
        "message-autoresponse": "سوف نُبلغك هنا عند ردّنا.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "استقبل تحديثات هذه المحادثة عبر البريد الإلكتروني",
        "team-will-reply-asap": "سيرُد الفريق عليك في أقرب وقت ممكن.",
        "check-back-or-email": "ألقِ نظرة هنا في وقت لاحق أو سيقومون بمراسلتك عبر البريد الإلكتروني {email} إذا كنت غير متواجد.",
        close: "Close",
        "video-launcher-conversation-placeholder": ""
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Bulgarian",
        "language-name": "Български",
        "new-message": "Нова дискусия",
        "new-comment-placeholder": "Напиши отговор&hellip;",
        "new-conversation-placeholder": "Започни дискусия&hellip;",
        "new-article-conversation-placeholder": "Задайте въпрос&hellip;",
        "no-conversations": "Няма дискусии",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Изпрати",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Преди малко",
        Xm: "преди {delta}мин.",
        Xh: "преди {delta}часа",
        Xd: "преди {delta}дни",
        Xw: "преди {delta}седмици",
        you: "You",
        delivered: "Доставено",
        "anonymous-email-response": "Блгодаря, ще ви съобщим по имейл ({email}) когато отговорим",
        "anonymous-email-responder": "Нека да ви уведомим по имейл.",
        "your-email": "Вашият имейл",
        sending: "Изпраща се&hellip;",
        failed: "Не е доставено. Кликнете за да опитате отново.",
        uploading: "Качва се",
        uploaded: "Качено",
        "max-upload-size": "Максималния размер за качване е {number}MB",
        "insert-emoji": "Въведи емотикон",
        "send-attachment": "Изпрати прикачен файл",
        "press-enter-to-send": "Натиснете Enter за да изпратите",
        "not-seen-yet": "Не е видяно все още",
        seen: "Видяно",
        "x-says": "{firstName} казва...",
        "someone-says": "Някой казва...",
        "active-in-the-last-x-minutes": "Активен през последните {minutes} минути",
        "active-in-the-last-hour": "Активен през последния час",
        "last-active-one-hour-ago": "Последно активен преди 1 час",
        "last-active-x-hours-ago": "Последно активен преди {hours} часа",
        "last-active-one-day-ago": "Последно активен вчера",
        "last-active-x-days-ago": "Последно активен преди {days} дни",
        "last-active-more-than-one-week-ago": "Последно активен преди 1 седмица",
        "message-autoresponse": "Ще ви уведомим, когато отгооврим.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "",
        "team-will-reply-asap": "",
        "check-back-or-email": "",
        close: "Close"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Bosnian",
        "language-name": "Bosanski",
        "new-message": "Nova poruka",
        "new-comment-placeholder": "Napiši odovor&hellip;",
        "new-conversation-placeholder": "Započni razgovor&hellip;",
        "new-article-conversation-placeholder": "Postavite pitanje&hellip;",
        "no-conversations": "Nema razgovora",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Pošalji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Upravo sada",
        Xm: "{delta}m prije",
        Xh: "{delta}h prije",
        Xd: "{delta}d prije",
        Xw: "{delta}sedm. prije",
        you: "Vi",
        delivered: "Isporučena",
        "anonymous-email-response": "Hvala, mi ćemo vas obavijestiti putem e-maila ({email}) kad odgovorimo.",
        "anonymous-email-responder": "Dozvolite da vas obavijestimo putem e-maila.",
        "your-email": "Vaš e-mail",
        sending: "Slanje&hellip;",
        failed: "Nije isporučena. Kliknite da pokušate ponovo.",
        uploading: "Snimanje",
        uploaded: "Snimljeno",
        "max-upload-size": "Maksimalna veličina upload je {number}MB",
        "insert-emoji": "Ubacite Emoji",
        "send-attachment": "Pošalji prilog",
        "press-enter-to-send": "Pritisnite „Enter“ za slanje",
        "not-seen-yet": "Nije još pogledano",
        seen: "Pogledano",
        "x-says": "{firstName} kaže...",
        "someone-says": "Netko kaže...",
        "active-in-the-last-x-minutes": "Aktivan zadnjih {minutes} minuta",
        "active-in-the-last-hour": "Aktivan je u posljednjih sat vremena",
        "last-active-one-hour-ago": "Zadnji put aktivan: prije 1 sat",
        "last-active-x-hours-ago": "Zadnji put aktivan: prije {hours} sati",
        "last-active-one-day-ago": "Zadnji puta aktivan: jučer",
        "last-active-x-days-ago": "Zadnji put aktivan: {days} dana prije",
        "last-active-more-than-one-week-ago": "Zadnji puta aktivan: prije više od jednog tjedna",
        "message-autoresponse": "Obavijestit ćemo vas nakon što odgovorimo.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "",
        "team-will-reply-asap": "",
        "check-back-or-email": "",
        close: "Zatvori"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Catalan",
        "language-name": "Català",
        "new-message": "Missatge nou",
        "new-comment-placeholder": "Escriu una resposta&hellip;",
        "new-conversation-placeholder": "Comença una conversa&hellip;",
        "new-article-conversation-placeholder": "Feu una pregunta&hellip;",
        "no-conversations": "Sense converses",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Enviar",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Just ara",
        Xm: "Fa {delta}m",
        Xh: "Fa {delta}h",
        Xd: "Fa {delta}d",
        Xw: "Fa {delta}set",
        you: "Tu",
        delivered: "Entregat",
        "anonymous-email-response": "Gràcies, et notificarem per email ({email}) quan contestem.",
        "anonymous-email-responder": "Deixa'ns el teu correu electrònic i t'informarem.",
        "your-email": "El teu email",
        sending: "Enviant&hellip;",
        failed: "No entregat. Pitja per tornar-hi.",
        uploading: "Pujant",
        uploaded: "Pujat",
        "max-upload-size": "La mida màxima de càrrega és {number}MB",
        "insert-emoji": "Insertar emogi",
        "send-attachment": "Enviar un afegit",
        "press-enter-to-send": "Prem Entrar per enviar",
        "not-seen-yet": "Sense veure encara",
        seen: "Vist",
        "x-says": "{firstName} diu...",
        "someone-says": "Algú diu...",
        "active-in-the-last-x-minutes": "Actiu els darrers {minutes} minuts",
        "active-in-the-last-hour": "Actiu per darrera vegada fa 1 hora",
        "last-active-one-hour-ago": "Actiu per darrera vegada fa 1 hora",
        "last-active-x-hours-ago": "Actiu per darrera vegada fa {hours} hores",
        "last-active-one-day-ago": "Actiu per darrera vegada ahir",
        "last-active-x-days-ago": "Actiu per última vegada fa {days} dies",
        "last-active-more-than-one-week-ago": "Actiu per darrera vegada fa més d'una setmana",
        "message-autoresponse": "Et notificarem per aquí quan contestem.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Rebre les novetats d'aquesta conversa per correu electrònic",
        "team-will-reply-asap": "L'equip et respondrà tan aviat com pugui.",
        "check-back-or-email": "Torna a comprovar-ho aquí més tard, o ells t'escriuran un correu a {email} si no hi ets.",
        close: "Close"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Czech",
        "language-name": "Česky",
        "new-message": "Nová zpráva",
        "new-comment-placeholder": "Napsat odpověď&hellip;",
        "new-conversation-placeholder": "Zahájení konverzace&hellip;",
        "new-article-conversation-placeholder": "Zeptejte se&hellip;",
        "no-conversations": "Žádné konverzace",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Odeslat",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Nyní",
        Xm: "Před {delta}m",
        Xh: "Před {delta}h",
        Xd: "Před {delta}d",
        Xw: "Před {delta}t",
        you: "Vy",
        delivered: "Doručeno",
        "anonymous-email-response": "Děkujeme, až vám odpovíme, budeme vás o tom informovat e-mailem ({email}).",
        "anonymous-email-responder": "Dovolte nám informovat vás e-mailem.",
        "your-email": "Váš e-mail",
        sending: "Posílá se&hellip;",
        failed: "Doručení se nezdařilo. Klikněte a zkuste to znovu.",
        uploading: "Odesílání",
        uploaded: "Odesláno",
        "max-upload-size": "Maximální velikost odesílaného souboru je {number}MB",
        "insert-emoji": "Vložit emoji",
        "send-attachment": "Poslat přílohu",
        "press-enter-to-send": "",
        "not-seen-yet": "",
        seen: "",
        "x-says": "",
        "someone-says": "",
        "active-in-the-last-x-minutes": "",
        "active-in-the-last-hour": "",
        "last-active-one-hour-ago": "",
        "last-active-x-hours-ago": "",
        "last-active-one-day-ago": "",
        "last-active-x-days-ago": "",
        "last-active-more-than-one-week-ago": "",
        "message-autoresponse": "",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Dostávat aktualizované příspěvky k této konverzaci prostřednictvím mailu",
        "team-will-reply-asap": "Tým se vám ozve, jakmile bude moct.",
        "check-back-or-email": "Podívejte se sem později, a pokud tu právě nebudete, pošlou vám mail na adresu {email}.",
        close: "Zavřít okno"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Danish",
        "language-name": "Dansk",
        "new-message": "Ny besked",
        "new-comment-placeholder": "Skriv et svar&hellip;",
        "new-conversation-placeholder": "Start en samtale&hellip;",
        "new-article-conversation-placeholder": "Spørg her&hellip;",
        "no-conversations": "Ingen samtaler",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Send",
        "powered-by-intercom": "Drevet af Intercom",
        Xs: "Lige nu",
        Xm: "{delta}m siden",
        Xh: "{delta}t siden",
        Xd: "{delta}d siden",
        Xw: "{delta}u siden",
        you: "Dig",
        delivered: "Leveret",
        "anonymous-email-response": "Tak, vi vil lade dig vide via e-mail på ({email}), når vi svarer.",
        "anonymous-email-responder": "Lad os give dig besked via e-mail.",
        "your-email": "Din e-mail",
        sending: "Sender&hellip;",
        failed: "Ikke leveret. Klik, for at prøve igen.",
        uploading: "Uploader",
        uploaded: "Uploadet",
        "max-upload-size": "Den maksimale uploadstørrelse er {number}MB",
        "insert-emoji": "Indsæt emoji",
        "send-attachment": "Send vedhæftet fil",
        "press-enter-to-send": "Tryk på Enter for at sende",
        "not-seen-yet": "Ikke set endnu",
        seen: "Set",
        "x-says": "{firstName} siger...",
        "someone-says": "Nogen siger...",
        "active-in-the-last-x-minutes": "Aktiv inden for de sidste {minutes} minutter",
        "active-in-the-last-hour": "Aktiv i den sidste time",
        "last-active-one-hour-ago": "Sidst aktiv 1 time siden",
        "last-active-x-hours-ago": "Sidst aktiv {hours} timer siden",
        "last-active-one-day-ago": "Sidst aktiv i går",
        "last-active-x-days-ago": "Sidste aktiv {days} dage siden",
        "last-active-more-than-one-week-ago": "Sidst aktiv over 1 uge siden",
        "message-autoresponse": "Vi vil give dig besked, når vi svarer.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Modtag opdateringer om denne samtale via e-mail",
        "team-will-reply-asap": "Holdet vil vende tilbage til dig, så snart de kan.",
        "check-back-or-email": "Vend tilbage her senere, eller vent på at modtage en e-mail til {email}, hvis du ikke er tilgængelig.",
        close: "Luk"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "German (formal)",
        "language-name": "Deutsch (höflich)",
        "new-message": "Neue Nachricht",
        "new-comment-placeholder": "Antwort schreiben&hellip;",
        "new-conversation-placeholder": "Unterhaltung beginnen&hellip;",
        "new-article-conversation-placeholder": "Stellen Sie eine Frage&hellip;",
        "no-conversations": "Keine Unterhaltungen",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Senden",
        "powered-by-intercom": "Betrieben von Intercom",
        Xs: "Jetzt",
        Xm: "vor {delta}m",
        Xh: "vor {delta}h",
        Xd: "vor {delta}d",
        Xw: "vor {delta}w",
        you: "Sie",
        delivered: "Zugestellt",
        "anonymous-email-response": "Danke, wir benachrichtigen Sie per E-Mail ({email}), wenn wir antworten.",
        "anonymous-email-responder": "Wir benachrichtigen Sie per E-Mail.",
        "your-email": "Ihre E-Mail-Adresse",
        sending: "Senden&hellip;",
        failed: "Nicht zugestellt. Bitte klicken, um es nochmals zu versuchen.",
        uploading: "Hochladen",
        uploaded: "Hochgeladen",
        "max-upload-size": "Die maximale Größe zum Hochladen ist {number}MB",
        "insert-emoji": "Emoticon einfügen",
        "send-attachment": "Anhang senden",
        "press-enter-to-send": "Zum Senden ENTER drücken",
        "not-seen-yet": "Noch nicht geöffnet",
        seen: "Geöffnet",
        "x-says": "{firstName} sagt...",
        "someone-says": "Jemand sagt...",
        "active-in-the-last-x-minutes": "In den letzten {minutes} Minuten aktiv",
        "active-in-the-last-hour": "In der letzten Stunde aktiv",
        "last-active-one-hour-ago": "Vor 1 Stunde das letzte Mal aktiv",
        "last-active-x-hours-ago": "Vor {hours} Stunden das letzte Mal aktiv",
        "last-active-one-day-ago": "Gestern das letzte Mal aktiv",
        "last-active-x-days-ago": "Vor {days} Tagen das letzte Mal aktiv",
        "last-active-more-than-one-week-ago": "Vor über 1 Woche das letzte Mal aktiv",
        "message-autoresponse": "Wir benachrichtigen Sie hier, sobald wir antworten.",
        "median-reply-autoresponse-with-email": "Schauen Sie später wieder vorbei. Falls Sie nicht online sind, schreiben sie Ihnen eine E-Mail an {email}.",
        "median-reply-autoresponse-without-email": "Schauen Sie später wieder vorbei, oder hinterlassen Sie Ihre E-Mail Addresse um benachrichtigt zu werden, falls Sie nicht online sind.",
        "receive-updates-email-collector": "Erhalten Sie E-Mail-Benachrichtigungen bei neuen Nachrichten in diesem Gespräch",
        "team-will-reply-asap": "Das Team wird Ihnen baldmöglichst antworten.",
        "check-back-or-email": "Schauen Sie später wieder vorbei. Falls Sie nicht online sind, schreiben sie Ihnen eine E-Mail an {email}.",
        close: "Schließen"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "German",
        "language-name": "Deutsch",
        "new-message": "Neue Nachricht",
        "new-comment-placeholder": "Antwort schreiben&hellip;",
        "new-conversation-placeholder": "Unterhaltung beginnen&hellip;",
        "new-article-conversation-placeholder": "Stellen Sie eine Frage&hellip;",
        "no-conversations": "Keine Unterhaltungen",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Senden",
        "powered-by-intercom": "Betrieben von Intercom",
        Xs: "Gerade eben",
        Xm: "vor {delta}m",
        Xh: "vor {delta}h",
        Xd: "vor {delta}d",
        Xw: "vor {delta}w",
        you: "Du",
        delivered: "Zugestellt",
        "anonymous-email-response": "Danke, wir benachrichtigen Dich per E-Mail ({email}), wenn wir antworten.",
        "anonymous-email-responder": "Wir benachrichtigen Dich per E-Mail.",
        "your-email": "Deine E-Mail-Adresse",
        sending: "Senden&hellip;",
        failed: "Nicht zugestellt. Klicke, um es nochmals zu versuchen.",
        uploading: "Lädt hoch",
        uploaded: "Hochgeladen",
        "max-upload-size": "Die maximale Größe zum Hochladen ist {number}MB",
        "insert-emoji": "Emoticon einfügen",
        "send-attachment": "Anhang senden",
        "press-enter-to-send": "Zum Senden ENTER drücken",
        "not-seen-yet": "Noch nicht geöffnet",
        seen: "Geöffnet",
        "x-says": "{firstName} sagt...",
        "someone-says": "Jemand sagt...",
        "active-in-the-last-x-minutes": "In den letzten {minutes} Minuten aktiv",
        "active-in-the-last-hour": "In der letzten Stunde aktiv",
        "last-active-one-hour-ago": "Vor 1 Stunde das letzte Mal aktiv",
        "last-active-x-hours-ago": "Vor {hours} Stunden das letzte Mal aktiv",
        "last-active-one-day-ago": "Gestern das letzte Mal aktiv",
        "last-active-x-days-ago": "Vor {days} Tagen das letzte Mal aktiv",
        "last-active-more-than-one-week-ago": "Vor über 1 Woche das letzte Mal aktiv",
        "message-autoresponse": "Wir benachrichtigen dich hier, sobald wir antworten.",
        "median-reply-autoresponse-with-email": "Schau später wieder vorbei. Falls du nicht online bist, schreiben sie dir eine E-Mail an {email}.",
        "median-reply-autoresponse-without-email": "Schau später wieder vorbei, oder hinterlasse Deine E-Mail Addresse um benachrichtigt zu werden, falls Du nicht online bist.",
        "receive-updates-email-collector": "Erhalte E-Mail-Benachrichtigungen bei neuen Nachrichten in diesem Gespräch",
        "team-will-reply-asap": "Das Team wird dir baldmöglichst antworten.",
        "check-back-or-email": "Schau später wieder vorbei. Falls du nicht online bist, schreiben sie dir eine E-Mail an {email}.",
        close: "Schließen"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Greek",
        "language-name": "ελληνικά",
        "new-message": "Νέο Μήνυμα",
        "new-comment-placeholder": "Γράψτε μία απάντηση&hellip;",
        "new-conversation-placeholder": "Ξεκινήστε μια συζήτηση&hellip;",
        "new-article-conversation-placeholder": "Κάντε μια ερώτηση&hellip;",
        "no-conversations": "Καμία συνομιλία",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Αποστολή",
        "powered-by-intercom": "Υποστηρίζεται από την Intercom",
        Xs: "Μόλις τώρα",
        Xm: "{delta}λ πριν",
        Xh: "{delta}ω πριν",
        Xd: "{delta}ημ πριν",
        Xw: "{delta}εβδ πριν",
        you: "Εσύ",
        delivered: "Παραδόθηκε",
        "anonymous-email-response": "Ευχαριστούμε, θα λάβετε απάντησή μας με το email ({email}).",
        "anonymous-email-responder": "Θα σας ειδοποιήσουμε με email.",
        "your-email": "Το email σας",
        sending: "Γίνεται αποστολή&hellip;",
        failed: "Δεν παραδόθηκε. Κάντε κλικ για να ξαναδοκιμάσετε.",
        uploading: "Μεταφόρτωση",
        uploaded: "Μεταφορτώθηκε",
        "max-upload-size": "Το μέγιστο μέγεθος μεταφόρτωσης είναι {number}ΜΒ",
        "insert-emoji": "Εισάγετε emoji",
        "send-attachment": "Στείλτε το συνημμένο",
        "press-enter-to-send": "Πατήστε Enter για αποστολή",
        "not-seen-yet": "Δεν έχει ακόμη αναγνωστεί",
        seen: "Αναγνώστηκε",
        "x-says": "O/H {firstName} λέει...",
        "someone-says": "Κάποιος λέει...",
        "active-in-the-last-x-minutes": "Ενεργός/ή τα τελευταία {minutes} λεπτά",
        "active-in-the-last-hour": "Τελευταία ενεργός/ή πριν από 1 ώρα",
        "last-active-one-hour-ago": "Τελευταία ενεργός/ή πριν από 1 ώρα",
        "last-active-x-hours-ago": "Τελευταία ενεργός/ή πριν από {hours} ώρες",
        "last-active-one-day-ago": "Τελευταία ενεργός/ή χθες",
        "last-active-x-days-ago": "Τελευταία ενεργός/ή πριν από {days} ημέρες",
        "last-active-more-than-one-week-ago": "Τελευταία ενεργός/ή πριν περισσότερο από 1 εβδομάδα",
        "message-autoresponse": "Θα σας ειδοποιήσουμε εδώ όταν απαντήσουμε.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Λάβετε ενημερώσεις σχετικά με αυτή τη συνομιλία μέσω email",
        "team-will-reply-asap": "Η ομάδα θα επικοινωνήσει μαζί σας το συντομότερο δυνατό.",
        "check-back-or-email": "Ελέγξτε ξανά εδώ αργότερα, διαφορετικά θα σας αποσταλεί email στο {email} αν απουσιάζετε.",
        close: "Close"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "English",
        "language-name": "English",
        "new-message": "New Conversation",
        "new-comment-placeholder": "Write a reply&hellip;",
        "new-conversation-placeholder": "Send a message&hellip;",
        "new-article-conversation-placeholder": "Ask a question&hellip;",
        "enter-email-placeholder": "youremail@domain.com",
        "not-now": "Not now",
        "please-enter-a-valid-email": "Please enter a valid email address",
        "no-conversations": "No conversations",
        send: "Send",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Just now",
        Xm: "{delta}m ago",
        Xh: "{delta}h ago",
        Xd: "{delta}d ago",
        Xw: "{delta}w ago",
        you: "You",
        delivered: "Delivered",
        "anonymous-email-response": "Thanks, we'll update you here and by email ({email}).",
        "anonymous-email-responder": "Let us notify you by email.",
        "your-email": "Your email",
        sending: "Sending&hellip;",
        failed: "Not delivered. Click to try again.",
        uploading: "Uploading",
        uploaded: "Uploaded",
        "max-upload-size": "The maximum upload size is {number}MB",
        "insert-emoji": "Insert emoji",
        "send-attachment": "Send attachment",
        "press-enter-to-send": "Press Enter to send",
        "not-seen-yet": "Not seen yet",
        seen: "Seen",
        "x-says": "{firstName} says...",
        "someone-says": "Someone says...",
        "active-in-the-last-x-minutes": "Active in the last {minutes} minutes",
        "active-in-the-last-hour": "Active in the last hour",
        "last-active-one-hour-ago": "Last active 1 hour ago",
        "last-active-x-hours-ago": "Last active {hours} hours ago",
        "last-active-one-day-ago": "Last active yesterday",
        "last-active-x-days-ago": "Last active {days} days ago",
        "last-active-more-than-one-week-ago": "Last active more than 1 week ago",
        "message-autoresponse": "We'll notify you here when we reply.",
        "median-reply-autoresponse-with-email": "Check back here later, or you'll receive updates at {email} if you're away.",
        "median-reply-autoresponse-without-email": "Check back here later, or enter your email address to get notified if you're away.",
        "receive-updates-email-collector": "Receive updates on this conversation via email:",
        "team-will-reply-asap": "The team will get back to you as soon as they can.",
        "check-back-or-email": "Check back here later, or you'll receive updates at {email} if you're away.",
        close: "Close",
        "january-date": "January {date}",
        "february-date": "February {date}",
        "march-date": "March {date}",
        "april-date": "April {date}",
        "may-date": "May {date}",
        "june-date": "June {date}",
        "july-date": "July {date}",
        "august-date": "August {date}",
        "september-date": "September {date}",
        "october-date": "October {date}",
        "november-date": "November {date}",
        "december-date": "December {date}"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Spanish",
        "language-name": "Español",
        "new-message": "Nuevo Mensaje",
        "new-comment-placeholder": "Escribir una respuesta&hellip;",
        "new-conversation-placeholder": "Iniciar una conversación&hellip;",
        "new-article-conversation-placeholder": "Haga una pregunta&hellip;",
        "no-conversations": "No hay conversaciones",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Enviar",
        "powered-by-intercom": "Patrocinado por Intercom",
        Xs: "Justo ahora",
        Xm: "hace {delta}m",
        Xh: "hace {delta}h",
        Xd: "hace {delta}d",
        Xw: "hace {delta}sem",
        you: "Tú",
        delivered: "Entregado",
        "anonymous-email-response": "Gracias. Te informaremos por correo electrónico ({email}) cuando respondamos.",
        "anonymous-email-responder": "Déjanos tu correo electrónico y te informaremos.",
        "your-email": "Correo electrónico",
        sending: "Enviando...",
        failed: "No entregado. Haz clic para volver a intentarlo.",
        uploading: "Subiendo",
        uploaded: "Subido",
        "max-upload-size": "El tamaño máximo de subida es {number}MB",
        "insert-emoji": "Insertar emoji",
        "send-attachment": "Enviar adjunto",
        "press-enter-to-send": "Pulsa Entrar para enviar",
        "not-seen-yet": "Aún no se ha visto",
        seen: "Visto",
        "x-says": "{firstName} dice...",
        "someone-says": "Alguien dice...",
        "active-in-the-last-x-minutes": "Activo los últimos {minutes} minutos",
        "active-in-the-last-hour": "Activo en la última hora",
        "last-active-one-hour-ago": "Activo por última vez hace 1 hora",
        "last-active-x-hours-ago": "Activo por última vez hace {hours} horas",
        "last-active-one-day-ago": "Activo por última vez ayer",
        "last-active-x-days-ago": "Activo por última vez hace {days} dias",
        "last-active-more-than-one-week-ago": "Activo por última vez hace más de una semana",
        "message-autoresponse": "Te notificaremos por aquí cuando contestemos.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Recibe actualizaciones sobre esta conversación por correo electrónico.",
        "team-will-reply-asap": "El equipo se pondrá en contacto contigo en cuanto pueda.",
        "check-back-or-email": "Vuelve más tarde por aquí o se pondrán en contacto contigo por correo electrónico en {email} si estás ausente.",
        close: "Cerrar"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Estonian",
        "language-name": "Eesti keel",
        "new-message": "Uus sõnum",
        "new-comment-placeholder": "Kirjuta vastus&hellip;",
        "new-conversation-placeholder": "Alusta uut vestlust&hellip;",
        "new-article-conversation-placeholder": "Küsi küsimus&hellip;",
        "no-conversations": "Vestlusi ei ole",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Saada",
        "powered-by-intercom": "Teenust pakub Intercom",
        Xs: "Just nüüd",
        Xm: "{delta}m eest",
        Xh: "{delta}t eest",
        Xd: "{delta}p eest",
        Xw: "{delta}n eest",
        you: "Sina",
        delivered: "Saadetud",
        "anonymous-email-response": "Täname! Teatame su meilile ({email}) oma vastusest",
        "anonymous-email-responder": "Las me saadame sulle meiliga teate.",
        "your-email": "Sinu meiliaadress",
        sending: "Saadan &hellip;.",
        failed: "Sõnumi saatmine ebaõnnestus. Klõpsa nupule, et uuesti saata.",
        uploading: "Laen üles",
        uploaded: "Üles laetud",
        "max-upload-size": "Maksimaalne üleslaadimise maht on {number}MB",
        "insert-emoji": "Saada emoji",
        "send-attachment": "Saada manus",
        "press-enter-to-send": "Vajuta saatmiseks sisestuklahvi",
        "not-seen-yet": "Ei ole veel vaadatud",
        seen: "Vaadatud",
        "x-says": "{firstName} ütleb...",
        "someone-says": "Keegi ütleb...",
        "active-in-the-last-x-minutes": "Aktiivne {minutes} minutit",
        "active-in-the-last-hour": "Aktiivne viimase tunni",
        "last-active-one-hour-ago": "Viimati aktiivne 1 tund tagasi",
        "last-active-x-hours-ago": "Viimati aktiivne {hours} tundi tagasi",
        "last-active-one-day-ago": "Viimati aktiivne eile",
        "last-active-x-days-ago": "Viimati aktiivne {days} päeva tagasi",
        "last-active-more-than-one-week-ago": "Viimati aktiivne rohkem kui 1 nädal tagasi",
        "message-autoresponse": "Teatame oma vastusest.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Saa teavitusi selle vestluse kohta meili teel",
        "team-will-reply-asap": "Tiim vastab sulle esimesel võimalusel.",
        "check-back-or-email": "Vaata hiljem siit. Kui oled aga eemal, saadab tiim sulle meili aadressile {email}.",
        close: "Sulge"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Finnish",
        "language-name": "Finnish",
        "new-message": "Uusi viesti",
        "new-comment-placeholder": "Kirjoita vastaus&hellip;",
        "new-conversation-placeholder": "Aloita keskustelu&hellip;",
        "new-article-conversation-placeholder": "Kysy kysymys&hellip;",
        "no-conversations": "Ei keskusteluja",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Lähetä",
        "powered-by-intercom": "Palvelun tarjoaa Intercom",
        Xs: "Juuri nyt",
        Xm: "{delta}m sitten",
        Xh: "{delta}t sitten",
        Xd: "{delta}p sitten",
        Xw: "{delta}vk sitten",
        you: "Sinä",
        delivered: "Lähetetty",
        "anonymous-email-response": "Kiitos. Ilmoitamme sähköpostitse ({email}), kun vastaamme viestiisi.",
        "anonymous-email-responder": "Salli sähköposti-ilmoituksen lähettäminen.",
        "your-email": "Sähköpostiosoitteesi",
        sending: "Lähetetään&hellip;",
        failed: "Lähettäminen epäonnistui. Yritä uudestaan napsauttamalla.",
        uploading: "Ladataan",
        uploaded: "Ladattu",
        "max-upload-size": "Palvelimelle ladattavan tiedoston kokorajoitus on {number}Mt",
        "insert-emoji": "Lisää emoji",
        "send-attachment": "Lähetä liitetiedosto",
        "press-enter-to-send": "Lähetä painamalla Enter",
        "not-seen-yet": "Ei nähty",
        seen: "Nähty",
        "x-says": "{firstName} sanoo...",
        "someone-says": "Joku sanoo...",
        "active-in-the-last-x-minutes": "Aktiivinen {minutes} minuuttia sitten",
        "active-in-the-last-hour": "Aktiivinen viimeisen tunnin aikana",
        "last-active-one-hour-ago": "Aktiivinen tunti sitten",
        "last-active-x-hours-ago": "Aktiivinen {hours} tuntia sitten",
        "last-active-one-day-ago": "Aktiivinen eilen",
        "last-active-x-days-ago": "Aktiivinen {days} päivää sitten",
        "last-active-more-than-one-week-ago": "Aktiivinen yli viikko sitten",
        "message-autoresponse": "Ilmoitamme tässä, kun vastaamme viestiisi.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Vastaanota keskustelun päivitykset sähköpostilla",
        "team-will-reply-asap": "Tiimi ottaa sinuun yhteyttä niin pian kuin mahdollista.",
        "check-back-or-email": "Käväise paikalla myöhemmin. Jos olet poissa, saat sähköpostin osoitteeseen {email}.",
        close: "Sulje"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "French",
        "language-name": "Français",
        "new-message": "Nouveau message",
        "new-comment-placeholder": "Ecrire une réponse&hellip;",
        "new-conversation-placeholder": "Démarrez une conversation&hellip;",
        "new-article-conversation-placeholder": "Poser une question&hellip;",
        "no-conversations": "Aucune conversation",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Envoyer",
        "powered-by-intercom": "Propulsé par Intercom",
        Xs: "À l'instant",
        Xm: "Il y a {delta} min",
        Xh: "Il y a {delta}h",
        Xd: "Il y a {delta}j",
        Xw: "Il y a {delta} sem",
        you: "Vous",
        delivered: "Livré",
        "anonymous-email-response": "Merci, nous vous préviendrons par e-mail ({email}) lorsque nous vous répondons.",
        "anonymous-email-responder": "Laissez-nous vous prévenir par e-mail.",
        "your-email": "Votre e-mail",
        sending: "Envoi en cours&hellip;",
        failed: "Non livré. Cliquez pour réessayer.",
        uploading: "Téléversement",
        uploaded: "Téléversé",
        "max-upload-size": "La taille maximale de téléversement est de {number}Mo",
        "insert-emoji": "Insérer une émoticône",
        "send-attachment": "Envoyer une pièce jointe",
        "press-enter-to-send": "Appuyez sur Entrée pour envoyer",
        "not-seen-yet": "Pas encore vu",
        seen: "Vu",
        "x-says": "{firstName} dit...",
        "someone-says": "Quelqu'un dit...",
        "active-in-the-last-x-minutes": "Actifs dans les {minutes} dernières minutes",
        "active-in-the-last-hour": "Actifs dans la dernière heure",
        "last-active-one-hour-ago": "Dernière activité il y a 1 heure",
        "last-active-x-hours-ago": "Dernière activité il y a {hours} heures",
        "last-active-one-day-ago": "Dernière activité hier",
        "last-active-x-days-ago": "Dernière activité il y a {days} jours",
        "last-active-more-than-one-week-ago": "Dernière activité il y a plus de 1 semaine",
        "message-autoresponse": "Nous vous préviendrons ici lorsque nous vous répondrons.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Recevoir des mises à jour sur cette conversation par e-mail",
        "team-will-reply-asap": "L'équipe vous répondra dès que possible.",
        "check-back-or-email": "Revenez plus tard ou on vous enverra un e-mail à l'adresse {email} si vous êtes absent(e).",
        close: "Fermer cette fenêtre"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Hebrew",
        "language-name": "עברית",
        "new-message": "הודעה חדשה",
        "new-comment-placeholder": "&hellip; כתוב את התשובה",
        "new-conversation-placeholder": "&hellip; הודעה חדשה",
        "new-article-conversation-placeholder": "שאל שאלה",
        "no-conversations": "אין שיחות",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "שליחה",
        "powered-by-intercom": "מופעל על ידי Intercom",
        Xs: "רק עכשיו",
        Xm: "לפני {delta} דקות",
        Xh: "לפני {delta} שעות",
        Xd: "לפני {delta} ימים",
        Xw: "לפני {delta} שבועות",
        you: "אתם",
        delivered: "נמסר",
        "anonymous-email-response": "תודה, נודיע לך באמצעות הדוא'ל ({email}) כאשר ישלח מענה.",
        "anonymous-email-responder": "אפשרי לנו לידע אותך באמצעות דוא'ל.",
        "your-email": "הדוא'ל שלך",
        sending: "שולח&hellip;",
        failed: "לא נמסר. הקש/י לנסות שוב.",
        uploading: "מעלה",
        uploaded: "הועלה",
        "max-upload-size": "הגודל המקסימלי להעלאה הוא {number}MB",
        "insert-emoji": "הוספת אמוג'י",
        "send-attachment": "שליחת קובץ מצורף",
        "press-enter-to-send": "לשליחה לחץ על Enter",
        "not-seen-yet": "עדיין לא נצפה",
        seen: "נצפה",
        "x-says": "{firstName} אומר...",
        "someone-says": "מישהו אומר...",
        "active-in-the-last-x-minutes": "פעילות ב-{minutes} הדקות האחרונות",
        "active-in-the-last-hour": "פעיל בשעה האחרונה",
        "last-active-one-hour-ago": "פעילות אחרונה לפני שעה אחת",
        "last-active-x-hours-ago": "פעילות אחרונה לפני {hours} שעות",
        "last-active-one-day-ago": "פעילות אחרונה אתמול",
        "last-active-x-days-ago": "הפעילות אחרונה ימים {days}",
        "last-active-more-than-one-week-ago": "פעילות אחרונה לפני יותר משבוע",
        "message-autoresponse": "נודיע לך כאן כשתתקבל תשובה.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": 'קבלת עדכונים בדוא"ל אודות שיחה זו',
        "team-will-reply-asap": "הצוות יחזור אליכם בהקדם האפשרי.",
        "check-back-or-email": 'בדקו כאן שוב מאוחר יותר או שהם ישלחו לכם דוא"ל ל-{email} אם אתם לא מחוברים.',
        close: "סגירת חלון קופץ"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Croatian",
        "language-name": "Hrvatski",
        "new-message": "Nova poruka",
        "new-comment-placeholder": "Napiši odovor&hellip;",
        "new-conversation-placeholder": "Započni razgovor&hellip;",
        "new-article-conversation-placeholder": "Postavite pitanje&hellip;",
        "no-conversations": "Nema razgovora",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Pošalji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Upravo sada",
        Xm: "{delta}m prije",
        Xh: "{delta}h prije",
        Xd: "{delta}d prije",
        Xw: "{delta}tjed. prije",
        you: "Vi",
        delivered: "Isporučeno",
        "anonymous-email-response": "Hvala, obavijestit ćemo vas e-poštom ({email}) kad odgovorimo.",
        "anonymous-email-responder": "Željeli bismo vas obavijestiti e-poštom.",
        "your-email": "Vaša e-pošta",
        sending: "Slanje&hellip;",
        failed: "Nije isporučeno. Kliknite za ponovni pokušaj.",
        uploading: "Prenošenje&hellip;",
        uploaded: "Prenešeno",
        "max-upload-size": "Maksimalna veličina prijenosa je {number}MB",
        "insert-emoji": "Umetni emoji",
        "send-attachment": "Pošalji privitak",
        "press-enter-to-send": "Pritisnite „Enter“ za slanje",
        "not-seen-yet": "Nije još pogledano",
        seen: "Pogledano",
        "x-says": "{firstName} kaže...",
        "someone-says": "Netko kaže...",
        "active-in-the-last-x-minutes": "Aktivan zadnjih {minutes} minuta",
        "active-in-the-last-hour": "Aktivan je u posljednjih sat vremena",
        "last-active-one-hour-ago": "Zadnji put aktivan: prije 1 sat",
        "last-active-x-hours-ago": "Zadnji put aktivan: prije {hours} sati",
        "last-active-one-day-ago": "Zadnji puta aktivan: jučer",
        "last-active-x-days-ago": "Zadnji put aktivan: {days} dana prije",
        "last-active-more-than-one-week-ago": "Zadnji puta aktivan: prije više od jednog tjedna",
        "message-autoresponse": "Obavijestit ćemo vas nakon što odgovorimo.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Primajte ažuriranja o ovom razgovoru e-poštom",
        "team-will-reply-asap": "Tim će vam se javiti u što kraćem roku.",
        "check-back-or-email": "Provjerite poslije ovdje ili, ako ste odsutni, pričekajte da vam se jave na adresu {email}.",
        close: "Zatvori"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Hungarian",
        "language-name": "Magyar",
        "new-message": "Új üzenet",
        "new-comment-placeholder": "Írj egy választ&hellip;",
        "new-conversation-placeholder": "Indítsunk el egy beszélgetést&hellip;",
        "new-article-conversation-placeholder": "Tegyen fel egy kérdést&hellip;",
        "no-conversations": "Nincsenek párbeszédek",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Küld",
        "powered-by-intercom": "Technológia: Intercom",
        Xs: "Csak most",
        Xm: "{delta}p",
        Xh: "{delta}ó",
        Xd: "{delta}n",
        Xw: "{delta}h",
        you: "Te",
        delivered: "Kézbesítve",
        "anonymous-email-response": "Köszönjük. A válaszról e-mailben ({email}) értesítünk.",
        "anonymous-email-responder": "Kérj e-mail értesítést.",
        "your-email": "E-mail címed",
        sending: "Küldés&hellip;",
        failed: "Küldés sikertelen. Kattints, hogy újból megpróbáljuk.",
        uploading: "Feltöltés",
        uploaded: "Feltöltve",
        "max-upload-size": "A feltölthető fájl maximális mérete {number}MB",
        "insert-emoji": "Szmájli beszúrása",
        "send-attachment": "Csatolmány küldése",
        "press-enter-to-send": "Küldéshez nyomd meg az Enter billentyűt",
        "not-seen-yet": "Még nem látta",
        seen: "Látta",
        "x-says": "{firstName} szerint...",
        "someone-says": "Valaki szerint...",
        "active-in-the-last-x-minutes": "Aktív az elmúlt {minutes} percben",
        "active-in-the-last-hour": "Aktív az elmúlt órában",
        "last-active-one-hour-ago": "Legutóbb aktív: 1 órája",
        "last-active-x-hours-ago": "Legutóbb aktív: {hours} órája",
        "last-active-one-day-ago": "Legutóbb aktív: tegnap",
        "last-active-x-days-ago": "Legutóbb aktív: {days} nappal ezelőtt",
        "last-active-more-than-one-week-ago": "Legutóbb aktív: több mint 1 hete",
        "message-autoresponse": "A válaszunkról itt értesítünk.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "E-mail értesítés a beszélgetés frissüléséről",
        "team-will-reply-asap": "Csapatunk amint tud, válaszol Önnek.",
        "check-back-or-email": "Nézzen vissza később, vagy ha nincs itt, e-mailt küldünk Önnek a következő címre: {email}.",
        close: "Bezárás"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Bahasa",
        "language-name": "Bahasa",
        "new-message": "Chat Baru",
        "new-comment-placeholder": "Ketik reply&hellip;",
        "new-conversation-placeholder": "Mulai percakapan&hellip;",
        "new-article-conversation-placeholder": "Ajukan pertanyaan&hellip;",
        "no-conversations": "Belum ada percakapan",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Send",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Baru saja",
        Xm: "{delta} menit yang lalu",
        Xh: "{delta} jam yang lalu",
        Xd: "{delta} hari yang lalu",
        Xw: "{delta} minggu yang lalu",
        you: "Anda",
        delivered: "Terkirim",
        "anonymous-email-response": "Terima kasih, Anda akan mendapat kabar dari kami lewat email ({email}) setelah kami mengirim jawaban.",
        "anonymous-email-responder": "Harap perbolehkan kami untuk mengabari Anda lewat email.",
        "your-email": "Email Anda",
        sending: "Sedang mengirim&hellip;",
        failed: "Tidak terkirim. Harap klik untuk mencoba sekali lagi.",
        uploading: "Uploading",
        uploaded: "Uploaded",
        "max-upload-size": "Ukuran upload maksimal adalah {number}MB",
        "insert-emoji": "Masukkan emoji",
        "send-attachment": "Kirim lampiran",
        "press-enter-to-send": "Tekan Enter untuk mengirim",
        "not-seen-yet": "Belum terlihat",
        seen: "Terlihat",
        "x-says": "{firstName} mengatakan...",
        "someone-says": "Seseorang mengatakan...",
        "active-in-the-last-x-minutes": "Aktif dalam {minutes} menit",
        "active-in-the-last-hour": "Aktif dalam 1 jam yang lalu",
        "last-active-one-hour-ago": "Terakhir aktif 1 jam yang lalu",
        "last-active-x-hours-ago": "Terakhir aktif {hours} jam yang lalu",
        "last-active-one-day-ago": "Terakhir aktif kemarin",
        "last-active-x-days-ago": "Terakhir aktif {days} hari yang lalu",
        "last-active-more-than-one-week-ago": "Terakhir aktif lebih dari 1 minggu yang lalu",
        "message-autoresponse": "Anda akan mendapat kabar dari kami di sini ketika kami menjawab.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "",
        "team-will-reply-asap": "",
        "check-back-or-email": "",
        close: "Close"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Italian",
        "language-name": "Italiano",
        "new-message": "Nuovo messaggio",
        "new-comment-placeholder": "Scrivi una risposta&hellip;",
        "new-conversation-placeholder": "Inizia una conversazione&hellip;",
        "new-article-conversation-placeholder": "Poni una domanda&hellip;",
        "no-conversations": "Nessuna conversazione",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Invia",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "In questo istante",
        Xm: "{delta}m fa",
        Xh: "{delta}h fa",
        Xd: "{delta}d fa",
        Xw: "{delta} sett fa",
        you: "Tu",
        delivered: "Consegnato",
        "anonymous-email-response": "Grazie. Ti invieremo una notifica non appena risponderemo tramite email all'indirizzo ({email}).",
        "anonymous-email-responder": "Ricevi una email di notifica.",
        "your-email": "La tua email",
        sending: "Invio in corso&hellip;",
        failed: "Non inviato. Clicca per riprovare.",
        uploading: "Caricamento",
        uploaded: "Caricato",
        "max-upload-size": "Limite massimo di caricamento: {number}MB",
        "insert-emoji": "Inserisci emoji",
        "send-attachment": "Invia l'allegato",
        "press-enter-to-send": "Premi Invio per inviare",
        "not-seen-yet": "Non ancora visualizzato",
        seen: "Visualizzato",
        "x-says": "{firstName} dice...",
        "someone-says": "Qualcuno dice...",
        "active-in-the-last-x-minutes": "Ultima attività negli ultimi {minutes} minuti",
        "active-in-the-last-hour": "Ultima attività: nelle ultime ora",
        "last-active-one-hour-ago": "Ultima attività: 1 ora fa",
        "last-active-x-hours-ago": "Ultima attività: {hours} ore fa",
        "last-active-one-day-ago": "Ultima attività: ieri",
        "last-active-x-days-ago": "Ultima attività: {days} giorni fa",
        "last-active-more-than-one-week-ago": "Ultima attività: più di 1 settimana fa",
        "message-autoresponse": "Quando risponderemo, riceverai una notifica qui.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Ricevi aggiornamenti su questa conversazione tramite e-mail",
        "team-will-reply-asap": "Riceverai una risposta da parte del team non appena possibile.",
        "check-back-or-email": "Controlla qui tra un po' oppure, se non ci sei, riceverai un'e-mail all'indirizzo {email}.",
        close: "Chiudi"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Japanese",
        "language-name": "日本の",
        "new-message": "新しいメッセージ",
        "new-comment-placeholder": "返信を書く&hellip;",
        "new-conversation-placeholder": "会話を始める&hellip;",
        "new-article-conversation-placeholder": "質問する&hellip;",
        "no-conversations": "会話なし",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "送信",
        "powered-by-intercom": "Intercom により稼働しています",
        Xs: "数秒",
        Xm: "{delta}分前",
        Xh: "{delta}時間前",
        Xd: "{delta}日前",
        Xw: "{delta}週間前",
        you: "お客様",
        delivered: "配信済み",
        "anonymous-email-response": "ありがとうございます。返信時にはこちらからメール({email})に通知します。",
        "anonymous-email-responder": "メールで通知させてください。",
        "your-email": "あなたのメール",
        sending: "送信中&hellip;",
        failed: "送信されませんでした。クリックして再度お試しください。",
        uploading: "アップロード中",
        uploaded: "アップロード済み",
        "max-upload-size": "アップロードできるサイズの上限は{number}MBです",
        "insert-emoji": "絵文字を挿入する",
        "send-attachment": "添付を送信する",
        "press-enter-to-send": "Enterキーを押して送信してください",
        "not-seen-yet": "まだ閲覧されていません",
        seen: "閲覧済み",
        "x-says": "{firstName}さんが言っています...",
        "someone-says": "誰かが言っています...",
        "active-in-the-last-x-minutes": "{minutes}分前からオンライン",
        "active-in-the-last-hour": "最後の時間でアクティブ",
        "last-active-one-hour-ago": "最終オンライン時: 1時間前",
        "last-active-x-hours-ago": "最終オンライン時: {hours}時間前",
        "last-active-one-day-ago": "最終オンライン時: 昨日",
        "last-active-x-days-ago": "最終オンライン時: {days}日前",
        "last-active-more-than-one-week-ago": "最終オンライン時: 1週間以上前",
        "message-autoresponse": "返信時にはこちらか通知します。",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "この会話についての最新情報をメールで受け取る",
        "team-will-reply-asap": "当社チームができるだけすぐにお返事いたします。",
        "check-back-or-email": "後ほどこちらから再度確認してください。あなたがいない場合は、{email}にメールが届きます。",
        close: "クローズ"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Korean",
        "language-name": "한국어",
        "new-message": "새 메시지",
        "new-comment-placeholder": "답변 작성하기&hellip;",
        "new-conversation-placeholder": "대화 시작하기&hellip;",
        "new-article-conversation-placeholder": "문의하기&hellip;",
        "no-conversations": "대화 없음",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "전송",
        "powered-by-intercom": "Intercom 제공",
        Xs: "방금",
        Xm: "{delta} 분 전",
        Xh: "{delta} 시간 전",
        Xd: "{delta} 일 전",
        Xw: "{delta} 주 전",
        you: "나",
        delivered: "전달됨",
        "anonymous-email-response": "감사합니다. 답장을 할 때 이메일({email})로 알려드리겠습니다.",
        "anonymous-email-responder": "이메일로 알려드리겠습니다.",
        "your-email": "이메일",
        sending: "전송 중&hellip;",
        failed: "전송 실패. 다시 시도하시려면 클릭하세요.",
        uploading: "업로드 중",
        uploaded: "업로드 완료",
        "max-upload-size": "업로드 가능한 최대 크기는 {number}MB입니다.",
        "insert-emoji": "에모지 삽입",
        "send-attachment": "첨부파일 전송",
        "press-enter-to-send": "엔터 키를 눌러 전송하세요.",
        "not-seen-yet": "아직 읽지 않음",
        seen: "읽음",
        "x-says": "{firstName}님의 메시지...",
        "someone-says": "누군가의 메시지...",
        "active-in-the-last-x-minutes": "마지막 접속 {minutes}분 전",
        "active-in-the-last-hour": "마지막 접속 1시간 전",
        "last-active-one-hour-ago": "마지막 접속 1시간 전",
        "last-active-x-hours-ago": "마지막 접속 {hours}시간 전",
        "last-active-one-day-ago": "마지막 접속 어제",
        "last-active-x-days-ago": "마지막 접속 {days}일 전",
        "last-active-more-than-one-week-ago": "마지막 접속 1주일 전",
        "message-autoresponse": "저희가 답변하면 여기에서 알림을 확인하실 수 있습니다.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "이 대화의 업데이트 내용을 이메일로 받기",
        "team-will-reply-asap": "가능한 빨리 팀이 답변을 드립니다.",
        "check-back-or-email": "나중에 여기에서 확인해보세요. 부재중일 경우, {email}으로 이메일이 발송됩니다.",
        close: "닫기"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Lithuanian",
        "language-name": "Lietuvių kalba",
        "new-message": "Nauja žinutė",
        "new-comment-placeholder": "Atsakyti&hellip;",
        "new-conversation-placeholder": "Pradėti pokalbį&hellip;",
        "new-article-conversation-placeholder": "Užduokite klausimą&hellip;",
        "no-conversations": "Nėra pokalbių",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Siųsti",
        "powered-by-intercom": "Sukurta Intercom",
        Xs: "Ką tik",
        Xm: "prieš {delta}m",
        Xh: "prieš {delta}v",
        Xd: "prieš {delta}d",
        Xw: "prieš {delta}s",
        you: "Tu",
        delivered: "Pristatyta",
        "anonymous-email-response": "Ačiū. Apie atsakymą pranešime el. paštu.",
        "anonymous-email-responder": "Leiskite pranešti el. paštu.",
        "your-email": "Jūsų el. paštas",
        sending: "Siunčiama&hellip;",
        failed: "Nepristatyta. Spustelėkite, kad pabandytume dar kartą.",
        uploading: "Keliama",
        uploaded: "Įkelta",
        "max-upload-size": "Maksimalus leistinas failo dydis – {number}MB",
        "insert-emoji": "Įterpkite šypsniuką",
        "send-attachment": "Siųskite priedą",
        "press-enter-to-send": "Paspauskite „Enter“, kad išsiųstumėte",
        "not-seen-yet": "Dar nepamatyta.",
        seen: "Pamatyta.",
        "x-says": "{firstName} sako...",
        "someone-says": "Kažkas sako...",
        "active-in-the-last-x-minutes": "Aktyvus per paskutines {minutes} minutes",
        "active-in-the-last-hour": "Aktyvus paskutinę valandą",
        "last-active-one-hour-ago": "Paskutinį kartą aktyvus prieš 1 valandą",
        "last-active-x-hours-ago": "Paskutinį kartą aktyvus prieš {hours} valandas",
        "last-active-one-day-ago": "Paskutinį kartą aktyvus vakar",
        "last-active-x-days-ago": "Paskutinį kartą aktyvus prieš {days} dienas",
        "last-active-more-than-one-week-ago": "Paskutinį kartą aktyvus daugiau nei prieš 1 savaitę",
        "message-autoresponse": "Atsakydami jums pranešime.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Gaukite informaciją apie šį pokalbį elektroniniu paštu",
        "team-will-reply-asap": "Komanda Jums atsakys kai tik galės.",
        "check-back-or-email": "Grįžkite vėliau arba, jei nepasiliksite, gausite elektroninį laišką adresu {email}.",
        close: "Uždaryti"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Latvian",
        "language-name": "Latviešu",
        "new-message": "Jauna ziņa",
        "new-comment-placeholder": "Rakstīt atbildi&hellip;",
        "new-conversation-placeholder": "Uzsākt sarunu&hellip;",
        "new-article-conversation-placeholder": "Uzdot jautājumu&hellip;",
        "no-conversations": "Nav ziņas",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Sūtīt",
        "powered-by-intercom": "Nodrošina Intercom",
        Xs: "Tikko",
        Xm: "pirms {delta}m",
        Xh: "pirms {delta}s",
        Xd: "pirms {delta}d",
        Xw: "pirms {delta}n",
        you: "Tu",
        delivered: "Nosūtīts",
        "anonymous-email-response": "Mēs jūs informēsim pa e-pastu ({email}), kad mūsu ziņojums būs nosūtīts.",
        "anonymous-email-responder": "Mēs informēsim Jūs pa e-pastu.",
        "your-email": "Jūsu e-pasts",
        sending: "Nosūta&hellip;",
        failed: "Nav nosūtīts. Uzklišķiniet vēlreiz.",
        uploading: "Augšupielādē",
        uploaded: "Augšupielādēts",
        "max-upload-size": "Maksimālais augšupielādes lielums ir {number}MB",
        "insert-emoji": "Ievietot emocijzīmes",
        "send-attachment": "Nosūtīt pielikumu",
        "press-enter-to-send": "Nospiediet Enter, lai nosūtītu",
        "not-seen-yet": "Vēl nav apskatīts",
        seen: "Apskatīts",
        "x-says": "{firstName} saka...",
        "someone-says": "Kāds saka...",
        "active-in-the-last-x-minutes": "Aktīvs pēdējās {minutes} minūtēs",
        "active-in-the-last-hour": "Aktīvs pēdējās stundas",
        "last-active-one-hour-ago": "Pēdējoreiz aktīvs pirms 1 stundas",
        "last-active-x-hours-ago": "Pēdējoreiz aktīvs pirms {hours} stundām",
        "last-active-one-day-ago": "Pēdējoreiz aktīvs vakar",
        "last-active-x-days-ago": "Pēdējoreiz aktīvs pirms {days} dienas",
        "last-active-more-than-one-week-ago": "Pēdējoreiz aktīvs pirms vairāk nekā 1 nedēļas",
        "message-autoresponse": "Mēs jūs informēsim, kad būsim nosūtījuši atbildi.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Saņemiet jaunāko informāciju par šo saraksti pa e-pastu",
        "team-will-reply-asap": "Komandas loceklis sazināsies ar Jums, cik ātri vien iespējams.",
        "check-back-or-email": "Mēģiniet vēlāk, vai Jums tiks nosūtīts e-pasts uz {email} Jūsu prombūtnes laikā.",
        close: "Aizvērt"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Mongolian",
        "language-name": "Монгол",
        "new-message": "Шинэ Зурвас",
        "new-comment-placeholder": "Хариу бичих&hellip;",
        "new-conversation-placeholder": "Яриа эхлэх&hellip;",
        "new-article-conversation-placeholder": "Асуулт асуух&hellip;",
        "no-conversations": "Ямар ч яриа",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Илгээх",
        "powered-by-intercom": "Intercom зайтай",
        Xs: "Яг одоо",
        Xm: "{delta} минут өмнө",
        Xh: "{delta} цагийн өмнө",
        Xd: "{delta} өдрийн өмнө",
        Xw: "{delta} долоо хоногийн өмнө",
        you: "Та",
        delivered: "Хүргэсэн",
        "anonymous-email-response": "Баярлалаа, бид танд э-мэйл ({email})-ээр хариу мэдэгдэх болно.",
        "anonymous-email-responder": "Танд э-мэйлээр мэдэгдье.",
        "your-email": "Таны э-мэйл",
        sending: "Илгээж байна&hellip;",
        failed: "Очсонгүй. Дахин дарж оролдоно уу.",
        uploading: "Байршуулж байна",
        uploaded: "Байршууллаа",
        "max-upload-size": "Байршуулах файлын дээд хэмжээ {number}MB.",
        "insert-emoji": "Эможи оруулах",
        "send-attachment": "Хавсралт илгээх",
        "press-enter-to-send": "",
        "not-seen-yet": "",
        seen: "",
        "x-says": "",
        "someone-says": "",
        "active-in-the-last-x-minutes": "",
        "active-in-the-last-hour": "",
        "last-active-one-hour-ago": "",
        "last-active-x-hours-ago": "",
        "last-active-one-day-ago": "",
        "last-active-x-days-ago": "",
        "last-active-more-than-one-week-ago": "",
        "message-autoresponse": "",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Имэйлээр энэ ярианы тухай шинэ мэдээллийг хүлээн авах",
        "team-will-reply-asap": "Тус баг тантай аль болох хурдан холбоо барина.",
        "check-back-or-email": "Та дараа үүнийг шалгана уу эсвэл таныг хол байвал {email} хаягаар танд имэйл илгээнэ.",
        close: "Хаах"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Norwegian Bokmål",
        "language-name": "Norsk",
        "new-message": "Ny melding",
        "new-comment-placeholder": "Skriv et svar&hellip;",
        "new-conversation-placeholder": "Start en samtale&hellip;",
        "new-article-conversation-placeholder": "Spør et spørsmål&hellip;",
        "no-conversations": "Ingen samtaler",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} fra {appName}",
        send: "Send",
        "powered-by-intercom": "Levert av Intercom",
        Xs: "Noen sekunder",
        Xm: "{delta}m",
        Xh: "{delta}t",
        Xd: "{delta}d",
        Xw: "{delta}u",
        you: "Du",
        delivered: "Levert",
        "anonymous-email-response": "Takk. Vi varsler deg via e-post ({email}) når vi svarer.",
        "anonymous-email-responder": "La oss varsle deg via e-post.",
        "your-email": "Din e-post",
        sending: "Sender &hellip;",
        failed: "Ikke levert. Prøv igjen.",
        uploading: "Laster opp",
        uploaded: "Opplastet",
        "max-upload-size": "Maksimal opplastingsstørrelse er {number}MB",
        "insert-emoji": "Sett inn emoji",
        "send-attachment": "Send vedlegg",
        "press-enter-to-send": "Trykk på Enter for å sende",
        "not-seen-yet": "Ikke sett ennå.",
        seen: "Sett.",
        "x-says": "{firstName} sier...",
        "someone-says": "Noen sa...",
        "active-in-the-last-x-minutes": "Aktiv de siste {minutes} minuttene",
        "active-in-the-last-hour": "Aktiv den siste timen",
        "last-active-one-hour-ago": "Aktiv for 1 time siden",
        "last-active-x-hours-ago": "Sist aktiv for {hours} timer siden",
        "last-active-one-day-ago": "Sist aktiv i går",
        "last-active-x-days-ago": "Sist aktiv for {days} dager siden",
        "last-active-more-than-one-week-ago": "Sist aktiv for over 1 uke siden",
        "message-autoresponse": "Vi varsler deg her når vi svarer.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Motta oppdateringer om denne samtalen via e-post",
        "team-will-reply-asap": "Temaet vil svare deg så snart de kan.",
        "check-back-or-email": "Ta en titt senere. Dersom du er borte, vil de sende deg en e-post til {email}.",
        close: "Lukk"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Dutch",
        "language-name": "Nederlands",
        "new-message": "Nieuw bericht",
        "new-comment-placeholder": "Schrijf een reactie&hellip;",
        "new-conversation-placeholder": "Begin een gesprek&hellip;",
        "new-article-conversation-placeholder": "Stel een vraag&hellip;",
        "no-conversations": "Geen gesprekken",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Stuur",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Een paar seconden",
        Xm: "{delta}m geleden",
        Xh: "{delta}u geleden",
        Xd: "{delta}d geleden",
        Xw: "{delta}w geleden",
        you: "U",
        delivered: "Afgeleverd",
        "anonymous-email-response": "Bedankt, we brengen je per e-mail ({email}) op de hoogte wanneer we reageren.",
        "anonymous-email-responder": "Laat ons je per e-mail op de hoogte brengen.",
        "your-email": "Je e-mail",
        sending: "Aan het verzenden&hellip;",
        failed: "Niet afgeleverd. Klik om opnieuw te proberen.",
        uploading: "Aan het uploaden",
        uploaded: "Geüpload",
        "max-upload-size": "De maximale uploadgrootte is {number}MB",
        "insert-emoji": "Emoji invoegen",
        "send-attachment": "Bijlage verzenden",
        "press-enter-to-send": "Druk op Enter om te versturen",
        "not-seen-yet": "Nog niet bekeken",
        seen: "Bekeken",
        "x-says": "{firstName} zegt...",
        "someone-says": "Iemand zegt...",
        "active-in-the-last-x-minutes": "In de afgelopen {minutes} minuten actief",
        "active-in-the-last-hour": "In het afgelopen uur actief",
        "last-active-one-hour-ago": "1 uur geleden voor het laatst actief",
        "last-active-x-hours-ago": "{hours} uur geleden voor het laatst actief",
        "last-active-one-day-ago": "Gisteren voor het laatst actief",
        "last-active-x-days-ago": "{days} dagen geleden voor het laatst actief",
        "last-active-more-than-one-week-ago": "Meer dan 1 week geleden voor het laatst actief",
        "message-autoresponse": "We laten het je hier weten als we antwoorden.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Ontvang updates over dit gesprek via e-mail",
        "team-will-reply-asap": "Het team zal zo snel mogelijk contact met je opnemen.",
        "check-back-or-email": "Je kunt hier later terugkomen, of ze sturen je een e-mail naar {email} als je er niet bent.",
        close: "Sluit"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Polish",
        "language-name": "Polski",
        "new-message": "Nowa wiadomość",
        "new-comment-placeholder": "Napisz odpowiedź&hellip;",
        "new-conversation-placeholder": "Rozpocznij rozmowę&hellip;",
        "new-article-conversation-placeholder": "Zadaj pytanie&hellip;",
        "no-conversations": "Brak rozmów",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} z {appName}",
        send: "Wyślij",
        "powered-by-intercom": "Obsługa przez Intercom",
        Xs: "Przed chwilą",
        Xm: "{delta}m temu",
        Xh: "{delta}g temu",
        Xd: "{delta}d temu",
        Xw: "{delta}t temu",
        you: "Ty",
        delivered: "Dostarczono",
        "anonymous-email-response": "Dziękujemy, o odpowiedzi poinformujemy Cię mailowo ({email}).",
        "anonymous-email-responder": "Pozwól nam zawiadamiać Cię przez email.",
        "your-email": "Twój email",
        sending: "Wysyłanie&hellip;",
        failed: "Nie dostarczono. Kliknij, aby spróbować ponownie.",
        uploading: "Ładowanie",
        uploaded: "Załadowano",
        "max-upload-size": "Maksymalny rozmiar ładowania to {number}MB",
        "insert-emoji": "Wstaw emoji",
        "send-attachment": "Wyślij załącznik",
        "press-enter-to-send": "Wciśnij Enter, aby wysłać",
        "not-seen-yet": "Nieodczytana",
        seen: "Odczytana",
        "x-says": "{firstName} mówi...",
        "someone-says": "Ktoś mówi...",
        "active-in-the-last-x-minutes": "Aktywny(a) w ciągu ostatnich {minutes} minut",
        "active-in-the-last-hour": "Aktywny(a) w ciągu ostatniej godziny",
        "last-active-one-hour-ago": "Ostatnio aktywny(a) godzinę temu",
        "last-active-x-hours-ago": "Ostatnio aktywny(a) {hours} godzin(y) temu",
        "last-active-one-day-ago": "Ostatnio aktywny(a) wczoraj",
        "last-active-x-days-ago": "Ostatnio aktywny(a) {days} dni temu",
        "last-active-more-than-one-week-ago": "Ostatnio aktywny(a) ponad tydzień temu",
        "message-autoresponse": "Powiadomimy cię o tutaj naszej odpowiedzi.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Informacje o przebiegu tej sprawy możesz dostawać pocztą elektroniczną.",
        "team-will-reply-asap": "Nasz zespół postara się udzielić odpowiedzi jak najszybciej.",
        "check-back-or-email": "Sprawdź później, a jeśli nie będziesz dostępny(a), otrzymasz e-mail na adres {email}.",
        close: "Zamknij okno"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Portuguese",
        "language-name": "Português",
        "new-message": "Nova Mensagem",
        "new-comment-placeholder": "Escreva uma resposta&hellip;",
        "new-conversation-placeholder": "Iniciar uma conversa&hellip;",
        "new-article-conversation-placeholder": "Faça uma pergunta&hellip;",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "no-conversations": "Sem conversas",
        send: "Enviar",
        "powered-by-intercom": "Fornecido pela Intercom",
        Xs: "Agora mesmo",
        Xm: "Há {delta}m",
        Xh: "Há {delta}h",
        Xd: "Há {delta}d",
        Xw: "Há {delta}s",
        you: "Você",
        delivered: "Entregue",
        "anonymous-email-response": "Obrigado, irá ser notificado(a) aqui e por e-mail ({email}).",
        "anonymous-email-responder": "Permita que o(a) notifiquemos por e-mail.",
        "your-email": "O seu e-mail",
        sending: "A enviar&hellip;",
        failed: "Não entregue. Clique para tentar de novo.",
        uploading: "A carregar&hellip;",
        uploaded: "Carregado",
        "max-upload-size": "O tamanho de carregamento máximo é {number}MB",
        "insert-emoji": "Inserir emoji",
        "send-attachment": "Enviar anexo",
        "press-enter-to-send": "Prima Enter para enviar",
        "not-seen-yet": "Não lida",
        seen: "Lida",
        "x-says": "{firstName} diz...",
        "someone-says": "Alguém diz...",
        "active-in-the-last-x-minutes": "Ativo(s) nos últimos {minutes} minutos",
        "active-in-the-last-hour": "Ativo(s) na última hora",
        "last-active-one-hour-ago": "Ativo(s) há 1 hora",
        "last-active-x-hours-ago": "Ativo(s) há {hours} horas",
        "last-active-one-day-ago": "Ativo(s) ontem",
        "last-active-x-days-ago": "Ativo(s) há {days} dias",
        "last-active-more-than-one-week-ago": "Ativo(s) há mais de 1 semana",
        "message-autoresponse": "Será notificado(a) aqui quando respondermos.",
        "median-reply-autoresponse-with-email": "Volte aqui mais tarde, ou receba notificações por e-mail {email} se estiver desligado(a).",
        "median-reply-autoresponse-without-email": "Volte aqui mais tarde, ou introduza o seu endereço de e-mail para ser notificado(a) quando estiver desligado(a).",
        "receive-updates-email-collector": "Receba atualizações sobre esta conversa por e-mail",
        "team-will-reply-asap": "A equipa irá responder-lhe assim que possível.",
        "check-back-or-email": "Volte aqui mais tarde ou receba notificações por e-mail {email} se estiver desligado(a).",
        close: "Fechar",
        "january-date": "Janeiro {date}",
        "february-date": "Fevereiro {date}",
        "march-date": "Março {date}",
        "april-date": "Abril {date}",
        "may-date": "Maio {date}",
        "june-date": "Junho {date}",
        "july-date": "Julho {date}",
        "august-date": "Agosto {date}",
        "september-date": "Setembro {date}",
        "october-date": "Outubro {date}",
        "november-date": "Novembro {date}",
        "december-date": "Dezembro {date}"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Romanian",
        "language-name": "Română",
        "new-message": "Mesaje noi",
        "new-comment-placeholder": "Scrie un raspuns&hellip;",
        "new-conversation-placeholder": "Incepe o conversatie&hellip;",
        "new-article-conversation-placeholder": "Puneți o întrebare&hellip;",
        "no-conversations": "Fara conversatii",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} de la {appName}",
        send: "Trimite",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Chiar acum",
        Xm: "{delta}m inainte",
        Xh: "{delta}h inainte",
        Xd: "{delta}d inainte",
        Xw: "{delta}s inainte",
        you: "Tu",
        delivered: "Trimis",
        "anonymous-email-response": "Mulțumim, te vom notifica prin e-mail ({email}) atunci când răspundem.",
        "anonymous-email-responder": "Permite-ne să te notificăm prin e-mail.",
        "your-email": "E-mailul tău",
        sending: "Se trimite&hellip;",
        failed: "Netransmis. Fă clic pentru a încerca din nou.",
        uploading: "Se încarcă",
        uploaded: "Încărcat",
        "max-upload-size": "Dimensiunea maximă de încărcare este {number}MB",
        "insert-emoji": "Introducere emoji",
        "send-attachment": "Trimitere atașament",
        "press-enter-to-send": "Apasă Enter pentru a trimite",
        "not-seen-yet": "Nu s-a văzut încă",
        seen: "Văzut",
        "x-says": "{firstName} scrie...",
        "someone-says": "Cineva scrie...",
        "active-in-the-last-x-minutes": "Activ în ultimele {minutes} minute",
        "active-in-the-last-hour": "Activă în ultimele oră",
        "last-active-one-hour-ago": "Activ acum 1 oră",
        "last-active-x-hours-ago": "Activ acum {hours} ore",
        "last-active-one-day-ago": "Activ ieri",
        "last-active-x-days-ago": "Activ {days} zile în urmă",
        "last-active-more-than-one-week-ago": "Activ acum peste o săptămână",
        "message-autoresponse": "Te vom notifica aici atunci când răspundem.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Primește actualizări la această conversație prin e-mail",
        "team-will-reply-asap": "Echipa te va contacta în cel mai scurt timp posibil.",
        "check-back-or-email": "Revino mai târziu sau îți vor trimite un e-mail la {email} dacă ești plecat.",
        close: "Inchide"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Russian",
        "language-name": "Русский",
        "new-message": "Новое сообщение",
        "new-comment-placeholder": "Написать ответ&hellip;",
        "new-conversation-placeholder": "Начать разговор&hellip;",
        "new-article-conversation-placeholder": "Задать вопрос&hellip;",
        "no-conversations": "Нет сообщений",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Отправить",
        "powered-by-intercom": "На платформе Intercom",
        Xs: "несколько секунд",
        Xm: "{delta}m назад",
        Xh: "{delta}ч назад",
        Xd: "{delta}д назад",
        Xw: "{delta}нед назад",
        you: "Вы",
        delivered: "Доставлено",
        "anonymous-email-response": "Спасибо, мы уведомим вас об ответе по эл. почте ({email}).",
        "anonymous-email-responder": "Давайте мы уведомим вас по эл. почте.",
        "your-email": "Ваш эл. адрес",
        sending: "Отправка&hellip;",
        failed: "Не доставлено. Нажмите, чтобы повторить попытку.",
        uploading: "Загрузка",
        uploaded: "Загружено",
        "max-upload-size": "Максимальный размер загружаемого файла ― {number}Мб",
        "insert-emoji": "Вставить эмодзи",
        "send-attachment": "Отправить вложение",
        "press-enter-to-send": "Нажмите Enter для отправки",
        "not-seen-yet": "Еще не просмотрено",
        seen: "Просмотрено",
        "x-says": "{firstName} говорит...",
        "someone-says": "Кто-то говорит...",
        "active-in-the-last-x-minutes": "Активные в последние {minutes} мин.",
        "active-in-the-last-hour": "Активные в последний час",
        "last-active-one-hour-ago": "Последняя активность 1 час назад",
        "last-active-x-hours-ago": "Последняя активность {hours} ч назад",
        "last-active-one-day-ago": "Последняя активность вчера",
        "last-active-x-days-ago": "Последняя активность {days} дней назад",
        "last-active-more-than-one-week-ago": "Последняя активность более 1 недели назад",
        "message-autoresponse": "Мы уведомим вас здесь об ответе.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Получайте уведомления о новых сообщениях этой беседы по электронной почте",
        "team-will-reply-asap": "Наша команда ответит вам, как только сможет.",
        "check-back-or-email": "Проверьте позже, не появился ли ответ здесь, либо, в случае вашего отсутствия, ответ придет на ваш емейл: {email}",
        close: "Закрыть"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Slovenian",
        "language-name": "Slovenščina",
        "new-message": "Novo sporočilo",
        "new-comment-placeholder": "Odgovorite&hellip;",
        "new-conversation-placeholder": "Pričnite pogovor&hellip;",
        "new-article-conversation-placeholder": "Zastavite vprašanje&hellip;",
        "no-conversations": "Ni pogovorov",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} iz {appName}",
        send: "Pošlji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Ravnokar",
        Xm: "{delta}m nazaj",
        Xh: "{delta}h nazaj",
        Xd: "{delta}d nazaj",
        Xw: "{delta}t nazaj",
        you: "Vi",
        delivered: "Dostavljeno",
        "anonymous-email-response": "Hvala, ko bomo odgovorili, vas bomo obvestili po e-pošti ({email}).",
        "anonymous-email-responder": "Dovolite, da vas obvestimo po e-pošti.",
        "your-email": "Vaša e-pošta",
        sending: "Pošiljanje&hellip;",
        failed: "Ni dostavljeno. Kliknite, če želite znova poskusiti.",
        uploading: "Prenos",
        uploaded: "Preneseno",
        "max-upload-size": "Največja velikost prenosa je {number}MB",
        "insert-emoji": "Vstavi smeška",
        "send-attachment": "Pošlji prilogo",
        "press-enter-to-send": "Za pošiljanje pritisnite Enter",
        "not-seen-yet": "Še nevideno",
        seen: "Videno",
        "x-says": "{firstName} pravi...",
        "someone-says": "Nekdo pravi...",
        "active-in-the-last-x-minutes": "Aktiven v zadnjih {minutes} minutah",
        "active-in-the-last-hour": "Aktiven v zadnjih uro",
        "last-active-one-hour-ago": "Zadnjič aktiven pred 1 uro",
        "last-active-x-hours-ago": "Zadnjič aktiven pred {hours} urami",
        "last-active-one-day-ago": "Zadnjič aktiven včeraj",
        "last-active-x-days-ago": "Zadnjič aktiven pred {days} dnevi",
        "last-active-more-than-one-week-ago": "Zadnjič aktiven pred več kot 1 tednom",
        "message-autoresponse": "Ko bomo odgovorili, vas bomo obvestili tukaj.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Prejmite posodobitve tega pogovora po e-pošti",
        "team-will-reply-asap": "Ekipa se vam bo oglasila takoj, ko bo mogoče.",
        "check-back-or-email": "Preverite kasneje tu, ali pa boste prejeli e-pošto {email}, če boste odsotni.",
        close: "Zapri"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Serbian",
        "language-name": "Srpski",
        "new-message": "Novi razgovor",
        "new-comment-placeholder": "Napiši odovor&hellip;",
        "new-conversation-placeholder": "Započni razgovor&hellip;",
        "new-article-conversation-placeholder": "Postavite pitanje&hellip;",
        "no-conversations": "Nemate razgovora",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Pošalji",
        "powered-by-intercom": "Powered by Intercom",
        Xs: "Upravo sada",
        Xm: "{delta}m prije",
        Xh: "{delta}h prije",
        Xd: "{delta}d prije",
        Xw: "{delta}sedm. prije",
        you: "Vi",
        delivered: "Послато",
        "anonymous-email-response": "Хвала, обавестићемо те поруком ({number}) када будемо одговорили.",
        "anonymous-email-responder": "Омогући нам да те обавестимо поруком.",
        "your-email": "Твоја адреса",
        sending: "Шаље се&hellip;",
        failed: "Није послато. Притисни да покушаш поново.",
        uploading: "Учитава се",
        uploaded: "Учитано",
        "max-upload-size": "Максимална величина за учитавање је {email}MB",
        "insert-emoji": "Убаци смешка",
        "send-attachment": "Пошаљи прилог",
        "press-enter-to-send": "Притисни ентер да пошаљеш",
        "not-seen-yet": "Још није прегледан",
        seen: "Прегледан",
        "x-says": "{firstName} каже...",
        "someone-says": "Неко каже...",
        "active-in-the-last-x-minutes": "Активан током последњих {minutes} минута",
        "active-in-the-last-hour": "Активан током последњих сату",
        "last-active-one-hour-ago": "Последњи пут активан пре 1 сат",
        "last-active-x-hours-ago": "Последњи пут активан пре {hours} сата",
        "last-active-one-day-ago": "Последњи пут активан јуче",
        "last-active-x-days-ago": "Последњи пут активан {days} дана",
        "last-active-more-than-one-week-ago": "Последњи пут активан пре више од 1 недеље",
        "message-autoresponse": "Ми ћемо те обавестити овде када одговоримо.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Примите ажурирања у вези ове конверзације електронском поштом",
        "team-will-reply-asap": "Тим ће Вас контактирати чим буде могао.",
        "check-back-or-email": "Вратите се назад да проверите касније или ће Вам послати поруку на {email} ако сте одсутни.",
        close: "Zatvori"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Swedish",
        "language-name": "Svenska",
        "new-message": "Nytt meddelande",
        "new-comment-placeholder": "Skriv ett svar&hellip;",
        "new-conversation-placeholder": "Starta en konversation&hellip;",
        "new-article-conversation-placeholder": "Ställ en fråga&hellip;",
        "admin-from-app": "{adminFirstName} från {appName}",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "no-conversations": "Inga konversationer",
        send: "Skicka",
        "powered-by-intercom": "Drivs av Intercom",
        Xs: "Just nu",
        Xm: "{delta}m sedan",
        Xh: "{delta}t sedan",
        Xd: "{delta}d sedan",
        Xw: "{delta}v sedan",
        you: "Du",
        delivered: "Levererat",
        "anonymous-email-response": "Tack, vi meddelar dig via e-post ({email}) när vi svarar.",
        "anonymous-email-responder": "Låt oss meddela dig via e-post.",
        "your-email": "Din e-postadress",
        sending: "Skickar&hellip;",
        failed: "Ej levererat. Klicka för att försöka igen.",
        uploading: "Laddar upp",
        uploaded: "Uppladdad",
        "max-upload-size": "Maximal uppladdningsstorlek är {number} MB",
        "insert-emoji": "Infoga emoji",
        "send-attachment": "Skicka bifogad fil",
        "press-enter-to-send": "Tryck på Enter för att skicka",
        "not-seen-yet": "Inte visat ännu",
        seen: "Visat",
        "x-says": "{firstName} säger...",
        "someone-says": "Någon säger...",
        "active-in-the-last-x-minutes": "Aktiv inom de senaste {minutes} minuterna",
        "active-in-the-last-hour": "Aktiv inom de senaste timmen",
        "last-active-one-hour-ago": "Var senast aktiv för 1 timme sedan",
        "last-active-x-hours-ago": "Var senast aktiv för {hours} timmar sedan",
        "last-active-one-day-ago": "Var senast aktiv igår",
        "last-active-x-days-ago": "Var senast aktiv för {days} dagar sedan",
        "last-active-more-than-one-week-ago": "Var senast aktiv för mer än 1 vecka sedan",
        "message-autoresponse": "Vi kommer att meddela dig här när vi svarar.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Få uppdateringar om den här konversationen via e-post",
        "team-will-reply-asap": "Teamet kommer att svara så snabbt de kan.",
        "check-back-or-email": "Ta en titt här senare, eller så får du ett meddelande på {email} om du är någon annanstans.",
        close: "Stäng"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Turkish",
        "language-name": "Türkçe",
        "new-message": "Yeni Mesaj",
        "new-comment-placeholder": "Bir cevap yazın&hellip;",
        "new-conversation-placeholder": "Bir konuşmayı başlatmak&hellip;",
        "new-article-conversation-placeholder": "Soru sor&hellip;",
        "no-conversations": "Sohbet Yok",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Gönder",
        "powered-by-intercom": "Intercom tarafından güçlendirilmiştir",
        Xs: "Birkaç saniye",
        Xm: "{delta}d önce",
        Xh: "{delta}s önce",
        Xd: "{delta}g önce",
        Xw: "{delta}h önce",
        you: "Sen",
        delivered: "İletildi",
        "anonymous-email-response": "Teşekkürler, cevapladığımızda e-posta ile ({email}) seni bu konuda bilgilendireceğiz.",
        "anonymous-email-responder": "Sorunu yanıtladığımızda e-posta ile bilgilendireceğiz.",
        "your-email": "E-posta adresin",
        sending: "Gönderiliyor&hellip;",
        failed: "Teslim edilemedi. Tekrar denemek için tıkla.",
        uploading: "Yükleniyor",
        uploaded: "Yüklendi",
        "max-upload-size": "Yüklenebilecek maksimum boyut {number}MB",
        "insert-emoji": "Emoji ekle",
        "send-attachment": "Eklenti gönder",
        "press-enter-to-send": "Göndermek için Enter tuşuna bas",
        "not-seen-yet": "Henüz görünmedi",
        seen: "Göründü",
        "x-says": "{firstName} diyor ki...",
        "someone-says": "Birisi diyor ki...",
        "active-in-the-last-x-minutes": "Son {minutes} dakika içinde etkindi",
        "active-in-the-last-hour": "Son bir saat içinde etkin olan",
        "last-active-one-hour-ago": "En son 1 saat önce etkindi",
        "last-active-x-hours-ago": "En son {hours} saat önce etkindi",
        "last-active-one-day-ago": "En son dün etkindi",
        "last-active-x-days-ago": "En son {days} gün içinde etkindi",
        "last-active-more-than-one-week-ago": "1 haftadan fazla bir süredir etkin değil",
        "message-autoresponse": "Cevap verdiğimizde sana bildirim göndereceğiz.",
        "median-reply-autoresponse-with-email": "Daha sonra kontrol edebilirsiniz yada ekibimizin size {email} adresinden ulaşmasını bekleyebilirsiniz.",
        "median-reply-autoresponse-without-email": "Daha sonra kontrol edebilirsiniz yada bilgilendirilmek için email adresinizi tanımlayabilirsiniz.",
        "receive-updates-email-collector": "Bu sohbetle lgili güncellemeleri e-posta ile alın",
        "team-will-reply-asap": "Ekip, mümkün olan en kısa zamanda size geri dönüş yapacaktır.",
        "check-back-or-email": "Daha sonra buradan tekrar kontrol edin ya da uzaktaysanız size {email} adresinden e-posta gönderirler.",
        close: "Kapat"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Vietnamese",
        "language-name": "Tiếng Việt",
        "new-message": "Trao đổi mới",
        "new-comment-placeholder": "Trả lời&hellip;",
        "new-conversation-placeholder": "Bắt đầu trao đổi&hellip;",
        "new-article-conversation-placeholder": "Đặt một câu hỏi&hellip;",
        "no-conversations": "Chưa có trao đổi",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "Gửi",
        "powered-by-intercom": "Cung cấp bởi Intercom",
        Xs: "Mới đây",
        Xm: "{delta} phút trước",
        Xh: "{delta} giờ trước",
        Xd: "{delta} ngày trước",
        Xw: "{delta} tuần trước",
        you: "Bạn",
        delivered: "Đã gửi",
        "anonymous-email-response": "Cám ơn. Khi chúng tôi trả lời, chúng tôi cũng sẽ gửi email ({email}) thông báo.",
        "anonymous-email-responder": "Cho phép chúng tôi thông báo đến bạn qua email.",
        "your-email": "Email",
        sending: "Đang gửi&hellip;",
        failed: "Chưa gửi. Bấm để thử gửi lại.",
        uploading: "Đang tải lên",
        uploaded: "Đã tải lên",
        "max-upload-size": "Giới hạn dung lượng tải lên là {number}MB",
        "insert-emoji": "Thêm emoji",
        "send-attachment": "Gửi đính kèm",
        "press-enter-to-send": "Bấm Enter để gửi",
        "not-seen-yet": "Chưa được xem",
        seen: "Đã xem",
        "x-says": "{firstName} nói...",
        "someone-says": "Có người nói...",
        "active-in-the-last-x-minutes": "Có hoạt động trong {minutes} phút vừa rồi",
        "active-in-the-last-hour": "Có hoạt động trong những giờ cuối",
        "last-active-one-hour-ago": "Lần cuối hoạt động 1 giờ trước",
        "last-active-x-hours-ago": "Lần cuối hoạt động {hours} giờ trước",
        "last-active-one-day-ago": "Lần cuối hoạt động ngày hôm qua",
        "last-active-x-days-ago": "Lần cuối hoạt động {hours} ngày trước",
        "last-active-more-than-one-week-ago": "Lần cuối hoạt động hơn 1 tuần trước",
        "message-autoresponse": "Chúng tôi sẽ thông báo cho bạn tại đây khi chúng tôi trả lời.",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "Nhận các cập nhật về cuộc trò chuyện này qua email",
        "team-will-reply-asap": "Nhóm sẽ phản hồi lại bạn nhanh nhất có thể.",
        "check-back-or-email": "Hãy quay lại đây sau, hoặc họ sẽ gửi email cho bạn tới {email} nếu bạn không có mặt.",
        close: "Close"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Chinese (Simplified)",
        "language-name": "中文 (简体)",
        "new-message": "新信息",
        "new-comment-placeholder": "写回复",
        "new-conversation-placeholder": "写信息",
        "new-article-conversation-placeholder": "提问题",
        "no-conversations": "无对话",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        "admin-from-app": "{adminFirstName} 来自 {appName}",
        send: "送出",
        "powered-by-intercom": "由Intercom提供",
        Xs: "现在",
        Xm: "{delta}分钟前",
        Xh: "{delta}小时前",
        Xd: "{delta}天前",
        Xw: "{delta}周前",
        you: "你",
        delivered: "已发送",
        "anonymous-email-response": "谢谢！我们回复你的消息时，将会通过电子邮件({email})通知你。",
        "anonymous-email-responder": "允许我们通过电子邮件通知你。",
        "your-email": "你的邮箱地址",
        sending: "正在发送&hellip;",
        failed: "没有发送成功。请点击重试。",
        uploading: "正在上传",
        uploaded: "已上传",
        "max-upload-size": "最大上传文档大小：{number}MB",
        "insert-emoji": "插入表情符号",
        "send-attachment": "发送附件",
        "press-enter-to-send": "按Enter发送",
        "not-seen-yet": "还未见到",
        seen: "已见到",
        "x-says": "{firstName}说...",
        "someone-says": "有人说...",
        "active-in-the-last-x-minutes": "最近{minutes}分钟内活跃",
        "active-in-the-last-hour": "最近一次活跃是在1小时前",
        "last-active-one-hour-ago": "最近一次活跃是在1小时前",
        "last-active-x-hours-ago": "最近一次活跃是在{hours}小时前",
        "last-active-one-day-ago": "最近一次活跃是在昨天",
        "last-active-x-days-ago": "最近一次活跃是在{days}天前",
        "last-active-more-than-one-week-ago": "最近一次活跃是在1周以前",
        "message-autoresponse": "回复你的消息时，我们将会在这里通知你。",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "通过电子邮件接收此对话的更新",
        "team-will-reply-asap": "团队会尽快回复您。",
        "check-back-or-email": "稍后回来查看，如果您离开了，他们也会发送电子邮件到{email}。",
        close: "关闭这窗口"
    }
}, function (e, t) {
    e.exports = {
        "language-name-en": "Chinese (Traditional)",
        "language-name": "中文（繁體)",
        "new-message": "新訊息",
        "new-comment-placeholder": "輸入回覆",
        "new-conversation-placeholder": "輸入訊息",
        "new-article-conversation-placeholder": "提问题",
        "no-conversations": "無對話",
        "enter-email-placeholder": "",
        "not-now": "",
        "please-enter-a-valid-email": "",
        send: "送出",
        "powered-by-intercom": "由 Intercom 提供",
        Xs: "現在",
        Xm: "{delta}分鐘前",
        Xh: "{delta}小時前",
        Xd: "{delta}天前",
        Xw: "{delta}週前",
        you: "您",
        delivered: "已送出",
        "anonymous-email-response": "謝謝您，我們回覆時會透過電郵 ({email}) 通知您。",
        "anonymous-email-responder": "讓我們透過電郵通知您。",
        "your-email": "您的電郵",
        sending: "發送中…",
        failed: "尚未送出。請點擊再試一次。",
        uploading: "上載中",
        uploaded: "已上載",
        "max-upload-size": "最多可以上載 {number}MB",
        "insert-emoji": "插入表情符號",
        "send-attachment": "發送附件",
        "press-enter-to-send": "按Enter鍵即可發送",
        "not-seen-yet": "未讀",
        seen: "已讀",
        "x-says": "{firstName} 說...",
        "someone-says": "某人說...",
        "active-in-the-last-x-minutes": "過去的{minutes}分鐘都在線上",
        "active-in-the-last-hour": "網上的最後一小時",
        "last-active-one-hour-ago": "上次上線時間為1小時前",
        "last-active-x-hours-ago": "上次上線時間為{hours}小時前",
        "last-active-one-day-ago": "上次上線時間為昨天",
        "last-active-x-days-ago": "上次上線時間為{days}天前",
        "last-active-more-than-one-week-ago": "上次上線時間為超過一星期前",
        "message-autoresponse": "我們回覆時會在這裡通知您。",
        "median-reply-autoresponse-with-email": "",
        "median-reply-autoresponse-without-email": "",
        "receive-updates-email-collector": "透過電郵接收這個對話的更新",
        "team-will-reply-asap": "團隊會盡快作出回覆。",
        "check-back-or-email": "請稍後再查看，如果您碰巧離開了，他們會電郵至 {email}。",
        close: "關閉訊息窗口"
    }
}, , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var i = n(95);
    t.parse = function (e) {
        var t = document.createElement("a");
        return t.href = e, i.pick(t, "protocol", "host", "port", "pathname", "hash", "search", "hostname")
    }
}, , , , , , , function (e, t, n) {
    "use strict";
    function i() {
        if (!window.Intercom || !window.Intercom.booted) {
            var e = n(309);
            e.start(), n(310), e.stop(), window.Intercom.booted = !0
        }
    }

    i(), n(538)
}, function (e, t) {
    "use strict";
    function n(e) {
        return e && !("prototype" in e)
    }

    var i = Function.prototype.bind;
    e.exports.start = function () {
        n(i) || delete Function.prototype.bind
    }, e.exports.stop = function () {
        i && (Function.prototype.bind = i)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(313), s = n(315), c = n(316), l = n(524), m = n(525), u = n(526), d = n(314), p = n(413), h = n(527), f = n(534), g = n(329), v = n(490), b = i("meta[name=intercom-js-api-base]").attr("content") || v.api_base, y = i("meta[name=intercom-js-api-base]").attr("content") || v.ping_api_base, w = new a(window.intercomSettings);
    d.initialize(w);
    var x = new f(w), _ = new h(b, y, w), k = new g(o.bind(_.matchMessage, _)), C = new s(_, x, k, w), A = window.Intercom && window.Intercom.q ? window.Intercom.q : [], T = o.any(A, function (e) {
        return "boot" === e[0] || "shutdown" === e[0]
    });
    r.sync = c(_, x), p.initialize(w), m(C), u(C), l(C), !T && w.isValid() && C.initialize()
}, function (e, t, n) {
    var i, o;
    !function (t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, r) {
        function a(e) {
            var t = e.length, n = le.type(e);
            return "function" === n || le.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function s(e, t, n) {
            if (le.isFunction(t))return le.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType)return le.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ve.test(t))return le.filter(t, e, n);
                t = le.filter(t, e)
            }
            return le.grep(e, function (e) {
                return le.inArray(e, t) >= 0 !== n
            })
        }

        function c(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function l(e) {
            var t = Ae[e] = {};
            return le.each(e.match(Ce) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function m() {
            ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", u, !1), n.removeEventListener("load", u, !1)) : (ye.detachEvent("onreadystatechange", u), n.detachEvent("onload", u))
        }

        function u() {
            (ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (m(), le.ready())
        }

        function d(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(ze, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? le.parseJSON(n) : n
                    } catch (o) {
                    }
                    le.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function p(e) {
            var t;
            for (t in e)if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
            return !0
        }

        function h(e, t, n, i) {
            if (le.acceptData(e)) {
                var o, r, a = le.expando, s = e.nodeType, c = s ? le.cache : e, l = s ? e[a] : e[a] && a;
                if (l && c[l] && (i || c[l].data) || void 0 !== n || "string" != typeof t)return l || (l = s ? e[a] = Q.pop() || le.guid++ : a), c[l] || (c[l] = s ? {} : {toJSON: le.noop}), "object" != typeof t && "function" != typeof t || (i ? c[l] = le.extend(c[l], t) : c[l].data = le.extend(c[l].data, t)), r = c[l], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[le.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[le.camelCase(t)])) : o = r, o
            }
        }

        function f(e, t, n) {
            if (le.acceptData(e)) {
                var i, o, r = e.nodeType, a = r ? le.cache : e, s = r ? e[le.expando] : le.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in i ? t = [t] : (t = le.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;)delete i[t[o]];
                        if (n ? !p(i) : !le.isEmptyObject(i))return
                    }
                    (n || (delete a[s].data, p(a[s]))) && (r ? le.cleanData([e], !0) : se.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function g() {
            return !0
        }

        function v() {
            return !1
        }

        function b() {
            try {
                return ye.activeElement
            } catch (e) {
            }
        }

        function y(e) {
            var t = $e.split("|"), n = e.createDocumentFragment();
            if (n.createElement)for (; t.length;)n.createElement(t.pop());
            return n
        }

        function w(e, t) {
            var n, i, o = 0, r = typeof e.getElementsByTagName !== je ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== je ? e.querySelectorAll(t || "*") : void 0;
            if (!r)for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)!t || le.nodeName(i, t) ? r.push(i) : le.merge(r, w(i, t));
            return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], r) : r
        }

        function x(e) {
            Me.test(e.type) && (e.defaultChecked = e.checked)
        }

        function _(e, t) {
            return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function k(e) {
            return e.type = (null !== le.find.attr(e, "type")) + "/" + e.type, e
        }

        function C(e) {
            var t = Qe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function A(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++)le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
        }

        function T(e, t) {
            if (1 === t.nodeType && le.hasData(e)) {
                var n, i, o, r = le._data(e), a = le._data(t, r), s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)for (i = 0, o = s[n].length; o > i; i++)le.event.add(t, n, s[n][i])
                }
                a.data && (a.data = le.extend({}, a.data))
            }
        }

        function S(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !se.noCloneEvent && t[le.expando]) {
                    o = le._data(t);
                    for (i in o.events)le.removeEvent(t, i, o.handle);
                    t.removeAttribute(le.expando)
                }
                "script" === n && t.text !== e.text ? (k(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), se.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function j(e, t) {
            var i = le(t.createElement(e)).appendTo(t.body), o = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(i[0]).display : le.css(i[0], "display");
            return i.detach(), o
        }

        function E(e) {
            var t = ye, n = ot[e];
            return n || (n = j(e, t), "none" !== n && n || (it = (it || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (it[0].contentWindow || it[0].contentDocument).document, t.write(), t.close(), n = j(e, t), it.detach()), ot[e] = n), n
        }

        function z(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function N(e, t) {
            if (t in e)return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = vt.length; o--;)if (t = vt[o] + n, t in e)return t;
            return i
        }

        function I(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)i = e[a], i.style && (r[a] = le._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && qe(i) && (r[a] = le._data(i, "olddisplay", E(i.nodeName)))) : r[a] || (o = qe(i), (n && "none" !== n || !o) && le._data(i, "olddisplay", o ? n : le.css(i, "display"))));
            for (a = 0; s > a; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function q(e, t, n) {
            var i = pt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function P(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += le.css(e, n + Ie[r], !0, o)), i ? ("content" === n && (a -= le.css(e, "padding" + Ie[r], !0, o)), "margin" !== n && (a -= le.css(e, "border" + Ie[r] + "Width", !0, o))) : (a += le.css(e, "padding" + Ie[r], !0, o), "padding" !== n && (a += le.css(e, "border" + Ie[r] + "Width", !0, o)));
            return a
        }

        function M(e, t, n) {
            var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = rt(e), a = se.boxSizing() && "border-box" === le.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = at(e, t, r), (0 > o || null == o) && (o = e.style[t]), ct.test(o))return o;
                i = a && (se.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + P(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function L(e, t, n, i, o) {
            return new L.prototype.init(e, t, n, i, o)
        }

        function R() {
            return setTimeout(function () {
                bt = void 0
            }), bt = le.now()
        }

        function U(e, t) {
            var n, i = {height: e}, o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t)n = Ie[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function H(e, t, n) {
            for (var i, o = (Ct[t] || []).concat(Ct["*"]), r = 0, a = o.length; a > r; r++)if (i = o[r].call(n, t, e))return i
        }

        function O(e, t, n) {
            var i, o, r, a, s, c, l, m, u = this, d = {}, p = e.style, h = e.nodeType && qe(e), f = le._data(e, "fxshow");
            n.queue || (s = le._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function () {
                s.unqueued || c()
            }), s.unqueued++, u.always(function () {
                u.always(function () {
                    s.unqueued--, le.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = le.css(e, "display"), m = E(e.nodeName), "none" === l && (l = m), "inline" === l && "none" === le.css(e, "float") && (se.inlineBlockNeedsLayout && "inline" !== m ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", se.shrinkWrapBlocks() || u.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)if (o = t[i], wt.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[i])continue;
                    h = !0
                }
                d[i] = f && f[i] || le.style(e, i)
            }
            if (!le.isEmptyObject(d)) {
                f ? "hidden" in f && (h = f.hidden) : f = le._data(e, "fxshow", {}), r && (f.hidden = !h), h ? le(e).show() : u.done(function () {
                    le(e).hide()
                }), u.done(function () {
                    var t;
                    le._removeData(e, "fxshow");
                    for (t in d)le.style(e, t, d[t])
                });
                for (i in d)a = H(h ? f[i] : 0, i, u), i in f || (f[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t) {
            var n, i, o, r, a;
            for (n in e)if (i = le.camelCase(n), o = t[i], r = e[n], le.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = le.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete e[i];
                for (n in r)n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
        }

        function V(e, t, n) {
            var i, o, r = 0, a = kt.length, s = le.Deferred().always(function () {
                delete c.elem
            }), c = function () {
                if (o)return !1;
                for (var t = bt || R(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, a = 0, c = l.tweens.length; c > a; a++)l.tweens[a].run(r);
                return s.notifyWith(e, [l, r, n]), 1 > r && c ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: le.extend({}, t),
                opts: le.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: bt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? l.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }), m = l.props;
            for ($(m, l.opts.specialEasing); a > r; r++)if (i = kt[r].call(l, e, m, l.opts))return i;
            return le.map(m, H, l), le.isFunction(l.opts.start) && l.opts.start.call(e, l), le.fx.timer(le.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function D(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0, r = t.toLowerCase().match(Ce) || [];
                if (le.isFunction(n))for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function B(e, t, n, i) {
            function o(s) {
                var c;
                return r[s] = !0, le.each(e[s] || [], function (e, s) {
                    var l = s(t, n, i);
                    return "string" != typeof l || a || r[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
                }), c
            }

            var r = {}, a = e === Kt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function F(e, t) {
            var n, i, o = le.ajaxSettings.flatOptions || {};
            for (i in t)void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && le.extend(!0, e, n), e
        }

        function X(e, t, n) {
            for (var i, o, r, a, s = e.contents, c = e.dataTypes; "*" === c[0];)c.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)for (a in s)if (s[a] && s[a].test(o)) {
                c.unshift(a);
                break
            }
            if (c[0] in n)r = c[0]; else {
                for (a in n) {
                    if (!c[0] || e.converters[a + " " + c[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
        }

        function W(e, t, n, i) {
            var o, r, a, s, c, l = {}, m = e.dataTypes.slice();
            if (m[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
            for (r = m.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = m.shift())if ("*" === r)r = c; else if ("*" !== c && c !== r) {
                if (a = l[c + " " + r] || l["* " + r], !a)for (o in l)if (s = o.split(" "), s[1] === r && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                    a === !0 ? a = l[o] : l[o] !== !0 && (r = s[0], m.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && e["throws"])t = a(t); else try {
                    t = a(t)
                } catch (u) {
                    return {state: "parsererror", error: a ? u : "No conversion from " + c + " to " + r}
                }
            }
            return {state: "success", data: t}
        }

        function K(e, t, n, i) {
            var o;
            if (le.isArray(t))le.each(t, function (t, o) {
                n || Qt.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            }); else if (n || "object" !== le.type(t))i(e, t); else for (o in t)K(e + "[" + o + "]", t[o], n, i)
        }

        function J() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        }

        function G() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function Z(e) {
            return le.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }

        var Q = [], Y = Q.slice, ee = Q.concat, te = Q.push, ne = Q.indexOf, ie = {}, oe = ie.toString, re = ie.hasOwnProperty, ae = "".trim, se = {}, ce = "1.11.0", le = function (e, t) {
            return new le.fn.init(e, t)
        }, me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ue = /^-ms-/, de = /-([\da-z])/gi, pe = function (e, t) {
            return t.toUpperCase()
        };
        le.fn = le.prototype = {
            jquery: ce, constructor: le, selector: "", length: 0, toArray: function () {
                return Y.call(this)
            }, get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
            }, pushStack: function (e) {
                var t = le.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return le.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(le.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(Y.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: te, sort: Q.sort, splice: Q.splice
        }, le.extend = le.fn.extend = function () {
            var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || le.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)if (null != (o = arguments[s]))for (i in o)e = a[i], n = o[i], a !== n && (l && n && (le.isPlainObject(n) || (t = le.isArray(n))) ? (t ? (t = !1, r = e && le.isArray(e) ? e : []) : r = e && le.isPlainObject(e) ? e : {}, a[i] = le.extend(l, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, le.extend({
            expando: "jQuery" + (ce + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === le.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === le.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                return e - parseFloat(e) >= 0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, isPlainObject: function (e) {
                var t;
                if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e))return !1;
                try {
                    if (e.constructor && !re.call(e, "constructor") && !re.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (se.ownLast)for (t in e)return re.call(e, t);
                for (t in e);
                return void 0 === t || re.call(e, t)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                e && le.trim(e) && (n.execScript || function (e) {
                    n.eval.call(n, e)
                })(e)
            }, camelCase: function (e) {
                return e.replace(ue, "ms-").replace(de, pe)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, n) {
                var i, o = 0, r = e.length, s = a(e);
                if (n) {
                    if (s)for (; r > o && (i = t.apply(e[o], n), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], n), i === !1)break
                } else if (s)for (; r > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
                return e
            }, trim: ae && !ae.call("\ufeff ") ? function (e) {
                return null == e ? "" : ae.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(me, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (ne)return ne.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;)e[o++] = t[i++];
                if (n !== n)for (; void 0 !== t[i];)e[o++] = t[i++];
                return e.length = o, e
            }, grep: function (e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++)i = !t(e[r], r), i !== s && o.push(e[r]);
                return o
            }, map: function (e, t, n) {
                var i, o = 0, r = e.length, s = a(e), c = [];
                if (s)for (; r > o; o++)i = t(e[o], o, n), null != i && c.push(i); else for (o in e)i = t(e[o], o, n), null != i && c.push(i);
                return ee.apply([], c)
            }, guid: 1, proxy: function (e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), le.isFunction(e) ? (n = Y.call(arguments, 2), i = function () {
                    return e.apply(t || this, n.concat(Y.call(arguments)))
                }, i.guid = e.guid = e.guid || le.guid++, i) : void 0
            }, now: function () {
                return +new Date
            }, support: se
        }), le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            ie["[object " + t + "]"] = t.toLowerCase()
        });
        var he = function (e) {
            function t(e, t, n, i) {
                var o, r, a, s, c, l, u, h, f, g;
                if ((t ? t.ownerDocument || t : O) !== I && N(t), t = t || I, n = n || [], !e || "string" != typeof e)return n;
                if (1 !== (s = t.nodeType) && 9 !== s)return [];
                if (P && !i) {
                    if (o = be.exec(e))if (a = o[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(a), !r || !r.parentNode)return n;
                            if (r.id === a)return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && U(t, r) && r.id === a)return n.push(r), n
                    } else {
                        if (o[2])return Y.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && k.getElementsByClassName && t.getElementsByClassName)return Y.apply(n, t.getElementsByClassName(a)), n
                    }
                    if (k.qsa && (!M || !M.test(e))) {
                        if (h = u = H, f = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = d(e), (u = t.getAttribute("id")) ? h = u.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", c = l.length; c--;)l[c] = h + p(l[c]);
                            f = ye.test(e) && m(t.parentNode) || t, g = l.join(",")
                        }
                        if (g)try {
                            return Y.apply(n, f.querySelectorAll(g)), n
                        } catch (v) {
                        } finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(ce, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }

                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function o(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;)C.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;)n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function m(e) {
                return e && typeof e.getElementsByTagName !== W && e
            }

            function u() {
            }

            function d(e, n) {
                var i, o, r, a, s, c, l, m = B[e + " "];
                if (m)return n ? 0 : m.slice(0);
                for (s = e, c = [], l = C.preFilter; s;) {
                    i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), c.push(r = [])), i = !1, (o = me.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ce, " ")
                    }), s = s.slice(i.length));
                    for (a in C.filter)!(o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i)break
                }
                return n ? s.length : s ? t.error(e) : B(e, c).slice(0)
            }

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir, o = n && "parentNode" === i, r = V++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)if (1 === t.nodeType || o)return e(t, n, r)
                } : function (t, n, a) {
                    var s, c, l = [$, r];
                    if (a) {
                        for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, a))return !0
                    } else for (; t = t[i];)if (1 === t.nodeType || o) {
                        if (c = t[H] || (t[H] = {}), (s = c[i]) && s[0] === $ && s[1] === r)return l[2] = s[2];
                        if (c[i] = l, l[2] = e(t, n, a))return !0
                    }
                }
            }

            function f(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, i, o) {
                for (var r, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), l && t.push(s)));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[H] && (o = v(o)), r && !r[H] && (r = v(r, a)), i(function (i, a, s, c) {
                    var l, m, u, d = [], p = [], h = a.length, f = i || w(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? f : g(f, d, e, s, c), b = n ? r || (i ? e : h || o) ? [] : a : v;
                    if (n && n(v, b, s, c), o)for (l = g(b, p), o(l, [], s, c), m = l.length; m--;)(u = l[m]) && (b[p[m]] = !(v[p[m]] = u));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (l = [], m = b.length; m--;)(u = b[m]) && l.push(v[m] = u);
                                r(null, b = [], l, c)
                            }
                            for (m = b.length; m--;)(u = b[m]) && (l = r ? te.call(i, u) : d[m]) > -1 && (i[l] = !(a[l] = u))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, c) : Y.apply(a, b)
                })
            }

            function b(e) {
                for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, c = h(function (e) {
                    return e === t
                }, a, !0), l = h(function (e) {
                    return te.call(t, e) > -1
                }, a, !0), m = [function (e, n, i) {
                    return !r && (i || n !== j) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i))
                }]; o > s; s++)if (n = C.relative[e[s].type])m = [h(f(m), n)]; else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                        for (i = ++s; o > i && !C.relative[e[i].type]; i++);
                        return v(s > 1 && f(m), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ce, "$1"), n, i > s && b(e.slice(s, i)), o > i && b(e = e.slice(i)), o > i && p(e))
                    }
                    m.push(n)
                }
                return f(m)
            }

            function y(e, n) {
                var o = n.length > 0, r = e.length > 0, a = function (i, a, s, c, l) {
                    var m, u, d, p = 0, h = "0", f = i && [], v = [], b = j, y = i || r && C.find.TAG("*", l), w = $ += null == b ? 1 : Math.random() || .1, x = y.length;
                    for (l && (j = a !== I && a); h !== x && null != (m = y[h]); h++) {
                        if (r && m) {
                            for (u = 0; d = e[u++];)if (d(m, a, s)) {
                                c.push(m);
                                break
                            }
                            l && ($ = w)
                        }
                        o && ((m = !d && m) && p--, i && f.push(m))
                    }
                    if (p += h, o && h !== p) {
                        for (u = 0; d = n[u++];)d(f, v, a, s);
                        if (i) {
                            if (p > 0)for (; h--;)f[h] || v[h] || (v[h] = Z.call(c));
                            v = g(v)
                        }
                        Y.apply(c, v), l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                    }
                    return l && ($ = w, j = b), f
                };
                return o ? i(a) : a
            }

            function w(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++)t(e, n[o], i);
                return i
            }

            function x(e, t, n, i) {
                var o, r, a, s, c, l = d(e);
                if (!i && 1 === l.length) {
                    if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && k.getById && 9 === t.nodeType && P && C.relative[r[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(xe, _e), t) || [])[0], !t)return n;
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)if ((c = C.find[s]) && (i = c(a.matches[0].replace(xe, _e), ye.test(r[0].type) && m(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e)return Y.apply(n, i), n;
                        break
                    }
                }
                return S(e, l)(i, t, !P, n, ye.test(e) && m(t.parentNode) || t), n
            }

            var _, k, C, A, T, S, j, E, z, N, I, q, P, M, L, R, U, H = "sizzle" + -new Date, O = e.document, $ = 0, V = 0, D = n(), B = n(), F = n(), X = function (e, t) {
                return e === t && (z = !0), 0
            }, W = "undefined", K = 1 << 31, J = {}.hasOwnProperty, G = [], Z = G.pop, Q = G.push, Y = G.push, ee = G.slice, te = G.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                    return -1
                }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = oe.replace("w", "w#"), ae = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]", se = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", ce = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), le = new RegExp("^" + ie + "*," + ie + "*"), me = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), de = new RegExp(se), pe = new RegExp("^" + re + "$"), he = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, fe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), _e = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
            try {
                Y.apply(G = ee.call(O.childNodes), O.childNodes), G[O.childNodes.length].nodeType
            } catch (ke) {
                Y = {
                    apply: G.length ? function (e, t) {
                        Q.apply(e, ee.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            k = t.support = {}, T = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, N = t.setDocument = function (e) {
                var t, n = e ? e.ownerDocument || e : O, i = n.defaultView;
                return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, q = n.documentElement, P = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                    N()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                    N()
                })), k.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), k.getElementsByTagName = o(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), k.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function (e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), k.getById = o(function (e) {
                    return q.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                }), k.getById ? (C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== W && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(xe, _e);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function (e) {
                    var t = e.replace(xe, _e);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = k.getElementsByTagName ? function (e, t) {
                    return typeof t.getElementsByTagName !== W ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, C.find.CLASS = k.getElementsByClassName && function (e, t) {
                        return typeof t.getElementsByClassName !== W && P ? t.getElementsByClassName(e) : void 0
                    }, L = [], M = [], (k.qsa = ve.test(n.querySelectorAll)) && (o(function (e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
                }), o(function (e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (k.matchesSelector = ve.test(R = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function (e) {
                    k.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), L.push("!=", se)
                }), M = M.length && new RegExp(M.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(q.compareDocumentPosition), U = t || ve.test(q.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, X = t ? function (e, t) {
                    if (e === t)return z = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !k.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === O && U(O, e) ? -1 : t === n || t.ownerDocument === O && U(O, t) ? 1 : E ? te.call(E, e) - te.call(E, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return z = !0, 0;
                    var i, o = 0, r = e.parentNode, s = t.parentNode, c = [e], l = [t];
                    if (!r || !s)return e === n ? -1 : t === n ? 1 : r ? -1 : s ? 1 : E ? te.call(E, e) - te.call(E, t) : 0;
                    if (r === s)return a(e, t);
                    for (i = e; i = i.parentNode;)c.unshift(i);
                    for (i = t; i = i.parentNode;)l.unshift(i);
                    for (; c[o] === l[o];)o++;
                    return o ? a(c[o], l[o]) : c[o] === O ? -1 : l[o] === O ? 1 : 0
                }, n) : I
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== I && N(e), n = n.replace(ue, "='$1']"), k.matchesSelector && P && (!L || !L.test(n)) && (!M || !M.test(n)))try {
                    var i = R.call(e, n);
                    if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                } catch (o) {
                }
                return t(n, I, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== I && N(e), U(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== I && N(e);
                var n = C.attrHandle[t.toLowerCase()], i = n && J.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : k.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], i = 0, o = 0;
                if (z = !k.detectDuplicates, E = !k.sortStable && e.slice(0), e.sort(X), z) {
                    for (; t = e[o++];)t === e[o] && (i = n.push(o));
                    for (; i--;)e.splice(n[i], 1)
                }
                return E = null, e
            }, A = t.getText = function (e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += A(e)
                    } else if (3 === o || 4 === o)return e.nodeValue
                } else for (; t = e[i++];)n += A(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(xe, _e), e[3] = (e[4] || e[5] || "").replace(xe, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(xe, _e).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = D[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && D(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, i) {
                        return function (o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, c) {
                            var l, m, u, d, p, h, f = r !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), b = !c && !s;
                            if (g) {
                                if (r) {
                                    for (; f;) {
                                        for (u = t; u = u[f];)if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return !1;
                                        h = f = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && b) {
                                    for (m = g[H] || (g[H] = {}), l = m[e] || [], p = l[0] === $ && l[1], d = l[0] === $ && l[2], u = p && g.childNodes[p]; u = ++p && u && u[f] || (d = p = 0) || h.pop();)if (1 === u.nodeType && ++d && u === t) {
                                        m[e] = [$, p, d];
                                        break
                                    }
                                } else if (b && (l = (t[H] || (t[H] = {}))[e]) && l[0] === $)d = l[1]; else for (; (u = ++p && u && u[f] || (d = p = 0) || h.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (b && ((u[H] || (u[H] = {}))[e] = [$, d]), u !== t)););
                                return d -= o, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;)i = te.call(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function (e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [], n = [], o = S(e.replace(ce, "$1"));
                        return o[H] ? i(function (e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function (e, i, r) {
                            return t[0] = e, o(t, null, r, n), !n.pop()
                        }
                    }), has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: i(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
                        }
                    }), lang: i(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, _e).toLowerCase(), function (t) {
                            var n;
                            do if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === q
                    }, focus: function (e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !C.pseudos.empty(e)
                    }, header: function (e) {
                        return ge.test(e.nodeName)
                    }, input: function (e) {
                        return fe.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (e, t) {
                        return [t - 1]
                    }), eq: l(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: l(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e
                    }), odd: l(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: l(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                        return e
                    }), gt: l(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (_ in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[_] = s(_);
            for (_ in{submit: !0, reset: !0})C.pseudos[_] = c(_);
            return u.prototype = C.filters = C.pseudos, C.setFilters = new u, S = t.compile = function (e, t) {
                var n, i = [], o = [], r = F[e + " "];
                if (!r) {
                    for (t || (t = d(e)), n = t.length; n--;)r = b(t[n]), r[H] ? i.push(r) : o.push(r);
                    r = F(e, y(o, i))
                }
                return r
            }, k.sortStable = H.split("").sort(X).join("") === H, k.detectDuplicates = !!z, N(), k.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(I.createElement("div"))
            }), o(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), k.attributes && o(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function (e) {
                return null == e.getAttribute("disabled")
            }) || r(ne, function (e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        le.find = he, le.expr = he.selectors, le.expr[":"] = le.expr.pseudos, le.unique = he.uniqueSort, le.text = he.getText, le.isXMLDoc = he.isXML, le.contains = he.contains;
        var fe = le.expr.match.needsContext, ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ve = /^.[^:#\[\.,]*$/;
        le.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? le.find.matchesSelector(i, e) ? [i] : [] : le.find.matches(e, le.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, le.fn.extend({
            find: function (e) {
                var t, n = [], i = this, o = i.length;
                if ("string" != typeof e)return this.pushStack(le(e).filter(function () {
                    for (t = 0; o > t; t++)if (le.contains(i[t], this))return !0
                }));
                for (t = 0; o > t; t++)le.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? le.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            }, filter: function (e) {
                return this.pushStack(s(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(s(this, e || [], !0))
            }, is: function (e) {
                return !!s(this, "string" == typeof e && fe.test(e) ? le(e) : e || [], !1).length
            }
        });
        var be, ye = n.document, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, xe = le.fn.init = function (e, t) {
            var n, i;
            if (!e)return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : we.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || be).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof le ? t[0] : t, le.merge(this, le.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)), ge.test(n[1]) && le.isPlainObject(t))for (n in t)le.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = ye.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2])return be.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ye, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? "undefined" != typeof be.ready ? be.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
        };
        xe.prototype = le.fn, be = le(ye);
        var _e = /^(?:parents|prev(?:Until|All))/, ke = {children: !0, contents: !0, next: !0, prev: !0};
        le.extend({
            dir: function (e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !le(o).is(n));)1 === o.nodeType && i.push(o), o = o[t];
                return i
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), le.fn.extend({
            has: function (e) {
                var t, n = le(e, this), i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)if (le.contains(this, n[t]))return !0
                })
            }, closest: function (e, t) {
                for (var n, i = 0, o = this.length, r = [], a = fe.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? le.unique(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(le.unique(le.merge(this.get(), le(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), le.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return le.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return le.dir(e, "parentNode", n)
            }, next: function (e) {
                return c(e, "nextSibling")
            }, prev: function (e) {
                return c(e, "previousSibling")
            }, nextAll: function (e) {
                return le.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return le.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return le.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return le.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return le.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return le.sibling(e.firstChild)
            }, contents: function (e) {
                return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
            }
        }, function (e, t) {
            le.fn[e] = function (n, i) {
                var o = le.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = le.filter(i, o)), this.length > 1 && (ke[e] || (o = le.unique(o)), _e.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var Ce = /\S+/g, Ae = {};
        le.Callbacks = function (e) {
            e = "string" == typeof e ? Ae[e] || l(e) : le.extend({}, e);
            var t, n, i, o, r, a, s = [], c = !e.once && [], m = function (l) {
                for (n = e.memory && l, i = !0, r = a || 0, a = 0, o = s.length, t = !0; s && o > r; r++)if (s[r].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                t = !1, s && (c ? c.length && m(c.shift()) : n ? s = [] : u.disable())
            }, u = {
                add: function () {
                    if (s) {
                        var i = s.length;
                        !function r(t) {
                            le.each(t, function (t, n) {
                                var i = le.type(n);
                                "function" === i ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = s.length : n && (a = i, m(n))
                    }
                    return this
                }, remove: function () {
                    return s && le.each(arguments, function (e, n) {
                        for (var i; (i = le.inArray(n, s, i)) > -1;)s.splice(i, 1), t && (o >= i && o--, r >= i && r--)
                    }), this
                }, has: function (e) {
                    return e ? le.inArray(e, s) > -1 : !(!s || !s.length)
                }, empty: function () {
                    return s = [], o = 0, this
                }, disable: function () {
                    return s = c = n = void 0, this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return c = void 0, n || u.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (e, n) {
                    return !s || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : m(n)), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return u
        }, le.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return le.Deferred(function (n) {
                            le.each(t, function (t, r) {
                                var a = le.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? le.extend(e, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, le.each(t, function (e, r) {
                    var a = r[2], s = r[3];
                    i[r[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t, n, i, o = 0, r = Y.call(arguments), a = r.length, s = 1 !== a || e && le.isFunction(e.promise) ? a : 0, c = 1 === s ? e : le.Deferred(), l = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : o, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
                if (a > 1)for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++)r[o] && le.isFunction(r[o].promise) ? r[o].promise().done(l(o, i, r)).fail(c.reject).progress(l(o, n, t)) : --s;
                return s || c.resolveWith(i, r), c.promise()
            }
        });
        var Te;
        le.fn.ready = function (e) {
            return le.ready.promise().done(e), this
        }, le.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? le.readyWait++ : le.ready(!0)
            }, ready: function (e) {
                if (e === !0 ? !--le.readyWait : !le.isReady) {
                    if (!ye.body)return setTimeout(le.ready);
                    le.isReady = !0, e !== !0 && --le.readyWait > 0 || (Te.resolveWith(ye, [le]), le.fn.trigger && le(ye).trigger("ready").off("ready"))
                }
            }
        }), le.ready.promise = function (e) {
            if (!Te)if (Te = le.Deferred(), "complete" === ye.readyState)setTimeout(le.ready); else if (ye.addEventListener)ye.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", u, !1); else {
                ye.attachEvent("onreadystatechange", u), n.attachEvent("onload", u);
                var t = !1;
                try {
                    t = null == n.frameElement && ye.documentElement
                } catch (i) {
                }
                t && t.doScroll && !function o() {
                    if (!le.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        m(), le.ready()
                    }
                }()
            }
            return Te.promise(e)
        };
        var Se, je = "undefined";
        for (Se in le(se))break;
        se.ownLast = "0" !== Se, se.inlineBlockNeedsLayout = !1, le(function () {
            var e, t, n = ye.getElementsByTagName("body")[0];
            n && (e = ye.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = ye.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== je && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (se.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }), function () {
            var e = ye.createElement("div");
            if (null == se.deleteExpando) {
                se.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    se.deleteExpando = !1
                }
            }
            e = null
        }(), le.acceptData = function (e) {
            var t = le.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
        var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ze = /([A-Z])/g;
        le.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando], !!e && !p(e)
            },
            data: function (e, t, n) {
                return h(e, t, n)
            },
            removeData: function (e, t) {
                return f(e, t)
            },
            _data: function (e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return f(e, t, !0)
            }
        }), le.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0], a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = le.data(r), 1 === r.nodeType && !le._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;)i = a[n].name, 0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)), d(r, i, o[i]));
                        le._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    le.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    le.data(this, e, t)
                }) : r ? d(r, e, le.data(r, e)) : void 0
            }, removeData: function (e) {
                return this.each(function () {
                    le.removeData(this, e)
                })
            }
        }), le.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = le._data(e, t), n && (!i || le.isArray(n) ? i = le._data(e, t, le.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = le.queue(e, t), i = n.length, o = n.shift(), r = le._queueHooks(e, t), a = function () {
                    le.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return le._data(e, n) || le._data(e, n, {
                        empty: le.Callbacks("once memory").add(function () {
                            le._removeData(e, t + "queue"), le._removeData(e, n)
                        })
                    })
            }
        }), le.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = le.queue(this, e, t);
                    le._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    le.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, o = le.Deferred(), r = this, a = this.length, s = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = le._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ie = ["Top", "Right", "Bottom", "Left"], qe = function (e, t) {
            return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
        }, Pe = le.access = function (e, t, n, i, o, r, a) {
            var s = 0, c = e.length, l = null == n;
            if ("object" === le.type(n)) {
                o = !0;
                for (s in n)le.access(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, le.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(le(e), n)
                })), t))for (; c > s; s++)t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : c ? t(e[0], n) : r
        }, Me = /^(?:checkbox|radio)$/i;
        !function () {
            var e = ye.createDocumentFragment(), t = ye.createElement("div"), n = ye.createElement("input");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", se.leadingWhitespace = 3 === t.firstChild.nodeType, se.tbody = !t.getElementsByTagName("tbody").length, se.htmlSerialize = !!t.getElementsByTagName("link").length, se.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), se.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, se.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    se.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == se.deleteExpando) {
                se.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    se.deleteExpando = !1
                }
            }
            e = t = n = null
        }(), function () {
            var e, t, i = ye.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })t = "on" + e, (se[e + "Bubbles"] = t in n) || (i.setAttribute(t, "t"), se[e + "Bubbles"] = i.attributes[t].expando === !1);
            i = null
        }();
        var Le = /^(?:input|select|textarea)$/i, Re = /^key/, Ue = /^(?:mouse|contextmenu)|click/, He = /^(?:focusinfocus|focusoutblur)$/, Oe = /^([^.]*)(?:\.(.+)|)$/;
        le.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, a, s, c, l, m, u, d, p, h, f, g = le._data(e);
                if (g) {
                    for (n.handler && (c = n, n = c.handler, o = c.selector), n.guid || (n.guid = le.guid++), (a = g.events) || (a = g.events = {}), (m = g.handle) || (m = g.handle = function (e) {
                        return typeof le === je || e && le.event.triggered === e.type ? void 0 : le.event.dispatch.apply(m.elem, arguments)
                    }, m.elem = e), t = (t || "").match(Ce) || [""], s = t.length; s--;)r = Oe.exec(t[s]) || [], p = f = r[1], h = (r[2] || "").split(".").sort(), p && (l = le.event.special[p] || {}, p = (o ? l.delegateType : l.bindType) || p, l = le.event.special[p] || {}, u = le.extend({
                        type: p,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && le.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, c), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, i, h, m) !== !1 || (e.addEventListener ? e.addEventListener(p, m, !1) : e.attachEvent && e.attachEvent("on" + p, m))), l.add && (l.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), le.event.global[p] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, i, o) {
                var r, a, s, c, l, m, u, d, p, h, f, g = le.hasData(e) && le._data(e);
                if (g && (m = g.events)) {
                    for (t = (t || "").match(Ce) || [""], l = t.length; l--;)if (s = Oe.exec(t[l]) || [], p = f = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (u = le.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, d = m[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = d.length; r--;)a = d[r], !o && f !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(r, 1), a.selector && d.delegateCount--, u.remove && u.remove.call(e, a));
                        c && !d.length && (u.teardown && u.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, p, g.handle), delete m[p])
                    } else for (p in m)le.event.remove(e, p + t[l], n, i, !0);
                    le.isEmptyObject(m) && (delete g.handle, le._removeData(e, "events"))
                }
            },
            trigger: function (e, t, i, o) {
                var r, a, s, c, l, m, u, d = [i || ye], p = re.call(e, "type") ? e.type : e, h = re.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = m = i = i || ye, 3 !== i.nodeType && 8 !== i.nodeType && !He.test(p + le.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[le.expando] ? e : new le.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : le.makeArray(t, [e]), l = le.event.special[p] || {}, o || !l.trigger || l.trigger.apply(i, t) !== !1)) {
                    if (!o && !l.noBubble && !le.isWindow(i)) {
                        for (c = l.delegateType || p, He.test(c + p) || (s = s.parentNode); s; s = s.parentNode)d.push(s), m = s;
                        m === (i.ownerDocument || ye) && d.push(m.defaultView || m.parentWindow || n)
                    }
                    for (u = 0; (s = d[u++]) && !e.isPropagationStopped();)e.type = u > 1 ? c : l.bindType || p, r = (le._data(s, "events") || {})[e.type] && le._data(s, "handle"), r && r.apply(s, t), r = a && s[a], r && r.apply && le.acceptData(s) && (e.result = r.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = p, !o && !e.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), t) === !1) && le.acceptData(i) && a && i[p] && !le.isWindow(i)) {
                        m = i[a], m && (i[a] = null), le.event.triggered = p;
                        try {
                            i[p]()
                        } catch (f) {
                        }
                        le.event.triggered = void 0, m && (i[a] = m)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = le.event.fix(e);
                var t, n, i, o, r, a = [], s = Y.call(arguments), c = (le._data(this, "events") || {})[e.type] || [], l = le.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (a = le.event.handlers.call(this, e, c), t = 0; (o = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, n = ((le.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, o, r, a = [], s = t.delegateCount, c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                    for (o = [], r = 0; s > r; r++)i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? le(n, this).index(c) >= 0 : le.find(n, this, null, [c]).length), o[n] && o.push(i);
                    o.length && a.push({elem: c, handlers: o})
                }
                return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
            },
            fix: function (e) {
                if (e[le.expando])return e;
                var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ue.test(o) ? this.mouseHooks : Re.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(r), t = i.length; t--;)n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ye), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, o, r = t.button, a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ye, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== b() && this.focus)try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === b() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (e) {
                        return le.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var o = le.extend(new le.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                i ? le.event.trigger(o, null, t) : le.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, le.removeEvent = ye.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === je && (e[i] = null), e.detachEvent(i, n))
        }, le.Event = function (e, t) {
            return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? g : v) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void(this[le.expando] = !0)) : new le.Event(e, t)
        }, le.Event.prototype = {
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = g, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = g, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = g, this.stopPropagation()
            }
        }, le.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
            le.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return o && (o === i || le.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), se.submitBubbles || (le.event.special.submit = {
            setup: function () {
                return le.nodeName(this, "form") ? !1 : void le.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target, n = le.nodeName(t, "input") || le.nodeName(t, "button") ? t.form : void 0;
                    n && !le._data(n, "submitBubbles") && (le.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), le._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
            }, teardown: function () {
                return le.nodeName(this, "form") ? !1 : void le.event.remove(this, "._submit")
            }
        }), se.changeBubbles || (le.event.special.change = {
            setup: function () {
                return Le.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (le.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), le.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
                })), !1) : void le.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Le.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                    }), le._data(t, "changeBubbles", !0))
                })
            }, handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return le.event.remove(this, "._change"), !Le.test(this.nodeName)
            }
        }), se.focusinBubbles || le.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                le.event.simulate(t, e.target, le.event.fix(e), !0)
            };
            le.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = le._data(i, t);
                    o || i.addEventListener(e, n, !0), le._data(i, t, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = le._data(i, t) - 1;
                    o ? le._data(i, t, o) : (i.removeEventListener(e, n, !0), le._removeData(i, t))
                }
            }
        }), le.fn.extend({
            on: function (e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (r in e)this.on(r, t, n, e[r], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)i = v; else if (!i)return this;
                return 1 === o && (a = i, i = function (e) {
                    return le().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = le.guid++)), this.each(function () {
                    le.event.add(this, e, i, n, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e)this.off(o, t, e[o]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = v), this.each(function () {
                    le.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    le.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? le.event.trigger(e, t, n, !0) : void 0
            }
        });
        var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ve = / jQuery\d+="(?:null|\d+)"/g, De = new RegExp("<(?:" + $e + ")[\\s/>]", "i"), Be = /^\s+/, Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Xe = /<([\w:]+)/, We = /<tbody/i, Ke = /<|&#?\w+;/, Je = /<(?:script|style|link)/i, Ge = /checked\s*(?:[^=]|=\s*.checked.)/i, Ze = /^$|\/(?:java|ecma)script/i, Qe = /^true\/(.*)/, Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, et = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: se.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, tt = y(ye), nt = tt.appendChild(ye.createElement("div"));
        et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td, le.extend({
            clone: function (e, t, n) {
                var i, o, r, a, s, c = le.contains(e.ownerDocument, e);
                if (se.html5Clone || le.isXMLDoc(e) || !De.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (nt.innerHTML = e.outerHTML, nt.removeChild(r = nt.firstChild)), !(se.noCloneEvent && se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))for (i = w(r), s = w(e), a = 0; null != (o = s[a]); ++a)i[a] && S(o, i[a]);
                if (t)if (n)for (s = s || w(e), i = i || w(r), a = 0; null != (o = s[a]); a++)T(o, i[a]); else T(e, r);
                return i = w(r, "script"), i.length > 0 && A(i, !c && w(e, "script")), i = s = o = null, r
            }, buildFragment: function (e, t, n, i) {
                for (var o, r, a, s, c, l, m, u = e.length, d = y(t), p = [], h = 0; u > h; h++)if (r = e[h], r || 0 === r)if ("object" === le.type(r))le.merge(p, r.nodeType ? [r] : r); else if (Ke.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")), c = (Xe.exec(r) || ["", ""])[1].toLowerCase(), m = et[c] || et._default, s.innerHTML = m[1] + r.replace(Fe, "<$1></$2>") + m[2], o = m[0]; o--;)s = s.lastChild;
                    if (!se.leadingWhitespace && Be.test(r) && p.push(t.createTextNode(Be.exec(r)[0])), !se.tbody)for (r = "table" !== c || We.test(r) ? "<table>" !== m[1] || We.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;)le.nodeName(l = r.childNodes[o], "tbody") && !l.childNodes.length && r.removeChild(l);
                    for (le.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                    s = d.lastChild
                } else p.push(t.createTextNode(r));
                for (s && d.removeChild(s), se.appendChecked || le.grep(w(p, "input"), x), h = 0; r = p[h++];)if ((!i || -1 === le.inArray(r, i)) && (a = le.contains(r.ownerDocument, r), s = w(d.appendChild(r), "script"), a && A(s), n))for (o = 0; r = s[o++];)Ze.test(r.type || "") && n.push(r);
                return s = null, d
            }, cleanData: function (e, t) {
                for (var n, i, o, r, a = 0, s = le.expando, c = le.cache, l = se.deleteExpando, m = le.event.special; null != (n = e[a]); a++)if ((t || le.acceptData(n)) && (o = n[s], r = o && c[o])) {
                    if (r.events)for (i in r.events)m[i] ? le.event.remove(n, i) : le.removeEvent(n, i, r.handle);
                    c[o] && (delete c[o], l ? delete n[s] : typeof n.removeAttribute !== je ? n.removeAttribute(s) : n[s] = null, Q.push(o))
                }
            }
        }), le.fn.extend({
            text: function (e) {
                return Pe(this, function (e) {
                    return void 0 === e ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, i = e ? le.filter(e, this) : this, o = 0; null != (n = i[o]); o++)t || 1 !== n.nodeType || le.cleanData(w(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && A(w(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && le.cleanData(w(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                    e.options && le.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return le.clone(this, e, t)
                })
            }, html: function (e) {
                return Pe(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Ve, "") : void 0;
                    if ("string" == typeof e && !Je.test(e) && (se.htmlSerialize || !De.test(e)) && (se.leadingWhitespace || !Be.test(e)) && !et[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Fe, "<$1></$2>");
                        try {
                            for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (le.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, le.cleanData(w(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t) {
                e = ee.apply([], e);
                var n, i, o, r, a, s, c = 0, l = this.length, m = this, u = l - 1, d = e[0], p = le.isFunction(d);
                if (p || l > 1 && "string" == typeof d && !se.checkClone && Ge.test(d))return this.each(function (n) {
                    var i = m.eq(n);
                    p && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
                });
                if (l && (s = le.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = le.map(w(s, "script"), k), o = r.length; l > c; c++)i = s, c !== u && (i = le.clone(i, !0, !0), o && le.merge(r, w(i, "script"))), t.call(this[c], i, c);
                    if (o)for (a = r[r.length - 1].ownerDocument, le.map(r, C), c = 0; o > c; c++)i = r[c], Ze.test(i.type || "") && !le._data(i, "globalEval") && le.contains(a, i) && (i.src ? le._evalUrl && le._evalUrl(i.src) : le.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
                    s = n = null
                }
                return this
            }
        }), le.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            le.fn[e] = function (e) {
                for (var n, i = 0, o = [], r = le(e), a = r.length - 1; a >= i; i++)n = i === a ? this : this.clone(!0), le(r[i])[t](n), te.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var it, ot = {};
        !function () {
            var e, t, n = ye.createElement("div"), i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", se.opacity = /^0.5/.test(e.style.opacity), se.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, se.shrinkWrapBlocks = function () {
                var e, n, o, r;
                if (null == t) {
                    if (e = ye.getElementsByTagName("body")[0], !e)return;
                    r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = ye.createElement("div"), o = ye.createElement("div"), e.appendChild(n).appendChild(o), t = !1, typeof o.style.zoom !== je && (o.style.cssText = i + ";width:1px;padding:1px;zoom:1", o.innerHTML = "<div></div>", o.firstChild.style.width = "5px", t = 3 !== o.offsetWidth), e.removeChild(n), e = n = o = null
                }
                return t
            }
        }();
        var rt, at, st = /^margin/, ct = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"), lt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (rt = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, at = function (e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || rt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || le.contains(e.ownerDocument, e) || (a = le.style(e, t)), ct.test(a) && st.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : ye.documentElement.currentStyle && (rt = function (e) {
            return e.currentStyle
        }, at = function (e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || rt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ct.test(a) && !lt.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }), function () {
            function e() {
                var e, t, i = ye.getElementsByTagName("body")[0];
                i && (e = ye.createElement("div"), t = ye.createElement("div"), e.style.cssText = l, i.appendChild(e).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", le.swap(i, null != i.style.zoom ? {zoom: 1} : {}, function () {
                    o = 4 === t.offsetWidth
                }), r = !0, a = !1, s = !0, n.getComputedStyle && (a = "1%" !== (n.getComputedStyle(t, null) || {}).top, r = "4px" === (n.getComputedStyle(t, null) || {width: "4px"}).width), i.removeChild(e), t = i = null)
            }

            var t, i, o, r, a, s, c = ye.createElement("div"), l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", m = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = c.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", se.opacity = /^0.5/.test(t.style.opacity), se.cssFloat = !!t.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === c.style.backgroundClip, t = c = null, le.extend(se, {
                reliableHiddenOffsets: function () {
                    if (null != i)return i;
                    var e, t, n, o = ye.createElement("div"), r = ye.getElementsByTagName("body")[0];
                    if (r)return o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = ye.createElement("div"), e.style.cssText = l, r.appendChild(e).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = o.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = n && 0 === t[0].offsetHeight, r.removeChild(e), o = r = null, i
                }, boxSizing: function () {
                    return null == o && e(), o
                }, boxSizingReliable: function () {
                    return null == r && e(), r
                }, pixelPosition: function () {
                    return null == a && e(), a
                }, reliableMarginRight: function () {
                    var e, t, i, o;
                    if (null == s && n.getComputedStyle) {
                        if (e = ye.getElementsByTagName("body")[0], !e)return;
                        t = ye.createElement("div"), i = ye.createElement("div"), t.style.cssText = l, e.appendChild(t).appendChild(i), o = i.appendChild(ye.createElement("div")), o.style.cssText = i.style.cssText = m, o.style.marginRight = o.style.width = "0", i.style.width = "1px", s = !parseFloat((n.getComputedStyle(o, null) || {}).marginRight), e.removeChild(t)
                    }
                    return s
                }
            })
        }(), le.swap = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t)a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t)e.style[r] = a[r];
            return o
        };
        var mt = /alpha\([^)]*\)/i, ut = /opacity\s*=\s*([^)]*)/, dt = /^(none|table(?!-c[ea]).+)/, pt = new RegExp("^(" + Ne + ")(.*)$", "i"), ht = new RegExp("^([+-])=(" + Ne + ")", "i"), ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, gt = {letterSpacing: 0, fontWeight: 400}, vt = ["Webkit", "O", "Moz", "ms"];
        le.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = at(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": se.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = le.camelCase(t), c = e.style;
                    if (t = le.cssProps[s] || (le.cssProps[s] = N(c, s)), a = le.cssHooks[t] || le.cssHooks[s], void 0 === n)return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                    if (r = typeof n, "string" === r && (o = ht.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(le.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || le.cssNumber[s] || (n += "px"), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i)))))try {
                        c[t] = "", c[t] = n
                    } catch (l) {
                    }
                }
            },
            css: function (e, t, n, i) {
                var o, r, a, s = le.camelCase(t);
                return t = le.cssProps[s] || (le.cssProps[s] = N(e.style, s)), a = le.cssHooks[t] || le.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = at(e, t, i)), "normal" === r && t in gt && (r = gt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || le.isNumeric(o) ? o || 0 : r) : r
            }
        }), le.each(["height", "width"], function (e, t) {
            le.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? 0 === e.offsetWidth && dt.test(le.css(e, "display")) ? le.swap(e, ft, function () {
                        return M(e, t, i)
                    }) : M(e, t, i) : void 0
                }, set: function (e, n, i) {
                    var o = i && rt(e);
                    return q(e, n, i ? P(e, t, i, se.boxSizing() && "border-box" === le.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), se.opacity || (le.cssHooks.opacity = {
            get: function (e, t) {
                return ut.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, i = e.currentStyle, o = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(r.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(r) ? r.replace(mt, o) : r + " " + o)
            }
        }), le.cssHooks.marginRight = z(se.reliableMarginRight, function (e, t) {
            return t ? le.swap(e, {display: "inline-block"}, at, [e, "marginRight"]) : void 0
        }), le.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            le.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[e + Ie[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, st.test(e) || (le.cssHooks[e + t].set = q)
        }), le.fn.extend({
            css: function (e, t) {
                return Pe(this, function (e, t, n) {
                    var i, o, r = {}, a = 0;
                    if (le.isArray(t)) {
                        for (i = rt(e), o = t.length; o > a; a++)r[t[a]] = le.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return I(this, !0)
            }, hide: function () {
                return I(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    qe(this) ? le(this).show() : le(this).hide()
                })
            }
        }), le.Tween = L, L.prototype = {
            constructor: L, init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (le.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, le.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, le.fx = L.prototype.init, le.fx.step = {};
        var bt, yt, wt = /^(?:toggle|show|hide)$/, xt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"), _t = /queueHooks$/, kt = [O], Ct = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), i = n.cur(), o = xt.exec(t), r = o && o[3] || (le.cssNumber[e] ? "" : "px"), a = (le.cssNumber[e] || "px" !== r && +i) && xt.exec(le.css(n.elem, e)), s = 1, c = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do s = s || ".5", a /= s, le.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --c)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
        le.Animation = le.extend(V, {
            tweener: function (e, t) {
                le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++)n = e[i], Ct[n] = Ct[n] || [], Ct[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? kt.unshift(e) : kt.push(e)
            }
        }), le.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? le.extend({}, e) : {
                complete: n || !n && t || le.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !le.isFunction(t) && t
            };
            return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
            }, i
        }, le.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(qe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var o = le.isEmptyObject(e), r = le.speed(t, n, i), a = function () {
                    var t = V(this, le.extend({}, e), r);
                    (o || le._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, o = null != e && e + "queueHooks", r = le.timers, a = le._data(this);
                    if (o)a[o] && a[o].stop && i(a[o]); else for (o in a)a[o] && a[o].stop && _t.test(o) && i(a[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || le.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = le._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = le.timers, a = i ? i.length : 0;
                    for (n.finish = !0, le.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), le.each(["toggle", "show", "hide"], function (e, t) {
            var n = le.fn[t];
            le.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, o)
            }
        }), le.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            le.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), le.timers = [], le.fx.tick = function () {
            var e, t = le.timers, n = 0;
            for (bt = le.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || le.fx.stop(), bt = void 0
        }, le.fx.timer = function (e) {
            le.timers.push(e), e() ? le.fx.start() : le.timers.pop()
        }, le.fx.interval = 13, le.fx.start = function () {
            yt || (yt = setInterval(le.fx.tick, le.fx.interval))
        }, le.fx.stop = function () {
            clearInterval(yt), yt = null
        }, le.fx.speeds = {slow: 600, fast: 200, _default: 400}, le.fn.delay = function (e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var e, t, n, i, o = ye.createElement("div");
            o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], n = ye.createElement("select"), i = n.appendChild(ye.createElement("option")), t = o.getElementsByTagName("input")[0], e.style.cssText = "top:1px", se.getSetAttribute = "t" !== o.className, se.style = /top/.test(e.getAttribute("style")), se.hrefNormalized = "/a" === e.getAttribute("href"), se.checkOn = !!t.value, se.optSelected = i.selected, se.enctype = !!ye.createElement("form").enctype, n.disabled = !0, se.optDisabled = !i.disabled, t = ye.createElement("input"), t.setAttribute("value", ""), se.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), se.radioValue = "t" === t.value, e = t = n = i = o = null
        }();
        var At = /\r/g;
        le.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0];
                {
                    if (arguments.length)return i = le.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, le(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return t = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
                }
            }
        }), le.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = le.find.attr(e, "value");
                        return null != t ? t : le.text(e)
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, c = 0 > o ? s : r ? o : 0; s > c; c++)if (n = i[c], (n.selected || c === o) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                            if (t = le(n).val(), r)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, i, o = e.options, r = le.makeArray(t), a = o.length; a--;)if (i = o[a], le.inArray(le.valHooks.option.get(i), r) >= 0)try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), le.each(["radio", "checkbox"], function () {
            le.valHooks[this] = {
                set: function (e, t) {
                    return le.isArray(t) ? e.checked = le.inArray(le(e).val(), t) >= 0 : void 0
                }
            }, se.checkOn || (le.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Tt, St, jt = le.expr.attrHandle, Et = /^(?:checked|selected)$/i, zt = se.getSetAttribute, Nt = se.input;
        le.fn.extend({
            attr: function (e, t) {
                return Pe(this, le.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    le.removeAttr(this, e)
                })
            }
        }), le.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r)return typeof e.getAttribute === je ? le.prop(e, t, n) : (1 === r && le.isXMLDoc(e) || (t = t.toLowerCase(), i = le.attrHooks[t] || (le.expr.match.bool.test(t) ? St : Tt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = le.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void le.removeAttr(e, t))
            }, removeAttr: function (e, t) {
                var n, i, o = 0, r = t && t.match(Ce);
                if (r && 1 === e.nodeType)for (; n = r[o++];)i = le.propFix[n] || n, le.expr.match.bool.test(n) ? Nt && zt || !Et.test(n) ? e[i] = !1 : e[le.camelCase("default-" + n)] = e[i] = !1 : le.attr(e, n, ""), e.removeAttribute(zt ? n : i)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!se.radioValue && "radio" === t && le.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), St = {
            set: function (e, t, n) {
                return t === !1 ? le.removeAttr(e, n) : Nt && zt || !Et.test(n) ? e.setAttribute(!zt && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, le.each(le.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = jt[t] || le.find.attr;
            jt[t] = Nt && zt || !Et.test(t) ? function (e, t, i) {
                var o, r;
                return i || (r = jt[t], jt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = r), o
            } : function (e, t, n) {
                return n ? void 0 : e[le.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Nt && zt || (le.attrHooks.value = {
            set: function (e, t, n) {
                return le.nodeName(e, "input") ? void(e.defaultValue = t) : Tt && Tt.set(e, t, n)
            }
        }), zt || (Tt = {
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, jt.id = jt.name = jt.coords = function (e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, le.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            }, set: Tt.set
        }, le.attrHooks.contenteditable = {
            set: function (e, t, n) {
                Tt.set(e, "" === t ? !1 : t, n)
            }
        }, le.each(["width", "height"], function (e, t) {
            le.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), se.style || (le.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var It = /^(?:input|select|textarea|button|object)$/i, qt = /^(?:a|area)$/i;
        le.fn.extend({
            prop: function (e, t) {
                return Pe(this, le.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = le.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {
                    }
                })
            }
        }), le.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
                var i, o, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)return r = 1 !== a || !le.isXMLDoc(e), r && (t = le.propFix[t] || t, o = le.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = le.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : It.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), se.hrefNormalized || le.each(["href", "src"], function (e, t) {
            le.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), se.optSelected || (le.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            le.propFix[this.toLowerCase()] = this
        }), se.enctype || (le.propFix.enctype = "encoding");
        var Pt = /[\t\r\n\f]/g;
        le.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, a, s = 0, c = this.length, l = "string" == typeof e && e;
                if (le.isFunction(e))return this.each(function (t) {
                    le(this).addClass(e.call(this, t, this.className))
                });
                if (l)for (t = (e || "").match(Ce) || []; c > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : " ")) {
                    for (r = 0; o = t[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = le.trim(i), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, o, r, a, s = 0, c = this.length, l = 0 === arguments.length || "string" == typeof e && e;
                if (le.isFunction(e))return this.each(function (t) {
                    le(this).removeClass(e.call(this, t, this.className))
                });
                if (l)for (t = (e || "").match(Ce) || []; c > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : "")) {
                    for (r = 0; o = t[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    a = e ? le.trim(i) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function (n) {
                    le(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)for (var t, i = 0, o = le(this), r = e.match(Ce) || []; t = r[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else n !== je && "boolean" !== n || (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pt, " ").indexOf(t) >= 0)return !0;
                return !1
            }
        }), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            le.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), le.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Mt = le.now(), Lt = /\?/, Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        le.parseJSON = function (e) {
            if (n.JSON && n.JSON.parse)return n.JSON.parse(e + "");
            var t, i = null, o = le.trim(e + "");
            return o && !le.trim(o.replace(Rt, function (e, n, o, r) {
                return t && n && (i = 0), 0 === i ? e : (t = o || n, i += !r - !o, "")
            })) ? Function("return " + o)() : le.error("Invalid JSON: " + e)
        }, le.parseXML = function (e) {
            var t, i;
            if (!e || "string" != typeof e)return null;
            try {
                n.DOMParser ? (i = new DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (o) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e), t
        };
        var Ut, Ht, Ot = /#.*$/, $t = /([?&])_=[^&]*/, Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, Ft = /^\/\//, Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Wt = {}, Kt = {}, Jt = "*/".concat("*");
        try {
            Ht = location.href
        } catch (Gt) {
            Ht = ye.createElement("a"), Ht.href = "", Ht = Ht.href
        }
        Ut = Xt.exec(Ht.toLowerCase()) || [], le.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ht,
                type: "GET",
                isLocal: Dt.test(Ut[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Jt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": le.parseJSON, "text xml": le.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? F(F(e, le.ajaxSettings), t) : F(le.ajaxSettings, e)
            },
            ajaxPrefilter: D(Wt),
            ajaxTransport: D(Kt),
            ajax: function (e, t) {
                function n(e, t, n, i) {
                    var o, m, v, b, w, _ = t;
                    2 !== y && (y = 2, s && clearTimeout(s), l = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (b = X(u, x, n)), b = W(u, b, x, o), o ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (le.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (le.etag[r] = w)), 204 === e || "HEAD" === u.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = b.state, m = b.data, v = b.error, o = !v)) : (v = _, !e && _ || (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || _) + "", o ? h.resolveWith(d, [m, _, x]) : h.rejectWith(d, [x, _, v]), x.statusCode(g), g = void 0, c && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? m : v]), f.fireWith(d, [x, _]), c && (p.trigger("ajaxComplete", [x, u]), --le.active || le.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, a, s, c, l, m, u = le.ajaxSetup({}, t), d = u.context || u, p = u.context && (d.nodeType || d.jquery) ? le(d) : le.event, h = le.Deferred(), f = le.Callbacks("once memory"), g = u.statusCode || {}, v = {}, b = {}, y = 0, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === y) {
                            if (!m)for (m = {}; t = Vt.exec(a);)m[t[1].toLowerCase()] = t[2];
                            t = m[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === y ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return y || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return y || (u.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > y)for (t in e)g[t] = [g[t], e[t]]; else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return l && l.abort(t), n(0, t), this
                    }
                };
                if (h.promise(x).complete = f.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || Ht) + "").replace(Ot, "").replace(Ft, Ut[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = le.trim(u.dataType || "*").toLowerCase().match(Ce) || [""], null == u.crossDomain && (i = Xt.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Ut[1] && i[2] === Ut[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ut[3] || ("http:" === Ut[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = le.param(u.data, u.traditional)), B(Wt, u, t, x), 2 === y)return x;
                c = u.global, c && 0 === le.active++ && le.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Bt.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (Lt.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = $t.test(r) ? r.replace($t, "$1_=" + Mt++) : r + (Lt.test(r) ? "&" : "?") + "_=" + Mt++)), u.ifModified && (le.lastModified[r] && x.setRequestHeader("If-Modified-Since", le.lastModified[r]), le.etag[r] && x.setRequestHeader("If-None-Match", le.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : u.accepts["*"]);
                for (o in u.headers)x.setRequestHeader(o, u.headers[o]);
                if (u.beforeSend && (u.beforeSend.call(d, x, u) === !1 || 2 === y))return x.abort();
                w = "abort";
                for (o in{success: 1, error: 1, complete: 1})x[o](u[o]);
                if (l = B(Kt, u, t, x)) {
                    x.readyState = 1, c && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (s = setTimeout(function () {
                        x.abort("timeout")
                    }, u.timeout));
                    try {
                        y = 1, l.send(v, n)
                    } catch (_) {
                        if (!(2 > y))throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (e, t, n) {
                return le.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return le.get(e, void 0, t, "script")
            }
        }), le.each(["get", "post"], function (e, t) {
            le[t] = function (e, n, i, o) {
                return le.isFunction(n) && (o = o || i, i = n, n = void 0), le.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            le.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), le._evalUrl = function (e) {
            return le.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, le.fn.extend({
            wrapAll: function (e) {
                if (le.isFunction(e))return this.each(function (t) {
                    le(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return le.isFunction(e) ? this.each(function (t) {
                    le(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = le(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = le.isFunction(e);
                return this.each(function (n) {
                    le(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                }).end()
            }
        }), le.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !se.reliableHiddenOffsets() && "none" === (e.style && e.style.display || le.css(e, "display"))
        }, le.expr.filters.visible = function (e) {
            return !le.expr.filters.hidden(e)
        };
        var Zt = /%20/g, Qt = /\[\]$/, Yt = /\r?\n/g, en = /^(?:submit|button|image|reset|file)$/i, tn = /^(?:input|select|textarea|keygen)/i;
        le.param = function (e, t) {
            var n, i = [], o = function (e, t) {
                t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e))le.each(e, function () {
                o(this.name, this.value)
            }); else for (n in e)K(n, e[n], t, o);
            return i.join("&").replace(Zt, "+")
        }, le.fn.extend({
            serialize: function () {
                return le.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = le.prop(this, "elements");
                    return e ? le.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !le(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !Me.test(e))
                }).map(function (e, t) {
                    var n = le(this).val();
                    return null == n ? null : le.isArray(n) ? le.map(n, function (e) {
                        return {name: t.name, value: e.replace(Yt, "\r\n")}
                    }) : {name: t.name, value: n.replace(Yt, "\r\n")}
                }).get()
            }
        }), le.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || G()
        } : J;
        var nn = 0, on = {}, rn = le.ajaxSettings.xhr();
        n.ActiveXObject && le(n).on("unload", function () {
            for (var e in on)on[e](void 0, !0)
        }), se.cors = !!rn && "withCredentials" in rn, rn = se.ajax = !!rn, rn && le.ajaxTransport(function (e) {
            if (!e.crossDomain || se.cors) {
                var t;
                return {
                    send: function (n, i) {
                        var o, r = e.xhr(), a = ++nn;
                        if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (o in e.xhrFields)r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(e.hasContent && e.data || null), t = function (n, o) {
                            var s, c, l;
                            if (t && (o || 4 === r.readyState))if (delete on[a], t = void 0, r.onreadystatechange = le.noop, o)4 !== r.readyState && r.abort(); else {
                                l = {}, s = r.status, "string" == typeof r.responseText && (l.text = r.responseText);
                                try {
                                    c = r.statusText
                                } catch (m) {
                                    c = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                            l && i(s, c, l, r.getAllResponseHeaders())
                        }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = on[a] = t : t()
                    }, abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), le.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return le.globalEval(e), e
                }
            }
        }), le.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), le.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = ye.head || le("head")[0] || ye.documentElement;
                return {
                    send: function (i, o) {
                        t = ye.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var an = [], sn = /(=)\?(?=&|$)|\?\?/;
        le.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = an.pop() || le.expando + "_" + Mt++;
                return this[e] = !0, e
            }
        }), le.ajaxPrefilter("json jsonp", function (e, t, i) {
            var o, r, a, s = e.jsonp !== !1 && (sn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && sn.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(sn, "$1" + o) : e.jsonp !== !1 && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return a || le.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = n[o], n[o] = function () {
                a = arguments
            }, i.always(function () {
                n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, an.push(o)), a && le.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), le.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ye;
            var i = ge.exec(e), o = !n && [];
            return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, o), o && o.length && le(o).remove(), le.merge([], i.childNodes))
        };
        var cn = le.fn.load;
        le.fn.load = function (e, t, n) {
            if ("string" != typeof e && cn)return cn.apply(this, arguments);
            var i, o, r, a = this, s = e.indexOf(" ");
            return s >= 0 && (i = e.slice(s, e.length), e = e.slice(0, s)), le.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && le.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e)
            }).complete(n && function (e, t) {
                    a.each(n, o || [e.responseText, t, e])
                }), this
        }, le.expr.filters.animated = function (e) {
            return le.grep(le.timers, function (t) {
                return e === t.elem
            }).length
        };
        var ln = n.document.documentElement;
        le.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, a, s, c, l, m = le.css(e, "position"), u = le(e), d = {};
                "static" === m && (e.style.position = "relative"), s = u.offset(), r = le.css(e, "top"), c = le.css(e, "left"), l = ("absolute" === m || "fixed" === m) && le.inArray("auto", [r, c]) > -1, l ? (i = u.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, le.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    le.offset.setOffset(this, e, t)
                });
                var t, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
                if (r)return t = r.documentElement, le.contains(t, o) ? (typeof o.getBoundingClientRect !== je && (i = o.getBoundingClientRect()), n = Z(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - le.css(i, "marginTop", !0),
                        left: t.left - n.left - le.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || ln; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");)e = e.offsetParent;
                    return e || ln
                })
            }
        }), le.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            le.fn[e] = function (i) {
                return Pe(this, function (e, i, o) {
                    var r = Z(e);
                    return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? le(r).scrollLeft() : o, n ? o : le(r).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), le.each(["top", "left"], function (e, t) {
            le.cssHooks[t] = z(se.pixelPosition, function (e, n) {
                return n ? (n = at(e, t), ct.test(n) ? le(e).position()[t] + "px" : n) : void 0
            })
        }), le.each({Height: "height", Width: "width"}, function (e, t) {
            le.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                le.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Pe(this, function (t, n, i) {
                        var o;
                        return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? le.css(t, n, a) : le.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), le.fn.size = function () {
            return this.length
        }, le.fn.andSelf = le.fn.addBack, i = [], o = function () {
            return le
        }.apply(t, i), !(void 0 !== o && (e.exports = o));
        var mn = n.jQuery, un = n.$;
        return le.noConflict = function (e) {
            return n.$ === le && (n.$ = un), e && n.jQuery === le && (n.jQuery = mn), le
        }, typeof r === je && (n.jQuery = n.$ = le), le
    })
}, function (e, t, n) {
    var i, o;
    (function (r) {
        !function (r, a) {
            i = [n(95), n(311), t], o = function (e, t, n) {
                r.Backbone = a(r, n, e, t)
            }.apply(t, i), !(void 0 !== o && (e.exports = o))
        }(this, function (e, t, n, i) {
            var o = e.Backbone, a = [], s = (a.push, a.slice);
            a.splice;
            t.VERSION = "1.1.2", t.$ = i, t.noConflict = function () {
                return e.Backbone = o, this
            }, t.emulateHTTP = !1, t.emulateJSON = !1;
            var c = t.Events = {
                on: function (e, t, n) {
                    if (!m(this, "on", e, [t, n]) || !t)return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({callback: t, context: n, ctx: n || this}), this
                }, once: function (e, t, i) {
                    if (!m(this, "once", e, [t, i]) || !t)return this;
                    var o = this, r = n.once(function () {
                        o.off(e, r), t.apply(this, arguments)
                    });
                    return r._callback = t, this.on(e, r, i)
                }, off: function (e, t, i) {
                    var o, r, a, s, c, l, u, d;
                    if (!this._events || !m(this, "off", e, [t, i]))return this;
                    if (!e && !t && !i)return this._events = void 0, this;
                    for (s = e ? [e] : n.keys(this._events), c = 0, l = s.length; l > c; c++)if (e = s[c], a = this._events[e]) {
                        if (this._events[e] = o = [], t || i)for (u = 0, d = a.length; d > u; u++)r = a[u], (t && t !== r.callback && t !== r.callback._callback || i && i !== r.context) && o.push(r);
                        o.length || delete this._events[e]
                    }
                    return this
                }, trigger: function (e) {
                    if (!this._events)return this;
                    var t = s.call(arguments, 1);
                    if (!m(this, "trigger", e, t))return this;
                    var n = this._events[e], i = this._events.all;
                    return n && u(n, t), i && u(i, arguments), this
                }, stopListening: function (e, t, i) {
                    var o = this._listeningTo;
                    if (!o)return this;
                    var r = !t && !i;
                    i || "object" != typeof t || (i = this), e && ((o = {})[e._listenId] = e);
                    for (var a in o)e = o[a], e.off(t, i, this), (r || n.isEmpty(e._events)) && delete this._listeningTo[a];
                    return this
                }
            }, l = /\s+/, m = function (e, t, n, i) {
                if (!n)return !0;
                if ("object" == typeof n) {
                    for (var o in n)e[t].apply(e, [o, n[o]].concat(i));
                    return !1
                }
                if (l.test(n)) {
                    for (var r = n.split(l), a = 0, s = r.length; s > a; a++)e[t].apply(e, [r[a]].concat(i));
                    return !1
                }
                return !0
            }, u = function (e, t) {
                var n, i = -1, o = e.length, r = t[0], a = t[1], s = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++i < o;)(n = e[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r);
                        return;
                    case 2:
                        for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, a);
                        return;
                    case 3:
                        for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, a, s);
                        return;
                    default:
                        for (; ++i < o;)(n = e[i]).callback.apply(n.ctx, t);
                        return
                }
            }, d = {listenTo: "on", listenToOnce: "once"};
            n.each(d, function (e, t) {
                c[t] = function (t, i, o) {
                    var r = this._listeningTo || (this._listeningTo = {}), a = t._listenId || (t._listenId = n.uniqueId("l"));
                    return r[a] = t, o || "object" != typeof i || (o = this), t[e](i, o, this), this
                }
            }), c.bind = c.on, c.unbind = c.off, n.extend(t, c);
            var p = t.Model = function (e, t) {
                var i = e || {};
                t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            n.extend(p.prototype, c, {
                changed: null, validationError: null, idAttribute: "id", initialize: function () {
                }, toJSON: function (e) {
                    return n.clone(this.attributes)
                }, sync: function () {
                    return t.sync.apply(this, arguments)
                }, get: function (e) {
                    return this.attributes[e]
                }, escape: function (e) {
                    return n.escape(this.get(e))
                }, has: function (e) {
                    return null != this.get(e)
                }, set: function (e, t, i) {
                    var o, r, a, s, c, l, m, u;
                    if (null == e)return this;
                    if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i))return !1;
                    a = i.unset, c = i.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), u = this.attributes, m = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
                    for (o in r)t = r[o], n.isEqual(u[o], t) || s.push(o), n.isEqual(m[o], t) ? delete this.changed[o] : this.changed[o] = t, a ? delete u[o] : u[o] = t;
                    if (!c) {
                        s.length && (this._pending = i);
                        for (var d = 0, p = s.length; p > d; d++)this.trigger("change:" + s[d], this, u[s[d]], i)
                    }
                    if (l)return this;
                    if (!c)for (; this._pending;)i = this._pending, this._pending = !1, this.trigger("change", this, i);
                    return this._pending = !1, this._changing = !1, this
                }, unset: function (e, t) {
                    return this.set(e, void 0, n.extend({}, t, {unset: !0}))
                }, clear: function (e) {
                    var t = {};
                    for (var i in this.attributes)t[i] = void 0;
                    return this.set(t, n.extend({}, e, {unset: !0}))
                }, hasChanged: function (e) {
                    return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
                }, changedAttributes: function (e) {
                    if (!e)return this.hasChanged() ? n.clone(this.changed) : !1;
                    var t, i = !1, o = this._changing ? this._previousAttributes : this.attributes;
                    for (var r in e)n.isEqual(o[r], t = e[r]) || ((i || (i = {}))[r] = t);
                    return i
                }, previous: function (e) {
                    return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                }, previousAttributes: function () {
                    return n.clone(this._previousAttributes)
                }, fetch: function (e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = this, i = e.success;
                    return e.success = function (n) {
                        return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
                    }, U(this, e), this.sync("read", this, e)
                }, save: function (e, t, i) {
                    var o, r, a, s = this.attributes;
                    if (null == e || "object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i = n.extend({validate: !0}, i), o && !i.wait) {
                        if (!this.set(o, i))return !1
                    } else if (!this._validate(o, i))return !1;
                    o && i.wait && (this.attributes = n.extend({}, s, o)), void 0 === i.parse && (i.parse = !0);
                    var c = this, l = i.success;
                    return i.success = function (e) {
                        c.attributes = s;
                        var t = c.parse(e, i);
                        return i.wait && (t = n.extend(o || {}, t)), n.isObject(t) && !c.set(t, i) ? !1 : (l && l(c, e, i), void c.trigger("sync", c, e, i))
                    }, U(this, i), r = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === r && (i.attrs = o), a = this.sync(r, this, i), o && i.wait && (this.attributes = s), a
                }, destroy: function (e) {
                    e = e ? n.clone(e) : {};
                    var t = this, i = e.success, o = function () {
                        t.trigger("destroy", t, t.collection, e)
                    };
                    if (e.success = function (n) {
                            (e.wait || t.isNew()) && o(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                        }, this.isNew())return e.success(), !1;
                    U(this, e);
                    var r = this.sync("delete", this, e);
                    return e.wait || o(), r
                }, url: function () {
                    var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || R();
                    return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                }, parse: function (e, t) {
                    return e
                }, clone: function () {
                    return new this.constructor(this.attributes)
                }, isNew: function () {
                    return !this.has(this.idAttribute)
                }, isValid: function (e) {
                    return this._validate({}, n.extend(e || {}, {validate: !0}))
                }, _validate: function (e, t) {
                    if (!t.validate || !this.validate)return !0;
                    e = n.extend({}, this.attributes, e);
                    var i = this.validationError = this.validate(e, t) || null;
                    return i ? (this.trigger("invalid", this, i, n.extend(t, {validationError: i})), !1) : !0
                }
            });
            var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
            n.each(h, function (e) {
                p.prototype[e] = function () {
                    var t = s.call(arguments);
                    return t.unshift(this.attributes), n[e].apply(n, t)
                }
            });
            var f = t.Collection = function (e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({silent: !0}, t))
            }, g = {add: !0, remove: !0, merge: !0}, v = {add: !0, remove: !1};
            n.extend(f.prototype, c, {
                model: p, initialize: function () {
                }, toJSON: function (e) {
                    return this.map(function (t) {
                        return t.toJSON(e)
                    })
                }, sync: function () {
                    return t.sync.apply(this, arguments)
                }, add: function (e, t) {
                    return this.set(e, n.extend({merge: !1}, t, v))
                }, remove: function (e, t) {
                    var i = !n.isArray(e);
                    e = i ? [e] : n.clone(e), t || (t = {});
                    var o, r, a, s;
                    for (o = 0, r = e.length; r > o; o++)s = e[o] = this.get(e[o]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
                    return i ? e[0] : e
                }, set: function (e, t) {
                    t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                    var i = !n.isArray(e);
                    e = i ? e ? [e] : [] : n.clone(e);
                    var o, r, a, s, c, l, m, u = t.at, d = this.model, h = this.comparator && null == u && t.sort !== !1, f = n.isString(this.comparator) ? this.comparator : null, v = [], b = [], y = {}, w = t.add, x = t.merge, _ = t.remove, k = !h && w && _ ? [] : !1;
                    for (o = 0, r = e.length; r > o; o++) {
                        if (c = e[o] || {}, a = c instanceof p ? s = c : c[d.prototype.idAttribute || "id"], l = this.get(a))_ && (y[l.cid] = !0), x && (c = c === s ? s.attributes : c, t.parse && (c = l.parse(c, t)), l.set(c, t), h && !m && l.hasChanged(f) && (m = !0)), e[o] = l; else if (w) {
                            if (s = e[o] = this._prepareModel(c, t), !s)continue;
                            v.push(s), this._addReference(s, t)
                        }
                        s = l || s, !k || !s.isNew() && y[s.id] || k.push(s), y[s.id] = !0
                    }
                    if (_) {
                        for (o = 0, r = this.length; r > o; ++o)y[(s = this.models[o]).cid] || b.push(s);
                        b.length && this.remove(b, t)
                    }
                    if (v.length || k && k.length)if (h && (m = !0), this.length += v.length, null != u)for (o = 0, r = v.length; r > o; o++)this.models.splice(u + o, 0, v[o]); else {
                        k && (this.models.length = 0);
                        var C = k || v;
                        for (o = 0, r = C.length; r > o; o++)this.models.push(C[o])
                    }
                    if (m && this.sort({silent: !0}), !t.silent) {
                        for (o = 0, r = v.length; r > o; o++)(s = v[o]).trigger("add", s, this, t);
                        (m || k && k.length) && this.trigger("sort", this, t)
                    }
                    return i ? e[0] : e
                }, reset: function (e, t) {
                    t || (t = {});
                    for (var i = 0, o = this.models.length; o > i; i++)this._removeReference(this.models[i], t);
                    return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), e
                }, push: function (e, t) {
                    return this.add(e, n.extend({at: this.length}, t))
                }, pop: function (e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e), t
                }, unshift: function (e, t) {
                    return this.add(e, n.extend({at: 0}, t))
                }, shift: function (e) {
                    var t = this.at(0);
                    return this.remove(t, e), t
                }, slice: function () {
                    return s.apply(this.models, arguments)
                }, get: function (e) {
                    return null != e ? this._byId[e] || this._byId[e.id] || this._byId[e.cid] : void 0
                }, at: function (e) {
                    return this.models[e]
                }, where: function (e, t) {
                    return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                        for (var n in e)if (e[n] !== t.get(n))return !1;
                        return !0
                    })
                }, findWhere: function (e) {
                    return this.where(e, !0)
                }, sort: function (e) {
                    if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
                }, pluck: function (e) {
                    return n.invoke(this.models, "get", e)
                }, fetch: function (e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = e.success, i = this;
                    return e.success = function (n) {
                        var o = e.reset ? "reset" : "set";
                        i[o](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                    }, U(this, e), this.sync("read", this, e)
                }, create: function (e, t) {
                    if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t)))return !1;
                    t.wait || this.add(e, t);
                    var i = this, o = t.success;
                    return t.success = function (e, n) {
                        t.wait && i.add(e, t), o && o(e, n, t)
                    }, e.save(null, t), e
                }, parse: function (e, t) {
                    return e
                }, clone: function () {
                    return new this.constructor(this.models)
                }, _reset: function () {
                    this.length = 0, this.models = [], this._byId = {}
                }, _prepareModel: function (e, t) {
                    if (e instanceof p)return e;
                    t = t ? n.clone(t) : {}, t.collection = this;
                    var i = new this.model(e, t);
                    return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
                }, _addReference: function (e, t) {
                    this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
                }, _removeReference: function (e, t) {
                    this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                }, _onModelEvent: function (e, t, n, i) {
                    ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
                }
            });
            var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
            n.each(b, function (e) {
                f.prototype[e] = function () {
                    var t = s.call(arguments);
                    return t.unshift(this.models), n[e].apply(n, t)
                }
            });
            var y = ["groupBy", "countBy", "sortBy", "indexBy"];
            n.each(y, function (e) {
                f.prototype[e] = function (t, i) {
                    var o = n.isFunction(t) ? t : function (e) {
                        return e.get(t)
                    };
                    return n[e](this.models, o, i)
                }
            });
            var w = t.View = function (e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            }, x = /^(\S+)\s*(.*)$/, _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(w.prototype, c, {
                tagName: "div", $: function (e) {
                    return this.$el.find(e)
                }, initialize: function () {
                }, render: function () {
                    return this
                }, remove: function () {
                    return this.$el.remove(), this.stopListening(), this
                }, setElement: function (e, n) {
                    return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
                }, delegateEvents: function (e) {
                    if (!e && !(e = n.result(this, "events")))return this;
                    this.undelegateEvents();
                    for (var t in e) {
                        var i = e[t];
                        if (n.isFunction(i) || (i = this[e[t]]), i) {
                            var o = t.match(x), r = o[1], a = o[2];
                            i = n.bind(i, this), r += ".delegateEvents" + this.cid, "" === a ? this.$el.on(r, i) : this.$el.on(r, a, i)
                        }
                    }
                    return this
                }, undelegateEvents: function () {
                    return this.$el.off(".delegateEvents" + this.cid), this
                }, _ensureElement: function () {
                    if (this.el)this.setElement(n.result(this, "el"), !1); else {
                        var e = n.extend({}, n.result(this, "attributes"));
                        this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                        var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                        this.setElement(i, !1)
                    }
                }
            }), t.sync = function (e, i, o) {
                var a = C[e];
                n.defaults(o || (o = {}), {emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON});
                var s = {type: a, dataType: "json"};
                if (o.url || (s.url = n.result(i, "url") || R()), null != o.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = r.stringify(o.attrs || i.toJSON(o))), o.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {model: s.data} : {}), o.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
                    s.type = "POST", o.emulateJSON && (s.data._method = a);
                    var c = o.beforeSend;
                    o.beforeSend = function (e) {
                        return e.setRequestHeader("X-HTTP-Method-Override", a), c ? c.apply(this, arguments) : void 0
                    }
                }
                "GET" === s.type || o.emulateJSON || (s.processData = !1), "PATCH" === s.type && k && (s.xhr = function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var l = o.xhr = t.ajax(n.extend(s, o));
                return i.trigger("request", i, l, o), l
            };
            var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), C = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            t.ajax = function () {
                return t.$.ajax.apply(t.$, arguments)
            };
            var A = t.Router = function (e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            }, T = /\((.*?)\)/g, S = /(\(\?)?:\w+/g, j = /\*\w+/g, E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            n.extend(A.prototype, c, {
                initialize: function () {
                }, route: function (e, i, o) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (o = i, i = ""), o || (o = this[i]);
                    var r = this;
                    return t.history.route(e, function (n) {
                        var a = r._extractParameters(e, n);
                        r.execute(o, a), r.trigger.apply(r, ["route:" + i].concat(a)), r.trigger("route", i, a), t.history.trigger("route", r, i, a)
                    }), this
                }, execute: function (e, t) {
                    e && e.apply(this, t)
                }, navigate: function (e, n) {
                    return t.history.navigate(e, n), this
                }, _bindRoutes: function () {
                    if (this.routes) {
                        this.routes = n.result(this, "routes");
                        for (var e, t = n.keys(this.routes); null != (e = t.pop());)this.route(e, this.routes[e])
                    }
                }, _routeToRegExp: function (e) {
                    return e = e.replace(E, "\\$&").replace(T, "(?:$1)?").replace(S, function (e, t) {
                        return t ? e : "([^/?]+)"
                    }).replace(j, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                }, _extractParameters: function (e, t) {
                    var i = e.exec(t).slice(1);
                    return n.map(i, function (e, t) {
                        return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                    })
                }
            });
            var z = t.History = function () {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            }, N = /^[#\/]|\s+$/g, I = /^\/+|\/+$/g, q = /msie [\w.]+/, P = /\/$/, M = /#.*$/;
            z.started = !1, n.extend(z.prototype, c, {
                interval: 50, atRoot: function () {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                }, getHash: function (e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                }, getFragment: function (e, t) {
                    if (null == e)if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(P, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                    return e.replace(N, "")
                }, start: function (e) {
                    if (z.started)throw new Error("Backbone.history has already been started");
                    z.started = !0, this.options = n.extend({root: "/"}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var i = this.getFragment(), o = document.documentMode, r = q.exec(navigator.userAgent.toLowerCase()) && (!o || 7 >= o);
                    if (this.root = ("/" + this.root + "/").replace(I, "/"), r && this._wantsHashChange) {
                        var a = t.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                    }
                    this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                    var s = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot())return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                        this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(N, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    return this.options.silent ? void 0 : this.loadUrl()
                }, stop: function () {
                    t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), z.started = !1
                }, route: function (e, t) {
                    this.handlers.unshift({route: e, callback: t})
                }, checkUrl: function (e) {
                    var t = this.getFragment();
                    return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
                }, loadUrl: function (e) {
                    return e = this.fragment = this.getFragment(e), n.any(this.handlers, function (t) {
                        return t.route.test(e) ? (t.callback(e), !0) : void 0
                    })
                }, navigate: function (e, t) {
                    if (!z.started)return !1;
                    t && t !== !0 || (t = {trigger: !!t});
                    var n = this.root + (e = this.getFragment(e || ""));
                    if (e = e.replace(M, ""), this.fragment !== e) {
                        if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState)this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                            if (!this._wantsHashChange)return this.location.assign(n);
                            this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                        }
                        return t.trigger ? this.loadUrl(e) : void 0
                    }
                }, _updateHash: function (e, t, n) {
                    if (n) {
                        var i = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(i + "#" + t)
                    } else e.hash = "#" + t
                }
            }), t.history = new z;
            var L = function (e, t) {
                var i, o = this;
                i = e && n.has(e, "constructor") ? e.constructor : function () {
                    return o.apply(this, arguments)
                }, n.extend(i, o, t);
                var r = function () {
                    this.constructor = i
                };
                return r.prototype = o.prototype, i.prototype = new r, e && n.extend(i.prototype, e), i.__super__ = o.prototype, i
            };
            p.extend = f.extend = A.extend = w.extend = z.extend = L;
            var R = function () {
                throw new Error('A "url" property or function must be specified')
            }, U = function (e, t) {
                var n = t.error;
                t.error = function (i) {
                    n && n(e, i, t), e.trigger("error", e, i, t)
                }
            };
            return t
        })
    }).call(t, n(94))
}, function (e, t, n) {
    "use strict";
    function i(e, t) {
        return k.reduce(t.split("."), function (e, t) {
            return k.isObject(e) ? e[t] : void 0
        }, e)
    }

    function o(e) {
        var t = i(e, "app.name");
        return t.indexOf(/team/gi) < 0 && A.isLocaleEnglish() ? t + " Team" : t
    }

    function r(e) {
        return T.isEnabled("v3_email_attribute") ? i(e, "user.anonymous") : void 0 === i(e, "user_id") && void 0 === i(e, "email")
    }

    function a(e) {
        return k.chain(e).keys().reject(function (t) {
            return (k.isArray(e[t]) || k.isObject(e[t]) || k.contains(E, t)) && !k.contains(z, t)
        }).value()
    }

    function s(e) {
        return k.pick(e, a(e))
    }

    function c(e) {
        var t = i(e, "widget.activator");
        if (!k.include(j, t))return t
    }

    function l(e) {
        return r(e) ? i(e, "modules.messages.features.inbound_lead_messaging") === !0 : i(e, "modules.messages.features.inbound_messages") === !0
    }

    function m(e) {
        return i(e, "modules.messages.features.outbound_messages") !== !1
    }

    function u(e) {
        return i(e, "modules.messages.features.server_side_interbot") !== !1
    }

    function d(e) {
        return !k.isEmpty(i(e, "user.notification_permissions"))
    }

    function p(e) {
        return i(e, "modules.messages.features.video_hovercard") !== !1
    }

    function h(e) {
        return i(e, "modules.messages.features.disable_hovercard") !== !1
    }

    function f(e, t) {
        var n = i(e, "disable_modules");
        return void 0 !== n && k.contains(n, t)
    }

    function g(e) {
        if (f(e, "messages"))return !1;
        var t = i(e, "widget.activator"), n = i(e, "modules.messages.use_activator");
        return void 0 === n ? "#IntercomDefaultWidget" === t : n === !0 && ("#IntercomDefaultWidget" === t || 0 === _(t).length) && (l(e) || m(e))
    }

    function v(e) {
        return i(e, "modules.messages.features.rtm") === !0
    }

    function b(e) {
        var t = i(e, "modules.rtm");
        if (!k.isEmpty(t))return t
    }

    function y(e) {
        var t = i(e, "app.last_active");
        if (k.isNumber(t))return 1e3 * t
    }

    function w(e) {
        !k.isUndefined(e) && k.isUndefined(e.user_id) && k.isEmpty(e.email) && (S = !0)
    }

    function x(e) {
        this.settings = k.clone(e || {}), w(e)
    }

    var _ = n(311), k = n(95), C = n(241), A = n(240), T = n(314), S = !1, j = ["#IntercomDefaultWidget", "body"], E = ["app_id", "user_id", "email", "user_hash", "modules", "disable_modules", "widget", "inert", "fake_message_response", "increments", "anonymous_session", "is_anonymous_install", "total_unread_count", "unread_dismissed_conversation_ids", "article_id", "session_duration"], z = ["custom_data", "company", "companies"];
    x.prototype = {
        get: function (e) {
            switch (e) {
                case"app.id":
                    return i(this.settings, "app_id");
                case"app.name":
                    return o(this.settings);
                case"app.locale":
                    return i(this.settings, "app.locale");
                case"app.branding-enabled":
                    return i(this.settings, "app.show_powered_by");
                case"app.color":
                    return i(this.settings, "modules.messages.colors.base");
                case"app.message":
                    return i(this.settings, "app.message");
                case"app.inbound-messaging-enabled":
                    return l(this.settings);
                case"app.outbound-messaging-enabled":
                    return m(this.settings);
                case"app.server-side-interbot":
                    return u(this.settings);
                case"app.browser-notifications":
                    return d(this.settings);
                case"app.video-hovercard":
                    return p(this.settings);
                case"app.disable_hovercard":
                    return h(this.settings);
                case"app.messaging-disabled":
                    return f(this.settings, "messages");
                case"app.rtm-enabled":
                    return v(this.settings);
                case"app.rtm-settings":
                    return b(this.settings);
                case"app.auto-response":
                    return i(this.settings, "app.auto_response");
                case"app.audio-enabled":
                    return i(this.settings, "app.audio_enabled");
                case"app.active-admins":
                    return i(this.settings, "app.active_admins");
                case"app.feature-flags":
                    return i(this.settings, "app.feature_flags") || [];
                case"app.session-duration":
                    return i(this.settings, "session_duration");
                case"user.id":
                    return i(this.settings, "user_id") || i(this.settings, "user_data.user_id");
                case"user.intercom-id":
                    return i(this.settings, "user.id");
                case"user.email":
                    return i(this.settings, "email") || i(this.settings, "user_data.email") || i(this.settings, "user.email");
                case"user.hash":
                    return i(this.settings, "user_hash") || i(this.settings, "user_data.user_hash");
                case"user.anonymous":
                    return r(this.settings);
                case"user.anonymous-id":
                    return i(this.settings, "user.anonymous_id");
                case"user.anonymous-email":
                    return i(this.settings, "user.anonymous_email");
                case"user.anonymous-session":
                    return i(this.settings, "anonymous_session");
                case"user.has-conversations":
                    return i(this.settings, "user.has_conversations");
                case"user.locale":
                    return i(this.settings, "user.locale");
                case"user.role":
                    return i(this.settings, "user.role");
                case"user.notification-permissions":
                    return i(this.settings, "user.notification_permissions");
                case"user.chrome-notification-permission":
                    return i(this.settings, "user.notification_permissions.chrome");
                case"user.firefox-notification-permission":
                    return i(this.settings, "user.notification_permissions.firefox");
                case"launcher.selector":
                    return c(this.settings);
                case"launcher.enabled":
                    return g(this.settings);
                case"increments":
                    return i(this.settings, "increments");
                case"is-anonymous-install":
                    return S;
                case"team.last-active":
                    return y(this.settings);
                case"rawAppName":
                    return i(this.settings, "app.name");
                case"article-id":
                    return i(this.settings, "article_id")
            }
        }, has: function (e) {
            return void 0 !== this.get(e)
        }, isValid: function () {
            return this.has("app.id")
        }, update: function (e) {
            k.isObject(e) ? _.extend(!0, this.settings, e) : C.error("Unable to update settings")
        }, getCustomAttributes: function () {
            return s(this.settings)
        }, reset: function () {
            this.settings = {}
        }, getAndClear: function (e) {
            var t = this.get(e);
            return delete this.settings[e], t
        }
    }, e.exports = x
}, function (e, t, n) {
    "use strict";
    var i = n(95);
    e.exports = {
        features: {
            "spa-throttling": ["tx2p130c", "zuahrl6b", "zv1pyb0s", "w2knrl3f", "c5ea3ec6243c3a8164fb702a95a3e61ca193a2cc", "m707r5ky", "fbx44s81", "xn72f8jb", "xplyivn5", "b0catj9i", "s4mb41ak", "vcf876kt", "dtpf4lth", "ndnhud6k", "yi2zrj0l", "y3dmixbx", "jvjwxo89", "qhqvciu7", "lj5p6xy2", "j4pw7jt0", "ys5tnsux", "b1ey3xy0", "l49xfi10", "rsp5hwnh", "gzkpu5io", "k6700fpa", "rf5dnsqt", "ev9h4vde", "ux7f0ki6", "wxr73cw3", "muqo3s0l", "dn8sjuca", "agueobs1", "zi0aqb98", "b4hlb1c7", "aly1hhty", "e208u8mh", "a2xjsdcg", "zxrz5p3k", "zukujs7a", "tudn7o48", "qtiyhxu6", "dh9cpl6i", "boh220q6", "etjy0xwc", "zlcelrki", "evn0mavz", "clevne0f", "b74ytsqz", "f0t29n6n", "d00729pf"],
            v3_email_attribute: ["3qmk5gyg"],
            "new-app-profile": ["p7okig4c", "g4al49yx", "xhgavvmo", "azrbiy2w", "w00iyxgq", "itt4ldvv", "jv6djq7z", "tzw0nz4m", "cimn05rh", "ouy76zgt", "dhoyq5m0", "oman4jb8", "nfpgbk98", "b9019ybs", "nr67ch0b", "w489x7li", "f8auli04", "zqmkb3d3", "cbgv4xmu", "xioi9mx8", "zso0sn3h", "efz4xygm", "g4q67e44", "htpnmno3", "te80kahj", "dl0h636w", "rsqban9d", "q4l73aqi", "z5qgf72r", "be8jp56s", "wbtm3wdn", "nwq82t5x", "pvip2xdj", "kkuhnhlh", "ge5y89tz", "d78r4jcs", "lol2v70e", "cfcr9xhz", "yafbwpmd", "jxzh1hcd", "pemgqfm7", "i4slz4oa", "ov4b8fwj", "q5lqvpjm", "ce7tph4h", "gzijg149", "j93tgnrb", "t7vhtrdv", "fk9la3h5", "g400n3to", "urjq42uz", "nsayjlto"],
            "acquire-email-collector": ["vghokcf3", "xnmxp5mp", "38qrarxl", "pityteq", "fv5bjro0", "cgy7xh0n", "ed67d5193e6273c06377b3a2e0cd4067b213b0fb", "iizsos98", "zak4ljig", "849bd85eb56fc61d6b680198c195896561553352", "7e1923726a0a7ad8c26c6003ef417adfdcffdb66", "a643e9f6eaa09efa818060a6f3e9dc007dd0cee1", "010e8290a576c3f6b2a68ed440d45e223a0cd7c1", "59b77c2b7d7f21121ce46298dbae61507f569090", "fd3mix90", "h9m74za6", "ueg3b4n6", "k7ajgg84", "ps37lwkr", "hmzr3pqd", "v31zx7s5", "dib24pab", "mok6qhit", "vqr987mo", "lkfwwyuq", "xleil7cl", "zos6jh34", "jay80del", "of3r2hqh", "pe2mwzt0", "wquoocn9", "xbx4isqs", "akga7vli", "ujwvxju9", "qlhgpn60", "ofwse7uk", "cl6gfggz", "qvj25o92", "z05i1gsg", "uscoyrvu", "dn5rqp84", "tq9oor11", "j01li4r4", "h3shoi0u", "iway2utu", "dc76u252", "vb5vxheh", "xp191eoq", "tntgd7o6", "k688himr", "ueg2aytx", "qoogyabx", "jvlioeci", "od5xos04", "nsfqr5d9", "uhsb9fri", "ks0yi7c0", "yuqp2g56", "npepkg4j", "vu2ry3p0", "sm03g4lx", "olnhj68a", "xv9k3999", "flvih2fm", "bmrxjl08", "okhrlsrc", "yxmgig9u", "spiqa93x", "zlhuzyw9", "ki9ogmun", "olng6n3i", "kopua6hn", "euqpwyr1", "o87jg7gy", "schek1uc", "vo2p0e6s", "r4kz30i0", "e77157qf", "cg38r1rc", "n74o6j3s", "r7axa0yj", "j5enp5iw", "z9hffqcq", "y67k18x2", "j81b0vla", "y96a1ymt", "rmngvxjz", "dlys4jxk", "tqh4ll23", "dqr5r4b5", "z0m4wpo2", "g1gh34g6", "o90rv2ee", "oe8iyiuf", "xvihvlz3", "bq40w5ql", "nvfbcvjk", "rjyaffkr", "i11e88km", "agfoktdw", "kvu24qht", "r8jpq420", "tldb7zos", "o9b8wqwg", "kbf8725q", "hktk4blf", "edmgt8os", "cgfc6jcc", "lsgt2jni", "udmhmgc1", "qji82zks", "m2z6f5sj", "eivqwgdt", "unugjzzf", "dinhpawr", "h8s0ta85", "dva79x3x", "ha8an4mm", "tq5ghpn1", "yl2ee60p", "m0tvgppo", "qopqc7wv", "n97ewbkp", "wshrp11e", "edb3nc6n", "pjgcwank", "bgohnd5n", "a49bg9cx", "e2rs54rm", "g97oxb0y", "crsx6nv5", "b3ojslmo", "ly3rr2kx", "m2xtn92b", "p4bgdeoa", "swxd0yxy", "ows083pq", "qfef4by7", "c3774qkr", "v6ziadx4", "ow8rofjl", "p1oz6m1q", "z55r4ot0", "pzetm2lz", "qdkrixbi", "di0genft", "o8r3rcrj", "eeas7to5", "jsoatw8l", "amluenuv", "a2mndvrf", "lmq5tz1k", "yjxbxgeb", "enkvzieu", "tisr8cul", "sk59j50y", "qcx4vjv2", "f3x2envs", "vjvuevn6", "kfy156ky", "co569rqb", "fg01tj1b", "un6x6ieq", "u3oa0lqx", "io9vyxx5", "p9b35fy2", "txbw3872", "dt3oqf7t", "rfoxs546", "jlmi3u3r", "dzbvrrvv", "qfc95cq1", "v1kgbarr", "b02yxax3", "bhidkq35", "oa2mceij", "gni4s59r", "refan8ue", "dijjai9j", "iibbyr7z", "spp3teth", "vcsac19p", "uwzh1imi", "h805ocdy", "aq2ynmw5", "j2ms6a51", "glcee418", "p4rymtzv", "x9pf9xyb", "i4ks1o5w", "iknjbayl", "pz3wmxdv", "gwbpci68", "h65gv81o", "d1pwa3dh", "buboqqmt", "gctireb4", "cyu9q8tj", "wg24rjhh", "b7krncdp", "y33urqm6", "labman8t", "le1pj4b8", "i189ljp1", "vsqflmyw", "xlit5u9c", "zksovb7x", "p12er0ht", "p335z40k", "pgds2zxc", "ywpnln8n", "r92i8dip", "pvirld59", "yblkvd1l", "uzrxcnhj", "nd4x6li9", "op4q2vcp", "diketlny", "mljteq92", "fe4z92ex", "p3zlyhl4", "gt0isxw4", "t7tsb75o", "z14gcw9t", "ulj0ci4t", "eu3o09y9", "gfljfdjn", "ljyng0uo", "q43pr7uo", "i5iud32d", "olx3qem6", "slcmpcqk", "gbtbg531", "glcuquh0", "z6463nfi", "xoffb97j", "p10gkqkm", "obbnk78i", "nojy3wdx"]
        }, initialize: function (e) {
            this.settings = e
        }, isEnabled: function (e) {
            return this.settings ? i.include(this.features[e] || {}, this.settings.get("app.id")) || i.include(this.settings.get("app.feature-flags"), e) : !1
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return I.isInteger(e) && e >= R
    }

    function o(e) {
        var t = e.get("app.session-duration");
        return i(t) ? t : P
    }

    function r(e) {
        return "intercom-session-" + e.get("app.id")
    }

    function a(e, t, n, i) {
        this.initialized = !1, this.ready = s.Deferred(), this.client = e, this.nexusClient = t, this.messageConditionsMatcher = n, this.refreshConversations = c.bind(this.refreshConversations, this), this.settings = i, this.throttledClient = new A(this.client), this.poller = new C(this.client), this.conversations = new x, this.app = new _, s(document).keyup(c.bind(this.onKeyUp, this))
    }

    n(316);
    var s = n(311), c = n(95), l = n(312), m = n(332), u = n(325), d = n(333), p = n(240), h = n(241), f = n(338), g = n(339), v = n(342), b = n(343), y = n(346), w = n(347), x = n(331), _ = n(348), k = n(349), C = n(519), A = n(520), T = n(521), S = n(522), j = n(314), E = n(317), z = n(413), N = n(416), I = n(523), q = n(327), P = N.daysToMilliseconds(7), M = N.daysToMilliseconds(7), L = N.yearsToMilliseconds(10), R = N.minutesToMilliseconds(5), U = "intercom-id";
    c.extend(a.prototype, l.Events, {
        initialize: function (e) {
            if (!this.isInitialized()) {
                h.info("intercom - Initializing"), this.settings.update(e || {});
                var t = f.read(U);
                void 0 !== t && this.settings.update({user: {anonymous_id: t}});
                var n = f.read(r(this.settings));
                if (j.isEnabled("v3_email_attribute") ? void 0 !== n && this.settings.get("is-anonymous-install") && this.settings.update({anonymous_session: n}) : void 0 !== n && this.settings.get("user.anonymous") && this.settings.update({anonymous_session: n}), this.recordUniqeVisitorMetricIfRequired(), !this.settings.isValid())return void h.error("intercom - Invalid settings");
                this.nexusClient.addListener("NewComment", c.bind(function (e) {
                    this.trigger("new-comment", e.eventData.conversationId)
                }, this.client)), this.nexusClient.addListener("UserContentSeenByAdmin", c.bind(function (e) {
                    this.trigger("user-content-seen-by-admin", e.eventData.conversationId)
                }, this.client)), this.nexusClient.addListener("NotificationPermissionChange", c.bind(function (e) {
                    this.trigger("user-notification-permissions-change", e.eventData)
                }, this.client)), this.view = new k({
                    client: this.client,
                    nexusClient: this.nexusClient,
                    settings: this.settings,
                    collection: this.conversations,
                    app: this.app,
                    interbotConditionMatchers: this.interbotConditionMatchers
                }), this.listenTo(this.client, "ping", this.onPingResponse), this.listenTo(this.client, "new-unread-conversation", this.onUnreadConversationAdded), this.listenTo(this.client, "new-comment", this.onNewComment), this.listenTo(this.client, "user-content-seen-by-admin", this.onUserContentSeenByAdmin), this.listenTo(v, "click:open", this.onLauncherClicked), this.listenTo(v, "click:conversations", this.showConversations), this.listenTo(v, "click:conversation", this.showConversation), this.listenTo(v, "click:new-conversation", this.showNewConversation), this.listenTo(v, "click:new-conversation-no-animation", this.showNewConversationWithoutAnimation), this.listenTo(v, "click:new-conversation-with-admin", this.showNewConversationWithAdmin), this.listenTo(v, "click:close", this.hide), this.listenTo(v, "click:minimize", this.minimize), this.listenTo(this.conversations, "add", this.startConversationConditionMatcher), this.listenTo(this.conversations, "change", this.updateConversationConditionMatchers), T.runAll(), g.run(), this.enableCustomLauncher(), this.throttledClient.reset(), this.poller.start(), m.start(), y.initialize(this.nexusClient), this.initialized = !0, this.createOrUpdateUser()
            }
        }, deinitialize: function () {
            this.isInitialized() && (h.info("intercom - Deinitializing"), this.ready.reject(), f.clear(r(this.settings), "all", "/"), f.clear(U, "all", "/"), this.settings.reset(), this.conversations.reset(), this.stopListening(), this.disableCustomLauncher(), this.poller.stop(), m.stop(), w.clear(), this.remove(), this.initialized = !1, this.ready = s.Deferred())
        }, createOrUpdateUser: function (e) {
            return this.isInitialized() ? (this.settings.update(e || {}), this.settings.isValid() ? void this.throttledClient.throttledCreateOrUpdateUser() : void h.error("intercom - Invalid settings")) : void 0
        }, show: function (e) {
            this.showWhenReady(function () {
                this.view.isMinimized() ? this.maximize(e) : void 0 !== this.settings.get("article-id") ? this.showArticleConversation() : this.view.show(e)
            })
        }, showConversations: function () {
            this.showWhenReady(function () {
                this.view.showConversations()
            })
        }, showConversation: function (e) {
            this.showWhenReady(function () {
                this.view.showConversation(e)
            })
        }, showNewConversation: function (e, t, n) {
            this.showWhenReady(function () {
                void 0 === t && (t = !0), this.view.isMinimized() && this.maximize(), this.view.showNewConversation(e, t, n)
            })
        }, showNewConversationWithAdmin: function (e) {
            this.showNewConversation(null, !1, e)
        }, showArticleConversation: function () {
            var e = this.settings.get("article-id");
            this.client.getArticleConversation(e).then(c.bind(function (t, n, i) {
                204 === i.status ? this.view.showNewConversation(null, !1, null) : this.view.showConversation(new E(t)), this.trigger("showArticleConversation", t, e)
            }, this))
        }, clearState: function () {
            w.clear()
        }, reactToArticle: function (e) {
            this.whenReady(function () {
                this.client.reactToArticle(this.settings.get("article-id"), e)
            })
        }, showNewConversationWithoutAnimation: function (e) {
            this.showNewConversation(e, !1)
        }, autoOpenConversation: function (e) {
            this.showWhenReady(function () {
                this.view.autoOpenConversation(e)
            })
        }, hide: function () {
            this.whenReady(function () {
                var e = this.isActive();
                this.view.hide(), e && !this.isActive() && this.trigger("hide")
            })
        }, minimize: function () {
            this.whenReady(function () {
                this.view.minimize()
            })
        }, maximize: function (e) {
            this.whenReady(function () {
                this.view.maximize(e)
            })
        }, add: function (e) {
            this.whenReady(function () {
                s("body").append(this.view.render(e).$el), this.trigger("add")
            })
        }, remove: function () {
            this.whenReady(function () {
                this.view.remove(), this.trigger("remove")
            })
        }, createEvent: function (e, t) {
            this.whenReady(function () {
                this.client.createEvent(e, t)
            })
        }, sendAnalyticEvent: function (e, t) {
            e && this.whenReady(function () {
                t = c.extend({
                    anonymous_id: this.settings.get("user.anonymous-id"),
                    end_user_id: this.settings.get("user.intercom-id"),
                    user_role: this.settings.get("user.role")
                }, t);
                var n = this.settings.get("app.id"), i = {
                    metrics: [{
                        name: e.toString(),
                        id: q.generateUUID(),
                        app_id_code: n,
                        created_at: Math.round(u.now() / 1e3),
                        metadata: t
                    }], app_id: n
                };
                this.client.sendAnalyticEvent(i)
            })
        }, enableCustomLauncher: function () {
            var e = this.settings.get("launcher.selector");
            return c.isEmpty(e) ? !1 : (this.disableCustomLauncher(), s("body").on("click.intercom-launcher", e, c.bind(this.onCustomLauncherClicked, this)), h.info("intercom – Enabled custom launcher: " + e), !0)
        }, disableCustomLauncher: function () {
            s("body").off("click.intercom-launcher")
        }, isActive: function () {
            return this.isInitialized() && this.view.isActive()
        }, isInitialized: function () {
            return this.initialized
        }, whenReady: function (e) {
            return s.when(this.ready).then(c.bind(e, this))
        }, showWhenReady: function (e) {
            this.whenReady(function () {
                var t = this.isActive();
                c.bind(e, this)(), t || this.trigger("show")
            })
        }, windowIsChild: function () {
            return null !== window.opener
        }, onLauncherClicked: function (e) {
            this.show(e), this.trigger("click")
        }, onCustomLauncherClicked: function (e) {
            return e.preventDefault(), this.onLauncherClicked(), !1
        }, onPingResponse: function (e) {
            if (e.client_messages && e.client_messages.length > 0 && this.messageConditionsMatcher.start(e.client_messages), S.hasInstallationQueryParameter())return S.showSuccessOverlay(), this.settings.update(S.fakePingResponse), void this.onPingResponseBoot(e);
            S.listenForInstallationStartMessage(c.bind(function () {
                S.showSuccessOverlay(), this.settings.update(S.fakePingResponse), this.onPingResponseBoot(e)
            }, this));
            var t = function () {
                return e.type && "error.list" === e.type ? void h.error("intercom - createOrUpdateUser failed") : (this.settings.update(e), void this.onPingResponseBoot(e))
            };
            t = c.bind(t, this), S.isLegacyInstallationMode(e) ? setTimeout(t, 1e3) : t()
        }, onPingResponseBoot: function (e) {
            "resolved" !== this.ready.state() && this.onFirstPingResponse(e);
            var t = this.settings.get("user.anonymous-id");
            void 0 !== t && f.write(U, t, "all", "/", new Date(u.now() + L));
            var n = this.settings.get("user.anonymous-session");
            void 0 === n || this.settings.get("user.anonymous") || f.write(r(this.settings), n, "all", "/", new Date(u.now() + o(this.settings))), e.app && this.setAppAttributes(e.app), this.nexusClient.initialise(), this.trigger("ping")
        }, onFirstPingResponse: function (e) {
            var t = this.settings.get("user.locale");
            p.isSupportedLocale(t) ? p.setLocale(t) : h.error("intercom - Unknown locale '" + t + "'"), this.settings.get("app.audio-enabled") && d.enable(), this.settings.get("app.rtm-enabled") && b.enable();
            var n = e && e.unread_conversation_ids && e.unread_conversation_ids.length > 0;
            this.add(n), this.ready.resolve(), h.info("intercom - Initialized")
        }, setAppAttributes: function (e) {
            e.last_active && this.app.set({last_active: e.last_active}), e.proactive_response_time && this.app.set({proactive_response_time: e.proactive_response_time})
        }, refreshConversations: function (e) {
            this.view.refreshActiveConversation(e) || this.client.createOrUpdateUser()
        }, onUserContentSeenByAdmin: function (e) {
            this.refreshConversations(e)
        }, onNewComment: function (e) {
            this.refreshConversations(e)
        }, recordUniqeVisitorMetricIfRequired: function () {
            if (this.settings.get("user.anonymous")) {
                var e = "intercom-visitor-semaphore-" + this.settings.get("app.id"), t = f.read(e);
                void 0 === t && (f.write(e, 1, "all", "/", new Date(u.now() + M)), z.trackSignedOutEvent("uniqueSiteVisitor"))
            }
        }, onUnreadConversationAdded: function (e) {
            if (!this.view.refreshActiveConversation(e.id)) {
                var t = this.conversations.add(e, {merge: !0});
                !this.isActive() && t.autoOpen() && this.autoOpenConversation(t)
            }
        }, updateConversationConditionMatchers: function () {
            c.each(this.conversations.models, function (e) {
                e.hasChanged("interbot_client_conditions") && e.startInterbotConditionsMatcher(this.client)
            }, this)
        }, startConversationConditionMatcher: function (e) {
            e.startInterbotConditionsMatcher(this.client)
        }, onKeyUp: function (e) {
            0 === s(".intercom-image-viewer").length && this.isActive() && !this.view.isMinimized() && 27 === e.keyCode && this.hide()
        }
    }), e.exports = a
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(317), r = n(319), a = n(322), s = n(330), c = n(331);
    e.exports = function (e, t) {
        return function (n, l, m) {
            if (l.constructor === o && "read" === n)return e.getConversation(l.id).then(m.success).fail(m.error);
            if (l.constructor === o && "update" === n)return e.markConversationAsRead(l.toJSON()).then(m.success).fail(m.error);
            if (l.constructor === o && "create" === n)return e.createConversation(l.toJSON()).then(i.bind(t.syncCreateConversation, t)).then(m.success).fail(m.error);
            if (l.constructor === c && "read" === n)return e.getConversations({page: l.pages}).then(m.success).fail(m.error);
            if (l.constructor === r && "create" === n)return e.createComment(l.toJSON()).then(i.bind(t.syncCreateComment, t)).then(m.success).fail(m.error);
            if (l.constructor === a && "create" === n)return e.createUpload(l.toJSON()).then(m.success).fail(m.error);
            if (l.constructor === a && "update" === n)return e.updateUpload(l.toJSON()).then(m.success).fail(m.error);
            if (l.constructor === s) {
                var u = t.getMetrics();
                return t.resetMetrics(), e.createOrUpdateUser(u).then(m.success).fail(m.error)
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return e && e.byUser()
    }

    var o = n(95), r = n(312), a = n(318), s = n(321), c = n(325), l = n(320), m = n(328), u = n(94), d = n(329), p = 1407334860, h = r.Model.extend({
        initialize: function () {
            this.parts = new a, this.on("change:conversation_message", this.onMessageChanged), this.on("change:conversation_parts", this.onPartsChanged), this.parts.add(this.get("conversation_message")), this.has("conversation_parts") && this.parts.add(this.get("conversation_parts"), {parse: !0})
        }, markAsRead: function () {
            this.isRead() || this.save({read: !0})
        }, markAsUnread: function () {
            this.set({read: !1})
        }, isRead: function () {
            return this.get("read")
        }, isUnread: function () {
            return !this.get("read")
        }, isChat: function () {
            return this.getMessage().isChat()
        }, isAnnouncement: function () {
            return this.getMessage().isAnnouncement()
        }, isSmallAnnouncement: function () {
            return this.getMessage().isSmallAnnouncement()
        }, doesNotMatchCurrentUrl: function () {
            return this.get("matches_url") === !1
        }, matchesCurrentUrl: function () {
            return !this.doesNotMatchCurrentUrl()
        }, autoOpen: function () {
            return this.createdBeforeInAppsV2() ? !1 : this.getMessage().autoOpen() && 1 === this.partsCount() && this.isUnread()
        }, replyDelayBodyBlockList: function () {
            return o.isEmpty(this.get("reply_delay_json_blocks")) ? [] : u.parse(this.get("reply_delay_json_blocks"))
        }, hasPlaceholder: function () {
            return !o.isEmpty(this.getPlaceholder())
        }, getPlaceholder: function () {
            return this.get("reply_area_placeholder")
        }, lastAdminName: function () {
            var e = this.lastAdmin();
            if (e)return e.name
        }, lastAdminFirstName: function () {
            var e = this.lastAdminName();
            if (e) {
                var t = e.split(" ")[0];
                return t ? t : e
            }
        }, lastAdminAvatar: function (e, t) {
            if (e && this.parts.last().byInterbot())return "https://s3.amazonaws.com/static.intercomcdn.com/interbot/icon%402x.png";
            var n = this.lastAdmin() || this.findHumanAdmin();
            if (n)return m.getUrlForSize(n.avatar, t)
        }, lastAdminInitials: function () {
            var e = this.lastAdmin();
            if (e)return l.firstInitial(e.name)
        }, lastAdminActiveTimestamp: function () {
            var e = this.lastAdmin();
            if (e && e.last_active_at)return 1e3 * e.last_active_at
        }, findHumanAdmin: function () {
            return this.firstPartIsVisitorAutoMessage() ? this.parts.first().get("author") : void 0
        }, firstPartIsVisitorAutoMessage: function () {
            return this.parts.first() && this.parts.first().byAdmin() && this.parts.first().isChatAutoMessage()
        }, adminComments: function () {
            return o.reject(this.getComments(), i)
        }, hasOnlyInterbotAdminComments: function () {
            var e = this.adminComments();
            return e.length > 0 && o(e).every(function (e) {
                    return e.byInterbot()
                })
        }, hasAnyInterbotComments: function () {
            var e = this.adminComments();
            return o.any(e, function (e) {
                return e.byInterbot()
            })
        }, lastAdmin: function () {
            return this.get("last_participating_admin")
        }, updateLastAdminActiveTimestamp: function (e) {
            var t = this.lastAdmin();
            t && (t.last_active_at = e)
        }, hasAdminComment: function () {
            return o.any(this.getComments(), function (e) {
                return e.byAdmin() && !e.byInterbot()
            })
        }, hasUserPart: function () {
            return o.any(this.parts.toArray(), function (e) {
                return e.byUser()
            })
        }, hasUserComment: function () {
            return o.any(this.getComments(), i)
        }, preview: function () {
            return this.parts.lastNonLwrResponseBody() || ""
        }, previewText: function () {
            return this.preview().replace(/<br>/gi, " ").replace(/(<([^>]+)>)/gi, "")
        }, getMessage: function () {
            return this.parts.first()
        }, getComments: function () {
            return this.parts.rest(1)
        }, hasComments: function () {
            return this.parts.length > 1
        }, getLastComment: function () {
            return o.last(this.getComments())
        }, createdAt: function () {
            return c.timestampToDate(this.get("created_at"))
        }, updatedAt: function () {
            var e = this.parts.nonLwrResponses().last();
            return e.isMessage() ? this.createdAt() : e.updatedAt()
        }, partsCount: function () {
            return this.get("parts_count")
        }, onPartsChanged: function () {
            this.parts.set(this.get("conversation_parts"), {parse: !0, remove: !1})
        }, onMessageChanged: function () {
            var e = this.getMessage();
            e ? e.set(this.get("conversation_message")) : this.parts.add(this.get("conversation_message"))
        }, createdBeforeInAppsV2: function () {
            return this.get("created_at") < p
        }, updatedBeforeInAppsV2: function () {
            return this.get("updated_at") < p
        }, qualifiesForAutoResponse: function () {
            return this.getMessage().byUser() && !this.hasAdminComment()
        }, addPart: function (e) {
            this.parts.add(e), this.trigger("change", this)
        }, hasArticleMessage: function () {
            return !o.isUndefined(this.get("articleId")) || this.getMessage().isArticleCardMessage()
        }, startInterbotConditionsMatcher: function (e) {
            var t = this.get("interbotConditionsMatcher");
            if (!t) {
                var n = this._conditionsSatisfiedCallback(e);
                t = new d(n), this.set("interbotConditionsMatcher", t, {silent: !0})
            }
            t.start(this.get("interbot_client_conditions"))
        }, _conditionsSatisfiedCallback: function (e) {
            return o.bind(function (t) {
                e.conditionsSatisfied(this.id, t.id)
            }, this)
        }, setPreassignedAdmin: function (e) {
            this.set("preassignedAdmin", e)
        }, getPreassignedAdmin: function () {
            return this.get("preassignedAdmin")
        }, hasPreassignedAdmin: function () {
            return this.get("preassignedAdmin") && !this.lastAdmin()
        }, toJSON: function () {
            return {
                id: this.id,
                body: this.getMessage().get("body"),
                article_id: this.get("articleId"),
                upload_ids: this.getMessage().get("uploads") ? this.getMessage().get("uploads").pluck("id") : []
            }
        }
    });
    h.fromBodyAndUploads = function (e, t) {
        return new h({conversation_message: {body: o.escape(e), uploads: new s(t)}, read: !0})
    }, e.exports = h
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(319);
    e.exports = o.Collection.extend({
        model: r, comparator: function (e) {
            return e.createdAt()
        }, byAdmin: function () {
            return i(this.filter(function (e) {
                return e.byAdmin()
            }))
        }, byUser: function () {
            return i(this.filter(function (e) {
                return e.byUser()
            }))
        }, nonLwrResponses: function () {
            return i(this.reject(function (e) {
                return e.isLwrResponse()
            }))
        }, lastNonLwrResponseBlock: function () {
            return this.nonLwrResponses().last().get("blocks")
        }, lastNonLwrResponseBody: function () {
            return this.nonLwrResponses().last().body()
        }, parse: function (e) {
            return null !== e && void 0 !== e || (e = {}), e.conversation_parts
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(311), r = n(320), a = n(312), s = n(321), c = n(325), l = n(231), m = n(326), u = n(327), d = n(328), p = a.Model.extend({
        SEEN: "seen", UNSEEN: "unseen", initialize: function () {
            this.uploads = this.get("uploads") || new s(this.get("attachments") || []), this.set("client_assigned_uuid", u.generateUUID())
        }, isMessage: function () {
            return "conversation_message" === this.get("type")
        }, hasClientGeneratedUUID: function () {
            return this.has("client_assigned_uuid")
        }, byAdmin: function () {
            var e = this.get("author");
            return e ? e.is_admin : !1
        }, byInterbot: function () {
            var e = this.get("author");
            return e ? e.is_bot : !1
        }, isPending: function () {
            return this.get("pending")
        }, isSeenByAdmin: function () {
            return this.get("seen_by_admin") === this.SEEN
        }, shouldShowAdminSeenState: function () {
            return this.byUser() && (this.get("seen_by_admin") === this.SEEN || this.get("seen_by_admin") === this.UNSEEN)
        }, byUser: function () {
            return !this.byAdmin()
        }, _bodyText: function () {
            return o.trim(o("<div>").append(this.body()).text())
        }, isAsciiSticker: function () {
            return l.isSupportedAscii(this._bodyText())
        }, isUnicodeSticker: function () {
            return l.isSupportedUnicode(this._bodyText())
        }, isSticker: function () {
            return this.isAsciiSticker() || this.isUnicodeSticker()
        }, getStickerData: function () {
            var e;
            return e = this.isUnicodeSticker() ? this._bodyText() : this.isAsciiSticker() ? l.unicodeFromAscii(this._bodyText()) : "❓", {
                identifier: l.identifierFromUnicode(e),
                assetId: l.codepointIndexFromUnicode(e).toString(16).toLowerCase(),
                unicodeSticker: e
            }
        }, isChat: function () {
            return 0 === this.get("message_style")
        }, isAnnouncement: function () {
            return 1 === this.get("message_style")
        }, isSmallAnnouncement: function () {
            return 2 === this.get("message_style")
        }, isUpload: function () {
            return this.byUser() && i.isEmpty(this.get("body")) && this.uploads.length > 0
        }, isImageUpload: function () {
            return this.isUpload() && this.uploads.length === this.uploads.imageUploads().length
        }, bodyIsImage: function () {
            return !1
        }, isChatAutoMessage: function () {
            return this.isMessage() && !this.get("show_created_at") && !this.isArticleCardMessage()
        }, autoOpen: function () {
            return this.isAnnouncement() || this.isSmallAnnouncement()
        }, body: function () {
            return this.isUpload() ? "[Attachment]" : this.sanitize(this.get("body") || "")
        }, createdAt: function () {
            return c.timestampToDate(this.get("created_at"))
        }, adminAvatar: function (e) {
            return this.byAdmin() ? d.getUrlForSize(this.get("author").avatar, e) : void 0
        }, adminInitials: function () {
            return this.byAdmin() ? r.firstInitial(this.get("author").name) : void 0
        }, isLwrMessage: function () {
            return "text" !== this.get("reply_type") && this.get("lightweight_reply") && !this.isLwrResponse();
        }, isLwrResponse: function () {
            return "lightweight_reply_user_response" === this.get("part_type")
        }, getLwrType: function () {
            return this.get("lightweight_reply").type
        }, getLwrResponse: function () {
            return this.get("lightweight_reply").option
        }, updatedAt: function () {
            return c.timestampToDate(this.get("updated_at"))
        }, getAuthorFirstName: function () {
            var e = this.get("author");
            return e.first_name || e.name || e.email
        }, getAuthorEmail: function () {
            var e = this.get("author");
            return e.email
        }, getAuthorId: function () {
            var e = this.get("author");
            return e.id
        }, sanitize: function (e) {
            return e.replace(/(<script)/gi, i.escape("<script")).replace(/(<[\/]script>)/gi, i.escape("</script>"))
        }, renderedBody: function () {
            return this.shouldRenderBodyFromBlocks() ? m.renderBlocks(this.get("blocks")) : this.body()
        }, shouldRenderBodyFromBlocks: function () {
            return this.hasBlocks() && m.supportsBlockRendering(this.get("blocks")) && (this.isVideoReply() || this.isArticleCardMessage())
        }, hasBlocks: function () {
            var e = this.get("blocks");
            return !i.isUndefined(e) && !i.isNull(e)
        }, isVideoReply: function h() {
            var e = this.get("blocks"), h = e && i.find(e, function (e) {
                    return "videoReply" === e.type
                });
            return !!h
        }, isArticleCardMessage: function () {
            var e = this.get("blocks");
            return this.isMessage() && this.hasBlocks() && 1 === e.length && "articleCard" === e[0].type
        }, getURLForArticleCard: function () {
            return this.get("blocks")[0].url
        }, BLOCK_LONERS: ["articleCard"], connectedComponents: function () {
            var e = [], t = [];
            return i.each(this.get("blocks"), function (n) {
                i.contains(this.BLOCK_LONERS, n.type) ? (t.length > 0 && (e.push(t), t = []), e.push([n])) : t.push(n)
            }, this), t.length > 0 && e.push(t), e
        }, toJSON: function () {
            var e = {
                body: this.get("body"),
                reply_type: this.get("reply_type"),
                reply_option: this.get("reply_option"),
                conversation_id: this.get("conversation_id"),
                upload_ids: this.uploads.pluck("id"),
                client_assigned_uuid: this.get("client_assigned_uuid")
            };
            return this.byInterbot() && i.extend(e, {
                current_state: this.get("current_state"),
                state_group: this.get("state_group")
            }), e
        }
    });
    p.fromBodyAndUploads = function (e, t, n) {
        return new p({body: i.escape(e), conversation_id: n.id, uploads: new s(t)})
    }, e.exports = p
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95);
    e.exports = {
        firstInitial: function (e) {
            return e = i.trim(e), o.isEmpty(e) ? "?" : e[0]
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(322), r = n(95);
    e.exports = i.Collection.extend({
        model: o, initialize: function () {
            this.uploading = 0, this.on("upload:start", this.onUploadStart), this.on("upload:complete", this.onUploadComplete)
        }, pendingUploads: function () {
            return this.filter(function (e) {
                return r.isUndefined(e.url())
            })
        }, imageUploads: function () {
            return this.filter(function (e) {
                return e.isImage()
            })
        }, anyUploading: function () {
            return this.uploading > 0
        }, onUploadStart: function () {
            this.uploading++
        }, onUploadComplete: function () {
            this.uploading--
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(323), a = n(324), s = 264, c = 41943040, l = o.Model.extend({
        initialize: function () {
            this.file = this.get("file")
        }, name: function () {
            return this.get("file_name") || this.get("name")
        }, url: function () {
            return this.get("url") || this.get("public_url")
        }, size: function () {
            return this.get("file_size") || this.get("filesize") || 0
        }, isTooBig: function () {
            return this.size() > c
        }, content_type: function () {
            return this.get("content_type")
        }, upload: function () {
            return r(this)
        }, isImage: function () {
            return !!this.get("content_type").toLowerCase().match(/^image\//)
        }, imageData: function () {
            return this.get("imageData")
        }, hasDimensions: function () {
            return this.isImage() && i.isNumber(this.naturalWidth()) && i.isNumber(this.naturalHeight())
        }, naturalWidth: function () {
            return parseInt(this.get("width"), 10) || null
        }, naturalHeight: function () {
            return parseInt(this.get("height"), 10) || null
        }, scale: function () {
            return this.naturalWidth() > s ? this.naturalWidth() / s : 1
        }, width: function () {
            return parseInt(this.naturalWidth() / this.scale(), 10)
        }, height: function () {
            return parseInt(this.naturalHeight() / this.scale(), 10)
        }, parse: function (e) {
            var t = e.upload_url;
            return t && (e.id = parseInt(t.match(/\/(\d+)$/)[1], 10)), e
        }, toJSON: function () {
            return {
                id: this.id,
                original_filename: this.name(),
                size_in_bytes: this.size(),
                content_type: this.content_type(),
                width: this.naturalWidth(),
                height: this.naturalHeight()
            }
        }
    }), m = function (e) {
        e = e || "";
        var t = e.match(/[^\x00-\x7F]/);
        return (!e || a.features.safari() && t) && (e = "File" + (new Date).getTime()), e
    };
    l.fromFile = function (e) {
        return new l({file_name: m(e.name), file_size: e.size, content_type: e.type, file: e})
    }, e.exports = l
}, function (e, t, n) {
    "use strict";
    function i(e) {
        var t = a.Deferred(), n = new FileReader;
        return n.onload = s.bind(t.resolve, t, e), n.readAsDataURL(e.file), t
    }

    function o(e) {
        var t = a.Deferred();
        return e.save().then(s.bind(t.resolve, t, e)).fail(function () {
            e.trigger("upload:error"), t.reject(e)
        }), t
    }

    function r(e) {
        var t = a.Deferred(), n = new FormData;
        n.append("key", e.get("key")), n.append("acl", e.get("acl")), n.append("Content-Type", e.get("content_type")), n.append("AWSAccessKeyId", e.get("aws_access_key")), n.append("policy", e.get("policy")), n.append("signature", e.get("signature")), n.append("success_action_status", e.get("success_action_status")), n.append("file", e.file);
        var i = new XMLHttpRequest;
        return i.upload.addEventListener("progress", function (t) {
            t.lengthComputable && e.trigger("upload:progress", t.loaded, t.total)
        }, !1), i.addEventListener("error", function () {
            e.trigger("upload:error"), t.reject(e)
        }, !1), i.addEventListener("load", function () {
            e.trigger("upload:complete"), t.resolve(e)
        }, !1), i.addEventListener("abort", function () {
            e.trigger("upload:abort"), t.reject(e)
        }, !1), i.open("POST", e.get("upload_destination"), !0), i.send(n), t
    }

    var a = n(311), s = n(95);
    e.exports = function (e) {
        return e.trigger("upload:start"), i(e).then(o).then(r)
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        try {
            if (!(e in window))return !1;
            var t = window[e];
            return null === t ? !1 : (t.setItem("intercom.testStorage", "0"), t.removeItem("intercom.testStorage"), !0)
        } catch (n) {
            return !1
        }
    }

    var o = n(95), r = n(311), a = n(231), s = {
        ie8: function () {
            return "attachEvent" in window && !window.addEventListener
        }, xhr2: function () {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        }, xdr: function () {
            return "undefined" != typeof XDomainRequest
        }, localStorage: function () {
            return i("localStorage")
        }, sessionStorage: function () {
            return i("sessionStorage")
        }, uiwebview: function () {
            return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)
        }, upload: function () {
            return !!(window.File && window.FileList && window.FileReader && window.FormData)
        }, audioMp3: function () {
            var e = r("<audio>")[0];
            return !!e.canPlayType && !!e.canPlayType("audio/mpeg;").replace(/^no$/, "")
        }, visibility: function () {
            return "undefined" != typeof document.hidden || "undefined" != typeof document.mozHidden || "undefined" != typeof document.msHidden || "undefined" != typeof document.webkitHidden
        }, emoji: function () {
            return o.isUndefined(this.isNativeEmojiSupport) && (this.isNativeEmojiSupport = a.hasNativeSupport(document)), this.isNativeEmojiSupport
        }, pointerEvents: function () {
            if (o.isUndefined(this.isPointerEvents)) {
                var e = document.createElement("x");
                e.style.cssText = "pointer-events:auto", this.isPointerEvents = "auto" === e.style.pointerEvents
            }
            return this.isPointerEvents
        }, touchScreen: function () {
            return o.isUndefined(this.isTouchScreen) && (this.isTouchScreen = o.isUndefined(navigator.userAgent) ? !1 : !o.isNull(navigator.userAgent.match(/iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i))), this.isTouchScreen
        }, chrome: function () {
            return !!window.chrome && !!window.chrome.webstore
        }, firefox: function () {
            return "undefined" != typeof InstallTrigger
        }, ie: function () {
            return navigator.userAgent.indexOf("MSIE") >= 0 || navigator.appVersion.indexOf("Trident/") >= 0
        }, safari: function () {
            var e = navigator.vendor || "", t = navigator.userAgent || "";
            return 0 === e.indexOf("Apple") && /\sSafari\//.test(t)
        }, pushNotifications: function () {
            if (!this.serviceWorker())return !1;
            if (this.chrome()) {
                var e = 50;
                return this.chromeVersion() >= e
            }
            if (this.firefox()) {
                var t = 48;
                return this.firefoxVersion() >= t
            }
            return !1
        }, serviceWorker: function () {
            return "serviceWorker" in navigator
        }, chromeVersion: function () {
            var e = navigator.userAgent.match(/(Chrome|Chromium)\/([0-9]+)\./i);
            return e ? parseInt(e[2], 10) : -1
        }, firefoxVersion: function () {
            var e = navigator.userAgent.match(/Firefox\/([0-9]+)\./i);
            return e ? parseInt(e[1], 10) : -1
        }
    };
    e.exports = {features: s}
}, function (e, t) {
    "use strict";
    function n() {
        var e = Date.now;
        return "function" == typeof e && !("prototype" in e)
    }

    t.timestampToDate = function (e) {
        return new Date(1e3 * e)
    }, t.now = function () {
        return n() ? Date.now() : (new Date).getTime()
    }
}, function (e, t, n) {
    (function (t) {
        var i = n(95), o = {
            blockRenderers: {
                simpleCard: function (e) {
                    var t = "";
                    if (!i.isEmpty(e.image)) {
                        var n = document.createElement("img");
                        n.src = e.image, t = '<div class="intercom-interblocks-simple-card-image">' + n.outerHTML + "</div>"
                    }
                    if (!i.isEmpty(e.title) || !i.isEmpty(e.body)) {
                        var o = i.isEmpty(e.title) ? "" : '<div class="intercom-interblocks-simple-card-title">' + i.escape(e.title) + "</div>", r = i.isEmpty(e.body) ? "" : '<div class="intercom-interblocks-simple-card-body">' + i.escape(e.body) + "</div>";
                        t += '<div class="intercom-interblocks-simple-card-text">' + o + r + "</div>"
                    }
                    i.isEmpty(t) && (t = e.text);
                    var a = '<div class="intercom-interblocks-content-card">' + t + "</div>";
                    return a
                }, articleCard: function (e) {
                    var t = document.createElement("img");
                    t.className = "intercom-interblocks-article-author-avatar-image", t.src = e.authorAvatarUrl;
                    var n = '<div class="intercom-interblocks-content-card"><div class="intercom-interblocks-article-icon"></div><div class="intercom-interblocks-article-text"><div class="intercom-interblocks-article-title">' + i.escape(e.title) + '</div><div class="intercom-interblocks-article-body">' + i.escape(e.body) + '</div><div class="intercom-interblocks-article-author"><div class="intercom-interblocks-article-author-avatar">' + t.outerHTML + '</div><div class="intercom-interblocks-article-author-name">' + i.escape(e.authorName) + "</div></div></div></div>";
                    return n
                }, videoReply: function (e) {
                    var t = '<video controls class="intercom-interblocks-video-reply"><source src="' + e.url + '"><p><a href="' + e.url + '">' + e.text + "</a></p></video>";
                    return t
                }, paragraph: function (e) {
                    e.cssClass = o.getBlockClass(e);
                    var t = "<p";
                    return e.cssClass.length && (t += ' class="' + e.cssClass + '"'), t += ">" + e.text + "</p>"
                }, code: function (e) {
                    var t = "<pre><code>" + e.text + "</code></pre>";
                    return t
                }, orderedList: function (e) {
                    var t = "<ol>";
                    return i.each(e.items, function (e) {
                        t += "<li>" + e + "</li>"
                    }), t += "</ol>"
                }, unorderedList: function (e) {
                    var t = "<ul>";
                    return i.each(e.items, function (e) {
                        t += "<li>" + e + "</li>"
                    }), t += "</ul>"
                }, heading: function (e) {
                    e.cssClass = o.getBlockClass(e);
                    var t = "<h1";
                    return e.cssClass.length && (t += ' class="' + e.cssClass + '"'), t += ">" + e.text + "</h1>"
                }, subheading: function (e) {
                    e.cssClass = o.getBlockClass(e);
                    var t = "<h2";
                    return e.cssClass.length && (t += ' class="' + e.cssClass + '"'), t += ">" + e.text + "</h2>"
                }, image: function (e) {
                    e.cssClass = o.getBlockClass(e);
                    var t = "<div";
                    return e.cssClass.length && (t += ' class="intercom-container ' + e.cssClass + '"'), i.isString(e.linkUrl) && (t += '><a target="_blank" href="' + e.linkUrl + '" rel="nofollow"', i.isString(e.trackingLinkUrl) && (t += ' data-via="' + e.trackingLinkUrl + '"')), t += '><img src="' + e.url + '">', i.isString(e.linkUrl) && (t += "</a>"), t += "</div>"
                }, button: function (e) {
                    e.cssClass = o.getBlockClass(e);
                    var t = '<div class="intercom-container ';
                    return e.cssClass.length && (t += e.cssClass), t += '"><a target="_blank" href="' + e.linkUrl + '" class="intercom-h2b-button" rel="nofollow"', i.isString(e.trackingLinkUrl) && (t += ' data-via="' + e.trackingLinkUrl + '"'), t += ">" + e.text + "</a></div>"
                }, facebookLikeButton: function (e) {
                    var t = '<iframe src="//www.facebook.com/plugins/like.php?href=' + e.url + '&amp;width&amp;layout=standard&amp;action=like&amp;height=28&amp;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20+++appId=487224624685065"scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:28px;" allowtransparency="true"></iframe>';
                    return t
                }, twitterFollowButton: function (e) {
                    var t = '<iframe class="allowed_iframe_embed" allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/follow_button.html?show_count=false&amp;screen_name=' + e.username + '" style="width:300px; height:20px;"></iframe>';
                    return t
                }, video: function (e) {
                    switch (e.provider) {
                        case"wistia":
                            e.src = "https://fast.wistia.net/embed/iframe/" + e.id + "?videoQuality=hd-only";
                            break;
                        case"youtube":
                            e.src = "https://www.youtube.com/embed/" + e.id + "?hd=1";
                            break;
                        case"vimeo":
                            e.src = "https://player.vimeo.com/video/" + e.id;
                            break;
                        default:
                            e.src = ""
                    }
                    var t = '<div class="intercom-h2b-video"><iframe src="' + e.src + '" frameborder="0" style="" class="allowed_iframe_embed" allowtransparency="true"></iframe></div>';
                    return t
                }, attachmentList: function (e) {
                    return ""
                }, html: function (e) {
                    return e.content
                }
            }, getBlockClass: function (e) {
                var t = "";
                return i.isUndefined(e.align) || (t += "intercom-align-" + e.align + " "), i.isUndefined(e["class"]) || (t += e["class"]), t
            }, supportsBlockRendering: function (e) {
                var t = i.keys(this.blockRenderers), n = i.chain(e).pluck("type").uniq().value();
                return i.all(n, function (e) {
                    return i.contains(t, e)
                })
            }, renderBlocks: function (e) {
                if (!o.supportsBlockRendering(e))throw new Error("Intercom.Interblocks: Unsupported blockList: " + t.stringify(e));
                var n = i.map(e, function (e) {
                    return o.blockRenderers[e.type](e)
                });
                return i.reduce(n, function (e, t) {
                    return e + t
                }, "")
            }
        };
        e.exports = o
    }).call(t, n(94))
}, function (e, t) {
    "use strict";
    t.generateUUID = function () {
        var e = (new Date).getTime(), t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
        });
        return t
    }
}, function (e, t) {
    "use strict";
    e.exports = {
        getUrlForSize: function (e, t) {
            t = t || "square_128";
            var n;
            return e[t] ? n = e[t] : e.image_urls && e.image_urls[t] && (n = e.image_urls[t]), n
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        this.callback = e, this.isStarted = !1, this.timers = [], this.context = {}
    }

    var o = n(95);
    o.extend(i.prototype, {
        start: function (e) {
            this.isStarted && this.shutdown(), this.conditions = e, this._predicateHandlers = {
                duration_integer: this._durationSecondsHandler,
                duration_integer_ms: this._durationMillisecondsHandler,
                duration_delta: this._durationDeltaHandler
            }, this._setupConditions(e), this.isStarted = !0
        }, shutdown: function () {
            o.each(this.timers, this._stopTimer), this.timers = [], this.isStarted = !1
        }, setContext: function (e) {
            this.context = e
        }, _setupConditions: function (e) {
            o.each(e, this._setupConditionPredicateHandlers, this)
        }, _setupConditionPredicateHandlers: function (e) {
            var t = this;
            e.hasOrPredicates = this._hasOrPredicates(e.predicates), o.each(this._comparablePredicates(e), function (n) {
                n.matched = !1;
                var i = t._predicateHandlers[n.type];
                i && i.call(t, e, n)
            })
        }, _comparablePredicates: function (e) {
            return e.hasOrPredicates ? this._orPredicates(e.predicates).predicates : e.predicates
        }, _hasOrPredicates: function (e) {
            return !o.isEmpty(this._orPredicates(e))
        }, _orPredicates: function (e) {
            return o.find(e, function (e) {
                return e.type && "or" === e.type
            })
        }, _durationSecondsHandler: function (e, t) {
            var n = 1e3 * parseInt(t.value, 10);
            this._createDurationTimer(e, t, n)
        }, _durationMillisecondsHandler: function (e, t) {
            var n = parseInt(t.value, 10);
            this._createDurationTimer(e, t, n)
        }, _durationDeltaHandler: function (e, t) {
            var n = parseInt(t.value, 10);
            this._createDeltaTimer(e, t, n)
        }, _createDurationTimer: function (e, t, n) {
            var i = this, o = function () {
                t.matched = !0, i._checkConditionsSatisfied(e)
            };
            this._createTimer(o, n)
        }, _createDeltaTimer: function (e, t, n) {
            var i = this, o = function () {
                if (t.matched = i._evaluateDeltaPredicate(t), t.matched)i._checkConditionsSatisfied(e); else {
                    var n = Date.now() - i.context[t.attribute], o = t.value - n;
                    i._createDeltaTimer(e, t, o)
                }
            };
            this._createTimer(o, n)
        }, _evaluateDeltaPredicate: function (e) {
            var t = this.context[e.attribute];
            if (!t)return !0;
            var n = Date.now() - t;
            return n > parseInt(e.value, 10)
        }, _checkConditionsSatisfied: function (e) {
            this._predicatesMatch(e) && this.callback(e)
        }, _predicatesMatch: function (e) {
            var t = this._comparablePredicates(e), n = o.any(t, function (e) {
                return e.matched
            }), i = o.all(t, function (e) {
                return e.matched
            });
            return e.hasOrPredicates ? n : i
        }, _createTimer: function (e, t) {
            var n = setTimeout(e, t);
            this.timers.push(n)
        }, _stopTimer: function (e) {
            clearTimeout(e)
        }
    }), e.exports = i
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = o.Model.extend({
        initialize: function (e, t) {
            this.settings = t.settings
        }, hasEmail: function () {
            return !i.isEmpty(this.getEmail())
        }, getEmail: function () {
            return this.settings.get("user.email") || this.settings.get("user.anonymous-email")
        }, getRole: function () {
            return this.settings.get("user.role")
        }, isUserRole: function () {
            return "user_role" === this.getRole()
        }, updateAnonymousEmail: function (e) {
            return this.settings.update({user: {anonymous_email: e}}), this.trigger("user-model:anonymous-email-changed"), window.IntercomGTM && window.IntercomGTM.recordEmailSubmission(e), this.save()
        }, updateNotificationPermissions: function (e) {
            var t = this.settings.get("user.notification-permissions") || {};
            t[e.platform] = e.permission_state, this.settings.update({user: {notification_permissions: t}}), this.trigger("user-model:notification-permissions-change")
        }, fetchRealtimeSettingsIfMissing: function () {
            this.settings.get("user.anonymous") && !this.settings.has("app.rtm-settings") && this.fetch()
        }
    });
    r.fromSettings = function (e) {
        return new r({}, {settings: e})
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(317);
    e.exports = o.Collection.extend({
        model: r, initialize: function () {
            this.on("change", this.sort), this.on("reset", this.onReset)
        }, comparator: function (e) {
            return e.updatedAt()
        }, unread: function () {
            return i(this.reject(function (e) {
                return e.isRead()
            }))
        }, newUnread: function () {
            return i(this.reject(function (e) {
                return e.isRead() || e.updatedBeforeInAppsV2()
            }))
        }, fetchNextPage: function () {
            return this.pages += 1, this.fetch({remove: !1})
        }, isFetched: function () {
            return this.pages === this.totalPages
        }, parse: function (e) {
            return this.pages = e.pages.page, this.totalPages = e.pages.total_pages, e.conversations
        }, onReset: function () {
            this.pages = void 0, this.totalPages = void 0
        }
    })
}, function (e, t, n) {
    "use strict";
    function i() {
        d.invoke(g, "call")
    }

    function o() {
        d.invoke(v, "call")
    }

    function r() {
        return h.now() - c < l
    }

    function a() {
        u && (u = clearTimeout(u))
    }

    function s() {
        a(), u = setTimeout(t.recordActivityFinished, c)
    }

    var c, l, m, u, d = n(95), p = n(311), h = n(325), f = !1, g = [], v = [];
    t.start = function (e) {
        f || (f = !0, c = e || 1e3, m = !1, p(document).on("intercom.keyup", t.recordActivity), p(document).mousemove(t.recordActivity), p(document).focus(t.recordActivity), p(window).blur(t.recordActivityFinished))
    }, t.stop = function () {
        f && (p(document).off("intercom.keyup", t.recordActivity), p(document).off("mousemove", t.recordActivity), p(document).off("focus", t.recordActivity), p(window).off("blur", t.recordActivityFinished), a(), f = !1)
    }, t.recordActivity = function () {
        m = !0, l = h.now(), s(), i()
    }, t.recordActivityFinished = function () {
        m = !1, a(), o()
    }, t.onActive = function (e) {
        g.push(e)
    }, t.onInactive = function (e) {
        v.push(e)
    }, t.isActive = function () {
        return m || r()
    }
}, function (e, t, n) {
    "use strict";
    var i = n(324);
    e.exports = {
        enable: function () {
            this.enabled = !0
        }, isEnabled: function () {
            return this.enabled
        }, playDelivered: function () {
            this.play(n(334))
        }, playFailed: function () {
            this.play(n(335))
        }, playNotification: function () {
            this.play(n(336))
        }, playSubmit: function () {
            this.play(n(337))
        }, play: function (e) {
            if (i.features.audioMp3() && this.isEnabled()) {
                var t = this.load(e);
                t && t.play()
            }
        }, load: function (e) {
            return void 0 === this.audio[e] && (this.audio[e] = new Audio(e)), this.audio[e]
        }, audio: {}
    }
}, function (e, t, n) {
    e.exports = n.p + "audio/delivered.240b316e.mp3"
}, function (e, t, n) {
    e.exports = n.p + "audio/failed.8d215ddf.mp3"
}, function (e, t, n) {
    e.exports = n.p + "audio/notification.0d062b33.mp3"
}, function (e, t, n) {
    e.exports = n.p + "audio/submit.9b6dc5c5.mp3"
}, function (e, t) {
    "use strict";
    var n = /[^.]*\.([^.]*|..\...|...\...)$/, i = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    t.findDomain = function (e) {
        var t = e.match(i);
        if (!t && (t = e.match(n))) {
            var o = t[0];
            return o = o.split(":")[0], "." + o
        }
    }, t.read = function (e, t) {
        t = t || document.cookie;
        var n = "(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$";
        return decodeURIComponent(t.replace(new RegExp(n), "$1")) || void 0
    }, t.write = function (e, n, i, o, r) {
        var a = e + "=" + n;
        return "all" === i && (i = t.findDomain(location.host)), i && (a += "; domain=" + i), o && (a += "; path=" + o), r && (a += "; expires=" + r.toUTCString()), document.cookie = a, a
    }, t.clear = function (e, n, i) {
        t.write(e, "", n, i, new Date(0))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(340);
    e.exports = {
        hasAppleMetaTag: function () {
            return i('head meta[name="apple-itunes-app"]').length > 0
        }, run: function () {
            this.hasAppleMetaTag() && o.increment("ma:ap_meta")
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(311), r = n(241), a = n(325), s = n(94), c = n(341), l = "metrics";
    e.exports = {
        increment: function (e) {
            r.info("metrics - increment " + e);
            var t = !1, n = this.getMetrics();
            i.each(n, function (n) {
                "increment" === n.type && n.name === e && (n.value += 1, t = !0)
            }), t ? this.saveMetrics(n) : this.addMetric("increment", e, 1)
        }, timer: function (e) {
            var t = a.now(), n = o.Deferred();
            return n.then(i.bind(function () {
                var n = a.now() - t;
                r.info("metrics - timing " + e + ": " + n + "ms"), this.addMetric("timing", e, n)
            }, this)), n
        }, getMetrics: function () {
            return s.parse(c.localStorage.get(l) || "[]")
        }, addMetric: function (e, t, n) {
            var i = this.getMetrics();
            i.push({type: e, name: t, value: n}), this.saveMetrics(i)
        }, saveMetrics: function (e) {
            c.localStorage.set(l, s.stringify(e))
        }, resetMetrics: function () {
            c.localStorage.removeAll(l)
        }
    }
}, function (e, t, n) {
    "use strict";
    function i() {
        return {get: r.noop, set: r.noop, remove: r.noop, removeAll: r.noop}
    }

    function o(e) {
        return {
            get: function (t) {
                return e.getItem(s + t)
            }, set: function (t, n) {
                return e.setItem(s + t, n || "")
            }, remove: function (t) {
                e.removeItem(s + t)
            }, removeAll: function (t) {
                if (r.isString(t))for (var n in e)0 === n.indexOf(s + t) && e.removeItem(n)
            }
        }
    }

    var r = n(95), a = n(324), s = "intercom.";
    e.exports = {
        localStorage: a.features.localStorage() ? o(localStorage) : i(),
        sessionStorage: a.features.sessionStorage() ? o(sessionStorage) : i()
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = {};
    i.extend(r, o.Events), r.retrigger = function (e) {
        return function (t) {
            t.preventDefault(), t.stopPropagation(), r.trigger(e)
        }
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return "audio.notification." + e.id
    }

    function o(e) {
        return d.parse(u.localStorage.get(i(e)) || 0)
    }

    function r(e) {
        u.localStorage.set(i(e), e.get("updated_at"))
    }

    function a(e) {
        return o(e) === e.get("updated_at")
    }

    var s = n(333), c = n(325), l = n(344), m = n(240), u = n(341), d = n(94);
    e.exports = {
        enable: function () {
            this.enabled = !0
        }, isEnabled: function () {
            return this.enabled
        }, triggerNotification: function (e) {
            if (this.isEnabled() && !e.isRead()) {
                var t = e.parts.last();
                if (t && !t.byUser()) {
                    var n, i = t.getAuthorFirstName();
                    n = i ? m.translate("x-says", {firstName: i}) : m.translate("someone-says"), l.setNotification(n), this._playAudio(e)
                }
            }
        }, triggerWelcomeNotification: function (e) {
            if (this.isEnabled()) {
                var t = "audio.notification.app-message", n = d.parse(u.localStorage.get(t) || 0);
                if (!n) {
                    if (m.isLocaleEnglish()) {
                        var i = e + " says...";
                        l.setNotification(i)
                    }
                    u.localStorage.set(t, c.now()), s.playNotification()
                }
            }
        }, _playAudio: function (e) {
            a(e) || (r(e), s.playNotification())
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        m("head title").text(e)
    }

    function o() {
        return m("head title").text()
    }

    function r() {
        var e = o();
        i(s), s = e
    }

    var a, s, c, l = n(95), m = n(311), u = n(324), d = n(345);
    e.exports = {
        setNotification: function (e) {
            u.features.visibility() && (d.isPageVisible() || (a = a || o(), s = a, i(e), l.isUndefined(c) && (c = setInterval(l.bind(function () {
                return d.isPageVisible() ? void this.reset() : void r()
            }, this), 3e3))))
        }, reset: function () {
            clearInterval(c), c = void 0, i(a), a = void 0
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311);
    t.isPageVisible = function () {
        return "undefined" != typeof document.hidden ? !document.hidden : "undefined" != typeof document.mozHidden ? !document.mozHidden : "undefined" != typeof document.msHidden ? !document.msHidden : "undefined" != typeof document.webkitHidden ? !document.webkitHidden : !0
    }, t.onVisible = function (e) {
        var n;
        "undefined" != typeof document.hidden ? n = "visibilitychange" : "undefined" != typeof document.mozHidden ? n = "mozvisibilitychange" : "undefined" != typeof document.msHidden ? n = "msvisibilitychange" : "undefined" != typeof document.webkitHidden && (n = "webkitvisibilitychange"), i(document).on(n, function () {
            t.isPageVisible() && e()
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(332);
    e.exports = {
        initialize: function (e) {
            o.onActive(i.bind(e.onUserPresent, e)), o.onInactive(i.bind(e.onUserAbsent, e))
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(341), r = n(94);
    e.exports = {
        save: function (e) {
            o.sessionStorage.set("state", r.stringify(i.extend(this.load() || {}, e)))
        }, load: function () {
            try {
                return r.parse(o.sessionStorage.get("state"))
            } catch (e) {
            }
        }, clear: function () {
            o.sessionStorage.remove("state")
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = i.Model.extend();
    e.exports = o
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(350), s = n(324), c = n(340), l = n(347), m = n(317), u = n(411), d = n(507);
    e.exports = r.View.extend({
        id: "intercom-container",
        className: "intercom-container intercom-reset",
        initialize: function (e) {
            this.settings = e.settings, this.launcherView = new d({
                settings: this.settings,
                collection: this.collection,
                client: e.client
            }), this.messengerView = new u({
                client: e.client,
                nexusClient: e.nexusClient,
                settings: this.settings,
                collection: this.collection,
                app: e.app
            }), this.render = o.once(this.render), this.fetchConversations = o.once(this.fetchConversations)
        },
        render: function (e) {
            return this.$el.toggleClass("intercom-ie8", s.features.ie8()), this.renderStylesheet(), this.setPackageIdentifier(), this.renderLauncher(), this.renderMessenger(), !e && this.settings.get("user.anonymous") && this.settings.get("launcher.enabled") && this.showWelcomeMessage(), this.restoreState(), this
        },
        renderStylesheet: function () {
            this.$el.append(this.makeStylesheetElement())
        },
        renderLauncher: function () {
            this.$el.append(this.launcherView.render().$el), this.launcherView.$el.fadeIn(100)
        },
        renderMessenger: function () {
            this.$el.append(this.messengerView.render().$el)
        },
        makeStylesheetElement: function () {
            var e = a(this.settings.get("app.color"));
            return i('<style type="text/css" id="intercom-styles">' + e + "</style>")
        },
        setPackageIdentifier: function () {
            this.isUserAnonymous() && this.isInboundMessagingEnabled() ? this.$el.addClass("intercom-acquire") : !this.isInboundMessagingEnabled() && this.isOutboundMessagingEnabled() && this.$el.addClass("intercom-learn")
        },
        show: function (e) {
            return e ? void this.showConversation(e) : void this.fetchConversations().then(o.bind(function () {
                this.collection.isEmpty() && this.isInboundMessagingEnabled() ? this.showNewConversation() : this.showConversations()
            }, this))
        },
        showConversations: function () {
            this.fetchConversations().then(o.bind(function () {
                this.messengerView.showConversations(), this.launcherView.hide()
            }, this)), l.save({view: "conversations", restore: !0})
        },
        showConversationById: function (e) {
            var t = new m({id: e});
            this.showLoading(), t.fetch().then(o.bind(function () {
                t.set({read: !0}), this.collection.add(t, {merge: !0}), this.showConversation(t)
            }, this))
        },
        showConversation: function (e) {
            this.messengerView.showConversation(e), this.launcherView.hide(), this.shouldMinimize && this.minimize(), l.save({
                view: "conversation-" + e.id,
                restore: !e.isAnnouncement()
            })
        },
        showNewConversation: function (e, t, n) {
            this.isInboundMessagingEnabled() && (this.messengerView.showNewConversation(e, t, n), this.launcherView.hide(), this.shouldMinimize && this.minimize(), l.save({
                view: "new-conversation",
                restore: !0
            }))
        },
        showWelcomeMessage: function () {
            this.settings.has("app.message") && this.launcherView.showWelcome(this.settings.get("app.message"))
        },
        showLoading: function () {
            this.messengerView.showLoading(), this.launcherView.hide()
        },
        autoOpenConversation: function (e) {
            this.messengerView.autoOpenConversation(e), this.launcherView.hide()
        },
        hide: function () {
            this.messengerView.hide(), this.launcherView.show(), l.clear()
        },
        minimize: function () {
            var e = this.messengerView.getCurrentConversation();
            this.messengerView.minimize(), this.launcherView.minimize(), this.launcherView.maximize(e), this.shouldMinimize = !1, l.save({
                minimized: !0,
                restore: !0
            })
        },
        maximize: function (e) {
            this.messengerView.maximize(), this.launcherView.minimize(), e && e !== this.messengerView.getCurrentConversation() && this.showConversation(e), l.save({minimized: !1})
        },
        isMinimized: function () {
            return this.messengerView.isMinimized()
        },
        isActive: function () {
            return this.messengerView.isActive()
        },
        isInboundMessagingEnabled: function () {
            return this.settings.get("app.inbound-messaging-enabled")
        },
        isOutboundMessagingEnabled: function () {
            return this.settings.get("app.outbound-messaging-enabled")
        },
        isUserAnonymous: function () {
            return this.settings.get("user.anonymous")
        },
        restoreState: function () {
            var e = l.load();
            if (e && e.view && e.restore !== !1) {
                this.shouldMinimize = e.minimized;
                var t = e.view.match(/conversation-(\d+)/);
                t ? this.showConversationById(t[1]) : "conversations" === e.view ? this.showConversations() : "new-conversation" === e.view && this.showNewConversation(), this.shouldMinimize && this.messengerView.hide()
            }
        },
        refreshActiveConversation: function (e) {
            return this.messengerView.refreshActiveConversation(e)
        },
        fetchConversations: function () {
            this.showLoading();
            var e = c.timer("fetchConversations");
            return this.collection.fetch().then(e.resolve)
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(351), o = n(352);
    e.exports = function (e) {
        var t = i.lighten(e, 20), n = i.darken(e, 20), r = i.darken(e, 40), a = i.addOpacity(e, .1), s = o.toString();
        return s = s.replace(/custom-color-light/g, t), s = s.replace(/custom-color-darker/g, r), s = s.replace(/custom-color-dark/g, n), s = s.replace(/custom-color/g, e), s = s.replace(/color-opacity/g, a)
    }
}, function (e, t) {
    "use strict";
    function n(e) {
        var t = e.slice(1), n = parseInt(t, 16);
        return {red: n >> 16, green: n >> 8 & 255, blue: 255 & n}
    }

    function i(e, t, n) {
        return "#" + String("000000" + (n | t << 8 | e << 16).toString(16)).slice(-6)
    }

    function o(e, t, n) {
        return Math.min(Math.max(t, e), n)
    }

    t.lighten = function (e, t) {
        var r = n(e), a = o(r.red + t, 0, 255), s = o(r.green + t, 0, 255), c = o(r.blue + t, 0, 255);
        return i(a, s, c)
    }, t.darken = function (e, n) {
        return t.lighten(e, -1 * n)
    }, t.addOpacity = function (e, t) {
        var i = n(e);
        return t = o(t, 0, 1), "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")"
    }
}, function (e, t, n) {
    t = e.exports = n(159)(), t.push([e.id, "#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{background-image:url(" + n(353) + ");background-size:28px 28px;background-repeat:no-repeat;display:block;width:28px;height:28px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{background-image:url(" + n(354) + ")}}.intercom-reset a,.intercom-reset abbr,.intercom-reset acronym,.intercom-reset address,.intercom-reset applet,.intercom-reset article,.intercom-reset aside,.intercom-reset audio,.intercom-reset b,.intercom-reset big,.intercom-reset blockquote,.intercom-reset button,.intercom-reset canvas,.intercom-reset caption,.intercom-reset center,.intercom-reset cite,.intercom-reset code,.intercom-reset dd,.intercom-reset del,.intercom-reset details,.intercom-reset dfn,.intercom-reset div,.intercom-reset div.form,.intercom-reset dl,.intercom-reset dt,.intercom-reset em,.intercom-reset fieldset,.intercom-reset figcaption,.intercom-reset figure,.intercom-reset footer,.intercom-reset form,.intercom-reset h1,.intercom-reset h2,.intercom-reset h3,.intercom-reset h4,.intercom-reset h5,.intercom-reset h6,.intercom-reset header,.intercom-reset hgroup,.intercom-reset i,.intercom-reset iframe,.intercom-reset img,.intercom-reset input,.intercom-reset input[type],.intercom-reset ins,.intercom-reset kbd,.intercom-reset label,.intercom-reset legend,.intercom-reset li,.intercom-reset mark,.intercom-reset menu,.intercom-reset nav,.intercom-reset object,.intercom-reset ol,.intercom-reset p,.intercom-reset pre,.intercom-reset q,.intercom-reset s,.intercom-reset samp,.intercom-reset section,.intercom-reset small,.intercom-reset span,.intercom-reset strike,.intercom-reset strong,.intercom-reset sub,.intercom-reset summary,.intercom-reset sup,.intercom-reset table,.intercom-reset tbody,.intercom-reset td,.intercom-reset textarea,.intercom-reset tfoot,.intercom-reset th,.intercom-reset thead,.intercom-reset time,.intercom-reset tr,.intercom-reset tt,.intercom-reset u,.intercom-reset ul,.intercom-reset var,.intercom-reset video{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;-moz-text-align-last:initial;text-align-last:initial;text-decoration:none;-webkit-text-emphasis:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;alignment-adjust:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;animation-play-state:running;-webkit-appearance:normal;-moz-appearance:normal;appearance:normal;azimuth:center;-webkit-backface-visibility:visible;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;box-align:stretch;-webkit-box-decoration-break:slice;box-decoration-break:slice;box-direction:normal;box-flex:0.0;box-flex-group:1;box-lines:single;box-ordinal-group:1;box-orient:inline-axis;box-pack:start;box-shadow:none;box-sizing:content-box;-webkit-column-break-after:auto;break-after:auto;-webkit-column-break-before:auto;break-before:auto;-webkit-column-break-inside:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-moz-column-rule:medium medium #1f1f1f;column-rule:medium medium #1f1f1f;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;-webkit-columns:auto auto;-moz-columns:auto auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0 0;float:none;float-offset:0 0;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;line-height:inherit;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:medium none invert;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.intercom-reset address,.intercom-reset article,.intercom-reset aside,.intercom-reset blockquote,.intercom-reset canvas,.intercom-reset center,.intercom-reset dd,.intercom-reset details,.intercom-reset dir,.intercom-reset div,.intercom-reset div.form,.intercom-reset dl,.intercom-reset dt,.intercom-reset fieldset,.intercom-reset figcaption,.intercom-reset figure,.intercom-reset footer,.intercom-reset form,.intercom-reset frame,.intercom-reset frameset,.intercom-reset h1,.intercom-reset h2,.intercom-reset h3,.intercom-reset h4,.intercom-reset h5,.intercom-reset h6,.intercom-reset header,.intercom-reset hgroup,.intercom-reset hr,.intercom-reset menu,.intercom-reset nav,.intercom-reset noframes,.intercom-reset ol,.intercom-reset p,.intercom-reset pre,.intercom-reset section,.intercom-reset summary,.intercom-reset ul{display:block}.intercom-reset li{display:list-item}.intercom-reset table{display:table}.intercom-reset tr{display:table-row}.intercom-reset thead{display:table-header-group}.intercom-reset tbody{display:table-row-group}.intercom-reset tfoot{display:table-footer-group}.intercom-reset col{display:table-column}.intercom-reset colgroup{display:table-column-group}.intercom-reset td,.intercom-reset th{display:table-cell}.intercom-reset caption{display:table-caption}.intercom-reset input,.intercom-reset select{display:inline-block}.intercom-reset b,.intercom-reset strong{font-weight:700}.intercom-reset b>em,.intercom-reset b>i,.intercom-reset em>b,.intercom-reset em>strong,.intercom-reset i>b,.intercom-reset i>strong,.intercom-reset strong>em,.intercom-reset strong>i{font-weight:700;font-style:italic}.intercom-reset input,.intercom-reset textarea{cursor:text}.intercom-reset input::-moz-selection,.intercom-reset textarea::-moz-selection{background-color:#b3d4fc}.intercom-reset input::selection,.intercom-reset textarea::selection{background-color:#b3d4fc}.intercom-reset input::-webkit-input-placeholder,.intercom-reset textarea::-webkit-input-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;text-align-last:initial;text-decoration:none;-webkit-text-emphasis:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input::-moz-placeholder,.intercom-reset textarea::-moz-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;-moz-text-align-last:initial;text-align-last:initial;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input:-ms-input-placeholder,.intercom-reset textarea:-ms-input-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;text-align-last:initial;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input[type=checkbox],.intercom-reset input[type=radio]{cursor:default}.intercom-reset a,.intercom-reset a *,.intercom-reset a span,.intercom-reset button,.intercom-reset button *,.intercom-reset button span,.intercom-reset input[type=reset],.intercom-reset input[type=submit]{cursor:pointer}.intercom-reset a:active,.intercom-reset a:hover,.intercom-reset a:link,.intercom-reset a:visited{color:inherit;background:transparent;text-shadow:none}.intercom-reset button::-moz-focus-inner{border:0;padding:0}.intercom-reset iframe{max-width:100%}.intercom-reset code{font-family:monospace,serif;font-size:1em}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button,#intercom-container .intercom-browser-notification-button,#intercom-container .intercom-composer-send-button,#intercom-container .intercom-conversations-new-conversation-button,#intercom-container .intercom-new-anonymous-user input[type=submit],#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.17);background:custom-color;background-image:linear-gradient(180deg,custom-color-light,custom-color);border-radius:3px;text-shadow:0 -1px rgba(0,0,0,.2);text-decoration:none;font-size:14px;line-height:25px;padding:0 9px;display:inline-block;color:#fff;border:1px solid custom-color-dark}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:hover,#intercom-container .intercom-browser-notification-button:hover,#intercom-container .intercom-composer-send-button:hover,#intercom-container .intercom-conversations-new-conversation-button:hover,#intercom-container .intercom-new-anonymous-user input[type=submit]:hover,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:hover{background:custom-color-dark;background-image:linear-gradient(180deg,custom-color,custom-color-dark);border-color:custom-color-darker}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:active,#intercom-container .intercom-browser-notification-button:active,#intercom-container .intercom-composer-send-button:active,#intercom-container .intercom-conversations-new-conversation-button:active,#intercom-container .intercom-new-anonymous-user input[type=submit]:active,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:active{background:custom-color-darker;border-color:custom-color-darker}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:disabled,#intercom-container .intercom-browser-notification-button:disabled,#intercom-container .intercom-composer-send-button:disabled,#intercom-container .intercom-conversations-new-conversation-button:disabled,#intercom-container .intercom-new-anonymous-user input[type=submit]:disabled,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:disabled{box-shadow:0 1px 1px 0 hsla(0,0%,100%,.11),inset 0 0 1px 1px hsla(0,0%,100%,.08);background:#acbbc2;background-image:linear-gradient(180deg,#b6c5cb,#acbbc2);border-color:#a0aeb4}#intercom-container .intercom-browser-notification-button,#intercom-container .intercom-conversations-new-conversation-button{padding:2px 12px;font-weight:400;font-size:14px;line-height:30px}body>.intercom-container{z-index:2147483000;position:fixed}.intercom-embed-container{position:relative}@media print{#intercom-container{display:none}}#intercom-container .intercom-launcher{z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;bottom:20px;right:20px;width:48px;height:48px;visibility:hidden;-webkit-transform:translateZ(0)}#intercom-container .intercom-launcher-enabled{visibility:visible}#intercom-container .intercom-launcher-inactive{visibility:hidden}#intercom-container .intercom-launcher-badge,#intercom-container .intercom-launcher-initials,#intercom-container .intercom-launcher-preview{opacity:0;visibility:hidden}#intercom-container .intercom-launcher-inactive.intercom-launcher-maximized{opacity:1;visibility:visible}#intercom-container .intercom-launcher-inactive.intercom-launcher-minimized{opacity:0}#intercom-container .intercom-launcher-active.intercom-launcher-with-preview,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-preview{width:330px}#intercom-container .intercom-launcher-active.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container .intercom-launcher-active.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher-active.intercom-launcher-with-preview .intercom-launcher-preview,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-preview .intercom-launcher-preview{opacity:1;visibility:visible}#intercom-container .intercom-launcher.intercom-launcher-with-avatar .intercom-launcher-button{border-width:0;background-size:48px 48px}#intercom-container .intercom-launcher-active.intercom-launcher-with-message .intercom-launcher-button{visibility:visible}#intercom-container .intercom-launcher-button{background-image:url(" + n(355) + ");background-size:22px 22px;background-repeat:no-repeat;border-radius:50%;position:absolute;bottom:0;right:0;width:48px;height:48px;cursor:pointer;background-position:50%;background-color:custom-color;border:1px solid custom-color-darker}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-button{background-image:url(" + n(356) + ")}}#intercom-container.intercom-acquire .intercom-launcher-button{background-image:url(" + n(357) + ");background-size:26px 25px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-acquire .intercom-launcher-button{background-image:url(" + n(358) + ")}}#intercom-container.intercom-learn .intercom-launcher-button{background-image:url(" + n(359) + ");background-size:22px 20px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-learn .intercom-launcher-button{background-image:url(" + n(360) + ")}}#intercom-container .intercom-launcher-maximized .intercom-launcher-button{background-image:url(" + n(361) + ");background-size:22px 22px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-maximized .intercom-launcher-button{background-image:url(" + n(362) + ')}}#intercom-container .intercom-launcher-badge{border-radius:50%;font-size:12px;line-height:18px;background-color:#ff3c00;text-align:center;color:#fff;position:absolute;width:18px;height:18px;top:0;right:-7px;cursor:pointer}#intercom-container .intercom-launcher-initials{border-radius:50%;font-size:22px;line-height:48px;color:#fff;background-color:custom-color;font-weight:700;text-align:center;cursor:pointer}#intercom-container .intercom-launcher-preview{color:#455a64;position:absolute;bottom:2px;right:60px;max-width:240px;padding:12px 14px;color:#333;border-radius:10px;background:#fff;cursor:pointer}#intercom-container .intercom-launcher-preview,#intercom-container .intercom-launcher-preview .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-preview .intercom-container,#intercom-container .intercom-launcher-preview a,#intercom-container .intercom-launcher-preview blockquote,#intercom-container .intercom-launcher-preview code,#intercom-container .intercom-launcher-preview h1,#intercom-container .intercom-launcher-preview h2,#intercom-container .intercom-launcher-preview h3,#intercom-container .intercom-launcher-preview h4,#intercom-container .intercom-launcher-preview h5,#intercom-container .intercom-launcher-preview h6,#intercom-container .intercom-launcher-preview ol,#intercom-container .intercom-launcher-preview p,#intercom-container .intercom-launcher-preview ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-launcher-preview .intercom-container:first-child,#intercom-container .intercom-launcher-preview a:first-child,#intercom-container .intercom-launcher-preview blockquote:first-child,#intercom-container .intercom-launcher-preview code:first-child,#intercom-container .intercom-launcher-preview h1:first-child,#intercom-container .intercom-launcher-preview h2:first-child,#intercom-container .intercom-launcher-preview h3:first-child,#intercom-container .intercom-launcher-preview h4:first-child,#intercom-container .intercom-launcher-preview h5:first-child,#intercom-container .intercom-launcher-preview h6:first-child,#intercom-container .intercom-launcher-preview ol:first-child,#intercom-container .intercom-launcher-preview p:first-child,#intercom-container .intercom-launcher-preview ul:first-child{margin-top:0}#intercom-container .intercom-launcher-preview .intercom-container:last-child,#intercom-container .intercom-launcher-preview a:last-child,#intercom-container .intercom-launcher-preview blockquote:last-child,#intercom-container .intercom-launcher-preview code:last-child,#intercom-container .intercom-launcher-preview h1:last-child,#intercom-container .intercom-launcher-preview h2:last-child,#intercom-container .intercom-launcher-preview h3:last-child,#intercom-container .intercom-launcher-preview h4:last-child,#intercom-container .intercom-launcher-preview h5:last-child,#intercom-container .intercom-launcher-preview h6:last-child,#intercom-container .intercom-launcher-preview ol:last-child,#intercom-container .intercom-launcher-preview p:last-child,#intercom-container .intercom-launcher-preview ul:last-child{margin-bottom:0}#intercom-container .intercom-launcher-preview h1,#intercom-container .intercom-launcher-preview h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-launcher-preview h2,#intercom-container .intercom-launcher-preview h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-launcher-preview ol,#intercom-container .intercom-launcher-preview ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-launcher-preview [dir=ltr] ol,#intercom-container .intercom-launcher-preview [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-launcher-preview [dir=rtl] ol,#intercom-container .intercom-launcher-preview [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-launcher-preview ul>li{list-style-type:disc}#intercom-container .intercom-launcher-preview ol>li{list-style-type:decimal}#intercom-container .intercom-launcher-preview li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-launcher-preview em,#intercom-container .intercom-launcher-preview i{font-style:italic}#intercom-container .intercom-launcher-preview b,#intercom-container .intercom-launcher-preview strong{font-weight:700;line-height:100%}#intercom-container .intercom-launcher-preview pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-launcher-preview img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-launcher-preview p+br{display:none}#intercom-container .intercom-launcher-preview a:active,#intercom-container .intercom-launcher-preview a:hover,#intercom-container .intercom-launcher-preview a:link,#intercom-container .intercom-launcher-preview a:visited{text-decoration:underline}#intercom-container .intercom-launcher-preview a:link,#intercom-container .intercom-launcher-preview a:visited{color:custom-color}#intercom-container .intercom-launcher-preview a:active,#intercom-container .intercom-launcher-preview a:hover{color:custom-color-darker}#intercom-container .intercom-launcher-preview h2+.ic_button_in_content,#intercom-container .intercom-launcher-preview h2+.ic_social_block,#intercom-container .intercom-launcher-preview h2+blockquote,#intercom-container .intercom-launcher-preview h2+ol,#intercom-container .intercom-launcher-preview h2+p,#intercom-container .intercom-launcher-preview h2+ul,#intercom-container .intercom-launcher-preview h3+.ic_button_in_content,#intercom-container .intercom-launcher-preview h3+.ic_social_block,#intercom-container .intercom-launcher-preview h3+blockquote,#intercom-container .intercom-launcher-preview h3+ol,#intercom-container .intercom-launcher-preview h3+p,#intercom-container .intercom-launcher-preview h3+ul,#intercom-container .intercom-launcher-preview h4+.ic_button_in_content,#intercom-container .intercom-launcher-preview h4+.ic_social_block,#intercom-container .intercom-launcher-preview h4+blockquote,#intercom-container .intercom-launcher-preview h4+ol,#intercom-container .intercom-launcher-preview h4+p,#intercom-container .intercom-launcher-preview h4+ul,#intercom-container .intercom-launcher-preview h5+.ic_button_in_content,#intercom-container .intercom-launcher-preview h5+.ic_social_block,#intercom-container .intercom-launcher-preview h5+blockquote,#intercom-container .intercom-launcher-preview h5+ol,#intercom-container .intercom-launcher-preview h5+p,#intercom-container .intercom-launcher-preview h5+ul,#intercom-container .intercom-launcher-preview h6+.ic_button_in_content,#intercom-container .intercom-launcher-preview h6+.ic_social_block,#intercom-container .intercom-launcher-preview h6+blockquote,#intercom-container .intercom-launcher-preview h6+ol,#intercom-container .intercom-launcher-preview h6+p,#intercom-container .intercom-launcher-preview h6+ul{margin-top:0}#intercom-container .intercom-launcher-preview .intercom-h2b-facebook,#intercom-container .intercom-launcher-preview .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-launcher-preview iframe[src*="vimeo.com"],#intercom-container .intercom-launcher-preview iframe[src*="wistia.net"],#intercom-container .intercom-launcher-preview iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-launcher-preview:after,#intercom-container .intercom-launcher-preview:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;border-radius:9.5px}#intercom-container .intercom-launcher-preview:before{background:hsla(0,0%,67%,.24);background-image:linear-gradient(180deg,#eee,hsla(0,0%,67%,.24));top:-1px;right:-1px;bottom:-1px;left:-1px}#intercom-container .intercom-launcher-preview:after{background-color:#fff}#intercom-container .intercom-launcher-preview:hover .intercom-launcher-preview-close{opacity:1}#intercom-container .intercom-launcher-button,#intercom-container .intercom-launcher-preview{box-shadow:0 6px 13px 0 rgba(0,0,0,.23)}#intercom-container .intercom-launcher-preview-caret:after,#intercom-container .intercom-launcher-preview-caret:before{left:100%;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-launcher-preview-caret:after{border-width:5px;margin-top:-5px;bottom:18px;border-left-color:#fff}#intercom-container .intercom-launcher-preview-caret:before{border-width:6px;margin-top:-6px;bottom:17px;border-left-color:#ddd}#intercom-container .intercom-launcher-preview-multi-line{bottom:-8px}#intercom-container .intercom-launcher-preview-multi-line .intercom-launcher-preview-caret:before{bottom:27px}#intercom-container .intercom-launcher-preview-multi-line .intercom-launcher-preview-caret:after{bottom:28px}#intercom-container .intercom-launcher-preview-body{cursor:pointer}#intercom-container .intercom-launcher-preview-body a.intercom-h2b-button,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-facebook,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-twitter,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-video,#intercom-container .intercom-launcher-preview-body img,#intercom-container .intercom-launcher-preview-body ol,#intercom-container .intercom-launcher-preview-body ul,#intercom-container .intercom-launcher-preview-body video{display:none}#intercom-container .intercom-launcher-preview-body a,#intercom-container .intercom-launcher-preview-body b,#intercom-container .intercom-launcher-preview-body h1,#intercom-container .intercom-launcher-preview-body h2,#intercom-container .intercom-launcher-preview-body i,#intercom-container .intercom-launcher-preview-body p{word-wrap:break-word;cursor:pointer;display:inline;margin:0;font-weight:400;font-style:normal}#intercom-container .intercom-launcher-preview-body.intercom-launcher-preview-metadata{font-style:italic}#intercom-container .intercom-launcher-preview-close{background-image:url(' + n(363) + ");background-size:18px 18px;background-repeat:no-repeat;opacity:0;cursor:pointer;position:absolute;top:-9px;left:-9px;width:18px;height:18px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-preview-close{background-image:url(" + n(364) + ")}}#intercom-container .intercom-launcher-hovercard-close{cursor:pointer;position:absolute;top:-30px;right:-1px;background-color:rgba(40,45,50,.4);border-radius:40px;visibility:hidden;box-shadow:0 0 20px rgba(0,0,0,.12);padding:6px 10px 5px 22px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;color:#fff;background-position:10px;line-height:12px;background-image:url(" + n(365) + ");background-size:8px 8px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-hovercard-close{background-image:url(" + n(366) + ')}}#intercom-container .intercom-launcher-hovercard-close:hover{background-color:rgba(40,45,50,.5)}#intercom-container .intercom-launcher-hovercard-close-active{visibility:visible}@media (max-width:480px){#intercom-container .intercom-launcher-preview{max-width:200px}}#intercom-container .intercom-launcher-hovercard{display:none;cursor:pointer;position:absolute;right:-5px;bottom:64px;background-color:#fafafb;width:340px;border-radius:5px;border:1px solid rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.08)}#intercom-container .intercom-launcher-hovercard:after,#intercom-container .intercom-launcher-hovercard:before{top:100%;right:20px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-launcher-hovercard:after{border-color:rgba(250,250,251,0);border-top-color:#fafafb;border-width:8px;margin-left:-5px;right:21px}#intercom-container .intercom-launcher-hovercard:before{border-color:hsla(0,0%,80%,0);border-top-color:rgba(0,0,0,.14);border-width:9px;margin-left:-6px}#intercom-container .intercom-launcher-hovercard-welcome{background-color:#fff;border-radius:5px 5px 0 0;border-bottom:1px solid #dfe0e1;box-shadow:0 1px 1px #f0f0f1;padding:26px 20px;overflow:hidden;cursor:pointer}#intercom-container .intercom-launcher-hovercard-admins{width:115px;position:relative;float:left;height:50px;cursor:pointer;text-align:center}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar img{width:46px;height:46px}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar{line-height:46px;font-size:18.4px}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar{position:relative;display:inline-block;top:0;vertical-align:top;border:2px solid #fff;cursor:pointer;margin-left:-22px;z-index:2147483002}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar:first-child,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar:first-child{margin-left:0;z-index:2147483003}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar:last-child,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar:last-child{z-index:2147483001}#intercom-container .intercom-launcher-hovercard-text{float:right;width:174px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;cursor:pointer}#intercom-container .intercom-launcher-hovercard-app-name{font-weight:700;font-size:14px;color:#37474f;margin-bottom:7px;cursor:pointer}#intercom-container .intercom-launcher-hovercard-welcome-text{font-size:12px;color:#78909c;line-height:1.5;cursor:pointer}#intercom-container .intercom-launcher-hovercard-textarea{padding:18px 16px;font-size:16px;border-radius:0 0 5px 5px;height:42px;cursor:pointer}#intercom-container .intercom-launcher-hovercard-textarea textarea{width:100%;height:42px;box-sizing:border-box;background-color:#fff;font-weight:400;color:#455a64;resize:none;border:1px solid #cfd8dc;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;padding:10px 70px 5px 14px;border-radius:4px}#intercom-container .intercom-launcher-hovercard-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-textarea textarea::-moz-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-messenger{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#intercom-container .intercom-sheet{z-index:2147483000;visibility:hidden;position:fixed;height:100%;width:368px;bottom:0;right:0}#intercom-container .intercom-sheet-active{visibility:visible}#intercom-container .intercom-sheet-header{z-index:2147483002;box-shadow:0 1px 2px 0 rgba(0,0,0,.12);background:#fff;overflow:hidden;position:absolute;top:0;right:0;width:100%;height:48px}#intercom-container .intercom-sheet-footer{z-index:2147483002;box-shadow:0 -1px 2px 0 rgba(0,0,0,.06);background:#fff;position:absolute;bottom:0;right:0;width:100%;height:48px;text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-sheet-body{z-index:2147483000;background:#fafafb;background:rgba(250,250,251,.98);border-left:1px solid #dadee2;box-shadow:0 0 4px 1px rgba(0,0,0,.08);position:absolute;top:0;right:0;bottom:0;width:100%}#intercom-container .intercom-sheet-active .intercom-sheet-content{overflow-y:auto}#intercom-container .intercom-sheet-content{z-index:2147483001;position:absolute;top:48px;right:0;bottom:0;width:100%;-webkit-transform:translateZ(0)}#intercom-container .intercom-sheet-content-container{box-sizing:border-box;position:relative;min-height:100%;max-width:620px;margin:0 auto}#intercom-container .intercom-sheet-header-generic-title,#intercom-container .intercom-sheet-header-title-container{z-index:2147483000;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center;-moz-text-align-last:center;text-align-last:center;pointer-events:none}#intercom-container .intercom-sheet-header-generic-title,#intercom-container .intercom-sheet-header-title{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;font-weight:500;color:#465c66;letter-spacing:.2px;display:inline-block;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-sheet-header-generic-title.intercom-sheet-header-with-presence,#intercom-container .intercom-sheet-header-title.intercom-sheet-header-with-presence{line-height:20px;padding-top:7px}#intercom-container .intercom-sheet-header-generic-title{display:none;top:-100%;max-width:100%}#intercom-container .intercom-sheet-header-show-generic .intercom-sheet-header-generic-title{display:block;top:0}#intercom-container .intercom-sheet-header-show-generic .intercom-sheet-header-title-container{display:none;top:100%}#intercom-container .intercom-last-active,#intercom-container .intercom-proactive-response-time{position:absolute;z-index:0;text-align:center;color:#90a4ae;font-size:12px;left:0;right:0;bottom:7px;line-height:14px}#intercom-container .intercom-sheet-header-app-name{font-weight:700}#intercom-container .intercom-sheet-header-button{z-index:2147483001;position:relative;margin:0 20px;height:48px}#intercom-container .intercom-sheet-header-button-icon{height:100%;background-position:50%}#intercom-container .intercom-sheet-header-conversations-button{float:left}#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon{background-image:url(' + n(367) + ");background-size:15px 12px;background-repeat:no-repeat;background-position:50%;width:18px;float:left;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon{background-image:url(" + n(368) + ")}}#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-header-close-button{float:right;margin-left:15px}#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon{background-image:url(" + n(369) + ");background-size:13px 13px;background-repeat:no-repeat;width:16px;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon{background-image:url(" + n(370) + ")}}#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-header-minimize-button{float:right;margin-right:0}#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon{background-image:url(" + n(371) + ");background-size:15px 15px;background-repeat:no-repeat;width:16px;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon{background-image:url(" + n(372) + ')}}#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{position:absolute;left:50%;top:50%;margin-left:-14px;margin-top:14px}#intercom-container .intercom-sheet-minimized{opacity:0;visibility:hidden}#intercom-container .intercom-sheet-maximized{width:100%}@media (max-width:460px){#intercom-container .intercom-sheet{width:100%}}@media (-ms-high-contrast:none),screen\\0{#intercom-container .intercom-sheet{width:370px}#intercom-container .intercom-sheet-maximized{width:100%}}#intercom-container .intercom-conversation-parts-container{padding:16px}#intercom-container .intercom-conversation-part{padding-bottom:16px}#intercom-container .intercom-conversation-part:after,#intercom-container .intercom-conversation-part:before{content:" ";display:table}#intercom-container .intercom-conversation-part:after{clear:both}#intercom-container .intercom-conversation-part-unread .intercom-comment-by-admin .intercom-comment-timestamp{color:#93979f}#intercom-container .intercom-conversation-part-unread .intercom-comment-by-admin .intercom-comment-readstate{border-radius:50%;background-color:custom-color;width:7px;height:7px;margin-top:6px;overflow:auto}#intercom-container .intercom-conversation-part-failed .intercom-comment-body-container{opacity:.6}#intercom-container .intercom-conversation-part-failed .intercom-comment-body,#intercom-container .intercom-conversation-part-failed .intercom-comment-state{cursor:pointer}#intercom-container .intercom-conversation-part-failed .intercom-comment-metadata{color:#c00}#intercom-container .intercom-sheet-loading .intercom-conversation-parts,#intercom-container .intercom-sheet-loading .intercom-powered-by-container{opacity:0}#intercom-container .intercom-conversation-preview{pointer-events:none}#intercom-container .intercom-conversation-preview .intercom-composer,#intercom-container .intercom-conversation-preview .intercom-sheet-body,#intercom-container .intercom-conversation-preview .intercom-sheet-header{opacity:0}#intercom-container .intercom-conversation-preview .intercom-sheet-content{overflow-y:hidden}#intercom-container .intercom-conversation-preview .intercom-small-announcement{box-shadow:0 1px 10px 0 rgba(0,0,0,.08);pointer-events:auto}#intercom-container .intercom-conversation-part-grouped,#intercom-container .intercom-conversation-part-grouped-first{padding-bottom:2px}#intercom-container .intercom-conversation-part-grouped-first .intercom-comment-metadata,#intercom-container .intercom-conversation-part-grouped-first .intercom-comment-readstate,#intercom-container .intercom-conversation-part-grouped-last .intercom-comment-avatar,#intercom-container .intercom-conversation-part-grouped-last .intercom-comment-caret,#intercom-container .intercom-conversation-part-grouped .intercom-comment-avatar,#intercom-container .intercom-conversation-part-grouped .intercom-comment-caret,#intercom-container .intercom-conversation-part-grouped .intercom-comment-metadata,#intercom-container .intercom-conversation-part-grouped .intercom-comment-readstate{display:none}#intercom-container .intercom-article-card-container{padding:16px 0 0 16px;display:none}#intercom-container .intercom-conversations-item{display:block;padding-top:17px;padding-left:17px;text-decoration:none}#intercom-container .intercom-conversations-item,#intercom-container .intercom-conversations-item *{cursor:pointer}#intercom-container .intercom-conversations-item:hover{background-color:rgba(0,0,0,.02)}#intercom-container .intercom-conversations-item-admin-avatar,#intercom-container .intercom-conversations-item-user-avatar{border-radius:50%;float:left;margin-top:5px;display:inline-block;width:42px;height:42px}#intercom-container .intercom-conversations-item-admin-avatar{color:#fff;line-height:42px;text-align:center;font-size:18px;font-weight:700}#intercom-container .intercom-conversations-item-admin-avatar-no-image{background-color:custom-color}#intercom-container .intercom-conversations-item-user-avatar{background-color:custom-color;background-image:url(' + n(373) + ");background-size:38px 34px;background-repeat:no-repeat;background-position:50%;background-size:18px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-item-user-avatar{background-image:url(" + n(374) + ")}}#intercom-container .intercom-default-admin-avatar{background-color:custom-color;font-size:13px;font-weight:700;text-align:center;color:#fff;width:28px;height:28px;line-height:28px}#intercom-container .intercom-conversations-item-body-container{margin-left:55px;padding-right:17px;border-bottom:1px solid #e7e7e7;height:80px}#intercom-container .intercom-conversations-item-header{margin-bottom:5px}#intercom-container .intercom-conversations-item-title-container{margin:0 50px 0 0}#intercom-container .intercom-conversations-item-title{color:#60686e;color:rgba(96,104,110,.8);font-size:15px;line-height:22px;font-weight:500;display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-conversations-item-timestamp{float:right;font-size:12px;line-height:20px;color:#aaa;width:50px;text-align:right}#intercom-container .intercom-conversations-item-summary{color:#60686e;color:rgba(96,104,110,.8);font-size:14px;font-weight:400;line-height:19px;height:40px;overflow:hidden;position:relative;padding-right:15px;word-break:break-word}#intercom-container .intercom-conversations-item-summary.intercom-conversations-item-summary-metadata{font-style:italic}#intercom-container .intercom-conversations-new-conversation-button{margin:8px;font-weight:500;padding:0 18px}#intercom-container .intercom-conversations-new-conversation-button i{background-image:url(" + n(375) + ");background-size:15px 14px;background-repeat:no-repeat;display:inline-block;width:15px;height:15px;margin:0 8px -2px 0}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-new-conversation-button i{background-image:url(" + n(376) + ")}}#intercom-container .intercom-browser-notification-button{margin:8px;font-weight:500;padding:0 18px}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-header span{color:#3d4347;font-weight:500;white-space:nowrap}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-summary{color:#3d4347}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-readstate{border-radius:50%;background-color:custom-color;width:7px;height:7px;position:absolute;bottom:27px;right:0}#intercom-container .intercom-no-conversations{position:absolute;top:50%;left:0;right:0;margin:-38px auto 0;text-align:center;color:#e4e5e7;display:none}#intercom-container .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(" + n(377) + ");background-size:79px 59px;background-repeat:no-repeat;display:block;width:79px;height:59px;margin:0 auto 10px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(" + n(378) + ")}}#intercom-container.intercom-learn .intercom-no-conversations .intercom-no-conversations-icon{height:46px;background-image:url(" + n(379) + ");background-size:79px 46px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-learn .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(" + n(380) + ')}}#intercom-container .intercom-conversations-empty .intercom-no-conversations{display:block}#intercom-container .intercom-new-message-enabled .intercom-conversations-content{bottom:48px}#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner{position:relative;left:50%;margin-left:-14px;margin-top:40px;margin-bottom:40px}#intercom-container .intercom-attachments{border-top:1px solid #e4e5e7;padding:11px 14px}#intercom-container .intercom-attachments.intercom-attachments-stand-alone{border:none}#intercom-container .intercom-attachment{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;font-size:14px}#intercom-container .intercom-comment-by-user .intercom-attachments{border-top:1px solid custom-color-dark}#intercom-container .intercom-comment{line-height:20px;position:relative;clear:both;max-width:272px}#intercom-container .intercom-comment-by-user{float:right}#intercom-container .intercom-comment-by-admin{float:left;padding-left:38px}#intercom-container .intercom-comment-is-typing-icon{display:none}#intercom-container .intercom-comment-avatar{border-radius:50%;width:28px;height:28px;position:absolute;left:0;top:9px}#intercom-container .intercom-comment-body-container{font-size:14px;font-weight:400;color:#455a64;line-height:20px;border-radius:9px;border-width:1px;border-style:solid;position:relative;max-width:100%}#intercom-container .intercom-comment-body-container .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-comment-body-container .intercom-container,#intercom-container .intercom-comment-body-container a,#intercom-container .intercom-comment-body-container blockquote,#intercom-container .intercom-comment-body-container code,#intercom-container .intercom-comment-body-container h1,#intercom-container .intercom-comment-body-container h2,#intercom-container .intercom-comment-body-container h3,#intercom-container .intercom-comment-body-container h4,#intercom-container .intercom-comment-body-container h5,#intercom-container .intercom-comment-body-container h6,#intercom-container .intercom-comment-body-container ol,#intercom-container .intercom-comment-body-container p,#intercom-container .intercom-comment-body-container ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-comment-body-container .intercom-container:first-child,#intercom-container .intercom-comment-body-container a:first-child,#intercom-container .intercom-comment-body-container blockquote:first-child,#intercom-container .intercom-comment-body-container code:first-child,#intercom-container .intercom-comment-body-container h1:first-child,#intercom-container .intercom-comment-body-container h2:first-child,#intercom-container .intercom-comment-body-container h3:first-child,#intercom-container .intercom-comment-body-container h4:first-child,#intercom-container .intercom-comment-body-container h5:first-child,#intercom-container .intercom-comment-body-container h6:first-child,#intercom-container .intercom-comment-body-container ol:first-child,#intercom-container .intercom-comment-body-container p:first-child,#intercom-container .intercom-comment-body-container ul:first-child{margin-top:0}#intercom-container .intercom-comment-body-container .intercom-container:last-child,#intercom-container .intercom-comment-body-container a:last-child,#intercom-container .intercom-comment-body-container blockquote:last-child,#intercom-container .intercom-comment-body-container code:last-child,#intercom-container .intercom-comment-body-container h1:last-child,#intercom-container .intercom-comment-body-container h2:last-child,#intercom-container .intercom-comment-body-container h3:last-child,#intercom-container .intercom-comment-body-container h4:last-child,#intercom-container .intercom-comment-body-container h5:last-child,#intercom-container .intercom-comment-body-container h6:last-child,#intercom-container .intercom-comment-body-container ol:last-child,#intercom-container .intercom-comment-body-container p:last-child,#intercom-container .intercom-comment-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-comment-body-container h1,#intercom-container .intercom-comment-body-container h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-comment-body-container h2,#intercom-container .intercom-comment-body-container h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-comment-body-container ol,#intercom-container .intercom-comment-body-container ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-comment-body-container [dir=ltr] ol,#intercom-container .intercom-comment-body-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-comment-body-container [dir=rtl] ol,#intercom-container .intercom-comment-body-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-comment-body-container ul>li{list-style-type:disc}#intercom-container .intercom-comment-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-comment-body-container li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-comment-body-container em,#intercom-container .intercom-comment-body-container i{font-style:italic}#intercom-container .intercom-comment-body-container b,#intercom-container .intercom-comment-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-comment-body-container pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-comment-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-comment-body-container p+br{display:none}#intercom-container .intercom-comment-body-container a:active,#intercom-container .intercom-comment-body-container a:hover,#intercom-container .intercom-comment-body-container a:link,#intercom-container .intercom-comment-body-container a:visited{text-decoration:underline}#intercom-container .intercom-comment-body-container a:link,#intercom-container .intercom-comment-body-container a:visited{color:custom-color}#intercom-container .intercom-comment-body-container a:active,#intercom-container .intercom-comment-body-container a:hover{color:custom-color-darker}#intercom-container .intercom-comment-body-container h2+.ic_button_in_content,#intercom-container .intercom-comment-body-container h2+.ic_social_block,#intercom-container .intercom-comment-body-container h2+blockquote,#intercom-container .intercom-comment-body-container h2+ol,#intercom-container .intercom-comment-body-container h2+p,#intercom-container .intercom-comment-body-container h2+ul,#intercom-container .intercom-comment-body-container h3+.ic_button_in_content,#intercom-container .intercom-comment-body-container h3+.ic_social_block,#intercom-container .intercom-comment-body-container h3+blockquote,#intercom-container .intercom-comment-body-container h3+ol,#intercom-container .intercom-comment-body-container h3+p,#intercom-container .intercom-comment-body-container h3+ul,#intercom-container .intercom-comment-body-container h4+.ic_button_in_content,#intercom-container .intercom-comment-body-container h4+.ic_social_block,#intercom-container .intercom-comment-body-container h4+blockquote,#intercom-container .intercom-comment-body-container h4+ol,#intercom-container .intercom-comment-body-container h4+p,#intercom-container .intercom-comment-body-container h4+ul,#intercom-container .intercom-comment-body-container h5+.ic_button_in_content,#intercom-container .intercom-comment-body-container h5+.ic_social_block,#intercom-container .intercom-comment-body-container h5+blockquote,#intercom-container .intercom-comment-body-container h5+ol,#intercom-container .intercom-comment-body-container h5+p,#intercom-container .intercom-comment-body-container h5+ul,#intercom-container .intercom-comment-body-container h6+.ic_button_in_content,#intercom-container .intercom-comment-body-container h6+.ic_social_block,#intercom-container .intercom-comment-body-container h6+blockquote,#intercom-container .intercom-comment-body-container h6+ol,#intercom-container .intercom-comment-body-container h6+p,#intercom-container .intercom-comment-body-container h6+ul{margin-top:0}#intercom-container .intercom-comment-body-container .intercom-h2b-facebook,#intercom-container .intercom-comment-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-comment-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-comment-body-container iframe[src*="wistia.net"],#intercom-container .intercom-comment-body-container iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-comment-pending{opacity:.4;transition:opacity .1s ease-in-out}#intercom-container .intercom-comment .intercom-lwr-composer{border-radius:0 0 8px 8px}#intercom-container .intercom-comment-body{padding:12px 17px}#intercom-container .intercom-comment-body p{margin:1em 0 0}#intercom-container .intercom-comment-body p:first-child{margin-top:0}#intercom-container .intercom-comment-body pre span{color:inherit!important;background-color:inherit!important;font-weight:inherit!important;word-wrap:break-word}#intercom-container .intercom-comment-metadata-container{padding:2px 2px 0}#intercom-container .intercom-comment-metadata{font-size:12px;line-height:20px;color:#b0bec5;float:left}#intercom-container .intercom-comment-by-admin .intercom-comment-metadata{margin-right:6px}#intercom-container .intercom-comment-caret:after,#intercom-container .intercom-comment-caret:before{top:19px;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-comment-caret:after{border-width:3px;margin-top:1px}#intercom-container .intercom-comment-caret:before{border-width:4px}#intercom-container .intercom-comment-by-user{text-align:right}#intercom-container .intercom-comment-by-user .intercom-comment-body-container{display:inline-block;background-color:custom-color;color:#fff}#intercom-container .intercom-comment-by-user .intercom-comment-body-container a,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:active,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:hover,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:link,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:visited{color:#fff}#intercom-container .intercom-comment-by-user .intercom-comment-metadata{float:right}#intercom-container .intercom-comment-by-user .intercom-comment-caret:after,#intercom-container .intercom-comment-by-user .intercom-comment-caret:before{left:100%}#intercom-container .intercom-comment-by-user .intercom-comment-caret:after{border-width:4px;margin-top:-1px;border-left-color:custom-color}#intercom-container .intercom-comment-by-admin .intercom-comment-body-container{box-shadow:0 1px 2px 0 rgba(234,236,238,.8);background-color:#fff;border-color:#dadee2}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:after,#intercom-container .intercom-comment-by-admin .intercom-comment-caret:before{right:100%}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:after{border-right-color:#fff}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:before{border-right-color:#dadee2}#intercom-container .intercom-comment-by-interbot .intercom-comment-body-container{box-shadow:none;background-color:#e6eef4;border-color:#e6eef4}#intercom-container .intercom-comment-by-interbot .intercom-comment-avatar{border-radius:0}#intercom-container .intercom-comment-by-interbot .intercom-comment-caret:after,#intercom-container .intercom-comment-by-interbot .intercom-comment-caret:before{border-right-color:#e6eef4}#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container{opacity:.6}#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:active,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:hover,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:link,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:visited{text-decoration:none;cursor:default}#intercom-container .intercom-upload-comment .intercom-upload-body{padding-left:50px}#intercom-container .intercom-upload-comment .intercom-upload-body:before{content:\' \';position:absolute;left:0;top:8px;bottom:8px;width:37px;border-right:1px solid #fff;border-right:1px solid hsla(0,0%,100%,.3);background-image:url(' + n(381) + ");background-size:16px 15px;background-position:50%;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-upload-comment .intercom-upload-body:before{background-image:url(" + n(382) + ')}}#intercom-container .intercom-upload-comment.intercom-upload-image{max-width:266px}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-comment-body-container{background-color:transparent}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-comment-caret{display:none}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body{padding:0}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body:before{display:none}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body img{margin:0;border-radius:4px}#intercom-container .intercom-upload-comment .intercom-attachment-progress-bar{border-radius:4px;position:relative;display:inline-block;width:50px;height:6px;border:1px solid #ccc;vertical-align:middle;background-color:#fff;margin:0 5px}#intercom-container .intercom-upload-comment .intercom-attachment-progress-percentage{transition:width .4s;width:0;border-radius:3px;background-color:custom-color;position:absolute;top:0;left:0;bottom:0}#intercom-container .intercom-conversation-preview .intercom-comment-metadata{display:none}#intercom-container .intercom-conversation-part-component-spacer{height:8px}#intercom-container .intercom-auto-response{display:none;margin-bottom:16px;padding:16px;border-width:1px 0;border-style:solid;border-top:1px solid #e4e5e7;border-bottom:1px solid #e4e5e7;border-image:linear-gradient(90deg,#edf0f2,#e5e5e5 18%,#e5e5e5 82%,#edf0f2) 1}#intercom-container .intercom-auto-response-acquire{display:none;background-color:color-opacity;border-radius:5px;margin-bottom:16px}#intercom-container .intercom-auto-response-active{display:block}#intercom-container .intercom-auto-response-acquire p,#intercom-container .intercom-auto-response p{font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#5c6f7a;line-height:18px;text-align:center;padding:5px 0}#intercom-container .intercom-auto-response-acquire p .intercom-comment-body,#intercom-container .intercom-auto-response p .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-auto-response-acquire p .intercom-container,#intercom-container .intercom-auto-response-acquire p a,#intercom-container .intercom-auto-response-acquire p blockquote,#intercom-container .intercom-auto-response-acquire p code,#intercom-container .intercom-auto-response-acquire p h1,#intercom-container .intercom-auto-response-acquire p h2,#intercom-container .intercom-auto-response-acquire p h3,#intercom-container .intercom-auto-response-acquire p h4,#intercom-container .intercom-auto-response-acquire p h5,#intercom-container .intercom-auto-response-acquire p h6,#intercom-container .intercom-auto-response-acquire p ol,#intercom-container .intercom-auto-response-acquire p p,#intercom-container .intercom-auto-response-acquire p ul,#intercom-container .intercom-auto-response p .intercom-container,#intercom-container .intercom-auto-response p a,#intercom-container .intercom-auto-response p blockquote,#intercom-container .intercom-auto-response p code,#intercom-container .intercom-auto-response p h1,#intercom-container .intercom-auto-response p h2,#intercom-container .intercom-auto-response p h3,#intercom-container .intercom-auto-response p h4,#intercom-container .intercom-auto-response p h5,#intercom-container .intercom-auto-response p h6,#intercom-container .intercom-auto-response p ol,#intercom-container .intercom-auto-response p p,#intercom-container .intercom-auto-response p ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-auto-response-acquire p .intercom-container:first-child,#intercom-container .intercom-auto-response-acquire p a:first-child,#intercom-container .intercom-auto-response-acquire p blockquote:first-child,#intercom-container .intercom-auto-response-acquire p code:first-child,#intercom-container .intercom-auto-response-acquire p h1:first-child,#intercom-container .intercom-auto-response-acquire p h2:first-child,#intercom-container .intercom-auto-response-acquire p h3:first-child,#intercom-container .intercom-auto-response-acquire p h4:first-child,#intercom-container .intercom-auto-response-acquire p h5:first-child,#intercom-container .intercom-auto-response-acquire p h6:first-child,#intercom-container .intercom-auto-response-acquire p ol:first-child,#intercom-container .intercom-auto-response-acquire p p:first-child,#intercom-container .intercom-auto-response-acquire p ul:first-child,#intercom-container .intercom-auto-response p .intercom-container:first-child,#intercom-container .intercom-auto-response p a:first-child,#intercom-container .intercom-auto-response p blockquote:first-child,#intercom-container .intercom-auto-response p code:first-child,#intercom-container .intercom-auto-response p h1:first-child,#intercom-container .intercom-auto-response p h2:first-child,#intercom-container .intercom-auto-response p h3:first-child,#intercom-container .intercom-auto-response p h4:first-child,#intercom-container .intercom-auto-response p h5:first-child,#intercom-container .intercom-auto-response p h6:first-child,#intercom-container .intercom-auto-response p ol:first-child,#intercom-container .intercom-auto-response p p:first-child,#intercom-container .intercom-auto-response p ul:first-child{margin-top:0}#intercom-container .intercom-auto-response-acquire p .intercom-container:last-child,#intercom-container .intercom-auto-response-acquire p a:last-child,#intercom-container .intercom-auto-response-acquire p blockquote:last-child,#intercom-container .intercom-auto-response-acquire p code:last-child,#intercom-container .intercom-auto-response-acquire p h1:last-child,#intercom-container .intercom-auto-response-acquire p h2:last-child,#intercom-container .intercom-auto-response-acquire p h3:last-child,#intercom-container .intercom-auto-response-acquire p h4:last-child,#intercom-container .intercom-auto-response-acquire p h5:last-child,#intercom-container .intercom-auto-response-acquire p h6:last-child,#intercom-container .intercom-auto-response-acquire p ol:last-child,#intercom-container .intercom-auto-response-acquire p p:last-child,#intercom-container .intercom-auto-response-acquire p ul:last-child,#intercom-container .intercom-auto-response p .intercom-container:last-child,#intercom-container .intercom-auto-response p a:last-child,#intercom-container .intercom-auto-response p blockquote:last-child,#intercom-container .intercom-auto-response p code:last-child,#intercom-container .intercom-auto-response p h1:last-child,#intercom-container .intercom-auto-response p h2:last-child,#intercom-container .intercom-auto-response p h3:last-child,#intercom-container .intercom-auto-response p h4:last-child,#intercom-container .intercom-auto-response p h5:last-child,#intercom-container .intercom-auto-response p h6:last-child,#intercom-container .intercom-auto-response p ol:last-child,#intercom-container .intercom-auto-response p p:last-child,#intercom-container .intercom-auto-response p ul:last-child{margin-bottom:0}#intercom-container .intercom-auto-response-acquire p h1,#intercom-container .intercom-auto-response-acquire p h1 a,#intercom-container .intercom-auto-response p h1,#intercom-container .intercom-auto-response p h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-auto-response-acquire p h2,#intercom-container .intercom-auto-response-acquire p h2 a,#intercom-container .intercom-auto-response p h2,#intercom-container .intercom-auto-response p h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-auto-response-acquire p ol,#intercom-container .intercom-auto-response-acquire p ul,#intercom-container .intercom-auto-response p ol,#intercom-container .intercom-auto-response p ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-auto-response-acquire p [dir=ltr] ol,#intercom-container .intercom-auto-response-acquire p [dir=ltr] ul,#intercom-container .intercom-auto-response p [dir=ltr] ol,#intercom-container .intercom-auto-response p [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-auto-response-acquire p [dir=rtl] ol,#intercom-container .intercom-auto-response-acquire p [dir=rtl] ul,#intercom-container .intercom-auto-response p [dir=rtl] ol,#intercom-container .intercom-auto-response p [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-auto-response-acquire p ul>li,#intercom-container .intercom-auto-response p ul>li{list-style-type:disc}#intercom-container .intercom-auto-response-acquire p ol>li,#intercom-container .intercom-auto-response p ol>li{list-style-type:decimal}#intercom-container .intercom-auto-response-acquire p li,#intercom-container .intercom-auto-response p li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-auto-response-acquire p em,#intercom-container .intercom-auto-response-acquire p i,#intercom-container .intercom-auto-response p em,#intercom-container .intercom-auto-response p i{font-style:italic}#intercom-container .intercom-auto-response-acquire p b,#intercom-container .intercom-auto-response-acquire p strong,#intercom-container .intercom-auto-response p b,#intercom-container .intercom-auto-response p strong{font-weight:700;line-height:100%}#intercom-container .intercom-auto-response-acquire p pre,#intercom-container .intercom-auto-response p pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-auto-response-acquire p img,#intercom-container .intercom-auto-response p img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-auto-response-acquire p p+br,#intercom-container .intercom-auto-response p p+br{display:none}#intercom-container .intercom-auto-response-acquire p a:active,#intercom-container .intercom-auto-response-acquire p a:hover,#intercom-container .intercom-auto-response-acquire p a:link,#intercom-container .intercom-auto-response-acquire p a:visited,#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{text-decoration:underline}#intercom-container .intercom-auto-response-acquire p a:link,#intercom-container .intercom-auto-response-acquire p a:visited,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{color:custom-color}#intercom-container .intercom-auto-response-acquire p a:active,#intercom-container .intercom-auto-response-acquire p a:hover,#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover{color:custom-color-darker}#intercom-container .intercom-auto-response-acquire p h2+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h2+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h2+blockquote,#intercom-container .intercom-auto-response-acquire p h2+ol,#intercom-container .intercom-auto-response-acquire p h2+p,#intercom-container .intercom-auto-response-acquire p h2+ul,#intercom-container .intercom-auto-response-acquire p h3+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h3+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h3+blockquote,#intercom-container .intercom-auto-response-acquire p h3+ol,#intercom-container .intercom-auto-response-acquire p h3+p,#intercom-container .intercom-auto-response-acquire p h3+ul,#intercom-container .intercom-auto-response-acquire p h4+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h4+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h4+blockquote,#intercom-container .intercom-auto-response-acquire p h4+ol,#intercom-container .intercom-auto-response-acquire p h4+p,#intercom-container .intercom-auto-response-acquire p h4+ul,#intercom-container .intercom-auto-response-acquire p h5+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h5+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h5+blockquote,#intercom-container .intercom-auto-response-acquire p h5+ol,#intercom-container .intercom-auto-response-acquire p h5+p,#intercom-container .intercom-auto-response-acquire p h5+ul,#intercom-container .intercom-auto-response-acquire p h6+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h6+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h6+blockquote,#intercom-container .intercom-auto-response-acquire p h6+ol,#intercom-container .intercom-auto-response-acquire p h6+p,#intercom-container .intercom-auto-response-acquire p h6+ul,#intercom-container .intercom-auto-response p h2+.ic_button_in_content,#intercom-container .intercom-auto-response p h2+.ic_social_block,#intercom-container .intercom-auto-response p h2+blockquote,#intercom-container .intercom-auto-response p h2+ol,#intercom-container .intercom-auto-response p h2+p,#intercom-container .intercom-auto-response p h2+ul,#intercom-container .intercom-auto-response p h3+.ic_button_in_content,#intercom-container .intercom-auto-response p h3+.ic_social_block,#intercom-container .intercom-auto-response p h3+blockquote,#intercom-container .intercom-auto-response p h3+ol,#intercom-container .intercom-auto-response p h3+p,#intercom-container .intercom-auto-response p h3+ul,#intercom-container .intercom-auto-response p h4+.ic_button_in_content,#intercom-container .intercom-auto-response p h4+.ic_social_block,#intercom-container .intercom-auto-response p h4+blockquote,#intercom-container .intercom-auto-response p h4+ol,#intercom-container .intercom-auto-response p h4+p,#intercom-container .intercom-auto-response p h4+ul,#intercom-container .intercom-auto-response p h5+.ic_button_in_content,#intercom-container .intercom-auto-response p h5+.ic_social_block,#intercom-container .intercom-auto-response p h5+blockquote,#intercom-container .intercom-auto-response p h5+ol,#intercom-container .intercom-auto-response p h5+p,#intercom-container .intercom-auto-response p h5+ul,#intercom-container .intercom-auto-response p h6+.ic_button_in_content,#intercom-container .intercom-auto-response p h6+.ic_social_block,#intercom-container .intercom-auto-response p h6+blockquote,#intercom-container .intercom-auto-response p h6+ol,#intercom-container .intercom-auto-response p h6+p,#intercom-container .intercom-auto-response p h6+ul{margin-top:0}#intercom-container .intercom-auto-response-acquire p .intercom-h2b-facebook,#intercom-container .intercom-auto-response-acquire p .intercom-h2b-twitter,#intercom-container .intercom-auto-response p .intercom-h2b-facebook,#intercom-container .intercom-auto-response p .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-auto-response-acquire p iframe[src*="vimeo.com"],#intercom-container .intercom-auto-response-acquire p iframe[src*="wistia.net"],#intercom-container .intercom-auto-response-acquire p iframe[src*="youtube.com"],#intercom-container .intercom-auto-response p iframe[src*="vimeo.com"],#intercom-container .intercom-auto-response p iframe[src*="wistia.net"],#intercom-container .intercom-auto-response p iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-auto-response-acquire p a:active,#intercom-container .intercom-auto-response-acquire p a:hover,#intercom-container .intercom-auto-response-acquire p a:link,#intercom-container .intercom-auto-response-acquire p a:visited,#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{color:#90a4ae}#intercom-container .intercom-auto-response-acquire p{padding-left:18px;padding-top:15px;padding-bottom:0;text-align:left}#intercom-container .intercom-new-email-confirmation-padding p{padding-bottom:15px}#intercom-container .intercom-announcement{overflow:hidden}#intercom-container .intercom-announcement-body-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.07);font-size:16px;font-weight:400;color:#455a64;line-height:23px;border-radius:5px;border:1px solid #e4e4e4;background-color:#fff}#intercom-container .intercom-announcement-body-container .intercom-comment-body{font-size:16px;font-weight:400;line-height:23px}#intercom-container .intercom-announcement-body-container .intercom-container,#intercom-container .intercom-announcement-body-container a,#intercom-container .intercom-announcement-body-container blockquote,#intercom-container .intercom-announcement-body-container code,#intercom-container .intercom-announcement-body-container h1,#intercom-container .intercom-announcement-body-container h2,#intercom-container .intercom-announcement-body-container h3,#intercom-container .intercom-announcement-body-container h4,#intercom-container .intercom-announcement-body-container h5,#intercom-container .intercom-announcement-body-container h6,#intercom-container .intercom-announcement-body-container ol,#intercom-container .intercom-announcement-body-container p,#intercom-container .intercom-announcement-body-container ul{font-size:16px;font-weight:400;line-height:23px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-announcement-body-container .intercom-container:first-child,#intercom-container .intercom-announcement-body-container a:first-child,#intercom-container .intercom-announcement-body-container blockquote:first-child,#intercom-container .intercom-announcement-body-container code:first-child,#intercom-container .intercom-announcement-body-container h1:first-child,#intercom-container .intercom-announcement-body-container h2:first-child,#intercom-container .intercom-announcement-body-container h3:first-child,#intercom-container .intercom-announcement-body-container h4:first-child,#intercom-container .intercom-announcement-body-container h5:first-child,#intercom-container .intercom-announcement-body-container h6:first-child,#intercom-container .intercom-announcement-body-container ol:first-child,#intercom-container .intercom-announcement-body-container p:first-child,#intercom-container .intercom-announcement-body-container ul:first-child{margin-top:0}#intercom-container .intercom-announcement-body-container .intercom-container:last-child,#intercom-container .intercom-announcement-body-container a:last-child,#intercom-container .intercom-announcement-body-container blockquote:last-child,#intercom-container .intercom-announcement-body-container code:last-child,#intercom-container .intercom-announcement-body-container h1:last-child,#intercom-container .intercom-announcement-body-container h2:last-child,#intercom-container .intercom-announcement-body-container h3:last-child,#intercom-container .intercom-announcement-body-container h4:last-child,#intercom-container .intercom-announcement-body-container h5:last-child,#intercom-container .intercom-announcement-body-container h6:last-child,#intercom-container .intercom-announcement-body-container ol:last-child,#intercom-container .intercom-announcement-body-container p:last-child,#intercom-container .intercom-announcement-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-announcement-body-container h1,#intercom-container .intercom-announcement-body-container h1 a{font-size:37px;font-weight:300;line-height:48px;letter-spacing:.35px;margin:27px 0;color:custom-color}#intercom-container .intercom-announcement-body-container h1:first-child{text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-announcement-body-container h2,#intercom-container .intercom-announcement-body-container h2 a{font-size:18px;line-height:27px;font-weight:400;margin:20px 0 10px;color:custom-color}#intercom-container .intercom-announcement-body-container ol,#intercom-container .intercom-announcement-body-container ul{font-size:16px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:40px}#intercom-container .intercom-announcement-body-container [dir=ltr] ol,#intercom-container .intercom-announcement-body-container [dir=ltr] ul{padding-left:40px}#intercom-container .intercom-announcement-body-container [dir=rtl] ol,#intercom-container .intercom-announcement-body-container [dir=rtl] ul{padding-right:40px}#intercom-container .intercom-announcement-body-container ul>li{list-style-type:disc}#intercom-container .intercom-announcement-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-announcement-body-container li{display:list-item;line-height:26px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-announcement-body-container em,#intercom-container .intercom-announcement-body-container i{font-style:italic}#intercom-container .intercom-announcement-body-container b,#intercom-container .intercom-announcement-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-announcement-body-container pre{font-size:16px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-announcement-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-announcement-body-container p+br{display:none}#intercom-container .intercom-announcement-body-container a:active,#intercom-container .intercom-announcement-body-container a:hover,#intercom-container .intercom-announcement-body-container a:link,#intercom-container .intercom-announcement-body-container a:visited{text-decoration:underline}#intercom-container .intercom-announcement-body-container a:link,#intercom-container .intercom-announcement-body-container a:visited{color:custom-color}#intercom-container .intercom-announcement-body-container a:active,#intercom-container .intercom-announcement-body-container a:hover{color:custom-color-darker}#intercom-container .intercom-announcement-body-container h2+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h2+.ic_social_block,#intercom-container .intercom-announcement-body-container h2+blockquote,#intercom-container .intercom-announcement-body-container h2+ol,#intercom-container .intercom-announcement-body-container h2+p,#intercom-container .intercom-announcement-body-container h2+ul,#intercom-container .intercom-announcement-body-container h3+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h3+.ic_social_block,#intercom-container .intercom-announcement-body-container h3+blockquote,#intercom-container .intercom-announcement-body-container h3+ol,#intercom-container .intercom-announcement-body-container h3+p,#intercom-container .intercom-announcement-body-container h3+ul,#intercom-container .intercom-announcement-body-container h4+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h4+.ic_social_block,#intercom-container .intercom-announcement-body-container h4+blockquote,#intercom-container .intercom-announcement-body-container h4+ol,#intercom-container .intercom-announcement-body-container h4+p,#intercom-container .intercom-announcement-body-container h4+ul,#intercom-container .intercom-announcement-body-container h5+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h5+.ic_social_block,#intercom-container .intercom-announcement-body-container h5+blockquote,#intercom-container .intercom-announcement-body-container h5+ol,#intercom-container .intercom-announcement-body-container h5+p,#intercom-container .intercom-announcement-body-container h5+ul,#intercom-container .intercom-announcement-body-container h6+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h6+.ic_social_block,#intercom-container .intercom-announcement-body-container h6+blockquote,#intercom-container .intercom-announcement-body-container h6+ol,#intercom-container .intercom-announcement-body-container h6+p,#intercom-container .intercom-announcement-body-container h6+ul{margin-top:0}#intercom-container .intercom-announcement-body-container .intercom-h2b-facebook,#intercom-container .intercom-announcement-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-announcement-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-announcement-body-container iframe[src*="wistia.net"],#intercom-container .intercom-announcement-body-container iframe[src*="youtube.com"]{width:100%;height:272px;margin:20px auto}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button{text-decoration:none;padding:6px 18px;font-weight:500;display:table;margin:40px auto;font-size:15px;line-height:31px;color:#fff}#intercom-container .intercom-announcement-body-container .intercom-align-right{text-align:right!important}#intercom-container .intercom-announcement-body-container .intercom-align-right .intercom-h2b-button,#intercom-container .intercom-announcement-body-container .intercom-align-right img{margin-right:0!important}#intercom-container .intercom-announcement-body-container .intercom-align-center{text-align:center!important}#intercom-container .intercom-announcement-body-container .intercom-align-left{text-align:left!important}#intercom-container .intercom-announcement-body-container .intercom-align-left .intercom-h2b-button,#intercom-container .intercom-announcement-body-container .intercom-align-left img{margin-left:0!important}#intercom-container .intercom-announcement-body-container img{margin:10px auto}#intercom-container .intercom-announcement .intercom-lwr-composer{border-radius:0 0 5px 5px}#intercom-container .intercom-announcement-avatar-container{height:30px}#intercom-container .intercom-announcement-avatar{box-shadow:0 1px 2px rgba(0,0,0,.2);border-radius:50%;border:3px solid #fff;position:absolute;width:60px;height:60px;left:50%;margin-left:-30px}#intercom-container .intercom-announcement-body{padding:50px}#intercom-container .intercom-conversation-announcement .intercom-comment{max-width:400px}#intercom-container .intercom-small-announcement{z-index:2147483000;overflow:hidden}#intercom-container .intercom-small-announcement-body-container{box-shadow:0 1px 1px 0 rgba(0,0,0,.04);font-size:15px;font-weight:400;color:#455a64;line-height:23px;border:1px solid #e4e4e4;border-radius:5px;background-color:#fff;position:relative}#intercom-container .intercom-small-announcement-body-container .intercom-comment-body{font-size:15px;font-weight:400;line-height:23px}#intercom-container .intercom-small-announcement-body-container .intercom-container,#intercom-container .intercom-small-announcement-body-container a,#intercom-container .intercom-small-announcement-body-container blockquote,#intercom-container .intercom-small-announcement-body-container code,#intercom-container .intercom-small-announcement-body-container h1,#intercom-container .intercom-small-announcement-body-container h2,#intercom-container .intercom-small-announcement-body-container h3,#intercom-container .intercom-small-announcement-body-container h4,#intercom-container .intercom-small-announcement-body-container h5,#intercom-container .intercom-small-announcement-body-container h6,#intercom-container .intercom-small-announcement-body-container ol,#intercom-container .intercom-small-announcement-body-container p,#intercom-container .intercom-small-announcement-body-container ul{font-size:15px;font-weight:400;line-height:23px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-small-announcement-body-container .intercom-container:first-child,#intercom-container .intercom-small-announcement-body-container a:first-child,#intercom-container .intercom-small-announcement-body-container blockquote:first-child,#intercom-container .intercom-small-announcement-body-container code:first-child,#intercom-container .intercom-small-announcement-body-container h1:first-child,#intercom-container .intercom-small-announcement-body-container h2:first-child,#intercom-container .intercom-small-announcement-body-container h3:first-child,#intercom-container .intercom-small-announcement-body-container h4:first-child,#intercom-container .intercom-small-announcement-body-container h5:first-child,#intercom-container .intercom-small-announcement-body-container h6:first-child,#intercom-container .intercom-small-announcement-body-container ol:first-child,#intercom-container .intercom-small-announcement-body-container p:first-child,#intercom-container .intercom-small-announcement-body-container ul:first-child{margin-top:0}#intercom-container .intercom-small-announcement-body-container .intercom-container:last-child,#intercom-container .intercom-small-announcement-body-container a:last-child,#intercom-container .intercom-small-announcement-body-container blockquote:last-child,#intercom-container .intercom-small-announcement-body-container code:last-child,#intercom-container .intercom-small-announcement-body-container h1:last-child,#intercom-container .intercom-small-announcement-body-container h2:last-child,#intercom-container .intercom-small-announcement-body-container h3:last-child,#intercom-container .intercom-small-announcement-body-container h4:last-child,#intercom-container .intercom-small-announcement-body-container h5:last-child,#intercom-container .intercom-small-announcement-body-container h6:last-child,#intercom-container .intercom-small-announcement-body-container ol:last-child,#intercom-container .intercom-small-announcement-body-container p:last-child,#intercom-container .intercom-small-announcement-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-small-announcement-body-container h1,#intercom-container .intercom-small-announcement-body-container h1 a{font-size:22px;font-weight:300;line-height:28px;letter-spacing:.3px;margin:27px 0;color:custom-color}#intercom-container .intercom-small-announcement-body-container h1:first-child{text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-small-announcement-body-container h2,#intercom-container .intercom-small-announcement-body-container h2 a{font-size:15px;line-height:24px;font-weight:700;margin:20px 0 10px;color:#455a64}#intercom-container .intercom-small-announcement-body-container ol,#intercom-container .intercom-small-announcement-body-container ul{font-size:15px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-small-announcement-body-container [dir=ltr] ol,#intercom-container .intercom-small-announcement-body-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-small-announcement-body-container [dir=rtl] ol,#intercom-container .intercom-small-announcement-body-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-small-announcement-body-container ul>li{list-style-type:disc}#intercom-container .intercom-small-announcement-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-small-announcement-body-container li{display:list-item;line-height:22px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-small-announcement-body-container em,#intercom-container .intercom-small-announcement-body-container i{font-style:italic}#intercom-container .intercom-small-announcement-body-container b,#intercom-container .intercom-small-announcement-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-small-announcement-body-container pre{font-size:15px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-small-announcement-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-small-announcement-body-container p+br{display:none}#intercom-container .intercom-small-announcement-body-container a:active,#intercom-container .intercom-small-announcement-body-container a:hover,#intercom-container .intercom-small-announcement-body-container a:link,#intercom-container .intercom-small-announcement-body-container a:visited{text-decoration:underline}#intercom-container .intercom-small-announcement-body-container a:link,#intercom-container .intercom-small-announcement-body-container a:visited{color:custom-color}#intercom-container .intercom-small-announcement-body-container a:active,#intercom-container .intercom-small-announcement-body-container a:hover{color:custom-color-darker}#intercom-container .intercom-small-announcement-body-container h2+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h2+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h2+blockquote,#intercom-container .intercom-small-announcement-body-container h2+ol,#intercom-container .intercom-small-announcement-body-container h2+p,#intercom-container .intercom-small-announcement-body-container h2+ul,#intercom-container .intercom-small-announcement-body-container h3+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h3+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h3+blockquote,#intercom-container .intercom-small-announcement-body-container h3+ol,#intercom-container .intercom-small-announcement-body-container h3+p,#intercom-container .intercom-small-announcement-body-container h3+ul,#intercom-container .intercom-small-announcement-body-container h4+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h4+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h4+blockquote,#intercom-container .intercom-small-announcement-body-container h4+ol,#intercom-container .intercom-small-announcement-body-container h4+p,#intercom-container .intercom-small-announcement-body-container h4+ul,#intercom-container .intercom-small-announcement-body-container h5+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h5+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h5+blockquote,#intercom-container .intercom-small-announcement-body-container h5+ol,#intercom-container .intercom-small-announcement-body-container h5+p,#intercom-container .intercom-small-announcement-body-container h5+ul,#intercom-container .intercom-small-announcement-body-container h6+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h6+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h6+blockquote,#intercom-container .intercom-small-announcement-body-container h6+ol,#intercom-container .intercom-small-announcement-body-container h6+p,#intercom-container .intercom-small-announcement-body-container h6+ul{margin-top:0}#intercom-container .intercom-small-announcement-body-container .intercom-h2b-facebook,#intercom-container .intercom-small-announcement-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-small-announcement-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-small-announcement-body-container iframe[src*="wistia.net"],#intercom-container .intercom-small-announcement-body-container iframe[src*="youtube.com"]{width:100%;height:162px;margin:20px auto}#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{text-decoration:none;padding:6px 18px;font-weight:500;display:table;margin:20px auto;font-size:15px;line-height:31px;color:#fff}#intercom-container .intercom-small-announcement-body-container .intercom-align-right{text-align:right!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-right .intercom-h2b-button,#intercom-container .intercom-small-announcement-body-container .intercom-align-right img{margin-right:0!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-center{text-align:center!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-left{text-align:left!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-left .intercom-h2b-button,#intercom-container .intercom-small-announcement-body-container .intercom-align-left img{margin-left:0!important}#intercom-container .intercom-small-announcement-body-container img{margin:10px auto}#intercom-container .intercom-small-announcement .intercom-lwr-composer{border-radius:0 0 5px 5px}#intercom-container .intercom-small-announcement-avatar-container{height:20px}#intercom-container .intercom-small-announcement-avatar{z-index:2147483001;box-shadow:0 1px 2px rgba(0,0,0,.2);border-radius:50%;border:2px solid #fff;position:absolute;width:40px;height:40px;left:50%;margin-left:-22px}#intercom-container .intercom-small-announcement-body{padding:26px 23px}#intercom-container .intercom-conversation-preview .intercom-small-announcement-body-container{box-shadow:0 1px 10px 0 rgba(0,0,0,.08);max-height:320px}#intercom-container .intercom-conversation-preview .intercom-small-announcement-body-container:after{z-index:2147483002;background:linear-gradient(hsla(0,0%,100%,0),#fff 47px);border-radius:0 0 5px 5px;content:"";position:absolute;top:240px;height:81px;width:100%}#intercom-container .intercom-new-anonymous-user-disabled{opacity:.5}#intercom-container .intercom-new-anonymous-user-input-container{position:relative;margin:0 auto;padding:5px 0;width:240px}#intercom-container .intercom-new-anonymous-user-input-container-acquire{position:relative;margin:0 auto;padding:15px}#intercom-container .intercom-new-email-confirmation-padding .intercom-new-anonymous-user-input-container-acquire{padding-top:0}#intercom-container .intercom-browser-notifications-button-container{margin:0 auto;text-align:center}#intercom-container .intercom-new-anonymous-user,#intercom-container .intercom-new-anonymous-user p{-webkit-transform:translateZ(0);transform:translateZ(0)}#intercom-container .intercom-new-anonymous-user input[type=email]{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:32px;color:#60686e;height:34px;width:100%;padding:0 42px 0 8px;border:1px solid #e4e5e7;border-radius:2px;background-color:#fff}#intercom-container .intercom-new-anonymous-user input[type=email]::-webkit-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email]::-moz-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email]:-ms-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email].intercom-new-anonymous-user-email-invalid{border-color:#d76060;background-color:#fcedee}#intercom-container .intercom-new-anonymous-user-acquire input[type=email]{border:1px solid custom-color;font-size:14px}#intercom-container .intercom-new-anonymous-user input[type=submit]{background:custom-color;background-image:url(' + n(383) + "),linear-gradient(180deg,custom-color-light,custom-color);background-repeat:no-repeat;background-position:50%;position:absolute;padding:0;margin:0;top:9px;right:4px;width:34px;height:24px}#intercom-container .intercom-new-anonymous-user input[type=submit]:hover{background:custom-color-dark;background-image:url(" + n(383) + "),linear-gradient(180deg,custom-color,custom-color-dark);background-repeat:no-repeat;background-position:50%}#intercom-container .intercom-new-anonymous-user input[type=submit]:disabled{background:#acbbc2;background-image:url(" + n(383) + "),linear-gradient(180deg,#b6c5cb,#acbbc2);background-repeat:no-repeat;background-position:50%}#intercom-container .intercom-new-anonymous-user-acquire input[type=submit]{top:19px;right:19px}#intercom-container .intercom-new-anonymous-user-acquire input[type=submit]:disabled{background:custom-color;background-image:url(" + n(383) + "),linear-gradient(180deg,custom-color-light,custom-color);background-repeat:no-repeat;background-position:50%;border-color:custom-color}#intercom-container .intercom-new-email-confirmation-padding input[type=submit]{top:4px}#intercom-container .intercom-art-emp-email-form{position:relative;background-color:#fff;border-radius:1px;border:0;box-shadow:-1px -1px 2px 0 rgba(0,0,0,.1),1px 1px 2px 0 rgba(0,0,0,.1)}#intercom-container .intercom-art-emp-email-text-container{display:table;height:100%;min-height:65px;margin-left:12%}#intercom-container .intercom-art-emp-email-text-container p{height:30px;text-align:left;display:table-cell;vertical-align:middle;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500}#intercom-container .intercom-art-emp-email-icon-container{position:absolute;height:33px;margin-top:-16px;top:50%;width:15%}#intercom-container .intercom-art-emp-email-form-container{width:88%;margin-left:12%}#intercom-container .intercom-art-emp-email-form-container p{text-align:left;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;padding-bottom:8px}#intercom-container .intercom-art-emp-response-container{padding:0;border:none}#intercom-container .intercom-art-emp-response-container .intercom-art-emp-email-form{padding:16px}#intercom-container .intercom-art-emp-email-form-container input[type=email]{border:1px solid #cfd8dc;border-radius:4px;font-size:14px}#intercom-container .intercom-art-emp-email-form-container input[type=email]:focus{border-color:#74beff;box-shadow:0 0 4px 0 rgba(75,171,255,.38)}#intercom-container .intercom-art-emp-email-form-container input[type=email]:focus.intercom-new-anonymous-user-email-invalid{border-color:#d76060;box-shadow:none}#intercom-container .intercom-art-emp-email-input{position:relative}#intercom-container input[type=submit].intercom-art-emp-email-submit{position:absolute;top:3px;right:3px;height:26px;width:35px}#intercom-container input[type=submit].intercom-art-emp-email-submit:disabled{background:custom-color;background-image:url(" + n(383) + '),linear-gradient(180deg,custom-color-light,custom-color);background-repeat:no-repeat;background-position:50%;border-color:custom-color}#intercom-container .intercom-composer{z-index:2147483001;position:absolute;bottom:0;left:0;right:0;max-width:336px;margin:0 auto;padding:16px}#intercom-container .intercom-composer.intercom-composer-inactive{display:none}#intercom-container .intercom-powered-by-enabled .intercom-composer{padding:8px 6px 0}#intercom-container .intercom-conversation-announcement .intercom-composer{width:616px;max-width:616px}#intercom-container .intercom-composer-upload-error{display:none;padding-bottom:10px;text-align:center;color:#c00;font-size:13px}#intercom-container .intercom-composer-textarea-container{min-height:32px}#intercom-container .intercom-composer-disabled .intercom-composer-textarea-container{opacity:.5}#intercom-container .intercom-composer-textarea{position:relative;overflow:hidden;border-radius:4px;border:1px solid #cfd8dc}#intercom-container .intercom-composer-textarea pre,#intercom-container .intercom-composer-textarea textarea{box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;min-height:40px;max-height:200px;width:100%;height:100%;padding:10px 70px 5px 14px;border-radius:4px}#intercom-container .intercom-composer-textarea textarea{background:#fff;position:absolute;top:0;left:0;font-weight:400;color:#455a64;resize:none;border:none}#intercom-container .intercom-composer-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea::-moz-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea:active,#intercom-container .intercom-composer-textarea textarea:focus{box-shadow:inset 0 2px 1px rgba(0,0,0,.06)}#intercom-container .intercom-composer-textarea pre>span,#intercom-container .intercom-composer-textarea textarea{white-space:pre;white-space:pre-wrap;word-wrap:break-word}#intercom-container .intercom-composer-textarea pre{margin:0}#intercom-container .intercom-composer-textarea pre>span{visibility:hidden}#intercom-container .intercom-composer-textarea.intercom-composer-focused{border-color:#74beff;box-shadow:0 0 4px 0 rgba(75,171,255,.38)}#intercom-container .intercom-composer-send-button{border-radius:4px;font-size:13px;margin-left:8px;height:40px;float:right;display:none}#intercom-container .intercom-composer-action-button{z-index:2147483001;opacity:.4;background-position:50%;display:none;height:15px;width:15px;position:relative;float:right;cursor:pointer;top:7px;margin:0 2px 0 0;padding:5px}#intercom-container .intercom-composer-action-button:first-child{margin-right:12px}#intercom-container .intercom-composer-action-button.intercom-composer-emoji-button-active,#intercom-container .intercom-composer-action-button:hover{opacity:.8;transition:opacity .2s linear}#intercom-container .intercom-composer-upload-button{background-image:url(' + n(384) + ");background-size:15px 14px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-composer-upload-button{background-image:url(" + n(385) + ")}}#intercom-container .intercom-composer-emoji-button{z-index:2147483001;opacity:.4;background-image:url(" + n(386) + ");background-size:15px 15px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-composer-emoji-button{background-image:url(" + n(387) + ')}}#intercom-container .intercom-conversation-announcement .intercom-composer{border:1px solid #dadee2;border-bottom:none;border-radius:4px 4px 0 0}#intercom-container .intercom-composer-press-enter-to-send{display:none;text-align:right;width:100%;box-sizing:border-box;line-height:22px;color:#b6c2c9;font-size:13px}#intercom-container .intercom-powered-by-enabled .intercom-composer-press-enter-to-send{position:absolute;padding-bottom:2px;bottom:0;left:8px;right:8px;width:auto}@media (max-width:700px){#intercom-container .intercom-conversation-announcement .intercom-composer{box-sizing:border-box;width:100%;border:none;border-radius:0}}#intercom-container.intercom-embed-container .intercom-composer{box-sizing:border-box;width:100%}#intercom-container.intercom-embed-container .intercom-conversation-announcement .intercom-composer{width:95%}#intercom-container .intercom-emoji-selector{z-index:2147483001;box-shadow:0 0 3px 1px rgba(0,0,0,.1);background-color:#fff;border-radius:3px;border:1px solid #d0d4d8;position:absolute;bottom:calc(100% - 13px);right:10px;margin:0 0 16px;display:none;font-size:22px}#intercom-container .intercom-emoji-selector:after,#intercom-container .intercom-emoji-selector:before{top:100%;right:26px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-emoji-selector:after{border-color:hsla(0,0%,94%,0);border-top-color:#fff;border-width:7px;margin-right:-12px}#intercom-container .intercom-emoji-selector:before{border-color:hsla(0,0%,67%,0);border-top-color:#aaa;border-width:8px;margin-right:-13px}#intercom-container .intercom-emoji-selector-panel-small{background-color:#fff;width:144px;line-height:0;bottom:0;border-radius:3px}#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image{background-image:url(' + n(388) + ");background-size:464px 464px;background-repeat:no-repeat;border-radius:3px;border:10px solid;color:#fff;background-color:#fff;border-color:#fff;cursor:pointer}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image{background-image:url(" + n(389) + ')}}#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image:hover{background-color:#ededed;border-color:#ededed;color:#ededed}#intercom-container .intercom-emoji-selector-panel-large{box-shadow:0 -1px 3px 0 rgba(0,0,0,.1);background-color:#fff;height:220px;width:322px;overflow-y:auto;display:none;border-radius:0 0 3px 3px}#intercom-container .intercom-emoji-selector-panel-large.active{display:block}#intercom-container .intercom-emoji-selector-panel-large .intercom-emoji-icon{color:#60686e;margin:5px;width:30px;line-height:30px;display:inline-table;text-align:center;cursor:pointer}#intercom-container .intercom-emoji-selector-panel-large .intercom-emoji-icon:hover{background-color:#ededed}#intercom-container .intercom-large-emoji-panel-top-mask{background:linear-gradient(#fff,hsla(0,0%,100%,0) 20px);height:20px;width:100%;position:absolute;top:35px;left:0;content:"";pointer-events:none;display:none}#intercom-container .intercom-large-emoji-panel-bottom-mask{background:linear-gradient(hsla(0,0%,100%,0),#fff 20px);height:20px;width:100%;position:absolute;bottom:0;left:0;content:"";border-radius:0 0 3px 3px;pointer-events:none;display:block}#intercom-container .intercom-emoji-selector-panel-header{background-color:#fafafb;height:35px;width:322px;text-align:center;border-radius:3px}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon{z-index:2147483001;position:relative;color:#60686e;line-height:30px;width:45px;margin-top:5px;text-align:center;display:inline-block;border-radius:3px 3px 0 0;cursor:pointer}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon:hover{background-color:#ededed}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon.active{z-index:2147483002;background-color:#fff;box-shadow:0 -1px 3px 0 rgba(0,0,0,.1);border-bottom:none}#intercom-container .intercom-lwr-composer{width:100%;height:54px;border-top:1px solid #e4e5e7;display:none;overflow:hidden;min-width:120px}#intercom-container .intercom-lwr-composer-active{display:block}#intercom-container .intercom-lwr-composer-options:after,#intercom-container .intercom-lwr-composer-options:before{content:" ";display:table}#intercom-container .intercom-lwr-composer-options:after{clear:both}#intercom-container .intercom-lwr-composer-option{background-color:#fdfdfd;position:relative;float:left;height:54px}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option,#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option svg{cursor:pointer}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover{background-color:#f7f7f7}#intercom-container .intercom-lwr-composer-option svg{position:absolute;left:50%;top:50%;width:16px;height:16px;margin-left:-8px;margin-top:-8px;background-color:transparent;shape-rendering:geometricPrecision}#intercom-container .intercom-lwr-composer-options-thumbs .intercom-lwr-composer-option{width:50%}#intercom-container .intercom-lwr-composer-options-emotions .intercom-lwr-composer-option{width:33.33%}#intercom-container .intercom-lwr-composer-option-selected .intercom-lwr-composer-icon{fill:custom-color}#intercom-container .intercom-lwr-composer-option .intercom-lwr-option-background{fill:#fdfdfd}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover .intercom-lwr-option-background{fill:#f7f7f7}#intercom-container .intercom-powered-by{width:100%;color:#b0bec5;text-align:center;clear:both;font-weight:500;line-height:22px;padding:7px}#intercom-container .intercom-powered-by span{font-size:13px;text-decoration:none}#intercom-container .intercom-powered-by u{text-decoration:underline}#intercom-container .intercom-powered-by a:active,#intercom-container .intercom-powered-by a:active u,#intercom-container .intercom-powered-by a:hover,#intercom-container .intercom-powered-by a:hover u{color:#b0bec5}#intercom-container .intercom-upload-remove{background-image:url(' + n(390) + ");background-size:14px 14px;background-repeat:no-repeat;opacity:.8;display:inline-block;vertical-align:middle;cursor:pointer;width:14px;height:14px;right:-22px;top:2px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-upload-remove{background-image:url(" + n(391) + ')}}#intercom-container .intercom-upload-remove:hover{opacity:1}#intercom-container .intercom-unread-counter{border-radius:50%;border:2px solid #fff;font-size:11px;line-height:16px;background-color:custom-color;text-align:center;color:#fff;position:absolute;width:16px;height:16px;top:11px;left:11px;cursor:pointer;display:none}#intercom-container .intercom-unread-counter.intercom-unread-counter-active{display:block}#intercom-container .intercom-is-typing:after,#intercom-container .intercom-is-typing:before{content:" ";display:table}#intercom-container .intercom-is-typing:after{clear:both}#intercom-container .intercom-is-typing-icon{background-image:url(' + n(392) + ");background-size:38px 18px;background-repeat:no-repeat;height:18px;cursor:default}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-is-typing-icon{background-image:url(" + n(393) + ")}}#intercom-container .intercom-is-typing .intercom-comment-body{min-width:38px;padding-left:12px}#intercom-container.intercom-ie8 .intercom-sheet-content{clip:rect(-9999px,9999px,9999px,-9999px)}#intercom-container.intercom-ie8 .intercom-conversation,#intercom-container.intercom-ie8 .intercom-conversations,#intercom-container.intercom-ie8 .intercom-sheet-loading{border-left:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-app-profile,#intercom-container.intercom-ie8 .intercom-sheet-header{border-bottom:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-composer,#intercom-container.intercom-ie8 .intercom-sheet-footer{border-top:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-button-with-avatar,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-button-with-avatar{display:none}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-button-without-avatar,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-button-without-avatar{visibility:visible}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-badge{right:0}#intercom-container.intercom-ie8 .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover,#intercom-container.intercom-ie8 .intercom-lwr-composer-option-selected.intercom-lwr-composer-option{background-color:#f7f7f7}#intercom-container.intercom-ie8 .intercom-comment{display:block;float:none;max-width:100%;width:100%;box-sizing:border-box}#intercom-container.intercom-ie8 .intercom-comment-by-admin .intercom-comment-body-container,#intercom-container.intercom-ie8 .intercom-comment-by-user .intercom-comment-body-container{max-width:272px;float:right;clear:both}#intercom-container.intercom-ie8 .intercom-comment-metadata-container{clear:both}#intercom-container.intercom-ie8 .intercom-comment-by-admin .intercom-comment-body-container{float:left}#intercom-container.intercom-ie8 .intercom-lwr-composer-option svg{display:none}#intercom-container.intercom-ie8 .intercom-lwr-composer-option .intercom-lwr-icon{position:absolute;left:50%;top:50%;width:18px;height:18px;margin-left:-9px;margin-top:-9px;background-repeat:no-repeat}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-thumbs-up .intercom-lwr-icon{background-image:url(" + n(394) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-thumbs-down .intercom-lwr-icon{background-image:url(" + n(395) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-happy .intercom-lwr-icon{background-image:url(" + n(396) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-neutral .intercom-lwr-icon{background-image:url(" + n(397) + ")}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-sad .intercom-lwr-icon{background-image:url(" + n(398) + ")}#intercom-container.intercom-ie8 .intercom-autoresponse-icon{border:none;background-color:#fafafa}#intercom-container.intercom-ie8 .intercom-autoresponse-icon i{background:url(" + n(399) + ");width:32px;height:32px;margin:2px}@-webkit-keyframes intercom-launcher-show-avatar{0%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-launcher-show-avatar{0%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes intercom-launcher-hide-and-show-avatar{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1);background-color:transparent;border-color:transparent}}@-keyframes intercom-launcher-hide-and-show-avatar{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1);background-color:transparent;border-color:transparent}}@-webkit-keyframes intercom-launcher-show-badge{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}50%{opacity:0}75%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-launcher-show-badge{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}50%{opacity:0}75%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes intercom-launcher-show-preview{0%{opacity:0;-webkit-transform:translate(10px);transform:translate(10px)}50%{-webkit-transform:translate(-5px) scale(1.05);transform:translate(-5px) scale(1.05)}to{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-keyframes intercom-launcher-show-preview{0%{opacity:0;-webkit-transform:translate(10px);transform:translate(10px)}50%{-webkit-transform:translate(-5px) scale(1.05);transform:translate(-5px) scale(1.05)}to{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-webkit-keyframes intercom-launcher-update-preview{0%{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}50%{-webkit-transform:translate(-5px) scale(.95);transform:translate(-5px) scale(.95)}to{opacity:0;-webkit-transform:translate(10px) scale(0);transform:translate(10px) scale(0)}}@-keyframes intercom-launcher-update-preview{0%{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}50%{-webkit-transform:translate(-5px) scale(.95);transform:translate(-5px) scale(.95)}to{opacity:0;-webkit-transform:translate(10px) scale(0);transform:translate(10px) scale(0)}}@-webkit-keyframes intercom-launcher-minimize{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-keyframes intercom-launcher-minimize{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes intercom-launcher-maximize{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-launcher-maximize{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}#intercom-container .intercom-launcher.intercom-launcher-minimized{transition:opacity,.1s}#intercom-container .intercom-launcher.intercom-launcher-minimized .intercom-launcher-button{-webkit-animation:intercom-launcher-minimize .1s linear 0s both;animation:intercom-launcher-minimize .1s linear 0s both;transition:background-image 0s linear .1s}#intercom-container .intercom-launcher.intercom-launcher-maximized .intercom-launcher-button{-webkit-animation:intercom-launcher-maximize .1s linear 0s both;animation:intercom-launcher-maximize .1s linear 0s both}#intercom-container .intercom-launcher.intercom-launcher-with-updated-avatar .intercom-launcher-button{-webkit-animation:intercom-launcher-show-avatar .15s ease-out 1s both;animation:intercom-launcher-show-avatar .15s ease-out 1s both}#intercom-container .intercom-launcher-enabled.intercom-launcher-with-updated-avatar .intercom-launcher-button,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-updated-avatar .intercom-launcher-button{-webkit-animation:intercom-launcher-hide-and-show-avatar .3s ease-out 1s both;animation:intercom-launcher-hide-and-show-avatar .3s ease-out 1s both;transition:background-image 0s linear 1.15s,background-size 0s linear 1.15s,border-width 0s linear 1.15s}#intercom-container .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-badge{-webkit-animation:intercom-launcher-show-badge .3s ease-out 1.5s both;animation:intercom-launcher-show-badge .3s ease-out 1.5s both}#intercom-container .intercom-launcher-enabled.intercom-launcher-with-updated-avatar.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher.intercom-launcher-with-updated-avatar.intercom-launcher-with-initials .intercom-launcher-initials{-webkit-animation:intercom-launcher-show-avatar .3s ease-out 1s both;animation:intercom-launcher-show-avatar .3s ease-out 1s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-preview{-webkit-animation:intercom-launcher-show-preview .3s ease-in-out 1.5s both;animation:intercom-launcher-show-preview .3s ease-in-out 1.5s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-update-preview{-webkit-animation:intercom-launcher-update-preview .3s ease-out 1s both;animation:intercom-launcher-update-preview .3s ease-out 1s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-preview-close{transition:opacity .1s ease-in}#intercom-container .intercom-conversation-parts{transition:opacity .2s}#intercom-container .intercom-conversation-preview .intercom-sheet-header,#intercom-container .intercom-sheet-loading .intercom-conversation-parts{transition:none}@-webkit-keyframes intercom-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-keyframes intercom-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{-webkit-animation:intercom-spin 1s infinite linear;animation:intercom-spin 1s infinite linear}@-webkit-keyframes intercom-lwr-composer-option-bounce{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes intercom-lwr-composer-option-bounce{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}#intercom-container .intercom-lwr-composer-option-pop svg{-webkit-animation:intercom-lwr-composer-option-bounce .2s ease-in 0 both;animation:intercom-lwr-composer-option-bounce .2s ease-in 0 both}#intercom-container .intercom-announcement a.intercom-h2b-button,#intercom-container .intercom-announcement a.intercom-h2b-button:hover,#intercom-container .intercom-small-announcement a.intercom-h2b-button,#intercom-container .intercom-small-announcement a.intercom-h2b-button:hover{transition:background-color .05s linear}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button,#intercom-container .intercom-browser-notification-button,#intercom-container .intercom-composer-send-button,#intercom-container .intercom-conversations-new-conversation-button,#intercom-container .intercom-new-anonymous-user input[type=submit],#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{transition:background-color .1s linear}#intercom-container .intercom-sheet{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:bottom right;transform-origin:bottom right;transition:opacity .1s linear .15s,-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out,opacity .1s linear .15s;transition:transform .25s ease-in-out,opacity .1s linear .15s,-webkit-transform .25s ease-in-out}#intercom-container .intercom-sheet-minimized{-webkit-transform:scale(0);transform:scale(0);transition:opacity .1s linear,visibility 0s linear .25s,-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out,opacity .1s linear,visibility 0s linear .25s;transition:transform .25s ease-in-out,opacity .1s linear,visibility 0s linear .25s,-webkit-transform .25s ease-in-out}#intercom-container .intercom-emoji-sub-icon{background-image:url(" + n(388) + ");background-size:464px 464px;background-repeat:no-repeat;position:relative;top:2px;margin:1px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-emoji-sub-icon{background-image:url(" + n(389) + ")}}#intercom-container .intercom-sticker-comment-body{padding:0}#intercom-container .intercom-sticker-user-comment,#intercom-container .intercom-sticker-user-comment .intercom-comment-metadata,#intercom-container .intercom-sticker-user-comment .intercom-sticker-comment-body{float:right}#intercom-container .intercom-sticker-admin-comment{padding-left:38px}#intercom-container .intercom-sticker-image{width:96px;height:96px;min-width:96px;min-height:96px}#intercom-container .intercom-sticker-native{font-size:96px;line-height:1.1}#intercom-container .intercom-interblocks-video-reply{display:block;width:100%;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,.8);z-index:0;background-color:#000}#intercom-container .intercom-video-reply{position:relative}#intercom-container .intercom-video-reply:hover div{opacity:1;transition:opacity .4s ease}#intercom-container .intercom-video-reply-controls{position:absolute;bottom:0;height:64px;width:100%;z-index:1}#intercom-container .intercom-video-reply-controls-shading{position:absolute;opacity:0;background-image:linear-gradient(transparent,rgba(0,0,0,.7));height:100%;width:100%}#intercom-container .intercom-video-reply-controls-bar{position:absolute;width:100%;height:40px;bottom:0}#intercom-container .intercom-video-reply-controls-playpausebutton{position:absolute;width:39px;left:0;height:100%;opacity:0;background-position:50%;cursor:pointer}#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-paused{background-image:url(" + n(400) + ");background-size:11px 12px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-paused{background-image:url(" + n(401) + ")}}#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-unpaused{background-image:url(" + n(402) + ");background-size:10px 12px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-unpaused{background-image:url(" + n(403) + ")}}#intercom-container .intercom-video-reply-controls-mutebutton{position:absolute;width:45px;height:100%;right:0;background-position:50%;cursor:pointer}#intercom-container .intercom-video-reply-controls-mutebutton.intercom-muted{opacity:1;background-image:url(" + n(404) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-mutebutton.intercom-muted{background-image:url(" + n(405) + ")}}#intercom-container .intercom-video-reply-controls-mutebutton.intercom-unmuted{opacity:0;background-image:url(" + n(406) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-mutebutton.intercom-unmuted{background-image:url(" + n(407) + ")}}#intercom-container .intercom-video-reply-controls-progressbar{position:absolute;height:2px;width:180px;bottom:19px;left:39px;opacity:0;border-radius:1px;background:hsla(0,0%,100%,.5)}#intercom-container .intercom-image-only-comment-body{padding:0;margin:10px 0}#intercom-container .intercom-image-only-comment-body img{border-radius:4px}#intercom-container .intercom-image-only-user-comment,#intercom-container .intercom-image-only-user-comment .intercom-comment-metadata{float:right}#intercom-container .intercom-image-only-admin-comment{padding-left:38px}#intercom-container .intercom-interblocks-content-card{display:none;width:334px;max-height:136px;max-width:100%;overflow:hidden;border-radius:20px;font-size:16px;border:1px solid #e0e0e0}#intercom-container .intercom-interblocks-content-card:hover{box-shadow:0 2px 4px rgba(0,0,0,.5)}#intercom-container .intercom-interblocks-article-icon{width:22.5%;height:136px;float:left;background-color:#fafafa;background-image:url(" + n(408) + ');background-repeat:no-repeat;background-size:32px;background-position:50%}#intercom-container .intercom-interblocks-article-text{width:77.5%;float:right;background-color:#fff}#intercom-container .intercom-interblocks-article-title{color:#455a64;height:40px;margin:10px 15px;line-height:1.3;font-weight:700;overflow:hidden}#intercom-container .intercom-interblocks-article-body{color:#74848b;height:30px;margin:10px 15px;font-size:12px;font-weight:500;line-height:1.3;overflow:hidden}#intercom-container .intercom-interblocks-article-author{margin:10px 15px;height:24px;line-height:normal}#intercom-container .intercom-interblocks-article-author-avatar{width:16px;height:16px;display:inline-block;vertical-align:middle}#intercom-container img.intercom-interblocks-article-author-avatar-image{width:16px;height:16px;border-radius:50%;margin:0}#intercom-container .intercom-interblocks-article-author-name{color:#74848b;line-height:1.2;margin:0 0 0 5px;display:inline-block;font-size:12px;font-weight:500;overflow:hidden;vertical-align:middle}@-webkit-keyframes fade-in{0%{opacity:0}25%{opacity:0}50%{opacity:0}75%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}25%{opacity:0}50%{opacity:0}75%{opacity:0}to{opacity:1}}.intercom-prevent-scroll{overflow:hidden}.intercom-installation-overlay{z-index:2147482999;position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:rgba(53,53,53,.9);text-align:center;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.75s;animation-duration:.75s}.intercom-installation-content{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#fff;font-size:16px;font-family:Helvetica,sans-serif;font-weight:700;text-align:inherit}.intercom-installation-icon{width:50px;height:50px;background:#65cc93;border-radius:50%;display:inline-block;background-size:25px 21px;background-position:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAAAXNSR0IArs4c6QAAAutJREFUaAXVmUloVEEQhidGXCBeogdxQQTxIrgggqgREQRFEQRB0ZOQQ0RB8OAhag6e3fCsghdvLkcFMV7FswsibicVJe5LRCdfQx5pXup1V/VMXjoNP9Ov+q+q/0+GTE2n0Zgiq9lsHgaXQMcUkTxeJuL3g3/Arctg2nhW5hFE7wDDwF/XeZieufQxeYjdBH74Drz9LfYzxtiZ7hC5Cnz2hEvbOwRnZ2qh0UDcMvBOUi7EHhDrys4MohaCV8Cy7mZlBOVzwWOLA7g/weZsjCCmCzwElvUX8q6cTMxE0D2LA7j/wcGcTHQi6KbRhKMfzclEB4KuJpg4lY0JJwQD5xJMXMzNxMkEE9fIyWdoRExfgonb5OQzXyHGn2S1fgYhzsrmLYUYaZKNmXkEYU6yCZK7k5OFROptBFWTLEfiekJ0nlBOFyJ5KXgLzugywizquEl2CFjWG8iLwpUDpyQvAa9BsQYC9OgRRSyTbNHzPZvl0eJVBJIXg5dFNe+1vyonFCc/ZZL9Qt6aUN3g2WjTF5748vZEsEDpkORukDLJ9pRK6R9puAA8B7F1XFOVIqmT7E5NfZFD0/ngWcyBd35MLDQahDc5kyyNBz2R2u0RyQzJbpK9oS3i8cR6Uo/KGMVWgA9eUc3WfRfoKxcldkWTXOKcLtdJfqbwSvCx1CD26Mz0Fk3Zn40lCOcXivy2vdJkNfgkNAuFnJlDoD9EqjibuEmWhmuB9RO4uMqs0CuG3STb2bbfglSIButA7GJMVKcM3odXzyRLo/Xgq1KYhdbaJCv95GMx1G0A3ywqI9ynnKdPsjHBoXMa94DvEYGa49Ym2ZBI7RkqtwDr9wjfXGuTrFaohoeqrcBdTVqX+6ORPslqxFk5CNoGfhmcOOPpk6xVoIWPsO3gt8KMu5NNn2QtolK5TiD4EzDjPu0PpNavNQ+hu8FwhZnWJ9k63WBiD3BvIX+1b5Kt2cxeXBRmztfZu+29MLIPuP99T+qd7AgPy3DCIsoWuwAAAABJRU5ErkJggg==)}.intercom-installation-heading{font-size:30px;font-weight:700;text-align:inherit;margin:20px 0}.intercom-installation-message{font-weight:700;text-align:inherit;margin:10px 0}.intercom-installation-message:before{content:\'\\2014\';margin-right:5px}.intercom-installation-button{margin-top:20px;padding:1.3em 2.2em;border:1px solid #fff;border-radius:20%/50%;background:none;font-size:12px;color:#fff;text-transform:uppercase;cursor:pointer;outline:0}.intercom-installation-button:hover{color:#ddd;border-color:#ddd}.intercom-installation-arrow{position:absolute;right:85px;bottom:32px;width:40px;height:40px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABeJJREFUeAHtnG2oFFUYx+9qaUFvlr1qpJZJL3YDKygSK7EXjajECK5ElERCkBVGUMQNevlSVB/6VJTUhwpKqChCUlIyRE0uJdKrKBFo9iJadhPz9vvv3VmOszN7Zs7uzM7unAeee87MOc/znOfnmd2ZOWftGxkZmYge2+fFicAYrE5G+52svVGfAJ6IzvIs3AgI4AkeoBs8WQUzcLa7i3JbBgDP44vkonKjcMteAINv4NvcXJTbSgAP1BDcWm4UbtkL4P6a6Swu4+lubsprZQIUhQfKi8Ixc2bdlWgg+6gc7+iqlGaagX8ZmQve3caxr9oIMONOC6ZfrfyJcpzNzrcbBAC2NwTxQaPZV20EgLcxBHAPx3pG9mIhoM9AyfejRf3vRGqP1Y98JZZAHEAZLGMWzoi19A1VAs0AHkOPFUAc61lZCABpChonj1rMfbMIQG9nDMFhzl/oKUUTCC5hta6N7tI3nvPvAdE/oUQAMgF+HtEenLqAyltArAQnfBkiAJxzUZsMhsz8oUkAetstBA/Tvsi08XWDAHCetQBU80F0vmHmqwEBwMwUoQTyD32uDex8aRAAzNYEANVlP3qVYVrKqvktHAB4O6hYyuNoXwXEBZZ+5WoGyDRUXxZJ5RAdl5SLkiVbgHyUlJ7Rb9DitjzNQJljgElTfZ/O/j2ipgogNqUhZ/TVkkBhNisxlns6MvUJfKcBJW31XwwKsUTKOIbQ53KHSNCx6A60FVmDcUcX64kvgJInOwHxrtHYLf3VTfcT6NG5J0BA4gYAlcTyXMdAwAq6WZHbILpBvyHXBBoBKo18P1oIOFtR2yhr8XV1XiCJZc5ApaF73Hvzil+NQ0C9UG23fIzDy7NOhBhhgMrjP3Qg69h1/wTT04le7WchG3C6GM1kNwR+owAqDz1BLawnmXWFYMsVNUPZje9n0BntzAV/cQCVil7N3dzOeLG+CDQGXYfmId8QZBCdGTughA34aAZQuejKmpfQXUO3VGscBJqKh69RvYnJS34k0Br0C3R9pVLZniYwYx6if7/FRrt0b8L3Oku/huZUAGXNgPTm5dUGT/md2EWo9eg2VHCrSvK/Um+QhABlp5261+NnQ4OTJidSA5QvBrWSomib0gVgD6pSex6Dci71CWgS2UunuUDckqSz+rgC1CWsWXCJnPSY/E4+1wBxa5K8nADKMbPwHIpN6Kk67jHZTT5zgPidLa+oV/o2m2o7zndSuR09mMiguzqdznBXM0mm2YbtDFCOgahvxvttQbq0fRLjFsSzm42/JYByDMQ3KJY1C9LFbVMYuyCeGZdDywDlGIgvUzwUF6TLz09n/J8BMfKzvi0ABQiIL1E8rHoPirb3aQm34XaobQAFDYgvUjyCjui4x+RS8vkUiPp9dV2cb2PqHiIqBLmD0yvQ4JegEb269pS+OG9ksvytDDIBKMdAvIziA/QsHfeY6Nl8ARCH23oJm5BwvpnjK9CvzPM9Ur+OPKpbYDIDKFBA/IVC/53AazruITlELm8qn8wu4TAsLmntKRTI2HuqsE1Bjw8zrgEmxzsaX6Yz0ARAwE84vhh91zzfZXXdXSwJ4HVs7MzGRWjczypoKqws7Ri0cGAQjUe1zvJHYXEdObBiPiQwxgno82hWq35HYnA7ejw8AQp3TF6TUa3KaXWuSPJ04WA1GxDkxqED6JcFoPhCs7EWvg2A/ehT6JYOwHyl8IDSDBCAk9D70A/RrL94XidGonvkRJ3SJJpXXxKcTCwtvGthS6pXTvql/UloK+vWekRbzL2ebpjLKcDV5tBTUP3+71s0qayk41HlpBaTNUBsWzsCuNotlnqDU26PcjH5FeX0agaykMs29QqjBzi65+YW4A27/GuWHeBGoM0H3gEXeLIpM8Ah8teree2hcZayAtwGsXnA+9OZXM2wjAB/IHftwPqtVXiyLxvAHeQseNpj6CUJAeM+8GfqU5PY+D4GgRrAXZTnG6d9NSkBwGlfi9ZivLgQAN4ZLnbeJicC/wMLmKUehkIagAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:40px 40px}#intercom-container .intercom-sheet-loading .intercom-app-profile-container{visibility:hidden}#intercom-container .intercom-app-profile-container.new-intercom-app-profile-container{padding:0}#intercom-container .intercom-app-profile{padding:20px 12px 26px;background-color:#fff;overflow:hidden;box-shadow:0 0 3px rgba(0,0,0,.2);border-radius:5px}#intercom-container .intercom-app-profile.new-intercom-app-profile{border-radius:0}#intercom-container .intercom-app-profile-team{text-align:center;color:#455a64;font-weight:500;font-size:15px;line-height:1.8}#intercom-container .intercom-app-profile-expectations .intercom-last-active,#intercom-container .intercom-app-profile-expectations .intercom-proactive-response-time{position:relative;bottom:auto;color:#90a4ae}#intercom-container .intercom-active-admins{text-align:center;color:#364850;padding-top:24px}#intercom-container .intercom-active-admin{display:inline-block}#intercom-container .intercom-admin-avatar,#intercom-container .intercom-admin-avatar img{width:48px;height:48px}#intercom-container .intercom-admin-fallback-avatar{line-height:48px;font-size:19.2px}#intercom-container .intercom-app-profile-text{padding:14px 30px 0;text-align:center;font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-app-profile-text .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-app-profile-text .intercom-container,#intercom-container .intercom-app-profile-text a,#intercom-container .intercom-app-profile-text blockquote,#intercom-container .intercom-app-profile-text code,#intercom-container .intercom-app-profile-text h1,#intercom-container .intercom-app-profile-text h2,#intercom-container .intercom-app-profile-text h3,#intercom-container .intercom-app-profile-text h4,#intercom-container .intercom-app-profile-text h5,#intercom-container .intercom-app-profile-text h6,#intercom-container .intercom-app-profile-text ol,#intercom-container .intercom-app-profile-text p,#intercom-container .intercom-app-profile-text ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-app-profile-text .intercom-container:first-child,#intercom-container .intercom-app-profile-text a:first-child,#intercom-container .intercom-app-profile-text blockquote:first-child,#intercom-container .intercom-app-profile-text code:first-child,#intercom-container .intercom-app-profile-text h1:first-child,#intercom-container .intercom-app-profile-text h2:first-child,#intercom-container .intercom-app-profile-text h3:first-child,#intercom-container .intercom-app-profile-text h4:first-child,#intercom-container .intercom-app-profile-text h5:first-child,#intercom-container .intercom-app-profile-text h6:first-child,#intercom-container .intercom-app-profile-text ol:first-child,#intercom-container .intercom-app-profile-text p:first-child,#intercom-container .intercom-app-profile-text ul:first-child{margin-top:0}#intercom-container .intercom-app-profile-text .intercom-container:last-child,#intercom-container .intercom-app-profile-text a:last-child,#intercom-container .intercom-app-profile-text blockquote:last-child,#intercom-container .intercom-app-profile-text code:last-child,#intercom-container .intercom-app-profile-text h1:last-child,#intercom-container .intercom-app-profile-text h2:last-child,#intercom-container .intercom-app-profile-text h3:last-child,#intercom-container .intercom-app-profile-text h4:last-child,#intercom-container .intercom-app-profile-text h5:last-child,#intercom-container .intercom-app-profile-text h6:last-child,#intercom-container .intercom-app-profile-text ol:last-child,#intercom-container .intercom-app-profile-text p:last-child,#intercom-container .intercom-app-profile-text ul:last-child{margin-bottom:0}#intercom-container .intercom-app-profile-text h1,#intercom-container .intercom-app-profile-text h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-app-profile-text h2,#intercom-container .intercom-app-profile-text h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-app-profile-text ol,#intercom-container .intercom-app-profile-text ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-app-profile-text [dir=ltr] ol,#intercom-container .intercom-app-profile-text [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-app-profile-text [dir=rtl] ol,#intercom-container .intercom-app-profile-text [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-app-profile-text ul>li{list-style-type:disc}#intercom-container .intercom-app-profile-text ol>li{list-style-type:decimal}#intercom-container .intercom-app-profile-text li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-app-profile-text em,#intercom-container .intercom-app-profile-text i{font-style:italic}#intercom-container .intercom-app-profile-text b,#intercom-container .intercom-app-profile-text strong{font-weight:700;line-height:100%}#intercom-container .intercom-app-profile-text pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-app-profile-text img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-app-profile-text p+br{display:none}#intercom-container .intercom-app-profile-text a:active,#intercom-container .intercom-app-profile-text a:hover,#intercom-container .intercom-app-profile-text a:link,#intercom-container .intercom-app-profile-text a:visited{text-decoration:underline}#intercom-container .intercom-app-profile-text a:link,#intercom-container .intercom-app-profile-text a:visited{color:custom-color}#intercom-container .intercom-app-profile-text a:active,#intercom-container .intercom-app-profile-text a:hover{color:custom-color-darker}#intercom-container .intercom-app-profile-text h2+.ic_button_in_content,#intercom-container .intercom-app-profile-text h2+.ic_social_block,#intercom-container .intercom-app-profile-text h2+blockquote,#intercom-container .intercom-app-profile-text h2+ol,#intercom-container .intercom-app-profile-text h2+p,#intercom-container .intercom-app-profile-text h2+ul,#intercom-container .intercom-app-profile-text h3+.ic_button_in_content,#intercom-container .intercom-app-profile-text h3+.ic_social_block,#intercom-container .intercom-app-profile-text h3+blockquote,#intercom-container .intercom-app-profile-text h3+ol,#intercom-container .intercom-app-profile-text h3+p,#intercom-container .intercom-app-profile-text h3+ul,#intercom-container .intercom-app-profile-text h4+.ic_button_in_content,#intercom-container .intercom-app-profile-text h4+.ic_social_block,#intercom-container .intercom-app-profile-text h4+blockquote,#intercom-container .intercom-app-profile-text h4+ol,#intercom-container .intercom-app-profile-text h4+p,#intercom-container .intercom-app-profile-text h4+ul,#intercom-container .intercom-app-profile-text h5+.ic_button_in_content,#intercom-container .intercom-app-profile-text h5+.ic_social_block,#intercom-container .intercom-app-profile-text h5+blockquote,#intercom-container .intercom-app-profile-text h5+ol,#intercom-container .intercom-app-profile-text h5+p,#intercom-container .intercom-app-profile-text h5+ul,#intercom-container .intercom-app-profile-text h6+.ic_button_in_content,#intercom-container .intercom-app-profile-text h6+.ic_social_block,#intercom-container .intercom-app-profile-text h6+blockquote,#intercom-container .intercom-app-profile-text h6+ol,#intercom-container .intercom-app-profile-text h6+p,#intercom-container .intercom-app-profile-text h6+ul{margin-top:0}#intercom-container .intercom-app-profile-text .intercom-h2b-facebook,#intercom-container .intercom-app-profile-text .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-app-profile-text iframe[src*="vimeo.com"],#intercom-container .intercom-app-profile-text iframe[src*="wistia.net"],#intercom-container .intercom-app-profile-text iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-app-profile-text p{text-align:center;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-app-profile-text p a:link,#intercom-container .intercom-app-profile-text p a:visited{color:#78909c}#intercom-container .intercom-image-viewable{cursor:zoom-in}#intercom-container .intercom-zoomed-image{z-index:2147483004;position:fixed;cursor:zoom-out;transition:all .3s ease}#intercom-container .intercom-zoomed-image-placeholder{background-color:#e4e5e7;border-radius:4px}#intercom-container .intercom-image-viewer-overlay{z-index:2147483003;position:fixed;top:0;right:0;bottom:0;left:0;background:#000;cursor:zoom-out;opacity:0}#intercom-container .intercom-admin-avatar{overflow:hidden;text-align:center;background-color:#fff}#intercom-container .intercom-admin-avatar,#intercom-container .intercom-admin-avatar img{margin:0 auto;border-radius:50%}#intercom-container .intercom-admin-fallback-avatar{color:#fff;text-align:center;font-weight:500;background-color:custom-color}#intercom-container .intercom-knowledgebase-article-body{z-index:2147483004;position:fixed;top:10%;right:10%;bottom:10%;left:10%;height:80%;width:80%;max-width:640px;margin:0 auto;border-radius:5px}#intercom-container .intercom-knowledgebase-article-overlay{z-index:2147483003;position:fixed;top:0;right:0;bottom:0;left:0;background:#000;opacity:.8}#intercom-container .intercom-video-launcher-hovercard-textarea{left:17px;padding:0;position:absolute;transition:bottom .2s ease}#intercom-container .intercom-video-launcher-hovercard-textarea textarea{background-color:#fff;border:1px solid #cfd8dc;border-radius:4px;box-sizing:border-box;color:#455a64;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;height:42px;line-height:20px;padding:10px 10px 5px 14px;resize:none;width:200px;transition:opacity .2s ease}#intercom-container .intercom-video-launcher-hovercard-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-hovercard-textarea textarea::-moz-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-hovercard-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-video-area:before{content:"";position:absolute;width:100%;height:320px;background:linear-gradient(180deg,rgba(46,46,46,.5) 0,hsla(0,0%,48%,0) 17%,hsla(0,0%,48%,0) 65%,rgba(46,46,46,.4) 86%);border-radius:5px}#intercom-container .intercom-launcher-hovercard-videolauncher{position:absolute;right:-5px;bottom:64px;width:234px;overflow:hidden}#intercom-container .intercom-video-launcher-hovercard-video-plain{border-radius:5px;cursor:pointer;outline:0}#intercom-container .intercom-launcher-video-topbar{height:16px;left:17px;position:absolute;top:14px;width:200px}#intercom-container .intercom-launcher-video-topbar-status-text-container{left:30px;line-height:12px;position:absolute;top:-1px;transition:opacity .1s ease}#intercom-container .intercom-launcher-video-topbar-status-text{color:#fff;cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:18px}#intercom-container .intercom-launcher-video-topbar-status-icon-container{cursor:pointer}#intercom-container .intercom-launcher-video-topbar-status-icon{width:19px;height:18px;cursor:pointer}#intercom-container .intercom-launcher-video-topbar-muted-icon{background-image:url(' + n(404) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-muted-icon{background-image:url(" + n(405) + ")}}#intercom-container .intercom-launcher-video-topbar-unmuted-icon{background-image:url(" + n(406) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-unmuted-icon{background-image:url(" + n(407) + ")}}#intercom-container .intercom-launcher-video-topbar-replay-icon{background-image:url(" + n(409) + ");background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-replay-icon{background-image:url(" + n(410) + ")}}#intercom-container .intercom-launcher-video-topbar-close-icon{background-image:url(" + n(365) + ");background-size:15px 15px;background-repeat:no-repeat;background-position:50%;cursor:pointer;height:30px;width:30px;position:absolute;right:-6px;top:-4px;transition:opacity .1s ease}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-close-icon{background-image:url(" + n(366) + ')}}#intercom-container .intercom-launcher-video-muted-text,#intercom-container .intercom-launcher-video-replay-text,#intercom-container .intercom-launcher-video-unmuted-text{cursor:pointer}#intercom-container .intercom-launcher-video-topbar-text-muted{float:left;visibility:visible}#intercom-container .intercom-launcher-hovercard-video-overlay{background-color:#000;border-radius:5px;display:none;height:320px;opacity:.35;pointer-events:none;position:absolute;right:0;top:0;width:234px}#intercom-container .intercom-launcher-hovercard-video-overlay.intercom-launcher-hovercard-video-overlay-nocaret{height:320px}#intercom-container .intercom-launcher-overlay-admin-information-container{bottom:87px;display:none;height:48px;left:17px;position:absolute}#intercom-container .intercom-launcher-overlay-video-admin-avatar{border-radius:50%;cursor:pointer;display:inline-block;float:left;height:48px;vertical-align:top;width:48px}#intercom-container .intercom-launcher-overlay-video-admin-name{color:#fff;cursor:pointer;display:inline-block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;padding-left:5px}#intercom-container .intercom-video-launcher-admin-upload-time{color:#fff;cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;padding-bottom:5px}#intercom-container .intercom-sheet-loading .intercom-app-video-admin-profile-container{visibility:hidden}#intercom-container .intercom-admin-profile{box-shadow:0 0 3px rgba(0,0,0,.2);border-radius:5px;background-color:#fff}#intercom-container .intercom-app-profile-container{padding:16px 16px 0}#intercom-container .intercom-admin-profile-data-container{padding:20px 12px 12px;background-color:#fff;overflow:hidden}#intercom-container .intercom-admin-profile-data{text-align:center}#intercom-container .intercom-admin-profile-data .intercom-admin-avatar,#intercom-container .intercom-admin-profile-data .intercom-admin-avatar img{width:48px;height:48px}#intercom-container .intercom-admin-profile-data .intercom-admin-fallback-avatar{line-height:48px;font-size:19.2px}#intercom-container .intercom-active-admin-name{font-size:12px;color:#90a4ae;text-align:center;padding-top:7px;width:80px;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-admin-profile-text-container{padding-bottom:10px;text-align:center;font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-admin-profile-text-container .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-admin-profile-text-container .intercom-container,#intercom-container .intercom-admin-profile-text-container a,#intercom-container .intercom-admin-profile-text-container blockquote,#intercom-container .intercom-admin-profile-text-container code,#intercom-container .intercom-admin-profile-text-container h1,#intercom-container .intercom-admin-profile-text-container h2,#intercom-container .intercom-admin-profile-text-container h3,#intercom-container .intercom-admin-profile-text-container h4,#intercom-container .intercom-admin-profile-text-container h5,#intercom-container .intercom-admin-profile-text-container h6,#intercom-container .intercom-admin-profile-text-container ol,#intercom-container .intercom-admin-profile-text-container p,#intercom-container .intercom-admin-profile-text-container ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-admin-profile-text-container .intercom-container:first-child,#intercom-container .intercom-admin-profile-text-container a:first-child,#intercom-container .intercom-admin-profile-text-container blockquote:first-child,#intercom-container .intercom-admin-profile-text-container code:first-child,#intercom-container .intercom-admin-profile-text-container h1:first-child,#intercom-container .intercom-admin-profile-text-container h2:first-child,#intercom-container .intercom-admin-profile-text-container h3:first-child,#intercom-container .intercom-admin-profile-text-container h4:first-child,#intercom-container .intercom-admin-profile-text-container h5:first-child,#intercom-container .intercom-admin-profile-text-container h6:first-child,#intercom-container .intercom-admin-profile-text-container ol:first-child,#intercom-container .intercom-admin-profile-text-container p:first-child,#intercom-container .intercom-admin-profile-text-container ul:first-child{margin-top:0}#intercom-container .intercom-admin-profile-text-container .intercom-container:last-child,#intercom-container .intercom-admin-profile-text-container a:last-child,#intercom-container .intercom-admin-profile-text-container blockquote:last-child,#intercom-container .intercom-admin-profile-text-container code:last-child,#intercom-container .intercom-admin-profile-text-container h1:last-child,#intercom-container .intercom-admin-profile-text-container h2:last-child,#intercom-container .intercom-admin-profile-text-container h3:last-child,#intercom-container .intercom-admin-profile-text-container h4:last-child,#intercom-container .intercom-admin-profile-text-container h5:last-child,#intercom-container .intercom-admin-profile-text-container h6:last-child,#intercom-container .intercom-admin-profile-text-container ol:last-child,#intercom-container .intercom-admin-profile-text-container p:last-child,#intercom-container .intercom-admin-profile-text-container ul:last-child{margin-bottom:0}#intercom-container .intercom-admin-profile-text-container h1,#intercom-container .intercom-admin-profile-text-container h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-admin-profile-text-container h2,#intercom-container .intercom-admin-profile-text-container h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-admin-profile-text-container ol,#intercom-container .intercom-admin-profile-text-container ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-admin-profile-text-container [dir=ltr] ol,#intercom-container .intercom-admin-profile-text-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-admin-profile-text-container [dir=rtl] ol,#intercom-container .intercom-admin-profile-text-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-admin-profile-text-container ul>li{list-style-type:disc}#intercom-container .intercom-admin-profile-text-container ol>li{list-style-type:decimal}#intercom-container .intercom-admin-profile-text-container li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-admin-profile-text-container em,#intercom-container .intercom-admin-profile-text-container i{font-style:italic}#intercom-container .intercom-admin-profile-text-container b,#intercom-container .intercom-admin-profile-text-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-admin-profile-text-container pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-admin-profile-text-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-admin-profile-text-container p+br{display:none}#intercom-container .intercom-admin-profile-text-container a:active,#intercom-container .intercom-admin-profile-text-container a:hover,#intercom-container .intercom-admin-profile-text-container a:link,#intercom-container .intercom-admin-profile-text-container a:visited{text-decoration:underline}#intercom-container .intercom-admin-profile-text-container a:link,#intercom-container .intercom-admin-profile-text-container a:visited{color:custom-color}#intercom-container .intercom-admin-profile-text-container a:active,#intercom-container .intercom-admin-profile-text-container a:hover{color:custom-color-darker}#intercom-container .intercom-admin-profile-text-container h2+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h2+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h2+blockquote,#intercom-container .intercom-admin-profile-text-container h2+ol,#intercom-container .intercom-admin-profile-text-container h2+p,#intercom-container .intercom-admin-profile-text-container h2+ul,#intercom-container .intercom-admin-profile-text-container h3+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h3+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h3+blockquote,#intercom-container .intercom-admin-profile-text-container h3+ol,#intercom-container .intercom-admin-profile-text-container h3+p,#intercom-container .intercom-admin-profile-text-container h3+ul,#intercom-container .intercom-admin-profile-text-container h4+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h4+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h4+blockquote,#intercom-container .intercom-admin-profile-text-container h4+ol,#intercom-container .intercom-admin-profile-text-container h4+p,#intercom-container .intercom-admin-profile-text-container h4+ul,#intercom-container .intercom-admin-profile-text-container h5+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h5+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h5+blockquote,#intercom-container .intercom-admin-profile-text-container h5+ol,#intercom-container .intercom-admin-profile-text-container h5+p,#intercom-container .intercom-admin-profile-text-container h5+ul,#intercom-container .intercom-admin-profile-text-container h6+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h6+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h6+blockquote,#intercom-container .intercom-admin-profile-text-container h6+ol,#intercom-container .intercom-admin-profile-text-container h6+p,#intercom-container .intercom-admin-profile-text-container h6+ul{margin-top:0}#intercom-container .intercom-admin-profile-text-container .intercom-h2b-facebook,#intercom-container .intercom-admin-profile-text-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-admin-profile-text-container iframe[src*="vimeo.com"],#intercom-container .intercom-admin-profile-text-container iframe[src*="wistia.net"],#intercom-container .intercom-admin-profile-text-container iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-admin-profile-text{text-align:center;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-admin-profile-text a:link,#intercom-container .intercom-admin-profile-text a:visited{color:#78909c}', ""]);
}, function (e, t, n) {
    e.exports = n.p + "images/spinner.4d295ead.png"
}, function (e, t, n) {
    e.exports = n.p + "images/spinner@2x.2b560838.png"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAzElEQVR4AY3Kr0qDcRSA4bNgmUkZSyr2YVkWwTtYEZNFxLQ0wajZZrJ4AcIQ1O4fLHoFpkXTTDIXNoQ9RtEf+p3nrW9EaLk28p+RKy0R2sYyxtrhTtZtmMiahNKbvgtDhXLumxdC3WX1vKTh2aOGBZ9V86kHsCl8VM1wb1fNBpl51Zxtw9y8Yg1y845efkZ+XrdFKcyU9hwqzcJA1iB0ZXVDzbGpKlNHaiGEpo6ed8CrA/s/6mgKEb47By+WRdnv+QxPFkVmPnGjLv7uC9s8WoTqo+lHAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAQAAAC0jZKKAAABnklEQVR4AdXOP2gUdgDF8acnElQSEOuSbhUd1CEB0UDQQQiIZBNFUTDgkkEwgqPgqDgGgzjoEhd10kgG/4xOIbTQXKF0aEoqKMYhWXpG83EIx8ER5Jr73ZDP27+81Ok3rqpmo2qqxvXJ2iKi26RVJayatKse7vGrkn73k0RMKe2lxGmdcCqe6YQn8V4nLMQ3nfA1OiRaUTPpogHHXfbUl1LhGftEY/vNlAjP6ZGm9ai2Hx4WUXHVC89dEhFD7Yd7RVxXd17EVp/bDY+KPT6oeyAiqu2GmbOoYUzElvYeN1t233YRRykVfmfANhFR8bpc+KSszU6PKRceFLHXmHnKh0dhk4SHRdwsH/7DGSMWi4frNlF4yi/6/VY+/LOI4fLhYyKuaFHUtOYfN9yypDX/xV864c+4pxPG45AVpa04GHFHabclouKRkh6qSKxtxL9KWDAiIlFfl3MmTHvjk/UsmfXqB5s24awuaYSb1+2tZnftkP+zWG8nNLDqmkiJ8GENNRekVLhP3bIhKRceBHx0RMqH/3ZAyoZ3mzerVza+70aAaX0tAGh+AAAAAElFTkSuQmCC"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-launcher-acquire.8a742481.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-launcher-acquire@2x.8a739dbd.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-launcher-learn.1f592eb7.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-launcher-learn@2x.3e7fa84c.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-launcher-minimized.3b631d81.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-launcher-minimized@2x.43b2eb9d.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-preview-close.ec1a68fc.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-preview-close@2x.31f72604.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-close-white@1x.6082a959.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-close-white@2x.eca653ab.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-conversations.6e0b2a74.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-conversations@2x.9ee78dea.png"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAq0lEQVR42o2RMQoCMRBFcwQ776C11upOekHEnaC47sQbWomIlWfRSm+wZiBFIAzfgYEw/PeKfLdYdyNiuSz5OHV/TLM9TTSvnPMsVx/ikPadBQh8aZ6C3Fyz62bp8SkFEOT4XQWZ670SaBCCeWwBBm0Bcb+xQSwYEFgLOO5L2LdyAEj9ObpGC7gOavuz0QLu0WoBgqhGCEJBOtwBWAly/qG1jInlWYJIoHnlfhcTzX2HEVUjAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAUVBMVEUAAAAAAAAAVVUzTU0uRl1EWGRCWWFFWGNDWWNEWWNDWWNFWWNEWmNFWWNEWWREWmNEWWREWWNEWWNFWWREWmNEWWNFWmNFWmREWWRFWmRFWmTQYCLkAAAAGnRSTlMAAgMKC0BCXV+am6Cio6SlprS3vb6/wfX2/eBzOYoAAACDSURBVHja3dFJDsJADETRYgozYQqQvv9BaYNQqfWdC+CNF29V+pJWu7mSm207hT5Lb7ceyqv7aAmnlvBLfeHQuKsWw8+pj6XsqTYOhUNlh8IbhTdKt6ZuhUPhVjY6ffmMPt7r/VQ4Kgz2rODf9NXeSj9qPU73HTcKn+gbWv2e971VfQPHpCEx8fOtQAAAAABJRU5ErkJggg=="
}, function (e, t, n) {
    e.exports = n.p + "images/icon-minimize.d9de03dd.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-minimize@2x.31dc3d95.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-user-avatar.cc0ba124.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-user-avatar@2x.c98e6549.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-compose.ae40ed11.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-compose@2x.d2936115.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-no-conversations.c8479cfc.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-no-conversations@2x.3ba90162.png"
}, function (e, t, n) {
    e.exports = n.p + "images/empty-inbox.e63231e3.png"
}, function (e, t, n) {
    e.exports = n.p + "images/empty-inbox@2x.15a2054e.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-upload-white.f4e8f08e.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-upload-white@2x.751fc11c.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-tick.a3893a3e.svg"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-upload.d2842ae1.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-upload@2x.d8d0039b.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-emoji.03826508.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-emoji@2x.fba93a3f.png"
}, function (e, t, n) {
    e.exports = n.p + "images/emoji-spritemap-16.bc0d768e.png"
}, function (e, t, n) {
    e.exports = n.p + "images/emoji-spritemap-32.93b83e6d.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-upload-remove.b3413d69.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-upload-remove@2x.644a85e2.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-is-typing.4a0dc2a4.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-is-typing@2x.0f7bf1a7.gif"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-thumbs-up.ef2a83d6.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-thumbs-down.289ff01a.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-emotion-happy.445136ff.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-emotion-neutral.4bc254cc.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-emotion-sad.82ef651a.png"
}, function (e, t, n) {
    e.exports = n.p + "images/icon-info.e879e16e.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-play.c58d0cd9.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-play@2x.2d812ec3.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-pause.89fbbc4a.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-pause@2x.e29315ed.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-muted.e00bd7de.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-muted@2x.77d304f4.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-unmuted.677f36b3.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-unmuted@2x.2855eea9.png"
}, function (e, t, n) {
    e.exports = n.p + "images/article_book.877be1de.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-replay_360.c3bc501b.png"
}, function (e, t, n) {
    e.exports = n.p + "images/video-replay_360@2x.26b8f034.png"
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(412), s = n(503), c = n(506);
    e.exports = r.View.extend({
        id: "intercom-messenger",
        className: "intercom-messenger intercom-messenger-inactive",
        initialize: function (e) {
            this.settings = e.settings;
            var t = {
                client: e.client,
                nexusClient: e.nexusClient,
                settings: e.settings,
                collection: this.collection,
                app: e.app
            };
            this.newConversationView = new a(t), this.conversationsView = new s(t), this.conversationView = new a(t), this.loadingView = new c({settings: e.settings}), this.render = o.once(this.render), this.renderConversation = o.once(this.renderConversation), this.renderConversations = o.once(this.renderConversations), this.renderNewConversation = o.once(this.renderNewConversation), this.renderLoading = o.once(this.renderLoading), this._registerNexusEvents(e.nexusClient)
        },
        renderConversation: function () {
            this.$el.append(this.conversationView.render().el)
        },
        renderConversations: function () {
            this.$el.append(this.conversationsView.render().el)
        },
        renderNewConversation: function () {
            this.$el.append(this.newConversationView.render().el)
        },
        renderLoading: function () {
            this.$el.append(this.loadingView.render().el)
        },
        showConversations: function () {
            this.renderConversations(), this.show(this.conversationsView)
        },
        showNewConversation: function (e, t, n) {
            this.renderNewConversation(), this.show(this.newConversationView), this.newConversationView.renderNewConversation(t, n), this.newConversationView.composerView.setText(e)
        },
        showConversation: function (e) {
            this.renderConversation(), this.conversationView.renderConversation(e, {autoOpen: !1}), this.show(this.conversationView)
        },
        showLoading: function () {
            this.renderLoading(), this.show(this.loadingView)
        },
        autoOpenConversation: function (e) {
            this.renderConversation(), this.conversationView.renderConversation(e, {autoOpen: !0}), this.show(this.conversationView)
        },
        hide: function () {
            i("body").removeClass("intercom-messenger-active"), this.$el.removeClass("intercom-messenger-active").addClass("intercom-messenger-inactive"), this.currentView && this.currentView.hide()
        },
        show: function (e) {
            this.currentView && this.currentView.hide(), this.currentView = e, i("body").addClass("intercom-messenger-active"), this.$el.addClass("intercom-messenger-active").removeClass("intercom-messenger-inactive"), e.show()
        },
        minimize: function () {
            this.currentView && this.currentView.minimize()
        },
        maximize: function () {
            this.currentView && this.currentView.maximize()
        },
        isMinimized: function () {
            return this.currentView && this.currentView.isMinimized()
        },
        isActive: function () {
            return this.$el.hasClass("intercom-messenger-active")
        },
        isConversationViewActive: function () {
            return this.isActive() && o.contains([this.conversationView, this.newConversationView], this.currentView)
        },
        getCurrentConversation: function () {
            return this.isConversationViewActive() ? this.currentView.model : void 0
        },
        refreshActiveConversation: function (e) {
            var t = this.getCurrentConversation();
            return t && t.id === e ? (t.fetch(), !0) : !1
        },
        onAdminIsTyping: function (e) {
            this.settings.get("app.rtm-enabled") && this.isConversationViewActive() && this.currentView.onAdminIsTyping(e)
        },
        _registerNexusEvents: function (e) {
            e.addListener("AdminIsTyping", o.bind(this.onAdminIsTyping, this))
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(240), r = n(324), a = n(320), s = n(332), c = n(333), l = n(325), m = n(340), u = n(413), d = n(414), p = n(345), h = n(415), f = n(347), g = n(330), v = n(319), b = n(317), y = n(452), w = n(453), x = n(470), _ = n(476), k = n(477), C = n(481), A = n(482), T = n(483), S = n(489), j = n(491), E = n(493), z = n(478), N = n(494), I = n(495), q = n(496), P = n(497), M = n(498), L = n(499), R = n(500), U = n(501), H = n(488), O = n(502), $ = n(314);
    e.exports = y.extend({
        template: h.load("conversation"),
        titleTemplate: h.load("conversation-title"),
        id: "intercom-conversation",
        className: "intercom-conversation intercom-sheet",
        events: i.extend(y.prototype.events, {
            mousemove: "onMouseMovedOrClicked",
            click: "onMouseMovedOrClicked",
            "click .intercom-active-admin-avatar": "onAppProfileAvatarClicked"
        }),
        preAssignedAdmin: null,
        initialize: function (e) {
            y.prototype.initialize.apply(this, arguments), this.app = e.app, this.user = g.fromSettings(this.settings), this.client = e.client, this.nexusClient = e.nexusClient, this.composerView = new x(e), this.counterView = new _({collection: this.collection}), this.poweredByView = new A({settings: this.settings}), this.appProfileView = new k({
                settings: this.settings,
                app: this.app
            }), this.adminProfileView = new C({
                settings: this.settings,
                app: this.app
            }), this.replyExpectationsView = new z({
                settings: this.settings,
                app: this.app,
                parentView: this
            }), this.articleId = this.settings.get("article-id"), this.listenTo(this.composerView, "submit", this.onComposerSubmitted), this.listenTo(this.composerView, "userIsTyping", i.throttle(this.onComposerIsTyping, 1e3)), this.listenTo(this.composerView, "userIsTyping", this._updateLastComposerEventTimestamp), this.listenTo(this.app, "change:last_active", this.onTeamLastSeenChange), this.listenTo(this.client, "user-notification-permissions-change", this.onNotificationPermissionsChange)
        },
        render: function () {
            return this.$el.html(this.template()), this.$el.addClass("intercom-emoji-support"), this.renderComposer(), this.renderPoweredBy(), this.counterView.setElement(this.$(".intercom-unread-counter")).render(), this
        },
        renderNewConversation: function (e, t) {
            this.stopListeningToConversationChanges(), this.model = void 0, t ? (this.renderTitleForAdmin(t), this.replyExpectationsView.renderForPreassignedAdminInTitle(t), this.renderAdminProfile(t), this.preAssignedAdmin = t) : (this.preAssignedAdmin = null, this.renderAppProfile(), this.renderTitle(), this.replyExpectationsView.renderForTeamInTitle()), this._configureComposerView(e), this.$(".intercom-sheet-content").on("scroll", i.bind(this.onConversationScroll, this)), u.trackSignedOutEvent("uniqueVisitorOpenedNewConversation"), this.showNewArticleConversationPlaceholder()
        },
        _configureComposerView: function (e) {
            this.composerView.show().reset().setPlaceholder(this.getPlaceholder()), this.focusComposerIfAppropriate(), this.composerView.setConversationId(), this.composerView.resetEnterToSend(), e !== !1 && this.showComposerWithAnimation()
        },
        renderConversation: function (e, t) {
            this.stopListeningToConversationChanges(), this.stopListening(this.app), this.model = e, e.hasPreassignedAdmin() || (this.renderTitle(), this.replyExpectationsView.renderForTeamOrLastActiveAdminInTitle(this.model)), this.composerView.hide().reset().setPlaceholder(this.getPlaceholder()), this.$el.addClass("intercom-sheet-loading"), this.$el.toggleClass("intercom-conversation-preview", t.autoOpen && this.model.isSmallAnnouncement()), this.$el.toggleClass(["intercom-conversation-announcement", "intercom-sheet-maximized"].join(" "), this.model.isAnnouncement()), d.invalidateLatencyData(), this.model.fetch().then(i.bind(function () {
                if (this.isVisitorAutoMessage() && u.trackSignedOutEvent("uniqueVisitorOpenedVisitorAutoMessage"), this.listenTo(this.model.parts, "add", this.onPartAdded), this.listenTo(this.model.parts, "change", this.onPartChange), this.listenTo(this.model, "change:reply_area_placeholder", this.onPlaceholderChanged), this.composerView.setConversationId(this.model.id), this.composerView.setVisitorAutoMessage(this.isVisitorAutoMessage()), this.composerView.resetEnterToSend(), this.setComposerVisibility(), e.hasPreassignedAdmin()) {
                    var t = e.getPreassignedAdmin();
                    this.renderTitleForAdmin(t), this.renderAdminProfile(t), this.replyExpectationsView.renderForPreassignedAdminInTitle(t)
                } else this.replyExpectationsView.renderForTeamOrLastActiveAdminInTitle(this.model), this.renderAppProfile(), this.renderTitle();
                this.renderParts(), this.renderPoweredBy(), this.shouldShowAutoResponder() && this.renderAutoResponse(), this.renderBrowserNotificationPrompt(), this.focusComposerIfAppropriate(), this.showComposerWithAnimation(), this.model.partsCount() > 1 && this.scrollToBottom(), this._maybeShowEmailCollector(), this.$el.removeClass("intercom-sheet-loading"), this.$(".intercom-sheet-content").on("scroll", i.bind(this.onConversationScroll, this))
            }, this))
        },
        renderParts: function () {
            this.model.parts.nonLwrResponses().each(function (e) {
                var t = new w({model: e, conversation: this.model});
                this.groupParts(e, t), this.$(".intercom-conversation-parts").append(t.render().el)
            }, this), this.model.partsCount() > 1 && this.$el.removeClass("intercom-conversation-preview"), this.model.isUnread() && this.$(".intercom-conversation-part:last").addClass("intercom-conversation-part-unread"), this.markConversationAsRead()
        },
        groupParts: function (e, t) {
            var n = this.$(".intercom-conversation-part:not(.intercom-is-typing):last"), i = n.outerHeight(!0);
            return !this.isGroupedWithPreviousPart(e) && this.isGroupedWithNextPart(e) ? this.group(t.$el, "first") : this.isGroupedWithPreviousPart(e) && !this.isGroupedWithNextPart(e) ? (this.group(t.$el, "last"), n.hasClass("intercom-conversation-part-grouped-last") ? this.group(n, "middle") : n.hasClass("intercom-conversation-part-grouped") || this.group(n, "first")) : this.isGroupedWithPreviousPart(e) && this.group(t.$el, "middle"), (this.autoResponseIsActive() || this.emailCollectorIsActive()) && this.regroupComments(), i - n.outerHeight(!0)
        },
        regroupComments: function () {
            var e = this.domPart(0), t = this.domPart(1), n = this.domPart(2), i = this.isGroupedWithNextPart(this.model.parts.at(0)), o = this.model.parts.at(1) && this.isGroupedWithNextPart(this.model.parts.at(1)), r = this.model.parts.at(2) && this.isGroupedWithNextPart(this.model.parts.at(2));
            this.autoResponseIsActive() ? (this.removeGroupingClasses(e), this.removeGroupingClasses(t), o && this.group(t, "first")) : this.emailCollectorIsActive() ? (this.removeGroupingClasses(t), this.removeGroupingClasses(n), r && this.group(n, "first")) : (e.toggleClass("intercom-conversation-part-grouped-first", i), o && this.group(t, "middle"))
        },
        group: function (e, t) {
            return "first" === t ? this.removeGroupingClasses(e).addClass("intercom-conversation-part-grouped-first") : "middle" === t ? this.removeGroupingClasses(e).addClass("intercom-conversation-part-grouped") : "last" === t ? this.removeGroupingClasses(e).addClass("intercom-conversation-part-grouped-last") : void 0
        },
        domPart: function (e) {
            return this.$(".intercom-conversation-part:eq(" + e + ")")
        },
        removeGroupingClasses: function (e) {
            return e.removeClass(function (e, t) {
                return i.filter(t.split(" "), function (e) {
                    return e.indexOf("grouped") >= 0
                }).join(" ")
            })
        },
        showComposerWithAnimation: function () {
            M(this)
        },
        scrollToBottom: function () {
            this.setScrollTop(this.getScrollHeight())
        },
        autoResponseIsActive: function () {
            return this.autoResponseView && this.autoResponseView.isActive()
        },
        emailCollectorIsActive: function () {
            return this.emailCollectorView && this.emailCollectorView.isActive()
        },
        renderAppProfile: function () {
            this.model && (this.model.hasAdminComment() || this.model.getMessage().byAdmin()) && !this.model.hasArticleMessage() || ($.isEnabled("new-app-profile") && this.$(".intercom-app-profile-container").addClass("new-intercom-app-profile-container"), this.$(".intercom-app-profile-container").show().html(this.appProfileView.render().el))
        },
        hideAppProfile: function (e) {
            e === !1 ? this.$(".intercom-app-profile-container").hide() : P(this)
        },
        renderAdminProfile: function (e) {
            this.$(".intercom-app-profile-container").show().html(this.adminProfileView.render(e).el)
        },
        renderTitle: function () {
            var e = this.model ? this.titleTemplate({
                appName: this.settings.get("app.name"),
                adminFirstName: this.model.lastAdminFirstName(),
                adminName: this.model.lastAdminName()
            }) : this.titleTemplate({adminName: void 0, appName: this.settings.get("app.name")});
            this.$(".intercom-sheet-header-title").html(e), this.setGenericTitle()
        },
        renderTitleForAdmin: function (e) {
            var t = this.titleTemplate({
                appName: this.settings.get("app.name"),
                adminFirstName: e.first_name,
                adminName: e.name
            });
            this.$(".intercom-sheet-header-title").html(t)
        },
        hasModelAssignedAdmin: function () {
            return this.model.lastAdmin() || this.model.getPreassignedAdmin()
        },
        setGenericTitle: function () {
            this.model && 0 !== this.model.parts.byAdmin().size() && this.hasModelAssignedAdmin() ? this.resetTitle() : (this.$(".intercom-sheet-header-generic-title").html(o.translate("new-message")), this.model && !this.appProfileNameIsVisible() && this.model.lastAdmin() || this.$(".intercom-sheet-header").addClass("intercom-sheet-header-show-generic"))
        },
        showNewArticleConversationPlaceholder: function () {
            void 0 !== this.articleId && (this.showCustomTitleRemoveGeneric(), this.composerView.show().reset().setPlaceholder(o.translate("new-article-conversation-placeholder")))
        },
        showCustomTitleRemoveGeneric: function () {
            this.$(".intercom-sheet-header").removeClass("intercom-sheet-header-show-generic"), this.$(".intercom-sheet-header-title-container").show()
        },
        showComposerWithStashedText: function () {
            this.composerView.setText(this.stashedComposerText), this.stashedComposerText = "", this.composerView.show(), this.composerView.focus()
        },
        renderComposer: function () {
            this.$(".intercom-composer-container").append(this.composerView.render().el)
        },
        currentProductName: function () {
            return this.settings.get("user.anonymous") ? "Acquire" : !this.model || this.model.getMessage().byUser() ? "Support" : this.model.getMessage().isChat() ? "Learn" : "Engage"
        },
        renderPoweredBy: function () {
            if (this.settings.get("app.branding-enabled")) {
                var e = this.model && this.model.getMessage().byAdmin(), t = e ? "outbound" : "inbound", n = this.currentProductName();
                this.$(".intercom-composer").append(this.poweredByView.render({
                    trackingType: t,
                    productName: n,
                    companyName: this.settings.get("rawAppName")
                }).el), this.$el.addClass("intercom-powered-by-enabled")
            }
        },
        renderAutoResponse: function (e) {
            var t = new T({model: this.model, settings: this.settings});
            this.listenTo(t, "auto-response-rendered", this.onAutoResponseRender), t.isActive() && (this.$(".intercom-conversation-part:first").after(t.render(e).$el), this.autoResponseView = t, this.regroupComments())
        },
        onAutoResponseRender: function () {
            this.setAnimatedScrollTop(this.getScrollHeight())
        },
        renderBrowserNotificationPrompt: function () {
            if (this._browserNotificationsEnabled() && !this.autoResponseView) {
                if (void 0 === this.browserNotificationPromptView) {
                    var e = new S({user: this.user, settings: this.settings, message: this.model.getMessage()});
                    this.browserNotificationPromptView = e
                } else this.browserNotificationPromptView.model = this.model;
                this.browserNotificationPromptView.isActive() && this.$(".intercom-conversation-parts").append(this.browserNotificationPromptView.render().$el)
            }
        },
        addIsTypingWithAnimation: function (e, t) {
            if (void 0 === this.isTypingView) {
                var n = new E;
                this.$(".intercom-conversation-parts").append(n.render({
                    adminAvatar: e,
                    adminInitials: t
                }).$el), this.scrollToBottom(), q(this, n), this.isTypingTimeout = setTimeout(i.bind(function () {
                    this.removeIsTypingWithAnimation()
                }, this), 2e4), this.isTypingView = n
            }
        },
        removeIsTypingWithAnimation: function () {
            void 0 !== this.isTypingView && (U(this, this.isTypingView), this.isTypingView = void 0, clearTimeout(this.isTypingTimeout))
        },
        removeIsTyping: function () {
            void 0 !== this.isTypingView && (this.isTypingView.remove(), this.isTypingView = void 0, clearTimeout(this.isTypingTimeout))
        },
        removeAutoResponse: function () {
            void 0 !== this.autoResponseView && (H(this.autoResponseView), this.autoResponseView.isAnonymousUserWithoutEmail() || (this.autoResponseView = void 0, this.regroupComments()))
        },
        addUserPartWithAnimation: function (e) {
            var t = new w({model: e, conversation: this.model}), n = this.groupParts(e, t);
            return this.$(".intercom-conversation-parts").append(t.render().$el), this.composerView.reset(), N(this, t, n), this._maybeShowEmailCollector(!0), t
        },
        addAdminPartWithAnimation: function (e) {
            var t = new w({model: e, conversation: this.model});
            return this.$(".intercom-conversation-parts").append(t.render().$el), e === this.model.parts.last() ? I(this, t, this.isTypingView, this.isGroupedWithPreviousPart(e)) : this.groupParts(e, t), e.byInterbot() || this.renderTitle(), this.scrollToBottom(), this.removeIsTyping({animate: !1}), this.removeAutoResponse(), e.byInterbot() || this.hideAppProfile(), this.model.isUnread() && t.setUnread(), this.markConversationAsRead(), t
        },
        markConversationAsRead: function () {
            p.isPageVisible() && s.isActive() ? this.markActiveConversationAsRead() : this.markConversationAsReadWhenActive()
        },
        markConversationAsReadWhenActive: function () {
            var e = i.once(i.bind(this.markActiveConversationAsRead, this));
            s.onActive(e), p.onVisible(e)
        },
        markActiveConversationAsRead: function () {
            this.shouldMarkConversationAsRead() && (this.model.markAsRead(), this.nexusClient.onConversationSeen(this.model.id), setTimeout(i.bind(function () {
                this.$(".intercom-conversation-part").removeClass("intercom-conversation-part-unread")
            }, this), 3e3))
        },
        shouldMarkConversationAsRead: function () {
            return this.isActive() && !this.isMinimized() && this.model && this.model.isUnread()
        },
        focusComposerIfAppropriate: function () {
            var e = r.features.touchScreen();
            e || this.isPreview() ? this.composerView.blur() : this.composerView.focus()
        },
        createComment: function (e) {
            var t = m.timer("createComment");
            this.model.addPart(e);
            var n = this.model.parts, o = this.addUserPartWithAnimation(e), r = function () {
                c.playDelivered(), t.resolve()
            }, a = i.throttle(function () {
                m.increment("saveCommentFailed"), t.fail(), c.playFailed(), o.renderFailed()
            }, 1e3, {leading: !1}), s = function () {
                n.get(e) && e.save().then(r).fail(a)
            };
            o.on("retry", s), e.isUpload() ? o.on("part:save", s) : s()
        },
        shouldShowAutoResponder: function () {
            if (this._interbotEnabled() || this._browserNotificationsEnabled() || this.isVisitorAutoMessage())return !1;
            var e = !this._interbotEnabled(), t = this.user.isUserRole(), n = this.user.hasEmail();
            return e || t || n
        },
        createConversation: function (e) {
            var t = m.timer("createConversation");
            this.model = e, void 0 !== this.articleId && this.model.set("articleId", this.articleId), this.listenTo(this.model.parts, "add", this.onPartAdded), this.listenTo(this.model, "change:reply_area_placeholder", this.onPlaceholderChanged), this.collection.add(this.model);
            var n = e.getMessage(), r = this.addUserPartWithAnimation(n);
            this.composerView.reset().disable().setPlaceholder(o.translate("new-comment-placeholder"));
            var a = i.bind(function () {
                this.model.hasArticleMessage() && (this.$(".intercom-conversation-parts").empty(), this.renderParts(), this._maybeShowEmailCollector()), c.playDelivered(), this.shouldShowAutoResponder() && this.renderAutoResponse({delay: 1e3}), this.renderBrowserNotificationPrompt(), this.composerView.enable().setConversationId(this.model.id), this.focusComposerIfAppropriate(), this.user.fetchRealtimeSettingsIfMissing(), f.save({view: "conversation-" + this.model.id}), this.getPreassignedAdmin() && !e.lastAdmin() && e.setPreassignedAdmin(this.getPreassignedAdmin()), t.resolve()
            }, this), s = i.throttle(function () {
                t.fail(), m.increment("saveConversationFailed"), c.playFailed(), r.renderFailed()
            }, 1e3, {leading: !1}), l = function () {
                e.save().then(a).fail(s)
            };
            r.on("retry", l), n.isUpload() ? r.on("part:save", l) : l()
        },
        setComposerVisibility: function () {
            var e = this.model.getMessage().isLwrMessage() && 1 === this.model.parts.nonLwrResponses().size();
            e ? this.composerView.hide() : this.composerView.show(), this.composerView.updatePosition()
        },
        reset: function () {
            this.stopListeningToConversationChanges(), this.resetTitle(), this.$(".intercom-sheet-content").off("scroll"), this.$(".intercom-conversation-parts").empty(), this.$(".intercom-app-profile-container").empty().hide(), this.composerView.blur().reset()
        },
        stopListeningToConversationChanges: function () {
            this.model && (this.stopListening(this.model.parts), this.stopListening(this.model, "change:reply_area_placeholder"))
        },
        resetTitle: function () {
            this.$(".intercom-sheet-header-generic-title").removeAttr("style"), this.$(".intercom-sheet-header-title-container").removeAttr("style"), this.$(".intercom-sheet-header").removeClass("intercom-sheet-header-show-generic")
        },
        isPreview: function () {
            return this.$el.hasClass("intercom-conversation-preview")
        },
        didHide: function () {
            this.reset()
        },
        didMaximize: function () {
            this.markConversationAsRead()
        },
        _maybeUpdateLastActive: function (e) {
            if (!e.byInterbot()) {
                var t = l.now();
                this.app.set("last_active", parseInt(t / 1e3, 10)), this.model.updateLastAdminActiveTimestamp(parseInt(t / 1e3, 10)), this.replyExpectationsView.renderForTeamOrLastActiveAdminInTitle(this.model)
            }
        },
        _maybeShowEmailCollector: function (e) {
            this._interbotEnabled() || this._browserNotificationsEnabled() || !this.shouldShowAnonymousEmailCollector() || (this.emailCollectorView = new j({
                parentView: this,
                settings: this.settings
            }), this.emailCollectorView.render(), this.emailCollectorView.insertIntoParentView(), this.regroupComments(), e === !0 && L(this.emailCollectorView))
        },
        _serversideInterbotEnabled: function () {
            return this.settings.get("app.server-side-interbot")
        },
        _interbotEnabled: function () {
            return this._serversideInterbotEnabled() || this.model.hasAnyInterbotComments()
        },
        _browserNotificationsEnabled: function () {
            return this.settings.get("app.browser-notifications") && r.features.pushNotifications()
        },
        onTeamLastSeenChange: function () {
            this.settings.get("app.video-hovercard") || this.replyExpectationsView.renderForTeamInTitle()
        },
        onPartAdded: function (e) {
            e.byAdmin() && (this.nexusClient.onConversationReceived(this.model.id), this._maybeUpdateLastActive(e), this.addAdminPartWithAnimation(e))
        },
        onPartChange: function (e) {
            e.byUser() && e.changed.seen_by_admin === e.SEEN && this._maybeUpdateLastActive(e)
        },
        onPlaceholderChanged: function () {
            this.composerView.setPlaceholder(this.getPlaceholder())
        },
        onNotificationPermissionsChange: function (e) {
            this.user && this.user.updateNotificationPermissions(e)
        },
        getPlaceholder: function () {
            return this.model ? this.model.hasPlaceholder() ? this.model.getPlaceholder() : o.translate("new-comment-placeholder") : o.translate("new-conversation-placeholder")
        },
        previousPart: function (e) {
            return this.model.parts.at(this.model.parts.indexOf(e) - 1)
        },
        nextPart: function (e) {
            return this.model.parts.at(this.model.parts.indexOf(e) + 1)
        },
        hasPreviousPart: function (e) {
            return !i.isUndefined(this.previousPart(e))
        },
        hasNextPart: function (e) {
            return !i.isUndefined(this.nextPart(e))
        },
        isGroupedWithPreviousPart: function (e) {
            return this.hasPreviousPart(e) && this.isGroupedWithNextPart(this.previousPart(e)) && this.isGroupedWithPart(this.previousPart(e), e)
        },
        isGroupedWithNextPart: function (e) {
            return this.hasNextPart(e) && this.isGroupedWithPart(e, this.nextPart(e))
        },
        isSameAdminAuthor: function (e, t) {
            return e.byInterbot() && t.byInterbot() ? !0 : t.byAdmin() && e.byAdmin() && t.getAuthorId() === e.getAuthorId()
        },
        isGroupedWithPart: function (e, t) {
            if (t.isNew() && e.isNew())return t.byInterbot() && e.byInterbot() ? !0 : t.byUser() && e.byUser();
            if (t.isNew()) {
                var n = parseInt(l.now() / 1e3, 10), i = t.byUser() && e.byUser(), o = !t.byUser() && this.isSameAdminAuthor(e, t);
                return Math.abs(n - e.get("created_at")) <= 60 && (i || o)
            }
            return !e.isNew() && t.getAuthorId() === e.getAuthorId() && t.byUser() === e.byUser() && t.get("created_at") - e.get("created_at") <= 60
        },
        onAdminIsTyping: function (e) {
            if (this.model && this.model.id === e.eventData.conversationId) {
                var t = a.firstInitial(e.eventData.adminName), n = e.eventData.adminAvatar;
                n.indexOf("/assets/msg-user-icon-73") >= 0 && (n = null), this.addIsTypingWithAnimation(n, t)
            }
        },
        createMessageOrComment: function (e, t) {
            this.model ? this.createComment(v.fromBodyAndUploads(e, t, this.model)) : this.createConversation(b.fromBodyAndUploads(e, t))
        },
        scrollHeaderIfRequired: function () {
            this.$(".intercom-app-profile-team-and-activity").is(":visible") && O(this, this.appProfileNameIsVisible())
        },
        appProfileNameIsVisible: function () {
            if (!this.$(".intercom-app-profile-team-and-activity").is(":visible"))return !1;
            var e = this.getScrollTop(), t = this.$(".intercom-app-profile-team-and-activity").position().top + this.$(".intercom-app-profile-team-and-activity").outerHeight();
            return t > e
        },
        onComposerSubmitted: function (e, t) {
            t.isEmpty() ? this.createMessageOrComment(e, []) : t.each(i.bind(function (t) {
                this.createMessageOrComment(e, t)
            }, this))
        },
        isVisitorAutoMessage: function () {
            return this.model && this.model.parts.first().byAdmin() ? this.model.parts.first().isChatAutoMessage() && this.settings.get("user.anonymous") : !1
        },
        shouldShowAnonymousEmailCollector: function () {
            return $.isEnabled("v3_email_attribute") ? (this.isVisitorAutoMessage() || this.model.hasArticleMessage()) && this.model.hasUserPart() && i.isEmpty(this.settings.get("email")) && !this.emailCollectorIsActive() : (this.isVisitorAutoMessage() || this.model.hasArticleMessage()) && this.model.hasUserPart() && !this.emailCollectorIsActive() && i.isEmpty(this.settings.get("user.anonymous-email"))
        },
        onComposerIsTyping: function () {
            this.model && this.model.hasUserComment() || this.composerView.queueEnterToSendAnimation(), this.model && (this._updateLastComposerEventTimestamp(), this.settings.get("app.rtm-enabled") && this.nexusClient.postEvent("UserIsTyping", {conversationId: this.model.id}))
        },
        _updateLastComposerEventTimestamp: function () {
            if (this.model) {
                var e = this.model.get("interbotConditionsMatcher");
                e && e.setContext({lastComposerEvent: l.now()})
            }
        },
        getPreassignedAdmin: function () {
            return this.preAssignedAdmin
        },
        onMouseMovedOrClicked: i.throttle(function () {
            this.model && this.model.isSmallAnnouncement() && this.isPreview() && this.$el.removeClass("intercom-conversation-preview")
        }, 100),
        onAppProfileAvatarClicked: i.throttle(function () {
            R(this)
        }, 1e3),
        onConversationScroll: i.throttle(function () {
            this.scrollHeaderIfRequired()
        }, 100)
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(340), r = n(341), a = n(94), s = "tracked-events";
    e.exports = {
        initialize: function (e) {
            this.settings = e
        }, trackEvent: function (e) {
            if (!this.isTrackedEvent(e)) {
                var t = this.getTrackedEvents();
                t.push(e), r.localStorage.set(s, a.stringify(t)), o.increment(e)
            }
        }, trackSignedOutEvent: function (e) {
            this.settings && this.settings.get("user.anonymous") && this.trackEvent(e)
        }, isTrackedEvent: function (e) {
            return i.indexOf(this.getTrackedEvents(), e) >= 0
        }, getTrackedEvents: function () {
            return a.parse(r.localStorage.get(s) || "[]")
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = {}, r = !1;
    t.onNewComment = function (e) {
        var t = e.eventData;
        if (t && t.conversationId && t.adminTimestamp && t.adminTabId)return i.has(o, t.conversationId) ? void(r = !0) : void(o[t.conversationId] = i.pick(t, ["adminTimestamp", "adminTabId"]))
    }, t.invalidateLatencyData = function () {
        o = {}
    }, t.popLatencyDataForConversation = function (e) {
        var t = {};
        return !r && i.has(o, e) && (t = o[e], delete o[e]), t
    }, t.disable = function () {
        r = !0
    }, t.reset = function () {
        t.invalidateLatencyData(), r = !1
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(240), r = n(416);
    e.exports = {
        load: function (e) {
            var t = n(417)("./" + e + ".html");
            return function (e) {
                return t.call(this, i.extend({}, e, {t: o.translate, relativeTime: r.relativeTimeInWords}))
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return "Invalid Date" !== e.toString()
    }

    var o = n(240), r = 1e3, a = 60, s = 60, c = 24, l = 7, m = 365, u = {s: r, m: a, h: s, d: c, w: l};
    t.isSameDate = function (e, t) {
        return e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
    }, t.relativeTime = function (e) {
        var t = new Date, n = t - e;
        n = Math.max(0, n);
        var i = "s";
        for (var o in u) {
            if (n < u[o])break;
            i = o, n /= u[o]
        }
        return n = Math.floor(n), {unit: i, delta: n}
    }, t.relativeTimeInWords = function (e, n) {
        if (!i(e))return "";
        var r = t.relativeTime(e);
        return void 0 !== n && "s" === r.unit ? n : o.translate("X" + r.unit, {delta: r.delta})
    }, t.absoluteTimeInWords = function (e) {
        var t = e.getHours();
        0 === t && (t = 12), t = t > 12 ? t % 12 : t;
        var n = e.getMinutes() < 10 ? "0" + e.getMinutes() : "" + e.getMinutes(), i = e.getHours() < 12 ? "am" : "pm";
        return t + ":" + n + " " + i
    }, t.lastActiveTimeInWords = function (e) {
        var n = t.relativeTime(e);
        switch (n.unit) {
            case"s":
                return o.translate("active-in-the-last-x-minutes", {minutes: 15});
            case"m":
                return n.delta <= 15 ? o.translate("active-in-the-last-x-minutes", {minutes: 15}) : o.translate("active-in-the-last-hour");
            case"h":
                return 1 === n.delta ? o.translate("last-active-one-hour-ago") : o.translate("last-active-x-hours-ago", {hours: n.delta});
            case"d":
                return 1 === n.delta ? o.translate("last-active-one-day-ago") : o.translate("last-active-x-days-ago", {days: n.delta});
            default:
                return o.translate("last-active-more-than-one-week-ago")
        }
    }, t.getTimeInTimezone = function (e, n) {
        var i = e.valueOf() + 60 * e.getTimezoneOffset() * 1e3, o = i + 1e3 * n;
        return t.absoluteTimeInWords(new Date(o))
    }, t.minutesToMilliseconds = function (e) {
        return e * r * a
    }, t.daysToMilliseconds = function (e) {
        return e * t.minutesToMilliseconds(s) * c
    }, t.yearsToMilliseconds = function (e) {
        return e * t.daysToMilliseconds(m)
    }
}, function (e, t, n) {
    function i(e) {
        return n(o(e))
    }

    function o(e) {
        return r[e] || function () {
                throw new Error("Cannot find module '" + e + "'.")
            }()
    }

    var r = {
        "./admin-avatar.html": 418,
        "./admin-profile.html": 419,
        "./announcement.html": 420,
        "./app-hovercard.html": 421,
        "./app-profile-admin.html": 422,
        "./app-profile.html": 423,
        "./article-card-message.html": 424,
        "./auto-response.html": 425,
        "./browser-notification-prompt.html": 426,
        "./comment-from-blocks.html": 427,
        "./comment-metadata.html": 428,
        "./comment.html": 429,
        "./composer.html": 430,
        "./conversation-item.html": 431,
        "./conversation-title.html": 432,
        "./conversation.html": 433,
        "./conversations.html": 434,
        "./image-only-part.html": 435,
        "./image-viewer.html": 436,
        "./is-typing.html": 437,
        "./knowledgebase-article.html": 438,
        "./last-active.html": 439,
        "./launcher.html": 440,
        "./loading.html": 441,
        "./lwr-emotions-composer.html": 442,
        "./lwr-thumbs-composer.html": 443,
        "./new-anonymous-user.html": 444,
        "./powered-by.html": 445,
        "./proactive-response-time.html": 446,
        "./small-announcement.html": 447,
        "./sticker-part.html": 448,
        "./upload-part.html": 449,
        "./video-hovercard.html": 450,
        "./video-reply-part.html": 451
    };
    i.keys = function () {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 417
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += hasAvatar ? '<img src="' + __e(avatarUri) + '" alt="' + __e(adminFirstName) + '">' : __e(adminFirstInitial), __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)__p += '<div class="intercom-admin-profile-data-container">\n  <div class="intercom-admin-profile-data">\n  </div>\n</div>\n<div class="intercom-admin-profile-text-container">\n  <p class="intercom-admin-profile-text">Message me below and we\'ll get back<br> to you as soon as we can!</p>\n </div>\n';
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)part.adminAvatar() && (__p += '\n  <div class="intercom-announcement-avatar-container">\n    <img src="' + __e(part.adminAvatar()) + '" class="intercom-announcement-avatar" />\n  </div>\n'), __p += '\n<div class="intercom-announcement">\n  <div class="intercom-announcement-body-container">\n    <div class="intercom-announcement-body intercom-embed-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n    <div class="intercom-attachments">\n      ', part.uploads.each(function (e) {
                __p += '\n        <div class="intercom-attachment">\n          <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n        </div>\n      "
            }), __p += '\n    </div>\n    <div class="intercom-lwr-composer-container"></div>\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            with (obj)__p += '<div class="intercom-launcher-hovercard-close">\n  ' + __e(t("close")) + '\n</div>\n<div class="intercom-launcher-hovercard-welcome">\n  <div class="intercom-launcher-hovercard-admins"></div>\n  <div class="intercom-launcher-hovercard-text">\n    <div class="intercom-launcher-hovercard-app-name">' + __e(appName) + '</div>\n    <div class="intercom-launcher-hovercard-welcome-text"></div>\n  </div>\n</div>\n<div class="intercom-launcher-hovercard-textarea">\n  <textarea placeholder="' + (null == (__t = t("new-conversation-placeholder")) ? "" : __t) + '"></textarea>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-active-admin">\n  ' + (null == (__t = adminAvatar) ? "" : __t) + "\n  ", firstName && (__p += '\n    <div class="intercom-active-admin-name">\n      ' + __e(firstName) + "\n    </div>\n  "), __p += "\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            with (obj)__p += '<div class="intercom-app-profile-team-and-activity">\n  <div class="intercom-app-profile-team">' + __e(appName) + '</div>\n  <div class="intercom-app-profile-expectations"></div>\n</div>\n<div class="intercom-active-admins"></div>\n<div class="intercom-app-profile-text">\n  <p>' + (null == (__t = message) ? "" : __t) + "</p>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            with (obj)__p += '<a href="' + __e(cardURL) + '" target="_blank" class="intercom-article-lightbox-link">\n  ' + (null == (__t = renderedCard) ? "" : __t) + "\n</a>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)isArtAnonymousAndEmphasised ? (__p += "\n  ", haveEmail && (__p += '\n  <div class="intercom-art-emp-email-form">\n      <div class="intercom-art-emp-email-icon-container">\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="29" viewBox="0 0 21 29">\n          <defs>\n            <style>\n\n              .cls-2 {\n                fill: ' + __e(customColor) + ';\n              }\n            </style>\n          </defs>\n          <path d="M20.057,8.673 C19.511,8.760 18.999,8.389 18.912,7.843 C18.196,3.357 16.254,1.449 11.767,2.165 C11.222,2.252 10.709,1.881 10.622,1.335 C10.535,0.789 10.907,0.277 11.452,0.190 C17.028,-0.700 19.997,1.953 20.887,7.528 C20.974,8.074 20.602,8.586 20.057,8.673 ZM15.692,8.357 C15.375,6.579 14.646,5.046 12.281,5.135 C11.729,5.155 11.223,4.851 11.136,4.305 C11.049,3.759 11.415,3.199 11.966,3.160 C15.375,2.915 17.431,4.893 17.667,8.042 C17.708,8.593 17.382,9.100 16.837,9.187 C16.291,9.274 15.789,8.901 15.692,8.357 ZM13.532,10.634 C16.199,11.975 18.355,14.537 18.355,17.600 C18.355,17.600 18.355,21.924 18.355,21.924 C18.355,22.408 19.093,22.749 20.056,23.146 C20.498,23.327 20.761,23.800 20.668,24.269 C20.576,24.738 20.175,25.079 19.698,25.079 C19.698,25.079 13.633,25.079 13.633,25.079 C13.344,26.639 12.007,28.146 10.458,28.146 C8.909,28.146 7.523,26.639 7.223,25.079 C7.223,25.079 0.969,25.079 0.969,25.079 C0.492,25.079 0.080,24.742 -0.012,24.273 C-0.105,23.805 0.147,23.336 0.589,23.155 C1.574,22.749 2.312,22.408 2.312,21.924 C2.312,21.924 2.312,17.600 2.312,17.600 C2.312,14.536 3.551,11.974 6.218,10.633 C6.534,8.901 8.053,7.584 9.875,7.584 C11.697,7.584 13.216,8.901 13.532,10.634 ZM10.458,26.146 C10.923,26.146 11.321,25.617 11.511,25.079 C11.511,25.079 9.405,25.079 9.405,25.079 C9.595,25.617 9.994,26.146 10.458,26.146 ZM11.592,11.302 C11.592,10.354 10.822,9.584 9.875,9.584 C8.928,9.584 8.158,10.354 8.158,11.302 C8.158,11.705 7.915,12.069 7.543,12.225 C5.277,13.169 4.312,15.128 4.312,17.600 C4.312,17.600 4.312,21.924 4.312,21.924 C4.312,22.370 4.210,22.751 4.040,23.079 C4.040,23.079 16.627,23.079 16.627,23.079 C16.456,22.751 16.355,22.370 16.355,21.924 C16.355,21.924 16.355,17.600 16.355,17.600 C16.355,15.129 14.472,13.170 12.207,12.225 C11.835,12.069 11.592,11.705 11.592,11.302 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>\n        </svg>\n\n      </div>\n\n      <div class="intercom-art-emp-email-text-container">\n          <p>' + (null == (__t = "You'll get a reply here and at " + email) ? "" : __t) + "</p>\n      </div>\n  </div>\n  "), __p += "\n") : (__p += '\n  <div class="intercom-auto-response-text">\n    ', responseTextEnabled && (__p += "\n      ", medianResponseTimeEnabled ? (__p += "\n        " + (null == (__t = medianResponseTimeBodyHTML) ? "" : __t) + "\n        ", haveEmail && (__p += "\n          <p>" + __e(t("median-reply-autoresponse-with-email", {email: email})) + "</p>\n        "), __p += "\n      ") : (__p += "\n        ", customAutoResponseEnabled ? (__p += "\n          ", customAutoResponse && (__p += "\n            <p>" + __e(customAutoResponse) + "</p>\n          "), __p += "\n        ") : (__p += "\n          ", __p += haveEmail ? "\n            <p>" + __e(t("team-will-reply-asap")) + "</p>\n            <p>" + __e(t("check-back-or-email", {email: email})) + "</p>\n          " : "\n            <p>" + __e(t("message-autoresponse")) + "</p>\n          ", __p += "\n        "), __p += "\n      "), __p += "\n    "), __p += "\n</div>\n"), __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-auto-response intercom-auto-response-active">\n  <div class="intercom-auto-response-text">\n    ', __p += prompt ? "\n      <p>Get notified via desktop notifications.</p>\n    " : granted ? "\n      <p>Check back here later, or you'll receive browser notifications if you're away.</p>\n    " : denied ? "\n      <p>" + __e(t("message-autoresponse")) + "</p>\n    " : "\n      <p>" + __e(t("message-autoresponse")) + "</p>\n    ", __p += "\n  </div>\n  ", prompt && (__p += '\n    <div class="intercom-browser-notifications-button-container">\n      <span class="intercom-browser-notification-button">Turn on push notifications</span>\n    </div>\n  '), __p += "\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment ' + __e(part.byUser() ? "intercom-comment-by-user" : "intercom-comment-by-admin") + " " + __e(part.byInterbot() ? "intercom-comment-by-interbot" : "") + '">\n  ', part.byAdmin() && (__p += "\n    ", __p += part.adminAvatar() ? '\n      <img src="' + __e(part.adminAvatar()) + '" class="intercom-comment-avatar">\n    ' : '\n      <div class="intercom-comment-avatar intercom-default-admin-avatar">' + __e(part.adminInitials()) + "</div>\n    ", __p += "\n  "), __p += "\n  ", _.each(connectedComponentsExceptLast, function (e, t) {
                __p += "\n    ", shouldNotWrapInBubble(e) ? __p += "\n      " + (null == (__t = articleCardMessageTemplate({
                        cardURL: e[0].url,
                        renderedCard: renderBlocks(e)
                    })) ? "" : __t) + "\n    " : (__p += '\n      <div class="intercom-comment-body-container">\n        <div class="intercom-comment-body intercom-embed-body">\n          ' + (null == (__t = renderBlocks(e)) ? "" : __t) + "\n        </div>\n        ", 0 === t && (__p += '\n          <div class="intercom-comment-caret"></div>\n        '), __p += "\n      </div>\n    "), __p += '\n    <div class="intercom-conversation-part-component-spacer"></div>\n  '
            }), __p += "\n  ", shouldNotWrapInBubble(lastComponent) ? (__p += "\n    " + (null == (__t = articleCardMessageTemplate({
                    cardURL: lastComponent[0].url,
                    renderedCard: renderBlocks(lastComponent)
                })) ? "" : __t) + '\n    <div class="intercom-conversation-part-component-spacer"></div>\n    ', part.uploads.length > 0 && (__p += '\n      <div class="intercom-comment-body-container">\n        <div class="intercom-attachments intercom-attachments-stand-alone">\n          ', part.uploads.each(function (e) {
                __p += '\n            <div class="intercom-attachment">\n              <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n            </div>\n          "
            }), __p += "\n        </div>\n      </div>\n    "), __p += "\n  ") : (__p += '\n    <div class="intercom-comment-body-container">\n      <div class="intercom-comment-body intercom-embed-body">\n        ' + (null == (__t = renderBlocks(lastComponent)) ? "" : __t) + "\n      </div>\n      ", 0 === connectedComponentsExceptLast.length && (__p += '\n        <div class="intercom-comment-caret"></div>\n      '), __p += '\n      <div class="intercom-attachments">\n        ', part.uploads.each(function (e) {
                __p += '\n          <div class="intercom-attachment">\n            <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n          </div>\n        "
            }), __p += '\n      </div>\n      <div class="intercom-lwr-composer-container"></div>\n    </div>\n  '), __p += '\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __t, __p = "";
        with (obj)__p += '<div class="intercom-comment-metadata">\n  <span class="intercom-comment-state">\n    ' + (null == (__t = commentState) ? "" : __t) + '\n  </span>\n</div>\n<div class="intercom-comment-readstate"></div>\n';
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment ' + __e(part.byUser() ? "intercom-comment-by-user" : "intercom-comment-by-admin") + " " + __e(part.byInterbot() ? "intercom-comment-by-interbot" : "") + '">\n  ', part.byAdmin() && (__p += "\n    ", __p += part.adminAvatar() ? '\n      <img src="' + __e(part.adminAvatar()) + '" class="intercom-comment-avatar">\n    ' : '\n      <div class="intercom-comment-avatar intercom-default-admin-avatar">' + __e(part.adminInitials()) + "</div>\n    ", __p += "\n  "), __p += '\n  <div class="intercom-comment-body-container ' + __e(part.isPending() ? "intercom-comment-pending" : "") + '">\n    <div class="intercom-comment-body intercom-embed-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n    <div class="intercom-attachments">\n      ', part.uploads.each(function (e) {
                __p += '\n        <div class="intercom-attachment">\n          <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n        </div>\n      "
            }), __p += '\n    </div>\n    <div class="intercom-comment-caret"></div>\n    <div class="intercom-lwr-composer-container"></div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            with (obj)__p += '<div class="intercom-composer-upload-error">' + __e(t("max-upload-size", {number: 40})) + '</div>\n<div class="intercom-composer-textarea-container">\n  <input type="submit" class="intercom-composer-send-button" value="' + __e(t("send")) + '"></input>\n  <input style="display:none" type="file">\n  <div class="intercom-composer-emoji-selector-container"></div>\n  <div class="intercom-composer-textarea">\n    <strong class="intercom-composer-action-button intercom-composer-emoji-button" title="' + __e(t("insert-emoji")) + '"></strong>\n    <strong class="intercom-composer-action-button intercom-composer-upload-button" title="' + __e(t("send-attachment")) + '"></strong>\n    <pre><span></span><br></pre>\n    <textarea></textarea>\n  </div>\n</div>\n<div class="intercom-composer-press-enter-to-send">' + __e(t("press-enter-to-send")) + "</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)conversation.lastAdmin() ? (__p += "\n  ", __p += conversation.lastAdminAvatar(!1) ? '\n    <img src="' + __e(conversation.lastAdminAvatar(!1)) + '" class="intercom-conversations-item-admin-avatar" />\n  ' : '\n    <div class="intercom-conversations-item-admin-avatar intercom-conversations-item-admin-avatar-no-image">' + __e(conversation.lastAdminInitials()) + "</div>\n  ", __p += "\n") : __p += '\n    <div class="intercom-conversations-item-user-avatar"></div>\n', __p += '\n<div class="intercom-conversations-item-body-container">\n  <div class="intercom-conversations-item-body">\n    <div class="intercom-conversations-item-header">\n      <div class="intercom-conversations-item-timestamp"></div>\n      <div class="intercom-conversations-item-title-container">\n        <div class="intercom-conversations-item-title">\n          ', __p += conversation.lastAdmin() ? "\n            " + __e(conversation.lastAdminName()) + "\n          " : "\n            " + __e(t("you")) + "\n          ", __p += '\n        </div>\n      </div>\n    </div>\n    <div class="intercom-conversations-item-summary">\n      <div class="intercom-conversations-item-readstate"></div>\n      ' + (null == (__t = preview) ? "" : __t) + "\n    </div>\n  </div>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += adminName ? "\n  " + __e(adminFirstName) + "\n" : "\n  " + __e(appName) + "\n", __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)__p += '<div class="intercom-sheet-header">\n  <a class="intercom-sheet-header-button intercom-sheet-header-conversations-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n    <div class="intercom-unread-counter"></div>\n  </a>\n  <div class="intercom-sheet-header-title-container">\n    <b class="intercom-sheet-header-title"></b>\n  </div>\n  <div class="intercom-sheet-header-generic-title"></div>\n  <a class="intercom-sheet-header-button intercom-sheet-header-close-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n  <a class="intercom-sheet-header-button intercom-sheet-header-minimize-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n</div>\n<div class="intercom-sheet-body">\n  <div class="intercom-sheet-spinner"></div>\n</div>\n<div class="intercom-sheet-content">\n  <div class="intercom-sheet-content-container">\n    <div class="intercom-app-profile-container"></div>\n    <div class="intercom-article-card-container"></div>\n    <div class="intercom-conversation-parts-container">\n      <div class="intercom-conversation-parts"></div>\n    </div>\n  </div>\n</div>\n<div class="intercom-composer-container">\n</div>\n';
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-sheet-header">\n  <div class="intercom-sheet-header-title-container">\n    <b class="intercom-sheet-header-title">' + __e(appName) + '</b>\n  </div>\n  <a class="intercom-sheet-header-button intercom-sheet-header-close-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n</div>\n<div class="intercom-sheet-body">\n  <div class="intercom-sheet-spinner"></div>\n</div>\n<div class="intercom-sheet-content intercom-conversations-content">\n  <div class="intercom-sheet-content-container">\n    <div class="intercom-conversations-items"></div>\n    <div class="intercom-conversations-spinner"></div>\n  </div>\n  <div class="intercom-no-conversations">\n    <div class="intercom-no-conversations-icon"></div>\n    ' + __e(t("no-conversations")) + "\n  </div>\n</div>\n", inboundMessagingEnabled && (__p += '\n  <div class="intercom-sheet-footer intercom-conversations-footer">\n    <a class="intercom-conversations-new-conversation-button" href="#"><i></i>' + __e(t("new-message")) + "</a>\n  </div>\n"), __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment ' + __e(isAdminPart ? "intercom-image-only-admin-comment" : "intercom-image-only-user-comment") + '">\n  ', isAdminPart && adminAvatar && (__p += '\n    <img src="' + __e(adminAvatar) + '" class="intercom-comment-avatar">\n  '), __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-image-only-comment-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)__p += '<div class="intercom-image-viewer-overlay"></div>\n';
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment intercom-comment-by-admin">\n  ', __p += adminAvatar ? '\n    <img src="' + __e(adminAvatar) + '" class="intercom-comment-avatar">\n  ' : '\n    <div class="intercom-comment-avatar intercom-default-admin-avatar">' + __e(adminInitials) + "</div>\n  ", __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body">\n      <div class="intercom-is-typing-icon"></div>\n    </div>\n    <div class="intercom-comment-caret"></div>\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __t, __p = "";
        with (obj)__p += '<div class="intercom-knowledgebase-article-overlay"></div>\n<iframe class="intercom-knowledgebase-article-body" src=' + (null == (__t = iFrameUrl) ? "" : __t) + ">\n";
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            with (obj)__p += '<span class="relative-time-in-text">' + __e(lastActive) + "</span>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)__p += '<div class="intercom-launcher-button">\n  <div class="intercom-launcher-initials"></div>\n</div>\n<div class="intercom-launcher-badge"></div>\n<div class="intercom-launcher-preview">\n  <div class="intercom-launcher-preview-body"></div>\n  <div class="intercom-launcher-preview-caret"></div>\n  <div class="intercom-launcher-preview-close"></div>\n</div>\n';
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            with (obj)__p += '<div class="intercom-sheet-header">\n  <div class="intercom-sheet-header-title-container">\n    <b class="intercom-sheet-header-title">' + __e(appName) + '</b>\n  </div>\n  <a class="intercom-sheet-header-button intercom-sheet-header-close-button" href="#">\n    <div class="intercom-sheet-header-button-icon"></div>\n  </a>\n</div>\n<div class="intercom-sheet-body">\n  <div class="intercom-sheet-spinner"></div>\n</div>\n<div class="intercom-sheet-content">\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)__p += '<div class="intercom-lwr-composer-options intercom-lwr-composer-options-emotions">\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-happy" data-option="happy">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-neutral" data-option="neutral">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-sad" data-option="sad">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n</div>\n';
        return __p
    }
}, function (module, exports) {
    module.exports = function (obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)__p += '<div class="intercom-lwr-composer-options intercom-lwr-composer-options-thumbs">\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-thumbs-up" data-option="thumbs_up">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n  <div class="intercom-lwr-composer-option intercom-lwr-composer-option-thumbs-down" data-option="thumbs_down">\n    <div class="intercom-lwr-icon"></div>\n  </div>\n</div>\n';
        return __p
    }
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)isArtAndEmphasised ? (__p += '\n\n  <div class="intercom-art-emp-email-icon-container">\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="21" height="29" viewBox="0 0 21 29">\n      <defs>\n        <style>\n\n          .cls-2 {\n            fill: ' + __e(customColor) + ';\n          }\n        </style>\n      </defs>\n      <path d="M20.057,8.673 C19.511,8.760 18.999,8.389 18.912,7.843 C18.196,3.357 16.254,1.449 11.767,2.165 C11.222,2.252 10.709,1.881 10.622,1.335 C10.535,0.789 10.907,0.277 11.452,0.190 C17.028,-0.700 19.997,1.953 20.887,7.528 C20.974,8.074 20.602,8.586 20.057,8.673 ZM15.692,8.357 C15.375,6.579 14.646,5.046 12.281,5.135 C11.729,5.155 11.223,4.851 11.136,4.305 C11.049,3.759 11.415,3.199 11.966,3.160 C15.375,2.915 17.431,4.893 17.667,8.042 C17.708,8.593 17.382,9.100 16.837,9.187 C16.291,9.274 15.789,8.901 15.692,8.357 ZM13.532,10.634 C16.199,11.975 18.355,14.537 18.355,17.600 C18.355,17.600 18.355,21.924 18.355,21.924 C18.355,22.408 19.093,22.749 20.056,23.146 C20.498,23.327 20.761,23.800 20.668,24.269 C20.576,24.738 20.175,25.079 19.698,25.079 C19.698,25.079 13.633,25.079 13.633,25.079 C13.344,26.639 12.007,28.146 10.458,28.146 C8.909,28.146 7.523,26.639 7.223,25.079 C7.223,25.079 0.969,25.079 0.969,25.079 C0.492,25.079 0.080,24.742 -0.012,24.273 C-0.105,23.805 0.147,23.336 0.589,23.155 C1.574,22.749 2.312,22.408 2.312,21.924 C2.312,21.924 2.312,17.600 2.312,17.600 C2.312,14.536 3.551,11.974 6.218,10.633 C6.534,8.901 8.053,7.584 9.875,7.584 C11.697,7.584 13.216,8.901 13.532,10.634 ZM10.458,26.146 C10.923,26.146 11.321,25.617 11.511,25.079 C11.511,25.079 9.405,25.079 9.405,25.079 C9.595,25.617 9.994,26.146 10.458,26.146 ZM11.592,11.302 C11.592,10.354 10.822,9.584 9.875,9.584 C8.928,9.584 8.158,10.354 8.158,11.302 C8.158,11.705 7.915,12.069 7.543,12.225 C5.277,13.169 4.312,15.128 4.312,17.600 C4.312,17.600 4.312,21.924 4.312,21.924 C4.312,22.370 4.210,22.751 4.040,23.079 C4.040,23.079 16.627,23.079 16.627,23.079 C16.456,22.751 16.355,22.370 16.355,21.924 C16.355,21.924 16.355,17.600 16.355,17.600 C16.355,15.129 14.472,13.170 12.207,12.225 C11.835,12.069 11.592,11.705 11.592,11.302 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>\n    </svg>\n  </div>\n\n    ', __p += haveEmail ? '\n      <div class="intercom-art-emp-email-text-container">\n        <p>' + __e(emailText) + "</p>\n      </div>\n    " : '\n      <div class="intercom-art-emp-email-form-container">\n        <p>' + __e("Get your reply by email:") + '</p>\n        <div class="intercom-art-emp-email-input">\n          <input type="email" name="email" autocapitalize="off" placeholder="' + __e(placeHolderText) + '" formnovalidate="true"/>\n          <input type="submit" class="intercom-art-emp-email-submit" value="" />\n        </div>\n      </div>\n    ', __p += "\n") : (__p += "\n  ", __p += haveEmail ? "\n    <p>" + __e(emailText) + "</p>\n  " : "\n    <p>" + __e(emailCollectorText) + "</p>\n    <div class=" + __e(containerClass) + '>\n      <input type="email" name="email" autocapitalize="off" placeholder="' + __e(placeHolderText) + '" formnovalidate="true"/>\n      <input type="submit" value="" />\n    </div>\n  ', __p += "\n"), __p += "\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            with (obj)__p += '<a href="https://www.intercom.io/powered-by?utm_source=web-app&amp;utm_medium=' + __e(trackingType) + "&amp;utm_campaign=powered-by-intercom&amp;product=" + __e(productName) + "&amp;company=" + __e(companyName) + '" target="_blank">\n  <i></i>\n  <span>We run on <u>Intercom</u></span>\n</a>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            with (obj)__p += '<div class="intercom-proactive-response-time" style="color: ' + __e(appColor) + ';">\n  <span class="relative-time-in-text">' + __e(proactiveResponseTime) + "</span>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)part.adminAvatar() && (__p += '\n  <div class="intercom-small-announcement-avatar-container">\n    <img src="' + __e(part.adminAvatar()) + '" class="intercom-small-announcement-avatar" />\n  </div>\n'), __p += '\n<div class="intercom-small-announcement">\n  <div class="intercom-small-announcement-body-container">\n    <div class=" intercom-small-announcement-body intercom-embed-body">\n      ' + (null == (__t = partBody) ? "" : __t) + '\n    </div>\n    <div class="intercom-attachments">\n      ', part.uploads.each(function (e) {
                __p += '\n        <div class="intercom-attachment">\n          <a href="' + __e(e.url()) + '" target="_blank">' + __e(e.name()) + "</a>\n        </div>\n      "
            }), __p += '\n    </div>\n    <div class="intercom-lwr-composer-container"></div>\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment ' + __e(isAdminPart ? "intercom-sticker-admin-comment" : "intercom-sticker-user-comment") + '">\n  ', isAdminPart && adminAvatar && (__p += '\n    <img src="' + __e(adminAvatar) + '" class="intercom-comment-avatar">\n  '), __p += '\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-sticker-comment-body">\n      ', __p += nativeStickerSupport ? '\n        <div class="intercom-sticker-native" title="' + __e(stickerIdentifier) + '">\n          ' + __e(unicodeSticker) + "\n        </div>\n      " : '\n        <div title="' + __e(stickerIdentifier) + '">\n          <img alt="' + __e(stickerIdentifier) + '" src="' + __e(stickerUrl) + '" class="intercom-sticker-image" style="cursor:default;">\n        </div>\n      ', __p += '\n    </div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment intercom-comment-by-user intercom-upload-comment ', upload.isImage() && (__p += "intercom-upload-image"), __p += " " + __e(showSending ? "intercom-upload-is-uploading" : "") + '">\n  <div class="intercom-comment-body-container">\n    <div class="intercom-comment-body intercom-upload-body">\n      ', upload.isImage() ? (__p += "\n        ", __p += upload.hasDimensions() ? '\n          <img src="' + __e(upload.url()) + '" style="width: ' + __e(upload.width()) + "px; height: " + __e(upload.height()) + 'px;" alt="' + __e(upload.name()) + '">\n        ' : '\n          <img src="' + __e(upload.url()) + '" alt="' + __e(upload.name()) + '">\n        ', __p += "\n      ") : __p += '\n        <a href="' + __e(upload.url()) + '" target="_blank">' + __e(upload.name()) + "</a>\n      ", __p += '\n    </div>\n    <div class="intercom-comment-caret"></div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n    <div class="intercom-comment-metadata">\n      <span class="intercom-comment-state">\n        ', showFailed && (__p += "\n          " + __e(t("failed")) + "\n        "), __p += "\n        ", showSending && (__p += "\n          " + __e(t("uploading")) + '\n          <div class="intercom-attachment-progress-bar">\n            <div class="intercom-attachment-progress-percentage"></div>\n          </div>\n          <span class="intercom-upload-remove"></span>\n        '),
                __p += "\n      </span>\n    </div>\n  </div>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            with (obj)__p += '<div class="intercom-video-launcher-video-area">\n    <video class="' + (null == (__t = video.className) ? "" : __t) + '" autoplay loop muted >\n        <source src="' + (null == (__t = video.source) ? "" : __t) + '" >\n    </video>\n    <div class="intercom-launcher-hovercard-video-overlay intercom-launcher-hovercard-video-overlay-nocaret">\n    </div>\n  <div class="intercom-launcher-video-topbar" >\n    <div class="intercom-launcher-video-topbar-status">\n      <div class="intercom-launcher-video-topbar-status-icon-container">\n        <div class="intercom-launcher-video-topbar-muted-icon intercom-launcher-video-topbar-status-icon"></div>\n        <div class="intercom-launcher-video-topbar-unmuted-icon intercom-launcher-video-topbar-status-icon"></div>\n        <div class="intercom-launcher-video-topbar-replay-icon intercom-launcher-video-topbar-status-icon"></div>\n      </div>\n      <div class="intercom-launcher-video-topbar-status-text-container">\n        <span class="intercom-launcher-video-topbar-muted-text intercom-launcher-video-topbar-status-text">Click for sound</span>\n        <span class="intercom-launcher-video-topbar-unmuted-text intercom-launcher-video-topbar-status-text">Click to mute</span>\n        <span class="intercom-launcher-video-topbar-replay-text intercom-launcher-video-topbar-status-text">Replay</span>\n      </div>\n    </div>\n    <div class="intercom-launcher-video-topbar-close-icon"></div>\n  </div>\n\n</div>\n\n<div class="intercom-video-launcher-hovercard-textarea">\n  <div class="intercom-video-launcher-admin-upload-time">\n    ' + (null == (__t = admin.adminLastSeenString) ? "" : __t) + '\n  </div>\n    <textarea placeholder="' + (null == (__t = t("new-conversation-placeholder")) ? "" : __t) + '"></textarea>\n</div>\n\n<div class="intercom-launcher-overlay-admin-information-container">\n    <img src="' + __e(admin.avatar) + '" class="intercom-launcher-overlay-video-admin-avatar" />\n    <div class="intercom-launcher-overlay-video-admin-name">\n      ' + __e(admin.firstName) + "\n    </div>\n</div>\n";
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (module, exports, __webpack_require__) {
    (function (_) {
        module.exports = function (obj) {
            obj || (obj = {});
            var __t, __p = "", __e = _.escape;
            Array.prototype.join;
            with (obj)__p += '<div class="intercom-comment ' + __e(part.byUser() ? "intercom-comment-by-user" : "intercom-comment-by-admin") + '">\n  ', part.byAdmin() && part.adminAvatar() && (__p += '\n    <img src="' + __e(part.adminAvatar()) + '" class="intercom-comment-avatar">\n  '), __p += '\n  <div class="intercom-video-reply">\n    ' + (null == (__t = partBody) ? "" : __t) + '\n    <div class="intercom-video-reply-controls">\n      <div class="intercom-video-reply-controls-shading"></div>\n      <div class="intercom-video-reply-controls-bar">\n        <div class="intercom-video-reply-controls-playpausebutton"></div>\n        <div class="intercom-video-reply-controls-progressbar"></div>\n        <div class="intercom-video-reply-controls-mutebutton"></div>\n      </div>\n    </div>\n  </div>\n  <div class="intercom-comment-metadata-container">\n  </div>\n</div>\n';
            return __p
        }
    }).call(exports, __webpack_require__(95))
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(340), r = n(342);
    e.exports = i.View.extend({
        events: {
            "click .intercom-sheet-header-conversations-button": "onConversationsClicked",
            "click .intercom-sheet-header-close-button": "onCloseClicked",
            "click .intercom-sheet-header-minimize-button": "onMinimizeClicked"
        }, initialize: function (e) {
            this.settings = e.settings
        }, show: function () {
            return this.callback("willShow", arguments), this.$el.addClass("intercom-sheet-active"), this.callback("didShow", arguments), this
        }, hide: function () {
            return this.callback("willHide", arguments), this.$el.removeClass("intercom-sheet-active"), this.callback("didHide", arguments), this
        }, minimize: function () {
            this.callback("willMinimize", arguments), this.$el.addClass("intercom-sheet-minimized"), this.callback("didMinimize", arguments)
        }, maximize: function () {
            this.callback("willMaximize", arguments), this.$el.removeClass("intercom-sheet-minimized"), this.callback("didMaximize", arguments)
        }, isMinimized: function () {
            return this.$el.hasClass("intercom-sheet-minimized")
        }, isActive: function () {
            return this.$el.hasClass("intercom-sheet-active")
        }, getScrollPosition: function () {
            return this.getScrollHeight() - this.getHeight() - this.getScrollTop()
        }, getScrollTop: function () {
            return this.$(".intercom-sheet-content").scrollTop()
        }, setScrollTop: function (e) {
            return this.$(".intercom-sheet-content").scrollTop(e)
        }, setAnimatedScrollTop: function (e) {
            return this.$(".intercom-sheet-content").animate({scrollTop: e}, 800)
        }, getScrollHeight: function () {
            return this.$(".intercom-sheet-content").prop("scrollHeight")
        }, getHeight: function () {
            return this.$(".intercom-sheet-content").height()
        }, scrollToBottom: function () {
            this.setScrollTop(this.getScrollHeight())
        }, callback: function a(e, t) {
            var a = this[e];
            void 0 !== a && a.apply(this, t)
        }, onCloseClicked: function (e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:close"), o.increment("closeClicked")
        }, onMinimizeClicked: function (e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:minimize"), o.increment("minimizeButtonClicked")
        }, onConversationsClicked: function (e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:conversations"), o.increment("inboxButtonClicked")
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(311), r = n(240), a = n(324), s = n(312), c = n(340), l = n(454), m = n(415), u = n(455), d = n(319), p = n(456), h = n(462), f = n(463), g = n(464), v = n(469), b = n(326);
    e.exports = s.View.extend({
        commentTemplate: m.load("comment"),
        commentFromBlocksTemplate: m.load("comment-from-blocks"),
        announcementTemplate: m.load("announcement"),
        smallAnnouncementTemplate: m.load("small-announcement"),
        uploadTemplate: m.load("upload-part"),
        imageOnlyTemplate: m.load("image-only-part"),
        stickerTemplate: m.load("sticker-part"),
        articleCardMessageTemplate: m.load("article-card-message"),
        commentMetadataTemplate: m.load("comment-metadata"),
        className: "intercom-conversation-part",
        events: {
            click: "onClick",
            "click .intercom-comment-body a": "openLink",
            "click .intercom-announcement-body a": "openLink",
            "click .intercom-small-announcement-body a": "openLink",
            "click .intercom-article-lightbox-link": "openArticle"
        },
        initialize: function (e) {
            this.failed = !1, this.conversation = e.conversation, this.lwrComposerView = new p({model: this.model}), this.listenTo(this.lwrComposerView, "submit", this.onLwrComposerSubmitted), this.listenTo(this.model, "change", this.onChange), this.listenTo(this.model.uploads, "upload:complete", this.triggerPartSave)
        },
        render: function () {
            return this.model.isAnnouncement() ? this.renderAnnouncement() : this.model.isSmallAnnouncement() ? this.renderSmallAnnouncement() : this.model.isSticker() ? this.renderSticker() : this.model.isVideoReply() ? this.renderVideoReply() : this.model.isArticleCardMessage() ? this.renderArticleCardMessage() : this.shouldRenderUsingCommentBlocksTemplate() ? this.renderCommentFromBlocks() : this.renderComment(), this.renderLwrComposer(), this.renderImages(), this.$(".intercom-attachments").toggle(this.model.uploads.any()), this
        },
        renderImages: function () {
            this.$([".intercom-comment-body img", ".intercom-announcement-body img", ".intercom-small-announcement-body img"].join(", ")).each(function () {
                new g({el: this}).render()
            })
        },
        renderArticleCardMessage: function () {
            this.$el.html(this.articleCardMessageTemplate({
                cardURL: this.model.getURLForArticleCard(),
                renderedCard: this.model.renderedBody()
            }))
        },
        renderSticker: function () {
            var e = this.model.getStickerData();
            this.$el.html(this.stickerTemplate({
                adminAvatar: this.model.adminAvatar(),
                stickerIdentifier: e.identifier,
                isAdminPart: this.model.byAdmin(),
                stickerUrl: "https://js.intercomcdn.com/images/stickers/" + e.assetId + ".png",
                unicodeSticker: e.unicodeSticker,
                nativeStickerSupport: a.features.emoji() && !a.features.touchScreen()
            })), this.renderMetadata()
        },
        renderAnnouncement: function () {
            this.$el.html(this.announcementTemplate({
                part: this.model,
                partBody: u.maybeSubstituteWithSpans(this.model.renderedBody(), "intercom-emoji-sub-icon")
            }))
        },
        renderSmallAnnouncement: function () {
            this.$el.html(this.smallAnnouncementTemplate({
                part: this.model,
                partBody: u.maybeSubstituteWithSpans(this.model.renderedBody(), "intercom-emoji-sub-icon")
            }))
        },
        shouldRenderUsingCommentBlocksTemplate: function () {
            return this.model.shouldRenderBodyFromBlocks()
        },
        shouldNotWrapInBubble: function (e) {
            return !i.isUndefined(e) && 1 === e.length && i.contains(this.part.BLOCK_LONERS, e[0].type)
        },
        renderCommentFromBlocks: function () {
            var e = this.model.connectedComponents();
            this.insertCommentHTML(u.maybeSubstituteWithSpans(this.commentFromBlocksTemplate({
                part: this.model,
                connectedComponentsExceptLast: e.slice(0, -1),
                lastComponent: e[e.length - 1],
                renderBlocks: b.renderBlocks,
                shouldNotWrapInBubble: this.shouldNotWrapInBubble,
                articleCardMessageTemplate: this.articleCardMessageTemplate
            }), "intercom-emoji-sub-icon")), this.renderMetadata()
        },
        renderComment: function () {
            var e = this.model.renderedBody();
            this.model.isNew() && (e = this.replaceNewLineWithBreak(e)), this.insertCommentHTML(this.getCommentTemplate(e)), this.hasPendingUploads() ? (this.$el.find(".intercom-upload-remove").click(o.proxy(this.removeUpload, this, this.model, this.$el)), this.uploadPendingUploads()) : this.$(".intercom-attachment-progress-percentage").css({width: "100%"}), this.renderMetadata()
        },
        renderVideoReply: function () {
            this.$el.html(new f({model: this.model}).render().el), this.renderMetadata()
        },
        renderMetadata: function () {
            var e;
            this.model.byUser() && (this.failed ? e = r.translate("failed") : this.showSending() ? e = r.translate("sending") : this.model.isPending() && (e = "Not sent yet")), this.model.isUpload() || this.$(".intercom-comment-metadata-container").append(this.commentMetadataTemplate({commentState: e})), this.$el.toggleClass("intercom-conversation-part-failed", this.failed), this.showCreatedAt() && (this.$(".intercom-comment-metadata").append((new h).render(this.getCreatedAt(), this.model.byUser() ? r.translate("delivered") : void 0).el), this.model.shouldShowAdminSeenState() && this.$(".intercom-comment-metadata").append(this.model.isSeenByAdmin() ? ". " + r.translate("seen") + "." : ". " + r.translate("not-seen-yet") + "."))
        },
        getCommentTemplate: function (e) {
            return this.model.isUpload() ? this.uploadTemplate({
                part: this.model,
                upload: this.model.uploads.first(),
                showSending: this.showSending(),
                showFailed: this.failed
            }) : this.model.bodyIsImage() && 0 === this.model.uploads.length ? this.imageOnlyTemplate({
                partBody: e,
                adminAvatar: this.model.adminAvatar(),
                isAdminPart: this.model.byAdmin()
            }) : this.commentTemplate({
                part: this.model,
                partBody: u.maybeSubstituteWithSpans(e, "intercom-emoji-sub-icon")
            })
        },
        insertCommentHTML: function (e) {
            if (this.shouldNotReRenderContent()) {
                var t = o(e).find(".intercom-comment-metadata-container");
                this.$(".intercom-comment-metadata-container").replaceWith(t), this.$(".intercom-comment").removeClass("intercom-upload-is-uploading")
            } else this.$el.html(e)
        },
        shouldNotReRenderContent: function () {
            return this.failed && this.model.isImageUpload() || !this.model.isNew() && this.model.isImageUpload() && !i.isEmpty(this.$el.html())
        },
        renderLwrComposer: function () {
            this.model.isLwrMessage() ? this.$(".intercom-lwr-composer-container").html(this.lwrComposerView.render().el) : this.lwrComposerView.hide()
        },
        renderFailed: function () {
            this.failed = !0, this.render()
        },
        showSending: function () {
            return !this.failed && this.model.isNew()
        },
        showCreatedAt: function () {
            return this.model.byInterbot() ? !0 : !(this.failed || this.model.isPending() || this.model.isNew() || this.model.isChatAutoMessage())
        },
        getCreatedAt: function () {
            return this.model.isMessage() ? this.conversation.createdAt() : this.model.createdAt()
        },
        setUnread: function () {
            this.$el.addClass("intercom-conversation-part-unread")
        },
        replaceNewLineWithBreak: function (e) {
            return i.isEmpty(e) ? void 0 : (e = e.replace(/^\s+|\s+$/g, "").replace(/(?:\r\n|\r|\n){2,}/g, "</p><p>").replace(/(?:\r\n|\r|\n)/g, "<br>"), e.indexOf("<p>") > 0 && (e = "<p>" + e + "</p>"), e)
        },
        openArticle: function (e) {
            e.preventDefault();
            var t = new v(e.currentTarget.href + "?lightbox=1");
            o("#intercom-container").append(t.render().$el)
        },
        openLink: function (e) {
            var t = o(e.target).closest("a");
            l.openLink(t) && e.preventDefault()
        },
        hasPendingUploads: function () {
            return this.model.uploads.pendingUploads().length > 0
        },
        uploadPendingUploads: function () {
            this.failed || i.each(this.model.uploads.pendingUploads(), i.bind(function (e) {
                this.listenTo(e, "upload:progress", this.updateUploadProgress), this.listenTo(e, "upload:error", i.bind(this.errorUploading, this, e)), e.isImage() && this.previewUpload(e), e.upload()
            }, this))
        },
        previewUpload: function (e) {
            this.$("img").attr("src", e.imageData())
        },
        stopListeningToUploads: function () {
            this.stopListening(this.model.uploads), i.each(this.model.uploads, i.bind(function (e) {
                this.stopListening(e)
            }, this))
        },
        errorUploading: function (e) {
            e.attributes.public_url || (c.increment("errorUploading"), this.renderFailed())
        },
        updateUploadProgress: function (e, t) {
            var n = parseInt(e / t * 100, 10);
            this.$(".intercom-attachment-progress-percentage").css({width: n + "%"})
        },
        triggerPartSave: function () {
            this.trigger("part:save")
        },
        removeUpload: function (e, t, n) {
            n.preventDefault(), this.stopListeningToUploads(), this.conversation.parts.remove(this.model), t.slideUp(function () {
                t.remove()
            })
        },
        getHeight: function () {
            return this.$el.outerHeight(!0)
        },
        createLwrPart: function (e, t) {
            return new d({
                conversation_id: this.conversation.id,
                message_id: this.model.id,
                reply_type: e,
                reply_option: t
            }).save()
        },
        onChange: function () {
            this.failed = !1, this.render()
        },
        onClick: function () {
            this.failed && (this.failed = !1, this.hasPendingUploads() || this.trigger("retry"), this.render())
        },
        onLwrComposerSubmitted: function (e, t) {
            this.createLwrPart(e, t), this.trigger("lwr:submit")
        }
    })
}, function (e, t, n) {
    "use strict";
    function i() {
        return r.features.uiwebview()
    }

    var o = n(95), r = n(324), a = n(301);
    e.exports = {
        openUrlInNewWindowAndNullOpener: function (e) {
            if (!o.isEmpty(e)) {
                var t = window.open("");
                t.opener = null, t.document.write('<meta http-equiv="refresh" content="0; url=' + e + '">'), t.document.close()
            }
        }, openUrlInNewWindow: function (e) {
            return i() ? !1 : (this.openUrlInNewWindowAndNullOpener(e), !0)
        }, openLink: function (e) {
            var t = e.data("via") || e.attr("href"), n = e.attr("href");
            return o.isUndefined(t) ? !1 : (e.attr("href", t), this.shouldOpenInSameWindow(n) ? (e.attr("target", "_self"), !1) : this.openUrlInNewWindow(t))
        }, shouldOpenInSameWindow: function (e) {
            return o.isUndefined(e) ? !1 : this.getWindowLocationHostname() === a.parse(e).hostname
        }, getWindowLocationHostname: function () {
            return window.location.hostname
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(231), o = n(324);
    t.sizePx = function () {
        return 16
    }, t.maybeSubstituteWithSpans = function (e, n) {
        return o.features.emoji() ? i.wrapUnicodeEmojiInTitledSpans(t.sizePx(), i.substituteUnicodeForAsciiEmojis(e), n) : i.substituteSpansForEmojis(t.sizePx(), e, n)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(333), s = n(443), c = n(442), l = n(457), m = n(458), u = n(459), d = n(460), p = n(461);
    e.exports = r.View.extend({
        thumbsTemplate: s,
        emotionsTemplate: c,
        tagName: "form",
        id: "intercom-lwr-composer",
        className: "intercom-lwr-composer",
        events: {"click .intercom-lwr-composer-option": "onSelected"},
        render: function () {
            var e = this.getLwrComposerType();
            return "thumbs" === e ? this.renderThumbs() : "emotions" === e && this.renderEmotions(), this.markSelectedOption(), this.$el.toggleClass("intercom-lwr-composer-enabled", 0 === this.$(".intercom-lwr-composer-option-selected").length), this.show(), this
        },
        renderThumbs: function () {
            this.$el.html(this.thumbsTemplate()), this.$(".intercom-lwr-composer-option-thumbs-up .intercom-lwr-icon").html(l), this.$(".intercom-lwr-composer-option-thumbs-down .intercom-lwr-icon").html(m)
        },
        renderEmotions: function () {
            this.$el.html(this.emotionsTemplate()), this.$(".intercom-lwr-composer-option-happy .intercom-lwr-icon").html(u), this.$(".intercom-lwr-composer-option-neutral .intercom-lwr-icon").html(d), this.$(".intercom-lwr-composer-option-sad .intercom-lwr-icon").html(p)
        },
        show: function () {
            this.$el.addClass("intercom-lwr-composer-active")
        },
        hide: function () {
            this.$el.removeClass("intercom-lwr-composer-active")
        },
        enable: function () {
            this.$el.addClass("intercom-lwr-composer-enabled")
        },
        disable: function () {
            this.$el.removeClass("intercom-lwr-composer-enabled")
        },
        onSelected: function (e) {
            e.preventDefault();
            var t = i(e.target).closest(".intercom-lwr-composer-option");
            if (this.$el.hasClass("intercom-lwr-composer-enabled")) {
                t.addClass("intercom-lwr-composer-option-selected intercom-lwr-composer-option-pop"), this.$el.removeClass("intercom-lwr-composer-enabled");
                var n = t.data("option");
                this.trigger("submit", this.model.getLwrType(), n), a.playDelivered()
            }
        },
        markSelectedOption: function () {
            var e = this.model.getLwrResponse();
            this.$(".intercom-lwr-composer-option").each(function (t, n) {
                i(n).toggleClass("intercom-lwr-composer-option-selected", i(n).data("option") === e)
            })
        },
        getLwrComposerType: function () {
            var e = this.model.getLwrResponse();
            return o.contains(["thumbs_up", "thumbs_down"], e) ? "thumbs" : o.contains(["happy", "neutral", "sad"], e) ? "emotions" : this.model.getLwrType()
        }
    })
}, function (e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M3.59655172,4.76491228 L2.96896552,4.76491228 L0.531034483,4.76491228 L-0.0965517241,4.76491228 L-0.0965517241,5.40350877 L-0.0965517241,12.9929825 L-0.0965517241,13.6315789 L0.531034483,13.6315789 L2.99310345,13.6315789 L3.62068966,13.6315789 L3.62068966,12.9929825 L3.62068966,5.40350877 L3.62068966,4.76491228 L3.59655172,4.76491228 L3.59655172,4.76491228 Z"></path>\n    <path d="M9.06206897,0.0245614035 C8.36206897,0.0245614035 7.56551724,0.564912281 7.56551724,2.1122807 C7.56551724,2.52982456 7.56551724,2.84912281 6.47931034,3.85614035 C5.39310345,4.86315789 4.37931034,5.64912281 4.35517241,5.64912281 L4.06551724,5.87017544 L4.06551724,6.23859649 L4.06551724,11.9368421 L4.06551724,12.4035088 L4.47586207,12.6 L6.35862069,13.5578947 C6.50344828,13.6315789 7.22758621,14 8.26551724,14 L8.43448276,14 L8.86896552,14 L10.462069,14 L11.5,14 L11.6448276,14 C12.6344828,14 13.4310345,13.1894737 13.4310345,12.1824561 C13.4310345,12.0350877 13.4068966,11.8877193 13.3827586,11.7403509 C13.7931034,11.3964912 14.0586207,10.8807018 14.0586207,10.3157895 C14.0586207,10.1684211 14.0344828,10.045614 14.0103448,9.89824561 C14.4448276,9.57894737 14.7103448,9.03859649 14.7103448,8.47368421 C14.7103448,8.17894737 14.637931,7.88421053 14.5172414,7.63859649 C14.7344828,7.34385965 14.8551724,6.9754386 14.8551724,6.58245614 C14.8551724,5.5754386 14.0586207,4.76491228 13.0689655,4.76491228 L10.6551724,4.76491228 C10.8965517,4.2 11.0896552,3.5122807 11.0896552,2.8 C11.0896552,1.08070175 10.0275862,0.0245614035 9.06206897,0.0245614035 L9.06206897,0.0245614035 L9.06206897,0.0245614035 Z"></path>\n  </g>\n</svg>\n'
}, function (e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M3.59655172,9.23508772 L3.59655172,8.59649123 L3.59655172,1.00701754 L3.59655172,0.392982456 L2.96896552,0.392982456 L0.531034483,0.392982456 L-0.0965517241,0.392982456 L-0.0965517241,1.03157895 L-0.0965517241,8.59649123 L-0.0965517241,9.23508772 L0.531034483,9.23508772 L2.99310345,9.23508772 L3.59655172,9.23508772 L3.59655172,9.23508772 Z"></path>\n    <path d="M9.06206897,13.9754386 C10.0517241,13.9754386 11.0896552,12.9192982 11.0896552,11.2 C11.0896552,10.5122807 10.8965517,9.8 10.6551724,9.23508772 L13.0689655,9.23508772 C14.0586207,9.23508772 14.8551724,8.4245614 14.8551724,7.41754386 C14.8551724,7.0245614 14.7344828,6.65614035 14.5172414,6.36140351 C14.637931,6.11578947 14.7103448,5.82105263 14.7103448,5.52631579 C14.7103448,4.93684211 14.4448276,4.42105263 14.0103448,4.10175439 C14.0344828,3.97894737 14.0586207,3.83157895 14.0586207,3.68421053 C14.0586207,3.11929825 13.7931034,2.60350877 13.3827586,2.25964912 C13.4310345,2.1122807 13.4310345,1.96491228 13.4310345,1.81754386 C13.4310345,0.810526316 12.6344828,8.8817842e-16 11.6448276,8.8817842e-16 L11.5,8.8817842e-16 L10.462069,8.8817842e-16 L8.86896552,8.8817842e-16 L8.43448276,8.8817842e-16 L8.26551724,8.8817842e-16 C7.22758621,8.8817842e-16 6.50344828,0.368421053 6.35862069,0.442105263 L4.47586207,1.4 L4.06551724,1.59649123 L4.06551724,2.06315789 L4.06551724,7.76140351 L4.06551724,8.12982456 L4.35517241,8.35087719 C4.35517241,8.35087719 5.36896552,9.13684211 6.45517241,10.1684211 C7.54137931,11.1754386 7.54137931,11.4947368 7.54137931,11.9122807 C7.54137931,13.4350877 8.36206897,13.9754386 9.06206897,13.9754386 L9.06206897,13.9754386 L9.06206897,13.9754386 Z"></path>\n  </g>\n</svg>\n'
}, function (e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M9,2 C12.9,2 16,5.1 16,9 C16,12.9 12.9,16 9,16 C5.1,16 2,12.9 2,9 C2,5.1 5.1,2 9,2 L9,2 Z M9,0 C4,0 0,4 0,9 C0,14 4,18 9,18 C14,18 18,14 18,9 C18,4 14,0 9,0 L9,0 L9,0 Z"></path>\n    <circle cx="9" cy="10" r="4"></circle>\n    <rect class="intercom-lwr-option-background" x="5" y="6" width="8" height="4" fill="#aaaaaa"></rect>\n    <circle cx="6.5" cy="6.5" r="1.5"></circle>\n    <circle cx="11.5" cy="6.5" r="1.5"></circle>\n  </g>\n</svg>\n'
}, function (e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <path d="M9,2 C12.9,2 16,5.1 16,9 C16,12.9 12.9,16 9,16 C5.1,16 2,12.9 2,9 C2,5.1 5.1,2 9,2 L9,2 Z M9,0 C4,0 0,4 0,9 C0,14 4,18 9,18 C14,18 18,14 18,9 C18,4 14,0 9,0 L9,0 L9,0 Z"></path>\n    <circle cx="6.5" cy="6.5" r="1.5"></circle>\n    <circle cx="11.5" cy="6.5" r="1.5"></circle>\n    <path d="M13,12 C13,12.6 12.6,13 12,13 L6,13 C5.4,13 5,12.6 5,12 L5,12 C5,11.4 5.4,11 6,11 L12,11 C12.6,11 13,11.4 13,12 L13,12 L13,12 Z"></path>\n  </g>\n</svg>\n'
}, function (e, t) {
    e.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g class="intercom-lwr-composer-icon" fill="#aaaaaa">\n    <g transform="translate(5.000000, 9.000000)">\n      <path d="M4,2 C5.1,2 6,2.9 6,4 C6,5.1 5.1,6 4,6 C2.9,6 2,5.1 2,4 C2,2.9 2.9,2 4,2 L4,2 Z M4,0 C1.8,0 0,1.8 0,4 C0,6.2 1.8,8 4,8 C6.2,8 8,6.2 8,4 C8,1.8 6.2,0 4,0 L4,0 L4,0 Z"></path>\n    </g>\n    <rect class="intercom-lwr-option-background" x="5" y="13" width="8" height="4" fill="#aaaaaa"></rect>\n    <path d="M9,2 C12.9,2 16,5.1 16,9 C16,12.9 12.9,16 9,16 C5.1,16 2,12.9 2,9 C2,5.1 5.1,2 9,2 L9,2 Z M9,0 C4,0 0,4 0,9 C0,14 4,18 9,18 C14,18 18,14 18,9 C18,4 14,0 9,0 L9,0 L9,0 Z"></path>\n    <circle cx="6.5" cy="6.5" r="1.5"></circle>\n    <circle cx="11.5" cy="6.5" r="1.5"></circle>\n  </g>\n</svg>\n'
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(416);
    e.exports = o.View.extend({
        tagName: "span", className: "intercom-relative-time", render: function (e, t) {
            var n = i.bind(function () {
                this.$el.html(r.relativeTimeInWords(e, t))
            }, this);
            return n(), setInterval(n, 1e3), this
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(415);
    e.exports = o.View.extend({
        template: r.load("video-reply-part"),
        className: "intercom-video-reply-part",
        events: {
            "click .intercom-video-reply-controls-playpausebutton": "togglePlayPause",
            "click .intercom-video-reply-controls-mutebutton": "toggleMute",
            "click video": "togglePlayPause",
            "click .intercom-video-reply-controls": "togglePlayPause"
        },
        render: function () {
            this.$el.html(this.template({part: this.model, partBody: this.model.renderedBody()}));
            var e = this.video();
            return e.controls = !1, e.addEventListener("timeupdate", i.bind(this.updateProgressBar, this)), this.startPlayback(e), this.updateVideoControls(), this
        },
        video: function () {
            return i.isUndefined(this._video) && (this._video = this.$("video")[0]), this._video
        },
        startPlayback: function (e) {
            e.loop = !0, e.muted = !0, e.addEventListener("canplay", i.bind(function () {
                e.play(), this.updateVideoControls()
            }, this)), e.play(), this.updateVideoControls()
        },
        updateVideoControls: function () {
            var e = this.video();
            this.$(".intercom-video-reply-controls-playpausebutton").toggleClass("intercom-paused", e.paused).toggleClass("intercom-unpaused", !e.paused), this.$(".intercom-video-reply-controls-mutebutton").toggleClass("intercom-muted", e.muted).toggleClass("intercom-unmuted", !e.muted)
        },
        updateProgressBar: function () {
            var e = this.video(), t = Math.round(100 * (e.currentTime / e.duration)), n = i.template("linear-gradient(to right,white, white <%= percentProgress %>%, rgba(255,255,255,0.5) <%= percentProgress %>%, rgba(255,255,255,0.5) <%= percentProgress %>%)")({percentProgress: t});
            this.$(".intercom-video-reply-controls-progressbar").css("background", n)
        },
        togglePlayPause: function (e) {
            e.stopPropagation();
            var t = this.video();
            t.paused ? t.play() : t.pause(), this.updateVideoControls()
        },
        toggleMute: function (e) {
            e.stopPropagation();
            var t = this.video();
            t.muted && !t.paused && (t.currentTime = 0), t.muted = !t.muted, this.updateVideoControls()
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e, t) {
        e.naturalWidth > 0 && e.naturalHeight > 0 ? r.defer(t) : o(e).load(t)
    }

    var o = n(311), r = n(95), a = n(312), s = n(465), c = n(454), l = n(324);
    e.exports = a.View.extend({
        render: function () {
            return i(this.el, r.bind(function () {
                this.isScaled() && !this.isLink() && this.$el.off("click").on("click", r.bind(this.onClick, this)).addClass("intercom-image-viewable")
            }, this)), this
        }, open: function () {
            l.features.ie8() ? this.openInNewWindow() : this.openInViewer()
        }, openInViewer: function () {
            var e = new s({image: this.el});
            o("#intercom-container").append(e.render().$el)
        }, openInNewWindow: function () {
            c.openUrlInNewWindow(this.$el.attr("src"))
        }, isLink: function () {
            return this.$el.closest("a").length > 0
        }, isScaled: function () {
            return this.$el.width() < this.el.naturalWidth || this.$el.height() < this.el.naturalHeight
        }, onClick: function (e) {
            e.preventDefault(), this.open()
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(466), s = n(415);
    e.exports = r.View.extend({
        className: "intercom-image-viewer",
        template: s.load("image-viewer"),
        events: {click: "onClick"},
        initialize: function (e) {
            this.zoomedImageView = new a({image: e.image})
        },
        render: function () {
            return this.$el.html(this.template()), this.$el.append(this.zoomedImageView.render().$el), o.defer(o.bind(function () {
                this.$(".intercom-image-viewer-overlay").transition({opacity: .8}, 300)
            }, this)), i(document).on("keyup.intercom-image-overlay", o.bind(this.onKeyUp, this)), this
        },
        close: function () {
            this.$(".intercom-image-viewer-overlay").transition({
                opacity: 0,
                complete: o.bind(this.remove, this)
            }, 300), this.zoomedImageView.remove(), i(document).off("keyup.intercom-image-overlay")
        },
        onClick: function () {
            this.close()
        },
        onKeyUp: function (e) {
            27 === e.keyCode && this.close()
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(467);
    e.exports = r.View.extend({
        className: "intercom-zoomed-image",
        tagName: "img",
        padding: 20,
        initialize: function (e) {
            this.image = e.image, this.$image = i(e.image)
        },
        render: function () {
            this.$el.attr("src", i(this.image).attr("src")), i(window).on("resize.intercom-image-viewer", o.bind(this.onResize, this));
            var e = window.innerWidth, t = window.innerHeight;
            return this.resize(e, t), this.addPlaceholder(), a.show(this), this
        },
        resize: function (e, t) {
            var n = e - 2 * this.padding, i = t - 2 * this.padding, o = Math.min(n / this.image.naturalWidth, i / this.image.naturalHeight);
            o > 1 && (o = 1), this.width = this.image.naturalWidth * o, this.height = this.image.naturalHeight * o, this.left = e / 2 - this.width / 2, this.top = t / 2 - this.height / 2, this.$el.css({
                top: this.top,
                left: this.left,
                width: this.width,
                height: this.height
            })
        },
        remove: function () {
            this.stopListening(), i(window).off("resize.intercom-image-viewer"), a.hide(this, o.bind(function () {
                this.removePlaceholder(), this.$el.remove()
            }, this))
        },
        addPlaceholder: function () {
            this.$placeholder = i("<div/>").addClass("intercom-zoomed-image-placeholder").width(this.$image.width()).height(this.$image.height()), this.$image.hide(), this.$image.parent().append(this.$placeholder)
        },
        removePlaceholder: function () {
            this.$placeholder.remove(), this.$image.show()
        },
        onResize: o.throttle(function () {
            var e = window.innerWidth, t = window.innerHeight;
            this.resize(e, t)
        }, 500)
    })
}, function (e, t, n) {
    "use strict";
    function i(e) {
        var t = e.$placeholder.width(), n = e.$placeholder.height(), i = e.$placeholder.offset();
        i.top -= o(document).scrollTop(), i.left -= o(document).scrollLeft();
        var r = t / e.width, a = i.left + t / 2 - (e.left + e.width / 2), s = i.top + n / 2 - (e.top + e.height / 2);
        return {x: a, y: s, scale: r}
    }

    n(468);
    var o = n(311), r = n(95);
    t.show = function (e) {
        e.$el.transition(i(e), 100).transition({x: 0, y: 0, scale: 1}, 300, "ease")
    }, t.hide = function (e, t) {
        e.$el.transition(r.extend(i(e), {complete: t}), 300, "ease")
    }
}, function (e, t, n) {
    var i, o, r;
    !function (a, s) {
        o = [n(311)], i = s, r = "function" == typeof i ? i.apply(t, o) : i, !(void 0 !== r && (e.exports = r))
    }(this, function (e) {
        function t(e) {
            if (e in u.style)return e;
            for (var t = ["Moz", "Webkit", "O", "ms"], n = e.charAt(0).toUpperCase() + e.substr(1), i = 0; i < t.length; ++i) {
                var o = t[i] + n;
                if (o in u.style)return o
            }
        }

        function n() {
            return u.style[d.transform] = "", u.style[d.transform] = "rotateY(90deg)", "" !== u.style[d.transform]
        }

        function i(e) {
            return "string" == typeof e && this.parse(e), this
        }

        function o(e, t, n) {
            t === !0 ? e.queue(n) : t ? e.queue(t, n) : e.each(function () {
                n.call(this)
            })
        }

        function r(t) {
            var n = [];
            return e.each(t, function (t) {
                t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = c(t), d[t] && (t = c(d[t])), -1 === e.inArray(t, n) && n.push(t)
            }), n
        }

        function a(t, n, i, o) {
            var a = r(t);
            e.cssEase[i] && (i = e.cssEase[i]);
            var s = "" + m(n) + " " + i;
            parseInt(o, 10) > 0 && (s += " " + m(o));
            var c = [];
            return e.each(a, function (e, t) {
                c.push(t + " " + s)
            }), c.join(", ")
        }

        function s(t, n) {
            n || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = d.transform, e.cssHooks[t] = {
                get: function (n) {
                    var i = e(n).css("transit:transform");
                    return i.get(t)
                }, set: function (n, i) {
                    var o = e(n).css("transit:transform");
                    o.setFromString(t, i), e(n).css({"transit:transform": o})
                }
            }
        }

        function c(e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }

        function l(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }

        function m(t) {
            var n = t;
            return "string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = e.fx.speeds[n] || e.fx.speeds._default), l(n, "ms")
        }

        e.transit = {
            version: "0.9.12",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var u = document.createElement("div"), d = {}, p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        d.transition = t("transition"), d.transitionDelay = t("transitionDelay"), d.transform = t("transform"), d.transformOrigin = t("transformOrigin"), d.filter = t("Filter"), d.transform3d = n();
        var h = {
            transition: "transitionend",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        }, f = d.transitionEnd = h[d.transition] || null;
        for (var g in d)d.hasOwnProperty(g) && "undefined" == typeof e.support[g] && (e.support[g] = d[g]);
        return u = null, e.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, e.cssHooks["transit:transform"] = {
            get: function (t) {
                return e(t).data("transform") || new i
            }, set: function (t, n) {
                var o = n;
                o instanceof i || (o = new i(o)), "WebkitTransform" !== d.transform || p ? t.style[d.transform] = o.toString() : t.style[d.transform] = o.toString(!0), e(t).data("transform", o)
            }
        }, e.cssHooks.transform = {set: e.cssHooks["transit:transform"].set}, e.cssHooks.filter = {
            get: function (e) {
                return e.style[d.filter]
            }, set: function (e, t) {
                e.style[d.filter] = t
            }
        }, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
            get: function (e) {
                return e.style[d.transformOrigin]
            }, set: function (e, t) {
                e.style[d.transformOrigin] = t
            }
        }, e.cssHooks.transition = {
            get: function (e) {
                return e.style[d.transition]
            }, set: function (e, t) {
                e.style[d.transition] = t
            }
        }), s("scale"), s("scaleX"), s("scaleY"), s("translate"), s("rotate"), s("rotateX"), s("rotateY"), s("rotate3d"), s("perspective"), s("skewX"), s("skewY"), s("x", !0), s("y", !0), i.prototype = {
            setFromString: function (e, t) {
                var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
                n.unshift(e), i.prototype.set.apply(this, n)
            }, set: function (e) {
                var t = Array.prototype.slice.apply(arguments, [1]);
                this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
            }, get: function (e) {
                return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
            }, setter: {
                rotate: function (e) {
                    this.rotate = l(e, "deg")
                }, rotateX: function (e) {
                    this.rotateX = l(e, "deg")
                }, rotateY: function (e) {
                    this.rotateY = l(e, "deg")
                }, scale: function (e, t) {
                    void 0 === t && (t = e), this.scale = e + "," + t
                }, skewX: function (e) {
                    this.skewX = l(e, "deg")
                }, skewY: function (e) {
                    this.skewY = l(e, "deg")
                }, perspective: function (e) {
                    this.perspective = l(e, "px")
                }, x: function (e) {
                    this.set("translate", e, null)
                }, y: function (e) {
                    this.set("translate", null, e)
                }, translate: function (e, t) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== e && void 0 !== e && (this._translateX = l(e, "px")), null !== t && void 0 !== t && (this._translateY = l(t, "px")), this.translate = this._translateX + "," + this._translateY
                }
            }, getter: {
                x: function () {
                    return this._translateX || 0
                }, y: function () {
                    return this._translateY || 0
                }, scale: function () {
                    var e = (this.scale || "1,1").split(",");
                    return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
                }, rotate3d: function () {
                    for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t)e[t] && (e[t] = parseFloat(e[t]));
                    return e[3] && (e[3] = l(e[3], "deg")), e
                }
            }, parse: function (e) {
                var t = this;
                e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (e, n, i) {
                    t.setFromString(n, i)
                })
            }, toString: function (e) {
                var t = [];
                for (var n in this)if (this.hasOwnProperty(n)) {
                    if (!d.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n))continue;
                    "_" !== n[0] && (e && "scale" === n ? t.push(n + "3d(" + this[n] + ",1)") : e && "translate" === n ? t.push(n + "3d(" + this[n] + ",0)") : t.push(n + "(" + this[n] + ")"))
                }
                return t.join(" ")
            }
        }, e.fn.transition = e.fn.transit = function (t, n, i, r) {
            var s = this, c = 0, l = !0, u = e.extend(!0, {}, t);
            "function" == typeof n && (r = n, n = void 0), "object" == typeof n && (i = n.easing, c = n.delay || 0, l = "undefined" == typeof n.queue ? !0 : n.queue, r = n.complete, n = n.duration), "function" == typeof i && (r = i, i = void 0), "undefined" != typeof u.easing && (i = u.easing, delete u.easing), "undefined" != typeof u.duration && (n = u.duration, delete u.duration), "undefined" != typeof u.complete && (r = u.complete, delete u.complete), "undefined" != typeof u.queue && (l = u.queue, delete u.queue), "undefined" != typeof u.delay && (c = u.delay, delete u.delay), "undefined" == typeof n && (n = e.fx.speeds._default), "undefined" == typeof i && (i = e.cssEase._default), n = m(n);
            var p = a(u, n, i, c), h = e.transit.enabled && d.transition, g = h ? parseInt(n, 10) + parseInt(c, 10) : 0;
            if (0 === g) {
                var v = function (e) {
                    s.css(u), r && r.apply(s), e && e()
                };
                return o(s, l, v), s
            }
            var b = {}, y = function (t) {
                var n = !1, i = function () {
                    n && s.unbind(f, i), g > 0 && s.each(function () {
                        this.style[d.transition] = b[this] || null
                    }), "function" == typeof r && r.apply(s), "function" == typeof t && t()
                };
                g > 0 && f && e.transit.useTransitionEnd ? (n = !0, s.bind(f, i)) : window.setTimeout(i, g), s.each(function () {
                    g > 0 && (this.style[d.transition] = p), e(this).css(u)
                })
            }, w = function (e) {
                this.offsetWidth, y(e)
            };
            return o(s, l, w), this
        }, e.transit.getTransitionValue = a, e
    })
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(415);
    e.exports = i.View.extend({
        className: "intercom-knowledgebase-article",
        articleTemplate: o.load("knowledgebase-article"),
        events: {"click .intercom-knowledgebase-article-overlay": "close"},
        initialize: function (e) {
            this.url = e
        },
        render: function () {
            return this.$el.html(this.articleTemplate({iFrameUrl: this.url})), this
        },
        close: function () {
            this.remove()
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e) {
        e.stopPropagation()
    }

    var o = n(311), r = n(95), a = n(312), s = n(324), c = n(471), l = n(413), m = n(472), u = n(322), d = n(333), p = n(340), h = n(321), f = n(473), g = n(415), v = n(474), b = n(475);
    e.exports = a.View.extend({
        template: g.load("composer"),
        tagName: "form",
        id: "intercom-composer",
        className: "intercom-composer",
        attributes: {action: "", method: "POST"},
        events: {
            submit: "onSubmitted",
            "keyup textarea": "onTextChanged",
            "input textarea": "onTextChanged",
            "focus textarea": "updateComposer",
            "blur textarea": "onComposerBlur",
            "keydown textarea": "onKeyDown",
            "click .intercom-composer-upload-button": "onUploadButtonClicked",
            "click .intercom-composer-emoji-button": "onEmojiButtonClicked",
            "change input[type=file]": "onUploadsAdded"
        },
        initialize: function (e) {
            this.timeout = null, this.settings = e.settings, this.uploads = new h, this.isVisitorAutoMessage = !1, this.$(".intercom-composer-upload-error").hide(), this.emojiSelectorView = new f({onEmojiIconClickCallback: r.bind(this.insertEmoji, this)}), this.listenTo(this.uploads, "add", this.submitUpload)
        },
        render: function () {
            return this.$el.html(this.template()), this.$(".intercom-composer-emoji-selector-container").append(this.emojiSelectorView.render().el), this.$(".intercom-composer-emoji-button").toggle(this.isEmojiEnabled()), this.$(".intercom-composer-upload-button").toggle(this.isUploadingEnabled()), this.updateSubmit(), this
        },
        setConversationId: function (e) {
            this.conversationId = e;
            var t = c.loadDraft(this.conversationId);
            r.isUndefined(t) || this.setText(t.getText())
        },
        setVisitorAutoMessage: function (e) {
            this.isVisitorAutoMessage = e
        },
        insertEmoji: function (e) {
            0 === this.getText().length ? (this.setText(e), this.$el.submit()) : (this._insertTextAtCursor(e), this.saveDraft(), this.focus())
        },
        enable: function () {
            return this.$("textarea, input").prop("disabled", ""), this.$("input[type=submit]").css("visibility", "inherit"), this.$el.removeClass("intercom-composer-disabled"), this.updateSubmit(), this
        },
        disable: function () {
            return this.$("textarea, input").prop("disabled", "disabled"), this.$("input[type=submit]").css("visibility", "hidden"), this.$el.addClass("intercom-composer-disabled"), this
        },
        reset: function () {
            return this.uploads.reset(), this.$("textarea").val(""), this.$("pre span").empty(), this.updateComposer(), this.conversationId = null, this
        },
        focus: function () {
            return this.$("textarea").focus(), this
        },
        blur: function () {
            return this.$("textarea").blur(), this
        },
        isEmojiEnabled: function () {
            return !s.features.ie8() && !s.features.touchScreen() && void 0 !== this.settings
        },
        isUploadingEnabled: function () {
            return s.features.upload() && void 0 !== this.settings
        },
        isSubmitButtonEnabled: function () {
            return !this.$("input[type=submit]").prop("disabled")
        },
        isFocused: function () {
            return this.$("textarea").is(":focus")
        },
        hide: function () {
            return this.$el.addClass("intercom-composer-inactive"), this
        },
        show: function () {
            return this.$el.removeClass("intercom-composer-inactive"), this
        },
        updatePosition: function () {
            var e = 0;
            this.$el.hasClass("intercom-composer-inactive") || (e = this.$el.closest(".intercom-composer").outerHeight(!0)), this.$el.closest(".intercom-conversation").find(".intercom-sheet-content").css({bottom: e})
        },
        updateSubmit: function () {
            var e = o.trim(this.getText()), t = r.isEmpty(e);
            this.$("input[type=submit]").prop("disabled", t), s.features.touchScreen() && (this.$("input[type=submit]").show(), this.$("textarea").css("font-size", "20px"))
        },
        hasAnyUploads: function () {
            return this.uploads.length > 0
        },
        saveDraft: function () {
            var e = new m(this.getText());
            e.isEmpty() ? c.removeDraft(this.conversationId) : c.saveDraft(e, this.conversationId)
        },
        scrollIntoView: function () {
            var e = this.$el.closest(".intercom-sheet-content");
            e.scrollTop(e.prop("scrollHeight"))
        },
        setPlaceholder: function (e) {
            var t = o("<div/>").html(e).text();
            this.$("textarea").attr("placeholder") !== t && this.$("textarea").attr({placeholder: t})
        },
        getText: function () {
            return this.$("textarea").val()
        },
        isEmpty: function () {
            return "" === this.getText()
        },
        setText: function (e) {
            r.isString(e) && (this.$("textarea").val(e), this.updateComposer())
        },
        clearText: function () {
            this.$("textarea").val(""), this.$("pre span").empty(), this.updateComposer()
        },
        updateComposer: function () {
            this.$("pre span").text(this.getText()), this.updatePosition(), this.scrollIntoView(), this.updateSubmit(), this.$(".intercom-composer-textarea").addClass("intercom-composer-focused")
        },
        onComposerBlur: function () {
            this.$(".intercom-composer-textarea").removeClass("intercom-composer-focused")
        },
        onTextChanged: function (e) {
            e.stopPropagation(), this.updateComposer(), this.saveDraft(), this.eventShouldTriggerUserIsTyping(e) && (this.trigger("userIsTyping"), o(document).trigger(o.Event("intercom.keyup")))
        },
        queueEnterToSendAnimation: function () {
            s.features.touchScreen() || (this.resetEnterToSendTimeout(), r.isEmpty(this.getText()) ? this.hideEnterToSend() : this.timeout = setTimeout(r.bind(this.showEnterToSendAnimation, this), 2e3))
        },
        showEnterToSendAnimation: function () {
            v(this)
        },
        eventShouldTriggerUserIsTyping: function (e) {
            if ("input" === e.type)return !0;
            if (!e.originalEvent)return !0;
            var t = e.originalEvent.keyCode;
            return t > 46 && 91 > t || t > 145 || 32 === t
        },
        submitUpload: function () {
            var e = this.getText();
            this.clearText(), this.$el.submit(), this.setText(e)
        },
        onSubmitted: function (e) {
            e.preventDefault(), this.hideEmojiSelector();
            var t = this.getText();
            c.removeDraft(this.conversationId), r.isEmpty(t) && !this.hasAnyUploads() || (this.trigger("submit", t, this.uploads.clone()), this.resetUploads(), d.playSubmit(), s.features.touchScreen() && this.blur(), this._trackMessageSent(), this.hideEnterToSend())
        },
        resetEnterToSendTimeout: function () {
            clearTimeout(this.timeout)
        },
        hideEnterToSend: function () {
            this.resetEnterToSendTimeout(), b(this)
        },
        resetEnterToSend: function () {
            this.$(".intercom-composer-press-enter-to-send").css({
                height: "auto",
                display: "none"
            }), this.$(".intercom-powered-by").css({opacity: 1})
        },
        submitKeyPressed: function (e) {
            return 13 !== e.keyCode || e.altKey || e.shiftKey ? !1 : (e.preventDefault(), !0)
        },
        onKeyDown: function (e) {
            this.submitKeyPressed(e) && this.isSubmitButtonEnabled() && this.$el.submit(), this._trackComposerTyping(), e.stopPropagation()
        },
        onUploadButtonClicked: function () {
            this.$("input[type=file]").click()
        },
        onUploadError: function () {
            this.$(".intercom-composer-upload-error").show(), this.updateComposer()
        },
        showEmojiSelector: function () {
            this.$(".intercom-emoji-selector").on("click", i), this.$(".intercom-emoji-selector").show(), o(".intercom-conversation.intercom-sheet-active").on("click.hideEmojiSelector", r.bind(this.hideEmojiSelector, this)), this.$(".intercom-composer-emoji-button").addClass("intercom-composer-emoji-button-active"), this.focus()
        },
        hideEmojiSelector: function () {
            this.$(".intercom-emoji-selector").off("click", i), this.$(".intercom-emoji-selector").hide(), o(".intercom-conversation.intercom-sheet-active").off("click.hideEmojiSelector"), this.$(".intercom-composer-emoji-button").removeClass("intercom-composer-emoji-button-active")
        },
        onEmojiButtonClicked: function (e) {
            e.stopPropagation(), this.$(".intercom-emoji-selector").is(":visible") ? this.hideEmojiSelector() : this.showEmojiSelector()
        },
        getFiles: function () {
            return this.$("input[type=file]")[0].files
        },
        onUploadsAdded: function () {
            var e = this.getFiles();
            r.each(e, r.bind(function (e) {
                var t = u.fromFile(e);
                t.isTooBig() ? (p.increment("uploadTooBig"), this.onUploadError()) : t.isImage() ? this.previewAndAddUpload(t) : this.uploads.add(t)
            }, this))
        },
        previewAndAddUpload: function (e) {
            if (s.features.upload()) {
                var t = new FileReader, n = new Image;
                t.onload = r.bind(function (t) {
                    n.src = t.target.result, n.onload = r.bind(function () {
                        e.set({imageData: t.target.result, width: n.width, height: n.height}), this.uploads.add(e)
                    }, this)
                }, this), t.readAsDataURL(e.file)
            } else this.uploads.add(e)
        },
        resetUploads: function () {
            var e = this.$("input[type=file]");
            this.$(".intercom-composer-upload-error").hide(), e.replaceWith(e.val("").clone(!0)), this.uploads.reset()
        },
        metricsPrefix: function () {
            return this.conversationId || this.isVisitorAutoMessage ? this.isVisitorAutoMessage ? "inReplyToVisitorAutoMessage." : void 0 : "fromNewConversationView."
        },
        _getCursorPosition: function () {
            return this.$("textarea")[0].selectionStart
        },
        _setCursorPosition: function (e) {
            this.$("textArea")[0].setSelectionRange(e, e)
        },
        _insertTextAtCursor: function (e) {
            var t = this.$("textarea"), n = this._getCursorPosition(), i = t.val(), o = i.slice(0, n), r = i.slice(n);
            this.setText(o + e + r), this._setCursorPosition(n + e.length)
        },
        _trackComposerTyping: function () {
            this.conversationId && !this.isVisitorAutoMessage || l.trackSignedOutEvent(this.metricsPrefix() + "uniqueVisitorTypedInComposer")
        },
        _trackMessageSent: function () {
            this.conversationId && !this.isVisitorAutoMessage || l.trackSignedOutEvent(this.metricsPrefix() + "uniqueVisitorSentMessage"), !this.conversationId && l.isTrackedEvent("videoHovercard.uniqueComposerClick") && l.trackSignedOutEvent("videoHovercard.uniqueMessageAfterComposerClick"), !this.conversationId && l.isTrackedEvent("videoHovercard.uniqueOpenMessenger") && l.trackSignedOutEvent("videoHovercard.uniqueMessageAfterOpenMessenger")
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return e ? s + "-" + e : s
    }

    var o = n(341), r = n(472), a = n(94), s = "draft";
    e.exports = {
        loadDraft: function (e) {
            var t = o.sessionStorage.get(i(e));
            return r.fromJSON(t)
        }, removeDraft: function (e) {
            o.sessionStorage.remove(i(e))
        }, saveDraft: function (e, t) {
            e.isEmpty() || (o.sessionStorage.removeAll(s), o.sessionStorage.set(i(t), a.stringify(e.toJSON())))
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        this.text = e
    }

    var o = n(95), r = n(94);
    i.prototype = {
        getText: function () {
            return this.text
        }, isEmpty: function () {
            return o.isEmpty(this.text)
        }, toJSON: function () {
            return {text: this.text}
        }
    }, i.fromJSON = function (e) {
        if (!o.isUndefined(e) && !o.isNull(e)) {
            var t = r.parse(e);
            return new i(t.text)
        }
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(324), r = n(231), a = n(455), s = n(312), c = function (e) {
        return '<span class="intercom-emoji-image" style="' + r.spritemapStyleString(a.sizePx(), e) + '" title="' + r.asciiFromUnicode(e) + '"></span>'
    }, l = function (e, t) {
        return i.reduce(e, function (e, t) {
                return e + '<span class="intercom-emoji-icon" title="' + r.identifierFromUnicode(t) + '">' + t + "</span>"
            }, '<div class="intercom-emoji-selector-panel-large" data-group-idx="' + t + '">') + '<div class="intercom-large-emoji-panel-top-mask" data-group-idx="' + t + '"></div><div class="intercom-large-emoji-panel-bottom-mask" data-group-idx="' + t + '"></div></div>'
    }, m = function (e, t, n) {
        return '<span class="intercom-emoji-group-icon" title="' + t + '"data-group-idx="' + n + '">' + e + "</span>"
    };
    e.exports = s.View.extend({
        className: "intercom-emoji-selector",
        events: {
            "click .intercom-emoji-image": "onEmojiImageClick",
            "click .intercom-emoji-group-icon": "onEmojiGroupIconClick",
            "click .intercom-emoji-icon": "onEmojiIconClick"
        },
        getScrollPosition: function () {
            return this.getScrollHeight() - this.getHeight() - this.getScrollTop()
        },
        getScrollTop: function () {
            return this.$(".intercom-emoji-selector-panel-large.active").scrollTop()
        },
        getScrollHeight: function () {
            return this.$(".intercom-emoji-selector-panel-large.active").prop("scrollHeight")
        },
        getHeight: function () {
            return this.$(".intercom-emoji-selector-panel-large.active").height()
        },
        onScrollLargePanel: function (e) {
            if (o.features.pointerEvents()) {
                var t = this.$('.intercom-large-emoji-panel-top-mask[data-group-idx="' + e.target.dataset.groupIdx + '"]'), n = this.$('.intercom-large-emoji-panel-bottom-mask[data-group-idx="' + e.target.dataset.groupIdx + '"]');
                this.getScrollTop() > 0 && !t.is(":visible") ? t.fadeIn(200) : 0 === this.getScrollTop() && t.is(":visible") && t.fadeOut(200), this.getScrollPosition() > 0 && !n.is(":visible") ? n.fadeIn(200) : 0 === this.getScrollPosition() && n.is(":visible") && n.fadeOut(200)
            }
        },
        initialize: function (e) {
            this.onEmojiIconClickCallback = e.onEmojiIconClickCallback
        },
        render: function () {
            return o.features.emoji() ? (this.renderWithNativeSupport(r.prettyEmoticonsUnicodeGroups()), this.activatePanel(0), this.$(".intercom-emoji-selector-panel-large").on("scroll", i.bind(this.onScrollLargePanel, this))) : this.renderWithoutNativeSupport(r.asciiEmoticonsUnicodeList.slice(0, 12)), this
        },
        renderWithNativeSupport: function (e) {
            this.$el.append(i.reduce(e, function (e, t, n) {
                    var i = r.getGroupRepresentatives()[n];
                    return e + m(i[0], i[1], n)
                }, '<div class="intercom-emoji-selector-panel-header">') + "</div>" + i.reduce(e, function (e, t, n) {
                    return e + l(t, n)
                }, "", this)), o.features.pointerEvents() || this.$(".intercom-large-emoji-panel-bottom-mask").css("display", "none")
        },
        renderWithoutNativeSupport: function (e) {
            this.$el.append(i.reduce(e, function (e, t) {
                    return e + c(t)
                }, '<div class="intercom-emoji-selector-panel-small">') + "</div>")
        },
        onEmojiImageClick: function (e) {
            this.onEmojiIconClickCallback(e.currentTarget.title)
        },
        onEmojiIconClick: function (e) {
            this.onEmojiIconClickCallback(r.unicodeFromIdentifier(e.currentTarget.title))
        },
        onEmojiGroupIconClick: function (e) {
            this.activatePanel(e.currentTarget.dataset.groupIdx)
        },
        activatePanel: function (e) {
            this.$(".intercom-emoji-selector-panel-large.active").removeClass("active"), this.$('.intercom-emoji-selector-panel-large[data-group-idx="' + e + '"]').addClass("active"), this.$(".intercom-emoji-group-icon.active").removeClass("active"), this.$('.intercom-emoji-group-icon[data-group-idx="' + e + '"]').addClass("active")
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e, t) {
        t.transition({opacity: 0, duration: 200}), e.transition({
            opacity: 0,
            duration: 0
        }).delay(200).transition({opacity: 1, duration: 200})
    }

    function o(e) {
        e.transition({height: 0, opacity: 0, duration: 0}).transition({
            height: 16,
            opacity: 1,
            easing: "ease",
            duration: 200
        })
    }

    function r(e) {
        e.bind("click", function (e) {
            e.preventDefault()
        }), e.css("pointer-events", "none")
    }

    n(311), n(468), e.exports = function (e) {
        var t = e.$(".intercom-composer-press-enter-to-send"), n = e.$(".intercom-powered-by"), a = e.$(".intercom-powered-by > a");
        t.is(":visible") || (t.css({display: "block"}), n.length > 0 ? (r(a), i(t, n)) : o(t))
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        e.css({display: "none", height: "auto"})
    }

    function o(e, t) {
        e.transition({
            opacity: 0, duration: 200, complete: function () {
                i(e)
            }
        }), t.transition({opacity: 0, duration: 0}).delay(200).transition({opacity: 1, duration: 200})
    }

    function r(e) {
        e.transition({
            height: 0, opacity: 0, duration: 200, complete: function () {
                i(e)
            }
        })
    }

    function a(e) {
        e.unbind("click"), e.css("pointer-events", "auto")
    }

    n(311), n(468), e.exports = function (e) {
        var t = e.$(".intercom-composer-press-enter-to-send"), n = e.$(".intercom-powered-by"), i = e.$(".intercom-powered-by > a");
        t.is(":hidden") || (n.length > 0 ? (a(i), o(t, n)) : r(t))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(312);
    e.exports = i.View.extend({
        className: "intercom-unread-counter", initialize: function () {
            this.listenTo(this.collection, "add change", this.render)
        }, render: function () {
            var e = this.collection.unread().size();
            return this.$el.toggleClass("intercom-unread-counter-active", e > 0).text(e), this
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(415), r = n(413), a = n(312), s = n(328), c = n(478), l = n(480), m = n(314);
    e.exports = a.View.extend({
        template: o.load("app-profile"),
        adminTemplate: o.load("app-profile-admin"),
        className: "intercom-app-profile",
        events: {"click .intercom-active-admin-avatar": "onAppProfileAvatarClicked"},
        initialize: function (e) {
            this.settings = e.settings, this.app = e.app, this.replyExpectationsView = new c({
                settings: this.settings,
                app: this.app,
                parentView: this
            })
        },
        render: function () {
            var e = this.settings.get("app.active-admins"), t = this.settings.get("app.message"), n = this.settings.get("app.name");
            return m.isEnabled("new-app-profile") && this.$el.addClass("new-intercom-app-profile"), e || t ? (this.$el.html(this.template({
                message: t,
                appName: n
            })), this.renderAdmins(), this.replyExpectationsView.renderForTeamInAppProfile()) : this.$el.hide(), this
        },
        renderAdmins: function () {
            var e = this.settings.get("app.active-admins");
            e && 0 !== e.length ? (this.$(".intercom-active-admins").show(), i.each(e, i.bind(function (e) {
                var t = {
                    avatarUri: s.getUrlForSize(e.avatar, "square_128"),
                    adminFirstName: e.first_name
                }, n = new l(t).html();
                this.$el.find(".intercom-active-admins").append(this.adminTemplate({
                    adminAvatar: n,
                    firstName: e.first_name
                }))
            }, this))) : this.$(".intercom-active-admins").hide()
        },
        hasAvatar: function (e) {
            return !i.isEmpty(e) && e.indexOf("msg-user-icon-73") < 0
        },
        onAppProfileAvatarClicked: function () {
            r.trackSignedOutEvent("uniqueVisitorClickedAvatarInWelcomePanel")
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(415), r = n(479);
    e.exports = i.View.extend({
        proactiveResponseTimeTemplate: o.load("proactive-response-time"),
        initialize: function (e) {
            this.settings = e.settings, this.app = e.app, this.parentView = e.parentView, this.lastActiveView = new r({model: this.app}), this.listenTo(this.app, "change", this.renderForTeamInAppProfile)
        },
        renderForTeamInAppProfile: function () {
            var e = this.parentView.$(".intercom-app-profile-expectations");
            this.hasProactiveResponseTime() ? e.html(this.proactiveResponseTimeHtml()) : e.html(this.teamLastActiveHtml())
        },
        renderForTeamInTitle: function () {
            this.hasProactiveResponseTime() ? this.showAppendedTitleHtml(!0, this.proactiveResponseTimeHtml()) : this.showAppendedTitleHtml(this.hasLastActiveTeamTimestamp(), this.teamLastActiveHtml())
        },
        renderForPreassignedAdminInTitle: function (e) {
            var t = 1e3 * e.last_seen_at;
            this.showAppendedTitleHtml(!0, this.lastActiveView.render({last_active: t}).el)
        },
        renderForTeamOrLastActiveAdminInTitle: function (e) {
            var t = this.conversationHasActiveAdmin(e);
            if (!t && this.hasProactiveResponseTime())this.showAppendedTitleHtml(!0, this.proactiveResponseTimeHtml()); else {
                var n = this.getLastActiveAdminTimestampForConversation(e);
                this.showAppendedTitleHtml(t, this.lastActiveView.render({last_active: n}).el)
            }
        },
        hasProactiveResponseTime: function () {
            return void 0 !== this.app.get("proactive_response_time")
        },
        hasLastActiveTeamTimestamp: function () {
            return void 0 !== this.app.get("last_active")
        },
        getLastActiveAdminTimestampForConversation: function (e) {
            return this.conversationHasActiveAdmin(e) ? e.lastAdminActiveTimestamp() : void 0
        },
        conversationHasActiveAdmin: function (e) {
            return void 0 !== e && void 0 !== e.lastAdmin() && void 0 !== e.lastAdminActiveTimestamp()
        },
        showAppendedTitleHtml: function (e, t) {
            this.toggleTitleHeaderPresence(e), this.appendHtmlToTitleContainer(t)
        },
        toggleTitleHeaderPresence: function (e) {
            var t = this.parentView.$(".intercom-sheet-header-title");
            t.toggleClass("intercom-sheet-header-with-presence", e)
        },
        appendHtmlToTitleContainer: function (e) {
            this.clearExpectations(), this.parentView.$(".intercom-sheet-header-title-container").append(e)
        },
        clearExpectations: function () {
            this.parentView.$(".intercom-sheet-header-title-container .intercom-last-active").remove(), this.parentView.$(".intercom-sheet-header-title-container .intercom-proactive-response-time").remove()
        },
        proactiveResponseTimeHtml: function () {
            var e = this.settings.get("app.color"), t = this.app.get("proactive_response_time");
            return this.proactiveResponseTimeTemplate({appColor: e, proactiveResponseTime: t})
        },
        teamLastActiveHtml: function () {
            return this.lastActiveView.render().el
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(415), a = n(416);
    e.exports = o.View.extend({
        template: r.load("last-active"),
        className: "intercom-last-active",
        initialize: function () {
            this.updateLastSeen = null, this.listenTo(this.model, "change", this.render)
        },
        render: function (e) {
            if (this.clearLastSeenUpdateTimer(), e ? (this.stopListening(this.model), this.last_active = e.last_active) : this.last_active = this.getTeamPresenceTimestamp(), this.last_active) {
                var t = i.bind(function () {
                    this.$el.html(this.template({lastActive: this.getRelativeText((new Date).getTime())}))
                }, this);
                t(), this.$el.show(), this.updateLastSeen = setInterval(t, 6e4)
            } else this.$el.hide();
            return this
        },
        getRelativeText: function () {
            return a.lastActiveTimeInWords(this.last_active)
        },
        clearLastSeenUpdateTimer: function () {
            window.clearInterval(this.updateLastSeen)
        },
        getTeamPresenceTimestamp: function () {
            var e = this.model.get("last_active");
            if (i.isNumber(e))return 1e3 * e
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(415), a = n(320);
    e.exports = o.View.extend({
        template: r.load("admin-avatar"),
        className: "intercom-admin-avatar",
        initialize: function (e) {
            this.avatarUri = e.avatarUri, this.adminFirstName = e.adminFirstName, this.adminFirstInitial = a.firstInitial(this.adminFirstName)
        },
        render: function () {
            return this.$el.html(this.template({
                avatarUri: this.avatarUri,
                adminFirstInitial: this.adminFirstInitial,
                adminFirstName: this.adminFirstName,
                hasAvatar: this.hasAvatar()
            })), this.$el.toggleClass("intercom-admin-fallback-avatar", !this.hasAvatar()), this
        },
        hasAvatar: function () {
            return !i.isEmpty(this.avatarUri) && this.avatarUri.indexOf("msg-user-icon-73") < 0
        },
        html: function () {
            return this.render().$el.prop("outerHTML")
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(415), o = n(312), r = n(328), a = n(480);
    e.exports = o.View.extend({
        template: i.load("admin-profile"),
        adminTemplate: i.load("app-profile-admin"),
        className: "intercom-admin-profile",
        initialize: function (e) {
            this.settings = e.settings
        },
        render: function (e) {
            var t = this.settings.get("rawAppName");
            return this.$el.html(this.template({appName: t})), this.renderVideoAdmin(e), this
        },
        renderVideoAdmin: function (e) {
            var t = {
                avatarUri: r.getUrlForSize(e.avatar, "square_128"),
                adminFirstName: e.first_name
            }, n = new a(t).html(), i = this.$el.find(".intercom-admin-profile-data");
            i.append(this.adminTemplate({adminAvatar: n, firstName: e.first_name}))
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(415);
    e.exports = i.View.extend({
        template: o.load("powered-by"), className: "intercom-powered-by", render: function (e) {
            return this.$el.html(this.template(e)), this
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(415), a = n(484), s = n(487), c = n(488), l = n(326), m = n(314);
    e.exports = o.View.extend({
        template: r.load("auto-response"),
        className: "intercom-auto-response",
        initialize: function (e) {
            this.settings = e.settings, this.message = this.model.getMessage()
        },
        render: function (e) {
            var t = 200;
            if (e = i.defaults({}, e, {delay: 0}), this.$el.toggleClass("intercom-auto-response-active", this.isActive()), !this.isActive())return this;
            if (this.hasAutoResponse() && this.renderTemplate(), this.isArtAnonymousAndEmphasised() && this.$el.addClass("intercom-art-emp-response-container"), m.isEnabled("acquire-email-collector") && (this.$el.removeClass("intercom-auto-response"), this.$el.addClass("intercom-auto-response-acquire"), this.$el.addClass("intercom-new-email-confirmation-padding")), this.isAnonymousUserWithoutEmail()) {
                var n = new a({
                    settings: this.settings,
                    parentView: this,
                    shouldShowReplyDelay: this.shouldShowReplyDelay()
                }).render();
                if (this.$el.append(n.$el), this.hasAutoResponse() && e.delay > 0) {
                    var o = e.delay + t;
                    s(n, o, this, m.isEnabled("acquire-email-collector"))
                }
            }
            return e.delay > 0 && this.$el.hide().delay(e.delay).fadeIn(t), this
        },
        shouldShowReplyDelay: function () {
            return this.model.replyDelayBodyBlockList().length > 0 && l.supportsBlockRendering(this.model.replyDelayBodyBlockList())
        },
        renderTemplate: function () {
            this.$el.html(this.template({
                medianResponseTimeEnabled: this.shouldShowReplyDelay(),
                medianResponseTimeBodyHTML: l.renderBlocks(this.model.replyDelayBodyBlockList()),
                customAutoResponseEnabled: this.settings.get("app.rtm-enabled"),
                customAutoResponse: this.settings.get("app.auto-response"),
                firstName: this.message.getAuthorFirstName(),
                isArtAnonymousAndEmphasised: this.isArtAnonymousAndEmphasised(),
                haveEmail: this.hasEmailOrAnonymousEmail(),
                customColor: this.settings.get("app.color"),
                email: this.emailOrAnonymousEmail(),
                responseTextEnabled: this.responseTextEnabled()
            }))
        },
        hasEmailOrAnonymousEmail: function () {
            return !i.isEmpty(this.settings.get("user.email")) || !i.isEmpty(this.settings.get("user.anonymous-email"))
        },
        emailOrAnonymousEmail: function () {
            return this.settings.get("user.email") || this.settings.get("user.anonymous-email")
        },
        isArtAnonymousAndEmphasised: function () {
            return m.isEnabled("new-app-profile") && this.settings.get("user.anonymous")
        },
        isActive: function () {
            return this.isAnonymousUserWithoutEmail() || this.hasAutoResponse()
        },
        hasAutoResponse: function () {
            return this.showStaticAutoResponse() || this.showCustomAutoResponse() || this.shouldShowReplyDelay()
        },
        isAutoResponseVisible: function () {
            return this.$(".intercom-auto-response-text").is(":visible")
        },
        hasAnonymousForm: function () {
            return this.$("input").is(":visible")
        },
        isAnonymousUserWithoutEmail: function () {
            return this.settings.get("user.anonymous") && i.isEmpty(this.message.getAuthorEmail())
        },
        showStaticAutoResponse: function () {
            return this.model.qualifiesForAutoResponse() && (!this.settings.get("app.rtm-enabled") || this.settings.get("app.rtm-enabled") && this.message.byAdmin())
        },
        showCustomAutoResponse: function () {
            return this.settings.get("app.rtm-enabled") && this.settings.has("app.auto-response") && this.model.qualifiesForAutoResponse()
        },
        removeAutoResponse: function () {
            c(this)
        },
        responseTextEnabled: function () {
            return !this.isAnonymousUserWithoutEmail() || !m.isEnabled("acquire-email-collector")
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(312), a = n(485), s = n(415), c = n(330), l = n(486), m = n(314), u = n(240);
    e.exports = r.View.extend({
        template: s.load("new-anonymous-user"),
        className: "intercom-new-anonymous-user",
        tagName: "form",
        events: {submit: "onSubmit", "input input[name=email]": "onTextChanged"},
        attributes: {novalidate: "novalidate"},
        initialize: function (e) {
            this.settings = e.settings, this.user = c.fromSettings(e.settings), this.parentView = e.parentView, this.shouldShowReplyDelay = e.shouldShowReplyDelay
        },
        render: function () {
            return this.$el.html(this.template({
                haveEmail: this.user.hasEmail(),
                email: this.user.getEmail(),
                emailCollectorText: this.shouldShowReplyDelay ? this.medianResponseText() : this.anonymousEmailResponderText(),
                placeHolderText: this.placeHolderText(),
                isArtAndEmphasised: this.isArtAndEmphasised(),
                customColor: this.customColor(),
                containerClass: this.containerClass(),
                emailText: this.emailText()
            })), this.enable(), m.isEnabled("acquire-email-collector") ? this.$el.addClass("intercom-new-anonymous-user-acquire") : this.isArtAndEmphasised() && this.$el.addClass("intercom-art-emp-email-form"), this
        },
        isArtAndEmphasised: function () {
            return m.isEnabled("new-app-profile")
        },
        customColor: function () {
            return this.settings.get("app.color")
        },
        containerClass: function () {
            return m.isEnabled("acquire-email-collector") ? "intercom-new-anonymous-user-input-container-acquire" : "intercom-new-anonymous-user-input-container"
        },
        medianResponseText: function () {
            return u.translate("median-reply-autoresponse-without-email")
        },
        anonymousEmailResponderText: function () {
            return m.isEnabled("acquire-email-collector") ? "Enter your email to get notified when we reply" : u.translate("anonymous-email-responder")
        },
        placeHolderText: function () {
            return m.isEnabled("acquire-email-collector") || this.isArtAndEmphasised() ? "youremail@domain.com" : u.translate("your-email")
        },
        emailText: function () {
            return m.isEnabled("acquire-email-collector") ? "Thanks! You'll see your reply right here - and we'll notify you at " + this.user.getEmail() : this.isArtAndEmphasised() ? "Thanks! You'll get a reply here and at " + this.user.getEmail() : u.translate("anonymous-email-response", {email: this.user.getEmail()})
        },
        enable: function () {
            this.$el.removeClass("intercom-new-anonymous-user-disabled").find('input[type="submit"]').prop("disabled", "disabled")
        },
        disable: function () {
            this.$el.addClass("intercom-new-anonymous-user-disabled").find("input").prop("disabled", "disabled")
        },
        getEmail: function () {
            return i.trim(this.$("input[name=email]").val())
        },
        onSubmit: function (e) {
            e.preventDefault();
            var t = this.getEmail();
            return a.isValid(t) ? (this.disable(), void this.user.updateAnonymousEmail(t).then(this.playPostSubmitAnimation())) : void this.$("input[type=email]").addClass("intercom-new-anonymous-user-email-invalid")
        },
        playPostSubmitAnimation: function () {
            l(this, this.parentView)
        },
        onTextChanged: function () {
            this.$("input[type=submit]").prop("disabled", o.isEmpty(this.getEmail()) ? "disabled" : ""), this.$("input[type=email]").removeClass("intercom-new-anonymous-user-email-invalid")
        }
    })
}, function (e, t) {
    "use strict";
    t.isValid = function (e) {
        var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e)
    }
}, function (e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        e.$el.transition({height: n + "px", scale: .95, duration: 0}).transition({
            height: i + "px",
            duration: 200
        }).transition({opacity: 1, scale: 1.05, duration: 100}).transition({
            scale: 1,
            duration: 100,
            complete: function () {
                t.isAutoResponseVisible() ? this.transition({
                    opacity: 0,
                    delay: 5e3,
                    duration: 200
                }).slideUp() : this.transition({
                    delay: 5e3, complete: function () {
                        t.removeAutoResponse()
                    }
                })
            }
        })
    }

    function o(e) {
        return e.$el.height()
    }

    n(311), n(468), e.exports = function (e, t) {
        e.$el.transition({
            opacity: 0, duration: 200, complete: function () {
                var n = o(e);
                e.render();
                var r = o(e);
                i(e, t, n, r)
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468), e.exports = function (e, t, n, i) {
        var o = i ? 0 : 400;
        e.$el.hide().transition({
            opacity: 0,
            duration: 0
        }).delay(t + 1800).slideDown({duration: o}).transition({
            opacity: 1, duration: 200, complete: function () {
                n.trigger("auto-response-rendered")
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return e.isAnonymousUserWithoutEmail() && e.hasAnonymousForm() && !e.isAutoResponseVisible() ? void 0 : e.isAnonymousUserWithoutEmail() && e.isAutoResponseVisible() ? e.$(".intercom-auto-response-text") : e.$el
    }

    n(311), n(468), e.exports = function (e) {
        var t = i(e);
        if (t) {
            var n = t.height();
            t.css({height: n}).transition({
                opacity: 0,
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                border: 0,
                duration: 400
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(324), r = n(312), a = n(415), s = n(490);
    e.exports = r.View.extend({
        template: a.load("browser-notification-prompt"),
        className: "intercom-browser-notification-prompt",
        initialize: function (e) {
            this.user = e.user, this.settings = e.settings, this.message = e.message, this.listenTo(this.user, "user-model:notification-permissions-change", this.onNotificationPermissionChange)
        },
        events: {"click .intercom-browser-notification-button": "onBrowserNotificationPromptClicked"},
        render: function () {
            return this.$el.html(this.template({
                prompt: this.prompt(),
                granted: this.granted(),
                denied: this.denied()
            })), this
        },
        isActive: function () {
            return this.settings.get("user.anonymous") && i.isEmpty(this.message.getAuthorEmail())
        },
        onNotificationPermissionChange: function () {
            this.render()
        },
        onBrowserNotificationPromptClicked: function () {
            var e = this.settings.get("app.id"), t = this.settings.get("user.anonymous-id");
            e && t && window.open(this._permissionPromptUrl(e, t), "Intercom", this._windowSettings())
        },
        prompt: function () {
            return this._checkNotificationPermissions("prompt")
        },
        granted: function () {
            return this._checkNotificationPermissions("granted")
        },
        denied: function () {
            return this._checkNotificationPermissions("denied")
        },
        _checkNotificationPermissions: function (e) {
            return o.features.chrome() ? this.settings.get("user.chrome-notification-permission") === e : o.features.firefox() ? this.settings.get("user.firefox-notification-permission") === e : !1
        },
        _permissionPromptUrl: function (e, t) {
            return s.browser_notification_base + "/apps/" + e + "/notification_preferences?anonymous_id=" + t
        },
        _windowSettings: function () {
            var e = 608, t = 416, n = screen.width / 2 - e / 2, i = screen.height / 2 - t / 2;
            return "toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, width=" + e + ", height=" + t + ", top=" + i + ", left=" + n
        }
    })
}, function (e, t) {
    e.exports = {
        api_base: "https://api-iam.intercom.io",
        ping_api_base: "https://api-ping.intercom.io",
        browser_notification_base: "https://app.intercom.io",
        sentry_dsn: "https://10947f071245455fb0a24fe35aa91587@app.getsentry.com/24287"
    }
}, function (e, t, n) {
    "use strict";
    var i = n(484), o = n(492), r = n(240), a = n(314);
    e.exports = i.extend({
        className: "intercom-auto-response intercom-new-anonymous-user", render: function () {
            return this.$el.addClass("intercom-auto-response-active").html(this.template({
                haveEmail: this.user.hasEmail(),
                email: this.user.getEmail(),
                emailCollectorText: this.emailCollectorText(),
                placeHolderText: this.placeHolderText(),
                containerClass: this.containerClass(),
                isArtAndEmphasised: this.isArtAndEmphasised(),
                customColor: this.customColor(),
                emailText: this.emailText()
            })), this.enable(), a.isEnabled("acquire-email-collector") ? (this.$el.removeClass("intercom-auto-response"), this.$el.addClass("intercom-auto-response-acquire"), this.$el.addClass("intercom-new-anonymous-user-acquire"), this.$el.addClass("intercom-new-email-confirmation-padding")) : this.isArtAndEmphasised() && this.$el.addClass("intercom-art-emp-email-form"), this
        }, isArtAndEmphasised: function () {
            return a.isEnabled("new-app-profile")
        }, emailCollectorText: function () {
            return a.isEnabled("acquire-email-collector") ? "Enter your email to get notified when we reply" : r.translate("receive-updates-email-collector")
        }, isActive: function () {
            return this.$el.is(":visible")
        }, enable: function () {
            this.$el.removeClass("intercom-new-anonymous-user-disabled").find('input[type="submit"]').prop("disabled", "disabled")
        }, disable: function () {
            this.$el.addClass("intercom-new-anonymous-user-disabled").find("input").prop("disabled", "disabled")
        }, insertIntoParentView: function () {
            0 === this.parentView.$(".intercom-new-anonymous-user").length && this.$el.insertAfter(this.parentView.$(".intercom-conversation-part").has(".intercom-comment-by-user").first())
        }, playPostSubmitAnimation: function () {
            o(this)
        }, removeFromParentView: function () {
            this.$el.remove()
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e, t, n) {
        e.$el.transition({height: t, duration: 0}).transition({
            height: n, duration: 200, complete: function () {
                e.$el.height(n)
            }
        }), e.$el.children().transition({opacity: 0, duration: 0}).delay(200).transition({opacity: 1, duration: 200})
    }

    function o(e) {
        return e.$el.height()
    }

    n(311), n(468);
    var r = !1;
    e.exports = function (e) {
        e.$el.children().transition({
            opacity: 0, duration: 200, complete: function () {
                if (!r) {
                    r = !0;
                    var t = o(e);
                    e.render();
                    var n = o(e);
                    i(e, t, n)
                }
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(415);
    e.exports = i.View.extend({
        template: o.load("is-typing"),
        className: "intercom-conversation-part intercom-is-typing",
        render: function (e) {
            return this.$el.html(this.template(e)), this
        },
        getHeight: function () {
            return this.$el.outerHeight(!0)
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e, t, n) {
        e.scrollToBottom(), t.$el.transition({opacity: 0, duration: 0}).transition({
            opacity: 100,
            duration: 400
        }), e.$(".intercom-conversation-parts").transition({y: n + "px", duration: 0}).transition({
            y: "0px",
            duration: 400,
            easing: "ease"
        })
    }

    function o(e) {
        e.$el.transition({y: "100px", opacity: 0, duration: 0}).transition({
            opacity: 100,
            queue: !1,
            duration: 200
        }).transition({y: "0px", duration: 400, easing: "snap"})
    }

    function r(e, t, n) {
        return Math.min(e.getHeight() - e.$(".intercom-conversation-parts-container").outerHeight(!0) - e.$(".intercom-app-profile-container").outerHeight(!0), t.getHeight() - n)
    }

    n(311), n(468), e.exports = function (e, t, n) {
        var a = r(e, t, n), s = t.getHeight() - n;
        a > 0 ? o(t) : (a = Math.abs(a) < s ? Math.abs(a) : s, i(e, t, a, n))
    }
}, function (e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        e.scrollToBottom(), e.$(".intercom-sheet-content").transition({y: t + "px", duration: 0}).transition({
            y: "0px",
            duration: 400,
            easing: "ease",
            complete: function () {
                n && i.$el.addClass("intercom-conversation-part-grouped-last")
            }
        })
    }

    function o(e, t) {
        e.$el.transition({y: "+=" + t + "px", duration: 0}).transition({
            y: "0px",
            duration: 400,
            easing: "snap",
            complete: function () {
                this.addClass("intercom-conversation-part-grouped-last")
            }
        }), e.$(".intercom-comment-metadata-container").transition({opacity: 0, duration: 0}).transition({
            opacity: 1,
            duration: 100
        })
    }

    function r(e, t) {
        e.$el.transition({y: t + "px", opacity: 0, duration: 0}).transition({
            opacity: 100,
            queue: !1,
            duration: 200
        }).transition({y: "0px", duration: 400, easing: "snap"})
    }

    function a(e, t, n) {
        return Math.min(e.getScrollPosition(), t.getHeight() - n)
    }

    function s(e, t, n) {
        if (!n)return 0;
        e.$(".intercom-comment-caret").remove();
        var i = e.model.byInterbot() ? 0 : 200;
        e.$(".intercom-comment-avatar").transition({opacity: 0, duration: i});
        var o = t.outerHeight(!0);
        return t.hasClass("intercom-conversation-part-grouped-last") ? t.removeClass("intercom-conversation-part-grouped-last").addClass("intercom-conversation-part-grouped") : t.addClass("intercom-conversation-part-grouped-first"), o - t.outerHeight(!0)
    }

    function c(e) {
        var t = 100, n = e.$(".intercom-conversation-parts-container"), i = e.$(".intercom-app-profile-container"), o = e.$(".intercom-sheet-content-container"), r = o.height() - (i.outerHeight() + n.outerHeight() + t) + parseInt(n.css("padding-bottom"), 10);
        return 0 > r && (t -= Math.abs(r)), t
    }

    n(311), n(468), e.exports = function (e, t, n, l) {
        var m = e.$(".intercom-conversation-part:not(.intercom-is-typing):eq(-2)"), u = s(t, m, l), d = a(e, t, u), p = t.getHeight() - u;
        if (n && (d -= n.getHeight()), d > 0)d = p > d ? d : p, i(e, d, l, t); else if (l)o(t, u); else if (t.model.byInterbot()) {
            var h = c(e);
            r(t, h)
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e, t, n) {
        e.$(".intercom-conversation-parts").transition({y: n + "px", duration: 0}).transition({
            y: "0px",
            duration: 100
        }), t.$(".intercom-comment-avatar").transition({opacity: 0, scale: 0, duration: 0}).transition({
            opacity: 100,
            scale: 1,
            duration: 100,
            delay: 100
        }), t.$(".intercom-comment-body-container").transition({
            scale: 0,
            opacity: 0,
            duration: 0
        }).transition({scale: 1, opacity: 100, duration: 100, delay: 200})
    }

    function o(e) {
        e.$(".intercom-comment-avatar").transition({opacity: 0, scale: 0, duration: 0}).transition({
            opacity: 100,
            scale: 1,
            duration: 100
        }), e.$(".intercom-comment-body-container").transition({
            scale: 0,
            opacity: 0,
            duration: 0
        }).transition({scale: 1, opacity: 100, duration: 100, delay: 100})
    }

    function r(e, t) {
        return Math.min(e.getScrollTop(), t.getHeight())
    }

    n(311), n(468), e.exports = function (e, t) {
        var n = r(e, t);
        n > 0 ? i(e, t, n) : o(t)
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468), e.exports = function (e) {
        var t = e.$(".intercom-app-profile-container"), n = t.height();
        t.css({height: n, overflow: "hidden"}).transition({
            height: 0, duration: 400, complete: function () {
                t.empty().removeAttr("style")
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468), e.exports = function (e) {
        var t = e.$(".intercom-composer"), n = t.outerHeight(!0);
        t.transition({y: n, duration: 0}).delay(200).transition({
            y: -5,
            easing: "ease",
            duration: 200
        }).transition({y: 0, easing: "ease", duration: 200})
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468), e.exports = function (e) {
        e.$el.transition({opacity: 0, duration: 0}).delay(3e3).transition({opacity: 1, duration: 200})
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468), e.exports = function (e) {
        var t = e.$(".intercom-composer");
        t.transition({y: -5, duration: 200}).transition({y: 0, easing: "ease", duration: 200})
    }
}, function (e, t, n) {
    "use strict";
    function i(e, t, n) {
        e.$(".intercom-conversation-parts").transition({y: -t + "px", duration: 0, delay: n}).transition({
            y: "0px",
            duration: n
        })
    }

    function o(e, t) {
        e.$el.transition({opacity: 0, duration: t})
    }

    function r(e, t) {
        return Math.min(e.getScrollTop(), t.getHeight())
    }

    n(311), n(468);
    var a = n(95);
    e.exports = function (e, t, n) {
        n = n || 100;
        var s = r(e, t);
        i(e, t, s, n), o(t, n), a.delay(a.bind(t.remove, t), n)
    }
}, function (e, t, n) {
    "use strict";
    function i(e, t) {
        e.is(":visible") && !a && (a = !0, e.transition({
            opacity: 0, top: "-100%", duration: r, complete: function () {
                this.css({opacity: 1}).hide(), a = !1
            }
        }), t.show().css({opacity: 0}).transition({opacity: 1, top: 0, duration: r}))
    }

    function o(e, t) {
        e.is(":visible") || a || (a = !0, e.show().css({opacity: 0}).transition({
            opacity: 1,
            top: 0,
            duration: r
        }), t.transition({
            opacity: 0, top: "100%", duration: r, complete: function () {
                this.css({opacity: 1}).hide(), a = !1
            }
        }))
    }

    n(311), n(468);
    var r, a = !1;
    e.exports = function (e, t, n) {
        var r = e.$(".intercom-sheet-header-generic-title"), a = e.$(".intercom-sheet-header-title-container");
        n = n || 200, t ? o(r, a) : i(r, a)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(95), r = n(342), a = n(452), s = n(504), c = n(415), l = n(340);
    e.exports = a.extend({
        template: c.load("conversations"),
        id: "intercom-conversations",
        className: "intercom-conversations intercom-sheet",
        events: o.extend(a.prototype.events, {"click .intercom-conversations-new-conversation-button": "onNewConversationClicked"}),
        initialize: function (e) {
            a.prototype.initialize.apply(this, arguments), this.client = e.client, this.listenTo(this.collection, "add change", this.renderConversations)
        },
        render: function () {
            var e = this.settings.get("app.inbound-messaging-enabled");
            return this.$el.html(this.template({
                appName: this.settings.get("app.name"),
                inboundMessagingEnabled: e
            })).toggleClass("intercom-new-message-enabled", e), this.renderConversations(), this.$(".intercom-sheet-content").on("scroll", o.bind(this.onScroll, this)), this
        },
        renderConversations: function () {
            var e = document.createDocumentFragment();
            this.collection.each(function (t) {
                i(e).prepend(new s({model: t}).render().el)
            }, this), this.$(".intercom-conversations-items").html(e), this.$el.toggleClass("intercom-conversations-empty", this.collection.isEmpty()), this.$el.toggleClass("intercom-conversations-fetched", this.collection.isFetched()), this.shouldFetchNextPage() && this.fetchNextPage()
        },
        fetchNextPage: function () {
            this.$el.hasClass("intercom-conversations-fetching") || this.$el.hasClass("intercom-conversations-fetched") || (this.$el.addClass("intercom-conversations-fetching"), this.collection.fetchNextPage().then(o.bind(function () {
                this.$el.removeClass("intercom-conversations-fetching")
            }, this)))
        },
        shouldFetchNextPage: function () {
            return 1 === this.collection.pages && !this.collection.isFetched()
        },
        onNewConversationClicked: function (e) {
            e.preventDefault(), e.stopPropagation(), r.trigger("click:new-conversation"), l.increment("newConversationButtonClicked")
        },
        onScroll: o.throttle(function () {
            this.getScrollPosition() < 50 && this.fetchNextPage()
        }, 200)
    })
}, function (e, t, n) {
    "use strict";
    var i = n(312), o = n(342), r = n(462), a = n(340), s = n(505), c = n(415), l = n(455);
    e.exports = i.View.extend({
        template: c.load("conversation-item"),
        className: "intercom-conversations-item",
        events: {click: "onClicked"},
        initialize: function () {
            this.listenTo(this.model, "change", this.render), this.listenTo(this.model.parts, "add", this.render)
        },
        getPreview: function () {
            return s.isMetadataPreview(this.model.preview()) ? s.preview(this.model.preview()) : l.maybeSubstituteWithSpans(this.model.previewText(), "intercom-emoji-sub-icon")
        },
        render: function () {
            return this.$el.html(this.template({
                conversation: this.model,
                preview: this.getPreview()
            })).toggleClass("intercom-conversations-item-unread", this.isUnread()), this.$(".intercom-conversations-item-summary").toggleClass("intercom-conversations-item-summary-metadata", s.isMetadataPreview(this.model.preview())), this.$(".intercom-conversations-item-timestamp").append((new r).render(this.model.updatedAt()).el), this
        },
        isUnread: function () {
            return this.model.isUnread() && !this.model.hasOnlyInterbotAdminComments()
        },
        onClicked: function (e) {
            e.preventDefault(), o.trigger("click:conversation", this.model), a.increment("conversationInInboxClicked")
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return "" !== e.text().replace(/^\s+|\s+$/g, "")
    }

    function o(e) {
        return 0 !== e.find("img").length
    }

    function r(e) {
        return 0 !== e.find('iframe[src*="vimeo.com"],iframe[src*="wistia.net"],iframe[src*="youtube.com"]').length
    }

    function a(e) {
        return 0 !== e.find(".intercom-interblocks-content-card").length
    }

    var s = n(311), c = n(240);
    e.exports = {
        isMetadataPreview: function (e) {
            if (!c.isLocaleEnglish())return !1;
            var t = s("<p/>", {html: e});
            return a(t) || !i(t) && (o(t) || r(t))
        }, preview: function (e) {
            if (!c.isLocaleEnglish())return e;
            var t = s("<p/>", {html: e});
            return a(t) ? "(article attached)" : i(t) ? e : o(t) ? "(image attached)" : r(t) ? "(video attached)" : ""
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(452), o = n(415);
    e.exports = i.extend({
        template: o.load("loading"),
        id: "intercom-loading",
        minimizable: !1,
        className: "intercom-sheet intercom-sheet-loading",
        initialize: function () {
            i.prototype.initialize.apply(this, arguments)
        },
        render: function () {
            return this.$el.html(this.template({appName: this.settings.get("app.name")})), this
        },
        didHide: function () {
            this.$(".intercom-sheet-spinner").hide()
        },
        willShow: function () {
            this.$(".intercom-sheet-spinner").show()
        }
    })
}, function (e, t, n) {
    "use strict";
    n(508);
    var i = n(311), o = n(95), r = n(94), a = n(312), s = n(241), c = n(324), l = n(341), m = n(340), u = n(342), d = n(505), p = n(343), h = n(415), f = n(455), g = n(325), v = n(413), b = n(509), y = n(513), w = n(514), x = n(515), _ = n(518);
    e.exports = a.View.extend({
        hoverCardFirstLoad: !0,
        template: h.load("launcher"),
        closedPreviewsKey: "closed-preview-keys",
        id: "intercom-launcher",
        className: "intercom-launcher intercom-launcher-active",
        events: {
            click: "onClicked",
            mouseenter: "onMouseOver",
            mouseleave: "onMouseOut",
            "click .intercom-launcher-preview-close": "onCloseClicked",
            "click .intercom-launcher-hovercard-close": "onHoverCardClosed",
            "click .intercom-launcher-video-topbar-close-icon": "onHoverCardClosed"
        },
        videoAdmin: null,
        initialize: function (e) {
            this.timeout = null, this.settings = e.settings, this.listenTo(this.collection, "add change", this.update), this.listenTo(this.collection, "add", this.onConversationAdded), this.listenTo(this.collection, "change", this.onConversationChanged), this.render = o.once(this.render), this.anonymousOnDesktop = this.settings.get("user.anonymous") && !c.features.touchScreen(), this.client = e.client
        },
        render: function () {
            return this.$el.html(this.template()), _.shouldShowVideoHovercard(this.settings) ? this.insertVideoHovercard() : this.insertHoverCard(), this.isEnabled() && this.enable(), this
        },
        insertHoverCard: function () {
            this.createHoverCard(), this.appHovercardView && this.$el.append(this.appHovercardView.render().el)
        },
        createHoverCard: function () {
            this.appHovercardView || _.anonymousNonMobileUser(this.settings) && (this.appHovercardView = new b(this.settings))
        },
        insertVideoHovercard: function () {
            var e = this;
            this.client.getAdminVideoData().then(function (t) {
                e.videoAdmin = t.admin, e.createVideoHovercard(t.admin, t.video_config), e.videoHovercardView && e.$el.append(e.videoHovercardView.render().el)
            })
        },
        createVideoHovercard: function (e, t) {
            this.videoHovercardView || _.anonymousNonMobileUser(this.settings) && (this.videoHovercardView = new x(this.settings, e, t))
        },
        show: function () {
            this.$el.addClass("intercom-launcher-active").removeClass("intercom-launcher-maximized").removeClass("intercom-launcher-minimized").removeClass("intercom-launcher-inactive"), this.model || this.removeAvatar()
        },
        hide: function () {
            this.$el.addClass("intercom-launcher-inactive").removeClass("intercom-launcher-maximized").removeClass("intercom-launcher-active")
        },
        minimize: function () {
            this.$el.addClass("intercom-launcher-minimized").removeClass("intercom-launcher-maximized"), this.minimizedConversation = void 0, this.updatedSinceMinimize = !1
        },
        isMinimized: function () {
            return this.$el.hasClass("intercom-launcher-maximized")
        },
        maximize: function (e) {
            if (this.minimizedConversation = e, this.updatedSinceMinimize = !1, this.$el.addClass("intercom-launcher-maximized").removeClass("intercom-launcher-minimized").removeClass("intercom-launcher-with-preview").removeClass("intercom-launcher-with-avatar").removeClass("intercom-launcher-with-initials"), this.removeAvatar(), void 0 !== e) {
                var t = e.lastAdminAvatar(!1), n = e.lastAdminInitials();
                this.setAvatar(t, n)
            }
        },
        enable: function () {
            this.$el.addClass("intercom-launcher-enabled"), s.info("views/launcher - Launcher enabled")
        },
        disable: function () {
            this.$el.removeClass("intercom-launcher-enabled"), s.info("views/launcher - Launcher disabled")
        },
        update: function () {
            void 0 !== this.minimizedConversation && (this.updatedSinceMinimize = !0), this.model = this.collection.newUnread().last(), o.isUndefined(this.model) ? (this.$el.removeClass("intercom-launcher-with-message").removeClass("intercom-launcher-with-avatar").removeClass("intercom-launcher-with-initials").removeClass("intercom-launcher-with-badge").removeClass("intercom-launcher-with-preview"), this.removeAvatar()) : (this.$el.addClass("intercom-launcher-with-message"), this.updateAvatar(), this.updateBadge(), this.updatePreview(), this.appHovercardView && this.hideHoverCard(), this.videoHovercardView && this.hideHoverCard())
        },
        onConversationAdded: function (e, t, n) {
            o.isUndefined(e) || o.isUndefined(n) || n.add !== !0 || e.isRead() || (this.settings.update({user: {has_conversations: !0}}), p.triggerNotification(e))
        },
        onConversationChanged: function (e) {
            o.isUndefined(e) || e.isRead() || e.changed.read !== !1 && o.isUndefined(e.changed.parts_count) || p.triggerNotification(e)
        },
        updateAvatar: function () {
            var e = this.model.lastAdminAvatar(!0), t = this.model.lastAdminInitials();
            this.$el.addClass("intercom-launcher-with-updated-avatar"), this.setAvatar(e, t)
        },
        setAvatar: function (e, t) {
            void 0 === e ? (this.$el.addClass("intercom-launcher-with-initials"), this.$(".intercom-launcher-button").show().removeAttr("style").find(".intercom-launcher-initials").text(t)) : (this.$el.addClass("intercom-launcher-with-avatar"), this.$(".intercom-launcher-button").show().removeAttr("style").css({"background-image": 'url("' + e + '")'}))
        },
        removeAvatar: function () {
            this.$el.removeClass("intercom-launcher-with-avatar").removeClass("intercom-launcher-with-updated-avatar").removeClass("intercom-launcher-with-initials"), this.$(".intercom-launcher-button").removeAttr("style")
        },
        updatePreview: function () {
            var e = this.model.parts.byAdmin().last();
            void 0 !== e && this.shouldShowPreview(e) ? this.$el.hasClass("intercom-launcher-with-preview") ? this.hidePreviewForUpdate(e) : this.showPreview(e.body(), e.id) : this.hidePreview()
        },
        updateBadge: function () {
            var e = this.collection.unread().size();
            this.$el.toggleClass("intercom-launcher-with-badge", e > 0), this.$(".intercom-launcher-badge").text(e)
        },
        isEnabled: function () {
            return this.settings.get("launcher.enabled")
        },
        shouldSupressPreview: function () {
            return this.model && !this.model.matchesCurrentUrl() && !this.model.hasUserComment()
        },
        showPreview: function (e, t) {
            if (!this.isPreviewClosed(t) && !this.shouldSupressPreview()) {
                var n = this.$el.addClass("intercom-launcher-with-preview").find(".intercom-launcher-preview-body").toggleClass("intercom-launcher-preview-metadata", d.isMetadataPreview(e)).html(f.maybeSubstituteWithSpans(d.preview(e), "intercom-emoji-sub-icon"));
                this.anonymousOnDesktop && "app-message" === t || o.defer(o.bind(n.previewify, n)), o.defer(o.bind(function () {
                    var e = this.$el.find(".intercom-launcher-preview");
                    e.toggleClass("intercom-launcher-preview-multi-line", e.outerHeight() > this.$el.outerHeight())
                }, this)), this.previewKey = t
            }
        },
        showWelcome: function (e) {
            return _.shouldShowHovercardWelcome(this.settings) ? (_.shouldShowAppHovercard(this.settings) && (setTimeout(o.bind(this.showHoverCard, this), 500), _.setNotFirstSessionPing(this.settings)), void _.setHovercardStickiness(!0)) : (_.setHovercardStickiness(!1), _.setNotFirstSessionPing(this.settings), void(_.isFirstSessionPing(this.settings) && !this.isPreviewClosed("app-message") ? (this.showPreview(e, "app-message"), y.first(this), w.show(this, this.anonymousOnDesktop)) : y.subsequent(this)))
        },
        playWelcomeNotification: function () {
            p.triggerWelcomeNotification(this.settings.get("app.name"))
        },
        hidePreview: function () {
            this.$el.removeClass("intercom-launcher-with-preview intercom-launcher-with-admins"), this.$(".intercom-launcher-preview").removeAttr("style")
        },
        hidePreviewForUpdate: function (e) {
            this.$(".intercom-launcher-preview").removeAttr("style").addClass("intercom-launcher-update-preview"), o.delay(o.bind(function () {
                this.hidePreview(), this.$(".intercom-launcher-preview").removeClass("intercom-launcher-update-preview"), this.showPreview(e.body(), e.id)
            }, this), 1500)
        },
        closePreview: function () {
            this.previewKey && (this.addClosedPreviewKey(this.previewKey), this.hidePreview(), "app-message" === this.previewKey ? v.trackSignedOutEvent("uniqueVisitorDismissedWelcomeMessage") : v.trackSignedOutEvent("uniqueVisitorDismissedChatNotification"))
        },
        shouldShowPreview: function (e) {
            return !this.isPreviewClosed(e.id) && (this.model.isChat() || this.model.hasComments())
        },
        isPreviewClosed: function (e) {
            var t = this.getClosedPreviewKeys();
            return o.contains(t, e)
        },
        isMobileUser: function () {
            return c.features.touchScreen()
        },
        getClosedPreviewKeys: function () {
            return r.parse(l.sessionStorage.get(this.closedPreviewsKey) || "[]")
        },
        addClosedPreviewKey: function (e) {
            var t = this.getClosedPreviewKeys();
            o.contains(t, e) || t.push(e), l.sessionStorage.set(this.closedPreviewsKey, r.stringify(t))
        },
        incrementLauncherClickMetrics: function () {
            o.isUndefined(this.minimizedConversation) ? o.isUndefined(this.model) ? m.increment("launcherClicked") : m.increment("chatheadClicked") : m.increment("maximizeClicked")
        },
        onClicked: function (e) {
            if (!i(e.target).is("a")) {
                e.preventDefault();
                var t;
                t = void 0 === this.minimizedConversation || this.updatedSinceMinimize ? this.model : this.minimizedConversation, this.appHovercardView && this.appHovercardView.isVisible() && !t && !c.features.ie() ? this.appHovercardView.transitionToNewMessage() : this.videoHovercardView && this.videoHovercardView.isVisible() && !t && !c.features.ie() ? this.videoHovercardView.transitionToNewMessage() : u.trigger("click:open", t), this.incrementLauncherClickMetrics(), this.addClosedPreviewKey(this.previewKey), this.hidePreview(), this.trackClickMetrics()
            }
        },
        showHoverCard: function () {
            this.settings.get("app.disable_hovercard") || (this.videoHovercardView ? (this.videoHovercardView.show(), this.videoHovercardView.play()) : this.appHovercardView && (this.isHovercardSticky() ? this.appHovercardView.showCloseButton() : this.appHovercardView.hideCloseButton(), this.appHovercardView.show()))
        },
        hideHoverCard: function () {
            this.videoHovercardView ? (this.videoHovercardView.hide(), this.videoHovercardView.pause()) : this.appHovercardView.hide(), _.setHovercardStickiness(!1)
        },
        onMouseOver: function () {
            !this.hasHoverCard() || this.model || this.isMinimized() || (clearTimeout(this.timeout), this.timeout = setTimeout(o.bind(this.showHoverCard, this), 150))
        },
        hasHoverCard: function () {
            return this.appHovercardView || this.videoHovercardView
        },
        onMouseOut: function (e) {
            if (!this.isHovercardSticky() && (this.appHovercardView || this.videoHovercardView)) {
                var t = 1 === i(e.fromElement).closest(".intercom-launcher-hovercard").length && 0 === i(e.toElement).closest(".intercom-launcher-hovercard").length, n = t ? 50 : 500;
                clearTimeout(this.timeout), this.timeout = setTimeout(o.bind(this.hideHoverCard, this), n)
            }
        },
        trackClickMetrics: function () {
            this.isVisitorAutoMessage() ? v.trackSignedOutEvent("inReplyToVisitorAutoMessage.uniqueVisitorOpenedMessenger") : this.isInterbotComment() ? v.trackSignedOutEvent("leadOpenedMessengerFromInterbotMessageNotification") : (v.trackSignedOutEvent("fromNewConversationView.uniqueVisitorOpenedMessenger"), this.videoHovercardEnabled() && v.trackSignedOutEvent("videoHovercard.uniqueOpenMessenger")), this.sendClickEventIfUnique()
        },
        sendClickEventIfUnique: function () {
            if (this.settings.get("user.anonymous")) {
                if (c.features.localStorage()) {
                    var e = r.parse(l.localStorage.get("messenger_metrics_events"));
                    if (null === e)e = {acquire_visitor_messenger_opened: this.settings.get("user.intercom-id")}, l.localStorage.set("messenger_metrics_events", r.stringify(e)); else {
                        if (e.acquire_visitor_messenger_opened === this.settings.get("user.intercom-id"))return;
                        e.acquire_visitor_messenger_opened = this.settings.get("user.intercom-id"), l.localStorage.set("messenger_metrics_events", r.stringify(e))
                    }
                }
                this.sendClickEvent()
            }
        },
        sendClickEvent: function () {
            var e = this.settings.get("app.id"), t = this.settings.get("user.intercom-id"), n = {
                metrics: [{
                    name: "acquire_visitor_messenger_opened",
                    id: "acquire_visitor_messenger_opened_" + e + "_" + t,
                    app_id_code: this.settings.get("app.id"),
                    created_at: Math.round(g.now() / 1e3),
                    metadata: {
                        anonymous_id: this.settings.get("user.anonymous-id"),
                        end_user_id: this.settings.get("user.intercom-id")
                    }
                }], app_id: this.settings.get("app.id")
            };
            this.client.sendAnalyticEvent(n)
        },
        isVisitorAutoMessage: function () {
            return this.model && this.model.parts.byAdmin().first() && this.model.parts.byAdmin().first().isChatAutoMessage() && this.settings.get("user.anonymous")
        },
        isInterbotComment: function () {
            return this.model && this.model.parts.last() && this.model.parts.last().byInterbot() && this.settings.get("user.anonymous")
        },
        isHovercardSticky: function () {
            return _.isHovercardSticky
        },
        onHoverCardClosed: function (e) {
            e.stopPropagation(), this.hideHoverCard(), m.increment("appHoverCardCloseClicked")
        },
        onCloseClicked: function (e) {
            e.stopPropagation(), this.closePreview(), m.increment("launcherPreviewClosed")
        },
        videoHovercardEnabled: function () {
            return this.settings.get("app.video-hovercard")
        },
        getVideoAdmin: function () {
            return this.videoAdmin
        }
    })
}, function (e, t, n) {
    "use strict";
    function i(e, t) {
        t = r.defaults({}, t, {rows: 2, overflow: "&hellip;"});
        var n = e.html(), i = e.height();
        e.text("a");
        var o = parseFloat(e.css("line-height"), 10), a = e.height(), s = o > a ? o - a : 0, c = s * (t.rows - 1) + a * t.rows;
        if (c >= i)return void e.html(n);
        for (var l = 1, m = 0, u = n.length; u > l;)m = Math.ceil((l + u) / 2), e.html(n.slice(0, m) + t.overflow), e.height() <= c ? l = m : u = m - 1;
        e.html(n.slice(0, l) + t.overflow)
    }

    var o = n(311), r = n(95);
    o.fn.previewify = function (e) {
        return i(this, e)
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(415), a = n(505), s = n(455), c = n(328), l = n(480), m = n(510), u = n(511);
    e.exports = o.View.extend({
        template: r.load("app-hovercard"),
        className: "intercom-launcher-hovercard",
        initialize: function (e) {
            this.timeout = null, this.settings = e
        },
        render: function () {
            return this.$el.html(this.template({appName: this.settings.get("app.name")})).hide(), this.renderAdminAvatars(), this
        },
        renderAdminAvatars: function () {
            var e = this.$(".intercom-launcher-hovercard-admins").html(""), t = this.settings.get("app.active-admins");
            t && t.length > 0 && i.each(t, i.bind(function (t) {
                var n = {avatarUri: c.getUrlForSize(t.avatar, "square_128"), adminFirstName: t.first_name};
                e.append(new l(n).html())
            }, this))
        },
        show: function () {
            this.isVisible() || this.settings.get("user.has-conversations") || (this.previewAppMessage(), this.$("textarea").val(""), m.show(this.$el))
        },
        hide: function () {
            this.isVisible() && m.hide(this.$el)
        },
        showCloseButton: function () {
            var e = this.$el.find(".intercom-launcher-hovercard-close");
            e.addClass("intercom-launcher-hovercard-close-active")
        },
        hideCloseButton: function () {
            var e = this.$el.find(".intercom-launcher-hovercard-close");
            e.removeClass("intercom-launcher-hovercard-close-active")
        },
        previewAppMessage: function () {
            var e = this.$el.find(".intercom-launcher-hovercard-welcome-text");
            e.is(":empty") && (e.html(s.maybeSubstituteWithSpans(a.preview(this.settings.get("app.message")), "intercom-emoji-sub-icon")), i.defer(i.bind(function () {
                e.previewify({rows: 3})
            }, e)))
        },
        transitionToNewMessage: function () {
            u(this.$el, this.settings.get("app.branding-enabled"))
        },
        isVisible: function () {
            return this.$el.is(":visible")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(311), n(468);
    var i = "cubic-bezier(0.1, 0.0, 0.2, 1)";
    t.show = function (e) {
        e.stop().clearQueue().removeAttr("style"), e.show().css({
            transformOrigin: "315px 100%",
            x: 0,
            y: 0
        }).transition({opacity: 0, scale: .8, x: 0, y: 0, duration: 0}), e.transition({
            scale: 1,
            x: 0,
            y: 0,
            queue: !1
        }, 250, i), e.transition({opacity: 1, duration: 170})
    }, t.hide = function (e) {
        e.css({transformOrigin: "315px 100%"}).transition({
            scale: .8, x: 0, y: 0, opacity: 0, complete: function () {
                e.hide()
            }
        }, 90, i)
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468);
    var i = n(342), o = n(512);
    e.exports = function (e, t) {
        var n = 300, r = e.closest("#intercom-launcher"), a = r.find(".intercom-launcher-button"), s = e.closest("#intercom-container"), c = s.find("#intercom-messenger"), l = e.find(".intercom-launcher-hovercard-textarea"), m = e.find(".intercom-launcher-hovercard-welcome"), u = t ? "+=19" : "-=3";
        i.trigger("click:new-conversation-no-animation"), o(e, 0, 0), r.removeClass("intercom-launcher-inactive");
        var d = s.find(".intercom-sheet-body");
        d.css({boxShadow: "none"}), m.transition({
            opacity: 0,
            marginBottom: "+=100",
            duration: 100
        }), l.transition({paddingBottom: u, duration: n}), c.children().transition({
            opacity: 0,
            duration: 0
        }).delay(n).transition({
            opacity: 1, duration: 200, complete: function () {
                r.removeAttr("style").addClass("intercom-launcher-inactive"), a.removeAttr("style"), c.removeAttr("style"), d.removeAttr("style"), c.children().removeAttr("style"), e.removeAttr("style").hide(), m.removeAttr("style"), l.removeAttr("style")
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468), e.exports = function (e, t, n) {
        var i = 1, o = 300 * i, r = e.closest("#intercom-container"), a = r.find("#intercom-messenger"), s = window.innerHeight;
        a.transition({opacity: 0, duration: 0}).delay(o).transition({opacity: 1, duration: 0}), e.css({
            border: "none",
            borderLeft: "1px solid #dadee2"
        }).transition({duration: 0}).transition({
            width: 368 - t,
            paddingLeft: t,
            paddingTop: s,
            paddingBottom: n,
            borderRadius: 0,
            right: -20,
            bottom: -19,
            duration: o
        })
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return e.$(".intercom-launcher-button")
    }

    n(311), n(468), t.first = function (e) {
        i(e).transition({scale: 0, delay: 1e3}).transition({
            scale: 1.2,
            duration: 120,
            easing: "ease-out"
        }).transition({scale: 1, duration: 30, easing: "ease-out"})
    }, t.subsequent = function (e) {
        i(e).transition({opacity: 0, scale: .8, delay: 1e3, duration: 0}).transition({
            opacity: 1,
            scale: 1,
            duration: 150,
            easing: "ease-out"
        })
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return e.$(".intercom-launcher-preview")
    }

    function o(e) {
        return e.$(".intercom-launcher-preview-close")
    }

    function r(e) {
        i(e).transition({x: "10px", opacity: 0, scale: .8, duration: 150, easing: "ease-in-out"}, function () {
            i(e).removeAttr("style"), e.hidePreview(), o(e).show()
        })
    }

    n(311), n(468), t.show = function (e, t) {
        t || o(e).hide(),
            i(e).css({animation: "none"}).transition({
                opacity: 0,
                x: "10px",
                delay: 1500,
                duration: 0,
                easing: "ease-in-out"
            }, function () {
                i(e).css({visibility: "visible", opacity: 0})
            }).transition({x: "-5px", scale: 1.05, duration: 150, easing: "ease-in-out"}).transition({
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 150,
                easing: "ease-in-out"
            }, function () {
                i(e).css({transformOrigin: "right"}), t && e.playWelcomeNotification(), setTimeout(function () {
                    t || r(e)
                }, 8e3)
            })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(312), r = n(415), a = n(516), s = n(517), c = n(328), l = n(413), m = n(342), u = n(518), d = n(416);
    e.exports = o.View.extend({
        template: r.load("video-hovercard"),
        className: "intercom-launcher-hovercard-videolauncher",
        events: {
            click: "onClicked",
            mouseleave: "onMouseLeave",
            mouseenter: "onMouseEnter",
            "mouseenter .intercom-video-launcher-hovercard-textarea textarea": "textareaMouseEnter",
            "mouseleave .intercom-video-launcher-hovercard-textarea textarea": "textareaMouseLeave",
            "click .intercom-launcher-overlay-video-admin-name": "onAdminAvatarClick",
            "click .intercom-launcher-overlay-video-admin-avatar": "onAdminAvatarClick"
        },
        videoReady: !1,
        textAreaOpacityTimeout: null,
        isHovered: !1,
        isTextAreaHovered: !1,
        initialize: function (e, t, n) {
            this.timeout = null, this.settings = e, this.admin = t, this.videoConfig = n
        },
        render: function () {
            this.$el.html(this.template({
                admin: this.adminDisplayInfo(),
                appName: this.settings.get("app.name"),
                video: this.videoDisplayInfo()
            })).hide();
            var e = this.video();
            return e.muted = !0, e.addEventListener("ended", i.bind(this.onVideoEnded, this), !1), e.addEventListener("canplaythrough", i.bind(this.canPlayThrough, this), !1), this._updateUI(), l.trackSignedOutEvent("videoHovercard.uniqueView"), this
        },
        textareaMouseEnter: function () {
            this.isTextAreaHovered = !0, this._updateUI()
        },
        textareaMouseLeave: function () {
            this.isTextAreaHovered = !1, this._updateUI()
        },
        onMouseEnter: function () {
            this.isHovered = !0, this._updateUI()
        },
        onMouseLeave: function () {
            this.isHovered = !1, this._updateUI()
        },
        onVideoEnded: function () {
            l.trackSignedOutEvent("videoHovercard.uniqueFinishedWatchingVideo"), this._updateUI()
        },
        onClicked: function (e) {
            var t = this.video();
            return this.isClickOnTexarea(e) ? void l.trackSignedOutEvent("videoHovercard.uniqueComposerClick") : this.isClickOnCloseButton(e) ? void l.trackSignedOutEvent("videoHovercard.uniqueDismiss") : (e.stopPropagation(), t.muted ? (l.trackSignedOutEvent("videoHovercard.uniqueUnmute"), this._setMuteState(!1), this.videoPlayFromStart(t)) : this.isPlaying(t) ? (l.trackSignedOutEvent("videoHovercard.uniqueMute"), this._setMuteState(!t.muted)) : (l.trackSignedOutEvent("videoHovercard.uniqueReplay"), this.videoPlayFromStart(t), u.setHovercardStickiness(!0)), void this._updateUI())
        },
        onAdminAvatarClick: function (e) {
            e.stopPropagation(), this.transitionToNewMessage()
        },
        _setMuteState: function (e) {
            var t = this.video();
            t.muted = e, t.loop = e, e || u.setHovercardStickiness(!0)
        },
        _updateUI: function () {
            this._updateUIElements(this.video().muted, this.isHovered, this.isTextAreaHovered, this.isPlaying(this.video()))
        },
        _updateUIElements: function (e, t, n, i) {
            return i ? (this.$(".intercom-launcher-hovercard-video-overlay").fadeOut("slow"), this.$(".intercom-launcher-overlay-admin-information-container").fadeOut(250), this.$(".intercom-video-launcher-admin-upload-time").show(), this.setTextAreaVisibility(n), void(e ? (this.showControlsForMutedState(), this.setStatusTextVisibility(t)) : (this.showControlsForUnmutedState(), this.setStatusTextVisibility(!0)))) : (this.showControlsForVideoEndState(), this.setStatusTextVisibility(!0), this.setTextAreaVisibility(!0), this.$(".intercom-video-launcher-admin-upload-time").hide(), this.$(".intercom-launcher-hovercard-video-overlay").fadeIn(), void this.$(".intercom-launcher-overlay-admin-information-container").fadeIn(250))
        },
        isPlaying: function (e) {
            return !e.ended
        },
        adminDisplayInfo: function () {
            return {
                avatar: c.getUrlForSize(this.admin.avatar, "square_128"),
                name: this.admin.name,
                firstName: this.admin.first_name,
                adminLastSeenString: this.adminLastSeenString()
            }
        },
        videoDisplayInfo: function () {
            return {className: this.videoClassName(), source: this.videoSource()}
        },
        adminLastSeenString: function () {
            return d.lastActiveTimeInWords(1e3 * this.admin.last_seen_at)
        },
        videoClassName: function () {
            return "intercom-video-launcher-hovercard-video-plain"
        },
        videoSource: function () {
            return this.videoConfig.video_url
        },
        show: function () {
            !this.videoReady || this.settings.get("user.has-conversations") || this.isVisible() || (this.$("textarea").val(""), setTimeout(i.bind(this.showHoverCard, this), 300))
        },
        showHoverCard: function () {
            a.show(this.$el)
        },
        hide: function () {
            this.isVisible() && (this.pause(), a.hide(this.$el), this.videoPlayed && this.endVideo())
        },
        video: function () {
            return i.isUndefined(this._video) && (this._video = this.$("." + this.videoClassName())[0]), this._video
        },
        play: function () {
            var e = this.video();
            e.ended ? this.onVideoEnded() : e.play()
        },
        pause: function () {
            this.video().pause()
        },
        transitionToNewMessage: function () {
            var e = this.video();
            this.isPlaying(e) && this.pause(), m.trigger("click:new-conversation-with-admin", this.admin), s(this.$el, this.settings.get("app.branding-enabled"))
        },
        isVisible: function () {
            return this.$el.is(":visible")
        },
        isClickOnTexarea: function (e) {
            return this.$(e.target).is("textarea")
        },
        isClickOnCloseButton: function (e) {
            return e.target && "intercom-launcher-video-topbar-close-icon" === e.target.className
        },
        videoPlayFromStart: function (e) {
            e.loop = !1, e.currentTime = 0, e.play()
        },
        canPlayThrough: function () {
            this.videoReady || (this.videoReady = !0, u.shouldShowHovercardWelcome(this.settings) && (u.setNotFirstSessionPing(this.settings), this.show(), this.play()))
        },
        showControlsForMutedState: function () {
            this.hideControls(), this.$(".intercom-launcher-video-topbar-muted-icon").show(), this.$(".intercom-launcher-video-topbar-muted-text").show()
        },
        showControlsForUnmutedState: function () {
            this.hideControls(), this.$(".intercom-launcher-video-topbar-unmuted-icon").show(), this.$(".intercom-launcher-video-topbar-unmuted-text").show()
        },
        showControlsForVideoEndState: function () {
            this.hideControls(), this.$(".intercom-launcher-video-topbar-replay-icon").show(), this.$(".intercom-launcher-video-topbar-replay-text").show()
        },
        hideControls: function () {
            this.$(".intercom-launcher-video-topbar-status-icon").hide(), this.$(".intercom-launcher-video-topbar-status-text").hide()
        },
        setStatusTextVisibility: function (e) {
            var t = e ? 1 : 0;
            this.$(".intercom-launcher-video-topbar-status-text-container").css("opacity", t)
        },
        setTextAreaVisibility: function (e) {
            var t = this.$(".intercom-video-launcher-hovercard-textarea"), n = t.find("textarea");
            t.css("bottom", "16px"), n.css("opacity", e ? 1 : .65)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(311), n(468);
    var i = "cubic-bezier(.03,.46,.2,1)", o = "cubic-bezier(.46,.01,.92,.46)", r = 250;
    t.show = function (e) {
        e.stop().clearQueue().removeAttr("style"), e.show().css({
            transformOrigin: "225px 100%",
            x: 0,
            y: 0
        }).transition({opacity: 0, scale: .2, x: 0, y: 0, duration: 0}), e.css({
            transformOrigin: "225px 100%",
            x: 0,
            y: 0
        }).transition({opacity: 1, x: 0, y: 0, scale: 1, queue: !1}, r, i)
    }, t.hide = function (e) {
        e.css({transformOrigin: "225px 100%"}).transition({
            scale: .2, x: 0, y: 0, opacity: 0, complete: function () {
                e.hide()
            }
        }, r, o)
    }
}, function (e, t, n) {
    "use strict";
    n(311), n(468);
    var i = n(512);
    e.exports = function (e, t) {
        var n = 1, o = 300 * n, r = e.closest("#intercom-launcher"), a = r.find(".intercom-launcher-button"), s = e.closest("#intercom-container"), c = s.find("#intercom-messenger"), l = e.find(".intercom-video-launcher-hovercard-textarea textarea"), m = e.find(".intercom-video-launcher-video-area"), u = e.find(".intercom-launcher-overlay-admin-information-container"), d = s.find(".intercom-sheet-body"), p = t ? "+=18" : "-=3", h = e.find(".intercom-launcher-video-topbar-status-text-container"), f = e.find(".intercom-video-launcher-admin-upload-time"), g = e.find(".intercom-launcher-hovercard-video-overlay"), v = window.innerHeight, b = {
            opacity: 0,
            duration: o / 5
        };
        i(e, 119, 84), r.removeClass("intercom-launcher-inactive"), d.css({boxShadow: "none"}), l.transition({
            width: "334px",
            marginBottom: p,
            duration: o
        }), m.transition(b), u.transition(b), h.transition(b), f.transition(b), g.transition({
            top: v,
            right: 18,
            width: 234,
            duration: o
        }), e.css({backgroundColor: "#F7F8FA"}), c.children().transition({
            opacity: 0,
            duration: 0
        }).delay(o).transition({
            opacity: 1, duration: 200 * n, complete: function () {
                r.removeAttr("style").addClass("intercom-launcher-inactive"), a.removeAttr("style"), c.removeAttr("style"), d.removeAttr("style"), c.children().removeAttr("style"), e.removeAttr("style").hide(), l.css("width", ""), l.css("marginBottom", ""), m.removeAttr("style"), u.removeAttr("style"), h.removeAttr("style"), f.removeAttr("style"), g.removeAttr("style")
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(341), r = n(324), a = n(338), s = function () {
    };
    i.extend(s.prototype, {
        isHovercardSticky: !1, setHovercardStickiness: function (e) {
            this.isHovercardSticky = e
        }, isFirstSessionPing: function (e) {
            return this.shouldShowAppHovercard(e) ? "true" !== o.sessionStorage.get("welcome.animated") : void 0 === a.read("welcome.video")
        }, setNotFirstSessionPing: function (e) {
            this.shouldShowAppHovercard(e) ? this.setNotFirstSessionForAppHovercard() : this.setNotFirstSessionForVideoHovercard()
        }, shouldShowHovercardWelcome: function (e) {
            return this.isMobileUser() ? !1 : this.isNotFirstSessionPing(e) ? !1 : !this.isNotAnonymousUser(e)
        }, isMobileUser: function () {
            return r.features.touchScreen()
        }, isNotAnonymousUser: function (e) {
            return !e.get("user.anonymous")
        }, anonymousNonMobileUser: function (e) {
            return !this.isNotAnonymousUser(e) && !this.isMobileUser()
        }, isNotFirstSessionPing: function (e) {
            return this.shouldShowAppHovercard(e) ? this.isNotFirstSessionForAppHovercard() : this.isNotFirstSessionForVideoHovercard()
        }, shouldShowHovercard: function (e) {
            return this.shouldShowAppHovercard(e) || this.shouldShowVideoHovercard(e)
        }, shouldShowAppHovercard: function (e) {
            return this.anonymousNonMobileUser(e) && !this.shouldShowVideoHovercard(e)
        }, shouldShowVideoHovercard: function (e) {
            return e.get("app.video-hovercard") && this.anonymousNonMobileUser(e) ? "blog.intercom.io" !== this.getWindowLocation() && "app.intercom.io" !== this.getWindowLocation() : !1
        }, getWindowLocation: function () {
            return window.location.hostname
        }, setNotFirstSessionForAppHovercard: function () {
            o.sessionStorage.set("welcome.animated", "true")
        }, setNotFirstSessionForVideoHovercard: function () {
            void 0 === a.read("welcome.video") && a.write("welcome.video", 1, "all", "/", this.timeUntilExpiration())
        }, isNotFirstSessionForAppHovercard: function () {
            var e = o.sessionStorage.get("welcome.animated");
            return e === !0 || "true" === e
        }, isNotFirstSessionForVideoHovercard: function () {
            var e = a.read("welcome.video");
            return void 0 !== e
        }, timeUntilExpiration: function () {
            var e = new Date, t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 0);
            return t
        }
    });
    var c = new s;
    e.exports = c
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(241), r = n(332), a = n(414), s = 18e5, c = 3, l = function (e, t) {
        this.failures = 0, this.options = i.defaults({}, t, {
            interval: s,
            maxFailures: c
        }), this.client = e, this.running = !1, this.pollImmediatelyWhenNextActive = !1, r.onActive(i.bind(this.onActive, this))
    };
    l.prototype = {
        start: function () {
            return this.running ? void o.info("poller - Already running") : (this.enqueue(), this.running = !0, void o.info("poller - Polling started"))
        }, stop: function () {
            return this.running ? (this.running = !1, void o.info("poller - Polling stopped")) : void o.info("poller - Not running")
        }, update: function () {
            return this.running ? this.isActive() ? (a.invalidateLatencyData(), o.info("poller - Polling"), void this.client.createOrUpdateUser().fail(i.bind(function () {
                this.failures++
            }, this)).always(i.bind(function () {
                this.failures >= this.options.maxFailures ? o.info("poller - Max failures exceeded, stopping") : this.enqueue()
            }, this))) : (o.info("poller - User not active, will poll when next active"), void(this.pollImmediatelyWhenNextActive = !0)) : void o.info("poller - Not running")
        }, enqueue: function () {
            setTimeout(i.bind(this.update, this), this.options.interval)
        }, isActive: function () {
            return r.isActive()
        }, onActive: function () {
            this.pollImmediatelyWhenNextActive && (o.info("poller - User is newly active, polling"), this.pollImmediatelyWhenNextActive = !1, this.update())
        }
    }, e.exports = l
}, function (e, t, n) {
    "use strict";
    function i(e, t) {
        this.options = o.defaults({}, t, {
            limit: c,
            delay: m
        }), this.client = e, this.updating = !1, this.queued = !1, this.count = 0
    }

    var o = n(95), r = n(241), a = n(325), s = n(314), c = 10, l = 100, m = 18e5, u = 3e4;
    i.prototype = {
        createOrUpdateUser: function () {
            return this.updating ? (r.info("throttler - An update is in progress"), void(this.queued = !0)) : (this.client.createOrUpdateUser().then(o.bind(function () {
                this.queued && o.defer(o.bind(this.createOrUpdateUser, this)), this.updatedAt = a.now(), this.count++, this.queued = this.updating = this.delayed = !1
            }, this)), void(this.updating = !0))
        }, throttledCreateOrUpdateUser: function () {
            var e = this.getDelay();
            return 0 === e ? this.createOrUpdateUser() : (r.info("throttler - Update delayed for " + e + "ms"), void(this.delayed || (o.delay(o.bind(this.createOrUpdateUser, this), e), this.delayed = !0)))
        }, getDelay: function () {
            var e = this.options.delay;
            return s.isEnabled("spa-throttling") && (e = u), this.isThrottled() ? o.max([this.updatedAt - a.now() + e, 0]) : 0
        }, isThrottled: function () {
            var e = this.options.limit;
            return s.isEnabled("spa-throttling") && (e = l), this.count >= e
        }, reset: function () {
            this.count = 0
        }
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    var i = n(340), o = n(95);
    e.exports = {
        runAll: function () {
            var e = [["mixpanel", "mp"], ["olark", "ol"], ["$zopim", "zpm"], ["KM", "km"], ["_cio", "cus"], ["analytics", "sg"]], t = "#?#:";
            i.increment(t + o.filter(o.map(e, function (e) {
                    return e[0] in window ? e[1] : ""
                }), function (e) {
                    return e.length > 0
                }).join(":"))
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }, o = n(311);
    e.exports = {
        hasInstallationQueryParameter: function () {
            return window.location.search.substring(1).match(/intercom-installation/)
        },
        isLegacyInstallationMode: function (e) {
            return "object" === i(e.modules) && "object" === i(e.modules.install)
        },
        listenForInstallationStartMessage: function (e) {
            o(window).off("message.intercom-installation-start").on("message.intercom-installation-start", function (t) {
                o(window).off("message.intercom-installation-start");
                var n = t.originalEvent;
                "installation.start" === n.data && (e(), n.ports && n.ports[0] ? n.ports[0].postMessage("installation.started") : n.source.postMessage("installation.started", n.origin))
            })
        },
        showSuccessOverlay: function () {
            o("body").append(this.successOverlay()), o("body").addClass("intercom-prevent-scroll")
        },
        successOverlay: function () {
            var e = o("<div />", {"class": "intercom-installation-icon"}), t = o("<h1 />", {
                "class": "intercom-installation-heading",
                text: "Intercom is successfully installed!"
            }), n = o("<p />", {
                "class": "intercom-installation-message",
                text: "Live user data is now being synced to Intercom."
            }), i = o("<p />", {
                "class": "intercom-installation-message",
                text: "Now you can make Intercom messenger visible by starting a free trial."
            }), r = o("<button />", {
                "class": "intercom-installation-button", text: "Next step", click: function () {
                    setTimeout(window.close, 300)
                }
            }), a = o("<div />", {"class": "intercom-installation-content"});
            a.append(e, t, n, i, r);
            var s = o("<div />", {"class": "intercom-installation-arrow"}), c = o("<div />", {"class": "intercom-installation-overlay"});
            return setTimeout(function () {
                o("#intercom-launcher").off("click"), o("#intercom-launcher").off("mouseover")
            }, 1e3), c.append(a, s)
        },
        fakePingResponse: {
            modules: {
                messages: {
                    activator: "#IntercomDefaultWidget",
                    colors: {base: "#0071b2"},
                    features: {inbound_lead_messaging: !0},
                    use_activator: !0
                }
            }, app: {name: ""}
        }
    }
}, function (e, t) {
    "use strict";
    t.isInteger = function (e) {
        return Number(e) === e && e % 1 === 0
    }
}, function (e, t, n) {
    "use strict";
    var i = n(95), o = n(241);
    e.exports = function (e) {
        function t(e) {
            return e = i.toArray(e), i.isEmpty(e) || i.isUndefined(n[e[0]]) ? void 0 : n[e[0]].apply(n, e.slice(1))
        }

        var n = {
            boot: function (t) {
                e.initialize(t)
            }, shutdown: function () {
                e.deinitialize()
            }, update: function (t) {
                e.createOrUpdateUser(t)
            }, reattachActivator: function () {
                e.enableCustomLauncher()
            }, show: function () {
                e.show()
            }, showMessages: function () {
                e.showConversations()
            }, showNewMessage: function (t) {
                e.showNewConversation(t)
            }, hide: function () {
                e.hide()
            }, trackEvent: function (t, n) {
                e.createEvent(t, n)
            }, onHide: function (t) {
                e.on("hide", t)
            }, onShow: function (t) {
                e.on("show", t)
            }, onActivatorClick: function (t) {
                e.on("click", t)
            }, clearState: function () {
                e.clearState()
            }, reactToArticle: function (t) {
                e.reactToArticle(t)
            }, onShowArticleConversation: function (t) {
                e.on("showArticleConversation", t)
            }, sendAnalyticEvent: function (t, n) {
                e.sendAnalyticEvent(t, n)
            }, log: function () {
                i.each(o.getLines(), function (e) {
                    console.log(e)
                })
            }
        };
        if (n.reattach_activator = n.reattachActivator, n.trackUserEvent = n.trackEvent, window.Intercom && window.Intercom.q)for (; ;) {
            var r = window.Intercom.q.shift();
            if (i.isUndefined(r))break;
            t(r)
        }
        return window.Intercom = function () {
            return t(arguments)
        }, window.Intercom.public_api = n, window.Intercom
    }
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        var t = window.$;
        null !== t && void 0 !== t && void 0 !== t.pjax && (t(document).on("pjax:click", ".intercom-container a", function (e) {
            e.preventDefault()
        }), t(document).on("pjax:success", function () {
            e.createOrUpdateUser()
        }))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311);
    e.exports = function (e) {
        i(document).on("page:change", function () {
            e.add()
        })
    }
}, function (e, t, n) {
    "use strict";
    function i(e, t, n) {
        this.base = e, this.pingBase = t, this.settings = n
    }

    var o = n(95), r = n(94), a = n(241), s = n(528), c = n(325), l = n(340), m = n(533), u = n(314), d = n(312).Events;
    o.extend(i.prototype, d, {
        createOrUpdateUser: function (e) {
            a.info("clients/intercom - createOrUpdateUser");
            var t, n = this._buildPingRequest(e);
            return t = u.isEnabled("v3_email_attribute") ? this.settings.get("is-anonymous-install") ? "/ping" : "/vjs/users/ping" : this.settings.get("user.anonymous") === !0 ? "/ping" : "/vjs/users/ping", this._post(t, n, this.pingBase).pipe(o.bind(this._handlePingResponse, this)).promise()
        }, getConversation: function (e) {
            return a.info("clients/intercom - getConversation - id:" + e), this._post("/widget_api/conversations/" + e + "/fetch", this._buildRequest()).promise()
        }, getArticleConversation: function (e) {
            return a.info("clients/intercom - getArticleConversation - articleId:" + e), this._post("/widget_api/articles/fetch_conversation", this._buildRequest({article_id: e})).promise()
        }, getConversations: function (e) {
            return e = o.defaults(e || {}, {
                page: 1,
                per_page: 10,
                referer: this._getReferer()
            }), a.info("clients/intercom - getConversations"), this._post("/widget_api/conversations", this._buildRequest(e)).promise()
        }, getConversationsAndFilterByIds: function (e) {
            return a.info("clients/intercom - getConversationsAndFilterByIds - ids:" + e), this.getConversations().then(function (t) {
                return o.filter(t.conversations, function (t) {
                    return o.contains(e, t.id)
                })
            }).promise()
        }, markConversationAsRead: function (e) {
            return a.info("clients/intercom - updateConversation - id:" + e.id), this._post("/widget_api/conversations/" + e.id + "/read", this._buildRequest(o.omit(e, "id"))).promise()
        }, createComment: function (e) {
            return a.info("clients/intercom - createComment"), o.extend(e, {referer: this._getReferer()}), this._post("/widget_api/conversations/" + e.conversation_id + "/simple_reply", this._buildRequest(e)).promise()
        }, _extractPartWithMatchingUUID: function (e, t) {
            return o(e).filter(function (e) {
                return e.client_assigned_uuid === t
            })[0]
        }, _lastPartWithNoUUID: function (e) {
            return o(e.reverse()).filter(function (e) {
                return o.isNull(e.client_assigned_uuid) || o.isUndefined(e.client_assigned_uuid)
            })[0]
        }, createConversation: function (e) {
            return a.info("clients/intercom - createConversation"), o.extend(e, {referer: this._getReferer()}), this._post("/widget_api/messages", this._buildRequest(e)).promise()
        }, matchMessage: function (e) {
            var t = this._buildRequest({predicates: r.stringify(e.predicates)});
            this._post("/widget_api/messages/" + e.id + "/match", t).then(o.bind(function (e) {
                o.isEmpty(e) || this.trigger("new-unread-conversation", e)
            }, this))
        }, createUpload: function (e) {
            return a.info("clients/intercom - createUpload"), this._post("/vjs/uploads", this._buildRequest({
                upload: r.stringify(e),
                user_id: this.settings.get("user.intercom-id")
            })).promise()
        }, updateUpload: function (e) {
            a.info("clients/intercom - updateUpload");
            var t = e.id;
            return this._post("/vjs/uploads/" + t, this._buildRequest({
                upload: r.stringify(e),
                _method: "put"
            })).promise()
        }, createEvent: function (e, t) {
            a.info("clients/intercom - createEvent");
            var n = this.settings.get("user.anonymous") ? "/ping/events" : "/vjs/users/events";
            return this._post(n, this._buildRequest({
                event_list: r.stringify({
                    data: [{
                        event_name: e,
                        created: Math.round(c.now() / 1e3),
                        metadata: t
                    }]
                })
            })).promise()
        }, getAdminVideoData: function () {
            var e = "/widget_api/acquire_video_response";
            return this._post(e, this._buildRequest({app_id: this.settings.get("app.id")})).promise()
        }, sendAnalyticEvent: function (e) {
            var t = "/widget_api/metrics";
            return this._postAsJSON(t, e).promise()
        }, conditionsSatisfied: function (e, t) {
            return a.info("clients/intercom - conditionsSatisfied"), this._post("/widget_api/conversations/" + e + "/conditions_satisfied", this._buildRequest({condition_id: t}))
        }, reactToArticle: function (e, t) {
            return this._post("/widget_api/articles/" + e + "/react", this._buildRequest({reaction_index: t}))
        }, _handlePingResponse: function (e) {
            if ("string" == typeof e)throw a.error("Unable to process String ping responses"), new Error("Intercom was unable to initialise.");
            return this.trigger("ping", e), this.settings.get("app.messaging-disabled") ? e : (this._getUnreadConversations(e.unread_conversation_ids), e)
        }, _buildRequest: function (e) {
            return e = o.extend(e || {}, this._attributesForRequest()), e.user_data = r.stringify(e.user_data), e
        }, _getUnreadConversations: function (e) {
            if (!o.isEmpty(e)) {
                var t = o.invoke(e, "toString");
                this.getConversationsAndFilterByIds(t).then(o.bind(function (e) {
                    o.each(e, o.bind(this.trigger, this, "new-unread-conversation"))
                }, this))
            }
        }, _buildPingRequest: function () {
            var e = this._attributesForRequest();
            return o.extend(e.user_data, {increments: this.settings.getAndClear("increments")}, this.settings.getCustomAttributes()), e.referer = this._getReferer(), e.user_data = r.stringify(e.user_data), e.metrics = r.stringify(l.getMetrics()), l.resetMetrics(), e
        }, _attributesForRequest: function () {
            return {
                app_id: this.settings.get("app.id"),
                anonymous_session: this.settings.get("user.anonymous-session"),
                user_data: {
                    email: this.settings.get("user.email"),
                    user_id: this.settings.get("user.id"),
                    user_hash: this.settings.get("user.hash"),
                    anonymous_id: this.settings.get("user.anonymous-id"),
                    anonymous_email: this.settings.get("user.anonymous-email")
                }
            }
        }, _getReferer: function () {
            return window.location.href
        }, _post: function (e, t, n) {
            return t[m.keyName] = m.randomKey(), s.post((n || this.base) + e, t)
        }, _postAsJSON: function (e, t, n) {
            return t[m.keyName] = m.randomKey(), s.post((n || this.base) + e, r.stringify(t), void 0, void 0, "application/json")
        }
    }), e.exports = i
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return o.features.xdr() && a.parse(e).protocol === document.location.protocol
    }

    var o = n(324), r = n(241), a = n(301), s = n(529), c = n(531), l = n(532), m = {xhr2: s, xdr: c, jsonp: l};
    m.post = function (e, t, n, a) {
        var s = arguments.length <= 4 || void 0 === arguments[4] ? "application/x-www-form-urlencoded" : arguments[4];
        return o.features.xhr2() ? (r.info("http - POST (xhr2) " + e), this.xhr2(e, "POST", t, n, a, s)) : i(e) ? (r.info("http - POST (xdr) " + e), this.xdr(e, t, n, a)) : (r.info("http - POST (jsonp) " + e), this.jsonp(e, t, n, s))
    }, e.exports = m
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(530);
    e.exports = function (e, t, n, r, a, s) {
        return i.ajax({
            xhrFields: {withCredentials: !0},
            xhr: o.createXHR,
            dataType: "json",
            contentType: s,
            type: t,
            url: e,
            data: n,
            success: r,
            error: a
        })
    }
}, function (e, t) {
    "use strict";
    function n() {
        return "function" == typeof window.xdomain && "object" === r(window.xhook) && void 0 !== r(window.xhook.XMLHttpRequest)
    }

    function i() {
        try {
            var e = n() ? window.xhook.XMLHttpRequest : window.XMLHttpRequest;
            return new e
        } catch (t) {
        }
    }

    function o() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    };
    e.exports = {
        createXHR: function () {
            return void 0 !== window.ActiveXObject ? i() || o() : i()
        }
    }
}, function (e, t, n) {
    "use strict";
    function i(e) {
        if ("string" == typeof e)if (e.match(/^\s*$/))e = {}; else try {
            e = a.parse(e)
        } catch (t) {
            s.error("Parsing failed:'" + e + "'")
        }
        return e
    }

    var o = n(311), r = n(95), a = n(94), s = n(241);
    e.exports = function (e, t, n, a) {
        var s = new XDomainRequest, c = o.Deferred();
        return s.timeout = 1e4, s.open("POST", e), s.ontimeout = function () {
        }, s.onprogress = function () {
        }, s.onload = function () {
            var e = s.response || s.responseText, t = i(e);
            r.isFunction(n) && n(t, s.status), c.resolve(t)
        }, s.onerror = function () {
            var e = s.response || s.responseText, t = i(e);
            r.isFunction(a) && a(t), c.rejectWith(t)
        }, t.utf8 = "✓", setTimeout(function () {
            s.send(o.param(t))
        }, 0), c
    }
}, function (e, t, n) {
    "use strict";
    var i = n(311), o = n(325);
    e.exports = function (e, t, n, r) {
        return i.ajax({
            type: "GET",
            url: e,
            data: t,
            dataType: "jsonp",
            contentType: r,
            jsonp: "callback",
            jsonpCallback: "intercom_jsonp_" + o.now(),
            success: n
        })
    }
}, function (e, t) {
    "use strict";
    t.randomKey = function () {
        return Math.floor(4294967295 * Math.random()).toString(16)
    }, t.keyName = "Idempotency-Key"
}, function (e, t, n) {
    "use strict";
    function i(e) {
        this.settings = e, this.listeners = [], this.isInitialised = !1
    }

    var o = n(95), r = n(241), a = n(535), s = n(414);
    i.prototype.initialise = function () {
        try {
            var e = this.settings.get("app.rtm-settings");
            if (o.isUndefined(e) || o.isUndefined(e.endpoints))return void this._shutdown();
            if (this.isInitialised && 0 === o(this.nexusClient.getEndpoints()).difference(e.endpoints).length)return;
            !this.isInitialised && o.isUndefined(this.nexusClient) || this._shutdown(), r.info("Starting Nexus client"), this.nexusClient = this._createNexusClient(e.endpoints, r), this.isInitialised = !0, this._addListeners(), this.addListener("NewComment", s.onNewComment)
        } catch (t) {
            r.error("initialise Error: " + t), this.isInitialised = !1
        }
    }, i.prototype.postEvent = function (e, t) {
        if (this.isInitialised)try {
            this.nexusClient.sendEvent(e, t)
        } catch (n) {
            r.error("postEvent Error: " + n)
        }
    }, i.prototype.addListener = function (e, t) {
        this.isInitialised ? this.nexusClient.addListener(e, t) : this.listeners.push({eventName: e, eventHandler: t})
    }, i.prototype.syncCreateConversation = function (e) {
        return this.postEvent("CreateConversation", e.id), e
    }, i.prototype.syncCreateComment = function (e) {
        return this.postEvent("NewComment", e.conversation_id), e
    }, i.prototype.onConversationSeen = function (e) {
        this.postEvent("ConversationSeen", {conversationId: e})
    }, i.prototype.onConversationReceived = function (e) {
        try {
            var t = s.popLatencyDataForConversation(e), n = o.extend(t, {conversationId: e});
            this.postEvent("ConversationReceived", n)
        } catch (i) {
            r.error("onConversationReceived Error: " + i)
        }
    }, i.prototype.onUserPresent = function () {
        if (this.isInitialised)try {
            this.nexusClient.setUserPresent()
        } catch (e) {
            r.error("onUserPresent Error: " + e)
        }
    }, i.prototype.onUserAbsent = function () {
        if (this.isInitialised)try {
            this.nexusClient.setUserAbsent()
        } catch (e) {
            r.error("onUserAbsent Error: " + e)
        }
    }, i.prototype.getMetrics = function () {
        return this.isInitialised ? this.nexusClient.getMetrics() : void 0
    }, i.prototype.resetMetrics = function () {
        this.isInitialised && this.nexusClient.resetMetrics()
    }, i.prototype._createNexusClient = function (e, t) {
        return new a(e, t)
    }, i.prototype._addListeners = function () {
        return this.isInitialised ? void o.each(this.listeners, function (e) {
            this.nexusClient.addListener(e.eventName, e.eventHandler)
        }, this) : void r.error("_addListeners must not be called until isInitialised is set")
    }, i.prototype._shutdown = function () {
        o.isUndefined(this.nexusClient) || (r.info("Shutting down Nexus client - configuration removed from ping response"), this.nexusClient.shutdown()), this.isInitialised = !1
    }, e.exports = i
}, function (e, t, n) {
    function i(e, t) {
        this._endpoints = e, this._logger = t, this._seenMessages = {}, this._userIsPresent = !1, this._sendPresenceImmediatelyWhenPresent = !0, this._userPresenceFrequencySecs = 60, this.connections = this._createConnections(), this._startPingTest(), this._startConnectionKeepAlive()
    }

    var o = n(536), r = n(95), a = 12e5, s = "0.0.72";
    i.prototype.addListener = function (e, t) {
        r.each(this.connections, function (n) {
            n.addListener(e, t)
        })
    }, i.prototype.setListener = function (e, t) {
        this.addListener(e, t)
    }, i.prototype.sendEvent = function (e, t) {
        this._publish({eventName: e, eventData: t})
    }, i.prototype.sendUserEvent = function (e, t, n) {
        this._publish({"nx.ToUser": e, eventName: t, eventData: n})
    }, i.prototype.newMessage = function (e) {
        this.sendEvent("NewMessage", e)
    }, i.prototype.newComment = function (e) {
        this.sendEvent("NewComment", e)
    }, i.prototype.getMetrics = function () {
        return void 0 !== this._lastResetMetrics && (new Date).getTime() - this._lastResetMetrics > a ? void 0 : {
            version: s,
            endpoints: r.map(this.connections, function (e) {
                return e.getMetrics()
            })
        }
    }, i.prototype.resetMetrics = function () {
        r.each(this.connections, function (e) {
            e.resetMetrics()
        }), this._lastResetMetrics = (new Date).getTime()
    }, i.prototype.getEndpoints = function () {
        return this._endpoints
    }, i.prototype.setUserPresent = function () {
        this._userIsPresent || (this._userIsPresent = !0, this._sendPresenceImmediatelyWhenPresent && (this._sendPresenceImmediatelyWhenPresent = !1, this._userPresence(), this._startUserPresence()))
    }, i.prototype.setUserAbsent = function () {
        this._userIsPresent = !1
    }, i.prototype.shutdown = function () {
        this._stopUserPresence(), r.each(this.connections, function (e) {
            e.shutdown()
        })
    }, i.prototype.unsubscribe = function () {
        this.shutdown()
    }, i.prototype._publish = function (e) {
        var t = this._generateGuid();
        e.eventGuid = t, r.each(this.connections, function (t) {
            t.publish(e)
        })
    }, i.prototype._userPresence = function () {
        this._userIsPresent ? this._sendUserPresenceEvent() : (this._sendPresenceImmediatelyWhenPresent = !0, this._stopUserPresence())
    }, i.prototype._sendUserPresenceEvent = function () {
        this.sendEvent("nx.UserPresence", {current_page: this._getCurrentPage()})
    }, i.prototype._startUserPresence = function () {
        this.userPresenceInterval = setInterval(r.bind(this._userPresence, this), 1e3 * this._userPresenceFrequencySecs)
    }, i.prototype._stopUserPresence = function () {
        this.userPresenceInterval && (this.userPresenceInterval = clearInterval(this.userPresenceInterval))
    }, i.prototype._createConnections = function () {
        return r.map(this._endpoints, function (e) {
            return new o(e, s, this._seenMessages, r.bind(this._sendUserPresenceEvent, this), this._logger)
        }, this)
    }, i.prototype._startPingTest = function () {
        r.each(this.connections, function (e) {
            e.startPingTest()
        })
    }, i.prototype._startConnectionKeepAlive = function () {
        r.each(this.connections, function (e) {
            e.startConnectionKeepAlive()
        })
    }, i.prototype._generateGuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = 16 * Math.random() | 0, n = "x" === e ? t : 3 & t | 8;
            return n.toString(16)
        })
    }, i.prototype._getCurrentPage = function () {
        return window.location.href
    }, e.exports = i
}, function (e, t, n) {
    (function (t) {
        function i(e, t, n, i, o) {
            this._firstConnectDone = !1, this._endpoint = e, this._transport = this._getTransport(), this._logger = o, this._clientVersion = t, this._onFirstConnect = i, this._allowReconnect = !0, this._listeners = {}, this._seenMessages = n, this._connectionAttempts = 0, this._lastMessageSentAt = this._now(), this.websocket = {hadConnection: !1}, this["long-polling"] = {hadConnection: !1}, this.jsonp = {hadConnection: !1}, this.resetMetrics(), this._subscribe()
        }

        var o = n(537), r = n(95), a = "/client-test", s = 33e4;
        i.prototype.addListener = function (e, t) {
            void 0 === this._listeners[e] ? this._listeners[e] = [t] : this._listeners[e].push(t)
        }, i.prototype.resetMetrics = function () {
            var e = {
                connections: 0,
                connectionDuration: 0,
                reconnections: 0,
                backoffDuration: 0
            }, t = {
                endpoint: this._endpoint,
                messagesReceived: 0,
                uniqueMessagesReceived: 0,
                errors: 0,
                messagesPublished: 0,
                timeouts: 0,
                transportFailures: 0,
                attempts: 0,
                successes: 0,
                failures: 0,
                totalTransitTime: 0,
                healthcheckFailures: 0,
                transports: {websocket: r.clone(e), "long-polling": r.clone(e), jsonp: r.clone(e)}
            };
            this.metrics = r.clone(t)
        }, i.prototype.getMetrics = function () {
            return this._sliceTimingMetrics(), this.metrics
        }, i.prototype.publish = function (e) {
            this._hasSubscription() && (this._seenMessages[e.eventGuid] = !0, this._subscription.push(t.stringify(e)), this._lastMessageSentAt = this._now())
        }, i.prototype.startPingTest = function () {
            this.addListener("ACK", r.bind(this._handlePingResponse, this)), this._pingTestInterval = setInterval(r.bind(function () {
                this._ping()
            }, this), 3e5)
        }, i.prototype.stopPingTest = function () {
            void 0 !== this._pingTestInterval && clearInterval(this._pingTestInterval)
        }, i.prototype.startConnectionKeepAlive = function () {
            this._keepAliveInterval = setInterval(r.bind(function () {
                this._keepAlive()
            }, this), 3e5)
        }, i.prototype.stopKeepAlive = function () {
            void 0 !== this._keepAliveInterval && clearInterval(this._keepAliveInterval)
        }, i.prototype.shutdown = function () {
            this._allowReconnect = !1, this.stopPingTest(),
                this.stopKeepAlive(), this._subscription.close()
        }, i.prototype._subscribe = function () {
            if (window.XDomainRequest)return this._logger.info("Not running Nexus client test on IE8/9"), this._createSubscription(), void this._setConnectionStart();
            var e = this._healthcheckEndpoint(), t = new XMLHttpRequest;
            t.onreadystatechange = r.bind(function () {
                4 === t.readyState && 200 === t.status ? (this._createSubscription(), this._setConnectionStart()) : 4 === t.readyState && 200 !== t.status && (this.metrics.healthcheckFailures++, this._connectionAttempts++, this._logger.info("Endpoint " + e + " unavailable, scheduling resubscribe"), this._scheduleReconnect("healthcheck-failure"))
            }, this), t.open("GET", e, !0), t.timeout = 2e3, t.send(null)
        }, i.prototype._createSubscription = function () {
            var e = this._endpoint, t = this._transport;
            -1 !== e.indexOf("router") ? "long-polling" === t || "jsonp" === t ? (e = e.replace(/nexus-router-a-\d+/, "nexus-long-poller-a"), e = e.replace(/nexus-router-b-\d+/, "nexus-long-poller-b")) : (e = e.replace(/nexus-router-a-\d+/, "nexus-websocket-a"), e = e.replace(/nexus-router-b-\d+/, "nexus-websocket-b")) : "long-polling" !== t && "jsonp" !== t || (e = e.replace(/websocket/, "long-poller"));
            var n = {
                websocket: {connectTimeout: 2e4},
                "long-polling": {connectTimeout: -1, enableXDR: !0, withCredentials: !0},
                jsonp: {connectTimeout: -1, enableXDR: !0, withCredentials: !0}
            }, i = {
                url: e,
                shared: !1,
                transport: t,
                fallbackTransport: "none",
                maxReconnectOnClose: 0,
                reconnectOnServerError: !1,
                closeAsync: !0,
                timeout: 13e4,
                onOpen: r.bind(this._onOpen, this),
                onClose: r.bind(this._onClose, this),
                onMessage: r.bind(this._onMessage, this),
                onError: r.bind(this._onError, this),
                onMessagePublished: r.bind(this._onMessagePublished, this),
                onClientTimeout: r.bind(this._onClientTimeout, this),
                onTransportFailure: r.bind(this._onTransportFailure, this),
                environment: "production",
                headers: {"X-Nexus-Version": this._clientVersion}
            };
            r.extend(i, n[t]), this._logger.info("Connecting to Nexus at " + e + " via " + t), this._subscription = o.subscribe(i)
        }, i.prototype._onOpen = function (e) {
            this[e.transport].hadConnection = !0, this.metrics.transports[e.transport].connections++, this._logger.info("Opened " + e.transport + " Nexus connection " + this._connectionUuidForResponse(e)), this._firstConnectDone === !1 && (this._firstConnectDone = !0, this._onFirstConnect())
        }, i.prototype._onClose = function (e) {
            this._logger.info("Closed " + e.transport + " Nexus connection " + this._connectionUuidForResponse(e))
        }, i.prototype._onMessage = function (e) {
            this.metrics.messagesReceived++;
            try {
                var n = t.parse(e.messages[0]), i = n.eventGuid;
                if (void 0 !== this._seenMessages[i])return;
                this._seenMessages[i] = !0, this.metrics.uniqueMessagesReceived++, this._callListeners(n.eventName, n)
            } catch (o) {
                this.metrics.errors++, this._logger.error(o)
            }
        }, i.prototype._onError = function (e) {
            var t = this._connectionUuidForResponse(e);
            "maxReconnectOnClose reached" === e.reasonPhrase && "jsonp" === this._transport && this[this._transport].hadConnection && 0 === e.status ? this._reconnect(t) : ("maxReconnectOnClose reached" === e.reasonPhrase || "Unable to reconnect with fallback transport" === e.reasonPhrase || e.status >= 500 && e.status < 600) && this._retry(t), this._logger.info("Error for Nexus connection " + t + ": " + e.status + " - " + e.reasonPhrase), this.metrics.errors++
        }, i.prototype._onMessagePublished = function (e) {
            this.metrics.messagesPublished++
        }, i.prototype._onClientTimeout = function (e) {
            this._logger.info("Client timeout for Nexus connection " + e.uuid), this._retry(e.uuid), this.metrics.timeouts++
        }, i.prototype._onTransportFailure = function (e, t) {
            this._logger.info("Client timeout for Nexus connection " + t.uuid + ": " + e), this.metrics.transportFailures++
        }, i.prototype._retry = function (e) {
            return this._recordConnectionEnd(), "websocket" !== this._transport || this[this._transport].hadConnection ? (this[this._transport].hadConnection = !1, this._transport = this._getTransport(), this._connectionAttempts++, void this._scheduleReconnect(e)) : (this._transport = this._getFallbackTransport(), void this._reconnect(e))
        }, i.prototype._scheduleReconnect = function (e) {
            var t = this._calculateBackoff();
            this._logger.info("On retry number " + this._connectionAttempts + " for endpoint " + this._endpoint + " - backing off for " + t + "ms"), this._setBackoffStart(), r.delay(r.bind(function () {
                this._recordBackoffEnd(), this._reconnect(e)
            }, this), t)
        }, i.prototype._reconnect = function (e) {
            this._allowReconnect && ("healthcheck-failure" === e ? this._subscribe() : this._subscriptionReconnect(e))
        }, i.prototype._subscriptionReconnect = function (e) {
            this._hasSubscription() ? e === this._subscription.getUUID() ? (this._subscription.close(), this._subscribe()) : this._logger.info("Not reconnecting to Nexus: asked to reconnect for " + e + ' (probably due to a "close" request failure) but current connection is ' + this._subscription.getUUID()) : this._subscribe()
        }, i.prototype._setConnectionStart = function () {
            this[this._transport].lastConnectionAt = this._now()
        }, i.prototype._setBackoffStart = function () {
            this[this._transport].lastBackoffAt = this._now()
        }, i.prototype._recordConnectionEnd = function () {
            var e = this._transport;
            this.metrics.transports[e].connectionDuration += this._now() - this[e].lastConnectionAt, this[e].lastConnectionAt = void 0
        }, i.prototype._recordBackoffEnd = function () {
            var e = this._transport;
            this.metrics.transports[e].reconnections++, this.metrics.transports[e].backoffDuration += this._now() - this[e].lastBackoffAt, this[e].lastBackoffAt = void 0
        }, i.prototype._sliceTimingMetrics = function () {
            var e = this._transport;
            void 0 !== this[e].lastConnectionAt ? (this.metrics.transports[e].connectionDuration += this._now() - this[e].lastConnectionAt, this._setConnectionStart()) : void 0 !== this[e].lastBackoffAt && (this.metrics.transports[e].backoffDuration += this._now() - this[e].lastBackoffAt, this._setBackoffStart())
        }, i.prototype._handlePingResponse = function (e) {
            if (!r.isNumber(this._inFlightPing) || this._inFlightPing !== e.ACK.sendTime)return this._logger.info("Received unexpected ACK - something else is pinging for this user's channel - disabling pinging"), void clearInterval(this._pingTestInterval);
            var t = this._now() - e.ACK.sendTime;
            this.metrics.successes++, this.metrics.totalTransitTime += t, this._connectionAttempts > 0 && this._connectionAttempts--, delete this._inFlightPing
        }, i.prototype._keepAlive = function () {
            if (this._hasSubscription() && this._now() - this._lastMessageSentAt > s) {
                var e = this._now(), t = {eventName: "nx.KeepAlive", eventGuid: e, eventData: {sendTime: e}};
                this.publish(t)
            }
        }, i.prototype._ping = function () {
            if (this._hasSubscription()) {
                r.isNumber(this._inFlightPing) && this.metrics.failures++;
                var e = this._now();
                this._inFlightPing = e;
                var t = {
                    eventName: "nx.Ping",
                    eventGuid: e.toString(),
                    eventData: {sendTime: e, endpoint: this._endpoint}
                };
                this.metrics.attempts++, this.publish(t)
            }
        }, i.prototype._callListeners = function (e, t) {
            r.each(this._listeners[e], r.bind(function (e) {
                e(t)
            }, this))
        }, i.prototype._connectionUuidForResponse = function (e) {
            return r.isObject(e.request) ? e.request.uuid : this._hasSubscription() ? this._subscription.getUUID() : "unknown-uuid"
        }, i.prototype._calculateBackoff = function () {
            var e = Math.min(10, this._connectionAttempts + 4), t = Math.pow(2, e), n = t * Math.random(), i = t + n;
            return 1e3 * i
        }, i.prototype._getTransport = function () {
            return this._supportsWebSocket() ? "websocket" : this._getFallbackTransport()
        }, i.prototype._getFallbackTransport = function () {
            return window.XDomainRequest && document.location.protocol !== this._parsedEndpoint().protocol ? "jsonp" : "long-polling"
        }, i.prototype._supportsWebSocket = function () {
            return this._isAndroidStockBrowser(navigator.userAgent) ? !1 : window.WebSocket || window.MozWebSocket
        }, i.prototype._healthcheckEndpoint = function () {
            var e = this._parsedEndpoint();
            return e.protocol + "//" + e.host + a
        }, i.prototype._parsedEndpoint = function () {
            var e = document.createElement("a");
            return e.href = this._endpoint, {
                host: e.host,
                hostname: e.hostname,
                pathname: e.pathname,
                port: e.port,
                protocol: e.protocol,
                search: e.search,
                hash: e.hash
            }
        }, i.prototype._hasSubscription = function () {
            return void 0 !== this._subscription
        }, i.prototype._now = function () {
            return (new Date).getTime()
        }, i.prototype._isAndroidStockBrowser = function (e) {
            var t = e.toLowerCase();
            return t.indexOf("mozilla/5.0") > -1 && t.indexOf("android") > -1 && t.indexOf("applewebkit") > -1 && !(t.indexOf("chrome") > -1)
        }, e.exports = i
    }).call(t, n(94))
}, function (e, t, n) {
    var i, o;
    !function (n, r) {
        "use strict";
        i = [], o = function () {
            return r()
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }(this, function () {
        "use strict";
        var e, t = "2.2.6-javascript", n = {}, i = !1, o = [], r = [], a = 0, s = "production", c = Object.prototype.hasOwnProperty;
        return n = {
            onError: function (e) {
            }, onClose: function (e) {
            }, onOpen: function (e) {
            }, onReopen: function (e) {
            }, onMessage: function (e) {
            }, onReconnect: function (e, t) {
            }, onMessagePublished: function (e) {
            }, onTransportFailure: function (e, t) {
            }, onLocalMessage: function (e) {
            }, onFailureToReconnect: function (e, t) {
            }, onClientTimeout: function (e) {
            }, onOpenAfterResume: function (e) {
            }, WebsocketApiAdapter: function (e) {
                var t, i;
                return e.onMessage = function (e) {
                    i.onmessage({data: e.responseBody})
                }, e.onMessagePublished = function (e) {
                    i.onmessage({data: e.responseBody})
                }, e.onOpen = function (e) {
                    i.onopen(e)
                }, i = {
                    close: function () {
                        t.close()
                    }, send: function (e) {
                        t.push(e)
                    }, onmessage: function (e) {
                    }, onopen: function (e) {
                    }, onclose: function (e) {
                    }, onerror: function (e) {
                    }
                }, t = new n.subscribe(e), i
            }, AtmosphereRequest: function (e) {
                function o() {
                    we = !0, Ce = !1, xe = 0, fe = null, ge = null, ve = null, be = null
                }

                function c() {
                    p(), o()
                }

                function l(e) {
                    return "debug" == e ? "debug" === pe.logLevel : "info" == e ? "info" === pe.logLevel || "debug" === pe.logLevel : "warn" == e ? "warn" === pe.logLevel || "info" === pe.logLevel || "debug" === pe.logLevel : "error" == e ? "error" === pe.logLevel || "warn" === pe.logLevel || "info" === pe.logLevel || "debug" === pe.logLevel : !1
                }

                function m(e, t) {
                    return "" === he.partialMessage && "streaming" === t.transport && e.responseText.length > t.maxStreamingLength
                }

                function u() {
                    if (pe.enableProtocol && !pe.firstMessage && "websocket" !== pe.transport) {
                        var e = "X-Atmosphere-Transport=close&X-Atmosphere-tracking-id=" + pe.uuid;
                        n.util.each(pe.headers, function (t, i) {
                            var o = n.util.isFunction(i) ? i.call(this, pe, pe, he) : i;
                            null != o && (e += "&" + encodeURIComponent(t) + "=" + encodeURIComponent(o))
                        });
                        var t = pe.url.replace(/([?&])_=[^&]*/, e);
                        t += t === pe.url ? (/\?/.test(pe.url) ? "&" : "?") + e : "";
                        var i = {connected: !1}, o = new n.AtmosphereRequest(i);
                        o.attachHeadersAsQueryString = !1, o.dropHeaders = !0, o.url = t, o.contentType = "text/plain", o.transport = "polling", o.method = "GET", o.data = "", pe.enableXDR && (o.enableXDR = pe.enableXDR), o.async = pe.closeAsync, K("", o)
                    }
                }

                function d() {
                    l("debug") && n.util.debug("Closing"), Ce = !0, pe.reconnectId && (clearTimeout(pe.reconnectId), delete pe.reconnectId), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer), pe.reconnect = !1, he.request = pe, he.state = "unsubscribe", he.responseBody = "", he.status = 408, he.partialMessage = "", le(), u(), p()
                }

                function p() {
                    he.partialMessage = "", pe.id && clearTimeout(pe.id), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer), null != be && (be.close(), be = null), null != ye && (ye.abort(), ye = null), null != ve && (ve.abort(), ve = null), null != fe && (fe.close(), fe = null), null != ge && (ge.close(), ge = null), h()
                }

                function h() {
                    null != me && (clearInterval(ue), document.cookie = de + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", me.signal("close", {
                        reason: "",
                        heir: Ce ? (me.get("children") || [])[0] : Se
                    }), me.close()), null != Te && Te.close()
                }

                function f(e) {
                    c(), pe = n.util.extend(pe, e), s = pe.environment, pe.mrequest = pe.reconnect, pe.reconnect || (pe.reconnect = !0)
                }

                function g() {
                    return null != pe.webSocketImpl || window.WebSocket || window.MozWebSocket
                }

                function v() {
                    return window.EventSource
                }

                function b() {
                    if (pe.shared) {
                        if (Te = y(pe), null != Te && (l("debug") && n.util.debug("Storage service available. All communication will be local"), Te.open(pe)))return;
                        l("debug") && n.util.debug("No Storage service available."), Te = null
                    }
                    pe.firstMessage = 0 == a, pe.isOpen = !1, pe.ctime = n.util.now(), 0 === pe.uuid && (pe.uuid = a), he.closedByClientTimeout = !1, "websocket" !== pe.transport && "sse" !== pe.transport ? R(pe) : "websocket" === pe.transport ? g() ? S(!1) : q("Websocket is not supported, using request.fallbackTransport (" + pe.fallbackTransport + ")") : "sse" === pe.transport && (v() ? T(!1) : q("Server Side Events(SSE) is not supported, using request.fallbackTransport (" + pe.fallbackTransport + ")"))
                }

                function y(e) {
                    function t(e, t) {
                        var n, i = e.length;
                        for (n = 0; i > n; n++)e[n] === t && e.splice(n, 1);
                        return i !== e.length
                    }

                    function i(t) {
                        var i = n.util.parseJSON(t), o = i.data;
                        if ("c" === i.target)switch (i.type) {
                            case"open":
                                x("opening", "local", pe);
                                break;
                            case"close":
                                s || (s = !0, "aborted" === o.reason ? d() : o.heir === Se ? b() : setTimeout(function () {
                                    b()
                                }, 100));
                                break;
                            case"message":
                                oe(o, "messageReceived", 200, e.transport);
                                break;
                            case"localMessage":
                                ie(o)
                        }
                    }

                    function o() {
                        var e = new RegExp("(?:^|; )(" + encodeURIComponent(c) + ")=([^;]*)").exec(document.cookie);
                        return e ? n.util.parseJSON(decodeURIComponent(e[2])) : void 0
                    }

                    var r, a, s, c = "atmosphere-" + e.url, l = {
                        storage: function () {
                            function o(e) {
                                e.key === c && e.newValue && i(e.newValue)
                            }

                            if (n.util.storage) {
                                var r = window.localStorage, a = function (e) {
                                    return n.util.parseJSON(r.getItem(c + "-" + e))
                                }, s = function (e, t) {
                                    r.setItem(c + "-" + e, n.util.stringifyJSON(t))
                                };
                                return {
                                    init: function () {
                                        return s("children", a("children").concat([Se])), n.util.on(window, "storage", o), a("opened")
                                    }, signal: function (e, t) {
                                        r.setItem(c, n.util.stringifyJSON({target: "p", type: e, data: t}))
                                    }, close: function () {
                                        var i = a("children");
                                        n.util.off(window, "storage", o), i && t(i, e.id) && s("children", i)
                                    }
                                }
                            }
                        }, windowref: function () {
                            var e = window.open("", c.replace(/\W/g, ""));
                            if (e && !e.closed && e.callbacks)return {
                                init: function () {
                                    return e.callbacks.push(i), e.children.push(Se), e.opened
                                }, signal: function (t, i) {
                                    !e.closed && e.fire && e.fire(n.util.stringifyJSON({target: "p", type: t, data: i}))
                                }, close: function () {
                                    s || (t(e.callbacks, i), t(e.children, Se))
                                }
                            }
                        }
                    };
                    return r = o(), !r || n.util.now() - r.ts > 1e3 || !(a = l.storage() || l.windowref()) ? void 0 : {
                        open: function () {
                            var t;
                            return ue = setInterval(function () {
                                var e = r;
                                r = o(), r && e.ts !== r.ts || i(n.util.stringifyJSON({
                                    target: "c",
                                    type: "close",
                                    data: {reason: "error", heir: e.heir}
                                }))
                            }, 1e3), t = a.init(), t && setTimeout(function () {
                                x("opening", "local", e)
                            }, 50), t
                        }, send: function (e) {
                            a.signal("send", e)
                        }, localSend: function (e) {
                            a.signal("localSend", n.util.stringifyJSON({id: Se, event: e}))
                        }, close: function () {
                            Ce || (clearInterval(ue), a.signal("close"), a.close())
                        }
                    }
                }

                function w() {
                    function e(e) {
                        var t = n.util.parseJSON(e), i = t.data;
                        if ("p" === t.target)switch (t.type) {
                            case"send":
                                W(i);
                                break;
                            case"localSend":
                                ie(i);
                                break;
                            case"close":
                                d()
                        }
                    }

                    function t() {
                        document.cookie = de + "=" + encodeURIComponent(n.util.stringifyJSON({
                                ts: n.util.now() + 1,
                                heir: (i.get("children") || [])[0]
                            })) + "; path=/"
                    }

                    var i, o = "atmosphere-" + pe.url, r = {
                        storage: function () {
                            function t(t) {
                                t.key === o && t.newValue && e(t.newValue)
                            }

                            if (n.util.storage) {
                                var i = window.localStorage;
                                return {
                                    init: function () {
                                        n.util.on(window, "storage", t)
                                    }, signal: function (e, t) {
                                        i.setItem(o, n.util.stringifyJSON({target: "c", type: e, data: t}))
                                    }, get: function (e) {
                                        return n.util.parseJSON(i.getItem(o + "-" + e))
                                    }, set: function (e, t) {
                                        i.setItem(o + "-" + e, n.util.stringifyJSON(t))
                                    }, close: function () {
                                        n.util.off(window, "storage", t), i.removeItem(o), i.removeItem(o + "-opened"), i.removeItem(o + "-children")
                                    }
                                }
                            }
                        }, windowref: function () {
                            var t, i = o.replace(/\W/g, ""), r = document.getElementById(i);
                            return r || (r = document.createElement("div"), r.id = i, r.style.display = "none", r.innerHTML = '<iframe name="' + i + '" />', document.body.appendChild(r)), t = r.firstChild.contentWindow, {
                                init: function () {
                                    t.callbacks = [e], t.fire = function (e) {
                                        var n;
                                        for (n = 0; n < t.callbacks.length; n++)t.callbacks[n](e)
                                    }
                                }, signal: function (e, i) {
                                    !t.closed && t.fire && t.fire(n.util.stringifyJSON({target: "c", type: e, data: i}))
                                }, get: function (e) {
                                    return t.closed ? null : t[e]
                                }, set: function (e, n) {
                                    t.closed || (t[e] = n)
                                }, close: function () {
                                }
                            }
                        }
                    };
                    Ae = function (e) {
                        i.signal("message", e)
                    }, i = r.storage() || r.windowref(), i.init(), l("debug") && n.util.debug("Installed StorageService " + i), i.set("children", []), null == i.get("opened") || i.get("opened") || i.set("opened", !1), de = encodeURIComponent(o), t(), ue = setInterval(t, 1e3), me = i
                }

                function x(e, t, n) {
                    if (pe.shared && "local" !== t && w(), null != me && me.set("opened", !0), n.close = function () {
                            d()
                        }, xe > 0 && "re-connecting" === e)n.isReopen = !0, $(he); else if (null == he.error) {
                        he.request = n;
                        var i = he.state;
                        he.state = e;
                        var o = he.transport;
                        he.transport = t;
                        var r = he.responseBody;
                        le(), he.responseBody = r, he.state = i, he.transport = o
                    }
                }

                function _(e) {
                    e.transport = "jsonp";
                    var t, i = pe;
                    null != e && "undefined" != typeof e && (i = e), ye = {
                        open: function () {
                            function o() {
                                i.lastIndex = 0, i.openId && clearTimeout(i.openId), i.heartbeatTimer && clearTimeout(i.heartbeatTimer), i.reconnect && xe++ < i.maxReconnectOnClose ? (x("re-connecting", i.transport, i), O(ye, i, e.reconnectInterval), i.openId = setTimeout(function () {
                                    M(i)
                                }, i.reconnectInterval + 1e3)) : N(0, "maxReconnectOnClose reached")
                            }

                            function r() {
                                var n = i.url;
                                null != i.dispatchUrl && (n += i.dispatchUrl);
                                var r = i.data;
                                i.attachHeadersAsQueryString && (n = P(i), "" !== r && (n += "&X-Atmosphere-Post-Body=" + encodeURIComponent(r)), r = "");
                                var s = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
                                t = document.createElement("script"), t.src = n + "&jsonpTransport=" + a, t.clean = function () {
                                    t.clean = t.onerror = t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), 2 === ++e.scriptCount && (e.scriptCount = 1, o())
                                }, t.onload = t.onreadystatechange = function () {
                                    t.readyState && !/loaded|complete/.test(t.readyState) || t.clean()
                                }, t.onerror = function () {
                                    e.scriptCount = 1, t.clean()
                                }, s.insertBefore(t, s.firstChild)
                            }

                            var a = "atmosphere" + (Se = n.util.random());
                            window[a] = function (t) {
                                if ("" !== t.message)if (e.scriptCount = 0, i.reconnect && -1 === i.maxRequest || i.requestCount++ < i.maxRequest) {
                                    if (i.executeCallbackBeforeReconnect || O(ye, i, i.pollingInterval), null != t && "string" != typeof t)try {
                                        t = t.message
                                    } catch (o) {
                                    }
                                    var r = I(t, i, he);
                                    r || oe(he.responseBody, "messageReceived", 200, i.transport), i.executeCallbackBeforeReconnect && O(ye, i, i.pollingInterval), E(i)
                                } else n.util.log(pe.logLevel, ["JSONP reconnect maximum try reached " + pe.requestCount]), N(0, "maxRequest reached")
                            }, setTimeout(function () {
                                r()
                            }, 50)
                        }, abort: function () {
                            t && t.clean && t.clean()
                        }
                    }, ye.open()
                }

                function k(e) {
                    return null != pe.webSocketImpl ? pe.webSocketImpl : window.WebSocket ? new WebSocket(e) : new MozWebSocket(e)
                }

                function C() {
                    return P(pe, n.util.getAbsoluteURL(pe.webSocketUrl || pe.url)).replace(/^http/, "ws")
                }

                function A() {
                    var e = P(pe);
                    return e
                }

                function T(e) {
                    he.transport = "sse";
                    var t = A();
                    if (l("debug") && (n.util.debug("Invoking executeSSE"), n.util.debug("Using URL: " + t)), e && !pe.reconnect)return void(null != ge && p());
                    try {
                        ge = new EventSource(t, {withCredentials: pe.withCredentials})
                    } catch (i) {
                        return N(0, i), void q("SSE failed. Downgrading to fallback transport and resending")
                    }
                    pe.connectTimeout > 0 && (pe.id = setTimeout(function () {
                        e || p()
                    }, pe.connectTimeout)), ge.onopen = function (t) {
                        E(pe), l("debug") && n.util.debug("SSE successfully opened"), pe.enableProtocol ? pe.isReopen && (pe.isReopen = !1, x("re-opening", pe.transport, pe)) : e ? x("re-opening", "sse", pe) : x("opening", "sse", pe), e = !0, "POST" === pe.method && (he.state = "messageReceived", ge.send(pe.data))
                    }, ge.onmessage = function (e) {
                        if (E(pe), !pe.enableXDR && e.origin && e.origin !== window.location.protocol + "//" + window.location.host)return void n.util.log(pe.logLevel, ["Origin was not " + window.location.protocol + "//" + window.location.host]);
                        he.state = "messageReceived", he.status = 200, e = e.data;
                        var t = I(e, pe, he);
                        t || (le(), he.responseBody = "", he.messages = [])
                    }, ge.onerror = function (t) {
                        clearTimeout(pe.id), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer), he.closedByClientTimeout || (ce(e), p(), Ce ? n.util.log(pe.logLevel, ["SSE closed normally"]) : e ? pe.reconnect && "sse" === he.transport && (xe++ < pe.maxReconnectOnClose ? (x("re-connecting", pe.transport, pe), pe.reconnectInterval > 0 ? pe.reconnectId = setTimeout(function () {
                            T(!0)
                        }, pe.reconnectInterval) : T(!0), he.responseBody = "", he.messages = []) : (n.util.log(pe.logLevel, ["SSE reconnect maximum try reached " + xe]), N(0, "maxReconnectOnClose reached"))) : q("SSE failed. Downgrading to fallback transport and resending"))
                    }
                }

                function S(e) {
                    he.transport = "websocket";
                    var t = C(pe.url);
                    if (l("debug") && (n.util.debug("Invoking executeWebSocket"), n.util.debug("Using URL: " + t)), e && !pe.reconnect)return void(null != fe && p());
                    fe = k(t), null != pe.webSocketBinaryType && (fe.binaryType = pe.webSocketBinaryType), pe.connectTimeout > 0 && (pe.id = setTimeout(function () {
                        if (e); else {
                            var t = {code: 1002, reason: "", wasClean: !1};
                            fe.onclose(t);
                            try {
                                p()
                            } catch (n) {
                            }
                        }
                    }, pe.connectTimeout)), fe.onopen = function (t) {
                        E(pe), i = !1, l("debug") && n.util.debug("Websocket successfully opened");
                        var o = e;
                        null != fe && (fe.canSendMessage = !0), pe.enableProtocol || (e = !0, o ? x("re-opening", "websocket", pe) : x("opening", "websocket", pe)), null != fe && "POST" === pe.method && (he.state = "messageReceived", fe.send(pe.data))
                    }, fe.onmessage = function (t) {
                        E(pe), pe.enableProtocol && (e = !0), he.state = "messageReceived", he.status = 200, t = t.data;
                        var n = "string" == typeof t;
                        if (n) {
                            var i = I(t, pe, he);
                            i || (le(), he.responseBody = "", he.messages = [])
                        } else {
                            if (t = j(pe, t), "" === t)return;
                            he.responseBody = t, le(), he.responseBody = null
                        }
                    }, fe.onerror = function (e) {
                        clearTimeout(pe.id), pe.heartbeatTimer && clearTimeout(pe.heartbeatTimer)
                    }, fe.onclose = function (t) {
                        if (clearTimeout(pe.id), "closed" !== he.state) {
                            var o = t.reason;
                            if ("" === o)switch (t.code) {
                                case 1e3:
                                    o = "Normal closure; the connection successfully completed whatever purpose for which it was created.";
                                    break;
                                case 1001:
                                    o = "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.";
                                    break;
                                case 1002:
                                    o = "The endpoint is terminating the connection due to a protocol error.";
                                    break;
                                case 1003:
                                    o = "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).";
                                    break;
                                case 1004:
                                    o = "The endpoint is terminating the connection because a data frame was received that is too large.";
                                    break;
                                case 1005:
                                    o = "Unknown: no status code was provided even though one was expected.";
                                    break;
                                case 1006:
                                    o = "Connection was closed abnormally (that is, with no close frame being sent)."
                            }
                            if (l("warn") && (n.util.warn("Websocket closed, reason: " + o), n.util.warn("Websocket closed, wasClean: " + t.wasClean)), he.closedByClientTimeout || i)return void(pe.reconnectId && (clearTimeout(pe.reconnectId), delete pe.reconnectId));
                            ce(e), he.state = "closed", Ce ? n.util.log(pe.logLevel, ["Websocket closed normally"]) : e ? pe.reconnect && "websocket" === he.transport && 1001 !== t.code && (p(), xe++ < pe.maxReconnectOnClose ? (x("re-connecting", pe.transport, pe), pe.reconnectInterval > 0 ? pe.reconnectId = setTimeout(function () {
                                he.responseBody = "", he.messages = [], S(!0)
                            }, pe.reconnectInterval) : (he.responseBody = "", he.messages = [], S(!0))) : (n.util.log(pe.logLevel, ["Websocket reconnect maximum try reached " + pe.requestCount]), l("warn") && n.util.warn("Websocket error, reason: " + t.reason), N(0, "maxReconnectOnClose reached"))) : q("Websocket failed. Downgrading to Comet and resending")
                        }
                    };
                    var o = navigator.userAgent.toLowerCase(), r = o.indexOf("android") > -1;
                    r && void 0 === fe.url && fe.onclose({
                        reason: "Android 4.1 does not support websockets.",
                        wasClean: !1
                    })
                }

                function j(e, t) {
                    var i = t;
                    if ("polling" === e.transport)return i;
                    if (0 !== n.util.trim(t).length && e.enableProtocol && e.firstMessage) {
                        var o = e.trackMessageLength ? 1 : 0, r = t.split(e.messageDelimiter);
                        if (r.length <= o + 1)return i;
                        if (e.firstMessage = !1, e.uuid = n.util.trim(r[o]), r.length <= o + 2 && n.util.log("error", ["Protocol data not sent by the server. If you enable protocol on client side, be sure to install JavascriptProtocol interceptor on server side.Also note that atmosphere-runtime 2.2+ should be used."]), _e = parseInt(n.util.trim(r[o + 1]), 10), ke = r[o + 2], "long-polling" !== e.transport && M(e), a = e.uuid, i = "", o = e.trackMessageLength ? 4 : 3, r.length > o + 1)for (var s = o; s < r.length; s++)i += r[s], s + 1 !== r.length && (i += e.messageDelimiter);
                        0 !== e.ackInterval && setTimeout(function () {
                            W("...ACK...")
                        }, e.ackInterval)
                    } else e.enableProtocol && e.firstMessage && n.util.browser.msie && +n.util.browser.version.split(".")[0] < 10 ? n.util.log(pe.logLevel, ["Receiving unexpected data from IE"]) : M(e);
                    return i
                }

                function E(e) {
                    clearTimeout(e.id), e.timeout > 0 && "polling" !== e.transport && (e.id = setTimeout(function () {
                        z(e), u(), p()
                    }, e.timeout))
                }

                function z(e) {
                    he.closedByClientTimeout = !0, he.state = "closedByClient", he.responseBody = "", he.status = 408, he.messages = [], le()
                }

                function N(e, t) {
                    p(), clearTimeout(pe.id), he.state = "error", he.reasonPhrase = t, he.responseBody = "", he.status = e, he.messages = [], le()
                }

                function I(e, t, n) {
                    if (e = j(t, e), 0 === e.length)return !0;
                    if (n.responseBody = e, t.trackMessageLength) {
                        e = n.partialMessage + e;
                        var i = [], o = e.indexOf(t.messageDelimiter);
                        if (-1 != o) {
                            for (; -1 !== o;) {
                                var r = e.substring(0, o), a = +r;
                                if (isNaN(a))throw new Error('message length "' + r + '" is not a number');
                                o += t.messageDelimiter.length, o + a > e.length ? o = -1 : (i.push(e.substring(o, o + a)), e = e.substring(o + a, e.length), o = e.indexOf(t.messageDelimiter))
                            }
                            return n.partialMessage = e, 0 !== i.length ? (n.responseBody = i.join(t.messageDelimiter), n.messages = i, !1) : (n.responseBody = "", n.messages = [], !0)
                        }
                    }
                    return n.responseBody = e, n.messages = [e], !1
                }

                function q(e) {
                    n.util.log(pe.logLevel, [e]), "undefined" != typeof pe.onTransportFailure ? pe.onTransportFailure(e, pe) : "undefined" != typeof n.util.onTransportFailure && n.util.onTransportFailure(e, pe), pe.transport = pe.fallbackTransport;
                    var t = -1 === pe.connectTimeout ? 0 : pe.connectTimeout;
                    pe.reconnect && "none" !== pe.transport || null == pe.transport ? (pe.method = pe.fallbackMethod, he.transport = pe.fallbackTransport, pe.fallbackTransport = "none", t > 0 ? pe.reconnectId = setTimeout(function () {
                        b()
                    }, t) : b()) : N(500, "Unable to reconnect with fallback transport")
                }

                function P(e, i) {
                    var o = pe;
                    return null != e && "undefined" != typeof e && (o = e), null == i && (i = o.url), o.attachHeadersAsQueryString ? -1 !== i.indexOf("X-Atmosphere-Framework") ? i : (i += -1 !== i.indexOf("?") ? "&" : "?", i += "X-Atmosphere-tracking-id=" + o.uuid, i += "&X-Atmosphere-Framework=" + t, i += "&X-Atmosphere-Transport=" + o.transport, o.trackMessageLength && (i += "&X-Atmosphere-TrackMessageSize=true"), null !== o.heartbeat && null !== o.heartbeat.server && (i += "&X-Heartbeat-Server=" + o.heartbeat.server), "" !== o.contentType && (i += "&Content-Type=" + ("websocket" === o.transport ? o.contentType : encodeURIComponent(o.contentType))), o.enableProtocol && (i += "&X-atmo-protocol=true"), n.util.each(o.headers, function (t, r) {
                        var a = n.util.isFunction(r) ? r.call(this, o, e, he) : r;
                        null != a && (i += "&" + encodeURIComponent(t) + "=" + encodeURIComponent(a))
                    }), i) : i
                }

                function M(e) {
                    if (e.isOpen)if (e.isReopen)e.isReopen = !1, x("re-opening", e.transport, e); else {
                        if ("messageReceived" !== he.state || "jsonp" !== e.transport && "long-polling" !== e.transport)return;
                        V(he)
                    } else e.isOpen = !0, x("opening", e.transport, e);
                    L(e)
                }

                function L(e) {
                    if (null != e.heartbeatTimer && clearTimeout(e.heartbeatTimer), !isNaN(_e) && _e > 0) {
                        var t = function () {
                            l("debug") && n.util.debug("Sending heartbeat"), W(ke), e.heartbeatTimer = setTimeout(t, _e)
                        };
                        e.heartbeatTimer = setTimeout(t, _e)
                    }
                }

                function R(e) {
                    var t = pe;
                    if (null == e && "undefined" == typeof e || (t = e), t.lastIndex = 0, t.readyState = 0, "jsonp" === t.transport || t.enableXDR && n.util.checkCORSSupport())return void _(t);
                    if (n.util.browser.msie && +n.util.browser.version.split(".")[0] < 10) {
                        if ("streaming" === t.transport)return void(t.enableXDR && window.XDomainRequest ? D(t) : F(t));
                        if (t.enableXDR && window.XDomainRequest)return void D(t)
                    }
                    var i = function () {
                        t.lastIndex = 0, t.reconnect && xe++ < t.maxReconnectOnClose ? (he.ffTryingReconnect = !0, x("re-connecting", e.transport, e), O(r, t, e.reconnectInterval)) : N(0, "maxReconnectOnClose reached")
                    }, o = function () {
                        he.errorHandled = !0, p(), i()
                    };
                    if (t.force || t.reconnect && (-1 === t.maxRequest || t.requestCount++ < t.maxRequest)) {
                        t.force = !1;
                        var r = n.util.xhr();
                        r.hasData = !1, H(r, t, !0), t.suspend && (ve = r), "polling" !== t.transport && (he.transport = t.transport, r.onabort = function () {
                            ce(!0)
                        }, r.onerror = function () {
                            he.error = !0, he.ffTryingReconnect = !0;
                            try {
                                he.status = XMLHttpRequest.status
                            } catch (e) {
                                he.status = 500
                            }
                            he.status || (he.status = 500), he.errorHandled || (p(), i())
                        }), r.onreadystatechange = function () {
                            if (!Ce) {
                                he.error = null;
                                var a = !1, s = !1;
                                if ("streaming" === t.transport && t.readyState > 2 && 4 === r.readyState)return p(), void i();
                                if (t.readyState = r.readyState, "streaming" === t.transport && r.readyState >= 3 ? s = !0 : "long-polling" === t.transport && 4 === r.readyState && (s = !0), E(pe), "polling" !== t.transport) {
                                    var c = 200;
                                    if (4 === r.readyState && (c = r.status > 1e3 ? 0 : r.status), !t.reconnectOnServerError && c >= 300 && 600 > c)return void N(c, r.statusText);
                                    if (c >= 300 || 0 === c)return void o();
                                    t.enableProtocol && e.firstMessage || 2 !== r.readyState || (n.util.browser.mozilla && he.ffTryingReconnect ? (he.ffTryingReconnect = !1, setTimeout(function () {
                                        he.ffTryingReconnect || M(t)
                                    }, 500)) : M(t))
                                } else 4 === r.readyState && (s = !0);
                                if (s) {
                                    var l = r.responseText;
                                    if (he.errorHandled = !1, 0 === n.util.trim(l).length && "long-polling" === t.transport)return void(r.hasData ? r.hasData = !1 : O(r, t, t.pollingInterval));
                                    if (r.hasData = !0, re(r, pe), "streaming" === t.transport)if (n.util.browser.opera)n.util.iterate(function () {
                                        if (500 !== he.status && r.responseText.length > t.lastIndex) {
                                            try {
                                                he.status = r.status, he.headers = n.util.parseHeaders(r.getAllResponseHeaders()), re(r, pe)
                                            } catch (e) {
                                                he.status = 404
                                            }
                                            E(pe), he.state = "messageReceived";
                                            var i = r.responseText.substring(t.lastIndex);
                                            if (t.lastIndex = r.responseText.length, a = I(i, t, he), a || le(), m(r, t))return void U(r, t)
                                        } else if (he.status > 400)return t.lastIndex = r.responseText.length, !1
                                    }, 0); else {
                                        var u = l.substring(t.lastIndex, l.length);
                                        if (a = I(u, t, he), t.lastIndex = l.length, a)return
                                    } else a = I(l, t, he);
                                    var d = m(r, t);
                                    try {
                                        he.status = r.status, he.headers = n.util.parseHeaders(r.getAllResponseHeaders()), re(r, t)
                                    } catch (h) {
                                        he.status = 404
                                    }
                                    t.suspend ? he.state = 0 === he.status ? "closed" : "messageReceived" : he.state = "messagePublished";
                                    var f = !d && "streaming" !== e.transport && "polling" !== e.transport;
                                    f && !t.executeCallbackBeforeReconnect && O(r, t, t.pollingInterval), 0 === he.responseBody.length || a || le(), f && t.executeCallbackBeforeReconnect && O(r, t, t.pollingInterval), d && U(r, t)
                                }
                            }
                        };
                        try {
                            r.send(t.data), we = !0
                        } catch (a) {
                            n.util.log(t.logLevel, ["Unable to connect to " + t.url]), N(0, a)
                        }
                    } else"debug" === t.logLevel && n.util.log(t.logLevel, ["Max re-connection reached."]), N(0, "maxRequest reached")
                }

                function U(e, t) {
                    he.messages = [], t.isReopen = !0, d(), Ce = !1, O(e, t, 500)
                }

                function H(e, t, i) {
                    var o = t.url;
                    null != t.dispatchUrl && "POST" === t.method && (o += t.dispatchUrl), o = P(t, o), o = n.util.prepareURL(o), i && (e.open(t.method, o, t.async), t.connectTimeout > 0 && (t.id = setTimeout(function () {
                        0 === t.requestCount && (p(), oe("Connect timeout", "closed", 200, t.transport))
                    }, t.connectTimeout))), pe.withCredentials && "websocket" !== pe.transport && "withCredentials" in e && (e.withCredentials = !0), pe.dropHeaders || (e.setRequestHeader("X-Atmosphere-Framework", n.util.version), e.setRequestHeader("X-Atmosphere-Transport", t.transport), null !== t.heartbeat && null !== t.heartbeat.server && e.setRequestHeader("X-Heartbeat-Server", e.heartbeat.server), t.trackMessageLength && e.setRequestHeader("X-Atmosphere-TrackMessageSize", "true"), e.setRequestHeader("X-Atmosphere-tracking-id", t.uuid), n.util.each(t.headers, function (o, r) {
                        var a = n.util.isFunction(r) ? r.call(this, e, t, i, he) : r;
                        null != a && e.setRequestHeader(o, a)
                    })), "" !== t.contentType && e.setRequestHeader("Content-Type", t.contentType)
                }

                function O(e, t, n) {
                    if (!he.closedByClientTimeout && (t.reconnect || t.suspend && we)) {
                        var i = 0;
                        e && e.readyState > 1 && (i = e.status > 1e3 ? 0 : e.status), he.status = 0 === i ? 204 : i, he.reason = 0 === i ? "Server resumed the connection or down." : "OK", clearTimeout(t.id), t.reconnectId && (clearTimeout(t.reconnectId), delete t.reconnectId), n > 0 ? pe.reconnectId = setTimeout(function () {
                            R(t)
                        }, n) : R(t)
                    }
                }

                function $(e) {
                    e.state = "re-connecting", ae(e)
                }

                function V(e) {
                    e.state = "openAfterResume", ae(e), e.state = "messageReceived"
                }

                function D(e) {
                    "polling" !== e.transport ? (be = B(e), be.open()) : B(e).open()
                }

                function B(e) {
                    var t = pe;
                    null != e && "undefined" != typeof e && (t = e);
                    var i = t.transport, o = 0, r = new window.XDomainRequest, a = function () {
                        "long-polling" === t.transport && t.reconnect && (-1 === t.maxRequest || t.requestCount++ < t.maxRequest) && (r.status = 200, D(t))
                    }, s = t.rewriteURL || function (e) {
                            var t = /(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);
                            switch (t && t[1]) {
                                case"JSESSIONID":
                                    return e.replace(/;jsessionid=[^\?]*|(\?)|$/, ";jsessionid=" + t[2] + "$1");
                                case"PHPSESSID":
                                    return e.replace(/\?PHPSESSID=[^&]*&?|\?|$/, "?PHPSESSID=" + t[2] + "&").replace(/&$/, "")
                            }
                            return e
                        };
                    r.onprogress = function () {
                        c(r)
                    }, r.onerror = function () {
                        "polling" !== t.transport && (p(), xe++ < t.maxReconnectOnClose ? t.reconnectInterval > 0 ? t.reconnectId = setTimeout(function () {
                            x("re-connecting", e.transport, e), D(t)
                        }, t.reconnectInterval) : (x("re-connecting", e.transport, e), D(t)) : N(0, "maxReconnectOnClose reached"))
                    }, r.onload = function () {
                    };
                    var c = function (e) {
                        clearTimeout(t.id);
                        var r = e.responseText;
                        if (r = r.substring(o), o += r.length, "polling" !== i) {
                            E(t);
                            var s = I(r, t, he);
                            if ("long-polling" === i && 0 === n.util.trim(r).length)return;
                            t.executeCallbackBeforeReconnect && a(), s || oe(he.responseBody, "messageReceived", 200, i), t.executeCallbackBeforeReconnect || a()
                        }
                    };
                    return {
                        open: function () {
                            var e = t.url;
                            null != t.dispatchUrl && (e += t.dispatchUrl),
                                e = P(t, e), r.open(t.method, s(e)), "GET" === t.method ? r.send() : r.send(t.data), t.connectTimeout > 0 && (t.id = setTimeout(function () {
                                0 === t.requestCount && (p(), oe("Connect timeout", "closed", 200, t.transport))
                            }, t.connectTimeout))
                        }, close: function () {
                            r.abort()
                        }
                    }
                }

                function F(e) {
                    be = X(e), be.open()
                }

                function X(e) {
                    var t = pe;
                    null != e && "undefined" != typeof e && (t = e);
                    var i, o = new window.ActiveXObject("htmlfile");
                    o.open(), o.close();
                    var r = t.url;
                    return null != t.dispatchUrl && (r += t.dispatchUrl), "polling" !== t.transport && (he.transport = t.transport), {
                        open: function () {
                            var e = o.createElement("iframe");
                            r = P(t), "" !== t.data && (r += "&X-Atmosphere-Post-Body=" + encodeURIComponent(t.data)), r = n.util.prepareURL(r), e.src = r, o.body.appendChild(e);
                            var a = e.contentDocument || e.contentWindow.document;
                            i = n.util.iterate(function () {
                                try {
                                    if (!a.firstChild)return;
                                    var e = a.body ? a.body.lastChild : a, r = function () {
                                        var t = e.cloneNode(!0);
                                        t.appendChild(a.createTextNode("."));
                                        var n = t.innerText;
                                        return n = n.substring(0, n.length - 1)
                                    };
                                    if (!a.body || !a.body.firstChild || "pre" !== a.body.firstChild.nodeName.toLowerCase()) {
                                        var s = a.head || a.getElementsByTagName("head")[0] || a.documentElement || a, c = a.createElement("script");
                                        c.text = "document.write('<plaintext>')", s.insertBefore(c, s.firstChild), s.removeChild(c), e = a.body.lastChild
                                    }
                                    return t.closed && (t.isReopen = !0), i = n.util.iterate(function () {
                                        var n = r();
                                        if (n.length > t.lastIndex) {
                                            E(pe), he.status = 200, he.error = null, e.innerText = "";
                                            var i = I(n, t, he);
                                            if (i)return "";
                                            oe(he.responseBody, "messageReceived", 200, t.transport)
                                        }
                                        return t.lastIndex = 0, "complete" === a.readyState ? (ce(!0), x("re-connecting", t.transport, t), t.reconnectInterval > 0 ? t.reconnectId = setTimeout(function () {
                                            F(t)
                                        }, t.reconnectInterval) : F(t), !1) : void 0
                                    }, null), !1
                                } catch (l) {
                                    return he.error = !0, x("re-connecting", t.transport, t), xe++ < t.maxReconnectOnClose ? t.reconnectInterval > 0 ? t.reconnectId = setTimeout(function () {
                                        F(t)
                                    }, t.reconnectInterval) : F(t) : N(0, "maxReconnectOnClose reached"), o.execCommand("Stop"), o.close(), !1
                                }
                            })
                        }, close: function () {
                            i && i(), o.execCommand("Stop"), ce(!0)
                        }
                    }
                }

                function W(e) {
                    null != Te ? J(e) : null != ve || null != ge ? Z(e) : null != be ? Q(e) : null != ye ? Y(e) : null != fe ? ne(e) : (N(0, "No suspended connection available"), n.util.error("No suspended connection available. Make sure atmosphere.subscribe has been called and request.onOpen invoked before invoking this method"))
                }

                function K(e, t) {
                    t || (t = te(e)), t.transport = "polling", t.method = "GET", t.withCredentials = !1, t.reconnect = !1, t.force = !0, t.suspend = !1, t.timeout = 1e3, R(t)
                }

                function J(e) {
                    Te.send(e)
                }

                function G(e) {
                    if (0 !== e.length)try {
                        Te ? Te.localSend(e) : me && me.signal("localMessage", n.util.stringifyJSON({id: Se, event: e}))
                    } catch (t) {
                        n.util.error(t)
                    }
                }

                function Z(e) {
                    var t = te(e);
                    R(t)
                }

                function Q(e) {
                    if (pe.enableXDR && n.util.checkCORSSupport()) {
                        var t = te(e);
                        t.reconnect = !1, _(t)
                    } else Z(e)
                }

                function Y(e) {
                    var t = te(e);
                    t.reconnect = !1, _(t)
                }

                function ee(e) {
                    var t = e;
                    return "object" == typeof t && (t = e.data), t
                }

                function te(e) {
                    var t = ee(e), i = {
                        connected: !1,
                        timeout: 6e4,
                        method: "POST",
                        url: pe.url,
                        contentType: pe.contentType,
                        headers: pe.headers,
                        reconnect: !0,
                        callback: null,
                        data: t,
                        suspend: !1,
                        maxRequest: -1,
                        logLevel: "info",
                        requestCount: 0,
                        withCredentials: pe.withCredentials,
                        async: pe.async,
                        transport: "polling",
                        isOpen: !0,
                        attachHeadersAsQueryString: !0,
                        enableXDR: pe.enableXDR,
                        uuid: pe.uuid,
                        dispatchUrl: pe.dispatchUrl,
                        enableProtocol: !1,
                        messageDelimiter: "|",
                        trackMessageLength: pe.trackMessageLength,
                        maxReconnectOnClose: pe.maxReconnectOnClose,
                        heartbeatTimer: pe.heartbeatTimer,
                        heartbeat: pe.heartbeat
                    };
                    return "object" == typeof e && (i = n.util.extend(i, e)), i
                }

                function ne(e) {
                    var t, i = n.util.isBinary(e) ? e : ee(e);
                    try {
                        if (t = null != pe.dispatchUrl ? pe.webSocketPathDelimiter + pe.dispatchUrl + pe.webSocketPathDelimiter + i : i, !fe.canSendMessage)return void n.util.error("WebSocket not connected.");
                        fe.send(t)
                    } catch (o) {
                        fe.onclose = function (e) {
                        }, p(), q("Websocket failed. Downgrading to Comet and resending " + e), Z(e)
                    }
                }

                function ie(e) {
                    var t = n.util.parseJSON(e);
                    t.id !== Se && ("undefined" != typeof pe.onLocalMessage ? pe.onLocalMessage(t.event) : "undefined" != typeof n.util.onLocalMessage && n.util.onLocalMessage(t.event))
                }

                function oe(e, t, n, i) {
                    he.responseBody = e, he.transport = i, he.status = n, he.state = t, le()
                }

                function re(e, t) {
                    if (t.readResponsesHeaders)try {
                        var n = e.getResponseHeader("X-Atmosphere-tracking-id");
                        n && null != n && (t.uuid = n.split(" ").pop())
                    } catch (i) {
                    } else t.enableProtocol || (t.uuid = Se)
                }

                function ae(e) {
                    se(e, pe), se(e, n.util)
                }

                function se(e, t) {
                    switch (e.state) {
                        case"messageReceived":
                            xe = 0, "undefined" != typeof t.onMessage && t.onMessage(e), "undefined" != typeof t.onmessage && t.onmessage(e);
                            break;
                        case"error":
                            "undefined" != typeof t.onError && t.onError(e), "undefined" != typeof t.onerror && t.onerror(e);
                            break;
                        case"opening":
                            delete pe.closed, "undefined" != typeof t.onOpen && t.onOpen(e), "undefined" != typeof t.onopen && t.onopen(e);
                            break;
                        case"messagePublished":
                            "undefined" != typeof t.onMessagePublished && t.onMessagePublished(e);
                            break;
                        case"re-connecting":
                            "undefined" != typeof t.onReconnect && t.onReconnect(pe, e);
                            break;
                        case"closedByClient":
                            "undefined" != typeof t.onClientTimeout && t.onClientTimeout(pe);
                            break;
                        case"re-opening":
                            delete pe.closed, "undefined" != typeof t.onReopen && t.onReopen(pe, e);
                            break;
                        case"fail-to-reconnect":
                            "undefined" != typeof t.onFailureToReconnect && t.onFailureToReconnect(pe, e);
                            break;
                        case"unsubscribe":
                        case"closed":
                            var n = "undefined" != typeof pe.closed ? pe.closed : !1;
                            n || ("undefined" != typeof t.onClose && t.onClose(e), "undefined" != typeof t.onclose && t.onclose(e)), pe.closed = !0;
                            break;
                        case"openAfterResume":
                            "undefined" != typeof t.onOpenAfterResume && t.onOpenAfterResume(pe)
                    }
                }

                function ce(e) {
                    "closed" !== he.state && (he.state = "closed", he.responseBody = "", he.messages = [], he.status = e ? 200 : 501, le())
                }

                function le() {
                    var e = function (e, t) {
                        t(he)
                    };
                    null == Te && null != Ae && Ae(he.responseBody), pe.reconnect = pe.mrequest;
                    for (var t = "string" == typeof he.responseBody, i = t && pe.trackMessageLength ? he.messages.length > 0 ? he.messages : [""] : new Array(he.responseBody), o = 0; o < i.length; o++)if (!(i.length > 1 && 0 === i[o].length || (he.responseBody = t ? n.util.trim(i[o]) : i[o], null == Te && null != Ae && Ae(he.responseBody), (0 === he.responseBody.length || t && ke === he.responseBody) && "messageReceived" === he.state))) {
                        if (ae(he), r.length > 0) {
                            l("debug") && n.util.debug("Invoking " + r.length + " global callbacks: " + he.state);
                            try {
                                n.util.each(r, e)
                            } catch (a) {
                                n.util.log(pe.logLevel, ["Callback exception" + a])
                            }
                        }
                        if ("function" == typeof pe.callback) {
                            l("debug") && n.util.debug("Invoking request callbacks");
                            try {
                                pe.callback(he)
                            } catch (a) {
                                n.util.log(pe.logLevel, ["Callback exception" + a])
                            }
                        }
                    }
                }

                var me, ue, de, pe = {
                    timeout: 3e5,
                    method: "GET",
                    headers: {},
                    contentType: "",
                    callback: null,
                    url: "",
                    data: "",
                    suspend: !0,
                    maxRequest: -1,
                    reconnect: !0,
                    maxStreamingLength: 1e7,
                    lastIndex: 0,
                    logLevel: "info",
                    requestCount: 0,
                    fallbackMethod: "GET",
                    fallbackTransport: "streaming",
                    transport: "long-polling",
                    webSocketImpl: null,
                    webSocketBinaryType: null,
                    dispatchUrl: null,
                    webSocketPathDelimiter: "@@",
                    enableXDR: !1,
                    rewriteURL: !1,
                    attachHeadersAsQueryString: !0,
                    executeCallbackBeforeReconnect: !1,
                    readyState: 0,
                    withCredentials: !1,
                    trackMessageLength: !1,
                    messageDelimiter: "|",
                    connectTimeout: -1,
                    reconnectInterval: 0,
                    dropHeaders: !0,
                    uuid: 0,
                    async: !0,
                    shared: !1,
                    readResponsesHeaders: !1,
                    maxReconnectOnClose: 5,
                    enableProtocol: !0,
                    pollingInterval: 0,
                    heartbeat: {client: null, server: null},
                    ackInterval: 0,
                    closeAsync: !1,
                    reconnectOnServerError: !0,
                    environment: "production",
                    onError: function (e) {
                    },
                    onClose: function (e) {
                    },
                    onOpen: function (e) {
                    },
                    onMessage: function (e) {
                    },
                    onReopen: function (e, t) {
                    },
                    onReconnect: function (e, t) {
                    },
                    onMessagePublished: function (e) {
                    },
                    onTransportFailure: function (e, t) {
                    },
                    onLocalMessage: function (e) {
                    },
                    onFailureToReconnect: function (e, t) {
                    },
                    onClientTimeout: function (e) {
                    },
                    onOpenAfterResume: function (e) {
                    }
                }, he = {
                    status: 200,
                    reasonPhrase: "OK",
                    responseBody: "",
                    messages: [],
                    headers: [],
                    state: "messageReceived",
                    transport: "polling",
                    error: null,
                    request: null,
                    partialMessage: "",
                    errorHandled: !1,
                    closedByClientTimeout: !1,
                    ffTryingReconnect: !1
                }, fe = null, ge = null, ve = null, be = null, ye = null, we = !0, xe = 0, _e = 0, ke = " ", Ce = !1, Ae = null, Te = null, Se = n.util.random();
                f(e), this.subscribe = function (e) {
                    f(e), b()
                }, this.execute = function () {
                    b()
                }, this.close = function () {
                    d()
                }, this.disconnect = function () {
                    u()
                }, this.getUrl = function () {
                    return pe.url
                }, this.push = function (e, t) {
                    if (null != t) {
                        var n = pe.dispatchUrl;
                        pe.dispatchUrl = t, W(e), pe.dispatchUrl = n
                    } else W(e)
                }, this.getUUID = function () {
                    return pe.uuid
                }, this.pushLocal = function (e) {
                    G(e)
                }, this.enableProtocol = function (e) {
                    return pe.enableProtocol
                }, this.init = function () {
                    o()
                }, this.request = pe, this.response = he
            }
        }, n.subscribe = function (e, t, i) {
            "function" == typeof t && n.addCallback(t), "string" != typeof e ? i = e : i.url = e, a = "undefined" != typeof i && "undefined" != typeof i.uuid ? i.uuid : 0;
            var r = new n.AtmosphereRequest(i);
            return r.execute(), o[o.length] = r, r
        }, n.unsubscribe = function () {
            if (o.length > 0)for (var e = [].concat(o), t = 0; t < e.length; t++) {
                var n = e[t];
                n.request.isOpen && n.close(), n.response && n.response.request && clearTimeout(n.response.request.id), n.heartbeatTimer && clearTimeout(n.heartbeatTimer)
            }
            o = [], r = []
        }, n.unsubscribeUrl = function (e) {
            var t = -1;
            if (o.length > 0)for (var n = 0; n < o.length; n++) {
                var i = o[n];
                if (i.getUrl() === e) {
                    i.close(), clearTimeout(i.response.request.id), i.heartbeatTimer && clearTimeout(i.heartbeatTimer), t = n;
                    break
                }
            }
            t >= 0 && o.splice(t, 1)
        }, n.addCallback = function (e) {
            -1 === n.util.inArray(e, r) && r.push(e)
        }, n.removeCallback = function (e) {
            var t = n.util.inArray(e, r);
            -1 !== t && r.splice(t, 1)
        }, n.util = {
            browser: {}, parseHeaders: function (e) {
                for (var t, n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, i = {}; t = n.exec(e);)i[t[1]] = t[2];
                return i
            }, now: function () {
                return (new Date).getTime()
            }, random: function () {
                return Math.floor(1e8 + 9e8 * Math.random())
            }, isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, inArray: function (e, t) {
                if (!Array.prototype.indexOf) {
                    for (var n = t.length, i = 0; n > i; ++i)if (t[i] === e)return i;
                    return -1
                }
                return t.indexOf(e)
            }, isBinary: function (e) {
                return /^\[object\s(?:Blob|ArrayBuffer|.+Array)\]$/.test(Object.prototype.toString.call(e))
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, getAbsoluteURL: function (e) {
                var t = document.createElement("div");
                return t.innerHTML = '<a href="' + e + '"/>', encodeURI(decodeURI(t.firstChild.href))
            }, prepareURL: function (e) {
                var t = n.util.now(), i = e.replace(/([?&])_=[^&]*/, "$1_=" + t);
                return i + (i === e ? (/\?/.test(e) ? "&" : "?") + "_=" + t : "")
            }, trim: function (e) {
                return String.prototype.trim ? e.toString().trim() : e.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
            }, param: function (e) {
                function t(e, t) {
                    t = n.util.isFunction(t) ? t() : null == t ? "" : t, r.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                }

                function i(e, o) {
                    var r;
                    if (n.util.isArray(o))n.util.each(o, function (n, o) {
                        /\[\]$/.test(e) ? t(e, o) : i(e + "[" + ("object" == typeof o ? n : "") + "]", o)
                    }); else if ("[object Object]" === Object.prototype.toString.call(o))for (r in o)i(e + "[" + r + "]", o[r]); else t(e, o)
                }

                var o, r = [];
                for (o in e)i(o, e[o]);
                return r.join("&").replace(/%20/g, "+")
            }, storage: function () {
                try {
                    return !(!window.localStorage || !window.StorageEvent)
                } catch (e) {
                    return !1
                }
            }, iterate: function (e, t) {
                var n;
                return t = t || 0, function i() {
                    n = setTimeout(function () {
                        e() !== !1 && i()
                    }, t)
                }(), function () {
                    clearTimeout(n)
                }
            }, each: function (e, t, i) {
                if (e) {
                    var o, r = 0, a = e.length, s = n.util.isArray(e);
                    if (i) {
                        if (s)for (; a > r && (o = t.apply(e[r], i), o !== !1); r++); else for (r in e)if (o = t.apply(e[r], i), o === !1)break
                    } else if (s)for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++); else for (r in e)if (o = t.call(e[r], r, e[r]), o === !1)break;
                    return e
                }
            }, extend: function (e) {
                var t, n, i;
                for (t = 1; t < arguments.length; t++)if (null != (n = arguments[t]))for (i in n)e[i] = n[i];
                return e
            }, on: function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }, off: function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }, log: function (e, t) {
                if (window.console) {
                    var n = window.console[e];
                    "function" == typeof n && "production" !== s && n.apply(window.console, t)
                }
            }, warn: function () {
                n.util.log("warn", arguments)
            }, info: function () {
                n.util.log("info", arguments)
            }, debug: function () {
                n.util.log("debug", arguments)
            }, error: function () {
                n.util.log("error", arguments)
            }, xhr: function () {
                try {
                    return new window.XMLHttpRequest
                } catch (e) {
                    try {
                        return new window.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (t) {
                    }
                }
            }, parseJSON: function (e) {
                return e ? window.JSON && window.JSON.parse ? window.JSON.parse(e) : new Function("return " + e)() : null
            }, stringifyJSON: function (e) {
                function t(e) {
                    return '"' + e.replace(i, function (e) {
                            var t = o[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"'
                }

                function n(e) {
                    return 10 > e ? "0" + e : e
                }

                var i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                };
                return window.JSON && window.JSON.stringify ? window.JSON.stringify(e) : function r(e, i) {
                    var o, a, s, l, m = i[e], u = typeof m;
                    switch (m && "object" == typeof m && "function" == typeof m.toJSON && (m = m.toJSON(e), u = typeof m), u) {
                        case"string":
                            return t(m);
                        case"number":
                            return isFinite(m) ? String(m) : "null";
                        case"boolean":
                            return String(m);
                        case"object":
                            if (!m)return "null";
                            switch (Object.prototype.toString.call(m)) {
                                case"[object Date]":
                                    return isFinite(m.valueOf()) ? '"' + m.getUTCFullYear() + "-" + n(m.getUTCMonth() + 1) + "-" + n(m.getUTCDate()) + "T" + n(m.getUTCHours()) + ":" + n(m.getUTCMinutes()) + ":" + n(m.getUTCSeconds()) + 'Z"' : "null";
                                case"[object Array]":
                                    for (s = m.length, l = [], o = 0; s > o; o++)l.push(r(o, m) || "null");
                                    return "[" + l.join(",") + "]";
                                default:
                                    l = [];
                                    for (o in m)c.call(m, o) && (a = r(o, m), a && l.push(t(o) + ":" + a));
                                    return "{" + l.join(",") + "}"
                            }
                    }
                }("", {"": e})
            }, checkCORSSupport: function () {
                if (n.util.browser.msie && !window.XDomainRequest && +n.util.browser.version.split(".")[0] < 11)return !0;
                if (n.util.browser.opera && +n.util.browser.version.split(".") < 12)return !0;
                if ("KreaTVWebKit/531" === n.util.trim(navigator.userAgent).slice(0, 16))return !0;
                if ("kreatel" === n.util.trim(navigator.userAgent).slice(-7).toLowerCase())return !0;
                var e = navigator.userAgent.toLowerCase(), t = e.indexOf("android") > -1;
                return !!t
            }
        }, e = n.util.random(), function () {
            var e = navigator.userAgent.toLowerCase(), t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            n.util.browser[t[1] || ""] = !0, n.util.browser.version = t[2] || "0", n.util.browser.trident && (n.util.browser.msie = !0), (n.util.browser.msie || n.util.browser.mozilla && 1 === +n.util.browser.version.split(".")[0]) && (n.util.storage = !1)
        }(), n.util.on(window, "unload", function (e) {
            n.unsubscribe()
        }), n.util.on(window, "beforeunload", function (e) {
            n.unsubscribe()
        }), n
    })
}, function (e, t, n) {
    "use strict";
    function i() {
        try {
            delete window.intercomEchoSuccess, delete window.intercomEchoFailure
        } catch (e) {
        }
    }

    var o = n(539), r = n(340), a = n(540);
    window.intercomEchoSuccess = function () {
        r.increment("echoSuccess"), i()
    }, window.intercomEchoFailure = function () {
        r.increment("echoFailure"), i()
    };
    try {
        r.increment("echoAttempt"), a.create(o)
    } catch (s) {
        window.intercomEchoFailure()
    }
}, function (e, t, n) {
    e.exports = n.p + "echo.515e8809.js"
}, function (e, t) {
    "use strict";
    function n(e) {
        var t = document.createElement("iframe");
        t.style.display = "none", document.body.appendChild(t);
        var n = "<!doctype html><head></head><body>  <script type='text/javascript' src='" + e + "'></script></body></html>";
        return t.contentWindow.document.open("text/html", "replace"), t.contentWindow.document.write(n), t.contentWindow.document.close(), t
    }

    e.exports.create = n
}]);