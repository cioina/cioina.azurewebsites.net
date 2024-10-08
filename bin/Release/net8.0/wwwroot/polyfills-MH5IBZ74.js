var ce = globalThis;
function ee(t) {
  return (ce.__Zone_symbol_prefix || '__zone_symbol__') + t;
}
function dt() {
  let t = ce.performance;
  function r(M) {
    t && t.mark && t.mark(M);
  }
  function i(M, _) {
    t && t.measure && t.measure(M, _);
  }
  r('Zone');
  let n = (() => {
      let _ = class _ {
        static assertZonePatched() {
          if (ce.Promise !== L.ZoneAwarePromise)
            throw new Error(
              'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)',
            );
        }
        static get root() {
          let e = _.current;
          for (; e.parent; ) e = e.parent;
          return e;
        }
        static get current() {
          return b.zone;
        }
        static get currentTask() {
          return S;
        }
        static __load_patch(e, d, O = !1) {
          if (L.hasOwnProperty(e)) {
            let N = ce[ee('forceDuplicateZoneCheck')] === !0;
            if (!O && N) throw Error('Already loaded patch: ' + e);
          } else if (!ce['__Zone_disable_' + e]) {
            let N = 'Zone:' + e;
            r(N), (L[e] = d(ce, _, w)), i(N, N);
          }
        }
        get parent() {
          return this._parent;
        }
        get name() {
          return this._name;
        }
        constructor(e, d) {
          (this._parent = e),
            (this._name = d ? d.name || 'unnamed' : '<root>'),
            (this._properties = (d && d.properties) || {}),
            (this._zoneDelegate = new f(
              this,
              this._parent && this._parent._zoneDelegate,
              d,
            ));
        }
        get(e) {
          let d = this.getZoneWith(e);
          if (d) return d._properties[e];
        }
        getZoneWith(e) {
          let d = this;
          for (; d; ) {
            if (d._properties.hasOwnProperty(e)) return d;
            d = d._parent;
          }
          return null;
        }
        fork(e) {
          if (!e) throw new Error('ZoneSpec required!');
          return this._zoneDelegate.fork(this, e);
        }
        wrap(e, d) {
          if (typeof e != 'function')
            throw new Error('Expecting function got: ' + e);
          let O = this._zoneDelegate.intercept(this, e, d),
            N = this;
          return function () {
            return N.runGuarded(O, this, arguments, d);
          };
        }
        run(e, d, O, N) {
          b = { parent: b, zone: this };
          try {
            return this._zoneDelegate.invoke(this, e, d, O, N);
          } finally {
            b = b.parent;
          }
        }
        runGuarded(e, d = null, O, N) {
          b = { parent: b, zone: this };
          try {
            try {
              return this._zoneDelegate.invoke(this, e, d, O, N);
            } catch (D) {
              if (this._zoneDelegate.handleError(this, D)) throw D;
            }
          } finally {
            b = b.parent;
          }
        }
        runTask(e, d, O) {
          if (e.zone != this)
            throw new Error(
              'A task can only be run in the zone of creation! (Creation: ' +
                (e.zone || K).name +
                '; Execution: ' +
                this.name +
                ')',
            );
          let N = e,
            {
              type: D,
              data: { isPeriodic: _e = !1, isRefreshable: ae = !1 } = {},
            } = e;
          if (e.state === X && (D === W || D === y)) return;
          let ne = e.state != H;
          ne && N._transitionTo(H, h);
          let Ee = S;
          (S = N), (b = { parent: b, zone: this });
          try {
            D == y && e.data && !_e && !ae && (e.cancelFn = void 0);
            try {
              return this._zoneDelegate.invokeTask(this, N, d, O);
            } catch (l) {
              if (this._zoneDelegate.handleError(this, l)) throw l;
            }
          } finally {
            let l = e.state;
            if (l !== X && l !== Y)
              if (D == W || _e || (ae && l === k))
                ne && N._transitionTo(h, H, k);
              else {
                let a = N._zoneDelegates;
                this._updateTaskCount(N, -1),
                  ne && N._transitionTo(X, H, X),
                  ae && (N._zoneDelegates = a);
              }
            (b = b.parent), (S = Ee);
          }
        }
        scheduleTask(e) {
          if (e.zone && e.zone !== this) {
            let O = this;
            for (; O; ) {
              if (O === e.zone)
                throw Error(
                  `can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`,
                );
              O = O.parent;
            }
          }
          e._transitionTo(k, X);
          let d = [];
          (e._zoneDelegates = d), (e._zone = this);
          try {
            e = this._zoneDelegate.scheduleTask(this, e);
          } catch (O) {
            throw (
              (e._transitionTo(Y, k, X),
              this._zoneDelegate.handleError(this, O),
              O)
            );
          }
          return (
            e._zoneDelegates === d && this._updateTaskCount(e, 1),
            e.state == k && e._transitionTo(h, k),
            e
          );
        }
        scheduleMicroTask(e, d, O, N) {
          return this.scheduleTask(new T(F, e, d, O, N, void 0));
        }
        scheduleMacroTask(e, d, O, N, D) {
          return this.scheduleTask(new T(y, e, d, O, N, D));
        }
        scheduleEventTask(e, d, O, N, D) {
          return this.scheduleTask(new T(W, e, d, O, N, D));
        }
        cancelTask(e) {
          if (e.zone != this)
            throw new Error(
              'A task can only be cancelled in the zone of creation! (Creation: ' +
                (e.zone || K).name +
                '; Execution: ' +
                this.name +
                ')',
            );
          if (!(e.state !== h && e.state !== H)) {
            e._transitionTo(G, h, H);
            try {
              this._zoneDelegate.cancelTask(this, e);
            } catch (d) {
              throw (
                (e._transitionTo(Y, G),
                this._zoneDelegate.handleError(this, d),
                d)
              );
            }
            return (
              this._updateTaskCount(e, -1),
              e._transitionTo(X, G),
              (e.runCount = -1),
              e
            );
          }
        }
        _updateTaskCount(e, d) {
          let O = e._zoneDelegates;
          d == -1 && (e._zoneDelegates = null);
          for (let N = 0; N < O.length; N++) O[N]._updateTaskCount(e.type, d);
        }
      };
      _.__symbol__ = ee;
      let M = _;
      return M;
    })(),
    s = {
      name: '',
      onHasTask: (M, _, c, e) => M.hasTask(c, e),
      onScheduleTask: (M, _, c, e) => M.scheduleTask(c, e),
      onInvokeTask: (M, _, c, e, d, O) => M.invokeTask(c, e, d, O),
      onCancelTask: (M, _, c, e) => M.cancelTask(c, e),
    };
  class f {
    get zone() {
      return this._zone;
    }
    constructor(_, c, e) {
      (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
        (this._zone = _),
        (this._parentDelegate = c),
        (this._forkZS = e && (e && e.onFork ? e : c._forkZS)),
        (this._forkDlgt = e && (e.onFork ? c : c._forkDlgt)),
        (this._forkCurrZone = e && (e.onFork ? this._zone : c._forkCurrZone)),
        (this._interceptZS = e && (e.onIntercept ? e : c._interceptZS)),
        (this._interceptDlgt = e && (e.onIntercept ? c : c._interceptDlgt)),
        (this._interceptCurrZone =
          e && (e.onIntercept ? this._zone : c._interceptCurrZone)),
        (this._invokeZS = e && (e.onInvoke ? e : c._invokeZS)),
        (this._invokeDlgt = e && (e.onInvoke ? c : c._invokeDlgt)),
        (this._invokeCurrZone =
          e && (e.onInvoke ? this._zone : c._invokeCurrZone)),
        (this._handleErrorZS = e && (e.onHandleError ? e : c._handleErrorZS)),
        (this._handleErrorDlgt =
          e && (e.onHandleError ? c : c._handleErrorDlgt)),
        (this._handleErrorCurrZone =
          e && (e.onHandleError ? this._zone : c._handleErrorCurrZone)),
        (this._scheduleTaskZS =
          e && (e.onScheduleTask ? e : c._scheduleTaskZS)),
        (this._scheduleTaskDlgt =
          e && (e.onScheduleTask ? c : c._scheduleTaskDlgt)),
        (this._scheduleTaskCurrZone =
          e && (e.onScheduleTask ? this._zone : c._scheduleTaskCurrZone)),
        (this._invokeTaskZS = e && (e.onInvokeTask ? e : c._invokeTaskZS)),
        (this._invokeTaskDlgt = e && (e.onInvokeTask ? c : c._invokeTaskDlgt)),
        (this._invokeTaskCurrZone =
          e && (e.onInvokeTask ? this._zone : c._invokeTaskCurrZone)),
        (this._cancelTaskZS = e && (e.onCancelTask ? e : c._cancelTaskZS)),
        (this._cancelTaskDlgt = e && (e.onCancelTask ? c : c._cancelTaskDlgt)),
        (this._cancelTaskCurrZone =
          e && (e.onCancelTask ? this._zone : c._cancelTaskCurrZone)),
        (this._hasTaskZS = null),
        (this._hasTaskDlgt = null),
        (this._hasTaskDlgtOwner = null),
        (this._hasTaskCurrZone = null);
      let d = e && e.onHasTask,
        O = c && c._hasTaskZS;
      (d || O) &&
        ((this._hasTaskZS = d ? e : s),
        (this._hasTaskDlgt = c),
        (this._hasTaskDlgtOwner = this),
        (this._hasTaskCurrZone = this._zone),
        e.onScheduleTask ||
          ((this._scheduleTaskZS = s),
          (this._scheduleTaskDlgt = c),
          (this._scheduleTaskCurrZone = this._zone)),
        e.onInvokeTask ||
          ((this._invokeTaskZS = s),
          (this._invokeTaskDlgt = c),
          (this._invokeTaskCurrZone = this._zone)),
        e.onCancelTask ||
          ((this._cancelTaskZS = s),
          (this._cancelTaskDlgt = c),
          (this._cancelTaskCurrZone = this._zone)));
    }
    fork(_, c) {
      return this._forkZS
        ? this._forkZS.onFork(this._forkDlgt, this.zone, _, c)
        : new n(_, c);
    }
    intercept(_, c, e) {
      return this._interceptZS
        ? this._interceptZS.onIntercept(
            this._interceptDlgt,
            this._interceptCurrZone,
            _,
            c,
            e,
          )
        : c;
    }
    invoke(_, c, e, d, O) {
      return this._invokeZS
        ? this._invokeZS.onInvoke(
            this._invokeDlgt,
            this._invokeCurrZone,
            _,
            c,
            e,
            d,
            O,
          )
        : c.apply(e, d);
    }
    handleError(_, c) {
      return this._handleErrorZS
        ? this._handleErrorZS.onHandleError(
            this._handleErrorDlgt,
            this._handleErrorCurrZone,
            _,
            c,
          )
        : !0;
    }
    scheduleTask(_, c) {
      let e = c;
      if (this._scheduleTaskZS)
        this._hasTaskZS && e._zoneDelegates.push(this._hasTaskDlgtOwner),
          (e = this._scheduleTaskZS.onScheduleTask(
            this._scheduleTaskDlgt,
            this._scheduleTaskCurrZone,
            _,
            c,
          )),
          e || (e = c);
      else if (c.scheduleFn) c.scheduleFn(c);
      else if (c.type == F) z(c);
      else throw new Error('Task is missing scheduleFn.');
      return e;
    }
    invokeTask(_, c, e, d) {
      return this._invokeTaskZS
        ? this._invokeTaskZS.onInvokeTask(
            this._invokeTaskDlgt,
            this._invokeTaskCurrZone,
            _,
            c,
            e,
            d,
          )
        : c.callback.apply(e, d);
    }
    cancelTask(_, c) {
      let e;
      if (this._cancelTaskZS)
        e = this._cancelTaskZS.onCancelTask(
          this._cancelTaskDlgt,
          this._cancelTaskCurrZone,
          _,
          c,
        );
      else {
        if (!c.cancelFn) throw Error('Task is not cancelable');
        e = c.cancelFn(c);
      }
      return e;
    }
    hasTask(_, c) {
      try {
        this._hasTaskZS &&
          this._hasTaskZS.onHasTask(
            this._hasTaskDlgt,
            this._hasTaskCurrZone,
            _,
            c,
          );
      } catch (e) {
        this.handleError(_, e);
      }
    }
    _updateTaskCount(_, c) {
      let e = this._taskCounts,
        d = e[_],
        O = (e[_] = d + c);
      if (O < 0) throw new Error('More tasks executed then were scheduled.');
      if (d == 0 || O == 0) {
        let N = {
          microTask: e.microTask > 0,
          macroTask: e.macroTask > 0,
          eventTask: e.eventTask > 0,
          change: _,
        };
        this.hasTask(this._zone, N);
      }
    }
  }
  class T {
    constructor(_, c, e, d, O, N) {
      if (
        ((this._zone = null),
        (this.runCount = 0),
        (this._zoneDelegates = null),
        (this._state = 'notScheduled'),
        (this.type = _),
        (this.source = c),
        (this.data = d),
        (this.scheduleFn = O),
        (this.cancelFn = N),
        !e)
      )
        throw new Error('callback is not defined');
      this.callback = e;
      let D = this;
      _ === W && d && d.useG
        ? (this.invoke = T.invokeTask)
        : (this.invoke = function () {
            return T.invokeTask.call(ce, D, this, arguments);
          });
    }
    static invokeTask(_, c, e) {
      _ || (_ = this), Q++;
      try {
        return _.runCount++, _.zone.runTask(_, c, e);
      } finally {
        Q == 1 && J(), Q--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(X, k);
    }
    _transitionTo(_, c, e) {
      if (this._state === c || this._state === e)
        (this._state = _), _ == X && (this._zoneDelegates = null);
      else
        throw new Error(
          `${this.type} '${this.source}': can not transition to '${_}', expecting state '${c}'${e ? " or '" + e + "'" : ''}, was '${this._state}'.`,
        );
    }
    toString() {
      return this.data && typeof this.data.handleId < 'u'
        ? this.data.handleId.toString()
        : Object.prototype.toString.call(this);
    }
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount,
      };
    }
  }
  let g = ee('setTimeout'),
    p = ee('Promise'),
    C = ee('then'),
    E = [],
    P = !1,
    j;
  function V(M) {
    if ((j || (ce[p] && (j = ce[p].resolve(0))), j)) {
      let _ = j[C];
      _ || (_ = j.then), _.call(j, M);
    } else ce[g](M, 0);
  }
  function z(M) {
    Q === 0 && E.length === 0 && V(J), M && E.push(M);
  }
  function J() {
    if (!P) {
      for (P = !0; E.length; ) {
        let M = E;
        E = [];
        for (let _ = 0; _ < M.length; _++) {
          let c = M[_];
          try {
            c.zone.runTask(c, null, null);
          } catch (e) {
            w.onUnhandledError(e);
          }
        }
      }
      w.microtaskDrainDone(), (P = !1);
    }
  }
  let K = { name: 'NO ZONE' },
    X = 'notScheduled',
    k = 'scheduling',
    h = 'scheduled',
    H = 'running',
    G = 'canceling',
    Y = 'unknown',
    F = 'microTask',
    y = 'macroTask',
    W = 'eventTask',
    L = {},
    w = {
      symbol: ee,
      currentZoneFrame: () => b,
      onUnhandledError: q,
      microtaskDrainDone: q,
      scheduleMicroTask: z,
      showUncaughtError: () => !n[ee('ignoreConsoleErrorUncaughtError')],
      patchEventTarget: () => [],
      patchOnProperties: q,
      patchMethod: () => q,
      bindArguments: () => [],
      patchThen: () => q,
      patchMacroTask: () => q,
      patchEventPrototype: () => q,
      isIEOrEdge: () => !1,
      getGlobalObjects: () => {},
      ObjectDefineProperty: () => q,
      ObjectGetOwnPropertyDescriptor: () => {},
      ObjectCreate: () => {},
      ArraySlice: () => [],
      patchClass: () => q,
      wrapWithCurrentZone: () => q,
      filterProperties: () => [],
      attachOriginToPatched: () => q,
      _redefineProperty: () => q,
      patchCallbacks: () => q,
      nativeScheduleMicroTask: V,
    },
    b = { parent: null, zone: new n(null, null) },
    S = null,
    Q = 0;
  function q() {}
  return i('Zone', 'Zone'), n;
}
function _t() {
  let t = globalThis,
    r = t[ee('forceDuplicateZoneCheck')] === !0;
  if (t.Zone && (r || typeof t.Zone.__symbol__ != 'function'))
    throw new Error('Zone already loaded.');
  return (t.Zone ??= dt()), t.Zone;
}
var be = Object.getOwnPropertyDescriptor,
  Ae = Object.defineProperty,
  je = Object.getPrototypeOf,
  Et = Object.create,
  Tt = Array.prototype.slice,
  He = 'addEventListener',
  xe = 'removeEventListener',
  Le = ee(He),
  Ie = ee(xe),
  le = 'true',
  ue = 'false',
  Pe = ee('');
function Ve(t, r) {
  return Zone.current.wrap(t, r);
}
function Ge(t, r, i, n, s) {
  return Zone.current.scheduleMacroTask(t, r, i, n, s);
}
var x = ee,
  De = typeof window < 'u',
  pe = De ? window : void 0,
  $ = (De && pe) || globalThis,
  gt = 'removeAttribute';
function Fe(t, r) {
  for (let i = t.length - 1; i >= 0; i--)
    typeof t[i] == 'function' && (t[i] = Ve(t[i], r + '_' + i));
  return t;
}
function yt(t, r) {
  let i = t.constructor.name;
  for (let n = 0; n < r.length; n++) {
    let s = r[n],
      f = t[s];
    if (f) {
      let T = be(t, s);
      if (!tt(T)) continue;
      t[s] = (g => {
        let p = function () {
          return g.apply(this, Fe(arguments, i + '.' + s));
        };
        return he(p, g), p;
      })(f);
    }
  }
}
function tt(t) {
  return t
    ? t.writable === !1
      ? !1
      : !(typeof t.get == 'function' && typeof t.set > 'u')
    : !0;
}
var nt = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope,
  Se =
    !('nw' in $) &&
    typeof $.process < 'u' &&
    $.process.toString() === '[object process]',
  Be = !Se && !nt && !!(De && pe.HTMLElement),
  rt =
    typeof $.process < 'u' &&
    $.process.toString() === '[object process]' &&
    !nt &&
    !!(De && pe.HTMLElement),
  Ce = {},
  mt = x('enable_beforeunload'),
  Ye = function (t) {
    if (((t = t || $.event), !t)) return;
    let r = Ce[t.type];
    r || (r = Ce[t.type] = x('ON_PROPERTY' + t.type));
    let i = this || t.target || $,
      n = i[r],
      s;
    if (Be && i === pe && t.type === 'error') {
      let f = t;
      (s =
        n && n.call(this, f.message, f.filename, f.lineno, f.colno, f.error)),
        s === !0 && t.preventDefault();
    } else
      (s = n && n.apply(this, arguments)),
        t.type === 'beforeunload' && $[mt] && typeof s == 'string'
          ? (t.returnValue = s)
          : s != null && !s && t.preventDefault();
    return s;
  };
function $e(t, r, i) {
  let n = be(t, r);
  if (
    (!n && i && be(i, r) && (n = { enumerable: !0, configurable: !0 }),
    !n || !n.configurable)
  )
    return;
  let s = x('on' + r + 'patched');
  if (t.hasOwnProperty(s) && t[s]) return;
  delete n.writable, delete n.value;
  let f = n.get,
    T = n.set,
    g = r.slice(2),
    p = Ce[g];
  p || (p = Ce[g] = x('ON_PROPERTY' + g)),
    (n.set = function (C) {
      let E = this;
      if ((!E && t === $ && (E = $), !E)) return;
      typeof E[p] == 'function' && E.removeEventListener(g, Ye),
        T && T.call(E, null),
        (E[p] = C),
        typeof C == 'function' && E.addEventListener(g, Ye, !1);
    }),
    (n.get = function () {
      let C = this;
      if ((!C && t === $ && (C = $), !C)) return null;
      let E = C[p];
      if (E) return E;
      if (f) {
        let P = f.call(this);
        if (P)
          return (
            n.set.call(this, P),
            typeof C[gt] == 'function' && C.removeAttribute(r),
            P
          );
      }
      return null;
    }),
    Ae(t, r, n),
    (t[s] = !0);
}
function ot(t, r, i) {
  if (r) for (let n = 0; n < r.length; n++) $e(t, 'on' + r[n], i);
  else {
    let n = [];
    for (let s in t) s.slice(0, 2) == 'on' && n.push(s);
    for (let s = 0; s < n.length; s++) $e(t, n[s], i);
  }
}
var oe = x('originalInstance');
function ve(t) {
  let r = $[t];
  if (!r) return;
  ($[x(t)] = r),
    ($[t] = function () {
      let s = Fe(arguments, t);
      switch (s.length) {
        case 0:
          this[oe] = new r();
          break;
        case 1:
          this[oe] = new r(s[0]);
          break;
        case 2:
          this[oe] = new r(s[0], s[1]);
          break;
        case 3:
          this[oe] = new r(s[0], s[1], s[2]);
          break;
        case 4:
          this[oe] = new r(s[0], s[1], s[2], s[3]);
          break;
        default:
          throw new Error('Arg list too long.');
      }
    }),
    he($[t], r);
  let i = new r(function () {}),
    n;
  for (n in i)
    (t === 'XMLHttpRequest' && n === 'responseBlob') ||
      (function (s) {
        typeof i[s] == 'function'
          ? ($[t].prototype[s] = function () {
              return this[oe][s].apply(this[oe], arguments);
            })
          : Ae($[t].prototype, s, {
              set: function (f) {
                typeof f == 'function'
                  ? ((this[oe][s] = Ve(f, t + '.' + s)), he(this[oe][s], f))
                  : (this[oe][s] = f);
              },
              get: function () {
                return this[oe][s];
              },
            });
      })(n);
  for (n in r) n !== 'prototype' && r.hasOwnProperty(n) && ($[t][n] = r[n]);
}
function fe(t, r, i) {
  let n = t;
  for (; n && !n.hasOwnProperty(r); ) n = je(n);
  !n && t[r] && (n = t);
  let s = x(r),
    f = null;
  if (n && (!(f = n[s]) || !n.hasOwnProperty(s))) {
    f = n[s] = n[r];
    let T = n && be(n, r);
    if (tt(T)) {
      let g = i(f, s, r);
      (n[r] = function () {
        return g(this, arguments);
      }),
        he(n[r], f);
    }
  }
  return f;
}
function pt(t, r, i) {
  let n = null;
  function s(f) {
    let T = f.data;
    return (
      (T.args[T.cbIdx] = function () {
        f.invoke.apply(this, arguments);
      }),
      n.apply(T.target, T.args),
      f
    );
  }
  n = fe(
    t,
    r,
    f =>
      function (T, g) {
        let p = i(T, g);
        return p.cbIdx >= 0 && typeof g[p.cbIdx] == 'function'
          ? Ge(p.name, g[p.cbIdx], p, s)
          : f.apply(T, g);
      },
  );
}
function he(t, r) {
  t[x('OriginalDelegate')] = r;
}
var Je = !1,
  Me = !1;
function kt() {
  try {
    let t = pe.navigator.userAgent;
    if (t.indexOf('MSIE ') !== -1 || t.indexOf('Trident/') !== -1) return !0;
  } catch {}
  return !1;
}
function vt() {
  if (Je) return Me;
  Je = !0;
  try {
    let t = pe.navigator.userAgent;
    (t.indexOf('MSIE ') !== -1 ||
      t.indexOf('Trident/') !== -1 ||
      t.indexOf('Edge/') !== -1) &&
      (Me = !0);
  } catch {}
  return Me;
}
function Ke(t) {
  return typeof t == 'function';
}
function Qe(t) {
  return typeof t == 'number';
}
var me = !1;
if (typeof window < 'u')
  try {
    let t = Object.defineProperty({}, 'passive', {
      get: function () {
        me = !0;
      },
    });
    window.addEventListener('test', t, t),
      window.removeEventListener('test', t, t);
  } catch {
    me = !1;
  }
var bt = { useG: !0 },
  te = {},
  st = {},
  it = new RegExp('^' + Pe + '(\\w+)(true|false)$'),
  ct = x('propagationStopped');
function at(t, r) {
  let i = (r ? r(t) : t) + ue,
    n = (r ? r(t) : t) + le,
    s = Pe + i,
    f = Pe + n;
  (te[t] = {}), (te[t][ue] = s), (te[t][le] = f);
}
function Pt(t, r, i, n) {
  let s = (n && n.add) || He,
    f = (n && n.rm) || xe,
    T = (n && n.listeners) || 'eventListeners',
    g = (n && n.rmAll) || 'removeAllListeners',
    p = x(s),
    C = '.' + s + ':',
    E = 'prependListener',
    P = '.' + E + ':',
    j = function (k, h, H) {
      if (k.isRemoved) return;
      let G = k.callback;
      typeof G == 'object' &&
        G.handleEvent &&
        ((k.callback = y => G.handleEvent(y)), (k.originalDelegate = G));
      let Y;
      try {
        k.invoke(k, h, [H]);
      } catch (y) {
        Y = y;
      }
      let F = k.options;
      if (F && typeof F == 'object' && F.once) {
        let y = k.originalDelegate ? k.originalDelegate : k.callback;
        h[f].call(h, H.type, y, F);
      }
      return Y;
    };
  function V(k, h, H) {
    if (((h = h || t.event), !h)) return;
    let G = k || h.target || t,
      Y = G[te[h.type][H ? le : ue]];
    if (Y) {
      let F = [];
      if (Y.length === 1) {
        let y = j(Y[0], G, h);
        y && F.push(y);
      } else {
        let y = Y.slice();
        for (let W = 0; W < y.length && !(h && h[ct] === !0); W++) {
          let L = j(y[W], G, h);
          L && F.push(L);
        }
      }
      if (F.length === 1) throw F[0];
      for (let y = 0; y < F.length; y++) {
        let W = F[y];
        r.nativeScheduleMicroTask(() => {
          throw W;
        });
      }
    }
  }
  let z = function (k) {
      return V(this, k, !1);
    },
    J = function (k) {
      return V(this, k, !0);
    };
  function K(k, h) {
    if (!k) return !1;
    let H = !0;
    h && h.useG !== void 0 && (H = h.useG);
    let G = h && h.vh,
      Y = !0;
    h && h.chkDup !== void 0 && (Y = h.chkDup);
    let F = !1;
    h && h.rt !== void 0 && (F = h.rt);
    let y = k;
    for (; y && !y.hasOwnProperty(s); ) y = je(y);
    if ((!y && k[s] && (y = k), !y || y[p])) return !1;
    let W = h && h.eventNameToString,
      L = {},
      w = (y[p] = y[s]),
      b = (y[x(f)] = y[f]),
      S = (y[x(T)] = y[T]),
      Q = (y[x(g)] = y[g]),
      q;
    h && h.prepend && (q = y[x(h.prepend)] = y[h.prepend]);
    function M(o, u) {
      return !me && typeof o == 'object' && o
        ? !!o.capture
        : !me || !u
          ? o
          : typeof o == 'boolean'
            ? { capture: o, passive: !0 }
            : o
              ? typeof o == 'object' && o.passive !== !1
                ? { ...o, passive: !0 }
                : o
              : { passive: !0 };
    }
    let _ = function (o) {
        if (!L.isExisting)
          return w.call(L.target, L.eventName, L.capture ? J : z, L.options);
      },
      c = function (o) {
        if (!o.isRemoved) {
          let u = te[o.eventName],
            v;
          u && (v = u[o.capture ? le : ue]);
          let R = v && o.target[v];
          if (R) {
            for (let m = 0; m < R.length; m++)
              if (R[m] === o) {
                R.splice(m, 1),
                  (o.isRemoved = !0),
                  o.removeAbortListener &&
                    (o.removeAbortListener(), (o.removeAbortListener = null)),
                  R.length === 0 && ((o.allRemoved = !0), (o.target[v] = null));
                break;
              }
          }
        }
        if (o.allRemoved)
          return b.call(o.target, o.eventName, o.capture ? J : z, o.options);
      },
      e = function (o) {
        return w.call(L.target, L.eventName, o.invoke, L.options);
      },
      d = function (o) {
        return q.call(L.target, L.eventName, o.invoke, L.options);
      },
      O = function (o) {
        return b.call(o.target, o.eventName, o.invoke, o.options);
      },
      N = H ? _ : e,
      D = H ? c : O,
      _e = function (o, u) {
        let v = typeof u;
        return (
          (v === 'function' && o.callback === u) ||
          (v === 'object' && o.originalDelegate === u)
        );
      },
      ae = h && h.diff ? h.diff : _e,
      ne = Zone[x('UNPATCHED_EVENTS')],
      Ee = t[x('PASSIVE_EVENTS')];
    function l(o) {
      if (typeof o == 'object' && o !== null) {
        let u = { ...o };
        return o.signal && (u.signal = o.signal), u;
      }
      return o;
    }
    let a = function (o, u, v, R, m = !1, I = !1) {
      return function () {
        let Z = this || t,
          A = arguments[0];
        h && h.transferEventName && (A = h.transferEventName(A));
        let B = arguments[1];
        if (!B) return o.apply(this, arguments);
        if (Se && A === 'uncaughtException') return o.apply(this, arguments);
        let U = !1;
        if (typeof B != 'function') {
          if (!B.handleEvent) return o.apply(this, arguments);
          U = !0;
        }
        if (G && !G(o, B, Z, arguments)) return;
        let de = me && !!Ee && Ee.indexOf(A) !== -1,
          se = l(M(arguments[2], de)),
          Te = se?.signal;
        if (Te?.aborted) return;
        if (ne) {
          for (let ie = 0; ie < ne.length; ie++)
            if (A === ne[ie])
              return de ? o.call(Z, A, B, se) : o.apply(this, arguments);
        }
        let Oe = se ? (typeof se == 'boolean' ? !0 : se.capture) : !1,
          Ue = se && typeof se == 'object' ? se.once : !1,
          ht = Zone.current,
          Ne = te[A];
        Ne || (at(A, W), (Ne = te[A]));
        let ze = Ne[Oe ? le : ue],
          ge = Z[ze],
          We = !1;
        if (ge) {
          if (((We = !0), Y)) {
            for (let ie = 0; ie < ge.length; ie++) if (ae(ge[ie], B)) return;
          }
        } else ge = Z[ze] = [];
        let we,
          qe = Z.constructor.name,
          Xe = st[qe];
        Xe && (we = Xe[A]),
          we || (we = qe + u + (W ? W(A) : A)),
          (L.options = se),
          Ue && (L.options.once = !1),
          (L.target = Z),
          (L.capture = Oe),
          (L.eventName = A),
          (L.isExisting = We);
        let ke = H ? bt : void 0;
        ke && (ke.taskData = L), Te && (L.options.signal = void 0);
        let re = ht.scheduleEventTask(we, B, ke, v, R);
        if (Te) {
          L.options.signal = Te;
          let ie = () => re.zone.cancelTask(re);
          o.call(Te, 'abort', ie, { once: !0 }),
            (re.removeAbortListener = () =>
              Te.removeEventListener('abort', ie));
        }
        if (
          ((L.target = null),
          ke && (ke.taskData = null),
          Ue && (L.options.once = !0),
          (!me && typeof re.options == 'boolean') || (re.options = se),
          (re.target = Z),
          (re.capture = Oe),
          (re.eventName = A),
          U && (re.originalDelegate = B),
          I ? ge.unshift(re) : ge.push(re),
          m)
        )
          return Z;
      };
    };
    return (
      (y[s] = a(w, C, N, D, F)),
      q && (y[E] = a(q, P, d, D, F, !0)),
      (y[f] = function () {
        let o = this || t,
          u = arguments[0];
        h && h.transferEventName && (u = h.transferEventName(u));
        let v = arguments[2],
          R = v ? (typeof v == 'boolean' ? !0 : v.capture) : !1,
          m = arguments[1];
        if (!m) return b.apply(this, arguments);
        if (G && !G(b, m, o, arguments)) return;
        let I = te[u],
          Z;
        I && (Z = I[R ? le : ue]);
        let A = Z && o[Z];
        if (A)
          for (let B = 0; B < A.length; B++) {
            let U = A[B];
            if (ae(U, m)) {
              if (
                (A.splice(B, 1),
                (U.isRemoved = !0),
                A.length === 0 &&
                  ((U.allRemoved = !0),
                  (o[Z] = null),
                  !R && typeof u == 'string'))
              ) {
                let de = Pe + 'ON_PROPERTY' + u;
                o[de] = null;
              }
              return U.zone.cancelTask(U), F ? o : void 0;
            }
          }
        return b.apply(this, arguments);
      }),
      (y[T] = function () {
        let o = this || t,
          u = arguments[0];
        h && h.transferEventName && (u = h.transferEventName(u));
        let v = [],
          R = lt(o, W ? W(u) : u);
        for (let m = 0; m < R.length; m++) {
          let I = R[m],
            Z = I.originalDelegate ? I.originalDelegate : I.callback;
          v.push(Z);
        }
        return v;
      }),
      (y[g] = function () {
        let o = this || t,
          u = arguments[0];
        if (u) {
          h && h.transferEventName && (u = h.transferEventName(u));
          let v = te[u];
          if (v) {
            let R = v[ue],
              m = v[le],
              I = o[R],
              Z = o[m];
            if (I) {
              let A = I.slice();
              for (let B = 0; B < A.length; B++) {
                let U = A[B],
                  de = U.originalDelegate ? U.originalDelegate : U.callback;
                this[f].call(this, u, de, U.options);
              }
            }
            if (Z) {
              let A = Z.slice();
              for (let B = 0; B < A.length; B++) {
                let U = A[B],
                  de = U.originalDelegate ? U.originalDelegate : U.callback;
                this[f].call(this, u, de, U.options);
              }
            }
          }
        } else {
          let v = Object.keys(o);
          for (let R = 0; R < v.length; R++) {
            let m = v[R],
              I = it.exec(m),
              Z = I && I[1];
            Z && Z !== 'removeListener' && this[g].call(this, Z);
          }
          this[g].call(this, 'removeListener');
        }
        if (F) return this;
      }),
      he(y[s], w),
      he(y[f], b),
      Q && he(y[g], Q),
      S && he(y[T], S),
      !0
    );
  }
  let X = [];
  for (let k = 0; k < i.length; k++) X[k] = K(i[k], n);
  return X;
}
function lt(t, r) {
  if (!r) {
    let f = [];
    for (let T in t) {
      let g = it.exec(T),
        p = g && g[1];
      if (p && (!r || p === r)) {
        let C = t[T];
        if (C) for (let E = 0; E < C.length; E++) f.push(C[E]);
      }
    }
    return f;
  }
  let i = te[r];
  i || (at(r), (i = te[r]));
  let n = t[i[ue]],
    s = t[i[le]];
  return n ? (s ? n.concat(s) : n.slice()) : s ? s.slice() : [];
}
function wt(t, r) {
  let i = t.Event;
  i &&
    i.prototype &&
    r.patchMethod(
      i.prototype,
      'stopImmediatePropagation',
      n =>
        function (s, f) {
          (s[ct] = !0), n && n.apply(s, f);
        },
    );
}
function Rt(t, r) {
  r.patchMethod(
    t,
    'queueMicrotask',
    i =>
      function (n, s) {
        Zone.current.scheduleMicroTask('queueMicrotask', s[0]);
      },
  );
}
var Re = x('zoneTask');
function ye(t, r, i, n) {
  let s = null,
    f = null;
  (r += n), (i += n);
  let T = {};
  function g(C) {
    let E = C.data;
    E.args[0] = function () {
      return C.invoke.apply(this, arguments);
    };
    let P = s.apply(t, E.args);
    return (
      Qe(P)
        ? (E.handleId = P)
        : ((E.handle = P), (E.isRefreshable = Ke(P.refresh))),
      C
    );
  }
  function p(C) {
    let { handle: E, handleId: P } = C.data;
    return f.call(t, E ?? P);
  }
  (s = fe(
    t,
    r,
    C =>
      function (E, P) {
        if (Ke(P[0])) {
          let j = {
              isRefreshable: !1,
              isPeriodic: n === 'Interval',
              delay: n === 'Timeout' || n === 'Interval' ? P[1] || 0 : void 0,
              args: P,
            },
            V = P[0];
          P[0] = function () {
            try {
              return V.apply(this, arguments);
            } finally {
              let {
                handle: H,
                handleId: G,
                isPeriodic: Y,
                isRefreshable: F,
              } = j;
              !Y && !F && (G ? delete T[G] : H && (H[Re] = null));
            }
          };
          let z = Ge(r, P[0], j, g, p);
          if (!z) return z;
          let {
            handleId: J,
            handle: K,
            isRefreshable: X,
            isPeriodic: k,
          } = z.data;
          if (J) T[J] = z;
          else if (K && ((K[Re] = z), X && !k)) {
            let h = K.refresh;
            K.refresh = function () {
              let { zone: H, state: G } = z;
              return (
                G === 'notScheduled'
                  ? ((z._state = 'scheduled'), H._updateTaskCount(z, 1))
                  : G === 'running' && (z._state = 'scheduling'),
                h.call(this)
              );
            };
          }
          return K ?? J ?? z;
        } else return C.apply(t, P);
      },
  )),
    (f = fe(
      t,
      i,
      C =>
        function (E, P) {
          let j = P[0],
            V;
          Qe(j)
            ? ((V = T[j]), delete T[j])
            : ((V = j?.[Re]), V ? (j[Re] = null) : (V = j)),
            V?.type ? V.cancelFn && V.zone.cancelTask(V) : C.apply(t, P);
        },
    ));
}
function Ct(t, r) {
  let { isBrowser: i, isMix: n } = r.getGlobalObjects();
  if ((!i && !n) || !t.customElements || !('customElements' in t)) return;
  let s = [
    'connectedCallback',
    'disconnectedCallback',
    'adoptedCallback',
    'attributeChangedCallback',
    'formAssociatedCallback',
    'formDisabledCallback',
    'formResetCallback',
    'formStateRestoreCallback',
  ];
  r.patchCallbacks(r, t.customElements, 'customElements', 'define', s);
}
function Dt(t, r) {
  if (Zone[r.symbol('patchEventTarget')]) return;
  let {
    eventNames: i,
    zoneSymbolEventNames: n,
    TRUE_STR: s,
    FALSE_STR: f,
    ZONE_SYMBOL_PREFIX: T,
  } = r.getGlobalObjects();
  for (let p = 0; p < i.length; p++) {
    let C = i[p],
      E = C + f,
      P = C + s,
      j = T + E,
      V = T + P;
    (n[C] = {}), (n[C][f] = j), (n[C][s] = V);
  }
  let g = t.EventTarget;
  if (!(!g || !g.prototype))
    return r.patchEventTarget(t, r, [g && g.prototype]), !0;
}
function St(t, r) {
  r.patchEventPrototype(t, r);
}
function ut(t, r, i) {
  if (!i || i.length === 0) return r;
  let n = i.filter(f => f.target === t);
  if (!n || n.length === 0) return r;
  let s = n[0].ignoreProperties;
  return r.filter(f => s.indexOf(f) === -1);
}
function et(t, r, i, n) {
  if (!t) return;
  let s = ut(t, r, i);
  ot(t, s, n);
}
function Ze(t) {
  return Object.getOwnPropertyNames(t)
    .filter(r => r.startsWith('on') && r.length > 2)
    .map(r => r.substring(2));
}
function Ot(t, r) {
  if ((Se && !rt) || Zone[t.symbol('patchEvents')]) return;
  let i = r.__Zone_ignore_on_properties,
    n = [];
  if (Be) {
    let s = window;
    n = n.concat([
      'Document',
      'SVGElement',
      'Element',
      'HTMLElement',
      'HTMLBodyElement',
      'HTMLMediaElement',
      'HTMLFrameSetElement',
      'HTMLFrameElement',
      'HTMLIFrameElement',
      'HTMLMarqueeElement',
      'Worker',
    ]);
    let f = kt() ? [{ target: s, ignoreProperties: ['error'] }] : [];
    et(s, Ze(s), i && i.concat(f), je(s));
  }
  n = n.concat([
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'IDBIndex',
    'IDBRequest',
    'IDBOpenDBRequest',
    'IDBDatabase',
    'IDBTransaction',
    'IDBCursor',
    'WebSocket',
  ]);
  for (let s = 0; s < n.length; s++) {
    let f = r[n[s]];
    f && f.prototype && et(f.prototype, Ze(f.prototype), i);
  }
}
function Nt(t) {
  t.__load_patch('legacy', r => {
    let i = r[t.__symbol__('legacyPatch')];
    i && i();
  }),
    t.__load_patch('timers', r => {
      let i = 'set',
        n = 'clear';
      ye(r, i, n, 'Timeout'), ye(r, i, n, 'Interval'), ye(r, i, n, 'Immediate');
    }),
    t.__load_patch('requestAnimationFrame', r => {
      ye(r, 'request', 'cancel', 'AnimationFrame'),
        ye(r, 'mozRequest', 'mozCancel', 'AnimationFrame'),
        ye(r, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    }),
    t.__load_patch('blocking', (r, i) => {
      let n = ['alert', 'prompt', 'confirm'];
      for (let s = 0; s < n.length; s++) {
        let f = n[s];
        fe(
          r,
          f,
          (T, g, p) =>
            function (C, E) {
              return i.current.run(T, r, E, p);
            },
        );
      }
    }),
    t.__load_patch('EventTarget', (r, i, n) => {
      St(r, n), Dt(r, n);
      let s = r.XMLHttpRequestEventTarget;
      s && s.prototype && n.patchEventTarget(r, n, [s.prototype]);
    }),
    t.__load_patch('MutationObserver', (r, i, n) => {
      ve('MutationObserver'), ve('WebKitMutationObserver');
    }),
    t.__load_patch('IntersectionObserver', (r, i, n) => {
      ve('IntersectionObserver');
    }),
    t.__load_patch('FileReader', (r, i, n) => {
      ve('FileReader');
    }),
    t.__load_patch('on_property', (r, i, n) => {
      Ot(n, r);
    }),
    t.__load_patch('customElements', (r, i, n) => {
      Ct(r, n);
    }),
    t.__load_patch('XHR', (r, i) => {
      C(r);
      let n = x('xhrTask'),
        s = x('xhrSync'),
        f = x('xhrListener'),
        T = x('xhrScheduled'),
        g = x('xhrURL'),
        p = x('xhrErrorBeforeScheduled');
      function C(E) {
        let P = E.XMLHttpRequest;
        if (!P) return;
        let j = P.prototype;
        function V(w) {
          return w[n];
        }
        let z = j[Le],
          J = j[Ie];
        if (!z) {
          let w = E.XMLHttpRequestEventTarget;
          if (w) {
            let b = w.prototype;
            (z = b[Le]), (J = b[Ie]);
          }
        }
        let K = 'readystatechange',
          X = 'scheduled';
        function k(w) {
          let b = w.data,
            S = b.target;
          (S[T] = !1), (S[p] = !1);
          let Q = S[f];
          z || ((z = S[Le]), (J = S[Ie])), Q && J.call(S, K, Q);
          let q = (S[f] = () => {
            if (S.readyState === S.DONE)
              if (!b.aborted && S[T] && w.state === X) {
                let _ = S[i.__symbol__('loadfalse')];
                if (S.status !== 0 && _ && _.length > 0) {
                  let c = w.invoke;
                  (w.invoke = function () {
                    let e = S[i.__symbol__('loadfalse')];
                    for (let d = 0; d < e.length; d++)
                      e[d] === w && e.splice(d, 1);
                    !b.aborted && w.state === X && c.call(w);
                  }),
                    _.push(w);
                } else w.invoke();
              } else !b.aborted && S[T] === !1 && (S[p] = !0);
          });
          return (
            z.call(S, K, q),
            S[n] || (S[n] = w),
            W.apply(S, b.args),
            (S[T] = !0),
            w
          );
        }
        function h() {}
        function H(w) {
          let b = w.data;
          return (b.aborted = !0), L.apply(b.target, b.args);
        }
        let G = fe(
            j,
            'open',
            () =>
              function (w, b) {
                return (w[s] = b[2] == !1), (w[g] = b[1]), G.apply(w, b);
              },
          ),
          Y = 'XMLHttpRequest.send',
          F = x('fetchTaskAborting'),
          y = x('fetchTaskScheduling'),
          W = fe(
            j,
            'send',
            () =>
              function (w, b) {
                if (i.current[y] === !0 || w[s]) return W.apply(w, b);
                {
                  let S = {
                      target: w,
                      url: w[g],
                      isPeriodic: !1,
                      args: b,
                      aborted: !1,
                    },
                    Q = Ge(Y, h, S, k, H);
                  w && w[p] === !0 && !S.aborted && Q.state === X && Q.invoke();
                }
              },
          ),
          L = fe(
            j,
            'abort',
            () =>
              function (w, b) {
                let S = V(w);
                if (S && typeof S.type == 'string') {
                  if (S.cancelFn == null || (S.data && S.data.aborted)) return;
                  S.zone.cancelTask(S);
                } else if (i.current[F] === !0) return L.apply(w, b);
              },
          );
      }
    }),
    t.__load_patch('geolocation', r => {
      r.navigator &&
        r.navigator.geolocation &&
        yt(r.navigator.geolocation, ['getCurrentPosition', 'watchPosition']);
    }),
    t.__load_patch('PromiseRejectionEvent', (r, i) => {
      function n(s) {
        return function (f) {
          lt(r, s).forEach(g => {
            let p = r.PromiseRejectionEvent;
            if (p) {
              let C = new p(s, { promise: f.promise, reason: f.rejection });
              g.invoke(C);
            }
          });
        };
      }
      r.PromiseRejectionEvent &&
        ((i[x('unhandledPromiseRejectionHandler')] = n('unhandledrejection')),
        (i[x('rejectionHandledHandler')] = n('rejectionhandled')));
    }),
    t.__load_patch('queueMicrotask', (r, i, n) => {
      Rt(r, n);
    });
}
function Lt(t) {
  t.__load_patch('ZoneAwarePromise', (r, i, n) => {
    let s = Object.getOwnPropertyDescriptor,
      f = Object.defineProperty;
    function T(l) {
      if (l && l.toString === Object.prototype.toString) {
        let a = l.constructor && l.constructor.name;
        return (a || '') + ': ' + JSON.stringify(l);
      }
      return l ? l.toString() : Object.prototype.toString.call(l);
    }
    let g = n.symbol,
      p = [],
      C = r[g('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] !== !1,
      E = g('Promise'),
      P = g('then'),
      j = '__creationTrace__';
    (n.onUnhandledError = l => {
      if (n.showUncaughtError()) {
        let a = l && l.rejection;
        a
          ? console.error(
              'Unhandled Promise rejection:',
              a instanceof Error ? a.message : a,
              '; Zone:',
              l.zone.name,
              '; Task:',
              l.task && l.task.source,
              '; Value:',
              a,
              a instanceof Error ? a.stack : void 0,
            )
          : console.error(l);
      }
    }),
      (n.microtaskDrainDone = () => {
        for (; p.length; ) {
          let l = p.shift();
          try {
            l.zone.runGuarded(() => {
              throw l.throwOriginal ? l.rejection : l;
            });
          } catch (a) {
            z(a);
          }
        }
      });
    let V = g('unhandledPromiseRejectionHandler');
    function z(l) {
      n.onUnhandledError(l);
      try {
        let a = i[V];
        typeof a == 'function' && a.call(this, l);
      } catch {}
    }
    function J(l) {
      return l && l.then;
    }
    function K(l) {
      return l;
    }
    function X(l) {
      return D.reject(l);
    }
    let k = g('state'),
      h = g('value'),
      H = g('finally'),
      G = g('parentPromiseValue'),
      Y = g('parentPromiseState'),
      F = 'Promise.then',
      y = null,
      W = !0,
      L = !1,
      w = 0;
    function b(l, a) {
      return o => {
        try {
          M(l, a, o);
        } catch (u) {
          M(l, !1, u);
        }
      };
    }
    let S = function () {
        let l = !1;
        return function (o) {
          return function () {
            l || ((l = !0), o.apply(null, arguments));
          };
        };
      },
      Q = 'Promise resolved with itself',
      q = g('currentTaskTrace');
    function M(l, a, o) {
      let u = S();
      if (l === o) throw new TypeError(Q);
      if (l[k] === y) {
        let v = null;
        try {
          (typeof o == 'object' || typeof o == 'function') && (v = o && o.then);
        } catch (R) {
          return (
            u(() => {
              M(l, !1, R);
            })(),
            l
          );
        }
        if (
          a !== L &&
          o instanceof D &&
          o.hasOwnProperty(k) &&
          o.hasOwnProperty(h) &&
          o[k] !== y
        )
          c(o), M(l, o[k], o[h]);
        else if (a !== L && typeof v == 'function')
          try {
            v.call(o, u(b(l, a)), u(b(l, !1)));
          } catch (R) {
            u(() => {
              M(l, !1, R);
            })();
          }
        else {
          l[k] = a;
          let R = l[h];
          if (
            ((l[h] = o),
            l[H] === H && a === W && ((l[k] = l[Y]), (l[h] = l[G])),
            a === L && o instanceof Error)
          ) {
            let m =
              i.currentTask && i.currentTask.data && i.currentTask.data[j];
            m &&
              f(o, q, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: m,
              });
          }
          for (let m = 0; m < R.length; ) e(l, R[m++], R[m++], R[m++], R[m++]);
          if (R.length == 0 && a == L) {
            l[k] = w;
            let m = o;
            try {
              throw new Error(
                'Uncaught (in promise): ' +
                  T(o) +
                  (o && o.stack
                    ? `
` + o.stack
                    : ''),
              );
            } catch (I) {
              m = I;
            }
            C && (m.throwOriginal = !0),
              (m.rejection = o),
              (m.promise = l),
              (m.zone = i.current),
              (m.task = i.currentTask),
              p.push(m),
              n.scheduleMicroTask();
          }
        }
      }
      return l;
    }
    let _ = g('rejectionHandledHandler');
    function c(l) {
      if (l[k] === w) {
        try {
          let a = i[_];
          a &&
            typeof a == 'function' &&
            a.call(this, { rejection: l[h], promise: l });
        } catch {}
        l[k] = L;
        for (let a = 0; a < p.length; a++) l === p[a].promise && p.splice(a, 1);
      }
    }
    function e(l, a, o, u, v) {
      c(l);
      let R = l[k],
        m = R
          ? typeof u == 'function'
            ? u
            : K
          : typeof v == 'function'
            ? v
            : X;
      a.scheduleMicroTask(
        F,
        () => {
          try {
            let I = l[h],
              Z = !!o && H === o[H];
            Z && ((o[G] = I), (o[Y] = R));
            let A = a.run(m, void 0, Z && m !== X && m !== K ? [] : [I]);
            M(o, !0, A);
          } catch (I) {
            M(o, !1, I);
          }
        },
        o,
      );
    }
    let d = 'function ZoneAwarePromise() { [native code] }',
      O = function () {},
      N = r.AggregateError;
    class D {
      static toString() {
        return d;
      }
      static resolve(a) {
        return a instanceof D ? a : M(new this(null), W, a);
      }
      static reject(a) {
        return M(new this(null), L, a);
      }
      static withResolvers() {
        let a = {};
        return (
          (a.promise = new D((o, u) => {
            (a.resolve = o), (a.reject = u);
          })),
          a
        );
      }
      static any(a) {
        if (!a || typeof a[Symbol.iterator] != 'function')
          return Promise.reject(new N([], 'All promises were rejected'));
        let o = [],
          u = 0;
        try {
          for (let m of a) u++, o.push(D.resolve(m));
        } catch {
          return Promise.reject(new N([], 'All promises were rejected'));
        }
        if (u === 0)
          return Promise.reject(new N([], 'All promises were rejected'));
        let v = !1,
          R = [];
        return new D((m, I) => {
          for (let Z = 0; Z < o.length; Z++)
            o[Z].then(
              A => {
                v || ((v = !0), m(A));
              },
              A => {
                R.push(A),
                  u--,
                  u === 0 &&
                    ((v = !0), I(new N(R, 'All promises were rejected')));
              },
            );
        });
      }
      static race(a) {
        let o,
          u,
          v = new this((I, Z) => {
            (o = I), (u = Z);
          });
        function R(I) {
          o(I);
        }
        function m(I) {
          u(I);
        }
        for (let I of a) J(I) || (I = this.resolve(I)), I.then(R, m);
        return v;
      }
      static all(a) {
        return D.allWithCallback(a);
      }
      static allSettled(a) {
        return (this && this.prototype instanceof D ? this : D).allWithCallback(
          a,
          {
            thenCallback: u => ({ status: 'fulfilled', value: u }),
            errorCallback: u => ({ status: 'rejected', reason: u }),
          },
        );
      }
      static allWithCallback(a, o) {
        let u,
          v,
          R = new this((A, B) => {
            (u = A), (v = B);
          }),
          m = 2,
          I = 0,
          Z = [];
        for (let A of a) {
          J(A) || (A = this.resolve(A));
          let B = I;
          try {
            A.then(
              U => {
                (Z[B] = o ? o.thenCallback(U) : U), m--, m === 0 && u(Z);
              },
              U => {
                o ? ((Z[B] = o.errorCallback(U)), m--, m === 0 && u(Z)) : v(U);
              },
            );
          } catch (U) {
            v(U);
          }
          m++, I++;
        }
        return (m -= 2), m === 0 && u(Z), R;
      }
      constructor(a) {
        let o = this;
        if (!(o instanceof D))
          throw new Error('Must be an instanceof Promise.');
        (o[k] = y), (o[h] = []);
        try {
          let u = S();
          a && a(u(b(o, W)), u(b(o, L)));
        } catch (u) {
          M(o, !1, u);
        }
      }
      get [Symbol.toStringTag]() {
        return 'Promise';
      }
      get [Symbol.species]() {
        return D;
      }
      then(a, o) {
        let u = this.constructor?.[Symbol.species];
        (!u || typeof u != 'function') && (u = this.constructor || D);
        let v = new u(O),
          R = i.current;
        return this[k] == y ? this[h].push(R, v, a, o) : e(this, R, v, a, o), v;
      }
      catch(a) {
        return this.then(null, a);
      }
      finally(a) {
        let o = this.constructor?.[Symbol.species];
        (!o || typeof o != 'function') && (o = D);
        let u = new o(O);
        u[H] = H;
        let v = i.current;
        return this[k] == y ? this[h].push(v, u, a, a) : e(this, v, u, a, a), u;
      }
    }
    (D.resolve = D.resolve),
      (D.reject = D.reject),
      (D.race = D.race),
      (D.all = D.all);
    let _e = (r[E] = r.Promise);
    r.Promise = D;
    let ae = g('thenPatched');
    function ne(l) {
      let a = l.prototype,
        o = s(a, 'then');
      if (o && (o.writable === !1 || !o.configurable)) return;
      let u = a.then;
      (a[P] = u),
        (l.prototype.then = function (v, R) {
          return new D((I, Z) => {
            u.call(this, I, Z);
          }).then(v, R);
        }),
        (l[ae] = !0);
    }
    n.patchThen = ne;
    function Ee(l) {
      return function (a, o) {
        let u = l.apply(a, o);
        if (u instanceof D) return u;
        let v = u.constructor;
        return v[ae] || ne(v), u;
      };
    }
    return (
      _e && (ne(_e), fe(r, 'fetch', l => Ee(l))),
      (Promise[i.__symbol__('uncaughtPromiseErrors')] = p),
      D
    );
  });
}
function It(t) {
  t.__load_patch('toString', r => {
    let i = Function.prototype.toString,
      n = x('OriginalDelegate'),
      s = x('Promise'),
      f = x('Error'),
      T = function () {
        if (typeof this == 'function') {
          let E = this[n];
          if (E)
            return typeof E == 'function'
              ? i.call(E)
              : Object.prototype.toString.call(E);
          if (this === Promise) {
            let P = r[s];
            if (P) return i.call(P);
          }
          if (this === Error) {
            let P = r[f];
            if (P) return i.call(P);
          }
        }
        return i.call(this);
      };
    (T[n] = i), (Function.prototype.toString = T);
    let g = Object.prototype.toString,
      p = '[object Promise]';
    Object.prototype.toString = function () {
      return typeof Promise == 'function' && this instanceof Promise
        ? p
        : g.call(this);
    };
  });
}
function Mt(t, r, i, n, s) {
  let f = Zone.__symbol__(n);
  if (r[f]) return;
  let T = (r[f] = r[n]);
  (r[n] = function (g, p, C) {
    return (
      p &&
        p.prototype &&
        s.forEach(function (E) {
          let P = `${i}.${n}::` + E,
            j = p.prototype;
          try {
            if (j.hasOwnProperty(E)) {
              let V = t.ObjectGetOwnPropertyDescriptor(j, E);
              V && V.value
                ? ((V.value = t.wrapWithCurrentZone(V.value, P)),
                  t._redefineProperty(p.prototype, E, V))
                : j[E] && (j[E] = t.wrapWithCurrentZone(j[E], P));
            } else j[E] && (j[E] = t.wrapWithCurrentZone(j[E], P));
          } catch {}
        }),
      T.call(r, g, p, C)
    );
  }),
    t.attachOriginToPatched(r[n], T);
}
function Zt(t) {
  t.__load_patch('util', (r, i, n) => {
    let s = Ze(r);
    (n.patchOnProperties = ot),
      (n.patchMethod = fe),
      (n.bindArguments = Fe),
      (n.patchMacroTask = pt);
    let f = i.__symbol__('BLACK_LISTED_EVENTS'),
      T = i.__symbol__('UNPATCHED_EVENTS');
    r[T] && (r[f] = r[T]),
      r[f] && (i[f] = i[T] = r[f]),
      (n.patchEventPrototype = wt),
      (n.patchEventTarget = Pt),
      (n.isIEOrEdge = vt),
      (n.ObjectDefineProperty = Ae),
      (n.ObjectGetOwnPropertyDescriptor = be),
      (n.ObjectCreate = Et),
      (n.ArraySlice = Tt),
      (n.patchClass = ve),
      (n.wrapWithCurrentZone = Ve),
      (n.filterProperties = ut),
      (n.attachOriginToPatched = he),
      (n._redefineProperty = Object.defineProperty),
      (n.patchCallbacks = Mt),
      (n.getGlobalObjects = () => ({
        globalSources: st,
        zoneSymbolEventNames: te,
        eventNames: s,
        isBrowser: Be,
        isMix: rt,
        isNode: Se,
        TRUE_STR: le,
        FALSE_STR: ue,
        ZONE_SYMBOL_PREFIX: Pe,
        ADD_EVENT_LISTENER_STR: He,
        REMOVE_EVENT_LISTENER_STR: xe,
      }));
  });
}
function At(t) {
  Lt(t), It(t), Zt(t);
}
var ft = _t();
At(ft);
Nt(ft);
