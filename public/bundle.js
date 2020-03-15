!(function(t) {
  var e = {}
  function n(i) {
    if (e[i]) return e[i].exports
    var r = (e[i] = {i: i, l: !1, exports: {}})
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0})
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var i = Object.create(null)
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', {enumerable: !0, value: t}),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function(e) {
              return t[e]
            }.bind(null, r)
          )
      return i
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ''),
    n((n.s = 125))
})([
  function(t, e, n) {
    var i = n(2),
      r = n(8),
      o = n(15),
      a = n(12),
      s = n(19),
      u = function(t, e, n) {
        var l,
          f,
          c,
          d,
          h = t & u.F,
          p = t & u.G,
          y = t & u.S,
          m = t & u.P,
          _ = t & u.B,
          v = p ? i : y ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
          g = p ? r : r[e] || (r[e] = {}),
          b = g.prototype || (g.prototype = {})
        for (l in (p && (n = e), n))
          (c = ((f = !h && v && void 0 !== v[l]) ? v : n)[l]),
            (d =
              _ && f
                ? s(c, i)
                : m && 'function' == typeof c ? s(Function.call, c) : c),
            v && a(v, l, c, t & u.U),
            g[l] != c && o(g, l, d),
            m && b[l] != c && (b[l] = c)
      }
    ;(i.core = r),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u)
  },
  function(t, e, n) {
    'use strict'
    t.exports = n(312)
  },
  function(t, e) {
    var n = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
    'number' == typeof __g && (__g = n)
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  },
  function(t, e, n) {
    var i = n(5)
    t.exports = function(t) {
      if (!i(t)) throw TypeError(t + ' is not an object!')
      return t
    }
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t
    }
  },
  function(t, e, n) {
    var i = n(50)('wks'),
      r = n(31),
      o = n(2).Symbol,
      a = 'function' == typeof o
    ;(t.exports = function(t) {
      return i[t] || (i[t] = (a && o[t]) || (a ? o : r)('Symbol.' + t))
    }).store = i
  },
  function(t, e, n) {
    var i = n(21),
      r = Math.min
    t.exports = function(t) {
      return t > 0 ? r(i(t), 9007199254740991) : 0
    }
  },
  function(t, e) {
    var n = (t.exports = {version: '2.6.9'})
    'number' == typeof __e && (__e = n)
  },
  function(t, e, n) {
    t.exports = !n(3)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7
          }
        }).a
      )
    })
  },
  function(t, e, n) {
    var i = n(4),
      r = n(90),
      o = n(28),
      a = Object.defineProperty
    e.f = n(9)
      ? Object.defineProperty
      : function(t, e, n) {
          if ((i(t), (e = o(e, !0)), i(n), r))
            try {
              return a(t, e, n)
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported!')
          return 'value' in n && (t[e] = n.value), t
        }
  },
  function(t, e, n) {
    var i = n(26)
    t.exports = function(t) {
      return Object(i(t))
    }
  },
  function(t, e, n) {
    var i = n(2),
      r = n(15),
      o = n(14),
      a = n(31)('src'),
      s = n(130),
      u = ('' + s).split('toString')
    ;(n(8).inspectSource = function(t) {
      return s.call(t)
    }),
      (t.exports = function(t, e, n, s) {
        var l = 'function' == typeof n
        l && (o(n, 'name') || r(n, 'name', e)),
          t[e] !== n &&
            (l && (o(n, a) || r(n, a, t[e] ? '' + t[e] : u.join(String(e)))),
            t === i
              ? (t[e] = n)
              : s
                ? t[e] ? (t[e] = n) : r(t, e, n)
                : (delete t[e], r(t, e, n)))
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && this[a]) || s.call(this)
      })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(3),
      o = n(26),
      a = /"/g,
      s = function(t, e, n, i) {
        var r = String(o(t)),
          s = '<' + e
        return (
          '' !== n &&
            (s += ' ' + n + '="' + String(i).replace(a, '&quot;') + '"'),
          s + '>' + r + '</' + e + '>'
        )
      }
    t.exports = function(t, e) {
      var n = {}
      ;(n[t] = e(s)),
        i(
          i.P +
            i.F *
              r(function() {
                var e = ''[t]('"')
                return e !== e.toLowerCase() || e.split('"').length > 3
              }),
          'String',
          n
        )
    }
  },
  function(t, e) {
    var n = {}.hasOwnProperty
    t.exports = function(t, e) {
      return n.call(t, e)
    }
  },
  function(t, e, n) {
    var i = n(10),
      r = n(30)
    t.exports = n(9)
      ? function(t, e, n) {
          return i.f(t, e, r(1, n))
        }
      : function(t, e, n) {
          return (t[e] = n), t
        }
  },
  function(t, e, n) {
    var i = n(46),
      r = n(26)
    t.exports = function(t) {
      return i(r(t))
    }
  },
  function(t, e, n) {
    'undefined' != typeof self && self,
      (t.exports = (function(t) {
        var e = {}
        function n(i) {
          if (e[i]) return e[i].exports
          var r = (e[i] = {i: i, l: !1, exports: {}})
          return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
        }
        return (
          (n.m = t),
          (n.c = e),
          (n.d = function(t, e, i) {
            n.o(t, e) ||
              Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
              })
          }),
          (n.r = function(t) {
            Object.defineProperty(t, '__esModule', {value: !0})
          }),
          (n.n = function(t) {
            var e =
              t && t.__esModule
                ? function() {
                    return t.default
                  }
                : function() {
                    return t
                  }
            return n.d(e, 'a', e), e
          }),
          (n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }),
          (n.p = ''),
          n((n.s = 148))
        )
      })([
        function(t, e, n) {
          'use strict'
          n.r(e),
            function(t) {
              var i = n(93),
                r = function() {
                  if (!(this instanceof r))
                    throw new Error(
                      "constructor needs to be called with the 'new' keyword"
                    )
                }
                /**
                 *  Tone.js
                 *  @author Yotam Mann
                 *  @license http://opensource.org/licenses/MIT MIT License
                 *  @copyright 2014-2019 Yotam Mann
                 */
              ;(r.prototype.toString = function() {
                for (var t in r) {
                  var e = t[0].match(/^[A-Z]$/),
                    n = r[t] === this.constructor
                  if (r.isFunction(r[t]) && e && n) return t
                }
                return 'Tone'
              }),
                (r.prototype.dispose = function() {
                  return this
                }),
                (r.prototype.set = function(t, e) {
                  if (r.isString(t)) {
                    var n = {}
                    ;(n[t] = e), (t = n)
                  }
                  t: for (var i in t) {
                    e = t[i]
                    var o = this
                    if (-1 !== i.indexOf('.')) {
                      for (var a = i.split('.'), s = 0; s < a.length - 1; s++)
                        if ((o = o[a[s]]) instanceof r) {
                          a.splice(0, s + 1)
                          var u = a.join('.')
                          o.set(u, e)
                          continue t
                        }
                      i = a[a.length - 1]
                    }
                    var l = o[i]
                    r.isUndef(l) ||
                      ((r.Signal && l instanceof r.Signal) ||
                      (r.Param && l instanceof r.Param)
                        ? l.value !== e && (l.value = e)
                        : l instanceof AudioParam
                          ? l.value !== e && (l.value = e)
                          : r.TimeBase && l instanceof r.TimeBase
                            ? (o[i] = e)
                            : l instanceof r ? l.set(e) : l !== e && (o[i] = e))
                  }
                  return this
                }),
                (r.prototype.get = function(t) {
                  r.isUndef(t)
                    ? (t = this._collectDefaults(this.constructor))
                    : r.isString(t) && (t = [t])
                  for (var e = {}, n = 0; n < t.length; n++) {
                    var i = t[n],
                      o = this,
                      a = e
                    if (-1 !== i.indexOf('.')) {
                      for (var s = i.split('.'), u = 0; u < s.length - 1; u++) {
                        var l = s[u]
                        ;(a[l] = a[l] || {}), (a = a[l]), (o = o[l])
                      }
                      i = s[s.length - 1]
                    }
                    var f = o[i]
                    r.isObject(t[i])
                      ? (a[i] = f.get())
                      : r.Signal && f instanceof r.Signal
                        ? (a[i] = f.value)
                        : r.Param && f instanceof r.Param
                          ? (a[i] = f.value)
                          : f instanceof AudioParam
                            ? (a[i] = f.value)
                            : f instanceof r
                              ? (a[i] = f.get())
                              : !r.isFunction(f) && r.isDefined(f) && (a[i] = f)
                  }
                  return e
                }),
                (r.prototype._collectDefaults = function(t) {
                  var e = []
                  if (
                    (r.isDefined(t.defaults) && (e = Object.keys(t.defaults)),
                    r.isDefined(t._super))
                  )
                    for (
                      var n = this._collectDefaults(t._super), i = 0;
                      i < n.length;
                      i++
                    )
                      -1 === e.indexOf(n[i]) && e.push(n[i])
                  return e
                }),
                (r.defaults = function(t, e, n) {
                  var i = {}
                  if (1 === t.length && r.isObject(t[0])) i = t[0]
                  else for (var o = 0; o < e.length; o++) i[e[o]] = t[o]
                  return r.isDefined(n.defaults)
                    ? r.defaultArg(i, n.defaults)
                    : r.isObject(n) ? r.defaultArg(i, n) : i
                }),
                (r.defaultArg = function(t, e) {
                  if (r.isObject(t) && r.isObject(e)) {
                    var n = {}
                    for (var i in t) n[i] = r.defaultArg(e[i], t[i])
                    for (var o in e) n[o] = r.defaultArg(t[o], e[o])
                    return n
                  }
                  return r.isUndef(t) ? e : t
                }),
                (r.prototype.log = function() {
                  if (
                    this.debug ||
                    this.toString() === r.global.TONE_DEBUG_CLASS
                  ) {
                    var t = Array.from(arguments)
                    t.unshift(this.toString() + ':'),
                      console.log.apply(void 0, t)
                  }
                }),
                (r.prototype.assert = function(t, e) {
                  if (!t) throw new Error(e)
                }),
                (r.connectSeries = function() {
                  for (var t = arguments[0], e = 1; e < arguments.length; e++) {
                    var n = arguments[e]
                    r.connect(t, n), (t = n)
                  }
                  return r
                }),
                (r.connect = function(t, e, n, i) {
                  for (; r.isDefined(e.input); )
                    r.isArray(e.input)
                      ? ((i = r.defaultArg(i, 0)), (e = e.input[i]), (i = 0))
                      : e.input && (e = e.input)
                  return (
                    e instanceof AudioParam
                      ? t.connect(e, n)
                      : e instanceof AudioNode && t.connect(e, n, i),
                    r
                  )
                }),
                (r.disconnect = function(t, e, n, i) {
                  if (e) {
                    for (var o = !1; !o; )
                      r.isArray(e.input)
                        ? (r.isDefined(i)
                            ? r.disconnect(t, e.input[i], n)
                            : e.input.forEach(function(e) {
                                try {
                                  r.disconnect(t, e, n)
                                } catch (t) {}
                              }),
                          (o = !0))
                        : e.input ? (e = e.input) : (o = !0)
                    e instanceof AudioParam
                      ? t.disconnect(e, n)
                      : e instanceof AudioNode && t.disconnect(e, n, i)
                  } else t.disconnect()
                  return r
                }),
                (r.isUndef = function(t) {
                  return void 0 === t
                }),
                (r.isDefined = function(t) {
                  return !r.isUndef(t)
                }),
                (r.isFunction = function(t) {
                  return 'function' == typeof t
                }),
                (r.isNumber = function(t) {
                  return 'number' == typeof t
                }),
                (r.isObject = function(t) {
                  return (
                    '[object Object]' === Object.prototype.toString.call(t) &&
                    t.constructor === Object
                  )
                }),
                (r.isBoolean = function(t) {
                  return 'boolean' == typeof t
                }),
                (r.isArray = function(t) {
                  return Array.isArray(t)
                }),
                (r.isString = function(t) {
                  return 'string' == typeof t
                }),
                (r.isNote = function(t) {
                  return (
                    r.isString(t) &&
                    /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
                  )
                }),
                (r.noOp = function() {}),
                (r.prototype._readOnly = function(t) {
                  if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) this._readOnly(t[e])
                  else
                    Object.defineProperty(this, t, {
                      writable: !1,
                      enumerable: !0
                    })
                }),
                (r.prototype._writable = function(t) {
                  if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) this._writable(t[e])
                  else Object.defineProperty(this, t, {writable: !0})
                }),
                (r.State = {
                  Started: 'started',
                  Stopped: 'stopped',
                  Paused: 'paused'
                }),
                (r.global = r.isUndef(t) ? window : t),
                (r.equalPowerScale = function(t) {
                  var e = 0.5 * Math.PI
                  return Math.sin(t * e)
                }),
                (r.dbToGain = function(t) {
                  return Math.pow(10, t / 20)
                }),
                (r.gainToDb = function(t) {
                  return Math.log(t) / Math.LN10 * 20
                }),
                (r.intervalToFrequencyRatio = function(t) {
                  return Math.pow(2, t / 12)
                }),
                (r.prototype.now = function() {
                  return r.context.now()
                }),
                (r.now = function() {
                  return r.context.now()
                }),
                (r.prototype.immediate = function() {
                  return r.context.currentTime
                }),
                (r.immediate = function() {
                  return r.context.currentTime
                }),
                (r.extend = function(t, e) {
                  function n() {}
                  r.isUndef(e) && (e = r),
                    (n.prototype = e.prototype),
                    (t.prototype = new n()),
                    (t.prototype.constructor = t),
                    (t._super = e)
                }),
                (r._audioContext = null),
                (r.start = function() {
                  return r.context.resume()
                }),
                Object.defineProperty(r, 'context', {
                  get: function() {
                    return r._audioContext
                  },
                  set: function(t) {
                    t.isContext
                      ? (r._audioContext = t)
                      : (r._audioContext = new r.Context(t)),
                      r.Context.emit('init', r._audioContext)
                  }
                }),
                Object.defineProperty(r.prototype, 'context', {
                  get: function() {
                    return r.context
                  }
                }),
                (r.setContext = function(t) {
                  r.context = t
                }),
                Object.defineProperty(r.prototype, 'blockTime', {
                  get: function() {
                    return 128 / this.context.sampleRate
                  }
                }),
                Object.defineProperty(r.prototype, 'sampleTime', {
                  get: function() {
                    return 1 / this.context.sampleRate
                  }
                }),
                Object.defineProperty(r, 'supported', {
                  get: function() {
                    var t =
                        r.global.hasOwnProperty('AudioContext') ||
                        r.global.hasOwnProperty('webkitAudioContext'),
                      e = r.global.hasOwnProperty('Promise')
                    return t && e
                  }
                }),
                Object.defineProperty(r, 'initialized', {
                  get: function() {
                    return Boolean(r.context)
                  }
                }),
                (r.getContext = function(t) {
                  if (r.initialized) t(r.context)
                  else {
                    var e = function() {
                      t(r.context), r.Context.off('init', e)
                    }
                    r.Context.on('init', e)
                  }
                  return r
                }),
                (r.version = i.a),
                (e.default = r)
            }.call(this, n(147))
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          if ((n(20), i.default.supported)) {
            var r = new OfflineAudioContext(2, 1, 44100),
              o = r.createGain(),
              a = r.createGain()
            if (o.connect(a) !== a) {
              var s = AudioNode.prototype.connect
              AudioNode.prototype.connect = function() {
                return s.apply(this, arguments), arguments[0]
              }
            }
          }
          ;(i.default.AudioNode = function() {
            i.default.call(this)
            var t = i.default.defaults(arguments, ['context'], {
              context: i.default.context
            })
            this._context = t.context
          }),
            i.default.extend(i.default.AudioNode),
            Object.defineProperty(i.default.AudioNode.prototype, 'context', {
              get: function() {
                return this._context
              }
            }),
            (i.default.AudioNode.prototype.createInsOuts = function(t, e) {
              1 === t
                ? (this.input = this.context.createGain())
                : t > 1 && (this.input = new Array(t)),
                1 === e
                  ? (this.output = this.context.createGain())
                  : e > 1 && (this.output = new Array(e))
            }),
            Object.defineProperty(
              i.default.AudioNode.prototype,
              'channelCount',
              {
                get: function() {
                  return this.output.channelCount
                },
                set: function(t) {
                  return (this.output.channelCount = t)
                }
              }
            ),
            Object.defineProperty(
              i.default.AudioNode.prototype,
              'channelCountMode',
              {
                get: function() {
                  return this.output.channelCountMode
                },
                set: function(t) {
                  return (this.output.channelCountMode = t)
                }
              }
            ),
            Object.defineProperty(
              i.default.AudioNode.prototype,
              'channelInterpretation',
              {
                get: function() {
                  return this.output.channelInterpretation
                },
                set: function(t) {
                  return (this.output.channelInterpretation = t)
                }
              }
            ),
            Object.defineProperty(
              i.default.AudioNode.prototype,
              'numberOfInputs',
              {
                get: function() {
                  return this.input
                    ? i.default.isArray(this.input) ? this.input.length : 1
                    : 0
                }
              }
            ),
            Object.defineProperty(
              i.default.AudioNode.prototype,
              'numberOfOutputs',
              {
                get: function() {
                  return this.output
                    ? i.default.isArray(this.output) ? this.output.length : 1
                    : 0
                }
              }
            ),
            (i.default.AudioNode.prototype.connect = function(t, e, n) {
              return (
                i.default.isArray(this.output)
                  ? ((e = i.default.defaultArg(e, 0)),
                    this.output[e].connect(t, 0, n))
                  : i.default.connect(this.output, t, e, n),
                this
              )
            }),
            (i.default.AudioNode.prototype.disconnect = function(t, e, n) {
              return (
                i.default.isArray(this.output)
                  ? ((e = i.default.defaultArg(e, 0)),
                    this.output[e].disconnect(t, 0, n))
                  : i.default.disconnect(this.output, t, e, n),
                this
              )
            }),
            (i.default.AudioNode.prototype.chain = function() {
              var t = Array.from(arguments)
              return (
                t.unshift(this), i.default.connectSeries.apply(void 0, t), this
              )
            }),
            (i.default.AudioNode.prototype.fan = function() {
              for (var t = 0; t < arguments.length; t++)
                this.connect(arguments[t])
              return this
            }),
            (i.default.AudioNode.prototype.dispose = function() {
              return (
                i.default.isDefined(this.input) &&
                  (this.input instanceof AudioNode && this.input.disconnect(),
                  (this.input = null)),
                i.default.isDefined(this.output) &&
                  (this.output instanceof AudioNode && this.output.disconnect(),
                  (this.output = null)),
                (this._context = null),
                this
              )
            }),
            (e.default = i.default.AudioNode)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          if (
            (n(4),
            n(14),
            n(30),
            n(44),
            n(20),
            n(3),
            i.default.supported &&
              !i.default.global.AudioContext.prototype.createConstantSource)
          ) {
            var r = function(t) {
              this.context = t
              for (
                var e = t.createBuffer(1, 128, t.sampleRate),
                  n = e.getChannelData(0),
                  i = 0;
                i < n.length;
                i++
              )
                n[i] = 1
              ;(this._bufferSource = t.createBufferSource()),
                (this._bufferSource.channelCount = 1),
                (this._bufferSource.channelCountMode = 'explicit'),
                (this._bufferSource.buffer = e),
                (this._bufferSource.loop = !0)
              var r = (this._output = t.createGain())
              ;(this.offset = r.gain), this._bufferSource.connect(r)
            }
            ;(r.prototype.start = function(t) {
              return this._bufferSource.start(t), this
            }),
              (r.prototype.stop = function(t) {
                return this._bufferSource.stop(t), this
              }),
              (r.prototype.connect = function() {
                return this._output.connect.apply(this._output, arguments), this
              }),
              (r.prototype.disconnect = function() {
                return (
                  this._output.disconnect.apply(this._output, arguments), this
                )
              }),
              (AudioContext.prototype.createConstantSource = function() {
                return new r(this)
              }),
              (i.default.Context.prototype.createConstantSource = function() {
                return new r(this)
              })
          }
          ;(i.default.Signal = function() {
            var t = i.default.defaults(
              arguments,
              ['value', 'units'],
              i.default.Signal
            )
            i.default.Param.call(this, t),
              (this._constantSource = this.context.createConstantSource()),
              this._constantSource.start(0),
              (this._param = this._constantSource.offset),
              (this.value = t.value),
              (this.output = this._constantSource),
              (this.input = this._param = this.output.offset)
          }),
            i.default.extend(i.default.Signal, i.default.Param),
            (i.default.Signal.defaults = {
              value: 0,
              units: i.default.Type.Default,
              convert: !0
            }),
            (i.default.Signal.prototype.connect =
              i.default.SignalBase.prototype.connect),
            (i.default.Signal.prototype.disconnect =
              i.default.SignalBase.prototype.disconnect),
            (i.default.Signal.prototype.getValueAtTime = function(t) {
              return this._param.getValueAtTime
                ? this._param.getValueAtTime(t)
                : i.default.Param.prototype.getValueAtTime.call(this, t)
            }),
            (i.default.Signal.prototype.dispose = function() {
              return (
                i.default.Param.prototype.dispose.call(this),
                this._constantSource.stop(),
                this._constantSource.disconnect(),
                (this._constantSource = null),
                this
              )
            }),
            (e.default = i.default.Signal)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(14),
            n(4),
            n(1),
            (i.default.Gain = function() {
              var t = i.default.defaults(
                arguments,
                ['gain', 'units'],
                i.default.Gain
              )
              i.default.AudioNode.call(this, t),
                (this.input = this.output = this._gainNode = this.context.createGain()),
                (this.gain = new i.default.Param({
                  param: this._gainNode.gain,
                  units: t.units,
                  value: t.gain,
                  convert: t.convert
                })),
                this._readOnly('gain')
            }),
            i.default.extend(i.default.Gain, i.default.AudioNode),
            (i.default.Gain.defaults = {gain: 1, convert: !0}),
            (i.default.Gain.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this),
                this._gainNode.disconnect(),
                (this._gainNode = null),
                this._writable('gain'),
                this.gain.dispose(),
                (this.gain = null)
            }),
            (e.default = i.default.Gain)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(63),
            n(46),
            n(45),
            n(20),
            (i.default.Type = {
              Default: 'number',
              Time: 'time',
              Frequency: 'frequency',
              TransportTime: 'transportTime',
              Ticks: 'ticks',
              NormalRange: 'normalRange',
              AudioRange: 'audioRange',
              Decibels: 'db',
              Interval: 'interval',
              BPM: 'bpm',
              Positive: 'positive',
              Gain: 'gain',
              Cents: 'cents',
              Degrees: 'degrees',
              MIDI: 'midi',
              BarsBeatsSixteenths: 'barsBeatsSixteenths',
              Samples: 'samples',
              Hertz: 'hertz',
              Note: 'note',
              Milliseconds: 'milliseconds',
              Seconds: 'seconds',
              Notation: 'notation'
            }),
            (i.default.prototype.toSeconds = function(t) {
              return i.default.isNumber(t)
                ? t
                : i.default.isUndef(t)
                  ? this.now()
                  : i.default.isString(t) || i.default.isObject(t)
                    ? new i.default.Time(t).toSeconds()
                    : t instanceof i.default.TimeBase ? t.toSeconds() : void 0
            }),
            (i.default.prototype.toFrequency = function(t) {
              return i.default.isNumber(t)
                ? t
                : i.default.isString(t) ||
                  i.default.isUndef(t) ||
                  i.default.isObject(t)
                  ? new i.default.Frequency(t).valueOf()
                  : t instanceof i.default.TimeBase ? t.toFrequency() : void 0
            }),
            (i.default.prototype.toTicks = function(t) {
              return i.default.isNumber(t) ||
                i.default.isString(t) ||
                i.default.isObject(t)
                ? new i.default.TransportTime(t).toTicks()
                : i.default.isUndef(t)
                  ? i.default.Transport.ticks
                  : t instanceof i.default.TimeBase ? t.toTicks() : void 0
            }),
            (e.default = i.default)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(14),
            n(3),
            n(30),
            (i.default.Multiply = function(t) {
              i.default.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._mult = this.input[0] = this.output = new i.default.Gain()),
                (this._param = this.input[1] = this.output.gain),
                (this.value = i.default.defaultArg(t, 0))
            }),
            i.default.extend(i.default.Multiply, i.default.Signal),
            (i.default.Multiply.prototype.dispose = function() {
              return (
                i.default.Signal.prototype.dispose.call(this),
                this._mult.dispose(),
                (this._mult = null),
                (this._param = null),
                this
              )
            }),
            (e.default = i.default.Multiply)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(16),
            n(27),
            n(40),
            n(4),
            n(34),
            n(2),
            n(1),
            (i.default.Source = function(t) {
              ;(t = i.default.defaultArg(t, i.default.Source.defaults)),
                i.default.AudioNode.call(this),
                (this._volume = this.output = new i.default.Volume(t.volume)),
                (this.volume = this._volume.volume),
                this._readOnly('volume'),
                (this._state = new i.default.TimelineState(
                  i.default.State.Stopped
                )),
                (this._state.memory = 100),
                (this._synced = !1),
                (this._scheduled = []),
                (this._volume.output.output.channelCount = 2),
                (this._volume.output.output.channelCountMode = 'explicit'),
                (this.mute = t.mute)
            }),
            i.default.extend(i.default.Source, i.default.AudioNode),
            (i.default.Source.defaults = {volume: 0, mute: !1}),
            Object.defineProperty(i.default.Source.prototype, 'state', {
              get: function() {
                return this._synced
                  ? i.default.Transport.state === i.default.State.Started
                    ? this._state.getValueAtTime(i.default.Transport.seconds)
                    : i.default.State.Stopped
                  : this._state.getValueAtTime(this.now())
              }
            }),
            Object.defineProperty(i.default.Source.prototype, 'mute', {
              get: function() {
                return this._volume.mute
              },
              set: function(t) {
                this._volume.mute = t
              }
            }),
            (i.default.Source.prototype._start = i.default.noOp),
            (i.default.Source.prototype.restart = i.default.noOp),
            (i.default.Source.prototype._stop = i.default.noOp),
            (i.default.Source.prototype.start = function(t, e, n) {
              if (
                (i.default.isUndef(t) && this._synced
                  ? (t = i.default.Transport.seconds)
                  : ((t = this.toSeconds(t)),
                    (t = Math.max(t, this.context.currentTime))),
                this._state.getValueAtTime(t) === i.default.State.Started)
              )
                this._state.cancel(t),
                  this._state.setStateAtTime(i.default.State.Started, t),
                  this.restart(t, e, n)
              else if (
                (this._state.setStateAtTime(i.default.State.Started, t),
                this._synced)
              ) {
                var r = this._state.get(t)
                ;(r.offset = i.default.defaultArg(e, 0)), (r.duration = n)
                var o = i.default.Transport.schedule(
                  function(t) {
                    this._start(t, e, n)
                  }.bind(this),
                  t
                )
                this._scheduled.push(o),
                  i.default.Transport.state === i.default.State.Started &&
                    this._syncedStart(this.now(), i.default.Transport.seconds)
              } else this._start.apply(this, arguments)
              return this
            }),
            (i.default.Source.prototype.stop = function(t) {
              if (
                (i.default.isUndef(t) && this._synced
                  ? (t = i.default.Transport.seconds)
                  : ((t = this.toSeconds(t)),
                    (t = Math.max(t, this.context.currentTime))),
                this._synced)
              ) {
                var e = i.default.Transport.schedule(this._stop.bind(this), t)
                this._scheduled.push(e)
              } else this._stop.apply(this, arguments)
              return (
                this._state.cancel(t),
                this._state.setStateAtTime(i.default.State.Stopped, t),
                this
              )
            }),
            (i.default.Source.prototype.sync = function() {
              return (
                (this._synced = !0),
                (this._syncedStart = function(t, e) {
                  if (e > 0) {
                    var n = this._state.get(e)
                    if (
                      n &&
                      n.state === i.default.State.Started &&
                      n.time !== e
                    ) {
                      var r,
                        o = e - this.toSeconds(n.time)
                      n.duration && (r = this.toSeconds(n.duration) - o),
                        this._start(t, this.toSeconds(n.offset) + o, r)
                    }
                  }
                }.bind(this)),
                (this._syncedStop = function(t) {
                  var e = i.default.Transport.getSecondsAtTime(
                    Math.max(t - this.sampleTime, 0)
                  )
                  this._state.getValueAtTime(e) === i.default.State.Started &&
                    this._stop(t)
                }.bind(this)),
                i.default.Transport.on('start loopStart', this._syncedStart),
                i.default.Transport.on('stop pause loopEnd', this._syncedStop),
                this
              )
            }),
            (i.default.Source.prototype.unsync = function() {
              this._synced &&
                (i.default.Transport.off(
                  'stop pause loopEnd',
                  this._syncedStop
                ),
                i.default.Transport.off('start loopStart', this._syncedStart)),
                (this._synced = !1)
              for (var t = 0; t < this._scheduled.length; t++) {
                var e = this._scheduled[t]
                i.default.Transport.clear(e)
              }
              return (this._scheduled = []), this._state.cancel(0), this
            }),
            (i.default.Source.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this),
                this.unsync(),
                (this._scheduled = null),
                this._writable('volume'),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null),
                this._state.dispose(),
                (this._state = null)
            }),
            (e.default = i.default.Source)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          if (
            (n(30),
            n(44),
            i.default.supported &&
              !i.default.global.AudioContext.prototype._native_createWaveShaper)
          ) {
            var r = navigator.userAgent.toLowerCase()
            if (r.includes('safari') && !r.includes('chrome')) {
              var o = function(t) {
                for (var e in ((this._internalNode = this.input = this.output = t._native_createWaveShaper()),
                (this._curve = null),
                this._internalNode))
                  this._defineProperty(this._internalNode, e)
              }
              Object.defineProperty(o.prototype, 'curve', {
                get: function() {
                  return this._curve
                },
                set: function(t) {
                  this._curve = t
                  var e = new Float32Array(t.length + 1)
                  e.set(t, 1), (e[0] = t[0]), (this._internalNode.curve = e)
                }
              }),
                (o.prototype._defineProperty = function(t, e) {
                  i.default.isUndef(this[e]) &&
                    Object.defineProperty(this, e, {
                      get: function() {
                        return 'function' == typeof t[e] ? t[e].bind(t) : t[e]
                      },
                      set: function(n) {
                        t[e] = n
                      }
                    })
                }),
                (i.default.global.AudioContext.prototype._native_createWaveShaper =
                  i.default.global.AudioContext.prototype.createWaveShaper),
                (i.default.global.AudioContext.prototype.createWaveShaper = function() {
                  return new o(this)
                })
            }
          }
          ;(i.default.WaveShaper = function(t, e) {
            i.default.SignalBase.call(this),
              (this._shaper = this.input = this.output = this.context.createWaveShaper()),
              (this._curve = null),
              Array.isArray(t)
                ? (this.curve = t)
                : isFinite(t) || i.default.isUndef(t)
                  ? (this._curve = new Float32Array(
                      i.default.defaultArg(t, 1024)
                    ))
                  : i.default.isFunction(t) &&
                    ((this._curve = new Float32Array(
                      i.default.defaultArg(e, 1024)
                    )),
                    this.setMap(t))
          }),
            i.default.extend(i.default.WaveShaper, i.default.SignalBase),
            (i.default.WaveShaper.prototype.setMap = function(t) {
              for (
                var e = new Array(this._curve.length),
                  n = 0,
                  i = this._curve.length;
                n < i;
                n++
              ) {
                var r = n / (i - 1) * 2 - 1
                e[n] = t(r, n)
              }
              return (this.curve = e), this
            }),
            Object.defineProperty(i.default.WaveShaper.prototype, 'curve', {
              get: function() {
                return this._shaper.curve
              },
              set: function(t) {
                ;(this._curve = new Float32Array(t)),
                  (this._shaper.curve = this._curve)
              }
            }),
            Object.defineProperty(
              i.default.WaveShaper.prototype,
              'oversample',
              {
                get: function() {
                  return this._shaper.oversample
                },
                set: function(t) {
                  if (!['none', '2x', '4x'].includes(t))
                    throw new RangeError(
                      "Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'"
                    )
                  this._shaper.oversample = t
                }
              }
            ),
            (i.default.WaveShaper.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._shaper.disconnect(),
                (this._shaper = null),
                (this._curve = null),
                this
              )
            }),
            (e.default = i.default.WaveShaper)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(23),
            n(1),
            (i.default.Effect = function() {
              var t = i.default.defaults(arguments, ['wet'], i.default.Effect)
              i.default.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._dryWet = new i.default.CrossFade(t.wet)),
                (this.wet = this._dryWet.fade),
                (this.effectSend = new i.default.Gain()),
                (this.effectReturn = new i.default.Gain()),
                i.default.connect(this.input, this._dryWet.a),
                i.default.connect(this.input, this.effectSend),
                this.effectReturn.connect(this._dryWet.b),
                this._dryWet.connect(this.output),
                this._readOnly(['wet'])
            }),
            i.default.extend(i.default.Effect, i.default.AudioNode),
            (i.default.Effect.defaults = {wet: 1}),
            (i.default.Effect.prototype.connectEffect = function(t) {
              return this.effectSend.chain(t, this.effectReturn), this
            }),
            (i.default.Effect.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._dryWet.dispose(),
                (this._dryWet = null),
                this.effectSend.dispose(),
                (this.effectSend = null),
                this.effectReturn.dispose(),
                (this.effectReturn = null),
                this._writable(['wet']),
                (this.wet = null),
                this
              )
            }),
            (e.default = i.default.Effect)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(1),
            (i.default.Filter = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type', 'rolloff'],
                i.default.Filter
              )
              i.default.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._filters = []),
                (this.frequency = new i.default.Signal(
                  t.frequency,
                  i.default.Type.Frequency
                )),
                (this.detune = new i.default.Signal(0, i.default.Type.Cents)),
                (this.gain = new i.default.Signal({
                  value: t.gain,
                  convert: !0,
                  type: i.default.Type.Decibels
                })),
                (this.Q = new i.default.Signal(t.Q)),
                (this._type = t.type),
                (this._rolloff = t.rolloff),
                (this.rolloff = t.rolloff),
                this._readOnly(['detune', 'frequency', 'gain', 'Q'])
            }),
            i.default.extend(i.default.Filter, i.default.AudioNode),
            (i.default.Filter.defaults = {
              type: 'lowpass',
              frequency: 350,
              rolloff: -12,
              Q: 1,
              gain: 0
            }),
            Object.defineProperty(i.default.Filter.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                if (
                  -1 ===
                  [
                    'lowpass',
                    'highpass',
                    'bandpass',
                    'lowshelf',
                    'highshelf',
                    'notch',
                    'allpass',
                    'peaking'
                  ].indexOf(t)
                )
                  throw new TypeError('Tone.Filter: invalid type ' + t)
                this._type = t
                for (var e = 0; e < this._filters.length; e++)
                  this._filters[e].type = t
              }
            }),
            Object.defineProperty(i.default.Filter.prototype, 'rolloff', {
              get: function() {
                return this._rolloff
              },
              set: function(t) {
                t = parseInt(t, 10)
                var e = [-12, -24, -48, -96].indexOf(t)
                if (-1 === e)
                  throw new RangeError(
                    'Tone.Filter: rolloff can only be -12, -24, -48 or -96'
                  )
                ;(e += 1), (this._rolloff = t), this.input.disconnect()
                for (var n = 0; n < this._filters.length; n++)
                  this._filters[n].disconnect(), (this._filters[n] = null)
                this._filters = new Array(e)
                for (var r = 0; r < e; r++) {
                  var o = this.context.createBiquadFilter()
                  ;(o.type = this._type),
                    this.frequency.connect(o.frequency),
                    this.detune.connect(o.detune),
                    this.Q.connect(o.Q),
                    this.gain.connect(o.gain),
                    (this._filters[r] = o)
                }
                var a = [this.input].concat(this._filters).concat([this.output])
                i.default.connectSeries.apply(i.default, a)
              }
            }),
            (i.default.Filter.prototype.getFrequencyResponse = function(t) {
              t = i.default.defaultArg(t, 128)
              for (
                var e = new Float32Array(t).map(function() {
                    return 1
                  }),
                  n = new Float32Array(t),
                  r = 0;
                r < t;
                r++
              ) {
                var o = 19980 * Math.pow(r / t, 2) + 20
                n[r] = o
              }
              var a = new Float32Array(t),
                s = new Float32Array(t)
              return (
                this._filters.forEach(
                  function() {
                    var t = this.context.createBiquadFilter()
                    ;(t.type = this._type),
                      (t.Q.value = this.Q.value),
                      (t.frequency.value = this.frequency.value),
                      (t.gain.value = this.gain.value),
                      t.getFrequencyResponse(n, a, s),
                      a.forEach(function(t, n) {
                        e[n] *= t
                      })
                  }.bind(this)
                ),
                e
              )
            }),
            (i.default.Filter.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this)
              for (var t = 0; t < this._filters.length; t++)
                this._filters[t].disconnect(), (this._filters[t] = null)
              return (
                (this._filters = null),
                this._writable(['detune', 'frequency', 'gain', 'Q']),
                this.frequency.dispose(),
                this.Q.dispose(),
                (this.frequency = null),
                (this.Q = null),
                this.detune.dispose(),
                (this.detune = null),
                this.gain.dispose(),
                (this.gain = null),
                this
              )
            }),
            (e.default = i.default.Filter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(1),
            (i.default.Merge = function(t) {
              ;(t = i.default.defaultArg(t, 2)),
                i.default.AudioNode.call(this),
                this.createInsOuts(t, 0),
                (this._merger = this.output = this.context.createChannelMerger(
                  t
                ))
              for (var e = 0; e < t; e++)
                (this.input[e] = new i.default.Gain()),
                  this.input[e].connect(this._merger, 0, e),
                  (this.input[e].channelCount = 1),
                  (this.input[e].channelCountMode = 'explicit')
              ;(this.left = this.input[0]), (this.right = this.input[1])
            }),
            i.default.extend(i.default.Merge, i.default.AudioNode),
            (i.default.Merge.prototype.dispose = function() {
              return (
                this.input.forEach(function(t) {
                  t.dispose()
                }),
                i.default.AudioNode.prototype.dispose.call(this),
                (this.left = null),
                (this.right = null),
                this._merger.disconnect(),
                (this._merger = null),
                this
              )
            }),
            (e.default = i.default.Merge)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(35),
            n(4),
            i.default.supported &&
              (AudioBuffer.prototype.copyToChannel ||
                ((AudioBuffer.prototype.copyToChannel = function(t, e, n) {
                  var i = this.getChannelData(e)
                  n = n || 0
                  for (var r = 0; r < i.length; r++) i[r + n] = t[r]
                }),
                (AudioBuffer.prototype.copyFromChannel = function(t, e, n) {
                  var i = this.getChannelData(e)
                  n = n || 0
                  for (var r = 0; r < t.length; r++) t[r] = i[r + n]
                }))),
            (i.default.Buffer = function() {
              var t = i.default.defaults(
                arguments,
                ['url', 'onload', 'onerror'],
                i.default.Buffer
              )
              i.default.call(this),
                (this._buffer = null),
                (this._reversed = t.reverse),
                (this._xhr = null),
                (this.onload = i.default.noOp),
                t.url instanceof AudioBuffer ||
                t.url instanceof i.default.Buffer
                  ? (this.set(t.url), this.loaded || (this.onload = t.onload))
                  : i.default.isString(t.url) &&
                    this.load(t.url)
                      .then(t.onload)
                      .catch(t.onerror)
            }),
            i.default.extend(i.default.Buffer),
            (i.default.Buffer.defaults = {
              url: void 0,
              reverse: !1,
              onload: i.default.noOp,
              onerror: i.default.noOp
            }),
            (i.default.Buffer.prototype.set = function(t) {
              return (
                t instanceof i.default.Buffer
                  ? t.loaded
                    ? (this._buffer = t.get())
                    : (t.onload = function() {
                        this.set(t), this.onload(this)
                      }.bind(this))
                  : (this._buffer = t),
                this._reversed && this._reverse(),
                this
              )
            }),
            (i.default.Buffer.prototype.get = function() {
              return this._buffer
            }),
            (i.default.Buffer.prototype.load = function(t, e, n) {
              return new Promise(
                function(r, o) {
                  this._xhr = i.default.Buffer.load(
                    t,
                    function(t) {
                      ;(this._xhr = null),
                        this.set(t),
                        r(this),
                        this.onload(this),
                        e && e(this)
                    }.bind(this),
                    function(t) {
                      ;(this._xhr = null), o(t), n && n(t)
                    }.bind(this)
                  )
                }.bind(this)
              )
            }),
            (i.default.Buffer.prototype.dispose = function() {
              return (
                i.default.prototype.dispose.call(this),
                (this._buffer = null),
                this._xhr &&
                  (i.default.Buffer._removeFromDownloadQueue(this._xhr),
                  this._xhr.abort(),
                  (this._xhr = null)),
                this
              )
            }),
            Object.defineProperty(i.default.Buffer.prototype, 'loaded', {
              get: function() {
                return this.length > 0
              }
            }),
            Object.defineProperty(i.default.Buffer.prototype, 'duration', {
              get: function() {
                return this._buffer ? this._buffer.duration : 0
              }
            }),
            Object.defineProperty(i.default.Buffer.prototype, 'length', {
              get: function() {
                return this._buffer ? this._buffer.length : 0
              }
            }),
            Object.defineProperty(
              i.default.Buffer.prototype,
              'numberOfChannels',
              {
                get: function() {
                  return this._buffer ? this._buffer.numberOfChannels : 0
                }
              }
            ),
            (i.default.Buffer.prototype.fromArray = function(t) {
              var e = t[0].length > 0,
                n = e ? t.length : 1,
                i = e ? t[0].length : t.length,
                r = this.context.createBuffer(n, i, this.context.sampleRate)
              e || 1 !== n || (t = [t])
              for (var o = 0; o < n; o++) r.copyToChannel(t[o], o)
              return (this._buffer = r), this
            }),
            (i.default.Buffer.prototype.toMono = function(t) {
              if (i.default.isNumber(t)) this.fromArray(this.toArray(t))
              else {
                for (
                  var e = new Float32Array(this.length),
                    n = this.numberOfChannels,
                    r = 0;
                  r < n;
                  r++
                )
                  for (var o = this.toArray(r), a = 0; a < o.length; a++)
                    e[a] += o[a]
                ;(e = e.map(function(t) {
                  return t / n
                })),
                  this.fromArray(e)
              }
              return this
            }),
            (i.default.Buffer.prototype.toArray = function(t) {
              if (i.default.isNumber(t)) return this.getChannelData(t)
              if (1 === this.numberOfChannels) return this.toArray(0)
              for (var e = [], n = 0; n < this.numberOfChannels; n++)
                e[n] = this.getChannelData(n)
              return e
            }),
            (i.default.Buffer.prototype.getChannelData = function(t) {
              return this._buffer.getChannelData(t)
            }),
            (i.default.Buffer.prototype.slice = function(t, e) {
              e = i.default.defaultArg(e, this.duration)
              for (
                var n = Math.floor(this.context.sampleRate * this.toSeconds(t)),
                  r = Math.floor(this.context.sampleRate * this.toSeconds(e)),
                  o = [],
                  a = 0;
                a < this.numberOfChannels;
                a++
              )
                o[a] = this.toArray(a).slice(n, r)
              return new i.default.Buffer().fromArray(o)
            }),
            (i.default.Buffer.prototype._reverse = function() {
              if (this.loaded)
                for (var t = 0; t < this.numberOfChannels; t++)
                  Array.prototype.reverse.call(this.getChannelData(t))
              return this
            }),
            Object.defineProperty(i.default.Buffer.prototype, 'reverse', {
              get: function() {
                return this._reversed
              },
              set: function(t) {
                this._reversed !== t && ((this._reversed = t), this._reverse())
              }
            }),
            i.default.Emitter.mixin(i.default.Buffer),
            (i.default.Buffer._downloadQueue = []),
            (i.default.Buffer.baseUrl = ''),
            (i.default.Buffer.fromArray = function(t) {
              return new i.default.Buffer().fromArray(t)
            }),
            (i.default.Buffer.fromUrl = function(t) {
              var e = new i.default.Buffer()
              return e.load(t).then(function() {
                return e
              })
            }),
            (i.default.Buffer._removeFromDownloadQueue = function(t) {
              var e = i.default.Buffer._downloadQueue.indexOf(t)
              ;-1 !== e && i.default.Buffer._downloadQueue.splice(e, 1)
            }),
            (i.default.Buffer.load = function(t, e, n) {
              e = i.default.defaultArg(e, i.default.noOp)
              var r = t.match(/\[(.+\|?)+\]$/)
              if (r) {
                for (
                  var o = r[1].split('|'), a = o[0], s = 0;
                  s < o.length;
                  s++
                )
                  if (i.default.Buffer.supportsType(o[s])) {
                    a = o[s]
                    break
                  }
                t = t.replace(r[0], a)
              }
              function u(t) {
                if (
                  (i.default.Buffer._removeFromDownloadQueue(f),
                  i.default.Buffer.emit('error', t),
                  !n)
                )
                  throw t
                n(t)
              }
              function l() {
                for (
                  var t = 0, e = 0;
                  e < i.default.Buffer._downloadQueue.length;
                  e++
                )
                  t += i.default.Buffer._downloadQueue[e].progress
                i.default.Buffer.emit(
                  'progress',
                  t / i.default.Buffer._downloadQueue.length
                )
              }
              var f = new XMLHttpRequest()
              return (
                f.open('GET', i.default.Buffer.baseUrl + t, !0),
                (f.responseType = 'arraybuffer'),
                (f.progress = 0),
                i.default.Buffer._downloadQueue.push(f),
                f.addEventListener('load', function() {
                  200 === f.status
                    ? i.default.context
                        .decodeAudioData(f.response)
                        .then(function(t) {
                          ;(f.progress = 1),
                            l(),
                            e(t),
                            i.default.Buffer._removeFromDownloadQueue(f),
                            0 === i.default.Buffer._downloadQueue.length &&
                              i.default.Buffer.emit('load')
                        })
                        .catch(function() {
                          i.default.Buffer._removeFromDownloadQueue(f),
                            u('Tone.Buffer: could not decode audio data: ' + t)
                        })
                    : u('Tone.Buffer: could not locate file: ' + t)
                }),
                f.addEventListener('error', u),
                f.addEventListener('progress', function(t) {
                  t.lengthComputable &&
                    ((f.progress = t.loaded / t.total * 0.95), l())
                }),
                f.send(),
                f
              )
            }),
            (i.default.Buffer.cancelDownloads = function() {
              return (
                i.default.Buffer._downloadQueue.slice().forEach(function(t) {
                  i.default.Buffer._removeFromDownloadQueue(t), t.abort()
                }),
                i.default.Buffer
              )
            }),
            (i.default.Buffer.supportsType = function(t) {
              var e = t.split('.')
              return (
                (e = e[e.length - 1]),
                '' !== document.createElement('audio').canPlayType('audio/' + e)
              )
            }),
            (i.default.loaded = function() {
              var t, e
              function n() {
                i.default.Buffer.off('load', t),
                  i.default.Buffer.off('error', e)
              }
              return new Promise(function(n, r) {
                ;(t = function() {
                  n()
                }),
                  (e = function() {
                    r()
                  }),
                  i.default.Buffer.on('load', t),
                  i.default.Buffer.on('error', e)
              })
                .then(n)
                .catch(function(t) {
                  throw (n(), new Error(t))
                })
            }),
            (e.default = i.default.Buffer)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(17),
            n(26),
            n(1),
            n(2),
            n(22),
            n(4),
            n(28),
            (i.default.LFO = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'min', 'max'],
                i.default.LFO
              )
              i.default.AudioNode.call(this),
                (this._oscillator = new i.default.Oscillator({
                  frequency: t.frequency,
                  type: t.type
                })),
                (this.frequency = this._oscillator.frequency),
                (this.amplitude = this._oscillator.volume),
                (this.amplitude.units = i.default.Type.NormalRange),
                (this.amplitude.value = t.amplitude),
                (this._stoppedSignal = new i.default.Signal(
                  0,
                  i.default.Type.AudioRange
                )),
                (this._zeros = new i.default.Zero()),
                (this._stoppedValue = 0),
                (this._a2g = new i.default.AudioToGain()),
                (this._scaler = this.output = new i.default.Scale(
                  t.min,
                  t.max
                )),
                (this._units = i.default.Type.Default),
                (this.units = t.units),
                this._oscillator.chain(this._a2g, this._scaler),
                this._zeros.connect(this._a2g),
                this._stoppedSignal.connect(this._a2g),
                this._readOnly(['amplitude', 'frequency']),
                (this.phase = t.phase)
            }),
            i.default.extend(i.default.LFO, i.default.AudioNode),
            (i.default.LFO.defaults = {
              type: 'sine',
              min: 0,
              max: 1,
              phase: 0,
              frequency: '4n',
              amplitude: 1,
              units: i.default.Type.Default
            }),
            (i.default.LFO.prototype.start = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._stoppedSignal.setValueAtTime(0, t),
                this._oscillator.start(t),
                this
              )
            }),
            (i.default.LFO.prototype.stop = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
                this._oscillator.stop(t),
                this
              )
            }),
            (i.default.LFO.prototype.sync = function() {
              return (
                this._oscillator.sync(), this._oscillator.syncFrequency(), this
              )
            }),
            (i.default.LFO.prototype.unsync = function() {
              return (
                this._oscillator.unsync(),
                this._oscillator.unsyncFrequency(),
                this
              )
            }),
            Object.defineProperty(i.default.LFO.prototype, 'min', {
              get: function() {
                return this._toUnits(this._scaler.min)
              },
              set: function(t) {
                ;(t = this._fromUnits(t)), (this._scaler.min = t)
              }
            }),
            Object.defineProperty(i.default.LFO.prototype, 'max', {
              get: function() {
                return this._toUnits(this._scaler.max)
              },
              set: function(t) {
                ;(t = this._fromUnits(t)), (this._scaler.max = t)
              }
            }),
            Object.defineProperty(i.default.LFO.prototype, 'type', {
              get: function() {
                return this._oscillator.type
              },
              set: function(t) {
                ;(this._oscillator.type = t),
                  (this._stoppedValue = this._oscillator._getInitialValue()),
                  (this._stoppedSignal.value = this._stoppedValue)
              }
            }),
            Object.defineProperty(i.default.LFO.prototype, 'phase', {
              get: function() {
                return this._oscillator.phase
              },
              set: function(t) {
                ;(this._oscillator.phase = t),
                  (this._stoppedValue = this._oscillator._getInitialValue()),
                  (this._stoppedSignal.value = this._stoppedValue)
              }
            }),
            Object.defineProperty(i.default.LFO.prototype, 'units', {
              get: function() {
                return this._units
              },
              set: function(t) {
                var e = this.min,
                  n = this.max
                ;(this._units = t), (this.min = e), (this.max = n)
              }
            }),
            Object.defineProperty(i.default.LFO.prototype, 'state', {
              get: function() {
                return this._oscillator.state
              }
            }),
            (i.default.LFO.prototype.connect = function(t) {
              return (
                (t.constructor !== i.default.Signal &&
                  t.constructor !== i.default.Param) ||
                  ((this.convert = t.convert), (this.units = t.units)),
                i.default.SignalBase.prototype.connect.apply(this, arguments),
                this
              )
            }),
            (i.default.LFO.prototype._fromUnits =
              i.default.Param.prototype._fromUnits),
            (i.default.LFO.prototype._toUnits =
              i.default.Param.prototype._toUnits),
            (i.default.LFO.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable(['amplitude', 'frequency']),
                this._oscillator.dispose(),
                (this._oscillator = null),
                this._stoppedSignal.dispose(),
                (this._stoppedSignal = null),
                this._zeros.dispose(),
                (this._zeros = null),
                this._scaler.dispose(),
                (this._scaler = null),
                this._a2g.dispose(),
                (this._a2g = null),
                (this.frequency = null),
                (this.amplitude = null),
                this
              )
            }),
            (e.default = i.default.LFO)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(29),
            n(90),
            n(2),
            n(3),
            (i.default.Subtract = function(t) {
              i.default.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._sum = this.input[0] = this.output = new i.default.Gain()),
                (this._neg = new i.default.Negate()),
                (this._param = this.input[1] = new i.default.Signal(t)),
                this._param.chain(this._neg, this._sum)
            }),
            i.default.extend(i.default.Subtract, i.default.Signal),
            (i.default.Subtract.prototype.dispose = function() {
              return (
                i.default.Signal.prototype.dispose.call(this),
                this._neg.dispose(),
                (this._neg = null),
                this._sum.disconnect(),
                (this._sum = null),
                this
              )
            }),
            (e.default = i.default.Subtract)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(4),
            n(1),
            n(24),
            (i.default.Param = function() {
              var t = i.default.defaults(
                arguments,
                ['param', 'units', 'convert'],
                i.default.Param
              )
              i.default.AudioNode.call(this, t),
                (this._param = this.input = t.param),
                (this.units = t.units),
                (this.convert = t.convert),
                (this.overridden = !1),
                (this._events = new i.default.Timeline(1e3)),
                i.default.isDefined(t.value) &&
                  this._param &&
                  this.setValueAtTime(t.value, 0)
            }),
            i.default.extend(i.default.Param, i.default.AudioNode),
            (i.default.Param.defaults = {
              units: i.default.Type.Default,
              convert: !0,
              param: void 0
            }),
            Object.defineProperty(i.default.Param.prototype, 'value', {
              get: function() {
                var t = this.now()
                return this._toUnits(this.getValueAtTime(t))
              },
              set: function(t) {
                ;(this._initialValue = this._fromUnits(t)),
                  this.cancelScheduledValues(this.now()),
                  this.setValueAtTime(t, this.now())
              }
            }),
            Object.defineProperty(i.default.Param.prototype, 'minValue', {
              get: function() {
                return this.units === i.default.Type.Time ||
                  this.units === i.default.Type.Frequency ||
                  this.units === i.default.Type.NormalRange ||
                  this.units === i.default.Type.Positive ||
                  this.units === i.default.Type.BPM
                  ? 0
                  : this.units === i.default.Type.AudioRange
                    ? -1
                    : this.units === i.default.Type.Decibels
                      ? -1 / 0
                      : this._param.minValue
              }
            }),
            Object.defineProperty(i.default.Param.prototype, 'maxValue', {
              get: function() {
                return this.units === i.default.Type.NormalRange ||
                  this.units === i.default.Type.AudioRange
                  ? 1
                  : this._param.maxValue
              }
            }),
            (i.default.Param.prototype._fromUnits = function(t) {
              if (
                (!this.convert && !i.default.isUndef(this.convert)) ||
                this.overridden
              )
                return t
              switch (this.units) {
                case i.default.Type.Time:
                  return this.toSeconds(t)
                case i.default.Type.Frequency:
                  return this.toFrequency(t)
                case i.default.Type.Decibels:
                  return i.default.dbToGain(t)
                case i.default.Type.NormalRange:
                  return Math.min(Math.max(t, 0), 1)
                case i.default.Type.AudioRange:
                  return Math.min(Math.max(t, -1), 1)
                case i.default.Type.Positive:
                  return Math.max(t, 0)
                default:
                  return t
              }
            }),
            (i.default.Param.prototype._toUnits = function(t) {
              if (!this.convert && !i.default.isUndef(this.convert)) return t
              switch (this.units) {
                case i.default.Type.Decibels:
                  return i.default.gainToDb(t)
                default:
                  return t
              }
            }),
            (i.default.Param.prototype._minOutput = 1e-5),
            (i.default.Param.AutomationType = {
              Linear: 'linearRampToValueAtTime',
              Exponential: 'exponentialRampToValueAtTime',
              Target: 'setTargetAtTime',
              SetValue: 'setValueAtTime',
              Cancel: 'cancelScheduledValues'
            }),
            (i.default.Param.prototype.setValueAtTime = function(t, e) {
              return (
                (e = this.toSeconds(e)),
                (t = this._fromUnits(t)),
                this._events.add({
                  type: i.default.Param.AutomationType.SetValue,
                  value: t,
                  time: e
                }),
                this.log(i.default.Param.AutomationType.SetValue, t, e),
                this._param.setValueAtTime(t, e),
                this
              )
            }),
            (i.default.Param.prototype.getValueAtTime = function(t) {
              t = this.toSeconds(t)
              var e = this._events.getAfter(t),
                n = this._events.get(t),
                r = i.default.defaultArg(
                  this._initialValue,
                  this._param.defaultValue
                ),
                o = r
              if (null === n) o = r
              else if (n.type === i.default.Param.AutomationType.Target) {
                var a,
                  s = this._events.getBefore(n.time)
                ;(a = null === s ? r : s.value),
                  (o = this._exponentialApproach(
                    n.time,
                    a,
                    n.value,
                    n.constant,
                    t
                  ))
              } else
                o =
                  null === e
                    ? n.value
                    : e.type === i.default.Param.AutomationType.Linear
                      ? this._linearInterpolate(
                          n.time,
                          n.value,
                          e.time,
                          e.value,
                          t
                        )
                      : e.type === i.default.Param.AutomationType.Exponential
                        ? this._exponentialInterpolate(
                            n.time,
                            n.value,
                            e.time,
                            e.value,
                            t
                          )
                        : n.value
              return o
            }),
            (i.default.Param.prototype.setRampPoint = function(t) {
              t = this.toSeconds(t)
              var e = this.getValueAtTime(t)
              return (
                this.cancelAndHoldAtTime(t),
                0 === e && (e = this._minOutput),
                this.setValueAtTime(this._toUnits(e), t),
                this
              )
            }),
            (i.default.Param.prototype.linearRampToValueAtTime = function(
              t,
              e
            ) {
              return (
                (t = this._fromUnits(t)),
                (e = this.toSeconds(e)),
                this._events.add({
                  type: i.default.Param.AutomationType.Linear,
                  value: t,
                  time: e
                }),
                this.log(i.default.Param.AutomationType.Linear, t, e),
                this._param.linearRampToValueAtTime(t, e),
                this
              )
            }),
            (i.default.Param.prototype.exponentialRampToValueAtTime = function(
              t,
              e
            ) {
              return (
                (t = this._fromUnits(t)),
                (t = Math.max(this._minOutput, t)),
                (e = this.toSeconds(e)),
                this._events.add({
                  type: i.default.Param.AutomationType.Exponential,
                  time: e,
                  value: t
                }),
                this.log(i.default.Param.AutomationType.Exponential, t, e),
                this._param.exponentialRampToValueAtTime(t, e),
                this
              )
            }),
            (i.default.Param.prototype.exponentialRampTo = function(t, e, n) {
              return (
                (n = this.toSeconds(n)),
                this.setRampPoint(n),
                this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)),
                this
              )
            }),
            (i.default.Param.prototype.linearRampTo = function(t, e, n) {
              return (
                (n = this.toSeconds(n)),
                this.setRampPoint(n),
                this.linearRampToValueAtTime(t, n + this.toSeconds(e)),
                this
              )
            }),
            (i.default.Param.prototype.targetRampTo = function(t, e, n) {
              return (
                (n = this.toSeconds(n)),
                this.setRampPoint(n),
                this.exponentialApproachValueAtTime(t, n, e),
                this
              )
            }),
            (i.default.Param.prototype.exponentialApproachValueAtTime = function(
              t,
              e,
              n
            ) {
              var i = Math.log(this.toSeconds(n) + 1) / Math.log(200)
              return (
                (e = this.toSeconds(e)),
                this.setTargetAtTime(t, e, i),
                this.cancelAndHoldAtTime(e + 0.9 * n),
                this.linearRampToValueAtTime(t, e + n),
                this
              )
            }),
            (i.default.Param.prototype.setTargetAtTime = function(t, e, n) {
              if (((t = this._fromUnits(t)), n <= 0))
                throw new Error('timeConstant must be greater than 0')
              return (
                (e = this.toSeconds(e)),
                this._events.add({
                  type: i.default.Param.AutomationType.Target,
                  value: t,
                  time: e,
                  constant: n
                }),
                this.log(i.default.Param.AutomationType.Target, t, e, n),
                this._param.setTargetAtTime(t, e, n),
                this
              )
            }),
            (i.default.Param.prototype.setValueCurveAtTime = function(
              t,
              e,
              n,
              r
            ) {
              ;(r = i.default.defaultArg(r, 1)),
                (n = this.toSeconds(n)),
                (e = this.toSeconds(e)),
                this.setValueAtTime(t[0] * r, e)
              for (var o = n / (t.length - 1), a = 1; a < t.length; a++)
                this.linearRampToValueAtTime(t[a] * r, e + a * o)
              return this
            }),
            (i.default.Param.prototype.cancelScheduledValues = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._events.cancel(t),
                this._param.cancelScheduledValues(t),
                this.log(i.default.Param.AutomationType.Cancel, t),
                this
              )
            }),
            (i.default.Param.prototype.cancelAndHoldAtTime = function(t) {
              t = this.toSeconds(t)
              var e = this.getValueAtTime(t)
              this.log('cancelAndHoldAtTime', t, 'value=' + e),
                this._param.cancelScheduledValues(t)
              var n = this._events.get(t),
                r = this._events.getAfter(t)
              return (
                n && n.time === t
                  ? r
                    ? this._events.cancel(r.time)
                    : this._events.cancel(t + this.sampleTime)
                  : r &&
                    (this._events.cancel(r.time),
                    r.type === i.default.Param.AutomationType.Linear
                      ? this.linearRampToValueAtTime(e, t)
                      : r.type === i.default.Param.AutomationType.Exponential &&
                        this.exponentialRampToValueAtTime(e, t)),
                this._events.add({
                  type: i.default.Param.AutomationType.SetValue,
                  value: e,
                  time: t
                }),
                this._param.setValueAtTime(e, t),
                this
              )
            }),
            (i.default.Param.prototype.rampTo = function(t, e, n) {
              return (
                (e = i.default.defaultArg(e, 0.1)),
                this.units === i.default.Type.Frequency ||
                this.units === i.default.Type.BPM ||
                this.units === i.default.Type.Decibels
                  ? this.exponentialRampTo(t, e, n)
                  : this.linearRampTo(t, e, n),
                this
              )
            }),
            (i.default.Param.prototype._exponentialApproach = function(
              t,
              e,
              n,
              i,
              r
            ) {
              return n + (e - n) * Math.exp(-(r - t) / i)
            }),
            (i.default.Param.prototype._linearInterpolate = function(
              t,
              e,
              n,
              i,
              r
            ) {
              return e + (r - t) / (n - t) * (i - e)
            }),
            (i.default.Param.prototype._exponentialInterpolate = function(
              t,
              e,
              n,
              i,
              r
            ) {
              return e * Math.pow(i / e, (r - t) / (n - t))
            }),
            (i.default.Param.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                (this._param = null),
                (this._events = null),
                this
              )
            }),
            (e.default = i.default.Param)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(19),
            n(10),
            n(23),
            (i.default.StereoEffect = function() {
              i.default.AudioNode.call(this)
              var t = i.default.defaults(arguments, ['wet'], i.default.Effect)
              this.createInsOuts(1, 1),
                (this._dryWet = new i.default.CrossFade(t.wet)),
                (this.wet = this._dryWet.fade),
                (this._split = new i.default.Split()),
                (this.effectSendL = this._split.left),
                (this.effectSendR = this._split.right),
                (this._merge = new i.default.Merge()),
                (this.effectReturnL = this._merge.left),
                (this.effectReturnR = this._merge.right),
                i.default.connect(this.input, this._split),
                i.default.connect(this.input, this._dryWet, 0, 0),
                this._merge.connect(this._dryWet, 0, 1),
                this._dryWet.connect(this.output),
                this._readOnly(['wet'])
            }),
            i.default.extend(i.default.StereoEffect, i.default.Effect),
            (i.default.StereoEffect.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._dryWet.dispose(),
                (this._dryWet = null),
                this._split.dispose(),
                (this._split = null),
                this._merge.dispose(),
                (this._merge = null),
                (this.effectSendL = null),
                (this.effectSendR = null),
                (this.effectReturnL = null),
                (this.effectReturnR = null),
                this._writable(['wet']),
                (this.wet = null),
                this
              )
            }),
            (e.default = i.default.StereoEffect)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(83),
            n(4),
            n(24),
            n(35),
            n(3),
            n(81),
            n(80),
            n(56),
            (i.default.Transport = function() {
              i.default.Emitter.call(this),
                i.default.getContext(
                  function() {
                    ;(this.loop = !1),
                      (this._loopStart = 0),
                      (this._loopEnd = 0),
                      (this._ppq = r.defaults.PPQ),
                      (this._clock = new i.default.Clock({
                        callback: this._processTick.bind(this),
                        frequency: 0
                      })),
                      this._bindClockEvents(),
                      (this.bpm = this._clock.frequency),
                      (this.bpm._toUnits = this._toUnits.bind(this)),
                      (this.bpm._fromUnits = this._fromUnits.bind(this)),
                      (this.bpm.units = i.default.Type.BPM),
                      (this.bpm.value = r.defaults.bpm),
                      this._readOnly('bpm'),
                      (this._timeSignature = r.defaults.timeSignature),
                      (this._scheduledEvents = {}),
                      (this._timeline = new i.default.Timeline()),
                      (this._repeatedEvents = new i.default.IntervalTimeline()),
                      (this._syncedSignals = []),
                      (this._swingTicks = r.defaults.PPQ / 2),
                      (this._swingAmount = 0),
                      (this.context.transport = this)
                  }.bind(this)
                )
            }),
            i.default.extend(i.default.Transport, i.default.Emitter),
            (i.default.Transport.defaults = {
              bpm: 120,
              swing: 0,
              swingSubdivision: '8n',
              timeSignature: 4,
              loopStart: 0,
              loopEnd: '4m',
              PPQ: 192
            }),
            (i.default.Transport.prototype.isTransport = !0),
            (i.default.Transport.prototype._processTick = function(t, e) {
              if (
                this._swingAmount > 0 &&
                e % this._ppq != 0 &&
                e % (2 * this._swingTicks) != 0
              ) {
                var n = (e % (2 * this._swingTicks)) / (2 * this._swingTicks),
                  r = Math.sin(n * Math.PI) * this._swingAmount
                t += i.default.Ticks(2 * this._swingTicks / 3).toSeconds() * r
              }
              this.loop &&
                e >= this._loopEnd &&
                (this.emit('loopEnd', t),
                this._clock.setTicksAtTime(this._loopStart, t),
                (e = this._loopStart),
                this.emit('loopStart', t, this._clock.getSecondsAtTime(t)),
                this.emit('loop', t)),
                this._timeline.forEachAtTime(e, function(e) {
                  e.invoke(t)
                })
            }),
            (i.default.Transport.prototype.schedule = function(t, e) {
              var n = new i.default.TransportEvent(this, {
                time: i.default.TransportTime(e),
                callback: t
              })
              return this._addEvent(n, this._timeline)
            }),
            (i.default.Transport.prototype.scheduleRepeat = function(
              t,
              e,
              n,
              r
            ) {
              var o = new i.default.TransportRepeatEvent(this, {
                callback: t,
                interval: i.default.Time(e),
                time: i.default.TransportTime(n),
                duration: i.default.Time(i.default.defaultArg(r, 1 / 0))
              })
              return this._addEvent(o, this._repeatedEvents)
            }),
            (i.default.Transport.prototype.scheduleOnce = function(t, e) {
              var n = new i.default.TransportEvent(this, {
                time: i.default.TransportTime(e),
                callback: t,
                once: !0
              })
              return this._addEvent(n, this._timeline)
            }),
            (i.default.Transport.prototype.clear = function(t) {
              if (this._scheduledEvents.hasOwnProperty(t)) {
                var e = this._scheduledEvents[t.toString()]
                e.timeline.remove(e.event),
                  e.event.dispose(),
                  delete this._scheduledEvents[t.toString()]
              }
              return this
            }),
            (i.default.Transport.prototype._addEvent = function(t, e) {
              return (
                (this._scheduledEvents[t.id.toString()] = {
                  event: t,
                  timeline: e
                }),
                e.add(t),
                t.id
              )
            }),
            (i.default.Transport.prototype.cancel = function(t) {
              return (
                (t = i.default.defaultArg(t, 0)),
                (t = this.toTicks(t)),
                this._timeline.forEachFrom(
                  t,
                  function(t) {
                    this.clear(t.id)
                  }.bind(this)
                ),
                this._repeatedEvents.forEachFrom(
                  t,
                  function(t) {
                    this.clear(t.id)
                  }.bind(this)
                ),
                this
              )
            }),
            (i.default.Transport.prototype._bindClockEvents = function() {
              this._clock.on(
                'start',
                function(t, e) {
                  ;(e = i.default.Ticks(e).toSeconds()),
                    this.emit('start', t, e)
                }.bind(this)
              ),
                this._clock.on(
                  'stop',
                  function(t) {
                    this.emit('stop', t)
                  }.bind(this)
                ),
                this._clock.on(
                  'pause',
                  function(t) {
                    this.emit('pause', t)
                  }.bind(this)
                )
            }),
            Object.defineProperty(i.default.Transport.prototype, 'state', {
              get: function() {
                return this._clock.getStateAtTime(this.now())
              }
            }),
            (i.default.Transport.prototype.start = function(t, e) {
              return (
                i.default.isDefined(e) && (e = this.toTicks(e)),
                this._clock.start(t, e),
                this
              )
            }),
            (i.default.Transport.prototype.stop = function(t) {
              return this._clock.stop(t), this
            }),
            (i.default.Transport.prototype.pause = function(t) {
              return this._clock.pause(t), this
            }),
            (i.default.Transport.prototype.toggle = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._clock.getStateAtTime(t) !== i.default.State.Started
                  ? this.start(t)
                  : this.stop(t),
                this
              )
            }),
            Object.defineProperty(
              i.default.Transport.prototype,
              'timeSignature',
              {
                get: function() {
                  return this._timeSignature
                },
                set: function(t) {
                  i.default.isArray(t) && (t = t[0] / t[1] * 4),
                    (this._timeSignature = t)
                }
              }
            ),
            Object.defineProperty(i.default.Transport.prototype, 'loopStart', {
              get: function() {
                return i.default.Ticks(this._loopStart).toSeconds()
              },
              set: function(t) {
                this._loopStart = this.toTicks(t)
              }
            }),
            Object.defineProperty(i.default.Transport.prototype, 'loopEnd', {
              get: function() {
                return i.default.Ticks(this._loopEnd).toSeconds()
              },
              set: function(t) {
                this._loopEnd = this.toTicks(t)
              }
            }),
            (i.default.Transport.prototype.setLoopPoints = function(t, e) {
              return (this.loopStart = t), (this.loopEnd = e), this
            }),
            Object.defineProperty(i.default.Transport.prototype, 'swing', {
              get: function() {
                return this._swingAmount
              },
              set: function(t) {
                this._swingAmount = t
              }
            }),
            Object.defineProperty(
              i.default.Transport.prototype,
              'swingSubdivision',
              {
                get: function() {
                  return i.default.Ticks(this._swingTicks).toNotation()
                },
                set: function(t) {
                  this._swingTicks = this.toTicks(t)
                }
              }
            ),
            Object.defineProperty(i.default.Transport.prototype, 'position', {
              get: function() {
                var t = this.now(),
                  e = this._clock.getTicksAtTime(t)
                return i.default.Ticks(e).toBarsBeatsSixteenths()
              },
              set: function(t) {
                var e = this.toTicks(t)
                this.ticks = e
              }
            }),
            Object.defineProperty(i.default.Transport.prototype, 'seconds', {
              get: function() {
                return this._clock.seconds
              },
              set: function(t) {
                var e = this.now(),
                  n = this.bpm.timeToTicks(t, e)
                this.ticks = n
              }
            }),
            Object.defineProperty(i.default.Transport.prototype, 'progress', {
              get: function() {
                if (this.loop) {
                  var t = this.now()
                  return (
                    (this._clock.getTicksAtTime(t) - this._loopStart) /
                    (this._loopEnd - this._loopStart)
                  )
                }
                return 0
              }
            }),
            Object.defineProperty(i.default.Transport.prototype, 'ticks', {
              get: function() {
                return this._clock.ticks
              },
              set: function(t) {
                if (this._clock.ticks !== t) {
                  var e = this.now()
                  this.state === i.default.State.Started
                    ? (this.emit('stop', e),
                      this._clock.setTicksAtTime(t, e),
                      this.emit('start', e, this.seconds))
                    : this._clock.setTicksAtTime(t, e)
                }
              }
            }),
            (i.default.Transport.prototype.getTicksAtTime = function(t) {
              return Math.round(this._clock.getTicksAtTime(t))
            }),
            (i.default.Transport.prototype.getSecondsAtTime = function(t) {
              return this._clock.getSecondsAtTime(t)
            }),
            Object.defineProperty(i.default.Transport.prototype, 'PPQ', {
              get: function() {
                return this._ppq
              },
              set: function(t) {
                var e = this.bpm.value
                ;(this._ppq = t), (this.bpm.value = e)
              }
            }),
            (i.default.Transport.prototype._fromUnits = function(t) {
              return 1 / (60 / t / this.PPQ)
            }),
            (i.default.Transport.prototype._toUnits = function(t) {
              return t / this.PPQ * 60
            }),
            (i.default.Transport.prototype.nextSubdivision = function(t) {
              if (
                ((t = this.toTicks(t)), this.state !== i.default.State.Started)
              )
                return 0
              var e = this.now(),
                n = t - this.getTicksAtTime(e) % t
              return this._clock.nextTickTime(n, e)
            }),
            (i.default.Transport.prototype.syncSignal = function(t, e) {
              if (!e) {
                var n = this.now()
                e =
                  0 !== t.getValueAtTime(n)
                    ? t.getValueAtTime(n) / this.bpm.getValueAtTime(n)
                    : 0
              }
              var r = new i.default.Gain(e)
              return (
                this.bpm.chain(r, t._param),
                this._syncedSignals.push({
                  ratio: r,
                  signal: t,
                  initial: t.value
                }),
                (t.value = 0),
                this
              )
            }),
            (i.default.Transport.prototype.unsyncSignal = function(t) {
              for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
                var n = this._syncedSignals[e]
                n.signal === t &&
                  (n.ratio.dispose(),
                  (n.signal.value = n.initial),
                  this._syncedSignals.splice(e, 1))
              }
              return this
            }),
            (i.default.Transport.prototype.dispose = function() {
              return (
                i.default.Emitter.prototype.dispose.call(this),
                this._clock.dispose(),
                (this._clock = null),
                this._writable('bpm'),
                (this.bpm = null),
                this._timeline.dispose(),
                (this._timeline = null),
                this._repeatedEvents.dispose(),
                (this._repeatedEvents = null),
                this
              )
            })
          var r = i.default.Transport
          ;(i.default.Transport = new r()),
            i.default.Context.on('init', function(t) {
              t.transport && t.transport.isTransport
                ? (i.default.Transport = t.transport)
                : (i.default.Transport = new r())
            }),
            i.default.Context.on('close', function(t) {
              t.transport && t.transport.isTransport && t.transport.dispose()
            }),
            (e.default = i.default.Transport)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(6),
            n(16),
            n(64),
            (i.default.Oscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type'],
                i.default.Oscillator
              )
              i.default.Source.call(this, t),
                (this._oscillator = null),
                (this.frequency = new i.default.Signal(
                  t.frequency,
                  i.default.Type.Frequency
                )),
                (this.detune = new i.default.Signal(
                  t.detune,
                  i.default.Type.Cents
                )),
                (this._wave = null),
                (this._partials = t.partials),
                (this._partialCount = t.partialCount),
                (this._phase = t.phase),
                (this._type = t.type),
                t.partialCount &&
                  t.type !== i.default.Oscillator.Type.Custom &&
                  (this._type = this.baseType + t.partialCount.toString()),
                (this.phase = this._phase),
                this._readOnly(['frequency', 'detune'])
            }),
            i.default.extend(i.default.Oscillator, i.default.Source),
            (i.default.Oscillator.defaults = {
              type: 'sine',
              frequency: 440,
              detune: 0,
              phase: 0,
              partials: [],
              partialCount: 0
            }),
            (i.default.Oscillator.Type = {
              Sine: 'sine',
              Triangle: 'triangle',
              Sawtooth: 'sawtooth',
              Square: 'square',
              Custom: 'custom'
            }),
            (i.default.Oscillator.prototype._start = function(t) {
              this.log('start', t)
              var e = new i.default.OscillatorNode()
              ;(this._oscillator = e),
                this._wave
                  ? this._oscillator.setPeriodicWave(this._wave)
                  : (this._oscillator.type = this._type),
                this._oscillator.connect(this.output),
                this.frequency.connect(this._oscillator.frequency),
                this.detune.connect(this._oscillator.detune),
                (t = this.toSeconds(t)),
                this._oscillator.start(t)
            }),
            (i.default.Oscillator.prototype._stop = function(t) {
              return (
                this.log('stop', t),
                this._oscillator &&
                  ((t = this.toSeconds(t)), this._oscillator.stop(t)),
                this
              )
            }),
            (i.default.Oscillator.prototype.restart = function(t) {
              return (
                this._oscillator && this._oscillator.cancelStop(),
                this._state.cancel(this.toSeconds(t)),
                this
              )
            }),
            (i.default.Oscillator.prototype.syncFrequency = function() {
              return i.default.Transport.syncSignal(this.frequency), this
            }),
            (i.default.Oscillator.prototype.unsyncFrequency = function() {
              return i.default.Transport.unsyncSignal(this.frequency), this
            }),
            Object.defineProperty(i.default.Oscillator.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                var e = [
                  i.default.Oscillator.Type.Sine,
                  i.default.Oscillator.Type.Square,
                  i.default.Oscillator.Type.Triangle,
                  i.default.Oscillator.Type.Sawtooth
                ].includes(t)
                if (0 === this._phase && e)
                  (this._wave = null),
                    (this._partialCount = 0),
                    null !== this._oscillator && (this._oscillator.type = t)
                else {
                  var n = this._getRealImaginary(t, this._phase),
                    r = this.context.createPeriodicWave(n[0], n[1])
                  ;(this._wave = r),
                    null !== this._oscillator &&
                      this._oscillator.setPeriodicWave(this._wave)
                }
                this._type = t
              }
            }),
            Object.defineProperty(i.default.Oscillator.prototype, 'baseType', {
              get: function() {
                return this._type.replace(this.partialCount, '')
              },
              set: function(t) {
                this.partialCount &&
                this._type !== i.default.Oscillator.Type.Custom &&
                t !== i.default.Oscillator.Type.Custom
                  ? (this.type = t + this.partialCount)
                  : (this.type = t)
              }
            }),
            Object.defineProperty(
              i.default.Oscillator.prototype,
              'partialCount',
              {
                get: function() {
                  return this._partialCount
                },
                set: function(t) {
                  var e = this._type,
                    n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(
                      this._type
                    )
                  n && (e = n[1]),
                    this._type !== i.default.Oscillator.Type.Custom &&
                      (this.type = 0 === t ? e : e + t.toString())
                }
              }
            ),
            (i.default.Oscillator.prototype.get = function() {
              var t = i.default.prototype.get.apply(this, arguments)
              return (
                t.type !== i.default.Oscillator.Type.Custom &&
                  delete t.partials,
                t
              )
            }),
            (i.default.Oscillator.prototype._getRealImaginary = function(t, e) {
              var n = 2048,
                r = new Float32Array(n),
                o = new Float32Array(n),
                a = 1
              if (t === i.default.Oscillator.Type.Custom)
                (a = this._partials.length + 1),
                  (this._partialCount = this._partials.length),
                  (n = a)
              else {
                var s = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t)
                s
                  ? ((a = parseInt(s[2]) + 1),
                    (this._partialCount = parseInt(s[2])),
                    (t = s[1]),
                    (n = a = Math.max(a, 2)))
                  : (this._partialCount = 0),
                  (this._partials = [])
              }
              for (var u = 1; u < n; ++u) {
                var l,
                  f = 2 / (u * Math.PI)
                switch (t) {
                  case i.default.Oscillator.Type.Sine:
                    ;(l = u <= a ? 1 : 0), (this._partials[u - 1] = l)
                    break
                  case i.default.Oscillator.Type.Square:
                    ;(l = 1 & u ? 2 * f : 0), (this._partials[u - 1] = l)
                    break
                  case i.default.Oscillator.Type.Sawtooth:
                    ;(l = f * (1 & u ? 1 : -1)), (this._partials[u - 1] = l)
                    break
                  case i.default.Oscillator.Type.Triangle:
                    ;(l =
                      1 & u ? f * f * 2 * (((u - 1) >> 1) & 1 ? -1 : 1) : 0),
                      (this._partials[u - 1] = l)
                    break
                  case i.default.Oscillator.Type.Custom:
                    l = this._partials[u - 1]
                    break
                  default:
                    throw new TypeError('Tone.Oscillator: invalid type: ' + t)
                }
                0 !== l
                  ? ((r[u] = -l * Math.sin(e * u)),
                    (o[u] = l * Math.cos(e * u)))
                  : ((r[u] = 0), (o[u] = 0))
              }
              return [r, o]
            }),
            (i.default.Oscillator.prototype._inverseFFT = function(t, e, n) {
              for (var i = 0, r = t.length, o = 0; o < r; o++)
                i += t[o] * Math.cos(o * n) + e[o] * Math.sin(o * n)
              return i
            }),
            (i.default.Oscillator.prototype._getInitialValue = function() {
              for (
                var t = this._getRealImaginary(this._type, 0),
                  e = t[0],
                  n = t[1],
                  i = 0,
                  r = 2 * Math.PI,
                  o = 0;
                o < 8;
                o++
              )
                i = Math.max(this._inverseFFT(e, n, o / 8 * r), i)
              return -this._inverseFFT(e, n, this._phase) / i
            }),
            Object.defineProperty(i.default.Oscillator.prototype, 'partials', {
              get: function() {
                return this._partials
              },
              set: function(t) {
                ;(this._partials = t),
                  (this.type = i.default.Oscillator.Type.Custom)
              }
            }),
            Object.defineProperty(i.default.Oscillator.prototype, 'phase', {
              get: function() {
                return this._phase * (180 / Math.PI)
              },
              set: function(t) {
                ;(this._phase = t * Math.PI / 180), (this.type = this._type)
              }
            }),
            (i.default.Oscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                null !== this._oscillator &&
                  (this._oscillator.dispose(), (this._oscillator = null)),
                (this._wave = null),
                this._writable(['frequency', 'detune']),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                (this._partials = null),
                this
              )
            }),
            (e.default = i.default.Oscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(14),
            n(1),
            (i.default.Delay = function() {
              var t = i.default.defaults(
                arguments,
                ['delayTime', 'maxDelay'],
                i.default.Delay
              )
              i.default.AudioNode.call(this, t),
                (this._maxDelay = Math.max(
                  this.toSeconds(t.maxDelay),
                  this.toSeconds(t.delayTime)
                )),
                (this._delayNode = this.input = this.output = this.context.createDelay(
                  this._maxDelay
                )),
                (this.delayTime = new i.default.Param({
                  param: this._delayNode.delayTime,
                  units: i.default.Type.Time,
                  value: t.delayTime
                })),
                this._readOnly('delayTime')
            }),
            i.default.extend(i.default.Delay, i.default.AudioNode),
            (i.default.Delay.defaults = {maxDelay: 1, delayTime: 0}),
            Object.defineProperty(i.default.Delay.prototype, 'maxDelay', {
              get: function() {
                return this._maxDelay
              }
            }),
            (i.default.Delay.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._delayNode.disconnect(),
                (this._delayNode = null),
                this._writable('delayTime'),
                (this.delayTime = null),
                this
              )
            }),
            (e.default = i.default.Delay)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(3),
            n(1),
            (i.default.Split = function(t) {
              ;(t = i.default.defaultArg(t, 2)),
                i.default.AudioNode.call(this),
                this.createInsOuts(0, t),
                (this._splitter = this.input = this.context.createChannelSplitter(
                  t
                ))
              for (var e = 0; e < t; e++)
                (this.output[e] = new i.default.Gain()),
                  i.default.connect(this._splitter, this.output[e], e, 0),
                  (this.output[e].channelCount = 1),
                  (this.output[e].channelCountMode = 'explicit')
              ;(this.left = this.output[0]), (this.right = this.output[1])
            }),
            i.default.extend(i.default.Split, i.default.AudioNode),
            (i.default.Split.prototype.dispose = function() {
              return (
                this.output.forEach(function(t) {
                  t.dispose()
                }),
                i.default.AudioNode.prototype.dispose.call(this),
                this._splitter.disconnect(),
                (this.left = null),
                (this.right = null),
                (this._splitter = null),
                this
              )
            }),
            (e.default = i.default.Split)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0),
            r = (n(35),
            n(24),
            n(44),
            [
              'baseLatency',
              'destination',
              'currentTime',
              'sampleRate',
              'listener',
              'state'
            ]),
            o = [
              'suspend',
              'close',
              'resume',
              'getOutputTimestamp',
              'createMediaElementSource',
              'createMediaStreamSource',
              'createMediaStreamDestination',
              'createBuffer',
              'decodeAudioData',
              'createBufferSource',
              'createConstantSource',
              'createGain',
              'createDelay',
              'createBiquadFilter',
              'createIIRFilter',
              'createWaveShaper',
              'createPanner',
              'createConvolver',
              'createDynamicsCompressor',
              'createAnalyser',
              'createScriptProcessor',
              'createStereoPanner',
              'createOscillator',
              'createPeriodicWave',
              'createChannelSplitter',
              'createChannelMerger',
              'audioWorklet'
            ]
          ;(i.default.Context = function() {
            i.default.Emitter.call(this)
            var t = i.default.defaults(
              arguments,
              ['context'],
              i.default.Context
            )
            if (
              !t.context &&
              ((t.context = new i.default.global.AudioContext()), !t.context)
            )
              throw new Error(
                'could not create AudioContext. Possibly too many AudioContexts running already.'
              )
            for (this._context = t.context; this._context.rawContext; )
              this._context = this._context.rawContext
            r.forEach(
              function(t) {
                this._defineProperty(this._context, t)
              }.bind(this)
            ),
              o.forEach(
                function(t) {
                  this._defineMethod(this._context, t)
                }.bind(this)
              ),
              (this._latencyHint = t.latencyHint),
              (this._constants = {}),
              (this.lookAhead = t.lookAhead),
              (this._computedUpdateInterval = 0),
              (this._ticker = new a(
                this.emit.bind(this, 'tick'),
                t.clockSource,
                t.updateInterval
              )),
              (this._timeouts = new i.default.Timeline()),
              (this._timeoutIds = 0),
              this.on('tick', this._timeoutLoop.bind(this)),
              (this._context.onstatechange = function(t) {
                this.emit('statechange', t)
              }.bind(this))
          }),
            i.default.extend(i.default.Context, i.default.Emitter),
            i.default.Emitter.mixin(i.default.Context),
            (i.default.Context.defaults = {
              clockSource: 'worker',
              latencyHint: 'interactive',
              lookAhead: 0.1,
              updateInterval: 0.03
            }),
            (i.default.Context.prototype.isContext = !0),
            (i.default.Context.prototype._defineProperty = function(t, e) {
              i.default.isUndef(this[e]) &&
                Object.defineProperty(this, e, {
                  get: function() {
                    return t[e]
                  },
                  set: function(n) {
                    t[e] = n
                  }
                })
            }),
            (i.default.Context.prototype._defineMethod = function(t, e) {
              i.default.isUndef(this[e]) &&
                Object.defineProperty(this, e, {
                  get: function() {
                    return t[e].bind(t)
                  }
                })
            }),
            (i.default.Context.prototype.now = function() {
              return this._context.currentTime + this.lookAhead
            }),
            Object.defineProperty(i.default.Context.prototype, 'destination', {
              get: function() {
                return this.master ? this.master : this._context.destination
              }
            }),
            (i.default.Context.prototype.resume = function() {
              return 'suspended' === this._context.state &&
                this._context instanceof AudioContext
                ? this._context.resume()
                : Promise.resolve()
            }),
            (i.default.Context.prototype.close = function() {
              var t = Promise.resolve()
              return (
                this !== i.default.global.TONE_AUDIO_CONTEXT &&
                  (t = this.rawContext.close()),
                t.then(
                  function() {
                    i.default.Context.emit('close', this)
                  }.bind(this)
                )
              )
            }),
            (i.default.Context.prototype.getConstant = function(t) {
              if (this._constants[t]) return this._constants[t]
              for (
                var e = this._context.createBuffer(
                    1,
                    128,
                    this._context.sampleRate
                  ),
                  n = e.getChannelData(0),
                  i = 0;
                i < n.length;
                i++
              )
                n[i] = t
              var r = this._context.createBufferSource()
              return (
                (r.channelCount = 1),
                (r.channelCountMode = 'explicit'),
                (r.buffer = e),
                (r.loop = !0),
                r.start(0),
                (this._constants[t] = r),
                r
              )
            }),
            (i.default.Context.prototype._timeoutLoop = function() {
              for (
                var t = this.now();
                this._timeouts &&
                this._timeouts.length &&
                this._timeouts.peek().time <= t;

              )
                this._timeouts.shift().callback()
            }),
            (i.default.Context.prototype.setTimeout = function(t, e) {
              this._timeoutIds++
              var n = this.now()
              return (
                this._timeouts.add({
                  callback: t,
                  time: n + e,
                  id: this._timeoutIds
                }),
                this._timeoutIds
              )
            }),
            (i.default.Context.prototype.clearTimeout = function(t) {
              return (
                this._timeouts.forEach(function(e) {
                  e.id === t && this.remove(e)
                }),
                this
              )
            }),
            Object.defineProperty(
              i.default.Context.prototype,
              'updateInterval',
              {
                get: function() {
                  return this._ticker.updateInterval
                },
                set: function(t) {
                  this._ticker.updateInterval = t
                }
              }
            ),
            Object.defineProperty(i.default.Context.prototype, 'rawContext', {
              get: function() {
                return this._context
              }
            }),
            Object.defineProperty(i.default.Context.prototype, 'clockSource', {
              get: function() {
                return this._ticker.type
              },
              set: function(t) {
                this._ticker.type = t
              }
            }),
            Object.defineProperty(i.default.Context.prototype, 'latencyHint', {
              get: function() {
                return this._latencyHint
              },
              set: function(t) {
                var e = t
                if (((this._latencyHint = t), i.default.isString(t)))
                  switch (t) {
                    case 'interactive':
                      ;(e = 0.1), (this._context.latencyHint = t)
                      break
                    case 'playback':
                      ;(e = 0.8), (this._context.latencyHint = t)
                      break
                    case 'balanced':
                      ;(e = 0.25), (this._context.latencyHint = t)
                      break
                    case 'fastest':
                      ;(this._context.latencyHint = 'interactive'), (e = 0.01)
                  }
                ;(this.lookAhead = e), (this.updateInterval = e / 3)
              }
            }),
            (i.default.Context.prototype.dispose = function() {
              return this.close().then(
                function() {
                  for (var t in (i.default.Emitter.prototype.dispose.call(this),
                  this._ticker.dispose(),
                  (this._ticker = null),
                  this._timeouts.dispose(),
                  (this._timeouts = null),
                  this._constants))
                    this._constants[t].disconnect()
                  this._constants = null
                }.bind(this)
              )
            })
          var a = function(t, e, n) {
            ;(this._type = e),
              (this._updateInterval = n),
              (this._callback = i.default.defaultArg(t, i.default.noOp)),
              this._createClock()
          }
          if (
            ((a.Type = {
              Worker: 'worker',
              Timeout: 'timeout',
              Offline: 'offline'
            }),
            (a.prototype._createWorker = function() {
              i.default.global.URL =
                i.default.global.URL || i.default.global.webkitURL
              var t = new Blob([
                  'var timeoutTime = ' +
                    (1e3 * this._updateInterval).toFixed(1) +
                    ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"
                ]),
                e = URL.createObjectURL(t),
                n = new Worker(e)
              ;(n.onmessage = this._callback.bind(this)), (this._worker = n)
            }),
            (a.prototype._createTimeout = function() {
              this._timeout = setTimeout(
                function() {
                  this._createTimeout(), this._callback()
                }.bind(this),
                1e3 * this._updateInterval
              )
            }),
            (a.prototype._createClock = function() {
              if (this._type === a.Type.Worker)
                try {
                  this._createWorker()
                } catch (t) {
                  ;(this._type = a.Type.Timeout), this._createClock()
                }
              else this._type === a.Type.Timeout && this._createTimeout()
            }),
            Object.defineProperty(a.prototype, 'updateInterval', {
              get: function() {
                return this._updateInterval
              },
              set: function(t) {
                ;(this._updateInterval = Math.max(t, 128 / 44100)),
                  this._type === a.Type.Worker &&
                    this._worker.postMessage(Math.max(1e3 * t, 1))
              }
            }),
            Object.defineProperty(a.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                this._disposeClock(), (this._type = t), this._createClock()
              }
            }),
            (a.prototype._disposeClock = function() {
              this._timeout &&
                (clearTimeout(this._timeout), (this._timeout = null)),
                this._worker &&
                  (this._worker.terminate(),
                  (this._worker.onmessage = null),
                  (this._worker = null))
            }),
            (a.prototype.dispose = function() {
              this._disposeClock(), (this._callback = null)
            }),
            i.default.supported && !i.default.initialized)
          ) {
            if (
              (i.default.global.TONE_AUDIO_CONTEXT ||
                (i.default.global.TONE_AUDIO_CONTEXT = new i.default.Context()),
              (i.default.context = i.default.global.TONE_AUDIO_CONTEXT),
              !i.default.global.TONE_SILENCE_LOGGING)
            ) {
              var s = 'v'
              'dev' === i.default.version && (s = '')
              var u = ' * Tone.js ' + s + i.default.version + ' * '
              console.log('%c' + u, 'background: #000; color: #fff')
            }
          } else
            i.default.supported ||
              i.default.global.TONE_SILENCE_LOGGING ||
              console.warn('This browser does not support Tone.js')
          e.default = i.default.Context
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(4),
            n(40),
            (i.default.Instrument = function(t) {
              ;(t = i.default.defaultArg(t, i.default.Instrument.defaults)),
                i.default.AudioNode.call(this),
                (this._volume = this.output = new i.default.Volume(t.volume)),
                (this.volume = this._volume.volume),
                this._readOnly('volume'),
                (this._scheduledEvents = [])
            }),
            i.default.extend(i.default.Instrument, i.default.AudioNode),
            (i.default.Instrument.defaults = {volume: 0}),
            (i.default.Instrument.prototype.triggerAttack = i.default.noOp),
            (i.default.Instrument.prototype.triggerRelease = i.default.noOp),
            (i.default.Instrument.prototype.sync = function() {
              return (
                this._syncMethod('triggerAttack', 1),
                this._syncMethod('triggerRelease', 0),
                this
              )
            }),
            (i.default.Instrument.prototype._syncMethod = function(t, e) {
              var n = (this['_original_' + t] = this[t])
              this[t] = function() {
                var t = Array.prototype.slice.call(arguments),
                  r = t[e],
                  o = i.default.Transport.schedule(
                    function(i) {
                      ;(t[e] = i), n.apply(this, t)
                    }.bind(this),
                    r
                  )
                this._scheduledEvents.push(o)
              }.bind(this)
            }),
            (i.default.Instrument.prototype.unsync = function() {
              return (
                this._scheduledEvents.forEach(function(t) {
                  i.default.Transport.clear(t)
                }),
                (this._scheduledEvents = []),
                this._original_triggerAttack &&
                  ((this.triggerAttack = this._original_triggerAttack),
                  (this.triggerRelease = this._original_triggerRelease)),
                this
              )
            }),
            (i.default.Instrument.prototype.triggerAttackRelease = function(
              t,
              e,
              n,
              i
            ) {
              return (
                (n = this.toSeconds(n)),
                (e = this.toSeconds(e)),
                this.triggerAttack(t, n, i),
                this.triggerRelease(n + e),
                this
              )
            }),
            (i.default.Instrument.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._volume.dispose(),
                (this._volume = null),
                this._writable(['volume']),
                (this.volume = null),
                this.unsync(),
                (this._scheduledEvents = null),
                this
              )
            }),
            (e.default = i.default.Instrument)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(7),
            n(2),
            (i.default.AudioToGain = function() {
              i.default.SignalBase.call(this),
                (this._norm = this.input = this.output = new i.default.WaveShaper(
                  function(t) {
                    return (t + 1) / 2
                  }
                ))
            }),
            i.default.extend(i.default.AudioToGain, i.default.SignalBase),
            (i.default.AudioToGain.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._norm.dispose(),
                (this._norm = null),
                this
              )
            }),
            (e.default = i.default.AudioToGain)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(13),
            n(89),
            n(3),
            n(1),
            (i.default.CrossFade = function(t) {
              i.default.AudioNode.call(this),
                this.createInsOuts(2, 1),
                (this.a = this.input[0] = new i.default.Gain()),
                (this.b = this.input[1] = new i.default.Gain()),
                (this.fade = new i.default.Signal(
                  i.default.defaultArg(t, 0.5),
                  i.default.Type.NormalRange
                )),
                (this._equalPowerA = new i.default.EqualPowerGain()),
                (this._equalPowerB = new i.default.EqualPowerGain()),
                (this._one = this.context.getConstant(1)),
                (this._invert = new i.default.Subtract()),
                this.a.connect(this.output),
                this.b.connect(this.output),
                this.fade.chain(this._equalPowerB, this.b.gain),
                i.default.connect(this._one, this._invert, 0, 0),
                this.fade.connect(this._invert, 0, 1),
                this._invert.chain(this._equalPowerA, this.a.gain),
                this._readOnly('fade')
            }),
            i.default.extend(i.default.CrossFade, i.default.AudioNode),
            (i.default.CrossFade.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable('fade'),
                this._equalPowerA.dispose(),
                (this._equalPowerA = null),
                this._equalPowerB.dispose(),
                (this._equalPowerB = null),
                this.fade.dispose(),
                (this.fade = null),
                this._invert.dispose(),
                (this._invert = null),
                (this._one = null),
                this.a.dispose(),
                (this.a = null),
                this.b.dispose(),
                (this.b = null),
                this
              )
            }),
            (e.default = i.default.CrossFade)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          ;(i.default.Timeline = function() {
            var t = i.default.defaults(
              arguments,
              ['memory'],
              i.default.Timeline
            )
            i.default.call(this),
              (this._timeline = []),
              (this.memory = t.memory)
          }),
            i.default.extend(i.default.Timeline),
            (i.default.Timeline.defaults = {memory: 1 / 0}),
            Object.defineProperty(i.default.Timeline.prototype, 'length', {
              get: function() {
                return this._timeline.length
              }
            }),
            (i.default.Timeline.prototype.add = function(t) {
              if (i.default.isUndef(t.time))
                throw new Error(
                  'Tone.Timeline: events must have a time attribute'
                )
              t.time = t.time.valueOf()
              var e = this._search(t.time)
              if (
                (this._timeline.splice(e + 1, 0, t), this.length > this.memory)
              ) {
                var n = this.length - this.memory
                this._timeline.splice(0, n)
              }
              return this
            }),
            (i.default.Timeline.prototype.remove = function(t) {
              var e = this._timeline.indexOf(t)
              return -1 !== e && this._timeline.splice(e, 1), this
            }),
            (i.default.Timeline.prototype.get = function(t, e) {
              e = i.default.defaultArg(e, 'time')
              var n = this._search(t, e)
              return -1 !== n ? this._timeline[n] : null
            }),
            (i.default.Timeline.prototype.peek = function() {
              return this._timeline[0]
            }),
            (i.default.Timeline.prototype.shift = function() {
              return this._timeline.shift()
            }),
            (i.default.Timeline.prototype.getAfter = function(t, e) {
              e = i.default.defaultArg(e, 'time')
              var n = this._search(t, e)
              return n + 1 < this._timeline.length
                ? this._timeline[n + 1]
                : null
            }),
            (i.default.Timeline.prototype.getBefore = function(t, e) {
              e = i.default.defaultArg(e, 'time')
              var n = this._timeline.length
              if (n > 0 && this._timeline[n - 1][e] < t)
                return this._timeline[n - 1]
              var r = this._search(t, e)
              return r - 1 >= 0 ? this._timeline[r - 1] : null
            }),
            (i.default.Timeline.prototype.cancel = function(t) {
              if (this._timeline.length > 1) {
                var e = this._search(t)
                if (e >= 0)
                  if (this._timeline[e].time === t) {
                    for (var n = e; n >= 0 && this._timeline[n].time === t; n--)
                      e = n
                    this._timeline = this._timeline.slice(0, e)
                  } else this._timeline = this._timeline.slice(0, e + 1)
                else this._timeline = []
              } else
                1 === this._timeline.length &&
                  this._timeline[0].time >= t &&
                  (this._timeline = [])
              return this
            }),
            (i.default.Timeline.prototype.cancelBefore = function(t) {
              var e = this._search(t)
              return (
                e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this
              )
            }),
            (i.default.Timeline.prototype.previousEvent = function(t) {
              var e = this._timeline.indexOf(t)
              return e > 0 ? this._timeline[e - 1] : null
            }),
            (i.default.Timeline.prototype._search = function(t, e) {
              if (0 === this._timeline.length) return -1
              e = i.default.defaultArg(e, 'time')
              var n = 0,
                r = this._timeline.length,
                o = r
              if (r > 0 && this._timeline[r - 1][e] <= t) return r - 1
              for (; n < o; ) {
                var a = Math.floor(n + (o - n) / 2),
                  s = this._timeline[a],
                  u = this._timeline[a + 1]
                if (s[e] === t) {
                  for (var l = a; l < this._timeline.length; l++)
                    this._timeline[l][e] === t && (a = l)
                  return a
                }
                if (s[e] < t && u[e] > t) return a
                s[e] > t ? (o = a) : (n = a + 1)
              }
              return -1
            }),
            (i.default.Timeline.prototype._iterate = function(t, e, n) {
              ;(e = i.default.defaultArg(e, 0)),
                (n = i.default.defaultArg(n, this._timeline.length - 1)),
                this._timeline.slice(e, n + 1).forEach(
                  function(e) {
                    t.call(this, e)
                  }.bind(this)
                )
            }),
            (i.default.Timeline.prototype.forEach = function(t) {
              return this._iterate(t), this
            }),
            (i.default.Timeline.prototype.forEachBefore = function(t, e) {
              var n = this._search(t)
              return -1 !== n && this._iterate(e, 0, n), this
            }),
            (i.default.Timeline.prototype.forEachAfter = function(t, e) {
              var n = this._search(t)
              return this._iterate(e, n + 1), this
            }),
            (i.default.Timeline.prototype.forEachBetween = function(t, e, n) {
              var i = this._search(t),
                r = this._search(e)
              return (
                -1 !== i && -1 !== r
                  ? (this._timeline[i].time !== t && (i += 1),
                    this._timeline[r].time === e && (r -= 1),
                    this._iterate(n, i, r))
                  : -1 === i && this._iterate(n, 0, r),
                this
              )
            }),
            (i.default.Timeline.prototype.forEachFrom = function(t, e) {
              for (
                var n = this._search(t);
                n >= 0 && this._timeline[n].time >= t;

              )
                n--
              return this._iterate(e, n + 1), this
            }),
            (i.default.Timeline.prototype.forEachAtTime = function(t, e) {
              var n = this._search(t)
              return (
                -1 !== n &&
                  this._iterate(
                    function(n) {
                      n.time === t && e.call(this, n)
                    },
                    0,
                    n
                  ),
                this
              )
            }),
            (i.default.Timeline.prototype.dispose = function() {
              return (
                i.default.prototype.dispose.call(this),
                (this._timeline = null),
                this
              )
            }),
            (e.default = i.default.Timeline)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(21),
            n(2),
            (i.default.Monophonic = function(t) {
              ;(t = i.default.defaultArg(t, i.default.Monophonic.defaults)),
                i.default.Instrument.call(this, t),
                (this.portamento = t.portamento)
            }),
            i.default.extend(i.default.Monophonic, i.default.Instrument),
            (i.default.Monophonic.defaults = {portamento: 0}),
            (i.default.Monophonic.prototype.triggerAttack = function(t, e, n) {
              return (
                this.log('triggerAttack', t, e, n),
                (e = this.toSeconds(e)),
                this._triggerEnvelopeAttack(e, n),
                this.setNote(t, e),
                this
              )
            }),
            (i.default.Monophonic.prototype.triggerRelease = function(t) {
              return (
                this.log('triggerRelease', t),
                (t = this.toSeconds(t)),
                this._triggerEnvelopeRelease(t),
                this
              )
            }),
            (i.default.Monophonic.prototype._triggerEnvelopeAttack = function() {}),
            (i.default.Monophonic.prototype._triggerEnvelopeRelease = function() {}),
            (i.default.Monophonic.prototype.getLevelAtTime = function(t) {
              return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t)
            }),
            (i.default.Monophonic.prototype.setNote = function(t, e) {
              if (
                ((e = this.toSeconds(e)),
                this.portamento > 0 && this.getLevelAtTime(e) > 0.05)
              ) {
                var n = this.toSeconds(this.portamento)
                this.frequency.exponentialRampTo(t, n, e)
              } else this.frequency.setValueAtTime(t, e)
              return this
            }),
            (e.default = i.default.Monophonic)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(29),
            n(5),
            n(2),
            (i.default.Scale = function(t, e) {
              i.default.SignalBase.call(this),
                (this._outputMin = i.default.defaultArg(t, 0)),
                (this._outputMax = i.default.defaultArg(e, 1)),
                (this._scale = this.input = new i.default.Multiply(1)),
                (this._add = this.output = new i.default.Add(0)),
                this._scale.connect(this._add),
                this._setRange()
            }),
            i.default.extend(i.default.Scale, i.default.SignalBase),
            Object.defineProperty(i.default.Scale.prototype, 'min', {
              get: function() {
                return this._outputMin
              },
              set: function(t) {
                ;(this._outputMin = t), this._setRange()
              }
            }),
            Object.defineProperty(i.default.Scale.prototype, 'max', {
              get: function() {
                return this._outputMax
              },
              set: function(t) {
                ;(this._outputMax = t), this._setRange()
              }
            }),
            (i.default.Scale.prototype._setRange = function() {
              ;(this._add.value = this._outputMin),
                (this._scale.value = this._outputMax - this._outputMin)
            }),
            (i.default.Scale.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._add.dispose(),
                (this._add = null),
                this._scale.dispose(),
                (this._scale = null),
                this
              )
            }),
            (e.default = i.default.Scale)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(3),
            n(1),
            (i.default.Volume = function() {
              var t = i.default.defaults(
                arguments,
                ['volume'],
                i.default.Volume
              )
              i.default.AudioNode.call(this, t),
                (this.output = this.input = new i.default.Gain(
                  t.volume,
                  i.default.Type.Decibels
                )),
                (this._unmutedVolume = t.volume),
                (this.volume = this.output.gain),
                this._readOnly('volume'),
                (this.mute = t.mute)
            }),
            i.default.extend(i.default.Volume, i.default.AudioNode),
            (i.default.Volume.defaults = {volume: 0, mute: !1}),
            Object.defineProperty(i.default.Volume.prototype, 'mute', {
              get: function() {
                return this.volume.value === -1 / 0
              },
              set: function(t) {
                !this.mute && t
                  ? ((this._unmutedVolume = this.volume.value),
                    (this.volume.value = -1 / 0))
                  : this.mute && !t && (this.volume.value = this._unmutedVolume)
              }
            }),
            (i.default.Volume.prototype.dispose = function() {
              return (
                this.input.dispose(),
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable('volume'),
                this.volume.dispose(),
                (this.volume = null),
                this
              )
            }),
            (e.default = i.default.Volume)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(3),
            n(30),
            (i.default.Zero = function() {
              i.default.SignalBase.call(this),
                (this._gain = this.input = this.output = new i.default.Gain()),
                i.default.connect(this.context.getConstant(0), this._gain)
            }),
            i.default.extend(i.default.Zero, i.default.SignalBase),
            (i.default.Zero.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._gain.dispose(),
                (this._gain = null),
                this
              )
            }),
            (e.default = i.default.Zero)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(3),
            (i.default.Add = function(t) {
              i.default.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._sum = this.input[0] = this.input[1] = this.output = new i.default.Gain()),
                (this._param = this.input[1] = new i.default.Signal(t)),
                this._param.connect(this._sum)
            }),
            i.default.extend(i.default.Add, i.default.Signal),
            (i.default.Add.prototype.dispose = function() {
              return (
                i.default.Signal.prototype.dispose.call(this),
                this._sum.dispose(),
                (this._sum = null),
                this
              )
            }),
            (e.default = i.default.Add)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(1),
            (i.default.SignalBase = function() {
              i.default.AudioNode.call(this)
            }),
            i.default.extend(i.default.SignalBase, i.default.AudioNode),
            (i.default.SignalBase.prototype.connect = function(t, e, n) {
              return (
                (i.default.Signal && i.default.Signal === t.constructor) ||
                (i.default.Param && i.default.Param === t.constructor)
                  ? (t._param.cancelScheduledValues(0),
                    t._param.setValueAtTime(0, 0),
                    (t.overridden = !0))
                  : t instanceof AudioParam &&
                    (t.cancelScheduledValues(0), t.setValueAtTime(0, 0)),
                i.default.AudioNode.prototype.connect.call(this, t, e, n),
                this
              )
            }),
            (e.default = i.default.SignalBase)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(47),
            n(3),
            (i.default.AmplitudeEnvelope = function() {
              i.default.Envelope.apply(this, arguments),
                (this.input = this.output = new i.default.Gain()),
                this._sig.connect(this.output.gain)
            }),
            i.default.extend(i.default.AmplitudeEnvelope, i.default.Envelope),
            (i.default.AmplitudeEnvelope.prototype.dispose = function() {
              return i.default.Envelope.prototype.dispose.call(this), this
            }),
            (e.default = i.default.AmplitudeEnvelope)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(11),
            n(6),
            n(3),
            n(1),
            (i.default.BufferSource = function() {
              var t = i.default.defaults(
                arguments,
                ['buffer', 'onload'],
                i.default.BufferSource
              )
              i.default.AudioNode.call(this, t),
                (this.onended = t.onended),
                (this._startTime = -1),
                (this._sourceStarted = !1),
                (this._sourceStopped = !1),
                (this._stopTime = -1),
                (this._gainNode = this.output = new i.default.Gain(0)),
                (this._source = this.context.createBufferSource()),
                i.default.connect(this._source, this._gainNode),
                (this._source.onended = this._onended.bind(this)),
                (this._buffer = new i.default.Buffer(t.buffer, t.onload)),
                (this.playbackRate = new i.default.Param({
                  param: this._source.playbackRate,
                  units: i.default.Type.Positive,
                  value: t.playbackRate
                })),
                (this.fadeIn = t.fadeIn),
                (this.fadeOut = t.fadeOut),
                (this.curve = t.curve),
                (this._onendedTimeout = -1),
                (this.loop = t.loop),
                (this.loopStart = t.loopStart),
                (this.loopEnd = t.loopEnd)
            }),
            i.default.extend(i.default.BufferSource, i.default.AudioNode),
            (i.default.BufferSource.defaults = {
              onended: i.default.noOp,
              onload: i.default.noOp,
              loop: !1,
              loopStart: 0,
              loopEnd: 0,
              fadeIn: 0,
              fadeOut: 0,
              curve: 'linear',
              playbackRate: 1
            }),
            Object.defineProperty(i.default.BufferSource.prototype, 'state', {
              get: function() {
                return this.getStateAtTime(this.now())
              }
            }),
            (i.default.BufferSource.prototype.getStateAtTime = function(t) {
              return (
                (t = this.toSeconds(t)),
                -1 !== this._startTime &&
                this._startTime <= t &&
                (-1 === this._stopTime || t < this._stopTime) &&
                !this._sourceStopped
                  ? i.default.State.Started
                  : i.default.State.Stopped
              )
            }),
            (i.default.BufferSource.prototype.start = function(t, e, n, r) {
              this.log('start', t, e, n, r),
                this.assert(-1 === this._startTime, 'can only be started once'),
                this.assert(
                  this.buffer.loaded,
                  'buffer is either not set or not loaded'
                ),
                this.assert(!this._sourceStopped, 'source is already stopped'),
                (t = this.toSeconds(t)),
                (e = this.loop
                  ? i.default.defaultArg(e, this.loopStart)
                  : i.default.defaultArg(e, 0)),
                (e = this.toSeconds(e)),
                (e = Math.max(e, 0)),
                (r = i.default.defaultArg(r, 1))
              var o = this.toSeconds(this.fadeIn)
              if (
                (o > 0
                  ? (this._gainNode.gain.setValueAtTime(0, t),
                    'linear' === this.curve
                      ? this._gainNode.gain.linearRampToValueAtTime(r, t + o)
                      : this._gainNode.gain.exponentialApproachValueAtTime(
                          r,
                          t,
                          o
                        ))
                  : this._gainNode.gain.setValueAtTime(r, t),
                (this._startTime = t),
                i.default.isDefined(n))
              ) {
                var a = this.toSeconds(n)
                ;(a = Math.max(a, 0)), this.stop(t + a)
              }
              if (this.loop) {
                var s = this.loopEnd || this.buffer.duration,
                  u = this.loopStart
                e >= s && (e = (e - u) % (s - u) + u)
              }
              return (
                (this._source.buffer = this.buffer.get()),
                (this._source.loopEnd = this.loopEnd || this.buffer.duration),
                e < this.buffer.duration &&
                  ((this._sourceStarted = !0), this._source.start(t, e)),
                this
              )
            }),
            (i.default.BufferSource.prototype.stop = function(t) {
              this.log('stop', t),
                this.assert(
                  this.buffer.loaded,
                  'buffer is either not set or not loaded'
                ),
                this.assert(!this._sourceStopped, 'source is already stopped'),
                (t = this.toSeconds(t)),
                -1 !== this._stopTime && this.cancelStop()
              var e = this.toSeconds(this.fadeOut)
              return (
                (this._stopTime = t + e),
                e > 0
                  ? 'linear' === this.curve
                    ? this._gainNode.gain.linearRampTo(0, e, t)
                    : this._gainNode.gain.targetRampTo(0, e, t)
                  : (this._gainNode.gain.cancelAndHoldAtTime(t),
                    this._gainNode.gain.setValueAtTime(0, t)),
                i.default.context.clearTimeout(this._onendedTimeout),
                (this._onendedTimeout = i.default.context.setTimeout(
                  this._onended.bind(this),
                  this._stopTime - this.now()
                )),
                this
              )
            }),
            (i.default.BufferSource.prototype.cancelStop = function() {
              if (-1 !== this._startTime && !this._sourceStopped) {
                var t = this.toSeconds(this.fadeIn)
                this._gainNode.gain.cancelScheduledValues(
                  this._startTime + t + this.sampleTime
                ),
                  this.context.clearTimeout(this._onendedTimeout),
                  (this._stopTime = -1)
              }
              return this
            }),
            (i.default.BufferSource.prototype._onended = function() {
              if (!this._sourceStopped) {
                this._sourceStopped = !0
                var t = 'exponential' === this.curve ? 2 * this.fadeOut : 0
                this._sourceStarted &&
                  -1 !== this._stopTime &&
                  this._source.stop(this._stopTime + t),
                  this.onended(this),
                  setTimeout(
                    function() {
                      this._source &&
                        (this._source.disconnect(), this._gainNode.disconnect())
                    }.bind(this),
                    1e3 * t + 100
                  )
              }
            }),
            Object.defineProperty(
              i.default.BufferSource.prototype,
              'loopStart',
              {
                get: function() {
                  return this._source.loopStart
                },
                set: function(t) {
                  this._source.loopStart = this.toSeconds(t)
                }
              }
            ),
            Object.defineProperty(i.default.BufferSource.prototype, 'loopEnd', {
              get: function() {
                return this._source.loopEnd
              },
              set: function(t) {
                this._source.loopEnd = this.toSeconds(t)
              }
            }),
            Object.defineProperty(i.default.BufferSource.prototype, 'buffer', {
              get: function() {
                return this._buffer
              },
              set: function(t) {
                this._buffer.set(t)
              }
            }),
            Object.defineProperty(i.default.BufferSource.prototype, 'loop', {
              get: function() {
                return this._source.loop
              },
              set: function(t) {
                ;(this._source.loop = t), this.cancelStop()
              }
            }),
            (i.default.BufferSource.prototype.dispose = function() {
              return (
                this._wasDisposed ||
                  ((this._wasDisposed = !0),
                  i.default.AudioNode.prototype.dispose.call(this),
                  (this.onended = null),
                  (this._source.onended = null),
                  this._source.disconnect(),
                  (this._source = null),
                  this._gainNode.dispose(),
                  (this._gainNode = null),
                  this._buffer.dispose(),
                  (this._buffer = null),
                  (this._startTime = -1),
                  (this.playbackRate = null),
                  i.default.context.clearTimeout(this._onendedTimeout)),
                this
              )
            }),
            (e.default = i.default.BufferSource)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(2),
            n(5),
            n(3),
            (i.default.FeedbackEffect = function() {
              var t = i.default.defaults(
                arguments,
                ['feedback'],
                i.default.FeedbackEffect
              )
              i.default.Effect.call(this, t),
                (this._feedbackGain = new i.default.Gain(
                  t.feedback,
                  i.default.Type.NormalRange
                )),
                (this.feedback = this._feedbackGain.gain),
                this.effectReturn.chain(this._feedbackGain, this.effectSend),
                this._readOnly(['feedback'])
            }),
            i.default.extend(i.default.FeedbackEffect, i.default.Effect),
            (i.default.FeedbackEffect.defaults = {feedback: 0.125}),
            (i.default.FeedbackEffect.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._writable(['feedback']),
                this._feedbackGain.dispose(),
                (this._feedbackGain = null),
                (this.feedback = null),
                this
              )
            }),
            (e.default = i.default.FeedbackEffect)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(24),
            n(4),
            (i.default.TimelineState = function(t) {
              i.default.Timeline.call(this), (this._initial = t)
            }),
            i.default.extend(i.default.TimelineState, i.default.Timeline),
            (i.default.TimelineState.prototype.getValueAtTime = function(t) {
              var e = this.get(t)
              return null !== e ? e.state : this._initial
            }),
            (i.default.TimelineState.prototype.setStateAtTime = function(t, e) {
              return this.add({state: t, time: e}), this
            }),
            (i.default.TimelineState.prototype.getLastState = function(t, e) {
              e = this.toSeconds(e)
              for (var n = this._search(e); n >= 0; n--) {
                var i = this._timeline[n]
                if (i.state === t) return i
              }
            }),
            (i.default.TimelineState.prototype.getNextState = function(t, e) {
              e = this.toSeconds(e)
              var n = this._search(e)
              if (-1 !== n)
                for (var i = n; i < this._timeline.length; i++) {
                  var r = this._timeline[i]
                  if (r.state === t) return r
                }
            }),
            (e.default = i.default.TimelineState)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          ;(i.default.Emitter = function() {
            i.default.call(this), (this._events = {})
          }),
            i.default.extend(i.default.Emitter),
            (i.default.Emitter.prototype.on = function(t, e) {
              for (var n = t.split(/\W+/), i = 0; i < n.length; i++) {
                var r = n[i]
                this._events.hasOwnProperty(r) || (this._events[r] = []),
                  this._events[r].push(e)
              }
              return this
            }),
            (i.default.Emitter.prototype.once = function(t, e) {
              var n = function() {
                e.apply(this, arguments), this.off(t, n)
              }.bind(this)
              return this.on(t, n), this
            }),
            (i.default.Emitter.prototype.off = function(t, e) {
              for (var n = t.split(/\W+/), r = 0; r < n.length; r++)
                if (((t = n[r]), this._events.hasOwnProperty(t)))
                  if (i.default.isUndef(e)) this._events[t] = []
                  else
                    for (var o = this._events[t], a = 0; a < o.length; a++)
                      o[a] === e && o.splice(a, 1)
              return this
            }),
            (i.default.Emitter.prototype.emit = function(t) {
              if (this._events) {
                var e = Array.apply(null, arguments).slice(1)
                if (this._events.hasOwnProperty(t))
                  for (
                    var n = this._events[t].slice(0), i = 0, r = n.length;
                    i < r;
                    i++
                  )
                    n[i].apply(this, e)
              }
              return this
            }),
            (i.default.Emitter.mixin = function(t) {
              var e = ['on', 'once', 'off', 'emit']
              t._events = {}
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  o = i.default.Emitter.prototype[r]
                t[r] = o
              }
              return i.default.Emitter
            }),
            (i.default.Emitter.prototype.dispose = function() {
              return (
                i.default.prototype.dispose.call(this),
                (this._events = null),
                this
              )
            }),
            (e.default = i.default.Emitter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(1),
            n(44),
            i.default.supported &&
              (AnalyserNode.prototype.getFloatTimeDomainData ||
                (AnalyserNode.prototype.getFloatTimeDomainData = function(t) {
                  var e = new Uint8Array(t.length)
                  this.getByteTimeDomainData(e)
                  for (var n = 0; n < e.length; n++) t[n] = (e[n] - 128) / 128
                })),
            (i.default.Analyser = function() {
              var t = i.default.defaults(
                arguments,
                ['type', 'size'],
                i.default.Analyser
              )
              i.default.AudioNode.call(this),
                (this._analyser = this.input = this.output = this.context.createAnalyser()),
                (this._type = t.type),
                (this._buffer = null),
                (this.size = t.size),
                (this.type = t.type)
            }),
            i.default.extend(i.default.Analyser, i.default.AudioNode),
            (i.default.Analyser.defaults = {
              size: 1024,
              type: 'fft',
              smoothing: 0.8
            }),
            (i.default.Analyser.Type = {Waveform: 'waveform', FFT: 'fft'}),
            (i.default.Analyser.prototype.getValue = function() {
              return (
                this._type === i.default.Analyser.Type.FFT
                  ? this._analyser.getFloatFrequencyData(this._buffer)
                  : this._type === i.default.Analyser.Type.Waveform &&
                    this._analyser.getFloatTimeDomainData(this._buffer),
                this._buffer
              )
            }),
            Object.defineProperty(i.default.Analyser.prototype, 'size', {
              get: function() {
                return this._analyser.frequencyBinCount
              },
              set: function(t) {
                ;(this._analyser.fftSize = 2 * t),
                  (this._buffer = new Float32Array(t))
              }
            }),
            Object.defineProperty(i.default.Analyser.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                if (
                  t !== i.default.Analyser.Type.Waveform &&
                  t !== i.default.Analyser.Type.FFT
                )
                  throw new TypeError('Tone.Analyser: invalid type: ' + t)
                this._type = t
              }
            }),
            Object.defineProperty(i.default.Analyser.prototype, 'smoothing', {
              get: function() {
                return this._analyser.smoothingTimeConstant
              },
              set: function(t) {
                this._analyser.smoothingTimeConstant = t
              }
            }),
            (i.default.Analyser.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this),
                this._analyser.disconnect(),
                (this._analyser = null),
                (this._buffer = null)
            }),
            (e.default = i.default.Analyser)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(17),
            n(50),
            n(69),
            n(49),
            n(68),
            n(67),
            (i.default.OmniOscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type'],
                i.default.OmniOscillator
              )
              i.default.Source.call(this, t),
                (this.frequency = new i.default.Signal(
                  t.frequency,
                  i.default.Type.Frequency
                )),
                (this.detune = new i.default.Signal(
                  t.detune,
                  i.default.Type.Cents
                )),
                (this._sourceType = void 0),
                (this._oscillator = null),
                (this.type = t.type),
                this._readOnly(['frequency', 'detune']),
                this.set(t)
            }),
            i.default.extend(i.default.OmniOscillator, i.default.Source),
            (i.default.OmniOscillator.defaults = {
              frequency: 440,
              detune: 0,
              type: 'sine',
              phase: 0
            })
          var r = 'PulseOscillator',
            o = 'PWMOscillator',
            a = 'FMOscillator',
            s = 'AMOscillator',
            u = 'FatOscillator'
          ;(i.default.OmniOscillator.prototype._start = function(t) {
            this._oscillator.start(t)
          }),
            (i.default.OmniOscillator.prototype._stop = function(t) {
              this._oscillator.stop(t)
            }),
            (i.default.OmniOscillator.prototype.restart = function(t) {
              this._oscillator.restart(t)
            }),
            Object.defineProperty(i.default.OmniOscillator.prototype, 'type', {
              get: function() {
                var t = ''
                return (
                  this._sourceType === a
                    ? (t = 'fm')
                    : this._sourceType === s
                      ? (t = 'am')
                      : this._sourceType === u && (t = 'fat'),
                  t + this._oscillator.type
                )
              },
              set: function(t) {
                'fm' === t.substr(0, 2)
                  ? (this._createNewOscillator(a),
                    (this._oscillator.type = t.substr(2)))
                  : 'am' === t.substr(0, 2)
                    ? (this._createNewOscillator(s),
                      (this._oscillator.type = t.substr(2)))
                    : 'fat' === t.substr(0, 3)
                      ? (this._createNewOscillator(u),
                        (this._oscillator.type = t.substr(3)))
                      : 'pwm' === t
                        ? this._createNewOscillator(o)
                        : 'pulse' === t
                          ? this._createNewOscillator(r)
                          : (this._createNewOscillator('Oscillator'),
                            (this._oscillator.type = t))
              }
            }),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'partials',
              {
                get: function() {
                  return this._oscillator.partials
                },
                set: function(t) {
                  this._oscillator.partials = t
                }
              }
            ),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'partialCount',
              {
                get: function() {
                  return this._oscillator.partialCount
                },
                set: function(t) {
                  this._oscillator.partialCount = t
                }
              }
            ),
            (i.default.OmniOscillator.prototype.set = function(t, e) {
              return (
                'type' === t
                  ? (this.type = e)
                  : i.default.isObject(t) &&
                    t.hasOwnProperty('type') &&
                    (this.type = t.type),
                i.default.prototype.set.apply(this, arguments),
                this
              )
            }),
            (i.default.OmniOscillator.prototype.get = function(t) {
              var e = this._oscillator.get(t)
              return (e.type = this.type), e
            }),
            (i.default.OmniOscillator.prototype._createNewOscillator = function(
              t
            ) {
              if (t !== this._sourceType) {
                this._sourceType = t
                var e = i.default[t],
                  n = this.now()
                if (null !== this._oscillator) {
                  var r = this._oscillator
                  r.stop(n),
                    this.context.setTimeout(function() {
                      r.dispose(), (r = null)
                    }, this.blockTime)
                }
                ;(this._oscillator = new e()),
                  this.frequency.connect(this._oscillator.frequency),
                  this.detune.connect(this._oscillator.detune),
                  this._oscillator.connect(this.output),
                  this.state === i.default.State.Started &&
                    this._oscillator.start(n)
              }
            }),
            Object.defineProperty(i.default.OmniOscillator.prototype, 'phase', {
              get: function() {
                return this._oscillator.phase
              },
              set: function(t) {
                this._oscillator.phase = t
              }
            })
          var l = {
            PulseOscillator: 'pulse',
            PWMOscillator: 'pwm',
            Oscillator: 'oscillator',
            FMOscillator: 'fm',
            AMOscillator: 'am',
            FatOscillator: 'fat'
          }
          Object.defineProperty(
            i.default.OmniOscillator.prototype,
            'sourceType',
            {
              get: function() {
                return l[this._sourceType]
              },
              set: function(t) {
                var e = 'sine'
                'pwm' !== this._oscillator.type &&
                  'pulse' !== this._oscillator.type &&
                  (e = this._oscillator.type),
                  t === l.FMOscillator
                    ? (this.type = 'fm' + e)
                    : t === l.AMOscillator
                      ? (this.type = 'am' + e)
                      : t === l.FatOscillator
                        ? (this.type = 'fat' + e)
                        : t === l.Oscillator
                          ? (this.type = e)
                          : t === l.PulseOscillator
                            ? (this.type = 'pulse')
                            : t === l.PWMOscillator && (this.type = 'pwm')
              }
            }
          ),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'baseType',
              {
                get: function() {
                  return this._oscillator.baseType
                },
                set: function(t) {
                  this.sourceType !== l.PulseOscillator &&
                    this.sourceType !== l.PWMOscillator &&
                    (this._oscillator.baseType = t)
                }
              }
            ),
            Object.defineProperty(i.default.OmniOscillator.prototype, 'width', {
              get: function() {
                return this._sourceType === r ? this._oscillator.width : void 0
              }
            }),
            Object.defineProperty(i.default.OmniOscillator.prototype, 'count', {
              get: function() {
                return this._sourceType === u ? this._oscillator.count : void 0
              },
              set: function(t) {
                this._sourceType === u && (this._oscillator.count = t)
              }
            }),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'spread',
              {
                get: function() {
                  return this._sourceType === u
                    ? this._oscillator.spread
                    : void 0
                },
                set: function(t) {
                  this._sourceType === u && (this._oscillator.spread = t)
                }
              }
            ),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'modulationType',
              {
                get: function() {
                  return this._sourceType === a || this._sourceType === s
                    ? this._oscillator.modulationType
                    : void 0
                },
                set: function(t) {
                  ;(this._sourceType !== a && this._sourceType !== s) ||
                    (this._oscillator.modulationType = t)
                }
              }
            ),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'modulationIndex',
              {
                get: function() {
                  return this._sourceType === a
                    ? this._oscillator.modulationIndex
                    : void 0
                }
              }
            ),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'harmonicity',
              {
                get: function() {
                  return this._sourceType === a || this._sourceType === s
                    ? this._oscillator.harmonicity
                    : void 0
                }
              }
            ),
            Object.defineProperty(
              i.default.OmniOscillator.prototype,
              'modulationFrequency',
              {
                get: function() {
                  return this._sourceType === o
                    ? this._oscillator.modulationFrequency
                    : void 0
                }
              }
            ),
            (i.default.OmniOscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this._writable(['frequency', 'detune']),
                this.detune.dispose(),
                (this.detune = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this._oscillator.dispose(),
                (this._oscillator = null),
                (this._sourceType = null),
                this
              )
            }),
            (e.default = i.default.OmniOscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(31),
            n(37),
            n(25),
            (i.default.Synth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.Synth.defaults)),
                i.default.Monophonic.call(this, t),
                (this.oscillator = new i.default.OmniOscillator(t.oscillator)),
                (this.frequency = this.oscillator.frequency),
                (this.detune = this.oscillator.detune),
                (this.envelope = new i.default.AmplitudeEnvelope(t.envelope)),
                this.oscillator.chain(this.envelope, this.output),
                this._readOnly([
                  'oscillator',
                  'frequency',
                  'detune',
                  'envelope'
                ])
            }),
            i.default.extend(i.default.Synth, i.default.Monophonic),
            (i.default.Synth.defaults = {
              oscillator: {type: 'triangle'},
              envelope: {attack: 0.005, decay: 0.1, sustain: 0.3, release: 1}
            }),
            (i.default.Synth.prototype._triggerEnvelopeAttack = function(t, e) {
              return (
                this.envelope.triggerAttack(t, e),
                this.oscillator.start(t),
                0 === this.envelope.sustain &&
                  this.oscillator.stop(
                    t +
                      this.toSeconds(this.envelope.attack) +
                      this.toSeconds(this.envelope.decay)
                  ),
                this
              )
            }),
            (i.default.Synth.prototype._triggerEnvelopeRelease = function(t) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerRelease(t),
                this.oscillator.stop(t + this.toSeconds(this.envelope.release)),
                this
              )
            }),
            (i.default.Synth.prototype.dispose = function() {
              return (
                i.default.Monophonic.prototype.dispose.call(this),
                this._writable([
                  'oscillator',
                  'frequency',
                  'detune',
                  'envelope'
                ]),
                this.oscillator.dispose(),
                (this.oscillator = null),
                this.envelope.dispose(),
                (this.envelope = null),
                (this.frequency = null),
                (this.detune = null),
                this
              )
            }),
            (e.default = i.default.Synth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(11),
            n(32),
            (i.default.Noise = function() {
              var t = i.default.defaults(arguments, ['type'], i.default.Noise)
              i.default.Source.call(this, t),
                (this._source = null),
                (this._type = t.type),
                (this._playbackRate = t.playbackRate)
            }),
            i.default.extend(i.default.Noise, i.default.Source),
            (i.default.Noise.defaults = {type: 'white', playbackRate: 1}),
            Object.defineProperty(i.default.Noise.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                if (this._type !== t) {
                  if (!(t in r))
                    throw new TypeError('Tone.Noise: invalid type: ' + t)
                  if (
                    ((this._type = t), this.state === i.default.State.Started)
                  ) {
                    var e = this.now()
                    this._stop(e), this._start(e)
                  }
                }
              }
            }),
            Object.defineProperty(i.default.Noise.prototype, 'playbackRate', {
              get: function() {
                return this._playbackRate
              },
              set: function(t) {
                ;(this._playbackRate = t),
                  this._source && (this._source.playbackRate.value = t)
              }
            }),
            (i.default.Noise.prototype._start = function(t) {
              var e = r[this._type]
              ;(this._source = new i.default.BufferSource(e).connect(
                this.output
              )),
                (this._source.loop = !0),
                (this._source.playbackRate.value = this._playbackRate),
                this._source.start(
                  this.toSeconds(t),
                  Math.random() * (e.duration - 0.001)
                )
            }),
            (i.default.Noise.prototype._stop = function(t) {
              this._source &&
                (this._source.stop(this.toSeconds(t)), (this._source = null))
            }),
            (i.default.Noise.prototype.restart = function(t) {
              return this._stop(t), this._start(t), this
            }),
            (i.default.Noise.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                null !== this._source &&
                  (this._source.disconnect(), (this._source = null)),
                (this._buffer = null),
                this
              )
            })
          var r = {},
            o = {}
          Object.defineProperty(r, 'pink', {
            get: function() {
              if (!o.pink) {
                for (var t = [], e = 0; e < 2; e++) {
                  var n,
                    r,
                    a,
                    s,
                    u,
                    l,
                    f,
                    c = new Float32Array(220500)
                  ;(t[e] = c), (n = r = a = s = u = l = f = 0)
                  for (var d = 0; d < 220500; d++) {
                    var h = 2 * Math.random() - 1
                    ;(n = 0.99886 * n + 0.0555179 * h),
                      (r = 0.99332 * r + 0.0750759 * h),
                      (a = 0.969 * a + 0.153852 * h),
                      (s = 0.8665 * s + 0.3104856 * h),
                      (u = 0.55 * u + 0.5329522 * h),
                      (l = -0.7616 * l - 0.016898 * h),
                      (c[d] = n + r + a + s + u + l + f + 0.5362 * h),
                      (c[d] *= 0.11),
                      (f = 0.115926 * h)
                  }
                }
                o.pink = new i.default.Buffer().fromArray(t)
              }
              return o.pink
            }
          }),
            Object.defineProperty(r, 'brown', {
              get: function() {
                if (!o.brown) {
                  for (var t = [], e = 0; e < 2; e++) {
                    var n = new Float32Array(220500)
                    t[e] = n
                    for (var r = 0, a = 0; a < 220500; a++) {
                      var s = 2 * Math.random() - 1
                      ;(n[a] = (r + 0.02 * s) / 1.02), (r = n[a]), (n[a] *= 3.5)
                    }
                  }
                  o.brown = new i.default.Buffer().fromArray(t)
                }
                return o.brown
              }
            }),
            Object.defineProperty(r, 'white', {
              get: function() {
                if (!o.white) {
                  for (var t = [], e = 0; e < 2; e++) {
                    var n = new Float32Array(220500)
                    t[e] = n
                    for (var r = 0; r < 220500; r++)
                      n[r] = 2 * Math.random() - 1
                  }
                  o.white = new i.default.Buffer().fromArray(t)
                }
                return o.white
              }
            }),
            (e.default = i.default.Noise)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(27),
            n(20),
            n(1),
            (i.default.Master = function() {
              i.default.AudioNode.call(this),
                i.default.getContext(
                  function() {
                    this.createInsOuts(1, 0),
                      (this._volume = this.output = new i.default.Volume()),
                      (this.volume = this._volume.volume),
                      this._readOnly('volume'),
                      i.default.connectSeries(
                        this.input,
                        this.output,
                        this.context.destination
                      ),
                      (this.context.master = this)
                  }.bind(this)
                )
            }),
            i.default.extend(i.default.Master, i.default.AudioNode),
            (i.default.Master.defaults = {volume: 0, mute: !1}),
            (i.default.Master.prototype.isMaster = !0),
            Object.defineProperty(i.default.Master.prototype, 'mute', {
              get: function() {
                return this._volume.mute
              },
              set: function(t) {
                this._volume.mute = t
              }
            }),
            (i.default.Master.prototype.chain = function() {
              this.input.disconnect()
              var t = Array.from(arguments)
              t.unshift(this.input),
                t.push(this.output),
                i.default.connectSeries.apply(void 0, t)
            }),
            (i.default.Master.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this),
                this._writable('volume'),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null)
            }),
            (i.default.AudioNode.prototype.toMaster = function() {
              return this.connect(this.context.master), this
            })
          var r = i.default.Master
          ;(i.default.Master = new r()),
            i.default.Context.on('init', function(t) {
              t.master && t.master.isMaster
                ? (i.default.Master = t.master)
                : (i.default.Master = new r())
            }),
            i.default.Context.on('close', function(t) {
              t.master && t.master.isMaster && t.master.dispose()
            }),
            (e.default = i.default.Master)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(86),
            n(47),
            (i.default.FrequencyEnvelope = function() {
              var t = i.default.defaults(
                arguments,
                ['attack', 'decay', 'sustain', 'release'],
                i.default.Envelope
              )
              ;(t = i.default.defaultArg(
                t,
                i.default.FrequencyEnvelope.defaults
              )),
                i.default.ScaledEnvelope.call(this, t),
                (this._octaves = t.octaves),
                (this.baseFrequency = t.baseFrequency),
                (this.octaves = t.octaves),
                (this.exponent = t.exponent)
            }),
            i.default.extend(i.default.FrequencyEnvelope, i.default.Envelope),
            (i.default.FrequencyEnvelope.defaults = {
              baseFrequency: 200,
              octaves: 4,
              exponent: 1
            }),
            Object.defineProperty(
              i.default.FrequencyEnvelope.prototype,
              'baseFrequency',
              {
                get: function() {
                  return this._scale.min
                },
                set: function(t) {
                  ;(this._scale.min = this.toFrequency(t)),
                    (this.octaves = this._octaves)
                }
              }
            ),
            Object.defineProperty(
              i.default.FrequencyEnvelope.prototype,
              'octaves',
              {
                get: function() {
                  return this._octaves
                },
                set: function(t) {
                  ;(this._octaves = t),
                    (this._scale.max = this.baseFrequency * Math.pow(2, t))
                }
              }
            ),
            Object.defineProperty(
              i.default.FrequencyEnvelope.prototype,
              'exponent',
              {
                get: function() {
                  return this._exp.value
                },
                set: function(t) {
                  this._exp.value = t
                }
              }
            ),
            (i.default.FrequencyEnvelope.prototype.dispose = function() {
              return i.default.ScaledEnvelope.prototype.dispose.call(this), this
            }),
            (e.default = i.default.FrequencyEnvelope)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(26),
            n(61),
            (i.default.ScaleExp = function(t, e, n) {
              i.default.SignalBase.call(this),
                (this._scale = this.output = new i.default.Scale(t, e)),
                (this._exp = this.input = new i.default.Pow(
                  i.default.defaultArg(n, 2)
                )),
                this._exp.connect(this._scale)
            }),
            i.default.extend(i.default.ScaleExp, i.default.SignalBase),
            Object.defineProperty(i.default.ScaleExp.prototype, 'exponent', {
              get: function() {
                return this._exp.value
              },
              set: function(t) {
                this._exp.value = t
              }
            }),
            Object.defineProperty(i.default.ScaleExp.prototype, 'min', {
              get: function() {
                return this._scale.min
              },
              set: function(t) {
                this._scale.min = t
              }
            }),
            Object.defineProperty(i.default.ScaleExp.prototype, 'max', {
              get: function() {
                return this._scale.max
              },
              set: function(t) {
                this._scale.max = t
              }
            }),
            (i.default.ScaleExp.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._scale.dispose(),
                (this._scale = null),
                this._exp.dispose(),
                (this._exp = null),
                this
              )
            }),
            (e.default = i.default.ScaleExp)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(14),
            n(1),
            (i.default.Compressor = function() {
              var t = i.default.defaults(
                arguments,
                ['threshold', 'ratio'],
                i.default.Compressor
              )
              i.default.AudioNode.call(this),
                (this._compressor = this.input = this.output = this.context.createDynamicsCompressor()),
                (this.threshold = new i.default.Param({
                  param: this._compressor.threshold,
                  units: i.default.Type.Decibels,
                  convert: !1
                })),
                (this.attack = new i.default.Param(
                  this._compressor.attack,
                  i.default.Type.Time
                )),
                (this.release = new i.default.Param(
                  this._compressor.release,
                  i.default.Type.Time
                )),
                (this.knee = new i.default.Param({
                  param: this._compressor.knee,
                  units: i.default.Type.Decibels,
                  convert: !1
                })),
                (this.ratio = new i.default.Param({
                  param: this._compressor.ratio,
                  convert: !1
                })),
                this._readOnly([
                  'knee',
                  'release',
                  'attack',
                  'ratio',
                  'threshold'
                ]),
                this.set(t)
            }),
            i.default.extend(i.default.Compressor, i.default.AudioNode),
            (i.default.Compressor.defaults = {
              ratio: 12,
              threshold: -24,
              release: 0.25,
              attack: 0.003,
              knee: 30
            }),
            (i.default.Compressor.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable([
                  'knee',
                  'release',
                  'attack',
                  'ratio',
                  'threshold'
                ]),
                this._compressor.disconnect(),
                (this._compressor = null),
                this.attack.dispose(),
                (this.attack = null),
                this.release.dispose(),
                (this.release = null),
                this.threshold.dispose(),
                (this.threshold = null),
                this.ratio.dispose(),
                (this.ratio = null),
                this.knee.dispose(),
                (this.knee = null),
                this
              )
            }),
            (e.default = i.default.Compressor)
        },
        function(t, e, n) {
          'use strict'
          var i = n(0)
          if ((n(92), i.default.supported)) {
            !i.default.global.hasOwnProperty('AudioContext') &&
              i.default.global.hasOwnProperty('webkitAudioContext') &&
              (i.default.global.AudioContext =
                i.default.global.webkitAudioContext),
              AudioContext.prototype.close ||
                (AudioContext.prototype.close = function() {
                  return (
                    i.default.isFunction(this.suspend) && this.suspend(),
                    Promise.resolve()
                  )
                }),
              AudioContext.prototype.resume ||
                (AudioContext.prototype.resume = function() {
                  var t = this.createBuffer(1, 1, this.sampleRate),
                    e = this.createBufferSource()
                  return (
                    (e.buffer = t),
                    e.connect(this.destination),
                    e.start(0),
                    Promise.resolve()
                  )
                }),
              !AudioContext.prototype.createGain &&
                AudioContext.prototype.createGainNode &&
                (AudioContext.prototype.createGain =
                  AudioContext.prototype.createGainNode),
              !AudioContext.prototype.createDelay &&
                AudioContext.prototype.createDelayNode &&
                (AudioContext.prototype.createDelay =
                  AudioContext.prototype.createDelayNode)
            var r = !1,
              o = new OfflineAudioContext(1, 1, 44100),
              a = new Uint32Array([
                1179011410,
                48,
                1163280727,
                544501094,
                16,
                131073,
                44100,
                176400,
                1048580,
                1635017060,
                8,
                0,
                0,
                0,
                0
              ]).buffer
            try {
              var s = o.decodeAudioData(a)
              s && i.default.isFunction(s.then) && (r = !0)
            } catch (t) {
              r = !1
            }
            r ||
              ((AudioContext.prototype._native_decodeAudioData =
                AudioContext.prototype.decodeAudioData),
              (AudioContext.prototype.decodeAudioData = function(t) {
                return new Promise(
                  function(e, n) {
                    this._native_decodeAudioData(t, e, n)
                  }.bind(this)
                )
              }))
          }
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(63),
            (i.default.TransportTime = function(t, e) {
              if (!(this instanceof i.default.TransportTime))
                return new i.default.TransportTime(t, e)
              i.default.Time.call(this, t, e)
            }),
            i.default.extend(i.default.TransportTime, i.default.Time),
            (i.default.TransportTime.prototype._now = function() {
              return i.default.Transport.seconds
            }),
            (e.default = i.default.TransportTime)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(62),
            (i.default.Frequency = function(t, e) {
              if (!(this instanceof i.default.Frequency))
                return new i.default.Frequency(t, e)
              i.default.TimeBase.call(this, t, e)
            }),
            i.default.extend(i.default.Frequency, i.default.TimeBase),
            (i.default.Frequency.prototype._expressions = Object.assign(
              {},
              i.default.TimeBase.prototype._expressions,
              {
                midi: {
                  regexp: /^(\d+(?:\.\d+)?midi)/,
                  method: function(t) {
                    return 'midi' === this._defaultUnits
                      ? t
                      : i.default.Frequency.mtof(t)
                  }
                },
                note: {
                  regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                  method: function(t, e) {
                    var n = r[t.toLowerCase()] + 12 * (parseInt(e) + 1)
                    return 'midi' === this._defaultUnits
                      ? n
                      : i.default.Frequency.mtof(n)
                  }
                },
                tr: {
                  regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                  method: function(t, e, n) {
                    var i = 1
                    return (
                      t &&
                        '0' !== t &&
                        (i *= this._beatsToUnits(
                          this._getTimeSignature() * parseFloat(t)
                        )),
                      e &&
                        '0' !== e &&
                        (i *= this._beatsToUnits(parseFloat(e))),
                      n &&
                        '0' !== n &&
                        (i *= this._beatsToUnits(parseFloat(n) / 4)),
                      i
                    )
                  }
                }
              }
            )),
            (i.default.Frequency.prototype.transpose = function(t) {
              return new this.constructor(
                this.valueOf() * i.default.intervalToFrequencyRatio(t)
              )
            }),
            (i.default.Frequency.prototype.harmonize = function(t) {
              return t.map(
                function(t) {
                  return this.transpose(t)
                }.bind(this)
              )
            }),
            (i.default.Frequency.prototype.toMidi = function() {
              return i.default.Frequency.ftom(this.valueOf())
            }),
            (i.default.Frequency.prototype.toNote = function() {
              var t = this.toFrequency(),
                e = Math.log2(t / i.default.Frequency.A4),
                n = Math.round(12 * e) + 57,
                r = Math.floor(n / 12)
              return r < 0 && (n += -12 * r), o[n % 12] + r.toString()
            }),
            (i.default.Frequency.prototype.toSeconds = function() {
              return 1 / i.default.TimeBase.prototype.toSeconds.call(this)
            }),
            (i.default.Frequency.prototype.toFrequency = function() {
              return i.default.TimeBase.prototype.toFrequency.call(this)
            }),
            (i.default.Frequency.prototype.toTicks = function() {
              var t = this._beatsToUnits(1),
                e = this.valueOf() / t
              return Math.floor(e * i.default.Transport.PPQ)
            }),
            (i.default.Frequency.prototype._noArg = function() {
              return 0
            }),
            (i.default.Frequency.prototype._frequencyToUnits = function(t) {
              return t
            }),
            (i.default.Frequency.prototype._ticksToUnits = function(t) {
              return (
                1 /
                (60 *
                  t /
                  (i.default.Transport.bpm.value * i.default.Transport.PPQ))
              )
            }),
            (i.default.Frequency.prototype._beatsToUnits = function(t) {
              return (
                1 / i.default.TimeBase.prototype._beatsToUnits.call(this, t)
              )
            }),
            (i.default.Frequency.prototype._secondsToUnits = function(t) {
              return 1 / t
            }),
            (i.default.Frequency.prototype._defaultUnits = 'hz')
          var r = {
              cbb: -2,
              cb: -1,
              c: 0,
              'c#': 1,
              cx: 2,
              dbb: 0,
              db: 1,
              d: 2,
              'd#': 3,
              dx: 4,
              ebb: 2,
              eb: 3,
              e: 4,
              'e#': 5,
              ex: 6,
              fbb: 3,
              fb: 4,
              f: 5,
              'f#': 6,
              fx: 7,
              gbb: 5,
              gb: 6,
              g: 7,
              'g#': 8,
              gx: 9,
              abb: 7,
              ab: 8,
              a: 9,
              'a#': 10,
              ax: 11,
              bbb: 9,
              bb: 10,
              b: 11,
              'b#': 12,
              bx: 13
            },
            o = [
              'C',
              'C#',
              'D',
              'D#',
              'E',
              'F',
              'F#',
              'G',
              'G#',
              'A',
              'A#',
              'B'
            ]
          ;(i.default.Frequency.A4 = 440),
            (i.default.Frequency.mtof = function(t) {
              return i.default.Frequency.A4 * Math.pow(2, (t - 69) / 12)
            }),
            (i.default.Frequency.ftom = function(t) {
              return 69 + Math.round(12 * Math.log2(t / i.default.Frequency.A4))
            }),
            (e.default = i.default.Frequency)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(61),
            n(4),
            n(1),
            (i.default.Envelope = function() {
              var t = i.default.defaults(
                arguments,
                ['attack', 'decay', 'sustain', 'release'],
                i.default.Envelope
              )
              i.default.AudioNode.call(this),
                (this.attack = t.attack),
                (this.decay = t.decay),
                (this.sustain = t.sustain),
                (this.release = t.release),
                (this._attackCurve = 'linear'),
                (this._releaseCurve = 'exponential'),
                (this._sig = this.output = new i.default.Signal(0)),
                (this.attackCurve = t.attackCurve),
                (this.releaseCurve = t.releaseCurve),
                (this.decayCurve = t.decayCurve)
            }),
            i.default.extend(i.default.Envelope, i.default.AudioNode),
            (i.default.Envelope.defaults = {
              attack: 0.01,
              decay: 0.1,
              sustain: 0.5,
              release: 1,
              attackCurve: 'linear',
              decayCurve: 'exponential',
              releaseCurve: 'exponential'
            }),
            Object.defineProperty(i.default.Envelope.prototype, 'value', {
              get: function() {
                return this.getValueAtTime(this.now())
              }
            }),
            (i.default.Envelope.prototype._getCurve = function(t, e) {
              if (i.default.isString(t)) return t
              if (i.default.isArray(t))
                for (var n in i.default.Envelope.Type)
                  if (i.default.Envelope.Type[n][e] === t) return n
            }),
            (i.default.Envelope.prototype._setCurve = function(t, e, n) {
              if (i.default.Envelope.Type.hasOwnProperty(n)) {
                var r = i.default.Envelope.Type[n]
                i.default.isObject(r) ? (this[t] = r[e]) : (this[t] = r)
              } else {
                if (!i.default.isArray(n))
                  throw new Error('Tone.Envelope: invalid curve: ' + n)
                this[t] = n
              }
            }),
            Object.defineProperty(i.default.Envelope.prototype, 'attackCurve', {
              get: function() {
                return this._getCurve(this._attackCurve, 'In')
              },
              set: function(t) {
                this._setCurve('_attackCurve', 'In', t)
              }
            }),
            Object.defineProperty(
              i.default.Envelope.prototype,
              'releaseCurve',
              {
                get: function() {
                  return this._getCurve(this._releaseCurve, 'Out')
                },
                set: function(t) {
                  this._setCurve('_releaseCurve', 'Out', t)
                }
              }
            ),
            Object.defineProperty(i.default.Envelope.prototype, 'decayCurve', {
              get: function() {
                return this._decayCurve
              },
              set: function(t) {
                if (!['linear', 'exponential'].includes(t))
                  throw new Error('Tone.Envelope: invalid curve: ' + t)
                this._decayCurve = t
              }
            }),
            (i.default.Envelope.prototype.triggerAttack = function(t, e) {
              this.log('triggerAttack', t, e), (t = this.toSeconds(t))
              var n = this.toSeconds(this.attack),
                r = this.toSeconds(this.decay)
              e = i.default.defaultArg(e, 1)
              var o = this.getValueAtTime(t)
              if ((o > 0 && (n = (1 - o) / (1 / n)), 0 === n))
                this._sig.setValueAtTime(e, t)
              else if ('linear' === this._attackCurve)
                this._sig.linearRampTo(e, n, t)
              else if ('exponential' === this._attackCurve)
                this._sig.targetRampTo(e, n, t)
              else if (n > 0) {
                this._sig.cancelAndHoldAtTime(t)
                for (var a = this._attackCurve, s = 1; s < a.length; s++)
                  if (a[s - 1] <= o && o <= a[s]) {
                    ;(a = this._attackCurve.slice(s))[0] = o
                    break
                  }
                this._sig.setValueCurveAtTime(a, t, n, e)
              }
              if (r) {
                var u = e * this.sustain,
                  l = t + n
                this.log('decay', l),
                  'linear' === this._decayCurve
                    ? this._sig.linearRampTo(u, r, l + this.sampleTime)
                    : 'exponential' === this._decayCurve &&
                      this._sig.exponentialApproachValueAtTime(u, l, r)
              }
              return this
            }),
            (i.default.Envelope.prototype.triggerRelease = function(t) {
              this.log('triggerRelease', t), (t = this.toSeconds(t))
              var e = this.getValueAtTime(t)
              if (e > 0) {
                var n = this.toSeconds(this.release)
                if ('linear' === this._releaseCurve)
                  this._sig.linearRampTo(0, n, t)
                else if ('exponential' === this._releaseCurve)
                  this._sig.targetRampTo(0, n, t)
                else {
                  var r = this._releaseCurve
                  i.default.isArray(r) &&
                    (this._sig.cancelAndHoldAtTime(t),
                    this._sig.setValueCurveAtTime(r, t, n, e))
                }
              }
              return this
            }),
            (i.default.Envelope.prototype.getValueAtTime = function(t) {
              return this._sig.getValueAtTime(t)
            }),
            (i.default.Envelope.prototype.triggerAttackRelease = function(
              t,
              e,
              n
            ) {
              return (
                (e = this.toSeconds(e)),
                this.triggerAttack(e, n),
                this.triggerRelease(e + this.toSeconds(t)),
                this
              )
            }),
            (i.default.Envelope.prototype.cancel = function(t) {
              return this._sig.cancelScheduledValues(t), this
            }),
            (i.default.Envelope.prototype.connect =
              i.default.SignalBase.prototype.connect),
            (function() {
              var t,
                e,
                n = []
              for (t = 0; t < 128; t++) n[t] = Math.sin(t / 127 * (Math.PI / 2))
              var r = []
              for (t = 0; t < 127; t++) {
                e = t / 127
                var o = Math.sin(e * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1
                r[t] = o / 10 + 0.83 * e
              }
              r[127] = 1
              var a = []
              for (t = 0; t < 128; t++) a[t] = Math.ceil(t / 127 * 5) / 5
              var s = []
              for (t = 0; t < 128; t++)
                (e = t / 127), (s[t] = 0.5 * (1 - Math.cos(Math.PI * e)))
              var u,
                l = []
              for (t = 0; t < 128; t++) {
                e = t / 127
                var f = 4 * Math.pow(e, 3) + 0.2,
                  c = Math.cos(f * Math.PI * 2 * e)
                l[t] = Math.abs(c * (1 - e))
              }
              function d(t) {
                for (var e = new Array(t.length), n = 0; n < t.length; n++)
                  e[n] = 1 - t[n]
                return e
              }
              i.default.Envelope.Type = {
                linear: 'linear',
                exponential: 'exponential',
                bounce: {In: d(l), Out: l},
                cosine: {In: n, Out: ((u = n), u.slice(0).reverse())},
                step: {In: a, Out: d(a)},
                ripple: {In: r, Out: d(r)},
                sine: {In: s, Out: d(s)}
              }
            })(),
            (i.default.Envelope.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._sig.dispose(),
                (this._sig = null),
                (this._attackCurve = null),
                (this._releaseCurve = null),
                this
              )
            }),
            (e.default = i.default.Envelope)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          if (
            (n(23),
            n(10),
            n(19),
            n(7),
            n(28),
            n(3),
            n(2),
            n(20),
            i.default.supported &&
              !i.default.global.AudioContext.prototype.createStereoPanner)
          ) {
            var r = function(t) {
              ;(this.context = t),
                (this.pan = new i.default.Signal(0, i.default.Type.AudioRange))
              var e = new i.default.WaveShaper(function(t) {
                  return i.default.equalPowerScale((t + 1) / 2)
                }, 4096),
                n = new i.default.WaveShaper(function(t) {
                  return i.default.equalPowerScale(1 - (t + 1) / 2)
                }, 4096),
                r = new i.default.Gain(),
                o = new i.default.Gain(),
                a = (this.input = new i.default.Split())
              ;(a._splitter.channelCountMode = 'explicit'),
                new i.default.Zero().fan(e, n)
              var s = (this.output = new i.default.Merge())
              a.left.chain(r, s.left),
                a.right.chain(o, s.right),
                this.pan.chain(n, r.gain),
                this.pan.chain(e, o.gain)
            }
            ;(r.prototype.disconnect = function() {
              this.output.disconnect.apply(this.output, arguments)
            }),
              (r.prototype.connect = function() {
                this.output.connect.apply(this.output, arguments)
              }),
              (AudioContext.prototype.createStereoPanner = function() {
                return new r(this)
              }),
              (i.default.Context.prototype.createStereoPanner = function() {
                return new r(this)
              })
          }
          n(22),
            n(1),
            (i.default.Panner = function() {
              var t = i.default.defaults(arguments, ['pan'], i.default.Panner)
              i.default.AudioNode.call(this),
                (this._panner = this.input = this.output = this.context.createStereoPanner()),
                (this.pan = this._panner.pan),
                (this.pan.value = t.pan),
                this._readOnly('pan')
            }),
            i.default.extend(i.default.Panner, i.default.AudioNode),
            (i.default.Panner.defaults = {pan: 0}),
            (i.default.Panner.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable('pan'),
                this._panner.disconnect(),
                (this._panner = null),
                (this.pan = null),
                this
              )
            }),
            (e.default = i.default.Panner)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(17),
            n(5),
            n(3),
            (i.default.FMOscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type', 'modulationType'],
                i.default.FMOscillator
              )
              i.default.Source.call(this, t),
                (this._carrier = new i.default.Oscillator(t.frequency, t.type)),
                (this.frequency = new i.default.Signal(
                  t.frequency,
                  i.default.Type.Frequency
                )),
                (this.detune = this._carrier.detune),
                (this.detune.value = t.detune),
                (this.modulationIndex = new i.default.Multiply(
                  t.modulationIndex
                )),
                (this.modulationIndex.units = i.default.Type.Positive),
                (this._modulator = new i.default.Oscillator(
                  t.frequency,
                  t.modulationType
                )),
                (this.harmonicity = new i.default.Multiply(t.harmonicity)),
                (this.harmonicity.units = i.default.Type.Positive),
                (this._modulationNode = new i.default.Gain(0)),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.frequency.chain(
                  this.modulationIndex,
                  this._modulationNode
                ),
                this._modulator.connect(this._modulationNode.gain),
                this._modulationNode.connect(this._carrier.frequency),
                this._carrier.connect(this.output),
                this.detune.connect(this._modulator.detune),
                (this.phase = t.phase),
                this._readOnly([
                  'modulationIndex',
                  'frequency',
                  'detune',
                  'harmonicity'
                ])
            }),
            i.default.extend(i.default.FMOscillator, i.default.Source),
            (i.default.FMOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              type: 'sine',
              modulationIndex: 2,
              modulationType: 'square',
              harmonicity: 1
            }),
            (i.default.FMOscillator.prototype._start = function(t) {
              this._modulator.start(t), this._carrier.start(t)
            }),
            (i.default.FMOscillator.prototype._stop = function(t) {
              this._modulator.stop(t), this._carrier.stop(t)
            }),
            (i.default.FMOscillator.prototype.restart = function(t) {
              this._modulator.restart(t), this._carrier.restart(t)
            }),
            Object.defineProperty(i.default.FMOscillator.prototype, 'type', {
              get: function() {
                return this._carrier.type
              },
              set: function(t) {
                this._carrier.type = t
              }
            }),
            Object.defineProperty(
              i.default.FMOscillator.prototype,
              'baseType',
              {
                get: function() {
                  return this._carrier.baseType
                },
                set: function(t) {
                  this._carrier.baseType = t
                }
              }
            ),
            Object.defineProperty(
              i.default.FMOscillator.prototype,
              'partialCount',
              {
                get: function() {
                  return this._carrier.partialCount
                },
                set: function(t) {
                  this._carrier.partialCount = t
                }
              }
            ),
            Object.defineProperty(
              i.default.FMOscillator.prototype,
              'modulationType',
              {
                get: function() {
                  return this._modulator.type
                },
                set: function(t) {
                  this._modulator.type = t
                }
              }
            ),
            Object.defineProperty(i.default.FMOscillator.prototype, 'phase', {
              get: function() {
                return this._carrier.phase
              },
              set: function(t) {
                ;(this._carrier.phase = t), (this._modulator.phase = t)
              }
            }),
            Object.defineProperty(
              i.default.FMOscillator.prototype,
              'partials',
              {
                get: function() {
                  return this._carrier.partials
                },
                set: function(t) {
                  this._carrier.partials = t
                }
              }
            ),
            (i.default.FMOscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this._writable([
                  'modulationIndex',
                  'frequency',
                  'detune',
                  'harmonicity'
                ]),
                this.frequency.dispose(),
                (this.frequency = null),
                (this.detune = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                this.modulationIndex.dispose(),
                (this.modulationIndex = null),
                this
              )
            }),
            (e.default = i.default.FMOscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(17),
            n(2),
            n(7),
            n(3),
            (i.default.PulseOscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'width'],
                i.default.Oscillator
              )
              i.default.Source.call(this, t),
                (this.width = new i.default.Signal(
                  t.width,
                  i.default.Type.NormalRange
                )),
                (this._widthGate = new i.default.Gain(0)),
                (this._sawtooth = new i.default.Oscillator({
                  frequency: t.frequency,
                  detune: t.detune,
                  type: 'sawtooth',
                  phase: t.phase
                })),
                (this.frequency = this._sawtooth.frequency),
                (this.detune = this._sawtooth.detune),
                (this._thresh = new i.default.WaveShaper(function(t) {
                  return t < 0 ? -1 : 1
                })),
                this._sawtooth.chain(this._thresh, this.output),
                this.width.chain(this._widthGate, this._thresh),
                this._readOnly(['width', 'frequency', 'detune'])
            }),
            i.default.extend(i.default.PulseOscillator, i.default.Source),
            (i.default.PulseOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              width: 0.2
            }),
            (i.default.PulseOscillator.prototype._start = function(t) {
              ;(t = this.toSeconds(t)),
                this._sawtooth.start(t),
                this._widthGate.gain.setValueAtTime(1, t)
            }),
            (i.default.PulseOscillator.prototype._stop = function(t) {
              ;(t = this.toSeconds(t)),
                this._sawtooth.stop(t),
                this._widthGate.gain.setValueAtTime(0, t)
            }),
            (i.default.PulseOscillator.prototype.restart = function(t) {
              this._sawtooth.restart(t),
                this._widthGate.gain.cancelScheduledValues(t),
                this._widthGate.gain.setValueAtTime(1, t)
            }),
            Object.defineProperty(
              i.default.PulseOscillator.prototype,
              'phase',
              {
                get: function() {
                  return this._sawtooth.phase
                },
                set: function(t) {
                  this._sawtooth.phase = t
                }
              }
            ),
            Object.defineProperty(i.default.PulseOscillator.prototype, 'type', {
              get: function() {
                return 'pulse'
              }
            }),
            Object.defineProperty(
              i.default.PulseOscillator.prototype,
              'baseType',
              {
                get: function() {
                  return 'pulse'
                }
              }
            ),
            Object.defineProperty(
              i.default.PulseOscillator.prototype,
              'partials',
              {
                get: function() {
                  return []
                }
              }
            ),
            (i.default.PulseOscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this._sawtooth.dispose(),
                (this._sawtooth = null),
                this._writable(['width', 'frequency', 'detune']),
                this.width.dispose(),
                (this.width = null),
                this._widthGate.dispose(),
                (this._widthGate = null),
                this._thresh.dispose(),
                (this._thresh = null),
                (this.frequency = null),
                (this.detune = null),
                this
              )
            }),
            (e.default = i.default.PulseOscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(16),
            n(4),
            n(34),
            (i.default.Event = function() {
              var t = i.default.defaults(
                arguments,
                ['callback', 'value'],
                i.default.Event
              )
              i.default.call(this),
                (this._loop = t.loop),
                (this.callback = t.callback),
                (this.value = t.value),
                (this._loopStart = this.toTicks(t.loopStart)),
                (this._loopEnd = this.toTicks(t.loopEnd)),
                (this._state = new i.default.TimelineState(
                  i.default.State.Stopped
                )),
                (this._playbackRate = 1),
                (this._startOffset = 0),
                (this._probability = t.probability),
                (this._humanize = t.humanize),
                (this.mute = t.mute),
                (this.playbackRate = t.playbackRate)
            }),
            i.default.extend(i.default.Event),
            (i.default.Event.defaults = {
              callback: i.default.noOp,
              loop: !1,
              loopEnd: '1m',
              loopStart: 0,
              playbackRate: 1,
              value: null,
              probability: 1,
              mute: !1,
              humanize: !1
            }),
            (i.default.Event.prototype._rescheduleEvents = function(t) {
              return (
                (t = i.default.defaultArg(t, -1)),
                this._state.forEachFrom(
                  t,
                  function(t) {
                    var e
                    if (t.state === i.default.State.Started) {
                      i.default.isDefined(t.id) &&
                        i.default.Transport.clear(t.id)
                      var n =
                        t.time +
                        Math.round(this.startOffset / this._playbackRate)
                      if (
                        !0 === this._loop ||
                        (i.default.isNumber(this._loop) && this._loop > 1)
                      ) {
                        ;(e = 1 / 0),
                          i.default.isNumber(this._loop) &&
                            (e = this._loop * this._getLoopDuration())
                        var r = this._state.getAfter(n)
                        null !== r && (e = Math.min(e, r.time - n)),
                          e !== 1 / 0 &&
                            (this._state.setStateAtTime(
                              i.default.State.Stopped,
                              n + e + 1
                            ),
                            (e = i.default.Ticks(e)))
                        var o = i.default.Ticks(this._getLoopDuration())
                        t.id = i.default.Transport.scheduleRepeat(
                          this._tick.bind(this),
                          o,
                          i.default.Ticks(n),
                          e
                        )
                      } else
                        t.id = i.default.Transport.schedule(
                          this._tick.bind(this),
                          i.default.Ticks(n)
                        )
                    }
                  }.bind(this)
                ),
                this
              )
            }),
            Object.defineProperty(i.default.Event.prototype, 'state', {
              get: function() {
                return this._state.getValueAtTime(i.default.Transport.ticks)
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'startOffset', {
              get: function() {
                return this._startOffset
              },
              set: function(t) {
                this._startOffset = t
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'probability', {
              get: function() {
                return this._probability
              },
              set: function(t) {
                this._probability = t
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'humanize', {
              get: function() {
                return this._humanize
              },
              set: function(t) {
                this._humanize = t
              }
            }),
            (i.default.Event.prototype.start = function(t) {
              return (
                (t = this.toTicks(t)),
                this._state.getValueAtTime(t) === i.default.State.Stopped &&
                  (this._state.add({
                    state: i.default.State.Started,
                    time: t,
                    id: void 0
                  }),
                  this._rescheduleEvents(t)),
                this
              )
            }),
            (i.default.Event.prototype.stop = function(t) {
              if (
                (this.cancel(t),
                (t = this.toTicks(t)),
                this._state.getValueAtTime(t) === i.default.State.Started)
              ) {
                this._state.setStateAtTime(i.default.State.Stopped, t)
                var e = this._state.getBefore(t),
                  n = t
                null !== e && (n = e.time), this._rescheduleEvents(n)
              }
              return this
            }),
            (i.default.Event.prototype.cancel = function(t) {
              return (
                (t = i.default.defaultArg(t, -1 / 0)),
                (t = this.toTicks(t)),
                this._state.forEachFrom(t, function(t) {
                  i.default.Transport.clear(t.id)
                }),
                this._state.cancel(t),
                this
              )
            }),
            (i.default.Event.prototype._tick = function(t) {
              var e = i.default.Transport.getTicksAtTime(t)
              if (
                !this.mute &&
                this._state.getValueAtTime(e) === i.default.State.Started
              ) {
                if (this.probability < 1 && Math.random() > this.probability)
                  return
                if (this.humanize) {
                  var n = 0.02
                  i.default.isBoolean(this.humanize) ||
                    (n = this.toSeconds(this.humanize)),
                    (t += (2 * Math.random() - 1) * n)
                }
                this.callback(t, this.value)
              }
            }),
            (i.default.Event.prototype._getLoopDuration = function() {
              return Math.round(
                (this._loopEnd - this._loopStart) / this._playbackRate
              )
            }),
            Object.defineProperty(i.default.Event.prototype, 'loop', {
              get: function() {
                return this._loop
              },
              set: function(t) {
                ;(this._loop = t), this._rescheduleEvents()
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'playbackRate', {
              get: function() {
                return this._playbackRate
              },
              set: function(t) {
                ;(this._playbackRate = t), this._rescheduleEvents()
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'loopEnd', {
              get: function() {
                return i.default.Ticks(this._loopEnd).toSeconds()
              },
              set: function(t) {
                ;(this._loopEnd = this.toTicks(t)),
                  this._loop && this._rescheduleEvents()
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'loopStart', {
              get: function() {
                return i.default.Ticks(this._loopStart).toSeconds()
              },
              set: function(t) {
                ;(this._loopStart = this.toTicks(t)),
                  this._loop && this._rescheduleEvents()
              }
            }),
            Object.defineProperty(i.default.Event.prototype, 'progress', {
              get: function() {
                if (this._loop) {
                  var t = i.default.Transport.ticks,
                    e = this._state.get(t)
                  if (null !== e && e.state === i.default.State.Started) {
                    var n = this._getLoopDuration()
                    return ((t - e.time) % n) / n
                  }
                  return 0
                }
                return 0
              }
            }),
            (i.default.Event.prototype.dispose = function() {
              this.cancel(),
                this._state.dispose(),
                (this._state = null),
                (this.callback = null),
                (this.value = null)
            }),
            (e.default = i.default.Event)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(13),
            n(29),
            n(10),
            n(3),
            n(1),
            (i.default.MidSideMerge = function() {
              i.default.AudioNode.call(this),
                this.createInsOuts(2, 0),
                (this.mid = this.input[0] = new i.default.Gain()),
                (this._left = new i.default.Add()),
                (this._timesTwoLeft = new i.default.Multiply(Math.SQRT1_2)),
                (this.side = this.input[1] = new i.default.Gain()),
                (this._right = new i.default.Subtract()),
                (this._timesTwoRight = new i.default.Multiply(Math.SQRT1_2)),
                (this._merge = this.output = new i.default.Merge()),
                this.mid.connect(this._left, 0, 0),
                this.side.connect(this._left, 0, 1),
                this.mid.connect(this._right, 0, 0),
                this.side.connect(this._right, 0, 1),
                this._left.connect(this._timesTwoLeft),
                this._right.connect(this._timesTwoRight),
                this._timesTwoLeft.connect(this._merge, 0, 0),
                this._timesTwoRight.connect(this._merge, 0, 1)
            }),
            i.default.extend(i.default.MidSideMerge, i.default.AudioNode),
            (i.default.MidSideMerge.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this.mid.dispose(),
                (this.mid = null),
                this.side.dispose(),
                (this.side = null),
                this._left.dispose(),
                (this._left = null),
                this._timesTwoLeft.dispose(),
                (this._timesTwoLeft = null),
                this._right.dispose(),
                (this._right = null),
                this._timesTwoRight.dispose(),
                (this._timesTwoRight = null),
                this._merge.dispose(),
                (this._merge = null),
                this
              )
            }),
            (e.default = i.default.MidSideMerge)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(29),
            n(13),
            n(2),
            n(19),
            n(1),
            (i.default.MidSideSplit = function() {
              i.default.AudioNode.call(this),
                this.createInsOuts(0, 2),
                (this._split = this.input = new i.default.Split()),
                (this._midAdd = new i.default.Add()),
                (this.mid = this.output[0] = new i.default.Multiply(
                  Math.SQRT1_2
                )),
                (this._sideSubtract = new i.default.Subtract()),
                (this.side = this.output[1] = new i.default.Multiply(
                  Math.SQRT1_2
                )),
                this._split.connect(this._midAdd, 0, 0),
                this._split.connect(this._midAdd, 1, 1),
                this._split.connect(this._sideSubtract, 0, 0),
                this._split.connect(this._sideSubtract, 1, 1),
                this._midAdd.connect(this.mid),
                this._sideSubtract.connect(this.side)
            }),
            i.default.extend(i.default.MidSideSplit, i.default.AudioNode),
            (i.default.MidSideSplit.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this.mid.dispose(),
                (this.mid = null),
                this.side.dispose(),
                (this.side = null),
                this._midAdd.dispose(),
                (this._midAdd = null),
                this._sideSubtract.dispose(),
                (this._sideSubtract = null),
                this._split.dispose(),
                (this._split = null),
                this
              )
            }),
            (e.default = i.default.MidSideSplit)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(9),
            n(1),
            n(59),
            (i.default.LowpassCombFilter = function() {
              var t = i.default.defaults(
                arguments,
                ['delayTime', 'resonance', 'dampening'],
                i.default.LowpassCombFilter
              )
              i.default.AudioNode.call(this),
                (this._combFilter = this.output = new i.default.FeedbackCombFilter(
                  t.delayTime,
                  t.resonance
                )),
                (this.delayTime = this._combFilter.delayTime),
                (this._lowpass = this.input = new i.default.Filter({
                  frequency: t.dampening,
                  type: 'lowpass',
                  Q: 0,
                  rolloff: -12
                })),
                (this.dampening = this._lowpass.frequency),
                (this.resonance = this._combFilter.resonance),
                this._lowpass.connect(this._combFilter),
                this._readOnly(['dampening', 'resonance', 'delayTime'])
            }),
            i.default.extend(i.default.LowpassCombFilter, i.default.AudioNode),
            (i.default.LowpassCombFilter.defaults = {
              delayTime: 0.1,
              resonance: 0.5,
              dampening: 3e3
            }),
            (i.default.LowpassCombFilter.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable(['dampening', 'resonance', 'delayTime']),
                this._combFilter.dispose(),
                (this._combFilter = null),
                (this.resonance = null),
                (this.delayTime = null),
                this._lowpass.dispose(),
                (this._lowpass = null),
                (this.dampening = null),
                this
              )
            }),
            (e.default = i.default.LowpassCombFilter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(45),
            (i.default.Ticks = function(t, e) {
              if (!(this instanceof i.default.Ticks))
                return new i.default.Ticks(t, e)
              i.default.TransportTime.call(this, t, e)
            }),
            i.default.extend(i.default.Ticks, i.default.TransportTime),
            (i.default.Ticks.prototype._defaultUnits = 'i'),
            (i.default.Ticks.prototype._now = function() {
              return i.default.Transport.ticks
            }),
            (i.default.Ticks.prototype._beatsToUnits = function(t) {
              return this._getPPQ() * t
            }),
            (i.default.Ticks.prototype._secondsToUnits = function(t) {
              return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
            }),
            (i.default.Ticks.prototype._ticksToUnits = function(t) {
              return t
            }),
            (i.default.Ticks.prototype.toTicks = function() {
              return this.valueOf()
            }),
            (i.default.Ticks.prototype.toSeconds = function() {
              return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
            }),
            (e.default = i.default.Ticks)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(55),
            (i.default.TransportEvent = function(t, e) {
              ;(e = i.default.defaultArg(e, i.default.TransportEvent.defaults)),
                i.default.call(this),
                (this.Transport = t),
                (this.id = i.default.TransportEvent._eventId++),
                (this.time = i.default.Ticks(e.time)),
                (this.callback = e.callback),
                (this._once = e.once)
            }),
            i.default.extend(i.default.TransportEvent),
            (i.default.TransportEvent.defaults = {
              once: !1,
              callback: i.default.noOp
            }),
            (i.default.TransportEvent._eventId = 0),
            (i.default.TransportEvent.prototype.invoke = function(t) {
              this.callback &&
                (this.callback(t),
                this._once && this.Transport && this.Transport.clear(this.id))
            }),
            (i.default.TransportEvent.prototype.dispose = function() {
              return (
                i.default.prototype.dispose.call(this),
                (this.Transport = null),
                (this.callback = null),
                (this.time = null),
                this
              )
            }),
            (e.default = i.default.TransportEvent)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(82),
            n(34),
            n(24),
            n(14),
            (i.default.TickSource = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency'],
                i.default.TickSource
              )
              ;(this.frequency = new i.default.TickSignal(t.frequency)),
                this._readOnly('frequency'),
                (this._state = new i.default.TimelineState(
                  i.default.State.Stopped
                )),
                this._state.setStateAtTime(i.default.State.Stopped, 0),
                (this._tickOffset = new i.default.Timeline()),
                this.setTicksAtTime(0, 0)
            }),
            i.default.extend(i.default.TickSource),
            (i.default.TickSource.defaults = {frequency: 1}),
            Object.defineProperty(i.default.TickSource.prototype, 'state', {
              get: function() {
                return this._state.getValueAtTime(this.now())
              }
            }),
            (i.default.TickSource.prototype.start = function(t, e) {
              return (
                (t = this.toSeconds(t)),
                this._state.getValueAtTime(t) !== i.default.State.Started &&
                  (this._state.setStateAtTime(i.default.State.Started, t),
                  i.default.isDefined(e) && this.setTicksAtTime(e, t)),
                this
              )
            }),
            (i.default.TickSource.prototype.stop = function(t) {
              if (
                ((t = this.toSeconds(t)),
                this._state.getValueAtTime(t) === i.default.State.Stopped)
              ) {
                var e = this._state.get(t)
                e.time > 0 &&
                  (this._tickOffset.cancel(e.time), this._state.cancel(e.time))
              }
              return (
                this._state.cancel(t),
                this._state.setStateAtTime(i.default.State.Stopped, t),
                this.setTicksAtTime(0, t),
                this
              )
            }),
            (i.default.TickSource.prototype.pause = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._state.getValueAtTime(t) === i.default.State.Started &&
                  this._state.setStateAtTime(i.default.State.Paused, t),
                this
              )
            }),
            (i.default.TickSource.prototype.cancel = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._state.cancel(t),
                this._tickOffset.cancel(t),
                this
              )
            }),
            (i.default.TickSource.prototype.getTicksAtTime = function(t) {
              t = this.toSeconds(t)
              var e = this._state.getLastState(i.default.State.Stopped, t),
                n = {state: i.default.State.Paused, time: t}
              this._state.add(n)
              var r = e,
                o = 0
              return (
                this._state.forEachBetween(
                  e.time,
                  t + this.sampleTime,
                  function(t) {
                    var e = r.time,
                      n = this._tickOffset.get(t.time)
                    n.time >= r.time && ((o = n.ticks), (e = n.time)),
                      r.state === i.default.State.Started &&
                        t.state !== i.default.State.Started &&
                        (o +=
                          this.frequency.getTicksAtTime(t.time) -
                          this.frequency.getTicksAtTime(e)),
                      (r = t)
                  }.bind(this)
                ),
                this._state.remove(n),
                o
              )
            }),
            Object.defineProperty(i.default.TickSource.prototype, 'ticks', {
              get: function() {
                return this.getTicksAtTime(this.now())
              },
              set: function(t) {
                this.setTicksAtTime(t, this.now())
              }
            }),
            Object.defineProperty(i.default.TickSource.prototype, 'seconds', {
              get: function() {
                return this.getSecondsAtTime(this.now())
              },
              set: function(t) {
                var e = this.now(),
                  n = this.frequency.timeToTicks(t, e)
                this.setTicksAtTime(n, e)
              }
            }),
            (i.default.TickSource.prototype.getSecondsAtTime = function(t) {
              t = this.toSeconds(t)
              var e = this._state.getLastState(i.default.State.Stopped, t),
                n = {state: i.default.State.Paused, time: t}
              this._state.add(n)
              var r = e,
                o = 0
              return (
                this._state.forEachBetween(
                  e.time,
                  t + this.sampleTime,
                  function(t) {
                    var e = r.time,
                      n = this._tickOffset.get(t.time)
                    n.time >= r.time && ((o = n.seconds), (e = n.time)),
                      r.state === i.default.State.Started &&
                        t.state !== i.default.State.Started &&
                        (o += t.time - e),
                      (r = t)
                  }.bind(this)
                ),
                this._state.remove(n),
                o
              )
            }),
            (i.default.TickSource.prototype.setTicksAtTime = function(t, e) {
              return (
                (e = this.toSeconds(e)),
                this._tickOffset.cancel(e),
                this._tickOffset.add({
                  time: e,
                  ticks: t,
                  seconds: this.frequency.getDurationOfTicks(t, e)
                }),
                this
              )
            }),
            (i.default.TickSource.prototype.getStateAtTime = function(t) {
              return (t = this.toSeconds(t)), this._state.getValueAtTime(t)
            }),
            (i.default.TickSource.prototype.getTimeOfTick = function(t, e) {
              e = i.default.defaultArg(e, this.now())
              var n = this._tickOffset.get(e),
                r = this._state.get(e),
                o = Math.max(n.time, r.time),
                a = this.frequency.getTicksAtTime(o) + t - n.ticks
              return this.frequency.getTimeOfTick(a)
            }),
            (i.default.TickSource.prototype.forEachTickBetween = function(
              t,
              e,
              n
            ) {
              var r = this._state.get(t)
              if (
                (this._state.forEachBetween(
                  t,
                  e,
                  function(e) {
                    r.state === i.default.State.Started &&
                      e.state !== i.default.State.Started &&
                      this.forEachTickBetween(
                        Math.max(r.time, t),
                        e.time - this.sampleTime,
                        n
                      ),
                      (r = e)
                  }.bind(this)
                ),
                (t = Math.max(r.time, t)),
                r.state === i.default.State.Started && this._state)
              ) {
                var o = this.frequency.getTicksAtTime(t),
                  a = (o - this.frequency.getTicksAtTime(r.time)) % 1
                0 !== a && (a = 1 - a)
                for (
                  var s = this.frequency.getTimeOfTick(o + a), u = null;
                  s < e && this._state;

                ) {
                  try {
                    n(s, Math.round(this.getTicksAtTime(s)))
                  } catch (t) {
                    u = t
                    break
                  }
                  this._state && (s += this.frequency.getDurationOfTicks(1, s))
                }
              }
              if (u) throw u
              return this
            }),
            (i.default.TickSource.prototype.dispose = function() {
              return (
                i.default.Param.prototype.dispose.call(this),
                this._state.dispose(),
                (this._state = null),
                this._tickOffset.dispose(),
                (this._tickOffset = null),
                this._writable('frequency'),
                this.frequency.dispose(),
                (this.frequency = null),
                this
              )
            }),
            (e.default = i.default.TickSource)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(87),
            n(13),
            n(2),
            n(4),
            n(18),
            n(1),
            (i.default.Follower = function() {
              var t = i.default.defaults(
                arguments,
                ['smoothing'],
                i.default.Follower
              )
              i.default.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._abs = new i.default.Abs()),
                (this._filter = this.context.createBiquadFilter()),
                (this._filter.type = 'lowpass'),
                (this._filter.frequency.value = 0),
                (this._filter.Q.value = 0),
                (this._sub = new i.default.Subtract()),
                (this._delay = new i.default.Delay(this.blockTime)),
                (this._smoothing = t.smoothing),
                i.default.connect(this.input, this._delay),
                i.default.connect(this.input, this._sub, 0, 1),
                this._sub.chain(this._abs, this._filter, this.output),
                (this.smoothing = t.smoothing)
            }),
            i.default.extend(i.default.Follower, i.default.AudioNode),
            (i.default.Follower.defaults = {smoothing: 0.05}),
            Object.defineProperty(i.default.Follower.prototype, 'smoothing', {
              get: function() {
                return this._smoothing
              },
              set: function(t) {
                ;(this._smoothing = t),
                  (this._filter.frequency.value =
                    0.5 * i.default.Time(t).toFrequency())
              }
            }),
            (i.default.Follower.prototype.connect =
              i.default.SignalBase.prototype.connect),
            (i.default.Follower.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._filter.disconnect(),
                (this._filter = null),
                this._delay.dispose(),
                (this._delay = null),
                this._sub.disconnect(),
                (this._sub = null),
                this._abs.dispose(),
                (this._abs = null),
                this
              )
            }),
            (e.default = i.default.Follower)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(42),
            n(2),
            n(14),
            n(18),
            n(3),
            n(1),
            (i.default.FeedbackCombFilter = function() {
              var t = i.default.defaults(
                arguments,
                ['delayTime', 'resonance'],
                i.default.FeedbackCombFilter
              )
              i.default.AudioNode.call(this),
                (this._delay = this.input = this.output = new i.default.Delay(
                  t.delayTime
                )),
                (this.delayTime = this._delay.delayTime),
                (this._feedback = new i.default.Gain(
                  t.resonance,
                  i.default.Type.NormalRange
                )),
                (this.resonance = this._feedback.gain),
                this._delay.chain(this._feedback, this._delay),
                this._readOnly(['resonance', 'delayTime'])
            }),
            i.default.extend(i.default.FeedbackCombFilter, i.default.AudioNode),
            (i.default.FeedbackCombFilter.defaults = {
              delayTime: 0.1,
              resonance: 0.5
            }),
            (i.default.FeedbackCombFilter.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable(['resonance', 'delayTime']),
                this._delay.dispose(),
                (this._delay = null),
                (this.delayTime = null),
                this._feedback.dispose(),
                (this._feedback = null),
                (this.resonance = null),
                this
              )
            }),
            (e.default = i.default.FeedbackCombFilter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(9),
            n(2),
            n(3),
            n(1),
            (i.default.MultibandSplit = function() {
              var t = i.default.defaults(
                arguments,
                ['lowFrequency', 'highFrequency'],
                i.default.MultibandSplit
              )
              i.default.AudioNode.call(this),
                (this.input = new i.default.Gain()),
                (this.output = new Array(3)),
                (this.low = this.output[0] = new i.default.Filter(
                  0,
                  'lowpass'
                )),
                (this._lowMidFilter = new i.default.Filter(0, 'highpass')),
                (this.mid = this.output[1] = new i.default.Filter(
                  0,
                  'lowpass'
                )),
                (this.high = this.output[2] = new i.default.Filter(
                  0,
                  'highpass'
                )),
                (this.lowFrequency = new i.default.Signal(
                  t.lowFrequency,
                  i.default.Type.Frequency
                )),
                (this.highFrequency = new i.default.Signal(
                  t.highFrequency,
                  i.default.Type.Frequency
                )),
                (this.Q = new i.default.Signal(t.Q)),
                this.input.fan(this.low, this.high),
                this.input.chain(this._lowMidFilter, this.mid),
                this.lowFrequency.connect(this.low.frequency),
                this.lowFrequency.connect(this._lowMidFilter.frequency),
                this.highFrequency.connect(this.mid.frequency),
                this.highFrequency.connect(this.high.frequency),
                this.Q.connect(this.low.Q),
                this.Q.connect(this._lowMidFilter.Q),
                this.Q.connect(this.mid.Q),
                this.Q.connect(this.high.Q),
                this._readOnly([
                  'high',
                  'mid',
                  'low',
                  'highFrequency',
                  'lowFrequency'
                ])
            }),
            i.default.extend(i.default.MultibandSplit, i.default.AudioNode),
            (i.default.MultibandSplit.defaults = {
              lowFrequency: 400,
              highFrequency: 2500,
              Q: 1
            }),
            (i.default.MultibandSplit.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable([
                  'high',
                  'mid',
                  'low',
                  'highFrequency',
                  'lowFrequency'
                ]),
                this.low.dispose(),
                (this.low = null),
                this._lowMidFilter.dispose(),
                (this._lowMidFilter = null),
                this.mid.dispose(),
                (this.mid = null),
                this.high.dispose(),
                (this.high = null),
                this.lowFrequency.dispose(),
                (this.lowFrequency = null),
                this.highFrequency.dispose(),
                (this.highFrequency = null),
                this.Q.dispose(),
                (this.Q = null),
                this
              )
            }),
            (e.default = i.default.MultibandSplit)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(7),
            (i.default.Pow = function(t) {
              i.default.SignalBase.call(this),
                (this._exp = i.default.defaultArg(t, 1)),
                (this._expScaler = this.input = this.output = new i.default.WaveShaper(
                  this._expFunc(this._exp),
                  8192
                ))
            }),
            i.default.extend(i.default.Pow, i.default.SignalBase),
            Object.defineProperty(i.default.Pow.prototype, 'value', {
              get: function() {
                return this._exp
              },
              set: function(t) {
                ;(this._exp = t),
                  this._expScaler.setMap(this._expFunc(this._exp))
              }
            }),
            (i.default.Pow.prototype._expFunc = function(t) {
              return function(e) {
                return Math.pow(Math.abs(e), t)
              }
            }),
            (i.default.Pow.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._expScaler.dispose(),
                (this._expScaler = null),
                this
              )
            }),
            (e.default = i.default.Pow)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          ;(i.default.TimeBase = function(t, e) {
            if (!(this instanceof i.default.TimeBase))
              return new i.default.TimeBase(t, e)
            if (
              ((this._val = t),
              (this._units = e),
              i.default.isUndef(this._units) &&
                i.default.isString(this._val) &&
                parseFloat(this._val) == this._val &&
                '+' !== this._val.charAt(0))
            )
              (this._val = parseFloat(this._val)),
                (this._units = this._defaultUnits)
            else if (t && t.constructor === this.constructor)
              (this._val = t._val), (this._units = t._units)
            else if (t instanceof i.default.TimeBase)
              switch (this._defaultUnits) {
                case 's':
                  this._val = t.toSeconds()
                  break
                case 'i':
                  this._val = t.toTicks()
                  break
                case 'hz':
                  this._val = t.toFrequency()
                  break
                case 'midi':
                  this._val = t.toMidi()
                  break
                default:
                  throw new Error(
                    'Unrecognized default units ' + this._defaultUnits
                  )
              }
          }),
            i.default.extend(i.default.TimeBase),
            (i.default.TimeBase.prototype._expressions = {
              n: {
                regexp: /^(\d+)n(\.?)$/i,
                method: function(t, e) {
                  t = parseInt(t)
                  var n = '.' === e ? 1.5 : 1
                  return 1 === t
                    ? this._beatsToUnits(this._getTimeSignature()) * n
                    : this._beatsToUnits(4 / t) * n
                }
              },
              t: {
                regexp: /^(\d+)t$/i,
                method: function(t) {
                  return (
                    (t = parseInt(t)), this._beatsToUnits(8 / (3 * parseInt(t)))
                  )
                }
              },
              m: {
                regexp: /^(\d+)m$/i,
                method: function(t) {
                  return this._beatsToUnits(
                    parseInt(t) * this._getTimeSignature()
                  )
                }
              },
              i: {
                regexp: /^(\d+)i$/i,
                method: function(t) {
                  return this._ticksToUnits(parseInt(t))
                }
              },
              hz: {
                regexp: /^(\d+(?:\.\d+)?)hz$/i,
                method: function(t) {
                  return this._frequencyToUnits(parseFloat(t))
                }
              },
              tr: {
                regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
                method: function(t, e, n) {
                  var i = 0
                  return (
                    t &&
                      '0' !== t &&
                      (i += this._beatsToUnits(
                        this._getTimeSignature() * parseFloat(t)
                      )),
                    e && '0' !== e && (i += this._beatsToUnits(parseFloat(e))),
                    n &&
                      '0' !== n &&
                      (i += this._beatsToUnits(parseFloat(n) / 4)),
                    i
                  )
                }
              },
              s: {
                regexp: /^(\d+(?:\.\d+)?)s$/,
                method: function(t) {
                  return this._secondsToUnits(parseFloat(t))
                }
              },
              samples: {
                regexp: /^(\d+)samples$/,
                method: function(t) {
                  return parseInt(t) / this.context.sampleRate
                }
              },
              default: {
                regexp: /^(\d+(?:\.\d+)?)$/,
                method: function(t) {
                  return this._expressions[this._defaultUnits].method.call(
                    this,
                    t
                  )
                }
              }
            }),
            (i.default.TimeBase.prototype._defaultUnits = 's'),
            (i.default.TimeBase.prototype._getBpm = function() {
              return i.default.Transport ? i.default.Transport.bpm.value : 120
            }),
            (i.default.TimeBase.prototype._getTimeSignature = function() {
              return i.default.Transport ? i.default.Transport.timeSignature : 4
            }),
            (i.default.TimeBase.prototype._getPPQ = function() {
              return i.default.Transport ? i.default.Transport.PPQ : 192
            }),
            (i.default.TimeBase.prototype._now = function() {
              return this.now()
            }),
            (i.default.TimeBase.prototype._frequencyToUnits = function(t) {
              return 1 / t
            }),
            (i.default.TimeBase.prototype._beatsToUnits = function(t) {
              return 60 / this._getBpm() * t
            }),
            (i.default.TimeBase.prototype._secondsToUnits = function(t) {
              return t
            }),
            (i.default.TimeBase.prototype._ticksToUnits = function(t) {
              return t * (this._beatsToUnits(1) / this._getPPQ())
            }),
            (i.default.TimeBase.prototype._noArg = function() {
              return this._now()
            }),
            (i.default.TimeBase.prototype.valueOf = function() {
              if (i.default.isUndef(this._val)) return this._noArg()
              if (
                i.default.isString(this._val) &&
                i.default.isUndef(this._units)
              ) {
                for (var t in this._expressions)
                  if (this._expressions[t].regexp.test(this._val.trim())) {
                    this._units = t
                    break
                  }
              } else if (i.default.isObject(this._val)) {
                var e = 0
                for (var n in this._val) {
                  var r = this._val[n]
                  e += new this.constructor(n).valueOf() * r
                }
                return e
              }
              if (i.default.isDefined(this._units)) {
                var o = this._expressions[this._units],
                  a = this._val
                    .toString()
                    .trim()
                    .match(o.regexp)
                return a
                  ? o.method.apply(this, a.slice(1))
                  : o.method.call(this, parseFloat(this._val))
              }
              return this._val
            }),
            (i.default.TimeBase.prototype.toSeconds = function() {
              return this.valueOf()
            }),
            (i.default.TimeBase.prototype.toFrequency = function() {
              return 1 / this.toSeconds()
            }),
            (i.default.TimeBase.prototype.toSamples = function() {
              return this.toSeconds() * this.context.sampleRate
            }),
            (i.default.TimeBase.prototype.toMilliseconds = function() {
              return 1e3 * this.toSeconds()
            }),
            (i.default.TimeBase.prototype.dispose = function() {
              ;(this._val = null), (this._units = null)
            }),
            (e.default = i.default.TimeBase)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(62),
            n(46),
            (i.default.Time = function(t, e) {
              if (!(this instanceof i.default.Time))
                return new i.default.Time(t, e)
              i.default.TimeBase.call(this, t, e)
            }),
            i.default.extend(i.default.Time, i.default.TimeBase),
            (i.default.Time.prototype._expressions = Object.assign(
              {},
              i.default.TimeBase.prototype._expressions,
              {
                quantize: {
                  regexp: /^@(.+)/,
                  method: function(t) {
                    if (i.default.Transport) {
                      var e = new this.constructor(t)
                      return this._secondsToUnits(
                        i.default.Transport.nextSubdivision(e)
                      )
                    }
                    return 0
                  }
                },
                now: {
                  regexp: /^\+(.+)/,
                  method: function(t) {
                    return this._now() + new this.constructor(t)
                  }
                }
              }
            )),
            (i.default.Time.prototype.quantize = function(t, e) {
              e = i.default.defaultArg(e, 1)
              var n = new this.constructor(t),
                r = this.valueOf()
              return r + (Math.round(r / n) * n - r) * e
            }),
            (i.default.Time.prototype.toNotation = function() {
              for (var t = this.toSeconds(), e = ['1m'], n = 1; n < 8; n++) {
                var r = Math.pow(2, n)
                e.push(r + 'n.'), e.push(r + 'n'), e.push(r + 't')
              }
              e.push('0')
              var o = e[0],
                a = i.default.Time(e[0]).toSeconds()
              return (
                e.forEach(function(e) {
                  var n = i.default.Time(e).toSeconds()
                  Math.abs(n - t) < Math.abs(a - t) && ((o = e), (a = n))
                }),
                o
              )
            }),
            (i.default.Time.prototype.toBarsBeatsSixteenths = function() {
              var t = this._beatsToUnits(1),
                e = this.valueOf() / t
              e = parseFloat(e.toFixed(4))
              var n = Math.floor(e / this._getTimeSignature()),
                i = (e % 1) * 4
              return (
                (e = Math.floor(e) % this._getTimeSignature()),
                (i = i.toString()).length > 3 &&
                  (i = parseFloat(parseFloat(i).toFixed(3))),
                [n, e, i].join(':')
              )
            }),
            (i.default.Time.prototype.toTicks = function() {
              var t = this._beatsToUnits(1),
                e = this.valueOf() / t
              return Math.round(e * this._getPPQ())
            }),
            (i.default.Time.prototype.toSeconds = function() {
              return this.valueOf()
            }),
            (i.default.Time.prototype.toMidi = function() {
              return i.default.Frequency.ftom(this.toFrequency())
            }),
            (e.default = i.default.Time)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(11),
            n(6),
            n(3),
            n(1),
            i.default.supported &&
              (OscillatorNode.prototype.setPeriodicWave ||
                (OscillatorNode.prototype.setPeriodicWave =
                  OscillatorNode.prototype.setWaveTable),
              AudioContext.prototype.createPeriodicWave ||
                (AudioContext.prototype.createPeriodicWave =
                  AudioContext.prototype.createWaveTable)),
            (i.default.OscillatorNode = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type'],
                i.default.OscillatorNode
              )
              i.default.AudioNode.call(this, t),
                (this.onended = t.onended),
                (this._startTime = -1),
                (this._stopTime = -1),
                (this._gainNode = this.output = new i.default.Gain(0)),
                (this._oscillator = this.context.createOscillator()),
                i.default.connect(this._oscillator, this._gainNode),
                (this.type = t.type),
                (this.frequency = new i.default.Param({
                  param: this._oscillator.frequency,
                  units: i.default.Type.Frequency,
                  value: t.frequency
                })),
                (this.detune = new i.default.Param({
                  param: this._oscillator.detune,
                  units: i.default.Type.Cents,
                  value: t.detune
                })),
                (this._gain = 1)
            }),
            i.default.extend(i.default.OscillatorNode, i.default.AudioNode),
            (i.default.OscillatorNode.defaults = {
              frequency: 440,
              detune: 0,
              type: 'sine',
              onended: i.default.noOp
            }),
            Object.defineProperty(i.default.OscillatorNode.prototype, 'state', {
              get: function() {
                return this.getStateAtTime(this.now())
              }
            }),
            (i.default.OscillatorNode.prototype.getStateAtTime = function(t) {
              return (
                (t = this.toSeconds(t)),
                -1 !== this._startTime &&
                t >= this._startTime &&
                (-1 === this._stopTime || t <= this._stopTime)
                  ? i.default.State.Started
                  : i.default.State.Stopped
              )
            }),
            (i.default.OscillatorNode.prototype.start = function(t) {
              if ((this.log('start', t), -1 !== this._startTime))
                throw new Error(
                  'cannot call OscillatorNode.start more than once'
                )
              return (
                (this._startTime = this.toSeconds(t)),
                (this._startTime = Math.max(
                  this._startTime,
                  this.context.currentTime
                )),
                this._oscillator.start(this._startTime),
                this._gainNode.gain.setValueAtTime(1, this._startTime),
                this
              )
            }),
            (i.default.OscillatorNode.prototype.setPeriodicWave = function(t) {
              return this._oscillator.setPeriodicWave(t), this
            }),
            (i.default.OscillatorNode.prototype.stop = function(t) {
              return (
                this.log('stop', t),
                this.assert(
                  -1 !== this._startTime,
                  "'start' must be called before 'stop'"
                ),
                this.cancelStop(),
                (this._stopTime = this.toSeconds(t)),
                (this._stopTime = Math.max(
                  this._stopTime,
                  this.context.currentTime
                )),
                this._stopTime > this._startTime
                  ? (this._gainNode.gain.setValueAtTime(0, this._stopTime),
                    this.context.clearTimeout(this._timeout),
                    (this._timeout = this.context.setTimeout(
                      function() {
                        this._oscillator.stop(this.now()),
                          this.onended(),
                          setTimeout(
                            function() {
                              this._oscillator &&
                                (this._oscillator.disconnect(),
                                this._gainNode.disconnect())
                            }.bind(this),
                            100
                          )
                      }.bind(this),
                      this._stopTime - this.context.currentTime
                    )))
                  : this._gainNode.gain.cancelScheduledValues(this._startTime),
                this
              )
            }),
            (i.default.OscillatorNode.prototype.cancelStop = function() {
              return (
                -1 !== this._startTime &&
                  (this._gainNode.gain.cancelScheduledValues(
                    this._startTime + this.sampleTime
                  ),
                  this.context.clearTimeout(this._timeout),
                  (this._stopTime = -1)),
                this
              )
            }),
            Object.defineProperty(i.default.OscillatorNode.prototype, 'type', {
              get: function() {
                return this._oscillator.type
              },
              set: function(t) {
                this._oscillator.type = t
              }
            }),
            (i.default.OscillatorNode.prototype.dispose = function() {
              return (
                this._wasDisposed ||
                  ((this._wasDisposed = !0),
                  this.context.clearTimeout(this._timeout),
                  i.default.AudioNode.prototype.dispose.call(this),
                  (this.onended = null),
                  this._oscillator.disconnect(),
                  (this._oscillator = null),
                  this._gainNode.dispose(),
                  (this._gainNode = null),
                  this.frequency.dispose(),
                  (this.frequency = null),
                  this.detune.dispose(),
                  (this.detune = null)),
                this
              )
            }),
            (e.default = i.default.OscillatorNode)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(11),
            n(6),
            n(57),
            n(32),
            (i.default.Player = function(t) {
              var e
              t instanceof i.default.Buffer && t.loaded
                ? ((t = t.get()), (e = i.default.Player.defaults))
                : (e = i.default.defaults(
                    arguments,
                    ['url', 'onload'],
                    i.default.Player
                  )),
                i.default.Source.call(this, e),
                (this.autostart = e.autostart),
                (this._buffer = new i.default.Buffer({
                  url: e.url,
                  onload: this._onload.bind(this, e.onload),
                  reverse: e.reverse
                })),
                t instanceof AudioBuffer && this._buffer.set(t),
                (this._loop = e.loop),
                (this._loopStart = e.loopStart),
                (this._loopEnd = e.loopEnd),
                (this._playbackRate = e.playbackRate),
                (this._activeSources = []),
                (this.fadeIn = e.fadeIn),
                (this.fadeOut = e.fadeOut)
            }),
            i.default.extend(i.default.Player, i.default.Source),
            (i.default.Player.defaults = {
              onload: i.default.noOp,
              playbackRate: 1,
              loop: !1,
              autostart: !1,
              loopStart: 0,
              loopEnd: 0,
              reverse: !1,
              fadeIn: 0,
              fadeOut: 0
            }),
            (i.default.Player.prototype.load = function(t, e) {
              return this._buffer.load(t, this._onload.bind(this, e))
            }),
            (i.default.Player.prototype._onload = function(t) {
              ;(t = i.default.defaultArg(t, i.default.noOp))(this),
                this.autostart && this.start()
            }),
            (i.default.Player.prototype._onSourceEnd = function(t) {
              var e = this._activeSources.indexOf(t)
              this._activeSources.splice(e, 1),
                0 !== this._activeSources.length ||
                  this._synced ||
                  this._state.setStateAtTime(
                    i.default.State.Stopped,
                    i.default.now()
                  )
            }),
            (i.default.Player.prototype._start = function(t, e, n) {
              ;(e = this._loop
                ? i.default.defaultArg(e, this._loopStart)
                : i.default.defaultArg(e, 0)),
                (e = this.toSeconds(e)),
                this._synced && (e *= this._playbackRate)
              var r = i.default.defaultArg(
                n,
                Math.max(this._buffer.duration - e, 0)
              )
              ;(r = this.toSeconds(r)),
                (r /= this._playbackRate),
                (t = this.toSeconds(t))
              var o = new i.default.BufferSource({
                buffer: this._buffer,
                loop: this._loop,
                loopStart: this._loopStart,
                loopEnd: this._loopEnd,
                onended: this._onSourceEnd.bind(this),
                playbackRate: this._playbackRate,
                fadeIn: this.fadeIn,
                fadeOut: this.fadeOut
              }).connect(this.output)
              return (
                this._loop ||
                  this._synced ||
                  this._state.setStateAtTime(i.default.State.Stopped, t + r),
                this._activeSources.push(o),
                this._loop && i.default.isUndef(n)
                  ? o.start(t, e)
                  : o.start(t, e, r - this.toSeconds(this.fadeOut)),
                this
              )
            }),
            (i.default.Player.prototype._stop = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._activeSources.forEach(function(e) {
                  e.stop(t)
                }),
                this
              )
            }),
            (i.default.Player.prototype.restart = function(t, e, n) {
              return this._stop(t), this._start(t, e, n), this
            }),
            (i.default.Player.prototype.seek = function(t, e) {
              return (
                (e = this.toSeconds(e)),
                this._state.getValueAtTime(e) === i.default.State.Started &&
                  ((t = this.toSeconds(t)), this._stop(e), this._start(e, t)),
                this
              )
            }),
            (i.default.Player.prototype.setLoopPoints = function(t, e) {
              return (this.loopStart = t), (this.loopEnd = e), this
            }),
            Object.defineProperty(i.default.Player.prototype, 'loopStart', {
              get: function() {
                return this._loopStart
              },
              set: function(t) {
                ;(this._loopStart = t),
                  this._activeSources.forEach(function(e) {
                    e.loopStart = t
                  })
              }
            }),
            Object.defineProperty(i.default.Player.prototype, 'loopEnd', {
              get: function() {
                return this._loopEnd
              },
              set: function(t) {
                ;(this._loopEnd = t),
                  this._activeSources.forEach(function(e) {
                    e.loopEnd = t
                  })
              }
            }),
            Object.defineProperty(i.default.Player.prototype, 'buffer', {
              get: function() {
                return this._buffer
              },
              set: function(t) {
                this._buffer.set(t)
              }
            }),
            Object.defineProperty(i.default.Player.prototype, 'loop', {
              get: function() {
                return this._loop
              },
              set: function(t) {
                if (
                  this._loop !== t &&
                  ((this._loop = t),
                  this._activeSources.forEach(function(e) {
                    e.loop = t
                  }),
                  t)
                ) {
                  var e = this._state.getNextState(
                    i.default.State.Stopped,
                    this.now()
                  )
                  e && this._state.cancel(e.time)
                }
              }
            }),
            Object.defineProperty(i.default.Player.prototype, 'playbackRate', {
              get: function() {
                return this._playbackRate
              },
              set: function(t) {
                this._playbackRate = t
                var e = this.now(),
                  n = this._state.getNextState(i.default.State.Stopped, e)
                n && this._state.cancel(n.time),
                  this._activeSources.forEach(function(n) {
                    n.cancelStop(), n.playbackRate.setValueAtTime(t, e)
                  })
              }
            }),
            Object.defineProperty(i.default.Player.prototype, 'reverse', {
              get: function() {
                return this._buffer.reverse
              },
              set: function(t) {
                this._buffer.reverse = t
              }
            }),
            Object.defineProperty(i.default.Player.prototype, 'loaded', {
              get: function() {
                return this._buffer.loaded
              }
            }),
            (i.default.Player.prototype.dispose = function() {
              return (
                this._activeSources.forEach(function(t) {
                  t.dispose()
                }),
                (this._activeSources = null),
                i.default.Source.prototype.dispose.call(this),
                this._buffer.dispose(),
                (this._buffer = null),
                this
              )
            }),
            (e.default = i.default.Player)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(31),
            n(41),
            n(37),
            n(2),
            n(9),
            n(25),
            (i.default.MonoSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.MonoSynth.defaults)),
                i.default.Monophonic.call(this, t),
                (this.oscillator = new i.default.OmniOscillator(t.oscillator)),
                (this.frequency = this.oscillator.frequency),
                (this.detune = this.oscillator.detune),
                (this.filter = new i.default.Filter(t.filter)),
                (this.filter.frequency.value = 5e3),
                (this.filterEnvelope = new i.default.FrequencyEnvelope(
                  t.filterEnvelope
                )),
                (this.envelope = new i.default.AmplitudeEnvelope(t.envelope)),
                this.oscillator.chain(this.filter, this.envelope, this.output),
                this.filterEnvelope.connect(this.filter.frequency),
                this._readOnly([
                  'oscillator',
                  'frequency',
                  'detune',
                  'filter',
                  'filterEnvelope',
                  'envelope'
                ])
            }),
            i.default.extend(i.default.MonoSynth, i.default.Monophonic),
            (i.default.MonoSynth.defaults = {
              frequency: 'C4',
              detune: 0,
              oscillator: {type: 'square'},
              filter: {Q: 6, type: 'lowpass', rolloff: -24},
              envelope: {attack: 0.005, decay: 0.1, sustain: 0.9, release: 1},
              filterEnvelope: {
                attack: 0.06,
                decay: 0.2,
                sustain: 0.5,
                release: 2,
                baseFrequency: 200,
                octaves: 7,
                exponent: 2
              }
            }),
            (i.default.MonoSynth.prototype._triggerEnvelopeAttack = function(
              t,
              e
            ) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerAttack(t, e),
                this.filterEnvelope.triggerAttack(t),
                this.oscillator.start(t),
                0 === this.envelope.sustain &&
                  this.oscillator.stop(
                    t + this.envelope.attack + this.envelope.decay
                  ),
                this
              )
            }),
            (i.default.MonoSynth.prototype._triggerEnvelopeRelease = function(
              t
            ) {
              return (
                this.envelope.triggerRelease(t),
                this.filterEnvelope.triggerRelease(t),
                this.oscillator.stop(t + this.envelope.release),
                this
              )
            }),
            (i.default.MonoSynth.prototype.dispose = function() {
              return (
                i.default.Monophonic.prototype.dispose.call(this),
                this._writable([
                  'oscillator',
                  'frequency',
                  'detune',
                  'filter',
                  'filterEnvelope',
                  'envelope'
                ]),
                this.oscillator.dispose(),
                (this.oscillator = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this.filterEnvelope.dispose(),
                (this.filterEnvelope = null),
                this.filter.dispose(),
                (this.filter = null),
                (this.frequency = null),
                (this.detune = null),
                this
              )
            }),
            (e.default = i.default.MonoSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(17),
            n(5),
            n(3),
            (i.default.FatOscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type', 'spread'],
                i.default.FatOscillator
              )
              i.default.Source.call(this, t),
                (this.frequency = new i.default.Signal(
                  t.frequency,
                  i.default.Type.Frequency
                )),
                (this.detune = new i.default.Signal(
                  t.detune,
                  i.default.Type.Cents
                )),
                (this._oscillators = []),
                (this._spread = t.spread),
                (this._type = t.type),
                (this._phase = t.phase),
                (this._partials = t.partials),
                (this._partialCount = t.partialCount),
                (this.count = t.count),
                this._readOnly(['frequency', 'detune'])
            }),
            i.default.extend(i.default.FatOscillator, i.default.Source),
            (i.default.FatOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              spread: 20,
              count: 3,
              type: 'sawtooth',
              partials: [],
              partialCount: 0
            }),
            (i.default.FatOscillator.prototype._start = function(t) {
              ;(t = this.toSeconds(t)),
                this._forEach(function(e) {
                  e.start(t)
                })
            }),
            (i.default.FatOscillator.prototype._stop = function(t) {
              ;(t = this.toSeconds(t)),
                this._forEach(function(e) {
                  e.stop(t)
                })
            }),
            (i.default.FatOscillator.prototype.restart = function(t) {
              ;(t = this.toSeconds(t)),
                this._forEach(function(e) {
                  e.restart(t)
                })
            }),
            (i.default.FatOscillator.prototype._forEach = function(t) {
              for (var e = 0; e < this._oscillators.length; e++)
                t.call(this, this._oscillators[e], e)
            }),
            Object.defineProperty(i.default.FatOscillator.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                ;(this._type = t),
                  this._forEach(function(e) {
                    e.type = t
                  })
              }
            }),
            Object.defineProperty(i.default.FatOscillator.prototype, 'spread', {
              get: function() {
                return this._spread
              },
              set: function(t) {
                if (((this._spread = t), this._oscillators.length > 1)) {
                  var e = -t / 2,
                    n = t / (this._oscillators.length - 1)
                  this._forEach(function(t, i) {
                    t.detune.value = e + n * i
                  })
                }
              }
            }),
            Object.defineProperty(i.default.FatOscillator.prototype, 'count', {
              get: function() {
                return this._oscillators.length
              },
              set: function(t) {
                if (((t = Math.max(t, 1)), this._oscillators.length !== t)) {
                  this._forEach(function(t) {
                    t.dispose()
                  }),
                    (this._oscillators = [])
                  for (var e = 0; e < t; e++) {
                    var n = new i.default.Oscillator()
                    this.type === i.default.Oscillator.Type.Custom
                      ? (n.partials = this._partials)
                      : (n.type = this._type),
                      (n.partialCount = this._partialCount),
                      (n.phase = this._phase + e / t * 360),
                      (n.volume.value = -6 - 1.1 * t),
                      this.frequency.connect(n.frequency),
                      this.detune.connect(n.detune),
                      n.connect(this.output),
                      (this._oscillators[e] = n)
                  }
                  ;(this.spread = this._spread),
                    this.state === i.default.State.Started &&
                      this._forEach(function(t) {
                        t.start()
                      })
                }
              }
            }),
            Object.defineProperty(i.default.FatOscillator.prototype, 'phase', {
              get: function() {
                return this._phase
              },
              set: function(t) {
                ;(this._phase = t),
                  this._forEach(function(e) {
                    e.phase = t
                  })
              }
            }),
            Object.defineProperty(
              i.default.FatOscillator.prototype,
              'baseType',
              {
                get: function() {
                  return this._oscillators[0].baseType
                },
                set: function(t) {
                  this._forEach(function(e) {
                    e.baseType = t
                  }),
                    (this._type = this._oscillators[0].type)
                }
              }
            ),
            Object.defineProperty(
              i.default.FatOscillator.prototype,
              'partials',
              {
                get: function() {
                  return this._oscillators[0].partials
                },
                set: function(t) {
                  ;(this._partials = t),
                    (this._type = i.default.Oscillator.Type.Custom),
                    this._forEach(function(e) {
                      e.partials = t
                    })
                }
              }
            ),
            Object.defineProperty(
              i.default.FatOscillator.prototype,
              'partialCount',
              {
                get: function() {
                  return this._oscillators[0].partialCount
                },
                set: function(t) {
                  ;(this._partialCount = t),
                    this._forEach(function(e) {
                      e.partialCount = t
                    }),
                    (this._type = this._oscillators[0].type)
                }
              }
            ),
            (i.default.FatOscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this._writable(['frequency', 'detune']),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                this._forEach(function(t) {
                  t.dispose()
                }),
                (this._oscillators = null),
                (this._partials = null),
                this
              )
            }),
            (e.default = i.default.FatOscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(17),
            n(5),
            n(3),
            n(22),
            (i.default.AMOscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'type', 'modulationType'],
                i.default.AMOscillator
              )
              i.default.Source.call(this, t),
                (this._carrier = new i.default.Oscillator(t.frequency, t.type)),
                (this.frequency = this._carrier.frequency),
                (this.detune = this._carrier.detune),
                (this.detune.value = t.detune),
                (this._modulator = new i.default.Oscillator(
                  t.frequency,
                  t.modulationType
                )),
                (this._modulationScale = new i.default.AudioToGain()),
                (this.harmonicity = new i.default.Multiply(t.harmonicity)),
                (this.harmonicity.units = i.default.Type.Positive),
                (this._modulationNode = new i.default.Gain(0)),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.detune.connect(this._modulator.detune),
                this._modulator.chain(
                  this._modulationScale,
                  this._modulationNode.gain
                ),
                this._carrier.chain(this._modulationNode, this.output),
                (this.phase = t.phase),
                this._readOnly(['frequency', 'detune', 'harmonicity'])
            }),
            i.default.extend(i.default.AMOscillator, i.default.Oscillator),
            (i.default.AMOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              type: 'sine',
              modulationType: 'square',
              harmonicity: 1
            }),
            (i.default.AMOscillator.prototype._start = function(t) {
              this._modulator.start(t), this._carrier.start(t)
            }),
            (i.default.AMOscillator.prototype._stop = function(t) {
              this._modulator.stop(t), this._carrier.stop(t)
            }),
            (i.default.AMOscillator.prototype.restart = function(t) {
              this._modulator.restart(t), this._carrier.restart(t)
            }),
            Object.defineProperty(i.default.AMOscillator.prototype, 'type', {
              get: function() {
                return this._carrier.type
              },
              set: function(t) {
                this._carrier.type = t
              }
            }),
            Object.defineProperty(
              i.default.AMOscillator.prototype,
              'baseType',
              {
                get: function() {
                  return this._carrier.baseType
                },
                set: function(t) {
                  this._carrier.baseType = t
                }
              }
            ),
            Object.defineProperty(
              i.default.AMOscillator.prototype,
              'partialCount',
              {
                get: function() {
                  return this._carrier.partialCount
                },
                set: function(t) {
                  this._carrier.partialCount = t
                }
              }
            ),
            Object.defineProperty(
              i.default.AMOscillator.prototype,
              'modulationType',
              {
                get: function() {
                  return this._modulator.type
                },
                set: function(t) {
                  this._modulator.type = t
                }
              }
            ),
            Object.defineProperty(i.default.AMOscillator.prototype, 'phase', {
              get: function() {
                return this._carrier.phase
              },
              set: function(t) {
                ;(this._carrier.phase = t), (this._modulator.phase = t)
              }
            }),
            Object.defineProperty(
              i.default.AMOscillator.prototype,
              'partials',
              {
                get: function() {
                  return this._carrier.partials
                },
                set: function(t) {
                  this._carrier.partials = t
                }
              }
            ),
            (i.default.AMOscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this._writable(['frequency', 'detune', 'harmonicity']),
                (this.frequency = null),
                (this.detune = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                this._modulationScale.dispose(),
                (this._modulationScale = null),
                this
              )
            }),
            (e.default = i.default.AMOscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(50),
            n(17),
            n(5),
            (i.default.PWMOscillator = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'modulationFrequency'],
                i.default.PWMOscillator
              )
              i.default.Source.call(this, t),
                (this._pulse = new i.default.PulseOscillator(
                  t.modulationFrequency
                )),
                (this._pulse._sawtooth.type = 'sine'),
                (this._modulator = new i.default.Oscillator({
                  frequency: t.frequency,
                  detune: t.detune,
                  phase: t.phase
                })),
                (this._scale = new i.default.Multiply(2)),
                (this.frequency = this._modulator.frequency),
                (this.detune = this._modulator.detune),
                (this.modulationFrequency = this._pulse.frequency),
                this._modulator.chain(this._scale, this._pulse.width),
                this._pulse.connect(this.output),
                this._readOnly(['modulationFrequency', 'frequency', 'detune'])
            }),
            i.default.extend(i.default.PWMOscillator, i.default.Source),
            (i.default.PWMOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              modulationFrequency: 0.4
            }),
            (i.default.PWMOscillator.prototype._start = function(t) {
              ;(t = this.toSeconds(t)),
                this._modulator.start(t),
                this._pulse.start(t)
            }),
            (i.default.PWMOscillator.prototype._stop = function(t) {
              ;(t = this.toSeconds(t)),
                this._modulator.stop(t),
                this._pulse.stop(t)
            }),
            (i.default.PWMOscillator.prototype.restart = function(t) {
              this._modulator.restart(t), this._pulse.restart(t)
            }),
            Object.defineProperty(i.default.PWMOscillator.prototype, 'type', {
              get: function() {
                return 'pwm'
              }
            }),
            Object.defineProperty(
              i.default.PWMOscillator.prototype,
              'baseType',
              {
                get: function() {
                  return 'pwm'
                }
              }
            ),
            Object.defineProperty(
              i.default.PWMOscillator.prototype,
              'partials',
              {
                get: function() {
                  return []
                }
              }
            ),
            Object.defineProperty(i.default.PWMOscillator.prototype, 'phase', {
              get: function() {
                return this._modulator.phase
              },
              set: function(t) {
                this._modulator.phase = t
              }
            }),
            (i.default.PWMOscillator.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this._pulse.dispose(),
                (this._pulse = null),
                this._scale.dispose(),
                (this._scale = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this._writable(['modulationFrequency', 'frequency', 'detune']),
                (this.frequency = null),
                (this.detune = null),
                (this.modulationFrequency = null),
                this
              )
            }),
            (e.default = i.default.PWMOscillator)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(51),
            n(4),
            n(16),
            (i.default.Part = function() {
              var t = i.default.defaults(
                arguments,
                ['callback', 'events'],
                i.default.Part
              )
              i.default.Event.call(this, t), (this._events = [])
              for (var e = 0; e < t.events.length; e++)
                Array.isArray(t.events[e])
                  ? this.add(t.events[e][0], t.events[e][1])
                  : this.add(t.events[e])
            }),
            i.default.extend(i.default.Part, i.default.Event),
            (i.default.Part.defaults = {
              callback: i.default.noOp,
              loop: !1,
              loopEnd: '1m',
              loopStart: 0,
              playbackRate: 1,
              probability: 1,
              humanize: !1,
              mute: !1,
              events: []
            }),
            (i.default.Part.prototype.start = function(t, e) {
              var n = this.toTicks(t)
              return (
                this._state.getValueAtTime(n) !== i.default.State.Started &&
                  ((e = this._loop
                    ? i.default.defaultArg(e, this._loopStart)
                    : i.default.defaultArg(e, 0)),
                  (e = this.toTicks(e)),
                  this._state.add({
                    state: i.default.State.Started,
                    time: n,
                    offset: e
                  }),
                  this._forEach(function(t) {
                    this._startNote(t, n, e)
                  })),
                this
              )
            }),
            (i.default.Part.prototype._startNote = function(t, e, n) {
              ;(e -= n),
                this._loop
                  ? t.startOffset >= this._loopStart &&
                    t.startOffset < this._loopEnd
                    ? (t.startOffset < n && (e += this._getLoopDuration()),
                      t.start(i.default.Ticks(e)))
                    : t.startOffset < this._loopStart &&
                      t.startOffset >= n &&
                      ((t.loop = !1), t.start(i.default.Ticks(e)))
                  : t.startOffset >= n && t.start(i.default.Ticks(e))
            }),
            Object.defineProperty(i.default.Part.prototype, 'startOffset', {
              get: function() {
                return this._startOffset
              },
              set: function(t) {
                ;(this._startOffset = t),
                  this._forEach(function(t) {
                    t.startOffset += this._startOffset
                  })
              }
            }),
            (i.default.Part.prototype.stop = function(t) {
              var e = this.toTicks(t)
              return (
                this._state.cancel(e),
                this._state.setStateAtTime(i.default.State.Stopped, e),
                this._forEach(function(e) {
                  e.stop(t)
                }),
                this
              )
            }),
            (i.default.Part.prototype.at = function(t, e) {
              t = i.default.TransportTime(t)
              for (
                var n = i.default.Ticks(1).toSeconds(), r = 0;
                r < this._events.length;
                r++
              ) {
                var o = this._events[r]
                if (Math.abs(t.toTicks() - o.startOffset) < n)
                  return i.default.isDefined(e) && (o.value = e), o
              }
              return i.default.isDefined(e)
                ? (this.add(t, e), this._events[this._events.length - 1])
                : null
            }),
            (i.default.Part.prototype.add = function(t, e) {
              var n
              return (
                t.hasOwnProperty('time') && (t = (e = t).time),
                (t = this.toTicks(t)),
                e instanceof i.default.Event
                  ? ((n = e).callback = this._tick.bind(this))
                  : (n = new i.default.Event({
                      callback: this._tick.bind(this),
                      value: e
                    })),
                (n.startOffset = t),
                n.set({
                  loopEnd: this.loopEnd,
                  loopStart: this.loopStart,
                  loop: this.loop,
                  humanize: this.humanize,
                  playbackRate: this.playbackRate,
                  probability: this.probability
                }),
                this._events.push(n),
                this._restartEvent(n),
                this
              )
            }),
            (i.default.Part.prototype._restartEvent = function(t) {
              this._state.forEach(
                function(e) {
                  e.state === i.default.State.Started
                    ? this._startNote(t, e.time, e.offset)
                    : t.stop(i.default.Ticks(e.time))
                }.bind(this)
              )
            }),
            (i.default.Part.prototype.remove = function(t, e) {
              t.hasOwnProperty('time') && (t = (e = t).time),
                (t = this.toTicks(t))
              for (var n = this._events.length - 1; n >= 0; n--) {
                var r = this._events[n]
                r.startOffset === t &&
                  (i.default.isUndef(e) ||
                    (i.default.isDefined(e) && r.value === e)) &&
                  (this._events.splice(n, 1), r.dispose())
              }
              return this
            }),
            (i.default.Part.prototype.removeAll = function() {
              return (
                this._forEach(function(t) {
                  t.dispose()
                }),
                (this._events = []),
                this
              )
            }),
            (i.default.Part.prototype.cancel = function(t) {
              return (
                this._forEach(function(e) {
                  e.cancel(t)
                }),
                this._state.cancel(this.toTicks(t)),
                this
              )
            }),
            (i.default.Part.prototype._forEach = function(t, e) {
              if (this._events) {
                e = i.default.defaultArg(e, this)
                for (var n = this._events.length - 1; n >= 0; n--) {
                  var r = this._events[n]
                  r instanceof i.default.Part ? r._forEach(t, e) : t.call(e, r)
                }
              }
              return this
            }),
            (i.default.Part.prototype._setAll = function(t, e) {
              this._forEach(function(n) {
                n[t] = e
              })
            }),
            (i.default.Part.prototype._tick = function(t, e) {
              this.mute || this.callback(t, e)
            }),
            (i.default.Part.prototype._testLoopBoundries = function(t) {
              this._loop &&
              (t.startOffset < this._loopStart ||
                t.startOffset >= this._loopEnd)
                ? t.cancel(0)
                : t.state === i.default.State.Stopped && this._restartEvent(t)
            }),
            Object.defineProperty(i.default.Part.prototype, 'probability', {
              get: function() {
                return this._probability
              },
              set: function(t) {
                ;(this._probability = t), this._setAll('probability', t)
              }
            }),
            Object.defineProperty(i.default.Part.prototype, 'humanize', {
              get: function() {
                return this._humanize
              },
              set: function(t) {
                ;(this._humanize = t), this._setAll('humanize', t)
              }
            }),
            Object.defineProperty(i.default.Part.prototype, 'loop', {
              get: function() {
                return this._loop
              },
              set: function(t) {
                ;(this._loop = t),
                  this._forEach(function(e) {
                    ;(e._loopStart = this._loopStart),
                      (e._loopEnd = this._loopEnd),
                      (e.loop = t),
                      this._testLoopBoundries(e)
                  })
              }
            }),
            Object.defineProperty(i.default.Part.prototype, 'loopEnd', {
              get: function() {
                return i.default.Ticks(this._loopEnd).toSeconds()
              },
              set: function(t) {
                ;(this._loopEnd = this.toTicks(t)),
                  this._loop &&
                    this._forEach(function(e) {
                      ;(e.loopEnd = t), this._testLoopBoundries(e)
                    })
              }
            }),
            Object.defineProperty(i.default.Part.prototype, 'loopStart', {
              get: function() {
                return i.default.Ticks(this._loopStart).toSeconds()
              },
              set: function(t) {
                ;(this._loopStart = this.toTicks(t)),
                  this._loop &&
                    this._forEach(function(t) {
                      ;(t.loopStart = this.loopStart),
                        this._testLoopBoundries(t)
                    })
              }
            }),
            Object.defineProperty(i.default.Part.prototype, 'playbackRate', {
              get: function() {
                return this._playbackRate
              },
              set: function(t) {
                ;(this._playbackRate = t), this._setAll('playbackRate', t)
              }
            }),
            Object.defineProperty(i.default.Part.prototype, 'length', {
              get: function() {
                return this._events.length
              }
            }),
            (i.default.Part.prototype.dispose = function() {
              return (
                i.default.Event.prototype.dispose.call(this),
                this.removeAll(),
                (this.callback = null),
                (this._events = null),
                this
              )
            }),
            (e.default = i.default.Part)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(51),
            (i.default.Loop = function() {
              var t = i.default.defaults(
                arguments,
                ['callback', 'interval'],
                i.default.Loop
              )
              i.default.call(this),
                (this._event = new i.default.Event({
                  callback: this._tick.bind(this),
                  loop: !0,
                  loopEnd: t.interval,
                  playbackRate: t.playbackRate,
                  probability: t.probability
                })),
                (this.callback = t.callback),
                (this.iterations = t.iterations)
            }),
            i.default.extend(i.default.Loop),
            (i.default.Loop.defaults = {
              interval: '4n',
              callback: i.default.noOp,
              playbackRate: 1,
              iterations: 1 / 0,
              probability: !0,
              mute: !1
            }),
            (i.default.Loop.prototype.start = function(t) {
              return this._event.start(t), this
            }),
            (i.default.Loop.prototype.stop = function(t) {
              return this._event.stop(t), this
            }),
            (i.default.Loop.prototype.cancel = function(t) {
              return this._event.cancel(t), this
            }),
            (i.default.Loop.prototype._tick = function(t) {
              this.callback(t)
            }),
            Object.defineProperty(i.default.Loop.prototype, 'state', {
              get: function() {
                return this._event.state
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'progress', {
              get: function() {
                return this._event.progress
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'interval', {
              get: function() {
                return this._event.loopEnd
              },
              set: function(t) {
                this._event.loopEnd = t
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'playbackRate', {
              get: function() {
                return this._event.playbackRate
              },
              set: function(t) {
                this._event.playbackRate = t
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'humanize', {
              get: function() {
                return this._event.humanize
              },
              set: function(t) {
                this._event.humanize = t
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'probability', {
              get: function() {
                return this._event.probability
              },
              set: function(t) {
                this._event.probability = t
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'mute', {
              get: function() {
                return this._event.mute
              },
              set: function(t) {
                this._event.mute = t
              }
            }),
            Object.defineProperty(i.default.Loop.prototype, 'iterations', {
              get: function() {
                return !0 === this._event.loop ? 1 / 0 : this._event.loop
              },
              set: function(t) {
                this._event.loop = t === 1 / 0 || t
              }
            }),
            (i.default.Loop.prototype.dispose = function() {
              this._event.dispose(),
                (this._event = null),
                (this.callback = null)
            }),
            (e.default = i.default.Loop)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(15),
            n(33),
            (i.default.StereoXFeedbackEffect = function() {
              var t = i.default.defaults(
                arguments,
                ['feedback'],
                i.default.FeedbackEffect
              )
              i.default.StereoEffect.call(this, t),
                (this.feedback = new i.default.Signal(
                  t.feedback,
                  i.default.Type.NormalRange
                )),
                (this._feedbackLR = new i.default.Gain()),
                (this._feedbackRL = new i.default.Gain()),
                this.effectReturnL.chain(this._feedbackLR, this.effectSendR),
                this.effectReturnR.chain(this._feedbackRL, this.effectSendL),
                this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain),
                this._readOnly(['feedback'])
            }),
            i.default.extend(
              i.default.StereoXFeedbackEffect,
              i.default.StereoEffect
            ),
            (i.default.StereoXFeedbackEffect.prototype.dispose = function() {
              return (
                i.default.StereoEffect.prototype.dispose.call(this),
                this._writable(['feedback']),
                this.feedback.dispose(),
                (this.feedback = null),
                this._feedbackLR.dispose(),
                (this._feedbackLR = null),
                this._feedbackRL.dispose(),
                (this._feedbackRL = null),
                this
              )
            }),
            (e.default = i.default.StereoXFeedbackEffect)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(53),
            n(52),
            (i.default.MidSideEffect = function() {
              i.default.Effect.apply(this, arguments),
                (this._midSideSplit = new i.default.MidSideSplit()),
                (this._midSideMerge = new i.default.MidSideMerge()),
                (this.midSend = this._midSideSplit.mid),
                (this.sideSend = this._midSideSplit.side),
                (this.midReturn = this._midSideMerge.mid),
                (this.sideReturn = this._midSideMerge.side),
                this.effectSend.connect(this._midSideSplit),
                this._midSideMerge.connect(this.effectReturn)
            }),
            i.default.extend(i.default.MidSideEffect, i.default.Effect),
            (i.default.MidSideEffect.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._midSideSplit.dispose(),
                (this._midSideSplit = null),
                this._midSideMerge.dispose(),
                (this._midSideMerge = null),
                (this.midSend = null),
                (this.sideSend = null),
                (this.midReturn = null),
                (this.sideReturn = null),
                this
              )
            }),
            (e.default = i.default.MidSideEffect)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(11),
            n(8),
            (i.default.Convolver = function() {
              var t = i.default.defaults(
                arguments,
                ['url', 'onload'],
                i.default.Convolver
              )
              i.default.Effect.call(this, t),
                (this._convolver = this.context.createConvolver()),
                (this._buffer = new i.default.Buffer(
                  t.url,
                  function(e) {
                    ;(this.buffer = e.get()), t.onload()
                  }.bind(this)
                )),
                this._buffer.loaded && (this.buffer = this._buffer),
                (this.normalize = t.normalize),
                this.connectEffect(this._convolver)
            }),
            i.default.extend(i.default.Convolver, i.default.Effect),
            (i.default.Convolver.defaults = {
              onload: i.default.noOp,
              normalize: !0
            }),
            Object.defineProperty(i.default.Convolver.prototype, 'buffer', {
              get: function() {
                return this._buffer.length ? this._buffer : null
              },
              set: function(t) {
                this._buffer.set(t),
                  this._convolver.buffer &&
                    (this.effectSend.disconnect(),
                    this._convolver.disconnect(),
                    (this._convolver = this.context.createConvolver()),
                    this.connectEffect(this._convolver)),
                  (this._convolver.buffer = this._buffer.get())
              }
            }),
            Object.defineProperty(i.default.Convolver.prototype, 'normalize', {
              get: function() {
                return this._convolver.normalize
              },
              set: function(t) {
                this._convolver.normalize = t
              }
            }),
            (i.default.Convolver.prototype.load = function(t, e) {
              return this._buffer.load(
                t,
                function(t) {
                  ;(this.buffer = t), e && e()
                }.bind(this)
              )
            }),
            (i.default.Convolver.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._buffer.dispose(),
                (this._buffer = null),
                this._convolver.disconnect(),
                (this._convolver = null),
                this
              )
            }),
            (e.default = i.default.Convolver)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(7),
            n(5),
            n(13),
            (i.default.Modulo = function(t) {
              i.default.SignalBase.call(this),
                this.createInsOuts(1, 0),
                (this._shaper = new i.default.WaveShaper(Math.pow(2, 16))),
                (this._multiply = new i.default.Multiply()),
                (this._subtract = this.output = new i.default.Subtract()),
                (this._modSignal = new i.default.Signal(t)),
                i.default.connect(this.input, this._shaper),
                i.default.connect(this.input, this._subtract),
                this._modSignal.connect(this._multiply, 0, 0),
                this._shaper.connect(this._multiply, 0, 1),
                this._multiply.connect(this._subtract, 0, 1),
                this._setWaveShaper(t)
            }),
            i.default.extend(i.default.Modulo, i.default.SignalBase),
            (i.default.Modulo.prototype._setWaveShaper = function(t) {
              this._shaper.setMap(function(e) {
                return Math.floor((e + 1e-4) / t)
              })
            }),
            Object.defineProperty(i.default.Modulo.prototype, 'value', {
              get: function() {
                return this._modSignal.value
              },
              set: function(t) {
                ;(this._modSignal.value = t), this._setWaveShaper(t)
              }
            }),
            (i.default.Modulo.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._shaper.dispose(),
                (this._shaper = null),
                this._multiply.dispose(),
                (this._multiply = null),
                this._subtract.dispose(),
                (this._subtract = null),
                this._modSignal.dispose(),
                (this._modSignal = null),
                this
              )
            }),
            (e.default = i.default.Modulo)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(20),
            n(92),
            (i.default.OfflineContext = function(t, e, n) {
              var r = new OfflineAudioContext(t, e * n, n)
              i.default.Context.call(this, {
                context: r,
                clockSource: 'offline',
                lookAhead: 0,
                updateInterval: 128 / n
              }),
                (this._duration = e),
                (this._currentTime = 0)
            }),
            i.default.extend(i.default.OfflineContext, i.default.Context),
            (i.default.OfflineContext.prototype.now = function() {
              return this._currentTime
            }),
            (i.default.OfflineContext.prototype.resume = function() {
              return Promise.resolve()
            }),
            (i.default.OfflineContext.prototype.render = function() {
              for (; this._duration - this._currentTime >= 0; )
                this.emit('tick'), (this._currentTime += 0.005)
              return this._context.startRendering()
            }),
            (i.default.OfflineContext.prototype.close = function() {
              return (this._context = null), Promise.resolve()
            }),
            (e.default = i.default.OfflineContext)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(16),
            n(11),
            n(76),
            n(40),
            (i.default.Offline = function(t, e) {
              var n = i.default.context.sampleRate,
                r = i.default.context,
                o = new i.default.OfflineContext(2, e, n)
              i.default.context = o
              var a = t(i.default.Transport),
                s = null
              return (
                (s =
                  a && i.default.isFunction(a.then)
                    ? a.then(function() {
                        return o.render()
                      })
                    : o.render()),
                (i.default.context = r),
                s.then(function(t) {
                  return new i.default.Buffer(t)
                })
              )
            }),
            (e.default = i.default.Offline)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(11),
            (i.default.Buffers = function(t) {
              var e = Array.prototype.slice.call(arguments)
              e.shift()
              var n = i.default.defaults(
                e,
                ['onload', 'baseUrl'],
                i.default.Buffers
              )
              for (var r in (i.default.call(this),
              (this._buffers = {}),
              (this.baseUrl = n.baseUrl),
              (this._loadingCount = 0),
              t))
                this._loadingCount++,
                  this.add(r, t[r], this._bufferLoaded.bind(this, n.onload))
            }),
            i.default.extend(i.default.Buffers),
            (i.default.Buffers.defaults = {
              onload: i.default.noOp,
              baseUrl: ''
            }),
            (i.default.Buffers.prototype.has = function(t) {
              return this._buffers.hasOwnProperty(t)
            }),
            (i.default.Buffers.prototype.get = function(t) {
              if (this.has(t)) return this._buffers[t]
              throw new Error('Tone.Buffers: no buffer named ' + t)
            }),
            (i.default.Buffers.prototype._bufferLoaded = function(t) {
              this._loadingCount--, 0 === this._loadingCount && t && t(this)
            }),
            Object.defineProperty(i.default.Buffers.prototype, 'loaded', {
              get: function() {
                var t = !0
                for (var e in this._buffers) {
                  var n = this.get(e)
                  t = t && n.loaded
                }
                return t
              }
            }),
            (i.default.Buffers.prototype.add = function(t, e, n) {
              return (
                (n = i.default.defaultArg(n, i.default.noOp)),
                e instanceof i.default.Buffer
                  ? ((this._buffers[t] = e), n(this))
                  : e instanceof AudioBuffer
                    ? ((this._buffers[t] = new i.default.Buffer(e)), n(this))
                    : i.default.isString(e) &&
                      (this._buffers[t] = new i.default.Buffer(
                        this.baseUrl + e,
                        n
                      )),
                this
              )
            }),
            (i.default.Buffers.prototype.dispose = function() {
              for (var t in (i.default.prototype.dispose.call(this),
              this._buffers))
                this._buffers[t].dispose()
              return (this._buffers = null), this
            }),
            (e.default = i.default.Buffers)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          ;(i.default.CtrlPattern = function() {
            var t = i.default.defaults(
              arguments,
              ['values', 'type'],
              i.default.CtrlPattern
            )
            i.default.call(this),
              (this.values = t.values),
              (this.index = 0),
              (this._type = null),
              (this._shuffled = null),
              (this._direction = null),
              (this.type = t.type)
          }),
            i.default.extend(i.default.CtrlPattern),
            (i.default.CtrlPattern.Type = {
              Up: 'up',
              Down: 'down',
              UpDown: 'upDown',
              DownUp: 'downUp',
              AlternateUp: 'alternateUp',
              AlternateDown: 'alternateDown',
              Random: 'random',
              RandomWalk: 'randomWalk',
              RandomOnce: 'randomOnce'
            }),
            (i.default.CtrlPattern.defaults = {
              type: i.default.CtrlPattern.Type.Up,
              values: []
            }),
            Object.defineProperty(i.default.CtrlPattern.prototype, 'value', {
              get: function() {
                if (0 !== this.values.length) {
                  if (1 === this.values.length) return this.values[0]
                  this.index = Math.min(this.index, this.values.length - 1)
                  var t = this.values[this.index]
                  return (
                    this.type === i.default.CtrlPattern.Type.RandomOnce &&
                      (this.values.length !== this._shuffled.length &&
                        this._shuffleValues(),
                      (t = this.values[this._shuffled[this.index]])),
                    t
                  )
                }
              }
            }),
            Object.defineProperty(i.default.CtrlPattern.prototype, 'type', {
              get: function() {
                return this._type
              },
              set: function(t) {
                ;(this._type = t),
                  (this._shuffled = null),
                  this._type === i.default.CtrlPattern.Type.Up ||
                  this._type === i.default.CtrlPattern.Type.UpDown ||
                  this._type === i.default.CtrlPattern.Type.RandomOnce ||
                  this._type === i.default.CtrlPattern.Type.AlternateUp
                    ? (this.index = 0)
                    : (this._type !== i.default.CtrlPattern.Type.Down &&
                        this._type !== i.default.CtrlPattern.Type.DownUp &&
                        this._type !==
                          i.default.CtrlPattern.Type.AlternateDown) ||
                      (this.index = this.values.length - 1),
                  this._type === i.default.CtrlPattern.Type.UpDown ||
                  this._type === i.default.CtrlPattern.Type.AlternateUp
                    ? (this._direction = i.default.CtrlPattern.Type.Up)
                    : (this._type !== i.default.CtrlPattern.Type.DownUp &&
                        this._type !==
                          i.default.CtrlPattern.Type.AlternateDown) ||
                      (this._direction = i.default.CtrlPattern.Type.Down),
                  this._type === i.default.CtrlPattern.Type.RandomOnce
                    ? this._shuffleValues()
                    : this._type === i.default.CtrlPattern.Type.Random &&
                      (this.index = Math.floor(
                        Math.random() * this.values.length
                      ))
              }
            }),
            (i.default.CtrlPattern.prototype.next = function() {
              var t = this.type
              return (
                t === i.default.CtrlPattern.Type.Up
                  ? (this.index++,
                    this.index >= this.values.length && (this.index = 0))
                  : t === i.default.CtrlPattern.Type.Down
                    ? (this.index--,
                      this.index < 0 && (this.index = this.values.length - 1))
                    : t === i.default.CtrlPattern.Type.UpDown ||
                      t === i.default.CtrlPattern.Type.DownUp
                      ? (this._direction === i.default.CtrlPattern.Type.Up
                          ? this.index++
                          : this.index--,
                        this.index < 0
                          ? ((this.index = 1),
                            (this._direction = i.default.CtrlPattern.Type.Up))
                          : this.index >= this.values.length &&
                            ((this.index = this.values.length - 2),
                            (this._direction =
                              i.default.CtrlPattern.Type.Down)))
                      : t === i.default.CtrlPattern.Type.Random
                        ? (this.index = Math.floor(
                            Math.random() * this.values.length
                          ))
                        : t === i.default.CtrlPattern.Type.RandomWalk
                          ? Math.random() < 0.5
                            ? (this.index--,
                              (this.index = Math.max(this.index, 0)))
                            : (this.index++,
                              (this.index = Math.min(
                                this.index,
                                this.values.length - 1
                              )))
                          : t === i.default.CtrlPattern.Type.RandomOnce
                            ? (this.index++,
                              this.index >= this.values.length &&
                                ((this.index = 0), this._shuffleValues()))
                            : t === i.default.CtrlPattern.Type.AlternateUp
                              ? (this._direction ===
                                i.default.CtrlPattern.Type.Up
                                  ? ((this.index += 2),
                                    (this._direction =
                                      i.default.CtrlPattern.Type.Down))
                                  : ((this.index -= 1),
                                    (this._direction =
                                      i.default.CtrlPattern.Type.Up)),
                                this.index >= this.values.length &&
                                  ((this.index = 0),
                                  (this._direction =
                                    i.default.CtrlPattern.Type.Up)))
                              : t ===
                                  i.default.CtrlPattern.Type.AlternateDown &&
                                (this._direction ===
                                i.default.CtrlPattern.Type.Up
                                  ? ((this.index += 1),
                                    (this._direction =
                                      i.default.CtrlPattern.Type.Down))
                                  : ((this.index -= 2),
                                    (this._direction =
                                      i.default.CtrlPattern.Type.Up)),
                                this.index < 0 &&
                                  ((this.index = this.values.length - 1),
                                  (this._direction =
                                    i.default.CtrlPattern.Type.Down))),
                this.value
              )
            }),
            (i.default.CtrlPattern.prototype._shuffleValues = function() {
              var t = []
              this._shuffled = []
              for (var e = 0; e < this.values.length; e++) t[e] = e
              for (; t.length > 0; ) {
                var n = t.splice(Math.floor(t.length * Math.random()), 1)
                this._shuffled.push(n[0])
              }
            }),
            (i.default.CtrlPattern.prototype.dispose = function() {
              ;(this._shuffled = null), (this.values = null)
            }),
            (e.default = i.default.CtrlPattern)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(56),
            n(55),
            (i.default.TransportRepeatEvent = function(t, e) {
              i.default.TransportEvent.call(this, t, e),
                (e = i.default.defaultArg(
                  e,
                  i.default.TransportRepeatEvent.defaults
                )),
                (this.duration = i.default.Ticks(e.duration)),
                (this._interval = i.default.Ticks(e.interval)),
                (this._currentId = -1),
                (this._nextId = -1),
                (this._nextTick = this.time),
                (this._boundRestart = this._restart.bind(this)),
                this.Transport.on('start loopStart', this._boundRestart),
                this._restart()
            }),
            i.default.extend(
              i.default.TransportRepeatEvent,
              i.default.TransportEvent
            ),
            (i.default.TransportRepeatEvent.defaults = {
              duration: 1 / 0,
              interval: 1
            }),
            (i.default.TransportRepeatEvent.prototype.invoke = function(t) {
              this._createEvents(t),
                i.default.TransportEvent.prototype.invoke.call(this, t)
            }),
            (i.default.TransportRepeatEvent.prototype._createEvents = function(
              t
            ) {
              var e = this.Transport.getTicksAtTime(t)
              e >= this.time &&
                e >= this._nextTick &&
                this._nextTick + this._interval < this.time + this.duration &&
                ((this._nextTick += this._interval),
                (this._currentId = this._nextId),
                (this._nextId = this.Transport.scheduleOnce(
                  this.invoke.bind(this),
                  i.default.Ticks(this._nextTick)
                )))
            }),
            (i.default.TransportRepeatEvent.prototype._restart = function(t) {
              this.Transport.clear(this._currentId),
                this.Transport.clear(this._nextId),
                (this._nextTick = this.time)
              var e = this.Transport.getTicksAtTime(t)
              e > this.time &&
                (this._nextTick =
                  this.time +
                  Math.ceil((e - this.time) / this._interval) * this._interval),
                (this._currentId = this.Transport.scheduleOnce(
                  this.invoke.bind(this),
                  i.default.Ticks(this._nextTick)
                )),
                (this._nextTick += this._interval),
                (this._nextId = this.Transport.scheduleOnce(
                  this.invoke.bind(this),
                  i.default.Ticks(this._nextTick)
                ))
            }),
            (i.default.TransportRepeatEvent.prototype.dispose = function() {
              return (
                this.Transport.clear(this._currentId),
                this.Transport.clear(this._nextId),
                this.Transport.off('start loopStart', this._boundRestart),
                (this._boundCreateEvents = null),
                i.default.TransportEvent.prototype.dispose.call(this),
                (this.duration = null),
                (this._interval = null),
                this
              )
            }),
            (e.default = i.default.TransportRepeatEvent)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(4),
            (i.default.IntervalTimeline = function() {
              i.default.call(this), (this._root = null), (this._length = 0)
            }),
            i.default.extend(i.default.IntervalTimeline),
            (i.default.IntervalTimeline.prototype.add = function(t) {
              if (i.default.isUndef(t.time) || i.default.isUndef(t.duration))
                throw new Error(
                  'Tone.IntervalTimeline: events must have time and duration parameters'
                )
              t.time = t.time.valueOf()
              var e = new r(t.time, t.time + t.duration, t)
              for (
                null === this._root ? (this._root = e) : this._root.insert(e),
                  this._length++;
                null !== e;

              )
                e.updateHeight(),
                  e.updateMax(),
                  this._rebalance(e),
                  (e = e.parent)
              return this
            }),
            (i.default.IntervalTimeline.prototype.remove = function(t) {
              if (null !== this._root) {
                var e = []
                this._root.search(t.time, e)
                for (var n = 0; n < e.length; n++) {
                  var i = e[n]
                  if (i.event === t) {
                    this._removeNode(i), this._length--
                    break
                  }
                }
              }
              return this
            }),
            Object.defineProperty(
              i.default.IntervalTimeline.prototype,
              'length',
              {
                get: function() {
                  return this._length
                }
              }
            ),
            (i.default.IntervalTimeline.prototype.cancel = function(t) {
              return (
                this.forEachFrom(
                  t,
                  function(t) {
                    this.remove(t)
                  }.bind(this)
                ),
                this
              )
            }),
            (i.default.IntervalTimeline.prototype._setRoot = function(t) {
              ;(this._root = t),
                null !== this._root && (this._root.parent = null)
            }),
            (i.default.IntervalTimeline.prototype._replaceNodeInParent = function(
              t,
              e
            ) {
              null !== t.parent
                ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
                  this._rebalance(t.parent))
                : this._setRoot(e)
            }),
            (i.default.IntervalTimeline.prototype._removeNode = function(t) {
              if (null === t.left && null === t.right)
                this._replaceNodeInParent(t, null)
              else if (null === t.right) this._replaceNodeInParent(t, t.left)
              else if (null === t.left) this._replaceNodeInParent(t, t.right)
              else {
                var e, n
                if (t.getBalance() > 0)
                  if (null === t.left.right)
                    ((e = t.left).right = t.right), (n = e)
                  else {
                    for (e = t.left.right; null !== e.right; ) e = e.right
                    ;(e.parent.right = e.left),
                      (n = e.parent),
                      (e.left = t.left),
                      (e.right = t.right)
                  }
                else if (null === t.right.left)
                  ((e = t.right).left = t.left), (n = e)
                else {
                  for (e = t.right.left; null !== e.left; ) e = e.left
                  ;(e.parent.left = e.right),
                    (n = e.parent),
                    (e.left = t.left),
                    (e.right = t.right)
                }
                null !== t.parent
                  ? t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e)
                  : this._setRoot(e),
                  this._rebalance(n)
              }
              t.dispose()
            }),
            (i.default.IntervalTimeline.prototype._rotateLeft = function(t) {
              var e = t.parent,
                n = t.isLeftChild(),
                i = t.right
              ;(t.right = i.left),
                (i.left = t),
                null !== e
                  ? n ? (e.left = i) : (e.right = i)
                  : this._setRoot(i)
            }),
            (i.default.IntervalTimeline.prototype._rotateRight = function(t) {
              var e = t.parent,
                n = t.isLeftChild(),
                i = t.left
              ;(t.left = i.right),
                (i.right = t),
                null !== e
                  ? n ? (e.left = i) : (e.right = i)
                  : this._setRoot(i)
            }),
            (i.default.IntervalTimeline.prototype._rebalance = function(t) {
              var e = t.getBalance()
              e > 1
                ? t.left.getBalance() < 0
                  ? this._rotateLeft(t.left)
                  : this._rotateRight(t)
                : e < -1 &&
                  (t.right.getBalance() > 0
                    ? this._rotateRight(t.right)
                    : this._rotateLeft(t))
            }),
            (i.default.IntervalTimeline.prototype.get = function(t) {
              if (null !== this._root) {
                var e = []
                if ((this._root.search(t, e), e.length > 0)) {
                  for (var n = e[0], i = 1; i < e.length; i++)
                    e[i].low > n.low && (n = e[i])
                  return n.event
                }
              }
              return null
            }),
            (i.default.IntervalTimeline.prototype.forEach = function(t) {
              if (null !== this._root) {
                var e = []
                this._root.traverse(function(t) {
                  e.push(t)
                })
                for (var n = 0; n < e.length; n++) {
                  var i = e[n].event
                  i && t(i)
                }
              }
              return this
            }),
            (i.default.IntervalTimeline.prototype.forEachAtTime = function(
              t,
              e
            ) {
              if (null !== this._root) {
                var n = []
                this._root.search(t, n)
                for (var i = n.length - 1; i >= 0; i--) {
                  var r = n[i].event
                  r && e(r)
                }
              }
              return this
            }),
            (i.default.IntervalTimeline.prototype.forEachFrom = function(t, e) {
              if (null !== this._root) {
                var n = []
                this._root.searchAfter(t, n)
                for (var i = n.length - 1; i >= 0; i--) e(n[i].event)
              }
              return this
            }),
            (i.default.IntervalTimeline.prototype.dispose = function() {
              var t = []
              null !== this._root &&
                this._root.traverse(function(e) {
                  t.push(e)
                })
              for (var e = 0; e < t.length; e++) t[e].dispose()
              return (t = null), (this._root = null), this
            })
          var r = function(t, e, n) {
            ;(this.event = n),
              (this.low = t),
              (this.high = e),
              (this.max = this.high),
              (this._left = null),
              (this._right = null),
              (this.parent = null),
              (this.height = 0)
          }
          ;(r.prototype.insert = function(t) {
            t.low <= this.low
              ? null === this.left ? (this.left = t) : this.left.insert(t)
              : null === this.right ? (this.right = t) : this.right.insert(t)
          }),
            (r.prototype.search = function(t, e) {
              t > this.max ||
                (null !== this.left && this.left.search(t, e),
                this.low <= t && this.high > t && e.push(this),
                this.low > t ||
                  (null !== this.right && this.right.search(t, e)))
            }),
            (r.prototype.searchAfter = function(t, e) {
              this.low >= t &&
                (e.push(this),
                null !== this.left && this.left.searchAfter(t, e)),
                null !== this.right && this.right.searchAfter(t, e)
            }),
            (r.prototype.traverse = function(t) {
              t(this),
                null !== this.left && this.left.traverse(t),
                null !== this.right && this.right.traverse(t)
            }),
            (r.prototype.updateHeight = function() {
              null !== this.left && null !== this.right
                ? (this.height =
                    Math.max(this.left.height, this.right.height) + 1)
                : null !== this.right
                  ? (this.height = this.right.height + 1)
                  : null !== this.left
                    ? (this.height = this.left.height + 1)
                    : (this.height = 0)
            }),
            (r.prototype.updateMax = function() {
              ;(this.max = this.high),
                null !== this.left &&
                  (this.max = Math.max(this.max, this.left.max)),
                null !== this.right &&
                  (this.max = Math.max(this.max, this.right.max))
            }),
            (r.prototype.getBalance = function() {
              var t = 0
              return (
                null !== this.left && null !== this.right
                  ? (t = this.left.height - this.right.height)
                  : null !== this.left
                    ? (t = this.left.height + 1)
                    : null !== this.right && (t = -(this.right.height + 1)),
                t
              )
            }),
            (r.prototype.isLeftChild = function() {
              return null !== this.parent && this.parent.left === this
            }),
            Object.defineProperty(r.prototype, 'left', {
              get: function() {
                return this._left
              },
              set: function(t) {
                ;(this._left = t),
                  null !== t && (t.parent = this),
                  this.updateHeight(),
                  this.updateMax()
              }
            }),
            Object.defineProperty(r.prototype, 'right', {
              get: function() {
                return this._right
              },
              set: function(t) {
                ;(this._right = t),
                  null !== t && (t.parent = this),
                  this.updateHeight(),
                  this.updateMax()
              }
            }),
            (r.prototype.dispose = function() {
              ;(this.parent = null),
                (this._left = null),
                (this._right = null),
                (this.event = null)
            }),
            (e.default = i.default.IntervalTimeline)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          function r(t) {
            return function(e, n) {
              ;(n = this.toSeconds(n)), t.apply(this, arguments)
              var i = this._events.get(n),
                r = this._events.previousEvent(i),
                o = this._getTicksUntilEvent(r, n)
              return (i.ticks = Math.max(o, 0)), this
            }
          }
          n(2),
            (i.default.TickSignal = function(t) {
              ;(t = i.default.defaultArg(t, 1)),
                i.default.Signal.call(this, {
                  units: i.default.Type.Ticks,
                  value: t
                }),
                (this._events.memory = 1 / 0),
                this.cancelScheduledValues(0),
                this._events.add({
                  type: i.default.Param.AutomationType.SetValue,
                  time: 0,
                  value: t
                })
            }),
            i.default.extend(i.default.TickSignal, i.default.Signal),
            (i.default.TickSignal.prototype.setValueAtTime = r(
              i.default.Signal.prototype.setValueAtTime
            )),
            (i.default.TickSignal.prototype.linearRampToValueAtTime = r(
              i.default.Signal.prototype.linearRampToValueAtTime
            )),
            (i.default.TickSignal.prototype.setTargetAtTime = function(
              t,
              e,
              n
            ) {
              ;(e = this.toSeconds(e)),
                this.setRampPoint(e),
                (t = this._fromUnits(t))
              for (
                var i = this._events.get(e),
                  r = Math.round(Math.max(1 / n, 1)),
                  o = 0;
                o <= r;
                o++
              ) {
                var a = n * o + e,
                  s = this._exponentialApproach(i.time, i.value, t, n, a)
                this.linearRampToValueAtTime(this._toUnits(s), a)
              }
              return this
            }),
            (i.default.TickSignal.prototype.exponentialRampToValueAtTime = function(
              t,
              e
            ) {
              ;(e = this.toSeconds(e)), (t = this._fromUnits(t))
              for (
                var n = this._events.get(e),
                  i = Math.round(Math.max(10 * (e - n.time), 1)),
                  r = (e - n.time) / i,
                  o = 0;
                o <= i;
                o++
              ) {
                var a = r * o + n.time,
                  s = this._exponentialInterpolate(n.time, n.value, e, t, a)
                this.linearRampToValueAtTime(this._toUnits(s), a)
              }
              return this
            }),
            (i.default.TickSignal.prototype._getTicksUntilEvent = function(
              t,
              e
            ) {
              if (null === t) t = {ticks: 0, time: 0}
              else if (i.default.isUndef(t.ticks)) {
                var n = this._events.previousEvent(t)
                t.ticks = this._getTicksUntilEvent(n, t.time)
              }
              var r = this.getValueAtTime(t.time),
                o = this.getValueAtTime(e)
              return (
                this._events.get(e).time === e &&
                  this._events.get(e).type ===
                    i.default.Param.AutomationType.SetValue &&
                  (o = this.getValueAtTime(e - this.sampleTime)),
                0.5 * (e - t.time) * (r + o) + t.ticks
              )
            }),
            (i.default.TickSignal.prototype.getTicksAtTime = function(t) {
              t = this.toSeconds(t)
              var e = this._events.get(t)
              return Math.max(this._getTicksUntilEvent(e, t), 0)
            }),
            (i.default.TickSignal.prototype.getDurationOfTicks = function(
              t,
              e
            ) {
              e = this.toSeconds(e)
              var n = this.getTicksAtTime(e)
              return this.getTimeOfTick(n + t) - e
            }),
            (i.default.TickSignal.prototype.getTimeOfTick = function(t) {
              var e = this._events.get(t, 'ticks'),
                n = this._events.getAfter(t, 'ticks')
              if (e && e.ticks === t) return e.time
              if (
                e &&
                n &&
                n.type === i.default.Param.AutomationType.Linear &&
                e.value !== n.value
              ) {
                var r = this.getValueAtTime(e.time),
                  o = (this.getValueAtTime(n.time) - r) / (n.time - e.time),
                  a = Math.sqrt(Math.pow(r, 2) - 2 * o * (e.ticks - t)),
                  s = (-r + a) / o
                return (s > 0 ? s : (-r - a) / o) + e.time
              }
              return e
                ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value
                : t / this._initialValue
            }),
            (i.default.TickSignal.prototype.ticksToTime = function(t, e) {
              return (
                (e = this.toSeconds(e)),
                new i.default.Time(this.getDurationOfTicks(t, e))
              )
            }),
            (i.default.TickSignal.prototype.timeToTicks = function(t, e) {
              ;(e = this.toSeconds(e)), (t = this.toSeconds(t))
              var n = this.getTicksAtTime(e),
                r = this.getTicksAtTime(e + t)
              return new i.default.Ticks(r - n)
            }),
            (e.default = i.default.TickSignal)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(57),
            n(34),
            n(35),
            n(20),
            (i.default.Clock = function() {
              var t = i.default.defaults(
                arguments,
                ['callback', 'frequency'],
                i.default.Clock
              )
              i.default.Emitter.call(this),
                (this.callback = t.callback),
                (this._nextTick = 0),
                (this._tickSource = new i.default.TickSource(t.frequency)),
                (this._lastUpdate = 0),
                (this.frequency = this._tickSource.frequency),
                this._readOnly('frequency'),
                (this._state = new i.default.TimelineState(
                  i.default.State.Stopped
                )),
                this._state.setStateAtTime(i.default.State.Stopped, 0),
                (this._boundLoop = this._loop.bind(this)),
                this.context.on('tick', this._boundLoop)
            }),
            i.default.extend(i.default.Clock, i.default.Emitter),
            (i.default.Clock.defaults = {
              callback: i.default.noOp,
              frequency: 1
            }),
            Object.defineProperty(i.default.Clock.prototype, 'state', {
              get: function() {
                return this._state.getValueAtTime(this.now())
              }
            }),
            (i.default.Clock.prototype.start = function(t, e) {
              return (
                this.context.resume(),
                (t = this.toSeconds(t)),
                this._state.getValueAtTime(t) !== i.default.State.Started &&
                  (this._state.setStateAtTime(i.default.State.Started, t),
                  this._tickSource.start(t, e),
                  t < this._lastUpdate && this.emit('start', t, e)),
                this
              )
            }),
            (i.default.Clock.prototype.stop = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._state.cancel(t),
                this._state.setStateAtTime(i.default.State.Stopped, t),
                this._tickSource.stop(t),
                t < this._lastUpdate && this.emit('stop', t),
                this
              )
            }),
            (i.default.Clock.prototype.pause = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._state.getValueAtTime(t) === i.default.State.Started &&
                  (this._state.setStateAtTime(i.default.State.Paused, t),
                  this._tickSource.pause(t),
                  t < this._lastUpdate && this.emit('pause', t)),
                this
              )
            }),
            Object.defineProperty(i.default.Clock.prototype, 'ticks', {
              get: function() {
                return Math.ceil(this.getTicksAtTime(this.now()))
              },
              set: function(t) {
                this._tickSource.ticks = t
              }
            }),
            Object.defineProperty(i.default.Clock.prototype, 'seconds', {
              get: function() {
                return this._tickSource.seconds
              },
              set: function(t) {
                this._tickSource.seconds = t
              }
            }),
            (i.default.Clock.prototype.getSecondsAtTime = function(t) {
              return this._tickSource.getSecondsAtTime(t)
            }),
            (i.default.Clock.prototype.setTicksAtTime = function(t, e) {
              return this._tickSource.setTicksAtTime(t, e), this
            }),
            (i.default.Clock.prototype.getTicksAtTime = function(t) {
              return this._tickSource.getTicksAtTime(t)
            }),
            (i.default.Clock.prototype.nextTickTime = function(t, e) {
              e = this.toSeconds(e)
              var n = this.getTicksAtTime(e)
              return this._tickSource.getTimeOfTick(n + t, e)
            }),
            (i.default.Clock.prototype._loop = function() {
              var t = this._lastUpdate,
                e = this.now()
              ;(this._lastUpdate = e),
                t !== e &&
                  (this._state.forEachBetween(
                    t,
                    e,
                    function(t) {
                      switch (t.state) {
                        case i.default.State.Started:
                          var e = this._tickSource.getTicksAtTime(t.time)
                          this.emit('start', t.time, e)
                          break
                        case i.default.State.Stopped:
                          0 !== t.time && this.emit('stop', t.time)
                          break
                        case i.default.State.Paused:
                          this.emit('pause', t.time)
                      }
                    }.bind(this)
                  ),
                  this._tickSource.forEachTickBetween(
                    t,
                    e,
                    function(t, e) {
                      this.callback(t, e)
                    }.bind(this)
                  ))
            }),
            (i.default.Clock.prototype.getStateAtTime = function(t) {
              return (t = this.toSeconds(t)), this._state.getValueAtTime(t)
            }),
            (i.default.Clock.prototype.dispose = function() {
              i.default.Emitter.prototype.dispose.call(this),
                this.context.off('tick', this._boundLoop),
                this._writable('frequency'),
                this._tickSource.dispose(),
                (this._tickSource = null),
                (this.frequency = null),
                (this._boundLoop = null),
                (this._nextTick = 1 / 0),
                (this.callback = null),
                this._state.dispose(),
                (this._state = null)
            }),
            (e.default = i.default.Clock)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(2),
            n(5),
            n(7),
            (i.default.GreaterThanZero = function() {
              i.default.SignalBase.call(this),
                (this._thresh = this.output = new i.default.WaveShaper(function(
                  t
                ) {
                  return t <= 0 ? 0 : 1
                },
                127)),
                (this._scale = this.input = new i.default.Multiply(1e4)),
                this._scale.connect(this._thresh)
            }),
            i.default.extend(i.default.GreaterThanZero, i.default.SignalBase),
            (i.default.GreaterThanZero.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._scale.dispose(),
                (this._scale = null),
                this._thresh.dispose(),
                (this._thresh = null),
                this
              )
            }),
            (e.default = i.default.GreaterThanZero)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(84),
            n(13),
            n(2),
            (i.default.GreaterThan = function(t) {
              i.default.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._param = this.input[0] = new i.default.Subtract(t)),
                (this.input[1] = this._param.input[1]),
                (this._gtz = this.output = new i.default.GreaterThanZero()),
                this._param.connect(this._gtz)
            }),
            i.default.extend(i.default.GreaterThan, i.default.Signal),
            (i.default.GreaterThan.prototype.dispose = function() {
              return (
                i.default.Signal.prototype.dispose.call(this),
                this._gtz.dispose(),
                (this._gtz = null),
                this
              )
            }),
            (e.default = i.default.GreaterThan)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(47),
            n(26),
            (i.default.ScaledEnvelope = function() {
              var t = i.default.defaults(
                arguments,
                ['attack', 'decay', 'sustain', 'release'],
                i.default.Envelope
              )
              i.default.Envelope.call(this, t),
                (t = i.default.defaultArg(
                  t,
                  i.default.ScaledEnvelope.defaults
                )),
                (this._exp = this.output = new i.default.Pow(t.exponent)),
                (this._scale = this.output = new i.default.Scale(t.min, t.max)),
                this._sig.chain(this._exp, this._scale)
            }),
            i.default.extend(i.default.ScaledEnvelope, i.default.Envelope),
            (i.default.ScaledEnvelope.defaults = {min: 0, max: 1, exponent: 1}),
            Object.defineProperty(i.default.ScaledEnvelope.prototype, 'min', {
              get: function() {
                return this._scale.min
              },
              set: function(t) {
                this._scale.min = t
              }
            }),
            Object.defineProperty(i.default.ScaledEnvelope.prototype, 'max', {
              get: function() {
                return this._scale.max
              },
              set: function(t) {
                this._scale.max = t
              }
            }),
            Object.defineProperty(
              i.default.ScaledEnvelope.prototype,
              'exponent',
              {
                get: function() {
                  return this._exp.value
                },
                set: function(t) {
                  this._exp.value = t
                }
              }
            ),
            (i.default.ScaledEnvelope.prototype.dispose = function() {
              return (
                i.default.Envelope.prototype.dispose.call(this),
                this._scale.dispose(),
                (this._scale = null),
                this._exp.dispose(),
                (this._exp = null),
                this
              )
            }),
            (e.default = i.default.ScaledEnvelope)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(7),
            n(30),
            (i.default.Abs = function() {
              i.default.SignalBase.call(this),
                (this._abs = this.input = this.output = new i.default.WaveShaper(
                  function(t) {
                    return Math.abs(t) < 0.001 ? 0 : Math.abs(t)
                  },
                  1024
                ))
            }),
            i.default.extend(i.default.Abs, i.default.SignalBase),
            (i.default.Abs.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._abs.dispose(),
                (this._abs = null),
                this
              )
            }),
            (e.default = i.default.Abs)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(3),
            n(1),
            (i.default.Solo = function() {
              var t = i.default.defaults(arguments, ['solo'], i.default.Solo)
              i.default.AudioNode.call(this),
                (this.input = this.output = new i.default.Gain()),
                (this._soloBind = this._soloed.bind(this)),
                this.context.on('solo', this._soloBind),
                (this.solo = t.solo)
            }),
            i.default.extend(i.default.Solo, i.default.AudioNode),
            (i.default.Solo.defaults = {solo: !1}),
            Object.defineProperty(i.default.Solo.prototype, 'solo', {
              get: function() {
                return this._isSoloed()
              },
              set: function(t) {
                t ? this._addSolo() : this._removeSolo(),
                  this.context.emit('solo', this)
              }
            }),
            Object.defineProperty(i.default.Solo.prototype, 'muted', {
              get: function() {
                return 0 === this.input.gain.value
              }
            }),
            (i.default.Solo.prototype._addSolo = function() {
              i.default.isArray(this.context._currentSolo) ||
                (this.context._currentSolo = []),
                this._isSoloed() || this.context._currentSolo.push(this)
            }),
            (i.default.Solo.prototype._removeSolo = function() {
              if (this._isSoloed()) {
                var t = this.context._currentSolo.indexOf(this)
                this.context._currentSolo.splice(t, 1)
              }
            }),
            (i.default.Solo.prototype._isSoloed = function() {
              return (
                !!i.default.isArray(this.context._currentSolo) &&
                0 !== this.context._currentSolo.length &&
                -1 !== this.context._currentSolo.indexOf(this)
              )
            }),
            (i.default.Solo.prototype._noSolos = function() {
              return (
                !i.default.isArray(this.context._currentSolo) ||
                0 === this.context._currentSolo.length
              )
            }),
            (i.default.Solo.prototype._soloed = function() {
              this._isSoloed()
                ? (this.input.gain.value = 1)
                : this._noSolos()
                  ? (this.input.gain.value = 1)
                  : (this.input.gain.value = 0)
            }),
            (i.default.Solo.prototype.dispose = function() {
              return (
                this.context.off('solo', this._soloBind),
                this._removeSolo(),
                (this._soloBind = null),
                i.default.AudioNode.prototype.dispose.call(this),
                this
              )
            }),
            (e.default = i.default.Solo)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(7),
            (i.default.EqualPowerGain = function() {
              i.default.SignalBase.call(this),
                (this._eqPower = this.input = this.output = new i.default.WaveShaper(
                  function(t) {
                    return Math.abs(t) < 0.001
                      ? 0
                      : i.default.equalPowerScale(t)
                  },
                  4096
                ))
            }),
            i.default.extend(i.default.EqualPowerGain, i.default.SignalBase),
            (i.default.EqualPowerGain.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._eqPower.dispose(),
                (this._eqPower = null),
                this
              )
            }),
            (e.default = i.default.EqualPowerGain)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(5),
            n(2),
            (i.default.Negate = function() {
              i.default.SignalBase.call(this),
                (this._multiply = this.input = this.output = new i.default.Multiply(
                  -1
                ))
            }),
            i.default.extend(i.default.Negate, i.default.SignalBase),
            (i.default.Negate.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._multiply.dispose(),
                (this._multiply = null),
                this
              )
            }),
            (e.default = i.default.Negate)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(48),
            n(27),
            n(1),
            (i.default.PanVol = function() {
              var t = i.default.defaults(
                arguments,
                ['pan', 'volume'],
                i.default.PanVol
              )
              i.default.AudioNode.call(this),
                (this._panner = this.input = new i.default.Panner(t.pan)),
                (this.pan = this._panner.pan),
                (this._volume = this.output = new i.default.Volume(t.volume)),
                (this.volume = this._volume.volume),
                this._panner.connect(this._volume),
                (this.mute = t.mute),
                this._readOnly(['pan', 'volume'])
            }),
            i.default.extend(i.default.PanVol, i.default.AudioNode),
            (i.default.PanVol.defaults = {pan: 0, volume: 0, mute: !1}),
            Object.defineProperty(i.default.PanVol.prototype, 'mute', {
              get: function() {
                return this._volume.mute
              },
              set: function(t) {
                this._volume.mute = t
              }
            }),
            (i.default.PanVol.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable(['pan', 'volume']),
                this._panner.dispose(),
                (this._panner = null),
                (this.pan = null),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null),
                this
              )
            }),
            (e.default = i.default.PanVol)
        },
        function(t, e, n) {
          'use strict'
          var i = n(0)
          if (i.default.supported) {
            !i.default.global.hasOwnProperty('OfflineAudioContext') &&
              i.default.global.hasOwnProperty('webkitOfflineAudioContext') &&
              (i.default.global.OfflineAudioContext =
                i.default.global.webkitOfflineAudioContext)
            var r = new OfflineAudioContext(1, 1, 44100).startRendering()
            ;(r && i.default.isFunction(r.then)) ||
              ((OfflineAudioContext.prototype._native_startRendering =
                OfflineAudioContext.prototype.startRendering),
              (OfflineAudioContext.prototype.startRendering = function() {
                return new Promise(
                  function(t) {
                    ;(this.oncomplete = function(e) {
                      t(e.renderedBuffer)
                    }),
                      this._native_startRendering()
                  }.bind(this)
                )
              }))
          }
        },
        function(t, e, n) {
          'use strict'
          e.a = '13.8.25'
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(46),
            (i.default.Midi = function(t, e) {
              if (!(this instanceof i.default.Midi))
                return new i.default.Midi(t, e)
              i.default.Frequency.call(this, t, e)
            }),
            i.default.extend(i.default.Midi, i.default.Frequency),
            (i.default.Midi.prototype._defaultUnits = 'midi'),
            (i.default.Midi.prototype._frequencyToUnits = function(t) {
              return i.default.Frequency.ftom(
                i.default.Frequency.prototype._frequencyToUnits.call(this, t)
              )
            }),
            (i.default.Midi.prototype._ticksToUnits = function(t) {
              return i.default.Frequency.ftom(
                i.default.Frequency.prototype._ticksToUnits.call(this, t)
              )
            }),
            (i.default.Midi.prototype._beatsToUnits = function(t) {
              return i.default.Frequency.ftom(
                i.default.Frequency.prototype._beatsToUnits.call(this, t)
              )
            }),
            (i.default.Midi.prototype._secondsToUnits = function(t) {
              return i.default.Frequency.ftom(
                i.default.Frequency.prototype._secondsToUnits.call(this, t)
              )
            }),
            (i.default.Midi.prototype.toMidi = function() {
              return this.valueOf()
            }),
            (i.default.Midi.prototype.toFrequency = function() {
              return i.default.Frequency.mtof(this.toMidi())
            }),
            (i.default.Midi.prototype.transpose = function(t) {
              return new this.constructor(this.toMidi() + t)
            }),
            (e.default = i.default.Midi)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(27),
            n(1),
            (i.default.UserMedia = function() {
              var t = i.default.defaults(
                arguments,
                ['volume'],
                i.default.UserMedia
              )
              i.default.AudioNode.call(this),
                (this._mediaStream = null),
                (this._stream = null),
                (this._device = null),
                (this._volume = this.output = new i.default.Volume(t.volume)),
                (this.volume = this._volume.volume),
                this._readOnly('volume'),
                (this.mute = t.mute)
            }),
            i.default.extend(i.default.UserMedia, i.default.AudioNode),
            (i.default.UserMedia.defaults = {volume: 0, mute: !1}),
            (i.default.UserMedia.prototype.open = function(t) {
              return (
                this.state === i.default.State.Started && this.close(),
                i.default.UserMedia.enumerateDevices().then(
                  function(e) {
                    var n
                    if (i.default.isNumber(t)) n = e[t]
                    else if (
                      !(n = e.find(function(e) {
                        return e.label === t || e.deviceId === t
                      })) &&
                      e.length > 0
                    )
                      n = e[0]
                    else if (!n && i.default.isDefined(t))
                      throw new Error(
                        'Tone.UserMedia: no matching device: ' + t
                      )
                    this._device = n
                    var r = {
                      audio: {
                        echoCancellation: !1,
                        sampleRate: this.context.sampleRate,
                        noiseSuppression: !1,
                        mozNoiseSuppression: !1
                      }
                    }
                    return (
                      n && (r.audio.deviceId = n.deviceId),
                      navigator.mediaDevices.getUserMedia(r).then(
                        function(t) {
                          return (
                            this._stream ||
                              ((this._stream = t),
                              (this._mediaStream = this.context.createMediaStreamSource(
                                t
                              )),
                              i.default.connect(
                                this._mediaStream,
                                this.output
                              )),
                            this
                          )
                        }.bind(this)
                      )
                    )
                  }.bind(this)
                )
              )
            }),
            (i.default.UserMedia.prototype.close = function() {
              return (
                this._stream &&
                  (this._stream.getAudioTracks().forEach(function(t) {
                    t.stop()
                  }),
                  (this._stream = null),
                  this._mediaStream.disconnect(),
                  (this._mediaStream = null)),
                (this._device = null),
                this
              )
            }),
            (i.default.UserMedia.enumerateDevices = function() {
              return navigator.mediaDevices
                .enumerateDevices()
                .then(function(t) {
                  return t.filter(function(t) {
                    return 'audioinput' === t.kind
                  })
                })
            }),
            Object.defineProperty(i.default.UserMedia.prototype, 'state', {
              get: function() {
                return this._stream && this._stream.active
                  ? i.default.State.Started
                  : i.default.State.Stopped
              }
            }),
            Object.defineProperty(i.default.UserMedia.prototype, 'deviceId', {
              get: function() {
                return this._device ? this._device.deviceId : null
              }
            }),
            Object.defineProperty(i.default.UserMedia.prototype, 'groupId', {
              get: function() {
                return this._device ? this._device.groupId : null
              }
            }),
            Object.defineProperty(i.default.UserMedia.prototype, 'label', {
              get: function() {
                return this._device ? this._device.label : null
              }
            }),
            Object.defineProperty(i.default.UserMedia.prototype, 'mute', {
              get: function() {
                return this._volume.mute
              },
              set: function(t) {
                this._volume.mute = t
              }
            }),
            (i.default.UserMedia.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this.close(),
                this._writable('volume'),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null),
                this
              )
            }),
            Object.defineProperty(i.default.UserMedia, 'supported', {
              get: function() {
                return (
                  i.default.isDefined(navigator.mediaDevices) &&
                  i.default.isFunction(navigator.mediaDevices.getUserMedia)
                )
              }
            }),
            (e.default = i.default.UserMedia)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(65),
            n(27),
            n(1),
            (i.default.Players = function(t) {
              var e = Array.prototype.slice.call(arguments)
              e.shift()
              var n = i.default.defaults(e, ['onload'], i.default.Players)
              for (var r in (i.default.AudioNode.call(this, n),
              (this._volume = this.output = new i.default.Volume(n.volume)),
              (this.volume = this._volume.volume),
              this._readOnly('volume'),
              (this._volume.output.output.channelCount = 2),
              (this._volume.output.output.channelCountMode = 'explicit'),
              (this.mute = n.mute),
              (this._players = {}),
              (this._loadingCount = 0),
              (this._fadeIn = n.fadeIn),
              (this._fadeOut = n.fadeOut),
              t))
                this._loadingCount++,
                  this.add(r, t[r], this._bufferLoaded.bind(this, n.onload))
            }),
            i.default.extend(i.default.Players, i.default.AudioNode),
            (i.default.Players.defaults = {
              volume: 0,
              mute: !1,
              onload: i.default.noOp,
              fadeIn: 0,
              fadeOut: 0
            }),
            (i.default.Players.prototype._bufferLoaded = function(t) {
              this._loadingCount--, 0 === this._loadingCount && t && t(this)
            }),
            Object.defineProperty(i.default.Players.prototype, 'mute', {
              get: function() {
                return this._volume.mute
              },
              set: function(t) {
                this._volume.mute = t
              }
            }),
            Object.defineProperty(i.default.Players.prototype, 'fadeIn', {
              get: function() {
                return this._fadeIn
              },
              set: function(t) {
                ;(this._fadeIn = t),
                  this._forEach(function(e) {
                    e.fadeIn = t
                  })
              }
            }),
            Object.defineProperty(i.default.Players.prototype, 'fadeOut', {
              get: function() {
                return this._fadeOut
              },
              set: function(t) {
                ;(this._fadeOut = t),
                  this._forEach(function(e) {
                    e.fadeOut = t
                  })
              }
            }),
            Object.defineProperty(i.default.Players.prototype, 'state', {
              get: function() {
                var t = !1
                return (
                  this._forEach(function(e) {
                    t = t || e.state === i.default.State.Started
                  }),
                  t ? i.default.State.Started : i.default.State.Stopped
                )
              }
            }),
            (i.default.Players.prototype.has = function(t) {
              return this._players.hasOwnProperty(t)
            }),
            (i.default.Players.prototype.get = function(t) {
              if (this.has(t)) return this._players[t]
              throw new Error('Tone.Players: no player named ' + t)
            }),
            (i.default.Players.prototype._forEach = function(t) {
              for (var e in this._players) t(this._players[e], e)
              return this
            }),
            Object.defineProperty(i.default.Players.prototype, 'loaded', {
              get: function() {
                var t = !0
                return (
                  this._forEach(function(e) {
                    t = t && e.loaded
                  }),
                  t
                )
              }
            }),
            (i.default.Players.prototype.add = function(t, e, n) {
              return (
                (this._players[t] = new i.default.Player(e, n).connect(
                  this.output
                )),
                (this._players[t].fadeIn = this._fadeIn),
                (this._players[t].fadeOut = this._fadeOut),
                this
              )
            }),
            (i.default.Players.prototype.stopAll = function(t) {
              this._forEach(function(e) {
                e.stop(t)
              })
            }),
            (i.default.Players.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._volume.dispose(),
                (this._volume = null),
                this._writable('volume'),
                (this.volume = null),
                (this.output = null),
                this._forEach(function(t) {
                  t.dispose()
                }),
                (this._players = null),
                this
              )
            }),
            (e.default = i.default.Players)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(6),
            n(11),
            n(32),
            (i.default.GrainPlayer = function() {
              var t = i.default.defaults(
                arguments,
                ['url', 'onload'],
                i.default.GrainPlayer
              )
              i.default.Source.call(this, t),
                (this.buffer = new i.default.Buffer(
                  t.url,
                  t.onload.bind(void 0, this)
                )),
                (this._clock = new i.default.Clock(
                  this._tick.bind(this),
                  t.grainSize
                )),
                (this._loopStart = 0),
                (this._loopEnd = 0),
                (this._activeSources = []),
                (this._playbackRate = t.playbackRate),
                (this._grainSize = t.grainSize),
                (this._overlap = t.overlap),
                (this.detune = t.detune),
                (this.overlap = t.overlap),
                (this.loop = t.loop),
                (this.playbackRate = t.playbackRate),
                (this.grainSize = t.grainSize),
                (this.loopStart = t.loopStart),
                (this.loopEnd = t.loopEnd),
                (this.reverse = t.reverse),
                this._clock.on('stop', this._onstop.bind(this))
            }),
            i.default.extend(i.default.GrainPlayer, i.default.Source),
            (i.default.GrainPlayer.defaults = {
              onload: i.default.noOp,
              overlap: 0.1,
              grainSize: 0.2,
              playbackRate: 1,
              detune: 0,
              loop: !1,
              loopStart: 0,
              loopEnd: 0,
              reverse: !1
            }),
            (i.default.GrainPlayer.prototype._start = function(t, e, n) {
              ;(e = i.default.defaultArg(e, 0)),
                (e = this.toSeconds(e)),
                (t = this.toSeconds(t)),
                (this._offset = e),
                this._clock.start(t),
                n && this.stop(t + this.toSeconds(n))
            }),
            (i.default.GrainPlayer.prototype._stop = function(t) {
              this._clock.stop(t)
            }),
            (i.default.GrainPlayer.prototype._onstop = function(t) {
              this._activeSources.forEach(function(e) {
                ;(e.fadeOut = 0), e.stop(t)
              })
            }),
            (i.default.GrainPlayer.prototype._tick = function(t) {
              if (!this.loop && this._offset > this.buffer.duration)
                this.stop(t)
              else {
                var e = this._offset < this._overlap ? 0 : this._overlap,
                  n = new i.default.BufferSource({
                    buffer: this.buffer,
                    fadeIn: e,
                    fadeOut: this._overlap,
                    loop: this.loop,
                    loopStart: this._loopStart,
                    loopEnd: this._loopEnd,
                    playbackRate: i.default.intervalToFrequencyRatio(
                      this.detune / 100
                    )
                  }).connect(this.output)
                n.start(t, this._offset),
                  (this._offset += this.grainSize),
                  n.stop(t + this.grainSize / this.playbackRate),
                  this._activeSources.push(n),
                  (n.onended = function() {
                    var t = this._activeSources.indexOf(n)
                    ;-1 !== t && this._activeSources.splice(t, 1)
                  }.bind(this))
              }
            }),
            Object.defineProperty(
              i.default.GrainPlayer.prototype,
              'playbackRate',
              {
                get: function() {
                  return this._playbackRate
                },
                set: function(t) {
                  ;(this._playbackRate = t), (this.grainSize = this._grainSize)
                }
              }
            ),
            Object.defineProperty(
              i.default.GrainPlayer.prototype,
              'loopStart',
              {
                get: function() {
                  return this._loopStart
                },
                set: function(t) {
                  this._loopStart = this.toSeconds(t)
                }
              }
            ),
            Object.defineProperty(i.default.GrainPlayer.prototype, 'loopEnd', {
              get: function() {
                return this._loopEnd
              },
              set: function(t) {
                this._loopEnd = this.toSeconds(t)
              }
            }),
            Object.defineProperty(i.default.GrainPlayer.prototype, 'reverse', {
              get: function() {
                return this.buffer.reverse
              },
              set: function(t) {
                this.buffer.reverse = t
              }
            }),
            Object.defineProperty(
              i.default.GrainPlayer.prototype,
              'grainSize',
              {
                get: function() {
                  return this._grainSize
                },
                set: function(t) {
                  ;(this._grainSize = this.toSeconds(t)),
                    (this._clock.frequency.value =
                      this._playbackRate / this._grainSize)
                }
              }
            ),
            Object.defineProperty(i.default.GrainPlayer.prototype, 'overlap', {
              get: function() {
                return this._overlap
              },
              set: function(t) {
                this._overlap = this.toSeconds(t)
              }
            }),
            Object.defineProperty(i.default.GrainPlayer.prototype, 'loaded', {
              get: function() {
                return this.buffer.loaded
              }
            }),
            (i.default.GrainPlayer.prototype.dispose = function() {
              return (
                i.default.Source.prototype.dispose.call(this),
                this.buffer.dispose(),
                (this.buffer = null),
                this._clock.dispose(),
                (this._clock = null),
                this._activeSources.forEach(function(t) {
                  t.dispose()
                }),
                (this._activeSources = null),
                this
              )
            }),
            (e.default = i.default.GrainPlayer)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(16),
            n(2),
            n(45),
            (i.default.TransportTimelineSignal = function() {
              i.default.Signal.apply(this, arguments),
                (this.output = this._outputSig = new i.default.Signal(
                  this._initialValue
                )),
                (this._lastVal = this.value),
                (this._synced = i.default.Transport.scheduleRepeat(
                  this._onTick.bind(this),
                  '1i'
                )),
                (this._bindAnchorValue = this._anchorValue.bind(this)),
                i.default.Transport.on(
                  'start stop pause',
                  this._bindAnchorValue
                ),
                (this._events.memory = 1 / 0)
            }),
            i.default.extend(
              i.default.TransportTimelineSignal,
              i.default.Signal
            ),
            (i.default.TransportTimelineSignal.prototype._onTick = function(t) {
              var e = this.getValueAtTime(i.default.Transport.seconds)
              this._lastVal !== e &&
                ((this._lastVal = e),
                this._outputSig.linearRampToValueAtTime(e, t))
            }),
            (i.default.TransportTimelineSignal.prototype._anchorValue = function(
              t
            ) {
              var e = this.getValueAtTime(i.default.Transport.seconds)
              return (
                (this._lastVal = e),
                this._outputSig.cancelScheduledValues(t),
                this._outputSig.setValueAtTime(e, t),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.getValueAtTime = function(
              t
            ) {
              return (
                (t = i.default.TransportTime(t)),
                i.default.Signal.prototype.getValueAtTime.call(this, t)
              )
            }),
            (i.default.TransportTimelineSignal.prototype.setValueAtTime = function(
              t,
              e
            ) {
              return (
                (e = i.default.TransportTime(e)),
                i.default.Signal.prototype.setValueAtTime.call(this, t, e),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.linearRampToValueAtTime = function(
              t,
              e
            ) {
              return (
                (e = i.default.TransportTime(e)),
                i.default.Signal.prototype.linearRampToValueAtTime.call(
                  this,
                  t,
                  e
                ),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function(
              t,
              e
            ) {
              return (
                (e = i.default.TransportTime(e)),
                i.default.Signal.prototype.exponentialRampToValueAtTime.call(
                  this,
                  t,
                  e
                ),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.setTargetAtTime = function(
              t,
              e,
              n
            ) {
              return (
                (e = i.default.TransportTime(e)),
                i.default.Signal.prototype.setTargetAtTime.call(this, t, e, n),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.cancelScheduledValues = function(
              t
            ) {
              return (
                (t = i.default.TransportTime(t)),
                i.default.Signal.prototype.cancelScheduledValues.call(this, t),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.setValueCurveAtTime = function(
              t,
              e,
              n,
              r
            ) {
              return (
                (e = i.default.TransportTime(e)),
                (n = i.default.TransportTime(n)),
                i.default.Signal.prototype.setValueCurveAtTime.call(
                  this,
                  t,
                  e,
                  n,
                  r
                ),
                this
              )
            }),
            (i.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function(
              t
            ) {
              return i.default.Signal.prototype.cancelAndHoldAtTime.call(
                this,
                i.default.TransportTime(t)
              )
            }),
            (i.default.TransportTimelineSignal.prototype.dispose = function() {
              i.default.Transport.clear(this._synced),
                i.default.Transport.off(
                  'start stop pause',
                  this._syncedCallback
                ),
                this._events.cancel(0),
                i.default.Signal.prototype.dispose.call(this),
                this._outputSig.dispose(),
                (this._outputSig = null)
            }),
            (e.default = i.default.TransportTimelineSignal)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(29),
            n(5),
            (i.default.Normalize = function(t, e) {
              i.default.SignalBase.call(this),
                (this._inputMin = i.default.defaultArg(t, 0)),
                (this._inputMax = i.default.defaultArg(e, 1)),
                (this._sub = this.input = new i.default.Add(0)),
                (this._div = this.output = new i.default.Multiply(1)),
                this._sub.connect(this._div),
                this._setRange()
            }),
            i.default.extend(i.default.Normalize, i.default.SignalBase),
            Object.defineProperty(i.default.Normalize.prototype, 'min', {
              get: function() {
                return this._inputMin
              },
              set: function(t) {
                ;(this._inputMin = t), this._setRange()
              }
            }),
            Object.defineProperty(i.default.Normalize.prototype, 'max', {
              get: function() {
                return this._inputMax
              },
              set: function(t) {
                ;(this._inputMax = t), this._setRange()
              }
            }),
            (i.default.Normalize.prototype._setRange = function() {
              ;(this._sub.value = -this._inputMin),
                (this._div.value = 1 / (this._inputMax - this._inputMin))
            }),
            (i.default.Normalize.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._sub.dispose(),
                (this._sub = null),
                this._div.dispose(),
                (this._div = null),
                this
              )
            }),
            (e.default = i.default.Normalize)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(7),
            n(2),
            (i.default.GainToAudio = function() {
              i.default.SignalBase.call(this),
                (this._norm = this.input = this.output = new i.default.WaveShaper(
                  function(t) {
                    return 2 * Math.abs(t) - 1
                  }
                ))
            }),
            i.default.extend(i.default.GainToAudio, i.default.SignalBase),
            (i.default.GainToAudio.prototype.dispose = function() {
              return (
                i.default.SignalBase.prototype.dispose.call(this),
                this._norm.dispose(),
                (this._norm = null),
                this
              )
            }),
            (e.default = i.default.GainToAudio)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(21),
            n(78),
            n(32),
            (i.default.Sampler = function(t) {
              var e = Array.prototype.slice.call(arguments)
              e.shift()
              var n = i.default.defaults(
                e,
                ['onload', 'baseUrl'],
                i.default.Sampler
              )
              i.default.Instrument.call(this, n)
              var r = {}
              for (var o in t)
                if (i.default.isNote(o))
                  r[i.default.Frequency(o).toMidi()] = t[o]
                else {
                  if (isNaN(parseFloat(o)))
                    throw new Error(
                      "Tone.Sampler: url keys must be the note's pitch"
                    )
                  r[o] = t[o]
                }
              ;(this._buffers = new i.default.Buffers(r, n.onload, n.baseUrl)),
                (this._activeSources = {}),
                (this.attack = n.attack),
                (this.release = n.release),
                (this.curve = n.curve)
            }),
            i.default.extend(i.default.Sampler, i.default.Instrument),
            (i.default.Sampler.defaults = {
              attack: 0,
              release: 0.1,
              onload: i.default.noOp,
              baseUrl: '',
              curve: 'exponential'
            }),
            (i.default.Sampler.prototype._findClosest = function(t) {
              for (var e = 0; e < 96; ) {
                if (this._buffers.has(t + e)) return -e
                if (this._buffers.has(t - e)) return e
                e++
              }
              throw new Error('No available buffers for note: ' + t)
            }),
            (i.default.Sampler.prototype.triggerAttack = function(t, e, n) {
              this.log('triggerAttack', t, e, n), Array.isArray(t) || (t = [t])
              for (var r = 0; r < t.length; r++) {
                var o = i.default.Frequency(t[r]).toMidi(),
                  a = this._findClosest(o),
                  s = o - a,
                  u = this._buffers.get(s),
                  l = i.default.intervalToFrequencyRatio(a),
                  f = new i.default.BufferSource({
                    buffer: u,
                    playbackRate: l,
                    fadeIn: this.attack,
                    fadeOut: this.release,
                    curve: this.curve
                  }).connect(this.output)
                f.start(e, 0, u.duration / l, n),
                  i.default.isArray(this._activeSources[o]) ||
                    (this._activeSources[o] = []),
                  this._activeSources[o].push(f),
                  (f.onended = function() {
                    if (this._activeSources && this._activeSources[o]) {
                      var t = this._activeSources[o].indexOf(f)
                      ;-1 !== t && this._activeSources[o].splice(t, 1)
                    }
                  }.bind(this))
              }
              return this
            }),
            (i.default.Sampler.prototype.triggerRelease = function(t, e) {
              this.log('triggerRelease', t, e), Array.isArray(t) || (t = [t])
              for (var n = 0; n < t.length; n++) {
                var r = i.default.Frequency(t[n]).toMidi()
                this._activeSources[r] &&
                  this._activeSources[r].length &&
                  ((e = this.toSeconds(e)),
                  this._activeSources[r].forEach(function(t) {
                    t.stop(e)
                  }),
                  (this._activeSources[r] = []))
              }
              return this
            }),
            (i.default.Sampler.prototype.releaseAll = function(t) {
              for (var e in ((t = this.toSeconds(t)), this._activeSources))
                for (var n = this._activeSources[e]; n.length; )
                  n.shift().stop(t)
              return this
            }),
            (i.default.Sampler.prototype.sync = function() {
              return (
                this._syncMethod('triggerAttack', 1),
                this._syncMethod('triggerRelease', 1),
                this
              )
            }),
            (i.default.Sampler.prototype.triggerAttackRelease = function(
              t,
              e,
              n,
              r
            ) {
              if (
                ((n = this.toSeconds(n)),
                this.triggerAttack(t, n, r),
                i.default.isArray(e) && i.default.isArray(t))
              )
                for (var o = 0; o < t.length; o++) {
                  var a = e[Math.min(o, e.length - 1)]
                  this.triggerRelease(t[o], n + this.toSeconds(a))
                }
              else this.triggerRelease(t, n + this.toSeconds(e))
              return this
            }),
            (i.default.Sampler.prototype.add = function(t, e, n) {
              if (i.default.isNote(t)) {
                var r = i.default.Frequency(t).toMidi()
                this._buffers.add(r, e, n)
              } else {
                if (isNaN(parseFloat(t)))
                  throw new Error(
                    "Tone.Sampler: note must be the note's pitch. Instead got " +
                      t
                  )
                this._buffers.add(t, e, n)
              }
            }),
            Object.defineProperty(i.default.Sampler.prototype, 'loaded', {
              get: function() {
                return this._buffers.loaded
              }
            }),
            (i.default.Sampler.prototype.dispose = function() {
              for (var t in (i.default.Instrument.prototype.dispose.call(this),
              this._buffers.dispose(),
              (this._buffers = null),
              this._activeSources))
                this._activeSources[t].forEach(function(t) {
                  t.dispose()
                })
              return (this._activeSources = null), this
            }),
            (e.default = i.default.Sampler)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(38),
            n(6),
            (i.default.PolySynth = function() {
              var t = i.default.defaults(
                arguments,
                ['polyphony', 'voice'],
                i.default.PolySynth
              )
              i.default.Instrument.call(this, t),
                ((t = i.default.defaultArg(
                  t,
                  i.default.Instrument.defaults
                )).polyphony = Math.min(
                  i.default.PolySynth.MAX_POLYPHONY,
                  t.polyphony
                )),
                (this.voices = new Array(t.polyphony)),
                this.assert(
                  t.polyphony > 0,
                  'polyphony must be greater than 0'
                ),
                (this.detune = new i.default.Signal(
                  t.detune,
                  i.default.Type.Cents
                )),
                this._readOnly('detune')
              for (var e = 0; e < t.polyphony; e++) {
                var n = new t.voice(arguments[2], arguments[3])
                if (!(n instanceof i.default.Monophonic))
                  throw new Error(
                    'Synth constructor must be instance of Tone.Monophonic'
                  )
                ;(this.voices[e] = n),
                  (n.index = e),
                  n.connect(this.output),
                  n.hasOwnProperty('detune') && this.detune.connect(n.detune)
              }
            }),
            i.default.extend(i.default.PolySynth, i.default.Instrument),
            (i.default.PolySynth.defaults = {
              polyphony: 4,
              volume: 0,
              detune: 0,
              voice: i.default.Synth
            }),
            (i.default.PolySynth.prototype._getClosestVoice = function(t, e) {
              var n = this.voices.find(function(n) {
                if (
                  Math.abs(
                    n.frequency.getValueAtTime(t) - i.default.Frequency(e)
                  ) < 1e-4 &&
                  n.getLevelAtTime(t) > 1e-5
                )
                  return n
              })
              return (
                n ||
                this.voices.slice().sort(
                  function(e, n) {
                    var i = e.getLevelAtTime(t + this.blockTime),
                      r = n.getLevelAtTime(t + this.blockTime)
                    return i < 1e-5 && (i = 0), r < 1e-5 && (r = 0), i - r
                  }.bind(this)
                )[0]
              )
            }),
            (i.default.PolySynth.prototype.triggerAttack = function(t, e, n) {
              return (
                Array.isArray(t) || (t = [t]),
                (e = this.toSeconds(e)),
                t.forEach(
                  function(t) {
                    var i = this._getClosestVoice(e, t)
                    i.triggerAttack(t, e, n),
                      this.log('triggerAttack', i.index, t)
                  }.bind(this)
                ),
                this
              )
            }),
            (i.default.PolySynth.prototype.triggerRelease = function(t, e) {
              return (
                Array.isArray(t) || (t = [t]),
                (e = this.toSeconds(e)),
                t.forEach(
                  function(t) {
                    var n = this._getClosestVoice(e, t)
                    this.log('triggerRelease', n.index, t), n.triggerRelease(e)
                  }.bind(this)
                ),
                this
              )
            }),
            (i.default.PolySynth.prototype.triggerAttackRelease = function(
              t,
              e,
              n,
              r
            ) {
              if (
                ((n = this.toSeconds(n)),
                this.triggerAttack(t, n, r),
                i.default.isArray(e) && i.default.isArray(t))
              )
                for (var o = 0; o < t.length; o++) {
                  var a = e[Math.min(o, e.length - 1)]
                  this.triggerRelease(t[o], n + this.toSeconds(a))
                }
              else this.triggerRelease(t, n + this.toSeconds(e))
              return this
            }),
            (i.default.PolySynth.prototype.sync = function() {
              return (
                this._syncMethod('triggerAttack', 1),
                this._syncMethod('triggerRelease', 1),
                this
              )
            }),
            (i.default.PolySynth.prototype.set = function(t, e, n) {
              for (var i = 0; i < this.voices.length; i++)
                this.voices[i].set(t, e, n)
              return this
            }),
            (i.default.PolySynth.prototype.get = function(t) {
              return this.voices[0].get(t)
            }),
            (i.default.PolySynth.prototype.releaseAll = function(t) {
              return (
                (t = this.toSeconds(t)),
                this.voices.forEach(function(e) {
                  e.triggerRelease(t)
                }),
                this
              )
            }),
            (i.default.PolySynth.prototype.dispose = function() {
              return (
                i.default.Instrument.prototype.dispose.call(this),
                this.voices.forEach(function(t) {
                  t.dispose()
                }),
                this._writable('detune'),
                this.detune.dispose(),
                (this.detune = null),
                (this.voices = null),
                this
              )
            }),
            (i.default.PolySynth.MAX_POLYPHONY = 20),
            (e.default = i.default.PolySynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(21),
            n(39),
            n(54),
            (i.default.PluckSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.PluckSynth.defaults)),
                i.default.Instrument.call(this, t),
                (this._noise = new i.default.Noise('pink')),
                (this.attackNoise = t.attackNoise),
                (this._lfcf = new i.default.LowpassCombFilter({
                  resonance: t.resonance,
                  dampening: t.dampening
                })),
                (this.resonance = this._lfcf.resonance),
                (this.dampening = this._lfcf.dampening),
                this._noise.connect(this._lfcf),
                this._lfcf.connect(this.output),
                this._readOnly(['resonance', 'dampening'])
            }),
            i.default.extend(i.default.PluckSynth, i.default.Instrument),
            (i.default.PluckSynth.defaults = {
              attackNoise: 1,
              dampening: 4e3,
              resonance: 0.7
            }),
            (i.default.PluckSynth.prototype.triggerAttack = function(t, e) {
              ;(t = this.toFrequency(t)), (e = this.toSeconds(e))
              var n = 1 / t
              return (
                this._lfcf.delayTime.setValueAtTime(n, e),
                this._noise.start(e),
                this._noise.stop(e + n * this.attackNoise),
                this
              )
            }),
            (i.default.PluckSynth.prototype.dispose = function() {
              return (
                i.default.Instrument.prototype.dispose.call(this),
                this._noise.dispose(),
                this._lfcf.dispose(),
                (this._noise = null),
                (this._lfcf = null),
                this._writable(['resonance', 'dampening']),
                (this.dampening = null),
                (this.resonance = null),
                this
              )
            }),
            (e.default = i.default.PluckSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(31),
            n(41),
            n(39),
            n(2),
            n(9),
            n(21),
            (i.default.NoiseSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.NoiseSynth.defaults)),
                i.default.Instrument.call(this, t),
                (this.noise = new i.default.Noise(t.noise)),
                (this.envelope = new i.default.AmplitudeEnvelope(t.envelope)),
                this.noise.chain(this.envelope, this.output),
                this._readOnly(['noise', 'envelope'])
            }),
            i.default.extend(i.default.NoiseSynth, i.default.Instrument),
            (i.default.NoiseSynth.defaults = {
              noise: {type: 'white'},
              envelope: {attack: 0.005, decay: 0.1, sustain: 0}
            }),
            (i.default.NoiseSynth.prototype.triggerAttack = function(t, e) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerAttack(t, e),
                this.noise.start(t),
                0 === this.envelope.sustain &&
                  this.noise.stop(
                    t + this.envelope.attack + this.envelope.decay
                  ),
                this
              )
            }),
            (i.default.NoiseSynth.prototype.triggerRelease = function(t) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerRelease(t),
                this.noise.stop(t + this.envelope.release),
                this
              )
            }),
            (i.default.NoiseSynth.prototype.sync = function() {
              return (
                this._syncMethod('triggerAttack', 0),
                this._syncMethod('triggerRelease', 0),
                this
              )
            }),
            (i.default.NoiseSynth.prototype.triggerAttackRelease = function(
              t,
              e,
              n
            ) {
              return (
                (e = this.toSeconds(e)),
                (t = this.toSeconds(t)),
                this.triggerAttack(e, n),
                this.triggerRelease(e + t),
                this
              )
            }),
            (i.default.NoiseSynth.prototype.dispose = function() {
              return (
                i.default.Instrument.prototype.dispose.call(this),
                this._writable(['noise', 'envelope']),
                this.noise.dispose(),
                (this.noise = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this
              )
            }),
            (e.default = i.default.NoiseSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0),
            r = (n(21),
            n(49),
            n(9),
            n(41),
            n(31),
            n(3),
            n(26),
            n(5),
            [1, 1.483, 1.932, 2.546, 2.63, 3.897])
          ;(i.default.MetalSynth = function(t) {
            ;(t = i.default.defaultArg(t, i.default.MetalSynth.defaults)),
              i.default.Instrument.call(this, t),
              (this.frequency = new i.default.Signal(
                t.frequency,
                i.default.Type.Frequency
              )),
              (this._oscillators = []),
              (this._freqMultipliers = []),
              (this._amplitue = new i.default.Gain(0).connect(this.output)),
              (this._highpass = new i.default.Filter({
                type: 'highpass',
                Q: -3.0102999566398125
              }).connect(this._amplitue)),
              (this._octaves = t.octaves),
              (this._filterFreqScaler = new i.default.Scale(t.resonance, 7e3)),
              (this.envelope = new i.default.Envelope({
                attack: t.envelope.attack,
                attackCurve: 'linear',
                decay: t.envelope.decay,
                sustain: 0,
                release: t.envelope.release
              }).chain(this._filterFreqScaler, this._highpass.frequency)),
              this.envelope.connect(this._amplitue.gain)
            for (var e = 0; e < r.length; e++) {
              var n = new i.default.FMOscillator({
                type: 'square',
                modulationType: 'square',
                harmonicity: t.harmonicity,
                modulationIndex: t.modulationIndex
              })
              n.connect(this._highpass), (this._oscillators[e] = n)
              var o = new i.default.Multiply(r[e])
              ;(this._freqMultipliers[e] = o),
                this.frequency.chain(o, n.frequency)
            }
            this.octaves = t.octaves
          }),
            i.default.extend(i.default.MetalSynth, i.default.Instrument),
            (i.default.MetalSynth.defaults = {
              frequency: 200,
              envelope: {attack: 0.001, decay: 1.4, release: 0.2},
              harmonicity: 5.1,
              modulationIndex: 32,
              resonance: 4e3,
              octaves: 1.5
            }),
            (i.default.MetalSynth.prototype.triggerAttack = function(t, e) {
              return (
                (t = this.toSeconds(t)),
                (e = i.default.defaultArg(e, 1)),
                this.envelope.triggerAttack(t, e),
                this._oscillators.forEach(function(e) {
                  e.start(t)
                }),
                0 === this.envelope.sustain &&
                  this._oscillators.forEach(
                    function(e) {
                      e.stop(t + this.envelope.attack + this.envelope.decay)
                    }.bind(this)
                  ),
                this
              )
            }),
            (i.default.MetalSynth.prototype.triggerRelease = function(t) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerRelease(t),
                this._oscillators.forEach(
                  function(e) {
                    e.stop(t + this.envelope.release)
                  }.bind(this)
                ),
                this
              )
            }),
            (i.default.MetalSynth.prototype.sync = function() {
              return (
                this._syncMethod('triggerAttack', 0),
                this._syncMethod('triggerRelease', 0),
                this
              )
            }),
            (i.default.MetalSynth.prototype.triggerAttackRelease = function(
              t,
              e,
              n
            ) {
              return (
                (e = this.toSeconds(e)),
                (t = this.toSeconds(t)),
                this.triggerAttack(e, n),
                this.triggerRelease(e + t),
                this
              )
            }),
            Object.defineProperty(
              i.default.MetalSynth.prototype,
              'modulationIndex',
              {
                get: function() {
                  return this._oscillators[0].modulationIndex.value
                },
                set: function(t) {
                  for (var e = 0; e < this._oscillators.length; e++)
                    this._oscillators[e].modulationIndex.value = t
                }
              }
            ),
            Object.defineProperty(
              i.default.MetalSynth.prototype,
              'harmonicity',
              {
                get: function() {
                  return this._oscillators[0].harmonicity.value
                },
                set: function(t) {
                  for (var e = 0; e < this._oscillators.length; e++)
                    this._oscillators[e].harmonicity.value = t
                }
              }
            ),
            Object.defineProperty(i.default.MetalSynth.prototype, 'resonance', {
              get: function() {
                return this._filterFreqScaler.min
              },
              set: function(t) {
                ;(this._filterFreqScaler.min = t),
                  (this.octaves = this._octaves)
              }
            }),
            Object.defineProperty(i.default.MetalSynth.prototype, 'octaves', {
              get: function() {
                return this._octaves
              },
              set: function(t) {
                ;(this._octaves = t),
                  (this._filterFreqScaler.max =
                    this._filterFreqScaler.min * Math.pow(2, t))
              }
            }),
            (i.default.MetalSynth.prototype.dispose = function() {
              i.default.Instrument.prototype.dispose.call(this)
              for (var t = 0; t < this._oscillators.length; t++)
                this._oscillators[t].dispose(),
                  this._freqMultipliers[t].dispose()
              ;(this._oscillators = null),
                (this._freqMultipliers = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this._filterFreqScaler.dispose(),
                (this._filterFreqScaler = null),
                this._amplitue.dispose(),
                (this._amplitue = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this._highpass.dispose(),
                (this._highpass = null)
            }),
            (e.default = i.default.MetalSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(37),
            n(21),
            n(31),
            (i.default.MembraneSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.MembraneSynth.defaults)),
                i.default.Instrument.call(this, t),
                (this.oscillator = new i.default.OmniOscillator(t.oscillator)),
                (this.envelope = new i.default.AmplitudeEnvelope(t.envelope)),
                (this.octaves = t.octaves),
                (this.pitchDecay = t.pitchDecay),
                this.oscillator.chain(this.envelope, this.output),
                this._readOnly(['oscillator', 'envelope'])
            }),
            i.default.extend(i.default.MembraneSynth, i.default.Instrument),
            (i.default.MembraneSynth.defaults = {
              pitchDecay: 0.05,
              octaves: 10,
              oscillator: {type: 'sine'},
              envelope: {
                attack: 0.001,
                decay: 0.4,
                sustain: 0.01,
                release: 1.4,
                attackCurve: 'exponential'
              }
            }),
            (i.default.MembraneSynth.prototype.triggerAttack = function(
              t,
              e,
              n
            ) {
              e = this.toSeconds(e)
              var i = (t = this.toFrequency(t)) * this.octaves
              return (
                this.oscillator.frequency.setValueAtTime(i, e),
                this.oscillator.frequency.exponentialRampToValueAtTime(
                  t,
                  e + this.toSeconds(this.pitchDecay)
                ),
                this.envelope.triggerAttack(e, n),
                this.oscillator.start(e),
                0 === this.envelope.sustain &&
                  this.oscillator.stop(
                    e + this.envelope.attack + this.envelope.decay
                  ),
                this
              )
            }),
            (i.default.MembraneSynth.prototype.triggerRelease = function(t) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerRelease(t),
                this.oscillator.stop(t + this.envelope.release),
                this
              )
            }),
            (i.default.MembraneSynth.prototype.dispose = function() {
              return (
                i.default.Instrument.prototype.dispose.call(this),
                this._writable(['oscillator', 'envelope']),
                this.oscillator.dispose(),
                (this.oscillator = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this
              )
            }),
            (e.default = i.default.MembraneSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(38),
            n(2),
            n(5),
            n(25),
            (i.default.FMSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.FMSynth.defaults)),
                i.default.Monophonic.call(this, t),
                (this._carrier = new i.default.Synth(t.carrier)),
                (this._carrier.volume.value = -10),
                (this.oscillator = this._carrier.oscillator),
                (this.envelope = this._carrier.envelope.set(t.envelope)),
                (this._modulator = new i.default.Synth(t.modulator)),
                (this._modulator.volume.value = -10),
                (this.modulation = this._modulator.oscillator.set(
                  t.modulation
                )),
                (this.modulationEnvelope = this._modulator.envelope.set(
                  t.modulationEnvelope
                )),
                (this.frequency = new i.default.Signal(
                  440,
                  i.default.Type.Frequency
                )),
                (this.detune = new i.default.Signal(
                  t.detune,
                  i.default.Type.Cents
                )),
                (this.harmonicity = new i.default.Multiply(t.harmonicity)),
                (this.harmonicity.units = i.default.Type.Positive),
                (this.modulationIndex = new i.default.Multiply(
                  t.modulationIndex
                )),
                (this.modulationIndex.units = i.default.Type.Positive),
                (this._modulationNode = new i.default.Gain(0)),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.frequency.chain(
                  this.modulationIndex,
                  this._modulationNode
                ),
                this.detune.fan(this._carrier.detune, this._modulator.detune),
                this._modulator.connect(this._modulationNode.gain),
                this._modulationNode.connect(this._carrier.frequency),
                this._carrier.connect(this.output),
                this._readOnly([
                  'frequency',
                  'harmonicity',
                  'modulationIndex',
                  'oscillator',
                  'envelope',
                  'modulation',
                  'modulationEnvelope',
                  'detune'
                ])
            }),
            i.default.extend(i.default.FMSynth, i.default.Monophonic),
            (i.default.FMSynth.defaults = {
              harmonicity: 3,
              modulationIndex: 10,
              detune: 0,
              oscillator: {type: 'sine'},
              envelope: {attack: 0.01, decay: 0.01, sustain: 1, release: 0.5},
              modulation: {type: 'square'},
              modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5
              }
            }),
            (i.default.FMSynth.prototype._triggerEnvelopeAttack = function(
              t,
              e
            ) {
              return (
                (t = this.toSeconds(t)),
                this._carrier._triggerEnvelopeAttack(t, e),
                this._modulator._triggerEnvelopeAttack(t),
                this
              )
            }),
            (i.default.FMSynth.prototype._triggerEnvelopeRelease = function(t) {
              return (
                (t = this.toSeconds(t)),
                this._carrier._triggerEnvelopeRelease(t),
                this._modulator._triggerEnvelopeRelease(t),
                this
              )
            }),
            (i.default.FMSynth.prototype.dispose = function() {
              return (
                i.default.Monophonic.prototype.dispose.call(this),
                this._writable([
                  'frequency',
                  'harmonicity',
                  'modulationIndex',
                  'oscillator',
                  'envelope',
                  'modulation',
                  'modulationEnvelope',
                  'detune'
                ]),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                this.modulationIndex.dispose(),
                (this.modulationIndex = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                (this.oscillator = null),
                (this.envelope = null),
                (this.modulationEnvelope = null),
                (this.modulation = null),
                this
              )
            }),
            (e.default = i.default.FMSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(66),
            n(12),
            n(2),
            n(5),
            n(25),
            n(14),
            (i.default.DuoSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.DuoSynth.defaults)),
                i.default.Monophonic.call(this, t),
                (this.voice0 = new i.default.MonoSynth(t.voice0)),
                (this.voice0.volume.value = -10),
                (this.voice1 = new i.default.MonoSynth(t.voice1)),
                (this.voice1.volume.value = -10),
                (this._vibrato = new i.default.LFO(t.vibratoRate, -50, 50)),
                this._vibrato.start(),
                (this.vibratoRate = this._vibrato.frequency),
                (this._vibratoGain = new i.default.Gain(
                  t.vibratoAmount,
                  i.default.Type.Positive
                )),
                (this.vibratoAmount = this._vibratoGain.gain),
                (this.frequency = new i.default.Signal(
                  440,
                  i.default.Type.Frequency
                )),
                (this.harmonicity = new i.default.Multiply(t.harmonicity)),
                (this.harmonicity.units = i.default.Type.Positive),
                this.frequency.connect(this.voice0.frequency),
                this.frequency.chain(this.harmonicity, this.voice1.frequency),
                this._vibrato.connect(this._vibratoGain),
                this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
                this.voice0.connect(this.output),
                this.voice1.connect(this.output),
                this._readOnly([
                  'voice0',
                  'voice1',
                  'frequency',
                  'vibratoAmount',
                  'vibratoRate'
                ])
            }),
            i.default.extend(i.default.DuoSynth, i.default.Monophonic),
            (i.default.DuoSynth.defaults = {
              vibratoAmount: 0.5,
              vibratoRate: 5,
              harmonicity: 1.5,
              voice0: {
                volume: -10,
                portamento: 0,
                oscillator: {type: 'sine'},
                filterEnvelope: {
                  attack: 0.01,
                  decay: 0,
                  sustain: 1,
                  release: 0.5
                },
                envelope: {attack: 0.01, decay: 0, sustain: 1, release: 0.5}
              },
              voice1: {
                volume: -10,
                portamento: 0,
                oscillator: {type: 'sine'},
                filterEnvelope: {
                  attack: 0.01,
                  decay: 0,
                  sustain: 1,
                  release: 0.5
                },
                envelope: {attack: 0.01, decay: 0, sustain: 1, release: 0.5}
              }
            }),
            (i.default.DuoSynth.prototype._triggerEnvelopeAttack = function(
              t,
              e
            ) {
              return (
                (t = this.toSeconds(t)),
                this.voice0._triggerEnvelopeAttack(t, e),
                this.voice1._triggerEnvelopeAttack(t, e),
                this
              )
            }),
            (i.default.DuoSynth.prototype._triggerEnvelopeRelease = function(
              t
            ) {
              return (
                this.voice0._triggerEnvelopeRelease(t),
                this.voice1._triggerEnvelopeRelease(t),
                this
              )
            }),
            (i.default.DuoSynth.prototype.getLevelAtTime = function(t) {
              return (
                (this.voice0.getLevelAtTime(t) +
                  this.voice1.getLevelAtTime(t)) /
                2
              )
            }),
            (i.default.DuoSynth.prototype.dispose = function() {
              return (
                i.default.Monophonic.prototype.dispose.call(this),
                this._writable([
                  'voice0',
                  'voice1',
                  'frequency',
                  'vibratoAmount',
                  'vibratoRate'
                ]),
                this.voice0.dispose(),
                (this.voice0 = null),
                this.voice1.dispose(),
                (this.voice1 = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this._vibratoGain.dispose(),
                (this._vibratoGain = null),
                (this._vibrato = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this.vibratoAmount.dispose(),
                (this.vibratoAmount = null),
                (this.vibratoRate = null),
                this
              )
            }),
            (e.default = i.default.DuoSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(38),
            n(2),
            n(5),
            n(25),
            n(22),
            n(3),
            (i.default.AMSynth = function(t) {
              ;(t = i.default.defaultArg(t, i.default.AMSynth.defaults)),
                i.default.Monophonic.call(this, t),
                (this._carrier = new i.default.Synth()),
                (this._carrier.volume.value = -10),
                (this.oscillator = this._carrier.oscillator.set(t.oscillator)),
                (this.envelope = this._carrier.envelope.set(t.envelope)),
                (this._modulator = new i.default.Synth()),
                (this._modulator.volume.value = -10),
                (this.modulation = this._modulator.oscillator.set(
                  t.modulation
                )),
                (this.modulationEnvelope = this._modulator.envelope.set(
                  t.modulationEnvelope
                )),
                (this.frequency = new i.default.Signal(
                  440,
                  i.default.Type.Frequency
                )),
                (this.detune = new i.default.Signal(
                  t.detune,
                  i.default.Type.Cents
                )),
                (this.harmonicity = new i.default.Multiply(t.harmonicity)),
                (this.harmonicity.units = i.default.Type.Positive),
                (this._modulationScale = new i.default.AudioToGain()),
                (this._modulationNode = new i.default.Gain()),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.detune.fan(this._carrier.detune, this._modulator.detune),
                this._modulator.chain(
                  this._modulationScale,
                  this._modulationNode.gain
                ),
                this._carrier.chain(this._modulationNode, this.output),
                this._readOnly([
                  'frequency',
                  'harmonicity',
                  'oscillator',
                  'envelope',
                  'modulation',
                  'modulationEnvelope',
                  'detune'
                ])
            }),
            i.default.extend(i.default.AMSynth, i.default.Monophonic),
            (i.default.AMSynth.defaults = {
              harmonicity: 3,
              detune: 0,
              oscillator: {type: 'sine'},
              envelope: {attack: 0.01, decay: 0.01, sustain: 1, release: 0.5},
              modulation: {type: 'square'},
              modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5
              }
            }),
            (i.default.AMSynth.prototype._triggerEnvelopeAttack = function(
              t,
              e
            ) {
              return (
                (t = this.toSeconds(t)),
                this._carrier._triggerEnvelopeAttack(t, e),
                this._modulator._triggerEnvelopeAttack(t),
                this
              )
            }),
            (i.default.AMSynth.prototype._triggerEnvelopeRelease = function(t) {
              return (
                this._carrier._triggerEnvelopeRelease(t),
                this._modulator._triggerEnvelopeRelease(t),
                this
              )
            }),
            (i.default.AMSynth.prototype.dispose = function() {
              return (
                i.default.Monophonic.prototype.dispose.call(this),
                this._writable([
                  'frequency',
                  'harmonicity',
                  'oscillator',
                  'envelope',
                  'modulation',
                  'modulationEnvelope',
                  'detune'
                ]),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._modulationScale.dispose(),
                (this._modulationScale = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                (this.oscillator = null),
                (this.envelope = null),
                (this.modulationEnvelope = null),
                (this.modulation = null),
                this
              )
            }),
            (e.default = i.default.AMSynth)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(70),
            n(16),
            (i.default.Sequence = function() {
              var t = i.default.defaults(
                  arguments,
                  ['callback', 'events', 'subdivision'],
                  i.default.Sequence
                ),
                e = t.events
              if (
                (delete t.events,
                i.default.Part.call(this, t),
                (this._subdivision = this.toTicks(t.subdivision)),
                i.default.isUndef(t.loopEnd) &&
                  i.default.isDefined(e) &&
                  (this._loopEnd = e.length * this._subdivision),
                (this._loop = !0),
                i.default.isDefined(e))
              )
                for (var n = 0; n < e.length; n++) this.add(n, e[n])
            }),
            i.default.extend(i.default.Sequence, i.default.Part),
            (i.default.Sequence.defaults = {subdivision: '4n'}),
            Object.defineProperty(i.default.Sequence.prototype, 'subdivision', {
              get: function() {
                return i.default.Ticks(this._subdivision).toSeconds()
              }
            }),
            (i.default.Sequence.prototype.at = function(t, e) {
              return (
                i.default.isArray(e) && this.remove(t),
                i.default.Part.prototype.at.call(this, this._indexTime(t), e)
              )
            }),
            (i.default.Sequence.prototype.add = function(t, e) {
              if (null === e) return this
              if (i.default.isArray(e)) {
                var n = Math.round(this._subdivision / e.length)
                e = new i.default.Sequence(
                  this._tick.bind(this),
                  e,
                  i.default.Ticks(n)
                )
              }
              return (
                i.default.Part.prototype.add.call(this, this._indexTime(t), e),
                this
              )
            }),
            (i.default.Sequence.prototype.remove = function(t, e) {
              return (
                i.default.Part.prototype.remove.call(
                  this,
                  this._indexTime(t),
                  e
                ),
                this
              )
            }),
            (i.default.Sequence.prototype._indexTime = function(t) {
              return t instanceof i.default.TransportTime
                ? t
                : i.default
                    .Ticks(t * this._subdivision + this.startOffset)
                    .toSeconds()
            }),
            (i.default.Sequence.prototype.dispose = function() {
              return i.default.Part.prototype.dispose.call(this), this
            }),
            (e.default = i.default.Sequence)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(71),
            n(79),
            (i.default.Pattern = function() {
              var t = i.default.defaults(
                arguments,
                ['callback', 'values', 'pattern'],
                i.default.Pattern
              )
              i.default.Loop.call(this, t),
                (this._pattern = new i.default.CtrlPattern({
                  values: t.values,
                  type: t.pattern,
                  index: t.index
                }))
            }),
            i.default.extend(i.default.Pattern, i.default.Loop),
            (i.default.Pattern.defaults = {
              pattern: i.default.CtrlPattern.Type.Up,
              callback: i.default.noOp,
              values: []
            }),
            (i.default.Pattern.prototype._tick = function(t) {
              this.callback(t, this._pattern.value), this._pattern.next()
            }),
            Object.defineProperty(i.default.Pattern.prototype, 'index', {
              get: function() {
                return this._pattern.index
              },
              set: function(t) {
                this._pattern.index = t
              }
            }),
            Object.defineProperty(i.default.Pattern.prototype, 'values', {
              get: function() {
                return this._pattern.values
              },
              set: function(t) {
                this._pattern.values = t
              }
            }),
            Object.defineProperty(i.default.Pattern.prototype, 'value', {
              get: function() {
                return this._pattern.value
              }
            }),
            Object.defineProperty(i.default.Pattern.prototype, 'pattern', {
              get: function() {
                return this._pattern.type
              },
              set: function(t) {
                this._pattern.type = t
              }
            }),
            (i.default.Pattern.prototype.dispose = function() {
              i.default.Loop.prototype.dispose.call(this),
                this._pattern.dispose(),
                (this._pattern = null)
            }),
            (e.default = i.default.Pattern)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(18),
            n(12),
            (i.default.Vibrato = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'depth'],
                i.default.Vibrato
              )
              i.default.Effect.call(this, t),
                (this._delayNode = new i.default.Delay(0, t.maxDelay)),
                (this._lfo = new i.default.LFO({
                  type: t.type,
                  min: 0,
                  max: t.maxDelay,
                  frequency: t.frequency,
                  phase: -90
                })
                  .start()
                  .connect(this._delayNode.delayTime)),
                (this.frequency = this._lfo.frequency),
                (this.depth = this._lfo.amplitude),
                (this.depth.value = t.depth),
                this._readOnly(['frequency', 'depth']),
                this.effectSend.chain(this._delayNode, this.effectReturn)
            }),
            i.default.extend(i.default.Vibrato, i.default.Effect),
            (i.default.Vibrato.defaults = {
              maxDelay: 0.005,
              frequency: 5,
              depth: 0.1,
              type: 'sine'
            }),
            Object.defineProperty(i.default.Vibrato.prototype, 'type', {
              get: function() {
                return this._lfo.type
              },
              set: function(t) {
                this._lfo.type = t
              }
            }),
            (i.default.Vibrato.prototype.dispose = function() {
              i.default.Effect.prototype.dispose.call(this),
                this._delayNode.dispose(),
                (this._delayNode = null),
                this._lfo.dispose(),
                (this._lfo = null),
                this._writable(['frequency', 'depth']),
                (this.frequency = null),
                (this.depth = null)
            }),
            (e.default = i.default.Vibrato)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(12),
            n(15),
            (i.default.Tremolo = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'depth'],
                i.default.Tremolo
              )
              i.default.StereoEffect.call(this, t),
                (this._lfoL = new i.default.LFO({
                  phase: t.spread,
                  min: 1,
                  max: 0
                })),
                (this._lfoR = new i.default.LFO({
                  phase: t.spread,
                  min: 1,
                  max: 0
                })),
                (this._amplitudeL = new i.default.Gain()),
                (this._amplitudeR = new i.default.Gain()),
                (this.frequency = new i.default.Signal(
                  t.frequency,
                  i.default.Type.Frequency
                )),
                (this.depth = new i.default.Signal(
                  t.depth,
                  i.default.Type.NormalRange
                )),
                this._readOnly(['frequency', 'depth']),
                this.effectSendL.chain(this._amplitudeL, this.effectReturnL),
                this.effectSendR.chain(this._amplitudeR, this.effectReturnR),
                this._lfoL.connect(this._amplitudeL.gain),
                this._lfoR.connect(this._amplitudeR.gain),
                this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
                this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
                (this.type = t.type),
                (this.spread = t.spread)
            }),
            i.default.extend(i.default.Tremolo, i.default.StereoEffect),
            (i.default.Tremolo.defaults = {
              frequency: 10,
              type: 'sine',
              depth: 0.5,
              spread: 180
            }),
            (i.default.Tremolo.prototype.start = function(t) {
              return this._lfoL.start(t), this._lfoR.start(t), this
            }),
            (i.default.Tremolo.prototype.stop = function(t) {
              return this._lfoL.stop(t), this._lfoR.stop(t), this
            }),
            (i.default.Tremolo.prototype.sync = function(t) {
              return (
                this._lfoL.sync(t),
                this._lfoR.sync(t),
                i.default.Transport.syncSignal(this.frequency),
                this
              )
            }),
            (i.default.Tremolo.prototype.unsync = function() {
              return (
                this._lfoL.unsync(),
                this._lfoR.unsync(),
                i.default.Transport.unsyncSignal(this.frequency),
                this
              )
            }),
            Object.defineProperty(i.default.Tremolo.prototype, 'type', {
              get: function() {
                return this._lfoL.type
              },
              set: function(t) {
                ;(this._lfoL.type = t), (this._lfoR.type = t)
              }
            }),
            Object.defineProperty(i.default.Tremolo.prototype, 'spread', {
              get: function() {
                return this._lfoR.phase - this._lfoL.phase
              },
              set: function(t) {
                ;(this._lfoL.phase = 90 - t / 2),
                  (this._lfoR.phase = t / 2 + 90)
              }
            }),
            (i.default.Tremolo.prototype.dispose = function() {
              return (
                i.default.StereoEffect.prototype.dispose.call(this),
                this._writable(['frequency', 'depth']),
                this._lfoL.dispose(),
                (this._lfoL = null),
                this._lfoR.dispose(),
                (this._lfoR = null),
                this._amplitudeL.dispose(),
                (this._amplitudeL = null),
                this._amplitudeR.dispose(),
                (this._amplitudeR = null),
                (this.frequency = null),
                (this.depth = null),
                this
              )
            }),
            (e.default = i.default.Tremolo)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(73),
            n(2),
            n(5),
            n(13),
            (i.default.StereoWidener = function() {
              var t = i.default.defaults(
                arguments,
                ['width'],
                i.default.StereoWidener
              )
              i.default.MidSideEffect.call(this, t),
                (this.width = new i.default.Signal(
                  t.width,
                  i.default.Type.NormalRange
                )),
                this._readOnly(['width']),
                (this._twoTimesWidthMid = new i.default.Multiply(2)),
                (this._twoTimesWidthSide = new i.default.Multiply(2)),
                (this._midMult = new i.default.Multiply()),
                this._twoTimesWidthMid.connect(this._midMult, 0, 1),
                this.midSend.chain(this._midMult, this.midReturn),
                (this._oneMinusWidth = new i.default.Subtract()),
                this._oneMinusWidth.connect(this._twoTimesWidthMid),
                i.default.connect(
                  this.context.getConstant(1),
                  this._oneMinusWidth,
                  0,
                  0
                ),
                this.width.connect(this._oneMinusWidth, 0, 1),
                (this._sideMult = new i.default.Multiply()),
                this.width.connect(this._twoTimesWidthSide),
                this._twoTimesWidthSide.connect(this._sideMult, 0, 1),
                this.sideSend.chain(this._sideMult, this.sideReturn)
            }),
            i.default.extend(i.default.StereoWidener, i.default.MidSideEffect),
            (i.default.StereoWidener.defaults = {width: 0.5}),
            (i.default.StereoWidener.prototype.dispose = function() {
              return (
                i.default.MidSideEffect.prototype.dispose.call(this),
                this._writable(['width']),
                this.width.dispose(),
                (this.width = null),
                this._midMult.dispose(),
                (this._midMult = null),
                this._sideMult.dispose(),
                (this._sideMult = null),
                this._twoTimesWidthMid.dispose(),
                (this._twoTimesWidthMid = null),
                this._twoTimesWidthSide.dispose(),
                (this._twoTimesWidthSide = null),
                this._oneMinusWidth.dispose(),
                (this._oneMinusWidth = null),
                this
              )
            }),
            (e.default = i.default.StereoWidener)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(15),
            n(33),
            n(3),
            (i.default.StereoFeedbackEffect = function() {
              var t = i.default.defaults(
                arguments,
                ['feedback'],
                i.default.FeedbackEffect
              )
              i.default.StereoEffect.call(this, t),
                (this.feedback = new i.default.Signal(
                  t.feedback,
                  i.default.Type.NormalRange
                )),
                (this._feedbackL = new i.default.Gain()),
                (this._feedbackR = new i.default.Gain()),
                this.effectReturnL.chain(this._feedbackL, this.effectSendL),
                this.effectReturnR.chain(this._feedbackR, this.effectSendR),
                this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
                this._readOnly(['feedback'])
            }),
            i.default.extend(
              i.default.StereoFeedbackEffect,
              i.default.StereoEffect
            ),
            (i.default.StereoFeedbackEffect.prototype.dispose = function() {
              return (
                i.default.StereoEffect.prototype.dispose.call(this),
                this._writable(['feedback']),
                this.feedback.dispose(),
                (this.feedback = null),
                this._feedbackL.dispose(),
                (this._feedbackL = null),
                this._feedbackR.dispose(),
                (this._feedbackR = null),
                this
              )
            }),
            (e.default = i.default.StereoFeedbackEffect)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(77),
            n(9),
            n(10),
            n(39),
            n(3),
            n(74),
            (i.default.Reverb = function() {
              var t = i.default.defaults(arguments, ['decay'], i.default.Reverb)
              i.default.Effect.call(this, t),
                (this._convolver = this.context.createConvolver()),
                (this.decay = t.decay),
                (this.preDelay = t.preDelay),
                this.connectEffect(this._convolver)
            }),
            i.default.extend(i.default.Reverb, i.default.Effect),
            (i.default.Reverb.defaults = {decay: 1.5, preDelay: 0.01}),
            (i.default.Reverb.prototype.generate = function() {
              return i.default
                .Offline(
                  function() {
                    var t = new i.default.Noise(),
                      e = new i.default.Noise(),
                      n = new i.default.Merge()
                    t.connect(n.left), e.connect(n.right)
                    var r = new i.default.Gain().toMaster()
                    n.connect(r),
                      t.start(0),
                      e.start(0),
                      r.gain.setValueAtTime(0, 0),
                      r.gain.setValueAtTime(1, this.preDelay),
                      r.gain.exponentialApproachValueAtTime(
                        0,
                        this.preDelay,
                        this.decay + this.preDelay
                      )
                  }.bind(this),
                  this.decay + this.preDelay
                )
                .then(
                  function(t) {
                    return (this._convolver.buffer = t.get()), this
                  }.bind(this)
                )
            }),
            (i.default.Reverb.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._convolver.disconnect(),
                (this._convolver = null),
                this
              )
            }),
            (e.default = i.default.Reverb)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(12),
            n(23),
            n(2),
            n(33),
            n(18),
            (i.default.PitchShift = function() {
              var t = i.default.defaults(
                arguments,
                ['pitch'],
                i.default.PitchShift
              )
              i.default.FeedbackEffect.call(this, t),
                (this._frequency = new i.default.Signal(0)),
                (this._delayA = new i.default.Delay(0, 1)),
                (this._lfoA = new i.default.LFO({
                  min: 0,
                  max: 0.1,
                  type: 'sawtooth'
                }).connect(this._delayA.delayTime)),
                (this._delayB = new i.default.Delay(0, 1)),
                (this._lfoB = new i.default.LFO({
                  min: 0,
                  max: 0.1,
                  type: 'sawtooth',
                  phase: 180
                }).connect(this._delayB.delayTime)),
                (this._crossFade = new i.default.CrossFade()),
                (this._crossFadeLFO = new i.default.LFO({
                  min: 0,
                  max: 1,
                  type: 'triangle',
                  phase: 90
                }).connect(this._crossFade.fade)),
                (this._feedbackDelay = new i.default.Delay(t.delayTime)),
                (this.delayTime = this._feedbackDelay.delayTime),
                this._readOnly('delayTime'),
                (this._pitch = t.pitch),
                (this._windowSize = t.windowSize),
                this._delayA.connect(this._crossFade.a),
                this._delayB.connect(this._crossFade.b),
                this._frequency.fan(
                  this._lfoA.frequency,
                  this._lfoB.frequency,
                  this._crossFadeLFO.frequency
                ),
                this.effectSend.fan(this._delayA, this._delayB),
                this._crossFade.chain(this._feedbackDelay, this.effectReturn)
              var e = this.now()
              this._lfoA.start(e),
                this._lfoB.start(e),
                this._crossFadeLFO.start(e),
                (this.windowSize = this._windowSize)
            }),
            i.default.extend(i.default.PitchShift, i.default.FeedbackEffect),
            (i.default.PitchShift.defaults = {
              pitch: 0,
              windowSize: 0.1,
              delayTime: 0,
              feedback: 0
            }),
            Object.defineProperty(i.default.PitchShift.prototype, 'pitch', {
              get: function() {
                return this._pitch
              },
              set: function(t) {
                this._pitch = t
                var e = 0
                t < 0
                  ? ((this._lfoA.min = 0),
                    (this._lfoA.max = this._windowSize),
                    (this._lfoB.min = 0),
                    (this._lfoB.max = this._windowSize),
                    (e = i.default.intervalToFrequencyRatio(t - 1) + 1))
                  : ((this._lfoA.min = this._windowSize),
                    (this._lfoA.max = 0),
                    (this._lfoB.min = this._windowSize),
                    (this._lfoB.max = 0),
                    (e = i.default.intervalToFrequencyRatio(t) - 1)),
                  (this._frequency.value = e * (1.2 / this._windowSize))
              }
            }),
            Object.defineProperty(
              i.default.PitchShift.prototype,
              'windowSize',
              {
                get: function() {
                  return this._windowSize
                },
                set: function(t) {
                  ;(this._windowSize = this.toSeconds(t)),
                    (this.pitch = this._pitch)
                }
              }
            ),
            (i.default.PitchShift.prototype.dispose = function() {
              return (
                i.default.FeedbackEffect.prototype.dispose.call(this),
                this._frequency.dispose(),
                (this._frequency = null),
                this._delayA.disconnect(),
                (this._delayA = null),
                this._delayB.disconnect(),
                (this._delayB = null),
                this._lfoA.dispose(),
                (this._lfoA = null),
                this._lfoB.dispose(),
                (this._lfoB = null),
                this._crossFade.dispose(),
                (this._crossFade = null),
                this._crossFadeLFO.dispose(),
                (this._crossFadeLFO = null),
                this._writable('delayTime'),
                this._feedbackDelay.dispose(),
                (this._feedbackDelay = null),
                (this.delayTime = null),
                this
              )
            }),
            (e.default = i.default.PitchShift)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(72),
            n(2),
            n(18),
            (i.default.PingPongDelay = function() {
              var t = i.default.defaults(
                arguments,
                ['delayTime', 'feedback'],
                i.default.PingPongDelay
              )
              i.default.StereoXFeedbackEffect.call(this, t),
                (this._leftDelay = new i.default.Delay(0, t.maxDelayTime)),
                (this._rightDelay = new i.default.Delay(0, t.maxDelayTime)),
                (this._rightPreDelay = new i.default.Delay(0, t.maxDelayTime)),
                (this.delayTime = new i.default.Signal(
                  t.delayTime,
                  i.default.Type.Time
                )),
                this.effectSendL.chain(this._leftDelay, this.effectReturnL),
                this.effectSendR.chain(
                  this._rightPreDelay,
                  this._rightDelay,
                  this.effectReturnR
                ),
                this.delayTime.fan(
                  this._leftDelay.delayTime,
                  this._rightDelay.delayTime,
                  this._rightPreDelay.delayTime
                ),
                this._feedbackLR.disconnect(),
                this._feedbackLR.connect(this._rightDelay),
                this._readOnly(['delayTime'])
            }),
            i.default.extend(
              i.default.PingPongDelay,
              i.default.StereoXFeedbackEffect
            ),
            (i.default.PingPongDelay.defaults = {
              delayTime: 0.25,
              maxDelayTime: 1
            }),
            (i.default.PingPongDelay.prototype.dispose = function() {
              return (
                i.default.StereoXFeedbackEffect.prototype.dispose.call(this),
                this._leftDelay.dispose(),
                (this._leftDelay = null),
                this._rightDelay.dispose(),
                (this._rightDelay = null),
                this._rightPreDelay.dispose(),
                (this._rightPreDelay = null),
                this._writable(['delayTime']),
                this.delayTime.dispose(),
                (this.delayTime = null),
                this
              )
            }),
            (e.default = i.default.PingPongDelay)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(12),
            n(9),
            n(15),
            (i.default.Phaser = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'octaves', 'baseFrequency'],
                i.default.Phaser
              )
              i.default.StereoEffect.call(this, t),
                (this._lfoL = new i.default.LFO(t.frequency, 0, 1)),
                (this._lfoR = new i.default.LFO(t.frequency, 0, 1)),
                (this._lfoR.phase = 180),
                (this._baseFrequency = t.baseFrequency),
                (this._octaves = t.octaves),
                (this.Q = new i.default.Signal(t.Q, i.default.Type.Positive)),
                (this._filtersL = this._makeFilters(
                  t.stages,
                  this._lfoL,
                  this.Q
                )),
                (this._filtersR = this._makeFilters(
                  t.stages,
                  this._lfoR,
                  this.Q
                )),
                (this.frequency = this._lfoL.frequency),
                (this.frequency.value = t.frequency),
                this.effectSendL.connect(this._filtersL[0]),
                this.effectSendR.connect(this._filtersR[0]),
                i.default.connect(
                  this._filtersL[t.stages - 1],
                  this.effectReturnL
                ),
                i.default.connect(
                  this._filtersR[t.stages - 1],
                  this.effectReturnR
                ),
                this._lfoL.frequency.connect(this._lfoR.frequency),
                (this.baseFrequency = t.baseFrequency),
                (this.octaves = t.octaves),
                this._lfoL.start(),
                this._lfoR.start(),
                this._readOnly(['frequency', 'Q'])
            }),
            i.default.extend(i.default.Phaser, i.default.StereoEffect),
            (i.default.Phaser.defaults = {
              frequency: 0.5,
              octaves: 3,
              stages: 10,
              Q: 10,
              baseFrequency: 350
            }),
            (i.default.Phaser.prototype._makeFilters = function(t, e, n) {
              for (var r = new Array(t), o = 0; o < t; o++) {
                var a = this.context.createBiquadFilter()
                ;(a.type = 'allpass'),
                  n.connect(a.Q),
                  e.connect(a.frequency),
                  (r[o] = a)
              }
              return i.default.connectSeries.apply(i.default, r), r
            }),
            Object.defineProperty(i.default.Phaser.prototype, 'octaves', {
              get: function() {
                return this._octaves
              },
              set: function(t) {
                this._octaves = t
                var e = this._baseFrequency * Math.pow(2, t)
                ;(this._lfoL.max = e), (this._lfoR.max = e)
              }
            }),
            Object.defineProperty(i.default.Phaser.prototype, 'baseFrequency', {
              get: function() {
                return this._baseFrequency
              },
              set: function(t) {
                ;(this._baseFrequency = t),
                  (this._lfoL.min = t),
                  (this._lfoR.min = t),
                  (this.octaves = this._octaves)
              }
            }),
            (i.default.Phaser.prototype.dispose = function() {
              i.default.StereoEffect.prototype.dispose.call(this),
                this._writable(['frequency', 'Q']),
                this.Q.dispose(),
                (this.Q = null),
                this._lfoL.dispose(),
                (this._lfoL = null),
                this._lfoR.dispose(),
                (this._lfoR = null)
              for (var t = 0; t < this._filtersL.length; t++)
                this._filtersL[t].disconnect(), (this._filtersL[t] = null)
              this._filtersL = null
              for (var e = 0; e < this._filtersR.length; e++)
                this._filtersR[e].disconnect(), (this._filtersR[e] = null)
              return (this._filtersR = null), (this.frequency = null), this
            }),
            (e.default = i.default.Phaser)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0),
            r = (n(59), n(15), n(26), [0.06748, 0.06404, 0.08212, 0.09004]),
            o = [0.773, 0.802, 0.753, 0.733],
            a = [347, 113, 37]
          ;(i.default.JCReverb = function() {
            var t = i.default.defaults(
              arguments,
              ['roomSize'],
              i.default.JCReverb
            )
            i.default.StereoEffect.call(this, t),
              (this.roomSize = new i.default.Signal(
                t.roomSize,
                i.default.Type.NormalRange
              )),
              (this._scaleRoomSize = new i.default.Scale(-0.733, 0.197)),
              (this._allpassFilters = []),
              (this._feedbackCombFilters = [])
            for (var e = 0; e < a.length; e++) {
              var n = this.context.createBiquadFilter()
              ;(n.type = 'allpass'),
                (n.frequency.value = a[e]),
                this._allpassFilters.push(n)
            }
            for (var s = 0; s < r.length; s++) {
              var u = new i.default.FeedbackCombFilter(r[s], 0.1)
              this._scaleRoomSize.connect(u.resonance),
                (u.resonance.value = o[s]),
                i.default.connect(
                  this._allpassFilters[this._allpassFilters.length - 1],
                  u
                ),
                s < r.length / 2
                  ? u.connect(this.effectReturnL)
                  : u.connect(this.effectReturnR),
                this._feedbackCombFilters.push(u)
            }
            this.roomSize.connect(this._scaleRoomSize),
              i.default.connectSeries.apply(i.default, this._allpassFilters),
              this.effectSendL.connect(this._allpassFilters[0]),
              this.effectSendR.connect(this._allpassFilters[0]),
              this._readOnly(['roomSize'])
          }),
            i.default.extend(i.default.JCReverb, i.default.StereoEffect),
            (i.default.JCReverb.defaults = {roomSize: 0.5}),
            (i.default.JCReverb.prototype.dispose = function() {
              i.default.StereoEffect.prototype.dispose.call(this)
              for (var t = 0; t < this._allpassFilters.length; t++)
                this._allpassFilters[t].disconnect(),
                  (this._allpassFilters[t] = null)
              this._allpassFilters = null
              for (var e = 0; e < this._feedbackCombFilters.length; e++)
                this._feedbackCombFilters[e].dispose(),
                  (this._feedbackCombFilters[e] = null)
              return (
                (this._feedbackCombFilters = null),
                this._writable(['roomSize']),
                this.roomSize.dispose(),
                (this.roomSize = null),
                this._scaleRoomSize.dispose(),
                (this._scaleRoomSize = null),
                this
              )
            }),
            (e.default = i.default.JCReverb)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0),
            r = (n(54),
            n(15),
            n(2),
            n(19),
            n(10),
            n(42),
            [
              1557 / 44100,
              1617 / 44100,
              1491 / 44100,
              1422 / 44100,
              1277 / 44100,
              1356 / 44100,
              1188 / 44100,
              1116 / 44100
            ]),
            o = [225, 556, 441, 341]
          ;(i.default.Freeverb = function() {
            var t = i.default.defaults(
              arguments,
              ['roomSize', 'dampening'],
              i.default.Freeverb
            )
            i.default.StereoEffect.call(this, t),
              (this.roomSize = new i.default.Signal(
                t.roomSize,
                i.default.Type.NormalRange
              )),
              (this.dampening = new i.default.Signal(
                t.dampening,
                i.default.Type.Frequency
              )),
              (this._combFilters = []),
              (this._allpassFiltersL = []),
              (this._allpassFiltersR = [])
            for (var e = 0; e < o.length; e++) {
              var n = this.context.createBiquadFilter()
              ;(n.type = 'allpass'),
                (n.frequency.value = o[e]),
                this._allpassFiltersL.push(n)
            }
            for (var a = 0; a < o.length; a++) {
              var s = this.context.createBiquadFilter()
              ;(s.type = 'allpass'),
                (s.frequency.value = o[a]),
                this._allpassFiltersR.push(s)
            }
            for (var u = 0; u < r.length; u++) {
              var l = new i.default.LowpassCombFilter(r[u])
              u < r.length / 2
                ? this.effectSendL.chain(l, this._allpassFiltersL[0])
                : this.effectSendR.chain(l, this._allpassFiltersR[0]),
                this.roomSize.connect(l.resonance),
                this.dampening.connect(l.dampening),
                this._combFilters.push(l)
            }
            i.default.connectSeries.apply(i.default, this._allpassFiltersL),
              i.default.connectSeries.apply(i.default, this._allpassFiltersR),
              i.default.connect(
                this._allpassFiltersL[this._allpassFiltersL.length - 1],
                this.effectReturnL
              ),
              i.default.connect(
                this._allpassFiltersR[this._allpassFiltersR.length - 1],
                this.effectReturnR
              ),
              this._readOnly(['roomSize', 'dampening'])
          }),
            i.default.extend(i.default.Freeverb, i.default.StereoEffect),
            (i.default.Freeverb.defaults = {roomSize: 0.7, dampening: 3e3}),
            (i.default.Freeverb.prototype.dispose = function() {
              i.default.StereoEffect.prototype.dispose.call(this)
              for (var t = 0; t < this._allpassFiltersL.length; t++)
                this._allpassFiltersL[t].disconnect(),
                  (this._allpassFiltersL[t] = null)
              this._allpassFiltersL = null
              for (var e = 0; e < this._allpassFiltersR.length; e++)
                this._allpassFiltersR[e].disconnect(),
                  (this._allpassFiltersR[e] = null)
              this._allpassFiltersR = null
              for (var n = 0; n < this._combFilters.length; n++)
                this._combFilters[n].dispose(), (this._combFilters[n] = null)
              return (
                (this._combFilters = null),
                this._writable(['roomSize', 'dampening']),
                this.roomSize.dispose(),
                (this.roomSize = null),
                this.dampening.dispose(),
                (this.dampening = null),
                this
              )
            }),
            (e.default = i.default.Freeverb)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(33),
            n(2),
            n(18),
            (i.default.FeedbackDelay = function() {
              var t = i.default.defaults(
                arguments,
                ['delayTime', 'feedback'],
                i.default.FeedbackDelay
              )
              i.default.FeedbackEffect.call(this, t),
                (this._delayNode = new i.default.Delay(
                  t.delayTime,
                  t.maxDelay
                )),
                (this.delayTime = this._delayNode.delayTime),
                this.connectEffect(this._delayNode),
                this._readOnly(['delayTime'])
            }),
            i.default.extend(i.default.FeedbackDelay, i.default.FeedbackEffect),
            (i.default.FeedbackDelay.defaults = {delayTime: 0.25, maxDelay: 1}),
            (i.default.FeedbackDelay.prototype.dispose = function() {
              return (
                i.default.FeedbackEffect.prototype.dispose.call(this),
                this._delayNode.dispose(),
                (this._delayNode = null),
                this._writable(['delayTime']),
                (this.delayTime = null),
                this
              )
            }),
            (e.default = i.default.FeedbackDelay)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(7),
            (i.default.Distortion = function() {
              var t = i.default.defaults(
                arguments,
                ['distortion'],
                i.default.Distortion
              )
              i.default.Effect.call(this, t),
                (this._shaper = new i.default.WaveShaper(4096)),
                (this._distortion = t.distortion),
                this.connectEffect(this._shaper),
                (this.distortion = t.distortion),
                (this.oversample = t.oversample)
            }),
            i.default.extend(i.default.Distortion, i.default.Effect),
            (i.default.Distortion.defaults = {
              distortion: 0.4,
              oversample: 'none'
            }),
            Object.defineProperty(
              i.default.Distortion.prototype,
              'distortion',
              {
                get: function() {
                  return this._distortion
                },
                set: function(t) {
                  this._distortion = t
                  var e = 100 * t,
                    n = Math.PI / 180
                  this._shaper.setMap(function(t) {
                    return Math.abs(t) < 0.001
                      ? 0
                      : (3 + e) * t * 20 * n / (Math.PI + e * Math.abs(t))
                  })
                }
              }
            ),
            Object.defineProperty(
              i.default.Distortion.prototype,
              'oversample',
              {
                get: function() {
                  return this._shaper.oversample
                },
                set: function(t) {
                  this._shaper.oversample = t
                }
              }
            ),
            (i.default.Distortion.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._shaper.dispose(),
                (this._shaper = null),
                this
              )
            }),
            (e.default = i.default.Distortion)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(12),
            n(15),
            n(18),
            (i.default.Chorus = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'delayTime', 'depth'],
                i.default.Chorus
              )
              i.default.StereoEffect.call(this, t),
                (this._depth = t.depth),
                (this._delayTime = t.delayTime / 1e3),
                (this._lfoL = new i.default.LFO({
                  frequency: t.frequency,
                  min: 0,
                  max: 1
                })),
                (this._lfoR = new i.default.LFO({
                  frequency: t.frequency,
                  min: 0,
                  max: 1,
                  phase: 180
                })),
                (this._delayNodeL = new i.default.Delay()),
                (this._delayNodeR = new i.default.Delay()),
                (this.frequency = this._lfoL.frequency),
                this.effectSendL.chain(this._delayNodeL, this.effectReturnL),
                this.effectSendR.chain(this._delayNodeR, this.effectReturnR),
                this.effectSendL.connect(this.effectReturnL),
                this.effectSendR.connect(this.effectReturnR),
                this._lfoL.connect(this._delayNodeL.delayTime),
                this._lfoR.connect(this._delayNodeR.delayTime),
                this._lfoL.start(),
                this._lfoR.start(),
                this._lfoL.frequency.connect(this._lfoR.frequency),
                (this.depth = this._depth),
                (this.frequency.value = t.frequency),
                (this.type = t.type),
                this._readOnly(['frequency']),
                (this.spread = t.spread)
            }),
            i.default.extend(i.default.Chorus, i.default.StereoEffect),
            (i.default.Chorus.defaults = {
              frequency: 1.5,
              delayTime: 3.5,
              depth: 0.7,
              type: 'sine',
              spread: 180
            }),
            Object.defineProperty(i.default.Chorus.prototype, 'depth', {
              get: function() {
                return this._depth
              },
              set: function(t) {
                this._depth = t
                var e = this._delayTime * t
                ;(this._lfoL.min = Math.max(this._delayTime - e, 0)),
                  (this._lfoL.max = this._delayTime + e),
                  (this._lfoR.min = Math.max(this._delayTime - e, 0)),
                  (this._lfoR.max = this._delayTime + e)
              }
            }),
            Object.defineProperty(i.default.Chorus.prototype, 'delayTime', {
              get: function() {
                return 1e3 * this._delayTime
              },
              set: function(t) {
                ;(this._delayTime = t / 1e3), (this.depth = this._depth)
              }
            }),
            Object.defineProperty(i.default.Chorus.prototype, 'type', {
              get: function() {
                return this._lfoL.type
              },
              set: function(t) {
                ;(this._lfoL.type = t), (this._lfoR.type = t)
              }
            }),
            Object.defineProperty(i.default.Chorus.prototype, 'spread', {
              get: function() {
                return this._lfoR.phase - this._lfoL.phase
              },
              set: function(t) {
                ;(this._lfoL.phase = 90 - t / 2),
                  (this._lfoR.phase = t / 2 + 90)
              }
            }),
            (i.default.Chorus.prototype.dispose = function() {
              return (
                i.default.StereoEffect.prototype.dispose.call(this),
                this._lfoL.dispose(),
                (this._lfoL = null),
                this._lfoR.dispose(),
                (this._lfoR = null),
                this._delayNodeL.dispose(),
                (this._delayNodeL = null),
                this._delayNodeR.dispose(),
                (this._delayNodeR = null),
                this._writable('frequency'),
                (this.frequency = null),
                this
              )
            }),
            (e.default = i.default.Chorus)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(7),
            (i.default.Chebyshev = function() {
              var t = i.default.defaults(
                arguments,
                ['order'],
                i.default.Chebyshev
              )
              i.default.Effect.call(this, t),
                (this._shaper = new i.default.WaveShaper(4096)),
                (this._order = t.order),
                this.connectEffect(this._shaper),
                (this.order = t.order),
                (this.oversample = t.oversample)
            }),
            i.default.extend(i.default.Chebyshev, i.default.Effect),
            (i.default.Chebyshev.defaults = {order: 1, oversample: 'none'}),
            (i.default.Chebyshev.prototype._getCoefficient = function(t, e, n) {
              return n.hasOwnProperty(e)
                ? n[e]
                : ((n[e] =
                    0 === e
                      ? 0
                      : 1 === e
                        ? t
                        : 2 * t * this._getCoefficient(t, e - 1, n) -
                          this._getCoefficient(t, e - 2, n)),
                  n[e])
            }),
            Object.defineProperty(i.default.Chebyshev.prototype, 'order', {
              get: function() {
                return this._order
              },
              set: function(t) {
                this._order = t
                for (var e = new Array(4096), n = e.length, i = 0; i < n; ++i) {
                  var r = 2 * i / n - 1
                  e[i] = 0 === r ? 0 : this._getCoefficient(r, t, {})
                }
                this._shaper.curve = e
              }
            }),
            Object.defineProperty(i.default.Chebyshev.prototype, 'oversample', {
              get: function() {
                return this._shaper.oversample
              },
              set: function(t) {
                this._shaper.oversample = t
              }
            }),
            (i.default.Chebyshev.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._shaper.dispose(),
                (this._shaper = null),
                this
              )
            }),
            (e.default = i.default.Chebyshev)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(13),
            n(75),
            (i.default.BitCrusher = function() {
              var t = i.default.defaults(
                arguments,
                ['bits'],
                i.default.BitCrusher
              )
              i.default.Effect.call(this, t)
              var e = 1 / Math.pow(2, t.bits - 1)
              ;(this._subtract = new i.default.Subtract()),
                (this._modulo = new i.default.Modulo(e)),
                (this._bits = t.bits),
                this.effectSend.fan(this._subtract, this._modulo),
                this._modulo.connect(this._subtract, 0, 1),
                this._subtract.connect(this.effectReturn)
            }),
            i.default.extend(i.default.BitCrusher, i.default.Effect),
            (i.default.BitCrusher.defaults = {bits: 4}),
            Object.defineProperty(i.default.BitCrusher.prototype, 'bits', {
              get: function() {
                return this._bits
              },
              set: function(t) {
                this._bits = t
                var e = 1 / Math.pow(2, t - 1)
                this._modulo.value = e
              }
            }),
            (i.default.BitCrusher.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._subtract.dispose(),
                (this._subtract = null),
                this._modulo.dispose(),
                (this._modulo = null),
                this
              )
            }),
            (e.default = i.default.BitCrusher)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(58),
            n(42),
            n(8),
            n(9),
            (i.default.AutoWah = function() {
              var t = i.default.defaults(
                arguments,
                ['baseFrequency', 'octaves', 'sensitivity'],
                i.default.AutoWah
              )
              i.default.Effect.call(this, t),
                (this.follower = new i.default.Follower(t.follower)),
                (this._sweepRange = new i.default.ScaleExp(0, 1, 0.5)),
                (this._baseFrequency = t.baseFrequency),
                (this._octaves = t.octaves),
                (this._inputBoost = new i.default.Gain()),
                (this._bandpass = new i.default.Filter({
                  rolloff: -48,
                  frequency: 0,
                  Q: t.Q
                })),
                (this._peaking = new i.default.Filter(0, 'peaking')),
                (this._peaking.gain.value = t.gain),
                (this.gain = this._peaking.gain),
                (this.Q = this._bandpass.Q),
                this.effectSend.chain(
                  this._inputBoost,
                  this.follower,
                  this._sweepRange
                ),
                this._sweepRange.connect(this._bandpass.frequency),
                this._sweepRange.connect(this._peaking.frequency),
                this.effectSend.chain(
                  this._bandpass,
                  this._peaking,
                  this.effectReturn
                ),
                this._setSweepRange(),
                (this.sensitivity = t.sensitivity),
                this._readOnly(['gain', 'Q'])
            }),
            i.default.extend(i.default.AutoWah, i.default.Effect),
            (i.default.AutoWah.defaults = {
              baseFrequency: 100,
              octaves: 6,
              sensitivity: 0,
              Q: 2,
              gain: 2,
              follower: {attack: 0.3, release: 0.5}
            }),
            Object.defineProperty(i.default.AutoWah.prototype, 'octaves', {
              get: function() {
                return this._octaves
              },
              set: function(t) {
                ;(this._octaves = t), this._setSweepRange()
              }
            }),
            Object.defineProperty(
              i.default.AutoWah.prototype,
              'baseFrequency',
              {
                get: function() {
                  return this._baseFrequency
                },
                set: function(t) {
                  ;(this._baseFrequency = t), this._setSweepRange()
                }
              }
            ),
            Object.defineProperty(i.default.AutoWah.prototype, 'sensitivity', {
              get: function() {
                return i.default.gainToDb(1 / this._inputBoost.gain.value)
              },
              set: function(t) {
                this._inputBoost.gain.value = 1 / i.default.dbToGain(t)
              }
            }),
            (i.default.AutoWah.prototype._setSweepRange = function() {
              ;(this._sweepRange.min = this._baseFrequency),
                (this._sweepRange.max = Math.min(
                  this._baseFrequency * Math.pow(2, this._octaves),
                  this.context.sampleRate / 2
                ))
            }),
            (i.default.AutoWah.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this.follower.dispose(),
                (this.follower = null),
                this._sweepRange.dispose(),
                (this._sweepRange = null),
                this._bandpass.dispose(),
                (this._bandpass = null),
                this._peaking.dispose(),
                (this._peaking = null),
                this._inputBoost.dispose(),
                (this._inputBoost = null),
                this._writable(['gain', 'Q']),
                (this.gain = null),
                (this.Q = null),
                this
              )
            }),
            (e.default = i.default.AutoWah)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(12),
            n(48),
            (i.default.AutoPanner = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency'],
                i.default.AutoPanner
              )
              i.default.Effect.call(this, t),
                (this._lfo = new i.default.LFO({
                  frequency: t.frequency,
                  amplitude: t.depth,
                  min: -1,
                  max: 1
                })),
                (this.depth = this._lfo.amplitude),
                (this._panner = new i.default.Panner()),
                (this.frequency = this._lfo.frequency),
                this.connectEffect(this._panner),
                this._lfo.connect(this._panner.pan),
                (this.type = t.type),
                this._readOnly(['depth', 'frequency'])
            }),
            i.default.extend(i.default.AutoPanner, i.default.Effect),
            (i.default.AutoPanner.defaults = {
              frequency: 1,
              type: 'sine',
              depth: 1
            }),
            (i.default.AutoPanner.prototype.start = function(t) {
              return this._lfo.start(t), this
            }),
            (i.default.AutoPanner.prototype.stop = function(t) {
              return this._lfo.stop(t), this
            }),
            (i.default.AutoPanner.prototype.sync = function(t) {
              return this._lfo.sync(t), this
            }),
            (i.default.AutoPanner.prototype.unsync = function() {
              return this._lfo.unsync(), this
            }),
            Object.defineProperty(i.default.AutoPanner.prototype, 'type', {
              get: function() {
                return this._lfo.type
              },
              set: function(t) {
                this._lfo.type = t
              }
            }),
            (i.default.AutoPanner.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._lfo.dispose(),
                (this._lfo = null),
                this._panner.dispose(),
                (this._panner = null),
                this._writable(['depth', 'frequency']),
                (this.frequency = null),
                (this.depth = null),
                this
              )
            }),
            (e.default = i.default.AutoPanner)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(8),
            n(12),
            n(9),
            (i.default.AutoFilter = function() {
              var t = i.default.defaults(
                arguments,
                ['frequency', 'baseFrequency', 'octaves'],
                i.default.AutoFilter
              )
              i.default.Effect.call(this, t),
                (this._lfo = new i.default.LFO({
                  frequency: t.frequency,
                  amplitude: t.depth
                })),
                (this.depth = this._lfo.amplitude),
                (this.frequency = this._lfo.frequency),
                (this.filter = new i.default.Filter(t.filter)),
                (this._octaves = 0),
                this.connectEffect(this.filter),
                this._lfo.connect(this.filter.frequency),
                (this.type = t.type),
                this._readOnly(['frequency', 'depth']),
                (this.octaves = t.octaves),
                (this.baseFrequency = t.baseFrequency)
            }),
            i.default.extend(i.default.AutoFilter, i.default.Effect),
            (i.default.AutoFilter.defaults = {
              frequency: 1,
              type: 'sine',
              depth: 1,
              baseFrequency: 200,
              octaves: 2.6,
              filter: {type: 'lowpass', rolloff: -12, Q: 1}
            }),
            (i.default.AutoFilter.prototype.start = function(t) {
              return this._lfo.start(t), this
            }),
            (i.default.AutoFilter.prototype.stop = function(t) {
              return this._lfo.stop(t), this
            }),
            (i.default.AutoFilter.prototype.sync = function(t) {
              return this._lfo.sync(t), this
            }),
            (i.default.AutoFilter.prototype.unsync = function() {
              return this._lfo.unsync(), this
            }),
            Object.defineProperty(i.default.AutoFilter.prototype, 'type', {
              get: function() {
                return this._lfo.type
              },
              set: function(t) {
                this._lfo.type = t
              }
            }),
            Object.defineProperty(
              i.default.AutoFilter.prototype,
              'baseFrequency',
              {
                get: function() {
                  return this._lfo.min
                },
                set: function(t) {
                  ;(this._lfo.min = this.toFrequency(t)),
                    (this.octaves = this._octaves)
                }
              }
            ),
            Object.defineProperty(i.default.AutoFilter.prototype, 'octaves', {
              get: function() {
                return this._octaves
              },
              set: function(t) {
                ;(this._octaves = t),
                  (this._lfo.max = this.baseFrequency * Math.pow(2, t))
              }
            }),
            (i.default.AutoFilter.prototype.dispose = function() {
              return (
                i.default.Effect.prototype.dispose.call(this),
                this._lfo.dispose(),
                (this._lfo = null),
                this.filter.dispose(),
                (this.filter = null),
                this._writable(['frequency', 'depth']),
                (this.frequency = null),
                (this.depth = null),
                this
              )
            }),
            (e.default = i.default.AutoFilter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(23),
            n(10),
            n(19),
            n(2),
            n(22),
            n(28),
            (i.default.Listener = function() {
              i.default.call(this),
                (this._orientation = [0, 0, 0, 0, 0, 0]),
                (this._position = [0, 0, 0]),
                i.default.getContext(
                  function() {
                    this.set(r.defaults)
                  }.bind(this)
                )
            }),
            i.default.extend(i.default.Listener),
            (i.default.Listener.defaults = {
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              forwardX: 0,
              forwardY: 0,
              forwardZ: 1,
              upX: 0,
              upY: 1,
              upZ: 0
            }),
            (i.default.Listener.prototype.isListener = !0),
            (i.default.Listener.prototype._rampTimeConstant = 0.01),
            (i.default.Listener.prototype.setPosition = function(t, e, n) {
              if (this.context.rawContext.listener.positionX) {
                var i = this.now()
                this.context.rawContext.listener.positionX.setTargetAtTime(
                  t,
                  i,
                  this._rampTimeConstant
                ),
                  this.context.rawContext.listener.positionY.setTargetAtTime(
                    e,
                    i,
                    this._rampTimeConstant
                  ),
                  this.context.rawContext.listener.positionZ.setTargetAtTime(
                    n,
                    i,
                    this._rampTimeConstant
                  )
              } else this.context.rawContext.listener.setPosition(t, e, n)
              return (
                (this._position = Array.prototype.slice.call(arguments)), this
              )
            }),
            (i.default.Listener.prototype.setOrientation = function(
              t,
              e,
              n,
              i,
              r,
              o
            ) {
              if (this.context.rawContext.listener.forwardX) {
                var a = this.now()
                this.context.rawContext.listener.forwardX.setTargetAtTime(
                  t,
                  a,
                  this._rampTimeConstant
                ),
                  this.context.rawContext.listener.forwardY.setTargetAtTime(
                    e,
                    a,
                    this._rampTimeConstant
                  ),
                  this.context.rawContext.listener.forwardZ.setTargetAtTime(
                    n,
                    a,
                    this._rampTimeConstant
                  ),
                  this.context.rawContext.listener.upX.setTargetAtTime(
                    i,
                    a,
                    this._rampTimeConstant
                  ),
                  this.context.rawContext.listener.upY.setTargetAtTime(
                    r,
                    a,
                    this._rampTimeConstant
                  ),
                  this.context.rawContext.listener.upZ.setTargetAtTime(
                    o,
                    a,
                    this._rampTimeConstant
                  )
              } else
                this.context.rawContext.listener.setOrientation(
                  t,
                  e,
                  n,
                  i,
                  r,
                  o
                )
              return (
                (this._orientation = Array.prototype.slice.call(arguments)),
                this
              )
            }),
            Object.defineProperty(i.default.Listener.prototype, 'positionX', {
              set: function(t) {
                ;(this._position[0] = t),
                  this.setPosition.apply(this, this._position)
              },
              get: function() {
                return this._position[0]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'positionY', {
              set: function(t) {
                ;(this._position[1] = t),
                  this.setPosition.apply(this, this._position)
              },
              get: function() {
                return this._position[1]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'positionZ', {
              set: function(t) {
                ;(this._position[2] = t),
                  this.setPosition.apply(this, this._position)
              },
              get: function() {
                return this._position[2]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'forwardX', {
              set: function(t) {
                ;(this._orientation[0] = t),
                  this.setOrientation.apply(this, this._orientation)
              },
              get: function() {
                return this._orientation[0]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'forwardY', {
              set: function(t) {
                ;(this._orientation[1] = t),
                  this.setOrientation.apply(this, this._orientation)
              },
              get: function() {
                return this._orientation[1]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'forwardZ', {
              set: function(t) {
                ;(this._orientation[2] = t),
                  this.setOrientation.apply(this, this._orientation)
              },
              get: function() {
                return this._orientation[2]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'upX', {
              set: function(t) {
                ;(this._orientation[3] = t),
                  this.setOrientation.apply(this, this._orientation)
              },
              get: function() {
                return this._orientation[3]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'upY', {
              set: function(t) {
                ;(this._orientation[4] = t),
                  this.setOrientation.apply(this, this._orientation)
              },
              get: function() {
                return this._orientation[4]
              }
            }),
            Object.defineProperty(i.default.Listener.prototype, 'upZ', {
              set: function(t) {
                ;(this._orientation[5] = t),
                  this.setOrientation.apply(this, this._orientation)
              },
              get: function() {
                return this._orientation[5]
              }
            }),
            (i.default.Listener.prototype.dispose = function() {
              return (this._orientation = null), (this._position = null), this
            })
          var r = i.default.Listener
          ;(i.default.Listener = new r()),
            i.default.Context.on('init', function(t) {
              t.listener && t.listener.isListener
                ? (i.default.Listener = t.listener)
                : (i.default.Listener = new r())
            }),
            (e.default = i.default.Listener)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(24),
            (i.default.Draw = function() {
              i.default.call(this),
                (this._events = new i.default.Timeline()),
                (this.expiration = 0.25),
                (this.anticipation = 0.008),
                (this._boundDrawLoop = this._drawLoop.bind(this))
            }),
            i.default.extend(i.default.Draw),
            (i.default.Draw.prototype.schedule = function(t, e) {
              return (
                this._events.add({callback: t, time: this.toSeconds(e)}),
                1 === this._events.length &&
                  requestAnimationFrame(this._boundDrawLoop),
                this
              )
            }),
            (i.default.Draw.prototype.cancel = function(t) {
              return this._events.cancel(this.toSeconds(t)), this
            }),
            (i.default.Draw.prototype._drawLoop = function() {
              for (
                var t = i.default.context.currentTime;
                this._events.length &&
                this._events.peek().time - this.anticipation <= t;

              ) {
                var e = this._events.shift()
                t - e.time <= this.expiration && e.callback()
              }
              this._events.length > 0 &&
                requestAnimationFrame(this._boundDrawLoop)
            }),
            (i.default.Draw = new i.default.Draw()),
            (e.default = i.default.Draw)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0),
            r = (n(3), {})
          ;(i.default.prototype.send = function(t, e) {
            r.hasOwnProperty(t) || (r[t] = this.context.createGain()),
              (e = i.default.defaultArg(e, 0))
            var n = new i.default.Gain(e, i.default.Type.Decibels)
            return this.connect(n), n.connect(r[t]), n
          }),
            (i.default.prototype.receive = function(t, e) {
              return (
                r.hasOwnProperty(t) || (r[t] = this.context.createGain()),
                i.default.connect(r[t], this, 0, e),
                this
              )
            }),
            i.default.Context.on('init', function(t) {
              t.buses ? (r = t.buses) : ((r = {}), (t.buses = r))
            }),
            (e.default = i.default)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(4),
            (i.default.CtrlRandom = function() {
              var t = i.default.defaults(
                arguments,
                ['min', 'max'],
                i.default.CtrlRandom
              )
              i.default.call(this),
                (this.min = t.min),
                (this.max = t.max),
                (this.integer = t.integer)
            }),
            i.default.extend(i.default.CtrlRandom),
            (i.default.CtrlRandom.defaults = {min: 0, max: 1, integer: !1}),
            Object.defineProperty(i.default.CtrlRandom.prototype, 'value', {
              get: function() {
                var t = this.toSeconds(this.min),
                  e = this.toSeconds(this.max),
                  n = Math.random(),
                  i = n * t + (1 - n) * e
                return this.integer && (i = Math.floor(i)), i
              }
            }),
            (e.default = i.default.CtrlRandom)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          ;(i.default.CtrlMarkov = function(t, e) {
            i.default.call(this),
              (this.values = i.default.defaultArg(t, {})),
              (this.value = i.default.defaultArg(
                e,
                Object.keys(this.values)[0]
              ))
          }),
            i.default.extend(i.default.CtrlMarkov),
            (i.default.CtrlMarkov.prototype.next = function() {
              if (this.values.hasOwnProperty(this.value)) {
                var t = this.values[this.value]
                if (i.default.isArray(t))
                  for (
                    var e = this._getProbDistribution(t),
                      n = Math.random(),
                      r = 0,
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var a = e[o]
                    if (n > r && n < r + a) {
                      var s = t[o]
                      i.default.isObject(s)
                        ? (this.value = s.value)
                        : (this.value = s)
                    }
                    r += a
                  }
                else this.value = t
              }
              return this.value
            }),
            (i.default.CtrlMarkov.prototype._getProbDistribution = function(t) {
              for (var e = [], n = 0, r = !1, o = 0; o < t.length; o++) {
                var a = t[o]
                i.default.isObject(a)
                  ? ((r = !0), (e[o] = a.probability))
                  : (e[o] = 1 / t.length),
                  (n += e[o])
              }
              if (r) for (var s = 0; s < e.length; s++) e[s] = e[s] / n
              return e
            }),
            (i.default.CtrlMarkov.prototype.dispose = function() {
              this.values = null
            }),
            (e.default = i.default.CtrlMarkov)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(4),
            (i.default.CtrlInterpolate = function() {
              var t = i.default.defaults(
                arguments,
                ['values', 'index'],
                i.default.CtrlInterpolate
              )
              i.default.call(this),
                (this.values = t.values),
                (this.index = t.index)
            }),
            i.default.extend(i.default.CtrlInterpolate),
            (i.default.CtrlInterpolate.defaults = {index: 0, values: []}),
            Object.defineProperty(
              i.default.CtrlInterpolate.prototype,
              'value',
              {
                get: function() {
                  var t = this.index
                  t = Math.min(t, this.values.length - 1)
                  var e = Math.floor(t),
                    n = this.values[e],
                    i = this.values[Math.ceil(t)]
                  return this._interpolate(t - e, n, i)
                }
              }
            ),
            (i.default.CtrlInterpolate.prototype._interpolate = function(
              t,
              e,
              n
            ) {
              if (i.default.isArray(e)) {
                for (var r = [], o = 0; o < e.length; o++)
                  r[o] = this._interpolate(t, e[o], n[o])
                return r
              }
              if (i.default.isObject(e)) {
                var a = {}
                for (var s in e) a[s] = this._interpolate(t, e[s], n[s])
                return a
              }
              return (
                (1 - t) * (e = this._toNumber(e)) + t * (n = this._toNumber(n))
              )
            }),
            (i.default.CtrlInterpolate.prototype._toNumber = function(t) {
              return i.default.isNumber(t) ? t : this.toSeconds(t)
            }),
            (i.default.CtrlInterpolate.prototype.dispose = function() {
              this.values = null
            }),
            (e.default = i.default.CtrlInterpolate)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(36),
            n(1),
            (i.default.Waveform = function() {
              var t = i.default.defaults(
                arguments,
                ['size'],
                i.default.Waveform
              )
              ;(t.type = i.default.Analyser.Type.Waveform),
                i.default.AudioNode.call(this),
                (this._analyser = this.input = this.output = new i.default.Analyser(
                  t
                ))
            }),
            i.default.extend(i.default.Waveform, i.default.AudioNode),
            (i.default.Waveform.defaults = {size: 1024}),
            (i.default.Waveform.prototype.getValue = function() {
              return this._analyser.getValue()
            }),
            Object.defineProperty(i.default.Waveform.prototype, 'size', {
              get: function() {
                return this._analyser.size
              },
              set: function(t) {
                this._analyser.size = t
              }
            }),
            (i.default.Waveform.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                (this._analyser = null)
            }),
            (e.default = i.default.Waveform)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(23),
            n(10),
            n(19),
            n(2),
            n(22),
            n(28),
            n(1),
            (i.default.Panner3D = function() {
              var t = i.default.defaults(
                arguments,
                ['positionX', 'positionY', 'positionZ'],
                i.default.Panner3D
              )
              i.default.AudioNode.call(this),
                (this._panner = this.input = this.output = this.context.createPanner()),
                (this._panner.panningModel = t.panningModel),
                (this._panner.maxDistance = t.maxDistance),
                (this._panner.distanceModel = t.distanceModel),
                (this._panner.coneOuterGain = t.coneOuterGain),
                (this._panner.coneOuterAngle = t.coneOuterAngle),
                (this._panner.coneInnerAngle = t.coneInnerAngle),
                (this._panner.refDistance = t.refDistance),
                (this._panner.rolloffFactor = t.rolloffFactor),
                (this._orientation = [
                  t.orientationX,
                  t.orientationY,
                  t.orientationZ
                ]),
                (this._position = [t.positionX, t.positionY, t.positionZ]),
                (this.orientationX = t.orientationX),
                (this.orientationY = t.orientationY),
                (this.orientationZ = t.orientationZ),
                (this.positionX = t.positionX),
                (this.positionY = t.positionY),
                (this.positionZ = t.positionZ)
            }),
            i.default.extend(i.default.Panner3D, i.default.AudioNode),
            (i.default.Panner3D.defaults = {
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              orientationX: 0,
              orientationY: 0,
              orientationZ: 0,
              panningModel: 'equalpower',
              maxDistance: 1e4,
              distanceModel: 'inverse',
              coneOuterGain: 0,
              coneOuterAngle: 360,
              coneInnerAngle: 360,
              refDistance: 1,
              rolloffFactor: 1
            }),
            (i.default.Panner3D.prototype._rampTimeConstant = 0.01),
            (i.default.Panner3D.prototype.setPosition = function(t, e, n) {
              if (this._panner.positionX) {
                var i = this.now()
                this._panner.positionX.setTargetAtTime(
                  t,
                  i,
                  this._rampTimeConstant
                ),
                  this._panner.positionY.setTargetAtTime(
                    e,
                    i,
                    this._rampTimeConstant
                  ),
                  this._panner.positionZ.setTargetAtTime(
                    n,
                    i,
                    this._rampTimeConstant
                  )
              } else this._panner.setPosition(t, e, n)
              return (
                (this._position = Array.prototype.slice.call(arguments)), this
              )
            }),
            (i.default.Panner3D.prototype.setOrientation = function(t, e, n) {
              if (this._panner.orientationX) {
                var i = this.now()
                this._panner.orientationX.setTargetAtTime(
                  t,
                  i,
                  this._rampTimeConstant
                ),
                  this._panner.orientationY.setTargetAtTime(
                    e,
                    i,
                    this._rampTimeConstant
                  ),
                  this._panner.orientationZ.setTargetAtTime(
                    n,
                    i,
                    this._rampTimeConstant
                  )
              } else this._panner.setOrientation(t, e, n)
              return (
                (this._orientation = Array.prototype.slice.call(arguments)),
                this
              )
            }),
            Object.defineProperty(i.default.Panner3D.prototype, 'positionX', {
              set: function(t) {
                ;(this._position[0] = t),
                  this.setPosition.apply(this, this._position)
              },
              get: function() {
                return this._position[0]
              }
            }),
            Object.defineProperty(i.default.Panner3D.prototype, 'positionY', {
              set: function(t) {
                ;(this._position[1] = t),
                  this.setPosition.apply(this, this._position)
              },
              get: function() {
                return this._position[1]
              }
            }),
            Object.defineProperty(i.default.Panner3D.prototype, 'positionZ', {
              set: function(t) {
                ;(this._position[2] = t),
                  this.setPosition.apply(this, this._position)
              },
              get: function() {
                return this._position[2]
              }
            }),
            Object.defineProperty(
              i.default.Panner3D.prototype,
              'orientationX',
              {
                set: function(t) {
                  ;(this._orientation[0] = t),
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                  return this._orientation[0]
                }
              }
            ),
            Object.defineProperty(
              i.default.Panner3D.prototype,
              'orientationY',
              {
                set: function(t) {
                  ;(this._orientation[1] = t),
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                  return this._orientation[1]
                }
              }
            ),
            Object.defineProperty(
              i.default.Panner3D.prototype,
              'orientationZ',
              {
                set: function(t) {
                  ;(this._orientation[2] = t),
                    this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                  return this._orientation[2]
                }
              }
            ),
            (i.default.Panner3D._aliasProperty = function(t) {
              Object.defineProperty(i.default.Panner3D.prototype, t, {
                set: function(e) {
                  this._panner[t] = e
                },
                get: function() {
                  return this._panner[t]
                }
              })
            }),
            i.default.Panner3D._aliasProperty('panningModel'),
            i.default.Panner3D._aliasProperty('refDistance'),
            i.default.Panner3D._aliasProperty('rolloffFactor'),
            i.default.Panner3D._aliasProperty('distanceModel'),
            i.default.Panner3D._aliasProperty('coneInnerAngle'),
            i.default.Panner3D._aliasProperty('coneOuterAngle'),
            i.default.Panner3D._aliasProperty('coneOuterGain'),
            i.default.Panner3D._aliasProperty('maxDistance'),
            (i.default.Panner3D.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._panner.disconnect(),
                (this._panner = null),
                (this._orientation = null),
                (this._position = null),
                this
              )
            }),
            (e.default = i.default.Panner3D)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(60),
            n(43),
            n(1),
            (i.default.MultibandCompressor = function(t) {
              i.default.AudioNode.call(this),
                (t = i.default.defaultArg(
                  arguments,
                  i.default.MultibandCompressor.defaults
                )),
                (this._splitter = this.input = new i.default.MultibandSplit({
                  lowFrequency: t.lowFrequency,
                  highFrequency: t.highFrequency
                })),
                (this.lowFrequency = this._splitter.lowFrequency),
                (this.highFrequency = this._splitter.highFrequency),
                (this.output = new i.default.Gain()),
                (this.low = new i.default.Compressor(t.low)),
                (this.mid = new i.default.Compressor(t.mid)),
                (this.high = new i.default.Compressor(t.high)),
                this._splitter.low.chain(this.low, this.output),
                this._splitter.mid.chain(this.mid, this.output),
                this._splitter.high.chain(this.high, this.output),
                this._readOnly([
                  'high',
                  'mid',
                  'low',
                  'highFrequency',
                  'lowFrequency'
                ])
            }),
            i.default.extend(
              i.default.MultibandCompressor,
              i.default.AudioNode
            ),
            (i.default.MultibandCompressor.defaults = {
              low: i.default.Compressor.defaults,
              mid: i.default.Compressor.defaults,
              high: i.default.Compressor.defaults,
              lowFrequency: 250,
              highFrequency: 2e3
            }),
            (i.default.MultibandCompressor.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._splitter.dispose(),
                this._writable([
                  'high',
                  'mid',
                  'low',
                  'highFrequency',
                  'lowFrequency'
                ]),
                this.low.dispose(),
                this.mid.dispose(),
                this.high.dispose(),
                (this._splitter = null),
                (this.low = null),
                (this.mid = null),
                (this.high = null),
                (this.lowFrequency = null),
                (this.highFrequency = null),
                this
              )
            }),
            (e.default = i.default.MultibandCompressor)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(10),
            n(1),
            (i.default.Mono = function() {
              i.default.AudioNode.call(this),
                this.createInsOuts(1, 0),
                (this._merge = this.output = new i.default.Merge()),
                i.default.connect(this.input, this._merge, 0, 0),
                i.default.connect(this.input, this._merge, 0, 1)
            }),
            i.default.extend(i.default.Mono, i.default.AudioNode),
            (i.default.Mono.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._merge.dispose(),
                (this._merge = null),
                this
              )
            }),
            (e.default = i.default.Mono)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(53),
            n(52),
            n(43),
            n(1),
            (i.default.MidSideCompressor = function(t) {
              i.default.AudioNode.call(this),
                (t = i.default.defaultArg(
                  t,
                  i.default.MidSideCompressor.defaults
                )),
                (this._midSideSplit = this.input = new i.default.MidSideSplit()),
                (this._midSideMerge = this.output = new i.default.MidSideMerge()),
                (this.mid = new i.default.Compressor(t.mid)),
                (this.side = new i.default.Compressor(t.side)),
                this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
                this._midSideSplit.side.chain(
                  this.side,
                  this._midSideMerge.side
                ),
                this._readOnly(['mid', 'side'])
            }),
            i.default.extend(i.default.MidSideCompressor, i.default.AudioNode),
            (i.default.MidSideCompressor.defaults = {
              mid: {
                ratio: 3,
                threshold: -24,
                release: 0.03,
                attack: 0.02,
                knee: 16
              },
              side: {
                ratio: 6,
                threshold: -30,
                release: 0.25,
                attack: 0.03,
                knee: 10
              }
            }),
            (i.default.MidSideCompressor.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable(['mid', 'side']),
                this.mid.dispose(),
                (this.mid = null),
                this.side.dispose(),
                (this.side = null),
                this._midSideSplit.dispose(),
                (this._midSideSplit = null),
                this._midSideMerge.dispose(),
                (this._midSideMerge = null),
                this
              )
            }),
            (e.default = i.default.MidSideCompressor)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(36),
            n(1),
            (i.default.Meter = function() {
              var t = i.default.defaults(
                arguments,
                ['smoothing'],
                i.default.Meter
              )
              i.default.AudioNode.call(this),
                (this.smoothing = t.smoothing),
                (this._rms = 0),
                (this.input = this.output = this._analyser = new i.default.Analyser(
                  'waveform',
                  256
                ))
            }),
            i.default.extend(i.default.Meter, i.default.AudioNode),
            (i.default.Meter.defaults = {smoothing: 0.8}),
            (i.default.Meter.prototype.getLevel = function() {
              for (
                var t = this._analyser.getValue(), e = 0, n = 0;
                n < t.length;
                n++
              ) {
                var r = t[n]
                e += r * r
              }
              var o = Math.sqrt(e / t.length)
              return (
                (this._rms = Math.max(o, this._rms * this.smoothing)),
                i.default.gainToDb(this._rms)
              )
            }),
            (i.default.Meter.prototype.getValue = function() {
              return this._analyser.getValue()[0]
            }),
            (i.default.Meter.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                (this._analyser = null),
                this
              )
            }),
            (e.default = i.default.Meter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(43),
            n(1),
            (i.default.Limiter = function() {
              var t = i.default.defaults(
                arguments,
                ['threshold'],
                i.default.Limiter
              )
              i.default.AudioNode.call(this),
                (this._compressor = this.input = this.output = new i.default.Compressor(
                  {attack: 0.001, decay: 0.001, threshold: t.threshold}
                )),
                (this.threshold = this._compressor.threshold),
                this._readOnly('threshold')
            }),
            i.default.extend(i.default.Limiter, i.default.AudioNode),
            (i.default.Limiter.defaults = {threshold: -12}),
            (i.default.Limiter.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._compressor.dispose(),
                (this._compressor = null),
                this._writable('threshold'),
                (this.threshold = null),
                this
              )
            }),
            (e.default = i.default.Limiter)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(58),
            n(85),
            n(1),
            (i.default.Gate = function() {
              var t = i.default.defaults(
                arguments,
                ['threshold', 'smoothing'],
                i.default.Gate
              )
              i.default.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._follower = new i.default.Follower(t.smoothing)),
                (this._gt = new i.default.GreaterThan(
                  i.default.dbToGain(t.threshold)
                )),
                i.default.connect(this.input, this.output),
                i.default.connectSeries(
                  this.input,
                  this._follower,
                  this._gt,
                  this.output.gain
                )
            }),
            i.default.extend(i.default.Gate, i.default.AudioNode),
            (i.default.Gate.defaults = {smoothing: 0.1, threshold: -40}),
            Object.defineProperty(i.default.Gate.prototype, 'threshold', {
              get: function() {
                return i.default.gainToDb(this._gt.value)
              },
              set: function(t) {
                this._gt.value = i.default.dbToGain(t)
              }
            }),
            Object.defineProperty(i.default.Gate.prototype, 'smoothing', {
              get: function() {
                return this._follower.smoothing
              },
              set: function(t) {
                this._follower.smoothing = t
              }
            }),
            (i.default.Gate.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._follower.dispose(),
                this._gt.dispose(),
                (this._follower = null),
                (this._gt = null),
                this
              )
            }),
            (e.default = i.default.Gate)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(36),
            n(1),
            (i.default.FFT = function() {
              var t = i.default.defaults(arguments, ['size'], i.default.FFT)
              ;(t.type = i.default.Analyser.Type.FFT),
                i.default.AudioNode.call(this),
                (this._analyser = this.input = this.output = new i.default.Analyser(
                  t
                ))
            }),
            i.default.extend(i.default.FFT, i.default.AudioNode),
            (i.default.FFT.defaults = {size: 1024}),
            (i.default.FFT.prototype.getValue = function() {
              return this._analyser.getValue()
            }),
            Object.defineProperty(i.default.FFT.prototype, 'size', {
              get: function() {
                return this._analyser.size
              },
              set: function(t) {
                this._analyser.size = t
              }
            }),
            (i.default.FFT.prototype.dispose = function() {
              i.default.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                (this._analyser = null)
            }),
            (e.default = i.default.FFT)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(60),
            n(3),
            n(1),
            (i.default.EQ3 = function() {
              var t = i.default.defaults(
                arguments,
                ['low', 'mid', 'high'],
                i.default.EQ3
              )
              i.default.AudioNode.call(this),
                (this.output = new i.default.Gain()),
                (this._multibandSplit = this.input = new i.default.MultibandSplit(
                  {lowFrequency: t.lowFrequency, highFrequency: t.highFrequency}
                )),
                (this._lowGain = new i.default.Gain(
                  t.low,
                  i.default.Type.Decibels
                )),
                (this._midGain = new i.default.Gain(
                  t.mid,
                  i.default.Type.Decibels
                )),
                (this._highGain = new i.default.Gain(
                  t.high,
                  i.default.Type.Decibels
                )),
                (this.low = this._lowGain.gain),
                (this.mid = this._midGain.gain),
                (this.high = this._highGain.gain),
                (this.Q = this._multibandSplit.Q),
                (this.lowFrequency = this._multibandSplit.lowFrequency),
                (this.highFrequency = this._multibandSplit.highFrequency),
                this._multibandSplit.low.chain(this._lowGain, this.output),
                this._multibandSplit.mid.chain(this._midGain, this.output),
                this._multibandSplit.high.chain(this._highGain, this.output),
                this._readOnly([
                  'low',
                  'mid',
                  'high',
                  'lowFrequency',
                  'highFrequency'
                ])
            }),
            i.default.extend(i.default.EQ3, i.default.AudioNode),
            (i.default.EQ3.defaults = {
              low: 0,
              mid: 0,
              high: 0,
              lowFrequency: 400,
              highFrequency: 2500
            }),
            (i.default.EQ3.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable([
                  'low',
                  'mid',
                  'high',
                  'lowFrequency',
                  'highFrequency'
                ]),
                this._multibandSplit.dispose(),
                (this._multibandSplit = null),
                (this.lowFrequency = null),
                (this.highFrequency = null),
                this._lowGain.dispose(),
                (this._lowGain = null),
                this._midGain.dispose(),
                (this._midGain = null),
                this._highGain.dispose(),
                (this._highGain = null),
                (this.low = null),
                (this.mid = null),
                (this.high = null),
                (this.Q = null),
                this
              )
            }),
            (e.default = i.default.EQ3)
        },
        function(t, e, n) {
          'use strict'
          n.r(e)
          var i = n(0)
          n(91),
            n(88),
            n(1),
            (i.default.Channel = function() {
              var t = i.default.defaults(
                arguments,
                ['volume', 'pan'],
                i.default.PanVol
              )
              i.default.AudioNode.call(this, t),
                (this._solo = this.input = new i.default.Solo(t.solo)),
                (this._panVol = this.output = new i.default.PanVol({
                  pan: t.pan,
                  volume: t.volume,
                  mute: t.mute
                })),
                (this.pan = this._panVol.pan),
                (this.volume = this._panVol.volume),
                this._solo.connect(this._panVol),
                this._readOnly(['pan', 'volume'])
            }),
            i.default.extend(i.default.Channel, i.default.AudioNode),
            (i.default.Channel.defaults = {
              pan: 0,
              volume: 0,
              mute: !1,
              solo: !1
            }),
            Object.defineProperty(i.default.Channel.prototype, 'solo', {
              get: function() {
                return this._solo.solo
              },
              set: function(t) {
                this._solo.solo = t
              }
            }),
            Object.defineProperty(i.default.Channel.prototype, 'muted', {
              get: function() {
                return this._solo.muted || this.mute
              }
            }),
            Object.defineProperty(i.default.Channel.prototype, 'mute', {
              get: function() {
                return this._panVol.mute
              },
              set: function(t) {
                this._panVol.mute = t
              }
            }),
            (i.default.Channel.prototype.dispose = function() {
              return (
                i.default.AudioNode.prototype.dispose.call(this),
                this._writable(['pan', 'volume']),
                this._panVol.dispose(),
                (this._panVol = null),
                (this.pan = null),
                (this.volume = null),
                this._solo.dispose(),
                (this._solo = null),
                this
              )
            }),
            (e.default = i.default.Channel)
        },
        function(t, e) {
          var n
          n = (function() {
            return this
          })()
          try {
            n = n || Function('return this')() || (0, eval)('this')
          } catch (t) {
            'object' == typeof window && (n = window)
          }
          t.exports = n
        },
        function(t, e, n) {
          n(31),
            n(36),
            n(146),
            n(43),
            n(23),
            n(47),
            n(145),
            n(59),
            n(144),
            n(9),
            n(58),
            n(41),
            n(143),
            n(12),
            n(142),
            n(54),
            n(10),
            n(141),
            n(140),
            n(52),
            n(53),
            n(139),
            n(138),
            n(60),
            n(48),
            n(137),
            n(91),
            n(86),
            n(88),
            n(19),
            n(27),
            n(136),
            n(135),
            n(134),
            n(79),
            n(133),
            n(1),
            n(11),
            n(78),
            n(132),
            n(83),
            n(20),
            n(18),
            n(131),
            n(35),
            n(3),
            n(81),
            n(130),
            n(40),
            n(77),
            n(76),
            n(14),
            n(24),
            n(34),
            n(16),
            n(56),
            n(80),
            n(129),
            n(128),
            n(127),
            n(126),
            n(125),
            n(124),
            n(74),
            n(123),
            n(8),
            n(122),
            n(33),
            n(121),
            n(120),
            n(73),
            n(119),
            n(118),
            n(117),
            n(116),
            n(15),
            n(115),
            n(114),
            n(72),
            n(113),
            n(112),
            n(51),
            n(71),
            n(70),
            n(111),
            n(110),
            n(109),
            n(108),
            n(107),
            n(21),
            n(106),
            n(105),
            n(25),
            n(66),
            n(104),
            n(103),
            n(102),
            n(101),
            n(38),
            n(87),
            n(29),
            n(22),
            n(89),
            n(100),
            n(85),
            n(84),
            n(75),
            n(5),
            n(90),
            n(99),
            n(61),
            n(26),
            n(42),
            n(2),
            n(30),
            n(13),
            n(82),
            n(98),
            n(7),
            n(28),
            n(68),
            n(32),
            n(67),
            n(49),
            n(97),
            n(39),
            n(37),
            n(17),
            n(64),
            n(65),
            n(96),
            n(50),
            n(69),
            n(6),
            n(57),
            n(95),
            n(46),
            n(94),
            n(55),
            n(63),
            n(62),
            n(45),
            n(4),
            (t.exports = n(0).default)
        }
      ]))
  },
  function(t, e, n) {
    'use strict'
    var i = n(3)
    t.exports = function(t, e) {
      return (
        !!t &&
        i(function() {
          e ? t.call(null, function() {}, 1) : t.call(null)
        })
      )
    }
  },
  function(t, e, n) {
    var i = n(20)
    t.exports = function(t, e, n) {
      if ((i(t), void 0 === e)) return t
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n)
          }
        case 2:
          return function(n, i) {
            return t.call(e, n, i)
          }
        case 3:
          return function(n, i, r) {
            return t.call(e, n, i, r)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    }
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!')
      return t
    }
  },
  function(t, e) {
    var n = Math.ceil,
      i = Math.floor
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t)
    }
  },
  function(t, e, n) {
    var i = n(47),
      r = n(30),
      o = n(16),
      a = n(28),
      s = n(14),
      u = n(90),
      l = Object.getOwnPropertyDescriptor
    e.f = n(9)
      ? l
      : function(t, e) {
          if (((t = o(t)), (e = a(e, !0)), u))
            try {
              return l(t, e)
            } catch (t) {}
          if (s(t, e)) return r(!i.f.call(t, e), t[e])
        }
  },
  function(t, e, n) {
    var i = n(0),
      r = n(8),
      o = n(3)
    t.exports = function(t, e) {
      var n = (r.Object || {})[t] || Object[t],
        a = {}
      ;(a[t] = e(n)),
        i(
          i.S +
            i.F *
              o(function() {
                n(1)
              }),
          'Object',
          a
        )
    }
  },
  function(t, e, n) {
    var i = n(19),
      r = n(46),
      o = n(11),
      a = n(7),
      s = n(106)
    t.exports = function(t, e) {
      var n = 1 == t,
        u = 2 == t,
        l = 3 == t,
        f = 4 == t,
        c = 6 == t,
        d = 5 == t || c,
        h = e || s
      return function(e, s, p) {
        for (
          var y,
            m,
            _ = o(e),
            v = r(_),
            g = i(s, p, 3),
            b = a(v.length),
            S = 0,
            T = n ? h(e, b) : u ? h(e, 0) : void 0;
          b > S;
          S++
        )
          if ((d || S in v) && ((m = g((y = v[S]), S, _)), t))
            if (n) T[S] = m
            else if (m)
              switch (t) {
                case 3:
                  return !0
                case 5:
                  return y
                case 6:
                  return S
                case 2:
                  T.push(y)
              }
            else if (f) return !1
        return c ? -1 : l || f ? f : T
      }
    }
  },
  function(t, e) {
    var n = {}.toString
    t.exports = function(t) {
      return n.call(t).slice(8, -1)
    }
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on  " + t)
      return t
    }
  },
  function(t, e, n) {
    'use strict'
    if (n(9)) {
      var i = n(32),
        r = n(2),
        o = n(3),
        a = n(0),
        s = n(61),
        u = n(86),
        l = n(19),
        f = n(44),
        c = n(30),
        d = n(15),
        h = n(45),
        p = n(21),
        y = n(7),
        m = n(117),
        _ = n(34),
        v = n(28),
        g = n(14),
        b = n(48),
        S = n(5),
        T = n(11),
        w = n(78),
        x = n(35),
        k = n(37),
        P = n(36).f,
        O = n(80),
        A = n(31),
        E = n(6),
        C = n(24),
        F = n(51),
        M = n(49),
        R = n(82),
        N = n(42),
        q = n(54),
        j = n(43),
        I = n(81),
        L = n(108),
        D = n(10),
        B = n(22),
        U = D.f,
        V = B.f,
        z = r.RangeError,
        W = r.TypeError,
        G = r.Uint8Array,
        Q = Array.prototype,
        H = u.ArrayBuffer,
        $ = u.DataView,
        X = C(0),
        Y = C(2),
        K = C(3),
        Z = C(4),
        J = C(5),
        tt = C(6),
        et = F(!0),
        nt = F(!1),
        it = R.values,
        rt = R.keys,
        ot = R.entries,
        at = Q.lastIndexOf,
        st = Q.reduce,
        ut = Q.reduceRight,
        lt = Q.join,
        ft = Q.sort,
        ct = Q.slice,
        dt = Q.toString,
        ht = Q.toLocaleString,
        pt = E('iterator'),
        yt = E('toStringTag'),
        mt = A('typed_constructor'),
        _t = A('def_constructor'),
        vt = s.CONSTR,
        gt = s.TYPED,
        bt = s.VIEW,
        St = C(1, function(t, e) {
          return Pt(M(t, t[_t]), e)
        }),
        Tt = o(function() {
          return 1 === new G(new Uint16Array([1]).buffer)[0]
        }),
        wt =
          !!G &&
          !!G.prototype.set &&
          o(function() {
            new G(1).set({})
          }),
        xt = function(t, e) {
          var n = p(t)
          if (n < 0 || n % e) throw z('Wrong offset!')
          return n
        },
        kt = function(t) {
          if (S(t) && gt in t) return t
          throw W(t + ' is not a typed array!')
        },
        Pt = function(t, e) {
          if (!(S(t) && mt in t))
            throw W('It is not a typed array constructor!')
          return new t(e)
        },
        Ot = function(t, e) {
          return At(M(t, t[_t]), e)
        },
        At = function(t, e) {
          for (var n = 0, i = e.length, r = Pt(t, i); i > n; ) r[n] = e[n++]
          return r
        },
        Et = function(t, e, n) {
          U(t, e, {
            get: function() {
              return this._d[n]
            }
          })
        },
        Ct = function(t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s = T(t),
            u = arguments.length,
            f = u > 1 ? arguments[1] : void 0,
            c = void 0 !== f,
            d = O(s)
          if (null != d && !w(d)) {
            for (a = d.call(s), i = [], e = 0; !(o = a.next()).done; e++)
              i.push(o.value)
            s = i
          }
          for (
            c && u > 2 && (f = l(f, arguments[2], 2)),
              e = 0,
              n = y(s.length),
              r = Pt(this, n);
            n > e;
            e++
          )
            r[e] = c ? f(s[e], e) : s[e]
          return r
        },
        Ft = function() {
          for (var t = 0, e = arguments.length, n = Pt(this, e); e > t; )
            n[t] = arguments[t++]
          return n
        },
        Mt =
          !!G &&
          o(function() {
            ht.call(new G(1))
          }),
        Rt = function() {
          return ht.apply(Mt ? ct.call(kt(this)) : kt(this), arguments)
        },
        Nt = {
          copyWithin: function(t, e) {
            return L.call(
              kt(this),
              t,
              e,
              arguments.length > 2 ? arguments[2] : void 0
            )
          },
          every: function(t) {
            return Z(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          fill: function(t) {
            return I.apply(kt(this), arguments)
          },
          filter: function(t) {
            return Ot(
              this,
              Y(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            )
          },
          find: function(t) {
            return J(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          findIndex: function(t) {
            return tt(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          forEach: function(t) {
            X(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          indexOf: function(t) {
            return nt(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          includes: function(t) {
            return et(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          join: function(t) {
            return lt.apply(kt(this), arguments)
          },
          lastIndexOf: function(t) {
            return at.apply(kt(this), arguments)
          },
          map: function(t) {
            return St(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          reduce: function(t) {
            return st.apply(kt(this), arguments)
          },
          reduceRight: function(t) {
            return ut.apply(kt(this), arguments)
          },
          reverse: function() {
            for (
              var t, e = kt(this).length, n = Math.floor(e / 2), i = 0;
              i < n;

            )
              (t = this[i]), (this[i++] = this[--e]), (this[e] = t)
            return this
          },
          some: function(t) {
            return K(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          sort: function(t) {
            return ft.call(kt(this), t)
          },
          subarray: function(t, e) {
            var n = kt(this),
              i = n.length,
              r = _(t, i)
            return new (M(n, n[_t]))(
              n.buffer,
              n.byteOffset + r * n.BYTES_PER_ELEMENT,
              y((void 0 === e ? i : _(e, i)) - r)
            )
          }
        },
        qt = function(t, e) {
          return Ot(this, ct.call(kt(this), t, e))
        },
        jt = function(t) {
          kt(this)
          var e = xt(arguments[1], 1),
            n = this.length,
            i = T(t),
            r = y(i.length),
            o = 0
          if (r + e > n) throw z('Wrong length!')
          for (; o < r; ) this[e + o] = i[o++]
        },
        It = {
          entries: function() {
            return ot.call(kt(this))
          },
          keys: function() {
            return rt.call(kt(this))
          },
          values: function() {
            return it.call(kt(this))
          }
        },
        Lt = function(t, e) {
          return (
            S(t) &&
            t[gt] &&
            'symbol' != typeof e &&
            e in t &&
            String(+e) == String(e)
          )
        },
        Dt = function(t, e) {
          return Lt(t, (e = v(e, !0))) ? c(2, t[e]) : V(t, e)
        },
        Bt = function(t, e, n) {
          return !(Lt(t, (e = v(e, !0))) && S(n) && g(n, 'value')) ||
            g(n, 'get') ||
            g(n, 'set') ||
            n.configurable ||
            (g(n, 'writable') && !n.writable) ||
            (g(n, 'enumerable') && !n.enumerable)
            ? U(t, e, n)
            : ((t[e] = n.value), t)
        }
      vt || ((B.f = Dt), (D.f = Bt)),
        a(a.S + a.F * !vt, 'Object', {
          getOwnPropertyDescriptor: Dt,
          defineProperty: Bt
        }),
        o(function() {
          dt.call({})
        }) &&
          (dt = ht = function() {
            return lt.call(this)
          })
      var Ut = h({}, Nt)
      h(Ut, It),
        d(Ut, pt, It.values),
        h(Ut, {
          slice: qt,
          set: jt,
          constructor: function() {},
          toString: dt,
          toLocaleString: Rt
        }),
        Et(Ut, 'buffer', 'b'),
        Et(Ut, 'byteOffset', 'o'),
        Et(Ut, 'byteLength', 'l'),
        Et(Ut, 'length', 'e'),
        U(Ut, yt, {
          get: function() {
            return this[gt]
          }
        }),
        (t.exports = function(t, e, n, u) {
          var l = t + ((u = !!u) ? 'Clamped' : '') + 'Array',
            c = 'get' + t,
            h = 'set' + t,
            p = r[l],
            _ = p || {},
            v = p && k(p),
            g = !p || !s.ABV,
            T = {},
            w = p && p.prototype,
            O = function(t, n) {
              U(t, n, {
                get: function() {
                  return (function(t, n) {
                    var i = t._d
                    return i.v[c](n * e + i.o, Tt)
                  })(this, n)
                },
                set: function(t) {
                  return (function(t, n, i) {
                    var r = t._d
                    u &&
                      (i =
                        (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i),
                      r.v[h](n * e + r.o, i, Tt)
                  })(this, n, t)
                },
                enumerable: !0
              })
            }
          g
            ? ((p = n(function(t, n, i, r) {
                f(t, p, l, '_d')
                var o,
                  a,
                  s,
                  u,
                  c = 0,
                  h = 0
                if (S(n)) {
                  if (
                    !(
                      n instanceof H ||
                      'ArrayBuffer' == (u = b(n)) ||
                      'SharedArrayBuffer' == u
                    )
                  )
                    return gt in n ? At(p, n) : Ct.call(p, n)
                  ;(o = n), (h = xt(i, e))
                  var _ = n.byteLength
                  if (void 0 === r) {
                    if (_ % e) throw z('Wrong length!')
                    if ((a = _ - h) < 0) throw z('Wrong length!')
                  } else if ((a = y(r) * e) + h > _) throw z('Wrong length!')
                  s = a / e
                } else (s = m(n)), (o = new H((a = s * e)))
                for (d(t, '_d', {b: o, o: h, l: a, e: s, v: new $(o)}); c < s; )
                  O(t, c++)
              })),
              (w = p.prototype = x(Ut)),
              d(w, 'constructor', p))
            : (o(function() {
                p(1)
              }) &&
                o(function() {
                  new p(-1)
                }) &&
                q(function(t) {
                  new p(), new p(null), new p(1.5), new p(t)
                }, !0)) ||
              ((p = n(function(t, n, i, r) {
                var o
                return (
                  f(t, p, l),
                  S(n)
                    ? n instanceof H ||
                      'ArrayBuffer' == (o = b(n)) ||
                      'SharedArrayBuffer' == o
                      ? void 0 !== r
                        ? new _(n, xt(i, e), r)
                        : void 0 !== i ? new _(n, xt(i, e)) : new _(n)
                      : gt in n ? At(p, n) : Ct.call(p, n)
                    : new _(m(n))
                )
              })),
              X(v !== Function.prototype ? P(_).concat(P(v)) : P(_), function(
                t
              ) {
                t in p || d(p, t, _[t])
              }),
              (p.prototype = w),
              i || (w.constructor = p))
          var A = w[pt],
            E = !!A && ('values' == A.name || null == A.name),
            C = It.values
          d(p, mt, !0),
            d(w, gt, l),
            d(w, bt, !0),
            d(w, _t, p),
            (u ? new p(1)[yt] == l : yt in w) ||
              U(w, yt, {
                get: function() {
                  return l
                }
              }),
            (T[l] = p),
            a(a.G + a.W + a.F * (p != _), T),
            a(a.S, l, {BYTES_PER_ELEMENT: e}),
            a(
              a.S +
                a.F *
                  o(function() {
                    _.of.call(p, 1)
                  }),
              l,
              {from: Ct, of: Ft}
            ),
            'BYTES_PER_ELEMENT' in w || d(w, 'BYTES_PER_ELEMENT', e),
            a(a.P, l, Nt),
            j(l),
            a(a.P + a.F * wt, l, {set: jt}),
            a(a.P + a.F * !E, l, It),
            i || w.toString == dt || (w.toString = dt),
            a(
              a.P +
                a.F *
                  o(function() {
                    new p(1).slice()
                  }),
              l,
              {slice: qt}
            ),
            a(
              a.P +
                a.F *
                  (o(function() {
                    return (
                      [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                    )
                  }) ||
                    !o(function() {
                      w.toLocaleString.call([1, 2])
                    })),
              l,
              {toLocaleString: Rt}
            ),
            (N[l] = E ? A : C),
            i || E || d(w, pt, C)
        })
    } else t.exports = function() {}
  },
  function(t, e, n) {
    var i = n(5)
    t.exports = function(t, e) {
      if (!i(t)) return t
      var n, r
      if (e && 'function' == typeof (n = t.toString) && !i((r = n.call(t))))
        return r
      if ('function' == typeof (n = t.valueOf) && !i((r = n.call(t)))) return r
      if (!e && 'function' == typeof (n = t.toString) && !i((r = n.call(t))))
        return r
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function(t, e, n) {
    var i = n(31)('meta'),
      r = n(5),
      o = n(14),
      a = n(10).f,
      s = 0,
      u =
        Object.isExtensible ||
        function() {
          return !0
        },
      l = !n(3)(function() {
        return u(Object.preventExtensions({}))
      }),
      f = function(t) {
        a(t, i, {value: {i: 'O' + ++s, w: {}}})
      },
      c = (t.exports = {
        KEY: i,
        NEED: !1,
        fastKey: function(t, e) {
          if (!r(t))
            return 'symbol' == typeof t
              ? t
              : ('string' == typeof t ? 'S' : 'P') + t
          if (!o(t, i)) {
            if (!u(t)) return 'F'
            if (!e) return 'E'
            f(t)
          }
          return t[i].i
        },
        getWeak: function(t, e) {
          if (!o(t, i)) {
            if (!u(t)) return !0
            if (!e) return !1
            f(t)
          }
          return t[i].w
        },
        onFreeze: function(t) {
          return l && c.NEED && u(t) && !o(t, i) && f(t), t
        }
      })
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    }
  },
  function(t, e) {
    var n = 0,
      i = Math.random()
    t.exports = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++n + i).toString(36)
      )
    }
  },
  function(t, e) {
    t.exports = !1
  },
  function(t, e, n) {
    var i = n(92),
      r = n(65)
    t.exports =
      Object.keys ||
      function(t) {
        return i(t, r)
      }
  },
  function(t, e, n) {
    var i = n(21),
      r = Math.max,
      o = Math.min
    t.exports = function(t, e) {
      return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
    }
  },
  function(t, e, n) {
    var i = n(4),
      r = n(93),
      o = n(65),
      a = n(64)('IE_PROTO'),
      s = function() {},
      u = function() {
        var t,
          e = n(62)('iframe'),
          i = o.length
        for (
          e.style.display = 'none',
            n(66).appendChild(e),
            e.src = 'javascript:',
            (t = e.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            u = t.F;
          i--;

        )
          delete u.prototype[o[i]]
        return u()
      }
    t.exports =
      Object.create ||
      function(t, e) {
        var n
        return (
          null !== t
            ? ((s.prototype = i(t)),
              (n = new s()),
              (s.prototype = null),
              (n[a] = t))
            : (n = u()),
          void 0 === e ? n : r(n, e)
        )
      }
  },
  function(t, e, n) {
    var i = n(92),
      r = n(65).concat('length', 'prototype')
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return i(t, r)
      }
  },
  function(t, e, n) {
    var i = n(14),
      r = n(11),
      o = n(64)('IE_PROTO'),
      a = Object.prototype
    t.exports =
      Object.getPrototypeOf ||
      function(t) {
        return (
          (t = r(t)),
          i(t, o)
            ? t[o]
            : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object ? a : null
        )
      }
  },
  function(t, e, n) {
    var i = n(6)('unscopables'),
      r = Array.prototype
    null == r[i] && n(15)(r, i, {}),
      (t.exports = function(t) {
        r[i][t] = !0
      })
  },
  function(t, e, n) {
    var i = n(5)
    t.exports = function(t, e) {
      if (!i(t) || t._t !== e)
        throw TypeError('Incompatible receiver, ' + e + ' required!')
      return t
    }
  },
  function(t, e, n) {
    var i = n(10).f,
      r = n(14),
      o = n(6)('toStringTag')
    t.exports = function(t, e, n) {
      t &&
        !r((t = n ? t : t.prototype), o) &&
        i(t, o, {configurable: !0, value: e})
    }
  },
  function(t, e, n) {
    var i = n(0),
      r = n(26),
      o = n(3),
      a = n(68),
      s = '[' + a + ']',
      u = RegExp('^' + s + s + '*'),
      l = RegExp(s + s + '*$'),
      f = function(t, e, n) {
        var r = {},
          s = o(function() {
            return !!a[t]() || '​' != '​'[t]()
          }),
          u = (r[t] = s ? e(c) : a[t])
        n && (r[n] = u), i(i.P + i.F * s, 'String', r)
      },
      c = (f.trim = function(t, e) {
        return (
          (t = String(r(t))),
          1 & e && (t = t.replace(u, '')),
          2 & e && (t = t.replace(l, '')),
          t
        )
      })
    t.exports = f
  },
  function(t, e) {
    t.exports = {}
  },
  function(t, e, n) {
    'use strict'
    var i = n(2),
      r = n(10),
      o = n(9),
      a = n(6)('species')
    t.exports = function(t) {
      var e = i[t]
      o &&
        e &&
        !e[a] &&
        r.f(e, a, {
          configurable: !0,
          get: function() {
            return this
          }
        })
    }
  },
  function(t, e) {
    t.exports = function(t, e, n, i) {
      if (!(t instanceof e) || (void 0 !== i && i in t))
        throw TypeError(n + ': incorrect invocation!')
      return t
    }
  },
  function(t, e, n) {
    var i = n(12)
    t.exports = function(t, e, n) {
      for (var r in e) i(t, r, e[r], n)
      return t
    }
  },
  function(t, e, n) {
    var i = n(25)
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return 'String' == i(t) ? t.split('') : Object(t)
        }
  },
  function(t, e) {
    e.f = {}.propertyIsEnumerable
  },
  function(t, e, n) {
    var i = n(25),
      r = n(6)('toStringTag'),
      o =
        'Arguments' ==
        i(
          (function() {
            return arguments
          })()
        )
    t.exports = function(t) {
      var e, n, a
      return void 0 === t
        ? 'Undefined'
        : null === t
          ? 'Null'
          : 'string' ==
            typeof (n = (function(t, e) {
              try {
                return t[e]
              } catch (t) {}
            })((e = Object(t)), r))
            ? n
            : o
              ? i(e)
              : 'Object' == (a = i(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a
    }
  },
  function(t, e, n) {
    var i = n(4),
      r = n(20),
      o = n(6)('species')
    t.exports = function(t, e) {
      var n,
        a = i(t).constructor
      return void 0 === a || null == (n = i(a)[o]) ? e : r(n)
    }
  },
  function(t, e, n) {
    var i = n(8),
      r = n(2),
      o = r['__core-js_shared__'] || (r['__core-js_shared__'] = {})
    ;(t.exports = function(t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {})
    })('versions', []).push({
      version: i.version,
      mode: n(32) ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    })
  },
  function(t, e, n) {
    var i = n(16),
      r = n(7),
      o = n(34)
    t.exports = function(t) {
      return function(e, n, a) {
        var s,
          u = i(e),
          l = r(u.length),
          f = o(a, l)
        if (t && n != n) {
          for (; l > f; ) if ((s = u[f++]) != s) return !0
        } else
          for (; l > f; f++) if ((t || f in u) && u[f] === n) return t || f || 0
        return !t && -1
      }
    }
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols
  },
  function(t, e, n) {
    var i = n(25)
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == i(t)
      }
  },
  function(t, e, n) {
    var i = n(6)('iterator'),
      r = !1
    try {
      var o = [7][i]()
      ;(o.return = function() {
        r = !0
      }),
        Array.from(o, function() {
          throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !r) return !1
      var n = !1
      try {
        var o = [7],
          a = o[i]()
        ;(a.next = function() {
          return {done: (n = !0)}
        }),
          (o[i] = function() {
            return a
          }),
          t(o)
      } catch (t) {}
      return n
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(4)
    t.exports = function() {
      var t = i(this),
        e = ''
      return (
        t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      )
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(48),
      r = RegExp.prototype.exec
    t.exports = function(t, e) {
      var n = t.exec
      if ('function' == typeof n) {
        var o = n.call(t, e)
        if ('object' != typeof o)
          throw new TypeError(
            'RegExp exec method returned something other than an Object or null'
          )
        return o
      }
      if ('RegExp' !== i(t))
        throw new TypeError('RegExp#exec called on incompatible receiver')
      return r.call(t, e)
    }
  },
  function(t, e, n) {
    'use strict'
    n(110)
    var i = n(12),
      r = n(15),
      o = n(3),
      a = n(26),
      s = n(6),
      u = n(83),
      l = s('species'),
      f = !o(function() {
        var t = /./
        return (
          (t.exec = function() {
            var t = []
            return (t.groups = {a: '7'}), t
          }),
          '7' !== ''.replace(t, '$<a>')
        )
      }),
      c = (function() {
        var t = /(?:)/,
          e = t.exec
        t.exec = function() {
          return e.apply(this, arguments)
        }
        var n = 'ab'.split(t)
        return 2 === n.length && 'a' === n[0] && 'b' === n[1]
      })()
    t.exports = function(t, e, n) {
      var d = s(t),
        h = !o(function() {
          var e = {}
          return (
            (e[d] = function() {
              return 7
            }),
            7 != ''[t](e)
          )
        }),
        p = h
          ? !o(function() {
              var e = !1,
                n = /a/
              return (
                (n.exec = function() {
                  return (e = !0), null
                }),
                'split' === t &&
                  ((n.constructor = {}),
                  (n.constructor[l] = function() {
                    return n
                  })),
                n[d](''),
                !e
              )
            })
          : void 0
      if (!h || !p || ('replace' === t && !f) || ('split' === t && !c)) {
        var y = /./[d],
          m = n(a, d, ''[t], function(t, e, n, i, r) {
            return e.exec === u
              ? h && !r
                ? {done: !0, value: y.call(e, n, i)}
                : {done: !0, value: t.call(n, e, i)}
              : {done: !1}
          }),
          _ = m[0],
          v = m[1]
        i(String.prototype, t, _),
          r(
            RegExp.prototype,
            d,
            2 == e
              ? function(t, e) {
                  return v.call(t, this, e)
                }
              : function(t) {
                  return v.call(t, this)
                }
          )
      }
    }
  },
  function(t, e, n) {
    var i = n(19),
      r = n(105),
      o = n(78),
      a = n(4),
      s = n(7),
      u = n(80),
      l = {},
      f = {}
    ;((e = t.exports = function(t, e, n, c, d) {
      var h,
        p,
        y,
        m,
        _ = d
          ? function() {
              return t
            }
          : u(t),
        v = i(n, c, e ? 2 : 1),
        g = 0
      if ('function' != typeof _) throw TypeError(t + ' is not iterable!')
      if (o(_)) {
        for (h = s(t.length); h > g; g++)
          if ((m = e ? v(a((p = t[g]))[0], p[1]) : v(t[g])) === l || m === f)
            return m
      } else
        for (y = _.call(t); !(p = y.next()).done; )
          if ((m = r(y, v, p.value, e)) === l || m === f) return m
    }).BREAK = l),
      (e.RETURN = f)
  },
  function(t, e, n) {
    var i = n(2).navigator
    t.exports = (i && i.userAgent) || ''
  },
  function(t, e, n) {
    'use strict'
    var i = n(2),
      r = n(0),
      o = n(12),
      a = n(45),
      s = n(29),
      u = n(58),
      l = n(44),
      f = n(5),
      c = n(3),
      d = n(54),
      h = n(40),
      p = n(69)
    t.exports = function(t, e, n, y, m, _) {
      var v = i[t],
        g = v,
        b = m ? 'set' : 'add',
        S = g && g.prototype,
        T = {},
        w = function(t) {
          var e = S[t]
          o(
            S,
            t,
            'delete' == t
              ? function(t) {
                  return !(_ && !f(t)) && e.call(this, 0 === t ? 0 : t)
                }
              : 'has' == t
                ? function(t) {
                    return !(_ && !f(t)) && e.call(this, 0 === t ? 0 : t)
                  }
                : 'get' == t
                  ? function(t) {
                      return _ && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    }
                  : 'add' == t
                    ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                      }
                    : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this
                      }
          )
        }
      if (
        'function' == typeof g &&
        (_ ||
          (S.forEach &&
            !c(function() {
              new g().entries().next()
            })))
      ) {
        var x = new g(),
          k = x[b](_ ? {} : -0, 1) != x,
          P = c(function() {
            x.has(1)
          }),
          O = d(function(t) {
            new g(t)
          }),
          A =
            !_ &&
            c(function() {
              for (var t = new g(), e = 5; e--; ) t[b](e, e)
              return !t.has(-0)
            })
        O ||
          (((g = e(function(e, n) {
            l(e, g, t)
            var i = p(new v(), e, g)
            return null != n && u(n, m, i[b], i), i
          })).prototype = S),
          (S.constructor = g)),
          (P || A) && (w('delete'), w('has'), m && w('get')),
          (A || k) && w(b),
          _ && S.clear && delete S.clear
      } else
        (g = y.getConstructor(e, t, m, b)), a(g.prototype, n), (s.NEED = !0)
      return (
        h(g, t),
        (T[t] = g),
        r(r.G + r.W + r.F * (g != v), T),
        _ || y.setStrong(g, t, m),
        g
      )
    }
  },
  function(t, e, n) {
    for (
      var i,
        r = n(2),
        o = n(15),
        a = n(31),
        s = a('typed_array'),
        u = a('view'),
        l = !(!r.ArrayBuffer || !r.DataView),
        f = l,
        c = 0,
        d = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
          ','
        );
      c < 9;

    )
      (i = r[d[c++]])
        ? (o(i.prototype, s, !0), o(i.prototype, u, !0))
        : (f = !1)
    t.exports = {ABV: l, CONSTR: f, TYPED: s, VIEW: u}
  },
  function(t, e, n) {
    var i = n(5),
      r = n(2).document,
      o = i(r) && i(r.createElement)
    t.exports = function(t) {
      return o ? r.createElement(t) : {}
    }
  },
  function(t, e, n) {
    e.f = n(6)
  },
  function(t, e, n) {
    var i = n(50)('keys'),
      r = n(31)
    t.exports = function(t) {
      return i[t] || (i[t] = r(t))
    }
  },
  function(t, e) {
    t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    )
  },
  function(t, e, n) {
    var i = n(2).document
    t.exports = i && i.documentElement
  },
  function(t, e, n) {
    var i = n(5),
      r = n(4),
      o = function(t, e) {
        if ((r(t), !i(e) && null !== e))
          throw TypeError(e + ": can't set as prototype!")
      }
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function(t, e, i) {
              try {
                ;(i = n(19)(
                  Function.call,
                  n(22).f(Object.prototype, '__proto__').set,
                  2
                ))(t, []),
                  (e = !(t instanceof Array))
              } catch (t) {
                e = !0
              }
              return function(t, n) {
                return o(t, n), e ? (t.__proto__ = n) : i(t, n), t
              }
            })({}, !1)
          : void 0),
      check: o
    }
  },
  function(t, e) {
    t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff'
  },
  function(t, e, n) {
    var i = n(5),
      r = n(67).set
    t.exports = function(t, e, n) {
      var o,
        a = e.constructor
      return (
        a !== n &&
          'function' == typeof a &&
          (o = a.prototype) !== n.prototype &&
          i(o) &&
          r &&
          r(t, o),
        t
      )
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(21),
      r = n(26)
    t.exports = function(t) {
      var e = String(r(this)),
        n = '',
        o = i(t)
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative")
      for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (n += e)
      return n
    }
  },
  function(t, e) {
    t.exports =
      Math.sign ||
      function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
      }
  },
  function(t, e) {
    var n = Math.expm1
    t.exports =
      !n ||
      n(10) > 22025.465794806718 ||
      n(10) < 22025.465794806718 ||
      -2e-17 != n(-2e-17)
        ? function(t) {
            return 0 == (t = +t)
              ? t
              : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
          }
        : n
  },
  function(t, e, n) {
    var i = n(21),
      r = n(26)
    t.exports = function(t) {
      return function(e, n) {
        var o,
          a,
          s = String(r(e)),
          u = i(n),
          l = s.length
        return u < 0 || u >= l
          ? t ? '' : void 0
          : (o = s.charCodeAt(u)) < 55296 ||
            o > 56319 ||
            u + 1 === l ||
            (a = s.charCodeAt(u + 1)) < 56320 ||
            a > 57343
            ? t ? s.charAt(u) : o
            : t ? s.slice(u, u + 2) : a - 56320 + ((o - 55296) << 10) + 65536
      }
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(32),
      r = n(0),
      o = n(12),
      a = n(15),
      s = n(42),
      u = n(104),
      l = n(40),
      f = n(37),
      c = n(6)('iterator'),
      d = !([].keys && 'next' in [].keys()),
      h = function() {
        return this
      }
    t.exports = function(t, e, n, p, y, m, _) {
      u(n, e, p)
      var v,
        g,
        b,
        S = function(t) {
          if (!d && t in k) return k[t]
          switch (t) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, t)
              }
          }
          return function() {
            return new n(this, t)
          }
        },
        T = e + ' Iterator',
        w = 'values' == y,
        x = !1,
        k = t.prototype,
        P = k[c] || k['@@iterator'] || (y && k[y]),
        O = P || S(y),
        A = y ? (w ? S('entries') : O) : void 0,
        E = ('Array' == e && k.entries) || P
      if (
        (E &&
          (b = f(E.call(new t()))) !== Object.prototype &&
          b.next &&
          (l(b, T, !0), i || 'function' == typeof b[c] || a(b, c, h)),
        w &&
          P &&
          'values' !== P.name &&
          ((x = !0),
          (O = function() {
            return P.call(this)
          })),
        (i && !_) || (!d && !x && k[c]) || a(k, c, O),
        (s[e] = O),
        (s[T] = h),
        y)
      )
        if (
          ((v = {
            values: w ? O : S('values'),
            keys: m ? O : S('keys'),
            entries: A
          }),
          _)
        )
          for (g in v) g in k || o(k, g, v[g])
        else r(r.P + r.F * (d || x), e, v)
      return v
    }
  },
  function(t, e, n) {
    var i = n(76),
      r = n(26)
    t.exports = function(t, e, n) {
      if (i(e)) throw TypeError('String#' + n + " doesn't accept regex!")
      return String(r(t))
    }
  },
  function(t, e, n) {
    var i = n(5),
      r = n(25),
      o = n(6)('match')
    t.exports = function(t) {
      var e
      return i(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == r(t))
    }
  },
  function(t, e, n) {
    var i = n(6)('match')
    t.exports = function(t) {
      var e = /./
      try {
        '/./'[t](e)
      } catch (n) {
        try {
          return (e[i] = !1), !'/./'[t](e)
        } catch (t) {}
      }
      return !0
    }
  },
  function(t, e, n) {
    var i = n(42),
      r = n(6)('iterator'),
      o = Array.prototype
    t.exports = function(t) {
      return void 0 !== t && (i.Array === t || o[r] === t)
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(10),
      r = n(30)
    t.exports = function(t, e, n) {
      e in t ? i.f(t, e, r(0, n)) : (t[e] = n)
    }
  },
  function(t, e, n) {
    var i = n(48),
      r = n(6)('iterator'),
      o = n(42)
    t.exports = n(8).getIteratorMethod = function(t) {
      if (null != t) return t[r] || t['@@iterator'] || o[i(t)]
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(11),
      r = n(34),
      o = n(7)
    t.exports = function(t) {
      for (
        var e = i(this),
          n = o(e.length),
          a = arguments.length,
          s = r(a > 1 ? arguments[1] : void 0, n),
          u = a > 2 ? arguments[2] : void 0,
          l = void 0 === u ? n : r(u, n);
        l > s;

      )
        e[s++] = t
      return e
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(38),
      r = n(109),
      o = n(42),
      a = n(16)
    ;(t.exports = n(74)(
      Array,
      'Array',
      function(t, e) {
        ;(this._t = a(t)), (this._i = 0), (this._k = e)
      },
      function() {
        var t = this._t,
          e = this._k,
          n = this._i++
        return !t || n >= t.length
          ? ((this._t = void 0), r(1))
          : r(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]])
      },
      'values'
    )),
      (o.Arguments = o.Array),
      i('keys'),
      i('values'),
      i('entries')
  },
  function(t, e, n) {
    'use strict'
    var i,
      r,
      o = n(55),
      a = RegExp.prototype.exec,
      s = String.prototype.replace,
      u = a,
      l = ((i = /a/),
      (r = /b*/g),
      a.call(i, 'a'),
      a.call(r, 'a'),
      0 !== i.lastIndex || 0 !== r.lastIndex),
      f = void 0 !== /()??/.exec('')[1]
    ;(l || f) &&
      (u = function(t) {
        var e,
          n,
          i,
          r,
          u = this
        return (
          f && (n = new RegExp('^' + u.source + '$(?!\\s)', o.call(u))),
          l && (e = u.lastIndex),
          (i = a.call(u, t)),
          l && i && (u.lastIndex = u.global ? i.index + i[0].length : e),
          f &&
            i &&
            i.length > 1 &&
            s.call(i[0], n, function() {
              for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (i[r] = void 0)
            }),
          i
        )
      }),
      (t.exports = u)
  },
  function(t, e, n) {
    'use strict'
    var i = n(73)(!0)
    t.exports = function(t, e, n) {
      return e + (n ? i(t, e).length : 1)
    }
  },
  function(t, e, n) {
    var i,
      r,
      o,
      a = n(19),
      s = n(98),
      u = n(66),
      l = n(62),
      f = n(2),
      c = f.process,
      d = f.setImmediate,
      h = f.clearImmediate,
      p = f.MessageChannel,
      y = f.Dispatch,
      m = 0,
      _ = {},
      v = function() {
        var t = +this
        if (_.hasOwnProperty(t)) {
          var e = _[t]
          delete _[t], e()
        }
      },
      g = function(t) {
        v.call(t.data)
      }
    ;(d && h) ||
      ((d = function(t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++])
        return (
          (_[++m] = function() {
            s('function' == typeof t ? t : Function(t), e)
          }),
          i(m),
          m
        )
      }),
      (h = function(t) {
        delete _[t]
      }),
      'process' == n(25)(c)
        ? (i = function(t) {
            c.nextTick(a(v, t, 1))
          })
        : y && y.now
          ? (i = function(t) {
              y.now(a(v, t, 1))
            })
          : p
            ? ((o = (r = new p()).port2),
              (r.port1.onmessage = g),
              (i = a(o.postMessage, o, 1)))
            : f.addEventListener &&
              'function' == typeof postMessage &&
              !f.importScripts
              ? ((i = function(t) {
                  f.postMessage(t + '', '*')
                }),
                f.addEventListener('message', g, !1))
              : (i =
                  'onreadystatechange' in l('script')
                    ? function(t) {
                        u.appendChild(
                          l('script')
                        ).onreadystatechange = function() {
                          u.removeChild(this), v.call(t)
                        }
                      }
                    : function(t) {
                        setTimeout(a(v, t, 1), 0)
                      })),
      (t.exports = {set: d, clear: h})
  },
  function(t, e, n) {
    'use strict'
    var i = n(2),
      r = n(9),
      o = n(32),
      a = n(61),
      s = n(15),
      u = n(45),
      l = n(3),
      f = n(44),
      c = n(21),
      d = n(7),
      h = n(117),
      p = n(36).f,
      y = n(10).f,
      m = n(81),
      _ = n(40),
      v = 'prototype',
      g = 'Wrong index!',
      b = i.ArrayBuffer,
      S = i.DataView,
      T = i.Math,
      w = i.RangeError,
      x = i.Infinity,
      k = b,
      P = T.abs,
      O = T.pow,
      A = T.floor,
      E = T.log,
      C = T.LN2,
      F = r ? '_b' : 'buffer',
      M = r ? '_l' : 'byteLength',
      R = r ? '_o' : 'byteOffset'
    function N(t, e, n) {
      var i,
        r,
        o,
        a = new Array(n),
        s = 8 * n - e - 1,
        u = (1 << s) - 1,
        l = u >> 1,
        f = 23 === e ? O(2, -24) - O(2, -77) : 0,
        c = 0,
        d = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
      for (
        (t = P(t)) != t || t === x
          ? ((r = t != t ? 1 : 0), (i = u))
          : ((i = A(E(t) / C)),
            t * (o = O(2, -i)) < 1 && (i--, (o *= 2)),
            (t += i + l >= 1 ? f / o : f * O(2, 1 - l)) * o >= 2 &&
              (i++, (o /= 2)),
            i + l >= u
              ? ((r = 0), (i = u))
              : i + l >= 1
                ? ((r = (t * o - 1) * O(2, e)), (i += l))
                : ((r = t * O(2, l - 1) * O(2, e)), (i = 0)));
        e >= 8;
        a[c++] = 255 & r, r /= 256, e -= 8
      );
      for (i = (i << e) | r, s += e; s > 0; a[c++] = 255 & i, i /= 256, s -= 8);
      return (a[--c] |= 128 * d), a
    }
    function q(t, e, n) {
      var i,
        r = 8 * n - e - 1,
        o = (1 << r) - 1,
        a = o >> 1,
        s = r - 7,
        u = n - 1,
        l = t[u--],
        f = 127 & l
      for (l >>= 7; s > 0; f = 256 * f + t[u], u--, s -= 8);
      for (
        i = f & ((1 << -s) - 1), f >>= -s, s += e;
        s > 0;
        i = 256 * i + t[u], u--, s -= 8
      );
      if (0 === f) f = 1 - a
      else {
        if (f === o) return i ? NaN : l ? -x : x
        ;(i += O(2, e)), (f -= a)
      }
      return (l ? -1 : 1) * i * O(2, f - e)
    }
    function j(t) {
      return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0]
    }
    function I(t) {
      return [255 & t]
    }
    function L(t) {
      return [255 & t, (t >> 8) & 255]
    }
    function D(t) {
      return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255]
    }
    function B(t) {
      return N(t, 52, 8)
    }
    function U(t) {
      return N(t, 23, 4)
    }
    function V(t, e, n) {
      y(t[v], e, {
        get: function() {
          return this[n]
        }
      })
    }
    function z(t, e, n, i) {
      var r = h(+n)
      if (r + e > t[M]) throw w(g)
      var o = t[F]._b,
        a = r + t[R],
        s = o.slice(a, a + e)
      return i ? s : s.reverse()
    }
    function W(t, e, n, i, r, o) {
      var a = h(+n)
      if (a + e > t[M]) throw w(g)
      for (var s = t[F]._b, u = a + t[R], l = i(+r), f = 0; f < e; f++)
        s[u + f] = l[o ? f : e - f - 1]
    }
    if (a.ABV) {
      if (
        !l(function() {
          b(1)
        }) ||
        !l(function() {
          new b(-1)
        }) ||
        l(function() {
          return new b(), new b(1.5), new b(NaN), 'ArrayBuffer' != b.name
        })
      ) {
        for (
          var G,
            Q = ((b = function(t) {
              return f(this, b), new k(h(t))
            })[v] =
              k[v]),
            H = p(k),
            $ = 0;
          H.length > $;

        )
          (G = H[$++]) in b || s(b, G, k[G])
        o || (Q.constructor = b)
      }
      var X = new S(new b(2)),
        Y = S[v].setInt8
      X.setInt8(0, 2147483648),
        X.setInt8(1, 2147483649),
        (!X.getInt8(0) && X.getInt8(1)) ||
          u(
            S[v],
            {
              setInt8: function(t, e) {
                Y.call(this, t, (e << 24) >> 24)
              },
              setUint8: function(t, e) {
                Y.call(this, t, (e << 24) >> 24)
              }
            },
            !0
          )
    } else
      (b = function(t) {
        f(this, b, 'ArrayBuffer')
        var e = h(t)
        ;(this._b = m.call(new Array(e), 0)), (this[M] = e)
      }),
        (S = function(t, e, n) {
          f(this, S, 'DataView'), f(t, b, 'DataView')
          var i = t[M],
            r = c(e)
          if (r < 0 || r > i) throw w('Wrong offset!')
          if (r + (n = void 0 === n ? i - r : d(n)) > i)
            throw w('Wrong length!')
          ;(this[F] = t), (this[R] = r), (this[M] = n)
        }),
        r &&
          (V(b, 'byteLength', '_l'),
          V(S, 'buffer', '_b'),
          V(S, 'byteLength', '_l'),
          V(S, 'byteOffset', '_o')),
        u(S[v], {
          getInt8: function(t) {
            return (z(this, 1, t)[0] << 24) >> 24
          },
          getUint8: function(t) {
            return z(this, 1, t)[0]
          },
          getInt16: function(t) {
            var e = z(this, 2, t, arguments[1])
            return (((e[1] << 8) | e[0]) << 16) >> 16
          },
          getUint16: function(t) {
            var e = z(this, 2, t, arguments[1])
            return (e[1] << 8) | e[0]
          },
          getInt32: function(t) {
            return j(z(this, 4, t, arguments[1]))
          },
          getUint32: function(t) {
            return j(z(this, 4, t, arguments[1])) >>> 0
          },
          getFloat32: function(t) {
            return q(z(this, 4, t, arguments[1]), 23, 4)
          },
          getFloat64: function(t) {
            return q(z(this, 8, t, arguments[1]), 52, 8)
          },
          setInt8: function(t, e) {
            W(this, 1, t, I, e)
          },
          setUint8: function(t, e) {
            W(this, 1, t, I, e)
          },
          setInt16: function(t, e) {
            W(this, 2, t, L, e, arguments[2])
          },
          setUint16: function(t, e) {
            W(this, 2, t, L, e, arguments[2])
          },
          setInt32: function(t, e) {
            W(this, 4, t, D, e, arguments[2])
          },
          setUint32: function(t, e) {
            W(this, 4, t, D, e, arguments[2])
          },
          setFloat32: function(t, e) {
            W(this, 4, t, U, e, arguments[2])
          },
          setFloat64: function(t, e) {
            W(this, 8, t, B, e, arguments[2])
          }
        })
    _(b, 'ArrayBuffer'),
      _(S, 'DataView'),
      s(S[v], a.VIEW, !0),
      (e.ArrayBuffer = b),
      (e.DataView = S)
  },
  function(t, e) {
    var n = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
    'number' == typeof __g && (__g = n)
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t
    }
  },
  function(t, e, n) {
    t.exports = !n(122)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7
          }
        }).a
      )
    })
  },
  function(t, e, n) {
    t.exports =
      !n(9) &&
      !n(3)(function() {
        return (
          7 !=
          Object.defineProperty(n(62)('div'), 'a', {
            get: function() {
              return 7
            }
          }).a
        )
      })
  },
  function(t, e, n) {
    var i = n(2),
      r = n(8),
      o = n(32),
      a = n(63),
      s = n(10).f
    t.exports = function(t) {
      var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {})
      '_' == t.charAt(0) || t in e || s(e, t, {value: a.f(t)})
    }
  },
  function(t, e, n) {
    var i = n(14),
      r = n(16),
      o = n(51)(!1),
      a = n(64)('IE_PROTO')
    t.exports = function(t, e) {
      var n,
        s = r(t),
        u = 0,
        l = []
      for (n in s) n != a && i(s, n) && l.push(n)
      for (; e.length > u; ) i(s, (n = e[u++])) && (~o(l, n) || l.push(n))
      return l
    }
  },
  function(t, e, n) {
    var i = n(10),
      r = n(4),
      o = n(33)
    t.exports = n(9)
      ? Object.defineProperties
      : function(t, e) {
          r(t)
          for (var n, a = o(e), s = a.length, u = 0; s > u; )
            i.f(t, (n = a[u++]), e[n])
          return t
        }
  },
  function(t, e, n) {
    var i = n(16),
      r = n(36).f,
      o = {}.toString,
      a =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : []
    t.exports.f = function(t) {
      return a && '[object Window]' == o.call(t)
        ? (function(t) {
            try {
              return r(t)
            } catch (t) {
              return a.slice()
            }
          })(t)
        : r(i(t))
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(9),
      r = n(33),
      o = n(52),
      a = n(47),
      s = n(11),
      u = n(46),
      l = Object.assign
    t.exports =
      !l ||
      n(3)(function() {
        var t = {},
          e = {},
          n = Symbol(),
          i = 'abcdefghijklmnopqrst'
        return (
          (t[n] = 7),
          i.split('').forEach(function(t) {
            e[t] = t
          }),
          7 != l({}, t)[n] || Object.keys(l({}, e)).join('') != i
        )
      })
        ? function(t, e) {
            for (
              var n = s(t), l = arguments.length, f = 1, c = o.f, d = a.f;
              l > f;

            )
              for (
                var h,
                  p = u(arguments[f++]),
                  y = c ? r(p).concat(c(p)) : r(p),
                  m = y.length,
                  _ = 0;
                m > _;

              )
                (h = y[_++]), (i && !d.call(p, h)) || (n[h] = p[h])
            return n
          }
        : l
  },
  function(t, e) {
    t.exports =
      Object.is ||
      function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
      }
  },
  function(t, e, n) {
    'use strict'
    var i = n(20),
      r = n(5),
      o = n(98),
      a = [].slice,
      s = {},
      u = function(t, e, n) {
        if (!(e in s)) {
          for (var i = [], r = 0; r < e; r++) i[r] = 'a[' + r + ']'
          s[e] = Function('F,a', 'return new F(' + i.join(',') + ')')
        }
        return s[e](t, n)
      }
    t.exports =
      Function.bind ||
      function(t) {
        var e = i(this),
          n = a.call(arguments, 1),
          s = function() {
            var i = n.concat(a.call(arguments))
            return this instanceof s ? u(e, i.length, i) : o(e, i, t)
          }
        return r(e.prototype) && (s.prototype = e.prototype), s
      }
  },
  function(t, e) {
    t.exports = function(t, e, n) {
      var i = void 0 === n
      switch (e.length) {
        case 0:
          return i ? t() : t.call(n)
        case 1:
          return i ? t(e[0]) : t.call(n, e[0])
        case 2:
          return i ? t(e[0], e[1]) : t.call(n, e[0], e[1])
        case 3:
          return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2])
        case 4:
          return i
            ? t(e[0], e[1], e[2], e[3])
            : t.call(n, e[0], e[1], e[2], e[3])
      }
      return t.apply(n, e)
    }
  },
  function(t, e, n) {
    var i = n(2).parseInt,
      r = n(41).trim,
      o = n(68),
      a = /^[-+]?0[xX]/
    t.exports =
      8 !== i(o + '08') || 22 !== i(o + '0x16')
        ? function(t, e) {
            var n = r(String(t), 3)
            return i(n, e >>> 0 || (a.test(n) ? 16 : 10))
          }
        : i
  },
  function(t, e, n) {
    var i = n(2).parseFloat,
      r = n(41).trim
    t.exports =
      1 / i(n(68) + '-0') != -1 / 0
        ? function(t) {
            var e = r(String(t), 3),
              n = i(e)
            return 0 === n && '-' == e.charAt(0) ? -0 : n
          }
        : i
  },
  function(t, e, n) {
    var i = n(25)
    t.exports = function(t, e) {
      if ('number' != typeof t && 'Number' != i(t)) throw TypeError(e)
      return +t
    }
  },
  function(t, e, n) {
    var i = n(5),
      r = Math.floor
    t.exports = function(t) {
      return !i(t) && isFinite(t) && r(t) === t
    }
  },
  function(t, e) {
    t.exports =
      Math.log1p ||
      function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
      }
  },
  function(t, e, n) {
    'use strict'
    var i = n(35),
      r = n(30),
      o = n(40),
      a = {}
    n(15)(a, n(6)('iterator'), function() {
      return this
    }),
      (t.exports = function(t, e, n) {
        ;(t.prototype = i(a, {next: r(1, n)})), o(t, e + ' Iterator')
      })
  },
  function(t, e, n) {
    var i = n(4)
    t.exports = function(t, e, n, r) {
      try {
        return r ? e(i(n)[0], n[1]) : e(n)
      } catch (e) {
        var o = t.return
        throw (void 0 !== o && i(o.call(t)), e)
      }
    }
  },
  function(t, e, n) {
    var i = n(220)
    t.exports = function(t, e) {
      return new (i(t))(e)
    }
  },
  function(t, e, n) {
    var i = n(20),
      r = n(11),
      o = n(46),
      a = n(7)
    t.exports = function(t, e, n, s, u) {
      i(e)
      var l = r(t),
        f = o(l),
        c = a(l.length),
        d = u ? c - 1 : 0,
        h = u ? -1 : 1
      if (n < 2)
        for (;;) {
          if (d in f) {
            ;(s = f[d]), (d += h)
            break
          }
          if (((d += h), u ? d < 0 : c <= d))
            throw TypeError('Reduce of empty array with no initial value')
        }
      for (; u ? d >= 0 : c > d; d += h) d in f && (s = e(s, f[d], d, l))
      return s
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(11),
      r = n(34),
      o = n(7)
    t.exports =
      [].copyWithin ||
      function(t, e) {
        var n = i(this),
          a = o(n.length),
          s = r(t, a),
          u = r(e, a),
          l = arguments.length > 2 ? arguments[2] : void 0,
          f = Math.min((void 0 === l ? a : r(l, a)) - u, a - s),
          c = 1
        for (
          u < s && s < u + f && ((c = -1), (u += f - 1), (s += f - 1));
          f-- > 0;

        )
          u in n ? (n[s] = n[u]) : delete n[s], (s += c), (u += c)
        return n
      }
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {value: e, done: !!t}
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(83)
    n(0)({target: 'RegExp', proto: !0, forced: i !== /./.exec}, {exec: i})
  },
  function(t, e, n) {
    n(9) &&
      'g' != /./g.flags &&
      n(10).f(RegExp.prototype, 'flags', {configurable: !0, get: n(55)})
  },
  function(t, e, n) {
    'use strict'
    var i,
      r,
      o,
      a,
      s = n(32),
      u = n(2),
      l = n(19),
      f = n(48),
      c = n(0),
      d = n(5),
      h = n(20),
      p = n(44),
      y = n(58),
      m = n(49),
      _ = n(85).set,
      v = n(240)(),
      g = n(113),
      b = n(241),
      S = n(59),
      T = n(114),
      w = u.TypeError,
      x = u.process,
      k = x && x.versions,
      P = (k && k.v8) || '',
      O = u.Promise,
      A = 'process' == f(x),
      E = function() {},
      C = (r = g.f),
      F = !!(function() {
        try {
          var t = O.resolve(1),
            e = ((t.constructor = {})[n(6)('species')] = function(t) {
              t(E, E)
            })
          return (
            (A || 'function' == typeof PromiseRejectionEvent) &&
            t.then(E) instanceof e &&
            0 !== P.indexOf('6.6') &&
            -1 === S.indexOf('Chrome/66')
          )
        } catch (t) {}
      })(),
      M = function(t) {
        var e
        return !(!d(t) || 'function' != typeof (e = t.then)) && e
      },
      R = function(t, e) {
        if (!t._n) {
          t._n = !0
          var n = t._c
          v(function() {
            for (
              var i = t._v,
                r = 1 == t._s,
                o = 0,
                a = function(e) {
                  var n,
                    o,
                    a,
                    s = r ? e.ok : e.fail,
                    u = e.resolve,
                    l = e.reject,
                    f = e.domain
                  try {
                    s
                      ? (r || (2 == t._h && j(t), (t._h = 1)),
                        !0 === s
                          ? (n = i)
                          : (f && f.enter(),
                            (n = s(i)),
                            f && (f.exit(), (a = !0))),
                        n === e.promise
                          ? l(w('Promise-chain cycle'))
                          : (o = M(n)) ? o.call(n, u, l) : u(n))
                      : l(i)
                  } catch (t) {
                    f && !a && f.exit(), l(t)
                  }
                };
              n.length > o;

            )
              a(n[o++])
            ;(t._c = []), (t._n = !1), e && !t._h && N(t)
          })
        }
      },
      N = function(t) {
        _.call(u, function() {
          var e,
            n,
            i,
            r = t._v,
            o = q(t)
          if (
            (o &&
              ((e = b(function() {
                A
                  ? x.emit('unhandledRejection', r, t)
                  : (n = u.onunhandledrejection)
                    ? n({promise: t, reason: r})
                    : (i = u.console) &&
                      i.error &&
                      i.error('Unhandled promise rejection', r)
              })),
              (t._h = A || q(t) ? 2 : 1)),
            (t._a = void 0),
            o && e.e)
          )
            throw e.v
        })
      },
      q = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
      },
      j = function(t) {
        _.call(u, function() {
          var e
          A
            ? x.emit('rejectionHandled', t)
            : (e = u.onrejectionhandled) && e({promise: t, reason: t._v})
        })
      },
      I = function(t) {
        var e = this
        e._d ||
          ((e._d = !0),
          ((e = e._w || e)._v = t),
          (e._s = 2),
          e._a || (e._a = e._c.slice()),
          R(e, !0))
      },
      L = function(t) {
        var e,
          n = this
        if (!n._d) {
          ;(n._d = !0), (n = n._w || n)
          try {
            if (n === t) throw w("Promise can't be resolved itself")
            ;(e = M(t))
              ? v(function() {
                  var i = {_w: n, _d: !1}
                  try {
                    e.call(t, l(L, i, 1), l(I, i, 1))
                  } catch (t) {
                    I.call(i, t)
                  }
                })
              : ((n._v = t), (n._s = 1), R(n, !1))
          } catch (t) {
            I.call({_w: n, _d: !1}, t)
          }
        }
      }
    F ||
      ((O = function(t) {
        p(this, O, 'Promise', '_h'), h(t), i.call(this)
        try {
          t(l(L, this, 1), l(I, this, 1))
        } catch (t) {
          I.call(this, t)
        }
      }),
      ((i = function(t) {
        ;(this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1)
      }).prototype = n(45)(O.prototype, {
        then: function(t, e) {
          var n = C(m(this, O))
          return (
            (n.ok = 'function' != typeof t || t),
            (n.fail = 'function' == typeof e && e),
            (n.domain = A ? x.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && R(this, !1),
            n.promise
          )
        },
        catch: function(t) {
          return this.then(void 0, t)
        }
      })),
      (o = function() {
        var t = new i()
        ;(this.promise = t),
          (this.resolve = l(L, t, 1)),
          (this.reject = l(I, t, 1))
      }),
      (g.f = C = function(t) {
        return t === O || t === a ? new o(t) : r(t)
      })),
      c(c.G + c.W + c.F * !F, {Promise: O}),
      n(40)(O, 'Promise'),
      n(43)('Promise'),
      (a = n(8).Promise),
      c(c.S + c.F * !F, 'Promise', {
        reject: function(t) {
          var e = C(this)
          return (0, e.reject)(t), e.promise
        }
      }),
      c(c.S + c.F * (s || !F), 'Promise', {
        resolve: function(t) {
          return T(s && this === a ? O : this, t)
        }
      }),
      c(
        c.S +
          c.F *
            !(
              F &&
              n(54)(function(t) {
                O.all(t).catch(E)
              })
            ),
        'Promise',
        {
          all: function(t) {
            var e = this,
              n = C(e),
              i = n.resolve,
              r = n.reject,
              o = b(function() {
                var n = [],
                  o = 0,
                  a = 1
                y(t, !1, function(t) {
                  var s = o++,
                    u = !1
                  n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                      u || ((u = !0), (n[s] = t), --a || i(n))
                    }, r)
                }),
                  --a || i(n)
              })
            return o.e && r(o.v), n.promise
          },
          race: function(t) {
            var e = this,
              n = C(e),
              i = n.reject,
              r = b(function() {
                y(t, !1, function(t) {
                  e.resolve(t).then(n.resolve, i)
                })
              })
            return r.e && i(r.v), n.promise
          }
        }
      )
  },
  function(t, e, n) {
    'use strict'
    var i = n(20)
    function r(t) {
      var e, n
      ;(this.promise = new t(function(t, i) {
        if (void 0 !== e || void 0 !== n)
          throw TypeError('Bad Promise constructor')
        ;(e = t), (n = i)
      })),
        (this.resolve = i(e)),
        (this.reject = i(n))
    }
    t.exports.f = function(t) {
      return new r(t)
    }
  },
  function(t, e, n) {
    var i = n(4),
      r = n(5),
      o = n(113)
    t.exports = function(t, e) {
      if ((i(t), r(e) && e.constructor === t)) return e
      var n = o.f(t)
      return (0, n.resolve)(e), n.promise
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(10).f,
      r = n(35),
      o = n(45),
      a = n(19),
      s = n(44),
      u = n(58),
      l = n(74),
      f = n(109),
      c = n(43),
      d = n(9),
      h = n(29).fastKey,
      p = n(39),
      y = d ? '_s' : 'size',
      m = function(t, e) {
        var n,
          i = h(e)
        if ('F' !== i) return t._i[i]
        for (n = t._f; n; n = n.n) if (n.k == e) return n
      }
    t.exports = {
      getConstructor: function(t, e, n, l) {
        var f = t(function(t, i) {
          s(t, f, e, '_i'),
            (t._t = e),
            (t._i = r(null)),
            (t._f = void 0),
            (t._l = void 0),
            (t[y] = 0),
            null != i && u(i, n, t[l], t)
        })
        return (
          o(f.prototype, {
            clear: function() {
              for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n)
                (i.r = !0), i.p && (i.p = i.p.n = void 0), delete n[i.i]
              ;(t._f = t._l = void 0), (t[y] = 0)
            },
            delete: function(t) {
              var n = p(this, e),
                i = m(n, t)
              if (i) {
                var r = i.n,
                  o = i.p
                delete n._i[i.i],
                  (i.r = !0),
                  o && (o.n = r),
                  r && (r.p = o),
                  n._f == i && (n._f = r),
                  n._l == i && (n._l = o),
                  n[y]--
              }
              return !!i
            },
            forEach: function(t) {
              p(this, e)
              for (
                var n,
                  i = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (i(n.v, n.k, this); n && n.r; ) n = n.p
            },
            has: function(t) {
              return !!m(p(this, e), t)
            }
          }),
          d &&
            i(f.prototype, 'size', {
              get: function() {
                return p(this, e)[y]
              }
            }),
          f
        )
      },
      def: function(t, e, n) {
        var i,
          r,
          o = m(t, e)
        return (
          o
            ? (o.v = n)
            : ((t._l = o = {
                i: (r = h(e, !0)),
                k: e,
                v: n,
                p: (i = t._l),
                n: void 0,
                r: !1
              }),
              t._f || (t._f = o),
              i && (i.n = o),
              t[y]++,
              'F' !== r && (t._i[r] = o)),
          t
        )
      },
      getEntry: m,
      setStrong: function(t, e, n) {
        l(
          t,
          e,
          function(t, n) {
            ;(this._t = p(t, e)), (this._k = n), (this._l = void 0)
          },
          function() {
            for (var t = this._k, e = this._l; e && e.r; ) e = e.p
            return this._t && (this._l = e = e ? e.n : this._t._f)
              ? f(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v])
              : ((this._t = void 0), f(1))
          },
          n ? 'entries' : 'values',
          !n,
          !0
        ),
          c(e)
      }
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(45),
      r = n(29).getWeak,
      o = n(4),
      a = n(5),
      s = n(44),
      u = n(58),
      l = n(24),
      f = n(14),
      c = n(39),
      d = l(5),
      h = l(6),
      p = 0,
      y = function(t) {
        return t._l || (t._l = new m())
      },
      m = function() {
        this.a = []
      },
      _ = function(t, e) {
        return d(t.a, function(t) {
          return t[0] === e
        })
      }
    ;(m.prototype = {
      get: function(t) {
        var e = _(this, t)
        if (e) return e[1]
      },
      has: function(t) {
        return !!_(this, t)
      },
      set: function(t, e) {
        var n = _(this, t)
        n ? (n[1] = e) : this.a.push([t, e])
      },
      delete: function(t) {
        var e = h(this.a, function(e) {
          return e[0] === t
        })
        return ~e && this.a.splice(e, 1), !!~e
      }
    }),
      (t.exports = {
        getConstructor: function(t, e, n, o) {
          var l = t(function(t, i) {
            s(t, l, e, '_i'),
              (t._t = e),
              (t._i = p++),
              (t._l = void 0),
              null != i && u(i, n, t[o], t)
          })
          return (
            i(l.prototype, {
              delete: function(t) {
                if (!a(t)) return !1
                var n = r(t)
                return !0 === n
                  ? y(c(this, e)).delete(t)
                  : n && f(n, this._i) && delete n[this._i]
              },
              has: function(t) {
                if (!a(t)) return !1
                var n = r(t)
                return !0 === n ? y(c(this, e)).has(t) : n && f(n, this._i)
              }
            }),
            l
          )
        },
        def: function(t, e, n) {
          var i = r(o(e), !0)
          return !0 === i ? y(t).set(e, n) : (i[t._i] = n), t
        },
        ufstore: y
      })
  },
  function(t, e, n) {
    var i = n(21),
      r = n(7)
    t.exports = function(t) {
      if (void 0 === t) return 0
      var e = i(t),
        n = r(e)
      if (e !== n) throw RangeError('Wrong length!')
      return n
    }
  },
  function(t, e, n) {
    var i = n(36),
      r = n(52),
      o = n(4),
      a = n(2).Reflect
    t.exports =
      (a && a.ownKeys) ||
      function(t) {
        var e = i.f(o(t)),
          n = r.f
        return n ? e.concat(n(t)) : e
      }
  },
  function(t, e, n) {
    var i = n(7),
      r = n(70),
      o = n(26)
    t.exports = function(t, e, n, a) {
      var s = String(o(t)),
        u = s.length,
        l = void 0 === n ? ' ' : String(n),
        f = i(e)
      if (f <= u || '' == l) return s
      var c = f - u,
        d = r.call(l, Math.ceil(c / l.length))
      return d.length > c && (d = d.slice(0, c)), a ? d + s : s + d
    }
  },
  function(t, e, n) {
    var i = n(9),
      r = n(33),
      o = n(16),
      a = n(47).f
    t.exports = function(t) {
      return function(e) {
        for (var n, s = o(e), u = r(s), l = u.length, f = 0, c = []; l > f; )
          (n = u[f++]), (i && !a.call(s, n)) || c.push(t ? [n, s[n]] : s[n])
        return c
      }
    }
  },
  function(t, e) {
    var n = (t.exports = {version: '2.6.9'})
    'number' == typeof __e && (__e = n)
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  },
  function(t, e, n) {
    'use strict'
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var i =
        Object.getOwnPropertySymbols,
      r = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable
    function a(t) {
      if (null == t)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        )
      return Object(t)
    }
    t.exports = (function() {
      try {
        if (!Object.assign) return !1
        var t = new String('abc')
        if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1
        for (var e = {}, n = 0; n < 10; n++) e['_' + String.fromCharCode(n)] = n
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(e)
            .map(function(t) {
              return e[t]
            })
            .join('')
        )
          return !1
        var i = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(t) {
            i[t] = t
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, i)).join('')
        )
      } catch (t) {
        return !1
      }
    })()
      ? Object.assign
      : function(t, e) {
          for (var n, s, u = a(t), l = 1; l < arguments.length; l++) {
            for (var f in (n = Object(arguments[l])))
              r.call(n, f) && (u[f] = n[f])
            if (i) {
              s = i(n)
              for (var c = 0; c < s.length; c++)
                o.call(n, s[c]) && (u[s[c]] = n[s[c]])
            }
          }
          return u
        }
  },
  function(t, e, n) {
    'use strict'
    !(function t() {
      if (
        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (t) {
          console.error(t)
        }
    })(),
      (t.exports = n(313))
  },
  function(t, e, n) {
    n(126), (t.exports = n(317))
  },
  function(t, e, n) {
    'use strict'
    n(127)
    var i,
      r = (i = n(299)) && i.__esModule ? i : {default: i}
    r.default._babelPolyfill &&
      'undefined' != typeof console &&
      console.warn &&
      console.warn(
        '@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.'
      ),
      (r.default._babelPolyfill = !0)
  },
  function(t, e, n) {
    'use strict'
    n(128),
      n(271),
      n(273),
      n(276),
      n(278),
      n(280),
      n(282),
      n(284),
      n(286),
      n(288),
      n(290),
      n(292),
      n(294),
      n(298)
  },
  function(t, e, n) {
    n(129),
      n(132),
      n(133),
      n(134),
      n(135),
      n(136),
      n(137),
      n(138),
      n(139),
      n(140),
      n(141),
      n(142),
      n(143),
      n(144),
      n(145),
      n(146),
      n(147),
      n(148),
      n(149),
      n(150),
      n(151),
      n(152),
      n(153),
      n(154),
      n(155),
      n(156),
      n(157),
      n(158),
      n(159),
      n(160),
      n(161),
      n(162),
      n(163),
      n(164),
      n(165),
      n(166),
      n(167),
      n(168),
      n(169),
      n(170),
      n(171),
      n(172),
      n(173),
      n(175),
      n(176),
      n(177),
      n(178),
      n(179),
      n(180),
      n(181),
      n(182),
      n(183),
      n(184),
      n(185),
      n(186),
      n(187),
      n(188),
      n(189),
      n(190),
      n(191),
      n(192),
      n(193),
      n(194),
      n(195),
      n(196),
      n(197),
      n(198),
      n(199),
      n(200),
      n(201),
      n(202),
      n(203),
      n(204),
      n(205),
      n(206),
      n(207),
      n(208),
      n(210),
      n(211),
      n(213),
      n(214),
      n(215),
      n(216),
      n(217),
      n(218),
      n(219),
      n(221),
      n(222),
      n(223),
      n(224),
      n(225),
      n(226),
      n(227),
      n(228),
      n(229),
      n(230),
      n(231),
      n(232),
      n(233),
      n(82),
      n(234),
      n(110),
      n(235),
      n(111),
      n(236),
      n(237),
      n(238),
      n(239),
      n(112),
      n(242),
      n(243),
      n(244),
      n(245),
      n(246),
      n(247),
      n(248),
      n(249),
      n(250),
      n(251),
      n(252),
      n(253),
      n(254),
      n(255),
      n(256),
      n(257),
      n(258),
      n(259),
      n(260),
      n(261),
      n(262),
      n(263),
      n(264),
      n(265),
      n(266),
      n(267),
      n(268),
      n(269),
      n(270),
      (t.exports = n(8))
  },
  function(t, e, n) {
    'use strict'
    var i = n(2),
      r = n(14),
      o = n(9),
      a = n(0),
      s = n(12),
      u = n(29).KEY,
      l = n(3),
      f = n(50),
      c = n(40),
      d = n(31),
      h = n(6),
      p = n(63),
      y = n(91),
      m = n(131),
      _ = n(53),
      v = n(4),
      g = n(5),
      b = n(11),
      S = n(16),
      T = n(28),
      w = n(30),
      x = n(35),
      k = n(94),
      P = n(22),
      O = n(52),
      A = n(10),
      E = n(33),
      C = P.f,
      F = A.f,
      M = k.f,
      R = i.Symbol,
      N = i.JSON,
      q = N && N.stringify,
      j = h('_hidden'),
      I = h('toPrimitive'),
      L = {}.propertyIsEnumerable,
      D = f('symbol-registry'),
      B = f('symbols'),
      U = f('op-symbols'),
      V = Object.prototype,
      z = 'function' == typeof R && !!O.f,
      W = i.QObject,
      G = !W || !W.prototype || !W.prototype.findChild,
      Q =
        o &&
        l(function() {
          return (
            7 !=
            x(
              F({}, 'a', {
                get: function() {
                  return F(this, 'a', {value: 7}).a
                }
              })
            ).a
          )
        })
          ? function(t, e, n) {
              var i = C(V, e)
              i && delete V[e], F(t, e, n), i && t !== V && F(V, e, i)
            }
          : F,
      H = function(t) {
        var e = (B[t] = x(R.prototype))
        return (e._k = t), e
      },
      $ =
        z && 'symbol' == typeof R.iterator
          ? function(t) {
              return 'symbol' == typeof t
            }
          : function(t) {
              return t instanceof R
            },
      X = function(t, e, n) {
        return (
          t === V && X(U, e, n),
          v(t),
          (e = T(e, !0)),
          v(n),
          r(B, e)
            ? (n.enumerable
                ? (r(t, j) && t[j][e] && (t[j][e] = !1),
                  (n = x(n, {enumerable: w(0, !1)})))
                : (r(t, j) || F(t, j, w(1, {})), (t[j][e] = !0)),
              Q(t, e, n))
            : F(t, e, n)
        )
      },
      Y = function(t, e) {
        v(t)
        for (var n, i = m((e = S(e))), r = 0, o = i.length; o > r; )
          X(t, (n = i[r++]), e[n])
        return t
      },
      K = function(t) {
        var e = L.call(this, (t = T(t, !0)))
        return (
          !(this === V && r(B, t) && !r(U, t)) &&
          (!(e || !r(this, t) || !r(B, t) || (r(this, j) && this[j][t])) || e)
        )
      },
      Z = function(t, e) {
        if (((t = S(t)), (e = T(e, !0)), t !== V || !r(B, e) || r(U, e))) {
          var n = C(t, e)
          return (
            !n || !r(B, e) || (r(t, j) && t[j][e]) || (n.enumerable = !0), n
          )
        }
      },
      J = function(t) {
        for (var e, n = M(S(t)), i = [], o = 0; n.length > o; )
          r(B, (e = n[o++])) || e == j || e == u || i.push(e)
        return i
      },
      tt = function(t) {
        for (
          var e, n = t === V, i = M(n ? U : S(t)), o = [], a = 0;
          i.length > a;

        )
          !r(B, (e = i[a++])) || (n && !r(V, e)) || o.push(B[e])
        return o
      }
    z ||
      (s(
        (R = function() {
          if (this instanceof R) throw TypeError('Symbol is not a constructor!')
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
              this === V && e.call(U, n),
                r(this, j) && r(this[j], t) && (this[j][t] = !1),
                Q(this, t, w(1, n))
            }
          return o && G && Q(V, t, {configurable: !0, set: e}), H(t)
        }).prototype,
        'toString',
        function() {
          return this._k
        }
      ),
      (P.f = Z),
      (A.f = X),
      (n(36).f = k.f = J),
      (n(47).f = K),
      (O.f = tt),
      o && !n(32) && s(V, 'propertyIsEnumerable', K, !0),
      (p.f = function(t) {
        return H(h(t))
      })),
      a(a.G + a.W + a.F * !z, {Symbol: R})
    for (
      var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
          ','
        ),
        nt = 0;
      et.length > nt;

    )
      h(et[nt++])
    for (var it = E(h.store), rt = 0; it.length > rt; ) y(it[rt++])
    a(a.S + a.F * !z, 'Symbol', {
      for: function(t) {
        return r(D, (t += '')) ? D[t] : (D[t] = R(t))
      },
      keyFor: function(t) {
        if (!$(t)) throw TypeError(t + ' is not a symbol!')
        for (var e in D) if (D[e] === t) return e
      },
      useSetter: function() {
        G = !0
      },
      useSimple: function() {
        G = !1
      }
    }),
      a(a.S + a.F * !z, 'Object', {
        create: function(t, e) {
          return void 0 === e ? x(t) : Y(x(t), e)
        },
        defineProperty: X,
        defineProperties: Y,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: tt
      })
    var ot = l(function() {
      O.f(1)
    })
    a(a.S + a.F * ot, 'Object', {
      getOwnPropertySymbols: function(t) {
        return O.f(b(t))
      }
    }),
      N &&
        a(
          a.S +
            a.F *
              (!z ||
                l(function() {
                  var t = R()
                  return (
                    '[null]' != q([t]) ||
                    '{}' != q({a: t}) ||
                    '{}' != q(Object(t))
                  )
                })),
          'JSON',
          {
            stringify: function(t) {
              for (var e, n, i = [t], r = 1; arguments.length > r; )
                i.push(arguments[r++])
              if (((n = e = i[1]), (g(e) || void 0 !== t) && !$(t)))
                return (
                  _(e) ||
                    (e = function(t, e) {
                      if (
                        ('function' == typeof n && (e = n.call(this, t, e)),
                        !$(e))
                      )
                        return e
                    }),
                  (i[1] = e),
                  q.apply(N, i)
                )
            }
          }
        ),
      R.prototype[I] || n(15)(R.prototype, I, R.prototype.valueOf),
      c(R, 'Symbol'),
      c(Math, 'Math', !0),
      c(i.JSON, 'JSON', !0)
  },
  function(t, e, n) {
    t.exports = n(50)('native-function-to-string', Function.toString)
  },
  function(t, e, n) {
    var i = n(33),
      r = n(52),
      o = n(47)
    t.exports = function(t) {
      var e = i(t),
        n = r.f
      if (n)
        for (var a, s = n(t), u = o.f, l = 0; s.length > l; )
          u.call(t, (a = s[l++])) && e.push(a)
      return e
    }
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Object', {create: n(35)})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S + i.F * !n(9), 'Object', {defineProperty: n(10).f})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S + i.F * !n(9), 'Object', {defineProperties: n(93)})
  },
  function(t, e, n) {
    var i = n(16),
      r = n(22).f
    n(23)('getOwnPropertyDescriptor', function() {
      return function(t, e) {
        return r(i(t), e)
      }
    })
  },
  function(t, e, n) {
    var i = n(11),
      r = n(37)
    n(23)('getPrototypeOf', function() {
      return function(t) {
        return r(i(t))
      }
    })
  },
  function(t, e, n) {
    var i = n(11),
      r = n(33)
    n(23)('keys', function() {
      return function(t) {
        return r(i(t))
      }
    })
  },
  function(t, e, n) {
    n(23)('getOwnPropertyNames', function() {
      return n(94).f
    })
  },
  function(t, e, n) {
    var i = n(5),
      r = n(29).onFreeze
    n(23)('freeze', function(t) {
      return function(e) {
        return t && i(e) ? t(r(e)) : e
      }
    })
  },
  function(t, e, n) {
    var i = n(5),
      r = n(29).onFreeze
    n(23)('seal', function(t) {
      return function(e) {
        return t && i(e) ? t(r(e)) : e
      }
    })
  },
  function(t, e, n) {
    var i = n(5),
      r = n(29).onFreeze
    n(23)('preventExtensions', function(t) {
      return function(e) {
        return t && i(e) ? t(r(e)) : e
      }
    })
  },
  function(t, e, n) {
    var i = n(5)
    n(23)('isFrozen', function(t) {
      return function(e) {
        return !i(e) || (!!t && t(e))
      }
    })
  },
  function(t, e, n) {
    var i = n(5)
    n(23)('isSealed', function(t) {
      return function(e) {
        return !i(e) || (!!t && t(e))
      }
    })
  },
  function(t, e, n) {
    var i = n(5)
    n(23)('isExtensible', function(t) {
      return function(e) {
        return !!i(e) && (!t || t(e))
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S + i.F, 'Object', {assign: n(95)})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Object', {is: n(96)})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Object', {setPrototypeOf: n(67).set})
  },
  function(t, e, n) {
    'use strict'
    var i = n(48),
      r = {}
    ;(r[n(6)('toStringTag')] = 'z'),
      r + '' != '[object z]' &&
        n(12)(
          Object.prototype,
          'toString',
          function() {
            return '[object ' + i(this) + ']'
          },
          !0
        )
  },
  function(t, e, n) {
    var i = n(0)
    i(i.P, 'Function', {bind: n(97)})
  },
  function(t, e, n) {
    var i = n(10).f,
      r = Function.prototype,
      o = /^\s*function ([^ (]*)/
    'name' in r ||
      (n(9) &&
        i(r, 'name', {
          configurable: !0,
          get: function() {
            try {
              return ('' + this).match(o)[1]
            } catch (t) {
              return ''
            }
          }
        }))
  },
  function(t, e, n) {
    'use strict'
    var i = n(5),
      r = n(37),
      o = n(6)('hasInstance'),
      a = Function.prototype
    o in a ||
      n(10).f(a, o, {
        value: function(t) {
          if ('function' != typeof this || !i(t)) return !1
          if (!i(this.prototype)) return t instanceof this
          for (; (t = r(t)); ) if (this.prototype === t) return !0
          return !1
        }
      })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(99)
    i(i.G + i.F * (parseInt != r), {parseInt: r})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(100)
    i(i.G + i.F * (parseFloat != r), {parseFloat: r})
  },
  function(t, e, n) {
    'use strict'
    var i = n(2),
      r = n(14),
      o = n(25),
      a = n(69),
      s = n(28),
      u = n(3),
      l = n(36).f,
      f = n(22).f,
      c = n(10).f,
      d = n(41).trim,
      h = i.Number,
      p = h,
      y = h.prototype,
      m = 'Number' == o(n(35)(y)),
      _ = 'trim' in String.prototype,
      v = function(t) {
        var e = s(t, !1)
        if ('string' == typeof e && e.length > 2) {
          var n,
            i,
            r,
            o = (e = _ ? e.trim() : d(e, 3)).charCodeAt(0)
          if (43 === o || 45 === o) {
            if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
          } else if (48 === o) {
            switch (e.charCodeAt(1)) {
              case 66:
              case 98:
                ;(i = 2), (r = 49)
                break
              case 79:
              case 111:
                ;(i = 8), (r = 55)
                break
              default:
                return +e
            }
            for (var a, u = e.slice(2), l = 0, f = u.length; l < f; l++)
              if ((a = u.charCodeAt(l)) < 48 || a > r) return NaN
            return parseInt(u, i)
          }
        }
        return +e
      }
    if (!h(' 0o1') || !h('0b1') || h('+0x1')) {
      h = function(t) {
        var e = arguments.length < 1 ? 0 : t,
          n = this
        return n instanceof h &&
          (m
            ? u(function() {
                y.valueOf.call(n)
              })
            : 'Number' != o(n))
          ? a(new p(v(e)), n, h)
          : v(e)
      }
      for (
        var g,
          b = n(9)
            ? l(p)
            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                ','
              ),
          S = 0;
        b.length > S;
        S++
      )
        r(p, (g = b[S])) && !r(h, g) && c(h, g, f(p, g))
      ;(h.prototype = y), (y.constructor = h), n(12)(i, 'Number', h)
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(21),
      o = n(101),
      a = n(70),
      s = (1).toFixed,
      u = Math.floor,
      l = [0, 0, 0, 0, 0, 0],
      f = 'Number.toFixed: incorrect invocation!',
      c = function(t, e) {
        for (var n = -1, i = e; ++n < 6; )
          (i += t * l[n]), (l[n] = i % 1e7), (i = u(i / 1e7))
      },
      d = function(t) {
        for (var e = 6, n = 0; --e >= 0; )
          (n += l[e]), (l[e] = u(n / t)), (n = (n % t) * 1e7)
      },
      h = function() {
        for (var t = 6, e = ''; --t >= 0; )
          if ('' !== e || 0 === t || 0 !== l[t]) {
            var n = String(l[t])
            e = '' === e ? n : e + a.call('0', 7 - n.length) + n
          }
        return e
      },
      p = function(t, e, n) {
        return 0 === e
          ? n
          : e % 2 == 1 ? p(t, e - 1, n * t) : p(t * t, e / 2, n)
      }
    i(
      i.P +
        i.F *
          ((!!s &&
            ('0.000' !== (8e-5).toFixed(3) ||
              '1' !== (0.9).toFixed(0) ||
              '1.25' !== (1.255).toFixed(2) ||
              '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
            !n(3)(function() {
              s.call({})
            })),
      'Number',
      {
        toFixed: function(t) {
          var e,
            n,
            i,
            s,
            u = o(this, f),
            l = r(t),
            y = '',
            m = '0'
          if (l < 0 || l > 20) throw RangeError(f)
          if (u != u) return 'NaN'
          if (u <= -1e21 || u >= 1e21) return String(u)
          if ((u < 0 && ((y = '-'), (u = -u)), u > 1e-21))
            if (
              ((n =
                (e =
                  (function(t) {
                    for (var e = 0, n = t; n >= 4096; ) (e += 12), (n /= 4096)
                    for (; n >= 2; ) (e += 1), (n /= 2)
                    return e
                  })(u * p(2, 69, 1)) - 69) < 0
                  ? u * p(2, -e, 1)
                  : u / p(2, e, 1)),
              (n *= 4503599627370496),
              (e = 52 - e) > 0)
            ) {
              for (c(0, n), i = l; i >= 7; ) c(1e7, 0), (i -= 7)
              for (c(p(10, i, 1), 0), i = e - 1; i >= 23; )
                d(1 << 23), (i -= 23)
              d(1 << i), c(1, 1), d(2), (m = h())
            } else c(0, n), c(1 << -e, 0), (m = h() + a.call('0', l))
          return (m =
            l > 0
              ? y +
                ((s = m.length) <= l
                  ? '0.' + a.call('0', l - s) + m
                  : m.slice(0, s - l) + '.' + m.slice(s - l))
              : y + m)
        }
      }
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(3),
      o = n(101),
      a = (1).toPrecision
    i(
      i.P +
        i.F *
          (r(function() {
            return '1' !== a.call(1, void 0)
          }) ||
            !r(function() {
              a.call({})
            })),
      'Number',
      {
        toPrecision: function(t) {
          var e = o(this, 'Number#toPrecision: incorrect invocation!')
          return void 0 === t ? a.call(e) : a.call(e, t)
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Number', {EPSILON: Math.pow(2, -52)})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(2).isFinite
    i(i.S, 'Number', {
      isFinite: function(t) {
        return 'number' == typeof t && r(t)
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Number', {isInteger: n(102)})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Number', {
      isNaN: function(t) {
        return t != t
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(102),
      o = Math.abs
    i(i.S, 'Number', {
      isSafeInteger: function(t) {
        return r(t) && o(t) <= 9007199254740991
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Number', {MAX_SAFE_INTEGER: 9007199254740991})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Number', {MIN_SAFE_INTEGER: -9007199254740991})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(100)
    i(i.S + i.F * (Number.parseFloat != r), 'Number', {parseFloat: r})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(99)
    i(i.S + i.F * (Number.parseInt != r), 'Number', {parseInt: r})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(103),
      o = Math.sqrt,
      a = Math.acosh
    i(
      i.S +
        i.F *
          !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0),
      'Math',
      {
        acosh: function(t) {
          return (t = +t) < 1
            ? NaN
            : t > 94906265.62425156
              ? Math.log(t) + Math.LN2
              : r(t - 1 + o(t - 1) * o(t + 1))
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0),
      r = Math.asinh
    i(i.S + i.F * !(r && 1 / r(0) > 0), 'Math', {
      asinh: function t(e) {
        return isFinite((e = +e)) && 0 != e
          ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1))
          : e
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = Math.atanh
    i(i.S + i.F * !(r && 1 / r(-0) < 0), 'Math', {
      atanh: function(t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(71)
    i(i.S, 'Math', {
      cbrt: function(t) {
        return r((t = +t)) * Math.pow(Math.abs(t), 1 / 3)
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {
      clz32: function(t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = Math.exp
    i(i.S, 'Math', {
      cosh: function(t) {
        return (r((t = +t)) + r(-t)) / 2
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(72)
    i(i.S + i.F * (r != Math.expm1), 'Math', {expm1: r})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {fround: n(174)})
  },
  function(t, e, n) {
    var i = n(71),
      r = Math.pow,
      o = r(2, -52),
      a = r(2, -23),
      s = r(2, 127) * (2 - a),
      u = r(2, -126)
    t.exports =
      Math.fround ||
      function(t) {
        var e,
          n,
          r = Math.abs(t),
          l = i(t)
        return r < u
          ? l * (r / u / a + 1 / o - 1 / o) * u * a
          : (n = (e = (1 + a / o) * r) - (e - r)) > s || n != n
            ? l * (1 / 0)
            : l * n
      }
  },
  function(t, e, n) {
    var i = n(0),
      r = Math.abs
    i(i.S, 'Math', {
      hypot: function(t, e) {
        for (var n, i, o = 0, a = 0, s = arguments.length, u = 0; a < s; )
          u < (n = r(arguments[a++]))
            ? ((o = o * (i = u / n) * i + 1), (u = n))
            : (o += n > 0 ? (i = n / u) * i : n)
        return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = Math.imul
    i(
      i.S +
        i.F *
          n(3)(function() {
            return -5 != r(4294967295, 5) || 2 != r.length
          }),
      'Math',
      {
        imul: function(t, e) {
          var n = +t,
            i = +e,
            r = 65535 & n,
            o = 65535 & i
          return (
            0 |
            (r * o +
              ((((65535 & (n >>> 16)) * o + r * (65535 & (i >>> 16))) << 16) >>>
                0))
          )
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {
      log10: function(t) {
        return Math.log(t) * Math.LOG10E
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {log1p: n(103)})
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {
      log2: function(t) {
        return Math.log(t) / Math.LN2
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {sign: n(71)})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(72),
      o = Math.exp
    i(
      i.S +
        i.F *
          n(3)(function() {
            return -2e-17 != !Math.sinh(-2e-17)
          }),
      'Math',
      {
        sinh: function(t) {
          return Math.abs((t = +t)) < 1
            ? (r(t) - r(-t)) / 2
            : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0),
      r = n(72),
      o = Math.exp
    i(i.S, 'Math', {
      tanh: function(t) {
        var e = r((t = +t)),
          n = r(-t)
        return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Math', {
      trunc: function(t) {
        return (t > 0 ? Math.floor : Math.ceil)(t)
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(34),
      o = String.fromCharCode,
      a = String.fromCodePoint
    i(i.S + i.F * (!!a && 1 != a.length), 'String', {
      fromCodePoint: function(t) {
        for (var e, n = [], i = arguments.length, a = 0; i > a; ) {
          if (((e = +arguments[a++]), r(e, 1114111) !== e))
            throw RangeError(e + ' is not a valid code point')
          n.push(
            e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320)
          )
        }
        return n.join('')
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(16),
      o = n(7)
    i(i.S, 'String', {
      raw: function(t) {
        for (
          var e = r(t.raw),
            n = o(e.length),
            i = arguments.length,
            a = [],
            s = 0;
          n > s;

        )
          a.push(String(e[s++])), s < i && a.push(String(arguments[s]))
        return a.join('')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(41)('trim', function(t) {
      return function() {
        return t(this, 3)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(73)(!0)
    n(74)(
      String,
      'String',
      function(t) {
        ;(this._t = String(t)), (this._i = 0)
      },
      function() {
        var t,
          e = this._t,
          n = this._i
        return n >= e.length
          ? {value: void 0, done: !0}
          : ((t = i(e, n)), (this._i += t.length), {value: t, done: !1})
      }
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(73)(!1)
    i(i.P, 'String', {
      codePointAt: function(t) {
        return r(this, t)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(7),
      o = n(75),
      a = ''.endsWith
    i(i.P + i.F * n(77)('endsWith'), 'String', {
      endsWith: function(t) {
        var e = o(this, t, 'endsWith'),
          n = arguments.length > 1 ? arguments[1] : void 0,
          i = r(e.length),
          s = void 0 === n ? i : Math.min(r(n), i),
          u = String(t)
        return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(75)
    i(i.P + i.F * n(77)('includes'), 'String', {
      includes: function(t) {
        return !!~r(this, t, 'includes').indexOf(
          t,
          arguments.length > 1 ? arguments[1] : void 0
        )
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.P, 'String', {repeat: n(70)})
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(7),
      o = n(75),
      a = ''.startsWith
    i(i.P + i.F * n(77)('startsWith'), 'String', {
      startsWith: function(t) {
        var e = o(this, t, 'startsWith'),
          n = r(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)
          ),
          i = String(t)
        return a ? a.call(e, i, n) : e.slice(n, n + i.length) === i
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('anchor', function(t) {
      return function(e) {
        return t(this, 'a', 'name', e)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('big', function(t) {
      return function() {
        return t(this, 'big', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('blink', function(t) {
      return function() {
        return t(this, 'blink', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('bold', function(t) {
      return function() {
        return t(this, 'b', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('fixed', function(t) {
      return function() {
        return t(this, 'tt', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('fontcolor', function(t) {
      return function(e) {
        return t(this, 'font', 'color', e)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('fontsize', function(t) {
      return function(e) {
        return t(this, 'font', 'size', e)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('italics', function(t) {
      return function() {
        return t(this, 'i', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('link', function(t) {
      return function(e) {
        return t(this, 'a', 'href', e)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('small', function(t) {
      return function() {
        return t(this, 'small', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('strike', function(t) {
      return function() {
        return t(this, 'strike', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('sub', function(t) {
      return function() {
        return t(this, 'sub', '', '')
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(13)('sup', function(t) {
      return function() {
        return t(this, 'sup', '', '')
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Date', {
      now: function() {
        return new Date().getTime()
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(11),
      o = n(28)
    i(
      i.P +
        i.F *
          n(3)(function() {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function() {
                    return 1
                  }
                })
            )
          }),
      'Date',
      {
        toJSON: function(t) {
          var e = r(this),
            n = o(e)
          return 'number' != typeof n || isFinite(n) ? e.toISOString() : null
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0),
      r = n(209)
    i(i.P + i.F * (Date.prototype.toISOString !== r), 'Date', {toISOString: r})
  },
  function(t, e, n) {
    'use strict'
    var i = n(3),
      r = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      a = function(t) {
        return t > 9 ? t : '0' + t
      }
    t.exports =
      i(function() {
        return '0385-07-25T07:06:39.999Z' != o.call(new Date(-5e13 - 1))
      }) ||
      !i(function() {
        o.call(new Date(NaN))
      })
        ? function() {
            if (!isFinite(r.call(this))) throw RangeError('Invalid time value')
            var t = this,
              e = t.getUTCFullYear(),
              n = t.getUTCMilliseconds(),
              i = e < 0 ? '-' : e > 9999 ? '+' : ''
            return (
              i +
              ('00000' + Math.abs(e)).slice(i ? -6 : -4) +
              '-' +
              a(t.getUTCMonth() + 1) +
              '-' +
              a(t.getUTCDate()) +
              'T' +
              a(t.getUTCHours()) +
              ':' +
              a(t.getUTCMinutes()) +
              ':' +
              a(t.getUTCSeconds()) +
              '.' +
              (n > 99 ? n : '0' + a(n)) +
              'Z'
            )
          }
        : o
  },
  function(t, e, n) {
    var i = Date.prototype,
      r = i.toString,
      o = i.getTime
    new Date(NaN) + '' != 'Invalid Date' &&
      n(12)(i, 'toString', function() {
        var t = o.call(this)
        return t == t ? r.call(this) : 'Invalid Date'
      })
  },
  function(t, e, n) {
    var i = n(6)('toPrimitive'),
      r = Date.prototype
    i in r || n(15)(r, i, n(212))
  },
  function(t, e, n) {
    'use strict'
    var i = n(4),
      r = n(28)
    t.exports = function(t) {
      if ('string' !== t && 'number' !== t && 'default' !== t)
        throw TypeError('Incorrect hint')
      return r(i(this), 'number' != t)
    }
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Array', {isArray: n(53)})
  },
  function(t, e, n) {
    'use strict'
    var i = n(19),
      r = n(0),
      o = n(11),
      a = n(105),
      s = n(78),
      u = n(7),
      l = n(79),
      f = n(80)
    r(
      r.S +
        r.F *
          !n(54)(function(t) {
            Array.from(t)
          }),
      'Array',
      {
        from: function(t) {
          var e,
            n,
            r,
            c,
            d = o(t),
            h = 'function' == typeof this ? this : Array,
            p = arguments.length,
            y = p > 1 ? arguments[1] : void 0,
            m = void 0 !== y,
            _ = 0,
            v = f(d)
          if (
            (m && (y = i(y, p > 2 ? arguments[2] : void 0, 2)),
            null == v || (h == Array && s(v)))
          )
            for (n = new h((e = u(d.length))); e > _; _++)
              l(n, _, m ? y(d[_], _) : d[_])
          else
            for (c = v.call(d), n = new h(); !(r = c.next()).done; _++)
              l(n, _, m ? a(c, y, [r.value, _], !0) : r.value)
          return (n.length = _), n
        }
      }
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(79)
    i(
      i.S +
        i.F *
          n(3)(function() {
            function t() {}
            return !(Array.of.call(t) instanceof t)
          }),
      'Array',
      {
        of: function() {
          for (
            var t = 0,
              e = arguments.length,
              n = new ('function' == typeof this ? this : Array)(e);
            e > t;

          )
            r(n, t, arguments[t++])
          return (n.length = e), n
        }
      }
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(16),
      o = [].join
    i(i.P + i.F * (n(46) != Object || !n(18)(o)), 'Array', {
      join: function(t) {
        return o.call(r(this), void 0 === t ? ',' : t)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(66),
      o = n(25),
      a = n(34),
      s = n(7),
      u = [].slice
    i(
      i.P +
        i.F *
          n(3)(function() {
            r && u.call(r)
          }),
      'Array',
      {
        slice: function(t, e) {
          var n = s(this.length),
            i = o(this)
          if (((e = void 0 === e ? n : e), 'Array' == i))
            return u.call(this, t, e)
          for (
            var r = a(t, n), l = a(e, n), f = s(l - r), c = new Array(f), d = 0;
            d < f;
            d++
          )
            c[d] = 'String' == i ? this.charAt(r + d) : this[r + d]
          return c
        }
      }
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(20),
      o = n(11),
      a = n(3),
      s = [].sort,
      u = [1, 2, 3]
    i(
      i.P +
        i.F *
          (a(function() {
            u.sort(void 0)
          }) ||
            !a(function() {
              u.sort(null)
            }) ||
            !n(18)(s)),
      'Array',
      {
        sort: function(t) {
          return void 0 === t ? s.call(o(this)) : s.call(o(this), r(t))
        }
      }
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(0),
      o = n(18)([].forEach, !0)
    i(i.P + i.F * !o, 'Array', {
      forEach: function(t) {
        return r(this, t, arguments[1])
      }
    })
  },
  function(t, e, n) {
    var i = n(5),
      r = n(53),
      o = n(6)('species')
    t.exports = function(t) {
      var e
      return (
        r(t) &&
          ('function' != typeof (e = t.constructor) ||
            (e !== Array && !r(e.prototype)) ||
            (e = void 0),
          i(e) && null === (e = e[o]) && (e = void 0)),
        void 0 === e ? Array : e
      )
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(1)
    i(i.P + i.F * !n(18)([].map, !0), 'Array', {
      map: function(t) {
        return r(this, t, arguments[1])
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(2)
    i(i.P + i.F * !n(18)([].filter, !0), 'Array', {
      filter: function(t) {
        return r(this, t, arguments[1])
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(3)
    i(i.P + i.F * !n(18)([].some, !0), 'Array', {
      some: function(t) {
        return r(this, t, arguments[1])
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(4)
    i(i.P + i.F * !n(18)([].every, !0), 'Array', {
      every: function(t) {
        return r(this, t, arguments[1])
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(107)
    i(i.P + i.F * !n(18)([].reduce, !0), 'Array', {
      reduce: function(t) {
        return r(this, t, arguments.length, arguments[1], !1)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(107)
    i(i.P + i.F * !n(18)([].reduceRight, !0), 'Array', {
      reduceRight: function(t) {
        return r(this, t, arguments.length, arguments[1], !0)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(51)(!1),
      o = [].indexOf,
      a = !!o && 1 / [1].indexOf(1, -0) < 0
    i(i.P + i.F * (a || !n(18)(o)), 'Array', {
      indexOf: function(t) {
        return a ? o.apply(this, arguments) || 0 : r(this, t, arguments[1])
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(16),
      o = n(21),
      a = n(7),
      s = [].lastIndexOf,
      u = !!s && 1 / [1].lastIndexOf(1, -0) < 0
    i(i.P + i.F * (u || !n(18)(s)), 'Array', {
      lastIndexOf: function(t) {
        if (u) return s.apply(this, arguments) || 0
        var e = r(this),
          n = a(e.length),
          i = n - 1
        for (
          arguments.length > 1 && (i = Math.min(i, o(arguments[1]))),
            i < 0 && (i = n + i);
          i >= 0;
          i--
        )
          if (i in e && e[i] === t) return i || 0
        return -1
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.P, 'Array', {copyWithin: n(108)}), n(38)('copyWithin')
  },
  function(t, e, n) {
    var i = n(0)
    i(i.P, 'Array', {fill: n(81)}), n(38)('fill')
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(5),
      o = !0
    'find' in [] &&
      Array(1).find(function() {
        o = !1
      }),
      i(i.P + i.F * o, 'Array', {
        find: function(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      }),
      n(38)('find')
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(24)(6),
      o = 'findIndex',
      a = !0
    o in [] &&
      Array(1)[o](function() {
        a = !1
      }),
      i(i.P + i.F * a, 'Array', {
        findIndex: function(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      }),
      n(38)(o)
  },
  function(t, e, n) {
    n(43)('Array')
  },
  function(t, e, n) {
    var i = n(2),
      r = n(69),
      o = n(10).f,
      a = n(36).f,
      s = n(76),
      u = n(55),
      l = i.RegExp,
      f = l,
      c = l.prototype,
      d = /a/g,
      h = /a/g,
      p = new l(d) !== d
    if (
      n(9) &&
      (!p ||
        n(3)(function() {
          return (
            (h[n(6)('match')] = !1),
            l(d) != d || l(h) == h || '/a/i' != l(d, 'i')
          )
        }))
    ) {
      l = function(t, e) {
        var n = this instanceof l,
          i = s(t),
          o = void 0 === e
        return !n && i && t.constructor === l && o
          ? t
          : r(
              p
                ? new f(i && !o ? t.source : t, e)
                : f(
                    (i = t instanceof l) ? t.source : t,
                    i && o ? u.call(t) : e
                  ),
              n ? this : c,
              l
            )
      }
      for (
        var y = function(t) {
            ;(t in l) ||
              o(l, t, {
                configurable: !0,
                get: function() {
                  return f[t]
                },
                set: function(e) {
                  f[t] = e
                }
              })
          },
          m = a(f),
          _ = 0;
        m.length > _;

      )
        y(m[_++])
      ;(c.constructor = l), (l.prototype = c), n(12)(i, 'RegExp', l)
    }
    n(43)('RegExp')
  },
  function(t, e, n) {
    'use strict'
    n(111)
    var i = n(4),
      r = n(55),
      o = n(9),
      a = /./.toString,
      s = function(t) {
        n(12)(RegExp.prototype, 'toString', t, !0)
      }
    n(3)(function() {
      return '/a/b' != a.call({source: 'a', flags: 'b'})
    })
      ? s(function() {
          var t = i(this)
          return '/'.concat(
            t.source,
            '/',
            'flags' in t
              ? t.flags
              : !o && t instanceof RegExp ? r.call(t) : void 0
          )
        })
      : 'toString' != a.name &&
        s(function() {
          return a.call(this)
        })
  },
  function(t, e, n) {
    'use strict'
    var i = n(4),
      r = n(7),
      o = n(84),
      a = n(56)
    n(57)('match', 1, function(t, e, n, s) {
      return [
        function(n) {
          var i = t(this),
            r = null == n ? void 0 : n[e]
          return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        },
        function(t) {
          var e = s(n, t, this)
          if (e.done) return e.value
          var u = i(t),
            l = String(this)
          if (!u.global) return a(u, l)
          var f = u.unicode
          u.lastIndex = 0
          for (var c, d = [], h = 0; null !== (c = a(u, l)); ) {
            var p = String(c[0])
            ;(d[h] = p),
              '' === p && (u.lastIndex = o(l, r(u.lastIndex), f)),
              h++
          }
          return 0 === h ? null : d
        }
      ]
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(4),
      r = n(11),
      o = n(7),
      a = n(21),
      s = n(84),
      u = n(56),
      l = Math.max,
      f = Math.min,
      c = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g,
      h = /\$([$&`']|\d\d?)/g
    n(57)('replace', 2, function(t, e, n, p) {
      return [
        function(i, r) {
          var o = t(this),
            a = null == i ? void 0 : i[e]
          return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        },
        function(t, e) {
          var r = p(n, t, this, e)
          if (r.done) return r.value
          var c = i(t),
            d = String(this),
            h = 'function' == typeof e
          h || (e = String(e))
          var m = c.global
          if (m) {
            var _ = c.unicode
            c.lastIndex = 0
          }
          for (var v = []; ; ) {
            var g = u(c, d)
            if (null === g) break
            if ((v.push(g), !m)) break
            '' === String(g[0]) && (c.lastIndex = s(d, o(c.lastIndex), _))
          }
          for (var b, S = '', T = 0, w = 0; w < v.length; w++) {
            g = v[w]
            for (
              var x = String(g[0]),
                k = l(f(a(g.index), d.length), 0),
                P = [],
                O = 1;
              O < g.length;
              O++
            )
              P.push(void 0 === (b = g[O]) ? b : String(b))
            var A = g.groups
            if (h) {
              var E = [x].concat(P, k, d)
              void 0 !== A && E.push(A)
              var C = String(e.apply(void 0, E))
            } else C = y(x, d, k, P, A, e)
            k >= T && ((S += d.slice(T, k) + C), (T = k + x.length))
          }
          return S + d.slice(T)
        }
      ]
      function y(t, e, i, o, a, s) {
        var u = i + t.length,
          l = o.length,
          f = h
        return (
          void 0 !== a && ((a = r(a)), (f = d)),
          n.call(s, f, function(n, r) {
            var s
            switch (r.charAt(0)) {
              case '$':
                return '$'
              case '&':
                return t
              case '`':
                return e.slice(0, i)
              case "'":
                return e.slice(u)
              case '<':
                s = a[r.slice(1, -1)]
                break
              default:
                var f = +r
                if (0 === f) return n
                if (f > l) {
                  var d = c(f / 10)
                  return 0 === d
                    ? n
                    : d <= l
                      ? void 0 === o[d - 1]
                        ? r.charAt(1)
                        : o[d - 1] + r.charAt(1)
                      : n
                }
                s = o[f - 1]
            }
            return void 0 === s ? '' : s
          })
        )
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(4),
      r = n(96),
      o = n(56)
    n(57)('search', 1, function(t, e, n, a) {
      return [
        function(n) {
          var i = t(this),
            r = null == n ? void 0 : n[e]
          return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        },
        function(t) {
          var e = a(n, t, this)
          if (e.done) return e.value
          var s = i(t),
            u = String(this),
            l = s.lastIndex
          r(l, 0) || (s.lastIndex = 0)
          var f = o(s, u)
          return (
            r(s.lastIndex, l) || (s.lastIndex = l), null === f ? -1 : f.index
          )
        }
      ]
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(76),
      r = n(4),
      o = n(49),
      a = n(84),
      s = n(7),
      u = n(56),
      l = n(83),
      f = n(3),
      c = Math.min,
      d = [].push,
      h = !f(function() {
        RegExp(4294967295, 'y')
      })
    n(57)('split', 2, function(t, e, n, f) {
      var p
      return (
        (p =
          'c' == 'abbc'.split(/(b)*/)[1] ||
          4 != 'test'.split(/(?:)/, -1).length ||
          2 != 'ab'.split(/(?:ab)*/).length ||
          4 != '.'.split(/(.?)(.?)/).length ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
            ? function(t, e) {
                var r = String(this)
                if (void 0 === t && 0 === e) return []
                if (!i(t)) return n.call(r, t, e)
                for (
                  var o,
                    a,
                    s,
                    u = [],
                    f =
                      (t.ignoreCase ? 'i' : '') +
                      (t.multiline ? 'm' : '') +
                      (t.unicode ? 'u' : '') +
                      (t.sticky ? 'y' : ''),
                    c = 0,
                    h = void 0 === e ? 4294967295 : e >>> 0,
                    p = new RegExp(t.source, f + 'g');
                  (o = l.call(p, r)) &&
                  !(
                    (a = p.lastIndex) > c &&
                    (u.push(r.slice(c, o.index)),
                    o.length > 1 &&
                      o.index < r.length &&
                      d.apply(u, o.slice(1)),
                    (s = o[0].length),
                    (c = a),
                    u.length >= h)
                  );

                )
                  p.lastIndex === o.index && p.lastIndex++
                return (
                  c === r.length
                    ? (!s && p.test('')) || u.push('')
                    : u.push(r.slice(c)),
                  u.length > h ? u.slice(0, h) : u
                )
              }
            : '0'.split(void 0, 0).length
              ? function(t, e) {
                  return void 0 === t && 0 === e ? [] : n.call(this, t, e)
                }
              : n),
        [
          function(n, i) {
            var r = t(this),
              o = null == n ? void 0 : n[e]
            return void 0 !== o ? o.call(n, r, i) : p.call(String(r), n, i)
          },
          function(t, e) {
            var i = f(p, t, this, e, p !== n)
            if (i.done) return i.value
            var l = r(t),
              d = String(this),
              y = o(l, RegExp),
              m = l.unicode,
              _ =
                (l.ignoreCase ? 'i' : '') +
                (l.multiline ? 'm' : '') +
                (l.unicode ? 'u' : '') +
                (h ? 'y' : 'g'),
              v = new y(h ? l : '^(?:' + l.source + ')', _),
              g = void 0 === e ? 4294967295 : e >>> 0
            if (0 === g) return []
            if (0 === d.length) return null === u(v, d) ? [d] : []
            for (var b = 0, S = 0, T = []; S < d.length; ) {
              v.lastIndex = h ? S : 0
              var w,
                x = u(v, h ? d : d.slice(S))
              if (
                null === x ||
                (w = c(s(v.lastIndex + (h ? 0 : S)), d.length)) === b
              )
                S = a(d, S, m)
              else {
                if ((T.push(d.slice(b, S)), T.length === g)) return T
                for (var k = 1; k <= x.length - 1; k++)
                  if ((T.push(x[k]), T.length === g)) return T
                S = b = w
              }
            }
            return T.push(d.slice(b)), T
          }
        ]
      )
    })
  },
  function(t, e, n) {
    var i = n(2),
      r = n(85).set,
      o = i.MutationObserver || i.WebKitMutationObserver,
      a = i.process,
      s = i.Promise,
      u = 'process' == n(25)(a)
    t.exports = function() {
      var t,
        e,
        n,
        l = function() {
          var i, r
          for (u && (i = a.domain) && i.exit(); t; ) {
            ;(r = t.fn), (t = t.next)
            try {
              r()
            } catch (i) {
              throw (t ? n() : (e = void 0), i)
            }
          }
          ;(e = void 0), i && i.enter()
        }
      if (u)
        n = function() {
          a.nextTick(l)
        }
      else if (!o || (i.navigator && i.navigator.standalone))
        if (s && s.resolve) {
          var f = s.resolve(void 0)
          n = function() {
            f.then(l)
          }
        } else
          n = function() {
            r.call(i, l)
          }
      else {
        var c = !0,
          d = document.createTextNode('')
        new o(l).observe(d, {characterData: !0}),
          (n = function() {
            d.data = c = !c
          })
      }
      return function(i) {
        var r = {fn: i, next: void 0}
        e && (e.next = r), t || ((t = r), n()), (e = r)
      }
    }
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return {e: !1, v: t()}
      } catch (t) {
        return {e: !0, v: t}
      }
    }
  },
  function(t, e, n) {
    'use strict'
    var i = n(115),
      r = n(39)
    t.exports = n(60)(
      'Map',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      },
      {
        get: function(t) {
          var e = i.getEntry(r(this, 'Map'), t)
          return e && e.v
        },
        set: function(t, e) {
          return i.def(r(this, 'Map'), 0 === t ? 0 : t, e)
        }
      },
      i,
      !0
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(115),
      r = n(39)
    t.exports = n(60)(
      'Set',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      },
      {
        add: function(t) {
          return i.def(r(this, 'Set'), (t = 0 === t ? 0 : t), t)
        }
      },
      i
    )
  },
  function(t, e, n) {
    'use strict'
    var i,
      r = n(2),
      o = n(24)(0),
      a = n(12),
      s = n(29),
      u = n(95),
      l = n(116),
      f = n(5),
      c = n(39),
      d = n(39),
      h = !r.ActiveXObject && 'ActiveXObject' in r,
      p = s.getWeak,
      y = Object.isExtensible,
      m = l.ufstore,
      _ = function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      },
      v = {
        get: function(t) {
          if (f(t)) {
            var e = p(t)
            return !0 === e
              ? m(c(this, 'WeakMap')).get(t)
              : e ? e[this._i] : void 0
          }
        },
        set: function(t, e) {
          return l.def(c(this, 'WeakMap'), t, e)
        }
      },
      g = (t.exports = n(60)('WeakMap', _, v, l, !0, !0))
    d &&
      h &&
      (u((i = l.getConstructor(_, 'WeakMap')).prototype, v),
      (s.NEED = !0),
      o(['delete', 'has', 'get', 'set'], function(t) {
        var e = g.prototype,
          n = e[t]
        a(e, t, function(e, r) {
          if (f(e) && !y(e)) {
            this._f || (this._f = new i())
            var o = this._f[t](e, r)
            return 'set' == t ? this : o
          }
          return n.call(this, e, r)
        })
      }))
  },
  function(t, e, n) {
    'use strict'
    var i = n(116),
      r = n(39)
    n(60)(
      'WeakSet',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      },
      {
        add: function(t) {
          return i.def(r(this, 'WeakSet'), t, !0)
        }
      },
      i,
      !1,
      !0
    )
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(61),
      o = n(86),
      a = n(4),
      s = n(34),
      u = n(7),
      l = n(5),
      f = n(2).ArrayBuffer,
      c = n(49),
      d = o.ArrayBuffer,
      h = o.DataView,
      p = r.ABV && f.isView,
      y = d.prototype.slice,
      m = r.VIEW
    i(i.G + i.W + i.F * (f !== d), {ArrayBuffer: d}),
      i(i.S + i.F * !r.CONSTR, 'ArrayBuffer', {
        isView: function(t) {
          return (p && p(t)) || (l(t) && m in t)
        }
      }),
      i(
        i.P +
          i.U +
          i.F *
            n(3)(function() {
              return !new d(2).slice(1, void 0).byteLength
            }),
        'ArrayBuffer',
        {
          slice: function(t, e) {
            if (void 0 !== y && void 0 === e) return y.call(a(this), t)
            for (
              var n = a(this).byteLength,
                i = s(t, n),
                r = s(void 0 === e ? n : e, n),
                o = new (c(this, d))(u(r - i)),
                l = new h(this),
                f = new h(o),
                p = 0;
              i < r;

            )
              f.setUint8(p++, l.getUint8(i++))
            return o
          }
        }
      ),
      n(43)('ArrayBuffer')
  },
  function(t, e, n) {
    var i = n(0)
    i(i.G + i.W + i.F * !n(61).ABV, {DataView: n(86).DataView})
  },
  function(t, e, n) {
    n(27)('Int8', 1, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)('Uint8', 1, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)(
      'Uint8',
      1,
      function(t) {
        return function(e, n, i) {
          return t(this, e, n, i)
        }
      },
      !0
    )
  },
  function(t, e, n) {
    n(27)('Int16', 2, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)('Uint16', 2, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)('Int32', 4, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)('Uint32', 4, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)('Float32', 4, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    n(27)('Float64', 8, function(t) {
      return function(e, n, i) {
        return t(this, e, n, i)
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(20),
      o = n(4),
      a = (n(2).Reflect || {}).apply,
      s = Function.apply
    i(
      i.S +
        i.F *
          !n(3)(function() {
            a(function() {})
          }),
      'Reflect',
      {
        apply: function(t, e, n) {
          var i = r(t),
            u = o(n)
          return a ? a(i, e, u) : s.call(i, e, u)
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0),
      r = n(35),
      o = n(20),
      a = n(4),
      s = n(5),
      u = n(3),
      l = n(97),
      f = (n(2).Reflect || {}).construct,
      c = u(function() {
        function t() {}
        return !(f(function() {}, [], t) instanceof t)
      }),
      d = !u(function() {
        f(function() {})
      })
    i(i.S + i.F * (c || d), 'Reflect', {
      construct: function(t, e) {
        o(t), a(e)
        var n = arguments.length < 3 ? t : o(arguments[2])
        if (d && !c) return f(t, e, n)
        if (t == n) {
          switch (e.length) {
            case 0:
              return new t()
            case 1:
              return new t(e[0])
            case 2:
              return new t(e[0], e[1])
            case 3:
              return new t(e[0], e[1], e[2])
            case 4:
              return new t(e[0], e[1], e[2], e[3])
          }
          var i = [null]
          return i.push.apply(i, e), new (l.apply(t, i))()
        }
        var u = n.prototype,
          h = r(s(u) ? u : Object.prototype),
          p = Function.apply.call(t, h, e)
        return s(p) ? p : h
      }
    })
  },
  function(t, e, n) {
    var i = n(10),
      r = n(0),
      o = n(4),
      a = n(28)
    r(
      r.S +
        r.F *
          n(3)(function() {
            Reflect.defineProperty(i.f({}, 1, {value: 1}), 1, {value: 2})
          }),
      'Reflect',
      {
        defineProperty: function(t, e, n) {
          o(t), (e = a(e, !0)), o(n)
          try {
            return i.f(t, e, n), !0
          } catch (t) {
            return !1
          }
        }
      }
    )
  },
  function(t, e, n) {
    var i = n(0),
      r = n(22).f,
      o = n(4)
    i(i.S, 'Reflect', {
      deleteProperty: function(t, e) {
        var n = r(o(t), e)
        return !(n && !n.configurable) && delete t[e]
      }
    })
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(4),
      o = function(t) {
        ;(this._t = r(t)), (this._i = 0)
        var e,
          n = (this._k = [])
        for (e in t) n.push(e)
      }
    n(104)(o, 'Object', function() {
      var t,
        e = this._k
      do {
        if (this._i >= e.length) return {value: void 0, done: !0}
      } while (!((t = e[this._i++]) in this._t))
      return {value: t, done: !1}
    }),
      i(i.S, 'Reflect', {
        enumerate: function(t) {
          return new o(t)
        }
      })
  },
  function(t, e, n) {
    var i = n(22),
      r = n(37),
      o = n(14),
      a = n(0),
      s = n(5),
      u = n(4)
    a(a.S, 'Reflect', {
      get: function t(e, n) {
        var a,
          l,
          f = arguments.length < 3 ? e : arguments[2]
        return u(e) === f
          ? e[n]
          : (a = i.f(e, n))
            ? o(a, 'value')
              ? a.value
              : void 0 !== a.get ? a.get.call(f) : void 0
            : s((l = r(e))) ? t(l, n, f) : void 0
      }
    })
  },
  function(t, e, n) {
    var i = n(22),
      r = n(0),
      o = n(4)
    r(r.S, 'Reflect', {
      getOwnPropertyDescriptor: function(t, e) {
        return i.f(o(t), e)
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(37),
      o = n(4)
    i(i.S, 'Reflect', {
      getPrototypeOf: function(t) {
        return r(o(t))
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Reflect', {
      has: function(t, e) {
        return e in t
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(4),
      o = Object.isExtensible
    i(i.S, 'Reflect', {
      isExtensible: function(t) {
        return r(t), !o || o(t)
      }
    })
  },
  function(t, e, n) {
    var i = n(0)
    i(i.S, 'Reflect', {ownKeys: n(118)})
  },
  function(t, e, n) {
    var i = n(0),
      r = n(4),
      o = Object.preventExtensions
    i(i.S, 'Reflect', {
      preventExtensions: function(t) {
        r(t)
        try {
          return o && o(t), !0
        } catch (t) {
          return !1
        }
      }
    })
  },
  function(t, e, n) {
    var i = n(10),
      r = n(22),
      o = n(37),
      a = n(14),
      s = n(0),
      u = n(30),
      l = n(4),
      f = n(5)
    s(s.S, 'Reflect', {
      set: function t(e, n, s) {
        var c,
          d,
          h = arguments.length < 4 ? e : arguments[3],
          p = r.f(l(e), n)
        if (!p) {
          if (f((d = o(e)))) return t(d, n, s, h)
          p = u(0)
        }
        if (a(p, 'value')) {
          if (!1 === p.writable || !f(h)) return !1
          if ((c = r.f(h, n))) {
            if (c.get || c.set || !1 === c.writable) return !1
            ;(c.value = s), i.f(h, n, c)
          } else i.f(h, n, u(0, s))
          return !0
        }
        return void 0 !== p.set && (p.set.call(h, s), !0)
      }
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(67)
    r &&
      i(i.S, 'Reflect', {
        setPrototypeOf: function(t, e) {
          r.check(t, e)
          try {
            return r.set(t, e), !0
          } catch (t) {
            return !1
          }
        }
      })
  },
  function(t, e, n) {
    n(272), (t.exports = n(8).Array.includes)
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(51)(!0)
    i(i.P, 'Array', {
      includes: function(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }),
      n(38)('includes')
  },
  function(t, e, n) {
    n(274), (t.exports = n(8).Array.flatMap)
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(275),
      o = n(11),
      a = n(7),
      s = n(20),
      u = n(106)
    i(i.P, 'Array', {
      flatMap: function(t) {
        var e,
          n,
          i = o(this)
        return (
          s(t),
          (e = a(i.length)),
          (n = u(i, 0)),
          r(n, i, i, e, 0, 1, t, arguments[1]),
          n
        )
      }
    }),
      n(38)('flatMap')
  },
  function(t, e, n) {
    'use strict'
    var i = n(53),
      r = n(5),
      o = n(7),
      a = n(19),
      s = n(6)('isConcatSpreadable')
    t.exports = function t(e, n, u, l, f, c, d, h) {
      for (var p, y, m = f, _ = 0, v = !!d && a(d, h, 3); _ < l; ) {
        if (_ in u) {
          if (
            ((p = v ? v(u[_], _, n) : u[_]),
            (y = !1),
            r(p) && (y = void 0 !== (y = p[s]) ? !!y : i(p)),
            y && c > 0)
          )
            m = t(e, n, p, o(p.length), m, c - 1) - 1
          else {
            if (m >= 9007199254740991) throw TypeError()
            e[m] = p
          }
          m++
        }
        _++
      }
      return m
    }
  },
  function(t, e, n) {
    n(277), (t.exports = n(8).String.padStart)
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(119),
      o = n(59),
      a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)
    i(i.P + i.F * a, 'String', {
      padStart: function(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
      }
    })
  },
  function(t, e, n) {
    n(279), (t.exports = n(8).String.padEnd)
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(119),
      o = n(59),
      a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)
    i(i.P + i.F * a, 'String', {
      padEnd: function(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
      }
    })
  },
  function(t, e, n) {
    n(281), (t.exports = n(8).String.trimLeft)
  },
  function(t, e, n) {
    'use strict'
    n(41)(
      'trimLeft',
      function(t) {
        return function() {
          return t(this, 1)
        }
      },
      'trimStart'
    )
  },
  function(t, e, n) {
    n(283), (t.exports = n(8).String.trimRight)
  },
  function(t, e, n) {
    'use strict'
    n(41)(
      'trimRight',
      function(t) {
        return function() {
          return t(this, 2)
        }
      },
      'trimEnd'
    )
  },
  function(t, e, n) {
    n(285), (t.exports = n(63).f('asyncIterator'))
  },
  function(t, e, n) {
    n(91)('asyncIterator')
  },
  function(t, e, n) {
    n(287), (t.exports = n(8).Object.getOwnPropertyDescriptors)
  },
  function(t, e, n) {
    var i = n(0),
      r = n(118),
      o = n(16),
      a = n(22),
      s = n(79)
    i(i.S, 'Object', {
      getOwnPropertyDescriptors: function(t) {
        for (
          var e, n, i = o(t), u = a.f, l = r(i), f = {}, c = 0;
          l.length > c;

        )
          void 0 !== (n = u(i, (e = l[c++]))) && s(f, e, n)
        return f
      }
    })
  },
  function(t, e, n) {
    n(289), (t.exports = n(8).Object.values)
  },
  function(t, e, n) {
    var i = n(0),
      r = n(120)(!1)
    i(i.S, 'Object', {
      values: function(t) {
        return r(t)
      }
    })
  },
  function(t, e, n) {
    n(291), (t.exports = n(8).Object.entries)
  },
  function(t, e, n) {
    var i = n(0),
      r = n(120)(!0)
    i(i.S, 'Object', {
      entries: function(t) {
        return r(t)
      }
    })
  },
  function(t, e, n) {
    'use strict'
    n(112), n(293), (t.exports = n(8).Promise.finally)
  },
  function(t, e, n) {
    'use strict'
    var i = n(0),
      r = n(8),
      o = n(2),
      a = n(49),
      s = n(114)
    i(i.P + i.R, 'Promise', {
      finally: function(t) {
        var e = a(this, r.Promise || o.Promise),
          n = 'function' == typeof t
        return this.then(
          n
            ? function(n) {
                return s(e, t()).then(function() {
                  return n
                })
              }
            : t,
          n
            ? function(n) {
                return s(e, t()).then(function() {
                  throw n
                })
              }
            : t
        )
      }
    })
  },
  function(t, e, n) {
    n(295), n(296), n(297), (t.exports = n(8))
  },
  function(t, e, n) {
    var i = n(2),
      r = n(0),
      o = n(59),
      a = [].slice,
      s = /MSIE .\./.test(o),
      u = function(t) {
        return function(e, n) {
          var i = arguments.length > 2,
            r = !!i && a.call(arguments, 2)
          return t(
            i
              ? function() {
                  ;('function' == typeof e ? e : Function(e)).apply(this, r)
                }
              : e,
            n
          )
        }
      }
    r(r.G + r.B + r.F * s, {
      setTimeout: u(i.setTimeout),
      setInterval: u(i.setInterval)
    })
  },
  function(t, e, n) {
    var i = n(0),
      r = n(85)
    i(i.G + i.B, {setImmediate: r.set, clearImmediate: r.clear})
  },
  function(t, e, n) {
    for (
      var i = n(82),
        r = n(33),
        o = n(12),
        a = n(2),
        s = n(15),
        u = n(42),
        l = n(6),
        f = l('iterator'),
        c = l('toStringTag'),
        d = u.Array,
        h = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        },
        p = r(h),
        y = 0;
      y < p.length;
      y++
    ) {
      var m,
        _ = p[y],
        v = h[_],
        g = a[_],
        b = g && g.prototype
      if (b && (b[f] || s(b, f, d), b[c] || s(b, c, _), (u[_] = d), v))
        for (m in i) b[m] || o(b, m, i[m], !0)
    }
  },
  function(t, e, n) {
    var i = (function(t) {
      'use strict'
      var e,
        n = Object.prototype,
        i = n.hasOwnProperty,
        r = 'function' == typeof Symbol ? Symbol : {},
        o = r.iterator || '@@iterator',
        a = r.asyncIterator || '@@asyncIterator',
        s = r.toStringTag || '@@toStringTag'
      function u(t, e, n, i) {
        var r = e && e.prototype instanceof y ? e : y,
          o = Object.create(r.prototype),
          a = new O(i || [])
        return (
          (o._invoke = (function(t, e, n) {
            var i = f
            return function(r, o) {
              if (i === d) throw new Error('Generator is already running')
              if (i === h) {
                if ('throw' === r) throw o
                return E()
              }
              for (n.method = r, n.arg = o; ; ) {
                var a = n.delegate
                if (a) {
                  var s = x(a, n)
                  if (s) {
                    if (s === p) continue
                    return s
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg
                else if ('throw' === n.method) {
                  if (i === f) throw ((i = h), n.arg)
                  n.dispatchException(n.arg)
                } else 'return' === n.method && n.abrupt('return', n.arg)
                i = d
                var u = l(t, e, n)
                if ('normal' === u.type) {
                  if (((i = n.done ? h : c), u.arg === p)) continue
                  return {value: u.arg, done: n.done}
                }
                'throw' === u.type &&
                  ((i = h), (n.method = 'throw'), (n.arg = u.arg))
              }
            }
          })(t, n, a)),
          o
        )
      }
      function l(t, e, n) {
        try {
          return {type: 'normal', arg: t.call(e, n)}
        } catch (t) {
          return {type: 'throw', arg: t}
        }
      }
      t.wrap = u
      var f = 'suspendedStart',
        c = 'suspendedYield',
        d = 'executing',
        h = 'completed',
        p = {}
      function y() {}
      function m() {}
      function _() {}
      var v = {}
      v[o] = function() {
        return this
      }
      var g = Object.getPrototypeOf,
        b = g && g(g(A([])))
      b && b !== n && i.call(b, o) && (v = b)
      var S = (_.prototype = y.prototype = Object.create(v))
      function T(t) {
        ;['next', 'throw', 'return'].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t)
          }
        })
      }
      function w(t) {
        var e
        this._invoke = function(n, r) {
          function o() {
            return new Promise(function(e, o) {
              !(function e(n, r, o, a) {
                var s = l(t[n], t, r)
                if ('throw' !== s.type) {
                  var u = s.arg,
                    f = u.value
                  return f && 'object' == typeof f && i.call(f, '__await')
                    ? Promise.resolve(f.__await).then(
                        function(t) {
                          e('next', t, o, a)
                        },
                        function(t) {
                          e('throw', t, o, a)
                        }
                      )
                    : Promise.resolve(f).then(
                        function(t) {
                          ;(u.value = t), o(u)
                        },
                        function(t) {
                          return e('throw', t, o, a)
                        }
                      )
                }
                a(s.arg)
              })(n, r, e, o)
            })
          }
          return (e = e ? e.then(o, o) : o())
        }
      }
      function x(t, n) {
        var i = t.iterator[n.method]
        if (i === e) {
          if (((n.delegate = null), 'throw' === n.method)) {
            if (
              t.iterator.return &&
              ((n.method = 'return'),
              (n.arg = e),
              x(t, n),
              'throw' === n.method)
            )
              return p
            ;(n.method = 'throw'),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ))
          }
          return p
        }
        var r = l(i, t.iterator, n.arg)
        if ('throw' === r.type)
          return (n.method = 'throw'), (n.arg = r.arg), (n.delegate = null), p
        var o = r.arg
        return o
          ? o.done
            ? ((n[t.resultName] = o.value),
              (n.next = t.nextLoc),
              'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
              (n.delegate = null),
              p)
            : o
          : ((n.method = 'throw'),
            (n.arg = new TypeError('iterator result is not an object')),
            (n.delegate = null),
            p)
      }
      function k(t) {
        var e = {tryLoc: t[0]}
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e)
      }
      function P(t) {
        var e = t.completion || {}
        ;(e.type = 'normal'), delete e.arg, (t.completion = e)
      }
      function O(t) {
        ;(this.tryEntries = [{tryLoc: 'root'}]),
          t.forEach(k, this),
          this.reset(!0)
      }
      function A(t) {
        if (t) {
          var n = t[o]
          if (n) return n.call(t)
          if ('function' == typeof t.next) return t
          if (!isNaN(t.length)) {
            var r = -1,
              a = function n() {
                for (; ++r < t.length; )
                  if (i.call(t, r)) return (n.value = t[r]), (n.done = !1), n
                return (n.value = e), (n.done = !0), n
              }
            return (a.next = a)
          }
        }
        return {next: E}
      }
      function E() {
        return {value: e, done: !0}
      }
      return (
        (m.prototype = S.constructor = _),
        (_.constructor = m),
        (_[s] = m.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function(t) {
          var e = 'function' == typeof t && t.constructor
          return (
            !!e &&
            (e === m || 'GeneratorFunction' === (e.displayName || e.name))
          )
        }),
        (t.mark = function(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, _)
              : ((t.__proto__ = _), s in t || (t[s] = 'GeneratorFunction')),
            (t.prototype = Object.create(S)),
            t
          )
        }),
        (t.awrap = function(t) {
          return {__await: t}
        }),
        T(w.prototype),
        (w.prototype[a] = function() {
          return this
        }),
        (t.AsyncIterator = w),
        (t.async = function(e, n, i, r) {
          var o = new w(u(e, n, i, r))
          return t.isGeneratorFunction(n)
            ? o
            : o.next().then(function(t) {
                return t.done ? t.value : o.next()
              })
        }),
        T(S),
        (S[s] = 'Generator'),
        (S[o] = function() {
          return this
        }),
        (S.toString = function() {
          return '[object Generator]'
        }),
        (t.keys = function(t) {
          var e = []
          for (var n in t) e.push(n)
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var i = e.pop()
                if (i in t) return (n.value = i), (n.done = !1), n
              }
              return (n.done = !0), n
            }
          )
        }),
        (t.values = A),
        (O.prototype = {
          constructor: O,
          reset: function(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(P),
              !t)
            )
              for (var n in this)
                't' === n.charAt(0) &&
                  i.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = e)
          },
          stop: function() {
            this.done = !0
            var t = this.tryEntries[0].completion
            if ('throw' === t.type) throw t.arg
            return this.rval
          },
          dispatchException: function(t) {
            if (this.done) throw t
            var n = this
            function r(i, r) {
              return (
                (s.type = 'throw'),
                (s.arg = t),
                (n.next = i),
                r && ((n.method = 'next'), (n.arg = e)),
                !!r
              )
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion
              if ('root' === a.tryLoc) return r('end')
              if (a.tryLoc <= this.prev) {
                var u = i.call(a, 'catchLoc'),
                  l = i.call(a, 'finallyLoc')
                if (u && l) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                } else if (u) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                } else {
                  if (!l)
                    throw new Error('try statement without catch or finally')
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n]
              if (
                r.tryLoc <= this.prev &&
                i.call(r, 'finallyLoc') &&
                this.prev < r.finallyLoc
              ) {
                var o = r
                break
              }
            }
            o &&
              ('break' === t || 'continue' === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null)
            var a = o ? o.completion : {}
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = 'next'), (this.next = o.finallyLoc), p)
                : this.complete(a)
            )
          },
          complete: function(t, e) {
            if ('throw' === t.type) throw t.arg
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
              p
            )
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e]
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), P(n), p
            }
          },
          catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e]
              if (n.tryLoc === t) {
                var i = n.completion
                if ('throw' === i.type) {
                  var r = i.arg
                  P(n)
                }
                return r
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function(t, n, i) {
            return (
              (this.delegate = {iterator: A(t), resultName: n, nextLoc: i}),
              'next' === this.method && (this.arg = e),
              p
            )
          }
        }),
        t
      )
    })(t.exports)
    try {
      regeneratorRuntime = i
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(i)
    }
  },
  function(t, e, n) {
    n(300), (t.exports = n(121).global)
  },
  function(t, e, n) {
    var i = n(301)
    i(i.G, {global: n(87)})
  },
  function(t, e, n) {
    var i = n(87),
      r = n(121),
      o = n(302),
      a = n(304),
      s = n(311),
      u = function(t, e, n) {
        var l,
          f,
          c,
          d = t & u.F,
          h = t & u.G,
          p = t & u.S,
          y = t & u.P,
          m = t & u.B,
          _ = t & u.W,
          v = h ? r : r[e] || (r[e] = {}),
          g = v.prototype,
          b = h ? i : p ? i[e] : (i[e] || {}).prototype
        for (l in (h && (n = e), n))
          ((f = !d && b && void 0 !== b[l]) && s(v, l)) ||
            ((c = f ? b[l] : n[l]),
            (v[l] =
              h && 'function' != typeof b[l]
                ? n[l]
                : m && f
                  ? o(c, i)
                  : _ && b[l] == c
                    ? (function(t) {
                        var e = function(e, n, i) {
                          if (this instanceof t) {
                            switch (arguments.length) {
                              case 0:
                                return new t()
                              case 1:
                                return new t(e)
                              case 2:
                                return new t(e, n)
                            }
                            return new t(e, n, i)
                          }
                          return t.apply(this, arguments)
                        }
                        return (e.prototype = t.prototype), e
                      })(c)
                    : y && 'function' == typeof c ? o(Function.call, c) : c),
            y &&
              (((v.virtual || (v.virtual = {}))[l] = c),
              t & u.R && g && !g[l] && a(g, l, c)))
      }
    ;(u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u)
  },
  function(t, e, n) {
    var i = n(303)
    t.exports = function(t, e, n) {
      if ((i(t), void 0 === e)) return t
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n)
          }
        case 2:
          return function(n, i) {
            return t.call(e, n, i)
          }
        case 3:
          return function(n, i, r) {
            return t.call(e, n, i, r)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    }
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!')
      return t
    }
  },
  function(t, e, n) {
    var i = n(305),
      r = n(310)
    t.exports = n(89)
      ? function(t, e, n) {
          return i.f(t, e, r(1, n))
        }
      : function(t, e, n) {
          return (t[e] = n), t
        }
  },
  function(t, e, n) {
    var i = n(306),
      r = n(307),
      o = n(309),
      a = Object.defineProperty
    e.f = n(89)
      ? Object.defineProperty
      : function(t, e, n) {
          if ((i(t), (e = o(e, !0)), i(n), r))
            try {
              return a(t, e, n)
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported!')
          return 'value' in n && (t[e] = n.value), t
        }
  },
  function(t, e, n) {
    var i = n(88)
    t.exports = function(t) {
      if (!i(t)) throw TypeError(t + ' is not an object!')
      return t
    }
  },
  function(t, e, n) {
    t.exports =
      !n(89) &&
      !n(122)(function() {
        return (
          7 !=
          Object.defineProperty(n(308)('div'), 'a', {
            get: function() {
              return 7
            }
          }).a
        )
      })
  },
  function(t, e, n) {
    var i = n(88),
      r = n(87).document,
      o = i(r) && i(r.createElement)
    t.exports = function(t) {
      return o ? r.createElement(t) : {}
    }
  },
  function(t, e, n) {
    var i = n(88)
    t.exports = function(t, e) {
      if (!i(t)) return t
      var n, r
      if (e && 'function' == typeof (n = t.toString) && !i((r = n.call(t))))
        return r
      if ('function' == typeof (n = t.valueOf) && !i((r = n.call(t)))) return r
      if (!e && 'function' == typeof (n = t.toString) && !i((r = n.call(t))))
        return r
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    }
  },
  function(t, e) {
    var n = {}.hasOwnProperty
    t.exports = function(t, e) {
      return n.call(t, e)
    }
  },
  function(t, e, n) {
    'use strict'
    /** @license React v16.8.6
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var i = n(123),
      r = 'function' == typeof Symbol && Symbol.for,
      o = r ? Symbol.for('react.element') : 60103,
      a = r ? Symbol.for('react.portal') : 60106,
      s = r ? Symbol.for('react.fragment') : 60107,
      u = r ? Symbol.for('react.strict_mode') : 60108,
      l = r ? Symbol.for('react.profiler') : 60114,
      f = r ? Symbol.for('react.provider') : 60109,
      c = r ? Symbol.for('react.context') : 60110,
      d = r ? Symbol.for('react.concurrent_mode') : 60111,
      h = r ? Symbol.for('react.forward_ref') : 60112,
      p = r ? Symbol.for('react.suspense') : 60113,
      y = r ? Symbol.for('react.memo') : 60115,
      m = r ? Symbol.for('react.lazy') : 60116,
      _ = 'function' == typeof Symbol && Symbol.iterator
    function v(t) {
      for (
        var e = arguments.length - 1,
          n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
          i = 0;
        i < e;
        i++
      )
        n += '&args[]=' + encodeURIComponent(arguments[i + 1])
      !(function(t, e, n, i, r, o, a, s) {
        if (!t) {
          if (((t = void 0), void 0 === e))
            t = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var u = [n, i, r, o, a, s],
              l = 0
            ;(t = Error(
              e.replace(/%s/g, function() {
                return u[l++]
              })
            )).name =
              'Invariant Violation'
          }
          throw ((t.framesToPop = 1), t)
        }
      })(
        !1,
        'Minified React error #' +
          t +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        n
      )
    }
    var g = {
        isMounted: function() {
          return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      b = {}
    function S(t, e, n) {
      ;(this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = n || g)
    }
    function T() {}
    function w(t, e, n) {
      ;(this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = n || g)
    }
    ;(S.prototype.isReactComponent = {}),
      (S.prototype.setState = function(t, e) {
        'object' != typeof t && 'function' != typeof t && null != t && v('85'),
          this.updater.enqueueSetState(this, t, e, 'setState')
      }),
      (S.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
      }),
      (T.prototype = S.prototype)
    var x = (w.prototype = new T())
    ;(x.constructor = w), i(x, S.prototype), (x.isPureReactComponent = !0)
    var k = {current: null},
      P = {current: null},
      O = Object.prototype.hasOwnProperty,
      A = {key: !0, ref: !0, __self: !0, __source: !0}
    function E(t, e, n) {
      var i = void 0,
        r = {},
        a = null,
        s = null
      if (null != e)
        for (i in (void 0 !== e.ref && (s = e.ref),
        void 0 !== e.key && (a = '' + e.key),
        e))
          O.call(e, i) && !A.hasOwnProperty(i) && (r[i] = e[i])
      var u = arguments.length - 2
      if (1 === u) r.children = n
      else if (1 < u) {
        for (var l = Array(u), f = 0; f < u; f++) l[f] = arguments[f + 2]
        r.children = l
      }
      if (t && t.defaultProps)
        for (i in (u = t.defaultProps)) void 0 === r[i] && (r[i] = u[i])
      return {$$typeof: o, type: t, key: a, ref: s, props: r, _owner: P.current}
    }
    function C(t) {
      return 'object' == typeof t && null !== t && t.$$typeof === o
    }
    var F = /\/+/g,
      M = []
    function R(t, e, n, i) {
      if (M.length) {
        var r = M.pop()
        return (
          (r.result = t),
          (r.keyPrefix = e),
          (r.func = n),
          (r.context = i),
          (r.count = 0),
          r
        )
      }
      return {result: t, keyPrefix: e, func: n, context: i, count: 0}
    }
    function N(t) {
      ;(t.result = null),
        (t.keyPrefix = null),
        (t.func = null),
        (t.context = null),
        (t.count = 0),
        10 > M.length && M.push(t)
    }
    function q(t, e, n) {
      return null == t
        ? 0
        : (function t(e, n, i, r) {
            var s = typeof e
            ;('undefined' !== s && 'boolean' !== s) || (e = null)
            var u = !1
            if (null === e) u = !0
            else
              switch (s) {
                case 'string':
                case 'number':
                  u = !0
                  break
                case 'object':
                  switch (e.$$typeof) {
                    case o:
                    case a:
                      u = !0
                  }
              }
            if (u) return i(r, e, '' === n ? '.' + j(e, 0) : n), 1
            if (((u = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(e)))
              for (var l = 0; l < e.length; l++) {
                var f = n + j((s = e[l]), l)
                u += t(s, f, i, r)
              }
            else if (
              ((f =
                null === e || 'object' != typeof e
                  ? null
                  : 'function' == typeof (f = (_ && e[_]) || e['@@iterator'])
                    ? f
                    : null),
              'function' == typeof f)
            )
              for (e = f.call(e), l = 0; !(s = e.next()).done; )
                u += t((s = s.value), (f = n + j(s, l++)), i, r)
            else
              'object' === s &&
                v(
                  '31',
                  '[object Object]' == (i = '' + e)
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : i,
                  ''
                )
            return u
          })(t, '', e, n)
    }
    function j(t, e) {
      return 'object' == typeof t && null !== t && null != t.key
        ? (function(t) {
            var e = {'=': '=0', ':': '=2'}
            return (
              '$' +
              ('' + t).replace(/[=:]/g, function(t) {
                return e[t]
              })
            )
          })(t.key)
        : e.toString(36)
    }
    function I(t, e) {
      t.func.call(t.context, e, t.count++)
    }
    function L(t, e, n) {
      var i = t.result,
        r = t.keyPrefix
      ;(t = t.func.call(t.context, e, t.count++)),
        Array.isArray(t)
          ? D(t, i, n, function(t) {
              return t
            })
          : null != t &&
            (C(t) &&
              (t = (function(t, e) {
                return {
                  $$typeof: o,
                  type: t.type,
                  key: e,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner
                }
              })(
                t,
                r +
                  (!t.key || (e && e.key === t.key)
                    ? ''
                    : ('' + t.key).replace(F, '$&/') + '/') +
                  n
              )),
            i.push(t))
    }
    function D(t, e, n, i, r) {
      var o = ''
      null != n && (o = ('' + n).replace(F, '$&/') + '/'),
        q(t, L, (e = R(e, o, i, r))),
        N(e)
    }
    function B() {
      var t = k.current
      return null === t && v('321'), t
    }
    var U = {
        Children: {
          map: function(t, e, n) {
            if (null == t) return t
            var i = []
            return D(t, i, null, e, n), i
          },
          forEach: function(t, e, n) {
            if (null == t) return t
            q(t, I, (e = R(null, null, e, n))), N(e)
          },
          count: function(t) {
            return q(
              t,
              function() {
                return null
              },
              null
            )
          },
          toArray: function(t) {
            var e = []
            return (
              D(t, e, null, function(t) {
                return t
              }),
              e
            )
          },
          only: function(t) {
            return C(t) || v('143'), t
          }
        },
        createRef: function() {
          return {current: null}
        },
        Component: S,
        PureComponent: w,
        createContext: function(t, e) {
          return (
            void 0 === e && (e = null),
            ((t = {
              $$typeof: c,
              _calculateChangedBits: e,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = {$$typeof: f, _context: t}),
            (t.Consumer = t)
          )
        },
        forwardRef: function(t) {
          return {$$typeof: h, render: t}
        },
        lazy: function(t) {
          return {$$typeof: m, _ctor: t, _status: -1, _result: null}
        },
        memo: function(t, e) {
          return {$$typeof: y, type: t, compare: void 0 === e ? null : e}
        },
        useCallback: function(t, e) {
          return B().useCallback(t, e)
        },
        useContext: function(t, e) {
          return B().useContext(t, e)
        },
        useEffect: function(t, e) {
          return B().useEffect(t, e)
        },
        useImperativeHandle: function(t, e, n) {
          return B().useImperativeHandle(t, e, n)
        },
        useDebugValue: function() {},
        useLayoutEffect: function(t, e) {
          return B().useLayoutEffect(t, e)
        },
        useMemo: function(t, e) {
          return B().useMemo(t, e)
        },
        useReducer: function(t, e, n) {
          return B().useReducer(t, e, n)
        },
        useRef: function(t) {
          return B().useRef(t)
        },
        useState: function(t) {
          return B().useState(t)
        },
        Fragment: s,
        StrictMode: u,
        Suspense: p,
        createElement: E,
        cloneElement: function(t, e, n) {
          null == t && v('267', t)
          var r = void 0,
            a = i({}, t.props),
            s = t.key,
            u = t.ref,
            l = t._owner
          if (null != e) {
            void 0 !== e.ref && ((u = e.ref), (l = P.current)),
              void 0 !== e.key && (s = '' + e.key)
            var f = void 0
            for (r in (t.type &&
              t.type.defaultProps &&
              (f = t.type.defaultProps),
            e))
              O.call(e, r) &&
                !A.hasOwnProperty(r) &&
                (a[r] = void 0 === e[r] && void 0 !== f ? f[r] : e[r])
          }
          if (1 === (r = arguments.length - 2)) a.children = n
          else if (1 < r) {
            f = Array(r)
            for (var c = 0; c < r; c++) f[c] = arguments[c + 2]
            a.children = f
          }
          return {
            $$typeof: o,
            type: t.type,
            key: s,
            ref: u,
            props: a,
            _owner: l
          }
        },
        createFactory: function(t) {
          var e = E.bind(null, t)
          return (e.type = t), e
        },
        isValidElement: C,
        version: '16.8.6',
        unstable_ConcurrentMode: d,
        unstable_Profiler: l,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: k,
          ReactCurrentOwner: P,
          assign: i
        }
      },
      V = {default: U},
      z = (V && U) || V
    t.exports = z.default || z
  },
  function(t, e, n) {
    'use strict'
    /** @license React v16.8.6
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var i = n(1),
      r = n(123),
      o = n(314)
    function a(t) {
      for (
        var e = arguments.length - 1,
          n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
          i = 0;
        i < e;
        i++
      )
        n += '&args[]=' + encodeURIComponent(arguments[i + 1])
      !(function(t, e, n, i, r, o, a, s) {
        if (!t) {
          if (((t = void 0), void 0 === e))
            t = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var u = [n, i, r, o, a, s],
              l = 0
            ;(t = Error(
              e.replace(/%s/g, function() {
                return u[l++]
              })
            )).name =
              'Invariant Violation'
          }
          throw ((t.framesToPop = 1), t)
        }
      })(
        !1,
        'Minified React error #' +
          t +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        n
      )
    }
    i || a('227')
    var s = !1,
      u = null,
      l = !1,
      f = null,
      c = {
        onError: function(t) {
          ;(s = !0), (u = t)
        }
      }
    function d(t, e, n, i, r, o, a, l, f) {
      ;(s = !1),
        (u = null),
        function(t, e, n, i, r, o, a, s, u) {
          var l = Array.prototype.slice.call(arguments, 3)
          try {
            e.apply(n, l)
          } catch (t) {
            this.onError(t)
          }
        }.apply(c, arguments)
    }
    var h = null,
      p = {}
    function y() {
      if (h)
        for (var t in p) {
          var e = p[t],
            n = h.indexOf(t)
          if ((-1 < n || a('96', t), !_[n]))
            for (var i in (e.extractEvents || a('97', t),
            (_[n] = e),
            (n = e.eventTypes))) {
              var r = void 0,
                o = n[i],
                s = e,
                u = i
              v.hasOwnProperty(u) && a('99', u), (v[u] = o)
              var l = o.phasedRegistrationNames
              if (l) {
                for (r in l) l.hasOwnProperty(r) && m(l[r], s, u)
                r = !0
              } else
                o.registrationName
                  ? (m(o.registrationName, s, u), (r = !0))
                  : (r = !1)
              r || a('98', i, t)
            }
        }
    }
    function m(t, e, n) {
      g[t] && a('100', t), (g[t] = e), (b[t] = e.eventTypes[n].dependencies)
    }
    var _ = [],
      v = {},
      g = {},
      b = {},
      S = null,
      T = null,
      w = null
    function x(t, e, n) {
      var i = t.type || 'unknown-event'
      ;(t.currentTarget = w(n)),
        (function(t, e, n, i, r, o, c, h, p) {
          if ((d.apply(this, arguments), s)) {
            if (s) {
              var y = u
              ;(s = !1), (u = null)
            } else a('198'), (y = void 0)
            l || ((l = !0), (f = y))
          }
        })(i, e, void 0, t),
        (t.currentTarget = null)
    }
    function k(t, e) {
      return (
        null == e && a('30'),
        null == t
          ? e
          : Array.isArray(t)
            ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t)
            : Array.isArray(e) ? [t].concat(e) : [t, e]
      )
    }
    function P(t, e, n) {
      Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
    }
    var O = null
    function A(t) {
      if (t) {
        var e = t._dispatchListeners,
          n = t._dispatchInstances
        if (Array.isArray(e))
          for (var i = 0; i < e.length && !t.isPropagationStopped(); i++)
            x(t, e[i], n[i])
        else e && x(t, e, n)
        ;(t._dispatchListeners = null),
          (t._dispatchInstances = null),
          t.isPersistent() || t.constructor.release(t)
      }
    }
    var E = {
      injectEventPluginOrder: function(t) {
        h && a('101'), (h = Array.prototype.slice.call(t)), y()
      },
      injectEventPluginsByName: function(t) {
        var e,
          n = !1
        for (e in t)
          if (t.hasOwnProperty(e)) {
            var i = t[e]
            ;(p.hasOwnProperty(e) && p[e] === i) ||
              (p[e] && a('102', e), (p[e] = i), (n = !0))
          }
        n && y()
      }
    }
    function C(t, e) {
      var n = t.stateNode
      if (!n) return null
      var i = S(n)
      if (!i) return null
      n = i[e]
      switch (e) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
          ;(i = !i.disabled) ||
            (i = !(
              'button' === (t = t.type) ||
              'input' === t ||
              'select' === t ||
              'textarea' === t
            )),
            (t = !i)
          break
        default:
          t = !1
      }
      return t
        ? null
        : (n && 'function' != typeof n && a('231', e, typeof n), n)
    }
    function F(t) {
      if (
        (null !== t && (O = k(O, t)),
        (t = O),
        (O = null),
        t && (P(t, A), O && a('95'), l))
      )
        throw ((t = f), (l = !1), (f = null), t)
    }
    var M = Math.random()
        .toString(36)
        .slice(2),
      R = '__reactInternalInstance$' + M,
      N = '__reactEventHandlers$' + M
    function q(t) {
      if (t[R]) return t[R]
      for (; !t[R]; ) {
        if (!t.parentNode) return null
        t = t.parentNode
      }
      return 5 === (t = t[R]).tag || 6 === t.tag ? t : null
    }
    function j(t) {
      return !(t = t[R]) || (5 !== t.tag && 6 !== t.tag) ? null : t
    }
    function I(t) {
      if (5 === t.tag || 6 === t.tag) return t.stateNode
      a('33')
    }
    function L(t) {
      return t[N] || null
    }
    function D(t) {
      do {
        t = t.return
      } while (t && 5 !== t.tag)
      return t || null
    }
    function B(t, e, n) {
      ;(e = C(t, n.dispatchConfig.phasedRegistrationNames[e])) &&
        ((n._dispatchListeners = k(n._dispatchListeners, e)),
        (n._dispatchInstances = k(n._dispatchInstances, t)))
    }
    function U(t) {
      if (t && t.dispatchConfig.phasedRegistrationNames) {
        for (var e = t._targetInst, n = []; e; ) n.push(e), (e = D(e))
        for (e = n.length; 0 < e--; ) B(n[e], 'captured', t)
        for (e = 0; e < n.length; e++) B(n[e], 'bubbled', t)
      }
    }
    function V(t, e, n) {
      t &&
        n &&
        n.dispatchConfig.registrationName &&
        (e = C(t, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = k(n._dispatchListeners, e)),
        (n._dispatchInstances = k(n._dispatchInstances, t)))
    }
    function z(t) {
      t && t.dispatchConfig.registrationName && V(t._targetInst, null, t)
    }
    function W(t) {
      P(t, U)
    }
    var G = !(
      'undefined' == typeof window ||
      !window.document ||
      !window.document.createElement
    )
    function Q(t, e) {
      var n = {}
      return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n['Webkit' + t] = 'webkit' + e),
        (n['Moz' + t] = 'moz' + e),
        n
      )
    }
    var H = {
        animationend: Q('Animation', 'AnimationEnd'),
        animationiteration: Q('Animation', 'AnimationIteration'),
        animationstart: Q('Animation', 'AnimationStart'),
        transitionend: Q('Transition', 'TransitionEnd')
      },
      $ = {},
      X = {}
    function Y(t) {
      if ($[t]) return $[t]
      if (!H[t]) return t
      var e,
        n = H[t]
      for (e in n) if (n.hasOwnProperty(e) && e in X) return ($[t] = n[e])
      return t
    }
    G &&
      ((X = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete H.animationend.animation,
        delete H.animationiteration.animation,
        delete H.animationstart.animation),
      'TransitionEvent' in window || delete H.transitionend.transition)
    var K = Y('animationend'),
      Z = Y('animationiteration'),
      J = Y('animationstart'),
      tt = Y('transitionend'),
      et = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
      nt = null,
      it = null,
      rt = null
    function ot() {
      if (rt) return rt
      var t,
        e,
        n = it,
        i = n.length,
        r = 'value' in nt ? nt.value : nt.textContent,
        o = r.length
      for (t = 0; t < i && n[t] === r[t]; t++);
      var a = i - t
      for (e = 1; e <= a && n[i - e] === r[o - e]; e++);
      return (rt = r.slice(t, 1 < e ? 1 - e : void 0))
    }
    function at() {
      return !0
    }
    function st() {
      return !1
    }
    function ut(t, e, n, i) {
      for (var r in ((this.dispatchConfig = t),
      (this._targetInst = e),
      (this.nativeEvent = n),
      (t = this.constructor.Interface)))
        t.hasOwnProperty(r) &&
          ((e = t[r])
            ? (this[r] = e(n))
            : 'target' === r ? (this.target = i) : (this[r] = n[r]))
      return (
        (this.isDefaultPrevented = (null != n.defaultPrevented
        ? n.defaultPrevented
        : !1 === n.returnValue)
          ? at
          : st),
        (this.isPropagationStopped = st),
        this
      )
    }
    function lt(t, e, n, i) {
      if (this.eventPool.length) {
        var r = this.eventPool.pop()
        return this.call(r, t, e, n, i), r
      }
      return new this(t, e, n, i)
    }
    function ft(t) {
      t instanceof this || a('279'),
        t.destructor(),
        10 > this.eventPool.length && this.eventPool.push(t)
    }
    function ct(t) {
      ;(t.eventPool = []), (t.getPooled = lt), (t.release = ft)
    }
    r(ut.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0
        var t = this.nativeEvent
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : 'unknown' != typeof t.returnValue && (t.returnValue = !1),
          (this.isDefaultPrevented = at))
      },
      stopPropagation: function() {
        var t = this.nativeEvent
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : 'unknown' != typeof t.cancelBubble && (t.cancelBubble = !0),
          (this.isPropagationStopped = at))
      },
      persist: function() {
        this.isPersistent = at
      },
      isPersistent: st,
      destructor: function() {
        var t,
          e = this.constructor.Interface
        for (t in e) this[t] = null
        ;(this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = st),
          (this._dispatchInstances = this._dispatchListeners = null)
      }
    }),
      (ut.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
          return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(t) {
          return t.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
      }),
      (ut.extend = function(t) {
        function e() {}
        function n() {
          return i.apply(this, arguments)
        }
        var i = this
        e.prototype = i.prototype
        var o = new e()
        return (
          r(o, n.prototype),
          (n.prototype = o),
          (n.prototype.constructor = n),
          (n.Interface = r({}, i.Interface, t)),
          (n.extend = i.extend),
          ct(n),
          n
        )
      }),
      ct(ut)
    var dt = ut.extend({data: null}),
      ht = ut.extend({data: null}),
      pt = [9, 13, 27, 32],
      yt = G && 'CompositionEvent' in window,
      mt = null
    G && 'documentMode' in document && (mt = document.documentMode)
    var _t = G && 'TextEvent' in window && !mt,
      vt = G && (!yt || (mt && 8 < mt && 11 >= mt)),
      gt = String.fromCharCode(32),
      bt = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture'
          },
          dependencies: ['compositionend', 'keypress', 'textInput', 'paste']
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture'
          },
          dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(
            ' '
          )
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture'
          },
          dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(
            ' '
          )
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture'
          },
          dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(
            ' '
          )
        }
      },
      St = !1
    function Tt(t, e) {
      switch (t) {
        case 'keyup':
          return -1 !== pt.indexOf(e.keyCode)
        case 'keydown':
          return 229 !== e.keyCode
        case 'keypress':
        case 'mousedown':
        case 'blur':
          return !0
        default:
          return !1
      }
    }
    function wt(t) {
      return 'object' == typeof (t = t.detail) && 'data' in t ? t.data : null
    }
    var xt = !1
    var kt = {
        eventTypes: bt,
        extractEvents: function(t, e, n, i) {
          var r = void 0,
            o = void 0
          if (yt)
            t: {
              switch (t) {
                case 'compositionstart':
                  r = bt.compositionStart
                  break t
                case 'compositionend':
                  r = bt.compositionEnd
                  break t
                case 'compositionupdate':
                  r = bt.compositionUpdate
                  break t
              }
              r = void 0
            }
          else
            xt
              ? Tt(t, n) && (r = bt.compositionEnd)
              : 'keydown' === t &&
                229 === n.keyCode &&
                (r = bt.compositionStart)
          return (
            r
              ? (vt &&
                  'ko' !== n.locale &&
                  (xt || r !== bt.compositionStart
                    ? r === bt.compositionEnd && xt && (o = ot())
                    : ((it = 'value' in (nt = i) ? nt.value : nt.textContent),
                      (xt = !0))),
                (r = dt.getPooled(r, e, n, i)),
                o ? (r.data = o) : null !== (o = wt(n)) && (r.data = o),
                W(r),
                (o = r))
              : (o = null),
            (t = _t
              ? (function(t, e) {
                  switch (t) {
                    case 'compositionend':
                      return wt(e)
                    case 'keypress':
                      return 32 !== e.which ? null : ((St = !0), gt)
                    case 'textInput':
                      return (t = e.data) === gt && St ? null : t
                    default:
                      return null
                  }
                })(t, n)
              : (function(t, e) {
                  if (xt)
                    return 'compositionend' === t || (!yt && Tt(t, e))
                      ? ((t = ot()), (rt = it = nt = null), (xt = !1), t)
                      : null
                  switch (t) {
                    case 'paste':
                      return null
                    case 'keypress':
                      if (
                        !(e.ctrlKey || e.altKey || e.metaKey) ||
                        (e.ctrlKey && e.altKey)
                      ) {
                        if (e.char && 1 < e.char.length) return e.char
                        if (e.which) return String.fromCharCode(e.which)
                      }
                      return null
                    case 'compositionend':
                      return vt && 'ko' !== e.locale ? null : e.data
                    default:
                      return null
                  }
                })(t, n))
              ? (((e = ht.getPooled(bt.beforeInput, e, n, i)).data = t), W(e))
              : (e = null),
            null === o ? e : null === e ? o : [o, e]
          )
        }
      },
      Pt = null,
      Ot = null,
      At = null
    function Et(t) {
      if ((t = T(t))) {
        'function' != typeof Pt && a('280')
        var e = S(t.stateNode)
        Pt(t.stateNode, t.type, e)
      }
    }
    function Ct(t) {
      Ot ? (At ? At.push(t) : (At = [t])) : (Ot = t)
    }
    function Ft() {
      if (Ot) {
        var t = Ot,
          e = At
        if (((At = Ot = null), Et(t), e))
          for (t = 0; t < e.length; t++) Et(e[t])
      }
    }
    function Mt(t, e) {
      return t(e)
    }
    function Rt(t, e, n) {
      return t(e, n)
    }
    function Nt() {}
    var qt = !1
    function jt(t, e) {
      if (qt) return t(e)
      qt = !0
      try {
        return Mt(t, e)
      } finally {
        ;(qt = !1), (null !== Ot || null !== At) && (Nt(), Ft())
      }
    }
    var It = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }
    function Lt(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase()
      return 'input' === e ? !!It[t.type] : 'textarea' === e
    }
    function Dt(t) {
      return (
        (t = t.target || t.srcElement || window).correspondingUseElement &&
          (t = t.correspondingUseElement),
        3 === t.nodeType ? t.parentNode : t
      )
    }
    function Bt(t) {
      if (!G) return !1
      var e = (t = 'on' + t) in document
      return (
        e ||
          ((e = document.createElement('div')).setAttribute(t, 'return;'),
          (e = 'function' == typeof e[t])),
        e
      )
    }
    function Ut(t) {
      var e = t.type
      return (
        (t = t.nodeName) &&
        'input' === t.toLowerCase() &&
        ('checkbox' === e || 'radio' === e)
      )
    }
    function Vt(t) {
      t._valueTracker ||
        (t._valueTracker = (function(t) {
          var e = Ut(t) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            i = '' + t[e]
          if (
            !t.hasOwnProperty(e) &&
            void 0 !== n &&
            'function' == typeof n.get &&
            'function' == typeof n.set
          ) {
            var r = n.get,
              o = n.set
            return (
              Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                  return r.call(this)
                },
                set: function(t) {
                  ;(i = '' + t), o.call(this, t)
                }
              }),
              Object.defineProperty(t, e, {enumerable: n.enumerable}),
              {
                getValue: function() {
                  return i
                },
                setValue: function(t) {
                  i = '' + t
                },
                stopTracking: function() {
                  ;(t._valueTracker = null), delete t[e]
                }
              }
            )
          }
        })(t))
    }
    function zt(t) {
      if (!t) return !1
      var e = t._valueTracker
      if (!e) return !0
      var n = e.getValue(),
        i = ''
      return (
        t && (i = Ut(t) ? (t.checked ? 'true' : 'false') : t.value),
        (t = i) !== n && (e.setValue(t), !0)
      )
    }
    var Wt = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    Wt.hasOwnProperty('ReactCurrentDispatcher') ||
      (Wt.ReactCurrentDispatcher = {current: null})
    var Gt = /^(.*)[\\\/]/,
      Qt = 'function' == typeof Symbol && Symbol.for,
      Ht = Qt ? Symbol.for('react.element') : 60103,
      $t = Qt ? Symbol.for('react.portal') : 60106,
      Xt = Qt ? Symbol.for('react.fragment') : 60107,
      Yt = Qt ? Symbol.for('react.strict_mode') : 60108,
      Kt = Qt ? Symbol.for('react.profiler') : 60114,
      Zt = Qt ? Symbol.for('react.provider') : 60109,
      Jt = Qt ? Symbol.for('react.context') : 60110,
      te = Qt ? Symbol.for('react.concurrent_mode') : 60111,
      ee = Qt ? Symbol.for('react.forward_ref') : 60112,
      ne = Qt ? Symbol.for('react.suspense') : 60113,
      ie = Qt ? Symbol.for('react.memo') : 60115,
      re = Qt ? Symbol.for('react.lazy') : 60116,
      oe = 'function' == typeof Symbol && Symbol.iterator
    function ae(t) {
      return null === t || 'object' != typeof t
        ? null
        : 'function' == typeof (t = (oe && t[oe]) || t['@@iterator']) ? t : null
    }
    function se(t) {
      if (null == t) return null
      if ('function' == typeof t) return t.displayName || t.name || null
      if ('string' == typeof t) return t
      switch (t) {
        case te:
          return 'ConcurrentMode'
        case Xt:
          return 'Fragment'
        case $t:
          return 'Portal'
        case Kt:
          return 'Profiler'
        case Yt:
          return 'StrictMode'
        case ne:
          return 'Suspense'
      }
      if ('object' == typeof t)
        switch (t.$$typeof) {
          case Jt:
            return 'Context.Consumer'
          case Zt:
            return 'Context.Provider'
          case ee:
            var e = t.render
            return (
              (e = e.displayName || e.name || ''),
              t.displayName ||
                ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            )
          case ie:
            return se(t.type)
          case re:
            if ((t = 1 === t._status ? t._result : null)) return se(t)
        }
      return null
    }
    function ue(t) {
      var e = ''
      do {
        switch (t.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = ''
            break
          default:
            var i = t._debugOwner,
              r = t._debugSource,
              o = se(t.type)
            ;(n = null),
              i && (n = se(i.type)),
              (i = o),
              (o = ''),
              r
                ? (o =
                    ' (at ' +
                    r.fileName.replace(Gt, '') +
                    ':' +
                    r.lineNumber +
                    ')')
                : n && (o = ' (created by ' + n + ')'),
              (n = '\n    in ' + (i || 'Unknown') + o)
        }
        ;(e += n), (t = t.return)
      } while (t)
      return e
    }
    var le = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      fe = Object.prototype.hasOwnProperty,
      ce = {},
      de = {}
    function he(t, e, n, i, r) {
      ;(this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
        (this.attributeName = i),
        (this.attributeNamespace = r),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e)
    }
    var pe = {}
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function(t) {
        pe[t] = new he(t, 0, !1, t, null)
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv']
      ].forEach(function(t) {
        var e = t[0]
        pe[e] = new he(e, 1, !1, t[1], null)
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(
        t
      ) {
        pe[t] = new he(t, 2, !1, t.toLowerCase(), null)
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha'
      ].forEach(function(t) {
        pe[t] = new he(t, 2, !1, t, null)
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function(t) {
          pe[t] = new he(t, 3, !1, t.toLowerCase(), null)
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function(t) {
        pe[t] = new he(t, 3, !0, t, null)
      }),
      ['capture', 'download'].forEach(function(t) {
        pe[t] = new he(t, 4, !1, t, null)
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function(t) {
        pe[t] = new he(t, 6, !1, t, null)
      }),
      ['rowSpan', 'start'].forEach(function(t) {
        pe[t] = new he(t, 5, !1, t.toLowerCase(), null)
      })
    var ye = /[\-:]([a-z])/g
    function me(t) {
      return t[1].toUpperCase()
    }
    function _e(t, e, n, i) {
      var r = pe.hasOwnProperty(e) ? pe[e] : null
      ;(null !== r
        ? 0 === r.type
        : !i &&
          (2 < e.length &&
            ('o' === e[0] || 'O' === e[0]) &&
            ('n' === e[1] || 'N' === e[1]))) ||
        ((function(t, e, n, i) {
          if (
            null == e ||
            (function(t, e, n, i) {
              if (null !== n && 0 === n.type) return !1
              switch (typeof e) {
                case 'function':
                case 'symbol':
                  return !0
                case 'boolean':
                  return (
                    !i &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                        'aria-' !== t)
                  )
                default:
                  return !1
              }
            })(t, e, n, i)
          )
            return !0
          if (i) return !1
          if (null !== n)
            switch (n.type) {
              case 3:
                return !e
              case 4:
                return !1 === e
              case 5:
                return isNaN(e)
              case 6:
                return isNaN(e) || 1 > e
            }
          return !1
        })(e, n, r, i) && (n = null),
        i || null === r
          ? (function(t) {
              return (
                !!fe.call(de, t) ||
                (!fe.call(ce, t) &&
                  (le.test(t) ? (de[t] = !0) : ((ce[t] = !0), !1)))
              )
            })(e) &&
            (null === n ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
          : r.mustUseProperty
            ? (t[r.propertyName] = null === n ? 3 !== r.type && '' : n)
            : ((e = r.attributeName),
              (i = r.attributeNamespace),
              null === n
                ? t.removeAttribute(e)
                : ((n =
                    3 === (r = r.type) || (4 === r && !0 === n) ? '' : '' + n),
                  i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
    }
    function ve(t) {
      switch (typeof t) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
          return t
        default:
          return ''
      }
    }
    function ge(t, e) {
      var n = e.checked
      return r({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : t._wrapperState.initialChecked
      })
    }
    function be(t, e) {
      var n = null == e.defaultValue ? '' : e.defaultValue,
        i = null != e.checked ? e.checked : e.defaultChecked
      ;(n = ve(null != e.value ? e.value : n)),
        (t._wrapperState = {
          initialChecked: i,
          initialValue: n,
          controlled:
            'checkbox' === e.type || 'radio' === e.type
              ? null != e.checked
              : null != e.value
        })
    }
    function Se(t, e) {
      null != (e = e.checked) && _e(t, 'checked', e, !1)
    }
    function Te(t, e) {
      Se(t, e)
      var n = ve(e.value),
        i = e.type
      if (null != n)
        'number' === i
          ? ((0 === n && '' === t.value) || t.value != n) && (t.value = '' + n)
          : t.value !== '' + n && (t.value = '' + n)
      else if ('submit' === i || 'reset' === i)
        return void t.removeAttribute('value')
      e.hasOwnProperty('value')
        ? xe(t, e.type, n)
        : e.hasOwnProperty('defaultValue') && xe(t, e.type, ve(e.defaultValue)),
        null == e.checked &&
          null != e.defaultChecked &&
          (t.defaultChecked = !!e.defaultChecked)
    }
    function we(t, e, n) {
      if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
        var i = e.type
        if (
          !(
            ('submit' !== i && 'reset' !== i) ||
            (void 0 !== e.value && null !== e.value)
          )
        )
          return
        ;(e = '' + t._wrapperState.initialValue),
          n || e === t.value || (t.value = e),
          (t.defaultValue = e)
      }
      '' !== (n = t.name) && (t.name = ''),
        (t.defaultChecked = !t.defaultChecked),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        '' !== n && (t.name = n)
    }
    function xe(t, e, n) {
      ;('number' === e && t.ownerDocument.activeElement === t) ||
        (null == n
          ? (t.defaultValue = '' + t._wrapperState.initialValue)
          : t.defaultValue !== '' + n && (t.defaultValue = '' + n))
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function(t) {
        var e = t.replace(ye, me)
        pe[e] = new he(e, 1, !1, t, null)
      }),
      'xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function(t) {
          var e = t.replace(ye, me)
          pe[e] = new he(e, 1, !1, t, 'http://www.w3.org/1999/xlink')
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function(t) {
        var e = t.replace(ye, me)
        pe[e] = new he(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace')
      }),
      ['tabIndex', 'crossOrigin'].forEach(function(t) {
        pe[t] = new he(t, 1, !1, t.toLowerCase(), null)
      })
    var ke = {
      change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture'
        },
        dependencies: 'blur change click focus input keydown keyup selectionchange'.split(
          ' '
        )
      }
    }
    function Pe(t, e, n) {
      return (
        ((t = ut.getPooled(ke.change, t, e, n)).type = 'change'), Ct(n), W(t), t
      )
    }
    var Oe = null,
      Ae = null
    function Ee(t) {
      F(t)
    }
    function Ce(t) {
      if (zt(I(t))) return t
    }
    function Fe(t, e) {
      if ('change' === t) return e
    }
    var Me = !1
    function Re() {
      Oe && (Oe.detachEvent('onpropertychange', Ne), (Ae = Oe = null))
    }
    function Ne(t) {
      'value' === t.propertyName && Ce(Ae) && jt(Ee, (t = Pe(Ae, t, Dt(t))))
    }
    function qe(t, e, n) {
      'focus' === t
        ? (Re(), (Ae = n), (Oe = e).attachEvent('onpropertychange', Ne))
        : 'blur' === t && Re()
    }
    function je(t) {
      if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
        return Ce(Ae)
    }
    function Ie(t, e) {
      if ('click' === t) return Ce(e)
    }
    function Le(t, e) {
      if ('input' === t || 'change' === t) return Ce(e)
    }
    G &&
      (Me =
        Bt('input') && (!document.documentMode || 9 < document.documentMode))
    var De = {
        eventTypes: ke,
        _isInputEventSupported: Me,
        extractEvents: function(t, e, n, i) {
          var r = e ? I(e) : window,
            o = void 0,
            a = void 0,
            s = r.nodeName && r.nodeName.toLowerCase()
          if (
            ('select' === s || ('input' === s && 'file' === r.type)
              ? (o = Fe)
              : Lt(r)
                ? Me ? (o = Le) : ((o = je), (a = qe))
                : (s = r.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === r.type || 'radio' === r.type) &&
                  (o = Ie),
            o && (o = o(t, e)))
          )
            return Pe(o, n, i)
          a && a(t, r, e),
            'blur' === t &&
              (t = r._wrapperState) &&
              t.controlled &&
              'number' === r.type &&
              xe(r, 'number', r.value)
        }
      },
      Be = ut.extend({view: null, detail: null}),
      Ue = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey'
      }
    function Ve(t) {
      var e = this.nativeEvent
      return e.getModifierState
        ? e.getModifierState(t)
        : !!(t = Ue[t]) && !!e[t]
    }
    function ze() {
      return Ve
    }
    var We = 0,
      Ge = 0,
      Qe = !1,
      He = !1,
      $e = Be.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: ze,
        button: null,
        buttons: null,
        relatedTarget: function(t) {
          return (
            t.relatedTarget ||
            (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
          )
        },
        movementX: function(t) {
          if ('movementX' in t) return t.movementX
          var e = We
          return (
            (We = t.screenX),
            Qe ? ('mousemove' === t.type ? t.screenX - e : 0) : ((Qe = !0), 0)
          )
        },
        movementY: function(t) {
          if ('movementY' in t) return t.movementY
          var e = Ge
          return (
            (Ge = t.screenY),
            He ? ('mousemove' === t.type ? t.screenY - e : 0) : ((He = !0), 0)
          )
        }
      }),
      Xe = $e.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
      }),
      Ye = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: ['mouseout', 'mouseover']
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: ['mouseout', 'mouseover']
        },
        pointerEnter: {
          registrationName: 'onPointerEnter',
          dependencies: ['pointerout', 'pointerover']
        },
        pointerLeave: {
          registrationName: 'onPointerLeave',
          dependencies: ['pointerout', 'pointerover']
        }
      },
      Ke = {
        eventTypes: Ye,
        extractEvents: function(t, e, n, i) {
          var r = 'mouseover' === t || 'pointerover' === t,
            o = 'mouseout' === t || 'pointerout' === t
          if ((r && (n.relatedTarget || n.fromElement)) || (!o && !r))
            return null
          if (
            ((r =
              i.window === i
                ? i
                : (r = i.ownerDocument)
                  ? r.defaultView || r.parentWindow
                  : window),
            o
              ? ((o = e),
                (e = (e = n.relatedTarget || n.toElement) ? q(e) : null))
              : (o = null),
            o === e)
          )
            return null
          var a = void 0,
            s = void 0,
            u = void 0,
            l = void 0
          'mouseout' === t || 'mouseover' === t
            ? ((a = $e),
              (s = Ye.mouseLeave),
              (u = Ye.mouseEnter),
              (l = 'mouse'))
            : ('pointerout' !== t && 'pointerover' !== t) ||
              ((a = Xe),
              (s = Ye.pointerLeave),
              (u = Ye.pointerEnter),
              (l = 'pointer'))
          var f = null == o ? r : I(o)
          if (
            ((r = null == e ? r : I(e)),
            ((t = a.getPooled(s, o, n, i)).type = l + 'leave'),
            (t.target = f),
            (t.relatedTarget = r),
            ((n = a.getPooled(u, e, n, i)).type = l + 'enter'),
            (n.target = r),
            (n.relatedTarget = f),
            (i = e),
            o && i)
          )
            t: {
              for (r = i, l = 0, a = e = o; a; a = D(a)) l++
              for (a = 0, u = r; u; u = D(u)) a++
              for (; 0 < l - a; ) (e = D(e)), l--
              for (; 0 < a - l; ) (r = D(r)), a--
              for (; l--; ) {
                if (e === r || e === r.alternate) break t
                ;(e = D(e)), (r = D(r))
              }
              e = null
            }
          else e = null
          for (
            r = e, e = [];
            o && o !== r && (null === (l = o.alternate) || l !== r);

          )
            e.push(o), (o = D(o))
          for (
            o = [];
            i && i !== r && (null === (l = i.alternate) || l !== r);

          )
            o.push(i), (i = D(i))
          for (i = 0; i < e.length; i++) V(e[i], 'bubbled', t)
          for (i = o.length; 0 < i--; ) V(o[i], 'captured', n)
          return [t, n]
        }
      }
    function Ze(t, e) {
      return (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
    }
    var Je = Object.prototype.hasOwnProperty
    function tn(t, e) {
      if (Ze(t, e)) return !0
      if (
        'object' != typeof t ||
        null === t ||
        'object' != typeof e ||
        null === e
      )
        return !1
      var n = Object.keys(t),
        i = Object.keys(e)
      if (n.length !== i.length) return !1
      for (i = 0; i < n.length; i++)
        if (!Je.call(e, n[i]) || !Ze(t[n[i]], e[n[i]])) return !1
      return !0
    }
    function en(t) {
      var e = t
      if (t.alternate) for (; e.return; ) e = e.return
      else {
        if (0 != (2 & e.effectTag)) return 1
        for (; e.return; ) if (0 != (2 & (e = e.return).effectTag)) return 1
      }
      return 3 === e.tag ? 2 : 3
    }
    function nn(t) {
      2 !== en(t) && a('188')
    }
    function rn(t) {
      if (
        !(t = (function(t) {
          var e = t.alternate
          if (!e) return 3 === (e = en(t)) && a('188'), 1 === e ? null : t
          for (var n = t, i = e; ; ) {
            var r = n.return,
              o = r ? r.alternate : null
            if (!r || !o) break
            if (r.child === o.child) {
              for (var s = r.child; s; ) {
                if (s === n) return nn(r), t
                if (s === i) return nn(r), e
                s = s.sibling
              }
              a('188')
            }
            if (n.return !== i.return) (n = r), (i = o)
            else {
              s = !1
              for (var u = r.child; u; ) {
                if (u === n) {
                  ;(s = !0), (n = r), (i = o)
                  break
                }
                if (u === i) {
                  ;(s = !0), (i = r), (n = o)
                  break
                }
                u = u.sibling
              }
              if (!s) {
                for (u = o.child; u; ) {
                  if (u === n) {
                    ;(s = !0), (n = o), (i = r)
                    break
                  }
                  if (u === i) {
                    ;(s = !0), (i = o), (n = r)
                    break
                  }
                  u = u.sibling
                }
                s || a('189')
              }
            }
            n.alternate !== i && a('190')
          }
          return 3 !== n.tag && a('188'), n.stateNode.current === n ? t : e
        })(t))
      )
        return null
      for (var e = t; ; ) {
        if (5 === e.tag || 6 === e.tag) return e
        if (e.child) (e.child.return = e), (e = e.child)
        else {
          if (e === t) break
          for (; !e.sibling; ) {
            if (!e.return || e.return === t) return null
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      }
      return null
    }
    var on = ut.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      an = ut.extend({
        clipboardData: function(t) {
          return 'clipboardData' in t ? t.clipboardData : window.clipboardData
        }
      }),
      sn = Be.extend({relatedTarget: null})
    function un(t) {
      var e = t.keyCode
      return (
        'charCode' in t
          ? 0 === (t = t.charCode) && 13 === e && (t = 13)
          : (t = e),
        10 === t && (t = 13),
        32 <= t || 13 === t ? t : 0
      )
    }
    var ln = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified'
      },
      fn = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta'
      },
      cn = Be.extend({
        key: function(t) {
          if (t.key) {
            var e = ln[t.key] || t.key
            if ('Unidentified' !== e) return e
          }
          return 'keypress' === t.type
            ? 13 === (t = un(t)) ? 'Enter' : String.fromCharCode(t)
            : 'keydown' === t.type || 'keyup' === t.type
              ? fn[t.keyCode] || 'Unidentified'
              : ''
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: ze,
        charCode: function(t) {
          return 'keypress' === t.type ? un(t) : 0
        },
        keyCode: function(t) {
          return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0
        },
        which: function(t) {
          return 'keypress' === t.type
            ? un(t)
            : 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0
        }
      }),
      dn = $e.extend({dataTransfer: null}),
      hn = Be.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: ze
      }),
      pn = ut.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      yn = $e.extend({
        deltaX: function(t) {
          return 'deltaX' in t
            ? t.deltaX
            : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
          return 'deltaY' in t
            ? t.deltaY
            : 'wheelDeltaY' in t
              ? -t.wheelDeltaY
              : 'wheelDelta' in t ? -t.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
      }),
      mn = [
        ['abort', 'abort'],
        [K, 'animationEnd'],
        [Z, 'animationIteration'],
        [J, 'animationStart'],
        ['canplay', 'canPlay'],
        ['canplaythrough', 'canPlayThrough'],
        ['drag', 'drag'],
        ['dragenter', 'dragEnter'],
        ['dragexit', 'dragExit'],
        ['dragleave', 'dragLeave'],
        ['dragover', 'dragOver'],
        ['durationchange', 'durationChange'],
        ['emptied', 'emptied'],
        ['encrypted', 'encrypted'],
        ['ended', 'ended'],
        ['error', 'error'],
        ['gotpointercapture', 'gotPointerCapture'],
        ['load', 'load'],
        ['loadeddata', 'loadedData'],
        ['loadedmetadata', 'loadedMetadata'],
        ['loadstart', 'loadStart'],
        ['lostpointercapture', 'lostPointerCapture'],
        ['mousemove', 'mouseMove'],
        ['mouseout', 'mouseOut'],
        ['mouseover', 'mouseOver'],
        ['playing', 'playing'],
        ['pointermove', 'pointerMove'],
        ['pointerout', 'pointerOut'],
        ['pointerover', 'pointerOver'],
        ['progress', 'progress'],
        ['scroll', 'scroll'],
        ['seeking', 'seeking'],
        ['stalled', 'stalled'],
        ['suspend', 'suspend'],
        ['timeupdate', 'timeUpdate'],
        ['toggle', 'toggle'],
        ['touchmove', 'touchMove'],
        [tt, 'transitionEnd'],
        ['waiting', 'waiting'],
        ['wheel', 'wheel']
      ],
      _n = {},
      vn = {}
    function gn(t, e) {
      var n = t[0],
        i = 'on' + ((t = t[1])[0].toUpperCase() + t.slice(1))
      ;(e = {
        phasedRegistrationNames: {bubbled: i, captured: i + 'Capture'},
        dependencies: [n],
        isInteractive: e
      }),
        (_n[t] = e),
        (vn[n] = e)
    }
    ;[
      ['blur', 'blur'],
      ['cancel', 'cancel'],
      ['click', 'click'],
      ['close', 'close'],
      ['contextmenu', 'contextMenu'],
      ['copy', 'copy'],
      ['cut', 'cut'],
      ['auxclick', 'auxClick'],
      ['dblclick', 'doubleClick'],
      ['dragend', 'dragEnd'],
      ['dragstart', 'dragStart'],
      ['drop', 'drop'],
      ['focus', 'focus'],
      ['input', 'input'],
      ['invalid', 'invalid'],
      ['keydown', 'keyDown'],
      ['keypress', 'keyPress'],
      ['keyup', 'keyUp'],
      ['mousedown', 'mouseDown'],
      ['mouseup', 'mouseUp'],
      ['paste', 'paste'],
      ['pause', 'pause'],
      ['play', 'play'],
      ['pointercancel', 'pointerCancel'],
      ['pointerdown', 'pointerDown'],
      ['pointerup', 'pointerUp'],
      ['ratechange', 'rateChange'],
      ['reset', 'reset'],
      ['seeked', 'seeked'],
      ['submit', 'submit'],
      ['touchcancel', 'touchCancel'],
      ['touchend', 'touchEnd'],
      ['touchstart', 'touchStart'],
      ['volumechange', 'volumeChange']
    ].forEach(function(t) {
      gn(t, !0)
    }),
      mn.forEach(function(t) {
        gn(t, !1)
      })
    var bn = {
        eventTypes: _n,
        isInteractiveTopLevelEventType: function(t) {
          return void 0 !== (t = vn[t]) && !0 === t.isInteractive
        },
        extractEvents: function(t, e, n, i) {
          var r = vn[t]
          if (!r) return null
          switch (t) {
            case 'keypress':
              if (0 === un(n)) return null
            case 'keydown':
            case 'keyup':
              t = cn
              break
            case 'blur':
            case 'focus':
              t = sn
              break
            case 'click':
              if (2 === n.button) return null
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              t = $e
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              t = dn
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              t = hn
              break
            case K:
            case Z:
            case J:
              t = on
              break
            case tt:
              t = pn
              break
            case 'scroll':
              t = Be
              break
            case 'wheel':
              t = yn
              break
            case 'copy':
            case 'cut':
            case 'paste':
              t = an
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              t = Xe
              break
            default:
              t = ut
          }
          return W((e = t.getPooled(r, e, n, i))), e
        }
      },
      Sn = bn.isInteractiveTopLevelEventType,
      Tn = []
    function wn(t) {
      var e = t.targetInst,
        n = e
      do {
        if (!n) {
          t.ancestors.push(n)
          break
        }
        var i
        for (i = n; i.return; ) i = i.return
        if (!(i = 3 !== i.tag ? null : i.stateNode.containerInfo)) break
        t.ancestors.push(n), (n = q(i))
      } while (n)
      for (n = 0; n < t.ancestors.length; n++) {
        e = t.ancestors[n]
        var r = Dt(t.nativeEvent)
        i = t.topLevelType
        for (var o = t.nativeEvent, a = null, s = 0; s < _.length; s++) {
          var u = _[s]
          u && (u = u.extractEvents(i, e, o, r)) && (a = k(a, u))
        }
        F(a)
      }
    }
    var xn = !0
    function kn(t, e) {
      if (!e) return null
      var n = (Sn(t) ? On : An).bind(null, t)
      e.addEventListener(t, n, !1)
    }
    function Pn(t, e) {
      if (!e) return null
      var n = (Sn(t) ? On : An).bind(null, t)
      e.addEventListener(t, n, !0)
    }
    function On(t, e) {
      Rt(An, t, e)
    }
    function An(t, e) {
      if (xn) {
        var n = Dt(e)
        if (
          (null === (n = q(n)) ||
            'number' != typeof n.tag ||
            2 === en(n) ||
            (n = null),
          Tn.length)
        ) {
          var i = Tn.pop()
          ;(i.topLevelType = t),
            (i.nativeEvent = e),
            (i.targetInst = n),
            (t = i)
        } else
          t = {topLevelType: t, nativeEvent: e, targetInst: n, ancestors: []}
        try {
          jt(wn, t)
        } finally {
          ;(t.topLevelType = null),
            (t.nativeEvent = null),
            (t.targetInst = null),
            (t.ancestors.length = 0),
            10 > Tn.length && Tn.push(t)
        }
      }
    }
    var En = {},
      Cn = 0,
      Fn = '_reactListenersID' + ('' + Math.random()).slice(2)
    function Mn(t) {
      return (
        Object.prototype.hasOwnProperty.call(t, Fn) ||
          ((t[Fn] = Cn++), (En[t[Fn]] = {})),
        En[t[Fn]]
      )
    }
    function Rn(t) {
      if (
        void 0 ===
        (t = t || ('undefined' != typeof document ? document : void 0))
      )
        return null
      try {
        return t.activeElement || t.body
      } catch (e) {
        return t.body
      }
    }
    function Nn(t) {
      for (; t && t.firstChild; ) t = t.firstChild
      return t
    }
    function qn(t, e) {
      var n,
        i = Nn(t)
      for (t = 0; i; ) {
        if (3 === i.nodeType) {
          if (((n = t + i.textContent.length), t <= e && n >= e))
            return {node: i, offset: e - t}
          t = n
        }
        t: {
          for (; i; ) {
            if (i.nextSibling) {
              i = i.nextSibling
              break t
            }
            i = i.parentNode
          }
          i = void 0
        }
        i = Nn(i)
      }
    }
    function jn() {
      for (var t = window, e = Rn(); e instanceof t.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof e.contentWindow.location.href
        } catch (t) {
          n = !1
        }
        if (!n) break
        e = Rn((t = e.contentWindow).document)
      }
      return e
    }
    function In(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase()
      return (
        e &&
        (('input' === e &&
          ('text' === t.type ||
            'search' === t.type ||
            'tel' === t.type ||
            'url' === t.type ||
            'password' === t.type)) ||
          'textarea' === e ||
          'true' === t.contentEditable)
      )
    }
    function Ln(t) {
      var e = jn(),
        n = t.focusedElem,
        i = t.selectionRange
      if (
        e !== n &&
        n &&
        n.ownerDocument &&
        (function t(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? t(e, n.parentNode)
                  : 'contains' in e
                    ? e.contains(n)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(n)))))
          )
        })(n.ownerDocument.documentElement, n)
      ) {
        if (null !== i && In(n))
          if (
            ((e = i.start),
            void 0 === (t = i.end) && (t = e),
            'selectionStart' in n)
          )
            (n.selectionStart = e),
              (n.selectionEnd = Math.min(t, n.value.length))
          else if (
            (t = ((e = n.ownerDocument || document) && e.defaultView) || window)
              .getSelection
          ) {
            t = t.getSelection()
            var r = n.textContent.length,
              o = Math.min(i.start, r)
            ;(i = void 0 === i.end ? o : Math.min(i.end, r)),
              !t.extend && o > i && ((r = i), (i = o), (o = r)),
              (r = qn(n, o))
            var a = qn(n, i)
            r &&
              a &&
              (1 !== t.rangeCount ||
                t.anchorNode !== r.node ||
                t.anchorOffset !== r.offset ||
                t.focusNode !== a.node ||
                t.focusOffset !== a.offset) &&
              ((e = e.createRange()).setStart(r.node, r.offset),
              t.removeAllRanges(),
              o > i
                ? (t.addRange(e), t.extend(a.node, a.offset))
                : (e.setEnd(a.node, a.offset), t.addRange(e)))
          }
        for (e = [], t = n; (t = t.parentNode); )
          1 === t.nodeType &&
            e.push({element: t, left: t.scrollLeft, top: t.scrollTop})
        for (
          'function' == typeof n.focus && n.focus(), n = 0;
          n < e.length;
          n++
        )
          ((t = e[n]).element.scrollLeft = t.left),
            (t.element.scrollTop = t.top)
      }
    }
    var Dn = G && 'documentMode' in document && 11 >= document.documentMode,
      Bn = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture'
          },
          dependencies: 'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
            ' '
          )
        }
      },
      Un = null,
      Vn = null,
      zn = null,
      Wn = !1
    function Gn(t, e) {
      var n =
        e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument
      return Wn || null == Un || Un !== Rn(n)
        ? null
        : ('selectionStart' in (n = Un) && In(n)
            ? (n = {start: n.selectionStart, end: n.selectionEnd})
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
              }),
          zn && tn(zn, n)
            ? null
            : ((zn = n),
              ((t = ut.getPooled(Bn.select, Vn, t, e)).type = 'select'),
              (t.target = Un),
              W(t),
              t))
    }
    var Qn = {
      eventTypes: Bn,
      extractEvents: function(t, e, n, i) {
        var r,
          o =
            i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument
        if (!(r = !o)) {
          t: {
            ;(o = Mn(o)), (r = b.onSelect)
            for (var a = 0; a < r.length; a++) {
              var s = r[a]
              if (!o.hasOwnProperty(s) || !o[s]) {
                o = !1
                break t
              }
            }
            o = !0
          }
          r = !o
        }
        if (r) return null
        switch (((o = e ? I(e) : window), t)) {
          case 'focus':
            ;(Lt(o) || 'true' === o.contentEditable) &&
              ((Un = o), (Vn = e), (zn = null))
            break
          case 'blur':
            zn = Vn = Un = null
            break
          case 'mousedown':
            Wn = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            return (Wn = !1), Gn(n, i)
          case 'selectionchange':
            if (Dn) break
          case 'keydown':
          case 'keyup':
            return Gn(n, i)
        }
        return null
      }
    }
    function Hn(t, e) {
      return (
        (t = r({children: void 0}, e)),
        (e = (function(t) {
          var e = ''
          return (
            i.Children.forEach(t, function(t) {
              null != t && (e += t)
            }),
            e
          )
        })(e.children)) && (t.children = e),
        t
      )
    }
    function $n(t, e, n, i) {
      if (((t = t.options), e)) {
        e = {}
        for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0
        for (n = 0; n < t.length; n++)
          (r = e.hasOwnProperty('$' + t[n].value)),
            t[n].selected !== r && (t[n].selected = r),
            r && i && (t[n].defaultSelected = !0)
      } else {
        for (n = '' + ve(n), e = null, r = 0; r < t.length; r++) {
          if (t[r].value === n)
            return (t[r].selected = !0), void (i && (t[r].defaultSelected = !0))
          null !== e || t[r].disabled || (e = t[r])
        }
        null !== e && (e.selected = !0)
      }
    }
    function Xn(t, e) {
      return (
        null != e.dangerouslySetInnerHTML && a('91'),
        r({}, e, {
          value: void 0,
          defaultValue: void 0,
          children: '' + t._wrapperState.initialValue
        })
      )
    }
    function Yn(t, e) {
      var n = e.value
      null == n &&
        ((n = e.defaultValue),
        null != (e = e.children) &&
          (null != n && a('92'),
          Array.isArray(e) && (1 >= e.length || a('93'), (e = e[0])),
          (n = e)),
        null == n && (n = '')),
        (t._wrapperState = {initialValue: ve(n)})
    }
    function Kn(t, e) {
      var n = ve(e.value),
        i = ve(e.defaultValue)
      null != n &&
        ((n = '' + n) !== t.value && (t.value = n),
        null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)),
        null != i && (t.defaultValue = '' + i)
    }
    function Zn(t) {
      var e = t.textContent
      e === t._wrapperState.initialValue && (t.value = e)
    }
    E.injectEventPluginOrder(
      'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
        ' '
      )
    ),
      (S = L),
      (T = j),
      (w = I),
      E.injectEventPluginsByName({
        SimpleEventPlugin: bn,
        EnterLeaveEventPlugin: Ke,
        ChangeEventPlugin: De,
        SelectEventPlugin: Qn,
        BeforeInputEventPlugin: kt
      })
    var Jn = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg'
    }
    function ti(t) {
      switch (t) {
        case 'svg':
          return 'http://www.w3.org/2000/svg'
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML'
        default:
          return 'http://www.w3.org/1999/xhtml'
      }
    }
    function ei(t, e) {
      return null == t || 'http://www.w3.org/1999/xhtml' === t
        ? ti(e)
        : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
          ? 'http://www.w3.org/1999/xhtml'
          : t
    }
    var ni = void 0,
      ii = (function(t) {
        return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function(e, n, i, r) {
              MSApp.execUnsafeLocalFunction(function() {
                return t(e, n)
              })
            }
          : t
      })(function(t, e) {
        if (t.namespaceURI !== Jn.svg || 'innerHTML' in t) t.innerHTML = e
        else {
          for (
            (ni = ni || document.createElement('div')).innerHTML =
              '<svg>' + e + '</svg>',
              e = ni.firstChild;
            t.firstChild;

          )
            t.removeChild(t.firstChild)
          for (; e.firstChild; ) t.appendChild(e.firstChild)
        }
      })
    function ri(t, e) {
      if (e) {
        var n = t.firstChild
        if (n && n === t.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = e)
      }
      t.textContent = e
    }
    var oi = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      ai = ['Webkit', 'ms', 'Moz', 'O']
    function si(t, e, n) {
      return null == e || 'boolean' == typeof e || '' === e
        ? ''
        : n ||
          'number' != typeof e ||
          0 === e ||
          (oi.hasOwnProperty(t) && oi[t])
          ? ('' + e).trim()
          : e + 'px'
    }
    function ui(t, e) {
      for (var n in ((t = t.style), e))
        if (e.hasOwnProperty(n)) {
          var i = 0 === n.indexOf('--'),
            r = si(n, e[n], i)
          'float' === n && (n = 'cssFloat'),
            i ? t.setProperty(n, r) : (t[n] = r)
        }
    }
    Object.keys(oi).forEach(function(t) {
      ai.forEach(function(e) {
        ;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (oi[e] = oi[t])
      })
    })
    var li = r(
      {menuitem: !0},
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    )
    function fi(t, e) {
      e &&
        (li[t] &&
          (null != e.children || null != e.dangerouslySetInnerHTML) &&
          a('137', t, ''),
        null != e.dangerouslySetInnerHTML &&
          (null != e.children && a('60'),
          ('object' == typeof e.dangerouslySetInnerHTML &&
            '__html' in e.dangerouslySetInnerHTML) ||
            a('61')),
        null != e.style && 'object' != typeof e.style && a('62', ''))
    }
    function ci(t, e) {
      if (-1 === t.indexOf('-')) return 'string' == typeof e.is
      switch (t) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1
        default:
          return !0
      }
    }
    function di(t, e) {
      var n = Mn(
        (t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument)
      )
      e = b[e]
      for (var i = 0; i < e.length; i++) {
        var r = e[i]
        if (!n.hasOwnProperty(r) || !n[r]) {
          switch (r) {
            case 'scroll':
              Pn('scroll', t)
              break
            case 'focus':
            case 'blur':
              Pn('focus', t), Pn('blur', t), (n.blur = !0), (n.focus = !0)
              break
            case 'cancel':
            case 'close':
              Bt(r) && Pn(r, t)
              break
            case 'invalid':
            case 'submit':
            case 'reset':
              break
            default:
              ;-1 === et.indexOf(r) && kn(r, t)
          }
          n[r] = !0
        }
      }
    }
    function hi() {}
    var pi = null,
      yi = null
    function mi(t, e) {
      switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!e.autoFocus
      }
      return !1
    }
    function _i(t, e) {
      return (
        'textarea' === t ||
        'option' === t ||
        'noscript' === t ||
        'string' == typeof e.children ||
        'number' == typeof e.children ||
        ('object' == typeof e.dangerouslySetInnerHTML &&
          null !== e.dangerouslySetInnerHTML &&
          null != e.dangerouslySetInnerHTML.__html)
      )
    }
    var vi = 'function' == typeof setTimeout ? setTimeout : void 0,
      gi = 'function' == typeof clearTimeout ? clearTimeout : void 0,
      bi = o.unstable_scheduleCallback,
      Si = o.unstable_cancelCallback
    function Ti(t) {
      for (t = t.nextSibling; t && 1 !== t.nodeType && 3 !== t.nodeType; )
        t = t.nextSibling
      return t
    }
    function wi(t) {
      for (t = t.firstChild; t && 1 !== t.nodeType && 3 !== t.nodeType; )
        t = t.nextSibling
      return t
    }
    new Set()
    var xi = [],
      ki = -1
    function Pi(t) {
      0 > ki || ((t.current = xi[ki]), (xi[ki] = null), ki--)
    }
    function Oi(t, e) {
      ;(xi[++ki] = t.current), (t.current = e)
    }
    var Ai = {},
      Ei = {current: Ai},
      Ci = {current: !1},
      Fi = Ai
    function Mi(t, e) {
      var n = t.type.contextTypes
      if (!n) return Ai
      var i = t.stateNode
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext
      var r,
        o = {}
      for (r in n) o[r] = e[r]
      return (
        i &&
          (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
          (t.__reactInternalMemoizedMaskedChildContext = o)),
        o
      )
    }
    function Ri(t) {
      return null != (t = t.childContextTypes)
    }
    function Ni(t) {
      Pi(Ci), Pi(Ei)
    }
    function qi(t) {
      Pi(Ci), Pi(Ei)
    }
    function ji(t, e, n) {
      Ei.current !== Ai && a('168'), Oi(Ei, e), Oi(Ci, n)
    }
    function Ii(t, e, n) {
      var i = t.stateNode
      if (((t = e.childContextTypes), 'function' != typeof i.getChildContext))
        return n
      for (var o in (i = i.getChildContext()))
        o in t || a('108', se(e) || 'Unknown', o)
      return r({}, n, i)
    }
    function Li(t) {
      var e = t.stateNode
      return (
        (e = (e && e.__reactInternalMemoizedMergedChildContext) || Ai),
        (Fi = Ei.current),
        Oi(Ei, e),
        Oi(Ci, Ci.current),
        !0
      )
    }
    function Di(t, e, n) {
      var i = t.stateNode
      i || a('169'),
        n
          ? ((e = Ii(t, e, Fi)),
            (i.__reactInternalMemoizedMergedChildContext = e),
            Pi(Ci),
            Pi(Ei),
            Oi(Ei, e))
          : Pi(Ci),
        Oi(Ci, n)
    }
    var Bi = null,
      Ui = null
    function Vi(t) {
      return function(e) {
        try {
          return t(e)
        } catch (t) {}
      }
    }
    function zi(t, e, n, i) {
      ;(this.tag = t),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = i),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null)
    }
    function Wi(t, e, n, i) {
      return new zi(t, e, n, i)
    }
    function Gi(t) {
      return !(!(t = t.prototype) || !t.isReactComponent)
    }
    function Qi(t, e) {
      var n = t.alternate
      return (
        null === n
          ? (((n = Wi(t.tag, e, t.key, t.mode)).elementType = t.elementType),
            (n.type = t.type),
            (n.stateNode = t.stateNode),
            (n.alternate = t),
            (t.alternate = n))
          : ((n.pendingProps = e),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = t.childExpirationTime),
        (n.expirationTime = t.expirationTime),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (n.contextDependencies = t.contextDependencies),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
      )
    }
    function Hi(t, e, n, i, r, o) {
      var s = 2
      if (((i = t), 'function' == typeof t)) Gi(t) && (s = 1)
      else if ('string' == typeof t) s = 5
      else
        t: switch (t) {
          case Xt:
            return $i(n.children, r, o, e)
          case te:
            return Xi(n, 3 | r, o, e)
          case Yt:
            return Xi(n, 2 | r, o, e)
          case Kt:
            return (
              ((t = Wi(12, n, e, 4 | r)).elementType = Kt),
              (t.type = Kt),
              (t.expirationTime = o),
              t
            )
          case ne:
            return (
              ((t = Wi(13, n, e, r)).elementType = ne),
              (t.type = ne),
              (t.expirationTime = o),
              t
            )
          default:
            if ('object' == typeof t && null !== t)
              switch (t.$$typeof) {
                case Zt:
                  s = 10
                  break t
                case Jt:
                  s = 9
                  break t
                case ee:
                  s = 11
                  break t
                case ie:
                  s = 14
                  break t
                case re:
                  ;(s = 16), (i = null)
                  break t
              }
            a('130', null == t ? t : typeof t, '')
        }
      return (
        ((e = Wi(s, n, e, r)).elementType = t),
        (e.type = i),
        (e.expirationTime = o),
        e
      )
    }
    function $i(t, e, n, i) {
      return ((t = Wi(7, t, i, e)).expirationTime = n), t
    }
    function Xi(t, e, n, i) {
      return (
        (t = Wi(8, t, i, e)),
        (e = 0 == (1 & e) ? Yt : te),
        (t.elementType = e),
        (t.type = e),
        (t.expirationTime = n),
        t
      )
    }
    function Yi(t, e, n) {
      return ((t = Wi(6, t, null, e)).expirationTime = n), t
    }
    function Ki(t, e, n) {
      return (
        ((e = Wi(
          4,
          null !== t.children ? t.children : [],
          t.key,
          e
        )).expirationTime = n),
        (e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation
        }),
        e
      )
    }
    function Zi(t, e) {
      t.didError = !1
      var n = t.earliestPendingTime
      0 === n
        ? (t.earliestPendingTime = t.latestPendingTime = e)
        : n < e
          ? (t.earliestPendingTime = e)
          : t.latestPendingTime > e && (t.latestPendingTime = e),
        er(e, t)
    }
    function Ji(t, e) {
      ;(t.didError = !1), t.latestPingedTime >= e && (t.latestPingedTime = 0)
      var n = t.earliestPendingTime,
        i = t.latestPendingTime
      n === e
        ? (t.earliestPendingTime = i === e ? (t.latestPendingTime = 0) : i)
        : i === e && (t.latestPendingTime = n),
        (n = t.earliestSuspendedTime),
        (i = t.latestSuspendedTime),
        0 === n
          ? (t.earliestSuspendedTime = t.latestSuspendedTime = e)
          : n < e
            ? (t.earliestSuspendedTime = e)
            : i > e && (t.latestSuspendedTime = e),
        er(e, t)
    }
    function tr(t, e) {
      var n = t.earliestPendingTime
      return n > e && (e = n), (t = t.earliestSuspendedTime) > e && (e = t), e
    }
    function er(t, e) {
      var n = e.earliestSuspendedTime,
        i = e.latestSuspendedTime,
        r = e.earliestPendingTime,
        o = e.latestPingedTime
      0 === (r = 0 !== r ? r : o) && (0 === t || i < t) && (r = i),
        0 !== (t = r) && n > t && (t = n),
        (e.nextExpirationTimeToWorkOn = r),
        (e.expirationTime = t)
    }
    function nr(t, e) {
      if (t && t.defaultProps)
        for (var n in ((e = r({}, e)), (t = t.defaultProps)))
          void 0 === e[n] && (e[n] = t[n])
      return e
    }
    var ir = new i.Component().refs
    function rr(t, e, n, i) {
      ;(n = null == (n = n(i, (e = t.memoizedState))) ? e : r({}, e, n)),
        (t.memoizedState = n),
        null !== (i = t.updateQueue) &&
          0 === t.expirationTime &&
          (i.baseState = n)
    }
    var or = {
      isMounted: function(t) {
        return !!(t = t._reactInternalFiber) && 2 === en(t)
      },
      enqueueSetState: function(t, e, n) {
        t = t._reactInternalFiber
        var i = Ss(),
          r = Xo((i = $a(i, t)))
        ;(r.payload = e),
          null != n && (r.callback = n),
          Va(),
          Ko(t, r),
          Ka(t, i)
      },
      enqueueReplaceState: function(t, e, n) {
        t = t._reactInternalFiber
        var i = Ss(),
          r = Xo((i = $a(i, t)))
        ;(r.tag = zo),
          (r.payload = e),
          null != n && (r.callback = n),
          Va(),
          Ko(t, r),
          Ka(t, i)
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternalFiber
        var n = Ss(),
          i = Xo((n = $a(n, t)))
        ;(i.tag = Wo), null != e && (i.callback = e), Va(), Ko(t, i), Ka(t, n)
      }
    }
    function ar(t, e, n, i, r, o, a) {
      return 'function' == typeof (t = t.stateNode).shouldComponentUpdate
        ? t.shouldComponentUpdate(i, o, a)
        : !e.prototype ||
            !e.prototype.isPureReactComponent ||
            (!tn(n, i) || !tn(r, o))
    }
    function sr(t, e, n) {
      var i = !1,
        r = Ai,
        o = e.contextType
      return (
        'object' == typeof o && null !== o
          ? (o = Uo(o))
          : ((r = Ri(e) ? Fi : Ei.current),
            (o = (i = null != (i = e.contextTypes)) ? Mi(t, r) : Ai)),
        (e = new e(n, o)),
        (t.memoizedState =
          null !== e.state && void 0 !== e.state ? e.state : null),
        (e.updater = or),
        (t.stateNode = e),
        (e._reactInternalFiber = t),
        i &&
          (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r),
          (t.__reactInternalMemoizedMaskedChildContext = o)),
        e
      )
    }
    function ur(t, e, n, i) {
      ;(t = e.state),
        'function' == typeof e.componentWillReceiveProps &&
          e.componentWillReceiveProps(n, i),
        'function' == typeof e.UNSAFE_componentWillReceiveProps &&
          e.UNSAFE_componentWillReceiveProps(n, i),
        e.state !== t && or.enqueueReplaceState(e, e.state, null)
    }
    function lr(t, e, n, i) {
      var r = t.stateNode
      ;(r.props = n), (r.state = t.memoizedState), (r.refs = ir)
      var o = e.contextType
      'object' == typeof o && null !== o
        ? (r.context = Uo(o))
        : ((o = Ri(e) ? Fi : Ei.current), (r.context = Mi(t, o))),
        null !== (o = t.updateQueue) &&
          (ea(t, o, n, r, i), (r.state = t.memoizedState)),
        'function' == typeof (o = e.getDerivedStateFromProps) &&
          (rr(t, e, o, n), (r.state = t.memoizedState)),
        'function' == typeof e.getDerivedStateFromProps ||
          'function' == typeof r.getSnapshotBeforeUpdate ||
          ('function' != typeof r.UNSAFE_componentWillMount &&
            'function' != typeof r.componentWillMount) ||
          ((e = r.state),
          'function' == typeof r.componentWillMount && r.componentWillMount(),
          'function' == typeof r.UNSAFE_componentWillMount &&
            r.UNSAFE_componentWillMount(),
          e !== r.state && or.enqueueReplaceState(r, r.state, null),
          null !== (o = t.updateQueue) &&
            (ea(t, o, n, r, i), (r.state = t.memoizedState))),
        'function' == typeof r.componentDidMount && (t.effectTag |= 4)
    }
    var fr = Array.isArray
    function cr(t, e, n) {
      if (
        null !== (t = n.ref) &&
        'function' != typeof t &&
        'object' != typeof t
      ) {
        if (n._owner) {
          n = n._owner
          var i = void 0
          n && (1 !== n.tag && a('309'), (i = n.stateNode)), i || a('147', t)
          var r = '' + t
          return null !== e &&
            null !== e.ref &&
            'function' == typeof e.ref &&
            e.ref._stringRef === r
            ? e.ref
            : (((e = function(t) {
                var e = i.refs
                e === ir && (e = i.refs = {}),
                  null === t ? delete e[r] : (e[r] = t)
              })._stringRef = r),
              e)
        }
        'string' != typeof t && a('284'), n._owner || a('290', t)
      }
      return t
    }
    function dr(t, e) {
      'textarea' !== t.type &&
        a(
          '31',
          '[object Object]' === Object.prototype.toString.call(e)
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : e,
          ''
        )
    }
    function hr(t) {
      function e(e, n) {
        if (t) {
          var i = e.lastEffect
          null !== i
            ? ((i.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8)
        }
      }
      function n(n, i) {
        if (!t) return null
        for (; null !== i; ) e(n, i), (i = i.sibling)
        return null
      }
      function i(t, e) {
        for (t = new Map(); null !== e; )
          null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling)
        return t
      }
      function r(t, e, n) {
        return ((t = Qi(t, e)).index = 0), (t.sibling = null), t
      }
      function o(e, n, i) {
        return (
          (e.index = i),
          t
            ? null !== (i = e.alternate)
              ? (i = i.index) < n ? ((e.effectTag = 2), n) : i
              : ((e.effectTag = 2), n)
            : n
        )
      }
      function s(e) {
        return t && null === e.alternate && (e.effectTag = 2), e
      }
      function u(t, e, n, i) {
        return null === e || 6 !== e.tag
          ? (((e = Yi(n, t.mode, i)).return = t), e)
          : (((e = r(e, n)).return = t), e)
      }
      function l(t, e, n, i) {
        return null !== e && e.elementType === n.type
          ? (((i = r(e, n.props)).ref = cr(t, e, n)), (i.return = t), i)
          : (((i = Hi(n.type, n.key, n.props, null, t.mode, i)).ref = cr(
              t,
              e,
              n
            )),
            (i.return = t),
            i)
      }
      function f(t, e, n, i) {
        return null === e ||
          4 !== e.tag ||
          e.stateNode.containerInfo !== n.containerInfo ||
          e.stateNode.implementation !== n.implementation
          ? (((e = Ki(n, t.mode, i)).return = t), e)
          : (((e = r(e, n.children || [])).return = t), e)
      }
      function c(t, e, n, i, o) {
        return null === e || 7 !== e.tag
          ? (((e = $i(n, t.mode, i, o)).return = t), e)
          : (((e = r(e, n)).return = t), e)
      }
      function d(t, e, n) {
        if ('string' == typeof e || 'number' == typeof e)
          return ((e = Yi('' + e, t.mode, n)).return = t), e
        if ('object' == typeof e && null !== e) {
          switch (e.$$typeof) {
            case Ht:
              return (
                ((n = Hi(e.type, e.key, e.props, null, t.mode, n)).ref = cr(
                  t,
                  null,
                  e
                )),
                (n.return = t),
                n
              )
            case $t:
              return ((e = Ki(e, t.mode, n)).return = t), e
          }
          if (fr(e) || ae(e))
            return ((e = $i(e, t.mode, n, null)).return = t), e
          dr(t, e)
        }
        return null
      }
      function h(t, e, n, i) {
        var r = null !== e ? e.key : null
        if ('string' == typeof n || 'number' == typeof n)
          return null !== r ? null : u(t, e, '' + n, i)
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case Ht:
              return n.key === r
                ? n.type === Xt
                  ? c(t, e, n.props.children, i, r)
                  : l(t, e, n, i)
                : null
            case $t:
              return n.key === r ? f(t, e, n, i) : null
          }
          if (fr(n) || ae(n)) return null !== r ? null : c(t, e, n, i, null)
          dr(t, n)
        }
        return null
      }
      function p(t, e, n, i, r) {
        if ('string' == typeof i || 'number' == typeof i)
          return u(e, (t = t.get(n) || null), '' + i, r)
        if ('object' == typeof i && null !== i) {
          switch (i.$$typeof) {
            case Ht:
              return (
                (t = t.get(null === i.key ? n : i.key) || null),
                i.type === Xt
                  ? c(e, t, i.props.children, r, i.key)
                  : l(e, t, i, r)
              )
            case $t:
              return f(e, (t = t.get(null === i.key ? n : i.key) || null), i, r)
          }
          if (fr(i) || ae(i)) return c(e, (t = t.get(n) || null), i, r, null)
          dr(e, i)
        }
        return null
      }
      function y(r, a, s, u) {
        for (
          var l = null, f = null, c = a, y = (a = 0), m = null;
          null !== c && y < s.length;
          y++
        ) {
          c.index > y ? ((m = c), (c = null)) : (m = c.sibling)
          var _ = h(r, c, s[y], u)
          if (null === _) {
            null === c && (c = m)
            break
          }
          t && c && null === _.alternate && e(r, c),
            (a = o(_, a, y)),
            null === f ? (l = _) : (f.sibling = _),
            (f = _),
            (c = m)
        }
        if (y === s.length) return n(r, c), l
        if (null === c) {
          for (; y < s.length; y++)
            (c = d(r, s[y], u)) &&
              ((a = o(c, a, y)),
              null === f ? (l = c) : (f.sibling = c),
              (f = c))
          return l
        }
        for (c = i(r, c); y < s.length; y++)
          (m = p(c, r, y, s[y], u)) &&
            (t && null !== m.alternate && c.delete(null === m.key ? y : m.key),
            (a = o(m, a, y)),
            null === f ? (l = m) : (f.sibling = m),
            (f = m))
        return (
          t &&
            c.forEach(function(t) {
              return e(r, t)
            }),
          l
        )
      }
      function m(r, s, u, l) {
        var f = ae(u)
        'function' != typeof f && a('150'), null == (u = f.call(u)) && a('151')
        for (
          var c = (f = null), y = s, m = (s = 0), _ = null, v = u.next();
          null !== y && !v.done;
          m++, v = u.next()
        ) {
          y.index > m ? ((_ = y), (y = null)) : (_ = y.sibling)
          var g = h(r, y, v.value, l)
          if (null === g) {
            y || (y = _)
            break
          }
          t && y && null === g.alternate && e(r, y),
            (s = o(g, s, m)),
            null === c ? (f = g) : (c.sibling = g),
            (c = g),
            (y = _)
        }
        if (v.done) return n(r, y), f
        if (null === y) {
          for (; !v.done; m++, v = u.next())
            null !== (v = d(r, v.value, l)) &&
              ((s = o(v, s, m)),
              null === c ? (f = v) : (c.sibling = v),
              (c = v))
          return f
        }
        for (y = i(r, y); !v.done; m++, v = u.next())
          null !== (v = p(y, r, m, v.value, l)) &&
            (t && null !== v.alternate && y.delete(null === v.key ? m : v.key),
            (s = o(v, s, m)),
            null === c ? (f = v) : (c.sibling = v),
            (c = v))
        return (
          t &&
            y.forEach(function(t) {
              return e(r, t)
            }),
          f
        )
      }
      return function(t, i, o, u) {
        var l =
          'object' == typeof o && null !== o && o.type === Xt && null === o.key
        l && (o = o.props.children)
        var f = 'object' == typeof o && null !== o
        if (f)
          switch (o.$$typeof) {
            case Ht:
              t: {
                for (f = o.key, l = i; null !== l; ) {
                  if (l.key === f) {
                    if (
                      7 === l.tag ? o.type === Xt : l.elementType === o.type
                    ) {
                      n(t, l.sibling),
                        ((i = r(
                          l,
                          o.type === Xt ? o.props.children : o.props
                        )).ref = cr(t, l, o)),
                        (i.return = t),
                        (t = i)
                      break t
                    }
                    n(t, l)
                    break
                  }
                  e(t, l), (l = l.sibling)
                }
                o.type === Xt
                  ? (((i = $i(o.props.children, t.mode, u, o.key)).return = t),
                    (t = i))
                  : (((u = Hi(
                      o.type,
                      o.key,
                      o.props,
                      null,
                      t.mode,
                      u
                    )).ref = cr(t, i, o)),
                    (u.return = t),
                    (t = u))
              }
              return s(t)
            case $t:
              t: {
                for (l = o.key; null !== i; ) {
                  if (i.key === l) {
                    if (
                      4 === i.tag &&
                      i.stateNode.containerInfo === o.containerInfo &&
                      i.stateNode.implementation === o.implementation
                    ) {
                      n(t, i.sibling),
                        ((i = r(i, o.children || [])).return = t),
                        (t = i)
                      break t
                    }
                    n(t, i)
                    break
                  }
                  e(t, i), (i = i.sibling)
                }
                ;((i = Ki(o, t.mode, u)).return = t), (t = i)
              }
              return s(t)
          }
        if ('string' == typeof o || 'number' == typeof o)
          return (
            (o = '' + o),
            null !== i && 6 === i.tag
              ? (n(t, i.sibling), ((i = r(i, o)).return = t), (t = i))
              : (n(t, i), ((i = Yi(o, t.mode, u)).return = t), (t = i)),
            s(t)
          )
        if (fr(o)) return y(t, i, o, u)
        if (ae(o)) return m(t, i, o, u)
        if ((f && dr(t, o), void 0 === o && !l))
          switch (t.tag) {
            case 1:
            case 0:
              a('152', (u = t.type).displayName || u.name || 'Component')
          }
        return n(t, i)
      }
    }
    var pr = hr(!0),
      yr = hr(!1),
      mr = {},
      _r = {current: mr},
      vr = {current: mr},
      gr = {current: mr}
    function br(t) {
      return t === mr && a('174'), t
    }
    function Sr(t, e) {
      Oi(gr, e), Oi(vr, t), Oi(_r, mr)
      var n = e.nodeType
      switch (n) {
        case 9:
        case 11:
          e = (e = e.documentElement) ? e.namespaceURI : ei(null, '')
          break
        default:
          e = ei(
            (e = (n = 8 === n ? e.parentNode : e).namespaceURI || null),
            (n = n.tagName)
          )
      }
      Pi(_r), Oi(_r, e)
    }
    function Tr(t) {
      Pi(_r), Pi(vr), Pi(gr)
    }
    function wr(t) {
      br(gr.current)
      var e = br(_r.current),
        n = ei(e, t.type)
      e !== n && (Oi(vr, t), Oi(_r, n))
    }
    function xr(t) {
      vr.current === t && (Pi(_r), Pi(vr))
    }
    var kr = 0,
      Pr = 2,
      Or = 4,
      Ar = 8,
      Er = 16,
      Cr = 32,
      Fr = 64,
      Mr = 128,
      Rr = Wt.ReactCurrentDispatcher,
      Nr = 0,
      qr = null,
      jr = null,
      Ir = null,
      Lr = null,
      Dr = null,
      Br = null,
      Ur = 0,
      Vr = null,
      zr = 0,
      Wr = !1,
      Gr = null,
      Qr = 0
    function Hr() {
      a('321')
    }
    function $r(t, e) {
      if (null === e) return !1
      for (var n = 0; n < e.length && n < t.length; n++)
        if (!Ze(t[n], e[n])) return !1
      return !0
    }
    function Xr(t, e, n, i, r, o) {
      if (
        ((Nr = o),
        (qr = e),
        (Ir = null !== t ? t.memoizedState : null),
        (Rr.current = null === Ir ? uo : lo),
        (e = n(i, r)),
        Wr)
      ) {
        do {
          ;(Wr = !1),
            (Qr += 1),
            (Ir = null !== t ? t.memoizedState : null),
            (Br = Lr),
            (Vr = Dr = jr = null),
            (Rr.current = lo),
            (e = n(i, r))
        } while (Wr)
        ;(Gr = null), (Qr = 0)
      }
      return (
        (Rr.current = so),
        ((t = qr).memoizedState = Lr),
        (t.expirationTime = Ur),
        (t.updateQueue = Vr),
        (t.effectTag |= zr),
        (t = null !== jr && null !== jr.next),
        (Nr = 0),
        (Br = Dr = Lr = Ir = jr = qr = null),
        (Ur = 0),
        (Vr = null),
        (zr = 0),
        t && a('300'),
        e
      )
    }
    function Yr() {
      ;(Rr.current = so),
        (Nr = 0),
        (Br = Dr = Lr = Ir = jr = qr = null),
        (Ur = 0),
        (Vr = null),
        (zr = 0),
        (Wr = !1),
        (Gr = null),
        (Qr = 0)
    }
    function Kr() {
      var t = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null
      }
      return null === Dr ? (Lr = Dr = t) : (Dr = Dr.next = t), Dr
    }
    function Zr() {
      if (null !== Br)
        (Br = (Dr = Br).next), (Ir = null !== (jr = Ir) ? jr.next : null)
      else {
        null === Ir && a('310')
        var t = {
          memoizedState: (jr = Ir).memoizedState,
          baseState: jr.baseState,
          queue: jr.queue,
          baseUpdate: jr.baseUpdate,
          next: null
        }
        ;(Dr = null === Dr ? (Lr = t) : (Dr.next = t)), (Ir = jr.next)
      }
      return Dr
    }
    function Jr(t, e) {
      return 'function' == typeof e ? e(t) : e
    }
    function to(t) {
      var e = Zr(),
        n = e.queue
      if ((null === n && a('311'), (n.lastRenderedReducer = t), 0 < Qr)) {
        var i = n.dispatch
        if (null !== Gr) {
          var r = Gr.get(n)
          if (void 0 !== r) {
            Gr.delete(n)
            var o = e.memoizedState
            do {
              ;(o = t(o, r.action)), (r = r.next)
            } while (null !== r)
            return (
              Ze(o, e.memoizedState) || (So = !0),
              (e.memoizedState = o),
              e.baseUpdate === n.last && (e.baseState = o),
              (n.lastRenderedState = o),
              [o, i]
            )
          }
        }
        return [e.memoizedState, i]
      }
      i = n.last
      var s = e.baseUpdate
      if (
        ((o = e.baseState),
        null !== s
          ? (null !== i && (i.next = null), (i = s.next))
          : (i = null !== i ? i.next : null),
        null !== i)
      ) {
        var u = (r = null),
          l = i,
          f = !1
        do {
          var c = l.expirationTime
          c < Nr
            ? (f || ((f = !0), (u = s), (r = o)), c > Ur && (Ur = c))
            : (o = l.eagerReducer === t ? l.eagerState : t(o, l.action)),
            (s = l),
            (l = l.next)
        } while (null !== l && l !== i)
        f || ((u = s), (r = o)),
          Ze(o, e.memoizedState) || (So = !0),
          (e.memoizedState = o),
          (e.baseUpdate = u),
          (e.baseState = r),
          (n.lastRenderedState = o)
      }
      return [e.memoizedState, n.dispatch]
    }
    function eo(t, e, n, i) {
      return (
        (t = {tag: t, create: e, destroy: n, deps: i, next: null}),
        null === Vr
          ? ((Vr = {lastEffect: null}).lastEffect = t.next = t)
          : null === (e = Vr.lastEffect)
            ? (Vr.lastEffect = t.next = t)
            : ((n = e.next), (e.next = t), (t.next = n), (Vr.lastEffect = t)),
        t
      )
    }
    function no(t, e, n, i) {
      var r = Kr()
      ;(zr |= t), (r.memoizedState = eo(e, n, void 0, void 0 === i ? null : i))
    }
    function io(t, e, n, i) {
      var r = Zr()
      i = void 0 === i ? null : i
      var o = void 0
      if (null !== jr) {
        var a = jr.memoizedState
        if (((o = a.destroy), null !== i && $r(i, a.deps)))
          return void eo(kr, n, o, i)
      }
      ;(zr |= t), (r.memoizedState = eo(e, n, o, i))
    }
    function ro(t, e) {
      return 'function' == typeof e
        ? ((t = t()),
          e(t),
          function() {
            e(null)
          })
        : null != e
          ? ((t = t()),
            (e.current = t),
            function() {
              e.current = null
            })
          : void 0
    }
    function oo() {}
    function ao(t, e, n) {
      25 > Qr || a('301')
      var i = t.alternate
      if (t === qr || (null !== i && i === qr))
        if (
          ((Wr = !0),
          (t = {
            expirationTime: Nr,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          }),
          null === Gr && (Gr = new Map()),
          void 0 === (n = Gr.get(e)))
        )
          Gr.set(e, t)
        else {
          for (e = n; null !== e.next; ) e = e.next
          e.next = t
        }
      else {
        Va()
        var r = Ss(),
          o = {
            expirationTime: (r = $a(r, t)),
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          },
          s = e.last
        if (null === s) o.next = o
        else {
          var u = s.next
          null !== u && (o.next = u), (s.next = o)
        }
        if (
          ((e.last = o),
          0 === t.expirationTime &&
            (null === i || 0 === i.expirationTime) &&
            null !== (i = e.lastRenderedReducer))
        )
          try {
            var l = e.lastRenderedState,
              f = i(l, n)
            if (((o.eagerReducer = i), (o.eagerState = f), Ze(f, l))) return
          } catch (t) {}
        Ka(t, r)
      }
    }
    var so = {
        readContext: Uo,
        useCallback: Hr,
        useContext: Hr,
        useEffect: Hr,
        useImperativeHandle: Hr,
        useLayoutEffect: Hr,
        useMemo: Hr,
        useReducer: Hr,
        useRef: Hr,
        useState: Hr,
        useDebugValue: Hr
      },
      uo = {
        readContext: Uo,
        useCallback: function(t, e) {
          return (Kr().memoizedState = [t, void 0 === e ? null : e]), t
        },
        useContext: Uo,
        useEffect: function(t, e) {
          return no(516, Mr | Fr, t, e)
        },
        useImperativeHandle: function(t, e, n) {
          return (
            (n = null != n ? n.concat([t]) : null),
            no(4, Or | Cr, ro.bind(null, e, t), n)
          )
        },
        useLayoutEffect: function(t, e) {
          return no(4, Or | Cr, t, e)
        },
        useMemo: function(t, e) {
          var n = Kr()
          return (
            (e = void 0 === e ? null : e),
            (t = t()),
            (n.memoizedState = [t, e]),
            t
          )
        },
        useReducer: function(t, e, n) {
          var i = Kr()
          return (
            (e = void 0 !== n ? n(e) : e),
            (i.memoizedState = i.baseState = e),
            (t = (t = i.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: e
            }).dispatch = ao.bind(null, qr, t)),
            [i.memoizedState, t]
          )
        },
        useRef: function(t) {
          return (t = {current: t}), (Kr().memoizedState = t)
        },
        useState: function(t) {
          var e = Kr()
          return (
            'function' == typeof t && (t = t()),
            (e.memoizedState = e.baseState = t),
            (t = (t = e.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: Jr,
              lastRenderedState: t
            }).dispatch = ao.bind(null, qr, t)),
            [e.memoizedState, t]
          )
        },
        useDebugValue: oo
      },
      lo = {
        readContext: Uo,
        useCallback: function(t, e) {
          var n = Zr()
          e = void 0 === e ? null : e
          var i = n.memoizedState
          return null !== i && null !== e && $r(e, i[1])
            ? i[0]
            : ((n.memoizedState = [t, e]), t)
        },
        useContext: Uo,
        useEffect: function(t, e) {
          return io(516, Mr | Fr, t, e)
        },
        useImperativeHandle: function(t, e, n) {
          return (
            (n = null != n ? n.concat([t]) : null),
            io(4, Or | Cr, ro.bind(null, e, t), n)
          )
        },
        useLayoutEffect: function(t, e) {
          return io(4, Or | Cr, t, e)
        },
        useMemo: function(t, e) {
          var n = Zr()
          e = void 0 === e ? null : e
          var i = n.memoizedState
          return null !== i && null !== e && $r(e, i[1])
            ? i[0]
            : ((t = t()), (n.memoizedState = [t, e]), t)
        },
        useReducer: to,
        useRef: function() {
          return Zr().memoizedState
        },
        useState: function(t) {
          return to(Jr)
        },
        useDebugValue: oo
      },
      fo = null,
      co = null,
      ho = !1
    function po(t, e) {
      var n = Wi(5, null, null, 0)
      ;(n.elementType = 'DELETED'),
        (n.type = 'DELETED'),
        (n.stateNode = e),
        (n.return = t),
        (n.effectTag = 8),
        null !== t.lastEffect
          ? ((t.lastEffect.nextEffect = n), (t.lastEffect = n))
          : (t.firstEffect = t.lastEffect = n)
    }
    function yo(t, e) {
      switch (t.tag) {
        case 5:
          var n = t.type
          return (
            null !==
              (e =
                1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase()
                  ? null
                  : e) && ((t.stateNode = e), !0)
          )
        case 6:
          return (
            null !==
              (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
            ((t.stateNode = e), !0)
          )
        case 13:
        default:
          return !1
      }
    }
    function mo(t) {
      if (ho) {
        var e = co
        if (e) {
          var n = e
          if (!yo(t, e)) {
            if (!(e = Ti(n)) || !yo(t, e))
              return (t.effectTag |= 2), (ho = !1), void (fo = t)
            po(fo, n)
          }
          ;(fo = t), (co = wi(e))
        } else (t.effectTag |= 2), (ho = !1), (fo = t)
      }
    }
    function _o(t) {
      for (
        t = t.return;
        null !== t && 5 !== t.tag && 3 !== t.tag && 18 !== t.tag;

      )
        t = t.return
      fo = t
    }
    function vo(t) {
      if (t !== fo) return !1
      if (!ho) return _o(t), (ho = !0), !1
      var e = t.type
      if (
        5 !== t.tag ||
        ('head' !== e && 'body' !== e && !_i(e, t.memoizedProps))
      )
        for (e = co; e; ) po(t, e), (e = Ti(e))
      return _o(t), (co = fo ? Ti(t.stateNode) : null), !0
    }
    function go() {
      ;(co = fo = null), (ho = !1)
    }
    var bo = Wt.ReactCurrentOwner,
      So = !1
    function To(t, e, n, i) {
      e.child = null === t ? yr(e, null, n, i) : pr(e, t.child, n, i)
    }
    function wo(t, e, n, i, r) {
      n = n.render
      var o = e.ref
      return (
        Bo(e, r),
        (i = Xr(t, e, n, i, o, r)),
        null === t || So
          ? ((e.effectTag |= 1), To(t, e, i, r), e.child)
          : ((e.updateQueue = t.updateQueue),
            (e.effectTag &= -517),
            t.expirationTime <= r && (t.expirationTime = 0),
            Mo(t, e, r))
      )
    }
    function xo(t, e, n, i, r, o) {
      if (null === t) {
        var a = n.type
        return 'function' != typeof a ||
          Gi(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((t = Hi(n.type, null, i, null, e.mode, o)).ref = e.ref),
            (t.return = e),
            (e.child = t))
          : ((e.tag = 15), (e.type = a), ko(t, e, a, i, r, o))
      }
      return (
        (a = t.child),
        r < o &&
        ((r = a.memoizedProps),
        (n = null !== (n = n.compare) ? n : tn)(r, i) && t.ref === e.ref)
          ? Mo(t, e, o)
          : ((e.effectTag |= 1),
            ((t = Qi(a, i)).ref = e.ref),
            (t.return = e),
            (e.child = t))
      )
    }
    function ko(t, e, n, i, r, o) {
      return null !== t &&
        tn(t.memoizedProps, i) &&
        t.ref === e.ref &&
        ((So = !1), r < o)
        ? Mo(t, e, o)
        : Oo(t, e, n, i, o)
    }
    function Po(t, e) {
      var n = e.ref
      ;((null === t && null !== n) || (null !== t && t.ref !== n)) &&
        (e.effectTag |= 128)
    }
    function Oo(t, e, n, i, r) {
      var o = Ri(n) ? Fi : Ei.current
      return (
        (o = Mi(e, o)),
        Bo(e, r),
        (n = Xr(t, e, n, i, o, r)),
        null === t || So
          ? ((e.effectTag |= 1), To(t, e, n, r), e.child)
          : ((e.updateQueue = t.updateQueue),
            (e.effectTag &= -517),
            t.expirationTime <= r && (t.expirationTime = 0),
            Mo(t, e, r))
      )
    }
    function Ao(t, e, n, i, r) {
      if (Ri(n)) {
        var o = !0
        Li(e)
      } else o = !1
      if ((Bo(e, r), null === e.stateNode))
        null !== t &&
          ((t.alternate = null), (e.alternate = null), (e.effectTag |= 2)),
          sr(e, n, i),
          lr(e, n, i, r),
          (i = !0)
      else if (null === t) {
        var a = e.stateNode,
          s = e.memoizedProps
        a.props = s
        var u = a.context,
          l = n.contextType
        'object' == typeof l && null !== l
          ? (l = Uo(l))
          : (l = Mi(e, (l = Ri(n) ? Fi : Ei.current)))
        var f = n.getDerivedStateFromProps,
          c =
            'function' == typeof f ||
            'function' == typeof a.getSnapshotBeforeUpdate
        c ||
          ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
            'function' != typeof a.componentWillReceiveProps) ||
          ((s !== i || u !== l) && ur(e, a, i, l)),
          (Qo = !1)
        var d = e.memoizedState
        u = a.state = d
        var h = e.updateQueue
        null !== h && (ea(e, h, i, a, r), (u = e.memoizedState)),
          s !== i || d !== u || Ci.current || Qo
            ? ('function' == typeof f &&
                (rr(e, n, f, i), (u = e.memoizedState)),
              (s = Qo || ar(e, n, s, i, d, u, l))
                ? (c ||
                    ('function' != typeof a.UNSAFE_componentWillMount &&
                      'function' != typeof a.componentWillMount) ||
                    ('function' == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    'function' == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  'function' == typeof a.componentDidMount &&
                    (e.effectTag |= 4))
                : ('function' == typeof a.componentDidMount &&
                    (e.effectTag |= 4),
                  (e.memoizedProps = i),
                  (e.memoizedState = u)),
              (a.props = i),
              (a.state = u),
              (a.context = l),
              (i = s))
            : ('function' == typeof a.componentDidMount && (e.effectTag |= 4),
              (i = !1))
      } else
        (a = e.stateNode),
          (s = e.memoizedProps),
          (a.props = e.type === e.elementType ? s : nr(e.type, s)),
          (u = a.context),
          'object' == typeof (l = n.contextType) && null !== l
            ? (l = Uo(l))
            : (l = Mi(e, (l = Ri(n) ? Fi : Ei.current))),
          (c =
            'function' == typeof (f = n.getDerivedStateFromProps) ||
            'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
              'function' != typeof a.componentWillReceiveProps) ||
            ((s !== i || u !== l) && ur(e, a, i, l)),
          (Qo = !1),
          (u = e.memoizedState),
          (d = a.state = u),
          null !== (h = e.updateQueue) &&
            (ea(e, h, i, a, r), (d = e.memoizedState)),
          s !== i || u !== d || Ci.current || Qo
            ? ('function' == typeof f &&
                (rr(e, n, f, i), (d = e.memoizedState)),
              (f = Qo || ar(e, n, s, i, u, d, l))
                ? (c ||
                    ('function' != typeof a.UNSAFE_componentWillUpdate &&
                      'function' != typeof a.componentWillUpdate) ||
                    ('function' == typeof a.componentWillUpdate &&
                      a.componentWillUpdate(i, d, l),
                    'function' == typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(i, d, l)),
                  'function' == typeof a.componentDidUpdate &&
                    (e.effectTag |= 4),
                  'function' == typeof a.getSnapshotBeforeUpdate &&
                    (e.effectTag |= 256))
                : ('function' != typeof a.componentDidUpdate ||
                    (s === t.memoizedProps && u === t.memoizedState) ||
                    (e.effectTag |= 4),
                  'function' != typeof a.getSnapshotBeforeUpdate ||
                    (s === t.memoizedProps && u === t.memoizedState) ||
                    (e.effectTag |= 256),
                  (e.memoizedProps = i),
                  (e.memoizedState = d)),
              (a.props = i),
              (a.state = d),
              (a.context = l),
              (i = f))
            : ('function' != typeof a.componentDidUpdate ||
                (s === t.memoizedProps && u === t.memoizedState) ||
                (e.effectTag |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                (s === t.memoizedProps && u === t.memoizedState) ||
                (e.effectTag |= 256),
              (i = !1))
      return Eo(t, e, n, i, o, r)
    }
    function Eo(t, e, n, i, r, o) {
      Po(t, e)
      var a = 0 != (64 & e.effectTag)
      if (!i && !a) return r && Di(e, n, !1), Mo(t, e, o)
      ;(i = e.stateNode), (bo.current = e)
      var s =
        a && 'function' != typeof n.getDerivedStateFromError ? null : i.render()
      return (
        (e.effectTag |= 1),
        null !== t && a
          ? ((e.child = pr(e, t.child, null, o)), (e.child = pr(e, null, s, o)))
          : To(t, e, s, o),
        (e.memoizedState = i.state),
        r && Di(e, n, !0),
        e.child
      )
    }
    function Co(t) {
      var e = t.stateNode
      e.pendingContext
        ? ji(0, e.pendingContext, e.pendingContext !== e.context)
        : e.context && ji(0, e.context, !1),
        Sr(t, e.containerInfo)
    }
    function Fo(t, e, n) {
      var i = e.mode,
        r = e.pendingProps,
        o = e.memoizedState
      if (0 == (64 & e.effectTag)) {
        o = null
        var a = !1
      } else
        (o = {timedOutAt: null !== o ? o.timedOutAt : 0}),
          (a = !0),
          (e.effectTag &= -65)
      if (null === t)
        if (a) {
          var s = r.fallback
          ;(t = $i(null, i, 0, null)),
            0 == (1 & e.mode) &&
              (t.child = null !== e.memoizedState ? e.child.child : e.child),
            (i = $i(s, i, n, null)),
            (t.sibling = i),
            ((n = t).return = i.return = e)
        } else n = i = yr(e, null, r.children, n)
      else
        null !== t.memoizedState
          ? ((s = (i = t.child).sibling),
            a
              ? ((n = r.fallback),
                (r = Qi(i, i.pendingProps)),
                0 == (1 & e.mode) &&
                  ((a = null !== e.memoizedState ? e.child.child : e.child) !==
                    i.child &&
                    (r.child = a)),
                (i = r.sibling = Qi(s, n, s.expirationTime)),
                (n = r),
                (r.childExpirationTime = 0),
                (n.return = i.return = e))
              : (n = i = pr(e, i.child, r.children, n)))
          : ((s = t.child),
            a
              ? ((a = r.fallback),
                ((r = $i(null, i, 0, null)).child = s),
                0 == (1 & e.mode) &&
                  (r.child =
                    null !== e.memoizedState ? e.child.child : e.child),
                ((i = r.sibling = $i(a, i, n, null)).effectTag |= 2),
                (n = r),
                (r.childExpirationTime = 0),
                (n.return = i.return = e))
              : (i = n = pr(e, s, r.children, n))),
          (e.stateNode = t.stateNode)
      return (e.memoizedState = o), (e.child = n), i
    }
    function Mo(t, e, n) {
      if (
        (null !== t && (e.contextDependencies = t.contextDependencies),
        e.childExpirationTime < n)
      )
        return null
      if ((null !== t && e.child !== t.child && a('153'), null !== e.child)) {
        for (
          n = Qi((t = e.child), t.pendingProps, t.expirationTime),
            e.child = n,
            n.return = e;
          null !== t.sibling;

        )
          (t = t.sibling),
            ((n = n.sibling = Qi(
              t,
              t.pendingProps,
              t.expirationTime
            )).return = e)
        n.sibling = null
      }
      return e.child
    }
    function Ro(t, e, n) {
      var i = e.expirationTime
      if (null !== t) {
        if (t.memoizedProps !== e.pendingProps || Ci.current) So = !0
        else if (i < n) {
          switch (((So = !1), e.tag)) {
            case 3:
              Co(e), go()
              break
            case 5:
              wr(e)
              break
            case 1:
              Ri(e.type) && Li(e)
              break
            case 4:
              Sr(e, e.stateNode.containerInfo)
              break
            case 10:
              Lo(e, e.memoizedProps.value)
              break
            case 13:
              if (null !== e.memoizedState)
                return 0 !== (i = e.child.childExpirationTime) && i >= n
                  ? Fo(t, e, n)
                  : null !== (e = Mo(t, e, n)) ? e.sibling : null
          }
          return Mo(t, e, n)
        }
      } else So = !1
      switch (((e.expirationTime = 0), e.tag)) {
        case 2:
          ;(i = e.elementType),
            null !== t &&
              ((t.alternate = null), (e.alternate = null), (e.effectTag |= 2)),
            (t = e.pendingProps)
          var r = Mi(e, Ei.current)
          if (
            (Bo(e, n),
            (r = Xr(null, e, i, t, r, n)),
            (e.effectTag |= 1),
            'object' == typeof r &&
              null !== r &&
              'function' == typeof r.render &&
              void 0 === r.$$typeof)
          ) {
            if (((e.tag = 1), Yr(), Ri(i))) {
              var o = !0
              Li(e)
            } else o = !1
            e.memoizedState =
              null !== r.state && void 0 !== r.state ? r.state : null
            var s = i.getDerivedStateFromProps
            'function' == typeof s && rr(e, i, s, t),
              (r.updater = or),
              (e.stateNode = r),
              (r._reactInternalFiber = e),
              lr(e, i, t, n),
              (e = Eo(null, e, i, !0, o, n))
          } else (e.tag = 0), To(null, e, r, n), (e = e.child)
          return e
        case 16:
          switch (((r = e.elementType),
          null !== t &&
            ((t.alternate = null), (e.alternate = null), (e.effectTag |= 2)),
          (o = e.pendingProps),
          (t = (function(t) {
            var e = t._result
            switch (t._status) {
              case 1:
                return e
              case 2:
              case 0:
                throw e
              default:
                switch (((t._status = 0),
                (e = (e = t._ctor)()).then(
                  function(e) {
                    0 === t._status &&
                      ((e = e.default), (t._status = 1), (t._result = e))
                  },
                  function(e) {
                    0 === t._status && ((t._status = 2), (t._result = e))
                  }
                ),
                t._status)) {
                  case 1:
                    return t._result
                  case 2:
                    throw t._result
                }
                throw ((t._result = e), e)
            }
          })(r)),
          (e.type = t),
          (r = e.tag = (function(t) {
            if ('function' == typeof t) return Gi(t) ? 1 : 0
            if (null != t) {
              if ((t = t.$$typeof) === ee) return 11
              if (t === ie) return 14
            }
            return 2
          })(t)),
          (o = nr(t, o)),
          (s = void 0),
          r)) {
            case 0:
              s = Oo(null, e, t, o, n)
              break
            case 1:
              s = Ao(null, e, t, o, n)
              break
            case 11:
              s = wo(null, e, t, o, n)
              break
            case 14:
              s = xo(null, e, t, nr(t.type, o), i, n)
              break
            default:
              a('306', t, '')
          }
          return s
        case 0:
          return (
            (i = e.type),
            (r = e.pendingProps),
            Oo(t, e, i, (r = e.elementType === i ? r : nr(i, r)), n)
          )
        case 1:
          return (
            (i = e.type),
            (r = e.pendingProps),
            Ao(t, e, i, (r = e.elementType === i ? r : nr(i, r)), n)
          )
        case 3:
          return (
            Co(e),
            null === (i = e.updateQueue) && a('282'),
            (r = null !== (r = e.memoizedState) ? r.element : null),
            ea(e, i, e.pendingProps, null, n),
            (i = e.memoizedState.element) === r
              ? (go(), (e = Mo(t, e, n)))
              : ((r = e.stateNode),
                (r = (null === t || null === t.child) && r.hydrate) &&
                  ((co = wi(e.stateNode.containerInfo)),
                  (fo = e),
                  (r = ho = !0)),
                r
                  ? ((e.effectTag |= 2), (e.child = yr(e, null, i, n)))
                  : (To(t, e, i, n), go()),
                (e = e.child)),
            e
          )
        case 5:
          return (
            wr(e),
            null === t && mo(e),
            (i = e.type),
            (r = e.pendingProps),
            (o = null !== t ? t.memoizedProps : null),
            (s = r.children),
            _i(i, r)
              ? (s = null)
              : null !== o && _i(i, o) && (e.effectTag |= 16),
            Po(t, e),
            1 !== n && 1 & e.mode && r.hidden
              ? ((e.expirationTime = e.childExpirationTime = 1), (e = null))
              : (To(t, e, s, n), (e = e.child)),
            e
          )
        case 6:
          return null === t && mo(e), null
        case 13:
          return Fo(t, e, n)
        case 4:
          return (
            Sr(e, e.stateNode.containerInfo),
            (i = e.pendingProps),
            null === t ? (e.child = pr(e, null, i, n)) : To(t, e, i, n),
            e.child
          )
        case 11:
          return (
            (i = e.type),
            (r = e.pendingProps),
            wo(t, e, i, (r = e.elementType === i ? r : nr(i, r)), n)
          )
        case 7:
          return To(t, e, e.pendingProps, n), e.child
        case 8:
        case 12:
          return To(t, e, e.pendingProps.children, n), e.child
        case 10:
          t: {
            if (
              ((i = e.type._context),
              (r = e.pendingProps),
              (s = e.memoizedProps),
              Lo(e, (o = r.value)),
              null !== s)
            ) {
              var u = s.value
              if (
                0 ===
                (o = Ze(u, o)
                  ? 0
                  : 0 |
                    ('function' == typeof i._calculateChangedBits
                      ? i._calculateChangedBits(u, o)
                      : 1073741823))
              ) {
                if (s.children === r.children && !Ci.current) {
                  e = Mo(t, e, n)
                  break t
                }
              } else
                for (null !== (u = e.child) && (u.return = e); null !== u; ) {
                  var l = u.contextDependencies
                  if (null !== l) {
                    s = u.child
                    for (var f = l.first; null !== f; ) {
                      if (f.context === i && 0 != (f.observedBits & o)) {
                        1 === u.tag && (((f = Xo(n)).tag = Wo), Ko(u, f)),
                          u.expirationTime < n && (u.expirationTime = n),
                          null !== (f = u.alternate) &&
                            f.expirationTime < n &&
                            (f.expirationTime = n),
                          (f = n)
                        for (var c = u.return; null !== c; ) {
                          var d = c.alternate
                          if (c.childExpirationTime < f)
                            (c.childExpirationTime = f),
                              null !== d &&
                                d.childExpirationTime < f &&
                                (d.childExpirationTime = f)
                          else {
                            if (!(null !== d && d.childExpirationTime < f))
                              break
                            d.childExpirationTime = f
                          }
                          c = c.return
                        }
                        l.expirationTime < n && (l.expirationTime = n)
                        break
                      }
                      f = f.next
                    }
                  } else s = 10 === u.tag && u.type === e.type ? null : u.child
                  if (null !== s) s.return = u
                  else
                    for (s = u; null !== s; ) {
                      if (s === e) {
                        s = null
                        break
                      }
                      if (null !== (u = s.sibling)) {
                        ;(u.return = s.return), (s = u)
                        break
                      }
                      s = s.return
                    }
                  u = s
                }
            }
            To(t, e, r.children, n), (e = e.child)
          }
          return e
        case 9:
          return (
            (r = e.type),
            (i = (o = e.pendingProps).children),
            Bo(e, n),
            (i = i((r = Uo(r, o.unstable_observedBits)))),
            (e.effectTag |= 1),
            To(t, e, i, n),
            e.child
          )
        case 14:
          return (
            (o = nr((r = e.type), e.pendingProps)),
            xo(t, e, r, (o = nr(r.type, o)), i, n)
          )
        case 15:
          return ko(t, e, e.type, e.pendingProps, i, n)
        case 17:
          return (
            (i = e.type),
            (r = e.pendingProps),
            (r = e.elementType === i ? r : nr(i, r)),
            null !== t &&
              ((t.alternate = null), (e.alternate = null), (e.effectTag |= 2)),
            (e.tag = 1),
            Ri(i) ? ((t = !0), Li(e)) : (t = !1),
            Bo(e, n),
            sr(e, i, r),
            lr(e, i, r, n),
            Eo(null, e, i, !0, t, n)
          )
      }
      a('156')
    }
    var No = {current: null},
      qo = null,
      jo = null,
      Io = null
    function Lo(t, e) {
      var n = t.type._context
      Oi(No, n._currentValue), (n._currentValue = e)
    }
    function Do(t) {
      var e = No.current
      Pi(No), (t.type._context._currentValue = e)
    }
    function Bo(t, e) {
      ;(qo = t), (Io = jo = null)
      var n = t.contextDependencies
      null !== n && n.expirationTime >= e && (So = !0),
        (t.contextDependencies = null)
    }
    function Uo(t, e) {
      return (
        Io !== t &&
          !1 !== e &&
          0 !== e &&
          (('number' == typeof e && 1073741823 !== e) ||
            ((Io = t), (e = 1073741823)),
          (e = {context: t, observedBits: e, next: null}),
          null === jo
            ? (null === qo && a('308'),
              (jo = e),
              (qo.contextDependencies = {first: e, expirationTime: 0}))
            : (jo = jo.next = e)),
        t._currentValue
      )
    }
    var Vo = 0,
      zo = 1,
      Wo = 2,
      Go = 3,
      Qo = !1
    function Ho(t) {
      return {
        baseState: t,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      }
    }
    function $o(t) {
      return {
        baseState: t.baseState,
        firstUpdate: t.firstUpdate,
        lastUpdate: t.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      }
    }
    function Xo(t) {
      return {
        expirationTime: t,
        tag: Vo,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null
      }
    }
    function Yo(t, e) {
      null === t.lastUpdate
        ? (t.firstUpdate = t.lastUpdate = e)
        : ((t.lastUpdate.next = e), (t.lastUpdate = e))
    }
    function Ko(t, e) {
      var n = t.alternate
      if (null === n) {
        var i = t.updateQueue,
          r = null
        null === i && (i = t.updateQueue = Ho(t.memoizedState))
      } else
        (i = t.updateQueue),
          (r = n.updateQueue),
          null === i
            ? null === r
              ? ((i = t.updateQueue = Ho(t.memoizedState)),
                (r = n.updateQueue = Ho(n.memoizedState)))
              : (i = t.updateQueue = $o(r))
            : null === r && (r = n.updateQueue = $o(i))
      null === r || i === r
        ? Yo(i, e)
        : null === i.lastUpdate || null === r.lastUpdate
          ? (Yo(i, e), Yo(r, e))
          : (Yo(i, e), (r.lastUpdate = e))
    }
    function Zo(t, e) {
      var n = t.updateQueue
      null ===
      (n = null === n ? (t.updateQueue = Ho(t.memoizedState)) : Jo(t, n))
        .lastCapturedUpdate
        ? (n.firstCapturedUpdate = n.lastCapturedUpdate = e)
        : ((n.lastCapturedUpdate.next = e), (n.lastCapturedUpdate = e))
    }
    function Jo(t, e) {
      var n = t.alternate
      return null !== n && e === n.updateQueue && (e = t.updateQueue = $o(e)), e
    }
    function ta(t, e, n, i, o, a) {
      switch (n.tag) {
        case zo:
          return 'function' == typeof (t = n.payload) ? t.call(a, i, o) : t
        case Go:
          t.effectTag = (-2049 & t.effectTag) | 64
        case Vo:
          if (
            null ==
            (o = 'function' == typeof (t = n.payload) ? t.call(a, i, o) : t)
          )
            break
          return r({}, i, o)
        case Wo:
          Qo = !0
      }
      return i
    }
    function ea(t, e, n, i, r) {
      Qo = !1
      for (
        var o = (e = Jo(t, e)).baseState,
          a = null,
          s = 0,
          u = e.firstUpdate,
          l = o;
        null !== u;

      ) {
        var f = u.expirationTime
        f < r
          ? (null === a && ((a = u), (o = l)), s < f && (s = f))
          : ((l = ta(t, 0, u, l, n, i)),
            null !== u.callback &&
              ((t.effectTag |= 32),
              (u.nextEffect = null),
              null === e.lastEffect
                ? (e.firstEffect = e.lastEffect = u)
                : ((e.lastEffect.nextEffect = u), (e.lastEffect = u)))),
          (u = u.next)
      }
      for (f = null, u = e.firstCapturedUpdate; null !== u; ) {
        var c = u.expirationTime
        c < r
          ? (null === f && ((f = u), null === a && (o = l)), s < c && (s = c))
          : ((l = ta(t, 0, u, l, n, i)),
            null !== u.callback &&
              ((t.effectTag |= 32),
              (u.nextEffect = null),
              null === e.lastCapturedEffect
                ? (e.firstCapturedEffect = e.lastCapturedEffect = u)
                : ((e.lastCapturedEffect.nextEffect = u),
                  (e.lastCapturedEffect = u)))),
          (u = u.next)
      }
      null === a && (e.lastUpdate = null),
        null === f ? (e.lastCapturedUpdate = null) : (t.effectTag |= 32),
        null === a && null === f && (o = l),
        (e.baseState = o),
        (e.firstUpdate = a),
        (e.firstCapturedUpdate = f),
        (t.expirationTime = s),
        (t.memoizedState = l)
    }
    function na(t, e, n) {
      null !== e.firstCapturedUpdate &&
        (null !== e.lastUpdate &&
          ((e.lastUpdate.next = e.firstCapturedUpdate),
          (e.lastUpdate = e.lastCapturedUpdate)),
        (e.firstCapturedUpdate = e.lastCapturedUpdate = null)),
        ia(e.firstEffect, n),
        (e.firstEffect = e.lastEffect = null),
        ia(e.firstCapturedEffect, n),
        (e.firstCapturedEffect = e.lastCapturedEffect = null)
    }
    function ia(t, e) {
      for (; null !== t; ) {
        var n = t.callback
        if (null !== n) {
          t.callback = null
          var i = e
          'function' != typeof n && a('191', n), n.call(i)
        }
        t = t.nextEffect
      }
    }
    function ra(t, e) {
      return {value: t, source: e, stack: ue(e)}
    }
    function oa(t) {
      t.effectTag |= 4
    }
    var aa = void 0,
      sa = void 0,
      ua = void 0,
      la = void 0
    ;(aa = function(t, e) {
      for (var n = e.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode)
        else if (4 !== n.tag && null !== n.child) {
          ;(n.child.return = n), (n = n.child)
          continue
        }
        if (n === e) break
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return
          n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
      }
    }),
      (sa = function() {}),
      (ua = function(t, e, n, i, o) {
        var a = t.memoizedProps
        if (a !== i) {
          var s = e.stateNode
          switch ((br(_r.current), (t = null), n)) {
            case 'input':
              ;(a = ge(s, a)), (i = ge(s, i)), (t = [])
              break
            case 'option':
              ;(a = Hn(s, a)), (i = Hn(s, i)), (t = [])
              break
            case 'select':
              ;(a = r({}, a, {value: void 0})),
                (i = r({}, i, {value: void 0})),
                (t = [])
              break
            case 'textarea':
              ;(a = Xn(s, a)), (i = Xn(s, i)), (t = [])
              break
            default:
              'function' != typeof a.onClick &&
                'function' == typeof i.onClick &&
                (s.onclick = hi)
          }
          fi(n, i), (s = n = void 0)
          var u = null
          for (n in a)
            if (!i.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
              if ('style' === n) {
                var l = a[n]
                for (s in l) l.hasOwnProperty(s) && (u || (u = {}), (u[s] = ''))
              } else
                'dangerouslySetInnerHTML' !== n &&
                  'children' !== n &&
                  'suppressContentEditableWarning' !== n &&
                  'suppressHydrationWarning' !== n &&
                  'autoFocus' !== n &&
                  (g.hasOwnProperty(n)
                    ? t || (t = [])
                    : (t = t || []).push(n, null))
          for (n in i) {
            var f = i[n]
            if (
              ((l = null != a ? a[n] : void 0),
              i.hasOwnProperty(n) && f !== l && (null != f || null != l))
            )
              if ('style' === n)
                if (l) {
                  for (s in l)
                    !l.hasOwnProperty(s) ||
                      (f && f.hasOwnProperty(s)) ||
                      (u || (u = {}), (u[s] = ''))
                  for (s in f)
                    f.hasOwnProperty(s) &&
                      l[s] !== f[s] &&
                      (u || (u = {}), (u[s] = f[s]))
                } else u || (t || (t = []), t.push(n, u)), (u = f)
              else
                'dangerouslySetInnerHTML' === n
                  ? ((f = f ? f.__html : void 0),
                    (l = l ? l.__html : void 0),
                    null != f && l !== f && (t = t || []).push(n, '' + f))
                  : 'children' === n
                    ? l === f ||
                      ('string' != typeof f && 'number' != typeof f) ||
                      (t = t || []).push(n, '' + f)
                    : 'suppressContentEditableWarning' !== n &&
                      'suppressHydrationWarning' !== n &&
                      (g.hasOwnProperty(n)
                        ? (null != f && di(o, n), t || l === f || (t = []))
                        : (t = t || []).push(n, f))
          }
          u && (t = t || []).push('style', u),
            (o = t),
            (e.updateQueue = o) && oa(e)
        }
      }),
      (la = function(t, e, n, i) {
        n !== i && oa(e)
      })
    var fa = 'function' == typeof WeakSet ? WeakSet : Set
    function ca(t, e) {
      var n = e.source,
        i = e.stack
      null === i && null !== n && (i = ue(n)),
        null !== n && se(n.type),
        (e = e.value),
        null !== t && 1 === t.tag && se(t.type)
      try {
        console.error(e)
      } catch (t) {
        setTimeout(function() {
          throw t
        })
      }
    }
    function da(t) {
      var e = t.ref
      if (null !== e)
        if ('function' == typeof e)
          try {
            e(null)
          } catch (e) {
            Ha(t, e)
          }
        else e.current = null
    }
    function ha(t, e, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var i = (n = n.next)
        do {
          if ((i.tag & t) !== kr) {
            var r = i.destroy
            ;(i.destroy = void 0), void 0 !== r && r()
          }
          ;(i.tag & e) !== kr && ((r = i.create), (i.destroy = r())),
            (i = i.next)
        } while (i !== n)
      }
    }
    function pa(t) {
      switch (('function' == typeof Ui && Ui(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          var e = t.updateQueue
          if (null !== e && null !== (e = e.lastEffect)) {
            var n = (e = e.next)
            do {
              var i = n.destroy
              if (void 0 !== i) {
                var r = t
                try {
                  i()
                } catch (t) {
                  Ha(r, t)
                }
              }
              n = n.next
            } while (n !== e)
          }
          break
        case 1:
          if (
            (da(t), 'function' == typeof (e = t.stateNode).componentWillUnmount)
          )
            try {
              ;(e.props = t.memoizedProps),
                (e.state = t.memoizedState),
                e.componentWillUnmount()
            } catch (e) {
              Ha(t, e)
            }
          break
        case 5:
          da(t)
          break
        case 4:
          _a(t)
      }
    }
    function ya(t) {
      return 5 === t.tag || 3 === t.tag || 4 === t.tag
    }
    function ma(t) {
      t: {
        for (var e = t.return; null !== e; ) {
          if (ya(e)) {
            var n = e
            break t
          }
          e = e.return
        }
        a('160'), (n = void 0)
      }
      var i = (e = void 0)
      switch (n.tag) {
        case 5:
          ;(e = n.stateNode), (i = !1)
          break
        case 3:
        case 4:
          ;(e = n.stateNode.containerInfo), (i = !0)
          break
        default:
          a('161')
      }
      16 & n.effectTag && (ri(e, ''), (n.effectTag &= -17))
      t: e: for (n = t; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || ya(n.return)) {
            n = null
            break t
          }
          n = n.return
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue e
          if (null === n.child || 4 === n.tag) continue e
          ;(n.child.return = n), (n = n.child)
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode
          break t
        }
      }
      for (var r = t; ; ) {
        if (5 === r.tag || 6 === r.tag)
          if (n)
            if (i) {
              var o = e,
                s = r.stateNode,
                u = n
              8 === o.nodeType
                ? o.parentNode.insertBefore(s, u)
                : o.insertBefore(s, u)
            } else e.insertBefore(r.stateNode, n)
          else
            i
              ? ((s = e),
                (u = r.stateNode),
                8 === s.nodeType
                  ? (o = s.parentNode).insertBefore(u, s)
                  : (o = s).appendChild(u),
                null != (s = s._reactRootContainer) ||
                  null !== o.onclick ||
                  (o.onclick = hi))
              : e.appendChild(r.stateNode)
        else if (4 !== r.tag && null !== r.child) {
          ;(r.child.return = r), (r = r.child)
          continue
        }
        if (r === t) break
        for (; null === r.sibling; ) {
          if (null === r.return || r.return === t) return
          r = r.return
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
      }
    }
    function _a(t) {
      for (var e = t, n = !1, i = void 0, r = void 0; ; ) {
        if (!n) {
          n = e.return
          t: for (;;) {
            switch ((null === n && a('160'), n.tag)) {
              case 5:
                ;(i = n.stateNode), (r = !1)
                break t
              case 3:
              case 4:
                ;(i = n.stateNode.containerInfo), (r = !0)
                break t
            }
            n = n.return
          }
          n = !0
        }
        if (5 === e.tag || 6 === e.tag) {
          t: for (var o = e, s = o; ; )
            if ((pa(s), null !== s.child && 4 !== s.tag))
              (s.child.return = s), (s = s.child)
            else {
              if (s === o) break
              for (; null === s.sibling; ) {
                if (null === s.return || s.return === o) break t
                s = s.return
              }
              ;(s.sibling.return = s.return), (s = s.sibling)
            }
          r
            ? ((o = i),
              (s = e.stateNode),
              8 === o.nodeType ? o.parentNode.removeChild(s) : o.removeChild(s))
            : i.removeChild(e.stateNode)
        } else if (4 === e.tag) {
          if (null !== e.child) {
            ;(i = e.stateNode.containerInfo),
              (r = !0),
              (e.child.return = e),
              (e = e.child)
            continue
          }
        } else if ((pa(e), null !== e.child)) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) return
          4 === (e = e.return).tag && (n = !1)
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    }
    function va(t, e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ha(Or, Ar, e)
          break
        case 1:
          break
        case 5:
          var n = e.stateNode
          if (null != n) {
            var i = e.memoizedProps
            t = null !== t ? t.memoizedProps : i
            var r = e.type,
              o = e.updateQueue
            ;(e.updateQueue = null),
              null !== o &&
                (function(t, e, n, i, r) {
                  ;(t[N] = r),
                    'input' === n &&
                      'radio' === r.type &&
                      null != r.name &&
                      Se(t, r),
                    ci(n, i),
                    (i = ci(n, r))
                  for (var o = 0; o < e.length; o += 2) {
                    var a = e[o],
                      s = e[o + 1]
                    'style' === a
                      ? ui(t, s)
                      : 'dangerouslySetInnerHTML' === a
                        ? ii(t, s)
                        : 'children' === a ? ri(t, s) : _e(t, a, s, i)
                  }
                  switch (n) {
                    case 'input':
                      Te(t, r)
                      break
                    case 'textarea':
                      Kn(t, r)
                      break
                    case 'select':
                      ;(e = t._wrapperState.wasMultiple),
                        (t._wrapperState.wasMultiple = !!r.multiple),
                        null != (n = r.value)
                          ? $n(t, !!r.multiple, n, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? $n(t, !!r.multiple, r.defaultValue, !0)
                              : $n(t, !!r.multiple, r.multiple ? [] : '', !1))
                  }
                })(n, o, r, t, i)
          }
          break
        case 6:
          null === e.stateNode && a('162'),
            (e.stateNode.nodeValue = e.memoizedProps)
          break
        case 3:
        case 12:
          break
        case 13:
          if (
            ((n = e.memoizedState),
            (i = void 0),
            (t = e),
            null === n
              ? (i = !1)
              : ((i = !0),
                (t = e.child),
                0 === n.timedOutAt && (n.timedOutAt = Ss())),
            null !== t &&
              (function(t, e) {
                for (var n = t; ; ) {
                  if (5 === n.tag) {
                    var i = n.stateNode
                    if (e) i.style.display = 'none'
                    else {
                      i = n.stateNode
                      var r = n.memoizedProps.style
                      ;(r =
                        null != r && r.hasOwnProperty('display')
                          ? r.display
                          : null),
                        (i.style.display = si('display', r))
                    }
                  } else if (6 === n.tag)
                    n.stateNode.nodeValue = e ? '' : n.memoizedProps
                  else {
                    if (13 === n.tag && null !== n.memoizedState) {
                      ;((i = n.child.sibling).return = n), (n = i)
                      continue
                    }
                    if (null !== n.child) {
                      ;(n.child.return = n), (n = n.child)
                      continue
                    }
                  }
                  if (n === t) break
                  for (; null === n.sibling; ) {
                    if (null === n.return || n.return === t) return
                    n = n.return
                  }
                  ;(n.sibling.return = n.return), (n = n.sibling)
                }
              })(t, i),
            null !== (n = e.updateQueue))
          ) {
            e.updateQueue = null
            var s = e.stateNode
            null === s && (s = e.stateNode = new fa()),
              n.forEach(function(t) {
                var n = function(t, e) {
                  var n = t.stateNode
                  null !== n && n.delete(e),
                    (e = $a((e = Ss()), t)),
                    null !== (t = Ya(t, e)) &&
                      (Zi(t, e), 0 !== (e = t.expirationTime) && Ts(t, e))
                }.bind(null, e, t)
                s.has(t) || (s.add(t), t.then(n, n))
              })
          }
          break
        case 17:
          break
        default:
          a('163')
      }
    }
    var ga = 'function' == typeof WeakMap ? WeakMap : Map
    function ba(t, e, n) {
      ;((n = Xo(n)).tag = Go), (n.payload = {element: null})
      var i = e.value
      return (
        (n.callback = function() {
          Fs(i), ca(t, e)
        }),
        n
      )
    }
    function Sa(t, e, n) {
      ;(n = Xo(n)).tag = Go
      var i = t.type.getDerivedStateFromError
      if ('function' == typeof i) {
        var r = e.value
        n.payload = function() {
          return i(r)
        }
      }
      var o = t.stateNode
      return (
        null !== o &&
          'function' == typeof o.componentDidCatch &&
          (n.callback = function() {
            'function' != typeof i &&
              (null === Ia ? (Ia = new Set([this])) : Ia.add(this))
            var n = e.value,
              r = e.stack
            ca(t, e),
              this.componentDidCatch(n, {componentStack: null !== r ? r : ''})
          }),
        n
      )
    }
    function Ta(t) {
      switch (t.tag) {
        case 1:
          Ri(t.type) && Ni()
          var e = t.effectTag
          return 2048 & e ? ((t.effectTag = (-2049 & e) | 64), t) : null
        case 3:
          return (
            Tr(),
            qi(),
            0 != (64 & (e = t.effectTag)) && a('285'),
            (t.effectTag = (-2049 & e) | 64),
            t
          )
        case 5:
          return xr(t), null
        case 13:
          return 2048 & (e = t.effectTag)
            ? ((t.effectTag = (-2049 & e) | 64), t)
            : null
        case 18:
          return null
        case 4:
          return Tr(), null
        case 10:
          return Do(t), null
        default:
          return null
      }
    }
    var wa = Wt.ReactCurrentDispatcher,
      xa = Wt.ReactCurrentOwner,
      ka = 1073741822,
      Pa = !1,
      Oa = null,
      Aa = null,
      Ea = 0,
      Ca = -1,
      Fa = !1,
      Ma = null,
      Ra = !1,
      Na = null,
      qa = null,
      ja = null,
      Ia = null
    function La() {
      if (null !== Oa)
        for (var t = Oa.return; null !== t; ) {
          var e = t
          switch (e.tag) {
            case 1:
              var n = e.type.childContextTypes
              null != n && Ni()
              break
            case 3:
              Tr(), qi()
              break
            case 5:
              xr(e)
              break
            case 4:
              Tr()
              break
            case 10:
              Do(e)
          }
          t = t.return
        }
      ;(Aa = null), (Ea = 0), (Ca = -1), (Fa = !1), (Oa = null)
    }
    function Da() {
      for (; null !== Ma; ) {
        var t = Ma.effectTag
        if ((16 & t && ri(Ma.stateNode, ''), 128 & t)) {
          var e = Ma.alternate
          null !== e &&
            (null !== (e = e.ref) &&
              ('function' == typeof e ? e(null) : (e.current = null)))
        }
        switch (14 & t) {
          case 2:
            ma(Ma), (Ma.effectTag &= -3)
            break
          case 6:
            ma(Ma), (Ma.effectTag &= -3), va(Ma.alternate, Ma)
            break
          case 4:
            va(Ma.alternate, Ma)
            break
          case 8:
            _a((t = Ma)),
              (t.return = null),
              (t.child = null),
              (t.memoizedState = null),
              (t.updateQueue = null),
              null !== (t = t.alternate) &&
                ((t.return = null),
                (t.child = null),
                (t.memoizedState = null),
                (t.updateQueue = null))
        }
        Ma = Ma.nextEffect
      }
    }
    function Ba() {
      for (; null !== Ma; ) {
        if (256 & Ma.effectTag)
          t: {
            var t = Ma.alternate,
              e = Ma
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                ha(Pr, kr, e)
                break t
              case 1:
                if (256 & e.effectTag && null !== t) {
                  var n = t.memoizedProps,
                    i = t.memoizedState
                  ;(e = (t = e.stateNode).getSnapshotBeforeUpdate(
                    e.elementType === e.type ? n : nr(e.type, n),
                    i
                  )),
                    (t.__reactInternalSnapshotBeforeUpdate = e)
                }
                break t
              case 3:
              case 5:
              case 6:
              case 4:
              case 17:
                break t
              default:
                a('163')
            }
          }
        Ma = Ma.nextEffect
      }
    }
    function Ua(t, e) {
      for (; null !== Ma; ) {
        var n = Ma.effectTag
        if (36 & n) {
          var i = Ma.alternate,
            r = Ma,
            o = e
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              ha(Er, Cr, r)
              break
            case 1:
              var s = r.stateNode
              if (4 & r.effectTag)
                if (null === i) s.componentDidMount()
                else {
                  var u =
                    r.elementType === r.type
                      ? i.memoizedProps
                      : nr(r.type, i.memoizedProps)
                  s.componentDidUpdate(
                    u,
                    i.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  )
                }
              null !== (i = r.updateQueue) && na(0, i, s)
              break
            case 3:
              if (null !== (i = r.updateQueue)) {
                if (((s = null), null !== r.child))
                  switch (r.child.tag) {
                    case 5:
                      s = r.child.stateNode
                      break
                    case 1:
                      s = r.child.stateNode
                  }
                na(0, i, s)
              }
              break
            case 5:
              ;(o = r.stateNode),
                null === i &&
                  4 & r.effectTag &&
                  mi(r.type, r.memoizedProps) &&
                  o.focus()
              break
            case 6:
            case 4:
            case 12:
            case 13:
            case 17:
              break
            default:
              a('163')
          }
        }
        128 & n &&
          (null !== (r = Ma.ref) &&
            ((o = Ma.stateNode),
            'function' == typeof r ? r(o) : (r.current = o))),
          512 & n && (Na = t),
          (Ma = Ma.nextEffect)
      }
    }
    function Va() {
      null !== qa && Si(qa), null !== ja && ja()
    }
    function za(t, e) {
      ;(Ra = Pa = !0), t.current === e && a('177')
      var n = t.pendingCommitExpirationTime
      0 === n && a('261'), (t.pendingCommitExpirationTime = 0)
      var i = e.expirationTime,
        r = e.childExpirationTime
      for (
        (function(t, e) {
          if (((t.didError = !1), 0 === e))
            (t.earliestPendingTime = 0),
              (t.latestPendingTime = 0),
              (t.earliestSuspendedTime = 0),
              (t.latestSuspendedTime = 0),
              (t.latestPingedTime = 0)
          else {
            e < t.latestPingedTime && (t.latestPingedTime = 0)
            var n = t.latestPendingTime
            0 !== n &&
              (n > e
                ? (t.earliestPendingTime = t.latestPendingTime = 0)
                : t.earliestPendingTime > e &&
                  (t.earliestPendingTime = t.latestPendingTime)),
              0 === (n = t.earliestSuspendedTime)
                ? Zi(t, e)
                : e < t.latestSuspendedTime
                  ? ((t.earliestSuspendedTime = 0),
                    (t.latestSuspendedTime = 0),
                    (t.latestPingedTime = 0),
                    Zi(t, e))
                  : e > n && Zi(t, e)
          }
          er(0, t)
        })(t, r > i ? r : i),
          xa.current = null,
          i = void 0,
          1 < e.effectTag
            ? null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = e), (i = e.firstEffect))
              : (i = e)
            : (i = e.firstEffect),
          pi = xn,
          yi = (function() {
            var t = jn()
            if (In(t)) {
              if (('selectionStart' in t))
                var e = {start: t.selectionStart, end: t.selectionEnd}
              else
                t: {
                  var n =
                    (e = ((e = t.ownerDocument) && e.defaultView) || window)
                      .getSelection && e.getSelection()
                  if (n && 0 !== n.rangeCount) {
                    e = n.anchorNode
                    var i = n.anchorOffset,
                      r = n.focusNode
                    n = n.focusOffset
                    try {
                      e.nodeType, r.nodeType
                    } catch (t) {
                      e = null
                      break t
                    }
                    var o = 0,
                      a = -1,
                      s = -1,
                      u = 0,
                      l = 0,
                      f = t,
                      c = null
                    e: for (;;) {
                      for (
                        var d;
                        f !== e || (0 !== i && 3 !== f.nodeType) || (a = o + i),
                          f !== r ||
                            (0 !== n && 3 !== f.nodeType) ||
                            (s = o + n),
                          3 === f.nodeType && (o += f.nodeValue.length),
                          null !== (d = f.firstChild);

                      )
                        (c = f), (f = d)
                      for (;;) {
                        if (f === t) break e
                        if (
                          (c === e && ++u === i && (a = o),
                          c === r && ++l === n && (s = o),
                          null !== (d = f.nextSibling))
                        )
                          break
                        c = (f = c).parentNode
                      }
                      f = d
                    }
                    e = -1 === a || -1 === s ? null : {start: a, end: s}
                  } else e = null
                }
              e = e || {start: 0, end: 0}
            } else e = null
            return {focusedElem: t, selectionRange: e}
          })(),
          xn = !1,
          Ma = i;
        null !== Ma;

      ) {
        r = !1
        var s = void 0
        try {
          Ba()
        } catch (t) {
          ;(r = !0), (s = t)
        }
        r &&
          (null === Ma && a('178'),
          Ha(Ma, s),
          null !== Ma && (Ma = Ma.nextEffect))
      }
      for (Ma = i; null !== Ma; ) {
        ;(r = !1), (s = void 0)
        try {
          Da()
        } catch (t) {
          ;(r = !0), (s = t)
        }
        r &&
          (null === Ma && a('178'),
          Ha(Ma, s),
          null !== Ma && (Ma = Ma.nextEffect))
      }
      for (
        Ln(yi), yi = null, xn = !!pi, pi = null, t.current = e, Ma = i;
        null !== Ma;

      ) {
        ;(r = !1), (s = void 0)
        try {
          Ua(t, n)
        } catch (t) {
          ;(r = !0), (s = t)
        }
        r &&
          (null === Ma && a('178'),
          Ha(Ma, s),
          null !== Ma && (Ma = Ma.nextEffect))
      }
      if (null !== i && null !== Na) {
        var u = function(t, e) {
          ja = qa = Na = null
          var n = is
          is = !0
          do {
            if (512 & e.effectTag) {
              var i = !1,
                r = void 0
              try {
                var o = e
                ha(Mr, kr, o), ha(kr, Fr, o)
              } catch (t) {
                ;(i = !0), (r = t)
              }
              i && Ha(e, r)
            }
            e = e.nextEffect
          } while (null !== e)
          ;(is = n),
            0 !== (n = t.expirationTime) && Ts(t, n),
            ls || is || Os(1073741823, !1)
        }.bind(null, t, i)
        ;(qa = o.unstable_runWithPriority(
          o.unstable_NormalPriority,
          function() {
            return bi(u)
          }
        )),
          (ja = u)
      }
      ;(Pa = Ra = !1),
        'function' == typeof Bi && Bi(e.stateNode),
        (n = e.expirationTime),
        0 === (e = (e = e.childExpirationTime) > n ? e : n) && (Ia = null),
        (function(t, e) {
          ;(t.expirationTime = e), (t.finishedWork = null)
        })(t, e)
    }
    function Wa(t) {
      for (;;) {
        var e = t.alternate,
          n = t.return,
          i = t.sibling
        if (0 == (1024 & t.effectTag)) {
          Oa = t
          t: {
            var o = e,
              s = Ea,
              u = (e = t).pendingProps
            switch (e.tag) {
              case 2:
              case 16:
                break
              case 15:
              case 0:
                break
              case 1:
                Ri(e.type) && Ni()
                break
              case 3:
                Tr(),
                  qi(),
                  (u = e.stateNode).pendingContext &&
                    ((u.context = u.pendingContext), (u.pendingContext = null)),
                  (null !== o && null !== o.child) ||
                    (vo(e), (e.effectTag &= -3)),
                  sa(e)
                break
              case 5:
                xr(e)
                var l = br(gr.current)
                if (((s = e.type), null !== o && null != e.stateNode))
                  ua(o, e, s, u, l), o.ref !== e.ref && (e.effectTag |= 128)
                else if (u) {
                  var f = br(_r.current)
                  if (vo(e)) {
                    o = (u = e).stateNode
                    var c = u.type,
                      d = u.memoizedProps,
                      h = l
                    switch (((o[R] = u), (o[N] = d), (s = void 0), (l = c))) {
                      case 'iframe':
                      case 'object':
                        kn('load', o)
                        break
                      case 'video':
                      case 'audio':
                        for (c = 0; c < et.length; c++) kn(et[c], o)
                        break
                      case 'source':
                        kn('error', o)
                        break
                      case 'img':
                      case 'image':
                      case 'link':
                        kn('error', o), kn('load', o)
                        break
                      case 'form':
                        kn('reset', o), kn('submit', o)
                        break
                      case 'details':
                        kn('toggle', o)
                        break
                      case 'input':
                        be(o, d), kn('invalid', o), di(h, 'onChange')
                        break
                      case 'select':
                        ;(o._wrapperState = {wasMultiple: !!d.multiple}),
                          kn('invalid', o),
                          di(h, 'onChange')
                        break
                      case 'textarea':
                        Yn(o, d), kn('invalid', o), di(h, 'onChange')
                    }
                    for (s in (fi(l, d), (c = null), d))
                      d.hasOwnProperty(s) &&
                        ((f = d[s]),
                        'children' === s
                          ? 'string' == typeof f
                            ? o.textContent !== f && (c = ['children', f])
                            : 'number' == typeof f &&
                              o.textContent !== '' + f &&
                              (c = ['children', '' + f])
                          : g.hasOwnProperty(s) && null != f && di(h, s))
                    switch (l) {
                      case 'input':
                        Vt(o), we(o, d, !0)
                        break
                      case 'textarea':
                        Vt(o), Zn(o)
                        break
                      case 'select':
                      case 'option':
                        break
                      default:
                        'function' == typeof d.onClick && (o.onclick = hi)
                    }
                    ;(s = c), (u.updateQueue = s), (u = null !== s) && oa(e)
                  } else {
                    ;(d = e),
                      (h = s),
                      (o = u),
                      (c = 9 === l.nodeType ? l : l.ownerDocument),
                      f === Jn.html && (f = ti(h)),
                      f === Jn.html
                        ? 'script' === h
                          ? (((o = c.createElement('div')).innerHTML =
                              '<script></script>'),
                            (c = o.removeChild(o.firstChild)))
                          : 'string' == typeof o.is
                            ? (c = c.createElement(h, {is: o.is}))
                            : ((c = c.createElement(h)),
                              'select' === h &&
                                ((h = c),
                                o.multiple
                                  ? (h.multiple = !0)
                                  : o.size && (h.size = o.size)))
                        : (c = c.createElementNS(f, h)),
                      ((o = c)[R] = d),
                      (o[N] = u),
                      aa(o, e, !1, !1),
                      (h = o)
                    var p = l,
                      y = ci((c = s), (d = u))
                    switch (c) {
                      case 'iframe':
                      case 'object':
                        kn('load', h), (l = d)
                        break
                      case 'video':
                      case 'audio':
                        for (l = 0; l < et.length; l++) kn(et[l], h)
                        l = d
                        break
                      case 'source':
                        kn('error', h), (l = d)
                        break
                      case 'img':
                      case 'image':
                      case 'link':
                        kn('error', h), kn('load', h), (l = d)
                        break
                      case 'form':
                        kn('reset', h), kn('submit', h), (l = d)
                        break
                      case 'details':
                        kn('toggle', h), (l = d)
                        break
                      case 'input':
                        be(h, d),
                          (l = ge(h, d)),
                          kn('invalid', h),
                          di(p, 'onChange')
                        break
                      case 'option':
                        l = Hn(h, d)
                        break
                      case 'select':
                        ;(h._wrapperState = {wasMultiple: !!d.multiple}),
                          (l = r({}, d, {value: void 0})),
                          kn('invalid', h),
                          di(p, 'onChange')
                        break
                      case 'textarea':
                        Yn(h, d),
                          (l = Xn(h, d)),
                          kn('invalid', h),
                          di(p, 'onChange')
                        break
                      default:
                        l = d
                    }
                    fi(c, l), (f = void 0)
                    var m = c,
                      _ = h,
                      v = l
                    for (f in v)
                      if (v.hasOwnProperty(f)) {
                        var b = v[f]
                        'style' === f
                          ? ui(_, b)
                          : 'dangerouslySetInnerHTML' === f
                            ? null != (b = b ? b.__html : void 0) && ii(_, b)
                            : 'children' === f
                              ? 'string' == typeof b
                                ? ('textarea' !== m || '' !== b) && ri(_, b)
                                : 'number' == typeof b && ri(_, '' + b)
                              : 'suppressContentEditableWarning' !== f &&
                                'suppressHydrationWarning' !== f &&
                                'autoFocus' !== f &&
                                (g.hasOwnProperty(f)
                                  ? null != b && di(p, f)
                                  : null != b && _e(_, f, b, y))
                      }
                    switch (c) {
                      case 'input':
                        Vt(h), we(h, d, !1)
                        break
                      case 'textarea':
                        Vt(h), Zn(h)
                        break
                      case 'option':
                        null != d.value &&
                          h.setAttribute('value', '' + ve(d.value))
                        break
                      case 'select':
                        ;((l = h).multiple = !!d.multiple),
                          null != (h = d.value)
                            ? $n(l, !!d.multiple, h, !1)
                            : null != d.defaultValue &&
                              $n(l, !!d.multiple, d.defaultValue, !0)
                        break
                      default:
                        'function' == typeof l.onClick && (h.onclick = hi)
                    }
                    ;(u = mi(s, u)) && oa(e), (e.stateNode = o)
                  }
                  null !== e.ref && (e.effectTag |= 128)
                } else null === e.stateNode && a('166')
                break
              case 6:
                o && null != e.stateNode
                  ? la(o, e, o.memoizedProps, u)
                  : ('string' != typeof u && (null === e.stateNode && a('166')),
                    (o = br(gr.current)),
                    br(_r.current),
                    vo(e)
                      ? ((s = (u = e).stateNode),
                        (o = u.memoizedProps),
                        (s[R] = u),
                        (u = s.nodeValue !== o) && oa(e))
                      : ((s = e),
                        ((u = (9 === o.nodeType
                          ? o
                          : o.ownerDocument
                        ).createTextNode(u))[R] = e),
                        (s.stateNode = u)))
                break
              case 11:
                break
              case 13:
                if (((u = e.memoizedState), 0 != (64 & e.effectTag))) {
                  ;(e.expirationTime = s), (Oa = e)
                  break t
                }
                ;(u = null !== u),
                  (s = null !== o && null !== o.memoizedState),
                  null !== o &&
                    !u &&
                    s &&
                    (null !== (o = o.child.sibling) &&
                      (null !== (l = e.firstEffect)
                        ? ((e.firstEffect = o), (o.nextEffect = l))
                        : ((e.firstEffect = e.lastEffect = o),
                          (o.nextEffect = null)),
                      (o.effectTag = 8))),
                  (u || s) && (e.effectTag |= 4)
                break
              case 7:
              case 8:
              case 12:
                break
              case 4:
                Tr(), sa(e)
                break
              case 10:
                Do(e)
                break
              case 9:
              case 14:
                break
              case 17:
                Ri(e.type) && Ni()
                break
              case 18:
                break
              default:
                a('156')
            }
            Oa = null
          }
          if (((e = t), 1 === Ea || 1 !== e.childExpirationTime)) {
            for (u = 0, s = e.child; null !== s; )
              (o = s.expirationTime) > u && (u = o),
                (l = s.childExpirationTime) > u && (u = l),
                (s = s.sibling)
            e.childExpirationTime = u
          }
          if (null !== Oa) return Oa
          null !== n &&
            0 == (1024 & n.effectTag) &&
            (null === n.firstEffect && (n.firstEffect = t.firstEffect),
            null !== t.lastEffect &&
              (null !== n.lastEffect &&
                (n.lastEffect.nextEffect = t.firstEffect),
              (n.lastEffect = t.lastEffect)),
            1 < t.effectTag &&
              (null !== n.lastEffect
                ? (n.lastEffect.nextEffect = t)
                : (n.firstEffect = t),
              (n.lastEffect = t)))
        } else {
          if (null !== (t = Ta(t))) return (t.effectTag &= 1023), t
          null !== n &&
            ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 1024))
        }
        if (null !== i) return i
        if (null === n) break
        t = n
      }
      return null
    }
    function Ga(t) {
      var e = Ro(t.alternate, t, Ea)
      return (
        (t.memoizedProps = t.pendingProps),
        null === e && (e = Wa(t)),
        (xa.current = null),
        e
      )
    }
    function Qa(t, e) {
      Pa && a('243'), Va(), (Pa = !0)
      var n = wa.current
      wa.current = so
      var i = t.nextExpirationTimeToWorkOn
      ;(i === Ea && t === Aa && null !== Oa) ||
        (La(),
        (Ea = i),
        (Oa = Qi((Aa = t).current, null)),
        (t.pendingCommitExpirationTime = 0))
      for (var r = !1; ; ) {
        try {
          if (e) for (; null !== Oa && !ks(); ) Oa = Ga(Oa)
          else for (; null !== Oa; ) Oa = Ga(Oa)
        } catch (e) {
          if (((Io = jo = qo = null), Yr(), null === Oa)) (r = !0), Fs(e)
          else {
            null === Oa && a('271')
            var o = Oa,
              s = o.return
            if (null !== s) {
              t: {
                var u = t,
                  l = s,
                  f = o,
                  c = e
                if (
                  ((s = Ea),
                  (f.effectTag |= 1024),
                  (f.firstEffect = f.lastEffect = null),
                  null !== c &&
                    'object' == typeof c &&
                    'function' == typeof c.then)
                ) {
                  var d = c
                  c = l
                  var h = -1,
                    p = -1
                  do {
                    if (13 === c.tag) {
                      var y = c.alternate
                      if (null !== y && null !== (y = y.memoizedState)) {
                        p = 10 * (1073741822 - y.timedOutAt)
                        break
                      }
                      'number' == typeof (y = c.pendingProps.maxDuration) &&
                        (0 >= y ? (h = 0) : (-1 === h || y < h) && (h = y))
                    }
                    c = c.return
                  } while (null !== c)
                  c = l
                  do {
                    if (
                      ((y = 13 === c.tag) &&
                        (y =
                          void 0 !== c.memoizedProps.fallback &&
                          null === c.memoizedState),
                      y)
                    ) {
                      if (
                        (null === (l = c.updateQueue)
                          ? ((l = new Set()).add(d), (c.updateQueue = l))
                          : l.add(d),
                        0 == (1 & c.mode))
                      ) {
                        ;(c.effectTag |= 64),
                          (f.effectTag &= -1957),
                          1 === f.tag &&
                            (null === f.alternate
                              ? (f.tag = 17)
                              : (((s = Xo(1073741823)).tag = Wo), Ko(f, s))),
                          (f.expirationTime = 1073741823)
                        break t
                      }
                      l = s
                      var m = (f = u).pingCache
                      null === m
                        ? ((m = f.pingCache = new ga()),
                          (y = new Set()),
                          m.set(d, y))
                        : void 0 === (y = m.get(d)) &&
                          ((y = new Set()), m.set(d, y)),
                        y.has(l) ||
                          (y.add(l),
                          (f = Xa.bind(null, f, d, l)),
                          d.then(f, f)),
                        -1 === h
                          ? (u = 1073741823)
                          : (-1 === p &&
                              (p = 10 * (1073741822 - tr(u, s)) - 5e3),
                            (u = p + h)),
                        0 <= u && Ca < u && (Ca = u),
                        (c.effectTag |= 2048),
                        (c.expirationTime = s)
                      break t
                    }
                    c = c.return
                  } while (null !== c)
                  c = Error(
                    (se(f.type) || 'A React component') +
                      ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                      ue(f)
                  )
                }
                ;(Fa = !0), (c = ra(c, f)), (u = l)
                do {
                  switch (u.tag) {
                    case 3:
                      ;(u.effectTag |= 2048),
                        (u.expirationTime = s),
                        Zo(u, (s = ba(u, c, s)))
                      break t
                    case 1:
                      if (
                        ((h = c),
                        (p = u.type),
                        (f = u.stateNode),
                        0 == (64 & u.effectTag) &&
                          ('function' == typeof p.getDerivedStateFromError ||
                            (null !== f &&
                              'function' == typeof f.componentDidCatch &&
                              (null === Ia || !Ia.has(f)))))
                      ) {
                        ;(u.effectTag |= 2048),
                          (u.expirationTime = s),
                          Zo(u, (s = Sa(u, h, s)))
                        break t
                      }
                  }
                  u = u.return
                } while (null !== u)
              }
              Oa = Wa(o)
              continue
            }
            ;(r = !0), Fs(e)
          }
        }
        break
      }
      if (((Pa = !1), (wa.current = n), (Io = jo = qo = null), Yr(), r))
        (Aa = null), (t.finishedWork = null)
      else if (null !== Oa) t.finishedWork = null
      else {
        if ((null === (n = t.current.alternate) && a('281'), (Aa = null), Fa)) {
          if (
            ((r = t.latestPendingTime),
            (o = t.latestSuspendedTime),
            (s = t.latestPingedTime),
            (0 !== r && r < i) || (0 !== o && o < i) || (0 !== s && s < i))
          )
            return Ji(t, i), void bs(t, n, i, t.expirationTime, -1)
          if (!t.didError && e)
            return (
              (t.didError = !0),
              (i = t.nextExpirationTimeToWorkOn = i),
              (e = t.expirationTime = 1073741823),
              void bs(t, n, i, e, -1)
            )
        }
        e && -1 !== Ca
          ? (Ji(t, i),
            (e = 10 * (1073741822 - tr(t, i))) < Ca && (Ca = e),
            (e = 10 * (1073741822 - Ss())),
            (e = Ca - e),
            bs(t, n, i, t.expirationTime, 0 > e ? 0 : e))
          : ((t.pendingCommitExpirationTime = i), (t.finishedWork = n))
      }
    }
    function Ha(t, e) {
      for (var n = t.return; null !== n; ) {
        switch (n.tag) {
          case 1:
            var i = n.stateNode
            if (
              'function' == typeof n.type.getDerivedStateFromError ||
              ('function' == typeof i.componentDidCatch &&
                (null === Ia || !Ia.has(i)))
            )
              return (
                Ko(n, (t = Sa(n, (t = ra(e, t)), 1073741823))),
                void Ka(n, 1073741823)
              )
            break
          case 3:
            return (
              Ko(n, (t = ba(n, (t = ra(e, t)), 1073741823))),
              void Ka(n, 1073741823)
            )
        }
        n = n.return
      }
      3 === t.tag &&
        (Ko(t, (n = ba(t, (n = ra(e, t)), 1073741823))), Ka(t, 1073741823))
    }
    function $a(t, e) {
      var n = o.unstable_getCurrentPriorityLevel(),
        i = void 0
      if (0 == (1 & e.mode)) i = 1073741823
      else if (Pa && !Ra) i = Ea
      else {
        switch (n) {
          case o.unstable_ImmediatePriority:
            i = 1073741823
            break
          case o.unstable_UserBlockingPriority:
            i = 1073741822 - 10 * (1 + (((1073741822 - t + 15) / 10) | 0))
            break
          case o.unstable_NormalPriority:
            i = 1073741822 - 25 * (1 + (((1073741822 - t + 500) / 25) | 0))
            break
          case o.unstable_LowPriority:
          case o.unstable_IdlePriority:
            i = 1
            break
          default:
            a('313')
        }
        null !== Aa && i === Ea && --i
      }
      return (
        n === o.unstable_UserBlockingPriority &&
          (0 === as || i < as) &&
          (as = i),
        i
      )
    }
    function Xa(t, e, n) {
      var i = t.pingCache
      null !== i && i.delete(e),
        null !== Aa && Ea === n
          ? (Aa = null)
          : ((e = t.earliestSuspendedTime),
            (i = t.latestSuspendedTime),
            0 !== e &&
              n <= e &&
              n >= i &&
              ((t.didError = !1),
              (0 === (e = t.latestPingedTime) || e > n) &&
                (t.latestPingedTime = n),
              er(n, t),
              0 !== (n = t.expirationTime) && Ts(t, n)))
    }
    function Ya(t, e) {
      t.expirationTime < e && (t.expirationTime = e)
      var n = t.alternate
      null !== n && n.expirationTime < e && (n.expirationTime = e)
      var i = t.return,
        r = null
      if (null === i && 3 === t.tag) r = t.stateNode
      else
        for (; null !== i; ) {
          if (
            ((n = i.alternate),
            i.childExpirationTime < e && (i.childExpirationTime = e),
            null !== n &&
              n.childExpirationTime < e &&
              (n.childExpirationTime = e),
            null === i.return && 3 === i.tag)
          ) {
            r = i.stateNode
            break
          }
          i = i.return
        }
      return r
    }
    function Ka(t, e) {
      null !== (t = Ya(t, e)) &&
        (!Pa && 0 !== Ea && e > Ea && La(),
        Zi(t, e),
        (Pa && !Ra && Aa === t) || Ts(t, t.expirationTime),
        ms > ys && ((ms = 0), a('185')))
    }
    function Za(t, e, n, i, r) {
      return o.unstable_runWithPriority(
        o.unstable_ImmediatePriority,
        function() {
          return t(e, n, i, r)
        }
      )
    }
    var Ja = null,
      ts = null,
      es = 0,
      ns = void 0,
      is = !1,
      rs = null,
      os = 0,
      as = 0,
      ss = !1,
      us = null,
      ls = !1,
      fs = !1,
      cs = null,
      ds = o.unstable_now(),
      hs = 1073741822 - ((ds / 10) | 0),
      ps = hs,
      ys = 50,
      ms = 0,
      _s = null
    function vs() {
      hs = 1073741822 - (((o.unstable_now() - ds) / 10) | 0)
    }
    function gs(t, e) {
      if (0 !== es) {
        if (e < es) return
        null !== ns && o.unstable_cancelCallback(ns)
      }
      ;(es = e),
        (t = o.unstable_now() - ds),
        (ns = o.unstable_scheduleCallback(Ps, {
          timeout: 10 * (1073741822 - e) - t
        }))
    }
    function bs(t, e, n, i, r) {
      ;(t.expirationTime = i),
        0 !== r || ks()
          ? 0 < r &&
            (t.timeoutHandle = vi(
              function(t, e, n) {
                ;(t.pendingCommitExpirationTime = n),
                  (t.finishedWork = e),
                  vs(),
                  (ps = hs),
                  As(t, n)
              }.bind(null, t, e, n),
              r
            ))
          : ((t.pendingCommitExpirationTime = n), (t.finishedWork = e))
    }
    function Ss() {
      return is ? ps : (ws(), (0 !== os && 1 !== os) || (vs(), (ps = hs)), ps)
    }
    function Ts(t, e) {
      null === t.nextScheduledRoot
        ? ((t.expirationTime = e),
          null === ts
            ? ((Ja = ts = t), (t.nextScheduledRoot = t))
            : ((ts = ts.nextScheduledRoot = t).nextScheduledRoot = Ja))
        : e > t.expirationTime && (t.expirationTime = e),
        is ||
          (ls
            ? fs && ((rs = t), (os = 1073741823), Es(t, 1073741823, !1))
            : 1073741823 === e ? Os(1073741823, !1) : gs(t, e))
    }
    function ws() {
      var t = 0,
        e = null
      if (null !== ts)
        for (var n = ts, i = Ja; null !== i; ) {
          var r = i.expirationTime
          if (0 === r) {
            if (
              ((null === n || null === ts) && a('244'),
              i === i.nextScheduledRoot)
            ) {
              Ja = ts = i.nextScheduledRoot = null
              break
            }
            if (i === Ja)
              (Ja = r = i.nextScheduledRoot),
                (ts.nextScheduledRoot = r),
                (i.nextScheduledRoot = null)
            else {
              if (i === ts) {
                ;((ts = n).nextScheduledRoot = Ja), (i.nextScheduledRoot = null)
                break
              }
              ;(n.nextScheduledRoot = i.nextScheduledRoot),
                (i.nextScheduledRoot = null)
            }
            i = n.nextScheduledRoot
          } else {
            if ((r > t && ((t = r), (e = i)), i === ts)) break
            if (1073741823 === t) break
            ;(n = i), (i = i.nextScheduledRoot)
          }
        }
      ;(rs = e), (os = t)
    }
    var xs = !1
    function ks() {
      return !!xs || (!!o.unstable_shouldYield() && (xs = !0))
    }
    function Ps() {
      try {
        if (!ks() && null !== Ja) {
          vs()
          var t = Ja
          do {
            var e = t.expirationTime
            0 !== e && hs <= e && (t.nextExpirationTimeToWorkOn = hs),
              (t = t.nextScheduledRoot)
          } while (t !== Ja)
        }
        Os(0, !0)
      } finally {
        xs = !1
      }
    }
    function Os(t, e) {
      if ((ws(), e))
        for (
          vs(), ps = hs;
          null !== rs && 0 !== os && t <= os && !(xs && hs > os);

        )
          Es(rs, os, hs > os), ws(), vs(), (ps = hs)
      else for (; null !== rs && 0 !== os && t <= os; ) Es(rs, os, !1), ws()
      if (
        (e && ((es = 0), (ns = null)),
        0 !== os && gs(rs, os),
        (ms = 0),
        (_s = null),
        null !== cs)
      )
        for (t = cs, cs = null, e = 0; e < t.length; e++) {
          var n = t[e]
          try {
            n._onComplete()
          } catch (t) {
            ss || ((ss = !0), (us = t))
          }
        }
      if (ss) throw ((t = us), (us = null), (ss = !1), t)
    }
    function As(t, e) {
      is && a('253'), (rs = t), (os = e), Es(t, e, !1), Os(1073741823, !1)
    }
    function Es(t, e, n) {
      if ((is && a('245'), (is = !0), n)) {
        var i = t.finishedWork
        null !== i
          ? Cs(t, i, e)
          : ((t.finishedWork = null),
            -1 !== (i = t.timeoutHandle) && ((t.timeoutHandle = -1), gi(i)),
            Qa(t, n),
            null !== (i = t.finishedWork) &&
              (ks() ? (t.finishedWork = i) : Cs(t, i, e)))
      } else
        null !== (i = t.finishedWork)
          ? Cs(t, i, e)
          : ((t.finishedWork = null),
            -1 !== (i = t.timeoutHandle) && ((t.timeoutHandle = -1), gi(i)),
            Qa(t, n),
            null !== (i = t.finishedWork) && Cs(t, i, e))
      is = !1
    }
    function Cs(t, e, n) {
      var i = t.firstBatch
      if (
        null !== i &&
        i._expirationTime >= n &&
        (null === cs ? (cs = [i]) : cs.push(i), i._defer)
      )
        return (t.finishedWork = e), void (t.expirationTime = 0)
      ;(t.finishedWork = null),
        t === _s ? ms++ : ((_s = t), (ms = 0)),
        o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
          za(t, e)
        })
    }
    function Fs(t) {
      null === rs && a('246'),
        (rs.expirationTime = 0),
        ss || ((ss = !0), (us = t))
    }
    function Ms(t, e) {
      var n = ls
      ls = !0
      try {
        return t(e)
      } finally {
        ;(ls = n) || is || Os(1073741823, !1)
      }
    }
    function Rs(t, e) {
      if (ls && !fs) {
        fs = !0
        try {
          return t(e)
        } finally {
          fs = !1
        }
      }
      return t(e)
    }
    function Ns(t, e, n) {
      ls || is || 0 === as || (Os(as, !1), (as = 0))
      var i = ls
      ls = !0
      try {
        return o.unstable_runWithPriority(
          o.unstable_UserBlockingPriority,
          function() {
            return t(e, n)
          }
        )
      } finally {
        ;(ls = i) || is || Os(1073741823, !1)
      }
    }
    function qs(t, e, n, i, r) {
      var o = e.current
      t: if (n) {
        e: {
          ;(2 === en((n = n._reactInternalFiber)) && 1 === n.tag) || a('170')
          var s = n
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context
                break e
              case 1:
                if (Ri(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext
                  break e
                }
            }
            s = s.return
          } while (null !== s)
          a('171'), (s = void 0)
        }
        if (1 === n.tag) {
          var u = n.type
          if (Ri(u)) {
            n = Ii(n, u, s)
            break t
          }
        }
        n = s
      } else n = Ai
      return (
        null === e.context ? (e.context = n) : (e.pendingContext = n),
        (e = r),
        ((r = Xo(i)).payload = {element: t}),
        null !== (e = void 0 === e ? null : e) && (r.callback = e),
        Va(),
        Ko(o, r),
        Ka(o, i),
        i
      )
    }
    function js(t, e, n, i) {
      var r = e.current
      return qs(t, e, n, (r = $a(Ss(), r)), i)
    }
    function Is(t) {
      if (!(t = t.current).child) return null
      switch (t.child.tag) {
        case 5:
        default:
          return t.child.stateNode
      }
    }
    function Ls(t) {
      var e = 1073741822 - 25 * (1 + (((1073741822 - Ss() + 500) / 25) | 0))
      e >= ka && (e = ka - 1),
        (this._expirationTime = ka = e),
        (this._root = t),
        (this._callbacks = this._next = null),
        (this._hasChildren = this._didComplete = !1),
        (this._children = null),
        (this._defer = !0)
    }
    function Ds() {
      ;(this._callbacks = null),
        (this._didCommit = !1),
        (this._onCommit = this._onCommit.bind(this))
    }
    function Bs(t, e, n) {
      ;(t = {
        current: (e = Wi(3, null, null, e ? 3 : 0)),
        containerInfo: t,
        pendingChildren: null,
        pingCache: null,
        earliestPendingTime: 0,
        latestPendingTime: 0,
        earliestSuspendedTime: 0,
        latestSuspendedTime: 0,
        latestPingedTime: 0,
        didError: !1,
        pendingCommitExpirationTime: 0,
        finishedWork: null,
        timeoutHandle: -1,
        context: null,
        pendingContext: null,
        hydrate: n,
        nextExpirationTimeToWorkOn: 0,
        expirationTime: 0,
        firstBatch: null,
        nextScheduledRoot: null
      }),
        (this._internalRoot = e.stateNode = t)
    }
    function Us(t) {
      return !(
        !t ||
        (1 !== t.nodeType &&
          9 !== t.nodeType &&
          11 !== t.nodeType &&
          (8 !== t.nodeType || ' react-mount-point-unstable ' !== t.nodeValue))
      )
    }
    function Vs(t, e, n, i, r) {
      var o = n._reactRootContainer
      if (o) {
        if ('function' == typeof r) {
          var a = r
          r = function() {
            var t = Is(o._internalRoot)
            a.call(t)
          }
        }
        null != t
          ? o.legacy_renderSubtreeIntoContainer(t, e, r)
          : o.render(e, r)
      } else {
        if (
          ((o = n._reactRootContainer = (function(t, e) {
            if (
              (e ||
                (e = !(
                  !(e = t
                    ? 9 === t.nodeType ? t.documentElement : t.firstChild
                    : null) ||
                  1 !== e.nodeType ||
                  !e.hasAttribute('data-reactroot')
                )),
              !e)
            )
              for (var n; (n = t.lastChild); ) t.removeChild(n)
            return new Bs(t, !1, e)
          })(n, i)),
          'function' == typeof r)
        ) {
          var s = r
          r = function() {
            var t = Is(o._internalRoot)
            s.call(t)
          }
        }
        Rs(function() {
          null != t
            ? o.legacy_renderSubtreeIntoContainer(t, e, r)
            : o.render(e, r)
        })
      }
      return Is(o._internalRoot)
    }
    function zs(t, e) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
      return (
        Us(e) || a('200'),
        (function(t, e, n) {
          var i =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null
          return {
            $$typeof: $t,
            key: null == i ? null : '' + i,
            children: t,
            containerInfo: e,
            implementation: n
          }
        })(t, e, null, n)
      )
    }
    ;(Pt = function(t, e, n) {
      switch (e) {
        case 'input':
          if ((Te(t, n), (e = n.name), 'radio' === n.type && null != e)) {
            for (n = t; n.parentNode; ) n = n.parentNode
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e]
              if (i !== t && i.form === t.form) {
                var r = L(i)
                r || a('90'), zt(i), Te(i, r)
              }
            }
          }
          break
        case 'textarea':
          Kn(t, n)
          break
        case 'select':
          null != (e = n.value) && $n(t, !!n.multiple, e, !1)
      }
    }),
      (Ls.prototype.render = function(t) {
        this._defer || a('250'), (this._hasChildren = !0), (this._children = t)
        var e = this._root._internalRoot,
          n = this._expirationTime,
          i = new Ds()
        return qs(t, e, null, n, i._onCommit), i
      }),
      (Ls.prototype.then = function(t) {
        if (this._didComplete) t()
        else {
          var e = this._callbacks
          null === e && (e = this._callbacks = []), e.push(t)
        }
      }),
      (Ls.prototype.commit = function() {
        var t = this._root._internalRoot,
          e = t.firstBatch
        if (((this._defer && null !== e) || a('251'), this._hasChildren)) {
          var n = this._expirationTime
          if (e !== this) {
            this._hasChildren &&
              ((n = this._expirationTime = e._expirationTime),
              this.render(this._children))
            for (var i = null, r = e; r !== this; ) (i = r), (r = r._next)
            null === i && a('251'),
              (i._next = r._next),
              (this._next = e),
              (t.firstBatch = this)
          }
          ;(this._defer = !1),
            As(t, n),
            (e = this._next),
            (this._next = null),
            null !== (e = t.firstBatch = e) &&
              e._hasChildren &&
              e.render(e._children)
        } else (this._next = null), (this._defer = !1)
      }),
      (Ls.prototype._onComplete = function() {
        if (!this._didComplete) {
          this._didComplete = !0
          var t = this._callbacks
          if (null !== t) for (var e = 0; e < t.length; e++) (0, t[e])()
        }
      }),
      (Ds.prototype.then = function(t) {
        if (this._didCommit) t()
        else {
          var e = this._callbacks
          null === e && (e = this._callbacks = []), e.push(t)
        }
      }),
      (Ds.prototype._onCommit = function() {
        if (!this._didCommit) {
          this._didCommit = !0
          var t = this._callbacks
          if (null !== t)
            for (var e = 0; e < t.length; e++) {
              var n = t[e]
              'function' != typeof n && a('191', n), n()
            }
        }
      }),
      (Bs.prototype.render = function(t, e) {
        var n = this._internalRoot,
          i = new Ds()
        return (
          null !== (e = void 0 === e ? null : e) && i.then(e),
          js(t, n, null, i._onCommit),
          i
        )
      }),
      (Bs.prototype.unmount = function(t) {
        var e = this._internalRoot,
          n = new Ds()
        return (
          null !== (t = void 0 === t ? null : t) && n.then(t),
          js(null, e, null, n._onCommit),
          n
        )
      }),
      (Bs.prototype.legacy_renderSubtreeIntoContainer = function(t, e, n) {
        var i = this._internalRoot,
          r = new Ds()
        return (
          null !== (n = void 0 === n ? null : n) && r.then(n),
          js(e, i, t, r._onCommit),
          r
        )
      }),
      (Bs.prototype.createBatch = function() {
        var t = new Ls(this),
          e = t._expirationTime,
          n = this._internalRoot,
          i = n.firstBatch
        if (null === i) (n.firstBatch = t), (t._next = null)
        else {
          for (n = null; null !== i && i._expirationTime >= e; )
            (n = i), (i = i._next)
          ;(t._next = i), null !== n && (n._next = t)
        }
        return t
      }),
      (Mt = Ms),
      (Rt = Ns),
      (Nt = function() {
        is || 0 === as || (Os(as, !1), (as = 0))
      })
    var Ws,
      Gs,
      Qs = {
        createPortal: zs,
        findDOMNode: function(t) {
          if (null == t) return null
          if (1 === t.nodeType) return t
          var e = t._reactInternalFiber
          return (
            void 0 === e &&
              ('function' == typeof t.render
                ? a('188')
                : a('268', Object.keys(t))),
            (t = null === (t = rn(e)) ? null : t.stateNode)
          )
        },
        hydrate: function(t, e, n) {
          return Us(e) || a('200'), Vs(null, t, e, !0, n)
        },
        render: function(t, e, n) {
          return Us(e) || a('200'), Vs(null, t, e, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(t, e, n, i) {
          return (
            Us(n) || a('200'),
            (null == t || void 0 === t._reactInternalFiber) && a('38'),
            Vs(t, e, n, !1, i)
          )
        },
        unmountComponentAtNode: function(t) {
          return (
            Us(t) || a('40'),
            !!t._reactRootContainer &&
              (Rs(function() {
                Vs(null, null, t, !1, function() {
                  t._reactRootContainer = null
                })
              }),
              !0)
          )
        },
        unstable_createPortal: function() {
          return zs.apply(void 0, arguments)
        },
        unstable_batchedUpdates: Ms,
        unstable_interactiveUpdates: Ns,
        flushSync: function(t, e) {
          is && a('187')
          var n = ls
          ls = !0
          try {
            return Za(t, e)
          } finally {
            ;(ls = n), Os(1073741823, !1)
          }
        },
        unstable_createRoot: function(t, e) {
          return (
            Us(t) || a('299', 'unstable_createRoot'),
            new Bs(t, !0, null != e && !0 === e.hydrate)
          )
        },
        unstable_flushControlled: function(t) {
          var e = ls
          ls = !0
          try {
            Za(t)
          } finally {
            ;(ls = e) || is || Os(1073741823, !1)
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            j,
            I,
            L,
            E.injectEventPluginsByName,
            v,
            W,
            function(t) {
              P(t, z)
            },
            Ct,
            Ft,
            An,
            F
          ]
        }
      }
    ;(Gs = (Ws = {
      findFiberByHostInstance: q,
      bundleType: 0,
      version: '16.8.6',
      rendererPackageName: 'react-dom'
    }).findFiberByHostInstance),
      (function(t) {
        if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1
        var e = __REACT_DEVTOOLS_GLOBAL_HOOK__
        if (e.isDisabled || !e.supportsFiber) return !0
        try {
          var n = e.inject(t)
          ;(Bi = Vi(function(t) {
            return e.onCommitFiberRoot(n, t)
          })),
            (Ui = Vi(function(t) {
              return e.onCommitFiberUnmount(n, t)
            }))
        } catch (t) {}
      })(
        r({}, Ws, {
          overrideProps: null,
          currentDispatcherRef: Wt.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(t) {
            return null === (t = rn(t)) ? null : t.stateNode
          },
          findFiberByHostInstance: function(t) {
            return Gs ? Gs(t) : null
          }
        })
      )
    var Hs = {default: Qs},
      $s = (Hs && Qs) || Hs
    t.exports = $s.default || $s
  },
  function(t, e, n) {
    'use strict'
    t.exports = n(315)
  },
  function(t, e, n) {
    'use strict'
    ;(function(t) {
      /** @license React v0.13.6
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      Object.defineProperty(e, '__esModule', {value: !0})
      var n = null,
        i = !1,
        r = 3,
        o = -1,
        a = -1,
        s = !1,
        u = !1
      function l() {
        if (!s) {
          var t = n.expirationTime
          u ? w() : (u = !0), T(d, t)
        }
      }
      function f() {
        var t = n,
          e = n.next
        if (n === e) n = null
        else {
          var i = n.previous
          ;(n = i.next = e), (e.previous = i)
        }
        ;(t.next = t.previous = null),
          (i = t.callback),
          (e = t.expirationTime),
          (t = t.priorityLevel)
        var o = r,
          s = a
        ;(r = t), (a = e)
        try {
          var u = i()
        } finally {
          ;(r = o), (a = s)
        }
        if ('function' == typeof u)
          if (
            ((u = {
              callback: u,
              priorityLevel: t,
              expirationTime: e,
              next: null,
              previous: null
            }),
            null === n)
          )
            n = u.next = u.previous = u
          else {
            ;(i = null), (t = n)
            do {
              if (t.expirationTime >= e) {
                i = t
                break
              }
              t = t.next
            } while (t !== n)
            null === i ? (i = n) : i === n && ((n = u), l()),
              ((e = i.previous).next = i.previous = u),
              (u.next = i),
              (u.previous = e)
          }
      }
      function c() {
        if (-1 === o && null !== n && 1 === n.priorityLevel) {
          s = !0
          try {
            do {
              f()
            } while (null !== n && 1 === n.priorityLevel)
          } finally {
            ;(s = !1), null !== n ? l() : (u = !1)
          }
        }
      }
      function d(t) {
        s = !0
        var r = i
        i = t
        try {
          if (t)
            for (; null !== n; ) {
              var o = e.unstable_now()
              if (!(n.expirationTime <= o)) break
              do {
                f()
              } while (null !== n && n.expirationTime <= o)
            }
          else if (null !== n)
            do {
              f()
            } while (null !== n && !x())
        } finally {
          ;(s = !1), (i = r), null !== n ? l() : (u = !1), c()
        }
      }
      var h,
        p,
        y = Date,
        m = 'function' == typeof setTimeout ? setTimeout : void 0,
        _ = 'function' == typeof clearTimeout ? clearTimeout : void 0,
        v =
          'function' == typeof requestAnimationFrame
            ? requestAnimationFrame
            : void 0,
        g =
          'function' == typeof cancelAnimationFrame
            ? cancelAnimationFrame
            : void 0
      function b(t) {
        ;(h = v(function(e) {
          _(p), t(e)
        })),
          (p = m(function() {
            g(h), t(e.unstable_now())
          }, 100))
      }
      if (
        'object' == typeof performance &&
        'function' == typeof performance.now
      ) {
        var S = performance
        e.unstable_now = function() {
          return S.now()
        }
      } else
        e.unstable_now = function() {
          return y.now()
        }
      var T,
        w,
        x,
        k = null
      if (
        ('undefined' != typeof window ? (k = window) : void 0 !== t && (k = t),
        k && k._schedMock)
      ) {
        var P = k._schedMock
        ;(T = P[0]), (w = P[1]), (x = P[2]), (e.unstable_now = P[3])
      } else if (
        'undefined' == typeof window ||
        'function' != typeof MessageChannel
      ) {
        var O = null,
          A = function(t) {
            if (null !== O)
              try {
                O(t)
              } finally {
                O = null
              }
          }
        ;(T = function(t) {
          null !== O ? setTimeout(T, 0, t) : ((O = t), setTimeout(A, 0, !1))
        }),
          (w = function() {
            O = null
          }),
          (x = function() {
            return !1
          })
      } else {
        'undefined' != typeof console &&
          ('function' != typeof v &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
          'function' != typeof g &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ))
        var E = null,
          C = !1,
          F = -1,
          M = !1,
          R = !1,
          N = 0,
          q = 33,
          j = 33
        x = function() {
          return N <= e.unstable_now()
        }
        var I = new MessageChannel(),
          L = I.port2
        I.port1.onmessage = function() {
          C = !1
          var t = E,
            n = F
          ;(E = null), (F = -1)
          var i = e.unstable_now(),
            r = !1
          if (0 >= N - i) {
            if (!(-1 !== n && n <= i))
              return M || ((M = !0), b(D)), (E = t), void (F = n)
            r = !0
          }
          if (null !== t) {
            R = !0
            try {
              t(r)
            } finally {
              R = !1
            }
          }
        }
        var D = function(t) {
          if (null !== E) {
            b(D)
            var e = t - N + j
            e < j && q < j ? (8 > e && (e = 8), (j = e < q ? q : e)) : (q = e),
              (N = t + j),
              C || ((C = !0), L.postMessage(void 0))
          } else M = !1
        }
        ;(T = function(t, e) {
          ;(E = t),
            (F = e),
            R || 0 > e ? L.postMessage(void 0) : M || ((M = !0), b(D))
        }),
          (w = function() {
            ;(E = null), (C = !1), (F = -1)
          })
      }
      ;(e.unstable_ImmediatePriority = 1),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_NormalPriority = 3),
        (e.unstable_IdlePriority = 5),
        (e.unstable_LowPriority = 4),
        (e.unstable_runWithPriority = function(t, n) {
          switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break
            default:
              t = 3
          }
          var i = r,
            a = o
          ;(r = t), (o = e.unstable_now())
          try {
            return n()
          } finally {
            ;(r = i), (o = a), c()
          }
        }),
        (e.unstable_next = function(t) {
          switch (r) {
            case 1:
            case 2:
            case 3:
              var n = 3
              break
            default:
              n = r
          }
          var i = r,
            a = o
          ;(r = n), (o = e.unstable_now())
          try {
            return t()
          } finally {
            ;(r = i), (o = a), c()
          }
        }),
        (e.unstable_scheduleCallback = function(t, i) {
          var a = -1 !== o ? o : e.unstable_now()
          if (
            'object' == typeof i &&
            null !== i &&
            'number' == typeof i.timeout
          )
            i = a + i.timeout
          else
            switch (r) {
              case 1:
                i = a + -1
                break
              case 2:
                i = a + 250
                break
              case 5:
                i = a + 1073741823
                break
              case 4:
                i = a + 1e4
                break
              default:
                i = a + 5e3
            }
          if (
            ((t = {
              callback: t,
              priorityLevel: r,
              expirationTime: i,
              next: null,
              previous: null
            }),
            null === n)
          )
            (n = t.next = t.previous = t), l()
          else {
            a = null
            var s = n
            do {
              if (s.expirationTime > i) {
                a = s
                break
              }
              s = s.next
            } while (s !== n)
            null === a ? (a = n) : a === n && ((n = t), l()),
              ((i = a.previous).next = a.previous = t),
              (t.next = a),
              (t.previous = i)
          }
          return t
        }),
        (e.unstable_cancelCallback = function(t) {
          var e = t.next
          if (null !== e) {
            if (e === t) n = null
            else {
              t === n && (n = e)
              var i = t.previous
              ;(i.next = e), (e.previous = i)
            }
            t.next = t.previous = null
          }
        }),
        (e.unstable_wrapCallback = function(t) {
          var n = r
          return function() {
            var i = r,
              a = o
            ;(r = n), (o = e.unstable_now())
            try {
              return t.apply(this, arguments)
            } finally {
              ;(r = i), (o = a), c()
            }
          }
        }),
        (e.unstable_getCurrentPriorityLevel = function() {
          return r
        }),
        (e.unstable_shouldYield = function() {
          return !i && ((null !== n && n.expirationTime < a) || x())
        }),
        (e.unstable_continueExecution = function() {
          null !== n && l()
        }),
        (e.unstable_pauseExecution = function() {}),
        (e.unstable_getFirstCallbackNode = function() {
          return n
        })
    }.call(this, n(316)))
  },
  function(t, e) {
    var n
    n = (function() {
      return this
    })()
    try {
      n = n || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (n = window)
    }
    t.exports = n
  },
  function(t, e, n) {
    'use strict'
    n.r(e)
    var i = n(1),
      r = n.n(i),
      o = n(124),
      a = n.n(o),
      s = n(17),
      u = [
        {id: 0, url: 'kick1', keyCode: '1'},
        {id: 1, url: 'snare1', keyCode: '2'},
        {id: 2, url: 'hat1', keyCode: '3'},
        {id: 3, url: 'hat2', keyCode: '4'},
        {id: 4, url: 'openhat1', keyCode: 'q'},
        {id: 5, url: 'snap1', keyCode: 'w'},
        {id: 6, url: 'snap2', keyCode: 'e'},
        {id: 7, url: 'tom', keyCode: 'r'},
        {id: 8, url: 'kick2', keyCode: 'a'},
        {id: 9, url: 'snare2', keyCode: 's'},
        {id: 10, url: 'crash', keyCode: 'd'},
        {id: 11, url: 'chant1', keyCode: 'f'},
        {id: 12, url: 'chant2', keyCode: 'z'},
        {id: 13, url: 'clap1', keyCode: 'x'},
        {id: 14, url: 'clap2', keyCode: 'c'},
        {id: 15, url: 'clap3', keyCode: 'v'}
      ]
    function l(t) {
      return (l =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    function f(t, e) {
      var n = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t)
        e &&
          (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          n.push.apply(n, i)
      }
      return n
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? f(n, !0).forEach(function(e) {
              g(t, e, n[e])
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(n).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
      }
      return t
    }
    function d(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++)
              n[e] = t[e]
            return n
          }
        })(t) ||
        (function(t) {
          if (
            Symbol.iterator in Object(t) ||
            '[object Arguments]' === Object.prototype.toString.call(t)
          )
            return Array.from(t)
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance')
        })()
      )
    }
    function h(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          u = s.value
      } catch (t) {
        return void n(t)
      }
      s.done ? e(u) : Promise.resolve(u).then(i, r)
    }
    function p(t) {
      return function() {
        var e = this,
          n = arguments
        return new Promise(function(i, r) {
          var o = t.apply(e, n)
          function a(t) {
            h(o, i, r, a, s, 'next', t)
          }
          function s(t) {
            h(o, i, r, a, s, 'throw', t)
          }
          a(void 0)
        })
      }
    }
    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
    }
    function m(t) {
      return (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          })(t)
    }
    function _(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return t
    }
    function v(t, e) {
      return (v =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t
        })(t, e)
    }
    function g(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      )
    }
    var b = (function(t) {
      function e(t) {
        var n
        return (
          (function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
          (n = (function(t, e) {
            return !e || ('object' !== l(e) && 'function' != typeof e)
              ? _(t)
              : e
          })(this, m(e).call(this, t))),
          g(
            _(n),
            'handleDown',
            (function() {
              var t = p(
                regeneratorRuntime.mark(function t(e) {
                  var i
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((i = e.key), n.state.keysPressed.includes(i))) {
                            t.next = 4
                            break
                          }
                          return (
                            (t.next = 4),
                            n.setState(function(t) {
                              return {
                                keysPressed: [].concat(d(t.keysPressed), [i]),
                                latestKey: i
                              }
                            })
                          )
                        case 4:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function(e) {
                return t.apply(this, arguments)
              }
            })()
          ),
          g(
            _(n),
            'handleUp',
            (function() {
              var t = p(
                regeneratorRuntime.mark(function t(e) {
                  var i
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((i = e.key), !n.state.keysPressed.includes(i))) {
                            t.next = 4
                            break
                          }
                          return (
                            (t.next = 4),
                            n.setState(function(t) {
                              return {
                                keysPressed: t.keysPressed.filter(function(t) {
                                  return t !== i
                                })
                              }
                            })
                          )
                        case 4:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function(e) {
                return t.apply(this, arguments)
              }
            })()
          ),
          g(
            _(n),
            'handleEdit',
            p(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          n.setState(function(t) {
                            return {editing: !t.editing}
                          })
                        )
                      case 2:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )
          ),
          g(
            _(n),
            'handleSubmit',
            (function() {
              var t = p(
                regeneratorRuntime.mark(function t(e, i) {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log('fired'),
                            console.log(i),
                            console.log(e),
                            (t.next = 5),
                            n.setState(function(t) {
                              return {
                                config: t.config.map(function(t) {
                                  return e === t.id ? c({}, t, {keyCode: i}) : t
                                }),
                                editing: !1
                              }
                            })
                          )
                        case 5:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function(e, n) {
                return t.apply(this, arguments)
              }
            })()
          ),
          (n.state = {keysPressed: [], latestKey: '', editing: !1, config: u}),
          n
        )
      }
      var n, i, o, a
      return (
        (function(t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(t.prototype = Object.create(e && e.prototype, {
            constructor: {value: t, writable: !0, configurable: !0}
          })),
            e && v(t, e)
        })(e, r.a.Component),
        (n = e),
        (i = [
          {
            key: 'componentDidMount',
            value: ((a = p(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log('starting Tone...'),
                            (t.next = 3),
                            s.start()
                          )
                        case 3:
                          return (t.next = 5), s.Transport.start()
                        case 5:
                          ;(s.context.lookAhead = 0),
                            (this.handleDown = this.handleDown.bind(this)),
                            (this.handleUp = this.handleUp.bind(this)),
                            (this.handleSubmit = this.handleSubmit.bind(this))
                        case 9:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this
                )
              })
            )),
            function() {
              return a.apply(this, arguments)
            })
          },
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                {
                  id: 'main',
                  onKeyDown: this.handleDown,
                  onKeyUp: this.handleUp,
                  tabIndex: '0',
                  className: 'focus-window'
                },
                r.a.createElement(
                  'div',
                  {className: 'padContainer'},
                  r.a.createElement('h1', {id: 'title'}, 'Beat Pal'),
                  r.a.createElement(
                    'div',
                    {className: 'logo-container'},
                    r.a.createElement('img', {
                      src: 'assets/logo.png',
                      id: 'logo',
                      alt: 'beatpal'
                    })
                  ),
                  r.a.createElement(
                    'div',
                    {className: 'buttons'},
                    r.a.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: this.handleEdit,
                        className: 'keys'
                      },
                      this.state.editing ? 'cancel' : 'change keys'
                    ),
                    r.a.createElement(L, null)
                  ),
                  r.a.createElement(E, {
                    config: this.state.config,
                    keysPressed: this.state.keysPressed,
                    latestKey: this.state.latestKey,
                    editing: this.state.editing,
                    handleSubmit: this.handleSubmit
                  })
                )
              )
            }
          }
        ]) && y(n.prototype, i),
        o && y(n, o),
        e
      )
    })()
    function S(t) {
      return (S =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    function T(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          u = s.value
      } catch (t) {
        return void n(t)
      }
      s.done ? e(u) : Promise.resolve(u).then(i, r)
    }
    function w(t) {
      return function() {
        var e = this,
          n = arguments
        return new Promise(function(i, r) {
          var o = t.apply(e, n)
          function a(t) {
            T(o, i, r, a, s, 'next', t)
          }
          function s(t) {
            T(o, i, r, a, s, 'throw', t)
          }
          a(void 0)
        })
      }
    }
    function x(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
    }
    function k(t) {
      return (k = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          })(t)
    }
    function P(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return t
    }
    function O(t, e) {
      return (O =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t
        })(t, e)
    }
    var A = (function(t) {
        function e(t) {
          var n
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
            ((n = (function(t, e) {
              return !e || ('object' !== S(e) && 'function' != typeof e)
                ? P(t)
                : e
            })(this, k(e).call(this, t))).play = n.play.bind(P(n))),
            (n.length = t.keysPressed.length),
            (n.state = {keyCode: t.keyCode}),
            (n.handleChange = n.handleChange.bind(P(n))),
            n
          )
        }
        var n, i, o, a, u
        return (
          (function(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: {value: t, writable: !0, configurable: !0}
            })),
              e && O(t, e)
          })(e, r.a.Component),
          (n = e),
          (i = [
            {
              key: 'componentDidMount',
              value: ((u = w(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              new s.Player(
                                'assets/' + this.props.url + '.wav'
                              ).toMaster()
                            )
                          case 2:
                            this.player = t.sent
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )),
              function() {
                return u.apply(this, arguments)
              })
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                this.props.latestKey === this.props.keyCode &&
                  this.props.keysPressed.includes(this.props.keyCode) &&
                  this.length < this.props.keysPressed.length &&
                  this.play(),
                  (this.length = this.props.keysPressed.length)
              }
            },
            {
              key: 'play',
              value: function() {
                this.props.editing || this.player.start()
              }
            },
            {
              key: 'handleChange',
              value: ((a = w(
                regeneratorRuntime.mark(function t(e) {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!(e.target.value.length <= 1)) {
                              t.next = 3
                              break
                            }
                            return (
                              (t.next = 3),
                              this.setState({keyCode: e.target.value})
                            )
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )),
              function(t) {
                return a.apply(this, arguments)
              })
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  {
                    className: this.props.selected ? 'pad selected' : 'pad',
                    onClick: this.play
                  },
                  this.props.editing
                    ? r.a.createElement(C, {
                        className: this.props.selected ? 'pad selected' : 'pad',
                        keyCode: this.state.keyCode,
                        handleChange: this.handleChange,
                        handleSubmit: this.props.handleSubmit,
                        id: this.props.id
                      })
                    : this.props.keyCode,
                  r.a.createElement('br', null),
                  this.props.editing ? this.props.url : ''
                )
              }
            }
          ]) && x(n.prototype, i),
          o && x(n, o),
          e
        )
      })(),
      E = function(t) {
        return r.a.createElement(
          'div',
          {className: 'pads'},
          t.config.map(function(e) {
            return r.a.createElement(A, {
              url: e.url,
              key: e.id,
              id: e.id,
              keyCode: e.keyCode,
              keysPressed: t.keysPressed,
              selected: t.keysPressed.includes(e.keyCode),
              latestKey: t.latestKey,
              editing: t.editing,
              handleSubmit: t.handleSubmit
            })
          })
        )
      },
      C = function(t) {
        return r.a.createElement(
          'div',
          {className: 'editpad'},
          r.a.createElement('input', {
            onChange: t.handleChange,
            value: t.keyCode
          }),
          r.a.createElement(
            'button',
            {
              className: 'done',
              type: 'submit',
              onClick: function() {
                return t.handleSubmit(t.id, t.keyCode)
              }
            },
            'done'
          )
        )
      }
    function F(t) {
      return (F =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    function M(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          u = s.value
      } catch (t) {
        return void n(t)
      }
      s.done ? e(u) : Promise.resolve(u).then(i, r)
    }
    function R(t) {
      return function() {
        var e = this,
          n = arguments
        return new Promise(function(i, r) {
          var o = t.apply(e, n)
          function a(t) {
            M(o, i, r, a, s, 'next', t)
          }
          function s(t) {
            M(o, i, r, a, s, 'throw', t)
          }
          a(void 0)
        })
      }
    }
    function N(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
    }
    function q(t) {
      return (q = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          })(t)
    }
    function j(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return t
    }
    function I(t, e) {
      return (I =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t
        })(t, e)
    }
    var L = (function(t) {
        function e(t) {
          var n
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
            ((n = (function(t, e) {
              return !e || ('object' !== F(e) && 'function' != typeof e)
                ? j(t)
                : e
            })(this, q(e).call(this, t))).state = {
              playing: !1,
              bpm: s.Transport.bpm.value
            }),
            (n.handleClick = n.handleClick.bind(j(n))),
            (n.handleChange = n.handleChange.bind(j(n))),
            n
          )
        }
        var n, i, o, a, u, l
        return (
          (function(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: {value: t, writable: !0, configurable: !0}
            })),
              e && I(t, e)
          })(e, r.a.Component),
          (n = e),
          (i = [
            {
              key: 'componentDidMount',
              value: ((l = R(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              new s.Loop(function(t) {
                                console.log(t),
                                  new s.Synth()
                                    .toMaster()
                                    .triggerAttackRelease('C4', '16n')
                              }, '4n')
                            )
                          case 2:
                            ;(this.loop = t.sent), s.Transport.start()
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )),
              function() {
                return l.apply(this, arguments)
              })
            },
            {
              key: 'handleClick',
              value: ((u = R(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              this.setState(function(t) {
                                return {playing: !t.playing}
                              })
                            )
                          case 2:
                            this.state.playing
                              ? this.loop.start()
                              : this.loop.stop()
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )),
              function() {
                return u.apply(this, arguments)
              })
            },
            {
              key: 'handleChange',
              value: ((a = R(
                regeneratorRuntime.mark(function t(e) {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), this.setState({bpm: e.target.value})
                            )
                          case 2:
                            this.loop.stop(),
                              s.Transport.bpm.rampTo(this.state.bpm, 1),
                              this.state.playing && this.loop.start()
                          case 5:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )),
              function(t) {
                return a.apply(this, arguments)
              })
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  {className: 'metronome'},
                  r.a.createElement('img', {
                    id: 'metronome-icon',
                    src: 'assets/metronome.png',
                    alt: 'metronome'
                  }),
                  r.a.createElement('input', {
                    name: 'bpm',
                    value: this.state.bpm,
                    type: 'number',
                    onChange: this.handleChange
                  }),
                  r.a.createElement('button', {
                    className: this.state.playing ? 'stop' : 'start',
                    type: 'button',
                    onClick: this.handleClick
                  })
                )
              }
            }
          ]) && N(n.prototype, i),
          o && N(n, o),
          e
        )
      })(),
      D = function() {
        return r.a.createElement(b, null)
      }
    a.a.render(r.a.createElement(D, null), document.getElementById('app'))
  }
])
//# sourceMappingURL=bundle.js.map
